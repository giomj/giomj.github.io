const e=`# gravitational-compass

> **A research program on Earth conservation and off-world expansion of life,
> conducted in a heliocentric reference frame.**
>
> *(One-line claim — Emperor to ratify from three candidates below.)*

---

## What this is

\`gravitational-compass\` is a **research project** (not an engineering product, not a
device claim, not a sensor spec sheet) exploring two braided questions:

1. **Conservation** — What does the honest state of Earth's biosphere look like when
   measured in a shared, non-Earth-centric frame? What must be preserved for life —
   human and non-human — to continue on this planet?
2. **Expansion** — What does the honest engineering horizon of off-world human life
   look like when measured against the same frame? Not the marketing horizon.
   The physics horizon.

Both questions share one methodological commitment: **all measurements, models, and
navigation are expressed in a heliocentric (solar-system-barycentric) reference
frame.** The Sun is chosen as the *physical* anchor of measurement because it holds
99.86% of the solar system's mass and provides the closest thing to a stable inertial
reference available without leaving the local stellar neighborhood.

The Sun is not a political anchor. It is not a spiritual anchor. It is not a claim
of universal gravitational truth beyond the solar system. It is a **coordinate
choice**, made because it is honest, stable, and shared.

## Scope and honesty statement

**This project is user-defined research synthesis.** It is:

- **Not new physics.** General relativity, Newtonian gravitation, and the standard
  heliocentric ephemeris models are the ground truth. This project applies them; it
  does not overturn them.
- **Not a claim of a novel sensor.** The word *compass* in the title is metaphorical:
  it refers to the discipline of always measuring against the same anchor. It is not
  a claim that a new gravitational-sensing device exists or has been demonstrated.
- **Not a settlement plan, launch schedule, or engineering roadmap** for off-world
  habitation. It is a *research reference* that documents what is physically
  plausible, what is speculative, and what is out of scope.
- **Not sun-worship, and not a political frame.** The Sun is a coordinate origin,
  chosen for its inertial properties. Nothing in this project should be read as
  hierarchy of humans, nations, or belief systems.

### Sourced vs. illustrative

| Aspect | Status |
|---|---|
| Heliocentric coordinate systems (ICRF, HCRS, barycentric ephemerides) | Standard tools; sourced (IAU, JPL, IERS) |
| Solar mass, luminosity, mass-loss rate (~4.3 Mt/s to fusion + solar wind) | Sourced (NASA, IAU) |
| Earth biosphere baselines (planetary boundaries framework, IPCC assessments) | Sourced (Stockholm Resilience Centre, IPCC AR6) |
| Off-world life-support physics (radiation, gravity, atmosphere, closed-loop ecology) | Sourced where mature; flagged where speculative |
| Any specific timelines for off-world human expansion | **Illustrative or speculative** — flagged inline |
| Any claim that heliocentric framing yields a novel measurement device | **Explicitly out of scope** unless a separate paper establishes it |

### The anchor itself drifts

Full disclosure, per the council's Outsider seat: the Sun loses roughly
4.3 million tonnes per second to fusion and the solar wind. On human civilizational
timescales this is negligible for coordinate purposes. On the project's aspirational
timescales it should be *named*, not hidden. Even the anchor drifts. This is a
feature of an honest frame, not a bug.

## Project goals

The project has five concrete, checkable objectives:

1. **G1 — Frame.** Establish and document the heliocentric coordinate + units
   substrate that all subprojects of the realm (including \`force-carriers\` and
   \`dev/RSD\`) can share. SI units throughout; no double conversion; explicit
   uncertainty on every quantity.
2. **G2 — Earth ledger.** Produce a research reference on the state of the Earth's
   biosphere — climate, biodiversity, freshwater, biogeochemical cycles, land use —
   measured in the shared frame, with primary-source citations for every figure.
3. **G3 — Off-world ledger.** Produce a research reference on the honest physical
   envelope for extending human life beyond Earth: radiation environments, gravity
   thresholds, energy budgets, closed-loop life support, timescales. What the
   physics permits versus what marketing claims.
4. **G4 — Braided synthesis.** Document the coupling: every joule of expansion is
   paid for by a joule of conservation. Every off-world capability is measured for
   its cost and benefit to the Earth ledger.
5. **G5 — Open output.** All research outputs (markdown docs, notebooks, figures,
   data) default to open licensing. No closed derivatives.

## Layout

\`\`\`
gravitational-compass/
├── README.md                      ← this file
├── docs/
│   ├── 01-frame/                  ← heliocentric coordinates, SI units, uncertainty
│   ├── 02-earth-ledger/           ← biosphere state, planetary boundaries
│   ├── 03-offworld-ledger/        ← radiation, gravity, life support, energy
│   ├── 04-braided-synthesis/      ← the coupling: cost/benefit in shared frame
│   └── inspiration/               ← moodboard, source infographics
└── references/                    ← primary sources, textbooks, papers, ephemerides
\`\`\`

## Relationship to the rest of the realm

This project sits alongside two sibling repositories:

- **[\`force-carriers\`](https://github.com/giomj/force-carriers)** — the pedagogical
  foundation. What forces exist, what mediates them, what the Standard Model does
  and does not cover (gravity is not yet in it).
- **[\`dev\`](https://github.com/giomj/dev) (RSD Simulator)** — the engineering
  substrate. Deterministic simulator for coupled localization / knowledge / energy
  recursion, in strict SI units.

The three repositories share one discipline: **honest units, honest uncertainty,
sourced-vs-illustrative separation, and a shared physical frame.**

## Starting sources

Foundational references for the frame and the two ledgers. This list will grow as
the project develops.

**Heliocentric coordinates and ephemerides**
- IAU SOFA (Standards of Fundamental Astronomy) — <https://www.iausofa.org/>
- JPL Horizons ephemeris system — <https://ssd.jpl.nasa.gov/horizons/>
- IERS Conventions (2010) — <https://www.iers.org/>

**Gravitation and general relativity (textbook layer)**
- Misner, Thorne, Wheeler, *Gravitation* (Princeton, 2017 reprint)
- Carroll, *Spacetime and Geometry* (Cambridge, 2019)

**Earth ledger**
- IPCC Sixth Assessment Report (AR6) — <https://www.ipcc.ch/assessment-report/ar6/>
- Stockholm Resilience Centre, Planetary Boundaries framework
- IPBES Global Assessment on Biodiversity

**Off-world ledger**
- NASA Human Research Program roadmap
- ESA MELiSSA closed-loop life support program
- National Academies, *Recapturing a Future for Space Exploration* (life sciences)

## Status

- **Kicked off:** 2026-07-17
- **Current milestone:** M0 — Charter (this document). Awaiting Emperor's
  ratification of the one-line claim.
- **Next milestone:** M1 — Frame. Draft \`docs/01-frame/\` establishing the
  heliocentric coordinate + units substrate.
- **Governance:** All commits reviewed against the [Grand Council Charter](../)
  Outsider's Amendment: *does this reach the reader who has no advocate?*

## Council of record

This project was chartered by the **Grand Council of the Realm**, convened
2026-07-17 (13 deliberative seats + 6 Instruments). Charter draft prepared by
**GitHub, Solutions Architect**, presented for the Emperor's ratification before
any commit to the repository.

---

## Appendix — One-line claim: Emperor's three candidates

The council converged on three candidates for the project's one-line claim. The
current header of this draft uses candidate **B** as a placeholder. The Emperor
selects one (or dictates a fourth) at ratification.

- **A. Morrison's draft:**
  *A research program to keep the Earth alive and to extend life beyond it,
  measured honestly against the Sun's gravitational frame.*

- **B. Feynman-precise variant** *(current placeholder in the header)*:
  *A research program on Earth conservation and off-world expansion of life,
  conducted in a heliocentric reference frame.*

- **C. Ambitious variant:**
  *A heliocentric research program braiding two goals: conserving Earth's biosphere
  and extending human life beyond it, with the Sun as the shared physical anchor
  of measurement.*
`;export{e as default};
