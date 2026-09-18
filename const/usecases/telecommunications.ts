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

const INDUSTRY = "Telecommunications"

export const telecommunicationsCases: CaseEntry[] = [
  {
    slug: "roaming-agreement-settlement-between-telecom-operators",
    icon: Globe,
    eyebrow: "Roaming Settlement Layer",
    headline1: "Settle roaming in hours.",
    headline2: "Not in forty-five days.",
    heroDescription:
      "Run a private roaming settlement chain where every call detail record is anchored the moment a subscriber roams onto a partner network. The Roaming and Clearing, Escrow and Conditional Settlement, and Trade Finance Documents modules net each operator's balance automatically, with a regulator audit layer watching the same record.",
    heroCta: "Deploy Roaming Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace month-long clearing house reconciliation with a shared, tamper-evident ledger of every roamed session.",
    mechanics: [
      { title: "CDR Anchoring", description: "Anchor usage at the source. Every call detail record from a roamed voice, data, or SMS session is hashed onto the settlement chain as it is rated, so both the home and visited operator write to one record instead of exchanging TAP files days later." },
      { title: "Automated Net Settlement", description: "Collapse bilateral balances into one figure. The Roaming and Clearing module continuously nets each operator's inbound and outbound charges, producing a single settlement amount per partner rather than a manual month-end reconciliation." },
      { title: "Conditional Escrow", description: "Release funds only on agreement. Escrow and Conditional Settlement holds the net amount and releases it when both operators' anchored totals match, removing the disputes that stall traditional clearing." },
      { title: "Trade Finance Documents", description: "Bind the paperwork to the payment. The Trade Finance Documents module anchors the roaming agreement, tariff schedule, and settlement statement by digest, so the commercial terms and the money move against the same evidence." },
      { title: "Regulator Audit Layer", description: "Give the regulator a live window. A read-only node lets the national authority inspect anchored volumes and settlement statements directly, replacing after-the-fact reporting with a verifiable view." },
      { title: "Dispute-Free Reconciliation", description: "Remove the argument entirely. Because both operators rate against the same anchored CDR set, contested volumes disappear and reconciliation disputes fall to zero." },
    ],
    lifecycleTitle: "The Settlement Lifecycle",
    lifecycleSubtitle:
      "Follow a single roamed session from the visited network through net settlement and regulator inspection.",
    lifecycleSteps: [
      {
        label: "Session Rating",
        description:
          "A subscriber roams onto a partner network and consumes data. The visited operator rates the session and anchors the call detail record onto the shared settlement chain.",
        icon: Wifi,
        logFilename: "cerulea_roaming.log",
        logLines: [
          { text: "[SYS] Ingesting roamed session from VPMN_ETISALAT...", time: "08:11:04", tone: "default" },
          { text: "[CMD] anchorCDR { imsi: \"HASH_44e1\", type: \"DATA\", mb: 812 }", time: "08:11:04", tone: "primary" },
          { text: "[AUTH] Rating against TAP tariff and hashing record...", time: "08:11:05", tone: "secondary" },
          { text: "[OK] CDR CDR_77channel anchored at block 6620144.", time: "08:11:05", tone: "success" },
        ],
      },
      {
        label: "Net Position",
        description:
          "The Roaming and Clearing module folds the new charge into the running balance between the two operators, updating a single net figure instead of a batch of invoices.",
        icon: PieChart,
        logFilename: "cerulea_roaming.log",
        logLines: [
          { text: "[SYS] Recomputing net position for partner pair...", time: "08:11:06", tone: "default" },
          { text: "[CMD] updateNet(HOME_A1, VISITED_B7, delta: 0.94)", time: "08:11:06", tone: "primary" },
          { text: "[SYS] Inbound and outbound totals folded into one balance.", time: "08:11:06", tone: "default" },
          { text: "[OK] Net position updated. Both totals in agreement.", time: "08:11:07", tone: "success" },
        ],
      },
      {
        label: "Escrow Settlement",
        description:
          "At cycle close, Escrow and Conditional Settlement compares both operators' anchored totals and releases the net amount only when the two figures reconcile.",
        icon: Wallet,
        logFilename: "cerulea_roaming.log",
        logLines: [
          { text: "[SYS] Cycle close reached for settlement window...", time: "23:59:50", tone: "default" },
          { text: "[CMD] settleNet { pair: \"A1_B7\", amount: 118420 }", time: "23:59:51", tone: "primary" },
          { text: "[AUTH] Confirming anchored totals match on both sides...", time: "23:59:51", tone: "secondary" },
          { text: "[OK] Escrow released. Cycle settled in 71h.", time: "23:59:52", tone: "success" },
        ],
      },
      {
        label: "Regulator Review",
        description:
          "The national authority reads the anchored volumes and the signed settlement statement from its audit node, confirming the cycle without requesting files from either operator.",
        icon: Landmark,
        logFilename: "cerulea_roaming.log",
        logLines: [
          { text: "[SYS] Audit query from Regulator_0x0c...", time: "09:14:33", tone: "default" },
          { text: "[CMD] readSettlement(cycle: \"2026_08\", pair: \"A1_B7\")", time: "09:14:33", tone: "primary" },
          { text: "[SYS] Resolving anchored volumes and statement digest...", time: "09:14:33", tone: "default" },
          { text: "[OK] Cycle verified. Volumes and net reconciled.", time: "09:14:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes roaming settlement into modular contracts that anchor usage, net balances, escrow the payment, and expose the cycle to the regulator, with no clearing house sitting between the operators.",
    layers: [
      {
        title: "CDR Ledger",
        subtitle: "The Usage Anchor",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Usage Anchor",
          description:
            "The foundational data layer. It hashes each rated call detail record onto the chain the moment a roamed session ends, so both operators reconcile against identical usage rather than exchanged files.",
          platformFunction: "Usage & Metering",
        },
        codeSnippet:
          "contract CDRLedger {\n  struct Record {\n    bytes32 imsiHash;\n    address visited;\n    uint256 units;\n    uint256 rate;\n  }\n\n  mapping(bytes32 => Record) public cdrs;\n\n  function anchorCDR(bytes32 id, bytes32 imsi, uint256 units, uint256 rate) external onlyVisited {\n    cdrs[id] = Record(imsi, msg.sender, units, rate);\n    emit CDRAnchored(id, units, rate);\n  }\n}",
        simAction: "Simulate CDR Anchoring",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading roamed session from visited network...", tone: "default" },
          { text: "Rating 812MB against partner tariff...", tone: "default" },
          { text: "Hashing call detail record...", tone: "default" },
          { text: "Writing usage anchor to settlement chain...", tone: "default" },
          { text: "[SUCCESS] CDR anchored, visible to both operators.", tone: "success" },
        ],
      },
      {
        title: "Netting Engine",
        subtitle: "The Balance Compressor",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Balance Compressor",
          description:
            "Folds every anchored charge into a single running net figure per partner pair. It replaces thousands of line-item invoices with one continuously updated settlement amount that both sides can see.",
          platformFunction: "Clearing & Netting",
        },
        codeSnippet:
          "function updateNet(address partner, int256 delta) external onlyRated {\n    netPosition[msg.sender][partner] += delta;\n    netPosition[partner][msg.sender] -= delta;\n    emit NetUpdated(msg.sender, partner, netPosition[msg.sender][partner]);\n}",
        simAction: "Simulate Net Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading running balance for partner pair...", tone: "default" },
          { text: "Folding new charge into inbound total...", tone: "default" },
          { text: "Offsetting against outbound total...", tone: "default" },
          { text: "Writing single net figure to chain...", tone: "default" },
          { text: "[SUCCESS] Net position updated, both sides agree.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Conditional Release",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Release",
          description:
            "Holds the net amount and releases it only when both operators' anchored totals reconcile. It removes the dispute window that lets traditional roaming settlement stretch across forty-five days.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function settleNet(address partner, uint256 amount) external onlyCycleClose {\n    require(totalsMatch(msg.sender, partner), \"Totals not reconciled\");\n    escrow.release(partner, amount);\n    emit CycleSettled(msg.sender, partner, amount);\n}",
        simAction: "Simulate Escrow Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Cycle close triggered for partner pair...", tone: "default" },
          { text: "Comparing anchored totals on both sides...", tone: "default" },
          { text: "Confirming figures reconcile to the unit...", tone: "default" },
          { text: "Releasing net amount from escrow...", tone: "default" },
          { text: "[SUCCESS] Cycle settled with zero dispute.", tone: "success" },
        ],
      },
      {
        title: "Audit Gateway",
        subtitle: "The Regulator Window",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Regulator Window",
          description:
            "A read-only node that resolves anchored volumes and signed settlement statements for the national authority. It replaces after-the-fact reporting with a live, verifiable view of every cycle.",
          platformFunction: "Regulatory Oversight",
        },
        codeSnippet:
          "function readSettlement(bytes32 cycle, address partner) external view returns (uint256 net, bytes32 stmt) {\n    Cycle storage c = cycles[cycle][partner];\n    return (c.net, c.statementHash);\n}",
        simAction: "Simulate Regulator Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator opens read-only audit node...", tone: "default" },
          { text: "Resolving anchored volumes for cycle...", tone: "default" },
          { text: "Fetching signed settlement statement digest...", tone: "default" },
          { text: "Confirming net figure against volumes...", tone: "default" },
          { text: "[SUCCESS] Cycle verified without operator files.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anchored inter-operator settlement is a horizontal capability. Here is how different players in the roaming value chain put the shared ledger to work.",
    sectors: [
      { icon: Globe, title: "Mobile Network Operators", description: "Settle roaming with every partner from one net figure per pair, compressing the cycle from forty-five days to seventy-two hours and removing the reconciliation team's monthly file war.", assetTypes: ["Roamed Sessions", "Net Positions", "Settlement Statements"] },
      { icon: Handshake, title: "Clearing & Hub Providers", description: "Offer members a shared anchoring layer instead of batch TAP exchange, turning a slow intermediary role into a real-time settlement service backed by cryptographic evidence.", assetTypes: ["TAP Records", "Partner Agreements", "Clearing Cycles"] },
      { icon: Landmark, title: "Telecom Regulators", description: "Read anchored volumes and settlement statements directly from an audit node, verifying inter-operator flows and tariff compliance without requesting files from either carrier.", assetTypes: ["Audit Trails", "Volume Reports", "Tariff Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy mediation and billing stack or streaming rated CDRs from a modern charging system, Cerulea routes both into one shared settlement record.",
    tracks: [
      {
        title: "Track A: Enterprise Billing Bridging",
        description:
          "For carriers on legacy mediation and clearing stacks. Rated CDRs are translated into signed on-chain anchors through the API gateway, and net positions post back to the billing system automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Mediation / Billing", sublabel: "Operator Charging Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "CDR Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Roaming Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Real-Time Charging Capture",
        description:
          "For operators on modern online charging. Each rated session is signed at the charging node and routed straight to the settlement chain for continuous netting.",
        connectorLabels: ["NODE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Online Charging Node", sublabel: "Visited Network Rating", icon: Cpu, accent: false },
          { label: "Settlement Validators", sublabel: "Net Position Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Roaming Record", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-operator roaming settlement chain with CDR anchoring, continuous netting, conditional escrow, and a regulator audit node from scratch requires specialised engineers and long inter-carrier integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Settlement & Netting Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects inter-carrier settlement integration benchmarks. Wiring each operator's mediation stack, building custom netting and escrow logic, and standing up a regulator audit interface for an average partner network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your settlement and netting rules into pre-audited WebAssembly binaries and provisions the shared clearing ledger and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "fraud-detection-and-revenue-assurance-via-shared-network-event-data",
    icon: Shield,
    eyebrow: "Fraud Intelligence Layer",
    headline1: "Catch SIM-box fraud.",
    headline2: "Without exposing your network.",
    heroDescription:
      "Stand up a permissioned fraud intelligence network where operators correlate SIM-box signals across each other's data without ever revealing raw network events. The Fraud and Risk Engine, Fraud Rules, and Node Permissioning modules run privacy-preserving matching, so competitors share threat intelligence and keep their traffic private.",
    heroCta: "Deploy Fraud Intelligence",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn isolated per-operator fraud signals into a shared intelligence layer that no competitor can read in the clear.",
    mechanics: [
      { title: "Privacy-Preserving Correlation", description: "Match without disclosing. The Fraud and Risk Engine correlates fraud signals across operators using hashed and salted event fingerprints, so a shared pattern surfaces while raw network data never leaves each operator's boundary." },
      { title: "Shared Fraud Rules", description: "Encode threat logic once. The Fraud Rules module holds the SIM-box and bypass detection rules as versioned on-chain policy, so every operator scores against the same, transparent definition of fraud." },
      { title: "Node Permissioning", description: "Gate who joins and what they see. Node Permissioning admits only accredited operators and confines each to aggregate signals, preventing any member from reading another's sensitive events." },
      { title: "Cross-Operator Signal Graph", description: "Reveal the ring, not the records. Matched fingerprints build a shared signal graph exposing coordinated fraud spanning multiple networks, without any single event being reconstructable by another party." },
      { title: "Revenue Leakage Flags", description: "Protect the top line. Anchored correlation flags bypassed international termination and unbilled traffic, giving revenue assurance teams a verifiable leakage signal instead of a monthly guess." },
      { title: "Immutable Evidence Trail", description: "Prove the finding later. Each confirmed match is anchored with its rule version and timestamp, so a fraud case rests on a tamper-evident record all participating operators can trust." },
    ],
    lifecycleTitle: "The Detection Lifecycle",
    lifecycleSubtitle:
      "Follow a suspected SIM-box pattern from a single operator's signal to a confirmed cross-network match.",
    lifecycleSteps: [
      {
        label: "Signal Submission",
        description:
          "An operator observes a suspicious calling pattern and submits a hashed event fingerprint. The raw network data stays local while only the salted fingerprint reaches the network.",
        icon: Fingerprint,
        logFilename: "cerulea_fraudnet.log",
        logLines: [
          { text: "[SYS] Ingesting fraud signal from OP_MTN_09...", time: "02:33:18", tone: "default" },
          { text: "[CMD] submitSignal { fp: \"HASH_9ab2\", class: \"SIMBOX\" }", time: "02:33:18", tone: "primary" },
          { text: "[AUTH] Confirming node permission and salting fingerprint...", time: "02:33:19", tone: "secondary" },
          { text: "[OK] Signal SIG_33108 anchored, raw data withheld.", time: "02:33:19", tone: "success" },
        ],
      },
      {
        label: "Rule Scoring",
        description:
          "The Fraud Rules module scores the fingerprint against the shared, versioned detection policy, assigning a risk weight that every operator can independently reproduce.",
        icon: Scale,
        logFilename: "cerulea_fraudnet.log",
        logLines: [
          { text: "[SYS] Loading fraud policy version v14...", time: "02:33:20", tone: "default" },
          { text: "[CMD] scoreSignal(SIG_33108, ruleset: \"v14\")", time: "02:33:20", tone: "primary" },
          { text: "[SYS] Applying velocity and origin-mismatch rules...", time: "02:33:20", tone: "default" },
          { text: "[OK] Risk weight 0.88 assigned under shared policy.", time: "02:33:21", tone: "success" },
        ],
      },
      {
        label: "Cross-Match",
        description:
          "The Fraud and Risk Engine compares the fingerprint against signals from other operators, revealing a coordinated pattern without decrypting any single member's events.",
        icon: Network,
        logFilename: "cerulea_fraudnet.log",
        logLines: [
          { text: "[SYS] Correlating fingerprint across member set...", time: "02:33:22", tone: "default" },
          { text: "[CMD] correlate(SIG_33108, scope: \"NETWORK\")", time: "02:33:22", tone: "primary" },
          { text: "[AUTH] Matching hashes across 4 operators, no raw reads...", time: "02:33:23", tone: "secondary" },
          { text: "[OK] Ring RING_771 matched across 3 networks.", time: "02:33:23", tone: "success" },
        ],
      },
      {
        label: "Evidence Anchor",
        description:
          "The confirmed match is anchored with its rule version and timestamp, giving every participating operator a tamper-evident record to open a revenue assurance case on.",
        icon: FileCheck,
        logFilename: "cerulea_fraudnet.log",
        logLines: [
          { text: "[SYS] Sealing confirmed cross-network match...", time: "02:33:24", tone: "default" },
          { text: "[CMD] anchorEvidence(RING_771, rules: \"v14\")", time: "02:33:24", tone: "primary" },
          { text: "[SYS] Binding match to timestamp and policy version...", time: "02:33:24", tone: "default" },
          { text: "[OK] Evidence anchored, shared across members.", time: "02:33:25", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea splits shared fraud detection into contracts for fingerprint submission, rule scoring, privacy-preserving correlation, and evidence anchoring, so operators cooperate on threats while no member reads another's raw traffic.",
    layers: [
      {
        title: "Signal Registry",
        subtitle: "The Private Fingerprint",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Private Fingerprint",
          description:
            "Accepts only salted, hashed event fingerprints, never raw records. It lets an operator contribute a fraud signal to the network while its underlying subscriber and traffic data stay entirely on its own systems.",
          platformFunction: "Signal Intake",
        },
        codeSnippet:
          "contract SignalRegistry {\n  struct Signal {\n    bytes32 fingerprint;\n    address operator;\n    bytes32 class;\n  }\n\n  mapping(bytes32 => Signal) public signals;\n\n  function submitSignal(bytes32 id, bytes32 fp, bytes32 class) external onlyMember {\n    signals[id] = Signal(fp, msg.sender, class);\n    emit SignalSubmitted(id, class);\n  }\n}",
        simAction: "Simulate Signal Submission",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Operator detects suspicious calling pattern...", tone: "default" },
          { text: "Salting and hashing the event fingerprint...", tone: "default" },
          { text: "Confirming raw data never leaves boundary...", tone: "default" },
          { text: "Writing fingerprint to signal registry...", tone: "default" },
          { text: "[SUCCESS] Signal contributed, traffic stays private.", tone: "success" },
        ],
      },
      {
        title: "Rule Engine",
        subtitle: "The Shared Policy",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Policy",
          description:
            "Holds the SIM-box and bypass detection rules as versioned on-chain logic. Every operator scores against the same transparent policy, so a risk weight is reproducible and no member can dispute the definition of fraud.",
          platformFunction: "Rule Evaluation",
        },
        codeSnippet:
          "function scoreSignal(bytes32 id, uint16 version) external view returns (uint256 weight) {\n    Ruleset storage r = rulesets[version];\n    return r.velocity(signals[id]) + r.originMismatch(signals[id]);\n}",
        simAction: "Simulate Rule Scoring",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading shared fraud policy version...", tone: "default" },
          { text: "Applying call velocity rule...", tone: "default" },
          { text: "Applying origin-mismatch rule...", tone: "default" },
          { text: "Summing weighted risk score...", tone: "default" },
          { text: "[SUCCESS] Reproducible risk weight assigned.", tone: "success" },
        ],
      },
      {
        title: "Correlation Core",
        subtitle: "The Blind Match",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Blind Match",
          description:
            "Compares fingerprints across all members to expose coordinated fraud rings. It reveals that a pattern spans several networks without ever reconstructing or disclosing any single operator's underlying events.",
          platformFunction: "Cross-Operator Matching",
        },
        codeSnippet:
          "function correlate(bytes32 id) external onlyEngine returns (bytes32 ring) {\n    bytes32 fp = signals[id].fingerprint;\n    ring = index[fp];\n    require(ring != 0, \"No cross match\");\n    emit RingMatched(ring, fp);\n}",
        simAction: "Simulate Cross-Match",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Comparing fingerprint across member set...", tone: "default" },
          { text: "Matching hashes with no raw reads...", tone: "default" },
          { text: "Assembling coordinated ring across networks...", tone: "default" },
          { text: "Confirming no single event exposed...", tone: "default" },
          { text: "[SUCCESS] Fraud ring revealed, data stays sealed.", tone: "success" },
        ],
      },
      {
        title: "Evidence Vault",
        subtitle: "The Shared Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Record",
          description:
            "Anchors each confirmed match with its rule version and timestamp. It gives every participating operator a tamper-evident basis to open a revenue assurance or law-enforcement case without re-arguing the finding.",
          platformFunction: "Evidence & Assurance",
        },
        codeSnippet:
          "function anchorEvidence(bytes32 ring, uint16 version) external onlyEngine {\n    evidence[ring] = Match(version, block.timestamp, msg.sender);\n    emit EvidenceAnchored(ring, version, block.timestamp);\n}",
        simAction: "Simulate Evidence Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Sealing confirmed cross-network match...", tone: "default" },
          { text: "Binding match to policy version...", tone: "default" },
          { text: "Stamping immutable timestamp...", tone: "default" },
          { text: "Publishing record to all members...", tone: "default" },
          { text: "[SUCCESS] Evidence anchored, case-ready.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Privacy-preserving fraud intelligence is a horizontal capability. Here is how different telecom functions put the shared signal layer to work.",
    sectors: [
      { icon: Shield, title: "Fraud Management Teams", description: "Detect SIM-box and interconnect bypass rings that span several operators, catching coordinated fraud that no single network could see while keeping their own traffic data fully private.", assetTypes: ["Fraud Signals", "Ring Matches", "Detection Rules"] },
      { icon: Coins, title: "Revenue Assurance", description: "Flag bypassed international termination and unbilled traffic against a shared, verifiable signal, replacing a monthly leakage estimate with anchored cross-operator evidence.", assetTypes: ["Leakage Flags", "Termination Records", "Assurance Cases"] },
      { icon: Landmark, title: "Regulators & Law Enforcement", description: "Receive tamper-evident fraud evidence with its rule version and timestamp intact, acting on coordinated telecom fraud from a record every operator already trusts.", assetTypes: ["Evidence Records", "Case Files", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy fraud management system or streaming events from a modern signalling probe, Cerulea routes both into fingerprints without exposing raw traffic.",
    tracks: [
      {
        title: "Track A: Enterprise Fraud System Bridging",
        description:
          "For operators on legacy fraud management platforms. Detected events are hashed into salted fingerprints at the edge and signed onto the network through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Fraud Management System", sublabel: "Operator Detection Stack", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Fingerprint Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Fraud Intelligence Ledger", icon: Shield, accent: true },
        ],
      },
      {
        title: "Track B: Signalling Probe Capture",
        description:
          "For operators streaming from network probes. Each suspicious event is fingerprinted at the probe node and routed straight to the correlation engine for cross-operator matching.",
        connectorLabels: ["NODE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Signalling Probe", sublabel: "Live Network Events", icon: Radio, accent: false },
          { label: "Correlation Validators", sublabel: "Blind Match Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Signal Graph", icon: Fingerprint, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a permissioned fraud intelligence network with privacy-preserving correlation, shared rule scoring, and tamper-evident evidence anchoring from scratch requires specialised cryptography engineers and long multi-operator trust negotiations. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Detection & Correlation Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects cross-operator fraud consortium benchmarks. Building privacy-preserving correlation, agreeing a shared rule engine, and wiring each operator's fraud stack for an average consortium takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 3 weeks, because Cerulea Studio visually translates your detection and correlation rules into pre-audited WebAssembly binaries and provisions the permissioned intelligence ledger and node gating instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "number-portability-request-processing-across-operators",
    icon: Workflow,
    eyebrow: "Portability Coordination Layer",
    headline1: "Port the number.",
    headline2: "Never lose the handoff.",
    heroDescription:
      "Run a verified number portability process where each porting request is tracked end to end between the losing and gaining operator. The Civil Registry, Notifications, and Audit Logs modules anchor every step from initiation through verification to completion, giving the regulator and both operators one shared view of where any port stands.",
    heroCta: "Deploy Portability Coordination",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a fragile two-operator handoff into a single, anchored request that no party can silently stall or lose.",
    mechanics: [
      { title: "End-to-End Request Tracking", description: "Anchor the whole journey. Every porting request is recorded from initiation to completion, so a customer switch is a single tracked object rather than a chain of emails between two operators." },
      { title: "Civil Registry Verification", description: "Confirm the subscriber once. The Civil Registry module validates the porting customer's identity against the authoritative record, so a request cannot advance on a mismatched or fraudulent claim." },
      { title: "Timed State Transitions", description: "Hold each operator to the clock. The contract enforces the regulated window for each step, flagging a losing operator that fails to release a number inside the mandated time." },
      { title: "Cross-Operator Notifications", description: "Keep both sides in sync. The Notifications module pushes each state change to the gaining and losing operator at once, removing the silent gaps where a port stalls unnoticed." },
      { title: "Shared Status View", description: "Give everyone the same answer. The regulator and both operators query one anchored status, so 'where is my port' resolves to a verifiable state instead of three conflicting systems." },
      { title: "Audit-Ready History", description: "Settle disputes from the log. The Audit Logs module retains every transition with its actor and timestamp, so a failed or delayed port is adjudicated against a tamper-evident record." },
    ],
    lifecycleTitle: "The Portability Lifecycle",
    lifecycleSubtitle:
      "Follow one porting request from a customer's switch through cross-operator verification to a completed port.",
    lifecycleSteps: [
      {
        label: "Request Initiation",
        description:
          "A customer asks to keep their number while switching to a new operator. The gaining operator opens a porting request and anchors its origin on the shared chain.",
        icon: ScrollText,
        logFilename: "cerulea_port.log",
        logLines: [
          { text: "[SYS] Opening number portability request...", time: "10:05:41", tone: "default" },
          { text: "[CMD] initPort { msisdn: \"HASH_2f7c\", gaining: \"OP_B\" }", time: "10:05:41", tone: "primary" },
          { text: "[AUTH] Registering losing operator OP_A as counterparty...", time: "10:05:42", tone: "secondary" },
          { text: "[OK] Request PORT_51290 anchored at block 7712004.", time: "10:05:42", tone: "success" },
        ],
      },
      {
        label: "Identity Check",
        description:
          "The Civil Registry module verifies the customer against the authoritative record, confirming the person requesting the port owns the number before either operator proceeds.",
        icon: IdCard,
        logFilename: "cerulea_port.log",
        logLines: [
          { text: "[SYS] Validating subscriber identity for PORT_51290...", time: "10:06:03", tone: "default" },
          { text: "[CMD] verifyIdentity(PORT_51290, registry: \"NID\")", time: "10:06:03", tone: "primary" },
          { text: "[SYS] Matching ownership claim to civil registry...", time: "10:06:04", tone: "default" },
          { text: "[OK] Identity confirmed. Request cleared to advance.", time: "10:06:04", tone: "success" },
        ],
      },
      {
        label: "Operator Handoff",
        description:
          "The losing operator releases the number inside the regulated window. The Notifications module alerts both sides as the state transitions from release to activation.",
        icon: Handshake,
        logFilename: "cerulea_port.log",
        logLines: [
          { text: "[SYS] Awaiting release from losing operator OP_A...", time: "13:22:15", tone: "default" },
          { text: "[CMD] releaseNumber(PORT_51290, window: \"24h\")", time: "13:22:16", tone: "primary" },
          { text: "[AUTH] Notifying gaining and losing operators of state...", time: "13:22:16", tone: "secondary" },
          { text: "[OK] Number released inside window. Handoff clean.", time: "13:22:17", tone: "success" },
        ],
      },
      {
        label: "Port Completion",
        description:
          "The gaining operator activates the number and closes the request. The Audit Logs module seals the full history for the regulator's shared status view.",
        icon: FileCheck,
        logFilename: "cerulea_port.log",
        logLines: [
          { text: "[SYS] Activating number on gaining network...", time: "13:40:58", tone: "default" },
          { text: "[CMD] completePort(PORT_51290)", time: "13:40:58", tone: "primary" },
          { text: "[SYS] Sealing transition history to audit log...", time: "13:40:59", tone: "default" },
          { text: "[OK] Port complete in 3h35m. Status shared to all.", time: "13:40:59", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes number portability into contracts for request tracking, identity verification, timed handoff, and audit history, so a port cannot silently stall and every party reads the same state.",
    layers: [
      {
        title: "Request Ledger",
        subtitle: "The Tracked Object",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Tracked Object",
          description:
            "Turns each porting request into a single anchored object with a defined state machine. It replaces a scattered email chain between two operators with one record every party can query by request identifier.",
          platformFunction: "Request Lifecycle",
        },
        codeSnippet:
          "contract PortRegistry {\n  enum State { Init, Verified, Released, Complete }\n  struct Port {\n    bytes32 msisdn;\n    address gaining;\n    address losing;\n    State state;\n  }\n\n  mapping(bytes32 => Port) public ports;\n\n  function initPort(bytes32 id, bytes32 num, address losing) external {\n    ports[id] = Port(num, msg.sender, losing, State.Init);\n  }\n}",
        simAction: "Simulate Request Initiation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Customer requests to keep number on switch...", tone: "default" },
          { text: "Recording gaining and losing operators...", tone: "default" },
          { text: "Setting request state to Init...", tone: "default" },
          { text: "Writing tracked object to chain...", tone: "default" },
          { text: "[SUCCESS] Porting request opened and anchored.", tone: "success" },
        ],
      },
      {
        title: "Identity Gate",
        subtitle: "The Ownership Check",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ownership Check",
          description:
            "Blocks a port until the Civil Registry confirms the requester owns the number. It prevents fraudulent or mistaken porting by tying the request to the authoritative identity record before release.",
          platformFunction: "Identity Verification",
        },
        codeSnippet:
          "function verifyIdentity(bytes32 id) external onlyRegistry {\n    require(ports[id].state == State.Init, \"Wrong state\");\n    require(registry.owns(ports[id].msisdn, requester[id]), \"Owner mismatch\");\n    ports[id].state = State.Verified;\n    emit IdentityVerified(id);\n}",
        simAction: "Simulate Identity Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading porting request in Init state...", tone: "default" },
          { text: "Querying civil registry for ownership...", tone: "default" },
          { text: "Matching claim to authoritative record...", tone: "default" },
          { text: "Advancing request state to Verified...", tone: "default" },
          { text: "[SUCCESS] Ownership confirmed, port cleared.", tone: "success" },
        ],
      },
      {
        title: "Handoff Timer",
        subtitle: "The Regulated Window",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Regulated Window",
          description:
            "Enforces the mandated time for the losing operator to release the number and notifies both sides on every transition. It exposes a stalling operator instead of letting a port fail silently.",
          platformFunction: "Timed Transitions",
        },
        codeSnippet:
          "function releaseNumber(bytes32 id) external onlyLosing(id) {\n    require(ports[id].state == State.Verified, \"Not verified\");\n    require(block.timestamp <= deadline[id], \"Window missed\");\n    ports[id].state = State.Released;\n    notify(ports[id].gaining, ports[id].losing, id);\n}",
        simAction: "Simulate Operator Handoff",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking release against regulated window...", tone: "default" },
          { text: "Confirming losing operator inside deadline...", tone: "default" },
          { text: "Transitioning state to Released...", tone: "default" },
          { text: "Notifying both operators of change...", tone: "default" },
          { text: "[SUCCESS] Number released, handoff on time.", tone: "success" },
        ],
      },
      {
        title: "Audit History",
        subtitle: "The Shared Status",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Status",
          description:
            "Retains every transition with its actor and timestamp and exposes the current state to the regulator and both operators. It turns 'where is my port' into one verifiable answer and settles disputes from the log.",
          platformFunction: "Audit & Oversight",
        },
        codeSnippet:
          "function completePort(bytes32 id) external onlyGaining(id) {\n    require(ports[id].state == State.Released, \"Not released\");\n    ports[id].state = State.Complete;\n    audit.seal(id, msg.sender, block.timestamp);\n    emit PortComplete(id);\n}",
        simAction: "Simulate Port Completion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Activating number on gaining network...", tone: "default" },
          { text: "Transitioning state to Complete...", tone: "default" },
          { text: "Sealing full transition history...", tone: "default" },
          { text: "Publishing status to regulator and operators...", tone: "default" },
          { text: "[SUCCESS] Port completed, history shared.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anchored portability coordination is a horizontal capability. Here is how different parties in a number switch put the shared record to work.",
    sectors: [
      { icon: Globe, title: "Gaining & Losing Operators", description: "Track every incoming and outgoing port as one anchored object with a shared status, ending the silent handoff gaps and finger-pointing that drive customer complaints during a switch.", assetTypes: ["Porting Requests", "Release Windows", "State Transitions"] },
      { icon: Landmark, title: "Telecom Regulators", description: "Read one verifiable status for any port and hold operators to the mandated windows from anchored timestamps, replacing after-the-fact complaint handling with live oversight.", assetTypes: ["Port Status", "Window Compliance", "Audit Trails"] },
      { icon: Users, title: "Subscribers & Service Desks", description: "Give a switching customer a single answer to 'where is my port' resolved from the shared chain, cutting resolution time and the escalations that follow a stalled handoff.", assetTypes: ["Switch Requests", "Status Lookups", "Resolution Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy porting gateway or capturing requests from a modern customer channel, Cerulea routes both into one shared portability record.",
    tracks: [
      {
        title: "Track A: Enterprise Porting Gateway Bridging",
        description:
          "For operators on legacy central reference and porting gateways. Existing porting messages are translated into signed on-chain state transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Porting Gateway", sublabel: "Operator Number Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Request Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Portability Coordination Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Customer Channel Capture",
        description:
          "For operators taking switches from app and store channels. Each request is signed at the channel node and routed straight to the chain, with the regulator reading the same status.",
        connectorLabels: ["NODE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "App / Store Channel", sublabel: "Customer Switch Intake", icon: IdCard, accent: false },
          { label: "Coordination Validators", sublabel: "State Machine Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Portability Record", icon: Workflow, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-operator number portability process with end-to-end tracking, identity verification, timed handoff windows, and a shared regulator status from scratch requires specialised engineers and long inter-operator coordination cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Porting & Window Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects central reference database integration benchmarks. Wiring each operator's porting gateway, encoding the regulated window logic, and building a shared regulator status view for an average market takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your porting state machine and window rules into pre-audited WebAssembly binaries and provisions the shared coordination ledger and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "tower-infrastructure-sharing-cost-allocation-among-operators",
    icon: PieChart,
    eyebrow: "Infrastructure Billing Layer",
    headline1: "Split the tower fairly.",
    headline2: "End the billing dispute.",
    heroDescription:
      "Deploy a transparent cost allocation system for shared telecom towers that bills each operator on verified equipment installed and actual power usage. The Invoices and Billing, Audit Logs, and Provenance Notary modules anchor every operator's footprint as verified data and calculate the split automatically.",
    heroCta: "Deploy Tower Cost Allocation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace a contested spreadsheet split with an anchored allocation driven by each operator's verified footprint.",
    mechanics: [
      { title: "Verified Equipment Footprint", description: "Anchor what is actually on the tower. Each operator's installed antennas, radios, and cabinets are recorded as verified data via the Provenance Notary, so allocation rests on real hardware rather than a declared estimate." },
      { title: "Metered Power Attribution", description: "Bill power to the consumer. Per-tenant power readings are anchored and attributed to the operator that drew them, removing the flat splits that overcharge light tenants and subsidise heavy ones." },
      { title: "Automatic Allocation", description: "Calculate the split on-chain. The contract divides the tower's operating, power, and maintenance cost across tenants by their verified footprint, producing a defensible allocation without a manual apportionment exercise." },
      { title: "Transparent Invoicing", description: "Show the working. The Invoices and Billing module issues each operator an invoice that traces every line back to the anchored footprint and power data behind it." },
      { title: "Dispute Evidence", description: "Settle challenges from the record. When an operator questions a charge, the Audit Logs module returns the exact equipment and power figures used, resolving the dispute against verified data." },
      { title: "Tower Company Assurance", description: "Prove full recovery. The tower company confirms every operating cost is allocated and billed, closing the leakage that flat or negotiated splits leave behind." },
    ],
    lifecycleTitle: "The Allocation Lifecycle",
    lifecycleSubtitle:
      "Follow one billing cycle from equipment registration through metered power to a transparent per-operator invoice.",
    lifecycleSteps: [
      {
        label: "Footprint Registration",
        description:
          "An operator installs equipment on a shared tower. The Provenance Notary anchors its antennas, radios, and cabinet footprint as the verified basis for allocation.",
        icon: Building2,
        logFilename: "cerulea_tower.log",
        logLines: [
          { text: "[SYS] Registering tenant footprint on TWR_4471...", time: "11:20:07", tone: "default" },
          { text: "[CMD] anchorFootprint { op: \"OP_C\", radios: 6, cabinets: 2 }", time: "11:20:07", tone: "primary" },
          { text: "[AUTH] Verifying install against site survey record...", time: "11:20:08", tone: "secondary" },
          { text: "[OK] Footprint anchored for tenant OP_C.", time: "11:20:08", tone: "success" },
        ],
      },
      {
        label: "Power Metering",
        description:
          "Per-tenant power readings stream in over the cycle. Each reading is anchored and attributed to the operator that consumed it, building a verified power profile per tenant.",
        icon: Zap,
        logFilename: "cerulea_tower.log",
        logLines: [
          { text: "[SYS] Ingesting per-tenant power reading...", time: "18:00:00", tone: "default" },
          { text: "[CMD] anchorPower(TWR_4471, op: \"OP_C\", kwh: 214)", time: "18:00:01", tone: "primary" },
          { text: "[SYS] Attributing draw to verified tenant meter...", time: "18:00:01", tone: "default" },
          { text: "[OK] Power reading anchored. Profile updated.", time: "18:00:02", tone: "success" },
        ],
      },
      {
        label: "Cost Allocation",
        description:
          "At cycle close the contract divides the tower's operating, power, and maintenance cost across tenants by their anchored footprint and metered draw.",
        icon: PieChart,
        logFilename: "cerulea_tower.log",
        logLines: [
          { text: "[SYS] Closing billing cycle for TWR_4471...", time: "23:59:40", tone: "default" },
          { text: "[CMD] allocateCost(TWR_4471, total: 41800)", time: "23:59:41", tone: "primary" },
          { text: "[AUTH] Dividing cost by footprint and power share...", time: "23:59:41", tone: "secondary" },
          { text: "[OK] Cost split across 3 tenants. Fully allocated.", time: "23:59:42", tone: "success" },
        ],
      },
      {
        label: "Invoice Issuance",
        description:
          "The Invoices and Billing module issues each operator a traceable invoice, and the Audit Logs module holds the exact figures behind every line for any later challenge.",
        icon: FileCheck,
        logFilename: "cerulea_tower.log",
        logLines: [
          { text: "[SYS] Generating tenant invoices for cycle...", time: "00:02:11", tone: "default" },
          { text: "[CMD] issueInvoice(OP_C, amount: 15920)", time: "00:02:11", tone: "primary" },
          { text: "[SYS] Linking each line to anchored footprint data...", time: "00:02:12", tone: "default" },
          { text: "[OK] Invoice issued, traceable to source data.", time: "00:02:12", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes tower cost sharing into contracts for footprint registration, power attribution, automatic allocation, and traceable invoicing, so every operator's charge derives from verified data.",
    layers: [
      {
        title: "Footprint Registry",
        subtitle: "The Verified Install",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Install",
          description:
            "Anchors each tenant's actual equipment on a tower against a site survey record. It makes cost allocation rest on hardware that is verifiably present rather than a self-declared footprint.",
          platformFunction: "Asset Registration",
        },
        codeSnippet:
          "contract FootprintRegistry {\n  struct Footprint {\n    address operator;\n    uint16 radios;\n    uint16 cabinets;\n    uint256 loadUnits;\n  }\n\n  mapping(bytes32 => Footprint[]) public towers;\n\n  function anchorFootprint(bytes32 tower, uint16 radios, uint16 cabinets) external onlySurveyor {\n    towers[tower].push(Footprint(msg.sender, radios, cabinets, 0));\n  }\n}",
        simAction: "Simulate Footprint Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Operator installs equipment on tower...", tone: "default" },
          { text: "Verifying install against site survey...", tone: "default" },
          { text: "Recording radios and cabinet footprint...", tone: "default" },
          { text: "Anchoring tenant footprint to tower...", tone: "default" },
          { text: "[SUCCESS] Verified footprint registered.", tone: "success" },
        ],
      },
      {
        title: "Power Attribution",
        subtitle: "The Metered Draw",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Metered Draw",
          description:
            "Anchors per-tenant power readings and ties each to the operator that consumed it. It replaces flat power splits with attribution to actual draw, so a heavy tenant carries its own energy cost.",
          platformFunction: "Consumption Metering",
        },
        codeSnippet:
          "function anchorPower(bytes32 tower, address op, uint256 kwh) external onlyMeter {\n    powerDraw[tower][op] += kwh;\n    emit PowerAnchored(tower, op, kwh);\n}",
        simAction: "Simulate Power Metering",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting per-tenant power reading...", tone: "default" },
          { text: "Matching reading to verified tenant meter...", tone: "default" },
          { text: "Attributing draw to consuming operator...", tone: "default" },
          { text: "Updating tenant power profile...", tone: "default" },
          { text: "[SUCCESS] Power attributed to actual consumer.", tone: "success" },
        ],
      },
      {
        title: "Allocation Engine",
        subtitle: "The Automatic Split",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Split",
          description:
            "Divides the tower's total operating, power, and maintenance cost across tenants by their anchored footprint and metered draw. It produces a defensible allocation without any manual apportionment.",
          platformFunction: "Cost Allocation",
        },
        codeSnippet:
          "function allocateCost(bytes32 tower, uint256 total) external onlyCycleClose returns (uint256[] memory) {\n    Footprint[] storage t = towers[tower];\n    uint256 basis = totalWeight(tower);\n    for (uint i; i < t.length; i++) {\n        shares[tower][t[i].operator] = total * weight(tower, t[i].operator) / basis;\n    }\n}",
        simAction: "Simulate Cost Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Closing billing cycle for tower...", tone: "default" },
          { text: "Summing footprint and power weights...", tone: "default" },
          { text: "Dividing total cost by tenant share...", tone: "default" },
          { text: "Confirming full cost is allocated...", tone: "default" },
          { text: "[SUCCESS] Cost split fairly across tenants.", tone: "success" },
        ],
      },
      {
        title: "Invoice Notary",
        subtitle: "The Traceable Bill",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Traceable Bill",
          description:
            "Issues each operator a traceable invoice and holds the exact figures behind every line. It lets a challenged charge be resolved against the anchored footprint and power data rather than a disputed spreadsheet.",
          platformFunction: "Billing & Audit",
        },
        codeSnippet:
          "function issueInvoice(bytes32 tower, address op) external onlyBilling returns (bytes32 invoice) {\n    uint256 amount = shares[tower][op];\n    invoice = billing.mint(op, amount, sourceHash(tower, op));\n    emit InvoiceIssued(invoice, op, amount);\n}",
        simAction: "Simulate Invoice Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Generating invoice for tenant share...", tone: "default" },
          { text: "Linking each line to anchored source...", tone: "default" },
          { text: "Sealing footprint and power figures...", tone: "default" },
          { text: "Delivering traceable invoice to operator...", tone: "default" },
          { text: "[SUCCESS] Invoice issued, fully auditable.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anchored infrastructure billing is a horizontal capability. Here is how different players around a shared tower put the verified allocation to work.",
    sectors: [
      { icon: Building2, title: "Tower Companies", description: "Recover every operating cost by billing tenants on verified footprint and metered power, closing the leakage that flat splits leave and ending the monthly apportionment argument.", assetTypes: ["Tower Sites", "Cost Pools", "Tenant Invoices"] },
      { icon: Globe, title: "Mobile Network Operators", description: "Pay only for the equipment and power actually attributed to their gear, with every invoice line traceable to anchored data instead of a negotiated flat share.", assetTypes: ["Equipment Footprints", "Power Profiles", "Allocated Charges"] },
      { icon: Scale, title: "Finance & Audit Teams", description: "Resolve any charge challenge from the exact figures used, turning a contested cost split into a fast lookup against a tamper-evident allocation record.", assetTypes: ["Allocation Records", "Dispute Evidence", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy asset and billing system or streaming readings from smart power meters, Cerulea routes both into one verified allocation record.",
    tracks: [
      {
        title: "Track A: Enterprise Asset System Bridging",
        description:
          "For tower companies on legacy asset and ERP billing stacks. Equipment records and cost pools are translated into signed on-chain footprints through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Asset / ERP Billing", sublabel: "Tower Company Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Footprint Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Cost Allocation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Smart Meter Capture",
        description:
          "For sites with per-tenant smart metering. Each power reading is signed at the meter node and routed straight to the chain, driving continuous power attribution.",
        connectorLabels: ["METER SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Per-Tenant Meter", sublabel: "Site Power Readings", icon: Zap, accent: false },
          { label: "Allocation Validators", sublabel: "Attribution Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Allocation Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared tower cost allocation system with verified footprint registration, metered power attribution, automatic splitting, and traceable invoicing from scratch requires specialised engineers and long multi-tenant integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Allocation & Billing Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects tower asset and billing integration benchmarks. Wiring the asset register, encoding footprint and power allocation logic, and building traceable multi-tenant invoicing for an average tower portfolio takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your footprint and allocation rules into pre-audited WebAssembly binaries and provisions the shared billing ledger and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "tower-rental-payment-reconciliation-with-landowners",
    icon: Home,
    eyebrow: "Lease Payment Layer",
    headline1: "Pay every landowner.",
    headline2: "Correctly and on time.",
    heroDescription:
      "Deliver a verified rental payment record linking each telecom tower to its landowner, so rent is paid correctly and on schedule even as land changes hands. The Invoices and Billing, Civil Registry, and Audit Logs modules track every payment against the lease terms and flag any that is missed or wrong.",
    heroCta: "Deploy Lease Reconciliation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manual rent ledger for thousands of sites into an anchored record that pays the right owner on the right date.",
    mechanics: [
      { title: "Site-to-Owner Binding", description: "Anchor who owns the ground. Each tower site is bound to its verified landowner via the Civil Registry, so rent is always directed at the current, confirmed owner of record." },
      { title: "Lease Term Encoding", description: "Put the contract on-chain. The lease amount, escalation, and payment schedule are encoded once, so the system knows exactly what is owed to each landowner and when." },
      { title: "Scheduled Payment Tracking", description: "Watch every due date. The Invoices and Billing module tracks each scheduled rent payment against the lease, marking it paid, pending, or overdue without a spreadsheet chase." },
      { title: "Ownership Change Handling", description: "Follow the land, not the paper. When a plot changes hands, the Civil Registry update re-points future payments to the new owner, ending the misdirected rent that follows a sale." },
      { title: "Exception Flagging", description: "Surface the problems only. Any missed, short, or duplicate payment is flagged for the land management team, so attention goes to exceptions instead of reviewing every site." },
      { title: "Audit-Ready Reconciliation", description: "Reconcile from one record. The Audit Logs module retains every payment against its lease term, so a landowner query or an internal audit resolves against tamper-evident history." },
    ],
    lifecycleTitle: "The Payment Lifecycle",
    lifecycleSubtitle:
      "Follow one tower lease from owner binding through a scheduled payment to an exception being caught and cleared.",
    lifecycleSteps: [
      {
        label: "Owner Binding",
        description:
          "A tower site is linked to its landowner. The Civil Registry verifies the owner of record and anchors the site-to-owner binding as the basis for every future payment.",
        icon: Home,
        logFilename: "cerulea_lease.log",
        logLines: [
          { text: "[SYS] Binding tower site SITE_0912 to landowner...", time: "09:31:22", tone: "default" },
          { text: "[CMD] bindOwner { site: \"SITE_0912\", owner: \"NID_5540\" }", time: "09:31:22", tone: "primary" },
          { text: "[AUTH] Verifying ownership against civil registry...", time: "09:31:23", tone: "secondary" },
          { text: "[OK] Site bound to verified owner of record.", time: "09:31:23", tone: "success" },
        ],
      },
      {
        label: "Schedule Anchor",
        description:
          "The lease terms are encoded on-chain. The rent amount, escalation, and due dates are anchored so the contract knows exactly what this landowner is owed and when.",
        icon: ScrollText,
        logFilename: "cerulea_lease.log",
        logLines: [
          { text: "[SYS] Encoding lease terms for SITE_0912...", time: "09:32:04", tone: "default" },
          { text: "[CMD] anchorLease { rent: 1200, cycle: \"MONTHLY\" }", time: "09:32:04", tone: "primary" },
          { text: "[SYS] Registering escalation and payment schedule...", time: "09:32:05", tone: "default" },
          { text: "[OK] Lease anchored. Next due 2026-10-01.", time: "09:32:05", tone: "success" },
        ],
      },
      {
        label: "Scheduled Payment",
        description:
          "On the due date the Invoices and Billing module records the rent payment against the lease, marking it settled and advancing the schedule to the next cycle.",
        icon: Wallet,
        logFilename: "cerulea_lease.log",
        logLines: [
          { text: "[SYS] Due date reached for SITE_0912 rent...", time: "08:00:00", tone: "default" },
          { text: "[CMD] recordPayment(SITE_0912, amount: 1200)", time: "08:00:01", tone: "primary" },
          { text: "[AUTH] Matching payment to lease term and owner...", time: "08:00:01", tone: "secondary" },
          { text: "[OK] Rent settled on schedule. Cycle advanced.", time: "08:00:02", tone: "success" },
        ],
      },
      {
        label: "Exception Clearance",
        description:
          "A short payment on another site is flagged. The land management team reads the anchored figures from the Audit Logs module and clears the exception against the lease.",
        icon: Search,
        logFilename: "cerulea_lease.log",
        logLines: [
          { text: "[SYS] Flagging short payment on SITE_1183...", time: "08:00:05", tone: "default" },
          { text: "[CMD] flagException(SITE_1183, expected: 1500, paid: 1200)", time: "08:00:05", tone: "error" },
          { text: "[SYS] Returning anchored lease and payment history...", time: "08:00:06", tone: "default" },
          { text: "[OK] Exception raised to land management team.", time: "08:00:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes lease reconciliation into contracts for owner binding, lease encoding, scheduled tracking, and exception handling, so rent reaches the right owner and every payment reconciles.",
    layers: [
      {
        title: "Owner Registry",
        subtitle: "The Verified Landlord",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Landlord",
          description:
            "Binds each tower site to its landowner via the Civil Registry and re-points the binding when land changes hands. It ensures rent is always directed at the current, confirmed owner of record.",
          platformFunction: "Ownership Binding",
        },
        codeSnippet:
          "contract OwnerRegistry {\n  struct Binding {\n    bytes32 owner;\n    uint256 boundAt;\n  }\n\n  mapping(bytes32 => Binding) public siteOwner;\n\n  function bindOwner(bytes32 site, bytes32 owner) external onlyRegistry {\n    require(registry.exists(owner), \"Unknown owner\");\n    siteOwner[site] = Binding(owner, block.timestamp);\n    emit OwnerBound(site, owner);\n  }\n}",
        simAction: "Simulate Owner Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Linking tower site to landowner...", tone: "default" },
          { text: "Verifying ownership in civil registry...", tone: "default" },
          { text: "Confirming current owner of record...", tone: "default" },
          { text: "Writing site-to-owner binding...", tone: "default" },
          { text: "[SUCCESS] Site bound to verified owner.", tone: "success" },
        ],
      },
      {
        title: "Lease Terms",
        subtitle: "The Encoded Contract",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Encoded Contract",
          description:
            "Records the rent amount, escalation, and payment schedule for each lease on-chain. It gives the system a precise definition of what every landowner is owed and on which date, with no ambiguity.",
          platformFunction: "Lease Definition",
        },
        codeSnippet:
          "function anchorLease(bytes32 site, uint256 rent, uint8 cycle, uint16 escalationBps) external onlyManager {\n    leases[site] = Lease(rent, cycle, escalationBps, nextDue(cycle));\n    emit LeaseAnchored(site, rent, cycle);\n}",
        simAction: "Simulate Schedule Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Encoding rent amount and cycle...", tone: "default" },
          { text: "Registering escalation schedule...", tone: "default" },
          { text: "Computing next due date...", tone: "default" },
          { text: "Anchoring lease terms to site...", tone: "default" },
          { text: "[SUCCESS] Lease anchored with schedule.", tone: "success" },
        ],
      },
      {
        title: "Payment Tracker",
        subtitle: "The Schedule Watch",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Schedule Watch",
          description:
            "Tracks each scheduled rent payment against its lease, marking it paid, pending, or overdue. It replaces a manual ledger across thousands of sites with an automatic, always-current view of what is due.",
          platformFunction: "Payment Tracking",
        },
        codeSnippet:
          "function recordPayment(bytes32 site, uint256 amount) external onlyBilling {\n    Lease storage l = leases[site];\n    require(amount == l.rent, \"Amount mismatch\");\n    l.nextDue = advance(l.cycle);\n    emit PaymentRecorded(site, amount, l.nextDue);\n}",
        simAction: "Simulate Scheduled Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Due date reached for site rent...", tone: "default" },
          { text: "Matching payment to lease and owner...", tone: "default" },
          { text: "Marking rent settled for cycle...", tone: "default" },
          { text: "Advancing schedule to next due date...", tone: "default" },
          { text: "[SUCCESS] Rent settled on time.", tone: "success" },
        ],
      },
      {
        title: "Exception Handler",
        subtitle: "The Flag & Trail",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Flag & Trail",
          description:
            "Flags any missed, short, or duplicate payment and returns the anchored lease and payment history for it. It focuses the land management team on exceptions and resolves each from a tamper-evident trail.",
          platformFunction: "Exception & Audit",
        },
        codeSnippet:
          "function flagException(bytes32 site, uint256 expected, uint256 paid) external onlyBilling {\n    require(paid != expected, \"No exception\");\n    exceptions[site] = Exception(expected, paid, block.timestamp);\n    emit ExceptionFlagged(site, expected, paid);\n}",
        simAction: "Simulate Exception Clearance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting short payment on site...", tone: "default" },
          { text: "Comparing paid against expected rent...", tone: "default" },
          { text: "Returning anchored payment history...", tone: "default" },
          { text: "Raising exception to land team...", tone: "default" },
          { text: "[SUCCESS] Exception flagged and traceable.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anchored lease reconciliation is a horizontal capability. Here is how different parties around a tower lease put the verified record to work.",
    sectors: [
      { icon: Building2, title: "Tower Companies", description: "Pay thousands of individual landowners correctly and on schedule from one anchored record, ending the misdirected and missed rent that a manual site ledger produces.", assetTypes: ["Tower Leases", "Payment Schedules", "Exception Flags"] },
      { icon: Home, title: "Landowners", description: "Receive the right rent on the right date with a verifiable record behind it, so an ownership change or a query resolves against anchored lease history instead of a phone call.", assetTypes: ["Lease Terms", "Rent Receipts", "Ownership Records"] },
      { icon: Scale, title: "Land Management & Audit", description: "Work only the flagged exceptions and reconcile any site from its anchored payment trail, replacing full-portfolio review with targeted, evidence-backed handling.", assetTypes: ["Reconciliation Records", "Payment History", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy lease and land management system or capturing ownership updates from the registry, Cerulea routes both into one verified payment record.",
    tracks: [
      {
        title: "Track A: Enterprise Lease System Bridging",
        description:
          "For tower companies on legacy lease and land management stacks. Lease records and payment runs are translated into signed on-chain schedules through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Lease Management System", sublabel: "Land & Site Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Lease Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Rental Reconciliation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Registry Ownership Capture",
        description:
          "For portfolios linked to the civil land registry. Each ownership change is signed at the registry node and routed straight to the chain, re-pointing future payments automatically.",
        connectorLabels: ["REGISTRY SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Civil Land Registry", sublabel: "Ownership Updates", icon: IdCard, accent: false },
          { label: "Reconciliation Validators", sublabel: "Binding Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Payment Record", icon: Home, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verified tower lease reconciliation system with owner binding, encoded lease terms, scheduled payment tracking, and exception flagging across thousands of sites from scratch requires specialised engineers and long land-system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Lease & Payment Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects land and lease system integration benchmarks. Wiring the lease register, encoding schedule and escalation logic, and linking ownership changes for an average site portfolio takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your lease and payment rules into pre-audited WebAssembly binaries and provisions the shared reconciliation ledger and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "emergency-alert-broadcast-delivery-confirmation-across-operators",
    icon: Radio,
    eyebrow: "Public Alerting Layer",
    headline1: "Prove the alert went out.",
    headline2: "Across every operator.",
    heroDescription:
      "Run a verified confirmation record showing an emergency alert was broadcast by every mobile operator to all subscribers in an affected area. The Notifications, Audit Logs, and Compliance Attestations modules anchor each operator's broadcast confirmation, giving the disaster authority proof of delivery across the whole zone.",
    heroCta: "Deploy Alert Confirmation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an unverifiable broadcast into an anchored delivery record that covers every operator in the affected area.",
    mechanics: [
      { title: "Authority-Signed Dispatch", description: "Anchor the order at source. The disaster management authority issues a signed alert with its area and severity, so every operator acts on one authenticated instruction rather than a relayed message." },
      { title: "Per-Operator Confirmation", description: "Require proof from each network. Every mobile operator returns a signed confirmation that it broadcast the alert to its subscribers in the zone, recorded through the Notifications module." },
      { title: "Coverage Reconciliation", description: "Check the whole area is covered. The contract reconciles confirmations against the operators serving the affected cells, exposing any network that has not yet broadcast." },
      { title: "Compliance Attestations", description: "Bind the legal obligation to evidence. The Compliance Attestations module ties each broadcast to the operator's public-safety duty, turning a regulatory requirement into an anchored attestation." },
      { title: "Post-Event Review", description: "Reconstruct delivery afterward. The Audit Logs module retains every confirmation with its timestamp, so a post-incident review reads exactly which operator broadcast when." },
      { title: "Gap Alerting", description: "Escalate the silent network. If an operator confirmation is missing inside the window, the system flags the gap to the authority so coverage can be chased in real time.", },
    ],
    lifecycleTitle: "The Alerting Lifecycle",
    lifecycleSubtitle:
      "Follow one emergency alert from an authority dispatch through per-operator broadcast to a reconciled coverage record.",
    lifecycleSteps: [
      {
        label: "Alert Dispatch",
        description:
          "The disaster management authority issues a signed cell broadcast alert. The contract anchors the affected area, severity, and message digest as the authenticated order.",
        icon: Radio,
        logFilename: "cerulea_alert.log",
        logLines: [
          { text: "[SYS] Receiving signed alert from Authority_NDMA...", time: "14:07:11", tone: "default" },
          { text: "[CMD] dispatchAlert { zone: \"CELL_GRID_77\", sev: \"RED\" }", time: "14:07:11", tone: "primary" },
          { text: "[AUTH] Verifying authority signature and area...", time: "14:07:11", tone: "secondary" },
          { text: "[OK] Alert ALERT_9021 anchored, operators notified.", time: "14:07:12", tone: "success" },
        ],
      },
      {
        label: "Operator Broadcast",
        description:
          "Each mobile operator broadcasts the alert to its subscribers in the zone and returns a signed confirmation, recorded through the Notifications module.",
        icon: Wifi,
        logFilename: "cerulea_alert.log",
        logLines: [
          { text: "[SYS] Awaiting broadcast confirmations for ALERT_9021...", time: "14:07:20", tone: "default" },
          { text: "[CMD] confirmBroadcast(ALERT_9021, op: \"OP_A\", reached: 41200)", time: "14:07:25", tone: "primary" },
          { text: "[SYS] Recording signed confirmation from operator...", time: "14:07:25", tone: "default" },
          { text: "[OK] Operator OP_A broadcast confirmed.", time: "14:07:26", tone: "success" },
        ],
      },
      {
        label: "Coverage Reconciliation",
        description:
          "The contract reconciles confirmations against the operators serving the affected cells, exposing any network that has not yet broadcast the alert.",
        icon: Network,
        logFilename: "cerulea_alert.log",
        logLines: [
          { text: "[SYS] Reconciling coverage for CELL_GRID_77...", time: "14:08:02", tone: "default" },
          { text: "[CMD] reconcileCoverage(ALERT_9021)", time: "14:08:02", tone: "primary" },
          { text: "[AUTH] Matching confirmations to serving operators...", time: "14:08:03", tone: "secondary" },
          { text: "[OK] 4 of 4 operators confirmed. Zone covered.", time: "14:08:03", tone: "success" },
        ],
      },
      {
        label: "Attestation Seal",
        description:
          "The Compliance Attestations module binds the completed coverage to each operator's public-safety duty, and the Audit Logs module seals the record for post-event review.",
        icon: FileCheck,
        logFilename: "cerulea_alert.log",
        logLines: [
          { text: "[SYS] Sealing compliance attestation for ALERT_9021...", time: "14:08:10", tone: "default" },
          { text: "[CMD] attestCoverage(ALERT_9021, duty: \"CELL_BCAST\")", time: "14:08:10", tone: "primary" },
          { text: "[SYS] Binding coverage to public-safety obligation...", time: "14:08:11", tone: "default" },
          { text: "[OK] Attestation sealed. Delivery record complete.", time: "14:08:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes emergency alerting into contracts for authenticated dispatch, per-operator confirmation, coverage reconciliation, and compliance attestation, so the authority holds verifiable proof of delivery across every network.",
    layers: [
      {
        title: "Dispatch Registry",
        subtitle: "The Authenticated Order",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authenticated Order",
          description:
            "Anchors the authority's signed alert with its area, severity, and message digest. It ensures every operator acts on one authenticated instruction rather than a relayed message of uncertain origin.",
          platformFunction: "Alert Dispatch",
        },
        codeSnippet:
          "contract AlertRegistry {\n  struct Alert {\n    bytes32 zone;\n    uint8 severity;\n    bytes32 message;\n    address authority;\n  }\n\n  mapping(bytes32 => Alert) public alerts;\n\n  function dispatchAlert(bytes32 id, bytes32 zone, uint8 sev, bytes32 msgHash) external onlyAuthority {\n    alerts[id] = Alert(zone, sev, msgHash, msg.sender);\n    emit AlertDispatched(id, zone, sev);\n  }\n}",
        simAction: "Simulate Alert Dispatch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving signed alert from authority...", tone: "default" },
          { text: "Verifying authority signature...", tone: "default" },
          { text: "Anchoring zone, severity, and digest...", tone: "default" },
          { text: "Notifying serving operators...", tone: "default" },
          { text: "[SUCCESS] Authenticated alert dispatched.", tone: "success" },
        ],
      },
      {
        title: "Confirmation Ledger",
        subtitle: "The Operator Proof",
        icon: Wifi,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Operator Proof",
          description:
            "Records each operator's signed confirmation that it broadcast the alert to its subscribers in the zone. It replaces an unverifiable claim with a cryptographic proof of broadcast per network.",
          platformFunction: "Delivery Confirmation",
        },
        codeSnippet:
          "function confirmBroadcast(bytes32 id, uint256 reached) external onlyOperator {\n    require(alerts[id].zone != 0, \"Unknown alert\");\n    confirmations[id][msg.sender] = Confirm(reached, block.timestamp);\n    emit BroadcastConfirmed(id, msg.sender, reached);\n}",
        simAction: "Simulate Operator Broadcast",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Operator broadcasts alert to zone...", tone: "default" },
          { text: "Counting subscribers reached...", tone: "default" },
          { text: "Signing broadcast confirmation...", tone: "default" },
          { text: "Recording proof against alert...", tone: "default" },
          { text: "[SUCCESS] Operator broadcast confirmed.", tone: "success" },
        ],
      },
      {
        title: "Coverage Engine",
        subtitle: "The Gap Finder",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Gap Finder",
          description:
            "Reconciles confirmations against the operators serving the affected cells and exposes any network yet to broadcast. It turns 'was the whole area warned' into a live, answerable question.",
          platformFunction: "Coverage Reconciliation",
        },
        codeSnippet:
          "function reconcileCoverage(bytes32 id) external view returns (address[] memory missing) {\n    address[] storage serving = zoneOperators[alerts[id].zone];\n    for (uint i; i < serving.length; i++) {\n        if (confirmations[id][serving[i]].timestamp == 0) missing = push(missing, serving[i]);\n    }\n}",
        simAction: "Simulate Coverage Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading operators serving affected cells...", tone: "default" },
          { text: "Matching confirmations to serving set...", tone: "default" },
          { text: "Checking for any missing broadcast...", tone: "default" },
          { text: "Confirming full-zone coverage...", tone: "default" },
          { text: "[SUCCESS] All serving operators confirmed.", tone: "success" },
        ],
      },
      {
        title: "Attestation Vault",
        subtitle: "The Compliance Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Seal",
          description:
            "Binds completed coverage to each operator's public-safety duty and retains every confirmation with its timestamp. It gives the authority an audit-ready delivery record for post-incident review.",
          platformFunction: "Compliance & Audit",
        },
        codeSnippet:
          "function attestCoverage(bytes32 id, bytes32 duty) external onlyAuthority {\n    require(reconcileCoverage(id).length == 0, \"Coverage incomplete\");\n    attestations[id] = Attestation(duty, block.timestamp);\n    emit CoverageAttested(id, duty);\n}",
        simAction: "Simulate Attestation Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming coverage is complete...", tone: "default" },
          { text: "Binding coverage to public-safety duty...", tone: "default" },
          { text: "Sealing all confirmations with timestamps...", tone: "default" },
          { text: "Writing attestation for review...", tone: "default" },
          { text: "[SUCCESS] Delivery record attested and sealed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anchored alert confirmation is a horizontal capability. Here is how different public-safety actors put the verified delivery record to work.",
    sectors: [
      { icon: Landmark, title: "Disaster Management Authorities", description: "Dispatch one authenticated alert and hold verifiable proof that every operator warned its subscribers in the zone, closing the gap between issuing a warning and confirming it was delivered.", assetTypes: ["Alert Orders", "Coverage Records", "Delivery Proofs"] },
      { icon: Globe, title: "Mobile Network Operators", description: "Return a signed broadcast confirmation that satisfies the public-safety duty from anchored evidence, replacing a self-reported claim with a cryptographic proof regulators can trust.", assetTypes: ["Broadcast Confirmations", "Duty Attestations", "Reach Counts"] },
      { icon: Shield, title: "Regulators & Reviewers", description: "Reconstruct exactly which operator broadcast when during a post-incident review, reading a tamper-evident timeline instead of assembling accounts from each network after the fact.", assetTypes: ["Attestation Records", "Incident Timelines", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a national alerting gateway or capturing confirmations from operator broadcast centres, Cerulea routes both into one shared delivery record.",
    tracks: [
      {
        title: "Track A: Alerting Gateway Bridging",
        description:
          "For authorities on a national cell broadcast gateway. Signed alert orders are translated into anchored dispatches through the API gateway, and confirmations post back automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Cell Broadcast Gateway", sublabel: "National Alerting System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Alert Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Alert Delivery Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Broadcast Centre Capture",
        description:
          "For operators confirming from their broadcast centres. Each broadcast is signed at the centre node and routed straight to the chain for coverage reconciliation.",
        connectorLabels: ["NODE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Broadcast Centre", sublabel: "Operator Cell Broadcast", icon: Radio, accent: false },
          { label: "Coverage Validators", sublabel: "Confirmation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Delivery Record", icon: Radio, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an emergency alert confirmation system with authenticated dispatch, per-operator broadcast proof, coverage reconciliation, and compliance attestation from scratch requires specialised engineers and long multi-operator public-safety integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Dispatch & Coverage Rules",
      ruleCount: 33,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects national alerting integration benchmarks. Wiring the broadcast gateway, building per-operator confirmation and coverage reconciliation, and encoding public-safety attestations for an average market takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your dispatch and coverage rules into pre-audited WebAssembly binaries and provisions the shared delivery ledger and attestation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "satellite-spectrum-rights-management-and-interference-dispute-resoluti",
    icon: Wifi,
    eyebrow: "Spectrum Coordination Layer",
    headline1: "Register every filing.",
    headline2: "Resolve interference in days.",
    heroDescription:
      "Stand up a private ITU coordination chain with an immutable spectrum filing registry and a tamper-proof dispute evidence trail. When two satellite operators file conflicting coordination claims, the Spectrum Registry, Provenance Notary, and Evidence Chain modules give every party and the ITU one shared, verifiable history to resolve against.",
    heroCta: "Deploy Spectrum Coordination",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace a contested paper trail of filings with an immutable registry that settles interference disputes on evidence.",
    mechanics: [
      { title: "Immutable Filing Registry", description: "Anchor each claim in time. The Spectrum Registry records every coordination filing with its orbital slot, frequency, and priority date, so the order and content of claims cannot later be re-argued." },
      { title: "Priority Date Sealing", description: "Fix who filed first. The Provenance Notary seals each filing's priority date on submission, making the first-come order that governs coordination cryptographically provable." },
      { title: "Interference Evidence Chain", description: "Build the dispute case as it happens. The Evidence Chain module anchors measured interference reports and coordination correspondence, assembling a tamper-proof record instead of a reconstructed one." },
      { title: "Shared Coordination History", description: "Give all parties one truth. Both operators and the ITU read the same filing and dispute history, so coordination proceeds from a single record rather than three conflicting archives." },
      { title: "Structured Resolution", description: "Adjudicate against the ledger. A conflicting claim is resolved against sealed priority dates and anchored interference evidence, collapsing coordination disputes from months to days." },
      { title: "ITU Auditability", description: "Make the outcome checkable. Every filing, report, and resolution is auditable by all parties and the ITU, so a coordination outcome stands on evidence any regulator can verify." },
    ],
    lifecycleTitle: "The Coordination Lifecycle",
    lifecycleSubtitle:
      "Follow a spectrum filing from registration through a conflicting claim to an evidence-based resolution.",
    lifecycleSteps: [
      {
        label: "Filing Registration",
        description:
          "A satellite operator files a coordination request. The Spectrum Registry anchors the orbital slot, frequency band, and priority date as an immutable claim.",
        icon: ScrollText,
        logFilename: "cerulea_spectrum.log",
        logLines: [
          { text: "[SYS] Registering coordination filing...", time: "07:55:12", tone: "default" },
          { text: "[CMD] fileClaim { slot: \"GSO_113E\", band: \"KU\", pri: \"2026-09-19\" }", time: "07:55:12", tone: "primary" },
          { text: "[AUTH] Sealing priority date via provenance notary...", time: "07:55:13", tone: "secondary" },
          { text: "[OK] Filing FILE_2207 anchored, priority sealed.", time: "07:55:13", tone: "success" },
        ],
      },
      {
        label: "Conflict Detection",
        description:
          "A second operator files an overlapping claim on the same slot and band. The registry detects the conflict and opens a coordination case against both filings.",
        icon: Scale,
        logFilename: "cerulea_spectrum.log",
        logLines: [
          { text: "[SYS] Screening new filing against registry...", time: "10:41:30", tone: "default" },
          { text: "[CMD] fileClaim { slot: \"GSO_113E\", band: \"KU\", op: \"OP_Y\" }", time: "10:41:30", tone: "primary" },
          { text: "[AUTH] Overlap found with FILE_2207, opening case...", time: "10:41:31", tone: "error" },
          { text: "[OK] Coordination case CASE_884 opened.", time: "10:41:31", tone: "success" },
        ],
      },
      {
        label: "Evidence Anchoring",
        description:
          "Measured interference reports and coordination correspondence are anchored to the case. The Evidence Chain module assembles a tamper-proof record for the dispute.",
        icon: FileCheck,
        logFilename: "cerulea_spectrum.log",
        logLines: [
          { text: "[SYS] Anchoring interference evidence to CASE_884...", time: "15:12:08", tone: "default" },
          { text: "[CMD] anchorEvidence(CASE_884, type: \"INTERFERENCE_MEAS\")", time: "15:12:08", tone: "primary" },
          { text: "[SYS] Hashing measurement report and correspondence...", time: "15:12:09", tone: "default" },
          { text: "[OK] Evidence sealed to dispute chain.", time: "15:12:09", tone: "success" },
        ],
      },
      {
        label: "Dispute Resolution",
        description:
          "The case is resolved against sealed priority dates and anchored interference evidence. The outcome is recorded and made auditable to both parties and the ITU.",
        icon: Gavel,
        logFilename: "cerulea_spectrum.log",
        logLines: [
          { text: "[SYS] Resolving CASE_884 on sealed evidence...", time: "09:20:44", tone: "default" },
          { text: "[CMD] resolveCase(CASE_884, priority: \"FILE_2207\")", time: "09:20:44", tone: "primary" },
          { text: "[AUTH] Confirming priority date and interference record...", time: "09:20:45", tone: "secondary" },
          { text: "[OK] Case resolved in 4 days. ITU-auditable.", time: "09:20:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes spectrum coordination into contracts for filing registration, conflict detection, evidence anchoring, and adjudication, so disputes resolve on sealed priority and tamper-proof records.",
    layers: [
      {
        title: "Filing Registry",
        subtitle: "The Sealed Claim",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Claim",
          description:
            "Anchors each coordination filing with its orbital slot, frequency band, and priority date. It fixes the first-come order that governs spectrum coordination so no claim's timing can later be disputed.",
          platformFunction: "Filing Registration",
        },
        codeSnippet:
          "contract SpectrumRegistry {\n  struct Filing {\n    bytes32 slot;\n    bytes32 band;\n    uint256 priority;\n    address operator;\n  }\n\n  mapping(bytes32 => Filing) public filings;\n\n  function fileClaim(bytes32 id, bytes32 slot, bytes32 band) external onlyOperator {\n    filings[id] = Filing(slot, band, block.timestamp, msg.sender);\n    emit Filed(id, slot, band, block.timestamp);\n  }\n}",
        simAction: "Simulate Filing Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Operator submits coordination filing...", tone: "default" },
          { text: "Recording orbital slot and band...", tone: "default" },
          { text: "Sealing priority date on submission...", tone: "default" },
          { text: "Writing immutable claim to registry...", tone: "default" },
          { text: "[SUCCESS] Filing anchored, priority sealed.", tone: "success" },
        ],
      },
      {
        title: "Conflict Detector",
        subtitle: "The Overlap Screen",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Overlap Screen",
          description:
            "Screens every new filing against the registry for an overlapping slot and band. It opens a coordination case the moment two claims conflict, rather than surfacing the clash months into a paper process.",
          platformFunction: "Conflict Detection",
        },
        codeSnippet:
          "function screen(bytes32 id) external onlyRegistry returns (bytes32 caseId) {\n    Filing storage f = filings[id];\n    bytes32 prior = index[f.slot][f.band];\n    if (prior != 0 && prior != id) {\n        caseId = openCase(prior, id);\n        emit ConflictFound(prior, id, caseId);\n    }\n}",
        simAction: "Simulate Conflict Detection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Screening new filing against registry...", tone: "default" },
          { text: "Comparing slot and band to prior claims...", tone: "default" },
          { text: "Detecting overlap with existing filing...", tone: "default" },
          { text: "Opening coordination case...", tone: "default" },
          { text: "[SUCCESS] Conflict flagged, case opened.", tone: "success" },
        ],
      },
      {
        title: "Evidence Chain",
        subtitle: "The Dispute Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Dispute Record",
          description:
            "Anchors measured interference reports and coordination correspondence to the open case. It assembles a tamper-proof dispute record as events occur, not one reconstructed after the fact.",
          platformFunction: "Evidence Anchoring",
        },
        codeSnippet:
          "function anchorEvidence(bytes32 caseId, bytes32 docHash, bytes32 kind) external onlyParty(caseId) {\n    cases[caseId].evidence.push(Evidence(docHash, kind, msg.sender, block.timestamp));\n    emit EvidenceAnchored(caseId, docHash, kind);\n}",
        simAction: "Simulate Evidence Anchoring",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Party submits interference measurement...", tone: "default" },
          { text: "Hashing measurement report...", tone: "default" },
          { text: "Anchoring correspondence to case...", tone: "default" },
          { text: "Sealing evidence to dispute chain...", tone: "default" },
          { text: "[SUCCESS] Tamper-proof evidence recorded.", tone: "success" },
        ],
      },
      {
        title: "Resolution Ledger",
        subtitle: "The Auditable Outcome",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auditable Outcome",
          description:
            "Resolves a case against sealed priority dates and anchored evidence and records the outcome. It makes every coordination decision auditable by both operators and the ITU, standing on verifiable facts.",
          platformFunction: "Adjudication & Audit",
        },
        codeSnippet:
          "function resolveCase(bytes32 caseId, bytes32 priorityFiling) external onlyPanel {\n    require(cases[caseId].evidence.length > 0, \"No evidence\");\n    cases[caseId].outcome = priorityFiling;\n    cases[caseId].resolvedAt = block.timestamp;\n    emit CaseResolved(caseId, priorityFiling);\n}",
        simAction: "Simulate Dispute Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading sealed priority dates...", tone: "default" },
          { text: "Reviewing anchored interference evidence...", tone: "default" },
          { text: "Determining prevailing filing...", tone: "default" },
          { text: "Recording auditable outcome...", tone: "default" },
          { text: "[SUCCESS] Dispute resolved on evidence.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anchored spectrum coordination is a horizontal capability. Here is how different parties in a satellite dispute put the shared registry to work.",
    sectors: [
      { icon: Plane, title: "Satellite Operators", description: "File coordination claims with a cryptographically sealed priority date and resolve interference disputes in days from anchored evidence, instead of losing months to a contested paper trail.", assetTypes: ["Coordination Filings", "Priority Dates", "Interference Reports"] },
      { icon: Landmark, title: "ITU & National Administrations", description: "Read one shared filing and dispute history for any slot and band, adjudicating and auditing coordination outcomes against verifiable records rather than reconciling separate operator archives.", assetTypes: ["Filing Registries", "Dispute Cases", "Resolution Records"] },
      { icon: Scale, title: "Legal & Regulatory Advisors", description: "Build a dispute case on a tamper-proof evidence chain assembled as events happened, giving coordination arguments an auditable factual basis every party already accepts.", assetTypes: ["Evidence Chains", "Case Files", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy filing and coordination database or capturing interference measurements from monitoring systems, Cerulea routes both into one shared coordination record.",
    tracks: [
      {
        title: "Track A: Enterprise Filing System Bridging",
        description:
          "For operators on legacy coordination and filing databases. Existing filings are translated into signed on-chain claims with sealed priority through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Coordination Database", sublabel: "Operator Filing Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Filing Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Spectrum Coordination Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Interference Monitoring Capture",
        description:
          "For operators streaming from spectrum monitoring. Each interference measurement is signed at the monitoring node and routed straight to the evidence chain for a dispute case.",
        connectorLabels: ["MONITOR SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Spectrum Monitor", sublabel: "Interference Measurements", icon: Radio, accent: false },
          { label: "Coordination Validators", sublabel: "Evidence Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Dispute Record", icon: Wifi, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a satellite spectrum coordination chain with an immutable filing registry, sealed priority dates, an interference evidence chain, and ITU-auditable resolution from scratch requires specialised engineers and long multi-party coordination cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Filing & Dispute Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects ITU coordination integration benchmarks. Building an immutable filing registry, encoding priority and conflict logic, and standing up an auditable interference evidence chain for an average coordination network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your filing and dispute rules into pre-audited WebAssembly binaries and provisions the shared coordination ledger and evidence layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "satellite-broadband-service-level-agreement-compliance-tracking",
    icon: Activity,
    eyebrow: "SLA Assurance Layer",
    headline1: "Measure the SLA.",
    headline2: "Credit the shortfall automatically.",
    heroDescription:
      "Build a verified record of satellite broadband performance against every SLA commitment, with credits applied automatically for any shortfall. The External Data Oracles, Compliance Attestations, and Audit Logs modules check anchored uptime and speed data against the contract terms and calculate what each customer is owed.",
    heroCta: "Deploy SLA Assurance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace a manual quarterly SLA review with anchored performance data that credits customers the moment a term is breached.",
    mechanics: [
      { title: "Oracle Performance Feeds", description: "Anchor uptime and speed at source. The External Data Oracles module streams verified performance readings from ground stations and terminals, so SLA measurement rests on tamper-evident data rather than a self-reported figure." },
      { title: "Encoded SLA Terms", description: "Put the commitment on-chain. Minimum uptime, throughput, and latency targets for each enterprise or government contract are encoded once, giving the system a precise definition of compliance." },
      { title: "Continuous Compliance Check", description: "Measure against the contract nonstop. The contract evaluates anchored performance against the encoded terms in real time, flagging any period that falls below the committed level." },
      { title: "Automatic Credit Calculation", description: "Compute what is owed. When performance falls short, the contract calculates the contractually-owed credit for the affected period automatically, removing the manual claims process." },
      { title: "Compliance Attestations", description: "Certify the result. The Compliance Attestations module seals each period's compliance status, giving enterprise and government customers a verifiable attestation for their own reporting." },
      { title: "Audit-Ready History", description: "Prove performance later. The Audit Logs module retains every reading, evaluation, and credit, so an SLA dispute or a regulator query resolves against a tamper-evident record." },
    ],
    lifecycleTitle: "The Assurance Lifecycle",
    lifecycleSubtitle:
      "Follow one SLA period from oracle readings through a detected shortfall to an automatic customer credit.",
    lifecycleSteps: [
      {
        label: "Performance Ingestion",
        description:
          "The External Data Oracles module streams verified uptime and speed readings from ground stations and customer terminals, anchoring each to the service contract.",
        icon: Activity,
        logFilename: "cerulea_sla.log",
        logLines: [
          { text: "[SYS] Ingesting performance feed for CONTRACT_GOV_18...", time: "12:00:00", tone: "default" },
          { text: "[CMD] anchorReading { uptime: 99.1, mbps: 84 }", time: "12:00:01", tone: "primary" },
          { text: "[AUTH] Verifying oracle signature and terminal id...", time: "12:00:01", tone: "secondary" },
          { text: "[OK] Reading anchored to contract window.", time: "12:00:02", tone: "success" },
        ],
      },
      {
        label: "Compliance Check",
        description:
          "The contract evaluates the anchored readings against the encoded SLA terms, detecting a period where uptime fell below the committed minimum.",
        icon: Scale,
        logFilename: "cerulea_sla.log",
        logLines: [
          { text: "[SYS] Evaluating window against SLA terms...", time: "12:00:03", tone: "default" },
          { text: "[CMD] checkCompliance(CONTRACT_GOV_18, target: 99.5)", time: "12:00:03", tone: "primary" },
          { text: "[AUTH] Uptime 99.1 below committed 99.5, breach...", time: "12:00:04", tone: "error" },
          { text: "[OK] Shortfall period flagged for crediting.", time: "12:00:04", tone: "success" },
        ],
      },
      {
        label: "Credit Calculation",
        description:
          "The contract calculates the credit owed for the shortfall period against the contract's remedy schedule and posts it to the customer account automatically.",
        icon: Wallet,
        logFilename: "cerulea_sla.log",
        logLines: [
          { text: "[SYS] Computing credit for shortfall period...", time: "12:00:05", tone: "default" },
          { text: "[CMD] calcCredit(CONTRACT_GOV_18, breachPct: 0.4)", time: "12:00:05", tone: "primary" },
          { text: "[SYS] Applying remedy schedule to affected window...", time: "12:00:05", tone: "default" },
          { text: "[OK] Credit 2140 posted to customer account.", time: "12:00:06", tone: "success" },
        ],
      },
      {
        label: "Attestation Seal",
        description:
          "The Compliance Attestations module seals the period's status and the applied credit, and the Audit Logs module retains the full trail for the customer's own reporting.",
        icon: FileCheck,
        logFilename: "cerulea_sla.log",
        logLines: [
          { text: "[SYS] Sealing compliance attestation for window...", time: "12:00:07", tone: "default" },
          { text: "[CMD] attestPeriod(CONTRACT_GOV_18, status: \"CREDITED\")", time: "12:00:07", tone: "primary" },
          { text: "[SYS] Binding readings, breach, and credit to seal...", time: "12:00:08", tone: "default" },
          { text: "[OK] Attestation sealed, customer-verifiable.", time: "12:00:08", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes SLA assurance into contracts for oracle ingestion, encoded terms and compliance checking, automatic crediting, and attestation, so performance shortfalls are credited without a manual claim.",
    layers: [
      {
        title: "Oracle Feed",
        subtitle: "The Verified Reading",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Reading",
          description:
            "Anchors signed uptime and speed readings from ground stations and terminals via the External Data Oracles module. It makes SLA measurement rest on tamper-evident data rather than a self-reported number.",
          platformFunction: "Performance Ingestion",
        },
        codeSnippet:
          "contract OracleFeed {\n  struct Reading {\n    bytes32 contractId;\n    uint16 uptimeBps;\n    uint16 mbps;\n    uint256 at;\n  }\n\n  mapping(bytes32 => Reading[]) public readings;\n\n  function anchorReading(bytes32 contractId, uint16 uptimeBps, uint16 mbps) external onlyOracle {\n    readings[contractId].push(Reading(contractId, uptimeBps, mbps, block.timestamp));\n  }\n}",
        simAction: "Simulate Performance Ingestion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Streaming reading from ground station...", tone: "default" },
          { text: "Verifying oracle signature...", tone: "default" },
          { text: "Confirming terminal identity...", tone: "default" },
          { text: "Anchoring reading to contract window...", tone: "default" },
          { text: "[SUCCESS] Verified performance reading anchored.", tone: "success" },
        ],
      },
      {
        title: "Compliance Engine",
        subtitle: "The Term Check",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Term Check",
          description:
            "Evaluates anchored readings against the encoded SLA terms in real time and flags any period below the committed level. It turns a quarterly manual review into a continuous, automatic compliance measurement.",
          platformFunction: "Compliance Evaluation",
        },
        codeSnippet:
          "function checkCompliance(bytes32 contractId, uint16 targetUptime) external view returns (bool breach, uint16 gap) {\n    uint16 measured = windowUptime(contractId);\n    if (measured < targetUptime) return (true, targetUptime - measured);\n    return (false, 0);\n}",
        simAction: "Simulate Compliance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading encoded SLA terms...", tone: "default" },
          { text: "Aggregating window uptime...", tone: "default" },
          { text: "Comparing measured against target...", tone: "default" },
          { text: "Flagging shortfall period...", tone: "default" },
          { text: "[SUCCESS] Breach detected against committed level.", tone: "success" },
        ],
      },
      {
        title: "Credit Engine",
        subtitle: "The Automatic Remedy",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Remedy",
          description:
            "Calculates the credit owed for a shortfall against the contract's remedy schedule and posts it to the customer account. It removes the manual claims process that normally governs SLA credits.",
          platformFunction: "Credit Calculation",
        },
        codeSnippet:
          "function calcCredit(bytes32 contractId, uint16 gap) external onlyEngine returns (uint256 credit) {\n    credit = remedy[contractId].rate * gap;\n    account[contractId].balance += credit;\n    emit CreditPosted(contractId, credit);\n}",
        simAction: "Simulate Credit Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading shortfall gap for period...", tone: "default" },
          { text: "Applying remedy schedule rate...", tone: "default" },
          { text: "Computing credit owed...", tone: "default" },
          { text: "Posting credit to customer account...", tone: "default" },
          { text: "[SUCCESS] Credit applied automatically.", tone: "success" },
        ],
      },
      {
        title: "Attestation Vault",
        subtitle: "The Certified Period",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Certified Period",
          description:
            "Seals each period's compliance status and applied credit and retains every reading behind it. It gives enterprise and government customers a verifiable attestation for their own reporting and any dispute.",
          platformFunction: "Attestation & Audit",
        },
        codeSnippet:
          "function attestPeriod(bytes32 contractId, bytes32 status) external onlyEngine {\n    attestations[contractId].push(Attestation(status, snapshotHash(contractId), block.timestamp));\n    emit PeriodAttested(contractId, status);\n}",
        simAction: "Simulate Attestation Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Snapshotting period readings...", tone: "default" },
          { text: "Binding breach and credit to status...", tone: "default" },
          { text: "Sealing compliance attestation...", tone: "default" },
          { text: "Publishing customer-verifiable record...", tone: "default" },
          { text: "[SUCCESS] Period attested and auditable.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anchored SLA assurance is a horizontal capability. Here is how different parties around a satellite broadband contract put the verified record to work.",
    sectors: [
      { icon: Plane, title: "Satellite Broadband Providers", description: "Measure every contract against its SLA from anchored performance data and apply credits automatically, replacing a manual quarterly review with a continuous, defensible assurance process.", assetTypes: ["Service Contracts", "Performance Feeds", "Applied Credits"] },
      { icon: Building2, title: "Enterprise & Government Customers", description: "Hold a verifiable attestation of uptime and speed for every period, receiving contractually-owed credits without filing a claim and reporting service quality from tamper-evident records.", assetTypes: ["SLA Terms", "Compliance Attestations", "Credit Statements"] },
      { icon: Scale, title: "Commercial & Audit Teams", description: "Resolve any SLA dispute from the exact readings and remedy calculation used, turning a contested performance claim into a lookup against an anchored, auditable trail.", assetTypes: ["Assurance Records", "Breach Evidence", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy service assurance platform or streaming telemetry from ground stations and terminals, Cerulea routes both into one verified SLA record.",
    tracks: [
      {
        title: "Track A: Enterprise Assurance Bridging",
        description:
          "For providers on legacy service assurance stacks. Performance metrics and SLA definitions are translated into signed on-chain readings and terms through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Service Assurance Platform", sublabel: "Provider Monitoring Stack", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "SLA Assurance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Ground Station Telemetry Capture",
        description:
          "For providers streaming from ground stations and terminals. Each performance reading is signed at the oracle node and routed straight to the chain for continuous compliance checking.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Ground Station / Terminal", sublabel: "Live Performance Telemetry", icon: Activity, accent: false },
          { label: "Assurance Validators", sublabel: "Compliance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified SLA Record", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a satellite broadband SLA assurance system with oracle performance feeds, encoded terms, continuous compliance checking, automatic crediting, and attestation from scratch requires specialised engineers and long assurance integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required SLA & Remedy Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects service assurance integration benchmarks. Wiring oracle performance feeds, encoding SLA terms and remedy schedules, and building automatic crediting and attestation for an average contract base takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your SLA and remedy rules into pre-audited WebAssembly binaries and provisions the shared assurance ledger and attestation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cross-operator-satellite-capacity-leasing-marketplace",
    icon: Handshake,
    eyebrow: "Capacity Marketplace Layer",
    headline1: "Lease spare capacity.",
    headline2: "Settle it automatically.",
    heroDescription:
      "Build a marketplace where satellite operators lease spare transponder capacity to each other, with usage verified and settlement automated. Cerulea Studio assembles it from the Escrow and Conditional Settlement, Provenance Notary, and Audit Logs modules, so verified usage data drives automatic settlement between the leasing parties.",
    heroCta: "Deploy Capacity Marketplace",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow bilateral capacity negotiation into a shared marketplace where verified usage settles itself.",
    mechanics: [
      { title: "Spare Capacity Listings", description: "Publish availability once. An operator lists idle transponder capacity with its band, beam, and window on the shared marketplace, replacing a round of private calls with a single visible offer." },
      { title: "Verified Usage Metering", description: "Bill only what was used. The Provenance Notary anchors verified usage of the leased capacity, so settlement rests on metered consumption rather than an estimated block booking." },
      { title: "Conditional Escrow Settlement", description: "Pay on proven usage. The Escrow and Conditional Settlement module holds the lease payment and releases it against anchored usage, so both parties settle without a manual reconciliation." },
      { title: "Short-Term Lease Terms", description: "Encode the deal quickly. Rate, duration, and capacity limits are captured on-chain when a lease is struck, letting operators close short-term arrangements in minutes instead of a bilateral cycle." },
      { title: "Dispute-Free Reconciliation", description: "Remove the after-the-fact argument. Because both operators settle against the same anchored usage, a leased window reconciles cleanly with no contested volumes." },
      { title: "Audit-Ready Records", description: "Keep the marketplace accountable. The Audit Logs module retains every listing, lease, and settlement, so any transaction can be reviewed against a tamper-evident trail." },
    ],
    lifecycleTitle: "The Marketplace Lifecycle",
    lifecycleSubtitle:
      "Follow spare capacity from a listing through a struck lease and verified usage to automatic settlement.",
    lifecycleSteps: [
      {
        label: "Capacity Listing",
        description:
          "An operator with spare transponder capacity lists it on the marketplace. The contract anchors the band, beam, window, and rate as an open offer.",
        icon: Boxes,
        logFilename: "cerulea_capacity.log",
        logLines: [
          { text: "[SYS] Listing spare capacity on marketplace...", time: "10:12:33", tone: "default" },
          { text: "[CMD] listCapacity { band: \"KA\", beam: \"B12\", mhz: 72 }", time: "10:12:33", tone: "primary" },
          { text: "[AUTH] Verifying available window and lessor identity...", time: "10:12:34", tone: "secondary" },
          { text: "[OK] Listing LIST_3390 published to marketplace.", time: "10:12:34", tone: "success" },
        ],
      },
      {
        label: "Lease Agreement",
        description:
          "An operator facing a capacity shortfall takes the listing. The contract encodes the rate, duration, and capacity limit and locks the lease payment into escrow.",
        icon: Handshake,
        logFilename: "cerulea_capacity.log",
        logLines: [
          { text: "[SYS] Matching lessee to listing LIST_3390...", time: "10:20:19", tone: "default" },
          { text: "[CMD] strikeLease(LIST_3390, hours: 48, rate: 900)", time: "10:20:19", tone: "primary" },
          { text: "[SYS] Locking lease payment into conditional escrow...", time: "10:20:20", tone: "default" },
          { text: "[OK] Lease LEASE_7714 struck, escrow funded.", time: "10:20:20", tone: "success" },
        ],
      },
      {
        label: "Usage Metering",
        description:
          "The lessee consumes the leased capacity over the window. The Provenance Notary anchors verified usage as the settlement basis for the arrangement.",
        icon: Activity,
        logFilename: "cerulea_capacity.log",
        logLines: [
          { text: "[SYS] Anchoring verified usage for LEASE_7714...", time: "22:41:07", tone: "default" },
          { text: "[CMD] anchorUsage(LEASE_7714, mhzHours: 3456)", time: "22:41:07", tone: "primary" },
          { text: "[AUTH] Confirming metered draw against lease limit...", time: "22:41:08", tone: "secondary" },
          { text: "[OK] Usage anchored, within capacity limit.", time: "22:41:08", tone: "success" },
        ],
      },
      {
        label: "Automatic Settlement",
        description:
          "At lease close the Escrow and Conditional Settlement module releases payment against the anchored usage, and the Audit Logs module seals the completed transaction.",
        icon: Wallet,
        logFilename: "cerulea_capacity.log",
        logLines: [
          { text: "[SYS] Closing lease LEASE_7714 for settlement...", time: "10:20:25", tone: "default" },
          { text: "[CMD] settleLease(LEASE_7714, usageBasis: 3456)", time: "10:20:25", tone: "primary" },
          { text: "[AUTH] Releasing escrow against verified usage...", time: "10:20:26", tone: "secondary" },
          { text: "[OK] Lease settled automatically. No dispute.", time: "10:20:26", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the capacity marketplace into contracts for listings, lease agreements, verified usage metering, and automatic settlement, so short-term leases close fast and settle on proven consumption.",
    layers: [
      {
        title: "Listing Registry",
        subtitle: "The Open Offer",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Open Offer",
          description:
            "Publishes spare transponder capacity with its band, beam, window, and rate on the shared marketplace. It replaces a round of private bilateral calls with a single offer every operator can see and take.",
          platformFunction: "Capacity Listing",
        },
        codeSnippet:
          "contract ListingRegistry {\n  struct Listing {\n    address lessor;\n    bytes32 band;\n    bytes32 beam;\n    uint256 mhz;\n    uint256 rate;\n  }\n\n  mapping(bytes32 => Listing) public listings;\n\n  function listCapacity(bytes32 id, bytes32 band, bytes32 beam, uint256 mhz, uint256 rate) external {\n    listings[id] = Listing(msg.sender, band, beam, mhz, rate);\n    emit Listed(id, band, mhz);\n  }\n}",
        simAction: "Simulate Capacity Listing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Operator posts idle transponder capacity...", tone: "default" },
          { text: "Recording band, beam, and window...", tone: "default" },
          { text: "Verifying lessor availability...", tone: "default" },
          { text: "Publishing offer to marketplace...", tone: "default" },
          { text: "[SUCCESS] Spare capacity listed.", tone: "success" },
        ],
      },
      {
        title: "Lease Contract",
        subtitle: "The Struck Deal",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Struck Deal",
          description:
            "Encodes rate, duration, and capacity limit when a lessee takes a listing and funds a conditional escrow. It lets operators close a short-term lease in minutes instead of a slow bilateral negotiation.",
          platformFunction: "Lease Agreement",
        },
        codeSnippet:
          "function strikeLease(bytes32 listing, uint32 hoursDur, uint256 rate) external returns (bytes32 lease) {\n    Listing storage l = listings[listing];\n    lease = keccak256(abi.encode(listing, msg.sender, block.timestamp));\n    leases[lease] = Lease(l.lessor, msg.sender, hoursDur, rate, false);\n    escrow.lock(lease, rate * hoursDur);\n}",
        simAction: "Simulate Lease Agreement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Lessee takes marketplace listing...", tone: "default" },
          { text: "Encoding rate, duration, and limit...", tone: "default" },
          { text: "Locking lease payment into escrow...", tone: "default" },
          { text: "Registering struck lease...", tone: "default" },
          { text: "[SUCCESS] Lease struck, escrow funded.", tone: "success" },
        ],
      },
      {
        title: "Usage Notary",
        subtitle: "The Metered Draw",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Metered Draw",
          description:
            "Anchors verified usage of the leased capacity via the Provenance Notary and checks it against the lease limit. It makes settlement rest on metered consumption rather than an estimated block booking.",
          platformFunction: "Usage Verification",
        },
        codeSnippet:
          "function anchorUsage(bytes32 lease, uint256 mhzHours) external onlyNotary {\n    require(mhzHours <= leases[lease].limit, \"Over capacity\");\n    usage[lease] += mhzHours;\n    emit UsageAnchored(lease, mhzHours);\n}",
        simAction: "Simulate Usage Metering",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Lessee consumes leased capacity...", tone: "default" },
          { text: "Metering draw over the window...", tone: "default" },
          { text: "Checking usage against lease limit...", tone: "default" },
          { text: "Anchoring verified usage...", tone: "default" },
          { text: "[SUCCESS] Usage anchored as settlement basis.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Automatic Close",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Close",
          description:
            "Releases the escrowed payment against anchored usage at lease close and seals the transaction. It settles a leased window cleanly on proven consumption, with no manual reconciliation or contested volumes.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function settleLease(bytes32 lease) external onlyClose {\n    Lease storage l = leases[lease];\n    require(!l.settled, \"Already settled\");\n    l.settled = true;\n    escrow.release(l.lessor, l.rate * usage[lease] / l.limit);\n    emit LeaseSettled(lease, usage[lease]);\n}",
        simAction: "Simulate Automatic Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Closing lease for settlement...", tone: "default" },
          { text: "Reading anchored usage basis...", tone: "default" },
          { text: "Computing payment on proven usage...", tone: "default" },
          { text: "Releasing escrow to lessor...", tone: "default" },
          { text: "[SUCCESS] Lease settled automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "An anchored capacity marketplace is a horizontal capability. Here is how different satellite players put the shared marketplace to work.",
    sectors: [
      { icon: Boxes, title: "Capacity Lessors", description: "List idle transponder capacity as a visible offer and settle on verified usage, turning spare inventory that once sat unused into short-term revenue closed in minutes.", assetTypes: ["Capacity Listings", "Lease Offers", "Usage Records"] },
      { icon: Plane, title: "Capacity Lessees", description: "Cover a temporary shortfall by taking a listing and paying only for metered consumption, replacing a slow bilateral negotiation with an instant, escrow-backed lease.", assetTypes: ["Short-Term Leases", "Metered Draw", "Settlement Statements"] },
      { icon: Scale, title: "Commercial & Audit Teams", description: "Review any listing, lease, and settlement against a tamper-evident trail, giving marketplace transactions an accountable record without a manual reconciliation.", assetTypes: ["Marketplace Records", "Lease History", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy capacity management system or streaming usage from network management, Cerulea routes both into one shared marketplace record.",
    tracks: [
      {
        title: "Track A: Enterprise Capacity System Bridging",
        description:
          "For operators on legacy capacity and inventory systems. Available capacity and lease terms are translated into signed on-chain listings and leases through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Capacity Management System", sublabel: "Operator Inventory Stack", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Listing Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Capacity Marketplace Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Network Management Usage Capture",
        description:
          "For operators streaming from network management. Each usage reading is signed at the management node and routed straight to the chain to settle a lease on proven consumption.",
        connectorLabels: ["NODE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Network Management", sublabel: "Transponder Usage Metering", icon: Activity, accent: false },
          { label: "Marketplace Validators", sublabel: "Settlement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Marketplace Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-operator satellite capacity marketplace with spare capacity listings, short-term lease terms, verified usage metering, and automatic escrow settlement from scratch requires specialised engineers and long multi-operator integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Marketplace & Settlement Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects capacity trading integration benchmarks. Building a shared listing marketplace, encoding lease and usage logic, and wiring escrow settlement across operators for an average trading network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your marketplace and settlement rules into pre-audited WebAssembly binaries and provisions the shared marketplace ledger and escrow layer instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const telecommunicationsItems: ExtraCaseItem[] = [
  {
    label: "Roaming agreement settlement between telecom operators",
    href: "/solutions/use-case/roaming-agreement-settlement-between-telecom-operators",
    description: "Net settlement in hours from anchored CDRs.",
    icon: Globe,
    category: "ENTERPRISE",
    tags: ["Roaming", "Settlement"],
    industry: INDUSTRY,
  },
  {
    label: "Fraud detection and revenue assurance via shared network event data",
    href: "/solutions/use-case/fraud-detection-and-revenue-assurance-via-shared-network-event-data",
    description: "Catch SIM-box fraud without exposing traffic.",
    icon: Shield,
    category: "ENTERPRISE",
    tags: ["Fraud", "Revenue Assurance"],
    industry: INDUSTRY,
  },
  {
    label: "Number portability request processing across operators",
    href: "/solutions/use-case/number-portability-request-processing-across-operators",
    description: "One shared status for every port.",
    icon: Workflow,
    category: "GOVERNMENT",
    tags: ["Portability", "Coordination"],
    industry: INDUSTRY,
  },
  {
    label: "Tower infrastructure sharing cost allocation among operators",
    href: "/solutions/use-case/tower-infrastructure-sharing-cost-allocation-among-operators",
    description: "Fair tower cost split from verified footprint.",
    icon: PieChart,
    category: "ENTERPRISE",
    tags: ["Infrastructure", "Billing"],
    industry: INDUSTRY,
  },
  {
    label: "Tower rental payment reconciliation with landowners",
    href: "/solutions/use-case/tower-rental-payment-reconciliation-with-landowners",
    description: "Right landowner paid correctly and on time.",
    icon: Home,
    category: "SME",
    tags: ["Leasing", "Payments"],
    industry: INDUSTRY,
  },
  {
    label: "Emergency alert broadcast delivery confirmation across operators",
    href: "/solutions/use-case/emergency-alert-broadcast-delivery-confirmation-across-operators",
    description: "Verified proof every operator broadcast the alert.",
    icon: Radio,
    category: "GOVERNMENT",
    tags: ["Public Safety", "Alerting"],
    industry: INDUSTRY,
  },
  {
    label: "Satellite spectrum rights management and interference dispute resolution",
    href: "/solutions/use-case/satellite-spectrum-rights-management-and-interference-dispute-resoluti",
    description: "Immutable filings resolve interference in days.",
    icon: Wifi,
    category: "GOVERNMENT",
    tags: ["Spectrum", "Disputes"],
    industry: INDUSTRY,
  },
  {
    label: "Satellite broadband service level agreement compliance tracking",
    href: "/solutions/use-case/satellite-broadband-service-level-agreement-compliance-tracking",
    description: "Automatic credits for every SLA shortfall.",
    icon: Activity,
    category: "ENTERPRISE",
    tags: ["Satellite", "SLA"],
    industry: INDUSTRY,
  },
  {
    label: "Cross-operator satellite capacity leasing marketplace",
    href: "/solutions/use-case/cross-operator-satellite-capacity-leasing-marketplace",
    description: "Lease spare capacity, settle on verified usage.",
    icon: Handshake,
    category: "DAPPS",
    tags: ["Satellite", "Marketplace"],
    industry: INDUSTRY,
  },
]
