# GPT-5 Council Seat: Power Electronics, DC Bus, Gate Drive, Sensing, and Thermal Review

**Project:** CBJG / RSD benchtop 3-phase BLDC/IPM electrical engine  
**Scope:** 48 V DC bus, 100–500 W, about 10 A rms phase current, 20 kHz PWM, conventional motor control with RSD as EKF + SMO + HFI + energy-aware scheduler.  
**Verdict:** Build a conservative low-voltage 3-phase voltage-source inverter with high-quality current measurement and hardwired shutdown. Do not let the RSD layer become the safety layer.

---

## 0. Constraints I am assuming

- DC bus: 48 V nominal bench supply or battery, possible 54–60 V high-line and inductive overshoot.
- Motor: Y-connected 3-phase BLDC/PMSM/IPM, 100–500 W, phase current target around 10 A rms, short transients to 20–30 A.
- Control: center-aligned PWM at 20 kHz; current/control loop at 10–20 kHz; EKF update nominally 10 kHz; scheduler and identification loops slower.
- Bench goal: safe, inspectable, repairable, instrumentable; not minimum size.

The required project files frame RSD correctly as an estimation/observability/scheduling layer, not new physics, and explicitly require phase-current/bus-voltage measurement, EKF innovation checking, SMO/HFI, and energy/thermal auditing (`/home/user/workspace/artifacts/01_rsd_foundations/rsd_math_foundations.md`). Hanselman’s excerpt supports the basic motor-control premise: torque production comes from controlling phase currents against phase back-EMF, Y-connected 6-switch drives are the dominant practical topology, and sinusoidal current control needs continuous position/angle information rather than six Hall transitions (`/home/user/workspace/artifacts/pdf_corpus_for_council.txt`).

---

## 1. Inverter topology and MOSFET choice

### Recommendation

Use a **3-phase, 6-N-channel-MOSFET voltage-source inverter** with a split layout by half-bridge, Kelvin source returns, local ceramic/film DC-link capacitors at each leg, and a hardware gate-enable shutdown path.

For the first benchtop build, use **IRFB4110PbF-class 100 V TO-220 MOSFETs** rather than 60 V ultra-low-Rds(on) parts or 150 V SOT-227 modules.

### Picked part

**Infineon / International Rectifier IRFB4110PbF**

Key reasons:

