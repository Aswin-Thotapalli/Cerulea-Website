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

const INDUSTRY = "Enterprise IT & SaaS"

export const enterpriseItSaasCases: CaseEntry[] = [
  {
    slug: "research-data-integrity-and-ip-ownership-across-collaborative-r-d",
    icon: FlaskConical,
    eyebrow: "Collaborative R&D Provenance Engine",
    headline1: "Attribute every contribution.",
    headline2: "Settle inventorship with proof.",
    heroDescription:
      "Record every researcher contribution across a multi-institution consortium on a private R&D ledger with attributed provenance. Cerulea Studio assembles it from the Provenance Notary, DID and VC Ledger, and On-chain Data Models so that inventorship rests on a neutral, tamper-proof trail rather than competing lab notebooks.",
    heroCta: "Deploy R&D Provenance Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a contested paper trail of lab notebooks into one neutral, attributed record of who invented what and when.",
    mechanics: [
      { title: "Attributed Contribution Log", description: "Replace siloed notebooks. Every researcher writes each dataset, result, and design decision to one shared ledger, signed with their verified identity, so contribution history survives past the collaboration itself." },
      { title: "Provenance Notary", description: "Anchor each result at the moment it is produced. The Provenance Notary binds a contribution to its author, its timestamp, and its input data, making later back-dating or reassignment mathematically detectable." },
      { title: "Verifiable Inventorship", description: "Support patent filings with cryptographic evidence. The trail reconstructs exactly who contributed the inventive step and when, giving counsel a neutral record to attach to an application." },
      { title: "Identity-Bound Records", description: "Tie every entry to a real person and institution. The DID and VC Ledger issues each researcher a verifiable credential, so no contribution is anonymous and none can be forged after the fact." },
      { title: "Structured Data Models", description: "Capture research as queryable objects. On-chain Data Models schematize experiments and outputs, so a dispute is resolved against structured fields rather than scanned PDFs." },
      { title: "Neutral Dispute Record", description: "Settle ownership from evidence. When a commercial breakthrough triggers a claim, the consortium arbitrates against one signed history instead of two conflicting narratives." },
    ],
    lifecycleTitle: "The Contribution Lifecycle",
    lifecycleSubtitle:
      "Follow a single research contribution from the moment it is logged to the point it anchors a patent filing years later.",
    lifecycleSteps: [
      {
        label: "Researcher Onboarding",
        description:
          "Each contributing institution enrolls its researchers. The contract issues every participant a verifiable credential binding their identity to their home institution and role.",
        icon: IdCard,
        logFilename: "cerulea_rnd_ledger.log",
        logLines: [
          { text: "[SYS] Initializing Consortium Contributor Registry...", time: "09:11:04", tone: "default" },
          { text: "[CMD] enrollResearcher { inst: \"MIT_CSAIL\", role: \"PI\", did: \"did:cer:0x4a2\" }", time: "09:11:04", tone: "primary" },
          { text: "[AUTH] Issuing verifiable credential and binding institution...", time: "09:11:05", tone: "secondary" },
          { text: "[OK] Researcher RSR_2291 enrolled at block 5510233.", time: "09:11:05", tone: "success" },
        ],
      },
      {
        label: "Contribution Logging",
        description:
          "A researcher submits a dataset or result. The Provenance Notary anchors its digest, its author, and its inputs, fixing the moment of creation on the ledger.",
        icon: FlaskConical,
        logFilename: "cerulea_rnd_ledger.log",
        logLines: [
          { text: "[SYS] New contribution pending anchor from RSR_2291...", time: "14:32:18", tone: "default" },
          { text: "[CMD] logContribution(hash: \"0x9f31ac\", inputs: [\"DS_44\", \"DS_51\"])", time: "14:32:19", tone: "primary" },
          { text: "[SYS] Author signature and timestamp sealed.", time: "14:32:19", tone: "default" },
          { text: "[OK] Contribution CTR_88421 anchored. Trail extended.", time: "14:32:20", tone: "success" },
        ],
      },
      {
        label: "Inventorship Assembly",
        description:
          "As a breakthrough forms, the contract assembles the ordered chain of contributions that led to it, ready to hand to patent counsel as inventorship evidence.",
        icon: FileCheck,
        logFilename: "cerulea_rnd_ledger.log",
        logLines: [
          { text: "[SYS] Assembling inventorship chain for CLAIM_17...", time: "10:05:41", tone: "default" },
          { text: "[CMD] traceInventiveStep(result: \"BRK_09\")", time: "10:05:41", tone: "primary" },
          { text: "[AUTH] Ordering 14 signed contributions by timestamp...", time: "10:05:42", tone: "secondary" },
          { text: "[OK] Inventorship trail assembled. 3 co-inventors identified.", time: "10:05:42", tone: "success" },
        ],
      },
      {
        label: "Dispute Resolution",
        description:
          "A commercialization claim triggers arbitration. The consortium queries the neutral record and resolves ownership against the signed history rather than institutional memory.",
        icon: Gavel,
        logFilename: "cerulea_rnd_ledger.log",
        logLines: [
          { text: "[SYS] Ownership dispute opened on BRK_09...", time: "16:48:57", tone: "default" },
          { text: "[CMD] resolveClaim(BRK_09, claimants: 2)", time: "16:48:57", tone: "primary" },
          { text: "[SYS] Comparing claim against anchored inventorship trail...", time: "16:48:58", tone: "default" },
          { text: "[OK] Resolution issued from tamper-proof record.", time: "16:48:58", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes collaborative R&D into modular contracts. Each layer enrolls, attributes, structures, and arbitrates contributions without any single institution controlling the record.",
    layers: [
      {
        title: "Contributor Registry",
        subtitle: "The Identity Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Anchor",
          description:
            "The foundational identity layer. It issues each researcher a verifiable credential bound to their institution and role, so every later contribution carries an unforgeable author that survives past the consortium.",
          platformFunction: "Identity & Credentials",
        },
        codeSnippet:
          "contract ContributorRegistry {\n  struct Researcher {\n    address wallet;\n    string institution;\n    bytes32 credentialHash;\n    bool active;\n  }\n\n  mapping(bytes32 => Researcher) public researchers;\n\n  function enroll(bytes32 did, string calldata inst, bytes32 vc) external onlyAdmin {\n    researchers[did] = Researcher(msg.sender, inst, vc, true);\n  }\n}",
        simAction: "Simulate Researcher Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading institution attestation for MIT_CSAIL...", tone: "default" },
          { text: "Issuing verifiable credential to RSR_2291...", tone: "default" },
          { text: "Binding DID to institutional role...", tone: "default" },
          { text: "Writing contributor identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Researcher enrolled with signed credential.", tone: "success" },
        ],
      },
      {
        title: "Provenance Notary",
        subtitle: "The Contribution Seal",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Contribution Seal",
          description:
            "Fixes the moment of creation. Each dataset or result is anchored by its digest, author, and input lineage, so any attempt to back-date or reassign a contribution breaks the chain and is instantly detectable.",
          platformFunction: "Provenance & Timestamping",
        },
        codeSnippet:
          "function logContribution(bytes32 digest, bytes32[] calldata inputs) external onlyResearcher {\n    contributions[digest] = Contribution(msg.sender, block.timestamp, inputs);\n    trail.push(digest);\n    emit ContributionLogged(digest, msg.sender, block.timestamp);\n}",
        simAction: "Simulate Contribution Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing submitted dataset DS_88...", tone: "default" },
          { text: "Resolving input lineage to prior contributions...", tone: "default" },
          { text: "Sealing author signature and block timestamp...", tone: "default" },
          { text: "Appending digest to consortium trail...", tone: "default" },
          { text: "[SUCCESS] Contribution anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "On-chain Data Models",
        subtitle: "The Structured Record",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Structured Record",
          description:
            "Turns research artifacts into queryable objects. Experiments, datasets, and outputs are schematized on-chain, so a dispute or audit runs against structured fields instead of scanning through unstructured documents.",
          platformFunction: "Structured Data",
        },
        codeSnippet:
          "struct Experiment {\n    bytes32 id;\n    bytes32[] datasets;\n    bytes32[] results;\n    address lead;\n}\n\nfunction recordExperiment(bytes32 id, bytes32[] calldata datasets) external {\n    experiments[id] = Experiment(id, datasets, new bytes32[](0), msg.sender);\n}",
        simAction: "Simulate Model Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Schematizing experiment EXP_140 fields...", tone: "default" },
          { text: "Linking 5 datasets to structured record...", tone: "default" },
          { text: "Indexing result objects for query...", tone: "default" },
          { text: "Writing model to on-chain store...", tone: "default" },
          { text: "[SUCCESS] Experiment recorded as queryable object.", tone: "success" },
        ],
      },
      {
        title: "Inventorship Arbiter",
        subtitle: "The Neutral Judge",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Neutral Judge",
          description:
            "Resolves ownership from evidence. It orders signed contributions by timestamp to reconstruct the inventive step, giving the consortium one neutral record to arbitrate against rather than competing institutional claims.",
          platformFunction: "Dispute Resolution",
        },
        codeSnippet:
          "function traceInventiveStep(bytes32 result) external view returns (bytes32[] memory) {\n    return orderedTrail[result];\n}\n\nfunction resolveClaim(bytes32 result, address[] calldata claimants) external onlyArbiter {\n    emit ClaimResolved(result, orderedTrail[result]);\n}",
        simAction: "Simulate Dispute Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading anchored trail for breakthrough BRK_09...", tone: "default" },
          { text: "Ordering 14 contributions by signed timestamp...", tone: "default" },
          { text: "Identifying inventive step across co-authors...", tone: "default" },
          { text: "Returning neutral inventorship record...", tone: "default" },
          { text: "[SUCCESS] Ownership resolved from tamper-proof trail.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Attributed R&D provenance is a horizontal capability. Here is how different research actors put the neutral contribution ledger to work.",
    sectors: [
      { icon: FlaskConical, title: "University Consortiums", description: "Enroll researchers across partner universities and anchor every joint contribution, so a commercial spin-out rests on a neutral inventorship record instead of competing lab notebooks and faculty memory.", assetTypes: ["Contribution Trails", "Inventorship Evidence", "Institutional Credentials"] },
      { icon: Biotech, title: "Pharma & Biotech R&D", description: "Attribute wet-lab and computational results across sponsor and partner teams, giving patent counsel cryptographic proof of the inventive step for filings in tightly contested drug pipelines.", assetTypes: ["Assay Records", "Discovery Logs", "Patent Support Files"] },
      { icon: Building2, title: "Corporate Innovation Labs", description: "Track co-development with external partners against one signed ledger, so IP ownership on a breakthrough is settled from evidence before it becomes a costly legal dispute.", assetTypes: ["Joint IP Records", "Partner Attestations", "Design Histories"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging institutional lab-notebook systems or capturing signed contributions directly from researcher workstations, Cerulea routes both into one shared record.",
    tracks: [
      {
        title: "Track A: Institutional System Bridging",
        description:
          "For universities and labs on electronic lab notebook platforms. Existing contribution events are translated into signed on-chain provenance records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Electronic Lab Notebook", sublabel: "Institutional Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Digest Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium R&D Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Researcher Capture",
        description:
          "For researchers signing contributions from their own workstations. A desktop wallet signs each dataset and result and routes it directly to the consortium ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Researcher Workstation", sublabel: "Signing Wallet", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Contribution Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Provenance Record", icon: FlaskConical, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an attributed contribution ledger with verifiable credentials, provenance anchoring, and structured research models from scratch requires specialised engineers and long multi-institution integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attribution & Provenance Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects multi-institution research infrastructure benchmarks. Reconciling each institution's lab-notebook system, building custom attribution and inventorship logic, and negotiating identity standards across partners for an average consortium takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attribution and provenance rules into pre-audited WebAssembly binaries and provisions the shared consortium ledger and credential layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "clinical-research-organization-cro-milestone-based-payment",
    icon: HeartPulse,
    eyebrow: "Clinical Milestone Settlement Layer",
    headline1: "Verify the milestone.",
    headline2: "Release payment instantly.",
    heroDescription:
      "Pay clinical research organizations the moment a verified trial milestone, such as an enrollment target or data lock, is reached. The Escrow and Conditional Settlement, Compliance Attestations, and Audit Logs modules anchor milestone data from the trial management system and release funds automatically once completion is confirmed.",
    heroCta: "Deploy Milestone Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace weeks of manual milestone review with an automated release triggered by verified trial data.",
    mechanics: [
      { title: "Conditional Escrow", description: "Lock sponsor funds against defined milestones. The Escrow and Conditional Settlement module holds each tranche until its exact completion condition is verified, so payment is neither early nor delayed by review backlogs." },
      { title: "Milestone Oracle", description: "Anchor completion from the source. Verified data from the trial management system, such as enrollment counts or data lock dates, is written on-chain as the trigger for release." },
      { title: "Compliance Attestations", description: "Gate release on regulatory state. The Compliance Attestations module confirms the milestone met protocol and quality requirements before any tranche unlocks." },
      { title: "Automatic Disbursement", description: "Remove the manual approval step. Once a milestone is confirmed, the contract disburses the corresponding tranche to the CRO in the same transaction, collapsing payment cycles from weeks to minutes." },
      { title: "Immutable Audit Logs", description: "Record every release with its evidence. The Audit Logs module preserves which milestone triggered which payment, giving sponsors and auditors a single reconciled trail." },
      { title: "Multi-Trial Ledger", description: "Run many studies on one framework. Each trial defines its own milestone schedule and escrow, so a sponsor manages payments across a whole portfolio from a shared settlement layer." },
    ],
    lifecycleTitle: "The Milestone Payment Lifecycle",
    lifecycleSubtitle:
      "Follow a single trial milestone from funding to verified completion and automatic payout to the CRO.",
    lifecycleSteps: [
      {
        label: "Escrow Funding",
        description:
          "The sponsor funds the trial's milestone schedule. Each tranche is locked in escrow against a defined, verifiable completion condition.",
        icon: Wallet,
        logFilename: "cerulea_cro_settlement.log",
        logLines: [
          { text: "[SYS] Initializing Trial Milestone Escrow...", time: "08:40:12", tone: "default" },
          { text: "[CMD] fundSchedule { trial: \"ONC_204\", tranches: 6, total: 2400000 }", time: "08:40:12", tone: "primary" },
          { text: "[AUTH] Locking sponsor funds per milestone condition...", time: "08:40:13", tone: "secondary" },
          { text: "[OK] Escrow funded. 6 tranches armed at block 6610233.", time: "08:40:13", tone: "success" },
        ],
      },
      {
        label: "Milestone Reached",
        description:
          "The trial management system reports an enrollment target as met. The milestone oracle anchors the verified figure on-chain as the release trigger.",
        icon: HeartPulse,
        logFilename: "cerulea_cro_settlement.log",
        logLines: [
          { text: "[SYS] Ingesting enrollment feed from CTMS...", time: "11:22:47", tone: "default" },
          { text: "[CMD] reportMilestone(trial: \"ONC_204\", ms: \"ENROLL_120\", value: 120)", time: "11:22:48", tone: "primary" },
          { text: "[SYS] Threshold 120 of 120 patients confirmed.", time: "11:22:48", tone: "default" },
          { text: "[OK] Milestone ENROLL_120 anchored as verified.", time: "11:22:49", tone: "success" },
        ],
      },
      {
        label: "Compliance Check",
        description:
          "Before release, the contract confirms the milestone met protocol and quality attestations, ensuring only compliant completion unlocks funds.",
        icon: ShieldCheck,
        logFilename: "cerulea_cro_settlement.log",
        logLines: [
          { text: "[SYS] Evaluating compliance gate for ENROLL_120...", time: "11:23:01", tone: "default" },
          { text: "[CMD] checkAttestations(ms: \"ENROLL_120\")", time: "11:23:01", tone: "primary" },
          { text: "[AUTH] Protocol and data-quality attestations valid...", time: "11:23:02", tone: "secondary" },
          { text: "[OK] Compliance gate passed. Release authorized.", time: "11:23:02", tone: "success" },
        ],
      },
      {
        label: "Automatic Payout",
        description:
          "The contract disburses the milestone tranche to the CRO and writes the payment and its trigger to the immutable audit log in one transaction.",
        icon: Coins,
        logFilename: "cerulea_cro_settlement.log",
        logLines: [
          { text: "[SYS] Executing tranche release to CRO_0x71...", time: "11:23:14", tone: "default" },
          { text: "[CMD] releaseTranche(trial: \"ONC_204\", ms: \"ENROLL_120\")", time: "11:23:14", tone: "primary" },
          { text: "[SYS] 400,000 disbursed. Writing to audit log...", time: "11:23:15", tone: "default" },
          { text: "[OK] Payment settled in minutes, not weeks.", time: "11:23:15", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes CRO milestone payment into modular contracts. Each layer funds, verifies, gates, and disburses without either sponsor or CRO controlling the trigger.",
    layers: [
      {
        title: "Milestone Escrow",
        subtitle: "The Conditional Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Vault",
          description:
            "The foundational settlement layer. It locks each sponsor tranche against a specific milestone condition, so funds are neither released early nor stranded in a review queue, only unlocked when the condition is verified.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract MilestoneEscrow {\n  struct Tranche {\n    bytes32 milestone;\n    uint256 amount;\n    bool released;\n  }\n\n  mapping(bytes32 => Tranche[]) public schedule;\n\n  function fund(bytes32 trial, bytes32 ms, uint256 amount) external payable onlySponsor {\n    schedule[trial].push(Tranche(ms, amount, false));\n  }\n}",
        simAction: "Simulate Escrow Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading milestone schedule for trial ONC_204...", tone: "default" },
          { text: "Locking 6 tranches against conditions...", tone: "default" },
          { text: "Binding sponsor funds to escrow...", tone: "default" },
          { text: "Writing schedule to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Escrow funded, tranches armed.", tone: "success" },
        ],
      },
      {
        title: "Milestone Oracle",
        subtitle: "The Trial Data Bridge",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trial Data Bridge",
          description:
            "Connects the ledger to the trial management system. It anchors verified milestone data, such as enrollment counts or data lock dates, as the on-chain trigger for release, removing subjective review from the decision.",
          platformFunction: "External Data Oracle",
        },
        codeSnippet:
          "function reportMilestone(bytes32 trial, bytes32 ms, uint256 value) external onlyOracle {\n    require(value >= thresholds[ms], \"Milestone not met\");\n    verified[ms] = true;\n    emit MilestoneVerified(trial, ms, value);\n}",
        simAction: "Simulate Milestone Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Polling CTMS enrollment feed for ONC_204...", tone: "default" },
          { text: "Validating 120 of 120 patients enrolled...", tone: "default" },
          { text: "Signing oracle attestation...", tone: "default" },
          { text: "Anchoring milestone as verified on-chain...", tone: "default" },
          { text: "[SUCCESS] Milestone verified, release trigger set.", tone: "success" },
        ],
      },
      {
        title: "Compliance Gate",
        subtitle: "The Protocol Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Protocol Check",
          description:
            "Ensures only compliant milestones pay out. It confirms the required protocol and data-quality attestations exist before authorizing release, so a milestone reached out of compliance cannot unlock sponsor funds.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function checkAttestations(bytes32 ms) public view returns (bool) {\n    return attestations[ms].protocolOk && attestations[ms].qualityOk;\n}\n\nfunction gate(bytes32 ms) external {\n    require(checkAttestations(ms), \"Compliance not met\");\n    cleared[ms] = true;\n}",
        simAction: "Simulate Compliance Gate",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading attestations for milestone ENROLL_120...", tone: "default" },
          { text: "Confirming protocol adherence flag...", tone: "default" },
          { text: "Confirming data-quality attestation...", tone: "default" },
          { text: "Clearing compliance gate...", tone: "default" },
          { text: "[SUCCESS] Milestone compliant, release authorized.", tone: "success" },
        ],
      },
      {
        title: "Disbursement Engine",
        subtitle: "The Atomic Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Atomic Payout",
          description:
            "Executes release and record in one step. It transfers the milestone tranche to the CRO and writes the payment and its trigger to the audit log atomically, so every disbursement is reconciled the moment it happens.",
          platformFunction: "Settlement & Audit",
        },
        codeSnippet:
          "function releaseTranche(bytes32 trial, bytes32 ms) external {\n    require(verified[ms] && cleared[ms], \"Not releasable\");\n    Tranche storage t = _find(trial, ms);\n    t.released = true;\n    payable(cro[trial]).transfer(t.amount);\n    emit Paid(trial, ms, t.amount);\n}",
        simAction: "Simulate Tranche Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming milestone verified and compliant...", tone: "default" },
          { text: "Transferring 400,000 to CRO wallet...", tone: "default" },
          { text: "Writing payment and trigger to audit log...", tone: "default" },
          { text: "Marking tranche released...", tone: "default" },
          { text: "[SUCCESS] Payment settled with full audit trail.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Milestone-based settlement is a horizontal capability. Here is how different life-science actors put the automated payment layer to work.",
    sectors: [
      { icon: FlaskConical, title: "Pharma Sponsors", description: "Fund entire trial portfolios against defined milestone schedules, releasing each tranche automatically on verified completion instead of running weeks of manual review across dozens of studies.", assetTypes: ["Milestone Escrows", "Trial Portfolios", "Payment Schedules"] },
      { icon: HeartPulse, title: "Clinical Research Organizations", description: "Receive payment the moment enrollment or data-lock targets are verified, replacing invoice disputes and long approval queues with instant, evidence-backed disbursement.", assetTypes: ["Milestone Payouts", "Enrollment Proofs", "Completion Records"] },
      { icon: Landmark, title: "Auditors & Regulators", description: "Read the immutable audit log to reconcile which milestone triggered which payment, replacing reconstructed spreadsheets with a live, single-source settlement record.", assetTypes: ["Audit Trails", "Reconciliation Records", "Compliance Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging clinical trial management systems from large sponsors or capturing milestone confirmations from site coordinators, Cerulea routes both into one settlement record.",
    tracks: [
      {
        title: "Track A: Trial System Bridging",
        description:
          "For sponsors and CROs on established CTMS platforms. Verified milestone events are translated into on-chain release triggers through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Trial Management System", sublabel: "Sponsor & CRO Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Milestone Verification", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Site Coordinator Capture",
        description:
          "For trial sites confirming milestones from the field. A signed portal submission confirms completion and routes it directly to the settlement contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Site Portal / Wallet", sublabel: "Coordinator Devices", icon: Fingerprint, accent: false },
          { label: "Escrow Validators", sublabel: "Release Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Milestone Payment Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a milestone-based settlement system with conditional escrow, trial-data oracles, and compliance gating from scratch requires specialised engineers and long clinical-system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Milestone & Compliance Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects clinical-systems integration benchmarks. Wiring escrow logic to a trial management system, encoding each milestone condition, and building compliance gating for an average sponsor takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your milestone and compliance rules into pre-audited WebAssembly binaries and provisions the escrow and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cross-company-joint-patent-filing-and-royalty-split-agreements",
    icon: Copyright,
    eyebrow: "Joint IP Royalty Settlement Layer",
    headline1: "Register the split once.",
    headline2: "Distribute royalties forever.",
    heroDescription:
      "Stand up a registry of jointly-filed patents and their agreed royalty splits, with licensing income distributed automatically to each co-owner. Cerulea Studio assembles it from the Royalty Standard, Royalty Clearing, and Provenance Notary so that a license payment fans out to co-owners by their agreed percentages without finance-team coordination.",
    heroCta: "Deploy Royalty Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a standing manual reconciliation between co-owners' finance teams into an automatic, rule-based split.",
    mechanics: [
      { title: "Patent Split Registry", description: "Record ownership once. Each jointly-filed patent is registered with its co-owners and their agreed percentages, becoming the single reference every later distribution reads from." },
      { title: "Royalty Standard", description: "Encode the split as a standard. The Royalty Standard module attaches machine-readable royalty terms to each patent, so any license payment knows exactly how to divide." },
      { title: "Automatic Clearing", description: "Fan out income on receipt. The Royalty Clearing module splits each incoming license payment across co-owners by their percentages in the same transaction, with no month-end reconciliation." },
      { title: "Provenance Notary", description: "Anchor the agreement itself. The signed royalty-split agreement is notarized on-chain, so the terms a distribution enforces are the exact terms both parties agreed to." },
      { title: "Co-owner Transparency", description: "Give every party the same view. Each co-owner sees incoming payments and their share in real time, ending the disputes that come from opaque, delayed statements." },
      { title: "Immutable Distribution Log", description: "Keep a permanent ledger of splits. Every distribution is recorded with its source payment and per-owner amounts, giving auditors and tax teams a reconciled trail." },
    ],
    lifecycleTitle: "The Royalty Distribution Lifecycle",
    lifecycleSubtitle:
      "Follow a jointly-owned patent from registration of its split to the automatic distribution of a licensing payment.",
    lifecycleSteps: [
      {
        label: "Patent Registration",
        description:
          "Co-owners register the jointly-filed patent and their agreed royalty percentages. The Provenance Notary anchors the signed split agreement.",
        icon: Copyright,
        logFilename: "cerulea_royalty_clearing.log",
        logLines: [
          { text: "[SYS] Initializing Joint Patent Registry entry...", time: "10:02:31", tone: "default" },
          { text: "[CMD] registerPatent { id: \"US_11_884\", owners: 3, splits: [50,30,20] }", time: "10:02:31", tone: "primary" },
          { text: "[AUTH] Notarizing signed royalty-split agreement...", time: "10:02:32", tone: "secondary" },
          { text: "[OK] Patent registered. Split anchored at block 7710233.", time: "10:02:32", tone: "success" },
        ],
      },
      {
        label: "License Payment",
        description:
          "A licensee pays for use of the patent. The payment lands at the clearing contract, tagged to the patent it licenses.",
        icon: Wallet,
        logFilename: "cerulea_royalty_clearing.log",
        logLines: [
          { text: "[SYS] Incoming license payment detected...", time: "15:41:08", tone: "default" },
          { text: "[CMD] receivePayment(patent: \"US_11_884\", amount: 180000)", time: "15:41:08", tone: "primary" },
          { text: "[SYS] Matching payment to registered split...", time: "15:41:09", tone: "default" },
          { text: "[OK] Payment 180,000 tagged to patent US_11_884.", time: "15:41:09", tone: "success" },
        ],
      },
      {
        label: "Automatic Clearing",
        description:
          "The Royalty Clearing module divides the payment across co-owners by their percentages and transfers each share in the same transaction.",
        icon: PieChart,
        logFilename: "cerulea_royalty_clearing.log",
        logLines: [
          { text: "[SYS] Executing split for payment on US_11_884...", time: "15:41:10", tone: "default" },
          { text: "[CMD] clear(amount: 180000, splits: [50,30,20])", time: "15:41:10", tone: "primary" },
          { text: "[SYS] Computing 90,000 / 54,000 / 36,000 shares...", time: "15:41:10", tone: "default" },
          { text: "[OK] 3 co-owners paid atomically.", time: "15:41:11", tone: "success" },
        ],
      },
      {
        label: "Distribution Record",
        description:
          "The contract writes the source payment and every per-owner amount to the immutable log, giving each party and their auditors a reconciled view.",
        icon: FileCheck,
        logFilename: "cerulea_royalty_clearing.log",
        logLines: [
          { text: "[SYS] Writing distribution record for US_11_884...", time: "15:41:12", tone: "default" },
          { text: "[CMD] logDistribution(source: 0x9a1, shares: 3)", time: "15:41:12", tone: "primary" },
          { text: "[AUTH] Sealing per-owner amounts to ledger...", time: "15:41:13", tone: "secondary" },
          { text: "[OK] Distribution recorded. Statements reconciled.", time: "15:41:13", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes joint patent royalties into modular contracts. Each layer registers, standardizes, clears, and records distribution without either co-owner's finance team controlling the math.",
    layers: [
      {
        title: "Patent Registry",
        subtitle: "The Ownership Anchor",
        icon: Copyright,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ownership Anchor",
          description:
            "The foundational data layer. It records each jointly-filed patent with its co-owners and their agreed percentages, becoming the single reference that every later distribution reads from and cannot silently change.",
          platformFunction: "Identity & Ownership",
        },
        codeSnippet:
          "contract PatentRegistry {\n  struct Patent {\n    address[] owners;\n    uint16[] splitBps;\n    bytes32 agreementHash;\n  }\n\n  mapping(bytes32 => Patent) public patents;\n\n  function register(bytes32 id, address[] calldata o, uint16[] calldata bps, bytes32 doc) external {\n    patents[id] = Patent(o, bps, doc);\n  }\n}",
        simAction: "Simulate Patent Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading co-owner list for US_11_884...", tone: "default" },
          { text: "Validating splits sum to 100 percent...", tone: "default" },
          { text: "Notarizing signed agreement digest...", tone: "default" },
          { text: "Writing patent record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Patent split registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Royalty Standard",
        subtitle: "The Terms Encoder",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Terms Encoder",
          description:
            "Attaches machine-readable royalty terms to each patent. It exposes the agreed split in a standard interface, so any incoming license payment can query exactly how to divide without human interpretation.",
          platformFunction: "Royalty Standard",
        },
        codeSnippet:
          "function royaltyInfo(bytes32 patent, uint256 amount) external view returns (address[] memory, uint256[] memory) {\n    Patent storage p = patents[patent];\n    uint256[] memory owed = new uint256[](p.owners.length);\n    for (uint i = 0; i < p.owners.length; i++) owed[i] = (amount * p.splitBps[i]) / 10000;\n    return (p.owners, owed);\n}",
        simAction: "Simulate Terms Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Querying royalty terms for US_11_884...", tone: "default" },
          { text: "Reading split basis points per owner...", tone: "default" },
          { text: "Computing owed amounts for payment...", tone: "default" },
          { text: "Returning standard royalty info...", tone: "default" },
          { text: "[SUCCESS] Machine-readable terms resolved.", tone: "success" },
        ],
      },
      {
        title: "Royalty Clearing",
        subtitle: "The Atomic Splitter",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Atomic Splitter",
          description:
            "Fans out income on receipt. It divides each incoming license payment across co-owners by their percentages and transfers every share in one transaction, removing the month-end reconciliation between finance teams.",
          platformFunction: "Royalty Clearing",
        },
        codeSnippet:
          "function clear(bytes32 patent) external payable {\n    (address[] memory owners, uint256[] memory owed) = royaltyInfo(patent, msg.value);\n    for (uint i = 0; i < owners.length; i++) {\n        payable(owners[i]).transfer(owed[i]);\n    }\n    emit Distributed(patent, msg.value);\n}",
        simAction: "Simulate Royalty Clearing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving 180,000 license payment...", tone: "default" },
          { text: "Splitting into 90,000 / 54,000 / 36,000...", tone: "default" },
          { text: "Transferring shares to 3 co-owners...", tone: "default" },
          { text: "Emitting distribution event...", tone: "default" },
          { text: "[SUCCESS] Royalties cleared atomically.", tone: "success" },
        ],
      },
      {
        title: "Distribution Ledger",
        subtitle: "The Reconciled Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reconciled Record",
          description:
            "Keeps a permanent trail of every split. It records each distribution against its source payment with per-owner amounts, giving co-owners, auditors, and tax teams one reconciled statement instead of conflicting ledgers.",
          platformFunction: "Audit & Reconciliation",
        },
        codeSnippet:
          "function logDistribution(bytes32 patent, bytes32 source, uint256[] calldata shares) external {\n    distributions[patent].push(Distribution(source, shares, block.timestamp));\n    emit DistributionLogged(patent, source);\n}",
        simAction: "Simulate Distribution Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Capturing source payment reference...", tone: "default" },
          { text: "Recording per-owner amounts...", tone: "default" },
          { text: "Appending to distribution ledger...", tone: "default" },
          { text: "Sealing timestamp to record...", tone: "default" },
          { text: "[SUCCESS] Distribution reconciled and logged.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automatic royalty clearing is a horizontal capability. Here is how different IP-holding actors put the joint patent registry to work.",
    sectors: [
      { icon: Building2, title: "Corporate Co-Development", description: "Register jointly-filed patents from partnership programs and let licensing income fan out by agreed percentages automatically, ending the recurring reconciliation between two finance departments.", assetTypes: ["Joint Patents", "Royalty Splits", "License Income"] },
      { icon: FlaskConical, title: "University Tech Transfer", description: "Distribute licensing revenue across co-inventing institutions and departments by their agreed shares, replacing manual quarterly statements with a real-time, transparent split.", assetTypes: ["Institutional Shares", "Invention Disclosures", "Revenue Statements"] },
      { icon: Landmark, title: "IP Holding & Finance", description: "Read the immutable distribution ledger to reconcile royalty income and its splits for tax and audit, replacing reconstructed spreadsheets with one authoritative record.", assetTypes: ["Audit Records", "Tax Statements", "Distribution Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging enterprise IP-management systems or routing license payments from external licensees, Cerulea routes both into one royalty record.",
    tracks: [
      {
        title: "Track A: IP System Bridging",
        description:
          "For enterprises on legacy IP-management platforms. Registered patents and their splits are mirrored into on-chain royalty terms through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "IP Management System", sublabel: "Enterprise Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Terms Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Royalty Registry Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Licensee Settlement",
        description:
          "For licensees paying royalties on-chain. A wallet payment is routed straight to the clearing contract and split to co-owners on receipt.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Licensee Wallet", sublabel: "Payment Origin", icon: Fingerprint, accent: false },
          { label: "Clearing Validators", sublabel: "Split Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Royalty Distribution Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a joint patent registry with encoded royalty terms, automatic clearing, and a reconciled distribution ledger from scratch requires specialised engineers and careful multi-party financial integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Split & Clearing Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects enterprise IP and finance integration benchmarks. Encoding each royalty-split agreement, wiring clearing to payment systems, and reconciling per-owner statements for an average portfolio takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your split and clearing rules into pre-audited WebAssembly binaries and provisions the registry and distribution ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "ai-model-provenance-and-training-data-lineage",
    icon: Cpu,
    eyebrow: "AI Provenance Execution Engine",
    headline1: "Prove the training data.",
    headline2: "Verify the deployed model.",
    heroDescription:
      "Deploy a hybrid AI provenance registry with a public model lineage and a private enterprise audit layer. The Provenance Notary, On-chain Data Models, and DID and VC Ledger modules bind each model version to its training data and its developer identity, so a regulatory inquiry is answered in minutes with cryptographic proof.",
    heroCta: "Deploy Provenance Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn opaque model releases into a verifiable lineage of what data trained a model, who trained it, and which version is live.",
    mechanics: [
      { title: "Model Version Anchor", description: "Fix every release cryptographically. The Provenance Notary anchors each model version by its weights hash, so the version deployed in production is provably the one that was documented." },
      { title: "Training Data Lineage", description: "Record what went in. On-chain Data Models capture the datasets and their digests used to train each version, making the training corpus verifiable rather than asserted." },
      { title: "Developer Identity", description: "Attribute the work. The DID and VC Ledger binds each version to the verified identity of the team that trained it, so provenance names a real, credentialed developer." },
      { title: "Hybrid Public and Private", description: "Expose lineage, protect secrets. A public layer publishes model lineage for external verification while a private enterprise layer holds sensitive audit detail." },
      { title: "Deployment Attestation", description: "Bind the live model to its record. A deployment attestation ties the running model's hash to its registry entry, so what serves traffic matches what was audited." },
      { title: "Instant Regulatory Answer", description: "Collapse inquiry timelines. Any deployed version resolves to its training data and developer in minutes, replacing weeks of document assembly with a single query." },
    ],
    lifecycleTitle: "The Model Provenance Lifecycle",
    lifecycleSubtitle:
      "Follow a model version from training-data anchoring through deployment to a regulatory inquiry answered from proof.",
    lifecycleSteps: [
      {
        label: "Data Lineage Anchor",
        description:
          "Before training, the datasets are anchored by digest. On-chain Data Models record the exact training corpus for the version about to be built.",
        icon: Database,
        logFilename: "cerulea_ai_provenance.log",
        logLines: [
          { text: "[SYS] Initializing Training Corpus Manifest...", time: "07:30:11", tone: "default" },
          { text: "[CMD] anchorDatasets { model: \"RISK_V3\", sets: 4, rows: 2100000 }", time: "07:30:11", tone: "primary" },
          { text: "[AUTH] Hashing datasets and sealing lineage...", time: "07:30:12", tone: "secondary" },
          { text: "[OK] 4 datasets anchored at block 8810233.", time: "07:30:12", tone: "success" },
        ],
      },
      {
        label: "Version Registration",
        description:
          "Training completes. The Provenance Notary anchors the model's weights hash and binds it to the developer's verified identity.",
        icon: Cpu,
        logFilename: "cerulea_ai_provenance.log",
        logLines: [
          { text: "[SYS] Registering model version RISK_V3...", time: "12:14:55", tone: "default" },
          { text: "[CMD] registerVersion(hash: \"0x7c19\", dev: \"did:cer:0x8b3\")", time: "12:14:55", tone: "primary" },
          { text: "[SYS] Linking version to anchored training corpus...", time: "12:14:56", tone: "default" },
          { text: "[OK] Version RISK_V3 registered with lineage.", time: "12:14:56", tone: "success" },
        ],
      },
      {
        label: "Deployment Attestation",
        description:
          "The model goes to production. A deployment attestation binds the running model's hash to its registry entry, proving the live version matches the record.",
        icon: ShieldCheck,
        logFilename: "cerulea_ai_provenance.log",
        logLines: [
          { text: "[SYS] Attesting deployment of RISK_V3...", time: "16:02:40", tone: "default" },
          { text: "[CMD] attestDeployment(hash: \"0x7c19\", env: \"PROD_EU\")", time: "16:02:40", tone: "primary" },
          { text: "[AUTH] Confirming served hash matches registry...", time: "16:02:41", tone: "secondary" },
          { text: "[OK] Deployment attested. Live model verified.", time: "16:02:41", tone: "success" },
        ],
      },
      {
        label: "Regulatory Inquiry",
        description:
          "A regulator queries a deployed version. The registry returns its training data and developer identity in minutes with cryptographic proof.",
        icon: Search,
        logFilename: "cerulea_ai_provenance.log",
        logLines: [
          { text: "[SYS] Inquiry received for deployed model RISK_V3...", time: "09:48:22", tone: "default" },
          { text: "[CMD] resolveLineage(hash: \"0x7c19\")", time: "09:48:22", tone: "primary" },
          { text: "[SYS] Assembling training corpus and developer proof...", time: "09:48:23", tone: "default" },
          { text: "[OK] Full lineage returned. Proof cryptographic.", time: "09:48:23", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes AI provenance into modular contracts. Each layer anchors data, registers versions, attests deployment, and exposes lineage across a hybrid public and private boundary.",
    layers: [
      {
        title: "Data Lineage Store",
        subtitle: "The Corpus Anchor",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Corpus Anchor",
          description:
            "The foundational data layer. It records each training dataset by its digest before a model is built, so the corpus behind any version is verifiable rather than a claim made after the fact.",
          platformFunction: "Structured Data Lineage",
        },
        codeSnippet:
          "contract LineageStore {\n  struct Corpus {\n    bytes32[] datasetHashes;\n    uint256 rows;\n    uint256 anchoredAt;\n  }\n\n  mapping(bytes32 => Corpus) public corpora;\n\n  function anchor(bytes32 model, bytes32[] calldata sets, uint256 rows) external {\n    corpora[model] = Corpus(sets, rows, block.timestamp);\n  }\n}",
        simAction: "Simulate Lineage Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing 4 training datasets for RISK_V3...", tone: "default" },
          { text: "Recording row counts and digests...", tone: "default" },
          { text: "Sealing corpus to model identifier...", tone: "default" },
          { text: "Writing lineage to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Training corpus anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Version Notary",
        subtitle: "The Weights Seal",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Weights Seal",
          description:
            "Fixes each model release. It anchors the weights hash and binds it to the developer's verified identity and its training corpus, so a version cannot be silently swapped or re-attributed later.",
          platformFunction: "Provenance & Identity",
        },
        codeSnippet:
          "function registerVersion(bytes32 weightsHash, bytes32 devDid, bytes32 corpus) external {\n    versions[weightsHash] = Version(devDid, corpus, block.timestamp);\n    emit VersionRegistered(weightsHash, devDid, corpus);\n}",
        simAction: "Simulate Version Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading weights hash for RISK_V3...", tone: "default" },
          { text: "Resolving developer verified credential...", tone: "default" },
          { text: "Linking version to anchored corpus...", tone: "default" },
          { text: "Sealing version record...", tone: "default" },
          { text: "[SUCCESS] Model version registered with proof.", tone: "success" },
        ],
      },
      {
        title: "Deployment Attestor",
        subtitle: "The Live Binding",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Binding",
          description:
            "Ties the running model to its record. It confirms the hash serving production traffic matches a registered version, so an unaudited update cannot masquerade as the documented, approved model.",
          platformFunction: "Deployment Attestation",
        },
        codeSnippet:
          "function attestDeployment(bytes32 weightsHash, string calldata env) external onlyOps {\n    require(versions[weightsHash].registeredAt != 0, \"Unknown version\");\n    deployments[env] = Deployment(weightsHash, block.timestamp);\n    emit Deployed(weightsHash, env);\n}",
        simAction: "Simulate Deployment Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading served model hash from PROD_EU...", tone: "default" },
          { text: "Matching against registered versions...", tone: "default" },
          { text: "Binding live deployment to registry...", tone: "default" },
          { text: "Recording deployment attestation...", tone: "default" },
          { text: "[SUCCESS] Live model verified against record.", tone: "success" },
        ],
      },
      {
        title: "Lineage Resolver",
        subtitle: "The Inquiry Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Inquiry Window",
          description:
            "Answers regulators in minutes. It resolves a deployed model hash to its training data and developer identity across the public and private layers, replacing weeks of manual document assembly with one query.",
          platformFunction: "Public & Private Verification",
        },
        codeSnippet:
          "function resolveLineage(bytes32 weightsHash) external view returns (bytes32 corpus, bytes32 dev) {\n    Version storage v = versions[weightsHash];\n    return (v.corpus, v.developer);\n}",
        simAction: "Simulate Lineage Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving regulator query for RISK_V3...", tone: "default" },
          { text: "Resolving anchored training corpus...", tone: "default" },
          { text: "Attaching developer identity proof...", tone: "default" },
          { text: "Assembling public and private lineage...", tone: "default" },
          { text: "[SUCCESS] Full provenance returned with proof.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable model provenance is a horizontal capability. Here is how different AI actors put the hybrid registry to work.",
    sectors: [
      { icon: Cpu, title: "AI Platform Providers", description: "Publish verifiable lineage for every hosted model version while keeping sensitive audit detail private, giving enterprise customers proof of what trained the model serving their workloads.", assetTypes: ["Model Versions", "Lineage Records", "Deployment Attestations"] },
      { icon: Landmark, title: "Regulated Enterprises", description: "Answer supervisory inquiries into any deployed model in minutes with cryptographic proof of training data and developer identity, instead of assembling documentation under deadline pressure.", assetTypes: ["Audit Layers", "Compliance Proofs", "Version Histories"] },
      { icon: Scale, title: "AI Auditors & Regulators", description: "Verify that the model in production matches the audited version and trace its corpus directly from the registry, replacing self-reported paperwork with an authoritative on-chain record.", assetTypes: ["Verification Trails", "Corpus Proofs", "Attestation Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging enterprise MLOps pipelines or publishing model lineage to a public verification layer, Cerulea routes both into one provenance record.",
    tracks: [
      {
        title: "Track A: MLOps Pipeline Bridging",
        description:
          "For enterprises with established training pipelines. Model builds and dataset digests are translated into on-chain version records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "MLOps Pipeline", sublabel: "Training Infrastructure", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Hash Anchoring & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Enterprise Audit Layer", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Public Lineage Publishing",
        description:
          "For open model lineage and external verification. Model provenance is signed and routed directly to the public execution layer for anyone to verify.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Developer Wallet", sublabel: "Model Signing", icon: Fingerprint, accent: false },
          { label: "Provenance Validators", sublabel: "Lineage Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Public Model Lineage", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a hybrid provenance registry with data lineage anchoring, version notarization, and deployment attestation from scratch requires specialised engineers and careful MLOps integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Lineage & Attestation Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise MLOps and audit integration benchmarks. Wiring lineage capture into training pipelines, building version notarization, and constructing a hybrid public and private audit layer for an average platform takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your lineage and attestation rules into pre-audited WebAssembly binaries and provisions the public and private provenance layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "synthetic-data-generation-licensing-and-usage-tracking",
    icon: Database,
    eyebrow: "Synthetic Data Royalty Layer",
    headline1: "License the dataset.",
    headline2: "Track every downstream use.",
    heroDescription:
      "Run a licensing system where synthetic dataset usage by AI developers is tracked and royalties are paid automatically to the data provider. The Royalty Standard, Royalty Clearing, and Provenance Notary modules record each licensed use and calculate what is owed from verified consumption, giving providers visibility they never had after handing data over.",
    heroCta: "Deploy Data Licensing",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a synthetic dataset handed off with no visibility into a metered, royalty-bearing asset.",
    mechanics: [
      { title: "Dataset Notary", description: "Anchor the asset at license time. The Provenance Notary binds each synthetic dataset to its provider and version, so every later usage claim references a fixed, verifiable origin." },
      { title: "Usage Metering", description: "Track consumption after handoff. Each licensed use by a developer is recorded on-chain, giving the provider the downstream visibility that a plain data transfer destroys." },
      { title: "Royalty Standard", description: "Encode the licensing terms. The Royalty Standard module attaches machine-readable royalty rates to each dataset, so owed amounts follow directly from verified usage." },
      { title: "Automatic Clearing", description: "Pay providers on verified use. The Royalty Clearing module calculates and settles royalties from recorded consumption, ending manual, guessed royalty statements." },
      { title: "Fair Rate Calculation", description: "Base royalties on real usage. Because consumption is verified rather than self-reported, the rate a provider earns reflects how widely the dataset was actually used." },
      { title: "License Compliance", description: "Bind use to terms. Usage outside the licensed scope is detectable against the anchored license, protecting providers from silent over-use of their datasets." },
    ],
    lifecycleTitle: "The Data Licensing Lifecycle",
    lifecycleSubtitle:
      "Follow a synthetic dataset from license anchoring through developer usage to automatic royalty settlement.",
    lifecycleSteps: [
      {
        label: "Dataset Licensing",
        description:
          "A provider lists a synthetic dataset with its royalty terms. The Provenance Notary anchors the dataset and binds its license.",
        icon: Database,
        logFilename: "cerulea_synthdata.log",
        logLines: [
          { text: "[SYS] Initializing Synthetic Dataset License...", time: "08:12:03", tone: "default" },
          { text: "[CMD] listDataset { id: \"SYN_FIN_07\", rate: \"0.002/row\", ver: 2 }", time: "08:12:03", tone: "primary" },
          { text: "[AUTH] Anchoring dataset digest and license terms...", time: "08:12:04", tone: "secondary" },
          { text: "[OK] Dataset SYN_FIN_07 licensed at block 9910233.", time: "08:12:04", tone: "success" },
        ],
      },
      {
        label: "Developer Usage",
        description:
          "An AI developer consumes the dataset for training. Each licensed use is metered and recorded against the developer and the dataset version.",
        icon: Cpu,
        logFilename: "cerulea_synthdata.log",
        logLines: [
          { text: "[SYS] Recording licensed use by DEV_0x33...", time: "13:44:27", tone: "default" },
          { text: "[CMD] recordUsage(dataset: \"SYN_FIN_07\", rows: 850000)", time: "13:44:27", tone: "primary" },
          { text: "[SYS] Verifying use within licensed scope...", time: "13:44:28", tone: "default" },
          { text: "[OK] Usage 850,000 rows metered on-chain.", time: "13:44:28", tone: "success" },
        ],
      },
      {
        label: "Royalty Calculation",
        description:
          "The Royalty Standard applies the dataset's rate to verified usage, computing the exact royalty owed to the provider for the period.",
        icon: PieChart,
        logFilename: "cerulea_synthdata.log",
        logLines: [
          { text: "[SYS] Calculating royalties for SYN_FIN_07...", time: "17:20:15", tone: "default" },
          { text: "[CMD] computeRoyalty(rows: 850000, rate: \"0.002\")", time: "17:20:15", tone: "primary" },
          { text: "[SYS] Owed amount 1,700 from verified usage...", time: "17:20:16", tone: "default" },
          { text: "[OK] Royalty computed from metered consumption.", time: "17:20:16", tone: "success" },
        ],
      },
      {
        label: "Provider Settlement",
        description:
          "The Royalty Clearing module transfers the owed royalty to the provider and logs the usage that produced it for a transparent statement.",
        icon: Coins,
        logFilename: "cerulea_synthdata.log",
        logLines: [
          { text: "[SYS] Settling royalty to provider PRV_0x91...", time: "17:20:30", tone: "default" },
          { text: "[CMD] settle(dataset: \"SYN_FIN_07\", amount: 1700)", time: "17:20:30", tone: "primary" },
          { text: "[AUTH] Writing usage-backed statement to ledger...", time: "17:20:31", tone: "secondary" },
          { text: "[OK] Provider paid from verified usage.", time: "17:20:31", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes synthetic data licensing into modular contracts. Each layer anchors the dataset, meters use, prices royalties, and settles without the provider losing sight of the asset after handoff.",
    layers: [
      {
        title: "Dataset Registry",
        subtitle: "The License Anchor",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The License Anchor",
          description:
            "The foundational data layer. It anchors each synthetic dataset by its digest and binds its license terms, so every later usage record and royalty calculation references one fixed, verifiable asset.",
          platformFunction: "Identity & Licensing",
        },
        codeSnippet:
          "contract DatasetRegistry {\n  struct Dataset {\n    address provider;\n    bytes32 digest;\n    uint256 ratePerRow;\n    uint16 version;\n  }\n\n  mapping(bytes32 => Dataset) public datasets;\n\n  function list(bytes32 id, bytes32 digest, uint256 rate) external {\n    datasets[id] = Dataset(msg.sender, digest, rate, 1);\n  }\n}",
        simAction: "Simulate Dataset Listing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing synthetic dataset SYN_FIN_07...", tone: "default" },
          { text: "Binding provider and rate to registry...", tone: "default" },
          { text: "Anchoring license terms...", tone: "default" },
          { text: "Writing dataset record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Dataset licensed and anchored.", tone: "success" },
        ],
      },
      {
        title: "Usage Meter",
        subtitle: "The Consumption Recorder",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consumption Recorder",
          description:
            "Restores visibility after handoff. It records each licensed use against the developer and dataset version, so the provider knows exactly how widely a dataset is consumed instead of losing all sight of it.",
          platformFunction: "Usage Metering",
        },
        codeSnippet:
          "function recordUsage(bytes32 dataset, uint256 rows) external onlyLicensee {\n    require(withinScope(dataset, msg.sender), \"Out of scope\");\n    usage[dataset][msg.sender] += rows;\n    emit UsageRecorded(dataset, msg.sender, rows);\n}",
        simAction: "Simulate Usage Recording",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading licensed scope for DEV_0x33...", tone: "default" },
          { text: "Confirming use within license terms...", tone: "default" },
          { text: "Metering 850,000 consumed rows...", tone: "default" },
          { text: "Appending to usage record...", tone: "default" },
          { text: "[SUCCESS] Consumption metered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Royalty Engine",
        subtitle: "The Rate Applier",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rate Applier",
          description:
            "Prices usage into royalties. It applies the dataset's encoded rate to verified consumption, so the amount owed follows directly from real usage rather than a provider's estimate or a licensee's self-report.",
          platformFunction: "Royalty Standard",
        },
        codeSnippet:
          "function computeRoyalty(bytes32 dataset, address dev) public view returns (uint256) {\n    Dataset storage d = datasets[dataset];\n    return usage[dataset][dev] * d.ratePerRow;\n}",
        simAction: "Simulate Royalty Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verified usage for SYN_FIN_07...", tone: "default" },
          { text: "Reading encoded rate per row...", tone: "default" },
          { text: "Multiplying usage by rate...", tone: "default" },
          { text: "Deriving owed royalty of 1,700...", tone: "default" },
          { text: "[SUCCESS] Royalty priced from verified usage.", tone: "success" },
        ],
      },
      {
        title: "Clearing Settler",
        subtitle: "The Provider Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Provider Payout",
          description:
            "Settles royalties and records the basis. It transfers the owed amount to the provider and logs the usage that produced it, giving both sides a transparent, usage-backed statement instead of a guessed one.",
          platformFunction: "Royalty Clearing",
        },
        codeSnippet:
          "function settle(bytes32 dataset, address dev) external {\n    uint256 owed = computeRoyalty(dataset, dev);\n    payable(datasets[dataset].provider).transfer(owed);\n    statements[dataset].push(Statement(dev, owed, block.timestamp));\n    emit Settled(dataset, owed);\n}",
        simAction: "Simulate Provider Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing owed royalty for period...", tone: "default" },
          { text: "Transferring 1,700 to provider wallet...", tone: "default" },
          { text: "Writing usage-backed statement...", tone: "default" },
          { text: "Emitting settlement event...", tone: "default" },
          { text: "[SUCCESS] Provider paid from verified usage.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Usage-tracked data licensing is a horizontal capability. Here is how different data actors put the royalty layer to work.",
    sectors: [
      { icon: Database, title: "Synthetic Data Vendors", description: "License generated datasets with confidence that every downstream use is metered, so royalties reflect how widely a dataset was actually consumed rather than a flat, uninformed fee.", assetTypes: ["Licensed Datasets", "Usage Meters", "Royalty Statements"] },
      { icon: Cpu, title: "AI Model Developers", description: "Consume synthetic data under clear, verifiable terms and pay only for what is used, with an on-chain record that proves compliant use to the provider and to auditors.", assetTypes: ["Training Corpora", "Usage Records", "License Proofs"] },
      { icon: Scale, title: "Data Marketplaces", description: "Operate a licensing venue where providers and developers settle on verified consumption, replacing disputed self-reports with a transparent, usage-backed clearing layer.", assetTypes: ["Marketplace Listings", "Clearing Records", "Compliance Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging enterprise data platforms or metering usage directly from developer training environments, Cerulea routes both into one licensing record.",
    tracks: [
      {
        title: "Track A: Data Platform Bridging",
        description:
          "For providers on established data platforms. Dataset listings and usage events are translated into on-chain license and metering records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Data Platform", sublabel: "Provider Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Usage Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Licensing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Developer Environment Metering",
        description:
          "For developers metering usage from their training stack. A signed client reports consumption directly to the licensing contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Training Environment", sublabel: "Developer Client", icon: Fingerprint, accent: false },
          { label: "Metering Validators", sublabel: "Usage Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Usage & Royalty Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a synthetic data licensing system with dataset anchoring, usage metering, and automatic royalty clearing from scratch requires specialised engineers and careful usage-tracking integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Licensing & Usage Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects data-platform and metering integration benchmarks. Building usage tracking into consuming environments, encoding royalty terms, and wiring clearing for an average provider takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your licensing and usage rules into pre-audited WebAssembly binaries and provisions the metering and clearing layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "ai-inference-cost-sharing-across-federated-model-consortiums",
    icon: Network,
    eyebrow: "Federated Cost Settlement Layer",
    headline1: "Meter every inference.",
    headline2: "Split costs by real usage.",
    heroDescription:
      "Deploy a cost-sharing system for federated AI models where each consortium member pays their proportional share of inference costs based on verified usage. The Escrow and Conditional Settlement, External Data Oracles, and Audit Logs modules meter each member's consumption and allocate costs automatically, replacing the end-of-month manual calculation.",
    heroCta: "Deploy Cost-Sharing Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a monthly manual cost allocation into an automatic split driven by verified inference usage.",
    mechanics: [
      { title: "Inference Metering", description: "Count usage at the source. External Data Oracles feed verified inference counts per member into the contract, so cost allocation rests on measured consumption rather than estimates." },
      { title: "Proportional Allocation", description: "Split by real share. The contract computes each member's portion of total inference costs from their verified usage, so heavier users carry proportionally more of the bill." },
      { title: "Escrow Settlement", description: "Collect and clear automatically. The Escrow and Conditional Settlement module holds member contributions and settles each period's shares without a treasurer running spreadsheets." },
      { title: "Verified Consumption", description: "Remove disputes over the numbers. Because usage is oracle-verified, no member can contest their share against the shared, tamper-evident record." },
      { title: "Audit Logs", description: "Keep a reconciled cost trail. The Audit Logs module records each period's usage and allocation, giving every member the same auditable statement." },
      { title: "Consortium Transparency", description: "Give all members one view. Every participant sees total costs, their usage, and their share in real time, ending the opacity of a single member computing the split." },
    ],
    lifecycleTitle: "The Cost-Sharing Lifecycle",
    lifecycleSubtitle:
      "Follow a billing period from metered inference through proportional allocation to automatic member settlement.",
    lifecycleSteps: [
      {
        label: "Consortium Setup",
        description:
          "Members join the federated model and fund their escrow. The contract records each member and arms the period's cost pool.",
        icon: Network,
        logFilename: "cerulea_inference_split.log",
        logLines: [
          { text: "[SYS] Initializing Federated Cost Pool...", time: "08:05:19", tone: "default" },
          { text: "[CMD] joinConsortium { members: 5, model: \"VISION_FED_2\" }", time: "08:05:19", tone: "primary" },
          { text: "[AUTH] Funding member escrow balances...", time: "08:05:20", tone: "secondary" },
          { text: "[OK] Consortium armed at block 10210233.", time: "08:05:20", tone: "success" },
        ],
      },
      {
        label: "Inference Metering",
        description:
          "During the period, oracles report each member's verified inference usage against the shared model.",
        icon: Activity,
        logFilename: "cerulea_inference_split.log",
        logLines: [
          { text: "[SYS] Polling inference oracle for VISION_FED_2...", time: "12:30:44", tone: "default" },
          { text: "[CMD] reportUsage(period: 7, calls: [4200,880,3100,1500,600])", time: "12:30:44", tone: "primary" },
          { text: "[SYS] Total 10,280 verified inferences this period...", time: "12:30:45", tone: "default" },
          { text: "[OK] Per-member usage anchored.", time: "12:30:45", tone: "success" },
        ],
      },
      {
        label: "Cost Allocation",
        description:
          "The contract divides the period's total inference cost across members in proportion to their verified usage.",
        icon: PieChart,
        logFilename: "cerulea_inference_split.log",
        logLines: [
          { text: "[SYS] Allocating period 7 costs for VISION_FED_2...", time: "23:59:10", tone: "default" },
          { text: "[CMD] allocate(total: 51400, basis: \"usage\")", time: "23:59:10", tone: "primary" },
          { text: "[SYS] Computing proportional shares per member...", time: "23:59:11", tone: "default" },
          { text: "[OK] 5 member shares derived from usage.", time: "23:59:11", tone: "success" },
        ],
      },
      {
        label: "Member Settlement",
        description:
          "Escrow settles each member's share and the audit log records the period's usage and allocation for a reconciled statement.",
        icon: Coins,
        logFilename: "cerulea_inference_split.log",
        logLines: [
          { text: "[SYS] Settling member shares from escrow...", time: "00:01:22", tone: "default" },
          { text: "[CMD] settlePeriod(period: 7)", time: "00:01:22", tone: "primary" },
          { text: "[AUTH] Writing usage and allocation to audit log...", time: "00:01:23", tone: "secondary" },
          { text: "[OK] Costs shared automatically, statements reconciled.", time: "00:01:23", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes federated cost-sharing into modular contracts. Each layer onboards members, meters usage, allocates cost, and settles without any single member controlling the calculation.",
    layers: [
      {
        title: "Consortium Registry",
        subtitle: "The Member Pool",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Member Pool",
          description:
            "The foundational membership layer. It records each consortium member and their escrow balance, becoming the shared pool that every period's usage and cost allocation reads from.",
          platformFunction: "Membership & Escrow",
        },
        codeSnippet:
          "contract ConsortiumPool {\n  struct Member {\n    address account;\n    uint256 escrow;\n    uint256 usage;\n  }\n\n  mapping(address => Member) public members;\n\n  function join() external payable {\n    members[msg.sender] = Member(msg.sender, msg.value, 0);\n  }\n}",
        simAction: "Simulate Member Onboarding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Registering member in VISION_FED_2 pool...", tone: "default" },
          { text: "Recording escrow contribution...", tone: "default" },
          { text: "Initializing usage counter...", tone: "default" },
          { text: "Writing member to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Member joined federated pool.", tone: "success" },
        ],
      },
      {
        title: "Usage Oracle",
        subtitle: "The Inference Feed",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Inference Feed",
          description:
            "Meters consumption objectively. It ingests verified inference counts per member from external oracles, so the basis for splitting cost is measured usage that no single member can dispute.",
          platformFunction: "External Data Oracle",
        },
        codeSnippet:
          "function reportUsage(uint256 period, address[] calldata m, uint256[] calldata calls) external onlyOracle {\n    for (uint i = 0; i < m.length; i++) {\n        members[m[i]].usage += calls[i];\n        totalUsage[period] += calls[i];\n    }\n    emit UsageReported(period);\n}",
        simAction: "Simulate Usage Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading inference counts from oracle...", tone: "default" },
          { text: "Attributing calls to each member...", tone: "default" },
          { text: "Accumulating total period usage...", tone: "default" },
          { text: "Anchoring verified counts...", tone: "default" },
          { text: "[SUCCESS] Per-member usage recorded.", tone: "success" },
        ],
      },
      {
        title: "Allocation Engine",
        subtitle: "The Proportional Splitter",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proportional Splitter",
          description:
            "Divides cost by real share. It computes each member's portion of the period's total inference cost from their verified usage, so allocation is proportional and automatic rather than a monthly manual exercise.",
          platformFunction: "Cost Allocation",
        },
        codeSnippet:
          "function allocate(uint256 period, uint256 totalCost) external view returns (uint256[] memory) {\n    uint256[] memory shares = new uint256[](memberList.length);\n    for (uint i = 0; i < memberList.length; i++) {\n        shares[i] = (totalCost * members[memberList[i]].usage) / totalUsage[period];\n    }\n    return shares;\n}",
        simAction: "Simulate Cost Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading total cost 51,400 for period 7...", tone: "default" },
          { text: "Reading verified usage per member...", tone: "default" },
          { text: "Computing proportional shares...", tone: "default" },
          { text: "Returning allocation vector...", tone: "default" },
          { text: "[SUCCESS] Costs split by verified usage.", tone: "success" },
        ],
      },
      {
        title: "Settlement Ledger",
        subtitle: "The Reconciled Clearing",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reconciled Clearing",
          description:
            "Settles shares and records the basis. It draws each member's allocated cost from escrow and writes the period's usage and allocation to the audit log, giving every member the same reconciled statement.",
          platformFunction: "Settlement & Audit",
        },
        codeSnippet:
          "function settlePeriod(uint256 period, uint256[] calldata shares) external {\n    for (uint i = 0; i < memberList.length; i++) {\n        members[memberList[i]].escrow -= shares[i];\n    }\n    auditLog.push(Period(period, shares, block.timestamp));\n    emit PeriodSettled(period);\n}",
        simAction: "Simulate Period Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Drawing allocated shares from escrow...", tone: "default" },
          { text: "Updating member balances...", tone: "default" },
          { text: "Writing usage and allocation to audit log...", tone: "default" },
          { text: "Closing period 7...", tone: "default" },
          { text: "[SUCCESS] Period settled, statements reconciled.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Usage-based cost-sharing is a horizontal capability. Here is how different federated actors put the settlement layer to work.",
    sectors: [
      { icon: Network, title: "Federated Learning Consortiums", description: "Share the running costs of a jointly operated model by verified inference usage, so members settle proportionally each period without a treasurer reconstructing the split by hand.", assetTypes: ["Cost Pools", "Usage Meters", "Period Statements"] },
      { icon: Hospital, title: "Healthcare Data Alliances", description: "Operate shared diagnostic models across institutions and allocate compute cost by each member's real inference volume, keeping cost fair as usage shifts between partners.", assetTypes: ["Shared Models", "Institution Usage", "Allocation Records"] },
      { icon: Landmark, title: "Finance & Audit Teams", description: "Read the audit log to reconcile each period's usage and cost allocation, replacing a single member's spreadsheet with an authoritative, member-verifiable record.", assetTypes: ["Audit Trails", "Reconciliation Records", "Cost Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging inference-serving infrastructure or reporting usage from member-operated nodes, Cerulea routes both into one cost record.",
    tracks: [
      {
        title: "Track A: Serving Infrastructure Bridging",
        description:
          "For consortiums on shared model-serving infrastructure. Verified inference counts are translated into on-chain usage records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Model Serving Layer", sublabel: "Shared Infrastructure", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Usage Verification", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Cost-Sharing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Member Node Reporting",
        description:
          "For members operating their own inference nodes. A signed agent reports each node's verified usage directly to the cost contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Member Node / Wallet", sublabel: "Inference Endpoints", icon: Fingerprint, accent: false },
          { label: "Cost Validators", sublabel: "Allocation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Usage & Cost Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a federated cost-sharing system with inference metering, proportional allocation, and escrow settlement from scratch requires specialised engineers and careful usage integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Metering & Allocation Rules",
      ruleCount: 33,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects distributed-systems and billing integration benchmarks. Building usage metering across serving infrastructure, encoding allocation logic, and wiring escrow settlement for an average consortium takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your metering and allocation rules into pre-audited WebAssembly binaries and provisions the cost pool and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "ai-model-bias-audit-certification-for-regulated-industries",
    icon: Scale,
    eyebrow: "Bias Audit Certification Layer",
    headline1: "Certify the audited model.",
    headline2: "Prove production matches.",
    heroDescription:
      "Build and deploy a verified bias audit certificate for AI models used in regulated decisions, linked to the specific model version that was audited. Compliance Attestations, Provenance Notary, and the DID and VC Ledger anchor the certificate against the model version's hash, so regulators can verify the production model is the one that passed audit.",
    heroCta: "Deploy Audit Certification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Bind a bias audit to an exact model version so an unaudited update cannot quietly reach production.",
    mechanics: [
      { title: "Version-Locked Certificate", description: "Anchor the audit to a hash. The certificate is bound to the specific model version's weights hash, so it certifies one exact model rather than a model family that can change underneath it." },
      { title: "Auditor Identity", description: "Name the certifier. The DID and VC Ledger binds the certificate to the verified identity of the auditor that issued it, so a regulator knows who stands behind the assessment." },
      { title: "Compliance Attestations", description: "Encode the regulatory bar. The Compliance Attestations module records that the audited version met the required fairness criteria for its regulated context." },
      { title: "Production Match Check", description: "Detect drift from the audited version. The live model's hash is compared to the certified hash, so a later, unaudited update is flagged instead of silently serving decisions." },
      { title: "Provenance Notary", description: "Seal the audit evidence. The Provenance Notary anchors the audit report and its findings, so the certificate references immutable evidence, not a replaceable document." },
      { title: "Regulator Verification", description: "Give supervisors a direct check. A regulator or the deploying organization verifies in one query that the model in production carries a valid, matching bias certificate." },
    ],
    lifecycleTitle: "The Certification Lifecycle",
    lifecycleSubtitle:
      "Follow a model from bias audit through certificate issuance to a production-match check by a regulator.",
    lifecycleSteps: [
      {
        label: "Model Version Anchor",
        description:
          "The model version submitted for audit is anchored by its weights hash, fixing the exact artifact the audit will assess.",
        icon: Cpu,
        logFilename: "cerulea_bias_cert.log",
        logLines: [
          { text: "[SYS] Anchoring model version for audit...", time: "09:20:07", tone: "default" },
          { text: "[CMD] anchorVersion { model: \"LEND_V4\", hash: \"0x3d81\" }", time: "09:20:07", tone: "primary" },
          { text: "[AUTH] Sealing weights hash as audit subject...", time: "09:20:08", tone: "secondary" },
          { text: "[OK] Version LEND_V4 anchored at block 11310233.", time: "09:20:08", tone: "success" },
        ],
      },
      {
        label: "Bias Audit",
        description:
          "A verified auditor assesses the model for bias and anchors the audit report and findings through the Provenance Notary.",
        icon: Scale,
        logFilename: "cerulea_bias_cert.log",
        logLines: [
          { text: "[SYS] Recording bias audit for LEND_V4...", time: "14:11:33", tone: "default" },
          { text: "[CMD] submitAudit(auditor: \"did:cer:0x5f2\", report: \"0x9a4\")", time: "14:11:33", tone: "primary" },
          { text: "[SYS] Anchoring findings and fairness metrics...", time: "14:11:34", tone: "default" },
          { text: "[OK] Audit report sealed to version.", time: "14:11:34", tone: "success" },
        ],
      },
      {
        label: "Certificate Issuance",
        description:
          "On a passing audit, the Compliance Attestations module issues a certificate bound to the version hash and the auditor identity.",
        icon: FileCheck,
        logFilename: "cerulea_bias_cert.log",
        logLines: [
          { text: "[SYS] Issuing bias certificate for LEND_V4...", time: "14:12:05", tone: "default" },
          { text: "[CMD] issueCertificate(hash: \"0x3d81\", pass: true)", time: "14:12:05", tone: "primary" },
          { text: "[AUTH] Binding certificate to version and auditor...", time: "14:12:06", tone: "secondary" },
          { text: "[OK] Certificate CERT_77 issued and anchored.", time: "14:12:06", tone: "success" },
        ],
      },
      {
        label: "Production Verification",
        description:
          "A regulator checks the deployed model. The contract compares the live hash to the certified hash and confirms a match.",
        icon: ShieldCheck,
        logFilename: "cerulea_bias_cert.log",
        logLines: [
          { text: "[SYS] Regulator verifying deployed LEND_V4...", time: "10:33:48", tone: "default" },
          { text: "[CMD] verifyProduction(env: \"PROD\", cert: \"CERT_77\")", time: "10:33:48", tone: "primary" },
          { text: "[SYS] Comparing served hash to certified hash...", time: "10:33:49", tone: "default" },
          { text: "[OK] Production matches audited version.", time: "10:33:49", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes bias audit certification into modular contracts. Each layer anchors the version, seals the audit, issues the certificate, and checks production without the deploying organization controlling the proof.",
    layers: [
      {
        title: "Version Anchor",
        subtitle: "The Audit Subject",
        icon: Cpu,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Audit Subject",
          description:
            "The foundational binding layer. It anchors the exact model version by its weights hash before audit, so the certificate that follows certifies one specific artifact rather than a mutable model family.",
          platformFunction: "Identity & Versioning",
        },
        codeSnippet:
          "contract VersionAnchor {\n  struct AuditedModel {\n    bytes32 weightsHash;\n    address submitter;\n    bool certified;\n  }\n\n  mapping(bytes32 => AuditedModel) public models;\n\n  function anchor(bytes32 id, bytes32 hash) external {\n    models[id] = AuditedModel(hash, msg.sender, false);\n  }\n}",
        simAction: "Simulate Version Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading weights hash for LEND_V4...", tone: "default" },
          { text: "Fixing version as audit subject...", tone: "default" },
          { text: "Recording submitter identity...", tone: "default" },
          { text: "Writing anchor to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Model version anchored for audit.", tone: "success" },
        ],
      },
      {
        title: "Audit Notary",
        subtitle: "The Evidence Seal",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Seal",
          description:
            "Anchors the assessment. It seals the audit report, fairness findings, and the verified auditor identity to the version, so the certificate references immutable evidence rather than a document that can be swapped.",
          platformFunction: "Provenance & Identity",
        },
        codeSnippet:
          "function submitAudit(bytes32 model, bytes32 auditorDid, bytes32 report) external onlyAuditor {\n    audits[model] = Audit(auditorDid, report, block.timestamp);\n    emit AuditSubmitted(model, auditorDid, report);\n}",
        simAction: "Simulate Audit Submission",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying auditor credential 0x5f2...", tone: "default" },
          { text: "Hashing bias audit report...", tone: "default" },
          { text: "Sealing fairness findings to version...", tone: "default" },
          { text: "Recording audit timestamp...", tone: "default" },
          { text: "[SUCCESS] Audit evidence anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Certificate Issuer",
        subtitle: "The Compliance Stamp",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Stamp",
          description:
            "Issues the version-locked certificate. On a passing audit it binds a certificate to the weights hash and auditor, so the proof a regulator relies on names one exact model and the party that certified it.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function issueCertificate(bytes32 model, bool pass) external onlyAuditor {\n    require(pass, \"Audit did not pass\");\n    certificates[model] = Certificate(models[model].weightsHash, msg.sender, block.timestamp);\n    models[model].certified = true;\n    emit Certified(model, models[model].weightsHash);\n}",
        simAction: "Simulate Certificate Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming audit passed for LEND_V4...", tone: "default" },
          { text: "Binding certificate to weights hash...", tone: "default" },
          { text: "Attaching issuing auditor identity...", tone: "default" },
          { text: "Marking version certified...", tone: "default" },
          { text: "[SUCCESS] Version-locked certificate issued.", tone: "success" },
        ],
      },
      {
        title: "Production Verifier",
        subtitle: "The Drift Detector",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Drift Detector",
          description:
            "Confirms the live model matches its certificate. It compares the hash serving production to the certified hash, so an unaudited update is caught instead of silently making regulated decisions under a stale certificate.",
          platformFunction: "Production Attestation",
        },
        codeSnippet:
          "function verifyProduction(bytes32 model, bytes32 servedHash) external view returns (bool) {\n    return models[model].certified && certificates[model].weightsHash == servedHash;\n}",
        simAction: "Simulate Production Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading served hash from production...", tone: "default" },
          { text: "Loading certified hash for CERT_77...", tone: "default" },
          { text: "Comparing production against certificate...", tone: "default" },
          { text: "Confirming certified state active...", tone: "default" },
          { text: "[SUCCESS] Production model matches audit.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Version-locked bias certification is a horizontal capability. Here is how different regulated actors put the certification layer to work.",
    sectors: [
      { icon: Landmark, title: "Lending & Credit", description: "Certify credit-decision models against fairness criteria and prove the model scoring applicants is the exact version that passed bias audit, meeting supervisory expectations directly.", assetTypes: ["Model Certificates", "Fairness Findings", "Production Attestations"] },
      { icon: Users, title: "Hiring & HR Tech", description: "Bind bias certificates to the specific screening model version in production, so an unaudited update cannot quietly influence hiring decisions outside the certified assessment.", assetTypes: ["Screening Models", "Audit Records", "Version Locks"] },
      { icon: Scale, title: "Regulators & Auditors", description: "Verify in one query that a deployed model carries a valid, matching bias certificate issued by a known auditor, replacing self-reported compliance with a direct on-chain check.", assetTypes: ["Verification Trails", "Certificate Registries", "Auditor Credentials"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging enterprise model-governance systems or letting regulators verify certificates on a public layer, Cerulea routes both into one certification record.",
    tracks: [
      {
        title: "Track A: Governance System Bridging",
        description:
          "For enterprises on model-governance platforms. Version anchors and audit results are translated into on-chain certificates through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Model Governance System", sublabel: "Enterprise Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Hash Anchoring & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Certification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Regulator Verification Layer",
        description:
          "For supervisors verifying certificates independently. A signed query resolves a deployed model to its certificate on the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Regulator Portal / Wallet", sublabel: "Supervisory Access", icon: Fingerprint, accent: false },
          { label: "Certification Validators", sublabel: "Match Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Certificate Registry", icon: Scale, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a version-locked bias certification system with audit anchoring, compliance attestation, and production-match checks from scratch requires specialised engineers and careful governance integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Audit & Attestation Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects model-governance and compliance integration benchmarks. Wiring version anchoring into deployment, encoding fairness attestations, and building production-match verification for an average platform takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your audit and attestation rules into pre-audited WebAssembly binaries and provisions the certification and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "crowdsourced-data-labeling-marketplace-with-quality-verification",
    icon: Users,
    eyebrow: "Labeling Marketplace Settlement Layer",
    headline1: "Verify the label quality.",
    headline2: "Pay for accuracy, not tasks.",
    heroDescription:
      "Run a data labeling marketplace where workers are paid automatically based on verified label quality scores, with a portable quality reputation. Escrow and Conditional Settlement, the DID and VC Ledger, and Wallet Authentication verify quality through consensus or expert review and pay workers by accuracy, replacing flat per-task rates.",
    heroCta: "Deploy Labeling Marketplaces",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn flat per-task labeling pay into accuracy-based settlement with a reputation workers keep.",
    mechanics: [
      { title: "Quality-Scored Payment", description: "Reward accuracy directly. The Escrow and Conditional Settlement module pays each worker by their verified label quality score, so precise labelers earn more than volume-only ones." },
      { title: "Consensus Verification", description: "Score labels objectively. Quality is established through worker consensus or expert review and anchored on-chain, so payment rests on a verified score rather than a manager's estimate." },
      { title: "Portable Reputation", description: "Let workers carry their record. The DID and VC Ledger issues each worker a portable quality credential, so a strong track record follows them across projects and requesters." },
      { title: "Wallet Authentication", description: "Bind work to a real identity. Wallet Authentication ties each submission to its worker, so reputation and payment attach to a verified account that cannot be faked." },
      { title: "Escrowed Task Funds", description: "Guarantee worker payment. Requester funds are held in escrow before labeling starts, so a completed, quality-verified task always settles." },
      { title: "Transparent Scoring", description: "Show workers how they were judged. Each quality score and its basis are recorded, so a worker sees exactly why a label scored as it did and how it drove pay." },
    ],
    lifecycleTitle: "The Labeling Lifecycle",
    lifecycleSubtitle:
      "Follow a labeling task from escrow funding through submission and quality scoring to accuracy-based payment.",
    lifecycleSteps: [
      {
        label: "Task Funding",
        description:
          "A requester posts a labeling batch and funds it into escrow, guaranteeing that quality-verified work will be paid.",
        icon: Wallet,
        logFilename: "cerulea_labeling.log",
        logLines: [
          { text: "[SYS] Initializing Labeling Task Escrow...", time: "08:33:12", tone: "default" },
          { text: "[CMD] postBatch { id: \"IMG_512\", items: 5000, pool: 4000 }", time: "08:33:12", tone: "primary" },
          { text: "[AUTH] Locking requester funds in escrow...", time: "08:33:13", tone: "secondary" },
          { text: "[OK] Batch IMG_512 funded at block 12010233.", time: "08:33:13", tone: "success" },
        ],
      },
      {
        label: "Label Submission",
        description:
          "Authenticated workers submit labels. Wallet Authentication binds each submission to a verified worker identity.",
        icon: Users,
        logFilename: "cerulea_labeling.log",
        logLines: [
          { text: "[SYS] Receiving labels from worker WRK_0x77...", time: "11:50:40", tone: "default" },
          { text: "[CMD] submitLabels(batch: \"IMG_512\", count: 320)", time: "11:50:40", tone: "primary" },
          { text: "[SYS] Binding submission to authenticated wallet...", time: "11:50:41", tone: "default" },
          { text: "[OK] 320 labels recorded from WRK_0x77.", time: "11:50:41", tone: "success" },
        ],
      },
      {
        label: "Quality Scoring",
        description:
          "Submitted labels are scored through consensus or expert review. The verified quality score is anchored against each worker's submission.",
        icon: FileCheck,
        logFilename: "cerulea_labeling.log",
        logLines: [
          { text: "[SYS] Scoring labels for batch IMG_512...", time: "15:22:18", tone: "default" },
          { text: "[CMD] scoreQuality(worker: \"WRK_0x77\", method: \"CONSENSUS\")", time: "15:22:18", tone: "primary" },
          { text: "[SYS] Consensus quality score 0.94 computed...", time: "15:22:19", tone: "default" },
          { text: "[OK] Score anchored to worker submission.", time: "15:22:19", tone: "success" },
        ],
      },
      {
        label: "Accuracy Payout",
        description:
          "Escrow settles each worker by their quality score and the DID ledger updates their portable reputation credential.",
        icon: Coins,
        logFilename: "cerulea_labeling.log",
        logLines: [
          { text: "[SYS] Settling worker payout for IMG_512...", time: "15:23:02", tone: "default" },
          { text: "[CMD] payByQuality(worker: \"WRK_0x77\", score: 0.94)", time: "15:23:02", tone: "primary" },
          { text: "[AUTH] Updating portable reputation credential...", time: "15:23:03", tone: "secondary" },
          { text: "[OK] Worker paid by accuracy. Reputation updated.", time: "15:23:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the labeling marketplace into modular contracts. Each layer funds tasks, authenticates workers, scores quality, and pays by accuracy without the requester controlling the score.",
    layers: [
      {
        title: "Task Escrow",
        subtitle: "The Guaranteed Pool",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Guaranteed Pool",
          description:
            "The foundational settlement layer. It locks requester funds before labeling begins, so any worker whose labels pass quality verification is guaranteed payment from a committed pool.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract LabelEscrow {\n  struct Batch {\n    address requester;\n    uint256 pool;\n    uint256 items;\n  }\n\n  mapping(bytes32 => Batch) public batches;\n\n  function postBatch(bytes32 id, uint256 items) external payable {\n    batches[id] = Batch(msg.sender, msg.value, items);\n  }\n}",
        simAction: "Simulate Task Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading batch IMG_512 parameters...", tone: "default" },
          { text: "Locking 4,000 reward pool in escrow...", tone: "default" },
          { text: "Recording item count and requester...", tone: "default" },
          { text: "Writing batch to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Labeling task funded and armed.", tone: "success" },
        ],
      },
      {
        title: "Worker Identity",
        subtitle: "The Authenticated Labeler",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authenticated Labeler",
          description:
            "Ties every label to a real worker. Wallet Authentication and the DID ledger bind each submission to a verified account, so quality scores and payment attach to an identity that cannot be spoofed or duplicated.",
          platformFunction: "Identity & Authentication",
        },
        codeSnippet:
          "function submitLabels(bytes32 batch, bytes32 labelsHash, uint256 count) external {\n    require(authenticated[msg.sender], \"Not authenticated\");\n    submissions[batch][msg.sender] = Submission(labelsHash, count, block.timestamp);\n    emit LabelsSubmitted(batch, msg.sender, count);\n}",
        simAction: "Simulate Label Submission",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying wallet authentication for WRK_0x77...", tone: "default" },
          { text: "Hashing submitted label set...", tone: "default" },
          { text: "Binding submission to worker identity...", tone: "default" },
          { text: "Recording 320 labels...", tone: "default" },
          { text: "[SUCCESS] Labels bound to authenticated worker.", tone: "success" },
        ],
      },
      {
        title: "Quality Oracle",
        subtitle: "The Consensus Scorer",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consensus Scorer",
          description:
            "Scores work objectively. It establishes label quality through worker consensus or expert review and anchors the score, so payment rests on a verified measure rather than a requester's discretion.",
          platformFunction: "Quality Verification",
        },
        codeSnippet:
          "function scoreQuality(bytes32 batch, address worker, uint16 score) external onlyReviewer {\n    require(score <= 10000, \"Invalid score\");\n    quality[batch][worker] = score;\n    emit QualityScored(batch, worker, score);\n}",
        simAction: "Simulate Quality Scoring",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Gathering consensus labels for IMG_512...", tone: "default" },
          { text: "Comparing worker labels against consensus...", tone: "default" },
          { text: "Computing quality score 0.94...", tone: "default" },
          { text: "Anchoring score to submission...", tone: "default" },
          { text: "[SUCCESS] Verified quality score recorded.", tone: "success" },
        ],
      },
      {
        title: "Reputation Settler",
        subtitle: "The Accuracy Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accuracy Payout",
          description:
            "Pays by quality and builds reputation. It settles each worker in proportion to their verified score and updates their portable quality credential, so accuracy is rewarded and a track record travels with the worker.",
          platformFunction: "Settlement & Reputation",
        },
        codeSnippet:
          "function payByQuality(bytes32 batch, address worker) external {\n    uint256 share = (batches[batch].pool * quality[batch][worker]) / totalQuality[batch];\n    payable(worker).transfer(share);\n    reputation[worker] = _update(reputation[worker], quality[batch][worker]);\n    emit Paid(batch, worker, share);\n}",
        simAction: "Simulate Accuracy Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified score 0.94 for WRK_0x77...", tone: "default" },
          { text: "Computing accuracy-weighted share...", tone: "default" },
          { text: "Transferring reward to worker...", tone: "default" },
          { text: "Updating portable reputation credential...", tone: "default" },
          { text: "[SUCCESS] Worker paid by accuracy, reputation updated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Accuracy-based labeling settlement is a horizontal capability. Here is how different actors put the marketplace to work.",
    sectors: [
      { icon: Cpu, title: "AI Training Teams", description: "Source labeled data at a quality bar they can trust, paying workers by verified accuracy so training sets improve without policing volume-driven, low-quality submissions.", assetTypes: ["Labeled Datasets", "Quality Scores", "Task Escrows"] },
      { icon: Users, title: "Distributed Labeling Workforces", description: "Give workers accuracy-based pay and a reputation credential they own, so skilled labelers are rewarded and can carry their standing across requesters and platforms.", assetTypes: ["Worker Credentials", "Reputation Records", "Accuracy Payouts"] },
      { icon: Building2, title: "Data Operations Vendors", description: "Run managed labeling programs on a transparent scoring and settlement layer, replacing opaque flat-rate contracts with verifiable, quality-linked payment and audit trails.", assetTypes: ["Program Batches", "Scoring Records", "Settlement Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging enterprise labeling platforms or capturing submissions directly from worker devices, Cerulea routes both into one settlement record.",
    tracks: [
      {
        title: "Track A: Labeling Platform Bridging",
        description:
          "For requesters on established labeling platforms. Task and scoring events are translated into on-chain escrow and quality records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Labeling Platform", sublabel: "Requester Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Score Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Marketplace Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Worker Capture",
        description:
          "For workers labeling from their own devices. A wallet-authenticated client submits labels directly to the marketplace contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Worker Device / Wallet", sublabel: "Labeler Client", icon: Fingerprint, accent: false },
          { label: "Marketplace Validators", sublabel: "Scoring Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Quality & Payment Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a labeling marketplace with escrowed tasks, worker authentication, consensus quality scoring, and portable reputation from scratch requires specialised engineers and careful marketplace integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Quality & Payment Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects marketplace and reputation-system integration benchmarks. Building escrowed task settlement, worker authentication, consensus scoring, and a portable reputation credential for an average marketplace takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your quality and payment rules into pre-audited WebAssembly binaries and provisions the escrow and reputation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "iot-device-identity-firmware-version-and-access-credential-management",
    icon: Radio,
    eyebrow: "Industrial Device Identity Chain",
    headline1: "Authenticate every device.",
    headline2: "Block the outdated ones.",
    heroDescription:
      "Deliver a private IoT device identity chain with attestation, firmware verification, role-based access control, and a tamper-proof access audit trail. Cerulea Studio assembles it from Device Attestation, the DID and VC Ledger, and Role-Based Access Control so that only authenticated, up-to-date devices reach sensitive control systems.",
    heroCta: "Deploy Device Identity Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn perimeter trust into per-device proof, so only attested, current-firmware devices touch control systems.",
    mechanics: [
      { title: "Device Attestation", description: "Prove hardware before access. The Device Attestation module verifies each device's cryptographic identity at connection, so only genuine, enrolled hardware is admitted to the network." },
      { title: "Firmware Verification", description: "Block stale devices. The contract checks each device's reported firmware hash against the approved version, so an outdated or tampered image is refused before it reaches control systems." },
      { title: "Role-Based Access Control", description: "Scope what a device can do. The Role-Based Access Control module binds each device and technician to a role, so access is granted only to the systems that role permits." },
      { title: "Verified Technician Identity", description: "Attribute human access too. The DID and VC Ledger binds each technician to a verified credential, so every access event names both a device and a person." },
      { title: "Tamper-Proof Audit Trail", description: "Record every access immutably. Each connection and command is written to an append-only log, so a security review reads a complete, unalterable history." },
      { title: "Automatic Revocation", description: "Cut off compromised devices. A device that fails attestation or falls out of firmware compliance is revoked automatically, isolating it from the control network." },
    ],
    lifecycleTitle: "The Device Access Lifecycle",
    lifecycleSubtitle:
      "Follow a device from enrollment through firmware and identity checks to an audited access event on a control system.",
    lifecycleSteps: [
      {
        label: "Device Enrollment",
        description:
          "A device is enrolled with its cryptographic identity and approved firmware baseline. The chain records it as a known, trusted endpoint.",
        icon: Radio,
        logFilename: "cerulea_device_chain.log",
        logLines: [
          { text: "[SYS] Initializing Device Identity Manifest...", time: "07:04:11", tone: "default" },
          { text: "[CMD] enrollDevice { id: \"PLC_4471\", fw: \"v3.2.1\", role: \"ACTUATOR\" }", time: "07:04:11", tone: "primary" },
          { text: "[AUTH] Binding device key and firmware baseline...", time: "07:04:12", tone: "secondary" },
          { text: "[OK] Device PLC_4471 enrolled at block 13110233.", time: "07:04:12", tone: "success" },
        ],
      },
      {
        label: "Attestation & Firmware Check",
        description:
          "On connection, the device attests its identity and reports its firmware hash. The contract verifies both before admitting it.",
        icon: ShieldCheck,
        logFilename: "cerulea_device_chain.log",
        logLines: [
          { text: "[SYS] Device PLC_4471 requesting access...", time: "10:41:38", tone: "default" },
          { text: "[CMD] attest(device: \"PLC_4471\", fwHash: \"0x8c2\")", time: "10:41:38", tone: "primary" },
          { text: "[SYS] Firmware matches approved v3.2.1...", time: "10:41:39", tone: "default" },
          { text: "[OK] Attestation and firmware verified.", time: "10:41:39", tone: "success" },
        ],
      },
      {
        label: "Role-Based Access",
        description:
          "A verified technician requests a control action. Role-Based Access Control confirms the device and technician are permitted for that system.",
        icon: Lock,
        logFilename: "cerulea_device_chain.log",
        logLines: [
          { text: "[SYS] Access request from technician TEC_0x19...", time: "10:42:05", tone: "default" },
          { text: "[CMD] authorize(device: \"PLC_4471\", system: \"VALVE_CTRL\")", time: "10:42:05", tone: "primary" },
          { text: "[AUTH] Confirming role permits VALVE_CTRL...", time: "10:42:06", tone: "secondary" },
          { text: "[OK] Access granted to authorized role.", time: "10:42:06", tone: "success" },
        ],
      },
      {
        label: "Audited Access Event",
        description:
          "The access is executed and written to the tamper-proof trail, attributed to both the verified device and technician.",
        icon: FileCheck,
        logFilename: "cerulea_device_chain.log",
        logLines: [
          { text: "[SYS] Recording access event on VALVE_CTRL...", time: "10:42:07", tone: "default" },
          { text: "[CMD] logAccess(device: \"PLC_4471\", tech: \"TEC_0x19\")", time: "10:42:07", tone: "primary" },
          { text: "[SYS] Appending to immutable access trail...", time: "10:42:08", tone: "default" },
          { text: "[OK] Event logged. Device and technician attributed.", time: "10:42:08", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes device identity into modular contracts. Each layer enrolls, attests, authorizes, and audits without any device gaining access it cannot cryptographically justify.",
    layers: [
      {
        title: "Device Registry",
        subtitle: "The Identity Anchor",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Anchor",
          description:
            "The foundational identity layer. It enrolls each device with its cryptographic key, approved firmware baseline, and role, becoming the trusted reference every later attestation and access check reads from.",
          platformFunction: "Identity & Enrollment",
        },
        codeSnippet:
          "contract DeviceRegistry {\n  struct Device {\n    bytes32 pubKey;\n    bytes32 approvedFw;\n    bytes32 role;\n    bool active;\n  }\n\n  mapping(bytes32 => Device) public devices;\n\n  function enroll(bytes32 id, bytes32 key, bytes32 fw, bytes32 role) external onlyAdmin {\n    devices[id] = Device(key, fw, role, true);\n  }\n}",
        simAction: "Simulate Device Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading device key for PLC_4471...", tone: "default" },
          { text: "Recording approved firmware baseline...", tone: "default" },
          { text: "Binding role ACTUATOR...", tone: "default" },
          { text: "Writing device to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Device enrolled as trusted endpoint.", tone: "success" },
        ],
      },
      {
        title: "Attestation Gate",
        subtitle: "The Firmware Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Firmware Check",
          description:
            "Refuses stale or forged devices. It verifies the device's attested identity and compares its reported firmware hash to the approved baseline, so an outdated or tampered image is blocked before reaching control systems.",
          platformFunction: "Device Attestation",
        },
        codeSnippet:
          "function attest(bytes32 id, bytes32 fwHash, bytes calldata sig) external returns (bool) {\n    Device storage d = devices[id];\n    require(d.active && _verify(d.pubKey, sig), \"Attestation failed\");\n    require(fwHash == d.approvedFw, \"Firmware outdated\");\n    return true;\n}",
        simAction: "Simulate Attestation Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying device signature for PLC_4471...", tone: "default" },
          { text: "Reading reported firmware hash...", tone: "default" },
          { text: "Comparing against approved v3.2.1...", tone: "default" },
          { text: "Confirming device active...", tone: "default" },
          { text: "[SUCCESS] Attestation and firmware verified.", tone: "success" },
        ],
      },
      {
        title: "Access Controller",
        subtitle: "The Role Enforcer",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Role Enforcer",
          description:
            "Scopes access to permitted systems. It checks the device and technician roles against the requested control system, so a valid device still cannot act outside the authority its role grants.",
          platformFunction: "Role-Based Access Control",
        },
        codeSnippet:
          "function authorize(bytes32 device, bytes32 tech, bytes32 system) external view returns (bool) {\n    return rolePermits[devices[device].role][system] && technicianActive[tech];\n}",
        simAction: "Simulate Access Authorization",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading device role for PLC_4471...", tone: "default" },
          { text: "Checking role permission for VALVE_CTRL...", tone: "default" },
          { text: "Confirming technician TEC_0x19 active...", tone: "default" },
          { text: "Evaluating access decision...", tone: "default" },
          { text: "[SUCCESS] Access authorized within role.", tone: "success" },
        ],
      },
      {
        title: "Access Auditor",
        subtitle: "The Immutable Trail",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Immutable Trail",
          description:
            "Records every access permanently. It appends each connection and command to a tamper-proof log attributed to a verified device and technician, so a security review reads a complete, unalterable history.",
          platformFunction: "Audit & Attribution",
        },
        codeSnippet:
          "function logAccess(bytes32 device, bytes32 tech, bytes32 system) external {\n    accessTrail.push(Access(device, tech, system, block.timestamp));\n    emit AccessLogged(device, tech, system);\n}",
        simAction: "Simulate Access Logging",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Capturing access on VALVE_CTRL...", tone: "default" },
          { text: "Attributing to device and technician...", tone: "default" },
          { text: "Appending to immutable trail...", tone: "default" },
          { text: "Sealing timestamp to event...", tone: "default" },
          { text: "[SUCCESS] Access event logged, tamper-proof.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Cryptographic device identity is a horizontal capability. Here is how different operators put the identity chain to work.",
    sectors: [
      { icon: Factory, title: "Industrial & OT Operators", description: "Admit only attested, current-firmware devices to plant control systems and attribute every command to a verified technician, hardening operational technology against unauthorized or outdated endpoints.", assetTypes: ["Device Identities", "Firmware Baselines", "Access Trails"] },
      { icon: Zap, title: "Utilities & Energy Grids", description: "Enforce per-device attestation across distributed grid equipment, blocking compromised units automatically and keeping an immutable record of who accessed which asset and when.", assetTypes: ["Grid Endpoints", "Attestation Records", "Revocation Logs"] },
      { icon: Building2, title: "Smart Building Operators", description: "Manage identity, firmware, and role-based access for building automation devices, so contractors and systems reach only the subsystems their role permits under a full audit trail.", assetTypes: ["Building Devices", "Technician Credentials", "Access Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging existing device-management platforms or attesting devices directly from the edge, Cerulea routes both into one identity record.",
    tracks: [
      {
        title: "Track A: Device Management Bridging",
        description:
          "For operators on established device-management platforms. Enrollment and firmware events are translated into on-chain identity records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Device Management Platform", sublabel: "Operator Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Attestation Verification", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Device Identity Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Edge Device Attestation",
        description:
          "For devices attesting directly from the field. An embedded key signs each attestation and access request straight to the identity contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Edge Device / Secure Element", sublabel: "Field Endpoints", icon: Fingerprint, accent: false },
          { label: "Identity Validators", sublabel: "Access Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Device & Access Record", icon: Radio, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a device identity chain with attestation, firmware verification, role-based access control, and a tamper-proof audit trail from scratch requires specialised engineers and careful OT integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attestation & Access Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects industrial security and device-management integration benchmarks. Building attestation, firmware verification, role-based access control, and an immutable audit trail across an average fleet takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attestation and access rules into pre-audited WebAssembly binaries and provisions the device identity ledger and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "smart-city-sensor-data-marketplace-for-urban-planning",
    icon: Building2,
    eyebrow: "Urban Sensor Data Marketplace",
    headline1: "Unify the city's sensors.",
    headline2: "License data with proof.",
    heroDescription:
      "Build and deploy a data marketplace where sensor data from across the city, traffic, air quality, and footfall, is licensed to urban planners with automatic payments to data owners. Cerulea Studio assembles it from External Data Oracles, the Royalty Standard, and Royalty Clearing so departments and private operators list feeds and are paid on verified usage.",
    heroCta: "Deploy Sensor Marketplaces",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fragmented, department-owned sensor feeds into one licensed marketplace with automatic owner payment.",
    mechanics: [
      { title: "Unified Feed Registry", description: "List every sensor in one place. Traffic, air-quality, and footfall feeds from different departments and operators are registered together, so planners discover and license them from a single marketplace." },
      { title: "Oracle-Verified Data", description: "Deliver trusted feeds. External Data Oracles verify each feed's data before it is served, so planners license measurements they can rely on rather than unverified exports." },
      { title: "Automatic Owner Payment", description: "Pay data owners on use. The Royalty Clearing module settles each licensed access to the owning department or operator, ending manual cross-department billing." },
      { title: "Usage-Based Royalties", description: "Charge and pay by consumption. The Royalty Standard encodes each feed's access terms, so what a planner pays and an owner earns follows verified usage." },
      { title: "Licensed Access Control", description: "Gate feeds behind licenses. Only a planner with an active license reads a feed, so data owners retain control over who consumes their sensors." },
      { title: "Transparent Settlement", description: "Give owners a clear ledger. Each department or operator sees who licensed their feed and what they earned, replacing opaque interdepartmental arrangements." },
    ],
    lifecycleTitle: "The Sensor Licensing Lifecycle",
    lifecycleSubtitle:
      "Follow a sensor feed from listing through a planner's licensed access to automatic payment of the data owner.",
    lifecycleSteps: [
      {
        label: "Feed Listing",
        description:
          "A department lists a sensor feed with its access terms. The marketplace registers the feed and its owner.",
        icon: Radio,
        logFilename: "cerulea_sensor_market.log",
        logLines: [
          { text: "[SYS] Initializing Sensor Feed Listing...", time: "08:15:22", tone: "default" },
          { text: "[CMD] listFeed { id: \"AIR_Q_12\", owner: \"ENV_DEPT\", rate: \"5/query\" }", time: "08:15:22", tone: "primary" },
          { text: "[AUTH] Registering feed and owner terms...", time: "08:15:23", tone: "secondary" },
          { text: "[OK] Feed AIR_Q_12 listed at block 14210233.", time: "08:15:23", tone: "success" },
        ],
      },
      {
        label: "Planner Licensing",
        description:
          "An urban planning department licenses the feed. The marketplace grants access under the feed's encoded terms.",
        icon: Building2,
        logFilename: "cerulea_sensor_market.log",
        logLines: [
          { text: "[SYS] License request from PLAN_DEPT...", time: "11:32:47", tone: "default" },
          { text: "[CMD] license(feed: \"AIR_Q_12\", term: \"90d\")", time: "11:32:47", tone: "primary" },
          { text: "[SYS] Granting scoped access under terms...", time: "11:32:48", tone: "default" },
          { text: "[OK] License issued to PLAN_DEPT.", time: "11:32:48", tone: "success" },
        ],
      },
      {
        label: "Verified Access",
        description:
          "The planner queries the feed. External Data Oracles verify the served data and meter the licensed access.",
        icon: Activity,
        logFilename: "cerulea_sensor_market.log",
        logLines: [
          { text: "[SYS] Serving verified AIR_Q_12 to PLAN_DEPT...", time: "14:05:10", tone: "default" },
          { text: "[CMD] queryFeed(feed: \"AIR_Q_12\", window: \"24h\")", time: "14:05:10", tone: "primary" },
          { text: "[SYS] Oracle verifies data, metering access...", time: "14:05:11", tone: "default" },
          { text: "[OK] Verified data served, usage metered.", time: "14:05:11", tone: "success" },
        ],
      },
      {
        label: "Owner Settlement",
        description:
          "The Royalty Clearing module pays the owning department by verified usage and records the settlement transparently.",
        icon: Coins,
        logFilename: "cerulea_sensor_market.log",
        logLines: [
          { text: "[SYS] Settling usage for feed AIR_Q_12...", time: "23:59:40", tone: "default" },
          { text: "[CMD] settleOwner(owner: \"ENV_DEPT\", queries: 640)", time: "23:59:40", tone: "primary" },
          { text: "[AUTH] Writing owner statement to ledger...", time: "23:59:41", tone: "secondary" },
          { text: "[OK] Owner paid from verified usage.", time: "23:59:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the sensor marketplace into modular contracts. Each layer lists feeds, licenses access, verifies data, and settles owners without any department controlling the billing.",
    layers: [
      {
        title: "Feed Registry",
        subtitle: "The Unified Catalog",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Unified Catalog",
          description:
            "The foundational listing layer. It registers each sensor feed with its owner and access terms, unifying department and operator sensors into one catalog planners can discover and license from.",
          platformFunction: "Identity & Listing",
        },
        codeSnippet:
          "contract FeedRegistry {\n  struct Feed {\n    address owner;\n    bytes32 kind;\n    uint256 ratePerQuery;\n    bool active;\n  }\n\n  mapping(bytes32 => Feed) public feeds;\n\n  function list(bytes32 id, bytes32 kind, uint256 rate) external {\n    feeds[id] = Feed(msg.sender, kind, rate, true);\n  }\n}",
        simAction: "Simulate Feed Listing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Registering feed AIR_Q_12 in catalog...", tone: "default" },
          { text: "Binding owner ENV_DEPT and rate...", tone: "default" },
          { text: "Tagging feed kind air-quality...", tone: "default" },
          { text: "Writing feed to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Sensor feed listed in marketplace.", tone: "success" },
        ],
      },
      {
        title: "License Manager",
        subtitle: "The Access Grant",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Access Grant",
          description:
            "Gates feeds behind licenses. It issues a scoped, time-bound license to a planner under the feed's terms, so only licensed consumers read a feed and owners keep control over who uses their sensors.",
          platformFunction: "Access & Licensing",
        },
        codeSnippet:
          "function license(bytes32 feed, address planner, uint256 duration) external {\n    require(feeds[feed].active, \"Feed inactive\");\n    licenses[feed][planner] = block.timestamp + duration;\n    emit Licensed(feed, planner, duration);\n}",
        simAction: "Simulate License Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading feed terms for AIR_Q_12...", tone: "default" },
          { text: "Granting 90-day scoped access...", tone: "default" },
          { text: "Recording license for PLAN_DEPT...", tone: "default" },
          { text: "Emitting license event...", tone: "default" },
          { text: "[SUCCESS] Licensed access granted.", tone: "success" },
        ],
      },
      {
        title: "Data Oracle",
        subtitle: "The Verified Feed",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Feed",
          description:
            "Delivers trustworthy measurements. It verifies each feed's data through External Data Oracles and meters licensed access, so planners consume reliable data and usage is counted for settlement.",
          platformFunction: "External Data Oracle",
        },
        codeSnippet:
          "function queryFeed(bytes32 feed, address planner) external returns (bytes memory) {\n    require(licenses[feed][planner] >= block.timestamp, \"No license\");\n    usage[feed][planner] += 1;\n    return oracle.getVerified(feed);\n}",
        simAction: "Simulate Verified Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking active license for PLAN_DEPT...", tone: "default" },
          { text: "Fetching verified feed from oracle...", tone: "default" },
          { text: "Metering the licensed access...", tone: "default" },
          { text: "Returning verified data...", tone: "default" },
          { text: "[SUCCESS] Verified data served and metered.", tone: "success" },
        ],
      },
      {
        title: "Royalty Settler",
        subtitle: "The Owner Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Owner Payout",
          description:
            "Pays owners on verified usage. It applies each feed's rate to metered access and settles the owning department or operator, replacing manual interdepartmental billing with a transparent, automatic payout.",
          platformFunction: "Royalty Clearing",
        },
        codeSnippet:
          "function settleOwner(bytes32 feed) external {\n    uint256 owed = usage[feed][_caller()] * feeds[feed].ratePerQuery;\n    payable(feeds[feed].owner).transfer(owed);\n    statements[feed].push(Statement(owed, block.timestamp));\n    emit OwnerSettled(feed, owed);\n}",
        simAction: "Simulate Owner Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading metered queries for AIR_Q_12...", tone: "default" },
          { text: "Applying per-query rate...", tone: "default" },
          { text: "Transferring earnings to ENV_DEPT...", tone: "default" },
          { text: "Writing transparent statement...", tone: "default" },
          { text: "[SUCCESS] Data owner paid from verified usage.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A licensed sensor marketplace is a horizontal capability. Here is how different urban actors put it to work.",
    sectors: [
      { icon: Building2, title: "City Departments", description: "List sensor feeds owned by traffic, environment, and transit departments in one marketplace and earn on licensed use, turning siloed data into a shared, revenue-generating asset.", assetTypes: ["Department Feeds", "License Grants", "Owner Statements"] },
      { icon: Users, title: "Urban Planners", description: "License verified traffic, air-quality, and footfall data from across the city through one contract, paying automatically and trusting the measurements behind their plans.", assetTypes: ["Licensed Feeds", "Verified Datasets", "Access Records"] },
      { icon: Zap, title: "Private Sensor Operators", description: "Monetize privately owned sensor networks by listing feeds for licensed municipal access, receiving usage-based payment without negotiating bespoke contracts per buyer.", assetTypes: ["Operator Feeds", "Usage Meters", "Settlement Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging municipal data platforms or ingesting readings directly from field sensors, Cerulea routes both into one marketplace record.",
    tracks: [
      {
        title: "Track A: Municipal Platform Bridging",
        description:
          "For city systems on existing data platforms. Feed listings and access events are translated into on-chain marketplace records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Municipal Data Platform", sublabel: "Department Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Usage Verification", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Marketplace Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Sensor Ingestion",
        description:
          "For sensors reporting directly from the street. A signed gateway feeds verified readings straight into the marketplace contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field Sensor / Gateway", sublabel: "Street Endpoints", icon: Fingerprint, accent: false },
          { label: "Oracle Validators", sublabel: "Data Verification", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Feed & Settlement Record", icon: Building2, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a city sensor marketplace with a unified feed registry, oracle-verified data, licensing, and automatic owner settlement from scratch requires specialised engineers and careful municipal integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Licensing & Settlement Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects municipal data-platform integration benchmarks. Unifying department feeds, wiring oracle verification, and building licensing with automatic owner settlement for an average city takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your licensing and settlement rules into pre-audited WebAssembly binaries and provisions the marketplace and clearing layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "connected-vehicle-fleet-telemetry-sharing-for-insurance-pricing",
    icon: Car,
    eyebrow: "Fleet Telemetry Verification Layer",
    headline1: "Verify the driving data.",
    headline2: "Price insurance on trust.",
    heroDescription:
      "Build and deploy a verified telemetry sharing system where fleet driving data feeds directly into insurance pricing, giving fleets lower premiums for safer driving. The Device Attestation, External Data Oracles, and Compliance Attestations modules anchor telemetry straight from vehicle devices, so insurers can price on data they can trust.",
    heroCta: "Deploy Telemetry Sharing",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn unverifiable driving exports into attested telemetry an insurer can price against directly.",
    mechanics: [
      { title: "Device-Attested Telemetry", description: "Prove the data's source. The Device Attestation module signs telemetry at the vehicle device, so insurers know the driving data came from genuine hardware and was not edited in transit." },
      { title: "Tamper-Evident Feed", description: "Guarantee integrity. Each telemetry record is anchored by digest, so any modification of speed, braking, or mileage data breaks its hash and is immediately detectable." },
      { title: "Oracle-Delivered Metrics", description: "Feed pricing directly. External Data Oracles deliver verified driving metrics into the pricing contract, so premiums adjust from measured behavior rather than self-reported claims." },
      { title: "Usage-Based Pricing", description: "Reward safe driving. The contract translates verified safe-driving metrics into lower premiums, so fleets see their risk profile reflected in real, evidence-backed rates." },
      { title: "Compliance Attestations", description: "Respect data rules. The Compliance Attestations module confirms telemetry sharing meets the agreed consent and data-handling terms before it reaches the insurer." },
      { title: "Fleet Transparency", description: "Show fleets the basis. Each fleet sees the verified metrics that drove its premium, so pricing is explainable and disputes are settled against a shared record." },
    ],
    lifecycleTitle: "The Telemetry Pricing Lifecycle",
    lifecycleSubtitle:
      "Follow fleet telemetry from device attestation through verified delivery to a usage-based premium adjustment.",
    lifecycleSteps: [
      {
        label: "Device Attestation",
        description:
          "A vehicle device attests its identity and begins signing telemetry, establishing that the data originates from genuine hardware.",
        icon: Car,
        logFilename: "cerulea_fleet_telemetry.log",
        logLines: [
          { text: "[SYS] Initializing Vehicle Telemetry Attestation...", time: "06:40:15", tone: "default" },
          { text: "[CMD] attestDevice { veh: \"FLT_882\", unit: \"OBD_44\" }", time: "06:40:15", tone: "primary" },
          { text: "[AUTH] Verifying device key and binding vehicle...", time: "06:40:16", tone: "secondary" },
          { text: "[OK] Device OBD_44 attested at block 15310233.", time: "06:40:16", tone: "success" },
        ],
      },
      {
        label: "Telemetry Anchoring",
        description:
          "Driving data is signed and anchored by digest as the vehicle operates, producing a tamper-evident record of behavior.",
        icon: Activity,
        logFilename: "cerulea_fleet_telemetry.log",
        logLines: [
          { text: "[SYS] Anchoring telemetry batch for FLT_882...", time: "12:18:33", tone: "default" },
          { text: "[CMD] anchorTelemetry(veh: \"FLT_882\", hash: \"0x6b1\")", time: "12:18:33", tone: "primary" },
          { text: "[SYS] Sealing speed, braking, mileage metrics...", time: "12:18:34", tone: "default" },
          { text: "[OK] Telemetry anchored, tamper-evident.", time: "12:18:34", tone: "success" },
        ],
      },
      {
        label: "Compliance Check",
        description:
          "Before sharing, the Compliance Attestations module confirms the telemetry meets the agreed consent and data-handling terms.",
        icon: ShieldCheck,
        logFilename: "cerulea_fleet_telemetry.log",
        logLines: [
          { text: "[SYS] Evaluating sharing compliance for FLT_882...", time: "12:19:02", tone: "default" },
          { text: "[CMD] checkSharing(veh: \"FLT_882\")", time: "12:19:02", tone: "primary" },
          { text: "[AUTH] Consent and data-handling terms valid...", time: "12:19:03", tone: "secondary" },
          { text: "[OK] Compliance confirmed. Cleared to share.", time: "12:19:03", tone: "success" },
        ],
      },
      {
        label: "Premium Adjustment",
        description:
          "Oracles deliver the verified driving metrics into the pricing contract, which adjusts the fleet's premium accordingly.",
        icon: Coins,
        logFilename: "cerulea_fleet_telemetry.log",
        logLines: [
          { text: "[SYS] Feeding verified metrics to pricing...", time: "18:45:20", tone: "default" },
          { text: "[CMD] priceRisk(fleet: \"FLT_882\", score: 0.91)", time: "18:45:20", tone: "primary" },
          { text: "[SYS] Safe-driving score lowers premium band...", time: "18:45:21", tone: "default" },
          { text: "[OK] Premium adjusted from trusted data.", time: "18:45:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes telemetry pricing into modular contracts. Each layer attests devices, anchors data, checks compliance, and prices risk without either fleet or insurer editing the numbers.",
    layers: [
      {
        title: "Device Attestor",
        subtitle: "The Hardware Proof",
        icon: Car,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Hardware Proof",
          description:
            "The foundational trust layer. It attests each vehicle device's identity and binds it to a fleet vehicle, so all telemetry that follows is provably signed by genuine hardware rather than fabricated after the fact.",
          platformFunction: "Device Attestation",
        },
        codeSnippet:
          "contract TelemetryAttestor {\n  struct Unit {\n    bytes32 deviceKey;\n    bytes32 vehicle;\n    bool attested;\n  }\n\n  mapping(bytes32 => Unit) public units;\n\n  function attestDevice(bytes32 unit, bytes32 key, bytes32 veh) external {\n    units[unit] = Unit(key, veh, true);\n  }\n}",
        simAction: "Simulate Device Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading device key for OBD_44...", tone: "default" },
          { text: "Binding unit to vehicle FLT_882...", tone: "default" },
          { text: "Marking device attested...", tone: "default" },
          { text: "Writing unit to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Vehicle device attested on-chain.", tone: "success" },
        ],
      },
      {
        title: "Telemetry Notary",
        subtitle: "The Integrity Seal",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Integrity Seal",
          description:
            "Fixes the driving record. It anchors each telemetry batch by digest from an attested device, so any tampering with speed, braking, or mileage data breaks the hash and is instantly detectable by the insurer.",
          platformFunction: "Provenance & Integrity",
        },
        codeSnippet:
          "function anchorTelemetry(bytes32 unit, bytes32 digest) external {\n    require(units[unit].attested, \"Device not attested\");\n    telemetry[units[unit].vehicle].push(Record(digest, block.timestamp));\n    emit TelemetryAnchored(units[unit].vehicle, digest);\n}",
        simAction: "Simulate Telemetry Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming device OBD_44 attested...", tone: "default" },
          { text: "Hashing driving metrics batch...", tone: "default" },
          { text: "Anchoring digest to vehicle record...", tone: "default" },
          { text: "Sealing timestamp...", tone: "default" },
          { text: "[SUCCESS] Telemetry anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Compliance Gate",
        subtitle: "The Consent Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consent Check",
          description:
            "Respects data terms before sharing. It confirms the telemetry meets the agreed consent and data-handling attestations, so only compliant driving data is released into the insurer's pricing.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function checkSharing(bytes32 vehicle) public view returns (bool) {\n    return consent[vehicle] && dataHandlingOk[vehicle];\n}\n\nfunction clearForPricing(bytes32 vehicle) external {\n    require(checkSharing(vehicle), \"Sharing not compliant\");\n    cleared[vehicle] = true;\n}",
        simAction: "Simulate Compliance Gate",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading consent flag for FLT_882...", tone: "default" },
          { text: "Confirming data-handling attestation...", tone: "default" },
          { text: "Clearing telemetry for sharing...", tone: "default" },
          { text: "Recording compliance state...", tone: "default" },
          { text: "[SUCCESS] Telemetry cleared for pricing.", tone: "success" },
        ],
      },
      {
        title: "Pricing Engine",
        subtitle: "The Usage-Based Rater",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Usage-Based Rater",
          description:
            "Prices risk from trusted data. It ingests verified driving metrics from the oracle and adjusts the fleet's premium band, so safe driving is rewarded with rates the fleet can see the basis for.",
          platformFunction: "Usage-Based Pricing",
        },
        codeSnippet:
          "function priceRisk(bytes32 fleet, uint16 score) external onlyOracle {\n    require(cleared[fleet], \"Not cleared\");\n    uint256 band = _bandFromScore(score);\n    premiums[fleet] = band;\n    emit PriceAdjusted(fleet, score, band);\n}",
        simAction: "Simulate Premium Adjustment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified safe-driving score 0.91...", tone: "default" },
          { text: "Mapping score to premium band...", tone: "default" },
          { text: "Updating fleet premium...", tone: "default" },
          { text: "Emitting price adjustment...", tone: "default" },
          { text: "[SUCCESS] Premium set from trusted telemetry.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified telemetry pricing is a horizontal capability. Here is how different actors put the sharing layer to work.",
    sectors: [
      { icon: Truck, title: "Fleet Operators", description: "Share attested driving data to earn lower premiums for demonstrably safe driving, turning telemetry the fleet already collects into a direct, evidence-backed reduction in insurance cost.", assetTypes: ["Vehicle Telemetry", "Safety Scores", "Premium Records"] },
      { icon: Shield, title: "Insurers", description: "Price usage-based policies on telemetry they can cryptographically trust, extending fair rates to safe fleets without fear the underlying driving data was edited before it arrived.", assetTypes: ["Verified Metrics", "Risk Scores", "Pricing Records"] },
      { icon: Car, title: "Telematics Providers", description: "Deliver device-attested feeds into insurance pricing as a trusted intermediary, so the data their hardware produces carries provable integrity to every insurer consuming it.", assetTypes: ["Device Feeds", "Attestation Records", "Integrity Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging fleet telematics platforms or attesting telemetry directly from vehicle units, Cerulea routes both into one verified record.",
    tracks: [
      {
        title: "Track A: Telematics Platform Bridging",
        description:
          "For fleets on established telematics platforms. Telemetry and safety events are translated into on-chain verified records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Telematics Platform", sublabel: "Fleet Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Telemetry Verification", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Telemetry Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Vehicle Unit Attestation",
        description:
          "For vehicle devices signing directly. An on-board unit attests and anchors telemetry straight to the verification contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "On-Board Unit / Key", sublabel: "Vehicle Devices", icon: Fingerprint, accent: false },
          { label: "Telemetry Validators", sublabel: "Integrity Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Driving Record", icon: Car, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verified telemetry sharing system with device attestation, tamper-evident anchoring, compliance gating, and usage-based pricing from scratch requires specialised engineers and careful telematics integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Telemetry & Pricing Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects telematics and insurance integration benchmarks. Building device attestation, tamper-evident telemetry anchoring, compliance gating, and a usage-based pricing feed for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your telemetry and pricing rules into pre-audited WebAssembly binaries and provisions the verification and pricing layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "software-license-management-and-anti-piracy-on-chain",
    icon: Lock,
    eyebrow: "License Integrity Execution Engine",
    headline1: "Bind the license to the seat.",
    headline2: "End key sharing.",
    heroDescription:
      "Stand up a private license management chain with non-transferable soulbound tokens, device attestation, and reseller audit access. Soulbound Token, the DID and VC Ledger, and Device Attestation bind each license to a verified user and device, so a vendor gains real-time visibility into seat utilization and license sharing collapses.",
    heroCta: "Deploy License Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn transferable license keys into non-transferable, device-bound entitlements a vendor can see in real time.",
    mechanics: [
      { title: "Soulbound Licenses", description: "Make entitlements non-transferable. The Soulbound Token module binds each license to a verified user identity, so a key cannot be copied or resold to another party." },
      { title: "Device Attestation", description: "Tie use to a real machine. The Device Attestation module binds active seats to attested devices, so a single license cannot be run simultaneously across shared installations." },
      { title: "Verified User Identity", description: "Name every seat holder. The DID and VC Ledger binds each license to a credentialed user, so a vendor knows exactly who holds and uses each seat." },
      { title: "Real-Time Utilization", description: "See seats live. The vendor reads active, attested seats across all customers in real time, replacing periodic, self-reported usage with a direct on-chain view." },
      { title: "Reseller Audit Access", description: "Give channel partners a read window. Resellers query license and utilization state for their accounts directly, so entitlement disputes are resolved from the ledger." },
      { title: "Automatic Enforcement", description: "Refuse invalid seats. A license used on an unattested device or beyond its seat count is rejected at the protocol level, ending silent overuse and key sharing." },
    ],
    lifecycleTitle: "The License Lifecycle",
    lifecycleSubtitle:
      "Follow a license from issuance through device-bound activation to real-time utilization visibility for the vendor.",
    lifecycleSteps: [
      {
        label: "License Issuance",
        description:
          "The vendor issues a soulbound license to a verified user. The token is bound to their identity and cannot be transferred.",
        icon: Lock,
        logFilename: "cerulea_license_chain.log",
        logLines: [
          { text: "[SYS] Initializing Soulbound License Mint...", time: "09:02:14", tone: "default" },
          { text: "[CMD] issueLicense { user: \"did:cer:0x2a9\", sku: \"PRO_5\", seats: 1 }", time: "09:02:14", tone: "primary" },
          { text: "[AUTH] Binding non-transferable token to identity...", time: "09:02:15", tone: "secondary" },
          { text: "[OK] License LIC_5521 issued at block 16410233.", time: "09:02:15", tone: "success" },
        ],
      },
      {
        label: "Device Activation",
        description:
          "The user activates the license on a device. Device Attestation binds the seat to that attested machine.",
        icon: ShieldCheck,
        logFilename: "cerulea_license_chain.log",
        logLines: [
          { text: "[SYS] Activation request for LIC_5521...", time: "10:44:51", tone: "default" },
          { text: "[CMD] activate(license: \"LIC_5521\", device: \"WS_71\")", time: "10:44:51", tone: "primary" },
          { text: "[SYS] Attesting device and binding seat...", time: "10:44:52", tone: "default" },
          { text: "[OK] Seat bound to attested device WS_71.", time: "10:44:52", tone: "success" },
        ],
      },
      {
        label: "Sharing Attempt Blocked",
        description:
          "A copy of the key is used on a second, unattested device. The contract refuses the seat at the protocol level.",
        icon: Shield,
        logFilename: "cerulea_license_chain.log",
        logLines: [
          { text: "[SYS] Second activation attempt on LIC_5521...", time: "13:20:08", tone: "default" },
          { text: "[CMD] activate(license: \"LIC_5521\", device: \"WS_99\")", time: "13:20:08", tone: "primary" },
          { text: "[SYS] Seat limit reached, device unattested...", time: "13:20:09", tone: "error" },
          { text: "[OK] Activation refused. Sharing blocked.", time: "13:20:09", tone: "success" },
        ],
      },
      {
        label: "Utilization Read",
        description:
          "The vendor and authorized resellers read live seat utilization across customers directly from the chain.",
        icon: PieChart,
        logFilename: "cerulea_license_chain.log",
        logLines: [
          { text: "[SYS] Vendor querying utilization for SKU PRO_5...", time: "16:11:40", tone: "default" },
          { text: "[CMD] readUtilization(sku: \"PRO_5\")", time: "16:11:40", tone: "primary" },
          { text: "[SYS] Aggregating attested active seats...", time: "16:11:41", tone: "default" },
          { text: "[OK] Real-time seat utilization returned.", time: "16:11:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes license management into modular contracts. Each layer issues, binds, enforces, and exposes utilization without a license ever becoming a transferable, shareable key.",
    layers: [
      {
        title: "License Registry",
        subtitle: "The Soulbound Entitlement",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Soulbound Entitlement",
          description:
            "The foundational entitlement layer. It mints each license as a non-transferable token bound to a verified user, so an entitlement cannot be copied, resold, or moved to another identity.",
          platformFunction: "Identity & Entitlement",
        },
        codeSnippet:
          "contract LicenseRegistry {\n  struct License {\n    bytes32 user;\n    bytes32 sku;\n    uint16 seats;\n    bool soulbound;\n  }\n\n  mapping(bytes32 => License) public licenses;\n\n  function issue(bytes32 id, bytes32 user, bytes32 sku, uint16 seats) external onlyVendor {\n    licenses[id] = License(user, sku, seats, true);\n  }\n}",
        simAction: "Simulate License Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified user did:cer:0x2a9...", tone: "default" },
          { text: "Minting soulbound license token...", tone: "default" },
          { text: "Binding token to user identity...", tone: "default" },
          { text: "Writing license to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Non-transferable license issued.", tone: "success" },
        ],
      },
      {
        title: "Device Binder",
        subtitle: "The Seat Attestor",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Seat Attestor",
          description:
            "Ties each seat to a real machine. It binds an activated seat to an attested device, so a license cannot be run simultaneously across shared or cloned installations beyond its seat count.",
          platformFunction: "Device Attestation",
        },
        codeSnippet:
          "function activate(bytes32 license, bytes32 device) external {\n    License storage l = licenses[license];\n    require(activeSeats[license] < l.seats, \"Seat limit reached\");\n    require(attested[device], \"Device not attested\");\n    seatBinding[license][device] = true;\n    activeSeats[license] += 1;\n}",
        simAction: "Simulate Seat Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking active seats against limit...", tone: "default" },
          { text: "Attesting device WS_71...", tone: "default" },
          { text: "Binding seat to attested device...", tone: "default" },
          { text: "Incrementing active seat count...", tone: "default" },
          { text: "[SUCCESS] Seat bound to attested device.", tone: "success" },
        ],
      },
      {
        title: "Enforcement Guard",
        subtitle: "The Sharing Blocker",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sharing Blocker",
          description:
            "Refuses invalid use at the protocol level. It rejects any activation on an unattested device or beyond the seat count, so a shared or copied key simply cannot obtain a working seat.",
          platformFunction: "Access Enforcement",
        },
        codeSnippet:
          "function guard(bytes32 license, bytes32 device) external view returns (bool) {\n    return activeSeats[license] < licenses[license].seats && attested[device];\n}",
        simAction: "Simulate Enforcement Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Evaluating second activation on WS_99...", tone: "default" },
          { text: "Seat limit already reached...", tone: "default" },
          { text: "Device WS_99 not attested...", tone: "default" },
          { text: "Rejecting activation...", tone: "default" },
          { text: "[SUCCESS] Sharing attempt blocked.", tone: "success" },
        ],
      },
      {
        title: "Utilization Window",
        subtitle: "The Vendor View",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Vendor View",
          description:
            "Exposes live seat state. It aggregates attested active seats across customers for the vendor and authorized resellers, replacing periodic self-reported usage with a direct, real-time on-chain read.",
          platformFunction: "Reporting & Audit",
        },
        codeSnippet:
          "function readUtilization(bytes32 sku) external view returns (uint256 active, uint256 issued) {\n    return (activeBySku[sku], issuedBySku[sku]);\n}",
        simAction: "Simulate Utilization Read",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating active seats for PRO_5...", tone: "default" },
          { text: "Counting issued licenses...", tone: "default" },
          { text: "Composing utilization view...", tone: "default" },
          { text: "Returning real-time figures...", tone: "default" },
          { text: "[SUCCESS] Live seat utilization returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "On-chain license integrity is a horizontal capability. Here is how different software actors put the license chain to work.",
    sectors: [
      { icon: Building2, title: "Enterprise Software Vendors", description: "Replace shareable license keys with soulbound, device-bound entitlements and read seat utilization across every customer live, recovering revenue lost to key sharing.", assetTypes: ["Soulbound Licenses", "Seat Bindings", "Utilization Feeds"] },
      { icon: Boxes, title: "Resellers & Channel Partners", description: "Query license and utilization state for their accounts directly on-chain, settling entitlement questions from the ledger instead of the vendor's periodic reports.", assetTypes: ["Account Licenses", "Audit Access", "Entitlement Records"] },
      { icon: Users, title: "IT & Procurement Teams", description: "See exactly which seats their organization holds and uses, so license true-ups and renewals rest on verifiable utilization rather than estimated headcounts.", assetTypes: ["Seat Inventories", "Usage Records", "Renewal Evidence"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging enterprise licensing systems or attesting seats directly from user devices, Cerulea routes both into one license record.",
    tracks: [
      {
        title: "Track A: Licensing System Bridging",
        description:
          "For vendors on existing licensing platforms. Issuance and entitlement events are translated into on-chain soulbound licenses through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Licensing System", sublabel: "Vendor Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Entitlement Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "License Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Device Seat Attestation",
        description:
          "For seats activating from user machines. A client attests the device and binds the seat directly to the license contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "User Device / Client", sublabel: "Activation Endpoints", icon: Fingerprint, accent: false },
          { label: "License Validators", sublabel: "Seat Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Seat & Utilization Record", icon: Lock, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a license management chain with soulbound entitlements, device attestation, protocol-level enforcement, and reseller audit access from scratch requires specialised engineers and careful licensing integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Entitlement & Enforcement Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise licensing and device-management integration benchmarks. Building soulbound entitlements, device attestation, protocol-level enforcement, and reseller audit access for an average vendor takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your entitlement and enforcement rules into pre-audited WebAssembly binaries and provisions the license ledger and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "api-usage-metering-and-billing-across-multi-tenant-platforms",
    icon: Activity,
    eyebrow: "Multi-Tenant Billing Settlement Layer",
    headline1: "Meter every API call.",
    headline2: "Bill from proof, not trust.",
    heroDescription:
      "Deploy a verified API usage record per tenant that drives billing automatically, giving customers a transparent breakdown of their charges. The External Data Oracles, Invoices and Billing, and Audit Logs modules anchor verified usage as it is consumed, so customers see exactly what drove their bill and trust the calculation.",
    heroCta: "Deploy Usage Billing",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn disputed, platform-reported call volumes into a verified per-tenant record both sides can read.",
    mechanics: [
      { title: "Per-Tenant Usage Record", description: "Anchor consumption as it happens. Each tenant's API calls are recorded on-chain as they are consumed, so billing rests on a tamper-evident record rather than an internal counter only the platform can see." },
      { title: "Oracle-Verified Metering", description: "Verify the numbers. External Data Oracles confirm usage before it is billed, so the volumes a tenant is charged for are independently established, not just asserted." },
      { title: "Automatic Invoicing", description: "Drive billing from usage. The Invoices and Billing module generates each invoice directly from the verified record, so charges follow consumption without manual reconciliation." },
      { title: "Transparent Breakdown", description: "Show tenants their bill's basis. Customers read the exact metered usage behind every charge, ending disputes that come from opaque, unverifiable totals." },
      { title: "Immutable Audit Logs", description: "Keep a shared billing history. The Audit Logs module preserves usage and invoices together, giving platform and tenant one reconciled trail for any period." },
      { title: "Dispute-Free Settlement", description: "Resolve charges from evidence. Because usage is verified and visible, a contested invoice is settled against the shared record instead of conflicting internal reports." },
    ],
    lifecycleTitle: "The Usage Billing Lifecycle",
    lifecycleSubtitle:
      "Follow a tenant's API consumption from metered calls through verification to a transparent, automatically generated invoice.",
    lifecycleSteps: [
      {
        label: "Tenant Onboarding",
        description:
          "A tenant is provisioned with a usage record and pricing terms. The contract arms per-tenant metering for the billing period.",
        icon: Building2,
        logFilename: "cerulea_usage_billing.log",
        logLines: [
          { text: "[SYS] Initializing Tenant Usage Record...", time: "08:20:05", tone: "default" },
          { text: "[CMD] provisionTenant { id: \"TEN_308\", plan: \"USAGE_TIER_2\" }", time: "08:20:05", tone: "primary" },
          { text: "[AUTH] Binding pricing terms and arming meter...", time: "08:20:06", tone: "secondary" },
          { text: "[OK] Tenant TEN_308 provisioned at block 17510233.", time: "08:20:06", tone: "success" },
        ],
      },
      {
        label: "Usage Metering",
        description:
          "As the tenant makes API calls, usage is anchored on-chain in real time against their record.",
        icon: Activity,
        logFilename: "cerulea_usage_billing.log",
        logLines: [
          { text: "[SYS] Anchoring API usage for TEN_308...", time: "12:47:33", tone: "default" },
          { text: "[CMD] meter(tenant: \"TEN_308\", calls: 128400)", time: "12:47:33", tone: "primary" },
          { text: "[SYS] Appending verified calls to usage record...", time: "12:47:34", tone: "default" },
          { text: "[OK] 128,400 calls metered on-chain.", time: "12:47:34", tone: "success" },
        ],
      },
      {
        label: "Usage Verification",
        description:
          "At period close, External Data Oracles confirm the tenant's total usage before it drives billing.",
        icon: ShieldCheck,
        logFilename: "cerulea_usage_billing.log",
        logLines: [
          { text: "[SYS] Verifying period usage for TEN_308...", time: "23:59:12", tone: "default" },
          { text: "[CMD] verifyUsage(tenant: \"TEN_308\", period: 8)", time: "23:59:12", tone: "primary" },
          { text: "[AUTH] Oracle confirms metered totals...", time: "23:59:13", tone: "secondary" },
          { text: "[OK] Usage verified. Cleared for billing.", time: "23:59:13", tone: "success" },
        ],
      },
      {
        label: "Automatic Invoice",
        description:
          "The Invoices and Billing module generates the invoice from the verified record and logs it with its usage basis.",
        icon: FileCheck,
        logFilename: "cerulea_usage_billing.log",
        logLines: [
          { text: "[SYS] Generating invoice for TEN_308...", time: "00:01:44", tone: "default" },
          { text: "[CMD] invoice(tenant: \"TEN_308\", usage: 128400)", time: "00:01:44", tone: "primary" },
          { text: "[SYS] Writing invoice and usage basis to audit log...", time: "00:01:45", tone: "default" },
          { text: "[OK] Transparent invoice issued from proof.", time: "00:01:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes multi-tenant billing into modular contracts. Each layer provisions tenants, meters usage, verifies totals, and invoices without the platform controlling an unauditable counter.",
    layers: [
      {
        title: "Tenant Registry",
        subtitle: "The Metered Account",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Metered Account",
          description:
            "The foundational account layer. It provisions each tenant with a usage record and pricing terms, becoming the per-tenant reference that all metering and invoicing reads from and cannot silently alter.",
          platformFunction: "Identity & Provisioning",
        },
        codeSnippet:
          "contract TenantRegistry {\n  struct Tenant {\n    bytes32 plan;\n    uint256 usage;\n    bool active;\n  }\n\n  mapping(bytes32 => Tenant) public tenants;\n\n  function provision(bytes32 id, bytes32 plan) external onlyPlatform {\n    tenants[id] = Tenant(plan, 0, true);\n  }\n}",
        simAction: "Simulate Tenant Provisioning",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading plan USAGE_TIER_2 for TEN_308...", tone: "default" },
          { text: "Initializing usage counter...", tone: "default" },
          { text: "Binding pricing terms...", tone: "default" },
          { text: "Writing tenant to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Tenant provisioned and metered.", tone: "success" },
        ],
      },
      {
        title: "Usage Meter",
        subtitle: "The Verified Counter",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Counter",
          description:
            "Anchors consumption objectively. It records each tenant's API calls on-chain as they occur and verifies totals through oracles, so billed volume is independently established rather than a figure only the platform can see.",
          platformFunction: "Usage Metering",
        },
        codeSnippet:
          "function meter(bytes32 tenant, uint256 calls) external onlyOracle {\n    tenants[tenant].usage += calls;\n    emit Metered(tenant, calls, tenants[tenant].usage);\n}",
        simAction: "Simulate Usage Metering",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified call count from oracle...", tone: "default" },
          { text: "Appending 128,400 calls to record...", tone: "default" },
          { text: "Updating tenant usage total...", tone: "default" },
          { text: "Emitting metering event...", tone: "default" },
          { text: "[SUCCESS] Usage anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Billing Engine",
        subtitle: "The Automatic Invoicer",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Invoicer",
          description:
            "Turns verified usage into charges. It generates each invoice directly from the anchored record and the tenant's plan, so billing follows consumption without manual reconciliation or after-the-fact adjustment.",
          platformFunction: "Invoices & Billing",
        },
        codeSnippet:
          "function invoice(bytes32 tenant) external returns (uint256) {\n    Tenant storage t = tenants[tenant];\n    uint256 amount = _priceUsage(t.plan, t.usage);\n    invoices[tenant].push(Invoice(amount, t.usage, block.timestamp));\n    return amount;\n}",
        simAction: "Simulate Invoice Generation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verified usage for TEN_308...", tone: "default" },
          { text: "Applying plan pricing to usage...", tone: "default" },
          { text: "Composing invoice with usage basis...", tone: "default" },
          { text: "Recording invoice...", tone: "default" },
          { text: "[SUCCESS] Invoice generated from proof.", tone: "success" },
        ],
      },
      {
        title: "Audit Window",
        subtitle: "The Transparent Ledger",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transparent Ledger",
          description:
            "Gives both sides one record. It preserves usage and invoices together and exposes the breakdown to the tenant, so a contested charge is settled against a shared, verifiable history rather than conflicting reports.",
          platformFunction: "Audit & Reconciliation",
        },
        codeSnippet:
          "function readBreakdown(bytes32 tenant, uint256 period) external view returns (uint256 usage, uint256 amount) {\n    Invoice storage i = invoices[tenant][period];\n    return (i.usage, i.amount);\n}",
        simAction: "Simulate Breakdown Read",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Tenant requests charge breakdown...", tone: "default" },
          { text: "Loading period usage and invoice...", tone: "default" },
          { text: "Composing transparent breakdown...", tone: "default" },
          { text: "Returning usage and amount...", tone: "default" },
          { text: "[SUCCESS] Verifiable billing breakdown returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified usage billing is a horizontal capability. Here is how different platform actors put the settlement layer to work.",
    sectors: [
      { icon: Server, title: "SaaS & API Platforms", description: "Bill usage-based plans from a per-tenant verified record, ending disputes over call volumes and letting customers see exactly what drove every charge.", assetTypes: ["Usage Records", "Automatic Invoices", "Tenant Meters"] },
      { icon: Building2, title: "Enterprise Customers", description: "Read the verified usage behind each invoice and reconcile charges against a shared ledger, replacing blind trust in a vendor's internal counter with direct evidence.", assetTypes: ["Charge Breakdowns", "Verified Usage", "Reconciliation Records"] },
      { icon: Landmark, title: "Finance & Revenue Teams", description: "Recognize usage revenue from an immutable, auditable record and answer customer billing questions from one source, cutting reconciliation effort and revenue leakage.", assetTypes: ["Revenue Records", "Audit Trails", "Billing Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging existing API gateways and billing systems or metering usage directly at the edge, Cerulea routes both into one billing record.",
    tracks: [
      {
        title: "Track A: Gateway & Billing Bridging",
        description:
          "For platforms on established API gateways and billing systems. Usage events are translated into on-chain verified records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "API Gateway / Billing", sublabel: "Platform Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Usage Verification", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Billing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Edge Usage Metering",
        description:
          "For platforms metering at the edge. A signed collector reports verified per-tenant usage directly to the billing contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Edge Collector / Wallet", sublabel: "Metering Endpoints", icon: Fingerprint, accent: false },
          { label: "Billing Validators", sublabel: "Usage Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Usage & Invoice Record", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verified multi-tenant billing system with per-tenant metering, oracle verification, automatic invoicing, and a transparent audit window from scratch requires specialised engineers and careful billing integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Metering & Billing Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects API-gateway and billing integration benchmarks. Building per-tenant metering, oracle verification, automatic invoicing, and a customer-facing audit window for an average platform takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your metering and billing rules into pre-audited WebAssembly binaries and provisions the billing ledger and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "open-source-contributor-recognition-and-sponsorship-distribution",
    icon: Gift,
    eyebrow: "Contributor Sponsorship Layer",
    headline1: "Reward the contributors.",
    headline2: "Split sponsorship fairly.",
    heroDescription:
      "Run a sponsorship distribution system that splits funding among open source contributors based on verified contribution data, with portable contributor recognition. The Royalty Standard, Royalty Clearing, and DID and VC Ledger tie distribution to verified contributions and issue each contributor a credential they carry across projects.",
    heroCta: "Deploy Sponsorship Distribution",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a hard, contested split of sponsorship money into an automatic distribution driven by verified contribution.",
    mechanics: [
      { title: "Contribution-Weighted Split", description: "Distribute by real work. The Royalty Clearing module splits sponsorship funds among contributors in proportion to verified contribution data such as commits or issue resolutions." },
      { title: "Verified Contribution Data", description: "Base shares on evidence. Contribution signals are verified and anchored, so distribution reflects who actually maintained the project rather than who is most visible." },
      { title: "Portable Recognition", description: "Give contributors a credential they own. The DID and VC Ledger issues each contributor a portable recognition credential that travels with them across projects." },
      { title: "Royalty Standard Terms", description: "Encode the distribution policy. The Royalty Standard module attaches the project's agreed split policy on-chain, so every incoming sponsorship divides by the same rules." },
      { title: "Transparent Distribution", description: "Show every contributor the math. Each distribution and its contribution basis are visible, so maintainers see exactly why a split landed as it did." },
      { title: "Automatic Payout", description: "Pay on funding receipt. When sponsorship arrives, it fans out to contributors automatically, ending the manual coordination that stalls fair distribution." },
    ],
    lifecycleTitle: "The Sponsorship Lifecycle",
    lifecycleSubtitle:
      "Follow a sponsorship payment from receipt through contribution weighting to automatic, transparent distribution.",
    lifecycleSteps: [
      {
        label: "Project Setup",
        description:
          "A project registers its contributors and split policy. The Royalty Standard anchors how sponsorship will be divided.",
        icon: Workflow,
        logFilename: "cerulea_sponsorship.log",
        logLines: [
          { text: "[SYS] Initializing Sponsorship Distribution...", time: "09:14:20", tone: "default" },
          { text: "[CMD] setPolicy { project: \"OSS_LIBX\", basis: \"COMMITS_ISSUES\" }", time: "09:14:20", tone: "primary" },
          { text: "[AUTH] Anchoring split policy and contributors...", time: "09:14:21", tone: "secondary" },
          { text: "[OK] Policy set for OSS_LIBX at block 18610233.", time: "09:14:21", tone: "success" },
        ],
      },
      {
        label: "Contribution Verification",
        description:
          "Contribution data such as commits and resolved issues is verified and anchored to each contributor for the period.",
        icon: FileCheck,
        logFilename: "cerulea_sponsorship.log",
        logLines: [
          { text: "[SYS] Verifying contributions for OSS_LIBX...", time: "13:40:55", tone: "default" },
          { text: "[CMD] recordContributions(period: 4, contributors: 18)", time: "13:40:55", tone: "primary" },
          { text: "[SYS] Anchoring verified commits and issue fixes...", time: "13:40:56", tone: "default" },
          { text: "[OK] Contribution weights recorded.", time: "13:40:56", tone: "success" },
        ],
      },
      {
        label: "Sponsorship Received",
        description:
          "A sponsor sends funding. The payment lands at the clearing contract, ready to divide by the verified weights.",
        icon: Gift,
        logFilename: "cerulea_sponsorship.log",
        logLines: [
          { text: "[SYS] Sponsorship payment detected...", time: "16:05:11", tone: "default" },
          { text: "[CMD] receiveSponsorship(project: \"OSS_LIBX\", amount: 24000)", time: "16:05:11", tone: "primary" },
          { text: "[SYS] Matching funds to distribution policy...", time: "16:05:12", tone: "default" },
          { text: "[OK] 24,000 ready for weighted split.", time: "16:05:12", tone: "success" },
        ],
      },
      {
        label: "Weighted Distribution",
        description:
          "Funds fan out to contributors by their verified weights, and each contributor's portable recognition credential is updated.",
        icon: PieChart,
        logFilename: "cerulea_sponsorship.log",
        logLines: [
          { text: "[SYS] Distributing OSS_LIBX sponsorship...", time: "16:05:14", tone: "default" },
          { text: "[CMD] distribute(amount: 24000, contributors: 18)", time: "16:05:14", tone: "primary" },
          { text: "[AUTH] Updating portable recognition credentials...", time: "16:05:15", tone: "secondary" },
          { text: "[OK] Contributors paid by verified contribution.", time: "16:05:15", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes sponsorship distribution into modular contracts. Each layer sets policy, verifies contribution, splits funds, and recognizes contributors without a maintainer manually dividing the money.",
    layers: [
      {
        title: "Policy Registry",
        subtitle: "The Split Rule",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Split Rule",
          description:
            "The foundational policy layer. It anchors the project's contribution basis and split policy, so every incoming sponsorship divides by the same agreed rules rather than an ad hoc decision each time.",
          platformFunction: "Royalty Standard",
        },
        codeSnippet:
          "contract SponsorshipPolicy {\n  struct Policy {\n    bytes32 basis;\n    address[] contributors;\n    bool active;\n  }\n\n  mapping(bytes32 => Policy) public policies;\n\n  function setPolicy(bytes32 project, bytes32 basis, address[] calldata c) external onlyMaintainer {\n    policies[project] = Policy(basis, c, true);\n  }\n}",
        simAction: "Simulate Policy Setup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading split basis for OSS_LIBX...", tone: "default" },
          { text: "Registering contributor set...", tone: "default" },
          { text: "Anchoring distribution policy...", tone: "default" },
          { text: "Writing policy to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Sponsorship policy anchored.", tone: "success" },
        ],
      },
      {
        title: "Contribution Verifier",
        subtitle: "The Work Recorder",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Work Recorder",
          description:
            "Weights contributors by evidence. It verifies and anchors contribution data such as commits and resolved issues, so distribution reflects who actually maintained the project rather than who is loudest.",
          platformFunction: "Verified Contribution",
        },
        codeSnippet:
          "function recordContributions(bytes32 project, address[] calldata c, uint256[] calldata weight) external onlyOracle {\n    for (uint i = 0; i < c.length; i++) {\n        weights[project][c[i]] = weight[i];\n        totalWeight[project] += weight[i];\n    }\n    emit ContributionsRecorded(project);\n}",
        simAction: "Simulate Contribution Recording",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying commit and issue data...", tone: "default" },
          { text: "Assigning weights to 18 contributors...", tone: "default" },
          { text: "Accumulating total contribution weight...", tone: "default" },
          { text: "Anchoring verified weights...", tone: "default" },
          { text: "[SUCCESS] Contribution weights recorded.", tone: "success" },
        ],
      },
      {
        title: "Distribution Splitter",
        subtitle: "The Fair Divider",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fair Divider",
          description:
            "Fans out sponsorship on receipt. It divides each incoming payment across contributors by their verified weights and transfers every share, ending the manual coordination that stalls fair distribution.",
          platformFunction: "Royalty Clearing",
        },
        codeSnippet:
          "function distribute(bytes32 project) external payable {\n    Policy storage p = policies[project];\n    for (uint i = 0; i < p.contributors.length; i++) {\n        uint256 share = (msg.value * weights[project][p.contributors[i]]) / totalWeight[project];\n        payable(p.contributors[i]).transfer(share);\n    }\n    emit Distributed(project, msg.value);\n}",
        simAction: "Simulate Weighted Distribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving 24,000 sponsorship...", tone: "default" },
          { text: "Reading verified contributor weights...", tone: "default" },
          { text: "Computing proportional shares...", tone: "default" },
          { text: "Transferring to 18 contributors...", tone: "default" },
          { text: "[SUCCESS] Sponsorship split by contribution.", tone: "success" },
        ],
      },
      {
        title: "Recognition Ledger",
        subtitle: "The Portable Credential",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Portable Credential",
          description:
            "Recognizes contributors durably. It issues and updates each contributor a portable recognition credential from the DID ledger, so a track record of open source contribution travels with them across projects.",
          platformFunction: "Identity & Recognition",
        },
        codeSnippet:
          "function updateRecognition(bytes32 project, address contributor, uint256 weight) external {\n    recognition[contributor].push(Credential(project, weight, block.timestamp));\n    emit RecognitionUpdated(contributor, project);\n}",
        simAction: "Simulate Recognition Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading contributor weight for OSS_LIBX...", tone: "default" },
          { text: "Appending to recognition credential...", tone: "default" },
          { text: "Binding credential to contributor identity...", tone: "default" },
          { text: "Sealing timestamp...", tone: "default" },
          { text: "[SUCCESS] Portable recognition updated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Contribution-weighted sponsorship is a horizontal capability. Here is how different open source actors put it to work.",
    sectors: [
      { icon: Gift, title: "Open Source Projects", description: "Split sponsorship among maintainers by verified contribution automatically, so funding reaches the people doing the work without a maintainer manually dividing money each cycle.", assetTypes: ["Sponsorship Splits", "Contribution Weights", "Distribution Records"] },
      { icon: Users, title: "Individual Contributors", description: "Earn a fair share of sponsorship tied to real commits and issue fixes, and carry a portable recognition credential that proves contribution across every project.", assetTypes: ["Recognition Credentials", "Contribution Proofs", "Payout Records"] },
      { icon: Building2, title: "Corporate Sponsors & Foundations", description: "Fund a project once and see it distributed transparently by contribution, so sponsors know their money rewards maintainers rather than disappearing into opaque coordination.", assetTypes: ["Sponsorship Funds", "Distribution Trails", "Impact Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging code-hosting contribution data or routing sponsorship directly from sponsor wallets, Cerulea routes both into one distribution record.",
    tracks: [
      {
        title: "Track A: Contribution Data Bridging",
        description:
          "For projects on established code-hosting platforms. Verified commit and issue data is translated into on-chain contribution weights through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Code Hosting Platform", sublabel: "Contribution Source", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Contribution Verification", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sponsorship Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Sponsor Funding",
        description:
          "For sponsors funding on-chain. A wallet payment routes straight to the clearing contract and splits by verified contribution.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Sponsor Wallet", sublabel: "Funding Origin", icon: Fingerprint, accent: false },
          { label: "Distribution Validators", sublabel: "Split Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Contributor Payout Record", icon: Gift, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a sponsorship distribution system with contribution verification, weighted clearing, and portable recognition credentials from scratch requires specialised engineers and careful contribution-data integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Contribution & Split Rules",
      ruleCount: 32,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects contribution-data and payments integration benchmarks. Verifying contribution signals, encoding split policy, and wiring weighted clearing with portable recognition for an average project takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your contribution and split rules into pre-audited WebAssembly binaries and provisions the distribution and recognition layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "software-escrow-for-source-code-release-on-vendor-failure",
    icon: Shield,
    eyebrow: "Source Code Escrow Layer",
    headline1: "Escrow the source.",
    headline2: "Release only on trigger.",
    heroDescription:
      "Stand up a source code escrow arrangement that automatically releases verified code to the customer if predefined vendor failure conditions are met. The Escrow and Conditional Settlement, Provenance Notary, and Compliance Attestations modules anchor the deposit and continuously check verified data sources, triggering release the moment conditions are confirmed.",
    heroCta: "Deploy Code Escrow",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manual, third-party escrow release into an automatic one triggered by verified vendor-failure conditions.",
    mechanics: [
      { title: "Verified Code Deposit", description: "Anchor what is escrowed. The Provenance Notary anchors the deposited source code by digest, so the customer receives exactly the verified artifact on release, not a stale or altered copy." },
      { title: "Conditional Release", description: "Release only on trigger. The Escrow and Conditional Settlement module holds the code until predefined vendor-failure conditions are confirmed, removing manual judgment from the release." },
      { title: "Continuous Condition Check", description: "Watch the triggers automatically. The contract continuously checks verified data sources for the agreed conditions, so a genuine vendor failure releases code without a customer chasing a third party." },
      { title: "Compliance Attestations", description: "Confirm the conditions are met. The Compliance Attestations module validates that a reported condition satisfies the agreed release criteria before any code is delivered." },
      { title: "Tamper-Evident Custody", description: "Prove the deposit never changed. The escrowed code's digest is fixed at deposit, so both parties can verify the released artifact matches what was placed in escrow." },
      { title: "Auditable Trigger Trail", description: "Record why release happened. Every condition check and the final release are logged, so the customer, vendor, and their counsel see the exact basis for delivery." },
    ],
    lifecycleTitle: "The Escrow Lifecycle",
    lifecycleSubtitle:
      "Follow escrowed source code from deposit through continuous condition monitoring to automatic release on a verified trigger.",
    lifecycleSteps: [
      {
        label: "Code Deposit",
        description:
          "The vendor deposits the source code. The Provenance Notary anchors its digest and the escrow records the agreed release conditions.",
        icon: Server,
        logFilename: "cerulea_code_escrow.log",
        logLines: [
          { text: "[SYS] Initializing Source Code Escrow...", time: "08:30:19", tone: "default" },
          { text: "[CMD] depositCode { vendor: \"VND_44\", digest: \"0x7f2\", cond: \"INSOLVENCY\" }", time: "08:30:19", tone: "primary" },
          { text: "[AUTH] Anchoring code digest and release terms...", time: "08:30:20", tone: "secondary" },
          { text: "[OK] Escrow ESC_331 armed at block 19710233.", time: "08:30:20", tone: "success" },
        ],
      },
      {
        label: "Condition Monitoring",
        description:
          "The contract continuously checks verified data sources for the agreed vendor-failure conditions during the term.",
        icon: Search,
        logFilename: "cerulea_code_escrow.log",
        logLines: [
          { text: "[SYS] Polling condition feeds for ESC_331...", time: "12:00:00", tone: "default" },
          { text: "[CMD] checkConditions(escrow: \"ESC_331\")", time: "12:00:00", tone: "primary" },
          { text: "[SYS] No release condition met this cycle...", time: "12:00:01", tone: "muted" },
          { text: "[OK] Escrow remains sealed. Monitoring continues.", time: "12:00:01", tone: "success" },
        ],
      },
      {
        label: "Trigger Confirmation",
        description:
          "A vendor-failure condition is reported. Compliance Attestations validate it satisfies the agreed release criteria.",
        icon: ShieldCheck,
        logFilename: "cerulea_code_escrow.log",
        logLines: [
          { text: "[SYS] Insolvency signal reported for VND_44...", time: "09:15:42", tone: "default" },
          { text: "[CMD] confirmTrigger(escrow: \"ESC_331\", cond: \"INSOLVENCY\")", time: "09:15:42", tone: "primary" },
          { text: "[AUTH] Attestation confirms condition satisfied...", time: "09:15:43", tone: "secondary" },
          { text: "[OK] Release condition met. Release authorized.", time: "09:15:43", tone: "success" },
        ],
      },
      {
        label: "Automatic Release",
        description:
          "The escrow releases the verified code to the customer and logs the trigger and delivery on the auditable trail.",
        icon: Shield,
        logFilename: "cerulea_code_escrow.log",
        logLines: [
          { text: "[SYS] Releasing escrowed code to customer...", time: "09:15:55", tone: "default" },
          { text: "[CMD] release(escrow: \"ESC_331\", to: \"CUST_0x88\")", time: "09:15:55", tone: "primary" },
          { text: "[SYS] Verifying digest matches deposit...", time: "09:15:56", tone: "default" },
          { text: "[OK] Verified code delivered automatically.", time: "09:15:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes source code escrow into modular contracts. Each layer anchors the deposit, monitors conditions, attests triggers, and releases without a third party manually judging the outcome.",
    layers: [
      {
        title: "Deposit Notary",
        subtitle: "The Code Anchor",
        icon: Server,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Code Anchor",
          description:
            "The foundational custody layer. It anchors the deposited source code by digest and fixes the release conditions, so the customer can later verify the released artifact is exactly what was placed in escrow.",
          platformFunction: "Provenance & Custody",
        },
        codeSnippet:
          "contract CodeEscrow {\n  struct Escrow {\n    address vendor;\n    bytes32 codeDigest;\n    bytes32 condition;\n    bool released;\n  }\n\n  mapping(bytes32 => Escrow) public escrows;\n\n  function deposit(bytes32 id, bytes32 digest, bytes32 cond) external {\n    escrows[id] = Escrow(msg.sender, digest, cond, false);\n  }\n}",
        simAction: "Simulate Code Deposit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing deposited source code...", tone: "default" },
          { text: "Recording release condition INSOLVENCY...", tone: "default" },
          { text: "Binding deposit to vendor...", tone: "default" },
          { text: "Writing escrow to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Source code escrow armed.", tone: "success" },
        ],
      },
      {
        title: "Condition Monitor",
        subtitle: "The Trigger Watcher",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trigger Watcher",
          description:
            "Removes the customer's chase. It continuously checks verified data sources for the agreed vendor-failure conditions, so a genuine failure is detected by the contract rather than argued after the fact.",
          platformFunction: "Conditional Monitoring",
        },
        codeSnippet:
          "function checkConditions(bytes32 id) external view returns (bool) {\n    Escrow storage e = escrows[id];\n    return conditionFeed.isMet(e.condition, e.vendor);\n}",
        simAction: "Simulate Condition Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Polling verified condition feeds...", tone: "default" },
          { text: "Evaluating vendor status for VND_44...", tone: "default" },
          { text: "Comparing against release condition...", tone: "default" },
          { text: "Returning monitoring result...", tone: "default" },
          { text: "[SUCCESS] Conditions evaluated on-chain.", tone: "success" },
        ],
      },
      {
        title: "Attestation Gate",
        subtitle: "The Trigger Validator",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trigger Validator",
          description:
            "Confirms a reported condition qualifies. It validates through Compliance Attestations that a signal satisfies the agreed release criteria, so code is never released on an ambiguous or premature trigger.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function confirmTrigger(bytes32 id, bytes32 condition) external onlyAttestor {\n    require(escrows[id].condition == condition, \"Condition mismatch\");\n    triggered[id] = true;\n    emit TriggerConfirmed(id, condition);\n}",
        simAction: "Simulate Trigger Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving insolvency signal for VND_44...", tone: "default" },
          { text: "Matching against agreed condition...", tone: "default" },
          { text: "Validating attestation...", tone: "default" },
          { text: "Marking escrow triggered...", tone: "default" },
          { text: "[SUCCESS] Release condition confirmed.", tone: "success" },
        ],
      },
      {
        title: "Release Engine",
        subtitle: "The Verified Delivery",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Delivery",
          description:
            "Delivers on trigger, verifiably. It releases the escrowed code to the customer only after a confirmed trigger and checks the digest matches the deposit, so delivery is automatic and provably intact.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function release(bytes32 id, address customer) external {\n    require(triggered[id] && !escrows[id].released, \"Not releasable\");\n    escrows[id].released = true;\n    _grantAccess(customer, escrows[id].codeDigest);\n    emit Released(id, customer, escrows[id].codeDigest);\n}",
        simAction: "Simulate Code Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming escrow triggered...", tone: "default" },
          { text: "Granting customer access to code...", tone: "default" },
          { text: "Verifying digest matches deposit...", tone: "default" },
          { text: "Logging release on trail...", tone: "default" },
          { text: "[SUCCESS] Verified code released automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automatic source code escrow is a horizontal capability. Here is how different actors put the escrow layer to work.",
    sectors: [
      { icon: Building2, title: "Enterprise Software Buyers", description: "Protect critical software dependencies from smaller vendors with escrow that releases verified source automatically on a genuine failure, without waiting on a third party to adjudicate.", assetTypes: ["Code Deposits", "Release Conditions", "Delivery Records"] },
      { icon: Server, title: "Software Vendors", description: "Offer escrow to win enterprise deals while proving the deposited code is current and intact, so the arrangement builds customer confidence rather than sitting as untested paperwork.", assetTypes: ["Escrowed Builds", "Deposit Attestations", "Custody Proofs"] },
      { icon: Gavel, title: "Escrow Agents & Counsel", description: "Administer escrow on an auditable trigger trail, so the basis for any release is documented on-chain and disputes are settled from evidence rather than manual verification.", assetTypes: ["Trigger Trails", "Release Evidence", "Audit Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging code repositories and escrow-agent systems or routing condition signals from verified data sources, Cerulea routes both into one escrow record.",
    tracks: [
      {
        title: "Track A: Repository & Agent Bridging",
        description:
          "For vendors and agents on established systems. Code deposits and condition feeds are translated into on-chain escrow records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Repository / Escrow Agent", sublabel: "Vendor & Agent Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Digest Anchoring & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Condition Feed Execution",
        description:
          "For release conditions from verified data sources. A signed feed reports trigger conditions directly to the escrow contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Condition Data Source", sublabel: "Verified Feeds", icon: Fingerprint, accent: false },
          { label: "Escrow Validators", sublabel: "Trigger Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Escrow & Release Record", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a source code escrow system with verified deposits, continuous condition monitoring, attestation gating, and automatic release from scratch requires specialised engineers and careful data-source integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Condition & Release Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects escrow-administration and data-source integration benchmarks. Building verified code deposits, continuous condition monitoring, attestation gating, and automatic release for an average arrangement takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your condition and release rules into pre-audited WebAssembly binaries and provisions the escrow ledger and monitoring layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "freelance-developer-marketplace-with-milestone-based-escrow",
    icon: Handshake,
    eyebrow: "Freelance Escrow Settlement Layer",
    headline1: "Fund the milestone.",
    headline2: "Release on acceptance.",
    heroDescription:
      "Run a freelance marketplace where project payments are held in escrow and released per milestone as verified deliverables are accepted by the client. Cerulea Studio assembles it from Escrow and Conditional Settlement, the DID and VC Ledger, and Provenance Notary so both client and developer are protected from the first milestone to the last.",
    heroCta: "Deploy Freelance Escrow",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn two-sided upfront-payment risk into milestone escrow that protects both client and developer.",
    mechanics: [
      { title: "Milestone Escrow", description: "Hold funds from the start. The Escrow and Conditional Settlement module locks project payment up front and releases it per milestone, so a developer knows funds exist and a client pays only for accepted work." },
      { title: "Deliverable Notary", description: "Anchor each submission. The Provenance Notary anchors each deliverable by digest at submission, so acceptance and any dispute reference the exact artifact that was delivered." },
      { title: "Client Acceptance Release", description: "Release on confirmation. Each milestone tranche is released when the client accepts the verified deliverable, tying payment directly to approved work." },
      { title: "Verified Identities", description: "Know both parties. The DID and VC Ledger binds client and developer to verified identities, so reputation and accountability attach to real accounts on both sides." },
      { title: "Dispute Evidence", description: "Settle from the record. Because every deliverable and acceptance is anchored, a contested milestone is resolved against signed evidence rather than conflicting claims." },
      { title: "Portable Track Record", description: "Build reputation across projects. Completed milestones accrue to each developer's verifiable history, so a strong track record follows them to future clients." },
    ],
    lifecycleTitle: "The Project Lifecycle",
    lifecycleSubtitle:
      "Follow a freelance project from funded escrow through deliverable submission and client acceptance to milestone release.",
    lifecycleSteps: [
      {
        label: "Project Funding",
        description:
          "The client funds the project into escrow against its milestone schedule. Both parties are bound to verified identities.",
        icon: Wallet,
        logFilename: "cerulea_freelance_escrow.log",
        logLines: [
          { text: "[SYS] Initializing Freelance Project Escrow...", time: "09:05:11", tone: "default" },
          { text: "[CMD] fundProject { id: \"PRJ_620\", milestones: 4, total: 12000 }", time: "09:05:11", tone: "primary" },
          { text: "[AUTH] Locking client funds and binding identities...", time: "09:05:12", tone: "secondary" },
          { text: "[OK] Project PRJ_620 funded at block 20810233.", time: "09:05:12", tone: "success" },
        ],
      },
      {
        label: "Deliverable Submission",
        description:
          "The developer submits a milestone deliverable. The Provenance Notary anchors it by digest for verification.",
        icon: Server,
        logFilename: "cerulea_freelance_escrow.log",
        logLines: [
          { text: "[SYS] Anchoring milestone deliverable for PRJ_620...", time: "14:22:40", tone: "default" },
          { text: "[CMD] submitDeliverable(milestone: 2, digest: \"0x5c8\")", time: "14:22:40", tone: "primary" },
          { text: "[SYS] Sealing deliverable to developer identity...", time: "14:22:41", tone: "default" },
          { text: "[OK] Deliverable anchored for client review.", time: "14:22:41", tone: "success" },
        ],
      },
      {
        label: "Client Acceptance",
        description:
          "The client reviews and accepts the verified deliverable, confirming the milestone is complete.",
        icon: Handshake,
        logFilename: "cerulea_freelance_escrow.log",
        logLines: [
          { text: "[SYS] Client reviewing milestone 2 of PRJ_620...", time: "16:48:03", tone: "default" },
          { text: "[CMD] acceptMilestone(project: \"PRJ_620\", milestone: 2)", time: "16:48:03", tone: "primary" },
          { text: "[AUTH] Recording acceptance against anchored digest...", time: "16:48:04", tone: "secondary" },
          { text: "[OK] Milestone accepted by client.", time: "16:48:04", tone: "success" },
        ],
      },
      {
        label: "Tranche Release",
        description:
          "Escrow releases the milestone tranche to the developer and updates their portable track record.",
        icon: Coins,
        logFilename: "cerulea_freelance_escrow.log",
        logLines: [
          { text: "[SYS] Releasing tranche to developer DEV_0x55...", time: "16:48:16", tone: "default" },
          { text: "[CMD] releaseMilestone(project: \"PRJ_620\", milestone: 2)", time: "16:48:16", tone: "primary" },
          { text: "[SYS] 3,000 disbursed. Updating track record...", time: "16:48:17", tone: "default" },
          { text: "[OK] Developer paid for accepted milestone.", time: "16:48:17", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the freelance marketplace into modular contracts. Each layer funds escrow, anchors deliverables, records acceptance, and releases without either side risking the other defaulting.",
    layers: [
      {
        title: "Project Escrow",
        subtitle: "The Locked Funds",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Locked Funds",
          description:
            "The foundational settlement layer. It locks the client's project payment against a milestone schedule up front, so the developer knows funds exist and the client pays only as accepted work is delivered.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract FreelanceEscrow {\n  struct Project {\n    address client;\n    address developer;\n    uint256[] tranches;\n    uint8 released;\n  }\n\n  mapping(bytes32 => Project) public projects;\n\n  function fund(bytes32 id, address dev, uint256[] calldata tranches) external payable {\n    projects[id] = Project(msg.sender, dev, tranches, 0);\n  }\n}",
        simAction: "Simulate Project Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading milestone schedule for PRJ_620...", tone: "default" },
          { text: "Locking 12,000 client funds in escrow...", tone: "default" },
          { text: "Binding client and developer identities...", tone: "default" },
          { text: "Writing project to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Project funded, milestones armed.", tone: "success" },
        ],
      },
      {
        title: "Deliverable Notary",
        subtitle: "The Submission Seal",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Submission Seal",
          description:
            "Fixes each deliverable. It anchors every milestone submission by digest and binds it to the developer, so acceptance and any dispute reference the exact artifact that was delivered, not a later revision.",
          platformFunction: "Provenance & Identity",
        },
        codeSnippet:
          "function submitDeliverable(bytes32 project, uint8 milestone, bytes32 digest) external {\n    require(projects[project].developer == msg.sender, \"Not developer\");\n    deliverables[project][milestone] = Deliverable(digest, block.timestamp);\n    emit DeliverableSubmitted(project, milestone, digest);\n}",
        simAction: "Simulate Deliverable Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming developer for PRJ_620...", tone: "default" },
          { text: "Hashing milestone deliverable...", tone: "default" },
          { text: "Sealing digest to developer identity...", tone: "default" },
          { text: "Recording submission timestamp...", tone: "default" },
          { text: "[SUCCESS] Deliverable anchored for review.", tone: "success" },
        ],
      },
      {
        title: "Acceptance Recorder",
        subtitle: "The Client Confirmation",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Client Confirmation",
          description:
            "Ties payment to approval. It records the client's acceptance against the anchored deliverable, so a milestone tranche releases only for work the client has confirmed, protecting both sides from premature payout.",
          platformFunction: "Acceptance & Workflow",
        },
        codeSnippet:
          "function acceptMilestone(bytes32 project, uint8 milestone) external {\n    require(projects[project].client == msg.sender, \"Not client\");\n    require(deliverables[project][milestone].digest != 0, \"Nothing to accept\");\n    accepted[project][milestone] = true;\n    emit MilestoneAccepted(project, milestone);\n}",
        simAction: "Simulate Milestone Acceptance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming client for PRJ_620...", tone: "default" },
          { text: "Loading anchored deliverable...", tone: "default" },
          { text: "Recording client acceptance...", tone: "default" },
          { text: "Marking milestone complete...", tone: "default" },
          { text: "[SUCCESS] Milestone accepted against evidence.", tone: "success" },
        ],
      },
      {
        title: "Release Engine",
        subtitle: "The Reputation Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reputation Payout",
          description:
            "Pays on acceptance and builds standing. It releases the milestone tranche to the developer once the client accepts and updates their portable track record, so completed work both pays and accrues reputation.",
          platformFunction: "Settlement & Reputation",
        },
        codeSnippet:
          "function releaseMilestone(bytes32 project, uint8 milestone) external {\n    require(accepted[project][milestone], \"Not accepted\");\n    Project storage p = projects[project];\n    payable(p.developer).transfer(p.tranches[milestone]);\n    trackRecord[p.developer] += 1;\n    emit MilestoneReleased(project, milestone);\n}",
        simAction: "Simulate Tranche Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming milestone accepted...", tone: "default" },
          { text: "Transferring 3,000 to developer...", tone: "default" },
          { text: "Updating portable track record...", tone: "default" },
          { text: "Emitting release event...", tone: "default" },
          { text: "[SUCCESS] Developer paid, reputation updated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Milestone escrow is a horizontal capability. Here is how different marketplace actors put the settlement layer to work.",
    sectors: [
      { icon: Handshake, title: "Freelance Marketplaces", description: "Offer milestone escrow that protects both sides, so clients commit funds without fear of non-delivery and developers work knowing accepted milestones always pay.", assetTypes: ["Project Escrows", "Milestone Tranches", "Acceptance Records"] },
      { icon: Users, title: "Independent Developers", description: "Take on projects with guaranteed, milestone-linked payment and build a portable track record of completed work that follows them to future clients.", assetTypes: ["Deliverable Proofs", "Track Records", "Payout History"] },
      { icon: Building2, title: "Client Businesses", description: "Engage freelance talent while paying only for accepted deliverables, resolving any dispute against anchored evidence rather than conflicting after-the-fact claims.", assetTypes: ["Milestone Schedules", "Acceptance Trails", "Dispute Evidence"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging existing marketplace platforms or letting clients and developers transact directly from wallets, Cerulea routes both into one project record.",
    tracks: [
      {
        title: "Track A: Marketplace Platform Bridging",
        description:
          "For platforms on established marketplace systems. Project and acceptance events are translated into on-chain escrow records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Marketplace Platform", sublabel: "Platform Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Deliverable Anchoring", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Wallet Settlement",
        description:
          "For clients and developers transacting directly. Wallet-signed funding, submission, and acceptance route straight to the escrow contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Client & Developer Wallets", sublabel: "Party Endpoints", icon: Fingerprint, accent: false },
          { label: "Escrow Validators", sublabel: "Release Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Milestone & Payout Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a freelance marketplace with milestone escrow, deliverable anchoring, client acceptance, and portable track records from scratch requires specialised engineers and careful marketplace integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Escrow & Acceptance Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects marketplace and payments integration benchmarks. Building milestone escrow, deliverable anchoring, client acceptance workflow, and a portable track record for an average marketplace takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your escrow and acceptance rules into pre-audited WebAssembly binaries and provisions the escrow ledger and reputation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const enterpriseItSaasItems: ExtraCaseItem[] = [
  {
    label: "Research data integrity and IP ownership across collaborative R&D",
    href: "/solutions/use-case/research-data-integrity-and-ip-ownership-across-collaborative-r-d",
    description: "Neutral, attributed contribution ledger for joint R&D.",
    icon: FlaskConical,
    category: "ENTERPRISE",
    tags: ["R&D", "IP Ownership"],
    industry: INDUSTRY,
  },
  {
    label: "Clinical research organization (CRO) milestone-based payment",
    href: "/solutions/use-case/clinical-research-organization-cro-milestone-based-payment",
    description: "Automatic CRO payment on verified trial milestones.",
    icon: HeartPulse,
    category: "ENTERPRISE",
    tags: ["Clinical", "Escrow"],
    industry: INDUSTRY,
  },
  {
    label: "Cross-company joint patent filing and royalty split agreements",
    href: "/solutions/use-case/cross-company-joint-patent-filing-and-royalty-split-agreements",
    description: "Automatic royalty splits for jointly owned patents.",
    icon: Copyright,
    category: "ENTERPRISE",
    tags: ["Patents", "Royalties"],
    industry: INDUSTRY,
  },
  {
    label: "AI model provenance and training data lineage",
    href: "/solutions/use-case/ai-model-provenance-and-training-data-lineage",
    description: "Verifiable proof of training data and model version.",
    icon: Cpu,
    category: "ENTERPRISE",
    tags: ["AI", "Provenance"],
    industry: INDUSTRY,
  },
  {
    label: "Synthetic data generation licensing and usage tracking",
    href: "/solutions/use-case/synthetic-data-generation-licensing-and-usage-tracking",
    description: "Metered synthetic data licensing with automatic royalties.",
    icon: Database,
    category: "DAPPS",
    tags: ["Synthetic Data", "Licensing"],
    industry: INDUSTRY,
  },
  {
    label: "AI inference cost-sharing across federated model consortiums",
    href: "/solutions/use-case/ai-inference-cost-sharing-across-federated-model-consortiums",
    description: "Proportional inference cost sharing from verified usage.",
    icon: Network,
    category: "ENTERPRISE",
    tags: ["Federated AI", "Cost Sharing"],
    industry: INDUSTRY,
  },
  {
    label: "AI model bias audit certification for regulated industries",
    href: "/solutions/use-case/ai-model-bias-audit-certification-for-regulated-industries",
    description: "Version-locked bias certificates for regulated AI models.",
    icon: Scale,
    category: "GOVERNMENT",
    tags: ["AI Audit", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Crowdsourced data labeling marketplace with quality verification",
    href: "/solutions/use-case/crowdsourced-data-labeling-marketplace-with-quality-verification",
    description: "Accuracy-based labeling pay with portable reputation.",
    icon: Users,
    category: "DAPPS",
    tags: ["Data Labeling", "Marketplace"],
    industry: INDUSTRY,
  },
  {
    label: "IoT device identity, firmware version, and access credential management",
    href: "/solutions/use-case/iot-device-identity-firmware-version-and-access-credential-management",
    description: "Attested device identity with tamper-proof access audit.",
    icon: Radio,
    category: "ENTERPRISE",
    tags: ["IoT", "Access Control"],
    industry: INDUSTRY,
  },
  {
    label: "Smart city sensor data marketplace for urban planning",
    href: "/solutions/use-case/smart-city-sensor-data-marketplace-for-urban-planning",
    description: "Licensed city sensor data with automatic owner payment.",
    icon: Building2,
    category: "GOVERNMENT",
    tags: ["Smart City", "Data Marketplace"],
    industry: INDUSTRY,
  },
  {
    label: "Connected vehicle fleet telemetry sharing for insurance pricing",
    href: "/solutions/use-case/connected-vehicle-fleet-telemetry-sharing-for-insurance-pricing",
    description: "Attested fleet telemetry feeding usage-based insurance.",
    icon: Car,
    category: "ENTERPRISE",
    tags: ["Telemetry", "Insurance"],
    industry: INDUSTRY,
  },
  {
    label: "Software license management and anti-piracy on-chain",
    href: "/solutions/use-case/software-license-management-and-anti-piracy-on-chain",
    description: "Soulbound, device-bound licenses with live utilization.",
    icon: Lock,
    category: "ENTERPRISE",
    tags: ["Licensing", "Anti-Piracy"],
    industry: INDUSTRY,
  },
  {
    label: "API usage metering and billing across multi-tenant platforms",
    href: "/solutions/use-case/api-usage-metering-and-billing-across-multi-tenant-platforms",
    description: "Verified per-tenant usage driving transparent billing.",
    icon: Activity,
    category: "SME",
    tags: ["API Billing", "SaaS"],
    industry: INDUSTRY,
  },
  {
    label: "Open source contributor recognition and sponsorship distribution",
    href: "/solutions/use-case/open-source-contributor-recognition-and-sponsorship-distribution",
    description: "Contribution-weighted sponsorship with portable recognition.",
    icon: Gift,
    category: "DAPPS",
    tags: ["Open Source", "Sponsorship"],
    industry: INDUSTRY,
  },
  {
    label: "Software escrow for source code release on vendor failure",
    href: "/solutions/use-case/software-escrow-for-source-code-release-on-vendor-failure",
    description: "Automatic source code release on verified vendor failure.",
    icon: Shield,
    category: "ENTERPRISE",
    tags: ["Code Escrow", "Continuity"],
    industry: INDUSTRY,
  },
  {
    label: "Freelance developer marketplace with milestone-based escrow",
    href: "/solutions/use-case/freelance-developer-marketplace-with-milestone-based-escrow",
    description: "Milestone escrow releasing on verified client acceptance.",
    icon: Handshake,
    category: "SME",
    tags: ["Freelance", "Escrow"],
    industry: INDUSTRY,
  },
]
