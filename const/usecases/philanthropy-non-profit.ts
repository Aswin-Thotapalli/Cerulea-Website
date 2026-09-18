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

const INDUSTRY = "Philanthropy & Non-Profit"

export const philanthropyNonProfitCases: CaseEntry[] = [
  {
    slug: "donation-tracking-and-aid-disbursement-transparency",
    icon: Gift,
    eyebrow: "Aid Disbursement Settlement Layer",
    headline1: "Track every donation.",
    headline2: "Prove every disbursement.",
    heroDescription:
      "Route every gift through conditional escrow so funds release only against verified project milestones, and let a donor trace their specific donation to its end use. The Escrow and Conditional Settlement, Traceability Ledger, and Payouts and Settlements modules build an immutable trail that a corporate CSR board can sign off in a single day.",
    heroCta: "Deploy Aid Transparency Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque donation pipeline into a milestone-gated, donor-traceable record of every rupee.",
    mechanics: [
      { title: "Conditional Escrow", description: "Replace blind wire transfers. The Escrow and Conditional Settlement module holds each donation until an NGO submits verified proof of a milestone, so funds cannot be diverted before the work is done." },
      { title: "Donation Traceability", description: "Bind a gift to its outcome. The Traceability Ledger threads a single donation from the donor wallet through each disbursement to the exact project it funded, resolvable on a public dashboard." },
      { title: "Milestone Payouts", description: "Release capital on evidence. The Payouts and Settlements module wires the next tranche to a field operator only after GPS photos and a completion certificate are anchored to the milestone." },
      { title: "Board-Ready Audit", description: "Collapse audit cycles. Every escrow release, proof, and payout is timestamped and immutable, so a corporate CSR auditor signs off from the live ledger instead of chasing paper trails for months." },
      { title: "Diversion Alarms", description: "Detect leakage instantly. Any attempt to move funds outside an approved milestone path is rejected at the protocol level and surfaced to donors and regulators in real time." },
      { title: "End-Use Proof Anchor", description: "Anchor the evidence, not the file. Field photos, GPS coordinates, and completion certificates are hashed and sealed to each disbursement, making later substitution of a project mathematically detectable." },
    ],
    lifecycleTitle: "The Disbursement Lifecycle",
    lifecycleSubtitle:
      "Follow one corporate CSR donation from pledge, through milestone-gated release, to the completion proof a board reviews on-chain.",
    lifecycleSteps: [
      {
        label: "Donation Pledge",
        description:
          "A corporate CSR donor commits funds to a specific school construction project. The contract locks the pledge in conditional escrow against a defined set of milestones.",
        icon: Gift,
        logFilename: "cerulea_aidtrace.log",
        logLines: [
          { text: "[SYS] Initializing Donation Escrow Manifest...", time: "10:05:12", tone: "default" },
          { text: "[CMD] pledge { donor: \"CSR_ACME\", project: \"RJ_SCHOOL_44\", amount: 2500000 }", time: "10:05:12", tone: "primary" },
          { text: "[AUTH] Locking funds against 4 defined milestones...", time: "10:05:13", tone: "secondary" },
          { text: "[OK] Escrow ESC_77120 anchored at block 5510944.", time: "10:05:13", tone: "success" },
        ],
      },
      {
        label: "Field Proof Anchor",
        description:
          "The NGO reaches a milestone and submits GPS photos and a completion certificate. The Traceability Ledger seals each artifact to the milestone by its digest.",
        icon: FileCheck,
        logFilename: "cerulea_aidtrace.log",
        logLines: [
          { text: "[SYS] Receiving milestone evidence for ESC_77120...", time: "14:22:41", tone: "default" },
          { text: "[CMD] anchorProof([\"GPS_PHOTO_SET\", \"COMPLETION_CERT\"])", time: "14:22:41", tone: "primary" },
          { text: "[AUTH] Hashing artifacts (SHA-256) and sealing to milestone 2...", time: "14:22:42", tone: "secondary" },
          { text: "[OK] Proof anchored. Milestone 2 marked verifiable.", time: "14:22:42", tone: "success" },
        ],
      },
      {
        label: "Conditional Release",
        description:
          "Independent verification clears the milestone. The Payouts and Settlements module releases the tranche directly to the field operator's wallet.",
        icon: Wallet,
        logFilename: "cerulea_aidtrace.log",
        logLines: [
          { text: "[SYS] Milestone 2 verification passed. Release authorized.", time: "16:48:03", tone: "default" },
          { text: "[CMD] releaseTranche(ESC_77120, milestone: 2, amount: 625000)", time: "16:48:03", tone: "primary" },
          { text: "[SYS] Routing payout to operator wallet 0x3F1...A22...", time: "16:48:04", tone: "default" },
          { text: "[OK] Tranche settled. 2 of 4 milestones funded.", time: "16:48:04", tone: "success" },
        ],
      },
      {
        label: "Board Verification",
        description:
          "During a board meeting the donor opens the on-chain dashboard and traces the gift to the Rajasthan school, its photos, and its certificate, then signs off the audit.",
        icon: PieChart,
        logFilename: "cerulea_aidtrace.log",
        logLines: [
          { text: "[SYS] Dashboard query from CSR_ACME board session...", time: "11:02:18", tone: "default" },
          { text: "[CMD] traceDonation(donor: \"CSR_ACME\", project: \"RJ_SCHOOL_44\")", time: "11:02:18", tone: "primary" },
          { text: "[SYS] Assembling disbursement path and 3 anchored proofs...", time: "11:02:18", tone: "default" },
          { text: "[OK] End-use verified. Audit signed off in 1 day.", time: "11:02:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes aid transparency into modular contracts. Each layer escrows, proves, releases, and exposes a donation without any single administrator controlling the flow of funds.",
    layers: [
      {
        title: "Escrow Vault",
        subtitle: "The Milestone Lock",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Milestone Lock",
          description:
            "The foundational custody layer. It holds a donation in conditional escrow and refuses to release any tranche until the linked milestone is marked verifiable, structurally preventing fund diversion before work is delivered.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract AidEscrow {\n  struct Pledge {\n    address donor;\n    bytes32 project;\n    uint256 amount;\n    uint8 milestonesPaid;\n  }\n\n  mapping(bytes32 => Pledge) public pledges;\n\n  function pledge(bytes32 id, bytes32 project, uint256 amount) external {\n    pledges[id] = Pledge(msg.sender, project, amount, 0);\n  }\n}",
        simAction: "Simulate Donation Pledge",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading donor mandate for CSR_ACME...", tone: "default" },
          { text: "Binding pledge to project RJ_SCHOOL_44...", tone: "default" },
          { text: "Locking 2,500,000 in conditional escrow...", tone: "default" },
          { text: "Writing pledge state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Escrow ESC_77120 locked on-chain.", tone: "success" },
        ],
      },
      {
        title: "Proof Notary",
        subtitle: "The Evidence Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Seal",
          description:
            "Anchors GPS photos and completion certificates by their cryptographic digest. The original media stays off-chain, but any tampering with a proof breaks its hash and is instantly detectable by a verifier.",
          platformFunction: "Traceability & Provenance",
        },
        codeSnippet:
          "function anchorProof(bytes32 escrowId, uint8 milestone, bytes32 proofHash) external onlyNGO {\n    proofs[escrowId][milestone] = Proof(proofHash, msg.sender, block.timestamp);\n    emit ProofAnchored(escrowId, milestone, proofHash);\n}",
        simAction: "Simulate Proof Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting GPS photo set for milestone 2...", tone: "default" },
          { text: "Computing SHA-256 digest of evidence bundle...", tone: "default" },
          { text: "Binding digest to ESC_77120 milestone 2...", tone: "default" },
          { text: "Marking milestone verifiable...", tone: "default" },
          { text: "[SUCCESS] Field proof anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Payout Router",
        subtitle: "The Conditional Release",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Release",
          description:
            "The disbursement executor. It wires the next tranche directly to a field operator only after the milestone is verified, so capital reaches the ground the moment evidence clears and never before.",
          platformFunction: "Payouts & Settlements",
        },
        codeSnippet:
          "function releaseTranche(bytes32 id, uint8 milestone, uint256 amount) external onlyVerifier {\n    require(proofs[id][milestone].hash != 0, \"No proof\");\n    pledges[id].milestonesPaid += 1;\n    payable(operator[id]).transfer(amount);\n    emit TrancheReleased(id, milestone, amount);\n}",
        simAction: "Simulate Tranche Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming milestone 2 verification flag...", tone: "default" },
          { text: "Calculating tranche of 625,000...", tone: "default" },
          { text: "Routing payout to operator 0x3F1...A22...", tone: "default" },
          { text: "Updating milestones-paid counter...", tone: "default" },
          { text: "[SUCCESS] Tranche settled to field operator.", tone: "success" },
        ],
      },
      {
        title: "Donor Dashboard",
        subtitle: "The Trace Window",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trace Window",
          description:
            "A read-only gateway that resolves a donor to the full path of their gift and every anchored proof. It lets a CSR board verify end use during a meeting without trusting the NGO's internal reporting.",
          platformFunction: "Donor Verification",
        },
        codeSnippet:
          "function traceDonation(address donor, bytes32 project) external view returns (Disbursement[] memory, Proof[] memory) {\n    return (disbursements[donor][project], allProofs[project]);\n}",
        simAction: "Simulate Board Trace",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Donor opens on-chain dashboard...", tone: "default" },
          { text: "Assembling disbursement path for RJ_SCHOOL_44...", tone: "default" },
          { text: "Attaching 3 anchored field proofs...", tone: "default" },
          { text: "Rendering GPS photos and completion certificate...", tone: "default" },
          { text: "[SUCCESS] Verified end-use returned to board.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Milestone-gated aid transparency is a horizontal capability. Here is how different donor and relief actors put the escrow ledger to work.",
    sectors: [
      { icon: Building2, title: "Corporate CSR Programs", description: "Direct CSR budgets into milestone-gated escrow and trace each grant to a specific project, turning an annual compliance burden into a board-ready dashboard that clears audit in a day.", assetTypes: ["CSR Grants", "Milestone Escrows", "Audit Attestations"] },
      { icon: Globe, title: "International NGOs", description: "Give institutional funders a live view of every disbursement across programs, replacing self-reported spend statements with an immutable trail that survives external audit.", assetTypes: ["Program Disbursements", "Field Proofs", "Donor Reports"] },
      { icon: Landmark, title: "Government Relief Funds", description: "Anchor public relief spending to verified milestones so citizens and oversight bodies can confirm that allocated funds reached the intended projects without diversion.", assetTypes: ["Relief Allocations", "Completion Certificates", "Oversight Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a corporate finance system or capturing field evidence from a relief worker's phone, Cerulea routes both into one escrow ledger.",
    tracks: [
      {
        title: "Track A: Institutional Donor Bridging",
        description:
          "For corporate treasuries and grant systems on legacy finance stacks. Existing disbursement instructions are translated into signed on-chain escrow releases through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Corporate Finance / ERP", sublabel: "Donor Treasury Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Pledge Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Aid Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Evidence Capture",
        description:
          "For NGO field workers on mobile. A progressive web app signs each proof submission from a phone wallet and routes GPS photos and certificates directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field PWA / Wallet", sublabel: "NGO Worker Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Verifiers", sublabel: "Milestone Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Disbursement Record", icon: Gift, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a milestone-gated escrow network with field proof anchoring and a donor-facing trace dashboard from scratch requires specialised engineers and long donor integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Escrow & Milestone Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects institutional grant-management integration benchmarks. Wiring donor finance systems to field reporting, building custom conditional-escrow and proof-anchoring logic, and shipping a donor dashboard for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your escrow and milestone rules into pre-audited WebAssembly binaries and provisions the shared aid ledger and trace layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "impact-reporting-and-outcome-verification-for-grant-compliance",
    icon: FileCheck,
    eyebrow: "Grant Compliance Verification Layer",
    headline1: "Anchor field data.",
    headline2: "Verify every outcome.",
    heroDescription:
      "Anchor beneficiary interactions in real time as field workers record them, and hand institutional funders evidence-based outcome reports instead of manually consolidated paper. Assembled from the Traceability Ledger, Compliance Attestations, and DID and VC Ledger modules, the network turns a three-month audit into a five-day sign-off.",
    heroCta: "Deploy Compliance Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace fragmented paper reporting with a real-time, independently verifiable record of program outcomes.",
    mechanics: [
      { title: "Real-Time Field Anchoring", description: "Capture data at the source. Field workers record each beneficiary interaction on a phone, and the Traceability Ledger anchors it immediately, ending the manual consolidation that introduces errors and delays." },
      { title: "Independent Verification", description: "Remove the self-reporting doubt. Outcomes are attested by third-party verifiers through the Compliance Attestations module, so a funder trusts the result without questioning the NGO's own data." },
      { title: "Credentialed Beneficiaries", description: "Prevent double-counting of people. The DID and VC Ledger issues each beneficiary a decentralized identifier, so the same interaction is never reported twice across programs or grants." },
      { title: "Evidence-Based Reports", description: "Compile reports from proofs, not memory. Each grant report is generated directly from anchored interactions and attestations, so every figure links back to a verifiable on-chain record." },
      { title: "Live Audit Access", description: "Give funders a direct window. USAID or other institutional auditors query the anchored evidence themselves, cutting a three-month desk audit down to days of spot verification." },
      { title: "Renewal-Ready Trail", description: "Carry outcomes into the next cycle. A continuous, immutable history of delivered outcomes strengthens renewal applications and shortens due diligence for the following grant." },
    ],
    lifecycleTitle: "The Reporting Lifecycle",
    lifecycleSubtitle:
      "Follow a beneficiary interaction from a field worker's phone through independent attestation to a funder's five-day audit.",
    lifecycleSteps: [
      {
        label: "Beneficiary Enrollment",
        description:
          "A field worker enrolls a beneficiary. The DID and VC Ledger issues a decentralized identifier so future interactions bind to one person without exposing personal records.",
        icon: IdCard,
        logFilename: "cerulea_grantproof.log",
        logLines: [
          { text: "[SYS] Issuing decentralized identifier for beneficiary...", time: "07:31:44", tone: "default" },
          { text: "[CMD] issueDID { program: \"WASH_2026\", region: \"MH_09\" }", time: "07:31:44", tone: "primary" },
          { text: "[AUTH] Binding credential without storing raw PII...", time: "07:31:45", tone: "secondary" },
          { text: "[OK] DID did:cer:8a91 anchored at block 6120411.", time: "07:31:45", tone: "success" },
        ],
      },
      {
        label: "Interaction Capture",
        description:
          "The worker records a service interaction offline in the field. Once online, the Traceability Ledger anchors the interaction in real time against the beneficiary DID.",
        icon: Radio,
        logFilename: "cerulea_grantproof.log",
        logLines: [
          { text: "[SYS] Syncing 42 offline interactions from field device...", time: "12:14:09", tone: "default" },
          { text: "[CMD] anchorInteraction(did:cer:8a91, service: \"WATER_KIT\")", time: "12:14:09", tone: "primary" },
          { text: "[SYS] Deduplicating against prior grant records...", time: "12:14:10", tone: "default" },
          { text: "[OK] Interaction anchored. Count now 8,000 verified.", time: "12:14:10", tone: "success" },
        ],
      },
      {
        label: "Outcome Attestation",
        description:
          "An independent verifier confirms the outcome on the ground. The Compliance Attestations module seals a signed attestation to the interaction batch.",
        icon: ShieldCheck,
        logFilename: "cerulea_grantproof.log",
        logLines: [
          { text: "[SYS] Verifier reviewing sampled interactions...", time: "15:57:22", tone: "default" },
          { text: "[CMD] attestOutcome(batch: \"WASH_Q3\", sampled: 400)", time: "15:57:22", tone: "primary" },
          { text: "[AUTH] Sealing verifier signature to batch digest...", time: "15:57:23", tone: "secondary" },
          { text: "[OK] Attestation anchored. Batch independently verified.", time: "15:57:23", tone: "success" },
        ],
      },
      {
        label: "Funder Audit",
        description:
          "The NGO submits its annual report with on-chain evidence for 8,000 interactions. USAID queries the trail directly and closes the audit in 5 days instead of 3 months.",
        icon: FileCheck,
        logFilename: "cerulea_grantproof.log",
        logLines: [
          { text: "[SYS] Funder audit session opened for grant WASH_2026...", time: "09:40:31", tone: "default" },
          { text: "[CMD] exportEvidence(interactions: 8000, attestations: 12)", time: "09:40:31", tone: "primary" },
          { text: "[SYS] Assembling immutable outcome trail for review...", time: "09:40:32", tone: "default" },
          { text: "[OK] Audit completed in 5 days. Renewal approved.", time: "09:40:32", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes grant compliance into modular contracts. Each layer identifies, records, attests, and reports outcomes without any single party controlling the evidence.",
    layers: [
      {
        title: "Beneficiary Registry",
        subtitle: "The Identity Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Anchor",
          description:
            "The foundational identity layer. It issues a decentralized identifier for each beneficiary and binds interactions to it without storing raw personal data, ending double-counting across programs and grants.",
          platformFunction: "Identity & Credentials",
        },
        codeSnippet:
          "contract BeneficiaryRegistry {\n  struct Subject {\n    bytes32 did;\n    bytes32 program;\n    uint256 enrolledAt;\n  }\n\n  mapping(bytes32 => Subject) public subjects;\n\n  function issueDID(bytes32 did, bytes32 program) external onlyWorker {\n    subjects[did] = Subject(did, program, block.timestamp);\n  }\n}",
        simAction: "Simulate Beneficiary Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading field worker credential for WASH_2026...", tone: "default" },
          { text: "Generating decentralized identifier...", tone: "default" },
          { text: "Checking for existing DID across grants...", tone: "default" },
          { text: "Writing subject record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Beneficiary DID anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Interaction Ledger",
        subtitle: "The Real-Time Record",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Real-Time Record",
          description:
            "Captures each service interaction against a beneficiary DID the moment a field device syncs. It deduplicates against prior records so an interaction is counted once, replacing manual consolidation of paper reports.",
          platformFunction: "Traceability & Data",
        },
        codeSnippet:
          "function anchorInteraction(bytes32 did, bytes32 service) external onlyWorker {\n    require(subjects[did].did != 0, \"Unknown subject\");\n    interactions[did].push(Interaction(service, msg.sender, block.timestamp));\n    emit InteractionAnchored(did, service);\n}",
        simAction: "Simulate Interaction Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Syncing offline interactions from device...", tone: "default" },
          { text: "Resolving beneficiary did:cer:8a91...", tone: "default" },
          { text: "Deduplicating against prior grant records...", tone: "default" },
          { text: "Appending water-kit service interaction...", tone: "default" },
          { text: "[SUCCESS] Interaction anchored in real time.", tone: "success" },
        ],
      },
      {
        title: "Attestation Seal",
        subtitle: "The Independent Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Independent Check",
          description:
            "Binds a third-party verifier's signature to a batch of interactions. Because the attestation comes from outside the NGO, a funder trusts the outcome without questioning the organization's self-reported figures.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function attestOutcome(bytes32 batch, uint256 sampled) external onlyVerifier {\n    require(sampled > 0, \"No sample\");\n    attestations[batch] = Attestation(msg.sender, sampled, block.timestamp);\n    emit OutcomeAttested(batch, msg.sender, sampled);\n}",
        simAction: "Simulate Outcome Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifier sampling 400 of 8,000 interactions...", tone: "default" },
          { text: "Confirming ground-truth for sampled batch...", tone: "default" },
          { text: "Sealing verifier signature to batch digest...", tone: "default" },
          { text: "Marking batch independently verified...", tone: "default" },
          { text: "[SUCCESS] Attestation anchored to outcome batch.", tone: "success" },
        ],
      },
      {
        title: "Report Compiler",
        subtitle: "The Evidence Export",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Export",
          description:
            "A read-only gateway that compiles a grant report directly from anchored interactions and attestations. Every figure links to a verifiable record, so a funder audits the source rather than a formatted summary.",
          platformFunction: "Grant Reporting",
        },
        codeSnippet:
          "function exportEvidence(bytes32 grant) external view returns (Interaction[] memory, Attestation[] memory) {\n    return (grantInteractions[grant], grantAttestations[grant]);\n}",
        simAction: "Simulate Evidence Export",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Funder opens audit session for WASH_2026...", tone: "default" },
          { text: "Compiling 8,000 anchored interactions...", tone: "default" },
          { text: "Attaching 12 independent attestations...", tone: "default" },
          { text: "Generating evidence-linked report...", tone: "default" },
          { text: "[SUCCESS] Audit trail exported for review.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Evidence-based outcome reporting is a horizontal capability. Here is how different program actors put the compliance ledger to work.",
    sectors: [
      { icon: Globe, title: "Institutional Grantees", description: "Replace months of manual report compilation with a real-time evidence trail, letting a USAID-funded program close its annual audit in days and win renewal on verifiable outcomes.", assetTypes: ["Grant Reports", "Outcome Attestations", "Beneficiary DIDs"] },
      { icon: HeartPulse, title: "Health & WASH Programs", description: "Anchor each service interaction at the point of delivery so coverage figures rest on deduplicated, credentialed records rather than counted-twice timesheets.", assetTypes: ["Service Interactions", "Coverage Metrics", "Field Attestations"] },
      { icon: GraduationCap, title: "Education Nonprofits", description: "Track enrollment and learning outcomes against beneficiary identifiers, giving funders independent proof of reach without exposing student personal data.", assetTypes: ["Enrollment Records", "Outcome Proofs", "Program Rosters"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an NGO's case-management system or syncing offline field devices, Cerulea routes both into one outcome ledger.",
    tracks: [
      {
        title: "Track A: Case-Management Bridging",
        description:
          "For NGOs on legacy case-management or M&E platforms. Existing interaction records are translated into signed on-chain anchors through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy M&E System", sublabel: "Case-Management Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Interaction Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Outcome Evidence Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Offline Field Sync",
        description:
          "For field workers in low-connectivity regions. A progressive web app signs interactions offline and routes them to the ledger the moment a device regains connectivity.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field PWA / Wallet", sublabel: "Worker & Verifier Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Verifiers", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Outcome Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a real-time outcome ledger with decentralized beneficiary identity, independent attestation, and funder audit export from scratch requires specialised engineers and long M&E integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Outcome & Attestation Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects monitoring and evaluation platform integration benchmarks. Wiring case-management systems to offline field capture, building custom identity and attestation logic, and shipping a funder audit export for an average program takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your outcome and attestation rules into pre-audited WebAssembly binaries and provisions the evidence ledger and export layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "volunteer-hour-tracking-and-verification-for-csr-reporting",
    icon: Users,
    eyebrow: "Volunteer Attestation Layer",
    headline1: "Verify every hour.",
    headline2: "Consolidate every partner.",
    heroDescription:
      "Let each NGO confirm employee volunteer hours directly on-chain, then consolidate a verified record across every partner for corporate CSR reporting. Built on the Civil Registry, Compliance Attestations, and Audit Logs modules, it replaces self-reported timesheets with attestations the reporting team can trust.",
    heroCta: "Deploy Volunteer Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn scattered self-reported timesheets into a verified, partner-consolidated record of volunteer effort.",
    mechanics: [
      { title: "NGO-Confirmed Hours", description: "End self-reporting. The Compliance Attestations module lets each NGO confirm an employee's hours directly, so a logged shift carries a partner signature rather than a personal claim." },
      { title: "Employee Identity", description: "Bind hours to the right person. The Civil Registry links every volunteer record to a verified employee identifier, preventing inflated or duplicated entries across NGOs." },
      { title: "Cross-Partner Consolidation", description: "Merge many NGOs into one view. Verified hours from every partner an employee volunteers with roll up into a single consolidated record ready for the corporate CSR team." },
      { title: "Immutable Audit Logs", description: "Preserve the full history. The Audit Logs module timestamps every confirmation and edit, so a reporting figure is always traceable to the NGO that attested it." },
      { title: "Reporting Export", description: "Hand finance a clean number. The consolidated ledger exports total verified hours per employee and per program, ready to drop into a CSR or ESG report without reconciliation." },
      { title: "Partner Onboarding", description: "Add NGOs without friction. A lightweight Cerulea Studio module registers each new NGO partner as an authorized attester, extending coverage as the volunteering program grows." },
    ],
    lifecycleTitle: "The Verification Lifecycle",
    lifecycleSubtitle:
      "Follow one employee's volunteer shift from logging, through NGO confirmation, to a consolidated corporate report.",
    lifecycleSteps: [
      {
        label: "Employee Registration",
        description:
          "The corporate program registers an employee as a volunteer. The Civil Registry issues a verified identifier that every future hour will bind to.",
        icon: IdCard,
        logFilename: "cerulea_volunteer.log",
        logLines: [
          { text: "[SYS] Registering employee in volunteer program...", time: "08:12:03", tone: "default" },
          { text: "[CMD] registerVolunteer { emp: \"ACME_4471\", program: \"GIVE_BACK\" }", time: "08:12:03", tone: "primary" },
          { text: "[AUTH] Binding verified employee identifier...", time: "08:12:04", tone: "secondary" },
          { text: "[OK] Volunteer VOL_4471 anchored at block 7011882.", time: "08:12:04", tone: "success" },
        ],
      },
      {
        label: "Hours Logged",
        description:
          "The employee logs a shift with an NGO partner. The entry lands in that NGO's confirmation queue as an unverified claim.",
        icon: Activity,
        logFilename: "cerulea_volunteer.log",
        logLines: [
          { text: "[SYS] Receiving shift claim from VOL_4471...", time: "17:45:20", tone: "default" },
          { text: "[CMD] logHours(ngo: \"SHELTER_NGO\", hours: 6, date: \"2026-09-14\")", time: "17:45:20", tone: "primary" },
          { text: "[SYS] Entry queued for partner confirmation.", time: "17:45:21", tone: "default" },
          { text: "[OK] Claim recorded, pending attestation.", time: "17:45:21", tone: "muted" },
        ],
      },
      {
        label: "NGO Confirmation",
        description:
          "The NGO reviews and confirms the shift. The Compliance Attestations module seals the partner's signature to the hours, converting a claim into verified time.",
        icon: ShieldCheck,
        logFilename: "cerulea_volunteer.log",
        logLines: [
          { text: "[SYS] SHELTER_NGO reviewing queued shift...", time: "10:02:55", tone: "default" },
          { text: "[CMD] confirmHours(VOL_4471, hours: 6)", time: "10:02:55", tone: "primary" },
          { text: "[AUTH] Sealing NGO signature to hour record...", time: "10:02:56", tone: "secondary" },
          { text: "[OK] 6 hours verified by partner attestation.", time: "10:02:56", tone: "success" },
        ],
      },
      {
        label: "Consolidated Report",
        description:
          "The CSR team pulls verified hours across all NGO partners. The ledger returns one consolidated total per employee and program for reporting.",
        icon: PieChart,
        logFilename: "cerulea_volunteer.log",
        logLines: [
          { text: "[SYS] CSR reporting export requested...", time: "13:20:41", tone: "default" },
          { text: "[CMD] consolidate(program: \"GIVE_BACK\", period: \"FY26\")", time: "13:20:41", tone: "primary" },
          { text: "[SYS] Rolling up verified hours across 9 NGO partners...", time: "13:20:42", tone: "default" },
          { text: "[OK] Consolidated record returned for reporting.", time: "13:20:42", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes volunteer verification into modular contracts. Each layer registers, logs, confirms, and consolidates hours without any single party inflating the record.",
    layers: [
      {
        title: "Volunteer Registry",
        subtitle: "The Identity Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Anchor",
          description:
            "The foundational identity layer. It binds every volunteer record to a verified employee identifier, so hours cannot be logged against a name that does not belong to the corporate program.",
          platformFunction: "Identity & Registry",
        },
        codeSnippet:
          "contract VolunteerRegistry {\n  struct Volunteer {\n    address employee;\n    bytes32 program;\n    uint256 totalVerified;\n  }\n\n  mapping(bytes32 => Volunteer) public volunteers;\n\n  function registerVolunteer(bytes32 id, bytes32 program) external onlyEmployer {\n    volunteers[id] = Volunteer(msg.sender, program, 0);\n  }\n}",
        simAction: "Simulate Employee Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading employer mandate for GIVE_BACK...", tone: "default" },
          { text: "Binding verified employee ACME_4471...", tone: "default" },
          { text: "Initializing verified-hours counter...", tone: "default" },
          { text: "Writing volunteer record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Volunteer VOL_4471 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Hours Ledger",
        subtitle: "The Claim Queue",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Claim Queue",
          description:
            "Records each logged shift as an unverified claim addressed to a specific NGO partner. Nothing counts toward reporting until the partner confirms, so a self-reported entry cannot inflate the total on its own.",
          platformFunction: "Hours & Workflow",
        },
        codeSnippet:
          "function logHours(bytes32 volunteer, address ngo, uint256 hours) external {\n    require(volunteers[volunteer].employee == msg.sender, \"Not volunteer\");\n    claims[volunteer].push(Claim(ngo, hours, block.timestamp, false));\n    emit HoursLogged(volunteer, ngo, hours);\n}",
        simAction: "Simulate Hours Logged",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving shift claim from VOL_4471...", tone: "default" },
          { text: "Addressing claim to SHELTER_NGO...", tone: "default" },
          { text: "Marking entry unverified and pending...", tone: "default" },
          { text: "Appending claim to hours ledger...", tone: "default" },
          { text: "[SUCCESS] Claim queued for partner confirmation.", tone: "success" },
        ],
      },
      {
        title: "Attestation Module",
        subtitle: "The Partner Seal",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Partner Seal",
          description:
            "Lets an authorized NGO confirm a claimed shift by signing it. The signature converts an employee claim into verified time and increments the volunteer's confirmed total, ending reliance on personal timesheets.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function confirmHours(bytes32 volunteer, uint256 index) external onlyPartner {\n    Claim storage c = claims[volunteer][index];\n    require(c.ngo == msg.sender && !c.verified, \"Invalid claim\");\n    c.verified = true;\n    volunteers[volunteer].totalVerified += c.hours;\n    emit HoursConfirmed(volunteer, msg.sender, c.hours);\n}",
        simAction: "Simulate NGO Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "SHELTER_NGO reviewing queued shift...", tone: "default" },
          { text: "Validating claim addressed to this partner...", tone: "default" },
          { text: "Sealing NGO signature to hour record...", tone: "default" },
          { text: "Incrementing verified-hours total...", tone: "default" },
          { text: "[SUCCESS] 6 hours confirmed by partner.", tone: "success" },
        ],
      },
      {
        title: "Consolidation Engine",
        subtitle: "The Reporting Rollup",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reporting Rollup",
          description:
            "A read-only gateway that rolls up verified hours across every NGO partner into one consolidated record per employee and program. The CSR team exports a clean figure without reconciling separate partner spreadsheets.",
          platformFunction: "CSR Reporting",
        },
        codeSnippet:
          "function consolidate(bytes32 program) external view returns (uint256 totalHours, uint256 partners) {\n    return (programHours[program], programPartners[program]);\n}",
        simAction: "Simulate Consolidated Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "CSR team requesting FY26 export...", tone: "default" },
          { text: "Rolling up verified hours across 9 partners...", tone: "default" },
          { text: "Grouping totals by employee and program...", tone: "default" },
          { text: "Formatting consolidated reporting record...", tone: "default" },
          { text: "[SUCCESS] Verified volunteer report returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified volunteer tracking is a horizontal capability. Here is how different program actors put the attestation ledger to work.",
    sectors: [
      { icon: Building2, title: "Corporate CSR Teams", description: "Consolidate verified volunteer hours across every NGO an employee supports, turning scattered timesheets into a single audited figure ready for the ESG report.", assetTypes: ["Consolidated Hours", "Program Totals", "CSR Exports"] },
      { icon: Handshake, title: "NGO Partners", description: "Confirm employee hours directly on-chain and become an authorized attester, giving corporate partners the verified record they need without manual back-and-forth.", assetTypes: ["Hour Attestations", "Partner Signatures", "Shift Records"] },
      { icon: Users, title: "Employee Engagement Platforms", description: "Embed a verified-hours ledger behind an existing engagement app so logged shifts carry partner confirmation instead of unverifiable self-reports.", assetTypes: ["Volunteer Profiles", "Verified Shifts", "Engagement Metrics"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a corporate HR system or capturing confirmations from an NGO coordinator's phone, Cerulea routes both into one hours ledger.",
    tracks: [
      {
        title: "Track A: Corporate HR Bridging",
        description:
          "For large employers on legacy HR and engagement platforms. Existing volunteer entries are translated into signed on-chain claims through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy HR / Engagement", sublabel: "Employer Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Claim Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Volunteer Hours Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Partner Confirmation Capture",
        description:
          "For NGO coordinators on mobile. A progressive web app signs each hour confirmation from a phone wallet and routes the attestation directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Partner PWA / Wallet", sublabel: "NGO Coordinator Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Hours Record", icon: Users, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-partner volunteer ledger with employee identity, NGO attestation, and CSR consolidation from scratch requires specialised engineers and long partner integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attestation & Rollup Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects enterprise engagement platform integration benchmarks. Wiring an HR system to many NGO partners, building custom attestation and identity logic, and shipping a consolidation export for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attestation and rollup rules into pre-audited WebAssembly binaries and provisions the hours ledger and reporting layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "multi-donor-pooled-fund-allocation-transparency",
    icon: PieChart,
    eyebrow: "Pooled Fund Allocation Layer",
    headline1: "Pool the capital.",
    headline2: "Trace every allocation.",
    heroDescription:
      "Track each donor's contribution into a combined pool and follow the exact allocation out to every grantee organization, so no contributor loses sight of where their money went. Assembled from the Escrow and Conditional Settlement, Audit Logs, and Provenance Notary modules, the fund gives every donor a transparent proportional view.",
    heroCta: "Deploy Pooled Fund Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque combined pool into a proportionally traceable record of contribution and allocation.",
    mechanics: [
      { title: "Proportional Contribution", description: "Record each donor's stake precisely. The Escrow and Conditional Settlement module logs every contribution into the pool with its exact share, so later allocations map back to contributors by proportion." },
      { title: "Grantee Allocation", description: "Follow money out of the pool. Each grant to a recipient organization is recorded with the pool balance it drew from, keeping the combined fund from becoming a black box." },
      { title: "Donor-Level Trace", description: "Show each donor their slice. A contributor sees how their proportional share was spread across grantees, resolving the loss of visibility that pooling normally causes." },
      { title: "Immutable Allocation Log", description: "Preserve the decision history. The Audit Logs module timestamps every allocation and its rationale, so a contested grant is reviewed against a signed record." },
      { title: "Grantee Provenance", description: "Anchor who received what. The Provenance Notary binds each grantee's identity and grant terms to the allocation, making substitution or misdirection detectable." },
      { title: "Pool Health View", description: "Expose the pool in real time. Contributors and administrators query the remaining balance, committed grants, and allocation history from one live dashboard." },
    ],
    lifecycleTitle: "The Allocation Lifecycle",
    lifecycleSubtitle:
      "Follow a combined pool from multi-donor contribution through grantee allocation to each donor's proportional trace.",
    lifecycleSteps: [
      {
        label: "Pool Contribution",
        description:
          "Several donors contribute to a shared pool. The contract records each contribution with its exact proportional share of the combined fund.",
        icon: Coins,
        logFilename: "cerulea_pooledfund.log",
        logLines: [
          { text: "[SYS] Initializing Pooled Fund Manifest...", time: "09:14:07", tone: "default" },
          { text: "[CMD] contribute { donor: \"FND_A\", amount: 1200000, pool: \"EDU_POOL\" }", time: "09:14:07", tone: "primary" },
          { text: "[AUTH] Computing proportional share of combined pool...", time: "09:14:08", tone: "secondary" },
          { text: "[OK] Contribution anchored. Pool balance 4,800,000.", time: "09:14:08", tone: "success" },
        ],
      },
      {
        label: "Grantee Onboarding",
        description:
          "Recipient organizations are registered as eligible grantees. The Provenance Notary binds each grantee's identity and grant terms to the pool.",
        icon: Handshake,
        logFilename: "cerulea_pooledfund.log",
        logLines: [
          { text: "[SYS] Registering grantee organization...", time: "11:36:52", tone: "default" },
          { text: "[CMD] registerGrantee(org: \"LIT_TRUST\", terms: \"EDU_GRANT_T3\")", time: "11:36:52", tone: "primary" },
          { text: "[AUTH] Sealing grantee identity and terms to pool...", time: "11:36:53", tone: "secondary" },
          { text: "[OK] Grantee LIT_TRUST anchored and eligible.", time: "11:36:53", tone: "success" },
        ],
      },
      {
        label: "Fund Allocation",
        description:
          "The administrator allocates a grant from the pool to a grantee. The Audit Logs module records the amount, the source balance, and the rationale.",
        icon: PieChart,
        logFilename: "cerulea_pooledfund.log",
        logLines: [
          { text: "[SYS] Allocation proposal from pool administrator...", time: "14:50:19", tone: "default" },
          { text: "[CMD] allocate(pool: \"EDU_POOL\", grantee: \"LIT_TRUST\", amount: 900000)", time: "14:50:19", tone: "primary" },
          { text: "[SYS] Recording draw against pool balance and rationale...", time: "14:50:20", tone: "default" },
          { text: "[OK] Grant allocated. Pool balance now 3,900,000.", time: "14:50:20", tone: "success" },
        ],
      },
      {
        label: "Donor Trace",
        description:
          "A contributing donor reviews the dashboard. The ledger returns how their proportional share flowed across every grantee the pool funded.",
        icon: Search,
        logFilename: "cerulea_pooledfund.log",
        logLines: [
          { text: "[SYS] Donor trace request from FND_A...", time: "16:08:44", tone: "default" },
          { text: "[CMD] traceContribution(donor: \"FND_A\", pool: \"EDU_POOL\")", time: "16:08:44", tone: "primary" },
          { text: "[SYS] Mapping proportional share across 6 grantees...", time: "16:08:45", tone: "default" },
          { text: "[OK] Allocation view returned. Pool fully transparent.", time: "16:08:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes pooled fund transparency into modular contracts. Each layer contributes, registers, allocates, and traces without any administrator obscuring where the combined money went.",
    layers: [
      {
        title: "Contribution Vault",
        subtitle: "The Proportional Ledger",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proportional Ledger",
          description:
            "The foundational pool layer. It records every donor contribution with its exact share of the combined fund, so later allocations can always be mapped back to contributors by proportion.",
          platformFunction: "Escrow & Contribution",
        },
        codeSnippet:
          "contract PooledFund {\n  uint256 public totalPool;\n  mapping(address => uint256) public shares;\n\n  function contribute(uint256 amount) external {\n    shares[msg.sender] += amount;\n    totalPool += amount;\n    emit Contributed(msg.sender, amount, totalPool);\n  }\n}",
        simAction: "Simulate Pool Contribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading donor mandate for FND_A...", tone: "default" },
          { text: "Recording contribution of 1,200,000...", tone: "default" },
          { text: "Computing proportional pool share...", tone: "default" },
          { text: "Updating combined pool balance...", tone: "default" },
          { text: "[SUCCESS] Contribution anchored to EDU_POOL.", tone: "success" },
        ],
      },
      {
        title: "Grantee Notary",
        subtitle: "The Recipient Seal",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Recipient Seal",
          description:
            "Anchors each grantee's identity and grant terms to the pool. Because the recipient and its terms are sealed on-chain, a later substitution or misdirection of a grant is detectable by any contributor.",
          platformFunction: "Provenance & Registry",
        },
        codeSnippet:
          "function registerGrantee(bytes32 org, bytes32 terms) external onlyAdmin {\n    grantees[org] = Grantee(org, terms, msg.sender, block.timestamp, true);\n    emit GranteeRegistered(org, terms);\n}",
        simAction: "Simulate Grantee Onboarding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Registering grantee LIT_TRUST...", tone: "default" },
          { text: "Hashing grant terms EDU_GRANT_T3...", tone: "default" },
          { text: "Sealing identity and terms to pool...", tone: "default" },
          { text: "Marking grantee eligible for allocation...", tone: "default" },
          { text: "[SUCCESS] Grantee anchored to combined pool.", tone: "success" },
        ],
      },
      {
        title: "Allocation Engine",
        subtitle: "The Draw Recorder",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Draw Recorder",
          description:
            "Executes a grant from the pool and records the amount, source balance, and rationale in immutable audit logs. Every allocation reduces a transparent balance so the combined fund never becomes a black box.",
          platformFunction: "Audit & Allocation",
        },
        codeSnippet:
          "function allocate(bytes32 grantee, uint256 amount, string calldata rationale) external onlyAdmin {\n    require(grantees[grantee].eligible, \"Ineligible\");\n    require(totalPool >= amount, \"Insufficient pool\");\n    totalPool -= amount;\n    logs.push(Allocation(grantee, amount, rationale, block.timestamp));\n    emit Allocated(grantee, amount);\n}",
        simAction: "Simulate Fund Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reviewing allocation proposal for LIT_TRUST...", tone: "default" },
          { text: "Verifying grantee eligibility and pool balance...", tone: "default" },
          { text: "Drawing 900,000 against EDU_POOL...", tone: "default" },
          { text: "Recording rationale to audit log...", tone: "default" },
          { text: "[SUCCESS] Grant allocated and logged.", tone: "success" },
        ],
      },
      {
        title: "Trace Window",
        subtitle: "The Donor View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Donor View",
          description:
            "A read-only gateway that maps a donor's proportional share across every grantee the pool funded. It restores the visibility that pooling normally removes, letting each contributor see exactly how their money was put to use.",
          platformFunction: "Donor Verification",
        },
        codeSnippet:
          "function traceContribution(address donor) external view returns (Allocation[] memory, uint256 sharePct) {\n    return (allocations, (shares[donor] * 10000) / totalContributed);\n}",
        simAction: "Simulate Donor Trace",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Donor FND_A opens pool dashboard...", tone: "default" },
          { text: "Computing proportional share of combined pool...", tone: "default" },
          { text: "Mapping share across 6 grantee allocations...", tone: "default" },
          { text: "Rendering per-grantee breakdown...", tone: "default" },
          { text: "[SUCCESS] Transparent allocation view returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Pooled fund transparency is a horizontal capability. Here is how different collaborative funders put the allocation ledger to work.",
    sectors: [
      { icon: Globe, title: "Multi-Donor Trust Funds", description: "Let many institutional donors co-fund a single pool while each retains a proportional view of how the combined capital reached grantees, ending the visibility loss of pooling.", assetTypes: ["Pool Contributions", "Grantee Allocations", "Donor Traces"] },
      { icon: Handshake, title: "Community Foundations", description: "Manage a shared grantmaking pool with an immutable allocation log, so local contributors can confirm their gift supported the causes they intended.", assetTypes: ["Community Pools", "Grant Records", "Allocation Logs"] },
      { icon: Building2, title: "Corporate Giving Consortia", description: "Combine budgets from several companies into one fund and give each member a transparent breakdown of allocations for their own reporting.", assetTypes: ["Consortium Funds", "Member Shares", "Grant Reports"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a foundation's grant-management system or capturing allocations from an administrator's console, Cerulea routes both into one pool ledger.",
    tracks: [
      {
        title: "Track A: Grant-System Bridging",
        description:
          "For foundations on legacy grant-management platforms. Existing contribution and allocation records are translated into signed on-chain pool transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Grant System", sublabel: "Foundation Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Contribution Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Pooled Fund Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Administrator Allocation",
        description:
          "For fund administrators on a web console. A signed dashboard routes each allocation decision and its rationale directly to the pool ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Admin Console / Wallet", sublabel: "Fund Administrator", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Allocation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Pool Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a pooled fund ledger with proportional contribution tracking, grantee provenance, and per-donor allocation tracing from scratch requires specialised engineers and long funder integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Contribution & Allocation Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects collaborative grant-management integration benchmarks. Wiring multiple donor systems to a shared pool, building custom proportional-share and allocation logic, and shipping a per-donor trace dashboard for an average fund takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your contribution and allocation rules into pre-audited WebAssembly binaries and provisions the pool ledger and trace layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "disaster-relief-fund-rapid-disbursement-with-beneficiary-verification",
    icon: Zap,
    eyebrow: "Rapid Relief Settlement Layer",
    headline1: "Verify the affected.",
    headline2: "Disburse in hours.",
    heroDescription:
      "Verify disaster-affected beneficiaries against available identity data and release relief funds directly to them within hours rather than weeks. Built on the Civil Registry, Escrow and Conditional Settlement, and Notifications modules, the system removes the manual ground assessment that stalls relief when speed matters most.",
    heroCta: "Deploy Relief Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Compress a weeks-long manual relief process into an hours-long verified disbursement.",
    mechanics: [
      { title: "Rapid Eligibility", description: "Skip the ground survey. The Civil Registry cross-checks affected individuals against available identity and location data, confirming eligibility in minutes instead of manual assessments over weeks." },
      { title: "Direct-to-Beneficiary", description: "Route funds to the person. The Escrow and Conditional Settlement module releases relief straight to a verified beneficiary's wallet, removing the intermediaries that slow and skim disbursement." },
      { title: "Duplicate Prevention", description: "Guarantee one payment per person. Every disbursement binds to a verified identity, so an individual cannot claim relief twice across agencies working the same disaster." },
      { title: "Beneficiary Notifications", description: "Close the loop instantly. The Notifications module alerts each beneficiary the moment funds are released, so affected families know help has arrived without visiting an office." },
      { title: "Zone-Based Triggers", description: "Release by affected area. Relief tranches unlock for beneficiaries inside a declared disaster zone, matching disbursement to the geography of the event." },
      { title: "Agency Coordination", description: "Deconflict multiple responders. Relief agencies share one verified beneficiary ledger, so overlapping payments and gaps are resolved against a common record." },
    ],
    lifecycleTitle: "The Relief Lifecycle",
    lifecycleSubtitle:
      "Follow a disaster-affected family from zone declaration through rapid verification to funds arriving within hours.",
    lifecycleSteps: [
      {
        label: "Zone Declaration",
        description:
          "An authority declares a disaster zone. The contract opens a relief escrow scoped to beneficiaries located inside the affected geography.",
        icon: Globe,
        logFilename: "cerulea_relief.log",
        logLines: [
          { text: "[SYS] Opening relief escrow for declared zone...", time: "05:12:38", tone: "default" },
          { text: "[CMD] declareZone { event: \"FLOOD_KL_26\", radius: \"40KM\" }", time: "05:12:38", tone: "primary" },
          { text: "[AUTH] Scoping escrow to affected geography...", time: "05:12:39", tone: "secondary" },
          { text: "[OK] Relief escrow REL_3390 opened at block 8210577.", time: "05:12:39", tone: "success" },
        ],
      },
      {
        label: "Beneficiary Verification",
        description:
          "A relief agency verifies an affected individual against available identity data. The Civil Registry confirms eligibility and location in minutes.",
        icon: Fingerprint,
        logFilename: "cerulea_relief.log",
        logLines: [
          { text: "[SYS] Verifying affected individual for REL_3390...", time: "06:44:11", tone: "default" },
          { text: "[CMD] verifyBeneficiary(id: \"KL_88214\", zone: \"FLOOD_KL_26\")", time: "06:44:11", tone: "primary" },
          { text: "[AUTH] Cross-checking identity and location data...", time: "06:44:12", tone: "secondary" },
          { text: "[OK] Eligible and unique. Cleared for disbursement.", time: "06:44:12", tone: "success" },
        ],
      },
      {
        label: "Rapid Disbursement",
        description:
          "The escrow releases relief directly to the verified beneficiary's wallet. The disbursement binds to their identity to prevent any duplicate claim.",
        icon: Wallet,
        logFilename: "cerulea_relief.log",
        logLines: [
          { text: "[SYS] Releasing relief tranche to beneficiary...", time: "07:02:50", tone: "default" },
          { text: "[CMD] disburse(REL_3390, id: \"KL_88214\", amount: 15000)", time: "07:02:50", tone: "primary" },
          { text: "[SYS] Binding payment to verified identity...", time: "07:02:51", tone: "default" },
          { text: "[OK] Funds settled within hours of declaration.", time: "07:02:51", tone: "success" },
        ],
      },
      {
        label: "Beneficiary Alert",
        description:
          "The Notifications module alerts the family that funds have arrived, closing the loop without an office visit or a manual queue.",
        icon: Radio,
        logFilename: "cerulea_relief.log",
        logLines: [
          { text: "[SYS] Composing disbursement alert for KL_88214...", time: "07:03:04", tone: "default" },
          { text: "[CMD] notify(id: \"KL_88214\", channel: \"SMS\")", time: "07:03:04", tone: "primary" },
          { text: "[SYS] Dispatching confirmation to registered contact...", time: "07:03:05", tone: "default" },
          { text: "[OK] Beneficiary notified. Relief loop closed.", time: "07:03:05", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes rapid relief into modular contracts. Each layer scopes, verifies, disburses, and notifies without any manual queue delaying funds to affected families.",
    layers: [
      {
        title: "Zone Escrow",
        subtitle: "The Relief Vault",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Relief Vault",
          description:
            "The foundational custody layer. It opens a relief escrow scoped to a declared disaster zone, so funds can only reach beneficiaries located inside the affected geography.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract ReliefEscrow {\n  struct Zone {\n    bytes32 event;\n    uint256 opened;\n    uint256 balance;\n  }\n\n  mapping(bytes32 => Zone) public zones;\n\n  function declareZone(bytes32 id, bytes32 evt, uint256 funds) external onlyAuthority {\n    zones[id] = Zone(evt, block.timestamp, funds);\n  }\n}",
        simAction: "Simulate Zone Declaration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading authority mandate for FLOOD_KL_26...", tone: "default" },
          { text: "Scoping escrow to 40KM affected radius...", tone: "default" },
          { text: "Locking relief balance in zone vault...", tone: "default" },
          { text: "Writing zone state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Relief escrow REL_3390 opened on-chain.", tone: "success" },
        ],
      },
      {
        title: "Verification Hook",
        subtitle: "The Eligibility Check",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Eligibility Check",
          description:
            "Bypasses manual ground assessment. It cross-checks an affected individual against available identity and location data, confirming eligibility and uniqueness in minutes before any funds are released.",
          platformFunction: "Identity & Verification",
        },
        codeSnippet:
          "function verifyBeneficiary(bytes32 id, bytes32 zone) external onlyAgency returns (bool) {\n    require(registry.inZone(id, zone), \"Outside zone\");\n    require(!paid[zone][id], \"Already paid\");\n    verified[zone][id] = true;\n    return true;\n}",
        simAction: "Simulate Beneficiary Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving beneficiary claim KL_88214...", tone: "default" },
          { text: "Cross-checking identity against registry...", tone: "default" },
          { text: "Confirming location inside declared zone...", tone: "default" },
          { text: "Checking no prior payment exists...", tone: "default" },
          { text: "[SUCCESS] Beneficiary eligible and unique.", tone: "success" },
        ],
      },
      {
        title: "Disbursement Router",
        subtitle: "The Direct Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Direct Payout",
          description:
            "Releases relief straight to a verified beneficiary's wallet and binds the payment to their identity. The identity binding makes a duplicate claim across agencies impossible, so relief reaches each person exactly once.",
          platformFunction: "Payouts & Settlements",
        },
        codeSnippet:
          "function disburse(bytes32 zone, bytes32 id, uint256 amount) external onlyAgency {\n    require(verified[zone][id] && !paid[zone][id], \"Not eligible\");\n    paid[zone][id] = true;\n    payable(wallets[id]).transfer(amount);\n    emit Disbursed(zone, id, amount);\n}",
        simAction: "Simulate Rapid Disbursement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming verification flag for KL_88214...", tone: "default" },
          { text: "Marking beneficiary as paid...", tone: "default" },
          { text: "Routing 15,000 to beneficiary wallet...", tone: "default" },
          { text: "Recording disbursement against zone escrow...", tone: "default" },
          { text: "[SUCCESS] Relief settled within hours.", tone: "success" },
        ],
      },
      {
        title: "Alert Dispatcher",
        subtitle: "The Notification Loop",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Notification Loop",
          description:
            "Dispatches a confirmation to each beneficiary the moment funds are released. It closes the relief loop without an office visit, so affected families know help has arrived even in a disrupted environment.",
          platformFunction: "Notifications",
        },
        codeSnippet:
          "function notify(bytes32 id, bytes32 channel) external onlyAgency {\n    require(paid[currentZone][id], \"Not disbursed\");\n    emit BeneficiaryNotified(id, channel, block.timestamp);\n}",
        simAction: "Simulate Beneficiary Alert",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Composing disbursement alert for KL_88214...", tone: "default" },
          { text: "Resolving registered SMS contact...", tone: "default" },
          { text: "Dispatching confirmation message...", tone: "default" },
          { text: "Recording notification to relief log...", tone: "default" },
          { text: "[SUCCESS] Beneficiary notified, loop closed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Rapid verified relief is a horizontal capability. Here is how different response actors put the relief ledger to work.",
    sectors: [
      { icon: Zap, title: "Disaster Relief Agencies", description: "Verify affected families against available identity data and disburse directly within hours, replacing weeks of manual ground assessment when speed decides outcomes.", assetTypes: ["Relief Escrows", "Beneficiary Verifications", "Direct Payouts"] },
      { icon: Landmark, title: "Government Response Units", description: "Coordinate multiple responders around one verified beneficiary ledger, so public relief funds reach each affected citizen once, without overlap or leakage.", assetTypes: ["Zone Declarations", "Eligibility Records", "Coordination Logs"] },
      { icon: Globe, title: "Humanitarian Funders", description: "Route emergency capital into zone-scoped escrow and watch it reach verified beneficiaries in real time, giving donors immediate proof that relief landed.", assetTypes: ["Emergency Funds", "Disbursement Trails", "Impact Confirmations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a national identity registry or capturing verifications from a responder's field device, Cerulea routes both into one relief ledger.",
    tracks: [
      {
        title: "Track A: Identity Registry Bridging",
        description:
          "For agencies with access to national identity or beneficiary databases. Existing identity checks are translated into signed on-chain eligibility confirmations through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Identity Registry", sublabel: "Government Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Eligibility Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Relief Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Responder Capture",
        description:
          "For relief workers on mobile in disrupted areas. A progressive web app signs each verification and disbursement from a phone wallet and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Responder PWA / Wallet", sublabel: "Field Agency Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Relief Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Relief Record", icon: Zap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a zone-scoped relief network with rapid identity verification, direct disbursement, and beneficiary notifications from scratch requires specialised engineers and long identity integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Verification & Payout Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects humanitarian disbursement platform integration benchmarks. Wiring an identity registry to field devices, building custom eligibility and direct-payout logic, and shipping a notification loop for an average response takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your verification and payout rules into pre-audited WebAssembly binaries and provisions the relief ledger and notification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "microgrant-program-application-and-outcome-tracking-for-small-grassroo",
    icon: Handshake,
    eyebrow: "Microgrant Settlement Layer",
    headline1: "Lighten the paperwork.",
    headline2: "Fund the grassroots.",
    heroDescription:
      "Let small grassroots organizations apply, receive funds, and report outcomes through one lightweight, verified process instead of reporting rules built for large grantees. Assembled from the Civil Registry, Escrow and Conditional Settlement, and Compliance Attestations modules, it makes microgrant funding practical for organizations with little administrative capacity.",
    heroCta: "Deploy Microgrant Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a heavyweight grant process into a lightweight, verified application-to-outcome flow.",
    mechanics: [
      { title: "Lightweight Application", description: "Right-size the intake. A simplified application registers a grassroots organization through the Civil Registry with only the fields it can realistically provide, so small groups are not discouraged from applying." },
      { title: "Verified Organization", description: "Confirm the applicant once. The Civil Registry binds each grassroots org to a verified identifier, so eligibility is established without repeated document demands on every cycle." },
      { title: "Simple Escrow Release", description: "Fund on a light trigger. The Escrow and Conditional Settlement module releases the grant on a single lightweight verification, matching the scale of a microgrant rather than a large program." },
      { title: "Outcome-Lite Reporting", description: "Report by proof, not by binder. A grantee submits a short verified outcome record through Compliance Attestations, replacing the large-grantee reporting burden that overwhelms small teams." },
      { title: "Reusable Profile", description: "Apply once, carry it forward. A verified org profile and outcome history persist across programs, so a grassroots group reuses its record instead of rebuilding it each time." },
      { title: "Funder Assurance", description: "Give funders confidence at small scale. Even a lightweight process anchors disbursement and outcomes on-chain, so a funder accounts for microgrant money without heavy oversight." },
    ],
    lifecycleTitle: "The Microgrant Lifecycle",
    lifecycleSubtitle:
      "Follow a grassroots organization from a lightweight application through simple funding to a short verified outcome.",
    lifecycleSteps: [
      {
        label: "Simplified Application",
        description:
          "A grassroots organization applies through a short form. The Civil Registry registers it with a verified identifier and the minimal required fields.",
        icon: ScrollText,
        logFilename: "cerulea_microgrant.log",
        logLines: [
          { text: "[SYS] Receiving lightweight microgrant application...", time: "10:22:14", tone: "default" },
          { text: "[CMD] apply { org: \"SEED_COLLECTIVE\", program: \"MICRO_26\" }", time: "10:22:14", tone: "primary" },
          { text: "[AUTH] Registering org with minimal verified fields...", time: "10:22:15", tone: "secondary" },
          { text: "[OK] Applicant ORG_5521 anchored at block 9011233.", time: "10:22:15", tone: "success" },
        ],
      },
      {
        label: "Eligibility Confirmation",
        description:
          "The program confirms the organization once. The Civil Registry marks it eligible so future cycles reuse the profile without new document demands.",
        icon: ShieldCheck,
        logFilename: "cerulea_microgrant.log",
        logLines: [
          { text: "[SYS] Reviewing applicant ORG_5521...", time: "11:48:40", tone: "default" },
          { text: "[CMD] confirmEligibility(ORG_5521, tier: \"GRASSROOTS\")", time: "11:48:40", tone: "primary" },
          { text: "[AUTH] Marking organization eligible and reusable...", time: "11:48:41", tone: "secondary" },
          { text: "[OK] Eligibility anchored. Profile reusable.", time: "11:48:41", tone: "success" },
        ],
      },
      {
        label: "Grant Release",
        description:
          "The Escrow and Conditional Settlement module releases the microgrant on a single lightweight verification, sized for a small organization.",
        icon: Wallet,
        logFilename: "cerulea_microgrant.log",
        logLines: [
          { text: "[SYS] Preparing microgrant release for ORG_5521...", time: "14:05:29", tone: "default" },
          { text: "[CMD] releaseGrant(ORG_5521, amount: 50000)", time: "14:05:29", tone: "primary" },
          { text: "[SYS] Passing single lightweight verification...", time: "14:05:30", tone: "default" },
          { text: "[OK] Microgrant disbursed to grassroots wallet.", time: "14:05:30", tone: "success" },
        ],
      },
      {
        label: "Outcome Report",
        description:
          "The grantee submits a short verified outcome. Compliance Attestations seals it, closing the cycle without a heavy reporting burden.",
        icon: FileCheck,
        logFilename: "cerulea_microgrant.log",
        logLines: [
          { text: "[SYS] Receiving lightweight outcome record...", time: "16:33:57", tone: "default" },
          { text: "[CMD] reportOutcome(ORG_5521, summary: \"20_FAMILIES_SERVED\")", time: "16:33:57", tone: "primary" },
          { text: "[AUTH] Sealing outcome attestation to grant...", time: "16:33:58", tone: "secondary" },
          { text: "[OK] Outcome anchored. Microgrant cycle closed.", time: "16:33:58", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes microgrants into modular contracts. Each layer applies, confirms, funds, and reports at a weight a small grassroots team can actually carry.",
    layers: [
      {
        title: "Applicant Registry",
        subtitle: "The Lightweight Intake",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Lightweight Intake",
          description:
            "The foundational identity layer. It registers a grassroots organization with only the minimal fields it can provide and issues a reusable identifier, so a small team is not blocked by large-grantee paperwork.",
          platformFunction: "Identity & Registry",
        },
        codeSnippet:
          "contract ApplicantRegistry {\n  struct Org {\n    bytes32 id;\n    bytes32 program;\n    bool eligible;\n  }\n\n  mapping(bytes32 => Org) public orgs;\n\n  function apply(bytes32 id, bytes32 program) external {\n    orgs[id] = Org(id, program, false);\n  }\n}",
        simAction: "Simulate Simplified Application",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving short-form application...", tone: "default" },
          { text: "Registering SEED_COLLECTIVE with minimal fields...", tone: "default" },
          { text: "Issuing reusable organization identifier...", tone: "default" },
          { text: "Writing applicant record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Applicant ORG_5521 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Eligibility Seal",
        subtitle: "The One-Time Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The One-Time Check",
          description:
            "Confirms an organization once and marks the profile reusable. Because eligibility persists across cycles, a grassroots group is not forced to resubmit documents every time it applies for a microgrant.",
          platformFunction: "Compliance & Eligibility",
        },
        codeSnippet:
          "function confirmEligibility(bytes32 id, bytes32 tier) external onlyReviewer {\n    require(orgs[id].id != 0, \"Unknown org\");\n    orgs[id].eligible = true;\n    tiers[id] = tier;\n    emit EligibilityConfirmed(id, tier);\n}",
        simAction: "Simulate Eligibility Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reviewing applicant ORG_5521...", tone: "default" },
          { text: "Assigning grassroots tier...", tone: "default" },
          { text: "Marking organization eligible...", tone: "default" },
          { text: "Flagging profile reusable across cycles...", tone: "default" },
          { text: "[SUCCESS] Eligibility anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Grant Escrow",
        subtitle: "The Simple Release",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Simple Release",
          description:
            "Releases a microgrant on a single lightweight verification rather than a multi-stage milestone process. The release is sized and gated for small amounts, so funding a grassroots org stays fast and low-friction.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function releaseGrant(bytes32 id, uint256 amount) external onlyProgram {\n    require(orgs[id].eligible, \"Not eligible\");\n    require(!funded[id], \"Already funded\");\n    funded[id] = true;\n    payable(wallets[id]).transfer(amount);\n    emit GrantReleased(id, amount);\n}",
        simAction: "Simulate Grant Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming eligibility flag for ORG_5521...", tone: "default" },
          { text: "Checking no prior grant exists...", tone: "default" },
          { text: "Passing single lightweight verification...", tone: "default" },
          { text: "Routing 50,000 to grassroots wallet...", tone: "default" },
          { text: "[SUCCESS] Microgrant disbursed.", tone: "success" },
        ],
      },
      {
        title: "Outcome Notary",
        subtitle: "The Short Report",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Short Report",
          description:
            "Seals a brief verified outcome record to the grant. It replaces the binder-heavy reporting designed for large grantees with a proof a small team can submit in minutes, while still giving funders assurance.",
          platformFunction: "Compliance Attestations",
        },
        codeSnippet:
          "function reportOutcome(bytes32 id, bytes32 summary) external {\n    require(funded[id], \"Not funded\");\n    outcomes[id] = Outcome(summary, block.timestamp, true);\n    emit OutcomeReported(id, summary);\n}",
        simAction: "Simulate Outcome Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving lightweight outcome record...", tone: "default" },
          { text: "Confirming grant was funded...", tone: "default" },
          { text: "Sealing outcome summary to grant...", tone: "default" },
          { text: "Marking microgrant cycle closed...", tone: "default" },
          { text: "[SUCCESS] Outcome anchored, cycle closed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Lightweight microgranting is a horizontal capability. Here is how different funders put the microgrant ledger to work.",
    sectors: [
      { icon: Handshake, title: "Grassroots Grantmakers", description: "Fund small community organizations through a right-sized application and short outcome report, so limited administrative capacity no longer blocks access to microgrant money.", assetTypes: ["Microgrants", "Reusable Profiles", "Outcome Records"] },
      { icon: Building2, title: "Corporate Community Funds", description: "Distribute many small grants with on-chain assurance, accounting for every microgrant without imposing large-grantee reporting on neighborhood groups.", assetTypes: ["Community Grants", "Disbursement Logs", "Outcome Proofs"] },
      { icon: Globe, title: "Development Programs", description: "Run high-volume microgrant rounds where each grassroots org reuses a verified profile, cutting per-cycle overhead while keeping funding auditable.", assetTypes: ["Program Rounds", "Verified Applicants", "Grant Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a funder's grant portal or capturing applications from a grassroots organizer's phone, Cerulea routes both into one microgrant ledger.",
    tracks: [
      {
        title: "Track A: Grant Portal Bridging",
        description:
          "For funders on legacy grant portals. Existing applications and disbursement records are translated into signed on-chain microgrant transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Grant Portal", sublabel: "Funder Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Application Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Microgrant Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Grassroots Mobile Capture",
        description:
          "For small organizations on mobile. A progressive web app signs each application and outcome report from a phone wallet and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Grassroots PWA / Wallet", sublabel: "Organizer Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Microgrant Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Grant Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a lightweight microgrant network with reusable applicant identity, simple escrow release, and short outcome reporting from scratch requires specialised engineers and long portal integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Application & Release Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects grantmaking platform integration benchmarks. Wiring a grant portal to disbursement, building custom eligibility and outcome logic, and shipping a lightweight applicant experience for an average program takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your application and release rules into pre-audited WebAssembly binaries and provisions the microgrant ledger and reporting layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "charitable-fund-management-and-disbursement-transparency",
    icon: Landmark,
    eyebrow: "Charitable Treasury Layer",
    headline1: "Open the trust ledger.",
    headline2: "Deter every misuse.",
    heroDescription:
      "Run a private charitable fund ledger with transparent disbursement records, direct donor visibility, and real-time regulator audit access. Built on the Treasury, Procurement Ledger, and Escrow and Conditional Settlement modules, it replaces opaque management of a religious trust's donations with a tamper-proof disbursement trail that structurally deters misuse.",
    heroCta: "Deploy Charitable Treasuries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn opaque trust fund management into a donor-visible, regulator-auditable disbursement record.",
    mechanics: [
      { title: "Trust Treasury", description: "Hold funds on a transparent ledger. The Treasury module records every inflow and balance for the charitable trust, replacing opaque internal accounts that donors and regulators cannot see." },
      { title: "Procurement Trail", description: "Anchor how money is spent. The Procurement Ledger binds each disbursement to a vendor, purpose, and approval, so a spend is always traceable rather than buried in a manual voucher." },
      { title: "Approved Disbursement", description: "Gate outflows on authorization. The Escrow and Conditional Settlement module releases funds only against a recorded approval, structurally deterring the unauthorized use behind common misuse allegations." },
      { title: "Donor Visibility", description: "Show donors where gifts go. Each donor views the disbursement records tied to the trust, turning suspicion of misuse into verifiable confidence." },
      { title: "Real-Time Regulator Audit", description: "Give oversight a live window. A regulator queries fund utilization directly in real time, verifying compliance without waiting for an annual filing." },
      { title: "Tamper-Proof History", description: "Preserve an immutable record. Every inflow, approval, and disbursement is timestamped and immutable, so the disbursement trail itself deters diversion." },
    ],
    lifecycleTitle: "The Fund Lifecycle",
    lifecycleSubtitle:
      "Follow a trust donation from treasury inflow through approved disbursement to real-time regulator verification.",
    lifecycleSteps: [
      {
        label: "Treasury Inflow",
        description:
          "A donation arrives into the charitable trust. The Treasury module records the inflow and updates the transparent fund balance.",
        icon: Coins,
        logFilename: "cerulea_charitytrust.log",
        logLines: [
          { text: "[SYS] Recording donation inflow to trust treasury...", time: "09:05:31", tone: "default" },
          { text: "[CMD] deposit { trust: \"SHRINE_TRUST\", amount: 800000 }", time: "09:05:31", tone: "primary" },
          { text: "[AUTH] Updating transparent fund balance...", time: "09:05:32", tone: "secondary" },
          { text: "[OK] Inflow anchored. Treasury balance 12,400,000.", time: "09:05:32", tone: "success" },
        ],
      },
      {
        label: "Disbursement Approval",
        description:
          "A spend is proposed and approved by trustees. The Procurement Ledger records the vendor, purpose, and approval before any funds move.",
        icon: Gavel,
        logFilename: "cerulea_charitytrust.log",
        logLines: [
          { text: "[SYS] Trustees reviewing disbursement proposal...", time: "12:18:47", tone: "default" },
          { text: "[CMD] approveSpend(vendor: \"MEAL_SVC\", purpose: \"ANNADANAM\", amount: 200000)", time: "12:18:47", tone: "primary" },
          { text: "[AUTH] Recording approval and vendor to procurement ledger...", time: "12:18:48", tone: "secondary" },
          { text: "[OK] Spend SPD_2201 approved and anchored.", time: "12:18:48", tone: "success" },
        ],
      },
      {
        label: "Conditional Release",
        description:
          "The Escrow and Conditional Settlement module releases funds only against the recorded approval, deterring any unauthorized outflow.",
        icon: Wallet,
        logFilename: "cerulea_charitytrust.log",
        logLines: [
          { text: "[SYS] Matching disbursement to approval SPD_2201...", time: "13:40:12", tone: "default" },
          { text: "[CMD] disburse(SPD_2201, amount: 200000)", time: "13:40:12", tone: "primary" },
          { text: "[SYS] Verifying trustee approval on record...", time: "13:40:13", tone: "default" },
          { text: "[OK] Funds released against approved spend only.", time: "13:40:13", tone: "success" },
        ],
      },
      {
        label: "Regulator Audit",
        description:
          "A regulator queries fund utilization in real time and confirms every disbursement against its approval, with misuse structurally deterred.",
        icon: FileCheck,
        logFilename: "cerulea_charitytrust.log",
        logLines: [
          { text: "[SYS] Regulator opening real-time audit session...", time: "15:22:05", tone: "default" },
          { text: "[CMD] auditUtilization(trust: \"SHRINE_TRUST\", period: \"Q3\")", time: "15:22:05", tone: "primary" },
          { text: "[SYS] Matching every disbursement to its approval...", time: "15:22:06", tone: "default" },
          { text: "[OK] Utilization verified. Trust fully transparent.", time: "15:22:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes charitable fund management into modular contracts. Each layer holds, approves, releases, and audits without any trustee spending outside a recorded authorization.",
    layers: [
      {
        title: "Treasury Ledger",
        subtitle: "The Fund Balance",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fund Balance",
          description:
            "The foundational treasury layer. It records every donation inflow and maintains a transparent balance for the charitable trust, replacing the opaque internal accounts that donors and regulators could never see.",
          platformFunction: "Treasury Management",
        },
        codeSnippet:
          "contract TrustTreasury {\n  uint256 public balance;\n  mapping(bytes32 => uint256) public inflows;\n\n  function deposit(bytes32 ref, uint256 amount) external onlyTrust {\n    inflows[ref] = amount;\n    balance += amount;\n    emit Deposited(ref, amount, balance);\n  }\n}",
        simAction: "Simulate Treasury Inflow",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading trust treasury mandate...", tone: "default" },
          { text: "Recording donation inflow of 800,000...", tone: "default" },
          { text: "Updating transparent fund balance...", tone: "default" },
          { text: "Writing treasury state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Inflow anchored to trust treasury.", tone: "success" },
        ],
      },
      {
        title: "Procurement Notary",
        subtitle: "The Spend Record",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Spend Record",
          description:
            "Binds each proposed disbursement to a vendor, purpose, and trustee approval before funds move. Every spend becomes traceable on-chain rather than hidden in a manual voucher that misuse allegations feed on.",
          platformFunction: "Procurement Ledger",
        },
        codeSnippet:
          "function approveSpend(bytes32 id, address vendor, bytes32 purpose, uint256 amount) external onlyTrustee {\n    spends[id] = Spend(vendor, purpose, amount, msg.sender, block.timestamp, true);\n    emit SpendApproved(id, vendor, amount);\n}",
        simAction: "Simulate Disbursement Approval",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Trustees reviewing spend proposal...", tone: "default" },
          { text: "Recording vendor MEAL_SVC and purpose...", tone: "default" },
          { text: "Sealing trustee approval to procurement ledger...", tone: "default" },
          { text: "Marking spend authorized...", tone: "default" },
          { text: "[SUCCESS] Spend SPD_2201 approved and anchored.", tone: "success" },
        ],
      },
      {
        title: "Disbursement Gate",
        subtitle: "The Authorized Release",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authorized Release",
          description:
            "Releases funds only when they match a recorded trustee approval. Because an outflow without approval simply cannot execute, the gate structurally deters the unauthorized use behind common misuse allegations.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function disburse(bytes32 id) external onlyTrust {\n    Spend storage s = spends[id];\n    require(s.approved && !s.paid, \"Not authorized\");\n    require(balance >= s.amount, \"Insufficient funds\");\n    s.paid = true;\n    balance -= s.amount;\n    payable(s.vendor).transfer(s.amount);\n}",
        simAction: "Simulate Conditional Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Matching disbursement to approval SPD_2201...", tone: "default" },
          { text: "Verifying trustee approval on record...", tone: "default" },
          { text: "Confirming sufficient treasury balance...", tone: "default" },
          { text: "Releasing 200,000 to approved vendor...", tone: "default" },
          { text: "[SUCCESS] Funds released against approval only.", tone: "success" },
        ],
      },
      {
        title: "Audit Window",
        subtitle: "The Regulator View",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Regulator View",
          description:
            "A read-only gateway that lets a regulator verify fund utilization in real time, matching every disbursement to its approval. It replaces annual filings with a live query and increases donor trust measurably.",
          platformFunction: "Regulator Audit",
        },
        codeSnippet:
          "function auditUtilization(bytes32 trust) external view returns (Spend[] memory, uint256 currentBalance) {\n    return (trustSpends[trust], balance);\n}",
        simAction: "Simulate Regulator Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator opens real-time audit session...", tone: "default" },
          { text: "Loading all Q3 disbursements...", tone: "default" },
          { text: "Matching each disbursement to its approval...", tone: "default" },
          { text: "Confirming balance reconciles to inflows...", tone: "default" },
          { text: "[SUCCESS] Utilization verified in real time.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent charitable treasury is a horizontal capability. Here is how different trust actors put the fund ledger to work.",
    sectors: [
      { icon: Landmark, title: "Religious Trusts", description: "Manage donations on a tamper-proof ledger with donor visibility and regulator audit access, replacing opaque handling that invites misuse allegations with a verifiable disbursement trail.", assetTypes: ["Trust Funds", "Approved Spends", "Utilization Records"] },
      { icon: Users, title: "Charitable Foundations", description: "Give donors a direct view of how their gifts are disbursed and let oversight bodies confirm utilization in real time, turning suspicion into measurable trust.", assetTypes: ["Fund Inflows", "Disbursement Logs", "Donor Views"] },
      { icon: Gavel, title: "Regulatory Oversight Bodies", description: "Query trust fund utilization directly on-chain, verifying that every disbursement carries a recorded approval without waiting for an annual filing.", assetTypes: ["Audit Sessions", "Approval Trails", "Compliance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a trust's accounting system or capturing approvals from a trustee's device, Cerulea routes both into one treasury ledger.",
    tracks: [
      {
        title: "Track A: Trust Accounting Bridging",
        description:
          "For trusts on legacy accounting systems. Existing inflow and voucher records are translated into signed on-chain treasury transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Accounting System", sublabel: "Trust Ledger Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Inflow Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Charitable Treasury Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Trustee Approval Capture",
        description:
          "For trustees on a governance console. A signed dashboard routes each spend approval directly to the procurement ledger before funds move.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Trustee Console / Wallet", sublabel: "Governance Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Approval Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Treasury Record", icon: Landmark, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a charitable treasury with a procurement trail, approval-gated disbursement, and real-time regulator audit access from scratch requires specialised engineers and long accounting integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Treasury & Approval Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects nonprofit financial system integration benchmarks. Wiring trust accounting to a procurement workflow, building custom approval-gated disbursement logic, and shipping a real-time regulator portal for an average trust takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your treasury and approval rules into pre-audited WebAssembly binaries and provisions the fund ledger and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "pilgrimage-management-and-donation-receipt-issuance",
    icon: Ticket,
    eyebrow: "Pilgrimage Receipt Layer",
    headline1: "Issue instant receipts.",
    headline2: "Track every donation.",
    heroDescription:
      "Run a digital pilgrimage booking and donation system that issues instant, verifiable receipts for tax purposes and tracks how each donation is used. Built on the Civil Registry, Escrow and Conditional Settlement, and Audit Logs modules, it replaces easily lost paper receipts across millions of annual visitors with a permanent on-chain record.",
    heroCta: "Deploy Pilgrimage Systems",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn lost paper receipts and untracked donations into instant verifiable records at pilgrimage scale.",
    mechanics: [
      { title: "Instant Tax Receipts", description: "Replace losable paper. Each donation issues an instant, verifiable digital receipt suitable for tax deduction, so a pilgrim never depends on a paper slip that is easy to misplace." },
      { title: "Verifiable Pilgrim Identity", description: "Bind receipts to the donor. The Civil Registry links each receipt to a verified pilgrim identity, so a tax authority can confirm the deduction against a genuine record." },
      { title: "Donation Escrow", description: "Hold funds transparently. The Escrow and Conditional Settlement module records each donation and its designated use, tracking allocation rather than pooling money opaquely." },
      { title: "Booking Integration", description: "Handle visits at scale. Digital booking coordinates millions of annual pilgrims and ties each visit and any linked donation to one verifiable record." },
      { title: "Usage Tracking", description: "Show where donations go. The Audit Logs module tracks how donated funds are allocated, giving donors confidence that their contribution reached its stated purpose." },
      { title: "Receipt Verification", description: "Let anyone confirm a receipt. A public verification resolves a receipt to its donation record, so a pilgrim or auditor validates it during tax filing without contacting the site." },
    ],
    lifecycleTitle: "The Donation Lifecycle",
    lifecycleSubtitle:
      "Follow a pilgrim from digital booking through donation to an instantly verifiable tax receipt and tracked usage.",
    lifecycleSteps: [
      {
        label: "Pilgrim Booking",
        description:
          "A pilgrim books a visit digitally. The Civil Registry binds the booking to a verified identity that any linked donation and receipt will reference.",
        icon: IdCard,
        logFilename: "cerulea_pilgrimage.log",
        logLines: [
          { text: "[SYS] Registering digital pilgrimage booking...", time: "06:02:19", tone: "default" },
          { text: "[CMD] book { pilgrim: \"PIL_44210\", slot: \"DARSHAN_0900\" }", time: "06:02:19", tone: "primary" },
          { text: "[AUTH] Binding booking to verified pilgrim identity...", time: "06:02:20", tone: "secondary" },
          { text: "[OK] Booking BKG_44210 anchored at block 7712044.", time: "06:02:20", tone: "success" },
        ],
      },
      {
        label: "Donation Capture",
        description:
          "The pilgrim makes a donation. The Escrow and Conditional Settlement module records it with a designated use for later tracking.",
        icon: Coins,
        logFilename: "cerulea_pilgrimage.log",
        logLines: [
          { text: "[SYS] Receiving donation from PIL_44210...", time: "09:31:08", tone: "default" },
          { text: "[CMD] donate(pilgrim: \"PIL_44210\", amount: 5000, use: \"ANNADANAM\")", time: "09:31:08", tone: "primary" },
          { text: "[SYS] Recording designated use for tracking...", time: "09:31:09", tone: "default" },
          { text: "[OK] Donation DON_9921 captured and escrowed.", time: "09:31:09", tone: "success" },
        ],
      },
      {
        label: "Receipt Issuance",
        description:
          "The system issues an instant, verifiable digital receipt for the donation, valid for tax deduction and permanently anchored.",
        icon: Ticket,
        logFilename: "cerulea_pilgrimage.log",
        logLines: [
          { text: "[SYS] Generating instant tax receipt for DON_9921...", time: "09:31:10", tone: "default" },
          { text: "[CMD] issueReceipt(DON_9921, purpose: \"TAX_80G\")", time: "09:31:10", tone: "primary" },
          { text: "[AUTH] Sealing verifiable receipt to donation record...", time: "09:31:11", tone: "secondary" },
          { text: "[OK] Receipt RCP_9921 issued. Verifiable and permanent.", time: "09:31:11", tone: "success" },
        ],
      },
      {
        label: "Usage Verification",
        description:
          "During tax filing the pilgrim verifies the receipt and views how the donation was allocated, confirming both the deduction and the use.",
        icon: Search,
        logFilename: "cerulea_pilgrimage.log",
        logLines: [
          { text: "[SYS] Public verification request for RCP_9921...", time: "20:14:52", tone: "default" },
          { text: "[CMD] verifyReceipt(RCP_9921)", time: "20:14:52", tone: "primary" },
          { text: "[SYS] Resolving donation record and allocation trail...", time: "20:14:52", tone: "default" },
          { text: "[OK] Receipt valid. Donation usage confirmed.", time: "20:14:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes pilgrimage donation handling into modular contracts. Each layer books, captures, receipts, and tracks without a paper slip that a pilgrim can lose.",
    layers: [
      {
        title: "Booking Registry",
        subtitle: "The Pilgrim Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pilgrim Anchor",
          description:
            "The foundational identity layer. It binds a digital booking to a verified pilgrim identity at scale, so any donation and its tax receipt reference a genuine record rather than an anonymous walk-in slip.",
          platformFunction: "Identity & Booking",
        },
        codeSnippet:
          "contract PilgrimRegistry {\n  struct Booking {\n    bytes32 pilgrim;\n    bytes32 slot;\n    uint256 bookedAt;\n  }\n\n  mapping(bytes32 => Booking) public bookings;\n\n  function book(bytes32 id, bytes32 pilgrim, bytes32 slot) external {\n    bookings[id] = Booking(pilgrim, slot, block.timestamp);\n  }\n}",
        simAction: "Simulate Pilgrim Booking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving digital pilgrimage booking...", tone: "default" },
          { text: "Binding booking to verified pilgrim PIL_44210...", tone: "default" },
          { text: "Reserving darshan slot...", tone: "default" },
          { text: "Writing booking record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Booking BKG_44210 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Donation Vault",
        subtitle: "The Designated Escrow",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Designated Escrow",
          description:
            "Records each donation with a designated use so allocation can be tracked later. Rather than pooling money opaquely, it keeps every contribution tied to the purpose the pilgrim intended.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function donate(bytes32 id, bytes32 pilgrim, uint256 amount, bytes32 use) external {\n    donations[id] = Donation(pilgrim, amount, use, block.timestamp, false);\n    emit DonationCaptured(id, pilgrim, amount, use);\n}",
        simAction: "Simulate Donation Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving donation from PIL_44210...", tone: "default" },
          { text: "Recording amount of 5,000...", tone: "default" },
          { text: "Tagging designated use ANNADANAM...", tone: "default" },
          { text: "Escrowing donation for tracking...", tone: "default" },
          { text: "[SUCCESS] Donation DON_9921 captured.", tone: "success" },
        ],
      },
      {
        title: "Receipt Issuer",
        subtitle: "The Instant Seal",
        icon: Ticket,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Seal",
          description:
            "Issues an instant, verifiable receipt sealed to a donation record. Because the receipt lives on-chain, a pilgrim can produce it for tax deduction long after the paper slip would have been lost.",
          platformFunction: "Receipt Issuance",
        },
        codeSnippet:
          "function issueReceipt(bytes32 donationId, bytes32 purpose) external onlySite {\n    require(donations[donationId].amount > 0, \"No donation\");\n    receipts[donationId] = Receipt(purpose, block.timestamp, true);\n    emit ReceiptIssued(donationId, purpose);\n}",
        simAction: "Simulate Receipt Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Generating instant tax receipt for DON_9921...", tone: "default" },
          { text: "Tagging purpose TAX_80G...", tone: "default" },
          { text: "Sealing receipt to donation record...", tone: "default" },
          { text: "Marking receipt verifiable and permanent...", tone: "default" },
          { text: "[SUCCESS] Receipt RCP_9921 issued.", tone: "success" },
        ],
      },
      {
        title: "Verification Window",
        subtitle: "The Public Check",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Public Check",
          description:
            "A read-only gateway that resolves a receipt to its donation record and allocation trail. It lets a pilgrim or a tax authority validate the receipt and confirm how the funds were used without contacting the site.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyReceipt(bytes32 donationId) external view returns (Receipt memory, bytes32 use, bool allocated) {\n    Donation memory d = donations[donationId];\n    return (receipts[donationId], d.use, d.allocated);\n}",
        simAction: "Simulate Receipt Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Public verification request for RCP_9921...", tone: "default" },
          { text: "Resolving linked donation record...", tone: "default" },
          { text: "Attaching allocation trail...", tone: "default" },
          { text: "Confirming receipt validity...", tone: "default" },
          { text: "[SUCCESS] Receipt valid, usage confirmed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable pilgrimage receipting is a horizontal capability. Here is how different site actors put the donation ledger to work.",
    sectors: [
      { icon: Landmark, title: "Pilgrimage Sites", description: "Coordinate millions of visitors and donations with instant verifiable receipts and tracked usage, replacing losable paper slips with a permanent on-chain record.", assetTypes: ["Digital Bookings", "Tax Receipts", "Donation Records"] },
      { icon: Users, title: "Devotee Communities", description: "Give each pilgrim a receipt they can verify at tax time and a view of how their donation was used, building confidence across a large devotee base.", assetTypes: ["Pilgrim Identities", "Verifiable Receipts", "Usage Trails"] },
      { icon: Gavel, title: "Tax Authorities", description: "Validate donation receipts against genuine on-chain records, confirming deductions without contacting the site and reducing fraudulent claims.", assetTypes: ["Receipt Verifications", "Deduction Records", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a site's booking system or capturing donations from a pilgrim's phone, Cerulea routes both into one donation ledger.",
    tracks: [
      {
        title: "Track A: Booking System Bridging",
        description:
          "For sites on legacy booking and counter systems. Existing bookings and donation entries are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Booking System", sublabel: "Site Counter Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Booking Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Pilgrimage Donation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Pilgrim Mobile Capture",
        description:
          "For pilgrims on mobile. A progressive web app signs each booking and donation from a phone wallet and receives an instant verifiable receipt from the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Pilgrim PWA / Wallet", sublabel: "Devotee Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Receipt Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Donation Record", icon: Ticket, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a pilgrimage booking and donation system with verified identity, instant tax receipts, and usage tracking from scratch requires specialised engineers and long booking integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Receipt & Donation Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects high-volume booking platform integration benchmarks. Wiring a booking system to donation capture, building custom receipt and usage-tracking logic, and shipping a public verification portal for an average site takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your receipt and donation rules into pre-audited WebAssembly binaries and provisions the donation ledger and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "temple-trust-property-asset-registry-and-lease-tracking",
    icon: Building2,
    eyebrow: "Trust Property Registry Layer",
    headline1: "Register every property.",
    headline2: "Track every lease.",
    heroDescription:
      "Deploy a verified registry of temple and trust-owned properties and their lease agreements, tracking rent against each lease to stop under-collection or unauthorized occupation. Built on the Civil Registry, Provenance Notary, and Audit Logs modules, it brings order to portfolios of land, buildings, and shops accumulated over centuries.",
    heroCta: "Deploy Property Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn incomplete property records and lost rent into a verified registry with lease-level tracking.",
    mechanics: [
      { title: "Verified Property Registry", description: "Catalog the whole portfolio. The Civil Registry records each temple or trust property, its type, and its boundaries, replacing incomplete century-old records that fuel disputes." },
      { title: "Ownership Provenance", description: "Anchor who owns what. The Provenance Notary binds each property's ownership and title documents on-chain, making unauthorized occupation detectable against a verified claim." },
      { title: "Lease Agreement Ledger", description: "Record every lease term. Each lease is anchored with its tenant, rent, and duration, so a property's occupancy status is always clear rather than buried in paper." },
      { title: "Rent Tracking", description: "Match collection to lease. Rent due is tracked against each lease agreement, so under-collection surfaces immediately instead of quietly draining trust revenue." },
      { title: "Occupation Alerts", description: "Flag unauthorized use. Any occupancy without a matching lease is detectable against the registry, deterring encroachment on trust land and buildings." },
      { title: "Immutable Property Log", description: "Preserve the full history. The Audit Logs module records every registration, lease, and rent event, so a disputed property is resolved against a signed timeline." },
    ],
    lifecycleTitle: "The Property Lifecycle",
    lifecycleSubtitle:
      "Follow a trust property from registration through a leased agreement to tracked rent and detected under-collection.",
    lifecycleSteps: [
      {
        label: "Property Registration",
        description:
          "A trust registers a property with its type, boundaries, and title. The Provenance Notary anchors ownership as the verified basis for every later record.",
        icon: Home,
        logFilename: "cerulea_trustproperty.log",
        logLines: [
          { text: "[SYS] Registering trust-owned property...", time: "08:41:12", tone: "default" },
          { text: "[CMD] registerProperty { trust: \"TEMPLE_TRUST\", type: \"SHOP\", id: \"SHOP_112\" }", time: "08:41:12", tone: "primary" },
          { text: "[AUTH] Anchoring title and boundaries to registry...", time: "08:41:13", tone: "secondary" },
          { text: "[OK] Property SHOP_112 anchored at block 6620911.", time: "08:41:13", tone: "success" },
        ],
      },
      {
        label: "Lease Agreement",
        description:
          "The trust leases the property to a tenant. The lease ledger anchors the tenant, rent, and duration against the property record.",
        icon: Handshake,
        logFilename: "cerulea_trustproperty.log",
        logLines: [
          { text: "[SYS] Recording lease agreement for SHOP_112...", time: "11:15:33", tone: "default" },
          { text: "[CMD] createLease(SHOP_112, tenant: \"TN_4420\", rent: 18000, term: \"36M\")", time: "11:15:33", tone: "primary" },
          { text: "[AUTH] Binding lease terms to property record...", time: "11:15:34", tone: "secondary" },
          { text: "[OK] Lease LSE_7781 anchored. Property occupied.", time: "11:15:34", tone: "success" },
        ],
      },
      {
        label: "Rent Tracking",
        description:
          "Rent due is tracked against the lease. A shortfall against the agreed amount surfaces immediately as under-collection.",
        icon: Coins,
        logFilename: "cerulea_trustproperty.log",
        logLines: [
          { text: "[SYS] Reconciling rent cycle for LSE_7781...", time: "10:04:26", tone: "default" },
          { text: "[CMD] recordRent(LSE_7781, received: 12000, due: 18000)", time: "10:04:26", tone: "primary" },
          { text: "[SYS] Detecting shortfall against agreed rent...", time: "10:04:27", tone: "default" },
          { text: "[OK] Under-collection of 6000 flagged on lease.", time: "10:04:27", tone: "error" },
        ],
      },
      {
        label: "Occupation Audit",
        description:
          "The trust audits occupancy against the registry. Any property occupied without a matching lease is flagged as unauthorized.",
        icon: Search,
        logFilename: "cerulea_trustproperty.log",
        logLines: [
          { text: "[SYS] Auditing occupancy across trust portfolio...", time: "15:38:49", tone: "default" },
          { text: "[CMD] auditOccupation(trust: \"TEMPLE_TRUST\")", time: "15:38:49", tone: "primary" },
          { text: "[SYS] Matching each occupancy to a valid lease...", time: "15:38:50", tone: "default" },
          { text: "[OK] 1 unauthorized occupation detected and flagged.", time: "15:38:50", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes trust property management into modular contracts. Each layer registers, leases, tracks, and audits without ownership or rent slipping into an incomplete paper record.",
    layers: [
      {
        title: "Property Registry",
        subtitle: "The Asset Catalog",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Asset Catalog",
          description:
            "The foundational registry layer. It records each temple or trust property with its type, boundaries, and title, replacing incomplete records accumulated over centuries with a single verified catalog.",
          platformFunction: "Identity & Registry",
        },
        codeSnippet:
          "contract PropertyRegistry {\n  struct Property {\n    bytes32 trust;\n    bytes32 kind;\n    bytes32 titleHash;\n    bool leased;\n  }\n\n  mapping(bytes32 => Property) public properties;\n\n  function registerProperty(bytes32 id, bytes32 trust, bytes32 kind, bytes32 title) external onlyTrust {\n    properties[id] = Property(trust, kind, title, false);\n  }\n}",
        simAction: "Simulate Property Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading trust mandate for TEMPLE_TRUST...", tone: "default" },
          { text: "Recording property type and boundaries...", tone: "default" },
          { text: "Hashing title document for SHOP_112...", tone: "default" },
          { text: "Writing property record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Property SHOP_112 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Lease Ledger",
        subtitle: "The Agreement Seal",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Agreement Seal",
          description:
            "Anchors each lease with its tenant, rent, and duration and marks the property occupied. Because occupancy status is on-chain, the trust always knows which assets are leased and on what terms.",
          platformFunction: "Provenance & Leasing",
        },
        codeSnippet:
          "function createLease(bytes32 propId, bytes32 tenant, uint256 rent, uint256 term) external onlyTrust {\n    require(!properties[propId].leased, \"Already leased\");\n    leases[propId] = Lease(tenant, rent, term, block.timestamp, true);\n    properties[propId].leased = true;\n    emit LeaseCreated(propId, tenant, rent);\n}",
        simAction: "Simulate Lease Agreement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording lease for SHOP_112...", tone: "default" },
          { text: "Binding tenant TN_4420 and rent 18,000...", tone: "default" },
          { text: "Setting 36-month lease term...", tone: "default" },
          { text: "Marking property as occupied...", tone: "default" },
          { text: "[SUCCESS] Lease LSE_7781 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Rent Tracker",
        subtitle: "The Collection Check",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Collection Check",
          description:
            "Matches rent received against the agreed amount on each lease. A shortfall is flagged immediately as under-collection, so revenue quietly lost to unpaid rent is surfaced instead of hidden.",
          platformFunction: "Audit & Revenue",
        },
        codeSnippet:
          "function recordRent(bytes32 leaseId, uint256 received) external onlyTrust {\n    Lease storage l = leases[leaseId];\n    l.collected += received;\n    if (received < l.rent) emit ShortfallFlagged(leaseId, l.rent - received);\n    emit RentRecorded(leaseId, received);\n}",
        simAction: "Simulate Rent Tracking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reconciling rent cycle for LSE_7781...", tone: "default" },
          { text: "Comparing received 12,000 against due 18,000...", tone: "default" },
          { text: "Detecting shortfall of 6,000...", tone: "default" },
          { text: "Flagging under-collection on lease...", tone: "default" },
          { text: "[SUCCESS] Rent tracked, shortfall surfaced.", tone: "success" },
        ],
      },
      {
        title: "Occupation Auditor",
        subtitle: "The Encroachment Check",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Encroachment Check",
          description:
            "A read-only gateway that matches every occupancy against a valid lease. Any property occupied without an agreement is flagged as unauthorized, deterring encroachment on trust land and buildings.",
          platformFunction: "Occupancy Audit",
        },
        codeSnippet:
          "function auditOccupation(bytes32 trust) external view returns (bytes32[] memory unauthorized) {\n    return findUnleasedOccupancy(trust);\n}",
        simAction: "Simulate Occupation Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditing occupancy across portfolio...", tone: "default" },
          { text: "Matching each property to a valid lease...", tone: "default" },
          { text: "Comparing occupancy against registry...", tone: "default" },
          { text: "Flagging property with no matching lease...", tone: "default" },
          { text: "[SUCCESS] Unauthorized occupation detected.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified property and lease tracking is a horizontal capability. Here is how different trust actors put the registry to work.",
    sectors: [
      { icon: Landmark, title: "Religious Trusts", description: "Catalog land, buildings, and shops accumulated over centuries in one verified registry, tracking rent against each lease to stop under-collection and unauthorized occupation.", assetTypes: ["Property Titles", "Lease Agreements", "Rent Records"] },
      { icon: Building2, title: "Endowment Boards", description: "Manage a large property portfolio with on-chain ownership provenance, so disputes are resolved against a signed timeline rather than incomplete paper records.", assetTypes: ["Asset Portfolios", "Ownership Proofs", "Occupancy Logs"] },
      { icon: Gavel, title: "Property Oversight Authorities", description: "Verify trust holdings and lease compliance directly on-chain, detecting encroachment and revenue leakage without a manual physical survey.", assetTypes: ["Registry Audits", "Compliance Records", "Encroachment Flags"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a trust's land records system or capturing lease and rent events from an estate manager's device, Cerulea routes both into one property ledger.",
    tracks: [
      {
        title: "Track A: Land Records Bridging",
        description:
          "For trusts with legacy land and estate records. Existing property and lease entries are translated into signed on-chain registry transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Land Records", sublabel: "Estate Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Title Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Trust Property Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Estate Manager Capture",
        description:
          "For estate managers on mobile. A progressive web app signs each lease and rent event from a phone wallet and routes it directly to the property ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Manager PWA / Wallet", sublabel: "Estate Field Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Registry Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Property Record", icon: Building2, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verified property registry with ownership provenance, a lease ledger, and rent-shortfall tracking from scratch requires specialised engineers and long land-records integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Property & Lease Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects land and estate records integration benchmarks. Wiring legacy property records to a lease workflow, building custom ownership-provenance and rent-tracking logic, and shipping an occupancy audit for an average portfolio takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your property and lease rules into pre-audited WebAssembly binaries and provisions the registry ledger and audit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const philanthropyNonProfitItems: ExtraCaseItem[] = [
  {
    label: "Donation tracking and aid disbursement transparency",
    href: "/solutions/use-case/donation-tracking-and-aid-disbursement-transparency",
    description: "Trace every gift through milestone-gated aid escrow.",
    icon: Gift,
    category: "ENTERPRISE",
    tags: ["Philanthropy", "Transparency"],
    industry: INDUSTRY,
  },
  {
    label: "Impact reporting and outcome verification for grant compliance",
    href: "/solutions/use-case/impact-reporting-and-outcome-verification-for-grant-compliance",
    description: "Anchor field outcomes for fast funder audits.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Grants", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Volunteer hour tracking and verification for CSR reporting",
    href: "/solutions/use-case/volunteer-hour-tracking-and-verification-for-csr-reporting",
    description: "NGO-confirmed hours consolidated for corporate CSR.",
    icon: Users,
    category: "ENTERPRISE",
    tags: ["CSR", "Volunteering"],
    industry: INDUSTRY,
  },
  {
    label: "Multi-donor pooled fund allocation transparency",
    href: "/solutions/use-case/multi-donor-pooled-fund-allocation-transparency",
    description: "Trace each donor's share across every grantee.",
    icon: PieChart,
    category: "DAPPS",
    tags: ["Pooled Funds", "Transparency"],
    industry: INDUSTRY,
  },
  {
    label: "Disaster relief fund rapid disbursement with beneficiary verification",
    href: "/solutions/use-case/disaster-relief-fund-rapid-disbursement-with-beneficiary-verification",
    description: "Verify affected families and disburse within hours.",
    icon: Zap,
    category: "GOVERNMENT",
    tags: ["Disaster Relief", "Disbursement"],
    industry: INDUSTRY,
  },
  {
    label: "Microgrant program application and outcome tracking for small grassroots orgs",
    href: "/solutions/use-case/microgrant-program-application-and-outcome-tracking-for-small-grassroo",
    description: "Lightweight verified funding for grassroots organizations.",
    icon: Handshake,
    category: "SME",
    tags: ["Microgrants", "Grassroots"],
    industry: INDUSTRY,
  },
  {
    label: "Charitable fund management and disbursement transparency",
    href: "/solutions/use-case/charitable-fund-management-and-disbursement-transparency",
    description: "Trust treasury with regulator-auditable disbursement trail.",
    icon: Landmark,
    category: "GOVERNMENT",
    tags: ["Charitable Trust", "Treasury"],
    industry: INDUSTRY,
  },
  {
    label: "Pilgrimage management and donation receipt issuance",
    href: "/solutions/use-case/pilgrimage-management-and-donation-receipt-issuance",
    description: "Instant verifiable tax receipts with tracked donation usage.",
    icon: Ticket,
    category: "GOVERNMENT",
    tags: ["Pilgrimage", "Receipts"],
    industry: INDUSTRY,
  },
  {
    label: "Temple/trust property asset registry and lease tracking",
    href: "/solutions/use-case/temple-trust-property-asset-registry-and-lease-tracking",
    description: "Verified trust property registry with lease and rent tracking.",
    icon: Building2,
    category: "GOVERNMENT",
    tags: ["Property Registry", "Leases"],
    industry: INDUSTRY,
  },
]
