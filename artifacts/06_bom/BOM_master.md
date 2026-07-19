# Master Bill of Materials — CBJG / RSD Benchtop BLDC Engine
**Budget:** $10,000 · **Sourcing rule:** everything possible from Facebook Marketplace; silicon and precision parts from Digi-Key/Mouser/eBay.
**Rev:** v0.1 · 2026-07-17

## Cost roll-up

| Category | Marketplace target | New retail worst-case | Notes |
|---|---:|---:|---|
| A. Motors & mechanical | $250 | $700 | Two identical hoverboard hubs + coupling + baseplate |
| B. Batteries & DC power | $500 | $1,200 | 48V LiFePO4 pack + bench PSU |
| C. Power stage (silicon + passives) | $650 | $1,150 | Almost all from Digi-Key; Marketplace won't help |
| D. Sensing & measurement | $2,100 | $4,400 | Scope, current probe, LCR meter, thermal camera |
| E. Safety hardware | $650 | $1,300 | Contactor, E-stop, enclosure |
| F. Bench infrastructure | $500 | $900 | Workbench, PSU cables, tools |
| G. Firmware / dev | $150 | $250 | Nucleo, programmer, cables |
| H. Contingency (15 %) | $700 | | Marketplace surprises |
| **TOTAL** | **$5,500** | **$9,900** | Fits inside $10 k with margin |

---

## A. Motors & Mechanical  (target $250)

| # | Item | Spec | Marketplace price | New price | Source strategy |
|--:|---|---|---:|---:|---|
| A1 | Motor-under-test (DUT) | 6.5" hoverboard hub motor, 36V 350W, integrated Halls | $10–25 | ~$60 | Search "hoverboard parts", "scooter motor". Buy from someone parting out a broken scooter |
| A2 | Load motor | Identical 6.5" hoverboard hub | $10–25 | ~$60 | Buy A1 and A2 in one purchase if possible |
| A3 | Shaft adapter pair | 12 mm hub → 8 mm keyed shaft | $30 | $60 | Machined; or Marketplace CNC hobbyist trade |
| A4 | Jaw coupling | Lovejoy L090, 8 mm bores, NBR 92 SH.A spider | $20–35 | $55 | Widely available industrial-surplus |
| A5 | Baseplate | 24"×12"×½" 6061-T6 aluminum, T-slot or drilled grid | $40–80 | $130 | Machine-shop offcut on Marketplace |
| A6 | Motor brackets | 2× 90° aluminum L-brackets, ¼"×2"×3" | $10 | $30 | Home Depot / Marketplace surplus |
| A7 | Fasteners | M6/M8 socket-cap, T-nuts, washers | $15 | $25 | Hardware store |
| A8 | Vibration isolators | 4× Sorbothane 40-durometer, 50 lb rating | $30 | $50 | McMaster ($46/4) or Marketplace surplus |
| A9 | Coupling guard | ⅛" mild steel, bent | $10 stock | $30 fab | Cut/bend at home |
| **Subtotal A** | | | **$175–260** | **$500** | |

---

## B. Batteries & DC Power  (target $500)

| # | Item | Spec | Marketplace price | New price | Source strategy |
|--:|---|---|---:|---:|---|
| B1 | LiFePO4 pack | 48V 30-50Ah server-rack (EG4 LL-S, SOK, etc.) | $200–350 | $900 | Search "server rack battery", "solar battery". Inspect BMS, ideally < 2 y old |
| B2 | Battery cables | 4 AWG copper, 3-ft pair with lugs | $25 | $40 | Marketplace welding-surplus |
| B3 | Bench PSU (backup) | 48V 20A programmable (Rigol DP832, Siglent SPD3303X) | $180–300 | $500 | Used tech-surplus |
| B4 | Battery balancer/monitor | Bluetooth BMS shunt (Victron, JK-BMS) | $60 | $130 | Nice-to-have, not critical |
| **Subtotal B** | | | **$465–735** | **$1,570** | |

⚠ **Battery inspection is non-negotiable.** Per Gemini's playbook: measure resting voltage; walk away if resting < 32 V on a 48 V pack, if cells are > 20 mV imbalanced, or if any puffing/damage is visible.

---

## C. Power Stage — Silicon & Passives  (target $650, mostly Digi-Key)

