# CBJG Firmware Skeleton — Council Synthesis v1
**Doc:** FW-SYNTH-01 · **Rev:** v0.1 · 2026-07-17
**Purpose:** Reconcile the three council reviews (Claude/architecture, GPT-5/real-time, Gemini/skeptic) into a revised firmware plan before writing any implementation code.

**Verdict from the council (unanimous):** the skeleton is not ready to implement against. The directory tree, coding-standard mandates, and no-heap discipline are sound. The state machine, STO chain, EKF timing/decomposition, and startup sequence all need concrete rework. Every reviewer independently arrived at the same top-5 list, with different framings — that convergence is itself the strongest signal that the fixes below are real, not preference.

---

## 1. Where All Three Seats Agreed (act on these immediately)

These are the findings each of Claude, GPT-5, and Gemini independently surfaced. No further debate needed.

### 1.1 nFAULT priority is wrong
Both Claude (§4) and GPT-5 (§2) and Gemini (§3) caught it: **nFAULT EXTI and TIM1_UP at the same priority (0) cannot preempt each other on Cortex-M** — this is the [Arm Cortex-M interrupt priority rule](https://developer.arm.com/community/arm-community-blogs/b/embedded-and-microcontrollers-blog/posts/cutting-through-the-confusion-with-arm-cortex-m-interrupt-priorities). Fault response is delayed by up to 30 µs (Gemini: "a lot of silicon can melt in 30 µs"). **Fix:** GPT-5's revised priority table is the right structure — nFAULT/BRK at priority 0, L0 at priority 1, L1 at 2, L2 at 3, L3/SysTick at 5. This is a required change, not a stylistic one.

### 1.2 6-state joint EKF is wrong at 10 kHz
All three reviewers reject the single 6-state EKF:
- **GPT-5 §3:** dense 6-state Joseph EKF at 10 kHz is 14,000–25,000 cycles = 82–147 µs, blowing the 60 µs budget by 40–150%.
- **Claude §7.Q2:** the tree already has a separate `param_id.c` for slow RLS — the joint 6-state EKF *contradicts the tree it lives in*.
- **Gemini §10.Q2:** joint Jacobian is ill-conditioned; single-precision float loses PSD.

**Unanimous fix:** split into (a) 4-state fast EKF `[id, iq, ω, θ]` at 5–10 kHz and (b) slow parameter estimator `[Rs, ψm, TL]` at 100 Hz–1 kHz using RLS or a small dedicated EKF. Delete `Rs, TL` from `ekf.h`'s 6-state struct.

### 1.3 State machine has missing fault transitions
- **Claude §3:** no fault-to-STO edges drawn from INIT, PRECHARGE, or ARMED. HALT is redundant with STO.
- **Gemini §4:** precharge timeout has no exit; welded precharge relay is undetected; invalid Hall states (000/111) unhandled; locked-rotor and runaway missing.
- **GPT-5:** implicit — his priority-1 nFAULT rule works only if every non-terminal state honors it.

**Unanimous fix:** every non-terminal state (INIT, PRECHARGE, ARMED, RUN) needs its own explicit fault-to-STO edge. Merge HALT into STO. Add precharge-timeout, locked-rotor, runaway, and invalid-Hall faults to the registry.

### 1.4 STO chain is not verified end-to-end
- **Claude §4:** `sto_assert()` has no readback; `sto_state_t` has no pending-confirmation state; TIM1 BRK wiring to the hardware latch is undocumented.
- **GPT-5 §2:** L0 must check the fault flag on both entry and pre-commit; watchdog must not be kicked from any ISR.
- **Gemini §3:** SR-latch noise coupling; contactor-open dropping bus voltage before flash dump completes.

**Unanimous fix:**
1. Add `STO_COMMANDED_PENDING_HW` to `sto_state_t`.
2. `sto_assert()` reads back the latch state and escalates to a fallback (disable PWM peripheral clock entirely) if readback fails.
3. Confirm in writing that TIM1 BRK/BRK2 is wired to the same hardware latch driving nFAULT/OCP/thermal.
4. L0 checks fault flag at ISR entry AND before CCR commit (GPT-5 §2).
5. Never kick IWDG from an ISR (GPT-5 §8, Claude §7.Q5).

### 1.5 ADC offset nulling is missing from startup
- **Gemini §5:** flagged as the single most likely first-run failure — INA240s drift, 50 mA offset becomes violent DC alignment torque at RUN entry.
- **Claude:** silent (didn't catch it).
- **GPT-5:** implied but not explicit.

**Unanimous fix (Gemini-led):** INIT sequence must average all three phase-current ADCs for ≥100 ms with PWM disabled, store offsets in RAM, subtract on every L0 sample. Refuse ARMED entry if any offset > 5% of full scale.

### 1.6 Hall glitch filter is mandatory
All three reviewers required this:
- **Claude §7.Q4:** debounce time = 10% of shortest expected sector; use TIM4 hardware input filter.
- **GPT-5 §9.Q4:** hardware filter + Gray-code plausibility check + adaptive blanking `max(20 µs, 0.15× sector time)`.
- **Gemini §10.Q4:** hardware RC (100 ns) + software median-of-3.

**Merged fix:** hardware RC filter on Hall input pins (100 ns), TIM4 input filter enabled (2-5 µs at low speed), plus a software Gray-code plausibility gate that rejects transitions inconsistent with rotation direction. Adaptive blanking of `max(20 µs, 15% of last measured sector time)` at high speed.

### 1.7 EKF numerical hygiene is missing
- **GPT-5 §6:** covariance PSD drift over minutes; recommended Joseph form + `P = 0.5(P+P^T)` symmetrization + diagonal floor/cap + Cholesky check + reject on `cond(S) > 1e6` + reset on NaN/Inf.
- **Claude §6:** ambiguous `ekf_reinit()` semantics — does it preserve `Rs, TL`?
- **Gemini §10.Q2:** confirms conditioning failure risk.

**Merged fix:** adopt GPT-5's numerical hygiene checklist verbatim. `ekf_reinit()` gains a preserve-parameter-state flag. Add `ekf_chol_fail`, `ekf_nan_count`, `ekf_cond_hi` counters (per GPT-5 §11 profiling counters).

### 1.8 EIG scheduler API is underspecified and drifting from the design proposal
- **Claude §6:** `p_confidence` is undefined; council mandated `tracking_error < ε_ctrl AND cond(𝒪) < 10⁴`; also flagged the 10⁴ vs 10⁶ Gramian threshold discrepancy between `design_proposal.md` and `rsd_math_foundations.md`.
- **GPT-5 §9.Q8:** hidden failure is "coherent-looking bad data" — includes scheduler chattering.
- **Gemini §6:** EIG pumping HFI continuously at idle load will cook the motor.

**Merged fix:**
1. Rewrite `eig_scheduler.h` inputs to use `tracking_error` and `cond_gramian` directly, matching the design-proposal pseudocode.
2. Resolve the 10⁴/10⁶ discrepancy in a single-source-of-truth doc update (assign to math foundations owner) — recommend `cond(𝒪) < 10⁴` as the *rejection* threshold since more conservative.
3. Add mandatory minimum-dwell-time (recommend 200 ms = 20 L3 ticks) between mode transitions to prevent 10 Hz chatter.
4. HFI mode gate: refuse if `iq > 30% rated` OR if `elapsed_since_last_hfi < 5 s` OR if `T_cu > 60°C`. This is a checkable interlock, not a comment.

### 1.9 Dead-time compensation module signature is wrong
- **GPT-5 §7:** `sign(iq)` fails at nonzero `id`, field weakening, phase advance, zero crossings. Must use per-phase `sign(ia), sign(ib), sign(ic)` with hysteresis + zero-current deadband.
- **Claude §2:** flagged the module boundary itself is right.
- **Gemini:** silent on this specifically.

**Merged fix:** GPT-5's revised API. Module also emits `v_alpha_applied, v_beta_applied` for the EKF; rename `ekf_input_t.vd_cmd, vq_cmd` to `vd_applied_est, vq_applied_est`.

---

## 2. Where the Seats Diverged (needs decision)

### 2.1 Fast-EKF rate: 10 kHz vs 5 kHz vs split-rate
- **Claude §7.Q1:** hold at 10 kHz.
- **GPT-5 §3, §9.Q1:** run sparse state predict at 10 kHz, but *covariance updates at 2–5 kHz* (split-rate observer).
- **Gemini §10.Q1:** keep at L1 (10 kHz), no further specification.

**Resolution:** adopt GPT-5's split. State prediction (`x̂` update via `f(x̂,u)Δt`) at 10 kHz, dense covariance propagation and update at **5 kHz** (every other L1 tick). This matches STM32G474 cycle-count reality per GPT-5's WCET analysis without sacrificing the state-tracking bandwidth Claude wanted preserved.

**Design commitment:** if measured L1a WCET (state-only, 10 kHz) exceeds 40 µs OR L1b WCET (covariance, 5 kHz) exceeds 150 µs, drop L1a to 5 kHz and covariance to 2 kHz. Instrument with `cyc_l1a_max`, `cyc_l1b_max` per GPT-5 §11.

### 2.2 CORDIC ownership scope
- **GPT-5 §4:** L0 is the *only* ISR allowed to use CORDIC; everyone else uses cached `sinθ/cosθ` or LUT.
- **Claude:** silent (didn't catch reentrancy).
- **Gemini:** silent (didn't catch reentrancy).

**Resolution:** GPT-5's rule stands (single-owner CORDIC = L0). Observer modules receive cached `sin/cos` from L0's angle estimate; slow modules use software `sinf/cosf` if needed. Any accidental CORDIC call from L1+ is a compile-time (or startup-time) fault.

### 2.3 CCM SRAM placement of EKF `P`
- **Claude §7.Q6:** keep in CCM, but fix stack-adjacency documentation contradiction first.
- **GPT-5 §9.Q6:** keep in native CCM at `0x10000000`, but flag that STM32G4 has a CCM DMA-accessible alias at `0x20018000` that must NEVER be used for DMA buffers.
- **Gemini §10.Q6:** move `P` out of CCM to SRAM1 to eliminate bus-matrix hazards.

**Resolution:** GPT-5 wins on technical merit (native CCM is fastest, and DMA truly cannot reach it if we forbid the alias). But Claude's stack-adjacency concern is real. **Fix:**
1. Keep `P` in native CCM at `0x10000000`.
2. All ISRs share one stack (main stack, 4 KB); PSP unused per §2 of the skeleton — remove the plural "ISR stacks" language.
3. MPU region 0: 4 KB stack guard at the low end of CCM.
4. Linker script explicitly forbids any DMA buffer, USB descriptor, CORDIC DMA array, or FDCAN message RAM in CCM or its alias.

### 2.4 Fault severity taxonomy
- **Gemini §4:** demanded distinction between recoverable (CUSUM trip → button reset OK) vs unrecoverable (hardware OCP → power cycle only) faults.
- **Claude:** implied by "fault code enum" but not made explicit.
- **GPT-5:** silent on taxonomy.

**Resolution (Gemini-led):** add explicit severity levels to `safety/faults.h`:
```c
typedef enum {
    FAULT_SEV_WARN   = 0,   // logged, no action (info)
    FAULT_SEV_DERATE = 1,   // reduce torque, stay in RUN
    FAULT_SEV_STO_RECOVERABLE = 2, // STO, physical button clears
    FAULT_SEV_STO_LATCHED     = 3, // STO, power cycle required
} fault_severity_t;
```
Hardware OCP, contactor weld detect, and CUSUM trip-count > 5 in 60 s all promote to `STO_LATCHED`.

### 2.5 Firmware update path
All three agreed: JTAG/SWD only. Gemini added the concrete reason (bootloader resets GPIO → floating gate drives risk). **No divergence, but Gemini's rationale gets recorded in the design doc.**

### 2.6 Logging during fault
- **GPT-5 §8:** logging must not participate in safety; reserve non-droppable space for one fault snapshot; do NOT dump to flash in the STO transition path (flash erase can stall milliseconds).
- **Gemini §8:** "The Overwrite Trap" — ring buffer keeps overwriting during post-STO idle, losing the pre-fault window.
- **Claude §2:** flag `logger.h/c` best-effort as correct — do not "fix" into blocking.

**Merged fix:**
1. On any STO assert, immediately freeze the ring buffer (no new writes accepted until CLI unfreeze command).
2. Reserve 2 KB of the 16 KB SRAM2 ring for a non-droppable fault snapshot region.
3. Backup SRAM (4 KB, `0x4002_4000`) holds the fault code + PC + minimal state across reset.
4. Flash writes happen only after STO is stable AND host-side polling confirms, never in the fault path itself.

### 2.7 EIG unit convention (bits vs log-det)
- **Claude §6:** flagged units-consistency gap between `eig_target_bits` (implied base-2) and math foundations' `log-det reduction in P` (natural log by convention).
- **GPT-5, Gemini:** silent.

**Resolution:** adopt base-2 (bits) as the firmware convention. Update `rsd_math_foundations.md` to state `EIG = 0.5 log₂(det(P_prior/P_posterior))` explicitly. Cross-reference in the API header.

---

## 3. What Each Seat Uniquely Contributed

Attribution matters for the epistemic record — no seat was redundant.

**Claude uniquely:**
- Caught the documentation-vs-diagram contradiction on "one-way except ARMED↔RUN" (no normal-stop RUN→ARMED edge).
- Caught the 10⁴ vs 10⁶ Gramian threshold contradiction across two council docs.
- Caught the missing `fuser.h` header despite the module being safety-relevant.
- Caught the MPU privilege-boundary being meaningless if nothing runs unprivileged.
- Framed the STO gap as "prose claims hardware-independent, but firmware-commanded half has no confirmation loop" — the sharpest statement of the safety-critical gap.

**GPT-5 uniquely:**
- Detected the ARM Cortex-M priority equality rule (interrupts at the same priority cannot preempt each other) — Claude and Gemini both flagged the priority issue, only GPT-5 gave the mechanistic reason.
- Quantified WCET in cycles at 170 MHz, not just µs — made the "60 µs EKF" claim falsifiable.
- CORDIC reentrancy (single-owner peripheral) — no other seat caught this.
- Dead-time compensation using per-phase current signs, not `sign(iq)`.
- Sequence-counted double buffers as the correct L0↔L1/L2 handoff pattern (better than `__disable_irq()`).
- Sparse-covariance / split-rate EKF as the numerical + timing fix.
- The specific list of profiling counters to expose (§11) — directly implementable checklist.
- The subtle point that CCM has a DMA-accessible alias that must be blacklisted in the linker script.

**Gemini uniquely:**
- ADC offset nulling missing from INIT — the single most predictive "what breaks first" call.
- Precharge welded-relay detection missing.
- The "2 AM reset mash" human-factors scenario — operators bypassing the STO lockout after repeated trips will chatter the contactor and destroy it.
- The ring-buffer overwrite trap: fault triggers, motor stops, ring buffer keeps overwriting with idle data, pre-fault window lost.
- Bus voltage collapse racing the flash dump on contactor open.
- Invalid Hall state 000/111 fault (broken wire).
- Swapped Hall wires produces violent backwards runaway.
- The final prediction: "If you ignore this review, the motor will violently shudder and trip a hardware overcurrent fault on the very first transition to RUN" — the most specific falsifiable prediction of any seat.

---

## 4. Revised Skeleton Delta (what changes in v1)

The revised skeleton (`firmware_skeleton_v1.md`, to be written next) will incorporate all §1 fixes and the §2 resolutions above. Delta summary:

**§0 Design commitments — 5 additions:**
- Item 9: TIM1 BRK/BRK2 wired to same hardware latch as nFAULT/OCP/thermal (verified in hardware bring-up gate).
- Item 10: ADC offset nulling required before ARMED; refuse if any offset > 5% FS.
- Item 11: CORDIC is single-owner (L0 only).
- Item 12: All shared inter-ISR state uses sequence-counted double buffers; no `__disable_irq()` in the control path.
- Item 13: On STO, ring buffer freezes; fault snapshot lives in backup SRAM.

**§1 Directory tree — additions:**
- `hal/adc_offset.h/c` (offset nulling, coldboot self-cal)
- `hal/precharge.h/c` (contactor + precharge relay control with weld detection)
- `safety/fault_taxonomy.h` (severity enum)
- `observer/hall_filter.h/c` (Gray-code plausibility + adaptive blanking)

**§2 ISR priorities — full rewrite** per GPT-5 §2 table.

**§4 Module APIs — rewrites:**
- `ekf.h`: reduce to 4 states, add innovation covariance output, add `preserve_params` flag to reinit, add `ekf_health_t` accessor.
- `eig_scheduler.h`: replace `p_confidence` with `tracking_error` + `cond_gramian`; add `min_dwell_ticks`; interlock HFI mode against explicit checkable conditions.
- `sto.h`: add `STO_COMMANDED_PENDING_HW` state; `sto_assert()` returns success/fail with readback; `sto_try_release()` refuses from pending state.
- `cusum.h`: add `cusum_reset()`.
- `pi_current.h`: add `Ld, Lq` inputs to update (or document nominal-inductance simplification).
- `deadtime_comp.h`: full rewrite per GPT-5 §7 signature.

**§5 State machine — full rewrite:**
- Fault edges from INIT, PRECHARGE, ARMED, RUN.
- Delete HALT.
- Add explicit RUN→ARMED normal-stop edge.
- Add explicit L3-heartbeat-timeout edge from RUN to STO.
- Add precharge-timeout, welded-contactor, invalid-Hall, locked-rotor, runaway faults.

**§6 Logging protocol — additions:**
- Reserved fault-snapshot region (2 KB non-droppable).
- Ring buffer freeze on STO.
- Backup SRAM fault-across-reset record.

**§7 Test hooks — additions:**
- Deliberate offset-injection to validate CUSUM γ.
- Contactor cycle test (10× under no load, watching for MCU brownout).
- Hardware latch verification via manual OCP pin pull.

**§8 Open questions — replaced with:**
Answers table citing which seat gave which resolution.

**§9 Coding standards — additions:**
- CI check: linker map fails build on presence of `__aeabi_d*` symbols (per GPT-5 §4).
- CI check: linker map fails build if CCM regions overlap DMA-capable memory.

---

## 5. Cross-Doc Corrections Required (assigned to owners)

These issues span multiple documents in the artifact tree. Do not fix in isolation.

| Issue | Docs affected | Fix owner | Priority |
|---|---|---|---|
| S_k / G_k rename not folded into math foundations | `01_rsd_foundations/rsd_math_foundations.md` §7 | Math foundations owner | High |
| Gramian threshold 10⁴ (design) vs 10⁶ (foundations) | `01_rsd_foundations/rsd_math_foundations.md` §5 AND `03_design_proposal/design_proposal.md` §7 | Both — reconcile via change note | High |
| EIG units convention (bits vs log-det) | `01_rsd_foundations/rsd_math_foundations.md` §8 | Math foundations owner | Medium |
| Hardware latch wiring diagram | `04_schematics_blueprints/power_stage_schematic.md` (add TIM1 BRK wire) | Hardware owner | Critical — blocks bring-up |
| Precharge relay + contactor weld detect | `04_schematics_blueprints/power_stage_schematic.md` + BOM | Hardware owner | High |
| Hall RC input filter on power stage | `04_schematics_blueprints/power_stage_schematic.md` + BOM | Hardware owner | High |

---

## 6. Immediate Next Actions

1. Write `firmware_skeleton_v1.md` incorporating all §1 fixes and §2 resolutions.
2. Update `01_rsd_foundations/rsd_math_foundations.md` for S_k→G_k rename, Gramian threshold, EIG units convention.
3. Update `04_schematics_blueprints/power_stage_schematic.md` with the three hardware additions (TIM1 BRK wiring, precharge-weld detect, Hall RC filters) — this feeds back into the hardware BOM.
4. Add the concrete pre-spin-up gate list from Gemini §11 as a signed-off checklist to `03_design_proposal/design_proposal.md`.

The council did its job. What comes back after implementation phase 1 is what needs the next council pass — measured WCET, measured `P` conditioning drift, measured false-trip rate on CUSUM, actual latch response time on the scope. That's the review that decides whether this skeleton, revised, actually holds.

---

## 7. Sources

- Council reviews: `08_firmware_review/claude_architecture_review.md`, `08_firmware_review/gpt5_realtime_review.md`, `08_firmware_review/gemini_skeptic_review.md`.
- ARM Cortex-M priority behavior: [Cutting Through the Confusion with Arm Cortex-M Interrupt Priorities](https://developer.arm.com/community/arm-community-blogs/b/embedded-and-microcontrollers-blog/posts/cutting-through-the-confusion-with-arm-cortex-m-interrupt-priorities).
- STM32G474 CORDIC/FMAC/ADC/CCM behavior: [STM32G474 datasheet](https://www.st.com/resource/en/datasheet/stm32g474cb.pdf), [ST CORDIC training](https://www.st.com/resource/en/product_training/STM32G4-Peripheral-Cordic_Coprocessor_CORDIC.pdf), [ST ADC application note](https://www.st.com/content/ccc/resource/technical/document/application_note/group1/02/ba/86/7e/6c/d7/4e/08/DM00625282/files/DM00625282.pdf/jcr:content/translations/en.DM00625282.pdf), [ST CCM application note](https://www.st.com/resource/ja/application_note/dm00083249.pdf).
- INA240 timing: [TI INA240 datasheet](https://www.ti.com/lit/ds/symlink/ina240.pdf).
- ARM Cortex-M4 FPU double-promotion behavior: [Arm Cortex-M4 FPU guidance](https://developer.arm.com/community/arm-community-blogs/b/architectures-and-processors-blog/posts/10-useful-tips-to-using-the-floating-point-unit-on-the-arm-cortex--m4-processor).
- Prior CBJG artifacts: `01_rsd_foundations/rsd_math_foundations.md`, `03_design_proposal/design_proposal.md`, `05_control_architecture/control_architecture.md`, and the pre-council skeleton `08_firmware_review/firmware_skeleton_v0.md`.
