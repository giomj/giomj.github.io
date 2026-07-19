# CBJG Firmware Skeleton v0 (Pre-Council Draft)
**Doc:** FW-SKEL-01 · **Rev:** v0.1 · 2026-07-17
**Target:** STM32G474RET6 @ 170 MHz, DRV8353RS gate driver, 3× INA240A2 phase shunts, 48 V bus
**Language:** C11 for HAL/ISR, C++17 header-only for math (no heap, no exceptions, no RTTI)
**Toolchain:** arm-none-eabi-gcc 12.x, CMake, OpenOCD/ST-Link, Segger Ozone for tracing

This is the pre-council skeleton. The council will critique it; expect breaking changes after review.

---

## 0. Design commitments (non-negotiable)

1. **STO path is hardware-latched and firmware-independent.** DRV8353 nFAULT + comparator OCP + thermal switch → SR latch → PWM enable low. Firmware can *read* the latch, cannot clear it without a physical reset input.
2. **Zero dynamic allocation.** No `malloc`, no `new`, no VLAs. All buffers are static.
3. **No blocking calls in ISRs.** ISRs take ≤ their budget or fault.
4. **All floats are `float`, not `double`.** STM32G4 has single-precision FPU only; a stray `double` triples cycle count.
5. **Every ISR increments a heartbeat counter.** Watchdog verifies all four (L0/L1/L2/L3) advance.
6. **Every write to a shared variable is either atomic (`uint32_t` aligned) or protected by disabling only the affected IRQ, never `__disable_irq()` globally.**
7. **CUSUM `G_k` uses distinct symbol from innovation-covariance `S_k` in code (`cusum_stat` vs `innov_cov`).** Per GPT-5's council-1 finding.
8. **Halls are ground truth at startup and low speed; EKF/SMO are overlays.** Per Gemini's council-1 finding on HFI/SPM saliency.

---

## 1. Directory tree

```
firmware/
├── CMakeLists.txt
├── linker/
│   └── stm32g474.ld              # 512K flash, 128K SRAM, CCM at 0x10000000
├── startup/
│   └── startup_stm32g474.s
├── app/
│   ├── main.c                    # bootstrap, systick, scheduler entry
│   ├── config.h                  # motor params, gains, thresholds
│   ├── build_info.h              # git SHA, build timestamp (generated)
│   └── isr_vectors.c             # explicit vector table with priorities
├── hal/
│   ├── clock.c                   # 170 MHz PLL, HSE 24 MHz
│   ├── pwm.c                     # TIM1 center-aligned complementary, 20 kHz
│   ├── adc.c                     # ADC1/2/3 synchronized to PWM center
│   ├── dma.c                     # ADC → static buffer, no interrupts
│   ├── hall.c                    # TIM4 XOR-mode capture
│   ├── uart.c                    # USB-CDC over USB-FS
│   ├── canfd.c                   # FDCAN1 500 kbps arb / 2 Mbps data (optional)
│   ├── gpio.c                    # discrete I/O map
│   └── mpu.c                     # MPU regions: CCM = privileged, stack guard
├── control/
│   ├── clarke_park.h/c           # CORDIC-accelerated, inline
│   ├── pi_current.h/c            # complex-vector PI, anti-windup, decoupling
│   ├── svpwm.h/c                 # min-max SVM, 7-segment
│   ├── deadtime_comp.h/c         # sign(iq) → v_dt correction
│   └── mtpa.h/c                  # SPM: iq* only; IPM: LUT (stubbed for future)
├── observer/
│   ├── ekf.h/c                   # 6-state EKF: [id, iq, ω, θ, Rs, TL]
│   ├── smo.h/c                   # sliding-mode back-EMF, hi-freq chatter filter
│   ├── hfi.h/c                   # off by default; research-mode injection
│   ├── fuser.h/c                 # angle source arbitrator
│   └── observability.h/c         # Gramian singular value monitor
├── rsd/
│   ├── thermal_2node.h/c         # T_cu, T_fe first-order ODE
│   ├── eig_scheduler.h/c         # info-per-joule w/ satisficing bound
│   ├── cusum.h/c                 # G_k on NIS
│   ├── energy_acct.h/c           # J_bus, J_cu, J_fe, J_output
│   └── param_id.h/c              # slow Rs(T), ψm drift, RLS
├── safety/
│   ├── sto.h/c                   # STO state machine (mirrors HW latch)
│   ├── faults.h/c                # fault registry + code enum
│   ├── watchdog.h/c              # IWDG + heartbeat verification
│   └── limits.h                  # hard limits (I_max, V_max, T_max, ω_max)
├── comms/
│   ├── logger.h/c                # ring buffer → USB-CDC, best-effort
│   ├── cli.h/c                   # simple line-oriented command shell
│   └── proto.h                   # binary log record format (versioned)
└── util/
    ├── ringbuf.h                 # SPSC, lock-free, power-of-2 size
    ├── atomic.h                  # __atomic_* wrappers, memory_order helpers
    ├── fixed.h                   # Q-format helpers (Q1.15, Q2.30 only)
    └── math_stubs.h              # sinf/cosf via CORDIC, fast_atan2
```

