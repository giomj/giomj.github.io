# Building a Hoverboard-Class BLDC Motor "From Scratch"
**Doc:** SCRATCH-01 · **Rev:** v0.1 · 2026-07-17
**TL;DR:** Do not build the whole motor from raw stock. Rewind a used stator, reuse the rotor cup and magnets, and machine only the shaft/end-bells if you must. That's what "from scratch" realistically means for a one-off benchtop build. Full-stack fabrication is $50k+ in tooling before you've made a single spinning motor.

---

## 1. Reality Check — What "From Scratch" Actually Costs

A hoverboard hub motor has ~150 individually manufactured components. Here is what each one actually requires:

| Component | What it takes to make from raw stock | Realistic one-off cost |
|---|---|---|
| **Stator lamination stack** | Progressive stamping die + M19/M43 electrical steel + press | **$25,000–$150,000 tooling** ([Gator Lamination cost breakdown](https://www.gatorlamination.com/progressive-high-speed-stamping-cost-for-motor-laminations/)); or hand-cutting on a wire EDM ~$400 setup + $30/hour |
| **Rotor cup (back-iron ring)** | Turned steel or spun ferromagnetic sheet | ~$50 material + lathe access |
| **NdFeB arc magnets** | Sintered rare-earth process (mine → melt → mill → press → sinter → magnetize) | **Impossible to make.** Buy N42 arc segments at [$0.05–$5/piece from Made-in-China](https://www.made-in-china.com/video-channel/hhsmagnet_NZKtfAHoZpRj_Sintered-N42-NdFeB-Rare-Earth-Magnet-Arc-Magnet.html), MOQ often 100 |
| **Magnet wire (enamelled Cu)** | Copper drawing + polyester/polyimide enamel coat | Buy pre-made, ~$25/lb for 20–24 AWG |
| **Shaft** | Turned/ground steel bar (4140 or 303 SS) | ~$30 material + lathe |
| **End bells (bearing housings)** | Cast/machined aluminum | ~$60 material + mill or 3D printed prototype ($15 filament) |
| **Bearings** | Precision ball bearing manufacturing | **Impossible to make.** Buy 6001-2RS/6002-2RS at $3–$8 each |
| **Hall-effect PCB** | Small FR-4 board with 3× A3144 sensors | $10 PCB fab + $5 parts |
| **Phase wires + connectors** | Silicone insulated stranded Cu | ~$15 in wire + connectors |
| **Bonding epoxy / retention sleeve** | Loctite 648 or Kevlar-wrap for magnets | ~$20 |

**Bottom line:** Making the stator laminations is the deal-breaker. It is the single component that requires factory-scale tooling. Everything else you can machine, buy, or fudge — but you cannot hand-make a good lamination stack at home. If you try to skip lamination stacking and use a solid steel rotor, iron losses (eddy currents) will melt the motor in minutes at 20 kHz PWM.

**Verdict:** Build a motor "from scratch" by starting with **a scrap stator + rotor cup + magnets + bearings** (all salvaged from a dead hoverboard motor for $10–25) and doing everything else yourself: rewind the copper, machine new end-bells and shaft, wire up new Halls, and assemble. This is genuinely custom, is educational, and is realistic for one person and $10k.

---

## 2. Parts List for a "From-Scratch" Build (Realistic Path)

Assuming you start with a $15 dead hoverboard hub motor as your **stator core + rotor magnets + rotor cup** donor:

### 2a. Salvaged from the donor motor
- 27-slot or 30-slot laminated stator (typical hoverboard hub)
- 20 or 30 arc NdFeB magnets bonded to inside of rotor cup
- Rotor cup (steel ring, magnet carrier)
- Two 6001 or 6002 bearings (inspect; replace if worn — new pair $10)

### 2b. New materials you buy
| Item | Spec | Qty | Price | Source |
|---|---|--:|--:|---|
| Magnet wire | 22 AWG enamelled copper, single build, class H (200 °C) | 1 lb spool | $28 | [Remington 22 AWG](https://www.remingtonindustries.com/) or Amazon |
| Nomex insulation paper | 0.1 mm × 300 mm × 1 m | 1 roll | $18 | eBay / McMaster |
| Slot liners | Pre-cut paper, or cut from Nomex | — | $0 | DIY |
| High-temp epoxy | Loctite 648 or 3M DP270 | 50 g | $25 | Amazon |
| Coil-locking varnish | Red glyptol / Dolph AC-43 | 1 pt | $30 | eBay |
| Hall-effect sensors | Allegro A3144E or SS41 (latching type — check!) | 3 | $6 | Digi-Key |
| Small PCB for Halls | 30 mm × 15 mm 2-layer | 5-pack | $8 | JLCPCB |
| Phase wire | 14 AWG silicone stranded, red/black/blue | 3 ft each | $15 | Amazon |
| Bullet connectors | 4 mm gold bullets | 6 pairs | $8 | Amazon |
| Heat shrink | Assorted | 1 kit | $10 | Amazon |
| Shaft | 8 mm × 100 mm 4140 or 303 SS | 1 | $10 | McMaster (or salvage) |
| End bells | Machined 6061 Al or 3D-printed PETG for prototype | 2 | $15–60 | DIY |
| Bearings (fresh) | 6001-2RS or 6002-2RS deep-groove | 2 | $10 | Amazon/McMaster |

**Total new-materials cost: ~$185.** Add the $15 donor motor and you are at **~$200 all-in** for a truly hand-built motor — vs $50 for two ready-to-run used hoverboard motors.

You are paying ~$150 in premium for the *education* of doing it yourself. That is a legitimate reason, but it is not a budget win.

---

## 3. Tools You Need

| Tool | Purpose | Have it? | Substitute |
|---|---|---|---|
| Bench vise with soft jaws | Hold stator during winding | Common | Wooden clamps |
| Small torque screwdriver | Reassembly to spec | Common | Feel + Loctite |
| Multimeter (Fluke or similar) | Continuity + phase resistance test | On your BOM | Any DMM |
| LCR meter | Verify Ld/Lq after rewind | On your BOM | Skip; measure via signal-injection later |
| Small hobby file | Deburr stator teeth | Cheap | — |
| Fish paper / Nomex sheet | Slot insulation | Buy | Kapton tape (worse) |
| Lathe access | Shaft + end-bell turning | Rare | Send to job shop or 3D-print |
| 3D printer (optional) | End-bell prototypes | Common | Buy salvaged end-bells |
| Oven or hot plate | Cure varnish (150 °C × 2 hr) | Kitchen | Toaster oven (do NOT use food oven — fumes) |
| Rotor puller / arbor press | Separate rotor from bearing | Rare | Two spoons + patience (Hanselman-approved: no) |

---

## 4. Step-by-Step Build Sequence

### Phase A — Teardown (Day 1, ~2 hours)
1. Remove side covers of donor hub motor (3–6 screws per side).
2. Slide rotor cup off; note magnet orientation — mark N/S with a compass and a Sharpie.
3. Remove old stator windings: heat gun at 200 °C to soften varnish, then unwind carefully **while counting turns per tooth.** Write it down. This is your baseline.
4. Note the winding pattern (A-B-C-A-B-C for 9N6P/12N14P, etc.) — count how many teeth per phase and their sequence. Refer to the [Instructables BLDC rewind guide](https://www.instructables.com/How-to-Rewind-BLDC/) which documents the common patterns:
   - **12N14P:** `AabBCcaABbcC` or `AaACBbBACcCB` (uppercase = clockwise, lowercase = counter-clockwise)
   - **9N12P / 9N6P:** `ABCABCABC`
   - **9N8P:** `AaABbBCcC` (rare)
5. Photograph the stator from multiple angles. Number the teeth with a permanent marker.
6. Inspect stator core for damage: no cracked laminations, no bluing (heat damage), no rust between plates. If damage found, discard and buy another donor.

### Phase B — Stator Prep (Day 2, ~3 hours)
7. Deburr every stator tooth edge with a needle file. Rough edges will slice enamel and short your winding to core.
8. If the stator's factory insulation coating is intact, skip to step 10. If burnt/cracked, dip the whole stator in rubber-based insulating paint ("stator black" or Glyptol), drain, and cure at 80 °C for 4 hours per the [Instructables rewind guide](https://www.instructables.com/How-to-Rewind-BLDC/).
9. Cut slot liners from Nomex paper: one U-shaped piece per slot, 2 mm shorter than the stack length on each end. Insert them into every slot before winding.
10. **Decide your target Kv.** More turns per tooth → higher Kt/Ke → lower Kv → higher torque, lower speed. The [SlideShare rewind reference](https://es.slideshare.net/slideshow/rewinding-a-bldc-motor/78506679) notes typical hoverboard hubs use 8-turn windings with 3× 36 AWG parallel strands. For your benchtop 48 V bus at ~500 rpm, keep the factory turn count as the baseline; only change if you have a specific reason.

### Phase C — Winding (Day 3, ~6–8 hours — this is the long day)
11. Cut three lengths of magnet wire, each ~5 m long (adjust for stator size). Tag one end of each with tape: "A", "B", "C".
12. **Wind phase A first.** Start at tooth #1 with the tagged end. Wind 8 turns (or whatever the factory count was) *clockwise viewed from the outside*, laid tight and flat against the tooth walls. Do NOT pull hard — 1–2 lb of tension max, per the Instructables guide (over-tensioning shorts the winding to the core).
13. Skip 2 teeth. Wind tooth #4 counter-clockwise 8 turns. Skip 2 teeth. Wind tooth #7 clockwise 8 turns. Continue around the ring following the phase-A pattern for your slot/pole combo.
14. When phase A is complete, tag its start "S1" and its end "E1". **Test with a multimeter: continuity between S1 and E1 must exist; continuity from S1 or E1 to stator iron must be infinite (open).** If shorted, unwind and start over. Do not proceed.
15. Repeat for phase B (starting from a different tooth per your winding pattern), tagging S2/E2.
16. Repeat for phase C, tagging S3/E3.
17. **Terminate as Wye (star)** for higher torque / lower speed (recommended for benchtop): connect E1+E2+E3 as the star point. S1, S2, S3 become your three phase leads (A, B, C).
    - *Alternative: Delta* connection (E1↔S2, E2↔S3, E3↔S1) gives ~1.73× higher speed and ~1.73× lower torque per amp. Not what you want for benchtop torque testing.

### Phase D — Insulate & Cure (Day 4, ~4 hours plus overnight)
18. Solder each phase lead to a 12" pigtail of 14 AWG silicone wire. Cover with heat-shrink.
19. Brush or dip the entire winding in insulating varnish (Dolph AC-43 red glyptol). Let excess drip off for 20 minutes.
20. Cure at 150 °C for 2 hours in a dedicated oven (**NOT** the kitchen — varnish fumes are toxic). Toaster oven from Facebook Marketplace, $10, use outdoors.
21. Cool overnight. Re-test phase-to-phase continuity (should be equal within 5 %) and phase-to-core continuity (should be infinite / > 10 MΩ).

### Phase E — Rotor & Magnets (Day 5, ~2 hours if reusing salvaged rotor cup)
22. Inspect salvaged magnets: any cracks, chips, or loose bonding = replace with new N42 arc magnets ($1–3 each in bulk from [Made-in-China](https://www.made-in-china.com/price/prodetail_NdFeB-Magnet_CtAUQhRjbBkS.html), verify dimensions match your rotor).
23. If replacing: mark rotor cup with alternating N/S positions (compass test each magnet before install). Bond with Loctite 648 or 3M DP270 epoxy. **Wear gloves — a slipped arc magnet at 30 g moving at 5 m/s will remove skin.**
24. Optionally wrap the outside of the magnet ring with 3 layers of Kevlar tow + resin as a retention sleeve. Not strictly required at 500 rpm but good practice.
25. Press new bearings into the rotor cup (or reuse if smooth and quiet).

### Phase F — End Bells, Shaft, Halls (Day 6, ~4 hours)
26. Turn or 3D-print end bells. Prototype in PETG or PC-CF filament first; migrate to machined 6061 aluminum after you validate fit. Critical dimensions: bearing pocket ID (H7 slip fit), stator OD register (H7), overall concentricity within 0.05 mm.
27. Press-fit the shaft into one end bell (the driven side), leave the other end floating on the bearing.
28. Mount a small Hall-sensor PCB against the stator's back face, positioned at the electrical zero of phase A. Use 3× A3144E latching Hall ICs spaced at 120° electrical (= 120°/pole-pair mechanical). For a 15-pole-pair hoverboard rotor, that's 8° mechanical spacing.
29. Solder the Hall board's 5V/GND/A/B/C leads to a 5-conductor cable.

### Phase G — Assembly & First-Turn Test (Day 7, ~2 hours)
30. Slide rotor+cup+magnets over the stator, being ready for the magnetic snap. **Use two hands and eye protection.** The rotor will pull itself into place with 20–50 lbf.
31. Bolt end bells down evenly, ~4 N·m each screw in a crossing pattern.
32. Spin by hand: should feel smooth cogging with even detents, no scraping, no wobble.
33. Multimeter final check: phase-to-phase 30–200 mΩ balanced within 5 %, phase-to-shaft > 10 MΩ.
34. **Do not power it yet.** Connect to an oscilloscope and hand-spin: you should see three sinusoidal back-EMFs at 120° electrical phasing. Amplitude tells you your Ke. If waveforms are asymmetric or missing a phase, unwind and re-inspect.

### Phase H — Bring-Up on Your CBJG Controller (Week 2)
35. Follow the Phase 2–4 sequence in `03_design_proposal/design_proposal.md`: current-limited PSU, open-loop alignment on Halls, then closed-loop FOC on Hall angle, then EKF overlay.

---

## 5. Where Beginners Fail (Read Before Winding)

Salvage from every rewind war-story on Instructables and SlideShare:

1. **Shorted turn** (winding-to-core): #1 cause of blown ESCs. Test after each phase, not at the end. Kapton tape on tooth tips helps.
2. **Wrong turn count between phases:** all three phases must have identical turn count. Off-by-one = permanent 5–10 % torque imbalance and vibration.
3. **Wrong pattern direction:** if you wound tooth #4 clockwise when the pattern said counter-clockwise, the phase back-EMFs won't be 120° apart. Motor will hum, not spin. Unwind that phase and restart.
4. **Hall alignment off:** Halls not on electrical-A zero → commutation is offset → motor runs but with reduced torque and reversed rotation possibilities. Fixed either physically (re-glue the Hall PCB) or in firmware (`hall_offset_deg` parameter).
5. **Skipped varnish cure:** windings vibrate loose, chafe against each other, short within a few hours of running. Cure. Every. Time.
6. **Reused burnt magnets:** magnets that have seen > 120 °C (curie-adjacent for N-grade) are permanently weakened. If the donor motor smells burnt, its magnets are too. Replace.
7. **Wrong Hall type:** hoverboard motors use *latching* Halls (SS41, A3144). Linear Halls (A1302) will not commutate.
8. **Bearing preload wrong:** if end bells are over-torqued, bearings bind; motor won't spin freely and heats fast.

---

## 6. Honest Comparison: From-Scratch vs Buying Used

| Metric | From-scratch rewind | Just buy 2× used |
|---|---|---|
| Cost | ~$200 (donor + materials) | ~$30–50 (pair) |
| Time | 7 full days | 1 day |
| Educational value | Very high — you understand the motor now | Low — it's a black box |
| Reliability | Depends on your winding | Factory-QA'd, plug-and-play |
| Kt/Ke known? | Yes, you designed it | No, you must measure |
| RSD estimator value | Same either way — RSD works on both | Same |
| Failure recovery | You can fix it | Buy another for $15 |

**Recommendation:** if the goal is a **working RSD test rig ASAP,** buy two used motors. If the goal is **understanding every part of the electromagnetic machine** (which is the actual "K" in RSD-K — model state you can explain), do a rewind of one used motor as an educational build, and buy a second untouched used motor as the reliable back-to-back dyno load. That's genuinely $200 well spent for the CBJG project's epistemic goals.

---

## 7. What About Truly From-Scratch (Making Laminations)?

If you insist on making the stator core yourself:

- **Option 1: Wire EDM** a stack of ~50 individual laminations from 0.35 mm M19 or M43 electrical steel sheet ([e.g. Steelworks](https://www.steelworks.com/)). ~$5–8 per lamination in setup + material. **~$300–500 for the stack**, plus alignment jig. Bond with C-5 core plate varnish. This is expensive but doable at a job shop.
- **Option 2: Laser cut** each lamination — cheaper (~$1–2 each) but laser cutting locally re-crystallizes the grain-oriented steel at the cut edge, degrading magnetic properties by 5–20 %. Only acceptable for a research build where you accept the loss.
- **Option 3: Solid steel rotor** — do NOT do this. Eddy losses at 20 kHz PWM in a solid steel back-iron will heat the rotor to 200 °C in minutes and cook your magnets.
- **Option 4: SMC (soft magnetic composite)** — 3D-printable metal powder + binder. Real, but requires post-sintering. Way beyond a $10 k benchtop budget.

For a one-off CBJG-scale build, **wire-EDM'd laminations at a local job shop is the only from-truly-scratch path that produces a working motor.** Budget $500 + 2 weeks lead time. And you still need the copper, magnets, shaft, bearings, and end bells on top. Total: $800–1,000 for a one-off custom-geometry motor. That is legitimate; it is just not "hoverboard-cheap".

---

## 8. Sources

- Instructables — *How to Rewind BLDC*: https://www.instructables.com/How-to-Rewind-BLDC/
- SlideShare — *Rewinding a BLDC Motor* (winding patterns for 9N6P/12N14P/9N8P): https://es.slideshare.net/slideshow/rewinding-a-bldc-motor/78506679
- Gator Lamination — *Progressive High-Speed Stamping Cost*: https://www.gatorlamination.com/progressive-high-speed-stamping-cost-for-motor-laminations/
- Made-in-China — N42 NdFeB arc magnet pricing: https://www.made-in-china.com/video-channel/hhsmagnet_NZKtfAHoZpRj_Sintered-N42-NdFeB-Rare-Earth-Magnet-Arc-Magnet.html
- Hanselman, *Brushless Permanent Magnet Motor Design* 2e — Ch. 5 (rotor construction), Ch. 6 (windings). Already on your Mac in `/Users/james/Downloads/project/`.
- Local project artifacts — `03_design_proposal/design_proposal.md` for the assembled-motor bring-up sequence this feeds into.
