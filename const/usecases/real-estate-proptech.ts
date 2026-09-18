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

const INDUSTRY = "Real Estate & PropTech"

export const realEstateProptechCases: CaseEntry[] = [
  {
    slug: "smart-contract-based-milestone-payments-for-contractors-and-subcontrac",
    icon: Handshake,
    eyebrow: "Construction Settlement Layer",
    headline1: "Release every tranche.",
    headline2: "Settle on proof, not disputes.",
    heroDescription:
      "Run a private construction payment chain where each milestone is escrowed and released only after an independent certifier signs off. Developers, main contractors, and subcontractors share one neutral record, so a completed milestone triggers payment instead of a standoff.",
    heroCta: "Deploy Payment Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a contested milestone paper trail into escrowed, certifier-gated settlements.",
    mechanics: [
      { title: "Milestone Escrow", description: "The developer funds each milestone into an Escrow and Conditional Settlement vault up front, so subcontractors can see the money is committed before they begin the work." },
      { title: "Certifier Attestation", description: "A neutral project certifier signs the completion of each tranche on-chain. No party can release or withhold funds unilaterally, since the signature is the release condition." },
      { title: "Automated Tranche Release", description: "Once the attestation lands, the contract pays the subcontractor automatically within the same block, collapsing a months-long dispute window into a single settlement." },
      { title: "Procurement Ledger", description: "Every purchase order, variation, and back-charge is recorded against the milestone, so the paid amount always reconciles to the agreed scope." },
      { title: "Provenance Notary", description: "Site progress evidence, inspection photos, and completion reports are anchored by digest, giving the certifier tamper-evident proof to sign against." },
      { title: "Chained Subcontractor Flow", description: "Payments cascade down the contracting tree, so a main contractor cannot sit on funds owed to a subcontractor after its own tranche has cleared." },
    ],
    lifecycleTitle: "The Milestone Settlement Lifecycle",
    lifecycleSubtitle:
      "Follow one construction milestone from funding through certifier sign-off to subcontractor payment.",
    lifecycleSteps: [
      {
        label: "Milestone Funding",
        description:
          "The developer locks the tranche value into escrow against a defined scope of work, making the committed funds visible to the contractor and subcontractor.",
        icon: Wallet,
        logFilename: "cerulea_milestone_pay.log",
        logLines: [
          { text: "[SYS] Initializing Milestone Escrow Vault...", time: "09:12:04", tone: "default" },
          { text: "[CMD] fundMilestone { project: \"TWR_B12\", ms: \"SLAB_L07\", amount: 4200000 }", time: "09:12:04", tone: "primary" },
          { text: "[AUTH] Verifying developer treasury signature...", time: "09:12:05", tone: "secondary" },
          { text: "[OK] Tranche escrowed at block 5521904.", time: "09:12:05", tone: "success" },
        ],
      },
      {
        label: "Work Declaration",
        description:
          "The subcontractor declares the milestone complete and anchors progress evidence. The claim enters the certifier queue rather than triggering an invoice.",
        icon: ScrollText,
        logFilename: "cerulea_milestone_pay.log",
        logLines: [
          { text: "[SYS] Progress evidence received from Subcon_0x71...", time: "14:33:20", tone: "default" },
          { text: "[CMD] declareComplete(\"SLAB_L07\", evidence: 0x9f2ac4)", time: "14:33:21", tone: "primary" },
          { text: "[SYS] Anchoring 6 inspection photos by digest...", time: "14:33:21", tone: "default" },
          { text: "[OK] Claim queued for certifier attestation.", time: "14:33:22", tone: "success" },
        ],
      },
      {
        label: "Certifier Sign-Off",
        description:
          "The independent certifier inspects the work and signs the attestation. The signature is the sole condition that unlocks the escrowed tranche.",
        icon: FileCheck,
        logFilename: "cerulea_milestone_pay.log",
        logLines: [
          { text: "[SYS] Certifier reviewing claim SLAB_L07...", time: "11:05:41", tone: "default" },
          { text: "[CMD] attestMilestone(\"SLAB_L07\", status: \"PASS\")", time: "11:05:42", tone: "primary" },
          { text: "[AUTH] Sealing certifier credential to attestation...", time: "11:05:42", tone: "secondary" },
          { text: "[OK] Attestation recorded. Release condition met.", time: "11:05:43", tone: "success" },
        ],
      },
      {
        label: "Automated Release",
        description:
          "The contract releases the tranche to the subcontractor the moment the attestation is valid, and cascades any downstream obligations automatically.",
        icon: Zap,
        logFilename: "cerulea_milestone_pay.log",
        logLines: [
          { text: "[SYS] Release condition satisfied for SLAB_L07.", time: "11:05:43", tone: "default" },
          { text: "[CMD] releaseTranche(\"SLAB_L07\")", time: "11:05:43", tone: "primary" },
          { text: "[SYS] Cascading 2 downstream subcontractor payments...", time: "11:05:44", tone: "default" },
          { text: "[OK] Paid in full. Dispute window closed.", time: "11:05:44", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea splits milestone settlement into modular contracts. Each layer funds, evidences, certifies, and releases a tranche without letting any single party control the flow of money.",
    layers: [
      {
        title: "Escrow Vault",
        subtitle: "The Committed Fund",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Committed Fund",
          description:
            "The custody layer. It locks each milestone value from the developer and holds it against a defined scope, so a subcontractor can verify funds exist before mobilizing crews and plant.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract MilestoneEscrow {\n  struct Tranche {\n    address payer;\n    address payee;\n    uint256 amount;\n    bool certified;\n    bool released;\n  }\n\n  mapping(bytes32 => Tranche) public tranches;\n\n  function fund(bytes32 id, address payee) external payable {\n    tranches[id] = Tranche(msg.sender, payee, msg.value, false, false);\n  }\n}",
        simAction: "Simulate Milestone Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading developer treasury balance...", tone: "default" },
          { text: "Locking 4,200,000 against scope SLAB_L07...", tone: "default" },
          { text: "Binding payee subcontractor address...", tone: "default" },
          { text: "Writing tranche state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Milestone escrowed and visible to all parties.", tone: "success" },
        ],
      },
      {
        title: "Certifier Gate",
        subtitle: "The Neutral Sign-Off",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Neutral Sign-Off",
          description:
            "Removes the release decision from both paying and receiving parties. Only a whitelisted independent certifier can attest completion, turning a subjective dispute into a single signed condition.",
          platformFunction: "Attestation & Control",
        },
        codeSnippet:
          "function attest(bytes32 id, bool pass) external onlyCertifier {\n    require(!tranches[id].released, \"Already released\");\n    tranches[id].certified = pass;\n    emit MilestoneAttested(id, msg.sender, pass);\n}",
        simAction: "Simulate Certifier Sign-Off",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading anchored progress evidence...", tone: "default" },
          { text: "Verifying certifier is on approved panel...", tone: "default" },
          { text: "Recording PASS attestation for SLAB_L07...", tone: "default" },
          { text: "Setting release condition to true...", tone: "default" },
          { text: "[SUCCESS] Neutral sign-off sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Release Engine",
        subtitle: "The Atomic Payout",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Atomic Payout",
          description:
            "Executes payment the instant certification is valid. It removes the human delay between sign-off and transfer, paying the subcontractor within a block and cascading any downstream obligations.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function release(bytes32 id) external {\n    Tranche storage t = tranches[id];\n    require(t.certified, \"Not certified\");\n    require(!t.released, \"Already paid\");\n    t.released = true;\n    payable(t.payee).transfer(t.amount);\n    emit TrancheReleased(id, t.payee, t.amount);\n}",
        simAction: "Simulate Tranche Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming certification flag for SLAB_L07...", tone: "default" },
          { text: "Transferring 4,200,000 to subcontractor wallet...", tone: "default" },
          { text: "Cascading retention to downstream trades...", tone: "default" },
          { text: "Emitting settlement receipt...", tone: "default" },
          { text: "[SUCCESS] Subcontractor paid within 24 hours of sign-off.", tone: "success" },
        ],
      },
      {
        title: "Procurement Record",
        subtitle: "The Scope Reconciler",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Scope Reconciler",
          description:
            "Ties every rupee paid back to an agreed line of scope. Purchase orders, variations, and back-charges are logged against the milestone so the settled amount always reconciles to the contract.",
          platformFunction: "Procurement Ledger",
        },
        codeSnippet:
          "function recordVariation(bytes32 id, int256 delta, string calldata reason) external onlyPM {\n    scope[id].adjusted += delta;\n    variations[id].push(Variation(delta, reason, block.timestamp));\n    emit ScopeAdjusted(id, delta, reason);\n}",
        simAction: "Simulate Scope Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading purchase order for SLAB_L07...", tone: "default" },
          { text: "Applying approved variation of +180,000...", tone: "default" },
          { text: "Reconciling paid value against adjusted scope...", tone: "default" },
          { text: "Sealing procurement entry...", tone: "default" },
          { text: "[SUCCESS] Payment matches agreed scope exactly.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Certifier-gated milestone settlement is a horizontal capability. Here is how different construction actors put the escrowed payment chain to work.",
    sectors: [
      { icon: Building2, title: "Developers & Principals", description: "Fund milestones into escrow and pay only against independent sign-off, protecting cash flow while giving trades confidence that committed money is ready to release on completion.", assetTypes: ["Milestone Escrows", "Certifier Attestations", "Release Receipts"] },
      { icon: Pickaxe, title: "Main Contractors", description: "Manage a full subcontractor tree on one ledger, cascading payments down the chain automatically once each tranche certifies and eliminating manual reconciliation at close-out.", assetTypes: ["Tranche Schedules", "Back-Charges", "Subcontractor Ledgers"] },
      { icon: Handshake, title: "Subcontractors & Trades", description: "See funds committed before mobilizing and get paid within 24 hours of certifier sign-off, removing the months-long wait that disputed milestones normally impose.", assetTypes: ["Work Declarations", "Progress Evidence", "Fast Payouts"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a developer's ERP and project controls or capturing site progress from a foreman's phone, Cerulea routes both into one escrowed settlement record.",
    tracks: [
      {
        title: "Track A: Enterprise Project Controls Bridging",
        description:
          "For developers and tier-one contractors on ERP and project management suites. Milestone schedules and cost lines translate into escrow funding and release calls through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "ERP / Project Controls", sublabel: "Developer Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Escrow Funding & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Milestone Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: On-Site Certifier Capture",
        description:
          "For certifiers and subcontractors in the field. A mobile app signs work declarations and attestations from a device wallet and routes them directly to the settlement contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field App / Wallet", sublabel: "Certifier & Trade Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Escrowed Payment Record", icon: Wallet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an escrowed milestone system with certifier gating, cascading subcontractor flows, and procurement reconciliation from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Milestone & Release Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise construction-tech integration benchmarks. Wiring escrow custody, certifier gating, and cascading subcontractor payments into a developer's project controls for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your milestone and release rules into pre-audited WebAssembly binaries and provisions the escrow and attestation layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "equipment-rental-utilization-and-billing-reconciliation",
    icon: Radio,
    eyebrow: "Machinery Billing Engine",
    headline1: "Bill the exact hour.",
    headline2: "Settle usage from the sensor.",
    heroDescription:
      "Log heavy equipment usage hours directly from machinery telemetry and generate billing automatically from that verified data. When a machine is shared across multiple contractors on one site, each is charged for the hours the sensor actually recorded rather than a disputed estimate.",
    heroCta: "Deploy Billing Automation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Convert raw machine telemetry into signed, per-contractor billing that no party can contest.",
    mechanics: [
      { title: "Device Attestation", description: "Each machine's telemetry unit is registered with a hardware key. Usage records are signed at source, so a billed hour is provably from the sensor rather than a manual logbook." },
      { title: "Verified Usage Hours", description: "External Data Oracles stream engine-on hours and operator identity to the contract, building a per-contractor usage tally that updates continuously through the shift." },
      { title: "Automated Invoicing", description: "The Invoices and Billing module converts verified hours into a rate-carded invoice the moment a billing period closes, with no manual meter reading or reconciliation." },
      { title: "Multi-Contractor Split", description: "When several contractors share one machine, the ledger apportions cost strictly by the hours each operator's credential logged, ending arguments over who used it longer." },
      { title: "Idle & Downtime Handling", description: "The record distinguishes productive hours from idle and breakdown time, so a contractor is never billed for hours the machine sat unusable." },
      { title: "Tamper-Evident Meter", description: "Any gap or rollback in the telemetry stream is flagged on-chain, making meter tampering or after-the-fact edits immediately visible to both hirer and owner." },
    ],
    lifecycleTitle: "The Utilization Billing Lifecycle",
    lifecycleSubtitle:
      "Follow a shared excavator from sensor registration through per-contractor usage to an automatically generated invoice.",
    lifecycleSteps: [
      {
        label: "Asset Onboarding",
        description:
          "The rental owner registers the machine and its telemetry unit, binding a hardware key so every future usage record is signed by that specific sensor.",
        icon: Radio,
        logFilename: "cerulea_rental_meter.log",
        logLines: [
          { text: "[SYS] Registering machinery telemetry unit...", time: "07:40:10", tone: "default" },
          { text: "[CMD] enrollDevice { asset: \"EXC_320D\", hwKey: 0x4b91 }", time: "07:40:10", tone: "primary" },
          { text: "[AUTH] Provisioning device attestation certificate...", time: "07:40:11", tone: "secondary" },
          { text: "[OK] Meter EXC_320D bound at block 6120044.", time: "07:40:11", tone: "success" },
        ],
      },
      {
        label: "Usage Capture",
        description:
          "As operators log in, the oracle streams engine-on hours tagged to each contractor's credential, accumulating a per-party tally in real time.",
        icon: Activity,
        logFilename: "cerulea_rental_meter.log",
        logLines: [
          { text: "[SYS] Polling machine telemetry stream...", time: "10:15:33", tone: "default" },
          { text: "[CMD] logHours(\"EXC_320D\", operator: \"CON_B\", hrs: 3.5)", time: "10:15:33", tone: "primary" },
          { text: "[SYS] Idle 0.4h excluded from billable total.", time: "10:15:34", tone: "default" },
          { text: "[OK] Contractor CON_B tally now 3.5 billable hours.", time: "10:15:34", tone: "success" },
        ],
      },
      {
        label: "Period Reconciliation",
        description:
          "At period close the contract sums verified hours per contractor, cross-checks the telemetry for gaps, and freezes the tally for billing.",
        icon: Scale,
        logFilename: "cerulea_rental_meter.log",
        logLines: [
          { text: "[SYS] Closing billing period for EXC_320D...", time: "18:00:02", tone: "default" },
          { text: "[CMD] reconcile(\"EXC_320D\", period: \"2026-W12\")", time: "18:00:02", tone: "primary" },
          { text: "[AUTH] Checking telemetry continuity for tamper gaps...", time: "18:00:03", tone: "secondary" },
          { text: "[OK] 3 contractor tallies frozen. No gaps detected.", time: "18:00:03", tone: "success" },
        ],
      },
      {
        label: "Invoice Generation",
        description:
          "The billing module applies each contractor's rate card to its frozen hours and issues signed invoices automatically, with no manual meter reading.",
        icon: FileCheck,
        logFilename: "cerulea_rental_meter.log",
        logLines: [
          { text: "[SYS] Generating invoices from verified tallies...", time: "18:00:05", tone: "default" },
          { text: "[CMD] issueInvoices(\"EXC_320D\", period: \"2026-W12\")", time: "18:00:05", tone: "primary" },
          { text: "[SYS] Applying rate cards to 3 contractor accounts...", time: "18:00:06", tone: "default" },
          { text: "[OK] 3 invoices issued from sensor data. Dispute-free.", time: "18:00:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes equipment billing into modular contracts. Each layer attests the meter, records usage, reconciles the period, and invoices without any party editing the underlying hours.",
    layers: [
      {
        title: "Device Registry",
        subtitle: "The Signed Meter",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Signed Meter",
          description:
            "The trust anchor for usage. It binds a hardware key to each machine so that every hour submitted carries a device signature, making a fabricated or hand-written usage entry impossible to pass off as sensor data.",
          platformFunction: "Device Attestation",
        },
        codeSnippet:
          "contract MeterRegistry {\n  struct Meter {\n    address owner;\n    bytes32 hwKey;\n    bool active;\n  }\n\n  mapping(bytes32 => Meter) public meters;\n\n  function enroll(bytes32 asset, bytes32 hwKey) external {\n    meters[asset] = Meter(msg.sender, hwKey, true);\n    emit MeterEnrolled(asset, hwKey);\n  }\n}",
        simAction: "Simulate Meter Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading owner credential for EXC_320D...", tone: "default" },
          { text: "Provisioning hardware attestation key...", tone: "default" },
          { text: "Marking meter active on-chain...", tone: "default" },
          { text: "Writing meter state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Telemetry unit bound to machine.", tone: "success" },
        ],
      },
      {
        title: "Usage Oracle",
        subtitle: "The Hour Recorder",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Hour Recorder",
          description:
            "Streams engine-on hours and operator identity from the machine to the ledger. It separates billable running time from idle and breakdown, so the tally reflects real productive use per contractor.",
          platformFunction: "External Data Oracles",
        },
        codeSnippet:
          "function logHours(bytes32 asset, bytes32 operator, uint256 tenths, bool idle) external onlyMeter(asset) {\n    if (idle) { return; }\n    usage[asset][operator] += tenths;\n    emit HoursLogged(asset, operator, tenths);\n}",
        simAction: "Simulate Usage Logging",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving signed telemetry from EXC_320D...", tone: "default" },
          { text: "Attributing 3.5h to contractor CON_B...", tone: "default" },
          { text: "Excluding 0.4h idle from billable total...", tone: "default" },
          { text: "Updating per-contractor usage map...", tone: "default" },
          { text: "[SUCCESS] Verified hours recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Reconciler",
        subtitle: "The Gap Detector",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Gap Detector",
          description:
            "Closes each billing period by summing verified hours and scanning the telemetry for gaps or rollbacks. Any discontinuity is flagged before invoicing, so tampering cannot slip into a bill.",
          platformFunction: "Reconciliation & Integrity",
        },
        codeSnippet:
          "function reconcile(bytes32 asset, bytes32 period) external onlyOwner {\n    require(!frozen[asset][period], \"Closed\");\n    require(continuous(asset, period), \"Telemetry gap\");\n    frozen[asset][period] = true;\n    emit PeriodReconciled(asset, period);\n}",
        simAction: "Simulate Period Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Summing verified hours for period 2026-W12...", tone: "default" },
          { text: "Scanning telemetry for gaps and rollbacks...", tone: "default" },
          { text: "Freezing 3 contractor tallies...", tone: "default" },
          { text: "Recording reconciliation proof...", tone: "default" },
          { text: "[SUCCESS] Period closed with no meter tampering.", tone: "success" },
        ],
      },
      {
        title: "Invoice Builder",
        subtitle: "The Auto Bill",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Bill",
          description:
            "Applies each contractor's agreed rate to its frozen hours and issues a signed invoice automatically. It removes manual meter reads and the reconciliation arguments that follow them.",
          platformFunction: "Invoices & Billing",
        },
        codeSnippet:
          "function issueInvoice(bytes32 asset, bytes32 operator, bytes32 period) external {\n    require(frozen[asset][period], \"Not reconciled\");\n    uint256 due = usage[asset][operator] * rate[operator];\n    invoices[operator].push(Invoice(asset, period, due));\n    emit InvoiceIssued(operator, asset, due);\n}",
        simAction: "Simulate Invoice Generation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading frozen tally for contractor CON_B...", tone: "default" },
          { text: "Applying hourly rate card...", tone: "default" },
          { text: "Computing amount due from verified hours...", tone: "default" },
          { text: "Emitting signed invoice...", tone: "default" },
          { text: "[SUCCESS] Invoice generated from sensor data.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Sensor-verified usage billing is a horizontal capability. Here is how different equipment stakeholders put the automated meter to work.",
    sectors: [
      { icon: Truck, title: "Rental Fleet Owners", description: "Bill every hirer from signed telemetry instead of shift logs, cutting revenue leakage from under-reported hours and ending the reconciliation calls at month end.", assetTypes: ["Machine Meters", "Rate Cards", "Auto Invoices"] },
      { icon: Pickaxe, title: "Site Contractors", description: "Pay only for the productive hours their own operators logged on a shared machine, with idle and breakdown time transparently excluded from the bill.", assetTypes: ["Usage Tallies", "Operator Credentials", "Downtime Records"] },
      { icon: Building2, title: "Project Cost Managers", description: "Draw plant costs straight from verified usage into project cost reports, giving an auditable line between machine hours on site and money spent.", assetTypes: ["Plant Cost Lines", "Utilization Reports", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging fleet telematics platforms or capturing hours from a machine's onboard unit, Cerulea routes both into one signed billing record.",
    tracks: [
      {
        title: "Track A: Fleet Telematics Bridging",
        description:
          "For rental firms on established telematics platforms. Machine usage feeds translate into signed on-chain usage records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Telematics Platform", sublabel: "Fleet Management Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Usage Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Utilization Billing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Onboard Device Capture",
        description:
          "For machines with an attested onboard unit. The device signs each usage record with its hardware key and routes it directly to the billing contract.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Onboard Telemetry Unit", sublabel: "Machine Hardware Wallet", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Usage Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Hour Record", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a device-attested metering system with multi-contractor apportionment and automated invoicing from scratch requires specialised IoT and billing engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Metering & Billing Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects IoT and billing integration benchmarks. Attesting each meter, streaming verified hours, and building multi-contractor invoicing for an average fleet takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your metering and billing rules into pre-audited WebAssembly binaries and provisions the oracle and invoicing layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "green-building-certification-compliance-tracking",
    icon: Leaf,
    eyebrow: "Sustainability Compliance Layer",
    headline1: "Anchor every green claim.",
    headline2: "Audit-ready by handover.",
    heroDescription:
      "Record each energy-efficiency choice and sustainably sourced material as it happens, building a verified compliance file for LEED or IGBC audits. Instead of compiling evidence at the end of the project, the certification record assembles itself throughout construction.",
    heroCta: "Deploy Compliance Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an end-of-project scramble for evidence into a continuously anchored certification file.",
    mechanics: [
      { title: "Live Evidence Anchoring", description: "The Compliance Attestations module records each energy-efficient design decision and material specification the moment it is made, so no credit relies on reconstructed memory at audit time." },
      { title: "Material Sourcing Provenance", description: "The Provenance Notary binds every sustainable material batch to its origin and environmental data sheet, proving recycled content and regional sourcing claims by digest." },
      { title: "Carbon MRV Registry", description: "The Carbon Credits MRV and Registry module tracks embodied and operational carbon metrics against the target rating, updating the credit tally as the building progresses." },
      { title: "Rating Credit Mapping", description: "Each anchored item is mapped to a specific LEED or IGBC credit, so the project team sees in real time which points are secured and which still need evidence." },
      { title: "Auditor Read Access", description: "The certifying body queries the assembled record directly, replacing a box of scanned PDFs with a live, verifiable evidence trail for each claimed credit." },
      { title: "Immutable Version History", description: "Superseded specifications remain visible in history, so an auditor can see exactly when a design choice changed and that the final claim matches what was built." },
    ],
    lifecycleTitle: "The Certification Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a green building from credit registration through live evidence capture to a ready-to-audit certification file.",
    lifecycleSteps: [
      {
        label: "Target Registration",
        description:
          "The project registers its target rating and the specific credits it intends to pursue, creating the scorecard that every later piece of evidence maps to.",
        icon: Leaf,
        logFilename: "cerulea_green_cert.log",
        logLines: [
          { text: "[SYS] Initializing Certification Scorecard...", time: "08:05:12", tone: "default" },
          { text: "[CMD] registerTarget { rating: \"IGBC_GOLD\", credits: 46 }", time: "08:05:12", tone: "primary" },
          { text: "[AUTH] Binding project team credentials...", time: "08:05:13", tone: "secondary" },
          { text: "[OK] Scorecard anchored at block 4870221.", time: "08:05:13", tone: "success" },
        ],
      },
      {
        label: "Evidence Capture",
        description:
          "As design and construction proceed, each efficiency choice and material sheet is anchored and mapped to its target credit, updating the scorecard live.",
        icon: FileCheck,
        logFilename: "cerulea_green_cert.log",
        logLines: [
          { text: "[SYS] Anchoring evidence for credit EA_4...", time: "11:22:47", tone: "default" },
          { text: "[CMD] anchorEvidence(\"EA_4\", doc: 0x7c1a, credit: \"ENERGY\")", time: "11:22:47", tone: "primary" },
          { text: "[SYS] Mapping evidence to IGBC credit EA_4...", time: "11:22:48", tone: "default" },
          { text: "[OK] Credit EA_4 now evidenced. Score +3.", time: "11:22:48", tone: "success" },
        ],
      },
      {
        label: "Material Provenance",
        description:
          "Sustainable material batches are bound to their sourcing data and recycled-content proofs, so a supplier claim becomes a cryptographically verifiable record.",
        icon: Package,
        logFilename: "cerulea_green_cert.log",
        logLines: [
          { text: "[SYS] Binding recycled steel batch to project...", time: "14:48:09", tone: "default" },
          { text: "[CMD] anchorMaterial(\"MR_2\", batch: \"STL_R71\", recycled: 92)", time: "14:48:09", tone: "primary" },
          { text: "[AUTH] Hashing environmental product declaration...", time: "14:48:10", tone: "secondary" },
          { text: "[OK] Sourcing claim sealed. Tamper-evident.", time: "14:48:10", tone: "success" },
        ],
      },
      {
        label: "Audit Assembly",
        description:
          "At certification the auditor queries the assembled file directly, verifying each credit against live evidence rather than a manually compiled binder.",
        icon: Search,
        logFilename: "cerulea_green_cert.log",
        logLines: [
          { text: "[SYS] Auditor requesting certification file...", time: "09:30:55", tone: "default" },
          { text: "[CMD] assembleFile(project: \"TWR_G4\", rating: \"IGBC_GOLD\")", time: "09:30:55", tone: "primary" },
          { text: "[SYS] Compiling 46 credits with anchored evidence...", time: "09:30:56", tone: "default" },
          { text: "[OK] Audit-ready file returned. Full trail intact.", time: "09:30:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes green certification into modular contracts. Each layer registers targets, anchors evidence, proves material sourcing, and exposes the file to auditors without manual end-of-project compilation.",
    layers: [
      {
        title: "Scorecard Registry",
        subtitle: "The Credit Map",
        icon: Leaf,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Credit Map",
          description:
            "The foundational layer. It records the target rating and the set of credits pursued, giving every later evidence item a fixed slot to map to and a live view of points secured versus outstanding.",
          platformFunction: "Compliance Registry",
        },
        codeSnippet:
          "contract GreenScorecard {\n  struct Credit {\n    string code;\n    uint8 points;\n    bool evidenced;\n  }\n\n  mapping(bytes32 => Credit) public credits;\n\n  function register(bytes32 id, string calldata code, uint8 pts) external onlyTeam {\n    credits[id] = Credit(code, pts, false);\n  }\n}",
        simAction: "Simulate Target Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading project team credential...", tone: "default" },
          { text: "Registering IGBC Gold target scorecard...", tone: "default" },
          { text: "Allocating 46 credit slots...", tone: "default" },
          { text: "Writing scorecard to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Certification target anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Evidence Notary",
        subtitle: "The Live Anchor",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Anchor",
          description:
            "Records each design and construction decision as it happens and maps it to its target credit. It replaces reconstructed end-of-project claims with a timestamped, tamper-evident evidence trail.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function anchorEvidence(bytes32 creditId, bytes32 docHash, string calldata kind) external onlyTeam {\n    evidence[creditId].push(Evidence(docHash, kind, block.timestamp));\n    credits[creditId].evidenced = true;\n    emit EvidenceAnchored(creditId, docHash);\n}",
        simAction: "Simulate Evidence Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting energy model report for EA_4...", tone: "default" },
          { text: "Computing document digest...", tone: "default" },
          { text: "Mapping evidence to credit EA_4...", tone: "default" },
          { text: "Updating live scorecard...", tone: "default" },
          { text: "[SUCCESS] Credit evidenced, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Material Provenance",
        subtitle: "The Sourcing Proof",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sourcing Proof",
          description:
            "Binds sustainable material batches to their origin and environmental declarations. A recycled-content or regional-sourcing claim becomes verifiable by digest instead of resting on a supplier letter.",
          platformFunction: "Provenance Notary",
        },
        codeSnippet:
          "function anchorMaterial(bytes32 creditId, bytes32 batch, uint8 recycledPct, bytes32 epdHash) external onlyTeam {\n    materials[creditId].push(Material(batch, recycledPct, epdHash));\n    emit MaterialAnchored(creditId, batch, recycledPct);\n}",
        simAction: "Simulate Material Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading recycled steel batch STL_R71...", tone: "default" },
          { text: "Hashing environmental product declaration...", tone: "default" },
          { text: "Recording 92 percent recycled content...", tone: "default" },
          { text: "Binding batch to credit MR_2...", tone: "default" },
          { text: "[SUCCESS] Sourcing claim sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Audit Gateway",
        subtitle: "The Certifier Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Certifier Window",
          description:
            "A read interface that assembles the full certification file on demand. The auditing body verifies each credit against live anchored evidence rather than a hand-compiled binder of scans.",
          platformFunction: "Audit Access",
        },
        codeSnippet:
          "function assembleFile(bytes32 project) external view returns (Credit[] memory, Evidence[] memory) {\n    return (scorecard[project], allEvidence[project]);\n}",
        simAction: "Simulate Audit Assembly",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor opening certification file...", tone: "default" },
          { text: "Compiling 46 credits with evidence...", tone: "default" },
          { text: "Attaching material provenance proofs...", tone: "default" },
          { text: "Verifying evidence digests...", tone: "default" },
          { text: "[SUCCESS] Audit-ready file returned intact.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Live certification tracking is a horizontal capability. Here is how different green-building actors put the assembled compliance file to work.",
    sectors: [
      { icon: Building2, title: "Developers & Owners", description: "Enter certification audits with a complete evidence file already assembled, cutting the consultant time and rework that end-of-project compilation normally demands.", assetTypes: ["Rating Scorecards", "Evidence Files", "Credit Trails"] },
      { icon: FlaskConical, title: "Green Consultants", description: "Track secured versus outstanding credits in real time across a portfolio, targeting evidence gathering where points are still at risk instead of after handover.", assetTypes: ["Credit Maps", "Evidence Gaps", "Progress Scores"] },
      { icon: Landmark, title: "Certifying Bodies", description: "Query anchored evidence directly for each claimed credit, verifying design choices and material sourcing against a tamper-evident record rather than scanned submissions.", assetTypes: ["Audit Queries", "Material Proofs", "Certification Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging BIM and project management platforms or capturing material data from suppliers, Cerulea routes both into one certification evidence record.",
    tracks: [
      {
        title: "Track A: BIM & Project Platform Bridging",
        description:
          "For design teams on BIM and project management suites. Design decisions and specifications translate into anchored evidence entries through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "BIM / Project Platform", sublabel: "Design & Delivery Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Evidence Hashing & Mapping", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Certification Evidence Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Supplier Material Capture",
        description:
          "For material suppliers and site teams. A mobile app signs material batch and sourcing data from a device wallet and routes it directly to the compliance contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Supplier App / Wallet", sublabel: "Material & Site Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Evidence Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Green Compliance Record", icon: Leaf, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a live certification tracker with credit mapping, material provenance, and auditor access from scratch requires specialised sustainability and blockchain engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credit & Evidence Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects sustainability-tech integration benchmarks. Mapping every rating credit, anchoring live evidence, and building auditor access for an average project takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your credit and evidence rules into pre-audited WebAssembly binaries and provisions the attestation and registry layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "public-infrastructure-project-fund-disbursement-and-audit-trail",
    icon: Landmark,
    eyebrow: "Public Disbursement Layer",
    headline1: "Track every rupee.",
    headline2: "Disburse against proof.",
    heroDescription:
      "Run a private infrastructure disbursement chain where each tranche of public money is escrowed and released only against an independent completion certificate. Auditors get real-time access, so fund diversion and inflated claims surface as they happen rather than years later.",
    heroCta: "Deploy Disbursement Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn opaque tranche payouts into escrowed, certificate-gated disbursements with live audit access.",
    mechanics: [
      { title: "Escrowed Tranches", description: "The Escrow and Conditional Settlement module holds each public tranche until a verified completion certificate exists, so money cannot leave the treasury ahead of measured work." },
      { title: "Independent Certification", description: "A third-party engineer signs each completion certificate on-chain, and the disbursement links to that exact certificate, making inflated or fictitious claims detectable." },
      { title: "Procurement Ledger", description: "Every work order, bill of quantities, and measurement book entry is recorded, so the disbursed amount always reconciles to the sanctioned scope and rates." },
      { title: "Real-Time CAG Access", description: "The audit authority holds a read-only node, watching disbursements and certificates as they post instead of reconstructing them from files after project close." },
      { title: "Immutable Certificates", description: "The Provenance Notary seals each certificate by digest, so a completion record cannot be altered or backdated after the tranche is released." },
      { title: "Diversion Alerts", description: "Any disbursement without a matching certificate, or above the certified value, raises an on-chain flag to the audit node immediately, not at year-end reconciliation." },
    ],
    lifecycleTitle: "The Fund Disbursement Lifecycle",
    lifecycleSubtitle:
      "Follow one public tranche from sanction through independent certification to an audited release.",
    lifecycleSteps: [
      {
        label: "Tranche Sanction",
        description:
          "The agency escrows a sanctioned tranche against a defined work package, recording the scope and rates the release must later reconcile against.",
        icon: Landmark,
        logFilename: "cerulea_pub_disburse.log",
        logLines: [
          { text: "[SYS] Initializing Public Disbursement Vault...", time: "10:02:14", tone: "default" },
          { text: "[CMD] sanctionTranche { pkg: \"NH_44_KM12\", amount: 82000000 }", time: "10:02:14", tone: "primary" },
          { text: "[AUTH] Verifying sanctioning authority quorum...", time: "10:02:15", tone: "secondary" },
          { text: "[OK] Tranche escrowed at block 7011230.", time: "10:02:15", tone: "success" },
        ],
      },
      {
        label: "Work Measurement",
        description:
          "Site progress is measured and recorded against the bill of quantities, anchoring the measurement book entry the certificate will be signed against.",
        icon: Workflow,
        logFilename: "cerulea_pub_disburse.log",
        logLines: [
          { text: "[SYS] Recording measurement book entry MB_318...", time: "13:41:52", tone: "default" },
          { text: "[CMD] recordMeasure(\"NH_44_KM12\", qty: 0.62, unit: \"KM\")", time: "13:41:52", tone: "primary" },
          { text: "[SYS] Reconciling against sanctioned rates...", time: "13:41:53", tone: "default" },
          { text: "[OK] Measured value 50,840,000 within scope.", time: "13:41:53", tone: "success" },
        ],
      },
      {
        label: "Certificate Sign-Off",
        description:
          "An independent engineer inspects the work and signs the completion certificate, the sole condition the contract accepts for release.",
        icon: FileCheck,
        logFilename: "cerulea_pub_disburse.log",
        logLines: [
          { text: "[SYS] Independent engineer reviewing MB_318...", time: "09:18:07", tone: "default" },
          { text: "[CMD] certifyCompletion(\"NH_44_KM12\", value: 50840000)", time: "09:18:08", tone: "primary" },
          { text: "[AUTH] Sealing certificate by digest, tamper-evident...", time: "09:18:08", tone: "secondary" },
          { text: "[OK] Certificate anchored. Release condition met.", time: "09:18:09", tone: "success" },
        ],
      },
      {
        label: "Audited Release",
        description:
          "The contract releases the certified value to the contractor and posts the event to the audit node, flagging any mismatch instantly.",
        icon: Search,
        logFilename: "cerulea_pub_disburse.log",
        logLines: [
          { text: "[SYS] Matching disbursement to certificate...", time: "09:18:10", tone: "default" },
          { text: "[CMD] release(\"NH_44_KM12\", 50840000)", time: "09:18:10", tone: "primary" },
          { text: "[SYS] Posting event to CAG audit node...", time: "09:18:11", tone: "default" },
          { text: "[OK] Released. Every rupee linked to certificate.", time: "09:18:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes public disbursement into modular contracts. Each layer sanctions, measures, certifies, and releases funds while an audit node watches without any official able to alter the record.",
    layers: [
      {
        title: "Disbursement Vault",
        subtitle: "The Sanctioned Fund",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sanctioned Fund",
          description:
            "The custody layer for public money. It escrows each sanctioned tranche against a defined work package, so funds cannot be disbursed ahead of certified progress or diverted to another head.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract PublicDisbursement {\n  struct Tranche {\n    bytes32 pkg;\n    uint256 amount;\n    uint256 certifiedValue;\n    bool released;\n  }\n\n  mapping(bytes32 => Tranche) public tranches;\n\n  function sanction(bytes32 id, bytes32 pkg) external payable onlyAuthority {\n    tranches[id] = Tranche(pkg, msg.value, 0, false);\n  }\n}",
        simAction: "Simulate Tranche Sanction",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying sanctioning authority quorum...", tone: "default" },
          { text: "Escrowing 82,000,000 to package NH_44_KM12...", tone: "default" },
          { text: "Binding sanctioned scope and rates...", tone: "default" },
          { text: "Writing tranche state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Public tranche escrowed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Certificate Gate",
        subtitle: "The Engineer Sign-Off",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Engineer Sign-Off",
          description:
            "Ties every release to an independent completion certificate. Only a whitelisted engineer can certify a value, and the contract will not disburse above what has been certified for that package.",
          platformFunction: "Certification & Control",
        },
        codeSnippet:
          "function certify(bytes32 id, uint256 value, bytes32 certHash) external onlyEngineer {\n    require(value <= tranches[id].amount, \"Exceeds sanction\");\n    tranches[id].certifiedValue = value;\n    certificates[id] = certHash;\n    emit Certified(id, value, certHash);\n}",
        simAction: "Simulate Certificate Sign-Off",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading measurement book entry MB_318...", tone: "default" },
          { text: "Verifying engineer is on approved panel...", tone: "default" },
          { text: "Certifying value 50,840,000...", tone: "default" },
          { text: "Sealing certificate digest...", tone: "default" },
          { text: "[SUCCESS] Completion certificate anchored.", tone: "success" },
        ],
      },
      {
        title: "Release Engine",
        subtitle: "The Matched Payout",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Matched Payout",
          description:
            "Disburses strictly against the certified value and links the payment to the certificate. A release without a matching certificate, or above it, is rejected and flagged rather than executed.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function release(bytes32 id) external {\n    Tranche storage t = tranches[id];\n    require(t.certifiedValue > 0, \"Not certified\");\n    require(!t.released, \"Already released\");\n    t.released = true;\n    payable(contractor[id]).transfer(t.certifiedValue);\n    emit Released(id, t.certifiedValue, certificates[id]);\n}",
        simAction: "Simulate Audited Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Matching disbursement to certificate...", tone: "default" },
          { text: "Confirming amount within certified value...", tone: "default" },
          { text: "Transferring 50,840,000 to contractor...", tone: "default" },
          { text: "Posting event to audit node...", tone: "default" },
          { text: "[SUCCESS] Rupee linked to completion certificate.", tone: "success" },
        ],
      },
      {
        title: "Audit Node",
        subtitle: "The Live Oversight",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Oversight",
          description:
            "A read-only node for the audit authority. It sees sanctions, certificates, and releases as they post, raising an alert on any unmatched or excess disbursement in real time instead of at annual review.",
          platformFunction: "Audit Access",
        },
        codeSnippet:
          "function watch(bytes32 id) external view returns (bool ok, string memory flag) {\n    Tranche memory t = tranches[id];\n    if (t.released && certificates[id] == bytes32(0)) return (false, \"NO_CERT\");\n    return (true, \"OK\");\n}",
        simAction: "Simulate Audit Watch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Audit node scanning latest releases...", tone: "default" },
          { text: "Cross-checking each release for certificate...", tone: "default" },
          { text: "Comparing amount against certified value...", tone: "default" },
          { text: "No unmatched disbursement found...", tone: "default" },
          { text: "[SUCCESS] Live oversight confirms clean trail.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Certificate-gated public disbursement is a horizontal capability. Here is how different oversight actors put the audited chain to work.",
    sectors: [
      { icon: Landmark, title: "Implementing Agencies", description: "Disburse tranches against independent certificates with full defensibility, protecting officials from diversion allegations by tying every payment to sealed completion evidence.", assetTypes: ["Sanctioned Tranches", "Completion Certificates", "Release Records"] },
      { icon: Pickaxe, title: "Infrastructure Contractors", description: "Get paid against measured, certified work on a clear schedule, with the reconciliation between measurement books and payment handled on-chain rather than in disputed files.", assetTypes: ["Measurement Books", "Certified Values", "Payment Trails"] },
      { icon: Search, title: "Audit Authorities", description: "Watch disbursements and certificates live from a read-only node, catching unmatched or inflated claims as they occur instead of years later in a post-audit.", assetTypes: ["Audit Nodes", "Diversion Alerts", "Oversight Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a public financial management system or capturing measurement books from site engineers, Cerulea routes both into one audited disbursement record.",
    tracks: [
      {
        title: "Track A: Treasury System Bridging",
        description:
          "For agencies on public financial management and treasury systems. Sanction and payment events translate into escrowed on-chain tranches through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Treasury / PFMS", sublabel: "Agency Finance Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Tranche Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Disbursement Audit Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Certification Capture",
        description:
          "For site engineers and independent certifiers. A field app signs measurements and completion certificates from a device wallet and routes them directly to the disbursement contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field App / Wallet", sublabel: "Engineer Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Certification Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Audited Fund Record", icon: Landmark, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an escrowed disbursement chain with independent certification, procurement reconciliation, and live audit access from scratch requires specialised govtech engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Sanction & Certificate Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects govtech financial integration benchmarks. Wiring treasury systems, certificate gating, and real-time audit access for an average program takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your sanction and certification rules into pre-audited WebAssembly binaries and provisions the escrow and audit layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "land-acquisition-compensation-disbursement-to-affected-families",
    icon: Home,
    eyebrow: "Compensation Transparency Layer",
    headline1: "Show every calculation.",
    headline2: "Confirm every payment.",
    heroDescription:
      "Anchor how each affected family's compensation was calculated and confirm the payment actually reached them. Families and oversight bodies see a clear, verifiable record instead of an opaque process they cannot question.",
    heroCta: "Deploy Compensation Records",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque acquisition payout into a transparent, per-family record of calculation and receipt.",
    mechanics: [
      { title: "Verified Family Identity", description: "The Civil Registry module binds each award to a verified family and land parcel, so a compensation entry maps to a real claimant rather than a duplicated or ghost record." },
      { title: "Transparent Calculation", description: "The award formula, parcel area, rate, and solatium are anchored per family, so each household can see exactly how its figure was reached instead of being handed a lump sum." },
      { title: "Escrowed Payout", description: "The Escrow and Conditional Settlement module releases funds to the verified family account and records the confirmation, closing the gap between an announced award and money received." },
      { title: "Compliance Attestation", description: "The Compliance Attestations module seals each step against the acquisition statute, giving oversight bodies proof the process followed the legal framework." },
      { title: "Grievance Anchor", description: "A family's objection to its calculation is recorded on-chain against the award, creating a traceable grievance trail rather than a letter that disappears into a file." },
      { title: "Oversight Read Access", description: "Auditors and courts query the award and payment record directly, verifying that announced compensation was calculated correctly and actually disbursed." },
    ],
    lifecycleTitle: "The Compensation Disbursement Lifecycle",
    lifecycleSubtitle:
      "Follow one affected family from parcel assessment through transparent calculation to confirmed payment.",
    lifecycleSteps: [
      {
        label: "Parcel Assessment",
        description:
          "The acquired parcel is assessed and bound to a verified family, recording the area and classification the award will be calculated from.",
        icon: Home,
        logFilename: "cerulea_land_comp.log",
        logLines: [
          { text: "[SYS] Registering acquired parcel PCL_2291...", time: "09:44:03", tone: "default" },
          { text: "[CMD] assessParcel { family: \"FAM_7712\", area: 0.34, class: \"AGRI\" }", time: "09:44:03", tone: "primary" },
          { text: "[AUTH] Verifying family identity in civil registry...", time: "09:44:04", tone: "secondary" },
          { text: "[OK] Parcel bound to family at block 6640118.", time: "09:44:04", tone: "success" },
        ],
      },
      {
        label: "Award Calculation",
        description:
          "The compensation formula is applied and anchored, so the family can see the parcel rate, solatium, and total that make up its award.",
        icon: Scale,
        logFilename: "cerulea_land_comp.log",
        logLines: [
          { text: "[SYS] Computing award for FAM_7712...", time: "11:20:18", tone: "default" },
          { text: "[CMD] calcAward(\"PCL_2291\", rate: 1450000, solatium: 100)", time: "11:20:18", tone: "primary" },
          { text: "[SYS] Anchoring calculation breakdown on-chain...", time: "11:20:19", tone: "default" },
          { text: "[OK] Award 986,000 anchored, fully itemized.", time: "11:20:19", tone: "success" },
        ],
      },
      {
        label: "Escrowed Payment",
        description:
          "Funds are released to the verified family account, and the payment confirmation is recorded against the award as proof of receipt.",
        icon: Wallet,
        logFilename: "cerulea_land_comp.log",
        logLines: [
          { text: "[SYS] Releasing award to verified family account...", time: "14:07:41", tone: "default" },
          { text: "[CMD] payAward(\"FAM_7712\", 986000)", time: "14:07:41", tone: "primary" },
          { text: "[AUTH] Capturing bank confirmation reference...", time: "14:07:42", tone: "secondary" },
          { text: "[OK] Payment confirmed. Receipt sealed to award.", time: "14:07:42", tone: "success" },
        ],
      },
      {
        label: "Oversight Verification",
        description:
          "An auditor or court queries the record to confirm the award was calculated correctly and the payment reached the family.",
        icon: Search,
        logFilename: "cerulea_land_comp.log",
        logLines: [
          { text: "[SYS] Oversight query for family FAM_7712...", time: "10:33:26", tone: "default" },
          { text: "[CMD] verifyRecord(\"FAM_7712\")", time: "10:33:26", tone: "primary" },
          { text: "[SYS] Returning calculation and payment proof...", time: "10:33:27", tone: "default" },
          { text: "[OK] Award and receipt verified. Trail intact.", time: "10:33:27", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes compensation disbursement into modular contracts. Each layer verifies the family, calculates the award, pays it, and exposes the record without any office able to obscure the process.",
    layers: [
      {
        title: "Family Registry",
        subtitle: "The Verified Claimant",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Claimant",
          description:
            "Binds each award to a verified family and land parcel. It prevents duplicated or fabricated claimants by tying compensation to an identity in the civil registry rather than a name on a list.",
          platformFunction: "Civil Registry",
        },
        codeSnippet:
          "contract CompensationRegistry {\n  struct Award {\n    bytes32 family;\n    bytes32 parcel;\n    uint256 amount;\n    bool paid;\n  }\n\n  mapping(bytes32 => Award) public awards;\n\n  function bind(bytes32 id, bytes32 family, bytes32 parcel) external onlyOfficer {\n    awards[id] = Award(family, parcel, 0, false);\n  }\n}",
        simAction: "Simulate Family Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading civil registry identity for FAM_7712...", tone: "default" },
          { text: "Binding parcel PCL_2291 to family...", tone: "default" },
          { text: "Checking for duplicate claimants...", tone: "default" },
          { text: "Writing award record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Verified claimant anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Award Calculator",
        subtitle: "The Open Formula",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Open Formula",
          description:
            "Applies and anchors the compensation calculation per family. Rate, area, and solatium are visible components, so a household understands how its figure was derived instead of receiving an unexplained sum.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function calcAward(bytes32 id, uint256 rate, uint16 solatiumPct) external onlyOfficer {\n    Award storage a = awards[id];\n    uint256 base = area[a.parcel] * rate;\n    a.amount = base + (base * solatiumPct) / 100;\n    emit AwardCalculated(id, a.amount);\n}",
        simAction: "Simulate Award Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading parcel area for PCL_2291...", tone: "default" },
          { text: "Applying rate 1,450,000 per unit...", tone: "default" },
          { text: "Adding 100 percent solatium...", tone: "default" },
          { text: "Anchoring itemized breakdown...", tone: "default" },
          { text: "[SUCCESS] Award 986,000 anchored transparently.", tone: "success" },
        ],
      },
      {
        title: "Payout Escrow",
        subtitle: "The Confirmed Receipt",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Confirmed Receipt",
          description:
            "Releases the award to the verified family account and records the confirmation reference. It closes the common gap between an announced compensation figure and money the family actually received.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function payAward(bytes32 id, bytes32 bankRef) external onlyTreasury {\n    Award storage a = awards[id];\n    require(a.amount > 0 && !a.paid, \"Invalid\");\n    a.paid = true;\n    receipts[id] = bankRef;\n    emit AwardPaid(id, a.amount, bankRef);\n}",
        simAction: "Simulate Award Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Releasing 986,000 to family account...", tone: "default" },
          { text: "Capturing bank confirmation reference...", tone: "default" },
          { text: "Sealing receipt to award record...", tone: "default" },
          { text: "Marking award as paid...", tone: "default" },
          { text: "[SUCCESS] Payment confirmed and recorded.", tone: "success" },
        ],
      },
      {
        title: "Oversight Gateway",
        subtitle: "The Public Proof",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Public Proof",
          description:
            "A read interface for families, auditors, and courts. It returns the calculation breakdown and payment receipt together, so anyone with standing can verify that compensation was fair and actually delivered.",
          platformFunction: "Oversight Access",
        },
        codeSnippet:
          "function verifyRecord(bytes32 id) external view returns (Award memory, bytes32 receipt) {\n    return (awards[id], receipts[id]);\n}",
        simAction: "Simulate Oversight Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Oversight opening record for FAM_7712...", tone: "default" },
          { text: "Returning calculation breakdown...", tone: "default" },
          { text: "Attaching payment receipt reference...", tone: "default" },
          { text: "Verifying award and receipt integrity...", tone: "default" },
          { text: "[SUCCESS] Fair calculation and receipt confirmed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent compensation disbursement is a horizontal capability. Here is how different actors put the per-family record to work.",
    sectors: [
      { icon: Landmark, title: "Acquiring Authorities", description: "Run acquisition payouts with a defensible, itemized record per family, reducing litigation by showing calculation and payment openly rather than defending an opaque process.", assetTypes: ["Award Calculations", "Payment Receipts", "Compliance Seals"] },
      { icon: Home, title: "Affected Families", description: "See exactly how their compensation was worked out and confirm the money arrived, with a recorded channel to raise a grievance against the calculation.", assetTypes: ["Award Breakdowns", "Receipt Proofs", "Grievance Records"] },
      { icon: Search, title: "Courts & Auditors", description: "Query the calculation and receipt for any family directly, resolving disputes against a tamper-evident record instead of reconstructing a paper file.", assetTypes: ["Verification Queries", "Statutory Attestations", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a land records system or capturing awards from field officers, Cerulea routes both into one transparent compensation record.",
    tracks: [
      {
        title: "Track A: Land Records Bridging",
        description:
          "For authorities on land records and treasury systems. Parcel and award data translate into anchored on-chain compensation records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Land Records System", sublabel: "Revenue Department Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Award Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Compensation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Officer Capture",
        description:
          "For field officers and grievance desks. A mobile app signs assessments and grievances from a device wallet and routes them directly to the compensation contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field App / Wallet", sublabel: "Officer Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Assessment Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Family Compensation Record", icon: Home, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a transparent compensation system with verified identity, open calculation, escrowed payout, and oversight access from scratch requires specialised govtech engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Award & Payment Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects govtech disbursement integration benchmarks. Verifying family identity, anchoring open calculations, and building oversight access for an average acquisition takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your award and payment rules into pre-audited WebAssembly binaries and provisions the registry and escrow layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "multi-contractor-joint-venture-cost-sharing-and-dispute-resolution",
    icon: Users,
    eyebrow: "Joint Venture Ledger Layer",
    headline1: "Share one cost ledger.",
    headline2: "Resolve as you go.",
    heroDescription:
      "Give every joint venture partner real-time visibility into a shared cost ledger, so contributions and revenue shares reconcile continuously. Cost disputes are settled as they arise instead of erupting in a contentious final reconciliation at project close-out.",
    heroCta: "Deploy Joint Venture Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a set of private partner spreadsheets into one shared, continuously reconciled cost ledger.",
    mechanics: [
      { title: "Shared Cost Ledger", description: "The Procurement Ledger module records every partner contribution and project cost to one ledger all venturers can see, replacing reconciled-after-the-fact private books." },
      { title: "Contribution Tracking", description: "Each partner's cost inputs are tagged to its identity and the agreed share, so the running balance of who has funded what is always current and visible to all." },
      { title: "Audit Logs", description: "The Audit Logs module timestamps every entry and edit, giving partners a tamper-evident history that removes the he-said basis for close-out disputes." },
      { title: "Escrowed Settlements", description: "The Escrow and Conditional Settlement module holds and releases inter-partner balancing payments automatically as shares drift from the agreed ratio." },
      { title: "Real-Time Reconciliation", description: "The ledger continuously compares actual contributions against the agreed split, flagging imbalances the moment they appear rather than at final account." },
      { title: "Dispute Trail", description: "A contested cost is marked and discussed against the exact entry, so a disagreement is resolved on evidence rather than dueling invoices months later." },
    ],
    lifecycleTitle: "The Cost-Sharing Lifecycle",
    lifecycleSubtitle:
      "Follow a joint venture from partner onboarding through shared cost entry to continuous reconciliation.",
    lifecycleSteps: [
      {
        label: "Venture Setup",
        description:
          "Partners register with their agreed cost and revenue shares, fixing the ratio every later contribution and settlement reconciles against.",
        icon: Users,
        logFilename: "cerulea_jv_ledger.log",
        logLines: [
          { text: "[SYS] Initializing Joint Venture Ledger...", time: "08:30:11", tone: "default" },
          { text: "[CMD] registerJV { partners: 3, split: [40,35,25] }", time: "08:30:11", tone: "primary" },
          { text: "[AUTH] Verifying partner signatures on agreement...", time: "08:30:12", tone: "secondary" },
          { text: "[OK] Venture anchored at block 5901220.", time: "08:30:12", tone: "success" },
        ],
      },
      {
        label: "Cost Entry",
        description:
          "Each partner posts its incurred costs to the shared ledger, tagged to its identity, so every entry is visible to the other venturers immediately.",
        icon: Workflow,
        logFilename: "cerulea_jv_ledger.log",
        logLines: [
          { text: "[SYS] Partner A posting site cost entry...", time: "11:14:37", tone: "default" },
          { text: "[CMD] postCost(\"PARTNER_A\", amount: 1250000, head: \"FORMWORK\")", time: "11:14:37", tone: "primary" },
          { text: "[SYS] Entry visible to all partners in real time...", time: "11:14:38", tone: "default" },
          { text: "[OK] Cost recorded. Partner A contribution updated.", time: "11:14:38", tone: "success" },
        ],
      },
      {
        label: "Reconciliation",
        description:
          "The ledger compares each partner's actual contribution against the agreed share and flags any imbalance for settlement.",
        icon: Scale,
        logFilename: "cerulea_jv_ledger.log",
        logLines: [
          { text: "[SYS] Running continuous reconciliation...", time: "17:02:09", tone: "default" },
          { text: "[CMD] reconcile(period: \"2026-M03\")", time: "17:02:09", tone: "primary" },
          { text: "[SYS] Partner C under target by 340,000...", time: "17:02:10", tone: "default" },
          { text: "[OK] Imbalance flagged for balancing settlement.", time: "17:02:10", tone: "success" },
        ],
      },
      {
        label: "Balancing Settlement",
        description:
          "An escrowed balancing payment moves funds between partners to restore the agreed ratio, resolving the imbalance without waiting for close-out.",
        icon: Wallet,
        logFilename: "cerulea_jv_ledger.log",
        logLines: [
          { text: "[SYS] Executing balancing settlement...", time: "17:05:44", tone: "default" },
          { text: "[CMD] settleBalance(from: \"PARTNER_C\", to: \"PARTNER_A\", 340000)", time: "17:05:44", tone: "primary" },
          { text: "[AUTH] Releasing from escrow against agreed split...", time: "17:05:45", tone: "secondary" },
          { text: "[OK] Shares realigned. Dispute avoided.", time: "17:05:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes joint venture accounting into modular contracts. Each layer registers shares, records costs, reconciles, and settles balances without any partner keeping a private version of the truth.",
    layers: [
      {
        title: "Venture Registry",
        subtitle: "The Agreed Split",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Agreed Split",
          description:
            "The foundational layer. It records each partner and its cost and revenue share, fixing the ratio that all contributions and settlements reconcile against for the life of the venture.",
          platformFunction: "Partnership Registry",
        },
        codeSnippet:
          "contract JVRegistry {\n  struct Partner {\n    address wallet;\n    uint16 sharePct;\n    uint256 contributed;\n  }\n\n  mapping(bytes32 => Partner) public partners;\n\n  function register(bytes32 id, address wallet, uint16 pct) external onlyLead {\n    partners[id] = Partner(wallet, pct, 0);\n  }\n}",
        simAction: "Simulate Venture Setup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading joint venture agreement...", tone: "default" },
          { text: "Registering 3 partners with shares...", tone: "default" },
          { text: "Fixing 40/35/25 cost split...", tone: "default" },
          { text: "Writing venture state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Agreed split anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Cost Ledger",
        subtitle: "The Shared Book",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Book",
          description:
            "Records every partner contribution and project cost to one ledger all venturers read. It replaces private books reconciled at close-out with a single, continuously visible source of truth.",
          platformFunction: "Procurement Ledger",
        },
        codeSnippet:
          "function postCost(bytes32 partner, uint256 amount, string calldata head) external onlyPartner(partner) {\n    partners[partner].contributed += amount;\n    entries.push(Entry(partner, amount, head, block.timestamp));\n    emit CostPosted(partner, amount, head);\n}",
        simAction: "Simulate Cost Entry",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Partner A posting formwork cost...", tone: "default" },
          { text: "Tagging entry to partner identity...", tone: "default" },
          { text: "Adding 1,250,000 to contribution total...", tone: "default" },
          { text: "Publishing entry to all partners...", tone: "default" },
          { text: "[SUCCESS] Cost recorded in shared ledger.", tone: "success" },
        ],
      },
      {
        title: "Reconciler",
        subtitle: "The Imbalance Detector",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Imbalance Detector",
          description:
            "Compares each partner's actual contribution against the agreed share continuously. It surfaces a drift from the ratio the moment it appears, so imbalances are resolved early rather than at final account.",
          platformFunction: "Reconciliation",
        },
        codeSnippet:
          "function reconcile() external view returns (bytes32[] memory, int256[] memory) {\n    int256[] memory deltas = new int256[](count);\n    for (uint i; i < count; i++) {\n        deltas[i] = int256(target(i)) - int256(partners[ids[i]].contributed);\n    }\n    return (ids, deltas);\n}",
        simAction: "Simulate Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing target contribution per share...", tone: "default" },
          { text: "Comparing actuals against targets...", tone: "default" },
          { text: "Detecting Partner C shortfall of 340,000...", tone: "default" },
          { text: "Flagging imbalance for settlement...", tone: "default" },
          { text: "[SUCCESS] Drift surfaced in real time.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Balancing Engine",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Balancing Engine",
          description:
            "Moves escrowed balancing payments between partners to restore the agreed ratio. It turns a close-out fight over who owes whom into an automatic, evidence-backed transfer during the project.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function settleBalance(bytes32 from, bytes32 to, uint256 amount) external {\n    require(shortfall(from) >= amount, \"Overpay\");\n    partners[from].contributed += amount;\n    payable(partners[to].wallet).transfer(amount);\n    emit Balanced(from, to, amount);\n}",
        simAction: "Simulate Balancing Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading flagged imbalance for Partner C...", tone: "default" },
          { text: "Releasing 340,000 from escrow...", tone: "default" },
          { text: "Transferring balance to Partner A...", tone: "default" },
          { text: "Realigning contributions to agreed split...", tone: "default" },
          { text: "[SUCCESS] Shares balanced, dispute avoided.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared-ledger cost sharing is a horizontal capability. Here is how different joint venture actors put the continuous reconciliation to work.",
    sectors: [
      { icon: Pickaxe, title: "Lead Contractors", description: "Run the venture on one shared ledger every partner trusts, closing out projects without the marathon reconciliation that normally sours the final account.", assetTypes: ["Shared Ledgers", "Contribution Balances", "Settlement Records"] },
      { icon: Users, title: "JV Partners", description: "See contributions and imbalances in real time from a partner node, funding your share on evidence and settling drift as it arises rather than arguing at the end.", assetTypes: ["Cost Entries", "Share Positions", "Balancing Payments"] },
      { icon: PieChart, title: "Project Accountants", description: "Draw a live, tamper-evident cost position for the venture at any time, replacing consolidation of separate partner books with a single reconciled ledger.", assetTypes: ["Cost Positions", "Reconciliation Reports", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging each partner's accounting system or capturing costs from project managers, Cerulea routes both into one shared venture ledger.",
    tracks: [
      {
        title: "Track A: Partner Accounting Bridging",
        description:
          "For partners on separate accounting systems. Posted costs translate into shared on-chain ledger entries through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Partner Accounting", sublabel: "Separate Finance Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Entry Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Venture Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Project Manager Capture",
        description:
          "For project managers posting costs from site. A mobile app signs cost entries from a device wallet and routes them directly to the venture ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "PM App / Wallet", sublabel: "Manager Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Ledger Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Cost-Sharing Record", icon: Users, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared cost ledger with continuous reconciliation and escrowed balancing settlements from scratch requires specialised accounting and blockchain engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Cost & Settlement Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects enterprise accounting integration benchmarks. Wiring each partner's books, building continuous reconciliation, and automating balancing settlements for an average venture takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your cost and settlement rules into pre-audited WebAssembly binaries and provisions the shared ledger and escrow layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "construction-materials-provenance-and-quality-certification",
    icon: Package,
    eyebrow: "Materials Provenance Engine",
    headline1: "Verify every batch.",
    headline2: "Gate payment on quality.",
    heroDescription:
      "Run a private project materials chain that binds each batch to its origin and lab test results before it reaches the site. Delivery approval and supplier payment are gated on a passing quality certificate, so substandard material under a falsified document never gets installed.",
    heroCta: "Deploy Materials Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn falsifiable paper certificates into batch provenance with payment-gated quality approval.",
    mechanics: [
      { title: "Batch Provenance", description: "The Traceability Ledger records each material batch from its source plant, so a delivery maps to a verifiable origin instead of an unverifiable challan." },
      { title: "Lab Certification", description: "The Quality and Recall Ledger binds independent lab test results to the batch, making a passing grade a signed on-chain fact rather than a printed sheet." },
      { title: "Provenance Notary", description: "Mill certificates and test reports are anchored by digest, so any tampering with a quality document breaks its hash and is instantly detectable." },
      { title: "Payment-Gated Delivery", description: "The contract approves site delivery and releases supplier payment only when a passing certificate exists, keeping unverified batches out and disputes to zero." },
      { title: "Automated Recall", description: "If a later test fails, the ledger isolates the exact batch and every location it was installed, triggering a targeted recall instead of a site-wide stop." },
      { title: "Supplier Scorecard", description: "Pass and fail rates accumulate against each supplier, giving the developer an evidence-based basis for approving vendors on future packages." },
    ],
    lifecycleTitle: "The Materials Certification Lifecycle",
    lifecycleSubtitle:
      "Follow one material batch from source registration through lab certification to payment-gated delivery.",
    lifecycleSteps: [
      {
        label: "Batch Origination",
        description:
          "The supplier registers a batch at its source plant, anchoring the mill certificate and lot identity that every later record points back to.",
        icon: Factory,
        logFilename: "cerulea_materials.log",
        logLines: [
          { text: "[SYS] Registering material batch at source...", time: "07:22:41", tone: "default" },
          { text: "[CMD] registerBatch { mat: \"TMT_FE550\", lot: \"STL_9921\", qty: 42 }", time: "07:22:41", tone: "primary" },
          { text: "[AUTH] Anchoring mill certificate by digest...", time: "07:22:42", tone: "secondary" },
          { text: "[OK] Batch STL_9921 anchored at block 6812004.", time: "07:22:42", tone: "success" },
        ],
      },
      {
        label: "Lab Testing",
        description:
          "An independent lab tests the batch and signs the result on-chain, binding a pass or fail grade to the batch identity.",
        icon: FlaskConical,
        logFilename: "cerulea_materials.log",
        logLines: [
          { text: "[SYS] Lab receiving sample for STL_9921...", time: "10:48:15", tone: "default" },
          { text: "[CMD] certifyBatch(\"STL_9921\", yield: 561, grade: \"PASS\")", time: "10:48:16", tone: "primary" },
          { text: "[AUTH] Sealing test report to batch...", time: "10:48:16", tone: "secondary" },
          { text: "[OK] Quality certificate anchored. Batch cleared.", time: "10:48:17", tone: "success" },
        ],
      },
      {
        label: "Gated Delivery",
        description:
          "At the site gate the contract checks for a passing certificate before accepting the batch, rejecting any delivery without one.",
        icon: Truck,
        logFilename: "cerulea_materials.log",
        logLines: [
          { text: "[SYS] Delivery scan at site gate for STL_9921...", time: "14:05:52", tone: "default" },
          { text: "[CMD] approveDelivery(\"STL_9921\")", time: "14:05:52", tone: "primary" },
          { text: "[SYS] Verifying passing quality certificate exists...", time: "14:05:53", tone: "default" },
          { text: "[OK] Certificate valid. Delivery accepted on site.", time: "14:05:53", tone: "success" },
        ],
      },
      {
        label: "Payment Release",
        description:
          "With delivery approved against a valid certificate, the contract releases supplier payment, tying money to verified quality.",
        icon: Wallet,
        logFilename: "cerulea_materials.log",
        logLines: [
          { text: "[SYS] Delivery approved, releasing payment...", time: "14:06:20", tone: "default" },
          { text: "[CMD] paySupplier(\"STL_9921\", 1890000)", time: "14:06:20", tone: "primary" },
          { text: "[SYS] Updating supplier scorecard, PASS +1...", time: "14:06:21", tone: "default" },
          { text: "[OK] Supplier paid. Quality dispute risk zero.", time: "14:06:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes materials certification into modular contracts. Each layer origins the batch, certifies quality, gates delivery, and releases payment without any supplier able to pass off an unverified batch.",
    layers: [
      {
        title: "Batch Registry",
        subtitle: "The Source Anchor",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Source Anchor",
          description:
            "The foundational layer. It mints a batch identity at the source plant and stores the immutable link to material grade, lot, and mill certificate that every later quality and delivery record references.",
          platformFunction: "Traceability Ledger",
        },
        codeSnippet:
          "contract MaterialRegistry {\n  struct Batch {\n    address supplier;\n    string material;\n    bytes32 millCert;\n    bool certified;\n    bool delivered;\n  }\n\n  mapping(bytes32 => Batch) public batches;\n\n  function register(bytes32 id, string calldata mat, bytes32 cert) external {\n    batches[id] = Batch(msg.sender, mat, cert, false, false);\n  }\n}",
        simAction: "Simulate Batch Origination",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading supplier credential at source...", tone: "default" },
          { text: "Anchoring mill certificate digest...", tone: "default" },
          { text: "Minting batch identity STL_9921...", tone: "default" },
          { text: "Writing batch state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Batch anchored at source plant.", tone: "success" },
        ],
      },
      {
        title: "Quality Notary",
        subtitle: "The Lab Seal",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Lab Seal",
          description:
            "Binds independent test results to the batch. Only a whitelisted lab can certify, so a passing grade becomes a signed on-chain fact that a forged printed certificate cannot imitate.",
          platformFunction: "Quality & Recall Ledger",
        },
        codeSnippet:
          "function certify(bytes32 id, uint256 result, bool pass, bytes32 reportHash) external onlyLab {\n    batches[id].certified = pass;\n    quality[id] = Quality(result, pass, reportHash, msg.sender);\n    emit QualityCertified(id, pass, msg.sender);\n}",
        simAction: "Simulate Lab Certification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying lab is on approved panel...", tone: "default" },
          { text: "Recording yield strength 561 MPa...", tone: "default" },
          { text: "Sealing test report to batch...", tone: "default" },
          { text: "Setting batch quality flag to pass...", tone: "default" },
          { text: "[SUCCESS] Quality certificate anchored.", tone: "success" },
        ],
      },
      {
        title: "Delivery Gate",
        subtitle: "The Site Filter",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Site Filter",
          description:
            "Blocks any batch without a passing certificate from acceptance. It moves quality control to the moment of delivery, keeping substandard material off the site rather than discovering it after installation.",
          platformFunction: "Delivery Control",
        },
        codeSnippet:
          "function approveDelivery(bytes32 id) external onlySite {\n    require(batches[id].certified, \"No passing certificate\");\n    require(!batches[id].delivered, \"Already delivered\");\n    batches[id].delivered = true;\n    emit DeliveryApproved(id);\n}",
        simAction: "Simulate Gated Delivery",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning batch STL_9921 at site gate...", tone: "default" },
          { text: "Checking for passing quality certificate...", tone: "default" },
          { text: "Certificate valid, accepting delivery...", tone: "default" },
          { text: "Marking batch as delivered...", tone: "default" },
          { text: "[SUCCESS] Only verified material admitted.", tone: "success" },
        ],
      },
      {
        title: "Payment Escrow",
        subtitle: "The Quality Gate",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Quality Gate",
          description:
            "Releases supplier payment only after certified delivery. It ties money directly to verified quality and updates a supplier scorecard, ending payment disputes over rejected or substandard batches.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function paySupplier(bytes32 id, uint256 amount) external {\n    require(batches[id].delivered, \"Not delivered\");\n    address s = batches[id].supplier;\n    scorecard[s].passes += 1;\n    payable(s).transfer(amount);\n    emit SupplierPaid(id, s, amount);\n}",
        simAction: "Simulate Payment Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming certified delivery for STL_9921...", tone: "default" },
          { text: "Transferring 1,890,000 to supplier...", tone: "default" },
          { text: "Incrementing supplier pass count...", tone: "default" },
          { text: "Recording payment against batch...", tone: "default" },
          { text: "[SUCCESS] Payment tied to verified quality.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Payment-gated materials provenance is a horizontal capability. Here is how different construction actors put the batch chain to work.",
    sectors: [
      { icon: Building2, title: "Developers & Principals", description: "Guarantee no unverified batch is installed by gating delivery and payment on lab certification, and target recalls to a single batch instead of stopping the whole site.", assetTypes: ["Batch Records", "Quality Certificates", "Recall Isolations"] },
      { icon: Factory, title: "Material Suppliers", description: "Get paid faster on verified batches and build an on-chain quality track record that wins future packages, replacing disputes over rejected loads with clean settlement.", assetTypes: ["Mill Certificates", "Supplier Scorecards", "Fast Payouts"] },
      { icon: FlaskConical, title: "Testing Laboratories", description: "Sign test results directly to the batch, turning a printed report that can be forged into a tamper-evident certificate the whole project relies on.", assetTypes: ["Test Reports", "Quality Seals", "Certification Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging supplier ERP and lab systems or capturing deliveries from a site gate scanner, Cerulea routes both into one materials provenance record.",
    tracks: [
      {
        title: "Track A: Supplier & Lab System Bridging",
        description:
          "For suppliers and labs on established systems. Batch and test data translate into anchored on-chain provenance and quality records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Supplier ERP / LIMS", sublabel: "Source & Lab Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Batch Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Materials Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Site Gate Capture",
        description:
          "For site teams verifying deliveries. A gate scanner app signs delivery approvals from a device wallet and routes them directly to the materials contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Gate Scanner / Wallet", sublabel: "Site Devices", icon: QrCode, accent: false },
          { label: "Consortium Validators", sublabel: "Delivery Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Batch Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a materials chain with batch provenance, lab certification, payment-gated delivery, and automated recall from scratch requires specialised supply-chain engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Provenance & Quality Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects supply-chain integration benchmarks. Wiring supplier and lab systems, building payment-gated delivery, and shipping automated recall for an average project takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your provenance and quality rules into pre-audited WebAssembly binaries and provisions the traceability and recall layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "homebuyer-escrow-and-construction-linked-payment-release",
    icon: Home,
    eyebrow: "Buyer Escrow Layer",
    headline1: "Hold the buyer's money.",
    headline2: "Release on real progress.",
    heroDescription:
      "Hold homebuyer payments in escrow and release them to the developer only as independently verified construction milestones are reached. Payment tracks actual progress, meeting RERA-style transparency expectations instead of asking buyers to trust an upfront lump sum.",
    heroCta: "Deploy Buyer Escrow",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a trust-me upfront payment into escrowed funds released against verified construction milestones.",
    mechanics: [
      { title: "Buyer Escrow Vault", description: "The Escrow and Conditional Settlement module holds each buyer's payments against their specific unit, so money is provably reserved for that project rather than diverted." },
      { title: "Milestone-Linked Release", description: "Funds move to the developer only as construction milestones complete, aligning cash flow with progress and satisfying RERA-style project account rules." },
      { title: "Independent Verification", description: "The Provenance Notary anchors milestone evidence, and an independent engineer signs completion, so a release rests on verified progress, not a developer claim." },
      { title: "Compliance Attestation", description: "The Compliance Attestations module seals each milestone against the sanctioned plan and RERA registration, giving buyers a regulator-aligned trail." },
      { title: "Per-Unit Ledger", description: "Each buyer sees the escrow balance, milestones completed, and amounts released for their own unit, replacing opaque account statements with a live view." },
      { title: "Refund Path", description: "If a milestone stalls beyond agreed limits, the contract can return unreleased escrow to the buyer, protecting funds when a project fails to progress." },
    ],
    lifecycleTitle: "The Construction-Linked Payment Lifecycle",
    lifecycleSubtitle:
      "Follow one homebuyer's funds from escrow deposit through verified milestone to a proportionate release.",
    lifecycleSteps: [
      {
        label: "Escrow Deposit",
        description:
          "The buyer deposits payments into an escrow bound to their unit, with the funds visibly reserved and not yet available to the developer.",
        icon: Wallet,
        logFilename: "cerulea_buyer_escrow.log",
        logLines: [
          { text: "[SYS] Initializing Buyer Escrow for unit...", time: "09:10:30", tone: "default" },
          { text: "[CMD] deposit { unit: \"TWR_C_1104\", buyer: 0x77a2, amount: 3500000 }", time: "09:10:30", tone: "primary" },
          { text: "[AUTH] Binding deposit to RERA project account...", time: "09:10:31", tone: "secondary" },
          { text: "[OK] Escrow funded at block 7120334.", time: "09:10:31", tone: "success" },
        ],
      },
      {
        label: "Milestone Completion",
        description:
          "The developer completes a construction stage and anchors evidence, entering the verification queue rather than drawing funds directly.",
        icon: Pickaxe,
        logFilename: "cerulea_buyer_escrow.log",
        logLines: [
          { text: "[SYS] Developer declaring milestone STRUCT_L11...", time: "13:24:18", tone: "default" },
          { text: "[CMD] declareMilestone(\"STRUCT_L11\", evidence: 0x9a4c)", time: "13:24:18", tone: "primary" },
          { text: "[SYS] Anchoring stage progress by digest...", time: "13:24:19", tone: "default" },
          { text: "[OK] Milestone queued for engineer verification.", time: "13:24:19", tone: "success" },
        ],
      },
      {
        label: "Engineer Verification",
        description:
          "An independent engineer verifies the stage and signs completion, the condition the escrow accepts before any release.",
        icon: FileCheck,
        logFilename: "cerulea_buyer_escrow.log",
        logLines: [
          { text: "[SYS] Engineer inspecting STRUCT_L11...", time: "10:40:05", tone: "default" },
          { text: "[CMD] verifyMilestone(\"STRUCT_L11\", status: \"PASS\")", time: "10:40:06", tone: "primary" },
          { text: "[AUTH] Sealing verification to sanctioned plan...", time: "10:40:06", tone: "secondary" },
          { text: "[OK] Milestone verified. Release unlocked.", time: "10:40:07", tone: "success" },
        ],
      },
      {
        label: "Proportionate Release",
        description:
          "The contract releases the milestone's share of each buyer's escrow to the developer, keeping payment aligned with verified progress.",
        icon: Zap,
        logFilename: "cerulea_buyer_escrow.log",
        logLines: [
          { text: "[SYS] Release condition met for STRUCT_L11...", time: "10:40:08", tone: "default" },
          { text: "[CMD] releaseStage(\"TWR_C_1104\", pct: 15)", time: "10:40:08", tone: "primary" },
          { text: "[SYS] Moving 525,000 to developer, 2,975,000 held...", time: "10:40:09", tone: "default" },
          { text: "[OK] Released against progress. Buyer ledger updated.", time: "10:40:09", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes construction-linked payment into modular contracts. Each layer escrows buyer funds, verifies milestones, releases proportionately, and exposes a per-unit ledger without the developer touching unearned money.",
    layers: [
      {
        title: "Escrow Vault",
        subtitle: "The Reserved Fund",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reserved Fund",
          description:
            "The custody layer for buyer money. It holds each buyer's payments against their specific unit and the RERA project account, so funds are provably reserved and cannot be spent ahead of verified progress.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract BuyerEscrow {\n  struct Unit {\n    address buyer;\n    uint256 deposited;\n    uint256 released;\n  }\n\n  mapping(bytes32 => Unit) public units;\n\n  function deposit(bytes32 unit) external payable {\n    units[unit].buyer = msg.sender;\n    units[unit].deposited += msg.value;\n  }\n}",
        simAction: "Simulate Escrow Deposit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading buyer wallet for unit TWR_C_1104...", tone: "default" },
          { text: "Binding deposit to RERA project account...", tone: "default" },
          { text: "Reserving 3,500,000 against the unit...", tone: "default" },
          { text: "Writing escrow state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Buyer funds reserved on-chain.", tone: "success" },
        ],
      },
      {
        title: "Milestone Gate",
        subtitle: "The Verified Stage",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Stage",
          description:
            "Requires independent sign-off before any release. A developer declaration alone unlocks nothing, so buyer funds only move once an engineer verifies the construction stage against the sanctioned plan.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function verifyMilestone(bytes32 stage, bool pass) external onlyEngineer {\n    require(!verified[stage], \"Done\");\n    verified[stage] = pass;\n    emit MilestoneVerified(stage, msg.sender, pass);\n}",
        simAction: "Simulate Milestone Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading anchored evidence for STRUCT_L11...", tone: "default" },
          { text: "Verifying engineer is independent panel...", tone: "default" },
          { text: "Recording PASS against sanctioned plan...", tone: "default" },
          { text: "Unlocking proportionate release...", tone: "default" },
          { text: "[SUCCESS] Stage verified, release enabled.", tone: "success" },
        ],
      },
      {
        title: "Release Engine",
        subtitle: "The Proportionate Payout",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proportionate Payout",
          description:
            "Releases only the verified milestone's share of each buyer's escrow. It keeps the balance of funds locked, so developer receipts track construction progress stage by stage.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function releaseStage(bytes32 unit, uint16 pct) external {\n    require(verified[currentStage], \"Not verified\");\n    Unit storage u = units[unit];\n    uint256 amount = (u.deposited * pct) / 100;\n    u.released += amount;\n    payable(developer).transfer(amount);\n    emit StageReleased(unit, amount);\n}",
        simAction: "Simulate Proportionate Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming verified stage STRUCT_L11...", tone: "default" },
          { text: "Computing 15 percent of escrow...", tone: "default" },
          { text: "Releasing 525,000 to developer...", tone: "default" },
          { text: "Holding 2,975,000 against future stages...", tone: "default" },
          { text: "[SUCCESS] Payment matched to progress.", tone: "success" },
        ],
      },
      {
        title: "Unit Ledger",
        subtitle: "The Buyer Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Buyer Window",
          description:
            "A read interface per unit. Each buyer sees deposits, milestones completed, amounts released, and the balance still held, replacing an opaque developer statement with a live, verifiable view.",
          platformFunction: "Buyer Transparency",
        },
        codeSnippet:
          "function unitStatus(bytes32 unit) external view returns (uint256 deposited, uint256 released, uint256 held) {\n    Unit memory u = units[unit];\n    return (u.deposited, u.released, u.deposited - u.released);\n}",
        simAction: "Simulate Buyer Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer opening ledger for TWR_C_1104...", tone: "default" },
          { text: "Returning deposited 3,500,000...", tone: "default" },
          { text: "Showing released 525,000 to date...", tone: "default" },
          { text: "Confirming 2,975,000 still held...", tone: "default" },
          { text: "[SUCCESS] Live escrow view returned to buyer.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Construction-linked buyer escrow is a horizontal capability. Here is how different housing actors put the milestone-gated release to work.",
    sectors: [
      { icon: Home, title: "Homebuyers", description: "See their money held against their own unit and released only on verified progress, with a refund path if the project stalls, replacing blind upfront trust.", assetTypes: ["Escrow Balances", "Milestone Views", "Refund Rights"] },
      { icon: Building2, title: "Developers", description: "Access buyer funds on a clear, verified schedule while demonstrating RERA-aligned transparency, turning payment discipline into a marketing advantage.", assetTypes: ["Stage Releases", "Verified Milestones", "Project Accounts"] },
      { icon: Landmark, title: "Regulators & Lenders", description: "Read the per-unit escrow and release record directly, monitoring project-account compliance and disbursement against progress without manual audits.", assetTypes: ["Compliance Trails", "Release Records", "Account Audits"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a developer's sales and project systems or capturing milestone sign-off from site engineers, Cerulea routes both into one buyer escrow record.",
    tracks: [
      {
        title: "Track A: Developer System Bridging",
        description:
          "For developers on sales and project management systems. Booking and milestone data translate into escrow deposits and release calls through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Sales / Project System", sublabel: "Developer Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Escrow Funding & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Buyer Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Engineer Verification Capture",
        description:
          "For independent engineers verifying stages on site. A mobile app signs milestone verifications from a device wallet and routes them directly to the escrow contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Engineer App / Wallet", sublabel: "Verification Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Milestone Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Construction-Linked Record", icon: Home, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a buyer escrow with milestone-linked release, independent verification, and per-unit transparency from scratch requires specialised proptech and compliance engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Escrow & Milestone Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects proptech and compliance integration benchmarks. Wiring buyer escrow, milestone verification, and RERA-aligned transparency for an average project takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your escrow and milestone rules into pre-audited WebAssembly binaries and provisions the settlement and attestation layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "subcontractor-labour-compliance-and-wage-payment-verification",
    icon: Users,
    eyebrow: "Labour Compliance Layer",
    headline1: "Link attendance to wages.",
    headline2: "Prove fair pay.",
    heroDescription:
      "Create a verified record linking each daily-wage worker's attendance to their wage payment, ready for ESG and labour audits. Developers get a defensible compliance trail proving at least minimum wage was paid, without unreliable paper registers.",
    heroCta: "Deploy Labour Compliance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn unreliable paper attendance and wage registers into a linked, audit-ready compliance record.",
    mechanics: [
      { title: "Attendance Capture", description: "The Provenance Notary anchors each worker's site attendance from access or biometric check-in, so a shift is a signed record rather than a signature in a muster book." },
      { title: "Wage Linkage", description: "Each wage payment is bound to the specific attendance it settles, creating a provable link between days worked and money paid per worker." },
      { title: "Minimum Wage Attestation", description: "The Compliance Attestations module checks each payment against the applicable minimum wage, flagging any shortfall before it becomes an audit finding." },
      { title: "Audit Logs", description: "The Audit Logs module timestamps every attendance and payment entry, giving auditors a tamper-evident history in place of reconstructed registers." },
      { title: "Subcontractor Accountability", description: "Payments flow and are recorded per subcontractor, so responsibility for underpayment is traceable to the exact labour supplier rather than the principal alone." },
      { title: "ESG Report Export", description: "The linked record exports directly into ESG and labour compliance reports, replacing manual paperwork with a verifiable data source." },
    ],
    lifecycleTitle: "The Wage Verification Lifecycle",
    lifecycleSubtitle:
      "Follow one daily-wage worker from site check-in through wage payment to an audit-ready compliance record.",
    lifecycleSteps: [
      {
        label: "Worker Onboarding",
        description:
          "A worker is enrolled with a verified identity and linked to a subcontractor, so all later attendance and wage records tie to a real individual.",
        icon: IdCard,
        logFilename: "cerulea_labour.log",
        logLines: [
          { text: "[SYS] Enrolling site worker identity...", time: "06:50:12", tone: "default" },
          { text: "[CMD] enrollWorker { id: \"WRK_4471\", subcon: \"LAB_B\" }", time: "06:50:12", tone: "primary" },
          { text: "[AUTH] Binding verified identity credential...", time: "06:50:13", tone: "secondary" },
          { text: "[OK] Worker enrolled at block 6330441.", time: "06:50:13", tone: "success" },
        ],
      },
      {
        label: "Attendance Capture",
        description:
          "The worker checks in at the site gate, and the shift is anchored on-chain against their identity as a signed attendance record.",
        icon: Fingerprint,
        logFilename: "cerulea_labour.log",
        logLines: [
          { text: "[SYS] Gate check-in for WRK_4471...", time: "08:02:41", tone: "default" },
          { text: "[CMD] recordAttendance(\"WRK_4471\", shift: \"2026-03-18\")", time: "08:02:41", tone: "primary" },
          { text: "[SYS] Anchoring biometric check-in proof...", time: "08:02:42", tone: "default" },
          { text: "[OK] Attendance recorded. Shift verified.", time: "08:02:42", tone: "success" },
        ],
      },
      {
        label: "Wage Payment",
        description:
          "The subcontractor pays wages, and each payment is linked to the attendance it settles and checked against the minimum wage.",
        icon: Wallet,
        logFilename: "cerulea_labour.log",
        logLines: [
          { text: "[SYS] Processing wage payment for WRK_4471...", time: "18:15:07", tone: "default" },
          { text: "[CMD] payWage(\"WRK_4471\", days: 6, amount: 3480)", time: "18:15:07", tone: "primary" },
          { text: "[AUTH] Checking rate against minimum wage floor...", time: "18:15:08", tone: "secondary" },
          { text: "[OK] Payment linked to attendance. Above floor.", time: "18:15:08", tone: "success" },
        ],
      },
      {
        label: "Audit Export",
        description:
          "An auditor queries the linked attendance and wage record, exporting a defensible compliance trail without touching paper registers.",
        icon: Search,
        logFilename: "cerulea_labour.log",
        logLines: [
          { text: "[SYS] Auditor requesting wage compliance file...", time: "11:22:30", tone: "default" },
          { text: "[CMD] exportCompliance(subcon: \"LAB_B\", period: \"2026-M03\")", time: "11:22:30", tone: "primary" },
          { text: "[SYS] Linking attendance to payments for 84 workers...", time: "11:22:31", tone: "default" },
          { text: "[OK] Compliance trail exported. Fully verifiable.", time: "11:22:31", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes labour compliance into modular contracts. Each layer enrolls the worker, captures attendance, links wages, and exposes the trail without any subcontractor able to fabricate a register.",
    layers: [
      {
        title: "Worker Registry",
        subtitle: "The Verified Identity",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Identity",
          description:
            "Binds each worker to a verified identity and a subcontractor. It stops ghost workers and duplicate musters by tying every attendance and wage record to a real, enrolled individual.",
          platformFunction: "Identity Registry",
        },
        codeSnippet:
          "contract WorkerRegistry {\n  struct Worker {\n    bytes32 identity;\n    bytes32 subcontractor;\n    bool active;\n  }\n\n  mapping(bytes32 => Worker) public workers;\n\n  function enroll(bytes32 id, bytes32 identity, bytes32 subcon) external onlyPM {\n    workers[id] = Worker(identity, subcon, true);\n  }\n}",
        simAction: "Simulate Worker Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified identity credential...", tone: "default" },
          { text: "Linking worker to subcontractor LAB_B...", tone: "default" },
          { text: "Marking worker active on-chain...", tone: "default" },
          { text: "Writing worker record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Worker identity anchored.", tone: "success" },
        ],
      },
      {
        title: "Attendance Notary",
        subtitle: "The Signed Shift",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Signed Shift",
          description:
            "Anchors each check-in from access or biometric systems. It converts a muster-book signature that can be inflated into a signed, timestamped shift record that an auditor can trust.",
          platformFunction: "Provenance Notary",
        },
        codeSnippet:
          "function recordAttendance(bytes32 worker, bytes32 shift, bytes32 proof) external onlyGate {\n    require(workers[worker].active, \"Unknown worker\");\n    attendance[worker].push(Shift(shift, proof, block.timestamp));\n    emit AttendanceRecorded(worker, shift);\n}",
        simAction: "Simulate Attendance Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving gate check-in for WRK_4471...", tone: "default" },
          { text: "Verifying worker is enrolled and active...", tone: "default" },
          { text: "Anchoring biometric check-in proof...", tone: "default" },
          { text: "Appending shift to attendance record...", tone: "default" },
          { text: "[SUCCESS] Shift recorded, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Wage Linker",
        subtitle: "The Pay Proof",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pay Proof",
          description:
            "Binds each wage payment to the attendance it settles and checks it against the minimum wage floor. A shortfall is flagged at payment time rather than surfacing as an audit finding later.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function payWage(bytes32 worker, uint256 days_, uint256 amount) external onlySubcon {\n    require(amount >= days_ * minWage, \"Below minimum\");\n    payments[worker].push(Payment(days_, amount, block.timestamp));\n    emit WagePaid(worker, days_, amount);\n}",
        simAction: "Simulate Wage Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading 6 attendance shifts for WRK_4471...", tone: "default" },
          { text: "Checking 3,480 against minimum wage floor...", tone: "default" },
          { text: "Linking payment to attendance record...", tone: "default" },
          { text: "Recording wage payment on-chain...", tone: "default" },
          { text: "[SUCCESS] Fair wage proven for the shift set.", tone: "success" },
        ],
      },
      {
        title: "Audit Gateway",
        subtitle: "The Compliance Export",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Export",
          description:
            "A read interface that returns linked attendance and wage data per subcontractor. It exports a defensible ESG and labour compliance trail directly, replacing manual paperwork with a verifiable source.",
          platformFunction: "Audit Access",
        },
        codeSnippet:
          "function exportCompliance(bytes32 subcon, bytes32 period) external view returns (Worker[] memory, Payment[] memory) {\n    return (rosterOf[subcon], paymentsIn[subcon][period]);\n}",
        simAction: "Simulate Audit Export",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor opening compliance file for LAB_B...", tone: "default" },
          { text: "Linking attendance to payments for 84 workers...", tone: "default" },
          { text: "Confirming all payments above floor...", tone: "default" },
          { text: "Assembling exportable trail...", tone: "default" },
          { text: "[SUCCESS] Verifiable compliance file returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Linked wage compliance is a horizontal capability. Here is how different construction actors put the attendance-to-wage record to work.",
    sectors: [
      { icon: Building2, title: "Developers & Principals", description: "Hold a defensible, tamper-evident trail proving fair wage payment across all subcontracted labour, meeting ESG and audit demands without chasing paper registers.", assetTypes: ["Compliance Trails", "Wage Proofs", "ESG Exports"] },
      { icon: Users, title: "Labour Subcontractors", description: "Demonstrate compliant payment to their workforce with linked records, protecting future contracts by proving minimum wage adherence on demand.", assetTypes: ["Attendance Records", "Payment Links", "Roster Ledgers"] },
      { icon: Scale, title: "Labour Auditors", description: "Verify attendance against wages directly for any worker or period, replacing sampling of unreliable musters with a complete, signed data source.", assetTypes: ["Audit Queries", "Minimum Wage Checks", "Verification Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging access-control and payroll systems or capturing check-ins from a site gate device, Cerulea routes both into one wage compliance record.",
    tracks: [
      {
        title: "Track A: Access & Payroll Bridging",
        description:
          "For contractors on access-control and payroll systems. Check-in and payment data translate into linked on-chain attendance and wage records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Access / Payroll System", sublabel: "Contractor Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Wage Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Site Gate Capture",
        description:
          "For site teams capturing check-ins. A gate device signs attendance from a hardware wallet and routes it directly to the compliance contract.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Gate Device / Wallet", sublabel: "Biometric Terminals", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attendance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Attendance-Wage Record", icon: Users, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a labour compliance system with attendance capture, wage linkage, minimum wage checks, and ESG export from scratch requires specialised workforce and compliance engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attendance & Wage Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects workforce-tech integration benchmarks. Wiring access and payroll systems, linking attendance to wages, and building audit export for an average project takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attendance and wage rules into pre-audited WebAssembly binaries and provisions the notary and attestation layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "defect-liability-and-warranty-claim-tracking-post-handover",
    icon: ShieldCheck,
    eyebrow: "Warranty Record Layer",
    headline1: "Anchor the handover date.",
    headline2: "Settle coverage instantly.",
    heroDescription:
      "Record the handover date and every warranty claim in one shared ledger, so disputes about whether a defect falls inside the liability period are settled instantly. Homeowner and builder both see, at a glance, whether a reported issue is still covered.",
    heroCta: "Deploy Warranty Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a contested handover date and scattered claim history into one shared, timestamped warranty record.",
    mechanics: [
      { title: "Handover Anchor", description: "The Provenance Notary seals the handover date and defect liability period for each unit, so the clock on coverage starts from an agreed, immutable point." },
      { title: "Claim Timestamping", description: "Each warranty claim is recorded with its date against the unit, building a complete history instead of scattered emails and site visit notes." },
      { title: "Coverage Check", description: "The Compliance Attestations module compares a claim date against the liability window automatically, returning covered or lapsed without argument." },
      { title: "Audit Logs", description: "The Audit Logs module records every claim, response, and resolution, giving both parties a tamper-evident trail of how each issue was handled." },
      { title: "Resolution Tracking", description: "A claim's status moves from raised to acknowledged to resolved on-chain, so neither party can later dispute whether a defect was actually fixed." },
      { title: "Shared Visibility", description: "Homeowner and builder read the same record, replacing conflicting private accounts of the handover date and claim history with one source of truth." },
    ],
    lifecycleTitle: "The Warranty Claim Lifecycle",
    lifecycleSubtitle:
      "Follow one unit from handover through a warranty claim to an instant coverage determination.",
    lifecycleSteps: [
      {
        label: "Handover Anchor",
        description:
          "At possession the handover date and defect liability period are sealed for the unit, fixing the coverage window for all future claims.",
        icon: Home,
        logFilename: "cerulea_warranty.log",
        logLines: [
          { text: "[SYS] Anchoring handover for unit TWR_D_0805...", time: "10:15:22", tone: "default" },
          { text: "[CMD] anchorHandover { unit: \"TWR_D_0805\", dlp: 60 }", time: "10:15:22", tone: "primary" },
          { text: "[AUTH] Sealing possession date, tamper-evident...", time: "10:15:23", tone: "secondary" },
          { text: "[OK] Coverage window set at block 7311002.", time: "10:15:23", tone: "success" },
        ],
      },
      {
        label: "Claim Raised",
        description:
          "The homeowner raises a defect claim, timestamped against the unit and added to its warranty history.",
        icon: ScrollText,
        logFilename: "cerulea_warranty.log",
        logLines: [
          { text: "[SYS] Homeowner raising defect claim...", time: "14:40:09", tone: "default" },
          { text: "[CMD] raiseClaim(\"TWR_D_0805\", issue: \"SEEPAGE_BATH\")", time: "14:40:09", tone: "primary" },
          { text: "[SYS] Timestamping claim against unit history...", time: "14:40:10", tone: "default" },
          { text: "[OK] Claim CLM_2214 recorded.", time: "14:40:10", tone: "success" },
        ],
      },
      {
        label: "Coverage Determination",
        description:
          "The contract compares the claim date against the liability window and returns covered or lapsed instantly for both parties.",
        icon: Scale,
        logFilename: "cerulea_warranty.log",
        logLines: [
          { text: "[SYS] Evaluating coverage for CLM_2214...", time: "14:40:11", tone: "default" },
          { text: "[CMD] checkCoverage(\"CLM_2214\")", time: "14:40:11", tone: "primary" },
          { text: "[SYS] Claim date within 60-month window...", time: "14:40:11", tone: "default" },
          { text: "[OK] Result: COVERED. Dispute avoided.", time: "14:40:12", tone: "success" },
        ],
      },
      {
        label: "Resolution",
        description:
          "The builder acknowledges and resolves the claim, and the status change is recorded so the fix cannot later be disputed.",
        icon: FileCheck,
        logFilename: "cerulea_warranty.log",
        logLines: [
          { text: "[SYS] Builder updating claim CLM_2214...", time: "09:30:47", tone: "default" },
          { text: "[CMD] resolveClaim(\"CLM_2214\", status: \"RESOLVED\")", time: "09:30:47", tone: "primary" },
          { text: "[SYS] Recording resolution to audit log...", time: "09:30:48", tone: "default" },
          { text: "[OK] Claim resolved. History complete.", time: "09:30:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes warranty tracking into modular contracts. Each layer anchors the handover, records claims, determines coverage, and logs resolution without either party rewriting the timeline.",
    layers: [
      {
        title: "Handover Registry",
        subtitle: "The Coverage Clock",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Coverage Clock",
          description:
            "The foundational layer. It seals each unit's handover date and defect liability period, fixing the immutable start of coverage that every claim is measured against.",
          platformFunction: "Provenance Notary",
        },
        codeSnippet:
          "contract WarrantyRegistry {\n  struct Unit {\n    uint256 handover;\n    uint16 dlpMonths;\n  }\n\n  mapping(bytes32 => Unit) public units;\n\n  function anchorHandover(bytes32 unit, uint16 dlp) external onlyBuilder {\n    units[unit] = Unit(block.timestamp, dlp);\n    emit HandoverAnchored(unit, block.timestamp, dlp);\n  }\n}",
        simAction: "Simulate Handover Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading builder credential for TWR_D_0805...", tone: "default" },
          { text: "Sealing possession date on-chain...", tone: "default" },
          { text: "Setting 60-month liability period...", tone: "default" },
          { text: "Writing unit record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Coverage clock anchored.", tone: "success" },
        ],
      },
      {
        title: "Claim Recorder",
        subtitle: "The Issue Log",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Issue Log",
          description:
            "Timestamps each defect claim against the unit. It replaces scattered emails and site notes with one ordered history that both homeowner and builder can rely on.",
          platformFunction: "Claim Registry",
        },
        codeSnippet:
          "function raiseClaim(bytes32 unit, string calldata issue) external returns (bytes32) {\n    bytes32 id = keccak256(abi.encode(unit, issue, block.timestamp));\n    claims[id] = Claim(unit, issue, block.timestamp, Status.Raised);\n    emit ClaimRaised(id, unit, issue);\n    return id;\n}",
        simAction: "Simulate Claim Raised",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Homeowner submitting seepage claim...", tone: "default" },
          { text: "Timestamping against unit TWR_D_0805...", tone: "default" },
          { text: "Assigning claim id CLM_2214...", tone: "default" },
          { text: "Appending to warranty history...", tone: "default" },
          { text: "[SUCCESS] Claim recorded in shared log.", tone: "success" },
        ],
      },
      {
        title: "Coverage Engine",
        subtitle: "The Instant Verdict",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Verdict",
          description:
            "Compares a claim date to the liability window and returns covered or lapsed without human argument. It resolves the single most common warranty dispute at the moment a claim is raised.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function checkCoverage(bytes32 claimId) external view returns (bool covered) {\n    Claim memory c = claims[claimId];\n    Unit memory u = units[c.unit];\n    uint256 expiry = u.handover + (uint256(u.dlpMonths) * 30 days);\n    return c.raisedAt <= expiry;\n}",
        simAction: "Simulate Coverage Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading claim CLM_2214 date...", tone: "default" },
          { text: "Reading unit coverage window...", tone: "default" },
          { text: "Comparing claim date to expiry...", tone: "default" },
          { text: "Claim falls within window...", tone: "default" },
          { text: "[SUCCESS] Verdict COVERED returned instantly.", tone: "success" },
        ],
      },
      {
        title: "Resolution Log",
        subtitle: "The Fix Proof",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fix Proof",
          description:
            "Tracks a claim from raised through acknowledged to resolved. The status trail is tamper-evident, so neither party can later dispute whether a defect was addressed within the period.",
          platformFunction: "Audit Logs",
        },
        codeSnippet:
          "function resolveClaim(bytes32 claimId, Status s) external onlyBuilder {\n    claims[claimId].status = s;\n    history[claimId].push(Update(s, block.timestamp));\n    emit ClaimUpdated(claimId, s);\n}",
        simAction: "Simulate Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Builder acknowledging claim CLM_2214...", tone: "default" },
          { text: "Recording status change to resolved...", tone: "default" },
          { text: "Appending update to audit log...", tone: "default" },
          { text: "Closing claim history entry...", tone: "default" },
          { text: "[SUCCESS] Resolution proof recorded.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared warranty tracking is a horizontal capability. Here is how different post-handover actors put the coverage record to work.",
    sectors: [
      { icon: Home, title: "Homeowners", description: "See the sealed handover date and their full claim history, getting an instant, non-negotiable answer on whether a defect is still within the liability period.", assetTypes: ["Handover Proofs", "Claim Histories", "Coverage Verdicts"] },
      { icon: Building2, title: "Builders & Developers", description: "Defend against out-of-period claims with an immutable handover date and manage warranty obligations across a portfolio from one status ledger.", assetTypes: ["Liability Windows", "Claim Queues", "Resolution Logs"] },
      { icon: Handshake, title: "Facility & RWA Managers", description: "Track defect claims and resolutions for handed-over units on behalf of residents, coordinating fixes against a shared, evidenced record.", assetTypes: ["Defect Registers", "Response Trails", "Status Reports"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a developer's CRM and helpdesk or capturing claims from a resident app, Cerulea routes both into one warranty record.",
    tracks: [
      {
        title: "Track A: CRM & Helpdesk Bridging",
        description:
          "For developers on CRM and helpdesk systems. Handover and ticket data translate into anchored on-chain warranty records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "CRM / Helpdesk", sublabel: "Developer Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Claim Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Warranty Record Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Resident App Capture",
        description:
          "For homeowners raising claims from a resident app. The app signs claims from a device wallet and routes them directly to the warranty contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Resident App / Wallet", sublabel: "Homeowner Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Claim Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Warranty History Record", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a warranty tracker with sealed handover dates, coverage determination, and resolution logging from scratch requires specialised proptech engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Handover & Claim Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects proptech integration benchmarks. Wiring CRM and helpdesk systems, building coverage determination, and shipping a shared claim history for an average portfolio takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your handover and claim rules into pre-audited WebAssembly binaries and provisions the notary and audit layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "building-material-recycling-and-demolition-waste-tracking",
    icon: Recycling,
    eyebrow: "Circular Construction Layer",
    headline1: "Track every load.",
    headline2: "Prove proper disposal.",
    heroDescription:
      "Track demolition waste from the site through to recycling or disposal facilities, giving contractors and regulators a verified chain of custody. Each load's journey is recorded, so proof of proper handling replaces the undocumented gap that lets illegal dumping hide.",
    heroCta: "Deploy Waste Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn undocumented waste movement into a verified chain of custody from site to final facility.",
    mechanics: [
      { title: "Load Manifest", description: "The Traceability Ledger records each demolition load at the site with its material type and volume, anchoring the origin of the waste chain." },
      { title: "Custody Handoff", description: "Each transfer from hauler to facility is co-signed, so a load cannot vanish between the site and its destination without a broken chain." },
      { title: "Facility Confirmation", description: "The receiving recycling or disposal facility confirms intake on-chain, closing the loop between what left the site and what was properly handled." },
      { title: "Compliance Attestation", description: "The Compliance Attestations module seals each load against construction and demolition waste rules, producing regulator-ready proof of circular handling." },
      { title: "Audit Logs", description: "The Audit Logs module timestamps every handoff and confirmation, giving regulators a tamper-evident trail in place of self-reported disposal claims." },
      { title: "Diversion Alerts", description: "A load that leaves the site but is never confirmed at a facility raises a flag, surfacing potential illegal dumping instead of letting it disappear." },
    ],
    lifecycleTitle: "The Waste Custody Lifecycle",
    lifecycleSubtitle:
      "Follow one demolition load from site manifest through hauler custody to confirmed facility intake.",
    lifecycleSteps: [
      {
        label: "Load Manifest",
        description:
          "A demolition load is manifested at the site with its material type and volume, anchoring the origin of its custody chain.",
        icon: Truck,
        logFilename: "cerulea_waste.log",
        logLines: [
          { text: "[SYS] Manifesting demolition load at site...", time: "07:35:14", tone: "default" },
          { text: "[CMD] manifestLoad { site: \"DEM_A12\", mat: \"CONCRETE\", vol: 18 }", time: "07:35:14", tone: "primary" },
          { text: "[AUTH] Binding load to demolition site permit...", time: "07:35:15", tone: "secondary" },
          { text: "[OK] Load LD_5510 anchored at block 6980221.", time: "07:35:15", tone: "success" },
        ],
      },
      {
        label: "Hauler Custody",
        description:
          "A hauler accepts the load and co-signs custody, so the transfer from site to transport is a mutual, recorded event.",
        icon: Truck,
        logFilename: "cerulea_waste.log",
        logLines: [
          { text: "[SYS] Hauler accepting load LD_5510...", time: "08:12:40", tone: "default" },
          { text: "[CMD] acceptCustody(\"LD_5510\", hauler: \"HAUL_C\")", time: "08:12:40", tone: "primary" },
          { text: "[SYS] Co-signature recorded from site and hauler...", time: "08:12:41", tone: "default" },
          { text: "[OK] Custody transferred. Chain intact.", time: "08:12:41", tone: "success" },
        ],
      },
      {
        label: "Facility Intake",
        description:
          "The recycling or disposal facility confirms receipt, closing the loop between what left the site and what was properly handled.",
        icon: Recycling,
        logFilename: "cerulea_waste.log",
        logLines: [
          { text: "[SYS] Facility confirming intake of LD_5510...", time: "10:48:03", tone: "default" },
          { text: "[CMD] confirmIntake(\"LD_5510\", facility: \"REC_02\", vol: 18)", time: "10:48:03", tone: "primary" },
          { text: "[AUTH] Matching received volume to manifest...", time: "10:48:04", tone: "secondary" },
          { text: "[OK] Intake confirmed. Loop closed.", time: "10:48:04", tone: "success" },
        ],
      },
      {
        label: "Compliance Proof",
        description:
          "The completed chain is sealed as regulator-ready proof of proper handling, and any unconfirmed load is flagged.",
        icon: FileCheck,
        logFilename: "cerulea_waste.log",
        logLines: [
          { text: "[SYS] Sealing compliance proof for LD_5510...", time: "10:48:20", tone: "default" },
          { text: "[CMD] sealCompliance(\"LD_5510\")", time: "10:48:20", tone: "primary" },
          { text: "[SYS] Chain complete: site to facility verified...", time: "10:48:21", tone: "default" },
          { text: "[OK] Proof anchored. Proper disposal verified.", time: "10:48:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes waste tracking into modular contracts. Each layer manifests the load, transfers custody, confirms intake, and seals compliance without any hauler able to break the chain unnoticed.",
    layers: [
      {
        title: "Load Registry",
        subtitle: "The Origin Manifest",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Manifest",
          description:
            "The foundational layer. It records each demolition load at the site with its material and volume, anchoring the origin every custody transfer and facility confirmation later points back to.",
          platformFunction: "Traceability Ledger",
        },
        codeSnippet:
          "contract WasteRegistry {\n  struct Load {\n    bytes32 site;\n    string material;\n    uint256 volume;\n    bool confirmed;\n  }\n\n  mapping(bytes32 => Load) public loads;\n\n  function manifest(bytes32 id, bytes32 site, string calldata mat, uint256 vol) external {\n    loads[id] = Load(site, mat, vol, false);\n  }\n}",
        simAction: "Simulate Load Manifest",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading demolition site permit DEM_A12...", tone: "default" },
          { text: "Recording 18 cubic metres of concrete...", tone: "default" },
          { text: "Minting load identity LD_5510...", tone: "default" },
          { text: "Writing load state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Waste load manifested on-chain.", tone: "success" },
        ],
      },
      {
        title: "Custody Handoff",
        subtitle: "The Two-Party Transfer",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Party Transfer",
          description:
            "Prevents a load from disappearing in transit. A transfer requires both site and hauler signatures, turning every custody change into a mutual, recorded event rather than a gap in the trail.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function acceptCustody(bytes32 id, bytes32 hauler) external {\n    Handoff storage h = pending[id];\n    require(h.hauler == hauler, \"Not hauler\");\n    require(!h.settled, \"Settled\");\n    h.settled = true;\n    custody[id] = hauler;\n    emit CustodyAccepted(id, hauler);\n}",
        simAction: "Simulate Custody Handoff",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hauler HAUL_C reviewing load LD_5510...", tone: "default" },
          { text: "Recording co-signature from site...", tone: "default" },
          { text: "Recording co-signature from hauler...", tone: "default" },
          { text: "Advancing custody to transport...", tone: "default" },
          { text: "[SUCCESS] Custody transferred with proof.", tone: "success" },
        ],
      },
      {
        title: "Intake Confirmer",
        subtitle: "The Loop Closer",
        icon: Recycling,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Loop Closer",
          description:
            "Records the receiving facility's confirmation and matches the received volume to the manifest. It closes the loop between what left the site and what was handled, exposing shortfalls as diversion.",
          platformFunction: "Facility Confirmation",
        },
        codeSnippet:
          "function confirmIntake(bytes32 id, bytes32 facility, uint256 vol) external onlyFacility(facility) {\n    require(vol >= loads[id].volume, \"Volume shortfall\");\n    loads[id].confirmed = true;\n    intake[id] = Intake(facility, vol, block.timestamp);\n    emit IntakeConfirmed(id, facility, vol);\n}",
        simAction: "Simulate Facility Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Facility REC_02 receiving load LD_5510...", tone: "default" },
          { text: "Matching 18 cubic metres to manifest...", tone: "default" },
          { text: "Confirming intake on-chain...", tone: "default" },
          { text: "Marking load as properly handled...", tone: "default" },
          { text: "[SUCCESS] Custody loop closed.", tone: "success" },
        ],
      },
      {
        title: "Compliance Seal",
        subtitle: "The Regulator Proof",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Regulator Proof",
          description:
            "Seals the completed chain against waste regulations and flags any load that left the site but was never confirmed. It gives regulators verifiable proof of circular handling instead of self-reports.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function sealCompliance(bytes32 id) external view returns (bool ok, string memory flag) {\n    if (!loads[id].confirmed) return (false, \"UNCONFIRMED_DISPOSAL\");\n    return (true, \"COMPLIANT\");\n}",
        simAction: "Simulate Compliance Proof",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking full chain for LD_5510...", tone: "default" },
          { text: "Verifying site to facility custody...", tone: "default" },
          { text: "Confirming facility intake recorded...", tone: "default" },
          { text: "Sealing regulator-ready proof...", tone: "default" },
          { text: "[SUCCESS] Proper disposal verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified waste custody is a horizontal capability. Here is how different circular-construction actors put the chain of custody to work.",
    sectors: [
      { icon: Pickaxe, title: "Demolition Contractors", description: "Prove every load was hauled to a legitimate facility with a signed chain of custody, protecting against illegal-dumping liability and meeting waste rules.", assetTypes: ["Load Manifests", "Custody Chains", "Disposal Proofs"] },
      { icon: Recycling, title: "Recycling Facilities", description: "Confirm intake on-chain and build a verifiable record of processed material, supporting circular-economy credentials and reconciled tonnage.", assetTypes: ["Intake Confirmations", "Processed Volumes", "Material Records"] },
      { icon: Landmark, title: "Environmental Regulators", description: "Verify proper handling from a tamper-evident trail and catch unconfirmed loads that signal diversion, replacing self-reported disposal declarations.", assetTypes: ["Compliance Proofs", "Diversion Alerts", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging fleet and facility systems or capturing loads from a site weighbridge, Cerulea routes both into one waste custody record.",
    tracks: [
      {
        title: "Track A: Fleet & Facility Bridging",
        description:
          "For haulers and facilities on established systems. Load and intake data translate into signed on-chain custody records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Fleet / Facility System", sublabel: "Hauler & Plant Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Load Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Waste Custody Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Site Weighbridge Capture",
        description:
          "For site teams manifesting loads. A weighbridge app signs manifests from a device wallet and routes them directly to the waste contract.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Weighbridge / Wallet", sublabel: "Site Devices", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Manifest Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Demolition Waste Record", icon: Recycling, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a waste custody chain with load manifests, co-signed handoffs, facility confirmation, and diversion alerts from scratch requires specialised traceability engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Compliance Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects traceability integration benchmarks. Wiring fleet and facility systems, building co-signed custody, and shipping diversion alerts for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and compliance rules into pre-audited WebAssembly binaries and provisions the traceability and attestation layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "architect-and-contractor-licensing-verification-for-project-approval",
    icon: IdCard,
    eyebrow: "License Verification Layer",
    headline1: "Verify every license.",
    headline2: "Approve on valid credentials.",
    heroDescription:
      "Let the approval authority instantly verify an architect's and contractor's license status against a verified professional registry before granting plan approval. Approvals based on lapsed or fake licenses are prevented at the moment of submission.",
    heroCta: "Deploy License Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manual check of paper licenses into instant verification against a live professional registry.",
    mechanics: [
      { title: "Verifiable Credentials", description: "The DID and VC Ledger issues each architect and contractor a verifiable license credential, so validity is checked cryptographically rather than from a scanned certificate." },
      { title: "Live Status Check", description: "The approval office queries current license status at submission, catching a lapsed or suspended license that a static document would hide." },
      { title: "Civil Registry Link", description: "The Civil Registry module ties each credential to a verified professional identity, so a forged license cannot borrow a genuine registration number." },
      { title: "Approval Gating", description: "The Compliance Attestations module blocks plan approval unless both the architect and contractor credentials verify as valid and current." },
      { title: "Revocation Awareness", description: "When a licensing body revokes a credential, the change propagates immediately, so an approval cannot rest on a license valid only yesterday." },
      { title: "Approval Trail", description: "Each approval records which credentials were verified, giving an audit trail that proves the office checked valid licenses before signing off." },
    ],
    lifecycleTitle: "The License Verification Lifecycle",
    lifecycleSubtitle:
      "Follow one plan submission from credential presentation through live verification to a gated approval.",
    lifecycleSteps: [
      {
        label: "Credential Issuance",
        description:
          "A licensing body issues verifiable credentials to the architect and contractor, bound to their verified professional identities.",
        icon: IdCard,
        logFilename: "cerulea_license.log",
        logLines: [
          { text: "[SYS] Issuing professional license credential...", time: "09:05:19", tone: "default" },
          { text: "[CMD] issueVC { pro: \"ARC_3391\", license: \"COA_VALID\", exp: 2028 }", time: "09:05:19", tone: "primary" },
          { text: "[AUTH] Binding credential to civil registry identity...", time: "09:05:20", tone: "secondary" },
          { text: "[OK] Credential anchored at block 7402118.", time: "09:05:20", tone: "success" },
        ],
      },
      {
        label: "Plan Submission",
        description:
          "A plan is submitted for approval, presenting the architect and contractor credentials for verification.",
        icon: ScrollText,
        logFilename: "cerulea_license.log",
        logLines: [
          { text: "[SYS] Receiving plan submission PLN_8842...", time: "11:33:02", tone: "default" },
          { text: "[CMD] submitPlan(\"PLN_8842\", arch: \"ARC_3391\", con: \"CON_2205\")", time: "11:33:02", tone: "primary" },
          { text: "[SYS] Queuing credentials for verification...", time: "11:33:03", tone: "default" },
          { text: "[OK] Submission recorded. Awaiting checks.", time: "11:33:03", tone: "success" },
        ],
      },
      {
        label: "Live Verification",
        description:
          "The office verifies both credentials against the registry, confirming they are valid, current, and not revoked.",
        icon: Search,
        logFilename: "cerulea_license.log",
        logLines: [
          { text: "[SYS] Verifying architect and contractor licenses...", time: "11:33:05", tone: "default" },
          { text: "[CMD] verifyCredentials(\"PLN_8842\")", time: "11:33:05", tone: "primary" },
          { text: "[AUTH] Checking status and revocation registry...", time: "11:33:06", tone: "secondary" },
          { text: "[OK] Both licenses valid and current.", time: "11:33:06", tone: "success" },
        ],
      },
      {
        label: "Gated Approval",
        description:
          "With both credentials verified, plan approval is granted and the checked licenses are recorded in the approval trail.",
        icon: FileCheck,
        logFilename: "cerulea_license.log",
        logLines: [
          { text: "[SYS] Approval gate evaluating PLN_8842...", time: "11:33:08", tone: "default" },
          { text: "[CMD] approvePlan(\"PLN_8842\")", time: "11:33:08", tone: "primary" },
          { text: "[SYS] Recording verified credentials in trail...", time: "11:33:09", tone: "default" },
          { text: "[OK] Plan approved on valid licenses.", time: "11:33:09", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes license verification into modular contracts. Each layer issues credentials, verifies status, gates approval, and records the trail without any office approving on a lapsed or fake license.",
    layers: [
      {
        title: "Credential Registry",
        subtitle: "The Verifiable License",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verifiable License",
          description:
            "Issues each professional a verifiable license credential bound to a registry identity. It replaces a scanned certificate that can be forged with a credential checked cryptographically against its issuer.",
          platformFunction: "DID & VC Ledger",
        },
        codeSnippet:
          "contract LicenseRegistry {\n  struct Credential {\n    bytes32 identity;\n    string license;\n    uint256 expiry;\n    bool revoked;\n  }\n\n  mapping(bytes32 => Credential) public creds;\n\n  function issue(bytes32 pro, string calldata lic, uint256 exp) external onlyBody {\n    creds[pro] = Credential(identityOf[pro], lic, exp, false);\n  }\n}",
        simAction: "Simulate Credential Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading professional identity ARC_3391...", tone: "default" },
          { text: "Binding license credential to identity...", tone: "default" },
          { text: "Setting expiry to 2028...", tone: "default" },
          { text: "Writing credential to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Verifiable license issued.", tone: "success" },
        ],
      },
      {
        title: "Verification Engine",
        subtitle: "The Live Check",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Check",
          description:
            "Verifies a credential is valid, unexpired, and not revoked at the moment of submission. It catches a license that lapsed after issuance, which a static document check would miss entirely.",
          platformFunction: "Credential Verification",
        },
        codeSnippet:
          "function verify(bytes32 pro) public view returns (bool) {\n    Credential memory c = creds[pro];\n    if (c.revoked) return false;\n    if (block.timestamp > c.expiry) return false;\n    return true;\n}",
        simAction: "Simulate Live Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading architect credential ARC_3391...", tone: "default" },
          { text: "Checking expiry against current time...", tone: "default" },
          { text: "Checking revocation registry...", tone: "default" },
          { text: "Repeating for contractor CON_2205...", tone: "default" },
          { text: "[SUCCESS] Both licenses valid and current.", tone: "success" },
        ],
      },
      {
        title: "Approval Gate",
        subtitle: "The Credential Filter",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Credential Filter",
          description:
            "Blocks plan approval unless both the architect and contractor credentials verify. It removes discretion to approve on a lapsed or fake license by making valid credentials a hard precondition.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function approvePlan(bytes32 plan) external onlyOffice {\n    Plan memory p = plans[plan];\n    require(verify(p.architect), \"Architect invalid\");\n    require(verify(p.contractor), \"Contractor invalid\");\n    approvals[plan] = Approval(msg.sender, block.timestamp);\n    emit PlanApproved(plan);\n}",
        simAction: "Simulate Gated Approval",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Evaluating approval gate for PLN_8842...", tone: "default" },
          { text: "Confirming architect credential valid...", tone: "default" },
          { text: "Confirming contractor credential valid...", tone: "default" },
          { text: "Granting plan approval...", tone: "default" },
          { text: "[SUCCESS] Approved on verified licenses.", tone: "success" },
        ],
      },
      {
        title: "Approval Log",
        subtitle: "The Audit Trail",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Audit Trail",
          description:
            "Records which credentials were verified for each approval. It gives oversight a tamper-evident trail proving the office checked valid, current licenses before granting the plan.",
          platformFunction: "Civil Registry",
        },
        codeSnippet:
          "function approvalRecord(bytes32 plan) external view returns (bytes32 arch, bytes32 con, uint256 at) {\n    Plan memory p = plans[plan];\n    return (p.architect, p.contractor, approvals[plan].at);\n}",
        simAction: "Simulate Trail Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Oversight opening approval PLN_8842...", tone: "default" },
          { text: "Returning verified architect credential...", tone: "default" },
          { text: "Returning verified contractor credential...", tone: "default" },
          { text: "Confirming approval timestamp...", tone: "default" },
          { text: "[SUCCESS] Approval trail returned intact.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Instant license verification is a horizontal capability. Here is how different approval actors put the credential check to work.",
    sectors: [
      { icon: Landmark, title: "Municipal Approval Offices", description: "Verify architect and contractor licenses live before granting plan approval, removing the risk of approving on lapsed or fabricated credentials.", assetTypes: ["Plan Approvals", "Credential Checks", "Approval Trails"] },
      { icon: IdCard, title: "Licensing Bodies", description: "Issue and revoke verifiable license credentials that update everywhere instantly, so a suspension takes effect at every approval office at once.", assetTypes: ["License Credentials", "Revocation Records", "Professional Registries"] },
      { icon: Building2, title: "Architects & Contractors", description: "Present a portable, verifiable license that clears approvals without repeated manual document checks, speeding project sign-off.", assetTypes: ["Portable Credentials", "Validity Proofs", "Submission Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a municipal approval system or capturing credentials from a professional's wallet, Cerulea routes both into one license verification record.",
    tracks: [
      {
        title: "Track A: Approval System Bridging",
        description:
          "For offices on municipal approval systems. Submission and licensing data translate into on-chain verification calls through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Approval System", sublabel: "Municipal Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "License Verification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Professional Wallet Capture",
        description:
          "For architects and contractors presenting credentials. A wallet app signs credential presentations and routes them directly to the verification contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Wallet App", sublabel: "Professional Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Credential Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified License Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a license verification system with verifiable credentials, live status checks, and approval gating from scratch requires specialised identity and govtech engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credential & Approval Rules",
      ruleCount: 33,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects identity and govtech integration benchmarks. Issuing verifiable credentials, wiring live status checks, and gating approvals for an average jurisdiction takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your credential and approval rules into pre-audited WebAssembly binaries and provisions the DID and attestation layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "commercial-property-tokenization-and-secondary-trading",
    icon: Building2,
    eyebrow: "Property Securities Layer",
    headline1: "Fractionalize the building.",
    headline2: "Trade the position freely.",
    heroDescription:
      "Run a hybrid commercial real estate platform with institutional private settlement and a public retail secondary market. Illiquid commercial property becomes a tradable position, so investors enter and exit rather than being locked for a fund's lifecycle.",
    heroCta: "Deploy Property Markets",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a locked, illiquid commercial asset into a compliant, tradable multi-token position.",
    mechanics: [
      { title: "Securities Lifecycle", description: "The Securities Lifecycle module handles issuance, corporate actions, and settlement of property tokens, so a commercial asset trades under a proper securities framework." },
      { title: "Multi-Token Fractions", description: "The ERC-1155 Multi-Token module fractionalizes each property into positions, letting institutional and retail investors hold and transfer defined slices." },
      { title: "Compliance Gating", description: "The KYC and AML Utility Registry gates every holder and trade, so only verified participants can settle, keeping the market inside regulatory limits." },
      { title: "Hybrid Settlement", description: "Institutional trades settle on a private venue while retail activity runs on a public secondary market, bridged so both reference the same asset record." },
      { title: "Secondary Liquidity", description: "An order book lets holders exit positions on demand rather than waiting for a fund wind-down, giving commercial property genuine liquidity." },
      { title: "Cap Table Integrity", description: "Every transfer updates the on-chain register, so ownership of each fraction is always current and reconciled without a manual share registry." },
    ],
    lifecycleTitle: "The Property Securities Lifecycle",
    lifecycleSubtitle:
      "Follow one commercial asset from tokenized issuance through a compliant trade to secondary market settlement.",
    lifecycleSteps: [
      {
        label: "Asset Issuance",
        description:
          "A commercial property is tokenized into fractional positions under the securities framework, anchoring its ownership register.",
        icon: Building2,
        logFilename: "cerulea_cre_token.log",
        logLines: [
          { text: "[SYS] Tokenizing commercial asset TWR_MET_9...", time: "09:20:41", tone: "default" },
          { text: "[CMD] issueSecurity { asset: \"TWR_MET_9\", fractions: 100000 }", time: "09:20:41", tone: "primary" },
          { text: "[AUTH] Registering under securities lifecycle...", time: "09:20:42", tone: "secondary" },
          { text: "[OK] 100,000 fractions issued at block 7511220.", time: "09:20:42", tone: "success" },
        ],
      },
      {
        label: "Investor Onboarding",
        description:
          "Institutional and retail investors pass KYC and AML checks and are whitelisted to hold and trade the property fractions.",
        icon: Fingerprint,
        logFilename: "cerulea_cre_token.log",
        logLines: [
          { text: "[SYS] Onboarding investor for TWR_MET_9...", time: "11:45:12", tone: "default" },
          { text: "[CMD] whitelist(\"INV_5521\", tier: \"RETAIL\")", time: "11:45:12", tone: "primary" },
          { text: "[AUTH] Verifying KYC and AML utility registry...", time: "11:45:13", tone: "secondary" },
          { text: "[OK] Investor cleared to trade fractions.", time: "11:45:13", tone: "success" },
        ],
      },
      {
        label: "Compliant Trade",
        description:
          "A holder places a sell order, and the contract checks both parties are whitelisted before matching the trade.",
        icon: Activity,
        logFilename: "cerulea_cre_token.log",
        logLines: [
          { text: "[SYS] Matching order on secondary market...", time: "14:02:33", tone: "default" },
          { text: "[CMD] trade(\"TWR_MET_9\", from: \"INV_4410\", to: \"INV_5521\", qty: 250)", time: "14:02:33", tone: "primary" },
          { text: "[AUTH] Confirming both parties whitelisted...", time: "14:02:34", tone: "secondary" },
          { text: "[OK] Order matched. Ready to settle.", time: "14:02:34", tone: "success" },
        ],
      },
      {
        label: "Hybrid Settlement",
        description:
          "The trade settles fractions against payment atomically and updates the register, giving the seller instant liquidity.",
        icon: Zap,
        logFilename: "cerulea_cre_token.log",
        logLines: [
          { text: "[SYS] Executing atomic settlement...", time: "14:02:35", tone: "default" },
          { text: "[CMD] settle(\"TWR_MET_9\", qty: 250, price: 1150000)", time: "14:02:35", tone: "primary" },
          { text: "[SYS] Updating cap table register...", time: "14:02:35", tone: "default" },
          { text: "[OK] Settled. Position exited with liquidity.", time: "14:02:36", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes property securities into modular contracts. Each layer issues fractions, gates compliance, matches trades, and settles atomically without a manual registry or off-chain clearing.",
    layers: [
      {
        title: "Security Token",
        subtitle: "The Fractional Asset",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fractional Asset",
          description:
            "Issues the property as fractional multi-token positions under a securities lifecycle. It gives a single commercial asset a divisible, transferable form with an on-chain ownership register.",
          platformFunction: "Securities Lifecycle",
        },
        codeSnippet:
          "contract PropertySecurity {\n  mapping(uint256 => mapping(address => uint256)) public balances;\n  uint256 public totalFractions;\n\n  function issue(uint256 assetId, uint256 fractions, address treasury) external onlyIssuer {\n    balances[assetId][treasury] = fractions;\n    totalFractions = fractions;\n    emit SecurityIssued(assetId, fractions);\n  }\n}",
        simAction: "Simulate Asset Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Registering asset TWR_MET_9...", tone: "default" },
          { text: "Minting 100,000 fractional positions...", tone: "default" },
          { text: "Assigning to issuer treasury...", tone: "default" },
          { text: "Writing register to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Commercial asset tokenized.", tone: "success" },
        ],
      },
      {
        title: "Compliance Gate",
        subtitle: "The Whitelist",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Whitelist",
          description:
            "Enforces that only KYC and AML verified investors can hold or trade. It keeps the secondary market inside regulatory limits by making a valid credential a precondition for settlement.",
          platformFunction: "KYC & AML Registry",
        },
        codeSnippet:
          "function requireCompliant(address a, address b) internal view {\n    require(kyc.verified(a), \"Seller not verified\");\n    require(kyc.verified(b), \"Buyer not verified\");\n    require(!kyc.blocked(a) && !kyc.blocked(b), \"Blocked party\");\n}",
        simAction: "Simulate Compliance Gate",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading investor INV_5521 status...", tone: "default" },
          { text: "Checking KYC and AML registry...", tone: "default" },
          { text: "Confirming counterparty INV_4410...", tone: "default" },
          { text: "Clearing both for settlement...", tone: "default" },
          { text: "[SUCCESS] Trade parties verified.", tone: "success" },
        ],
      },
      {
        title: "Trade Matcher",
        subtitle: "The Secondary Book",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Secondary Book",
          description:
            "Matches buy and sell orders for property fractions on a public retail market. It delivers the liquidity that lets investors exit positions on demand instead of waiting for a fund lifecycle.",
          platformFunction: "Secondary Market",
        },
        codeSnippet:
          "function placeOrder(uint256 assetId, uint256 qty, uint256 price, bool sell) external {\n    requireCompliant(msg.sender, msg.sender);\n    orders.push(Order(assetId, msg.sender, qty, price, sell));\n    emit OrderPlaced(assetId, msg.sender, qty, price, sell);\n}",
        simAction: "Simulate Trade Matching",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Placing sell order for 250 fractions...", tone: "default" },
          { text: "Scanning book for matching bid...", tone: "default" },
          { text: "Pairing with buyer INV_5521...", tone: "default" },
          { text: "Locking order for settlement...", tone: "default" },
          { text: "[SUCCESS] Order matched on secondary book.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The Atomic Swap",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Atomic Swap",
          description:
            "Bundles the fraction transfer and payment into one atomic transaction and updates the register. It removes settlement risk and keeps the cap table reconciled after every trade.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(uint256 assetId, address seller, address buyer, uint256 qty) external payable {\n    balances[assetId][seller] -= qty;\n    balances[assetId][buyer] += qty;\n    payable(seller).transfer(msg.value);\n    emit Settled(assetId, seller, buyer, qty, msg.value);\n}",
        simAction: "Simulate Hybrid Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Locking payment from buyer INV_5521...", tone: "default" },
          { text: "Transferring 250 fractions to buyer...", tone: "default" },
          { text: "Releasing proceeds to seller...", tone: "default" },
          { text: "Updating cap table register...", tone: "default" },
          { text: "[SUCCESS] Position exited with liquidity.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Compliant property tokenization is a horizontal capability. Here is how different market actors put the fractional securities layer to work.",
    sectors: [
      { icon: Landmark, title: "Institutional Investors", description: "Enter and exit commercial positions through private settlement while accessing a broader retail liquidity pool, freeing capital locked in fund lifecycles.", assetTypes: ["Property Fractions", "Private Settlements", "Cap Table Positions"] },
      { icon: Users, title: "Retail Investors", description: "Buy and sell fractions of commercial real estate on a public secondary market, gaining access to an asset class once closed to individual investors.", assetTypes: ["Retail Fractions", "Secondary Orders", "Liquidity Exits"] },
      { icon: Building2, title: "Asset Managers & Sponsors", description: "Issue and administer tokenized property with an always-reconciled register, cutting the cost of manual share registries and off-chain clearing.", assetTypes: ["Token Issuances", "Corporate Actions", "Ownership Registers"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging institutional custody and fund systems or routing native retail trades, Cerulea provides the settlement routing both venues need.",
    tracks: [
      {
        title: "Track A: Institutional Settlement Bridging",
        description:
          "For sponsors and custodians on fund administration systems. Issuance and private trades translate into on-chain securities and settlement records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Fund Admin / Custody", sublabel: "Institutional Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Trade Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Property Securities Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Retail Market Execution",
        description:
          "For retail investors trading fractions. A wallet signs orders and routes them directly to the public secondary market contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Investor Wallet / App", sublabel: "Retail Devices", icon: Fingerprint, accent: false },
          { label: "Public Order Book", sublabel: "Secondary Market Matching", icon: Activity, accent: true },
          { label: "Cerulea Public L1", sublabel: "Fraction Settlement Ledger", icon: Building2, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a hybrid property securities platform with compliance gating, a secondary order book, and atomic settlement from scratch requires specialised securities and blockchain engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Securities & Trading Rules",
      ruleCount: 52,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects securities-tech integration benchmarks. Building a compliant token, gating trades, and shipping a secondary settlement venue for an average platform takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your securities and trading rules into pre-audited WebAssembly binaries and provisions the compliance and settlement layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "co-working-space-membership-and-utilization-billing",
    icon: Building2,
    eyebrow: "Workspace Billing Engine",
    headline1: "Bill the actual usage.",
    headline2: "Drop the sign-in sheet.",
    heroDescription:
      "Generate co-working billing from verified desk and meeting room usage captured directly from access systems. Fixed fees and variable usage combine into an accurate, itemized bill, replacing manual sign-in sheets and disconnected booking tools.",
    heroCta: "Deploy Workspace Billing",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn manual sign-in sheets into verified usage that bills members automatically.",
    mechanics: [
      { title: "Device Attestation", description: "The Device Attestation module signs access and booking events at source, so a billed hour of meeting room use is a verified fact rather than a logbook entry." },
      { title: "Usage Metering", description: "Desk check-ins and room bookings accumulate per member in real time, building the variable portion of the bill without manual tracking." },
      { title: "Membership Tiers", description: "Fixed membership fees and included allowances are encoded per plan, so the contract knows what is bundled before charging for overage." },
      { title: "Automated Invoicing", description: "The Invoices and Billing module combines fixed fees and metered overage into one itemized invoice at period close, with no reconciliation." },
      { title: "Audit Logs", description: "The Audit Logs module timestamps every access and booking event, giving members a transparent basis for each line on their bill." },
      { title: "Dispute-Free Billing", description: "Because each charge traces to a signed access event, a member can verify usage rather than contest an opaque total." },
    ],
    lifecycleTitle: "The Utilization Billing Lifecycle",
    lifecycleSubtitle:
      "Follow one member from access through metered usage to an automatically itemized invoice.",
    lifecycleSteps: [
      {
        label: "Member Onboarding",
        description:
          "A member is enrolled on a plan with its fixed fee and included allowances, setting the baseline for later usage charges.",
        icon: IdCard,
        logFilename: "cerulea_coworking.log",
        logLines: [
          { text: "[SYS] Enrolling member on plan...", time: "08:40:11", tone: "default" },
          { text: "[CMD] enroll { member: \"MEM_2201\", plan: \"FLEX\", desks: 1 }", time: "08:40:11", tone: "primary" },
          { text: "[AUTH] Binding included allowances to plan...", time: "08:40:12", tone: "secondary" },
          { text: "[OK] Member enrolled at block 7601009.", time: "08:40:12", tone: "success" },
        ],
      },
      {
        label: "Access Capture",
        description:
          "The member checks in at a desk and books a meeting room, and each event is signed by the access system and metered.",
        icon: Radio,
        logFilename: "cerulea_coworking.log",
        logLines: [
          { text: "[SYS] Access event for MEM_2201...", time: "10:05:44", tone: "default" },
          { text: "[CMD] meterUsage(\"MEM_2201\", room: \"MR_04\", mins: 90)", time: "10:05:44", tone: "primary" },
          { text: "[SYS] Signed by access system, added to tally...", time: "10:05:45", tone: "default" },
          { text: "[OK] 90 minutes room use metered.", time: "10:05:45", tone: "success" },
        ],
      },
      {
        label: "Period Aggregation",
        description:
          "At period close the contract sums metered usage against the plan allowance to find billable overage.",
        icon: Scale,
        logFilename: "cerulea_coworking.log",
        logLines: [
          { text: "[SYS] Aggregating usage for MEM_2201...", time: "18:30:02", tone: "default" },
          { text: "[CMD] aggregate(\"MEM_2201\", period: \"2026-M03\")", time: "18:30:02", tone: "primary" },
          { text: "[SYS] 6h used, 4h included, 2h billable overage...", time: "18:30:03", tone: "default" },
          { text: "[OK] Usage tally frozen for billing.", time: "18:30:03", tone: "success" },
        ],
      },
      {
        label: "Invoice Generation",
        description:
          "The billing module combines the fixed fee and metered overage into one itemized invoice, issued automatically.",
        icon: FileCheck,
        logFilename: "cerulea_coworking.log",
        logLines: [
          { text: "[SYS] Generating invoice for MEM_2201...", time: "18:30:05", tone: "default" },
          { text: "[CMD] issueInvoice(\"MEM_2201\", period: \"2026-M03\")", time: "18:30:05", tone: "primary" },
          { text: "[SYS] Fixed fee plus 2h overage itemized...", time: "18:30:06", tone: "default" },
          { text: "[OK] Invoice issued from verified usage.", time: "18:30:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes workspace billing into modular contracts. Each layer attests access, meters usage, aggregates the period, and invoices without manual sign-in sheets or reconciliation.",
    layers: [
      {
        title: "Access Registry",
        subtitle: "The Signed Event",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Signed Event",
          description:
            "Binds access and booking hardware so every check-in and room booking is signed at source. It turns a sign-in sheet that anyone can pad into a verified usage event the bill can trust.",
          platformFunction: "Device Attestation",
        },
        codeSnippet:
          "contract AccessRegistry {\n  struct Event {\n    bytes32 member;\n    bytes32 resource;\n    uint256 minutes_;\n    uint256 at;\n  }\n\n  mapping(bytes32 => uint256) public usage;\n\n  function record(bytes32 member, bytes32 resource, uint256 mins) external onlyDevice {\n    usage[member] += mins;\n    emit Recorded(member, resource, mins);\n  }\n}",
        simAction: "Simulate Access Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving signed access event...", tone: "default" },
          { text: "Attributing 90 minutes to MEM_2201...", tone: "default" },
          { text: "Adding to member usage tally...", tone: "default" },
          { text: "Writing event to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Verified usage recorded.", tone: "success" },
        ],
      },
      {
        title: "Plan Meter",
        subtitle: "The Allowance Engine",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Allowance Engine",
          description:
            "Encodes each plan's fixed fee and included allowances. It compares metered usage against what is bundled, so members are charged only for the overage beyond their plan.",
          platformFunction: "Membership Plans",
        },
        codeSnippet:
          "function overage(bytes32 member) public view returns (uint256) {\n    uint256 used = usage[member];\n    uint256 included = plans[planOf[member]].includedMins;\n    return used > included ? used - included : 0;\n}",
        simAction: "Simulate Allowance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading plan FLEX for MEM_2201...", tone: "default" },
          { text: "Reading 6 hours metered usage...", tone: "default" },
          { text: "Subtracting 4 hours included...", tone: "default" },
          { text: "Computing 2 hours billable overage...", tone: "default" },
          { text: "[SUCCESS] Overage calculated from allowance.", tone: "success" },
        ],
      },
      {
        title: "Aggregator",
        subtitle: "The Period Closer",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Period Closer",
          description:
            "Freezes each member's usage at period end for billing. It fixes the tally so the invoice reflects a stable, auditable count rather than a moving figure.",
          platformFunction: "Aggregation",
        },
        codeSnippet:
          "function aggregate(bytes32 member, bytes32 period) external onlyOperator {\n    require(!frozen[member][period], \"Closed\");\n    snapshot[member][period] = usage[member];\n    frozen[member][period] = true;\n    emit PeriodClosed(member, period);\n}",
        simAction: "Simulate Period Aggregation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Closing period 2026-M03 for MEM_2201...", tone: "default" },
          { text: "Snapshotting usage tally...", tone: "default" },
          { text: "Freezing count for billing...", tone: "default" },
          { text: "Recording period close...", tone: "default" },
          { text: "[SUCCESS] Usage frozen for invoicing.", tone: "success" },
        ],
      },
      {
        title: "Invoice Builder",
        subtitle: "The Itemized Bill",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Itemized Bill",
          description:
            "Combines fixed fee and metered overage into one itemized invoice. Each charge traces back to a signed access event, so a member verifies usage instead of disputing an opaque total.",
          platformFunction: "Invoices & Billing",
        },
        codeSnippet:
          "function issueInvoice(bytes32 member, bytes32 period) external {\n    require(frozen[member][period], \"Not closed\");\n    uint256 fixed_ = plans[planOf[member]].fee;\n    uint256 variable = overageAt(member, period) * rate;\n    invoices[member].push(Invoice(period, fixed_ + variable));\n    emit InvoiceIssued(member, fixed_ + variable);\n}",
        simAction: "Simulate Invoice Generation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading frozen tally for MEM_2201...", tone: "default" },
          { text: "Adding fixed membership fee...", tone: "default" },
          { text: "Adding 2 hours metered overage...", tone: "default" },
          { text: "Emitting itemized invoice...", tone: "default" },
          { text: "[SUCCESS] Invoice generated from usage.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified usage billing is a horizontal capability. Here is how different workspace actors put the automated meter to work.",
    sectors: [
      { icon: Building2, title: "Co-working Operators", description: "Bill members from signed access data across locations, ending revenue leakage from untracked room use and the reconciliation of sign-in sheets.", assetTypes: ["Usage Meters", "Plan Allowances", "Auto Invoices"] },
      { icon: Users, title: "Member Companies", description: "Receive an itemized bill where every charge traces to a verified access event, replacing disputed totals with a transparent usage record.", assetTypes: ["Access Records", "Overage Lines", "Verified Bills"] },
      { icon: PieChart, title: "Space Managers", description: "Read live utilization per resource to plan capacity and pricing, drawing occupancy insight straight from the same signed events that drive billing.", assetTypes: ["Utilization Reports", "Occupancy Data", "Capacity Plans"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging access control and booking platforms or capturing check-ins from a door reader, Cerulea routes both into one usage billing record.",
    tracks: [
      {
        title: "Track A: Access & Booking Bridging",
        description:
          "For operators on access control and booking systems. Access and booking data translate into signed on-chain usage records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Access / Booking System", sublabel: "Operator Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Usage Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Utilization Billing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Door Reader Capture",
        description:
          "For spaces capturing access at the door. A reader device signs check-ins from a hardware wallet and routes them directly to the billing contract.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Door Reader / Wallet", sublabel: "Access Hardware", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Usage Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Usage Record", icon: Building2, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a workspace billing system with device-attested usage, plan allowances, and automated invoicing from scratch requires specialised proptech and billing engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Usage & Billing Rules",
      ruleCount: 32,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects proptech billing integration benchmarks. Wiring access and booking systems, encoding plan allowances, and automating invoicing for an average operator takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your usage and billing rules into pre-audited WebAssembly binaries and provisions the attestation and invoicing layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "commercial-lease-renewal-and-rent-escalation-automation",
    icon: ScrollText,
    eyebrow: "Lease Automation Layer",
    headline1: "Escalate on schedule.",
    headline2: "Never miss a renewal.",
    heroDescription:
      "Deploy lease management that calculates rent escalations on schedule and notifies both parties before renewal deadlines. Across a large portfolio, escalations and renewals fire automatically instead of slipping through manual tracking.",
    heroCta: "Deploy Lease Automation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn manual portfolio tracking into automatic escalation and timely renewal notification.",
    mechanics: [
      { title: "Lease Anchoring", description: "The Provenance Notary seals each lease's escalation clauses and renewal dates, so the terms driving automation are fixed and tamper-evident." },
      { title: "Scheduled Escalation", description: "The contract computes rent escalations on the agreed schedule automatically, so no increase is missed across a large portfolio." },
      { title: "Renewal Notifications", description: "The Notifications module alerts landlord and tenant ahead of each renewal deadline, ending missed windows and lapsed options." },
      { title: "Automated Billing", description: "The Invoices and Billing module bills the escalated rent from the effective date, keeping invoices aligned with the lease terms." },
      { title: "Portfolio View", description: "All leases share one register, so a manager sees upcoming escalations and renewals across the portfolio in one place." },
      { title: "Change Trail", description: "Every escalation and renewal action is recorded, giving both parties a clear history of how the rent reached its current figure." },
    ],
    lifecycleTitle: "The Lease Automation Lifecycle",
    lifecycleSubtitle:
      "Follow one commercial lease from anchoring through a scheduled escalation to a timely renewal notice.",
    lifecycleSteps: [
      {
        label: "Lease Anchoring",
        description:
          "A lease is anchored with its escalation clause and renewal date, fixing the terms the automation will act on.",
        icon: ScrollText,
        logFilename: "cerulea_lease.log",
        logLines: [
          { text: "[SYS] Anchoring lease terms for unit...", time: "09:15:30", tone: "default" },
          { text: "[CMD] anchorLease { unit: \"OFC_L14\", esc: 5, renew: \"2027-06-01\" }", time: "09:15:30", tone: "primary" },
          { text: "[AUTH] Sealing escalation clause, tamper-evident...", time: "09:15:31", tone: "secondary" },
          { text: "[OK] Lease anchored at block 7701220.", time: "09:15:31", tone: "success" },
        ],
      },
      {
        label: "Escalation Trigger",
        description:
          "On the escalation date the contract computes the new rent from the agreed rate and updates the lease.",
        icon: Activity,
        logFilename: "cerulea_lease.log",
        logLines: [
          { text: "[SYS] Escalation date reached for OFC_L14...", time: "00:01:00", tone: "default" },
          { text: "[CMD] escalate(\"OFC_L14\", pct: 5)", time: "00:01:00", tone: "primary" },
          { text: "[SYS] Rent 420,000 to 441,000 computed...", time: "00:01:01", tone: "default" },
          { text: "[OK] Escalation applied automatically.", time: "00:01:01", tone: "success" },
        ],
      },
      {
        label: "Renewal Notice",
        description:
          "Ahead of the renewal deadline both parties are notified, so the window is never missed.",
        icon: HeartPulse,
        logFilename: "cerulea_lease.log",
        logLines: [
          { text: "[SYS] Renewal window approaching for OFC_L14...", time: "08:00:00", tone: "default" },
          { text: "[CMD] notifyRenewal(\"OFC_L14\", daysBefore: 90)", time: "08:00:00", tone: "primary" },
          { text: "[SYS] Alerting landlord and tenant...", time: "08:00:01", tone: "default" },
          { text: "[OK] Both parties notified. Deadline visible.", time: "08:00:01", tone: "success" },
        ],
      },
      {
        label: "Escalated Billing",
        description:
          "The billing module invoices the escalated rent from its effective date, keeping charges aligned with the lease.",
        icon: FileCheck,
        logFilename: "cerulea_lease.log",
        logLines: [
          { text: "[SYS] Generating invoice at escalated rate...", time: "00:05:00", tone: "default" },
          { text: "[CMD] billRent(\"OFC_L14\", amount: 441000)", time: "00:05:00", tone: "primary" },
          { text: "[SYS] Effective date aligned to escalation...", time: "00:05:01", tone: "default" },
          { text: "[OK] Invoice issued at correct rent.", time: "00:05:01", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes lease automation into modular contracts. Each layer anchors terms, escalates rent, notifies parties, and bills without a manager tracking spreadsheets across the portfolio.",
    layers: [
      {
        title: "Lease Registry",
        subtitle: "The Sealed Terms",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Terms",
          description:
            "Anchors each lease's escalation clause and renewal date. It fixes the terms that drive automation, so an increase or renewal is computed from a tamper-evident record rather than a manual note.",
          platformFunction: "Provenance Notary",
        },
        codeSnippet:
          "contract LeaseRegistry {\n  struct Lease {\n    uint256 rent;\n    uint16 escalationPct;\n    uint256 escalationDate;\n    uint256 renewalDate;\n  }\n\n  mapping(bytes32 => Lease) public leases;\n\n  function anchor(bytes32 id, uint256 rent, uint16 pct, uint256 esc, uint256 renew) external onlyManager {\n    leases[id] = Lease(rent, pct, esc, renew);\n  }\n}",
        simAction: "Simulate Lease Anchoring",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading lease terms for OFC_L14...", tone: "default" },
          { text: "Sealing 5 percent escalation clause...", tone: "default" },
          { text: "Setting renewal date 2027-06-01...", tone: "default" },
          { text: "Writing lease to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Lease terms anchored.", tone: "success" },
        ],
      },
      {
        title: "Escalation Engine",
        subtitle: "The Scheduled Increase",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Scheduled Increase",
          description:
            "Computes rent escalations on the agreed schedule automatically. It removes the manual step that lets increases slip, keeping every lease in the portfolio at its correct current rent.",
          platformFunction: "Rent Automation",
        },
        codeSnippet:
          "function escalate(bytes32 id) external {\n    Lease storage l = leases[id];\n    require(block.timestamp >= l.escalationDate, \"Not due\");\n    l.rent += (l.rent * l.escalationPct) / 100;\n    l.escalationDate += 365 days;\n    emit Escalated(id, l.rent);\n}",
        simAction: "Simulate Escalation Trigger",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking escalation date for OFC_L14...", tone: "default" },
          { text: "Applying 5 percent increase...", tone: "default" },
          { text: "Rent moving to 441,000...", tone: "default" },
          { text: "Advancing next escalation date...", tone: "default" },
          { text: "[SUCCESS] Escalation applied on schedule.", tone: "success" },
        ],
      },
      {
        title: "Notifier",
        subtitle: "The Deadline Alert",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Deadline Alert",
          description:
            "Emits renewal alerts to both parties ahead of each deadline. It ends missed renewal windows and lapsed options by making the approaching date impossible to overlook.",
          platformFunction: "Notifications",
        },
        codeSnippet:
          "function checkRenewals(bytes32 id, uint256 leadDays) external {\n    Lease memory l = leases[id];\n    if (block.timestamp >= l.renewalDate - leadDays * 1 days) {\n        emit RenewalDue(id, l.renewalDate);\n    }\n}",
        simAction: "Simulate Renewal Notice",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning renewal date for OFC_L14...", tone: "default" },
          { text: "Detecting 90-day lead window...", tone: "default" },
          { text: "Alerting landlord...", tone: "default" },
          { text: "Alerting tenant...", tone: "default" },
          { text: "[SUCCESS] Renewal deadline surfaced.", tone: "success" },
        ],
      },
      {
        title: "Billing Engine",
        subtitle: "The Aligned Invoice",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Aligned Invoice",
          description:
            "Bills the escalated rent from its effective date. It keeps invoices in step with the lease terms, so a tenant is never charged an old or mismatched figure after an escalation.",
          platformFunction: "Invoices & Billing",
        },
        codeSnippet:
          "function billRent(bytes32 id) external {\n    Lease memory l = leases[id];\n    invoices[id].push(Invoice(l.rent, block.timestamp));\n    emit RentBilled(id, l.rent);\n}",
        simAction: "Simulate Escalated Billing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading current rent for OFC_L14...", tone: "default" },
          { text: "Confirming escalated figure 441,000...", tone: "default" },
          { text: "Aligning effective date...", tone: "default" },
          { text: "Emitting invoice...", tone: "default" },
          { text: "[SUCCESS] Billed at correct escalated rent.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated lease management is a horizontal capability. Here is how different property actors put the escalation and renewal engine to work.",
    sectors: [
      { icon: Building2, title: "Commercial Landlords", description: "Capture every scheduled escalation across a large portfolio automatically, ending revenue lost to missed increases and lapsed renewal options.", assetTypes: ["Lease Registers", "Escalation Schedules", "Renewal Alerts"] },
      { icon: Handshake, title: "Corporate Tenants", description: "Receive timely renewal notices and invoices that match the lease terms, replacing surprise increases with a transparent, predictable schedule.", assetTypes: ["Renewal Notices", "Aligned Invoices", "Term Histories"] },
      { icon: PieChart, title: "Property Managers", description: "Oversee escalations and renewals across the whole portfolio from one register, replacing fragile spreadsheet tracking with automated execution.", assetTypes: ["Portfolio Views", "Change Trails", "Automation Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a property management system or capturing lease actions from a manager app, Cerulea routes both into one lease automation record.",
    tracks: [
      {
        title: "Track A: Property Management Bridging",
        description:
          "For managers on property management systems. Lease and billing data translate into anchored on-chain lease records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Property Mgmt System", sublabel: "Manager Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Lease Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Lease Automation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Manager App Capture",
        description:
          "For managers acting on leases from an app. The app signs escalation and renewal actions from a device wallet and routes them directly to the lease contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Manager App / Wallet", sublabel: "Portfolio Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Lease Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Lease Automation Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a lease automation system with scheduled escalations, renewal notifications, and aligned billing from scratch requires specialised proptech engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Escalation & Renewal Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects proptech integration benchmarks. Wiring a property management system, automating escalations, and shipping renewal notifications for an average portfolio takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your escalation and renewal rules into pre-audited WebAssembly binaries and provisions the notary and notification layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "reit-distribution-and-unit-holder-reporting-transparency",
    icon: PieChart,
    eyebrow: "REIT Distribution Layer",
    headline1: "Show the income trail.",
    headline2: "Verify every distribution.",
    heroDescription:
      "Give REIT unit holders a verifiable basis for each distribution by anchoring property-level rental income and the calculation that turns it into a per-unit payout. The link from underlying income to the amount received replaces a summarized report without detail.",
    heroCta: "Deploy REIT Transparency",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a summarized distribution notice into an anchored, verifiable chain from property income to unit payout.",
    mechanics: [
      { title: "Securities Lifecycle", description: "The Securities Lifecycle module administers the REIT units and their distributions, so payouts run under a proper securities framework rather than a spreadsheet." },
      { title: "Income Anchoring", description: "Property-level rental income is recorded on-chain per asset, giving the distribution a verifiable source instead of an aggregate figure in a report." },
      { title: "Royalty Standard", description: "The Royalty Standard module encodes how pooled income is apportioned to units, so the per-unit share follows a fixed, auditable rule." },
      { title: "Royalty Clearing", description: "The Royalty Clearing module executes the distribution to unit holders, matching payouts to the anchored calculation for each period." },
      { title: "Per-Unit Statement", description: "Each holder can trace their distribution back through the apportionment to the property income that funded it, line by line." },
      { title: "Audit-Ready Reporting", description: "Regulators and auditors verify the income-to-distribution link directly, replacing trust in a summary with a checkable on-chain trail." },
    ],
    lifecycleTitle: "The Distribution Lifecycle",
    lifecycleSubtitle:
      "Follow one REIT period from property income capture through apportionment to a verifiable unit distribution.",
    lifecycleSteps: [
      {
        label: "Income Capture",
        description:
          "Rental income from each property in the portfolio is anchored on-chain, forming the verifiable pool for the period.",
        icon: Building2,
        logFilename: "cerulea_reit.log",
        logLines: [
          { text: "[SYS] Anchoring property income for period...", time: "09:30:12", tone: "default" },
          { text: "[CMD] recordIncome { asset: \"MALL_C2\", rent: 8400000 }", time: "09:30:12", tone: "primary" },
          { text: "[AUTH] Binding income to portfolio pool...", time: "09:30:13", tone: "secondary" },
          { text: "[OK] Income anchored at block 7801220.", time: "09:30:13", tone: "success" },
        ],
      },
      {
        label: "Pool Aggregation",
        description:
          "Income from all assets is aggregated and net distributable income for the period is computed.",
        icon: PieChart,
        logFilename: "cerulea_reit.log",
        logLines: [
          { text: "[SYS] Aggregating portfolio income...", time: "10:12:44", tone: "default" },
          { text: "[CMD] poolIncome(period: \"2026-Q1\")", time: "10:12:44", tone: "primary" },
          { text: "[SYS] Net distributable income 41,200,000...", time: "10:12:45", tone: "default" },
          { text: "[OK] Pool computed for distribution.", time: "10:12:45", tone: "success" },
        ],
      },
      {
        label: "Unit Apportionment",
        description:
          "The apportionment rule divides the pool across units, fixing the per-unit distribution amount.",
        icon: Scale,
        logFilename: "cerulea_reit.log",
        logLines: [
          { text: "[SYS] Apportioning pool to units...", time: "10:14:03", tone: "default" },
          { text: "[CMD] apportion(\"2026-Q1\", units: 20000000)", time: "10:14:03", tone: "primary" },
          { text: "[SYS] Per-unit distribution 2.06 computed...", time: "10:14:04", tone: "default" },
          { text: "[OK] Apportionment anchored, fully traceable.", time: "10:14:04", tone: "success" },
        ],
      },
      {
        label: "Distribution Clearing",
        description:
          "The clearing module pays each holder their apportioned amount, matched to the anchored calculation.",
        icon: Wallet,
        logFilename: "cerulea_reit.log",
        logLines: [
          { text: "[SYS] Clearing distribution to holders...", time: "11:00:20", tone: "default" },
          { text: "[CMD] distribute(\"2026-Q1\")", time: "11:00:20", tone: "primary" },
          { text: "[SYS] Matching payouts to apportionment...", time: "11:00:21", tone: "default" },
          { text: "[OK] Distribution cleared. Basis verifiable.", time: "11:00:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes REIT distribution into modular contracts. Each layer captures income, pools it, apportions to units, and clears payouts without an opaque, summarized report standing between income and holder.",
    layers: [
      {
        title: "Income Registry",
        subtitle: "The Verifiable Source",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verifiable Source",
          description:
            "Anchors property-level rental income per asset. It gives each distribution a checkable source, so a holder can trace the payout back to the specific income that funded it rather than an aggregate.",
          platformFunction: "Income Ledger",
        },
        codeSnippet:
          "contract IncomeRegistry {\n  mapping(bytes32 => mapping(bytes32 => uint256)) public income;\n\n  function record(bytes32 period, bytes32 asset, uint256 rent) external onlyManager {\n    income[period][asset] = rent;\n    emit IncomeRecorded(period, asset, rent);\n  }\n}",
        simAction: "Simulate Income Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading rental income for MALL_C2...", tone: "default" },
          { text: "Binding income to period 2026-Q1...", tone: "default" },
          { text: "Adding asset income to pool...", tone: "default" },
          { text: "Writing income to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Property income anchored.", tone: "success" },
        ],
      },
      {
        title: "Apportionment Engine",
        subtitle: "The Fixed Rule",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fixed Rule",
          description:
            "Encodes how pooled income divides across units. The per-unit share follows an auditable rule rather than a manual calculation, so every holder can verify the amount was computed correctly.",
          platformFunction: "Royalty Standard",
        },
        codeSnippet:
          "function apportion(bytes32 period, uint256 units) external onlyManager returns (uint256) {\n    uint256 pool = pooled[period];\n    uint256 perUnit = pool / units;\n    perUnitDist[period] = perUnit;\n    emit Apportioned(period, perUnit);\n    return perUnit;\n}",
        simAction: "Simulate Apportionment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading pooled income for 2026-Q1...", tone: "default" },
          { text: "Dividing 41,200,000 across units...", tone: "default" },
          { text: "Computing per-unit 2.06...", tone: "default" },
          { text: "Anchoring apportionment...", tone: "default" },
          { text: "[SUCCESS] Per-unit share fixed and traceable.", tone: "success" },
        ],
      },
      {
        title: "Clearing Engine",
        subtitle: "The Matched Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Matched Payout",
          description:
            "Pays each holder their apportioned amount, matched to the anchored calculation. It ensures the money distributed equals the computed per-unit figure times each holding, with no discretion.",
          platformFunction: "Royalty Clearing",
        },
        codeSnippet:
          "function distribute(bytes32 period, address holder) external {\n    uint256 amount = perUnitDist[period] * balanceOf(holder);\n    require(!paid[period][holder], \"Paid\");\n    paid[period][holder] = true;\n    payable(holder).transfer(amount);\n    emit Distributed(period, holder, amount);\n}",
        simAction: "Simulate Distribution Clearing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading holder unit balance...", tone: "default" },
          { text: "Multiplying by per-unit 2.06...", tone: "default" },
          { text: "Transferring distribution to holder...", tone: "default" },
          { text: "Marking period as paid...", tone: "default" },
          { text: "[SUCCESS] Payout matched to apportionment.", tone: "success" },
        ],
      },
      {
        title: "Statement Gateway",
        subtitle: "The Holder Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Holder Window",
          description:
            "A read interface that returns the income, apportionment, and payout for a holder and period. It lets a unit holder or auditor verify the full basis of a distribution line by line.",
          platformFunction: "Reporting Access",
        },
        codeSnippet:
          "function statement(bytes32 period, address holder) external view returns (uint256 pool, uint256 perUnit, uint256 paidAmount) {\n    return (pooled[period], perUnitDist[period], perUnitDist[period] * balanceOf(holder));\n}",
        simAction: "Simulate Statement Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Holder opening statement for 2026-Q1...", tone: "default" },
          { text: "Returning pooled income figure...", tone: "default" },
          { text: "Returning per-unit apportionment...", tone: "default" },
          { text: "Confirming paid amount...", tone: "default" },
          { text: "[SUCCESS] Distribution basis verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent REIT distribution is a horizontal capability. Here is how different market actors put the income-to-payout trail to work.",
    sectors: [
      { icon: Users, title: "Unit Holders", description: "Trace each distribution from the property income that funded it through the apportionment to the amount received, replacing trust in a summary with a verifiable basis.", assetTypes: ["Unit Statements", "Distribution Trails", "Income Proofs"] },
      { icon: Landmark, title: "REIT Managers", description: "Administer distributions under a securities framework with an auditable income-to-payout link, cutting reporting overhead and investor queries.", assetTypes: ["Income Pools", "Apportionment Rules", "Clearing Records"] },
      { icon: Scale, title: "Regulators & Auditors", description: "Verify the property income, apportionment, and payouts directly, checking distribution integrity against an on-chain trail rather than a periodic report.", assetTypes: ["Audit Queries", "Calculation Proofs", "Compliance Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging property accounting and registrar systems or routing native unit holdings, Cerulea routes both into one distribution record.",
    tracks: [
      {
        title: "Track A: Accounting & Registrar Bridging",
        description:
          "For managers on property accounting and registrar systems. Income and holding data translate into anchored on-chain distribution records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Accounting / Registrar", sublabel: "REIT Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Income Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "REIT Distribution Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Unit Holder Execution",
        description:
          "For holders receiving distributions to a wallet. The clearing contract pays units directly and exposes statements to the holder wallet.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Holder Wallet / App", sublabel: "Investor Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Distribution Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Unit Distribution Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a REIT distribution system with anchored income, rule-based apportionment, and verifiable clearing from scratch requires specialised securities and blockchain engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Income & Distribution Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects securities-tech integration benchmarks. Anchoring property income, encoding apportionment, and building verifiable clearing for an average REIT takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your income and distribution rules into pre-audited WebAssembly binaries and provisions the securities and clearing layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "facility-management-vendor-sla-compliance-tracking",
    icon: FileCheck,
    eyebrow: "SLA Compliance Layer",
    headline1: "Timestamp every response.",
    headline2: "Verify SLA performance.",
    heroDescription:
      "Anchor verified timestamps for service requests and vendor responses across a property portfolio, giving owners an independent record of SLA compliance. Vendor performance rests on signed events rather than the vendor's own self-reporting.",
    heroCta: "Deploy SLA Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn vendor self-reporting into an independent, timestamped record of SLA performance.",
    mechanics: [
      { title: "Request Timestamping", description: "Each maintenance or service request is anchored with its raise time, starting the SLA clock on an independent, tamper-evident event." },
      { title: "Response Capture", description: "The Notifications module records vendor acknowledgement and completion times, so response and resolution are measured against signed timestamps." },
      { title: "SLA Evaluation", description: "The Compliance Attestations module compares each response against the agreed SLA terms, marking on-time or breached automatically." },
      { title: "Audit Logs", description: "The Audit Logs module keeps a tamper-evident history of every request and response, replacing vendor spreadsheets with an independent record." },
      { title: "Portfolio Scorecard", description: "Compliance rates accumulate per vendor across the portfolio, giving owners an evidence-based view of who meets their SLAs." },
      { title: "Penalty Triggering", description: "A breached SLA can trigger the contracted penalty automatically, tying performance to consequences without manual dispute." },
    ],
    lifecycleTitle: "The SLA Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow one maintenance request from raise through vendor response to an SLA compliance verdict.",
    lifecycleSteps: [
      {
        label: "Request Raised",
        description:
          "A service request is raised and timestamped on-chain, starting the SLA clock on an independent event.",
        icon: ScrollText,
        logFilename: "cerulea_sla.log",
        logLines: [
          { text: "[SYS] Raising maintenance request...", time: "09:12:05", tone: "default" },
          { text: "[CMD] raiseRequest { site: \"TWR_E\", issue: \"HVAC_FAULT\", sla: 4 }", time: "09:12:05", tone: "primary" },
          { text: "[AUTH] Anchoring raise timestamp...", time: "09:12:06", tone: "secondary" },
          { text: "[OK] Request REQ_7712 clock started.", time: "09:12:06", tone: "success" },
        ],
      },
      {
        label: "Vendor Acknowledgement",
        description:
          "The vendor acknowledges the request, and the acknowledgement time is captured against the SLA.",
        icon: Handshake,
        logFilename: "cerulea_sla.log",
        logLines: [
          { text: "[SYS] Vendor acknowledging REQ_7712...", time: "09:48:31", tone: "default" },
          { text: "[CMD] acknowledge(\"REQ_7712\", vendor: \"FM_B\")", time: "09:48:31", tone: "primary" },
          { text: "[SYS] Acknowledgement time recorded...", time: "09:48:32", tone: "default" },
          { text: "[OK] Response time 36 minutes captured.", time: "09:48:32", tone: "success" },
        ],
      },
      {
        label: "Resolution Logged",
        description:
          "The vendor completes the work, and the resolution time is recorded to measure against the SLA window.",
        icon: FileCheck,
        logFilename: "cerulea_sla.log",
        logLines: [
          { text: "[SYS] Vendor closing REQ_7712...", time: "12:20:14", tone: "default" },
          { text: "[CMD] resolve(\"REQ_7712\", status: \"COMPLETE\")", time: "12:20:14", tone: "primary" },
          { text: "[SYS] Resolution time 3h08m recorded...", time: "12:20:15", tone: "default" },
          { text: "[OK] Work logged against SLA window.", time: "12:20:15", tone: "success" },
        ],
      },
      {
        label: "SLA Verdict",
        description:
          "The contract compares response and resolution against the SLA terms and marks the request on-time or breached.",
        icon: Scale,
        logFilename: "cerulea_sla.log",
        logLines: [
          { text: "[SYS] Evaluating SLA for REQ_7712...", time: "12:20:16", tone: "default" },
          { text: "[CMD] evaluateSLA(\"REQ_7712\")", time: "12:20:16", tone: "primary" },
          { text: "[SYS] 3h08m within 4h window...", time: "12:20:17", tone: "default" },
          { text: "[OK] Verdict: ON-TIME. Scorecard updated.", time: "12:20:17", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes SLA tracking into modular contracts. Each layer timestamps requests, captures responses, evaluates compliance, and scores vendors without relying on self-reported performance.",
    layers: [
      {
        title: "Request Registry",
        subtitle: "The SLA Clock",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The SLA Clock",
          description:
            "Anchors each service request with its raise time. It starts the SLA clock on an independent, tamper-evident event rather than a time the vendor can later adjust in its own records.",
          platformFunction: "Request Ledger",
        },
        codeSnippet:
          "contract SLARegistry {\n  struct Request {\n    bytes32 site;\n    uint256 raisedAt;\n    uint16 slaHours;\n    uint256 resolvedAt;\n  }\n\n  mapping(bytes32 => Request) public requests;\n\n  function raise(bytes32 id, bytes32 site, uint16 sla) external {\n    requests[id] = Request(site, block.timestamp, sla, 0);\n  }\n}",
        simAction: "Simulate Request Raise",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording HVAC fault at TWR_E...", tone: "default" },
          { text: "Anchoring raise timestamp...", tone: "default" },
          { text: "Setting 4-hour SLA window...", tone: "default" },
          { text: "Writing request to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] SLA clock started on-chain.", tone: "success" },
        ],
      },
      {
        title: "Response Recorder",
        subtitle: "The Vendor Trail",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Vendor Trail",
          description:
            "Captures vendor acknowledgement and resolution times. It measures response and completion against signed timestamps, so performance is recorded independently of the vendor's own reporting.",
          platformFunction: "Notifications",
        },
        codeSnippet:
          "function resolve(bytes32 id, bytes32 vendor) external onlyVendor(vendor) {\n    require(requests[id].resolvedAt == 0, \"Closed\");\n    requests[id].resolvedAt = block.timestamp;\n    emit Resolved(id, vendor, block.timestamp);\n}",
        simAction: "Simulate Response Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Vendor FM_B acknowledging REQ_7712...", tone: "default" },
          { text: "Recording acknowledgement time...", tone: "default" },
          { text: "Capturing resolution timestamp...", tone: "default" },
          { text: "Appending to vendor trail...", tone: "default" },
          { text: "[SUCCESS] Response times recorded.", tone: "success" },
        ],
      },
      {
        title: "SLA Evaluator",
        subtitle: "The Compliance Verdict",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Verdict",
          description:
            "Compares response and resolution times against the SLA terms and marks each request on-time or breached. It removes the argument from performance by measuring against fixed, signed events.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function evaluateSLA(bytes32 id) external view returns (bool met) {\n    Request memory r = requests[id];\n    if (r.resolvedAt == 0) return false;\n    return (r.resolvedAt - r.raisedAt) <= uint256(r.slaHours) * 1 hours;\n}",
        simAction: "Simulate SLA Verdict",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading REQ_7712 timestamps...", tone: "default" },
          { text: "Computing 3h08m resolution time...", tone: "default" },
          { text: "Comparing against 4h window...", tone: "default" },
          { text: "Marking request on-time...", tone: "default" },
          { text: "[SUCCESS] SLA verdict recorded.", tone: "success" },
        ],
      },
      {
        title: "Vendor Scorecard",
        subtitle: "The Performance View",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Performance View",
          description:
            "Accumulates compliance rates per vendor across the portfolio and can trigger contracted penalties on breach. It gives owners an evidence-based basis for renewing or replacing vendors.",
          platformFunction: "Audit Logs",
        },
        codeSnippet:
          "function updateScore(bytes32 vendor, bool met) internal {\n    scores[vendor].total += 1;\n    if (met) scores[vendor].met += 1;\n    else emit PenaltyTriggered(vendor);\n    emit ScoreUpdated(vendor, scores[vendor].met, scores[vendor].total);\n}",
        simAction: "Simulate Scorecard Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading vendor FM_B score...", tone: "default" },
          { text: "Recording on-time result...", tone: "default" },
          { text: "Updating portfolio compliance rate...", tone: "default" },
          { text: "No penalty triggered...", tone: "default" },
          { text: "[SUCCESS] Vendor scorecard updated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Independent SLA tracking is a horizontal capability. Here is how different facility actors put the timestamped compliance record to work.",
    sectors: [
      { icon: Building2, title: "Property Owners", description: "Hold an independent record of vendor SLA performance across the portfolio, basing renewals and penalties on signed timestamps instead of vendor self-reports.", assetTypes: ["SLA Records", "Vendor Scorecards", "Penalty Triggers"] },
      { icon: Handshake, title: "Facility Vendors", description: "Prove strong SLA performance with a tamper-evident trail, winning renewals on demonstrated response times rather than contested claims.", assetTypes: ["Response Trails", "Compliance Proofs", "Performance Records"] },
      { icon: Users, title: "Tenants & Occupants", description: "See that service requests are logged and resolved within agreed windows, gaining confidence that building issues are handled to standard.", assetTypes: ["Request Logs", "Resolution Times", "Service Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a facility management platform or capturing requests from a tenant app, Cerulea routes both into one SLA compliance record.",
    tracks: [
      {
        title: "Track A: Facility Platform Bridging",
        description:
          "For owners on facility management platforms. Request and response data translate into timestamped on-chain SLA records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Facility Platform", sublabel: "Owner Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "SLA Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Tenant App Capture",
        description:
          "For tenants raising requests from an app. The app signs requests from a device wallet and routes them directly to the SLA contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Tenant App / Wallet", sublabel: "Occupant Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Request Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "SLA Performance Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an SLA tracking system with timestamped requests, response capture, compliance evaluation, and vendor scorecards from scratch requires specialised proptech engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Request & SLA Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects proptech integration benchmarks. Wiring a facility platform, capturing response times, and building vendor scorecards for an average portfolio takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your request and SLA rules into pre-audited WebAssembly binaries and provisions the attestation and audit layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "property-title-registration-and-transfer-on-blockchain",
    icon: Landmark,
    eyebrow: "Land Registry Layer",
    headline1: "Make title incorruptible.",
    headline2: "Verify clean ownership.",
    heroDescription:
      "Run a digital land registry with public verification, where title history is immutable and complete and encumbrance certificates are instant. Fraud requires compromising multiple signatories at once, so a buyer verifies clean title without an expensive legal search.",
    heroCta: "Deploy Land Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn forgeable paper title and slow legal searches into an immutable registry with instant verification.",
    mechanics: [
      { title: "Immutable Title History", description: "The Land Title Registry module records every title and transfer, so the full ownership history is complete and cannot be altered after the fact." },
      { title: "Verified Signatories", description: "The DID and VC Ledger binds each party and official to a verified identity, so a transfer requires genuine credentials that a forged document cannot fake." },
      { title: "Instant Encumbrance", description: "An encumbrance certificate resolves from the ledger in seconds, replacing a multi-week search with a live query of charges against the property." },
      { title: "Multi-Signatory Security", description: "A transfer needs several signatories to sign together, so fraud requires compromising all of them at once rather than bribing a single office." },
      { title: "Document Signing", description: "The Document Signing module anchors sale deeds by digest, so any tampering with a registered document breaks its hash and is detectable." },
      { title: "Public Verification", description: "Anyone can verify current ownership and encumbrance without an account, giving buyers and lenders confidence before they commit." },
    ],
    lifecycleTitle: "The Title Registration Lifecycle",
    lifecycleSubtitle:
      "Follow one property from title anchoring through a multi-signatory transfer to instant public verification.",
    lifecycleSteps: [
      {
        label: "Title Anchoring",
        description:
          "A property's current title is anchored with its owner and boundaries, forming the genesis of an immutable history.",
        icon: Landmark,
        logFilename: "cerulea_land_registry.log",
        logLines: [
          { text: "[SYS] Anchoring property title...", time: "09:05:22", tone: "default" },
          { text: "[CMD] anchorTitle { plot: \"PLT_4471\", owner: \"OWN_2201\" }", time: "09:05:22", tone: "primary" },
          { text: "[AUTH] Binding owner to verified identity...", time: "09:05:23", tone: "secondary" },
          { text: "[OK] Title anchored at block 7901220.", time: "09:05:23", tone: "success" },
        ],
      },
      {
        label: "Transfer Initiation",
        description:
          "A sale deed is anchored and a transfer is proposed, entering the multi-signatory approval flow.",
        icon: ScrollText,
        logFilename: "cerulea_land_registry.log",
        logLines: [
          { text: "[SYS] Initiating transfer for PLT_4471...", time: "11:30:14", tone: "default" },
          { text: "[CMD] proposeTransfer(\"PLT_4471\", to: \"BUY_3390\")", time: "11:30:14", tone: "primary" },
          { text: "[SYS] Anchoring sale deed by digest...", time: "11:30:15", tone: "default" },
          { text: "[OK] Transfer queued for signatories.", time: "11:30:15", tone: "success" },
        ],
      },
      {
        label: "Multi-Signatory Approval",
        description:
          "Seller, buyer, and registrar sign together, and the transfer executes only when the required signatures are present.",
        icon: ShieldCheck,
        logFilename: "cerulea_land_registry.log",
        logLines: [
          { text: "[SYS] Collecting transfer signatures...", time: "14:12:40", tone: "default" },
          { text: "[CMD] signTransfer(\"PLT_4471\", role: \"REGISTRAR\")", time: "14:12:40", tone: "primary" },
          { text: "[AUTH] 3/3 required signatories present...", time: "14:12:41", tone: "secondary" },
          { text: "[OK] Ownership transferred to BUY_3390.", time: "14:12:41", tone: "success" },
        ],
      },
      {
        label: "Public Verification",
        description:
          "A buyer or lender queries current ownership and encumbrance instantly, with no legal search required.",
        icon: Search,
        logFilename: "cerulea_land_registry.log",
        logLines: [
          { text: "[SYS] Public verification for PLT_4471...", time: "16:40:07", tone: "default" },
          { text: "[CMD] verifyTitle(\"PLT_4471\")", time: "16:40:07", tone: "primary" },
          { text: "[SYS] Returning owner and encumbrance status...", time: "16:40:08", tone: "default" },
          { text: "[OK] Clean title confirmed instantly.", time: "16:40:08", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes land registry into modular contracts. Each layer anchors title, verifies signatories, executes transfers, and exposes verification without any single office able to forge ownership.",
    layers: [
      {
        title: "Title Registry",
        subtitle: "The Immutable Record",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Immutable Record",
          description:
            "The foundational layer. It records each title and its full transfer history, so ownership is complete and cannot be altered, missing, or rewritten in a sub-registrar office.",
          platformFunction: "Land Title Registry",
        },
        codeSnippet:
          "contract TitleRegistry {\n  struct Title {\n    bytes32 owner;\n    bytes32 boundaries;\n    bool encumbered;\n  }\n\n  mapping(bytes32 => Title) public titles;\n  mapping(bytes32 => bytes32[]) public history;\n\n  function anchor(bytes32 plot, bytes32 owner, bytes32 bounds) external onlyRegistrar {\n    titles[plot] = Title(owner, bounds, false);\n    history[plot].push(owner);\n  }\n}",
        simAction: "Simulate Title Anchoring",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified owner OWN_2201...", tone: "default" },
          { text: "Recording plot boundaries...", tone: "default" },
          { text: "Writing title as genesis of history...", tone: "default" },
          { text: "Storing title to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Immutable title anchored.", tone: "success" },
        ],
      },
      {
        title: "Signatory Verifier",
        subtitle: "The Identity Gate",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Gate",
          description:
            "Binds each party and official to a verified credential. A transfer requires genuine identities, so a forged deed cannot borrow a real registration and fraud cannot rest on a single signature.",
          platformFunction: "DID & VC Ledger",
        },
        codeSnippet:
          "function signTransfer(bytes32 plot, bytes32 role) external {\n    require(vc.verified(msg.sender, role), \"Unverified signatory\");\n    signatures[plot][role] = true;\n    emit Signed(plot, role, msg.sender);\n}",
        simAction: "Simulate Signatory Verify",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying registrar credential...", tone: "default" },
          { text: "Confirming seller signature present...", tone: "default" },
          { text: "Confirming buyer signature present...", tone: "default" },
          { text: "Recording registrar signature...", tone: "default" },
          { text: "[SUCCESS] All signatories verified.", tone: "success" },
        ],
      },
      {
        title: "Transfer Engine",
        subtitle: "The Multi-Sig Execution",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Multi-Sig Execution",
          description:
            "Executes a transfer only when all required signatories have signed. It makes fraud require compromising several parties at once, replacing the vulnerability of a single corruptible office.",
          platformFunction: "Document Signing",
        },
        codeSnippet:
          "function execute(bytes32 plot, bytes32 to) external {\n    require(signatures[plot][\"SELLER\"] && signatures[plot][\"BUYER\"] && signatures[plot][\"REGISTRAR\"], \"Missing signatures\");\n    history[plot].push(to);\n    titles[plot].owner = to;\n    emit TitleTransferred(plot, to);\n}",
        simAction: "Simulate Transfer Execution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking all required signatures...", tone: "default" },
          { text: "Confirming 3 of 3 signatories...", tone: "default" },
          { text: "Appending buyer to title history...", tone: "default" },
          { text: "Updating current owner...", tone: "default" },
          { text: "[SUCCESS] Ownership transferred securely.", tone: "success" },
        ],
      },
      {
        title: "Verification Gateway",
        subtitle: "The Public Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Public Window",
          description:
            "A read interface returning current owner, history, and encumbrance for any plot. It lets a buyer or lender verify clean title instantly, replacing an expensive multi-week legal search.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyTitle(bytes32 plot) external view returns (bytes32 owner, bool encumbered, uint256 transfers) {\n    Title memory t = titles[plot];\n    return (t.owner, t.encumbered, history[plot].length);\n}",
        simAction: "Simulate Public Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer querying title PLT_4471...", tone: "default" },
          { text: "Returning current owner BUY_3390...", tone: "default" },
          { text: "Checking encumbrance status...", tone: "default" },
          { text: "Returning full transfer count...", tone: "default" },
          { text: "[SUCCESS] Clean title verified instantly.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Immutable land registry is a horizontal capability. Here is how different actors put the verifiable title record to work.",
    sectors: [
      { icon: Landmark, title: "Land Registries & Government", description: "Run title registration on an immutable ledger where fraud requires compromising many signatories, cutting the litigation and corruption that plague paper records.", assetTypes: ["Title Records", "Transfer Histories", "Encumbrance Registries"] },
      { icon: Home, title: "Property Buyers", description: "Get an instant, complete title history before signing, replacing a multi-week lawyer search with a live query of ownership and charges.", assetTypes: ["Title Queries", "Ownership Proofs", "Clean Title Checks"] },
      { icon: Wallet, title: "Mortgage Lenders", description: "Approve loans in days using an on-chain encumbrance certificate, verifying clear charges without waiting on a manual title investigation.", assetTypes: ["Encumbrance Certificates", "Charge Records", "Loan Verifications"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy land records system or capturing signatures from a registrar wallet, Cerulea routes both into one immutable title record.",
    tracks: [
      {
        title: "Track A: Land Records Bridging",
        description:
          "For registries on legacy land records systems. Title and transfer data translate into anchored on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Land Records System", sublabel: "Registry Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Title Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Land Title Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Registrar Wallet Capture",
        description:
          "For registrars and parties signing transfers. A wallet app signs transfer approvals from a device wallet and routes them directly to the registry contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Registrar Wallet", sublabel: "Official & Party Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Transfer Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Immutable Title Record", icon: Landmark, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a digital land registry with immutable history, multi-signatory transfers, and instant encumbrance verification from scratch requires specialised govtech and identity engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Title & Transfer Rules",
      ruleCount: 54,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects govtech and identity integration benchmarks. Building an immutable title store, wiring multi-signatory transfers, and shipping instant encumbrance verification for an average jurisdiction takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your title and transfer rules into pre-audited WebAssembly binaries and provisions the registry and identity layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "fractional-residential-property-ownership-via-tokenization",
    icon: Home,
    eyebrow: "Fractional Ownership dApp",
    headline1: "Own a slice of the home.",
    headline2: "Earn income on-chain.",
    heroDescription:
      "Deploy a public-chain fractional property investment dApp with KYC-gated tokens, automated rental income distribution, and on-chain governance. Retail investors hold verified fractional ownership and receive transparent, auditable income with no legal intermediary.",
    heroCta: "Deploy Fractional dApps",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn intermediated property investment into KYC-gated fractions with automated income and governance.",
    mechanics: [
      { title: "Multi-Token Fractions", description: "The ERC-1155 Multi-Token module issues fractional ownership of each residential property, so retail investors hold and transfer defined slices on-chain." },
      { title: "KYC-Gated Access", description: "Tokens are gated so only KYC-verified investors can hold fractions, keeping the retail dApp inside regulatory limits without a manual gatekeeper." },
      { title: "Vault Income", description: "The ERC-4626 Vault module pools rental income and streams yield to fraction holders, turning property income into an on-chain, claimable return." },
      { title: "Automated Distribution", description: "The Payouts and Settlements module distributes rental income to holders automatically, removing the legal intermediary that normally sits between rent and investor." },
      { title: "On-Chain Governance", description: "Holders vote on decisions like major repairs or sale, so control over the asset is transparent and proportional to holding rather than opaque." },
      { title: "Transparent Audit", description: "Every income payment and vote is recorded, giving investors a fully auditable trail of returns and decisions on the property." },
    ],
    lifecycleTitle: "The Fractional Ownership Lifecycle",
    lifecycleSubtitle:
      "Follow one investor from KYC onboarding through fraction purchase to automated rental income.",
    lifecycleSteps: [
      {
        label: "Property Onboarding",
        description:
          "A residential property is tokenized into KYC-gated fractions, with its income vault deployed and linked.",
        icon: Home,
        logFilename: "cerulea_fractional.log",
        logLines: [
          { text: "[SYS] Tokenizing residential property...", time: "09:10:14", tone: "default" },
          { text: "[CMD] tokenize { asset: \"VILLA_22\", fractions: 10000 }", time: "09:10:14", tone: "primary" },
          { text: "[AUTH] Deploying ERC-4626 income vault...", time: "09:10:15", tone: "secondary" },
          { text: "[OK] Property tokenized at block 8011220.", time: "09:10:15", tone: "success" },
        ],
      },
      {
        label: "Investor KYC",
        description:
          "A retail investor completes KYC and is whitelisted to hold fractions of the property.",
        icon: Fingerprint,
        logFilename: "cerulea_fractional.log",
        logLines: [
          { text: "[SYS] Onboarding retail investor...", time: "11:22:41", tone: "default" },
          { text: "[CMD] verifyKYC(\"INV_8842\")", time: "11:22:41", tone: "primary" },
          { text: "[AUTH] Whitelisting for fraction holding...", time: "11:22:42", tone: "secondary" },
          { text: "[OK] Investor cleared to buy fractions.", time: "11:22:42", tone: "success" },
        ],
      },
      {
        label: "Fraction Purchase",
        description:
          "The investor buys fractions, receiving verified ownership recorded on the public chain.",
        icon: Coins,
        logFilename: "cerulea_fractional.log",
        logLines: [
          { text: "[SYS] Processing fraction purchase...", time: "13:40:07", tone: "default" },
          { text: "[CMD] buyFractions(\"VILLA_22\", qty: 50, price: 500000)", time: "13:40:07", tone: "primary" },
          { text: "[SYS] Confirming KYC gate before transfer...", time: "13:40:08", tone: "default" },
          { text: "[OK] 50 fractions issued to INV_8842.", time: "13:40:08", tone: "success" },
        ],
      },
      {
        label: "Income Distribution",
        description:
          "Rental income flows into the vault and streams to holders automatically, with no intermediary.",
        icon: Wallet,
        logFilename: "cerulea_fractional.log",
        logLines: [
          { text: "[SYS] Rental income received into vault...", time: "00:02:00", tone: "default" },
          { text: "[CMD] distributeYield(\"VILLA_22\", amount: 320000)", time: "00:02:00", tone: "primary" },
          { text: "[SYS] Streaming pro-rata to fraction holders...", time: "00:02:01", tone: "default" },
          { text: "[OK] Income distributed. Fully auditable.", time: "00:02:01", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fractional ownership into modular contracts. Each layer tokenizes the asset, gates access, streams income, and governs decisions without a legal intermediary between property and investor.",
    layers: [
      {
        title: "Fraction Token",
        subtitle: "The Ownership Slice",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ownership Slice",
          description:
            "Issues each property as fractional multi-token positions on a public chain. It gives retail investors verified, transferable ownership of a slice of a home rather than an off-chain paper claim.",
          platformFunction: "ERC-1155 Multi-Token",
        },
        codeSnippet:
          "contract FractionToken {\n  mapping(uint256 => mapping(address => uint256)) public balances;\n\n  function mint(uint256 assetId, address to, uint256 qty) external onlyIssuer {\n    require(kyc.verified(to), \"KYC required\");\n    balances[assetId][to] += qty;\n    emit FractionMinted(assetId, to, qty);\n  }\n}",
        simAction: "Simulate Fraction Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming investor KYC for INV_8842...", tone: "default" },
          { text: "Minting 50 fractions of VILLA_22...", tone: "default" },
          { text: "Recording verified ownership...", tone: "default" },
          { text: "Writing balance to public chain...", tone: "default" },
          { text: "[SUCCESS] Fractional ownership issued.", tone: "success" },
        ],
      },
      {
        title: "Income Vault",
        subtitle: "The Yield Engine",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Yield Engine",
          description:
            "Pools rental income and streams it to fraction holders pro-rata. It turns property income into an on-chain, claimable yield, removing the intermediary that normally handles distribution.",
          platformFunction: "ERC-4626 Vault",
        },
        codeSnippet:
          "function distributeYield(uint256 assetId, uint256 amount) external {\n    uint256 supply = totalFractions[assetId];\n    perFraction[assetId] += amount / supply;\n    emit YieldDistributed(assetId, amount);\n}",
        simAction: "Simulate Yield Distribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving 320,000 rental income...", tone: "default" },
          { text: "Computing per-fraction yield...", tone: "default" },
          { text: "Streaming pro-rata to holders...", tone: "default" },
          { text: "Recording distribution on-chain...", tone: "default" },
          { text: "[SUCCESS] Income distributed automatically.", tone: "success" },
        ],
      },
      {
        title: "Compliance Gate",
        subtitle: "The KYC Filter",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The KYC Filter",
          description:
            "Ensures only verified investors hold or receive fractions. It keeps the retail dApp inside regulatory limits automatically, so a transfer to an unverified wallet is rejected at the contract level.",
          platformFunction: "KYC & Identity Verification",
        },
        codeSnippet:
          "function transfer(uint256 assetId, address to, uint256 qty) external {\n    require(kyc.verified(to), \"Recipient not verified\");\n    balances[assetId][msg.sender] -= qty;\n    balances[assetId][to] += qty;\n    emit FractionTransferred(assetId, msg.sender, to, qty);\n}",
        simAction: "Simulate Gated Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking recipient KYC status...", tone: "default" },
          { text: "Confirming verified investor...", tone: "default" },
          { text: "Moving fractions between holders...", tone: "default" },
          { text: "Recording transfer on-chain...", tone: "default" },
          { text: "[SUCCESS] Only verified holders admitted.", tone: "success" },
        ],
      },
      {
        title: "Governance Module",
        subtitle: "The Holder Vote",
        icon: Vote,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Holder Vote",
          description:
            "Lets fraction holders vote on decisions like repairs or sale, weighted by holding. It makes control over the asset transparent and proportional rather than concentrated in an opaque manager.",
          platformFunction: "On-Chain Governance",
        },
        codeSnippet:
          "function vote(uint256 proposalId, bool support) external {\n    uint256 weight = balances[assetOf[proposalId]][msg.sender];\n    require(weight > 0, \"Not a holder\");\n    proposals[proposalId].tally += support ? int256(weight) : -int256(weight);\n    emit Voted(proposalId, msg.sender, support, weight);\n}",
        simAction: "Simulate Governance Vote",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading holder weight for INV_8842...", tone: "default" },
          { text: "Recording vote on repair proposal...", tone: "default" },
          { text: "Updating weighted tally...", tone: "default" },
          { text: "Anchoring vote on-chain...", tone: "default" },
          { text: "[SUCCESS] Holder vote recorded transparently.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "KYC-gated fractional ownership is a horizontal capability. Here is how different actors put the investment dApp to work.",
    sectors: [
      { icon: Users, title: "Retail Investors", description: "Own verified fractions of residential property and receive automated, auditable rental income, gaining access to an asset class without a legal intermediary.", assetTypes: ["Property Fractions", "Income Streams", "Governance Rights"] },
      { icon: Home, title: "Proptech Platforms", description: "Launch a compliant fractional investment product with KYC gating and automated distribution built in, cutting the operational cost of managing investors.", assetTypes: ["Tokenized Assets", "Income Vaults", "KYC Registries"] },
      { icon: Landmark, title: "Regulators & Auditors", description: "Read the ownership, income, and governance record directly, verifying that only KYC investors hold fractions and distributions match income.", assetTypes: ["Ownership Registers", "Distribution Audits", "Compliance Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a property manager's income systems or routing native retail investment, Cerulea provides the settlement routing the dApp needs.",
    tracks: [
      {
        title: "Track A: Property Income Bridging",
        description:
          "For managers on rental and accounting systems. Rental income data translates into on-chain vault deposits through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Rental / Accounting", sublabel: "Manager Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Income Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Income Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Retail Investment",
        description:
          "For retail investors buying and holding fractions. A wallet signs purchases and votes and routes them directly to the public dApp contracts.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Investor Wallet / App", sublabel: "Retail Devices", icon: Fingerprint, accent: false },
          { label: "Public dApp Contracts", sublabel: "Fraction & Vault Logic", icon: Coins, accent: true },
          { label: "Cerulea Public L1", sublabel: "Fractional Ownership Ledger", icon: Home, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a fractional investment dApp with KYC gating, income vaults, automated distribution, and on-chain governance from scratch requires specialised dApp and compliance engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Token & Governance Rules",
      ruleCount: 49,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects dApp development benchmarks. Building KYC-gated tokens, income vaults, automated distribution, and governance for an average platform takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your token and governance rules into pre-audited WebAssembly binaries and provisions the vault and compliance layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "society-maintenance-fund-collection-and-expenditure-transparency",
    icon: PieChart,
    eyebrow: "Community Fund Layer",
    headline1: "Show every contribution.",
    headline2: "Track every expense.",
    heroDescription:
      "Run a transparent maintenance fund where every resident sees contributions collected and exactly how the money was spent. The fund becomes a shared, verifiable resource instead of a source of suspicion between residents and the committee.",
    heroCta: "Deploy Community Funds",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque committee-run fund into a shared ledger of collections and expenditure.",
    mechanics: [
      { title: "Contribution Ledger", description: "The Invoices and Billing module records each resident's maintenance contribution, so collections are visible and no household is quietly favoured or overcharged." },
      { title: "Escrowed Fund", description: "The Escrow and Conditional Settlement module holds the pooled fund, so committee spending draws from a shared, visible balance rather than a private account." },
      { title: "Expenditure Recording", description: "Every expense is recorded against a vendor and purpose, so residents see exactly what the money bought instead of a summary at the annual meeting." },
      { title: "Audit Logs", description: "The Audit Logs module timestamps every collection and payment, giving residents a tamper-evident history that removes the basis for suspicion." },
      { title: "Resident Visibility", description: "Every resident reads the same live ledger of contributions and spending, turning the fund into a shared resource rather than a committee secret." },
      { title: "Defaulter Clarity", description: "Outstanding contributions are visible, so the burden of unpaid dues is transparent and shared fairly rather than hidden." },
    ],
    lifecycleTitle: "The Maintenance Fund Lifecycle",
    lifecycleSubtitle:
      "Follow the fund from resident contribution through committee expenditure to a resident's transparent view.",
    lifecycleSteps: [
      {
        label: "Contribution Collection",
        description:
          "Residents pay their maintenance contributions, each recorded against their unit in the shared ledger.",
        icon: Wallet,
        logFilename: "cerulea_society_fund.log",
        logLines: [
          { text: "[SYS] Recording maintenance contribution...", time: "09:05:11", tone: "default" },
          { text: "[CMD] collect { unit: \"A_402\", amount: 4500, month: \"2026-03\" }", time: "09:05:11", tone: "primary" },
          { text: "[AUTH] Adding to escrowed society fund...", time: "09:05:12", tone: "secondary" },
          { text: "[OK] Contribution recorded at block 8101220.", time: "09:05:12", tone: "success" },
        ],
      },
      {
        label: "Expense Proposal",
        description:
          "The committee records a proposed expense against a vendor and purpose, drawing from the visible fund balance.",
        icon: ScrollText,
        logFilename: "cerulea_society_fund.log",
        logLines: [
          { text: "[SYS] Recording expense proposal...", time: "11:30:22", tone: "default" },
          { text: "[CMD] proposeExpense(vendor: \"LIFT_CO\", amount: 85000, for: \"LIFT_AMC\")", time: "11:30:22", tone: "primary" },
          { text: "[SYS] Checking against fund balance...", time: "11:30:23", tone: "default" },
          { text: "[OK] Expense proposed. Visible to residents.", time: "11:30:23", tone: "success" },
        ],
      },
      {
        label: "Payment Execution",
        description:
          "The approved expense is paid from the fund, and the payment is recorded against its vendor and purpose.",
        icon: Zap,
        logFilename: "cerulea_society_fund.log",
        logLines: [
          { text: "[SYS] Executing approved expense...", time: "14:10:40", tone: "default" },
          { text: "[CMD] payExpense(\"LIFT_CO\", 85000)", time: "14:10:40", tone: "primary" },
          { text: "[SYS] Recording payment to audit log...", time: "14:10:41", tone: "default" },
          { text: "[OK] Paid. Fund balance updated for all.", time: "14:10:41", tone: "success" },
        ],
      },
      {
        label: "Resident View",
        description:
          "A resident queries the ledger, seeing contributions collected, expenses paid, and the current balance.",
        icon: Search,
        logFilename: "cerulea_society_fund.log",
        logLines: [
          { text: "[SYS] Resident opening fund ledger...", time: "18:22:07", tone: "default" },
          { text: "[CMD] viewFund(society: \"GRN_HTS\")", time: "18:22:07", tone: "primary" },
          { text: "[SYS] Returning collections and expenditure...", time: "18:22:08", tone: "default" },
          { text: "[OK] Full transparency returned to resident.", time: "18:22:08", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the maintenance fund into modular contracts. Each layer records contributions, holds the fund, tracks expenditure, and exposes it to residents without the committee controlling a private account.",
    layers: [
      {
        title: "Contribution Ledger",
        subtitle: "The Fair Collection",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fair Collection",
          description:
            "Records each resident's contribution against their unit. It makes collections visible, so residents can confirm dues are charged and paid fairly rather than trusting a committee tally.",
          platformFunction: "Invoices & Billing",
        },
        codeSnippet:
          "contract SocietyFund {\n  uint256 public balance;\n  mapping(bytes32 => uint256) public contributed;\n\n  function collect(bytes32 unit, uint256 amount) external {\n    contributed[unit] += amount;\n    balance += amount;\n    emit Contributed(unit, amount);\n  }\n}",
        simAction: "Simulate Contribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading contribution from unit A_402...", tone: "default" },
          { text: "Adding 4,500 to fund balance...", tone: "default" },
          { text: "Recording against unit ledger...", tone: "default" },
          { text: "Writing to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Contribution recorded transparently.", tone: "success" },
        ],
      },
      {
        title: "Fund Escrow",
        subtitle: "The Shared Balance",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Balance",
          description:
            "Holds the pooled fund in a visible balance. Committee spending draws from a shared escrow every resident can see, replacing the private account that fuels suspicion in most societies.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function proposeExpense(bytes32 vendor, uint256 amount, string calldata purpose) external onlyCommittee {\n    require(amount <= balance, \"Exceeds fund\");\n    expenses.push(Expense(vendor, amount, purpose, false));\n    emit ExpenseProposed(vendor, amount, purpose);\n}",
        simAction: "Simulate Expense Proposal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Committee proposing lift AMC expense...", tone: "default" },
          { text: "Checking 85,000 against fund balance...", tone: "default" },
          { text: "Recording proposal with purpose...", tone: "default" },
          { text: "Publishing to all residents...", tone: "default" },
          { text: "[SUCCESS] Expense visible before payment.", tone: "success" },
        ],
      },
      {
        title: "Expenditure Tracker",
        subtitle: "The Spend Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Spend Record",
          description:
            "Records each payment against its vendor and purpose. Residents see exactly what the fund bought, replacing an annual summary with an itemized, timestamped expenditure trail.",
          platformFunction: "Audit Logs",
        },
        codeSnippet:
          "function payExpense(uint256 id) external onlyCommittee {\n    Expense storage e = expenses[id];\n    require(!e.paid, \"Paid\");\n    e.paid = true;\n    balance -= e.amount;\n    payable(vendorWallet[e.vendor]).transfer(e.amount);\n    emit ExpensePaid(e.vendor, e.amount, e.purpose);\n}",
        simAction: "Simulate Payment Execution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Executing approved lift AMC payment...", tone: "default" },
          { text: "Deducting 85,000 from fund...", tone: "default" },
          { text: "Recording payment to vendor...", tone: "default" },
          { text: "Logging purpose to audit trail...", tone: "default" },
          { text: "[SUCCESS] Expenditure recorded for all.", tone: "success" },
        ],
      },
      {
        title: "Resident Gateway",
        subtitle: "The Open Ledger",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Open Ledger",
          description:
            "A read interface returning collections, expenditure, and balance. It turns the fund into a shared resource every resident can inspect, dissolving the suspicion that surrounds committee-run accounts.",
          platformFunction: "Resident Access",
        },
        codeSnippet:
          "function viewFund() external view returns (uint256 currentBalance, uint256 totalCollected, uint256 totalSpent) {\n    return (balance, collectedSum, spentSum);\n}",
        simAction: "Simulate Resident View",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resident opening society fund ledger...", tone: "default" },
          { text: "Returning total collections...", tone: "default" },
          { text: "Returning itemized expenditure...", tone: "default" },
          { text: "Confirming current balance...", tone: "default" },
          { text: "[SUCCESS] Full fund transparency returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent community funds are a horizontal capability. Here is how different society actors put the shared ledger to work.",
    sectors: [
      { icon: Users, title: "Residents", description: "See contributions and spending in one live ledger, confirming their dues are used properly and turning the maintenance fund from a suspicion into a shared resource.", assetTypes: ["Contribution Records", "Expense Views", "Fund Balances"] },
      { icon: Handshake, title: "Management Committees", description: "Run the fund with full transparency and a tamper-evident trail, defending spending decisions with evidence instead of facing recurring accusations.", assetTypes: ["Expense Proposals", "Payment Logs", "Collection Records"] },
      { icon: FileCheck, title: "Auditors & Associations", description: "Verify collections against expenditure directly, auditing the fund from a live ledger rather than reconstructing it from committee registers.", assetTypes: ["Audit Trails", "Balance Proofs", "Defaulter Lists"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a society management app or capturing contributions from a resident wallet, Cerulea routes both into one transparent fund record.",
    tracks: [
      {
        title: "Track A: Society App Bridging",
        description:
          "For committees on society management apps. Contribution and expense data translate into anchored on-chain fund records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Society Mgmt App", sublabel: "Committee Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Entry Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Maintenance Fund Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Resident Wallet Capture",
        description:
          "For residents paying contributions from a wallet. The app signs contributions from a device wallet and routes them directly to the fund contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Resident App / Wallet", sublabel: "Household Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Contribution Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Community Fund Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a transparent maintenance fund with contribution tracking, escrowed pooling, and itemized expenditure from scratch requires specialised proptech engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Collection & Expense Rules",
      ruleCount: 31,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects proptech integration benchmarks. Wiring a society app, escrowing the fund, and building itemized expenditure tracking for an average society takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your collection and expense rules into pre-audited WebAssembly binaries and provisions the billing and escrow layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "rental-agreement-digitization-with-deposit-escrow",
    icon: Home,
    eyebrow: "Rental Escrow Layer",
    headline1: "Digitize the agreement.",
    headline2: "Release the deposit fairly.",
    heroDescription:
      "Run a digital rental agreement where the security deposit is held in escrow and released automatically based on agreed move-out conditions. Deductions follow pre-agreed terms verified at move-out, reducing the disputes that normally end a tenancy.",
    heroCta: "Deploy Rental Escrow",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a disputed deposit and paper agreement into an escrowed deposit released on verified conditions.",
    mechanics: [
      { title: "Digital Agreement", description: "The Provenance Notary anchors the rental agreement and its move-out conditions, so both parties rely on one sealed, tamper-evident set of terms." },
      { title: "Deposit Escrow", description: "The Escrow and Conditional Settlement module holds the security deposit, so neither landlord nor tenant controls the money during the tenancy." },
      { title: "Identity Verification", description: "The KYC and Identity Verification module binds both parties to verified identities, so the agreement and deposit are tied to real, accountable people." },
      { title: "Condition Checks", description: "At move-out the agreed conditions, such as dues cleared and no logged damage, are checked before the deposit releases." },
      { title: "Automated Release", description: "The deposit, minus any pre-agreed and verified deductions, releases to the tenant automatically, removing the standoff over refunds." },
      { title: "Dispute Trail", description: "A contested deduction is recorded against the agreement, so a disagreement is resolved on the sealed terms rather than conflicting claims." },
    ],
    lifecycleTitle: "The Rental Escrow Lifecycle",
    lifecycleSubtitle:
      "Follow one tenancy from digital agreement through deposit escrow to a fair move-out release.",
    lifecycleSteps: [
      {
        label: "Agreement Signing",
        description:
          "Landlord and tenant sign a digital agreement with its move-out conditions anchored, both bound to verified identities.",
        icon: ScrollText,
        logFilename: "cerulea_rental.log",
        logLines: [
          { text: "[SYS] Anchoring digital rental agreement...", time: "09:20:14", tone: "default" },
          { text: "[CMD] signAgreement { unit: \"FLT_9\", tenant: \"TEN_2201\", term: 11 }", time: "09:20:14", tone: "primary" },
          { text: "[AUTH] Verifying both party identities...", time: "09:20:15", tone: "secondary" },
          { text: "[OK] Agreement anchored at block 8201220.", time: "09:20:15", tone: "success" },
        ],
      },
      {
        label: "Deposit Escrow",
        description:
          "The tenant's security deposit is locked in escrow, controlled by neither party during the tenancy.",
        icon: Wallet,
        logFilename: "cerulea_rental.log",
        logLines: [
          { text: "[SYS] Locking security deposit...", time: "09:25:41", tone: "default" },
          { text: "[CMD] escrowDeposit(\"FLT_9\", amount: 90000)", time: "09:25:41", tone: "primary" },
          { text: "[SYS] Deposit held under agreement terms...", time: "09:25:42", tone: "default" },
          { text: "[OK] Deposit escrowed. Neither party holds it.", time: "09:25:42", tone: "success" },
        ],
      },
      {
        label: "Move-Out Check",
        description:
          "At move-out the agreed conditions are verified, such as dues cleared and any logged damage, to determine deductions.",
        icon: FileCheck,
        logFilename: "cerulea_rental.log",
        logLines: [
          { text: "[SYS] Running move-out condition checks...", time: "10:40:07", tone: "default" },
          { text: "[CMD] checkConditions(\"FLT_9\")", time: "10:40:07", tone: "primary" },
          { text: "[AUTH] Dues cleared, one agreed deduction logged...", time: "10:40:08", tone: "secondary" },
          { text: "[OK] Conditions verified. Deductions fixed.", time: "10:40:08", tone: "success" },
        ],
      },
      {
        label: "Deposit Release",
        description:
          "The deposit, minus verified deductions, releases to the tenant automatically, ending the refund standoff.",
        icon: Zap,
        logFilename: "cerulea_rental.log",
        logLines: [
          { text: "[SYS] Releasing deposit per conditions...", time: "10:40:20", tone: "default" },
          { text: "[CMD] releaseDeposit(\"FLT_9\", deduct: 5000)", time: "10:40:20", tone: "primary" },
          { text: "[SYS] Returning 85,000 to tenant...", time: "10:40:21", tone: "default" },
          { text: "[OK] Deposit released fairly. Dispute avoided.", time: "10:40:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes rental escrow into modular contracts. Each layer anchors the agreement, escrows the deposit, checks conditions, and releases funds without either party controlling the deposit unilaterally.",
    layers: [
      {
        title: "Agreement Registry",
        subtitle: "The Sealed Terms",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Terms",
          description:
            "Anchors the rental agreement and its move-out conditions, bound to verified identities. It gives both parties one tamper-evident set of terms rather than a paper copy each can dispute.",
          platformFunction: "Provenance Notary",
        },
        codeSnippet:
          "contract RentalAgreement {\n  struct Lease {\n    bytes32 tenant;\n    bytes32 landlord;\n    uint256 deposit;\n    bytes32 conditions;\n  }\n\n  mapping(bytes32 => Lease) public leases;\n\n  function sign(bytes32 unit, bytes32 tenant, bytes32 landlord, bytes32 cond) external {\n    leases[unit] = Lease(tenant, landlord, 0, cond);\n  }\n}",
        simAction: "Simulate Agreement Signing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying tenant and landlord identities...", tone: "default" },
          { text: "Anchoring move-out conditions...", tone: "default" },
          { text: "Sealing agreement terms...", tone: "default" },
          { text: "Writing lease to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Digital agreement anchored.", tone: "success" },
        ],
      },
      {
        title: "Deposit Vault",
        subtitle: "The Neutral Hold",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Neutral Hold",
          description:
            "Locks the security deposit in escrow for the tenancy. Neither landlord nor tenant can withdraw it unilaterally, removing the leverage that drives most end-of-tenancy deposit disputes.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function escrowDeposit(bytes32 unit) external payable {\n    Lease storage l = leases[unit];\n    require(msg.sender == addr(l.tenant), \"Only tenant\");\n    l.deposit = msg.value;\n    emit DepositEscrowed(unit, msg.value);\n}",
        simAction: "Simulate Deposit Escrow",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving deposit from tenant TEN_2201...", tone: "default" },
          { text: "Locking 90,000 under agreement...", tone: "default" },
          { text: "Confirming neither party can withdraw...", tone: "default" },
          { text: "Recording escrow on-chain...", tone: "default" },
          { text: "[SUCCESS] Deposit held neutrally.", tone: "success" },
        ],
      },
      {
        title: "Condition Checker",
        subtitle: "The Move-Out Gate",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Move-Out Gate",
          description:
            "Verifies the pre-agreed conditions at move-out, such as dues cleared and logged damage. It fixes deductions against the sealed terms rather than a landlord's discretionary claim.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function checkConditions(bytes32 unit) external view returns (bool clear, uint256 deduction) {\n    Lease memory l = leases[unit];\n    uint256 d = duesOwed[unit] + damageLogged[unit];\n    return (d == 0, d);\n}",
        simAction: "Simulate Move-Out Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading move-out conditions for FLT_9...", tone: "default" },
          { text: "Confirming dues cleared...", tone: "default" },
          { text: "Reading one agreed damage deduction...", tone: "default" },
          { text: "Fixing deduction at 5,000...", tone: "default" },
          { text: "[SUCCESS] Conditions verified against terms.", tone: "success" },
        ],
      },
      {
        title: "Release Engine",
        subtitle: "The Fair Payout",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fair Payout",
          description:
            "Releases the deposit minus verified deductions to the tenant automatically. It ends the standoff over refunds by settling against pre-agreed, checked conditions instead of negotiation.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function releaseDeposit(bytes32 unit, uint256 deduction) external {\n    Lease storage l = leases[unit];\n    uint256 refund = l.deposit - deduction;\n    payable(addr(l.tenant)).transfer(refund);\n    payable(addr(l.landlord)).transfer(deduction);\n    emit DepositReleased(unit, refund, deduction);\n}",
        simAction: "Simulate Deposit Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing refund after 5,000 deduction...", tone: "default" },
          { text: "Returning 85,000 to tenant...", tone: "default" },
          { text: "Transferring 5,000 to landlord...", tone: "default" },
          { text: "Closing agreement on-chain...", tone: "default" },
          { text: "[SUCCESS] Deposit released fairly.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Escrowed rental deposits are a horizontal capability. Here is how different rental actors put the digital agreement to work.",
    sectors: [
      { icon: Home, title: "Tenants", description: "Know the deposit is held neutrally and returned on pre-agreed conditions verified at move-out, replacing the fight over deductions with an automatic, fair release.", assetTypes: ["Digital Agreements", "Escrowed Deposits", "Fair Refunds"] },
      { icon: Building2, title: "Landlords", description: "Recover agreed, verified deductions automatically from escrow, settling move-out against sealed terms instead of chasing or withholding funds.", assetTypes: ["Signed Terms", "Verified Deductions", "Condition Checks"] },
      { icon: Handshake, title: "Brokers & Platforms", description: "Offer digital rental agreements with neutral deposit escrow as a service, reducing tenancy disputes and building trust between parties they introduce.", assetTypes: ["Agreement Templates", "Escrow Services", "Dispute Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a rental platform or capturing agreements from a tenant wallet, Cerulea routes both into one rental escrow record.",
    tracks: [
      {
        title: "Track A: Rental Platform Bridging",
        description:
          "For brokers on rental platforms. Agreement and deposit data translate into anchored on-chain escrow records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Rental Platform", sublabel: "Broker Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Agreement Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Rental Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Tenant Wallet Capture",
        description:
          "For tenants and landlords signing from a wallet. The app signs agreements and deposits from a device wallet and routes them directly to the escrow contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Party App / Wallet", sublabel: "Tenant & Landlord Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Agreement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Rental Deposit Record", icon: Home, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a digital rental agreement with neutral deposit escrow, condition checks, and automated release from scratch requires specialised proptech engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Agreement & Escrow Rules",
      ruleCount: 33,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects proptech integration benchmarks. Wiring a rental platform, escrowing deposits, and building move-out condition checks for an average service takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your agreement and escrow rules into pre-audited WebAssembly binaries and provisions the notary and settlement layers instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const realEstateProptechItems: ExtraCaseItem[] = [
  {
    label: "Smart contract-based milestone payments for contractors and subcontractors",
    href: "/solutions/use-case/smart-contract-based-milestone-payments-for-contractors-and-subcontrac",
    description: "Escrowed milestones released on certifier sign-off.",
    icon: Handshake,
    category: "ENTERPRISE",
    tags: ["Construction", "Payments"],
    industry: INDUSTRY,
  },
  {
    label: "Equipment rental utilization and billing reconciliation",
    href: "/solutions/use-case/equipment-rental-utilization-and-billing-reconciliation",
    description: "Sensor-verified machine hours billed automatically.",
    icon: Radio,
    category: "ENTERPRISE",
    tags: ["Equipment", "Billing"],
    industry: INDUSTRY,
  },
  {
    label: "Green building certification compliance tracking",
    href: "/solutions/use-case/green-building-certification-compliance-tracking",
    description: "Live evidence file for LEED and IGBC audits.",
    icon: Leaf,
    category: "ENTERPRISE",
    tags: ["Green Building", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Public infrastructure project fund disbursement and audit trail",
    href: "/solutions/use-case/public-infrastructure-project-fund-disbursement-and-audit-trail",
    description: "Escrowed tranches released against certified completion.",
    icon: Landmark,
    category: "GOVERNMENT",
    tags: ["Infrastructure", "Audit"],
    industry: INDUSTRY,
  },
  {
    label: "Land acquisition compensation disbursement to affected families",
    href: "/solutions/use-case/land-acquisition-compensation-disbursement-to-affected-families",
    description: "Transparent per-family calculation and confirmed payment.",
    icon: Home,
    category: "GOVERNMENT",
    tags: ["Land", "Compensation"],
    industry: INDUSTRY,
  },
  {
    label: "Multi-contractor joint venture cost-sharing and dispute resolution",
    href: "/solutions/use-case/multi-contractor-joint-venture-cost-sharing-and-dispute-resolution",
    description: "Shared cost ledger reconciled in real time.",
    icon: Users,
    category: "ENTERPRISE",
    tags: ["Joint Venture", "Cost Sharing"],
    industry: INDUSTRY,
  },
  {
    label: "Construction materials provenance and quality certification",
    href: "/solutions/use-case/construction-materials-provenance-and-quality-certification",
    description: "Batch provenance with payment-gated quality approval.",
    icon: Package,
    category: "ENTERPRISE",
    tags: ["Materials", "Provenance"],
    industry: INDUSTRY,
  },
  {
    label: "Homebuyer escrow and construction-linked payment release",
    href: "/solutions/use-case/homebuyer-escrow-and-construction-linked-payment-release",
    description: "Buyer funds released on verified construction milestones.",
    icon: Home,
    category: "ENTERPRISE",
    tags: ["Escrow", "RERA"],
    industry: INDUSTRY,
  },
  {
    label: "Subcontractor labour compliance and wage payment verification",
    href: "/solutions/use-case/subcontractor-labour-compliance-and-wage-payment-verification",
    description: "Attendance linked to wages for ESG audits.",
    icon: Users,
    category: "ENTERPRISE",
    tags: ["Labour", "ESG"],
    industry: INDUSTRY,
  },
  {
    label: "Defect liability and warranty claim tracking post-handover",
    href: "/solutions/use-case/defect-liability-and-warranty-claim-tracking-post-handover",
    description: "Sealed handover dates settle warranty coverage instantly.",
    icon: ShieldCheck,
    category: "SME",
    tags: ["Warranty", "Handover"],
    industry: INDUSTRY,
  },
  {
    label: "Building material recycling and demolition waste tracking",
    href: "/solutions/use-case/building-material-recycling-and-demolition-waste-tracking",
    description: "Verified custody from demolition site to facility.",
    icon: Recycling,
    category: "ENTERPRISE",
    tags: ["Recycling", "Waste"],
    industry: INDUSTRY,
  },
  {
    label: "Architect and contractor licensing verification for project approval",
    href: "/solutions/use-case/architect-and-contractor-licensing-verification-for-project-approval",
    description: "Instant license checks before plan approval.",
    icon: IdCard,
    category: "GOVERNMENT",
    tags: ["Licensing", "Approvals"],
    industry: INDUSTRY,
  },
  {
    label: "Commercial property tokenization and secondary trading",
    href: "/solutions/use-case/commercial-property-tokenization-and-secondary-trading",
    description: "Fractional commercial property with a secondary market.",
    icon: Building2,
    category: "ENTERPRISE",
    tags: ["Tokenization", "Trading"],
    industry: INDUSTRY,
  },
  {
    label: "Co-working space membership and utilization billing",
    href: "/solutions/use-case/co-working-space-membership-and-utilization-billing",
    description: "Verified desk and room usage billed automatically.",
    icon: Building2,
    category: "SME",
    tags: ["Co-working", "Billing"],
    industry: INDUSTRY,
  },
  {
    label: "Commercial lease renewal and rent escalation automation",
    href: "/solutions/use-case/commercial-lease-renewal-and-rent-escalation-automation",
    description: "Scheduled escalations and timely renewal notifications.",
    icon: ScrollText,
    category: "ENTERPRISE",
    tags: ["Leasing", "Automation"],
    industry: INDUSTRY,
  },
  {
    label: "REIT distribution and unit holder reporting transparency",
    href: "/solutions/use-case/reit-distribution-and-unit-holder-reporting-transparency",
    description: "Verifiable link from property income to payout.",
    icon: PieChart,
    category: "ENTERPRISE",
    tags: ["REIT", "Distributions"],
    industry: INDUSTRY,
  },
  {
    label: "Facility management vendor SLA compliance tracking",
    href: "/solutions/use-case/facility-management-vendor-sla-compliance-tracking",
    description: "Timestamped independent record of vendor SLA performance.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Facility Mgmt", "SLA"],
    industry: INDUSTRY,
  },
  {
    label: "Property title registration and transfer on Blockchain",
    href: "/solutions/use-case/property-title-registration-and-transfer-on-blockchain",
    description: "Immutable land registry with instant title verification.",
    icon: Landmark,
    category: "GOVERNMENT",
    tags: ["Land Registry", "Title"],
    industry: INDUSTRY,
  },
  {
    label: "Fractional residential property ownership via tokenization",
    href: "/solutions/use-case/fractional-residential-property-ownership-via-tokenization",
    description: "KYC-gated fractions with automated rental income.",
    icon: Home,
    category: "DAPPS",
    tags: ["Fractional", "Tokenization"],
    industry: INDUSTRY,
  },
  {
    label: "Society maintenance fund collection and expenditure transparency",
    href: "/solutions/use-case/society-maintenance-fund-collection-and-expenditure-transparency",
    description: "Shared ledger of contributions and society spending.",
    icon: PieChart,
    category: "SME",
    tags: ["Housing Society", "Funds"],
    industry: INDUSTRY,
  },
  {
    label: "Rental agreement digitization with deposit escrow",
    href: "/solutions/use-case/rental-agreement-digitization-with-deposit-escrow",
    description: "Escrowed deposit released on verified move-out conditions.",
    icon: Home,
    category: "SME",
    tags: ["Rental", "Escrow"],
    industry: INDUSTRY,
  },
]
