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

const INDUSTRY = "Government & Public Sector"

export const governmentPublicSectorCases: CaseEntry[] = [
  {
    slug: "government-procurement-and-public-tender-integrity",
    icon: Gavel,
    eyebrow: "Procurement Integrity Engine",
    headline1: "Seal every tender.",
    headline2: "Expose every cartel.",
    heroDescription:
      "Deploy a tamper-proof procurement network where tender documents are sealed on-chain and bid evaluation runs automatically against fixed criteria. Cerulea Studio assembles it from the Procurement Ledger, Document Signing, and Escrow and Conditional Settlement modules, turning a fraud-prone paper process into an immutable lifecycle audit trail.",
    heroCta: "Deploy Procurement Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a bid-rigging-prone paper tender into a sealed, automatically evaluated, fully auditable record.",
    mechanics: [
      { title: "Sealed Tender Vault", description: "Anchor tender documents on-chain at publication. The Document Signing module seals every clause by its digest, so any change to specifications after award breaks the hash and is instantly detectable." },
      { title: "Sealed-Bid Commitment", description: "Prevent bid leakage. Vendors commit an encrypted bid hash before the deadline and reveal after, so no bid can be seen, altered, or matched to a competitor while the window is open." },
      { title: "Automated Evaluation", description: "Score bids without human tampering. The Procurement Ledger runs the published evaluation formula on revealed bids, producing a deterministic ranking that no evaluator can quietly override." },
      { title: "Cartel Pattern Flagging", description: "Surface collusion from data. Repeated rotation of winners, identical markups, and shared vendor lineage across tenders are flagged automatically from on-chain bid history for investigator review." },
      { title: "Conditional Escrow Release", description: "Tie payment to delivery. Escrow and Conditional Settlement holds contract funds and releases each milestone only when acceptance is signed, blocking payment on fictitious completion." },
      { title: "Immutable Audit Trail", description: "Give the CVC one source of truth. Every publication, bid, evaluation, and award is timestamped and sealed, so a disputed tender is reconstructed in hours instead of a six-month investigation." },
    ],
    lifecycleTitle: "The Procurement Lifecycle",
    lifecycleSubtitle:
      "Follow a single tender from sealed publication through automated evaluation to conditional award and settlement.",
    lifecycleSteps: [
      {
        label: "Tender Publication",
        description:
          "The procuring authority publishes the tender. The contract seals the specification, evaluation formula, and deadline as an immutable baseline that cannot be quietly amended after bids open.",
        icon: ScrollText,
        logFilename: "cerulea_procure.log",
        logLines: [
          { text: "[SYS] Sealing tender specification bundle...", time: "10:05:12", tone: "default" },
          { text: "[CMD] publishTender { id: \"TND_2291\", dept: \"PWD\", criteria: \"L1_QCBS\" }", time: "10:05:12", tone: "primary" },
          { text: "[AUTH] Hashing 42 spec clauses and evaluation matrix...", time: "10:05:13", tone: "secondary" },
          { text: "[OK] Tender TND_2291 sealed at block 5512090.", time: "10:05:13", tone: "success" },
        ],
      },
      {
        label: "Sealed Bid Submission",
        description:
          "Vendors submit encrypted bid commitments before the deadline. No bid is readable while the window is open, so leakage and last-minute matching against rivals become impossible.",
        icon: Lock,
        logFilename: "cerulea_procure.log",
        logLines: [
          { text: "[SYS] Accepting sealed bid commitments for TND_2291...", time: "14:58:40", tone: "default" },
          { text: "[CMD] commitBid(vendor: \"V_0x77\", hash: 0x9a1f...c204)", time: "14:59:02", tone: "primary" },
          { text: "[SYS] 7 sealed bids recorded. Window closing.", time: "15:00:00", tone: "default" },
          { text: "[OK] Bid book locked. No further submissions accepted.", time: "15:00:01", tone: "success" },
        ],
      },
      {
        label: "Automated Evaluation",
        description:
          "After reveal, the Procurement Ledger applies the published formula to every bid. Scores and ranking are computed deterministically on-chain with no room for silent manual adjustment.",
        icon: FileCheck,
        logFilename: "cerulea_procure.log",
        logLines: [
          { text: "[SYS] Revealing bids and running evaluation matrix...", time: "11:20:30", tone: "default" },
          { text: "[CMD] evaluate(TND_2291, formula: \"QCBS_70_30\")", time: "11:20:30", tone: "primary" },
          { text: "[SYS] Cartel heuristic scan against 3yr bid history...", time: "11:20:31", tone: "secondary" },
          { text: "[OK] Ranking sealed. Vendor V_0x41 ranked L1.", time: "11:20:31", tone: "success" },
        ],
      },
      {
        label: "Award & Escrow",
        description:
          "The winning vendor is awarded and contract funds move into conditional escrow. Each milestone releases only against a signed acceptance, so payment can never run ahead of verified delivery.",
        icon: Handshake,
        logFilename: "cerulea_procure.log",
        logLines: [
          { text: "[SYS] Recording award and funding escrow...", time: "16:44:18", tone: "default" },
          { text: "[CMD] award(TND_2291, vendor: \"V_0x41\", value: 42000000)", time: "16:44:18", tone: "primary" },
          { text: "[AUTH] Locking milestone release conditions...", time: "16:44:19", tone: "secondary" },
          { text: "[OK] Contract active. Milestone 1 escrow funded.", time: "16:44:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes public procurement into modular contracts. Each layer seals, commits, evaluates, and settles a tender without any single official controlling the record.",
    layers: [
      {
        title: "Tender Registry",
        subtitle: "The Sealed Specification",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Specification",
          description:
            "The foundational layer. It seals the tender specification and evaluation formula by digest at publication, so any post-award alteration of scope or criteria breaks the hash and is provably detectable.",
          platformFunction: "Document Signing",
        },
        codeSnippet:
          "contract TenderRegistry {\n  struct Tender {\n    address authority;\n    bytes32 specHash;\n    bytes32 formulaHash;\n    uint256 deadline;\n    bool awarded;\n  }\n\n  mapping(bytes32 => Tender) public tenders;\n\n  function publish(bytes32 id, bytes32 spec, bytes32 formula, uint256 dl) external onlyAuthority {\n    tenders[id] = Tender(msg.sender, spec, formula, dl, false);\n  }\n}",
        simAction: "Simulate Tender Publication",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing 42 specification clauses...", tone: "default" },
          { text: "Sealing QCBS evaluation formula...", tone: "default" },
          { text: "Locking submission deadline...", tone: "default" },
          { text: "Writing tender baseline to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Tender TND_2291 sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Bid Commitment",
        subtitle: "The Reveal Protocol",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reveal Protocol",
          description:
            "Enforces sealed bidding. Vendors commit an encrypted bid hash before the deadline and reveal only after it passes, making bid leakage and mid-window collusion structurally impossible.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function commitBid(bytes32 tenderId, bytes32 sealedHash) external {\n    require(block.timestamp < tenders[tenderId].deadline, \"Closed\");\n    commitments[tenderId][msg.sender] = sealedHash;\n    emit BidCommitted(tenderId, msg.sender);\n}\n\nfunction revealBid(bytes32 tenderId, uint256 amount, bytes32 salt) external {\n    require(keccak256(abi.encode(amount, salt)) == commitments[tenderId][msg.sender], \"Mismatch\");\n    revealed[tenderId][msg.sender] = amount;\n}",
        simAction: "Simulate Sealed Bid",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Vendor V_0x77 submitting sealed hash...", tone: "default" },
          { text: "Verifying submission before deadline...", tone: "default" },
          { text: "Storing commitment, bid contents hidden...", tone: "default" },
          { text: "Reveal window opened after close...", tone: "default" },
          { text: "[SUCCESS] Sealed bid committed without leakage.", tone: "success" },
        ],
      },
      {
        title: "Evaluation Engine",
        subtitle: "The Deterministic Scorer",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Deterministic Scorer",
          description:
            "Removes evaluator discretion from scoring. It applies the sealed formula to revealed bids on-chain, producing a ranking that no official can silently override, with a cartel heuristic flagging suspicious patterns.",
          platformFunction: "Automated Evaluation",
        },
        codeSnippet:
          "function evaluate(bytes32 tenderId) external onlyAuthority returns (address winner) {\n    require(keccak256(formulaOf[tenderId]) == tenders[tenderId].formulaHash, \"Formula tampered\");\n    winner = _rankByQCBS(tenderId);\n    flagCollusion(tenderId);\n    emit Evaluated(tenderId, winner);\n}",
        simAction: "Simulate Evaluation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Revealing 7 sealed bids...", tone: "default" },
          { text: "Applying QCBS 70/30 formula on-chain...", tone: "default" },
          { text: "Scanning 3-year history for winner rotation...", tone: "default" },
          { text: "Ranking computed deterministically...", tone: "default" },
          { text: "[SUCCESS] L1 vendor selected, ranking sealed.", tone: "success" },
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
            "Ties public money to delivery. Escrow and Conditional Settlement holds contract value and releases each milestone only against a signed acceptance, blocking payment on fictitious or incomplete work.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function releaseMilestone(bytes32 contractId, uint8 m) external {\n    require(acceptance[contractId][m].signed, \"Not accepted\");\n    uint256 amt = milestones[contractId][m].value;\n    payable(vendorOf[contractId]).transfer(amt);\n    emit MilestonePaid(contractId, m, amt);\n}",
        simAction: "Simulate Milestone Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Vendor submitting milestone 1 completion...", tone: "default" },
          { text: "Awaiting authority acceptance signature...", tone: "default" },
          { text: "Acceptance verified on-chain...", tone: "default" },
          { text: "Releasing escrowed milestone payment...", tone: "default" },
          { text: "[SUCCESS] Payment released against signed delivery.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Sealed, auditable procurement is a horizontal capability. Here is how different public buyers put the tamper-proof tender ledger to work.",
    sectors: [
      { icon: Landmark, title: "Central Ministries & PSUs", description: "Run high-value capital tenders on sealed bidding with automated evaluation, so award decisions rest on a deterministic on-chain ranking that survives audit and vigilance review.", assetTypes: ["Capital Tenders", "Evaluation Records", "Award Orders"] },
      { icon: Building2, title: "State Departments", description: "Publish works and supply tenders with sealed specifications and conditional escrow, cutting post-award scope manipulation and inflated running bills across departments.", assetTypes: ["Works Tenders", "Milestone Escrows", "Acceptance Records"] },
      { icon: Shield, title: "Vigilance & Audit Bodies", description: "Query the immutable trail directly to reconstruct any tender, cross-check cartel flags, and resolve complaints against signed evidence instead of reconstructing paper files.", assetTypes: ["Audit Trails", "Cartel Flags", "Complaint Dossiers"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy e-procurement portal or onboarding vendors through wallets, Cerulea routes both into one sealed tender ledger.",
    tracks: [
      {
        title: "Track A: Legacy Portal Bridging",
        description:
          "For existing government e-procurement portals. Tender events and bids are translated into sealed on-chain commitments through the API gateway without replacing the front-end vendors already use.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "e-Procurement Portal", sublabel: "Department Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Bid Sealing & Hashing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Procurement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Vendor Submission",
        description:
          "For vendors submitting directly. A wallet-signed portal seals each bid commitment and routes it straight to the ledger, with reveal and evaluation executed on-chain.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Vendor Portal / Wallet", sublabel: "Bidder Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Bid Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Tender Record", icon: Gavel, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a sealed-bid procurement network with automated evaluation, cartel detection, and conditional escrow from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Tender & Evaluation Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects public-sector e-governance integration benchmarks. Building sealed-bid logic, wiring an evaluation engine, and hardening a conditional escrow layer for an average procurement network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your tender and evaluation rules into pre-audited WebAssembly binaries and provisions the shared procurement ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "inter-ministry-budget-allocation-and-utilization-tracking",
    icon: PieChart,
    eyebrow: "Fiscal Utilization Engine",
    headline1: "Track every rupee.",
    headline2: "As it is spent.",
    heroDescription:
      "Stand up a real-time view of how budget allocated to each ministry is being utilized against approved schemes, visible to the finance ministry as spending happens. The Escrow and Conditional Settlement, Procurement Ledger, and Compliance Attestations modules carry the core, replacing retrospective quarterly reports with a live utilization ledger.",
    heroCta: "Deploy Fiscal Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace quarterly reconciliation with an allocation and expenditure record that updates the moment funds move.",
    mechanics: [
      { title: "Allocation Anchoring", description: "Seal each budget line at sanction. Every ministry allocation and scheme head is anchored on-chain, creating a fixed baseline that expenditure is measured against in real time." },
      { title: "Scheme-Bound Release", description: "Bind spending to approved schemes. Escrow and Conditional Settlement releases funds only against a sanctioned scheme head, so money cannot drift silently between purposes." },
      { title: "Live Utilization View", description: "Give the finance ministry a running total. Utilization against allocation updates as each expenditure is recorded, replacing a quarterly snapshot with a continuous position." },
      { title: "Compliance Attestation", description: "Attach approval evidence to spend. The Compliance Attestations module binds each drawdown to its sanction order, so every release carries a verifiable authorization." },
      { title: "Under-Utilization Alerts", description: "Surface stalled schemes early. Allocations tracking well below plan are flagged automatically, letting the finance ministry reallocate before year-end lapses." },
      { title: "Cross-Ministry Rollup", description: "Aggregate without waiting. The ledger rolls individual releases into a live ministry-by-ministry and scheme-by-scheme view of the national budget position." },
    ],
    lifecycleTitle: "The Utilization Lifecycle",
    lifecycleSubtitle:
      "Follow a single scheme allocation from sanction through scheme-bound release to a live utilization position at the finance ministry.",
    lifecycleSteps: [
      {
        label: "Allocation Sanction",
        description:
          "The finance ministry anchors an allocation to a ministry and scheme. The contract fixes the sanctioned amount as the immutable ceiling against which all later spending is measured.",
        icon: Landmark,
        logFilename: "cerulea_fiscal.log",
        logLines: [
          { text: "[SYS] Anchoring budget allocation line...", time: "09:10:04", tone: "default" },
          { text: "[CMD] allocate { ministry: \"MoRD\", scheme: \"PMAY_G\", amount: 8400000000 }", time: "09:10:04", tone: "primary" },
          { text: "[AUTH] Verifying finance sanction order digest...", time: "09:10:05", tone: "secondary" },
          { text: "[OK] Allocation anchored at block 5610233.", time: "09:10:05", tone: "success" },
        ],
      },
      {
        label: "Scheme-Bound Release",
        description:
          "The ministry draws funds against the sanctioned scheme. Escrow verifies the drawdown maps to an approved head before releasing, preventing silent diversion between purposes.",
        icon: Wallet,
        logFilename: "cerulea_fiscal.log",
        logLines: [
          { text: "[SYS] Drawdown request against PMAY_G head...", time: "12:32:18", tone: "default" },
          { text: "[CMD] release(scheme: \"PMAY_G\", amount: 220000000)", time: "12:32:18", tone: "primary" },
          { text: "[SYS] Checking release against sanctioned ceiling...", time: "12:32:19", tone: "default" },
          { text: "[OK] Release approved. Ceiling not breached.", time: "12:32:19", tone: "success" },
        ],
      },
      {
        label: "Expenditure Record",
        description:
          "Each expenditure is recorded against the scheme with its compliance attestation. The utilization total updates immediately rather than at the next quarterly compilation.",
        icon: FileCheck,
        logFilename: "cerulea_fiscal.log",
        logLines: [
          { text: "[SYS] Recording expenditure with attestation...", time: "15:04:41", tone: "default" },
          { text: "[CMD] recordSpend(scheme: \"PMAY_G\", voucher: \"V_88421\")", time: "15:04:41", tone: "primary" },
          { text: "[AUTH] Binding sanction order to expenditure...", time: "15:04:42", tone: "secondary" },
          { text: "[OK] Utilization updated to 61% of allocation.", time: "15:04:42", tone: "success" },
        ],
      },
      {
        label: "Live Rollup",
        description:
          "The finance ministry queries the ledger for a real-time utilization position across all ministries and schemes, with under-utilized allocations flagged for reallocation.",
        icon: PieChart,
        logFilename: "cerulea_fiscal.log",
        logLines: [
          { text: "[SYS] Assembling cross-ministry utilization rollup...", time: "18:00:10", tone: "default" },
          { text: "[CMD] rollup(fy: \"2026\")", time: "18:00:10", tone: "primary" },
          { text: "[SYS] Flagging 4 schemes below 30% at Q3...", time: "18:00:11", tone: "secondary" },
          { text: "[OK] Live position returned across 51 ministries.", time: "18:00:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes budget tracking into modular contracts. Each layer anchors, binds, attests, and aggregates spending without waiting for a quarterly report cycle.",
    layers: [
      {
        title: "Allocation Registry",
        subtitle: "The Sanctioned Ceiling",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sanctioned Ceiling",
          description:
            "The foundational layer. It anchors each ministry and scheme allocation as an immutable ceiling, so every later drawdown is measured against a fixed sanctioned baseline rather than a mutable spreadsheet.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AllocationRegistry {\n  struct Line {\n    bytes32 ministry;\n    bytes32 scheme;\n    uint256 sanctioned;\n    uint256 utilized;\n  }\n\n  mapping(bytes32 => Line) public lines;\n\n  function allocate(bytes32 id, bytes32 ministry, bytes32 scheme, uint256 amount) external onlyFinance {\n    lines[id] = Line(ministry, scheme, amount, 0);\n  }\n}",
        simAction: "Simulate Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading finance sanction order...", tone: "default" },
          { text: "Hashing scheme head PMAY_G...", tone: "default" },
          { text: "Fixing sanctioned ceiling on-chain...", tone: "default" },
          { text: "Writing allocation to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Allocation anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Release Gate",
        subtitle: "The Scheme Binding",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Scheme Binding",
          description:
            "Stops fund diversion. A drawdown cannot execute unless it maps to an approved scheme head and stays within the sanctioned ceiling, turning every release into a verifiable, bounded action.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function release(bytes32 lineId, uint256 amount) external onlyMinistry {\n    Line storage l = lines[lineId];\n    require(l.utilized + amount <= l.sanctioned, \"Ceiling breach\");\n    l.utilized += amount;\n    emit Released(lineId, amount, l.utilized);\n}",
        simAction: "Simulate Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ministry requesting drawdown on PMAY_G...", tone: "default" },
          { text: "Verifying scheme head is approved...", tone: "default" },
          { text: "Checking release against sanctioned ceiling...", tone: "default" },
          { text: "Incrementing utilized total...", tone: "default" },
          { text: "[SUCCESS] Release bound to approved scheme.", tone: "success" },
        ],
      },
      {
        title: "Attestation Notary",
        subtitle: "The Authorization Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authorization Seal",
          description:
            "Binds every expenditure to its sanction. The Compliance Attestations module anchors the approval order digest against each spend, so no drawdown exists without a verifiable authorization behind it.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function attestSpend(bytes32 lineId, bytes32 voucherHash, bytes32 sanctionHash) external onlyAuditor {\n    spends[lineId].push(Spend(voucherHash, sanctionHash, block.timestamp));\n    emit SpendAttested(lineId, voucherHash);\n}",
        simAction: "Simulate Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting expenditure voucher V_88421...", tone: "default" },
          { text: "Hashing sanction order...", tone: "default" },
          { text: "Binding authorization to expenditure...", tone: "default" },
          { text: "Recording attestation on-chain...", tone: "default" },
          { text: "[SUCCESS] Expenditure attested and sealed.", tone: "success" },
        ],
      },
      {
        title: "Rollup Engine",
        subtitle: "The Live Position",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Position",
          description:
            "A read-only aggregator that assembles utilization across every ministry and scheme on demand. It replaces the retrospective quarterly snapshot with a continuous fiscal position the finance ministry can query any time.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function utilization(bytes32 ministry) external view returns (uint256 sanctioned, uint256 utilized) {\n    for (uint i; i < schemesOf[ministry].length; i++) {\n        Line memory l = lines[schemesOf[ministry][i]];\n        sanctioned += l.sanctioned;\n        utilized += l.utilized;\n    }\n}",
        simAction: "Simulate Rollup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Finance ministry querying live position...", tone: "default" },
          { text: "Summing releases across 51 ministries...", tone: "default" },
          { text: "Flagging schemes below 30% at Q3...", tone: "default" },
          { text: "Assembling utilization rollup...", tone: "default" },
          { text: "[SUCCESS] Real-time fiscal position returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Real-time utilization tracking is a horizontal capability. Here is how different fiscal actors put the live allocation ledger to work.",
    sectors: [
      { icon: Landmark, title: "Finance Ministry", description: "Watch utilization across every ministry and scheme in real time, reallocating lagging funds before they lapse instead of discovering under-spend in a quarterly report.", assetTypes: ["Allocation Lines", "Utilization Rollups", "Reallocation Orders"] },
      { icon: Building2, title: "Line Ministries", description: "Draw sanctioned funds against approved scheme heads with an on-chain trail, so spending stays within ceiling and every release carries its authorization.", assetTypes: ["Scheme Drawdowns", "Sanction Orders", "Expenditure Records"] },
      { icon: Shield, title: "Comptroller & Audit", description: "Audit expenditure against sanction continuously, catching ceiling breaches and unauthorized diversion from the ledger rather than reconstructing them after the year closes.", assetTypes: ["Audit Trails", "Ceiling Flags", "Attestation Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy treasury system or capturing expenditure from ministry finance portals, Cerulea routes both into one live utilization ledger.",
    tracks: [
      {
        title: "Track A: Treasury System Bridging",
        description:
          "For central and state treasury platforms. Sanction and expenditure events are translated into anchored on-chain allocation and release records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Treasury System", sublabel: "PFMS / State IFMS", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Fiscal Utilization Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Ministry Portal Capture",
        description:
          "For ministry finance cells. A signed portal records each drawdown and expenditure from a departmental wallet and routes it directly to the ledger for live rollup.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Ministry Finance Portal", sublabel: "Drawing & Disbursing Officers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Release Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Live Allocation Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a real-time fiscal utilization network with scheme-bound release, attestation, and cross-ministry rollup from scratch requires specialised engineers and long treasury integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Allocation & Release Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects public financial management integration benchmarks. Wiring treasury systems, building scheme-bound release logic, and shipping a live rollup view for an average fiscal network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your allocation and release rules into pre-audited WebAssembly binaries and provisions the shared utilization ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "public-grievance-redressal-with-sla-compliance-tracking",
    icon: Handshake,
    eyebrow: "Grievance Accountability Engine",
    headline1: "Timestamp every complaint.",
    headline2: "Hold every department.",
    heroDescription:
      "Deploy a grievance tracking system where citizens see their complaint status and departments are measured against verified resolution time targets. Civil Registry, Notifications, and Compliance Attestations anchor the core, timestamping every step so oversight bodies get real data on which departments meet their service level agreements.",
    heroCta: "Deploy Grievance Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque complaint box into a timestamped, SLA-measured record that citizens and oversight bodies can both trust.",
    mechanics: [
      { title: "Timestamped Intake", description: "Anchor each grievance at filing. The contract records the complaint, department, and category with an immutable timestamp that starts the SLA clock the moment it is lodged." },
      { title: "Verified Status Trail", description: "Give citizens a real view. Every action on a grievance is written to the ledger, so the status a citizen sees is the verified on-chain state, not a manually updated page." },
      { title: "SLA Clock", description: "Measure against commitments. Resolution time targets are encoded per category, and the contract tracks each grievance against its deadline automatically." },
      { title: "Escalation Trigger", description: "Escalate on breach. When a grievance crosses its SLA threshold, Notifications fire an automatic escalation to the supervising officer without waiting for a manual review." },
      { title: "Department Scorecard", description: "Rank on real data. Compliance Attestations roll resolved and breached grievances into a verifiable scorecard per department for oversight bodies." },
      { title: "Citizen Notifications", description: "Keep the citizen informed. Each status change pushes a verified update, so the complainant always knows where their grievance stands." },
    ],
    lifecycleTitle: "The Redressal Lifecycle",
    lifecycleSubtitle:
      "Follow a single grievance from timestamped intake through SLA tracking and escalation to verified resolution.",
    lifecycleSteps: [
      {
        label: "Grievance Intake",
        description:
          "A citizen files a grievance. The contract anchors the complaint, department, and category, starting an immutable SLA clock at the moment of filing.",
        icon: ScrollText,
        logFilename: "cerulea_grievance.log",
        logLines: [
          { text: "[SYS] Registering citizen grievance...", time: "08:40:11", tone: "default" },
          { text: "[CMD] fileGrievance { dept: \"MUNICIPAL\", cat: \"WATER\", id: \"GRV_5521\" }", time: "08:40:11", tone: "primary" },
          { text: "[AUTH] Verifying citizen identity credential...", time: "08:40:12", tone: "secondary" },
          { text: "[OK] Grievance anchored. SLA clock started (7d).", time: "08:40:12", tone: "success" },
        ],
      },
      {
        label: "Assignment & Action",
        description:
          "The grievance is routed to a handling officer, who records actions against it. Each step is timestamped, building a verified trail the citizen can follow.",
        icon: Handshake,
        logFilename: "cerulea_grievance.log",
        logLines: [
          { text: "[SYS] Routing GRV_5521 to handling officer...", time: "11:15:30", tone: "default" },
          { text: "[CMD] recordAction(GRV_5521, \"SITE_INSPECTION_DONE\")", time: "11:15:31", tone: "primary" },
          { text: "[SYS] Action timestamped on verified trail.", time: "11:15:31", tone: "default" },
          { text: "[OK] Status updated. Citizen notified.", time: "11:15:32", tone: "success" },
        ],
      },
      {
        label: "SLA Escalation",
        description:
          "If the grievance nears or crosses its resolution deadline, the contract fires an automatic escalation to the supervising officer, closing the accountability gap.",
        icon: Zap,
        logFilename: "cerulea_grievance.log",
        logLines: [
          { text: "[SYS] SLA monitor sweeping open grievances...", time: "09:00:00", tone: "default" },
          { text: "[CMD] checkSLA(GRV_5521)", time: "09:00:00", tone: "primary" },
          { text: "[SYS] Deadline breached by 6h. Escalating.", time: "09:00:01", tone: "error" },
          { text: "[OK] Escalation notice sent to supervisor.", time: "09:00:01", tone: "success" },
        ],
      },
      {
        label: "Verified Resolution",
        description:
          "The officer marks the grievance resolved with a closing attestation. The resolution and its timing feed the department scorecard for oversight review.",
        icon: FileCheck,
        logFilename: "cerulea_grievance.log",
        logLines: [
          { text: "[SYS] Recording resolution for GRV_5521...", time: "16:22:47", tone: "default" },
          { text: "[CMD] resolve(GRV_5521, outcome: \"RECTIFIED\")", time: "16:22:47", tone: "primary" },
          { text: "[AUTH] Sealing closure attestation...", time: "16:22:48", tone: "secondary" },
          { text: "[OK] Resolved in 9d. Scorecard updated.", time: "16:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes grievance redressal into modular contracts. Each layer intakes, tracks, escalates, and scores a complaint without any department controlling its own record.",
    layers: [
      {
        title: "Grievance Registry",
        subtitle: "The Timestamped Intake",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Timestamped Intake",
          description:
            "The foundational layer. It anchors each grievance with its department, category, and filing time, starting an immutable SLA clock that no department can quietly reset.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract GrievanceRegistry {\n  struct Grievance {\n    address citizen;\n    bytes32 dept;\n    bytes32 category;\n    uint256 filedAt;\n    uint256 deadline;\n    bool resolved;\n  }\n\n  mapping(bytes32 => Grievance) public grievances;\n\n  function file(bytes32 id, bytes32 dept, bytes32 cat, uint256 slaHours) external {\n    grievances[id] = Grievance(msg.sender, dept, cat, block.timestamp, block.timestamp + slaHours * 3600, false);\n  }\n}",
        simAction: "Simulate Grievance Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading citizen identity credential...", tone: "default" },
          { text: "Categorizing grievance as WATER...", tone: "default" },
          { text: "Starting 7-day SLA clock...", tone: "default" },
          { text: "Writing grievance to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Grievance GRV_5521 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Action Trail",
        subtitle: "The Verified Status",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Status",
          description:
            "Removes status ambiguity. Every handling action is appended to the grievance on-chain, so the status a citizen reads is the verified ledger state rather than a page an official can edit at will.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function recordAction(bytes32 id, bytes32 action) external onlyOfficer {\n    require(!grievances[id].resolved, \"Closed\");\n    actions[id].push(Action(action, msg.sender, block.timestamp));\n    emit ActionRecorded(id, action, block.timestamp);\n}",
        simAction: "Simulate Action",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Officer recording site inspection...", tone: "default" },
          { text: "Verifying grievance still open...", tone: "default" },
          { text: "Appending action to verified trail...", tone: "default" },
          { text: "Pushing status update to citizen...", tone: "default" },
          { text: "[SUCCESS] Action timestamped on-chain.", tone: "success" },
        ],
      },
      {
        title: "SLA Monitor",
        subtitle: "The Escalation Trigger",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Escalation Trigger",
          description:
            "Enforces accountability automatically. It compares each open grievance against its deadline and fires an escalation through Notifications when a breach occurs, without depending on a manual review cycle.",
          platformFunction: "Automated Escalation",
        },
        codeSnippet:
          "function checkSLA(bytes32 id) external {\n    Grievance storage g = grievances[id];\n    if (!g.resolved && block.timestamp > g.deadline) {\n        emit SLABreached(id, g.dept, block.timestamp - g.deadline);\n        _escalate(id, g.dept);\n    }\n}",
        simAction: "Simulate SLA Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Sweeping open grievances for deadlines...", tone: "default" },
          { text: "Comparing GRV_5521 against SLA clock...", tone: "default" },
          { text: "Deadline breached by 6 hours...", tone: "default" },
          { text: "Firing escalation to supervisor...", tone: "default" },
          { text: "[SUCCESS] Breach escalated automatically.", tone: "success" },
        ],
      },
      {
        title: "Scorecard Engine",
        subtitle: "The Department Ledger",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Department Ledger",
          description:
            "A read-only aggregator that rolls resolved and breached grievances into a verifiable performance scorecard per department, giving oversight bodies real SLA compliance data instead of self-reported summaries.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function scorecard(bytes32 dept) external view returns (uint256 resolved, uint256 breached) {\n    for (uint i; i < deptGrievances[dept].length; i++) {\n        Grievance memory g = grievances[deptGrievances[dept][i]];\n        if (g.resolved) resolved++;\n        if (g.deadline < block.timestamp && !g.resolved) breached++;\n    }\n}",
        simAction: "Simulate Scorecard",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Oversight body querying department...", tone: "default" },
          { text: "Counting resolved grievances...", tone: "default" },
          { text: "Counting SLA breaches...", tone: "default" },
          { text: "Assembling verifiable scorecard...", tone: "default" },
          { text: "[SUCCESS] Real SLA compliance data returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "SLA-tracked grievance redressal is a horizontal capability. Here is how different public bodies put the timestamped complaint ledger to work.",
    sectors: [
      { icon: Building2, title: "Municipal Corporations", description: "Track citizen complaints on water, sanitation, and roads against resolution deadlines, escalating breaches automatically and showing residents a verified status for every grievance.", assetTypes: ["Civic Grievances", "Escalation Notices", "Resolution Records"] },
      { icon: Landmark, title: "State & Central Departments", description: "Run departmental grievance portals on a shared ledger, so citizens see one verified status and departments are measured on real resolution performance.", assetTypes: ["Department Grievances", "SLA Clocks", "Status Trails"] },
      { icon: Shield, title: "Oversight & Ombudsman", description: "Read verified scorecards to identify which departments consistently miss SLAs, replacing self-reported compliance with data drawn from the ledger.", assetTypes: ["Department Scorecards", "Breach Flags", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy CPGRAMS-style portal or capturing complaints from a citizen mobile app, Cerulea routes both into one timestamped grievance ledger.",
    tracks: [
      {
        title: "Track A: Legacy Portal Bridging",
        description:
          "For existing grievance portals. Complaint and action events are translated into timestamped on-chain records through the API gateway without changing the citizen-facing portal.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Grievance Portal", sublabel: "Department Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Grievance SLA Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Citizen App Capture",
        description:
          "For citizens filing on mobile. A progressive web app signs each grievance and status query from a citizen wallet and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Citizen PWA / Wallet", sublabel: "Complainant Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Status Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Grievance Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a grievance network with timestamped intake, SLA escalation, and verifiable department scorecards from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Grievance & SLA Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects e-governance grievance platform benchmarks. Building timestamped intake, wiring an SLA escalation engine, and shipping verifiable department scorecards for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your grievance and SLA rules into pre-audited WebAssembly binaries and provisions the shared grievance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "rti-right-to-information-request-and-response-audit-trail",
    icon: FileCheck,
    eyebrow: "Statutory Response Engine",
    headline1: "Timestamp every request.",
    headline2: "Prove every deadline.",
    heroDescription:
      "Run a verifiable record of every RTI request and the timeliness of its response, supporting compliance with statutory response deadlines. Cerulea Studio assembles it from Civil Registry, Audit Logs, and Notifications, giving the Information Commission a monitorable trail and giving applicants proof their request was handled on time.",
    heroCta: "Deploy RTI Audit Trails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn thousands of scattered RTI files into a timestamped, deadline-measured record the Information Commission can audit.",
    mechanics: [
      { title: "Request Anchoring", description: "Seal each RTI at receipt. The contract records the applicant, public authority, and subject with an immutable timestamp that starts the statutory response clock." },
      { title: "Statutory Clock", description: "Encode the deadline in code. The fixed response window is bound to each request, so the days remaining are computed on-chain rather than tracked in a register." },
      { title: "Response Sealing", description: "Bind the reply to the request. Audit Logs anchor the response and its date against the original RTI, creating tamper-evident proof of when the authority answered." },
      { title: "Transfer Tracking", description: "Follow inter-authority transfers. When a request is moved to another public authority, the handoff is recorded so the clock and accountability stay attached to the right office." },
      { title: "Deadline Alerts", description: "Warn before breach. Notifications fire to the Public Information Officer as a statutory deadline approaches, cutting inadvertent late responses." },
      { title: "Commission Oversight", description: "Give the regulator live data. The Information Commission queries the ledger to see which authorities meet deadlines and which repeatedly breach them." },
    ],
    lifecycleTitle: "The RTI Lifecycle",
    lifecycleSubtitle:
      "Follow a single RTI request from timestamped receipt through the statutory clock to a sealed, on-time response.",
    lifecycleSteps: [
      {
        label: "Request Receipt",
        description:
          "An applicant files an RTI request. The contract anchors the applicant, public authority, and subject, starting the statutory response clock at receipt.",
        icon: ScrollText,
        logFilename: "cerulea_rti.log",
        logLines: [
          { text: "[SYS] Registering RTI request...", time: "10:02:11", tone: "default" },
          { text: "[CMD] fileRTI { authority: \"MIN_RAIL\", id: \"RTI_7742\", days: 30 }", time: "10:02:11", tone: "primary" },
          { text: "[AUTH] Verifying applicant identity and fee...", time: "10:02:12", tone: "secondary" },
          { text: "[OK] Request anchored. 30-day clock started.", time: "10:02:12", tone: "success" },
        ],
      },
      {
        label: "PIO Assignment",
        description:
          "The request is routed to the Public Information Officer. If it belongs to another authority, the transfer is recorded so the deadline follows the request.",
        icon: Handshake,
        logFilename: "cerulea_rti.log",
        logLines: [
          { text: "[SYS] Routing RTI_7742 to PIO...", time: "11:44:30", tone: "default" },
          { text: "[CMD] assignPIO(RTI_7742, officer: \"PIO_0x22\")", time: "11:44:31", tone: "primary" },
          { text: "[SYS] Jurisdiction confirmed. No transfer needed.", time: "11:44:31", tone: "default" },
          { text: "[OK] Assigned. Clock unchanged, 29d remaining.", time: "11:44:32", tone: "success" },
        ],
      },
      {
        label: "Deadline Alert",
        description:
          "As the statutory window nears its end, the contract fires a reminder to the PIO, reducing the chance of an inadvertent late or missed response.",
        icon: Zap,
        logFilename: "cerulea_rti.log",
        logLines: [
          { text: "[SYS] Deadline monitor sweeping open RTIs...", time: "09:00:00", tone: "default" },
          { text: "[CMD] checkDeadline(RTI_7742)", time: "09:00:00", tone: "primary" },
          { text: "[SYS] 3 days remaining. Alerting PIO.", time: "09:00:01", tone: "secondary" },
          { text: "[OK] Reminder dispatched to PIO_0x22.", time: "09:00:01", tone: "success" },
        ],
      },
      {
        label: "Response Sealed",
        description:
          "The PIO records the response. Audit Logs bind the reply and its date to the original request, creating tamper-evident proof of on-time compliance.",
        icon: FileCheck,
        logFilename: "cerulea_rti.log",
        logLines: [
          { text: "[SYS] Sealing response for RTI_7742...", time: "15:30:47", tone: "default" },
          { text: "[CMD] respond(RTI_7742, docHash: 0x71ab...9f)", time: "15:30:47", tone: "primary" },
          { text: "[AUTH] Binding response date to request...", time: "15:30:48", tone: "secondary" },
          { text: "[OK] Responded in 24d. Within statutory limit.", time: "15:30:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes RTI compliance into modular contracts. Each layer anchors, times, seals, and exposes a request without any authority controlling proof of its own timeliness.",
    layers: [
      {
        title: "Request Registry",
        subtitle: "The Statutory Anchor",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Statutory Anchor",
          description:
            "The foundational layer. It anchors each RTI request with its authority and receipt time, starting a fixed statutory clock that no Public Information Officer can quietly backdate.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RTIRegistry {\n  struct Request {\n    address applicant;\n    bytes32 authority;\n    uint256 filedAt;\n    uint256 deadline;\n    bool answered;\n  }\n\n  mapping(bytes32 => Request) public requests;\n\n  function file(bytes32 id, bytes32 authority, uint256 statutoryDays) external {\n    requests[id] = Request(msg.sender, authority, block.timestamp, block.timestamp + statutoryDays * 1 days, false);\n  }\n}",
        simAction: "Simulate Request Receipt",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying applicant identity and fee...", tone: "default" },
          { text: "Recording public authority MIN_RAIL...", tone: "default" },
          { text: "Starting 30-day statutory clock...", tone: "default" },
          { text: "Writing request to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] RTI_7742 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Transfer Router",
        subtitle: "The Jurisdiction Handoff",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Jurisdiction Handoff",
          description:
            "Keeps accountability attached during transfers. When a request moves to another public authority, the handoff is recorded on-chain so the statutory clock and responsibility travel with the request.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function transfer(bytes32 id, bytes32 toAuthority) external onlyPIO {\n    require(!requests[id].answered, \"Closed\");\n    requests[id].authority = toAuthority;\n    transfers[id].push(Transfer(toAuthority, block.timestamp));\n    emit Transferred(id, toAuthority);\n}",
        simAction: "Simulate Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "PIO reviewing jurisdiction of RTI_7742...", tone: "default" },
          { text: "Recording handoff to correct authority...", tone: "default" },
          { text: "Keeping statutory clock attached...", tone: "default" },
          { text: "Logging transfer on verified trail...", tone: "default" },
          { text: "[SUCCESS] Transfer recorded with clock intact.", tone: "success" },
        ],
      },
      {
        title: "Response Notary",
        subtitle: "The Timeliness Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Timeliness Seal",
          description:
            "Proves when an authority answered. Audit Logs bind the response digest and its date to the original request, so compliance with the statutory deadline is a verifiable on-chain fact, not a claim.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function respond(bytes32 id, bytes32 responseHash) external onlyPIO {\n    Request storage r = requests[id];\n    r.answered = true;\n    responses[id] = Response(responseHash, block.timestamp, block.timestamp <= r.deadline);\n    emit Responded(id, block.timestamp <= r.deadline);\n}",
        simAction: "Simulate Response",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting response document...", tone: "default" },
          { text: "Computing digest of reply...", tone: "default" },
          { text: "Comparing response date to deadline...", tone: "default" },
          { text: "Binding sealed response to request...", tone: "default" },
          { text: "[SUCCESS] On-time response sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Commission View",
        subtitle: "The Compliance Window",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Window",
          description:
            "A read-only gateway that lets the Information Commission see on-time and breached responses per authority. It replaces manual audits of thousands of files with a live query over verifiable timeliness data.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function compliance(bytes32 authority) external view returns (uint256 onTime, uint256 breached) {\n    for (uint i; i < byAuthority[authority].length; i++) {\n        Response memory r = responses[byAuthority[authority][i]];\n        r.withinLimit ? onTime++ : breached++;\n    }\n}",
        simAction: "Simulate Commission Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Information Commission querying authority...", tone: "default" },
          { text: "Counting on-time responses...", tone: "default" },
          { text: "Counting statutory breaches...", tone: "default" },
          { text: "Assembling compliance summary...", tone: "default" },
          { text: "[SUCCESS] Verifiable RTI compliance returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable RTI compliance is a horizontal capability. Here is how different public actors put the timestamped request ledger to work.",
    sectors: [
      { icon: Landmark, title: "Public Authorities", description: "Run RTI handling on a shared ledger where deadlines are tracked in code, cutting inadvertent breaches and giving each authority provable evidence of on-time responses.", assetTypes: ["RTI Requests", "Sealed Responses", "Transfer Records"] },
      { icon: Users, title: "Applicants & Activists", description: "Confirm a request was received and answered within the statutory window from a verifiable record, rather than relying on an authority's own account of timing.", assetTypes: ["Filing Receipts", "Response Proofs", "Deadline Records"] },
      { icon: Shield, title: "Information Commission", description: "Monitor timeliness across thousands of requests from live data, focusing enforcement on authorities that repeatedly breach instead of auditing files one by one.", assetTypes: ["Compliance Summaries", "Breach Flags", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy RTI portal or capturing requests from a citizen app, Cerulea routes both into one timestamped statutory-compliance ledger.",
    tracks: [
      {
        title: "Track A: RTI Portal Bridging",
        description:
          "For existing online RTI portals. Request and response events are translated into timestamped on-chain records through the API gateway without changing the applicant-facing portal.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "RTI Online Portal", sublabel: "Authority Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "RTI Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Citizen App Capture",
        description:
          "For applicants filing on mobile. A signed app anchors each request and status check from a citizen wallet and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Citizen App / Wallet", sublabel: "Applicant Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Timeliness Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified RTI Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an RTI network with statutory clocks, transfer tracking, and Commission-grade compliance views from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required RTI & Deadline Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects transparency-portal integration benchmarks. Building statutory clocks, wiring transfer tracking, and shipping a Commission compliance view for an average RTI network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your RTI and deadline rules into pre-audited WebAssembly binaries and provisions the shared compliance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "national-skill-registry-linking-training-to-employment-outcomes",
    icon: GraduationCap,
    eyebrow: "Workforce Outcomes Engine",
    headline1: "Verify every credential.",
    headline2: "Track every outcome.",
    heroDescription:
      "Build a national registry linking each citizen's verified skill credentials to their employment history, supporting policy decisions on workforce development. The DID and VC Ledger, Civil Registry, and Compliance Attestations modules carry the core, turning disconnected training and employment data into evidence of which programs actually deliver jobs.",
    heroCta: "Deploy Skill Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Link verified training credentials to verified employment so policymakers can see which programs deliver outcomes.",
    mechanics: [
      { title: "Verifiable Credentials", description: "Issue skills as VCs. The DID and VC Ledger mints each completed course as a verifiable credential bound to the trainee's decentralized identity, tamper-proof and instantly checkable." },
      { title: "Employment Linkage", description: "Connect training to jobs. Verified employment records are linked to a citizen's skill credentials, so a training outcome can be traced to an actual placement." },
      { title: "Program Attribution", description: "Attribute results to programs. Compliance Attestations tie each credential to its training program and provider, letting analysts measure placement rates per scheme." },
      { title: "Consent-Gated Sharing", description: "Keep the citizen in control. Employers and agencies read a candidate's credentials only with the citizen's on-chain consent, protecting privacy while enabling verification." },
      { title: "Provider Accountability", description: "Rank training providers. Providers whose graduates rarely find work surface in the data, letting the ministry redirect funding toward effective programs." },
      { title: "Policy Analytics", description: "Inform workforce policy. Aggregated, verified outcome data replaces self-reported placement claims, giving policymakers a real basis for program decisions." },
    ],
    lifecycleTitle: "The Credential Lifecycle",
    lifecycleSubtitle:
      "Follow a single trainee from credential issuance through consented verification to a linked employment outcome.",
    lifecycleSteps: [
      {
        label: "Credential Issuance",
        description:
          "A training provider issues a verifiable credential on course completion. The contract binds it to the trainee's decentralized identity as tamper-proof proof of skill.",
        icon: GraduationCap,
        logFilename: "cerulea_skill.log",
        logLines: [
          { text: "[SYS] Issuing skill credential...", time: "10:15:04", tone: "default" },
          { text: "[CMD] issueVC { course: \"WELDER_L3\", trainee: \"did:cer:88f2\" }", time: "10:15:04", tone: "primary" },
          { text: "[AUTH] Verifying provider accreditation...", time: "10:15:05", tone: "secondary" },
          { text: "[OK] Credential bound to DID at block 5711233.", time: "10:15:05", tone: "success" },
        ],
      },
      {
        label: "Consented Verification",
        description:
          "An employer requests to verify the candidate's credentials. The citizen grants scoped on-chain consent, and the employer confirms the skills without a central database call.",
        icon: Lock,
        logFilename: "cerulea_skill.log",
        logLines: [
          { text: "[SYS] Verification request from Employer_0x31...", time: "12:40:18", tone: "default" },
          { text: "[CMD] grantConsent(did:cer:88f2, scope: \"WELDER_L3\")", time: "12:40:20", tone: "primary" },
          { text: "[SYS] Presenting credential proof to employer.", time: "12:40:21", tone: "default" },
          { text: "[OK] Skill verified without central lookup.", time: "12:40:21", tone: "success" },
        ],
      },
      {
        label: "Employment Linkage",
        description:
          "On hiring, a verified employment record is linked to the trainee's credential. The outcome is now attributable to the specific training program.",
        icon: Handshake,
        logFilename: "cerulea_skill.log",
        logLines: [
          { text: "[SYS] Linking employment to credential...", time: "15:22:41", tone: "default" },
          { text: "[CMD] linkEmployment(did:cer:88f2, emp: \"EMP_5521\")", time: "15:22:41", tone: "primary" },
          { text: "[AUTH] Attributing outcome to WELDER_L3 program...", time: "15:22:42", tone: "secondary" },
          { text: "[OK] Outcome linked. Placement recorded.", time: "15:22:42", tone: "success" },
        ],
      },
      {
        label: "Policy Rollup",
        description:
          "The ministry queries aggregated outcomes to see placement rates per program and provider, redirecting funding toward the schemes that deliver jobs.",
        icon: Activity,
        logFilename: "cerulea_skill.log",
        logLines: [
          { text: "[SYS] Aggregating placement outcomes...", time: "18:05:10", tone: "default" },
          { text: "[CMD] outcomeRollup(program: \"WELDER_L3\")", time: "18:05:10", tone: "primary" },
          { text: "[SYS] Placement rate computed across 12k trainees.", time: "18:05:11", tone: "secondary" },
          { text: "[OK] 71% placement returned to policy dashboard.", time: "18:05:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the skill registry into modular contracts. Each layer issues, consents, links, and aggregates outcomes without pooling citizens' data in one controllable store.",
    layers: [
      {
        title: "Credential Ledger",
        subtitle: "The Skill Passport",
        icon: GraduationCap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Skill Passport",
          description:
            "The foundational layer. It mints each completed course as a verifiable credential bound to the trainee's decentralized identity, so a skill claim is cryptographically provable rather than a line on a certificate.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CredentialLedger {\n  struct VC {\n    bytes32 did;\n    bytes32 course;\n    address provider;\n    uint256 issuedAt;\n  }\n\n  mapping(bytes32 => VC) public credentials;\n\n  function issue(bytes32 id, bytes32 did, bytes32 course) external onlyProvider {\n    credentials[id] = VC(did, course, msg.sender, block.timestamp);\n  }\n}",
        simAction: "Simulate Credential Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying provider accreditation...", tone: "default" },
          { text: "Binding WELDER_L3 to trainee DID...", tone: "default" },
          { text: "Sealing issuance timestamp...", tone: "default" },
          { text: "Writing credential to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Verifiable credential issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Consent Gate",
        subtitle: "The Citizen Control",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Citizen Control",
          description:
            "Keeps the trainee in charge of their data. An employer can read a credential only against a scoped, revocable on-chain consent, so verification never means exposing the citizen's full record.",
          platformFunction: "Consent & Access",
        },
        codeSnippet:
          "function grantConsent(bytes32 did, bytes32 scope, address verifier) external {\n    require(ownerOf[did] == msg.sender, \"Not owner\");\n    consents[did][verifier] = Consent(scope, block.timestamp + 7 days);\n    emit ConsentGranted(did, verifier, scope);\n}",
        simAction: "Simulate Consent Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Employer requesting credential access...", tone: "default" },
          { text: "Citizen granting scoped consent...", tone: "default" },
          { text: "Presenting only WELDER_L3 proof...", tone: "default" },
          { text: "Recording consent on-chain...", tone: "default" },
          { text: "[SUCCESS] Verification allowed under consent.", tone: "success" },
        ],
      },
      {
        title: "Outcome Linker",
        subtitle: "The Employment Bridge",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Employment Bridge",
          description:
            "Connects training to results. It links a verified employment record to a trainee's credential, attributing the placement to a specific program so effectiveness can be measured on real outcomes.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function linkEmployment(bytes32 did, bytes32 empId, bytes32 credId) external onlyRegistrar {\n    outcomes[credentials[credId].course].push(Outcome(did, empId, block.timestamp));\n    emit OutcomeLinked(did, credId, empId);\n}",
        simAction: "Simulate Outcome Link",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording verified employment EMP_5521...", tone: "default" },
          { text: "Matching to WELDER_L3 credential...", tone: "default" },
          { text: "Attributing outcome to program...", tone: "default" },
          { text: "Appending to outcome index...", tone: "default" },
          { text: "[SUCCESS] Placement linked to training.", tone: "success" },
        ],
      },
      {
        title: "Analytics View",
        subtitle: "The Policy Window",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Policy Window",
          description:
            "A read-only aggregator that computes placement rates per program and provider from verified outcomes, giving policymakers a real basis for funding decisions instead of self-reported claims.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function placementRate(bytes32 course) external view returns (uint256 placed, uint256 trained) {\n    placed = outcomes[course].length;\n    trained = trainedCount[course];\n}",
        simAction: "Simulate Analytics",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ministry querying WELDER_L3 program...", tone: "default" },
          { text: "Counting linked placements...", tone: "default" },
          { text: "Dividing by trained cohort...", tone: "default" },
          { text: "Assembling placement rate...", tone: "default" },
          { text: "[SUCCESS] Verified outcome data returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Outcome-linked skilling is a horizontal capability. Here is how different workforce actors put the verified credential registry to work.",
    sectors: [
      { icon: GraduationCap, title: "Skill Missions & Ministries", description: "Fund training on evidence, redirecting money toward programs with proven placement rates and away from providers whose graduates rarely find work.", assetTypes: ["Program Outcomes", "Placement Rates", "Funding Decisions"] },
      { icon: Building2, title: "Employers", description: "Verify a candidate's skills instantly against tamper-proof credentials under the citizen's consent, cutting fraudulent certificates from the hiring pipeline.", assetTypes: ["Verified Credentials", "Consent Grants", "Hiring Records"] },
      { icon: Users, title: "Trainees & Workers", description: "Carry a portable, verifiable record of skills and placements that any employer can check, without repeatedly proving qualifications on paper.", assetTypes: ["Skill Passports", "Employment Links", "Consent Controls"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy skill-mission database or issuing credentials from provider portals, Cerulea routes both into one verified outcome registry.",
    tracks: [
      {
        title: "Track A: Skill Mission Bridging",
        description:
          "For national skill-mission and employment databases. Course completion and placement events are translated into verifiable credentials and outcome links through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Skill Mission DB", sublabel: "Training & Employment Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Issuance & Linking", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Skill Outcome Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Provider & Wallet Issuance",
        description:
          "For training providers and trainees. A wallet-signed portal issues each credential and manages consent from the citizen's device and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Provider Portal / Wallet", sublabel: "Trainer & Trainee Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Credential Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Skill Record", icon: GraduationCap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a national skill registry with verifiable credentials, consent gating, and outcome analytics from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credential & Consent Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects identity and credentialing integration benchmarks. Building a verifiable credential layer, wiring consent gating, and shipping outcome analytics for an average skill registry takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your credential and consent rules into pre-audited WebAssembly binaries and provisions the shared skill registry instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cross-department-data-sharing-consent-for-citizen-services",
    icon: Lock,
    eyebrow: "Citizen Consent Engine",
    headline1: "Submit documents once.",
    headline2: "Consent controls the rest.",
    heroDescription:
      "Build a citizen-controlled consent system where a citizen approves once for multiple government departments to share their data for a specific service. DID and VC Ledger, Civil Registry, and Compliance Attestations anchor the core, so departments verify shared data without repeated submissions and the citizen decides exactly what is shared.",
    heroCta: "Deploy Consent Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn repeated document submission into a single, scoped, citizen-granted consent that departments honour on-chain.",
    mechanics: [
      { title: "Scoped Consent Grant", description: "Let the citizen approve once. The contract records a specific consent naming the service, the departments, and the data fields, so sharing is bounded to exactly what the citizen allowed." },
      { title: "Verifiable Data Claims", description: "Share proofs, not copies. The DID and VC Ledger lets a source department present a verifiable claim, so a receiving department confirms a fact without holding a duplicate document." },
      { title: "Purpose Binding", description: "Tie data to one service. Each consent is bound to a named purpose, so data shared for a pension application cannot be reused for an unrelated departmental process." },
      { title: "Revocable Access", description: "Keep control with the citizen. Consent can be revoked on-chain at any time, immediately cutting further sharing without needing to contact each department." },
      { title: "Attested Verification", description: "Prove lawful basis. Compliance Attestations record that each cross-department read happened under a valid consent, giving auditors a clear lawful-basis trail." },
      { title: "Submit-Once Services", description: "Cut duplicate paperwork. A citizen submits a document once, and consenting departments verify the shared claim rather than demanding the same paper again." },
    ],
    lifecycleTitle: "The Consent Lifecycle",
    lifecycleSubtitle:
      "Follow a single service request from a citizen's scoped consent through cross-department verification to attested access.",
    lifecycleSteps: [
      {
        label: "Consent Grant",
        description:
          "A citizen grants consent for a specific service, naming the departments and data fields. The contract records the exact scope as the boundary for all sharing.",
        icon: Lock,
        logFilename: "cerulea_consent.log",
        logLines: [
          { text: "[SYS] Recording citizen consent grant...", time: "09:20:11", tone: "default" },
          { text: "[CMD] grant { service: \"RATION_CARD\", depts: 3, fields: [\"INCOME\",\"ADDRESS\"] }", time: "09:20:11", tone: "primary" },
          { text: "[AUTH] Verifying citizen DID signature...", time: "09:20:12", tone: "secondary" },
          { text: "[OK] Consent CNS_2291 anchored at block 5810233.", time: "09:20:12", tone: "success" },
        ],
      },
      {
        label: "Claim Presentation",
        description:
          "A source department presents a verifiable claim about the citizen. The receiving department confirms the fact without receiving a duplicate document.",
        icon: FileCheck,
        logFilename: "cerulea_consent.log",
        logLines: [
          { text: "[SYS] Source dept presenting income claim...", time: "11:05:30", tone: "default" },
          { text: "[CMD] presentClaim(CNS_2291, field: \"INCOME\")", time: "11:05:31", tone: "primary" },
          { text: "[SYS] Verifying claim against consent scope...", time: "11:05:31", tone: "default" },
          { text: "[OK] Claim verified. No document copied.", time: "11:05:32", tone: "success" },
        ],
      },
      {
        label: "Attested Access",
        description:
          "The receiving department reads the shared claim under the consent. Compliance Attestations record the lawful basis and purpose of the access.",
        icon: ShieldCheck,
        logFilename: "cerulea_consent.log",
        logLines: [
          { text: "[SYS] Receiving dept accessing shared claim...", time: "13:40:41", tone: "default" },
          { text: "[CMD] accessData(CNS_2291, purpose: \"RATION_CARD\")", time: "13:40:41", tone: "primary" },
          { text: "[AUTH] Attesting lawful basis and purpose...", time: "13:40:42", tone: "secondary" },
          { text: "[OK] Access logged. Purpose bound and sealed.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Revocation",
        description:
          "The citizen revokes consent after the service concludes. Further sharing stops immediately across all departments without individual follow-up.",
        icon: Shield,
        logFilename: "cerulea_consent.log",
        logLines: [
          { text: "[SYS] Processing consent revocation...", time: "17:12:47", tone: "default" },
          { text: "[CMD] revoke(CNS_2291)", time: "17:12:47", tone: "primary" },
          { text: "[SYS] Cutting access across 3 departments...", time: "17:12:48", tone: "default" },
          { text: "[OK] Consent revoked. Sharing halted.", time: "17:12:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes cross-department sharing into modular contracts. Each layer grants, presents, attests, and revokes access without pooling citizen documents in one controllable store.",
    layers: [
      {
        title: "Consent Registry",
        subtitle: "The Scoped Grant",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Scoped Grant",
          description:
            "The foundational layer. It records a citizen's consent naming the service, departments, and data fields, so every subsequent read is bounded to exactly what the citizen authorized and nothing more.",
          platformFunction: "Consent & Access",
        },
        codeSnippet:
          "contract ConsentRegistry {\n  struct Consent {\n    bytes32 did;\n    bytes32 service;\n    bytes32[] fields;\n    address[] departments;\n    bool active;\n  }\n\n  mapping(bytes32 => Consent) public consents;\n\n  function grant(bytes32 id, bytes32 service, bytes32[] calldata fields, address[] calldata depts) external {\n    consents[id] = Consent(didOf[msg.sender], service, fields, depts, true);\n  }\n}",
        simAction: "Simulate Consent Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying citizen DID signature...", tone: "default" },
          { text: "Recording service RATION_CARD scope...", tone: "default" },
          { text: "Binding 3 departments and 2 fields...", tone: "default" },
          { text: "Writing consent to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Scoped consent anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Claim Presenter",
        subtitle: "The Proof Exchange",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proof Exchange",
          description:
            "Shares facts, not files. A source department presents a verifiable claim within the consent scope, so a receiving department confirms a fact without ever holding a duplicate of the citizen's document.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function presentClaim(bytes32 consentId, bytes32 field, bytes calldata proof) external returns (bool) {\n    Consent storage c = consents[consentId];\n    require(c.active && _inScope(c, field), \"Not consented\");\n    return _verifyClaim(field, proof);\n}",
        simAction: "Simulate Claim",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Source department building income claim...", tone: "default" },
          { text: "Checking field against consent scope...", tone: "default" },
          { text: "Verifying claim proof...", tone: "default" },
          { text: "Returning fact without document copy...", tone: "default" },
          { text: "[SUCCESS] Verifiable claim presented.", tone: "success" },
        ],
      },
      {
        title: "Access Notary",
        subtitle: "The Lawful-Basis Seal",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Lawful-Basis Seal",
          description:
            "Proves sharing was authorized. Compliance Attestations record each cross-department read against its consent and purpose, giving auditors a clear lawful-basis trail for every data exchange.",
          platformFunction: "Consent & Access",
        },
        codeSnippet:
          "function accessData(bytes32 consentId, bytes32 purpose) external onlyDept {\n    Consent storage c = consents[consentId];\n    require(c.active && c.service == purpose, \"Purpose mismatch\");\n    accessLog[consentId].push(Access(msg.sender, purpose, block.timestamp));\n    emit DataAccessed(consentId, msg.sender, purpose);\n}",
        simAction: "Simulate Access",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving department requesting access...", tone: "default" },
          { text: "Confirming purpose matches consent...", tone: "default" },
          { text: "Recording lawful-basis attestation...", tone: "default" },
          { text: "Appending to access log...", tone: "default" },
          { text: "[SUCCESS] Attested access sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Revocation Switch",
        subtitle: "The Citizen Kill",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Citizen Kill",
          description:
            "Restores control at any moment. A single on-chain revocation deactivates the consent and cuts further sharing across every department at once, without the citizen contacting each office individually.",
          platformFunction: "Consent & Access",
        },
        codeSnippet:
          "function revoke(bytes32 consentId) external {\n    require(ownerOf[consents[consentId].did] == msg.sender, \"Not owner\");\n    consents[consentId].active = false;\n    emit ConsentRevoked(consentId, block.timestamp);\n}",
        simAction: "Simulate Revocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Citizen initiating revocation...", tone: "default" },
          { text: "Verifying consent ownership...", tone: "default" },
          { text: "Deactivating shared access...", tone: "default" },
          { text: "Cutting access across 3 departments...", tone: "default" },
          { text: "[SUCCESS] Consent revoked instantly.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Citizen-controlled data sharing is a horizontal capability. Here is how different public actors put the consent ledger to work.",
    sectors: [
      { icon: Landmark, title: "Service Departments", description: "Verify eligibility from consented claims instead of demanding the same certificates repeatedly, cutting processing time and duplicate paperwork for citizen services.", assetTypes: ["Consented Claims", "Service Requests", "Verification Records"] },
      { icon: Users, title: "Citizens", description: "Grant one scoped, revocable consent per service and submit a document once, keeping precise control over which department sees which field.", assetTypes: ["Consent Grants", "Revocations", "Data Scopes"] },
      { icon: Shield, title: "Data Protection Authority", description: "Audit that every cross-department read had a valid consent and purpose, replacing opaque data exchange with a verifiable lawful-basis trail.", assetTypes: ["Access Logs", "Lawful-Basis Records", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy departmental databases or capturing consent from a citizen app, Cerulea routes both into one consent-governed sharing ledger.",
    tracks: [
      {
        title: "Track A: Departmental System Bridging",
        description:
          "For existing departmental databases. Data requests are translated into consent-checked claim exchanges through the API gateway, so departments verify facts without moving documents.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Departmental Database", sublabel: "Source Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Consent Checking & Claims", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consent Sharing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Citizen Wallet Consent",
        description:
          "For citizens granting consent on mobile. A wallet signs each grant and revocation from the citizen's device and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Citizen Wallet / App", sublabel: "Consent Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Consent Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Consent-Governed Record", icon: Lock, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a citizen consent network with scoped grants, verifiable claims, and revocable cross-department access from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Consent & Sharing Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects consent-management and interoperability integration benchmarks. Building scoped consent, wiring verifiable claim exchange, and shipping revocable access for an average sharing network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your consent and sharing rules into pre-audited WebAssembly binaries and provisions the shared consent ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "import-export-documentation-and-customs-pre-clearance",
    icon: Truck,
    eyebrow: "Customs Pre-Clearance Engine",
    headline1: "Clear before arrival.",
    headline2: "Coordinate every agency.",
    heroDescription:
      "Build a pre-clearance and multi-agency coordination network where customs, FSSAI, drug controller, and plant quarantine work in parallel on one shared record. Cerulea Studio assembles it from Port and Customs Events, Trade Finance Documents, and Compliance Attestations, so cargo is released on vessel arrival instead of 3 to 7 days after.",
    heroCta: "Deploy Clearance Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn sequential, siloed agency approvals into a parallel pre-clearance that finishes before the vessel docks.",
    mechanics: [
      { title: "Single Document Set", description: "Submit once for all agencies. Trade Finance Documents anchor the import file on-chain, so customs, FSSAI, and other agencies read one shared record instead of demanding separate physical copies." },
      { title: "Parallel Agency Review", description: "End the queue. Each agency clears its own portion concurrently against the shared record, collapsing a serial multi-agency chain into simultaneous review." },
      { title: "Pre-Arrival Filing", description: "Start before the ship. Port and Customs Events accept the declaration ahead of vessel arrival, so approvals can complete while cargo is still in transit." },
      { title: "Attested Clearance", description: "Seal each approval. Compliance Attestations record each agency's clearance against the consignment, producing a verifiable release status no single desk can hold up." },
      { title: "Duplicate-Inspection Cut", description: "Inspect once, share result. An inspection recorded by one agency is visible to others, removing the duplicate checks that add days to clearance." },
      { title: "Release on Discharge", description: "Truck out fast. With pre-clearance sealed, cargo is released and moved within hours of discharge rather than held for days of paperwork." },
    ],
    lifecycleTitle: "The Clearance Lifecycle",
    lifecycleSubtitle:
      "Follow a single consignment from pre-arrival filing through parallel agency review to release on discharge.",
    lifecycleSteps: [
      {
        label: "Pre-Arrival Filing",
        description:
          "The importer files the declaration and document set before the vessel arrives. The contract anchors the consignment and opens it for parallel agency review.",
        icon: ScrollText,
        logFilename: "cerulea_customs.log",
        logLines: [
          { text: "[SYS] Anchoring pre-arrival import declaration...", time: "06:10:11", tone: "default" },
          { text: "[CMD] fileImport { hbl: \"HBL_7742\", port: \"JNPT\", eta: \"+18h\" }", time: "06:10:11", tone: "primary" },
          { text: "[AUTH] Verifying importer IEC and document hashes...", time: "06:10:12", tone: "secondary" },
          { text: "[OK] Consignment anchored. Agencies notified.", time: "06:10:12", tone: "success" },
        ],
      },
      {
        label: "Parallel Agency Review",
        description:
          "Customs, FSSAI, and the Drug Controller review concurrently against the shared record. Each agency clears its portion without waiting for the others.",
        icon: Workflow,
        logFilename: "cerulea_customs.log",
        logLines: [
          { text: "[SYS] Opening parallel review for HBL_7742...", time: "09:30:30", tone: "default" },
          { text: "[CMD] clearAgency(HBL_7742, agency: \"FSSAI\")", time: "10:02:31", tone: "primary" },
          { text: "[CMD] clearAgency(HBL_7742, agency: \"CUSTOMS\")", time: "10:14:12", tone: "primary" },
          { text: "[OK] 3 of 3 agencies cleared concurrently.", time: "11:05:02", tone: "success" },
        ],
      },
      {
        label: "Pre-Clearance Sealed",
        description:
          "With all agencies cleared before arrival, the contract seals a pre-clearance status. The pharmaceutical raw material import is cleared 18 hours before docking at JNPT.",
        icon: ShieldCheck,
        logFilename: "cerulea_customs.log",
        logLines: [
          { text: "[SYS] Aggregating agency clearances...", time: "11:06:41", tone: "default" },
          { text: "[CMD] sealPreClearance(HBL_7742)", time: "11:06:41", tone: "primary" },
          { text: "[AUTH] Confirming all mandatory agencies cleared...", time: "11:06:42", tone: "secondary" },
          { text: "[OK] Pre-cleared 18h before vessel arrival.", time: "11:06:42", tone: "success" },
        ],
      },
      {
        label: "Release on Discharge",
        description:
          "On vessel arrival the cargo is released against the sealed pre-clearance and trucked out within four hours of discharge, instead of a multi-day hold.",
        icon: Truck,
        logFilename: "cerulea_customs.log",
        logLines: [
          { text: "[SYS] Vessel arrived. Matching to pre-clearance...", time: "00:14:47", tone: "default" },
          { text: "[CMD] release(HBL_7742)", time: "00:14:47", tone: "primary" },
          { text: "[SYS] Generating gate pass for trucking...", time: "00:14:48", tone: "default" },
          { text: "[OK] Cargo released. Trucked out in 4h.", time: "04:02:10", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes customs pre-clearance into modular contracts. Each layer files, coordinates, seals, and releases a consignment without any single agency serialising the process.",
    layers: [
      {
        title: "Consignment Registry",
        subtitle: "The Shared Declaration",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Declaration",
          description:
            "The foundational layer. It anchors the import declaration and document digests before arrival, giving every agency one shared, tamper-evident record instead of separate physical submissions.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ConsignmentRegistry {\n  struct Consignment {\n    address importer;\n    bytes32 port;\n    bytes32 docBundle;\n    uint256 eta;\n    uint8 agenciesCleared;\n  }\n\n  mapping(bytes32 => Consignment) public consignments;\n\n  function file(bytes32 id, bytes32 port, bytes32 docs, uint256 eta) external {\n    consignments[id] = Consignment(msg.sender, port, docs, eta, 0);\n  }\n}",
        simAction: "Simulate Filing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying importer IEC code...", tone: "default" },
          { text: "Hashing import document bundle...", tone: "default" },
          { text: "Recording ETA at JNPT...", tone: "default" },
          { text: "Writing consignment to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Consignment HBL_7742 anchored.", tone: "success" },
        ],
      },
      {
        title: "Agency Coordinator",
        subtitle: "The Parallel Clearance",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Parallel Clearance",
          description:
            "Removes the serial queue. Each agency records its clearance against the shared consignment independently, so customs, FSSAI, and the Drug Controller work simultaneously rather than one after another.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function clearAgency(bytes32 id, bytes32 agency) external onlyAgency(agency) {\n    require(!cleared[id][agency], \"Already cleared\");\n    cleared[id][agency] = true;\n    consignments[id].agenciesCleared++;\n    emit AgencyCleared(id, agency);\n}",
        simAction: "Simulate Agency Clearance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "FSSAI reviewing shared record...", tone: "default" },
          { text: "Customs reviewing in parallel...", tone: "default" },
          { text: "Drug Controller clearing concurrently...", tone: "default" },
          { text: "Incrementing agencies-cleared count...", tone: "default" },
          { text: "[SUCCESS] All agencies cleared in parallel.", tone: "success" },
        ],
      },
      {
        title: "Pre-Clearance Seal",
        subtitle: "The Release Gate",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Release Gate",
          description:
            "Turns clearances into a release right. It seals a pre-clearance only when every mandatory agency has cleared, so cargo can be released the moment the vessel arrives with no residual paperwork.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function sealPreClearance(bytes32 id) external returns (bool) {\n    require(consignments[id].agenciesCleared == mandatoryCount[id], \"Pending agencies\");\n    preCleared[id] = true;\n    emit PreCleared(id, block.timestamp);\n    return true;\n}",
        simAction: "Simulate Pre-Clearance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating agency clearances...", tone: "default" },
          { text: "Confirming all mandatory agencies done...", tone: "default" },
          { text: "Sealing pre-clearance status...", tone: "default" },
          { text: "Emitting release authorization...", tone: "default" },
          { text: "[SUCCESS] Pre-cleared before vessel arrival.", tone: "success" },
        ],
      },
      {
        title: "Gate Release",
        subtitle: "The Discharge Exit",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Discharge Exit",
          description:
            "Moves cargo fast. On arrival it matches the vessel to the sealed pre-clearance and issues a gate pass, so goods are trucked out within hours of discharge instead of held for days.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function release(bytes32 id) external onlyPort {\n    require(preCleared[id], \"Not pre-cleared\");\n    gatePass[id] = GatePass(block.timestamp, msg.sender);\n    emit Released(id, block.timestamp);\n}",
        simAction: "Simulate Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Vessel arrived at JNPT...", tone: "default" },
          { text: "Matching cargo to pre-clearance...", tone: "default" },
          { text: "Issuing gate pass for trucking...", tone: "default" },
          { text: "Recording release timestamp...", tone: "default" },
          { text: "[SUCCESS] Cargo released within hours.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Parallel pre-clearance is a horizontal capability. Here is how different trade actors put the shared customs record to work.",
    sectors: [
      { icon: Landmark, title: "Customs & Regulatory Agencies", description: "Clear consignments concurrently against one shared record, cutting duplicate inspection and freeing officers from serial physical document handling.", assetTypes: ["Import Declarations", "Agency Clearances", "Inspection Records"] },
      { icon: Package, title: "Importers & Exporters", description: "File a single document set before arrival and receive cargo within hours of discharge, cutting demurrage and days of clearance delay.", assetTypes: ["Consignments", "Pre-Clearances", "Gate Passes"] },
      { icon: Truck, title: "Ports & Logistics", description: "Match arriving vessels to sealed pre-clearances and issue gate passes instantly, turning berth throughput into a faster, predictable flow.", assetTypes: ["Vessel Manifests", "Release Orders", "Discharge Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy customs EDI system or capturing filings from a broker portal, Cerulea routes both into one shared pre-clearance ledger.",
    tracks: [
      {
        title: "Track A: Customs EDI Bridging",
        description:
          "For national single-window and customs EDI systems. Declaration and clearance events are translated into shared on-chain consignment records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Customs EDI / Single Window", sublabel: "Agency Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Pre-Clearance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Broker Portal Filing",
        description:
          "For customs brokers and importers. A wallet-signed portal files each declaration and document set and routes it directly to the ledger for parallel review.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Broker Portal / Wallet", sublabel: "Importer & Agent Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Clearance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Consignment Record", icon: Truck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-agency pre-clearance network with parallel review, sealed clearance, and discharge release from scratch requires specialised engineers and long customs integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Clearance & Agency Rules",
      ruleCount: 52,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects customs single-window integration benchmarks. Wiring each agency, building parallel clearance logic, and shipping a discharge release flow for an average trade network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your clearance and agency rules into pre-audited WebAssembly binaries and provisions the shared pre-clearance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "container-scanning-and-risk-assessment-data-sharing-across-ports",
    icon: Boxes,
    eyebrow: "Container Risk Engine",
    headline1: "Scan once.",
    headline2: "Trust it everywhere.",
    heroDescription:
      "Run a shared risk assessment record for shipping containers that follows the container across ports, avoiding repeated scanning and inspection at transshipment. Provenance Notary, Compliance Attestations, and Audit Logs anchor the core, binding the scan result to the container identity so any later port can verify it was already cleared.",
    heroCta: "Deploy Risk Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Bind a scan and risk score to the container itself so the next port trusts it instead of rescanning.",
    mechanics: [
      { title: "Scan Anchoring", description: "Seal the scan at origin. The Provenance Notary binds the scan image digest and risk score to the container identity, creating a portable, tamper-evident assessment." },
      { title: "Container Identity", description: "Pin the record to the box. Each assessment is keyed to the container and seal number, so the result travels with the physical container across its journey." },
      { title: "Cross-Port Verification", description: "Let the next port check, not repeat. A transshipment or destination port verifies the anchored assessment and clears the container without a second scan." },
      { title: "Risk-Tiered Routing", description: "Focus inspection where it matters. Containers carry their risk tier forward, so ports concentrate physical inspection on high-risk boxes rather than rescanning cleared ones." },
      { title: "Tamper Detection", description: "Catch changes in transit. If a container seal is broken or swapped after scanning, the mismatch against the anchored record is flagged for re-inspection." },
      { title: "Shared Audit Trail", description: "Give agencies one history. Audit Logs record every scan, verification, and inspection, so participating ports and customs share a single container history." },
    ],
    lifecycleTitle: "The Assessment Lifecycle",
    lifecycleSubtitle:
      "Follow a single container from origin scan through cross-port verification to risk-tiered release without a repeat scan.",
    lifecycleSteps: [
      {
        label: "Origin Scan",
        description:
          "A container is scanned and risk-assessed at the origin port. The contract anchors the scan digest and risk tier to the container and seal identity.",
        icon: Search,
        logFilename: "cerulea_container.log",
        logLines: [
          { text: "[SYS] Anchoring origin scan for container...", time: "07:12:11", tone: "default" },
          { text: "[CMD] anchorScan { cntr: \"MSKU7742\", seal: \"S_9921\", risk: \"LOW\" }", time: "07:12:11", tone: "primary" },
          { text: "[AUTH] Hashing scan image and binding to seal...", time: "07:12:12", tone: "secondary" },
          { text: "[OK] Assessment anchored at block 5912233.", time: "07:12:12", tone: "success" },
        ],
      },
      {
        label: "Transit Handoff",
        description:
          "The container moves to a transshipment port. The record travels with it, so the next port sees a verifiable prior assessment on arrival.",
        icon: Truck,
        logFilename: "cerulea_container.log",
        logLines: [
          { text: "[SYS] Container MSKU7742 in transit to hub...", time: "13:40:30", tone: "default" },
          { text: "[CMD] recordMovement(MSKU7742, to: \"COLOMBO\")", time: "13:40:31", tone: "primary" },
          { text: "[SYS] Assessment record attached to container.", time: "13:40:31", tone: "default" },
          { text: "[OK] Movement logged. Record portable.", time: "13:40:32", tone: "success" },
        ],
      },
      {
        label: "Cross-Port Verify",
        description:
          "The transshipment port verifies the anchored assessment and confirms the seal is intact, clearing the container without a redundant scan.",
        icon: ShieldCheck,
        logFilename: "cerulea_container.log",
        logLines: [
          { text: "[SYS] Verifying prior assessment for MSKU7742...", time: "20:05:41", tone: "default" },
          { text: "[CMD] verifyAssessment(MSKU7742, seal: \"S_9921\")", time: "20:05:41", tone: "primary" },
          { text: "[SYS] Seal intact. Risk tier LOW confirmed.", time: "20:05:42", tone: "default" },
          { text: "[OK] Cleared without rescan. Delay avoided.", time: "20:05:42", tone: "success" },
        ],
      },
      {
        label: "Risk-Tiered Release",
        description:
          "The container is released along its risk tier. Physical inspection is reserved for high-risk boxes, while cleared low-risk containers move straight through.",
        icon: Boxes,
        logFilename: "cerulea_container.log",
        logLines: [
          { text: "[SYS] Routing MSKU7742 by risk tier...", time: "21:15:47", tone: "default" },
          { text: "[CMD] release(MSKU7742, tier: \"LOW\")", time: "21:15:47", tone: "primary" },
          { text: "[SYS] Bypassing physical rescan queue.", time: "21:15:48", tone: "default" },
          { text: "[OK] Released. No repeat inspection needed.", time: "21:15:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes container risk sharing into modular contracts. Each layer anchors, moves, verifies, and routes an assessment without any port having to rescan a cleared container.",
    layers: [
      {
        title: "Scan Registry",
        subtitle: "The Portable Assessment",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Portable Assessment",
          description:
            "The foundational layer. It anchors the scan digest and risk tier to the container and seal identity, turning a one-port assessment into a portable, tamper-evident record other ports can trust.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ScanRegistry {\n  struct Assessment {\n    bytes32 container;\n    bytes32 seal;\n    bytes32 scanHash;\n    uint8 riskTier;\n    uint256 scannedAt;\n  }\n\n  mapping(bytes32 => Assessment) public assessments;\n\n  function anchor(bytes32 container, bytes32 seal, bytes32 scanHash, uint8 tier) external onlyPort {\n    assessments[container] = Assessment(container, seal, scanHash, tier, block.timestamp);\n  }\n}",
        simAction: "Simulate Origin Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing origin scan image...", tone: "default" },
          { text: "Binding assessment to seal S_9921...", tone: "default" },
          { text: "Recording risk tier LOW...", tone: "default" },
          { text: "Writing assessment to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Portable assessment anchored.", tone: "success" },
        ],
      },
      {
        title: "Movement Log",
        subtitle: "The Traveling Record",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Traveling Record",
          description:
            "Keeps the assessment with the container. Each movement between ports is recorded on-chain, so the anchored scan and risk tier stay attached as the container transships across the network.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function recordMovement(bytes32 container, bytes32 toPort) external onlyPort {\n    movements[container].push(Movement(toPort, block.timestamp));\n    emit ContainerMoved(container, toPort);\n}",
        simAction: "Simulate Movement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Container departing origin port...", tone: "default" },
          { text: "Recording movement to Colombo hub...", tone: "default" },
          { text: "Keeping assessment attached...", tone: "default" },
          { text: "Appending to movement history...", tone: "default" },
          { text: "[SUCCESS] Record traveled with container.", tone: "success" },
        ],
      },
      {
        title: "Verification Gate",
        subtitle: "The No-Rescan Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The No-Rescan Check",
          description:
            "Removes redundant scanning. A downstream port verifies the anchored assessment and seal integrity, clearing the container against the prior result instead of running a duplicate scan.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function verifyAssessment(bytes32 container, bytes32 seal) external view returns (bool valid, uint8 tier) {\n    Assessment memory a = assessments[container];\n    valid = a.seal == seal;\n    tier = a.riskTier;\n}",
        simAction: "Simulate Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Transshipment port querying record...", tone: "default" },
          { text: "Comparing presented seal to anchor...", tone: "default" },
          { text: "Confirming seal intact...", tone: "default" },
          { text: "Returning LOW risk tier...", tone: "default" },
          { text: "[SUCCESS] Cleared without rescan.", tone: "success" },
        ],
      },
      {
        title: "Routing Engine",
        subtitle: "The Risk Sorter",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Risk Sorter",
          description:
            "Concentrates inspection effort. It routes each container along its carried risk tier, sending only high-risk boxes to physical inspection while cleared low-risk containers move straight through the gate.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function route(bytes32 container) external view returns (bytes32 lane) {\n    uint8 tier = assessments[container].riskTier;\n    return tier >= HIGH ? INSPECT_LANE : GREEN_LANE;\n}",
        simAction: "Simulate Routing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading carried risk tier...", tone: "default" },
          { text: "Tier LOW below inspection threshold...", tone: "default" },
          { text: "Assigning green lane...", tone: "default" },
          { text: "Bypassing physical rescan...", tone: "default" },
          { text: "[SUCCESS] Container routed by risk tier.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Portable container risk data is a horizontal capability. Here is how different port actors put the shared assessment record to work.",
    sectors: [
      { icon: Landmark, title: "Customs Authorities", description: "Trust a prior port's scan and risk score, focusing physical inspection on genuinely high-risk containers instead of rescanning cleared ones at every hop.", assetTypes: ["Risk Assessments", "Inspection Records", "Clearance Lanes"] },
      { icon: Boxes, title: "Port Operators", description: "Speed transshipment throughput by clearing containers against anchored assessments, cutting the queue for redundant scanning at hub ports.", assetTypes: ["Container Manifests", "Movement Logs", "Green-Lane Releases"] },
      { icon: Truck, title: "Shipping Lines", description: "Move containers across ports without repeated inspection delay, since the scan result and risk tier follow the physical box in a verifiable record.", assetTypes: ["Container Records", "Seal Attestations", "Transit Histories"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy port community system or capturing scans from inspection equipment, Cerulea routes both into one shared container assessment ledger.",
    tracks: [
      {
        title: "Track A: Port Community Bridging",
        description:
          "For existing port community and customs systems. Scan and inspection events are translated into anchored on-chain assessments through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Port Community System", sublabel: "Terminal & Customs Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Scan Hashing & Binding", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Container Risk Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Scanner Device Capture",
        description:
          "For scanning equipment and inspection officers. A signed device anchors each scan and verification from the terminal and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Scanner / Officer Device", sublabel: "Inspection Endpoints", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Assessment Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Risk Record", icon: Boxes, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-port risk network with anchored scans, seal verification, and risk-tiered routing from scratch requires specialised engineers and long port integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Scan & Risk Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects port and customs integration benchmarks. Wiring scanning equipment, building portable assessment logic, and shipping risk-tiered routing for an average port network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your scan and risk rules into pre-audited WebAssembly binaries and provisions the shared container risk ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "special-economic-zone-sez-inventory-and-duty-exemption-tracking",
    icon: Package,
    eyebrow: "Duty Exemption Engine",
    headline1: "Track every unit.",
    headline2: "Guard every exemption.",
    heroDescription:
      "Deploy a verified inventory record for goods inside a special economic zone, ensuring duty exemptions apply only to goods that remain within the zone's terms. Cerulea Studio assembles it from Traceability Ledger, Compliance Attestations, and Audit Logs, tracking each unit from entry to exit and flagging any movement that would breach the exemption.",
    heroCta: "Deploy SEZ Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn manual zone registers into a per-unit inventory ledger that enforces duty exemption conditions automatically.",
    mechanics: [
      { title: "Bonded Entry", description: "Anchor goods at the gate. The Traceability Ledger records each unit entering the zone under duty exemption, fixing its bonded status as the baseline for compliance." },
      { title: "In-Zone Movement", description: "Follow goods through production. Movements between units and processes inside the zone are recorded, so inventory position is always verifiable against the exemption terms." },
      { title: "Export Consumption", description: "Credit goods against export. When bonded material is consumed in export production, the ledger discharges the exemption obligation for those units automatically." },
      { title: "Breach Flagging", description: "Catch domestic diversion. Any movement of bonded goods into the domestic tariff area without duty payment is flagged for review the moment it is recorded." },
      { title: "Attested Reconciliation", description: "Prove the balance. Compliance Attestations reconcile entries, consumption, and exits, giving the development commissioner a verifiable inventory balance per unit." },
      { title: "Audit-Ready Trail", description: "Replace manual registers. Audit Logs hold a tamper-evident history of every bonded unit, so a zone audit runs against the ledger instead of paper stock books." },
    ],
    lifecycleTitle: "The Exemption Lifecycle",
    lifecycleSubtitle:
      "Follow a single bonded consignment from duty-exempt entry through in-zone use to reconciled export or flagged exit.",
    lifecycleSteps: [
      {
        label: "Bonded Entry",
        description:
          "Goods enter the SEZ under duty exemption. The contract anchors each unit's bonded status as the baseline against which all later movement is checked.",
        icon: Package,
        logFilename: "cerulea_sez.log",
        logLines: [
          { text: "[SYS] Recording bonded entry to zone...", time: "08:14:11", tone: "default" },
          { text: "[CMD] enterBonded { unit: \"SEZ_U88\", qty: 5000, duty: \"EXEMPT\" }", time: "08:14:11", tone: "primary" },
          { text: "[AUTH] Verifying zone entry permit...", time: "08:14:12", tone: "secondary" },
          { text: "[OK] Bonded status anchored at block 6012233.", time: "08:14:12", tone: "success" },
        ],
      },
      {
        label: "In-Zone Movement",
        description:
          "The goods move to a processing unit inside the zone. Each transfer is recorded, keeping inventory position verifiable against the exemption terms.",
        icon: Workflow,
        logFilename: "cerulea_sez.log",
        logLines: [
          { text: "[SYS] Recording in-zone transfer...", time: "11:30:30", tone: "default" },
          { text: "[CMD] moveInZone(SEZ_U88, to: \"PROC_UNIT_3\")", time: "11:30:31", tone: "primary" },
          { text: "[SYS] Inventory position updated, status bonded.", time: "11:30:31", tone: "default" },
          { text: "[OK] Movement logged within zone terms.", time: "11:30:32", tone: "success" },
        ],
      },
      {
        label: "Export Discharge",
        description:
          "Bonded material is consumed in export production. The ledger discharges the duty exemption obligation for those units against the export shipment.",
        icon: Truck,
        logFilename: "cerulea_sez.log",
        logLines: [
          { text: "[SYS] Discharging exemption against export...", time: "15:05:41", tone: "default" },
          { text: "[CMD] dischargeExport(SEZ_U88, shipment: \"EXP_771\")", time: "15:05:41", tone: "primary" },
          { text: "[AUTH] Reconciling consumed units to export...", time: "15:05:42", tone: "secondary" },
          { text: "[OK] Exemption discharged. Obligation cleared.", time: "15:05:42", tone: "success" },
        ],
      },
      {
        label: "Breach Flag",
        description:
          "An attempted move of bonded goods into the domestic area without duty payment is detected and flagged to the development commissioner for review.",
        icon: Shield,
        logFilename: "cerulea_sez.log",
        logLines: [
          { text: "[SYS] Screening exit against exemption terms...", time: "16:44:47", tone: "default" },
          { text: "[CMD] checkExit(SEZ_U40, dest: \"DTA\")", time: "16:44:47", tone: "primary" },
          { text: "[SYS] Domestic exit without duty detected.", time: "16:44:48", tone: "error" },
          { text: "[OK] Breach flagged for commissioner review.", time: "16:44:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes SEZ tracking into modular contracts. Each layer bonds, moves, discharges, and reconciles inventory without any unit relying on a manual stock register.",
    layers: [
      {
        title: "Bonded Registry",
        subtitle: "The Exemption Baseline",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Exemption Baseline",
          description:
            "The foundational layer. It anchors each unit's bonded, duty-exempt status at entry, fixing the baseline that every later movement is checked against to keep the exemption valid.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract BondedRegistry {\n  struct Unit {\n    bytes32 id;\n    uint256 qty;\n    bool bonded;\n    bool discharged;\n  }\n\n  mapping(bytes32 => Unit) public units;\n\n  function enter(bytes32 id, uint256 qty) external onlyZoneAuthority {\n    units[id] = Unit(id, qty, true, false);\n  }\n}",
        simAction: "Simulate Bonded Entry",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying zone entry permit...", tone: "default" },
          { text: "Marking unit SEZ_U88 bonded...", tone: "default" },
          { text: "Fixing duty-exempt baseline...", tone: "default" },
          { text: "Writing unit to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Bonded status anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Movement Tracker",
        subtitle: "The In-Zone Ledger",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The In-Zone Ledger",
          description:
            "Keeps inventory verifiable during production. Every transfer between units inside the zone is recorded, so the current position of bonded goods is always known and checkable against exemption terms.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function moveInZone(bytes32 id, bytes32 toUnit) external onlyZoneUnit {\n    require(units[id].bonded && !units[id].discharged, \"Not eligible\");\n    location[id] = toUnit;\n    emit MovedInZone(id, toUnit, block.timestamp);\n}",
        simAction: "Simulate In-Zone Move",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming unit still bonded...", tone: "default" },
          { text: "Transferring to processing unit 3...", tone: "default" },
          { text: "Updating in-zone location...", tone: "default" },
          { text: "Logging movement on-chain...", tone: "default" },
          { text: "[SUCCESS] In-zone movement recorded.", tone: "success" },
        ],
      },
      {
        title: "Discharge Engine",
        subtitle: "The Export Credit",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Export Credit",
          description:
            "Closes the exemption honestly. When bonded material is consumed in export production, it discharges the duty obligation for those units against the export shipment, reconciling entry with lawful exit.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function dischargeExport(bytes32 id, bytes32 shipment) external onlyZoneUnit {\n    require(units[id].bonded, \"Not bonded\");\n    units[id].discharged = true;\n    exports[id] = shipment;\n    emit ExemptionDischarged(id, shipment);\n}",
        simAction: "Simulate Export Discharge",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Linking consumed units to export EXP_771...", tone: "default" },
          { text: "Reconciling quantity against entry...", tone: "default" },
          { text: "Marking exemption discharged...", tone: "default" },
          { text: "Recording export obligation cleared...", tone: "default" },
          { text: "[SUCCESS] Exemption discharged on export.", tone: "success" },
        ],
      },
      {
        title: "Exit Guard",
        subtitle: "The Breach Detector",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Breach Detector",
          description:
            "Protects the exemption from abuse. It screens every exit and flags any bonded goods moving into the domestic tariff area without duty payment, turning manual compliance checks into automatic detection.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function checkExit(bytes32 id, bytes32 destination) external returns (bool ok) {\n    if (destination == DTA && units[id].bonded && !dutyPaid[id]) {\n        emit ExemptionBreach(id, destination);\n        return false;\n    }\n    return true;\n}",
        simAction: "Simulate Exit Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Screening exit destination...", tone: "default" },
          { text: "Detecting domestic area without duty...", tone: "default" },
          { text: "Raising exemption breach flag...", tone: "default" },
          { text: "Notifying development commissioner...", tone: "default" },
          { text: "[SUCCESS] Breach flagged for review.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Per-unit exemption tracking is a horizontal capability. Here is how different zone actors put the bonded inventory ledger to work.",
    sectors: [
      { icon: Landmark, title: "Zone Authorities", description: "Reconcile bonded entries, in-zone use, and exits from a verifiable ledger, catching duty leakage automatically instead of auditing manual stock registers after the fact.", assetTypes: ["Bonded Inventory", "Reconciliations", "Breach Flags"] },
      { icon: Factory, title: "SEZ Units", description: "Prove that duty-exempt inputs went into export production with an on-chain trail, discharging obligations cleanly and passing zone audits without paper reconstruction.", assetTypes: ["Duty-Exempt Inputs", "Export Discharges", "Movement Logs"] },
      { icon: Truck, title: "Customs & Enforcement", description: "Verify that goods claiming exemption stayed within the zone's terms, focusing enforcement on flagged breaches rather than routine physical stock checks.", assetTypes: ["Exit Screens", "Duty Records", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy zone management system or capturing movements from unit ERP, Cerulea routes both into one bonded inventory ledger.",
    tracks: [
      {
        title: "Track A: Zone System Bridging",
        description:
          "For SEZ online systems and zone customs. Entry, movement, and exit events are translated into anchored on-chain bonded records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "SEZ Online System", sublabel: "Zone & Customs Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Bonded Inventory Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Unit ERP Capture",
        description:
          "For SEZ manufacturing units. A signed connector records each bonded movement and consumption from the unit's ERP and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Unit ERP / Wallet", sublabel: "Manufacturer Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Inventory Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Bonded Unit Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an SEZ inventory network with bonded tracking, export discharge, and breach detection from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Bonded & Exemption Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects zone management integration benchmarks. Wiring unit ERP, building per-unit bonded tracking, and shipping breach detection for an average SEZ network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your bonded and exemption rules into pre-audited WebAssembly binaries and provisions the shared inventory ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "defense-supply-chain-integrity-and-counterfeit-component-prevention",
    icon: Shield,
    eyebrow: "Defense Provenance Engine",
    headline1: "Attest every component.",
    headline2: "Reject every counterfeit.",
    heroDescription:
      "Stand up a highly permissioned defense supply chain with hardware attestation, tamper-proof provenance, and automated batch recall. Traceability Ledger, Device Attestation, and Provenance Notary anchor the core, so counterfeit components are detected at goods-in with cryptographic certainty and every critical part traces to its verified manufacturer.",
    heroCta: "Deploy Defense Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a counterfeit-vulnerable procurement chain into a hardware-attested provenance record with cryptographic goods-in checks.",
    mechanics: [
      { title: "Hardware Attestation", description: "Bind parts to silicon. The Device Attestation module ties each component to a hardware root of trust, so a part's identity is proven by the chip itself, not a printed label." },
      { title: "Verified Manufacturer", description: "Anchor genuine origin. The Provenance Notary records the authorized manufacturer for each component, making an unlisted or spoofed source detectable at receipt." },
      { title: "Goods-In Verification", description: "Reject fakes at the door. Every component is verified against its attestation and provenance at goods-in, so counterfeits fail the check before entering the chain." },
      { title: "Permissioned Access", description: "Lock the network down. Only credentialed defense entities can write or read, keeping the supply chain highly permissioned and shielded from open exposure." },
      { title: "In-Service Traceability", description: "Trace every fielded part. The Traceability Ledger links each installed component to its assembly and platform, so any part in service can be traced to its verified maker." },
      { title: "Automated Batch Recall", description: "Isolate a bad batch instantly. When a defect or counterfeit is found, the ledger identifies every affected component and platform in seconds for targeted recall." },
    ],
    lifecycleTitle: "The Component Lifecycle",
    lifecycleSubtitle:
      "Follow a single component from attested manufacture through goods-in verification to in-service traceability and recall.",
    lifecycleSteps: [
      {
        label: "Attested Manufacture",
        description:
          "An authorized manufacturer produces a component and binds it to a hardware root of trust. The contract anchors its attestation and verified origin.",
        icon: Cpu,
        logFilename: "cerulea_defense.log",
        logLines: [
          { text: "[SYS] Anchoring component attestation...", time: "07:40:11", tone: "default" },
          { text: "[CMD] attest { part: \"RF_MODULE_88\", mfr: \"OEM_0x12\", hw: 0x9a...c2 }", time: "07:40:11", tone: "primary" },
          { text: "[AUTH] Verifying manufacturer credential and root key...", time: "07:40:12", tone: "secondary" },
          { text: "[OK] Attestation anchored at block 6112233.", time: "07:40:12", tone: "success" },
        ],
      },
      {
        label: "Goods-In Verification",
        description:
          "At receipt, the component is checked against its attestation and provenance. A counterfeit or spoofed part fails the cryptographic check and is rejected.",
        icon: ShieldCheck,
        logFilename: "cerulea_defense.log",
        logLines: [
          { text: "[SYS] Verifying component at goods-in...", time: "10:15:30", tone: "default" },
          { text: "[CMD] verifyGoodsIn(RF_MODULE_88)", time: "10:15:31", tone: "primary" },
          { text: "[SYS] Hardware attestation matches anchor.", time: "10:15:31", tone: "default" },
          { text: "[OK] Genuine part confirmed. Accepted.", time: "10:15:32", tone: "success" },
        ],
      },
      {
        label: "Installation Trace",
        description:
          "The component is installed into an assembly and platform. The ledger links it to its parent assembly, so its location in service is always traceable.",
        icon: Workflow,
        logFilename: "cerulea_defense.log",
        logLines: [
          { text: "[SYS] Linking component to platform...", time: "14:05:41", tone: "default" },
          { text: "[CMD] install(RF_MODULE_88, platform: \"RADAR_UNIT_7\")", time: "14:05:41", tone: "primary" },
          { text: "[AUTH] Recording assembly linkage...", time: "14:05:42", tone: "secondary" },
          { text: "[OK] Component traceable to fielded platform.", time: "14:05:42", tone: "success" },
        ],
      },
      {
        label: "Batch Recall",
        description:
          "A defect is discovered in a component batch. The ledger isolates every affected part and platform instantly, enabling a targeted recall instead of a broad grounding.",
        icon: Zap,
        logFilename: "cerulea_defense.log",
        logLines: [
          { text: "[SYS] Defect reported in batch B_2291...", time: "16:30:47", tone: "default" },
          { text: "[CMD] recallBatch(B_2291)", time: "16:30:47", tone: "primary" },
          { text: "[SYS] Tracing 214 affected components and platforms.", time: "16:30:48", tone: "error" },
          { text: "[OK] Recall list generated. Targeted action ready.", time: "16:30:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the defense supply chain into modular contracts. Each layer attests, verifies, traces, and recalls a component without exposing the network beyond credentialed entities.",
    layers: [
      {
        title: "Attestation Ledger",
        subtitle: "The Hardware Root",
        icon: Cpu,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Hardware Root",
          description:
            "The foundational layer. It binds each component to a hardware root of trust and its authorized manufacturer, so a part's identity is proven by silicon rather than a forgeable label.",
          platformFunction: "Device Attestation",
        },
        codeSnippet:
          "contract AttestationLedger {\n  struct Component {\n    bytes32 partId;\n    address manufacturer;\n    bytes32 hwRoot;\n    bytes32 batch;\n    bool genuine;\n  }\n\n  mapping(bytes32 => Component) public components;\n\n  function attest(bytes32 partId, bytes32 hwRoot, bytes32 batch) external onlyAuthorizedMfr {\n    components[partId] = Component(partId, msg.sender, hwRoot, batch, true);\n  }\n}",
        simAction: "Simulate Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying manufacturer credential...", tone: "default" },
          { text: "Reading hardware root key...", tone: "default" },
          { text: "Binding part to silicon identity...", tone: "default" },
          { text: "Writing attestation to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Component attested on-chain.", tone: "success" },
        ],
      },
      {
        title: "Goods-In Verifier",
        subtitle: "The Counterfeit Gate",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Counterfeit Gate",
          description:
            "Stops fakes at receipt. It checks each incoming part against its hardware attestation and verified provenance, so a spoofed or unlisted component fails the cryptographic check before it enters the chain.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function verifyGoodsIn(bytes32 partId, bytes32 presentedRoot) external view returns (bool) {\n    Component memory c = components[partId];\n    return c.genuine && c.hwRoot == presentedRoot && authorized[c.manufacturer];\n}",
        simAction: "Simulate Goods-In Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading presented hardware root...", tone: "default" },
          { text: "Comparing to anchored attestation...", tone: "default" },
          { text: "Confirming manufacturer authorized...", tone: "default" },
          { text: "Roots match, provenance genuine...", tone: "default" },
          { text: "[SUCCESS] Genuine component accepted.", tone: "success" },
        ],
      },
      {
        title: "Traceability Graph",
        subtitle: "The Assembly Map",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Assembly Map",
          description:
            "Keeps every fielded part locatable. It links each component to its parent assembly and platform, so any part in service can be traced to its verified manufacturer and its position in the field.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function install(bytes32 partId, bytes32 platform) external onlyDepot {\n    require(components[partId].genuine, \"Not verified\");\n    assemblyOf[partId] = platform;\n    platformParts[platform].push(partId);\n    emit Installed(partId, platform);\n}",
        simAction: "Simulate Installation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming component verified genuine...", tone: "default" },
          { text: "Linking to platform RADAR_UNIT_7...", tone: "default" },
          { text: "Appending to platform parts list...", tone: "default" },
          { text: "Recording assembly linkage...", tone: "default" },
          { text: "[SUCCESS] Component traceable in service.", tone: "success" },
        ],
      },
      {
        title: "Recall Engine",
        subtitle: "The Batch Isolator",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Batch Isolator",
          description:
            "Turns a defect into a targeted action. It resolves a flagged batch to every affected component and platform in one query, enabling precise recall instead of grounding an entire fleet on suspicion.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function recallBatch(bytes32 batch) external onlyAuthority returns (bytes32[] memory affected) {\n    affected = batchComponents[batch];\n    for (uint i; i < affected.length; i++) {\n        emit RecallFlagged(affected[i], assemblyOf[affected[i]]);\n    }\n}",
        simAction: "Simulate Batch Recall",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Defect reported in batch B_2291...", tone: "default" },
          { text: "Resolving all components in batch...", tone: "default" },
          { text: "Mapping each to its platform...", tone: "default" },
          { text: "Generating targeted recall list...", tone: "default" },
          { text: "[SUCCESS] 214 affected parts isolated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Hardware-attested provenance is a horizontal capability. Here is how different defense actors put the permissioned supply chain to work.",
    sectors: [
      { icon: Shield, title: "Defense Procurement", description: "Reject counterfeit components at goods-in with cryptographic certainty, closing the gap that printed certificates and visual inspection leave open.", assetTypes: ["Attested Components", "Goods-In Checks", "Rejection Records"] },
      { icon: Factory, title: "Defense Manufacturers", description: "Prove genuine origin for every part they supply through hardware attestation, protecting their reputation and clearing acceptance without dispute.", assetTypes: ["Manufacturer Attestations", "Batch Records", "Provenance Proofs"] },
      { icon: Cpu, title: "Maintenance & Depots", description: "Trace every in-service component to its verified manufacturer and isolate defective batches instantly, replacing broad groundings with targeted recalls.", assetTypes: ["Installation Records", "Platform Maps", "Recall Lists"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy defense ERP or capturing attestations from manufacturing lines, Cerulea routes both into one permissioned provenance ledger.",
    tracks: [
      {
        title: "Track A: Defense ERP Bridging",
        description:
          "For defense procurement and depot ERP systems. Component and installation events are translated into attested on-chain records through the API gateway within a permissioned network.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Defense ERP / PLM", sublabel: "Procurement & Depot Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Attestation Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Permissioned Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Line Attestation Capture",
        description:
          "For manufacturing lines and depots. A hardware-signed device attests each component from the production line and routes it directly to the permissioned ledger.",
        connectorLabels: ["HARDWARE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Line Attestation Device", sublabel: "Manufacturer Endpoints", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Component Provenance Record", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a permissioned defense supply chain with hardware attestation, goods-in verification, and automated batch recall from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attestation & Recall Rules",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects defense-grade supply chain integration benchmarks. Wiring hardware attestation, building goods-in verification, and shipping automated batch recall for an average permissioned network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attestation and recall rules into pre-audited WebAssembly binaries and provisions the permissioned provenance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "veteran-pension-and-benefits-disbursement-tracking",
    icon: Wallet,
    eyebrow: "Veteran Disbursement Engine",
    headline1: "Honour every entitlement.",
    headline2: "Track every payment.",
    heroDescription:
      "Deploy a verified disbursement record for veteran pensions and benefits, reducing delays and errors in payments to former service members. Cerulea Studio assembles it from Civil Registry, Escrow and Conditional Settlement, and Notifications, linking a veteran's verified service record to their disbursement so entitlements are calculated correctly and tracked end to end.",
    heroCta: "Deploy Pension Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Link a verified service record to disbursement so pensions are calculated right and paid without disconnected-system delays.",
    mechanics: [
      { title: "Service Record Link", description: "Anchor the entitlement basis. The Civil Registry binds a veteran's verified service record to their pension account, so entitlement rests on confirmed service, not re-keyed data." },
      { title: "Entitlement Calculation", description: "Compute benefits correctly. Rank, service length, and disability status drive a deterministic entitlement calculation, removing the errors that manual reconciliation introduces." },
      { title: "Conditional Disbursement", description: "Pay against verified status. Escrow and Conditional Settlement releases each payment only when eligibility conditions hold, blocking erroneous or lapsed disbursements." },
      { title: "End-to-End Tracking", description: "Follow every payment. Each disbursement stage is recorded, so a delayed or failed payment is visible and traceable rather than lost between agencies." },
      { title: "Veteran Visibility", description: "Show the veteran their status. The former service member can see their own entitlement and disbursement status, ending uncertainty about where a payment stands." },
      { title: "Life-Event Notifications", description: "React to changes fast. Notifications flag service, disability, or survivor status changes that affect entitlement, so records update without long back-office lag." },
    ],
    lifecycleTitle: "The Disbursement Lifecycle",
    lifecycleSubtitle:
      "Follow a single veteran from service-record linkage through entitlement calculation to conditional, tracked disbursement.",
    lifecycleSteps: [
      {
        label: "Record Linkage",
        description:
          "A veteran's verified service record is linked to their pension account. The contract anchors the entitlement basis on confirmed service data.",
        icon: IdCard,
        logFilename: "cerulea_veteran.log",
        logLines: [
          { text: "[SYS] Linking service record to pension account...", time: "08:20:11", tone: "default" },
          { text: "[CMD] linkService { vet: \"VET_7742\", rank: \"SUB_MAJ\", years: 24 }", time: "08:20:11", tone: "primary" },
          { text: "[AUTH] Verifying service record from defense registry...", time: "08:20:12", tone: "secondary" },
          { text: "[OK] Entitlement basis anchored at block 6212233.", time: "08:20:12", tone: "success" },
        ],
      },
      {
        label: "Entitlement Calc",
        description:
          "The contract computes the veteran's entitlement from rank, service length, and disability status, producing a deterministic benefit figure.",
        icon: Scale,
        logFilename: "cerulea_veteran.log",
        logLines: [
          { text: "[SYS] Calculating pension entitlement...", time: "10:44:30", tone: "default" },
          { text: "[CMD] calcEntitlement(VET_7742)", time: "10:44:31", tone: "primary" },
          { text: "[SYS] Applying rank, tenure, and disability factors.", time: "10:44:31", tone: "default" },
          { text: "[OK] Monthly entitlement computed deterministically.", time: "10:44:32", tone: "success" },
        ],
      },
      {
        label: "Conditional Payment",
        description:
          "Escrow releases the monthly disbursement only when eligibility conditions hold, blocking erroneous payment when status has changed.",
        icon: Wallet,
        logFilename: "cerulea_veteran.log",
        logLines: [
          { text: "[SYS] Processing monthly disbursement...", time: "09:00:00", tone: "default" },
          { text: "[CMD] disburse(VET_7742, period: \"2026-09\")", time: "09:00:00", tone: "primary" },
          { text: "[AUTH] Confirming eligibility conditions hold...", time: "09:00:01", tone: "secondary" },
          { text: "[OK] Payment released and tracked to account.", time: "09:00:01", tone: "success" },
        ],
      },
      {
        label: "Status Update",
        description:
          "A life-event change is reported and notified. The record updates so future entitlement reflects the new status without long reconciliation lag.",
        icon: Zap,
        logFilename: "cerulea_veteran.log",
        logLines: [
          { text: "[SYS] Processing reported status change...", time: "14:12:47", tone: "default" },
          { text: "[CMD] updateStatus(VET_7742, event: \"DISABILITY_REVISED\")", time: "14:12:47", tone: "primary" },
          { text: "[SYS] Notifying disbursing agency and veteran.", time: "14:12:48", tone: "default" },
          { text: "[OK] Entitlement recalculated for next cycle.", time: "14:12:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes veteran disbursement into modular contracts. Each layer links, calculates, pays, and updates without records drifting apart between defense and pension systems.",
    layers: [
      {
        title: "Service Registry",
        subtitle: "The Entitlement Basis",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Entitlement Basis",
          description:
            "The foundational layer. It binds a veteran's verified service record to their pension account, so entitlement is grounded in confirmed defense-registry data rather than re-keyed figures.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ServiceRegistry {\n  struct Veteran {\n    bytes32 id;\n    bytes32 rank;\n    uint16 serviceYears;\n    uint8 disabilityPct;\n    bool active;\n  }\n\n  mapping(bytes32 => Veteran) public veterans;\n\n  function link(bytes32 id, bytes32 rank, uint16 years, uint8 disability) external onlyDefenseRegistry {\n    veterans[id] = Veteran(id, rank, years, disability, true);\n  }\n}",
        simAction: "Simulate Record Linkage",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying service record from registry...", tone: "default" },
          { text: "Binding rank and tenure to account...", tone: "default" },
          { text: "Recording disability percentage...", tone: "default" },
          { text: "Writing veteran to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Entitlement basis anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Entitlement Engine",
        subtitle: "The Benefit Calculator",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Benefit Calculator",
          description:
            "Removes calculation error. It computes entitlement deterministically from rank, service length, and disability status, replacing the manual reconciliation that produces incorrect or inconsistent pension figures.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function calcEntitlement(bytes32 id) public view returns (uint256 monthly) {\n    Veteran memory v = veterans[id];\n    monthly = baseByRank[v.rank] + v.serviceYears * yearFactor;\n    monthly += (monthly * v.disabilityPct) / 100;\n}",
        simAction: "Simulate Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading rank base entitlement...", tone: "default" },
          { text: "Adding service-length factor...", tone: "default" },
          { text: "Applying disability uplift...", tone: "default" },
          { text: "Producing deterministic figure...", tone: "default" },
          { text: "[SUCCESS] Entitlement computed correctly.", tone: "success" },
        ],
      },
      {
        title: "Disbursement Escrow",
        subtitle: "The Conditional Payer",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Payer",
          description:
            "Pays only when eligibility holds. Escrow and Conditional Settlement releases each disbursement against current status and tracks it to the account, blocking erroneous or lapsed payments and eliminating silent failures.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function disburse(bytes32 id, bytes32 period) external onlyAgency {\n    require(veterans[id].active, \"Not eligible\");\n    uint256 amt = calcEntitlement(id);\n    payments[id][period] = Payment(amt, block.timestamp, true);\n    emit Disbursed(id, period, amt);\n}",
        simAction: "Simulate Disbursement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming veteran eligibility active...", tone: "default" },
          { text: "Computing period entitlement...", tone: "default" },
          { text: "Releasing conditional payment...", tone: "default" },
          { text: "Tracking disbursement to account...", tone: "default" },
          { text: "[SUCCESS] Payment released and tracked.", tone: "success" },
        ],
      },
      {
        title: "Status Notifier",
        subtitle: "The Life-Event Sync",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Life-Event Sync",
          description:
            "Keeps entitlement current. It records reported status changes and notifies the agency and veteran, so disability revisions and survivor events update entitlement without long back-office reconciliation lag.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function updateStatus(bytes32 id, bytes32 event, uint8 newDisability) external onlyVerifier {\n    veterans[id].disabilityPct = newDisability;\n    emit StatusUpdated(id, event, block.timestamp);\n    _notify(id, event);\n}",
        simAction: "Simulate Status Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording reported disability revision...", tone: "default" },
          { text: "Updating veteran status...", tone: "default" },
          { text: "Notifying disbursing agency...", tone: "default" },
          { text: "Notifying veteran of change...", tone: "default" },
          { text: "[SUCCESS] Entitlement synced for next cycle.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified disbursement tracking is a horizontal capability. Here is how different actors put the veteran pension ledger to work.",
    sectors: [
      { icon: Landmark, title: "Pension Agencies", description: "Calculate and pay entitlements from verified service data, cutting the errors and delays that arise when defense and pension systems hold disconnected records.", assetTypes: ["Entitlement Records", "Disbursements", "Status Updates"] },
      { icon: Shield, title: "Defense Establishments", description: "Feed verified service and disability records into a shared ledger, so a veteran's entitlement basis is confirmed once and trusted downstream.", assetTypes: ["Service Records", "Disability Certifications", "Survivor Records"] },
      { icon: Users, title: "Veterans & Families", description: "See entitlement and disbursement status directly, ending uncertainty about delayed payments and giving survivors a clear view of benefits.", assetTypes: ["Entitlement Views", "Payment Histories", "Benefit Statuses"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy pension disbursement systems or capturing status updates from defense records, Cerulea routes both into one verified disbursement ledger.",
    tracks: [
      {
        title: "Track A: Pension System Bridging",
        description:
          "For pension and defense record systems. Service and disbursement events are translated into anchored on-chain entitlement records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Pension & Defense Systems", sublabel: "Disbursing Agency Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Disbursement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Veteran App Access",
        description:
          "For veterans checking their benefits. A signed app lets a veteran view entitlement and status from their device against the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Veteran App / Wallet", sublabel: "Former Service Members", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Disbursement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Benefit Record", icon: Wallet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a veteran disbursement network with service linkage, deterministic entitlement, and conditional payment from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Entitlement & Payment Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects pension disbursement integration benchmarks. Wiring service and pension systems, building deterministic entitlement logic, and shipping conditional disbursement for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your entitlement and payment rules into pre-audited WebAssembly binaries and provisions the shared disbursement ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "military-equipment-maintenance-lifecycle-records",
    icon: Workflow,
    eyebrow: "Equipment Lifecycle Engine",
    headline1: "Log every service.",
    headline2: "Across every depot.",
    heroDescription:
      "Build a complete maintenance history for military equipment, from manufacture through every service and repair, accessible only to authorized personnel. The Device Attestation, Traceability Ledger, and Compliance Attestations modules carry the core, giving maintenance crews an accurate record regardless of which depot last serviced a platform.",
    heroCta: "Deploy Lifecycle Records",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fragmented depot logbooks into one access-controlled maintenance history that follows the equipment, not the depot.",
    mechanics: [
      { title: "Equipment Identity", description: "Anchor the platform. Device Attestation binds each piece of equipment to a hardware identity at manufacture, so its maintenance history attaches to a proven asset, not a serial written on paper." },
      { title: "Cross-Depot History", description: "Follow the equipment. The Traceability Ledger records every service event across depots and units, so the full history travels with the platform regardless of location." },
      { title: "Service Attestation", description: "Sign every job. Compliance Attestations bind each maintenance action to the crew and parts used, making the record of what was done verifiable rather than a handwritten note." },
      { title: "Parts Provenance", description: "Track fitted parts. Each replacement component is linked to the equipment, so a later defect or recall can be traced to the exact platform it was installed on." },
      { title: "Access Control", description: "Restrict by role. Only authorized personnel can read or write, keeping the maintenance history within a permissioned network shielded from open exposure." },
      { title: "Readiness Signals", description: "Support fleet decisions. Overdue services and repeat faults surface from the record, informing readiness and safety decisions with accurate maintenance data." },
    ],
    lifecycleTitle: "The Maintenance Lifecycle",
    lifecycleSubtitle:
      "Follow a single platform from attested manufacture through cross-depot servicing to a verifiable readiness view.",
    lifecycleSteps: [
      {
        label: "Equipment Onboarding",
        description:
          "A platform is registered at manufacture with a hardware identity. The contract anchors it as the root of an access-controlled maintenance history.",
        icon: Cpu,
        logFilename: "cerulea_maint.log",
        logLines: [
          { text: "[SYS] Onboarding equipment platform...", time: "07:30:11", tone: "default" },
          { text: "[CMD] onboard { asset: \"VEH_7742\", type: \"ARV\", hw: 0x71...c9 }", time: "07:30:11", tone: "primary" },
          { text: "[AUTH] Binding hardware identity to asset...", time: "07:30:12", tone: "secondary" },
          { text: "[OK] Platform anchored at block 6312233.", time: "07:30:12", tone: "success" },
        ],
      },
      {
        label: "Depot Service",
        description:
          "The platform is serviced at a depot. The crew records the maintenance action and parts, attested and bound to the equipment's traveling history.",
        icon: Pickaxe,
        logFilename: "cerulea_maint.log",
        logLines: [
          { text: "[SYS] Recording depot service event...", time: "11:15:30", tone: "default" },
          { text: "[CMD] logService(VEH_7742, depot: \"DEP_9\", task: \"ENGINE_OH\")", time: "11:15:31", tone: "primary" },
          { text: "[SYS] Attesting crew signature and parts used.", time: "11:15:31", tone: "default" },
          { text: "[OK] Service logged to traveling history.", time: "11:15:32", tone: "success" },
        ],
      },
      {
        label: "Parts Fitment",
        description:
          "A replacement part is fitted and linked to the platform. Its provenance is recorded so a later defect can be traced to this exact equipment.",
        icon: Boxes,
        logFilename: "cerulea_maint.log",
        logLines: [
          { text: "[SYS] Linking fitted part to platform...", time: "13:40:41", tone: "default" },
          { text: "[CMD] fitPart(VEH_7742, part: \"GEARBOX_221\")", time: "13:40:41", tone: "primary" },
          { text: "[AUTH] Recording part provenance and batch...", time: "13:40:42", tone: "secondary" },
          { text: "[OK] Part fitment linked and traceable.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Readiness View",
        description:
          "A maintenance officer queries the platform's full history to check overdue services and repeat faults, informing a readiness and safety decision.",
        icon: Activity,
        logFilename: "cerulea_maint.log",
        logLines: [
          { text: "[SYS] Assembling platform maintenance history...", time: "16:05:47", tone: "default" },
          { text: "[CMD] readiness(VEH_7742)", time: "16:05:47", tone: "primary" },
          { text: "[SYS] Flagging 1 overdue service, 0 repeat faults.", time: "16:05:48", tone: "secondary" },
          { text: "[OK] Complete history returned to officer.", time: "16:05:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes equipment maintenance into modular contracts. Each layer onboards, services, fits, and assesses without the history fragmenting across depot logbooks.",
    layers: [
      {
        title: "Equipment Registry",
        subtitle: "The Platform Root",
        icon: Cpu,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Platform Root",
          description:
            "The foundational layer. It binds each platform to a hardware identity at manufacture, so its maintenance history attaches to a proven asset rather than a serial number on a paper logbook.",
          platformFunction: "Device Attestation",
        },
        codeSnippet:
          "contract EquipmentRegistry {\n  struct Asset {\n    bytes32 id;\n    bytes32 assetType;\n    bytes32 hwId;\n    uint256 onboardedAt;\n  }\n\n  mapping(bytes32 => Asset) public assets;\n\n  function onboard(bytes32 id, bytes32 assetType, bytes32 hwId) external onlyDepotAuthority {\n    assets[id] = Asset(id, assetType, hwId, block.timestamp);\n  }\n}",
        simAction: "Simulate Onboarding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading hardware identity...", tone: "default" },
          { text: "Binding to asset VEH_7742...", tone: "default" },
          { text: "Recording equipment type ARV...", tone: "default" },
          { text: "Writing platform to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Platform anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Service Ledger",
        subtitle: "The Traveling History",
        icon: Pickaxe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Traveling History",
          description:
            "Keeps the record with the equipment. Each service event across any depot is appended and attested to the platform, so the full maintenance history follows the asset instead of sitting in one depot's logbook.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function logService(bytes32 id, bytes32 depot, bytes32 task) external onlyAuthorizedCrew {\n    services[id].push(Service(depot, task, msg.sender, block.timestamp));\n    emit Serviced(id, depot, task);\n}",
        simAction: "Simulate Service Log",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying crew authorization...", tone: "default" },
          { text: "Recording engine overhaul at depot 9...", tone: "default" },
          { text: "Attesting crew signature...", tone: "default" },
          { text: "Appending to traveling history...", tone: "default" },
          { text: "[SUCCESS] Service logged across depots.", tone: "success" },
        ],
      },
      {
        title: "Parts Linker",
        subtitle: "The Fitment Trace",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fitment Trace",
          description:
            "Ties parts to platforms. It links each fitted replacement component and its provenance to the equipment, so a later defect or recall traces to the exact platform the part was installed on.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function fitPart(bytes32 id, bytes32 part, bytes32 batch) external onlyAuthorizedCrew {\n    fittedParts[id].push(Part(part, batch, block.timestamp));\n    partToAsset[part] = id;\n    emit PartFitted(id, part, batch);\n}",
        simAction: "Simulate Parts Fitment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording gearbox replacement...", tone: "default" },
          { text: "Linking part to platform VEH_7742...", tone: "default" },
          { text: "Anchoring part provenance and batch...", tone: "default" },
          { text: "Indexing part for recall trace...", tone: "default" },
          { text: "[SUCCESS] Fitted part linked and traceable.", tone: "success" },
        ],
      },
      {
        title: "Readiness Engine",
        subtitle: "The Fleet View",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fleet View",
          description:
            "A permissioned aggregator that assembles a platform's full history and surfaces overdue services and repeat faults, giving maintenance officers accurate data for readiness and safety decisions.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function readiness(bytes32 id) external view returns (uint256 overdue, uint256 repeatFaults) {\n    Service[] memory s = services[id];\n    overdue = _overdueCount(id);\n    repeatFaults = _repeatFaultCount(s);\n}",
        simAction: "Simulate Readiness View",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Officer querying platform history...", tone: "default" },
          { text: "Scanning services for overdue tasks...", tone: "default" },
          { text: "Detecting repeat fault patterns...", tone: "default" },
          { text: "Assembling readiness summary...", tone: "default" },
          { text: "[SUCCESS] Complete history returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Access-controlled maintenance history is a horizontal capability. Here is how different defense actors put the equipment lifecycle ledger to work.",
    sectors: [
      { icon: Pickaxe, title: "Maintenance Depots", description: "Service any platform with its full cross-depot history in hand, so crews never work blind on equipment last serviced elsewhere and every job is attested.", assetTypes: ["Service Records", "Crew Attestations", "Fitment Logs"] },
      { icon: Shield, title: "Fleet Command", description: "Base readiness and safety decisions on accurate maintenance data, spotting overdue services and repeat faults across the fleet from a verifiable record.", assetTypes: ["Readiness Views", "Fault Patterns", "Fleet Histories"] },
      { icon: Boxes, title: "Logistics & Spares", description: "Trace fitted parts to the exact platforms they went into, enabling targeted recall and accurate spares planning from linked provenance data.", assetTypes: ["Part Provenance", "Recall Traces", "Spares Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy depot maintenance systems or capturing service events from handheld crew devices, Cerulea routes both into one access-controlled lifecycle ledger.",
    tracks: [
      {
        title: "Track A: Depot System Bridging",
        description:
          "For existing depot maintenance management systems. Service and parts events are translated into attested on-chain history records through the API gateway within a permissioned network.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Depot MMS / ERP", sublabel: "Maintenance Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Equipment Lifecycle Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Crew Device Capture",
        description:
          "For maintenance crews on handhelds. A credentialed device records each service and fitment from the depot floor and routes it directly to the permissioned ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Crew Handheld / Wallet", sublabel: "Authorized Personnel", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Service Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Maintenance History Record", icon: Workflow, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an equipment lifecycle network with hardware identity, cross-depot history, and readiness views from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Maintenance & Access Rules",
      ruleCount: 45,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects defense maintenance integration benchmarks. Wiring depot systems, building cross-depot history logic, and shipping access-controlled readiness views for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your maintenance and access rules into pre-audited WebAssembly binaries and provisions the shared lifecycle ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "border-outpost-supply-chain-and-inventory-verification",
    icon: Truck,
    eyebrow: "Resupply Verification Engine",
    headline1: "Match every dispatch.",
    headline2: "Across every outpost.",
    heroDescription:
      "Run a verified inventory and resupply record for remote border outposts, ensuring supplies dispatched match supplies received despite difficult logistics. The Traceability Ledger, Provenance Notary, and Audit Logs modules carry the core, anchoring dispatch and receipt confirmations so logistics command sees any discrepancy along the chain.",
    heroCta: "Deploy Resupply Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn isolated outpost logbooks into a dispatch-to-receipt record that flags discrepancies despite remote, low-connectivity terrain.",
    mechanics: [
      { title: "Dispatch Anchoring", description: "Seal what leaves the depot. The Traceability Ledger records each resupply shipment's contents and quantities at dispatch, fixing the baseline the outpost receipt is checked against." },
      { title: "Receipt Confirmation", description: "Confirm what arrives. The receiving outpost signs the actual quantities received, so dispatch and receipt are matched rather than assumed equal." },
      { title: "Discrepancy Flagging", description: "Catch shortfalls fast. Any gap between dispatched and received quantities is flagged to logistics command, surfacing losses that isolation would otherwise hide for weeks." },
      { title: "Offline Signing", description: "Work without connectivity. Confirmations can be signed offline at the outpost and synced when a link is available, so remote terrain does not break the record." },
      { title: "Provenance of Stores", description: "Track critical stores. The Provenance Notary anchors fuel, food, and equipment batches, so contaminated or defective stores can be traced to their source." },
      { title: "Command Visibility", description: "Give logistics one view. Audit Logs assemble every dispatch and receipt into a command-level view of resupply health across all outposts." },
    ],
    lifecycleTitle: "The Resupply Lifecycle",
    lifecycleSubtitle:
      "Follow a single resupply shipment from depot dispatch through remote receipt to a matched or flagged reconciliation.",
    lifecycleSteps: [
      {
        label: "Depot Dispatch",
        description:
          "A supply depot dispatches a resupply shipment. The contract anchors the contents and quantities as the baseline for reconciliation at the outpost.",
        icon: Package,
        logFilename: "cerulea_resupply.log",
        logLines: [
          { text: "[SYS] Anchoring resupply dispatch...", time: "05:40:11", tone: "default" },
          { text: "[CMD] dispatch { ship: \"RSP_7742\", outpost: \"OP_14\", fuel: 4000, rations: 900 }", time: "05:40:11", tone: "primary" },
          { text: "[AUTH] Verifying depot officer credential...", time: "05:40:12", tone: "secondary" },
          { text: "[OK] Dispatch anchored at block 6412233.", time: "05:40:12", tone: "success" },
        ],
      },
      {
        label: "Transit Tracking",
        description:
          "The shipment moves over difficult terrain toward the outpost. Handoffs at intermediate points are recorded, keeping the shipment traceable in transit.",
        icon: Truck,
        logFilename: "cerulea_resupply.log",
        logLines: [
          { text: "[SYS] Recording transit handoff...", time: "09:22:30", tone: "default" },
          { text: "[CMD] handoff(RSP_7742, point: \"FWD_BASE_3\")", time: "09:22:31", tone: "primary" },
          { text: "[SYS] Shipment traceable at forward base.", time: "09:22:31", tone: "default" },
          { text: "[OK] Handoff logged. In transit to OP_14.", time: "09:22:32", tone: "success" },
        ],
      },
      {
        label: "Outpost Receipt",
        description:
          "The outpost signs the actual quantities received, offline if needed, and syncs the confirmation. Dispatch and receipt are now matched.",
        icon: FileCheck,
        logFilename: "cerulea_resupply.log",
        logLines: [
          { text: "[SYS] Syncing offline outpost receipt...", time: "18:05:41", tone: "default" },
          { text: "[CMD] confirmReceipt(RSP_7742, fuel: 3850, rations: 900)", time: "18:05:41", tone: "primary" },
          { text: "[AUTH] Matching receipt against dispatch...", time: "18:05:42", tone: "secondary" },
          { text: "[OK] Receipt recorded. Fuel short by 150.", time: "18:05:42", tone: "success" },
        ],
      },
      {
        label: "Discrepancy Flag",
        description:
          "The fuel shortfall is flagged to logistics command for investigation, surfacing a loss that outpost isolation would otherwise have hidden.",
        icon: Shield,
        logFilename: "cerulea_resupply.log",
        logLines: [
          { text: "[SYS] Reconciling dispatch and receipt...", time: "18:06:10", tone: "default" },
          { text: "[CMD] reconcile(RSP_7742)", time: "18:06:10", tone: "primary" },
          { text: "[SYS] Fuel discrepancy of 150 units detected.", time: "18:06:11", tone: "error" },
          { text: "[OK] Discrepancy flagged to logistics command.", time: "18:06:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes outpost resupply into modular contracts. Each layer dispatches, tracks, confirms, and reconciles without the record breaking over remote, low-connectivity terrain.",
    layers: [
      {
        title: "Dispatch Registry",
        subtitle: "The Baseline Manifest",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Baseline Manifest",
          description:
            "The foundational layer. It anchors each shipment's contents and quantities at dispatch, fixing the immutable baseline that the outpost's receipt confirmation is reconciled against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract DispatchRegistry {\n  struct Shipment {\n    bytes32 id;\n    bytes32 outpost;\n    bytes32 manifestHash;\n    uint256 dispatchedAt;\n    bool received;\n  }\n\n  mapping(bytes32 => Shipment) public shipments;\n\n  function dispatch(bytes32 id, bytes32 outpost, bytes32 manifest) external onlyDepot {\n    shipments[id] = Shipment(id, outpost, manifest, block.timestamp, false);\n  }\n}",
        simAction: "Simulate Dispatch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying depot officer credential...", tone: "default" },
          { text: "Hashing shipment manifest...", tone: "default" },
          { text: "Fixing dispatch baseline for OP_14...", tone: "default" },
          { text: "Writing shipment to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Dispatch anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Transit Tracker",
        subtitle: "The Terrain Trail",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Terrain Trail",
          description:
            "Keeps shipments traceable in hard country. It records handoffs at intermediate forward points, so a shipment's progress toward a remote outpost stays visible even across difficult logistics.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function handoff(bytes32 id, bytes32 point) external onlyTransitAuthority {\n    require(!shipments[id].received, \"Delivered\");\n    transit[id].push(Handoff(point, block.timestamp));\n    emit Handoff(id, point);\n}",
        simAction: "Simulate Handoff",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Shipment reaching forward base 3...", tone: "default" },
          { text: "Confirming not yet delivered...", tone: "default" },
          { text: "Recording transit handoff...", tone: "default" },
          { text: "Appending to terrain trail...", tone: "default" },
          { text: "[SUCCESS] Handoff logged in transit.", tone: "success" },
        ],
      },
      {
        title: "Receipt Notary",
        subtitle: "The Offline Confirm",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Offline Confirm",
          description:
            "Works where connectivity does not. The outpost signs actual received quantities offline and syncs later, binding a verifiable receipt to the shipment so dispatch and delivery are matched rather than assumed.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function confirmReceipt(bytes32 id, bytes32 receivedHash, bytes calldata sig) external {\n    require(_verifyOutpost(shipments[id].outpost, sig), \"Bad signer\");\n    receipts[id] = Receipt(receivedHash, block.timestamp);\n    shipments[id].received = true;\n    emit ReceiptConfirmed(id);\n}",
        simAction: "Simulate Receipt",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Syncing offline outpost signature...", tone: "default" },
          { text: "Verifying outpost signer...", tone: "default" },
          { text: "Recording received quantities...", tone: "default" },
          { text: "Binding receipt to shipment...", tone: "default" },
          { text: "[SUCCESS] Receipt confirmed and synced.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation Engine",
        subtitle: "The Discrepancy Finder",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Discrepancy Finder",
          description:
            "Surfaces losses isolation would hide. It compares dispatched against received quantities and flags any gap to logistics command, giving visibility into shortfalls along the chain to remote outposts.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function reconcile(bytes32 id) external view returns (bool matched, int256 delta) {\n    delta = int256(dispatchedQty[id]) - int256(receivedQty[id]);\n    matched = delta == 0;\n}",
        simAction: "Simulate Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Comparing dispatch to receipt...", tone: "default" },
          { text: "Computing fuel quantity delta...", tone: "default" },
          { text: "Detecting 150-unit shortfall...", tone: "default" },
          { text: "Flagging discrepancy to command...", tone: "default" },
          { text: "[SUCCESS] Discrepancy surfaced to logistics.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Dispatch-to-receipt verification is a horizontal capability. Here is how different logistics actors put the resupply ledger to work.",
    sectors: [
      { icon: Shield, title: "Logistics Command", description: "See resupply health across all outposts from one verifiable view, catching shortfalls and losses that isolation would otherwise hide for weeks.", assetTypes: ["Dispatch Records", "Discrepancy Flags", "Resupply Views"] },
      { icon: Package, title: "Supply Depots", description: "Anchor exactly what was dispatched, so accountability for a shortfall rests on a signed baseline rather than a contested handwritten manifest.", assetTypes: ["Shipment Manifests", "Dispatch Baselines", "Store Provenance"] },
      { icon: Truck, title: "Forward Outposts", description: "Confirm received quantities even offline, protecting the outpost from being charged for supplies that never arrived and syncing when connectivity returns.", assetTypes: ["Receipt Confirmations", "Offline Signatures", "Stock Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy logistics system or capturing receipts from offline outpost devices, Cerulea routes both into one verified resupply ledger.",
    tracks: [
      {
        title: "Track A: Logistics System Bridging",
        description:
          "For depot and command logistics systems. Dispatch and reconciliation events are translated into anchored on-chain resupply records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Logistics System", sublabel: "Depot & Command Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Resupply Verification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Offline Outpost Capture",
        description:
          "For remote outposts with intermittent connectivity. A device signs each receipt offline and syncs it to the ledger when a link is available.",
        connectorLabels: ["OFFLINE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Outpost Device / Wallet", sublabel: "Forward Personnel", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Receipt Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Resupply Record", icon: Truck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a resupply network with dispatch anchoring, offline receipts, and discrepancy reconciliation from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Dispatch & Receipt Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects defense logistics integration benchmarks. Wiring depot systems, building offline receipt handling, and shipping discrepancy reconciliation for an average resupply network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your dispatch and receipt rules into pre-audited WebAssembly binaries and provisions the shared resupply ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "industrial-emission-permit-issuance-and-compliance-monitoring",
    icon: Factory,
    eyebrow: "Emissions Compliance Engine",
    headline1: "Anchor every reading.",
    headline2: "Detect every exceedance.",
    heroDescription:
      "Deliver a private emissions compliance chain with IoT oracle data anchoring, lab certification, operator attestations, and real-time regulatory oversight. Carbon Credits MRV and Registry, Provenance Notary, and Oracle Feeds anchor the core, so regulators detect permit exceedances in real time and operators cannot retroactively alter emissions records.",
    heroCta: "Deploy Emissions Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn self-reported annual emissions into a continuously monitored record regulators can act on in real time.",
    mechanics: [
      { title: "Permit Anchoring", description: "Seal the limits. Each facility's permit and its pollutant thresholds are anchored on-chain, fixing the compliance ceiling that live readings are checked against." },
      { title: "IoT Oracle Feeds", description: "Stream real emissions. Oracle Feeds anchor continuous emissions readings from facility sensors, replacing self-reported annual figures with a live, tamper-evident data stream." },
      { title: "Lab Certification", description: "Corroborate with samples. The Provenance Notary anchors accredited lab test results against the facility, cross-checking sensor data with independent certification." },
      { title: "Real-Time Exceedance", description: "Flag breaches instantly. When a reading crosses the permitted limit, the contract flags the exceedance to the regulator as it happens, not months later at inspection." },
      { title: "Tamper-Proof History", description: "Lock the record. The Carbon Credits MRV and Registry module keeps emissions history immutable, so an operator cannot retroactively alter readings to hide a breach." },
      { title: "Operator Attestation", description: "Bind accountability. Operator attestations sign off periods and corrective actions, tying compliance status to a named, verifiable responsible party." },
    ],
    lifecycleTitle: "The Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a single facility from permit anchoring through live oracle monitoring to real-time exceedance flagging.",
    lifecycleSteps: [
      {
        label: "Permit Issuance",
        description:
          "A facility's emission permit is issued and anchored. The contract fixes the pollutant limits that continuous readings will be measured against.",
        icon: FileCheck,
        logFilename: "cerulea_emission.log",
        logLines: [
          { text: "[SYS] Anchoring emission permit...", time: "08:10:11", tone: "default" },
          { text: "[CMD] issuePermit { facility: \"PLANT_88\", so2: 80, pm: 50 }", time: "08:10:11", tone: "primary" },
          { text: "[AUTH] Verifying pollution board authorization...", time: "08:10:12", tone: "secondary" },
          { text: "[OK] Permit limits anchored at block 6512233.", time: "08:10:12", tone: "success" },
        ],
      },
      {
        label: "Oracle Monitoring",
        description:
          "Facility sensors stream emissions readings through oracle feeds. Each reading is anchored, building a continuous tamper-evident record.",
        icon: Radio,
        logFilename: "cerulea_emission.log",
        logLines: [
          { text: "[SYS] Ingesting IoT emissions oracle feed...", time: "10:45:30", tone: "default" },
          { text: "[CMD] anchorReading(PLANT_88, so2: 62, pm: 41)", time: "10:45:31", tone: "primary" },
          { text: "[SYS] Reading within permitted limits.", time: "10:45:31", tone: "default" },
          { text: "[OK] Reading anchored. Compliance nominal.", time: "10:45:32", tone: "success" },
        ],
      },
      {
        label: "Lab Corroboration",
        description:
          "An accredited lab test result is anchored against the facility, cross-checking the sensor stream with independent certified sampling.",
        icon: FlaskConical,
        logFilename: "cerulea_emission.log",
        logLines: [
          { text: "[SYS] Anchoring accredited lab result...", time: "13:20:41", tone: "default" },
          { text: "[CMD] anchorLab(PLANT_88, lab: \"NABL_221\", so2: 64)", time: "13:20:41", tone: "primary" },
          { text: "[AUTH] Cross-checking lab against sensor stream...", time: "13:20:42", tone: "secondary" },
          { text: "[OK] Lab result corroborates sensor data.", time: "13:20:42", tone: "success" },
        ],
      },
      {
        label: "Exceedance Flag",
        description:
          "A reading crosses the permitted limit. The contract flags the exceedance to the pollution board in real time, enabling immediate action.",
        icon: Zap,
        logFilename: "cerulea_emission.log",
        logLines: [
          { text: "[SYS] Screening live reading against limit...", time: "16:12:47", tone: "default" },
          { text: "[CMD] anchorReading(PLANT_88, so2: 94, pm: 48)", time: "16:12:47", tone: "primary" },
          { text: "[SYS] SO2 exceedance detected: 94 over 80.", time: "16:12:48", tone: "error" },
          { text: "[OK] Exceedance flagged to regulator in real time.", time: "16:12:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes emissions compliance into modular contracts. Each layer permits, monitors, corroborates, and flags without an operator being able to alter the record.",
    layers: [
      {
        title: "Permit Registry",
        subtitle: "The Compliance Ceiling",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Ceiling",
          description:
            "The foundational layer. It anchors each facility's permit and pollutant thresholds, fixing the immutable ceiling that every live reading and lab result is measured against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PermitRegistry {\n  struct Permit {\n    bytes32 facility;\n    uint256 so2Limit;\n    uint256 pmLimit;\n    bool active;\n  }\n\n  mapping(bytes32 => Permit) public permits;\n\n  function issue(bytes32 facility, uint256 so2, uint256 pm) external onlyBoard {\n    permits[facility] = Permit(facility, so2, pm, true);\n  }\n}",
        simAction: "Simulate Permit Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying pollution board authorization...", tone: "default" },
          { text: "Recording SO2 and PM limits...", tone: "default" },
          { text: "Fixing compliance ceiling...", tone: "default" },
          { text: "Writing permit to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Permit limits anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Oracle Ingestor",
        subtitle: "The Live Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Feed",
          description:
            "Replaces self-reporting with live data. Oracle Feeds anchor continuous sensor readings from the facility, so compliance rests on a tamper-evident real-time stream rather than an annual figure supplied by the operator.",
          platformFunction: "Oracle & Data",
        },
        codeSnippet:
          "function anchorReading(bytes32 facility, uint256 so2, uint256 pm) external onlyOracle {\n    readings[facility].push(Reading(so2, pm, block.timestamp));\n    Permit memory p = permits[facility];\n    if (so2 > p.so2Limit || pm > p.pmLimit) emit Exceedance(facility, so2, pm);\n}",
        simAction: "Simulate Oracle Reading",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting sensor emissions feed...", tone: "default" },
          { text: "Anchoring SO2 and PM values...", tone: "default" },
          { text: "Comparing against permit limits...", tone: "default" },
          { text: "Reading within compliance...", tone: "default" },
          { text: "[SUCCESS] Live reading anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Lab Notary",
        subtitle: "The Independent Check",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Independent Check",
          description:
            "Corroborates the sensor stream. The Provenance Notary anchors accredited lab results against the facility, cross-checking automated readings with independent certified sampling to catch spoofed sensors.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorLab(bytes32 facility, bytes32 lab, uint256 so2, bytes32 reportHash) external onlyAccreditedLab {\n    labResults[facility].push(LabResult(lab, so2, reportHash, block.timestamp));\n    emit LabAnchored(facility, lab, so2);\n}",
        simAction: "Simulate Lab Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting NABL lab report...", tone: "default" },
          { text: "Hashing certified result...", tone: "default" },
          { text: "Cross-checking against sensor stream...", tone: "default" },
          { text: "Binding lab result to facility...", tone: "default" },
          { text: "[SUCCESS] Independent result corroborated.", tone: "success" },
        ],
      },
      {
        title: "Exceedance Monitor",
        subtitle: "The Real-Time Alarm",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Real-Time Alarm",
          description:
            "Turns breaches into immediate action. It flags any reading over the permitted limit to the regulator the moment it is anchored, replacing discovery months later at annual inspection with live oversight.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function exceedanceLog(bytes32 facility) external view returns (Reading[] memory breaches) {\n    Permit memory p = permits[facility];\n    breaches = _filterOverLimit(readings[facility], p.so2Limit, p.pmLimit);\n}",
        simAction: "Simulate Exceedance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Screening reading against permit...", tone: "default" },
          { text: "SO2 value 94 over limit 80...", tone: "default" },
          { text: "Raising exceedance flag...", tone: "default" },
          { text: "Notifying pollution board live...", tone: "default" },
          { text: "[SUCCESS] Exceedance flagged in real time.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Real-time emissions oversight is a horizontal capability. Here is how different actors put the compliance chain to work.",
    sectors: [
      { icon: Landmark, title: "Pollution Control Boards", description: "Detect permit exceedances the moment they occur, replacing months-delayed annual inspection findings with continuous, tamper-evident oversight.", assetTypes: ["Emission Permits", "Exceedance Flags", "Compliance Records"] },
      { icon: Factory, title: "Industrial Operators", description: "Prove continuous compliance from an immutable record, and demonstrate corrective action through attestations instead of contesting disputed manual readings.", assetTypes: ["Sensor Streams", "Operator Attestations", "Corrective Actions"] },
      { icon: FlaskConical, title: "Accredited Labs", description: "Anchor independent test results that corroborate or challenge sensor data, giving their certifications a verifiable place in the compliance chain.", assetTypes: ["Lab Certifications", "Sample Results", "Corroboration Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy continuous emissions monitoring system or capturing readings from facility IoT sensors, Cerulea routes both into one private emissions compliance chain.",
    tracks: [
      {
        title: "Track A: CEMS Bridging",
        description:
          "For continuous emissions monitoring systems and board databases. Permit and reading events are translated into anchored on-chain compliance records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "CEMS / Board Database", sublabel: "Regulatory Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Emissions Compliance Chain", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Sensor Oracle Capture",
        description:
          "For facility IoT sensors. A signed oracle streams each reading from the stack monitor and routes it directly to the ledger for real-time screening.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Facility IoT Sensors", sublabel: "Stack & Effluent Monitors", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Emissions Data Tallying", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Live Compliance Record", icon: Factory, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an emissions compliance chain with oracle anchoring, lab corroboration, and real-time exceedance flagging from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Permit & Monitoring Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects environmental monitoring integration benchmarks. Wiring IoT oracles, building lab corroboration, and shipping real-time exceedance flagging for an average compliance chain takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your permit and monitoring rules into pre-audited WebAssembly binaries and provisions the emissions compliance chain instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "forest-land-diversion-approval-tracking-for-industrial-projects",
    icon: Forest,
    eyebrow: "Diversion Approval Engine",
    headline1: "Track every stage.",
    headline2: "Enforce every commitment.",
    heroDescription:
      "Build a tracked approval record for forest land diversion requests, showing every stage from application through compensatory afforestation compliance. The Civil Registry, Compliance Attestations, and Audit Logs modules carry the core, anchoring each stage and linking it to ongoing verification of afforestation commitments long after approval.",
    heroCta: "Deploy Approval Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a multi-stage diversion approval and its post-approval afforestation duty into one tracked, verifiable record.",
    mechanics: [
      { title: "Application Anchoring", description: "Seal the request. The Civil Registry anchors each forest land diversion application with its project and area, fixing the start of an auditable approval trail." },
      { title: "Stage Tracking", description: "Follow every clearance. Each approval stage, from in-principle to final, is recorded, so the position of a request is always verifiable rather than lost between offices." },
      { title: "Afforestation Binding", description: "Attach the condition. Compensatory afforestation commitments are bound to the approval, so the obligation is recorded alongside the clearance it was granted with." },
      { title: "Ongoing Verification", description: "Check compliance later. The record links to periodic verification of afforestation, so fulfilment can be checked long after the original approval was granted." },
      { title: "Lapse Flagging", description: "Catch unmet duties. Afforestation commitments tracking behind schedule are flagged, surfacing the weak post-approval compliance that current processes miss." },
      { title: "Audit Trail", description: "Give oversight one history. Audit Logs assemble application, approvals, and afforestation verification into a single trail for regulators and courts." },
    ],
    lifecycleTitle: "The Diversion Lifecycle",
    lifecycleSubtitle:
      "Follow a single diversion request from application through staged approval to bound, verified afforestation compliance.",
    lifecycleSteps: [
      {
        label: "Application Filing",
        description:
          "An industrial project files a forest land diversion request. The contract anchors the application with its project and area as the trail's origin.",
        icon: ScrollText,
        logFilename: "cerulea_forest.log",
        logLines: [
          { text: "[SYS] Anchoring diversion application...", time: "08:20:11", tone: "default" },
          { text: "[CMD] fileDiversion { project: \"MINE_88\", area_ha: 42 }", time: "08:20:11", tone: "primary" },
          { text: "[AUTH] Verifying project proponent credential...", time: "08:20:12", tone: "secondary" },
          { text: "[OK] Application anchored at block 6612233.", time: "08:20:12", tone: "success" },
        ],
      },
      {
        label: "Staged Approval",
        description:
          "The request moves through in-principle and final approval stages. Each stage is recorded, keeping the position of the request verifiable.",
        icon: FileCheck,
        logFilename: "cerulea_forest.log",
        logLines: [
          { text: "[SYS] Recording approval stage...", time: "11:30:30", tone: "default" },
          { text: "[CMD] approveStage(MINE_88, stage: \"IN_PRINCIPLE\")", time: "11:30:31", tone: "primary" },
          { text: "[SYS] Stage sealed on approval trail.", time: "11:30:31", tone: "default" },
          { text: "[OK] In-principle approval recorded.", time: "11:30:32", tone: "success" },
        ],
      },
      {
        label: "Afforestation Bind",
        description:
          "Compensatory afforestation commitments are bound to the approval, recording the obligation alongside the clearance it accompanies.",
        icon: Leaf,
        logFilename: "cerulea_forest.log",
        logLines: [
          { text: "[SYS] Binding afforestation commitment...", time: "13:40:41", tone: "default" },
          { text: "[CMD] bindAfforestation(MINE_88, area_ha: 84, site: \"CA_221\")", time: "13:40:41", tone: "primary" },
          { text: "[AUTH] Recording obligation against approval...", time: "13:40:42", tone: "secondary" },
          { text: "[OK] Afforestation duty bound to clearance.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Compliance Check",
        description:
          "Periodic verification of afforestation progress is anchored. A commitment lagging behind schedule is flagged for oversight review.",
        icon: Shield,
        logFilename: "cerulea_forest.log",
        logLines: [
          { text: "[SYS] Verifying afforestation progress...", time: "09:00:00", tone: "default" },
          { text: "[CMD] verifyAfforestation(MINE_88, planted_ha: 30)", time: "09:00:00", tone: "primary" },
          { text: "[SYS] Progress 36% below year-2 target.", time: "09:00:01", tone: "error" },
          { text: "[OK] Lapse flagged for oversight review.", time: "09:00:01", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes diversion approval into modular contracts. Each layer files, approves, binds, and verifies without the post-approval commitment falling out of view.",
    layers: [
      {
        title: "Application Registry",
        subtitle: "The Trail Origin",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trail Origin",
          description:
            "The foundational layer. It anchors each diversion application with its project and area, fixing the immutable origin of an approval trail that later stages and obligations attach to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract DiversionRegistry {\n  struct Application {\n    bytes32 project;\n    uint256 areaHa;\n    address proponent;\n    uint8 stage;\n  }\n\n  mapping(bytes32 => Application) public applications;\n\n  function file(bytes32 project, uint256 areaHa) external {\n    applications[project] = Application(project, areaHa, msg.sender, 0);\n  }\n}",
        simAction: "Simulate Application",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying project proponent...", tone: "default" },
          { text: "Recording 42 hectare request...", tone: "default" },
          { text: "Fixing approval trail origin...", tone: "default" },
          { text: "Writing application to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Diversion application anchored.", tone: "success" },
        ],
      },
      {
        title: "Stage Tracker",
        subtitle: "The Approval Ladder",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Approval Ladder",
          description:
            "Keeps the request position verifiable. It records each approval stage in sequence, so a diversion request cannot skip or obscure a clearance step and its status is always known.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function approveStage(bytes32 project, uint8 stage) external onlyAuthority {\n    require(stage == applications[project].stage + 1, \"Out of order\");\n    applications[project].stage = stage;\n    stageLog[project].push(Stage(stage, msg.sender, block.timestamp));\n    emit StageApproved(project, stage);\n}",
        simAction: "Simulate Stage Approval",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking stage order...", tone: "default" },
          { text: "Recording in-principle approval...", tone: "default" },
          { text: "Sealing stage on trail...", tone: "default" },
          { text: "Appending to stage log...", tone: "default" },
          { text: "[SUCCESS] Approval stage recorded.", tone: "success" },
        ],
      },
      {
        title: "Obligation Binder",
        subtitle: "The Afforestation Link",
        icon: Leaf,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Afforestation Link",
          description:
            "Ties the duty to the clearance. It binds compensatory afforestation commitments to the approval, so the obligation is recorded alongside the clearance and cannot be quietly detached later.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function bindAfforestation(bytes32 project, uint256 areaHa, bytes32 site) external onlyAuthority {\n    obligations[project] = Obligation(areaHa, site, 0, false);\n    emit AfforestationBound(project, areaHa, site);\n}",
        simAction: "Simulate Obligation Bind",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording 84 hectare afforestation duty...", tone: "default" },
          { text: "Linking to compensatory site CA_221...", tone: "default" },
          { text: "Binding obligation to approval...", tone: "default" },
          { text: "Sealing duty on trail...", tone: "default" },
          { text: "[SUCCESS] Afforestation commitment bound.", tone: "success" },
        ],
      },
      {
        title: "Compliance Verifier",
        subtitle: "The Long-Term Check",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Long-Term Check",
          description:
            "Enforces the promise after approval. It anchors periodic afforestation verification and flags commitments lagging behind schedule, so compliance can be checked long after the original clearance was granted.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyAfforestation(bytes32 project, uint256 plantedHa) external onlyVerifier {\n    Obligation storage o = obligations[project];\n    o.plantedHa = plantedHa;\n    if (plantedHa < _targetForNow(project)) emit AfforestationLapse(project, plantedHa);\n}",
        simAction: "Simulate Compliance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifier reporting planted area...", tone: "default" },
          { text: "Comparing to year-2 target...", tone: "default" },
          { text: "Progress below schedule...", tone: "default" },
          { text: "Raising afforestation lapse flag...", tone: "default" },
          { text: "[SUCCESS] Lapse flagged for oversight.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Tracked diversion approval is a horizontal capability. Here is how different actors put the forest approval ledger to work.",
    sectors: [
      { icon: Forest, title: "Forest Departments", description: "Track every stage of a diversion approval and verify afforestation commitments long after clearance, closing the weak post-approval compliance gap.", assetTypes: ["Diversion Approvals", "Afforestation Obligations", "Compliance Checks"] },
      { icon: Factory, title: "Project Proponents", description: "Show a verifiable record of approvals granted and afforestation delivered, demonstrating compliance without reconstructing years-old paper files.", assetTypes: ["Applications", "Stage Approvals", "Planting Records"] },
      { icon: Shield, title: "Courts & Oversight", description: "Read a single trail of application, clearance, and afforestation verification, resolving disputes and monitoring commitments against evidence rather than affidavits.", assetTypes: ["Approval Trails", "Lapse Flags", "Audit Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy forest clearance system or capturing afforestation verification from field surveys, Cerulea routes both into one tracked approval ledger.",
    tracks: [
      {
        title: "Track A: Clearance System Bridging",
        description:
          "For forest clearance and environment ministry systems. Application and approval events are translated into anchored on-chain trail records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Forest Clearance System", sublabel: "Ministry Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Diversion Approval Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Survey Capture",
        description:
          "For afforestation field verification. A signed device anchors each planting survey from the site and routes it directly to the ledger for compliance tracking.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field Survey / Wallet", sublabel: "Verifier Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Verification Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Afforestation Compliance Record", icon: Forest, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a diversion approval network with staged tracking, afforestation binding, and long-term compliance verification from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Approval & Afforestation Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects environmental clearance integration benchmarks. Wiring clearance systems, building staged approval tracking, and shipping long-term afforestation verification for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your approval and afforestation rules into pre-audited WebAssembly binaries and provisions the shared approval ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "water-pollution-discharge-permit-compliance-monitoring",
    icon: Droplet,
    eyebrow: "Discharge Monitoring Engine",
    headline1: "Watch every discharge.",
    headline2: "Flag every breach.",
    heroDescription:
      "Run a continuous monitoring record of industrial water discharge against permitted limits, with violations flagged automatically to the pollution control board. The External Data Oracles, Compliance Attestations, and Audit Logs modules carry the core, checking sensor readings against limits and flagging any breach as it happens rather than at the next inspection.",
    heroCta: "Deploy Discharge Monitors",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn periodic manual inspection into continuous discharge monitoring that catches violations between inspections.",
    mechanics: [
      { title: "Permit Limits", description: "Anchor the thresholds. Each discharge permit's pollutant limits are recorded on-chain, fixing the ceiling that continuous readings are checked against." },
      { title: "Sensor Oracle Feed", description: "Stream live readings. External Data Oracles anchor continuous discharge sensor data, replacing snapshot inspections with a tamper-evident real-time record." },
      { title: "Automatic Breach Flag", description: "Catch violations instantly. When a reading exceeds the permitted limit, the contract flags the breach to the pollution control board the moment it occurs." },
      { title: "Between-Inspection Coverage", description: "Close the blind window. Continuous monitoring surfaces violations that occur between scheduled inspections, which manual checks routinely miss." },
      { title: "Attested Readings", description: "Prove data integrity. Compliance Attestations bind readings to the sensor and facility, so a flagged breach rests on verifiable, attributable data." },
      { title: "Violation History", description: "Keep an immutable record. Audit Logs hold every reading and breach, giving the board a defensible history for enforcement action." },
    ],
    lifecycleTitle: "The Monitoring Lifecycle",
    lifecycleSubtitle:
      "Follow a single outfall from permit limits through continuous sensor monitoring to an automatic breach flag.",
    lifecycleSteps: [
      {
        label: "Permit Setup",
        description:
          "A facility's discharge permit limits are anchored. The contract fixes the pollutant thresholds that live readings will be measured against.",
        icon: FileCheck,
        logFilename: "cerulea_discharge.log",
        logLines: [
          { text: "[SYS] Anchoring discharge permit limits...", time: "08:14:11", tone: "default" },
          { text: "[CMD] setLimits { outfall: \"OF_88\", cod: 250, ph_min: 6 }", time: "08:14:11", tone: "primary" },
          { text: "[AUTH] Verifying pollution board authorization...", time: "08:14:12", tone: "secondary" },
          { text: "[OK] Limits anchored at block 6712233.", time: "08:14:12", tone: "success" },
        ],
      },
      {
        label: "Continuous Feed",
        description:
          "Discharge sensors stream readings through the oracle. Each reading is anchored and checked, building a continuous compliance record.",
        icon: Radio,
        logFilename: "cerulea_discharge.log",
        logLines: [
          { text: "[SYS] Ingesting discharge sensor feed...", time: "10:45:30", tone: "default" },
          { text: "[CMD] anchorReading(OF_88, cod: 180, ph: 7.1)", time: "10:45:31", tone: "primary" },
          { text: "[SYS] Reading within permitted limits.", time: "10:45:31", tone: "default" },
          { text: "[OK] Reading anchored. Compliance nominal.", time: "10:45:32", tone: "success" },
        ],
      },
      {
        label: "Breach Detection",
        description:
          "A reading exceeds the permitted limit between inspections. The contract flags the violation to the pollution control board as it happens.",
        icon: Zap,
        logFilename: "cerulea_discharge.log",
        logLines: [
          { text: "[SYS] Screening reading against limits...", time: "02:12:47", tone: "default" },
          { text: "[CMD] anchorReading(OF_88, cod: 340, ph: 5.4)", time: "02:12:47", tone: "primary" },
          { text: "[SYS] COD 340 over 250, pH below floor.", time: "02:12:48", tone: "error" },
          { text: "[OK] Violation flagged to board in real time.", time: "02:12:48", tone: "success" },
        ],
      },
      {
        label: "Enforcement Record",
        description:
          "The breach and its attested readings form an immutable violation record the board uses for enforcement, with an audit-ready history.",
        icon: Shield,
        logFilename: "cerulea_discharge.log",
        logLines: [
          { text: "[SYS] Compiling violation record...", time: "02:13:10", tone: "default" },
          { text: "[CMD] compileViolation(OF_88, window: \"02:00-02:15\")", time: "02:13:10", tone: "primary" },
          { text: "[AUTH] Attesting readings to sensor and facility...", time: "02:13:11", tone: "secondary" },
          { text: "[OK] Defensible violation record sealed.", time: "02:13:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes discharge monitoring into modular contracts. Each layer sets limits, ingests, detects, and records without leaving a blind window between inspections.",
    layers: [
      {
        title: "Limit Registry",
        subtitle: "The Discharge Ceiling",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Discharge Ceiling",
          description:
            "The foundational layer. It anchors each outfall's permitted pollutant limits, fixing the immutable ceiling that every continuous reading is screened against for compliance.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract LimitRegistry {\n  struct Limits {\n    bytes32 outfall;\n    uint256 codMax;\n    uint256 phMin;\n    uint256 phMax;\n  }\n\n  mapping(bytes32 => Limits) public limits;\n\n  function setLimits(bytes32 outfall, uint256 cod, uint256 phMin, uint256 phMax) external onlyBoard {\n    limits[outfall] = Limits(outfall, cod, phMin, phMax);\n  }\n}",
        simAction: "Simulate Limit Setup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying pollution board authorization...", tone: "default" },
          { text: "Recording COD and pH thresholds...", tone: "default" },
          { text: "Fixing discharge ceiling...", tone: "default" },
          { text: "Writing limits to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Permit limits anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Oracle Ingestor",
        subtitle: "The Continuous Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Continuous Feed",
          description:
            "Replaces snapshot inspection. External Data Oracles anchor a continuous discharge reading stream, so compliance is measured every moment rather than at a scheduled visit an operator can prepare for.",
          platformFunction: "Oracle & Data",
        },
        codeSnippet:
          "function anchorReading(bytes32 outfall, uint256 cod, uint256 ph) external onlyOracle {\n    readings[outfall].push(Reading(cod, ph, block.timestamp));\n    Limits memory l = limits[outfall];\n    if (cod > l.codMax || ph < l.phMin || ph > l.phMax) emit Violation(outfall, cod, ph);\n}",
        simAction: "Simulate Reading",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting discharge sensor feed...", tone: "default" },
          { text: "Anchoring COD and pH values...", tone: "default" },
          { text: "Comparing against permit limits...", tone: "default" },
          { text: "Reading within compliance...", tone: "default" },
          { text: "[SUCCESS] Continuous reading anchored.", tone: "success" },
        ],
      },
      {
        title: "Breach Detector",
        subtitle: "The Between-Inspection Guard",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Between-Inspection Guard",
          description:
            "Closes the blind window. It flags any reading over the limit the moment it is anchored, catching the violations that occur between scheduled inspections and that manual checks routinely miss.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function violations(bytes32 outfall) external view returns (Reading[] memory breaches) {\n    Limits memory l = limits[outfall];\n    breaches = _filterBreaches(readings[outfall], l);\n}",
        simAction: "Simulate Breach Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Screening night-time reading...", tone: "default" },
          { text: "COD 340 over limit 250...", tone: "default" },
          { text: "pH below permitted floor...", tone: "default" },
          { text: "Raising violation flag...", tone: "default" },
          { text: "[SUCCESS] Breach flagged in real time.", tone: "success" },
        ],
      },
      {
        title: "Violation Notary",
        subtitle: "The Enforcement Seal",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Enforcement Seal",
          description:
            "Makes a breach defensible. Compliance Attestations bind flagged readings to the sensor and facility and Audit Logs keep them immutable, giving the board an evidence-grade record for enforcement.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function compileViolation(bytes32 outfall, uint256 from, uint256 to) external onlyBoard returns (bytes32 recordId) {\n    recordId = keccak256(abi.encode(outfall, from, to));\n    violationRecords[recordId] = _seal(outfall, from, to);\n    emit ViolationSealed(recordId, outfall);\n}",
        simAction: "Simulate Violation Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Collecting breach window readings...", tone: "default" },
          { text: "Attesting to sensor and facility...", tone: "default" },
          { text: "Sealing immutable violation record...", tone: "default" },
          { text: "Preparing for enforcement action...", tone: "default" },
          { text: "[SUCCESS] Defensible record sealed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Continuous discharge monitoring is a horizontal capability. Here is how different actors put the compliance record to work.",
    sectors: [
      { icon: Landmark, title: "Pollution Control Boards", description: "Detect discharge violations the moment they occur, replacing periodic inspections that miss off-hours breaches with continuous, evidence-grade oversight.", assetTypes: ["Discharge Permits", "Violation Records", "Enforcement Dossiers"] },
      { icon: Factory, title: "Industrial Facilities", description: "Demonstrate continuous compliance from a tamper-evident record and address anomalies early, instead of contesting a single disputed inspection sample.", assetTypes: ["Sensor Streams", "Compliance Attestations", "Corrective Actions"] },
      { icon: Droplet, title: "Water Bodies & Communities", description: "Gain confidence that industrial discharge into rivers and drains is monitored around the clock, with violations surfaced rather than hidden between visits.", assetTypes: ["Outfall Records", "Breach Alerts", "Monitoring Histories"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy effluent monitoring system or capturing readings from outfall sensors, Cerulea routes both into one continuous discharge compliance ledger.",
    tracks: [
      {
        title: "Track A: Effluent System Bridging",
        description:
          "For effluent monitoring and board databases. Permit and reading events are translated into anchored on-chain compliance records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Effluent Monitoring System", sublabel: "Board Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Discharge Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Outfall Sensor Capture",
        description:
          "For outfall discharge sensors. A signed oracle streams each reading from the effluent monitor and routes it directly to the ledger for real-time screening.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Outfall Sensors", sublabel: "Effluent Monitors", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Discharge Data Tallying", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Continuous Compliance Record", icon: Droplet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a discharge monitoring network with oracle feeds, automatic breach flagging, and enforcement-grade records from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Limit & Monitoring Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects effluent monitoring integration benchmarks. Wiring outfall sensors, building continuous breach detection, and shipping enforcement-grade violation records for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your limit and monitoring rules into pre-audited WebAssembly binaries and provisions the shared discharge compliance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "digital-passport-and-travel-document-verification",
    icon: IdCard,
    eyebrow: "Travel Credential Engine",
    headline1: "Verify in seconds.",
    headline2: "Detect every forgery.",
    heroDescription:
      "Run a digital travel document network where passports and visas are verifiable credentials, forgery is detectable, and overstay tracking is automated. DID and VC Ledger, Civil Registry, and Compliance Attestations anchor the core, so an immigration officer scanning a passport confirms validity, visa status, and overstay flags in seconds without contacting the issuing authority.",
    heroCta: "Deploy Travel Credentials",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn forgeable paper travel documents into verifiable credentials checked in seconds at the border.",
    mechanics: [
      { title: "Credential Passports", description: "Issue documents as VCs. The DID and VC Ledger mints each passport and visa as a verifiable credential bound to the holder's identity, so authenticity is cryptographic, not visual." },
      { title: "Instant Verification", description: "Confirm at the desk. A border officer verifies a document against the ledger in seconds, without a real-time call to the issuing authority." },
      { title: "Forgery Detection", description: "Reject fakes structurally. A forged or altered document fails signature verification, so counterfeit travel papers are detectable rather than passing a glance check." },
      { title: "Visa Status Binding", description: "Attach current status. Each visa's validity and conditions are bound to the passport credential, so status is read from the ledger, not a separate stamp." },
      { title: "Automated Overstay", description: "Track entries and exits. Entry and exit events are recorded, so overstay flags are computed automatically instead of reconstructed from disconnected logs." },
      { title: "Privacy-Preserving Checks", description: "Verify without exposure. Selective disclosure lets an officer confirm validity and status without pulling the holder's full record into a central query." },
    ],
    lifecycleTitle: "The Verification Lifecycle",
    lifecycleSubtitle:
      "Follow a single traveler from credential issuance through border verification to automated overstay tracking.",
    lifecycleSteps: [
      {
        label: "Credential Issuance",
        description:
          "A passport authority issues a travel document as a verifiable credential bound to the holder's identity. The contract anchors it as cryptographically authentic.",
        icon: IdCard,
        logFilename: "cerulea_travel.log",
        logLines: [
          { text: "[SYS] Issuing travel credential...", time: "09:10:11", tone: "default" },
          { text: "[CMD] issuePassport { holder: \"did:cer:71a2\", type: \"P\", exp: 2036 }", time: "09:10:11", tone: "primary" },
          { text: "[AUTH] Signing with passport authority key...", time: "09:10:12", tone: "secondary" },
          { text: "[OK] Credential anchored at block 6812233.", time: "09:10:12", tone: "success" },
        ],
      },
      {
        label: "Visa Binding",
        description:
          "A visa is issued and bound to the passport credential with its validity and conditions, so status travels with the document.",
        icon: Plane,
        logFilename: "cerulea_travel.log",
        logLines: [
          { text: "[SYS] Binding visa to passport credential...", time: "11:30:30", tone: "default" },
          { text: "[CMD] bindVisa(did:cer:71a2, type: \"E_BIZ\", valid: 180)", time: "11:30:31", tone: "primary" },
          { text: "[SYS] Visa conditions attached to credential.", time: "11:30:31", tone: "default" },
          { text: "[OK] Visa status bound and verifiable.", time: "11:30:32", tone: "success" },
        ],
      },
      {
        label: "Border Verification",
        description:
          "An immigration officer at Delhi airport scans the passport. The ledger confirms validity, current visa status, and no overstay flags in three seconds.",
        icon: ShieldCheck,
        logFilename: "cerulea_travel.log",
        logLines: [
          { text: "[SYS] Border scan verification request...", time: "23:45:47", tone: "default" },
          { text: "[CMD] verifyAtBorder(did:cer:71a2)", time: "23:45:47", tone: "primary" },
          { text: "[SYS] Signature valid, visa active, no overstay.", time: "23:45:48", tone: "default" },
          { text: "[OK] Verified in 3s. Passenger cleared.", time: "23:45:50", tone: "success" },
        ],
      },
      {
        label: "Overstay Tracking",
        description:
          "Entry and exit events update the traveler's record. If departure does not occur before visa expiry, an overstay flag is raised automatically.",
        icon: Zap,
        logFilename: "cerulea_travel.log",
        logLines: [
          { text: "[SYS] Reconciling entry and exit events...", time: "09:00:00", tone: "default" },
          { text: "[CMD] checkOverstay(did:cer:71a2)", time: "09:00:00", tone: "primary" },
          { text: "[SYS] No exit recorded past visa expiry.", time: "09:00:01", tone: "error" },
          { text: "[OK] Overstay flag raised automatically.", time: "09:00:01", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes travel verification into modular contracts. Each layer issues, binds, verifies, and tracks without exposing the holder's full record to a central query.",
    layers: [
      {
        title: "Credential Ledger",
        subtitle: "The Digital Passport",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Digital Passport",
          description:
            "The foundational layer. It mints each passport and visa as a verifiable credential signed by the issuing authority, so a document's authenticity is a cryptographic fact rather than a visual impression.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CredentialLedger {\n  struct Passport {\n    bytes32 did;\n    bytes32 docType;\n    uint256 expiry;\n    address issuer;\n    bool revoked;\n  }\n\n  mapping(bytes32 => Passport) public passports;\n\n  function issue(bytes32 did, bytes32 docType, uint256 expiry) external onlyPassportAuthority {\n    passports[did] = Passport(did, docType, expiry, msg.sender, false);\n  }\n}",
        simAction: "Simulate Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Signing with passport authority key...", tone: "default" },
          { text: "Binding credential to holder DID...", tone: "default" },
          { text: "Recording document expiry...", tone: "default" },
          { text: "Writing passport to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Digital passport anchored.", tone: "success" },
        ],
      },
      {
        title: "Visa Binder",
        subtitle: "The Status Attachment",
        icon: Plane,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Status Attachment",
          description:
            "Keeps status with the document. It binds each visa's validity and conditions to the passport credential, so an officer reads current status from the ledger instead of interpreting a separate physical stamp.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function bindVisa(bytes32 did, bytes32 visaType, uint256 validDays) external onlyConsulate {\n    visas[did] = Visa(visaType, block.timestamp, block.timestamp + validDays * 1 days, true);\n    emit VisaBound(did, visaType);\n}",
        simAction: "Simulate Visa Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Issuing business visa...", tone: "default" },
          { text: "Attaching validity and conditions...", tone: "default" },
          { text: "Binding visa to passport...", tone: "default" },
          { text: "Sealing status on-chain...", tone: "default" },
          { text: "[SUCCESS] Visa status bound to credential.", tone: "success" },
        ],
      },
      {
        title: "Border Verifier",
        subtitle: "The Three-Second Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Three-Second Check",
          description:
            "Confirms authenticity at the desk. It verifies the credential signature, visa status, and overstay flags in one query, so an officer clears a traveler in seconds without contacting the issuing authority.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function verifyAtBorder(bytes32 did) external view returns (bool valid, bool visaActive, bool overstay) {\n    Passport memory p = passports[did];\n    valid = !p.revoked && p.expiry > block.timestamp;\n    visaActive = visas[did].active && visas[did].expiry > block.timestamp;\n    overstay = _isOverstay(did);\n}",
        simAction: "Simulate Border Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Officer scanning passport at Delhi...", tone: "default" },
          { text: "Verifying credential signature...", tone: "default" },
          { text: "Reading active visa status...", tone: "default" },
          { text: "Checking overstay flags...", tone: "default" },
          { text: "[SUCCESS] Verified in 3s, passenger cleared.", tone: "success" },
        ],
      },
      {
        title: "Overstay Engine",
        subtitle: "The Movement Reconciler",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Movement Reconciler",
          description:
            "Automates overstay detection. It reconciles entry and exit events against visa expiry and raises a flag when no departure is recorded in time, replacing manual reconstruction from disconnected logs.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function checkOverstay(bytes32 did) external returns (bool) {\n    if (lastEntry[did] > lastExit[did] && block.timestamp > visas[did].expiry) {\n        emit OverstayFlagged(did, block.timestamp);\n        return true;\n    }\n    return false;\n}",
        simAction: "Simulate Overstay Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reconciling entry and exit events...", tone: "default" },
          { text: "No exit recorded after entry...", tone: "default" },
          { text: "Visa expiry passed...", tone: "default" },
          { text: "Raising overstay flag...", tone: "default" },
          { text: "[SUCCESS] Overstay flagged automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable travel credentials are a horizontal capability. Here is how different actors put the digital document network to work.",
    sectors: [
      { icon: Plane, title: "Immigration & Border", description: "Verify document authenticity, visa status, and overstay flags in seconds at the desk, replacing slow issuing-authority callbacks and visual forgery checks.", assetTypes: ["Border Verifications", "Overstay Flags", "Entry-Exit Records"] },
      { icon: Landmark, title: "Passport & Consular Authorities", description: "Issue tamper-proof credentials and revoke them instantly on the ledger, so a lost or cancelled document cannot be used to enter a country.", assetTypes: ["Passport Credentials", "Visa Bindings", "Revocations"] },
      { icon: Users, title: "Travelers", description: "Prove identity and visa status through selective disclosure, confirming validity at the border without exposing their entire record to a central query.", assetTypes: ["Credential Wallets", "Selective Disclosures", "Travel Histories"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy passport and immigration system or verifying credentials from border scanners, Cerulea routes both into one digital travel document network.",
    tracks: [
      {
        title: "Track A: Immigration System Bridging",
        description:
          "For passport and immigration control systems. Issuance and movement events are translated into verifiable credentials and entry-exit records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Passport & Immigration Systems", sublabel: "Authority Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Issuance & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Travel Document Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Border Scanner Verification",
        description:
          "For border desks and e-gates. A signed scanner verifies each credential at the desk and records entry or exit directly to the ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Border Scanner / e-Gate", sublabel: "Immigration Endpoints", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Verification Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Credential Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a travel document network with verifiable credentials, second-scale border verification, and automated overstay tracking from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credential & Verification Rules",
      ruleCount: 49,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects identity and border-control integration benchmarks. Building a verifiable credential layer, wiring border verification, and shipping automated overstay tracking for an average network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your credential and verification rules into pre-audited WebAssembly binaries and provisions the travel document network instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "visa-application-status-tracking-across-embassy-and-immigration-system",
    icon: Plane,
    eyebrow: "Application Status Engine",
    headline1: "One timeline.",
    headline2: "Every stage visible.",
    heroDescription:
      "Deliver a unified visa status tracker that gives applicants a single verified view of their application as it moves between embassy and immigration systems. Cerulea Studio assembles it from Civil Registry, Notifications, and Compliance Attestations, anchoring status updates from each stage into one verified timeline and cutting inquiry calls and uncertainty.",
    heroCta: "Deploy Status Trackers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn scattered status pages across three systems into one verified timeline the applicant can trust.",
    mechanics: [
      { title: "Unified Application ID", description: "Anchor one identity. The Civil Registry binds a single application identity across the visa center, embassy, and immigration, so all stages attach to one record." },
      { title: "Cross-System Updates", description: "Collect every stage. Status events from each system are anchored into one timeline, so the applicant no longer stitches together three separate status pages." },
      { title: "Verified Timeline", description: "Show trustworthy status. Each update is attested, so the status an applicant sees is the verified on-chain state rather than an inconsistent portal display." },
      { title: "Stage Notifications", description: "Push each transition. Notifications alert the applicant as their application moves between stages, cutting the uncertainty that drives inquiry calls." },
      { title: "Handoff Tracking", description: "Follow the movement. Each handoff between the visa center, embassy, and immigration is recorded, so a stalled application is visible at the exact stage it sits." },
      { title: "Reduced Inquiries", description: "Cut the call volume. With a single verified view, applicants check status themselves instead of contacting each office, easing load on consular staff." },
    ],
    lifecycleTitle: "The Application Lifecycle",
    lifecycleSubtitle:
      "Follow a single visa application from unified intake through cross-system handoffs to a verified, notified status.",
    lifecycleSteps: [
      {
        label: "Unified Intake",
        description:
          "An applicant submits at the visa center. The contract anchors a single application identity that every downstream system will attach status to.",
        icon: ScrollText,
        logFilename: "cerulea_visa.log",
        logLines: [
          { text: "[SYS] Anchoring unified visa application...", time: "09:20:11", tone: "default" },
          { text: "[CMD] fileApplication { id: \"VA_7742\", type: \"TOURIST\", dest: \"IN\" }", time: "09:20:11", tone: "primary" },
          { text: "[AUTH] Verifying applicant identity and biometrics...", time: "09:20:12", tone: "secondary" },
          { text: "[OK] Application anchored at block 6912233.", time: "09:20:12", tone: "success" },
        ],
      },
      {
        label: "Embassy Handoff",
        description:
          "The application moves from the visa center to the embassy for decision. The handoff is recorded, keeping the timeline continuous.",
        icon: Handshake,
        logFilename: "cerulea_visa.log",
        logLines: [
          { text: "[SYS] Recording handoff to embassy...", time: "11:44:30", tone: "default" },
          { text: "[CMD] handoff(VA_7742, to: \"EMBASSY\")", time: "11:44:31", tone: "primary" },
          { text: "[SYS] Stage updated and applicant notified.", time: "11:44:31", tone: "default" },
          { text: "[OK] Now with embassy for decision.", time: "11:44:32", tone: "success" },
        ],
      },
      {
        label: "Decision Recorded",
        description:
          "The embassy records its decision. The attested status update lands on the unified timeline and pushes a notification to the applicant.",
        icon: FileCheck,
        logFilename: "cerulea_visa.log",
        logLines: [
          { text: "[SYS] Recording embassy decision...", time: "14:05:41", tone: "default" },
          { text: "[CMD] recordDecision(VA_7742, status: \"APPROVED\")", time: "14:05:41", tone: "primary" },
          { text: "[AUTH] Attesting decision to timeline...", time: "14:05:42", tone: "secondary" },
          { text: "[OK] Approval recorded. Applicant notified.", time: "14:05:42", tone: "success" },
        ],
      },
      {
        label: "Applicant View",
        description:
          "The applicant checks a single verified timeline showing every stage from submission to approval, without calling any office.",
        icon: Plane,
        logFilename: "cerulea_visa.log",
        logLines: [
          { text: "[SYS] Assembling unified status timeline...", time: "15:30:47", tone: "default" },
          { text: "[CMD] getTimeline(VA_7742)", time: "15:30:47", tone: "primary" },
          { text: "[SYS] Compiling 4 verified stage updates.", time: "15:30:48", tone: "default" },
          { text: "[OK] Verified timeline returned to applicant.", time: "15:30:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes visa tracking into modular contracts. Each layer anchors, hands off, records, and exposes status so three systems present one verified timeline.",
    layers: [
      {
        title: "Application Registry",
        subtitle: "The Single Identity",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single Identity",
          description:
            "The foundational layer. It anchors one application identity spanning the visa center, embassy, and immigration, so every stage attaches to a single record instead of three disconnected ones.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ApplicationRegistry {\n  struct Application {\n    bytes32 id;\n    bytes32 visaType;\n    bytes32 stage;\n    address applicant;\n  }\n\n  mapping(bytes32 => Application) public applications;\n\n  function file(bytes32 id, bytes32 visaType) external {\n    applications[id] = Application(id, visaType, \"SUBMITTED\", msg.sender);\n  }\n}",
        simAction: "Simulate Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying applicant identity...", tone: "default" },
          { text: "Anchoring single application ID...", tone: "default" },
          { text: "Setting stage to submitted...", tone: "default" },
          { text: "Writing application to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Unified application anchored.", tone: "success" },
        ],
      },
      {
        title: "Handoff Tracker",
        subtitle: "The Cross-System Bridge",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cross-System Bridge",
          description:
            "Keeps the timeline continuous. It records each handoff between the visa center, embassy, and immigration, so a stalled application is visible at the exact stage it sits rather than lost between portals.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function handoff(bytes32 id, bytes32 toStage) external onlyStageAuthority {\n    applications[id].stage = toStage;\n    timeline[id].push(Event(toStage, msg.sender, block.timestamp));\n    _notify(applications[id].applicant, toStage);\n    emit Handoff(id, toStage);\n}",
        simAction: "Simulate Handoff",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Moving application to embassy...", tone: "default" },
          { text: "Recording stage transition...", tone: "default" },
          { text: "Appending to unified timeline...", tone: "default" },
          { text: "Notifying applicant of handoff...", tone: "default" },
          { text: "[SUCCESS] Handoff tracked on-chain.", tone: "success" },
        ],
      },
      {
        title: "Decision Notary",
        subtitle: "The Attested Update",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Attested Update",
          description:
            "Makes status trustworthy. Compliance Attestations bind each decision and stage update to its authority, so the status an applicant reads is a verified on-chain fact rather than an inconsistent portal display.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function recordDecision(bytes32 id, bytes32 status) external onlyEmbassy {\n    applications[id].stage = status;\n    decisions[id] = Decision(status, msg.sender, block.timestamp);\n    emit DecisionRecorded(id, status);\n}",
        simAction: "Simulate Decision",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Embassy recording approval...", tone: "default" },
          { text: "Attesting decision to authority...", tone: "default" },
          { text: "Updating unified timeline...", tone: "default" },
          { text: "Pushing notification to applicant...", tone: "default" },
          { text: "[SUCCESS] Decision attested on-chain.", tone: "success" },
        ],
      },
      {
        title: "Timeline View",
        subtitle: "The Applicant Window",
        icon: Plane,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Applicant Window",
          description:
            "A read-only gateway that assembles every stage into one verified timeline, so an applicant checks status themselves and consular staff field fewer inquiry calls.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function getTimeline(bytes32 id) external view returns (Event[] memory) {\n    require(applications[id].applicant == msg.sender || _isAuthority(msg.sender), \"Not authorized\");\n    return timeline[id];\n}",
        simAction: "Simulate Timeline View",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Applicant querying status...", tone: "default" },
          { text: "Verifying requester identity...", tone: "default" },
          { text: "Compiling 4 verified stage updates...", tone: "default" },
          { text: "Assembling single timeline...", tone: "default" },
          { text: "[SUCCESS] Verified timeline returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A unified status timeline is a horizontal capability. Here is how different actors put the visa tracker to work.",
    sectors: [
      { icon: Landmark, title: "Embassies & Consulates", description: "Present one verified status across systems and cut inquiry-call volume, freeing consular staff from repeatedly answering where an application stands.", assetTypes: ["Decisions", "Stage Updates", "Handoff Records"] },
      { icon: Plane, title: "Visa Application Centers", description: "Anchor intake once and hand off cleanly to the embassy, so the applicant experiences a continuous timeline rather than a reset at each stage.", assetTypes: ["Applications", "Biometric Records", "Submission Events"] },
      { icon: Users, title: "Applicants", description: "Track a single verified timeline from submission to decision, ending the uncertainty of reconciling three different portal status pages.", assetTypes: ["Status Views", "Stage Notifications", "Application Histories"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy embassy and immigration systems or serving applicants through a portal, Cerulea routes both into one unified status ledger.",
    tracks: [
      {
        title: "Track A: Consular System Bridging",
        description:
          "For visa center, embassy, and immigration systems. Status events are translated into anchored on-chain timeline records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Embassy & Immigration Systems", sublabel: "Consular Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Visa Status Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Applicant Portal Access",
        description:
          "For applicants checking status. A signed portal lets an applicant read their verified timeline from any device against the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Applicant Portal / Wallet", sublabel: "Traveler Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Status Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Unified Timeline Record", icon: Plane, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a visa status network with a unified identity, cross-system handoffs, and a verified applicant timeline from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Status & Handoff Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects consular system integration benchmarks. Wiring three status systems, building a unified identity, and shipping a verified applicant timeline for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your status and handoff rules into pre-audited WebAssembly binaries and provisions the shared status ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "overseas-citizen-registration-and-consular-service-access",
    icon: Globe,
    eyebrow: "Consular Registry Engine",
    headline1: "Register once.",
    headline2: "Recognized everywhere.",
    heroDescription:
      "Stand up a verified registry of overseas citizens that lets consulates quickly confirm identity and registration status when providing emergency services. The Civil Registry, DID and VC Ledger, and Compliance Attestations modules carry the core, maintaining one verified registration per citizen that any consulate in the network can access regardless of relocation.",
    heroCta: "Deploy Consular Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn siloed, non-portable consulate registrations into one verified record that follows the citizen across jurisdictions.",
    mechanics: [
      { title: "Single Registration", description: "Register once for all. The Civil Registry anchors one verified registration per overseas citizen, so a move to another consular jurisdiction does not require re-registering." },
      { title: "Portable Identity", description: "Carry recognition anywhere. The DID and VC Ledger binds the registration to the citizen's identity, so any consulate in the network recognizes it instantly." },
      { title: "Emergency Access", description: "Confirm fast in a crisis. In an emergency, a consulate confirms identity and registration in seconds, so assistance is not delayed by verifying who the citizen is." },
      { title: "Jurisdiction Transfer", description: "Move without losing status. When a citizen relocates, the record transfers to the new consular jurisdiction on-chain without a fresh paper process." },
      { title: "Attested Updates", description: "Keep details current. Compliance Attestations record changes to contact and address details, so the registry reflects a citizen's current situation." },
      { title: "Service Trail", description: "Log consular services. Each service accessed is recorded against the registration, giving consulates continuity across interactions." },
    ],
    lifecycleTitle: "The Registration Lifecycle",
    lifecycleSubtitle:
      "Follow a single overseas citizen from one-time registration through jurisdiction transfer to emergency consular access.",
    lifecycleSteps: [
      {
        label: "Citizen Registration",
        description:
          "An overseas citizen registers with their nearest consulate. The contract anchors a single verified registration bound to their identity.",
        icon: IdCard,
        logFilename: "cerulea_consular.log",
        logLines: [
          { text: "[SYS] Anchoring overseas citizen registration...", time: "09:14:11", tone: "default" },
          { text: "[CMD] register { citizen: \"did:cer:44b1\", consulate: \"SF\" }", time: "09:14:11", tone: "primary" },
          { text: "[AUTH] Verifying passport and residence proof...", time: "09:14:12", tone: "secondary" },
          { text: "[OK] Registration anchored at block 7012233.", time: "09:14:12", tone: "success" },
        ],
      },
      {
        label: "Jurisdiction Transfer",
        description:
          "The citizen relocates to another consular jurisdiction. The record transfers on-chain, so registration continuity is preserved without re-registering.",
        icon: Globe,
        logFilename: "cerulea_consular.log",
        logLines: [
          { text: "[SYS] Transferring registration jurisdiction...", time: "11:30:30", tone: "default" },
          { text: "[CMD] transfer(did:cer:44b1, to: \"CHICAGO\")", time: "11:30:31", tone: "primary" },
          { text: "[SYS] Record recognized at new consulate.", time: "11:30:31", tone: "default" },
          { text: "[OK] Continuity preserved across jurisdiction.", time: "11:30:32", tone: "success" },
        ],
      },
      {
        label: "Detail Update",
        description:
          "The citizen updates contact and address details. The attested change keeps the registry current for future emergency contact.",
        icon: FileCheck,
        logFilename: "cerulea_consular.log",
        logLines: [
          { text: "[SYS] Recording contact detail update...", time: "13:40:41", tone: "default" },
          { text: "[CMD] updateDetails(did:cer:44b1, field: \"ADDRESS\")", time: "13:40:41", tone: "primary" },
          { text: "[AUTH] Attesting update to registration...", time: "13:40:42", tone: "secondary" },
          { text: "[OK] Registry current for emergency contact.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Emergency Access",
        description:
          "During an emergency, a consulate confirms the citizen's identity and registration in seconds, so assistance is provided without verification delay.",
        icon: ShieldCheck,
        logFilename: "cerulea_consular.log",
        logLines: [
          { text: "[SYS] Emergency registration lookup...", time: "02:05:47", tone: "default" },
          { text: "[CMD] verifyRegistration(did:cer:44b1)", time: "02:05:47", tone: "primary" },
          { text: "[SYS] Identity and registration confirmed.", time: "02:05:48", tone: "default" },
          { text: "[OK] Assistance authorized without delay.", time: "02:05:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes consular registration into modular contracts. Each layer registers, transfers, updates, and verifies without the record being trapped in one consulate's files.",
    layers: [
      {
        title: "Registration Registry",
        subtitle: "The Single Record",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single Record",
          description:
            "The foundational layer. It anchors one verified registration per overseas citizen bound to their identity, so registration is a single portable record rather than a per-consulate file that does not travel.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RegistrationRegistry {\n  struct Registration {\n    bytes32 did;\n    bytes32 consulate;\n    uint256 registeredAt;\n    bool active;\n  }\n\n  mapping(bytes32 => Registration) public registrations;\n\n  function register(bytes32 did, bytes32 consulate) external onlyConsulate {\n    registrations[did] = Registration(did, consulate, block.timestamp, true);\n  }\n}",
        simAction: "Simulate Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying passport and residence...", tone: "default" },
          { text: "Binding registration to citizen DID...", tone: "default" },
          { text: "Recording home consulate...", tone: "default" },
          { text: "Writing registration to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Single registration anchored.", tone: "success" },
        ],
      },
      {
        title: "Transfer Router",
        subtitle: "The Jurisdiction Move",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Jurisdiction Move",
          description:
            "Preserves continuity on relocation. It transfers the registration to a new consular jurisdiction on-chain, so a citizen who moves keeps recognized status without starting a fresh paper registration.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function transfer(bytes32 did, bytes32 toConsulate) external onlyConsulate {\n    require(registrations[did].active, \"Not registered\");\n    registrations[did].consulate = toConsulate;\n    emit JurisdictionTransferred(did, toConsulate);\n}",
        simAction: "Simulate Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Citizen relocating jurisdictions...", tone: "default" },
          { text: "Confirming active registration...", tone: "default" },
          { text: "Reassigning to Chicago consulate...", tone: "default" },
          { text: "Preserving registration continuity...", tone: "default" },
          { text: "[SUCCESS] Jurisdiction transferred on-chain.", tone: "success" },
        ],
      },
      {
        title: "Detail Notary",
        subtitle: "The Current Contact",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Current Contact",
          description:
            "Keeps the registry usable in a crisis. Compliance Attestations record contact and address updates, so a consulate has current details when it needs to reach a citizen in an emergency.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function updateDetails(bytes32 did, bytes32 field, bytes32 valueHash) external {\n    require(ownerOf[did] == msg.sender || _isConsulate(msg.sender), \"Not authorized\");\n    detailUpdates[did].push(Update(field, valueHash, block.timestamp));\n    emit DetailsUpdated(did, field);\n}",
        simAction: "Simulate Detail Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Citizen updating address...", tone: "default" },
          { text: "Verifying update authorization...", tone: "default" },
          { text: "Attesting change to registration...", tone: "default" },
          { text: "Recording current contact...", tone: "default" },
          { text: "[SUCCESS] Registry current for emergencies.", tone: "success" },
        ],
      },
      {
        title: "Access Verifier",
        subtitle: "The Emergency Window",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Emergency Window",
          description:
            "Confirms identity when it matters most. Any consulate in the network verifies a citizen's identity and registration in seconds, so emergency assistance is not held up by proving who the citizen is.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyRegistration(bytes32 did) external view returns (bool active, bytes32 consulate) {\n    Registration memory r = registrations[did];\n    active = r.active;\n    consulate = r.consulate;\n}",
        simAction: "Simulate Emergency Access",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Consulate performing emergency lookup...", tone: "default" },
          { text: "Confirming citizen identity...", tone: "default" },
          { text: "Reading active registration...", tone: "default" },
          { text: "Authorizing assistance...", tone: "default" },
          { text: "[SUCCESS] Registration confirmed without delay.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Portable consular registration is a horizontal capability. Here is how different actors put the overseas citizen registry to work.",
    sectors: [
      { icon: Globe, title: "Consulates & Missions", description: "Confirm identity and registration for any registered citizen instantly, delivering emergency services without delay even when the citizen registered at another mission.", assetTypes: ["Registrations", "Emergency Lookups", "Service Trails"] },
      { icon: Landmark, title: "Foreign Ministries", description: "Maintain one verified registry across all missions, so citizen registration data is consistent and portable rather than fragmented per consulate.", assetTypes: ["Citizen Registry", "Jurisdiction Transfers", "Attested Updates"] },
      { icon: Users, title: "Overseas Citizens", description: "Register once and keep recognized status wherever they relocate, so a consulate can find and assist them in a crisis without re-registration.", assetTypes: ["Registration Credentials", "Contact Details", "Recognition Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy consular registration systems or serving citizens through a mobile app, Cerulea routes both into one portable registration ledger.",
    tracks: [
      {
        title: "Track A: Consular System Bridging",
        description:
          "For mission and foreign ministry systems. Registration and transfer events are translated into anchored on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Consular System", sublabel: "Mission Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Overseas Registry Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Citizen App Registration",
        description:
          "For citizens registering on mobile. A wallet signs each registration and detail update from the citizen's device and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Citizen App / Wallet", sublabel: "Overseas Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Registration Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Portable Registration Record", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an overseas registry with single registration, jurisdiction transfer, and second-scale emergency verification from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Registration & Transfer Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects consular registration integration benchmarks. Wiring mission systems, building portable registration, and shipping emergency verification for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your registration and transfer rules into pre-audited WebAssembly binaries and provisions the shared registry ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "evidence-chain-of-custody-for-criminal-investigations",
    icon: Fingerprint,
    eyebrow: "Evidence Custody Engine",
    headline1: "Time-stamp every handler.",
    headline2: "Defeat every challenge.",
    heroDescription:
      "Build an immutable evidence chain of custody network where every handling event is time-stamped and multi-party verified. Cerulea Studio assembles it from Evidence Chain, Device Attestation, and DID and VC Ledger, so custody challenges are resolved with cryptographic evidence and a complete on-chain record survives cross-examination in court.",
    heroCta: "Deploy Custody Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a paper custody log into a time-stamped, multi-party-verified chain that withstands tampering challenges.",
    mechanics: [
      { title: "Evidence Registration", description: "Anchor at seizure. The Evidence Chain module registers each item at collection with its case, location, and collecting officer, fixing the genesis of an unbroken custody record." },
      { title: "Multi-Party Handoff", description: "Verify each transfer. A custody change requires both the releasing and receiving handler to sign, so no gap can appear in the chain from a single unilateral log entry." },
      { title: "Time-Stamped Events", description: "Prove exact timing. Every handling event is time-stamped on-chain, so the sequence and duration of custody are provable rather than reconstructed from a register." },
      { title: "Handler Identity", description: "Bind to credentials. The DID and VC Ledger ties each action to a credentialed handler, so who touched an item and when is cryptographically attributable." },
      { title: "Integrity Sealing", description: "Detect tampering. Device Attestation seals evidence images and hashes, so any alteration of a digital exhibit breaks its seal and is provably detectable." },
      { title: "Court Presentation", description: "Answer challenges with proof. When a defense challenges integrity, the complete on-chain custody record with timestamps and signatures is presented, resolving the challenge on evidence." },
    ],
    lifecycleTitle: "The Custody Lifecycle",
    lifecycleSubtitle:
      "Follow a single exhibit from seizure through multi-party custody transfers to a court challenge resolved on record.",
    lifecycleSteps: [
      {
        label: "Evidence Seizure",
        description:
          "An officer registers an item at seizure. The contract anchors its case, location, and collecting officer as the genesis of the custody chain.",
        icon: Fingerprint,
        logFilename: "cerulea_evidence.log",
        logLines: [
          { text: "[SYS] Registering seized evidence...", time: "22:14:11", tone: "default" },
          { text: "[CMD] seize { case: \"CR_7742\", item: \"EX_881\", officer: \"OFF_0x21\" }", time: "22:14:11", tone: "primary" },
          { text: "[AUTH] Verifying collecting officer credential...", time: "22:14:12", tone: "secondary" },
          { text: "[OK] Evidence anchored at block 7112233.", time: "22:14:12", tone: "success" },
        ],
      },
      {
        label: "Custody Transfer",
        description:
          "The exhibit moves to the forensic lab. Both the releasing and receiving handler co-sign, so no unverified gap can appear in the chain.",
        icon: Handshake,
        logFilename: "cerulea_evidence.log",
        logLines: [
          { text: "[SYS] Custody transfer pending co-signature...", time: "09:02:30", tone: "default" },
          { text: "[CMD] transferCustody(EX_881, to: \"FSL_0x44\")", time: "09:03:01", tone: "primary" },
          { text: "[SYS] Co-signature recorded from both handlers.", time: "09:03:01", tone: "default" },
          { text: "[OK] Custody transferred. Chain intact.", time: "09:03:02", tone: "success" },
        ],
      },
      {
        label: "Integrity Seal",
        description:
          "A forensic image of the exhibit is sealed by its hash. Any later alteration breaks the seal and is detectable, protecting exhibit integrity.",
        icon: Lock,
        logFilename: "cerulea_evidence.log",
        logLines: [
          { text: "[SYS] Sealing forensic exhibit image...", time: "13:40:41", tone: "default" },
          { text: "[CMD] sealExhibit(EX_881, hash: 0x8a1f...c2)", time: "13:40:41", tone: "primary" },
          { text: "[AUTH] Binding attested hash to custody record...", time: "13:40:42", tone: "secondary" },
          { text: "[OK] Exhibit sealed, tamper-evident.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Court Challenge",
        description:
          "A defense lawyer challenges tampering. The prosecution presents the complete custody record with timestamps and signatures, and the challenge is dismissed.",
        icon: Gavel,
        logFilename: "cerulea_evidence.log",
        logLines: [
          { text: "[SYS] Assembling custody record for court...", time: "11:20:47", tone: "default" },
          { text: "[CMD] presentChain(EX_881)", time: "11:20:47", tone: "primary" },
          { text: "[SYS] 5 signed handoffs, seal intact from genesis.", time: "11:20:48", tone: "default" },
          { text: "[OK] Challenge dismissed. Case proceeds.", time: "11:20:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes evidence custody into modular contracts. Each layer registers, transfers, seals, and presents without any handler able to alter the record after the fact.",
    layers: [
      {
        title: "Evidence Registry",
        subtitle: "The Custody Genesis",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Custody Genesis",
          description:
            "The foundational layer. It registers each item at seizure with its case, location, and collecting officer, fixing the immutable genesis that an unbroken chain of custody is built on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract EvidenceRegistry {\n  struct Exhibit {\n    bytes32 caseId;\n    bytes32 itemId;\n    address collector;\n    bytes32 sealHash;\n    uint256 seizedAt;\n  }\n\n  mapping(bytes32 => Exhibit) public exhibits;\n\n  function seize(bytes32 caseId, bytes32 itemId) external onlyOfficer {\n    exhibits[itemId] = Exhibit(caseId, itemId, msg.sender, 0, block.timestamp);\n  }\n}",
        simAction: "Simulate Seizure",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying collecting officer credential...", tone: "default" },
          { text: "Recording case and item identity...", tone: "default" },
          { text: "Fixing custody genesis...", tone: "default" },
          { text: "Writing exhibit to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Evidence anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Handoff Notary",
        subtitle: "The Two-Signer Transfer",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Signer Transfer",
          description:
            "Closes the gaps defense lawyers exploit. A custody change requires both the releasing and receiving handler to sign, so no unilateral entry can create an unverified break in the chain.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function transferCustody(bytes32 itemId, address to) external {\n    require(custody[itemId] == msg.sender, \"Not holder\");\n    pending[itemId] = to;\n    // receiver must accept\n}\n\nfunction acceptCustody(bytes32 itemId) external {\n    require(pending[itemId] == msg.sender, \"Not receiver\");\n    custody[itemId] = msg.sender;\n    chain[itemId].push(Hop(msg.sender, block.timestamp));\n    emit CustodyTransferred(itemId, msg.sender);\n}",
        simAction: "Simulate Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Releasing handler initiating transfer...", tone: "default" },
          { text: "Receiving lab handler accepting...", tone: "default" },
          { text: "Recording both co-signatures...", tone: "default" },
          { text: "Appending hop to custody chain...", tone: "default" },
          { text: "[SUCCESS] Custody transferred with proof.", tone: "success" },
        ],
      },
      {
        title: "Integrity Seal",
        subtitle: "The Tamper Detector",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Tamper Detector",
          description:
            "Protects the exhibit itself. Device Attestation seals evidence images by their hash, so any alteration of a digital exhibit breaks the seal and is provably detectable at presentation.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function sealExhibit(bytes32 itemId, bytes32 hash) external onlyForensic {\n    exhibits[itemId].sealHash = hash;\n    emit ExhibitSealed(itemId, hash, block.timestamp);\n}",
        simAction: "Simulate Integrity Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing forensic image hash...", tone: "default" },
          { text: "Attesting hash via device root...", tone: "default" },
          { text: "Binding seal to custody record...", tone: "default" },
          { text: "Recording tamper-evident seal...", tone: "default" },
          { text: "[SUCCESS] Exhibit sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Chain Presenter",
        subtitle: "The Courtroom Proof",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Courtroom Proof",
          description:
            "Resolves challenges on evidence. It assembles the complete custody chain with timestamps and signatures, so a tampering allegation is answered with a cryptographic record rather than an officer's recollection.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function presentChain(bytes32 itemId) external view returns (Hop[] memory hops, bytes32 seal) {\n    return (chain[itemId], exhibits[itemId].sealHash);\n}",
        simAction: "Simulate Chain Presentation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Defense challenging integrity...", tone: "default" },
          { text: "Assembling 5 signed handoffs...", tone: "default" },
          { text: "Confirming seal intact from genesis...", tone: "default" },
          { text: "Presenting complete record to court...", tone: "default" },
          { text: "[SUCCESS] Challenge dismissed on record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Immutable chain of custody is a horizontal capability. Here is how different justice actors put the evidence ledger to work.",
    sectors: [
      { icon: Shield, title: "Police & Investigation", description: "Register and transfer evidence on a co-signed, time-stamped chain, so custody gaps that lead to acquittals cannot open from a single unverified log entry.", assetTypes: ["Seized Exhibits", "Custody Transfers", "Handler Records"] },
      { icon: FlaskConical, title: "Forensic Laboratories", description: "Seal exhibit images by hash and co-sign every handoff, so lab handling is tamper-evident and defensible when challenged in court.", assetTypes: ["Forensic Seals", "Lab Custody", "Integrity Proofs"] },
      { icon: Gavel, title: "Prosecution & Courts", description: "Answer tampering challenges with a complete cryptographic custody record, resolving integrity disputes on evidence instead of contested testimony.", assetTypes: ["Custody Chains", "Court Exhibits", "Challenge Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy evidence management system or capturing handoffs from officer devices, Cerulea routes both into one immutable custody ledger.",
    tracks: [
      {
        title: "Track A: Evidence System Bridging",
        description:
          "For police and forensic evidence management systems. Seizure and transfer events are translated into co-signed on-chain custody records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Evidence Management System", sublabel: "Police & FSL Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Evidence Custody Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Officer Device Capture",
        description:
          "For officers and lab staff on devices. A credentialed device co-signs each seizure and handoff at the point of custody and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Officer / Lab Device", sublabel: "Credentialed Handlers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Custody Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Immutable Custody Record", icon: Gavel, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an evidence custody network with multi-party handoffs, integrity sealing, and courtroom-grade presentation from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Integrity Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects law-enforcement evidence integration benchmarks. Wiring evidence systems, building co-signed custody logic, and shipping courtroom-grade presentation for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and integrity rules into pre-audited WebAssembly binaries and provisions the shared custody ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "missing-persons-database-with-cross-jurisdiction-alert-sharing",
    icon: Users,
    eyebrow: "Cross-Jurisdiction Alert Engine",
    headline1: "File in one state.",
    headline2: "Alert them all.",
    heroDescription:
      "Stand up a shared missing persons alert system where a report filed in one state instantly notifies police in other states where the person might be found. Cerulea Studio assembles it from Civil Registry, Notifications, and Audit Logs, sharing alerts in real time while keeping investigation details restricted to authorized personnel.",
    heroCta: "Deploy Alert Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a state-siloed report into a shared alert that reaches every relevant jurisdiction while protecting case details.",
    mechanics: [
      { title: "Shared Report Anchor", description: "File once, visible widely. The Civil Registry anchors each missing persons report so participating state forces see the alert instantly instead of within one state's system." },
      { title: "Cross-State Alerts", description: "Notify where it matters. Notifications push the alert to states along known travel or trafficking routes, so a report filed in one place reaches police where the person might be found." },
      { title: "Restricted Case Detail", description: "Share the alert, guard the case. Public-facing alert fields are shared while sensitive investigation detail stays restricted to authorized personnel through access control." },
      { title: "Sighting Matching", description: "Connect a lead anywhere. A sighting recorded in any state is matched against active reports, so information surfacing far from the filing location links to the right case." },
      { title: "Status Coordination", description: "Keep forces in sync. Updates to a report's status propagate across jurisdictions, so no force acts on a case already resolved elsewhere." },
      { title: "Audit Trail", description: "Log every access. Audit Logs record who viewed or updated a report, protecting sensitive cases with an accountable access history." },
    ],
    lifecycleTitle: "The Alert Lifecycle",
    lifecycleSubtitle:
      "Follow a single report from one state's filing through cross-jurisdiction alerts to a matched sighting elsewhere.",
    lifecycleSteps: [
      {
        label: "Report Filing",
        description:
          "A missing persons report is filed with one state's police. The contract anchors the shared alert fields while keeping case detail restricted.",
        icon: ScrollText,
        logFilename: "cerulea_missing.log",
        logLines: [
          { text: "[SYS] Anchoring missing persons report...", time: "10:14:11", tone: "default" },
          { text: "[CMD] fileReport { case: \"MP_7742\", state: \"MH\", age: 14 }", time: "10:14:11", tone: "primary" },
          { text: "[AUTH] Verifying filing officer credential...", time: "10:14:12", tone: "secondary" },
          { text: "[OK] Report anchored at block 7212233.", time: "10:14:12", tone: "success" },
        ],
      },
      {
        label: "Cross-State Alert",
        description:
          "The alert propagates to police in states along likely routes. Each relevant jurisdiction is notified instantly of the active case.",
        icon: Zap,
        logFilename: "cerulea_missing.log",
        logLines: [
          { text: "[SYS] Propagating alert to route states...", time: "10:15:30", tone: "default" },
          { text: "[CMD] alertStates(MP_7742, [\"GJ\", \"RJ\", \"DL\"])", time: "10:15:31", tone: "primary" },
          { text: "[SYS] 3 state forces notified in real time.", time: "10:15:31", tone: "default" },
          { text: "[OK] Cross-jurisdiction alert dispatched.", time: "10:15:32", tone: "success" },
        ],
      },
      {
        label: "Sighting Match",
        description:
          "A sighting is recorded in another state and matched against active reports. The lead links to the original case for the filing force.",
        icon: Search,
        logFilename: "cerulea_missing.log",
        logLines: [
          { text: "[SYS] Matching sighting against active reports...", time: "16:40:41", tone: "default" },
          { text: "[CMD] recordSighting(state: \"DL\", desc: 0x71...c2)", time: "16:40:41", tone: "primary" },
          { text: "[SYS] Match found against MP_7742.", time: "16:40:42", tone: "default" },
          { text: "[OK] Lead linked and filing force notified.", time: "16:40:42", tone: "success" },
        ],
      },
      {
        label: "Status Sync",
        description:
          "The case is resolved and the status propagates across jurisdictions, so no force continues to act on an already closed report.",
        icon: FileCheck,
        logFilename: "cerulea_missing.log",
        logLines: [
          { text: "[SYS] Propagating status update...", time: "18:22:47", tone: "default" },
          { text: "[CMD] updateStatus(MP_7742, status: \"FOUND\")", time: "18:22:47", tone: "primary" },
          { text: "[AUTH] Logging access and update...", time: "18:22:48", tone: "secondary" },
          { text: "[OK] Status synced across jurisdictions.", time: "18:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes cross-jurisdiction alerting into modular contracts. Each layer files, alerts, matches, and syncs while keeping sensitive case detail restricted.",
    layers: [
      {
        title: "Report Registry",
        subtitle: "The Shared Alert",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Alert",
          description:
            "The foundational layer. It anchors each report so participating forces see the alert immediately, separating shareable alert fields from restricted investigation detail from the moment of filing.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ReportRegistry {\n  struct Report {\n    bytes32 caseId;\n    bytes32 filingState;\n    bytes32 alertHash;\n    bytes32 sealedDetail;\n    bytes32 status;\n  }\n\n  mapping(bytes32 => Report) public reports;\n\n  function file(bytes32 caseId, bytes32 state, bytes32 alertHash, bytes32 detail) external onlyOfficer {\n    reports[caseId] = Report(caseId, state, alertHash, detail, \"ACTIVE\");\n  }\n}",
        simAction: "Simulate Report Filing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying filing officer credential...", tone: "default" },
          { text: "Separating alert from case detail...", tone: "default" },
          { text: "Anchoring shared alert fields...", tone: "default" },
          { text: "Writing report to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Report anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Alert Dispatcher",
        subtitle: "The Route Notifier",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Route Notifier",
          description:
            "Breaks the state silo. It pushes the alert to police in every relevant jurisdiction instantly, so a report filed in one state reaches the forces where the person might actually be found.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function alertStates(bytes32 caseId, bytes32[] calldata states) external onlyFilingForce {\n    for (uint i; i < states.length; i++) {\n        emit AlertDispatched(caseId, states[i], block.timestamp);\n    }\n}",
        simAction: "Simulate Alert Dispatch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Selecting states along route...", tone: "default" },
          { text: "Dispatching alert to Gujarat...", tone: "default" },
          { text: "Dispatching alert to Delhi...", tone: "default" },
          { text: "Notifying all route forces...", tone: "default" },
          { text: "[SUCCESS] Cross-state alert dispatched.", tone: "success" },
        ],
      },
      {
        title: "Sighting Matcher",
        subtitle: "The Lead Linker",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Lead Linker",
          description:
            "Connects information across distance. It matches a sighting recorded anywhere against active reports, so a lead surfacing far from the filing location links to the correct case and force.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function recordSighting(bytes32 state, bytes32 descriptorHash) external onlyOfficer returns (bytes32 caseId) {\n    caseId = _matchActive(descriptorHash);\n    if (caseId != 0) emit SightingMatched(caseId, state, block.timestamp);\n}",
        simAction: "Simulate Sighting Match",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording sighting in Delhi...", tone: "default" },
          { text: "Matching against active reports...", tone: "default" },
          { text: "Match found for case MP_7742...", tone: "default" },
          { text: "Linking lead to filing force...", tone: "default" },
          { text: "[SUCCESS] Sighting linked to case.", tone: "success" },
        ],
      },
      {
        title: "Status Coordinator",
        subtitle: "The Accountable Sync",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accountable Sync",
          description:
            "Keeps forces aligned and access logged. It propagates status changes across jurisdictions and, through Audit Logs, records every view and update, protecting sensitive cases with an accountable history.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function updateStatus(bytes32 caseId, bytes32 status) external onlyAuthorized {\n    reports[caseId].status = status;\n    accessLog[caseId].push(Access(msg.sender, \"STATUS\", block.timestamp));\n    emit StatusSynced(caseId, status);\n}",
        simAction: "Simulate Status Sync",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Marking case resolved as found...", tone: "default" },
          { text: "Propagating status across states...", tone: "default" },
          { text: "Logging access and update...", tone: "default" },
          { text: "Syncing all jurisdictions...", tone: "default" },
          { text: "[SUCCESS] Status synced and logged.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Cross-jurisdiction alert sharing is a horizontal capability. Here is how different actors put the missing persons ledger to work.",
    sectors: [
      { icon: Shield, title: "State Police Forces", description: "See reports filed in other states instantly and match sightings against active cases, so interstate movement no longer hides a missing person from the right force.", assetTypes: ["Missing Reports", "Cross-State Alerts", "Sighting Matches"] },
      { icon: Users, title: "Anti-Trafficking Units", description: "Track cases involving interstate movement across a shared alert network, linking leads along trafficking routes while keeping investigation detail restricted.", assetTypes: ["Route Alerts", "Case Links", "Restricted Dossiers"] },
      { icon: Landmark, title: "National Crime Bureaus", description: "Coordinate missing persons data across states with an accountable access trail, replacing manual inter-state correspondence with real-time sharing.", assetTypes: ["National Registry", "Access Logs", "Status Syncs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy state police systems or capturing sightings from officer devices, Cerulea routes both into one shared alert ledger.",
    tracks: [
      {
        title: "Track A: State Police Bridging",
        description:
          "For state police and crime bureau systems. Report and sighting events are translated into shared on-chain alert records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "State Police System", sublabel: "Jurisdiction Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Alert Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Missing Persons Alert Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Officer Device Capture",
        description:
          "For officers recording sightings on the ground. A credentialed device records each sighting and status update and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Officer Device / Wallet", sublabel: "Field Personnel", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Alert Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Alert Record", icon: Users, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-jurisdiction alert network with shared reports, route notifications, and sighting matching from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Alert & Access Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects inter-agency policing integration benchmarks. Wiring state systems, building cross-jurisdiction alerting, and shipping restricted sighting matching for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your alert and access rules into pre-audited WebAssembly binaries and provisions the shared alert ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "seized-asset-and-property-custody-tracking-for-criminal-cases",
    icon: Package,
    eyebrow: "Seized Property Engine",
    headline1: "Track every seizure.",
    headline2: "Close every gap.",
    heroDescription:
      "Deliver a chain-of-custody record for assets seized in criminal investigations, from seizure through court proceedings to final disposal or return. Evidence Chain, Provenance Notary, and Audit Logs anchor the core, anchoring every custody transfer and status change so the record holds up to scrutiny in court.",
    heroCta: "Deploy Custody Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a gap-prone seized-property register into a verifiable custody record that survives legal challenge.",
    mechanics: [
      { title: "Seizure Registration", description: "Anchor at seizure. The Evidence Chain registers cash, vehicles, and property at seizure with case and condition, fixing the start of a verifiable custody record." },
      { title: "Custody Transfers", description: "Sign every move. Each transfer between malkhana, court, and storage is co-signed, so no gap opens in the chain that a challenge could exploit." },
      { title: "Condition Records", description: "Document state changes. The Provenance Notary anchors condition and valuation records, so disputes over damage or shortfall are settled against evidence." },
      { title: "Court Status Sync", description: "Track the legal decision. Whether the court orders return, confiscation, or disposal, the status is recorded, so property handling always follows the ruling." },
      { title: "Disposal Trail", description: "Prove final handling. The final disposal or return is anchored, closing the record with verifiable proof of what happened to each seized asset." },
      { title: "Audit Access", description: "Log who touched it. Audit Logs record every access and action, giving courts and oversight a defensible history of custody." },
    ],
    lifecycleTitle: "The Seizure Lifecycle",
    lifecycleSubtitle:
      "Follow a single seized asset from registration through court-tracked custody to final disposal or return.",
    lifecycleSteps: [
      {
        label: "Asset Seizure",
        description:
          "An asset is seized and registered with its case and condition. The contract anchors the seizure as the genesis of a verifiable custody record.",
        icon: Package,
        logFilename: "cerulea_seized.log",
        logLines: [
          { text: "[SYS] Registering seized asset...", time: "14:14:11", tone: "default" },
          { text: "[CMD] seizeAsset { case: \"CR_7742\", item: \"VEH_221\", value: 850000 }", time: "14:14:11", tone: "primary" },
          { text: "[AUTH] Verifying seizing officer credential...", time: "14:14:12", tone: "secondary" },
          { text: "[OK] Asset anchored at block 7312233.", time: "14:14:12", tone: "success" },
        ],
      },
      {
        label: "Custody Transfer",
        description:
          "The asset moves to the malkhana or court storage. Both parties co-sign the transfer, keeping the custody chain unbroken.",
        icon: Handshake,
        logFilename: "cerulea_seized.log",
        logLines: [
          { text: "[SYS] Transfer pending co-signature...", time: "09:02:30", tone: "default" },
          { text: "[CMD] transferCustody(VEH_221, to: \"MALKHANA_9\")", time: "09:03:01", tone: "primary" },
          { text: "[SYS] Both parties co-signed transfer.", time: "09:03:01", tone: "default" },
          { text: "[OK] Custody moved. Chain intact.", time: "09:03:02", tone: "success" },
        ],
      },
      {
        label: "Court Decision",
        description:
          "The court decides the asset's fate. The status is recorded as return, confiscation, or disposal, so handling follows the ruling.",
        icon: Gavel,
        logFilename: "cerulea_seized.log",
        logLines: [
          { text: "[SYS] Recording court decision on asset...", time: "11:40:41", tone: "default" },
          { text: "[CMD] setDisposition(VEH_221, order: \"RETURN\")", time: "11:40:41", tone: "primary" },
          { text: "[AUTH] Binding court order to asset...", time: "11:40:42", tone: "secondary" },
          { text: "[OK] Disposition set. Handling to follow ruling.", time: "11:40:42", tone: "success" },
        ],
      },
      {
        label: "Final Disposal",
        description:
          "The asset is returned to its owner per the court order. The final handling is anchored, closing the custody record with verifiable proof.",
        icon: FileCheck,
        logFilename: "cerulea_seized.log",
        logLines: [
          { text: "[SYS] Recording final asset handling...", time: "15:22:47", tone: "default" },
          { text: "[CMD] finalize(VEH_221, action: \"RETURNED\")", time: "15:22:47", tone: "primary" },
          { text: "[SYS] Owner receipt co-signed and anchored.", time: "15:22:48", tone: "default" },
          { text: "[OK] Custody record closed with proof.", time: "15:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes seized-asset custody into modular contracts. Each layer seizes, transfers, decides, and finalizes without a gap opening for a challenge to exploit.",
    layers: [
      {
        title: "Seizure Registry",
        subtitle: "The Custody Genesis",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Custody Genesis",
          description:
            "The foundational layer. It registers each seized asset with its case, condition, and valuation, fixing the immutable genesis that a defensible custody record is built on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SeizureRegistry {\n  struct Asset {\n    bytes32 caseId;\n    bytes32 itemId;\n    uint256 value;\n    bytes32 disposition;\n    address holder;\n  }\n\n  mapping(bytes32 => Asset) public assets;\n\n  function seize(bytes32 caseId, bytes32 itemId, uint256 value) external onlyOfficer {\n    assets[itemId] = Asset(caseId, itemId, value, \"HELD\", msg.sender);\n  }\n}",
        simAction: "Simulate Seizure",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying seizing officer credential...", tone: "default" },
          { text: "Recording asset value and condition...", tone: "default" },
          { text: "Fixing custody genesis...", tone: "default" },
          { text: "Writing asset to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Seized asset anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Transfer Notary",
        subtitle: "The Two-Signer Move",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Signer Move",
          description:
            "Closes the gaps challenges exploit. Each custody transfer between malkhana, court, and storage requires both parties to sign, so no unverified break can appear in the property's chain.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function transferCustody(bytes32 itemId, address to) external {\n    require(assets[itemId].holder == msg.sender, \"Not holder\");\n    assets[itemId].holder = to;\n    custodyChain[itemId].push(Hop(to, block.timestamp));\n    emit CustodyTransferred(itemId, to);\n}",
        simAction: "Simulate Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Releasing holder initiating transfer...", tone: "default" },
          { text: "Malkhana receiving custody...", tone: "default" },
          { text: "Recording both co-signatures...", tone: "default" },
          { text: "Appending hop to chain...", tone: "default" },
          { text: "[SUCCESS] Custody moved with proof.", tone: "success" },
        ],
      },
      {
        title: "Disposition Binder",
        subtitle: "The Court Order Link",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Court Order Link",
          description:
            "Ties handling to the ruling. It records the court's decision to return, confiscate, or dispose against the asset, so final handling can only follow the order and disputes over valuation rest on notarized records.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function setDisposition(bytes32 itemId, bytes32 order) external onlyCourt {\n    assets[itemId].disposition = order;\n    emit DispositionSet(itemId, order, block.timestamp);\n}",
        simAction: "Simulate Disposition",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Court ordering asset return...", tone: "default" },
          { text: "Binding order to asset...", tone: "default" },
          { text: "Recording disposition status...", tone: "default" },
          { text: "Locking handling to ruling...", tone: "default" },
          { text: "[SUCCESS] Court order bound on-chain.", tone: "success" },
        ],
      },
      {
        title: "Disposal Verifier",
        subtitle: "The Closing Proof",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Closing Proof",
          description:
            "Closes the record with evidence. It anchors the final return or disposal with a co-signed receipt and, through Audit Logs, an accountable access history that holds up to scrutiny in court.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function finalize(bytes32 itemId, bytes32 action) external onlyAuthorized {\n    require(assets[itemId].disposition != \"HELD\", \"No order\");\n    finalRecord[itemId] = Final(action, block.timestamp);\n    emit AssetFinalized(itemId, action);\n}",
        simAction: "Simulate Final Disposal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming court order present...", tone: "default" },
          { text: "Recording return to owner...", tone: "default" },
          { text: "Co-signing owner receipt...", tone: "default" },
          { text: "Closing custody record...", tone: "default" },
          { text: "[SUCCESS] Final handling proven on-chain.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable seized-property custody is a horizontal capability. Here is how different justice actors put the asset ledger to work.",
    sectors: [
      { icon: Shield, title: "Police & Malkhana", description: "Register and transfer seized property on a co-signed chain, closing the custody gaps that become grounds for legal challenge over cash and vehicles.", assetTypes: ["Seized Assets", "Custody Transfers", "Condition Records"] },
      { icon: Gavel, title: "Courts", description: "Bind return, confiscation, and disposal orders to the asset and see a verifiable custody history, so property handling always follows the ruling.", assetTypes: ["Disposition Orders", "Custody Chains", "Disposal Records"] },
      { icon: Landmark, title: "Enforcement Agencies", description: "Track high-value seized assets through long proceedings with an accountable trail, defending custody integrity when challenged.", assetTypes: ["Asset Registries", "Valuation Notaries", "Access Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy malkhana register or capturing transfers from officer devices, Cerulea routes both into one seized-property custody ledger.",
    tracks: [
      {
        title: "Track A: Malkhana System Bridging",
        description:
          "For property store and court registry systems. Seizure and transfer events are translated into co-signed on-chain custody records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Malkhana / Court Registry", sublabel: "Property Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Seized Property Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Officer Device Capture",
        description:
          "For officers handling seized property. A credentialed device co-signs each seizure and transfer at the point of custody and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Officer Device / Wallet", sublabel: "Property Handlers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Custody Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Property Custody Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a seized-property custody network with co-signed transfers, court dispositions, and disposal proof from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Disposition Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects law-enforcement property integration benchmarks. Wiring malkhana and court systems, building co-signed custody logic, and shipping disposal proof for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and disposition rules into pre-audited WebAssembly binaries and provisions the shared property ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "land-registry-and-property-title-management",
    icon: Home,
    eyebrow: "Land Title Engine",
    headline1: "Prove clear title.",
    headline2: "In five minutes.",
    heroDescription:
      "Build an integrated land registry covering registration, mutation, and encumbrance with immutable title history and public verification. Land Title Registry, DID and VC Ledger, and Document Signing anchor the core, so a buyer verifies clear title, encumbrance history, and current ownership in minutes and fraud requires compromising multiple government signatories at once.",
    heroCta: "Deploy Land Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fragmented tehsil and sub-registrar records into one immutable title history with public verification.",
    mechanics: [
      { title: "Unified Title Record", description: "Consolidate the fragments. The Land Title Registry binds registration, mutation, and encumbrance into one immutable record per plot, replacing records scattered across tehsil and sub-registrar offices." },
      { title: "Multi-Signatory Mutation", description: "Raise the fraud bar. A title change requires multiple government signatories, so a fraudulent mutation demands compromising several offices at once rather than one." },
      { title: "Encumbrance History", description: "Expose every lien. Mortgages and charges are anchored to the plot, so a buyer sees the full encumbrance history before deciding, not after." },
      { title: "Public Verification", description: "Enable self-service due diligence. A buyer verifies clear title, encumbrance, and current ownership through the public portal in minutes, with no lawyer needed for basic checks." },
      { title: "Double-Registration Block", description: "Stop parallel sales. A plot's single on-chain identity makes double registration detectable, closing a common avenue of land fraud." },
      { title: "Signed Documents", description: "Anchor the deeds. Document Signing binds each sale deed and mutation order by digest, so the paper behind a title is tamper-evident." },
    ],
    lifecycleTitle: "The Title Lifecycle",
    lifecycleSubtitle:
      "Follow a single plot from registration through multi-signatory mutation to a buyer's minutes-long public verification.",
    lifecycleSteps: [
      {
        label: "Plot Registration",
        description:
          "A plot is registered with its boundaries and current owner. The contract anchors a single immutable title identity for the property.",
        icon: Home,
        logFilename: "cerulea_land.log",
        logLines: [
          { text: "[SYS] Registering land parcel...", time: "10:14:11", tone: "default" },
          { text: "[CMD] registerPlot { id: \"PLOT_7742\", owner: \"did:cer:31a\", area: 2400 }", time: "10:14:11", tone: "primary" },
          { text: "[AUTH] Verifying survey record and owner identity...", time: "10:14:12", tone: "secondary" },
          { text: "[OK] Title anchored at block 7412233.", time: "10:14:12", tone: "success" },
        ],
      },
      {
        label: "Encumbrance Anchor",
        description:
          "A mortgage is recorded against the plot. The encumbrance is anchored to the title, becoming visible in every future verification.",
        icon: Lock,
        logFilename: "cerulea_land.log",
        logLines: [
          { text: "[SYS] Anchoring encumbrance to plot...", time: "12:30:30", tone: "default" },
          { text: "[CMD] addEncumbrance(PLOT_7742, type: \"MORTGAGE\", bank: \"B_0x22\")", time: "12:30:31", tone: "primary" },
          { text: "[SYS] Charge bound to title history.", time: "12:30:31", tone: "default" },
          { text: "[OK] Encumbrance visible in verification.", time: "12:30:32", tone: "success" },
        ],
      },
      {
        label: "Multi-Sig Mutation",
        description:
          "Ownership transfers on sale. The mutation requires multiple government signatories, so a fraudulent change cannot pass from a single compromised office.",
        icon: Handshake,
        logFilename: "cerulea_land.log",
        logLines: [
          { text: "[SYS] Processing title mutation...", time: "14:40:41", tone: "default" },
          { text: "[CMD] mutate(PLOT_7742, to: \"did:cer:99f\")", time: "14:40:41", tone: "primary" },
          { text: "[AUTH] Collecting 3 of 3 signatory approvals...", time: "14:40:42", tone: "secondary" },
          { text: "[OK] Ownership transferred. History extended.", time: "14:40:43", tone: "success" },
        ],
      },
      {
        label: "Buyer Verification",
        description:
          "A prospective buyer verifies clear title, encumbrance history, and current ownership through the public portal in five minutes before purchase.",
        icon: Search,
        logFilename: "cerulea_land.log",
        logLines: [
          { text: "[SYS] Public title verification request...", time: "16:22:47", tone: "default" },
          { text: "[CMD] verifyTitle(PLOT_7742)", time: "16:22:47", tone: "primary" },
          { text: "[SYS] Assembling ownership and encumbrance history.", time: "16:22:48", tone: "default" },
          { text: "[OK] Clear title confirmed in 5 minutes.", time: "16:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes land title management into modular contracts. Each layer registers, encumbers, mutates, and verifies without any single office controlling the record.",
    layers: [
      {
        title: "Title Registry",
        subtitle: "The Single Record",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single Record",
          description:
            "The foundational layer. It binds a plot's registration, boundaries, and current owner into one immutable title identity, replacing records fragmented across tehsil and sub-registrar offices.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TitleRegistry {\n  struct Title {\n    bytes32 plotId;\n    bytes32 owner;\n    uint256 area;\n    bool registered;\n  }\n\n  mapping(bytes32 => Title) public titles;\n\n  function register(bytes32 plotId, bytes32 owner, uint256 area) external onlyRegistrar {\n    require(!titles[plotId].registered, \"Double registration\");\n    titles[plotId] = Title(plotId, owner, area, true);\n  }\n}",
        simAction: "Simulate Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying survey and owner identity...", tone: "default" },
          { text: "Checking for existing registration...", tone: "default" },
          { text: "Anchoring single title identity...", tone: "default" },
          { text: "Writing title to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Land title anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Encumbrance Ledger",
        subtitle: "The Lien Register",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Lien Register",
          description:
            "Exposes charges before a sale. It anchors mortgages and liens to the plot, so a buyer sees the full encumbrance history at verification instead of discovering a hidden charge after purchase.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function addEncumbrance(bytes32 plotId, bytes32 kind, address holder) external onlyAuthorized {\n    encumbrances[plotId].push(Encumbrance(kind, holder, block.timestamp, true));\n    emit EncumbranceAdded(plotId, kind, holder);\n}",
        simAction: "Simulate Encumbrance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording bank mortgage...", tone: "default" },
          { text: "Binding charge to plot...", tone: "default" },
          { text: "Adding to encumbrance history...", tone: "default" },
          { text: "Making lien publicly visible...", tone: "default" },
          { text: "[SUCCESS] Encumbrance anchored to title.", tone: "success" },
        ],
      },
      {
        title: "Mutation Engine",
        subtitle: "The Multi-Sig Guard",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Multi-Sig Guard",
          description:
            "Raises the fraud bar dramatically. A title change requires multiple government signatories, so a fraudulent mutation would require compromising several offices simultaneously rather than a single clerk.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function mutate(bytes32 plotId, bytes32 newOwner, bytes[] calldata sigs) external {\n    require(_verifySignatories(plotId, sigs) >= requiredSigners, \"Insufficient approvals\");\n    history[plotId].push(titles[plotId].owner);\n    titles[plotId].owner = newOwner;\n    emit TitleMutated(plotId, newOwner);\n}",
        simAction: "Simulate Mutation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Initiating ownership transfer...", tone: "default" },
          { text: "Collecting signatory approvals...", tone: "default" },
          { text: "Confirming 3 of 3 signatures...", tone: "default" },
          { text: "Extending title history...", tone: "default" },
          { text: "[SUCCESS] Ownership transferred securely.", tone: "success" },
        ],
      },
      {
        title: "Public Verifier",
        subtitle: "The Due-Diligence Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Due-Diligence Window",
          description:
            "Enables self-service verification. It resolves a plot to its ownership and encumbrance history, so a buyer confirms clear title in minutes through the public portal without a lawyer for basic due diligence.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyTitle(bytes32 plotId) external view returns (bytes32 owner, Encumbrance[] memory liens, bytes32[] memory history) {\n    Title memory t = titles[plotId];\n    return (t.owner, encumbrances[plotId], history[plotId]);\n}",
        simAction: "Simulate Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer querying plot title...", tone: "default" },
          { text: "Assembling ownership history...", tone: "default" },
          { text: "Listing active encumbrances...", tone: "default" },
          { text: "Confirming clear title...", tone: "default" },
          { text: "[SUCCESS] Clear title confirmed in minutes.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Immutable land title is a horizontal capability. Here is how different actors put the land registry to work.",
    sectors: [
      { icon: Landmark, title: "Revenue & Registration", description: "Consolidate registration, mutation, and encumbrance into one immutable record, ending the fragmentation that enables fraudulent mutation and double registration.", assetTypes: ["Title Records", "Mutation Orders", "Encumbrance Registers"] },
      { icon: Home, title: "Buyers & Owners", description: "Verify clear title, encumbrance history, and current ownership in minutes through the public portal, doing basic due diligence without a lawyer.", assetTypes: ["Title Verifications", "Ownership Proofs", "Encumbrance Checks"] },
      { icon: Wallet, title: "Banks & Lenders", description: "Confirm a property's title and existing charges before lending, anchoring new mortgages to a tamper-evident record that survives dispute.", assetTypes: ["Mortgage Charges", "Title Confirmations", "Lien Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy sub-registrar systems or serving citizens through a public portal, Cerulea routes both into one immutable land title ledger.",
    tracks: [
      {
        title: "Track A: Registrar System Bridging",
        description:
          "For sub-registrar and revenue department systems. Registration and mutation events are translated into multi-signed on-chain title records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Sub-Registrar System", sublabel: "Revenue Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Deed Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Land Title Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Public Portal Verification",
        description:
          "For buyers and citizens verifying title. A public portal resolves a plot's title and encumbrance history from the ledger with no account needed.",
        connectorLabels: ["PUBLIC QUERY", "STATE EXECUTION"],
        nodes: [
          { label: "Public Title Portal", sublabel: "Buyer & Citizen Access", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Title Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Immutable Title Record", icon: Home, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a land registry with unified titles, multi-signatory mutation, and public verification from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Title & Mutation Rules",
      ruleCount: 54,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects land records modernization benchmarks. Consolidating fragmented registries, building multi-signatory mutation, and shipping public verification for an average land network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your title and mutation rules into pre-audited WebAssembly binaries and provisions the shared land title ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "municipal-property-tax-assessment-and-payment-reconciliation",
    icon: Building2,
    eyebrow: "Property Tax Engine",
    headline1: "Reconcile every property.",
    headline2: "End every dispute.",
    heroDescription:
      "Deploy a reconciled property tax record linking each property's assessed value, billed amount, and payment status in one verifiable system. The Civil Registry, Invoices and Billing, and Audit Logs modules carry the core, linking assessment, bill, and payment history into one record that reduces disputes and gives the municipality an accurate picture of collection.",
    heroCta: "Deploy Tax Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fragmented paper files and disconnected databases into one reconciled assessment-to-payment record per property.",
    mechanics: [
      { title: "Property Assessment", description: "Anchor the assessed value. The Civil Registry binds each property's assessment to its identity, fixing the basis that bills and disputes are measured against." },
      { title: "Linked Billing", description: "Bill from the assessment. Invoices and Billing generate each demand directly from the anchored assessment, so the billed amount always ties to a verifiable value." },
      { title: "Payment Crediting", description: "Credit against the right property. Each payment is recorded against the property's record, ending the mismatch where a payment is not properly credited." },
      { title: "Dispute Resolution", description: "Settle on evidence. Assessment, bill, and payment history sit in one record, so a dispute over value or a missed credit is resolved against the ledger, not conflicting files." },
      { title: "Collection View", description: "See true collection. The municipality reads an accurate, reconciled picture of what is assessed, billed, and paid across the tax base." },
      { title: "Audit Trail", description: "Track every change. Audit Logs record assessment revisions and payment postings, giving auditors a defensible collection history." },
    ],
    lifecycleTitle: "The Reconciliation Lifecycle",
    lifecycleSubtitle:
      "Follow a single property from assessment through linked billing to credited payment and a reconciled record.",
    lifecycleSteps: [
      {
        label: "Assessment Anchor",
        description:
          "A property's assessed value is anchored to its identity. The contract fixes the basis for billing and any future dispute.",
        icon: Home,
        logFilename: "cerulea_ptax.log",
        logLines: [
          { text: "[SYS] Anchoring property assessment...", time: "09:14:11", tone: "default" },
          { text: "[CMD] assess { property: \"P_7742\", arv: 148000 }", time: "09:14:11", tone: "primary" },
          { text: "[AUTH] Verifying property record and zone rate...", time: "09:14:12", tone: "secondary" },
          { text: "[OK] Assessment anchored at block 7512233.", time: "09:14:12", tone: "success" },
        ],
      },
      {
        label: "Bill Generation",
        description:
          "The tax demand is generated from the anchored assessment. The billed amount ties directly to a verifiable assessed value.",
        icon: FileCheck,
        logFilename: "cerulea_ptax.log",
        logLines: [
          { text: "[SYS] Generating tax demand from assessment...", time: "11:30:30", tone: "default" },
          { text: "[CMD] bill(P_7742, period: \"2026-27\")", time: "11:30:31", tone: "primary" },
          { text: "[SYS] Demand computed from anchored ARV.", time: "11:30:31", tone: "default" },
          { text: "[OK] Bill issued and linked to property.", time: "11:30:32", tone: "success" },
        ],
      },
      {
        label: "Payment Credit",
        description:
          "The owner pays and the payment is credited against the property's record, ending the mismatch where a payment fails to reach the right account.",
        icon: Wallet,
        logFilename: "cerulea_ptax.log",
        logLines: [
          { text: "[SYS] Crediting payment to property...", time: "13:40:41", tone: "default" },
          { text: "[CMD] recordPayment(P_7742, amount: 148000, ref: \"TXN_921\")", time: "13:40:41", tone: "primary" },
          { text: "[AUTH] Matching payment to correct property...", time: "13:40:42", tone: "secondary" },
          { text: "[OK] Payment credited. Dues cleared.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Reconciled View",
        description:
          "The municipality reads a reconciled record of assessment, bill, and payment, and any dispute is settled against this single history.",
        icon: PieChart,
        logFilename: "cerulea_ptax.log",
        logLines: [
          { text: "[SYS] Assembling reconciled tax record...", time: "16:22:47", tone: "default" },
          { text: "[CMD] reconcile(P_7742)", time: "16:22:47", tone: "primary" },
          { text: "[SYS] Assessment, bill, and payment aligned.", time: "16:22:48", tone: "default" },
          { text: "[OK] Reconciled record returned.", time: "16:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes property tax into modular contracts. Each layer assesses, bills, credits, and reconciles so assessment and payment never drift into conflicting files.",
    layers: [
      {
        title: "Assessment Registry",
        subtitle: "The Value Anchor",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Value Anchor",
          description:
            "The foundational layer. It binds each property's assessed value to its identity, fixing the immutable basis that every bill is generated from and every dispute is measured against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AssessmentRegistry {\n  struct Assessment {\n    bytes32 property;\n    uint256 annualValue;\n    uint256 assessedAt;\n  }\n\n  mapping(bytes32 => Assessment) public assessments;\n\n  function assess(bytes32 property, uint256 arv) external onlyAssessor {\n    assessments[property] = Assessment(property, arv, block.timestamp);\n  }\n}",
        simAction: "Simulate Assessment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying property and zone rate...", tone: "default" },
          { text: "Recording annual rateable value...", tone: "default" },
          { text: "Fixing assessment basis...", tone: "default" },
          { text: "Writing assessment to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Assessment anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Billing Engine",
        subtitle: "The Linked Demand",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Linked Demand",
          description:
            "Ties bills to verifiable values. Invoices and Billing generate each demand from the anchored assessment, so the billed amount always corresponds to a recorded assessed value rather than a disconnected figure.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function bill(bytes32 property, bytes32 period) external onlyMunicipality {\n    uint256 amount = _computeTax(assessments[property].annualValue);\n    bills[property][period] = Bill(amount, false, block.timestamp);\n    emit Billed(property, period, amount);\n}",
        simAction: "Simulate Billing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading anchored assessed value...", tone: "default" },
          { text: "Computing tax for 2026-27...", tone: "default" },
          { text: "Linking demand to property...", tone: "default" },
          { text: "Issuing bill on-chain...", tone: "default" },
          { text: "[SUCCESS] Bill generated from assessment.", tone: "success" },
        ],
      },
      {
        title: "Payment Ledger",
        subtitle: "The Correct Credit",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Correct Credit",
          description:
            "Ends miscredited payments. It records each payment against the property's own record and clears the matching bill, closing the gap where a payment fails to reach the right account.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function recordPayment(bytes32 property, bytes32 period, uint256 amount, bytes32 ref) external {\n    require(bills[property][period].amount == amount, \"Amount mismatch\");\n    bills[property][period].paid = true;\n    payments[property].push(Payment(amount, ref, block.timestamp));\n    emit PaymentCredited(property, period, amount);\n}",
        simAction: "Simulate Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving owner payment...", tone: "default" },
          { text: "Matching to correct property...", tone: "default" },
          { text: "Clearing outstanding demand...", tone: "default" },
          { text: "Crediting payment on-chain...", tone: "default" },
          { text: "[SUCCESS] Payment credited correctly.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation View",
        subtitle: "The Collection Window",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Collection Window",
          description:
            "Gives the municipality one truth. It reconciles assessment, bill, and payment into one view, so disputes are settled against a single history and collection is measured accurately across the tax base.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function reconcile(bytes32 property) external view returns (uint256 assessed, uint256 billed, uint256 paid) {\n    assessed = assessments[property].annualValue;\n    (billed, paid) = _tally(property);\n}",
        simAction: "Simulate Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Querying property tax record...", tone: "default" },
          { text: "Aligning assessment and bills...", tone: "default" },
          { text: "Summing credited payments...", tone: "default" },
          { text: "Assembling reconciled view...", tone: "default" },
          { text: "[SUCCESS] Reconciled record returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Reconciled property tax is a horizontal capability. Here is how different actors put the tax ledger to work.",
    sectors: [
      { icon: Building2, title: "Municipal Corporations", description: "Link assessment, bill, and payment into one record, cutting disputes and gaining an accurate view of collection instead of reconciling disconnected databases.", assetTypes: ["Assessments", "Tax Demands", "Collection Views"] },
      { icon: Home, title: "Property Owners", description: "See a clear record of assessment, bill, and payment for their property, resolving billing disputes and missed-credit issues against a single history.", assetTypes: ["Property Bills", "Payment Receipts", "Assessment Records"] },
      { icon: Shield, title: "Municipal Audit", description: "Audit assessment revisions and payment postings from a tamper-evident trail, verifying collection accuracy rather than reconstructing it from paper files.", assetTypes: ["Audit Trails", "Revision Records", "Payment Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy municipal tax system or serving citizens through an online payment portal, Cerulea routes both into one reconciled tax ledger.",
    tracks: [
      {
        title: "Track A: Municipal System Bridging",
        description:
          "For municipal tax and assessment systems. Assessment and payment events are translated into linked on-chain tax records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Municipal Tax System", sublabel: "Assessment & Billing Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Property Tax Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Citizen Payment Portal",
        description:
          "For owners paying online. A signed portal records each payment from the citizen's device and credits it directly against the property on the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Payment Portal / Wallet", sublabel: "Owner Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Payment Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Reconciled Tax Record", icon: Building2, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a property tax network with anchored assessment, linked billing, and payment reconciliation from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Assessment & Billing Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects municipal revenue integration benchmarks. Wiring assessment and billing systems, building payment reconciliation, and shipping a collection view for an average tax network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your assessment and billing rules into pre-audited WebAssembly binaries and provisions the shared tax ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "birth-and-death-certificate-issuance-with-hospital-integration",
    icon: ScrollText,
    eyebrow: "Vital Records Engine",
    headline1: "Report at the hospital.",
    headline2: "Certificate issues itself.",
    heroDescription:
      "Stand up an automated birth and death certificate issuance process where hospital-reported events are verified and certificates generated without manual filing. Cerulea Studio assembles it from Civil Registry, DID and VC Ledger, and Provenance Notary, so hospitals report events directly and certificate generation is triggered without a separate manual filing.",
    heroCta: "Deploy Vital Records",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn weeks of manual paperwork into automatic certificate issuance triggered by a verified hospital event.",
    mechanics: [
      { title: "Hospital Event Reporting", description: "Report at source. The Provenance Notary anchors each hospital-reported birth or death directly, so the event enters the registry without a family filing paperwork weeks later." },
      { title: "Event Verification", description: "Confirm before issuing. The reported event is verified against the hospital's credential and the registry, so a certificate is generated only from a genuine, attested event." },
      { title: "Automated Issuance", description: "Generate without filing. The Civil Registry mints the certificate automatically once the event is verified, replacing a manual, error-prone office process." },
      { title: "Verifiable Certificate", description: "Issue as a credential. The DID and VC Ledger issues each certificate as a verifiable credential, so it can be checked instantly and cannot be forged." },
      { title: "Identity Linkage", description: "Seed civil identity. A birth event links to a new civil identity and a death event updates status, keeping the population register current automatically." },
      { title: "Delayed-Registration Cut", description: "Close the gap. By triggering from the hospital, the process reaches families who otherwise never complete registration, cutting unregistered events." },
    ],
    lifecycleTitle: "The Issuance Lifecycle",
    lifecycleSubtitle:
      "Follow a single birth event from hospital reporting through verification to an automatically issued verifiable certificate.",
    lifecycleSteps: [
      {
        label: "Hospital Report",
        description:
          "A hospital reports a birth directly to the registry. The contract anchors the event with its attested clinical record.",
        icon: Hospital,
        logFilename: "cerulea_vital.log",
        logLines: [
          { text: "[SYS] Anchoring hospital-reported event...", time: "06:14:11", tone: "default" },
          { text: "[CMD] reportEvent { type: \"BIRTH\", hospital: \"H_0x22\", id: \"EVT_7742\" }", time: "06:14:11", tone: "primary" },
          { text: "[AUTH] Verifying hospital credential...", time: "06:14:12", tone: "secondary" },
          { text: "[OK] Event anchored at block 7612233.", time: "06:14:12", tone: "success" },
        ],
      },
      {
        label: "Event Verification",
        description:
          "The registry verifies the event against the hospital credential and record, confirming a genuine, attested basis for a certificate.",
        icon: ShieldCheck,
        logFilename: "cerulea_vital.log",
        logLines: [
          { text: "[SYS] Verifying reported event...", time: "06:20:30", tone: "default" },
          { text: "[CMD] verifyEvent(EVT_7742)", time: "06:20:31", tone: "primary" },
          { text: "[SYS] Hospital attestation confirmed.", time: "06:20:31", tone: "default" },
          { text: "[OK] Event verified. Ready for issuance.", time: "06:20:32", tone: "success" },
        ],
      },
      {
        label: "Certificate Issuance",
        description:
          "The registry mints the birth certificate automatically as a verifiable credential, with no separate manual filing by the family.",
        icon: ScrollText,
        logFilename: "cerulea_vital.log",
        logLines: [
          { text: "[SYS] Generating certificate credential...", time: "06:21:41", tone: "default" },
          { text: "[CMD] issueCertificate(EVT_7742, type: \"BIRTH\")", time: "06:21:41", tone: "primary" },
          { text: "[AUTH] Signing verifiable credential...", time: "06:21:42", tone: "secondary" },
          { text: "[OK] Certificate issued automatically.", time: "06:21:42", tone: "success" },
        ],
      },
      {
        label: "Identity Linkage",
        description:
          "The birth links to a new civil identity, seeding the population register automatically and keeping vital records current.",
        icon: IdCard,
        logFilename: "cerulea_vital.log",
        logLines: [
          { text: "[SYS] Seeding civil identity from birth...", time: "06:22:47", tone: "default" },
          { text: "[CMD] linkIdentity(EVT_7742)", time: "06:22:47", tone: "primary" },
          { text: "[SYS] New civil identity created.", time: "06:22:48", tone: "default" },
          { text: "[OK] Population register updated.", time: "06:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes vital records into modular contracts. Each layer reports, verifies, issues, and links without a family navigating a manual filing office.",
    layers: [
      {
        title: "Event Registry",
        subtitle: "The Source Report",
        icon: Hospital,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Source Report",
          description:
            "The foundational layer. It anchors each hospital-reported birth or death at source, so the event enters the registry directly rather than depending on a family to file paperwork weeks later.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract EventRegistry {\n  struct Event {\n    bytes32 id;\n    bytes32 eventType;\n    address hospital;\n    bool verified;\n    bool issued;\n  }\n\n  mapping(bytes32 => Event) public events;\n\n  function report(bytes32 id, bytes32 eventType) external onlyHospital {\n    events[id] = Event(id, eventType, msg.sender, false, false);\n  }\n}",
        simAction: "Simulate Hospital Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying hospital credential...", tone: "default" },
          { text: "Recording birth event...", tone: "default" },
          { text: "Anchoring at source...", tone: "default" },
          { text: "Writing event to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Hospital event anchored.", tone: "success" },
        ],
      },
      {
        title: "Verification Gate",
        subtitle: "The Genuine-Event Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Genuine-Event Check",
          description:
            "Ensures certificates rest on real events. It verifies the reported event against the hospital credential and record, so issuance is triggered only from a genuine, attested basis.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function verifyEvent(bytes32 id) external onlyRegistrar {\n    require(_isCredentialed(events[id].hospital), \"Unverified hospital\");\n    events[id].verified = true;\n    emit EventVerified(id);\n}",
        simAction: "Simulate Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking hospital credential...", tone: "default" },
          { text: "Confirming attested record...", tone: "default" },
          { text: "Marking event verified...", tone: "default" },
          { text: "Clearing for issuance...", tone: "default" },
          { text: "[SUCCESS] Event verified genuine.", tone: "success" },
        ],
      },
      {
        title: "Certificate Issuer",
        subtitle: "The Automatic Mint",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Mint",
          description:
            "Removes the manual office step. Once an event is verified, it mints the certificate as a verifiable credential automatically, replacing an error-prone process that families often never complete.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function issueCertificate(bytes32 id, bytes32 certType) external onlyRegistrar {\n    require(events[id].verified && !events[id].issued, \"Not ready\");\n    events[id].issued = true;\n    certificates[id] = Certificate(certType, keccak256(abi.encode(id)), block.timestamp);\n    emit CertificateIssued(id, certType);\n}",
        simAction: "Simulate Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming event verified...", tone: "default" },
          { text: "Minting certificate credential...", tone: "default" },
          { text: "Signing verifiable certificate...", tone: "default" },
          { text: "Recording issuance...", tone: "default" },
          { text: "[SUCCESS] Certificate issued automatically.", tone: "success" },
        ],
      },
      {
        title: "Identity Linker",
        subtitle: "The Register Seed",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Register Seed",
          description:
            "Keeps the population register current. A birth links to a new civil identity and a death updates status, so vital events automatically maintain the register instead of requiring separate updates.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function linkIdentity(bytes32 id) external onlyRegistrar {\n    if (events[id].eventType == BIRTH) {\n        bytes32 did = _createCivilIdentity(id);\n        emit IdentitySeeded(id, did);\n    } else {\n        _markDeceased(id);\n    }\n}",
        simAction: "Simulate Identity Link",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified birth event...", tone: "default" },
          { text: "Creating new civil identity...", tone: "default" },
          { text: "Linking certificate to identity...", tone: "default" },
          { text: "Updating population register...", tone: "default" },
          { text: "[SUCCESS] Register seeded automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated vital-record issuance is a horizontal capability. Here is how different actors put the registry to work.",
    sectors: [
      { icon: Landmark, title: "Civil Registration Departments", description: "Issue birth and death certificates automatically from verified hospital events, cutting weeks of manual filing and reaching families who never complete registration.", assetTypes: ["Birth Certificates", "Death Certificates", "Register Updates"] },
      { icon: Hospital, title: "Hospitals", description: "Report births and deaths directly as attested events, discharging their reporting duty in one step instead of handing families a form to file elsewhere.", assetTypes: ["Event Reports", "Clinical Attestations", "Hospital Records"] },
      { icon: Users, title: "Families & Citizens", description: "Receive a verifiable certificate without navigating a registration office, and carry a credential that any authority can check instantly.", assetTypes: ["Certificate Credentials", "Civil Identities", "Verification Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy civil registration system or capturing events from hospital information systems, Cerulea routes both into one automated vital records ledger.",
    tracks: [
      {
        title: "Track A: Registration System Bridging",
        description:
          "For civil registration and health department systems. Event and issuance actions are translated into anchored on-chain vital records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Civil Registration System", sublabel: "Registrar Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Vital Records Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Hospital System Capture",
        description:
          "For hospital information systems. A credentialed connector reports each birth and death from the hospital and routes it directly to the ledger for automatic issuance.",
        connectorLabels: ["CREDENTIAL SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Hospital Information System", sublabel: "Clinical Records", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Event Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Automated Certificate Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a vital records network with hospital reporting, event verification, and automatic certificate issuance from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Event & Issuance Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects civil registration integration benchmarks. Wiring hospital systems, building event verification, and shipping automatic certificate issuance for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your event and issuance rules into pre-audited WebAssembly binaries and provisions the shared vital records ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "local-body-procurement-and-contractor-payment-transparency",
    icon: Coins,
    eyebrow: "Local Transparency Engine",
    headline1: "Open the tender.",
    headline2: "Show every payment.",
    heroDescription:
      "Build a transparent record of local body tenders, contractor selection, and payment milestones, visible to citizens and oversight bodies. Procurement Ledger, Escrow and Conditional Settlement, and Audit Logs anchor the core, anchoring the tender process, selection rationale, and payment milestones so residents and auditors see how public funds are spent locally.",
    heroCta: "Deploy Transparency Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn opaque panchayat and municipal spending into a citizen-visible record of tender, selection, and payment.",
    mechanics: [
      { title: "Open Tender Record", description: "Publish the process. The Procurement Ledger anchors each local body tender, so citizens see what was floated instead of learning of a contract after it is awarded." },
      { title: "Selection Rationale", description: "Show why they won. The reason a contractor was selected is recorded against the tender, replacing unexplained awards with a verifiable rationale." },
      { title: "Milestone Payments", description: "Tie money to work. Escrow and Conditional Settlement releases each payment against a completed, verified milestone, so contractors are paid for delivered work." },
      { title: "Citizen Visibility", description: "Open the books locally. Residents view tenders, awards, and payments for their ward, turning public spending into something they can actually scrutinize." },
      { title: "Completion Verification", description: "Confirm before paying. A milestone releases only when completion is verified, blocking payment for work not done on local infrastructure." },
      { title: "Oversight Trail", description: "Give auditors evidence. Audit Logs record the full tender-to-payment history, so oversight bodies audit local spending from a verifiable trail." },
    ],
    lifecycleTitle: "The Local Spending Lifecycle",
    lifecycleSubtitle:
      "Follow a single local works contract from open tender through recorded selection to milestone-verified payment.",
    lifecycleSteps: [
      {
        label: "Tender Published",
        description:
          "A panchayat or municipal body publishes a works tender. The contract anchors it as an openly visible record for citizens.",
        icon: ScrollText,
        logFilename: "cerulea_localgov.log",
        logLines: [
          { text: "[SYS] Publishing local body tender...", time: "10:14:11", tone: "default" },
          { text: "[CMD] publishTender { body: \"PANCH_88\", work: \"ROAD_REPAIR\", value: 1800000 }", time: "10:14:11", tone: "primary" },
          { text: "[AUTH] Verifying local body authorization...", time: "10:14:12", tone: "secondary" },
          { text: "[OK] Tender anchored and visible to citizens.", time: "10:14:12", tone: "success" },
        ],
      },
      {
        label: "Contractor Selection",
        description:
          "A contractor is selected and the rationale recorded. The award and its reasoning become a verifiable part of the local record.",
        icon: Handshake,
        logFilename: "cerulea_localgov.log",
        logLines: [
          { text: "[SYS] Recording contractor selection...", time: "13:30:30", tone: "default" },
          { text: "[CMD] award(PANCH_88, contractor: \"C_0x41\", basis: \"L1\")", time: "13:30:31", tone: "primary" },
          { text: "[SYS] Selection rationale anchored.", time: "13:30:31", tone: "default" },
          { text: "[OK] Award recorded with reasoning.", time: "13:30:32", tone: "success" },
        ],
      },
      {
        label: "Milestone Verification",
        description:
          "A completed work milestone is verified. Only then does escrow release the corresponding payment to the contractor.",
        icon: FileCheck,
        logFilename: "cerulea_localgov.log",
        logLines: [
          { text: "[SYS] Verifying completed milestone...", time: "15:40:41", tone: "default" },
          { text: "[CMD] verifyMilestone(PANCH_88, m: 1)", time: "15:40:41", tone: "primary" },
          { text: "[AUTH] Confirming work completion evidence...", time: "15:40:42", tone: "secondary" },
          { text: "[OK] Milestone verified. Payment authorized.", time: "15:40:42", tone: "success" },
        ],
      },
      {
        label: "Payment Release",
        description:
          "Escrow releases the milestone payment. The transaction is anchored, visible to citizens and auditors as public money spent.",
        icon: Coins,
        logFilename: "cerulea_localgov.log",
        logLines: [
          { text: "[SYS] Releasing milestone payment...", time: "15:41:47", tone: "default" },
          { text: "[CMD] releasePayment(PANCH_88, m: 1, amount: 900000)", time: "15:41:47", tone: "primary" },
          { text: "[SYS] Payment recorded on public ledger.", time: "15:41:48", tone: "default" },
          { text: "[OK] Funds released against verified work.", time: "15:41:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes local spending into modular contracts. Each layer publishes, awards, verifies, and pays so citizens and auditors see the whole process.",
    layers: [
      {
        title: "Tender Registry",
        subtitle: "The Open Record",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Open Record",
          description:
            "The foundational layer. It anchors each local body tender as an openly visible record, so citizens learn of a contract when it is floated rather than after it is quietly awarded.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TenderRegistry {\n  struct Tender {\n    bytes32 body;\n    bytes32 work;\n    uint256 value;\n    address contractor;\n    bool awarded;\n  }\n\n  mapping(bytes32 => Tender) public tenders;\n\n  function publish(bytes32 id, bytes32 body, bytes32 work, uint256 value) external onlyLocalBody {\n    tenders[id] = Tender(body, work, value, address(0), false);\n  }\n}",
        simAction: "Simulate Tender Publish",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying local body authorization...", tone: "default" },
          { text: "Recording road repair tender...", tone: "default" },
          { text: "Making tender publicly visible...", tone: "default" },
          { text: "Writing tender to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Tender anchored for citizens.", tone: "success" },
        ],
      },
      {
        title: "Award Recorder",
        subtitle: "The Selection Rationale",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Selection Rationale",
          description:
            "Explains every award. It records the contractor and the basis for selection against the tender, replacing unexplained local awards with a verifiable, citizen-visible rationale.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function award(bytes32 id, address contractor, bytes32 basis) external onlyLocalBody {\n    tenders[id].contractor = contractor;\n    tenders[id].awarded = true;\n    rationale[id] = Rationale(basis, msg.sender, block.timestamp);\n    emit Awarded(id, contractor, basis);\n}",
        simAction: "Simulate Award",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Selecting lowest bidder...", tone: "default" },
          { text: "Recording selection basis...", tone: "default" },
          { text: "Anchoring award rationale...", tone: "default" },
          { text: "Publishing to local record...", tone: "default" },
          { text: "[SUCCESS] Award recorded with reasoning.", tone: "success" },
        ],
      },
      {
        title: "Milestone Escrow",
        subtitle: "The Completion Gate",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Completion Gate",
          description:
            "Ties local money to delivery. Escrow and Conditional Settlement releases each payment only against a verified milestone, so a contractor is paid for work actually completed on local infrastructure.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function releasePayment(bytes32 id, uint8 m, uint256 amount) external {\n    require(milestones[id][m].verified, \"Not verified\");\n    payable(tenders[id].contractor).transfer(amount);\n    emit MilestonePaid(id, m, amount);\n}",
        simAction: "Simulate Milestone Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming milestone verified...", tone: "default" },
          { text: "Computing payment amount...", tone: "default" },
          { text: "Releasing escrowed funds...", tone: "default" },
          { text: "Recording payment publicly...", tone: "default" },
          { text: "[SUCCESS] Payment released for verified work.", tone: "success" },
        ],
      },
      {
        title: "Public Ledger View",
        subtitle: "The Citizen Window",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Citizen Window",
          description:
            "Opens local spending to scrutiny. It exposes tenders, awards, and payments for a ward, and through Audit Logs an oversight trail, so residents and auditors see how public funds are spent.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function wardSpending(bytes32 body) external view returns (Tender[] memory, Payment[] memory) {\n    return (tendersByBody[body], paymentsByBody[body]);\n}",
        simAction: "Simulate Public View",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Citizen querying ward spending...", tone: "default" },
          { text: "Assembling tenders and awards...", tone: "default" },
          { text: "Listing milestone payments...", tone: "default" },
          { text: "Compiling public view...", tone: "default" },
          { text: "[SUCCESS] Local spending returned openly.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent local procurement is a horizontal capability. Here is how different actors put the spending ledger to work.",
    sectors: [
      { icon: Landmark, title: "Panchayats & Municipal Bodies", description: "Run local tenders and contractor payments on an open ledger, demonstrating that infrastructure funds are awarded and spent transparently.", assetTypes: ["Local Tenders", "Award Rationales", "Milestone Payments"] },
      { icon: Users, title: "Citizens & Ward Committees", description: "See tenders, awards, and payments for their own ward, turning public spending into something residents can actually scrutinize and question.", assetTypes: ["Ward Spending Views", "Award Records", "Payment Histories"] },
      { icon: Shield, title: "Local Audit & Vigilance", description: "Audit the full tender-to-payment history from a verifiable trail, focusing on anomalies instead of reconstructing scattered local records.", assetTypes: ["Audit Trails", "Completion Records", "Spending Reports"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy municipal accounting system or serving citizens through a public dashboard, Cerulea routes both into one transparent local spending ledger.",
    tracks: [
      {
        title: "Track A: Local Accounting Bridging",
        description:
          "For municipal and panchayat accounting systems. Tender and payment events are translated into anchored on-chain spending records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Local Accounting System", sublabel: "Municipal & Panchayat Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Local Spending Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Public Dashboard Access",
        description:
          "For citizens viewing local spending. A public dashboard resolves ward tenders and payments from the ledger with no account needed.",
        connectorLabels: ["PUBLIC QUERY", "STATE EXECUTION"],
        nodes: [
          { label: "Public Spending Dashboard", sublabel: "Citizen Access", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Spending Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Transparent Spending Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a local transparency network with open tenders, recorded selection, and milestone payments from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Tender & Payment Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects local governance integration benchmarks. Wiring accounting systems, building milestone payment logic, and shipping a public spending view for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your tender and payment rules into pre-audited WebAssembly binaries and provisions the shared spending ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "water-supply-connection-and-billing-for-municipal-utilities",
    icon: Droplet,
    eyebrow: "Utility Billing Engine",
    headline1: "Map every connection.",
    headline2: "Bill every drop.",
    heroDescription:
      "Run an automated water billing system based on verified meter readings, linked to the property registry for accurate connection-to-property mapping. Cerulea Studio assembles it from External Data Oracles, Invoices and Billing, and Civil Registry, so bills are generated for the correct property and owner based on actual verified consumption.",
    heroCta: "Deploy Utility Billing",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn inaccurate connection records and estimated bills into verified meter-based billing mapped to the right property.",
    mechanics: [
      { title: "Connection Mapping", description: "Bind meter to property. The Civil Registry links each water connection to the correct property and owner in the registry, ending the mismatch that causes billing errors and revenue loss." },
      { title: "Verified Meter Reads", description: "Bill on real usage. External Data Oracles anchor verified meter readings, so bills reflect actual consumption instead of estimates that drive disputes." },
      { title: "Automated Billing", description: "Generate accurate demands. Invoices and Billing produce each bill from the verified reading and the mapped connection, so the right owner is billed the right amount." },
      { title: "Leak & Tamper Signals", description: "Catch anomalies. Unusual consumption or a stalled meter is flagged from the reading stream, surfacing leaks and meter tampering that erode revenue." },
      { title: "Payment Tracking", description: "Follow each account. Payments are credited against the mapped connection, keeping a clean account balance per property." },
      { title: "Revenue Accuracy", description: "Close the leakage. Correct mapping and verified reads together cut the non-revenue water and misbilling that plague municipal utilities." },
    ],
    lifecycleTitle: "The Billing Lifecycle",
    lifecycleSubtitle:
      "Follow a single connection from property mapping through verified meter reads to an accurate, tracked bill.",
    lifecycleSteps: [
      {
        label: "Connection Mapping",
        description:
          "A water connection is mapped to its property and owner in the registry. The contract fixes the accurate connection-to-property link.",
        icon: Home,
        logFilename: "cerulea_water.log",
        logLines: [
          { text: "[SYS] Mapping connection to property...", time: "08:14:11", tone: "default" },
          { text: "[CMD] mapConnection { conn: \"WC_7742\", property: \"P_221\" }", time: "08:14:11", tone: "primary" },
          { text: "[AUTH] Verifying property registry link...", time: "08:14:12", tone: "secondary" },
          { text: "[OK] Connection mapped at block 7712233.", time: "08:14:12", tone: "success" },
        ],
      },
      {
        label: "Meter Reading",
        description:
          "A verified meter reading is anchored through the oracle, giving billing an accurate basis in real consumption.",
        icon: Radio,
        logFilename: "cerulea_water.log",
        logLines: [
          { text: "[SYS] Ingesting verified meter reading...", time: "10:45:30", tone: "default" },
          { text: "[CMD] anchorReading(WC_7742, kl: 18)", time: "10:45:31", tone: "primary" },
          { text: "[SYS] Reading validated against prior cycle.", time: "10:45:31", tone: "default" },
          { text: "[OK] Consumption anchored for billing.", time: "10:45:32", tone: "success" },
        ],
      },
      {
        label: "Bill Generation",
        description:
          "The bill is generated from the verified reading and the mapped connection, so the correct owner is billed for actual usage.",
        icon: FileCheck,
        logFilename: "cerulea_water.log",
        logLines: [
          { text: "[SYS] Generating water bill...", time: "11:20:41", tone: "default" },
          { text: "[CMD] bill(WC_7742, period: \"2026-08\")", time: "11:20:41", tone: "primary" },
          { text: "[AUTH] Applying tariff to verified consumption...", time: "11:20:42", tone: "secondary" },
          { text: "[OK] Bill issued to mapped owner.", time: "11:20:42", tone: "success" },
        ],
      },
      {
        label: "Anomaly Flag",
        description:
          "An abnormal consumption pattern is flagged, surfacing a possible leak or meter tampering for the utility to investigate.",
        icon: Zap,
        logFilename: "cerulea_water.log",
        logLines: [
          { text: "[SYS] Screening consumption pattern...", time: "13:40:47", tone: "default" },
          { text: "[CMD] checkAnomaly(WC_7742)", time: "13:40:47", tone: "primary" },
          { text: "[SYS] Consumption 4x prior average.", time: "13:40:48", tone: "error" },
          { text: "[OK] Leak or tamper flagged for review.", time: "13:40:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes water billing into modular contracts. Each layer maps, reads, bills, and flags so demands reach the right property on real consumption.",
    layers: [
      {
        title: "Connection Registry",
        subtitle: "The Accurate Map",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accurate Map",
          description:
            "The foundational layer. It links each water connection to the correct property and owner in the registry, ending the mismatched mapping that causes billing errors and revenue loss.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ConnectionRegistry {\n  struct Connection {\n    bytes32 connId;\n    bytes32 property;\n    address owner;\n    bool active;\n  }\n\n  mapping(bytes32 => Connection) public connections;\n\n  function map(bytes32 connId, bytes32 property, address owner) external onlyUtility {\n    connections[connId] = Connection(connId, property, owner, true);\n  }\n}",
        simAction: "Simulate Connection Map",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying property registry link...", tone: "default" },
          { text: "Binding connection to property...", tone: "default" },
          { text: "Recording account owner...", tone: "default" },
          { text: "Writing connection to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Connection mapped accurately.", tone: "success" },
        ],
      },
      {
        title: "Meter Oracle",
        subtitle: "The Verified Read",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Read",
          description:
            "Replaces estimates with truth. External Data Oracles anchor verified meter readings, so a bill rests on actual consumption rather than an estimate that generates disputes and lost revenue.",
          platformFunction: "Oracle & Data",
        },
        codeSnippet:
          "function anchorReading(bytes32 connId, uint256 kilolitres) external onlyOracle {\n    readings[connId].push(Reading(kilolitres, block.timestamp));\n    if (_isAnomalous(connId, kilolitres)) emit ConsumptionAnomaly(connId, kilolitres);\n}",
        simAction: "Simulate Meter Read",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting meter reading...", tone: "default" },
          { text: "Validating against prior cycle...", tone: "default" },
          { text: "Anchoring verified consumption...", tone: "default" },
          { text: "Recording for billing...", tone: "default" },
          { text: "[SUCCESS] Verified reading anchored.", tone: "success" },
        ],
      },
      {
        title: "Billing Engine",
        subtitle: "The Correct Demand",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Correct Demand",
          description:
            "Bills the right owner the right amount. Invoices and Billing generate each demand from the verified reading and mapped connection, so the correct property and owner are billed on real usage.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function bill(bytes32 connId, bytes32 period) external onlyUtility {\n    uint256 usage = _latestUsage(connId);\n    uint256 amount = _applyTariff(usage);\n    bills[connId][period] = Bill(amount, false);\n    emit Billed(connId, connections[connId].owner, amount);\n}",
        simAction: "Simulate Billing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified consumption...", tone: "default" },
          { text: "Applying water tariff...", tone: "default" },
          { text: "Billing mapped owner...", tone: "default" },
          { text: "Issuing demand on-chain...", tone: "default" },
          { text: "[SUCCESS] Accurate bill generated.", tone: "success" },
        ],
      },
      {
        title: "Anomaly Monitor",
        subtitle: "The Revenue Guard",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Revenue Guard",
          description:
            "Protects utility revenue. It flags abnormal consumption and stalled meters from the reading stream, surfacing leaks and tampering that quietly erode collection between manual checks.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function checkAnomaly(bytes32 connId) external view returns (bool anomalous, uint256 ratio) {\n    uint256 latest = _latestUsage(connId);\n    uint256 avg = _rollingAverage(connId);\n    ratio = avg == 0 ? 0 : (latest * 100) / avg;\n    anomalous = ratio > anomalyThreshold;\n}",
        simAction: "Simulate Anomaly Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Comparing to rolling average...", tone: "default" },
          { text: "Consumption 4x prior usage...", tone: "default" },
          { text: "Exceeding anomaly threshold...", tone: "default" },
          { text: "Flagging leak or tamper...", tone: "default" },
          { text: "[SUCCESS] Anomaly flagged for review.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified meter billing is a horizontal capability. Here is how different actors put the utility ledger to work.",
    sectors: [
      { icon: Droplet, title: "Municipal Water Utilities", description: "Bill from verified meter reads mapped to the right property, cutting the misbilling and non-revenue water that come from inaccurate connection records.", assetTypes: ["Connections", "Verified Bills", "Anomaly Flags"] },
      { icon: Home, title: "Consumers", description: "Receive accurate bills for their own connection based on real consumption, resolving disputes against verified readings rather than estimates.", assetTypes: ["Meter Reads", "Water Bills", "Payment Records"] },
      { icon: Shield, title: "Utility Oversight", description: "Track revenue accuracy and flagged anomalies from a verifiable record, targeting leaks and tampering that erode municipal collection.", assetTypes: ["Consumption Records", "Revenue Reports", "Tamper Flags"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy utility billing system or capturing reads from smart meters, Cerulea routes both into one verified water billing ledger.",
    tracks: [
      {
        title: "Track A: Utility System Bridging",
        description:
          "For municipal water billing systems. Connection and billing events are translated into mapped on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Water Billing System", sublabel: "Utility Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Water Billing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Smart Meter Capture",
        description:
          "For smart and field-read meters. A signed oracle streams each reading from the meter and routes it directly to the ledger for billing.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Smart Water Meters", sublabel: "Consumption Endpoints", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Reading Tallying", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Billing Record", icon: Droplet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a water billing network with connection mapping, verified meter reads, and anomaly detection from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Connection & Billing Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects municipal utility integration benchmarks. Wiring meters, building verified-read billing, and shipping anomaly detection for an average water network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your connection and billing rules into pre-audited WebAssembly binaries and provisions the shared billing ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "street-vendor-licensing-and-vending-zone-allocation",
    icon: Ticket,
    eyebrow: "Vendor Licensing Engine",
    headline1: "License the vendor.",
    headline2: "Verify the zone.",
    heroDescription:
      "Deliver a verified street vendor license and zone allocation system that vendors and enforcement officers can both check instantly. The Civil Registry, DID and VC Ledger, and Compliance Attestations modules carry the core, issuing a verifiable license tied to an allocated zone so officers confirm validity on a mobile device and disputes fall away.",
    heroCta: "Deploy Licensing Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn unverifiable vendor licenses into a credential tied to a zone that officers check instantly in the field.",
    mechanics: [
      { title: "Verifiable License", description: "Issue as a credential. The DID and VC Ledger mints each vendor license as a verifiable credential bound to the vendor's identity, so validity is provable, not a laminated card." },
      { title: "Zone Binding", description: "Tie license to place. Each license is bound to its allocated vending zone, so an officer confirms not just that a vendor is licensed but that they are licensed for that location." },
      { title: "Instant Field Check", description: "Verify on mobile. An enforcement officer verifies the license and zone on a mobile device in seconds, replacing slow, disputable manual checks during drives." },
      { title: "Allocation Register", description: "Manage zone capacity. The Civil Registry tracks zone allocations, so vending slots are assigned transparently rather than contested on the street." },
      { title: "Attested Renewals", description: "Keep status current. Compliance Attestations record renewals and revocations, so a lapsed or cancelled license is immediately detectable in the field." },
      { title: "Dispute Reduction", description: "End arbitrary enforcement. With verifiable license and zone data, enforcement rests on a clear record, cutting disputes and arbitrary action against vendors." },
    ],
    lifecycleTitle: "The Licensing Lifecycle",
    lifecycleSubtitle:
      "Follow a single vendor from license issuance through zone allocation to an instant field verification.",
    lifecycleSteps: [
      {
        label: "License Issuance",
        description:
          "A vendor is issued a license as a verifiable credential bound to their identity. The contract anchors it as provably valid.",
        icon: IdCard,
        logFilename: "cerulea_vendor.log",
        logLines: [
          { text: "[SYS] Issuing vendor license credential...", time: "09:14:11", tone: "default" },
          { text: "[CMD] issueLicense { vendor: \"did:cer:52a\", trade: \"FOOD\" }", time: "09:14:11", tone: "primary" },
          { text: "[AUTH] Verifying vendor identity and eligibility...", time: "09:14:12", tone: "secondary" },
          { text: "[OK] License anchored at block 7812233.", time: "09:14:12", tone: "success" },
        ],
      },
      {
        label: "Zone Allocation",
        description:
          "A vending zone is allocated and bound to the license, so validity is tied to a specific approved location.",
        icon: Home,
        logFilename: "cerulea_vendor.log",
        logLines: [
          { text: "[SYS] Allocating vending zone...", time: "11:30:30", tone: "default" },
          { text: "[CMD] allocateZone(did:cer:52a, zone: \"Z_44\")", time: "11:30:31", tone: "primary" },
          { text: "[SYS] Zone capacity checked and bound.", time: "11:30:31", tone: "default" },
          { text: "[OK] License bound to zone Z_44.", time: "11:30:32", tone: "success" },
        ],
      },
      {
        label: "Field Verification",
        description:
          "An enforcement officer scans the vendor's credential and confirms the license is valid for that exact zone in seconds.",
        icon: ShieldCheck,
        logFilename: "cerulea_vendor.log",
        logLines: [
          { text: "[SYS] Field verification request...", time: "14:05:41", tone: "default" },
          { text: "[CMD] verifyVendor(did:cer:52a, zone: \"Z_44\")", time: "14:05:41", tone: "primary" },
          { text: "[SYS] License valid and matches zone.", time: "14:05:42", tone: "default" },
          { text: "[OK] Verified in seconds. No dispute.", time: "14:05:42", tone: "success" },
        ],
      },
      {
        label: "Renewal Attestation",
        description:
          "The license is renewed and the attestation recorded, so future field checks reflect current, valid status.",
        icon: FileCheck,
        logFilename: "cerulea_vendor.log",
        logLines: [
          { text: "[SYS] Recording license renewal...", time: "16:22:47", tone: "default" },
          { text: "[CMD] renew(did:cer:52a, validTo: 2028)", time: "16:22:47", tone: "primary" },
          { text: "[AUTH] Attesting renewal to credential...", time: "16:22:48", tone: "secondary" },
          { text: "[OK] Status current for field checks.", time: "16:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes vendor licensing into modular contracts. Each layer issues, allocates, verifies, and renews so licenses are checkable and zones are managed transparently.",
    layers: [
      {
        title: "License Ledger",
        subtitle: "The Verifiable Permit",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verifiable Permit",
          description:
            "The foundational layer. It mints each vendor license as a verifiable credential bound to the vendor's identity, so validity is a cryptographic fact rather than a forgeable laminated card.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract LicenseLedger {\n  struct License {\n    bytes32 did;\n    bytes32 trade;\n    bytes32 zone;\n    uint256 validTo;\n    bool active;\n  }\n\n  mapping(bytes32 => License) public licenses;\n\n  function issue(bytes32 did, bytes32 trade, uint256 validTo) external onlyMunicipality {\n    licenses[did] = License(did, trade, 0, validTo, true);\n  }\n}",
        simAction: "Simulate License Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying vendor identity...", tone: "default" },
          { text: "Confirming trade eligibility...", tone: "default" },
          { text: "Minting license credential...", tone: "default" },
          { text: "Writing license to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Verifiable license issued.", tone: "success" },
        ],
      },
      {
        title: "Zone Allocator",
        subtitle: "The Location Binding",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Location Binding",
          description:
            "Ties a license to a place. It binds each license to an allocated vending zone within capacity, so an officer confirms a vendor is licensed for that exact location, not just licensed in general.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function allocateZone(bytes32 did, bytes32 zone) external onlyMunicipality {\n    require(zoneUsage[zone] < zoneCapacity[zone], \"Zone full\");\n    licenses[did].zone = zone;\n    zoneUsage[zone]++;\n    emit ZoneAllocated(did, zone);\n}",
        simAction: "Simulate Zone Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking zone Z_44 capacity...", tone: "default" },
          { text: "Binding license to zone...", tone: "default" },
          { text: "Incrementing zone usage...", tone: "default" },
          { text: "Recording allocation...", tone: "default" },
          { text: "[SUCCESS] License bound to vending zone.", tone: "success" },
        ],
      },
      {
        title: "Field Verifier",
        subtitle: "The Instant Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Check",
          description:
            "Settles enforcement on the spot. It verifies a vendor's license and zone in one query, so an officer confirms validity on a mobile device in seconds instead of a disputable manual inspection.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function verifyVendor(bytes32 did, bytes32 zone) external view returns (bool valid) {\n    License memory l = licenses[did];\n    valid = l.active && l.zone == zone && l.validTo > block.timestamp;\n}",
        simAction: "Simulate Field Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Officer scanning vendor credential...", tone: "default" },
          { text: "Confirming license active...", tone: "default" },
          { text: "Matching allocated zone...", tone: "default" },
          { text: "Checking validity date...", tone: "default" },
          { text: "[SUCCESS] Verified in seconds, no dispute.", tone: "success" },
        ],
      },
      {
        title: "Renewal Notary",
        subtitle: "The Current Status",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Current Status",
          description:
            "Keeps field checks accurate. Compliance Attestations record renewals and revocations, so a lapsed or cancelled license is immediately detectable and enforcement never acts on stale data.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function renew(bytes32 did, uint256 validTo) external onlyMunicipality {\n    licenses[did].validTo = validTo;\n    licenses[did].active = true;\n    emit LicenseRenewed(did, validTo);\n}",
        simAction: "Simulate Renewal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Processing license renewal...", tone: "default" },
          { text: "Extending validity to 2028...", tone: "default" },
          { text: "Attesting renewal...", tone: "default" },
          { text: "Updating current status...", tone: "default" },
          { text: "[SUCCESS] Status current for field checks.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable vendor licensing is a horizontal capability. Here is how different actors put the licensing ledger to work.",
    sectors: [
      { icon: Landmark, title: "Town Vending Committees", description: "Issue verifiable licenses tied to zones and manage allocation transparently, formalizing vending without the disputes that plague manual schemes.", assetTypes: ["Vendor Licenses", "Zone Allocations", "Renewal Records"] },
      { icon: Shield, title: "Enforcement Officers", description: "Confirm a vendor's license and zone on a mobile device in seconds, replacing arbitrary drives with checks grounded in verifiable data.", assetTypes: ["Field Verifications", "Zone Checks", "Status Confirmations"] },
      { icon: Users, title: "Street Vendors", description: "Carry a verifiable license tied to their allocated zone, so they can prove their right to vend and are protected from arbitrary enforcement.", assetTypes: ["License Credentials", "Zone Rights", "Verification Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy vending scheme system or serving officers and vendors through a mobile app, Cerulea routes both into one verifiable licensing ledger.",
    tracks: [
      {
        title: "Track A: Vending Scheme Bridging",
        description:
          "For town vending committee systems. License and allocation events are translated into verifiable credential records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Vending Scheme System", sublabel: "Committee Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Issuance & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Vendor Licensing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Mobile Verification",
        description:
          "For officers and vendors in the field. A signed mobile app verifies each license and zone against the ledger in seconds.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field Mobile App / Wallet", sublabel: "Officer & Vendor Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "License Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verifiable License Record", icon: Ticket, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a vendor licensing network with verifiable credentials, zone binding, and instant field checks from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required License & Zone Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects municipal licensing integration benchmarks. Wiring vending scheme systems, building zone binding, and shipping instant field verification for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your license and zone rules into pre-audited WebAssembly binaries and provisions the shared licensing ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "gst-vat-invoice-reconciliation-across-buyers-sellers-and-tax-authority",
    icon: Scale,
    eyebrow: "Tax Credit Integrity Engine",
    headline1: "Confirm every invoice.",
    headline2: "Block every fake credit.",
    heroDescription:
      "Stand up a real-time GST invoice verification network where input tax credit claims are validated against on-chain buyer-confirmed invoices. The Trade Finance Documents, Logic and Actions Editor, and Compliance Attestations modules carry the core, so fake invoice fraud is detectable at invoice creation, not months later at audit.",
    heroCta: "Deploy Tax Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn post-facto manual reconciliation into real-time invoice verification that blocks fake ITC claims at source.",
    mechanics: [
      { title: "Invoice Anchoring", description: "Record at creation. Trade Finance Documents anchor each invoice as the seller issues it, so the tax authority sees it immediately rather than months later at audit." },
      { title: "Buyer Confirmation", description: "Require a counterparty. An ITC claim is valid only against an invoice the buyer has confirmed on-chain, so an invoice with no buyer acknowledgement cannot back a credit." },
      { title: "Real-Time ITC Check", description: "Validate the claim instantly. The Logic and Actions Editor checks each credit claim against confirmed invoices, blocking a claim with no matching buyer-confirmed record." },
      { title: "Fake Invoice Detection", description: "Catch fraud at source. A fictitious invoice created to claim credit on a purchase that never happened is detectable at creation, not at the annual reconciliation." },
      { title: "Account Flagging", description: "Escalate suspicion. When a claim fails validation, Compliance Attestations flag the taxpayer's account for investigation with an evidence-backed record." },
      { title: "Early Fraud Interception", description: "Stop it before audit. A fake claim is detected months before the annual audit, so the credit is blocked rather than recovered after the loss." },
    ],
    lifecycleTitle: "The Reconciliation Lifecycle",
    lifecycleSubtitle:
      "Follow a single transaction from invoice creation through buyer confirmation to a real-time ITC validation or block.",
    lifecycleSteps: [
      {
        label: "Invoice Creation",
        description:
          "A seller creates an invoice. The contract anchors it on-chain the moment it is issued, visible to the tax authority in real time.",
        icon: FileCheck,
        logFilename: "cerulea_gst.log",
        logLines: [
          { text: "[SYS] Anchoring seller invoice...", time: "10:14:11", tone: "default" },
          { text: "[CMD] createInvoice { seller: \"GSTIN_A\", buyer: \"GSTIN_B\", tax: 900000 }", time: "10:14:11", tone: "primary" },
          { text: "[AUTH] Verifying seller GSTIN...", time: "10:14:12", tone: "secondary" },
          { text: "[OK] Invoice INV_7742 anchored at block 7912233.", time: "10:14:12", tone: "success" },
        ],
      },
      {
        label: "Buyer Confirmation",
        description:
          "The buyer confirms the invoice on-chain, creating the counterparty acknowledgement that any input tax credit claim will require.",
        icon: Handshake,
        logFilename: "cerulea_gst.log",
        logLines: [
          { text: "[SYS] Awaiting buyer confirmation...", time: "11:30:30", tone: "default" },
          { text: "[CMD] confirmInvoice(INV_7742, buyer: \"GSTIN_B\")", time: "11:30:31", tone: "primary" },
          { text: "[SYS] Buyer acknowledgement recorded.", time: "11:30:31", tone: "default" },
          { text: "[OK] Invoice confirmed by counterparty.", time: "11:30:32", tone: "success" },
        ],
      },
      {
        label: "Valid ITC Claim",
        description:
          "The buyer claims input tax credit. The contract validates it against the confirmed invoice and allows the legitimate claim.",
        icon: ShieldCheck,
        logFilename: "cerulea_gst.log",
        logLines: [
          { text: "[SYS] Validating ITC claim...", time: "13:40:41", tone: "default" },
          { text: "[CMD] claimITC(INV_7742, amount: 900000)", time: "13:40:41", tone: "primary" },
          { text: "[SYS] Matched to buyer-confirmed invoice.", time: "13:40:42", tone: "default" },
          { text: "[OK] Legitimate credit allowed.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Fake Claim Blocked",
        description:
          "A Rs 50 lakh claim with no buyer-confirmed invoice is blocked automatically and the account flagged, two months before the annual audit.",
        icon: Zap,
        logFilename: "cerulea_gst.log",
        logLines: [
          { text: "[SYS] Validating suspicious ITC claim...", time: "15:22:47", tone: "default" },
          { text: "[CMD] claimITC(INV_0000, amount: 5000000)", time: "15:22:47", tone: "primary" },
          { text: "[SYS] No buyer confirmation on-chain.", time: "15:22:48", tone: "error" },
          { text: "[OK] Fake claim blocked. Account flagged.", time: "15:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes GST reconciliation into modular contracts. Each layer anchors, confirms, validates, and flags so fake credits fail at source rather than at audit.",
    layers: [
      {
        title: "Invoice Registry",
        subtitle: "The Real-Time Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Real-Time Record",
          description:
            "The foundational layer. It anchors each invoice as it is created, so the tax authority sees transactions in real time instead of reconstructing them from a post-facto reconciliation months later.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract InvoiceRegistry {\n  struct Invoice {\n    bytes32 seller;\n    bytes32 buyer;\n    uint256 taxAmount;\n    bool buyerConfirmed;\n  }\n\n  mapping(bytes32 => Invoice) public invoices;\n\n  function create(bytes32 id, bytes32 seller, bytes32 buyer, uint256 tax) external onlySeller {\n    invoices[id] = Invoice(seller, buyer, tax, false);\n  }\n}",
        simAction: "Simulate Invoice Creation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying seller GSTIN...", tone: "default" },
          { text: "Recording invoice parties...", tone: "default" },
          { text: "Anchoring tax amount...", tone: "default" },
          { text: "Writing invoice to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Invoice anchored in real time.", tone: "success" },
        ],
      },
      {
        title: "Confirmation Gate",
        subtitle: "The Counterparty Check",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Counterparty Check",
          description:
            "Requires two sides to a transaction. An input tax credit is valid only against a buyer-confirmed invoice, so a fake invoice with no counterparty acknowledgement cannot silently back a credit claim.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function confirmInvoice(bytes32 id) external {\n    require(invoices[id].buyer == gstinOf[msg.sender], \"Not buyer\");\n    invoices[id].buyerConfirmed = true;\n    emit InvoiceConfirmed(id, msg.sender);\n}",
        simAction: "Simulate Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer reviewing invoice...", tone: "default" },
          { text: "Verifying buyer GSTIN...", tone: "default" },
          { text: "Recording acknowledgement...", tone: "default" },
          { text: "Enabling credit eligibility...", tone: "default" },
          { text: "[SUCCESS] Invoice confirmed by buyer.", tone: "success" },
        ],
      },
      {
        title: "ITC Validator",
        subtitle: "The Claim Gate",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Claim Gate",
          description:
            "Blocks fraudulent credits at source. The Logic and Actions Editor validates each ITC claim against a buyer-confirmed invoice, so a claim with no matching record is rejected the moment it is made.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function claimITC(bytes32 invoiceId, uint256 amount) external returns (bool) {\n    Invoice memory inv = invoices[invoiceId];\n    if (!inv.buyerConfirmed || inv.taxAmount < amount) {\n        emit FakeClaimBlocked(invoiceId, msg.sender, amount);\n        return false;\n    }\n    return true;\n}",
        simAction: "Simulate ITC Validation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving ITC claim...", tone: "default" },
          { text: "Looking up confirmed invoice...", tone: "default" },
          { text: "Matching amount and confirmation...", tone: "default" },
          { text: "Allowing legitimate credit...", tone: "default" },
          { text: "[SUCCESS] Valid ITC claim allowed.", tone: "success" },
        ],
      },
      {
        title: "Flagging Engine",
        subtitle: "The Fraud Interceptor",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fraud Interceptor",
          description:
            "Turns a blocked claim into an investigation. When a claim fails validation, it flags the taxpayer's account through Compliance Attestations, intercepting fraud months before the annual audit.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function flagAccount(bytes32 gstin, bytes32 invoiceId, uint256 amount) external onlyAuthority {\n    flags[gstin].push(Flag(invoiceId, amount, block.timestamp));\n    emit AccountFlagged(gstin, invoiceId, amount);\n}",
        simAction: "Simulate Account Flag",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Claim failed validation...", tone: "default" },
          { text: "No buyer-confirmed invoice found...", tone: "default" },
          { text: "Flagging taxpayer account...", tone: "default" },
          { text: "Recording evidence for investigation...", tone: "default" },
          { text: "[SUCCESS] Fake claim intercepted early.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Real-time invoice verification is a horizontal capability. Here is how different actors put the tax ledger to work.",
    sectors: [
      { icon: Landmark, title: "Tax Administration", description: "Validate input tax credit claims against confirmed invoices in real time, intercepting fake-invoice fraud at creation instead of recovering losses after annual audit.", assetTypes: ["Anchored Invoices", "ITC Validations", "Account Flags"] },
      { icon: Building2, title: "Registered Businesses", description: "Confirm invoices and claim legitimate credit against a verifiable record, protecting compliant taxpayers from being caught in fraud-driven scrutiny.", assetTypes: ["Sales Invoices", "Purchase Confirmations", "Credit Claims"] },
      { icon: Shield, title: "Audit & Enforcement", description: "Act on evidence-backed flags the moment a fake claim is attempted, focusing enforcement on genuine fraud rather than trawling annual returns.", assetTypes: ["Fraud Flags", "Investigation Dossiers", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy GST return system or capturing invoices from business accounting software, Cerulea routes both into one real-time invoice verification ledger.",
    tracks: [
      {
        title: "Track A: GST System Bridging",
        description:
          "For national GST return and reconciliation systems. Invoice and claim events are translated into anchored on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "GST Return System", sublabel: "Tax Authority Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Invoice Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Invoice Verification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Accounting Software Capture",
        description:
          "For business accounting and billing software. A signed connector anchors each invoice and confirmation from the business and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Accounting Software / Wallet", sublabel: "Business Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Invoice Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Confirmed Invoice Record", icon: Scale, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a GST verification network with real-time invoice anchoring, buyer confirmation, and ITC validation from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Invoice & ITC Rules",
      ruleCount: 53,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects tax administration integration benchmarks. Wiring GST systems, building real-time ITC validation, and shipping fraud flagging for an average verification network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your invoice and ITC rules into pre-audited WebAssembly binaries and provisions the shared verification ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "income-tax-refund-processing-transparency-for-taxpayers",
    icon: Coins,
    eyebrow: "Refund Transparency Engine",
    headline1: "Show every stage.",
    headline2: "End the waiting.",
    heroDescription:
      "Deploy a refund tracking system where taxpayers see exactly where their income tax refund is in the verification and disbursement pipeline. Civil Registry, Escrow and Conditional Settlement, and Notifications anchor the core, anchoring each stage as a verifiable status update so taxpayers know where their refund stands and departments can find bottlenecks.",
    heroCta: "Deploy Refund Trackers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque refund pipeline into a stage-by-stage verifiable status the taxpayer can follow.",
    mechanics: [
      { title: "Refund Anchoring", description: "Start the trail. The Civil Registry anchors each refund claim to the taxpayer, fixing the origin of a stage-by-stage status record." },
      { title: "Stage Tracking", description: "Follow the pipeline. Each stage, from verification to adjustment to disbursement, is recorded, so the taxpayer sees exactly where their refund sits." },
      { title: "Adjustment Visibility", description: "Explain the hold. When a refund is adjusted against past dues, the offset is recorded, so a reduced or held refund carries a verifiable reason." },
      { title: "Conditional Disbursement", description: "Release when cleared. Escrow and Conditional Settlement disburses the refund once verification conditions are met, tying payout to a completed pipeline." },
      { title: "Stage Notifications", description: "Keep the taxpayer informed. Notifications push each transition, so the taxpayer is told when their refund moves rather than left guessing." },
      { title: "Bottleneck Analytics", description: "Find the delays. Departments read where refunds stall across the pipeline, targeting the stages that cause delay." },
    ],
    lifecycleTitle: "The Refund Lifecycle",
    lifecycleSubtitle:
      "Follow a single refund from claim through verification and adjustment to a notified, conditional disbursement.",
    lifecycleSteps: [
      {
        label: "Refund Claim",
        description:
          "A taxpayer's refund claim is anchored to their record. The contract fixes the origin of a stage-by-stage status trail.",
        icon: ScrollText,
        logFilename: "cerulea_refund.log",
        logLines: [
          { text: "[SYS] Anchoring refund claim...", time: "09:14:11", tone: "default" },
          { text: "[CMD] fileRefund { pan: \"PAN_7742\", ay: \"2026-27\", amount: 42000 }", time: "09:14:11", tone: "primary" },
          { text: "[AUTH] Verifying return and taxpayer identity...", time: "09:14:12", tone: "secondary" },
          { text: "[OK] Refund anchored at block 8012233.", time: "09:14:12", tone: "success" },
        ],
      },
      {
        label: "Verification Stage",
        description:
          "The refund enters verification. The stage update lands on the trail and the taxpayer is notified of the transition.",
        icon: FileCheck,
        logFilename: "cerulea_refund.log",
        logLines: [
          { text: "[SYS] Recording verification stage...", time: "11:30:30", tone: "default" },
          { text: "[CMD] setStage(PAN_7742, stage: \"VERIFICATION\")", time: "11:30:31", tone: "primary" },
          { text: "[SYS] Stage sealed and taxpayer notified.", time: "11:30:31", tone: "default" },
          { text: "[OK] Refund now in verification.", time: "11:30:32", tone: "success" },
        ],
      },
      {
        label: "Adjustment Check",
        description:
          "The refund is checked for adjustment against past dues. Any offset is recorded, so a reduced amount carries a verifiable reason.",
        icon: Scale,
        logFilename: "cerulea_refund.log",
        logLines: [
          { text: "[SYS] Checking adjustment against dues...", time: "13:40:41", tone: "default" },
          { text: "[CMD] applyAdjustment(PAN_7742, offset: 0)", time: "13:40:41", tone: "primary" },
          { text: "[SYS] No past dues found. No offset.", time: "13:40:42", tone: "default" },
          { text: "[OK] Full refund cleared for disbursement.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Disbursement",
        description:
          "Escrow disburses the cleared refund and the taxpayer is notified. The final status closes a fully visible pipeline.",
        icon: Coins,
        logFilename: "cerulea_refund.log",
        logLines: [
          { text: "[SYS] Disbursing cleared refund...", time: "15:22:47", tone: "default" },
          { text: "[CMD] disburse(PAN_7742, amount: 42000)", time: "15:22:47", tone: "primary" },
          { text: "[AUTH] Confirming verification complete...", time: "15:22:48", tone: "secondary" },
          { text: "[OK] Refund credited. Taxpayer notified.", time: "15:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes refund processing into modular contracts. Each layer anchors, tracks, adjusts, and disburses so the taxpayer sees a fully transparent pipeline.",
    layers: [
      {
        title: "Refund Registry",
        subtitle: "The Status Origin",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Status Origin",
          description:
            "The foundational layer. It anchors each refund claim to the taxpayer, fixing the origin of a stage-by-stage record that replaces an opaque pipeline with a followable trail.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RefundRegistry {\n  struct Refund {\n    bytes32 pan;\n    uint256 amount;\n    bytes32 stage;\n    uint256 offset;\n  }\n\n  mapping(bytes32 => Refund) public refunds;\n\n  function file(bytes32 id, bytes32 pan, uint256 amount) external onlyDepartment {\n    refunds[id] = Refund(pan, amount, \"FILED\", 0);\n  }\n}",
        simAction: "Simulate Refund Claim",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying return and identity...", tone: "default" },
          { text: "Anchoring refund claim...", tone: "default" },
          { text: "Setting initial stage...", tone: "default" },
          { text: "Writing refund to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Refund claim anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Stage Tracker",
        subtitle: "The Pipeline View",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pipeline View",
          description:
            "Makes the pipeline visible. It records each stage transition and notifies the taxpayer, so a refund's position is a known, verified status rather than an unexplained wait.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function setStage(bytes32 id, bytes32 stage) external onlyDepartment {\n    refunds[id].stage = stage;\n    stageLog[id].push(StageEvent(stage, block.timestamp));\n    _notify(refunds[id].pan, stage);\n    emit StageSet(id, stage);\n}",
        simAction: "Simulate Stage Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Moving refund to verification...", tone: "default" },
          { text: "Recording stage transition...", tone: "default" },
          { text: "Appending to pipeline trail...", tone: "default" },
          { text: "Notifying taxpayer...", tone: "default" },
          { text: "[SUCCESS] Stage tracked on-chain.", tone: "success" },
        ],
      },
      {
        title: "Adjustment Engine",
        subtitle: "The Offset Recorder",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Offset Recorder",
          description:
            "Explains a reduced refund. It records any adjustment against past dues on the trail, so a held or reduced refund carries a verifiable reason instead of an unexplained shortfall.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function applyAdjustment(bytes32 id, uint256 offset) external onlyDepartment {\n    refunds[id].offset = offset;\n    adjustments[id] = Adjustment(offset, block.timestamp);\n    emit AdjustmentApplied(id, offset);\n}",
        simAction: "Simulate Adjustment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking taxpayer for past dues...", tone: "default" },
          { text: "No outstanding dues found...", tone: "default" },
          { text: "Recording zero offset...", tone: "default" },
          { text: "Clearing full refund amount...", tone: "default" },
          { text: "[SUCCESS] Adjustment recorded transparently.", tone: "success" },
        ],
      },
      {
        title: "Disbursement Escrow",
        subtitle: "The Conditional Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Payout",
          description:
            "Ties payout to a completed pipeline. Escrow and Conditional Settlement disburses the refund once verification conditions are met and, through analytics, exposes where refunds stall across stages.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function disburse(bytes32 id) external onlyDepartment {\n    require(refunds[id].stage == \"CLEARED\", \"Not cleared\");\n    uint256 payable_ = refunds[id].amount - refunds[id].offset;\n    _pay(refunds[id].pan, payable_);\n    emit Disbursed(id, payable_);\n}",
        simAction: "Simulate Disbursement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming verification complete...", tone: "default" },
          { text: "Computing net refund...", tone: "default" },
          { text: "Releasing conditional payout...", tone: "default" },
          { text: "Notifying taxpayer of credit...", tone: "default" },
          { text: "[SUCCESS] Refund disbursed and closed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent refund processing is a horizontal capability. Here is how different actors put the refund ledger to work.",
    sectors: [
      { icon: Landmark, title: "Tax Departments", description: "Show taxpayers exactly where a refund sits and find where refunds stall across the pipeline, cutting inquiry load and processing delay.", assetTypes: ["Refund Claims", "Stage Records", "Bottleneck Analytics"] },
      { icon: Users, title: "Taxpayers", description: "See each stage of their refund and any adjustment against dues, ending the uncertainty of waiting with no visibility into why a refund is delayed.", assetTypes: ["Refund Status", "Adjustment Records", "Disbursement Receipts"] },
      { icon: Shield, title: "Revenue Oversight", description: "Track pipeline performance across refunds from verifiable data, targeting the stages and offices that drive delay.", assetTypes: ["Pipeline Metrics", "Stage Logs", "Delay Reports"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy refund processing system or serving taxpayers through a portal, Cerulea routes both into one transparent refund ledger.",
    tracks: [
      {
        title: "Track A: Refund System Bridging",
        description:
          "For income tax refund processing systems. Claim and stage events are translated into anchored on-chain status records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Refund Processing System", sublabel: "Department Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Refund Status Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Taxpayer Portal Access",
        description:
          "For taxpayers checking status. A signed portal lets a taxpayer read their refund pipeline from any device against the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Taxpayer Portal / Wallet", sublabel: "Filer Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Status Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Refund Pipeline Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a refund transparency network with stage tracking, adjustment recording, and conditional disbursement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Stage & Disbursement Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects tax processing integration benchmarks. Wiring refund systems, building stage tracking, and shipping conditional disbursement for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your stage and disbursement rules into pre-audited WebAssembly binaries and provisions the shared refund ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cross-state-e-way-bill-verification-for-goods-movement",
    icon: QrCode,
    eyebrow: "Transit Verification Engine",
    headline1: "Verify at the checkpost.",
    headline2: "Kill the fake bill.",
    heroDescription:
      "Run an instant cross-state verification of e-way bills for goods in transit, reducing checkpost delays and tax evasion through fake bills. The Trade Finance Documents, Provenance Notary, and Compliance Attestations modules carry the core, anchoring each bill the moment it is generated so any checkpost confirms its authenticity and that it has not been reused.",
    heroCta: "Deploy Transit Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn slow, forgeable e-way bill checks into instant cross-state verification that blocks reuse and fakes.",
    mechanics: [
      { title: "Bill Anchoring", description: "Seal at generation. Trade Finance Documents anchor each e-way bill the moment it is created, so a genuine bill exists on-chain from the start of the journey." },
      { title: "Instant Checkpost Verify", description: "Confirm in seconds. Any checkpost in any state verifies a bill against the ledger instantly, replacing slow manual checks that stall transport." },
      { title: "Single-Use Enforcement", description: "Block reuse. The bill's transit is tracked, so a bill already consumed for one shipment cannot be reused for another to evade tax." },
      { title: "Fake Bill Detection", description: "Reject forgeries. A bill not present on the ledger fails verification, so a fabricated e-way bill is caught at the checkpost." },
      { title: "Route Recording", description: "Follow the goods. Provenance Notary records checkpost scans along the route, so the movement of a consignment is verifiable end to end." },
      { title: "Evasion Flagging", description: "Surface anomalies. Mismatched routes or duplicate bill use are flagged to the tax authority for enforcement." },
    ],
    lifecycleTitle: "The Transit Lifecycle",
    lifecycleSubtitle:
      "Follow a single e-way bill from generation through checkpost verification to route completion or a flagged reuse.",
    lifecycleSteps: [
      {
        label: "Bill Generation",
        description:
          "A transporter generates an e-way bill. The contract anchors it on-chain, so a genuine record exists from the start of the journey.",
        icon: FileCheck,
        logFilename: "cerulea_eway.log",
        logLines: [
          { text: "[SYS] Anchoring e-way bill...", time: "07:14:11", tone: "default" },
          { text: "[CMD] generateBill { ewb: \"EWB_7742\", from: \"MH\", to: \"KA\", value: 640000 }", time: "07:14:11", tone: "primary" },
          { text: "[AUTH] Verifying transporter and invoice link...", time: "07:14:12", tone: "secondary" },
          { text: "[OK] Bill anchored at block 8112233.", time: "07:14:12", tone: "success" },
        ],
      },
      {
        label: "Checkpost Scan",
        description:
          "At a state border checkpost, the bill is scanned and verified against the ledger in seconds, confirming authenticity without delay.",
        icon: QrCode,
        logFilename: "cerulea_eway.log",
        logLines: [
          { text: "[SYS] Checkpost verification request...", time: "12:30:30", tone: "default" },
          { text: "[CMD] verifyBill(EWB_7742, post: \"MH_KA_BORDER\")", time: "12:30:31", tone: "primary" },
          { text: "[SYS] Bill genuine and not yet consumed.", time: "12:30:31", tone: "default" },
          { text: "[OK] Verified in seconds. Vehicle cleared.", time: "12:30:32", tone: "success" },
        ],
      },
      {
        label: "Route Completion",
        description:
          "The consignment reaches its destination and the bill is marked consumed, so it cannot be reused for another shipment.",
        icon: Truck,
        logFilename: "cerulea_eway.log",
        logLines: [
          { text: "[SYS] Recording route completion...", time: "18:40:41", tone: "default" },
          { text: "[CMD] completeBill(EWB_7742)", time: "18:40:41", tone: "primary" },
          { text: "[AUTH] Marking bill consumed...", time: "18:40:42", tone: "secondary" },
          { text: "[OK] Bill closed. Reuse blocked.", time: "18:40:42", tone: "success" },
        ],
      },
      {
        label: "Reuse Flag",
        description:
          "An attempt to reuse a consumed bill for a second shipment is detected and flagged to the tax authority for enforcement.",
        icon: Zap,
        logFilename: "cerulea_eway.log",
        logLines: [
          { text: "[SYS] Verifying presented bill...", time: "20:12:47", tone: "default" },
          { text: "[CMD] verifyBill(EWB_7742, post: \"KA_TN_BORDER\")", time: "20:12:47", tone: "primary" },
          { text: "[SYS] Bill already consumed on prior route.", time: "20:12:48", tone: "error" },
          { text: "[OK] Reuse flagged for enforcement.", time: "20:12:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes e-way bill verification into modular contracts. Each layer anchors, verifies, completes, and flags so fake and reused bills fail at the checkpost.",
    layers: [
      {
        title: "Bill Registry",
        subtitle: "The Genuine Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Genuine Record",
          description:
            "The foundational layer. It anchors each e-way bill at generation, so a genuine bill exists on-chain from the start and any bill absent from the ledger is provably fake.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract BillRegistry {\n  struct Bill {\n    bytes32 ewb;\n    bytes32 fromState;\n    bytes32 toState;\n    uint256 value;\n    bool consumed;\n  }\n\n  mapping(bytes32 => Bill) public bills;\n\n  function generate(bytes32 ewb, bytes32 from, bytes32 to, uint256 value) external onlyTransporter {\n    bills[ewb] = Bill(ewb, from, to, value, false);\n  }\n}",
        simAction: "Simulate Bill Generation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying transporter and invoice...", tone: "default" },
          { text: "Recording origin and destination...", tone: "default" },
          { text: "Anchoring bill on-chain...", tone: "default" },
          { text: "Writing bill to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] E-way bill anchored genuine.", tone: "success" },
        ],
      },
      {
        title: "Checkpost Verifier",
        subtitle: "The Instant Check",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Check",
          description:
            "Clears transport fast and honestly. It verifies a bill against the ledger in seconds, confirming it is genuine and not yet consumed, so a fabricated bill fails and legitimate goods move without delay.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function verifyBill(bytes32 ewb, bytes32 post) external returns (bool valid) {\n    Bill memory b = bills[ewb];\n    valid = b.ewb != 0 && !b.consumed;\n    if (valid) scans[ewb].push(Scan(post, block.timestamp));\n    else emit VerificationFailed(ewb, post);\n}",
        simAction: "Simulate Checkpost Verify",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning bill at border...", tone: "default" },
          { text: "Confirming bill exists on ledger...", tone: "default" },
          { text: "Checking not yet consumed...", tone: "default" },
          { text: "Recording checkpost scan...", tone: "default" },
          { text: "[SUCCESS] Verified in seconds.", tone: "success" },
        ],
      },
      {
        title: "Completion Gate",
        subtitle: "The Single-Use Lock",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single-Use Lock",
          description:
            "Stops reuse for tax evasion. On route completion it marks the bill consumed, so the same bill cannot back a second shipment, closing a common avenue of evasion.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function completeBill(bytes32 ewb) external onlyAuthorized {\n    require(!bills[ewb].consumed, \"Already consumed\");\n    bills[ewb].consumed = true;\n    emit BillCompleted(ewb, block.timestamp);\n}",
        simAction: "Simulate Completion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Consignment reaching destination...", tone: "default" },
          { text: "Confirming bill not consumed...", tone: "default" },
          { text: "Marking bill consumed...", tone: "default" },
          { text: "Locking against reuse...", tone: "default" },
          { text: "[SUCCESS] Bill closed, reuse blocked.", tone: "success" },
        ],
      },
      {
        title: "Evasion Monitor",
        subtitle: "The Anomaly Flag",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Anomaly Flag",
          description:
            "Surfaces evasion attempts. It flags reuse of a consumed bill and route mismatches to the tax authority, turning a failed verification into an evidence-backed enforcement lead.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function flagReuse(bytes32 ewb, bytes32 post) external {\n    require(bills[ewb].consumed, \"Not consumed\");\n    reuseFlags[ewb].push(Flag(post, block.timestamp));\n    emit ReuseFlagged(ewb, post);\n}",
        simAction: "Simulate Reuse Flag",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Presented bill already consumed...", tone: "default" },
          { text: "Detecting reuse attempt...", tone: "default" },
          { text: "Flagging to tax authority...", tone: "default" },
          { text: "Recording evasion evidence...", tone: "default" },
          { text: "[SUCCESS] Reuse flagged for enforcement.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Instant e-way bill verification is a horizontal capability. Here is how different actors put the transit ledger to work.",
    sectors: [
      { icon: Landmark, title: "Commercial Tax Departments", description: "Verify e-way bills instantly across states and block reuse, cutting the tax evasion that fake and duplicated bills enable during goods movement.", assetTypes: ["Anchored Bills", "Verification Logs", "Evasion Flags"] },
      { icon: Truck, title: "Transporters & Logistics", description: "Clear checkposts in seconds against a verifiable bill, cutting the transit delays that manual verification imposes on legitimate movement.", assetTypes: ["E-Way Bills", "Checkpost Scans", "Route Records"] },
      { icon: Shield, title: "Enforcement Squads", description: "Act on flagged reuse and route mismatches from a verifiable trail, targeting genuine evasion instead of stopping every vehicle for manual checks.", assetTypes: ["Reuse Flags", "Route Trails", "Enforcement Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy e-way bill system or verifying bills from checkpost handhelds, Cerulea routes both into one instant transit verification ledger.",
    tracks: [
      {
        title: "Track A: E-Way System Bridging",
        description:
          "For national e-way bill systems. Generation and completion events are translated into anchored on-chain bill records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "E-Way Bill System", sublabel: "Tax Portal Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Bill Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Transit Verification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Checkpost Handheld Capture",
        description:
          "For checkpost officers on handhelds. A signed device verifies each bill scan at the border and routes it directly to the ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Checkpost Handheld", sublabel: "Border Officer Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Verification Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Instant Bill Record", icon: QrCode, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a transit verification network with anchored bills, instant checkpost verification, and single-use enforcement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Bill & Verification Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects tax portal integration benchmarks. Wiring e-way bill systems, building instant verification, and shipping single-use enforcement for an average transit network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your bill and verification rules into pre-audited WebAssembly binaries and provisions the shared transit ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "professional-tax-registration-and-compliance-for-gig-and-informal-work",
    icon: IdCard,
    eyebrow: "Gig Tax Onboarding Engine",
    headline1: "Register from income.",
    headline2: "Formalize with consent.",
    heroDescription:
      "Build a simplified professional tax registration and payment system for gig and informal workers, with verified income data from platforms. Civil Registry, Compliance Attestations, and Invoices and Billing anchor the core, letting gig platforms share verified income with the worker's consent so registration and payment calculate directly from that income with minimal friction.",
    heroCta: "Deploy Gig Tax Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an uncollectable informal-worker tax into consent-driven registration calculated from verified platform income.",
    mechanics: [
      { title: "Consent-Based Income", description: "Share with permission. A gig platform shares verified income only with the worker's on-chain consent, so registration draws on real data without compromising the worker's control." },
      { title: "Simplified Registration", description: "Onboard with minimal friction. The Civil Registry registers a worker for professional tax from verified income, replacing a process that assumes a traditional employer." },
      { title: "Income-Based Calculation", description: "Compute the liability. Professional tax is calculated directly from verified income, so the amount is accurate rather than estimated or unassessed." },
      { title: "Attested Income Proof", description: "Trust the figure. Compliance Attestations bind the platform income claim, so the tax authority relies on verifiable data rather than self-declaration." },
      { title: "Simple Payment", description: "Pay in one step. Invoices and Billing generate the professional tax demand from the verified income, so the worker pays a clear, correct amount." },
      { title: "Formalization Path", description: "Bring workers in. A low-friction, consent-driven flow brings informal workers into the tax system who otherwise remain unregistered." },
    ],
    lifecycleTitle: "The Onboarding Lifecycle",
    lifecycleSubtitle:
      "Follow a single gig worker from consented income sharing through registration to an income-based tax payment.",
    lifecycleSteps: [
      {
        label: "Income Consent",
        description:
          "A gig worker consents to share verified income from a platform. The contract records the scoped consent as the basis for registration.",
        icon: Lock,
        logFilename: "cerulea_ptax.log",
        logLines: [
          { text: "[SYS] Recording worker income consent...", time: "09:14:11", tone: "default" },
          { text: "[CMD] grantConsent { worker: \"did:cer:63c\", platform: \"P_0x11\" }", time: "09:14:11", tone: "primary" },
          { text: "[AUTH] Verifying worker identity...", time: "09:14:12", tone: "secondary" },
          { text: "[OK] Consent anchored at block 8212233.", time: "09:14:12", tone: "success" },
        ],
      },
      {
        label: "Verified Income Share",
        description:
          "The platform shares the worker's verified income under consent. The attested figure becomes the basis for the tax calculation.",
        icon: FileCheck,
        logFilename: "cerulea_ptax.log",
        logLines: [
          { text: "[SYS] Platform sharing verified income...", time: "11:30:30", tone: "default" },
          { text: "[CMD] shareIncome(did:cer:63c, annual: 480000)", time: "11:30:31", tone: "primary" },
          { text: "[SYS] Income attested under consent scope.", time: "11:30:31", tone: "default" },
          { text: "[OK] Verified income recorded.", time: "11:30:32", tone: "success" },
        ],
      },
      {
        label: "Tax Registration",
        description:
          "The worker is registered for professional tax and their liability is calculated directly from the verified income.",
        icon: IdCard,
        logFilename: "cerulea_ptax.log",
        logLines: [
          { text: "[SYS] Registering worker for professional tax...", time: "13:40:41", tone: "default" },
          { text: "[CMD] register(did:cer:63c)", time: "13:40:41", tone: "primary" },
          { text: "[AUTH] Computing liability from income slab...", time: "13:40:42", tone: "secondary" },
          { text: "[OK] Registered. Liability calculated.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Simple Payment",
        description:
          "The demand is generated and the worker pays in one step, bringing an informal worker into the tax system with minimal friction.",
        icon: Coins,
        logFilename: "cerulea_ptax.log",
        logLines: [
          { text: "[SYS] Generating professional tax demand...", time: "15:22:47", tone: "default" },
          { text: "[CMD] bill(did:cer:63c, period: \"2026\")", time: "15:22:47", tone: "primary" },
          { text: "[SYS] Demand from verified income.", time: "15:22:48", tone: "default" },
          { text: "[OK] Paid in one step. Worker formalized.", time: "15:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes gig tax onboarding into modular contracts. Each layer consents, shares, registers, and bills so informal workers join the system without heavy process.",
    layers: [
      {
        title: "Consent Registry",
        subtitle: "The Worker Control",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Worker Control",
          description:
            "The foundational layer. It records a worker's scoped consent for a platform to share income, so registration draws on verified data while the worker retains control over what is shared.",
          platformFunction: "Consent & Access",
        },
        codeSnippet:
          "contract ConsentRegistry {\n  struct Consent {\n    bytes32 worker;\n    address platform;\n    bool active;\n  }\n\n  mapping(bytes32 => Consent) public consents;\n\n  function grant(bytes32 worker, address platform) external {\n    require(ownerOf[worker] == msg.sender, \"Not worker\");\n    consents[worker] = Consent(worker, platform, true);\n  }\n}",
        simAction: "Simulate Income Consent",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying worker identity...", tone: "default" },
          { text: "Recording platform scope...", tone: "default" },
          { text: "Activating income consent...", tone: "default" },
          { text: "Writing consent to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Worker consent anchored.", tone: "success" },
        ],
      },
      {
        title: "Income Notary",
        subtitle: "The Verified Figure",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Figure",
          description:
            "Grounds tax in real data. Compliance Attestations bind the platform's income claim under consent, so the tax authority calculates liability from verifiable income rather than a worker's self-declaration.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function shareIncome(bytes32 worker, uint256 annual) external {\n    require(consents[worker].platform == msg.sender && consents[worker].active, \"No consent\");\n    incomes[worker] = Income(annual, block.timestamp);\n    emit IncomeShared(worker, annual);\n}",
        simAction: "Simulate Income Share",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming active consent...", tone: "default" },
          { text: "Receiving verified income...", tone: "default" },
          { text: "Attesting income figure...", tone: "default" },
          { text: "Recording under consent scope...", tone: "default" },
          { text: "[SUCCESS] Verified income recorded.", tone: "success" },
        ],
      },
      {
        title: "Registration Engine",
        subtitle: "The Low-Friction Onboard",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Low-Friction Onboard",
          description:
            "Fits workers without employers. It registers a worker for professional tax and computes liability from verified income, replacing a process that assumes a traditional employer to deduct at source.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function register(bytes32 worker) external onlyAuthority {\n    uint256 liability = _slabForIncome(incomes[worker].annual);\n    registrations[worker] = Registration(liability, block.timestamp, true);\n    emit Registered(worker, liability);\n}",
        simAction: "Simulate Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified income...", tone: "default" },
          { text: "Selecting tax slab...", tone: "default" },
          { text: "Computing liability...", tone: "default" },
          { text: "Recording registration...", tone: "default" },
          { text: "[SUCCESS] Worker registered from income.", tone: "success" },
        ],
      },
      {
        title: "Billing Engine",
        subtitle: "The One-Step Pay",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The One-Step Pay",
          description:
            "Closes the loop with minimal friction. Invoices and Billing generate the demand from verified income, so a worker pays a clear, correct professional tax and enters the formal system.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function bill(bytes32 worker, bytes32 period) external onlyAuthority {\n    uint256 amount = registrations[worker].liability;\n    bills[worker][period] = Bill(amount, false);\n    emit Billed(worker, period, amount);\n}",
        simAction: "Simulate Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading computed liability...", tone: "default" },
          { text: "Generating tax demand...", tone: "default" },
          { text: "Issuing one-step payment...", tone: "default" },
          { text: "Recording worker as formalized...", tone: "default" },
          { text: "[SUCCESS] Professional tax paid.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Consent-driven gig tax is a horizontal capability. Here is how different actors put the onboarding ledger to work.",
    sectors: [
      { icon: Landmark, title: "State Tax Departments", description: "Bring gig and informal workers into professional tax through low-friction registration from verified income, collecting a levy that was previously uncollectable.", assetTypes: ["Registrations", "Income Attestations", "Tax Demands"] },
      { icon: Boxes, title: "Gig Platforms", description: "Share verified worker income under consent, helping their workforce comply without exposing data or taking on employer-style deduction duties.", assetTypes: ["Income Shares", "Consent Records", "Compliance Proofs"] },
      { icon: Users, title: "Gig & Informal Workers", description: "Register and pay professional tax in a few steps from their own verified income, with control over what data is shared and a clean compliance record.", assetTypes: ["Consent Grants", "Registration Records", "Payment Receipts"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy professional tax system or capturing income from gig platform APIs, Cerulea routes both into one consent-driven onboarding ledger.",
    tracks: [
      {
        title: "Track A: Tax System Bridging",
        description:
          "For state professional tax systems. Registration and billing events are translated into anchored on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Professional Tax System", sublabel: "State Department Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Gig Tax Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Worker Wallet Consent",
        description:
          "For workers consenting on mobile. A wallet signs each consent and payment from the worker's device and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Worker Wallet / App", sublabel: "Gig Worker Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Registration Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Consent-Driven Tax Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a gig tax network with consent-based income sharing, simplified registration, and one-step payment from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Consent & Registration Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects tax onboarding integration benchmarks. Wiring platform income feeds, building consent-based registration, and shipping one-step payment for an average gig tax network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your consent and registration rules into pre-audited WebAssembly binaries and provisions the shared onboarding ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "wto-trade-dispute-evidence-and-documentation-integrity",
    icon: Gavel,
    eyebrow: "Dispute Evidence Engine",
    headline1: "Anchor every submission.",
    headline2: "Settle every authenticity fight.",
    heroDescription:
      "Run a private WTO dispute evidence chain with government-credentialed document anchoring and a tamper-proof submission timeline. The Evidence Chain, Provenance Notary, and Trade Finance Documents modules carry the core, so document authenticity challenges are eliminated and all parties share the same verifiable, timestamped submission record.",
    heroCta: "Deploy Dispute Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn contested paper submissions into a neutral, timestamped evidence chain every member state and the dispute body share.",
    mechanics: [
      { title: "Credentialed Anchoring", description: "Bind to the submitter. The Provenance Notary anchors each document with the government credential of the submitting member state, so origin and authenticity are provable." },
      { title: "Tamper-Proof Timeline", description: "Fix the submission order. The Evidence Chain timestamps each submission immutably, so the sequence of filings cannot be contested after the fact." },
      { title: "Shared Neutral Record", description: "One record for all. All parties and the dispute body read the same verifiable evidence record, removing disputes about who submitted what and when." },
      { title: "Authenticity Elimination", description: "End forgery arguments. Because each document is anchored by digest, an authenticity challenge is answered by the hash rather than argued in proceedings." },
      { title: "Document Provenance", description: "Trace trade documents. Trade Finance Documents anchor the underlying trade paperwork, so evidence rests on verifiable source documents." },
      { title: "Access-Controlled Review", description: "Keep it private. The chain is permissioned to the parties and the dispute body, so sensitive submissions stay confidential while remaining verifiable." },
    ],
    lifecycleTitle: "The Dispute Lifecycle",
    lifecycleSubtitle:
      "Follow a single submission from credentialed anchoring through the shared timeline to a resolved authenticity challenge.",
    lifecycleSteps: [
      {
        label: "Evidence Submission",
        description:
          "A member state submits a document. The contract anchors it with the state's government credential and a fixed timestamp.",
        icon: ScrollText,
        logFilename: "cerulea_wto.log",
        logLines: [
          { text: "[SYS] Anchoring dispute evidence submission...", time: "10:14:11", tone: "default" },
          { text: "[CMD] submit { case: \"DS_7742\", party: \"STATE_A\", doc: 0x71...c2 }", time: "10:14:11", tone: "primary" },
          { text: "[AUTH] Verifying government credential...", time: "10:14:12", tone: "secondary" },
          { text: "[OK] Submission anchored at block 8312233.", time: "10:14:12", tone: "success" },
        ],
      },
      {
        label: "Timeline Sealing",
        description:
          "The submission is sealed into the tamper-proof timeline, fixing its place in the sequence of filings for the dispute.",
        icon: Lock,
        logFilename: "cerulea_wto.log",
        logLines: [
          { text: "[SYS] Sealing submission to timeline...", time: "10:14:20", tone: "default" },
          { text: "[CMD] sealTimeline(DS_7742, seq: 4)", time: "10:14:20", tone: "primary" },
          { text: "[SYS] Sequence position fixed immutably.", time: "10:14:21", tone: "default" },
          { text: "[OK] Timeline sealed. Order tamper-proof.", time: "10:14:21", tone: "success" },
        ],
      },
      {
        label: "Shared Review",
        description:
          "All parties and the dispute body review the same anchored record, so there is no argument about what was submitted or when.",
        icon: Users,
        logFilename: "cerulea_wto.log",
        logLines: [
          { text: "[SYS] Sharing evidence record with parties...", time: "13:40:41", tone: "default" },
          { text: "[CMD] shareRecord(DS_7742)", time: "13:40:41", tone: "primary" },
          { text: "[SYS] Parties and panel view identical record.", time: "13:40:42", tone: "default" },
          { text: "[OK] Neutral shared record confirmed.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Authenticity Challenge",
        description:
          "A party challenges a document's authenticity. The anchored digest proves it is unaltered, and the challenge is resolved on record.",
        icon: Gavel,
        logFilename: "cerulea_wto.log",
        logLines: [
          { text: "[SYS] Verifying challenged document...", time: "15:22:47", tone: "default" },
          { text: "[CMD] verifyDoc(DS_7742, doc: 0x71...c2)", time: "15:22:47", tone: "primary" },
          { text: "[SYS] Digest matches anchored submission.", time: "15:22:48", tone: "default" },
          { text: "[OK] Authenticity confirmed. Challenge closed.", time: "15:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes dispute evidence into modular contracts. Each layer submits, seals, shares, and verifies so authenticity is settled by cryptography, not argument.",
    layers: [
      {
        title: "Submission Registry",
        subtitle: "The Credentialed Anchor",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Credentialed Anchor",
          description:
            "The foundational layer. It anchors each document with the submitting state's government credential and a digest, so origin and authenticity are provable rather than asserted in proceedings.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SubmissionRegistry {\n  struct Submission {\n    bytes32 caseId;\n    bytes32 party;\n    bytes32 docHash;\n    uint256 submittedAt;\n  }\n\n  mapping(bytes32 => Submission[]) public submissions;\n\n  function submit(bytes32 caseId, bytes32 docHash) external onlyCredentialedState {\n    submissions[caseId].push(Submission(caseId, partyOf[msg.sender], docHash, block.timestamp));\n  }\n}",
        simAction: "Simulate Submission",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying government credential...", tone: "default" },
          { text: "Hashing submitted document...", tone: "default" },
          { text: "Binding to submitting state...", tone: "default" },
          { text: "Writing submission to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Submission anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Timeline Sealer",
        subtitle: "The Immutable Order",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Immutable Order",
          description:
            "Fixes the sequence of filings. The Evidence Chain seals each submission into a tamper-proof timeline, so the order in which documents were filed cannot be contested after the fact.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function sealTimeline(bytes32 caseId, uint256 seq) external onlyPanel {\n    require(timeline[caseId].length == seq - 1, \"Out of order\");\n    timeline[caseId].push(TimelineEntry(seq, block.timestamp));\n    emit TimelineSealed(caseId, seq);\n}",
        simAction: "Simulate Timeline Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking sequence position...", tone: "default" },
          { text: "Fixing submission at position 4...", tone: "default" },
          { text: "Sealing into timeline...", tone: "default" },
          { text: "Locking filing order...", tone: "default" },
          { text: "[SUCCESS] Timeline sealed immutably.", tone: "success" },
        ],
      },
      {
        title: "Record Sharer",
        subtitle: "The Neutral View",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Neutral View",
          description:
            "Gives every party one truth. It exposes the identical anchored record to all parties and the dispute body within a permissioned network, removing disputes about what was submitted and when.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function shareRecord(bytes32 caseId) external view onlyParty(caseId) returns (Submission[] memory, TimelineEntry[] memory) {\n    return (submissions[caseId], timeline[caseId]);\n}",
        simAction: "Simulate Shared Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Party requesting evidence record...", tone: "default" },
          { text: "Confirming party authorization...", tone: "default" },
          { text: "Assembling identical record...", tone: "default" },
          { text: "Sharing with panel and parties...", tone: "default" },
          { text: "[SUCCESS] Neutral shared record returned.", tone: "success" },
        ],
      },
      {
        title: "Authenticity Verifier",
        subtitle: "The Digest Proof",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Digest Proof",
          description:
            "Ends authenticity fights. It confirms a challenged document matches its anchored digest, so an authenticity challenge is answered by cryptography rather than argued through the proceedings.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyDoc(bytes32 caseId, bytes32 docHash) external view returns (bool authentic, uint256 submittedAt) {\n    for (uint i; i < submissions[caseId].length; i++) {\n        if (submissions[caseId][i].docHash == docHash) return (true, submissions[caseId][i].submittedAt);\n    }\n    return (false, 0);\n}",
        simAction: "Simulate Authenticity Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Party challenging document...", tone: "default" },
          { text: "Recomputing document digest...", tone: "default" },
          { text: "Matching against anchored submission...", tone: "default" },
          { text: "Confirming document unaltered...", tone: "default" },
          { text: "[SUCCESS] Authenticity confirmed on record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Neutral dispute evidence is a horizontal capability. Here is how different actors put the dispute chain to work.",
    sectors: [
      { icon: Globe, title: "Dispute Settlement Bodies", description: "Run proceedings on a neutral, timestamped evidence chain, eliminating authenticity challenges and disputes over the submission timeline.", assetTypes: ["Evidence Records", "Submission Timelines", "Panel Reviews"] },
      { icon: Landmark, title: "Member States", description: "Submit documents with government-credentialed anchoring, so their evidence is provably authentic and their filing time cannot be contested.", assetTypes: ["Credentialed Submissions", "Trade Documents", "Filing Proofs"] },
      { icon: Scale, title: "Legal Counsel", description: "Argue on the merits instead of authenticity, resolving document challenges against anchored digests rather than protracted evidentiary fights.", assetTypes: ["Document Proofs", "Timeline Records", "Challenge Resolutions"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy dispute filing system or capturing submissions from state trade ministries, Cerulea routes both into one private dispute evidence chain.",
    tracks: [
      {
        title: "Track A: Dispute Filing Bridging",
        description:
          "For dispute body and trade ministry filing systems. Submission events are translated into credentialed on-chain evidence records through the API gateway within a permissioned network.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Dispute Filing System", sublabel: "Ministry & Panel Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Document Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Dispute Evidence Chain", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Credentialed State Submission",
        description:
          "For member states submitting directly. A credentialed key anchors each document from the ministry and routes it directly to the permissioned ledger.",
        connectorLabels: ["CREDENTIAL SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "State Ministry / Wallet", sublabel: "Government Submitters", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Submission Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Neutral Evidence Record", icon: Gavel, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a dispute evidence chain with credentialed anchoring, an immutable timeline, and authenticity verification from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Submission & Timeline Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects international arbitration integration benchmarks. Wiring filing systems, building credentialed anchoring, and shipping authenticity verification for an average dispute chain takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your submission and timeline rules into pre-audited WebAssembly binaries and provisions the shared dispute evidence chain instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "trade-agreement-tariff-schedule-verification-across-member-states",
    icon: Globe,
    eyebrow: "Tariff Consistency Engine",
    headline1: "One schedule.",
    headline2: "Every state aligned.",
    heroDescription:
      "Deploy a shared, verified tariff schedule that all member states reference, eliminating disputes about which tariff rate applies to a given product. Cerulea Studio assembles it from Compliance Attestations, Provenance Notary, and Audit Logs, anchoring the agreed schedule as a single verified reference every customs authority uses.",
    heroCta: "Deploy Tariff Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn divergent national tariff applications into one shared, verified schedule every member state customs authority reads.",
    mechanics: [
      { title: "Shared Schedule Anchor", description: "Fix the agreed rates. The Provenance Notary anchors the agreed tariff schedule as a single verified reference, so member states apply one shared source rather than divergent copies." },
      { title: "Product-Rate Binding", description: "Bind rate to product code. Each tariff line ties a rate to a product classification, so customs authorities resolve the correct rate for a given product unambiguously." },
      { title: "Consistent Application", description: "Align every state. Because all authorities read the same schedule, the rate applied to a product is consistent across member states, cutting trader disputes." },
      { title: "Version Provenance", description: "Track schedule changes. Each amendment is anchored with its provenance, so authorities always reference the correct version and history is auditable." },
      { title: "Discrepancy Detection", description: "Catch divergence. A rate applied that does not match the shared schedule is flagged, surfacing inconsistent application for resolution." },
      { title: "Audit Reference", description: "Give a verifiable source. Audit Logs let traders and authorities confirm which rate the agreement specifies, resolving disputes against the ledger." },
    ],
    lifecycleTitle: "The Schedule Lifecycle",
    lifecycleSubtitle:
      "Follow a single tariff line from shared anchoring through consistent application to a flagged discrepancy.",
    lifecycleSteps: [
      {
        label: "Schedule Anchoring",
        description:
          "The agreed tariff schedule is anchored as a shared reference. The contract fixes each product-rate line for all member states.",
        icon: Globe,
        logFilename: "cerulea_tariff.log",
        logLines: [
          { text: "[SYS] Anchoring agreed tariff schedule...", time: "10:14:11", tone: "default" },
          { text: "[CMD] anchorSchedule { agreement: \"RTA_88\", lines: 4200 }", time: "10:14:11", tone: "primary" },
          { text: "[AUTH] Verifying member state signatures...", time: "10:14:12", tone: "secondary" },
          { text: "[OK] Schedule anchored at block 8412233.", time: "10:14:12", tone: "success" },
        ],
      },
      {
        label: "Rate Resolution",
        description:
          "A customs authority resolves the rate for a product code against the shared schedule, obtaining the single agreed rate.",
        icon: Search,
        logFilename: "cerulea_tariff.log",
        logLines: [
          { text: "[SYS] Resolving tariff for product code...", time: "12:30:30", tone: "default" },
          { text: "[CMD] resolveRate(RTA_88, hs: \"8471.30\")", time: "12:30:31", tone: "primary" },
          { text: "[SYS] Single agreed rate returned.", time: "12:30:31", tone: "default" },
          { text: "[OK] Rate 5% applied consistently.", time: "12:30:32", tone: "success" },
        ],
      },
      {
        label: "Schedule Amendment",
        description:
          "The agreement amends a rate. The new version is anchored with provenance, so all authorities reference the updated schedule.",
        icon: FileCheck,
        logFilename: "cerulea_tariff.log",
        logLines: [
          { text: "[SYS] Anchoring schedule amendment...", time: "14:40:41", tone: "default" },
          { text: "[CMD] amendRate(RTA_88, hs: \"8471.30\", rate: 3)", time: "14:40:41", tone: "primary" },
          { text: "[AUTH] Recording amendment provenance...", time: "14:40:42", tone: "secondary" },
          { text: "[OK] New version anchored for all states.", time: "14:40:42", tone: "success" },
        ],
      },
      {
        label: "Discrepancy Flag",
        description:
          "An authority applies a rate that does not match the shared schedule. The mismatch is flagged for resolution.",
        icon: Zap,
        logFilename: "cerulea_tariff.log",
        logLines: [
          { text: "[SYS] Checking applied rate against schedule...", time: "16:22:47", tone: "default" },
          { text: "[CMD] checkApplication(RTA_88, hs: \"8471.30\", applied: 8)", time: "16:22:47", tone: "primary" },
          { text: "[SYS] Applied 8% differs from agreed 3%.", time: "16:22:48", tone: "error" },
          { text: "[OK] Discrepancy flagged for resolution.", time: "16:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes tariff verification into modular contracts. Each layer anchors, resolves, amends, and flags so every member state applies one agreed schedule.",
    layers: [
      {
        title: "Schedule Registry",
        subtitle: "The Shared Reference",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Reference",
          description:
            "The foundational layer. It anchors the agreed tariff schedule as a single verified reference, so member states apply one shared source instead of divergent national copies.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ScheduleRegistry {\n  struct Line {\n    bytes32 agreement;\n    bytes32 hsCode;\n    uint256 rate;\n    uint256 version;\n  }\n\n  mapping(bytes32 => Line) public lines;\n\n  function anchor(bytes32 key, bytes32 agreement, bytes32 hsCode, uint256 rate) external onlySecretariat {\n    lines[key] = Line(agreement, hsCode, rate, 1);\n  }\n}",
        simAction: "Simulate Schedule Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying member state signatures...", tone: "default" },
          { text: "Recording product-rate lines...", tone: "default" },
          { text: "Fixing shared reference...", tone: "default" },
          { text: "Writing schedule to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Tariff schedule anchored.", tone: "success" },
        ],
      },
      {
        title: "Rate Resolver",
        subtitle: "The Unambiguous Rate",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Unambiguous Rate",
          description:
            "Gives one answer per product. It ties each rate to a product classification, so a customs authority resolves the single agreed rate for a given product without divergent interpretation.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function resolveRate(bytes32 agreement, bytes32 hsCode) external view returns (uint256 rate, uint256 version) {\n    Line memory l = lines[keccak256(abi.encode(agreement, hsCode))];\n    return (l.rate, l.version);\n}",
        simAction: "Simulate Rate Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Customs querying product code...", tone: "default" },
          { text: "Looking up shared schedule line...", tone: "default" },
          { text: "Returning single agreed rate...", tone: "default" },
          { text: "Confirming version...", tone: "default" },
          { text: "[SUCCESS] Consistent rate resolved.", tone: "success" },
        ],
      },
      {
        title: "Amendment Notary",
        subtitle: "The Version Provenance",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Version Provenance",
          description:
            "Keeps all states on the current schedule. It anchors each amendment with its provenance, so authorities always reference the correct version and the history of rate changes is auditable.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function amendRate(bytes32 agreement, bytes32 hsCode, uint256 rate) external onlySecretariat {\n    bytes32 key = keccak256(abi.encode(agreement, hsCode));\n    lines[key].rate = rate;\n    lines[key].version++;\n    emit RateAmended(agreement, hsCode, rate, lines[key].version);\n}",
        simAction: "Simulate Amendment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording agreed rate change...", tone: "default" },
          { text: "Incrementing schedule version...", tone: "default" },
          { text: "Anchoring amendment provenance...", tone: "default" },
          { text: "Publishing to all states...", tone: "default" },
          { text: "[SUCCESS] Amendment anchored for all.", tone: "success" },
        ],
      },
      {
        title: "Application Monitor",
        subtitle: "The Divergence Flag",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Divergence Flag",
          description:
            "Surfaces inconsistent application. It compares a rate applied by an authority against the shared schedule and flags any mismatch, giving traders and states a verifiable basis to resolve divergence.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function checkApplication(bytes32 agreement, bytes32 hsCode, uint256 applied) external returns (bool consistent) {\n    (uint256 agreed,) = this.resolveRate(agreement, hsCode);\n    consistent = applied == agreed;\n    if (!consistent) emit ApplicationDiscrepancy(agreement, hsCode, applied, agreed);\n}",
        simAction: "Simulate Discrepancy Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading applied rate...", tone: "default" },
          { text: "Comparing to agreed schedule...", tone: "default" },
          { text: "Applied 8% differs from 3%...", tone: "default" },
          { text: "Flagging inconsistent application...", tone: "default" },
          { text: "[SUCCESS] Discrepancy flagged for resolution.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A shared tariff schedule is a horizontal capability. Here is how different actors put the tariff ledger to work.",
    sectors: [
      { icon: Landmark, title: "Customs Authorities", description: "Apply one agreed rate per product from a shared schedule, ending the inconsistent tariff application that generates trader disputes across member states.", assetTypes: ["Tariff Lines", "Rate Resolutions", "Discrepancy Flags"] },
      { icon: Globe, title: "Trade Secretariats", description: "Maintain and amend the agreed schedule with version provenance, so every authority references the correct, current tariff at once.", assetTypes: ["Agreed Schedules", "Amendments", "Version Histories"] },
      { icon: Truck, title: "Traders & Exporters", description: "Confirm the rate the agreement specifies for a product from a verifiable source, resolving disputes over applied tariffs against the ledger.", assetTypes: ["Rate Confirmations", "Tariff References", "Dispute Evidence"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy national customs tariff systems or serving traders through a lookup portal, Cerulea routes both into one shared tariff schedule ledger.",
    tracks: [
      {
        title: "Track A: Customs Tariff Bridging",
        description:
          "For national customs and secretariat systems. Schedule and application events are translated into anchored on-chain tariff records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "National Customs System", sublabel: "Authority Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Schedule Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Tariff Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Trader Lookup Portal",
        description:
          "For traders confirming rates. A portal resolves the agreed rate for a product code from the ledger with no account needed.",
        connectorLabels: ["PUBLIC QUERY", "STATE EXECUTION"],
        nodes: [
          { label: "Tariff Lookup Portal", sublabel: "Trader Access", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Tariff Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Tariff Record", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a tariff verification network with a shared schedule, product-rate binding, and discrepancy detection from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Schedule & Application Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects trade agreement integration benchmarks. Wiring national customs systems, building a shared schedule, and shipping discrepancy detection for an average tariff network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your schedule and application rules into pre-audited WebAssembly binaries and provisions the shared tariff ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "rules-of-origin-certification-for-preferential-trade-agreements",
    icon: ShieldCheck,
    eyebrow: "Origin Certification Engine",
    headline1: "Prove local content.",
    headline2: "Earn the preference.",
    heroDescription:
      "Build a verified rules-of-origin certificate showing a product qualifies for preferential tariff treatment, with the underlying production data anchored for audit. The Provenance Notary, Compliance Attestations, and Traceability Ledger modules carry the core, anchoring production and sourcing data so certifying authorities issue on evidence and importing customs can trust the certification.",
    heroCta: "Deploy Origin Certification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn unverifiable origin claims into certificates backed by anchored production and sourcing data.",
    mechanics: [
      { title: "Sourcing Provenance", description: "Anchor the inputs. The Traceability Ledger records the origin of each input, so the local and imported content of a product is verifiable rather than asserted." },
      { title: "Local Content Calc", description: "Compute the qualifying value. Local content is calculated from anchored sourcing data against the agreement's threshold, so qualification is provable." },
      { title: "Evidence-Based Certificate", description: "Certify on data. The certifying authority issues the rules-of-origin certificate from anchored production data, replacing certificates based on unretained records." },
      { title: "Auditable Production Data", description: "Keep the basis. The Provenance Notary anchors the production data used to determine origin, so the certificate can be audited long after issuance." },
      { title: "Importing Customs Trust", description: "Clear at destination. Customs in the importing country verify the certificate and its underlying data, granting preferential treatment with confidence." },
      { title: "Fraud Resistance", description: "Deter false claims. Because origin rests on anchored data, a false local-content claim is detectable, protecting the preference regime from abuse." },
    ],
    lifecycleTitle: "The Certification Lifecycle",
    lifecycleSubtitle:
      "Follow a single product from sourcing provenance through local-content calculation to a verified origin certificate.",
    lifecycleSteps: [
      {
        label: "Sourcing Anchor",
        description:
          "An exporter anchors the origin of each input. The contract records the sourcing data that local content is calculated from.",
        icon: Boxes,
        logFilename: "cerulea_origin.log",
        logLines: [
          { text: "[SYS] Anchoring input sourcing data...", time: "08:14:11", tone: "default" },
          { text: "[CMD] anchorSourcing { product: \"PRD_7742\", localPct: 62 }", time: "08:14:11", tone: "primary" },
          { text: "[AUTH] Verifying supplier origin records...", time: "08:14:12", tone: "secondary" },
          { text: "[OK] Sourcing anchored at block 8512233.", time: "08:14:12", tone: "success" },
        ],
      },
      {
        label: "Content Calculation",
        description:
          "Local content is calculated from the anchored sourcing against the agreement threshold, determining qualification.",
        icon: Scale,
        logFilename: "cerulea_origin.log",
        logLines: [
          { text: "[SYS] Calculating local content value...", time: "10:30:30", tone: "default" },
          { text: "[CMD] calcContent(PRD_7742, threshold: 40)", time: "10:30:31", tone: "primary" },
          { text: "[SYS] Local content 62% exceeds 40% threshold.", time: "10:30:31", tone: "default" },
          { text: "[OK] Product qualifies for preference.", time: "10:30:32", tone: "success" },
        ],
      },
      {
        label: "Certificate Issuance",
        description:
          "The certifying authority issues the rules-of-origin certificate from the anchored data as a verifiable credential.",
        icon: ShieldCheck,
        logFilename: "cerulea_origin.log",
        logLines: [
          { text: "[SYS] Issuing rules-of-origin certificate...", time: "13:40:41", tone: "default" },
          { text: "[CMD] issueCertificate(PRD_7742, agreement: \"PTA_88\")", time: "13:40:41", tone: "primary" },
          { text: "[AUTH] Binding certificate to production data...", time: "13:40:42", tone: "secondary" },
          { text: "[OK] Certificate issued on evidence.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Customs Verification",
        description:
          "Importing customs verify the certificate and its underlying data, granting preferential tariff treatment with confidence.",
        icon: FileCheck,
        logFilename: "cerulea_origin.log",
        logLines: [
          { text: "[SYS] Verifying origin certificate at import...", time: "15:22:47", tone: "default" },
          { text: "[CMD] verifyCertificate(PRD_7742)", time: "15:22:47", tone: "primary" },
          { text: "[SYS] Certificate and data confirmed valid.", time: "15:22:48", tone: "default" },
          { text: "[OK] Preferential tariff granted.", time: "15:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes origin certification into modular contracts. Each layer anchors, calculates, certifies, and verifies so a preference rests on auditable evidence.",
    layers: [
      {
        title: "Sourcing Ledger",
        subtitle: "The Input Provenance",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Input Provenance",
          description:
            "The foundational layer. It records the origin of each input on the Traceability Ledger, so the local and imported content behind an origin claim is verifiable rather than asserted on paper.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SourcingLedger {\n  struct Sourcing {\n    bytes32 product;\n    uint256 localValue;\n    uint256 totalValue;\n  }\n\n  mapping(bytes32 => Sourcing) public sourcing;\n\n  function anchor(bytes32 product, uint256 localValue, uint256 totalValue) external onlyExporter {\n    sourcing[product] = Sourcing(product, localValue, totalValue);\n  }\n}",
        simAction: "Simulate Sourcing Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying supplier origin records...", tone: "default" },
          { text: "Recording local input value...", tone: "default" },
          { text: "Anchoring total product value...", tone: "default" },
          { text: "Writing sourcing to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Input provenance anchored.", tone: "success" },
        ],
      },
      {
        title: "Content Engine",
        subtitle: "The Qualifying Calculator",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Qualifying Calculator",
          description:
            "Proves qualification with math. It computes local content from anchored sourcing against the agreement threshold, so a product's eligibility for preference is a provable calculation rather than a claim.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function calcContent(bytes32 product, uint256 thresholdPct) external view returns (bool qualifies, uint256 localPct) {\n    Sourcing memory s = sourcing[product];\n    localPct = (s.localValue * 100) / s.totalValue;\n    qualifies = localPct >= thresholdPct;\n}",
        simAction: "Simulate Content Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading anchored sourcing...", tone: "default" },
          { text: "Computing local content percentage...", tone: "default" },
          { text: "Comparing to 40% threshold...", tone: "default" },
          { text: "Content exceeds threshold...", tone: "default" },
          { text: "[SUCCESS] Qualification proven.", tone: "success" },
        ],
      },
      {
        title: "Certificate Notary",
        subtitle: "The Evidence-Based Issue",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence-Based Issue",
          description:
            "Certifies from data, not assertion. The Provenance Notary binds the certificate to the anchored production data, so the certifying authority issues on verifiable evidence that can be audited later.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function issueCertificate(bytes32 product, bytes32 agreement) external onlyCertifier {\n    (bool qualifies,) = this.calcContent(product, thresholds[agreement]);\n    require(qualifies, \"Does not qualify\");\n    certificates[product] = Certificate(agreement, keccak256(abi.encode(product)), block.timestamp);\n    emit CertificateIssued(product, agreement);\n}",
        simAction: "Simulate Certificate Issue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming product qualifies...", tone: "default" },
          { text: "Binding certificate to data...", tone: "default" },
          { text: "Issuing verifiable credential...", tone: "default" },
          { text: "Recording issuance...", tone: "default" },
          { text: "[SUCCESS] Certificate issued on evidence.", tone: "success" },
        ],
      },
      {
        title: "Customs Verifier",
        subtitle: "The Import Trust",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Import Trust",
          description:
            "Lets destination customs trust the claim. It verifies the certificate and its underlying data, so preferential treatment is granted with confidence and a false local-content claim is detectable.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyCertificate(bytes32 product) external view returns (bool valid, bytes32 agreement) {\n    Certificate memory c = certificates[product];\n    valid = c.dataHash == keccak256(abi.encode(product));\n    agreement = c.agreement;\n}",
        simAction: "Simulate Customs Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Importing customs querying certificate...", tone: "default" },
          { text: "Confirming data binding...", tone: "default" },
          { text: "Validating certificate...", tone: "default" },
          { text: "Granting preferential tariff...", tone: "default" },
          { text: "[SUCCESS] Preference granted on trust.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Evidence-based origin certification is a horizontal capability. Here is how different actors put the certification ledger to work.",
    sectors: [
      { icon: ShieldCheck, title: "Certifying Authorities", description: "Issue rules-of-origin certificates from anchored production data, replacing certification based on records exporters may not retain in an auditable form.", assetTypes: ["Origin Certificates", "Production Data", "Content Calculations"] },
      { icon: Factory, title: "Exporters", description: "Prove local content with verifiable sourcing data, earning preferential tariff treatment and passing audits without reconstructing production records.", assetTypes: ["Sourcing Records", "Content Proofs", "Export Certificates"] },
      { icon: Landmark, title: "Importing Customs", description: "Verify origin certificates and their underlying data, granting preference with confidence and detecting false local-content claims.", assetTypes: ["Certificate Verifications", "Preference Grants", "Origin Audits"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy certificate-of-origin systems or capturing sourcing from exporter ERP, Cerulea routes both into one evidence-based origin ledger.",
    tracks: [
      {
        title: "Track A: Origin System Bridging",
        description:
          "For certificate-of-origin and chamber systems. Sourcing and certificate events are translated into anchored on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Certificate of Origin System", sublabel: "Certifier Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Data Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Origin Certification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Exporter ERP Capture",
        description:
          "For exporters anchoring sourcing. A signed connector records each product's sourcing data from the exporter ERP and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Exporter ERP / Wallet", sublabel: "Producer Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Sourcing Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Evidence-Based Origin Record", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an origin certification network with sourcing provenance, content calculation, and evidence-based certificates from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Sourcing & Content Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects trade certification integration benchmarks. Wiring exporter ERP, building content calculation, and shipping evidence-based certification for an average origin network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your sourcing and content rules into pre-audited WebAssembly binaries and provisions the shared origin ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "campaign-finance-transparency-and-donation-tracking",
    icon: PieChart,
    eyebrow: "Campaign Finance Engine",
    headline1: "Verify every donation.",
    headline2: "Publish every total.",
    heroDescription:
      "Deliver a hybrid campaign finance chain with private verified donation records and a public aggregated disclosure portal. The Treasury, Provenance Notary, and Audit Logs modules carry the core, making undisclosed large donations structurally impossible and giving citizens verifiable access to campaign finance data for the first time.",
    heroCta: "Deploy Finance Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn self-reported, unverifiable campaign finance into verified private records and public aggregated disclosure.",
    mechanics: [
      { title: "Verified Donations", description: "Record each contribution. The Treasury module records every donation to a campaign as a verified entry, so a large undisclosed donation cannot exist off the record." },
      { title: "Donor Attestation", description: "Bind the source. The Provenance Notary anchors donor identity attestations privately, so contributions rest on verified sources without exposing every donor publicly." },
      { title: "Public Aggregation", description: "Disclose the totals. A public portal aggregates donations into disclosed figures, giving citizens verifiable access to campaign finance data for the first time." },
      { title: "Threshold Disclosure", description: "Enforce the limits. Donations above the disclosure threshold are surfaced automatically, so large contributions cannot stay hidden below reporting requirements." },
      { title: "Hybrid Privacy", description: "Balance privacy and transparency. Individual records stay private while aggregate totals are public, protecting small donors while exposing concentrations of money." },
      { title: "Immutable Audit", description: "Keep an honest ledger. Audit Logs make every donation record immutable, so figures cannot be altered after the fact to obscure sources." },
    ],
    lifecycleTitle: "The Finance Lifecycle",
    lifecycleSubtitle:
      "Follow a single donation from verified recording through threshold disclosure to public aggregation.",
    lifecycleSteps: [
      {
        label: "Donation Recorded",
        description:
          "A donation to a campaign is recorded as a verified entry. The contract anchors the contribution with its attested donor source privately.",
        icon: Coins,
        logFilename: "cerulea_campaign.log",
        logLines: [
          { text: "[SYS] Recording verified donation...", time: "10:14:11", tone: "default" },
          { text: "[CMD] recordDonation { campaign: \"CMP_88\", amount: 500000 }", time: "10:14:11", tone: "primary" },
          { text: "[AUTH] Verifying donor identity attestation...", time: "10:14:12", tone: "secondary" },
          { text: "[OK] Donation anchored at block 8612233.", time: "10:14:12", tone: "success" },
        ],
      },
      {
        label: "Threshold Check",
        description:
          "The donation is checked against the disclosure threshold. Because it exceeds the limit, it is marked for disclosure.",
        icon: Scale,
        logFilename: "cerulea_campaign.log",
        logLines: [
          { text: "[SYS] Checking donation against threshold...", time: "10:14:20", tone: "default" },
          { text: "[CMD] checkThreshold(CMP_88, amount: 500000)", time: "10:14:20", tone: "primary" },
          { text: "[SYS] Amount exceeds disclosure threshold.", time: "10:14:21", tone: "default" },
          { text: "[OK] Marked for mandatory disclosure.", time: "10:14:21", tone: "success" },
        ],
      },
      {
        label: "Public Aggregation",
        description:
          "The donation feeds the public aggregated totals. Citizens see verified campaign finance figures on the disclosure portal.",
        icon: PieChart,
        logFilename: "cerulea_campaign.log",
        logLines: [
          { text: "[SYS] Aggregating donations for disclosure...", time: "13:40:41", tone: "default" },
          { text: "[CMD] aggregate(CMP_88)", time: "13:40:41", tone: "primary" },
          { text: "[SYS] Public totals updated with verified data.", time: "13:40:42", tone: "default" },
          { text: "[OK] Disclosure portal reflects donation.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Immutable Record",
        description:
          "The donation record is sealed immutably, so campaign finance figures cannot be altered later to obscure the source.",
        icon: Lock,
        logFilename: "cerulea_campaign.log",
        logLines: [
          { text: "[SYS] Sealing donation record...", time: "15:22:47", tone: "default" },
          { text: "[CMD] sealRecord(CMP_88, donation: \"D_921\")", time: "15:22:47", tone: "primary" },
          { text: "[AUTH] Locking record against alteration...", time: "15:22:48", tone: "secondary" },
          { text: "[OK] Record immutable and auditable.", time: "15:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes campaign finance into modular contracts. Each layer records, checks, aggregates, and seals so undisclosed large donations become structurally impossible.",
    layers: [
      {
        title: "Donation Treasury",
        subtitle: "The Verified Entry",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Entry",
          description:
            "The foundational layer. The Treasury records every donation as a verified entry with an attested donor source, so a large contribution cannot exist off the record or without a verified origin.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract DonationTreasury {\n  struct Donation {\n    bytes32 campaign;\n    uint256 amount;\n    bytes32 donorAttestation;\n    bool disclosed;\n  }\n\n  mapping(bytes32 => Donation) public donations;\n\n  function record(bytes32 id, bytes32 campaign, uint256 amount, bytes32 attest) external onlyTreasurer {\n    donations[id] = Donation(campaign, amount, attest, false);\n  }\n}",
        simAction: "Simulate Donation Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying donor attestation...", tone: "default" },
          { text: "Recording contribution amount...", tone: "default" },
          { text: "Binding to campaign...", tone: "default" },
          { text: "Writing donation to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Verified donation recorded.", tone: "success" },
        ],
      },
      {
        title: "Threshold Gate",
        subtitle: "The Disclosure Trigger",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Disclosure Trigger",
          description:
            "Enforces reporting limits. It marks any donation above the disclosure threshold for public reporting, so large contributions cannot stay hidden below the requirement.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function checkThreshold(bytes32 id) external {\n    if (donations[id].amount >= disclosureThreshold) {\n        donations[id].disclosed = true;\n        emit DisclosureRequired(id, donations[id].amount);\n    }\n}",
        simAction: "Simulate Threshold Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading donation amount...", tone: "default" },
          { text: "Comparing to disclosure threshold...", tone: "default" },
          { text: "Amount exceeds limit...", tone: "default" },
          { text: "Marking for disclosure...", tone: "default" },
          { text: "[SUCCESS] Disclosure triggered.", tone: "success" },
        ],
      },
      {
        title: "Aggregation Engine",
        subtitle: "The Public Total",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Public Total",
          description:
            "Balances privacy and transparency. It aggregates individual donations into public disclosed totals while keeping small-donor records private, giving citizens verifiable campaign finance data.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function aggregate(bytes32 campaign) external view returns (uint256 total, uint256 disclosedTotal) {\n    for (uint i; i < campaignDonations[campaign].length; i++) {\n        Donation memory d = donations[campaignDonations[campaign][i]];\n        total += d.amount;\n        if (d.disclosed) disclosedTotal += d.amount;\n    }\n}",
        simAction: "Simulate Aggregation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Summing campaign donations...", tone: "default" },
          { text: "Separating disclosed totals...", tone: "default" },
          { text: "Preserving small-donor privacy...", tone: "default" },
          { text: "Updating public portal...", tone: "default" },
          { text: "[SUCCESS] Public totals disclosed.", tone: "success" },
        ],
      },
      {
        title: "Record Sealer",
        subtitle: "The Immutable Ledger",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Immutable Ledger",
          description:
            "Keeps figures honest. Audit Logs seal each donation record immutably, so campaign finance figures cannot be altered after the fact to obscure a source or reduce a disclosed total.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function sealRecord(bytes32 id) external onlyAuditor {\n    sealed[id] = true;\n    emit RecordSealed(id, block.timestamp);\n}",
        simAction: "Simulate Record Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Finalizing donation record...", tone: "default" },
          { text: "Locking against alteration...", tone: "default" },
          { text: "Sealing to audit log...", tone: "default" },
          { text: "Making record immutable...", tone: "default" },
          { text: "[SUCCESS] Record sealed and auditable.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Hybrid campaign finance transparency is a horizontal capability. Here is how different actors put the finance chain to work.",
    sectors: [
      { icon: Landmark, title: "Election Commissions", description: "Enforce disclosure structurally by recording every donation and surfacing large contributions, making undisclosed money impossible rather than merely prohibited.", assetTypes: ["Donation Records", "Disclosure Flags", "Verified Totals"] },
      { icon: Users, title: "Citizens & Watchdogs", description: "Access verifiable aggregated campaign finance data for the first time, seeing concentrations of money behind campaigns from a public portal.", assetTypes: ["Public Totals", "Disclosure Reports", "Finance Data"] },
      { icon: PieChart, title: "Campaigns & Parties", description: "Record verified donations and demonstrate compliance with disclosure limits, protecting small-donor privacy while proving clean finances.", assetTypes: ["Verified Donations", "Compliance Proofs", "Donor Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy campaign finance reporting system or capturing donations from a giving platform, Cerulea routes both into one hybrid finance chain.",
    tracks: [
      {
        title: "Track A: Finance Reporting Bridging",
        description:
          "For election commission finance systems. Donation and disclosure events are translated into verified on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Finance Reporting System", sublabel: "Commission Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Donation Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Campaign Finance Chain", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Giving Platform Capture",
        description:
          "For donation and giving platforms. A signed connector records each donation from the platform and routes it directly to the ledger for verification and disclosure.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Giving Platform / Wallet", sublabel: "Donor Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Donation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Finance Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a campaign finance chain with verified donations, threshold disclosure, and public aggregation from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Donation & Disclosure Rules",
      ruleCount: 45,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects election transparency integration benchmarks. Wiring reporting systems, building threshold disclosure, and shipping public aggregation for an average finance chain takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your donation and disclosure rules into pre-audited WebAssembly binaries and provisions the hybrid finance chain instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "election-expenditure-reporting-to-election-commission",
    icon: Activity,
    eyebrow: "Expenditure Reporting Engine",
    headline1: "Log every expense.",
    headline2: "Know your limit.",
    heroDescription:
      "Build a verified election expenditure record that candidates submit to the election commission, with spending categorized against legal limits in real time. Cerulea Studio assembles it from Invoices and Billing, Compliance Attestations, and Audit Logs, anchoring expenditure as it occurs so candidates always know their position and submit without a last-minute scramble.",
    heroCta: "Deploy Expenditure Reporting",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a rushed deadline compilation into real-time expenditure tracking categorized against legal spending limits.",
    mechanics: [
      { title: "Real-Time Anchoring", description: "Record as you spend. Invoices and Billing anchor each expense as it occurs, so a candidate's spending record builds continuously rather than in a deadline rush." },
      { title: "Category Classification", description: "Sort against the rules. Each expense is classified against the legal expenditure categories, so spending is tracked in the same terms the commission audits." },
      { title: "Live Limit Position", description: "Know the headroom. The record continuously compares spending against the legal limit, so a candidate always knows how much room remains." },
      { title: "Vendor & Volunteer Capture", description: "Consolidate the sources. Expenses from multiple vendors and volunteers feed one record, ending the scramble to compile scattered receipts at filing." },
      { title: "Attested Report", description: "Submit verified. Compliance Attestations produce a verified expenditure report for the commission, replacing an error-prone manual compilation." },
      { title: "Limit Breach Alert", description: "Warn before the line. Spending approaching the legal limit is flagged, so a candidate can act before crossing it." },
    ],
    lifecycleTitle: "The Expenditure Lifecycle",
    lifecycleSubtitle:
      "Follow a single campaign expense from real-time anchoring through categorization to a verified report submission.",
    lifecycleSteps: [
      {
        label: "Expense Anchoring",
        description:
          "A campaign expense is anchored as it occurs. The contract records the amount and vendor as part of a continuous expenditure record.",
        icon: Coins,
        logFilename: "cerulea_expend.log",
        logLines: [
          { text: "[SYS] Anchoring campaign expense...", time: "10:14:11", tone: "default" },
          { text: "[CMD] recordExpense { candidate: \"CND_88\", amount: 120000, vendor: \"V_21\" }", time: "10:14:11", tone: "primary" },
          { text: "[AUTH] Verifying candidate agent credential...", time: "10:14:12", tone: "secondary" },
          { text: "[OK] Expense anchored at block 8712233.", time: "10:14:12", tone: "success" },
        ],
      },
      {
        label: "Categorization",
        description:
          "The expense is classified against legal expenditure categories, so it is tracked in the same terms the commission uses to audit.",
        icon: FileCheck,
        logFilename: "cerulea_expend.log",
        logLines: [
          { text: "[SYS] Classifying expense category...", time: "10:14:20", tone: "default" },
          { text: "[CMD] categorize(CND_88, exp: \"E_921\", cat: \"PUBLICITY\")", time: "10:14:20", tone: "primary" },
          { text: "[SYS] Expense mapped to legal category.", time: "10:14:21", tone: "default" },
          { text: "[OK] Categorized against limit heads.", time: "10:14:21", tone: "success" },
        ],
      },
      {
        label: "Limit Position",
        description:
          "The record updates the candidate's spending against the legal limit, so their remaining headroom is always known.",
        icon: Activity,
        logFilename: "cerulea_expend.log",
        logLines: [
          { text: "[SYS] Updating live limit position...", time: "13:40:41", tone: "default" },
          { text: "[CMD] limitPosition(CND_88)", time: "13:40:41", tone: "primary" },
          { text: "[SYS] Spent 68% of legal limit.", time: "13:40:42", tone: "default" },
          { text: "[OK] Position returned to candidate.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Report Submission",
        description:
          "A verified expenditure report is compiled and submitted to the commission, without a last-minute scramble to reconcile receipts.",
        icon: ShieldCheck,
        logFilename: "cerulea_expend.log",
        logLines: [
          { text: "[SYS] Compiling verified expenditure report...", time: "15:22:47", tone: "default" },
          { text: "[CMD] submitReport(CND_88)", time: "15:22:47", tone: "primary" },
          { text: "[AUTH] Attesting report to commission...", time: "15:22:48", tone: "secondary" },
          { text: "[OK] Verified report submitted on time.", time: "15:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes expenditure reporting into modular contracts. Each layer anchors, categorizes, positions, and submits so a report is a continuous record, not a deadline scramble.",
    layers: [
      {
        title: "Expense Registry",
        subtitle: "The Continuous Record",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Continuous Record",
          description:
            "The foundational layer. Invoices and Billing anchor each expense as it occurs, so a candidate's expenditure record builds continuously instead of being compiled from receipts near the filing deadline.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ExpenseRegistry {\n  struct Expense {\n    bytes32 candidate;\n    uint256 amount;\n    bytes32 vendor;\n    bytes32 category;\n  }\n\n  mapping(bytes32 => Expense) public expenses;\n\n  function record(bytes32 id, bytes32 candidate, uint256 amount, bytes32 vendor) external onlyAgent {\n    expenses[id] = Expense(candidate, amount, vendor, \"UNCLASSIFIED\");\n  }\n}",
        simAction: "Simulate Expense Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying candidate agent...", tone: "default" },
          { text: "Recording expense amount...", tone: "default" },
          { text: "Binding to vendor...", tone: "default" },
          { text: "Writing expense to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Expense anchored in real time.", tone: "success" },
        ],
      },
      {
        title: "Category Mapper",
        subtitle: "The Legal Heads",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Legal Heads",
          description:
            "Tracks spending in audit terms. It classifies each expense against the legal expenditure categories, so a candidate's record is already in the form the commission uses to audit against limits.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function categorize(bytes32 id, bytes32 category) external onlyAgent {\n    expenses[id].category = category;\n    categoryTotals[expenses[id].candidate][category] += expenses[id].amount;\n    emit Categorized(id, category);\n}",
        simAction: "Simulate Categorization",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Classifying as publicity spend...", tone: "default" },
          { text: "Mapping to legal head...", tone: "default" },
          { text: "Updating category total...", tone: "default" },
          { text: "Recording classification...", tone: "default" },
          { text: "[SUCCESS] Expense categorized on-chain.", tone: "success" },
        ],
      },
      {
        title: "Limit Tracker",
        subtitle: "The Live Position",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Position",
          description:
            "Keeps the candidate informed. It continuously compares total spending against the legal limit and flags approach to the ceiling, so a candidate always knows their position and can act before a breach.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function limitPosition(bytes32 candidate) external view returns (uint256 spent, uint256 limit, uint256 pctUsed) {\n    spent = totalSpent[candidate];\n    limit = legalLimit[candidate];\n    pctUsed = (spent * 100) / limit;\n}",
        simAction: "Simulate Limit Position",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Summing candidate spending...", tone: "default" },
          { text: "Reading legal limit...", tone: "default" },
          { text: "Computing percentage used...", tone: "default" },
          { text: "Returning 68% position...", tone: "default" },
          { text: "[SUCCESS] Live limit position returned.", tone: "success" },
        ],
      },
      {
        title: "Report Notary",
        subtitle: "The Verified Filing",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Filing",
          description:
            "Removes the deadline scramble. Compliance Attestations compile a verified expenditure report for the commission from the continuous record, replacing an error-prone last-minute manual compilation.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function submitReport(bytes32 candidate) external onlyAgent returns (bytes32 reportHash) {\n    reportHash = keccak256(abi.encode(candidate, totalSpent[candidate], block.timestamp));\n    reports[candidate] = Report(reportHash, block.timestamp);\n    emit ReportSubmitted(candidate, reportHash);\n}",
        simAction: "Simulate Report Submission",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling continuous record...", tone: "default" },
          { text: "Attesting verified report...", tone: "default" },
          { text: "Binding to commission...", tone: "default" },
          { text: "Submitting on time...", tone: "default" },
          { text: "[SUCCESS] Verified report submitted.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Real-time expenditure tracking is a horizontal capability. Here is how different actors put the reporting ledger to work.",
    sectors: [
      { icon: Landmark, title: "Election Commissions", description: "Receive verified expenditure reports categorized against legal limits, replacing rushed manual filings with continuous, auditable records.", assetTypes: ["Expenditure Reports", "Category Totals", "Limit Positions"] },
      { icon: Users, title: "Candidates & Agents", description: "Track spending in real time and know their headroom against the legal limit, filing a verified report without a last-minute reconciliation scramble.", assetTypes: ["Campaign Expenses", "Limit Alerts", "Verified Reports"] },
      { icon: Shield, title: "Election Observers", description: "Audit categorized expenditure against limits from a verifiable record, focusing on genuine overspend rather than reconstructing scattered receipts.", assetTypes: ["Audit Trails", "Category Records", "Compliance Checks"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy expenditure reporting system or capturing expenses from a campaign app, Cerulea routes both into one real-time expenditure ledger.",
    tracks: [
      {
        title: "Track A: Reporting System Bridging",
        description:
          "For election commission expenditure systems. Expense and report events are translated into anchored on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Expenditure Reporting System", sublabel: "Commission Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Expenditure Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Campaign App Capture",
        description:
          "For campaign agents logging expenses. A signed app records each expense from the field and routes it directly to the ledger for categorization.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Campaign App / Wallet", sublabel: "Agent Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Expense Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Real-Time Expenditure Record", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an expenditure reporting network with real-time anchoring, category classification, and verified submission from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Expense & Limit Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects election compliance integration benchmarks. Wiring reporting systems, building category classification, and shipping verified submission for an average expenditure network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your expense and limit rules into pre-audited WebAssembly binaries and provisions the shared expenditure ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "voter-list-deduplication-across-constituencies",
    icon: Vote,
    eyebrow: "Electoral Roll Engine",
    headline1: "One voter.",
    headline2: "One registration.",
    heroDescription:
      "Deliver a deduplicated voter list where duplicate registrations across constituencies are identified and flagged for removal before elections. Civil Registry, DID and VC Ledger, and Compliance Attestations anchor the core, checking new registrations against verified identity records across all constituencies so the commission reviews duplicates before finalizing the roll.",
    heroCta: "Deploy Roll Deduplication",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a massive cross-constituency data-matching problem into automatic duplicate detection against verified identity.",
    mechanics: [
      { title: "Identity-Bound Registration", description: "Anchor to one identity. The DID and VC Ledger binds each voter registration to a verified identity, so a person maps to a single electoral identity across the roll." },
      { title: "Cross-Constituency Check", description: "Match across the roll. A new registration is checked against verified identities in all constituencies, surfacing a person registered in more than one place." },
      { title: "Duplicate Flagging", description: "Surface for review. Potential duplicates are flagged for the election commission to review before the roll is finalized, rather than discovered after voting." },
      { title: "Attested Removal", description: "Remove with a trail. Compliance Attestations record each deduplication decision, so removals from the roll are accountable and auditable." },
      { title: "Migration Handling", description: "Follow genuine moves. When a voter moves constituencies, the prior registration is retired as the new one is added, keeping one active registration per voter." },
      { title: "Pre-Election Assurance", description: "Clean before the vote. Deduplication runs before elections, giving the commission a roll where duplicate registrations are resolved ahead of polling." },
    ],
    lifecycleTitle: "The Deduplication Lifecycle",
    lifecycleSubtitle:
      "Follow a single registration from identity binding through cross-constituency matching to a flagged and resolved duplicate.",
    lifecycleSteps: [
      {
        label: "Registration Filed",
        description:
          "A voter registration is filed and bound to a verified identity. The contract anchors it as one electoral identity on the roll.",
        icon: IdCard,
        logFilename: "cerulea_voter.log",
        logLines: [
          { text: "[SYS] Anchoring voter registration...", time: "10:14:11", tone: "default" },
          { text: "[CMD] register { voter: \"did:cer:74d\", constituency: \"AC_88\" }", time: "10:14:11", tone: "primary" },
          { text: "[AUTH] Verifying identity credential...", time: "10:14:12", tone: "secondary" },
          { text: "[OK] Registration anchored at block 8812233.", time: "10:14:12", tone: "success" },
        ],
      },
      {
        label: "Cross-Check",
        description:
          "The registration is checked against verified identities across all constituencies to surface any existing registration for the same person.",
        icon: Search,
        logFilename: "cerulea_voter.log",
        logLines: [
          { text: "[SYS] Cross-checking against all constituencies...", time: "10:14:20", tone: "default" },
          { text: "[CMD] crossCheck(did:cer:74d)", time: "10:14:20", tone: "primary" },
          { text: "[SYS] Existing registration found in AC_41.", time: "10:14:21", tone: "error" },
          { text: "[OK] Potential duplicate detected.", time: "10:14:21", tone: "success" },
        ],
      },
      {
        label: "Duplicate Flag",
        description:
          "The potential duplicate is flagged for the election commission to review before the roll is finalized.",
        icon: Zap,
        logFilename: "cerulea_voter.log",
        logLines: [
          { text: "[SYS] Flagging duplicate for review...", time: "13:40:41", tone: "default" },
          { text: "[CMD] flagDuplicate(did:cer:74d, [\"AC_41\", \"AC_88\"])", time: "13:40:41", tone: "primary" },
          { text: "[SYS] Sent to commission review queue.", time: "13:40:42", tone: "default" },
          { text: "[OK] Flagged before roll finalization.", time: "13:40:42", tone: "success" },
        ],
      },
      {
        label: "Attested Resolution",
        description:
          "The commission resolves the duplicate, retiring the stale registration. The decision is attested for an auditable roll.",
        icon: FileCheck,
        logFilename: "cerulea_voter.log",
        logLines: [
          { text: "[SYS] Resolving duplicate registration...", time: "15:22:47", tone: "default" },
          { text: "[CMD] resolveDuplicate(did:cer:74d, keep: \"AC_88\")", time: "15:22:47", tone: "primary" },
          { text: "[AUTH] Attesting removal of AC_41 entry...", time: "15:22:48", tone: "secondary" },
          { text: "[OK] One active registration retained.", time: "15:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes roll deduplication into modular contracts. Each layer binds, checks, flags, and resolves so one voter maps to one active registration.",
    layers: [
      {
        title: "Registration Ledger",
        subtitle: "The Electoral Identity",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Electoral Identity",
          description:
            "The foundational layer. It binds each registration to a verified identity, so a person maps to a single electoral identity that duplicate detection can be run against across the roll.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RegistrationLedger {\n  struct Registration {\n    bytes32 did;\n    bytes32 constituency;\n    bool active;\n  }\n\n  mapping(bytes32 => Registration) public registrations;\n\n  function register(bytes32 did, bytes32 constituency) external onlyERO {\n    registrations[did] = Registration(did, constituency, true);\n  }\n}",
        simAction: "Simulate Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying identity credential...", tone: "default" },
          { text: "Binding to electoral identity...", tone: "default" },
          { text: "Recording constituency...", tone: "default" },
          { text: "Writing registration to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Registration anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Cross-Check Engine",
        subtitle: "The Roll-Wide Match",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Roll-Wide Match",
          description:
            "Solves the matching problem. It checks a new registration against verified identities across every constituency, surfacing a person registered in more than one place from a single query.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function crossCheck(bytes32 did) external view returns (bytes32[] memory duplicates) {\n    duplicates = identityRegistrations[did];\n    // returns all constituencies where this identity is registered\n}",
        simAction: "Simulate Cross-Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Querying all constituencies...", tone: "default" },
          { text: "Matching verified identity...", tone: "default" },
          { text: "Finding registration in AC_41...", tone: "default" },
          { text: "Returning duplicate constituencies...", tone: "default" },
          { text: "[SUCCESS] Potential duplicate detected.", tone: "success" },
        ],
      },
      {
        title: "Flagging Engine",
        subtitle: "The Review Queue",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Review Queue",
          description:
            "Surfaces duplicates for decision. It flags potential duplicate registrations for the election commission to review before the roll is finalized, rather than leaving them to be discovered after voting.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function flagDuplicate(bytes32 did, bytes32[] calldata constituencies) external onlyERO {\n    duplicateFlags[did] = Flag(constituencies, false, block.timestamp);\n    emit DuplicateFlagged(did, constituencies);\n}",
        simAction: "Simulate Duplicate Flag",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting cross-constituency match...", tone: "default" },
          { text: "Flagging AC_41 and AC_88...", tone: "default" },
          { text: "Queuing for commission review...", tone: "default" },
          { text: "Recording before finalization...", tone: "default" },
          { text: "[SUCCESS] Duplicate flagged for review.", tone: "success" },
        ],
      },
      {
        title: "Resolution Notary",
        subtitle: "The Accountable Removal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accountable Removal",
          description:
            "Keeps deduplication auditable. Compliance Attestations record each resolution, retiring the stale registration while keeping one active per voter, so removals from the roll are accountable and reviewable.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveDuplicate(bytes32 did, bytes32 keep) external onlyCommission {\n    for (uint i; i < identityRegistrations[did].length; i++) {\n        bytes32 c = identityRegistrations[did][i];\n        if (c != keep) registrations[keccak256(abi.encode(did, c))].active = false;\n    }\n    emit DuplicateResolved(did, keep);\n}",
        simAction: "Simulate Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Commission reviewing duplicate...", tone: "default" },
          { text: "Retaining AC_88 registration...", tone: "default" },
          { text: "Retiring AC_41 entry...", tone: "default" },
          { text: "Attesting removal decision...", tone: "default" },
          { text: "[SUCCESS] One active registration retained.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Cross-constituency deduplication is a horizontal capability. Here is how different actors put the electoral roll ledger to work.",
    sectors: [
      { icon: Landmark, title: "Election Commissions", description: "Identify duplicate registrations across constituencies before elections, cleaning the roll ahead of polling instead of discovering duplicates after votes are cast.", assetTypes: ["Voter Registrations", "Duplicate Flags", "Resolution Records"] },
      { icon: IdCard, title: "Electoral Registration Officers", description: "Check each new registration against verified identity across the whole roll, catching multiple registrations at entry rather than in a mass reconciliation.", assetTypes: ["Registration Checks", "Cross-Constituency Matches", "Removal Attestations"] },
      { icon: Users, title: "Voters", description: "Hold one active registration bound to their verified identity, with genuine constituency moves handled cleanly rather than leaving stale duplicate entries.", assetTypes: ["Electoral Identities", "Active Registrations", "Migration Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy electoral roll system or checking registrations from an ERO portal, Cerulea routes both into one deduplicated roll ledger.",
    tracks: [
      {
        title: "Track A: Electoral Roll Bridging",
        description:
          "For electoral roll management systems. Registration and resolution events are translated into anchored on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Electoral Roll System", sublabel: "Commission Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Identity Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Deduplicated Roll Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: ERO Portal Check",
        description:
          "For registration officers checking entries. A signed portal cross-checks each registration against the ledger before adding it to the roll.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "ERO Portal / Wallet", sublabel: "Registration Officers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Registration Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Deduplicated Roll Record", icon: Vote, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a roll deduplication network with identity binding, cross-constituency matching, and attested resolution from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Registration & Dedup Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects electoral roll integration benchmarks. Wiring roll systems, building cross-constituency matching, and shipping attested resolution for an average deduplication network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your registration and deduplication rules into pre-audited WebAssembly binaries and provisions the shared roll ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const governmentPublicSectorItems: ExtraCaseItem[] = [
  {
    label: "Government procurement and public tender integrity",
    href: "/solutions/use-case/government-procurement-and-public-tender-integrity",
    description: "Sealed tenders with automated evaluation and cartel detection.",
    icon: Gavel,
    category: "GOVERNMENT",
    tags: ["Procurement", "Anti-Fraud"],
    industry: INDUSTRY,
  },
  {
    label: "Inter-ministry budget allocation and utilization tracking",
    href: "/solutions/use-case/inter-ministry-budget-allocation-and-utilization-tracking",
    description: "Real-time budget utilization across ministries and schemes.",
    icon: PieChart,
    category: "GOVERNMENT",
    tags: ["Budget", "Finance"],
    industry: INDUSTRY,
  },
  {
    label: "Public grievance redressal with SLA compliance tracking",
    href: "/solutions/use-case/public-grievance-redressal-with-sla-compliance-tracking",
    description: "Timestamped complaints measured against resolution deadlines.",
    icon: Handshake,
    category: "GOVERNMENT",
    tags: ["Grievance", "SLA"],
    industry: INDUSTRY,
  },
  {
    label: "RTI (Right to Information) request and response audit trail",
    href: "/solutions/use-case/rti-right-to-information-request-and-response-audit-trail",
    description: "Verifiable RTI timeliness for statutory deadline compliance.",
    icon: FileCheck,
    category: "GOVERNMENT",
    tags: ["RTI", "Transparency"],
    industry: INDUSTRY,
  },
  {
    label: "National skill registry linking training to employment outcomes",
    href: "/solutions/use-case/national-skill-registry-linking-training-to-employment-outcomes",
    description: "Verified credentials linked to real employment outcomes.",
    icon: GraduationCap,
    category: "GOVERNMENT",
    tags: ["Skills", "Employment"],
    industry: INDUSTRY,
  },
  {
    label: "Cross-department data sharing consent for citizen services",
    href: "/solutions/use-case/cross-department-data-sharing-consent-for-citizen-services",
    description: "Citizen-controlled consent for one-time document submission.",
    icon: Lock,
    category: "GOVERNMENT",
    tags: ["Consent", "Data Sharing"],
    industry: INDUSTRY,
  },
  {
    label: "Import/export documentation and customs pre-clearance",
    href: "/solutions/use-case/import-export-documentation-and-customs-pre-clearance",
    description: "Parallel multi-agency pre-clearance before vessel arrival.",
    icon: Truck,
    category: "GOVERNMENT",
    tags: ["Customs", "Trade"],
    industry: INDUSTRY,
  },
  {
    label: "Container scanning and risk assessment data sharing across ports",
    href: "/solutions/use-case/container-scanning-and-risk-assessment-data-sharing-across-ports",
    description: "Portable container risk data that avoids repeat scanning.",
    icon: Boxes,
    category: "GOVERNMENT",
    tags: ["Ports", "Customs"],
    industry: INDUSTRY,
  },
  {
    label: "Special economic zone (SEZ) inventory and duty exemption tracking",
    href: "/solutions/use-case/special-economic-zone-sez-inventory-and-duty-exemption-tracking",
    description: "Per-unit bonded inventory enforcing duty exemption terms.",
    icon: Package,
    category: "GOVERNMENT",
    tags: ["SEZ", "Customs"],
    industry: INDUSTRY,
  },
  {
    label: "Defense supply chain integrity and counterfeit component prevention",
    href: "/solutions/use-case/defense-supply-chain-integrity-and-counterfeit-component-prevention",
    description: "Hardware-attested provenance rejecting counterfeits at goods-in.",
    icon: Shield,
    category: "GOVERNMENT",
    tags: ["Defense", "Supply Chain"],
    industry: INDUSTRY,
  },
  {
    label: "Veteran pension and benefits disbursement tracking",
    href: "/solutions/use-case/veteran-pension-and-benefits-disbursement-tracking",
    description: "Verified service records driving correct pension disbursement.",
    icon: Wallet,
    category: "GOVERNMENT",
    tags: ["Pensions", "Defense"],
    industry: INDUSTRY,
  },
  {
    label: "Military equipment maintenance lifecycle records",
    href: "/solutions/use-case/military-equipment-maintenance-lifecycle-records",
    description: "Access-controlled maintenance history across every depot.",
    icon: Workflow,
    category: "GOVERNMENT",
    tags: ["Defense", "Maintenance"],
    industry: INDUSTRY,
  },
  {
    label: "Border outpost supply chain and inventory verification",
    href: "/solutions/use-case/border-outpost-supply-chain-and-inventory-verification",
    description: "Dispatch-to-receipt matching for remote outpost resupply.",
    icon: Truck,
    category: "GOVERNMENT",
    tags: ["Defense", "Logistics"],
    industry: INDUSTRY,
  },
  {
    label: "Industrial emission permit issuance and compliance monitoring",
    href: "/solutions/use-case/industrial-emission-permit-issuance-and-compliance-monitoring",
    description: "Real-time emissions monitoring with oracle anchoring.",
    icon: Factory,
    category: "GOVERNMENT",
    tags: ["Emissions", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Forest land diversion approval tracking for industrial projects",
    href: "/solutions/use-case/forest-land-diversion-approval-tracking-for-industrial-projects",
    description: "Staged diversion approval with afforestation compliance.",
    icon: Forest,
    category: "GOVERNMENT",
    tags: ["Forestry", "Approvals"],
    industry: INDUSTRY,
  },
  {
    label: "Water pollution discharge permit compliance monitoring",
    href: "/solutions/use-case/water-pollution-discharge-permit-compliance-monitoring",
    description: "Continuous discharge monitoring flagging breaches instantly.",
    icon: Droplet,
    category: "GOVERNMENT",
    tags: ["Pollution", "Monitoring"],
    industry: INDUSTRY,
  },
  {
    label: "Digital passport and travel document verification",
    href: "/solutions/use-case/digital-passport-and-travel-document-verification",
    description: "Passports as verifiable credentials checked in seconds.",
    icon: IdCard,
    category: "GOVERNMENT",
    tags: ["Passports", "Immigration"],
    industry: INDUSTRY,
  },
  {
    label: "Visa application status tracking across embassy and immigration systems",
    href: "/solutions/use-case/visa-application-status-tracking-across-embassy-and-immigration-system",
    description: "One verified timeline across embassy and immigration.",
    icon: Plane,
    category: "GOVERNMENT",
    tags: ["Visa", "Immigration"],
    industry: INDUSTRY,
  },
  {
    label: "Overseas citizen registration and consular service access",
    href: "/solutions/use-case/overseas-citizen-registration-and-consular-service-access",
    description: "Portable consular registration recognized across jurisdictions.",
    icon: Globe,
    category: "GOVERNMENT",
    tags: ["Consular", "Registry"],
    industry: INDUSTRY,
  },
  {
    label: "Evidence chain of custody for criminal investigations",
    href: "/solutions/use-case/evidence-chain-of-custody-for-criminal-investigations",
    description: "Time-stamped, multi-party evidence custody that survives challenge.",
    icon: Fingerprint,
    category: "GOVERNMENT",
    tags: ["Evidence", "Justice"],
    industry: INDUSTRY,
  },
  {
    label: "Missing persons database with cross-jurisdiction alert sharing",
    href: "/solutions/use-case/missing-persons-database-with-cross-jurisdiction-alert-sharing",
    description: "Cross-state alerts matching sightings to active cases.",
    icon: Users,
    category: "GOVERNMENT",
    tags: ["Policing", "Alerts"],
    industry: INDUSTRY,
  },
  {
    label: "Seized asset and property custody tracking for criminal cases",
    href: "/solutions/use-case/seized-asset-and-property-custody-tracking-for-criminal-cases",
    description: "Verifiable custody of seized property through court disposal.",
    icon: Package,
    category: "GOVERNMENT",
    tags: ["Custody", "Justice"],
    industry: INDUSTRY,
  },
  {
    label: "Land registry and property title management",
    href: "/solutions/use-case/land-registry-and-property-title-management",
    description: "Immutable land titles with minutes-long public verification.",
    icon: Home,
    category: "GOVERNMENT",
    tags: ["Land", "Title"],
    industry: INDUSTRY,
  },
  {
    label: "Municipal property tax assessment and payment reconciliation",
    href: "/solutions/use-case/municipal-property-tax-assessment-and-payment-reconciliation",
    description: "Reconciled assessment, bill, and payment per property.",
    icon: Building2,
    category: "GOVERNMENT",
    tags: ["Property Tax", "Municipal"],
    industry: INDUSTRY,
  },
  {
    label: "Birth and death certificate issuance with hospital integration",
    href: "/solutions/use-case/birth-and-death-certificate-issuance-with-hospital-integration",
    description: "Automatic certificates from verified hospital events.",
    icon: ScrollText,
    category: "GOVERNMENT",
    tags: ["Civil Registry", "Certificates"],
    industry: INDUSTRY,
  },
  {
    label: "Local body procurement and contractor payment transparency",
    href: "/solutions/use-case/local-body-procurement-and-contractor-payment-transparency",
    description: "Citizen-visible local tenders and milestone payments.",
    icon: Coins,
    category: "GOVERNMENT",
    tags: ["Procurement", "Municipal"],
    industry: INDUSTRY,
  },
  {
    label: "Water supply connection and billing for municipal utilities",
    href: "/solutions/use-case/water-supply-connection-and-billing-for-municipal-utilities",
    description: "Verified meter billing mapped to the right property.",
    icon: Droplet,
    category: "GOVERNMENT",
    tags: ["Water", "Billing"],
    industry: INDUSTRY,
  },
  {
    label: "Street vendor licensing and vending zone allocation",
    href: "/solutions/use-case/street-vendor-licensing-and-vending-zone-allocation",
    description: "Verifiable vendor licenses tied to allocated zones.",
    icon: Ticket,
    category: "GOVERNMENT",
    tags: ["Licensing", "Vendors"],
    industry: INDUSTRY,
  },
  {
    label: "GST/VAT invoice reconciliation across buyers, sellers, and tax authority",
    href: "/solutions/use-case/gst-vat-invoice-reconciliation-across-buyers-sellers-and-tax-authority",
    description: "Real-time invoice verification blocking fake ITC claims.",
    icon: Scale,
    category: "GOVERNMENT",
    tags: ["GST", "Tax"],
    industry: INDUSTRY,
  },
  {
    label: "Income tax refund processing transparency for taxpayers",
    href: "/solutions/use-case/income-tax-refund-processing-transparency-for-taxpayers",
    description: "Stage-by-stage visibility into refund processing.",
    icon: Coins,
    category: "GOVERNMENT",
    tags: ["Tax", "Refunds"],
    industry: INDUSTRY,
  },
  {
    label: "Cross-state e-way bill verification for goods movement",
    href: "/solutions/use-case/cross-state-e-way-bill-verification-for-goods-movement",
    description: "Instant e-way bill verification blocking reuse and fakes.",
    icon: QrCode,
    category: "GOVERNMENT",
    tags: ["GST", "Logistics"],
    industry: INDUSTRY,
  },
  {
    label: "Professional tax registration and compliance for gig and informal workers",
    href: "/solutions/use-case/professional-tax-registration-and-compliance-for-gig-and-informal-work",
    description: "Consent-driven gig tax from verified platform income.",
    icon: IdCard,
    category: "GOVERNMENT",
    tags: ["Tax", "Gig Economy"],
    industry: INDUSTRY,
  },
  {
    label: "WTO trade dispute evidence and documentation integrity",
    href: "/solutions/use-case/wto-trade-dispute-evidence-and-documentation-integrity",
    description: "Neutral timestamped evidence chain for trade disputes.",
    icon: Gavel,
    category: "GOVERNMENT",
    tags: ["Trade", "Disputes"],
    industry: INDUSTRY,
  },
  {
    label: "Trade agreement tariff schedule verification across member states",
    href: "/solutions/use-case/trade-agreement-tariff-schedule-verification-across-member-states",
    description: "One shared tariff schedule applied consistently everywhere.",
    icon: Globe,
    category: "GOVERNMENT",
    tags: ["Trade", "Tariffs"],
    industry: INDUSTRY,
  },
  {
    label: "Rules of origin certification for preferential trade agreements",
    href: "/solutions/use-case/rules-of-origin-certification-for-preferential-trade-agreements",
    description: "Evidence-based origin certificates for preferential tariffs.",
    icon: ShieldCheck,
    category: "GOVERNMENT",
    tags: ["Trade", "Certification"],
    industry: INDUSTRY,
  },
  {
    label: "Campaign finance transparency and donation tracking",
    href: "/solutions/use-case/campaign-finance-transparency-and-donation-tracking",
    description: "Verified donations with public aggregated disclosure.",
    icon: PieChart,
    category: "GOVERNMENT",
    tags: ["Elections", "Finance"],
    industry: INDUSTRY,
  },
  {
    label: "Election expenditure reporting to election commission",
    href: "/solutions/use-case/election-expenditure-reporting-to-election-commission",
    description: "Real-time expenditure tracked against legal limits.",
    icon: Activity,
    category: "GOVERNMENT",
    tags: ["Elections", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Voter list deduplication across constituencies",
    href: "/solutions/use-case/voter-list-deduplication-across-constituencies",
    description: "Cross-constituency duplicate detection before elections.",
    icon: Vote,
    category: "GOVERNMENT",
    tags: ["Elections", "Voter Roll"],
    industry: INDUSTRY,
  },
]

