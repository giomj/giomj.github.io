# Mechanical Blueprint — Benchtop Dyno & Motor Mounting
**Doc:** MECH-01 · **Rev:** v0.1

## Layout: back-to-back dyno on rigid baseplate

```
   ┌───────────────────────────────────────────────────────────────────────┐
   │                    POLYCARBONATE ENCLOSURE (1/2" Lexan)               │
   │  ┌─────────────────────────────────────────────────────────────────┐  │
   │  │                                                                   │  │
   │  │  ┌─ MOTOR-UNDER-TEST (DUT) ─┐    ┌─── LOAD MOTOR ────┐          │  │
   │  │  │  6.5" hoverboard hub     │────│ 6.5" hoverboard   │          │  │
   │  │  │  36V / 350W / SPM        │  ┌─┤ hub, identical    │          │  │
   │  │  │  Halls + phase leads     │  │ │ used as generator │          │  │
   │  │  └────────────┬─────────────┘  │ └───┬───────────────┘          │  │
   │  │               │                 │     │                          │  │
   │  │      SHAFT ADAPTER ─── JAW COUPLING (Lovejoy L090, elastomer) ─── SHAFT ADAPTER  │  │
   │  │               │                       │                          │  │
   │  │  ┌────────────┴───────────────────────┴──────────────┐          │  │
   │  │  │       1/2" 6061 ALUMINUM BASEPLATE, 24"×12"        │          │  │
   │  │  │       (T-slot rails or drilled/tapped 1/4-20)      │          │  │
   │  │  └────────────────────────────────────────────────────┘          │  │
   │  │                                                                   │  │
   │  │  ── COUPLING GUARD (1/8" steel, bolted over jaw) ──               │  │
   │  │                                                                   │  │
   │  │  ── Load motor phase leads ──► DUMP RESISTOR BANK (5× 4Ω/100W)   │  │
   │  │                                 or ► second inverter regen-mode  │  │
   │  └─────────────────────────────────────────────────────────────────┘  │
   │                                                                       │
   │  ── Enclosure door interlocked with safety latch (open door = STO) ── │
   │  ── HV-PRESENT LED visible through enclosure wall ────────────────── │
   └───────────────────────────────────────────────────────────────────────┘
```

## Critical dimensions & specs

| Item | Spec | Rationale |
|---|---|---|
| Baseplate | 1/2" (12.7 mm) 6061-T6 Al, 24" × 12" | Rigid, machinable, drilled M6 or 1/4-20 grid at 1" pitch |
| Motor spacing (DUT ↔ Load) | 120 mm center-to-center | Room for coupling + torque arm if added later |
| Coupling | Lovejoy L090 or L095 jaw with 92 SH.A NBR spider | Elastomer absorbs misalignment; failure mode is soft |
| Coupling guard | 1/8" (3 mm) mild steel, min 25 mm clearance to rotating parts | Contains a shattered spider |
| Enclosure | 1/2" (12 mm) Lexan/polycarbonate (never acrylic) | Impact-resistant; contains ejected magnet at 500 rpm |
| Enclosure interlock | Magnetic reed switch, safety-rated (Idem, Schmersal) | Door open → STO chain trips |
| Torque sensor (optional) | Futek TRS300 in-line, 5 N·m range, ~$450 used | Ground-truth for EKF `TL` estimate |
| Encoder (validation) | US Digital E5 optical, 1024 CPR on DUT shaft | Ground truth for EKF `θ, ω` |
| Vibration base | 4× Sorbothane isolators, 40 durometer, ~50 kg rating | Bench decoupling |

## Safety envelope calc (Gemini §4)

**Rotor kinetic energy at max design speed:**
```
J_hover_hub ≈ 0.006 kg·m²  (estimated for 6.5" hub motor rotor + tire, from typical specs)
ω_max = 500 rpm × 2π/60 = 52.4 rad/s
E_kin = ½·J·ω² = ½·0.006·52.4² ≈ 8.2 J
```
That's roughly the energy of a 20 g mass thrown at 30 m/s — meaningful but not catastrophic. **A single-pane 1/2" polycarbonate enclosure will contain it** (Lexan MR10 impact rating: ~250 ft-lbf/in ≈ ~50 J for a 12 mm sheet).

**If someone later up-speeds this to a 5065-outrunner at 6000 rpm with the same rotor moment (a fantasy but worth checking):**
```
E_kin at 6000 rpm ≈ 1180 J → NOT safely contained by 1/2" Lexan.
```
This is why the design deliberately keeps the hoverboard hub topology: **low speed × high torque = low kinetic hazard.**

## Mechanical BOM sub-list (details in `06_bom/`)

- Baseplate: 24"×12"×1/2" 6061 Al, ~$85 new; watch Marketplace for surplus.
- Lexan sheet 24"×24"×1/2": ~$180 online; Marketplace surplus sign shops sometimes have offcuts $30–60.
- Sorbothane isolators ×4: ~$50 total.
- L090 jaw coupling + shaft adapters: ~$80 including bore-machining if you own a drill press.
- Coupling guard (steel bent to shape): ~$15 in raw stock.
- Safety magnetic interlock: Idem SafeMag Ex-L1, ~$95 new; Marketplace industrial-surplus $20–40.
- Fasteners, T-nuts, brackets: ~$50.
- Optional torque sensor (Futek used): $300–500.
- Optional encoder (US Digital E5 used): $50–100.
