# Control Architecture — RSD Estimator/Scheduler Stack
**Doc:** CTRL-01 · **Rev:** v0.1

## Loop hierarchy (running on STM32G474 @ 170 MHz)

```mermaid
flowchart TB
    subgraph HW["HARDWARE (analog + PWM)"]
        PWM[20 kHz center-aligned<br/>complementary PWM<br/>+ hardware dead-time]
        ADC["5× 12-bit ADC<br/>sync-triggered at PWM center<br/>i_a, i_b, i_c, V_bus, T_stator, T_heatsink"]
        HALL[3× Hall inputs<br/>+ optional E5 encoder]
        FAULT[Comparator OCP<br/>DRV8353 nFAULT<br/>Thermal switch<br/>→ hardware latch → PWM OFF]
    end

    subgraph L0["L0: Current loop @ 20 kHz"]
        CLARKE[Clarke transform<br/>iα, iβ ← ia, ib, ic]
        PARK[Park transform<br/>id, iq ← iα, iβ, θ̂]
        PICUR[PI current controllers<br/>vd*, vq* ← id*−id, iq*−iq]
        SVPWM[SVPWM modulator<br/>with dead-time comp]
    end

    subgraph L1["L1: Observer @ 10 kHz (RSD-K + RSD-L)"]
        SMO[Sliding-Mode Observer<br/>back-EMF → θ̂_SMO]
        EKF["EKF state: [id, iq, ω, θ, Rs, TL]<br/>innovation ν_k = z_k − h(x̂)<br/>χ² gating on ν"]
        FUSE[Angle fusion:<br/>Halls @ start, SMO @ ω &gt; 10%, EKF always]
        CUSUM["CUSUM G_k on NIS εₖ<br/>G_k &gt; γ → fault → STO"]
    end

    subgraph L2["L2: Torque/speed loop @ 1 kHz"]
        SPDPI[Speed PI → iq*]
        TRQLIM["MTPA limit + i_max clamp<br/>(Kt from EKF ψ̂m)"]
    end

    subgraph L3["L3: RSD scheduler @ 100 Hz"]
        THERM["2-state thermal model<br/>T̂_cu, T̂_fe<br/>vs measured T_stator"]
        EIG["EIG-per-Joule optimizer<br/>with satisficing bound<br/>(Gemini §7)"]
        DERATE[Current/torque derating<br/>from T̂_cu, T̂_fe, CRLB]
        MODE["Mode selector:<br/>{Halls, Sensorless, HFI probe, STO}"]
    end

    subgraph BG["Background @ 10 Hz"]
        LOG[Logging over USB-CDC or CAN-FD]
        PARID[Slow parameter drift ID<br/>Rs(T), ψm]
        HEALTH[Self-health report]
    end

    ADC --> CLARKE --> PARK --> PICUR --> SVPWM --> PWM
    HALL --> FUSE
    PARK --> EKF
    EKF --> FUSE
    FUSE --> PARK
    EKF -->|θ̂, ω̂| SMO
    SMO --> FUSE
    EKF --> CUSUM --> FAULT
    L2 --> PICUR
    THERM --> DERATE --> TRQLIM
    EIG --> MODE --> FUSE
    EIG --> PICUR
    L1 --> LOG
    L3 --> LOG
    EKF --> PARID
    PARID --> EKF
```

## Data flow summary

- **L0 (20 kHz)** is a bog-standard FOC current loop. If RSD adds nothing, this loop still runs the motor.
- **L1 (10 kHz)** is where RSD-K (parameter/state estimation) and RSD-L (localization) live. EKF *and* SMO run in parallel; the fuser picks based on regime (Halls at start-up, SMO at ω > 10 % rated, EKF always tracking).
- **L2 (1 kHz)** is the outer speed/torque loop — nothing exotic.
- **L3 (100 Hz)** is RSD's actual novelty layer: **thermal virtual-sensing + EIG-per-Joule scheduling + mode selection**. This is the loop that decides whether to inject HFI, throttle current for thermal reasons, or drop to STO on repeated CUSUM trips.
- **Background (10 Hz)** logs everything to CSV over USB-CDC (`x̂`, `P` diag, `ν`, `G_k`, applied `vd/vq`, `T̂_cu`, actions, energy accounting).