**LOC estimate:** ~5.5 k RSD/control/observer, ~3 k HAL, ~1 k safety, ~1 k comms + util = **~10.5 k total.**

---

## 2. ISR / task priorities

| Handler | NVIC prio | Preempts | Budget | Trigger |
|---|--:|---|--:|---|
| `HardFault_Handler` | -1 | everything | — | CPU fault |
| `TIM1_UP_IRQHandler` (L0 current loop) | 0 | all app IRQs | 30 µs | PWM center compare |
| `EXTI_nFAULT_IRQHandler` | 0 | all app IRQs | 5 µs | DRV8353 nFAULT edge |
| `TIM2_IRQHandler` (L1 observer 10 kHz) | 1 | L2/L3 | 60 µs | 100 µs periodic |
| `TIM6_IRQHandler` (L2 speed loop 1 kHz) | 2 | L3 only | 100 µs | 1 ms periodic |
| `SysTick_Handler` (L3 100 Hz + tick) | 3 | none | 2 ms | 1 ms tick, dispatch 100 Hz job |
| `USB_LP_IRQHandler` (logging) | 4 | none | best-effort | USB events |
| `main()` background loop | — | none | slack | infinite loop |

**Rule:** priority 0 ISRs must not touch anything but hardware registers and pre-allocated Q1.15/Q2.30 variables. No float in the fault handler; no logging in L0.

---

## 3. Memory layout

| Region | Base | Size | Usage |
|---|---|--:|---|
| Flash | 0x0800_0000 | 512 KB | code + rodata + LUTs |
| SRAM1 | 0x2000_0000 | 80 KB | heap-free .data, .bss, main stack |
| SRAM2 | 0x2001_4000 | 16 KB | logging ring buffer only |
| CCM SRAM | 0x1000_0000 | 32 KB | ISR stacks, EKF state, `P` matrix (hot data) |
| Backup SRAM | 0x4002_4000 | 4 KB | fault log across reset |

- **Main stack:** 4 KB, guarded by MPU region 0 (RW → fault on overflow).
- **PSP (thread mode):** unused; we run everything in handler mode + main.
- **EKF `P` (6×6 float):** 144 B in CCM, kept cache-hot.
- **DMA buffers:** SRAM1, 32-byte aligned, `__attribute__((section(".dma")))`.

---

## 4. Module public APIs (headers only — bodies come in impl phase)

