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

const INDUSTRY = "Mining & Heavy Industry"

export const miningHeavyIndustryCases: CaseEntry[] = [
  {
    slug: "chain-of-custody-for-coal-shipments-across-ports-traders-utilities",
    icon: Truck,
    eyebrow: "Coal Settlement Layer",
    headline1: "Prove every tonne.",
    headline2: "Settle on real grade.",
    heroDescription:
      "Bind coal quality to payment on one shared network spanning miners, traders, ports, and utilities. Grade substitution becomes mathematically detectable and penalties execute from escrow the moment a calorific shortfall is proven, without arbitration.",
    heroCta: "Deploy Coal Custody Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn contested paper assays and delivery disputes into a single, quality-linked settlement record.",
    mechanics: [
      { title: "Shared Custody Ledger", description: "Replace conflicting bills of lading. Miner, trader, port, and utility write each custody transfer to one Traceability Ledger, so a single record of tonnage and grade follows the cargo from pithead to boiler." },
      { title: "Quality-Linked Escrow", description: "Bind payment to assay. Escrow and conditional settlement release funds only against the delivered calorific value, so a lower grade than contracted triggers an automatic penalty rather than a negotiation." },
      { title: "Grade Substitution Guard", description: "Make swapping stock detectable. Declared origin, grade, and mass are reconciled at each hop, so diluting a premium consignment with inferior coal breaks the record and is flagged before settlement." },
      { title: "Trade Finance Anchoring", description: "Seal the paperwork. The Trade Finance Documents module anchors letters of credit and invoices by digest, so financing banks release against verified custody instead of manually inspected scans." },
      { title: "Port & Customs Events", description: "Capture the terminal. Gate-in, weighbridge, and customs clearance land on-chain as Port and Customs Events, giving every counterparty a live view of where a cargo sits and what it weighed." },
      { title: "Evidence-Based Disputes", description: "Settle from proof. When a utility contests quality, the ledger surfaces the co-signed assay and custody chain, so a dispute resolves against signed data in hours instead of weeks of correspondence." },
    ],
    lifecycleTitle: "The Coal Custody Lifecycle",
    lifecycleSubtitle:
      "Follow a single coal consignment from mine dispatch through the port to a utility that settles on verified calorific value.",
    lifecycleSteps: [
      {
        label: "Cargo Dispatch",
        description:
          "The miner registers a consignment at dispatch. The contract anchors the declared grade, calorific value, and gross tonnage as the immutable origin of the custody chain.",
        icon: Pickaxe,
        logFilename: "cerulea_coalchain.log",
        logLines: [
          { text: "[SYS] Initializing Consignment Manifest...", time: "05:41:12", tone: "default" },
          { text: "[CMD] dispatchCargo { mine: \"IB_VALLEY_07\", gcv: 5800, tonnes: 6500 }", time: "05:41:12", tone: "primary" },
          { text: "[AUTH] Verifying dispatch credential and rake seal...", time: "05:41:13", tone: "secondary" },
          { text: "[OK] Consignment CGO_50218 anchored at block 7710455.", time: "05:41:13", tone: "success" },
        ],
      },
      {
        label: "Port Handoff",
        description:
          "The cargo reaches the trader and the loading port. Weighbridge mass and customs clearance are co-signed as Port and Customs Events before the consignment advances.",
        icon: Truck,
        logFilename: "cerulea_coalchain.log",
        logLines: [
          { text: "[SYS] Handoff pending at Mundra terminal...", time: "11:18:44", tone: "default" },
          { text: "[CMD] acceptCustody(CGO_50218, weighed: 6472, seal: \"OK\")", time: "11:18:49", tone: "primary" },
          { text: "[SYS] Customs event and weighbridge reading co-signed.", time: "11:18:50", tone: "default" },
          { text: "[OK] Custody transferred. Chain length now 3 hops.", time: "11:18:50", tone: "success" },
        ],
      },
      {
        label: "Assay Verification",
        description:
          "An accredited lab submits the delivered calorific value. The oracle binds the assay to the consignment, exposing any shortfall against the contracted grade.",
        icon: FlaskConical,
        logFilename: "cerulea_coalchain.log",
        logLines: [
          { text: "[SYS] Ingesting independent assay for CGO_50218...", time: "16:07:30", tone: "default" },
          { text: "[CMD] submitAssay(gcv: 5510, moisture: 12.4)", time: "16:07:30", tone: "primary" },
          { text: "[AUTH] Reconciling delivered GCV against 5800 contract...", time: "16:07:31", tone: "secondary" },
          { text: "[OK] Shortfall of 290 kcal recorded. Penalty armed.", time: "16:07:31", tone: "error" },
        ],
      },
      {
        label: "Conditional Settlement",
        description:
          "The utility accepts delivery. Escrow releases the adjusted amount, deducting the calorific penalty automatically and closing the trade the same day without arbitration.",
        icon: Wallet,
        logFilename: "cerulea_coalchain.log",
        logLines: [
          { text: "[SYS] Settlement request from Utility_0x77...", time: "17:52:03", tone: "default" },
          { text: "[CMD] settle(CGO_50218, penaltyBps: 500)", time: "17:52:03", tone: "primary" },
          { text: "[SYS] Deducting shortfall penalty from escrow balance...", time: "17:52:04", tone: "default" },
          { text: "[OK] Trade settled same day. No arbitration filed.", time: "17:52:04", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes coal settlement into modular contracts. Each layer registers, transfers, assays, and settles a consignment so that quality and payment stay bound without any single trader controlling the record.",
    layers: [
      {
        title: "Consignment Registry",
        subtitle: "The Cargo Passport",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cargo Passport",
          description:
            "The foundational data layer. It mints a unique consignment identity at dispatch and stores the immutable link to mine of origin, declared grade, calorific value, and gross tonnage that every later record points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ConsignmentRegistry {\n  struct Cargo {\n    address miner;\n    bytes32 mineId;\n    uint256 declaredGcv;\n    uint256 tonnes;\n    bool settled;\n  }\n\n  mapping(bytes32 => Cargo) public cargos;\n\n  function dispatch(bytes32 id, bytes32 mineId, uint256 gcv, uint256 tonnes) external {\n    cargos[id] = Cargo(msg.sender, mineId, gcv, tonnes, false);\n  }\n}",
        simAction: "Simulate Cargo Dispatch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading dispatch credential for IB_VALLEY_07...", tone: "default" },
          { text: "Hashing rake seal and mine identity...", tone: "default" },
          { text: "Locking declared GCV 5800 kcal...", tone: "default" },
          { text: "Writing consignment identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Consignment CGO_50218 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Custody Handoff",
        subtitle: "The Two-Party Transfer",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Party Transfer",
          description:
            "Prevents silent grade substitution. A consignment cannot advance until the receiver co-signs the weighed mass and seal, turning every port and customs event into a mutual agreement recorded on-chain.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function acceptCustody(bytes32 id, uint256 weighed, bytes32 seal) external {\n    Handoff storage h = pending[id];\n    require(h.receiver == msg.sender, \"Not receiver\");\n    require(!h.settled, \"Already settled\");\n    h.settled = true;\n    custody[id] = msg.sender;\n    emit CustodyAccepted(id, msg.sender, weighed, seal);\n}",
        simAction: "Simulate Port Handoff",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Terminal reviewing upstream declaration...", tone: "default" },
          { text: "Comparing weighed 6472t against 6500t dispatch...", tone: "default" },
          { text: "Recording customs event and co-signature...", tone: "default" },
          { text: "Advancing custody to loading port...", tone: "default" },
          { text: "[SUCCESS] Custody transferred with mutual proof.", tone: "success" },
        ],
      },
      {
        title: "Assay Oracle",
        subtitle: "The Quality Hook",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Quality Hook",
          description:
            "Bypasses contested lab reports. This module ingests the accredited assay through External Data Oracles and reconciles delivered calorific value against the contract, arming a penalty at the protocol level when coal falls short of grade.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract AssayOracle {\n  function submitAssay(bytes32 id, uint256 gcv, bytes memory sig) external {\n    require(verifyLab(sig), \"Unaccredited lab\");\n    uint256 target = cargos[id].declaredGcv;\n    if (gcv < target) penalty[id] = (target - gcv);\n    emit AssayRecorded(id, gcv, penalty[id]);\n  }\n}",
        simAction: "Simulate Assay Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Querying accredited laboratory feed...", tone: "default" },
          { text: "Extracting delivered GCV 5510 kcal...", tone: "default" },
          { text: "Reconciling against 5800 kcal contract...", tone: "default" },
          { text: "[FLAG] Shortfall detected, penalty armed.", tone: "error" },
          { text: "[SUCCESS] Assay anchored, settlement adjusted.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The Conditional Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Payout",
          description:
            "Eliminates settlement disputes. This contract releases escrow against the verified assay, deducting the calorific penalty in the same transaction so the utility pays exactly for the quality delivered and the trade closes same day.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(bytes32 id, uint256 penaltyBps) external {\n    require(!cargos[id].settled, \"Already settled\");\n    uint256 gross = escrow[id];\n    uint256 net = gross - (gross * penaltyBps / 10000);\n    cargos[id].settled = true;\n    payable(seller[id]).transfer(net);\n    emit Settled(id, net, penaltyBps);\n}",
        simAction: "Simulate Conditional Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Utility confirming delivery of CGO_50218...", tone: "default" },
          { text: "Loading escrow balance and armed penalty...", tone: "default" },
          { text: "Deducting 5 percent calorific shortfall...", tone: "default" },
          { text: "Releasing net proceeds to trader wallet...", tone: "default" },
          { text: "[SUCCESS] Trade settled same day, no arbitration.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Quality-linked custody is a horizontal capability across bulk commodities. Here is how different actors in the coal chain put the shared ledger to work.",
    sectors: [
      { icon: Zap, title: "Power Utilities", description: "Settle fuel purchases on the calorific value actually delivered, deducting shortfall penalties from escrow automatically and cutting station heat-rate losses caused by undetected grade substitution.", assetTypes: ["Fuel Supply Contracts", "Calorific Penalties", "Escrow Settlements"] },
      { icon: Truck, title: "Traders & Terminals", description: "Move consignments through ports with a co-signed custody trail, so financing banks release against verified tonnage and quality instead of manually inspected documents.", assetTypes: ["Coal Consignments", "Weighbridge Records", "Customs Events"] },
      { icon: Landmark, title: "Regulators & Financiers", description: "Read the consortium ledger to audit declared versus delivered grade across the corridor, replacing sample-based inspection with a live on-chain query over every shipment.", assetTypes: ["Assay Registries", "Trade Finance Docs", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a utility's legacy fuel-management ERP or capturing weighbridge and assay data at the terminal, Cerulea routes both into one shared settlement record.",
    tracks: [
      {
        title: "Track A: Enterprise Fuel-Chain Bridging",
        description:
          "For utilities and large traders on legacy ERP. Existing dispatch and receipt events are translated into signed on-chain consignment transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Fuel ERP", sublabel: "Utility & Trader Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Custody Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Terminal & Lab Capture",
        description:
          "For port operators and accredited labs. Weighbridge readings and assay signatures are routed directly to the ledger from terminal devices through a wallet signature.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Weighbridge / Lab", sublabel: "Terminal Devices", icon: FlaskConical, accent: false },
          { label: "Consortium Validators", sublabel: "Custody Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Consignment Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-party coal custody network with quality-linked escrow, assay oracles, and port event capture from scratch requires specialised engineers and long consortium integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Settlement Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects bulk-commodity settlement integration benchmarks. Wiring together each counterparty's ERP, building custom quality-linked escrow and assay reconciliation logic, and capturing port and customs events for an average corridor takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and settlement rules into pre-audited WebAssembly binaries and provisions the shared consortium ledger and escrow layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "carbon-emission-reporting-across-mining-operations-for-regulatory-comp",
    icon: Recycling,
    eyebrow: "Emissions Attestation Layer",
    headline1: "Report from the source.",
    headline2: "Prove it cannot be edited.",
    heroDescription:
      "Stream operational emission data directly on-chain so regulators and auditors read a tamper-proof, time-stamped record instead of a submitted spreadsheet. Manual filings are replaced with continuous verified access, collapsing an annual audit from weeks to days.",
    heroCta: "Deploy Emission Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace unverifiable spreadsheets with an emission record that flows on-chain and cannot be altered after the fact.",
    mechanics: [
      { title: "On-Chain Emission Feed", description: "Retire the spreadsheet. Operational data from fuel burn, haul fleets, and processing plants flows directly to the ledger through the Carbon Credits MRV and Registry module, so figures are recorded at source rather than transcribed." },
      { title: "Oracle-Signed Readings", description: "Anchor the meter, not the memo. External Data Oracles sign each sensor and metering reading before it lands on-chain, so a reported tonne of CO2e traces back to a verified device output." },
      { title: "Real-Time Regulator Access", description: "Give the regulator a live window. Compliance Attestations expose the running emission record to the authority and auditor continuously, replacing periodic submissions with an always-current view." },
      { title: "Immutable Time-Stamping", description: "Freeze every figure. Each reading is sealed with a block time-stamp, so no value can be quietly revised after a bad quarter and any correction is itself a visible, auditable event." },
      { title: "Automated Audit Trail", description: "Compress the audit. Because every figure is already on-chain, time-stamped, and unmodified, an auditor confirms the dataset in days instead of reconstructing it from disparate plant logs." },
      { title: "Mandate-Ready Reporting", description: "Meet real-time mandates. As regulators move toward continuous reporting, the registry emits compliant, signed disclosures on demand instead of assembling a year-end document." },
    ],
    lifecycleTitle: "The Emission Reporting Lifecycle",
    lifecycleSubtitle:
      "Follow a mining operation's emission data from a metered source through oracle signing to a regulator who accepts the report without further documentation.",
    lifecycleSteps: [
      {
        label: "Source Metering",
        description:
          "Fuel meters and plant sensors capture emission-relevant activity. The reading is packaged at the operation and prepared for oracle signature before it reaches the ledger.",
        icon: Radio,
        logFilename: "cerulea_emissions.log",
        logLines: [
          { text: "[SYS] Polling diesel and grid draw meters...", time: "00:05:00", tone: "default" },
          { text: "[CMD] captureActivity { site: \"PIT_NORTH_02\", scope: \"1+2\" }", time: "00:05:00", tone: "primary" },
          { text: "[AUTH] Reading fleet burn and processing load...", time: "00:05:01", tone: "secondary" },
          { text: "[OK] Activity packet ACT_33110 assembled.", time: "00:05:01", tone: "success" },
        ],
      },
      {
        label: "Oracle Signing",
        description:
          "An External Data Oracle verifies the metering device and signs the reading. Only signed activity is admitted, so unverifiable figures never enter the record.",
        icon: ShieldCheck,
        logFilename: "cerulea_emissions.log",
        logLines: [
          { text: "[SYS] Verifying device attestation for ACT_33110...", time: "00:05:03", tone: "default" },
          { text: "[CMD] signReading(meter: \"MTR_71\", co2e: 214.6)", time: "00:05:03", tone: "primary" },
          { text: "[AUTH] Checking oracle key against device registry...", time: "00:05:03", tone: "secondary" },
          { text: "[OK] Reading signed and admitted to registry.", time: "00:05:04", tone: "success" },
        ],
      },
      {
        label: "On-Chain Anchoring",
        description:
          "The signed emission figure is written to the registry with a block time-stamp. The record becomes immutable and immediately visible to the regulator and auditor.",
        icon: Database,
        logFilename: "cerulea_emissions.log",
        logLines: [
          { text: "[SYS] Anchoring signed reading to registry...", time: "00:05:06", tone: "default" },
          { text: "[CMD] anchorEmission(ACT_33110, ts: 1750000000)", time: "00:05:06", tone: "primary" },
          { text: "[SYS] Sealing value with block time-stamp...", time: "00:05:06", tone: "default" },
          { text: "[OK] Emission anchored at block 8120774. Immutable.", time: "00:05:07", tone: "success" },
        ],
      },
      {
        label: "Audit & Acceptance",
        description:
          "At year end the auditor queries the full on-chain dataset. Every figure is confirmed time-stamped and unmodified, and the regulator accepts the report without requesting extra documents.",
        icon: FileCheck,
        logFilename: "cerulea_emissions.log",
        logLines: [
          { text: "[SYS] Auditor opening annual emission dataset...", time: "09:14:22", tone: "default" },
          { text: "[CMD] verifyDataset(year: 2026, site: \"PIT_NORTH_02\")", time: "09:14:22", tone: "primary" },
          { text: "[SYS] Confirming 8,760 hourly records unmodified...", time: "09:14:23", tone: "default" },
          { text: "[OK] Audit closed in 3 days. Regulator accepted.", time: "09:14:24", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes emission reporting into modular contracts. Each layer meters, signs, anchors, and exposes activity so that a mining operation's carbon record is verified at source and impossible to revise after submission.",
    layers: [
      {
        title: "Activity Registry",
        subtitle: "The Emission Ledger",
        icon: Recycling,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Emission Ledger",
          description:
            "The foundational data layer. It records each unit of emission-relevant activity against its site, scope, and time-stamp, storing an immutable CO2e figure that the auditor and regulator read directly.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ActivityRegistry {\n  struct Reading {\n    bytes32 site;\n    uint8 scope;\n    uint256 co2e;\n    uint256 ts;\n  }\n\n  mapping(bytes32 => Reading) public readings;\n\n  function anchor(bytes32 id, bytes32 site, uint8 scope, uint256 co2e) external onlyOracle {\n    readings[id] = Reading(site, scope, co2e, block.timestamp);\n  }\n}",
        simAction: "Simulate Emission Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling activity packet for PIT_NORTH_02...", tone: "default" },
          { text: "Tagging scope 1 and scope 2 emissions...", tone: "default" },
          { text: "Sealing CO2e figure with block time-stamp...", tone: "default" },
          { text: "Writing reading to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Emission ACT_33110 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Oracle Gate",
        subtitle: "The Device Verifier",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Device Verifier",
          description:
            "Bypasses manual data entry. This module admits a reading only when an External Data Oracle signs it against a registered metering device, preventing manipulated or fabricated figures from ever entering the registry.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract OracleGate {\n  function signReading(bytes32 meter, uint256 co2e, bytes memory sig) external returns (bool) {\n    require(deviceRegistry[meter], \"Unknown device\");\n    require(verifyOracle(sig), \"Bad signature\");\n    emit ReadingAdmitted(meter, co2e, block.timestamp);\n    return true;\n  }\n}",
        simAction: "Simulate Oracle Signing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking device attestation for MTR_71...", tone: "default" },
          { text: "Validating oracle key against registry...", tone: "default" },
          { text: "Confirming reading 214.6 tonnes CO2e...", tone: "default" },
          { text: "Admitting signed activity to ledger...", tone: "default" },
          { text: "[SUCCESS] Reading verified and admitted.", tone: "success" },
        ],
      },
      {
        title: "Regulator Window",
        subtitle: "The Live Attestation",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Attestation",
          description:
            "Replaces periodic filings. This Compliance Attestations contract exposes the running emission record to regulator and auditor keys in real time, so oversight reads a live, always-current view instead of a submitted spreadsheet.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function streamAttestation(bytes32 site, uint256 from, uint256 to) external view onlyRegulator returns (Reading[] memory) {\n    return windowFor(site, from, to);\n}",
        simAction: "Simulate Regulator Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator key opening live attestation...", tone: "default" },
          { text: "Selecting site PIT_NORTH_02 window...", tone: "default" },
          { text: "Streaming signed readings in real time...", tone: "default" },
          { text: "Confirming continuous coverage, no gaps...", tone: "default" },
          { text: "[SUCCESS] Live emission attestation returned.", tone: "success" },
        ],
      },
      {
        title: "Audit Prover",
        subtitle: "The Integrity Check",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Integrity Check",
          description:
            "Compresses the annual audit. This contract lets an auditor verify that every figure in a reporting period is time-stamped and unmodified in a single pass, replacing weeks of manual reconstruction with a direct integrity query.",
          platformFunction: "Anti-Tampering",
        },
        codeSnippet:
          "function verifyDataset(bytes32 site, uint256 year) external view returns (bool intact, uint256 count) {\n    Reading[] memory rs = yearOf(site, year);\n    for (uint256 i = 0; i < rs.length; i++) {\n        if (rs[i].ts == 0) return (false, i);\n    }\n    return (true, rs.length);\n}",
        simAction: "Simulate Annual Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor loading 2026 dataset for site...", tone: "default" },
          { text: "Walking 8,760 hourly readings...", tone: "default" },
          { text: "Confirming every record time-stamped...", tone: "default" },
          { text: "Checking no value revised post-anchor...", tone: "default" },
          { text: "[SUCCESS] Dataset intact, audit closed in 3 days.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Source-verified emission reporting is a horizontal capability. Here is how different actors around a mining operation put the tamper-proof registry to work.",
    sectors: [
      { icon: Factory, title: "Mining & Processing Operators", description: "Replace year-end spreadsheet assembly with a continuous on-chain feed, cutting audit cost and demonstrating compliance against tightening real-time reporting mandates without expensive rework.", assetTypes: ["Emission Readings", "Scope 1 & 2 Records", "Compliance Attestations"] },
      { icon: Landmark, title: "Environmental Regulators", description: "Read a live, always-current emission record for every licensed operation, accepting reports that arrive already verified instead of chasing supporting documents after submission.", assetTypes: ["Live Attestations", "Regulatory Filings", "Real-Time Mandates"] },
      { icon: FileCheck, title: "Auditors & Verifiers", description: "Confirm an entire reporting period is time-stamped and unmodified in a single query, closing an emission audit in days rather than reconstructing figures from plant logs over weeks.", assetTypes: ["Audit Trails", "Integrity Proofs", "Verification Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a mine's legacy environmental data system or signing readings straight from field meters, Cerulea routes both into one tamper-proof emission registry.",
    tracks: [
      {
        title: "Track A: Enterprise Environmental Bridging",
        description:
          "For operators on legacy environmental and SCADA systems. Existing meter and plant data are translated into oracle-signed on-chain readings through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy SCADA / EHS", sublabel: "Operation Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Emission Registry Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Meter Capture",
        description:
          "For metering devices and IoT sensors at the pit and plant. Signed readings are routed directly to the registry from device wallets without passing through a spreadsheet.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field Meters / IoT", sublabel: "Pit & Plant Devices", icon: Radio, accent: false },
          { label: "Data Oracles", sublabel: "Device Attestation", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Immutable Emission Record", icon: Recycling, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a tamper-proof emission registry with oracle-signed metering, real-time regulator access, and a single-pass audit prover from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Metering & Attestation Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects environmental compliance system benchmarks. Integrating SCADA and metering feeds, building oracle signing and immutable anchoring, and shipping a regulator access layer for an average operation takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your metering and attestation rules into pre-audited WebAssembly binaries and provisions the registry and live attestation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "mine-closure-and-land-rehabilitation-fund-tracking",
    icon: Forest,
    eyebrow: "Rehabilitation Escrow Layer",
    headline1: "Hold the closure fund.",
    headline2: "Release on real progress.",
    heroDescription:
      "Hold mine closure funds in a regulator-visible escrow that releases only against independently verified land rehabilitation milestones. Regulators gain live visibility into whether the fund is sufficient and whether restoration work is genuinely progressing as claimed.",
    heroCta: "Deploy Closure Fund Escrows",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque provision on a balance sheet into a tracked escrow that pays out only for verified restoration.",
    mechanics: [
      { title: "Regulator-Visible Escrow", description: "Open the vault to oversight. The Escrow and Conditional Settlement module holds the closure fund with the regulator holding a live read key, so authorities see the balance rather than trusting an annual statement." },
      { title: "Milestone-Gated Release", description: "Pay for progress, not promises. Funds unlock in portions only when a rehabilitation milestone is marked complete, so no capital leaves the escrow ahead of the work it was set aside for." },
      { title: "Independent Verification", description: "Trust the surveyor, not the operator. A milestone is released only after an independent verifier attests completion through Compliance Attestations, keeping the operator from certifying its own restoration." },
      { title: "Sufficiency Monitoring", description: "Check the fund against the liability. The contract tracks the held balance against the estimated closure cost, flagging any shortfall to the regulator long before the mine reaches end of life." },
      { title: "Immutable Progress Log", description: "Record every claim and check. Audit Logs seal each milestone claim, verification result, and disbursement with a time-stamp, building an unbroken history of how the fund was spent." },
      { title: "Staged Restoration Map", description: "Break closure into checkpoints. The rehabilitation plan is encoded as ordered milestones with defined evidence, so both operator and regulator work from the same restoration roadmap." },
    ],
    lifecycleTitle: "The Closure Fund Lifecycle",
    lifecycleSubtitle:
      "Follow a mine closure fund from deposit through a verified rehabilitation milestone to a controlled, evidence-based release.",
    lifecycleSteps: [
      {
        label: "Fund Deposit",
        description:
          "The operator deposits the closure provision into escrow. The contract records the amount against the estimated liability and grants the regulator a live view of the balance.",
        icon: Wallet,
        logFilename: "cerulea_closurefund.log",
        logLines: [
          { text: "[SYS] Opening closure escrow for mine RM_44...", time: "10:02:11", tone: "default" },
          { text: "[CMD] depositFund { mine: \"RM_44\", amount: 480000000 }", time: "10:02:11", tone: "primary" },
          { text: "[AUTH] Granting regulator read key and liability ref...", time: "10:02:12", tone: "secondary" },
          { text: "[OK] Escrow ESC_9021 funded. Regulator visibility on.", time: "10:02:12", tone: "success" },
        ],
      },
      {
        label: "Milestone Claim",
        description:
          "The operator completes a restoration stage and files a milestone claim with evidence. The claim enters a pending state and awaits independent verification before any release.",
        icon: Forest,
        logFilename: "cerulea_closurefund.log",
        logLines: [
          { text: "[SYS] Milestone claim filed for ESC_9021...", time: "14:30:55", tone: "default" },
          { text: "[CMD] claimMilestone(m: \"REGRADE_SLOPE_3\", evidence: 0x9f)", time: "14:30:55", tone: "primary" },
          { text: "[SYS] Claim marked pending independent review.", time: "14:30:56", tone: "default" },
          { text: "[OK] Milestone queued. No funds released yet.", time: "14:30:56", tone: "muted" },
        ],
      },
      {
        label: "Independent Verification",
        description:
          "An accredited verifier inspects the site and attests the milestone. The attestation is sealed on-chain, arming the corresponding portion of the fund for release.",
        icon: ShieldCheck,
        logFilename: "cerulea_closurefund.log",
        logLines: [
          { text: "[SYS] Verifier submitting site attestation...", time: "16:45:09", tone: "default" },
          { text: "[CMD] attestMilestone(\"REGRADE_SLOPE_3\", pass: true)", time: "16:45:09", tone: "primary" },
          { text: "[AUTH] Checking verifier credential and geo-tag...", time: "16:45:10", tone: "secondary" },
          { text: "[OK] Milestone attested. Release portion armed.", time: "16:45:10", tone: "success" },
        ],
      },
      {
        label: "Controlled Release",
        description:
          "The verified portion of the closure fund is released to the operator. The disbursement, its milestone, and the remaining balance are logged for the regulator.",
        icon: FileCheck,
        logFilename: "cerulea_closurefund.log",
        logLines: [
          { text: "[SYS] Executing conditional release for ESC_9021...", time: "16:46:31", tone: "default" },
          { text: "[CMD] release(\"REGRADE_SLOPE_3\", amount: 72000000)", time: "16:46:31", tone: "primary" },
          { text: "[SYS] Updating remaining balance and audit log...", time: "16:46:32", tone: "default" },
          { text: "[OK] Portion released against verified milestone.", time: "16:46:32", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes closure fund tracking into modular contracts. Each layer holds, claims, verifies, and releases against restoration milestones so that capital leaves escrow only for rehabilitation the regulator can see was done.",
    layers: [
      {
        title: "Escrow Vault",
        subtitle: "The Held Provision",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Held Provision",
          description:
            "The foundational custody layer. It holds the closure fund against the estimated liability, tracks the remaining balance, and exposes it to a regulator read key so oversight sees sufficiency in real time.",
          platformFunction: "Escrow & Custody",
        },
        codeSnippet:
          "contract ClosureEscrow {\n  struct Fund {\n    bytes32 mine;\n    uint256 balance;\n    uint256 liability;\n    address regulator;\n  }\n\n  mapping(bytes32 => Fund) public funds;\n\n  function deposit(bytes32 id, bytes32 mine, uint256 liability, address reg) external payable {\n    funds[id] = Fund(mine, msg.value, liability, reg);\n  }\n}",
        simAction: "Simulate Fund Deposit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading closure liability for mine RM_44...", tone: "default" },
          { text: "Locking deposited provision in escrow...", tone: "default" },
          { text: "Binding regulator read key to fund...", tone: "default" },
          { text: "Writing fund state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Escrow ESC_9021 funded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Milestone Ledger",
        subtitle: "The Restoration Roadmap",
        icon: Forest,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Restoration Roadmap",
          description:
            "Encodes closure as ordered, evidence-bound milestones. A claim cannot be released until it exists on this roadmap and is marked pending, keeping operator and regulator aligned on the same staged plan.",
          platformFunction: "Workflow & Metadata",
        },
        codeSnippet:
          "function claimMilestone(bytes32 fundId, bytes32 milestone, bytes32 evidence) external onlyOperator {\n    Milestone storage m = plan[fundId][milestone];\n    require(m.exists, \"Not in plan\");\n    require(!m.released, \"Already released\");\n    m.claimed = true;\n    m.evidence = evidence;\n    emit MilestoneClaimed(fundId, milestone);\n}",
        simAction: "Simulate Milestone Claim",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Operator filing REGRADE_SLOPE_3 claim...", tone: "default" },
          { text: "Checking milestone exists in restoration plan...", tone: "default" },
          { text: "Attaching evidence digest to claim...", tone: "default" },
          { text: "Marking milestone pending review...", tone: "default" },
          { text: "[SUCCESS] Milestone queued, no funds moved.", tone: "success" },
        ],
      },
      {
        title: "Verifier Gate",
        subtitle: "The Independent Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Independent Check",
          description:
            "Prevents self-certified restoration. This Compliance Attestations contract arms a release only when an accredited verifier attests the milestone on-site, so the operator can never sign off its own rehabilitation work.",
          platformFunction: "Verification & Attestation",
        },
        codeSnippet:
          "function attestMilestone(bytes32 fundId, bytes32 milestone, bool pass, bytes memory sig) external {\n    require(isAccredited(msg.sender, sig), \"Not a verifier\");\n    require(plan[fundId][milestone].claimed, \"No claim\");\n    plan[fundId][milestone].verified = pass;\n    emit MilestoneAttested(fundId, milestone, pass);\n}",
        simAction: "Simulate Independent Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifier submitting on-site attestation...", tone: "default" },
          { text: "Checking verifier credential and geo-tag...", tone: "default" },
          { text: "Confirming slope regrade meets standard...", tone: "default" },
          { text: "Arming release portion for milestone...", tone: "default" },
          { text: "[SUCCESS] Milestone attested by independent party.", tone: "success" },
        ],
      },
      {
        title: "Release Engine",
        subtitle: "The Conditional Payout",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Payout",
          description:
            "Controls disbursement. This contract releases only the portion tied to a verified milestone, updates the remaining balance, and writes the movement to Audit Logs so every rupee out of the fund maps to proven restoration.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function release(bytes32 fundId, bytes32 milestone, uint256 amount) external {\n    require(plan[fundId][milestone].verified, \"Not verified\");\n    require(!plan[fundId][milestone].released, \"Paid\");\n    plan[fundId][milestone].released = true;\n    funds[fundId].balance -= amount;\n    payable(operator[fundId]).transfer(amount);\n    emit Released(fundId, milestone, amount);\n}",
        simAction: "Simulate Controlled Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verified milestone REGRADE_SLOPE_3...", tone: "default" },
          { text: "Releasing tied portion from escrow...", tone: "default" },
          { text: "Decrementing remaining fund balance...", tone: "default" },
          { text: "Writing disbursement to audit log...", tone: "default" },
          { text: "[SUCCESS] Portion released against verified work.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Milestone-gated fund escrow is a horizontal capability across regulated liabilities. Here is how different actors around mine closure put the tracked fund to work.",
    sectors: [
      { icon: Landmark, title: "Mining Regulators", description: "Hold live visibility into whether closure funds are sufficient and whether rehabilitation is genuinely progressing, replacing periodic self-reported statements with an escrow that pays only for verified work.", assetTypes: ["Closure Escrows", "Sufficiency Alerts", "Milestone Attestations"] },
      { icon: Factory, title: "Mining Operators", description: "Demonstrate provisioning and restoration progress with an auditable trail, recovering committed capital promptly as each milestone is independently verified rather than tied up indefinitely.", assetTypes: ["Provision Deposits", "Rehabilitation Claims", "Release Records"] },
      { icon: Forest, title: "Verifiers & Communities", description: "Attest restoration milestones on-site and give affected communities confidence that closure obligations are funded and being met, with every check sealed in a public progress log.", assetTypes: ["Site Attestations", "Progress Logs", "Community Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a regulator's compliance system or capturing verifier attestations from the field, Cerulea routes both into one milestone-gated closure escrow.",
    tracks: [
      {
        title: "Track A: Regulator System Bridging",
        description:
          "For mining authorities on legacy compliance systems. Closure liabilities and fund statuses are translated into signed on-chain escrow records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Compliance DB", sublabel: "Authority Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Fund Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Closure Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Verifier Capture",
        description:
          "For accredited surveyors and verifiers on-site. Milestone attestations are signed from a field wallet and routed directly to the escrow to arm each release.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Verifier App / Wallet", sublabel: "Field Surveyors", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Gated Closure Fund", icon: Forest, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a regulator-visible closure escrow with milestone gating, independent verification, and a sealed progress log from scratch requires specialised engineers and long compliance integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Escrow & Milestone Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects regulated escrow integration benchmarks. Building custom conditional release logic, wiring independent verifier attestation, and shipping a regulator visibility layer for an average closure fund takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your escrow and milestone rules into pre-audited WebAssembly binaries and provisions the fund and attestation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "diamond-and-gemstone-provenance-kimberley-process-compliance",
    icon: Search,
    eyebrow: "Gemstone Provenance Engine",
    headline1: "Track every stone.",
    headline2: "Prove it conflict-free.",
    heroDescription:
      "Track each diamond from mine to consumer through cutting and trading, replacing counterfeitable paper Kimberley Process certificates with a tamper-proof digital record. The buyer receives an NFT certificate that proves conflict-free origin and transfers with the stone on resale.",
    heroCta: "Deploy Provenance Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a forgeable paper certificate into a stone-level record that survives cutting, trading, and resale.",
    mechanics: [
      { title: "Stone-Level Identity", description: "Give every rough its own record. The Traceability Ledger mints a unique identity for each stone at the mine, so provenance is tracked per gem rather than per shipment as paper certificates do." },
      { title: "Transformation Linking", description: "Follow the stone through the saw. When a rough is cut and polished, the Provenance Notary links the resulting stones to their parent, preserving the chain across the pipeline's physical transformations." },
      { title: "Conflict-Free Attestation", description: "Anchor the Kimberley claim. Each custody step carries a signed conflict-free attestation, so origin from a certified mine rests on cryptographic evidence rather than an easily copied paper form." },
      { title: "Verifiable Trader Identity", description: "Bind actors to credentials. The DID and VC Ledger gives miners, cutters, and traders verifiable identities, so every handoff is signed by a known, credentialed party." },
      { title: "Consumer NFT Certificate", description: "Hand the buyer proof. At retail the record resolves to a tamper-proof NFT certificate that names the specific conflict-free mine of origin and travels with the stone." },
      { title: "Resale Transfer", description: "Keep provenance with the gem. On resale the NFT certificate transfers to the new owner alongside the ring, so a second-hand stone carries the same verifiable origin as when it was first sold." },
    ],
    lifecycleTitle: "The Provenance Lifecycle",
    lifecycleSubtitle:
      "Follow a single diamond from a certified mine through cutting and trading to a consumer whose NFT certificate transfers on resale.",
    lifecycleSteps: [
      {
        label: "Rough Registration",
        description:
          "A certified mine registers a rough stone. The contract anchors its origin mine, carat, and conflict-free attestation as the immutable genesis of the stone's record.",
        icon: Pickaxe,
        logFilename: "cerulea_gemtrace.log",
        logLines: [
          { text: "[SYS] Initializing Rough Stone Manifest...", time: "07:30:41", tone: "default" },
          { text: "[CMD] registerRough { mine: \"KP_CERT_MINE_12\", carat: 3.8 }", time: "07:30:41", tone: "primary" },
          { text: "[AUTH] Verifying Kimberley origin credential...", time: "07:30:42", tone: "secondary" },
          { text: "[OK] Stone STN_74210 anchored at block 6620190.", time: "07:30:42", tone: "success" },
        ],
      },
      {
        label: "Cut & Polish Linking",
        description:
          "The rough is cut into polished stones. The notary links each polished gem to its parent rough, preserving the provenance chain across the transformation.",
        icon: FlaskConical,
        logFilename: "cerulea_gemtrace.log",
        logLines: [
          { text: "[SYS] Registering cutting event for STN_74210...", time: "12:11:08", tone: "default" },
          { text: "[CMD] linkTransform(parent: STN_74210, children: 2)", time: "12:11:08", tone: "primary" },
          { text: "[SYS] Binding polished stones to parent rough...", time: "12:11:09", tone: "default" },
          { text: "[OK] 2 polished stones linked. Chain preserved.", time: "12:11:09", tone: "success" },
        ],
      },
      {
        label: "Trade Handoff",
        description:
          "The polished stone moves between credentialed traders. Each handoff is co-signed against a verifiable identity from the DID and VC Ledger before the stone advances.",
        icon: Handshake,
        logFilename: "cerulea_gemtrace.log",
        logLines: [
          { text: "[SYS] Handoff pending to Trader DID:0x4c...", time: "15:22:37", tone: "default" },
          { text: "[CMD] transferStone(STN_74210_A, to: \"DID:trader:88\")", time: "15:22:37", tone: "primary" },
          { text: "[AUTH] Verifying trader credential and license...", time: "15:22:38", tone: "secondary" },
          { text: "[OK] Custody transferred to credentialed trader.", time: "15:22:38", tone: "success" },
        ],
      },
      {
        label: "Consumer Issuance",
        description:
          "At retail the record mints an NFT certificate to the buyer, naming the conflict-free mine. On resale the certificate transfers with the ring to the next owner.",
        icon: QrCode,
        logFilename: "cerulea_gemtrace.log",
        logLines: [
          { text: "[SYS] Issuing consumer certificate for STN_74210_A...", time: "18:05:52", tone: "default" },
          { text: "[CMD] mintCertificate(to: buyer, origin: \"KP_CERT_MINE_12\")", time: "18:05:52", tone: "primary" },
          { text: "[SYS] Binding conflict-free origin to NFT metadata...", time: "18:05:53", tone: "default" },
          { text: "[OK] NFT certificate issued. Transfers on resale.", time: "18:05:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes gemstone provenance into modular contracts. Each layer registers, transforms, credentials, and certifies a stone so that conflict-free origin survives every step from mine to consumer resale.",
    layers: [
      {
        title: "Stone Registry",
        subtitle: "The Origin Anchor",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Anchor",
          description:
            "The foundational data layer. It mints a unique identity for each rough stone at a certified mine and stores the immutable link to origin, carat, and conflict-free attestation that every later record points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract StoneRegistry {\n  struct Stone {\n    bytes32 originMine;\n    uint256 carat;\n    bytes32 parent;\n    bool conflictFree;\n  }\n\n  mapping(bytes32 => Stone) public stones;\n\n  function registerRough(bytes32 id, bytes32 mine, uint256 carat) external onlyCertifiedMine {\n    stones[id] = Stone(mine, carat, bytes32(0), true);\n  }\n}",
        simAction: "Simulate Rough Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying Kimberley credential for mine 12...", tone: "default" },
          { text: "Hashing origin and conflict-free attestation...", tone: "default" },
          { text: "Locking carat weight 3.8 for stone...", tone: "default" },
          { text: "Writing stone identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Stone STN_74210 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Transformation Notary",
        subtitle: "The Cut Linker",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cut Linker",
          description:
            "Preserves the chain through physical change. When a rough is cut and polished, this Provenance Notary contract binds each child stone to its parent, so provenance is never broken by transformation in the pipeline.",
          platformFunction: "Provenance & Transformation",
        },
        codeSnippet:
          "function linkTransform(bytes32 parent, bytes32[] calldata children) external onlyCutter {\n    require(stones[parent].originMine != bytes32(0), \"Unknown parent\");\n    for (uint256 i = 0; i < children.length; i++) {\n        stones[children[i]].parent = parent;\n        stones[children[i]].conflictFree = stones[parent].conflictFree;\n    }\n    emit Transformed(parent, children);\n}",
        simAction: "Simulate Cut Linking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Registering cutting event for STN_74210...", tone: "default" },
          { text: "Creating 2 polished child identities...", tone: "default" },
          { text: "Binding children to parent rough...", tone: "default" },
          { text: "Propagating conflict-free status...", tone: "default" },
          { text: "[SUCCESS] Polished stones linked to origin.", tone: "success" },
        ],
      },
      {
        title: "Identity Ledger",
        subtitle: "The Credential Gate",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Credential Gate",
          description:
            "Binds actors to verifiable identities. This DID and VC Ledger contract allows a stone to change hands only between credentialed miners, cutters, and traders, so every handoff carries a known, licensed party.",
          platformFunction: "Identity & Access",
        },
        codeSnippet:
          "function transferStone(bytes32 id, bytes32 toDid) external {\n    require(hasValidVC(msg.sender), \"Sender uncredentialed\");\n    require(hasValidVC(toDid), \"Receiver uncredentialed\");\n    custody[id] = toDid;\n    emit StoneTransferred(id, toDid);\n}",
        simAction: "Simulate Credential Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking sender verifiable credential...", tone: "default" },
          { text: "Verifying receiver trader license DID...", tone: "default" },
          { text: "Recording co-signed custody change...", tone: "default" },
          { text: "Advancing stone to credentialed trader...", tone: "default" },
          { text: "[SUCCESS] Custody transferred between known parties.", tone: "success" },
        ],
      },
      {
        title: "Certificate Minter",
        subtitle: "The Consumer Passport",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consumer Passport",
          description:
            "Issues the buyer proof. This contract mints a tamper-proof NFT certificate naming the conflict-free mine of origin and lets it transfer with the stone on resale, so provenance follows the gem for its whole life.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function mintCertificate(bytes32 stoneId, address buyer) external onlyRetailer returns (uint256) {\n    Stone memory s = stones[stoneId];\n    require(s.conflictFree, \"Not certified\");\n    uint256 certId = _mint(buyer);\n    certOrigin[certId] = s.originMine;\n    emit CertificateIssued(stoneId, certId, buyer);\n    return certId;\n}",
        simAction: "Simulate Certificate Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer purchasing polished stone at retail...", tone: "default" },
          { text: "Confirming conflict-free chain to origin...", tone: "default" },
          { text: "Minting NFT certificate to buyer wallet...", tone: "default" },
          { text: "Binding origin mine to certificate metadata...", tone: "default" },
          { text: "[SUCCESS] Certificate issued, transfers on resale.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Stone-level provenance is a horizontal capability across high-value minerals. Here is how different actors in the gemstone pipeline put the shared ledger to work.",
    sectors: [
      { icon: Pickaxe, title: "Mines & Kimberley Bodies", description: "Replace forgeable paper certificates with a per-stone digital origin record, letting certification bodies confirm conflict-free provenance cryptographically instead of inspecting easily counterfeited forms.", assetTypes: ["Rough Registrations", "Origin Attestations", "Kimberley Records"] },
      { icon: Handshake, title: "Cutters & Traders", description: "Move stones through cutting and trading with credentialed, co-signed handoffs, preserving provenance across transformation and proving a clean chain of custody to buyers downstream.", assetTypes: ["Transformation Links", "Trade Handoffs", "Trader Credentials"] },
      { icon: QrCode, title: "Retail & Consumers", description: "Hand buyers a tamper-proof NFT certificate naming the specific conflict-free mine, turning verified origin into a trust signal that transfers with the stone on resale.", assetTypes: ["NFT Certificates", "Resale Transfers", "Consumer Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a certification body's registry or capturing custody from a trader's mobile wallet, Cerulea routes both into one stone-level provenance record.",
    tracks: [
      {
        title: "Track A: Certification Body Bridging",
        description:
          "For Kimberley Process bodies and grading labs on legacy systems. Existing origin certificates are translated into signed on-chain stone identities through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Cert Registry", sublabel: "Certification Bodies", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Origin Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Trader & Consumer Execution",
        description:
          "For cutters, traders, and retail on mobile. Custody handoffs and consumer certificate issuance are signed directly from wallets and routed to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Trader App / Wallet", sublabel: "Cutters & Retailers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Custody Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Stone Provenance Record", icon: Search, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a stone-level provenance network with transformation linking, verifiable trader identities, and consumer NFT certificates from scratch requires specialised engineers and long pipeline integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Provenance & Identity Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects luxury supply-chain integration benchmarks. Building custom per-stone tracking, transformation linking across cutting, verifiable trader identities, and a consumer NFT certificate layer for an average pipeline takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your provenance and identity rules into pre-audited WebAssembly binaries and provisions the ledger and certificate layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "artisanal-mining-cooperative-fair-trade-certification",
    icon: Handshake,
    eyebrow: "Fair-Trade Attestation Layer",
    headline1: "Verify the premium.",
    headline2: "Prove it reached the miner.",
    heroDescription:
      "Prove that gemstones from artisanal mining cooperatives meet fair-trade labour standards and that the agreed premium actually reaches individual miners. Compliance checks are anchored and premium payments are tracked through to each miner, giving certifiers and buyers verifiable proof.",
    heroCta: "Deploy Fair-Trade Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a hard-to-verify claim about remote communities into a tracked record of labour compliance and miner payment.",
    mechanics: [
      { title: "Cooperative Origin Record", description: "Anchor the source. The Traceability Ledger records each parcel of gemstones against its artisanal cooperative, so a fair-trade claim rests on a verified origin rather than an unverifiable label." },
      { title: "Labour Standard Attestation", description: "Bind the audit to the batch. Compliance Attestations seal each labour-condition check against the cooperative, so certifiers see that standards were verified for the stones being certified." },
      { title: "Premium Pass-Through Tracking", description: "Follow the money to the miner. Premium payments are tracked through the cooperative to individual miners, proving the fair-trade premium was distributed rather than absorbed along the way." },
      { title: "Miner-Level Ledger", description: "Give each miner a record. Payments and attributions are recorded per miner, so a certifier can confirm that a specific person received their share of the premium." },
      { title: "Provenance Notary", description: "Keep the stones tied to the claim. The Provenance Notary binds parcels to their certified origin, preventing uncertified stones from being passed off under a cooperative's fair-trade record." },
      { title: "Certifier & Buyer Proof", description: "Expose verifiable evidence. Certifiers and buyers query the record directly to confirm labour and payment commitments are honoured, replacing site-visit guesswork with anchored proof." },
    ],
    lifecycleTitle: "The Fair-Trade Lifecycle",
    lifecycleSubtitle:
      "Follow a parcel of artisanal gemstones from cooperative origin through a labour attestation to premium payments tracked to individual miners.",
    lifecycleSteps: [
      {
        label: "Cooperative Registration",
        description:
          "A parcel is registered to its artisanal cooperative. The contract anchors the cooperative identity and the participating miners as the origin of the fair-trade record.",
        icon: Users,
        logFilename: "cerulea_fairtrade.log",
        logLines: [
          { text: "[SYS] Initializing Cooperative Parcel Manifest...", time: "08:12:03", tone: "default" },
          { text: "[CMD] registerParcel { coop: \"COOP_TZ_19\", miners: 24 }", time: "08:12:03", tone: "primary" },
          { text: "[AUTH] Verifying cooperative membership roll...", time: "08:12:04", tone: "secondary" },
          { text: "[OK] Parcel PCL_3308 anchored at block 5510221.", time: "08:12:04", tone: "success" },
        ],
      },
      {
        label: "Labour Attestation",
        description:
          "An accredited auditor attests the cooperative's labour conditions. The Compliance Attestations module seals the result against the parcel before it can be certified fair-trade.",
        icon: ShieldCheck,
        logFilename: "cerulea_fairtrade.log",
        logLines: [
          { text: "[SYS] Recording labour audit for COOP_TZ_19...", time: "11:40:18", tone: "default" },
          { text: "[CMD] attestLabour(PCL_3308, standard: \"FT_LABOUR_V3\")", time: "11:40:18", tone: "primary" },
          { text: "[AUTH] Checking auditor credential and scope...", time: "11:40:19", tone: "secondary" },
          { text: "[OK] Labour standard attested. Parcel eligible.", time: "11:40:19", tone: "success" },
        ],
      },
      {
        label: "Premium Distribution",
        description:
          "The buyer's fair-trade premium is distributed through the cooperative. Each miner's share is recorded on-chain, tracking the payment to the individual level.",
        icon: Coins,
        logFilename: "cerulea_fairtrade.log",
        logLines: [
          { text: "[SYS] Distributing fair-trade premium for PCL_3308...", time: "16:03:44", tone: "default" },
          { text: "[CMD] distributePremium(total: 4800, miners: 24)", time: "16:03:44", tone: "primary" },
          { text: "[SYS] Crediting each miner's verified account...", time: "16:03:45", tone: "default" },
          { text: "[OK] Premium tracked to 24 individual miners.", time: "16:03:45", tone: "success" },
        ],
      },
      {
        label: "Certifier Verification",
        description:
          "A certifier or buyer queries the record. Labour attestation and miner-level premium payments are confirmed, proving the fair-trade commitment was honoured.",
        icon: FileCheck,
        logFilename: "cerulea_fairtrade.log",
        logLines: [
          { text: "[SYS] Certifier verification request for PCL_3308...", time: "18:31:09", tone: "default" },
          { text: "[CMD] verifyFairTrade(PCL_3308)", time: "18:31:09", tone: "primary" },
          { text: "[SYS] Confirming labour attestation and 24 payouts...", time: "18:31:10", tone: "default" },
          { text: "[OK] Fair-trade commitment verified end to end.", time: "18:31:10", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fair-trade certification into modular contracts. Each layer registers, attests, distributes, and exposes so that both labour compliance and miner payment are provable for stones from remote cooperatives.",
    layers: [
      {
        title: "Cooperative Registry",
        subtitle: "The Origin Anchor",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Anchor",
          description:
            "The foundational data layer. It binds each parcel to its artisanal cooperative and the participating miners, storing the immutable origin that every labour attestation and premium payment points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CoopRegistry {\n  struct Parcel {\n    bytes32 coop;\n    bytes32[] miners;\n    bool labourAttested;\n  }\n\n  mapping(bytes32 => Parcel) public parcels;\n\n  function registerParcel(bytes32 id, bytes32 coop, bytes32[] calldata miners) external {\n    parcels[id] = Parcel(coop, miners, false);\n  }\n}",
        simAction: "Simulate Cooperative Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying cooperative membership roll...", tone: "default" },
          { text: "Binding 24 miners to parcel PCL_3308...", tone: "default" },
          { text: "Anchoring cooperative origin identity...", tone: "default" },
          { text: "Writing parcel state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Parcel PCL_3308 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Labour Attestor",
        subtitle: "The Standards Seal",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Standards Seal",
          description:
            "Anchors the labour audit. This Compliance Attestations contract seals an accredited auditor's labour-condition check against the parcel, so a cooperative cannot be certified fair-trade without a verified standards result.",
          platformFunction: "Verification & Attestation",
        },
        codeSnippet:
          "function attestLabour(bytes32 parcelId, bytes32 standard, bytes memory sig) external {\n    require(isAccreditedAuditor(msg.sender, sig), \"Not an auditor\");\n    parcels[parcelId].labourAttested = true;\n    labourStandard[parcelId] = standard;\n    emit LabourAttested(parcelId, standard);\n}",
        simAction: "Simulate Labour Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor submitting labour condition result...", tone: "default" },
          { text: "Checking auditor credential and scope...", tone: "default" },
          { text: "Sealing FT_LABOUR_V3 standard to parcel...", tone: "default" },
          { text: "Marking parcel eligible for premium...", tone: "default" },
          { text: "[SUCCESS] Labour standard attested on-chain.", tone: "success" },
        ],
      },
      {
        title: "Premium Router",
        subtitle: "The Miner Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Miner Payout",
          description:
            "Tracks money to the person. This contract distributes the fair-trade premium through the cooperative and records each miner's share, proving the premium reached individuals rather than being absorbed by intermediaries.",
          platformFunction: "Payouts & Settlement",
        },
        codeSnippet:
          "function distributePremium(bytes32 parcelId, uint256 total) external onlyBuyer {\n    require(parcels[parcelId].labourAttested, \"Not attested\");\n    bytes32[] memory miners = parcels[parcelId].miners;\n    uint256 share = total / miners.length;\n    for (uint256 i = 0; i < miners.length; i++) {\n        credited[miners[i]] += share;\n        emit MinerPaid(parcelId, miners[i], share);\n    }\n}",
        simAction: "Simulate Premium Distribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading attested parcel PCL_3308...", tone: "default" },
          { text: "Splitting premium across 24 miners...", tone: "default" },
          { text: "Crediting each verified miner account...", tone: "default" },
          { text: "Recording per-miner payout events...", tone: "default" },
          { text: "[SUCCESS] Premium tracked to individual miners.", tone: "success" },
        ],
      },
      {
        title: "Verification Window",
        subtitle: "The Certifier View",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Certifier View",
          description:
            "Exposes verifiable proof. This read-only contract lets certifiers and buyers confirm both the labour attestation and the miner-level premium payments for a parcel, replacing site-visit guesswork with anchored evidence.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyFairTrade(bytes32 parcelId) external view returns (bool labour, uint256 minersPaid) {\n    return (parcels[parcelId].labourAttested, paidCount[parcelId]);\n}",
        simAction: "Simulate Certifier Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Certifier opening parcel record...", tone: "default" },
          { text: "Confirming labour attestation present...", tone: "default" },
          { text: "Counting 24 recorded miner payouts...", tone: "default" },
          { text: "Assembling end-to-end fair-trade proof...", tone: "default" },
          { text: "[SUCCESS] Fair-trade commitment verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified labour and payment tracking is a horizontal capability. Here is how different actors around artisanal mining put the shared record to work.",
    sectors: [
      { icon: Users, title: "Mining Cooperatives", description: "Prove that member miners work under fair-trade labour conditions and receive their premium share, unlocking access to buyers who require verifiable rather than self-declared compliance.", assetTypes: ["Parcel Origins", "Membership Rolls", "Premium Records"] },
      { icon: Handshake, title: "Buyers & Brands", description: "Source artisanal gemstones with anchored evidence that labour standards were met and premiums reached miners, backing ethical claims with data instead of unverifiable certificates.", assetTypes: ["Sourcing Proofs", "Labour Attestations", "Premium Audits"] },
      { icon: ShieldCheck, title: "Certifiers & NGOs", description: "Verify labour attestations and per-miner payments directly from the ledger, monitoring remote cooperatives without relying solely on periodic and costly in-person site visits.", assetTypes: ["Certification Records", "Miner Payouts", "Compliance Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a certifier's system or capturing cooperative data from miners' phones, Cerulea routes both into one verifiable fair-trade record.",
    tracks: [
      {
        title: "Track A: Certifier System Bridging",
        description:
          "For fair-trade bodies and buyers on legacy systems. Existing certification and payment records are translated into signed on-chain attestations through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Cert / ERP", sublabel: "Certifier & Buyer Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Fair-Trade Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Cooperative Field Capture",
        description:
          "For cooperatives and miners on mobile. Parcel registrations and premium receipts are signed from a phone wallet and routed directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Coop App / Wallet", sublabel: "Miner Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Fair-Trade Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a fair-trade network with labour attestation, miner-level premium tracking, and certifier verification from scratch requires specialised engineers and long field integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Labour & Payment Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects ethical sourcing integration benchmarks. Building custom labour attestation, per-miner premium routing, and a certifier verification portal for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your labour and payment rules into pre-audited WebAssembly binaries and provisions the ledger and attestation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "gemstone-grading-dispute-resolution-between-buyer-and-seller",
    icon: Scale,
    eyebrow: "Grading Settlement Layer",
    headline1: "Anchor the grade.",
    headline2: "Settle without the fight.",
    heroDescription:
      "Attach a verified grading record to each gemstone so buyer and seller settle from the same anchored certificate rather than dueling assessments. The original grading is bound to the specific stone's identity, so a dispute refers to the verified certificate instead of questioning its authenticity.",
    heroCta: "Deploy Grading Records",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a contested clarity and cut argument at the point of sale into settlement against one anchored certificate.",
    mechanics: [
      { title: "Stone-Bound Certificate", description: "Tie the grade to the gem. The Produce Grades and Certificates module anchors the original grading, clarity, color, and cut against the specific stone's identity, so the certificate cannot be swapped or reassigned." },
      { title: "Tamper-Evident Grading", description: "Freeze the assessment. The certificate is sealed by its digest, so any alteration to the recorded grade breaks the hash and is immediately detectable to either party." },
      { title: "Identity Notarization", description: "Prove it is the same stone. The Provenance Notary binds the certificate to the gem's identity, preventing a seller from presenting one stone's grading for another." },
      { title: "Escrow-Held Settlement", description: "Hold funds against agreement. Escrow and Conditional Settlement keep the purchase amount locked until both parties accept the anchored grade, so a dispute pauses payment rather than reversing it later." },
      { title: "Evidence-Based Resolution", description: "Refer to the original, not opinion. If the buyer's independent assessment differs, both sides refer to the verified original grading, resolving from a trusted record instead of two conflicting reports." },
      { title: "Point-of-Sale Trust", description: "Reduce disputes before they start. Because the grade is verifiable at the moment of sale, buyer and seller transact on shared evidence, cutting the frequency of quality disputes." },
    ],
    lifecycleTitle: "The Grading Dispute Lifecycle",
    lifecycleSubtitle:
      "Follow a graded gemstone from certificate anchoring through an escrowed sale to an evidence-based resolution of a quality dispute.",
    lifecycleSteps: [
      {
        label: "Certificate Anchoring",
        description:
          "A grading lab anchors the stone's certificate. The contract binds clarity, color, cut, and carat to the gem's identity by the certificate's digest.",
        icon: FileCheck,
        logFilename: "cerulea_grading.log",
        logLines: [
          { text: "[SYS] Anchoring grading certificate for stone...", time: "09:20:14", tone: "default" },
          { text: "[CMD] anchorGrade { stone: \"GEM_6612\", clarity: \"VVS1\", cut: \"EX\" }", time: "09:20:14", tone: "primary" },
          { text: "[AUTH] Hashing certificate (SHA-256) and sealing to stone...", time: "09:20:15", tone: "secondary" },
          { text: "[OK] Certificate anchored at block 6120988. Tamper-evident.", time: "09:20:15", tone: "success" },
        ],
      },
      {
        label: "Escrowed Sale",
        description:
          "The buyer purchases against the anchored certificate. Funds are held in escrow, released only once both parties accept the recorded grade.",
        icon: Wallet,
        logFilename: "cerulea_grading.log",
        logLines: [
          { text: "[SYS] Opening escrow for sale of GEM_6612...", time: "13:05:41", tone: "default" },
          { text: "[CMD] lockFunds(stone: \"GEM_6612\", amount: 920000)", time: "13:05:41", tone: "primary" },
          { text: "[SYS] Binding purchase to anchored certificate...", time: "13:05:42", tone: "default" },
          { text: "[OK] Funds escrowed pending grade acceptance.", time: "13:05:42", tone: "muted" },
        ],
      },
      {
        label: "Dispute Raised",
        description:
          "The buyer's independent assessment differs from the certificate. A dispute is opened, pausing settlement and pointing both parties to the anchored original grading.",
        icon: Scale,
        logFilename: "cerulea_grading.log",
        logLines: [
          { text: "[SYS] Buyer raising grade dispute on GEM_6612...", time: "15:47:28", tone: "default" },
          { text: "[CMD] openDispute(stone: \"GEM_6612\", claim: \"clarity SI1\")", time: "15:47:28", tone: "primary" },
          { text: "[SYS] Freezing escrow and loading original certificate...", time: "15:47:29", tone: "default" },
          { text: "[OK] Dispute opened. Anchored grade referenced.", time: "15:47:29", tone: "secondary" },
        ],
      },
      {
        label: "Evidence-Based Settlement",
        description:
          "Both parties refer to the verified original grading. With the certificate's authenticity beyond question, the dispute resolves and escrow settles accordingly.",
        icon: Handshake,
        logFilename: "cerulea_grading.log",
        logLines: [
          { text: "[SYS] Resolving dispute against anchored grade...", time: "16:59:10", tone: "default" },
          { text: "[CMD] resolveDispute(\"GEM_6612\", outcome: \"UPHOLD_CERT\")", time: "16:59:10", tone: "primary" },
          { text: "[SYS] Certificate authenticity confirmed, releasing escrow...", time: "16:59:11", tone: "default" },
          { text: "[OK] Settled from verified record. No re-grading.", time: "16:59:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes grading dispute resolution into modular contracts. Each layer anchors, escrows, disputes, and settles so that a quality disagreement is resolved against one trusted certificate bound to the stone.",
    layers: [
      {
        title: "Grade Registry",
        subtitle: "The Certificate Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Certificate Seal",
          description:
            "The foundational data layer. It anchors the original grading certificate by its digest against the specific stone's identity, storing an immutable, tamper-evident record of clarity, color, and cut.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "contract GradeRegistry {\n  struct Cert {\n    bytes32 stone;\n    bytes32 digest;\n    address lab;\n    uint256 ts;\n  }\n\n  mapping(bytes32 => Cert) public certs;\n\n  function anchorGrade(bytes32 stone, bytes32 digest) external onlyLab {\n    certs[stone] = Cert(stone, digest, msg.sender, block.timestamp);\n  }\n}",
        simAction: "Simulate Certificate Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting grading certificate for GEM_6612...", tone: "default" },
          { text: "Computing SHA-256 digest of certificate...", tone: "default" },
          { text: "Binding digest to stone identity...", tone: "default" },
          { text: "Writing certificate seal to storage...", tone: "default" },
          { text: "[SUCCESS] Grade anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Identity Notary",
        subtitle: "The Same-Stone Proof",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Same-Stone Proof",
          description:
            "Prevents certificate swapping. This Provenance Notary contract confirms the certificate belongs to the gem being sold, so a seller cannot present a higher grade from a different stone at the point of sale.",
          platformFunction: "Identity & Provenance",
        },
        codeSnippet:
          "function verifyStoneCert(bytes32 stone, bytes32 presented) external view returns (bool) {\n    return certs[stone].digest == presented && certs[stone].stone == stone;\n}",
        simAction: "Simulate Identity Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading presented certificate digest...", tone: "default" },
          { text: "Matching digest to GEM_6612 identity...", tone: "default" },
          { text: "Confirming certificate is for this stone...", tone: "default" },
          { text: "Rejecting any mismatched certificate...", tone: "default" },
          { text: "[SUCCESS] Certificate proven for the stone.", tone: "success" },
        ],
      },
      {
        title: "Sale Escrow",
        subtitle: "The Held Payment",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Held Payment",
          description:
            "Keeps funds contingent. This Escrow and Conditional Settlement contract locks the purchase amount until both parties accept the anchored grade, so a raised dispute pauses payment rather than forcing a later reversal.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function lockFunds(bytes32 stone, uint256 amount) external payable {\n    require(certs[stone].digest != bytes32(0), \"No cert\");\n    escrow[stone] = Escrow(msg.sender, amount, false);\n    emit FundsLocked(stone, amount);\n}",
        simAction: "Simulate Escrowed Sale",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer committing purchase for GEM_6612...", tone: "default" },
          { text: "Confirming anchored certificate present...", tone: "default" },
          { text: "Locking purchase amount in escrow...", tone: "default" },
          { text: "Awaiting mutual grade acceptance...", tone: "default" },
          { text: "[SUCCESS] Funds escrowed against certificate.", tone: "success" },
        ],
      },
      {
        title: "Dispute Resolver",
        subtitle: "The Evidence Arbiter",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Arbiter",
          description:
            "Resolves from the record. When assessments differ, this contract points both parties to the verified original grading and settles escrow on the outcome, replacing a re-grade standoff with an evidence-based decision.",
          platformFunction: "Dispute Resolution",
        },
        codeSnippet:
          "function resolveDispute(bytes32 stone, bool upholdCert) external onlyArbiter {\n    Escrow storage e = escrow[stone];\n    require(!e.settled, \"Settled\");\n    e.settled = true;\n    if (upholdCert) payable(seller[stone]).transfer(e.amount);\n    else payable(e.buyer).transfer(e.amount);\n    emit DisputeResolved(stone, upholdCert);\n}",
        simAction: "Simulate Dispute Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading original anchored grade...", tone: "default" },
          { text: "Comparing against buyer independent claim...", tone: "default" },
          { text: "Confirming certificate authenticity...", tone: "default" },
          { text: "Settling escrow on resolved outcome...", tone: "default" },
          { text: "[SUCCESS] Dispute settled from verified record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anchored grading is a horizontal capability across graded goods. Here is how different actors in gemstone trade put the shared certificate to work.",
    sectors: [
      { icon: FlaskConical, title: "Grading Laboratories", description: "Anchor issued certificates to specific stones so their grades cannot be forged or reassigned, protecting lab reputation and giving the market a trusted reference at the point of sale.", assetTypes: ["Grading Certificates", "Digest Seals", "Lab Records"] },
      { icon: Handshake, title: "Buyers & Sellers", description: "Transact against one verified grade with funds held in escrow, resolving any clarity or cut dispute from the anchored certificate instead of costly re-grading and lost sales.", assetTypes: ["Escrowed Sales", "Dispute Filings", "Settlement Records"] },
      { icon: Scale, title: "Arbiters & Exchanges", description: "Settle grading disputes on evidence rather than opinion, referring both parties to the immutable original certificate and clearing contested trades quickly.", assetTypes: ["Dispute Cases", "Resolution Records", "Trade Clearances"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a grading lab's system or capturing sales from a dealer's wallet, Cerulea routes both into one anchored grading record.",
    tracks: [
      {
        title: "Track A: Grading Lab Bridging",
        description:
          "For laboratories and exchanges on legacy systems. Existing certificates are translated into signed, stone-bound on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Lab System", sublabel: "Grading Databases", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Certificate Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Grading Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Dealer Sale Execution",
        description:
          "For dealers and buyers on mobile. Escrowed sales and dispute filings are signed directly from wallets and routed to the grading ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Dealer App / Wallet", sublabel: "Buyers & Sellers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Settlement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Anchored Grade Record", icon: Scale, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an anchored grading network with stone-bound certificates, escrowed sales, and evidence-based dispute resolution from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Grading & Settlement Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects graded-goods marketplace benchmarks. Building custom certificate anchoring, escrowed settlement, and an evidence-based dispute flow for an average marketplace takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your grading and settlement rules into pre-audited WebAssembly binaries and provisions the ledger and escrow layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "conflict-mineral-tracing-gold-cobalt-tantalum-from-mine-to-manufacture",
    icon: Shield,
    eyebrow: "Conflict Mineral Provenance Engine",
    headline1: "Trace the mineral.",
    headline2: "Defund armed groups.",
    heroDescription:
      "Prove that gold, cobalt, and tantalum do not fund armed groups with an on-chain provenance network that spans the whole supply chain, not just a smelter audit. Volume reconciliation blocks laundering of undeclared minerals and a public accountability layer backs brand claims.",
    heroCta: "Deploy Mineral Provenance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace slow, partial paper smelter audits with a whole-chain provenance record that resists laundering.",
    mechanics: [
      { title: "Full-Chain Provenance", description: "Cover the whole path, not one node. The Traceability Ledger records custody from mine through smelter to manufacturer, so OECD due diligence spans the entire chain instead of a single paper-audited smelter." },
      { title: "Volume Reconciliation", description: "Block laundering by mass balance. Declared inputs and outputs are reconciled at each processing step, so undeclared minerals cannot be smuggled in without breaking the volume equation." },
      { title: "Mine-Origin Attestation", description: "Anchor conflict-free origin. Compliance Attestations bind each parcel to a verified, non-conflict source, so downstream buyers rely on signed evidence rather than a self-declared smelter list." },
      { title: "Public Accountability Layer", description: "Back brand claims with data. A public layer lets brands and civil society verify provenance behind conflict-free marketing, turning disclosures into checkable records." },
      { title: "SEC & EU Disclosure", description: "File from on-chain data. An OEM assembles its conflict minerals disclosure directly from provenance records, replacing a six-month audit with a rapid data query." },
      { title: "Smelter Notarization", description: "Seal each transformation. The Provenance Notary anchors smelter inputs and outputs, keeping the chain intact where refining would otherwise erase a mineral's origin." },
    ],
    lifecycleTitle: "The Mineral Provenance Lifecycle",
    lifecycleSubtitle:
      "Follow a cobalt parcel from a verified mine through a reconciled smelter to an OEM filing its disclosure from on-chain data.",
    lifecycleSteps: [
      {
        label: "Mine Attestation",
        description:
          "A verified mine registers a mineral parcel. The contract anchors its non-conflict origin attestation and declared mass as the genesis of the provenance chain.",
        icon: Pickaxe,
        logFilename: "cerulea_mineraltrace.log",
        logLines: [
          { text: "[SYS] Initializing Mineral Parcel Manifest...", time: "06:50:33", tone: "default" },
          { text: "[CMD] registerParcel { mineral: \"COBALT\", mine: \"DRC_CF_04\", kg: 1800 }", time: "06:50:33", tone: "primary" },
          { text: "[AUTH] Verifying conflict-free origin attestation...", time: "06:50:34", tone: "secondary" },
          { text: "[OK] Parcel PRL_9917 anchored at block 7011456.", time: "06:50:34", tone: "success" },
        ],
      },
      {
        label: "Smelter Reconciliation",
        description:
          "The parcel is refined. The smelter declares inputs and outputs, and the contract reconciles the mass balance to block any undeclared mineral from entering.",
        icon: Factory,
        logFilename: "cerulea_mineraltrace.log",
        logLines: [
          { text: "[SYS] Reconciling smelter batch for PRL_9917...", time: "12:22:47", tone: "default" },
          { text: "[CMD] reconcile(inKg: 1800, outKg: 1735, loss: 65)", time: "12:22:47", tone: "primary" },
          { text: "[SYS] Checking mass balance against declared inputs...", time: "12:22:48", tone: "default" },
          { text: "[OK] Volume reconciled. No undeclared mineral.", time: "12:22:48", tone: "success" },
        ],
      },
      {
        label: "Chain Custody",
        description:
          "Refined mineral moves toward the manufacturer. Each handoff is co-signed and notarized, preserving provenance across the remaining supply-chain hops.",
        icon: Truck,
        logFilename: "cerulea_mineraltrace.log",
        logLines: [
          { text: "[SYS] Handoff pending to component maker...", time: "15:10:19", tone: "default" },
          { text: "[CMD] transferMineral(PRL_9917, to: \"OEM_TIER2_22\")", time: "15:10:19", tone: "primary" },
          { text: "[AUTH] Notarizing custody and verifying credential...", time: "15:10:20", tone: "secondary" },
          { text: "[OK] Custody transferred. Chain intact to tier 2.", time: "15:10:20", tone: "success" },
        ],
      },
      {
        label: "Disclosure Filing",
        description:
          "An OEM files its SEC conflict minerals disclosure using on-chain provenance across its cobalt supply chain, replacing a six-month audit with a two-day query.",
        icon: FileCheck,
        logFilename: "cerulea_mineraltrace.log",
        logLines: [
          { text: "[SYS] Assembling disclosure dataset for OEM...", time: "10:04:55", tone: "default" },
          { text: "[CMD] queryProvenance(mineral: \"COBALT\", period: \"FY2026\")", time: "10:04:55", tone: "primary" },
          { text: "[SYS] Compiling verified chains across suppliers...", time: "10:04:56", tone: "default" },
          { text: "[OK] Disclosure ready. 6-month audit now 2-day query.", time: "10:04:57", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes conflict mineral tracing into modular contracts. Each layer attests, reconciles, notarizes, and discloses so that provenance spans the full chain and undeclared minerals cannot be laundered in.",
    layers: [
      {
        title: "Parcel Registry",
        subtitle: "The Origin Anchor",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Anchor",
          description:
            "The foundational data layer. It mints a parcel identity at a verified mine and stores the immutable link to mineral type, conflict-free attestation, and declared mass that every later record reconciles against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ParcelRegistry {\n  struct Parcel {\n    bytes32 mine;\n    bytes32 mineral;\n    uint256 kg;\n    bool conflictFree;\n  }\n\n  mapping(bytes32 => Parcel) public parcels;\n\n  function registerParcel(bytes32 id, bytes32 mine, bytes32 mineral, uint256 kg) external onlyVerifiedMine {\n    parcels[id] = Parcel(mine, mineral, kg, true);\n  }\n}",
        simAction: "Simulate Mine Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying conflict-free origin for DRC_CF_04...", tone: "default" },
          { text: "Hashing mine attestation and mineral type...", tone: "default" },
          { text: "Locking declared mass 1800kg...", tone: "default" },
          { text: "Writing parcel identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Parcel PRL_9917 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation Engine",
        subtitle: "The Mass Balance",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Mass Balance",
          description:
            "Blocks laundering at the smelter. This contract reconciles declared inputs against outputs and losses, rejecting a batch whose output exceeds what verified inputs allow, so undeclared minerals cannot be slipped into the chain.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function reconcile(bytes32 batch, uint256 inKg, uint256 outKg, uint256 loss) external onlySmelter {\n    require(outKg + loss <= inKg, \"Volume mismatch\");\n    reconciled[batch] = true;\n    emit Reconciled(batch, inKg, outKg, loss);\n}",
        simAction: "Simulate Smelter Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading smelter batch for PRL_9917...", tone: "default" },
          { text: "Summing outputs and declared losses...", tone: "default" },
          { text: "Checking total against verified inputs...", tone: "default" },
          { text: "Rejecting any undeclared surplus...", tone: "default" },
          { text: "[SUCCESS] Volume reconciled, no laundering.", tone: "success" },
        ],
      },
      {
        title: "Custody Notary",
        subtitle: "The Chain Keeper",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Chain Keeper",
          description:
            "Preserves provenance through refining and transport. This Provenance Notary contract co-signs and seals each handoff, so a refined mineral keeps its verified origin all the way to the manufacturer.",
          platformFunction: "Custody & Provenance",
        },
        codeSnippet:
          "function transferMineral(bytes32 id, bytes32 toParty) external {\n    require(reconciled[batchOf[id]], \"Not reconciled\");\n    require(hasCredential(toParty), \"Uncredentialed\");\n    custody[id] = toParty;\n    emit MineralTransferred(id, toParty);\n}",
        simAction: "Simulate Chain Custody",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming batch reconciled before transfer...", tone: "default" },
          { text: "Verifying tier 2 maker credential...", tone: "default" },
          { text: "Notarizing custody handoff...", tone: "default" },
          { text: "Advancing mineral toward manufacturer...", tone: "default" },
          { text: "[SUCCESS] Custody transferred, chain intact.", tone: "success" },
        ],
      },
      {
        title: "Disclosure Window",
        subtitle: "The Accountability View",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accountability View",
          description:
            "Turns provenance into filings and public proof. This contract assembles an OEM's disclosure from verified chains and exposes a public accountability layer, replacing a six-month audit with a rapid, checkable query.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function queryProvenance(bytes32 mineral, uint256 period) external view returns (Chain[] memory) {\n    return verifiedChains[mineral][period];\n}",
        simAction: "Simulate Disclosure Filing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "OEM opening FY2026 provenance dataset...", tone: "default" },
          { text: "Compiling verified chains across suppliers...", tone: "default" },
          { text: "Confirming every parcel conflict-free...", tone: "default" },
          { text: "Assembling SEC disclosure package...", tone: "default" },
          { text: "[SUCCESS] Disclosure ready as a 2-day query.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Whole-chain mineral provenance is a horizontal capability. Here is how different actors across the conflict minerals supply chain put the shared ledger to work.",
    sectors: [
      { icon: Factory, title: "Smelters & Refiners", description: "Prove conflict-free processing with reconciled mass balances at each batch, satisfying OECD due diligence continuously instead of hosting slow, periodic paper-based smelter audits.", assetTypes: ["Smelter Batches", "Reconciliation Records", "Origin Attestations"] },
      { icon: Cpu, title: "OEMs & Manufacturers", description: "File SEC and EU conflict minerals disclosures from on-chain provenance across the whole supply chain, replacing a six-month audit with a two-day query backed by verified data.", assetTypes: ["Disclosure Filings", "Supplier Chains", "Provenance Queries"] },
      { icon: Globe, title: "Regulators & Civil Society", description: "Verify brand conflict-free claims through a public accountability layer, checking mine-to-manufacturer provenance directly rather than trusting self-declared smelter lists.", assetTypes: ["Public Records", "Accountability Proofs", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a smelter's ERP or capturing mine-site attestations from the field, Cerulea routes both into one whole-chain provenance record.",
    tracks: [
      {
        title: "Track A: Enterprise Supply-Chain Bridging",
        description:
          "For smelters and OEMs on legacy ERP. Existing custody and processing events are translated into signed, reconciled on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy ERP / MES", sublabel: "Smelter & OEM Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Mine-Site Field Capture",
        description:
          "For mines and field auditors on mobile. Origin attestations and parcel registrations are signed from a field wallet and routed directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field App / Wallet", sublabel: "Mine & Auditor Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Provenance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Mineral Provenance Record", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a whole-chain mineral provenance network with volume reconciliation, smelter notarization, and a public accountability layer from scratch requires specialised engineers and long multi-tier integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Provenance & Reconciliation Rules",
      ruleCount: 52,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects multi-tier due-diligence integration benchmarks. Building custom whole-chain tracking, smelter mass-balance reconciliation, and a public accountability and disclosure layer for an average supply chain takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your provenance and reconciliation rules into pre-audited WebAssembly binaries and provisions the ledger and disclosure layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "mining-royalty-and-revenue-distribution-to-government-and-communities",
    icon: Coins,
    eyebrow: "Royalty Settlement Layer",
    headline1: "Compute the royalty.",
    headline2: "Pay the community on time.",
    heroDescription:
      "Automate royalty and revenue distribution to governments and affected communities with transparent, formula-driven calculations and automatic, auditable payments. Community trusts receive their entitlement days after production data is submitted instead of waiting months and engaging lawyers.",
    heroCta: "Deploy Royalty Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque, disputed calculation chain into a transparent formula that pays every beneficiary automatically.",
    mechanics: [
      { title: "Production-Linked Royalty", description: "Compute from verified output. The Traceability Ledger feeds production tonnage into the royalty contract, so entitlements are derived from recorded output rather than negotiated estimates." },
      { title: "Transparent Formula", description: "Show the math to everyone. The royalty formula is encoded on-chain, so government, operator, and community all see the same calculation instead of an opaque, contestable chain." },
      { title: "Automatic Community Payout", description: "Pay entitlements without a claim. The Payouts and Settlements module credits each government and community beneficiary automatically, so a community trust does not have to chase or litigate its share." },
      { title: "Escrow-Backed Settlement", description: "Hold and release on schedule. Escrow and Conditional Settlement holds royalty funds and releases them on the defined cadence once production data is confirmed, preventing indefinite delay." },
      { title: "Auditable Distribution", description: "Leave a full trail. Every calculation and payout is recorded, so any beneficiary can audit exactly how their entitlement was computed and when it was paid." },
      { title: "Dispute Prevention", description: "Remove the ambiguity that causes fights. Because inputs, formula, and payouts are all visible and automatic, the common causes of royalty disputes are engineered out rather than arbitrated later." },
    ],
    lifecycleTitle: "The Royalty Distribution Lifecycle",
    lifecycleSubtitle:
      "Follow a quarter of mine production from data submission through formula computation to an automatic community payout.",
    lifecycleSteps: [
      {
        label: "Production Submission",
        description:
          "The operator submits verified production data for the period. The contract anchors the tonnage that will drive the royalty calculation.",
        icon: Pickaxe,
        logFilename: "cerulea_royalty.log",
        logLines: [
          { text: "[SYS] Recording quarterly production for mine JH_07...", time: "08:00:12", tone: "default" },
          { text: "[CMD] submitProduction { mine: \"JH_07\", tonnes: 128000, q: \"Q2\" }", time: "08:00:12", tone: "primary" },
          { text: "[AUTH] Verifying production data source signature...", time: "08:00:13", tone: "secondary" },
          { text: "[OK] Production PRD_2205 anchored at block 7311902.", time: "08:00:13", tone: "success" },
        ],
      },
      {
        label: "Formula Computation",
        description:
          "The contract applies the encoded royalty formula to the production data, computing government and community entitlements transparently.",
        icon: PieChart,
        logFilename: "cerulea_royalty.log",
        logLines: [
          { text: "[SYS] Applying royalty formula to PRD_2205...", time: "08:00:15", tone: "default" },
          { text: "[CMD] computeRoyalty(rate: \"SLAB_A\", tonnes: 128000)", time: "08:00:15", tone: "primary" },
          { text: "[SYS] Splitting entitlement: govt 70, community 30...", time: "08:00:16", tone: "default" },
          { text: "[OK] Entitlements computed. Formula fully visible.", time: "08:00:16", tone: "success" },
        ],
      },
      {
        label: "Escrow Confirmation",
        description:
          "Royalty funds in escrow are confirmed against the computed entitlements, arming the automatic release once the cadence condition is met.",
        icon: Wallet,
        logFilename: "cerulea_royalty.log",
        logLines: [
          { text: "[SYS] Confirming escrow balance for period Q2...", time: "08:00:18", tone: "default" },
          { text: "[CMD] confirmEscrow(PRD_2205, required: 41600000)", time: "08:00:18", tone: "primary" },
          { text: "[SYS] Balance sufficient, arming scheduled release...", time: "08:00:19", tone: "default" },
          { text: "[OK] Escrow confirmed. Payout armed.", time: "08:00:19", tone: "success" },
        ],
      },
      {
        label: "Automatic Payout",
        description:
          "The contract distributes entitlements automatically. A Jharkhand community trust receives its quarterly royalty three days after production data is submitted.",
        icon: Coins,
        logFilename: "cerulea_royalty.log",
        logLines: [
          { text: "[SYS] Distributing entitlements for PRD_2205...", time: "09:12:40", tone: "default" },
          { text: "[CMD] payout(beneficiaries: 5, total: 41600000)", time: "09:12:40", tone: "primary" },
          { text: "[SYS] Crediting government and community trusts...", time: "09:12:41", tone: "default" },
          { text: "[OK] Community paid in 3 days. No lawyers engaged.", time: "09:12:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes royalty distribution into modular contracts. Each layer records, computes, escrows, and pays so that entitlements flow from verified production to every beneficiary automatically and transparently.",
    layers: [
      {
        title: "Production Registry",
        subtitle: "The Output Anchor",
        icon: Pickaxe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Output Anchor",
          description:
            "The foundational data layer. It records verified production tonnage per mine and period, storing the immutable output figure that the royalty formula computes against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ProductionRegistry {\n  struct Output {\n    bytes32 mine;\n    uint256 tonnes;\n    bytes32 period;\n  }\n\n  mapping(bytes32 => Output) public outputs;\n\n  function submitProduction(bytes32 id, bytes32 mine, uint256 tonnes, bytes32 period) external onlyVerified {\n    outputs[id] = Output(mine, tonnes, period);\n  }\n}",
        simAction: "Simulate Production Submission",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying production source for mine JH_07...", tone: "default" },
          { text: "Anchoring 128,000 tonnes for Q2...", tone: "default" },
          { text: "Binding output to reporting period...", tone: "default" },
          { text: "Writing production to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Production PRD_2205 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Royalty Calculator",
        subtitle: "The Transparent Formula",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transparent Formula",
          description:
            "Removes the opaque calculation chain. This contract applies an encoded royalty rate and beneficiary split to verified production, so government, operator, and community all compute the same entitlement from the same visible formula.",
          platformFunction: "Computation & Logic",
        },
        codeSnippet:
          "function computeRoyalty(bytes32 outputId, uint256 rateBps) external view returns (uint256 govt, uint256 community) {\n    uint256 total = outputs[outputId].tonnes * rateBps / 10000;\n    govt = total * 70 / 100;\n    community = total - govt;\n}",
        simAction: "Simulate Formula Computation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verified production PRD_2205...", tone: "default" },
          { text: "Applying encoded royalty slab A...", tone: "default" },
          { text: "Splitting government 70 and community 30...", tone: "default" },
          { text: "Publishing entitlement breakdown...", tone: "default" },
          { text: "[SUCCESS] Entitlements computed transparently.", tone: "success" },
        ],
      },
      {
        title: "Royalty Escrow",
        subtitle: "The Scheduled Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Scheduled Vault",
          description:
            "Holds funds against entitlements. This Escrow and Conditional Settlement contract confirms the balance covers the computed royalty and arms release on the defined cadence, preventing the indefinite delays that plague manual distribution.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function confirmEscrow(bytes32 outputId, uint256 required) external returns (bool) {\n    require(escrowBalance[periodOf[outputId]] >= required, \"Underfunded\");\n    armed[outputId] = true;\n    emit EscrowConfirmed(outputId, required);\n    return true;\n}",
        simAction: "Simulate Escrow Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking escrow balance for Q2...", tone: "default" },
          { text: "Comparing against required entitlement...", tone: "default" },
          { text: "Confirming funds sufficient...", tone: "default" },
          { text: "Arming scheduled payout...", tone: "default" },
          { text: "[SUCCESS] Escrow confirmed, payout armed.", tone: "success" },
        ],
      },
      {
        title: "Payout Router",
        subtitle: "The Beneficiary Splitter",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Beneficiary Splitter",
          description:
            "Pays every beneficiary automatically. This Payouts and Settlements contract credits each government and community account per the computed split and records the movement, so a trust receives its share without filing a claim.",
          platformFunction: "Payouts & Settlement",
        },
        codeSnippet:
          "function payout(bytes32 outputId) external {\n    require(armed[outputId], \"Not armed\");\n    Beneficiary[] memory bs = beneficiaries[outputId];\n    for (uint256 i = 0; i < bs.length; i++) {\n        payable(bs[i].account).transfer(bs[i].amount);\n        emit Paid(outputId, bs[i].account, bs[i].amount);\n    }\n}",
        simAction: "Simulate Automatic Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading armed entitlements for PRD_2205...", tone: "default" },
          { text: "Crediting government treasury account...", tone: "default" },
          { text: "Crediting Jharkhand community trust...", tone: "default" },
          { text: "Recording auditable payout events...", tone: "default" },
          { text: "[SUCCESS] Community paid in 3 days, no dispute.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Formula-driven distribution is a horizontal capability. Here is how different actors in the royalty chain put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Government Treasuries", description: "Receive royalty payments computed automatically from verified production, replacing slow reconciliation and audit cycles with a transparent formula and a complete distribution trail.", assetTypes: ["Royalty Receipts", "Production Records", "Distribution Trails"] },
      { icon: Users, title: "Affected Communities", description: "Receive full entitlements automatically days after production is reported, removing the calculation opacity and delays that once left community trusts short and litigating.", assetTypes: ["Community Payouts", "Entitlement Records", "Audit Access"] },
      { icon: Factory, title: "Mining Operators", description: "Discharge royalty obligations against recorded output with a defensible, auditable trail, avoiding disputes and penalties from contested manual calculation chains.", assetTypes: ["Production Submissions", "Royalty Settlements", "Compliance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a treasury's revenue system or capturing production from a mine's reporting system, Cerulea routes both into one automated royalty ledger.",
    tracks: [
      {
        title: "Track A: Government Revenue Bridging",
        description:
          "For treasuries and mining departments on legacy systems. Production filings and beneficiary rolls are translated into signed on-chain royalty records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Revenue System", sublabel: "Treasury & Dept Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Royalty Distribution Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Operator Production Capture",
        description:
          "For operators reporting production. Verified output is signed from the mine's system and routed directly to the royalty ledger to drive computation.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Mine Reporting App", sublabel: "Operator Systems", icon: Pickaxe, accent: false },
          { label: "Consortium Validators", sublabel: "Royalty Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Automated Royalty Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an automated royalty network with transparent formulas, escrow-backed settlement, and automatic community payouts from scratch requires specialised engineers and long government integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Formula & Payout Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects public revenue system integration benchmarks. Building custom royalty formula logic, escrow-backed scheduling, and automatic multi-beneficiary payouts for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your formula and payout rules into pre-audited WebAssembly binaries and provisions the ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "mine-worker-safety-incident-records-shared-across-operators-and-regula",
    icon: HeartPulse,
    eyebrow: "Safety Registry Layer",
    headline1: "Record every incident.",
    headline2: "Catch the pattern early.",
    heroDescription:
      "Replace fragmented, company-internal safety logs with a shared, immutable incident registry that regulators can cross-reference across operators. Repeat failures surface before they turn fatal, and corrective actions are tracked to closure automatically.",
    heroCta: "Deploy Safety Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn isolated internal incident logs into a shared registry that reveals cross-operator patterns.",
    mechanics: [
      { title: "Immutable Incident Log", description: "Freeze the record at report time. Audit Logs seal each safety incident with a time-stamp, so a report cannot be quietly softened or backdated after the fact." },
      { title: "Cross-Operator Registry", description: "Break the data silos. Incidents from every operator in a coalfield write to one shared registry, so the regulator can cross-reference patterns that internal systems hide." },
      { title: "Pattern Analysis Access", description: "Surface repeat failures. The regulator queries incident types across operators, so a recurring roof-fall or gas hazard is detected as a trend instead of isolated events." },
      { title: "Corrective Action Tracking", description: "Follow fixes to closure. Each incident carries a corrective action that is tracked automatically, so an open safety gap cannot be forgotten between inspections." },
      { title: "Credentialed Reporting", description: "Bind reports to verified officers. The DID and VC Ledger ties each entry to a credentialed safety officer, so the registry records who reported and who signed off." },
      { title: "Verified Attestation", description: "Anchor compliance to the incident. Compliance Attestations link statutory safety confirmations to specific events, giving regulators an evidence-based view of operator response." },
    ],
    lifecycleTitle: "The Safety Incident Lifecycle",
    lifecycleSubtitle:
      "Follow a safety incident from a credentialed report through cross-operator analysis to an industry-wide advisory that prevents a fatality.",
    lifecycleSteps: [
      {
        label: "Incident Report",
        description:
          "A credentialed safety officer reports an incident. The contract seals the type, location, and time-stamp as an immutable entry in the shared registry.",
        icon: HeartPulse,
        logFilename: "cerulea_minesafety.log",
        logLines: [
          { text: "[SYS] Recording safety incident at operator OP_C3...", time: "11:22:05", tone: "default" },
          { text: "[CMD] reportIncident { type: \"ROOF_FALL\", seam: \"S4\", severity: \"HIGH\" }", time: "11:22:05", tone: "primary" },
          { text: "[AUTH] Verifying safety officer credential...", time: "11:22:06", tone: "secondary" },
          { text: "[OK] Incident INC_6641 sealed at block 7511233.", time: "11:22:06", tone: "success" },
        ],
      },
      {
        label: "Registry Anchoring",
        description:
          "The incident is written to the shared cross-operator registry. It becomes immediately visible to the regulator alongside entries from other operators.",
        icon: Database,
        logFilename: "cerulea_minesafety.log",
        logLines: [
          { text: "[SYS] Anchoring INC_6641 to shared registry...", time: "11:22:08", tone: "default" },
          { text: "[CMD] anchorToRegistry(INC_6641, field: \"COALFIELD_11\")", time: "11:22:08", tone: "primary" },
          { text: "[SYS] Exposing entry to regulator view...", time: "11:22:09", tone: "default" },
          { text: "[OK] Incident visible across operators.", time: "11:22:09", tone: "success" },
        ],
      },
      {
        label: "Pattern Analysis",
        description:
          "The regulator runs cross-operator analysis. Three operators reporting the same roof-fall type in one coalfield are identified as a pattern.",
        icon: Search,
        logFilename: "cerulea_minesafety.log",
        logLines: [
          { text: "[SYS] DGMS running coalfield pattern query...", time: "14:40:51", tone: "default" },
          { text: "[CMD] analyzePattern(field: \"COALFIELD_11\", type: \"ROOF_FALL\")", time: "14:40:51", tone: "primary" },
          { text: "[SYS] Correlating incidents across 3 operators...", time: "14:40:52", tone: "default" },
          { text: "[OK] Repeat pattern detected. Advisory triggered.", time: "14:40:52", tone: "secondary" },
        ],
      },
      {
        label: "Corrective Action",
        description:
          "An industry-wide safety advisory is issued and corrective actions are tracked to closure across the operators before a fatality occurs.",
        icon: FileCheck,
        logFilename: "cerulea_minesafety.log",
        logLines: [
          { text: "[SYS] Issuing advisory to coalfield operators...", time: "15:05:33", tone: "default" },
          { text: "[CMD] trackAction(advisory: \"ADV_ROOF_11\", operators: 3)", time: "15:05:33", tone: "primary" },
          { text: "[SYS] Monitoring corrective action to closure...", time: "15:05:34", tone: "default" },
          { text: "[OK] Advisory issued before a fatality occurs.", time: "15:05:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the safety registry into modular contracts. Each layer reports, anchors, analyzes, and tracks so that incidents are immutable, shared, and acted upon across operators.",
    layers: [
      {
        title: "Incident Log",
        subtitle: "The Immutable Record",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Immutable Record",
          description:
            "The foundational data layer. It seals each safety incident with its type, location, severity, and time-stamp through Audit Logs, storing a record that cannot be softened or backdated after reporting.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract IncidentLog {\n  struct Incident {\n    bytes32 operator;\n    bytes32 kind;\n    uint8 severity;\n    uint256 ts;\n  }\n\n  mapping(bytes32 => Incident) public incidents;\n\n  function report(bytes32 id, bytes32 operator, bytes32 kind, uint8 sev) external onlyOfficer {\n    incidents[id] = Incident(operator, kind, sev, block.timestamp);\n  }\n}",
        simAction: "Simulate Incident Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying safety officer credential...", tone: "default" },
          { text: "Sealing roof-fall incident with time-stamp...", tone: "default" },
          { text: "Tagging operator and seam location...", tone: "default" },
          { text: "Writing incident to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Incident INC_6641 sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Shared Registry",
        subtitle: "The Cross-Operator View",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cross-Operator View",
          description:
            "Breaks internal silos. This contract writes every operator's incidents to one registry keyed by coalfield, so the regulator sees a unified dataset instead of disconnected company logs.",
          platformFunction: "Shared State",
        },
        codeSnippet:
          "function anchorToRegistry(bytes32 incidentId, bytes32 field) external {\n    registry[field].push(incidentId);\n    emit RegistryAnchored(field, incidentId);\n}",
        simAction: "Simulate Registry Anchoring",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading incident INC_6641...", tone: "default" },
          { text: "Appending to coalfield 11 registry...", tone: "default" },
          { text: "Exposing entry to regulator key...", tone: "default" },
          { text: "Confirming cross-operator visibility...", tone: "default" },
          { text: "[SUCCESS] Incident shared across operators.", tone: "success" },
        ],
      },
      {
        title: "Pattern Engine",
        subtitle: "The Trend Detector",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trend Detector",
          description:
            "Surfaces repeat failures. This contract lets the regulator correlate incident types across operators in a coalfield, turning isolated reports into a detectable pattern that triggers a proactive advisory.",
          platformFunction: "Analysis & Verification",
        },
        codeSnippet:
          "function analyzePattern(bytes32 field, bytes32 kind) external view returns (uint256 count, bytes32[] memory ops) {\n    return correlate(registry[field], kind);\n}",
        simAction: "Simulate Pattern Analysis",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "DGMS querying coalfield 11 registry...", tone: "default" },
          { text: "Filtering for roof-fall incident type...", tone: "default" },
          { text: "Correlating across 3 operators...", tone: "default" },
          { text: "Flagging recurring hazard pattern...", tone: "default" },
          { text: "[SUCCESS] Repeat pattern detected for review.", tone: "success" },
        ],
      },
      {
        title: "Action Tracker",
        subtitle: "The Closure Monitor",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Closure Monitor",
          description:
            "Follows fixes to completion. This contract binds a corrective action to each advisory and tracks it across operators, so a safety gap is closed and verified rather than lost between inspections.",
          platformFunction: "Workflow & Attestation",
        },
        codeSnippet:
          "function trackAction(bytes32 advisory, bytes32[] calldata operators) external onlyRegulator {\n    for (uint256 i = 0; i < operators.length; i++) {\n        actions[advisory][operators[i]] = Status.Open;\n    }\n    emit ActionTracked(advisory, operators.length);\n}",
        simAction: "Simulate Corrective Action",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Issuing advisory ADV_ROOF_11...", tone: "default" },
          { text: "Assigning corrective action to 3 operators...", tone: "default" },
          { text: "Opening tracking status per operator...", tone: "default" },
          { text: "Monitoring each action to closure...", tone: "default" },
          { text: "[SUCCESS] Advisory issued, fatality prevented.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared incident intelligence is a horizontal capability. Here is how different actors around mine safety put the registry to work.",
    sectors: [
      { icon: Landmark, title: "Safety Regulators", description: "Cross-reference incident patterns across every operator in a field, issuing proactive advisories on recurring hazards instead of reacting to fatalities after fragmented company logs are pieced together.", assetTypes: ["Incident Registries", "Pattern Reports", "Safety Advisories"] },
      { icon: Factory, title: "Mining Operators", description: "Report incidents into a shared, immutable registry and track corrective actions to closure, demonstrating a defensible safety record and learning from peers in the same coalfield.", assetTypes: ["Incident Reports", "Corrective Actions", "Compliance Attestations"] },
      { icon: Users, title: "Workers & Unions", description: "Gain confidence that safety incidents are recorded immutably and acted upon, so recurring hazards affecting the workforce are surfaced and closed rather than quietly filed away.", assetTypes: ["Immutable Records", "Hazard Trends", "Closure Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an operator's internal EHS system or capturing reports from a safety officer's device, Cerulea routes both into one shared incident registry.",
    tracks: [
      {
        title: "Track A: Operator EHS Bridging",
        description:
          "For operators on internal safety systems. Existing incident records are translated into signed on-chain registry entries through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Internal EHS System", sublabel: "Operator Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Incident Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Safety Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Officer Capture",
        description:
          "For safety officers reporting on-site. Incidents are signed from a credentialed device wallet and routed directly to the shared registry.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Officer App / Wallet", sublabel: "Safety Officer Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Registry Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Immutable Incident Record", icon: HeartPulse, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared safety registry with immutable reporting, cross-operator pattern analysis, and corrective action tracking from scratch requires specialised engineers and long multi-operator integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Reporting & Tracking Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects multi-party safety system integration benchmarks. Consolidating each operator's internal logs, building immutable reporting and cross-operator pattern analysis, and shipping corrective action tracking takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your reporting and tracking rules into pre-audited WebAssembly binaries and provisions the shared registry and analysis layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "tailings-dam-safety-inspection-and-monitoring-records",
    icon: Radio,
    eyebrow: "Dam Integrity Monitoring Layer",
    headline1: "Watch the dam.",
    headline2: "Never miss a warning.",
    heroDescription:
      "Keep a continuous, verified record of tailings dam inspections and sensor monitoring, with automatic alerts on any anomaly. Inspection reports and live sensor data are anchored as verified records, so no warning sign is filed away unread as it has been before past disasters.",
    heroCta: "Deploy Dam Monitoring",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn inspection reports that get filed and forgotten into a live, verified record that raises alarms.",
    mechanics: [
      { title: "Continuous Sensor Feed", description: "Watch the structure in real time. External Data Oracles stream piezometer, displacement, and pore-pressure readings on-chain continuously, so dam integrity is monitored rather than checked occasionally." },
      { title: "Anchored Inspections", description: "Seal every inspection. Audit Logs anchor each inspection report so it becomes a verified record that is genuinely reviewed, not just a document filed away in a drawer." },
      { title: "Automatic Anomaly Alert", description: "Escalate the warning. When monitoring data crosses a threshold, the contract fires an immediate alert to safety officials, so an anomaly is surfaced the moment it appears." },
      { title: "Threshold Attestation", description: "Bind safe limits to the record. Compliance Attestations encode the design thresholds against the dam, so a breach is measured against a verified standard rather than a subjective read." },
      { title: "Tamper-Evident History", description: "Preserve the full timeline. Every reading and inspection is time-stamped and immutable, so investigators and regulators have an unbroken record of what the dam did and when." },
      { title: "Escalation Trail", description: "Prove the alarm was raised. Each alert and its acknowledgement is logged, so the record shows a warning reached officials rather than dying in an inbox." },
    ],
    lifecycleTitle: "The Dam Monitoring Lifecycle",
    lifecycleSubtitle:
      "Follow a tailings dam from a registered inspection through continuous sensor streaming to an automatic anomaly alert reaching safety officials.",
    lifecycleSteps: [
      {
        label: "Inspection Anchoring",
        description:
          "A safety engineer anchors an inspection report. The contract seals the findings and thresholds as a verified record tied to the dam.",
        icon: FileCheck,
        logFilename: "cerulea_tailings.log",
        logLines: [
          { text: "[SYS] Anchoring inspection report for dam TD_09...", time: "07:15:24", tone: "default" },
          { text: "[CMD] anchorInspection { dam: \"TD_09\", result: \"PASS\", freeboard: 1.8 }", time: "07:15:24", tone: "primary" },
          { text: "[AUTH] Verifying engineer credential and thresholds...", time: "07:15:25", tone: "secondary" },
          { text: "[OK] Inspection INS_4420 sealed at block 7611044.", time: "07:15:25", tone: "success" },
        ],
      },
      {
        label: "Sensor Streaming",
        description:
          "Piezometers and displacement sensors stream readings through oracles. Each verified reading is anchored to the dam's continuous monitoring record.",
        icon: Radio,
        logFilename: "cerulea_tailings.log",
        logLines: [
          { text: "[SYS] Streaming sensor readings for TD_09...", time: "07:20:00", tone: "default" },
          { text: "[CMD] pushReading(piezo: 142, displ: 3.1, pore: 88)", time: "07:20:00", tone: "primary" },
          { text: "[AUTH] Oracle signing device outputs...", time: "07:20:01", tone: "secondary" },
          { text: "[OK] Reading anchored. Monitoring continuous.", time: "07:20:01", tone: "success" },
        ],
      },
      {
        label: "Anomaly Detection",
        description:
          "A pore-pressure reading crosses the attested threshold. The contract detects the anomaly against the encoded safe limit and prepares an alert.",
        icon: Thermometer,
        logFilename: "cerulea_tailings.log",
        logLines: [
          { text: "[SYS] Evaluating reading against thresholds...", time: "02:41:17", tone: "default" },
          { text: "[CMD] checkThreshold(dam: \"TD_09\", pore: 121, limit: 110)", time: "02:41:17", tone: "primary" },
          { text: "[SYS] Pore pressure exceeds attested safe limit...", time: "02:41:17", tone: "default" },
          { text: "[OK] Anomaly detected. Alert armed.", time: "02:41:18", tone: "error" },
        ],
      },
      {
        label: "Official Alert",
        description:
          "An immediate alert is fired to safety officials with the anomaly and its record. The escalation is logged, ensuring the warning is not missed.",
        icon: ShieldCheck,
        logFilename: "cerulea_tailings.log",
        logLines: [
          { text: "[SYS] Dispatching anomaly alert for TD_09...", time: "02:41:19", tone: "default" },
          { text: "[CMD] alertOfficials(INS_4420, level: \"CRITICAL\")", time: "02:41:19", tone: "primary" },
          { text: "[SYS] Logging escalation and acknowledgement...", time: "02:41:20", tone: "default" },
          { text: "[OK] Officials alerted immediately. No sign missed.", time: "02:41:20", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes dam monitoring into modular contracts. Each layer anchors, streams, evaluates, and escalates so that inspection and sensor data are verified, continuous, and impossible to ignore.",
    layers: [
      {
        title: "Inspection Registry",
        subtitle: "The Verified Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Record",
          description:
            "The foundational data layer. It anchors each inspection report through Audit Logs and stores the attested safe thresholds for the dam, so findings are a reviewed record rather than a filed-away document.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract InspectionRegistry {\n  struct Inspection {\n    bytes32 dam;\n    bytes32 result;\n    uint256 poreLimit;\n    uint256 ts;\n  }\n\n  mapping(bytes32 => Inspection) public inspections;\n\n  function anchorInspection(bytes32 id, bytes32 dam, bytes32 result, uint256 poreLimit) external onlyEngineer {\n    inspections[id] = Inspection(dam, result, poreLimit, block.timestamp);\n  }\n}",
        simAction: "Simulate Inspection Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying engineer credential for dam TD_09...", tone: "default" },
          { text: "Sealing inspection result and freeboard...", tone: "default" },
          { text: "Storing attested pore-pressure limit...", tone: "default" },
          { text: "Writing inspection to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Inspection INS_4420 sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Sensor Oracle",
        subtitle: "The Live Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Feed",
          description:
            "Streams the structure's vitals. This External Data Oracles contract admits signed piezometer, displacement, and pore-pressure readings continuously, anchoring each to the dam so monitoring is real time rather than periodic.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function pushReading(bytes32 dam, uint256 pore, bytes memory sig) external {\n    require(verifyOracle(sig), \"Bad signature\");\n    readings[dam].push(Reading(pore, block.timestamp));\n    emit ReadingAnchored(dam, pore, block.timestamp);\n}",
        simAction: "Simulate Sensor Streaming",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving piezometer and pore readings...", tone: "default" },
          { text: "Verifying oracle device signatures...", tone: "default" },
          { text: "Anchoring reading to dam TD_09...", tone: "default" },
          { text: "Maintaining continuous monitoring stream...", tone: "default" },
          { text: "[SUCCESS] Sensor reading anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Threshold Evaluator",
        subtitle: "The Safe-Limit Check",
        icon: Thermometer,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Safe-Limit Check",
          description:
            "Measures data against verified limits. This contract compares each reading with the attested threshold and flags an anomaly the moment a value crosses it, so a breach is caught objectively at the protocol level.",
          platformFunction: "Anomaly Detection",
        },
        codeSnippet:
          "function checkThreshold(bytes32 dam, uint256 pore) external view returns (bool breach) {\n    uint256 limit = attestedLimit[dam];\n    return pore > limit;\n}",
        simAction: "Simulate Anomaly Detection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading latest pore-pressure reading...", tone: "default" },
          { text: "Comparing 121 against attested limit 110...", tone: "default" },
          { text: "Detecting threshold breach...", tone: "default" },
          { text: "Arming critical anomaly alert...", tone: "default" },
          { text: "[SUCCESS] Anomaly detected against safe limit.", tone: "success" },
        ],
      },
      {
        title: "Alert Dispatcher",
        subtitle: "The Escalation Trail",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Escalation Trail",
          description:
            "Guarantees the warning lands. This contract fires an immediate alert to safety officials on any anomaly and logs the escalation and acknowledgement, so a warning sign reaches a decision maker rather than dying in a filing system.",
          platformFunction: "Escalation & Attestation",
        },
        codeSnippet:
          "function alertOfficials(bytes32 dam, uint8 level) external {\n    require(breachOpen[dam], \"No breach\");\n    emit CriticalAlert(dam, level, block.timestamp);\n    escalations[dam].push(Escalation(level, block.timestamp, false));\n}",
        simAction: "Simulate Official Alert",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading open breach for dam TD_09...", tone: "default" },
          { text: "Dispatching critical alert to officials...", tone: "default" },
          { text: "Recording escalation on-chain...", tone: "default" },
          { text: "Awaiting acknowledgement...", tone: "default" },
          { text: "[SUCCESS] Officials alerted, warning not missed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified continuous monitoring is a horizontal capability. Here is how different actors around tailings safety put the record to work.",
    sectors: [
      { icon: Factory, title: "Mine Operators", description: "Move from periodic manual checks to continuous verified monitoring, demonstrating that inspection and sensor data are genuinely reviewed and that anomalies trigger immediate escalation.", assetTypes: ["Inspection Records", "Sensor Streams", "Escalation Logs"] },
      { icon: Landmark, title: "Dam Safety Regulators", description: "Hold an immutable, real-time view of every monitored dam, confirming that warning signs are surfaced and acted upon rather than filed away as they were before past failures.", assetTypes: ["Monitoring Records", "Threshold Attestations", "Anomaly Alerts"] },
      { icon: Users, title: "Downstream Communities", description: "Gain assurance that structures upstream are continuously watched and that a critical anomaly reaches officials immediately, reducing the risk of an unnoticed failure.", assetTypes: ["Alert Trails", "Safety Attestations", "Audit History"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a monitoring system's data historian or streaming readings straight from field sensors, Cerulea routes both into one verified dam monitoring record.",
    tracks: [
      {
        title: "Track A: Monitoring System Bridging",
        description:
          "For operators on legacy dam monitoring and SCADA systems. Existing inspection and sensor data are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy SCADA / Historian", sublabel: "Monitoring Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Dam Monitoring Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Sensor Capture",
        description:
          "For piezometers and displacement sensors on the structure. Signed readings are routed directly to the monitoring record from device oracles.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Dam Sensors / IoT", sublabel: "Structure Devices", icon: Radio, accent: false },
          { label: "Data Oracles", sublabel: "Device Attestation", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Continuous Monitoring Record", icon: Thermometer, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verified dam monitoring network with anchored inspections, continuous sensor streaming, and automatic anomaly alerting from scratch requires specialised engineers and long instrumentation integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Monitoring & Alert Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects industrial monitoring integration benchmarks. Wiring sensor historians, building oracle-signed streaming and threshold evaluation, and shipping an escalation and alert layer for an average dam takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your monitoring and alert rules into pre-audited WebAssembly binaries and provisions the record and escalation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "mineral-export-quota-allocation-and-compliance-tracking",
    icon: Gavel,
    eyebrow: "Export Quota Settlement Layer",
    headline1: "Allocate the quota.",
    headline2: "Stop the over-export.",
    heroDescription:
      "Track each mining company's export quota allocation and actual shipments against it across every port, preventing over-export that starves domestic industry. Companies approaching or exceeding their quota are flagged automatically for the licensing authority.",
    heroCta: "Deploy Quota Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn scattered, unconsolidated shipment records into a live count of exports against allocated quota.",
    mechanics: [
      { title: "Quota Allocation Registry", description: "Record every allocation on-chain. Compliance Attestations anchor each company's export quota against a period, so the licensing authority works from one authoritative allocation record." },
      { title: "Shipment Reconciliation", description: "Count exports against the cap. The Traceability Ledger reconciles each verified shipment against the company's remaining quota, consolidating volumes across ports that were previously tracked separately." },
      { title: "Over-Export Prevention", description: "Block the breach at source. When a shipment would push a company past its allocation, the contract flags it before clearance, preventing over-export rather than discovering it after the fact." },
      { title: "Threshold Flagging", description: "Warn before the limit. Companies approaching their quota are flagged automatically, giving the authority early visibility instead of a year-end surprise." },
      { title: "Consolidated Tracking", description: "Unify the view across ports. Shipments from every port write to one quota ledger, so a company cannot stay under its cap at each port while exceeding it in aggregate." },
      { title: "Audit-Ready Trail", description: "Leave a defensible record. Audit Logs seal each allocation, shipment, and flag, so quota compliance can be reviewed against an immutable, time-stamped history." },
    ],
    lifecycleTitle: "The Export Quota Lifecycle",
    lifecycleSubtitle:
      "Follow a mining company's export quota from allocation through consolidated shipment reconciliation to an automatic threshold flag.",
    lifecycleSteps: [
      {
        label: "Quota Allocation",
        description:
          "The licensing authority allocates an export quota to a company for the period. The contract anchors the allocation as the ceiling all shipments count against.",
        icon: Gavel,
        logFilename: "cerulea_exportquota.log",
        logLines: [
          { text: "[SYS] Recording export quota allocation...", time: "09:30:07", tone: "default" },
          { text: "[CMD] allocateQuota { company: \"MC_31\", mineral: \"IRON_ORE\", tonnes: 500000 }", time: "09:30:07", tone: "primary" },
          { text: "[AUTH] Verifying licensing authority signature...", time: "09:30:08", tone: "secondary" },
          { text: "[OK] Quota QTA_1180 anchored at block 7711560.", time: "09:30:08", tone: "success" },
        ],
      },
      {
        label: "Shipment Reconciliation",
        description:
          "A verified export shipment is reconciled against the company's remaining quota across all ports, consolidating volumes into one running total.",
        icon: Truck,
        logFilename: "cerulea_exportquota.log",
        logLines: [
          { text: "[SYS] Reconciling shipment for company MC_31...", time: "13:14:52", tone: "default" },
          { text: "[CMD] reconcileShipment(QTA_1180, port: \"PARADIP\", tonnes: 42000)", time: "13:14:52", tone: "primary" },
          { text: "[SYS] Updating consolidated used total across ports...", time: "13:14:53", tone: "default" },
          { text: "[OK] Used 428,000 of 500,000 tonnes.", time: "13:14:53", tone: "success" },
        ],
      },
      {
        label: "Threshold Flag",
        description:
          "The running total crosses the warning threshold. The contract flags the company as approaching its quota for the licensing authority.",
        icon: PieChart,
        logFilename: "cerulea_exportquota.log",
        logLines: [
          { text: "[SYS] Evaluating usage against quota threshold...", time: "13:14:55", tone: "default" },
          { text: "[CMD] checkThreshold(QTA_1180, warnAt: 85)", time: "13:14:55", tone: "primary" },
          { text: "[SYS] Usage at 86 percent of allocation...", time: "13:14:55", tone: "default" },
          { text: "[OK] Company flagged as approaching quota.", time: "13:14:56", tone: "secondary" },
        ],
      },
      {
        label: "Authority Review",
        description:
          "The licensing authority reviews the flag with a full trail. A further shipment that would exceed the quota is blocked before clearance.",
        icon: FileCheck,
        logFilename: "cerulea_exportquota.log",
        logLines: [
          { text: "[SYS] Authority reviewing flagged company MC_31...", time: "15:48:31", tone: "default" },
          { text: "[CMD] evaluateShipment(QTA_1180, tonnes: 90000)", time: "15:48:31", tone: "primary" },
          { text: "[SYS] Shipment would exceed remaining 72,000...", time: "15:48:32", tone: "default" },
          { text: "[OK] Over-export blocked before clearance.", time: "15:48:32", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes export quota tracking into modular contracts. Each layer allocates, reconciles, flags, and reviews so that shipments across every port stay within the allocation the authority granted.",
    layers: [
      {
        title: "Allocation Registry",
        subtitle: "The Quota Ceiling",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Quota Ceiling",
          description:
            "The foundational data layer. It anchors each company's export quota per mineral and period through Compliance Attestations, storing the immutable ceiling that every shipment is reconciled against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AllocationRegistry {\n  struct Quota {\n    bytes32 company;\n    bytes32 mineral;\n    uint256 cap;\n    uint256 used;\n  }\n\n  mapping(bytes32 => Quota) public quotas;\n\n  function allocateQuota(bytes32 id, bytes32 company, bytes32 mineral, uint256 cap) external onlyAuthority {\n    quotas[id] = Quota(company, mineral, cap, 0);\n  }\n}",
        simAction: "Simulate Quota Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying licensing authority signature...", tone: "default" },
          { text: "Anchoring 500,000 tonne iron ore cap...", tone: "default" },
          { text: "Binding quota to company MC_31...", tone: "default" },
          { text: "Writing allocation to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Quota QTA_1180 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation Ledger",
        subtitle: "The Consolidated Count",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consolidated Count",
          description:
            "Unifies shipments across ports. This Traceability Ledger contract adds each verified export to a single running total per company, so volumes cannot be spread across ports to hide an aggregate breach.",
          platformFunction: "Reconciliation & Workflow",
        },
        codeSnippet:
          "function reconcileShipment(bytes32 quotaId, uint256 tonnes) external onlyPort {\n    Quota storage q = quotas[quotaId];\n    q.used += tonnes;\n    emit ShipmentReconciled(quotaId, tonnes, q.used);\n}",
        simAction: "Simulate Shipment Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading quota QTA_1180 for MC_31...", tone: "default" },
          { text: "Adding 42,000 tonne Paradip shipment...", tone: "default" },
          { text: "Consolidating used total across ports...", tone: "default" },
          { text: "Recording running usage 428,000 tonnes...", tone: "default" },
          { text: "[SUCCESS] Shipment reconciled against quota.", tone: "success" },
        ],
      },
      {
        title: "Threshold Monitor",
        subtitle: "The Early Warning",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Early Warning",
          description:
            "Flags before the breach. This contract compares consolidated usage against the allocation and raises a flag when a company approaches its quota, giving the authority early warning instead of a year-end discovery.",
          platformFunction: "Monitoring & Verification",
        },
        codeSnippet:
          "function checkThreshold(bytes32 quotaId, uint256 warnPct) external view returns (bool flag) {\n    Quota memory q = quotas[quotaId];\n    return q.used * 100 / q.cap >= warnPct;\n}",
        simAction: "Simulate Threshold Flag",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading consolidated usage for QTA_1180...", tone: "default" },
          { text: "Computing usage against 500,000 cap...", tone: "default" },
          { text: "Detecting 86 percent of allocation used...", tone: "default" },
          { text: "Raising approaching-quota flag...", tone: "default" },
          { text: "[SUCCESS] Company flagged for authority.", tone: "success" },
        ],
      },
      {
        title: "Clearance Gate",
        subtitle: "The Over-Export Block",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Over-Export Block",
          description:
            "Stops the breach at clearance. This contract evaluates a proposed shipment against the remaining quota and blocks any that would exceed it, so over-export is prevented rather than penalised after the goods have shipped.",
          platformFunction: "Compliance Enforcement",
        },
        codeSnippet:
          "function evaluateShipment(bytes32 quotaId, uint256 tonnes) external view returns (bool allowed) {\n    Quota memory q = quotas[quotaId];\n    return q.used + tonnes <= q.cap;\n}",
        simAction: "Simulate Authority Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Authority evaluating proposed 90,000t shipment...", tone: "default" },
          { text: "Checking against remaining 72,000t quota...", tone: "default" },
          { text: "Detecting shipment would exceed cap...", tone: "default" },
          { text: "Blocking clearance for over-export...", tone: "default" },
          { text: "[SUCCESS] Over-export prevented at source.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Consolidated quota tracking is a horizontal capability. Here is how different actors around mineral exports put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Licensing Authorities", description: "Track every company's allocation against consolidated shipments across all ports, flagging those approaching their quota and blocking over-export that would starve domestic industry.", assetTypes: ["Quota Allocations", "Threshold Flags", "Clearance Records"] },
      { icon: Factory, title: "Mining Exporters", description: "See a live view of remaining quota across ports, planning shipments with certainty and avoiding penalties from inadvertent over-export hidden by fragmented port-level tracking.", assetTypes: ["Export Shipments", "Remaining Quota", "Compliance Trails"] },
      { icon: Truck, title: "Ports & Customs", description: "Clear shipments against a consolidated quota check rather than isolated port records, ensuring a company under its cap at one port is not exceeding it in aggregate.", assetTypes: ["Shipment Records", "Port Reconciliations", "Clearance Gates"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a licensing authority's system or capturing shipments from port customs, Cerulea routes both into one consolidated export quota ledger.",
    tracks: [
      {
        title: "Track A: Authority System Bridging",
        description:
          "For licensing and mining authorities on legacy systems. Quota allocations and rolls are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Licensing DB", sublabel: "Authority Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Quota Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Export Quota Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Port Shipment Capture",
        description:
          "For ports and customs recording exports. Verified shipments are signed at the terminal and routed directly to the quota ledger for consolidated reconciliation.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Port Customs App", sublabel: "Terminal Systems", icon: Truck, accent: false },
          { label: "Consortium Validators", sublabel: "Quota Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Consolidated Quota Record", icon: Gavel, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a consolidated export quota network with allocation attestation, multi-port reconciliation, and over-export prevention from scratch requires specialised engineers and long cross-port integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Allocation & Reconciliation Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects cross-port compliance integration benchmarks. Consolidating shipment data across ports, building allocation attestation and running reconciliation, and shipping over-export prevention for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your allocation and reconciliation rules into pre-audited WebAssembly binaries and provisions the ledger and clearance layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "mine-worker-provident-fund-contribution-verification",
    icon: IdCard,
    eyebrow: "Provident Fund Attestation Layer",
    headline1: "Verify every contribution.",
    headline2: "Cover every contract worker.",
    heroDescription:
      "Confirm that provident fund contributions were made correctly for every mine worker, including contract and subcontractor-employed labour. Contributions are checked against each worker's verified employment record regardless of which subcontractor employs them, giving the mining company and fund trustee a complete compliance picture.",
    heroCta: "Deploy Fund Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a common subcontractor compliance gap into a verified match between employment and contribution.",
    mechanics: [
      { title: "Verified Worker Registry", description: "Give every worker a record. The Civil Registry anchors each mine worker's verified identity and employment, so contributions are checked against a real person rather than a subcontractor's payroll claim." },
      { title: "Subcontractor-Agnostic View", description: "Cover labour across every layer. Contributions are tracked regardless of which subcontractor employs a worker, closing the gap where contract labour is left out of the compliance picture." },
      { title: "Contribution Attestation", description: "Anchor each payment. Compliance Attestations bind each provident fund contribution to a worker and period, so a recorded contribution is evidence rather than a spreadsheet entry." },
      { title: "Employment Matching", description: "Reconcile pay to work. Each contribution is matched against the worker's verified employment record, so a missing or short contribution surfaces automatically against the days worked." },
      { title: "Trustee Compliance Picture", description: "Give the trustee the whole view. The mining company and fund trustee see a complete, worker-level compliance status across direct and contract labour in one place." },
      { title: "Immutable Audit Trail", description: "Record every check. Audit Logs seal each attestation and match result, so the company can prove compliance and limit liability exposure with a time-stamped history." },
    ],
    lifecycleTitle: "The Contribution Verification Lifecycle",
    lifecycleSubtitle:
      "Follow a contract worker from a verified employment record through a contribution attestation to a complete compliance picture for the trustee.",
    lifecycleSteps: [
      {
        label: "Worker Registration",
        description:
          "A mine worker's verified identity and employment are registered, including the subcontractor that employs them, as the basis for contribution checks.",
        icon: Users,
        logFilename: "cerulea_pfverify.log",
        logLines: [
          { text: "[SYS] Registering worker via Civil Registry...", time: "08:40:19", tone: "default" },
          { text: "[CMD] registerWorker { id: \"WK_88213\", sub: \"SUBCON_14\", role: \"HAULER\" }", time: "08:40:19", tone: "primary" },
          { text: "[AUTH] Verifying worker identity and engagement...", time: "08:40:20", tone: "secondary" },
          { text: "[OK] Worker WK_88213 anchored at block 7811990.", time: "08:40:20", tone: "success" },
        ],
      },
      {
        label: "Contribution Attestation",
        description:
          "The subcontractor attests a provident fund contribution for the worker and period. The attestation is sealed against the worker's record.",
        icon: Coins,
        logFilename: "cerulea_pfverify.log",
        logLines: [
          { text: "[SYS] Recording PF contribution for WK_88213...", time: "12:05:47", tone: "default" },
          { text: "[CMD] attestContribution(worker: \"WK_88213\", month: \"2026-08\", amt: 2400)", time: "12:05:47", tone: "primary" },
          { text: "[AUTH] Binding contribution to subcontractor SUBCON_14...", time: "12:05:48", tone: "secondary" },
          { text: "[OK] Contribution CTR_5591 attested on-chain.", time: "12:05:48", tone: "success" },
        ],
      },
      {
        label: "Employment Matching",
        description:
          "The contract matches the contribution against the worker's verified employment. A short or missing contribution is flagged automatically.",
        icon: FileCheck,
        logFilename: "cerulea_pfverify.log",
        logLines: [
          { text: "[SYS] Matching contribution to employment record...", time: "12:05:50", tone: "default" },
          { text: "[CMD] reconcile(WK_88213, month: \"2026-08\", daysWorked: 26)", time: "12:05:50", tone: "primary" },
          { text: "[SYS] Verifying amount against days worked...", time: "12:05:51", tone: "default" },
          { text: "[OK] Contribution matches employment. Compliant.", time: "12:05:51", tone: "success" },
        ],
      },
      {
        label: "Trustee Review",
        description:
          "The mining company and fund trustee query the worker-level status, seeing a complete compliance picture across direct and contract labour.",
        icon: ShieldCheck,
        logFilename: "cerulea_pfverify.log",
        logLines: [
          { text: "[SYS] Trustee opening compliance picture...", time: "16:22:03", tone: "default" },
          { text: "[CMD] complianceStatus(mine: \"RM_44\", period: \"2026-08\")", time: "16:22:03", tone: "primary" },
          { text: "[SYS] Aggregating direct and contract labour...", time: "16:22:04", tone: "default" },
          { text: "[OK] Complete picture returned. No gaps found.", time: "16:22:04", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes contribution verification into modular contracts. Each layer registers, attests, matches, and reports so that provident fund compliance covers every worker regardless of the subcontractor between them and the mine.",
    layers: [
      {
        title: "Worker Registry",
        subtitle: "The Verified Identity",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Identity",
          description:
            "The foundational data layer. It anchors each worker's verified identity and employment through the Civil Registry, including the employing subcontractor, so contributions attach to a real person rather than a payroll line.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract WorkerRegistry {\n  struct Worker {\n    bytes32 subcontractor;\n    bytes32 role;\n    bool active;\n  }\n\n  mapping(bytes32 => Worker) public workers;\n\n  function registerWorker(bytes32 id, bytes32 sub, bytes32 role) external onlyVerifier {\n    workers[id] = Worker(sub, role, true);\n  }\n}",
        simAction: "Simulate Worker Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying worker identity via Civil Registry...", tone: "default" },
          { text: "Binding worker to subcontractor SUBCON_14...", tone: "default" },
          { text: "Recording role and engagement...", tone: "default" },
          { text: "Writing worker record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Worker WK_88213 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Contribution Attestor",
        subtitle: "The Payment Seal",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Payment Seal",
          description:
            "Anchors each contribution. This Compliance Attestations contract binds a provident fund payment to a specific worker, subcontractor, and month, turning a contribution into verifiable evidence rather than a self-reported figure.",
          platformFunction: "Attestation & Metadata",
        },
        codeSnippet:
          "function attestContribution(bytes32 worker, bytes32 month, uint256 amount) external {\n    require(workers[worker].active, \"Unknown worker\");\n    contributions[worker][month] = Contribution(msg.sender, amount, block.timestamp);\n    emit ContributionAttested(worker, month, amount);\n}",
        simAction: "Simulate Contribution Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Subcontractor submitting PF contribution...", tone: "default" },
          { text: "Confirming worker WK_88213 is active...", tone: "default" },
          { text: "Binding 2400 amount to August period...", tone: "default" },
          { text: "Sealing contribution on-chain...", tone: "default" },
          { text: "[SUCCESS] Contribution CTR_5591 attested.", tone: "success" },
        ],
      },
      {
        title: "Matching Engine",
        subtitle: "The Employment Reconciler",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Employment Reconciler",
          description:
            "Reconciles pay to work. This contract matches each contribution against the worker's verified employment and days worked, flagging a short or missing payment automatically so a compliance gap cannot hide behind a subcontractor.",
          platformFunction: "Reconciliation & Verification",
        },
        codeSnippet:
          "function reconcile(bytes32 worker, bytes32 month, uint256 daysWorked) external view returns (bool compliant) {\n    uint256 expected = daysWorked * dailyRate[worker];\n    uint256 paid = contributions[worker][month].amount;\n    return paid >= expected;\n}",
        simAction: "Simulate Employment Matching",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading contribution for WK_88213...", tone: "default" },
          { text: "Reading verified 26 days worked...", tone: "default" },
          { text: "Computing expected contribution...", tone: "default" },
          { text: "Matching paid amount against expected...", tone: "default" },
          { text: "[SUCCESS] Contribution matches employment.", tone: "success" },
        ],
      },
      {
        title: "Compliance Window",
        subtitle: "The Trustee View",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trustee View",
          description:
            "Assembles the whole picture. This read-only contract aggregates worker-level compliance across direct and contract labour, giving the mining company and fund trustee a complete status and an immutable audit trail.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function complianceStatus(bytes32 mine, bytes32 period) external view returns (uint256 covered, uint256 gaps) {\n    return tally(mine, period);\n}",
        simAction: "Simulate Trustee Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Trustee opening compliance picture...", tone: "default" },
          { text: "Aggregating direct and contract workers...", tone: "default" },
          { text: "Counting covered contributions and gaps...", tone: "default" },
          { text: "Assembling worker-level status...", tone: "default" },
          { text: "[SUCCESS] Complete picture returned, no gaps.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Employment-matched contribution proof is a horizontal capability. Here is how different actors around mine labour put the verified record to work.",
    sectors: [
      { icon: Factory, title: "Mining Companies", description: "Prove provident fund contributions were made for every worker across all subcontractors, closing the compliance gap that exposes the company to liability for contract labour.", assetTypes: ["Worker Registries", "Contribution Proofs", "Compliance Status"] },
      { icon: Landmark, title: "Fund Trustees & Regulators", description: "Read a complete, worker-level compliance picture reconciled against verified employment, replacing self-reported subcontractor spreadsheets with an auditable on-chain record.", assetTypes: ["Contribution Attestations", "Reconciliations", "Audit Trails"] },
      { icon: Users, title: "Contract Workers", description: "Gain assurance that contributions are recorded and matched to their actual employment regardless of which subcontractor engages them, protecting their entitlement.", assetTypes: ["Employment Records", "Contribution History", "Coverage Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a payroll and PF system or capturing attestations from subcontractors, Cerulea routes both into one employment-matched contribution ledger.",
    tracks: [
      {
        title: "Track A: Payroll System Bridging",
        description:
          "For mining companies and PF systems on legacy payroll. Existing contribution records are translated into signed, worker-matched on-chain attestations through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Payroll / PF", sublabel: "Company Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Contribution Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Subcontractor Capture",
        description:
          "For subcontractors reporting contributions. Attestations are signed from a subcontractor wallet and routed directly to the ledger for employment matching.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Subcontractor App", sublabel: "Contractor Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Matched Contribution Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an employment-matched contribution network with a verified worker registry, contribution attestation, and subcontractor-agnostic reconciliation from scratch requires specialised engineers and long payroll integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attestation & Matching Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects payroll and benefits integration benchmarks. Building a verified worker registry, contribution attestation, and subcontractor-agnostic reconciliation across contract labour for an average operation takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attestation and matching rules into pre-audited WebAssembly binaries and provisions the registry and reconciliation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const miningHeavyIndustryItems: ExtraCaseItem[] = [
  {
    label: "Chain of custody for coal shipments across ports, traders, utilities",
    href: "/solutions/use-case/chain-of-custody-for-coal-shipments-across-ports-traders-utilities",
    description: "Quality-linked coal settlement from pithead to boiler.",
    icon: Truck,
    category: "ENTERPRISE",
    tags: ["Mining", "Supply Chain"],
    industry: INDUSTRY,
  },
  {
    label: "Carbon emission reporting across mining operations for regulatory compliance",
    href: "/solutions/use-case/carbon-emission-reporting-across-mining-operations-for-regulatory-comp",
    description: "Tamper-proof emission data streamed on-chain for regulators.",
    icon: Recycling,
    category: "ENTERPRISE",
    tags: ["Mining", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Mine closure and land rehabilitation fund tracking",
    href: "/solutions/use-case/mine-closure-and-land-rehabilitation-fund-tracking",
    description: "Closure escrow released on verified rehabilitation milestones.",
    icon: Forest,
    category: "GOVERNMENT",
    tags: ["Mining", "Escrow"],
    industry: INDUSTRY,
  },
  {
    label: "Diamond and gemstone provenance (Kimberley Process compliance)",
    href: "/solutions/use-case/diamond-and-gemstone-provenance-kimberley-process-compliance",
    description: "Conflict-free stones tracked from mine to consumer NFT.",
    icon: Search,
    category: "DAPPS",
    tags: ["Gemstones", "Provenance"],
    industry: INDUSTRY,
  },
  {
    label: "Artisanal mining cooperative fair-trade certification",
    href: "/solutions/use-case/artisanal-mining-cooperative-fair-trade-certification",
    description: "Fair-trade labour and premiums verified to each miner.",
    icon: Handshake,
    category: "SME",
    tags: ["Gemstones", "Fair Trade"],
    industry: INDUSTRY,
  },
  {
    label: "Gemstone grading dispute resolution between buyer and seller",
    href: "/solutions/use-case/gemstone-grading-dispute-resolution-between-buyer-and-seller",
    description: "Anchored grading certificate settles buyer-seller quality disputes.",
    icon: Scale,
    category: "SME",
    tags: ["Gemstones", "Settlement"],
    industry: INDUSTRY,
  },
  {
    label: "Conflict mineral tracing (gold, cobalt, tantalum) from mine to manufacturer",
    href: "/solutions/use-case/conflict-mineral-tracing-gold-cobalt-tantalum-from-mine-to-manufacture",
    description: "Whole-chain mineral provenance for SEC and EU disclosure.",
    icon: Shield,
    category: "ENTERPRISE",
    tags: ["Minerals", "Provenance"],
    industry: INDUSTRY,
  },
  {
    label: "Mining royalty and revenue distribution to government and communities",
    href: "/solutions/use-case/mining-royalty-and-revenue-distribution-to-government-and-communities",
    description: "Formula-driven royalties paid to communities automatically.",
    icon: Coins,
    category: "GOVERNMENT",
    tags: ["Mining", "Payments"],
    industry: INDUSTRY,
  },
  {
    label: "Mine worker safety incident records shared across operators and regulators",
    href: "/solutions/use-case/mine-worker-safety-incident-records-shared-across-operators-and-regula",
    description: "Shared incident registry surfaces cross-operator safety patterns.",
    icon: HeartPulse,
    category: "GOVERNMENT",
    tags: ["Mining", "Safety"],
    industry: INDUSTRY,
  },
  {
    label: "Tailings dam safety inspection and monitoring records",
    href: "/solutions/use-case/tailings-dam-safety-inspection-and-monitoring-records",
    description: "Continuous dam monitoring with automatic anomaly alerts.",
    icon: Radio,
    category: "GOVERNMENT",
    tags: ["Mining", "Monitoring"],
    industry: INDUSTRY,
  },
  {
    label: "Mineral export quota allocation and compliance tracking",
    href: "/solutions/use-case/mineral-export-quota-allocation-and-compliance-tracking",
    description: "Consolidated export tracking prevents over-export across ports.",
    icon: Gavel,
    category: "GOVERNMENT",
    tags: ["Minerals", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Mine worker provident fund contribution verification",
    href: "/solutions/use-case/mine-worker-provident-fund-contribution-verification",
    description: "Provident fund contributions verified for every contract worker.",
    icon: IdCard,
    category: "GOVERNMENT",
    tags: ["Mining", "Payroll"],
    industry: INDUSTRY,
  },
]