| # | Item | P/N | Qty | Unit | Ext | Source |
|--:|---|---|--:|---:|---:|---|
| C1 | MOSFET | IRFB4110PbF (Infineon) | 8 | $2.80 | $22 | Digi-Key |
| C2 | Gate driver | DRV8353RSRGZR (TI) | 2 | $12 | $24 | Digi-Key (buy spare) |
| C3 | Current-sense amp | INA240A2QDRQ1 | 4 | $4.80 | $19 | Digi-Key (3 + spare) |
| C4 | Kelvin shunt | Bourns CSS2H-2512K-L1L00F, 1 mΩ 3 W | 4 | $6 | $24 | Digi-Key |
| C5 | Bulk cap | Nichicon LGN2A102MELB40, 1000 µF 100 V | 4 | $9 | $36 | Digi-Key |
| C6 | Film cap | WIMA DC-Link 10 µF 100 V | 2 | $6 | $12 | Digi-Key |
| C7 | Ceramic cap | X7R 1 µF 100 V, 1210 | 20 | $0.30 | $6 | Digi-Key |
| C8 | Ceramic cap | X7R 100 nF 100 V, 0805 | 40 | $0.10 | $4 | Digi-Key |
| C9 | TVS diode | SMDJ58A | 2 | $2 | $4 | Digi-Key |
| C10 | Bleeder resistor | 10 kΩ 2 W wirewound | 2 | $2 | $4 | Digi-Key |
| C11 | Precharge resistor | 25 Ω 25 W wirewound (Ohmite TCH35) | 2 | $8 | $16 | Digi-Key |
| C12 | Bus voltage divider parts | Precision 1 % 0805 resistor kit + OPA320 buffer | 1 | $30 | $30 | Digi-Key |
| C13 | Heatsink | Wakefield-Vette 673-30ABPE, 1.5 °C/W with fan slot | 1 | $22 | $22 | Digi-Key |
| C14 | 40 mm 5V fan | Noctua NF-A4x20 5V or Sunon | 2 | $18 | $36 | Amazon or Marketplace |
| C15 | Thermal interface | Kapton TO-220 pad kit + Arctic MX-4 | 1 | $18 | $18 | Amazon |
| C16 | PCB fab | 4-layer, 2 oz outer, 100×160 mm, 5-piece run at JLCPCB | 1 | $80 | $80 | JLCPCB / OSHPark |
| C17 | Custom PCB assembly (optional) | SMT paste + stencil + hot-plate reflow | 1 | $60 | $200 | DIY with hot plate ($40) |
| C18 | Bus bar copper | 25 mm × 3 mm bare Cu strip, 500 mm | 1 | $15 | $15 | Amazon |
| C19 | Terminal blocks | Phoenix Contact PT 6-HESI screw terminals | 8 | $3.50 | $28 | Digi-Key |
| C20 | Connectors | XT60 / XT90 pairs for battery, XT30 for aux | 6 | $2 | $12 | Amazon |
| C21 | Wire | 12 AWG silicone stranded, 10 ft each red/black | 1 | $18 | $18 | Amazon |
| C22 | Safety latch IC | TPS3702CD30DRBR or SR flip-flop kit | 2 | $3 | $6 | Digi-Key |
| C23 | Comparators | LM339 quad or MAX9144 | 4 | $1.50 | $6 | Digi-Key |
| **Subtotal C** | | | | | **~$442** | Below target; leaves headroom for rework |

---

## D. Sensing & Measurement  (target $2,100)

The instrumentation is where the $10 k budget really pays. Buy used aggressively.

| # | Item | Spec | Marketplace price | New price | Source strategy |
|--:|---|---|---:|---:|---|
| D1 | Oscilloscope | 4-ch, ≥ 100 MHz, Rigol DS1054Z / Siglent SDS1104X-E / older Tek TDS3054 | $300–600 | $700 | Search "oscilloscope"; check that all four channels work |
| D2 | High-voltage differential probe | 100× diff, 700 V rating (Micsig, older Tek P5205A) | $150–300 | $500 | Critical for probing bus & phase safely |
| D3 | Current probe | Micsig or older Tek TCPA300/TCP0030 AC/DC current probe, 30 A range | $400–700 | $1,500 | This is the one instrument to splurge on used |
| D4 | LCR meter | East Tester ET4410, DER EE DE-5000, older HP 4262A | $150–300 | $400 | For Ld/Lq measurement |
| D5 | DMM | Fluke 87V or 179 or Brymen BM786 | $80–200 | $400 | Marketplace has these constantly |
| D6 | Thermal camera | FLIR C3-X or older FLIR E4/E5 (hacked or original) | $200–400 | $700 | Watch for stolen units; ask origin |
| D7 | Bench multimeter | Optional 6.5-digit (Keithley 2000, HP 34401A) | $200–400 | $1,000 | Nice-to-have for Rs measurement |
| D8 | RTD / thermistor kit | 4× PT100 3-wire + 4× 10 kΩ NTC B25/50=3950 | $30 | $50 | Amazon |
| D9 | Encoder (validation) | US Digital E5-1024-118-IE-M-D | $50–100 | $135 | For EKF ground truth |
| D10 | Torque sensor (optional) | Futek TRS300, 5 N·m rotary | $300–500 | $2,500 | Optional but excellent RSD validation |
| D11 | Isolated USB hub | ADuM3160-based or Tripp-Lite USB-ISO | $30 | $80 | Protects host PC |
| **Subtotal D** | | | **$1,890–3,530** | **$8,265** | Budget target $2,100 → buy carefully |

---

## E. Safety Hardware  (target $650)

