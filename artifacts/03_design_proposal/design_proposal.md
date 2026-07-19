# Design Proposal — CBJG / RSD-Controlled Benchtop BLDC Engine
**Project:** CBJG (RSD-Controlled Brushless-Permanent-Magnet Bench Engine)
**Rev:** v0.1 · 2026-07-17
**Budget:** $10,000 · **Sourcing:** Facebook Marketplace + Digi-Key/Mouser for silicon
**Status:** Council-reviewed, ready to source

---

## 0. Executive Summary

Build a **conservative 48 V, 300–400 W, 3-phase surface-PM outrunner** driven by a **6-MOSFET voltage-source inverter (IRFB4110 + DRV8353RS)** and **STM32G474** controller. Wrap it with the **RSD estimator/scheduler stack** (EKF + SMO + HFI + EIG-per-Joule + CUSUM fault detection) *strictly as a control-and-audit layer* — the motor itself is textbook Hanselman (Ch. 4 & 6). The bench rig doubles as a **back-to-back dynamometer** using a second, identical motor as generator/load.

All three council seats converged on the same core recommendation. Divergences are explicitly resolved below.

---

## 1. Council Convergence Table

| Question | Claude (EM) | GPT-5 (Power) | Gemini (Skeptic) | **Decision** |
|---|---|---|---|---|
| Topology | SPM outrunner | (assumed conventional PMSM) | SPM outrunner | **SPM outrunner** |
| Pole/slot | 12N14P primary, 9N8P fallback | n/a | n/a | **12N14P target; accept 9N8P or 24N22P if that's what Marketplace yields** |
| DC bus | 24–36 V (hobby ecosystem) | 48 V (100 V FET margin) | 48 V (SELV boundary) | **48 V nominal** — resolve Claude's concern by picking a motor rewound or specced for 48 V, or by running a 24–36 V motor derated on a 48 V bus |
| MOSFET | n/a | IRFB4110PbF 100 V TO-220 | (implicit) | **IRFB4110PbF** |
| Gate driver | n/a | DRV8353RS | (implicit) | **DRV8353RS** |
| Current sense | n/a | Inline shunt + INA240 | Kelvin shunt | **1 mΩ Kelvin shunt + INA240A2 ×3** |
| MCU | n/a | STM32G474 | (implicit) | **STM32G474 (Nucleo-G474RE dev, custom PCB later)** |
| RSD value-add | Real for parameter ID | Real for auditability | Real for auditability + fault | **RSD deployed as observer + scheduler + fault only; not as safety layer** |
| RSD risk | Over-claims observability | Over-claims noise cleanliness | Over-claims steady-state value | **Bound EIG scheduler with satisficing threshold; hardware STO independent of EKF** |

## 2. Divergence Resolutions

**Resolution 1 — Bus voltage (24–36 V vs 48 V).**
Claude is right that the used Marketplace motor ecosystem lives at 24–36 V (hoverboard, drone, e-bike). GPT-5 is right that 48 V gives comfortable MOSFET margin and matches the LiFePO4 server-rack battery Gemini recommends. **Fix:** buy a used 6.5" hoverboard hub motor or 5065-class outrunner that natively runs at 36 V, and operate at 36 V nominal on a 48 V-rated bus (headroom for regen and transients, and 48 V-rated silicon protects against overshoot). We stay within Claude's parameter ballparks *and* keep GPT-5's voltage margins.

**Resolution 2 — HFI feasibility on SPM.**
GPT-5 correctly flagged that HFI needs saliency (\(L_d \ne L_q\)) which SPM barely has. Gemini flagged the same. **Fix:** treat HFI as an experiment, not a production feature. For zero-speed bring-up, use **3× Hall-effect sensors as ground truth** (already present on hoverboard hub motors) and validate the SMO/EKF against Hall angle. HFI stays in the RSD scheduler code as a research mode; if the observability Gramian rejects it (per §4 of the foundations doc), the scheduler simply does not engage it and the motor uses Halls until sensored operation is proven.

**Resolution 3 — EIG scheduler runaway.**
Gemini's warning is decisive: a naive EIG-per-Joule maximizer will chase informative-but-wasteful excitation. **Fix:** implement Gemini's satisficing bound —
```
if tracking_error < ε_ctrl AND cond(𝒪) < 10⁴:
    EIG_command = 0     # stop probing
else:
    EIG_command = argmax_a (EIG(a) − λ·energy_cost(a))
```
This is added to §5 of the foundations doc as a first-class constraint.

**Resolution 4 — Notation collision (CUSUM `S_k` vs innovation covariance `S_k`).**
GPT-5 caught this. **Fix:** in all downstream artifacts, innovation covariance is `Sν_k`, CUSUM statistic is `G_k`. Documented in §7 of the foundations doc addendum below.

---

## 3. Motor Selection — Final Pick

