/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
import type { CaseEntry } from "@/types/case"
import type { ExtraCaseItem } from "../usecases-extra"
import {
  MdEco as Leaf, MdWaterDrop as Droplet, MdLocalShipping as Truck, MdSearch as Search,
  MdDescription as ScrollText, MdVerifiedUser as ShieldCheck, MdFactCheck as FileCheck,
  MdFingerprint as Fingerprint, MdAccountBalanceWallet as Wallet, MdMemory as Cpu,
  MdStorage as Database, MdHub as Network, MdAccountBalance as Landmark, MdApartment as Building2,
  MdDns as Server, MdSchema as Workflow, MdPieChart as PieChart, MdCardGiftcard as Gift,
  MdScience as FlaskConical, MdBalance as Scale, MdBolt as Zap, MdPublic as Globe,
  MdGroups as Users, MdWidgets as Boxes, MdShield as Shield, MdThermostat as Thermometer,
  MdSensors as Radio, MdQrCode2 as QrCode, MdInventory2 as Package, MdHandshake as Handshake,
  MdGavel as Gavel, MdMonitorHeart as HeartPulse, MdHowToVote as Vote, MdCopyright as Copyright,
  MdMonetizationOn as Coins, MdFlight as Plane, MdDirectionsCar as Car, MdSchool as GraduationCap,
  MdHome as Home, MdPalette as Palette, MdSportsEsports as Gamepad, MdLock as Lock,
  MdShowChart as Activity, MdBadge as IdCard, MdConstruction as Pickaxe, MdFactory as Factory,
  MdDirectionsBus as Bus, MdConfirmationNumber as Ticket, MdWifi as Wifi, MdLocalHospital as Hospital,
  MdBiotech as Biotech, MdAgriculture as Tractor, MdForest as Forest, MdRecycling as Recycling,
} from "react-icons/md"

const INDUSTRY = "Energy & Utilities"

