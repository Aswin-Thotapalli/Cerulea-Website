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

const INDUSTRY = "Legal & Compliance"

export const legalComplianceCases: CaseEntry[] = [
  {
    slug: "court-document-filing-and-case-record-integrity",
    icon: Gavel,
    eyebrow: "Judiciary Evidence Chain",
    headline1: "Seal every filing.",
    headline2: "Make tampering visible.",
    heroDescription:
      "Stand up a private judiciary evidence chain where every filing and case event is anchored by its cryptographic digest. Judicial credentials are attested on-chain and access is role-based, so counsel and litigants share one tamper-proof record instead of trusting a siloed registry database.",
    heroCta: "Deploy Judiciary Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a siloed, tamper-prone court database into a shared, cryptographically sealed record of every filing.",
    mechanics: [
      { title: "Document Anchoring", description: "Every petition, order, and exhibit is hashed at the moment of filing and anchored to the Evidence Chain. The original document stays in the registry store, but any later edit breaks its digest and is instantly detectable." },
      { title: "Judicial Credential Attestation", description: "Judges, clerks, and advocates hold attested on-chain credentials. Only a verified judicial identity can seal an order, so the authorship of every case event is provable rather than asserted." },
      { title: "Role-Based Access", description: "The Role-Based Access Control module scopes visibility by party, so opposing counsel, the bench, and the public each read exactly the record they are entitled to see and nothing more." },
      { title: "Immutable Docket", description: "Filings land in a strictly ordered docket. Sequence and timestamps are fixed by the ledger, so a backdated or inserted document cannot slip into the case history unnoticed." },
      { title: "Independent Verification", description: "A practitioner confirms a filing's integrity against the chain directly, without requesting a certified copy from the registry, collapsing days of clerical back-and-forth into a single query." },
      { title: "Full Event Audit", description: "The Provenance Notary and Audit Logs modules record who anchored what and when, giving appellate benches and oversight bodies a complete, replayable trail of the case." },
    ],
    lifecycleTitle: "The Case Record Lifecycle",
    lifecycleSubtitle:
      "Follow a single filing from submission by counsel to sealed order and independent verification by an opposing party.",
    lifecycleSteps: [
      {
        label: "Filing Submission",
        description:
          "An advocate submits a petition through the e-filing portal. The contract hashes the document and anchors it to the case, fixing its content and timestamp as the origin of the record.",
        icon: ScrollText,
        logFilename: "cerulea_judiciary.log",
        logLines: [
          { text: "[SYS] Initializing Case Filing Manifest...", time: "10:04:11", tone: "default" },
          { text: "[CMD] anchorFiling { case: \"WP_2291_2026\", type: \"PETITION\", sha256: \"0x9af3\" }", time: "10:04:11", tone: "primary" },
          { text: "[AUTH] Verifying advocate bar credential BAR_KA_4471...", time: "10:04:12", tone: "secondary" },
          { text: "[OK] Filing FIL_88421 anchored at block 5510233.", time: "10:04:12", tone: "success" },
        ],
      },
      {
        label: "Registry Acceptance",
        description:
          "The registry clerk validates format and fees. Acceptance is co-signed on-chain, moving the filing into the official docket without altering its anchored digest.",
        icon: FileCheck,
        logFilename: "cerulea_judiciary.log",
        logLines: [
          { text: "[SYS] Filing pending clerk acceptance in Registry_0x22...", time: "11:19:40", tone: "default" },
          { text: "[CMD] acceptFiling(FIL_88421, docketNo: \"WP_2291_2026\")", time: "11:19:44", tone: "primary" },
          { text: "[SYS] Clerk co-signature recorded. Digest unchanged.", time: "11:19:44", tone: "default" },
          { text: "[OK] Filing entered into immutable docket sequence.", time: "11:19:45", tone: "success" },
        ],
      },
      {
        label: "Judicial Order",
        description:
          "The bench issues an order on the matter. An attested judicial credential seals the order to the case, binding its authorship and time to the chain permanently.",
        icon: Gavel,
        logFilename: "cerulea_judiciary.log",
        logLines: [
          { text: "[SYS] Awaiting judicial seal for order on FIL_88421...", time: "15:33:02", tone: "default" },
          { text: "[CMD] sealOrder(FIL_88421, judge: \"JUD_HC_0x71\")", time: "15:33:02", tone: "primary" },
          { text: "[AUTH] Validating judicial credential and quorum...", time: "15:33:03", tone: "secondary" },
          { text: "[OK] Order sealed. Authorship provable on-chain.", time: "15:33:03", tone: "success" },
        ],
      },
      {
        label: "Party Verification",
        description:
          "Opposing counsel verifies the sealed record against the chain. The role-scoped view returns the filing, its digest, and every event, with no certified copy requested from the registry.",
        icon: Search,
        logFilename: "cerulea_judiciary.log",
        logLines: [
          { text: "[SYS] Access request from Counsel_0x55 (scoped role)...", time: "16:47:20", tone: "default" },
          { text: "[CMD] verifyRecord(FIL_88421)", time: "16:47:20", tone: "primary" },
          { text: "[SYS] Recomputing digest and matching docket sequence...", time: "16:47:21", tone: "default" },
          { text: "[OK] Record intact. No tampering detected since genesis.", time: "16:47:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes court record integrity into modular contracts. Each layer anchors, attests, scopes, and verifies a case event without any single registry controlling the record.",
    layers: [
      {
        title: "Evidence Chain",
        subtitle: "The Filing Anchor",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Filing Anchor",
          description:
            "The foundational data layer. It binds each filing to its SHA-256 digest, its case number, and its docket position, so the content and order of the record are fixed the instant a document is submitted.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract EvidenceChain {\n  struct Filing {\n    bytes32 docHash;\n    bytes32 caseId;\n    address filer;\n    uint256 filedAt;\n    uint256 docketSeq;\n  }\n\n  mapping(bytes32 => Filing) public filings;\n\n  function anchor(bytes32 id, bytes32 docHash, bytes32 caseId) external {\n    filings[id] = Filing(docHash, caseId, msg.sender, block.timestamp, nextSeq(caseId));\n  }\n}",
        simAction: "Simulate Filing Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading advocate credential BAR_KA_4471...", tone: "default" },
          { text: "Computing SHA-256 digest of petition...", tone: "default" },
          { text: "Assigning docket sequence for WP_2291_2026...", tone: "default" },
          { text: "Writing filing identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Filing FIL_88421 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Credential Attestation",
        subtitle: "The Judicial Seal",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Judicial Seal",
          description:
            "Prevents forged authorship. A filing cannot be sealed as an order unless the signer holds an attested judicial credential, turning every order into a provably authored act rather than an assertion.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function sealOrder(bytes32 filingId, bytes32 credId) external {\n    require(isJudicial(msg.sender, credId), \"Not a judge\");\n    require(!sealed[filingId], \"Already sealed\");\n    sealed[filingId] = true;\n    orderAuthor[filingId] = msg.sender;\n    emit OrderSealed(filingId, msg.sender, block.timestamp);\n}",
        simAction: "Simulate Judicial Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resolving judicial credential JUD_HC_0x71...", tone: "default" },
          { text: "Checking bench quorum for the order...", tone: "default" },
          { text: "Binding authorship to filing FIL_88421...", tone: "default" },
          { text: "Recording seal timestamp on-chain...", tone: "default" },
          { text: "[SUCCESS] Order sealed with provable authorship.", tone: "success" },
        ],
      },
      {
        title: "Access Control",
        subtitle: "The Scoped Window",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Scoped Window",
          description:
            "Enforces who sees what. Role-Based Access Control gates each read by party and role, so sealed exhibits, private annexures, and public orders are exposed only to the identities entitled to them.",
          platformFunction: "Access Governance",
        },
        codeSnippet:
          "function readFiling(bytes32 id) external view returns (Filing memory) {\n    Role r = roleOf[msg.sender][filings[id].caseId];\n    require(r != Role.None, \"Not a party\");\n    require(visibility[id] <= r, \"Above clearance\");\n    return filings[id];\n}",
        simAction: "Simulate Scoped Read",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Counsel_0x55 requesting sealed exhibit...", tone: "default" },
          { text: "Resolving party role on case WP_2291_2026...", tone: "default" },
          { text: "Comparing clearance against document visibility...", tone: "default" },
          { text: "Returning role-scoped record view...", tone: "default" },
          { text: "[SUCCESS] Access granted within entitlement.", tone: "success" },
        ],
      },
      {
        title: "Provenance Notary",
        subtitle: "The Case Audit",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Case Audit",
          description:
            "A read-only trail that replays every anchor, seal, and access event for a case. It lets an appellate bench or oversight body confirm integrity end to end without trusting the registry that held the files.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function auditTrail(bytes32 caseId) external view returns (Event[] memory) {\n    return caseEvents[caseId];\n}",
        simAction: "Simulate Case Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Appellate clerk opening audit for WP_2291_2026...", tone: "default" },
          { text: "Replaying 14 anchored filings and 3 orders...", tone: "default" },
          { text: "Recomputing every digest in sequence...", tone: "default" },
          { text: "Confirming docket order is unbroken...", tone: "default" },
          { text: "[SUCCESS] Full case trail verified intact.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Tamper-evident case records are a horizontal capability. Here is how different actors in the justice system put the shared evidence chain to work.",
    sectors: [
      { icon: Landmark, title: "Courts & Registries", description: "Run the official docket on a sealed ledger, so filings and orders carry provable authorship and order. Clerks stop issuing certified copies for integrity checks and appellate benches replay a complete trail.", assetTypes: ["Docket Records", "Sealed Orders", "Case Events"] },
      { icon: Scale, title: "Law Firms & Advocates", description: "Verify that a filing entered on the record is the exact document submitted, and prove authorship of your own submissions against the chain rather than trusting the opposing party's copy.", assetTypes: ["Petitions", "Exhibits", "Filing Receipts"] },
      { icon: ShieldCheck, title: "Oversight & Appellate Bodies", description: "Query the evidence chain directly to audit whether any record was altered, replacing physical file inspection with a live cryptographic verification of the entire case history.", assetTypes: ["Audit Trails", "Integrity Attestations", "Appeal Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy registry case-management system or capturing filings from an advocate's e-filing portal, Cerulea routes both into one sealed record.",
    tracks: [
      {
        title: "Track A: Registry System Bridging",
        description:
          "For courts on legacy case-management software. Existing filing events are translated into signed on-chain anchors through the API gateway automatically, with no change to clerk workflow.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy CMS", sublabel: "Registry Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Digest Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Judiciary Evidence Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Advocate E-Filing Capture",
        description:
          "For advocates and clerks filing from the portal. A credentialed session signs each anchor and seal from a judicial wallet and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "E-Filing Portal", sublabel: "Advocate & Clerk Devices", icon: Fingerprint, accent: false },
          { label: "Judiciary Validators", sublabel: "Docket Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Case Record", icon: Gavel, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a judiciary evidence chain with document anchoring, judicial credential attestation, and role-based public access from scratch requires specialised engineers and long registry integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Anchoring & Access Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects public-sector judiciary integration benchmarks. Wiring the registry case-management system to a ledger, building custom anchoring and judicial attestation logic, and shipping role-scoped access for an average court takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your anchoring and access rules into pre-audited WebAssembly binaries and provisions the evidence chain and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "legal-aid-case-assignment-and-outcome-tracking-for-indigent-defendants",
    icon: Scale,
    eyebrow: "Legal Aid Assurance Layer",
    headline1: "Track every assignment.",
    headline2: "Prove the outcome.",
    heroDescription:
      "Record which legal aid lawyer was assigned to each indigent defendant and how their case resolved, as verifiable data. The Civil Registry, Compliance Attestations, and Audit Logs modules anchor the work so legal services authorities finally see caseloads, assignment fairness, and outcomes across the whole program.",
    heroCta: "Deploy Legal Aid Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Give oversight bodies verifiable visibility into who was assigned to whom, and what happened, across an entire legal aid program.",
    mechanics: [
      { title: "Verified Assignment", description: "Each pairing of a legal aid lawyer to an indigent defendant is written to the Civil Registry as a signed record, so every assignment has a provable owner and timestamp instead of an entry in a local spreadsheet." },
      { title: "Caseload Fairness", description: "Because assignments are counted on-chain, the program sees each lawyer's active load in real time and can flag uneven distribution before an advocate is overloaded or a defendant is left unrepresented." },
      { title: "Outcome Anchoring", description: "The eventual result of each case, acquittal, conviction, plea, or dismissal, is anchored against the original assignment, closing the loop between representation and result as verifiable data." },
      { title: "Eligibility Attestation", description: "Compliance Attestations confirm a defendant met the indigence criteria before aid was granted, so program funds are provably directed to those who qualify." },
      { title: "Program Oversight", description: "Legal services authorities query a live view of assignments and outcomes across regions, replacing periodic self-reported returns with a continuous, auditable picture of the program." },
      { title: "Immutable Audit Log", description: "The Audit Logs module records every assignment, reassignment, and outcome entry, giving funders and regulators a complete trail of how the program actually operated." },
    ],
    lifecycleTitle: "The Representation Lifecycle",
    lifecycleSubtitle:
      "Follow a single indigent defendant from eligibility check to lawyer assignment and a recorded case outcome.",
    lifecycleSteps: [
      {
        label: "Eligibility Check",
        description:
          "A defendant applies for legal aid. Compliance Attestations confirm the indigence criteria are met and register the applicant, gating scarce aid resources to those who qualify.",
        icon: IdCard,
        logFilename: "cerulea_legalaid.log",
        logLines: [
          { text: "[SYS] Initializing Legal Aid Intake...", time: "09:12:03", tone: "default" },
          { text: "[CMD] attestEligibility { applicant: \"APP_5521\", meansScore: 18 }", time: "09:12:03", tone: "primary" },
          { text: "[AUTH] Verifying indigence criteria against threshold...", time: "09:12:04", tone: "secondary" },
          { text: "[OK] Applicant APP_5521 registered as eligible.", time: "09:12:04", tone: "success" },
        ],
      },
      {
        label: "Lawyer Assignment",
        description:
          "The program assigns an aid lawyer. The pairing is written to the Civil Registry with the current caseload checked, so the assignment is fair, owned, and timestamped.",
        icon: Handshake,
        logFilename: "cerulea_legalaid.log",
        logLines: [
          { text: "[SYS] Selecting available aid counsel by load...", time: "10:40:15", tone: "default" },
          { text: "[CMD] assignCounsel(APP_5521, lawyer: \"LAW_0x33\")", time: "10:40:19", tone: "primary" },
          { text: "[SYS] Current load for LAW_0x33 = 11 active matters.", time: "10:40:19", tone: "default" },
          { text: "[OK] Assignment ASG_7741 recorded on-chain.", time: "10:40:20", tone: "success" },
        ],
      },
      {
        label: "Matter Progress",
        description:
          "Hearings and milestones accrue against the matter. Each update is logged, so the program can see whether represented defendants are actually moving through the process.",
        icon: Activity,
        logFilename: "cerulea_legalaid.log",
        logLines: [
          { text: "[SYS] Recording hearing milestone for ASG_7741...", time: "14:05:41", tone: "default" },
          { text: "[CMD] logMilestone(ASG_7741, stage: \"EVIDENCE\")", time: "14:05:41", tone: "primary" },
          { text: "[SYS] Milestone appended to matter timeline.", time: "14:05:42", tone: "default" },
          { text: "[OK] Progress state advanced. Trail intact.", time: "14:05:42", tone: "success" },
        ],
      },
      {
        label: "Outcome Recording",
        description:
          "The case resolves. The outcome is anchored to the original assignment, giving the authority verifiable data linking representation to result across the program.",
        icon: FileCheck,
        logFilename: "cerulea_legalaid.log",
        logLines: [
          { text: "[SYS] Finalizing outcome for ASG_7741...", time: "16:58:12", tone: "default" },
          { text: "[CMD] recordOutcome(ASG_7741, result: \"ACQUITTED\")", time: "16:58:12", tone: "primary" },
          { text: "[AUTH] Binding outcome to assignment and applicant...", time: "16:58:13", tone: "secondary" },
          { text: "[OK] Outcome anchored. Program metrics updated.", time: "16:58:13", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes legal aid oversight into modular contracts. Each layer registers eligibility, assigns counsel, tracks progress, and anchors outcomes without any single office controlling the program record.",
    layers: [
      {
        title: "Civil Registry",
        subtitle: "The Assignment Ledger",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Assignment Ledger",
          description:
            "The foundational data layer. It binds each defendant to the aid lawyer assigned to them, with the timestamp and current caseload, so every assignment across the program is owned and countable.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AidRegistry {\n  struct Assignment {\n    bytes32 applicant;\n    address lawyer;\n    uint256 assignedAt;\n    uint8 status;\n  }\n\n  mapping(bytes32 => Assignment) public assignments;\n  mapping(address => uint256) public load;\n\n  function assign(bytes32 id, bytes32 applicant, address lawyer) external {\n    assignments[id] = Assignment(applicant, lawyer, block.timestamp, 1);\n    load[lawyer] += 1;\n  }\n}",
        simAction: "Simulate Assignment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading eligible applicant APP_5521...", tone: "default" },
          { text: "Selecting counsel LAW_0x33 by lowest load...", tone: "default" },
          { text: "Incrementing lawyer caseload counter...", tone: "default" },
          { text: "Writing assignment to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Assignment ASG_7741 recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Compliance Attestations",
        subtitle: "The Eligibility Gate",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Eligibility Gate",
          description:
            "Prevents misdirected aid. A defendant cannot be assigned counsel until an attestation confirms the indigence criteria are met, so program funds provably reach those who qualify.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function attest(bytes32 applicant, uint256 meansScore) external onlyAssessor {\n    require(meansScore <= threshold, \"Above means limit\");\n    eligible[applicant] = true;\n    emit Attested(applicant, meansScore, msg.sender);\n}",
        simAction: "Simulate Eligibility Attest",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Assessor reviewing means declaration...", tone: "default" },
          { text: "Comparing means score 18 against threshold 25...", tone: "default" },
          { text: "Marking applicant APP_5521 eligible...", tone: "default" },
          { text: "Emitting attestation event on-chain...", tone: "default" },
          { text: "[SUCCESS] Eligibility confirmed and recorded.", tone: "success" },
        ],
      },
      {
        title: "Outcome Anchor",
        subtitle: "The Result Binder",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Result Binder",
          description:
            "Closes the loop. It binds a final case result to the original assignment, so the program can measure outcomes against representation instead of relying on self-reported returns.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function recordOutcome(bytes32 assignmentId, bytes32 result) external onlyCourtFeed {\n    require(assignments[assignmentId].status == 1, \"Not active\");\n    outcomes[assignmentId] = result;\n    assignments[assignmentId].status = 2;\n    emit OutcomeRecorded(assignmentId, result);\n}",
        simAction: "Simulate Outcome Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving court disposition for ASG_7741...", tone: "default" },
          { text: "Verifying assignment is still active...", tone: "default" },
          { text: "Binding result ACQUITTED to assignment...", tone: "default" },
          { text: "Updating program outcome metrics...", tone: "default" },
          { text: "[SUCCESS] Outcome anchored to assignment.", tone: "success" },
        ],
      },
      {
        title: "Audit Logs",
        subtitle: "The Program View",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Program View",
          description:
            "A read-only aggregate that lets a legal services authority query assignments, loads, and outcomes across regions, replacing periodic returns with a continuous, auditable picture of the program.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function programSummary(bytes32 region) external view returns (Summary memory) {\n    return summaries[region];\n}",
        simAction: "Simulate Program Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Authority opening program view for region SOUTH...", tone: "default" },
          { text: "Aggregating 4,120 assignments across 88 lawyers...", tone: "default" },
          { text: "Computing caseload distribution and outcomes...", tone: "default" },
          { text: "Flagging 3 lawyers above fair-load band...", tone: "default" },
          { text: "[SUCCESS] Live program summary returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable assignment and outcome tracking is a horizontal capability. Here is how different actors in the legal aid ecosystem put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Legal Services Authorities", description: "See caseloads, assignment fairness, and outcomes across the whole program on one live ledger, replacing self-reported district returns with continuous, auditable data.", assetTypes: ["Assignment Records", "Outcome Metrics", "Fairness Reports"] },
      { icon: Scale, title: "Aid Lawyers & Clinics", description: "Hold a provable record of the matters assigned to them and their resolutions, so contribution to the program is visible and load can be balanced before it becomes unsustainable.", assetTypes: ["Case Assignments", "Milestone Logs", "Outcome Attestations"] },
      { icon: PieChart, title: "Funders & Oversight Bodies", description: "Query eligibility, assignment, and outcome trails directly to confirm funds reach qualified defendants and produce results, replacing manual programme evaluations with a live audit.", assetTypes: ["Eligibility Attestations", "Audit Trails", "Program Summaries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy case-management system at a legal services authority or capturing assignments from a clinic's intake app, Cerulea routes both into one program record.",
    tracks: [
      {
        title: "Track A: Authority System Bridging",
        description:
          "For legal services authorities on legacy databases. Existing intake and assignment events are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Aid CMS", sublabel: "Authority Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Legal Aid Program Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Clinic Intake Capture",
        description:
          "For aid clinics and field intake officers on mobile. A progressive web app signs each eligibility attestation and assignment from a wallet and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Intake PWA / Wallet", sublabel: "Clinic & Officer Devices", icon: Fingerprint, accent: false },
          { label: "Program Validators", sublabel: "Assignment Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Program Record", icon: Scale, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a program-wide assignment and outcome tracking system with eligibility attestation and live oversight from scratch requires specialised engineers and long integration cycles across regional offices. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Assignment & Outcome Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects public-program integration benchmarks. Wiring each regional office's case system together, building custom eligibility, assignment, and outcome logic, and shipping a live oversight view for an average authority takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your assignment and outcome rules into pre-audited WebAssembly binaries and provisions the shared program ledger and oversight layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "e-summons-delivery-verification-across-jurisdictions",
    icon: ScrollText,
    eyebrow: "Cross-Jurisdiction Service Layer",
    headline1: "Serve the summons.",
    headline2: "Prove it was received.",
    heroDescription:
      "Anchor the delivery confirmation of every electronic court summons to the recipient's verified identity, regardless of which court issued it. The Provenance Notary, Notifications, and Audit Logs modules give courts service evidence that holds up in later proceedings even across jurisdictional boundaries.",
    heroCta: "Deploy Service Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a disputable electronic delivery into a verified record of service tied to a real recipient identity.",
    mechanics: [
      { title: "Verified Recipient Binding", description: "Each summons is addressed to a recipient's verified identity, not just an email address, so a later claim of non-receipt is tested against a cryptographic delivery record rather than an unverifiable inbox." },
      { title: "Delivery Notarization", description: "The Provenance Notary anchors the exact time the summons was delivered and acknowledged, sealing a service event that any court can rely on." },
      { title: "Cross-Jurisdiction Portability", description: "Because the record lives on a shared chain, a summons issued by one court is verifiable by another, so service does not fall apart when a matter crosses jurisdictional lines." },
      { title: "Acknowledgement Capture", description: "The Notifications module records the recipient's acknowledgement or the delivery event itself, capturing proof of service without waiting on a physical return of a process server." },
      { title: "Tamper-Evident Service Log", description: "Every attempt, delivery, and acknowledgement is written to an immutable log, so the sequence of service cannot be quietly rewritten to favour one party." },
      { title: "Court-Ready Evidence", description: "The Audit Logs module produces a replayable trail a court accepts as evidence of delivery, collapsing disputes over whether service occurred into a single verifiable query." },
    ],
    lifecycleTitle: "The Service Lifecycle",
    lifecycleSubtitle:
      "Follow a single electronic summons from issuance in one jurisdiction to verified delivery and cross-court acceptance.",
    lifecycleSteps: [
      {
        label: "Summons Issuance",
        description:
          "A court issues an electronic summons. The contract binds it to the recipient's verified identity and anchors its content, fixing the origin of the service record.",
        icon: ScrollText,
        logFilename: "cerulea_esummons.log",
        logLines: [
          { text: "[SYS] Initializing Summons Service Manifest...", time: "08:31:09", tone: "default" },
          { text: "[CMD] issueSummons { case: \"CC_881_2026\", to: \"DID:0x9c4\" }", time: "08:31:09", tone: "primary" },
          { text: "[AUTH] Resolving recipient verified identity...", time: "08:31:10", tone: "secondary" },
          { text: "[OK] Summons SUM_4471 anchored at block 5610744.", time: "08:31:10", tone: "success" },
        ],
      },
      {
        label: "Delivery Dispatch",
        description:
          "The Notifications module dispatches the summons to the recipient's verified channel and records the delivery event the instant it lands.",
        icon: Radio,
        logFilename: "cerulea_esummons.log",
        logLines: [
          { text: "[SYS] Dispatching SUM_4471 to verified channel...", time: "08:31:12", tone: "default" },
          { text: "[CMD] notify(SUM_4471, channel: \"SECURE_INBOX\")", time: "08:31:12", tone: "primary" },
          { text: "[SYS] Delivery event captured at recipient endpoint.", time: "08:31:13", tone: "default" },
          { text: "[OK] Delivery timestamp anchored to record.", time: "08:31:13", tone: "success" },
        ],
      },
      {
        label: "Recipient Acknowledgement",
        description:
          "The recipient opens and acknowledges the summons from a wallet-signed session. The acknowledgement is notarized against their verified identity.",
        icon: Fingerprint,
        logFilename: "cerulea_esummons.log",
        logLines: [
          { text: "[SYS] Awaiting acknowledgement for SUM_4471...", time: "12:18:44", tone: "default" },
          { text: "[CMD] acknowledge(SUM_4471, signer: \"DID:0x9c4\")", time: "12:18:44", tone: "primary" },
          { text: "[AUTH] Verifying signature against recipient identity...", time: "12:18:45", tone: "secondary" },
          { text: "[OK] Acknowledgement notarized. Service proven.", time: "12:18:45", tone: "success" },
        ],
      },
      {
        label: "Cross-Court Verification",
        description:
          "A different court verifies the service record for a related matter. The chain returns the delivery and acknowledgement proof, valid across jurisdictions.",
        icon: Globe,
        logFilename: "cerulea_esummons.log",
        logLines: [
          { text: "[SYS] Verification request from Court_0x71 (other juris)...", time: "15:52:30", tone: "default" },
          { text: "[CMD] verifyService(SUM_4471)", time: "15:52:30", tone: "primary" },
          { text: "[SYS] Returning delivery and acknowledgement proofs...", time: "15:52:31", tone: "default" },
          { text: "[OK] Service confirmed valid across jurisdictions.", time: "15:52:31", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes cross-jurisdiction service into modular contracts. Each layer binds identity, dispatches, notarizes, and exposes a delivery record without any single court controlling the proof.",
    layers: [
      {
        title: "Service Registry",
        subtitle: "The Recipient Binder",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Recipient Binder",
          description:
            "The foundational data layer. It binds each summons to the recipient's verified identity and the issuing court, so a later claim of non-receipt is tested against a real identity rather than an inbox address.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ServiceRegistry {\n  struct Summons {\n    bytes32 recipientDID;\n    bytes32 caseId;\n    address issuingCourt;\n    uint256 issuedAt;\n    uint8 state;\n  }\n\n  mapping(bytes32 => Summons) public summonses;\n\n  function issue(bytes32 id, bytes32 did, bytes32 caseId) external {\n    summonses[id] = Summons(did, caseId, msg.sender, block.timestamp, 0);\n  }\n}",
        simAction: "Simulate Summons Issue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resolving recipient DID:0x9c4...", tone: "default" },
          { text: "Binding summons to issuing court CC_881...", tone: "default" },
          { text: "Anchoring summons content digest...", tone: "default" },
          { text: "Writing service record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Summons SUM_4471 issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Notification Dispatch",
        subtitle: "The Delivery Recorder",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Delivery Recorder",
          description:
            "Captures proof of delivery. It dispatches the summons to the recipient's verified channel and records the delivery event and time, so service does not depend on a physical process server's return.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function notify(bytes32 id, bytes32 channel) external onlyDispatcher {\n    require(summonses[id].state == 0, \"Already dispatched\");\n    delivered[id] = block.timestamp;\n    summonses[id].state = 1;\n    emit Delivered(id, channel, block.timestamp);\n}",
        simAction: "Simulate Delivery Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Dispatching to recipient secure inbox...", tone: "default" },
          { text: "Awaiting endpoint delivery receipt...", tone: "default" },
          { text: "Stamping delivery timestamp for SUM_4471...", tone: "default" },
          { text: "Advancing summons state to DELIVERED...", tone: "default" },
          { text: "[SUCCESS] Delivery event recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Provenance Notary",
        subtitle: "The Acknowledgement Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Acknowledgement Seal",
          description:
            "Notarizes receipt. When the recipient acknowledges from a wallet-signed session, this module seals the acknowledgement to their verified identity, turning receipt into provable, non-repudiable service.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function acknowledge(bytes32 id, bytes calldata sig) external {\n    require(summonses[id].state == 1, \"Not delivered\");\n    require(recover(id, sig) == ownerOf(summonses[id].recipientDID), \"Bad signer\");\n    summonses[id].state = 2;\n    emit Acknowledged(id, block.timestamp);\n}",
        simAction: "Simulate Acknowledgement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recipient opening summons SUM_4471...", tone: "default" },
          { text: "Verifying wallet signature against DID...", tone: "default" },
          { text: "Sealing acknowledgement to identity...", tone: "default" },
          { text: "Advancing state to ACKNOWLEDGED...", tone: "default" },
          { text: "[SUCCESS] Receipt notarized, non-repudiable.", tone: "success" },
        ],
      },
      {
        title: "Audit Logs",
        subtitle: "The Court Window",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Court Window",
          description:
            "A read-only trail that returns the full service history to any court, in any jurisdiction, so a delivery dispute is resolved by a shared cryptographic record rather than conflicting affidavits.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function serviceProof(bytes32 id) external view returns (Summons memory, uint256, uint8) {\n    return (summonses[id], delivered[id], summonses[id].state);\n}",
        simAction: "Simulate Service Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Court_0x71 requesting service proof...", tone: "default" },
          { text: "Assembling delivery and acknowledgement events...", tone: "default" },
          { text: "Confirming state ACKNOWLEDGED for SUM_4471...", tone: "default" },
          { text: "Returning cross-jurisdiction service trail...", tone: "default" },
          { text: "[SUCCESS] Verified service record returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified electronic service is a horizontal capability. Here is how different actors in the justice system put the shared delivery record to work.",
    sectors: [
      { icon: Landmark, title: "Courts & Tribunals", description: "Issue and prove electronic service on a shared chain, so a summons stands up even when the recipient later claims non-receipt or the matter moves to another court.", assetTypes: ["Service Records", "Delivery Proofs", "Acknowledgements"] },
      { icon: Scale, title: "Litigators & Process Agents", description: "Confirm that a party was validly served before relying on default proceedings, replacing contested affidavits of service with a verifiable delivery record.", assetTypes: ["Proof of Service", "Recipient Bindings", "Attempt Logs"] },
      { icon: Globe, title: "Cross-Border Registries", description: "Verify a summons issued in another jurisdiction against one shared ledger, so service portability across courts no longer depends on manual letters rogatory.", assetTypes: ["Cross-Court Proofs", "Audit Trails", "Identity Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a court's legacy notice system or capturing acknowledgements from a recipient's mobile wallet, Cerulea routes both into one service record.",
    tracks: [
      {
        title: "Track A: Court Notice Bridging",
        description:
          "For courts on legacy notice and dispatch software. Existing issuance and delivery events are translated into signed on-chain service records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Notice System", sublabel: "Court Dispatch Software", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Cross-Court Service Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Recipient Wallet Capture",
        description:
          "For recipients acknowledging from mobile. A progressive web app signs each acknowledgement from a phone wallet and routes the notarized receipt directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Recipient PWA / Wallet", sublabel: "Party Devices", icon: Fingerprint, accent: false },
          { label: "Service Validators", sublabel: "Delivery Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Service Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-jurisdiction service network with verified identity binding, delivery notarization, and court-ready audit trails from scratch requires specialised engineers and long inter-court integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Delivery & Acknowledgement Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects inter-court integration benchmarks. Wiring each court's notice system together, building custom identity binding and delivery notarization logic, and shipping a court-ready audit trail for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your delivery and acknowledgement rules into pre-audited WebAssembly binaries and provisions the shared service ledger and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "continuous-audit-via-real-time-transaction-visibility-for-auditors",
    icon: Activity,
    eyebrow: "Continuous Assurance Network",
    headline1: "Audit as it happens.",
    headline2: "Catch fraud in March.",
    heroDescription:
      "Give auditors year-round, real-time access to immutable transaction data instead of a backward-looking annual sample. Built on Audit Logs, External Data Oracles, and Compliance Attestations, the network detects fraud as it occurs, so an alert in March stops a Rs 3 crore scheme that a year-end audit would only find in October.",
    heroCta: "Deploy Continuous Audit",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace a sample-based annual audit with a live, immutable stream of transactions the auditor watches all year.",
    mechanics: [
      { title: "Real-Time Transaction Feed", description: "External Data Oracles stream ledger entries to the audit chain as they post, so the auditor works from live data instead of a year-end extract, ending the 70 percent of audit time spent gathering records." },
      { title: "Immutable Transaction Store", description: "Every entry is anchored the moment it is booked. A transaction cannot be quietly reversed or backdated after the fact, so the audit population is complete rather than a sample." },
      { title: "Continuous Anomaly Alerts", description: "Rules encoded in the network flag unusual patterns, such as related-party spikes or round-sum transfers, and raise an alert the instant they occur rather than a year later." },
      { title: "Automated Confirmations", description: "Compliance Attestations let counterparties confirm balances and terms on-chain, replacing slow circularized confirmation letters with instant cryptographic responses." },
      { title: "Scoped Auditor Access", description: "The auditor holds a read-only, time-scoped view into the client's transaction stream, gaining year-round visibility without the ability to alter the underlying books." },
      { title: "Evidence-Ready Trail", description: "The Audit Logs module preserves a replayable trail of every entry and alert, so a flagged transaction arrives at the audit file already documented and timestamped." },
    ],
    lifecycleTitle: "The Continuous Audit Lifecycle",
    lifecycleSubtitle:
      "Follow a suspicious transaction from the moment it posts to a real-time alert and a stopped fraud, months before year-end.",
    lifecycleSteps: [
      {
        label: "Transaction Posting",
        description:
          "A journal entry is booked in the client's ERP. The oracle streams it to the audit chain and anchors it immutably as part of the complete audit population.",
        icon: Coins,
        logFilename: "cerulea_contaudit.log",
        logLines: [
          { text: "[SYS] Streaming ERP journal to audit chain...", time: "03:14:07", tone: "default" },
          { text: "[CMD] anchorTxn { ref: \"JV_9921\", amt: 30000000, party: \"REL_0x44\" }", time: "03:14:07", tone: "primary" },
          { text: "[AUTH] Oracle signature verified from ERP feed...", time: "03:14:08", tone: "secondary" },
          { text: "[OK] Transaction anchored at block 5711902.", time: "03:14:08", tone: "success" },
        ],
      },
      {
        label: "Rule Evaluation",
        description:
          "The network evaluates the entry against encoded audit rules. A related-party transfer above threshold trips the anomaly logic in real time.",
        icon: Workflow,
        logFilename: "cerulea_contaudit.log",
        logLines: [
          { text: "[SYS] Evaluating JV_9921 against 46 audit rules...", time: "03:14:08", tone: "default" },
          { text: "[CMD] checkRelatedParty(JV_9921, threshold: 10000000)", time: "03:14:08", tone: "primary" },
          { text: "[SYS] Match: related-party transfer above limit.", time: "03:14:09", tone: "default" },
          { text: "[OK] Anomaly flag raised. Alert queued.", time: "03:14:09", tone: "error" },
        ],
      },
      {
        label: "Auditor Alert",
        description:
          "An automated alert reaches the auditor in March. They open the flagged transaction and its trail directly, without waiting for a year-end data request.",
        icon: HeartPulse,
        logFilename: "cerulea_contaudit.log",
        logLines: [
          { text: "[SYS] Dispatching alert to auditor AUD_0x18...", time: "08:02:40", tone: "default" },
          { text: "[CMD] openTrail(JV_9921)", time: "08:02:41", tone: "primary" },
          { text: "[SYS] Returning full entry, party graph, and history...", time: "08:02:41", tone: "default" },
          { text: "[OK] Auditor reviewing live flagged transaction.", time: "08:02:42", tone: "success" },
        ],
      },
      {
        label: "Investigation & Stop",
        description:
          "Investigation confirms an in-progress related-party fraud. The scheme is stopped immediately, months before a year-end audit would have surfaced it.",
        icon: Shield,
        logFilename: "cerulea_contaudit.log",
        logLines: [
          { text: "[SYS] Investigator confirming related-party scheme...", time: "11:47:15", tone: "default" },
          { text: "[CMD] escalate(JV_9921, finding: \"FRAUD_IN_PROGRESS\")", time: "11:47:15", tone: "primary" },
          { text: "[AUTH] Freezing counterparty settlement channel...", time: "11:47:16", tone: "secondary" },
          { text: "[OK] Rs 3 crore fraud stopped in March, not October.", time: "11:47:16", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes continuous audit into modular contracts. Each layer ingests, anchors, evaluates, and exposes transactions without the auditor ever holding write access to the client's books.",
    layers: [
      {
        title: "Oracle Ingest",
        subtitle: "The Live Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Feed",
          description:
            "The foundational data layer. External Data Oracles stream signed ledger entries from the client ERP into the audit chain as they post, so the auditor works from a complete, real-time population rather than a year-end sample.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract OracleIngest {\n  struct Txn {\n    bytes32 ref;\n    uint256 amount;\n    bytes32 party;\n    uint256 postedAt;\n    bool flagged;\n  }\n\n  mapping(bytes32 => Txn) public ledger;\n\n  function ingest(bytes32 ref, uint256 amount, bytes32 party) external onlyOracle {\n    ledger[ref] = Txn(ref, amount, party, block.timestamp, false);\n  }\n}",
        simAction: "Simulate Transaction Ingest",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying oracle signature from ERP feed...", tone: "default" },
          { text: "Reading journal entry JV_9921...", tone: "default" },
          { text: "Anchoring amount and counterparty on-chain...", tone: "default" },
          { text: "Writing transaction to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Transaction ingested into audit chain.", tone: "success" },
        ],
      },
      {
        title: "Rule Engine",
        subtitle: "The Anomaly Hook",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Anomaly Hook",
          description:
            "Evaluates every entry the moment it posts. Encoded audit rules test each transaction for related-party exposure, round-sum patterns, and threshold breaches, raising a flag in real time instead of at year-end.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function evaluate(bytes32 ref) external returns (bool) {\n    Txn storage t = ledger[ref];\n    if (isRelatedParty(t.party) && t.amount > threshold) {\n      t.flagged = true;\n      emit AnomalyRaised(ref, t.party, t.amount);\n    }\n    return t.flagged;\n}",
        simAction: "Simulate Rule Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading 46 encoded audit rules...", tone: "default" },
          { text: "Testing JV_9921 for related-party exposure...", tone: "default" },
          { text: "Comparing 30,000,000 against threshold...", tone: "default" },
          { text: "Raising anomaly flag on entry...", tone: "default" },
          { text: "[SUCCESS] Anomaly detected and recorded.", tone: "success" },
        ],
      },
      {
        title: "Compliance Attestations",
        subtitle: "The Confirmation Loop",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Confirmation Loop",
          description:
            "Replaces circularized letters. Counterparties confirm balances and terms on-chain, so the auditor obtains cryptographic third-party confirmations instantly instead of waiting weeks for mailed responses.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function confirmBalance(bytes32 party, uint256 asserted) external {\n    require(msg.sender == ownerOf(party), \"Not counterparty\");\n    confirmations[party] = Confirmation(asserted, block.timestamp);\n    emit BalanceConfirmed(party, asserted);\n}",
        simAction: "Simulate Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Requesting balance confirmation from REL_0x44...", tone: "default" },
          { text: "Counterparty signing asserted balance...", tone: "default" },
          { text: "Recording confirmation timestamp...", tone: "default" },
          { text: "Comparing against booked ledger value...", tone: "default" },
          { text: "[SUCCESS] Third-party confirmation captured.", tone: "success" },
        ],
      },
      {
        title: "Audit Logs",
        subtitle: "The Auditor Window",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auditor Window",
          description:
            "A read-only, time-scoped view that returns the transaction stream, alerts, and confirmations to the auditor, giving year-round visibility with no write access to the client's books.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function auditorView(uint256 fromBlock, uint256 toBlock) external view returns (Txn[] memory) {\n    require(isAuditor(msg.sender), \"Not auditor\");\n    return window(fromBlock, toBlock);\n}",
        simAction: "Simulate Auditor Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor AUD_0x18 opening live window...", tone: "default" },
          { text: "Scoping read to fiscal-year block range...", tone: "default" },
          { text: "Streaming flagged entries and confirmations...", tone: "default" },
          { text: "Confirming no write access on client books...", tone: "default" },
          { text: "[SUCCESS] Year-round audit view returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Continuous, real-time assurance is a horizontal capability. Here is how different actors put the live audit network to work.",
    sectors: [
      { icon: Search, title: "Audit Firms", description: "Move from sample-based year-end fieldwork to continuous assurance, cutting data-gathering effort and catching misstatement as it accumulates rather than months after the fact.", assetTypes: ["Live Transaction Feeds", "Anomaly Alerts", "Confirmation Records"] },
      { icon: Building2, title: "Corporate Finance Teams", description: "Give auditors scoped, real-time access to the ledger without handing over write control, shortening close cycles and surfacing control failures early.", assetTypes: ["Journal Streams", "Related-Party Registers", "Control Attestations"] },
      { icon: ShieldCheck, title: "Audit Committees & Regulators", description: "Watch a live assurance dashboard instead of waiting for the annual report, so fraud in progress is escalated in-year rather than discovered at year-end.", assetTypes: ["Audit Trails", "Escalation Records", "Assurance Reports"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are streaming entries from an enterprise ERP or capturing counterparty confirmations from a wallet, Cerulea routes both into one live audit chain.",
    tracks: [
      {
        title: "Track A: Enterprise ERP Streaming",
        description:
          "For finance teams on legacy ERP. Booked journal entries are streamed and translated into signed on-chain transactions through the oracle gateway automatically, with no change to the books.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy ERP / GL", sublabel: "Client Accounting System", icon: Workflow, accent: false },
          { label: "Cerulea Oracle Gateway", sublabel: "Entry Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Continuous Audit Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Counterparty Confirmation Capture",
        description:
          "For counterparties confirming balances from mobile. A wallet-signed app submits each on-chain confirmation directly to the audit chain, replacing mailed circularization.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Counterparty Wallet", sublabel: "Vendor & Bank Devices", icon: Fingerprint, accent: false },
          { label: "Audit Validators", sublabel: "Confirmation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Live Assurance Record", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a continuous audit network with ERP oracle streaming, real-time anomaly rules, and on-chain confirmations from scratch requires specialised assurance engineers and long ERP integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Anomaly & Confirmation Rules",
      ruleCount: 52,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects enterprise assurance-tooling benchmarks. Building custom ERP connectors, writing real-time anomaly logic, and shipping an auditor-scoped confirmation layer for an average engagement takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your anomaly and confirmation rules into pre-audited WebAssembly binaries and provisions the live audit ledger and auditor view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "inventory-count-verification-for-multi-location-retail-audits",
    icon: Package,
    eyebrow: "Simultaneous Count Assurance",
    headline1: "Count every store.",
    headline2: "Prove it was the same instant.",
    heroDescription:
      "Anchor timestamped inventory count submissions from every retail location as they happen, supporting the audit firm's valuation. Built on Provenance Notary, Audit Logs, and External Data Oracles, the network gives verifiable proof that counts across hundreds of stores fell inside the required window and could not be shuffled between locations.",
    heroCta: "Deploy Count Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a logistically impossible simultaneous stock count into a verifiable, timestamped record across every location.",
    mechanics: [
      { title: "Timestamped Submissions", description: "Each store's count is anchored the moment it is submitted, so the audit firm has cryptographic proof that a location counted inside the required window rather than trusting a signed sheet." },
      { title: "Synchronized Count Window", description: "The network opens and closes a single count window across all locations, so a submission outside the window is visibly late and cannot be passed off as simultaneous." },
      { title: "Anti-Transfer Lock", description: "Because counts are sealed at the same instant everywhere, stock cannot be moved between stores to be counted twice, closing the classic inflation loophole in multi-site audits." },
      { title: "Oracle-Sourced Quantities", description: "External Data Oracles pull quantities straight from each store's point-of-sale and warehouse systems, reducing manual entry and binding the count to the operational record." },
      { title: "Location Attestation", description: "Each submission is signed by an attested store credential, so the audit firm knows which specific location and manager stood behind each count." },
      { title: "Valuation-Ready Trail", description: "The Audit Logs module assembles a replayable record of every count across the chain, handing the audit firm a valuation basis that withstands review." },
    ],
    lifecycleTitle: "The Count Lifecycle",
    lifecycleSubtitle:
      "Follow a single retail chain from an opened count window to sealed submissions and a verified valuation basis.",
    lifecycleSteps: [
      {
        label: "Window Opening",
        description:
          "The audit firm opens a synchronized count window across every store. The contract records the exact start, fixing the reference instant for the whole chain.",
        icon: Ticket,
        logFilename: "cerulea_stockcount.log",
        logLines: [
          { text: "[SYS] Opening synchronized count window...", time: "22:00:00", tone: "default" },
          { text: "[CMD] openWindow { chain: \"RET_0x9\", stores: 214, minutes: 90 }", time: "22:00:00", tone: "primary" },
          { text: "[AUTH] Broadcasting window start to all locations...", time: "22:00:01", tone: "secondary" },
          { text: "[OK] Window WIN_5521 open. Reference instant fixed.", time: "22:00:01", tone: "success" },
        ],
      },
      {
        label: "Store Count Submission",
        description:
          "Each store submits its physical count, drawn from POS and warehouse oracles. The submission is anchored with its store credential and timestamp.",
        icon: Package,
        logFilename: "cerulea_stockcount.log",
        logLines: [
          { text: "[SYS] Receiving count from store STR_118...", time: "22:41:33", tone: "default" },
          { text: "[CMD] submitCount(WIN_5521, store: \"STR_118\", skus: 4821)", time: "22:41:33", tone: "primary" },
          { text: "[SYS] Oracle quantities reconciled with POS feed.", time: "22:41:34", tone: "default" },
          { text: "[OK] Count anchored inside window. Store signed.", time: "22:41:34", tone: "success" },
        ],
      },
      {
        label: "Window Closing",
        description:
          "The window closes. Any submission arriving after the cutoff is marked late, so only genuinely simultaneous counts form the audit population.",
        icon: Lock,
        logFilename: "cerulea_stockcount.log",
        logLines: [
          { text: "[SYS] Closing count window WIN_5521...", time: "23:30:00", tone: "default" },
          { text: "[CMD] closeWindow(WIN_5521)", time: "23:30:00", tone: "primary" },
          { text: "[SYS] 211 of 214 stores submitted in window.", time: "23:30:01", tone: "default" },
          { text: "[OK] 3 late submissions flagged, not counted as simultaneous.", time: "23:30:01", tone: "error" },
        ],
      },
      {
        label: "Valuation Verification",
        description:
          "The audit firm verifies the sealed counts against the chain and assembles the valuation basis, with proof that counts fell inside the required window.",
        icon: PieChart,
        logFilename: "cerulea_stockcount.log",
        logLines: [
          { text: "[SYS] Auditor verifying sealed counts for WIN_5521...", time: "23:52:18", tone: "default" },
          { text: "[CMD] verifyCounts(WIN_5521)", time: "23:52:18", tone: "primary" },
          { text: "[SYS] Confirming all timestamps within window...", time: "23:52:19", tone: "default" },
          { text: "[OK] Valuation basis verified across 211 stores.", time: "23:52:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes multi-location count assurance into modular contracts. Each layer opens the window, ingests, seals, and exposes counts without any single store controlling the timing.",
    layers: [
      {
        title: "Count Window",
        subtitle: "The Sync Anchor",
        icon: Ticket,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sync Anchor",
          description:
            "The foundational timing layer. It opens one count window across the whole chain and fixes the reference instant, so every submission is measured against a single synchronized clock.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CountWindow {\n  struct Window {\n    bytes32 chainId;\n    uint256 openedAt;\n    uint256 closesAt;\n    bool open;\n  }\n\n  mapping(bytes32 => Window) public windows;\n\n  function open(bytes32 id, bytes32 chainId, uint256 minutes_) external onlyAuditor {\n    windows[id] = Window(chainId, block.timestamp, block.timestamp + minutes_ * 60, true);\n  }\n}",
        simAction: "Simulate Window Open",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor opening window for chain RET_0x9...", tone: "default" },
          { text: "Fixing reference instant across 214 stores...", tone: "default" },
          { text: "Setting 90 minute close deadline...", tone: "default" },
          { text: "Broadcasting window to all locations...", tone: "default" },
          { text: "[SUCCESS] Window WIN_5521 opened on-chain.", tone: "success" },
        ],
      },
      {
        title: "Oracle Reconciler",
        subtitle: "The Quantity Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Quantity Feed",
          description:
            "Binds counts to operations. External Data Oracles pull SKU quantities from each store's POS and warehouse systems and reconcile them against the manual count before it is anchored.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function reconcile(bytes32 windowId, bytes32 store, uint256 counted) external onlyOracle {\n    uint256 posQty = posFeed.latest(store);\n    variance[store] = int256(counted) - int256(posQty);\n    emit Reconciled(windowId, store, counted, posQty);\n}",
        simAction: "Simulate Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Pulling POS quantities for store STR_118...", tone: "default" },
          { text: "Comparing manual count against feed...", tone: "default" },
          { text: "Computing variance across 4,821 SKUs...", tone: "default" },
          { text: "Attaching variance to submission...", tone: "default" },
          { text: "[SUCCESS] Count reconciled with operations.", tone: "success" },
        ],
      },
      {
        title: "Provenance Notary",
        subtitle: "The Submission Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Submission Seal",
          description:
            "Prevents late or moved stock. A count is sealed only if it arrives inside the window and is signed by an attested store credential, so simultaneity and location are both provable.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function submitCount(bytes32 windowId, bytes32 store, uint256 skus) external {\n    require(windows[windowId].open, \"Window closed\");\n    require(block.timestamp <= windows[windowId].closesAt, \"Late\");\n    counts[windowId][store] = Count(skus, block.timestamp, msg.sender);\n    emit CountSealed(windowId, store, skus);\n}",
        simAction: "Simulate Count Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Store STR_118 submitting sealed count...", tone: "default" },
          { text: "Checking timestamp against window close...", tone: "default" },
          { text: "Verifying store credential signature...", tone: "default" },
          { text: "Anchoring count inside window...", tone: "default" },
          { text: "[SUCCESS] Submission sealed, simultaneity proven.", tone: "success" },
        ],
      },
      {
        title: "Audit Logs",
        subtitle: "The Valuation Window",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Valuation Window",
          description:
            "A read-only trail that returns every sealed count, its timestamp, and its variance to the audit firm, providing a valuation basis proving counts fell inside the required window.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function countReport(bytes32 windowId) external view returns (Count[] memory, uint256 lateCount) {\n    return (allCounts[windowId], lateSubmissions[windowId]);\n}",
        simAction: "Simulate Valuation Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor opening count report for WIN_5521...", tone: "default" },
          { text: "Assembling 211 sealed store submissions...", tone: "default" },
          { text: "Confirming timestamps within window...", tone: "default" },
          { text: "Isolating 3 late submissions...", tone: "default" },
          { text: "[SUCCESS] Verified valuation basis returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Simultaneous count verification is a horizontal capability. Here is how different actors in a retail audit put the shared count ledger to work.",
    sectors: [
      { icon: Search, title: "Audit Firms", description: "Prove that inventory counts across hundreds of stores were genuinely simultaneous, replacing an impossible physical coordination problem with a verifiable, timestamped record.", assetTypes: ["Count Windows", "Sealed Submissions", "Valuation Bases"] },
      { icon: Building2, title: "Retail Chains", description: "Give auditors trustworthy count evidence without freezing every store manually, and detect stock movement between locations that would otherwise inflate the count.", assetTypes: ["Store Counts", "POS Reconciliations", "Variance Reports"] },
      { icon: Package, title: "Warehouse & Logistics", description: "Anchor distribution-center counts on the same synchronized clock as the stores they supply, so chain-wide stock is valued against one consistent instant.", assetTypes: ["DC Counts", "Transfer Logs", "Stock Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are streaming quantities from a chain's central POS or capturing counts from a store scanner app, Cerulea routes both into one synchronized count ledger.",
    tracks: [
      {
        title: "Track A: Retail POS Bridging",
        description:
          "For chains on central POS and warehouse systems. Live quantities are translated into signed on-chain reconciliations through the oracle gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Central POS / WMS", sublabel: "Chain Inventory System", icon: Workflow, accent: false },
          { label: "Cerulea Oracle Gateway", sublabel: "Quantity Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Synchronized Count Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Store Scanner Capture",
        description:
          "For store staff counting on handhelds. A scanner app signs each count submission from a store wallet and routes it directly to the ledger inside the window.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Store Scanner App", sublabel: "Location Devices", icon: Fingerprint, accent: false },
          { label: "Count Validators", sublabel: "Window Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Count Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a synchronized count network with POS oracle reconciliation, windowed submission sealing, and a valuation-ready trail from scratch requires specialised engineers and long retail systems integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Window & Reconciliation Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects retail systems integration benchmarks. Wiring each store's POS and warehouse feeds together, building custom windowing and reconciliation logic, and shipping a valuation-ready trail for an average chain takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your window and reconciliation rules into pre-audited WebAssembly binaries and provisions the synchronized count ledger and valuation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "related-party-transaction-disclosure-tracking",
    icon: Network,
    eyebrow: "Related Party Disclosure Engine",
    headline1: "Flag the related party.",
    headline2: "Never miss a disclosure.",
    heroDescription:
      "Maintain a verified record of related party transactions and their disclosure status as they occur. Built on Civil Registry, Compliance Attestations, and Audit Logs, the network flags transactions with registered related parties automatically and tracks whether each was properly disclosed, so nothing undisclosed surfaces during an audit.",
    heroCta: "Deploy Disclosure Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace a manual, error-prone hunt for related party dealings with an automatic flag the moment a transaction touches a registered party.",
    mechanics: [
      { title: "Related Party Registry", description: "Directors, major shareholders, and their associated entities are recorded in the Civil Registry, so the system holds a live map of who counts as a related party across the organization." },
      { title: "Automatic Flagging", description: "Each transaction is checked against the registry as it posts, and any dealing with a related party is flagged instantly instead of being missed in a manual quarterly review." },
      { title: "Disclosure Status Tracking", description: "Every flagged transaction carries a disclosure state, so the compliance team sees at a glance which related party dealings still need to be disclosed and which are complete." },
      { title: "Attested Disclosures", description: "Compliance Attestations record each disclosure against the transaction it covers, binding the act of disclosing to a specific dealing and a responsible officer." },
      { title: "Entity Graph Resolution", description: "The network resolves associated entities and indirect relationships, catching transactions with a director's associated company that a name-only check would miss." },
      { title: "Audit-Proof Record", description: "The Audit Logs module preserves the flag, the disclosure, and their timing, so an auditor confirms disclosure completeness from a verifiable record rather than sampling." },
    ],
    lifecycleTitle: "The Disclosure Lifecycle",
    lifecycleSubtitle:
      "Follow a single transaction from posting to a related party flag, a recorded disclosure, and audit confirmation.",
    lifecycleSteps: [
      {
        label: "Party Registration",
        description:
          "Directors, major shareholders, and their associated entities are registered. The Civil Registry becomes the live reference for what counts as a related party.",
        icon: Users,
        logFilename: "cerulea_rpt.log",
        logLines: [
          { text: "[SYS] Registering related party set...", time: "07:20:05", tone: "default" },
          { text: "[CMD] registerParty { id: \"RP_0x71\", type: \"DIRECTOR_ASSOC\" }", time: "07:20:05", tone: "primary" },
          { text: "[AUTH] Linking associated entities to director...", time: "07:20:06", tone: "secondary" },
          { text: "[OK] Related party RP_0x71 registered on-chain.", time: "07:20:06", tone: "success" },
        ],
      },
      {
        label: "Transaction Flagging",
        description:
          "A transaction posts and is checked against the registry. A dealing with a registered associated entity trips the related party flag automatically.",
        icon: Network,
        logFilename: "cerulea_rpt.log",
        logLines: [
          { text: "[SYS] Screening transaction TXN_4412 against registry...", time: "10:33:19", tone: "default" },
          { text: "[CMD] screen(TXN_4412, counterparty: \"ENT_0x88\")", time: "10:33:19", tone: "primary" },
          { text: "[SYS] Match: ENT_0x88 linked to director RP_0x71.", time: "10:33:20", tone: "default" },
          { text: "[OK] Related party flag raised. Disclosure pending.", time: "10:33:20", tone: "error" },
        ],
      },
      {
        label: "Disclosure Recording",
        description:
          "The responsible officer discloses the dealing. Compliance Attestations bind the disclosure to the transaction and move its status to disclosed.",
        icon: FileCheck,
        logFilename: "cerulea_rpt.log",
        logLines: [
          { text: "[SYS] Recording disclosure for TXN_4412...", time: "14:15:47", tone: "default" },
          { text: "[CMD] discloseTxn(TXN_4412, officer: \"CFO_0x12\")", time: "14:15:47", tone: "primary" },
          { text: "[AUTH] Attesting disclosure against transaction...", time: "14:15:48", tone: "secondary" },
          { text: "[OK] Status set to DISCLOSED. Bound to officer.", time: "14:15:48", tone: "success" },
        ],
      },
      {
        label: "Audit Confirmation",
        description:
          "The auditor reviews related party completeness. The chain returns every flagged dealing and its disclosure state, confirming nothing undisclosed remains.",
        icon: Search,
        logFilename: "cerulea_rpt.log",
        logLines: [
          { text: "[SYS] Auditor requesting related party summary...", time: "16:40:11", tone: "default" },
          { text: "[CMD] disclosureReport(period: \"FY2026\")", time: "16:40:11", tone: "primary" },
          { text: "[SYS] 37 flagged dealings, 37 disclosed...", time: "16:40:12", tone: "default" },
          { text: "[OK] No undisclosed related party transactions found.", time: "16:40:12", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes related party disclosure into modular contracts. Each layer registers parties, screens transactions, records disclosures, and exposes completeness without any single officer controlling the record.",
    layers: [
      {
        title: "Civil Registry",
        subtitle: "The Party Graph",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Party Graph",
          description:
            "The foundational data layer. It records directors, major shareholders, and their associated entities as a linked graph, so the system knows exactly who and what counts as a related party.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PartyRegistry {\n  struct Party {\n    bytes32 id;\n    uint8 kind;\n    bytes32 linkedTo;\n    bool active;\n  }\n\n  mapping(bytes32 => Party) public parties;\n  mapping(bytes32 => bool) public isRelated;\n\n  function register(bytes32 id, uint8 kind, bytes32 linkedTo) external onlyCompliance {\n    parties[id] = Party(id, kind, linkedTo, true);\n    isRelated[id] = true;\n  }\n}",
        simAction: "Simulate Party Register",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading director declaration RP_0x71...", tone: "default" },
          { text: "Linking associated entity ENT_0x88...", tone: "default" },
          { text: "Marking both as related in graph...", tone: "default" },
          { text: "Writing party graph to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Related party set registered.", tone: "success" },
        ],
      },
      {
        title: "Transaction Screen",
        subtitle: "The Flag Hook",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Flag Hook",
          description:
            "Catches dealings automatically. It screens each transaction's counterparty against the party graph as it posts, raising a related party flag the instant a match, direct or indirect, is found.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function screen(bytes32 txnId, bytes32 counterparty) external returns (bool) {\n    if (isRelated[counterparty] || isRelated[parties[counterparty].linkedTo]) {\n      flagged[txnId] = true;\n      status[txnId] = Status.Pending;\n      emit RelatedPartyFlagged(txnId, counterparty);\n    }\n    return flagged[txnId];\n}",
        simAction: "Simulate Transaction Screen",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Screening TXN_4412 counterparty...", tone: "default" },
          { text: "Resolving ENT_0x88 against party graph...", tone: "default" },
          { text: "Following link to director RP_0x71...", tone: "default" },
          { text: "Raising related party flag...", tone: "default" },
          { text: "[SUCCESS] Dealing flagged, disclosure pending.", tone: "success" },
        ],
      },
      {
        title: "Compliance Attestations",
        subtitle: "The Disclosure Seal",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Disclosure Seal",
          description:
            "Binds disclosure to dealing. When an officer discloses a flagged transaction, this module attests it against that transaction and a responsible identity, moving its status to disclosed on-chain.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function disclose(bytes32 txnId) external onlyOfficer {\n    require(flagged[txnId], \"Not flagged\");\n    require(status[txnId] == Status.Pending, \"Already disclosed\");\n    status[txnId] = Status.Disclosed;\n    disclosedBy[txnId] = msg.sender;\n    emit Disclosed(txnId, msg.sender);\n}",
        simAction: "Simulate Disclosure",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Officer CFO_0x12 disclosing TXN_4412...", tone: "default" },
          { text: "Verifying transaction is flagged and pending...", tone: "default" },
          { text: "Attesting disclosure to transaction...", tone: "default" },
          { text: "Advancing status to DISCLOSED...", tone: "default" },
          { text: "[SUCCESS] Disclosure sealed to officer.", tone: "success" },
        ],
      },
      {
        title: "Audit Logs",
        subtitle: "The Completeness Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Completeness Window",
          description:
            "A read-only trail that returns every flagged dealing and its disclosure state for a period, so an auditor confirms related party completeness from a verifiable record instead of a sample.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function disclosureReport(bytes32 period) external view returns (uint256 flaggedCount, uint256 disclosedCount) {\n    return (periodFlagged[period], periodDisclosed[period]);\n}",
        simAction: "Simulate Completeness Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor opening report for FY2026...", tone: "default" },
          { text: "Counting 37 flagged related party dealings...", tone: "default" },
          { text: "Matching each against disclosure state...", tone: "default" },
          { text: "Confirming zero pending disclosures...", tone: "default" },
          { text: "[SUCCESS] Disclosure completeness verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automatic related party detection is a horizontal capability. Here is how different actors put the shared disclosure ledger to work.",
    sectors: [
      { icon: Building2, title: "Corporate Compliance Teams", description: "Hold a live map of related parties and get every dealing flagged as it posts, replacing an error-prone manual hunt with an automatic, complete disclosure register.", assetTypes: ["Party Registers", "Flagged Dealings", "Disclosure States"] },
      { icon: Search, title: "External Auditors", description: "Confirm related party completeness from a verifiable record rather than a sample, so no undisclosed dealing surfaces late in the audit.", assetTypes: ["Disclosure Reports", "Audit Trails", "Completeness Attestations"] },
      { icon: Landmark, title: "Boards & Regulators", description: "Review a continuous record of related party activity and its disclosure, strengthening governance oversight without manual board-pack reconciliation.", assetTypes: ["Governance Records", "Related Party Logs", "Oversight Summaries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are streaming transactions from an enterprise ERP or capturing party declarations from a governance portal, Cerulea routes both into one disclosure record.",
    tracks: [
      {
        title: "Track A: Enterprise ERP Bridging",
        description:
          "For finance teams on legacy ERP. Posted transactions are translated into signed on-chain screenings against the party graph through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy ERP / GL", sublabel: "Corporate Accounting", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Screening & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Disclosure Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Governance Portal Capture",
        description:
          "For officers declaring parties and disclosures from a portal. A wallet-signed session routes each registration and disclosure directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Governance Portal", sublabel: "Officer Devices", icon: Fingerprint, accent: false },
          { label: "Compliance Validators", sublabel: "Disclosure Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Disclosure Record", icon: Network, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a related party disclosure network with an entity graph, automatic transaction screening, and attested disclosures from scratch requires specialised engineers and long ERP integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Screening & Disclosure Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise governance-tooling benchmarks. Building the party graph, wiring ERP screening, and shipping an attested disclosure register for an average group takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your screening and disclosure rules into pre-audited WebAssembly binaries and provisions the disclosure ledger and completeness view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "statutory-compliance-calendar-tracking-for-multi-entity-corporate-grou",
    icon: FileCheck,
    eyebrow: "Group Compliance Calendar",
    headline1: "One view, every entity.",
    headline2: "Never miss a filing.",
    heroDescription:
      "Track the filing status of every statutory requirement across all entities in a corporate group on one verified calendar. Built on Compliance Attestations, Notifications, and Audit Logs, the network gives the compliance team a single consolidated view instead of checking each subsidiary separately and risking a penalty from one missed deadline.",
    heroCta: "Deploy Compliance Calendars",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Consolidate every subsidiary's statutory deadlines into one verified calendar with proof of completion.",
    mechanics: [
      { title: "Group-Wide Calendar", description: "Every entity's statutory requirements, annual returns, board minutes, and tax filings are registered on one shared calendar, so the compliance team sees the whole group rather than logging into each subsidiary's system." },
      { title: "Per-Entity Obligations", description: "Each requirement is scoped to a specific entity and due date, so an obligation for one subsidiary is tracked distinctly and cannot be lost inside a group-level summary." },
      { title: "Deadline Notifications", description: "The Notifications module escalates upcoming and overdue filings to the responsible officer, so a deadline for even one entity is surfaced before it triggers a penalty." },
      { title: "Attested Completion", description: "When a filing is made, Compliance Attestations record its completion against the requirement, turning a checkbox into verifiable proof the obligation was met." },
      { title: "Status Roll-Up", description: "Completion states roll up from entity to group, so leadership reads a single consolidated compliance posture across dozens of subsidiaries at a glance." },
      { title: "Penalty-Proof Trail", description: "The Audit Logs module keeps a timestamped record of each filing and its proof, so the group can demonstrate compliance to a regulator without reconstructing paper files." },
    ],
    lifecycleTitle: "The Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a single statutory requirement from registration on the group calendar to a notified deadline and attested completion.",
    lifecycleSteps: [
      {
        label: "Requirement Registration",
        description:
          "A statutory obligation is registered for a subsidiary. The calendar records the entity, requirement type, and due date as a tracked item.",
        icon: ScrollText,
        logFilename: "cerulea_compcal.log",
        logLines: [
          { text: "[SYS] Registering statutory requirement...", time: "06:40:12", tone: "default" },
          { text: "[CMD] addRequirement { entity: \"SUB_0x21\", type: \"ANNUAL_RETURN\", due: \"2026-10-30\" }", time: "06:40:12", tone: "primary" },
          { text: "[AUTH] Scoping obligation to entity and officer...", time: "06:40:13", tone: "secondary" },
          { text: "[OK] Requirement REQ_9021 tracked on calendar.", time: "06:40:13", tone: "success" },
        ],
      },
      {
        label: "Deadline Notification",
        description:
          "As the due date nears, the Notifications module escalates the pending filing to the responsible officer, so it is not overlooked among many entities.",
        icon: Radio,
        logFilename: "cerulea_compcal.log",
        logLines: [
          { text: "[SYS] Scanning calendar for approaching deadlines...", time: "09:00:00", tone: "default" },
          { text: "[CMD] notifyDue(REQ_9021, daysLeft: 7)", time: "09:00:01", tone: "primary" },
          { text: "[SYS] Escalating to officer SEC_0x14...", time: "09:00:01", tone: "default" },
          { text: "[OK] Reminder dispatched. Status still PENDING.", time: "09:00:02", tone: "secondary" },
        ],
      },
      {
        label: "Filing Completion",
        description:
          "The officer files with the authority and records completion. Compliance Attestations bind proof of filing to the requirement and mark it done.",
        icon: FileCheck,
        logFilename: "cerulea_compcal.log",
        logLines: [
          { text: "[SYS] Recording completion for REQ_9021...", time: "13:22:38", tone: "default" },
          { text: "[CMD] completeRequirement(REQ_9021, ref: \"MCA_ACK_5567\")", time: "13:22:38", tone: "primary" },
          { text: "[AUTH] Attesting filing acknowledgement to requirement...", time: "13:22:39", tone: "secondary" },
          { text: "[OK] Requirement marked COMPLETE. Proof anchored.", time: "13:22:39", tone: "success" },
        ],
      },
      {
        label: "Group Roll-Up",
        description:
          "Leadership reviews the consolidated view. The chain rolls up completion across all entities, showing the group's compliance posture in one query.",
        icon: PieChart,
        logFilename: "cerulea_compcal.log",
        logLines: [
          { text: "[SYS] Compliance head opening group view...", time: "17:10:24", tone: "default" },
          { text: "[CMD] groupStatus(period: \"FY2026\")", time: "17:10:24", tone: "primary" },
          { text: "[SYS] 312 of 318 requirements complete across 24 entities...", time: "17:10:25", tone: "default" },
          { text: "[OK] Consolidated posture returned. 6 pending flagged.", time: "17:10:25", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes group compliance tracking into modular contracts. Each layer registers, notifies, attests, and rolls up obligations without any single subsidiary controlling the group view.",
    layers: [
      {
        title: "Requirement Registry",
        subtitle: "The Obligation Ledger",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Obligation Ledger",
          description:
            "The foundational data layer. It records each statutory requirement scoped to an entity, type, and due date, so every obligation across the group is tracked distinctly rather than lumped into a summary.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RequirementRegistry {\n  struct Requirement {\n    bytes32 entity;\n    uint8 kind;\n    uint256 dueDate;\n    uint8 status;\n    address officer;\n  }\n\n  mapping(bytes32 => Requirement) public reqs;\n\n  function add(bytes32 id, bytes32 entity, uint8 kind, uint256 due, address officer) external {\n    reqs[id] = Requirement(entity, kind, due, 0, officer);\n  }\n}",
        simAction: "Simulate Requirement Add",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading obligation for entity SUB_0x21...", tone: "default" },
          { text: "Setting due date 2026-10-30...", tone: "default" },
          { text: "Assigning responsible officer SEC_0x14...", tone: "default" },
          { text: "Writing requirement to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Requirement REQ_9021 tracked.", tone: "success" },
        ],
      },
      {
        title: "Notification Engine",
        subtitle: "The Deadline Watcher",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Deadline Watcher",
          description:
            "Prevents missed filings. It scans the calendar for approaching and overdue requirements and escalates each to its responsible officer, so a single entity's deadline is never lost in the group.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function notifyDue(bytes32 id, uint256 daysLeft) external onlyScheduler {\n    require(reqs[id].status == 0, \"Not pending\");\n    emit DeadlineApproaching(id, reqs[id].officer, daysLeft);\n    if (block.timestamp > reqs[id].dueDate) emit Overdue(id, reqs[id].entity);\n}",
        simAction: "Simulate Deadline Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning 318 requirements for due dates...", tone: "default" },
          { text: "Finding REQ_9021 due in 7 days...", tone: "default" },
          { text: "Escalating to officer SEC_0x14...", tone: "default" },
          { text: "Emitting deadline notification...", tone: "default" },
          { text: "[SUCCESS] Reminder dispatched on-chain.", tone: "success" },
        ],
      },
      {
        title: "Compliance Attestations",
        subtitle: "The Completion Seal",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Completion Seal",
          description:
            "Turns a checkbox into proof. When a filing is made, this module attests its acknowledgement reference against the requirement and marks it complete, so completion is verifiable rather than asserted.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function complete(bytes32 id, bytes32 ackRef) external {\n    require(msg.sender == reqs[id].officer, \"Not officer\");\n    require(reqs[id].status == 0, \"Already complete\");\n    reqs[id].status = 1;\n    proof[id] = ackRef;\n    emit RequirementCompleted(id, ackRef);\n}",
        simAction: "Simulate Completion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Officer SEC_0x14 recording filing...", tone: "default" },
          { text: "Verifying obligation still pending...", tone: "default" },
          { text: "Anchoring acknowledgement MCA_ACK_5567...", tone: "default" },
          { text: "Marking requirement complete...", tone: "default" },
          { text: "[SUCCESS] Completion sealed with proof.", tone: "success" },
        ],
      },
      {
        title: "Audit Logs",
        subtitle: "The Group Window",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Group Window",
          description:
            "A read-only roll-up that returns completion across every entity for a period, giving leadership and regulators one consolidated compliance posture instead of per-subsidiary checks.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function groupStatus(bytes32 period) external view returns (uint256 total, uint256 complete, uint256 overdue) {\n    return (periodTotal[period], periodComplete[period], periodOverdue[period]);\n}",
        simAction: "Simulate Group Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compliance head opening group view...", tone: "default" },
          { text: "Rolling up 318 requirements across 24 entities...", tone: "default" },
          { text: "Counting complete and overdue states...", tone: "default" },
          { text: "Flagging 6 pending obligations...", tone: "default" },
          { text: "[SUCCESS] Consolidated posture returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A consolidated statutory calendar is a horizontal capability. Here is how different actors in a corporate group put the shared calendar to work.",
    sectors: [
      { icon: Building2, title: "Group Compliance Teams", description: "Track every subsidiary's statutory deadlines on one calendar with proof of completion, replacing entity-by-entity checks with a single consolidated view.", assetTypes: ["Obligation Registers", "Completion Proofs", "Group Roll-Ups"] },
      { icon: IdCard, title: "Company Secretaries", description: "Receive escalations for the specific filings they own and record attested completion, so no annual return or board minute slips past its deadline.", assetTypes: ["Entity Requirements", "Filing Acknowledgements", "Reminder Logs"] },
      { icon: Landmark, title: "Boards & Regulators", description: "Read a verifiable compliance posture for the whole group and confirm filings from a timestamped trail, without reconstructing paper records per entity.", assetTypes: ["Compliance Postures", "Audit Trails", "Filing Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a group's legacy compliance software or capturing filings from a company secretary's portal, Cerulea routes both into one group calendar.",
    tracks: [
      {
        title: "Track A: Group System Bridging",
        description:
          "For groups on legacy compliance-management software. Existing requirement and filing events are translated into signed on-chain calendar items through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy GRC Software", sublabel: "Group Compliance System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Item Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Group Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Secretary Portal Capture",
        description:
          "For company secretaries filing from a portal. A wallet-signed session routes each completion attestation directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Secretary Portal", sublabel: "Officer Devices", icon: Fingerprint, accent: false },
          { label: "Compliance Validators", sublabel: "Calendar Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Calendar Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a group compliance calendar with per-entity obligation tracking, deadline escalation, and attested completion from scratch requires specialised engineers and long integration cycles across subsidiaries. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Obligation & Notification Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects group governance-tooling benchmarks. Consolidating each subsidiary's requirements, building custom deadline escalation, and shipping an attested completion roll-up for an average group takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your obligation and notification rules into pre-audited WebAssembly binaries and provisions the group calendar ledger and roll-up view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "forensic-audit-evidence-chain-for-fraud-investigations",
    icon: Shield,
    eyebrow: "Forensic Evidence Custody",
    headline1: "Seal every exhibit.",
    headline2: "Hold up in court.",
    heroDescription:
      "Anchor each piece of evidence collected during a forensic audit at the moment it is gathered, with access controls limiting it to authorized investigators. Built on Evidence Chain, Provenance Notary, and Audit Logs, the network maintains a chain of custody that withstands scrutiny if the matter proceeds to litigation.",
    heroCta: "Deploy Evidence Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a collection of forensic documents into an unbroken, admissible chain of custody from the moment of seizure.",
    mechanics: [
      { title: "Collection-Time Anchoring", description: "Each document or data extract is hashed and anchored the instant it is collected, fixing its content and time so a defense cannot later argue it was altered after seizure." },
      { title: "Unbroken Custody Chain", description: "Every handoff between investigators is co-signed on-chain, so the Evidence Chain records an unbroken custody trail with no gap that could undermine admissibility." },
      { title: "Investigator Access Control", description: "Only authorized investigators can view an exhibit, so sensitive evidence is protected from leakage while the forensic audit is live." },
      { title: "Tamper-Evident Exhibits", description: "The Provenance Notary binds each exhibit to its digest, so any change to a collected document breaks its hash and is immediately visible to opposing counsel and the court." },
      { title: "Timeline Reconstruction", description: "The chain reconstructs the exact sequence of collection and custody, letting the investigation present a defensible timeline rather than a folder of undated files." },
      { title: "Litigation-Ready Trail", description: "The Audit Logs module produces a complete record of who collected, accessed, and handled each exhibit, ready to be tendered if the matter reaches litigation." },
    ],
    lifecycleTitle: "The Evidence Lifecycle",
    lifecycleSubtitle:
      "Follow a single exhibit from collection at the scene to sealed custody handoffs and courtroom-ready verification.",
    lifecycleSteps: [
      {
        label: "Evidence Collection",
        description:
          "An investigator collects a document or data extract. The Evidence Chain hashes it and anchors it with the collector's identity and time as the origin of custody.",
        icon: FileCheck,
        logFilename: "cerulea_forensic.log",
        logLines: [
          { text: "[SYS] Initializing Exhibit Custody Manifest...", time: "05:48:14", tone: "default" },
          { text: "[CMD] collectExhibit { case: \"FR_2026_09\", sha256: \"0x7d1a\" }", time: "05:48:14", tone: "primary" },
          { text: "[AUTH] Verifying investigator credential INV_0x62...", time: "05:48:15", tone: "secondary" },
          { text: "[OK] Exhibit EXH_3391 anchored at collection.", time: "05:48:15", tone: "success" },
        ],
      },
      {
        label: "Custody Handoff",
        description:
          "The exhibit passes to a forensic analyst. The receiver co-signs custody, extending the chain with no gap that a defense could exploit.",
        icon: Handshake,
        logFilename: "cerulea_forensic.log",
        logLines: [
          { text: "[SYS] Custody handoff pending for EXH_3391...", time: "08:30:22", tone: "default" },
          { text: "[CMD] acceptCustody(EXH_3391, analyst: \"ANL_0x39\")", time: "08:30:26", tone: "primary" },
          { text: "[SYS] Co-signature recorded from both investigators.", time: "08:30:26", tone: "default" },
          { text: "[OK] Custody chain extended. No gap present.", time: "08:30:27", tone: "success" },
        ],
      },
      {
        label: "Restricted Access",
        description:
          "An authorized reviewer opens the exhibit under access control. The read is logged and the exhibit's digest re-verified, keeping it protected and tamper-evident.",
        icon: Lock,
        logFilename: "cerulea_forensic.log",
        logLines: [
          { text: "[SYS] Access request for EXH_3391 (scoped)...", time: "11:14:55", tone: "default" },
          { text: "[CMD] openExhibit(EXH_3391, viewer: \"REV_0x11\")", time: "11:14:55", tone: "primary" },
          { text: "[AUTH] Confirming viewer on authorized list...", time: "11:14:56", tone: "secondary" },
          { text: "[OK] Access granted and logged. Digest re-verified.", time: "11:14:56", tone: "success" },
        ],
      },
      {
        label: "Court Verification",
        description:
          "In litigation, counsel verifies the exhibit and its custody. The chain returns an unbroken trail from collection, supporting admissibility.",
        icon: Gavel,
        logFilename: "cerulea_forensic.log",
        logLines: [
          { text: "[SYS] Verifying EXH_3391 for tendered evidence...", time: "15:39:41", tone: "default" },
          { text: "[CMD] verifyCustody(EXH_3391)", time: "15:39:41", tone: "primary" },
          { text: "[SYS] Replaying custody chain and access log...", time: "15:39:42", tone: "default" },
          { text: "[OK] Unbroken chain confirmed. Exhibit admissible.", time: "15:39:42", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes forensic evidence custody into modular contracts. Each layer anchors, transfers, gates, and verifies an exhibit without any single investigator controlling the chain.",
    layers: [
      {
        title: "Evidence Chain",
        subtitle: "The Collection Anchor",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Collection Anchor",
          description:
            "The foundational data layer. It binds each exhibit to its digest, its case, and its collector at the moment of seizure, fixing content and time so later tampering is provable.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract EvidenceChain {\n  struct Exhibit {\n    bytes32 docHash;\n    bytes32 caseId;\n    address collector;\n    uint256 collectedAt;\n    address custodian;\n  }\n\n  mapping(bytes32 => Exhibit) public exhibits;\n\n  function collect(bytes32 id, bytes32 docHash, bytes32 caseId) external {\n    exhibits[id] = Exhibit(docHash, caseId, msg.sender, block.timestamp, msg.sender);\n  }\n}",
        simAction: "Simulate Evidence Collect",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading investigator credential INV_0x62...", tone: "default" },
          { text: "Computing SHA-256 digest of exhibit...", tone: "default" },
          { text: "Anchoring collection time and case...", tone: "default" },
          { text: "Writing exhibit to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Exhibit EXH_3391 anchored at seizure.", tone: "success" },
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
            "Prevents custody gaps. An exhibit cannot change hands until the receiver co-signs, so the chain of custody is an unbroken sequence of mutual acceptances that survives cross-examination.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function acceptCustody(bytes32 id) external {\n    Handoff storage h = pending[id];\n    require(h.receiver == msg.sender, \"Not receiver\");\n    require(!h.settled, \"Already settled\");\n    h.settled = true;\n    exhibits[id].custodian = msg.sender;\n    emit CustodyAccepted(id, msg.sender, block.timestamp);\n}",
        simAction: "Simulate Custody Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Analyst ANL_0x39 reviewing handoff...", tone: "default" },
          { text: "Confirming receiver identity...", tone: "default" },
          { text: "Recording co-signature from both parties...", tone: "default" },
          { text: "Extending custody chain by one hop...", tone: "default" },
          { text: "[SUCCESS] Custody transferred with no gap.", tone: "success" },
        ],
      },
      {
        title: "Access Gate",
        subtitle: "The Investigator Lock",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Investigator Lock",
          description:
            "Protects sensitive evidence. It gates every read to authorized investigators and logs each access, so exhibits are shielded from leakage while the audit is live and every view is recorded.",
          platformFunction: "Access Governance",
        },
        codeSnippet:
          "function openExhibit(bytes32 id) external returns (bytes32) {\n    require(authorized[exhibits[id].caseId][msg.sender], \"Not authorized\");\n    accessLog[id].push(Access(msg.sender, block.timestamp));\n    return exhibits[id].docHash;\n}",
        simAction: "Simulate Scoped Access",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reviewer REV_0x11 requesting exhibit...", tone: "default" },
          { text: "Checking authorization for case FR_2026_09...", tone: "default" },
          { text: "Appending access to exhibit log...", tone: "default" },
          { text: "Re-verifying stored digest...", tone: "default" },
          { text: "[SUCCESS] Access granted and recorded.", tone: "success" },
        ],
      },
      {
        title: "Audit Logs",
        subtitle: "The Court Window",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Court Window",
          description:
            "A read-only trail that returns the full collection, custody, and access history of an exhibit, so counsel can tender an unbroken chain of custody that withstands scrutiny in litigation.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function custodyTrail(bytes32 id) external view returns (Exhibit memory, Access[] memory) {\n    return (exhibits[id], accessLog[id]);\n}",
        simAction: "Simulate Custody Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Counsel opening custody trail for EXH_3391...", tone: "default" },
          { text: "Replaying collection and 2 handoffs...", tone: "default" },
          { text: "Listing every logged access...", tone: "default" },
          { text: "Confirming digest unchanged since seizure...", tone: "default" },
          { text: "[SUCCESS] Unbroken custody trail returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Admissible evidence custody is a horizontal capability. Here is how different actors in a fraud investigation put the shared evidence chain to work.",
    sectors: [
      { icon: Search, title: "Forensic Audit Teams", description: "Anchor every document at collection and co-sign each handoff, so the investigation carries an unbroken, tamper-evident chain of custody from day one.", assetTypes: ["Collected Exhibits", "Custody Handoffs", "Access Logs"] },
      { icon: Scale, title: "Litigation Counsel", description: "Tender evidence with a verifiable custody trail, so admissibility is defended by a cryptographic record rather than contested affidavits about handling.", assetTypes: ["Tendered Exhibits", "Custody Proofs", "Chain Attestations"] },
      { icon: Building2, title: "Corporate Investigations", description: "Run internal fraud probes with access-controlled evidence, protecting sensitive material from leakage while preserving an audit-ready record of every reviewer.", assetTypes: ["Case Files", "Restricted Exhibits", "Reviewer Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are ingesting extracts from enterprise forensic tools or capturing field collections from an investigator's device, Cerulea routes both into one evidence chain.",
    tracks: [
      {
        title: "Track A: Forensic Tooling Bridging",
        description:
          "For teams on legacy forensic and e-discovery platforms. Collected artifacts are translated into signed on-chain exhibits through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Forensic / eDiscovery Tool", sublabel: "Investigation Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Exhibit Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Evidence Custody Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Collection Capture",
        description:
          "For investigators collecting in the field. A wallet-signed app anchors each exhibit and handoff from a device and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field Capture App", sublabel: "Investigator Devices", icon: Fingerprint, accent: false },
          { label: "Custody Validators", sublabel: "Chain Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Evidence Record", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a forensic evidence chain with collection-time anchoring, co-signed custody handoffs, and access-controlled exhibits from scratch requires specialised engineers and long forensic tooling integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Access Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects forensic tooling integration benchmarks. Wiring collection tools to a ledger, building custom custody handoff and access logic, and shipping a litigation-ready trail for an average investigation takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and access rules into pre-audited WebAssembly binaries and provisions the evidence chain and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "smart-contract-based-legal-agreement-execution",
    icon: Handshake,
    eyebrow: "Self-Enforcing Agreement Layer",
    headline1: "Sign the agreement.",
    headline2: "Let it enforce itself.",
    heroDescription:
      "Automate the standard obligations of commercial agreements so escrow and payment are self-enforcing and disputes are evidence-based. Built on Document Signing, Escrow and Conditional Settlement, and the Logic and Actions Editor, the network releases a milestone payment the moment completion is verified, with no invoice raised and no approval chased.",
    heroCta: "Deploy Legal Contracts",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn the repeating, standard terms of commercial contracts into self-executing logic that settles without manual enforcement.",
    mechanics: [
      { title: "On-Chain Signing", description: "Parties execute the agreement with Document Signing, binding the signed terms to their identities so the contract that self-enforces is the exact one both sides agreed to." },
      { title: "Conditional Settlement", description: "Escrow and Conditional Settlement holds funds until a defined condition is met, so payment releases against verified performance rather than a chased invoice." },
      { title: "Visual Term Logic", description: "The Logic and Actions Editor encodes standard obligations, milestones, penalties, and release triggers, as executable rules without hand-writing contract code." },
      { title: "Automatic Milestone Release", description: "When a milestone completion event is verified, the contract releases the corresponding payment automatically that same evening, removing invoice, approval, and delay from the loop." },
      { title: "Evidence-Based Disputes", description: "Because every condition and settlement is recorded on-chain, a contested term is resolved against signed evidence, cutting the cost and time of enforcement." },
      { title: "Repeatable Templates", description: "Standard commercial agreements, loans, vendor contracts, escrow arrangements, become reusable templates, so each new deal deploys self-enforcing terms in minutes." },
    ],
    lifecycleTitle: "The Agreement Lifecycle",
    lifecycleSubtitle:
      "Follow a single commercial agreement from signature to a verified milestone and an automatic, same-day settlement.",
    lifecycleSteps: [
      {
        label: "Agreement Signing",
        description:
          "Both parties sign the agreement on-chain. Document Signing binds the terms to their identities, fixing the exact contract that will self-enforce.",
        icon: ScrollText,
        logFilename: "cerulea_legalexec.log",
        logLines: [
          { text: "[SYS] Initializing Agreement Execution Manifest...", time: "09:05:31", tone: "default" },
          { text: "[CMD] signAgreement { deal: \"AGR_7712\", parties: 2 }", time: "09:05:31", tone: "primary" },
          { text: "[AUTH] Verifying both party signatures...", time: "09:05:32", tone: "secondary" },
          { text: "[OK] Agreement AGR_7712 executed and bound.", time: "09:05:32", tone: "success" },
        ],
      },
      {
        label: "Escrow Funding",
        description:
          "The paying party funds escrow. Escrow and Conditional Settlement locks the milestone amount until the defined completion condition is verified.",
        icon: Wallet,
        logFilename: "cerulea_legalexec.log",
        logLines: [
          { text: "[SYS] Locking milestone funds in escrow...", time: "09:41:08", tone: "default" },
          { text: "[CMD] fundEscrow(AGR_7712, milestone: 1, amount: 2500000)", time: "09:41:08", tone: "primary" },
          { text: "[SYS] Condition set: MILESTONE_1_COMPLETE.", time: "09:41:09", tone: "default" },
          { text: "[OK] Escrow funded. Awaiting verified completion.", time: "09:41:09", tone: "success" },
        ],
      },
      {
        label: "Completion Verification",
        description:
          "The construction company delivers the milestone. A verified completion event trips the release condition encoded in the contract logic.",
        icon: FileCheck,
        logFilename: "cerulea_legalexec.log",
        logLines: [
          { text: "[SYS] Receiving milestone completion event...", time: "18:12:44", tone: "default" },
          { text: "[CMD] verifyMilestone(AGR_7712, milestone: 1)", time: "18:12:44", tone: "primary" },
          { text: "[SYS] Completion attested. Release condition met.", time: "18:12:45", tone: "default" },
          { text: "[OK] Condition satisfied. Settlement authorized.", time: "18:12:45", tone: "success" },
        ],
      },
      {
        label: "Automatic Settlement",
        description:
          "The contract releases the milestone payment that same evening. No invoice is raised, no approval chased, and no payment delay occurs.",
        icon: Coins,
        logFilename: "cerulea_legalexec.log",
        logLines: [
          { text: "[SYS] Executing conditional settlement...", time: "18:12:46", tone: "default" },
          { text: "[CMD] release(AGR_7712, milestone: 1)", time: "18:12:46", tone: "primary" },
          { text: "[SYS] Transferring 2,500,000 to contractor wallet...", time: "18:12:46", tone: "default" },
          { text: "[OK] Milestone paid same evening. No invoice raised.", time: "18:12:47", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes self-enforcing agreements into modular contracts. Each layer signs, encodes, escrows, and settles terms without either party manually triggering enforcement.",
    layers: [
      {
        title: "Document Signing",
        subtitle: "The Executed Terms",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Executed Terms",
          description:
            "The foundational agreement layer. It binds the signed contract to both parties' identities and its digest, so the terms that self-enforce are provably the ones both sides agreed to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract Agreement {\n  struct Deal {\n    bytes32 termsHash;\n    address partyA;\n    address partyB;\n    bool executed;\n  }\n\n  mapping(bytes32 => Deal) public deals;\n\n  function sign(bytes32 id, bytes32 termsHash, address counterparty) external {\n    Deal storage d = deals[id];\n    d.termsHash = termsHash; d.partyA = msg.sender; d.partyB = counterparty; d.executed = true;\n  }\n}",
        simAction: "Simulate Agreement Sign",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing agreed contract terms...", tone: "default" },
          { text: "Collecting signature from party A...", tone: "default" },
          { text: "Collecting signature from party B...", tone: "default" },
          { text: "Binding executed terms on-chain...", tone: "default" },
          { text: "[SUCCESS] Agreement AGR_7712 executed.", tone: "success" },
        ],
      },
      {
        title: "Logic & Actions Editor",
        subtitle: "The Term Encoder",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Term Encoder",
          description:
            "Encodes obligations without code. Standard milestones, penalties, and release triggers are expressed as executable rules, so the agreement enforces its own terms rather than waiting on a lawyer to act.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function onMilestoneVerified(bytes32 dealId, uint8 milestone) external {\n    require(conditions[dealId][milestone].verified, \"Not verified\");\n    if (block.timestamp <= conditions[dealId][milestone].deadline) {\n      authorizeRelease(dealId, milestone);\n    } else {\n      applyPenalty(dealId, milestone);\n    }\n}",
        simAction: "Simulate Rule Execution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading encoded milestone rules...", tone: "default" },
          { text: "Evaluating completion against deadline...", tone: "default" },
          { text: "Milestone met inside window...", tone: "default" },
          { text: "Authorizing release action...", tone: "default" },
          { text: "[SUCCESS] Contract logic executed automatically.", tone: "success" },
        ],
      },
      {
        title: "Escrow & Settlement",
        subtitle: "The Conditional Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Vault",
          description:
            "Holds funds against performance. Escrow and Conditional Settlement locks the milestone amount and releases it only when the encoded condition is met, so payment follows verified delivery automatically.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function release(bytes32 dealId, uint8 milestone) external {\n    require(authorized[dealId][milestone], \"Not authorized\");\n    uint256 amt = escrowed[dealId][milestone];\n    escrowed[dealId][milestone] = 0;\n    payable(payeeOf(dealId)).transfer(amt);\n    emit MilestoneSettled(dealId, milestone, amt);\n}",
        simAction: "Simulate Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming release authorization...", tone: "default" },
          { text: "Reading escrowed milestone balance...", tone: "default" },
          { text: "Transferring funds to contractor...", tone: "default" },
          { text: "Zeroing escrow slot...", tone: "default" },
          { text: "[SUCCESS] Milestone settled same evening.", tone: "success" },
        ],
      },
      {
        title: "Dispute Ledger",
        subtitle: "The Evidence Window",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Window",
          description:
            "A read-only trail of signatures, conditions, and settlements, so a contested term is resolved against on-chain evidence rather than a slow, expensive enforcement action.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function dealHistory(bytes32 dealId) external view returns (Deal memory, Settlement[] memory) {\n    return (deals[dealId], settlements[dealId]);\n}",
        simAction: "Simulate Dispute Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Counsel opening deal history AGR_7712...", tone: "default" },
          { text: "Replaying executed terms and conditions...", tone: "default" },
          { text: "Listing every conditional settlement...", tone: "default" },
          { text: "Confirming release matched verified milestone...", tone: "default" },
          { text: "[SUCCESS] Evidence-based record returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Self-enforcing agreements are a horizontal capability. Here is how different actors put the shared contract layer to work.",
    sectors: [
      { icon: Building2, title: "Enterprises & Vendors", description: "Automate repeating vendor, loan, and escrow terms, so standard obligations settle against verified performance instead of chased invoices and manual approvals.", assetTypes: ["Vendor Contracts", "Milestone Escrows", "Settlement Records"] },
      { icon: Scale, title: "Corporate Legal Teams", description: "Encode standard clauses as reusable, self-enforcing templates and resolve contested terms from on-chain evidence, cutting the cost and delay of enforcement.", assetTypes: ["Contract Templates", "Executed Agreements", "Dispute Trails"] },
      { icon: Pickaxe, title: "Construction & Projects", description: "Tie milestone payments to verified completion events, so a delivered project stage triggers same-day settlement with no invoice cycle.", assetTypes: ["Milestone Contracts", "Completion Proofs", "Progress Payments"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an enterprise contract-management system or capturing signatures from a counterparty's wallet, Cerulea routes both into one self-enforcing agreement layer.",
    tracks: [
      {
        title: "Track A: Contract System Bridging",
        description:
          "For enterprises on legacy contract-lifecycle software. Executed agreements are translated into signed on-chain deals with encoded terms through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy CLM Software", sublabel: "Contract Management", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Terms Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Agreement Execution Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Counterparty Wallet Signing",
        description:
          "For parties signing from mobile. A wallet-signed session executes the agreement and funds escrow directly on the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Party Wallet App", sublabel: "Signatory Devices", icon: Fingerprint, accent: false },
          { label: "Settlement Validators", sublabel: "Escrow Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Self-Enforcing Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a self-enforcing agreement network with on-chain signing, encoded term logic, and conditional escrow settlement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Term & Settlement Rules",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise contract-automation benchmarks. Writing custom escrow and milestone logic, integrating signing, and shipping a dispute-ready settlement layer for an average program takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your term and settlement rules into pre-audited WebAssembly binaries and provisions the agreement ledger and escrow layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "intellectual-property-registration-and-licensing-on-chain",
    icon: Copyright,
    eyebrow: "Hybrid IP Registry Layer",
    headline1: "Timestamp the invention.",
    headline2: "Automate the royalty.",
    heroDescription:
      "Stand up a hybrid IP registry with a private ownership ledger and a public licensing layer that distributes royalties automatically. Built on the DID and VC Ledger, Provenance Notary, and Royalty Standard, the network resolves ownership disputes with cryptographic timestamps and pays IP owners without chasing invoices across jurisdictions.",
    heroCta: "Deploy IP Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace slow paper IP registries and cross-border enforcement with a timestamped ownership ledger and automated licensing.",
    mechanics: [
      { title: "Timestamped Ownership", description: "Each IP asset is registered with a cryptographic timestamp on the private ownership ledger, so a priority dispute is settled by an immutable record instead of contested filing dates." },
      { title: "Verifiable Creator Identity", description: "The DID and VC Ledger binds ownership to a verifiable creator or assignee identity, so rights are provably held by the party claiming them across jurisdictions." },
      { title: "Public Licensing Layer", description: "Licensable rights are exposed on a public layer, so licensees can discover and take a license without a slow bilateral negotiation through each national registry." },
      { title: "Automated Royalties", description: "The Royalty Standard distributes royalty payments to IP owners automatically as usage is reported, replacing chased invoices with programmatic settlement." },
      { title: "License Provenance", description: "The Provenance Notary anchors each license grant to the underlying asset, so a licensee's rights and their scope are verifiable rather than resting on a signed PDF." },
      { title: "Cross-Border Enforcement", description: "Because ownership and licenses live on one shared chain, enforcement no longer depends on reconciling separate paper registries in every jurisdiction." },
    ],
    lifecycleTitle: "The IP Lifecycle",
    lifecycleSubtitle:
      "Follow a single IP asset from timestamped registration to a public license and an automated royalty statement.",
    lifecycleSteps: [
      {
        label: "IP Registration",
        description:
          "A creator registers an asset on the private ownership ledger. The contract anchors a cryptographic timestamp and binds the asset to a verifiable identity.",
        icon: Copyright,
        logFilename: "cerulea_iplicense.log",
        logLines: [
          { text: "[SYS] Initializing IP Ownership Manifest...", time: "08:14:20", tone: "default" },
          { text: "[CMD] registerIP { asset: \"IP_5521\", creator: \"DID:0x77\", type: \"PATENT\" }", time: "08:14:20", tone: "primary" },
          { text: "[AUTH] Binding asset to verifiable creator credential...", time: "08:14:21", tone: "secondary" },
          { text: "[OK] IP_5521 registered with cryptographic timestamp.", time: "08:14:21", tone: "success" },
        ],
      },
      {
        label: "License Publication",
        description:
          "The owner publishes licensable rights to the public layer. Terms and scope are anchored, so licensees discover and evaluate the license on-chain.",
        icon: Globe,
        logFilename: "cerulea_iplicense.log",
        logLines: [
          { text: "[SYS] Publishing licensable rights for IP_5521...", time: "10:40:05", tone: "default" },
          { text: "[CMD] publishLicense(IP_5521, scope: \"NON_EXCLUSIVE\", rate: 5)", time: "10:40:05", tone: "primary" },
          { text: "[SYS] License terms anchored to public layer.", time: "10:40:06", tone: "default" },
          { text: "[OK] License LIC_2201 discoverable on-chain.", time: "10:40:06", tone: "success" },
        ],
      },
      {
        label: "License Grant",
        description:
          "A licensee takes the license. The Provenance Notary binds the grant to the asset, fixing the licensee's rights and scope verifiably.",
        icon: Handshake,
        logFilename: "cerulea_iplicense.log",
        logLines: [
          { text: "[SYS] Processing license grant for LIC_2201...", time: "13:22:47", tone: "default" },
          { text: "[CMD] grantLicense(LIC_2201, licensee: \"DID:0x91\")", time: "13:22:47", tone: "primary" },
          { text: "[AUTH] Anchoring grant to underlying asset IP_5521...", time: "13:22:48", tone: "secondary" },
          { text: "[OK] License granted. Rights and scope fixed.", time: "13:22:48", tone: "success" },
        ],
      },
      {
        label: "Royalty Distribution",
        description:
          "Usage is reported and the Royalty Standard distributes payment to the owner automatically, producing a verifiable royalty statement without chased invoices.",
        icon: Coins,
        logFilename: "cerulea_iplicense.log",
        logLines: [
          { text: "[SYS] Receiving usage report for LIC_2201...", time: "17:05:33", tone: "default" },
          { text: "[CMD] distributeRoyalty(LIC_2201, units: 12000)", time: "17:05:33", tone: "primary" },
          { text: "[SYS] Computing owner share at 5 percent rate...", time: "17:05:34", tone: "default" },
          { text: "[OK] Royalty paid to owner. Statement anchored.", time: "17:05:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes on-chain IP into modular contracts. Each layer registers ownership, publishes licenses, anchors grants, and settles royalties without a paper registry controlling the record.",
    layers: [
      {
        title: "DID & VC Ledger",
        subtitle: "The Ownership Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ownership Anchor",
          description:
            "The foundational data layer. It binds each IP asset to a verifiable creator or assignee identity and a cryptographic timestamp, so ownership and priority are provable across jurisdictions.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract IPRegistry {\n  struct Asset {\n    bytes32 ownerDID;\n    uint8 kind;\n    uint256 registeredAt;\n    bytes32 metaHash;\n  }\n\n  mapping(bytes32 => Asset) public assets;\n\n  function register(bytes32 id, bytes32 ownerDID, uint8 kind, bytes32 metaHash) external {\n    assets[id] = Asset(ownerDID, kind, block.timestamp, metaHash);\n  }\n}",
        simAction: "Simulate IP Register",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resolving creator credential DID:0x77...", tone: "default" },
          { text: "Hashing invention metadata...", tone: "default" },
          { text: "Anchoring registration timestamp...", tone: "default" },
          { text: "Writing ownership to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] IP_5521 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Licensing Layer",
        subtitle: "The Public Window",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Public Window",
          description:
            "Exposes licensable rights. It publishes terms and scope to a public layer, so licensees discover and take a license on-chain instead of negotiating through separate national registries.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function publishLicense(bytes32 assetId, uint8 scope, uint16 rateBps) external {\n    require(ownerOf(assetId) == msg.sender, \"Not owner\");\n    bytes32 lic = keccak256(abi.encode(assetId, scope));\n    licenses[lic] = License(assetId, scope, rateBps, true);\n    emit LicensePublished(lic, assetId, rateBps);\n}",
        simAction: "Simulate License Publish",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Owner publishing rights for IP_5521...", tone: "default" },
          { text: "Setting non-exclusive scope and 5 percent rate...", tone: "default" },
          { text: "Anchoring license terms to public layer...", tone: "default" },
          { text: "Indexing license for discovery...", tone: "default" },
          { text: "[SUCCESS] License LIC_2201 published.", tone: "success" },
        ],
      },
      {
        title: "Royalty Standard",
        subtitle: "The Payout Engine",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Payout Engine",
          description:
            "Automates settlement. As usage is reported, it computes and distributes the owner's royalty share programmatically, so IP owners are paid without chasing invoices.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function distribute(bytes32 licId, uint256 units) external onlyReporter {\n    License storage l = licenses[licId];\n    uint256 owed = units * unitPrice[licId] * l.rateBps / 10000;\n    payable(ownerOf(l.assetId)).transfer(owed);\n    emit RoyaltyPaid(licId, owed, units);\n}",
        simAction: "Simulate Royalty Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving usage report of 12,000 units...", tone: "default" },
          { text: "Computing owner share at 5 percent...", tone: "default" },
          { text: "Transferring royalty to owner wallet...", tone: "default" },
          { text: "Anchoring royalty statement...", tone: "default" },
          { text: "[SUCCESS] Royalty distributed automatically.", tone: "success" },
        ],
      },
      {
        title: "Provenance Notary",
        subtitle: "The Rights Window",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rights Window",
          description:
            "A read-only trail of registration, licenses, grants, and payouts, so an owner or a court verifies rights, scope, and priority from one shared record instead of reconciling paper registries.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function rightsHistory(bytes32 assetId) external view returns (Asset memory, License[] memory, Grant[] memory) {\n    return (assets[assetId], assetLicenses[assetId], assetGrants[assetId]);\n}",
        simAction: "Simulate Rights Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resolving rights history for IP_5521...", tone: "default" },
          { text: "Returning timestamped ownership record...", tone: "default" },
          { text: "Listing published licenses and grants...", tone: "default" },
          { text: "Attaching royalty statements...", tone: "default" },
          { text: "[SUCCESS] Verified rights record returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Timestamped IP with automated licensing is a horizontal capability. Here is how different actors put the hybrid registry to work.",
    sectors: [
      { icon: FlaskConical, title: "Technology & R&D", description: "Register inventions with cryptographic timestamps and license them across jurisdictions from one ledger, so priority disputes resolve on evidence and enforcement stops depending on paper.", assetTypes: ["Patents", "Trade Secrets", "License Grants"] },
      { icon: Palette, title: "Creative & Media", description: "Publish licensable works on a public layer and receive automated royalty statements as usage is reported, replacing chased invoices with programmatic payouts.", assetTypes: ["Copyrights", "Usage Reports", "Royalty Statements"] },
      { icon: Scale, title: "IP Counsel & Registries", description: "Verify ownership, scope, and priority from a shared chain, so cross-border enforcement no longer requires reconciling separate national registers.", assetTypes: ["Ownership Records", "License Provenance", "Priority Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a national IP registry or routing native license grants from a creator's wallet, Cerulea provides the exact infrastructure routing required.",
    tracks: [
      {
        title: "Track A: Registry Bridging",
        description:
          "For national and enterprise IP registries. Legacy filing records are translated into signed on-chain ownership anchors through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy IP Registry", sublabel: "National Filing Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Ownership Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Licensing Execution",
        description:
          "For creators and licensees transacting directly. Wallet-signed license grants and royalty reports route straight to the public licensing layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Creator / Licensee Wallet", sublabel: "Rights Holder Devices", icon: Fingerprint, accent: false },
          { label: "Licensing Validators", sublabel: "Grant Consensus", icon: Network, accent: true },
          { label: "Cerulea Public Layer", sublabel: "Royalty Distribution Ledger", icon: Copyright, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a hybrid IP registry with timestamped ownership, a public licensing layer, and automated royalty distribution from scratch requires specialised engineers and long cross-jurisdiction integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Licensing & Royalty Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects IP-tech integration benchmarks. Building a private ownership ledger, wiring a public licensing layer, and shipping automated royalty logic for an average portfolio takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your licensing and royalty rules into pre-audited WebAssembly binaries and provisions the ownership ledger and public licensing layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "class-action-settlement-fund-distribution-to-claimants",
    icon: Coins,
    eyebrow: "Transparent Settlement Fund",
    headline1: "Calculate every share.",
    headline2: "Pay every claimant.",
    heroDescription:
      "Run a transparent settlement fund where each verified claimant receives their calculated share automatically, with full visibility into the distribution. Built on Escrow and Conditional Settlement, Civil Registry, and Audit Logs, the network anchors each claimant's eligibility and share and disburses payment without leaving thousands of claimants in the dark.",
    heroCta: "Deploy Settlement Funds",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque, formula-driven payout to thousands of claimants into a transparent, automatically settled distribution.",
    mechanics: [
      { title: "Verified Claimant Registry", description: "Each claimant's eligibility is registered on the Civil Registry, so only verified members of the class draw from the fund and duplicate or fraudulent claims are excluded." },
      { title: "On-Chain Share Calculation", description: "The distribution formula runs on-chain, so each claimant's share is computed from transparent, auditable inputs rather than a spreadsheet only the administrator can see." },
      { title: "Escrowed Fund Custody", description: "Escrow and Conditional Settlement holds the settlement fund, releasing each share only to a verified claimant, so the administrator cannot misdirect or delay disbursement." },
      { title: "Automatic Disbursement", description: "As claimants are verified, their calculated shares are paid automatically, replacing months of manual check runs with programmatic settlement." },
      { title: "Claimant Visibility", description: "Each claimant can see how their individual share was determined and when it will be paid, ending the black-box experience of traditional settlement administration." },
      { title: "Distribution Audit Trail", description: "The Audit Logs module records every eligibility decision, calculation, and payment, giving the court and class counsel a verifiable account of the whole distribution." },
    ],
    lifecycleTitle: "The Distribution Lifecycle",
    lifecycleSubtitle:
      "Follow a single claimant from fund creation and eligibility verification to a calculated share and automatic payment.",
    lifecycleSteps: [
      {
        label: "Fund Escrow",
        description:
          "The settlement fund is placed in escrow. Escrow and Conditional Settlement locks the total, releasing shares only against verified claimant eligibility.",
        icon: Wallet,
        logFilename: "cerulea_settlement.log",
        logLines: [
          { text: "[SYS] Initializing Settlement Fund Manifest...", time: "08:30:11", tone: "default" },
          { text: "[CMD] fundEscrow { case: \"CLS_2026\", total: 480000000 }", time: "08:30:11", tone: "primary" },
          { text: "[AUTH] Locking fund under distribution conditions...", time: "08:30:12", tone: "secondary" },
          { text: "[OK] Fund FND_9901 escrowed. Awaiting claimants.", time: "08:30:12", tone: "success" },
        ],
      },
      {
        label: "Claimant Verification",
        description:
          "A claimant is verified against the class criteria. The Civil Registry records eligibility, admitting only genuine class members to the fund.",
        icon: IdCard,
        logFilename: "cerulea_settlement.log",
        logLines: [
          { text: "[SYS] Verifying claimant CLM_4471 eligibility...", time: "10:15:40", tone: "default" },
          { text: "[CMD] verifyClaimant(CLM_4471, class: \"CLS_2026\")", time: "10:15:40", tone: "primary" },
          { text: "[SYS] Membership criteria satisfied. No duplicate found.", time: "10:15:41", tone: "default" },
          { text: "[OK] Claimant registered as eligible.", time: "10:15:41", tone: "success" },
        ],
      },
      {
        label: "Share Calculation",
        description:
          "The distribution formula runs on-chain for the claimant. The calculated share is anchored transparently with its inputs visible to the claimant.",
        icon: PieChart,
        logFilename: "cerulea_settlement.log",
        logLines: [
          { text: "[SYS] Computing share for CLM_4471...", time: "13:48:22", tone: "default" },
          { text: "[CMD] calcShare(CLM_4471, tier: 2, weight: 1.4)", time: "13:48:22", tone: "primary" },
          { text: "[SYS] Formula inputs anchored for transparency.", time: "13:48:23", tone: "default" },
          { text: "[OK] Share of 62,400 calculated and visible.", time: "13:48:23", tone: "success" },
        ],
      },
      {
        label: "Automatic Payment",
        description:
          "The escrow releases the calculated share to the verified claimant automatically, with a payment record the claimant can see and confirm.",
        icon: Coins,
        logFilename: "cerulea_settlement.log",
        logLines: [
          { text: "[SYS] Releasing share to CLM_4471...", time: "16:20:55", tone: "default" },
          { text: "[CMD] disburse(CLM_4471, amount: 62400)", time: "16:20:55", tone: "primary" },
          { text: "[SYS] Transferring from fund escrow to claimant...", time: "16:20:56", tone: "default" },
          { text: "[OK] Payment settled. Claimant sees full trail.", time: "16:20:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes settlement distribution into modular contracts. Each layer escrows the fund, verifies claimants, calculates shares, and settles automatically without the administrator controlling the payout in the dark.",
    layers: [
      {
        title: "Civil Registry",
        subtitle: "The Claimant Ledger",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Claimant Ledger",
          description:
            "The foundational data layer. It registers each verified claimant against the class criteria, so only genuine members draw from the fund and duplicate claims are excluded.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ClaimantRegistry {\n  struct Claimant {\n    bytes32 id;\n    bytes32 classId;\n    uint8 tier;\n    bool verified;\n    bool paid;\n  }\n\n  mapping(bytes32 => Claimant) public claimants;\n\n  function verify(bytes32 id, bytes32 classId, uint8 tier) external onlyAdmin {\n    require(!claimants[id].verified, \"Duplicate\");\n    claimants[id] = Claimant(id, classId, tier, true, false);\n  }\n}",
        simAction: "Simulate Claimant Verify",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading claim submission CLM_4471...", tone: "default" },
          { text: "Checking class membership criteria...", tone: "default" },
          { text: "Screening for duplicate claims...", tone: "default" },
          { text: "Writing eligibility to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Claimant CLM_4471 verified.", tone: "success" },
        ],
      },
      {
        title: "Distribution Formula",
        subtitle: "The Transparent Calculator",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transparent Calculator",
          description:
            "Removes the black box. It computes each claimant's share on-chain from published inputs and weights, so a claimant sees exactly how their individual amount was determined.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function calcShare(bytes32 id) public view returns (uint256) {\n    Claimant memory c = claimants[id];\n    require(c.verified, \"Not verified\");\n    return fundTotal * tierWeight[c.tier] / totalWeight;\n}",
        simAction: "Simulate Share Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading distribution formula for CLS_2026...", tone: "default" },
          { text: "Reading claimant tier and weight...", tone: "default" },
          { text: "Computing proportional share...", tone: "default" },
          { text: "Anchoring inputs for claimant visibility...", tone: "default" },
          { text: "[SUCCESS] Share of 62,400 calculated.", tone: "success" },
        ],
      },
      {
        title: "Escrow & Settlement",
        subtitle: "The Fund Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fund Vault",
          description:
            "Holds and releases the fund. Escrow and Conditional Settlement disburses each share only to a verified claimant, so the administrator cannot misdirect, delay, or skim the distribution.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function disburse(bytes32 id) external onlyDistributor {\n    Claimant storage c = claimants[id];\n    require(c.verified && !c.paid, \"Ineligible\");\n    uint256 share = calcShare(id);\n    c.paid = true;\n    payable(walletOf(id)).transfer(share);\n    emit Disbursed(id, share);\n}",
        simAction: "Simulate Disbursement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming claimant verified and unpaid...", tone: "default" },
          { text: "Recomputing share from formula...", tone: "default" },
          { text: "Releasing funds from fund escrow...", tone: "default" },
          { text: "Marking claimant as paid...", tone: "default" },
          { text: "[SUCCESS] Share disbursed automatically.", tone: "success" },
        ],
      },
      {
        title: "Audit Logs",
        subtitle: "The Claimant Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Claimant Window",
          description:
            "A read-only trail that returns eligibility, share inputs, and payment for each claimant, giving both the claimant and the court full visibility into the distribution.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function claimantView(bytes32 id) external view returns (Claimant memory, uint256 share, uint256 paidAt) {\n    return (claimants[id], calcShare(id), paidAt[id]);\n}",
        simAction: "Simulate Claimant Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Claimant CLM_4471 opening their record...", tone: "default" },
          { text: "Returning eligibility and tier...", tone: "default" },
          { text: "Showing share inputs and calculation...", tone: "default" },
          { text: "Attaching payment timestamp...", tone: "default" },
          { text: "[SUCCESS] Full distribution trail returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent settlement distribution is a horizontal capability. Here is how different actors in a class action put the shared fund to work.",
    sectors: [
      { icon: Scale, title: "Class Counsel & Administrators", description: "Run a fund that verifies claimants and disburses calculated shares automatically, replacing months of manual check runs with a transparent, court-auditable distribution.", assetTypes: ["Settlement Funds", "Claimant Registers", "Payment Records"] },
      { icon: Users, title: "Claimants & Class Members", description: "See exactly how an individual share was calculated and when it will arrive, ending the black-box experience of traditional settlement payouts.", assetTypes: ["Claim Verifications", "Share Calculations", "Disbursement Trails"] },
      { icon: Landmark, title: "Courts & Overseers", description: "Confirm that the fund was distributed per the approved formula from a verifiable record, without auditing the administrator's private spreadsheets.", assetTypes: ["Distribution Audits", "Formula Attestations", "Fund Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are ingesting claim data from a settlement administrator's system or verifying claimants from their own wallets, Cerulea routes both into one transparent fund.",
    tracks: [
      {
        title: "Track A: Administrator System Bridging",
        description:
          "For settlement administrators on legacy claims software. Claim and eligibility records are translated into signed on-chain claimants through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Claims System", sublabel: "Administrator Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Claim Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Settlement Fund Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Claimant Wallet Verification",
        description:
          "For claimants submitting from their own devices. A wallet-signed app verifies eligibility and receives disbursement directly from the fund.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Claimant Wallet App", sublabel: "Class Member Devices", icon: Fingerprint, accent: false },
          { label: "Fund Validators", sublabel: "Distribution Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Transparent Fund Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a transparent settlement fund with claimant verification, on-chain share calculation, and automatic escrowed disbursement from scratch requires specialised engineers and long claims systems integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Eligibility & Distribution Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects settlement administration benchmarks. Building claimant verification, coding the distribution formula, and shipping an escrowed disbursement engine for an average fund takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your eligibility and distribution rules into pre-audited WebAssembly binaries and provisions the fund escrow and claimant view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "conflict-of-interest-checking-across-multi-office-law-firms",
    icon: ShieldCheck,
    eyebrow: "Firm-Wide Conflict Engine",
    headline1: "Check the whole firm.",
    headline2: "Before you accept.",
    heroDescription:
      "Run a shared conflict-check system across a law firm's offices that flags potential conflicts before a new matter is accepted. Built on Civil Registry, Compliance Attestations, and Role-Based Access Control, the network maintains one access-controlled record of client relationships across every office, so a firm-wide check completes before intake rather than after.",
    heroCta: "Deploy Conflict Checks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Unite each office's separate client database into one shared, access-controlled conflict register checked before intake.",
    mechanics: [
      { title: "Shared Client Registry", description: "Every office writes its client and matter relationships to one Civil Registry, so a conflict check runs against the entire firm instead of a single office's local list." },
      { title: "Pre-Intake Screening", description: "A prospective client is screened against the firm-wide registry before the matter is accepted, catching a conflict at the moment it can still be avoided." },
      { title: "Adverse Party Mapping", description: "The registry maps clients to their adverse parties and associated entities, so a new matter against an existing client anywhere in the firm is flagged even across offices." },
      { title: "Confidential Access Control", description: "Role-Based Access Control lets an office confirm that a conflict exists without exposing the confidential client details behind it, preserving privilege across the firm." },
      { title: "Attested Clearance", description: "When a matter clears, Compliance Attestations record the conflict check as completed, so acceptance rests on a verifiable clearance rather than an email thread." },
      { title: "Firm-Wide Audit Trail", description: "Every check, flag, and clearance is logged, so risk partners and regulators see a complete record of how conflicts were screened before intake." },
    ],
    lifecycleTitle: "The Conflict Check Lifecycle",
    lifecycleSubtitle:
      "Follow a single prospective matter from a firm-wide screen to a flagged conflict and an attested clearance before acceptance.",
    lifecycleSteps: [
      {
        label: "Prospect Intake",
        description:
          "An office begins intake on a new client. The prospective client and adverse parties are submitted for a firm-wide conflict screen before acceptance.",
        icon: Handshake,
        logFilename: "cerulea_conflict.log",
        logLines: [
          { text: "[SYS] Initializing Conflict Screen Manifest...", time: "09:20:14", tone: "default" },
          { text: "[CMD] openScreen { office: \"OFF_MUM\", prospect: \"PRC_5521\" }", time: "09:20:14", tone: "primary" },
          { text: "[AUTH] Loading adverse parties for the matter...", time: "09:20:15", tone: "secondary" },
          { text: "[OK] Screen SCR_7741 opened firm-wide.", time: "09:20:15", tone: "success" },
        ],
      },
      {
        label: "Firm-Wide Match",
        description:
          "The prospect and adverse parties are checked against every office's client relationships. A match against an existing client trips the conflict flag.",
        icon: Network,
        logFilename: "cerulea_conflict.log",
        logLines: [
          { text: "[SYS] Screening SCR_7741 across all offices...", time: "09:20:16", tone: "default" },
          { text: "[CMD] matchConflict(SCR_7741, parties: 4)", time: "09:20:16", tone: "primary" },
          { text: "[SYS] Adverse party linked to client of OFF_DEL.", time: "09:20:17", tone: "default" },
          { text: "[OK] Conflict flag raised. Details access-gated.", time: "09:20:17", tone: "error" },
        ],
      },
      {
        label: "Confidential Review",
        description:
          "A risk partner reviews the flag under access control. The nature of the conflict is confirmed without exposing the other office's privileged client detail.",
        icon: Lock,
        logFilename: "cerulea_conflict.log",
        logLines: [
          { text: "[SYS] Access request for conflict on SCR_7741...", time: "11:05:33", tone: "default" },
          { text: "[CMD] reviewConflict(SCR_7741, partner: \"RSK_0x22\")", time: "11:05:33", tone: "primary" },
          { text: "[AUTH] Returning conflict existence, not client details...", time: "11:05:34", tone: "secondary" },
          { text: "[OK] Conflict confirmed. Privilege preserved.", time: "11:05:34", tone: "success" },
        ],
      },
      {
        label: "Clearance or Decline",
        description:
          "The matter is cleared with a waiver or declined. Compliance Attestations record the outcome, so acceptance rests on a verifiable, timestamped clearance.",
        icon: FileCheck,
        logFilename: "cerulea_conflict.log",
        logLines: [
          { text: "[SYS] Recording screen outcome for SCR_7741...", time: "14:40:09", tone: "default" },
          { text: "[CMD] attestClearance(SCR_7741, result: \"WAIVED\")", time: "14:40:09", tone: "primary" },
          { text: "[AUTH] Binding clearance to matter and partner...", time: "14:40:10", tone: "secondary" },
          { text: "[OK] Clearance anchored. Matter safe to accept.", time: "14:40:10", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes firm-wide conflict checking into modular contracts. Each layer registers relationships, screens prospects, gates confidential detail, and attests clearance without any single office controlling the record.",
    layers: [
      {
        title: "Civil Registry",
        subtitle: "The Relationship Graph",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Relationship Graph",
          description:
            "The foundational data layer. Every office records its clients, matters, and adverse parties as a shared graph, so a conflict check runs against the whole firm rather than one office's local list.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ClientRegistry {\n  struct Relationship {\n    bytes32 client;\n    bytes32 adverse;\n    bytes32 office;\n    bool active;\n  }\n\n  mapping(bytes32 => Relationship) public rels;\n  mapping(bytes32 => bytes32[]) public byParty;\n\n  function record(bytes32 id, bytes32 client, bytes32 adverse, bytes32 office) external {\n    rels[id] = Relationship(client, adverse, office, true);\n    byParty[client].push(id);\n  }\n}",
        simAction: "Simulate Relationship Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading client relationship from OFF_DEL...", tone: "default" },
          { text: "Linking client to adverse party...", tone: "default" },
          { text: "Indexing party for firm-wide lookup...", tone: "default" },
          { text: "Writing relationship to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Relationship recorded firm-wide.", tone: "success" },
        ],
      },
      {
        title: "Conflict Screen",
        subtitle: "The Match Hook",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Match Hook",
          description:
            "Catches conflicts before intake. It screens a prospect and its adverse parties against the firm-wide graph, raising a flag the instant a match against any office's client is found.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function matchConflict(bytes32 screenId, bytes32[] calldata parties) external returns (bool) {\n    for (uint i = 0; i < parties.length; i++) {\n      if (byParty[parties[i]].length > 0) {\n        flagged[screenId] = true;\n        emit ConflictFlagged(screenId, parties[i]);\n      }\n    }\n    return flagged[screenId];\n}",
        simAction: "Simulate Conflict Screen",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Screening prospect PRC_5521 firm-wide...", tone: "default" },
          { text: "Testing 4 adverse parties against graph...", tone: "default" },
          { text: "Matching adverse party to OFF_DEL client...", tone: "default" },
          { text: "Raising conflict flag...", tone: "default" },
          { text: "[SUCCESS] Conflict detected before intake.", tone: "success" },
        ],
      },
      {
        title: "Access Control",
        subtitle: "The Privilege Gate",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Privilege Gate",
          description:
            "Confirms without exposing. Role-Based Access Control returns that a conflict exists while withholding the other office's confidential client detail, so privilege is preserved across the firm.",
          platformFunction: "Access Governance",
        },
        codeSnippet:
          "function reviewConflict(bytes32 screenId) external view returns (bool exists, bytes32 office) {\n    require(isRiskRole(msg.sender), \"Not authorized\");\n    return (flagged[screenId], conflictOffice[screenId]);\n}",
        simAction: "Simulate Gated Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Risk partner RSK_0x22 requesting review...", tone: "default" },
          { text: "Verifying risk role authorization...", tone: "default" },
          { text: "Returning conflict existence only...", tone: "default" },
          { text: "Withholding privileged client details...", tone: "default" },
          { text: "[SUCCESS] Conflict confirmed, privilege intact.", tone: "success" },
        ],
      },
      {
        title: "Compliance Attestations",
        subtitle: "The Clearance Window",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Clearance Window",
          description:
            "Records the outcome. It attests whether a matter was cleared, waived, or declined against the screen, so acceptance rests on a verifiable clearance and risk partners hold a firm-wide audit trail.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function attestClearance(bytes32 screenId, uint8 result) external onlyRisk {\n    require(screens[screenId].open, \"Closed\");\n    screens[screenId].result = result;\n    screens[screenId].open = false;\n    emit ClearanceAttested(screenId, result, msg.sender);\n}",
        simAction: "Simulate Clearance Attest",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Risk partner closing screen SCR_7741...", tone: "default" },
          { text: "Recording result as WAIVED with waiver...", tone: "default" },
          { text: "Binding clearance to matter and partner...", tone: "default" },
          { text: "Appending to firm-wide audit trail...", tone: "default" },
          { text: "[SUCCESS] Clearance attested before intake.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Firm-wide conflict checking is a horizontal capability. Here is how different actors in a multi-office practice put the shared register to work.",
    sectors: [
      { icon: Scale, title: "Multi-Office Law Firms", description: "Screen every prospective matter against the whole firm before intake, replacing siloed office databases with one shared, access-controlled conflict register.", assetTypes: ["Client Relationships", "Conflict Screens", "Clearance Records"] },
      { icon: ShieldCheck, title: "Risk & General Counsel", description: "Confirm a conflict exists without seeing another office's privileged detail, and hold a verifiable trail of every check and clearance for the whole firm.", assetTypes: ["Adverse Party Maps", "Gated Reviews", "Audit Trails"] },
      { icon: Building2, title: "Professional Services Firms", description: "Extend the same shared conflict register to audit, consulting, and advisory practices that must clear engagements across offices before accepting them.", assetTypes: ["Engagement Screens", "Independence Checks", "Clearance Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging each office's legacy practice-management system or capturing intake from a partner's device, Cerulea routes both into one shared conflict register.",
    tracks: [
      {
        title: "Track A: Practice System Bridging",
        description:
          "For firms on legacy practice-management software. Existing client and matter records are translated into signed on-chain relationships through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy PMS", sublabel: "Per-Office Client Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Relationship Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Firm-Wide Conflict Register", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Partner Intake Capture",
        description:
          "For partners running intake from their own devices. A wallet-signed app submits each screen and clearance directly to the shared register.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Intake App / Wallet", sublabel: "Partner Devices", icon: Fingerprint, accent: false },
          { label: "Conflict Validators", sublabel: "Screen Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Conflict Record", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a firm-wide conflict register with a shared relationship graph, pre-intake screening, and privilege-preserving access control from scratch requires specialised engineers and long integration cycles across offices. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Screening & Access Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects legal practice-tech integration benchmarks. Unifying each office's client database, building custom firm-wide screening, and shipping privilege-preserving access control for an average firm takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your screening and access rules into pre-audited WebAssembly binaries and provisions the shared conflict register and review layer instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const legalComplianceItems: ExtraCaseItem[] = [
  {
    label: "Court document filing and case record integrity",
    href: "/solutions/use-case/court-document-filing-and-case-record-integrity",
    description: "Tamper-evident court filings anchored on a judiciary chain.",
    icon: Gavel,
    category: "GOVERNMENT",
    tags: ["Judiciary", "Evidence"],
    industry: INDUSTRY,
  },
  {
    label: "Legal aid case assignment and outcome tracking for indigent defendants",
    href: "/solutions/use-case/legal-aid-case-assignment-and-outcome-tracking-for-indigent-defendants",
    description: "Verifiable aid assignments and outcomes for oversight.",
    icon: Scale,
    category: "GOVERNMENT",
    tags: ["Legal Aid", "Oversight"],
    industry: INDUSTRY,
  },
  {
    label: "E-summons delivery verification across jurisdictions",
    href: "/solutions/use-case/e-summons-delivery-verification-across-jurisdictions",
    description: "Provable electronic service tied to verified identity.",
    icon: ScrollText,
    category: "GOVERNMENT",
    tags: ["Courts", "Service"],
    industry: INDUSTRY,
  },
  {
    label: "Continuous audit via real-time transaction visibility for auditors",
    href: "/solutions/use-case/continuous-audit-via-real-time-transaction-visibility-for-auditors",
    description: "Live immutable transaction feed that catches fraud early.",
    icon: Activity,
    category: "ENTERPRISE",
    tags: ["Audit", "Assurance"],
    industry: INDUSTRY,
  },
  {
    label: "Inventory count verification for multi-location retail audits",
    href: "/solutions/use-case/inventory-count-verification-for-multi-location-retail-audits",
    description: "Timestamped simultaneous stock counts across every store.",
    icon: Package,
    category: "ENTERPRISE",
    tags: ["Audit", "Retail"],
    industry: INDUSTRY,
  },
  {
    label: "Related party transaction disclosure tracking",
    href: "/solutions/use-case/related-party-transaction-disclosure-tracking",
    description: "Auto-flag related party dealings and track disclosure status.",
    icon: Network,
    category: "ENTERPRISE",
    tags: ["Compliance", "Disclosure"],
    industry: INDUSTRY,
  },
  {
    label: "Statutory compliance calendar tracking for multi-entity corporate groups",
    href: "/solutions/use-case/statutory-compliance-calendar-tracking-for-multi-entity-corporate-grou",
    description: "One verified calendar for every subsidiary's statutory filings.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Compliance", "Governance"],
    industry: INDUSTRY,
  },
  {
    label: "Forensic audit evidence chain for fraud investigations",
    href: "/solutions/use-case/forensic-audit-evidence-chain-for-fraud-investigations",
    description: "Unbroken, admissible chain of custody for forensic evidence.",
    icon: Shield,
    category: "ENTERPRISE",
    tags: ["Forensics", "Evidence"],
    industry: INDUSTRY,
  },
  {
    label: "Smart contract-based legal agreement execution",
    href: "/solutions/use-case/smart-contract-based-legal-agreement-execution",
    description: "Self-enforcing commercial contracts with automatic milestone settlement.",
    icon: Handshake,
    category: "ENTERPRISE",
    tags: ["Contracts", "Escrow"],
    industry: INDUSTRY,
  },
  {
    label: "Intellectual property registration and licensing on-chain",
    href: "/solutions/use-case/intellectual-property-registration-and-licensing-on-chain",
    description: "Timestamped IP ownership with automated cross-border royalties.",
    icon: Copyright,
    category: "DAPPS",
    tags: ["Intellectual Property", "Licensing"],
    industry: INDUSTRY,
  },
  {
    label: "Class action settlement fund distribution to claimants",
    href: "/solutions/use-case/class-action-settlement-fund-distribution-to-claimants",
    description: "Transparent auto-calculated settlement shares paid to verified claimants.",
    icon: Coins,
    category: "DAPPS",
    tags: ["Settlements", "Distribution"],
    industry: INDUSTRY,
  },
  {
    label: "Conflict of interest checking across multi-office law firms",
    href: "/solutions/use-case/conflict-of-interest-checking-across-multi-office-law-firms",
    description: "Firm-wide conflict screening completed before matter intake.",
    icon: ShieldCheck,
    category: "SME",
    tags: ["Law Firms", "Conflicts"],
    industry: INDUSTRY,
  },
]
