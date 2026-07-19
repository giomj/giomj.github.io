const e=`# The Photon — Electromagnetism

> **Chapter 1 of 4 · Force Carriers**
> Status: **Detected** · First predicted 1905 (Einstein) · First quantized 1927 (Dirac) · First diagrammatic theory (QED) 1948

The photon is the easiest of the four force carriers to meet, because you've been meeting them your entire life. Every time your retina fires, every time your phone screen lights up, every time atoms hold themselves together instead of falling apart — that's photons doing work. This chapter walks through what makes the photon the clean, foundational case in the story of forces, and why every other force carrier gets compared to it.

---

## 1. What it is

The photon is the quantum — the smallest indivisible unit — of the **electromagnetic field**.

| Property | Value |
|---|---|
| Symbol | γ |
| Spin | 1 |
| Mass | 0 (experimentally, < 10⁻¹⁸ eV/c²) |
| Electric charge | 0 |
| Color charge | none |
| Range of the force it carries | Infinite |
| Antiparticle | Itself |

Massless, spin-1, and electrically neutral. It travels at exactly the speed of light — because *it defines* the speed of light. And because it is massless, the force it mediates reaches to infinity.

**A note on "virtual" photons.** In the next section we'll say photons are "exchanged" between electrons. In the everyday sense, "photon" means a real particle you could catch on a detector — light. But when we describe forces between charges, physicists use **virtual photons**: short-lived, unobservable disturbances in the electromagnetic field that appear in the mathematical bookkeeping of the interaction. They are not particles flying between charges in the ordinary sense. When you see "virtual" in this book, read it as "field disturbance in the math, not a thing you could catch."

---

## 2. What it does

Every electromagnetic phenomenon in the universe is, at the quantum level, mediated by photons:

- The **repulsion between two electrons** is described as one electron emitting a virtual photon and the other absorbing it.
- **Chemistry** — every chemical bond, every enzyme, every neuron — is electromagnetism, and therefore photon-mediated.
- The **solidity of matter** is electromagnetic repulsion between the electron clouds of atoms.
- **Light itself** — visible, radio, X-ray, gamma — is a stream of real photons, propagating at c through spacetime.

The distance to which this reach extends is set by a deep relationship called the **Yukawa range**:

\\[
R \\sim \\frac{\\hbar}{m c}
\\]

where \\(R\\) is the effective range of a force, \\(m\\) is the mass of its mediator, \\(\\hbar\\) is the reduced Planck constant, and \\(c\\) is the speed of light. When \\(m \\to 0\\), \\(R \\to \\infty\\). The photon is massless, so electromagnetism reaches across galaxies. When we get to the W and Z bosons (§3), we'll use the same relation in reverse — they're heavy, so the weak force is confined to distances smaller than a proton.

*Diagram (to be produced): interaction strength vs. distance for a massless mediator (1/r², infinite tail) and a massive mediator (Yukawa-suppressed, e⁻ᵐʳ/r cutoff). Photon curve labeled gold.*

---

## 3. What makes it different

The photon is the **clean case** in the story of forces. It's the reference point every other carrier gets compared to. Two properties make it clean:

**(a) It's electrically neutral.** The photon does not carry the charge (electric charge) that it mediates. So photons don't directly push or pull on each other the way electrons do.

**(b) Its gauge group is Abelian.** The mathematical structure behind electromagnetism, called **U(1)**, has generators that commute — the order in which you apply symmetry operations doesn't matter. Physically, this is the mathematical reason photons carry no electric charge and don't couple directly to each other.

That non-self-interaction is why electromagnetism is *linear*. Two overlapping electromagnetic waves pass through each other cleanly. Beams of light cross without deflecting each other. Every other force carrier we'll meet — gluons, W/Z, hypothetical gravitons — self-interacts, and that self-interaction is exactly why the other forces are so much stranger than electromagnetism.

**One caveat, for honesty.** Photons don't couple to each other *directly*, but they can scatter off each other **through quantum loops** of charged particles — a photon can briefly convert into a virtual electron-positron pair that emits another photon, and so on. This is called **light-by-light scattering** or the Euler–Heisenberg effect. It's real: [ATLAS observed it in ultraperipheral Pb–Pb collisions at the LHC in 2017](https://www.nature.com/articles/nphys4208). But the effect is extraordinarily weak. For any everyday purpose — flashlights, radio waves, sunlight — the linear-superposition picture is exact.

---

## 4. How we know

The photon's story is the story of quantum physics learning to walk.

- **1900 — Planck.** [Max Planck](https://www.nobelprize.org/prizes/physics/1918/planck/facts/) hypothesized that black-body radiation is emitted and absorbed in discrete energy packets to fix a mathematical embarrassment ("the ultraviolet catastrophe"). He didn't think the packets were real; they were a bookkeeping trick that happened to work.
- **1905 — Einstein.** [Einstein's photoelectric-effect paper](https://einsteinpapers.press.princeton.edu/vol2-trans/100) took Planck's packets seriously as *actual particles of light* — a proposal so radical that Robert Millikan spent a decade trying to disprove it experimentally. Millikan failed to disprove it, confirming Einstein's picture. Einstein won the [1921 Nobel Prize](https://www.nobelprize.org/prizes/physics/1921/summary/) specifically for this — not, famously, for relativity.
- **1923 — Compton.** [Arthur Compton's scattering experiments](https://www.nobelprize.org/prizes/physics/1927/compton/facts/) showed that X-ray photons carry momentum like billiard balls, cementing photons as particles, not just quantized field states.
- **~1948 — QED.** [Feynman, Schwinger, Tomonaga, and Dyson](https://www.nobelprize.org/prizes/physics/1965/summary/) built quantum electrodynamics, the theory of how photons and charged particles interact. QED introduced the **Feynman diagram** and made the photon-electron interaction into the most precisely tested theory in physics.

Today, the sharpest quantitative test of QED is the electron's anomalous magnetic moment:

> **Fan et al., *Physical Review Letters* 130, 071801 (2023)** [(link)](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.130.071801) measured the electron's g/2 to \\(g/2 = 1.00115965218059(13)\\), a fractional precision of **0.13 parts per trillion**. Theory and experiment agree to about **1 part in 10¹²** — the most precise confrontation of prediction and measurement in the history of physics.

That agreement is currently limited not by QED itself but by the independent input value of the fine-structure constant α, where different measurement methods still disagree at the few-σ level ([APS Physics viewpoint, 2023](https://physics.aps.org/articles/v16/22)). And α itself isn't constant — it "runs" with energy, rising from ~1/137 at low energy to ~1/128 at the mass of the Z boson. That running is one of QED's clean predictions and it matches experiment.

**A note on the muon.** The electron g-2 is the pristine test. The *muon* g-2 spent a decade in apparent 4–5σ tension with the Standard Model — an anomaly that raised hopes of new physics. That story concluded in 2025: [the Fermilab Muon g-2 experiment released its final result](https://news.fnal.gov/2025/06/muon-g-2-most-precise-measurement-of-muon-magnetic-anomaly/) at 127 parts per billion precision, and updated lattice-QCD calculations of the hadronic contribution ([Muon g-2 Theory Initiative white paper, 2025](https://arxiv.org/abs/2505.21476)) resolved the tension. Experiment and Standard Model now agree. QED, and the photon, survived another test.

---

## 5. Structure — why the photon exists at all

The deepest answer to *why is there a photon?* comes from **gauge symmetry**.

Here's the idea in three sentences. A gauge symmetry is a redundancy in how we describe a field — different mathematical descriptions that all give the same physics. If you demand that the physics stay unchanged even when the redundancy is applied *differently at every point in space* (a "local" gauge symmetry), the equations force a new field into existence to carry the change from point to point. That new field is the force carrier.

For electromagnetism, the redundancy is a U(1) rotation of the electron's quantum phase. Demanding that the physics not care what phase choice you make *locally* forces the existence of a massless, spin-1 field: the photon. This isn't a metaphor; it is how the photon is derived in every quantum field theory textbook (see, e.g., Peskin & Schroeder ch. 4).

The **size of the symmetry group** sets the **number of force carriers**:
- U(1) has one generator ⇒ one photon
- SU(3) (strong force, §2) has eight generators ⇒ eight gluons
- SU(2)×U(1) (electroweak, §3) has four generators ⇒ W⁺, W⁻, W⁰, B, three of which become massive (W⁺, W⁻, Z⁰) and one massless (the photon)

That last row is the punchline of §3: the photon we've been discussing in this chapter is not a stand-alone particle. It's the massless survivor of a larger family called the **electroweak group**, which the Higgs mechanism partly broke about 10⁻¹² seconds after the Big Bang. The clean U(1) story we've built here is the low-energy tail of a richer structure. We'll pick that thread back up in Chapter 3.

---

## 6. Diagram plan

To be produced when the visual style guide is settled. Each panel uses the shared conventions in \`docs/inspiration/\`:

1. **Møller scattering.** Two electrons approaching, exchanging a single virtual photon (t-channel), separating. Vertices labeled with coupling √α. Photon drawn as gold wavy line. Status badge: "virtual exchange."
2. **Yukawa range plot.** Log-log plot of interaction strength vs. distance for m=0 (photon, 1/r², straight line on log-log) vs. m>0 (Yukawa cutoff, exponential fall-off). Two curves: photon (gold), W/Z (violet). Shows why photon reach is infinite and weak-force reach is 10⁻¹⁸ m.
3. **Running α.** Simple plot of the fine-structure constant vs. energy, from α ≈ 1/137 at low energy to ≈ 1/128 at M_Z. Illustrates that "constants" aren't constant in QFT.

---

## 7. What we didn't cover here

- **Why the photon is its own antiparticle** — a consequence of being electrically neutral and self-conjugate under charge conjugation. Worth a footnote in a longer treatment.
- **Real vs. virtual photon phase space.** The distinction between an on-shell photon (real, detectable) and an off-shell photon (virtual, mathematical) is a genuine subtlety we've kept metaphorical. Full treatment: Peskin & Schroeder ch. 4.
- **Non-perturbative QED.** Everything above is perturbative — the small coupling α ≈ 1/137 lets us expand in powers of α. In extreme fields (near neutron stars, or in the strongest laboratory laser pulses), QED becomes non-perturbative and things get exotic. Out of scope for this chapter.
- **The photon's mass upper limit.** Experimentally, the photon mass is bounded to less than \\(\\sim 10^{-18}\\) eV/c² ([PDG 2024, gauge boson listings](https://pdg.lbl.gov/2024/tables/rpp2024-sum-gauge-higgs-bosons.pdf)). Any nonzero mass would make electromagnetism short-ranged; we haven't seen that.

---

## Sources

- Einstein, "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt," *Annalen der Physik* 17, 132 (1905). [English translation, Princeton](https://einsteinpapers.press.princeton.edu/vol2-trans/100)
- Fan, Myers, Sukra, Gabrielse, "Measurement of the Electron Magnetic Moment," *Phys. Rev. Lett.* 130, 071801 (2023). [PRL](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.130.071801)
- APS Physics viewpoint, "Searching for New Physics with the Electron's Magnetic Moment" (Feb 2023). [Physics APS](https://physics.aps.org/articles/v16/22)
- ATLAS Collaboration, "Evidence for light-by-light scattering in heavy-ion collisions," *Nature Physics* 13, 852 (2017). [Nature Physics](https://www.nature.com/articles/nphys4208)
- Fermilab, "Muon g-2 releases most precise measurement" (June 2025). [Fermilab News](https://news.fnal.gov/2025/06/muon-g-2-most-precise-measurement-of-muon-magnetic-anomaly/)
- Muon g-2 Theory Initiative, "The anomalous magnetic moment of the muon in the Standard Model," 2025 white paper. [arXiv 2505.21476](https://arxiv.org/abs/2505.21476)
- PDG 2024, Gauge and Higgs Boson summary table. [PDG](https://pdg.lbl.gov/2024/tables/rpp2024-sum-gauge-higgs-bosons.pdf)
- Nobel Prize in Physics 1918 (Planck), 1921 (Einstein), 1927 (Compton), 1965 (Feynman/Schwinger/Tomonaga). [Nobel Prize archive](https://www.nobelprize.org/prizes/physics/)
- Peskin & Schroeder, *An Introduction to Quantum Field Theory*, Westview 1995, ch. 4 (QED) and ch. 20 (electroweak).
- Griffiths, *Introduction to Elementary Particles*, 2nd ed., Wiley 2008, ch. 7 (QED).

---

*Next: [Chapter 2 — The Gluon (Strong Force)](../02-gluon/README.md) · [Back to project charter](../../README.md)*
`;export{e as default};
