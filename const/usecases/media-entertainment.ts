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

const INDUSTRY = "Media & Entertainment"

export const mediaEntertainmentCases: CaseEntry[] = [
  {
    slug: "content-rights-management-and-royalty-distribution",
    icon: Copyright,
    eyebrow: "Content Royalty Settlement Layer",
    headline1: "Split every royalty.",
    headline2: "Settle without dispute.",
    heroDescription:
      "Run one private content rights chain that calculates royalty splits automatically and settles conditionally across every distribution partner. A production house and its broadcasters write to a shared record, so payment rests on a signed licensing term rather than a reconciled spreadsheet.",
    heroCta: "Deploy Royalty Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn contested royalty statements into a single, self-calculating record every licensee shares.",
    mechanics: [
      { title: "Royalty Standard Encoding", description: "Encode each licensing agreement's split terms once. The Royalty Standard module turns percentage waterfalls, minimum guarantees, and territory carve-outs into executable clauses, so every partner computes the same number from the same rules." },
      { title: "Automated Split Calculation", description: "Replace manual reconciliation. As each broadcaster reports usage, the contract calculates the exact royalty owed to the production house and every downstream rights holder without a spreadsheet passing between finance teams." },
      { title: "Conditional Settlement", description: "Release funds only when reporting closes. The Royalty Clearing module holds each cycle's payment until reported figures are anchored, then settles to every party in one atomic run." },
      { title: "Shared Statement Ledger", description: "Give every licensee one version of the truth. Because splits and usage land on a consortium record, a disputed statement is resolved against co-signed data instead of two conflicting reports." },
      { title: "Trade Finance Documents", description: "Anchor the paperwork behind each deal. The Trade Finance Documents module binds signed licensing contracts and invoices to their agreement by digest, making later edits detectable." },
      { title: "Cycle Audit Trail", description: "Expose the full calculation. Any rights holder can trace a payout back to the reported plays, the encoded split, and the block it settled on, turning audits into a query." },
    ],
    lifecycleTitle: "The Royalty Lifecycle",
    lifecycleSubtitle:
      "Follow a single licensing deal from signature through reported usage to conditional multi-party settlement.",
    lifecycleSteps: [
      {
        label: "License Registration",
        description:
          "A production house registers a licensing deal with a broadcaster. The contract anchors the split terms, territory, and reporting cycle as the immutable basis for every future payout.",
        icon: ScrollText,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Initializing Licensing Agreement Manifest...", time: "07:41:12", tone: "default" },
          { text: "[CMD] registerLicense { title: \"SERIES_ORION_S2\", partner: \"BCAST_0x18\", split: \"60/40\" }", time: "07:41:12", tone: "primary" },
          { text: "[AUTH] Sealing Royalty Standard clauses to agreement...", time: "07:41:13", tone: "secondary" },
          { text: "[OK] License LIC_44821 anchored at block 5120887.", time: "07:41:13", tone: "success" },
        ],
      },
      {
        label: "Usage Reporting",
        description:
          "Each broadcaster reports plays and revenue for the cycle. The declaration lands against the license and is co-signed before it counts toward a payout.",
        icon: Activity,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Receiving cycle report for LIC_44821...", time: "11:15:39", tone: "default" },
          { text: "[CMD] reportUsage(LIC_44821, plays: 1840, revenue: 92000)", time: "11:15:40", tone: "primary" },
          { text: "[SYS] Co-signature recorded from broadcaster finance node.", time: "11:15:40", tone: "default" },
          { text: "[OK] Report accepted. Cycle Q3 flagged ready to compute.", time: "11:15:41", tone: "success" },
        ],
      },
      {
        label: "Royalty Calculation",
        description:
          "The contract applies the encoded split to reported revenue, computing the exact amount owed to the production house and each co-owner in one deterministic pass.",
        icon: PieChart,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Executing split waterfall for LIC_44821...", time: "11:16:02", tone: "default" },
          { text: "[CMD] computeSplits(revenue: 92000, rule: RS_60_40)", time: "11:16:02", tone: "primary" },
          { text: "[AUTH] Validating minimum guarantee floor...", time: "11:16:03", tone: "secondary" },
          { text: "[OK] Producer 55200, broadcaster 36800 computed.", time: "11:16:03", tone: "success" },
        ],
      },
      {
        label: "Conditional Settlement",
        description:
          "With reported figures anchored, the Royalty Clearing module releases payment to every rights holder at once, closing the cycle without a chase.",
        icon: Wallet,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Settlement window open for cycle Q3...", time: "11:16:20", tone: "default" },
          { text: "[CMD] settleCycle(LIC_44821, parties: 3)", time: "11:16:20", tone: "primary" },
          { text: "[SYS] Atomic payout to 3 rights-holder wallets...", time: "11:16:21", tone: "default" },
          { text: "[OK] Cycle settled. Statement dispute count: 0.", time: "11:16:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes royalty management into modular contracts. Each layer registers the deal, ingests usage, computes the split, and settles to every party without a single licensee owning the record.",
    layers: [
      {
        title: "Rights Registry",
        subtitle: "The Deal Passport",
        icon: Copyright,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Deal Passport",
          description:
            "The foundational data layer. It mints a unique license identity for each deal and stores the immutable link to split terms, territory, and reporting cadence that every later payout points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RightsRegistry {\n  struct License {\n    address producer;\n    bytes32 splitRule;\n    string territory;\n    uint32 cycleDays;\n    bool active;\n  }\n\n  mapping(bytes32 => License) public licenses;\n\n  function register(bytes32 id, bytes32 splitRule, string calldata territory) external {\n    licenses[id] = License(msg.sender, splitRule, territory, 90, true);\n  }\n}",
        simAction: "Simulate License Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading production house credential...", tone: "default" },
          { text: "Encoding 60/40 split rule to bytecode...", tone: "default" },
          { text: "Locking territory and reporting cadence...", tone: "default" },
          { text: "Writing license identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] License LIC_44821 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Usage Oracle",
        subtitle: "The Reporting Hook",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reporting Hook",
          description:
            "Prevents unilateral statements. Each broadcaster's reported plays and revenue must be co-signed before the contract will use them, turning a cycle report into mutually agreed data rather than one side's claim.",
          platformFunction: "Usage Validation",
        },
        codeSnippet:
          "function reportUsage(bytes32 licId, uint256 plays, uint256 revenue) external {\n    require(isPartner(licId, msg.sender), \"Not licensee\");\n    Report storage r = cycles[licId][currentCycle];\n    r.plays = plays;\n    r.revenue = revenue;\n    r.signed = true;\n    emit UsageReported(licId, plays, revenue);\n}",
        simAction: "Simulate Usage Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Broadcaster submitting Q3 cycle figures...", tone: "default" },
          { text: "Validating licensee membership on deal...", tone: "default" },
          { text: "Recording co-signature on reported revenue...", tone: "default" },
          { text: "Flagging cycle ready for computation...", tone: "default" },
          { text: "[SUCCESS] Usage report accepted and anchored.", tone: "success" },
        ],
      },
      {
        title: "Split Engine",
        subtitle: "The Royalty Calculator",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Royalty Calculator",
          description:
            "The deterministic core. It applies the encoded split waterfall to reported revenue so every rights holder derives the same payout from the same inputs, eliminating the reconciliation gap between finance teams.",
          platformFunction: "Split Computation",
        },
        codeSnippet:
          "function computeSplits(bytes32 licId) public view returns (uint256[] memory) {\n    Report memory r = cycles[licId][currentCycle];\n    uint256[] memory out = new uint256[](holders[licId].length);\n    for (uint256 i = 0; i < out.length; i++) {\n        out[i] = (r.revenue * shareBps[licId][i]) / 10000;\n    }\n    return out;\n}",
        simAction: "Simulate Split Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading reported revenue of 92000...", tone: "default" },
          { text: "Applying encoded 60/40 waterfall...", tone: "default" },
          { text: "Checking minimum guarantee floor...", tone: "default" },
          { text: "Resolving payout for 3 rights holders...", tone: "default" },
          { text: "[SUCCESS] Splits computed deterministically.", tone: "success" },
        ],
      },
      {
        title: "Clearing Vault",
        subtitle: "The Conditional Settler",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Settler",
          description:
            "Holds cycle payment until reported figures are anchored, then settles to every party in a single atomic transaction. No rights holder waits on another's approval once the condition is met.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function settleCycle(bytes32 licId) external {\n    require(cycles[licId][currentCycle].signed, \"Cycle open\");\n    uint256[] memory pay = computeSplits(licId);\n    for (uint256 i = 0; i < pay.length; i++) {\n        _transfer(holders[licId][i], pay[i]);\n    }\n    emit CycleSettled(licId, currentCycle);\n}",
        simAction: "Simulate Cycle Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming Q3 cycle is fully co-signed...", tone: "default" },
          { text: "Computing final payout vector...", tone: "default" },
          { text: "Executing atomic transfer to 3 wallets...", tone: "default" },
          { text: "Emitting settlement receipt to all parties...", tone: "default" },
          { text: "[SUCCESS] Cycle settled with zero disputes.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated royalty settlement is a horizontal capability. Here is how different media actors put the shared rights ledger to work.",
    sectors: [
      { icon: Building2, title: "Production Houses & Studios", description: "License a catalogue to many broadcasters and receive accurate, cycle-close payment from one shared statement, replacing months of chased reconciliation with a signed on-chain record.", assetTypes: ["Content Licenses", "Split Statements", "Cycle Payouts"] },
      { icon: Radio, title: "Broadcasters & Distributors", description: "Report usage once to a record every partner trusts, settling exact royalties automatically and closing each cycle without dueling spreadsheets or manual invoice matching.", assetTypes: ["Usage Reports", "Territory Licenses", "Settlement Runs"] },
      { icon: Landmark, title: "Collecting Societies", description: "Read the consortium ledger to distribute pooled royalties from verified play data, replacing opaque black-box allocation with an auditable, per-work calculation trail.", assetTypes: ["Pooled Royalties", "Member Payouts", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a broadcaster's legacy rights-management system or onboarding an independent distributor through a portal, Cerulea routes both into one shared royalty record.",
    tracks: [
      {
        title: "Track A: Enterprise Rights-System Bridging",
        description:
          "For studios and broadcasters on legacy rights and finance platforms. Existing licensing and usage events are translated into signed on-chain cycle records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Rights / ERP", sublabel: "Studio Finance Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Split Encoding & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Royalty Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Distributor Portal Reporting",
        description:
          "For independent distributors and regional partners. A web portal signs each cycle report from a partner wallet and routes it directly to the clearing ledger for settlement.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Distributor Portal", sublabel: "Partner Reporting App", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Report Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Statement Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-party royalty network with encoded split logic, co-signed usage reporting, and conditional settlement from scratch requires specialised engineers and long partner integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Split & Settlement Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise media-finance integration benchmarks. Wiring each partner's rights and finance system together, coding custom split and clearing logic, and reconciling reporting formats for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your royalty and settlement rules into pre-audited WebAssembly binaries and provisions the shared clearing ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "advertising-slot-booking-and-proof-of-broadcast-verification",
    icon: Radio,
    eyebrow: "Broadcast Proof Verification Layer",
    headline1: "Prove every airing.",
    headline2: "Pay only on broadcast.",
    heroDescription:
      "Anchor a timestamped proof for every booked advertisement, confirming it aired in its scheduled slot before any money moves. Payment sits in escrow and releases automatically the moment broadcast is confirmed, so advertisers stop paying for airings they cannot verify.",
    heroCta: "Deploy Broadcast Proofs",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an unverifiable broadcaster invoice into a cryptographic proof that gates the advertiser's payment.",
    mechanics: [
      { title: "Slot Booking Escrow", description: "Lock funds at booking, not before airing. The Escrow and Conditional Settlement module holds the advertiser's payment against a specific slot, so the broadcaster is guaranteed funds only once the ad actually runs." },
      { title: "Proof-of-Broadcast Notary", description: "Stamp every airing to the ledger. The Provenance Notary module anchors a timestamped, tamper-evident proof of each broadcast, binding the aired spot to its booked slot and creative." },
      { title: "Airtime Oracle Feed", description: "Pull confirmation from monitoring. A broadcast-monitoring oracle streams as-run logs and watermark detections to the contract, converting a claim of airing into verified data." },
      { title: "Payment on Proof", description: "Release funds automatically. Once the anchored proof matches the booked slot, escrow settles to the broadcaster with no manual sign-off and no dispute window." },
      { title: "Compliance Attestations", description: "Prove the ad met its terms. The Compliance Attestations module records that the spot ran at the agreed length, daypart, and channel, giving regulators and clients a verifiable trail." },
      { title: "Discrepancy Evidence", description: "Resolve missed airings from data. If a booked spot never anchors a proof, escrow returns to the advertiser and the gap is recorded as signed evidence rather than a phone-call dispute." },
    ],
    lifecycleTitle: "The Broadcast Proof Lifecycle",
    lifecycleSubtitle:
      "Follow a single advertising slot from booking through its confirmed airing to automatic, proof-gated payment.",
    lifecycleSteps: [
      {
        label: "Slot Booking",
        description:
          "An advertiser books a specific time slot and locks payment in escrow. The contract anchors the channel, daypart, spot length, and creative hash as the airing that must be proven.",
        icon: Ticket,
        logFilename: "cerulea_broadcast_proof.log",
        logLines: [
          { text: "[SYS] Initializing Slot Booking Manifest...", time: "05:30:41", tone: "default" },
          { text: "[CMD] bookSlot { channel: \"NET_7\", daypart: \"PRIME\", len: 30, spot: \"CRV_9f2\" }", time: "05:30:41", tone: "primary" },
          { text: "[AUTH] Locking advertiser payment in escrow...", time: "05:30:42", tone: "secondary" },
          { text: "[OK] Slot SLOT_70211 booked at block 5330991.", time: "05:30:42", tone: "success" },
        ],
      },
      {
        label: "Broadcast Airing",
        description:
          "The broadcaster airs the spot in its scheduled window. Playout systems and monitoring feeds capture the as-run event for anchoring.",
        icon: Radio,
        logFilename: "cerulea_broadcast_proof.log",
        logLines: [
          { text: "[SYS] Monitoring oracle watching NET_7 PRIME...", time: "20:12:03", tone: "default" },
          { text: "[CMD] detectAiring(SLOT_70211, watermark: \"CRV_9f2\")", time: "20:12:33", tone: "primary" },
          { text: "[SYS] Watermark match at 20:12:33, duration 30s.", time: "20:12:34", tone: "default" },
          { text: "[OK] As-run event captured for SLOT_70211.", time: "20:12:34", tone: "success" },
        ],
      },
      {
        label: "Proof Anchoring",
        description:
          "The Provenance Notary anchors the as-run proof against the booked slot, binding the aired creative, timestamp, and channel to a tamper-evident record.",
        icon: FileCheck,
        logFilename: "cerulea_broadcast_proof.log",
        logLines: [
          { text: "[SYS] Anchoring proof-of-broadcast for SLOT_70211...", time: "20:12:40", tone: "default" },
          { text: "[CMD] anchorProof(SLOT_70211, ts: 20122333, hash: 0x7c1)", time: "20:12:40", tone: "primary" },
          { text: "[AUTH] Matching aired creative hash to booking...", time: "20:12:41", tone: "secondary" },
          { text: "[OK] Proof sealed. Slot marked broadcast-verified.", time: "20:12:41", tone: "success" },
        ],
      },
      {
        label: "Escrow Release",
        description:
          "With the proof confirmed against the booking, escrow settles to the broadcaster automatically. A missing proof instead returns funds to the advertiser.",
        icon: Wallet,
        logFilename: "cerulea_broadcast_proof.log",
        logLines: [
          { text: "[SYS] Evaluating settlement condition for SLOT_70211...", time: "20:13:05", tone: "default" },
          { text: "[CMD] releaseOnProof(SLOT_70211)", time: "20:13:05", tone: "primary" },
          { text: "[SYS] Proof present and matched. Condition satisfied.", time: "20:13:06", tone: "default" },
          { text: "[OK] Escrow released to broadcaster. Booking closed.", time: "20:13:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes broadcast verification into modular contracts. Each layer books the slot, captures the airing, anchors the proof, and settles the escrow without the broadcaster grading its own homework.",
    layers: [
      {
        title: "Booking Escrow",
        subtitle: "The Slot Lock",
        icon: Ticket,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Slot Lock",
          description:
            "The foundational data layer. It mints a booking identity for each slot, locks the advertiser's payment, and stores the immutable link to channel, daypart, length, and creative hash that the proof must satisfy.",
          platformFunction: "Identity & Escrow",
        },
        codeSnippet:
          "contract BookingEscrow {\n  struct Slot {\n    address advertiser;\n    bytes32 channel;\n    uint32 daypart;\n    bytes32 creativeHash;\n    uint256 amount;\n    bool aired;\n  }\n\n  mapping(bytes32 => Slot) public slots;\n\n  function book(bytes32 id, bytes32 channel, bytes32 creative) external payable {\n    slots[id] = Slot(msg.sender, channel, 0, creative, msg.value, false);\n  }\n}",
        simAction: "Simulate Slot Booking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading advertiser credential and budget...", tone: "default" },
          { text: "Hashing booked creative CRV_9f2...", tone: "default" },
          { text: "Locking payment into slot escrow...", tone: "default" },
          { text: "Writing slot identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Slot SLOT_70211 booked and funded.", tone: "success" },
        ],
      },
      {
        title: "Airtime Oracle",
        subtitle: "The As-Run Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The As-Run Feed",
          description:
            "Connects broadcast-monitoring providers to the contract. It converts watermark detections and as-run logs into signed airing data, so an airing is confirmed by independent monitoring rather than the broadcaster's word.",
          platformFunction: "Airing Validation",
        },
        codeSnippet:
          "contract AirtimeOracle {\n  function detectAiring(bytes32 slotId, bytes32 watermark) external returns (bool) {\n    (uint256 ts, bytes memory sig) = monitor.getDetection(slotId);\n    require(verifyProvider(sig), \"Untrusted monitor\");\n    require(watermark == slots[slotId].creativeHash, \"Creative mismatch\");\n    return ts > 0;\n  }\n}",
        simAction: "Simulate Airing Detection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Polling broadcast monitor for NET_7...", tone: "default" },
          { text: "Extracting watermark from PRIME window...", tone: "default" },
          { text: "Verifying monitor provider signature...", tone: "default" },
          { text: "Matching watermark to booked creative...", tone: "default" },
          { text: "[SUCCESS] Airing detected and validated.", tone: "success" },
        ],
      },
      {
        title: "Proof Notary",
        subtitle: "The Broadcast Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Broadcast Seal",
          description:
            "Anchors the as-run proof by its cryptographic digest against the booked slot. The recorded proof cannot be altered after the fact, giving both advertiser and broadcaster the same undisputable airing record.",
          platformFunction: "Provenance & Attestation",
        },
        codeSnippet:
          "function anchorProof(bytes32 slotId, uint256 ts, bytes32 proofHash) external onlyOracle {\n    require(!slots[slotId].aired, \"Already proven\");\n    proofs[slotId] = Proof(ts, proofHash, block.number);\n    slots[slotId].aired = true;\n    emit BroadcastProven(slotId, ts, proofHash);\n}",
        simAction: "Simulate Proof Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting as-run event for SLOT_70211...", tone: "default" },
          { text: "Computing digest of airing record...", tone: "default" },
          { text: "Binding proof to booked slot...", tone: "default" },
          { text: "Marking slot as broadcast-verified...", tone: "default" },
          { text: "[SUCCESS] Proof-of-broadcast anchored.", tone: "success" },
        ],
      },
      {
        title: "Settlement Gate",
        subtitle: "The Proof-Gated Payer",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proof-Gated Payer",
          description:
            "Releases escrow only when a matching proof exists. If the slot never airs, the same gate returns funds to the advertiser, making payment for an unaired spot structurally impossible.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function releaseOnProof(bytes32 slotId) external {\n    Slot storage s = slots[slotId];\n    if (s.aired) {\n        _transfer(broadcasterOf[slotId], s.amount);\n        emit Settled(slotId, s.amount);\n    } else if (block.timestamp > deadline[slotId]) {\n        _transfer(s.advertiser, s.amount);\n        emit Refunded(slotId, s.amount);\n    }\n}",
        simAction: "Simulate Escrow Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking proof presence for SLOT_70211...", tone: "default" },
          { text: "Proof matched to booking window...", tone: "default" },
          { text: "Releasing escrow to broadcaster wallet...", tone: "default" },
          { text: "Emitting settlement receipt...", tone: "default" },
          { text: "[SUCCESS] Payment released on confirmed proof.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Proof-gated advertising is a horizontal capability. Here is how different actors in the airtime market put verified broadcast to work.",
    sectors: [
      { icon: Boxes, title: "Advertisers & Media Agencies", description: "Buy airtime with the certainty that payment moves only against a proven airing, turning post-campaign verification from a trust exercise into an on-chain query of every booked spot.", assetTypes: ["Slot Bookings", "As-Run Proofs", "Escrow Balances"] },
      { icon: Radio, title: "Broadcasters & Networks", description: "Anchor as-run proof for every spot and get paid the instant airing is confirmed, ending payment delays and reducing make-good disputes from advertisers who doubt delivery.", assetTypes: ["Airtime Inventory", "Broadcast Proofs", "Settlement Runs"] },
      { icon: Search, title: "Audit & Verification Bodies", description: "Read anchored broadcast proofs directly to certify campaign delivery and compliance, replacing sampled spot-checks with a complete, tamper-evident airing record.", assetTypes: ["Delivery Audits", "Compliance Attestations", "As-Run Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a network's playout and traffic systems or wiring an independent monitoring provider into the feed, Cerulea routes both into one proof-gated record.",
    tracks: [
      {
        title: "Track A: Broadcaster Traffic-System Bridging",
        description:
          "For networks on legacy traffic and playout platforms. Booked and as-run events are translated into signed on-chain slot proofs through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Traffic / Playout System", sublabel: "Network Scheduling", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Proof Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Proof Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Independent Monitor Feed",
        description:
          "For third-party broadcast-monitoring providers. A signed oracle client streams watermark detections directly to the ledger, feeding the proof-gated settlement layer.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Monitoring Provider", sublabel: "Watermark & As-Run Capture", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Proof Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Broadcast Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a proof-gated airtime network with escrow, monitoring oracles, and tamper-evident as-run anchoring from scratch requires specialised engineers and long broadcaster integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Booking & Proof Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects broadcast-technology integration benchmarks. Connecting traffic and playout systems, wiring monitoring providers into escrow logic, and building tamper-evident as-run anchoring for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your booking and proof rules into pre-audited WebAssembly binaries and provisions the escrow and notary layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "syndication-rights-tracking-across-regional-channels",
    icon: Globe,
    eyebrow: "Syndication Rights Registry Layer",
    headline1: "Map every territory.",
    headline2: "Never air past expiry.",
    heroDescription:
      "Keep one shared registry of which regional broadcaster holds rights to which show, for which territory, and until when. Because every licensing agreement lives on the same record, disputes about unauthorized broadcasts after expiry simply do not arise.",
    heroCta: "Deploy Syndication Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manual spreadsheet of overlapping territory licenses into one enforceable, shared rights registry.",
    mechanics: [
      { title: "Territory Rights Registry", description: "Record every grant in one place. Each regional license binds a show to a broadcaster, a territory, and a validity window, so who can air what, where, and until when is a single query instead of a spreadsheet hunt." },
      { title: "Provenance Notary", description: "Anchor each agreement at signing. The Provenance Notary module seals the signed licensing contract by digest, so the terms a broadcaster relies on cannot be quietly rewritten later." },
      { title: "Expiry Enforcement", description: "Make expiry automatic. The registry marks a right as lapsed the moment its window closes, and any airing check against an expired grant fails on the spot." },
      { title: "Overlap Detection", description: "Catch conflicting grants before they ship. When a new license would double-assign a territory and window already held, the contract flags the collision instead of silently overwriting it." },
      { title: "Compliance Attestations", description: "Give each broadcaster a portable proof. The Compliance Attestations module issues a verifiable statement of exactly which rights a channel holds, usable in carriage and regulatory filings." },
      { title: "Expiry Alerting", description: "Warn before a right lapses. The registry emits renewal alerts ahead of each window closing, so a channel renews or stops airing rather than drifting into an unauthorized broadcast." },
    ],
    lifecycleTitle: "The Syndication Lifecycle",
    lifecycleSubtitle:
      "Follow a single show's regional right from its grant through an airing check to automatic expiry enforcement.",
    lifecycleSteps: [
      {
        label: "Rights Grant",
        description:
          "A syndicator grants a regional broadcaster the right to air a show. The contract anchors the show, channel, territory, and validity window as the definitive terms.",
        icon: Handshake,
        logFilename: "cerulea_syndication.log",
        logLines: [
          { text: "[SYS] Initializing Regional Rights Manifest...", time: "09:11:07", tone: "default" },
          { text: "[CMD] grantRight { show: \"DRAMA_KAVERI\", channel: \"SOUTH_TV\", terr: \"IN_TN\" }", time: "09:11:07", tone: "primary" },
          { text: "[AUTH] Sealing licensing contract via Provenance Notary...", time: "09:11:08", tone: "secondary" },
          { text: "[OK] Right RGT_31204 anchored, expiry 2027-06-30.", time: "09:11:08", tone: "success" },
        ],
      },
      {
        label: "Overlap Check",
        description:
          "Before the grant finalizes, the registry checks whether the same territory and window is already assigned, preventing a double-licensed conflict.",
        icon: Search,
        logFilename: "cerulea_syndication.log",
        logLines: [
          { text: "[SYS] Scanning registry for territory collisions...", time: "09:11:09", tone: "default" },
          { text: "[CMD] checkOverlap(show: \"DRAMA_KAVERI\", terr: \"IN_TN\")", time: "09:11:09", tone: "primary" },
          { text: "[SYS] No active grant found for territory window.", time: "09:11:10", tone: "default" },
          { text: "[OK] No conflict. Grant cleared to activate.", time: "09:11:10", tone: "success" },
        ],
      },
      {
        label: "Airing Verification",
        description:
          "When a channel schedules the show, its playout system checks the registry to confirm the right is live for that territory and date before broadcast.",
        icon: FileCheck,
        logFilename: "cerulea_syndication.log",
        logLines: [
          { text: "[SYS] Airing check requested by SOUTH_TV...", time: "18:44:22", tone: "default" },
          { text: "[CMD] verifyRight(RGT_31204, date: 2026-09-19)", time: "18:44:22", tone: "primary" },
          { text: "[AUTH] Confirming territory and validity window...", time: "18:44:23", tone: "secondary" },
          { text: "[OK] Right active. Broadcast authorized.", time: "18:44:23", tone: "success" },
        ],
      },
      {
        label: "Expiry Enforcement",
        description:
          "As the validity window closes, the registry lapses the right and rejects any further airing check, closing the door on post-expiry broadcasts.",
        icon: Lock,
        logFilename: "cerulea_syndication.log",
        logLines: [
          { text: "[SYS] Validity window closing for RGT_31204...", time: "00:00:01", tone: "default" },
          { text: "[CMD] enforceExpiry(RGT_31204)", time: "00:00:01", tone: "primary" },
          { text: "[SYS] Right marked lapsed. Alerts dispatched to channel.", time: "00:00:02", tone: "muted" },
          { text: "[OK] Post-expiry airing checks now rejected.", time: "00:00:02", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes syndication tracking into modular contracts. Each layer records the grant, maps the territory, enforces expiry, and attests holdings without any distributor keeping a private, conflicting copy.",
    layers: [
      {
        title: "Grant Registry",
        subtitle: "The License Passport",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The License Passport",
          description:
            "The foundational data layer. It mints a right identity for each grant and stores the immutable link to show, channel, territory, and validity window that every airing check reads.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract GrantRegistry {\n  struct Right {\n    bytes32 show;\n    address channel;\n    bytes32 territory;\n    uint256 start;\n    uint256 expiry;\n    bool active;\n  }\n\n  mapping(bytes32 => Right) public rights;\n\n  function grant(bytes32 id, bytes32 show, bytes32 terr, uint256 expiry) external {\n    rights[id] = Right(show, msg.sender, terr, block.timestamp, expiry, true);\n  }\n}",
        simAction: "Simulate Rights Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading syndicator credential...", tone: "default" },
          { text: "Binding show to territory IN_TN...", tone: "default" },
          { text: "Setting validity window to 2027-06-30...", tone: "default" },
          { text: "Writing right identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Right RGT_31204 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Overlap Guard",
        subtitle: "The Conflict Detector",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conflict Detector",
          description:
            "Blocks double-licensing. Before a grant activates, it scans existing rights for the same show, territory, and overlapping window, turning a silent conflict into an explicit rejection.",
          platformFunction: "Conflict Validation",
        },
        codeSnippet:
          "function checkOverlap(bytes32 show, bytes32 terr, uint256 start, uint256 end) public view returns (bool) {\n    bytes32[] memory ids = byTerritory[show][terr];\n    for (uint256 i = 0; i < ids.length; i++) {\n        Right memory r = rights[ids[i]];\n        if (r.active && start < r.expiry && end > r.start) return false;\n    }\n    return true;\n}",
        simAction: "Simulate Overlap Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading active rights for DRAMA_KAVERI...", tone: "default" },
          { text: "Comparing territory IN_TN windows...", tone: "default" },
          { text: "Testing window intersection...", tone: "default" },
          { text: "No overlapping grant detected...", tone: "default" },
          { text: "[SUCCESS] Territory clear, grant permitted.", tone: "success" },
        ],
      },
      {
        title: "Expiry Engine",
        subtitle: "The Validity Clock",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Validity Clock",
          description:
            "Enforces the calendar. It lapses a right the moment its window closes and rejects any airing check against it, making a post-expiry broadcast fail at the protocol level.",
          platformFunction: "Expiry Enforcement",
        },
        codeSnippet:
          "function verifyRight(bytes32 id, uint256 airDate) external view returns (bool) {\n    Right memory r = rights[id];\n    require(r.active, \"Right inactive\");\n    require(airDate >= r.start && airDate <= r.expiry, \"Outside window\");\n    return true;\n}",
        simAction: "Simulate Expiry Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading validity window for RGT_31204...", tone: "default" },
          { text: "Comparing air date to expiry...", tone: "default" },
          { text: "Air date beyond window boundary...", tone: "default" },
          { text: "Rejecting broadcast authorization...", tone: "default" },
          { text: "[SUCCESS] Post-expiry airing blocked on-chain.", tone: "success" },
        ],
      },
      {
        title: "Holdings Attester",
        subtitle: "The Rights Certificate",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rights Certificate",
          description:
            "Issues a portable proof of exactly which rights a channel holds. Carriage partners and regulators verify holdings against the registry instead of trusting a channel's own paperwork.",
          platformFunction: "Compliance Attestation",
        },
        codeSnippet:
          "function attestHoldings(address channel) external view returns (bytes32[] memory) {\n    bytes32[] memory held = channelRights[channel];\n    bytes32[] memory live = filterActive(held);\n    return live;\n}",
        simAction: "Simulate Holdings Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Enumerating rights held by SOUTH_TV...", tone: "default" },
          { text: "Filtering to active windows only...", tone: "default" },
          { text: "Assembling verifiable holdings list...", tone: "default" },
          { text: "Sealing attestation for filing...", tone: "default" },
          { text: "[SUCCESS] Holdings attestation issued.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared rights tracking is a horizontal capability. Here is how different actors in the syndication chain put the registry to work.",
    sectors: [
      { icon: Globe, title: "Syndicators & Distributors", description: "License a single title across dozens of territories from one registry, seeing every grant, window, and conflict at a glance instead of maintaining a fragile master spreadsheet.", assetTypes: ["Territory Grants", "Licensing Windows", "Renewal Schedules"] },
      { icon: Radio, title: "Regional Broadcasters", description: "Confirm in real time that a scheduled show is cleared to air in a territory and date, and hold a portable proof of holdings for carriage and regulatory filings.", assetTypes: ["Airing Rights", "Holdings Proofs", "Renewal Alerts"] },
      { icon: Gavel, title: "Rights Auditors & Regulators", description: "Query the registry to confirm no channel is airing a title past expiry or outside its territory, replacing after-the-fact investigations with a live compliance view.", assetTypes: ["Compliance Records", "Expiry Audits", "Territory Maps"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a distributor's rights-management database or onboarding a regional channel through a portal, Cerulea routes both into one shared syndication registry.",
    tracks: [
      {
        title: "Track A: Distributor Rights-System Bridging",
        description:
          "For syndicators on legacy rights-management platforms. Existing grants and renewals are translated into signed on-chain rights records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Rights-Management DB", sublabel: "Distributor Catalogue", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Grant Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Rights Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Regional Channel Portal",
        description:
          "For regional broadcasters checking clearance. A web portal signs each airing check from a channel wallet and reads the registry directly before scheduling a broadcast.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Channel Portal", sublabel: "Scheduling & Clearance App", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Rights Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Territory Registry", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared syndication registry with territory mapping, overlap detection, and automatic expiry enforcement from scratch requires specialised engineers and long distributor integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Territory & Expiry Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects rights-management integration benchmarks. Consolidating each distributor's territory data, coding overlap and expiry logic, and building a shared clearance view for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your territory and expiry rules into pre-audited WebAssembly binaries and provisions the shared rights registry instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "viewership-data-sharing-for-ad-rate-negotiation",
    icon: Activity,
    eyebrow: "Viewership Truth Feed Layer",
    headline1: "Agree on the numbers.",
    headline2: "Negotiate from one feed.",
    heroDescription:
      "Stand up a shared, tamper-proof viewership feed that broadcasters and advertisers both trust when setting ad rates. Each side independently checks the same verified numbers, removing the back-and-forth over whose data is correct before a rate is agreed.",
    heroCta: "Deploy Viewership Feeds",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn two conflicting audience datasets into one verified feed both sides negotiate against.",
    mechanics: [
      { title: "Oracle Viewership Feed", description: "Pull measurement onto one record. The Oracle Feeds module streams panel and return-path viewership data to the ledger, so broadcaster and advertiser read the same figures rather than separate vendor reports." },
      { title: "Provenance Notary", description: "Anchor each measurement snapshot. The Provenance Notary module seals every published viewership figure by digest and timestamp, making later quiet revisions detectable." },
      { title: "Tamper-Proof History", description: "Preserve the full series. Because each snapshot is immutable once anchored, neither side can retroactively reshape historical ratings to strengthen a negotiating position." },
      { title: "Independent Verification", description: "Let each party check for itself. Advertiser and broadcaster both query the feed directly and confirm a figure against its anchored source without asking the other side to share a spreadsheet." },
      { title: "Audit Logs", description: "Record every read and dispute. The Audit Logs module keeps a signed trail of which figures were used in which negotiation, giving both parties and any regulator a defensible record." },
      { title: "Rate-Card Binding", description: "Tie rates to verified data. An agreed ad rate references the exact anchored viewership snapshot it was priced on, so a later dispute is resolved against the numbers both sides signed." },
    ],
    lifecycleTitle: "The Viewership Data Lifecycle",
    lifecycleSubtitle:
      "Follow an audience measurement from ingestion through anchoring to its use as the shared basis for an ad-rate agreement.",
    lifecycleSteps: [
      {
        label: "Measurement Ingestion",
        description:
          "Panel and return-path measurement providers push viewership figures for a program. The oracle validates the source before the data reaches the shared feed.",
        icon: Radio,
        logFilename: "cerulea_viewership_feed.log",
        logLines: [
          { text: "[SYS] Polling audience measurement oracle...", time: "02:05:18", tone: "default" },
          { text: "[CMD] ingestRatings { program: \"NEWS_PRIME\", avgMin: 812000 }", time: "02:05:18", tone: "primary" },
          { text: "[AUTH] Verifying measurement provider signature...", time: "02:05:19", tone: "secondary" },
          { text: "[OK] Ratings batch RB_5521 accepted for anchoring.", time: "02:05:19", tone: "success" },
        ],
      },
      {
        label: "Snapshot Anchoring",
        description:
          "The Provenance Notary anchors the viewership snapshot by digest and timestamp, freezing an immutable record both sides can later cite.",
        icon: FileCheck,
        logFilename: "cerulea_viewership_feed.log",
        logLines: [
          { text: "[SYS] Anchoring viewership snapshot RB_5521...", time: "02:05:25", tone: "default" },
          { text: "[CMD] anchorSnapshot(RB_5521, hash: 0x4ae, ts: 1758240325)", time: "02:05:25", tone: "primary" },
          { text: "[SYS] Snapshot sealed. Immutable from this block.", time: "02:05:26", tone: "default" },
          { text: "[OK] Feed updated at block 5522118.", time: "02:05:26", tone: "success" },
        ],
      },
      {
        label: "Independent Read",
        description:
          "Advertiser and broadcaster each query the feed for the program's verified numbers, confirming the figure against its anchored source without exchanging files.",
        icon: Search,
        logFilename: "cerulea_viewership_feed.log",
        logLines: [
          { text: "[SYS] Advertiser querying verified feed...", time: "10:31:44", tone: "default" },
          { text: "[CMD] readSnapshot(program: \"NEWS_PRIME\")", time: "10:31:44", tone: "primary" },
          { text: "[AUTH] Confirming snapshot digest matches source...", time: "10:31:45", tone: "secondary" },
          { text: "[OK] Verified 812000 avg-min returned to both parties.", time: "10:31:45", tone: "success" },
        ],
      },
      {
        label: "Rate Agreement",
        description:
          "The agreed ad rate is bound to the exact anchored snapshot it was priced on, recorded in the audit log as the shared basis for the deal.",
        icon: Handshake,
        logFilename: "cerulea_viewership_feed.log",
        logLines: [
          { text: "[SYS] Binding rate card to snapshot RB_5521...", time: "11:02:09", tone: "default" },
          { text: "[CMD] agreeRate(program: \"NEWS_PRIME\", cpm: 14.5, snap: RB_5521)", time: "11:02:09", tone: "primary" },
          { text: "[SYS] Writing agreement to audit log...", time: "11:02:10", tone: "default" },
          { text: "[OK] Rate agreed on shared verified data.", time: "11:02:10", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes viewership sharing into modular contracts. Each layer ingests measurement, anchors the snapshot, exposes it for independent reads, and logs its use in a negotiation.",
    layers: [
      {
        title: "Feed Oracle",
        subtitle: "The Measurement Intake",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Measurement Intake",
          description:
            "The ingestion layer. It admits viewership figures only from signed measurement providers, so the shared feed is built from verified sources rather than either negotiating party's internal numbers.",
          platformFunction: "Data Validation",
        },
        codeSnippet:
          "contract FeedOracle {\n  function ingestRatings(bytes32 program, uint256 avgMin, bytes memory sig) external {\n    require(verifyProvider(sig), \"Untrusted source\");\n    pending[program] = Ratings(avgMin, block.timestamp);\n    emit RatingsIngested(program, avgMin);\n  }\n}",
        simAction: "Simulate Measurement Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving ratings batch for NEWS_PRIME...", tone: "default" },
          { text: "Verifying measurement provider signature...", tone: "default" },
          { text: "Staging figure for snapshot anchoring...", tone: "default" },
          { text: "Emitting ingestion event...", tone: "default" },
          { text: "[SUCCESS] Verified ratings admitted to feed.", tone: "success" },
        ],
      },
      {
        title: "Snapshot Notary",
        subtitle: "The Immutable Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Immutable Seal",
          description:
            "Freezes each viewership figure. It anchors the snapshot by digest and timestamp so no party can silently revise history, giving both sides a stable series to negotiate against.",
          platformFunction: "Provenance & Notary",
        },
        codeSnippet:
          "function anchorSnapshot(bytes32 program, bytes32 hash) external onlyOracle {\n    snapshots[program].push(Snapshot(hash, block.timestamp, block.number));\n    emit SnapshotAnchored(program, hash, block.number);\n}",
        simAction: "Simulate Snapshot Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing digest of ratings batch...", tone: "default" },
          { text: "Appending snapshot to program series...", tone: "default" },
          { text: "Timestamping to current block...", tone: "default" },
          { text: "Sealing figure as immutable...", tone: "default" },
          { text: "[SUCCESS] Viewership snapshot anchored.", tone: "success" },
        ],
      },
      {
        title: "Verifier Gateway",
        subtitle: "The Two-Sided Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Sided Window",
          description:
            "A read gateway that lets advertiser and broadcaster independently resolve a program's verified numbers and confirm each figure against its anchored source, without sharing spreadsheets.",
          platformFunction: "Independent Verification",
        },
        codeSnippet:
          "function readSnapshot(bytes32 program) external view returns (uint256, bytes32, uint256) {\n    Snapshot memory s = latest(program);\n    return (ratingsOf[s.hash], s.hash, s.timestamp);\n}",
        simAction: "Simulate Independent Read",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Advertiser requesting NEWS_PRIME figures...", tone: "default" },
          { text: "Resolving latest anchored snapshot...", tone: "default" },
          { text: "Confirming digest matches stored source...", tone: "default" },
          { text: "Returning identical figure to both parties...", tone: "default" },
          { text: "[SUCCESS] Verified viewership returned.", tone: "success" },
        ],
      },
      {
        title: "Negotiation Log",
        subtitle: "The Deal Record",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Deal Record",
          description:
            "Binds an agreed rate to the exact snapshot it was priced on and logs the read history, so a later dispute over pricing resolves against the numbers both parties signed.",
          platformFunction: "Audit Logging",
        },
        codeSnippet:
          "function agreeRate(bytes32 program, uint256 cpm, bytes32 snapHash) external {\n    require(snapshotExists(program, snapHash), \"Unknown snapshot\");\n    agreements.push(Deal(msg.sender, program, cpm, snapHash, block.timestamp));\n    emit RateAgreed(program, cpm, snapHash);\n}",
        simAction: "Simulate Rate Agreement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Binding agreed CPM to snapshot RB_5521...", tone: "default" },
          { text: "Confirming snapshot is anchored...", tone: "default" },
          { text: "Writing deal to negotiation log...", tone: "default" },
          { text: "Emitting rate-agreed event...", tone: "default" },
          { text: "[SUCCESS] Rate recorded against shared data.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A shared viewership feed is a horizontal capability. Here is how different actors in the ad market put verified audience data to work.",
    sectors: [
      { icon: Radio, title: "Broadcasters & Networks", description: "Publish audience figures to a record advertisers already trust, shortening rate negotiations and defending premium pricing with data both sides can independently verify.", assetTypes: ["Ratings Snapshots", "Rate Cards", "Audience Series"] },
      { icon: Boxes, title: "Advertisers & Media Buyers", description: "Price airtime against numbers confirmed at the source rather than a broadcaster's report, entering negotiations from the same verified feed as the seller.", assetTypes: ["Verified Ratings", "Negotiation Records", "Spend Plans"] },
      { icon: PieChart, title: "Measurement & Analytics Firms", description: "Deliver panel and return-path data to a tamper-proof feed, turning their measurement into a citable, auditable input for every deal it informs.", assetTypes: ["Panel Data", "Return-Path Feeds", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a measurement firm's data platform or wiring a broadcaster's sales system into the feed, Cerulea routes both into one shared viewership record.",
    tracks: [
      {
        title: "Track A: Measurement Provider Bridging",
        description:
          "For panel and return-path measurement firms. Existing ratings exports are translated into signed on-chain viewership snapshots through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Measurement Platform", sublabel: "Panel & Return-Path Data", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Snapshot Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Viewership Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Sales-Desk Verification",
        description:
          "For broadcaster and agency sales desks. A web client signs each feed read from a desk wallet and binds agreed rates to the exact snapshot they were priced on.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Sales Desk App", sublabel: "Buyer & Seller Terminals", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Feed Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Ratings Record", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared viewership feed with signed measurement intake, immutable snapshots, and negotiation-grade audit logs from scratch requires specialised engineers and long data-partner integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Feed & Verification Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects audience-measurement integration benchmarks. Reconciling each provider's data formats, coding immutable snapshot logic, and building a trusted two-sided verification layer for an average market takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your feed and verification rules into pre-audited WebAssembly binaries and provisions the shared viewership ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "journalism-provenance-and-fake-news-attribution-trail",
    icon: ShieldCheck,
    eyebrow: "Journalism Provenance Registry",
    headline1: "Verify every byline.",
    headline2: "Expose every alteration.",
    heroDescription:
      "Publish a public-chain journalism registry that anchors journalist credentials and detects article-level tampering. Any reader or fact-checker can independently verify the origin and integrity of an article in under three seconds.",
    heroCta: "Deploy Provenance Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an unverifiable article into a signed, tamper-evident publication anyone can check against its source.",
    mechanics: [
      { title: "Credential Anchoring", description: "Bind each byline to a real journalist. The DID and VC Ledger module anchors verifiable credentials for accredited reporters, so a byline maps to a cryptographic identity rather than an unverified name." },
      { title: "Article Provenance Notary", description: "Seal each publication at source. The Provenance Notary module anchors the article's content hash at the moment it goes live, fixing an immutable reference for later integrity checks." },
      { title: "Tamper Detection", description: "Catch silent edits. Any reader hashing the current article and comparing it to the anchored record instantly sees whether the text was altered after publication." },
      { title: "On-Chain Data Models", description: "Structure the record consistently. The On-chain Data Models module standardizes how outlet, author, timestamp, and version are stored, so verification works uniformly across the consortium." },
      { title: "Public Verification", description: "Give readers a direct check. A public gateway resolves an article to its verified origin and integrity status with no account, returning a result in seconds." },
      { title: "Version History", description: "Track legitimate corrections. Each authorized update anchors a new version, so a genuine correction is distinguishable from covert tampering by its signed history." },
    ],
    lifecycleTitle: "The Provenance Lifecycle",
    lifecycleSubtitle:
      "Follow an article from a credentialed journalist through publication anchoring to independent reader verification.",
    lifecycleSteps: [
      {
        label: "Credential Issuance",
        description:
          "A news consortium issues a verifiable credential to an accredited journalist. The contract anchors the credential so future bylines can be traced to a verified identity.",
        icon: IdCard,
        logFilename: "cerulea_journalism.log",
        logLines: [
          { text: "[SYS] Initializing Journalist Credential Manifest...", time: "08:02:14", tone: "default" },
          { text: "[CMD] issueVC { author: \"R_MEHTA\", outlet: \"HERALD\", role: \"CORRESPONDENT\" }", time: "08:02:14", tone: "primary" },
          { text: "[AUTH] Anchoring DID and verifiable credential...", time: "08:02:15", tone: "secondary" },
          { text: "[OK] Credential VC_2290 anchored on public chain.", time: "08:02:15", tone: "success" },
        ],
      },
      {
        label: "Article Publication",
        description:
          "The journalist publishes an article. The Provenance Notary anchors its content hash and links it to the author's credential as the genuine, original version.",
        icon: ScrollText,
        logFilename: "cerulea_journalism.log",
        logLines: [
          { text: "[SYS] Sealing publication for VC_2290...", time: "09:47:33", tone: "default" },
          { text: "[CMD] publishArticle(hash: 0x9d4, author: VC_2290)", time: "09:47:33", tone: "primary" },
          { text: "[SYS] Binding content hash to credential...", time: "09:47:34", tone: "default" },
          { text: "[OK] Article ART_7781 anchored, version 1.", time: "09:47:34", tone: "success" },
        ],
      },
      {
        label: "Reader Verification",
        description:
          "A reader or fact-checker hashes the article they are viewing and queries the registry, confirming origin and integrity against the anchored record.",
        icon: Search,
        logFilename: "cerulea_journalism.log",
        logLines: [
          { text: "[SYS] Public verification request for ART_7781...", time: "14:20:58", tone: "default" },
          { text: "[CMD] verifyArticle(currentHash: 0x9d4)", time: "14:20:58", tone: "primary" },
          { text: "[AUTH] Comparing to anchored hash and credential...", time: "14:20:58", tone: "secondary" },
          { text: "[OK] Genuine, unaltered, authored by VC_2290.", time: "14:20:59", tone: "success" },
        ],
      },
      {
        label: "Tamper Attribution",
        description:
          "If a copy circulates with altered text, its hash fails to match the anchored record, and the registry attributes the discrepancy to a non-genuine version.",
        icon: Shield,
        logFilename: "cerulea_journalism.log",
        logLines: [
          { text: "[SYS] Verification request for suspect copy...", time: "16:05:12", tone: "default" },
          { text: "[CMD] verifyArticle(currentHash: 0x1f7)", time: "16:05:12", tone: "primary" },
          { text: "[SYS] Hash mismatch against ART_7781 version 1.", time: "16:05:13", tone: "error" },
          { text: "[OK] Flagged altered. Genuine source returned to reader.", time: "16:05:13", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes journalism provenance into modular contracts. Each layer anchors the credential, seals the publication, exposes public verification, and tracks legitimate versions on a public chain.",
    layers: [
      {
        title: "Credential Ledger",
        subtitle: "The Byline Identity",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Byline Identity",
          description:
            "The identity layer. It anchors verifiable credentials for accredited journalists and links each to a decentralized identifier, so a byline resolves to a real, verified reporter rather than an unchecked name.",
          platformFunction: "Identity & Credentials",
        },
        codeSnippet:
          "contract CredentialLedger {\n  struct Credential {\n    bytes32 did;\n    address outlet;\n    string role;\n    bool valid;\n  }\n\n  mapping(bytes32 => Credential) public creds;\n\n  function issue(bytes32 id, bytes32 did, string calldata role) external onlyOutlet {\n    creds[id] = Credential(did, msg.sender, role, true);\n  }\n}",
        simAction: "Simulate Credential Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading outlet accreditation for HERALD...", tone: "default" },
          { text: "Binding DID to journalist R_MEHTA...", tone: "default" },
          { text: "Recording verifiable credential...", tone: "default" },
          { text: "Publishing credential to public chain...", tone: "default" },
          { text: "[SUCCESS] Credential VC_2290 anchored.", tone: "success" },
        ],
      },
      {
        title: "Publication Notary",
        subtitle: "The Content Seal",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Content Seal",
          description:
            "Anchors an article's content hash at publication and binds it to the author's credential. The sealed hash becomes the single reference against which any later copy is checked.",
          platformFunction: "Provenance & Notary",
        },
        codeSnippet:
          "function publishArticle(bytes32 contentHash, bytes32 credId) external {\n    require(creds[credId].valid, \"Invalid credential\");\n    bytes32 id = keccak256(abi.encode(contentHash, credId));\n    articles[id] = Article(contentHash, credId, 1, block.timestamp);\n    emit Published(id, contentHash, credId);\n}",
        simAction: "Simulate Article Publication",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing article content...", tone: "default" },
          { text: "Confirming author credential is valid...", tone: "default" },
          { text: "Binding content hash to credential...", tone: "default" },
          { text: "Anchoring publication as version 1...", tone: "default" },
          { text: "[SUCCESS] Article ART_7781 sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Integrity Verifier",
        subtitle: "The Public Check",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Public Check",
          description:
            "A read-only gateway that compares a submitted article hash to the anchored record. It returns origin, author, and integrity status in seconds with no account, letting anyone verify a story.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyArticle(bytes32 id, bytes32 currentHash) external view returns (bool genuine, bytes32 author) {\n    Article memory a = articles[id];\n    genuine = (a.contentHash == currentHash);\n    author = a.credId;\n}",
        simAction: "Simulate Reader Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reader submits current article hash...", tone: "default" },
          { text: "Loading anchored record for ART_7781...", tone: "default" },
          { text: "Comparing hashes for integrity...", tone: "default" },
          { text: "Resolving verified author credential...", tone: "default" },
          { text: "[SUCCESS] Genuine, unaltered article confirmed.", tone: "success" },
        ],
      },
      {
        title: "Version Tracker",
        subtitle: "The Correction Log",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Correction Log",
          description:
            "Anchors each authorized update as a new signed version. It distinguishes a legitimate correction from covert tampering, preserving a transparent history of how a story changed.",
          platformFunction: "Version Provenance",
        },
        codeSnippet:
          "function reviseArticle(bytes32 id, bytes32 newHash) external {\n    Article storage a = articles[id];\n    require(msg.sender == outletOf[a.credId], \"Not publisher\");\n    a.version += 1;\n    a.contentHash = newHash;\n    emit Revised(id, newHash, a.version);\n}",
        simAction: "Simulate Version Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Publisher submitting authorized correction...", tone: "default" },
          { text: "Confirming outlet authority...", tone: "default" },
          { text: "Incrementing article version...", tone: "default" },
          { text: "Anchoring new content hash...", tone: "default" },
          { text: "[SUCCESS] Correction recorded as version 2.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Journalism provenance is a horizontal capability. Here is how different actors in the information ecosystem put the registry to work.",
    sectors: [
      { icon: ScrollText, title: "News Outlets & Consortia", description: "Anchor every published article and journalist credential, giving readers a way to confirm a story is a genuine, unaltered publication from a verified reporter.", assetTypes: ["Article Hashes", "Journalist Credentials", "Version Histories"] },
      { icon: Search, title: "Fact-Checkers & Platforms", description: "Verify origin and integrity of circulating articles in seconds, distinguishing genuine reporting from doctored copies before amplifying or flagging content.", assetTypes: ["Verification Results", "Tamper Flags", "Source Attributions"] },
      { icon: Gavel, title: "Regulators & Press Bodies", description: "Audit the public registry to confirm attribution and detect manipulated republications, replacing manual source-checking with a live integrity query.", assetTypes: ["Attribution Records", "Integrity Audits", "Credential Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an outlet's content management system or exposing verification through a reader-facing app, Cerulea routes both into one public provenance record.",
    tracks: [
      {
        title: "Track A: Newsroom CMS Bridging",
        description:
          "For outlets on legacy content management systems. Publication events are translated into signed on-chain article anchors through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Newsroom CMS", sublabel: "Editorial Publishing System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Content Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Journalism Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Reader Verification App",
        description:
          "For readers and fact-checkers verifying a story. A public app hashes the article in view and reads the registry directly, returning origin and integrity without an account.",
        connectorLabels: ["PUBLIC READ", "STATE EXECUTION"],
        nodes: [
          { label: "Reader App / Browser", sublabel: "Public Verification Client", icon: Fingerprint, accent: false },
          { label: "Public Validators", sublabel: "Integrity Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Article Provenance Record", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a public journalism registry with credential anchoring, article-level tamper detection, and open verification from scratch requires specialised engineers and long standards-alignment cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credential & Integrity Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects public-verification infrastructure benchmarks. Building credential anchoring, article hashing, and an open verification gateway that outlets and platforms can share for an average consortium takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your credential and integrity rules into pre-audited WebAssembly binaries and provisions the public provenance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "freelance-journalist-contract-and-payment-automation",
    icon: Wallet,
    eyebrow: "Freelance Payment Settlement Layer",
    headline1: "Publish the story.",
    headline2: "Trigger the payment.",
    heroDescription:
      "Tie freelance journalist payments directly to a verified publication event, so writers are paid the moment their article goes live. Escrow releases automatically on confirmed publication, ending the weeks of chasing invoices after a piece appears.",
    heroCta: "Deploy Freelance Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow, invoice-chasing payment cycle into a publication-triggered, automatic settlement.",
    mechanics: [
      { title: "Commission Escrow", description: "Fund the assignment up front. The Escrow and Conditional Settlement module locks the agreed fee when the commission is issued, so the writer knows payment is reserved before work begins." },
      { title: "Publication Notary", description: "Anchor the go-live moment. The Provenance Notary module records a verified publication event with a timestamp, creating the trigger that authorizes payment." },
      { title: "Payment on Publish", description: "Release funds automatically. Once the publication event is confirmed against the commission, escrow settles to the journalist with no invoice and no approval queue." },
      { title: "Contract Terms Encoding", description: "Encode the deal once. Fee, deadline, and rights transferred are written into the commission contract, so the terms both sides agreed to are executable rather than filed in an email." },
      { title: "Compliance Attestations", description: "Record the transfer of rights. The Compliance Attestations module attests that agreed usage rights passed to the outlet on payment, giving both parties a verifiable record." },
      { title: "Deadline & Kill-Fee Logic", description: "Handle the edge cases. If a commissioned piece is spiked or missed, the contract applies the agreed kill fee or releases escrow back, resolving exceptions without a dispute." },
    ],
    lifecycleTitle: "The Commission Lifecycle",
    lifecycleSubtitle:
      "Follow a single freelance assignment from commission through publication to automatic, invoice-free payment.",
    lifecycleSteps: [
      {
        label: "Commission & Fund",
        description:
          "An editor commissions a freelancer and locks the agreed fee in escrow. The contract anchors the fee, deadline, and rights terms as the basis for payment.",
        icon: Handshake,
        logFilename: "cerulea_freelance.log",
        logLines: [
          { text: "[SYS] Initializing Commission Manifest...", time: "10:03:27", tone: "default" },
          { text: "[CMD] commission { writer: \"A_ROY\", fee: 450, deadline: \"2026-09-25\" }", time: "10:03:27", tone: "primary" },
          { text: "[AUTH] Locking fee into escrow...", time: "10:03:28", tone: "secondary" },
          { text: "[OK] Commission COM_8842 funded at block 5610233.", time: "10:03:28", tone: "success" },
        ],
      },
      {
        label: "Submission & Acceptance",
        description:
          "The journalist submits the piece and the editor accepts it. The acceptance is co-signed, moving the commission toward publication.",
        icon: FileCheck,
        logFilename: "cerulea_freelance.log",
        logLines: [
          { text: "[SYS] Draft submitted for COM_8842...", time: "13:41:55", tone: "default" },
          { text: "[CMD] acceptSubmission(COM_8842, editor: \"D_KHAN\")", time: "13:42:10", tone: "primary" },
          { text: "[SYS] Co-signature recorded from editor.", time: "13:42:11", tone: "default" },
          { text: "[OK] Submission accepted. Awaiting publication.", time: "13:42:11", tone: "success" },
        ],
      },
      {
        label: "Publication Event",
        description:
          "The article goes live. The Provenance Notary anchors the publication event, providing the verified trigger that authorizes payment release.",
        icon: ScrollText,
        logFilename: "cerulea_freelance.log",
        logLines: [
          { text: "[SYS] Detecting go-live for COM_8842...", time: "18:00:04", tone: "default" },
          { text: "[CMD] anchorPublication(COM_8842, url: 0x33a, ts: 1758304804)", time: "18:00:04", tone: "primary" },
          { text: "[AUTH] Confirming published article matches submission...", time: "18:00:05", tone: "secondary" },
          { text: "[OK] Publication anchored. Payment condition met.", time: "18:00:05", tone: "success" },
        ],
      },
      {
        label: "Automatic Payment",
        description:
          "With publication confirmed, escrow releases the fee to the journalist immediately, and the transfer of agreed rights is attested.",
        icon: Wallet,
        logFilename: "cerulea_freelance.log",
        logLines: [
          { text: "[SYS] Settlement condition satisfied for COM_8842...", time: "18:00:20", tone: "default" },
          { text: "[CMD] releaseFee(COM_8842)", time: "18:00:20", tone: "primary" },
          { text: "[SYS] Attesting rights transfer to outlet...", time: "18:00:21", tone: "default" },
          { text: "[OK] Fee paid to writer. No invoice required.", time: "18:00:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes freelance settlement into modular contracts. Each layer funds the commission, records acceptance, anchors publication, and releases payment without an invoice passing through accounts payable.",
    layers: [
      {
        title: "Commission Vault",
        subtitle: "The Assignment Lock",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Assignment Lock",
          description:
            "The foundational data layer. It mints a commission identity, locks the agreed fee, and stores the immutable link to writer, deadline, and rights terms that govern the payout.",
          platformFunction: "Identity & Escrow",
        },
        codeSnippet:
          "contract CommissionVault {\n  struct Commission {\n    address writer;\n    uint256 fee;\n    uint256 deadline;\n    bytes32 rightsTerms;\n    bool published;\n  }\n\n  mapping(bytes32 => Commission) public commissions;\n\n  function commission(bytes32 id, address writer, uint256 deadline) external payable {\n    commissions[id] = Commission(writer, msg.value, deadline, 0, false);\n  }\n}",
        simAction: "Simulate Commission Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading editor budget authorization...", tone: "default" },
          { text: "Locking fee of 450 into escrow...", tone: "default" },
          { text: "Encoding deadline and rights terms...", tone: "default" },
          { text: "Writing commission to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Commission COM_8842 funded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Acceptance Gate",
        subtitle: "The Two-Party Sign-Off",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Party Sign-Off",
          description:
            "Records mutual acceptance of the submitted work. A commission cannot advance to payment until the editor co-signs acceptance, keeping both sides in agreement on-chain.",
          platformFunction: "Workflow & Acceptance",
        },
        codeSnippet:
          "function acceptSubmission(bytes32 id) external {\n    require(msg.sender == editorOf[id], \"Not editor\");\n    Commission storage c = commissions[id];\n    require(!c.published, \"Already live\");\n    accepted[id] = true;\n    emit SubmissionAccepted(id, msg.sender);\n}",
        simAction: "Simulate Submission Acceptance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Editor reviewing submitted draft...", tone: "default" },
          { text: "Confirming editor authority on commission...", tone: "default" },
          { text: "Recording co-signature of acceptance...", tone: "default" },
          { text: "Marking commission ready for publication...", tone: "default" },
          { text: "[SUCCESS] Submission accepted with proof.", tone: "success" },
        ],
      },
      {
        title: "Publication Notary",
        subtitle: "The Go-Live Trigger",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Go-Live Trigger",
          description:
            "Anchors the verified publication event that authorizes payment. It binds the live article to the accepted commission, turning going live into the precise condition that releases funds.",
          platformFunction: "Provenance & Trigger",
        },
        codeSnippet:
          "function anchorPublication(bytes32 id, bytes32 urlHash) external onlyNotary {\n    require(accepted[id], \"Not accepted\");\n    commissions[id].published = true;\n    publications[id] = Publication(urlHash, block.timestamp);\n    emit Published(id, urlHash);\n}",
        simAction: "Simulate Publication Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting article go-live...", tone: "default" },
          { text: "Confirming commission was accepted...", tone: "default" },
          { text: "Binding live URL hash to commission...", tone: "default" },
          { text: "Marking publication condition met...", tone: "default" },
          { text: "[SUCCESS] Publication event anchored.", tone: "success" },
        ],
      },
      {
        title: "Settlement Release",
        subtitle: "The Invoice-Free Payer",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Invoice-Free Payer",
          description:
            "Releases escrow to the writer the instant publication is confirmed and attests the rights transfer. It also enforces kill-fee and deadline logic so spiked or missed pieces resolve automatically.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function releaseFee(bytes32 id) external {\n    Commission storage c = commissions[id];\n    require(c.published, \"Not published\");\n    _transfer(c.writer, c.fee);\n    emit FeePaid(id, c.writer, c.fee);\n}",
        simAction: "Simulate Fee Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming publication for COM_8842...", tone: "default" },
          { text: "Computing fee owed to writer...", tone: "default" },
          { text: "Transferring escrow to writer wallet...", tone: "default" },
          { text: "Attesting rights transfer to outlet...", tone: "default" },
          { text: "[SUCCESS] Fee paid on publication, no invoice.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Publication-triggered payment is a horizontal capability. Here is how different actors in the freelance economy put the settlement layer to work.",
    sectors: [
      { icon: ScrollText, title: "Publishers & Outlets", description: "Commission freelancers with funds escrowed up front and settle automatically on publication, cutting accounts-payable overhead and strengthening relationships with the writers they rely on.", assetTypes: ["Commissions", "Publication Events", "Rights Attestations"] },
      { icon: Wallet, title: "Freelance Journalists", description: "See the fee reserved before work starts and receive it the moment a piece goes live, replacing weeks of invoice chasing with a publication-triggered payment.", assetTypes: ["Assignment Fees", "Kill Fees", "Payment Receipts"] },
      { icon: Users, title: "Content Marketplaces & Guilds", description: "Run a trusted settlement rail for members, where every commission and payout is recorded and disputes resolve against signed terms rather than screenshots.", assetTypes: ["Member Contracts", "Escrow Balances", "Dispute Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a publisher's CMS and finance stack or onboarding independent writers through a wallet app, Cerulea routes both into one settlement record.",
    tracks: [
      {
        title: "Track A: Publisher Finance Bridging",
        description:
          "For outlets on legacy CMS and payables systems. Commission and publication events are translated into signed on-chain settlement records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "CMS / Payables System", sublabel: "Editorial & Finance Stack", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Commission Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Freelancer Wallet App",
        description:
          "For independent writers. A wallet app signs submission and acceptance events and receives payment directly, routing each commission through the settlement layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Freelancer Wallet", sublabel: "Writer Payment App", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Settlement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Commission Record", icon: Wallet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a publication-triggered settlement system with escrow, notarized go-live events, and kill-fee logic from scratch requires specialised engineers and long finance-system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Commission & Payout Rules",
      ruleCount: 32,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects publishing-finance integration benchmarks. Connecting editorial and payables systems, coding escrow and publication-trigger logic, and handling kill-fee exceptions for an average outlet takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your commission and payout rules into pre-audited WebAssembly binaries and provisions the settlement ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "subscription-and-paywall-access-rights-across-publisher-network",
    icon: IdCard,
    eyebrow: "Federated Access Credential Layer",
    headline1: "Subscribe once.",
    headline2: "Read everywhere.",
    heroDescription:
      "Issue a single verifiable access credential that every participating publisher recognizes, so one subscription unlocks content across the whole network. Readers stop hitting paywalls behind separate logins, and publishers share one trusted entitlement record.",
    heroCta: "Deploy Access Credentials",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a wall of separate publisher logins into one portable, verifiable subscription credential.",
    mechanics: [
      { title: "Verifiable Subscription Credential", description: "Issue entitlement once. The DID and VC Ledger module mints a verifiable credential representing a reader's active subscription, recognized by every publisher in the network." },
      { title: "Wallet Authentication", description: "Prove access without a password. The Wallet Authentication module lets a reader present their credential from a wallet, so any participating site grants access without its own separate login." },
      { title: "Cross-Publisher Recognition", description: "Honor one subscription everywhere. Each publisher checks the shared credential rather than its own database, so a bundle subscriber passes every paywall in the network seamlessly." },
      { title: "Compliance Attestations", description: "Keep entitlement provable. The Compliance Attestations module records that access was granted against a valid, current credential, giving publishers an auditable entitlement trail." },
      { title: "Revocation & Renewal", description: "Reflect status instantly. When a subscription lapses or renews, the credential's state updates once and every publisher sees the change without a sync job." },
      { title: "Privacy-Preserving Checks", description: "Verify without oversharing. A publisher confirms a reader is entitled without receiving the reader's full profile, checking validity rather than harvesting personal data." },
    ],
    lifecycleTitle: "The Access Lifecycle",
    lifecycleSubtitle:
      "Follow a single subscription from issuance through a cross-publisher access check to renewal or revocation.",
    lifecycleSteps: [
      {
        label: "Credential Issuance",
        description:
          "A reader subscribes to a network bundle and receives a verifiable access credential. The contract anchors the entitlement and its validity window.",
        icon: IdCard,
        logFilename: "cerulea_access_rights.log",
        logLines: [
          { text: "[SYS] Initializing Subscription Credential Manifest...", time: "07:22:41", tone: "default" },
          { text: "[CMD] issueAccess { reader: 0x7c2, tier: \"NETWORK_ALL\", term: \"MONTHLY\" }", time: "07:22:41", tone: "primary" },
          { text: "[AUTH] Anchoring verifiable credential to reader DID...", time: "07:22:42", tone: "secondary" },
          { text: "[OK] Credential ACC_6610 issued, valid 30 days.", time: "07:22:42", tone: "success" },
        ],
      },
      {
        label: "Cross-Site Access",
        description:
          "The reader visits a different publisher in the network. That site checks the shared credential and grants access without its own separate login.",
        icon: Lock,
        logFilename: "cerulea_access_rights.log",
        logLines: [
          { text: "[SYS] Access request at Publisher_TRIBUNE...", time: "09:15:33", tone: "default" },
          { text: "[CMD] verifyAccess(ACC_6610, site: \"TRIBUNE\")", time: "09:15:33", tone: "primary" },
          { text: "[AUTH] Wallet signature confirms credential holder...", time: "09:15:34", tone: "secondary" },
          { text: "[OK] Entitlement valid. Paywall bypassed.", time: "09:15:34", tone: "success" },
        ],
      },
      {
        label: "Entitlement Attestation",
        description:
          "The publisher records that access was granted against a valid credential, adding to a shared, auditable entitlement trail across the network.",
        icon: FileCheck,
        logFilename: "cerulea_access_rights.log",
        logLines: [
          { text: "[SYS] Recording entitlement grant for ACC_6610...", time: "09:15:35", tone: "default" },
          { text: "[CMD] attestGrant(ACC_6610, site: \"TRIBUNE\")", time: "09:15:35", tone: "primary" },
          { text: "[SYS] Privacy-preserving check, no profile shared.", time: "09:15:36", tone: "muted" },
          { text: "[OK] Grant attested to shared entitlement log.", time: "09:15:36", tone: "success" },
        ],
      },
      {
        label: "Renewal or Revocation",
        description:
          "When the term ends, the credential renews or lapses. The state updates once, and every publisher immediately reflects the reader's new access status.",
        icon: Handshake,
        logFilename: "cerulea_access_rights.log",
        logLines: [
          { text: "[SYS] Subscription term expiring for ACC_6610...", time: "00:00:03", tone: "default" },
          { text: "[CMD] updateStatus(ACC_6610, state: \"RENEWED\")", time: "00:00:03", tone: "primary" },
          { text: "[SYS] Credential state propagated network-wide.", time: "00:00:04", tone: "default" },
          { text: "[OK] Access continued across all publishers.", time: "00:00:04", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes federated access into modular contracts. Each layer issues the credential, authenticates the reader, checks entitlement, and updates status without any publisher holding the master login.",
    layers: [
      {
        title: "Credential Issuer",
        subtitle: "The Subscription Passport",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Subscription Passport",
          description:
            "The identity layer. It mints a verifiable access credential bound to the reader's decentralized identifier and stores the entitlement tier and validity window every publisher reads.",
          platformFunction: "Identity & Credentials",
        },
        codeSnippet:
          "contract CredentialIssuer {\n  struct Access {\n    bytes32 readerDid;\n    bytes32 tier;\n    uint256 expiry;\n    bool active;\n  }\n\n  mapping(bytes32 => Access) public grants;\n\n  function issue(bytes32 id, bytes32 did, bytes32 tier, uint256 expiry) external onlyNetwork {\n    grants[id] = Access(did, tier, expiry, true);\n  }\n}",
        simAction: "Simulate Credential Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading reader DID and chosen tier...", tone: "default" },
          { text: "Setting validity window to 30 days...", tone: "default" },
          { text: "Minting verifiable access credential...", tone: "default" },
          { text: "Writing entitlement to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Credential ACC_6610 issued.", tone: "success" },
        ],
      },
      {
        title: "Wallet Authenticator",
        subtitle: "The Passwordless Gate",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Passwordless Gate",
          description:
            "Verifies that the reader presenting a credential controls it, using a wallet signature. It removes the per-publisher password and proves entitlement without a shared login store.",
          platformFunction: "Authentication",
        },
        codeSnippet:
          "function verifyHolder(bytes32 id, bytes memory sig, bytes32 challenge) public view returns (bool) {\n    address signer = recover(challenge, sig);\n    return didToAddress[grants[id].readerDid] == signer;\n}",
        simAction: "Simulate Wallet Authentication",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Issuing challenge to reader wallet...", tone: "default" },
          { text: "Receiving signed challenge...", tone: "default" },
          { text: "Recovering signer address...", tone: "default" },
          { text: "Matching signer to credential holder...", tone: "default" },
          { text: "[SUCCESS] Reader authenticated without password.", tone: "success" },
        ],
      },
      {
        title: "Entitlement Verifier",
        subtitle: "The Cross-Site Check",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cross-Site Check",
          description:
            "Lets any participating publisher confirm a credential is valid and covers its content, granting access from the shared record instead of its own paywall database.",
          platformFunction: "Access Control",
        },
        codeSnippet:
          "function verifyAccess(bytes32 id, bytes32 site) external view returns (bool) {\n    Access memory a = grants[id];\n    require(a.active, \"Inactive\");\n    require(block.timestamp <= a.expiry, \"Expired\");\n    return tierCovers[a.tier][site];\n}",
        simAction: "Simulate Access Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Publisher TRIBUNE requesting entitlement...", tone: "default" },
          { text: "Confirming credential is active...", tone: "default" },
          { text: "Checking validity window...", tone: "default" },
          { text: "Confirming tier covers TRIBUNE content...", tone: "default" },
          { text: "[SUCCESS] Access granted from shared record.", tone: "success" },
        ],
      },
      {
        title: "Status Controller",
        subtitle: "The Live Revocation",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Revocation",
          description:
            "Updates a credential's state on renewal or lapse in one place. Every publisher immediately reflects the change, so a cancelled subscription cannot slip through a stale local database.",
          platformFunction: "Lifecycle Control",
        },
        codeSnippet:
          "function updateStatus(bytes32 id, bool active, uint256 newExpiry) external onlyNetwork {\n    Access storage a = grants[id];\n    a.active = active;\n    a.expiry = newExpiry;\n    emit StatusUpdated(id, active, newExpiry);\n}",
        simAction: "Simulate Status Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Processing renewal for ACC_6610...", tone: "default" },
          { text: "Extending validity window...", tone: "default" },
          { text: "Setting credential state to active...", tone: "default" },
          { text: "Propagating status across network...", tone: "default" },
          { text: "[SUCCESS] Access continued network-wide.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Federated access is a horizontal capability. Here is how different actors in the publishing network put the shared credential to work.",
    sectors: [
      { icon: ScrollText, title: "Publishers & Media Networks", description: "Recognize one subscription across every title in a bundle, growing reach and reducing churn without building fragile cross-login integrations between competing brands.", assetTypes: ["Access Credentials", "Entitlement Logs", "Bundle Tiers"] },
      { icon: IdCard, title: "Subscribers & Readers", description: "Carry a single credential that unlocks the whole network from a wallet, ending the friction of separate logins and repeated paywalls across sites they already pay for.", assetTypes: ["Subscription Credentials", "Access Grants", "Renewal Status"] },
      { icon: Landmark, title: "Bundle Operators & Aggregators", description: "Run the entitlement backbone for a coalition of publishers, issuing and revoking credentials centrally while each member verifies against the shared record.", assetTypes: ["Coalition Entitlements", "Revocation Lists", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a publisher's identity and paywall stack or onboarding readers through a wallet, Cerulea routes both into one shared entitlement record.",
    tracks: [
      {
        title: "Track A: Publisher Paywall Bridging",
        description:
          "For publishers on legacy identity and paywall systems. Access checks are translated into signed on-chain credential verifications through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Identity / Paywall System", sublabel: "Publisher Access Stack", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Verification", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Federated Entitlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Reader Wallet Access",
        description:
          "For subscribers using a wallet. The reader presents a credential signed from their wallet and each publisher verifies it directly, unlocking content without a new login.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Reader Wallet", sublabel: "Subscriber Credential App", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Entitlement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Access Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a federated access network with verifiable credentials, wallet authentication, and live revocation across many publishers from scratch requires specialised engineers and long identity-integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Entitlement & Access Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects federated-identity integration benchmarks. Aligning each publisher's paywall, building credential issuance and revocation, and wiring cross-site verification for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your entitlement and access rules into pre-audited WebAssembly binaries and provisions the shared credential ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "archive-licensing-for-historical-content-reuse",
    icon: Database,
    eyebrow: "Archive Licensing Settlement Layer",
    headline1: "Unlock the archive.",
    headline2: "Auto-price every reuse.",
    heroDescription:
      "Let researchers and other media license archived articles and photos with royalties calculated automatically from agreed rates. The moment a license is granted, payment releases to the original publisher, replacing slow, inconsistent manual licensing.",
    heroCta: "Deploy Archive Licensing",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow, ad hoc permissions desk into a self-pricing, instantly settling archive licensing engine.",
    mechanics: [
      { title: "Archive Rights Catalogue", description: "Register every reusable asset once. Each archived article or photograph is anchored with its ownership and reuse terms, so a licensee finds a licensable item rather than emailing a permissions desk." },
      { title: "Royalty Standard Rates", description: "Encode reuse pricing. The Royalty Standard module turns per-use, territory, and media-type rates into executable terms, so the fee for any reuse is calculated the same way every time." },
      { title: "Automated Fee Calculation", description: "Price each request instantly. When a licensee specifies the intended use, the contract computes the exact royalty from the encoded rate card without a manual quote." },
      { title: "Instant Publisher Settlement", description: "Pay on grant. The Royalty Clearing module releases the calculated fee to the original publisher the moment the license is issued, ending the wait between usage and payment." },
      { title: "Provenance Notary", description: "Anchor the license grant. The Provenance Notary module seals the licensing terms and asset digest, so the scope a licensee paid for is provable if a reuse is later questioned." },
      { title: "Usage Scope Enforcement", description: "Keep reuse within terms. Each license records the exact permitted scope, so a documentary or outlet has a clear, verifiable record of what it may and may not do with the asset." },
    ],
    lifecycleTitle: "The Archive Licensing Lifecycle",
    lifecycleSubtitle:
      "Follow a single archived asset from catalogue registration through an automated license request to instant publisher payment.",
    lifecycleSteps: [
      {
        label: "Asset Registration",
        description:
          "A publisher registers an archived article or photograph with its ownership and reuse rate card. The contract anchors the asset as licensable.",
        icon: Database,
        logFilename: "cerulea_archive_license.log",
        logLines: [
          { text: "[SYS] Initializing Archive Asset Manifest...", time: "11:40:19", tone: "default" },
          { text: "[CMD] registerAsset { id: \"PHOTO_1972_KOL\", owner: \"HERALD\", type: \"IMAGE\" }", time: "11:40:19", tone: "primary" },
          { text: "[AUTH] Sealing reuse rate card via Royalty Standard...", time: "11:40:20", tone: "secondary" },
          { text: "[OK] Asset ARC_4417 registered, licensable.", time: "11:40:20", tone: "success" },
        ],
      },
      {
        label: "License Request",
        description:
          "A researcher or media outlet requests reuse and specifies the intended use, territory, and media type for fee calculation.",
        icon: Search,
        logFilename: "cerulea_archive_license.log",
        logLines: [
          { text: "[SYS] License request received for ARC_4417...", time: "14:12:50", tone: "default" },
          { text: "[CMD] requestLicense(ARC_4417, use: \"DOCUMENTARY\", terr: \"GLOBAL\")", time: "14:12:50", tone: "primary" },
          { text: "[SYS] Matching request to encoded rate card...", time: "14:12:51", tone: "default" },
          { text: "[OK] Request accepted, ready to price.", time: "14:12:51", tone: "success" },
        ],
      },
      {
        label: "Fee Calculation",
        description:
          "The contract computes the exact royalty from the encoded rate card based on the specified use, producing a fee with no manual quote.",
        icon: PieChart,
        logFilename: "cerulea_archive_license.log",
        logLines: [
          { text: "[SYS] Computing reuse fee for ARC_4417...", time: "14:12:53", tone: "default" },
          { text: "[CMD] computeFee(use: \"DOCUMENTARY\", terr: \"GLOBAL\")", time: "14:12:53", tone: "primary" },
          { text: "[AUTH] Applying media-type and territory multipliers...", time: "14:12:54", tone: "secondary" },
          { text: "[OK] Fee computed: 1200 for global documentary use.", time: "14:12:54", tone: "success" },
        ],
      },
      {
        label: "Grant & Settlement",
        description:
          "On acceptance, the license is granted and the Royalty Clearing module settles the fee to the original publisher immediately, sealing the permitted scope.",
        icon: Wallet,
        logFilename: "cerulea_archive_license.log",
        logLines: [
          { text: "[SYS] Licensee accepting computed fee...", time: "14:13:20", tone: "default" },
          { text: "[CMD] grantLicense(ARC_4417, fee: 1200)", time: "14:13:20", tone: "primary" },
          { text: "[SYS] Settling fee to HERALD on grant...", time: "14:13:21", tone: "default" },
          { text: "[OK] License issued, publisher paid instantly.", time: "14:13:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes archive licensing into modular contracts. Each layer registers the asset, prices the request, settles the fee, and seals the permitted scope without a manual permissions desk in the loop.",
    layers: [
      {
        title: "Asset Catalogue",
        subtitle: "The Archive Passport",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Archive Passport",
          description:
            "The foundational data layer. It mints an asset identity for each archived work and stores the immutable link to owner, media type, and reuse rate card that every license request reads.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AssetCatalogue {\n  struct Asset {\n    address owner;\n    bytes32 mediaType;\n    bytes32 rateCard;\n    bool licensable;\n  }\n\n  mapping(bytes32 => Asset) public assets;\n\n  function register(bytes32 id, bytes32 mediaType, bytes32 rateCard) external {\n    assets[id] = Asset(msg.sender, mediaType, rateCard, true);\n  }\n}",
        simAction: "Simulate Asset Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading publisher ownership of asset...", tone: "default" },
          { text: "Binding reuse rate card to asset...", tone: "default" },
          { text: "Marking asset as licensable...", tone: "default" },
          { text: "Writing asset identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Asset ARC_4417 catalogued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Pricing Engine",
        subtitle: "The Rate Calculator",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rate Calculator",
          description:
            "Applies the encoded rate card to a request's use, territory, and media type. It produces a deterministic fee so every licensee is priced consistently without a manual quote from a rights desk.",
          platformFunction: "Fee Computation",
        },
        codeSnippet:
          "function computeFee(bytes32 assetId, bytes32 use, bytes32 terr) public view returns (uint256) {\n    RateCard memory rc = cards[assets[assetId].rateCard];\n    uint256 base = rc.baseFee[use];\n    return (base * rc.terrMultiplier[terr]) / 100;\n}",
        simAction: "Simulate Fee Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading rate card for ARC_4417...", tone: "default" },
          { text: "Reading base fee for documentary use...", tone: "default" },
          { text: "Applying global territory multiplier...", tone: "default" },
          { text: "Resolving final reuse fee...", tone: "default" },
          { text: "[SUCCESS] Fee computed deterministically.", tone: "success" },
        ],
      },
      {
        title: "Clearing Settler",
        subtitle: "The Instant Payer",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Payer",
          description:
            "Releases the computed fee to the original publisher the moment a license is granted, collapsing the gap between reuse and payment that manual archive licensing usually leaves open.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function grantLicense(bytes32 assetId, bytes32 use, bytes32 terr) external payable {\n    uint256 fee = computeFee(assetId, use, terr);\n    require(msg.value == fee, \"Wrong fee\");\n    _transfer(assets[assetId].owner, fee);\n    licenses[nextId++] = License(assetId, msg.sender, use, terr, block.timestamp);\n}",
        simAction: "Simulate License Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming licensee accepts fee of 1200...", tone: "default" },
          { text: "Validating payment matches computed fee...", tone: "default" },
          { text: "Transferring fee to publisher HERALD...", tone: "default" },
          { text: "Recording issued license...", tone: "default" },
          { text: "[SUCCESS] License granted, publisher paid.", tone: "success" },
        ],
      },
      {
        title: "Scope Notary",
        subtitle: "The Permitted-Use Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Permitted-Use Seal",
          description:
            "Anchors the exact scope each license covers, so a later question about how an asset was reused resolves against a signed record of what the licensee actually paid for.",
          platformFunction: "Provenance & Scope",
        },
        codeSnippet:
          "function sealScope(uint256 licId) external view returns (bytes32) {\n    License memory l = licenses[licId];\n    return keccak256(abi.encode(l.assetId, l.use, l.terr, l.licensee));\n}",
        simAction: "Simulate Scope Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading issued license terms...", tone: "default" },
          { text: "Encoding permitted use and territory...", tone: "default" },
          { text: "Computing scope digest...", tone: "default" },
          { text: "Anchoring scope to license record...", tone: "default" },
          { text: "[SUCCESS] Permitted-use scope sealed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated archive licensing is a horizontal capability. Here is how different actors put the self-pricing licensing engine to work.",
    sectors: [
      { icon: Database, title: "Publishers & Archives", description: "Turn decades of dormant articles and photographs into a self-serve, instantly settling revenue stream, without staffing a permissions desk to handle each reuse request by hand.", assetTypes: ["Archived Assets", "Reuse Licenses", "Royalty Receipts"] },
      { icon: FlaskConical, title: "Researchers & Documentary Makers", description: "Request and clear reuse of historical content in minutes with an automatically calculated fee and a sealed record of the rights obtained, instead of chasing manual permissions.", assetTypes: ["Reuse Grants", "Scope Attestations", "Usage Records"] },
      { icon: Landmark, title: "Libraries & Cultural Institutions", description: "License holdings to media and academia under consistent, encoded terms, preserving provenance while opening collections to reuse with a verifiable settlement trail.", assetTypes: ["Collection Rights", "Institutional Licenses", "Provenance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a publisher's digital asset management system or serving licensees through a self-serve portal, Cerulea routes both into one shared licensing record.",
    tracks: [
      {
        title: "Track A: Asset-Management Bridging",
        description:
          "For publishers on legacy digital asset management systems. Catalogue and license events are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Digital Asset Manager", sublabel: "Publisher Archive System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Rate Encoding & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Archive Licensing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Licensee Self-Serve Portal",
        description:
          "For researchers and media buyers. A self-serve portal signs each license request from a licensee wallet and settles the computed fee directly to the publisher.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Licensing Portal", sublabel: "Licensee Request App", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Licensing Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Archive Record", icon: Database, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a self-pricing archive licensing engine with encoded rate cards, instant settlement, and sealed usage scope from scratch requires specialised engineers and long asset-system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Rate & Licensing Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects rights-and-licensing integration benchmarks. Connecting an asset-management system, coding rate-card pricing and settlement, and building a self-serve licensing portal for an average archive takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your rate and licensing rules into pre-audited WebAssembly binaries and provisions the licensing ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "film-ip-ownership-registry-and-revenue-share-via-smart-contracts",
    icon: PieChart,
    eyebrow: "Film Rights Waterfall Engine",
    headline1: "Fix the chain of title.",
    headline2: "Automate the waterfall.",
    heroDescription:
      "Run a hybrid film rights registry that anchors production agreements and executes the revenue waterfall automatically at each exploitation window. Every rights holder receives accurate, verifiable payment, and chain-of-title disputes become resolvable in days with on-chain evidence.",
    heroCta: "Deploy Film Rights Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a contested ownership spreadsheet into a neutral registry that pays every holder by rule.",
    mechanics: [
      { title: "Chain-of-Title Registry", description: "Establish neutral ownership. The registry anchors each co-producer, sales agent, and distributor's share, so ownership splits rest on a shared record rather than each party's own version." },
      { title: "Production Agreement Anchoring", description: "Bind the paperwork to the deal. The Trade Finance Documents module seals signed production agreements by digest, so the terms that drive the waterfall cannot be quietly altered." },
      { title: "Automated Revenue Waterfall", description: "Execute the recoupment order. The Royalty Standard module encodes the priority of recoupment and profit splits, so revenue flows through the waterfall exactly as contracted at each window." },
      { title: "Exploitation Window Settlement", description: "Pay per window. The Royalty Clearing module settles the waterfall separately for theatrical, streaming, and other windows as revenue arrives, keeping each exploitation stream distinct and auditable." },
      { title: "Verifiable Calculation Trail", description: "Show every holder the math. Each payout links back to reported revenue, the encoded waterfall, and the block it settled on, turning a recoupment dispute into a query." },
      { title: "Dispute Evidence", description: "Resolve title claims fast. Because agreements and payouts are anchored, a chain-of-title or revenue dispute is settled against on-chain evidence in days rather than in prolonged arbitration." },
    ],
    lifecycleTitle: "The Rights Waterfall Lifecycle",
    lifecycleSubtitle:
      "Follow a single film from ownership registration through window revenue to an automated, verifiable waterfall payout.",
    lifecycleSteps: [
      {
        label: "Ownership Registration",
        description:
          "Co-producers, the sales agent, and distributor register their ownership shares. The contract anchors the splits and production agreements as the neutral chain of title.",
        icon: Copyright,
        logFilename: "cerulea_film_rights.log",
        logLines: [
          { text: "[SYS] Initializing Chain-of-Title Manifest...", time: "08:30:44", tone: "default" },
          { text: "[CMD] registerTitle { film: \"MONSOON_LINE\", holders: 4, agreement: 0xb1 }", time: "08:30:44", tone: "primary" },
          { text: "[AUTH] Anchoring production agreements by digest...", time: "08:30:45", tone: "secondary" },
          { text: "[OK] Title FILM_2207 registered at block 5701882.", time: "08:30:45", tone: "success" },
        ],
      },
      {
        label: "Waterfall Encoding",
        description:
          "The recoupment order and profit splits are encoded into the waterfall, defining who recoups first and how remaining revenue is shared.",
        icon: Workflow,
        logFilename: "cerulea_film_rights.log",
        logLines: [
          { text: "[SYS] Encoding recoupment waterfall for FILM_2207...", time: "08:32:10", tone: "default" },
          { text: "[CMD] setWaterfall(order: [\"FINANCIER\", \"SALES\", \"PRODUCERS\"])", time: "08:32:10", tone: "primary" },
          { text: "[SYS] Priority tiers and profit splits locked.", time: "08:32:11", tone: "default" },
          { text: "[OK] Waterfall active for all exploitation windows.", time: "08:32:11", tone: "success" },
        ],
      },
      {
        label: "Window Revenue",
        description:
          "Revenue arrives from a theatrical or streaming window and is reported to the contract, ready to flow through the encoded waterfall.",
        icon: Coins,
        logFilename: "cerulea_film_rights.log",
        logLines: [
          { text: "[SYS] Streaming window revenue reported...", time: "12:05:37", tone: "default" },
          { text: "[CMD] reportRevenue(FILM_2207, window: \"SVOD\", amount: 540000)", time: "12:05:37", tone: "primary" },
          { text: "[AUTH] Co-signing reported figure from distributor...", time: "12:05:38", tone: "secondary" },
          { text: "[OK] Revenue accepted, waterfall ready to run.", time: "12:05:38", tone: "success" },
        ],
      },
      {
        label: "Waterfall Payout",
        description:
          "The contract runs the waterfall, recouping in priority order and distributing profit shares to every holder with a verifiable calculation trail.",
        icon: PieChart,
        logFilename: "cerulea_film_rights.log",
        logLines: [
          { text: "[SYS] Executing waterfall for SVOD window...", time: "12:06:02", tone: "default" },
          { text: "[CMD] runWaterfall(FILM_2207, window: \"SVOD\")", time: "12:06:02", tone: "primary" },
          { text: "[SYS] Recouping financier, then splitting profit...", time: "12:06:03", tone: "default" },
          { text: "[OK] 4 holders paid with on-chain calculation trail.", time: "12:06:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes film rights into modular contracts. Each layer anchors ownership, encodes the waterfall, ingests window revenue, and pays every holder without a single party controlling the chain of title.",
    layers: [
      {
        title: "Title Registry",
        subtitle: "The Ownership Anchor",
        icon: Copyright,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ownership Anchor",
          description:
            "The foundational data layer. It records each holder's share and anchors the production agreements, establishing a neutral chain of title that no co-producer or distributor can privately rewrite.",
          platformFunction: "Identity & Ownership",
        },
        codeSnippet:
          "contract TitleRegistry {\n  struct Title {\n    address[] holders;\n    uint16[] shareBps;\n    bytes32 agreementHash;\n    bool active;\n  }\n\n  mapping(bytes32 => Title) public titles;\n\n  function register(bytes32 id, address[] calldata holders, uint16[] calldata bps, bytes32 agr) external {\n    titles[id] = Title(holders, bps, agr, true);\n  }\n}",
        simAction: "Simulate Title Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading 4 declared rights holders...", tone: "default" },
          { text: "Anchoring production agreement digest...", tone: "default" },
          { text: "Recording ownership shares in basis points...", tone: "default" },
          { text: "Writing chain of title to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Title FILM_2207 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Waterfall Engine",
        subtitle: "The Recoupment Order",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Recoupment Order",
          description:
            "Encodes who recoups first and how remaining revenue splits. It executes the contractual priority deterministically, replacing a hand-built recoupment spreadsheet with an on-chain rule.",
          platformFunction: "Waterfall Logic",
        },
        codeSnippet:
          "function runWaterfall(bytes32 id, uint256 revenue) internal returns (uint256[] memory) {\n    uint256[] memory pay = new uint256[](tiers[id].length);\n    uint256 remaining = revenue;\n    for (uint256 i = 0; i < tiers[id].length; i++) {\n        uint256 take = min(remaining, tiers[id][i].cap);\n        pay[i] = take;\n        remaining -= take;\n    }\n    return pay;\n}",
        simAction: "Simulate Waterfall Run",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading recoupment tiers for FILM_2207...", tone: "default" },
          { text: "Recouping financier position first...", tone: "default" },
          { text: "Passing residual to sales and producers...", tone: "default" },
          { text: "Resolving payout vector...", tone: "default" },
          { text: "[SUCCESS] Waterfall computed in priority order.", tone: "success" },
        ],
      },
      {
        title: "Window Ledger",
        subtitle: "The Exploitation Tracker",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Exploitation Tracker",
          description:
            "Keeps each exploitation window distinct. It ingests co-signed revenue per window so theatrical, streaming, and ancillary streams settle separately and remain independently auditable.",
          platformFunction: "Revenue Intake",
        },
        codeSnippet:
          "function reportRevenue(bytes32 id, bytes32 window, uint256 amount) external {\n    require(isDistributor(id, msg.sender), \"Not distributor\");\n    windows[id][window].reported += amount;\n    windows[id][window].signed = true;\n    emit RevenueReported(id, window, amount);\n}",
        simAction: "Simulate Window Revenue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Distributor reporting SVOD window revenue...", tone: "default" },
          { text: "Confirming distributor authority...", tone: "default" },
          { text: "Recording co-signed figure to window...", tone: "default" },
          { text: "Flagging window ready for waterfall...", tone: "default" },
          { text: "[SUCCESS] Window revenue accepted.", tone: "success" },
        ],
      },
      {
        title: "Payout Settler",
        subtitle: "The Verifiable Distributor",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verifiable Distributor",
          description:
            "Distributes each window's waterfall result to holders and links every payout to its inputs. The calculation trail lets any holder verify their share and resolves disputes with on-chain evidence.",
          platformFunction: "Settlement & Audit",
        },
        codeSnippet:
          "function settleWindow(bytes32 id, bytes32 window) external {\n    require(windows[id][window].signed, \"Unsigned\");\n    uint256[] memory pay = runWaterfall(id, windows[id][window].reported);\n    for (uint256 i = 0; i < pay.length; i++) {\n        _transfer(titles[id].holders[i], pay[i]);\n    }\n    emit WindowSettled(id, window);\n}",
        simAction: "Simulate Waterfall Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming SVOD window is co-signed...", tone: "default" },
          { text: "Running encoded recoupment waterfall...", tone: "default" },
          { text: "Transferring shares to 4 holders...", tone: "default" },
          { text: "Linking payouts to calculation trail...", tone: "default" },
          { text: "[SUCCESS] Holders paid with verifiable math.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated revenue waterfalls are a horizontal capability. Here is how different actors in film exploitation put the rights registry to work.",
    sectors: [
      { icon: Building2, title: "Producers & Co-Production Partners", description: "Anchor ownership and agreements in a neutral registry, receiving accurate waterfall payments per window with a calculation trail that ends recoupment arguments.", assetTypes: ["Ownership Shares", "Waterfall Payouts", "Title Records"] },
      { icon: Globe, title: "Sales Agents & Distributors", description: "Report window revenue once to a shared ledger that settles every holder automatically, replacing manual recoupment statements with an auditable, rule-driven distribution.", assetTypes: ["Window Revenue", "Recoupment Positions", "Settlement Runs"] },
      { icon: Landmark, title: "Financiers & Completion Guarantors", description: "Track recoupment in priority order against real reported revenue, gaining live visibility into their position instead of waiting on periodic producer reports.", assetTypes: ["Recoupment Tiers", "Revenue Reports", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a studio's rights and finance systems or onboarding distributors through a reporting portal, Cerulea routes both into one hybrid rights registry.",
    tracks: [
      {
        title: "Track A: Studio Rights-Finance Bridging",
        description:
          "For studios on legacy rights and accounting platforms. Ownership and revenue events are translated into signed on-chain waterfall records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Rights / Accounting System", sublabel: "Studio Finance Stack", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Agreement Anchoring & Signing", icon: Server, accent: true },
          { label: "Cerulea Hybrid Chain", sublabel: "Chain-of-Title Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Distributor Reporting Portal",
        description:
          "For sales agents and distributors. A portal signs each window revenue report from a partner wallet and triggers the waterfall settlement directly on the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Distributor Portal", sublabel: "Window Reporting App", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Revenue Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Waterfall Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a hybrid film rights registry with agreement anchoring, encoded recoupment waterfalls, and per-window settlement from scratch requires specialised engineers and long finance-system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Waterfall & Ownership Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects film-finance integration benchmarks. Anchoring agreements, coding multi-tier recoupment waterfalls, and wiring per-window settlement for an average slate takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your waterfall and ownership rules into pre-audited WebAssembly binaries and provisions the chain-of-title ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "film-financing-syndication-across-multiple-investors",
    icon: Coins,
    eyebrow: "Film Investment Syndication Layer",
    headline1: "Syndicate the capital.",
    headline2: "Automate the recoupment.",
    heroDescription:
      "Track each investor's contribution to a film and their proportional share of box office, streaming, and other revenue on one registry. As money arrives from each source, shares are calculated and distributed automatically, removing manual recoupment waterfalls.",
    heroCta: "Deploy Investment Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a fragile investor spreadsheet into a securities-grade registry that distributes revenue by rule.",
    mechanics: [
      { title: "Investor Cap Table", description: "Record each stake precisely. The Securities Lifecycle module anchors every investor's contribution as a proportional position, so the cap table is a shared record rather than a producer's private ledger." },
      { title: "Securities Lifecycle Controls", description: "Handle stakes as regulated instruments. Issuance, transfer, and holder eligibility follow the Securities Lifecycle module, keeping the syndication compliant as positions change hands." },
      { title: "Proportional Revenue Split", description: "Compute shares automatically. The Royalty Standard module encodes each investor's percentage, so revenue from any source is split in exact proportion without a manual calculation." },
      { title: "Multi-Source Ingestion", description: "Fold in every revenue stream. Box office, streaming, and ancillary income are each reported to the registry, so investors share in all sources through one distribution engine." },
      { title: "Automated Distribution", description: "Pay on arrival. The Royalty Clearing module distributes each investor's share the moment revenue is reported and cleared, ending the wait for a periodic recoupment statement." },
      { title: "Position Transparency", description: "Show every investor their standing. Each holder sees their contribution, cumulative distributions, and recoupment status live, replacing opaque producer reporting with a self-serve view." },
    ],
    lifecycleTitle: "The Syndication Lifecycle",
    lifecycleSubtitle:
      "Follow a film's financing from investor onboarding through multi-source revenue to automatic proportional distribution.",
    lifecycleSteps: [
      {
        label: "Investor Onboarding",
        description:
          "Each investor's contribution and eligibility are recorded, minting a proportional position on the film's cap table under securities controls.",
        icon: Landmark,
        logFilename: "cerulea_film_finance.log",
        logLines: [
          { text: "[SYS] Initializing Investment Cap Table...", time: "09:20:11", tone: "default" },
          { text: "[CMD] addInvestor { film: \"NORTH_STAR\", investor: 0x4d, amount: 250000 }", time: "09:20:11", tone: "primary" },
          { text: "[AUTH] Running Securities Lifecycle eligibility check...", time: "09:20:12", tone: "secondary" },
          { text: "[OK] Position POS_1180 minted, 12.5 percent stake.", time: "09:20:12", tone: "success" },
        ],
      },
      {
        label: "Financing Close",
        description:
          "Once the raise completes, the cap table is locked and each investor's proportional share of future revenue is fixed on the registry.",
        icon: Handshake,
        logFilename: "cerulea_film_finance.log",
        logLines: [
          { text: "[SYS] Financing target reached for NORTH_STAR...", time: "17:45:03", tone: "default" },
          { text: "[CMD] closeRaise(NORTH_STAR, raised: 2000000)", time: "17:45:03", tone: "primary" },
          { text: "[SYS] Cap table locked across 8 investors.", time: "17:45:04", tone: "default" },
          { text: "[OK] Proportional shares fixed and active.", time: "17:45:04", tone: "success" },
        ],
      },
      {
        label: "Revenue Reporting",
        description:
          "Box office, streaming, and other income is reported to the registry from each source, ready for proportional distribution.",
        icon: Coins,
        logFilename: "cerulea_film_finance.log",
        logLines: [
          { text: "[SYS] Box office revenue reported for NORTH_STAR...", time: "11:10:29", tone: "default" },
          { text: "[CMD] reportSource(NORTH_STAR, source: \"THEATRICAL\", amount: 680000)", time: "11:10:29", tone: "primary" },
          { text: "[AUTH] Co-signing figure from distributor node...", time: "11:10:30", tone: "secondary" },
          { text: "[OK] Revenue accepted, distribution ready.", time: "11:10:30", tone: "success" },
        ],
      },
      {
        label: "Proportional Payout",
        description:
          "The registry distributes each investor's share of the reported revenue automatically, updating recoupment status with no manual waterfall.",
        icon: PieChart,
        logFilename: "cerulea_film_finance.log",
        logLines: [
          { text: "[SYS] Distributing theatrical revenue by share...", time: "11:11:02", tone: "default" },
          { text: "[CMD] distribute(NORTH_STAR, source: \"THEATRICAL\")", time: "11:11:02", tone: "primary" },
          { text: "[SYS] Splitting 680000 across 8 positions...", time: "11:11:03", tone: "default" },
          { text: "[OK] All investors paid, recoupment updated.", time: "11:11:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes film financing into modular contracts. Each layer onboards investors, fixes the cap table, ingests revenue by source, and distributes shares without a producer manually running the waterfall.",
    layers: [
      {
        title: "Cap Table Registry",
        subtitle: "The Investor Ledger",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Investor Ledger",
          description:
            "The foundational data layer. It mints a proportional position for each investor and stores the immutable link to contribution, share, and eligibility that every distribution reads.",
          platformFunction: "Identity & Positions",
        },
        codeSnippet:
          "contract CapTableRegistry {\n  struct Position {\n    address investor;\n    uint256 contribution;\n    uint16 shareBps;\n    uint256 distributed;\n  }\n\n  mapping(bytes32 => Position[]) public positions;\n\n  function addInvestor(bytes32 film, address inv, uint256 amount) external onlyIssuer {\n    positions[film].push(Position(inv, amount, 0, 0));\n  }\n}",
        simAction: "Simulate Investor Onboarding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading investor contribution of 250000...", tone: "default" },
          { text: "Running securities eligibility check...", tone: "default" },
          { text: "Computing proportional share...", tone: "default" },
          { text: "Minting position on cap table...", tone: "default" },
          { text: "[SUCCESS] Position POS_1180 minted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Securities Controller",
        subtitle: "The Compliance Guard",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Guard",
          description:
            "Treats each stake as a regulated instrument. It enforces issuance limits, holder eligibility, and transfer rules so the syndication stays compliant even as positions change hands.",
          platformFunction: "Securities Lifecycle",
        },
        codeSnippet:
          "function transferPosition(bytes32 film, uint256 idx, address to) external {\n    require(positions[film][idx].investor == msg.sender, \"Not holder\");\n    require(isEligible(to), \"Ineligible buyer\");\n    positions[film][idx].investor = to;\n    emit PositionTransferred(film, idx, to);\n}",
        simAction: "Simulate Position Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Investor requesting position transfer...", tone: "default" },
          { text: "Confirming current holder...", tone: "default" },
          { text: "Checking buyer eligibility...", tone: "default" },
          { text: "Reassigning position to new holder...", tone: "default" },
          { text: "[SUCCESS] Position transferred compliantly.", tone: "success" },
        ],
      },
      {
        title: "Revenue Router",
        subtitle: "The Multi-Source Intake",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Multi-Source Intake",
          description:
            "Ingests co-signed revenue from box office, streaming, and ancillary sources. It keeps each stream distinct while funneling all of them into one proportional distribution engine.",
          platformFunction: "Revenue Intake",
        },
        codeSnippet:
          "function reportSource(bytes32 film, bytes32 source, uint256 amount) external {\n    require(isReporter(film, msg.sender), \"Not reporter\");\n    revenueBySource[film][source] += amount;\n    pending[film] += amount;\n    emit SourceReported(film, source, amount);\n}",
        simAction: "Simulate Revenue Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving theatrical revenue report...", tone: "default" },
          { text: "Confirming reporter authority...", tone: "default" },
          { text: "Recording revenue to source bucket...", tone: "default" },
          { text: "Adding to pending distribution...", tone: "default" },
          { text: "[SUCCESS] Multi-source revenue accepted.", tone: "success" },
        ],
      },
      {
        title: "Distribution Engine",
        subtitle: "The Proportional Payer",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proportional Payer",
          description:
            "Splits reported revenue across positions by share and updates recoupment status. It replaces the manual recoupment waterfall with an automatic payout every investor can verify.",
          platformFunction: "Automated Distribution",
        },
        codeSnippet:
          "function distribute(bytes32 film) external {\n    uint256 pool = pending[film];\n    Position[] storage ps = positions[film];\n    for (uint256 i = 0; i < ps.length; i++) {\n        uint256 cut = (pool * ps[i].shareBps) / 10000;\n        ps[i].distributed += cut;\n        _transfer(ps[i].investor, cut);\n    }\n    pending[film] = 0;\n}",
        simAction: "Simulate Proportional Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading pending pool of 680000...", tone: "default" },
          { text: "Reading 8 investor share ratios...", tone: "default" },
          { text: "Computing each proportional cut...", tone: "default" },
          { text: "Transferring shares and updating recoupment...", tone: "default" },
          { text: "[SUCCESS] All investors paid proportionally.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated investment distribution is a horizontal capability. Here is how different actors in film financing put the registry to work.",
    sectors: [
      { icon: Landmark, title: "Film Investors & Funds", description: "Hold a transparent, proportional position with live recoupment visibility, receiving each source's revenue share automatically instead of waiting on producer statements.", assetTypes: ["Investment Positions", "Revenue Shares", "Recoupment Status"] },
      { icon: Building2, title: "Producers & Studios", description: "Raise and manage a syndicate on one securities-grade cap table, distributing multi-source revenue by rule and freeing the finance team from manual waterfall accounting.", assetTypes: ["Cap Tables", "Financing Closes", "Distribution Runs"] },
      { icon: Scale, title: "Fund Administrators & Compliance", description: "Administer positions as regulated instruments with enforced eligibility and transfer rules, gaining an auditable record of every contribution and distribution.", assetTypes: ["Holder Registries", "Transfer Logs", "Compliance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a studio's fund-administration systems or onboarding investors through a portal, Cerulea routes both into one shared syndication registry.",
    tracks: [
      {
        title: "Track A: Fund-Administration Bridging",
        description:
          "For studios and funds on legacy administration platforms. Contribution and revenue events are translated into signed on-chain position records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Fund Admin System", sublabel: "Studio Finance Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Position Encoding & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Investment Cap-Table Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Investor Portal",
        description:
          "For investors tracking positions. A portal signs onboarding and transfer actions from an investor wallet and reads live recoupment status directly from the registry.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Investor Portal", sublabel: "Position Tracking App", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Distribution Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Syndication Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a securities-grade film syndication registry with a compliant cap table, multi-source revenue intake, and automatic proportional distribution from scratch requires specialised engineers and long administration-system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Cap-Table & Distribution Rules",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects fund-administration integration benchmarks. Building a compliant cap table, coding securities and distribution logic, and wiring multi-source revenue intake for an average raise takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your cap-table and distribution rules into pre-audited WebAssembly binaries and provisions the syndication ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "visual-effects-and-post-production-vendor-payment-milestones",
    icon: Palette,
    eyebrow: "Post-Production Milestone Layer",
    headline1: "Deliver the shots.",
    headline2: "Get paid on approval.",
    heroDescription:
      "Pay visual effects and post-production vendors automatically as each batch of shots is delivered and approved. Payment ties to a verified delivery-and-approval event, so vendors are paid promptly as their work is accepted instead of waiting weeks on manual sign-off.",
    heroCta: "Deploy Milestone Payments",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow, manual sign-off cycle into delivery-triggered, milestone-based vendor payment.",
    mechanics: [
      { title: "Milestone Escrow", description: "Fund each batch up front. The Escrow and Conditional Settlement module locks payment for a defined batch of shots, so a vendor knows funds are reserved before the work is delivered." },
      { title: "Delivery Provenance", description: "Anchor each handoff. The Provenance Notary module seals the digest of a delivered shot batch, fixing exactly what was submitted so approval and payment reference the same work." },
      { title: "Approval-Gated Release", description: "Pay on accepted work. Escrow releases only when the supervisor approves the delivered batch, tying every payment to a verified delivery-and-approval event." },
      { title: "Procurement Ledger", description: "Track the vendor relationship. The Procurement Ledger module records the purchase order, batches, and payments per vendor, giving both sides a shared account of the engagement." },
      { title: "Revision Handling", description: "Manage kickbacks cleanly. If a batch is returned for revisions, its milestone stays open and re-enters approval on resubmission, so payment follows the accepted version." },
      { title: "Cash-Flow Visibility", description: "Show vendors what is due. Each vendor sees which batches are approved, pending, or in revision, easing the cash-flow strain that manual sign-off delays place on smaller studios." },
    ],
    lifecycleTitle: "The Milestone Lifecycle",
    lifecycleSubtitle:
      "Follow a single batch of shots from milestone funding through delivery and approval to automatic vendor payment.",
    lifecycleSteps: [
      {
        label: "Milestone Funding",
        description:
          "A studio defines a batch of shots and locks its payment in escrow. The contract anchors the batch scope and fee as the milestone to be delivered.",
        icon: Package,
        logFilename: "cerulea_vfx_milestone.log",
        logLines: [
          { text: "[SYS] Initializing Shot Batch Milestone...", time: "10:15:22", tone: "default" },
          { text: "[CMD] fundMilestone { vendor: \"PIXELWORKS\", batch: \"SEQ_12A\", fee: 34000 }", time: "10:15:22", tone: "primary" },
          { text: "[AUTH] Locking milestone fee into escrow...", time: "10:15:23", tone: "secondary" },
          { text: "[OK] Milestone MST_2044 funded at block 5820119.", time: "10:15:23", tone: "success" },
        ],
      },
      {
        label: "Batch Delivery",
        description:
          "The vendor delivers the batch of shots. The Provenance Notary anchors the delivery digest, fixing exactly what was submitted for review.",
        icon: Palette,
        logFilename: "cerulea_vfx_milestone.log",
        logLines: [
          { text: "[SYS] Vendor delivering batch SEQ_12A...", time: "16:48:07", tone: "default" },
          { text: "[CMD] deliverBatch(MST_2044, hash: 0x6c9, shots: 18)", time: "16:48:07", tone: "primary" },
          { text: "[SYS] Sealing delivery digest for review...", time: "16:48:08", tone: "default" },
          { text: "[OK] Delivery anchored, awaiting supervisor approval.", time: "16:48:08", tone: "success" },
        ],
      },
      {
        label: "Supervisor Approval",
        description:
          "The VFX supervisor reviews the delivered batch and approves it. The approval is recorded against the exact delivered version.",
        icon: FileCheck,
        logFilename: "cerulea_vfx_milestone.log",
        logLines: [
          { text: "[SYS] Supervisor reviewing SEQ_12A delivery...", time: "09:30:41", tone: "default" },
          { text: "[CMD] approveBatch(MST_2044, hash: 0x6c9)", time: "09:30:41", tone: "primary" },
          { text: "[AUTH] Confirming approved hash matches delivery...", time: "09:30:42", tone: "secondary" },
          { text: "[OK] Batch approved. Payment condition met.", time: "09:30:42", tone: "success" },
        ],
      },
      {
        label: "Automatic Payment",
        description:
          "With the batch approved, escrow releases the milestone fee to the vendor immediately, and the procurement ledger records the payment.",
        icon: Wallet,
        logFilename: "cerulea_vfx_milestone.log",
        logLines: [
          { text: "[SYS] Settlement condition satisfied for MST_2044...", time: "09:31:05", tone: "default" },
          { text: "[CMD] releaseMilestone(MST_2044)", time: "09:31:05", tone: "primary" },
          { text: "[SYS] Recording payment to procurement ledger...", time: "09:31:06", tone: "default" },
          { text: "[OK] Vendor paid 34000 on approved delivery.", time: "09:31:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes milestone payment into modular contracts. Each layer funds the batch, anchors delivery, gates on approval, and releases payment without an invoice waiting in a manual sign-off queue.",
    layers: [
      {
        title: "Milestone Vault",
        subtitle: "The Batch Lock",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Batch Lock",
          description:
            "The foundational data layer. It mints a milestone identity for each shot batch, locks its fee, and stores the immutable link to vendor and scope that governs release.",
          platformFunction: "Identity & Escrow",
        },
        codeSnippet:
          "contract MilestoneVault {\n  struct Milestone {\n    address vendor;\n    bytes32 batch;\n    uint256 fee;\n    bytes32 deliveredHash;\n    bool approved;\n  }\n\n  mapping(bytes32 => Milestone) public milestones;\n\n  function fund(bytes32 id, address vendor, bytes32 batch) external payable {\n    milestones[id] = Milestone(vendor, batch, msg.value, 0, false);\n  }\n}",
        simAction: "Simulate Milestone Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading studio budget authorization...", tone: "default" },
          { text: "Locking fee of 34000 into escrow...", tone: "default" },
          { text: "Binding batch scope to vendor...", tone: "default" },
          { text: "Writing milestone to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Milestone MST_2044 funded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Delivery Notary",
        subtitle: "The Submission Seal",
        icon: Palette,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Submission Seal",
          description:
            "Anchors the digest of each delivered batch so approval and payment reference the exact submitted work. It prevents ambiguity about which version of a shot batch was accepted.",
          platformFunction: "Provenance & Delivery",
        },
        codeSnippet:
          "function deliverBatch(bytes32 id, bytes32 deliveredHash) external {\n    Milestone storage m = milestones[id];\n    require(msg.sender == m.vendor, \"Not vendor\");\n    m.deliveredHash = deliveredHash;\n    emit BatchDelivered(id, deliveredHash);\n}",
        simAction: "Simulate Batch Delivery",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Vendor submitting 18-shot batch...", tone: "default" },
          { text: "Confirming vendor owns milestone...", tone: "default" },
          { text: "Computing digest of delivery...", tone: "default" },
          { text: "Anchoring delivery for review...", tone: "default" },
          { text: "[SUCCESS] Delivery sealed, awaiting approval.", tone: "success" },
        ],
      },
      {
        title: "Approval Gate",
        subtitle: "The Sign-Off Hook",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sign-Off Hook",
          description:
            "Records the supervisor's approval against the delivered digest. A milestone cannot pay until the approved hash matches the delivery, tying release to accepted work rather than elapsed time.",
          platformFunction: "Approval Control",
        },
        codeSnippet:
          "function approveBatch(bytes32 id, bytes32 hash) external {\n    Milestone storage m = milestones[id];\n    require(msg.sender == supervisorOf[id], \"Not supervisor\");\n    require(m.deliveredHash == hash, \"Hash mismatch\");\n    m.approved = true;\n    emit BatchApproved(id, hash);\n}",
        simAction: "Simulate Batch Approval",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Supervisor reviewing delivered batch...", tone: "default" },
          { text: "Confirming supervisor authority...", tone: "default" },
          { text: "Matching approved hash to delivery...", tone: "default" },
          { text: "Marking milestone approved...", tone: "default" },
          { text: "[SUCCESS] Approval recorded, payment unlocked.", tone: "success" },
        ],
      },
      {
        title: "Procurement Settler",
        subtitle: "The Milestone Payer",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Milestone Payer",
          description:
            "Releases the milestone fee on approval and records it in the procurement ledger. Revisions keep the milestone open and re-enter approval on resubmission, so payment always follows the accepted version.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function releaseMilestone(bytes32 id) external {\n    Milestone storage m = milestones[id];\n    require(m.approved, \"Not approved\");\n    _transfer(m.vendor, m.fee);\n    procurement[m.vendor].push(Record(id, m.fee, block.timestamp));\n    emit MilestonePaid(id, m.vendor, m.fee);\n}",
        simAction: "Simulate Milestone Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming batch approval for MST_2044...", tone: "default" },
          { text: "Computing fee owed to vendor...", tone: "default" },
          { text: "Transferring escrow to vendor wallet...", tone: "default" },
          { text: "Recording payment to procurement ledger...", tone: "default" },
          { text: "[SUCCESS] Vendor paid on approved delivery.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Milestone-based vendor payment is a horizontal capability. Here is how different actors in post-production put the escrow layer to work.",
    sectors: [
      { icon: Palette, title: "VFX & Post-Production Studios", description: "Deliver shots in batches and get paid on approval, easing the cash-flow strain that weeks of manual sign-off place on smaller vendors dependent on timely payment.", assetTypes: ["Shot Batches", "Milestone Payments", "Delivery Proofs"] },
      { icon: Building2, title: "Production Companies & Studios", description: "Fund work per milestone and release payment only against approved deliveries, tightening control over post-production spend with a shared, auditable procurement record.", assetTypes: ["Milestone Escrows", "Purchase Orders", "Approval Records"] },
      { icon: Handshake, title: "Production Managers & Coordinators", description: "Track which batches are approved, pending, or in revision across every vendor, replacing chased sign-offs and spreadsheets with a live milestone view.", assetTypes: ["Vendor Ledgers", "Revision Queues", "Payment Status"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a studio's production-management stack or onboarding vendors through a delivery portal, Cerulea routes both into one shared milestone record.",
    tracks: [
      {
        title: "Track A: Production-Management Bridging",
        description:
          "For studios on legacy production and procurement systems. Milestone and approval events are translated into signed on-chain payment records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Production / Procurement System", sublabel: "Studio Management Stack", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Milestone Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Procurement Milestone Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Vendor Delivery Portal",
        description:
          "For VFX and post vendors. A delivery portal signs each batch submission from a vendor wallet and receives milestone payment directly on approval.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Vendor Delivery Portal", sublabel: "Shot Submission App", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Approval Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Milestone Record", icon: Palette, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a milestone-based vendor payment system with escrow, delivery anchoring, and approval-gated release from scratch requires specialised engineers and long production-system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Milestone & Approval Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects production-finance integration benchmarks. Connecting production and procurement systems, coding escrow and approval-gate logic, and handling revision cycles for an average studio takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your milestone and approval rules into pre-audited WebAssembly binaries and provisions the procurement ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "regional-dubbing-and-distribution-rights-licensing",
    icon: Network,
    eyebrow: "Dubbing Rights Registry Layer",
    headline1: "License every language.",
    headline2: "Alert before expiry.",
    heroDescription:
      "Keep one definitive registry of which dubbing studio and distributor holds rights for which language and region, with automatic expiry alerts. The web of licensing agreements stops slipping through the cracks, and unauthorized releases after a license lapses are designed out.",
    heroCta: "Deploy Dubbing Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a tangled web of language and region licenses into one registry with built-in expiry alerts.",
    mechanics: [
      { title: "Language-Region Registry", description: "Record every grant precisely. Each license binds a title to a dubbing studio or distributor, a language, and a region, so the whole web of agreements resolves to one queryable record." },
      { title: "Royalty Standard Terms", description: "Encode the license economics. The Royalty Standard module turns per-language and per-region fees into executable terms, keeping the commercial split consistent across the network." },
      { title: "Provenance Notary", description: "Seal each agreement. The Provenance Notary module anchors the signed licensing contract by digest, so the rights a studio relies on cannot be quietly altered." },
      { title: "Automatic Expiry Alerts", description: "Warn ahead of lapse. The registry emits alerts before each language-region license expires, so a party renews or stops distributing rather than drifting into an unauthorized release." },
      { title: "Overlap Prevention", description: "Block conflicting grants. When a new dubbing or distribution right would collide with one already held for a language and region, the contract flags it before it ships." },
      { title: "Royalty Clearing", description: "Settle license fees on schedule. The Royalty Clearing module releases the encoded fee to the rights owner as each licensing term activates or renews, keeping payment tied to live rights." },
    ],
    lifecycleTitle: "The Dubbing Rights Lifecycle",
    lifecycleSubtitle:
      "Follow a single language-region right from its grant through a distribution check to an automatic expiry alert.",
    lifecycleSteps: [
      {
        label: "Rights Grant",
        description:
          "A rights owner grants a dubbing studio or distributor rights for a specific language and region. The contract anchors the terms and validity window.",
        icon: Handshake,
        logFilename: "cerulea_dubbing_rights.log",
        logLines: [
          { text: "[SYS] Initializing Dubbing Rights Manifest...", time: "08:50:16", tone: "default" },
          { text: "[CMD] grantDub { film: \"SKYLINE\", studio: \"VOXCAST\", lang: \"TA\", region: \"IN_TN\" }", time: "08:50:16", tone: "primary" },
          { text: "[AUTH] Sealing license via Provenance Notary...", time: "08:50:17", tone: "secondary" },
          { text: "[OK] Right DUB_5521 anchored, expiry 2028-03-31.", time: "08:50:17", tone: "success" },
        ],
      },
      {
        label: "Overlap Check",
        description:
          "The registry verifies no conflicting grant exists for the same title, language, and region before the new right activates.",
        icon: Search,
        logFilename: "cerulea_dubbing_rights.log",
        logLines: [
          { text: "[SYS] Scanning for language-region conflicts...", time: "08:50:18", tone: "default" },
          { text: "[CMD] checkOverlap(film: \"SKYLINE\", lang: \"TA\", region: \"IN_TN\")", time: "08:50:18", tone: "primary" },
          { text: "[SYS] No active grant found for this scope.", time: "08:50:19", tone: "default" },
          { text: "[OK] No conflict. Right cleared to activate.", time: "08:50:19", tone: "success" },
        ],
      },
      {
        label: "Distribution Check",
        description:
          "Before a distributor releases the dubbed title, its system confirms the language-region right is live for the intended market.",
        icon: Globe,
        logFilename: "cerulea_dubbing_rights.log",
        logLines: [
          { text: "[SYS] Distribution check requested by VOXCAST...", time: "15:22:44", tone: "default" },
          { text: "[CMD] verifyDub(DUB_5521, date: 2026-09-19)", time: "15:22:44", tone: "primary" },
          { text: "[AUTH] Confirming language, region, and window...", time: "15:22:45", tone: "secondary" },
          { text: "[OK] Right active. Distribution authorized.", time: "15:22:45", tone: "success" },
        ],
      },
      {
        label: "Expiry Alert",
        description:
          "As the validity window nears its end, the registry emits a renewal alert and lapses the right on expiry, blocking further distribution checks.",
        icon: Lock,
        logFilename: "cerulea_dubbing_rights.log",
        logLines: [
          { text: "[SYS] Right DUB_5521 approaching expiry...", time: "00:00:05", tone: "default" },
          { text: "[CMD] emitExpiryAlert(DUB_5521, daysLeft: 30)", time: "00:00:05", tone: "primary" },
          { text: "[SYS] Alert dispatched to studio and rights owner.", time: "00:00:06", tone: "muted" },
          { text: "[OK] Renewal window open, lapse enforced on expiry.", time: "00:00:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes dubbing rights into modular contracts. Each layer records the grant, prevents overlaps, verifies distribution, and alerts on expiry without any distributor holding a private, conflicting list.",
    layers: [
      {
        title: "Dub Rights Registry",
        subtitle: "The License Passport",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The License Passport",
          description:
            "The foundational data layer. It mints a right identity per language-region grant and stores the immutable link to studio, language, region, and validity window that every check reads.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract DubRightsRegistry {\n  struct DubRight {\n    bytes32 film;\n    address holder;\n    bytes32 language;\n    bytes32 region;\n    uint256 expiry;\n    bool active;\n  }\n\n  mapping(bytes32 => DubRight) public rights;\n\n  function grant(bytes32 id, bytes32 film, bytes32 lang, bytes32 region, uint256 expiry) external {\n    rights[id] = DubRight(film, msg.sender, lang, region, expiry, true);\n  }\n}",
        simAction: "Simulate Rights Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading rights owner credential...", tone: "default" },
          { text: "Binding title to Tamil, Tamil Nadu...", tone: "default" },
          { text: "Setting validity window to 2028-03-31...", tone: "default" },
          { text: "Writing right identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Right DUB_5521 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Overlap Guard",
        subtitle: "The Conflict Detector",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conflict Detector",
          description:
            "Blocks double-licensing of the same language and region. Before a grant activates, it scans active rights for a collision, turning a silent conflict into an explicit rejection.",
          platformFunction: "Conflict Validation",
        },
        codeSnippet:
          "function checkOverlap(bytes32 film, bytes32 lang, bytes32 region) public view returns (bool) {\n    bytes32[] memory ids = byScope[film][lang][region];\n    for (uint256 i = 0; i < ids.length; i++) {\n        if (rights[ids[i]].active) return false;\n    }\n    return true;\n}",
        simAction: "Simulate Overlap Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading active rights for SKYLINE...", tone: "default" },
          { text: "Filtering to Tamil, Tamil Nadu scope...", tone: "default" },
          { text: "Testing for active collision...", tone: "default" },
          { text: "No overlapping grant detected...", tone: "default" },
          { text: "[SUCCESS] Scope clear, grant permitted.", tone: "success" },
        ],
      },
      {
        title: "Distribution Verifier",
        subtitle: "The Release Gate",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Release Gate",
          description:
            "Confirms a language-region right is live before a dubbed title ships to a market. It rejects any distribution check against an expired or inactive right at the protocol level.",
          platformFunction: "Distribution Control",
        },
        codeSnippet:
          "function verifyDub(bytes32 id, uint256 releaseDate) external view returns (bool) {\n    DubRight memory r = rights[id];\n    require(r.active, \"Inactive\");\n    require(releaseDate <= r.expiry, \"Expired\");\n    return true;\n}",
        simAction: "Simulate Distribution Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading validity window for DUB_5521...", tone: "default" },
          { text: "Confirming right is active...", tone: "default" },
          { text: "Comparing release date to expiry...", tone: "default" },
          { text: "Authorizing market release...", tone: "default" },
          { text: "[SUCCESS] Distribution authorized on live right.", tone: "success" },
        ],
      },
      {
        title: "Expiry Alerter",
        subtitle: "The Renewal Clock",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Renewal Clock",
          description:
            "Emits renewal alerts ahead of each expiry and lapses the right when its window closes. It gives every party warning to renew and blocks post-expiry distribution automatically.",
          platformFunction: "Expiry Enforcement",
        },
        codeSnippet:
          "function emitExpiryAlert(bytes32 id) external {\n    DubRight storage r = rights[id];\n    if (block.timestamp >= r.expiry) {\n        r.active = false;\n        emit RightLapsed(id);\n    } else if (r.expiry - block.timestamp <= 30 days) {\n        emit ExpiryWarning(id, r.expiry);\n    }\n}",
        simAction: "Simulate Expiry Alert",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading expiry window for DUB_5521...", tone: "default" },
          { text: "Detecting 30 days remaining...", tone: "default" },
          { text: "Dispatching renewal alert...", tone: "default" },
          { text: "Arming lapse enforcement on expiry...", tone: "default" },
          { text: "[SUCCESS] Expiry alert issued to all parties.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Language-region rights tracking is a horizontal capability. Here is how different actors in localized distribution put the registry to work.",
    sectors: [
      { icon: Network, title: "Rights Owners & Studios", description: "License a title into many languages and regions from one registry that prevents overlaps and warns before every expiry, ending the manual tracking that lets rights slip.", assetTypes: ["Language Grants", "Region Licenses", "Renewal Alerts"] },
      { icon: Globe, title: "Dubbing Studios & Distributors", description: "Confirm in real time that a dubbed release is cleared for a language and market, and hold a sealed record of the rights obtained for each territory.", assetTypes: ["Distribution Rights", "Market Clearances", "License Proofs"] },
      { icon: Gavel, title: "Rights Auditors & Regulators", description: "Query the registry to confirm no dubbed title is distributed past expiry or outside its licensed region, replacing after-the-fact investigations with a live view.", assetTypes: ["Compliance Records", "Expiry Audits", "Scope Maps"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a studio's localization-management system or onboarding dubbing partners through a portal, Cerulea routes both into one shared dubbing registry.",
    tracks: [
      {
        title: "Track A: Localization-System Bridging",
        description:
          "For studios on legacy localization and rights systems. Grants and renewals are translated into signed on-chain rights records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Localization System", sublabel: "Studio Rights Catalogue", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Grant Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Dubbing Rights Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Dubbing Partner Portal",
        description:
          "For dubbing studios and distributors. A portal signs each distribution check from a partner wallet and reads the registry directly before releasing a dubbed title.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Partner Portal", sublabel: "Localization & Release App", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Rights Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Dubbing Registry", icon: Network, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a language-region rights registry with overlap prevention, distribution checks, and automatic expiry alerts from scratch requires specialised engineers and long localization-system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Language & Expiry Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects localization-rights integration benchmarks. Consolidating language and region data, coding overlap and expiry logic, and building a shared clearance view for an average catalogue takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your language and expiry rules into pre-audited WebAssembly binaries and provisions the dubbing rights registry instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "digital-advertising-spend-verification-and-anti-fraud-attribution",
    icon: Shield,
    eyebrow: "Ad Fraud Verification Layer",
    headline1: "Verify every impression.",
    headline2: "Make bot fraud impossible.",
    heroDescription:
      "Run a private advertising verification chain with real-time bot detection, verified impression anchoring, and fraud-gated billing. Advertisers audit every impression they are billed for against a tamper-proof record, and billing for bot fraud becomes structurally impossible.",
    heroCta: "Deploy Ad Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an unverifiable impression count into a fraud-gated, tamper-proof billing record.",
    mechanics: [
      { title: "Real-Time Bot Detection", description: "Screen traffic as it arrives. The Ad Measurement and Anti-Fraud module scores each impression for bot signals in real time, so invalid traffic is caught before it enters the billable count." },
      { title: "Verified Impression Anchoring", description: "Record only clean impressions. The Provenance Notary module anchors each impression that passes fraud screening, building a tamper-proof record of genuine delivery." },
      { title: "Fraud-Gated Billing", description: "Bill against verified delivery only. The contract computes charges from anchored, screened impressions, so an advertiser is never billed for traffic that failed detection." },
      { title: "Audit Logs", description: "Preserve the full trail. The Audit Logs module keeps a signed record of every impression, its fraud score, and its billing status, giving advertisers a complete basis for audit." },
      { title: "Independent Impression Audit", description: "Let advertisers check for themselves. Buyers query the anchored record to reconcile billed impressions against verified delivery, ending reliance on the platform's own reporting." },
      { title: "Discrepancy Flagging", description: "Surface invalid traffic. When detection rejects a block of impressions, the discrepancy is logged as evidence, so disputed traffic resolves against data rather than assertions." },
    ],
    lifecycleTitle: "The Impression Verification Lifecycle",
    lifecycleSubtitle:
      "Follow a single ad impression from serving through real-time fraud screening to anchoring and fraud-gated billing.",
    lifecycleSteps: [
      {
        label: "Impression Served",
        description:
          "An ad impression is served on a publisher's inventory. The event is captured with its context for real-time fraud screening.",
        icon: Zap,
        logFilename: "cerulea_ad_verify.log",
        logLines: [
          { text: "[SYS] Impression event received from PUB_STREAM...", time: "13:02:11", tone: "default" },
          { text: "[CMD] ingestImpression { campaign: \"BRAND_X\", imp: \"IMP_9f21\" }", time: "13:02:11", tone: "primary" },
          { text: "[SYS] Capturing device, context, and timing signals.", time: "13:02:11", tone: "default" },
          { text: "[OK] Impression staged for fraud screening.", time: "13:02:11", tone: "success" },
        ],
      },
      {
        label: "Fraud Screening",
        description:
          "The Anti-Fraud module scores the impression for bot signals in real time, admitting genuine traffic and rejecting invalid impressions.",
        icon: Search,
        logFilename: "cerulea_ad_verify.log",
        logLines: [
          { text: "[SYS] Scoring IMP_9f21 for bot signals...", time: "13:02:12", tone: "default" },
          { text: "[CMD] scoreImpression(IMP_9f21)", time: "13:02:12", tone: "primary" },
          { text: "[AUTH] Signals within human range, score 0.04...", time: "13:02:12", tone: "secondary" },
          { text: "[OK] Impression passed. Cleared to anchor.", time: "13:02:12", tone: "success" },
        ],
      },
      {
        label: "Impression Anchoring",
        description:
          "The verified impression is anchored to the chain, adding to a tamper-proof record of genuine delivery for the campaign.",
        icon: FileCheck,
        logFilename: "cerulea_ad_verify.log",
        logLines: [
          { text: "[SYS] Anchoring verified impression IMP_9f21...", time: "13:02:13", tone: "default" },
          { text: "[CMD] anchorImpression(IMP_9f21, score: 0.04)", time: "13:02:13", tone: "primary" },
          { text: "[SYS] Appending to campaign delivery record...", time: "13:02:13", tone: "default" },
          { text: "[OK] Impression anchored, billable and verified.", time: "13:02:13", tone: "success" },
        ],
      },
      {
        label: "Fraud-Gated Billing",
        description:
          "Billing is computed only from anchored, verified impressions, so the advertiser is charged strictly for delivery that passed detection.",
        icon: Wallet,
        logFilename: "cerulea_ad_verify.log",
        logLines: [
          { text: "[SYS] Closing billing window for BRAND_X...", time: "23:59:50", tone: "default" },
          { text: "[CMD] billVerified(campaign: \"BRAND_X\")", time: "23:59:50", tone: "primary" },
          { text: "[SYS] Excluding 2140 rejected bot impressions...", time: "23:59:51", tone: "muted" },
          { text: "[OK] Billed on verified impressions only.", time: "23:59:51", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes ad verification into modular contracts. Each layer ingests the impression, screens for fraud, anchors verified delivery, and bills without any invalid traffic reaching the charge.",
    layers: [
      {
        title: "Impression Intake",
        subtitle: "The Event Collector",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Event Collector",
          description:
            "The ingestion layer. It captures each served impression with its device and context signals, staging it for fraud screening before it can ever be counted as billable.",
          platformFunction: "Event Intake",
        },
        codeSnippet:
          "contract ImpressionIntake {\n  struct Impression {\n    bytes32 campaign;\n    bytes32 signals;\n    uint8 status;\n  }\n\n  mapping(bytes32 => Impression) public impressions;\n\n  function ingest(bytes32 id, bytes32 campaign, bytes32 signals) external onlyPublisher {\n    impressions[id] = Impression(campaign, signals, 0);\n    emit Ingested(id, campaign);\n  }\n}",
        simAction: "Simulate Impression Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving impression from PUB_STREAM...", tone: "default" },
          { text: "Capturing device and context signals...", tone: "default" },
          { text: "Binding impression to campaign BRAND_X...", tone: "default" },
          { text: "Staging for fraud screening...", tone: "default" },
          { text: "[SUCCESS] Impression IMP_9f21 ingested.", tone: "success" },
        ],
      },
      {
        title: "Fraud Scorer",
        subtitle: "The Bot Filter",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Bot Filter",
          description:
            "Bypasses trust in raw counts. It scores each impression's signals for bot behavior and admits only genuine traffic, stopping invalid impressions before they enter the billable record.",
          platformFunction: "Anti-Fraud Validation",
        },
        codeSnippet:
          "contract FraudScorer {\n  function scoreImpression(bytes32 id) external returns (bool) {\n    uint256 score = model.evaluate(impressions[id].signals);\n    bool human = score < threshold;\n    impressions[id].status = human ? 1 : 2;\n    emit Scored(id, score, human);\n    return human;\n  }\n}",
        simAction: "Simulate Fraud Screening",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading signals for IMP_9f21...", tone: "default" },
          { text: "Evaluating bot-behavior model...", tone: "default" },
          { text: "Score 0.04 within human range...", tone: "default" },
          { text: "Marking impression as verified...", tone: "default" },
          { text: "[SUCCESS] Genuine impression admitted.", tone: "success" },
        ],
      },
      {
        title: "Delivery Notary",
        subtitle: "The Verified Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Record",
          description:
            "Anchors only screened impressions to a tamper-proof delivery record. The anchored count becomes the single source advertisers audit against, immune to later inflation.",
          platformFunction: "Provenance & Delivery",
        },
        codeSnippet:
          "function anchorImpression(bytes32 id) external onlyScorer {\n    require(impressions[id].status == 1, \"Not verified\");\n    bytes32 c = impressions[id].campaign;\n    verifiedCount[c] += 1;\n    emit ImpressionAnchored(id, c, block.number);\n}",
        simAction: "Simulate Impression Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming IMP_9f21 passed screening...", tone: "default" },
          { text: "Appending to verified delivery record...", tone: "default" },
          { text: "Incrementing verified impression count...", tone: "default" },
          { text: "Sealing to tamper-proof ledger...", tone: "default" },
          { text: "[SUCCESS] Verified impression anchored.", tone: "success" },
        ],
      },
      {
        title: "Billing Gate",
        subtitle: "The Fraud-Proof Charger",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fraud-Proof Charger",
          description:
            "Computes charges strictly from anchored, verified impressions. Because rejected traffic never reaches the count, billing an advertiser for bot fraud is structurally impossible.",
          platformFunction: "Fraud-Gated Billing",
        },
        codeSnippet:
          "function billVerified(bytes32 campaign, uint256 cpm) external view returns (uint256) {\n    uint256 verified = verifiedCount[campaign];\n    return (verified * cpm) / 1000;\n}",
        simAction: "Simulate Fraud-Gated Billing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified impression count...", tone: "default" },
          { text: "Excluding 2140 rejected bot impressions...", tone: "default" },
          { text: "Applying campaign CPM...", tone: "default" },
          { text: "Computing charge on clean delivery...", tone: "default" },
          { text: "[SUCCESS] Billed on verified impressions only.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Fraud-gated ad verification is a horizontal capability. Here is how different actors in digital advertising put the verification chain to work.",
    sectors: [
      { icon: Boxes, title: "Advertisers & Brands", description: "Audit every billed impression against a tamper-proof record of verified delivery, ending payment for bot traffic and reclaiming spend lost to inflated impression counts.", assetTypes: ["Verified Impressions", "Billing Records", "Fraud Reports"] },
      { icon: Globe, title: "Publishers & Content Platforms", description: "Prove the quality of delivered inventory with anchored, screened impressions, differentiating clean traffic and defending rates against blanket fraud discounts.", assetTypes: ["Inventory Delivery", "Screening Scores", "Quality Proofs"] },
      { icon: PieChart, title: "Agencies & Verification Partners", description: "Reconcile campaign delivery against an independent on-chain record, replacing platform-reported numbers with an auditable, fraud-screened source of truth.", assetTypes: ["Delivery Audits", "Discrepancy Logs", "Attribution Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an ad server's delivery logs or wiring a fraud-detection provider into the feed, Cerulea routes both into one verified impression record.",
    tracks: [
      {
        title: "Track A: Ad-Server Log Bridging",
        description:
          "For platforms on legacy ad servers. Impression events are translated into signed, fraud-screened on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Ad Server / DSP", sublabel: "Impression Delivery Logs", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Screening & Anchoring", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Verified Impression Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Fraud-Detection Feed",
        description:
          "For anti-fraud providers. A signed detection client streams impression scores directly to the ledger, gating the anchored record and downstream billing.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Fraud-Detection Provider", sublabel: "Bot Scoring Engine", icon: Search, accent: false },
          { label: "Consortium Validators", sublabel: "Verification Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Delivery Record", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a fraud-gated ad verification chain with real-time bot detection, verified impression anchoring, and audit-grade billing from scratch requires specialised engineers and long ad-tech integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Detection & Billing Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects ad-verification integration benchmarks. Wiring ad-server logs, coding real-time fraud scoring, and building tamper-proof anchoring and billing for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your detection and billing rules into pre-audited WebAssembly binaries and provisions the verified impression ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "influencer-marketing-campaign-performance-and-payment-verification",
    icon: Users,
    eyebrow: "Influencer Performance Settlement Layer",
    headline1: "Pay on real performance.",
    headline2: "Not on a screenshot.",
    heroDescription:
      "Pay influencers automatically against verified post performance rather than self-reported numbers. The system connects to verified platform data for each post and releases payment once the agreed threshold is confirmed, removing trust in screenshots.",
    heroCta: "Deploy Performance Payments",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn self-reported screenshots into verified, threshold-triggered influencer payment.",
    mechanics: [
      { title: "Verified Performance Oracle", description: "Read metrics from the source. The External Data Oracles module connects to verified platform data for each post's actual views, engagement, and conversions, replacing self-reported figures." },
      { title: "Campaign Escrow", description: "Fund the deal up front. The Escrow and Conditional Settlement module locks the brand's payment against agreed performance targets, so the influencer knows funds are reserved." },
      { title: "Threshold-Gated Release", description: "Pay when targets are met. Escrow releases automatically once verified metrics reach the agreed threshold, tying payment to real performance instead of a claimed number." },
      { title: "Tiered Payout Logic", description: "Reward measured results. Payout can scale with verified performance tiers, so an influencer who exceeds a target is paid accordingly, all computed from oracle data." },
      { title: "Audit Logs", description: "Keep a verifiable record. The Audit Logs module records the metrics read, the threshold, and the payout for each post, giving brand and influencer a shared account of the deal." },
      { title: "Dispute-Free Settlement", description: "Remove the screenshot argument. Because payment references verified platform data, there is no back-and-forth over whether a post really hit its numbers." },
    ],
    lifecycleTitle: "The Campaign Payment Lifecycle",
    lifecycleSubtitle:
      "Follow a single influencer post from campaign funding through verified performance to threshold-triggered payment.",
    lifecycleSteps: [
      {
        label: "Campaign Funding",
        description:
          "A brand funds a campaign and sets the performance target and payout for an influencer. The contract locks payment in escrow against the agreed threshold.",
        icon: Handshake,
        logFilename: "cerulea_influencer.log",
        logLines: [
          { text: "[SYS] Initializing Campaign Manifest...", time: "10:41:08", tone: "default" },
          { text: "[CMD] fundCampaign { influencer: \"@nova\", target: 50000, fee: 1800 }", time: "10:41:08", tone: "primary" },
          { text: "[AUTH] Locking payout into escrow...", time: "10:41:09", tone: "secondary" },
          { text: "[OK] Campaign CMP_3390 funded at block 5910442.", time: "10:41:09", tone: "success" },
        ],
      },
      {
        label: "Post Published",
        description:
          "The influencer publishes the agreed post. Its identifier is registered with the campaign so its performance can be tracked from verified data.",
        icon: Activity,
        logFilename: "cerulea_influencer.log",
        logLines: [
          { text: "[SYS] Registering post for CMP_3390...", time: "12:15:52", tone: "default" },
          { text: "[CMD] registerPost(CMP_3390, postId: \"P_88f2\")", time: "12:15:52", tone: "primary" },
          { text: "[SYS] Binding post identifier to campaign...", time: "12:15:53", tone: "default" },
          { text: "[OK] Post tracked, awaiting performance data.", time: "12:15:53", tone: "success" },
        ],
      },
      {
        label: "Performance Verification",
        description:
          "The External Data Oracle reads the post's actual metrics from verified platform data and reports them to the contract for evaluation.",
        icon: Search,
        logFilename: "cerulea_influencer.log",
        logLines: [
          { text: "[SYS] Polling verified platform data for P_88f2...", time: "20:30:14", tone: "default" },
          { text: "[CMD] readMetrics(P_88f2)", time: "20:30:14", tone: "primary" },
          { text: "[AUTH] Verified views 61200, engagement 7.4 percent...", time: "20:30:15", tone: "secondary" },
          { text: "[OK] Metrics confirmed above 50000 target.", time: "20:30:15", tone: "success" },
        ],
      },
      {
        label: "Threshold Payout",
        description:
          "With verified metrics past the agreed threshold, escrow releases the payout to the influencer automatically, recorded in the audit log.",
        icon: Wallet,
        logFilename: "cerulea_influencer.log",
        logLines: [
          { text: "[SYS] Evaluating payout condition for CMP_3390...", time: "20:30:40", tone: "default" },
          { text: "[CMD] releaseOnThreshold(CMP_3390)", time: "20:30:40", tone: "primary" },
          { text: "[SYS] Threshold met. Writing to audit log...", time: "20:30:41", tone: "default" },
          { text: "[OK] Influencer paid on verified performance.", time: "20:30:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes performance payment into modular contracts. Each layer funds the campaign, tracks the post, verifies metrics from the source, and pays on threshold without a screenshot in the loop.",
    layers: [
      {
        title: "Campaign Vault",
        subtitle: "The Deal Lock",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Deal Lock",
          description:
            "The foundational data layer. It mints a campaign identity, locks the payout, and stores the immutable link to influencer, target, and tier logic that governs release.",
          platformFunction: "Identity & Escrow",
        },
        codeSnippet:
          "contract CampaignVault {\n  struct Campaign {\n    address influencer;\n    uint256 target;\n    uint256 fee;\n    bytes32 postId;\n    bool paid;\n  }\n\n  mapping(bytes32 => Campaign) public campaigns;\n\n  function fund(bytes32 id, address influencer, uint256 target) external payable {\n    campaigns[id] = Campaign(influencer, target, msg.value, 0, false);\n  }\n}",
        simAction: "Simulate Campaign Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading brand budget authorization...", tone: "default" },
          { text: "Locking payout of 1800 into escrow...", tone: "default" },
          { text: "Setting performance target to 50000...", tone: "default" },
          { text: "Writing campaign to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Campaign CMP_3390 funded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Performance Oracle",
        subtitle: "The Verified Metrics Feed",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Metrics Feed",
          description:
            "Connects to verified platform data for each post. It reports actual views, engagement, and conversions signed by the source, so payment rests on real metrics rather than an influencer's claim.",
          platformFunction: "External Data Validation",
        },
        codeSnippet:
          "contract PerformanceOracle {\n  function readMetrics(bytes32 postId) external returns (uint256) {\n    (uint256 views, bytes memory sig) = platform.getStats(postId);\n    require(verifyProvider(sig), \"Untrusted source\");\n    metrics[postId] = views;\n    return views;\n  }\n}",
        simAction: "Simulate Metrics Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Querying verified platform stats for P_88f2...", tone: "default" },
          { text: "Verifying data provider signature...", tone: "default" },
          { text: "Reading confirmed views of 61200...", tone: "default" },
          { text: "Recording verified metrics...", tone: "default" },
          { text: "[SUCCESS] Verified performance data admitted.", tone: "success" },
        ],
      },
      {
        title: "Threshold Evaluator",
        subtitle: "The Target Check",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Target Check",
          description:
            "Compares verified metrics against the agreed target and computes any tiered payout. It converts a performance claim into a deterministic pass or fail on real data.",
          platformFunction: "Threshold Logic",
        },
        codeSnippet:
          "function evaluate(bytes32 id) public view returns (bool met, uint256 payout) {\n    Campaign memory c = campaigns[id];\n    uint256 v = metrics[c.postId];\n    met = v >= c.target;\n    payout = met ? c.fee * tierMultiplier(v, c.target) / 100 : 0;\n}",
        simAction: "Simulate Threshold Evaluation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verified metrics for P_88f2...", tone: "default" },
          { text: "Comparing 61200 against target 50000...", tone: "default" },
          { text: "Target exceeded, computing tier...", tone: "default" },
          { text: "Resolving final payout amount...", tone: "default" },
          { text: "[SUCCESS] Threshold met, payout computed.", tone: "success" },
        ],
      },
      {
        title: "Settlement Ledger",
        subtitle: "The Screenshot-Free Payer",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Screenshot-Free Payer",
          description:
            "Releases escrow on a met threshold and records the metrics, target, and payout in the audit log. Because settlement references verified data, the screenshot dispute disappears.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function releaseOnThreshold(bytes32 id) external {\n    (bool met, uint256 payout) = evaluate(id);\n    require(met, \"Target not met\");\n    Campaign storage c = campaigns[id];\n    c.paid = true;\n    _transfer(c.influencer, payout);\n    emit PerformancePaid(id, payout);\n}",
        simAction: "Simulate Threshold Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming threshold met for CMP_3390...", tone: "default" },
          { text: "Computing verified payout...", tone: "default" },
          { text: "Transferring escrow to influencer...", tone: "default" },
          { text: "Writing metrics and payout to audit log...", tone: "default" },
          { text: "[SUCCESS] Influencer paid on verified data.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Performance-verified payment is a horizontal capability. Here is how different actors in influencer marketing put the settlement layer to work.",
    sectors: [
      { icon: Boxes, title: "Brands & Advertisers", description: "Pay only for performance confirmed by verified platform data, eliminating spend on inflated self-reported numbers and settling campaigns against a shared, auditable record.", assetTypes: ["Campaign Escrows", "Performance Payouts", "Audit Records"] },
      { icon: Users, title: "Influencers & Creators", description: "Get paid automatically the moment verified metrics hit the agreed target, with transparent tiered rewards for over-performance and no waiting on a brand's manual review.", assetTypes: ["Performance Fees", "Tier Bonuses", "Payment Receipts"] },
      { icon: PieChart, title: "Agencies & Talent Managers", description: "Run campaigns across many creators with payment tied to verified results, replacing screenshot reconciliation with a live, data-driven settlement dashboard.", assetTypes: ["Creator Campaigns", "Verified Metrics", "Settlement Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an agency's campaign-management tools or wiring verified platform data into the feed, Cerulea routes both into one performance settlement record.",
    tracks: [
      {
        title: "Track A: Campaign-Management Bridging",
        description:
          "For brands and agencies on legacy campaign tools. Funding and settlement events are translated into signed on-chain campaign records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Campaign-Management Tool", sublabel: "Agency Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Escrow Encoding & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Performance Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Verified Data Feed",
        description:
          "For platform-data providers. A signed oracle client streams verified post metrics directly to the ledger, gating threshold evaluation and payout.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Platform Data Provider", sublabel: "Verified Metrics Source", icon: Search, accent: false },
          { label: "Consortium Validators", sublabel: "Metrics Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Performance Record", icon: Users, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a performance-verified payment system with platform-data oracles, escrow, and threshold-gated payout from scratch requires specialised engineers and long data-integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Performance & Payout Rules",
      ruleCount: 33,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects influencer-platform integration benchmarks. Connecting verified data sources, coding escrow and threshold logic, and building tiered payout for an average program takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your performance and payout rules into pre-audited WebAssembly binaries and provisions the settlement ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "brand-safety-verification-for-ad-placement-on-content-platforms",
    icon: FileCheck,
    eyebrow: "Brand Safety Verification Layer",
    headline1: "Anchor every placement.",
    headline2: "Prove the context.",
    heroDescription:
      "Anchor a verified record of the content context for each ad placement, confirming it appeared on brand-safe content as agreed with the publisher. Brands and their agencies gain independent evidence of where ads actually ran, beyond the platform's own reporting.",
    heroCta: "Deploy Brand Safety Proofs",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn platform-reported placement into an independently verifiable record of ad context.",
    mechanics: [
      { title: "Context Classification", description: "Read the content around the ad. The External Data Oracles module supplies a classification of the content each impression ran against, so placement context is captured rather than assumed." },
      { title: "Placement Provenance", description: "Anchor where each ad ran. The Provenance Notary module seals the content context and placement for every impression, creating a tamper-evident record independent of the platform." },
      { title: "Brand-Safety Rules", description: "Encode the advertiser's line. Each campaign's acceptable content categories are encoded, so a placement is checked against the exact safety terms agreed with the publisher." },
      { title: "Violation Flagging", description: "Surface unsafe placements. When an impression runs against content outside the agreed categories, the contract flags it as a violation with anchored evidence rather than a complaint." },
      { title: "Audit Logs", description: "Preserve the placement trail. The Audit Logs module records the context, rule, and outcome for every placement, giving brands and agencies a complete basis for post-campaign audit." },
      { title: "Independent Evidence", description: "Escape platform-only reporting. Brands query the anchored record to verify where ads appeared for themselves, replacing trust in the platform's after-the-fact report." },
    ],
    lifecycleTitle: "The Placement Verification Lifecycle",
    lifecycleSubtitle:
      "Follow a single ad placement from serving through content classification to anchored verification or violation flagging.",
    lifecycleSteps: [
      {
        label: "Placement Served",
        description:
          "An ad is placed against a piece of content on a platform. The impression and its content context are captured for verification.",
        icon: Zap,
        logFilename: "cerulea_brand_safety.log",
        logLines: [
          { text: "[SYS] Placement event received from PLAT_VIEW...", time: "14:22:05", tone: "default" },
          { text: "[CMD] ingestPlacement { campaign: \"BRAND_Y\", content: \"VID_51a\" }", time: "14:22:05", tone: "primary" },
          { text: "[SYS] Capturing content reference for classification.", time: "14:22:05", tone: "default" },
          { text: "[OK] Placement staged for context check.", time: "14:22:05", tone: "success" },
        ],
      },
      {
        label: "Content Classification",
        description:
          "The External Data Oracle classifies the content the ad ran against, supplying the context for a brand-safety evaluation.",
        icon: Search,
        logFilename: "cerulea_brand_safety.log",
        logLines: [
          { text: "[SYS] Classifying content VID_51a...", time: "14:22:06", tone: "default" },
          { text: "[CMD] classifyContent(VID_51a)", time: "14:22:06", tone: "primary" },
          { text: "[AUTH] Category returned: FAMILY_LIFESTYLE...", time: "14:22:06", tone: "secondary" },
          { text: "[OK] Context established for evaluation.", time: "14:22:06", tone: "success" },
        ],
      },
      {
        label: "Safety Evaluation",
        description:
          "The classification is checked against the campaign's encoded brand-safety rules to confirm the placement met the agreed categories.",
        icon: ShieldCheck,
        logFilename: "cerulea_brand_safety.log",
        logLines: [
          { text: "[SYS] Evaluating placement against BRAND_Y rules...", time: "14:22:07", tone: "default" },
          { text: "[CMD] checkSafety(campaign: \"BRAND_Y\", cat: \"FAMILY_LIFESTYLE\")", time: "14:22:07", tone: "primary" },
          { text: "[SYS] Category within agreed safe list.", time: "14:22:07", tone: "default" },
          { text: "[OK] Placement brand-safe, cleared to anchor.", time: "14:22:07", tone: "success" },
        ],
      },
      {
        label: "Evidence Anchoring",
        description:
          "The verified context and outcome are anchored as tamper-evident evidence, giving the brand an independent record of where its ad appeared.",
        icon: FileCheck,
        logFilename: "cerulea_brand_safety.log",
        logLines: [
          { text: "[SYS] Anchoring placement evidence for BRAND_Y...", time: "14:22:08", tone: "default" },
          { text: "[CMD] anchorPlacement(content: \"VID_51a\", cat: \"FAMILY_LIFESTYLE\")", time: "14:22:08", tone: "primary" },
          { text: "[SYS] Sealing context to audit log...", time: "14:22:08", tone: "default" },
          { text: "[OK] Independent placement evidence recorded.", time: "14:22:08", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes brand-safety verification into modular contracts. Each layer ingests the placement, classifies the content, evaluates the rules, and anchors evidence without relying on the platform's own report.",
    layers: [
      {
        title: "Placement Intake",
        subtitle: "The Context Collector",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Context Collector",
          description:
            "The ingestion layer. It captures each ad placement with a reference to the content it ran against, staging the context for classification and brand-safety evaluation.",
          platformFunction: "Event Intake",
        },
        codeSnippet:
          "contract PlacementIntake {\n  struct Placement {\n    bytes32 campaign;\n    bytes32 content;\n    bytes32 category;\n    uint8 status;\n  }\n\n  mapping(bytes32 => Placement) public placements;\n\n  function ingest(bytes32 id, bytes32 campaign, bytes32 content) external onlyPlatform {\n    placements[id] = Placement(campaign, content, 0, 0);\n    emit Ingested(id, campaign, content);\n  }\n}",
        simAction: "Simulate Placement Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving placement from PLAT_VIEW...", tone: "default" },
          { text: "Capturing content reference VID_51a...", tone: "default" },
          { text: "Binding placement to campaign BRAND_Y...", tone: "default" },
          { text: "Staging for classification...", tone: "default" },
          { text: "[SUCCESS] Placement ingested for review.", tone: "success" },
        ],
      },
      {
        title: "Content Classifier",
        subtitle: "The Context Oracle",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Context Oracle",
          description:
            "Supplies an independent classification of the content each ad ran against. It converts the placement context into signed data, so brand-safety rests on evidence rather than the platform's word.",
          platformFunction: "External Data Validation",
        },
        codeSnippet:
          "contract ContentClassifier {\n  function classifyContent(bytes32 contentId) external returns (bytes32) {\n    (bytes32 cat, bytes memory sig) = classifier.getCategory(contentId);\n    require(verifyProvider(sig), \"Untrusted classifier\");\n    categories[contentId] = cat;\n    return cat;\n  }\n}",
        simAction: "Simulate Content Classification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Requesting classification for VID_51a...", tone: "default" },
          { text: "Verifying classifier signature...", tone: "default" },
          { text: "Category returned as family lifestyle...", tone: "default" },
          { text: "Recording verified context...", tone: "default" },
          { text: "[SUCCESS] Content context established.", tone: "success" },
        ],
      },
      {
        title: "Safety Evaluator",
        subtitle: "The Rule Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rule Check",
          description:
            "Compares the content category against the campaign's encoded safe list. It flags any placement outside the agreed categories as a violation, turning a complaint into anchored evidence.",
          platformFunction: "Brand-Safety Logic",
        },
        codeSnippet:
          "function checkSafety(bytes32 id) public view returns (bool) {\n    Placement memory p = placements[id];\n    bytes32 cat = categories[p.content];\n    return safeCategories[p.campaign][cat];\n}",
        simAction: "Simulate Safety Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading safe categories for BRAND_Y...", tone: "default" },
          { text: "Reading classified context...", tone: "default" },
          { text: "Testing category against safe list...", tone: "default" },
          { text: "Category confirmed within agreed terms...", tone: "default" },
          { text: "[SUCCESS] Placement evaluated brand-safe.", tone: "success" },
        ],
      },
      {
        title: "Evidence Notary",
        subtitle: "The Independent Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Independent Record",
          description:
            "Anchors the verified context and safety outcome for each placement to a tamper-evident log. It gives brands and agencies proof of where ads appeared that stands apart from the platform's report.",
          platformFunction: "Provenance & Audit",
        },
        codeSnippet:
          "function anchorPlacement(bytes32 id) external onlyEvaluator {\n    Placement storage p = placements[id];\n    p.category = categories[p.content];\n    p.status = checkSafety(id) ? 1 : 2;\n    evidence[p.campaign].push(id);\n    emit PlacementAnchored(id, p.category, p.status);\n}",
        simAction: "Simulate Evidence Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading evaluated placement outcome...", tone: "default" },
          { text: "Binding context to placement record...", tone: "default" },
          { text: "Appending to campaign evidence...", tone: "default" },
          { text: "Sealing to tamper-evident audit log...", tone: "default" },
          { text: "[SUCCESS] Independent placement evidence anchored.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Independent brand-safety verification is a horizontal capability. Here is how different actors in advertising put the placement record to work.",
    sectors: [
      { icon: Boxes, title: "Brands & Advertisers", description: "Gain independent evidence of the content context for every placement, verifying that ads ran on brand-safe content instead of trusting the platform's own after-the-fact report.", assetTypes: ["Placement Evidence", "Safety Attestations", "Violation Flags"] },
      { icon: Globe, title: "Content Platforms & Publishers", description: "Prove agreed brand-safety terms were met with anchored placement records, defending inventory value and resolving safety disputes against tamper-evident context.", assetTypes: ["Inventory Placements", "Context Records", "Compliance Proofs"] },
      { icon: PieChart, title: "Agencies & Verification Partners", description: "Audit where a campaign's ads actually appeared across platforms from one independent record, replacing fragmented platform reporting with a shared source of evidence.", assetTypes: ["Placement Audits", "Context Classifications", "Attribution Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a platform's ad-placement logs or wiring a content-classification provider into the feed, Cerulea routes both into one independent placement record.",
    tracks: [
      {
        title: "Track A: Ad-Placement Log Bridging",
        description:
          "For platforms on legacy ad systems. Placement events are translated into signed, classified on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Ad-Placement System", sublabel: "Platform Delivery Logs", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Context Anchoring & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Placement Evidence Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Classification Feed",
        description:
          "For content-classification providers. A signed oracle client streams content categories directly to the ledger, feeding brand-safety evaluation and evidence anchoring.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Classification Provider", sublabel: "Content Categorization Engine", icon: Search, accent: false },
          { label: "Consortium Validators", sublabel: "Context Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Placement Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an independent brand-safety verification chain with content classification, rule evaluation, and tamper-evident placement anchoring from scratch requires specialised engineers and long ad-tech integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Safety & Placement Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects brand-safety integration benchmarks. Wiring ad-placement logs, coding content classification and rule evaluation, and building tamper-evident evidence anchoring for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your safety and placement rules into pre-audited WebAssembly binaries and provisions the placement evidence ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const mediaEntertainmentItems: ExtraCaseItem[] = [
  {
    label: "Content rights management and royalty distribution",
    href: "/solutions/use-case/content-rights-management-and-royalty-distribution",
    description: "Automated royalty splits settled across every distribution partner.",
    icon: Copyright,
    category: "ENTERPRISE",
    tags: ["Royalties", "Rights"],
    industry: INDUSTRY,
  },
  {
    label: "Advertising slot booking and proof-of-broadcast verification",
    href: "/solutions/use-case/advertising-slot-booking-and-proof-of-broadcast-verification",
    description: "Payment released only on confirmed, anchored broadcast proof.",
    icon: Radio,
    category: "ENTERPRISE",
    tags: ["Advertising", "Broadcast"],
    industry: INDUSTRY,
  },
  {
    label: "Syndication rights tracking across regional channels",
    href: "/solutions/use-case/syndication-rights-tracking-across-regional-channels",
    description: "One registry of territory rights with expiry enforcement.",
    icon: Globe,
    category: "ENTERPRISE",
    tags: ["Syndication", "Rights"],
    industry: INDUSTRY,
  },
  {
    label: "Viewership data sharing for ad rate negotiation",
    href: "/solutions/use-case/viewership-data-sharing-for-ad-rate-negotiation",
    description: "Shared, tamper-proof audience feed both sides trust.",
    icon: Activity,
    category: "ENTERPRISE",
    tags: ["Viewership", "Data"],
    industry: INDUSTRY,
  },
  {
    label: "Journalism provenance and fake news attribution trail",
    href: "/solutions/use-case/journalism-provenance-and-fake-news-attribution-trail",
    description: "Verify article origin and integrity in seconds.",
    icon: ShieldCheck,
    category: "DAPPS",
    tags: ["Journalism", "Provenance"],
    industry: INDUSTRY,
  },
  {
    label: "Freelance journalist contract and payment automation",
    href: "/solutions/use-case/freelance-journalist-contract-and-payment-automation",
    description: "Payment released the moment an article publishes.",
    icon: Wallet,
    category: "SME",
    tags: ["Freelance", "Payments"],
    industry: INDUSTRY,
  },
  {
    label: "Subscription and paywall access rights across publisher network",
    href: "/solutions/use-case/subscription-and-paywall-access-rights-across-publisher-network",
    description: "One credential unlocks content across every publisher.",
    icon: IdCard,
    category: "ENTERPRISE",
    tags: ["Subscriptions", "Access"],
    industry: INDUSTRY,
  },
  {
    label: "Archive licensing for historical content reuse",
    href: "/solutions/use-case/archive-licensing-for-historical-content-reuse",
    description: "Auto-priced reuse with instant publisher settlement.",
    icon: Database,
    category: "SME",
    tags: ["Archive", "Licensing"],
    industry: INDUSTRY,
  },
  {
    label: "Film IP ownership registry and revenue share via smart contracts",
    href: "/solutions/use-case/film-ip-ownership-registry-and-revenue-share-via-smart-contracts",
    description: "Neutral chain of title with automated revenue waterfalls.",
    icon: PieChart,
    category: "ENTERPRISE",
    tags: ["Film", "Rights"],
    industry: INDUSTRY,
  },
  {
    label: "Film financing syndication across multiple investors",
    href: "/solutions/use-case/film-financing-syndication-across-multiple-investors",
    description: "Proportional investor shares distributed from every revenue source.",
    icon: Coins,
    category: "ENTERPRISE",
    tags: ["Financing", "Investors"],
    industry: INDUSTRY,
  },
  {
    label: "Visual effects and post-production vendor payment milestones",
    href: "/solutions/use-case/visual-effects-and-post-production-vendor-payment-milestones",
    description: "Vendors paid automatically on each approved shot batch.",
    icon: Palette,
    category: "SME",
    tags: ["VFX", "Milestones"],
    industry: INDUSTRY,
  },
  {
    label: "Regional dubbing and distribution rights licensing",
    href: "/solutions/use-case/regional-dubbing-and-distribution-rights-licensing",
    description: "Language-region rights registry with automatic expiry alerts.",
    icon: Network,
    category: "ENTERPRISE",
    tags: ["Dubbing", "Licensing"],
    industry: INDUSTRY,
  },
  {
    label: "Digital advertising spend verification and anti-fraud attribution",
    href: "/solutions/use-case/digital-advertising-spend-verification-and-anti-fraud-attribution",
    description: "Fraud-gated billing on verified, tamper-proof impressions.",
    icon: Shield,
    category: "ENTERPRISE",
    tags: ["Ad Fraud", "Verification"],
    industry: INDUSTRY,
  },
  {
    label: "Influencer marketing campaign performance and payment verification",
    href: "/solutions/use-case/influencer-marketing-campaign-performance-and-payment-verification",
    description: "Influencers paid on verified metrics, not screenshots.",
    icon: Users,
    category: "SME",
    tags: ["Influencer", "Payments"],
    industry: INDUSTRY,
  },
  {
    label: "Brand safety verification for ad placement on content platforms",
    href: "/solutions/use-case/brand-safety-verification-for-ad-placement-on-content-platforms",
    description: "Independent, anchored evidence of every ad's content context.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Brand Safety", "Placement"],
    industry: INDUSTRY,
  },
]
