# RSD Mathematical Foundations Applied to a BLDC Motor
**Project:** CBJG — Benchtop RSD-Controlled BLDC Engine
**Revision:** v0.1 · 2026-07-17
**Author:** Perplexity Computer (per user directive)

---

## 1. Framing

Per the user's own RSD v0.1 notes, **Recursive State Dynamics (RSD)** is an engineering and epistemic meta-framework, *not* new physics and *not* a free-energy claim. This document applies RSD honestly: as the **estimation, observability, and energy-aware scheduling layer** running on top of a conventional 3-phase brushless permanent-magnet (BLDC/IPM) motor of the type covered by Hanselman (2003) and Waghmare et al. (2016).

RSD couples three recursive states:

| Symbol | Meaning in RSD | Meaning on this motor |
|---|---|---|
| **L** | Localization / navigation | Rotor angle θ, rotor speed ω, mechanical position |
| **K** | Knowledge / model state | Estimated Rs, Ld, Lq, ψm, load torque, temperature, back-EMF constant |
| **E** | Energy / autonomy | DC bus energy, per-phase Joule loss, iron loss, thermal budget |

The four trees (Claim, Measurement, Estimation, Energy) map cleanly onto motor control:
Claim → commutation hypothesis; Measurement → phase current / bus voltage; Estimation → EKF observer; Energy → I²R + iron budget with clipping.

The six roots (latent reality, observations, uncertainty, innovation, decision, validation) are all present in a standard sensorless FOC loop — RSD just makes them explicit and auditable.

---

## 2. Electromechanical Model (from Hanselman Ch. 3–4)

State vector for a surface-PM 3-phase BLDC in the rotor dq frame:

\[
\mathbf{x} = \begin{bmatrix} i_d \\ i_q \\ \omega \\ \theta \end{bmatrix}
\]

Continuous-time dynamics:

\[
\begin{aligned}
\dot i_d &= \tfrac{1}{L_d}\!\left(v_d - R_s i_d + \omega L_q i_q\right) \\
\dot i_q &= \tfrac{1}{L_q}\!\left(v_q - R_s i_q - \omega L_d i_d - \omega \psi_m\right) \\
\dot\omega &= \tfrac{1}{J}\!\left(T_e - T_L - B\omega\right) \\
\dot\theta &= \omega \\
T_e &= \tfrac{3}{2}\,p\,\!\left[\psi_m i_q + (L_d - L_q) i_d i_q\right]
\end{aligned}
\]

Symbols: `Rs` stator resistance, `Ld,Lq` dq inductances, `ψm` PM flux linkage, `p` pole pairs, `J` inertia, `B` viscous damping, `TL` load torque. For a **surface-PM** rotor (our benchtop build), `Ld ≈ Lq`, so the reluctance term vanishes and `Te ≈ (3/2)·p·ψm·iq`. For **IPM** rotors, the `(Ld − Lq)·id·iq` reluctance torque term is exploited via MTPA — this is what the NOVATEUR paper studies with ANSYS RMxprt/Maxwell 2D.

**Torque sizing (Hanselman Eq. equivalent, and NOVATEUR Eq. 1):**
\[
T \propto k D^2 L
\]
Rotor torque scales with rotor-diameter² × axial-length. This dominates our BOM choice: a benchtop 200–400 W outrunner already delivers ~1 Nm at ~3000 rpm, sufficient to demonstrate the full RSD stack.

---

## 3. RSD-K: Recursive Bayesian Observer

We estimate `x` and drifting parameters `θ_p = [Rs, ψm, TL]` jointly with an **Extended Kalman Filter**.

Discrete process (Euler, step Ts):
\[
\mathbf{x}_{k+1} = f(\mathbf{x}_k, \mathbf{u}_k, \boldsymbol\theta_{p,k}) + \mathbf{w}_k,\quad \mathbf{w}_k\sim\mathcal N(0,Q_k)
\]

Measurement (phase currents transformed to dq, plus bus voltage / bus current for E-branch):
\[
\mathbf{z}_k = h(\mathbf{x}_k) + \mathbf{v}_k,\quad \mathbf{v}_k\sim\mathcal N(0,R_k)
\]

Standard EKF recursion:
\[
\begin{aligned}
\hat{\mathbf x}_{k|k-1} &= f(\hat{\mathbf x}_{k-1|k-1},\mathbf u_{k-1}) \\
P_{k|k-1} &= F_k P_{k-1|k-1} F_k^\top + Q_k \\
K_k &= P_{k|k-1} H_k^\top (H_k P_{k|k-1} H_k^\top + R_k)^{-1} \\
\hat{\mathbf x}_{k|k} &= \hat{\mathbf x}_{k|k-1} + K_k\!\left[\mathbf z_k - h(\hat{\mathbf x}_{k|k-1})\right] \\
P_{k|k} &= (I - K_k H_k) P_{k|k-1}
\end{aligned}
\]

The **innovation** `ν_k = z_k − h(x̂_{k|k-1})` and its covariance `S_k = H_k P H_k^T + R_k` provide the RSD robust-reliability signal (χ² gating, adaptive Q/R).