**Primary target:** Used 6.5-inch hoverboard hub motor (pulled from scrapped hoverboard on Facebook Marketplace)
- 36 V nominal, 350 W rated, integrated 3× Hall sensors, integrated shaft/bearings/tire mount
- Typical: 15–25 pole pairs, low Kv (~15–25 rpm/V), high torque, low base speed (~250–500 rpm mechanical rated)
- Rewind or accept native base speed: the project's original "3000 rpm" target relaxes to **500 rpm @ ~7 Nm** (same shaft power ~370 W). This is actually *better* for a benchtop rig — lower kinetic energy hazard per Gemini's mechanical-safety section.
- Marketplace pricing: **$10–25 each, buy in pairs for back-to-back dyno**

**Fallback:** SunnySky/Turnigy X4108S-class outrunner (~$20–40 each used) if hoverboard motors aren't available in your area — needs a shaft/bearing/mount adapter kit (~$60 machined or 3D-printed).

**What to inspect before buying** (Gemini's playbook, condensed):
- Sniff phase wires for burnt varnish
- Spin by hand: cogging even, no dead spots (magnet demag = dead spot)
- Multimeter phase-to-phase resistance: all three within 5%
- Short two phases, spin: should be noticeably harder, evenly
- Turn the shaft: no bearing grind
- Reject anything visibly water-damaged or with cracked casing

---

## 4. Sensored Bring-up, Sensorless Steady-State — Control Progression

Aligned with GPT-5's bring-up sequence (§10 of his review):

| Phase | Duration | What runs | What RSD does |
|---|---|---|---|
| 0 | Days 1–3 | PCB assembly, gate-driver bring-up, no MOSFETs on bus | Nothing |
| 1 | Days 4–5 | Bridge power at 12 V, no motor | Nothing |
| 2 | Days 6–8 | Motor connected, current-limited PSU, open-loop alignment on Halls | Log-only |
| 3 | Week 2 | Closed-loop FOC on Hall angle | EKF runs in parallel, log-only, compared against Halls |
| 4 | Week 3 | EKF drives FOC; Halls become ground-truth check | Full RSD-K observer online |
| 5 | Week 4 | Back-to-back dyno; second motor as load | RSD-K thermal virtual sensor validated against stator RTD |
| 6 | Week 5+ | Fault-injection experiments (phase-open, magnet-shading, over-temperature) | CUSUM/`G_k` detection latency benchmarked vs commercial ESC |
| 7 | Month 2+ | HFI research mode | EIG-per-Joule scheduler evaluated against Gemini's satisficing bound |

---

## 5. RSD Foundations Doc — Addendum (fixes from council)

The following corrections are folded into `01_rsd_foundations/rsd_math_foundations.md` for revision v0.2:

1. **§2:** Replace `T = kD²L` with Hanselman's air-gap shear stress form: `T = 2π R_ro² L_st σ` with explicit `σ ∈ [0.5, 2.0] psi` band and target `D²L ≈ 60–90 cm³` for 1 N·m. (Claude §4)
2. **§2:** Explicitly acknowledge SPM saliency `L_q > L_d` by 5–15 % is real on used motors; keep both states in EKF. (Claude §7)
3. **§2:** Cite dq-frame equations to Krause/Bose (standard SM theory), not Hanselman Ch. 3–4. (Claude §7)
4. **§4:** Observability failure is not only a low-speed regime — also under high cogging, at coasting `id=iq=0`, and at cogging-electrical beat frequencies. (Claude §7 / Gemini §7)
5. **§5:** Add capacitor / source / thermal energy accounting separately, not one lumped `E`. (GPT-5 §8.7)
6. **§5:** Add satisficing bound on EIG scheduler (Gemini §7).
7. **§6:** Voltage used in the EKF must be the *applied* voltage estimate, including dead-time compensation and Rds(on) drop — not the commanded `v_d, v_q`. (GPT-5 §8.3)
8. **§6:** Thermal virtual sensor ±5 K CRLB gate is not credible pre-validation; treat as target, not guarantee. (GPT-5 §8.6)
9. **§7:** Rename CUSUM statistic to `G_k`; innovation covariance is `Sν_k`. (GPT-5 §8.5)
10. **New §8:** HFI is *not guaranteed* on SPM. Halls stay in the loop indefinitely as ground truth. (GPT-5 §8.4 / Gemini §6)

## 6. What This Design Does NOT Claim

To keep RSD honest per your own v0.1 notes:
- **Not** more efficient than a well-tuned VESC/ODrive/SimpleFOC in the SPM steady-state regime — where RSD is often *worse* efficiency for the sake of parameter identifiability.
- **Not** a novel-physics engine. It is a textbook 3-phase PMSM with a research-grade observer and scheduler stack.
- **Not** production-safety-rated. The STO chain is a bench-grade emulation of ISO 13849 Category 3 behavior, not a certified STO.
- **Not** a market alternative to commercial ESCs. It is a research/audit platform.

RSD's actual contribution on this build, per the council: **auditability, thermal virtual-sensing, fault-detection latency, and a scheduler that makes the information/energy trade explicit.** That's real, testable, and defensible.