## Timing budget (worst case, per loop)

| Loop | Budget | Content |
|---|---|---|
| L0 @ 50 µs | ≤ 30 µs | ADC read (5 ch, DMA), Clarke/Park (CORDIC), 2× PI, SVPWM update |
| L1 @ 100 µs | ≤ 60 µs | 6-state EKF predict + update (Jacobian, 6×6 mat-mult, 3×3 innov inversion) + SMO |
| L2 @ 1 ms | ≤ 100 µs | Speed PI, MTPA lookup, trapezoidal ramp |
| L3 @ 10 ms | ≤ 2 ms | Thermal ODE integrate, EIG closed-form eval, mode logic |
| Background | slack | Logging, comms |

STM32G474 CORDIC + FMAC comfortably absorbs L0/L1 in the 60-µs window with margin per GPT-5's council seat.

## Signal chain — RSD innovation loop

```
                     motor phases
                          │
       Rshunt (1mΩ) ─────┼─── INA240 (G=50) ── 220Ω ─┬── 4.7nF ── STM32G4 ADC1/2/3
                                                        │
                                             (fc ≈ 154 kHz, well above 10 kHz EKF)
                                                        │
                          Vbus ─── divider ── buffer ──┴── STM32G4 ADC5
                          NTC(stator) ─── divider ────── STM32G4 ADC4
                          NTC(heatsink) ─── divider ──── STM32G4 ADC4 (channel)
                                                        │
             DRV8353 nFAULT / OCP ─── EXTI + hardware latch
                                                        │
                Halls A/B/C ─────── TIM4 capture
                Encoder A/B/Z (opt) ── TIM3 quadrature
```

## Fault-response state machine

```
    [INIT] ──precharge OK──► [ARMED] ──throttle > 0──► [RUN]
                                │                        │
                                └────STO_reset───────────┘
                                                         │
    From RUN, on any of:                                 │
      • CUSUM G_k > γ                                    │
      • Bus OVP/UVP                                      │
      • Thermal switch                                   ▼
      • DRV nFAULT                                    [FAULT]
      • Watchdog                                         │
      • E-stop                                           │
      • Enclosure open                                   │
                                                         ▼
                                                  [SAFE-TORQUE-OFF]
                                                    (PWM off,
                                                     contactor open,
                                                     log dump,
                                                     await human reset)
```

## Firmware architecture (source layout, C/C++17)

```
firmware/
  ├── app/
  │   ├── main.c                     # scheduler bootstrap, tick sources
  │   └── config.h                   # motor params, gains, thresholds
  ├── hal/                           # STM32G4 HAL wrappers
  ├── control/
  │   ├── clarke_park.c              # CORDIC-accelerated
  │   ├── pi_current.c               # anti-windup, complex-vector formulation
  │   ├── svpwm.c
  │   ├── deadtime_comp.c            # (GPT-5 §8.3 fix)
  │   └── mtpa.c
  ├── observer/
  │   ├── ekf.c                      # 6-state EKF, joint x + θp
  │   ├── smo.c                      # sliding-mode back-EMF observer
  │   ├── hfi.c                      # research-mode HFI injection
  │   ├── fuser.c                    # regime-based angle fusion
  │   └── observability.c            # Gramian condition-number monitor
  ├── rsd/
  │   ├── thermal_2node.c            # T̂_cu, T̂_fe integrator
  │   ├── eig_scheduler.c            # info-per-joule with satisficing (Gemini §7)
  │   ├── cusum.c                    # G_k fault detector
  │   └── energy_accounting.c        # bus / source / thermal split (GPT-5 §8.7)
  ├── safety/
  │   ├── sto.c                      # STO state machine
  │   ├── faults.c                   # fault registration
  │   └── watchdog.c
  └── comms/
      ├── usb_cdc_logger.c
      └── cli.c
```

Language: C for HAL/ISR, C++17 header-only for math (Eigen for offline validation only; on-target uses hand-written fixed-size linear algebra to keep ISR-safe).

Estimated LOC: ~6–8k lines for the RSD-specific code; another ~4k for HAL/scaffolding.