export const energyUtilitiesCases: CaseEntry[] = [
  {
    slug: "coal-gas-plant-emission-reporting-for-regulatory-compliance",
    icon: Factory,
    eyebrow: "Emissions Compliance Engine",
    headline1: "Anchor every emission.",
    headline2: "Report to the regulator live.",
    heroDescription:
      "Stream Continuous Emission Monitoring System data straight from the stack sensor to the regulator on a shared network, so nothing can be altered between collection and submission. Manual forms disappear and a CPCB officer reads the same figures the plant does, in real time.",
    heroCta: "Deploy Emission Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manually reported compliance form into a live, tamper-evident feed from stack to regulator.",
    mechanics: [
      { title: "Direct Sensor Anchoring", description: "Eliminate the reporting gap. External Data Oracles pull readings from the CEMS analyser and write them on-chain at source, so no operator sits between the sensor and the regulator's copy." },
      { title: "Tamper-Evident Feed", description: "Every SO2, NOx, and particulate reading is sealed by its digest the moment it is captured, making any later edit to a submitted value mathematically detectable." },
      { title: "Real-Time Regulator Window", description: "The Compliance Attestations module gives the pollution control board a read-only view of live emissions, replacing periodic paper filings with a continuous query." },
      { title: "Threshold Breach Alerts", description: "When a reading crosses a permitted limit, the contract flags the exceedance instantly and stamps it, so a spike surfaces in hours instead of at the next audit." },
      { title: "MRV-Grade Records", description: "The Carbon Credits MRV and Registry module structures each reading into a measurement, reporting, and verification record fit for both compliance and carbon accounting." },
      { title: "Immutable Audit Trail", description: "Regulators reconstruct any window of plant emissions from the ledger, resolving disputes against a signed record rather than a plant-supplied spreadsheet." },
    ],
    lifecycleTitle: "The Emission Reporting Lifecycle",
    lifecycleSubtitle:
      "Follow a single stack reading from analyser capture to a regulator notice issued against the on-chain record.",
    lifecycleSteps: [
      {
        label: "Analyser Calibration",
        description:
          "The CEMS analyser is registered and its calibration certificate anchored. The contract binds the sensor identity to the stack it monitors before any reading is accepted.",
        icon: Radio,
        logFilename: "cerulea_emission_engine.log",
        logLines: [
          { text: "[SYS] Registering CEMS analyser for stack STK_07...", time: "05:02:11", tone: "default" },
          { text: "[CMD] bindSensor { id: \"CEMS_1142\", stack: \"STK_07\", cal: \"ISO_14956\" }", time: "05:02:11", tone: "primary" },
          { text: "[AUTH] Verifying calibration certificate digest...", time: "05:02:12", tone: "secondary" },
          { text: "[OK] Sensor bound and calibrated at block 5120334.", time: "05:02:12", tone: "success" },
        ],
      },
      {
        label: "Continuous Anchoring",
        description:
          "The oracle streams live readings to the ledger at the sampling interval. Each SO2 and NOx value is written with its timestamp and sealed at source.",
        icon: Activity,
        logFilename: "cerulea_emission_engine.log",
        logLines: [
          { text: "[SYS] Polling analyser feed at 60s interval...", time: "11:14:00", tone: "default" },
          { text: "[CMD] anchorReading(STK_07, so2: 412, nox: 180, pm: 47)", time: "11:14:00", tone: "primary" },
          { text: "[SYS] Reading sealed with SHA-256 digest.", time: "11:14:01", tone: "default" },
          { text: "[OK] 1440 readings anchored today. Feed intact.", time: "11:14:01", tone: "success" },
        ],
      },
      {
        label: "Threshold Evaluation",
        description:
          "The contract compares each reading against the plant's permitted limits. An SO2 exceedance is flagged and stamped the instant it is detected.",
        icon: Gavel,
        logFilename: "cerulea_emission_engine.log",
        logLines: [
          { text: "[SYS] Evaluating STK_07 against consent limits...", time: "14:33:52", tone: "default" },
          { text: "[CMD] checkThreshold(so2: 612, limit: 500)", time: "14:33:52", tone: "primary" },
          { text: "[SYS] Exceedance detected. Sealing breach event...", time: "14:33:52", tone: "error" },
          { text: "[OK] Breach BRCH_2291 recorded and timestamped.", time: "14:33:53", tone: "success" },
        ],
      },
      {
        label: "Regulator Notification",
        description:
          "The pollution control board is alerted from the same record. A notice is issued against the anchored breach, and the plant's rectification is logged back to the event.",
        icon: FileCheck,
        logFilename: "cerulea_emission_engine.log",
        logLines: [
          { text: "[SYS] Dispatching breach BRCH_2291 to CPCB node...", time: "14:34:10", tone: "default" },
          { text: "[CMD] issueNotice(BRCH_2291, window: \"24h\")", time: "14:34:10", tone: "primary" },
          { text: "[AUTH] Regulator signature attached to notice...", time: "14:34:11", tone: "secondary" },
          { text: "[OK] Notice served. Response time cut to hours.", time: "14:34:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes emission compliance into modular contracts. Each layer captures, seals, evaluates, and exposes stack data without any operator able to alter a submitted reading.",
    layers: [
      {
        title: "CEMS Oracle",
        subtitle: "The Sensor Bridge",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sensor Bridge",
          description:
            "The ingestion layer. It reads directly from the calibrated CEMS analyser and writes each emission value on-chain at source, removing the manual reporting step where data was historically altered.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract CemsOracle {\n  struct Reading {\n    bytes32 sensorId;\n    uint256 so2;\n    uint256 nox;\n    uint256 pm;\n    uint256 capturedAt;\n  }\n\n  mapping(uint256 => Reading) public feed;\n\n  function anchor(bytes32 sensor, uint256 so2, uint256 nox, uint256 pm) external onlyOracle {\n    feed[block.number] = Reading(sensor, so2, nox, pm, block.timestamp);\n  }\n}",
        simAction: "Simulate Reading Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading analyser CEMS_1142 on stack STK_07...", tone: "default" },
          { text: "Sealing SO2 and NOx values with digest...", tone: "default" },
          { text: "Writing reading to Level 1 storage...", tone: "default" },
          { text: "Confirming no operator in the data path...", tone: "default" },
          { text: "[SUCCESS] Emission reading anchored at source.", tone: "success" },
        ],
      },
      {
        title: "Emission Registry",
        subtitle: "The MRV Ledger",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The MRV Ledger",
          description:
            "Structures each raw reading into a measurement, reporting, and verification record. It gives both the compliance officer and the carbon accountant one auditable series per stack.",
          platformFunction: "Records & MRV",
        },
        codeSnippet:
          "function recordMrv(bytes32 stack, uint256 avg, uint256 window) external onlyRegistry {\n    series[stack].push(Mrv(avg, window, block.timestamp));\n    emit MrvRecorded(stack, avg, window);\n}",
        simAction: "Simulate MRV Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating hourly averages for STK_07...", tone: "default" },
          { text: "Computing rolling window mean...", tone: "default" },
          { text: "Appending MRV entry to stack series...", tone: "default" },
          { text: "Cross-linking to carbon accounting ledger...", tone: "default" },
          { text: "[SUCCESS] MRV record sealed for the reporting window.", tone: "success" },
        ],
      },
      {
        title: "Compliance Attestor",
        subtitle: "The Limit Guard",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Limit Guard",
          description:
            "Compares every reading to the plant's consent conditions and seals a breach event the moment a limit is crossed, turning a slow inspection finding into an instant, timestamped fact.",
          platformFunction: "Compliance Enforcement",
        },
        codeSnippet:
          "function checkThreshold(bytes32 stack, uint256 value, uint256 limit) external returns (bool) {\n    if (value > limit) {\n        breaches[stack].push(Breach(value, limit, block.timestamp));\n        emit ExceedanceFlagged(stack, value, limit);\n        return false;\n    }\n    return true;\n}",
        simAction: "Simulate Threshold Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading consent limits for stack STK_07...", tone: "default" },
          { text: "Comparing SO2 612 against limit 500...", tone: "default" },
          { text: "Exceedance confirmed, sealing breach event...", tone: "default" },
          { text: "Stamping breach with block timestamp...", tone: "default" },
          { text: "[SUCCESS] Breach recorded, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Regulator Gateway",
        subtitle: "The Oversight Window",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Oversight Window",
          description:
            "A read-only interface that lets the pollution control board query live and historical emissions and issue notices against sealed breach events, without ever depending on a plant-supplied file.",
          platformFunction: "Regulatory Access",
        },
        codeSnippet:
          "function issueNotice(bytes32 breachId) external onlyRegulator returns (bytes32) {\n    Breach storage b = breaches[breachId];\n    require(b.timestamp != 0, \"No breach\");\n    return _serveNotice(breachId, block.timestamp);\n}",
        simAction: "Simulate Regulator Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "CPCB node opening read-only window on STK_07...", tone: "default" },
          { text: "Fetching sealed breach BRCH_2291...", tone: "default" },
          { text: "Attaching regulator signature to notice...", tone: "default" },
          { text: "Serving 24-hour rectification notice...", tone: "default" },
          { text: "[SUCCESS] Notice issued against on-chain record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Real-time emission anchoring is a horizontal capability. Here is how different actors across the power sector put the shared feed to work.",
    sectors: [
      { icon: Factory, title: "Thermal Power Generators", description: "Stream stack emissions straight to the regulator and prove continuous compliance, replacing manual returns and defending against contested exceedance claims with a sealed record.", assetTypes: ["Stack Feeds", "Consent Conditions", "Exceedance Events"] },
      { icon: Landmark, title: "Pollution Control Boards", description: "Watch a live emission window across every connected plant and issue notices within hours of a spike, moving enforcement from periodic audits to continuous oversight.", assetTypes: ["Live Emission Windows", "Compliance Notices", "Audit Series"] },
      { icon: Building2, title: "Industrial Emitters", description: "Anchor boiler and furnace emissions alongside power stacks to hold one defensible environmental record across a whole industrial site.", assetTypes: ["Boiler Stacks", "Site Emission Logs", "MRV Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging plant SCADA and DCS historians or reading directly from analyser hardware, Cerulea routes both into one tamper-evident emission ledger.",
    tracks: [
      {
        title: "Track A: Plant Historian Bridging",
        description:
          "For plants running SCADA and DCS historians. Existing tag data is translated into signed on-chain emission readings through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "SCADA / DCS Historian", sublabel: "Plant Control Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Emission Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Analyser Capture",
        description:
          "For CEMS analysers with edge connectivity. Each reading is signed by a device key and routed straight to the ledger, with no plant server in the path.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "CEMS Analyser / Edge", sublabel: "Stack Sensor Hardware", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Reading Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Emission Feed", icon: Factory, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Wiring analyser feeds, breach logic, and a regulator portal into one tamper-evident system from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Emission & Threshold Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects industrial monitoring integration benchmarks. Connecting each analyser feed, building custom exceedance logic, and shipping a regulator portal for an average plant takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your emission and threshold rules into pre-audited WebAssembly binaries and provisions the shared ledger and regulator window instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "coal-supply-quality-verification-for-power-plant-fuel-linkage",
    icon: Pickaxe,
    eyebrow: "Fuel Quality Settlement Layer",
    headline1: "Verify every grade.",
    headline2: "Settle on delivered quality.",
    heroDescription:
      "Anchor the calorific value test at the moment coal is delivered and tie the payment calculation directly to the verified grade. Any shortfall against the contracted grade is reflected in payment automatically, rather than fought out in a separate dispute.",
    heroCta: "Deploy Fuel Linkage Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Convert a slow grade dispute into an automatic payment adjustment anchored to the delivered quality test.",
    mechanics: [
      { title: "Grade Certificate Anchor", description: "The Produce Grades and Certificates module binds each delivery to its contracted grade and the lab test taken on arrival, so the agreed and delivered quality sit in one record." },
      { title: "Provenance-Linked Sampling", description: "The Provenance Notary ties each calorific value sample to the specific rake and mine of origin, making it impossible to swap a good sample for a poor consignment." },
      { title: "Automatic Shortfall Pricing", description: "Escrow and Conditional Settlement recomputes the payable amount from the verified grade, so a delivery below the contracted calorific value is priced down without a claim." },
      { title: "Conditional Release", description: "Payment is held in escrow until the quality test is anchored, releasing the adjusted amount to the supplier only once the delivered grade is confirmed." },
      { title: "Dispute-Free Settlement", description: "Because both parties settle against the same anchored test, contested deliveries resolve against a signed grade record instead of two conflicting lab reports." },
      { title: "Linkage Audit Trail", description: "Every delivery, sample, and adjustment is retained, giving auditors and the coal ministry a verifiable history of quality against each fuel supply agreement." },
    ],
    lifecycleTitle: "The Fuel Linkage Lifecycle",
    lifecycleSubtitle:
      "Follow a single coal rake from dispatch through arrival sampling to an automatically adjusted payment.",
    lifecycleSteps: [
      {
        label: "Consignment Dispatch",
        description:
          "A coal rake is dispatched against a supply agreement. The contract records the contracted grade, tonnage, and mine of origin as the baseline for settlement.",
        icon: Truck,
        logFilename: "cerulea_fuel_linkage.log",
        logLines: [
          { text: "[SYS] Opening consignment against linkage LNK_338...", time: "07:41:03", tone: "default" },
          { text: "[CMD] dispatch { rake: \"RK_9021\", grade: \"G7\", tonnes: 3800 }", time: "07:41:03", tone: "primary" },
          { text: "[AUTH] Binding mine of origin and contracted grade...", time: "07:41:04", tone: "secondary" },
          { text: "[OK] Consignment anchored at block 6633102.", time: "07:41:04", tone: "success" },
        ],
      },
      {
        label: "Arrival Sampling",
        description:
          "On arrival, a sample is drawn and tested for calorific value. The lab result is anchored and cryptographically bound to the specific rake.",
        icon: FlaskConical,
        logFilename: "cerulea_fuel_linkage.log",
        logLines: [
          { text: "[SYS] Registering arrival sample for RK_9021...", time: "19:12:40", tone: "default" },
          { text: "[CMD] anchorTest(rake: \"RK_9021\", gcv: 4180, grade: \"G8\")", time: "19:12:40", tone: "primary" },
          { text: "[SYS] Sample sealed and bound to consignment.", time: "19:12:41", tone: "default" },
          { text: "[OK] Delivered grade G8 recorded below contracted G7.", time: "19:12:41", tone: "success" },
        ],
      },
      {
        label: "Payment Recalculation",
        description:
          "The settlement contract recomputes the payable amount from the verified grade. The shortfall against the contracted calorific value is priced in automatically.",
        icon: Scale,
        logFilename: "cerulea_fuel_linkage.log",
        logLines: [
          { text: "[SYS] Recomputing payment for RK_9021...", time: "19:14:05", tone: "default" },
          { text: "[CMD] priceByGrade(contracted: \"G7\", delivered: \"G8\")", time: "19:14:05", tone: "primary" },
          { text: "[SYS] Applying calorific shortfall deduction of 6.2%...", time: "19:14:05", tone: "secondary" },
          { text: "[OK] Adjusted payable computed from verified grade.", time: "19:14:06", tone: "success" },
        ],
      },
      {
        label: "Escrow Release",
        description:
          "The escrow releases the adjusted amount to the supplier. Both parties settle on the same anchored test with no separate dispute process.",
        icon: Wallet,
        logFilename: "cerulea_fuel_linkage.log",
        logLines: [
          { text: "[SYS] Escrow holding payment for RK_9021...", time: "19:15:22", tone: "default" },
          { text: "[CMD] release(supplier: \"0xA71\", amount: adjusted)", time: "19:15:22", tone: "primary" },
          { text: "[AUTH] Confirming both signatures on grade record...", time: "19:15:23", tone: "secondary" },
          { text: "[OK] Adjusted payment settled. No dispute raised.", time: "19:15:23", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fuel linkage settlement into modular contracts. Each layer records the contracted grade, seals the delivered test, prices the shortfall, and releases the adjusted payment.",
    layers: [
      {
        title: "Linkage Registry",
        subtitle: "The Contract Baseline",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Contract Baseline",
          description:
            "The reference layer. It stores the contracted grade, calorific band, and tonnage for each fuel supply agreement, giving every later test a fixed benchmark to price against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract LinkageRegistry {\n  struct Supply {\n    bytes32 mine;\n    string contractedGrade;\n    uint256 minGcv;\n    uint256 tonnes;\n  }\n\n  mapping(bytes32 => Supply) public linkages;\n\n  function open(bytes32 rake, bytes32 mine, string calldata grade, uint256 minGcv) external {\n    linkages[rake] = Supply(mine, grade, minGcv, 0);\n  }\n}",
        simAction: "Simulate Consignment Open",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading linkage LNK_338 terms...", tone: "default" },
          { text: "Recording contracted grade G7 baseline...", tone: "default" },
          { text: "Binding mine of origin to rake RK_9021...", tone: "default" },
          { text: "Writing supply record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Consignment baseline anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Quality Notary",
        subtitle: "The Sample Seal",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sample Seal",
          description:
            "Anchors the arrival calorific value test by its digest and binds it to the exact rake. It stops a favourable sample being substituted for a poor consignment.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorTest(bytes32 rake, uint256 gcv, string calldata grade) external onlyLab {\n    require(linkages[rake].minGcv != 0, \"No linkage\");\n    tests[rake] = Test(gcv, grade, msg.sender, block.timestamp);\n    emit TestAnchored(rake, gcv, grade);\n}",
        simAction: "Simulate Sample Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting calorific value lab report...", tone: "default" },
          { text: "Computing digest of test certificate...", tone: "default" },
          { text: "Binding delivered grade G8 to rake RK_9021...", tone: "default" },
          { text: "Sealing sample against consignment...", tone: "default" },
          { text: "[SUCCESS] Quality test anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Shortfall Pricer",
        subtitle: "The Adjustment Engine",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Adjustment Engine",
          description:
            "Recomputes the payable amount from the verified grade against the contracted band. Any calorific shortfall is priced down deterministically, with no room for negotiation.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function priceByGrade(bytes32 rake) external view returns (uint256) {\n    Supply memory s = linkages[rake];\n    Test memory t = tests[rake];\n    if (t.gcv >= s.minGcv) return basePrice[rake];\n    uint256 deficit = ((s.minGcv - t.gcv) * 1e4) / s.minGcv;\n    return basePrice[rake] - (basePrice[rake] * deficit) / 1e4;\n}",
        simAction: "Simulate Shortfall Pricing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading contracted band G7 for RK_9021...", tone: "default" },
          { text: "Comparing delivered 4180 kcal against 4460 floor...", tone: "default" },
          { text: "Deriving 6.2% calorific deficit...", tone: "default" },
          { text: "Computing adjusted payable amount...", tone: "default" },
          { text: "[SUCCESS] Payment priced from verified grade.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Conditional Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Vault",
          description:
            "Holds the buyer's payment until the quality test is anchored, then releases the adjusted amount to the supplier. Settlement and verification become a single conditional event.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function release(bytes32 rake) external {\n    require(tests[rake].timestamp != 0, \"No test\");\n    uint256 amount = priceByGrade(rake);\n    escrow[rake] = 0;\n    payable(supplier[rake]).transfer(amount);\n    emit Settled(rake, amount);\n}",
        simAction: "Simulate Escrow Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming anchored test exists for RK_9021...", tone: "default" },
          { text: "Fetching adjusted payable from pricer...", tone: "default" },
          { text: "Releasing funds from conditional vault...", tone: "default" },
          { text: "Recording mutual settlement on-chain...", tone: "default" },
          { text: "[SUCCESS] Adjusted payment settled, dispute-free.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Grade-linked settlement is a horizontal capability. Here is how different actors in the coal supply chain put the verified record to work.",
    sectors: [
      { icon: Factory, title: "Power Generators", description: "Pay for coal on the quality actually delivered, with shortfalls priced automatically at the gate, protecting plant heat rate and cash without a claims backlog.", assetTypes: ["Fuel Linkages", "Grade Tests", "Adjusted Invoices"] },
      { icon: Pickaxe, title: "Coal Producers & Traders", description: "Prove delivered quality with a sealed sample tied to origin, settling faster and defending against unjust deductions with a shared test record.", assetTypes: ["Dispatch Rakes", "Origin Attestations", "Quality Certificates"] },
      { icon: Landmark, title: "Regulators & Ministries", description: "Audit fuel supply agreements against verified grades directly on-chain, monitoring linkage performance without collecting reports from each party.", assetTypes: ["Linkage Audits", "Settlement Records", "Compliance Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a generator's ERP and weighbridge systems or capturing lab results from a sampling terminal, Cerulea routes both into one settlement record.",
    tracks: [
      {
        title: "Track A: Generator ERP Bridging",
        description:
          "For power utilities on legacy ERP and weighbridge software. Dispatch and receipt events are translated into signed on-chain consignment records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "ERP / Weighbridge", sublabel: "Utility Fuel Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Fuel Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Sampling Lab Capture",
        description:
          "For third-party labs and sampling agencies. A signed terminal anchors each calorific value test directly to the rake it was drawn from.",
        connectorLabels: ["LAB SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Sampling Terminal", sublabel: "Third-Party Lab", icon: FlaskConical, accent: false },
          { label: "Consortium Validators", sublabel: "Test Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Grade Record", icon: Pickaxe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building grade-linked settlement with sampling anchors, shortfall pricing, and conditional escrow from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Grade & Settlement Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise settlement integration benchmarks. Wiring weighbridge and lab systems, building custom shortfall pricing, and shipping a conditional escrow for an average linkage takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your grade and settlement rules into pre-audited WebAssembly binaries and provisions the escrow and quality ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "plant-maintenance-outage-scheduling-and-grid-notification",
    icon: Radio,
    eyebrow: "Outage Coordination Layer",
    headline1: "Timestamp every notice.",
    headline2: "Prove the grid was told.",
    heroDescription:
      "Anchor each planned maintenance notification to the grid operator the moment it is sent, so the plant, the operator, and any regulator share one verifiable record of when the outage was communicated. Coordinated scheduling replaces disputed claims about who was notified and when.",
    heroCta: "Deploy Outage Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an unverifiable notification into a timestamped, regulator-visible record of grid coordination.",
    mechanics: [
      { title: "Timestamped Notices", description: "The Notifications module seals each outage notice with the exact time it was sent, so the notice period can be proven rather than asserted after the fact." },
      { title: "Provenance-Bound Schedule", description: "The Provenance Notary binds each notification to the unit, the planned window, and the reduced capacity, making the schedule a single authoritative record." },
      { title: "Regulatory Attestation", description: "Compliance Attestations expose the notification history to the regulator, so on-time communication is demonstrable for any compliance review." },
      { title: "Operator Acknowledgement", description: "The grid operator co-signs receipt, turning a one-way message into a mutually recorded coordination event both parties can rely on." },
      { title: "Capacity Impact Record", description: "Each notice carries the megawatts withdrawn and the restoration date, giving the operator a structured basis to plan around the reduced capacity." },
      { title: "Immutable Notice Trail", description: "Every outage, revision, and acknowledgement is retained, so a dispute over late notification is settled against a signed timeline instead of email logs." },
    ],
    lifecycleTitle: "The Outage Coordination Lifecycle",
    lifecycleSubtitle:
      "Follow a single planned outage from schedule submission through operator acknowledgement to a regulator-ready record.",
    lifecycleSteps: [
      {
        label: "Outage Submission",
        description:
          "The plant submits a planned maintenance window. The contract records the unit, the capacity withdrawn, and the intended dates as the baseline notice.",
        icon: ScrollText,
        logFilename: "cerulea_outage_engine.log",
        logLines: [
          { text: "[SYS] Opening outage window for UNIT_3...", time: "09:20:14", tone: "default" },
          { text: "[CMD] submitOutage { unit: \"UNIT_3\", mw: 500, from: \"D+14\" }", time: "09:20:14", tone: "primary" },
          { text: "[AUTH] Binding capacity impact to schedule...", time: "09:20:15", tone: "secondary" },
          { text: "[OK] Outage OUT_771 anchored at block 7011245.", time: "09:20:15", tone: "success" },
        ],
      },
      {
        label: "Grid Notification",
        description:
          "The notice is dispatched to the grid operator and timestamped at the moment of sending, establishing the verifiable notice period.",
        icon: Radio,
        logFilename: "cerulea_outage_engine.log",
        logLines: [
          { text: "[SYS] Dispatching notice OUT_771 to grid node...", time: "09:20:31", tone: "default" },
          { text: "[CMD] notifyGrid(OUT_771, operator: \"SLDC_W\")", time: "09:20:31", tone: "primary" },
          { text: "[SYS] Send time sealed with block timestamp.", time: "09:20:31", tone: "default" },
          { text: "[OK] Notice served 14 days ahead of window.", time: "09:20:32", tone: "success" },
        ],
      },
      {
        label: "Operator Acknowledgement",
        description:
          "The grid operator co-signs receipt of the notice. The acknowledgement is bound to the outage, closing the coordination loop.",
        icon: Handshake,
        logFilename: "cerulea_outage_engine.log",
        logLines: [
          { text: "[SYS] Awaiting acknowledgement from SLDC_W...", time: "10:05:48", tone: "default" },
          { text: "[CMD] acknowledge(OUT_771, planner: \"SLDC_W\")", time: "10:05:48", tone: "primary" },
          { text: "[AUTH] Co-signature recorded from grid operator...", time: "10:05:49", tone: "secondary" },
          { text: "[OK] Coordination loop closed and sealed.", time: "10:05:49", tone: "success" },
        ],
      },
      {
        label: "Regulatory Review",
        description:
          "A regulator queries the sealed timeline. The full notice, acknowledgement, and any revision are returned as a verifiable compliance record.",
        icon: FileCheck,
        logFilename: "cerulea_outage_engine.log",
        logLines: [
          { text: "[SYS] Compliance query for OUT_771...", time: "16:41:02", tone: "default" },
          { text: "[CMD] resolveTimeline(OUT_771)", time: "16:41:02", tone: "primary" },
          { text: "[SYS] Assembling notice, ack, and revisions...", time: "16:41:02", tone: "default" },
          { text: "[OK] On-time notification verified from record.", time: "16:41:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes outage coordination into modular contracts. Each layer submits, notifies, acknowledges, and exposes a maintenance window without any party able to backdate a notice.",
    layers: [
      {
        title: "Outage Registry",
        subtitle: "The Schedule Anchor",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Schedule Anchor",
          description:
            "The foundational layer. It records each planned outage with its unit, withdrawn capacity, and window, giving every later notice and acknowledgement a fixed reference.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract OutageRegistry {\n  struct Outage {\n    bytes32 unit;\n    uint256 mwWithdrawn;\n    uint256 windowStart;\n    uint256 submittedAt;\n  }\n\n  mapping(bytes32 => Outage) public outages;\n\n  function submit(bytes32 id, bytes32 unit, uint256 mw, uint256 start) external {\n    outages[id] = Outage(unit, mw, start, block.timestamp);\n  }\n}",
        simAction: "Simulate Outage Submission",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading maintenance plan for UNIT_3...", tone: "default" },
          { text: "Recording 500 MW capacity withdrawal...", tone: "default" },
          { text: "Anchoring intended window start...", tone: "default" },
          { text: "Writing outage record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Outage OUT_771 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Notification Notary",
        subtitle: "The Timestamp Seal",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Timestamp Seal",
          description:
            "Seals the exact moment a notice is sent to the grid operator. It converts an easily contested claim of on-time notification into a cryptographic timestamp that cannot be backdated.",
          platformFunction: "Notification & Provenance",
        },
        codeSnippet:
          "function notifyGrid(bytes32 outageId, bytes32 operator) external onlyPlant {\n    require(outages[outageId].submittedAt != 0, \"No outage\");\n    notices[outageId] = Notice(operator, block.timestamp, false);\n    emit GridNotified(outageId, operator, block.timestamp);\n}",
        simAction: "Simulate Grid Notification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing notice for operator SLDC_W...", tone: "default" },
          { text: "Sealing send time with block timestamp...", tone: "default" },
          { text: "Binding notice to outage OUT_771...", tone: "default" },
          { text: "Confirming 14-day notice period...", tone: "default" },
          { text: "[SUCCESS] Notification timestamp anchored.", tone: "success" },
        ],
      },
      {
        title: "Acknowledgement Hook",
        subtitle: "The Two-Party Loop",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Party Loop",
          description:
            "Requires the grid operator to co-sign receipt before the coordination is complete, turning a one-way notice into a mutually recorded event both sides can depend on.",
          platformFunction: "Coordination & Workflow",
        },
        codeSnippet:
          "function acknowledge(bytes32 outageId) external onlyOperator {\n    Notice storage n = notices[outageId];\n    require(!n.acknowledged, \"Already acked\");\n    n.acknowledged = true;\n    emit OutageAcknowledged(outageId, msg.sender, block.timestamp);\n}",
        simAction: "Simulate Acknowledgement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Operator SLDC_W reviewing notice OUT_771...", tone: "default" },
          { text: "Validating capacity impact against grid plan...", tone: "default" },
          { text: "Recording co-signature from grid operator...", tone: "default" },
          { text: "Closing coordination loop...", tone: "default" },
          { text: "[SUCCESS] Outage acknowledged and sealed.", tone: "success" },
        ],
      },
      {
        title: "Compliance Window",
        subtitle: "The Regulator View",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Regulator View",
          description:
            "A read-only gateway that resolves an outage to its full notice and acknowledgement timeline, letting a regulator verify on-time communication without contacting either party.",
          platformFunction: "Regulatory Access",
        },
        codeSnippet:
          "function resolveTimeline(bytes32 outageId) external view returns (Notice memory, uint256) {\n    return (notices[outageId], outages[outageId].submittedAt);\n}",
        simAction: "Simulate Compliance Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator opening timeline for OUT_771...", tone: "default" },
          { text: "Fetching sealed notice and send time...", tone: "default" },
          { text: "Attaching operator acknowledgement...", tone: "default" },
          { text: "Confirming notice preceded the window...", tone: "default" },
          { text: "[SUCCESS] On-time notification verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable outage coordination is a horizontal capability. Here is how different actors across the grid put the shared timeline to work.",
    sectors: [
      { icon: Factory, title: "Generating Stations", description: "Prove maintenance notices were served on time and coordinate windows across units, protecting against penalties for alleged late notification with a sealed timeline.", assetTypes: ["Outage Windows", "Capacity Notices", "Restoration Dates"] },
      { icon: Network, title: "Grid & Load Despatch", description: "Receive structured, acknowledged outage notices and plan around reduced capacity from one authoritative schedule instead of scattered emails and calls.", assetTypes: ["Coordination Records", "Capacity Plans", "Acknowledgements"] },
      { icon: Landmark, title: "Electricity Regulators", description: "Audit notification compliance across generators directly on-chain, confirming that outages were communicated within the required period without a document trawl.", assetTypes: ["Notice Audits", "Compliance Timelines", "Coordination Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a plant's outage management system or letting a control room submit notices directly, Cerulea routes both into one coordination record.",
    tracks: [
      {
        title: "Track A: Outage Management Bridging",
        description:
          "For plants running outage management software. Scheduled notices are translated into signed on-chain coordination events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Outage Management System", sublabel: "Plant Planning Software", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Notice Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Coordination Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Control Room Submission",
        description:
          "For plant control rooms submitting directly. A signed console anchors each notice and revision straight to the shared schedule.",
        connectorLabels: ["OPERATOR SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Control Room Console", sublabel: "Plant Operators", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Notice Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Outage Timeline", icon: Radio, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building outage coordination with timestamped notices, operator acknowledgement, and a regulator view from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Notice & Coordination Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects grid coordination integration benchmarks. Wiring outage management software, building custom notice and acknowledgement logic, and shipping a regulator view for an average operator takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your notice and coordination rules into pre-audited WebAssembly binaries and provisions the shared schedule and regulator window instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "renewable-energy-certificates-recs-issuance-and-trading",
    icon: FileCheck,
    eyebrow: "Renewable Certificate Registry",
    headline1: "Tokenize clean generation.",
    headline2: "Trade RECs without doubt.",
    heroDescription:
      "Stand up a public-chain REC registry where certificates are tokenized, tradable, and uniquely verifiable, so double-issuance is structurally impossible and RPO compliance is publicly auditable. Corporates verify redemptions in minutes and the multi-week reconciliation with the power exchange disappears.",
    heroCta: "Deploy REC Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Transform an opaque, slow-settling certificate market into a liquid, publicly auditable registry.",
    mechanics: [
      { title: "Metered Issuance", description: "The Energy Meter Oracle feeds verified generation directly into issuance, so a REC is minted only against real, metered megawatt hours of clean output." },
      { title: "Unique Serialization", description: "The Renewable Energy Certificates Registry assigns each certificate a unique on-chain serial, making the same megawatt hour impossible to certify twice." },
      { title: "Tradable Tokens", description: "The ERC-20 Token module represents RECs as transferable units, giving the market instant settlement and deep liquidity in place of slow OTC transfers." },
      { title: "Public RPO Audit", description: "Corporate redemptions against Renewable Purchase Obligations are visible on the public chain, so a regulator confirms compliance without a registry reconciliation." },
      { title: "Structural Anti-Double-Issuance", description: "Because generation, serialization, and retirement share one ledger, a certificate cannot be issued, sold, or redeemed more than once." },
      { title: "Transparent Price Discovery", description: "Open order flow and on-chain trade history replace opaque bilateral pricing, tightening spreads and improving liquidity across the REC market." },
    ],
    lifecycleTitle: "The REC Lifecycle",
    lifecycleSubtitle:
      "Follow a single renewable certificate from metered generation through trade to a verified RPO redemption.",
    lifecycleSteps: [
      {
        label: "Generation Metering",
        description:
          "A renewable plant's meter reports clean output. The oracle anchors the verified megawatt hours as the basis for certificate issuance.",
        icon: Zap,
        logFilename: "cerulea_rec_engine.log",
        logLines: [
          { text: "[SYS] Polling generation meter for SOLAR_44...", time: "06:50:09", tone: "default" },
          { text: "[CMD] anchorGen(plant: \"SOLAR_44\", mwh: 1200)", time: "06:50:09", tone: "primary" },
          { text: "[AUTH] Verifying meter signature and interval...", time: "06:50:10", tone: "secondary" },
          { text: "[OK] 1200 MWh verified for issuance.", time: "06:50:10", tone: "success" },
        ],
      },
      {
        label: "Certificate Issuance",
        description:
          "The registry mints RECs against the verified generation, assigning each a unique serial that binds it to that specific output.",
        icon: FileCheck,
        logFilename: "cerulea_rec_engine.log",
        logLines: [
          { text: "[SYS] Executing REC issuance protocol...", time: "07:02:33", tone: "default" },
          { text: "[CMD] issueRec(SOLAR_44, count: 1200, serial: \"REC-44-0001\")", time: "07:02:33", tone: "primary" },
          { text: "[SYS] Serial range sealed, double-issuance blocked.", time: "07:02:33", tone: "default" },
          { text: "[OK] 1200 RECs minted to generator wallet.", time: "07:02:34", tone: "success" },
        ],
      },
      {
        label: "Market Trade",
        description:
          "A corporate buyer purchases RECs on the public market. The token transfer settles atomically with no registry lag.",
        icon: Coins,
        logFilename: "cerulea_rec_engine.log",
        logLines: [
          { text: "[SYS] Matching buy order from CORP_0x51...", time: "12:18:20", tone: "default" },
          { text: "[CMD] trade(serial: \"REC-44-0001\", qty: 400)", time: "12:18:20", tone: "primary" },
          { text: "[SYS] Token transfer settled in single block.", time: "12:18:20", tone: "default" },
          { text: "[OK] 400 RECs delivered to corporate wallet.", time: "12:18:21", tone: "success" },
        ],
      },
      {
        label: "RPO Redemption",
        description:
          "The corporate redeems RECs against its Renewable Purchase Obligation. The certificates are retired and the compliance filing is publicly auditable.",
        icon: ShieldCheck,
        logFilename: "cerulea_rec_engine.log",
        logLines: [
          { text: "[SYS] Detecting RPO redemption from CORP_0x51...", time: "18:44:55", tone: "default" },
          { text: "[CMD] redeem(qty: 400, obligation: \"RPO_FY26\")", time: "18:44:55", tone: "primary" },
          { text: "[SYS] Retiring certificates, updating public registry...", time: "18:44:56", tone: "default" },
          { text: "[OK] RPO compliance verifiable on-chain in minutes.", time: "18:44:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes REC markets into modular contracts. Each layer meters, serializes, trades, and retires certificates so a single megawatt hour can never be counted twice.",
    layers: [
      {
        title: "Generation Oracle",
        subtitle: "The Meter Bridge",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Meter Bridge",
          description:
            "The verification layer. It reads metered renewable output and authorizes issuance only against real megawatt hours, preventing certificates from being minted on unverified generation.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract GenerationOracle {\n  mapping(bytes32 => uint256) public verifiedMwh;\n\n  function anchorGen(bytes32 plant, uint256 mwh, bytes calldata sig) external {\n    require(verifyMeter(plant, sig), \"Bad meter sig\");\n    verifiedMwh[plant] += mwh;\n    emit GenerationVerified(plant, mwh);\n  }\n}",
        simAction: "Simulate Generation Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading meter feed for plant SOLAR_44...", tone: "default" },
          { text: "Validating meter signature...", tone: "default" },
          { text: "Recording 1200 verified MWh...", tone: "default" },
          { text: "Authorizing certificate issuance...", tone: "default" },
          { text: "[SUCCESS] Generation verified for RECs.", tone: "success" },
        ],
      },
      {
        title: "Certificate Registry",
        subtitle: "The Serial Ledger",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Serial Ledger",
          description:
            "Mints each REC with a unique serial bound to its generation batch. The serial range is sealed so the same output cannot back a second certificate.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "function issueRec(bytes32 plant, uint256 count, bytes32 serialRoot) external onlyRegistry {\n    require(verifiedMwh[plant] >= count, \"Over-issue\");\n    verifiedMwh[plant] -= count;\n    _mintSerials(plant, count, serialRoot);\n    emit RecIssued(plant, count, serialRoot);\n}",
        simAction: "Simulate Certificate Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking verified balance for SOLAR_44...", tone: "default" },
          { text: "Allocating unique serial range...", tone: "default" },
          { text: "Sealing serials against generation batch...", tone: "default" },
          { text: "Minting 1200 RECs to generator wallet...", tone: "default" },
          { text: "[SUCCESS] Certificates issued, uniquely serialized.", tone: "success" },
        ],
      },
      {
        title: "Trading Token",
        subtitle: "The Liquid Unit",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Liquid Unit",
          description:
            "Represents RECs as transferable tokens that settle atomically on the public chain, replacing slow bilateral transfers and giving the market continuous price discovery.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function trade(address buyer, uint256 serial, uint256 qty) external {\n    require(ownerOf[serial] == msg.sender, \"Not owner\");\n    _transfer(msg.sender, buyer, serial, qty);\n    emit RecTraded(serial, msg.sender, buyer, qty);\n}",
        simAction: "Simulate REC Trade",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Matching corporate buy order...", tone: "default" },
          { text: "Verifying seller holds serial REC-44-0001...", tone: "default" },
          { text: "Executing token transfer in single block...", tone: "default" },
          { text: "Recording trade on public history...", tone: "default" },
          { text: "[SUCCESS] 400 RECs settled to buyer.", tone: "success" },
        ],
      },
      {
        title: "Retirement Guard",
        subtitle: "The RPO Sink",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The RPO Sink",
          description:
            "Retires certificates against a stated obligation and writes the redemption to a publicly auditable registry, letting a regulator confirm RPO compliance without any reconciliation.",
          platformFunction: "Anti-Double Counting",
        },
        codeSnippet:
          "function redeem(uint256 serial, uint256 qty, bytes32 obligation) external {\n    require(!retired[serial], \"Already retired\");\n    _burn(msg.sender, serial, qty);\n    retired[serial] = true;\n    emit RpoRedeemed(msg.sender, serial, qty, obligation);\n}",
        simAction: "Simulate RPO Redemption",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Corporate redeeming 400 RECs for RPO_FY26...", tone: "default" },
          { text: "Confirming certificates not already retired...", tone: "default" },
          { text: "Executing permanent burn...", tone: "default" },
          { text: "Publishing redemption to public registry...", tone: "default" },
          { text: "[SUCCESS] RPO compliance auditable on-chain.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A verifiable REC registry is a horizontal capability. Here is how different actors in the renewable market put the shared ledger to work.",
    sectors: [
      { icon: Zap, title: "Renewable Generators", description: "Monetize clean output with certificates minted directly from metered generation, reaching buyers on a liquid market instead of waiting on registry issuance cycles.", assetTypes: ["Metered RECs", "Generation Batches", "Serial Ranges"] },
      { icon: Building2, title: "Obligated Corporates", description: "Buy and redeem RECs against Renewable Purchase Obligations with instant settlement and a publicly auditable filing, cutting weeks of exchange reconciliation.", assetTypes: ["RPO Redemptions", "Compliance Filings", "REC Holdings"] },
      { icon: Landmark, title: "Regulators & Exchanges", description: "Verify issuance and redemption directly on the public chain, monitoring the market for double-issuance without collecting registry data from each party.", assetTypes: ["Issuance Audits", "Redemption Registries", "Market History"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a generator's metering infrastructure or letting corporates trade natively from a wallet, Cerulea routes both into one public certificate ledger.",
    tracks: [
      {
        title: "Track A: Generator Metering Bridging",
        description:
          "For renewable plants on legacy SCADA and metering. Verified output is translated into signed on-chain issuance authorizations through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "SCADA / Metering", sublabel: "Plant Generation Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Output Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "REC Registry Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Market Trading",
        description:
          "For corporates and traders acting directly. A wallet signs each REC purchase and redemption and routes it straight to the public registry.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Corporate Wallet", sublabel: "Buyers & Traders", icon: Wallet, accent: false },
          { label: "Public Validators", sublabel: "Trade Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Certificate Retirement Ledger", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a REC registry with metered issuance, tradable tokens, and public RPO auditing from scratch requires specialised engineers and long market integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Issuance & Retirement Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects certificate market infrastructure benchmarks. Writing custom issuance and serialization logic, integrating metering feeds, and deploying a public trading and retirement layer for an average registry takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your issuance and retirement rules into pre-audited WebAssembly binaries and provisions the public certificate ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "peer-to-peer-solar-energy-trading-between-prosumers-on-microgrids",
    icon: Zap,
    eyebrow: "Microgrid Settlement Layer",
    headline1: "Trade sunshine locally.",
    headline2: "Skip the utility middleman.",
    heroDescription:
      "Deploy a local peer-to-peer energy trading dApp where prosumers sell excess rooftop solar to neighbors at better rates than feed-in tariffs, with settlement automated and transparent. Consumers access local renewable energy and no central utility sits between the meter and the payment.",
    heroCta: "Deploy Microgrid Markets",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn low feed-in tariffs into a fair local market that settles solar between neighbors automatically.",
    mechanics: [
      { title: "Local Price Discovery", description: "The Microgrid Settlement module lets prosumers and consumers clear energy at a local price above the feed-in tariff and below the utility import rate, so both sides win." },
      { title: "Metered Delivery Proof", description: "The Energy Meter Oracle confirms exactly how much energy flowed from a prosumer to a buyer, so payment settles on delivered kilowatt hours, not estimates." },
      { title: "Token Settlement", description: "The ERC-20 Token module carries value between wallets, clearing each trade in seconds without a utility invoice or bank transfer in the loop." },
      { title: "Automated Clearing", description: "Trades match and settle continuously across the microgrid, removing the manual reconciliation a utility would otherwise perform each billing cycle." },
      { title: "Prosumer Uplift", description: "Because sellers bypass the low feed-in tariff, a housing society's prosumers can earn several times what the utility would pay for the same surplus." },
      { title: "Transparent Ledger", description: "Every trade, price, and settlement is visible to residents, so there is no invoice dispute and the community can audit the market at any time." },
    ],
    lifecycleTitle: "The Microgrid Trading Lifecycle",
    lifecycleSubtitle:
      "Follow a single kilowatt hour of rooftop solar from generation through a neighbor's purchase to automated settlement.",
    lifecycleSteps: [
      {
        label: "Surplus Detection",
        description:
          "A prosumer's meter reports solar output beyond household use. The oracle anchors the exportable surplus available to the local market.",
        icon: Zap,
        logFilename: "cerulea_microgrid_engine.log",
        logLines: [
          { text: "[SYS] Reading prosumer meter PM_112...", time: "11:30:05", tone: "default" },
          { text: "[CMD] anchorSurplus(prosumer: \"PM_112\", kwh: 6.4)", time: "11:30:05", tone: "primary" },
          { text: "[AUTH] Verifying meter interval signature...", time: "11:30:06", tone: "secondary" },
          { text: "[OK] 6.4 kWh listed on local market.", time: "11:30:06", tone: "success" },
        ],
      },
      {
        label: "Order Matching",
        description:
          "A neighbor's demand is matched against available surplus at the local clearing price, above the feed-in tariff and below the import rate.",
        icon: Handshake,
        logFilename: "cerulea_microgrid_engine.log",
        logLines: [
          { text: "[SYS] Matching demand from consumer CM_208...", time: "11:31:12", tone: "default" },
          { text: "[CMD] match(seller: \"PM_112\", buyer: \"CM_208\", kwh: 6.4)", time: "11:31:12", tone: "primary" },
          { text: "[SYS] Clearing price set at 2.5x feed-in tariff.", time: "11:31:12", tone: "default" },
          { text: "[OK] Trade TRD_5521 matched on microgrid.", time: "11:31:13", tone: "success" },
        ],
      },
      {
        label: "Energy Delivery",
        description:
          "Energy flows across the microgrid and both meters confirm the transfer. The delivered kilowatt hours are anchored as the settlement basis.",
        icon: Radio,
        logFilename: "cerulea_microgrid_engine.log",
        logLines: [
          { text: "[SYS] Confirming delivery for TRD_5521...", time: "11:45:40", tone: "default" },
          { text: "[CMD] confirmFlow(TRD_5521, delivered: 6.4)", time: "11:45:40", tone: "primary" },
          { text: "[SYS] Both meters agree on delivered kWh.", time: "11:45:41", tone: "default" },
          { text: "[OK] Delivery verified, ready to settle.", time: "11:45:41", tone: "success" },
        ],
      },
      {
        label: "Token Settlement",
        description:
          "The token payment moves from buyer to seller automatically. The prosumer earns above the feed-in tariff with no utility invoice.",
        icon: Coins,
        logFilename: "cerulea_microgrid_engine.log",
        logLines: [
          { text: "[SYS] Settling TRD_5521 between wallets...", time: "11:45:52", tone: "default" },
          { text: "[CMD] settle(buyer: \"CM_208\", seller: \"PM_112\")", time: "11:45:52", tone: "primary" },
          { text: "[SYS] Token transfer cleared in single block.", time: "11:45:52", tone: "default" },
          { text: "[OK] Prosumer paid 2.5x tariff. No dispute.", time: "11:45:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes peer-to-peer energy trading into modular contracts. Each layer lists surplus, matches orders, confirms delivery, and settles value without a central utility.",
    layers: [
      {
        title: "Market Book",
        subtitle: "The Local Exchange",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Local Exchange",
          description:
            "The matching layer. It lists prosumer surplus and consumer demand and clears them at a fair local price, giving the microgrid an order book instead of a one-way feed-in tariff.",
          platformFunction: "Market & Matching",
        },
        codeSnippet:
          "contract MicrogridBook {\n  struct Order {\n    address party;\n    uint256 kwh;\n    uint256 price;\n    bool isSell;\n  }\n\n  Order[] public book;\n\n  function place(uint256 kwh, uint256 price, bool isSell) external {\n    book.push(Order(msg.sender, kwh, price, isSell));\n  }\n}",
        simAction: "Simulate Order Placement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Listing 6.4 kWh surplus from PM_112...", tone: "default" },
          { text: "Reading local demand from CM_208...", tone: "default" },
          { text: "Setting clearing price above feed-in tariff...", tone: "default" },
          { text: "Writing matched order to book...", tone: "default" },
          { text: "[SUCCESS] Local trade matched on-chain.", tone: "success" },
        ],
      },
      {
        title: "Meter Oracle",
        subtitle: "The Flow Witness",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Flow Witness",
          description:
            "Confirms the actual energy that moved between two premises using both meters, so settlement rests on delivered kilowatt hours rather than a scheduled amount.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function confirmFlow(bytes32 tradeId, uint256 delivered, bytes calldata sig) external {\n    require(verifyMeter(tradeId, sig), \"Bad meter sig\");\n    trades[tradeId].delivered = delivered;\n    emit FlowConfirmed(tradeId, delivered);\n}",
        simAction: "Simulate Flow Confirm",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading export meter at PM_112...", tone: "default" },
          { text: "Reading import meter at CM_208...", tone: "default" },
          { text: "Reconciling both readings at 6.4 kWh...", tone: "default" },
          { text: "Anchoring delivered energy...", tone: "default" },
          { text: "[SUCCESS] Delivery witnessed by both meters.", tone: "success" },
        ],
      },
      {
        title: "Settlement Token",
        subtitle: "The Instant Payment",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Payment",
          description:
            "Moves value from buyer to seller the moment delivery is confirmed, clearing each trade in a single block so prosumers are paid without a utility invoice cycle.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(bytes32 tradeId) external {\n    Trade memory t = trades[tradeId];\n    require(t.delivered > 0, \"No delivery\");\n    uint256 amount = t.delivered * t.price;\n    _transfer(t.buyer, t.seller, amount);\n    emit TradeSettled(tradeId, amount);\n}",
        simAction: "Simulate Token Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing amount for 6.4 kWh at local price...", tone: "default" },
          { text: "Debiting buyer wallet CM_208...", tone: "default" },
          { text: "Crediting seller wallet PM_112...", tone: "default" },
          { text: "Recording settlement on shared ledger...", tone: "default" },
          { text: "[SUCCESS] Trade settled, prosumer paid instantly.", tone: "success" },
        ],
      },
      {
        title: "Community Ledger",
        subtitle: "The Transparent Record",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transparent Record",
          description:
            "Exposes every trade, price, and settlement to residents, so the microgrid market is fully auditable and no invoice dispute can arise between neighbors or with a utility.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function tradeHistory(address member) external view returns (Trade[] memory) {\n    return ledger[member];\n}",
        simAction: "Simulate History Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resident opening microgrid market view...", tone: "default" },
          { text: "Fetching trade history for household...", tone: "default" },
          { text: "Listing prices and settled amounts...", tone: "default" },
          { text: "Confirming totals against wallet balance...", tone: "default" },
          { text: "[SUCCESS] Transparent market record returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Peer-to-peer energy trading is a horizontal capability. Here is how different microgrid communities put the shared market to work.",
    sectors: [
      { icon: Home, title: "Housing Societies", description: "Let residents trade rooftop solar among themselves at rates well above the feed-in tariff, keeping renewable value inside the community with transparent, automated settlement.", assetTypes: ["Surplus Listings", "Local Trades", "Resident Wallets"] },
      { icon: Building2, title: "Commercial Campuses", description: "Balance solar across tenants and shared loads on a private microgrid, settling internal energy transfers without routing every kilowatt hour through the utility.", assetTypes: ["Tenant Meters", "Campus Trades", "Internal Settlements"] },
      { icon: Globe, title: "Rural Microgrids", description: "Give off-grid and weak-grid villages a fair local market for distributed solar, so generation is monetized locally even where utility infrastructure is thin.", assetTypes: ["Village Grids", "Distributed Solar", "Community Ledgers"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging smart meter gateways or letting prosumer apps trade natively from a wallet, Cerulea routes both into one microgrid market.",
    tracks: [
      {
        title: "Track A: Smart Meter Gateway Bridging",
        description:
          "For microgrids with metering gateways. Interval data is translated into signed on-chain surplus and delivery records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Metering Gateway", sublabel: "Microgrid Infrastructure", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Microgrid Market Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Prosumer Trading",
        description:
          "For prosumers on a mobile dApp. A wallet signs each listing and trade and routes it directly to the microgrid market.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Prosumer dApp / Wallet", sublabel: "Resident Devices", icon: Fingerprint, accent: false },
          { label: "Microgrid Validators", sublabel: "Trade Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Local Energy Market", icon: Zap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a microgrid market with local price discovery, metered delivery proof, and instant token settlement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Market & Settlement Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects distributed energy platform benchmarks. Writing custom matching logic, integrating meter feeds, and deploying token settlement for an average microgrid takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your market and settlement rules into pre-audited WebAssembly binaries and provisions the microgrid ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "carbon-credit-issuance-for-verified-renewable-generation",
    icon: Leaf,
    eyebrow: "Dual Registry Engine",
    headline1: "Issue credits with proof.",
    headline2: "End the double count.",
    heroDescription:
      "Deliver a coordinated REC and carbon credit registry so a single megawatt hour cannot be counted in both markets, giving corporate buyers full confidence in credit integrity. A carbon auditor queries the chain and confirms zero double-counting in a single day.",
    heroCta: "Deploy Credit Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Bind two fragmented markets to one ledger so the same clean megawatt hour is never sold twice.",
    mechanics: [
      { title: "Shared Generation Basis", description: "The Energy Meter Oracle feeds one verified generation figure into both registries, so RECs and carbon credits draw from the same metered source of truth." },
      { title: "Coordinated Issuance", description: "The Carbon Credits MRV and Registry and Renewable Energy Certificates Registry modules cross-check each other, blocking a carbon credit where the same output already backs a REC." },
      { title: "MRV-Backed Credits", description: "Each carbon credit carries a measurement, reporting, and verification record tied to real generation, giving auditors an evidence trail rather than a claim." },
      { title: "Mutual Exclusion Lock", description: "Retiring a REC and issuing a carbon credit for the same megawatt hour are made mutually exclusive at the protocol level, structurally preventing double-counting." },
      { title: "Auditor Query Window", description: "A corporate's carbon auditor queries the chain directly to confirm no overlap between REC retirement and credit issuance, clearing findings in a day." },
      { title: "Buyer Integrity Proof", description: "Corporate buyers trace each credit to its generation batch and its exclusivity lock, so credit integrity is provable rather than asserted." },
    ],
    lifecycleTitle: "The Coordinated Credit Lifecycle",
    lifecycleSubtitle:
      "Follow a single megawatt hour as it is metered, allocated to one market, issued as a credit, and cleared by an auditor.",
    lifecycleSteps: [
      {
        label: "Generation Verification",
        description:
          "A renewable plant's output is metered and anchored once. This single figure becomes the shared basis for both registries.",
        icon: Zap,
        logFilename: "cerulea_credit_engine.log",
        logLines: [
          { text: "[SYS] Anchoring generation for WIND_21...", time: "07:15:44", tone: "default" },
          { text: "[CMD] anchorGen(plant: \"WIND_21\", mwh: 900)", time: "07:15:44", tone: "primary" },
          { text: "[AUTH] Verifying meter signature...", time: "07:15:45", tone: "secondary" },
          { text: "[OK] 900 MWh set as shared basis.", time: "07:15:45", tone: "success" },
        ],
      },
      {
        label: "Market Allocation",
        description:
          "Each megawatt hour is allocated to either the REC market or the carbon market, never both. The exclusivity lock is set at allocation.",
        icon: Scale,
        logFilename: "cerulea_credit_engine.log",
        logLines: [
          { text: "[SYS] Allocating WIND_21 output across markets...", time: "07:20:02", tone: "default" },
          { text: "[CMD] allocate(mwh: 900, carbon: 500, rec: 400)", time: "07:20:02", tone: "primary" },
          { text: "[SYS] Setting mutual exclusion lock per MWh.", time: "07:20:02", tone: "default" },
          { text: "[OK] Allocation sealed, overlap impossible.", time: "07:20:03", tone: "success" },
        ],
      },
      {
        label: "Credit Issuance",
        description:
          "Carbon credits are minted against the carbon-allocated share with an MRV record. RECs issue separately against their own share.",
        icon: Leaf,
        logFilename: "cerulea_credit_engine.log",
        logLines: [
          { text: "[SYS] Minting carbon credits for WIND_21...", time: "07:25:31", tone: "default" },
          { text: "[CMD] issueCarbon(share: 500, mrv: \"MRV-21-09\")", time: "07:25:31", tone: "primary" },
          { text: "[AUTH] Binding MRV record to credit batch...", time: "07:25:32", tone: "secondary" },
          { text: "[OK] 500 credits issued, REC share untouched.", time: "07:25:32", tone: "success" },
        ],
      },
      {
        label: "Auditor Clearance",
        description:
          "A corporate auditor queries the chain to confirm no megawatt hour backed both a REC and a credit. The audit finding clears the same day.",
        icon: FileCheck,
        logFilename: "cerulea_credit_engine.log",
        logLines: [
          { text: "[SYS] Auditor scanning WIND_21 allocations...", time: "15:10:18", tone: "default" },
          { text: "[CMD] verifyNoOverlap(plant: \"WIND_21\")", time: "15:10:18", tone: "primary" },
          { text: "[SYS] Checking exclusion locks across all MWh...", time: "15:10:18", tone: "default" },
          { text: "[OK] Zero double-counting. Audit cleared in 1 day.", time: "15:10:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes coordinated credit issuance into modular contracts. Each layer verifies generation, allocates it exclusively, issues credits, and exposes the record to auditors.",
    layers: [
      {
        title: "Generation Oracle",
        subtitle: "The Shared Basis",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Basis",
          description:
            "Anchors one verified generation figure that both markets draw from. By sourcing RECs and carbon credits from the same metered output, it removes the gap where double-counting begins.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract SharedBasis {\n  mapping(bytes32 => uint256) public verifiedMwh;\n\n  function anchorGen(bytes32 plant, uint256 mwh, bytes calldata sig) external {\n    require(verifyMeter(plant, sig), \"Bad meter sig\");\n    verifiedMwh[plant] += mwh;\n    emit BasisAnchored(plant, mwh);\n  }\n}",
        simAction: "Simulate Basis Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading meter feed for WIND_21...", tone: "default" },
          { text: "Validating meter signature...", tone: "default" },
          { text: "Recording 900 MWh shared basis...", tone: "default" },
          { text: "Locking basis for allocation...", tone: "default" },
          { text: "[SUCCESS] Generation anchored for both markets.", tone: "success" },
        ],
      },
      {
        title: "Exclusivity Allocator",
        subtitle: "The Mutual Lock",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Mutual Lock",
          description:
            "Assigns each megawatt hour to exactly one market and locks it there. This exclusivity is the structural guarantee that a REC and a carbon credit can never share the same output.",
          platformFunction: "Anti-Double Counting",
        },
        codeSnippet:
          "function allocate(bytes32 plant, uint256 carbon, uint256 rec) external onlyRegistry {\n    require(carbon + rec <= verifiedMwh[plant], \"Over-allocate\");\n    carbonShare[plant] += carbon;\n    recShare[plant] += rec;\n    verifiedMwh[plant] -= (carbon + rec);\n    emit Allocated(plant, carbon, rec);\n}",
        simAction: "Simulate Market Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Splitting 900 MWh between markets...", tone: "default" },
          { text: "Assigning 500 MWh to carbon share...", tone: "default" },
          { text: "Assigning 400 MWh to REC share...", tone: "default" },
          { text: "Setting mutual exclusion locks...", tone: "default" },
          { text: "[SUCCESS] Allocation sealed, overlap blocked.", tone: "success" },
        ],
      },
      {
        title: "Carbon Registry",
        subtitle: "The MRV Mint",
        icon: Leaf,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The MRV Mint",
          description:
            "Mints carbon credits against the carbon-allocated share and binds each to its measurement, reporting, and verification record, giving buyers an evidence trail back to real generation.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "function issueCarbon(bytes32 plant, uint256 share, bytes32 mrv) external onlyRegistry {\n    require(carbonShare[plant] >= share, \"Over-issue\");\n    carbonShare[plant] -= share;\n    _mintCredits(plant, share, mrv);\n    emit CarbonIssued(plant, share, mrv);\n}",
        simAction: "Simulate Carbon Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading carbon share for WIND_21...", tone: "default" },
          { text: "Binding MRV record MRV-21-09...", tone: "default" },
          { text: "Minting 500 carbon credits...", tone: "default" },
          { text: "Leaving REC share untouched...", tone: "default" },
          { text: "[SUCCESS] Credits issued with MRV evidence.", tone: "success" },
        ],
      },
      {
        title: "Audit Window",
        subtitle: "The Integrity View",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Integrity View",
          description:
            "Lets a corporate auditor scan every allocation and confirm no megawatt hour backed both a REC and a credit, turning a lengthy investigation into a same-day on-chain check.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyNoOverlap(bytes32 plant) external view returns (bool) {\n    return carbonShare[plant] + recShare[plant] + issued[plant] <= totalGen[plant];\n}",
        simAction: "Simulate Overlap Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor loading WIND_21 allocations...", tone: "default" },
          { text: "Summing carbon, REC, and issued shares...", tone: "default" },
          { text: "Comparing against total generation...", tone: "default" },
          { text: "Confirming exclusion locks intact...", tone: "default" },
          { text: "[SUCCESS] Zero double-counting verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Coordinated credit issuance is a horizontal capability. Here is how different actors in the renewable and carbon markets put the shared ledger to work.",
    sectors: [
      { icon: Zap, title: "Renewable Developers", description: "Monetize generation in both the REC and carbon markets from one metered basis, choosing the allocation per megawatt hour with the assurance no output is sold twice.", assetTypes: ["Generation Basis", "Market Allocations", "Credit Batches"] },
      { icon: Building2, title: "Corporate Buyers", description: "Purchase carbon credits with a provable evidence trail and exclusivity lock, so ESG claims survive audit and reputational scrutiny.", assetTypes: ["Verified Credits", "MRV Evidence", "Integrity Proofs"] },
      { icon: Landmark, title: "Auditors & Standards", description: "Confirm the absence of double-counting between markets directly on-chain, clearing findings in a day instead of reconciling two fragmented registries.", assetTypes: ["Overlap Audits", "Exclusivity Records", "Verification Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a developer's metering systems or letting standards bodies verify natively, Cerulea routes both into one coordinated credit ledger.",
    tracks: [
      {
        title: "Track A: Developer Metering Bridging",
        description:
          "For renewable developers on legacy metering and MRV tools. Verified output is translated into signed on-chain allocations through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Metering / MRV Tools", sublabel: "Developer Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Output Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Dual Registry Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Standards Verification",
        description:
          "For standards bodies and auditors acting directly. A signed node queries allocations and confirms exclusivity straight from the public ledger.",
        connectorLabels: ["AUDITOR SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Auditor Node", sublabel: "Standards & Verifiers", icon: Fingerprint, accent: false },
          { label: "Public Validators", sublabel: "Integrity Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Exclusivity Ledger", icon: Leaf, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a dual REC and carbon registry with a shared basis, exclusivity locks, and auditor tooling from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Allocation & Issuance Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects environmental market integration benchmarks. Reconciling two registries, building custom exclusivity logic, and deploying auditor tooling for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your allocation and issuance rules into pre-audited WebAssembly binaries and provisions the coordinated registry instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "power-purchase-agreement-ppa-settlement-automation",
    icon: Handshake,
    eyebrow: "PPA Settlement Layer",
    headline1: "Meter the megawatts.",
    headline2: "Settle without invoices.",
    heroDescription:
      "Stand up an automated settlement system where energy delivered under a long-term power purchase agreement is metered and paid for without manual invoicing. Verified meter readings feed directly into the settlement calculation, so payment at the agreed rate happens automatically each billing cycle.",
    heroCta: "Deploy PPA Automation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace monthly manual reconciliation with a metered, self-settling power purchase agreement.",
    mechanics: [
      { title: "Metered Delivery Feed", description: "The Energy Meter Oracle streams verified delivery readings into the contract, so settlement is based on actual energy supplied rather than a reconciled estimate." },
      { title: "Rate-Bound Calculation", description: "The agreed tariff and escalation terms are encoded once, and each cycle's payment is computed deterministically from the metered volume." },
      { title: "Conditional Payment Release", description: "Escrow and Conditional Settlement releases the buyer's payment automatically once the cycle's delivery is verified, removing the invoicing and approval delay." },
      { title: "Provenance-Anchored Readings", description: "The Provenance Notary binds each reading to the delivery point and interval, so a disputed figure is checked against a sealed source." },
      { title: "Cycle Reconciliation", description: "Each billing cycle closes on-chain with a matched record of energy delivered and amount paid, eliminating the monthly spreadsheet reconciliation." },
      { title: "Dispute-Resistant Trail", description: "Because both generator and buyer settle against the same anchored readings, contested cycles resolve against a signed record rather than dueling invoices." },
    ],
    lifecycleTitle: "The PPA Settlement Lifecycle",
    lifecycleSubtitle:
      "Follow a single billing cycle from metered delivery through automatic calculation to settled payment.",
    lifecycleSteps: [
      {
        label: "Delivery Metering",
        description:
          "The generator's meter reports energy delivered under the agreement. The oracle anchors verified readings across the billing cycle.",
        icon: Zap,
        logFilename: "cerulea_ppa_engine.log",
        logLines: [
          { text: "[SYS] Streaming delivery meter for PPA_88...", time: "23:59:10", tone: "default" },
          { text: "[CMD] anchorDelivery(ppa: \"PPA_88\", mwh: 21400)", time: "23:59:10", tone: "primary" },
          { text: "[AUTH] Verifying meter signature and interval...", time: "23:59:11", tone: "secondary" },
          { text: "[OK] Cycle delivery sealed at 21400 MWh.", time: "23:59:11", tone: "success" },
        ],
      },
      {
        label: "Payment Calculation",
        description:
          "The contract multiplies verified delivery by the agreed rate and escalation. The payable amount is computed with no manual invoice.",
        icon: Scale,
        logFilename: "cerulea_ppa_engine.log",
        logLines: [
          { text: "[SYS] Computing settlement for PPA_88...", time: "00:01:05", tone: "default" },
          { text: "[CMD] calcPayment(mwh: 21400, rate: \"AGREED_T3\")", time: "00:01:05", tone: "primary" },
          { text: "[SYS] Applying escalation factor for FY26...", time: "00:01:05", tone: "secondary" },
          { text: "[OK] Cycle payable computed from metered volume.", time: "00:01:06", tone: "success" },
        ],
      },
      {
        label: "Escrow Release",
        description:
          "The buyer's escrowed funds are released to the generator automatically once delivery is verified, closing the cycle without approval delay.",
        icon: Wallet,
        logFilename: "cerulea_ppa_engine.log",
        logLines: [
          { text: "[SYS] Releasing escrow for PPA_88 cycle...", time: "00:02:20", tone: "default" },
          { text: "[CMD] release(generator: \"0xC12\", amount: payable)", time: "00:02:20", tone: "primary" },
          { text: "[AUTH] Confirming verified delivery precondition...", time: "00:02:21", tone: "secondary" },
          { text: "[OK] Payment settled, no invoice raised.", time: "00:02:21", tone: "success" },
        ],
      },
      {
        label: "Cycle Close",
        description:
          "The billing cycle is closed on-chain with a matched delivery and payment record, replacing the monthly reconciliation entirely.",
        icon: FileCheck,
        logFilename: "cerulea_ppa_engine.log",
        logLines: [
          { text: "[SYS] Closing billing cycle for PPA_88...", time: "00:03:44", tone: "default" },
          { text: "[CMD] closeCycle(PPA_88, period: \"2026-09\")", time: "00:03:44", tone: "primary" },
          { text: "[SYS] Matching delivery and payment records...", time: "00:03:44", tone: "default" },
          { text: "[OK] Cycle closed. Reconciliation eliminated.", time: "00:03:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes power purchase settlement into modular contracts. Each layer meters delivery, calculates payment, releases funds, and closes the cycle without manual invoicing.",
    layers: [
      {
        title: "Delivery Oracle",
        subtitle: "The Metered Feed",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Metered Feed",
          description:
            "The ingestion layer. It anchors verified energy delivered under the agreement across each interval, giving settlement a trustworthy volume rather than a reconciled estimate.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract DeliveryOracle {\n  mapping(bytes32 => uint256) public cycleMwh;\n\n  function anchorDelivery(bytes32 ppa, uint256 mwh, bytes calldata sig) external {\n    require(verifyMeter(ppa, sig), \"Bad meter sig\");\n    cycleMwh[ppa] += mwh;\n    emit DeliveryAnchored(ppa, mwh);\n  }\n}",
        simAction: "Simulate Delivery Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading delivery meter for PPA_88...", tone: "default" },
          { text: "Validating meter signature...", tone: "default" },
          { text: "Accumulating cycle delivery to 21400 MWh...", tone: "default" },
          { text: "Sealing cycle volume...", tone: "default" },
          { text: "[SUCCESS] Delivery anchored for settlement.", tone: "success" },
        ],
      },
      {
        title: "Tariff Engine",
        subtitle: "The Rate Calculator",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rate Calculator",
          description:
            "Holds the agreed tariff and escalation terms and computes each cycle's payment deterministically from metered delivery, so both sides agree on the amount before any money moves.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function calcPayment(bytes32 ppa) public view returns (uint256) {\n    uint256 vol = cycleMwh[ppa];\n    Tariff memory t = tariffs[ppa];\n    return vol * t.rate * t.escalation / 1e4;\n}",
        simAction: "Simulate Payment Calc",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading agreed tariff T3 for PPA_88...", tone: "default" },
          { text: "Reading metered volume 21400 MWh...", tone: "default" },
          { text: "Applying FY26 escalation factor...", tone: "default" },
          { text: "Computing cycle payable...", tone: "default" },
          { text: "[SUCCESS] Payment calculated from meter data.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Conditional Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Vault",
          description:
            "Holds the buyer's funds and releases the calculated amount to the generator the moment delivery is verified, collapsing the invoice, approval, and payment steps into one event.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function release(bytes32 ppa) external {\n    require(cycleMwh[ppa] > 0, \"No delivery\");\n    uint256 amount = calcPayment(ppa);\n    cycleMwh[ppa] = 0;\n    payable(generator[ppa]).transfer(amount);\n    emit CycleSettled(ppa, amount);\n}",
        simAction: "Simulate Escrow Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming verified delivery for PPA_88...", tone: "default" },
          { text: "Fetching calculated payable...", tone: "default" },
          { text: "Releasing funds from vault...", tone: "default" },
          { text: "Crediting generator wallet...", tone: "default" },
          { text: "[SUCCESS] Cycle settled without an invoice.", tone: "success" },
        ],
      },
      {
        title: "Cycle Ledger",
        subtitle: "The Matched Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Matched Record",
          description:
            "Closes each billing cycle with a paired delivery and payment entry, giving both parties and any auditor a single reconciled record in place of a monthly spreadsheet exercise.",
          platformFunction: "Records & Reconciliation",
        },
        codeSnippet:
          "function closeCycle(bytes32 ppa, bytes32 period) external {\n    cycles[ppa].push(Cycle(period, settledMwh[ppa], settledAmount[ppa]));\n    emit CycleClosed(ppa, period);\n}",
        simAction: "Simulate Cycle Close",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Pairing delivery and payment for 2026-09...", tone: "default" },
          { text: "Appending cycle to PPA_88 ledger...", tone: "default" },
          { text: "Sealing matched record...", tone: "default" },
          { text: "Confirming totals reconcile...", tone: "default" },
          { text: "[SUCCESS] Cycle closed, reconciliation done.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated PPA settlement is a horizontal capability. Here is how different actors under long-term agreements put the shared ledger to work.",
    sectors: [
      { icon: Zap, title: "Renewable Generators", description: "Get paid automatically each cycle on verified delivery, improving cash flow certainty and removing the receivables friction of manual invoicing and buyer approvals.", assetTypes: ["Delivery Readings", "Cycle Settlements", "Tariff Terms"] },
      { icon: Building2, title: "Corporate & Utility Buyers", description: "Pay precisely for metered energy at the agreed rate with a matched record per cycle, ending disputes over reconciled volumes and reducing settlement overhead.", assetTypes: ["Verified Volumes", "Payment Records", "Cycle Closes"] },
      { icon: Landmark, title: "Regulators & Financiers", description: "Audit long-term agreement performance from a clean on-chain history of delivery and payment, supporting compliance review and project financing due diligence.", assetTypes: ["Settlement Audits", "Performance History", "Financing Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a generator's SCADA and billing systems or reading directly from revenue meters, Cerulea routes both into one settlement ledger.",
    tracks: [
      {
        title: "Track A: Billing System Bridging",
        description:
          "For generators and buyers on legacy billing platforms. Metered delivery is translated into signed on-chain settlement records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "SCADA / Billing", sublabel: "Generator Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "PPA Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Revenue Metering",
        description:
          "For revenue meters with edge connectivity. Each reading is signed by a device key and routed straight to the settlement contract.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Revenue Meter / Edge", sublabel: "Delivery Point Hardware", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Reading Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Metered Settlement Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building PPA settlement with metered feeds, rate logic, and conditional escrow from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Tariff & Settlement Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects energy settlement integration benchmarks. Wiring metering and billing systems, building custom tariff logic, and shipping conditional escrow for an average agreement takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your tariff and settlement rules into pre-audited WebAssembly binaries and provisions the settlement ledger and escrow instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "green-hydrogen-production-certification-and-offtake-agreement-tracking",
    icon: FlaskConical,
    eyebrow: "Green Hydrogen Certification Layer",
    headline1: "Prove it is green.",
    headline2: "Settle on certified volume.",
    heroDescription:
      "Deploy a certification system that proves hydrogen was produced using renewable energy and settles offtake deliveries against certified volumes. The renewable source data behind production is anchored as a verified certification, giving premium offtakers real assurance and producers a way to prove their method.",
    heroCta: "Deploy Hydrogen Certification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Bind renewable source data to each hydrogen batch and settle premium offtake on certified green volume.",
    mechanics: [
      { title: "Renewable Source Binding", description: "The Carbon Credits MRV and Registry module anchors the renewable electricity used in electrolysis to each hydrogen batch, so the green claim rests on metered source data." },
      { title: "Production Certification", description: "The Provenance Notary seals a certificate for each batch that ties production method and energy source together, making the green attribute verifiable downstream." },
      { title: "Certified Volume Settlement", description: "Escrow and Conditional Settlement pays out offtake deliveries only against certified green hydrogen volumes, so the premium is earned on proven output." },
      { title: "Offtake Agreement Tracking", description: "Each delivery under an offtake agreement is matched to certified volume, giving both producer and offtaker a clear record of what was supplied against contract." },
      { title: "Tamper-Evident Certificates", description: "Certificates are anchored by digest, so any alteration to a production or source record breaks its hash and is immediately detectable." },
      { title: "Premium Assurance", description: "Industrial buyers paying a premium query the batch certificate directly, confirming renewable production before accepting delivery." },
    ],
    lifecycleTitle: "The Green Hydrogen Lifecycle",
    lifecycleSubtitle:
      "Follow a single hydrogen batch from renewable-powered production through certification to certified offtake settlement.",
    lifecycleSteps: [
      {
        label: "Source Verification",
        description:
          "The renewable electricity powering electrolysis is metered and anchored. This source data becomes the basis for the batch's green certification.",
        icon: Zap,
        logFilename: "cerulea_hydrogen_engine.log",
        logLines: [
          { text: "[SYS] Anchoring renewable source for BATCH_H2_09...", time: "08:12:33", tone: "default" },
          { text: "[CMD] anchorSource(batch: \"H2_09\", mwh: 320, src: \"SOLAR_44\")", time: "08:12:33", tone: "primary" },
          { text: "[AUTH] Verifying renewable meter signature...", time: "08:12:34", tone: "secondary" },
          { text: "[OK] Green source sealed for batch H2_09.", time: "08:12:34", tone: "success" },
        ],
      },
      {
        label: "Batch Certification",
        description:
          "A certificate binding production method to renewable source is issued for the batch and anchored by its digest.",
        icon: FlaskConical,
        logFilename: "cerulea_hydrogen_engine.log",
        logLines: [
          { text: "[SYS] Issuing green certificate for H2_09...", time: "08:40:11", tone: "default" },
          { text: "[CMD] certify(batch: \"H2_09\", method: \"PEM_ELECTROLYSIS\")", time: "08:40:11", tone: "primary" },
          { text: "[SYS] Sealing certificate digest to batch...", time: "08:40:11", tone: "secondary" },
          { text: "[OK] Certificate CERT_H2_09 anchored.", time: "08:40:12", tone: "success" },
        ],
      },
      {
        label: "Offtake Delivery",
        description:
          "Certified hydrogen is delivered under an offtake agreement. The delivered volume is matched against the certified batch.",
        icon: Truck,
        logFilename: "cerulea_hydrogen_engine.log",
        logLines: [
          { text: "[SYS] Recording offtake delivery for OFT_51...", time: "14:22:05", tone: "default" },
          { text: "[CMD] deliver(offtake: \"OFT_51\", batch: \"H2_09\", kg: 4800)", time: "14:22:05", tone: "primary" },
          { text: "[SYS] Matching delivery to certified volume...", time: "14:22:05", tone: "default" },
          { text: "[OK] 4800 kg certified green delivered.", time: "14:22:06", tone: "success" },
        ],
      },
      {
        label: "Certified Settlement",
        description:
          "Escrow releases payment against the certified volume delivered. The premium is settled only for proven green hydrogen.",
        icon: Wallet,
        logFilename: "cerulea_hydrogen_engine.log",
        logLines: [
          { text: "[SYS] Settling offtake OFT_51...", time: "14:23:40", tone: "default" },
          { text: "[CMD] settle(offtake: \"OFT_51\", certified: 4800)", time: "14:23:40", tone: "primary" },
          { text: "[AUTH] Confirming certificate precondition...", time: "14:23:41", tone: "secondary" },
          { text: "[OK] Premium paid on certified green volume.", time: "14:23:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes green hydrogen certification into modular contracts. Each layer verifies the renewable source, certifies the batch, tracks offtake, and settles on certified volume.",
    layers: [
      {
        title: "Source Registry",
        subtitle: "The Green Basis",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Green Basis",
          description:
            "Anchors the metered renewable electricity used to produce each batch. It is the foundation of the green claim, tying hydrogen to verified clean energy rather than an assertion.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract SourceRegistry {\n  struct Source {\n    bytes32 renewablePlant;\n    uint256 mwh;\n    uint256 anchoredAt;\n  }\n\n  mapping(bytes32 => Source) public sources;\n\n  function anchorSource(bytes32 batch, bytes32 plant, uint256 mwh) external onlyProducer {\n    sources[batch] = Source(plant, mwh, block.timestamp);\n  }\n}",
        simAction: "Simulate Source Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading renewable meter for SOLAR_44...", tone: "default" },
          { text: "Validating meter signature...", tone: "default" },
          { text: "Binding 320 MWh to batch H2_09...", tone: "default" },
          { text: "Writing source record to storage...", tone: "default" },
          { text: "[SUCCESS] Green source anchored for batch.", tone: "success" },
        ],
      },
      {
        title: "Certificate Notary",
        subtitle: "The Method Seal",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Method Seal",
          description:
            "Issues a certificate binding production method and renewable source, anchored by digest. Any tampering with the batch record breaks its hash and is detectable by any downstream buyer.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function certify(bytes32 batch, bytes32 methodHash) external onlyProducer returns (bytes32) {\n    require(sources[batch].anchoredAt != 0, \"No source\");\n    bytes32 certId = keccak256(abi.encode(batch, methodHash));\n    certificates[batch] = Cert(certId, methodHash, block.timestamp);\n    return certId;\n}",
        simAction: "Simulate Batch Certify",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading production method for H2_09...", tone: "default" },
          { text: "Computing certificate digest...", tone: "default" },
          { text: "Binding method to renewable source...", tone: "default" },
          { text: "Sealing certificate to batch...", tone: "default" },
          { text: "[SUCCESS] Green certificate anchored.", tone: "success" },
        ],
      },
      {
        title: "Offtake Tracker",
        subtitle: "The Volume Matcher",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Volume Matcher",
          description:
            "Records each delivery under an offtake agreement and matches it to certified batch volume, giving producer and offtaker one clear ledger of certified green supply against contract.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function deliver(bytes32 offtake, bytes32 batch, uint256 kg) external {\n    require(certificates[batch].issuedAt != 0, \"Not certified\");\n    require(kg <= remaining[batch], \"Over-deliver\");\n    remaining[batch] -= kg;\n    deliveries[offtake].push(Delivery(batch, kg, block.timestamp));\n}",
        simAction: "Simulate Offtake Delivery",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming certificate for batch H2_09...", tone: "default" },
          { text: "Checking remaining certified volume...", tone: "default" },
          { text: "Recording 4800 kg delivery to OFT_51...", tone: "default" },
          { text: "Matching delivery to agreement...", tone: "default" },
          { text: "[SUCCESS] Certified volume delivered.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Certified Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Certified Vault",
          description:
            "Releases the offtaker's premium payment only against certified volume delivered, ensuring producers are paid the green premium strictly for hydrogen with a verified renewable source.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function settle(bytes32 offtake, uint256 certifiedKg) external {\n    require(certifiedKg <= deliveredKg[offtake], \"Over-settle\");\n    uint256 amount = certifiedKg * premiumRate[offtake];\n    payable(producer[offtake]).transfer(amount);\n    emit OfftakeSettled(offtake, certifiedKg, amount);\n}",
        simAction: "Simulate Certified Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming certified delivery for OFT_51...", tone: "default" },
          { text: "Computing premium on 4800 kg...", tone: "default" },
          { text: "Releasing funds from vault...", tone: "default" },
          { text: "Crediting producer wallet...", tone: "default" },
          { text: "[SUCCESS] Premium settled on certified volume.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Green hydrogen certification is a horizontal capability. Here is how different actors in the hydrogen economy put the shared ledger to work.",
    sectors: [
      { icon: FlaskConical, title: "Hydrogen Producers", description: "Prove renewable production per batch and settle offtake on certified volume, earning the green premium on verifiable output rather than unbacked claims.", assetTypes: ["Production Batches", "Green Certificates", "Source Records"] },
      { icon: Factory, title: "Industrial Offtakers", description: "Confirm the hydrogen received is genuinely green before accepting delivery, protecting decarbonization targets and the premium paid with a queryable certificate.", assetTypes: ["Offtake Deliveries", "Certificate Checks", "Contract Volumes"] },
      { icon: Landmark, title: "Certifiers & Regulators", description: "Audit green hydrogen claims against anchored source and method data, supporting standards and subsidy schemes without collecting records from each producer.", assetTypes: ["Certification Audits", "Source Attestations", "Compliance Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a plant's production and metering systems or letting offtakers verify natively, Cerulea routes both into one certification ledger.",
    tracks: [
      {
        title: "Track A: Production System Bridging",
        description:
          "For producers on legacy plant and metering systems. Source and production data is translated into signed on-chain certificates through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Plant / Metering", sublabel: "Producer Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Data Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Certification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Offtaker Verification",
        description:
          "For offtakers verifying directly. A signed node queries batch certificates and confirms renewable production straight from the ledger.",
        connectorLabels: ["OFFTAKER SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Offtaker Node / Wallet", sublabel: "Industrial Buyers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Certificate Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Certified Volume Record", icon: FlaskConical, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building hydrogen certification with source binding, tamper-evident certificates, and certified-volume settlement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Certification & Settlement Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects clean energy certification benchmarks. Building custom source-binding logic, integrating production and metering feeds, and shipping certified-volume settlement for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your certification and settlement rules into pre-audited WebAssembly binaries and provisions the certification ledger and escrow instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "battery-storage-capacity-bidding-in-grid-ancillary-services-markets",
    icon: Activity,
    eyebrow: "Ancillary Services Settlement Layer",
    headline1: "Prove you responded.",
    headline2: "Settle on real performance.",
    heroDescription:
      "Stand up a verified bidding and settlement system for battery storage operators in grid ancillary services markets, based on confirmed availability and response performance. Anchored performance data drives the settlement calculation, so operators are paid for exactly what the battery delivered when called.",
    heroCta: "Deploy Ancillary Markets",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn contested availability claims into a performance-settled ancillary services market for storage.",
    mechanics: [
      { title: "Availability Attestation", description: "External Data Oracles anchor the battery's declared availability window, so a capacity bid rests on a verifiable commitment rather than an unproven offer." },
      { title: "Response Measurement", description: "When the grid calls, performance data confirming the battery's actual response is anchored, capturing how fast and how fully it delivered." },
      { title: "Performance-Based Payment", description: "Escrow and Conditional Settlement computes the payment owed from confirmed performance, so under-delivery is priced down automatically." },
      { title: "Immutable Event Log", description: "The Audit Logs module records each dispatch call and response as a sealed event, giving the grid operator a defensible performance history." },
      { title: "Bid Integrity", description: "Because availability, dispatch, and response share one ledger, an operator cannot claim capacity it did not provide when the market settles." },
      { title: "Transparent Settlement", description: "Both the operator and the grid settle against the same anchored performance record, removing disputes over whether the battery met its obligation." },
    ],
    lifecycleTitle: "The Ancillary Services Lifecycle",
    lifecycleSubtitle:
      "Follow a single capacity bid from availability declaration through a dispatch call to performance-based settlement.",
    lifecycleSteps: [
      {
        label: "Capacity Bid",
        description:
          "A storage operator bids available capacity into the ancillary market. The contract anchors the committed megawatts and availability window.",
        icon: Activity,
        logFilename: "cerulea_ancillary_engine.log",
        logLines: [
          { text: "[SYS] Opening capacity bid for BESS_17...", time: "05:45:22", tone: "default" },
          { text: "[CMD] bid { battery: \"BESS_17\", mw: 20, service: \"FREQ_REG\" }", time: "05:45:22", tone: "primary" },
          { text: "[AUTH] Anchoring declared availability window...", time: "05:45:23", tone: "secondary" },
          { text: "[OK] Bid BID_3390 sealed at block 8120441.", time: "05:45:23", tone: "success" },
        ],
      },
      {
        label: "Dispatch Call",
        description:
          "A grid frequency event triggers a dispatch call to the battery. The call is timestamped and bound to the active bid.",
        icon: Zap,
        logFilename: "cerulea_ancillary_engine.log",
        logLines: [
          { text: "[SYS] Frequency deviation detected on grid...", time: "13:02:11", tone: "default" },
          { text: "[CMD] dispatch(BID_3390, target: \"20MW\", ramp: \"4s\")", time: "13:02:11", tone: "primary" },
          { text: "[SYS] Dispatch call timestamped and sealed.", time: "13:02:11", tone: "secondary" },
          { text: "[OK] Battery BESS_17 called to respond.", time: "13:02:12", tone: "success" },
        ],
      },
      {
        label: "Response Anchor",
        description:
          "Performance data confirming the battery's actual response is anchored, capturing delivered megawatts and ramp speed.",
        icon: Radio,
        logFilename: "cerulea_ancillary_engine.log",
        logLines: [
          { text: "[SYS] Capturing response for BID_3390...", time: "13:02:20", tone: "default" },
          { text: "[CMD] anchorResponse(delivered: \"19.4MW\", ramp: \"4.2s\")", time: "13:02:20", tone: "primary" },
          { text: "[SYS] Comparing response to committed capacity...", time: "13:02:20", tone: "default" },
          { text: "[OK] Verified response sealed at 97% delivery.", time: "13:02:21", tone: "success" },
        ],
      },
      {
        label: "Performance Settlement",
        description:
          "The settlement contract computes the payment owed from confirmed performance, pricing any shortfall automatically.",
        icon: Wallet,
        logFilename: "cerulea_ancillary_engine.log",
        logLines: [
          { text: "[SYS] Settling ancillary payment for BID_3390...", time: "13:05:44", tone: "default" },
          { text: "[CMD] settle(BID_3390, performance: 0.97)", time: "13:05:44", tone: "primary" },
          { text: "[AUTH] Confirming anchored response data...", time: "13:05:45", tone: "secondary" },
          { text: "[OK] Operator paid on confirmed performance.", time: "13:05:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes ancillary services settlement into modular contracts. Each layer anchors the bid, records the dispatch, confirms the response, and settles on performance.",
    layers: [
      {
        title: "Bid Registry",
        subtitle: "The Capacity Commitment",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Capacity Commitment",
          description:
            "Anchors each capacity bid with its committed megawatts and availability window, turning an offer into a verifiable commitment the market can settle against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract BidRegistry {\n  struct Bid {\n    bytes32 battery;\n    uint256 mw;\n    string service;\n    uint256 windowEnd;\n  }\n\n  mapping(bytes32 => Bid) public bids;\n\n  function open(bytes32 id, bytes32 battery, uint256 mw, string calldata svc, uint256 end) external {\n    bids[id] = Bid(battery, mw, svc, end);\n  }\n}",
        simAction: "Simulate Capacity Bid",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading availability for battery BESS_17...", tone: "default" },
          { text: "Recording 20 MW frequency regulation bid...", tone: "default" },
          { text: "Anchoring availability window...", tone: "default" },
          { text: "Writing bid to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Capacity bid committed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Dispatch Log",
        subtitle: "The Call Record",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Call Record",
          description:
            "Seals each dispatch call from the grid with its target and timestamp, giving both sides an immutable record of when the battery was asked to respond.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function dispatch(bytes32 bidId, uint256 target, uint256 rampMs) external onlyGrid {\n    require(block.timestamp <= bids[bidId].windowEnd, \"Window closed\");\n    calls[bidId] = Call(target, rampMs, block.timestamp);\n    emit Dispatched(bidId, target, block.timestamp);\n}",
        simAction: "Simulate Dispatch Call",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Grid detecting frequency deviation...", tone: "default" },
          { text: "Confirming bid BID_3390 still active...", tone: "default" },
          { text: "Sealing dispatch call with timestamp...", tone: "default" },
          { text: "Setting 20 MW response target...", tone: "default" },
          { text: "[SUCCESS] Dispatch call recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Response Oracle",
        subtitle: "The Performance Witness",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Performance Witness",
          description:
            "Anchors the battery's measured response against the dispatch call, capturing delivered megawatts and ramp so settlement reflects real performance, not a claimed one.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function anchorResponse(bytes32 bidId, uint256 deliveredMw, uint256 rampMs) external onlyOracle {\n    Call memory c = calls[bidId];\n    uint256 perf = (deliveredMw * 1e4) / c.target;\n    responses[bidId] = Response(deliveredMw, rampMs, perf);\n    emit ResponseAnchored(bidId, perf);\n}",
        simAction: "Simulate Response Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading battery telemetry for BESS_17...", tone: "default" },
          { text: "Measuring delivered 19.4 MW response...", tone: "default" },
          { text: "Computing 97% performance ratio...", tone: "default" },
          { text: "Sealing response against dispatch...", tone: "default" },
          { text: "[SUCCESS] Verified performance anchored.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Performance Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Performance Vault",
          description:
            "Computes the ancillary payment from confirmed performance and releases it to the operator, pricing any shortfall down so the market pays strictly for delivered service.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function settle(bytes32 bidId) external {\n    Response memory r = responses[bidId];\n    require(r.perf > 0, \"No response\");\n    uint256 amount = (basePayment[bidId] * r.perf) / 1e4;\n    payable(operator[bidId]).transfer(amount);\n    emit Settled(bidId, amount);\n}",
        simAction: "Simulate Performance Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading anchored performance for BID_3390...", tone: "default" },
          { text: "Applying 97% factor to base payment...", tone: "default" },
          { text: "Releasing funds from vault...", tone: "default" },
          { text: "Crediting operator wallet...", tone: "default" },
          { text: "[SUCCESS] Operator settled on real performance.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Performance-settled ancillary services is a horizontal capability. Here is how different actors in the balancing market put the shared ledger to work.",
    sectors: [
      { icon: Activity, title: "Storage Operators", description: "Bid capacity with confidence and get paid on confirmed response, turning verified battery performance into a defensible ancillary revenue stream.", assetTypes: ["Capacity Bids", "Response Records", "Ancillary Payments"] },
      { icon: Network, title: "Grid & System Operators", description: "Call on storage and settle strictly on measured performance, holding a defensible dispatch and response history for every ancillary service procured.", assetTypes: ["Dispatch Calls", "Performance Logs", "Settlement Records"] },
      { icon: Landmark, title: "Market Regulators", description: "Audit ancillary market outcomes against anchored dispatch and response data, confirming operators were paid for delivered service without collecting party reports.", assetTypes: ["Market Audits", "Response Attestations", "Payment Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a battery management system or reading response telemetry directly from the inverter, Cerulea routes both into one ancillary settlement ledger.",
    tracks: [
      {
        title: "Track A: Battery Management Bridging",
        description:
          "For operators on legacy battery management and SCADA. Availability and response data is translated into signed on-chain records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "BMS / SCADA", sublabel: "Storage Operator Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Data Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Ancillary Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Inverter Telemetry",
        description:
          "For batteries with edge telemetry. Each response measurement is signed by a device key and routed straight to the settlement contract.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Inverter / Edge", sublabel: "Battery Hardware", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Response Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Performance Record", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building ancillary settlement with availability attestation, response measurement, and performance-based payment from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Bid & Performance Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects grid market integration benchmarks. Wiring battery telemetry, building custom performance logic, and shipping conditional settlement for an average operator takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your bid and performance rules into pre-audited WebAssembly binaries and provisions the ancillary ledger and escrow instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "grid-balancing-and-demand-response-smart-contracts-between-utilities",
    icon: Network,
    eyebrow: "Demand Response Settlement Layer",
    headline1: "Balance the grid live.",
    headline2: "Settle response in days.",
    heroDescription:
      "Build an automated demand-response settlement network where response is measured by smart meters and incentives are paid automatically, cutting settlement time from months to days. A frequency event triggers response across enrolled industrial consumers, with every action recorded on-chain within minutes.",
    heroCta: "Deploy Demand Response",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace a slow, unverified response process with a metered, automatically settled demand-response network.",
    mechanics: [
      { title: "Automated Event Trigger", description: "The Logic and Actions Editor encodes the frequency thresholds that fire a demand-response call, so balancing action starts automatically the moment the grid deviates." },
      { title: "Metered Response Proof", description: "The Energy Meter Oracle measures each enrolled consumer's actual load reduction, so response is verified from meter data rather than self-reported." },
      { title: "Instant On-Chain Record", description: "Every dispatch and response lands on-chain within minutes, giving the grid a live view of who responded and by how much during the event." },
      { title: "Automatic Incentive Payout", description: "The Microgrid Settlement module computes and pays incentives from verified response, cutting demand-response settlement from months to days." },
      { title: "Enrollment Registry", description: "Enrolled industrial consumers and their committed curtailment are recorded on-chain, so the pool available for balancing is always current and auditable." },
      { title: "Verifiable Reconciliation", description: "Utilities settle response payments against the same anchored measurements, ending the multi-month reconciliation that plagued demand-response programs." },
    ],
    lifecycleTitle: "The Demand Response Lifecycle",
    lifecycleSubtitle:
      "Follow a single frequency event from trigger through metered response to settled incentive payments.",
    lifecycleSteps: [
      {
        label: "Event Trigger",
        description:
          "A grid frequency deviation crosses the encoded threshold. The contract fires a demand-response call to enrolled consumers automatically.",
        icon: Zap,
        logFilename: "cerulea_dr_engine.log",
        logLines: [
          { text: "[SYS] Monitoring grid frequency...", time: "16:40:02", tone: "default" },
          { text: "[CMD] triggerDR(freq: 49.6, threshold: 49.7)", time: "16:40:02", tone: "primary" },
          { text: "[SYS] Deviation confirmed, dispatching to pool...", time: "16:40:02", tone: "secondary" },
          { text: "[OK] Event DR_775 fired to 12 consumers.", time: "16:40:03", tone: "success" },
        ],
      },
      {
        label: "Consumer Response",
        description:
          "Enrolled industrial consumers curtail load. Smart meters measure each reduction and anchor it to the event within minutes.",
        icon: Radio,
        logFilename: "cerulea_dr_engine.log",
        logLines: [
          { text: "[SYS] Measuring curtailment across pool...", time: "16:47:31", tone: "default" },
          { text: "[CMD] anchorResponse(DR_775, consumers: 12, mw: 44)", time: "16:47:31", tone: "primary" },
          { text: "[SYS] Meter readings sealed per consumer.", time: "16:47:31", tone: "default" },
          { text: "[OK] All 12 responses on-chain within 15 min.", time: "16:47:32", tone: "success" },
        ],
      },
      {
        label: "Performance Verification",
        description:
          "Each consumer's curtailment is verified against its committed reduction. Full and partial responses are priced accordingly.",
        icon: Scale,
        logFilename: "cerulea_dr_engine.log",
        logLines: [
          { text: "[SYS] Verifying response against commitments...", time: "16:50:10", tone: "default" },
          { text: "[CMD] verifyPool(DR_775)", time: "16:50:10", tone: "primary" },
          { text: "[SYS] 11 full, 1 partial curtailment confirmed.", time: "16:50:10", tone: "secondary" },
          { text: "[OK] Pool performance sealed for settlement.", time: "16:50:11", tone: "success" },
        ],
      },
      {
        label: "Incentive Settlement",
        description:
          "Incentive payments are computed from verified response and paid to each consumer automatically, settling within 24 hours.",
        icon: Wallet,
        logFilename: "cerulea_dr_engine.log",
        logLines: [
          { text: "[SYS] Settling incentives for DR_775...", time: "17:02:55", tone: "default" },
          { text: "[CMD] payPool(DR_775, basis: \"verified\")", time: "17:02:55", tone: "primary" },
          { text: "[AUTH] Confirming anchored response per consumer...", time: "17:02:56", tone: "secondary" },
          { text: "[OK] Incentives settled within 24 hours.", time: "17:02:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes demand-response settlement into modular contracts. Each layer triggers the event, measures response, verifies performance, and settles incentives automatically.",
    layers: [
      {
        title: "Trigger Engine",
        subtitle: "The Frequency Watcher",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Frequency Watcher",
          description:
            "Encodes the frequency thresholds that fire a demand-response call. It converts a manual, slow notification process into an automatic dispatch the instant the grid deviates.",
          platformFunction: "Logic & Automation",
        },
        codeSnippet:
          "contract TriggerEngine {\n  uint256 public threshold;\n\n  function triggerDR(uint256 freq, bytes32 pool) external onlyGrid returns (bytes32) {\n    require(freq < threshold, \"Within band\");\n    bytes32 eventId = keccak256(abi.encode(pool, block.timestamp));\n    _dispatchPool(pool, eventId);\n    return eventId;\n  }\n}",
        simAction: "Simulate Event Trigger",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading grid frequency 49.6 Hz...", tone: "default" },
          { text: "Comparing against 49.7 Hz threshold...", tone: "default" },
          { text: "Firing demand-response event...", tone: "default" },
          { text: "Dispatching to enrolled pool...", tone: "default" },
          { text: "[SUCCESS] Event DR_775 triggered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Response Oracle",
        subtitle: "The Curtailment Meter",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Curtailment Meter",
          description:
            "Measures each consumer's load reduction from smart meter data and anchors it to the event, so response is proven within minutes rather than self-reported after the fact.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function anchorResponse(bytes32 eventId, address consumer, uint256 reducedMw, bytes calldata sig) external {\n    require(verifyMeter(consumer, sig), \"Bad meter sig\");\n    responses[eventId][consumer] = reducedMw;\n    emit ResponseAnchored(eventId, consumer, reducedMw);\n}",
        simAction: "Simulate Response Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading smart meters across 12 consumers...", tone: "default" },
          { text: "Validating meter signatures...", tone: "default" },
          { text: "Measuring 44 MW total curtailment...", tone: "default" },
          { text: "Sealing response per consumer...", tone: "default" },
          { text: "[SUCCESS] Pool response anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Verification Hook",
        subtitle: "The Commitment Check",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Commitment Check",
          description:
            "Compares each measured response to the consumer's committed curtailment, distinguishing full and partial performance so incentives reflect what was actually delivered.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function verifyPool(bytes32 eventId) external view returns (uint256 full, uint256 partial) {\n    for (uint256 i = 0; i < pool[eventId].length; i++) {\n        address c = pool[eventId][i];\n        if (responses[eventId][c] >= committed[c]) full++;\n        else partial++;\n    }\n}",
        simAction: "Simulate Performance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading commitments for DR_775 pool...", tone: "default" },
          { text: "Comparing responses to committed MW...", tone: "default" },
          { text: "Counting 11 full, 1 partial...", tone: "default" },
          { text: "Sealing pool performance...", tone: "default" },
          { text: "[SUCCESS] Performance verified for settlement.", tone: "success" },
        ],
      },
      {
        title: "Incentive Settlement",
        subtitle: "The Auto Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Payout",
          description:
            "Computes and pays incentives from verified response to every consumer in the pool, collapsing a months-long reconciliation into a settlement that clears within a day.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function payPool(bytes32 eventId) external {\n    for (uint256 i = 0; i < pool[eventId].length; i++) {\n        address c = pool[eventId][i];\n        uint256 amount = responses[eventId][c] * incentiveRate;\n        payable(c).transfer(amount);\n    }\n    emit PoolSettled(eventId);\n}",
        simAction: "Simulate Incentive Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified response per consumer...", tone: "default" },
          { text: "Computing incentive for each participant...", tone: "default" },
          { text: "Releasing payments across the pool...", tone: "default" },
          { text: "Recording settlement on-chain...", tone: "default" },
          { text: "[SUCCESS] Incentives settled within 24 hours.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated demand response is a horizontal capability. Here is how different actors in grid balancing put the shared ledger to work.",
    sectors: [
      { icon: Network, title: "Grid & System Operators", description: "Trigger balancing across an enrolled pool and see verified response within minutes, replacing manual notification with an automatic, auditable demand-response network.", assetTypes: ["Balancing Events", "Response Pools", "Settlement Records"] },
      { icon: Factory, title: "Industrial Consumers", description: "Earn incentives for verified curtailment paid within a day, turning flexible load into a reliable revenue stream instead of a months-delayed reconciliation.", assetTypes: ["Curtailment Commitments", "Metered Responses", "Incentive Payments"] },
      { icon: Building2, title: "Aggregators & Utilities", description: "Coordinate distributed flexibility across many sites and settle response transparently, standing up demand-response programs without bespoke settlement infrastructure.", assetTypes: ["Flexibility Portfolios", "Enrollment Records", "Payout Ledgers"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging utility control systems or reading curtailment directly from consumer smart meters, Cerulea routes both into one demand-response ledger.",
    tracks: [
      {
        title: "Track A: Utility Control Bridging",
        description:
          "For utilities on legacy control and settlement systems. Events and responses are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Control / Settlement", sublabel: "Utility Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Demand Response Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Smart Meter Capture",
        description:
          "For enrolled consumers with smart meters. Each curtailment measurement is signed by a device key and routed straight to the event record.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Smart Meter / Edge", sublabel: "Consumer Premises", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Response Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Balancing Event Record", icon: Zap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building demand response with automatic triggers, metered response proof, and instant incentive settlement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Trigger & Settlement Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects grid balancing integration benchmarks. Wiring control systems and meters, building custom trigger and settlement logic, and shipping an incentive engine for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your trigger and settlement rules into pre-audited WebAssembly binaries and provisions the demand-response ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "electricity-metering-data-integrity-for-billing-disputes",
    icon: Gavel,
    eyebrow: "Metering Integrity Layer",
    headline1: "Seal every reading.",
    headline2: "End the billing fight.",
    heroDescription:
      "Deliver a smart meter data integrity network where billing rests on immutable on-chain meter readings, so disputes between DISCOMs and large consumers are resolvable with on-chain evidence. A contested bill is settled against sealed readings rather than years of litigation.",
    heroCta: "Deploy Metering Integrity",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn contestable manual readings into a sealed metering record that resolves billing disputes in weeks.",
    mechanics: [
      { title: "Sealed Meter Readings", description: "The Energy Meter Oracle anchors each interval reading at source, so a consumer's consumption record cannot be edited between capture and billing." },
      { title: "Cross-Checked Sources", description: "External Data Oracles reconcile the meter feed against grid-side data, so a manipulated or faulty reading is flagged rather than billed." },
      { title: "Evidence-Grade Trail", description: "The Audit Logs module retains every reading and adjustment as a sealed event, giving a regulator a court-ready record for any disputed period." },
      { title: "Billing From Immutable Data", description: "The bill is computed directly from anchored readings, removing the manual data entry that historically introduced errors and opportunities for manipulation." },
      { title: "Rapid Dispute Resolution", description: "A regulator queries the sealed readings for the disputed window and resolves the case against evidence, cutting resolution from months or years to weeks." },
      { title: "Tamper Detection", description: "Any attempt to alter a submitted reading breaks its digest and surfaces immediately, deterring manipulation on both sides of the meter." },
    ],
    lifecycleTitle: "The Metering Integrity Lifecycle",
    lifecycleSubtitle:
      "Follow a single consumer's consumption from sealed reading through billing to a disputed period resolved on-chain.",
    lifecycleSteps: [
      {
        label: "Reading Capture",
        description:
          "The consumer's smart meter reports interval consumption. The oracle anchors each reading at source with its timestamp.",
        icon: Radio,
        logFilename: "cerulea_metering_engine.log",
        logLines: [
          { text: "[SYS] Reading smart meter MTR_5540...", time: "00:15:00", tone: "default" },
          { text: "[CMD] anchorRead(meter: \"MTR_5540\", kwh: 8420)", time: "00:15:00", tone: "primary" },
          { text: "[AUTH] Verifying meter signature and interval...", time: "00:15:01", tone: "secondary" },
          { text: "[OK] Reading sealed at block 9120774.", time: "00:15:01", tone: "success" },
        ],
      },
      {
        label: "Source Reconciliation",
        description:
          "The reading is cross-checked against grid-side data. A mismatch is flagged before it can reach the bill.",
        icon: Scale,
        logFilename: "cerulea_metering_engine.log",
        logLines: [
          { text: "[SYS] Reconciling MTR_5540 with grid feed...", time: "00:16:20", tone: "default" },
          { text: "[CMD] crossCheck(meter: \"MTR_5540\", grid: \"FDR_12\")", time: "00:16:20", tone: "primary" },
          { text: "[SYS] Feeds agree within tolerance.", time: "00:16:20", tone: "default" },
          { text: "[OK] Reading validated, no anomaly flagged.", time: "00:16:21", tone: "success" },
        ],
      },
      {
        label: "Bill Generation",
        description:
          "The billing contract computes the bill directly from anchored readings, with no manual data entry step.",
        icon: FileCheck,
        logFilename: "cerulea_metering_engine.log",
        logLines: [
          { text: "[SYS] Generating bill for MTR_5540 cycle...", time: "01:00:05", tone: "default" },
          { text: "[CMD] bill(meter: \"MTR_5540\", period: \"2026-09\")", time: "01:00:05", tone: "primary" },
          { text: "[SYS] Summing sealed readings for period...", time: "01:00:05", tone: "default" },
          { text: "[OK] Bill computed from immutable data.", time: "01:00:06", tone: "success" },
        ],
      },
      {
        label: "Dispute Resolution",
        description:
          "A large consumer disputes the bill. The regulator queries the sealed readings and resolves the case against evidence.",
        icon: Gavel,
        logFilename: "cerulea_metering_engine.log",
        logLines: [
          { text: "[SYS] Dispute filed on MTR_5540 bill...", time: "10:30:44", tone: "default" },
          { text: "[CMD] resolveDispute(meter: \"MTR_5540\", period: \"2026-09\")", time: "10:30:44", tone: "primary" },
          { text: "[SYS] Returning sealed readings for window...", time: "10:30:44", tone: "default" },
          { text: "[OK] Dispute resolved in 2 weeks on evidence.", time: "10:30:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes metering integrity into modular contracts. Each layer seals readings, reconciles sources, bills from immutable data, and exposes evidence for disputes.",
    layers: [
      {
        title: "Meter Oracle",
        subtitle: "The Reading Seal",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reading Seal",
          description:
            "Anchors each interval reading at source with a device signature, removing the manual collection step where consumption data was historically altered.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract MeterOracle {\n  struct Reading {\n    bytes32 meter;\n    uint256 kwh;\n    uint256 capturedAt;\n  }\n\n  mapping(uint256 => Reading) public readings;\n\n  function anchorRead(bytes32 meter, uint256 kwh, bytes calldata sig) external {\n    require(verifyMeter(meter, sig), \"Bad meter sig\");\n    readings[block.number] = Reading(meter, kwh, block.timestamp);\n  }\n}",
        simAction: "Simulate Reading Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading smart meter MTR_5540...", tone: "default" },
          { text: "Validating meter signature...", tone: "default" },
          { text: "Sealing reading with timestamp...", tone: "default" },
          { text: "Writing reading to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Meter reading anchored at source.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation Hook",
        subtitle: "The Cross-Check",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cross-Check",
          description:
            "Reconciles the consumer meter against grid-side data and flags any mismatch before billing, catching faulty or manipulated readings at the point of capture.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function crossCheck(bytes32 meter, bytes32 feeder) external view returns (bool) {\n    uint256 m = latest[meter];\n    uint256 g = gridSide[feeder];\n    return _within(m, g, tolerance);\n}",
        simAction: "Simulate Source Cross-Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading meter reading for MTR_5540...", tone: "default" },
          { text: "Loading grid-side data for feeder FDR_12...", tone: "default" },
          { text: "Comparing feeds within tolerance...", tone: "default" },
          { text: "Confirming no anomaly...", tone: "default" },
          { text: "[SUCCESS] Reading validated against grid.", tone: "success" },
        ],
      },
      {
        title: "Billing Engine",
        subtitle: "The Immutable Ledger",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Immutable Ledger",
          description:
            "Computes the bill directly from anchored readings with no manual entry, so the amount owed is a deterministic function of sealed consumption rather than a re-keyed figure.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function bill(bytes32 meter, bytes32 period) external view returns (uint256) {\n    uint256 units = _sumReadings(meter, period);\n    return units * tariff[meter];\n}",
        simAction: "Simulate Bill Generation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading sealed readings for the cycle...", tone: "default" },
          { text: "Summing consumption for MTR_5540...", tone: "default" },
          { text: "Applying consumer tariff...", tone: "default" },
          { text: "Computing bill from immutable data...", tone: "default" },
          { text: "[SUCCESS] Bill generated without manual entry.", tone: "success" },
        ],
      },
      {
        title: "Evidence Window",
        subtitle: "The Dispute Resolver",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Dispute Resolver",
          description:
            "Exposes the sealed readings for any disputed period to the regulator, turning a multi-year litigation into an evidence-based resolution measured in weeks.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveDispute(bytes32 meter, bytes32 period) external view returns (Reading[] memory) {\n    return _readingsFor(meter, period);\n}",
        simAction: "Simulate Dispute Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator opening dispute on MTR_5540...", tone: "default" },
          { text: "Fetching sealed readings for period...", tone: "default" },
          { text: "Confirming readings unaltered...", tone: "default" },
          { text: "Returning evidence set...", tone: "default" },
          { text: "[SUCCESS] Dispute resolved on sealed evidence.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Metering data integrity is a horizontal capability. Here is how different actors in electricity billing put the shared ledger to work.",
    sectors: [
      { icon: Building2, title: "Distribution Companies", description: "Bill large consumers from sealed readings and defend every figure with evidence, cutting revenue leakage and the cost of prolonged billing litigation.", assetTypes: ["Meter Readings", "Consumer Bills", "Dispute Records"] },
      { icon: Factory, title: "Industrial Consumers", description: "Verify their own consumption against an immutable record and challenge errors with evidence, replacing opaque manual readings with a shared source of truth.", assetTypes: ["Consumption Records", "Bill Audits", "Evidence Sets"] },
      { icon: Landmark, title: "Electricity Regulators", description: "Resolve billing disputes from sealed on-chain readings in weeks, clearing case backlogs without collecting conflicting data from each party.", assetTypes: ["Dispute Audits", "Reading Registries", "Resolution Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a DISCOM's metering and billing systems or reading directly from smart meters, Cerulea routes both into one integrity ledger.",
    tracks: [
      {
        title: "Track A: Billing System Bridging",
        description:
          "For DISCOMs on legacy metering and billing platforms. Readings are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Metering / Billing", sublabel: "DISCOM Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Metering Integrity Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Smart Meter Capture",
        description:
          "For smart meters with edge connectivity. Each reading is signed by a device key and routed straight to the integrity ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Smart Meter / Edge", sublabel: "Consumer Premises", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Reading Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Reading Record", icon: Gavel, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building metering integrity with sealed readings, source reconciliation, and evidence-grade dispute tooling from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Metering & Billing Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects utility billing integration benchmarks. Wiring metering and billing systems, building custom reconciliation logic, and shipping evidence tooling for an average DISCOM takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your metering and billing rules into pre-audited WebAssembly binaries and provisions the integrity ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "open-access-transmission-charge-reconciliation-across-discoms",
    icon: Scale,
    eyebrow: "Transmission Settlement Layer",
    headline1: "Meter the interstate flow.",
    headline2: "Reconcile charges automatically.",
    heroDescription:
      "Deliver automated reconciliation of transmission charges for electricity wheeled across state lines, based on verified metering data. Readings from each interconnection point feed directly into the charge calculation, so settlements between distribution companies happen automatically and consistently.",
    heroCta: "Deploy Transmission Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace monthly manual settlements with metered, automatic reconciliation of interstate transmission charges.",
    mechanics: [
      { title: "Interconnection Metering", description: "The Energy Meter Oracle anchors verified flow at each interconnection point, so charges are based on how much power actually crossed the shared grid." },
      { title: "Charge Calculation", description: "The wheeling tariff is encoded once and applied to metered flow, producing each DISCOM's transmission charge deterministically." },
      { title: "Automatic Settlement", description: "Escrow and Conditional Settlement moves the reconciled amounts between distribution companies, removing the monthly manual settlement cycle." },
      { title: "Multi-Party Reconciliation", description: "All DISCOMs involved in a wheeled transaction settle against the same anchored flow data, so no party disputes the volume basis." },
      { title: "Immutable Flow Trail", description: "The Audit Logs module retains every interconnection reading and settlement, giving each party and the regulator a verifiable transmission history." },
      { title: "Consistent Application", description: "Because the tariff logic runs on-chain, charges are applied consistently across states and cycles, ending discrepancies from divergent manual calculations." },
    ],
    lifecycleTitle: "The Transmission Reconciliation Lifecycle",
    lifecycleSubtitle:
      "Follow a single wheeled transaction from interconnection metering through charge calculation to automatic settlement.",
    lifecycleSteps: [
      {
        label: "Flow Metering",
        description:
          "Meters at each interconnection point report power flow. The oracle anchors verified flow for the wheeled transaction.",
        icon: Radio,
        logFilename: "cerulea_transmission_engine.log",
        logLines: [
          { text: "[SYS] Reading interconnection meters for WHL_44...", time: "23:50:10", tone: "default" },
          { text: "[CMD] anchorFlow(txn: \"WHL_44\", mwh: 6200, point: \"ICP_9\")", time: "23:50:10", tone: "primary" },
          { text: "[AUTH] Verifying interconnection meter signatures...", time: "23:50:11", tone: "secondary" },
          { text: "[OK] Wheeled flow sealed at 6200 MWh.", time: "23:50:11", tone: "success" },
        ],
      },
      {
        label: "Charge Calculation",
        description:
          "The contract applies the wheeling tariff to the metered flow, computing each DISCOM's transmission charge.",
        icon: Scale,
        logFilename: "cerulea_transmission_engine.log",
        logLines: [
          { text: "[SYS] Computing charges for WHL_44...", time: "00:05:03", tone: "default" },
          { text: "[CMD] calcCharge(txn: \"WHL_44\", tariff: \"WHEEL_T2\")", time: "00:05:03", tone: "primary" },
          { text: "[SYS] Allocating charge across DISCOMs...", time: "00:05:03", tone: "secondary" },
          { text: "[OK] Transmission charges computed from flow.", time: "00:05:04", tone: "success" },
        ],
      },
      {
        label: "Party Confirmation",
        description:
          "Each distribution company confirms the metered flow basis. Agreement is recorded before settlement executes.",
        icon: Handshake,
        logFilename: "cerulea_transmission_engine.log",
        logLines: [
          { text: "[SYS] Awaiting confirmations for WHL_44...", time: "00:10:22", tone: "default" },
          { text: "[CMD] confirm(txn: \"WHL_44\", discom: \"DISCOM_B\")", time: "00:10:22", tone: "primary" },
          { text: "[SYS] All parties agree on flow basis.", time: "00:10:22", tone: "default" },
          { text: "[OK] Reconciliation basis sealed.", time: "00:10:23", tone: "success" },
        ],
      },
      {
        label: "Automatic Settlement",
        description:
          "The reconciled charges settle between distribution companies automatically, replacing the monthly manual process.",
        icon: Wallet,
        logFilename: "cerulea_transmission_engine.log",
        logLines: [
          { text: "[SYS] Settling transmission charges for WHL_44...", time: "00:12:40", tone: "default" },
          { text: "[CMD] settle(txn: \"WHL_44\")", time: "00:12:40", tone: "primary" },
          { text: "[AUTH] Confirming flow and tariff preconditions...", time: "00:12:41", tone: "secondary" },
          { text: "[OK] Charges settled automatically and consistently.", time: "00:12:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes transmission reconciliation into modular contracts. Each layer meters flow, calculates charges, confirms parties, and settles between distribution companies.",
    layers: [
      {
        title: "Flow Oracle",
        subtitle: "The Interconnection Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Interconnection Feed",
          description:
            "Anchors verified flow at each interconnection point, giving the reconciliation a trustworthy basis for how much power actually crossed the shared grid.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract FlowOracle {\n  mapping(bytes32 => uint256) public wheeledMwh;\n\n  function anchorFlow(bytes32 txn, uint256 mwh, bytes32 point, bytes calldata sig) external {\n    require(verifyMeter(point, sig), \"Bad meter sig\");\n    wheeledMwh[txn] += mwh;\n    emit FlowAnchored(txn, point, mwh);\n  }\n}",
        simAction: "Simulate Flow Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading interconnection meter ICP_9...", tone: "default" },
          { text: "Validating meter signature...", tone: "default" },
          { text: "Accumulating wheeled flow to 6200 MWh...", tone: "default" },
          { text: "Sealing flow for transaction WHL_44...", tone: "default" },
          { text: "[SUCCESS] Wheeled flow anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Charge Engine",
        subtitle: "The Tariff Allocator",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Tariff Allocator",
          description:
            "Applies the wheeling tariff to metered flow and allocates the charge across the distribution companies, producing a consistent calculation across states and cycles.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function calcCharge(bytes32 txn) public view returns (uint256) {\n    return wheeledMwh[txn] * wheelTariff[txn];\n}",
        simAction: "Simulate Charge Calc",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading wheeling tariff WHEEL_T2...", tone: "default" },
          { text: "Reading wheeled flow 6200 MWh...", tone: "default" },
          { text: "Computing transmission charge...", tone: "default" },
          { text: "Allocating across DISCOMs...", tone: "default" },
          { text: "[SUCCESS] Charges computed from metered flow.", tone: "success" },
        ],
      },
      {
        title: "Confirmation Hook",
        subtitle: "The Multi-Party Agreement",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Multi-Party Agreement",
          description:
            "Requires each distribution company to confirm the metered flow basis before settlement, turning a contested monthly reconciliation into a mutually agreed record.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function confirm(bytes32 txn) external onlyDiscom {\n    confirmations[txn][msg.sender] = true;\n    if (_allConfirmed(txn)) emit BasisSealed(txn);\n}",
        simAction: "Simulate Party Confirm",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "DISCOM_B reviewing flow basis for WHL_44...", tone: "default" },
          { text: "Comparing against own interconnection data...", tone: "default" },
          { text: "Recording confirmation...", tone: "default" },
          { text: "Checking all parties agreed...", tone: "default" },
          { text: "[SUCCESS] Reconciliation basis sealed.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Auto Reconciler",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Reconciler",
          description:
            "Moves the reconciled charges between distribution companies once all parties confirm, replacing the monthly manual settlement with an automatic, consistent transfer.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function settle(bytes32 txn) external {\n    require(_allConfirmed(txn), \"Not confirmed\");\n    uint256 amount = calcCharge(txn);\n    _transferBetween(payer[txn], payee[txn], amount);\n    emit TxnSettled(txn, amount);\n}",
        simAction: "Simulate Auto Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming all parties agreed on WHL_44...", tone: "default" },
          { text: "Fetching computed charge...", tone: "default" },
          { text: "Transferring between distribution companies...", tone: "default" },
          { text: "Recording settlement on-chain...", tone: "default" },
          { text: "[SUCCESS] Transmission charges reconciled.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated transmission reconciliation is a horizontal capability. Here is how different actors in interstate power flow put the shared ledger to work.",
    sectors: [
      { icon: Building2, title: "Distribution Companies", description: "Settle wheeling charges automatically from metered flow, ending the monthly spreadsheet reconciliation and the disputes that came with divergent calculations.", assetTypes: ["Wheeled Transactions", "Charge Records", "Settlements"] },
      { icon: Network, title: "Transmission Utilities", description: "Give all parties a verified flow record at each interconnection point, so open-access charges rest on shared data rather than contested manual meters.", assetTypes: ["Interconnection Feeds", "Flow Records", "Reconciliation Logs"] },
      { icon: Landmark, title: "Load Despatch & Regulators", description: "Audit interstate transmission settlements from one consistent on-chain history, monitoring open-access charges without collecting reports from each state.", assetTypes: ["Settlement Audits", "Flow Registries", "Compliance Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging state DISCOM settlement systems or reading directly from interconnection meters, Cerulea routes both into one reconciliation ledger.",
    tracks: [
      {
        title: "Track A: DISCOM Settlement Bridging",
        description:
          "For distribution companies on legacy settlement systems. Interconnection data is translated into signed on-chain flow records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Settlement Systems", sublabel: "DISCOM Back Office", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Flow Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Transmission Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Interconnection Metering",
        description:
          "For interconnection meters with edge connectivity. Each flow reading is signed by a device key and routed straight to the reconciliation contract.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Interconnection Meter", sublabel: "Grid Boundary Hardware", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Flow Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Wheeled Flow Record", icon: Scale, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building transmission reconciliation with interconnection metering, tariff logic, and multi-party settlement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Tariff & Reconciliation Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects interstate settlement integration benchmarks. Wiring each state's settlement systems, building custom tariff and reconciliation logic, and shipping multi-party settlement for an average corridor takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your tariff and reconciliation rules into pre-audited WebAssembly binaries and provisions the transmission ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "rooftop-solar-net-metering-settlement-automation",
    icon: Home,
    eyebrow: "Net Metering Settlement Layer",
    headline1: "Read both directions.",
    headline2: "Bill the net accurately.",
    heroDescription:
      "Build an automated billing system where rooftop solar households are credited or charged on verified net energy exchange with the grid. The contract reads verified meter data for both directions of flow and calculates the net settlement automatically, producing an accurate bill without manual reconciliation.",
    heroCta: "Deploy Net Metering",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn error-prone monthly net metering into an automatic, verified settlement of two-way energy flow.",
    mechanics: [
      { title: "Bidirectional Metering", description: "The Energy Meter Oracle anchors both imported and exported energy for each household, so the net position rests on verified two-way flow." },
      { title: "Net Calculation", description: "The contract nets export against import and applies the net metering tariff, producing a credit or charge without manual reconciliation." },
      { title: "Automated Billing", description: "The Invoices and Billing module issues the household's bill directly from the net calculation, removing the utility's manual step where errors arose." },
      { title: "Credit Carry-Forward", description: "Surplus export credits are tracked on-chain and carried to the next cycle per policy, so a household's banked energy is never lost or miscounted." },
      { title: "Conditional Settlement", description: "Escrow and Conditional Settlement moves the net amount between household and utility once both readings are verified, closing the cycle cleanly." },
      { title: "Transparent Statement", description: "The household can inspect verified import, export, and net figures for each cycle, so a billing complaint is checked against a shared record." },
    ],
    lifecycleTitle: "The Net Metering Lifecycle",
    lifecycleSubtitle:
      "Follow a single rooftop household through a billing cycle from two-way metering to an automatically settled net bill.",
    lifecycleSteps: [
      {
        label: "Two-Way Metering",
        description:
          "The household's bidirectional meter reports both imported grid energy and exported solar. Both figures are anchored for the cycle.",
        icon: Home,
        logFilename: "cerulea_netmeter_engine.log",
        logLines: [
          { text: "[SYS] Reading bidirectional meter NM_2201...", time: "23:58:00", tone: "default" },
          { text: "[CMD] anchorFlows(import: 310, export: 240, meter: \"NM_2201\")", time: "23:58:00", tone: "primary" },
          { text: "[AUTH] Verifying meter signature both directions...", time: "23:58:01", tone: "secondary" },
          { text: "[OK] Import and export sealed for cycle.", time: "23:58:01", tone: "success" },
        ],
      },
      {
        label: "Net Calculation",
        description:
          "The contract nets export against import and applies the net metering tariff, producing the household's net position.",
        icon: Scale,
        logFilename: "cerulea_netmeter_engine.log",
        logLines: [
          { text: "[SYS] Computing net position for NM_2201...", time: "00:02:12", tone: "default" },
          { text: "[CMD] calcNet(import: 310, export: 240)", time: "00:02:12", tone: "primary" },
          { text: "[SYS] Net import 70 kWh at net metering tariff.", time: "00:02:12", tone: "secondary" },
          { text: "[OK] Net position computed from verified flow.", time: "00:02:13", tone: "success" },
        ],
      },
      {
        label: "Bill Issuance",
        description:
          "The billing module issues an accurate net bill or credit statement to the household directly from the calculation.",
        icon: FileCheck,
        logFilename: "cerulea_netmeter_engine.log",
        logLines: [
          { text: "[SYS] Issuing net bill for NM_2201...", time: "00:03:40", tone: "default" },
          { text: "[CMD] issueBill(meter: \"NM_2201\", period: \"2026-09\")", time: "00:03:40", tone: "primary" },
          { text: "[SYS] Attaching verified import and export figures...", time: "00:03:40", tone: "default" },
          { text: "[OK] Accurate net bill issued, no reconciliation.", time: "00:03:41", tone: "success" },
        ],
      },
      {
        label: "Net Settlement",
        description:
          "The net amount settles between household and utility, with any surplus credit carried to the next cycle per policy.",
        icon: Wallet,
        logFilename: "cerulea_netmeter_engine.log",
        logLines: [
          { text: "[SYS] Settling net amount for NM_2201...", time: "00:05:05", tone: "default" },
          { text: "[CMD] settleNet(meter: \"NM_2201\")", time: "00:05:05", tone: "primary" },
          { text: "[AUTH] Confirming both readings verified...", time: "00:05:06", tone: "secondary" },
          { text: "[OK] Net settled, surplus credit carried forward.", time: "00:05:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes net metering into modular contracts. Each layer meters both directions, nets the flow, bills the household, and settles the cycle automatically.",
    layers: [
      {
        title: "Bidirectional Oracle",
        subtitle: "The Two-Way Feed",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Way Feed",
          description:
            "Anchors both imported and exported energy for each household, giving the settlement a verified basis for the net position instead of a single manual reading.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract NetMeterOracle {\n  struct Flows {\n    uint256 imported;\n    uint256 exported;\n    uint256 capturedAt;\n  }\n\n  mapping(bytes32 => Flows) public cycleFlows;\n\n  function anchorFlows(bytes32 meter, uint256 imp, uint256 exp, bytes calldata sig) external {\n    require(verifyMeter(meter, sig), \"Bad meter sig\");\n    cycleFlows[meter] = Flows(imp, exp, block.timestamp);\n  }\n}",
        simAction: "Simulate Flow Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading bidirectional meter NM_2201...", tone: "default" },
          { text: "Validating signature for both directions...", tone: "default" },
          { text: "Sealing import 310 and export 240 kWh...", tone: "default" },
          { text: "Writing cycle flows to storage...", tone: "default" },
          { text: "[SUCCESS] Two-way flow anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Net Engine",
        subtitle: "The Balance Calculator",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Balance Calculator",
          description:
            "Nets export against import and applies the net metering tariff, producing a deterministic credit or charge that removes the manual reconciliation where errors crept in.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function calcNet(bytes32 meter) public view returns (int256) {\n    Flows memory f = cycleFlows[meter];\n    if (f.imported >= f.exported) return int256((f.imported - f.exported) * importTariff[meter]);\n    return -int256((f.exported - f.imported) * exportRate[meter]);\n}",
        simAction: "Simulate Net Calc",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading cycle flows for NM_2201...", tone: "default" },
          { text: "Netting export against import...", tone: "default" },
          { text: "Deriving net import of 70 kWh...", tone: "default" },
          { text: "Applying net metering tariff...", tone: "default" },
          { text: "[SUCCESS] Net position computed accurately.", tone: "success" },
        ],
      },
      {
        title: "Billing Module",
        subtitle: "The Statement Issuer",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Statement Issuer",
          description:
            "Issues the household's net bill or credit statement directly from the calculation, replacing the utility's manual billing step and the complaints it generated.",
          platformFunction: "Invoicing & Records",
        },
        codeSnippet:
          "function issueBill(bytes32 meter, bytes32 period) external returns (int256) {\n    int256 net = calcNet(meter);\n    statements[meter][period] = net;\n    emit BillIssued(meter, period, net);\n    return net;\n}",
        simAction: "Simulate Bill Issue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading net position for NM_2201...", tone: "default" },
          { text: "Attaching verified import and export...", tone: "default" },
          { text: "Composing net statement...", tone: "default" },
          { text: "Publishing to household...", tone: "default" },
          { text: "[SUCCESS] Accurate net bill issued.", tone: "success" },
        ],
      },
      {
        title: "Settlement Vault",
        subtitle: "The Credit Ledger",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Credit Ledger",
          description:
            "Settles the net amount between household and utility and carries any surplus export credit forward per policy, so banked solar energy is never lost or miscounted.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function settleNet(bytes32 meter, bytes32 period) external {\n    int256 net = statements[meter][period];\n    if (net > 0) _charge(meter, uint256(net));\n    else creditBank[meter] += uint256(-net);\n    emit NetSettled(meter, period, net);\n}",
        simAction: "Simulate Net Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading net statement for NM_2201...", tone: "default" },
          { text: "Confirming both readings verified...", tone: "default" },
          { text: "Settling net charge with household...", tone: "default" },
          { text: "Carrying surplus credit forward...", tone: "default" },
          { text: "[SUCCESS] Net settled, credit banked.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated net metering is a horizontal capability. Here is how different actors in rooftop solar put the shared ledger to work.",
    sectors: [
      { icon: Home, title: "Solar Households", description: "Receive an accurate net bill each cycle with visible import, export, and credit figures, ending disputes over estimated readings and lost export credits.", assetTypes: ["Net Statements", "Export Credits", "Cycle Bills"] },
      { icon: Building2, title: "Distribution Utilities", description: "Bill rooftop consumers from verified two-way flow automatically, cutting the manual reconciliation and complaint volume that net metering historically created.", assetTypes: ["Bidirectional Readings", "Net Settlements", "Credit Ledgers"] },
      { icon: Landmark, title: "Regulators & Nodal Agencies", description: "Audit net metering settlements from a consistent on-chain record, confirming credits and charges follow policy without collecting data from each utility.", assetTypes: ["Settlement Audits", "Policy Compliance", "Metering Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a utility's net metering billing system or reading directly from bidirectional meters, Cerulea routes both into one settlement ledger.",
    tracks: [
      {
        title: "Track A: Utility Billing Bridging",
        description:
          "For utilities on legacy net metering billing systems. Two-way readings are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Net Metering Billing", sublabel: "Utility Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Net Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Bidirectional Metering",
        description:
          "For bidirectional meters with edge connectivity. Import and export readings are signed by a device key and routed straight to the settlement contract.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Bidirectional Meter", sublabel: "Household Premises", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Reading Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Net Flow Record", icon: Home, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building net metering with bidirectional metering, net calculation, and credit carry-forward from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Metering & Billing Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects utility billing integration benchmarks. Wiring bidirectional metering, building custom net calculation and credit logic, and shipping automated billing for an average utility takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your metering and billing rules into pre-audited WebAssembly binaries and provisions the net settlement ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "nuclear-fuel-chain-of-custody-from-enrichment-to-disposal",
    icon: Biotech,
    eyebrow: "Nuclear Safeguards Layer",
    headline1: "Account for every gram.",
    headline2: "Prove custody to the IAEA.",
    heroDescription:
      "Stand up a nuclear material accounting network covering the complete fuel lifecycle from fabrication to disposal, with IAEA-accessible safeguards records and a continuously verifiable material balance. An inspection completes in days from on-chain records, with full chain of custody from fabrication to spent fuel storage.",
    heroCta: "Deploy Safeguards Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace fragmented material records with a continuously verifiable, inspector-accessible chain of custody.",
    mechanics: [
      { title: "Material Balance Ledger", description: "The Traceability Ledger records every quantity of nuclear material at each facility, so the material balance is continuously verifiable rather than reconciled after months." },
      { title: "Custody Transfer Sealing", description: "Each transfer from enrichment to fabrication to reactor to storage is co-signed and sealed, making a missing declaration structurally impossible to hide." },
      { title: "Evidence Anchoring", description: "The Evidence Chain module anchors measurement and seal-verification data for each material batch, giving inspectors a tamper-evident basis for the balance." },
      { title: "Inspector Identity", description: "The DID and VC Ledger issues verifiable credentials to IAEA inspectors, so safeguards access is authenticated without exposing the whole network." },
      { title: "Real-Time Safeguards View", description: "Inspectors query the current material balance and custody chain live, replacing months-long reconciliation of paper and internal digital records." },
      { title: "Lifecycle Continuity", description: "Fresh fuel, irradiated fuel, and spent fuel are linked as one continuous record, so custody is provable from fabrication through final disposal." },
    ],
    lifecycleTitle: "The Fuel Custody Lifecycle",
    lifecycleSubtitle:
      "Follow a single fuel assembly from fabrication through reactor use to spent fuel storage under continuous safeguards.",
    lifecycleSteps: [
      {
        label: "Fabrication Entry",
        description:
          "A fuel assembly is registered at fabrication with its material quantity and isotopic data as the origin of the custody chain.",
        icon: FlaskConical,
        logFilename: "cerulea_safeguards_engine.log",
        logLines: [
          { text: "[SYS] Registering assembly at fabrication...", time: "08:05:12", tone: "default" },
          { text: "[CMD] registerFuel { asm: \"FA_7712\", mass: 461, u235: 4.2 }", time: "08:05:12", tone: "primary" },
          { text: "[AUTH] Verifying facility and operator credential...", time: "08:05:13", tone: "secondary" },
          { text: "[OK] Assembly FA_7712 anchored at genesis.", time: "08:05:13", tone: "success" },
        ],
      },
      {
        label: "Custody Transfer",
        description:
          "The assembly moves to the reactor site. The receiving facility co-signs the material quantity before custody advances.",
        icon: Truck,
        logFilename: "cerulea_safeguards_engine.log",
        logLines: [
          { text: "[SYS] Transfer pending at reactor site RCT_2...", time: "11:40:33", tone: "default" },
          { text: "[CMD] acceptCustody(FA_7712, mass: 461, seal: \"IAEA_S1\")", time: "11:40:33", tone: "primary" },
          { text: "[SYS] Co-signature and seal verification recorded.", time: "11:40:34", tone: "default" },
          { text: "[OK] Custody transferred, balance intact.", time: "11:40:34", tone: "success" },
        ],
      },
      {
        label: "Balance Verification",
        description:
          "The material balance is recomputed across facilities. Evidence data confirms no material is unaccounted for.",
        icon: Scale,
        logFilename: "cerulea_safeguards_engine.log",
        logLines: [
          { text: "[SYS] Recomputing material balance...", time: "15:22:08", tone: "default" },
          { text: "[CMD] verifyBalance(facility: \"RCT_2\")", time: "15:22:08", tone: "primary" },
          { text: "[SYS] Reconciling anchored measurements...", time: "15:22:08", tone: "secondary" },
          { text: "[OK] Balance verified, zero discrepancy.", time: "15:22:09", tone: "success" },
        ],
      },
      {
        label: "Inspector Query",
        description:
          "An IAEA inspector with a verifiable credential queries the custody chain and material balance, completing the inspection in days.",
        icon: ShieldCheck,
        logFilename: "cerulea_safeguards_engine.log",
        logLines: [
          { text: "[SYS] Safeguards query from inspector node...", time: "09:14:50", tone: "default" },
          { text: "[CMD] resolveCustody(FA_7712, cred: \"VC_IAEA_44\")", time: "09:14:50", tone: "primary" },
          { text: "[AUTH] Verifying inspector credential...", time: "09:14:51", tone: "secondary" },
          { text: "[OK] Full chain verified. Inspection cleared in 3 days.", time: "09:14:51", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes nuclear material accounting into modular contracts. Each layer registers material, transfers custody, verifies the balance, and grants inspectors credentialed access.",
    layers: [
      {
        title: "Material Registry",
        subtitle: "The Fuel Passport",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fuel Passport",
          description:
            "The origin layer. It records each assembly's material quantity and isotopic data at fabrication, anchoring the immutable start of the safeguards chain of custody.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract MaterialRegistry {\n  struct Fuel {\n    bytes32 facility;\n    uint256 massGrams;\n    uint256 u235Bps;\n    uint256 registeredAt;\n  }\n\n  mapping(bytes32 => Fuel) public fuel;\n\n  function registerFuel(bytes32 asm, bytes32 facility, uint256 mass, uint256 u235) external onlyOperator {\n    fuel[asm] = Fuel(facility, mass, u235, block.timestamp);\n  }\n}",
        simAction: "Simulate Material Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading operator credential at fabrication...", tone: "default" },
          { text: "Recording assembly mass and enrichment...", tone: "default" },
          { text: "Anchoring FA_7712 as chain genesis...", tone: "default" },
          { text: "Writing fuel passport to storage...", tone: "default" },
          { text: "[SUCCESS] Material registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Custody Handoff",
        subtitle: "The Sealed Transfer",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Transfer",
          description:
            "Requires the receiving facility to co-sign material quantity and seal verification before custody advances, so a missing or diverted declaration cannot pass silently.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function acceptCustody(bytes32 asm, uint256 mass, bytes32 sealId) external {\n    Transfer storage t = pending[asm];\n    require(t.receiver == msg.sender, \"Not receiver\");\n    require(mass == fuel[asm].massGrams, \"Mass mismatch\");\n    custody[asm] = msg.sender;\n    emit CustodyAccepted(asm, msg.sender, sealId);\n}",
        simAction: "Simulate Custody Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reactor site reviewing transfer of FA_7712...", tone: "default" },
          { text: "Comparing declared mass against origin...", tone: "default" },
          { text: "Verifying IAEA seal integrity...", tone: "default" },
          { text: "Recording co-signature...", tone: "default" },
          { text: "[SUCCESS] Custody transferred with proof.", tone: "success" },
        ],
      },
      {
        title: "Balance Verifier",
        subtitle: "The Accounting Check",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accounting Check",
          description:
            "Recomputes the material balance across facilities from anchored measurements, turning a months-long reconciliation of missing declarations into a continuous, verifiable check.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function verifyBalance(bytes32 facility) external view returns (bool) {\n    uint256 inflow = totalReceived[facility];\n    uint256 outflow = totalShipped[facility] + onHand[facility];\n    return inflow == outflow;\n}",
        simAction: "Simulate Balance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading anchored measurements for RCT_2...", tone: "default" },
          { text: "Summing inflow and outflow...", tone: "default" },
          { text: "Reconciling against on-hand material...", tone: "default" },
          { text: "Confirming zero discrepancy...", tone: "default" },
          { text: "[SUCCESS] Material balance verified.", tone: "success" },
        ],
      },
      {
        title: "Inspector Gateway",
        subtitle: "The Credentialed Window",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Credentialed Window",
          description:
            "Authenticates IAEA inspectors by verifiable credential and resolves the full custody chain and balance for them, giving safeguards real-time access without opening the whole network.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveCustody(bytes32 asm, bytes32 credential) external view returns (Hop[] memory) {\n    require(verifyCredential(credential), \"Bad credential\");\n    return custodyChain[asm];\n}",
        simAction: "Simulate Inspector Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Inspector presenting verifiable credential...", tone: "default" },
          { text: "Validating IAEA credential...", tone: "default" },
          { text: "Assembling custody chain for FA_7712...", tone: "default" },
          { text: "Attaching material balance...", tone: "default" },
          { text: "[SUCCESS] Full custody verified for inspection.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Nuclear material accounting is a horizontal capability. Here is how different actors in the fuel cycle put the shared ledger to work.",
    sectors: [
      { icon: FlaskConical, title: "Fuel Cycle Facilities", description: "Maintain a continuous material balance across fabrication, reactor, and storage, so custody is provable at every transfer and missing declarations cannot accumulate.", assetTypes: ["Fuel Assemblies", "Custody Transfers", "Material Balances"] },
      { icon: Landmark, title: "Safeguards Regulators", description: "Give IAEA and national inspectors real-time, credentialed access to material accounting, completing inspections in days from on-chain records.", assetTypes: ["Safeguards Queries", "Balance Records", "Inspection Trails"] },
      { icon: Biotech, title: "Waste & Disposal Operators", description: "Link spent fuel to its full history from fabrication, holding a continuous custody record through interim storage and final disposal.", assetTypes: ["Spent Fuel Records", "Disposal Custody", "Lifecycle Links"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging facility material accounting systems or letting inspectors verify natively with credentials, Cerulea routes both into one safeguards ledger.",
    tracks: [
      {
        title: "Track A: Facility Accounting Bridging",
        description:
          "For fuel cycle facilities on internal accounting systems. Material movements are translated into signed on-chain custody records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Material Accounting", sublabel: "Facility Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Safeguards Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Credentialed Inspector Access",
        description:
          "For IAEA and national inspectors. A verifiable credential authenticates each safeguards query straight against the ledger.",
        connectorLabels: ["CREDENTIAL PROOF", "STATE EXECUTION"],
        nodes: [
          { label: "Inspector Node", sublabel: "Safeguards Authority", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Access Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Material Custody Record", icon: Biotech, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building nuclear material accounting with sealed custody, balance verification, and credentialed inspector access from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Balance Rules",
      ruleCount: 52,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects nuclear safeguards integration benchmarks. Wiring facility accounting systems, building custom balance logic, and shipping credentialed inspector access for an average program takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and balance rules into pre-audited WebAssembly binaries and provisions the safeguards ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "safety-inspection-and-maintenance-records-for-regulatory-audit",
    icon: ShieldCheck,
    eyebrow: "Maintenance Audit Layer",
    headline1: "Anchor every inspection.",
    headline2: "Clear the audit in days.",
    heroDescription:
      "Stand up a nuclear plant maintenance audit trail network where existing document management data is anchored on-chain and inspection credentials are verifiable. A regulatory audit team completes a pre-refueling outage review in days instead of weeks, with every maintenance record cross-referenced and complete.",
    heroCta: "Deploy Audit Trail Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn thousands of scattered maintenance documents into one cross-referenced, audit-ready record.",
    mechanics: [
      { title: "DMS Anchoring", description: "The External Data Oracles module anchors records from the plant's document management systems by digest, so existing maintenance data becomes tamper-evident without replacing the DMS." },
      { title: "Verifiable Inspection Credentials", description: "The DID and VC Ledger issues credentials to inspectors and technicians, so every record carries a provable, verifiable author." },
      { title: "Cross-Referenced Trail", description: "The Audit Logs module links records across components and systems, so an auditor follows one thread instead of cross-referencing multiple document stores by hand." },
      { title: "Completeness Check", description: "Missing or inconsistent records are surfaced before an audit, addressing the gap that can otherwise halt plant operation." },
      { title: "Real-Time Regulator Access", description: "Regulators query the anchored maintenance history directly, cutting the document retrieval that stretched audits into weeks." },
      { title: "Component History", description: "Each component's full inspection and maintenance history is retrievable on demand, supporting both audits and post-incident investigations." },
    ],
    lifecycleTitle: "The Maintenance Audit Lifecycle",
    lifecycleSubtitle:
      "Follow a single component's maintenance record from capture through credentialed sign-off to a regulator audit query.",
    lifecycleSteps: [
      {
        label: "Record Capture",
        description:
          "A maintenance record from the plant's DMS is anchored by digest. The original document stays in the DMS while its integrity is sealed on-chain.",
        icon: ScrollText,
        logFilename: "cerulea_maintaudit_engine.log",
        logLines: [
          { text: "[SYS] Anchoring DMS record for PUMP_RC_2...", time: "07:30:04", tone: "default" },
          { text: "[CMD] anchorRecord(comp: \"PUMP_RC_2\", doc: \"MNT_88213\")", time: "07:30:04", tone: "primary" },
          { text: "[AUTH] Hashing document (SHA-256)...", time: "07:30:05", tone: "secondary" },
          { text: "[OK] Record sealed, tamper-evident.", time: "07:30:05", tone: "success" },
        ],
      },
      {
        label: "Credentialed Sign-Off",
        description:
          "The inspecting technician signs off with a verifiable credential, binding a provable author to the maintenance record.",
        icon: IdCard,
        logFilename: "cerulea_maintaudit_engine.log",
        logLines: [
          { text: "[SYS] Requesting sign-off on MNT_88213...", time: "07:45:20", tone: "default" },
          { text: "[CMD] signOff(doc: \"MNT_88213\", cred: \"VC_TECH_51\")", time: "07:45:20", tone: "primary" },
          { text: "[AUTH] Verifying technician credential...", time: "07:45:21", tone: "secondary" },
          { text: "[OK] Record signed by verified inspector.", time: "07:45:21", tone: "success" },
        ],
      },
      {
        label: "Completeness Check",
        description:
          "The system checks the component's records for gaps or inconsistencies, surfacing any issue before the audit.",
        icon: FileCheck,
        logFilename: "cerulea_maintaudit_engine.log",
        logLines: [
          { text: "[SYS] Checking record set for PUMP_RC_2...", time: "12:10:33", tone: "default" },
          { text: "[CMD] checkCompleteness(comp: \"PUMP_RC_2\")", time: "12:10:33", tone: "primary" },
          { text: "[SYS] All required records present and consistent.", time: "12:10:33", tone: "default" },
          { text: "[OK] Component record set audit-ready.", time: "12:10:34", tone: "success" },
        ],
      },
      {
        label: "Regulator Audit",
        description:
          "An AERB audit team queries the cross-referenced records and completes the outage review in days rather than weeks.",
        icon: ShieldCheck,
        logFilename: "cerulea_maintaudit_engine.log",
        logLines: [
          { text: "[SYS] Audit query for pre-refueling outage...", time: "09:02:14", tone: "default" },
          { text: "[CMD] resolveHistory(comp: \"PUMP_RC_2\", cred: \"VC_AERB_9\")", time: "09:02:14", tone: "primary" },
          { text: "[SYS] Returning cross-referenced record thread...", time: "09:02:14", tone: "default" },
          { text: "[OK] Outage review completed in 2 days.", time: "09:02:15", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes maintenance auditing into modular contracts. Each layer anchors DMS records, verifies authorship, checks completeness, and exposes a cross-referenced trail.",
    layers: [
      {
        title: "Record Notary",
        subtitle: "The DMS Seal",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The DMS Seal",
          description:
            "Anchors each maintenance document from existing systems by its digest, so the plant keeps its document management stack while every record gains tamper-evident integrity.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "contract RecordNotary {\n  struct Record {\n    bytes32 component;\n    bytes32 docHash;\n    uint256 anchoredAt;\n  }\n\n  mapping(bytes32 => Record) public records;\n\n  function anchorRecord(bytes32 doc, bytes32 component, bytes32 docHash) external onlyPlant {\n    records[doc] = Record(component, docHash, block.timestamp);\n  }\n}",
        simAction: "Simulate Record Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting maintenance record from DMS...", tone: "default" },
          { text: "Computing SHA-256 digest...", tone: "default" },
          { text: "Binding record to component PUMP_RC_2...", tone: "default" },
          { text: "Sealing record on-chain...", tone: "default" },
          { text: "[SUCCESS] DMS record anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Credential Ledger",
        subtitle: "The Author Proof",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Author Proof",
          description:
            "Issues verifiable credentials to inspectors and technicians and binds a signed record to a provable author, so an auditor knows exactly who performed each inspection.",
          platformFunction: "Identity & Credentials",
        },
        codeSnippet:
          "function signOff(bytes32 doc, bytes32 credential) external {\n    require(verifyCredential(credential), \"Bad credential\");\n    signatures[doc] = Signature(credential, block.timestamp);\n    emit RecordSigned(doc, credential);\n}",
        simAction: "Simulate Credentialed Sign-Off",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Technician presenting credential VC_TECH_51...", tone: "default" },
          { text: "Validating credential...", tone: "default" },
          { text: "Binding author to record MNT_88213...", tone: "default" },
          { text: "Sealing signature...", tone: "default" },
          { text: "[SUCCESS] Record signed by verified inspector.", tone: "success" },
        ],
      },
      {
        title: "Completeness Hook",
        subtitle: "The Gap Finder",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Gap Finder",
          description:
            "Checks each component's record set against required maintenance items and surfaces any missing or inconsistent record before an audit, addressing what can otherwise halt operation.",
          platformFunction: "Compliance Enforcement",
        },
        codeSnippet:
          "function checkCompleteness(bytes32 component) external view returns (bool, bytes32[] memory missing) {\n    return _diff(requiredItems[component], presentItems[component]);\n}",
        simAction: "Simulate Completeness Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading required items for PUMP_RC_2...", tone: "default" },
          { text: "Comparing against present records...", tone: "default" },
          { text: "Checking for gaps and inconsistencies...", tone: "default" },
          { text: "Confirming record set complete...", tone: "default" },
          { text: "[SUCCESS] Component record set audit-ready.", tone: "success" },
        ],
      },
      {
        title: "Audit Window",
        subtitle: "The Cross-Reference View",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cross-Reference View",
          description:
            "Resolves a component's full, linked maintenance history for a credentialed regulator, turning a multi-week document trawl across siloed systems into a same-thread query.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveHistory(bytes32 component, bytes32 credential) external view returns (Record[] memory) {\n    require(verifyCredential(credential), \"Bad credential\");\n    return componentHistory[component];\n}",
        simAction: "Simulate Audit Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "AERB auditor presenting credential...", tone: "default" },
          { text: "Validating regulator credential...", tone: "default" },
          { text: "Assembling cross-referenced record thread...", tone: "default" },
          { text: "Returning complete component history...", tone: "default" },
          { text: "[SUCCESS] Outage review cleared in days.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anchored maintenance auditing is a horizontal capability. Here is how different actors in plant operations put the shared ledger to work.",
    sectors: [
      { icon: Factory, title: "Plant Operators", description: "Anchor existing DMS records and surface gaps before an audit, protecting operating licenses from the missing or inconsistent records that can halt a plant.", assetTypes: ["Maintenance Records", "Component Histories", "Completeness Reports"] },
      { icon: IdCard, title: "Inspection Contractors", description: "Sign off inspections with verifiable credentials, giving their work a provable author and a permanent place in the plant's audit trail.", assetTypes: ["Signed Inspections", "Technician Credentials", "Work Records"] },
      { icon: Landmark, title: "Nuclear Regulators", description: "Complete outage and safety audits in days from cross-referenced on-chain records, replacing document retrieval delays with a real-time query.", assetTypes: ["Audit Queries", "Verified Records", "Compliance Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging SAP PM and inspection software or capturing sign-offs from a field device, Cerulea routes both into one audit trail.",
    tracks: [
      {
        title: "Track A: Document System Bridging",
        description:
          "For plants on SAP PM and inspection platforms. Records are translated into signed on-chain anchors through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "SAP PM / DMS", sublabel: "Plant Record Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Maintenance Audit Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Credentialed Field Capture",
        description:
          "For technicians in the field. A credentialed device signs each inspection sign-off directly to the audit trail.",
        connectorLabels: ["CREDENTIAL PROOF", "STATE EXECUTION"],
        nodes: [
          { label: "Field Device", sublabel: "Inspection Technicians", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Sign-Off Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Signed Record Trail", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a maintenance audit trail with DMS anchoring, verifiable credentials, and completeness checking from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Record & Credential Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects regulated recordkeeping integration benchmarks. Anchoring multiple document systems, building custom credential and completeness logic, and shipping a regulator view for an average plant takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your record and credential rules into pre-audited WebAssembly binaries and provisions the audit ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "decommissioning-fund-escrow-and-milestone-based-release",
    icon: Wallet,
    eyebrow: "Decommissioning Escrow Layer",
    headline1: "Ring-fence the fund.",
    headline2: "Release on milestones only.",
    heroDescription:
      "Deploy a regulator-visible escrow fund for nuclear plant decommissioning, with funds released only against verified decommissioning milestones. The fund is held with full regulator visibility and portions are released as each milestone is reached when the plant is eventually retired.",
    heroCta: "Deploy Decommissioning Escrow",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Give regulators continuous assurance that decommissioning funds are intact and released only against verified progress.",
    mechanics: [
      { title: "Ring-Fenced Escrow", description: "Escrow and Conditional Settlement holds decommissioning contributions in a dedicated fund the operator cannot draw from except against verified milestones." },
      { title: "Milestone Gating", description: "Each release is gated on a decommissioning milestone, so funds move only when defined work is completed and confirmed decades into the future." },
      { title: "Regulator Visibility", description: "Compliance Attestations give the regulator continuous visibility into the fund balance and every release, replacing periodic assurances with a live view." },
      { title: "Verified Progress", description: "Milestone completion is attested before release, so a payment reflects real decommissioning progress rather than a claim." },
      { title: "Contribution Tracking", description: "Every contribution over the plant's operating life is recorded on-chain, so the fund's adequacy is auditable at any point in the decades-long timeline." },
      { title: "Immutable Fund History", description: "The Audit Logs module retains contributions, attestations, and releases, giving future regulators a complete, tamper-evident record of the fund." },
    ],
    lifecycleTitle: "The Decommissioning Fund Lifecycle",
    lifecycleSubtitle:
      "Follow the fund from operating-life contribution through a verified milestone to a gated release at retirement.",
    lifecycleSteps: [
      {
        label: "Fund Contribution",
        description:
          "The operator contributes to the decommissioning fund during operation. Each contribution is recorded and ring-fenced in escrow.",
        icon: Wallet,
        logFilename: "cerulea_decom_engine.log",
        logLines: [
          { text: "[SYS] Recording contribution to fund DCM_09...", time: "10:00:11", tone: "default" },
          { text: "[CMD] contribute(fund: \"DCM_09\", amount: 250000000)", time: "10:00:11", tone: "primary" },
          { text: "[AUTH] Ring-fencing contribution in escrow...", time: "10:00:12", tone: "secondary" },
          { text: "[OK] Fund balance updated and sealed.", time: "10:00:12", tone: "success" },
        ],
      },
      {
        label: "Milestone Definition",
        description:
          "Decommissioning milestones and their release amounts are defined on-chain, setting the conditions for any future draw.",
        icon: ScrollText,
        logFilename: "cerulea_decom_engine.log",
        logLines: [
          { text: "[SYS] Defining milestones for DCM_09...", time: "10:15:40", tone: "default" },
          { text: "[CMD] setMilestone(id: \"M3_DEFUEL\", release: 40000000)", time: "10:15:40", tone: "primary" },
          { text: "[SYS] Milestone gate anchored to fund...", time: "10:15:40", tone: "default" },
          { text: "[OK] Release conditions sealed.", time: "10:15:41", tone: "success" },
        ],
      },
      {
        label: "Milestone Verification",
        description:
          "At retirement, a milestone such as defueling is completed and attested. The verified attestation unlocks the release.",
        icon: FileCheck,
        logFilename: "cerulea_decom_engine.log",
        logLines: [
          { text: "[SYS] Attesting milestone M3_DEFUEL...", time: "14:30:22", tone: "default" },
          { text: "[CMD] attest(milestone: \"M3_DEFUEL\", by: \"REG_9\")", time: "14:30:22", tone: "primary" },
          { text: "[AUTH] Verifying regulator attestation...", time: "14:30:23", tone: "secondary" },
          { text: "[OK] Milestone verified, release unlocked.", time: "14:30:23", tone: "success" },
        ],
      },
      {
        label: "Gated Release",
        description:
          "The gated portion of the fund is released to the decommissioning contractor. The regulator sees the balance update live.",
        icon: Scale,
        logFilename: "cerulea_decom_engine.log",
        logLines: [
          { text: "[SYS] Releasing gated amount for M3_DEFUEL...", time: "14:32:05", tone: "default" },
          { text: "[CMD] release(fund: \"DCM_09\", milestone: \"M3_DEFUEL\")", time: "14:32:05", tone: "primary" },
          { text: "[SYS] Updating fund balance for regulator...", time: "14:32:05", tone: "default" },
          { text: "[OK] Portion released against verified milestone.", time: "14:32:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes decommissioning escrow into modular contracts. Each layer holds contributions, defines milestones, verifies progress, and releases funds under regulator visibility.",
    layers: [
      {
        title: "Fund Vault",
        subtitle: "The Ring-Fence",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ring-Fence",
          description:
            "Holds decommissioning contributions in a dedicated escrow the operator cannot draw from freely, giving regulators assurance the fund is intact across a decades-long horizon.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract DecomVault {\n  mapping(bytes32 => uint256) public balance;\n\n  function contribute(bytes32 fund) external payable {\n    balance[fund] += msg.value;\n    emit Contributed(fund, msg.value, block.timestamp);\n  }\n}",
        simAction: "Simulate Fund Contribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving operator contribution...", tone: "default" },
          { text: "Ring-fencing amount in escrow...", tone: "default" },
          { text: "Updating fund DCM_09 balance...", tone: "default" },
          { text: "Sealing contribution record...", tone: "default" },
          { text: "[SUCCESS] Contribution ring-fenced on-chain.", tone: "success" },
        ],
      },
      {
        title: "Milestone Registry",
        subtitle: "The Release Gate",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Release Gate",
          description:
            "Defines each decommissioning milestone and its release amount, encoding the exact conditions under which any portion of the fund may ever be drawn.",
          platformFunction: "Logic & Automation",
        },
        codeSnippet:
          "function setMilestone(bytes32 fund, bytes32 id, uint256 releaseAmount) external onlyRegulator {\n    milestones[fund][id] = Milestone(releaseAmount, false, false);\n    emit MilestoneSet(fund, id, releaseAmount);\n}",
        simAction: "Simulate Milestone Definition",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator defining milestone M3_DEFUEL...", tone: "default" },
          { text: "Setting release amount...", tone: "default" },
          { text: "Anchoring gate to fund DCM_09...", tone: "default" },
          { text: "Sealing release conditions...", tone: "default" },
          { text: "[SUCCESS] Milestone gate anchored.", tone: "success" },
        ],
      },
      {
        title: "Attestation Hook",
        subtitle: "The Progress Proof",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Progress Proof",
          description:
            "Requires a regulator attestation that a milestone is complete before its release can unlock, ensuring funds move against verified decommissioning progress rather than a claim.",
          platformFunction: "Compliance Enforcement",
        },
        codeSnippet:
          "function attest(bytes32 fund, bytes32 id) external onlyRegulator {\n    Milestone storage m = milestones[fund][id];\n    require(!m.attested, \"Already attested\");\n    m.attested = true;\n    emit MilestoneAttested(fund, id, msg.sender);\n}",
        simAction: "Simulate Milestone Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator reviewing defueling completion...", tone: "default" },
          { text: "Confirming milestone work verified...", tone: "default" },
          { text: "Recording attestation...", tone: "default" },
          { text: "Unlocking release gate...", tone: "default" },
          { text: "[SUCCESS] Milestone verified, release unlocked.", tone: "success" },
        ],
      },
      {
        title: "Release Controller",
        subtitle: "The Gated Payout",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Gated Payout",
          description:
            "Releases only the attested milestone's amount to the decommissioning contractor and updates the balance visible to the regulator, so every draw is tied to verified progress.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function release(bytes32 fund, bytes32 id) external {\n    Milestone storage m = milestones[fund][id];\n    require(m.attested && !m.released, \"Not releasable\");\n    m.released = true;\n    balance[fund] -= m.amount;\n    payable(contractor[fund]).transfer(m.amount);\n}",
        simAction: "Simulate Gated Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming M3_DEFUEL attested...", tone: "default" },
          { text: "Checking release not already made...", tone: "default" },
          { text: "Releasing gated amount to contractor...", tone: "default" },
          { text: "Updating balance for regulator...", tone: "default" },
          { text: "[SUCCESS] Portion released on verified milestone.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Milestone-gated decommissioning escrow is a horizontal capability. Here is how different actors in the fund's lifecycle put the shared ledger to work.",
    sectors: [
      { icon: Factory, title: "Plant Operators", description: "Contribute to a ring-fenced fund over the operating life and draw against verified milestones at retirement, demonstrating fund adequacy without discretionary access.", assetTypes: ["Fund Contributions", "Milestone Draws", "Balance Records"] },
      { icon: Landmark, title: "Nuclear Regulators", description: "Watch the fund balance and every release live, gaining continuous assurance that decommissioning money is intact and used only for verified work.", assetTypes: ["Fund Visibility", "Milestone Attestations", "Release Audits"] },
      { icon: Handshake, title: "Decommissioning Contractors", description: "Receive milestone-gated payments the moment work is attested, with a clear on-chain link between completed decommissioning and funds released.", assetTypes: ["Milestone Payments", "Work Attestations", "Settlement Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an operator's treasury systems or letting regulators attest milestones natively, Cerulea routes both into one decommissioning escrow.",
    tracks: [
      {
        title: "Track A: Treasury System Bridging",
        description:
          "For operators on legacy treasury and fund accounting systems. Contributions are translated into signed on-chain escrow records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Treasury Systems", sublabel: "Operator Finance", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Contribution Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Decommissioning Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Credentialed Regulator Attestation",
        description:
          "For regulators attesting milestones. A verifiable credential authenticates each attestation and release directly against the escrow.",
        connectorLabels: ["CREDENTIAL PROOF", "STATE EXECUTION"],
        nodes: [
          { label: "Regulator Node", sublabel: "Nuclear Authority", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Gated Fund Record", icon: Wallet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building decommissioning escrow with ring-fenced funds, milestone gating, and regulator visibility from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Milestone & Release Rules",
      ruleCount: 45,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects regulated escrow integration benchmarks. Wiring treasury systems, building custom milestone-gating logic, and shipping a regulator visibility layer for an average fund takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your milestone and release rules into pre-audited WebAssembly binaries and provisions the escrow ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "joint-venture-cost-and-revenue-sharing-across-exploration-partners",
    icon: PieChart,
    eyebrow: "Joint Venture Settlement Layer",
    headline1: "Split costs by contract.",
    headline2: "Give partners live visibility.",
    heroDescription:
      "Deliver a joint venture financial management network where cost allocation and revenue distribution are automated per the JV agreement and every partner has real-time visibility. A minority partner queries their cost exposure and revenue position directly from the chain, eliminating quarterly reconciliation disputes.",
    heroCta: "Deploy JV Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace months of manual reconciliation with automated, contract-driven cost and revenue sharing.",
    mechanics: [
      { title: "Agreement-Encoded Splits", description: "The Logic and Actions Editor encodes each partner's working interest, so cost allocation and revenue distribution follow the JV agreement automatically." },
      { title: "Shared Cost Ledger", description: "The Traceability Ledger records every cost entry against the venture, giving all partners one version of the truth instead of separate operator books." },
      { title: "Automated Distribution", description: "Escrow and Conditional Settlement distributes revenue and settles cash calls per working interest, removing the manual quarterly reconciliation." },
      { title: "Minority Partner Visibility", description: "Every partner, including minority holders, queries their real-time cost exposure and revenue position directly, ending information asymmetry." },
      { title: "Cash Call Automation", description: "Cash calls are computed from allocated costs and settled on-chain, so disputes over who owes what are resolved before they arise." },
      { title: "Auditable Venture History", description: "The full cost and revenue history is retained on-chain, giving partners and auditors a verifiable record of the venture's finances." },
    ],
    lifecycleTitle: "The Joint Venture Lifecycle",
    lifecycleSubtitle:
      "Follow a single cost entry from operator posting through automated allocation to a minority partner's live query.",
    lifecycleSteps: [
      {
        label: "Cost Posting",
        description:
          "The operator posts a venture cost. The entry is recorded on the shared ledger against the joint venture.",
        icon: ScrollText,
        logFilename: "cerulea_jv_engine.log",
        logLines: [
          { text: "[SYS] Posting cost to venture JV_21...", time: "09:12:04", tone: "default" },
          { text: "[CMD] postCost(jv: \"JV_21\", amount: 1800000, cat: \"DRILLING\")", time: "09:12:04", tone: "primary" },
          { text: "[AUTH] Verifying operator authorization...", time: "09:12:05", tone: "secondary" },
          { text: "[OK] Cost entry sealed on shared ledger.", time: "09:12:05", tone: "success" },
        ],
      },
      {
        label: "Interest Allocation",
        description:
          "The contract allocates the cost across partners by working interest, exactly as the JV agreement specifies.",
        icon: PieChart,
        logFilename: "cerulea_jv_engine.log",
        logLines: [
          { text: "[SYS] Allocating cost across JV_21 partners...", time: "09:12:20", tone: "default" },
          { text: "[CMD] allocate(cost: 1800000, basis: \"WORKING_INTEREST\")", time: "09:12:20", tone: "primary" },
          { text: "[SYS] Splitting 45/30/25 per agreement...", time: "09:12:20", tone: "secondary" },
          { text: "[OK] Allocation computed per contract.", time: "09:12:21", tone: "success" },
        ],
      },
      {
        label: "Cash Call Settlement",
        description:
          "Cash calls are issued and settled per partner from the allocation, removing the disputed manual reconciliation.",
        icon: Wallet,
        logFilename: "cerulea_jv_engine.log",
        logLines: [
          { text: "[SYS] Issuing cash calls for JV_21...", time: "09:15:33", tone: "default" },
          { text: "[CMD] settleCashCall(jv: \"JV_21\")", time: "09:15:33", tone: "primary" },
          { text: "[AUTH] Confirming partner balances...", time: "09:15:34", tone: "secondary" },
          { text: "[OK] Cash calls settled automatically.", time: "09:15:34", tone: "success" },
        ],
      },
      {
        label: "Partner Query",
        description:
          "A minority partner queries their live cost exposure and revenue position, replacing a quarterly reconciliation dispute.",
        icon: Search,
        logFilename: "cerulea_jv_engine.log",
        logLines: [
          { text: "[SYS] Position query from minority partner...", time: "16:40:11", tone: "default" },
          { text: "[CMD] resolvePosition(jv: \"JV_21\", partner: \"P_25\")", time: "16:40:11", tone: "primary" },
          { text: "[SYS] Assembling live cost and revenue position...", time: "16:40:11", tone: "default" },
          { text: "[OK] Real-time position returned, dispute avoided.", time: "16:40:12", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes joint venture finance into modular contracts. Each layer posts costs, allocates by interest, settles cash calls, and exposes each partner's live position.",
    layers: [
      {
        title: "Cost Ledger",
        subtitle: "The Shared Book",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Book",
          description:
            "Records every venture cost on one ledger all partners read, replacing separate operator books with a single version of the truth that ends reconciliation disputes.",
          platformFunction: "Records & Reconciliation",
        },
        codeSnippet:
          "contract JvCostLedger {\n  struct Cost {\n    uint256 amount;\n    bytes32 category;\n    uint256 postedAt;\n  }\n\n  mapping(bytes32 => Cost[]) public costs;\n\n  function postCost(bytes32 jv, uint256 amount, bytes32 cat) external onlyOperator {\n    costs[jv].push(Cost(amount, cat, block.timestamp));\n  }\n}",
        simAction: "Simulate Cost Posting",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying operator authorization for JV_21...", tone: "default" },
          { text: "Recording drilling cost entry...", tone: "default" },
          { text: "Appending to shared cost ledger...", tone: "default" },
          { text: "Sealing entry...", tone: "default" },
          { text: "[SUCCESS] Cost posted to shared book.", tone: "success" },
        ],
      },
      {
        title: "Allocation Engine",
        subtitle: "The Interest Splitter",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Interest Splitter",
          description:
            "Splits each cost and revenue item across partners by their working interest exactly as the JV agreement specifies, so allocation is deterministic rather than negotiated each quarter.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function allocate(bytes32 jv, uint256 amount) public view returns (uint256[] memory shares) {\n    uint256[] memory wi = workingInterest[jv];\n    shares = new uint256[](wi.length);\n    for (uint256 i = 0; i < wi.length; i++) {\n        shares[i] = (amount * wi[i]) / 1e4;\n    }\n}",
        simAction: "Simulate Interest Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading working interests for JV_21...", tone: "default" },
          { text: "Reading cost of 1.8M...", tone: "default" },
          { text: "Splitting 45/30/25 per agreement...", tone: "default" },
          { text: "Computing each partner's share...", tone: "default" },
          { text: "[SUCCESS] Cost allocated per contract.", tone: "success" },
        ],
      },
      {
        title: "Cash Call Vault",
        subtitle: "The Auto Settler",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Settler",
          description:
            "Issues and settles cash calls per partner from the allocation, moving funds on-chain so disputes over who owes what are resolved before a quarterly reconciliation could arise.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function settleCashCall(bytes32 jv) external {\n    uint256[] memory shares = allocate(jv, pendingCost[jv]);\n    for (uint256 i = 0; i < shares.length; i++) {\n        _debitPartner(jv, i, shares[i]);\n    }\n    pendingCost[jv] = 0;\n    emit CashCallSettled(jv);\n}",
        simAction: "Simulate Cash Call Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing cash call per partner...", tone: "default" },
          { text: "Confirming partner balances...", tone: "default" },
          { text: "Debiting each working interest...", tone: "default" },
          { text: "Recording settlement on-chain...", tone: "default" },
          { text: "[SUCCESS] Cash calls settled automatically.", tone: "success" },
        ],
      },
      {
        title: "Position Window",
        subtitle: "The Partner View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Partner View",
          description:
            "Lets any partner, including minority holders, query their live cost exposure and revenue position, ending the information asymmetry that drove quarterly reconciliation disputes.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolvePosition(bytes32 jv, address partner) external view returns (int256 net) {\n    return int256(revenueShare[jv][partner]) - int256(costShare[jv][partner]);\n}",
        simAction: "Simulate Partner Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Minority partner opening position view...", tone: "default" },
          { text: "Summing allocated costs for P_25...", tone: "default" },
          { text: "Summing revenue share...", tone: "default" },
          { text: "Computing net position...", tone: "default" },
          { text: "[SUCCESS] Live position returned to partner.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated JV settlement is a horizontal capability. Here is how different actors in an exploration venture put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Operating Partners", description: "Post costs and distribute revenue per the agreement automatically, closing the venture's books continuously instead of through disputed quarterly reconciliations.", assetTypes: ["Cost Entries", "Revenue Distributions", "Cash Calls"] },
      { icon: PieChart, title: "Minority Partners", description: "See real-time cost exposure and revenue position directly, gaining the visibility that manual operator reporting never provided.", assetTypes: ["Live Positions", "Interest Shares", "Statement Queries"] },
      { icon: FileCheck, title: "Auditors & Financiers", description: "Verify venture finances from one shared on-chain history, streamlining audits and financing due diligence across the partnership.", assetTypes: ["Venture Audits", "Cost Trails", "Distribution Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging the operator's ERP and accounting systems or letting partners query natively, Cerulea routes both into one venture ledger.",
    tracks: [
      {
        title: "Track A: Operator ERP Bridging",
        description:
          "For operators on legacy ERP and JV accounting systems. Cost and revenue entries are translated into signed on-chain records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "ERP / JV Accounting", sublabel: "Operator Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Entry Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Joint Venture Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Partner Access",
        description:
          "For partners querying directly. A signed node reads live positions and confirms allocations straight from the shared ledger.",
        connectorLabels: ["PARTNER SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Partner Node / Wallet", sublabel: "JV Members", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Settlement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Venture Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building JV settlement with agreement-encoded splits, cash call automation, and partner visibility from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Allocation & Settlement Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects joint venture accounting integration benchmarks. Wiring operator ERP, building custom allocation and cash call logic, and shipping partner visibility for an average venture takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your allocation and settlement rules into pre-audited WebAssembly binaries and provisions the venture ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "environmental-impact-and-spill-incident-records-for-regulatory-complia",
    icon: Droplet,
    eyebrow: "Environmental Compliance Layer",
    headline1: "Anchor the sensor data.",
    headline2: "Make underreporting impossible.",
    heroDescription:
      "Build an immutable environmental compliance record network where sensor data is anchored continuously and incidents cannot be underreported, with real-time regulator access. A surprise inspection completes in hours using on-chain environmental records, with all sensor data verified and unaltered.",
    heroCta: "Deploy Environmental Compliance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fragmented, alterable incident records into a continuous, tamper-evident environmental compliance feed.",
    mechanics: [
      { title: "Continuous Sensor Anchoring", description: "External Data Oracles anchor environmental sensor data continuously, so the compliance record is a live feed rather than a periodically compiled report." },
      { title: "Incident Sealing", description: "The Audit Logs module seals each spill or exceedance event the moment it is detected, making underreporting structurally impossible once a threshold is crossed." },
      { title: "Regulator Attestation", description: "Compliance Attestations give the pollution control board real-time access to the environmental record, replacing document requests with a live query." },
      { title: "Tamper-Evident History", description: "Every reading and incident is bound by its digest, so any attempt to alter or delete a record breaks its hash and is immediately detectable." },
      { title: "Threshold Detection", description: "Sensor readings are evaluated against environmental limits automatically, so an exceedance is captured and stamped without relying on operator disclosure." },
      { title: "Instant Audit Retrieval", description: "A regulator retrieves any window of environmental data on demand, cutting a surprise inspection from days of document retrieval to hours." },
    ],
    lifecycleTitle: "The Environmental Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow environmental data from continuous sensing through incident detection to a surprise inspection cleared in hours.",
    lifecycleSteps: [
      {
        label: "Sensor Streaming",
        description:
          "Environmental sensors stream readings to the ledger continuously. Each reading is anchored with its timestamp at source.",
        icon: Radio,
        logFilename: "cerulea_envcomp_engine.log",
        logLines: [
          { text: "[SYS] Streaming environmental sensors at site OIL_7...", time: "04:00:00", tone: "default" },
          { text: "[CMD] anchorReading(site: \"OIL_7\", param: \"HYDROCARBON\", ppm: 3)", time: "04:00:00", tone: "primary" },
          { text: "[AUTH] Verifying sensor signature...", time: "04:00:01", tone: "secondary" },
          { text: "[OK] Reading sealed continuously.", time: "04:00:01", tone: "success" },
        ],
      },
      {
        label: "Incident Detection",
        description:
          "A reading crosses an environmental limit. The contract seals a spill incident the instant it is detected.",
        icon: Droplet,
        logFilename: "cerulea_envcomp_engine.log",
        logLines: [
          { text: "[SYS] Evaluating OIL_7 against limits...", time: "13:44:12", tone: "default" },
          { text: "[CMD] checkLimit(param: \"HYDROCARBON\", ppm: 58, limit: 15)", time: "13:44:12", tone: "primary" },
          { text: "[SYS] Exceedance detected, sealing incident...", time: "13:44:12", tone: "error" },
          { text: "[OK] Spill incident SPL_2290 recorded.", time: "13:44:13", tone: "success" },
        ],
      },
      {
        label: "Regulator Notification",
        description:
          "The pollution control board is alerted from the same record, so the incident cannot be underreported or delayed.",
        icon: FileCheck,
        logFilename: "cerulea_envcomp_engine.log",
        logLines: [
          { text: "[SYS] Dispatching SPL_2290 to PCB node...", time: "13:44:30", tone: "default" },
          { text: "[CMD] notifyRegulator(SPL_2290)", time: "13:44:30", tone: "primary" },
          { text: "[SYS] Incident visible to regulator in real time.", time: "13:44:30", tone: "default" },
          { text: "[OK] Underreporting structurally prevented.", time: "13:44:31", tone: "success" },
        ],
      },
      {
        label: "Surprise Inspection",
        description:
          "A regulator runs a surprise inspection, querying the anchored environmental data directly and clearing it in hours.",
        icon: ShieldCheck,
        logFilename: "cerulea_envcomp_engine.log",
        logLines: [
          { text: "[SYS] Surprise inspection query for OIL_7...", time: "10:15:05", tone: "default" },
          { text: "[CMD] resolveWindow(site: \"OIL_7\", period: \"90d\")", time: "10:15:05", tone: "primary" },
          { text: "[SYS] Returning verified, unaltered sensor data...", time: "10:15:05", tone: "default" },
          { text: "[OK] Inspection completed in 4 hours.", time: "10:15:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes environmental compliance into modular contracts. Each layer streams sensor data, detects incidents, notifies the regulator, and exposes an unalterable record.",
    layers: [
      {
        title: "Sensor Oracle",
        subtitle: "The Continuous Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Continuous Feed",
          description:
            "Anchors environmental readings continuously at source, turning a periodically compiled report into a live, tamper-evident feed that cannot be assembled selectively after an incident.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract SensorOracle {\n  struct Reading {\n    bytes32 site;\n    bytes32 param;\n    uint256 value;\n    uint256 capturedAt;\n  }\n\n  mapping(uint256 => Reading) public feed;\n\n  function anchorReading(bytes32 site, bytes32 param, uint256 value, bytes calldata sig) external {\n    require(verifySensor(site, sig), \"Bad sensor sig\");\n    feed[block.number] = Reading(site, param, value, block.timestamp);\n  }\n}",
        simAction: "Simulate Reading Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading environmental sensor at OIL_7...", tone: "default" },
          { text: "Validating sensor signature...", tone: "default" },
          { text: "Sealing hydrocarbon reading...", tone: "default" },
          { text: "Writing to continuous feed...", tone: "default" },
          { text: "[SUCCESS] Sensor data anchored at source.", tone: "success" },
        ],
      },
      {
        title: "Incident Guard",
        subtitle: "The Threshold Seal",
        icon: Droplet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Threshold Seal",
          description:
            "Evaluates each reading against environmental limits and seals a spill incident the moment one is crossed, so underreporting is impossible without relying on operator disclosure.",
          platformFunction: "Compliance Enforcement",
        },
        codeSnippet:
          "function checkLimit(bytes32 site, bytes32 param, uint256 value, uint256 limit) external returns (bool) {\n    if (value > limit) {\n        incidents[site].push(Incident(param, value, limit, block.timestamp));\n        emit IncidentSealed(site, param, value);\n        return false;\n    }\n    return true;\n}",
        simAction: "Simulate Incident Detection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading limits for site OIL_7...", tone: "default" },
          { text: "Comparing 58 ppm against 15 ppm limit...", tone: "default" },
          { text: "Exceedance confirmed, sealing incident...", tone: "default" },
          { text: "Stamping incident with timestamp...", tone: "default" },
          { text: "[SUCCESS] Spill incident recorded, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Notification Hook",
        subtitle: "The Regulator Alert",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Regulator Alert",
          description:
            "Pushes each sealed incident to the pollution control board in real time, so an event reaches the regulator the moment it happens rather than through a delayed or omitted disclosure.",
          platformFunction: "Notification & Compliance",
        },
        codeSnippet:
          "function notifyRegulator(bytes32 incidentId) external {\n    require(incidents_[incidentId].sealedAt != 0, \"No incident\");\n    _pushToRegulator(incidentId, block.timestamp);\n    emit RegulatorNotified(incidentId);\n}",
        simAction: "Simulate Regulator Notification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing incident SPL_2290 for PCB...", tone: "default" },
          { text: "Confirming incident sealed...", tone: "default" },
          { text: "Pushing to regulator node...", tone: "default" },
          { text: "Recording notification...", tone: "default" },
          { text: "[SUCCESS] Incident surfaced in real time.", tone: "success" },
        ],
      },
      {
        title: "Audit Window",
        subtitle: "The Inspection View",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Inspection View",
          description:
            "Returns any window of verified environmental data to a regulator on demand, turning a surprise inspection that took days of document retrieval into a query resolved in hours.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveWindow(bytes32 site, uint256 fromBlock) external view returns (Reading[] memory, Incident[] memory) {\n    return (_readingsSince(site, fromBlock), incidents[site]);\n}",
        simAction: "Simulate Inspection Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator opening surprise inspection...", tone: "default" },
          { text: "Fetching 90 days of sensor data...", tone: "default" },
          { text: "Confirming readings unaltered...", tone: "default" },
          { text: "Attaching sealed incidents...", tone: "default" },
          { text: "[SUCCESS] Inspection cleared in 4 hours.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Immutable environmental compliance is a horizontal capability. Here is how different actors in exploration operations put the shared ledger to work.",
    sectors: [
      { icon: Droplet, title: "Exploration Operators", description: "Anchor sensor data continuously and demonstrate compliance from a live record, replacing fragmented incident logs that were easy to alter or omit.", assetTypes: ["Sensor Feeds", "Incident Records", "Compliance Windows"] },
      { icon: Landmark, title: "Pollution Control Boards", description: "Access the environmental record in real time and run surprise inspections that clear in hours, moving oversight from document requests to a live query.", assetTypes: ["Live Environmental Data", "Incident Alerts", "Inspection Trails"] },
      { icon: Globe, title: "Communities & NGOs", description: "Rely on a tamper-evident record of environmental performance, so spill events cannot be quietly underreported near sensitive habitats and settlements.", assetTypes: ["Public Records", "Verified Incidents", "Impact Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging site SCADA and environmental monitoring systems or reading directly from field sensors, Cerulea routes both into one compliance ledger.",
    tracks: [
      {
        title: "Track A: Monitoring System Bridging",
        description:
          "For operators on legacy environmental monitoring systems. Sensor data is translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "SCADA / Monitoring", sublabel: "Site Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Environmental Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Field Sensor Capture",
        description:
          "For field sensors with edge connectivity. Each reading is signed by a device key and routed straight to the compliance ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field Sensor / Edge", sublabel: "Site Hardware", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Reading Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Environmental Feed", icon: Droplet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building environmental compliance with continuous anchoring, incident sealing, and instant audit retrieval from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Sensor & Incident Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects environmental monitoring integration benchmarks. Wiring monitoring systems, building custom incident and threshold logic, and shipping a regulator view for an average operation takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your sensor and incident rules into pre-audited WebAssembly binaries and provisions the compliance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "seismic-survey-data-licensing-and-royalty-to-data-providers",
    icon: Copyright,
    eyebrow: "Data Licensing Royalty Layer",
    headline1: "License the survey.",
    headline2: "Pay the provider every use.",
    heroDescription:
      "Run a licensing system where exploration companies pay automatic royalties to seismic data providers each time the data is licensed for use. Each licensing event is anchored against the original survey data and the royalty owed is calculated and paid to the provider automatically.",
    heroCta: "Deploy Licensing Royalties",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn manual license tracking into automatic royalty payment on every use of seismic survey data.",
    mechanics: [
      { title: "Survey Provenance", description: "The Provenance Notary binds each seismic dataset to its original provider, so every future license traces back to the survey it came from." },
      { title: "License Event Anchoring", description: "The Royalty Standard module records each licensing event against the dataset, capturing who licensed it, when, and on what terms." },
      { title: "Automatic Royalty Calculation", description: "The Royalty Clearing module computes the royalty owed to the provider from the license terms, so payment is never missed or miscalculated." },
      { title: "Per-Use Payment", description: "Royalties are paid to the provider each time the data is licensed, replacing manual reconciliation across a dataset's long licensing life." },
      { title: "Multi-License Tracking", description: "A single survey licensed to many exploration companies is tracked as parallel license lines, each with its own royalty stream." },
      { title: "Provider Transparency", description: "The data provider sees every license and royalty payment on-chain, so usage of their expensive-to-collect survey is fully accounted for." },
    ],
    lifecycleTitle: "The Licensing Royalty Lifecycle",
    lifecycleSubtitle:
      "Follow a single seismic dataset from registration through a new license to an automatic royalty payment.",
    lifecycleSteps: [
      {
        label: "Survey Registration",
        description:
          "A seismic survey is registered and bound to its provider. The dataset becomes the anchor for all future licenses.",
        icon: Copyright,
        logFilename: "cerulea_seismic_engine.log",
        logLines: [
          { text: "[SYS] Registering survey SRV_KG_12...", time: "08:20:03", tone: "default" },
          { text: "[CMD] registerSurvey { id: \"SRV_KG_12\", provider: \"GEO_A\" }", time: "08:20:03", tone: "primary" },
          { text: "[AUTH] Binding dataset to provider...", time: "08:20:04", tone: "secondary" },
          { text: "[OK] Survey anchored at block 10220441.", time: "08:20:04", tone: "success" },
        ],
      },
      {
        label: "License Grant",
        description:
          "An exploration company licenses the dataset. The licensing event is anchored against the survey with its terms.",
        icon: ScrollText,
        logFilename: "cerulea_seismic_engine.log",
        logLines: [
          { text: "[SYS] Recording license for SRV_KG_12...", time: "11:05:20", tone: "default" },
          { text: "[CMD] grantLicense(survey: \"SRV_KG_12\", to: \"EXP_5\", rate: 8)", time: "11:05:20", tone: "primary" },
          { text: "[SYS] License terms sealed against survey.", time: "11:05:20", tone: "default" },
          { text: "[OK] License LIC_772 anchored.", time: "11:05:21", tone: "success" },
        ],
      },
      {
        label: "Royalty Calculation",
        description:
          "The royalty owed to the provider is computed from the license terms as the data is put to use.",
        icon: Scale,
        logFilename: "cerulea_seismic_engine.log",
        logLines: [
          { text: "[SYS] Computing royalty for LIC_772...", time: "11:06:44", tone: "default" },
          { text: "[CMD] calcRoyalty(license: \"LIC_772\", fee: 5000000)", time: "11:06:44", tone: "primary" },
          { text: "[SYS] Applying 8% provider royalty rate...", time: "11:06:44", tone: "secondary" },
          { text: "[OK] Royalty computed from license terms.", time: "11:06:45", tone: "success" },
        ],
      },
      {
        label: "Automatic Payment",
        description:
          "The royalty is paid to the provider automatically, accounting for every use of the survey data.",
        icon: Wallet,
        logFilename: "cerulea_seismic_engine.log",
        logLines: [
          { text: "[SYS] Settling royalty for LIC_772...", time: "11:07:55", tone: "default" },
          { text: "[CMD] payRoyalty(provider: \"GEO_A\", amount: royalty)", time: "11:07:55", tone: "primary" },
          { text: "[AUTH] Confirming license anchor...", time: "11:07:56", tone: "secondary" },
          { text: "[OK] Provider paid automatically for use.", time: "11:07:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes data licensing royalties into modular contracts. Each layer registers the survey, grants licenses, calculates royalties, and pays the provider automatically.",
    layers: [
      {
        title: "Survey Registry",
        subtitle: "The Data Passport",
        icon: Copyright,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Data Passport",
          description:
            "Binds each seismic dataset to its original provider, giving every future license a provable link back to the survey and the party owed royalties.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SurveyRegistry {\n  struct Survey {\n    address provider;\n    bytes32 dataHash;\n    uint256 registeredAt;\n  }\n\n  mapping(bytes32 => Survey) public surveys;\n\n  function registerSurvey(bytes32 id, bytes32 dataHash) external {\n    surveys[id] = Survey(msg.sender, dataHash, block.timestamp);\n  }\n}",
        simAction: "Simulate Survey Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading provider identity GEO_A...", tone: "default" },
          { text: "Hashing seismic dataset...", tone: "default" },
          { text: "Binding data to provider...", tone: "default" },
          { text: "Writing survey passport to storage...", tone: "default" },
          { text: "[SUCCESS] Survey registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "License Ledger",
        subtitle: "The Usage Record",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Usage Record",
          description:
            "Anchors each licensing event against the survey with its terms, tracking a dataset licensed to many companies as parallel license lines over its long life.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function grantLicense(bytes32 survey, address to, uint256 rateBps) external returns (bytes32) {\n    bytes32 licId = keccak256(abi.encode(survey, to, block.timestamp));\n    licenses[licId] = License(survey, to, rateBps, block.timestamp);\n    emit LicenseGranted(survey, to, licId);\n    return licId;\n}",
        simAction: "Simulate License Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording license to EXP_5...", tone: "default" },
          { text: "Sealing license terms against survey...", tone: "default" },
          { text: "Opening parallel license line...", tone: "default" },
          { text: "Anchoring license LIC_772...", tone: "default" },
          { text: "[SUCCESS] Licensing event recorded.", tone: "success" },
        ],
      },
      {
        title: "Royalty Engine",
        subtitle: "The Fee Calculator",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fee Calculator",
          description:
            "Computes the royalty owed to the provider from each license's terms, so payment is never missed or miscalculated across many concurrent licenses of the same survey.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function calcRoyalty(bytes32 licId, uint256 licenseFee) public view returns (uint256) {\n    return (licenseFee * licenses[licId].rateBps) / 1e4;\n}",
        simAction: "Simulate Royalty Calc",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading terms for license LIC_772...", tone: "default" },
          { text: "Reading license fee...", tone: "default" },
          { text: "Applying 8% provider rate...", tone: "default" },
          { text: "Computing royalty owed...", tone: "default" },
          { text: "[SUCCESS] Royalty computed from terms.", tone: "success" },
        ],
      },
      {
        title: "Payment Router",
        subtitle: "The Auto Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Payout",
          description:
            "Pays the calculated royalty to the provider on each use of the data, replacing the manual reconciliation that made tracking royalties across a survey's life so labour intensive.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function payRoyalty(bytes32 licId, uint256 licenseFee) external payable {\n    uint256 royalty = calcRoyalty(licId, licenseFee);\n    address provider = surveys[licenses[licId].survey].provider;\n    payable(provider).transfer(royalty);\n    emit RoyaltyPaid(licId, provider, royalty);\n}",
        simAction: "Simulate Royalty Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading royalty owed on LIC_772...", tone: "default" },
          { text: "Resolving provider GEO_A...", tone: "default" },
          { text: "Transferring royalty to provider...", tone: "default" },
          { text: "Recording payment on-chain...", tone: "default" },
          { text: "[SUCCESS] Provider paid automatically for use.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automatic licensing royalties are a horizontal capability. Here is how different actors in the seismic data market put the shared ledger to work.",
    sectors: [
      { icon: Copyright, title: "Seismic Data Providers", description: "Get paid a royalty on every use of expensive-to-collect survey data, with full visibility into who licensed it and when across its long commercial life.", assetTypes: ["Survey Datasets", "Royalty Streams", "License Records"] },
      { icon: Search, title: "Exploration Companies", description: "License datasets with terms and payments handled automatically, removing manual royalty accounting and disputes over past usage.", assetTypes: ["Data Licenses", "Usage Terms", "Royalty Payments"] },
      { icon: FileCheck, title: "Data Brokers & Auditors", description: "Verify licensing and royalty flows from one on-chain record, supporting brokerage and audit of seismic data rights without manual reconciliation.", assetTypes: ["License Audits", "Royalty Trails", "Provenance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a provider's data management systems or letting exploration companies license natively, Cerulea routes both into one royalty ledger.",
    tracks: [
      {
        title: "Track A: Data Management Bridging",
        description:
          "For providers on legacy data management systems. Survey and license records are translated into signed on-chain events through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Data Management", sublabel: "Provider Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Licensing Royalty Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Licensing Access",
        description:
          "For exploration companies licensing directly. A wallet signs each license and royalty payment straight to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Licensee Wallet", sublabel: "Exploration Companies", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "License Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Royalty Payment Record", icon: Copyright, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building data licensing with survey provenance, license tracking, and automatic royalty payment from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required License & Royalty Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects data rights integration benchmarks. Wiring data management systems, building custom license tracking and royalty logic, and shipping automatic payment for an average catalogue takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your license and royalty rules into pre-audited WebAssembly binaries and provisions the royalty ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "gas-pipeline-custody-transfer-and-metering-reconciliation",
    icon: Truck,
    eyebrow: "Gas Custody Settlement Layer",
    headline1: "Meter every handoff.",
    headline2: "Bill the same day.",
    heroDescription:
      "Stand up a real-time gas custody metering and reconciliation network with daily automated billing and imbalances flagged immediately. Month-end reconciliation is completed automatically by the smart contract, billing is generated the same day rather than weeks after month-end, and disputes disappear.",
    heroCta: "Deploy Gas Custody Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace monthly spreadsheet reconciliation with real-time custody metering and same-day gas billing.",
    mechanics: [
      { title: "Real-Time Custody Metering", description: "The Energy Meter Oracle anchors gas volume at each custody transfer point, so a handoff between producer, TSO, and distributor is recorded as it happens." },
      { title: "Immutable Custody Chain", description: "The Traceability Ledger links each transfer into one chain, giving all parties a shared record of how gas moved through the pipeline." },
      { title: "Automated Daily Billing", description: "The Logic and Actions Editor computes billing from metered flow daily, replacing the monthly spreadsheet cycle with same-day invoicing." },
      { title: "Immediate Imbalance Flagging", description: "A measurement mismatch at any transfer point is flagged the moment it appears, rather than surfacing weeks later at month-end." },
      { title: "Multi-Party Reconciliation", description: "Producers, transmission operators, and distributors settle against the same anchored volumes, eliminating the frequent, expensive billing disputes." },
      { title: "Auditable Flow History", description: "Every custody transfer and reconciliation is retained, giving each party and the regulator a verifiable pipeline flow record." },
    ],
    lifecycleTitle: "The Gas Custody Lifecycle",
    lifecycleSubtitle:
      "Follow a single gas custody transfer from metered handoff through imbalance check to same-day billing.",
    lifecycleSteps: [
      {
        label: "Custody Metering",
        description:
          "Gas volume is metered at a custody transfer point. The oracle anchors the handoff between two pipeline parties.",
        icon: Radio,
        logFilename: "cerulea_gascustody_engine.log",
        logLines: [
          { text: "[SYS] Metering custody transfer at NODE_14...", time: "06:00:02", tone: "default" },
          { text: "[CMD] anchorTransfer(from: \"TSO_A\", to: \"DIST_B\", mmscm: 1.82)", time: "06:00:02", tone: "primary" },
          { text: "[AUTH] Verifying custody meter signatures...", time: "06:00:03", tone: "secondary" },
          { text: "[OK] Transfer sealed at 1.82 MMSCM.", time: "06:00:03", tone: "success" },
        ],
      },
      {
        label: "Chain Linking",
        description:
          "The transfer is linked into the custody chain, extending the shared record of how gas moved through the pipeline.",
        icon: Truck,
        logFilename: "cerulea_gascustody_engine.log",
        logLines: [
          { text: "[SYS] Linking transfer to custody chain...", time: "06:00:20", tone: "default" },
          { text: "[CMD] linkCustody(NODE_14, chain: \"PIPE_9\")", time: "06:00:20", tone: "primary" },
          { text: "[SYS] Chain extended to 4 hops.", time: "06:00:20", tone: "default" },
          { text: "[OK] Custody chain intact and shared.", time: "06:00:21", tone: "success" },
        ],
      },
      {
        label: "Imbalance Check",
        description:
          "Metered volumes across transfer points are compared. Any imbalance is flagged immediately for investigation.",
        icon: Scale,
        logFilename: "cerulea_gascustody_engine.log",
        logLines: [
          { text: "[SYS] Checking pipeline balance for PIPE_9...", time: "06:05:44", tone: "default" },
          { text: "[CMD] checkImbalance(chain: \"PIPE_9\")", time: "06:05:44", tone: "primary" },
          { text: "[SYS] Volumes reconcile within tolerance.", time: "06:05:44", tone: "default" },
          { text: "[OK] No imbalance flagged this cycle.", time: "06:05:45", tone: "success" },
        ],
      },
      {
        label: "Same-Day Billing",
        description:
          "Billing is computed from the day's metered flow and generated the same day, replacing the monthly reconciliation entirely.",
        icon: FileCheck,
        logFilename: "cerulea_gascustody_engine.log",
        logLines: [
          { text: "[SYS] Generating daily billing for PIPE_9...", time: "06:10:10", tone: "default" },
          { text: "[CMD] bill(chain: \"PIPE_9\", day: \"2026-09-19\")", time: "06:10:10", tone: "primary" },
          { text: "[SYS] Computing charges from metered flow...", time: "06:10:10", tone: "default" },
          { text: "[OK] Same-day bill issued, zero disputes.", time: "06:10:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes gas custody reconciliation into modular contracts. Each layer meters transfers, links the chain, checks imbalance, and bills the same day.",
    layers: [
      {
        title: "Custody Oracle",
        subtitle: "The Transfer Meter",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transfer Meter",
          description:
            "Anchors gas volume at each custody transfer point in real time, giving billing a trustworthy handoff record instead of a spreadsheet compiled weeks later.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract CustodyOracle {\n  struct Transfer {\n    bytes32 from;\n    bytes32 to;\n    uint256 volume;\n    uint256 meteredAt;\n  }\n\n  mapping(uint256 => Transfer) public transfers;\n\n  function anchorTransfer(bytes32 from, bytes32 to, uint256 volume, bytes calldata sig) external {\n    require(verifyMeter(from, sig), \"Bad meter sig\");\n    transfers[block.number] = Transfer(from, to, volume, block.timestamp);\n  }\n}",
        simAction: "Simulate Transfer Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Metering custody transfer at NODE_14...", tone: "default" },
          { text: "Validating custody meter signatures...", tone: "default" },
          { text: "Sealing 1.82 MMSCM handoff...", tone: "default" },
          { text: "Writing transfer to storage...", tone: "default" },
          { text: "[SUCCESS] Custody transfer anchored.", tone: "success" },
        ],
      },
      {
        title: "Custody Chain",
        subtitle: "The Shared Trail",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Trail",
          description:
            "Links each transfer into one custody chain that all pipeline parties read, replacing separate operator records with a single, shared account of how gas moved.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function linkCustody(uint256 transferId, bytes32 chain) external {\n    custodyChain[chain].push(transferId);\n    emit CustodyLinked(chain, transferId);\n}",
        simAction: "Simulate Chain Linking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading transfer at NODE_14...", tone: "default" },
          { text: "Appending to pipeline chain PIPE_9...", tone: "default" },
          { text: "Extending chain to 4 hops...", tone: "default" },
          { text: "Sealing shared custody trail...", tone: "default" },
          { text: "[SUCCESS] Custody chain extended.", tone: "success" },
        ],
      },
      {
        title: "Imbalance Guard",
        subtitle: "The Reconciler",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reconciler",
          description:
            "Compares metered volumes across transfer points and flags any imbalance the moment it appears, so a discrepancy is investigated immediately rather than at month-end.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function checkImbalance(bytes32 chain) external view returns (bool, int256 delta) {\n    uint256 inflow = _sumInflow(chain);\n    uint256 outflow = _sumOutflow(chain);\n    delta = int256(inflow) - int256(outflow);\n    return (_abs(delta) <= tolerance[chain], delta);\n}",
        simAction: "Simulate Imbalance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Summing inflow across PIPE_9 transfers...", tone: "default" },
          { text: "Summing outflow at delivery points...", tone: "default" },
          { text: "Computing volume delta...", tone: "default" },
          { text: "Comparing against tolerance...", tone: "default" },
          { text: "[SUCCESS] Volumes reconcile, no imbalance.", tone: "success" },
        ],
      },
      {
        title: "Billing Engine",
        subtitle: "The Same-Day Invoicer",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Same-Day Invoicer",
          description:
            "Computes billing from the day's metered flow and issues it the same day, collapsing the weeks-long monthly reconciliation into a daily, dispute-free invoice.",
          platformFunction: "Invoicing & Settlement",
        },
        codeSnippet:
          "function bill(bytes32 chain, bytes32 day) external view returns (uint256) {\n    uint256 vol = dailyVolume[chain][day];\n    return vol * transportTariff[chain];\n}",
        simAction: "Simulate Daily Billing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading day's metered flow for PIPE_9...", tone: "default" },
          { text: "Applying transport tariff...", tone: "default" },
          { text: "Computing daily charge...", tone: "default" },
          { text: "Issuing same-day invoice...", tone: "default" },
          { text: "[SUCCESS] Same-day bill issued, zero disputes.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Real-time gas custody reconciliation is a horizontal capability. Here is how different actors in the pipeline chain put the shared ledger to work.",
    sectors: [
      { icon: Truck, title: "Pipeline & Transmission Operators", description: "Meter every custody transfer and bill the same day, ending the monthly reconciliation and the frequent, costly disputes between producers, TSOs, and distributors.", assetTypes: ["Custody Transfers", "Daily Billing", "Imbalance Flags"] },
      { icon: Factory, title: "Gas Producers", description: "Confirm delivered volumes against a shared custody record, settling promptly on metered flow rather than contesting month-end spreadsheets.", assetTypes: ["Delivery Volumes", "Custody Records", "Settlement Trails"] },
      { icon: Building2, title: "Distribution Companies", description: "Reconcile received gas against upstream transfers automatically, flagging imbalances immediately and closing billing on the same day.", assetTypes: ["Received Volumes", "Reconciliation Records", "Daily Invoices"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging pipeline SCADA and custody metering systems or reading directly from flow computers, Cerulea routes both into one custody ledger.",
    tracks: [
      {
        title: "Track A: Pipeline SCADA Bridging",
        description:
          "For operators on legacy pipeline SCADA and metering. Custody data is translated into signed on-chain transfer records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Pipeline SCADA", sublabel: "Operator Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Transfer Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Gas Custody Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Flow Computer Capture",
        description:
          "For flow computers with edge connectivity. Each custody measurement is signed by a device key and routed straight to the custody chain.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Flow Computer / Edge", sublabel: "Metering Hardware", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Transfer Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Custody Chain Record", icon: Truck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building gas custody reconciliation with real-time metering, imbalance flagging, and same-day billing from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Billing Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects pipeline settlement integration benchmarks. Wiring custody metering, building custom reconciliation logic, and shipping daily billing for an average pipeline takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and billing rules into pre-audited WebAssembly binaries and provisions the custody ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "city-gas-distribution-consumer-billing-reconciliation",
    icon: Building2,
    eyebrow: "City Gas Billing Layer",
    headline1: "Bill the real reading.",
    headline2: "Silence the complaints.",
    heroDescription:
      "Build an automated consumer gas billing record based on verified meter readings, reducing billing disputes for piped natural gas connections. Verified readings feed directly into the billing calculation, so customers receive bills based on actual consumption with a record they can check if they dispute.",
    heroCta: "Deploy City Gas Billing",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn estimated, contested gas bills into verified, checkable billing based on actual consumption.",
    mechanics: [
      { title: "Verified Reading Feed", description: "External Data Oracles anchor each piped gas meter reading, so billing rests on actual consumption rather than an estimate that invites complaints." },
      { title: "Automated Billing", description: "The Invoices and Billing module computes each customer's bill directly from verified readings, removing the manual estimation step behind most disputes." },
      { title: "Checkable Record", description: "Every reading behind a bill is retained on-chain, so a customer who disputes can check the exact consumption their charge was based on." },
      { title: "Estimate Elimination", description: "Because readings are anchored per cycle, estimated bills and the corrections they trigger are largely designed out of the process." },
      { title: "Audit Trail", description: "The Audit Logs module keeps a verifiable history of readings and bills, giving the distributor and regulator a defensible record for any complaint." },
      { title: "Dispute Reduction", description: "With consumption verifiable and checkable, the volume of billing complaints for piped gas connections falls sharply." },
    ],
    lifecycleTitle: "The City Gas Billing Lifecycle",
    lifecycleSubtitle:
      "Follow a single piped gas connection from meter reading through automated billing to a checkable dispute record.",
    lifecycleSteps: [
      {
        label: "Meter Reading",
        description:
          "The connection's gas meter reading is captured and anchored, replacing the estimated reading behind many bills.",
        icon: Radio,
        logFilename: "cerulea_citygas_engine.log",
        logLines: [
          { text: "[SYS] Reading piped gas meter PNG_3320...", time: "07:00:05", tone: "default" },
          { text: "[CMD] anchorRead(meter: \"PNG_3320\", scm: 41.2)", time: "07:00:05", tone: "primary" },
          { text: "[AUTH] Verifying meter reading source...", time: "07:00:06", tone: "secondary" },
          { text: "[OK] Reading sealed for cycle.", time: "07:00:06", tone: "success" },
        ],
      },
      {
        label: "Bill Calculation",
        description:
          "The billing module computes the customer's bill directly from the verified reading and tariff.",
        icon: Scale,
        logFilename: "cerulea_citygas_engine.log",
        logLines: [
          { text: "[SYS] Computing bill for PNG_3320...", time: "07:02:20", tone: "default" },
          { text: "[CMD] calcBill(meter: \"PNG_3320\", tariff: \"DOMESTIC\")", time: "07:02:20", tone: "primary" },
          { text: "[SYS] Charging on actual 41.2 SCM consumed...", time: "07:02:20", tone: "secondary" },
          { text: "[OK] Bill computed from verified reading.", time: "07:02:21", tone: "success" },
        ],
      },
      {
        label: "Bill Issuance",
        description:
          "The customer receives an accurate bill with a retained record of the reading it was based on.",
        icon: FileCheck,
        logFilename: "cerulea_citygas_engine.log",
        logLines: [
          { text: "[SYS] Issuing bill for PNG_3320...", time: "07:03:44", tone: "default" },
          { text: "[CMD] issueBill(meter: \"PNG_3320\", period: \"2026-09\")", time: "07:03:44", tone: "primary" },
          { text: "[SYS] Attaching verified reading to bill...", time: "07:03:44", tone: "default" },
          { text: "[OK] Accurate, checkable bill issued.", time: "07:03:45", tone: "success" },
        ],
      },
      {
        label: "Dispute Check",
        description:
          "A customer who disputes the bill checks the anchored reading directly, resolving the query against a shared record.",
        icon: Search,
        logFilename: "cerulea_citygas_engine.log",
        logLines: [
          { text: "[SYS] Dispute check on PNG_3320 bill...", time: "15:30:11", tone: "default" },
          { text: "[CMD] resolveReading(meter: \"PNG_3320\", period: \"2026-09\")", time: "15:30:11", tone: "primary" },
          { text: "[SYS] Returning sealed reading for period...", time: "15:30:11", tone: "default" },
          { text: "[OK] Consumption verified, query resolved.", time: "15:30:12", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes city gas billing into modular contracts. Each layer anchors the reading, calculates the bill, issues it, and exposes a checkable record for disputes.",
    layers: [
      {
        title: "Reading Oracle",
        subtitle: "The Consumption Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consumption Feed",
          description:
            "Anchors each piped gas meter reading, giving billing a basis in actual consumption instead of the estimates that drive most customer complaints.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract GasReadingOracle {\n  mapping(bytes32 => uint256) public cycleReading;\n\n  function anchorRead(bytes32 meter, uint256 scm, bytes calldata src) external {\n    require(verifySource(meter, src), \"Bad source\");\n    cycleReading[meter] = scm;\n    emit ReadingAnchored(meter, scm);\n  }\n}",
        simAction: "Simulate Reading Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading piped gas meter PNG_3320...", tone: "default" },
          { text: "Verifying reading source...", tone: "default" },
          { text: "Sealing 41.2 SCM consumption...", tone: "default" },
          { text: "Recording cycle reading...", tone: "default" },
          { text: "[SUCCESS] Gas reading anchored.", tone: "success" },
        ],
      },
      {
        title: "Billing Module",
        subtitle: "The Charge Calculator",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Charge Calculator",
          description:
            "Computes each customer's bill directly from the verified reading and tariff, removing the manual estimation step that produced inaccurate, disputed charges.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function calcBill(bytes32 meter) public view returns (uint256) {\n    return cycleReading[meter] * tariff[meter];\n}",
        simAction: "Simulate Bill Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified consumption for PNG_3320...", tone: "default" },
          { text: "Applying domestic tariff...", tone: "default" },
          { text: "Computing charge on actual usage...", tone: "default" },
          { text: "Preparing bill...", tone: "default" },
          { text: "[SUCCESS] Bill computed from verified reading.", tone: "success" },
        ],
      },
      {
        title: "Statement Issuer",
        subtitle: "The Checkable Bill",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Checkable Bill",
          description:
            "Issues the bill with the reading it was based on retained on-chain, so an accurate charge is delivered and the customer can always check the consumption behind it.",
          platformFunction: "Invoicing & Records",
        },
        codeSnippet:
          "function issueBill(bytes32 meter, bytes32 period) external returns (uint256) {\n    uint256 amount = calcBill(meter);\n    statements[meter][period] = Statement(cycleReading[meter], amount);\n    emit BillIssued(meter, period, amount);\n    return amount;\n}",
        simAction: "Simulate Bill Issue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading computed charge for PNG_3320...", tone: "default" },
          { text: "Attaching verified reading to statement...", tone: "default" },
          { text: "Composing bill...", tone: "default" },
          { text: "Publishing to customer...", tone: "default" },
          { text: "[SUCCESS] Checkable bill issued.", tone: "success" },
        ],
      },
      {
        title: "Dispute Window",
        subtitle: "The Reading Resolver",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reading Resolver",
          description:
            "Returns the sealed reading behind any bill to the customer, so a dispute is settled against a shared record and the volume of billing complaints falls sharply.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveReading(bytes32 meter, bytes32 period) external view returns (uint256) {\n    return statements[meter][period].reading;\n}",
        simAction: "Simulate Dispute Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Customer disputing PNG_3320 bill...", tone: "default" },
          { text: "Fetching sealed reading for period...", tone: "default" },
          { text: "Confirming reading unaltered...", tone: "default" },
          { text: "Returning consumption record...", tone: "default" },
          { text: "[SUCCESS] Query resolved on verified reading.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified city gas billing is a horizontal capability. Here is how different actors in piped gas distribution put the shared ledger to work.",
    sectors: [
      { icon: Building2, title: "City Gas Distributors", description: "Bill piped gas customers on verified consumption and cut complaint volumes, replacing estimated readings and the corrections and goodwill costs they create.", assetTypes: ["Meter Readings", "Consumer Bills", "Dispute Records"] },
      { icon: Home, title: "Households & Businesses", description: "Receive accurate bills based on actual usage and check the reading behind any charge, ending disputes over estimated or inflated piped gas bills.", assetTypes: ["Consumption Records", "Verified Bills", "Reading Checks"] },
      { icon: Landmark, title: "Regulators & Ombudsmen", description: "Resolve billing complaints from a verifiable on-chain record of readings and bills, reducing the caseload of disputed piped gas charges.", assetTypes: ["Complaint Audits", "Billing Trails", "Reading Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a distributor's billing platform or reading directly from consumer gas meters, Cerulea routes both into one billing ledger.",
    tracks: [
      {
        title: "Track A: Billing Platform Bridging",
        description:
          "For distributors on legacy billing platforms. Readings are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Billing Platform", sublabel: "Distributor Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "City Gas Billing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Gas Meter Capture",
        description:
          "For gas meters with reading connectivity. Each reading is signed by a device key and routed straight to the billing ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Gas Meter / Edge", sublabel: "Consumer Premises", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Reading Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Reading Record", icon: Building2, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building city gas billing with verified reading anchoring, automated calculation, and checkable dispute records from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Reading & Billing Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects utility billing integration benchmarks. Wiring meter reading feeds, building custom billing logic, and shipping a checkable dispute record for an average distributor takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your reading and billing rules into pre-audited WebAssembly binaries and provisions the billing ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "lng-terminal-slot-booking-and-cargo-allocation-transparency",
    icon: Ticket,
    eyebrow: "Terminal Allocation Layer",
    headline1: "Anchor every slot.",
    headline2: "Show the whole schedule.",
    heroDescription:
      "Run a transparent booking system for LNG terminal slots where cargo allocation and slot confirmations are anchored and visible to all booked parties. Each slot booking and any subsequent allocation change is a verified record, giving every party clear visibility into the terminal's schedule and changes affecting them.",
    heroCta: "Deploy Terminal Booking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace an opaque, dispute-prone allocation process with a transparent, anchored terminal schedule.",
    mechanics: [
      { title: "Anchored Slot Booking", description: "Escrow and Conditional Settlement records each slot booking against the terminal's capacity, so a confirmed slot is a verifiable commitment rather than an informal hold." },
      { title: "Transparent Allocation", description: "The Provenance Notary anchors each cargo allocation and confirmation, making the terminal schedule visible to every booked party at once." },
      { title: "Change Visibility", description: "Any reassignment or delay of a slot is recorded as a verified change, so affected parties see it immediately instead of learning through a dispute." },
      { title: "Capacity Enforcement", description: "Bookings are checked against the terminal's finite capacity, preventing overbooking of the limited slots for receiving and processing cargo." },
      { title: "Audit Trail", description: "The Audit Logs module retains every booking and change, giving parties and the terminal operator a defensible record of the allocation process." },
      { title: "Dispute Prevention", description: "With the schedule and every change visible on a shared record, disputes over reassigned or delayed slots are prevented rather than litigated." },
    ],
    lifecycleTitle: "The Terminal Allocation Lifecycle",
    lifecycleSubtitle:
      "Follow a single LNG cargo slot from booking through allocation change to a transparent view for all parties.",
    lifecycleSteps: [
      {
        label: "Slot Booking",
        description:
          "A party books a terminal slot for an LNG cargo. The booking is anchored against available capacity.",
        icon: Ticket,
        logFilename: "cerulea_lng_engine.log",
        logLines: [
          { text: "[SYS] Booking slot at terminal LNG_T2...", time: "09:10:02", tone: "default" },
          { text: "[CMD] bookSlot { party: \"SHIP_A\", window: \"D+21\", cargo: 138000 }", time: "09:10:02", tone: "primary" },
          { text: "[AUTH] Checking terminal capacity...", time: "09:10:03", tone: "secondary" },
          { text: "[OK] Slot SLOT_551 confirmed and anchored.", time: "09:10:03", tone: "success" },
        ],
      },
      {
        label: "Cargo Allocation",
        description:
          "The cargo is allocated to the confirmed slot. The allocation is anchored and visible to all booked parties.",
        icon: Package,
        logFilename: "cerulea_lng_engine.log",
        logLines: [
          { text: "[SYS] Allocating cargo to SLOT_551...", time: "09:12:20", tone: "default" },
          { text: "[CMD] allocateCargo(slot: \"SLOT_551\", cargo: \"CRG_9021\")", time: "09:12:20", tone: "primary" },
          { text: "[SYS] Allocation visible to booked parties.", time: "09:12:20", tone: "default" },
          { text: "[OK] Cargo allocation sealed.", time: "09:12:21", tone: "success" },
        ],
      },
      {
        label: "Schedule Change",
        description:
          "A slot is delayed. The reassignment is recorded as a verified change and pushed to affected parties immediately.",
        icon: Radio,
        logFilename: "cerulea_lng_engine.log",
        logLines: [
          { text: "[SYS] Recording schedule change for SLOT_551...", time: "14:40:33", tone: "default" },
          { text: "[CMD] reassign(slot: \"SLOT_551\", newWindow: \"D+23\")", time: "14:40:33", tone: "primary" },
          { text: "[SYS] Notifying affected parties of change...", time: "14:40:33", tone: "secondary" },
          { text: "[OK] Change sealed, all parties informed.", time: "14:40:34", tone: "success" },
        ],
      },
      {
        label: "Schedule Query",
        description:
          "A booked party queries the terminal schedule and sees every slot, allocation, and change affecting them.",
        icon: Search,
        logFilename: "cerulea_lng_engine.log",
        logLines: [
          { text: "[SYS] Schedule query from booked party...", time: "16:05:11", tone: "default" },
          { text: "[CMD] resolveSchedule(terminal: \"LNG_T2\", party: \"SHIP_A\")", time: "16:05:11", tone: "primary" },
          { text: "[SYS] Assembling slots, allocations, and changes...", time: "16:05:11", tone: "default" },
          { text: "[OK] Transparent schedule returned.", time: "16:05:12", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes terminal allocation into modular contracts. Each layer books slots, allocates cargo, records changes, and exposes the schedule to all parties.",
    layers: [
      {
        title: "Slot Registry",
        subtitle: "The Capacity Book",
        icon: Ticket,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Capacity Book",
          description:
            "Records each slot booking against the terminal's finite capacity, turning an informal hold into a verifiable commitment and preventing overbooking of limited cargo windows.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SlotRegistry {\n  struct Slot {\n    bytes32 party;\n    uint256 window;\n    uint256 cargoSize;\n    bool confirmed;\n  }\n\n  mapping(bytes32 => Slot) public slots;\n\n  function bookSlot(bytes32 id, bytes32 party, uint256 window, uint256 size) external {\n    require(_capacityAvailable(window, size), \"No capacity\");\n    slots[id] = Slot(party, window, size, true);\n  }\n}",
        simAction: "Simulate Slot Booking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading booking request from SHIP_A...", tone: "default" },
          { text: "Checking terminal capacity for window...", tone: "default" },
          { text: "Confirming slot SLOT_551...", tone: "default" },
          { text: "Anchoring booking...", tone: "default" },
          { text: "[SUCCESS] Slot booked and anchored.", tone: "success" },
        ],
      },
      {
        title: "Allocation Notary",
        subtitle: "The Cargo Seal",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cargo Seal",
          description:
            "Anchors each cargo allocation to its slot and makes it visible to every booked party, replacing an opaque process with a shared, verifiable terminal schedule.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function allocateCargo(bytes32 slotId, bytes32 cargoId) external onlyTerminal {\n    require(slots[slotId].confirmed, \"Slot not confirmed\");\n    allocations[slotId] = Allocation(cargoId, block.timestamp);\n    emit CargoAllocated(slotId, cargoId);\n}",
        simAction: "Simulate Cargo Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming slot SLOT_551...", tone: "default" },
          { text: "Binding cargo CRG_9021 to slot...", tone: "default" },
          { text: "Making allocation visible to parties...", tone: "default" },
          { text: "Sealing allocation...", tone: "default" },
          { text: "[SUCCESS] Cargo allocation anchored.", tone: "success" },
        ],
      },
      {
        title: "Change Log",
        subtitle: "The Reassignment Record",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reassignment Record",
          description:
            "Records any slot reassignment or delay as a verified change and pushes it to affected parties, so a schedule change is seen immediately rather than surfacing as a dispute.",
          platformFunction: "Notification & Workflow",
        },
        codeSnippet:
          "function reassign(bytes32 slotId, uint256 newWindow) external onlyTerminal {\n    changes[slotId].push(Change(slots[slotId].window, newWindow, block.timestamp));\n    slots[slotId].window = newWindow;\n    emit SlotReassigned(slotId, newWindow);\n}",
        simAction: "Simulate Schedule Change",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording delay on SLOT_551...", tone: "default" },
          { text: "Appending change to slot history...", tone: "default" },
          { text: "Updating slot window...", tone: "default" },
          { text: "Notifying affected parties...", tone: "default" },
          { text: "[SUCCESS] Change sealed, parties informed.", tone: "success" },
        ],
      },
      {
        title: "Schedule Window",
        subtitle: "The Transparent View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transparent View",
          description:
            "Resolves the terminal schedule for any booked party, returning every slot, allocation, and change affecting them so the whole allocation process is transparent.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveSchedule(bytes32 terminal, bytes32 party) external view returns (Slot[] memory, Change[] memory) {\n    return (_slotsFor(terminal, party), _changesFor(terminal, party));\n}",
        simAction: "Simulate Schedule Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Booked party opening schedule view...", tone: "default" },
          { text: "Fetching slots for SHIP_A...", tone: "default" },
          { text: "Attaching allocations and changes...", tone: "default" },
          { text: "Assembling transparent schedule...", tone: "default" },
          { text: "[SUCCESS] Schedule returned to party.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent terminal allocation is a horizontal capability. Here is how different actors around an LNG terminal put the shared ledger to work.",
    sectors: [
      { icon: Ticket, title: "Terminal Operators", description: "Publish an anchored, transparent schedule and manage finite capacity fairly, preventing overbooking and the disputes that opaque reassignment used to cause.", assetTypes: ["Slot Bookings", "Cargo Allocations", "Schedule Changes"] },
      { icon: Truck, title: "Shippers & Traders", description: "See confirmed slots and any change affecting their cargo in real time, planning voyages around a schedule they can verify rather than contest.", assetTypes: ["Confirmed Slots", "Cargo Records", "Change Notices"] },
      { icon: Landmark, title: "Regulators & Port Authorities", description: "Audit terminal allocation from one shared record, confirming capacity is allocated fairly without collecting schedules from each operator.", assetTypes: ["Allocation Audits", "Capacity Records", "Booking Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a terminal's scheduling systems or letting shippers book natively, Cerulea routes both into one allocation ledger.",
    tracks: [
      {
        title: "Track A: Terminal Scheduling Bridging",
        description:
          "For terminals on legacy scheduling systems. Bookings and changes are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Scheduling Systems", sublabel: "Terminal Operations", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Booking Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Terminal Allocation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Shipper Booking",
        description:
          "For shippers booking directly. A signed wallet anchors each slot booking and reads schedule changes straight from the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Shipper Wallet", sublabel: "Traders & Carriers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Booking Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Slot Schedule Record", icon: Ticket, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building terminal allocation with anchored bookings, transparent scheduling, and change visibility from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Booking & Allocation Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects terminal scheduling integration benchmarks. Wiring scheduling systems, building custom booking and allocation logic, and shipping a transparent schedule for an average terminal takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your booking and allocation rules into pre-audited WebAssembly binaries and provisions the allocation ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "crude-oil-provenance-tracking-from-well-to-refinery",
    icon: Search,
    eyebrow: "Crude Provenance Engine",
    headline1: "Verify origin and grade.",
    headline2: "Settle on delivery proof.",
    heroDescription:
      "Deliver a crude oil provenance network where origin and quality are verified at each custody transfer, payment is conditional on delivery confirmation, and sanctions compliance documentation is immutable. A refinery sanctions audit for a year of purchases completes in a day using on-chain origin records.",
    heroCta: "Deploy Crude Provenance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn falsifiable paper documentation into a verified, sanctions-ready chain of crude custody.",
    mechanics: [
      { title: "Custody Chain Tracking", description: "The Traceability Ledger records each transfer of crude from well to refinery, so origin and grade travel with the cargo instead of on falsifiable paper." },
      { title: "Verified Grade & Origin", description: "Each custody transfer confirms crude grade and origin, making the mislabelling that price differentials incentivize detectable at every hop." },
      { title: "Conditional Payment", description: "Trade Finance Documents and conditional settlement release payment only on delivery confirmation, protecting buyers against undelivered or misrepresented cargo." },
      { title: "Immutable Sanctions Record", description: "Origin attestations are sealed on-chain, giving a refinery immutable documentation of crude provenance for sanctions compliance." },
      { title: "Port & Customs Events", description: "The Port and Customs Events module anchors loading, discharge, and clearance events, tying the physical movement of crude to its documented custody." },
      { title: "Rapid Compliance Audit", description: "A compliance team queries a year of origin records in a day, replacing weeks of document retrieval for sanctions exposure reviews." },
    ],
    lifecycleTitle: "The Crude Provenance Lifecycle",
    lifecycleSubtitle:
      "Follow a single crude cargo from wellhead through custody transfers to a refinery sanctions audit.",
    lifecycleSteps: [
      {
        label: "Wellhead Origin",
        description:
          "A crude cargo is registered at the wellhead with its field of origin and grade as the anchor of its custody chain.",
        icon: Search,
        logFilename: "cerulea_crude_engine.log",
        logLines: [
          { text: "[SYS] Registering cargo at field WELL_KG_8...", time: "05:30:04", tone: "default" },
          { text: "[CMD] registerCrude { cargo: \"CRG_4471\", grade: \"LIGHT_SWEET\", field: \"KG_8\" }", time: "05:30:04", tone: "primary" },
          { text: "[AUTH] Binding origin and grade to cargo...", time: "05:30:05", tone: "secondary" },
          { text: "[OK] Cargo anchored at chain genesis.", time: "05:30:05", tone: "success" },
        ],
      },
      {
        label: "Custody Transfer",
        description:
          "The cargo moves through gathering, storage, and shipping. Each transfer confirms grade and origin before advancing.",
        icon: Truck,
        logFilename: "cerulea_crude_engine.log",
        logLines: [
          { text: "[SYS] Transfer pending at terminal STOR_2...", time: "12:15:33", tone: "default" },
          { text: "[CMD] acceptCustody(CRG_4471, grade: \"LIGHT_SWEET\")", time: "12:15:33", tone: "primary" },
          { text: "[SYS] Grade and origin re-verified at handoff.", time: "12:15:34", tone: "default" },
          { text: "[OK] Custody advanced, no mislabelling.", time: "12:15:34", tone: "success" },
        ],
      },
      {
        label: "Port Clearance",
        description:
          "Loading and discharge events are anchored at port. Payment is released on confirmed delivery of the cargo.",
        icon: Package,
        logFilename: "cerulea_crude_engine.log",
        logLines: [
          { text: "[SYS] Anchoring port events for CRG_4471...", time: "20:40:10", tone: "default" },
          { text: "[CMD] confirmDischarge(CRG_4471, port: \"PORT_W\")", time: "20:40:10", tone: "primary" },
          { text: "[AUTH] Releasing conditional payment on delivery...", time: "20:40:11", tone: "secondary" },
          { text: "[OK] Discharge confirmed, payment settled.", time: "20:40:11", tone: "success" },
        ],
      },
      {
        label: "Sanctions Audit",
        description:
          "A refinery compliance team queries a year of origin records, clearing the sanctions review in a day.",
        icon: ShieldCheck,
        logFilename: "cerulea_crude_engine.log",
        logLines: [
          { text: "[SYS] Sanctions audit query for refinery REF_3...", time: "09:05:22", tone: "default" },
          { text: "[CMD] resolveOrigins(buyer: \"REF_3\", window: \"12M\")", time: "09:05:22", tone: "primary" },
          { text: "[SYS] Returning immutable origin records...", time: "09:05:22", tone: "default" },
          { text: "[OK] 12 months of purchases cleared in 1 day.", time: "09:05:23", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes crude provenance into modular contracts. Each layer anchors origin, transfers custody, ties payment to delivery, and exposes sanctions-ready records.",
    layers: [
      {
        title: "Origin Registry",
        subtitle: "The Cargo Passport",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cargo Passport",
          description:
            "Anchors each crude cargo's field of origin and grade at the wellhead, giving the chain an immutable start that paper documentation could previously falsify.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CrudeRegistry {\n  struct Cargo {\n    string grade;\n    bytes32 field;\n    uint256 registeredAt;\n  }\n\n  mapping(bytes32 => Cargo) public cargoes;\n\n  function registerCrude(bytes32 id, string calldata grade, bytes32 field) external {\n    cargoes[id] = Cargo(grade, field, block.timestamp);\n  }\n}",
        simAction: "Simulate Origin Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading field of origin KG_8...", tone: "default" },
          { text: "Recording crude grade...", tone: "default" },
          { text: "Anchoring cargo CRG_4471...", tone: "default" },
          { text: "Writing cargo passport to storage...", tone: "default" },
          { text: "[SUCCESS] Crude origin anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Custody Handoff",
        subtitle: "The Grade Check",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Grade Check",
          description:
            "Re-verifies grade and origin at each custody transfer before the cargo advances, making the mislabelling that price differentials incentivize detectable at every hop.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function acceptCustody(bytes32 id, string calldata grade) external {\n    require(keccak256(bytes(grade)) == keccak256(bytes(cargoes[id].grade)), \"Grade mismatch\");\n    custody[id] = msg.sender;\n    emit CustodyAccepted(id, msg.sender, grade);\n}",
        simAction: "Simulate Custody Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Terminal reviewing cargo CRG_4471...", tone: "default" },
          { text: "Re-verifying grade against origin...", tone: "default" },
          { text: "Confirming no mislabelling...", tone: "default" },
          { text: "Recording custody handoff...", tone: "default" },
          { text: "[SUCCESS] Custody advanced with grade proof.", tone: "success" },
        ],
      },
      {
        title: "Delivery Escrow",
        subtitle: "The Conditional Payment",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Payment",
          description:
            "Releases payment only on confirmed discharge of the cargo, tying trade finance settlement to verified delivery and protecting buyers from undelivered or misrepresented crude.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function confirmDischarge(bytes32 id, bytes32 port) external onlyPortAgent {\n    require(custody[id] != address(0), \"No custody\");\n    portEvents[id].push(Event(port, block.timestamp));\n    _releasePayment(id);\n    emit Discharged(id, port);\n}",
        simAction: "Simulate Delivery Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Anchoring discharge event at PORT_W...", tone: "default" },
          { text: "Confirming cargo delivered...", tone: "default" },
          { text: "Releasing conditional payment...", tone: "default" },
          { text: "Recording settlement...", tone: "default" },
          { text: "[SUCCESS] Payment settled on delivery proof.", tone: "success" },
        ],
      },
      {
        title: "Compliance Window",
        subtitle: "The Sanctions View",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sanctions View",
          description:
            "Returns immutable origin records for any window of purchases, turning a weeks-long sanctions document retrieval into a same-day compliance query.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveOrigins(address buyer, uint256 fromBlock) external view returns (Cargo[] memory) {\n    return _purchaseOrigins(buyer, fromBlock);\n}",
        simAction: "Simulate Sanctions Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compliance team opening sanctions review...", tone: "default" },
          { text: "Fetching 12 months of origin records...", tone: "default" },
          { text: "Confirming records immutable...", tone: "default" },
          { text: "Returning origin set...", tone: "default" },
          { text: "[SUCCESS] Purchases cleared in one day.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Crude provenance tracking is a horizontal capability. Here is how different actors in the oil supply chain put the shared ledger to work.",
    sectors: [
      { icon: Search, title: "Refiners & Buyers", description: "Verify crude grade and origin at every hop and clear sanctions audits in a day, protecting against mislabelling and undelivered cargo with an immutable record.", assetTypes: ["Custody Chains", "Origin Records", "Sanctions Audits"] },
      { icon: Truck, title: "Traders & Shippers", description: "Move crude with verifiable provenance and conditional payment, settling on delivery proof rather than contested paper documentation.", assetTypes: ["Cargo Transfers", "Delivery Confirmations", "Trade Documents"] },
      { icon: Landmark, title: "Customs & Regulators", description: "Audit crude origin and movement from anchored port and custody events, confirming sanctions compliance without collecting documents from each party.", assetTypes: ["Port Events", "Provenance Audits", "Compliance Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging trading and terminal systems or capturing custody at port from a field device, Cerulea routes both into one provenance ledger.",
    tracks: [
      {
        title: "Track A: Trading System Bridging",
        description:
          "For traders and terminals on legacy systems. Custody and document events are translated into signed on-chain records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Trading / Terminal", sublabel: "Operator Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Crude Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Port Custody Capture",
        description:
          "For port agents in the field. A signed device anchors each loading, discharge, and clearance event straight to the custody chain.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Port Device", sublabel: "Loading & Discharge", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Custody Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Crude Custody Record", icon: Search, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building crude provenance with custody tracking, conditional payment, and sanctions-ready records from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Compliance Rules",
      ruleCount: 49,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects commodity trade integration benchmarks. Wiring trading and terminal systems, building custom custody and conditional payment logic, and shipping sanctions tooling for an average trade flow takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and compliance rules into pre-audited WebAssembly binaries and provisions the provenance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "refinery-maintenance-and-safety-inspection-records-for-compliance",
    icon: Shield,
    eyebrow: "Refinery Compliance Layer",
    headline1: "Unify the siloed records.",
    headline2: "Give regulators live access.",
    heroDescription:
      "Deploy an integrated refinery compliance record network where existing maintenance systems anchor data on-chain, inspection certificates are verifiable, and regulator access is real-time. A regulator reviews three years of maintenance records in hours from the chain, and an insurance claim is settled in days using on-chain equipment history.",
    heroCta: "Deploy Refinery Compliance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Anchor siloed refinery records into one verifiable trail with real-time regulator and insurer access.",
    mechanics: [
      { title: "Cross-System Anchoring", description: "The Audit Logs module anchors records from SAP PM, paper logs, and inspection software by digest, unifying siloed systems into one verifiable trail." },
      { title: "Verifiable Certificates", description: "Compliance Attestations bind inspection certificates to their issuer, so a regulator confirms a certificate is genuine without contacting the certifier." },
      { title: "Credentialed Inspectors", description: "The DID and VC Ledger issues verifiable credentials, so each maintenance and inspection record carries a provable author." },
      { title: "Real-Time Regulator Access", description: "Regulators query the anchored record directly, turning a two-week document review into an hours-long on-chain query." },
      { title: "Equipment History", description: "Each item of equipment carries its full maintenance and inspection history, supporting both compliance audits and post-incident investigation." },
      { title: "Faster Claim Settlement", description: "Insurers settle claims using verifiable on-chain equipment history, resolving in days what poor recordkeeping used to delay for weeks." },
    ],
    lifecycleTitle: "The Refinery Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a single equipment record from cross-system capture through credentialed certification to a regulator and insurer query.",
    lifecycleSteps: [
      {
        label: "Record Anchoring",
        description:
          "A maintenance record from SAP PM is anchored by digest, unifying it with paper and inspection-software records on one trail.",
        icon: ScrollText,
        logFilename: "cerulea_refcomp_engine.log",
        logLines: [
          { text: "[SYS] Anchoring SAP PM record for HX_44...", time: "07:20:03", tone: "default" },
          { text: "[CMD] anchorRecord(equip: \"HX_44\", src: \"SAP_PM\", doc: \"WO_9921\")", time: "07:20:03", tone: "primary" },
          { text: "[AUTH] Hashing work order (SHA-256)...", time: "07:20:04", tone: "secondary" },
          { text: "[OK] Record unified onto compliance trail.", time: "07:20:04", tone: "success" },
        ],
      },
      {
        label: "Certificate Verification",
        description:
          "An inspection certificate is bound to its issuer and anchored, making its authenticity verifiable on demand.",
        icon: FileCheck,
        logFilename: "cerulea_refcomp_engine.log",
        logLines: [
          { text: "[SYS] Anchoring inspection certificate for HX_44...", time: "10:05:20", tone: "default" },
          { text: "[CMD] anchorCert(equip: \"HX_44\", issuer: \"TPI_5\", cert: \"NDT_771\")", time: "10:05:20", tone: "primary" },
          { text: "[AUTH] Binding certificate to issuer...", time: "10:05:21", tone: "secondary" },
          { text: "[OK] Certificate verifiable on-chain.", time: "10:05:21", tone: "success" },
        ],
      },
      {
        label: "Credentialed Sign-Off",
        description:
          "The inspecting engineer signs the record with a verifiable credential, giving it a provable author.",
        icon: IdCard,
        logFilename: "cerulea_refcomp_engine.log",
        logLines: [
          { text: "[SYS] Requesting sign-off on NDT_771...", time: "10:20:44", tone: "default" },
          { text: "[CMD] signOff(cert: \"NDT_771\", cred: \"VC_ENG_12\")", time: "10:20:44", tone: "primary" },
          { text: "[AUTH] Verifying engineer credential...", time: "10:20:45", tone: "secondary" },
          { text: "[OK] Record signed by verified inspector.", time: "10:20:45", tone: "success" },
        ],
      },
      {
        label: "Regulator & Insurer Query",
        description:
          "A regulator reviews years of records in hours, and an insurer settles a claim from the equipment's on-chain history.",
        icon: Shield,
        logFilename: "cerulea_refcomp_engine.log",
        logLines: [
          { text: "[SYS] Compliance query for equipment HX_44...", time: "09:02:14", tone: "default" },
          { text: "[CMD] resolveHistory(equip: \"HX_44\", window: \"3Y\")", time: "09:02:14", tone: "primary" },
          { text: "[SYS] Returning unified maintenance history...", time: "09:02:14", tone: "default" },
          { text: "[OK] 3-year review in hours, claim in days.", time: "09:02:15", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes refinery compliance into modular contracts. Each layer anchors cross-system records, verifies certificates, credentials authors, and exposes equipment history.",
    layers: [
      {
        title: "Record Notary",
        subtitle: "The System Unifier",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The System Unifier",
          description:
            "Anchors records from SAP PM, paper logs, and inspection software by digest onto one trail, so a refinery keeps its systems while their data becomes a single verifiable history.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "contract RefineryNotary {\n  struct Record {\n    bytes32 equipment;\n    bytes32 source;\n    bytes32 docHash;\n    uint256 anchoredAt;\n  }\n\n  mapping(bytes32 => Record[]) public trail;\n\n  function anchorRecord(bytes32 equip, bytes32 src, bytes32 docHash) external {\n    trail[equip].push(Record(equip, src, docHash, block.timestamp));\n  }\n}",
        simAction: "Simulate Record Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting SAP PM work order for HX_44...", tone: "default" },
          { text: "Computing SHA-256 digest...", tone: "default" },
          { text: "Unifying with paper and inspection records...", tone: "default" },
          { text: "Appending to equipment trail...", tone: "default" },
          { text: "[SUCCESS] Record unified onto trail.", tone: "success" },
        ],
      },
      {
        title: "Certificate Notary",
        subtitle: "The Authenticity Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authenticity Seal",
          description:
            "Binds each inspection certificate to its issuing body and anchors it, so a regulator or insurer confirms a certificate is genuine without contacting the certifier.",
          platformFunction: "Compliance & Certification",
        },
        codeSnippet:
          "function anchorCert(bytes32 equip, bytes32 issuer, bytes32 certHash) external onlyIssuer {\n    certificates[equip].push(Cert(issuer, certHash, block.timestamp));\n    emit CertAnchored(equip, issuer, certHash);\n}",
        simAction: "Simulate Certificate Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting NDT certificate for HX_44...", tone: "default" },
          { text: "Binding certificate to issuer TPI_5...", tone: "default" },
          { text: "Sealing certificate hash...", tone: "default" },
          { text: "Recording on trail...", tone: "default" },
          { text: "[SUCCESS] Certificate verifiable on-chain.", tone: "success" },
        ],
      },
      {
        title: "Credential Ledger",
        subtitle: "The Author Proof",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Author Proof",
          description:
            "Issues verifiable credentials to inspection engineers and binds each signed record to a provable author, so an auditor or insurer knows exactly who performed each inspection.",
          platformFunction: "Identity & Credentials",
        },
        codeSnippet:
          "function signOff(bytes32 certId, bytes32 credential) external {\n    require(verifyCredential(credential), \"Bad credential\");\n    signatures[certId] = Signature(credential, block.timestamp);\n    emit RecordSigned(certId, credential);\n}",
        simAction: "Simulate Credentialed Sign-Off",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Engineer presenting credential VC_ENG_12...", tone: "default" },
          { text: "Validating credential...", tone: "default" },
          { text: "Binding author to certificate NDT_771...", tone: "default" },
          { text: "Sealing signature...", tone: "default" },
          { text: "[SUCCESS] Record signed by verified inspector.", tone: "success" },
        ],
      },
      {
        title: "History Window",
        subtitle: "The Unified View",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Unified View",
          description:
            "Resolves an item of equipment's full maintenance and inspection history for a regulator or insurer, turning a two-week document review into an hours-long query.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveHistory(bytes32 equipment, uint256 fromBlock) external view returns (Record[] memory, Cert[] memory) {\n    return (trail[equipment], certificates[equipment]);\n}",
        simAction: "Simulate History Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator opening history for HX_44...", tone: "default" },
          { text: "Assembling 3 years of records...", tone: "default" },
          { text: "Attaching verified certificates...", tone: "default" },
          { text: "Returning unified equipment history...", tone: "default" },
          { text: "[SUCCESS] Review in hours, claim in days.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Integrated refinery compliance is a horizontal capability. Here is how different actors around a refinery put the shared ledger to work.",
    sectors: [
      { icon: Factory, title: "Refinery Operators", description: "Unify siloed maintenance systems into one verifiable trail, producing complete audit records on demand and shortening incident investigations.", assetTypes: ["Equipment Records", "Inspection Certificates", "Audit Trails"] },
      { icon: Landmark, title: "Safety Regulators", description: "Review years of refinery records in hours with real-time access, replacing document reviews with a query against a verified, cross-referenced trail.", assetTypes: ["Compliance Queries", "Certificate Checks", "History Audits"] },
      { icon: Shield, title: "Insurers & Assessors", description: "Settle claims using verifiable equipment history, resolving in days what poor recordkeeping used to delay and pricing risk on a trusted maintenance record.", assetTypes: ["Equipment History", "Claim Evidence", "Risk Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging SAP PM and inspection software or capturing sign-offs from a field device, Cerulea routes both into one compliance trail.",
    tracks: [
      {
        title: "Track A: Maintenance System Bridging",
        description:
          "For refineries on SAP PM and inspection platforms. Records are translated into signed on-chain anchors through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "SAP PM / Inspection SW", sublabel: "Refinery Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Refinery Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Credentialed Field Capture",
        description:
          "For inspection engineers in the field. A credentialed device signs each certificate sign-off directly to the compliance trail.",
        connectorLabels: ["CREDENTIAL PROOF", "STATE EXECUTION"],
        nodes: [
          { label: "Field Device", sublabel: "Inspection Engineers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Sign-Off Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Signed Compliance Trail", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building refinery compliance with cross-system anchoring, verifiable certificates, and real-time access from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Record & Certificate Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects regulated recordkeeping integration benchmarks. Anchoring multiple maintenance systems, building custom certificate and credential logic, and shipping regulator and insurer access for an average refinery takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your record and certificate rules into pre-audited WebAssembly binaries and provisions the compliance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "byproduct-and-waste-stream-tracking-for-circular-economy-compliance",
    icon: Recycling,
    eyebrow: "Circular Economy Layer",
    headline1: "Track every waste stream.",
    headline2: "Prove responsible reuse.",
    heroDescription:
      "Stand up a verified record tracking refinery byproducts and waste streams from generation through to final reuse, recycling, or disposal. Each stream is followed to its final disposition, giving the refinery a verifiable record to support circular economy reporting and regulatory compliance.",
    heroCta: "Deploy Waste Stream Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn unproven disposal claims into a verified chain from waste generation to final disposition.",
    mechanics: [
      { title: "Stream Registration", description: "The Traceability Ledger registers each byproduct and waste stream at generation, so every stream has an anchored origin at the refinery." },
      { title: "Disposition Tracking", description: "Each stream is followed through reuse, recycling, or disposal, so its final fate is a verified record rather than an assumed one." },
      { title: "Handler Custody", description: "Transfers to recyclers and disposal contractors are co-signed, binding each downstream handler into the verified chain." },
      { title: "Circular Reporting", description: "Compliance Attestations turn the tracked dispositions into circular economy reporting, evidencing reuse and recycling rates to regulators and frameworks." },
      { title: "Immutable Waste Trail", description: "The Audit Logs module retains every stream, transfer, and disposition, giving a tamper-evident record for sustainability audits." },
      { title: "Diversion Proof", description: "The record proves how much waste was diverted from disposal into reuse or recycling, supporting the refinery's circular economy claims." },
    ],
    lifecycleTitle: "The Waste Stream Lifecycle",
    lifecycleSubtitle:
      "Follow a single byproduct stream from generation through handler custody to its verified final disposition.",
    lifecycleSteps: [
      {
        label: "Stream Generation",
        description:
          "A byproduct stream is registered at generation with its type and quantity as the origin of its tracked chain.",
        icon: Recycling,
        logFilename: "cerulea_waste_engine.log",
        logLines: [
          { text: "[SYS] Registering waste stream at refinery REF_3...", time: "08:00:04", tone: "default" },
          { text: "[CMD] registerStream { id: \"WST_2210\", type: \"SPENT_CATALYST\", kg: 4200 }", time: "08:00:04", tone: "primary" },
          { text: "[AUTH] Anchoring stream origin...", time: "08:00:05", tone: "secondary" },
          { text: "[OK] Stream WST_2210 anchored at genesis.", time: "08:00:05", tone: "success" },
        ],
      },
      {
        label: "Handler Transfer",
        description:
          "The stream moves to a recycler. The handler co-signs receipt, binding them into the verified chain.",
        icon: Truck,
        logFilename: "cerulea_waste_engine.log",
        logLines: [
          { text: "[SYS] Transfer pending at recycler RCY_8...", time: "11:30:20", tone: "default" },
          { text: "[CMD] acceptStream(WST_2210, handler: \"RCY_8\", kg: 4200)", time: "11:30:20", tone: "primary" },
          { text: "[SYS] Co-signature recorded from handler.", time: "11:30:21", tone: "default" },
          { text: "[OK] Custody transferred to recycler.", time: "11:30:21", tone: "success" },
        ],
      },
      {
        label: "Final Disposition",
        description:
          "The recycler records the stream's final disposition. Reuse, recycling, or disposal is anchored as verified fate.",
        icon: FileCheck,
        logFilename: "cerulea_waste_engine.log",
        logLines: [
          { text: "[SYS] Recording disposition for WST_2210...", time: "16:45:33", tone: "default" },
          { text: "[CMD] setDisposition(WST_2210, outcome: \"RECYCLED\")", time: "16:45:33", tone: "primary" },
          { text: "[SYS] Sealing final fate to stream...", time: "16:45:33", tone: "secondary" },
          { text: "[OK] Disposition verified, chain complete.", time: "16:45:34", tone: "success" },
        ],
      },
      {
        label: "Compliance Reporting",
        description:
          "The refinery generates circular economy reporting from the tracked dispositions, evidencing diversion for regulators.",
        icon: ShieldCheck,
        logFilename: "cerulea_waste_engine.log",
        logLines: [
          { text: "[SYS] Compiling circular report for REF_3...", time: "09:10:11", tone: "default" },
          { text: "[CMD] reportDiversion(refinery: \"REF_3\", period: \"FY26\")", time: "09:10:11", tone: "primary" },
          { text: "[SYS] Aggregating verified dispositions...", time: "09:10:11", tone: "default" },
          { text: "[OK] Diversion rate evidenced on-chain.", time: "09:10:12", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes waste stream tracking into modular contracts. Each layer registers streams, transfers custody, records disposition, and reports diversion.",
    layers: [
      {
        title: "Stream Registry",
        subtitle: "The Waste Passport",
        icon: Recycling,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Waste Passport",
          description:
            "Registers each byproduct and waste stream at generation with its type and quantity, giving every stream an anchored origin at the refinery to track from.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract StreamRegistry {\n  struct Stream {\n    bytes32 wasteType;\n    uint256 kg;\n    uint256 generatedAt;\n  }\n\n  mapping(bytes32 => Stream) public streams;\n\n  function registerStream(bytes32 id, bytes32 wasteType, uint256 kg) external onlyRefinery {\n    streams[id] = Stream(wasteType, kg, block.timestamp);\n  }\n}",
        simAction: "Simulate Stream Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading waste type spent catalyst...", tone: "default" },
          { text: "Recording quantity 4200 kg...", tone: "default" },
          { text: "Anchoring stream WST_2210...", tone: "default" },
          { text: "Writing waste passport to storage...", tone: "default" },
          { text: "[SUCCESS] Waste stream registered.", tone: "success" },
        ],
      },
      {
        title: "Handler Handoff",
        subtitle: "The Custody Bind",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Custody Bind",
          description:
            "Requires each downstream handler to co-sign receipt of a stream, binding recyclers and disposal contractors into the verified chain so no stream leaves the record unaccounted.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function acceptStream(bytes32 id, uint256 kg) external {\n    Transfer storage t = pending[id];\n    require(t.handler == msg.sender, \"Not handler\");\n    require(kg == streams[id].kg, \"Quantity mismatch\");\n    custody[id] = msg.sender;\n    emit StreamAccepted(id, msg.sender, kg);\n}",
        simAction: "Simulate Handler Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recycler reviewing stream WST_2210...", tone: "default" },
          { text: "Comparing declared quantity against origin...", tone: "default" },
          { text: "Recording handler co-signature...", tone: "default" },
          { text: "Binding handler into chain...", tone: "default" },
          { text: "[SUCCESS] Custody transferred to recycler.", tone: "success" },
        ],
      },
      {
        title: "Disposition Seal",
        subtitle: "The Final Fate",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Final Fate",
          description:
            "Records each stream's final disposition as reuse, recycling, or disposal, so the fate of every byproduct is a verified record rather than an assumed outcome.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function setDisposition(bytes32 id, bytes32 outcome) external {\n    require(custody[id] == msg.sender, \"Not custodian\");\n    dispositions[id] = Disposition(outcome, block.timestamp);\n    emit DispositionSet(id, outcome);\n}",
        simAction: "Simulate Disposition Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recycler recording outcome for WST_2210...", tone: "default" },
          { text: "Confirming custodian...", tone: "default" },
          { text: "Sealing recycled disposition...", tone: "default" },
          { text: "Completing tracked chain...", tone: "default" },
          { text: "[SUCCESS] Final disposition verified.", tone: "success" },
        ],
      },
      {
        title: "Reporting Window",
        subtitle: "The Diversion View",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Diversion View",
          description:
            "Aggregates verified dispositions into circular economy reporting, evidencing how much waste was diverted from disposal into reuse or recycling for regulators and frameworks.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function reportDiversion(bytes32 refinery, bytes32 period) external view returns (uint256 diverted, uint256 disposed) {\n    return _aggregateDispositions(refinery, period);\n}",
        simAction: "Simulate Diversion Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating dispositions for REF_3...", tone: "default" },
          { text: "Summing recycled and reused streams...", tone: "default" },
          { text: "Computing diversion rate...", tone: "default" },
          { text: "Composing circular report...", tone: "default" },
          { text: "[SUCCESS] Diversion evidenced on-chain.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified waste stream tracking is a horizontal capability. Here is how different actors in the circular economy put the shared ledger to work.",
    sectors: [
      { icon: Factory, title: "Refinery Operators", description: "Track every byproduct to its final disposition and evidence diversion, turning circular economy claims into a verifiable record for regulators and sustainability frameworks.", assetTypes: ["Waste Streams", "Disposition Records", "Diversion Reports"] },
      { icon: Recycling, title: "Recyclers & Handlers", description: "Confirm receipt and record recycling outcomes on a shared chain, proving responsible processing and binding their role into the refinery's compliance record.", assetTypes: ["Handler Custody", "Recycling Outcomes", "Processing Records"] },
      { icon: Landmark, title: "Environmental Regulators", description: "Verify responsible waste management from an immutable disposition record, confirming reuse and recycling rates without collecting reports from each party.", assetTypes: ["Compliance Audits", "Disposition Trails", "Circular Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a refinery's waste management systems or capturing disposition from a handler device, Cerulea routes both into one waste trail.",
    tracks: [
      {
        title: "Track A: Waste System Bridging",
        description:
          "For refineries on legacy waste management systems. Stream and disposition data is translated into signed on-chain records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Waste Management", sublabel: "Refinery Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Stream Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Waste Stream Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Handler Disposition Capture",
        description:
          "For recyclers and disposal contractors. A signed device anchors each receipt and disposition straight to the waste trail.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Handler Device", sublabel: "Recyclers & Contractors", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Disposition Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Waste Disposition Record", icon: Recycling, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building waste stream tracking with stream registration, handler custody, and diversion reporting from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Stream & Disposition Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects environmental compliance integration benchmarks. Wiring waste management systems, building custom custody and disposition logic, and shipping circular reporting for an average refinery takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your stream and disposition rules into pre-audited WebAssembly binaries and provisions the waste ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "refinery-to-pipeline-custody-transfer-measurement-reconciliation",
    icon: Boxes,
    eyebrow: "Custody Measurement Layer",
    headline1: "Agree the measurement.",
    headline2: "Reconcile the transfer.",
    heroDescription:
      "Run an automated custody transfer reconciliation between refinery and pipeline operator based on verified flow measurement at the transfer point. Anchored flow data reconciles custody transfer volumes between the two parties on data both trust, so small measurement discrepancies no longer accumulate into disputed amounts.",
    heroCta: "Deploy Custody Reconciliation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn accumulating measurement discrepancies into an automatic reconciliation on data both parties trust.",
    mechanics: [
      { title: "Verified Flow Measurement", description: "External Data Oracles anchor flow measurement at the custody transfer point, so the volume that determines billing rests on data both parties can verify." },
      { title: "Two-Party Reconciliation", description: "The refinery and pipeline operator reconcile against the same anchored measurement, so a transfer volume is agreed rather than contested." },
      { title: "Discrepancy Detection", description: "The Audit Logs module flags any measurement discrepancy at the transfer point, stopping small differences from accumulating into large disputed amounts." },
      { title: "Automatic Settlement", description: "Escrow and Conditional Settlement settles the reconciled volume between parties, removing the manual measurement dispute process." },
      { title: "Transfer History", description: "Every transfer measurement and reconciliation is retained, giving both parties a verifiable history of custody volumes over time." },
      { title: "Dispute Elimination", description: "Because both parties settle on shared measurement data, disputes over refinery-to-pipeline custody volumes are eliminated at source." },
    ],
    lifecycleTitle: "The Custody Measurement Lifecycle",
    lifecycleSubtitle:
      "Follow a single refinery-to-pipeline transfer from flow measurement through reconciliation to automatic settlement.",
    lifecycleSteps: [
      {
        label: "Flow Measurement",
        description:
          "Product flow at the transfer point is measured and anchored, giving both parties a verified volume basis.",
        icon: Radio,
        logFilename: "cerulea_custodymeas_engine.log",
        logLines: [
          { text: "[SYS] Measuring transfer at point TP_22...", time: "06:00:03", tone: "default" },
          { text: "[CMD] anchorFlow(point: \"TP_22\", bbl: 84200)", time: "06:00:03", tone: "primary" },
          { text: "[AUTH] Verifying flow meter signature...", time: "06:00:04", tone: "secondary" },
          { text: "[OK] Transfer volume sealed at 84200 bbl.", time: "06:00:04", tone: "success" },
        ],
      },
      {
        label: "Two-Party Match",
        description:
          "The refinery and pipeline operator both confirm the anchored measurement, agreeing the transfer volume.",
        icon: Handshake,
        logFilename: "cerulea_custodymeas_engine.log",
        logLines: [
          { text: "[SYS] Awaiting confirmations for TP_22 transfer...", time: "06:02:20", tone: "default" },
          { text: "[CMD] confirm(transfer: \"TRF_9021\", party: \"PIPE_OP\")", time: "06:02:20", tone: "primary" },
          { text: "[SYS] Both parties agree on measurement.", time: "06:02:20", tone: "default" },
          { text: "[OK] Transfer volume mutually agreed.", time: "06:02:21", tone: "success" },
        ],
      },
      {
        label: "Discrepancy Check",
        description:
          "The measurement is checked against expected volume. Any discrepancy is flagged before it can accumulate.",
        icon: Scale,
        logFilename: "cerulea_custodymeas_engine.log",
        logLines: [
          { text: "[SYS] Checking discrepancy for TRF_9021...", time: "06:04:44", tone: "default" },
          { text: "[CMD] checkDiscrepancy(transfer: \"TRF_9021\")", time: "06:04:44", tone: "primary" },
          { text: "[SYS] Variance within agreed tolerance.", time: "06:04:44", tone: "default" },
          { text: "[OK] No discrepancy flagged.", time: "06:04:45", tone: "success" },
        ],
      },
      {
        label: "Automatic Settlement",
        description:
          "The reconciled transfer volume settles between the parties automatically on the shared measurement.",
        icon: Wallet,
        logFilename: "cerulea_custodymeas_engine.log",
        logLines: [
          { text: "[SYS] Settling custody transfer TRF_9021...", time: "06:06:10", tone: "default" },
          { text: "[CMD] settle(transfer: \"TRF_9021\")", time: "06:06:10", tone: "primary" },
          { text: "[AUTH] Confirming agreed measurement...", time: "06:06:11", tone: "secondary" },
          { text: "[OK] Transfer settled, dispute avoided.", time: "06:06:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes custody measurement reconciliation into modular contracts. Each layer anchors flow, matches parties, checks discrepancy, and settles automatically.",
    layers: [
      {
        title: "Flow Oracle",
        subtitle: "The Measurement Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Measurement Feed",
          description:
            "Anchors verified flow measurement at the custody transfer point, giving billing a trusted volume basis so small differences cannot accumulate into disputed amounts.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract CustodyFlowOracle {\n  mapping(bytes32 => uint256) public transferVolume;\n\n  function anchorFlow(bytes32 transfer, uint256 bbl, bytes calldata sig) external {\n    require(verifyMeter(transfer, sig), \"Bad meter sig\");\n    transferVolume[transfer] = bbl;\n    emit FlowAnchored(transfer, bbl);\n  }\n}",
        simAction: "Simulate Flow Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Measuring flow at transfer point TP_22...", tone: "default" },
          { text: "Validating flow meter signature...", tone: "default" },
          { text: "Sealing 84200 bbl volume...", tone: "default" },
          { text: "Recording transfer measurement...", tone: "default" },
          { text: "[SUCCESS] Flow measurement anchored.", tone: "success" },
        ],
      },
      {
        title: "Match Hook",
        subtitle: "The Two-Party Agreement",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Party Agreement",
          description:
            "Requires both refinery and pipeline operator to confirm the anchored measurement, turning a contested transfer volume into a mutually agreed figure before settlement.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function confirm(bytes32 transfer) external {\n    confirmations[transfer][msg.sender] = true;\n    if (confirmations[transfer][refinery] && confirmations[transfer][pipeline]) {\n        emit VolumeAgreed(transfer);\n    }\n}",
        simAction: "Simulate Party Match",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Pipeline operator reviewing TP_22 measurement...", tone: "default" },
          { text: "Comparing against own flow data...", tone: "default" },
          { text: "Recording confirmation...", tone: "default" },
          { text: "Confirming both parties agree...", tone: "default" },
          { text: "[SUCCESS] Transfer volume mutually agreed.", tone: "success" },
        ],
      },
      {
        title: "Discrepancy Guard",
        subtitle: "The Variance Check",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Variance Check",
          description:
            "Compares the measured volume against expected transfer and flags any variance beyond tolerance, stopping small measurement discrepancies from accumulating into large disputes.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function checkDiscrepancy(bytes32 transfer) external view returns (bool, int256 variance) {\n    variance = int256(transferVolume[transfer]) - int256(expected[transfer]);\n    return (_abs(variance) <= tolerance[transfer], variance);\n}",
        simAction: "Simulate Discrepancy Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading expected volume for TRF_9021...", tone: "default" },
          { text: "Comparing against measured 84200 bbl...", tone: "default" },
          { text: "Computing variance...", tone: "default" },
          { text: "Checking against tolerance...", tone: "default" },
          { text: "[SUCCESS] Variance within tolerance.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Auto Reconciler",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Reconciler",
          description:
            "Settles the agreed transfer volume between the parties automatically once measurement is confirmed, removing the manual dispute process that measurement differences used to trigger.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function settle(bytes32 transfer) external {\n    require(confirmations[transfer][refinery] && confirmations[transfer][pipeline], \"Not agreed\");\n    uint256 amount = transferVolume[transfer] * rate[transfer];\n    _transferBetween(pipeline, refinery, amount);\n    emit TransferSettled(transfer, amount);\n}",
        simAction: "Simulate Auto Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming both parties agreed on TRF_9021...", tone: "default" },
          { text: "Computing settlement from agreed volume...", tone: "default" },
          { text: "Transferring between parties...", tone: "default" },
          { text: "Recording settlement on-chain...", tone: "default" },
          { text: "[SUCCESS] Transfer reconciled, dispute avoided.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated custody measurement reconciliation is a horizontal capability. Here is how different actors at the transfer point put the shared ledger to work.",
    sectors: [
      { icon: Factory, title: "Refinery Operators", description: "Settle product transfers on measurement both parties trust, ending the accumulating discrepancies and disputes that came from unmatched custody meters.", assetTypes: ["Transfer Measurements", "Reconciliations", "Settlement Records"] },
      { icon: Truck, title: "Pipeline Operators", description: "Confirm received volumes against a shared measurement and settle automatically, replacing contested manual reconciliation with an agreed transfer record.", assetTypes: ["Received Volumes", "Measurement Confirmations", "Custody Records"] },
      { icon: Landmark, title: "Auditors & Regulators", description: "Audit custody transfers from one measurement record, confirming volumes were reconciled fairly without collecting figures from each party.", assetTypes: ["Transfer Audits", "Measurement Trails", "Reconciliation Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging custody metering systems or reading directly from the transfer-point flow computer, Cerulea routes both into one reconciliation ledger.",
    tracks: [
      {
        title: "Track A: Custody Metering Bridging",
        description:
          "For operators on legacy custody metering systems. Measurement data is translated into signed on-chain transfer records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Custody Metering", sublabel: "Transfer-Point Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Measurement Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Custody Reconciliation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Flow Computer Capture",
        description:
          "For transfer-point flow computers. Each measurement is signed by a device key and routed straight to the reconciliation contract.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Flow Computer / Edge", sublabel: "Transfer-Point Hardware", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Measurement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Agreed Transfer Record", icon: Boxes, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building custody measurement reconciliation with verified flow, two-party matching, and automatic settlement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Measurement & Settlement Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects custody settlement integration benchmarks. Wiring custody metering, building custom reconciliation logic, and shipping automatic settlement for an average transfer point takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your measurement and settlement rules into pre-audited WebAssembly binaries and provisions the reconciliation ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "biofuel-blending-mandate-compliance-certification",
    icon: Tractor,
    eyebrow: "Blending Compliance Layer",
    headline1: "Prove the blend ratio.",
    headline2: "Trace the biofuel source.",
    heroDescription:
      "Run a verified record proving fuel blends meet the mandated biofuel percentage, with traceable sourcing of the biofuel component. Each batch's blending ratio and the origin of its biofuel are anchored as verified records, giving the oil marketing company a defensible compliance certificate for regulatory inspection.",
    heroCta: "Deploy Blending Compliance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a claimed blend percentage into a verified certificate backed by traceable biofuel sourcing.",
    mechanics: [
      { title: "Blend Ratio Anchoring", description: "Compliance Attestations anchor each batch's biofuel blending ratio, so the mandated percentage is a verified record rather than an unproven claim." },
      { title: "Biofuel Source Tracing", description: "The Traceability Ledger traces the biofuel component to its approved source, proving the blend used an eligible feedstock." },
      { title: "Batch Certification", description: "Each blended batch receives a defensible compliance certificate tying its ratio and source together for regulatory inspection." },
      { title: "Approved Supplier Check", description: "The biofuel component is checked against the register of approved sources, so a non-compliant feedstock is caught before blending is certified." },
      { title: "Immutable Compliance Trail", description: "The Audit Logs module retains every batch ratio and source, giving the company a tamper-evident record for any inspection or audit." },
      { title: "Inspection-Ready Evidence", description: "An inspector queries a batch and sees its verified ratio and sourcing at once, replacing document requests with an on-chain certificate." },
    ],
    lifecycleTitle: "The Blending Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a single fuel batch from biofuel sourcing through blend certification to a regulatory inspection.",
    lifecycleSteps: [
      {
        label: "Biofuel Sourcing",
        description:
          "The biofuel component is received and its approved source anchored, establishing eligibility before blending.",
        icon: Tractor,
        logFilename: "cerulea_blend_engine.log",
        logLines: [
          { text: "[SYS] Recording biofuel receipt for BLD_5521...", time: "07:15:03", tone: "default" },
          { text: "[CMD] anchorSource(batch: \"BLD_5521\", src: \"ETH_MILL_7\", kl: 22)", time: "07:15:03", tone: "primary" },
          { text: "[AUTH] Checking source against approved register...", time: "07:15:04", tone: "secondary" },
          { text: "[OK] Approved biofuel source anchored.", time: "07:15:04", tone: "success" },
        ],
      },
      {
        label: "Blend Anchoring",
        description:
          "The batch is blended and its biofuel percentage anchored against the mandate.",
        icon: Droplet,
        logFilename: "cerulea_blend_engine.log",
        logLines: [
          { text: "[SYS] Anchoring blend ratio for BLD_5521...", time: "09:40:20", tone: "default" },
          { text: "[CMD] anchorRatio(batch: \"BLD_5521\", biofuelPct: 20, mandate: 20)", time: "09:40:20", tone: "primary" },
          { text: "[SYS] Ratio meets mandated percentage.", time: "09:40:20", tone: "default" },
          { text: "[OK] Blend ratio sealed to batch.", time: "09:40:21", tone: "success" },
        ],
      },
      {
        label: "Certificate Issuance",
        description:
          "A compliance certificate is issued for the batch, tying its verified ratio and biofuel source together.",
        icon: FileCheck,
        logFilename: "cerulea_blend_engine.log",
        logLines: [
          { text: "[SYS] Issuing compliance certificate for BLD_5521...", time: "09:42:44", tone: "default" },
          { text: "[CMD] certify(batch: \"BLD_5521\")", time: "09:42:44", tone: "primary" },
          { text: "[AUTH] Binding ratio and source to certificate...", time: "09:42:45", tone: "secondary" },
          { text: "[OK] Defensible certificate CERT_BLD_5521 issued.", time: "09:42:45", tone: "success" },
        ],
      },
      {
        label: "Regulatory Inspection",
        description:
          "An inspector queries the batch and sees its verified ratio and sourcing, clearing compliance from the certificate.",
        icon: ShieldCheck,
        logFilename: "cerulea_blend_engine.log",
        logLines: [
          { text: "[SYS] Inspection query for batch BLD_5521...", time: "14:05:11", tone: "default" },
          { text: "[CMD] resolveCertificate(batch: \"BLD_5521\")", time: "14:05:11", tone: "primary" },
          { text: "[SYS] Returning verified ratio and source...", time: "14:05:11", tone: "default" },
          { text: "[OK] Blending compliance verified on-chain.", time: "14:05:12", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes blending compliance into modular contracts. Each layer sources biofuel, anchors the ratio, certifies the batch, and exposes evidence to inspectors.",
    layers: [
      {
        title: "Source Registry",
        subtitle: "The Feedstock Check",
        icon: Tractor,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Feedstock Check",
          description:
            "Traces the biofuel component to its source and checks it against the approved register, so a non-compliant feedstock is caught before any blend is certified.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "contract BiofuelSource {\n  mapping(bytes32 => bool) public approved;\n\n  function anchorSource(bytes32 batch, bytes32 source, uint256 kl) external {\n    require(approved[source], \"Source not approved\");\n    sources[batch] = Source(source, kl, block.timestamp);\n    emit SourceAnchored(batch, source);\n  }\n}",
        simAction: "Simulate Source Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading biofuel receipt for BLD_5521...", tone: "default" },
          { text: "Checking source against approved register...", tone: "default" },
          { text: "Confirming feedstock eligible...", tone: "default" },
          { text: "Anchoring approved source...", tone: "default" },
          { text: "[SUCCESS] Approved biofuel source anchored.", tone: "success" },
        ],
      },
      {
        title: "Ratio Attestor",
        subtitle: "The Mandate Seal",
        icon: Droplet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Mandate Seal",
          description:
            "Anchors each batch's biofuel percentage against the mandate, so the blend ratio is a verified record rather than a claim the oil marketing company must defend with paperwork.",
          platformFunction: "Compliance Enforcement",
        },
        codeSnippet:
          "function anchorRatio(bytes32 batch, uint256 biofuelPct, uint256 mandate) external onlyBlender {\n    require(biofuelPct >= mandate, \"Below mandate\");\n    ratios[batch] = Ratio(biofuelPct, mandate, block.timestamp);\n    emit RatioAnchored(batch, biofuelPct);\n}",
        simAction: "Simulate Ratio Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading blend ratio for BLD_5521...", tone: "default" },
          { text: "Comparing 20% against mandate...", tone: "default" },
          { text: "Confirming mandate met...", tone: "default" },
          { text: "Sealing ratio to batch...", tone: "default" },
          { text: "[SUCCESS] Blend ratio anchored.", tone: "success" },
        ],
      },
      {
        title: "Certificate Engine",
        subtitle: "The Compliance Proof",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Proof",
          description:
            "Issues a certificate tying each batch's verified ratio and biofuel source together, giving the company a defensible compliance document for regulatory inspection.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "function certify(bytes32 batch) external returns (bytes32) {\n    require(ratios[batch].timestamp != 0 && sources[batch].timestamp != 0, \"Incomplete\");\n    bytes32 certId = keccak256(abi.encode(batch, ratios[batch].pct, sources[batch].source));\n    certificates[batch] = certId;\n    return certId;\n}",
        simAction: "Simulate Batch Certify",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming ratio and source for BLD_5521...", tone: "default" },
          { text: "Computing certificate digest...", tone: "default" },
          { text: "Binding ratio and source together...", tone: "default" },
          { text: "Sealing compliance certificate...", tone: "default" },
          { text: "[SUCCESS] Defensible certificate issued.", tone: "success" },
        ],
      },
      {
        title: "Inspection Window",
        subtitle: "The Evidence View",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence View",
          description:
            "Returns a batch's verified ratio and sourcing to an inspector at once, replacing document requests with an on-chain certificate that clears blending compliance instantly.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveCertificate(bytes32 batch) external view returns (Ratio memory, Source memory) {\n    return (ratios[batch], sources[batch]);\n}",
        simAction: "Simulate Inspection Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Inspector opening certificate for BLD_5521...", tone: "default" },
          { text: "Fetching verified blend ratio...", tone: "default" },
          { text: "Attaching biofuel source...", tone: "default" },
          { text: "Returning compliance evidence...", tone: "default" },
          { text: "[SUCCESS] Blending compliance verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified blending compliance is a horizontal capability. Here is how different actors in the fuel blending chain put the shared ledger to work.",
    sectors: [
      { icon: Factory, title: "Oil Marketing Companies", description: "Prove mandated biofuel percentages per batch with traceable sourcing, holding a defensible compliance certificate for every blend rather than assembling paperwork under inspection.", assetTypes: ["Blend Batches", "Compliance Certificates", "Ratio Records"] },
      { icon: Tractor, title: "Biofuel Suppliers", description: "Have their feedstock recorded as an approved source and bound into each blend's compliance record, proving eligibility of the biofuel they supply.", assetTypes: ["Feedstock Sources", "Supply Records", "Eligibility Attestations"] },
      { icon: Landmark, title: "Fuel Regulators", description: "Verify blending mandate compliance from anchored ratios and sourcing, confirming eligible feedstock without collecting documents from each company.", assetTypes: ["Mandate Audits", "Sourcing Trails", "Compliance Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a blending terminal's systems or capturing ratios from a field device, Cerulea routes both into one compliance ledger.",
    tracks: [
      {
        title: "Track A: Blending Terminal Bridging",
        description:
          "For terminals on legacy blending systems. Ratio and source data is translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Blending Systems", sublabel: "Terminal Operations", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Ratio Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Blending Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Blend Capture",
        description:
          "For blending points with edge devices. Each ratio and source record is signed by a device key and routed straight to the compliance ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Blend Device / Edge", sublabel: "Blending Hardware", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Ratio Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Blend Certificate Record", icon: Tractor, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building blending compliance with ratio anchoring, source tracing, and batch certification from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Ratio & Sourcing Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects fuel compliance integration benchmarks. Wiring blending systems, building custom ratio and sourcing logic, and shipping batch certification for an average company takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your ratio and sourcing rules into pre-audited WebAssembly binaries and provisions the compliance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "fuel-quality-certification-and-adulteration-detection-across-retail-ou",
    icon: QrCode,
    eyebrow: "Fuel Quality Assurance Layer",
    headline1: "Test at every stage.",
    headline2: "Trace adulteration to source.",
    heroDescription:
      "Deploy a fuel quality monitoring network from refinery to pump where adulteration is detectable at any stage, surprise test results are on-chain and immutable, and supply is suspended automatically on a quality failure. When a test detects adulteration, on-chain records trace it to the distributor who mixed kerosene after depot dispatch, with court-ready evidence.",
    heroCta: "Deploy Fuel Quality Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn infrequent paper testing into a refinery-to-pump quality chain that traces adulteration to its source.",
    mechanics: [
      { title: "End-to-End Quality Chain", description: "The Traceability Ledger follows fuel from refinery to pump, so a quality reading at any stage attaches to the same batch record and adulteration is detectable anywhere." },
      { title: "Immutable Test Results", description: "The Quality and Recall Ledger anchors each surprise test result on-chain, so an adulteration finding cannot be altered or lost." },
      { title: "Device-Attested Sampling", description: "The Device Attestation module signs each test from a verified device, so a result is bound to a genuine instrument rather than a paper form." },
      { title: "Source Tracing", description: "Because custody is recorded at each hop, a failed test traces adulteration to the exact custodian, such as a distributor who mixed kerosene after dispatch." },
      { title: "Automatic Supply Suspension", description: "A quality failure automatically suspends supply from the implicated point, stopping adulterated fuel from moving further down the chain." },
      { title: "Court-Ready Evidence", description: "The sealed test and custody records form court-ready evidence, supporting enforcement against adulteration and subsidy leakage." },
    ],
    lifecycleTitle: "The Fuel Quality Lifecycle",
    lifecycleSubtitle:
      "Follow a single fuel batch from refinery dispatch through a surprise pump test to source tracing and suspension.",
    lifecycleSteps: [
      {
        label: "Refinery Dispatch",
        description:
          "A fuel batch is dispatched from the refinery with a baseline quality reading anchored as its origin.",
        icon: Factory,
        logFilename: "cerulea_fuelqual_engine.log",
        logLines: [
          { text: "[SYS] Dispatching batch FUEL_7712 from refinery...", time: "05:20:04", tone: "default" },
          { text: "[CMD] dispatch { batch: \"FUEL_7712\", grade: \"BS6_DIESEL\", density: 832 }", time: "05:20:04", tone: "primary" },
          { text: "[AUTH] Anchoring baseline quality reading...", time: "05:20:05", tone: "secondary" },
          { text: "[OK] Batch anchored at chain genesis.", time: "05:20:05", tone: "success" },
        ],
      },
      {
        label: "Custody Handoff",
        description:
          "The batch moves through depot and distributor. Each custody handoff is recorded on the batch chain.",
        icon: Truck,
        logFilename: "cerulea_fuelqual_engine.log",
        logLines: [
          { text: "[SYS] Handoff pending at distributor DST_4...", time: "10:15:33", tone: "default" },
          { text: "[CMD] acceptCustody(FUEL_7712, party: \"DST_4\")", time: "10:15:33", tone: "primary" },
          { text: "[SYS] Custody recorded on batch chain.", time: "10:15:34", tone: "default" },
          { text: "[OK] Chain now 3 hops from refinery.", time: "10:15:34", tone: "success" },
        ],
      },
      {
        label: "Surprise Test",
        description:
          "A mobile team tests fuel at a pump. The device-attested result is anchored, and adulteration is detected.",
        icon: QrCode,
        logFilename: "cerulea_fuelqual_engine.log",
        logLines: [
          { text: "[SYS] Recording surprise test at pump PMP_51...", time: "13:44:12", tone: "default" },
          { text: "[CMD] anchorTest(batch: \"FUEL_7712\", density: 810, device: \"TST_9\")", time: "13:44:12", tone: "primary" },
          { text: "[SYS] Density off spec, adulteration flagged...", time: "13:44:12", tone: "error" },
          { text: "[OK] Failed test sealed, tamper-evident.", time: "13:44:13", tone: "success" },
        ],
      },
      {
        label: "Source Trace & Suspension",
        description:
          "The chain traces adulteration to the distributor and supply is suspended, with court-ready evidence anchored.",
        icon: Gavel,
        logFilename: "cerulea_fuelqual_engine.log",
        logLines: [
          { text: "[SYS] Tracing adulteration for FUEL_7712...", time: "13:46:20", tone: "default" },
          { text: "[CMD] traceSource(batch: \"FUEL_7712\")", time: "13:46:20", tone: "primary" },
          { text: "[SYS] Adulteration localized to DST_4 after dispatch...", time: "13:46:20", tone: "secondary" },
          { text: "[OK] Supply suspended, evidence court-ready.", time: "13:46:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fuel quality monitoring into modular contracts. Each layer anchors the batch, records custody, seals device-attested tests, and traces adulteration to source.",
    layers: [
      {
        title: "Batch Chain",
        subtitle: "The Quality Passport",
        icon: Factory,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Quality Passport",
          description:
            "Anchors each fuel batch at refinery dispatch and records custody at every hop, so a quality reading anywhere from depot to pump attaches to the same batch record.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract FuelBatchChain {\n  struct Batch {\n    string grade;\n    uint256 baselineDensity;\n    uint256 dispatchedAt;\n  }\n\n  mapping(bytes32 => Batch) public batches;\n\n  function dispatch(bytes32 id, string calldata grade, uint256 density) external onlyRefinery {\n    batches[id] = Batch(grade, density, block.timestamp);\n  }\n}",
        simAction: "Simulate Batch Dispatch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading grade for batch FUEL_7712...", tone: "default" },
          { text: "Recording baseline density 832...", tone: "default" },
          { text: "Anchoring batch at refinery dispatch...", tone: "default" },
          { text: "Writing quality passport to storage...", tone: "default" },
          { text: "[SUCCESS] Fuel batch anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Test Notary",
        subtitle: "The Device Seal",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Device Seal",
          description:
            "Anchors each quality test from a device-attested instrument, so a surprise result is bound to a genuine device and cannot be altered or replaced with a favourable paper form.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorTest(bytes32 batch, uint256 density, bytes32 device, bytes calldata sig) external {\n    require(attestDevice(device, sig), \"Bad device\");\n    tests[batch].push(Test(density, device, block.timestamp));\n    if (_offSpec(batch, density)) emit AdulterationFlagged(batch, density);\n}",
        simAction: "Simulate Test Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading test from device TST_9 at pump...", tone: "default" },
          { text: "Verifying device attestation...", tone: "default" },
          { text: "Comparing density 810 against spec...", tone: "default" },
          { text: "Flagging adulteration, sealing result...", tone: "default" },
          { text: "[SUCCESS] Failed test anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Source Tracer",
        subtitle: "The Custody Locator",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Custody Locator",
          description:
            "Walks the batch custody chain to localize where adulteration was introduced, pinpointing the exact custodian, such as a distributor who mixed kerosene after depot dispatch.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function traceSource(bytes32 batch) external view returns (address culprit) {\n    Hop[] memory chain = custodyChain[batch];\n    for (uint256 i = 1; i < chain.length; i++) {\n        if (_qualityDropped(batch, chain[i-1], chain[i])) return chain[i].custodian;\n    }\n}",
        simAction: "Simulate Source Trace",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Walking custody chain for FUEL_7712...", tone: "default" },
          { text: "Comparing quality across hops...", tone: "default" },
          { text: "Detecting drop after depot dispatch...", tone: "default" },
          { text: "Localizing to distributor DST_4...", tone: "default" },
          { text: "[SUCCESS] Adulteration traced to source.", tone: "success" },
        ],
      },
      {
        title: "Suspension Guard",
        subtitle: "The Supply Stop",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Supply Stop",
          description:
            "Automatically suspends supply from the implicated point on a quality failure and seals the test and custody records as court-ready evidence for enforcement.",
          platformFunction: "Compliance Enforcement",
        },
        codeSnippet:
          "function suspendSupply(bytes32 batch, address culprit) external {\n    require(_hasFailedTest(batch), \"No failure\");\n    suspended[culprit] = true;\n    emit SupplySuspended(culprit, batch, block.timestamp);\n}",
        simAction: "Simulate Supply Suspension",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming failed test for FUEL_7712...", tone: "default" },
          { text: "Identifying implicated distributor DST_4...", tone: "default" },
          { text: "Suspending supply from source...", tone: "default" },
          { text: "Sealing court-ready evidence...", tone: "default" },
          { text: "[SUCCESS] Supply suspended, evidence sealed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Refinery-to-pump quality monitoring is a horizontal capability. Here is how different actors in fuel retail put the shared ledger to work.",
    sectors: [
      { icon: Factory, title: "Oil Marketing Companies", description: "Monitor fuel quality from refinery to pump and suspend supply on failure, protecting brand integrity and cutting subsidy leakage with adulteration traceable to source.", assetTypes: ["Fuel Batches", "Quality Tests", "Suspension Actions"] },
      { icon: QrCode, title: "Retail Outlets", description: "Prove the fuel they sell matches the batch dispatched to them, defending honest dealers against adulteration introduced upstream with a shared quality record.", assetTypes: ["Pump Tests", "Custody Records", "Quality Proofs"] },
      { icon: Landmark, title: "Regulators & Enforcement", description: "Detect and prosecute adulteration with court-ready on-chain evidence, tracing tampering to the exact custodian instead of relying on infrequent paper testing.", assetTypes: ["Test Evidence", "Adulteration Traces", "Enforcement Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging depot and distribution systems or capturing tests from attested field devices, Cerulea routes both into one quality ledger.",
    tracks: [
      {
        title: "Track A: Distribution System Bridging",
        description:
          "For companies on legacy depot and distribution systems. Custody events are translated into signed on-chain batch records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Depot / Distribution", sublabel: "Company Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Fuel Quality Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Attested Field Testing",
        description:
          "For mobile testing teams. An attested device signs each quality test directly to the batch chain.",
        connectorLabels: ["DEVICE ATTESTATION", "STATE EXECUTION"],
        nodes: [
          { label: "Test Device", sublabel: "Mobile Testing Teams", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Test Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Quality Record", icon: QrCode, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building fuel quality monitoring with an end-to-end chain, device-attested tests, and automatic suspension from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Quality & Custody Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects supply chain integrity integration benchmarks. Wiring distribution systems, building custom quality and tracing logic, and shipping device-attested testing for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your quality and custody rules into pre-audited WebAssembly binaries and provisions the quality ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "loyalty-and-rewards-tokenization-across-multi-brand-petrol-stations",
    icon: Gift,
    eyebrow: "Loyalty Interoperability Layer",
    headline1: "One wallet, every brand.",
    headline2: "Redeem points anywhere.",
    heroDescription:
      "Stand up an interoperable fuel loyalty token on a public chain where customers earn and redeem across brands and settlement between oil marketing companies is automated. A customer redeems points earned at one brand for a coffee at a partner cafe and a discount at another brand's pump, all on one wallet, replacing three siloed legacy systems.",
    heroCta: "Deploy Loyalty Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn siloed, expiring per-brand points into one interoperable token earned and redeemed everywhere.",
    mechanics: [
      { title: "Interoperable Token", description: "The ERC-20 Token module represents loyalty value as one token, so points earned at any brand are spendable across the whole network rather than locked to a single program." },
      { title: "Cross-Brand Earn & Burn", description: "The Loyalty and Rewards Ledger records earning at a pump and redemption at any partner, so a customer moves value freely between fuel brands, stores, and cafes." },
      { title: "Automated Inter-OMC Settlement", description: "When a token earned at one brand is redeemed at another, settlement between the oil marketing companies is computed and cleared automatically." },
      { title: "Fiat On-Ramp", description: "The Fiat On-Ramp module lets customers and partners bridge value in and out, connecting the loyalty token to real-world spending at partner retailers." },
      { title: "Unified Wallet", description: "One customer wallet holds all loyalty value across brands, replacing separate accounts and the points that expired unused in each siloed program." },
      { title: "Transparent Redemption", description: "Every earn and redemption is on-chain, so customers see their true balance and partners reconcile redemptions against a shared record." },
    ],
    lifecycleTitle: "The Loyalty Token Lifecycle",
    lifecycleSubtitle:
      "Follow loyalty value from a fuel purchase through cross-brand redemption to automated settlement between brands.",
    lifecycleSteps: [
      {
        label: "Points Earned",
        description:
          "A customer fuels up at one brand and earns loyalty tokens to their unified wallet.",
        icon: Zap,
        logFilename: "cerulea_loyalty_engine.log",
        logLines: [
          { text: "[SYS] Recording fuel purchase for wallet CX_2201...", time: "08:15:03", tone: "default" },
          { text: "[CMD] earn(wallet: \"CX_2201\", brand: \"BRAND_A\", tokens: 240)", time: "08:15:03", tone: "primary" },
          { text: "[AUTH] Minting loyalty tokens to wallet...", time: "08:15:04", tone: "secondary" },
          { text: "[OK] 240 tokens credited across network.", time: "08:15:04", tone: "success" },
        ],
      },
      {
        label: "Cross-Brand Redemption",
        description:
          "The customer redeems tokens at a partner cafe and another brand's pump, all from one wallet.",
        icon: Gift,
        logFilename: "cerulea_loyalty_engine.log",
        logLines: [
          { text: "[SYS] Redemption request from wallet CX_2201...", time: "12:40:20", tone: "default" },
          { text: "[CMD] redeem(wallet: \"CX_2201\", at: \"CAFE_P\", tokens: 120)", time: "12:40:20", tone: "primary" },
          { text: "[SYS] Burning tokens, applying reward...", time: "12:40:20", tone: "default" },
          { text: "[OK] Redeemed at partner, balance updated.", time: "12:40:21", tone: "success" },
        ],
      },
      {
        label: "Inter-Brand Settlement",
        description:
          "Because the tokens were earned at one brand and redeemed at another, settlement between the OMCs is computed automatically.",
        icon: Scale,
        logFilename: "cerulea_loyalty_engine.log",
        logLines: [
          { text: "[SYS] Computing inter-OMC settlement...", time: "12:41:44", tone: "default" },
          { text: "[CMD] settleBrands(from: \"BRAND_A\", to: \"CAFE_P\", tokens: 120)", time: "12:41:44", tone: "primary" },
          { text: "[SYS] Clearing value between brands...", time: "12:41:44", tone: "secondary" },
          { text: "[OK] Settlement cleared automatically.", time: "12:41:45", tone: "success" },
        ],
      },
      {
        label: "Balance Query",
        description:
          "The customer checks their unified balance across all brands from one wallet, with every earn and burn visible.",
        icon: Search,
        logFilename: "cerulea_loyalty_engine.log",
        logLines: [
          { text: "[SYS] Balance query for wallet CX_2201...", time: "18:05:11", tone: "default" },
          { text: "[CMD] resolveBalance(wallet: \"CX_2201\")", time: "18:05:11", tone: "primary" },
          { text: "[SYS] Aggregating earns and redemptions...", time: "18:05:11", tone: "default" },
          { text: "[OK] Unified balance returned, nothing expired.", time: "18:05:12", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fuel loyalty into modular contracts. Each layer mints tokens, redeems across brands, settles between OMCs, and exposes a unified balance.",
    layers: [
      {
        title: "Loyalty Token",
        subtitle: "The Interoperable Unit",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Interoperable Unit",
          description:
            "Represents loyalty value as one transferable token spendable across every brand, replacing per-brand points locked to a single program and prone to expiring unused.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract LoyaltyToken {\n  mapping(address => uint256) public balance;\n\n  function earn(address wallet, bytes32 brand, uint256 amount) external onlyBrand {\n    balance[wallet] += amount;\n    emit Earned(wallet, brand, amount);\n  }\n}",
        simAction: "Simulate Token Earn",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading fuel purchase for CX_2201...", tone: "default" },
          { text: "Computing token reward...", tone: "default" },
          { text: "Minting 240 tokens to wallet...", tone: "default" },
          { text: "Recording earn across network...", tone: "default" },
          { text: "[SUCCESS] Loyalty tokens credited.", tone: "success" },
        ],
      },
      {
        title: "Redemption Ledger",
        subtitle: "The Cross-Brand Sink",
        icon: Gift,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cross-Brand Sink",
          description:
            "Records earning and redemption across any brand or partner, so a customer moves value freely between fuel pumps, convenience stores, and cafes from one wallet.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function redeem(address wallet, bytes32 partner, uint256 amount) external {\n    require(balance[wallet] >= amount, \"Insufficient\");\n    balance[wallet] -= amount;\n    redemptions[partner].push(Redemption(wallet, amount, block.timestamp));\n    emit Redeemed(wallet, partner, amount);\n}",
        simAction: "Simulate Cross-Brand Redemption",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading redemption at partner CAFE_P...", tone: "default" },
          { text: "Confirming wallet balance...", tone: "default" },
          { text: "Burning 120 tokens...", tone: "default" },
          { text: "Applying reward at partner...", tone: "default" },
          { text: "[SUCCESS] Redeemed across brands.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The Inter-OMC Clearer",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Inter-OMC Clearer",
          description:
            "Computes and clears value between oil marketing companies when a token is earned at one brand and redeemed at another, automating settlement that siloed programs never shared.",
          platformFunction: "Settlement Logic",
        },
        codeSnippet:
          "function settleBrands(bytes32 issuer, bytes32 redeemer, uint256 amount) external {\n    uint256 value = amount * tokenValue;\n    _transferBetween(issuer, redeemer, value);\n    emit BrandSettled(issuer, redeemer, value);\n}",
        simAction: "Simulate Inter-Brand Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading cross-brand redemption...", tone: "default" },
          { text: "Computing value between BRAND_A and CAFE_P...", tone: "default" },
          { text: "Clearing settlement...", tone: "default" },
          { text: "Recording on-chain...", tone: "default" },
          { text: "[SUCCESS] Inter-OMC settlement cleared.", tone: "success" },
        ],
      },
      {
        title: "Balance Window",
        subtitle: "The Unified View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Unified View",
          description:
            "Returns a customer's single balance across all brands with every earn and redemption visible, replacing separate accounts and points that quietly expired in each program.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveBalance(address wallet) external view returns (uint256, Redemption[] memory) {\n    return (balance[wallet], history[wallet]);\n}",
        simAction: "Simulate Balance Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Customer opening unified wallet view...", tone: "default" },
          { text: "Aggregating earns across brands...", tone: "default" },
          { text: "Attaching redemption history...", tone: "default" },
          { text: "Confirming nothing expired...", tone: "default" },
          { text: "[SUCCESS] Unified balance returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Interoperable fuel loyalty is a horizontal capability. Here is how different actors in the retail network put the shared ledger to work.",
    sectors: [
      { icon: Factory, title: "Oil Marketing Companies", description: "Offer a loyalty token customers can use across brands and partners, retiring siloed legacy systems and settling cross-brand redemptions automatically.", assetTypes: ["Loyalty Tokens", "Earn Events", "Inter-OMC Settlements"] },
      { icon: Gift, title: "Partner Retailers", description: "Accept and issue loyalty value alongside fuel brands, drawing customers with cross-network rewards and reconciling redemptions against a shared record.", assetTypes: ["Partner Redemptions", "Reward Offers", "Reconciliation Records"] },
      { icon: Users, title: "Customers", description: "Hold all loyalty value in one wallet and redeem it anywhere in the network, so points earned at the pump are never locked to one brand or lost to expiry.", assetTypes: ["Unified Wallets", "Token Balances", "Redemption History"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging brand point-of-sale systems or letting customers transact natively from a wallet, Cerulea routes both into one loyalty ledger.",
    tracks: [
      {
        title: "Track A: Point-of-Sale Bridging",
        description:
          "For brands on legacy POS and loyalty systems. Earn and redemption events are translated into signed on-chain token operations through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "POS / Loyalty Systems", sublabel: "Brand Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Loyalty Token Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Wallet Transactions",
        description:
          "For customers transacting directly. A wallet signs each earn and redemption straight to the public loyalty ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Customer Wallet", sublabel: "Loyalty Members", icon: Fingerprint, accent: false },
          { label: "Public Validators", sublabel: "Token Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Redemption Record", icon: Gift, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building interoperable loyalty with a shared token, cross-brand redemption, and inter-OMC settlement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Earn & Redemption Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects loyalty platform integration benchmarks. Connecting each brand's POS, building custom token and settlement logic, and shipping cross-brand redemption for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your earn and redemption rules into pre-audited WebAssembly binaries and provisions the loyalty ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "fuel-theft-and-pilferage-detection-via-tank-to-pump-reconciliation",
    icon: Lock,
    eyebrow: "Pilferage Detection Layer",
    headline1: "Reconcile tank to pump.",
    headline2: "Catch losses before they grow.",
    heroDescription:
      "Deliver a continuous reconciliation between fuel received into storage tanks and fuel dispensed at pumps, flagging discrepancies that indicate theft or pilferage. Verified tank-level readings are compared against pump dispensing data continuously, so an unexplained discrepancy surfaces for investigation before losses accumulate.",
    heroCta: "Deploy Pilferage Detection",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn undetected shrinkage into a continuous tank-to-pump reconciliation that flags theft early.",
    mechanics: [
      { title: "Tank Level Anchoring", description: "External Data Oracles anchor verified tank-level readings, so the fuel received into and held in storage is a trusted, continuously updated figure." },
      { title: "Pump Dispensing Feed", description: "Dispensing data from each pump is anchored alongside tank levels, giving a matched pair of received and sold volumes to reconcile." },
      { title: "Continuous Reconciliation", description: "The Audit Logs module continuously compares tank input against pump output, so shrinkage is measured in real time rather than at a periodic stock check." },
      { title: "Discrepancy Flagging", description: "The Notifications module flags any unexplained variance beyond tolerance, alerting the operator to possible theft before losses accumulate." },
      { title: "Investigation Trail", description: "Each flagged discrepancy carries its supporting tank and pump data, giving the operator an evidence trail to investigate the loss." },
      { title: "Loss Prevention", description: "By surfacing discrepancies early and continuously, the network turns slow, after-the-fact loss discovery into prompt, evidence-based intervention." },
    ],
    lifecycleTitle: "The Pilferage Detection Lifecycle",
    lifecycleSubtitle:
      "Follow a single reconciliation cycle from tank reading through pump comparison to a flagged discrepancy.",
    lifecycleSteps: [
      {
        label: "Tank Reading",
        description:
          "A verified tank-level reading is anchored, capturing the fuel received into and held in storage.",
        icon: Boxes,
        logFilename: "cerulea_pilfer_engine.log",
        logLines: [
          { text: "[SYS] Reading tank gauge TNK_14...", time: "06:00:02", tone: "default" },
          { text: "[CMD] anchorTank(tank: \"TNK_14\", litres: 18420)", time: "06:00:02", tone: "primary" },
          { text: "[AUTH] Verifying gauge signature...", time: "06:00:03", tone: "secondary" },
          { text: "[OK] Tank level sealed for cycle.", time: "06:00:03", tone: "success" },
        ],
      },
      {
        label: "Pump Dispensing",
        description:
          "Dispensing data from the pumps is anchored, giving the sold volume to compare against the tank draw.",
        icon: Zap,
        logFilename: "cerulea_pilfer_engine.log",
        logLines: [
          { text: "[SYS] Reading pump dispensing for outlet OUT_9...", time: "06:00:20", tone: "default" },
          { text: "[CMD] anchorDispense(outlet: \"OUT_9\", litres: 17960)", time: "06:00:20", tone: "primary" },
          { text: "[SYS] Dispensing data sealed for cycle.", time: "06:00:20", tone: "default" },
          { text: "[OK] Pump output anchored.", time: "06:00:21", tone: "success" },
        ],
      },
      {
        label: "Reconciliation",
        description:
          "Tank draw is reconciled against pump output. The variance is computed continuously.",
        icon: Scale,
        logFilename: "cerulea_pilfer_engine.log",
        logLines: [
          { text: "[SYS] Reconciling tank to pump for OUT_9...", time: "06:02:44", tone: "default" },
          { text: "[CMD] reconcile(tank: \"TNK_14\", outlet: \"OUT_9\")", time: "06:02:44", tone: "primary" },
          { text: "[SYS] Variance of 380 litres detected...", time: "06:02:44", tone: "secondary" },
          { text: "[OK] Variance exceeds tolerance, flag raised.", time: "06:02:45", tone: "success" },
        ],
      },
      {
        label: "Discrepancy Alert",
        description:
          "The unexplained variance is flagged to the operator with its supporting data, prompting investigation before losses grow.",
        icon: Lock,
        logFilename: "cerulea_pilfer_engine.log",
        logLines: [
          { text: "[SYS] Raising pilferage alert for OUT_9...", time: "06:03:10", tone: "default" },
          { text: "[CMD] alert(outlet: \"OUT_9\", variance: 380)", time: "06:03:10", tone: "primary" },
          { text: "[SYS] Attaching tank and pump evidence...", time: "06:03:10", tone: "default" },
          { text: "[OK] Operator alerted before losses accumulate.", time: "06:03:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes pilferage detection into modular contracts. Each layer anchors tank levels, captures pump output, reconciles the two, and alerts on discrepancy.",
    layers: [
      {
        title: "Tank Oracle",
        subtitle: "The Storage Feed",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Storage Feed",
          description:
            "Anchors verified tank-level readings, giving the reconciliation a trusted figure for fuel received into and held in storage rather than a periodic manual dip.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract TankOracle {\n  mapping(bytes32 => uint256) public tankLevel;\n\n  function anchorTank(bytes32 tank, uint256 litres, bytes calldata sig) external {\n    require(verifyGauge(tank, sig), \"Bad gauge sig\");\n    tankLevel[tank] = litres;\n    emit TankAnchored(tank, litres);\n  }\n}",
        simAction: "Simulate Tank Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading tank gauge TNK_14...", tone: "default" },
          { text: "Validating gauge signature...", tone: "default" },
          { text: "Sealing 18420 litre level...", tone: "default" },
          { text: "Recording tank reading...", tone: "default" },
          { text: "[SUCCESS] Tank level anchored.", tone: "success" },
        ],
      },
      {
        title: "Pump Oracle",
        subtitle: "The Dispensing Feed",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Dispensing Feed",
          description:
            "Anchors dispensing data from each pump, giving the sold volume that pairs with the tank draw so received and dispensed fuel can be reconciled.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "function anchorDispense(bytes32 outlet, uint256 litres, bytes calldata sig) external {\n    require(verifyPump(outlet, sig), \"Bad pump sig\");\n    dispensed[outlet] = litres;\n    emit DispenseAnchored(outlet, litres);\n}",
        simAction: "Simulate Pump Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading pump dispensing for OUT_9...", tone: "default" },
          { text: "Validating pump signature...", tone: "default" },
          { text: "Sealing 17960 litre output...", tone: "default" },
          { text: "Recording dispensing data...", tone: "default" },
          { text: "[SUCCESS] Pump output anchored.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation Engine",
        subtitle: "The Variance Meter",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Variance Meter",
          description:
            "Continuously compares tank draw against pump output and computes the variance, turning a periodic stock check into a real-time measure of shrinkage.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function reconcile(bytes32 tank, bytes32 outlet) external view returns (bool, int256 variance) {\n    uint256 draw = openingLevel[tank] - tankLevel[tank];\n    variance = int256(draw) - int256(dispensed[outlet]);\n    return (_abs(variance) <= tolerance[outlet], variance);\n}",
        simAction: "Simulate Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing tank draw for TNK_14...", tone: "default" },
          { text: "Comparing against pump output at OUT_9...", tone: "default" },
          { text: "Deriving 380 litre variance...", tone: "default" },
          { text: "Checking against tolerance...", tone: "default" },
          { text: "[SUCCESS] Variance flagged for review.", tone: "success" },
        ],
      },
      {
        title: "Alert Guard",
        subtitle: "The Early Warning",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Early Warning",
          description:
            "Flags any unexplained variance beyond tolerance to the operator with its supporting tank and pump data, prompting investigation before pilferage losses accumulate.",
          platformFunction: "Notification & Enforcement",
        },
        codeSnippet:
          "function alert(bytes32 outlet, int256 variance) external {\n    require(_abs(variance) > tolerance[outlet], \"Within tolerance\");\n    alerts[outlet].push(Alert(variance, block.timestamp));\n    emit PilferageFlagged(outlet, variance);\n}",
        simAction: "Simulate Discrepancy Alert",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming variance exceeds tolerance...", tone: "default" },
          { text: "Attaching tank and pump evidence...", tone: "default" },
          { text: "Raising pilferage alert for OUT_9...", tone: "default" },
          { text: "Notifying operator...", tone: "default" },
          { text: "[SUCCESS] Operator alerted early.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Tank-to-pump reconciliation is a horizontal capability. Here is how different actors in fuel retail put the shared ledger to work.",
    sectors: [
      { icon: Lock, title: "Retail Outlet Operators", description: "Catch shrinkage between tank and pump continuously, flagging theft or pilferage with evidence before losses accumulate rather than discovering them at a stock check.", assetTypes: ["Tank Readings", "Pump Output", "Pilferage Alerts"] },
      { icon: Factory, title: "Fuel Retail Chains", description: "Monitor reconciliation across many outlets from one record, spotting persistent losses and comparing shrinkage patterns network-wide.", assetTypes: ["Outlet Reconciliations", "Variance Trends", "Loss Reports"] },
      { icon: Landmark, title: "Auditors & Loss Prevention", description: "Investigate flagged discrepancies with a supporting on-chain evidence trail, building loss-prevention cases on verified tank and pump data.", assetTypes: ["Discrepancy Evidence", "Reconciliation Trails", "Audit Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging forecourt automation systems or reading directly from tank gauges and pump controllers, Cerulea routes both into one reconciliation ledger.",
    tracks: [
      {
        title: "Track A: Forecourt System Bridging",
        description:
          "For outlets on legacy forecourt automation. Tank and pump data is translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Forecourt Automation", sublabel: "Outlet Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Reconciliation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Gauge & Pump Capture",
        description:
          "For tank gauges and pump controllers with edge connectivity. Each reading is signed by a device key and routed straight to the reconciliation contract.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Gauge / Pump Edge", sublabel: "Forecourt Hardware", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Reading Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Tank-to-Pump Record", icon: Lock, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building pilferage detection with tank anchoring, pump capture, and continuous reconciliation from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Reconciliation & Alert Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects forecourt monitoring integration benchmarks. Wiring tank and pump feeds, building custom reconciliation logic, and shipping discrepancy alerting for an average outlet network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your reconciliation and alert rules into pre-audited WebAssembly binaries and provisions the reconciliation ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const energyUtilitiesItems: ExtraCaseItem[] = [
  {
    label: "Coal/gas plant emission reporting for regulatory compliance",
    href: "/solutions/use-case/coal-gas-plant-emission-reporting-for-regulatory-compliance",
    description: "Live stack data anchored from sensor to regulator.",
    icon: Factory,
    category: "GOVERNMENT",
    tags: ["Emissions", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Coal supply quality verification for power plant fuel linkage",
    href: "/solutions/use-case/coal-supply-quality-verification-for-power-plant-fuel-linkage",
    description: "Delivered grade verified, payment adjusted automatically.",
    icon: Pickaxe,
    category: "ENTERPRISE",
    tags: ["Fuel", "Settlement"],
    industry: INDUSTRY,
  },
  {
    label: "Plant maintenance outage scheduling and grid notification",
    href: "/solutions/use-case/plant-maintenance-outage-scheduling-and-grid-notification",
    description: "Timestamped outage notices verifiable for regulators.",
    icon: Radio,
    category: "ENTERPRISE",
    tags: ["Outage", "Grid"],
    industry: INDUSTRY,
  },
  {
    label: "Renewable Energy Certificates (RECs) issuance and trading",
    href: "/solutions/use-case/renewable-energy-certificates-recs-issuance-and-trading",
    description: "Tokenized RECs with structurally impossible double-issuance.",
    icon: FileCheck,
    category: "DAPPS",
    tags: ["RECs", "Trading"],
    industry: INDUSTRY,
  },
  {
    label: "Peer-to-peer solar energy trading between prosumers on microgrids",
    href: "/solutions/use-case/peer-to-peer-solar-energy-trading-between-prosumers-on-microgrids",
    description: "Local solar traded between neighbors, settled automatically.",
    icon: Zap,
    category: "DAPPS",
    tags: ["Solar", "Microgrid"],
    industry: INDUSTRY,
  },
  {
    label: "Carbon credit issuance for verified renewable generation",
    href: "/solutions/use-case/carbon-credit-issuance-for-verified-renewable-generation",
    description: "Coordinated REC and carbon registry, no double-counting.",
    icon: Leaf,
    category: "ENTERPRISE",
    tags: ["Carbon", "Renewables"],
    industry: INDUSTRY,
  },
  {
    label: "Power purchase agreement (PPA) settlement automation",
    href: "/solutions/use-case/power-purchase-agreement-ppa-settlement-automation",
    description: "Metered energy paid automatically without manual invoicing.",
    icon: Handshake,
    category: "ENTERPRISE",
    tags: ["PPA", "Settlement"],
    industry: INDUSTRY,
  },
  {
    label: "Green hydrogen production certification and offtake agreement tracking",
    href: "/solutions/use-case/green-hydrogen-production-certification-and-offtake-agreement-tracking",
    description: "Renewable-sourced hydrogen certified, offtake settled on volume.",
    icon: FlaskConical,
    category: "ENTERPRISE",
    tags: ["Hydrogen", "Certification"],
    industry: INDUSTRY,
  },
  {
    label: "Battery storage capacity bidding in grid ancillary services markets",
    href: "/solutions/use-case/battery-storage-capacity-bidding-in-grid-ancillary-services-markets",
    description: "Verified availability and response settle ancillary payments.",
    icon: Activity,
    category: "ENTERPRISE",
    tags: ["Storage", "Ancillary"],
    industry: INDUSTRY,
  },
  {
    label: "Grid balancing and demand-response smart contracts between utilities",
    href: "/solutions/use-case/grid-balancing-and-demand-response-smart-contracts-between-utilities",
    description: "Demand-response measured by meters, incentives paid fast.",
    icon: Network,
    category: "ENTERPRISE",
    tags: ["Demand Response", "Grid"],
    industry: INDUSTRY,
  },
  {
    label: "Electricity metering data integrity for billing disputes",
    href: "/solutions/use-case/electricity-metering-data-integrity-for-billing-disputes",
    description: "Immutable meter readings resolve billing disputes fast.",
    icon: Gavel,
    category: "ENTERPRISE",
    tags: ["Metering", "Billing"],
    industry: INDUSTRY,
  },
  {
    label: "Open access transmission charge reconciliation across DISCOMs",
    href: "/solutions/use-case/open-access-transmission-charge-reconciliation-across-discoms",
    description: "Wheeled power charges reconciled from verified metering.",
    icon: Scale,
    category: "GOVERNMENT",
    tags: ["Transmission", "Reconciliation"],
    industry: INDUSTRY,
  },
  {
    label: "Rooftop solar net metering settlement automation",
    href: "/solutions/use-case/rooftop-solar-net-metering-settlement-automation",
    description: "Net energy exchange billed accurately without manual reconciliation.",
    icon: Home,
    category: "SME",
    tags: ["Solar", "Net Metering"],
    industry: INDUSTRY,
  },
  {
    label: "Nuclear fuel chain of custody from enrichment to disposal",
    href: "/solutions/use-case/nuclear-fuel-chain-of-custody-from-enrichment-to-disposal",
    description: "IAEA-accessible material accounting, continuously verifiable balance.",
    icon: Biotech,
    category: "GOVERNMENT",
    tags: ["Nuclear", "Safeguards"],
    industry: INDUSTRY,
  },
  {
    label: "Safety inspection and maintenance records for regulatory audit",
    href: "/solutions/use-case/safety-inspection-and-maintenance-records-for-regulatory-audit",
    description: "Anchored maintenance records with verifiable inspection credentials.",
    icon: ShieldCheck,
    category: "GOVERNMENT",
    tags: ["Safety", "Audit"],
    industry: INDUSTRY,
  },
  {
    label: "Decommissioning fund escrow and milestone-based release",
    href: "/solutions/use-case/decommissioning-fund-escrow-and-milestone-based-release",
    description: "Regulator-visible fund released against verified decommissioning milestones.",
    icon: Wallet,
    category: "GOVERNMENT",
    tags: ["Escrow", "Nuclear"],
    industry: INDUSTRY,
  },
  {
    label: "Joint venture cost and revenue sharing across exploration partners",
    href: "/solutions/use-case/joint-venture-cost-and-revenue-sharing-across-exploration-partners",
    description: "Automated cost allocation with real-time partner visibility.",
    icon: PieChart,
    category: "ENTERPRISE",
    tags: ["Joint Venture", "Settlement"],
    industry: INDUSTRY,
  },
  {
    label: "Environmental impact and spill incident records for regulatory compliance",
    href: "/solutions/use-case/environmental-impact-and-spill-incident-records-for-regulatory-complia",
    description: "Continuous sensor data makes spill underreporting impossible.",
    icon: Droplet,
    category: "GOVERNMENT",
    tags: ["Environment", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Seismic survey data licensing and royalty to data providers",
    href: "/solutions/use-case/seismic-survey-data-licensing-and-royalty-to-data-providers",
    description: "Each license anchored, provider royalties paid automatically.",
    icon: Copyright,
    category: "ENTERPRISE",
    tags: ["Licensing", "Royalty"],
    industry: INDUSTRY,
  },
  {
    label: "Gas pipeline custody transfer and metering reconciliation",
    href: "/solutions/use-case/gas-pipeline-custody-transfer-and-metering-reconciliation",
    description: "Real-time custody metering with daily automated billing.",
    icon: Truck,
    category: "ENTERPRISE",
    tags: ["Gas", "Custody"],
    industry: INDUSTRY,
  },
  {
    label: "City gas distribution consumer billing reconciliation",
    href: "/solutions/use-case/city-gas-distribution-consumer-billing-reconciliation",
    description: "Piped gas billed on verified meter readings.",
    icon: Building2,
    category: "SME",
    tags: ["City Gas", "Billing"],
    industry: INDUSTRY,
  },
  {
    label: "LNG terminal slot booking and cargo allocation transparency",
    href: "/solutions/use-case/lng-terminal-slot-booking-and-cargo-allocation-transparency",
    description: "Slot bookings and allocation changes visible to all parties.",
    icon: Ticket,
    category: "ENTERPRISE",
    tags: ["LNG", "Allocation"],
    industry: INDUSTRY,
  },
  {
    label: "Crude oil provenance tracking from well to refinery",
    href: "/solutions/use-case/crude-oil-provenance-tracking-from-well-to-refinery",
    description: "Origin and grade verified at every custody transfer.",
    icon: Search,
    category: "ENTERPRISE",
    tags: ["Crude", "Provenance"],
    industry: INDUSTRY,
  },
  {
    label: "Refinery maintenance and safety inspection records for compliance",
    href: "/solutions/use-case/refinery-maintenance-and-safety-inspection-records-for-compliance",
    description: "Siloed maintenance systems anchored for real-time regulator access.",
    icon: Shield,
    category: "GOVERNMENT",
    tags: ["Refinery", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Byproduct and waste stream tracking for circular economy compliance",
    href: "/solutions/use-case/byproduct-and-waste-stream-tracking-for-circular-economy-compliance",
    description: "Waste streams tracked from generation to final disposition.",
    icon: Recycling,
    category: "ENTERPRISE",
    tags: ["Waste", "Circular"],
    industry: INDUSTRY,
  },
  {
    label: "Refinery-to-pipeline custody transfer measurement reconciliation",
    href: "/solutions/use-case/refinery-to-pipeline-custody-transfer-measurement-reconciliation",
    description: "Verified flow measurement reconciles custody transfer volumes.",
    icon: Boxes,
    category: "ENTERPRISE",
    tags: ["Custody", "Measurement"],
    industry: INDUSTRY,
  },
  {
    label: "Biofuel blending mandate compliance certification",
    href: "/solutions/use-case/biofuel-blending-mandate-compliance-certification",
    description: "Blend ratio and biofuel sourcing certified for inspection.",
    icon: Tractor,
    category: "GOVERNMENT",
    tags: ["Biofuel", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Fuel quality certification and adulteration detection across retail outlets",
    href: "/solutions/use-case/fuel-quality-certification-and-adulteration-detection-across-retail-ou",
    description: "Adulteration traceable from refinery to pump, court-ready.",
    icon: QrCode,
    category: "GOVERNMENT",
    tags: ["Fuel Quality", "Retail"],
    industry: INDUSTRY,
  },
  {
    label: "Loyalty and rewards tokenization across multi-brand petrol stations",
    href: "/solutions/use-case/loyalty-and-rewards-tokenization-across-multi-brand-petrol-stations",
    description: "Interoperable fuel loyalty tokens earned and redeemed anywhere.",
    icon: Gift,
    category: "DAPPS",
    tags: ["Loyalty", "Tokens"],
    industry: INDUSTRY,
  },
  {
    label: "Fuel theft and pilferage detection via tank-to-pump reconciliation",
    href: "/solutions/use-case/fuel-theft-and-pilferage-detection-via-tank-to-pump-reconciliation",
    description: "Tank and pump data reconciled to flag pilferage.",
    icon: Lock,
    category: "SME",
    tags: ["Theft", "Reconciliation"],
    industry: INDUSTRY,
  },
]
