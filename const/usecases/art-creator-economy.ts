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

const INDUSTRY = "Art & Creator Economy"

export const artCreatorEconomyCases: CaseEntry[] = [
  {
    slug: "creator-royalty-micropayments-and-transparent-revenue-splits",
    icon: Coins,
    eyebrow: "Creator Settlement Layer",
    headline1: "Pay every stream.",
    headline2: "Split without dispute.",
    heroDescription:
      "Distribute royalties per stream on a public-chain creator app instead of holding earnings in a monthly batch. The Royalty Standard and Royalty Clearing modules apply each split, an ERC-20 token carries the payment, and the Subgraph Indexer surfaces real-time earnings for every contributor.",
    heroCta: "Deploy Royalty Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque monthly payout into a transparent, per-stream settlement every contributor can audit.",
    mechanics: [
      { title: "Per-Stream Settlement", description: "Replace the monthly batch. Each verified stream triggers a payment event, so a contributor's balance moves the moment their work is consumed rather than weeks after the fact." },
      { title: "Encoded Revenue Splits", description: "The Royalty Standard stores each contributor's percentage on-chain. When revenue arrives, the split is applied exactly as agreed, removing the human step where accuracy is usually lost." },
      { title: "Automated Clearing", description: "The Royalty Clearing module fans a single incoming payment out to every collaborator in one transaction, so a track with five contributors settles all five shares atomically." },
      { title: "ERC-20 Payment Token", description: "An ERC-20 token carries value across the app. Micropayments too small for card rails settle cheaply on-chain, making a fraction of a cent per stream economically viable." },
      { title: "Real-Time Earnings Feed", description: "The Subgraph Indexer exposes live earnings. A creator watches their revenue accrue stream by stream instead of waiting for a statement they cannot verify." },
      { title: "Immutable Split Record", description: "The agreed split is anchored before the first payment. Any later question about who was owed what is answered against a signed record, so disputes about accuracy stop." },
    ],
    lifecycleTitle: "The Royalty Lifecycle",
    lifecycleSubtitle:
      "Follow a single stream from the moment it is counted to the instant each contributor's share lands in their wallet.",
    lifecycleSteps: [
      {
        label: "Split Registration",
        description:
          "A creator registers the revenue split for a work. The Royalty Standard anchors each contributor address and percentage as the immutable rule every future payment obeys.",
        icon: PieChart,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Initializing Royalty Split Manifest...", time: "10:04:11", tone: "default" },
          { text: "[CMD] setSplit(work: \"TRK_5591\", shares: [6000, 2500, 1500])", time: "10:04:11", tone: "primary" },
          { text: "[AUTH] Verifying contributor wallets and total equals 10000 bps...", time: "10:04:12", tone: "secondary" },
          { text: "[OK] Split anchored for TRK_5591 at block 5510188.", time: "10:04:12", tone: "success" },
        ],
      },
      {
        label: "Stream Metering",
        description:
          "The creator app reports a verified stream. The contract records the play and prepares the associated micropayment for clearing against the registered split.",
        icon: Activity,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Stream event received for TRK_5591...", time: "10:04:59", tone: "default" },
          { text: "[CMD] meterStream(TRK_5591, listener: \"0x8f2\", value: 4200)", time: "10:04:59", tone: "primary" },
          { text: "[SYS] Play validated, no duplicate within window.", time: "10:04:59", tone: "default" },
          { text: "[OK] Micropayment queued for clearing.", time: "10:05:00", tone: "success" },
        ],
      },
      {
        label: "Clearing & Payout",
        description:
          "The Royalty Clearing module fans the micropayment across every contributor in one transaction, transferring each ERC-20 share directly to their wallet.",
        icon: Coins,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Clearing payment across 3 contributors...", time: "10:05:01", tone: "default" },
          { text: "[CMD] clear(TRK_5591, amount: 4200)", time: "10:05:01", tone: "primary" },
          { text: "[AUTH] Applying 60/25/15 split to ERC-20 transfers...", time: "10:05:01", tone: "secondary" },
          { text: "[OK] 3 payouts settled atomically.", time: "10:05:02", tone: "success" },
        ],
      },
      {
        label: "Earnings Verification",
        description:
          "A contributor opens the earnings view. The Subgraph Indexer resolves their live balance and every stream that contributed to it, with no statement to reconcile.",
        icon: Search,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Earnings query for contributor 0x1a4...", time: "10:11:33", tone: "default" },
          { text: "[CMD] getEarnings(0x1a4, work: \"TRK_5591\")", time: "10:11:33", tone: "primary" },
          { text: "[SYS] Aggregating 812 stream payments from index...", time: "10:11:33", tone: "default" },
          { text: "[OK] Verified balance returned, every stream accounted.", time: "10:11:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes creator royalties into modular contracts. Each layer registers the split, meters consumption, clears payment, and exposes earnings without any platform holding funds in the dark.",
    layers: [
      {
        title: "Split Registry",
        subtitle: "The Agreement Anchor",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Agreement Anchor",
          description:
            "The foundational rule layer. It stores every contributor address and basis-point share for a work, requiring the total to sum to a full allocation before any payment can ever be cleared against it.",
          platformFunction: "Split & Metadata",
        },
        codeSnippet:
          "contract SplitRegistry {\n  struct Share { address payee; uint16 bps; }\n\n  mapping(bytes32 => Share[]) public splits;\n\n  function setSplit(bytes32 work, Share[] calldata s) external {\n    uint16 total;\n    for (uint i; i < s.length; i++) total += s[i].bps;\n    require(total == 10000, \"Must total 100%\");\n    splits[work] = s;\n  }\n}",
        simAction: "Simulate Split Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading contributor wallets for TRK_5591...", tone: "default" },
          { text: "Summing basis points 6000 + 2500 + 1500...", tone: "default" },
          { text: "Writing split rule to Level 1 storage...", tone: "default" },
          { text: "Locking agreement against future edits...", tone: "default" },
          { text: "[SUCCESS] Split registered for TRK_5591.", tone: "success" },
        ],
      },
      {
        title: "Stream Meter",
        subtitle: "The Consumption Hook",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consumption Hook",
          description:
            "Converts a play into a payable event. It validates each reported stream against a replay window so the same listen cannot be counted twice, then queues the micropayment for clearing.",
          platformFunction: "Metering & Validation",
        },
        codeSnippet:
          "function meterStream(bytes32 work, address listener, uint256 value) external onlyApp {\n    bytes32 k = keccak256(abi.encode(work, listener, block.number));\n    require(!seen[k], \"Duplicate stream\");\n    seen[k] = true;\n    pending[work] += value;\n    emit Streamed(work, listener, value);\n}",
        simAction: "Simulate Stream Metering",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving stream event for TRK_5591...", tone: "default" },
          { text: "Checking replay window for duplicate play...", tone: "default" },
          { text: "Adding micropayment to pending pool...", tone: "default" },
          { text: "Emitting streamed event to indexer...", tone: "default" },
          { text: "[SUCCESS] Stream metered and queued.", tone: "success" },
        ],
      },
      {
        title: "Royalty Clearing",
        subtitle: "The Atomic Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Atomic Payout",
          description:
            "Fans one incoming payment out to every payee in a single transaction. Either all contributors are paid their exact share or the transaction reverts, so no collaborator is ever left partially settled.",
          platformFunction: "Clearing & Settlement",
        },
        codeSnippet:
          "function clear(bytes32 work) external {\n    uint256 amount = pending[work];\n    Share[] memory s = splits[work];\n    for (uint i; i < s.length; i++) {\n      token.transfer(s[i].payee, amount * s[i].bps / 10000);\n    }\n    pending[work] = 0;\n    emit Cleared(work, amount);\n}",
        simAction: "Simulate Royalty Clearing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading pending pool for TRK_5591...", tone: "default" },
          { text: "Applying 60/25/15 split across payees...", tone: "default" },
          { text: "Executing three ERC-20 transfers in one block...", tone: "default" },
          { text: "Resetting pending pool to zero...", tone: "default" },
          { text: "[SUCCESS] All contributors settled atomically.", tone: "success" },
        ],
      },
      {
        title: "Earnings Indexer",
        subtitle: "The Live Statement",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Statement",
          description:
            "A read-only view powered by the Subgraph Indexer. It aggregates every cleared payment for a contributor into a running balance they can inspect stream by stream, replacing an unverifiable monthly statement.",
          platformFunction: "Indexing & Reporting",
        },
        codeSnippet:
          "function getEarnings(address payee, bytes32 work) external view returns (uint256) {\n    return ledger[work][payee];\n}",
        simAction: "Simulate Earnings Lookup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Contributor 0x1a4 opens earnings view...", tone: "default" },
          { text: "Querying subgraph for TRK_5591 payments...", tone: "default" },
          { text: "Aggregating 812 cleared micropayments...", tone: "default" },
          { text: "Resolving live running balance...", tone: "default" },
          { text: "[SUCCESS] Verified earnings returned to creator.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Per-stream royalty settlement is a horizontal capability. Here is how different creator businesses put transparent splits to work.",
    sectors: [
      { icon: Activity, title: "Streaming & Audio Platforms", description: "Pay artists and collaborators the instant a track is played rather than on a monthly cycle, turning a delayed opaque payout into a live earnings feed each contributor can audit stream by stream.", assetTypes: ["Per-Stream Payments", "Contributor Splits", "Live Earnings Feeds"] },
      { icon: Palette, title: "Independent Creators & Bands", description: "Encode the agreed split between writers, performers, and producers once, then let every stream settle each share automatically, ending the arguments over whether the numbers were calculated fairly.", assetTypes: ["Band Splits", "Collaboration Shares", "Session Payouts"] },
      { icon: Building2, title: "Label & Distribution Services", description: "Offer artists a transparent settlement rail as a service, clearing thousands of micropayments across catalogs in real time and cutting the reconciliation overhead of a traditional accounting team.", assetTypes: ["Catalog Payouts", "Distribution Fees", "Advance Recoupment"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an existing streaming platform's play data or routing native wallet-signed micropayments, Cerulea settles both against one royalty ledger.",
    tracks: [
      {
        title: "Track A: Platform Play-Data Bridging",
        description:
          "For established streaming services on legacy infrastructure. Verified play counts are translated into signed on-chain stream events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Streaming Backend", sublabel: "Play-Count Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Signing & Metering", icon: Server, accent: true },
          { label: "Cerulea Royalty Chain", sublabel: "Shared Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Creator App Execution",
        description:
          "For Web3 creator apps and P2P music. A wallet-native player signs each stream event and routes micropayments directly to the public clearing layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Creator App / Wallet", sublabel: "Listener Devices", icon: Wallet, accent: false },
          { label: "Clearing Validators", sublabel: "Micropayment Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Live Royalty Ledger", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a per-stream royalty engine with encoded splits, micropayment clearing, and a live earnings indexer from scratch requires specialised payments engineers and long audit cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Split & Clearing Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects creator-payments infrastructure benchmarks. Writing custom split logic, building a micropayment clearing engine, and shipping a verifiable earnings feed for an average app takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your split and clearing rules into pre-audited WebAssembly binaries and provisions the royalty ledger and indexer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "content-licensing-across-multiple-streaming-platforms",
    icon: ScrollText,
    eyebrow: "Licensing Registry Engine",
    headline1: "One licence record.",
    headline2: "Every window enforced.",
    heroDescription:
      "Hold one definitive licence record on a shared registry instead of scattered contracts no one tracks. The Royalty Standard and Provenance Notary bind each title to its platform, territory, and expiry, and Compliance Attestations record every grant so nothing stays live past its date.",
    heroCta: "Deploy Licensing Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace a drawer of conflicting contracts with a single registry that knows exactly when every title must come down.",
    mechanics: [
      { title: "Definitive Licence Record", description: "One entry per grant replaces the scattered PDFs held by each party. The registry is the single source both the owner and the platform read from, so there is no second version to disagree with." },
      { title: "Window & Territory Binding", description: "The Provenance Notary binds each title to its exact platform, territory, and window. A grant valid in one region and dead in another is expressed as data rather than buried in contract prose." },
      { title: "Automatic Expiry", description: "Each licence carries its end date on-chain. When the window closes the registry marks the grant expired, so a title cannot quietly stay available after the right to show it has lapsed." },
      { title: "Grant Attestations", description: "Compliance Attestations record every grant and amendment. An auditor reads a signed history of who licensed what, where, and until when, instead of trusting a spreadsheet." },
      { title: "Royalty Terms On-Chain", description: "The Royalty Standard stores the commercial terms alongside the grant, so the payment owed for a licensed window is computed from the same record that authorises the window." },
      { title: "Takedown Coordination", description: "Owner and platform both watch the same expiry. When a window ends, both sides see the obligation at once, removing the ambiguity that leaves titles streaming past their licence." },
    ],
    lifecycleTitle: "The Licensing Lifecycle",
    lifecycleSubtitle:
      "Follow a single title from the grant of a licence window through its live period to an enforced takedown at expiry.",
    lifecycleSteps: [
      {
        label: "Licence Grant",
        description:
          "An owner grants a platform a licence for a title. The registry anchors the platform, territory, window, and terms as one definitive record both parties share.",
        icon: ScrollText,
        logFilename: "cerulea_license_engine.log",
        logLines: [
          { text: "[SYS] Initializing Licence Manifest...", time: "09:15:02", tone: "default" },
          { text: "[CMD] grantLicense { title: \"SHOW_4471\", platform: \"STREAM_A\", region: \"EU\" }", time: "09:15:02", tone: "primary" },
          { text: "[AUTH] Verifying owner rights and window 2026-01 to 2027-12...", time: "09:15:03", tone: "secondary" },
          { text: "[OK] Licence LIC_88213 anchored at block 6110455.", time: "09:15:03", tone: "success" },
        ],
      },
      {
        label: "Attestation Anchor",
        description:
          "Compliance Attestations seal the grant. The signed terms and territory become an auditable record any regulator or partner can query later.",
        icon: FileCheck,
        logFilename: "cerulea_license_engine.log",
        logLines: [
          { text: "[SYS] Recording compliance attestation for LIC_88213...", time: "09:16:20", tone: "default" },
          { text: "[CMD] attest(LIC_88213, doc: \"GRANT_TERMS\")", time: "09:16:20", tone: "primary" },
          { text: "[AUTH] Hashing terms (SHA-256) and sealing to licence...", time: "09:16:21", tone: "secondary" },
          { text: "[OK] Attestation anchored, tamper-evident.", time: "09:16:21", tone: "success" },
        ],
      },
      {
        label: "Live Window",
        description:
          "The title streams within its authorised window. The registry answers availability checks, confirming the platform and territory hold a valid, unexpired grant.",
        icon: Globe,
        logFilename: "cerulea_license_engine.log",
        logLines: [
          { text: "[SYS] Availability check from STREAM_A/EU...", time: "14:30:41", tone: "default" },
          { text: "[CMD] isLicensed(SHOW_4471, \"STREAM_A\", \"EU\")", time: "14:30:41", tone: "primary" },
          { text: "[SYS] Window open, expiry 2027-12-31 not reached.", time: "14:30:41", tone: "default" },
          { text: "[OK] Title authorised for playback.", time: "14:30:42", tone: "success" },
        ],
      },
      {
        label: "Expiry Enforcement",
        description:
          "The window closes. The registry flips the grant to expired, and the next availability check returns a required takedown to both owner and platform.",
        icon: Lock,
        logFilename: "cerulea_license_engine.log",
        logLines: [
          { text: "[SYS] Expiry reached for LIC_88213...", time: "00:00:04", tone: "default" },
          { text: "[CMD] expire(LIC_88213)", time: "00:00:04", tone: "primary" },
          { text: "[SYS] Grant state set to EXPIRED, takedown flagged.", time: "00:00:04", tone: "default" },
          { text: "[OK] Post-expiry availability blocked.", time: "00:00:05", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes multi-platform licensing into modular contracts. Each layer grants, attests, checks, and expires a licence so a title's availability always matches the right that authorises it.",
    layers: [
      {
        title: "Licence Registry",
        subtitle: "The Definitive Record",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Definitive Record",
          description:
            "The single source of truth for every grant. It stores the title, platform, territory, window, and terms so both owner and platform read from one record instead of two conflicting contracts.",
          platformFunction: "Grant & Metadata",
        },
        codeSnippet:
          "contract LicenseRegistry {\n  struct Licence {\n    bytes32 title;\n    address platform;\n    bytes2 region;\n    uint64 start;\n    uint64 end;\n    bool active;\n  }\n\n  mapping(bytes32 => Licence) public licences;\n\n  function grant(bytes32 id, Licence calldata l) external onlyOwner {\n    licences[id] = l;\n  }\n}",
        simAction: "Simulate Licence Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading owner rights for SHOW_4471...", tone: "default" },
          { text: "Binding platform STREAM_A and region EU...", tone: "default" },
          { text: "Setting window 2026-01 to 2027-12...", tone: "default" },
          { text: "Writing licence to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Licence LIC_88213 registered.", tone: "success" },
        ],
      },
      {
        title: "Attestation Seal",
        subtitle: "The Audit Trail",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Audit Trail",
          description:
            "Anchors each grant and amendment by its digest through Compliance Attestations. The contract text stays off-chain, but any change to the terms breaks the hash and is instantly visible to an auditor.",
          platformFunction: "Compliance & Attestation",
        },
        codeSnippet:
          "function attest(bytes32 licenceId, bytes32 docHash) external onlyIssuer {\n    attestations[licenceId].push(Attestation(docHash, msg.sender, block.timestamp));\n    emit Attested(licenceId, docHash);\n}",
        simAction: "Simulate Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting signed grant terms document...", tone: "default" },
          { text: "Computing SHA-256 digest of terms...", tone: "default" },
          { text: "Binding digest to LIC_88213...", tone: "default" },
          { text: "Appending to compliance history...", tone: "default" },
          { text: "[SUCCESS] Grant attested, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Availability Check",
        subtitle: "The Window Guard",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Window Guard",
          description:
            "The runtime gate a platform calls before serving a title. It confirms the caller holds an active grant for the requested territory and that the current time falls inside the licensed window.",
          platformFunction: "Authorization & Enforcement",
        },
        codeSnippet:
          "function isLicensed(bytes32 id, address platform, bytes2 region) external view returns (bool) {\n    Licence memory l = licences[id];\n    return l.active && l.platform == platform && l.region == region\n      && block.timestamp >= l.start && block.timestamp <= l.end;\n}",
        simAction: "Simulate Availability Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Platform STREAM_A requests SHOW_4471 in EU...", tone: "default" },
          { text: "Matching platform and territory to grant...", tone: "default" },
          { text: "Comparing current time to licensed window...", tone: "default" },
          { text: "Window open, expiry not yet reached...", tone: "default" },
          { text: "[SUCCESS] Title authorised for playback.", tone: "success" },
        ],
      },
      {
        title: "Expiry Executor",
        subtitle: "The Takedown Trigger",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Takedown Trigger",
          description:
            "Enforces the end of a window. Once the expiry timestamp passes, the grant flips to inactive and every subsequent availability check fails, ending the era of titles streaming past their licence.",
          platformFunction: "Expiry & State Change",
        },
        codeSnippet:
          "function expire(bytes32 id) external {\n    Licence storage l = licences[id];\n    require(block.timestamp > l.end, \"Window still open\");\n    l.active = false;\n    emit Expired(id, l.title);\n}",
        simAction: "Simulate Expiry",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Window end reached for LIC_88213...", tone: "default" },
          { text: "Verifying expiry timestamp has passed...", tone: "default" },
          { text: "Setting grant state to inactive...", tone: "default" },
          { text: "Flagging takedown to owner and platform...", tone: "default" },
          { text: "[SUCCESS] Post-expiry availability blocked.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A shared licence registry is a horizontal capability. Here is how different content businesses put one definitive record to work.",
    sectors: [
      { icon: Globe, title: "Streaming Platforms", description: "Read one authoritative record before serving any title, so a show is only playable where and when a valid grant exists, and stale titles come down the moment their window closes.", assetTypes: ["Availability Checks", "Territory Windows", "Takedown Flags"] },
      { icon: Building2, title: "Studios & Rights Owners", description: "License the same catalog to many platforms across overlapping windows and territories without losing track, replacing a drawer of contracts with a single registry both sides trust.", assetTypes: ["Catalog Grants", "Window Schedules", "Amendment History"] },
      { icon: Landmark, title: "Distributors & Aggregators", description: "Broker rights between owners and platforms against a shared record, settling disputes from a signed licence history instead of two conflicting emails about when a window ended.", assetTypes: ["Brokered Licences", "Dispute Records", "Compliance Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a studio's rights-management system or routing platform availability checks natively, Cerulea resolves both against one licence registry.",
    tracks: [
      {
        title: "Track A: Rights-Management Bridging",
        description:
          "For studios and owners on legacy rights systems. Existing grant records are translated into signed on-chain licences through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Rights System", sublabel: "Studio Catalog Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Grant Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Licence Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Platform Availability Execution",
        description:
          "For streaming platforms enforcing windows at runtime. Each availability check is signed and resolved directly against the shared registry before a title is served.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Platform Backend", sublabel: "Playback Gateways", icon: Globe, accent: false },
          { label: "Registry Validators", sublabel: "Window Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Licence Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-platform licence registry with window binding, attestation, and automatic expiry from scratch requires specialised rights engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Window & Territory Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects media rights-management benchmarks. Modelling territory windows, wiring each platform's availability system, and building an auditable grant history for an average catalog takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your window and territory rules into pre-audited WebAssembly binaries and provisions the shared registry and attestation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "user-generated-content-ownership-and-monetization-registry",
    icon: Copyright,
    eyebrow: "Authorship Provenance Engine",
    headline1: "Register the work.",
    headline2: "Pay the maker.",
    heroDescription:
      "Let creators register original work once on a public registry so authorship is provable and reuse pays the maker. Provenance Notary and the DID and VC Ledger bind authorship, and the Royalty Standard and Royalty Clearing modules route payment on each monetised use.",
    heroCta: "Deploy Ownership Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a platform that cannot say who made what into one where authorship is anchored and every reuse pays automatically.",
    mechanics: [
      { title: "Register Once", description: "A creator anchors an original work a single time. The Provenance Notary binds the content digest to their identity, so authorship no longer depends on whoever uploaded it first." },
      { title: "Verifiable Identity", description: "The DID and VC Ledger ties each registration to a decentralized identifier, giving the creator a portable, provable claim of authorship that no platform can quietly reassign." },
      { title: "Reuse Detection", description: "When the platform monetises a registered work, the contract recognises the match and routes payment to the original maker rather than to whoever reposted it." },
      { title: "Automatic Royalty Routing", description: "The Royalty Standard and Royalty Clearing modules pay the creator on each monetised use, so a work reused a thousand times pays its author a thousand times without a claim form." },
      { title: "Provable Ownership", description: "Ownership rests on an anchored digest and a signed identity. A disputed claim is settled against the registry, ending the guesswork over who a piece of content belongs to." },
      { title: "Portable Rights", description: "Because authorship lives on a public registry rather than inside one app, a creator carries their ownership and earnings history with them across every platform that reads it." },
    ],
    lifecycleTitle: "The Ownership Lifecycle",
    lifecycleSubtitle:
      "Follow a single piece of user-generated content from first registration through monetised reuse to an automatic payout to its author.",
    lifecycleSteps: [
      {
        label: "Work Registration",
        description:
          "A creator registers an original work. The Provenance Notary anchors the content digest and binds it to the creator's decentralized identifier as the root of ownership.",
        icon: Fingerprint,
        logFilename: "cerulea_ugc_engine.log",
        logLines: [
          { text: "[SYS] Initializing Authorship Manifest...", time: "11:22:08", tone: "default" },
          { text: "[CMD] registerWork { did: \"did:cer:9f2\", hash: \"0xA1..C4\" }", time: "11:22:08", tone: "primary" },
          { text: "[AUTH] Verifying credential and content digest...", time: "11:22:09", tone: "secondary" },
          { text: "[OK] Work WRK_33218 anchored at block 7220144.", time: "11:22:09", tone: "success" },
        ],
      },
      {
        label: "Identity Binding",
        description:
          "The DID and VC Ledger binds a verifiable credential to the registration, giving the creator a portable, provable authorship claim across platforms.",
        icon: IdCard,
        logFilename: "cerulea_ugc_engine.log",
        logLines: [
          { text: "[SYS] Attaching verifiable credential to WRK_33218...", time: "11:22:40", tone: "default" },
          { text: "[CMD] bindCredential(WRK_33218, did: \"did:cer:9f2\")", time: "11:22:40", tone: "primary" },
          { text: "[AUTH] Checking credential signature against issuer...", time: "11:22:41", tone: "secondary" },
          { text: "[OK] Authorship credential bound and portable.", time: "11:22:41", tone: "success" },
        ],
      },
      {
        label: "Monetised Reuse",
        description:
          "The platform monetises the work. The contract matches the content digest to its registration and prepares a payout to the original creator.",
        icon: Coins,
        logFilename: "cerulea_ugc_engine.log",
        logLines: [
          { text: "[SYS] Monetisation event for content 0xA1..C4...", time: "16:05:12", tone: "default" },
          { text: "[CMD] matchWork(hash: \"0xA1..C4\", revenue: 1800)", time: "16:05:12", tone: "primary" },
          { text: "[SYS] Match found, owner is WRK_33218 creator.", time: "16:05:12", tone: "default" },
          { text: "[OK] Payout queued for original maker.", time: "16:05:13", tone: "success" },
        ],
      },
      {
        label: "Creator Payout",
        description:
          "The Royalty Clearing module transfers the earned share to the creator's wallet, so reuse of their work pays them without any manual claim.",
        icon: Wallet,
        logFilename: "cerulea_ugc_engine.log",
        logLines: [
          { text: "[SYS] Clearing payout for WRK_33218...", time: "16:05:14", tone: "default" },
          { text: "[CMD] payCreator(WRK_33218, amount: 1800)", time: "16:05:14", tone: "primary" },
          { text: "[AUTH] Routing share to creator wallet 0x9f2...", time: "16:05:14", tone: "secondary" },
          { text: "[OK] Maker paid. Reuse settled on-chain.", time: "16:05:15", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes UGC ownership into modular contracts. Each layer registers a work, binds identity, matches reuse, and pays the author without any platform owning the record of who made what.",
    layers: [
      {
        title: "Work Registry",
        subtitle: "The Authorship Anchor",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authorship Anchor",
          description:
            "The foundational ownership layer. It stores the content digest and the creator's identifier as an immutable claim of authorship that every later payout points back to.",
          platformFunction: "Registration & Metadata",
        },
        codeSnippet:
          "contract WorkRegistry {\n  struct Work { bytes32 did; uint256 registeredAt; }\n\n  mapping(bytes32 => Work) public works;\n\n  function register(bytes32 contentHash, bytes32 did) external {\n    require(works[contentHash].registeredAt == 0, \"Already registered\");\n    works[contentHash] = Work(did, block.timestamp);\n    emit Registered(contentHash, did);\n  }\n}",
        simAction: "Simulate Work Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading creator identifier did:cer:9f2...", tone: "default" },
          { text: "Hashing original content payload...", tone: "default" },
          { text: "Checking digest is not already registered...", tone: "default" },
          { text: "Writing authorship claim to storage...", tone: "default" },
          { text: "[SUCCESS] Work WRK_33218 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Identity Ledger",
        subtitle: "The Portable Credential",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Portable Credential",
          description:
            "Binds a verifiable credential from the DID and VC Ledger to a registration. The creator's authorship claim becomes portable across platforms and cannot be silently reassigned by any single app.",
          platformFunction: "Identity & Verification",
        },
        codeSnippet:
          "function bindCredential(bytes32 workId, bytes32 did, bytes calldata sig) external {\n    require(verifyCredential(did, sig), \"Invalid credential\");\n    credentials[workId] = did;\n    emit CredentialBound(workId, did);\n}",
        simAction: "Simulate Identity Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verifiable credential for WRK_33218...", tone: "default" },
          { text: "Checking issuer signature on credential...", tone: "default" },
          { text: "Binding decentralized identifier to work...", tone: "default" },
          { text: "Making authorship claim portable...", tone: "default" },
          { text: "[SUCCESS] Credential bound to creator.", tone: "success" },
        ],
      },
      {
        title: "Reuse Matcher",
        subtitle: "The Attribution Hook",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Attribution Hook",
          description:
            "Resolves a monetised piece of content back to its registered author. It matches the content digest to the registry so revenue is attributed to the maker, not to whoever reposted the work.",
          platformFunction: "Matching & Attribution",
        },
        codeSnippet:
          "function matchWork(bytes32 contentHash, uint256 revenue) external onlyPlatform returns (bytes32) {\n    Work memory w = works[contentHash];\n    require(w.registeredAt != 0, \"Unregistered\");\n    owed[contentHash] += revenue;\n    emit Matched(contentHash, w.did, revenue);\n    return w.did;\n}",
        simAction: "Simulate Reuse Match",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Platform monetises content 0xA1..C4...", tone: "default" },
          { text: "Matching digest against work registry...", tone: "default" },
          { text: "Resolving original author from registration...", tone: "default" },
          { text: "Recording revenue owed to maker...", tone: "default" },
          { text: "[SUCCESS] Reuse attributed to creator.", tone: "success" },
        ],
      },
      {
        title: "Creator Clearing",
        subtitle: "The Automatic Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Payout",
          description:
            "Routes earned revenue to the creator through Royalty Clearing. Every monetised reuse pays the author directly, so a work used a thousand times pays its maker a thousand times with no claim form.",
          platformFunction: "Clearing & Settlement",
        },
        codeSnippet:
          "function payCreator(bytes32 contentHash) external {\n    uint256 amount = owed[contentHash];\n    bytes32 did = works[contentHash].did;\n    owed[contentHash] = 0;\n    token.transfer(walletOf(did), amount);\n    emit Paid(contentHash, did, amount);\n}",
        simAction: "Simulate Creator Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading amount owed for WRK_33218...", tone: "default" },
          { text: "Resolving wallet for did:cer:9f2...", tone: "default" },
          { text: "Transferring earned share to creator...", tone: "default" },
          { text: "Resetting owed balance to zero...", tone: "default" },
          { text: "[SUCCESS] Maker paid for reuse of work.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A UGC ownership registry is a horizontal capability. Here is how different platforms put provable authorship to work.",
    sectors: [
      { icon: Users, title: "Social & Video Platforms", description: "Attribute every monetised clip and post to its original creator, so ad and licensing revenue reaches the maker automatically instead of the account that reposted the work fastest.", assetTypes: ["Registered Clips", "Reuse Attributions", "Creator Payouts"] },
      { icon: Palette, title: "Design & Asset Marketplaces", description: "Let designers register illustrations, templates, and stock assets once, then pay them each time a piece is licensed or embedded downstream, with ownership provable across the whole marketplace.", assetTypes: ["Design Registrations", "Licence Events", "Embedded-Asset Fees"] },
      { icon: Gamepad, title: "Game & Metaverse Builders", description: "Give user creators a portable claim on the items, mods, and worlds they build, routing revenue to the author whenever their creation is used inside any game that reads the registry.", assetTypes: ["User Items", "Mod Registrations", "In-World Royalties"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an existing content platform or routing native creator registrations from a wallet, Cerulea anchors both to one ownership registry.",
    tracks: [
      {
        title: "Track A: Platform Content Bridging",
        description:
          "For established UGC platforms on legacy infrastructure. Upload and monetisation events are translated into signed on-chain registrations and payouts through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Content Backend", sublabel: "Upload & Ad Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Digest Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Registry Chain", sublabel: "Shared Ownership Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Creator Registration",
        description:
          "For Web3 creator apps. A wallet-native creator signs each registration and carries their authorship credential directly onto the public ownership layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Creator App / Wallet", sublabel: "Maker Devices", icon: Fingerprint, accent: false },
          { label: "Registry Validators", sublabel: "Authorship Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Ownership Ledger", icon: Copyright, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an ownership registry with identity binding, reuse matching, and automatic creator payouts from scratch requires specialised identity and payments engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Authorship & Payout Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects identity and content-platform benchmarks. Building a work registry, wiring a decentralized identity ledger, and shipping reuse-based payouts for an average platform takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your authorship and payout rules into pre-audited WebAssembly binaries and provisions the ownership registry and identity ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "subscription-bundle-revenue-sharing-across-content-partners",
    icon: PieChart,
    eyebrow: "Bundle Settlement Layer",
    headline1: "Split by watch-time.",
    headline2: "Retire the spreadsheet.",
    heroDescription:
      "Collect verified watch-time through External Data Oracles and split bundle revenue automatically instead of reconciling spreadsheets from every partner. The Royalty Standard and Royalty Clearing modules apply each share, and Escrow and Conditional Settlement pays it out.",
    heroCta: "Deploy Bundle Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace a monthly reconciliation meeting with an on-chain split driven by verified watch-time.",
    mechanics: [
      { title: "Verified Watch-Time", description: "External Data Oracles feed audited watch-time for each partner into the contract, so revenue is divided by what audiences actually watched rather than by a self-reported figure." },
      { title: "Usage-Weighted Splits", description: "The Royalty Standard weights each partner's share by their measured consumption. A partner whose titles were watched more receives more, computed by the contract, not negotiated in a call." },
      { title: "Automatic Reconciliation", description: "The Royalty Clearing module reconciles the pool the moment watch-time is settled, removing the cross-partner spreadsheet exchange that a bundle usually depends on." },
      { title: "Escrowed Payouts", description: "Escrow and Conditional Settlement holds the bundle revenue and releases each partner's share only once the watch-time inputs are verified, so no one is paid on disputed numbers." },
      { title: "Shared Ledger of Record", description: "Every partner reads the same settlement ledger. There is no private spreadsheet to argue against, because the split is computed on a record all parties can inspect." },
      { title: "Auditable Split Trail", description: "Each period's watch-time, weighting, and payout is anchored on-chain, giving any partner or auditor a verifiable trail of how a share was reached." },
    ],
    lifecycleTitle: "The Bundle Settlement Lifecycle",
    lifecycleSubtitle:
      "Follow one billing period from verified watch-time collection through the weighted split to an escrowed payout for every partner.",
    lifecycleSteps: [
      {
        label: "Watch-Time Collection",
        description:
          "External Data Oracles report each partner's audited watch-time for the period. The contract records the figures as the basis for the split.",
        icon: Radio,
        logFilename: "cerulea_bundle_engine.log",
        logLines: [
          { text: "[SYS] Polling watch-time oracles for period 2026-Q1...", time: "07:40:15", tone: "default" },
          { text: "[CMD] reportUsage(partner: \"P_A\", minutes: 1420000)", time: "07:40:15", tone: "primary" },
          { text: "[AUTH] Verifying oracle signatures across 4 partners...", time: "07:40:16", tone: "secondary" },
          { text: "[OK] Watch-time recorded for all partners.", time: "07:40:16", tone: "success" },
        ],
      },
      {
        label: "Weighted Split",
        description:
          "The Royalty Standard weights each partner's share by their verified watch-time, computing the exact division of the revenue pool.",
        icon: PieChart,
        logFilename: "cerulea_bundle_engine.log",
        logLines: [
          { text: "[SYS] Computing usage-weighted split...", time: "07:41:02", tone: "default" },
          { text: "[CMD] weightSplit(pool: 900000, total: 4100000)", time: "07:41:02", tone: "primary" },
          { text: "[SYS] Shares derived: 34.6 / 28.1 / 22.0 / 15.3 percent.", time: "07:41:02", tone: "default" },
          { text: "[OK] Split computed from verified watch-time.", time: "07:41:03", tone: "success" },
        ],
      },
      {
        label: "Escrow Release",
        description:
          "Escrow and Conditional Settlement releases the pool only after the watch-time inputs pass verification, protecting partners from payouts on disputed numbers.",
        icon: Lock,
        logFilename: "cerulea_bundle_engine.log",
        logLines: [
          { text: "[SYS] Escrow gate checking verification status...", time: "07:41:40", tone: "default" },
          { text: "[CMD] release(pool: 900000)", time: "07:41:40", tone: "primary" },
          { text: "[AUTH] All oracle inputs verified, condition met...", time: "07:41:40", tone: "secondary" },
          { text: "[OK] Pool released for clearing.", time: "07:41:41", tone: "success" },
        ],
      },
      {
        label: "Partner Payout",
        description:
          "The Royalty Clearing module transfers each partner their computed share in one transaction, so the reconciliation meeting never has to happen.",
        icon: Coins,
        logFilename: "cerulea_bundle_engine.log",
        logLines: [
          { text: "[SYS] Clearing bundle payout across 4 partners...", time: "07:41:42", tone: "default" },
          { text: "[CMD] clearBundle(period: \"2026-Q1\")", time: "07:41:42", tone: "primary" },
          { text: "[SYS] Applying weighted shares to transfers...", time: "07:41:42", tone: "default" },
          { text: "[OK] 4 partners settled. Spreadsheet retired.", time: "07:41:43", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes bundle revenue sharing into modular contracts. Each layer collects watch-time, weights the split, gates the escrow, and clears the payout on a record every partner can audit.",
    layers: [
      {
        title: "Usage Oracle",
        subtitle: "The Watch-Time Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Watch-Time Feed",
          description:
            "Ingests audited consumption from External Data Oracles. It records each partner's verified watch-time for the period and rejects any figure whose oracle signature does not check out.",
          platformFunction: "Data Ingestion & Verification",
        },
        codeSnippet:
          "contract UsageOracle {\n  mapping(bytes32 => uint256) public usage;\n\n  function report(bytes32 partner, uint256 minutes_, bytes calldata sig) external {\n    require(verifyOracle(partner, minutes_, sig), \"Bad feed\");\n    usage[partner] = minutes_;\n    emit Usage(partner, minutes_);\n  }\n}",
        simAction: "Simulate Watch-Time Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Polling oracle feed for partner P_A...", tone: "default" },
          { text: "Checking oracle signature on watch-time...", tone: "default" },
          { text: "Recording 1,420,000 verified minutes...", tone: "default" },
          { text: "Marking partner input as ready...", tone: "default" },
          { text: "[SUCCESS] Watch-time recorded for split.", tone: "success" },
        ],
      },
      {
        title: "Split Engine",
        subtitle: "The Weighting Core",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Weighting Core",
          description:
            "Derives each partner's share from measured consumption. It divides the revenue pool in proportion to verified watch-time, so a bundle split is a calculation on shared data rather than a negotiation.",
          platformFunction: "Split & Weighting",
        },
        codeSnippet:
          "function shareOf(bytes32 partner, uint256 pool, uint256 totalMinutes) public view returns (uint256) {\n    return pool * usage[partner] / totalMinutes;\n}",
        simAction: "Simulate Weighted Split",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verified watch-time for 4 partners...", tone: "default" },
          { text: "Summing total minutes across the bundle...", tone: "default" },
          { text: "Dividing pool in proportion to consumption...", tone: "default" },
          { text: "Deriving each partner's exact share...", tone: "default" },
          { text: "[SUCCESS] Usage-weighted split computed.", tone: "success" },
        ],
      },
      {
        title: "Escrow Gate",
        subtitle: "The Conditional Release",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Release",
          description:
            "Holds the revenue pool through Escrow and Conditional Settlement. It releases funds only once every partner's watch-time input is verified, so nobody is paid against a disputed figure.",
          platformFunction: "Escrow & Conditions",
        },
        codeSnippet:
          "function release(bytes32 period) external {\n    require(allVerified(period), \"Inputs unverified\");\n    require(!released[period], \"Already released\");\n    released[period] = true;\n    emit Released(period, pools[period]);\n}",
        simAction: "Simulate Escrow Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking verification status of all inputs...", tone: "default" },
          { text: "Confirming no partner figure is disputed...", tone: "default" },
          { text: "Meeting release condition for period...", tone: "default" },
          { text: "Unlocking pool for clearing...", tone: "default" },
          { text: "[SUCCESS] Pool released on verified inputs.", tone: "success" },
        ],
      },
      {
        title: "Bundle Clearing",
        subtitle: "The One-Shot Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The One-Shot Payout",
          description:
            "Pays every partner their computed share in a single transaction through Royalty Clearing. The reconciliation meeting disappears because the split and the payout run on the same shared ledger.",
          platformFunction: "Clearing & Settlement",
        },
        codeSnippet:
          "function clearBundle(bytes32 period, bytes32[] calldata partners) external {\n    uint256 pool = pools[period];\n    for (uint i; i < partners.length; i++) {\n      token.transfer(walletOf(partners[i]), shareOf(partners[i], pool, totals[period]));\n    }\n    emit Cleared(period, pool);\n}",
        simAction: "Simulate Bundle Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading released pool for period 2026-Q1...", tone: "default" },
          { text: "Applying weighted shares across 4 partners...", tone: "default" },
          { text: "Executing partner transfers in one block...", tone: "default" },
          { text: "Anchoring split trail for audit...", tone: "default" },
          { text: "[SUCCESS] All partners paid, spreadsheet retired.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Watch-time revenue sharing is a horizontal capability. Here is how different bundle operators put automatic settlement to work.",
    sectors: [
      { icon: Boxes, title: "Streaming Bundle Operators", description: "Split a single subscription across many content providers by verified watch-time, so each partner is paid for the audience they actually earned rather than a flat negotiated slice.", assetTypes: ["Bundle Pools", "Watch-Time Shares", "Partner Payouts"] },
      { icon: Radio, title: "Podcast & Audio Networks", description: "Divide shared subscription revenue among shows by measured listening, giving smaller creators a fair, auditable cut and removing the monthly reconciliation between network partners.", assetTypes: ["Listening Minutes", "Show Splits", "Network Settlements"] },
      { icon: GraduationCap, title: "Education & Course Platforms", description: "Reward instructors inside an all-access bundle by verified study-time, so the courses learners spend the most time in earn the most, computed on a ledger every instructor can inspect.", assetTypes: ["Study-Time Records", "Instructor Shares", "Access Bundles"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging partner reporting systems or routing native oracle feeds, Cerulea settles every bundle against one watch-time ledger.",
    tracks: [
      {
        title: "Track A: Partner Reporting Bridging",
        description:
          "For bundle operators aggregating partner data. Existing usage reports are translated into signed on-chain watch-time inputs through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Partner Reporting Systems", sublabel: "Usage Databases", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Feed Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Oracle Execution",
        description:
          "For measurement providers streaming verified consumption on-chain. Signed watch-time feeds route directly to the public settlement layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Measurement Oracles", sublabel: "Verified Watch-Time", icon: Radio, accent: false },
          { label: "Settlement Validators", sublabel: "Split Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Bundle Settlement Ledger", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a bundle settlement engine with oracle-fed watch-time, usage-weighted splits, and escrowed payouts from scratch requires specialised data and payments engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Watch-Time & Split Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects media settlement benchmarks. Integrating each partner's usage feed, building weighted split logic, and shipping escrowed multi-party payouts for an average bundle takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your watch-time and split rules into pre-audited WebAssembly binaries and provisions the settlement ledger and oracle layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "music-rights-ownership-and-royalty-distribution-on-chain",
    icon: Activity,
    eyebrow: "Music Rights Settlement Layer",
    headline1: "Register the rights.",
    headline2: "Pay in seven days.",
    heroDescription:
      "Register rights and route royalties on a shared music registry instead of waiting months across fragmented databases. ERC-721 NFTs and the Royalty Standard and Royalty Clearing modules hold ownership and splits, and Payouts and Settlements distribute on consumption.",
    heroCta: "Deploy Music Rights Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Collapse a months-long royalty pipeline into a shared registry that pays every rights holder on consumption.",
    mechanics: [
      { title: "Tokenised Ownership", description: "An ERC-721 NFT represents ownership of a song's rights. The token holds the definitive record of who owns a share, so fragmented registries no longer breed conflicting ownership claims." },
      { title: "Registered Splits", description: "The Royalty Standard stores each co-writer and producer share at registration. The proportions set the day a song is registered are the proportions every payout obeys." },
      { title: "Consumption Payouts", description: "Payouts and Settlements distribute royalties as the song is consumed, so an artist is paid on streams within days rather than waiting months or years for a statement." },
      { title: "Full Rights Visibility", description: "The registry exposes every rights holder for a track. A platform no longer struggles to identify who to pay, because the split and the owners are published together." },
      { title: "No Label Intermediary", description: "Payment routes directly from consumption to each rights holder. An independent artist keeps their share without a label sitting between the stream and the payout." },
      { title: "Immutable Rights History", description: "Ownership transfers and split changes are anchored on-chain. A dispute over who held a right at a given time is settled against the token's history, not a paper archive." },
    ],
    lifecycleTitle: "The Music Rights Lifecycle",
    lifecycleSubtitle:
      "Follow one song from rights registration through millions of streams to a seven-day split across every co-writer and producer.",
    lifecycleSteps: [
      {
        label: "Rights Registration",
        description:
          "An artist registers a song. An ERC-721 NFT mints the ownership record and the Royalty Standard anchors the split across every co-writer and producer.",
        icon: Copyright,
        logFilename: "cerulea_music_engine.log",
        logLines: [
          { text: "[SYS] Initializing Song Rights Manifest...", time: "12:10:05", tone: "default" },
          { text: "[CMD] mintRights { song: \"SNG_7712\", holders: 4, shares: [40,25,20,15] }", time: "12:10:05", tone: "primary" },
          { text: "[AUTH] Verifying co-writer identities and total split...", time: "12:10:06", tone: "secondary" },
          { text: "[OK] Rights NFT minted at block 8110277.", time: "12:10:06", tone: "success" },
        ],
      },
      {
        label: "Stream Accrual",
        description:
          "The song reaches ten million streams. The contract accrues consumption against the registered rights, building the pool to be distributed.",
        icon: Activity,
        logFilename: "cerulea_music_engine.log",
        logLines: [
          { text: "[SYS] Accruing consumption for SNG_7712...", time: "18:44:30", tone: "default" },
          { text: "[CMD] accrue(SNG_7712, streams: 10000000)", time: "18:44:30", tone: "primary" },
          { text: "[SYS] Royalty pool computed from consumption rate.", time: "18:44:30", tone: "default" },
          { text: "[OK] Pool ready for split across rights holders.", time: "18:44:31", tone: "success" },
        ],
      },
      {
        label: "Split Distribution",
        description:
          "The Royalty Clearing module applies the registered split, dividing the pool across the three co-writers and the producer in exact proportion.",
        icon: PieChart,
        logFilename: "cerulea_music_engine.log",
        logLines: [
          { text: "[SYS] Applying registered split for SNG_7712...", time: "18:44:32", tone: "default" },
          { text: "[CMD] distribute(SNG_7712)", time: "18:44:32", tone: "primary" },
          { text: "[AUTH] Dividing pool 40/25/20/15 across holders...", time: "18:44:32", tone: "secondary" },
          { text: "[OK] Shares computed to exact proportions.", time: "18:44:33", tone: "success" },
        ],
      },
      {
        label: "Settlement Payout",
        description:
          "Payouts and Settlements transfers each holder's share within seven days, with no label intermediary between the streams and the artist.",
        icon: Wallet,
        logFilename: "cerulea_music_engine.log",
        logLines: [
          { text: "[SYS] Settling payouts for 4 rights holders...", time: "18:44:34", tone: "default" },
          { text: "[CMD] settle(SNG_7712, window: \"7D\")", time: "18:44:34", tone: "primary" },
          { text: "[SYS] Direct transfers, no label routing.", time: "18:44:34", tone: "default" },
          { text: "[OK] All holders paid within seven days.", time: "18:44:35", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes music rights into modular contracts. Each layer tokenises ownership, registers the split, accrues consumption, and settles every holder without a label sitting in the middle.",
    layers: [
      {
        title: "Rights Token",
        subtitle: "The Ownership Record",
        icon: Copyright,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ownership Record",
          description:
            "An ERC-721 token that holds the definitive ownership of a song's rights. It replaces fragmented registries with a single record whose transfers and history are provable on-chain.",
          platformFunction: "Ownership & Metadata",
        },
        codeSnippet:
          "contract RightsToken is ERC721 {\n  struct Rights { bytes32 song; uint256 mintedAt; }\n\n  mapping(uint256 => Rights) public rights;\n\n  function mintRights(uint256 id, bytes32 song) external onlyRegistrar {\n    _mint(msg.sender, id);\n    rights[id] = Rights(song, block.timestamp);\n  }\n}",
        simAction: "Simulate Rights Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading song metadata for SNG_7712...", tone: "default" },
          { text: "Minting ERC-721 ownership token...", tone: "default" },
          { text: "Recording mint timestamp on-chain...", tone: "default" },
          { text: "Publishing rights holder to registry...", tone: "default" },
          { text: "[SUCCESS] Rights NFT minted for SNG_7712.", tone: "success" },
        ],
      },
      {
        title: "Split Ledger",
        subtitle: "The Registered Shares",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Registered Shares",
          description:
            "Stores each co-writer and producer share through the Royalty Standard. The proportions locked at registration are the only proportions any distribution can use, ending disputes over who was owed what.",
          platformFunction: "Split & Standard",
        },
        codeSnippet:
          "function registerSplit(bytes32 song, address[] calldata holders, uint16[] calldata bps) external {\n    uint16 total;\n    for (uint i; i < bps.length; i++) { splits[song].push(Share(holders[i], bps[i])); total += bps[i]; }\n    require(total == 10000, \"Split must total 100%\");\n}",
        simAction: "Simulate Split Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading four rights holders for SNG_7712...", tone: "default" },
          { text: "Summing shares 40 + 25 + 20 + 15...", tone: "default" },
          { text: "Confirming split totals a full allocation...", tone: "default" },
          { text: "Writing registered split to ledger...", tone: "default" },
          { text: "[SUCCESS] Split registered for SNG_7712.", tone: "success" },
        ],
      },
      {
        title: "Consumption Accrual",
        subtitle: "The Stream Meter",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Stream Meter",
          description:
            "Builds the royalty pool from consumption. As streams accrue against a song, the contract computes the amount owed, so payment tracks real listening rather than a delayed accounting cycle.",
          platformFunction: "Metering & Accrual",
        },
        codeSnippet:
          "function accrue(bytes32 song, uint256 streams) external onlyMeter {\n    pool[song] += streams * ratePerStream;\n    emit Accrued(song, streams, pool[song]);\n}",
        simAction: "Simulate Consumption Accrual",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving 10,000,000 streams for SNG_7712...", tone: "default" },
          { text: "Multiplying streams by per-stream rate...", tone: "default" },
          { text: "Adding earnings to royalty pool...", tone: "default" },
          { text: "Marking pool ready for distribution...", tone: "default" },
          { text: "[SUCCESS] Consumption accrued to pool.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The Seven-Day Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Seven-Day Payout",
          description:
            "Distributes the pool through Payouts and Settlements. It transfers each holder their registered share directly, so an independent artist is paid within days with no label intermediary in the path.",
          platformFunction: "Payout & Settlement",
        },
        codeSnippet:
          "function distribute(bytes32 song) external {\n    uint256 amount = pool[song];\n    Share[] memory s = splits[song];\n    for (uint i; i < s.length; i++) {\n      token.transfer(s[i].holder, amount * s[i].bps / 10000);\n    }\n    pool[song] = 0;\n}",
        simAction: "Simulate Settlement Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading royalty pool for SNG_7712...", tone: "default" },
          { text: "Applying registered 40/25/20/15 split...", tone: "default" },
          { text: "Transferring shares direct to holders...", tone: "default" },
          { text: "Bypassing any label intermediary...", tone: "default" },
          { text: "[SUCCESS] Four holders paid within seven days.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "On-chain music rights is a horizontal capability. Here is how different parts of the industry put a shared registry to work.",
    sectors: [
      { icon: Activity, title: "Independent Artists", description: "Register a song and its splits directly, so streams settle across co-writers and producers within days in the exact proportions agreed at registration, with no label sitting between the play and the payout.", assetTypes: ["Rights NFTs", "Co-Writer Splits", "Direct Royalties"] },
      { icon: Radio, title: "Publishers & Collecting Societies", description: "Replace fragmented registries with one shared record of ownership, so every rights holder is identifiable and every distribution is computed from a single, disputable-proof split ledger.", assetTypes: ["Rights Registries", "Ownership Transfers", "Distribution Runs"] },
      { icon: Globe, title: "Streaming & DSP Platforms", description: "Read the registry to identify exactly who to pay for every track, then settle on consumption instead of running slow, error-prone monthly reconciliations against outside databases.", assetTypes: ["Play Reports", "Rights Lookups", "Consumption Payouts"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a publisher's rights database or routing native artist registrations from a wallet, Cerulea holds both on one music registry.",
    tracks: [
      {
        title: "Track A: Publisher Registry Bridging",
        description:
          "For publishers and societies on legacy databases. Existing ownership and split records are translated into signed on-chain rights tokens through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Rights Database", sublabel: "Publisher Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Rights Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Music Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Artist Registration",
        description:
          "For independent artists and Web3 music apps. A wallet-native artist mints rights and registers splits directly onto the public settlement layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Artist App / Wallet", sublabel: "Creator Devices", icon: Wallet, accent: false },
          { label: "Registry Validators", sublabel: "Rights Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Music Rights Ledger", icon: Copyright, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a music rights registry with tokenised ownership, registered splits, and consumption-based settlement from scratch requires specialised rights and payments engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Ownership & Split Rules",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects music-rights infrastructure benchmarks. Reconciling fragmented registries, building split and ownership logic, and shipping consumption-based settlement for an average catalog takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your ownership and split rules into pre-audited WebAssembly binaries and provisions the music registry and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "sample-clearance-and-derivative-work-royalty-chains",
    icon: Network,
    eyebrow: "Derivative Royalty Engine",
    headline1: "Clear the sample.",
    headline2: "Pay the source forever.",
    heroDescription:
      "Record the sample clearance once on a shared network so the derivative always pays its source. The Royalty Standard, Royalty Clearing, and Provenance Notary bind the derivative to the original, and the Subgraph Indexer tracks each stream.",
    heroCta: "Deploy Derivative Royalty Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Bind a sampled work to the song built on it so every stream pays both artists automatically.",
    mechanics: [
      { title: "One-Time Clearance", description: "The clearance between the new artist and the sampled artist is recorded once. The Provenance Notary anchors the agreed share, so it never has to be renegotiated or manually tracked again." },
      { title: "Source Binding", description: "The Provenance Notary binds the derivative to the original work it samples. The link is part of the record, so a stream of the new song always knows which source it owes." },
      { title: "Split Across Generations", description: "The Royalty Standard splits each stream between the new artist and the sampled artist. Payment flows to both parties from the same play, without one waiting on the other." },
      { title: "Automatic Chained Payout", description: "The Royalty Clearing module pays the source its agreed share alongside the new artist on every stream, so a missed payment to the sampled artist becomes impossible." },
      { title: "Per-Stream Tracking", description: "The Subgraph Indexer tracks each stream of the derivative, giving the sampled artist a live view of the plays that are paying them their agreed share." },
      { title: "Deep Chain Support", description: "A derivative can itself be sampled. The chain of obligations extends across generations, so a work built on a work built on a work still pays every source in the lineage." },
    ],
    lifecycleTitle: "The Clearance Lifecycle",
    lifecycleSubtitle:
      "Follow one sample from a recorded clearance through the release of the derivative to a per-stream payout that reaches both artists.",
    lifecycleSteps: [
      {
        label: "Clearance Recording",
        description:
          "The new artist and the sampled artist record their clearance. The Provenance Notary anchors the agreed share and binds the derivative to its source.",
        icon: Handshake,
        logFilename: "cerulea_sample_engine.log",
        logLines: [
          { text: "[SYS] Initializing Sample Clearance Manifest...", time: "10:30:12", tone: "default" },
          { text: "[CMD] clearSample { new: \"TRK_9001\", source: \"TRK_2210\", share: 2000 }", time: "10:30:12", tone: "primary" },
          { text: "[AUTH] Verifying both artist signatures on clearance...", time: "10:30:13", tone: "secondary" },
          { text: "[OK] Clearance anchored at block 9010311.", time: "10:30:13", tone: "success" },
        ],
      },
      {
        label: "Derivative Binding",
        description:
          "The Provenance Notary links the new track to the sampled work, so the obligation to the source travels with the derivative from release onward.",
        icon: Network,
        logFilename: "cerulea_sample_engine.log",
        logLines: [
          { text: "[SYS] Binding derivative TRK_9001 to source TRK_2210...", time: "10:31:02", tone: "default" },
          { text: "[CMD] bindSource(TRK_9001, TRK_2210)", time: "10:31:02", tone: "primary" },
          { text: "[SYS] Lineage edge written to royalty graph.", time: "10:31:02", tone: "default" },
          { text: "[OK] Derivative bound to its source.", time: "10:31:03", tone: "success" },
        ],
      },
      {
        label: "Stream Accrual",
        description:
          "The derivative streams. The Subgraph Indexer records each play and the contract accrues the amount owed to both the new and the sampled artist.",
        icon: Activity,
        logFilename: "cerulea_sample_engine.log",
        logLines: [
          { text: "[SYS] Stream recorded for TRK_9001...", time: "15:20:45", tone: "default" },
          { text: "[CMD] meter(TRK_9001, value: 3000)", time: "15:20:45", tone: "primary" },
          { text: "[SYS] Splitting accrual 80 percent new, 20 percent source.", time: "15:20:45", tone: "default" },
          { text: "[OK] Both parties accrued from one stream.", time: "15:20:46", tone: "success" },
        ],
      },
      {
        label: "Chained Payout",
        description:
          "The Royalty Clearing module pays the new artist and the sampled artist their shares together, so the source is paid on the same stream as the derivative.",
        icon: Coins,
        logFilename: "cerulea_sample_engine.log",
        logLines: [
          { text: "[SYS] Clearing chained payout for TRK_9001...", time: "15:20:47", tone: "default" },
          { text: "[CMD] clearChain(TRK_9001)", time: "15:20:47", tone: "primary" },
          { text: "[AUTH] Routing 20 percent share to sampled artist...", time: "15:20:47", tone: "secondary" },
          { text: "[OK] New artist and source both paid.", time: "15:20:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes derivative royalties into modular contracts. Each layer records the clearance, binds the lineage, meters streams, and clears a payout that reaches every source in the chain.",
    layers: [
      {
        title: "Clearance Registry",
        subtitle: "The Agreement Anchor",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Agreement Anchor",
          description:
            "Records the one-time clearance between the new and sampled artists. The Provenance Notary anchors the agreed share so it never has to be renegotiated, and both signatures make the terms provable.",
          platformFunction: "Clearance & Metadata",
        },
        codeSnippet:
          "contract ClearanceRegistry {\n  struct Clearance { bytes32 source; uint16 sourceBps; bool signed; }\n\n  mapping(bytes32 => Clearance) public clearances;\n\n  function clear(bytes32 derivative, bytes32 source, uint16 bps) external {\n    clearances[derivative] = Clearance(source, bps, true);\n    emit Cleared(derivative, source, bps);\n  }\n}",
        simAction: "Simulate Clearance Recording",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading both artist signatures on clearance...", tone: "default" },
          { text: "Recording agreed source share of 20 percent...", tone: "default" },
          { text: "Anchoring clearance to provenance notary...", tone: "default" },
          { text: "Writing terms to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Sample clearance recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Lineage Graph",
        subtitle: "The Source Binding",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Source Binding",
          description:
            "Links a derivative to the work it samples, building a graph of obligations. Because a derivative can itself be sampled, the graph extends across generations so every source in a lineage stays payable.",
          platformFunction: "Lineage & Binding",
        },
        codeSnippet:
          "function bindSource(bytes32 derivative, bytes32 source) external {\n    require(clearances[derivative].signed, \"No clearance\");\n    parentOf[derivative] = source;\n    emit Bound(derivative, source);\n}",
        simAction: "Simulate Derivative Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking clearance exists for TRK_9001...", tone: "default" },
          { text: "Writing lineage edge to TRK_2210...", tone: "default" },
          { text: "Extending royalty graph across generations...", tone: "default" },
          { text: "Confirming obligation travels with derivative...", tone: "default" },
          { text: "[SUCCESS] Derivative bound to its source.", tone: "success" },
        ],
      },
      {
        title: "Stream Meter",
        subtitle: "The Split Accrual",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Split Accrual",
          description:
            "Meters each stream of the derivative and accrues the amount owed to both artists. The Subgraph Indexer records the plays so the sampled artist sees exactly which streams are paying them.",
          platformFunction: "Metering & Accrual",
        },
        codeSnippet:
          "function meter(bytes32 derivative, uint256 value) external onlyApp {\n    Clearance memory c = clearances[derivative];\n    uint256 sourceShare = value * c.sourceBps / 10000;\n    owed[c.source] += sourceShare;\n    owed[derivative] += value - sourceShare;\n    emit Metered(derivative, value);\n}",
        simAction: "Simulate Stream Metering",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving stream event for TRK_9001...", tone: "default" },
          { text: "Splitting value 80 percent new, 20 source...", tone: "default" },
          { text: "Accruing share owed to sampled artist...", tone: "default" },
          { text: "Recording play in subgraph index...", tone: "default" },
          { text: "[SUCCESS] Both parties accrued from one stream.", tone: "success" },
        ],
      },
      {
        title: "Chain Clearing",
        subtitle: "The Multi-Party Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Multi-Party Payout",
          description:
            "Pays every artist in the lineage from the same stream through Royalty Clearing. The new artist and each sampled source are settled together, so a missed payment to an upstream author becomes impossible.",
          platformFunction: "Clearing & Settlement",
        },
        codeSnippet:
          "function clearChain(bytes32 derivative) external {\n    bytes32 node = derivative;\n    while (node != bytes32(0)) {\n      token.transfer(ownerOf(node), owed[node]);\n      owed[node] = 0;\n      node = parentOf[node];\n    }\n}",
        simAction: "Simulate Chained Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Walking lineage chain from TRK_9001...", tone: "default" },
          { text: "Paying new artist their accrued share...", tone: "default" },
          { text: "Following edge to sampled source TRK_2210...", tone: "default" },
          { text: "Paying the source its agreed share...", tone: "default" },
          { text: "[SUCCESS] Every source in the chain paid.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Derivative royalty chains are a horizontal capability. Here is how different creators put automatic source payment to work.",
    sectors: [
      { icon: Activity, title: "Producers & Beatmakers", description: "Clear a sample once and let every stream of the finished track pay the original artist their agreed share alongside the new one, ending the missed and delayed payments that plague sampling.", assetTypes: ["Sample Clearances", "Beat Splits", "Source Payouts"] },
      { icon: Palette, title: "Remix & Mashup Platforms", description: "Let creators build on existing works legitimately, binding each remix to its sources so obligations flow automatically across a chain of derivatives no matter how deep it runs.", assetTypes: ["Remix Lineages", "Derivative Bindings", "Chained Royalties"] },
      { icon: Gamepad, title: "Content & Meme Ecosystems", description: "Track derivative creations that build on earlier ones, so when a piece is monetised every upstream author in its lineage receives their recorded share from the same event.", assetTypes: ["Derivative Graphs", "Attribution Chains", "Upstream Shares"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a label's clearance records or routing native artist agreements from a wallet, Cerulea binds every derivative to its source on one network.",
    tracks: [
      {
        title: "Track A: Clearance Record Bridging",
        description:
          "For labels and publishers holding clearance archives. Existing sample agreements are translated into signed on-chain clearances and lineage edges through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Clearance Archive", sublabel: "Label Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Agreement Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Royalty Graph", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Artist Clearance",
        description:
          "For artists and remix apps on Web3. Two wallet-native artists sign a clearance directly and route the derivative binding onto the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Artist App / Wallet", sublabel: "Creator Devices", icon: Handshake, accent: false },
          { label: "Graph Validators", sublabel: "Lineage Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Derivative Royalty Ledger", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a derivative royalty engine with one-time clearance, cross-generation lineage, and chained payouts from scratch requires specialised rights engineers and careful audit. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Clearance & Lineage Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects music-rights infrastructure benchmarks. Modelling clearance terms, building a cross-generation lineage graph, and shipping chained multi-party payouts for an average catalog takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your clearance and lineage rules into pre-audited WebAssembly binaries and provisions the royalty graph and indexer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "concert-ticket-revenue-sharing-among-artist-venue-and-promoter",
    icon: Ticket,
    eyebrow: "Ticket Settlement Layer",
    headline1: "Split at the sale.",
    headline2: "Skip the settlement.",
    heroDescription:
      "Split each ticket sale at the moment of purchase on a shared network instead of settling weeks later by manual calculation. ERC-721 NFT tickets carry the sale, and the Royalty Standard, Royalty Clearing, and Escrow and Conditional Settlement modules pay each party.",
    heroCta: "Deploy Ticket Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a delayed post-event reconciliation into an instant split across artist, venue, and promoter at every sale.",
    mechanics: [
      { title: "NFT Ticket Sale", description: "Each ticket is an ERC-721 token minted at purchase. The sale carries its own payment logic, so the split begins the moment a fan buys rather than after the show." },
      { title: "Sale-Time Split", description: "The Royalty Standard divides each ticket's value across the artist, venue, and promoter at the point of sale, applying the agreed shares before the money ever pools with one party." },
      { title: "Instant Party Payout", description: "The Royalty Clearing module routes each party their share immediately, so the artist and venue no longer wait weeks for the promoter to finish a manual calculation." },
      { title: "Escrowed Guarantees", description: "Escrow and Conditional Settlement can hold shares against conditions like a completed performance, releasing them automatically once the condition is met." },
      { title: "One Shared Figure", description: "Every party reads the same on-chain totals. The artist, venue, and promoter all see identical numbers, removing the mistrust that manual settlement breeds." },
      { title: "Transparent Resale", description: "Because tickets are tokens, resale can route a share back to the original parties automatically, extending the split beyond the primary sale." },
    ],
    lifecycleTitle: "The Ticket Settlement Lifecycle",
    lifecycleSubtitle:
      "Follow one ticket from a fan's purchase through an instant three-way split to a condition-gated release after the show.",
    lifecycleSteps: [
      {
        label: "Ticket Purchase",
        description:
          "A fan buys a ticket. An ERC-721 token mints to the buyer and the sale amount enters the split logic for the event.",
        icon: Ticket,
        logFilename: "cerulea_ticket_engine.log",
        logLines: [
          { text: "[SYS] Initializing Ticket Sale Manifest...", time: "19:02:11", tone: "default" },
          { text: "[CMD] buyTicket { event: \"EVT_4410\", seat: \"B14\", price: 8000 }", time: "19:02:11", tone: "primary" },
          { text: "[AUTH] Minting ERC-721 ticket to buyer wallet...", time: "19:02:12", tone: "secondary" },
          { text: "[OK] Ticket TKT_77120 minted at block 4410622.", time: "19:02:12", tone: "success" },
        ],
      },
      {
        label: "Sale-Time Split",
        description:
          "The Royalty Standard divides the sale across the artist, venue, and promoter, computing each share before the money settles with any one party.",
        icon: PieChart,
        logFilename: "cerulea_ticket_engine.log",
        logLines: [
          { text: "[SYS] Splitting sale for EVT_4410...", time: "19:02:12", tone: "default" },
          { text: "[CMD] splitSale(TKT_77120, [\"ARTIST\",\"VENUE\",\"PROMOTER\"])", time: "19:02:12", tone: "primary" },
          { text: "[SYS] Shares derived: 55 / 25 / 20 percent.", time: "19:02:12", tone: "default" },
          { text: "[OK] Three-way split computed at sale.", time: "19:02:13", tone: "success" },
        ],
      },
      {
        label: "Escrow Hold",
        description:
          "Escrow and Conditional Settlement holds the artist share against the performance condition, protecting each party until the show is verified.",
        icon: Lock,
        logFilename: "cerulea_ticket_engine.log",
        logLines: [
          { text: "[SYS] Placing artist share in conditional escrow...", time: "19:02:13", tone: "default" },
          { text: "[CMD] escrow(TKT_77120, condition: \"PERFORMED\")", time: "19:02:13", tone: "primary" },
          { text: "[SYS] Venue and promoter shares released now.", time: "19:02:13", tone: "default" },
          { text: "[OK] Artist share locked pending performance.", time: "19:02:14", tone: "success" },
        ],
      },
      {
        label: "Post-Show Release",
        description:
          "The performance is verified and the Royalty Clearing module releases the escrowed share, settling every party from the same shared figures.",
        icon: Handshake,
        logFilename: "cerulea_ticket_engine.log",
        logLines: [
          { text: "[SYS] Performance verified for EVT_4410...", time: "23:50:40", tone: "default" },
          { text: "[CMD] releaseEscrow(EVT_4410)", time: "23:50:40", tone: "primary" },
          { text: "[AUTH] Condition PERFORMED met, releasing artist share...", time: "23:50:40", tone: "secondary" },
          { text: "[OK] All parties settled. No manual calculation.", time: "23:50:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes concert settlement into modular contracts. Each layer mints the ticket, splits the sale, escrows against conditions, and releases every party's share on the same shared record.",
    layers: [
      {
        title: "Ticket Token",
        subtitle: "The Sale Carrier",
        icon: Ticket,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sale Carrier",
          description:
            "An ERC-721 ticket minted at purchase. It carries the sale into the settlement logic and, because it is a token, can route a share back to the original parties on resale as well as the primary sale.",
          platformFunction: "Ticketing & Metadata",
        },
        codeSnippet:
          "contract TicketToken is ERC721 {\n  struct Ticket { bytes32 event_; uint256 price; }\n\n  mapping(uint256 => Ticket) public tickets;\n\n  function buyTicket(uint256 id, bytes32 event_, uint256 price) external payable {\n    _mint(msg.sender, id);\n    tickets[id] = Ticket(event_, price);\n    _route(event_, price);\n  }\n}",
        simAction: "Simulate Ticket Purchase",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Fan purchases seat B14 for EVT_4410...", tone: "default" },
          { text: "Minting ERC-721 ticket to buyer...", tone: "default" },
          { text: "Recording sale price on the token...", tone: "default" },
          { text: "Routing sale into split logic...", tone: "default" },
          { text: "[SUCCESS] Ticket TKT_77120 minted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Sale Splitter",
        subtitle: "The Three-Way Divide",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Three-Way Divide",
          description:
            "Applies the artist, venue, and promoter shares at the point of sale through the Royalty Standard. The division happens before money pools with any party, so no one holds another's cut.",
          platformFunction: "Split & Standard",
        },
        codeSnippet:
          "function splitSale(bytes32 event_, uint256 amount) internal {\n    Share[] memory s = splits[event_];\n    for (uint i; i < s.length; i++) {\n      owed[s[i].party] += amount * s[i].bps / 10000;\n    }\n    emit SaleSplit(event_, amount);\n}",
        simAction: "Simulate Sale Split",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading event split for EVT_4410...", tone: "default" },
          { text: "Applying 55 / 25 / 20 shares to sale...", tone: "default" },
          { text: "Crediting artist, venue, and promoter...", tone: "default" },
          { text: "Recording split on shared ledger...", tone: "default" },
          { text: "[SUCCESS] Three-way split computed at sale.", tone: "success" },
        ],
      },
      {
        title: "Escrow Gate",
        subtitle: "The Performance Condition",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Performance Condition",
          description:
            "Holds shares against a condition such as a completed performance through Escrow and Conditional Settlement. Funds release automatically once the condition is met, protecting every party without a manual sign-off.",
          platformFunction: "Escrow & Conditions",
        },
        codeSnippet:
          "function escrow(bytes32 event_, address party, uint256 amount) external {\n    held[event_][party] += amount;\n    emit Escrowed(event_, party, amount);\n}\n\nfunction releaseEscrow(bytes32 event_) external {\n    require(performed[event_], \"Not performed\");\n    _payHeld(event_);\n}",
        simAction: "Simulate Escrow Hold",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Placing artist share into escrow...", tone: "default" },
          { text: "Setting release condition to PERFORMED...", tone: "default" },
          { text: "Releasing venue and promoter shares now...", tone: "default" },
          { text: "Locking artist share until show verified...", tone: "default" },
          { text: "[SUCCESS] Shares escrowed against condition.", tone: "success" },
        ],
      },
      {
        title: "Party Clearing",
        subtitle: "The Instant Settlement",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Settlement",
          description:
            "Pays each party their computed share through Royalty Clearing. Because the split and the payout run on one record, the post-event reconciliation disappears and every party sees identical figures.",
          platformFunction: "Clearing & Settlement",
        },
        codeSnippet:
          "function clearParties(bytes32 event_, address[] calldata parties) external {\n    for (uint i; i < parties.length; i++) {\n      uint256 amt = owed[parties[i]];\n      owed[parties[i]] = 0;\n      payable(parties[i]).transfer(amt);\n    }\n    emit Settled(event_);\n}",
        simAction: "Simulate Party Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming performance verified for EVT_4410...", tone: "default" },
          { text: "Loading owed balances for three parties...", tone: "default" },
          { text: "Transferring each share in one block...", tone: "default" },
          { text: "Showing identical figures to all parties...", tone: "default" },
          { text: "[SUCCESS] Artist, venue, and promoter settled.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Instant ticket settlement is a horizontal capability. Here is how different live-event operators put a shared split to work.",
    sectors: [
      { icon: Ticket, title: "Concerts & Tours", description: "Split each ticket across artist, venue, and promoter at the moment of sale, so touring acts and small venues are paid immediately instead of chasing a promoter for weeks after the show.", assetTypes: ["NFT Tickets", "Three-Way Splits", "Instant Payouts"] },
      { icon: Users, title: "Festivals & Multi-Act Events", description: "Route each sale across many performers and the venue by their agreed shares, settling a complex lineup automatically from figures every act can see rather than a spreadsheet they cannot.", assetTypes: ["Lineup Shares", "Event Pools", "Verified Settlements"] },
      { icon: Building2, title: "Venues & Ticketing Platforms", description: "Offer transparent settlement as a feature, holding shares in conditional escrow until a performance is verified and extending the split to resale so original parties keep earning.", assetTypes: ["Escrow Conditions", "Resale Royalties", "Settlement Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a ticketing platform's sales system or routing native fan purchases from a wallet, Cerulea settles both against one event ledger.",
    tracks: [
      {
        title: "Track A: Ticketing Platform Bridging",
        description:
          "For established ticketing platforms on legacy infrastructure. Primary sales are translated into signed on-chain ticket mints and splits through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Ticketing Backend", sublabel: "Sales Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Sale Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Event Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Fan Purchase",
        description:
          "For Web3 ticketing apps. A wallet-native fan buys directly, minting an NFT ticket and triggering the split on the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Ticketing App / Wallet", sublabel: "Fan Devices", icon: Ticket, accent: false },
          { label: "Settlement Validators", sublabel: "Split Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Event Settlement Ledger", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an NFT ticketing system with sale-time splits, conditional escrow, and instant multi-party settlement from scratch requires specialised payments engineers and careful audit. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Split & Escrow Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects live-event payments benchmarks. Building NFT ticketing, sale-time split logic, and conditional escrow settlement for an average promoter takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your split and escrow rules into pre-audited WebAssembly binaries and provisions the event ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "independent-artist-crowdfunding-with-fan-revenue-share",
    icon: Gift,
    eyebrow: "Fan Funding Layer",
    headline1: "Fund the album.",
    headline2: "Share the upside.",
    heroDescription:
      "Run a funding round where fans contribute through the Crowdfunding and Launchpad module and become real stakeholders. An ERC-20 token records each stake, and the Royalty Standard and Royalty Clearing modules pay fans a share of future streaming royalties.",
    heroCta: "Deploy Fan Funding Rounds",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a fan contribution from a token credit into an automatic share of an album's streaming royalties.",
    mechanics: [
      { title: "Launchpad Round", description: "The Crowdfunding and Launchpad module runs the raise. Fans contribute to a transparent round with a clear target, so an artist secures production funds without a label advance." },
      { title: "Tokenised Stakes", description: "An ERC-20 token records each fan's contribution as a stake. The token is the fan's provable claim on their share, turning a supporter into a stakeholder rather than a name in the credits." },
      { title: "Royalty-Backed Returns", description: "The Royalty Standard ties each stake to a share of future streaming royalties, so fans hold an economic interest in the album's success, not just early access." },
      { title: "Automatic Fan Payouts", description: "The Royalty Clearing module pays fans their share as royalties arrive, so the return on a contribution flows automatically without the artist processing a payout list." },
      { title: "Transparent Round Terms", description: "The raise target, the fan share, and the number of stakes are all on-chain. Every backer sees the same terms, so the deal a fan buys into is exactly the deal that executes." },
      { title: "Label-Free Production", description: "Because the crowd supplies the capital and the contract handles returns, an artist produces on their own terms, keeping ownership instead of trading it for an advance." },
    ],
    lifecycleTitle: "The Fan Funding Lifecycle",
    lifecycleSubtitle:
      "Follow one funding round from a fan's contribution through the tokenised stake to an automatic royalty share once the album streams.",
    lifecycleSteps: [
      {
        label: "Round Launch",
        description:
          "An artist opens a funding round through the Crowdfunding and Launchpad module, setting the target and the fan share of future royalties.",
        icon: Gift,
        logFilename: "cerulea_funding_engine.log",
        logLines: [
          { text: "[SYS] Initializing Funding Round Manifest...", time: "09:00:04", tone: "default" },
          { text: "[CMD] launchRound { album: \"ALB_5120\", target: 50000, fanShare: 2000 }", time: "09:00:04", tone: "primary" },
          { text: "[AUTH] Verifying artist identity and round terms...", time: "09:00:05", tone: "secondary" },
          { text: "[OK] Round opened at block 5120088.", time: "09:00:05", tone: "success" },
        ],
      },
      {
        label: "Fan Contribution",
        description:
          "A fan contributes to the round. An ERC-20 token mints to their wallet, recording the stake and its claim on future royalties.",
        icon: Users,
        logFilename: "cerulea_funding_engine.log",
        logLines: [
          { text: "[SYS] Contribution received for ALB_5120...", time: "11:20:33", tone: "default" },
          { text: "[CMD] contribute(ALB_5120, fan: \"0x77c\", amount: 250)", time: "11:20:33", tone: "primary" },
          { text: "[SYS] Minting stake tokens to fan wallet...", time: "11:20:33", tone: "default" },
          { text: "[OK] Stake recorded. Fan is now a stakeholder.", time: "11:20:34", tone: "success" },
        ],
      },
      {
        label: "Royalty Accrual",
        description:
          "The album streams. The Royalty Standard accrues the fan share of streaming royalties against the outstanding stakes.",
        icon: Activity,
        logFilename: "cerulea_funding_engine.log",
        logLines: [
          { text: "[SYS] Accruing royalties for ALB_5120...", time: "16:40:12", tone: "default" },
          { text: "[CMD] accrueFanShare(ALB_5120, royalties: 12000)", time: "16:40:12", tone: "primary" },
          { text: "[SYS] Reserving 20 percent fan share of pool.", time: "16:40:12", tone: "default" },
          { text: "[OK] Fan share accrued for distribution.", time: "16:40:13", tone: "success" },
        ],
      },
      {
        label: "Stake Payout",
        description:
          "The Royalty Clearing module distributes the accrued share across backers by their stake, so every fan receives their portion automatically.",
        icon: Coins,
        logFilename: "cerulea_funding_engine.log",
        logLines: [
          { text: "[SYS] Distributing fan share across backers...", time: "16:40:14", tone: "default" },
          { text: "[CMD] payBackers(ALB_5120)", time: "16:40:14", tone: "primary" },
          { text: "[AUTH] Weighting payout by each fan's stake...", time: "16:40:14", tone: "secondary" },
          { text: "[OK] Backers paid their royalty share.", time: "16:40:15", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fan crowdfunding into modular contracts. Each layer runs the round, records stakes, accrues the fan share, and pays backers as the album earns.",
    layers: [
      {
        title: "Launchpad",
        subtitle: "The Funding Round",
        icon: Gift,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Funding Round",
          description:
            "Runs the raise through the Crowdfunding and Launchpad module. It publishes the target, the fan share, and the terms on-chain so every backer buys into exactly the deal that will execute.",
          platformFunction: "Fundraising & Terms",
        },
        codeSnippet:
          "contract Launchpad {\n  struct Round { uint256 target; uint256 raised; uint16 fanBps; bool open; }\n\n  mapping(bytes32 => Round) public rounds;\n\n  function launch(bytes32 album, uint256 target, uint16 fanBps) external onlyArtist {\n    rounds[album] = Round(target, 0, fanBps, true);\n    emit Launched(album, target, fanBps);\n  }\n}",
        simAction: "Simulate Round Launch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading artist identity for ALB_5120...", tone: "default" },
          { text: "Setting target of 50,000 and 20 percent fan share...", tone: "default" },
          { text: "Publishing round terms on-chain...", tone: "default" },
          { text: "Opening the round for contributions...", tone: "default" },
          { text: "[SUCCESS] Funding round opened for ALB_5120.", tone: "success" },
        ],
      },
      {
        title: "Stake Token",
        subtitle: "The Backer Claim",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Backer Claim",
          description:
            "An ERC-20 token that records each fan's contribution as a stake. It is the backer's provable claim on their share of future royalties, turning a supporter into an economic stakeholder.",
          platformFunction: "Stake & Metadata",
        },
        codeSnippet:
          "function contribute(bytes32 album) external payable {\n    Round storage r = rounds[album];\n    require(r.open, \"Round closed\");\n    r.raised += msg.value;\n    stakeToken.mint(msg.sender, msg.value);\n    emit Contributed(album, msg.sender, msg.value);\n}",
        simAction: "Simulate Fan Contribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Fan 0x77c contributes 250 to ALB_5120...", tone: "default" },
          { text: "Adding contribution to raised total...", tone: "default" },
          { text: "Minting stake tokens to fan wallet...", tone: "default" },
          { text: "Recording claim on future royalties...", tone: "default" },
          { text: "[SUCCESS] Fan is now a stakeholder.", tone: "success" },
        ],
      },
      {
        title: "Royalty Accrual",
        subtitle: "The Fan Share Pool",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fan Share Pool",
          description:
            "Reserves the backers' portion of streaming royalties through the Royalty Standard. As the album earns, the fan share accrues into a pool held for distribution across every outstanding stake.",
          platformFunction: "Accrual & Standard",
        },
        codeSnippet:
          "function accrueFanShare(bytes32 album, uint256 royalties) external onlyMeter {\n    uint256 fanCut = royalties * rounds[album].fanBps / 10000;\n    fanPool[album] += fanCut;\n    emit Accrued(album, fanCut);\n}",
        simAction: "Simulate Royalty Accrual",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving streaming royalties for ALB_5120...", tone: "default" },
          { text: "Reserving 20 percent fan share of pool...", tone: "default" },
          { text: "Adding fan cut to the backer pool...", tone: "default" },
          { text: "Marking pool ready for distribution...", tone: "default" },
          { text: "[SUCCESS] Fan share accrued for backers.", tone: "success" },
        ],
      },
      {
        title: "Backer Clearing",
        subtitle: "The Stake-Weighted Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Stake-Weighted Payout",
          description:
            "Distributes the fan pool across backers by stake through Royalty Clearing. Every supporter receives their portion automatically, so an early contribution keeps paying as the album streams.",
          platformFunction: "Clearing & Settlement",
        },
        codeSnippet:
          "function payBackers(bytes32 album, address[] calldata fans) external {\n    uint256 pool = fanPool[album];\n    uint256 supply = stakeToken.totalSupply();\n    for (uint i; i < fans.length; i++) {\n      token.transfer(fans[i], pool * stakeToken.balanceOf(fans[i]) / supply);\n    }\n}",
        simAction: "Simulate Backer Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading fan pool for ALB_5120...", tone: "default" },
          { text: "Weighting payout by each backer's stake...", tone: "default" },
          { text: "Transferring shares across supporters...", tone: "default" },
          { text: "Resetting distributed pool to zero...", tone: "default" },
          { text: "[SUCCESS] Backers paid their royalty share.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Fan revenue-share crowdfunding is a horizontal capability. Here is how different creators put stakeholder funding to work.",
    sectors: [
      { icon: Palette, title: "Independent Musicians", description: "Raise production funds directly from fans and give each backer an automatic share of streaming royalties, producing an album on the artist's own terms without trading ownership for a label advance.", assetTypes: ["Funding Rounds", "Fan Stakes", "Royalty Returns"] },
      { icon: Gamepad, title: "Indie Game & Film Creators", description: "Fund a project with a crowd that shares its upside, turning supporters into stakeholders who are paid as the work earns rather than backers who receive only a credit.", assetTypes: ["Project Raises", "Backer Tokens", "Revenue Shares"] },
      { icon: Users, title: "Creator Communities & DAOs", description: "Let a community pool capital behind a creator and hold a transparent, tokenised claim on the returns, with the terms of every round published on-chain for all backers to see.", assetTypes: ["Community Pools", "Stake Claims", "Transparent Terms"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a crowdfunding platform or routing native fan contributions from a wallet, Cerulea runs every round and payout on one ledger.",
    tracks: [
      {
        title: "Track A: Crowdfunding Platform Bridging",
        description:
          "For established crowdfunding platforms on legacy infrastructure. Contributions and payout runs are translated into signed on-chain stakes through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Funding Backend", sublabel: "Pledge Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Stake Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Funding Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Fan Contribution",
        description:
          "For Web3 launchpads and creator apps. A wallet-native fan contributes directly, minting a stake and joining the round on the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Launchpad App / Wallet", sublabel: "Fan Devices", icon: Gift, accent: false },
          { label: "Round Validators", sublabel: "Stake Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Fan Funding Ledger", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a fan funding platform with a launchpad, tokenised stakes, and royalty-backed returns from scratch requires specialised token and payments engineers. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Round & Payout Rules",
      ruleCount: 45,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects token-fundraising infrastructure benchmarks. Building a compliant launchpad, tokenising stakes, and wiring royalty-backed returns for an average round takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your round and payout rules into pre-audited WebAssembly binaries and provisions the funding ledger and clearing layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "music-festival-lineup-contract-and-payment-escrow-for-artists",
    icon: Handshake,
    eyebrow: "Booking Escrow Layer",
    headline1: "Lock the fee.",
    headline2: "Trust the lineup.",
    heroDescription:
      "Hold each artist fee in escrow ahead of the festival through Escrow and Conditional Settlement so both sides can trust the deal. Provenance Notary anchors the booking, and Notifications track each stage from contract to verified performance.",
    heroCta: "Deploy Booking Escrow",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Give artists certainty of payment and organisers certainty of performance by escrowing each booked fee in advance.",
    mechanics: [
      { title: "Pre-Funded Escrow", description: "Escrow and Conditional Settlement holds each artist fee before the festival. The money is locked and provable, so an artist trusts the payment even from an unfamiliar organiser." },
      { title: "Anchored Booking", description: "The Provenance Notary anchors each booking contract. The agreed fee, date, and slot are sealed on-chain, so the terms cannot drift between the handshake and the show." },
      { title: "Performance Release", description: "The escrow releases an artist's fee once the performance is verified. Payment is automatic on delivery, so no artist waits on an organiser's manual sign-off after the set." },
      { title: "Per-Artist Contracts", description: "A festival books many artists under separate escrows. Each contract stands alone, so one disputed booking never holds up payment to the rest of the lineup." },
      { title: "Stage Notifications", description: "The Notifications module tracks each stage. Both artist and organiser are alerted as a booking is signed, funded, performed, and released, so nobody is left guessing." },
      { title: "Mutual Assurance", description: "Because the fee is locked and the booking is anchored, the artist trusts the payment and the organiser trusts the lineup, replacing reputation risk with cryptographic certainty." },
    ],
    lifecycleTitle: "The Booking Lifecycle",
    lifecycleSubtitle:
      "Follow one artist booking from an anchored contract through a pre-funded escrow to an automatic release once the set is performed.",
    lifecycleSteps: [
      {
        label: "Booking Anchor",
        description:
          "An organiser books an artist. The Provenance Notary anchors the fee, date, and slot as the sealed terms of the engagement.",
        icon: ScrollText,
        logFilename: "cerulea_booking_engine.log",
        logLines: [
          { text: "[SYS] Initializing Booking Manifest...", time: "10:12:00", tone: "default" },
          { text: "[CMD] anchorBooking { artist: \"ART_2201\", fee: 30000, slot: \"SAT_2100\" }", time: "10:12:00", tone: "primary" },
          { text: "[AUTH] Verifying both signatures on booking terms...", time: "10:12:01", tone: "secondary" },
          { text: "[OK] Booking BKG_66102 anchored at block 6610233.", time: "10:12:01", tone: "success" },
        ],
      },
      {
        label: "Escrow Funding",
        description:
          "The organiser funds the escrow ahead of the festival. Escrow and Conditional Settlement locks the fee, and Notifications alert the artist that payment is secured.",
        icon: Lock,
        logFilename: "cerulea_booking_engine.log",
        logLines: [
          { text: "[SYS] Funding escrow for BKG_66102...", time: "14:05:20", tone: "default" },
          { text: "[CMD] fundEscrow(BKG_66102, amount: 30000)", time: "14:05:20", tone: "primary" },
          { text: "[SYS] Fee locked, artist notified of secured payment.", time: "14:05:20", tone: "default" },
          { text: "[OK] Escrow funded and pending performance.", time: "14:05:21", tone: "success" },
        ],
      },
      {
        label: "Performance Verification",
        description:
          "The artist performs their slot. The performance is verified against the booking, satisfying the release condition on the escrow.",
        icon: HeartPulse,
        logFilename: "cerulea_booking_engine.log",
        logLines: [
          { text: "[SYS] Verifying performance for BKG_66102...", time: "21:45:10", tone: "default" },
          { text: "[CMD] confirmPerformance(BKG_66102)", time: "21:45:10", tone: "primary" },
          { text: "[AUTH] Slot SAT_2100 confirmed as delivered...", time: "21:45:10", tone: "secondary" },
          { text: "[OK] Release condition satisfied.", time: "21:45:11", tone: "success" },
        ],
      },
      {
        label: "Fee Release",
        description:
          "The escrow releases the fee to the artist automatically, and Notifications confirm settlement to both parties.",
        icon: Wallet,
        logFilename: "cerulea_booking_engine.log",
        logLines: [
          { text: "[SYS] Releasing escrowed fee for BKG_66102...", time: "21:45:12", tone: "default" },
          { text: "[CMD] release(BKG_66102)", time: "21:45:12", tone: "primary" },
          { text: "[SYS] Transferring 30000 to artist wallet...", time: "21:45:12", tone: "default" },
          { text: "[OK] Artist paid on verified performance.", time: "21:45:13", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes festival bookings into modular contracts. Each layer anchors the deal, funds the escrow, verifies the set, and releases the fee without either party trusting the other on reputation alone.",
    layers: [
      {
        title: "Booking Registry",
        subtitle: "The Sealed Contract",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Contract",
          description:
            "Anchors each engagement through the Provenance Notary. The fee, date, and slot are sealed on-chain so the agreed terms cannot drift between the handshake and the show.",
          platformFunction: "Booking & Metadata",
        },
        codeSnippet:
          "contract BookingRegistry {\n  struct Booking { address artist; uint256 fee; bytes32 slot; bool performed; }\n\n  mapping(bytes32 => Booking) public bookings;\n\n  function anchor(bytes32 id, address artist, uint256 fee, bytes32 slot) external onlyOrganiser {\n    bookings[id] = Booking(artist, fee, slot, false);\n    emit Anchored(id, artist, fee);\n  }\n}",
        simAction: "Simulate Booking Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading both signatures on the booking...", tone: "default" },
          { text: "Sealing fee of 30,000 and slot SAT_2100...", tone: "default" },
          { text: "Anchoring terms to provenance notary...", tone: "default" },
          { text: "Writing booking to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Booking BKG_66102 anchored.", tone: "success" },
        ],
      },
      {
        title: "Escrow Vault",
        subtitle: "The Locked Fee",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Locked Fee",
          description:
            "Holds the artist fee ahead of the festival through Escrow and Conditional Settlement. The funds are locked and provable, so an artist trusts payment even from an organiser they have never worked with.",
          platformFunction: "Escrow & Custody",
        },
        codeSnippet:
          "function fundEscrow(bytes32 id) external payable onlyOrganiser {\n    Booking memory b = bookings[id];\n    require(msg.value == b.fee, \"Wrong amount\");\n    held[id] = msg.value;\n    emit Funded(id, msg.value);\n}",
        simAction: "Simulate Escrow Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Organiser funds escrow for BKG_66102...", tone: "default" },
          { text: "Checking amount matches the booked fee...", tone: "default" },
          { text: "Locking 30,000 in the escrow vault...", tone: "default" },
          { text: "Notifying artist of secured payment...", tone: "default" },
          { text: "[SUCCESS] Escrow funded, fee locked.", tone: "success" },
        ],
      },
      {
        title: "Performance Oracle",
        subtitle: "The Delivery Check",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Delivery Check",
          description:
            "Verifies that the booked set was performed. It satisfies the escrow's release condition only once the slot is confirmed as delivered, so payment tracks real performance rather than a promise.",
          platformFunction: "Verification & Conditions",
        },
        codeSnippet:
          "function confirmPerformance(bytes32 id) external onlyVerifier {\n    bookings[id].performed = true;\n    emit Performed(id, bookings[id].slot);\n}",
        simAction: "Simulate Performance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking slot SAT_2100 for BKG_66102...", tone: "default" },
          { text: "Confirming the set was delivered...", tone: "default" },
          { text: "Setting performed flag on booking...", tone: "default" },
          { text: "Satisfying escrow release condition...", tone: "default" },
          { text: "[SUCCESS] Performance verified on-chain.", tone: "success" },
        ],
      },
      {
        title: "Release Engine",
        subtitle: "The Automatic Settlement",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Settlement",
          description:
            "Releases the escrowed fee once the performance condition is met and fires Notifications to both parties. The artist is paid on delivery with no manual sign-off, and each booking settles independently.",
          platformFunction: "Release & Settlement",
        },
        codeSnippet:
          "function release(bytes32 id) external {\n    require(bookings[id].performed, \"Not performed\");\n    uint256 amount = held[id];\n    held[id] = 0;\n    payable(bookings[id].artist).transfer(amount);\n    emit Released(id, amount);\n}",
        simAction: "Simulate Fee Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming performance verified for BKG_66102...", tone: "default" },
          { text: "Loading locked fee from escrow vault...", tone: "default" },
          { text: "Transferring 30,000 to artist wallet...", tone: "default" },
          { text: "Notifying both parties of settlement...", tone: "default" },
          { text: "[SUCCESS] Artist paid on verified performance.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Booking escrow is a horizontal capability. Here is how different live-event organisers put pre-funded certainty to work.",
    sectors: [
      { icon: Users, title: "Festivals & Multi-Artist Events", description: "Book a full lineup under separate escrows funded in advance, so every artist trusts their payment and one disputed slot never holds up settlement for the rest of the bill.", assetTypes: ["Booking Contracts", "Per-Artist Escrows", "Performance Releases"] },
      { icon: Handshake, title: "Agencies & Artist Management", description: "Give represented artists certainty that a fee is locked before they travel, replacing the risk of chasing an unfamiliar organiser with an escrow that releases automatically on delivery.", assetTypes: ["Locked Fees", "Anchored Terms", "Stage Notifications"] },
      { icon: Building2, title: "Venues & Promoters", description: "Assure talent that payment is secured while keeping funds until the set is performed, turning reputation-based booking into a settlement that both sides can verify on-chain.", assetTypes: ["Funded Bookings", "Delivery Conditions", "Settlement Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an agency's booking system or routing native artist agreements from a wallet, Cerulea escrows every fee on one ledger.",
    tracks: [
      {
        title: "Track A: Booking System Bridging",
        description:
          "For festivals and agencies on legacy booking software. Existing contracts are translated into anchored on-chain bookings and funded escrows through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Booking System", sublabel: "Agency Software", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Contract Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Artist Booking",
        description:
          "For Web3 booking apps. A wallet-native artist and organiser sign a booking directly and fund the escrow on the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Booking App / Wallet", sublabel: "Artist & Organiser Devices", icon: Handshake, accent: false },
          { label: "Escrow Validators", sublabel: "Release Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Booking Escrow Ledger", icon: Wallet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a booking platform with anchored contracts, pre-funded escrow, and performance-gated release from scratch requires specialised payments engineers and careful audit. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Booking & Escrow Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects event-payments infrastructure benchmarks. Building anchored booking contracts, a conditional escrow vault, and performance-gated release for an average festival takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your booking and escrow rules into pre-audited WebAssembly binaries and provisions the escrow ledger and notification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cover-song-licensing-and-mechanical-royalty-automation",
    icon: FileCheck,
    eyebrow: "Mechanical Licensing Engine",
    headline1: "Match the songwriter.",
    headline2: "Clear the maze.",
    heroDescription:
      "Anchor the original song rights on a shared network so a cover is matched to its songwriter automatically. The Royalty Standard, Royalty Clearing, Provenance Notary, and DID and VC Ledger route mechanical royalties to the verified rights holders in any territory.",
    heroCta: "Deploy Mechanical Licensing",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace a cross-territory licensing maze with an automatic match between a cover and the songwriter it owes.",
    mechanics: [
      { title: "Anchored Original Rights", description: "The Provenance Notary anchors each original song's rights on a shared network. A cover has a definitive record to match against instead of a scattered publisher database." },
      { title: "Automatic Songwriter Match", description: "When an artist records a cover, the contract matches it to the anchored original and identifies the songwriter automatically, clearing the manual search that usually stalls a licence." },
      { title: "Verified Rights Holders", description: "The DID and VC Ledger verifies each rights holder's identity, so mechanical royalties reach the real songwriter and publisher rather than an outdated contact." },
      { title: "Cross-Territory Routing", description: "The Royalty Standard routes mechanical royalties to the right holders regardless of territory, so a cover recorded in one country still pays a songwriter in another." },
      { title: "Automated Mechanicals", description: "The Royalty Clearing module pays the mechanical royalty on each use, so the obligation a cover creates is settled automatically rather than tracked by hand." },
      { title: "Provable Licence Trail", description: "The match, the licence, and each payment are anchored on-chain, giving the covering artist and the songwriter a verifiable record that the mechanical was cleared." },
    ],
    lifecycleTitle: "The Mechanical Lifecycle",
    lifecycleSubtitle:
      "Follow one cover from an anchored original through an automatic songwriter match to a mechanical royalty routed across territory.",
    lifecycleSteps: [
      {
        label: "Original Anchoring",
        description:
          "A songwriter's rights are anchored on the shared network. The Provenance Notary records the original song and its verified rights holders.",
        icon: Copyright,
        logFilename: "cerulea_mechanical_engine.log",
        logLines: [
          { text: "[SYS] Initializing Original Rights Manifest...", time: "08:30:05", tone: "default" },
          { text: "[CMD] anchorOriginal { song: \"ORG_3300\", writers: 2 }", time: "08:30:05", tone: "primary" },
          { text: "[AUTH] Verifying songwriter credentials via DID ledger...", time: "08:30:06", tone: "secondary" },
          { text: "[OK] Original anchored at block 3300455.", time: "08:30:06", tone: "success" },
        ],
      },
      {
        label: "Cover Match",
        description:
          "An artist records a cover. The contract matches it to the anchored original and identifies the songwriter to be licensed, with no manual search.",
        icon: Search,
        logFilename: "cerulea_mechanical_engine.log",
        logLines: [
          { text: "[SYS] Cover registration received...", time: "12:15:40", tone: "default" },
          { text: "[CMD] matchCover(cover: \"CVR_9900\", original: \"ORG_3300\")", time: "12:15:40", tone: "primary" },
          { text: "[SYS] Songwriter identified from anchored rights.", time: "12:15:40", tone: "default" },
          { text: "[OK] Cover matched to its original.", time: "12:15:41", tone: "success" },
        ],
      },
      {
        label: "Licence Grant",
        description:
          "The mechanical licence is granted against the match. The Royalty Standard records the territory and the rate owed to the songwriter.",
        icon: FileCheck,
        logFilename: "cerulea_mechanical_engine.log",
        logLines: [
          { text: "[SYS] Granting mechanical licence for CVR_9900...", time: "12:16:10", tone: "default" },
          { text: "[CMD] grantMechanical(CVR_9900, territory: \"US\", rate: 1200)", time: "12:16:10", tone: "primary" },
          { text: "[AUTH] Binding rate and territory to the match...", time: "12:16:11", tone: "secondary" },
          { text: "[OK] Mechanical licence granted.", time: "12:16:11", tone: "success" },
        ],
      },
      {
        label: "Royalty Routing",
        description:
          "The Royalty Clearing module routes the mechanical royalty to the verified songwriter, reaching the right holder regardless of territory.",
        icon: Coins,
        logFilename: "cerulea_mechanical_engine.log",
        logLines: [
          { text: "[SYS] Routing mechanical royalty for CVR_9900...", time: "17:40:22", tone: "default" },
          { text: "[CMD] routeMechanical(CVR_9900, amount: 1200)", time: "17:40:22", tone: "primary" },
          { text: "[SYS] Resolving songwriter wallet across territory...", time: "17:40:22", tone: "default" },
          { text: "[OK] Songwriter paid. Licensing maze cleared.", time: "17:40:23", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes mechanical licensing into modular contracts. Each layer anchors the original, matches the cover, grants the licence, and routes royalties to a verified songwriter in any territory.",
    layers: [
      {
        title: "Original Registry",
        subtitle: "The Rights Anchor",
        icon: Copyright,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rights Anchor",
          description:
            "Anchors each original song and its rights holders through the Provenance Notary. It gives a cover a definitive record to match against instead of a scattered, out-of-date publisher database.",
          platformFunction: "Registration & Metadata",
        },
        codeSnippet:
          "contract OriginalRegistry {\n  struct Original { bytes32[] writers; bool anchored; }\n\n  mapping(bytes32 => Original) public originals;\n\n  function anchor(bytes32 song, bytes32[] calldata writers) external onlyRegistrar {\n    originals[song] = Original(writers, true);\n    emit Anchored(song, writers.length);\n  }\n}",
        simAction: "Simulate Original Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading two songwriters for ORG_3300...", tone: "default" },
          { text: "Verifying credentials through DID ledger...", tone: "default" },
          { text: "Anchoring rights to provenance notary...", tone: "default" },
          { text: "Writing original to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Original ORG_3300 anchored.", tone: "success" },
        ],
      },
      {
        title: "Cover Matcher",
        subtitle: "The Songwriter Finder",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Songwriter Finder",
          description:
            "Resolves a cover to its anchored original and identifies the songwriter to be licensed. It clears the manual, cross-publisher search that normally stalls a mechanical licence for months.",
          platformFunction: "Matching & Attribution",
        },
        codeSnippet:
          "function matchCover(bytes32 cover, bytes32 original) external returns (bytes32[] memory) {\n    require(originals[original].anchored, \"Unanchored original\");\n    coverOf[cover] = original;\n    emit Matched(cover, original);\n    return originals[original].writers;\n}",
        simAction: "Simulate Cover Match",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving cover registration CVR_9900...", tone: "default" },
          { text: "Matching cover to anchored original ORG_3300...", tone: "default" },
          { text: "Identifying songwriters from the record...", tone: "default" },
          { text: "Binding cover to its source song...", tone: "default" },
          { text: "[SUCCESS] Cover matched to its original.", tone: "success" },
        ],
      },
      {
        title: "Licence Grantor",
        subtitle: "The Territory Binder",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Territory Binder",
          description:
            "Grants the mechanical licence against a match and binds the rate and territory through the Royalty Standard. It expresses a cross-border obligation as data so it can be settled anywhere.",
          platformFunction: "Licensing & Standard",
        },
        codeSnippet:
          "function grantMechanical(bytes32 cover, bytes2 territory, uint256 rate) external {\n    require(coverOf[cover] != bytes32(0), \"No match\");\n    licences[cover] = Mechanical(territory, rate, true);\n    emit Granted(cover, territory, rate);\n}",
        simAction: "Simulate Licence Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming cover CVR_9900 has a match...", tone: "default" },
          { text: "Binding territory US and mechanical rate...", tone: "default" },
          { text: "Recording licence against the cover...", tone: "default" },
          { text: "Marking mechanical as grantable...", tone: "default" },
          { text: "[SUCCESS] Mechanical licence granted.", tone: "success" },
        ],
      },
      {
        title: "Mechanical Clearing",
        subtitle: "The Cross-Border Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cross-Border Payout",
          description:
            "Routes the mechanical royalty to the verified songwriter through Royalty Clearing. The DID and VC Ledger resolves the right holder's wallet, so payment reaches the songwriter regardless of territory.",
          platformFunction: "Clearing & Settlement",
        },
        codeSnippet:
          "function routeMechanical(bytes32 cover) external {\n    Mechanical memory m = licences[cover];\n    bytes32[] memory writers = originals[coverOf[cover]].writers;\n    for (uint i; i < writers.length; i++) {\n      token.transfer(walletOf(writers[i]), m.rate / writers.length);\n    }\n}",
        simAction: "Simulate Royalty Routing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading mechanical licence for CVR_9900...", tone: "default" },
          { text: "Resolving songwriter wallets across territory...", tone: "default" },
          { text: "Routing royalty to each verified holder...", tone: "default" },
          { text: "Anchoring payment to the licence trail...", tone: "default" },
          { text: "[SUCCESS] Songwriter paid, maze cleared.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Mechanical royalty automation is a horizontal capability. Here is how different parts of the industry put automatic matching to work.",
    sectors: [
      { icon: Palette, title: "Covering & Recording Artists", description: "Record a cover and be matched to the original songwriter automatically, clearing the mechanical licence and paying the right holder without navigating a maze of publishers and territories.", assetTypes: ["Cover Matches", "Mechanical Licences", "Songwriter Payouts"] },
      { icon: Copyright, title: "Songwriters & Publishers", description: "Anchor original rights once and receive mechanical royalties whenever a cover is recorded, with verified identity ensuring payment reaches the real holder rather than an outdated contact.", assetTypes: ["Anchored Rights", "Verified Identities", "Cross-Territory Royalties"] },
      { icon: Globe, title: "DSPs & Licensing Bodies", description: "Resolve cover licensing against one shared record instead of chasing publishers across borders, settling mechanicals automatically and holding a provable trail for every grant.", assetTypes: ["Licence Lookups", "Grant Records", "Payment Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a publisher's rights database or routing native artist registrations from a wallet, Cerulea matches and settles every cover on one network.",
    tracks: [
      {
        title: "Track A: Publisher Rights Bridging",
        description:
          "For publishers and licensing bodies on legacy databases. Existing original rights are translated into anchored on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Rights Database", sublabel: "Publisher Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Rights Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Mechanical Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Cover Registration",
        description:
          "For Web3 music apps. A wallet-native artist registers a cover directly, triggering the songwriter match on the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Recording App / Wallet", sublabel: "Artist Devices", icon: Fingerprint, accent: false },
          { label: "Match Validators", sublabel: "Licensing Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Mechanical Royalty Ledger", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a mechanical licensing engine with anchored originals, automatic cover matching, and cross-territory royalty routing from scratch requires specialised rights engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Matching & Mechanical Rules",
      ruleCount: 49,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects music-licensing infrastructure benchmarks. Modelling mechanical rates, wiring cross-territory publisher lookups, and building a verifiable licensing trail for an average catalog takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your matching and mechanical rules into pre-audited WebAssembly binaries and provisions the mechanical registry and identity ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const artCreatorEconomyItems: ExtraCaseItem[] = [
  {
    label: "Creator royalty micropayments and transparent revenue splits",
    href: "/solutions/use-case/creator-royalty-micropayments-and-transparent-revenue-splits",
    description: "Per-stream payouts with a split every contributor audits.",
    icon: Coins,
    category: "DAPPS",
    tags: ["Creator", "Royalties"],
    industry: INDUSTRY,
  },
  {
    label: "Content licensing across multiple streaming platforms",
    href: "/solutions/use-case/content-licensing-across-multiple-streaming-platforms",
    description: "One licence record enforcing every window and territory.",
    icon: ScrollText,
    category: "ENTERPRISE",
    tags: ["Licensing", "Streaming"],
    industry: INDUSTRY,
  },
  {
    label: "User-generated content ownership and monetization registry",
    href: "/solutions/use-case/user-generated-content-ownership-and-monetization-registry",
    description: "Provable authorship that pays the maker on reuse.",
    icon: Copyright,
    category: "DAPPS",
    tags: ["UGC", "Ownership"],
    industry: INDUSTRY,
  },
  {
    label: "Subscription bundle revenue sharing across content partners",
    href: "/solutions/use-case/subscription-bundle-revenue-sharing-across-content-partners",
    description: "Bundle splits by verified watch-time, no spreadsheet.",
    icon: PieChart,
    category: "ENTERPRISE",
    tags: ["Bundles", "Settlement"],
    industry: INDUSTRY,
  },
  {
    label: "Music rights ownership and royalty distribution on-chain",
    href: "/solutions/use-case/music-rights-ownership-and-royalty-distribution-on-chain",
    description: "Registered rights paying every holder within seven days.",
    icon: Activity,
    category: "DAPPS",
    tags: ["Music", "Rights"],
    industry: INDUSTRY,
  },
  {
    label: "Sample clearance and derivative work royalty chains",
    href: "/solutions/use-case/sample-clearance-and-derivative-work-royalty-chains",
    description: "Cleared samples paying the source on every stream.",
    icon: Network,
    category: "DAPPS",
    tags: ["Sampling", "Royalties"],
    industry: INDUSTRY,
  },
  {
    label: "Concert ticket revenue sharing among artist, venue, and promoter",
    href: "/solutions/use-case/concert-ticket-revenue-sharing-among-artist-venue-and-promoter",
    description: "Three-way ticket splits settled at the sale.",
    icon: Ticket,
    category: "SME",
    tags: ["Ticketing", "Live Events"],
    industry: INDUSTRY,
  },
  {
    label: "Independent artist crowdfunding with fan revenue share",
    href: "/solutions/use-case/independent-artist-crowdfunding-with-fan-revenue-share",
    description: "Fans fund albums and share future streaming royalties.",
    icon: Gift,
    category: "DAPPS",
    tags: ["Crowdfunding", "Fans"],
    industry: INDUSTRY,
  },
  {
    label: "Music festival lineup contract and payment escrow for artists",
    href: "/solutions/use-case/music-festival-lineup-contract-and-payment-escrow-for-artists",
    description: "Pre-funded escrow releasing fees on verified performance.",
    icon: Handshake,
    category: "SME",
    tags: ["Festivals", "Escrow"],
    industry: INDUSTRY,
  },
  {
    label: "Cover song licensing and mechanical royalty automation",
    href: "/solutions/use-case/cover-song-licensing-and-mechanical-royalty-automation",
    description: "Covers matched to songwriters with cross-territory mechanicals.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Licensing", "Mechanicals"],
    industry: INDUSTRY,
  },
]