For rotor angle when we have no Hall/encoder we use a **sliding-mode observer** (SMO) on the back-EMF and hand its output to the EKF as a pseudo-measurement of θ.

---

## 4. RSD-L: Rotor Localization

For a benchtop motor "L" collapses to **rotor angle** θ ∈ [0, 2π) and its integrals. Two modes:

- **Sensored bring-up:** 3× Hall-effect sensors (0/120/240°) give commutation sectors; used to bootstrap the observer and validate.
- **Sensorless steady-state:** SMO + EKF drop the Halls above ~10% rated speed. Below that we inject a high-frequency signal on `v_d` and observe the `i_q` response (HFI) to recover θ at zero speed.

**Observability test** (RSD requirement — from your notes): compute the observability Gramian
\[
\mathcal O = \sum_{k=0}^{N-1} (F^k)^\top H^\top H F^k
\]
and reject any operating point where `cond(𝒪) > 10⁶`. Below rated 10 % speed with no HFI, `𝒪` is rank-deficient → forces the scheduler into HFI mode. That is exactly the "observability/identifiability tests" clause of RSD v0.1.

---

## 5. RSD-E: Energy Balance with Clipping

Per-step energy audit:

\[
E_{k+1} = \operatorname{clip}\!\left(E_k + \eta_{in}\,P_{src,k}\,T_s - \left[\underbrace{\tfrac{3}{2}(i_d^2 + i_q^2)R_s}_{\text{copper}} + P_{iron}(\omega,B_{gap}) + P_{sw}\right]T_s,\ 0,\ E_{max}\right)
\]

`E_max` is the DC bus + battery capacity; the clip enforces energy-neutral operation (RSD's central scheduling objective). The scheduler then maximises:

\[
J = \sum_k \frac{\text{EIG}_k}{E_k^{used}}\quad\text{subject to}\quad E_k \ge E_{min}
\]

where **EIG** (Expected Information Gain) is the log-det reduction in `P` from an action. In practice this trades off HFI injection (informative but lossy) against pure FOC (efficient but less identifiable). This is the *useful-information-per-joule* objective from your RSD notes, applied literally to a motor.

---

## 6. Recursive Parameter Identification (RSD-K, slow loop)

Winding resistance drifts with temperature: `Rs(T) = Rs0·[1 + α(T − T0)]` with α ≈ 3.93×10⁻³/K for copper. We estimate `Rs` and infer winding temperature — a virtual thermal sensor. Combined with a lumped 2-state thermal model:

\[
\begin{bmatrix}\dot T_{cu}\\ \dot T_{fe}\end{bmatrix} = \begin{bmatrix}-1/\tau_{cu}& 1/\tau_{cf}\\ 1/\tau_{cf}& -1/\tau_{fe}\end{bmatrix}\!\begin{bmatrix}T_{cu}\\T_{fe}\end{bmatrix} + \begin{bmatrix}P_{cu}/C_{cu}\\P_{fe}/C_{fe}\end{bmatrix}
\]

this gives the scheduler an honest thermal budget without needing a stator RTD (though we include one for validation — RSD requires empirical validation).

**Fisher information / CRLB** on `Rs` estimate:
\[
I(R_s) = \frac{1}{\sigma_i^2}\sum_k \left(\frac{\partial h}{\partial R_s}\right)^2 \Rightarrow \operatorname{Var}(\hat R_s) \ge I(R_s)^{-1}
\]
The scheduler refuses to trust `T̂_cu` estimates whose CRLB exceeds ±5 K.

---

## 7. Change-Point & Fault Detection

CUSUM on the normalised innovation squared (NIS):
\[
S_k = \max\!\left(0,\ S_{k-1} + \nu_k^\top S_k^{-1} \nu_k - \chi^2_{n,0.5}\right)
\]
`S_k > h` fires a fault event — demagnetisation, phase-open, bearing lock, or sensor drift. This is exactly RSD's change-point clause. The controller then switches to a safe-torque-off (STO) command and logs the event for post-hoc Bayesian model evidence comparison between competing fault hypotheses.

---

## 8. What This Is NOT

- Not new physics.
- Not free energy or overunity.
- Not a claim that RSD outperforms a well-tuned commercial FOC ESC in raw efficiency. RSD's contribution is **auditability, observability guarantees, and energy-aware information scheduling** — properties commercial ESCs do not expose.
- The motor is a textbook 3-phase BLDC/IPM. All novelty lives in the estimator/scheduler stack.

---

## 9. References (from the project PDFs)

1. Hanselman, D. C. *Brushless Permanent Magnet Motor Design*, 2nd ed. Magna Physics Publishing, 2003. ISBN 1-881855-15-5.
2. Waghmare, T. et al. "Design of Internal Permanent Magnet Brushless DC Motor Using ANSYS." *IJRPET*, Vol. 2, Issue 4, April 2016. ISSN 2454-7875.
3. User project notes: `memory/notes/projects/recursive_state_dynamics.md` (RSD v0.1, 2026-07-18).
4. RSD implementation repository: [github.com/giomj/dev](https://github.com/giomj/dev).