- **Voltage margin:** IRFB4110PbF is a 100 V N-channel MOSFET with 4.5 mΩ max Rds(on) and 120 A package-limited continuous current in TO-220AB, which is a much safer class for a 48 V bus than a 60 V MOSFET once cable inductance, regen, and layout overshoot are included ([IRFB4110PbF datasheet summary](https://alltransistors.com/mosfet/transistor.php?transistor=36048)).
- **Thermal margin at 10 A rms:** even using hot Rds(on) around 1.5× the 25 °C value, per-device conduction loss is comfortably below the thermal limit in this power class.
- **Assembly/debug:** TO-220 packages are easy to probe, replace, insulate, and mount to a common heatsink; this matters more than squeezing the last 0.5 percent efficiency out of a benchtop RSD test article.
- **Availability:** IRFB4110 and equivalents are widely available, and counterfeit risk can be managed by buying from Mouser/Digi-Key/Newark/Arrow rather than marketplaces.

### Why not the other example classes

| Candidate | Electrical fit | Build fit | Decision |
|---|---:|---:|---|
| **IRFB4110PbF, 100 V, TO-220** | Adequate voltage and low loss at 10 A rms | Very good for bench repair/probing | **Use** |
| **IPB017N06N / 60 V OptiMOS class** | Excellent Rds(on), but 60 V is too tight for a 48 V bus | SMT power layout required | **Reject for first build**: insufficient bus-transient margin |
| **IXFN360N15T2, 150 V SOT-227** | Very rugged, 4 mΩ, huge current headroom | Mechanically large, high gate charge, expensive | **Reject**: overkill and slower/harder to drive; Littelfuse lists 150 V, 310 A, 4 mΩ and low gate charge relative to its class, but distributor summaries list about 715 nC Qg ([Littelfuse](https://www.littelfuse.com/products/power-semiconductors-control-ics/mosfets-si-sic/n-channel-trench-gate/gen2/ixfn360n15t2), [TME](https://www.tme.com/us/en-us/details/ixfn360n15t2/transistor-modules-mosfet/ixys/)) |

### Loss check for IRFB4110-class devices

Use hot Rds(on):

\[
R_{DS(on),hot} \approx 1.5 R_{DS(on),25C} \approx 1.5 \cdot 4.5\,m\Omega = 6.75\,m\Omega
\]

For sinusoidal FOC, a reasonable first-order total bridge conduction loss is:

\[
P_{cond,total} \approx 3 I_{phase,rms}^{2} R_{DS(on),hot}
\]

At \(I_{phase,rms}=10\,A\):

\[
P_{cond,total} \approx 3 \cdot 10^2 \cdot 6.75\,m\Omega \approx 2.0\,W
\]

Per MOSFET average conduction loss is roughly:

\[
P_{cond,FET} \approx \frac{1}{2} I_{phase,rms}^{2} R_{DS(on),hot} \approx 0.34\,W
\]

Switching loss estimate per actively switched MOSFET:

\[
P_{sw,FET} \approx \frac{1}{2} V_{bus} I_{sw} (t_r+t_f) f_{sw}
\]

Using \(V_{bus}=48\,V\), \(I_{sw}=10\,A\), \(t_r+t_f=100\,ns\), \(f_{sw}=20\,kHz\):

\[
P_{sw,FET} \approx 0.48\,W
\]

Gate-drive power per MOSFET is small but nonzero:

\[
P_{gate,FET}=Q_g V_{GS} f_{sw}
\]

For \(Q_g \approx 210\,nC\), \(V_{GS}=10\,V\), \(f_{sw}=20\,kHz\):

\[
P_{gate,FET}\approx 42\,mW
\]

Design the thermal system for **3 W per MOSFET worst-case**, not the typical 0.8–1.2 W calculation, because dead-time diode conduction, poor layout, shoot-through avoidance margins, current ripple, and hot Rds(on) will dominate early prototypes.

### Implementation notes

- Use **6x PWM inputs**, complementary PWM, hardware dead-time, and cycle-by-cycle overcurrent shutdown.
- Add **individual gate resistors**: start at 5–10 Ω turn-on and 2–5 Ω turn-off if split resistors/diodes are used.
- Add **10–15 V gate-source clamps** if the gate driver does not already provide adequate Vgs protection; DRV8353 includes high-side gate clamp behavior, but external layout still matters.
- Add **Kelvin source routing** from each MOSFET source to the driver return; do not share power-source copper with gate-driver return.
- Add a **TVS across the DC bus**, e.g. 58–64 V standoff class if the supply never exceeds that standoff, coordinated with the MOSFET voltage rating and supply maximum.

---

## 2. Gate driver choice

### Recommendation

Use **TI DRV8353RS or DRV8353S**, not IR2110 bootstrap drivers and not isolated Si823Hx for the first 48 V bench inverter.

The DRV8353 family is a 100 V three-phase smart gate driver for external N-channel MOSFETs; it supports 9–75 V VM, 7–100 V VDRAIN, 50 mA–1 A source and 100 mA–2 A sink gate-drive settings, 6x/3x/1x/independent PWM modes, VDS overcurrent monitoring, gate-drive faults, UVLO, thermal warning/shutdown, and nFAULT reporting ([TI DRV8353 datasheet](https://www.ti.com/lit/ds/symlink/drv8353.pdf)). The high side uses a **charge-pump/doubler architecture**, regulates the charge pump to about VDRAIN + 10.5 V, and supports 100 percent PWM duty cycle, avoiding the bootstrap refresh limitation that makes plain IR2110-style designs annoying during field weakening, braking, and static test states ([TI DRV8353 datasheet](https://www.ti.com/lit/ds/symlink/drv8353.pdf)).

### Why this choice

- **Against IR2110 / bootstrap-only:** IR2110-class drivers are simple and cheap but provide no meaningful system diagnostics, no VDS OCP, no gate-fault reporting, no SPI fault register, and high-side drive depends on bootstrap refresh. That is acceptable for a school inverter; it is not the best choice for a safety-instrumented RSD test stand.
- **Against isolated Si823Hx:** isolated half-bridge drivers are excellent for higher voltage or noisy industrial drives, but this 48 V, 500 W bench system does not need six isolated supplies and the extra layout/debug burden. Use isolation for USB/debug, control I/O, and measurement equipment protection instead.
- **For DRV8353RS:** it is the right middle ground: enough protection and diagnostics to support experiments, but still simpler than a fully isolated industrial gate-drive stack.

### Caveat

Do **not** rely on the DRV8353 internal current-shunt amplifiers as the primary EKF current measurement unless validated on the final PCB. They can be useful for protection and coarse current telemetry, but the RSD innovation loop needs cleaner, timestamped, well-characterized current channels.

---

## 3. Phase current sensing

### Recommendation

Use **three inline phase shunts plus INA240A1/A2 current-sense amplifiers**, sampled synchronously by the MCU ADC. Do not use ACS758 Hall sensors as the primary EKF current measurement.

The INA240 is a bidirectional current-sense amplifier with enhanced PWM rejection, -4 V to 80 V common-mode range, 400 kHz bandwidth, 2 V/µs slew rate, 25 µV max offset, fixed gains of 20/50/100/200 V/V, and specified settling behavior around 9.6–9.8 µs to 0.5 percent in the extracted datasheet details ([TI INA240 datasheet](https://www.ti.com/lit/ds/symlink/ina240.pdf)). The ACS758 is useful for isolated bus current or coarse safety telemetry, but it is not the first choice for a 10 kHz EKF innovation loop because Hall offset, noise, package thermal drift, and propagation/phase lag are harder to calibrate tightly than a Kelvin shunt plus a PWM-rejection amplifier.

### Specific sensing design

Use either:

- **Option A, lower loss:** 1.0 mΩ, 1 percent or 0.5 percent, 3–5 W, 4-terminal shunt + INA240A2 at 50 V/V.
- **Option B, more ADC headroom:** 2.0 mΩ, 1 percent or 0.5 percent, 3–5 W, 4-terminal shunt + INA240A1 at 20 V/V.

For Option A:

\[
V_{shunt}=I_{phase}R_s
\]

At \(I_{phase}=\pm20\,A\) and \(R_s=1\,m\Omega\):

\[
V_{shunt}=\pm20\,mV
\]

With gain 50:

\[
V_{out,swing}=\pm1.0\,V
\]

Bias the REF pin at 1.65 V for a 3.3 V ADC. That gives an approximate conversion scale:

\[
\Delta I_{ADC} = \frac{3.3\,V/4096}{50 \cdot 1\,m\Omega} \approx 16\,mA/count
\]

This is good enough for the EKF current innovation term if the analog front end is quiet and the sample timing is deterministic.

### Sampling rules

- Sample at the **center of PWM on-times**, using hardware timer triggers and DMA.
- Use **3 current channels**, not just 2, during development. The third channel is redundant for a balanced Y motor, but it is valuable for detecting sensor drift, phase open, connector faults, and current-reconstruction errors.
- Add a first-order RC after the amplifier or at the ADC input, but keep its pole above the EKF bandwidth. A practical start is 220 Ω and 4.7–10 nF, giving roughly 72–154 kHz before ADC sample/hold effects.
- Log raw ADC samples, filtered current, PWM duty, bus voltage, and estimator residuals with the same timestamp base.

---

## 4. DC bus capacitor bank, ripple, inrush, and precharge

### Recommended bus stack

For a 48 V / 500 W bench inverter:

- **Bulk electrolytic:** 2,200–4,700 µF total, 100 V rating, low ESR, ripple-current rating at least 5 A rms total; use multiple cans in parallel.
- **Film capacitor:** 2.2–10 µF, 100 V polypropylene or similar, mounted physically close to the MOSFET bridge.
- **Ceramics:** at least 1 µF + 100 nF 100 V X7R per half-bridge leg, placed from local +bus to local -bus with very short current loops.
- **Precharge:** 20–50 Ω resistor path, MOSFET or relay bypass after voltage confirmation.
- **Bleeder:** 10–22 kΩ, 1–2 W across the bus, with a visible HV-present LED or meter.
- **Protection:** DC fuse, reverse-polarity protection or keyed connector, TVS, and braking/regen clamp strategy.

### Ripple sizing equations

A conservative triangular-ripple sizing estimate is:

\[
C_{min} \ge \frac{I_{ripple}}{8 f_{sw} \Delta V_{pp}}
\]

If \(I_{ripple}=5\,A\), \(f_{sw}=20\,kHz\), and allowable switching ripple \(\Delta V_{pp}=1\,V\):

\[
C_{min}\ge\frac{5}{8\cdot20{,}000\cdot1}=31\,\mu F
\]

That small number is only the high-frequency ripple component; it does **not** size the bus for load steps, regen, bench-supply lead inductance, or electrolytic ripple current. For transient energy:

\[
C \ge \frac{2P\Delta t}{V_{hi}^{2}-V_{lo}^{2}}
\]

For a 500 W load step over 2 ms while allowing the bus to droop from 48 V to 44 V:

\[
C \ge \frac{2\cdot500\cdot0.002}{48^2-44^2} \approx 5.4\,mF
\]

That is why I recommend **2.2 mF as a minimum** and **4.7 mF preferred** for a bench rig, even though the PWM ripple equation alone says far less.

ESR ripple is:

\[
\Delta V_{ESR}=I_{C,rms}ESR_{bank}
\]

Use parallel capacitors so \(ESR_{bank}\) is a few milliohms to low tens of milliohms, and check that capacitor ripple-current ratings exceed the expected RMS bus-cap current. For 10 A rms phase current, assume **3–6 A rms capacitor ripple** until measured.

### Inrush and precharge equations

Capacitor stored energy:

\[
E_C=\frac{1}{2}CV^2
\]

For \(C=4.7\,mF\) and \(V=48\,V\):

\[
E_C\approx 5.4\,J
\]

Choose precharge resistance from allowed inrush current:

\[
R_{pre}\ge\frac{V_{bus}}{I_{pre,max}}
\]

For a 2 A inrush limit:

\[
R_{pre}\ge\frac{48}{2}=24\,\Omega
\]

Precharge time constant:

\[
\tau=R_{pre}C
\]

At 24 Ω and 4.7 mF:

\[
\tau\approx0.113\,s
\]

Command the bypass contactor/MOSFET only after at least \(5\tau\) and after measured bus voltage exceeds 90–95 percent of supply. Use a **25 Ω, 25–50 W wirewound resistor** or an NTC only if the start/stop duty cycle is low; a controlled resistor plus bypass is better for repeated bench testing.

Bleeder discharge time:

\[
V(t)=V_0e^{-t/(R_bC)}
\]

With 10 kΩ and 4.7 mF, \(\tau=47\,s\), so the bus can remain hazardous for minutes. Put the warning in the enclosure.

---

## 5. Thermal design and RSD-K thermal tie-in

### MOSFET heatsink sizing

Design target:

- Worst case per MOSFET: 3 W.
- Six MOSFETs: 18 W bridge loss.
- Ambient design point: 40 °C bench/enclosure.
- Junction target: below 100 °C continuous; shutdown before 125 °C.

Thermal path:

\[
T_j=T_a+P_{total}R_{\theta SA}+P_{FET}(R_{\theta CS}+R_{\theta JC})
\]

Solve for heatsink thermal resistance:

\[
R_{\theta SA}\le\frac{T_{case,target}-T_a}{P_{total}}
\]

If target heatsink/case is 75 °C at 40 °C ambient and \(P_{total}=18\,W\):

\[
R_{\theta SA}\le\frac{75-40}{18}=1.94\,^{\circ}C/W
\]

Use a **1.5–2.0 °C/W heatsink** with airflow, insulated TO-220 pads, thermal grease/pads, and a thermistor/thermal switch bolted near the hottest MOSFET. Do not count on natural convection inside a small box.

### Motor thermal model tie-in

The RSD foundations document proposes estimating winding resistance drift and using a 2-state copper/iron thermal model. Keep that, but use a physically correct two-node model with ambient coupling:

\[
C_{cu}\dot T_{cu}=P_{cu}-\frac{T_{cu}-T_{fe}}{R_{cu-fe}}
\]

\[
C_{fe}\dot T_{fe}=P_{fe}+\frac{T_{cu}-T_{fe}}{R_{cu-fe}}-\frac{T_{fe}-T_{amb}}{R_{fe-amb}}
\]

Copper loss for sinusoidal dq currents:

\[
P_{cu}=3I_{phase,rms}^{2}R_{phase}(T) = \frac{3}{2}R_s(T)(i_d^2+i_q^2)
\]

Copper resistance temperature law:

\[
R_s(T)=R_{s0}[1+\alpha(T-T_0)]
\]

Use \(\alpha\approx3.9\times10^{-3}/K\) for copper.

Validation sensors:

- One 10 kΩ NTC or PT1000 epoxied to stator end windings.
- One thermistor on the MOSFET heatsink.
- Optional IR camera during first high-load tests.

The RSD-K virtual sensor should output both \(\hat T_{cu}\) and uncertainty. It should not be allowed to command more current unless the physical stator sensor and virtual estimate agree within a calibrated bound.

---

## 6. Controller MCU choice

### Recommendation

Use **STM32G474RE/CB-class STM32G4**, preferably a **Nucleo-G474RE** for firmware bring-up and a custom control board later.

### Why STM32G4 wins here

The STM32G474 has a 170 MHz Cortex-M4 with FPU and DSP instructions, CORDIC for trigonometric functions, FMAC for FIR/IIR filtering, five 12-bit ADCs up to 4 Msps, hardware oversampling, advanced motor-control timers with complementary PWM/dead-time/break behavior, HRTIM with 184 ps resolution and 6 fault inputs, seven comparators, six op-amps, DMA, and up to 512 KB Flash / 128 KB SRAM ([ST STM32G474 datasheet](https://www.st.com/resource/en/datasheet/stm32g474cb.pdf)). That peripheral set is unusually well matched to center-aligned PWM, synchronized ADC sampling, current-loop control, CORDIC-assisted Park/Clarke transforms, comparator fault trips, and a 10 kHz EKF/scheduler split.

### Comparison

| MCU option | Verdict | Reason |
|---|---|---|
| **STM32G4 / STM32G474** | **Pick** | Best balance of motor-control timers, fast ADCs, CORDIC/FMAC, comparators, cost, open tooling |
| **TI F280049C** | Strong alternative | Excellent real-time motor-control chip with C2000 tooling and 3.45 MSPS ADCs; LaunchPad docs describe InstaSPIN-FOC support and 100 MHz FPU MCU ([TI LaunchPad guide](https://www.ti.com/lit/ug/spruii7b/spruii7b.pdf), [TI F280049C datasheet](https://www.ti.com/lit/ds/symlink/tms320f280049c.pdf)) |
| **Teensy 4.1** | Not for inverter control | Fast 600 MHz CPU, but ADC/PWM/safety-timer ecosystem is not as deterministic or motor-control-oriented; PJRC notes practical analog resolution is often around 10 bits due to noise ([PJRC Teensy 4.1](https://www.pjrc.com/store/teensy41.html)) |
| **ESP32-S3 + FPU** | Reject | Wi-Fi/RTOS jitter and analog limitations are wrong for hard real-time current control and safety trips |
| **RPi Pico 2** | Reject for this role | Interesting and cheap, but not the best tool for high-integrity 3-phase power-stage control with EKF math |

### Loop partition

- **20 kHz PWM ISR / 10–20 kHz current loop:** ADC capture, Clarke/Park, PI current control, SVPWM, fast limiters.
- **10 kHz EKF innovation update:** current residuals, angle/speed observer update, timestamp compensation.
- **1 kHz speed/torque loop:** torque command, speed PI, flux weakening limits.
- **10–100 Hz RSD scheduler:** HFI enable/disable, energy-information tradeoff, thermal/current derating, experiment design.
- **Background:** logging, parameter ID, USB/CAN telemetry.

If the EKF grows beyond a small state vector, move the EKF to 5 kHz or split prediction at 20 kHz and covariance update at 5–10 kHz. Do not starve the current loop.

---

## 7. Top 5 power-electronics and safety risks

| Risk | Failure mode | Mitigation |
|---|---|---|
| 1. Shoot-through | Both MOSFETs in a leg conduct; FETs explode | Hardware dead-time, DRV8353 VGS handshake/shoot-through prevention, conservative gate resistors, VDS OCP, hardware enable latch, first-power tests with current-limited supply |
| 2. DC bus overvoltage / regen | Braking or supply lead inductance drives bus above MOSFET rating | 100 V MOSFETs, low-inductance cap layout, TVS, braking resistor or active clamp, firmware regen limits, bus OVP comparator into shutdown |
| 3. Bad current measurement | EKF trusts aliased/noisy current and destabilizes FOC | Inline Kelvin shunts, INA240 PWM-rejection amps, synchronized ADC sampling, anti-alias RC, residual plausibility checks, third-phase redundancy |
| 4. Thermal runaway | MOSFET/stator heats faster than estimator catches | Conservative heatsink, stator thermistor, heatsink thermistor, hardware thermal switch, current derating, fan-fail detection, logged thermal model validation |
| 5. Software hang or estimator divergence | PWM continues after MCU lockup or bad observer state | Independent watchdog, hardware comparator trips, DRV nFAULT latch, normally-closed E-stop, contactor opening, gate-driver ENABLE pulled down by hardware latch independent of firmware |

### Minimum STO / shutdown chain

This is not a certified functional-safety STO, but it should behave like one on the bench:

1. **Normally-closed E-stop** in a latching safety loop.
2. E-stop opens the **main DC contactor** and simultaneously pulls **DRV8353 ENABLE low** through hardware, not firmware.
3. **Precharge relay/MOSFET** cannot bypass unless bus voltage is valid and E-stop loop is healthy.
4. **Comparator overcurrent**, DRV8353 nFAULT, heatsink thermal switch, stator overtemp, watchdog timeout, and bus OVP all set the same hardware latch.
5. Latch reset requires PWM disabled, throttle/command zero, bus below threshold or precharge sequence restarted, and explicit human reset.
6. Add a DC fuse sized for wiring protection, not just electronics protection.

---

## 8. What the RSD math foundations gets wrong or underspecifies

1. **“≥10 kHz clean current” is achievable, but not raw.** At 20 kHz PWM, a 10 kHz innovation loop has only 100 µs per update and typically one or two clean sample windows per PWM cycle. The INA240 bandwidth is adequate, but its extracted datasheet details include about 9.6–9.8 µs settling to 0.5 percent, so the EKF must account for analog and PWM-sampling delay rather than treating current as instantaneous ([TI INA240 datasheet](https://www.ti.com/lit/ds/symlink/ina240.pdf)).

2. **The measurement noise is not white Gaussian by default.** PWM ripple, dead-time distortion, ADC aperture timing, common-mode transients, and shunt self-heating create duty-dependent and state-dependent noise. The EKF \(R_k\) should be scheduled by duty cycle, modulation index, ADC sample window, and measured bus ripple.

3. **Commanded voltage is not applied voltage.** The model equations use \(v_d\) and \(v_q\), but the observer should use a corrected voltage estimate that includes bus measurement, dead time, MOSFET Rds(on), diode conduction during dead time, PWM saturation, and blanking. Otherwise Rs and back-EMF estimates absorb inverter error.

4. **HFI is not guaranteed on a surface-PM outrunner.** The RSD doc says surface-PM is likely for the benchtop build and also proposes HFI below 10 percent speed. HFI needs saliency; it is strongest on IPM motors and weaker on surface-PM motors where \(L_d\approx L_q\). Include an encoder or high-resolution magnetic sensor for validation and low-speed fallback.

5. **The CUSUM/NIS notation is internally confused.** The RSD document uses \(S_k\) both as an innovation covariance and as a CUSUM statistic. Rename the innovation covariance \(S^\nu_k\) and the CUSUM statistic \(G_k\):

\[
\epsilon_k=\nu_k^T(S_k^\nu)^{-1}\nu_k
\]

\[
G_k=\max(0,G_{k-1}+\epsilon_k-\gamma)
\]

6. **The thermal virtual sensor is useful but overconfident as written.** Estimating copper temperature from Rs requires accurate phase voltage, current, and inverter-drop modeling. A ±5 K CRLB gate is not credible until validated against a stator sensor across speed, PWM duty, airflow, and load.

7. **The energy equation mixes bus energy and source energy too loosely.** DC-link capacitors store only joules, while a bench supply/battery stores far more. The scheduler should separately track capacitor energy \(\frac{1}{2}CV^2\), source power limit, supply current limit, braking sink capacity, and motor/inverter thermal energy.

---

## 9. Practical BOM and cost estimate

| Subsystem | Specific recommendation | Estimated bench cost |
|---|---|---:|
| MOSFETs | 8–12 × IRFB4110PbF-class genuine parts, 6 used + spares | 30–80 USD |
| Gate driver | DRV8353RS/DRV8353S IC, or DRV8353 EVM for early learning | IC 8–15 USD; EVM 120–200 USD |
| Current sensing | 3 × INA240A1/A2 + 3 × 1–2 mΩ Kelvin shunts | 20–45 USD |
| DC-link bulk | 2.2–4.7 mF total, 100 V low-ESR electrolytics | 20–60 USD |
| Local HF caps | Film + ceramic per bridge | 10–30 USD |
| Precharge / fuse / contactor | resistor, relay/MOSFET, DC fuse, E-stop, wiring | 75–250 USD |
| MCU | Nucleo-G474RE or custom STM32G474 board | 25–100 USD |
| Thermal | heatsink, fan, thermal pads, NTCs, airflow duct | 30–120 USD |
| PCB / connectors / enclosure | 2–4 layer PCB, bus bars/copper pours, terminals, guarded enclosure | 150–500 USD |

A realistic first custom power stage is **500–1,200 USD**, excluding oscilloscope probes, bench supply, motor, dynamometer/load, and mistakes. This is well inside the user’s 10k budget.

---

## 10. Bring-up sequence

1. Assemble controller and gate driver without MOSFET bus power; verify PWM, dead-time, and nFAULT handling.
2. Power DRV8353 and MCU from a current-limited supply; verify all gate waveforms into dummy capacitance.
3. Install MOSFETs; power bridge at 12 V with no motor; verify no shoot-through and correct phase-node switching.
4. Add motor with current limit at 1–2 A; run open-loop alignment and Hall/encoder validation.
5. Enable current sensing; calibrate ADC offsets with PWM off and PWM on at zero current.
6. Run FOC at low current with encoder/Hall angle; compare commanded vs measured currents.
7. Only after current loop is stable, introduce SMO/EKF angle estimates.
8. Add HFI experiments only after thermal, current, and bus protection are proven.
9. Increase bus to 48 V and current limit gradually; log every fault.
10. Validate thermal model under steady loads before trusting RSD-K derating.

---

## 11. Final design position

Build the first RSD engine around a **48 V, 6-MOSFET, 100 V MOSFET bridge using IRFB4110PbF-class TO-220 devices, DRV8353RS gate drive, inline shunts with INA240 current-sense amplifiers, 2.2–4.7 mF of 100 V DC-link capacitance with controlled precharge, STM32G474 control, and independent hardware shutdown**. This is not the most elegant inverter possible, but it is the right one for an auditable benchtop estimator/control project: cheap enough to repair, slow enough to probe, protected enough to survive firmware mistakes, and accurate enough to test whether the RSD layer adds anything beyond a normal well-instrumented FOC drive.
