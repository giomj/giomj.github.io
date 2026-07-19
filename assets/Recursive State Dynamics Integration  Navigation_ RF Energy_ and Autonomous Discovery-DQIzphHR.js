const e=`# Recursive State Dynamics (RSD) Integration: Navigation, RF Energy, and Autonomous Discovery

**Scope:** Source-grounded technical evidence base for a structured analysis of Recursive State Dynamics (RSD, user-defined Revision v0.1) as a self-sustaining research platform in indoor smart spaces and urban IoT networks. RSD couples recursive states **L** (localization/navigation), **K** (knowledge/model state), and **E** (energy/autonomy).

**Prepared:** July 16, 2026.

## Executive assessment

RSD is technically coherent as a **cross-layer control and inference architecture**: localization state \\(L\\), scientific/model state \\(K\\), and energy/autonomy state \\(E\\) can share recursive estimators, uncertainty measures, provenance, and a common information-per-joule scheduler. The framework's novelty is the explicit coupling and test discipline, not a new estimator, energy source, or physical law.

| Integration layer | Strongest RSD synergy | Feasible at ambient-RF power? | Binding limitation | Recommended implementation |
|---|---|---|---|---|
| Passive navigation | RF/IMU observations update \\(L\\); radio maps and residuals update \\(K\\) | Yes, intermittently | RF reception and ranging bursts dominate energy | Always-on low-power IMU wake; sparse BLE/Wi-Fi RSS; occasional UWB/5G measurements; edge-side smoothing |
| RF harvesting | The same RF field can be an \\(L\\) observation and an \\(E\\) source | Yes, but generally only at µW-class DC | Low incident density, rectifier efficiency collapse at weak input, PMIC cold start | Multiband rectenna, measured site-specific RF map, precharge or auxiliary cold start |
| Storage/power management | \\(E\\) becomes an explicit recursive state with brownout-aware scheduling | Yes | Supercapacitor leakage versus battery burst-current/cycle limits | Low-leakage battery or thin-film cell plus a small supercapacitor burst buffer |
| Scientific discovery | \\(K\\) revisions can be selected by expected information gain and recorded with provenance | Only feature extraction locally | LLM/SLAM compute exceeds the harvest budget by orders of magnitude | TinyML and validation checks on-node; Bayesian optimization, SLAM, and LLM orchestration at an edge server |
| Fully self-sustaining platform | Joint \\(L/K/E\\) scheduling closes the loop | Conditionally, at low duty cycle | Energy neutrality and observability can conflict | Intermittent, checkpointed node with tiered compute; hybrid harvested-plus-battery mode for useful cadence |

**Bottom line:** an ambient-RF-only RSD node can plausibly maintain a low-rate recursive state, wake on motion or innovation, checkpoint to nonvolatile memory, and communicate by sparse BLE or backscatter. It cannot continuously run visual SLAM, general SDR scanning, UWB reception, or an onboard LLM. The most credible research platform is therefore **self-sustaining at the sensing node, not computationally self-contained**.

---

## 0. Framing, honesty statement, and citation discipline

- **RSD is user-defined.** RSD "Revision v0.1," the L/K/E coupling, the "useful information per joule under energy-neutral operation" scheduling objective, and the claim/measurement/estimation/energy tree structure are **the user's own framework**. There is **no external, peer-reviewed RSD literature**; no source below validates "RSD" as a named framework. RSD is treated here as a **testable engineering and epistemic meta-framework**, not new physics, not free energy, and not a demonstrated GPS replacement.
- **All mappings of external technologies to L/K/E, and all synergy/architecture claims, are analytical synthesis by this report**, built on the cited component evidence — not externally validated RSD findings.
- **Grounding:** Every numeric value and factual claim below carries an inline markdown link to a URL **fetched in this research session**. Values that could not be confirmed from a fetched source are marked **n.a.**
- **Sourced vs. derived:** Numbers taken directly from a fetched source are cited inline. Calculated illustrations are explicitly labeled **[derived, illustrative]** and use only sourced inputs, which are themselves cited.
- **Mathematical estimation methods named in the brief (nonlinear state-space models, recursive Bayesian filtering, factor-graph MAP/smoothing, Fisher information / Cramér–Rao bounds, Bayesian model evidence, change-point detection, expected information gain, clipped energy balance) are standard estimation tools.** Where a fetched source uses one (e.g., EKF/particle filter positioning, Cramér–Rao bounds in 5G positioning, Bayesian optimization in self-driving labs), it is cited. Their assembly into "RSD" is the user's synthesis.

---

## 1. Domain 1 — Passive navigation / localization (state L; feeds K)

### 1.1 Indoor localization technology comparison (accuracy, robustness, power)

Values from a peer-reviewed survey of WiFi/BLE/UWB/IMU indoor positioning.

| Technology | Accuracy range (m) | Robustness | Scalability | Typical measurements / estimator inputs | Power note |
|---|---|---|---|---|---|
| WiFi | 0.09–7.60 ([On Indoor Localization Using WiFi, BLE, UWB, and IMU](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | Med ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | Good ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | RSS ranging/fingerprinting, CSI fingerprinting, RTT via FTM (802.11-2016) ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | "highly attractive … where low costs are essential" ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) |
| BLE | 0.10–4.92 ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | Poor ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | Good ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | RSS ranging/fingerprinting/proximity, AoA (CTE, I/Q) ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | "low power consumption subset of Bluetooth" ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) |
| UWB | 0.03–0.30 ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | Good ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | Med ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | ToF/ToA/TDoA, CIR, RTT ranging ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | "low transmission power … operate for long periods" ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) |
| IMU | 0.55–5.64 ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | Good ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | Excellent ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | PDR from acceleration; MEMS motion sensors ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) | "very low power consumption"; but "error drift … increases with time" ([same](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)) |

Additional confirmations: WiFi FTM (802.11az) is expected to reach below 1 m and 802.11bk below 0.1 m LOS; current FTM accuracy is 1–2 m ([Indoor Positioning with Wi-Fi Location survey, arXiv](https://arxiv.org/html/2509.03901)). UWB reaches centimeter-level ToF ranging ([same Wi-Fi survey](https://arxiv.org/html/2509.03901)). Only RSS/CSI fingerprinting reached ≤10 cm in that WiFi/BLE/UWB/IMU survey, at the cost of a site survey ([WiFi/BLE/UWB/IMU survey](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)).

### 1.2 5G signals of opportunity / NR positioning (recursive estimators, CRB)

- Early commercial-5G dataset processed with least squares gave **2D error mean 0.6–1.9 m, worst-case max up to 19 m** across takes ([5G Positioning: An Analysis of Early Datasets, Sensors/PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10675248/)).
- Multipath-assisted particle/EKF filtering achieved **accuracy below 0.9 m in 90% of cases**, "more than tenfold better" than LOS-only, and the PF tracked a UE with very few TRPs where EKF/LOS failed ([Indoor 5G Positioning using Multipath Measurements, DiVA](https://www.diva-portal.org/smash/get/diva2:1670288/FULLTEXT01.pdf)).
- Fused TDOA+AOA static results: **RMSE 0.68 m, MAE 0.65 m** (vs TDOA-only RMSE 0.72 m, AOA-only RMSE 0.89 m) ([Indoor Localization with 5G, PoliMi thesis](https://www.politesi.polimi.it/retrieve/1eb19904-cc71-4278-a688-7691658bb831/2024_10_Tugulan_Executive%20Summary.pdf)).
- **Cramér–Rao bound relevance (directly supports the RSD CRB/Fisher-information element):** achieved RMSE of Gaussian-process and BeamMaP estimators was reported "close to the Bayesian Cramér–Rao lower bound," with MAE 3.5 m at 1 dB shadowing in a simulated dynamic environment ([Positioning in 5G and 6G Networks—A Survey, Carleton PDF](http://www.sce.carleton.ca/faculty/wainer/papers/sensors-22-04757-v2%20(1).pdf)). 3GPP Rel-16 target was indoor accuracy below 3 m ([5G Deployment Strategies, arXiv](https://arxiv.org/pdf/2105.09584.pdf)).

### 1.3 Visual-inertial SLAM (VI-SLAM) — accuracy and compute

Benchmark of monocular camera + IMU methods on EuRoC MAV (values are Absolute Pose Error RMSE, cm-scale as reported by the paper's units):

| Method | Estimator form | EuRoC APE RMSE (MH01 / MH03 / MH05) |
|---|---|---|
| ORB-SLAM2 | Feature-based, factor-graph/BA + loop closure | 4.3 / 3.89 / 5.31 ([Visual and Visual-Inertial SLAM benchmark, HAL](https://hal.science/hal-03187856v2/document)) |
| VINS-Mono | Tightly-coupled sliding-window optimization | 8.46 / 9.51 / 17.39 ([same](https://hal.science/hal-03187856v2/document)) |
| DSO | Direct sparse VO | 7.57 / 10.05 / 13.87 ([same](https://hal.science/hal-03187856v2/document)) |
| ROVIO | EKF-based direct VIO | 30.4 / 39.25 / 105.45 ([same](https://hal.science/hal-03187856v2/document)) |

- On a real handheld urban pedestrian path, ORB-SLAM2 achieved **1.1% APE RMSE over traveled distance**, DSO 3.8%, VINS-Mono 3.3%; none reconstructed the full path (ORB-SLAM2 596.8 m of the route) ([SLAM benchmark, HAL](https://hal.science/hal-03187856v2/document)).
- **Compute cost:** benchmarking ran on a **2.60 GHz Intel Core i7-6700HQ, 4 cores, 5 GB RAM**; "DSO requires GPU acceleration … not easily adaptable to a wide range of applications"; loop closing "can be computationally heavy" and runs in a dedicated thread ([SLAM benchmark, HAL](https://hal.science/hal-03187856v2/document)). This desktop-class requirement is central to the feasibility argument in §6.
- A separate visual-SLAM compute study compared ORB-SLAM2, DSO, LDSO on ICL-NUIM/KITTI/EuRoC/TUM for ATE, RAM, CPU/GPU load and total power, finding **ORB-SLAM2 the least power-consuming** among them ([Visual SLAM computational cost comparison, DergiPark](https://dergipark.org.tr/tr/download/article-file/2734302)).

### 1.4 RF-SLAM / robotic radio mapping and ambient backscatter

- A robotic platform running SLAM built WiFi RSSI fingerprint maps, achieving **26% more accurate localization** and a **6× denser** fingerprint dataset in **one-third the time** vs. manual surveying ([Adaptive Indoor Localization Using WiFi + SLAM, arXiv](https://arxiv.org/html/2407.09242v1)) — evidence that L can be self-bootstrapped for K.
- **Ambient backscatter (RF as comms with near-zero power):** seminal prototype tags consumed **0.25 µW (transmit) and 0.54 µW (receive)** at **1 kbps** over 2.5 ft outdoors / 1.5 ft indoors, operating **battery-free up to 6.5 miles from a TV tower** on harvested signal energy ([Ambient Backscatter, SIGCOMM 2013](https://conferences.sigcomm.org/sigcomm/2013/papers/sigcomm/p39.pdf)). Later BackCom implementations report a switch at **185 nW**, ASIC-simulated **<10 µW**, and 65 nm CMOS **2.8 µW wake-up / 28 µW uplink** over tens of metres ([Development in Ambient Backscatter Communications, Semantic Scholar](https://pdfs.semanticscholar.org/68cc/7534119461905fa9a65851cb1d5d705299e5.pdf)). Analog components of ambient backscatter devices consume **0.79 µW to 2 mW** ([Ambient backscatter analysis, UAlberta](http://www.ece.ualberta.ca/~chintha/resources/papers/2020/Chen_TCOM.pdf)).

### 1.5 L failure modes and fit to RSD

- IMU/PDR **drift grows with time**; RSS ranging "performed the poorest … unreliability of individual RSS readings"; BLE robustness is "Poor"; UWB subject to **NLoS ranging errors**; WiFi FTM degrades in NLoS ([WiFi/BLE/UWB/IMU survey](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf)).
- **Fit to L/K/E (analytical synthesis, this report):** UWB and 5G-multipath-PF give the tightest L but the highest E (UWB RX 30–126 mA, §5.4). WiFi/BLE fingerprinting give moderate L at low E but require a K-side survey. Backscatter is essentially free on E but carries navigation/comms only at very short range. **Recursive estimator forms already used in the cited work — EKF (ROVIO, 5G-EKF), particle filter (5G multipath), sliding-window factor-graph MAP (VINS-Mono, ORB-SLAM2) — directly instantiate the RSD "recursive Bayesian filtering / factor-graph MAP/smoothing" element.** Covariance/innovation reliability and observability are exercised by NLoS outlier rejection ([Outlier Rejection for 5G-Based Indoor Positioning, arXiv](https://arxiv.org/pdf/2409.12585.pdf)).

---

## 2. Domain 2 — Environmental RF harvesting (state E source; also L observation)

### 2.1 Ambient RF power density reality (the binding constraint)

| Band | Freq (MHz) | Avg power density | Max power density | Source |
|---|---|---|---|---|
| DTV | 470–610 | 0.89 nW/cm² | 460 nW/cm² | [Comprehensive Survey on RF Energy Harvesting, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/) |
| GSM900 (base Tx) | 925–960 | 36 nW/cm² | 1930 nW/cm² | [same](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/) |
| GSM900 (mobile Tx) | 880–915 | 0.45 nW/cm² | 39 nW/cm² | [same](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/) |
| GSM1800 (base Tx) | 1805–1880 | 84 nW/cm² | 6390 nW/cm² | [same](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/) |
| 3G (base Tx) | 2110–2170 | 12 nW/cm² | 240 nW/cm² | [same](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/) |
| Wi-Fi | 2400–2500 | 0.18 nW/cm² | 6 nW/cm² | [same](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/) |

- Overall ambient RF energy density is **0.2 nW/cm²–1 µW/cm²** ([Ambient RF Energy-Harvesting Technologies, Georgia Tech](https://tentzeris.ece.gatech.edu/Procs14_Sangkil.pdf)); the survey lists RF at **0.08 nW–1 µW/cm²**, vs **indoor solar 100 µW/cm³** and thermoelectric **40 µW–10 mW/cm³** ([RF harvesting survey, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/)).
- Domestic indoor UK survey (0.5–6 GHz): power densities **<1 pW/cm² (≈ −90 dBm)**, average **< 1 nW/cm²**; even powering a 2 µW calculator would need a **1 m² array at 1.7–2.5 GHz**, with operate-to-harvest ratios of **1.3% down to 0.04%** ([Ambient RF harvesting trial in domestic settings, IET/Wiley](https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/iet-map.2014.0406)).
- Urban 680 MHz–3.5 GHz measurements: **−60 to −14.5 dBm/m² (1 nW/m² to 35.5 µW/m²)**, peak in 1.8–1.9 GHz ([RF Energy Harvesting in Urban Areas, Scribd copy of KSIT paper](https://www.scribd.com/document/421269400/Final-Ksit-Paper1)); broadband 1–3.5 GHz "of the order of 63 µW/m²" ([RF harvesting survey, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/)). Averages GSM900 140 µW/m², GSM1800 850 µW/m², UMTS 1450 µW/m² ([Multiband Ambient RF Energy Harvester, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8587065/)).

### 2.2 Rectenna / rectifier efficiency vs input power, GSM-900 focus

| Design / band | RF-to-DC efficiency @ input power | Sensitivity / turn-on | Source |
|---|---|---|---|
| GSM-900 compact rectifier | 43.6% (meas) / 44.3% (sim) @ 0 dBm; 50.2% peak; 3.1 V @ 14 dBm | senses below −20 dBm; receives −30 dBm | [Compact Rectifier for GSM/900, Univ. Galway PDF](https://research.universityofgalway.ie/ws/portalfiles/portal/27042038/Electronics_9_no._10_1614_2020.pdf) |
| Quad-band harvester | ~35% @ −15 dBm; 52% @ −20 dBm; 0.678 V @ −20 dBm ambient | matched −35 to +5 dBm | [Wideband Multi-Frequency Ambient RFEH, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8778130/) |
| Multi-band stacked | 62% @ −10 dBm; 84% @ 5.8 dBm | cumulative −10 dBm | [Multi-Band Stacked RFEH, HAL/IEEE](https://hal.science/hal-01174288v1) |
| Multi-service dual-band (490/860 MHz) | 54.3% effective @ −10 dBm dual-tone; 17.3 µW & 7.5 µW DC @ −10 dBm | matched −40 to −10 dBm | [Multi-Service Highly Sensitive Rectifier, Nature Sci Rep](https://www.nature.com/articles/srep09655) |
| Quad-band (QBEH) | 55% @ −20 dBm (10 µW); 70% @ −10 dBm (100 µW) | matched −50 to −10 dBm | [QBEH self-sustainable sensor, arXiv](https://arxiv.org/pdf/2408.09136.pdf) |
| Tokyo Tower field, 6.3 km | 16% @ −15 dBm; 30% @ −10 dBm; 41% @ −5 dBm | — | [Performance Analysis of Ambient RFEH, arXiv](https://arxiv.org/pdf/1505.03460.pdf) |
| London Underground survey harvester | GSM900 prototype **40% end-to-end**; ~half of 270 stations suitable | — | [Ambient RFEH in Urban/Semi-Urban, WordPress copy of IEEE paper](https://warstek.wordpress.com/wp-content/uploads/2015/04/referensi-21-penting-s.pdf) |

- **Key efficiency-vs-power law:** PCE falls sharply as input power drops toward the diode turn-on region; multi-band/multi-tone combining raises effective PCE at low ambient levels (e.g., 3.14× and 7.24× more power than single-tone at −10 dBm) ([Nature Sci Rep](https://www.nature.com/articles/srep09655)).
- **Real harvested power magnitudes:** self-calibrating harvester delivers **1 V at −26.3 dBm**; TV-tower field harvest **60 µW at 4.1 km** (0.1 µW/cm², 30×20 cm antenna); powercaster (dedicated, 3 W) **189 µW at 5 m** but only **1 µW at 11 m** ([RF harvesting survey, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/)). Six-band rectenna: **26 µW outdoor / 8 µW indoor** DC ([same](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/)).

### 2.3 E from RF — bottom line and RSD fit

Ambient-RF DC yield is **single-digit-to-tens of µW indoors** under favorable conditions and **sub-µW to pW/cm²** in ordinary rooms ([IET/Wiley domestic trial](https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/iet-map.2014.0406); [RF harvesting survey, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/)). This sets the **hard ceiling on E** and forces intermittent operation (§6). The **same RF signals are simultaneously navigation observations (L) and an energy source (E)** — the core RSD "RF as observation and energy" synergy (analytical synthesis, this report).

---

## 3. Domain 3 — Energy storage and power management (state E buffer)

### 3.1 Supercapacitor vs microbattery vs thin-film battery

| Property | Supercapacitor (EDLC) | Li-ion battery | Thin-film battery (TFB) | Hybrid supercap / LTO |
|---|---|---|---|---|
| Energy density | ~10 Wh/L high-end (≈15% of LIB) | up to 650 Wh/L | high vs supercaps ("game changing") | between LIB and EDLC |
| Power density | up to 10,000 W/L (≈3× LIB) | baseline | high | high |
| Self-discharge (unloaded) | ~30%/month | ~10%/month (1.5–2%/month cited elsewhere) | **~1%/year (~3 nA)** | low ("+++++" like Li) |
| Cycle life | 500k+ | best cycle perf. but limited | >100,000 cycles | LTO 3,000–25,000; hybrid 100k's |
| Round-trip efficiency | >98% | <90% | near loss-less | high |
| Sources | [Eaton supercap-vs-battery white paper](https://www.eaton.com/content/dam/eaton/products/electronic-components/resources/brochure/eaton-supercapacitor-vs-batteries-white-paper-elx1150-en.pdf) | [Eaton](https://www.eaton.com/content/dam/eaton/products/electronic-components/resources/brochure/eaton-supercapacitor-vs-batteries-white-paper-elx1150-en.pdf); [Nichicon](https://www.nichicon.com/en-us/news-and-resources/case-studies/energy-storage-for-iot/) | [Infinite Power Solutions / PSMA](https://www.psma.com/sites/default/files/uploads/tech-forums-energy-harvesting/presentations/2012-apec-114-energy-harvesting-storage-technologies_0.pdf) | [Nichicon](https://www.nichicon.com/en-us/news-and-resources/white-papers/extending-energy-storage-life-in-iot/) |

- TFB advantages for micro-harvesting: **~1%/year self-discharge (~3 nA), >100,000 cycles, <170 µm package, >40 mA continuous, ~4,000× lower leakage than supercap, 50× energy density of supercap** ([Infinite Power Solutions / PSMA](https://www.psma.com/sites/default/files/uploads/tech-forums-energy-harvesting/presentations/2012-apec-114-energy-harvesting-storage-technologies_0.pdf)). LTO cells last 3,000–25,000 cycles with self-discharge <5% ([Nichicon](https://www.nichicon.com/en-us/news-and-resources/case-studies/energy-storage-for-iot/)).
- **RSD-relevant trade:** supercaps enable fast bursts and unlimited cycling (good for innovation-triggered sensing) but high leakage erodes E over idle periods; TFB/LTO minimize leakage (good for long energy-neutral idle) but limit burst current. Hybrid supercap+TFB matches the RSD "clipped energy balance / intermittent" model (analytical synthesis, this report).

### 3.2 Energy-harvesting PMIC / boost converter (cold-start, quiescent)

TI BQ25504 ultra-low-power boost charger:
- **Cold-start minimum input voltage V_IN(CS) = 330 mV typ**; **minimum cold-start input power = 10 µW min / 50 µW typ**; **quiescent current I_Q < 330 nA typ**; can continue harvesting down to **V_IN = 80 mV** (130 mV min for V_IN(DC) after cold start) ([BQ25504 datasheet, Micros copy](https://image.micros.com.pl/_dane_techniczne_auto/uibq25504rg.pdf)).
- **Programmable MPPT**: open-circuit sampling period 16 s, sample/disable 256 ms; solar MPP ≈70–80% of V_OC, TEG ≈50% ([BQ25504 datasheet](https://image.micros.com.pl/_dane_techniczne_auto/uibq25504rg.pdf)). Supports Li-ion, thin-film batteries, super-capacitors, conventional capacitors ([same](https://image.micros.com.pl/_dane_techniczne_auto/uibq25504rg.pdf)).

### 3.3 Intermittent computing / checkpointing (needed under RF-only E)

- Batteryless devices "harvest energy … store this free energy in tiny capacitors … and intermittently execute tasks when energy is available" ([Mayfly, UVA](https://www.cs.virginia.edu/~bjc8c/class/cs6501-f18/papers/hester17mayfly.pdf)). EHDs harvest **microwatts to a few milliwatts** ([Checkpointing survey, IIT Delhi](https://www.cse.iitd.ac.in/~priyankas/files/papers/chkptSurvey.pdf)).
- An intermittent cycle has four phases: **recharge, restore, compute, checkpoint** ([IIT Delhi checkpointing survey](https://www.cse.iitd.ac.in/~priyankas/files/papers/chkptSurvey.pdf)). "Energy failures are frequent"; larger capacitors increase response time and leakage ([Internet of Batteryless Things, CACM](https://cacm.acm.org/research/the-internet-of-batteryless-things/)).
- Nonvolatile elements maintain state across sub-second charge/discharge cycles that occur "hundreds of times per second" ([DIAC, ar5iv](https://ar5iv.labs.arxiv.org/html/2311.16406)). Approximate intermittent computing (CheckMate) reduced power cycles **15–60%** at **6–25% error** ([LLM-Powered Approximate Intermittent Computing, arXiv](https://arxiv.org/html/2411.17732v1)). This directly instantiates the RSD **checkpointed recursive state** element.

---

## 4. Domain 4 — Recursive scientific discovery agents (state K)

Evidence from a 2026 survey of agentic AI for self-driving laboratories (SDLs); maps to RSD's K and its claim/measurement/estimation/energy trees (mapping is this report's synthesis).

- **Bayesian optimization / active learning:** "natural starting points … designed for settings where each experiment is costly and the number of trials is limited"; agent builds a probabilistic surrogate + uncertainty and optimizes an **acquisition function trading exploitation vs. exploration** — a "principled mechanism for short-horizon experiment selection with uncertainty quantification" ([Agentic AI for Self-Driving Laboratories, arXiv](https://arxiv.org/pdf/2601.17920.pdf)). This maps to RSD **expected information gain / active experiment selection**.
- **Tool-using / multi-agent LLM workflows:** LLM as "high-level controller that proposes candidate actions or plans, while verification and execution are delegated to structured tools" — the key question is whether it "can implement a decision policy that is **auditable, reproducible, and grounded**" ([SDL survey, arXiv](https://arxiv.org/pdf/2601.17920.pdf)).
- **Uncertainty calibration:** "Representation learning must preserve uncertainty; uncalibrated models lead to brittle closed-loop behavior" ([SDL survey, arXiv](https://arxiv.org/pdf/2601.17920.pdf)). Supports RSD covariance/innovation reliability and Bayesian model evidence.
- **Provenance / reproducibility:** system "should record what information was used, what tools were called, what constraints were checked, and what experiment specification was executed"; "Reproducibility should be an explicit checklist item, covering … action space, constraints, cost and noise models, budgets, seeds, and released logs" ([SDL survey, arXiv](https://arxiv.org/pdf/2601.17920.pdf)).
- **Stated current limitations (anti-hype):** "Without grounding and verification, an LLM's suggestions can be difficult to trust, hard to reproduce, and prone to subtle violations of feasibility or safety constraints"; "Pure online RL is rarely affordable in physical labs"; "The dominant bottlenecks are robustness, safety, and reproducibility, not only sample efficiency"; open problems include latent-state/belief modeling, safe exploration under time-varying constraints, calibrated multimodal representation learning, failure-aware autonomy, and verifiable tool-using agents ([SDL survey, arXiv](https://arxiv.org/pdf/2601.17920.pdf)). **Change-point / drift** in RSD maps to the survey's "drift detection, continual adaptation, robust decision-making under distribution shift" and "nonstationarity" ([same](https://arxiv.org/pdf/2601.17920.pdf)).

---

## 5. Domain 5 — Representative low-power hardware (datasheet-sourced)

### 5.1 MCU / SoC — STM32L4 (ultra-low-power Cortex-M4)

| Parameter | Value | Source |
|---|---|---|
| Run (Range 1, 80 MHz, Flash+ART) | 131 µA/MHz (≈10.5 mA @ 80 MHz) | [STM32L4 system power training, ST](https://www.st.com/resource/en/product_training/stm32l4_system_power.pdf) |
| Run (dynamic, marketed) | down to 100 µA/MHz; 28 µA/MHz with external SMPS | [STM32L4 overview, ST](https://www.st.com/resource/en/product_presentation/microcontrollers-stm32l4-series-product-overview.pdf) |
| Sleep (Range 1, 80 MHz) | 37 µA/MHz | [ST training](https://www.st.com/resource/en/product_training/stm32l4_system_power.pdf) |
| Stop 2 (full retention) | 1.1 µA (1.4 µA with RTC) | [STM32L4 modes, emcu](https://www.emcu.it/SILICA-STDay-2016/X/Presentazioni/6_2_STM32L4_System_Operating_Modes.pdf) |
| Standby + 32 KB RAM | 350 nA | [ST training](https://www.st.com/resource/en/product_training/stm32l4_system_power.pdf) |
| Shutdown (I/O wake) | 30 nA (8 nA in some variants) | [ST training](https://www.st.com/resource/en/product_training/stm32l4_system_power.pdf); [Future Electronics STM32L476](https://www1.futureelectronics.com/doc/STMicroelectronics/STM32L476ZGJ6.pdf) |
| Performance | 1.25 DMIPS/MHz; up to 80 MHz | [STM32L4 ULP overview, tha.de](https://tha.de/homes/hhoegl/home_data/es2/stm32l4/Manuals/en.DM00148033.pdf) |

### 5.2 IMU — Bosch BMI270 (6-axis)

| Mode | Current @ 1.8 V | Source |
|---|---|---|
| Suspend (lowest) | 3.5 µA | [BMI270 datasheet, Bosch](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmi270-ds000.pdf) |
| Accel-only low power | down to 4 µA | [same](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmi270-ds000.pdf) |
| A+G low power (ODR 25 Hz) | 420 µA | [same](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmi270-ds000.pdf) |
| A+G normal (max ODR) | 685 µA | [same](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmi270-ds000.pdf) |
| A+G performance | 970 µA | [same](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmi270-ds000.pdf) |
| Always-on gesture/activity | 30 µA | [Bosch press release](https://www.bosch-sensortec.com/en/news/bosch-launches-smart-ultra-low-power-imu-bmi270.html) |

### 5.3 Event camera and DVS

- **Prophesee GenX320:** 320×320 px; **low-power mode 36 µW; typical operating 3 mW**; latency <150 µs @1k lux; dynamic range >140 dB; pixel 6.3×6.3 µm ([Prophesee GenX320](https://www.prophesee.ai/event-based-sensor-genx320/)).
- **DAVIS240 DVS:** total power **5–14 mW** depending on activity ([DAVIS 240×180 sensor, IEEE](https://ieeexplore.ieee.org/document/6889103)).
- Event cameras suit RSD innovation-triggered sensing (data only on change), reducing E vs. frame cameras (analytical synthesis, this report).

### 5.4 RF transceivers / UWB / scanner

| Device | Key currents | Source |
|---|---|---|
| Nordic nRF52840 (BLE) | RX 4.6 mA @1 Mbps; TX 4.8 mA @0 dBm; 14.8 mA @+8 dBm; System OFF 0.4 µA; System ON no-RAM 0.97 µA | [nRF52840 product brief, Pine64](http://files.pine64.org/doc/datasheet/pinetime/nRF52840%20product%20brief.pdf); [Digi-Key spec](https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/6470/NRF52840-QIAA-R7.pdf) |
| nRF52840 sleepy end device, 1 s poll | 3.56 µA avg | [Seeed forum (Nordic Online Power Profiler basis)](https://forum.seeedstudio.com/t/comparison-of-advertising-current-for-xiao-nrf54l15-nrf52840-and-mg24/294018) |
| Qorvo/DecaWave DW1000 (UWB) | RX 30 mA; TX 70 mA (Ch5, max mean); IDLE 12–19 mA; SLEEP 1 µA; DEEPSLEEP 50–100 nA | [DW1000 datasheet, Mouser](https://www.mouser.com/datasheet/2/412/DW1000_Data_Sheet-1950775.pdf) |
| DW1000 range/rates | 110 kbps / 850 kbps / 6.8 Mbps; up to 290 m @110 kbps; 10 cm precision | [same](https://www.mouser.com/datasheet/2/412/DW1000_Data_Sheet-1950775.pdf) |

**SDR limitation note:** the brief flags SDR as high-power; the DW1000 example shows even a purpose-built UWB radio draws **30–126 mA in RX** ([DW1000 datasheet](https://www.mouser.com/datasheet/2/412/DW1000_Data_Sheet-1950775.pdf)) — orders of magnitude above ambient-RF budgets (§6). General-purpose SDRs are higher still (**n.a.** for a specific fetched SDR datasheet in this session).

### 5.5 Nonvolatile memory — FRAM (for checkpointing)

- FRAM write **9 µA at 12 KB/s vs Flash 2200 µA** (≈250× less energy/bit), writes at core voltage (~1.5 V, no charge pump), endurance **10¹⁵ cycles**, write **125 ns/word** ([EDN FRAM MCU](https://www.edn.com/what-you-need-to-know-about-fram-mcus/); [TI FRAM training](https://software-dl.ti.com/trainingTTO/trainingTTO_public_sw/MSP430_LaunchPad_Workshop/v4/Chapters/MSP430m09_FLASH_and_FRAM.pdf); [TI FRAM quality/reliability](https://www.ti.com/lit/an/slaa526a/slaa526a.pdf?ts=1783176655955)).
- MSP430FR6047: FRAM up to 256 KB, LPM4.5 shutdown **30 nA**, 64 KB write in 4 ms ([MSP430FR6047 datasheet, TI](https://www.ti.com/lit/ds/symlink/msp430fr6047.pdf)). Ideal for RSD checkpointed state at near-zero idle E.

### 5.6 TinyML compute cost (for on-device K updates)

- On-device keyword-spotting adaptation on GAP9: **178 µJ per sample at 26 mW average**; learns a new noise in 13.5 s ([Efficient On-Device Domain Learning for KWS, ETH Zürich](https://www.research-collection.ethz.ch/server/api/core/bitstreams/38cc596b-03e8-4ad5-9690-2e25c06b1d23/content)). Always-on KWS can run under 1 mW ([ThinkRobotics TinyML intro](https://thinkrobotics.com/blogs/learn/introduction-to-tinyml-on-microcontrollers-bringing-ai-to-the-edge)). TinyML inference typically **1–100 mW** ([same](https://thinkrobotics.com/blogs/learn/introduction-to-tinyml-on-microcontrollers-bringing-ai-to-the-edge)).

---

## 6. Domain 6 — Quantitative system feasibility

### 6.1 Governing equations

**Energy-neutral operation (clipped energy balance):** over a window \\(T\\), sustained operation requires
\\[
\\eta_{RF\\to DC}\\,\\eta_{conv}\\,P_{RF,in}\\;\\ge\\;P_{leak}+P_{quiescent}+D\\,(P_{sense}+P_{compute}+P_{radio})
\\]
where \\(P_{RF,in}\\) is RF power delivered to the rectifier input and \\(D\\) is duty cycle. If a measurement already reports harvested DC power after rectification, use \\(P_{DC}\\) directly and do not apply \\(\\eta_{RF\\to DC}\\) a second time. The clip (storage cannot go below brownout or above capacity) is
\\[
0 \\le E_{store}(t) \\le E_{cap},\\qquad E_{store}(t{+}\\Delta) = \\mathrm{clip}\\!\\big(E_{store}(t) + (P_{in}-P_{out})\\Delta\\big).
\\]
**Break-even duty cycle** (ignoring leakage/quiescent for a first bound):
\\[
D_{max} \\approx \\frac{P_{DC,net}-P_{leak}-P_{quiescent}}{P_{active}}.
\\]
**RSD scheduling objective** = maximize useful information per joule, \\( \\max \\; \\mathrm{EIG}/E \\), subject to the energy-neutral constraint above (user-defined objective; the EIG term is standard active-learning acquisition per [SDL survey](https://arxiv.org/pdf/2601.17920.pdf)).

### 6.2 Sourced input ledger for the calculations

| Symbol | Value used | Sourced? |
|---|---|---|
| P_harvest (favorable indoor RF DC) | 8 µW indoor (six-band rectenna) | [RF harvesting survey, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/) |
| P_harvest (good outdoor/urban RF DC) | 26–60 µW | [RF harvesting survey, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/) |
| P_harvest (ordinary room) | <1 nW/cm² avg (≈ sub-µW even over 100 cm²) | [IET/Wiley domestic trial](https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/iet-map.2014.0406) |
| η_RF→DC | 30–55% at −20 to −10 dBm | [Wideband Multi-Freq RFEH, PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8778130/); [QBEH, arXiv](https://arxiv.org/pdf/2408.09136.pdf) |
| PMIC quiescent | <330 nA (~1 µW @3 V) | [BQ25504](https://image.micros.com.pl/_dane_techniczne_auto/uibq25504rg.pdf) |
| PMIC cold-start floor | ≥10 µW input | [BQ25504](https://image.micros.com.pl/_dane_techniczne_auto/uibq25504rg.pdf) |
| MCU active | ~10.5 mA @80 MHz (STM32L4) | [ST training](https://www.st.com/resource/en/product_training/stm32l4_system_power.pdf) |
| MCU stop/standby | 1.1 µA / 350 nA | [emcu](https://www.emcu.it/SILICA-STDay-2016/X/Presentazioni/6_2_STM32L4_System_Operating_Modes.pdf); [ST training](https://www.st.com/resource/en/product_training/stm32l4_system_power.pdf) |
| IMU low power | 4–420 µA | [BMI270](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmi270-ds000.pdf) |
| BLE RX/TX | 4.6 / 4.8 mA | [nRF52840, Pine64](http://files.pine64.org/doc/datasheet/pinetime/nRF52840%20product%20brief.pdf) |
| UWB RX/TX | 30 / 70 mA | [DW1000](https://www.mouser.com/datasheet/2/412/DW1000_Data_Sheet-1950775.pdf) |
| Event camera | 36 µW–3 mW | [GenX320](https://www.prophesee.ai/event-based-sensor-genx320/) |
| Backscatter Tx/Rx | 0.25 / 0.54 µW | [SIGCOMM 2013](https://conferences.sigcomm.org/sigcomm/2013/papers/sigcomm/p39.pdf) |
| KWS inference | 178 µJ/sample @26 mW | [ETH Zürich](https://www.research-collection.ethz.ch/server/api/core/bitstreams/38cc596b-03e8-4ad5-9690-2e25c06b1d23/content) |
| FRAM checkpoint write | 9 µA @12 KB/s | [EDN](https://www.edn.com/what-you-need-to-know-about-fram-mcus/) |

### 6.3 Three operating modes

**(a) Harvest-only continuous — infeasible for anything but the tiniest loads.**
Available RF DC (≈8 µW indoor, up to ~26–60 µW favorable) [derived, illustrative comparison] barely clears PMIC quiescent demand; the BQ25504's separate cold-start requirement is at least 10 µW at its input, so some sites require precharge, a dedicated RF source, or auxiliary harvesting before steady-state operation is possible ([BQ25504](https://image.micros.com.pl/_dane_techniczne_auto/uibq25504rg.pdf); [RF harvesting survey](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/)). A continuous BLE RX alone (4.6 mA ≈ 15 mW @3.3 V, [nRF52840](http://files.pine64.org/doc/datasheet/pinetime/nRF52840%20product%20brief.pdf)) demands **~1,900×** the 8 µW budget [derived, illustrative]. **Only sub-µW loads such as backscatter transmit at 0.25 µW, or carefully selected sleep and wake circuits, approach continuous RF-only operation** ([SIGCOMM 2013](https://conferences.sigcomm.org/sigcomm/2013/papers/sigcomm/p39.pdf); [STM32L4 modes](https://www.emcu.it/SILICA-STDay-2016/X/Presentazioni/6_2_STM32L4_System_Operating_Modes.pdf)).

**(b) Intermittent burst with storage — the feasible default.**
Break-even duty cycle for a BLE-advertising sense node, using P_harvest=8 µW, P_active≈15 mW (BLE RX), quiescent≈1 µW:
\\[
D_{max}\\approx \\frac{8\\,\\mu W-1\\,\\mu W}{15{,}000\\,\\mu W}\\approx 4.7\\times10^{-4}\\;(\\approx0.05\\%).
\\]
[derived, illustrative; inputs sourced above]. That is ~1 short radio event every ~35 minutes if a single event ≈1 s. Consistent with the IET finding that a 2 µW load can only run 0.04–1.3% of the time on ambient RF ([IET/Wiley domestic trial](https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/iet-map.2014.0406)). FRAM checkpointing (9 µA writes, [EDN](https://www.edn.com/what-you-need-to-know-about-fram-mcus/)) preserves recursive state across the frequent brownouts inherent to this mode ([DIAC](https://ar5iv.labs.arxiv.org/html/2311.16406)).

This duty-cycle figure is an optimistic upper bound because it treats the cited 8 µW as usable DC and does not subtract storage leakage, regulator conversion losses, sensor wake energy, or RF scan time. Measured \\(P_{DC,net}\\), rather than advertised rectifier peak efficiency, must drive the deployed scheduler.

**(c) Hybrid harvested + battery — best for bursty compute/localization.**
A TFB/LTO buffer (self-discharge ~1%/yr / <5% for LTO, [PSMA](https://www.psma.com/sites/default/files/uploads/tech-forums-energy-harvesting/presentations/2012-apec-114-energy-harvesting-storage-technologies_0.pdf); [Nichicon](https://www.nichicon.com/en-us/news-and-resources/case-studies/energy-storage-for-iot/)) lets the node accumulate µW-scale harvest for long idle periods, then spend it in high-current bursts (UWB TX 70 mA, [DW1000](https://www.mouser.com/datasheet/2/412/DW1000_Data_Sheet-1950775.pdf); KWS 178 µJ/sample, [ETH Zürich](https://www.research-collection.ethz.ch/server/api/core/bitstreams/38cc596b-03e8-4ad5-9690-2e25c06b1d23/content)). Example: at 8 µW net harvest, storing energy for one 178 µJ KWS inference takes **≈22 s** of harvesting [derived, illustrative]; one UWB ranging burst (~70 mA × 3.3 V × ~5 ms ≈ 1.16 mJ) takes **≈2.4 minutes** of harvesting [derived, illustrative]. This defines the innovation-triggered / information-per-joule cadence.

### 6.4 Why continuous SLAM or onboard LLM inference is infeasible on ambient RF

- VI-SLAM was benchmarked on a **desktop i7 + up to 5 GB RAM**, DSO "requires GPU acceleration," and loop closure is "computationally heavy" ([SLAM benchmark, HAL](https://hal.science/hal-03187856v2/document)). Even the leanest ORB-SLAM2 runs continuous multi-threaded feature tracking/BA — watt-class, i.e. **~10⁵–10⁶× the µW ambient-RF budget** [derived, illustrative comparison of watt-class compute vs 8 µW harvest].
- LLM inference is not a TinyML-class load; even on-device *TinyML* adaptation costs 26 mW / 178 µJ per sample ([ETH Zürich](https://www.research-collection.ethz.ch/server/api/core/bitstreams/38cc596b-03e8-4ad5-9690-2e25c06b1d23/content)) — already ~3,000× the 8 µW harvest for its active duration. Full LLM inference is far larger and belongs at the edge/cloud tier (**onboard LLM current draw: n.a.** from a fetched datasheet).
- **Feasible tiered alternatives (analytical synthesis):** event-driven sensing (event camera 36 µW idle, [GenX320](https://www.prophesee.ai/event-based-sensor-genx320/); IMU wake at 4–30 µA, [BMI270](https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmi270-ds000.pdf)); backscatter comms (0.25 µW, [SIGCOMM 2013](https://conferences.sigcomm.org/sigcomm/2013/papers/sigcomm/p39.pdf)); RSS/BLE fingerprint L rather than SLAM; TinyML feature extraction on-node, heavy K-updates and SLAM offloaded to edge/cloud.

---

## 7. Domain 7 — Technical synergies and RSD architecture (analytical synthesis, this report)

All items below are this report's synthesis of the cited component evidence; none are validated RSD-literature findings.

1. **Shared factor-graph / state-space representation:** L already uses factor-graph MAP (ORB-SLAM2, VINS-Mono) and recursive Bayes (EKF/PF in 5G, ROVIO) ([SLAM benchmark](https://hal.science/hal-03187856v2/document); [5G multipath PF](https://www.diva-portal.org/smash/get/diva2:1670288/FULLTEXT01.pdf)); K uses probabilistic surrogates with calibrated uncertainty ([SDL survey](https://arxiv.org/pdf/2601.17920.pdf)). A unified graph over L∪K∪E is the natural RSD substrate.
2. **RF as observation and energy simultaneously:** the same GSM/UMTS/DTV signals are the dominant harvestable bands ([RF harvesting survey](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/)) and viable positioning SoOP ([5G datasets](https://pmc.ncbi.nlm.nih.gov/articles/PMC10675248/)); a rectenna's RSSI/turn-on doubles as a coarse L feature.
3. **Information-per-joule scheduling / innovation-triggered sensing:** implemented via acquisition-function selection ([SDL survey](https://arxiv.org/pdf/2601.17920.pdf)) gated by the clipped energy balance (§6) — spend a UWB burst (1.16 mJ) only when expected L-innovation justifies ~2.4 min of harvest.
4. **Energy-aware observability:** NLoS/outlier rejection and CRB-bounded estimators ([5G survey CRB](http://www.sce.carleton.ca/faculty/wainer/papers/sensors-22-04757-v2%20(1).pdf); [outlier rejection](https://arxiv.org/pdf/2409.12585.pdf)) let the scheduler skip low-information, high-E measurements.
5. **Checkpointed recursive state:** FRAM/NVM ([TI FRAM](https://software-dl.ti.com/trainingTTO/trainingTTO_public_sw/MSP430_LaunchPad_Workshop/v4/Chapters/MSP430m09_FLASH_and_FRAM.pdf)) + intermittent-computing checkpoint/restore ([IIT Delhi survey](https://www.cse.iitd.ac.in/~priyankas/files/papers/chkptSurvey.pdf)) preserve L/K/E across brownouts.
6. **Edge/cloud partitioning:** on-node = event sensing, RSS L, TinyML features, checkpointing; edge/cloud = SLAM, model revision, LLM orchestration (compute magnitudes from §5–6).
7. **Validation metrics (proposed):** L → APE/RPE RMSE, CDF percentiles ([SLAM benchmark](https://hal.science/hal-03187856v2/document)); K → calibration + reproducibility checklist ([SDL survey](https://arxiv.org/pdf/2601.17920.pdf)); E → energy-neutrality margin and achieved duty cycle vs D_max (§6).

---

## 8. Domain 8 — Hardware limitations, research gaps (July 2026), roadmap, falsifiable criteria

### 8.1 Hardware limitations & gaps
- **Ambient RF energy is the binding limit:** ordinary indoor densities <1 nW/cm² ([IET/Wiley](https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/iet-map.2014.0406)); even favorable indoor harvest ≈8 µW ([RF survey](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/)). Rectenna PCE collapses below ~−20 dBm ([Wideband RFEH](https://pmc.ncbi.nlm.nih.gov/articles/PMC8778130/)).
- **Radios dominate the active budget** (BLE ~15 mW, UWB RX 30 mA / TX 70 mA) ([nRF52840](http://files.pine64.org/doc/datasheet/pinetime/nRF52840%20product%20brief.pdf); [DW1000](https://www.mouser.com/datasheet/2/412/DW1000_Data_Sheet-1950775.pdf)).
- **Storage trade-off unresolved:** supercap leakage (~30%/month) vs TFB burst-current limits ([Eaton](https://www.eaton.com/content/dam/eaton/products/electronic-components/resources/brochure/eaton-supercapacitor-vs-batteries-white-paper-elx1150-en.pdf); [PSMA](https://www.psma.com/sites/default/files/uploads/tech-forums-energy-harvesting/presentations/2012-apec-114-energy-harvesting-storage-technologies_0.pdf)).
- **Agentic-K gaps:** robustness, safety, reproducibility, calibrated multimodal uncertainty, failure-aware autonomy, verifiable tool use — all listed as open ([SDL survey](https://arxiv.org/pdf/2601.17920.pdf)).
- **No integrated RF-harvest + SoOP-navigation + agentic-K platform exists in the fetched literature** (gap; the closest are single-domain demonstrations cited above). **SDR-class scanner power for a specific product: n.a.** in this session.

### 8.2 Staged prototype roadmap (proposed)
- **Stage 0 — Harvest characterization:** deploy BQ25504 + multiband rectenna ([BQ25504](https://image.micros.com.pl/_dane_techniczne_auto/uibq25504rg.pdf); [QBEH](https://arxiv.org/pdf/2408.09136.pdf)); log real DC harvest vs. the survey bands ([RF survey](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/)).
- **Stage 1 — Batteryless L-lite node:** STM32L4 + BMI270 + BLE, RSS/PDR fusion with EKF, FRAM checkpointing; validate D_max vs measured harvest.
- **Stage 2 — Innovation-triggered E-aware sensing:** add event camera (GenX320) + acquisition-function scheduler (EIG/E) with TFB/LTO hybrid storage.
- **Stage 3 — Tiered K:** on-node TinyML features; edge/cloud SLAM + agentic model revision with provenance logging per SDL reproducibility checklist ([SDL survey](https://arxiv.org/pdf/2601.17920.pdf)).

### 8.3 Falsifiable success criteria (proposed)
1. **Energy-neutral duty cycle:** achieved D ≥ predicted D_max within measured harvest (§6) over ≥30 days with no external charge. Falsified if node dies while energy-neutrality condition is nominally satisfied.
2. **L accuracy under E budget:** median position error within the cited technology envelope (WiFi/BLE 0.1–5 m, UWB <0.3 m, 5G-PF <0.9 m @90%) at the achieved duty cycle ([WiFi/BLE/UWB survey](https://pdfs.semanticscholar.org/841a/b1c1e82639e58d05f18b04935f841e8d22e0.pdf); [5G PF](https://www.diva-portal.org/smash/get/diva2:1670288/FULLTEXT01.pdf)).
3. **Information-per-joule improvement:** scheduler beats fixed-duty baseline on EIG/J by a pre-registered margin; falsified otherwise.
4. **Reproducible K:** every model revision carries a rerunnable provenance record ([SDL survey](https://arxiv.org/pdf/2601.17920.pdf)).
5. **No-magic guardrail:** system never claims continuous SLAM or onboard LLM inference on ambient-RF-only power (bounded infeasible in §6.4).

---

## 9. Bottom-line conclusions

- **RSD is a coherent engineering/epistemic framing, not validated physics or a product.** Every component (L estimators, RF harvest, storage, agentic K, hardware) is individually supported by the fetched sources; the L/K/E coupling and synergy claims are this report's synthesis.
- **Energy is the dominant constraint.** Ambient-RF-only power supports **sub-µW continuous** or **~0.05% duty-cycle bursts** [derived from [RF survey](https://pmc.ncbi.nlm.nih.gov/articles/PMC9026445/), [IET trial](https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/iet-map.2014.0406), [BQ25504](https://image.micros.com.pl/_dane_techniczne_auto/uibq25504rg.pdf), [nRF52840](http://files.pine64.org/doc/datasheet/pinetime/nRF52840%20product%20brief.pdf)]. Continuous SLAM/LLM are infeasible; event-driven, tiered, checkpointed operation with hybrid storage is feasible.
- **The most defensible platform** is a hybrid-storage, innovation-triggered node doing RSS/PDR/UWB-burst L on-device, TinyML feature K on-device, and SLAM/model-revision K at edge/cloud, scheduled by an information-per-joule policy under a clipped energy balance.

*All numeric values above are quoted from pages fetched during this research session, linked inline. Values marked n.a. were not confirmable from a fetched source. RSD itself, and all L/K/E mappings and synergies, are user-defined / analytical synthesis, not externally validated RSD literature.*
`;export{e as default};