### `control/pi_current.h`
```c
typedef struct {
    float kp, ki;              // gains in V per A and V per A·s
    float integ_d, integ_q;    // clamped integrator states
    float v_max;               // per-axis clamp (SVM circle limit handles the rest)
} pi_current_t;

/* Reset integrator on mode change or STO release. Idempotent. */
void pi_current_reset(pi_current_t *pi);

/* One-shot update. Returns commanded vd, vq. Anti-windup: back-calculation from clamped SVM. */
void pi_current_update(pi_current_t *pi,
                       float id_ref, float iq_ref,
                       float id_meas, float iq_meas,
                       float omega_e, float psi_m,   // for decoupling
                       float *vd_out, float *vq_out);
```

### `observer/ekf.h`
```c
typedef struct {
    float x[6];       // [id, iq, omega, theta, Rs, TL]
    float P[36];      // row-major covariance
    float Q_diag[6];  // process noise
    float R_diag[3];  // measurement noise (id, iq, omega_hall)
} ekf_t;

typedef struct {
    float id_meas, iq_meas;
    float vd_cmd, vq_cmd;      // applied, dead-time compensated
    float omega_hall;          // NAN if not available
    float dt;                  // seconds since last update
} ekf_input_t;

/* Time update + measurement update fused. Returns NIS (normalized innovation squared). */
float ekf_step(ekf_t *ekf, const ekf_input_t *u);

/* Reset to a known-good state (used on STO release). */
void ekf_reinit(ekf_t *ekf, float theta_hall_initial);
```

### `rsd/cusum.h`
```c
typedef struct {
    float g;                   // running statistic (formerly S_k, renamed)
    float threshold;           // gamma
    float drift;               // k, expected mean of NIS under H0 (= dof/2)
    uint32_t trip_count;
    uint32_t last_trip_tick;
} cusum_t;

/* Update with new NIS sample. Returns true when g exceeds threshold this call. */
bool cusum_update(cusum_t *c, float nis, uint32_t tick_now);
```

### `rsd/eig_scheduler.h`
```c
typedef enum {
    RSD_MODE_HALL_ONLY,
    RSD_MODE_SENSORLESS,
    RSD_MODE_HFI_PROBE,     // research only; refuses to enable if I_ref > 50% rated
    RSD_MODE_STO
} rsd_mode_t;

typedef struct {
    /* Costs */
    float joule_hfi;         // predicted joules to run a probe
    float joule_baseline;    // joules to just track passively
    /* Information */
    float eig_hfi_estimate;  // expected bits gained
    float eig_baseline_estimate;
    /* Satisficing bound (Gemini's constraint) */
    float eig_target_bits;   // stop probing above this
    float p_confidence;      // p(state estimate is "good enough")
} eig_ctx_t;

/* Returns recommended mode. Deterministic; no RNG. */
rsd_mode_t eig_schedule(const eig_ctx_t *ctx, rsd_mode_t current);
```

### `safety/sto.h`
```c
typedef enum {
    STO_UNKNOWN = 0, STO_ARMED, STO_LATCHED
} sto_state_t;

/* Reads the hardware latch pin. Does not clear. */
sto_state_t sto_read_hw(void);

/* Command a firmware-side STO (writes PWM_EN low, records fault code). */
void sto_assert(uint16_t fault_code);

/* Attempt release. Only succeeds if hardware latch is clear and no active fault. */
bool sto_try_release(void);
```

---

## 5. State machine (canonical)

```
                    power on
                       │
                       ▼
                 ┌──────────┐
                 │  INIT    │ hal init, self-test, MPU on
                 └────┬─────┘
      self-test fail  │  self-test pass
        ┌─────────────┘
        ▼                  ▼
    ┌──────┐        ┌───────────┐
    │ HALT │        │ PRECHARGE │ bus cap through 50Ω R for 500 ms
    └──────┘        └────┬──────┘
                         │ Vbus > 0.95×Vsupply
                         ▼
                    ┌──────────┐
                    │  ARMED   │ contactor closed, PWM disabled
                    └────┬─────┘
       cli "run" cmd │  │ any fault → STO
                    ▼   │
                 ┌──────┴───┐
                 │   RUN    │ closed-loop FOC, EKF tracking
                 └────┬─────┘
                      │
     ─────────────────┼──────────────────
     any fault: OVP/UVP/OCP/OTP/CUSUM/nFAULT/E-stop/enclosure
                      ▼
                 ┌──────────┐
                 │   STO    │ PWM latched off in HW,
                 │          │ contactor open in ≤10 ms,
                 │          │ log dump to flash,
                 │          │ await physical reset
                 └──────────┘
```

