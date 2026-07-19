# Power Stage Schematic — 3-Phase 48V/500W Inverter
**Doc:** SCH-01 · **Rev:** v0.1

## Block-level topology

```
                     ┌───────────────────────────────── DC BUS (+48V nominal, 100V margin) ─────────────────────────────────┐
                     │                                                                                                        │
[48V LiFePO4] ─F1── K1 ────── R_pre ──[K2 bypass]──┬─── C_bulk (4.7mF/100V) ── C_film (10µF/100V) ── C_cer (per leg) ─┐        │
   Battery           │                              │                                                                  │        │
   Pack              │  V_bus sense                 │                                                                  │        │
                     │  (isol. or divider→ADC)      │                                                                  │        │
                                                    │                                                                  │        │
                                                    │      ┌─── Q1H ──┬───── PHASE A ──┬──── Q1L ──┐                    │        │
                                                    │      │          │                │           │                    │        │
                                                    │      │       Rshunt_A          Rshunt_A'    │                    │        │
                                                    │      │          │                │           │                    │        │
                                                    │      │      [INA240 A]                                          │        │
                                                    │      │                                                          │        │
                                                    ├──────┼─── Q2H ──┬───── PHASE B ──┬──── Q2L ──┼──── GND (BUS-)  ─┤        │
                                                    │      │       Rshunt_B          Rshunt_B'    │                    │        │
                                                    │      │      [INA240 B]                                          │        │
                                                    │      │                                                          │        │
                                                    │      └─── Q3H ──┬───── PHASE C ──┬──── Q3L ──┘                    │        │
                                                    │              Rshunt_C          Rshunt_C'                          │        │
                                                    │             [INA240 C]                                            │        │
                                                    │                                                                    │        │
                                                    └── R_bleed (10kΩ / 2W) ──────────── HV-PRESENT LED ─────────────────┘        │
                                                                                                                                  │
[E-STOP LOOP]  ── NC contacts feed contactor coil AND pull DRV8353 nFAULT/ENABLE low via hardware latch ──────────────────────────┘
```

## Bill of components (power stage only)

| Ref | Part | Value / P/N | Notes |
|---|---|---|---|
| F1 | DC fuse | 30A Class T (Littelfuse JLLN030) | Bolt to battery + |
| K1 | Main contactor | Gigavac GX11 or Albright SW180 (DC-rated) | ≥ 100A DC, coil driven from safety loop |
| K2 | Precharge bypass | Panasonic AQZ207 SSR or 60V/60A mech relay | Bypasses R_pre after V_bus > 0.9×V_supply |
| R_pre | Precharge resistor | 25Ω 25W wirewound | 5τ ≈ 590 ms |
| C_bulk | Electrolytic bank | 4× 1000µF 100V low-ESR (Nichicon LGN2A102MELB40) | Total 4mF, ESR ~15mΩ |
| C_film | Bus film cap | 10µF 100V polypropylene (WIMA DC-Link) | Physically closest to bridge |
| C_cer | Local decoupling | 1µF 100V X7R + 100nF 100V X7R per half-bridge | Kelvin loops < 10mm |
| Q1H–Q3L | MOSFETs (×6) | IRFB4110PbF (100V, 4.5mΩ, TO-220AB) | +2 spares |
| Rshunt_A/B/C | Kelvin shunt | 1mΩ, 3W, 4-terminal (Bourns CSS2H-2512K) | ×3 |
| INA240 | Current-sense amp | INA240A2 (gain 50, PWM-rejection) | ×3, biased 1.65V for bidir |
| R_bleed | Bus bleeder | 10kΩ 2W (Vishay RH) | τ = 47s discharge, warn on label |
| TVS | Bus TVS | SMDJ58A or 5KP60A | Standoff 58V, protects on regen |
| Gate driver | DRV8353RS (SPI variant) | TI DRV8353RSRGZR | 3-phase smart gate driver |
| MCU | STM32G474RE | ST Nucleo-G474RE first, custom PCB later | 170 MHz, CORDIC, FMAC, 5×ADC |
| Isolator | Debug/USB isolator | ADuM3160 or ISO7741 | Protect PC USB from bus faults |

## Layout rules (from GPT-5 council seat)

1. Split layout by half-bridge; keep each phase-leg loop area < 5 cm².
2. Kelvin source from MOSFET source pin to DRV8353 return, separate from power source copper.
3. Ceramic caps directly bridging local +BUS and −BUS at each leg, < 5 mm from FET drain.
4. Shunt resistor 4-terminal Kelvin sense traces routed as differential pair to INA240.
5. Gate resistor: 5–10 Ω turn-on, 2–5 Ω turn-off (split with diode).
6. Copper pour ≥ 2 oz for phase and bus rails; 4-layer PCB, inner planes = GND / BUS-.
7. All logic (MCU, DRV8353 digital side, ADC) referenced to a single quiet analog ground star.
8. Heatsink: 1.5–2.0 °C/W, with thermal-switch (60 °C NC) bolted next to hottest FET, feeding hardware latch.
9. Bus voltage divider → ADC through op-amp buffer; do NOT expose ADC pin to bus directly.
10. HV-present indicator LED on bleeder network, visible without opening enclosure.

## Interlock & STO chain (Gemini §5 + GPT-5 §7)

```
   ┌── E-STOP (NC, dual-channel, latching) ──┐
   │                                          │
   │   ┌─ Comparator overcurrent (per phase)─┤
   │   ├─ DRV8353 nFAULT ────────────────────┤
   │   ├─ Heatsink thermal switch (60°C NC) ─┤
   │   ├─ Stator thermal (NTC → comp) ───────┤
   │   ├─ Bus OVP (comparator > 58V) ────────┤
   │   ├─ Independent watchdog (IWDG) ───────┤
   │   └─ Human reset button ────────────────┤
   │                                          │
   ▼                                          ▼
[SAFETY LATCH IC (e.g., TPS3702 or discrete SR flip-flop with hardware reset)]
   │
   ├── pulls DRV8353 ENABLE → GND (immediate PWM disable)
   ├── opens K1 main contactor (via coil driver)
   └── signals MCU (NMI/EXTI) for logging/telemetry
```

**Any latch trip:** PWM disabled at the gate driver in ≤ 2 µs, main contactor opens in ~10 ms, bus bleeds through R_bleed. Reset requires: PWM commanded 0, throttle = 0, V_bus < 5 V (or precharge sequence restarted), plus human button press.
