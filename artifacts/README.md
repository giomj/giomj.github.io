# CBJG — RSD-Controlled Benchtop BLDC Engine — Artifacts

Everything the grand council produced for building a benchtop 3-phase brushless-PM engine that runs the RSD (Recursive State Dynamics) estimator + scheduler stack as its control layer.

## Read in this order

1. **`01_rsd_foundations/rsd_math_foundations.md`** — RSD mathematics applied to a BLDC motor (L=rotor state, K=parameter/thermal state, E=energy). Includes EKF, SMO, HFI, thermal 2-node, CUSUM/G_k fault detection, EIG-per-Joule scheduling.
2. **`02_council_reviews/`** — three independent model reviews:
   - `claude_em_review.md` — Electromagnetic design, topology, pole/slot, D²L sizing, marketplace SKUs.
   - `gpt5_power_review.md` — Power electronics: MOSFETs, gate driver, current sensing, bus caps, thermal, MCU, STO.
   - `gemini_safety_review.md` — Safety, sourcing pragmatics, brutal RSD critique, EIG scheduler runaway.
3. **`03_design_proposal/design_proposal.md`** — Council synthesis: convergences, divergence resolutions, final motor pick, bring-up plan, addendum to the foundations doc.
4. **`04_schematics_blueprints/`** — Power-stage schematic (text + PNG), mechanical dyno blueprint.
5. **`05_control_architecture/`** — Loop hierarchy, timing budget, firmware source layout, control PNG.
6. **`06_bom/`** — Master BOM (Markdown + CSV) with Marketplace + retail pricing, purchase sequence.

## Bottom line

- **Motor:** SPM outrunner — 6.5" hoverboard hub, $10–25 used from Facebook Marketplace, bought in pairs (DUT + regen load).
- **Bus:** 48 V nominal, 100 V-rated silicon for margin.
- **Inverter:** 6× IRFB4110PbF + DRV8353RS + 3× INA240A2 shunt sensing.
- **Controller:** STM32G474 (Nucleo-G474RE first).
- **Safety:** hardware-latched STO independent of firmware — E-stop, comparator OCP, thermal switch, bus OVP, watchdog all trip PWM in < 2 µs.
- **Budget:** ~$5,500 realistic Marketplace target with ~$700 contingency, fits comfortably in $10 k.
- **RSD scope:** estimator, thermal virtual-sensor, fault detector, energy-aware scheduler. **Not** a safety layer, not a novel-physics claim, not more efficient than a stock VESC in steady state.

## What RSD actually gives you (honest)

- Auditability — every control decision has an explicit covariance and innovation trace.
- Thermal virtual-sensing — winding temperature estimated online, gated by CRLB.
- Fault-detection latency — CUSUM on normalised innovation catches phase-open/demag faster than a commercial ESC's overcurrent trip.
- An information-per-joule scheduler that makes the exploration/exploitation trade explicit and boundable.

## What RSD does not give you

- No new physics. Motor is textbook Hanselman (2003).
- No free energy. Energy balance is clipped and honest.
- No promised efficiency win over a well-tuned FOC drive in steady state.
- No production-grade safety certification.

## Sources

- Hanselman, D. C. *Brushless Permanent Magnet Motor Design*, 2nd ed. Magna Physics Publishing, 2003. ISBN 1-881855-15-5.
- Waghmare, T. et al. "Design of Internal Permanent Magnet Brushless DC Motor Using ANSYS." *IJRPET* Vol. 2, Issue 4, April 2016. ISSN 2454-7875.
- User RSD project notes (v0.1, 2026-07-18) and repository at [github.com/giomj/dev](https://github.com/giomj/dev).
- Council seat citations inline in each review file.