| # | Item | Spec | Marketplace price | New price | Source strategy |
|--:|---|---|---:|---:|---|
| E1 | DC contactor | Gigavac GX11BB (200A/500V DC) or Albright SW180 | $80–160 | $250 | Search "solar contactor", "EV contactor" |
| E2 | E-stop button | Idem SPEB dual-channel, latching, NC | $60 | $150 | Marketplace industrial-surplus |
| E3 | Safety relay | Pilz PNOZ e1p or Idem SEM.SU dual-channel | $75 | $220 | Optional if using discrete latch chain |
| E4 | DC fuse holder + fuse | Class T holder + 30A fuse | $30 | $60 | Marine/solar suppliers |
| E5 | Polycarbonate | 24"×24"×½" clear Lexan MR10 | $60–120 | $180 | Sign shops on Marketplace often have offcuts |
| E6 | Enclosure frame | 80/20 aluminum extrusion, ~10 ft of 1"×1" + gussets | $80–150 | $250 | Marketplace surplus/hobbyist teardown |
| E7 | Door interlock | Idem SafeMag Ex-L1 or Schmersal AZ 17-11ZK | $30–60 | $130 | Industrial surplus |
| E8 | Class 0 gloves + safety glasses | 1000 V rated + ANSI Z87.1 | $70 | $110 | New only — do not buy used PPE |
| E9 | Fire extinguisher | Class C small (Kidde 4A:60B:C) | $30 | $50 | Home Depot |
| **Subtotal E** | | | **$515–825** | **$1,400** | |

---

## F. Bench Infrastructure  (target $500)

| # | Item | Spec | Marketplace price | New price |
|--:|---|---|---:|---:|
| F1 | Sturdy workbench | 6-ft steel frame with wood top | $80–200 | $400 |
| F2 | Anti-static mat + wrist strap | 24"×48" ESD-safe | $40 | $80 |
| F3 | Silicone soldering mat | 20"×15" | $20 | $35 |
| F4 | Soldering station | Hakko FX-888D or Weller WE1010NA | $80–150 | $200 |
| F5 | Hot-air rework | 858D or similar | $50 | $100 |
| F6 | Wire strippers, side cutters, ferrule crimper | Weidmuller or Knipex-clone kit | $60 | $150 |
| F7 | Load bank (dump resistors) | 5× 4Ω 100W (thick-film in TO-247) or nichrome coils | $50 | $150 |
| **Subtotal F** | | | **$380–570** | **$1,115** | |

---

## G. Firmware / Development  (target $150)

| # | Item | P/N | Qty | Unit | Ext |
|--:|---|---|--:|---:|---:|
| G1 | Nucleo dev board | Nucleo-G474RE | 1 | $15 | $15 |
| G2 | ST-Link programmer | ST-LINK/V3MINI-E | 1 | $28 | $28 |
| G3 | Logic analyzer | Saleae Logic 8 clone or 24 MHz 8-ch | $15 | $15 |
| G4 | USB-CAN adapter | CANable Pro or CandleLight | 1 | $50 | $50 |
| G5 | Breadboard + jumpers | | | | $20 |
| G6 | Odd cables (USB-C, JTAG, IDC) | | | | $30 |
| **Subtotal G** | | | | | **$158** |

---

## H. Contingency  (15 %)

$700 reserved for: replacement MOSFETs after the inevitable first shoot-through, connectors you didn't plan for, a second motor when you cook the first, and Marketplace no-shows / mispriced items.

---

## Marketplace search terms to save

Keep these searches saved on Facebook Marketplace with alerts on:

- `hoverboard motor` / `hoverboard parts`
- `e-bike motor 350W` / `hub motor`
- `48V LiFePO4` / `server rack battery` / `solar battery`
- `oscilloscope Rigol` / `Siglent scope`
- `current probe Tektronix` / `TCP-A300` / `Micsig current`
- `FLIR thermal camera` / `thermal imager`
- `LCR meter DER EE` / `Keysight LCR`
- `Gigavac contactor` / `Albright contactor`
- `Lovejoy coupling` / `jaw coupling`
- `80/20 extrusion` / `T-slot aluminum`
- `polycarbonate sheet` / `Lexan MR10`

---

## Purchase sequence recommendation

**Phase 0 — before you buy any silicon** (Week 1):
1. Buy A1+A2 (matched hoverboard motors) — commit to the motor topology first.
2. Bench-test them: measure Rs, back-EMF at hand-spin RPM, cogging, Hall alignment.
3. If A1/A2 look bad, walk them back and re-source before spending on silicon.

**Phase 1 — safety before power** (Week 1–2):
4. E1 contactor, E2 E-stop, E4 fuse, E8 PPE, E9 fire extinguisher.
5. B1 battery only *after* you have a contactor and fuse to gate it with.

**Phase 2 — instrumentation** (Week 2–3):
6. D1 scope, D2 diff probe, D5 DMM — you cannot debug what you cannot measure.
7. D3 current probe — the single most valuable RSD-validation tool.

**Phase 3 — power stage build** (Week 3–5):
8. C1–C23 batch order from Digi-Key/Mouser.
9. C16 PCB fab.
10. Assemble, bring up on Nucleo, dead-bug test at 12 V first.

**Phase 4 — first spin-up** (Week 6+):
11. Assemble mechanical dyno, enclose, interlock, spin at 5 % throttle.
12. Only then log data for RSD-K validation.

Total elapsed: 6–8 weeks realistic, 12+ weeks if Marketplace listings are slow in New Braunfels.