**Transitions are one-way except ARMED↔RUN.** STO exit requires physical reset (button + timing lockout).

---

## 6. Logging protocol

Binary frames, versioned, little-endian:

```c
typedef struct __attribute__((packed)) {
    uint32_t tick_us;
    uint16_t frame_type;      // enum
    uint16_t length;
    uint8_t  payload[];
    /* crc16 appended */
} log_frame_t;
```

Frame types: `STATE_10HZ`, `EKF_100HZ`, `L0_CURRENTS_1HZ_DECIM`, `FAULT`, `MODE_CHANGE`, `ENERGY_10HZ`.

Ring buffer is SPSC in SRAM2 (16 KB). Overflow drops oldest, increments a counter, sets a flag; never blocks.

---

## 7. Test hooks (in-firmware)

- **Signal injection:** CLI can request a summed sine or chirp on `iq_ref` for frequency-response ID.
- **Fault injection:** CLI can force `CUSUM_TRIP`, `THERM_OVERTEMP`, or `NFAULT_SIM` to verify the STO path from firmware down through hardware.
- **Replay mode:** if a UART frame with `INPUT_REPLAY` shows up, the observer runs on injected samples instead of live ADC. Used for regression tests on captured motor traces.

---

## 8. Open questions for the council

1. **Should the EKF run on the L0 tick (20 kHz) rather than L1 (10 kHz)?** GPT-5's earlier review estimated 60 µs at 10 kHz was safe. Would 20 kHz destabilize the timing budget, and is the extra bandwidth actually useful given phase-current bandwidth?
2. **Single vs dual EKF:** should there be a separate slow parameter EKF for `Rs, ψm, TL` at 100 Hz, isolated from the fast state EKF? Tradeoff is code complexity vs numerical conditioning.
3. **How do we prove the CUSUM threshold `γ`?** Offline synthetic-data NIS histograms are one path; is there a bring-up procedure using the actual motor that gives statistical justification without running the motor into a fault every tuning iteration?
4. **Hall glitch filter:** the state machine transitions on Hall edges. Do we need a debounce/median filter in `hal/hall.c` to survive noise on the phase cables? What time constant?
5. **Watchdog vs L3 hang:** if L3 (100 Hz) hangs but L0/L1/L2 keep running, is that safe or does that also require STO?
6. **CCM SRAM aliasing:** the STM32G4 CCM cannot be DMA target. Is the EKF `P` matrix hot enough to live in CCM (yes for latency, but any DMA-adjacent state on `P` becomes a hazard)?
7. **Firmware update path:** in-field bootloader over USB-DFU, or JTAG-only? For a benchtop rig, JTAG-only is defensible but locks in a physical dependency.
8. **What can go wrong that this skeleton hides?** (Adversarial review — the Gemini seat.)

---

## 9. Coding standards summary

- MISRA C:2012 mandatory rules only; advisories on a case-by-case basis.
- `-Wall -Wextra -Wpedantic -Werror -Wconversion -Wshadow -Wundef -Wswitch-enum -Wstrict-prototypes -Wdouble-promotion`.
- `-ffreestanding -fno-common -fstack-usage -fno-exceptions -fno-rtti (for C++)`.
- Every ISR body annotated with `/* WCET: X µs @ 170 MHz measured, Y µs budget */`.
- `assert()` compiled in for debug builds only; release builds use a `fault_record()` shim that jumps to STO.
- Every module has a `<module>_self_test(void)` returning a bitmap; the INIT state runs all of them.
- Git SHA and build timestamp embedded in `.rodata` and printed at CLI banner.
