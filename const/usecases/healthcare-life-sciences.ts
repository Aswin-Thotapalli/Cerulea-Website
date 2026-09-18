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

const INDUSTRY = "Healthcare & Life Sciences"

export const healthcareLifeSciencesCases: CaseEntry[] = [
  {
    slug: "lab-test-result-integrity-and-chain-of-custody-for-medicolegal-use",
    icon: Gavel,
    eyebrow: "Medicolegal Evidence Chain",
    headline1: "Anchor every result.",
    headline2: "Defend it in court.",
    heroDescription:
      "Bind each lab result to the analyst who signed it and to an immutable custody trail on a private medicolegal evidence chain. When an insurer or opposing counsel alleges tampering, the record answers with cryptographic proof instead of a disputed paper file.",
    heroCta: "Deploy Evidence Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a contestable paper report into a signed, tamper-evident exhibit ready for litigation.",
    mechanics: [
      { title: "Result Anchoring", description: "The Evidence Chain module hashes each finalized result and seals it to the sample and the run, so any later edit to a value breaks the digest and is detectable." },
      { title: "Analyst Attestation", description: "The signing analyst binds a verified credential to the result at release, turning an anonymous printout into an accountable, individually attributed statement." },
      { title: "Immutable Custody Trail", description: "The Provenance Notary records every handoff of the specimen from collection to disposal, so no gap in possession can be alleged without evidence." },
      { title: "Credentialed Identities", description: "The DID and VC Ledger issues verifiable identities to collectors, analysts, and reviewers, so every action on a sample is tied to a known, credentialed party." },
      { title: "Selective Disclosure", description: "A court or insurer receives a verifiable extract proving integrity and custody for one case, without exposing the wider laboratory information system." },
      { title: "Dispute Resolution", description: "A tampering allegation is tested against the anchored hash and custody log in a single query, settling in hours what once took months of discovery." },
    ],
    lifecycleTitle: "The Evidence Lifecycle",
    lifecycleSubtitle:
      "Follow one specimen from collection through analyst release to a contested claim resolved on cryptographic proof.",
    lifecycleSteps: [
      {
        label: "Specimen Intake",
        description:
          "A phlebotomist registers the specimen at collection. The contract anchors the patient reference, collection time, and collector identity as the genesis of the custody chain.",
        icon: Droplet,
        logFilename: "cerulea_evidence_chain.log",
        logLines: [
          { text: "[SYS] Opening custody manifest for specimen SPC_77120...", time: "07:41:02", tone: "default" },
          { text: "[CMD] registerSpecimen { patientRef: \"PT_4821\", collector: \"PHL_08\" }", time: "07:41:02", tone: "primary" },
          { text: "[AUTH] Verifying collector credential and timestamp...", time: "07:41:03", tone: "secondary" },
          { text: "[OK] Specimen SPC_77120 anchored at block 5120441.", time: "07:41:03", tone: "success" },
        ],
      },
      {
        label: "Analysis & Release",
        description:
          "The analyst completes the assay and releases the result. The value is hashed and co-signed with the analyst's verified credential before it can leave the laboratory.",
        icon: FlaskConical,
        logFilename: "cerulea_evidence_chain.log",
        logLines: [
          { text: "[SYS] Finalizing result for SPC_77120...", time: "11:18:44", tone: "default" },
          { text: "[CMD] sealResult(SPC_77120, hash: 0x9af..c21, analyst: \"AN_31\")", time: "11:18:45", tone: "primary" },
          { text: "[AUTH] Binding analyst attestation to result digest...", time: "11:18:45", tone: "secondary" },
          { text: "[OK] Result sealed. Tamper-evident and attributed.", time: "11:18:46", tone: "success" },
        ],
      },
      {
        label: "Custody Handoff",
        description:
          "The report moves to the claims file and, later, to counsel. Each transfer of the record is logged, keeping the possession trail unbroken through every party.",
        icon: Truck,
        logFilename: "cerulea_evidence_chain.log",
        logLines: [
          { text: "[SYS] Recording custody transfer to claims desk...", time: "14:02:10", tone: "default" },
          { text: "[CMD] transferCustody(SPC_77120, to: \"CLAIMS_0x14\")", time: "14:02:10", tone: "primary" },
          { text: "[SYS] Possession log extended, no gap detected.", time: "14:02:11", tone: "default" },
          { text: "[OK] Custody chain length now 4 hops.", time: "14:02:11", tone: "success" },
        ],
      },
      {
        label: "Challenge Resolution",
        description:
          "An insurer alleges the result was altered. A verifier recomputes the digest and replays the custody log, returning a definitive integrity verdict against the sealed record.",
        icon: Gavel,
        logFilename: "cerulea_evidence_chain.log",
        logLines: [
          { text: "[SYS] Tampering claim filed against SPC_77120...", time: "09:33:27", tone: "default" },
          { text: "[CMD] verifyIntegrity(SPC_77120)", time: "09:33:27", tone: "primary" },
          { text: "[SYS] Recomputed hash matches sealed digest 0x9af..c21.", time: "09:33:28", tone: "default" },
          { text: "[OK] Integrity confirmed. Allegation dismissed on proof.", time: "09:33:28", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes medicolegal integrity into modular contracts. Each layer registers, seals, attributes, and verifies a result without any single laboratory controlling the record.",
    layers: [
      {
        title: "Custody Registry",
        subtitle: "The Chain Genesis",
        icon: Droplet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Chain Genesis",
          description:
            "The foundational data layer. It mints a unique specimen identity at collection and stores the immutable link to patient reference, collection time, and collector that every custody event points back to.",
          platformFunction: "Identity & Custody",
        },
        codeSnippet:
          "contract CustodyRegistry {\n  struct Specimen {\n    bytes32 patientRef;\n    address collector;\n    uint256 collectedAt;\n    bool sealed;\n  }\n\n  mapping(bytes32 => Specimen) public specimens;\n\n  function register(bytes32 id, bytes32 patientRef) external {\n    specimens[id] = Specimen(patientRef, msg.sender, block.timestamp, false);\n  }\n}",
        simAction: "Simulate Specimen Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading collector credential for PHL_08...", tone: "default" },
          { text: "Stamping collection timestamp...", tone: "default" },
          { text: "Writing specimen genesis to Level 1 storage...", tone: "default" },
          { text: "Locking patient reference PT_4821...", tone: "default" },
          { text: "[SUCCESS] Specimen SPC_77120 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Result Notary",
        subtitle: "The Sealed Value",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Value",
          description:
            "Anchors each finalized result by its cryptographic digest and binds the analyst attestation. The raw report stays in the LIS, but any change to a value breaks the hash and is instantly detectable.",
          platformFunction: "Provenance & Attestation",
        },
        codeSnippet:
          "function sealResult(bytes32 id, bytes32 resultHash, bytes calldata sig) external onlyAnalyst {\n    require(!specimens[id].sealed, \"Already sealed\");\n    require(verifyCredential(msg.sender, sig), \"Bad attestation\");\n    results[id] = Result(resultHash, msg.sender, block.timestamp);\n    specimens[id].sealed = true;\n    emit ResultSealed(id, resultHash, msg.sender);\n}",
        simAction: "Simulate Result Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting finalized result for SPC_77120...", tone: "default" },
          { text: "Computing SHA-256 digest of the value...", tone: "default" },
          { text: "Binding analyst AN_31 attestation...", tone: "default" },
          { text: "Marking specimen as sealed...", tone: "default" },
          { text: "[SUCCESS] Result sealed, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Handoff Ledger",
        subtitle: "The Possession Log",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Possession Log",
          description:
            "Records every transfer of the record between parties so custody is never in doubt. Each hop appends to an ordered log, making any alleged gap in possession provable or refutable on-chain.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function transferCustody(bytes32 id, address to) external {\n    require(custody[id] == msg.sender, \"Not holder\");\n    chain[id].push(Hop(msg.sender, to, block.timestamp));\n    custody[id] = to;\n    emit CustodyTransferred(id, msg.sender, to);\n}",
        simAction: "Simulate Custody Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Current holder requesting transfer of SPC_77120...", tone: "default" },
          { text: "Appending hop to possession log...", tone: "default" },
          { text: "Updating current custodian to claims desk...", tone: "default" },
          { text: "Checking for ordering gaps...", tone: "default" },
          { text: "[SUCCESS] Custody transferred, chain intact.", tone: "success" },
        ],
      },
      {
        title: "Integrity Verifier",
        subtitle: "The Court Window",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Court Window",
          description:
            "A read-only gateway that recomputes the sealed digest and replays the custody log for one case. It lets a court or insurer confirm integrity and possession without access to the wider laboratory system.",
          platformFunction: "Verification & Disclosure",
        },
        codeSnippet:
          "function verifyIntegrity(bytes32 id) external view returns (bool, Hop[] memory) {\n    Result memory r = results[id];\n    bool intact = keccak256(rawOf(id)) == r.resultHash;\n    return (intact, chain[id]);\n}",
        simAction: "Simulate Integrity Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Court verifier opens case SPC_77120...", tone: "default" },
          { text: "Recomputing digest of stored value...", tone: "default" },
          { text: "Comparing against sealed hash 0x9af..c21...", tone: "default" },
          { text: "Replaying 4-hop possession log...", tone: "default" },
          { text: "[SUCCESS] Integrity and custody verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Tamper-evident result integrity is a horizontal capability. Here is how different actors in the medicolegal chain put it to work.",
    sectors: [
      { icon: FlaskConical, title: "Diagnostic Laboratories", description: "Release results that carry their own proof of integrity and authorship, so a lab defends its findings against tampering claims from a signed record rather than an internal audit that outsiders cannot trust.", assetTypes: ["Sealed Results", "Analyst Attestations", "Custody Trails"] },
      { icon: Wallet, title: "Insurers & Claims", description: "Settle disputed claims on cryptographic evidence, confirming a submitted lab value was never altered before it reached the claims file, and closing tampering disputes in hours instead of months.", assetTypes: ["Claim Evidence", "Integrity Proofs", "Dispute Records"] },
      { icon: Landmark, title: "Courts & Regulators", description: "Receive a verifiable case extract that proves both the value and its chain of custody, replacing contested paper exhibits and expert testimony about handling with a single on-chain verification.", assetTypes: ["Case Exhibits", "Verification Reports", "Compliance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy laboratory information system or capturing collector attestations from the field, Cerulea routes both into one evidentiary record.",
    tracks: [
      {
        title: "Track A: Laboratory System Bridging",
        description:
          "For accredited labs on legacy LIS platforms. Finalized results are hashed and sealed as on-chain evidence through the API gateway without changing the analyst's workflow.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy LIS", sublabel: "Laboratory Information System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Result Hashing & Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Medicolegal Evidence Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Custody Capture",
        description:
          "For collectors and couriers on mobile. A signed app records each collection and handoff from a device wallet and routes it directly to the evidence chain.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Collector App / Wallet", sublabel: "Phlebotomist Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Custody Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Chain of Custody Record", icon: Gavel, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a medicolegal evidence chain with result sealing, analyst attestation, and a court-facing verifier from scratch requires specialised engineers and long accreditation cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Attestation Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects regulated laboratory integration benchmarks. Wiring the LIS, building result-sealing and attestation logic, and shipping a court-facing verification portal for an average deployment takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and attestation rules into pre-audited WebAssembly binaries and provisions the private evidence ledger and verifier instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "genetic-testing-consent-and-data-usage-tracking",
    icon: Biotech,
    eyebrow: "Genomic Consent Ledger",
    headline1: "Anchor the exact consent.",
    headline2: "Check every future use.",
    heroDescription:
      "Record precisely what a patient agreed to when their genetic data was collected, then test every downstream research query or third-party share against those terms. Consent stops being a signed form in a drawer and becomes an enforced, verifiable rule.",
    heroCta: "Deploy Consent Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a broad paper consent form into a granular, machine-checkable permission that governs each use.",
    mechanics: [
      { title: "Granular Consent Anchor", description: "The DID and VC Ledger records the specific purposes a patient approved, research, insurer access, or lab sharing, as a signed credential rather than an open-ended waiver." },
      { title: "Usage Gate", description: "The Compliance Attestations module checks each proposed use against the anchored terms, so a query outside the agreed scope is refused before any data is released." },
      { title: "Immutable Usage Log", description: "The Audit Logs module records every access and share, giving the patient and the regulator a complete, tamper-evident history of who used the data and why." },
      { title: "Consent Withdrawal", description: "A patient can revoke a purpose, and the gate immediately stops honoring queries under that purpose, without needing to trust each downstream party to comply." },
      { title: "Third-Party Verification", description: "A research partner or insurer proves it holds a valid permission for a dataset before access, so unauthorized secondary use becomes structurally impossible." },
      { title: "Patient Transparency", description: "The patient sees exactly what was agreed and every use made of their genome, replacing a blind broad-consent form with a live, auditable record they control." },
    ],
    lifecycleTitle: "The Consent Lifecycle",
    lifecycleSubtitle:
      "Follow one patient's genetic consent from signing through a scoped research query to a later withdrawal.",
    lifecycleSteps: [
      {
        label: "Consent Capture",
        description:
          "A patient agrees to specific uses at sample collection. The contract anchors each approved purpose as a signed credential bound to the patient's decentralized identity.",
        icon: Fingerprint,
        logFilename: "cerulea_genomic_consent.log",
        logLines: [
          { text: "[SYS] Recording consent for subject DID:gen:5521...", time: "10:05:12", tone: "default" },
          { text: "[CMD] anchorConsent { research: true, insurer: false, share: false }", time: "10:05:12", tone: "primary" },
          { text: "[AUTH] Signing consent credential to patient DID...", time: "10:05:13", tone: "secondary" },
          { text: "[OK] Consent anchored at block 6031877.", time: "10:05:13", tone: "success" },
        ],
      },
      {
        label: "Scoped Query",
        description:
          "A research group requests the genome for a study. The usage gate confirms the research purpose was approved before any data is unlocked for the query.",
        icon: FlaskConical,
        logFilename: "cerulea_genomic_consent.log",
        logLines: [
          { text: "[SYS] Access request from RESEARCH_0x88...", time: "13:47:30", tone: "default" },
          { text: "[CMD] requestUse(subject: \"gen:5521\", purpose: \"RESEARCH\")", time: "13:47:30", tone: "primary" },
          { text: "[AUTH] Matching purpose against anchored consent...", time: "13:47:31", tone: "secondary" },
          { text: "[OK] Purpose permitted. Access token issued.", time: "13:47:31", tone: "success" },
        ],
      },
      {
        label: "Usage Logging",
        description:
          "Every access is written to the immutable log. The patient and regulator can see who used the data, for what purpose, and when, with no reliance on the party's own records.",
        icon: ScrollText,
        logFilename: "cerulea_genomic_consent.log",
        logLines: [
          { text: "[SYS] Appending usage event for gen:5521...", time: "13:47:32", tone: "default" },
          { text: "[CMD] logUsage(user: \"RESEARCH_0x88\", purpose: \"RESEARCH\")", time: "13:47:32", tone: "primary" },
          { text: "[SYS] Event written to immutable usage ledger.", time: "13:47:32", tone: "default" },
          { text: "[OK] Usage recorded. Visible to patient portal.", time: "13:47:33", tone: "success" },
        ],
      },
      {
        label: "Consent Withdrawal",
        description:
          "The patient later revokes the research purpose. The gate stops honoring research queries immediately, enforcing the change without trusting downstream holders to comply.",
        icon: Lock,
        logFilename: "cerulea_genomic_consent.log",
        logLines: [
          { text: "[SYS] Withdrawal request from subject gen:5521...", time: "16:20:55", tone: "default" },
          { text: "[CMD] revokePurpose(subject: \"gen:5521\", purpose: \"RESEARCH\")", time: "16:20:55", tone: "primary" },
          { text: "[SYS] Consent state updated, research now denied.", time: "16:20:56", tone: "default" },
          { text: "[OK] Future research queries will be refused.", time: "16:20:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes genomic consent into modular contracts. Each layer anchors, gates, logs, and revokes permission so a patient's terms govern every use of their genome.",
    layers: [
      {
        title: "Consent Registry",
        subtitle: "The Permission Anchor",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Permission Anchor",
          description:
            "The foundational data layer. It stores each approved purpose as a signed flag bound to the patient's identity, replacing an open broad-consent form with a precise, machine-readable set of permissions.",
          platformFunction: "Identity & Consent",
        },
        codeSnippet:
          "contract ConsentRegistry {\n  struct Consent {\n    bool research;\n    bool insurer;\n    bool thirdParty;\n    uint256 signedAt;\n  }\n\n  mapping(bytes32 => Consent) public consents;\n\n  function anchor(bytes32 subject, bool r, bool i, bool t) external onlySubject(subject) {\n    consents[subject] = Consent(r, i, t, block.timestamp);\n  }\n}",
        simAction: "Simulate Consent Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading subject identity DID:gen:5521...", tone: "default" },
          { text: "Encoding approved purposes...", tone: "default" },
          { text: "Signing consent credential...", tone: "default" },
          { text: "Writing permission state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Consent anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Usage Gate",
        subtitle: "The Purpose Check",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Purpose Check",
          description:
            "Refuses any use outside the anchored terms. Before a genome is released, this module confirms the requested purpose was approved and still active, blocking unauthorized secondary use at the protocol level.",
          platformFunction: "Access Control",
        },
        codeSnippet:
          "function requestUse(bytes32 subject, uint8 purpose) external returns (bool) {\n    Consent memory c = consents[subject];\n    if (purpose == RESEARCH) require(c.research, \"Not consented\");\n    if (purpose == INSURER) require(c.insurer, \"Not consented\");\n    emit AccessGranted(subject, purpose, msg.sender);\n    return true;\n}",
        simAction: "Simulate Purpose Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Research group requests genome gen:5521...", tone: "default" },
          { text: "Loading anchored consent flags...", tone: "default" },
          { text: "Confirming research purpose is approved...", tone: "default" },
          { text: "Issuing scoped access token...", tone: "default" },
          { text: "[SUCCESS] Access permitted within consent.", tone: "success" },
        ],
      },
      {
        title: "Usage Ledger",
        subtitle: "The Access History",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Access History",
          description:
            "Writes an immutable record of every access and share. It gives the patient and the regulator a complete, tamper-evident history without relying on each data holder to keep honest logs.",
          platformFunction: "Audit & Logging",
        },
        codeSnippet:
          "function logUsage(bytes32 subject, address user, uint8 purpose) external {\n    usage[subject].push(Access(user, purpose, block.timestamp));\n    emit UsageLogged(subject, user, purpose);\n}",
        simAction: "Simulate Usage Log",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Access granted event received...", tone: "default" },
          { text: "Composing usage record for gen:5521...", tone: "default" },
          { text: "Appending to immutable usage ledger...", tone: "default" },
          { text: "Publishing entry to patient portal...", tone: "default" },
          { text: "[SUCCESS] Usage recorded and visible.", tone: "success" },
        ],
      },
      {
        title: "Revocation Engine",
        subtitle: "The Withdrawal Switch",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Withdrawal Switch",
          description:
            "Lets a patient revoke a purpose at any time. The change takes effect immediately at the gate, so no downstream holder can continue to use the data under a withdrawn permission.",
          platformFunction: "Consent Withdrawal",
        },
        codeSnippet:
          "function revokePurpose(bytes32 subject, uint8 purpose) external onlySubject(subject) {\n    if (purpose == RESEARCH) consents[subject].research = false;\n    if (purpose == INSURER) consents[subject].insurer = false;\n    emit PurposeRevoked(subject, purpose);\n}",
        simAction: "Simulate Consent Withdrawal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Patient requests withdrawal of research use...", tone: "default" },
          { text: "Loading current consent state...", tone: "default" },
          { text: "Clearing research permission flag...", tone: "default" },
          { text: "Propagating denial to usage gate...", tone: "default" },
          { text: "[SUCCESS] Research access revoked immediately.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Enforceable genomic consent is a horizontal capability. Here is how different actors around genetic data put it to work.",
    sectors: [
      { icon: Biotech, title: "Genetic Testing Labs", description: "Prove to patients and regulators that every use of a genome was covered by a specific, active consent, turning a sensitive data liability into a demonstrable compliance strength.", assetTypes: ["Consent Credentials", "Usage Logs", "Withdrawal Records"] },
      { icon: FlaskConical, title: "Research Institutions", description: "Access genomic datasets with cryptographic proof that each subject approved research use, removing the legal uncertainty that stalls multi-site studies and secondary analyses.", assetTypes: ["Scoped Datasets", "Purpose Tokens", "Study Audit Trails"] },
      { icon: Landmark, title: "Data Protection Regulators", description: "Audit how genetic data was used against the consent that governed it, replacing document requests and self-attestations with a live, tamper-evident usage history.", assetTypes: ["Audit Trails", "Compliance Records", "Consent Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a laboratory data platform or capturing consent directly from a patient's device, Cerulea routes both into one enforceable consent record.",
    tracks: [
      {
        title: "Track A: Lab Platform Bridging",
        description:
          "For genetic testing providers on existing data platforms. Access requests are checked against anchored consent through the API gateway before any dataset is released.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Lab Data Platform", sublabel: "Genomic Repository", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Consent Enforcement", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consent & Usage Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Patient Consent Capture",
        description:
          "For patients on a personal wallet. Consent and withdrawals are signed from the patient's own device and routed directly to the ledger they control.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Patient App / Wallet", sublabel: "Subject Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Consent Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Patient Consent Record", icon: Biotech, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a granular consent ledger with a usage gate, immutable logging, and instant withdrawal from scratch requires specialised privacy engineers and long legal review cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Consent & Usage Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects health-data privacy integration benchmarks. Building granular consent capture, a purpose-enforcing access gate, and tamper-evident usage logging for an average deployment takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your consent and usage rules into pre-audited WebAssembly binaries and provisions the consent and usage ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "inter-lab-reference-sample-exchange-for-quality-assurance",
    icon: FlaskConical,
    eyebrow: "Proficiency Testing Ledger",
    headline1: "Distribute the reference.",
    headline2: "Prove every result.",
    heroDescription:
      "Track each reference sample as it moves between labs in a proficiency testing round and anchor every submitted result for accreditation review. The administrative burden of coordinating distribution and comparison collapses into one verifiable record.",
    heroCta: "Deploy Proficiency Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace scattered spreadsheets and email with one shared, tamper-evident record of samples and results.",
    mechanics: [
      { title: "Sample Distribution Ledger", description: "The Traceability Ledger records each reference sample sent to each participating lab, so the coordinating body always knows exactly where every aliquot went." },
      { title: "Result Notarization", description: "The Provenance Notary seals each lab's submitted result to the sample and the round, preventing any later adjustment once the value is committed." },
      { title: "Accreditation Attestation", description: "The Compliance Attestations module binds each result to the lab's accreditation status, giving the assessor a verifiable link between capability and performance." },
      { title: "Blind Comparison", description: "Results are committed before the reference value is revealed, so no lab can align its answer to the consensus after the fact." },
      { title: "Round Reconciliation", description: "When the round closes, every submission is compared against the assigned value in one pass, producing an auditable performance record per lab." },
      { title: "Assessor Access", description: "The accreditation body queries the ledger directly for any round, replacing chased paperwork with a live, verifiable view of participation and results." },
    ],
    lifecycleTitle: "The Proficiency Lifecycle",
    lifecycleSubtitle:
      "Follow one reference sample from dispatch through blind result submission to accreditation reconciliation.",
    lifecycleSteps: [
      {
        label: "Sample Dispatch",
        description:
          "The scheme provider registers a reference sample and its aliquots. The contract anchors each aliquot to the lab it is shipped to as the start of the traceable record.",
        icon: Package,
        logFilename: "cerulea_proficiency.log",
        logLines: [
          { text: "[SYS] Opening proficiency round PT_2026_04...", time: "08:12:41", tone: "default" },
          { text: "[CMD] dispatchAliquot { ref: \"REF_9920\", lab: \"LAB_17\" }", time: "08:12:41", tone: "primary" },
          { text: "[AUTH] Verifying scheme provider signature...", time: "08:12:42", tone: "secondary" },
          { text: "[OK] Aliquot anchored to LAB_17 at block 6820114.", time: "08:12:42", tone: "success" },
        ],
      },
      {
        label: "Blind Submission",
        description:
          "Each lab commits its measured result before the assigned value is revealed. The submission is sealed so it cannot be altered once the consensus becomes visible.",
        icon: FlaskConical,
        logFilename: "cerulea_proficiency.log",
        logLines: [
          { text: "[SYS] Receiving result from LAB_17...", time: "15:33:09", tone: "default" },
          { text: "[CMD] commitResult(ref: \"REF_9920\", value: 5.42, unit: \"mmol/L\")", time: "15:33:09", tone: "primary" },
          { text: "[AUTH] Sealing submission before value reveal...", time: "15:33:10", tone: "secondary" },
          { text: "[OK] Result committed. Immutable for the round.", time: "15:33:10", tone: "success" },
        ],
      },
      {
        label: "Value Reveal",
        description:
          "After the submission window closes, the assigned reference value is published. No lab can now change its committed answer to match the target.",
        icon: Search,
        logFilename: "cerulea_proficiency.log",
        logLines: [
          { text: "[SYS] Closing submission window for PT_2026_04...", time: "18:00:00", tone: "default" },
          { text: "[CMD] revealAssigned(ref: \"REF_9920\", target: 5.40)", time: "18:00:01", tone: "primary" },
          { text: "[SYS] Assigned value locked, submissions frozen.", time: "18:00:01", tone: "default" },
          { text: "[OK] Reveal complete. Ready for reconciliation.", time: "18:00:02", tone: "success" },
        ],
      },
      {
        label: "Round Reconciliation",
        description:
          "Every submission is scored against the assigned value and bound to the lab's accreditation status, producing a verifiable performance record for the assessor.",
        icon: FileCheck,
        logFilename: "cerulea_proficiency.log",
        logLines: [
          { text: "[SYS] Scoring 42 submissions for REF_9920...", time: "18:05:22", tone: "default" },
          { text: "[CMD] reconcileRound(\"PT_2026_04\")", time: "18:05:22", tone: "primary" },
          { text: "[SYS] LAB_17 deviation +0.02, within tolerance.", time: "18:05:23", tone: "default" },
          { text: "[OK] Round reconciled. Records ready for assessor.", time: "18:05:23", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes proficiency testing into modular contracts. Each layer distributes, commits, reveals, and reconciles a round without the scheme provider hand-collating spreadsheets.",
    layers: [
      {
        title: "Distribution Registry",
        subtitle: "The Sample Map",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sample Map",
          description:
            "The foundational data layer. It records which aliquot of a reference sample went to which lab, so distribution is always accountable and no participant can dispute what it received.",
          platformFunction: "Identity & Traceability",
        },
        codeSnippet:
          "contract DistributionRegistry {\n  struct Aliquot {\n    bytes32 reference;\n    address lab;\n    uint256 dispatchedAt;\n  }\n\n  mapping(bytes32 => Aliquot) public aliquots;\n\n  function dispatch(bytes32 id, bytes32 reference, address lab) external onlyProvider {\n    aliquots[id] = Aliquot(reference, lab, block.timestamp);\n  }\n}",
        simAction: "Simulate Sample Dispatch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading scheme provider credential...", tone: "default" },
          { text: "Assigning aliquot REF_9920 to LAB_17...", tone: "default" },
          { text: "Stamping dispatch timestamp...", tone: "default" },
          { text: "Writing distribution record to storage...", tone: "default" },
          { text: "[SUCCESS] Aliquot dispatched and anchored.", tone: "success" },
        ],
      },
      {
        title: "Commit Vault",
        subtitle: "The Sealed Answer",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Answer",
          description:
            "Freezes each lab's result before the target is revealed. By sealing submissions ahead of the reveal, it removes any possibility of a lab tuning its answer to the emerging consensus.",
          platformFunction: "Blind Submission",
        },
        codeSnippet:
          "function commitResult(bytes32 ref, uint256 value) external onlyParticipant {\n    require(!revealed[ref], \"Window closed\");\n    submissions[ref][msg.sender] = Submission(value, block.timestamp, true);\n    emit ResultCommitted(ref, msg.sender);\n}",
        simAction: "Simulate Result Commit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "LAB_17 submitting measured value...", tone: "default" },
          { text: "Checking submission window is open...", tone: "default" },
          { text: "Sealing value 5.42 mmol/L...", tone: "default" },
          { text: "Locking submission for the round...", tone: "default" },
          { text: "[SUCCESS] Result committed, immutable.", tone: "success" },
        ],
      },
      {
        title: "Reveal Controller",
        subtitle: "The Value Gate",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Value Gate",
          description:
            "Publishes the assigned reference value only after the submission window closes. It enforces the ordering that makes proficiency testing meaningful and blocks any late edits.",
          platformFunction: "Round Control",
        },
        codeSnippet:
          "function revealAssigned(bytes32 ref, uint256 target) external onlyProvider {\n    require(block.timestamp >= closeTime[ref], \"Too early\");\n    assigned[ref] = target;\n    revealed[ref] = true;\n    emit ValueRevealed(ref, target);\n}",
        simAction: "Simulate Value Reveal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming submission window has closed...", tone: "default" },
          { text: "Publishing assigned value 5.40...", tone: "default" },
          { text: "Freezing all submissions for REF_9920...", tone: "default" },
          { text: "Marking round ready for scoring...", tone: "default" },
          { text: "[SUCCESS] Assigned value revealed and locked.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation Engine",
        subtitle: "The Performance Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Performance Record",
          description:
            "Scores each committed result against the assigned value and binds it to the lab's accreditation status, producing an auditable performance record the assessor can trust without re-collating data.",
          platformFunction: "Reconciliation & Audit",
        },
        codeSnippet:
          "function reconcile(bytes32 ref, address lab) external view returns (int256 deviation, bool passed) {\n    uint256 v = submissions[ref][lab].value;\n    deviation = int256(v) - int256(assigned[ref]);\n    passed = abs(deviation) <= tolerance[ref];\n}",
        simAction: "Simulate Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading committed result for LAB_17...", tone: "default" },
          { text: "Comparing 5.42 against assigned 5.40...", tone: "default" },
          { text: "Deviation +0.02, checking tolerance...", tone: "default" },
          { text: "Binding outcome to accreditation status...", tone: "default" },
          { text: "[SUCCESS] Performance record generated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable proficiency testing is a horizontal capability. Here is how different actors in the accreditation chain put it to work.",
    sectors: [
      { icon: FlaskConical, title: "Participating Laboratories", description: "Prove blind participation and performance in every round without maintaining private evidence, and demonstrate accreditation readiness from a shared record rather than a self-assembled folder.", assetTypes: ["Committed Results", "Round Records", "Performance Trails"] },
      { icon: Boxes, title: "Proficiency Scheme Providers", description: "Coordinate sample distribution and result collection for many labs in one ledger, eliminating the spreadsheet reconciliation that makes large rounds administratively heavy.", assetTypes: ["Sample Distributions", "Round Ledgers", "Consensus Records"] },
      { icon: Landmark, title: "Accreditation Bodies", description: "Query participation and performance directly for any round, replacing chased documentation with a live, verifiable view of each lab's proficiency evidence.", assetTypes: ["Audit Trails", "Accreditation Records", "Performance Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a scheme provider's coordination platform or capturing result submissions from lab systems, Cerulea routes both into one round record.",
    tracks: [
      {
        title: "Track A: Scheme Provider Bridging",
        description:
          "For proficiency scheme operators on legacy coordination tools. Distribution and reveal events are translated into signed on-chain round transitions through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Scheme Platform", sublabel: "Round Coordination System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Round Hashing & Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Proficiency Testing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Laboratory Submission",
        description:
          "For participating labs submitting results. A signed client commits each measured value from the lab's own system directly to the round before the reveal.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Lab Submission Client", sublabel: "Participant Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Submission Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Round Record", icon: FlaskConical, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a proficiency testing ledger with blind commitment, controlled reveal, and automated reconciliation from scratch requires specialised engineers and long scheme integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Distribution & Scoring Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects accreditation scheme integration benchmarks. Building sample distribution tracking, a blind commit-reveal flow, and automated reconciliation for an average scheme takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your distribution and scoring rules into pre-audited WebAssembly binaries and provisions the shared round ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "patient-medical-record-sharing-across-hospitals-with-patient-consent",
    icon: Hospital,
    eyebrow: "Patient-Controlled Health Network",
    headline1: "Keep data at source.",
    headline2: "Share it on consent.",
    heroDescription:
      "Deploy a patient-controlled record sharing network where clinical data stays in each hospital's own systems and an on-chain consent and credential layer governs cross-facility access. No central database of patient records is ever created, yet an authorized doctor reaches history in seconds.",
    heroCta: "Deploy Health Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Enable cross-hospital access without centralizing a single sensitive record.",
    mechanics: [
      { title: "Data Stays At Source", description: "Clinical records remain in each hospital's own systems. The chain carries only consent, credentials, and pointers, so no honeypot of centralized patient data is ever built." },
      { title: "On-Chain Consent", description: "The DID and VC Ledger records patient and family consent as verifiable credentials, so a facility can prove it was authorized before any record is released." },
      { title: "Privacy Guard", description: "The Privacy and Compliance Guard enforces data-protection rules on every access, keeping disclosures within the legal boundaries for health information." },
      { title: "Zero-Knowledge Checks", description: "The ZK Credentials Kit lets a provider prove eligibility, such as a treating relationship, without exposing unrelated patient details." },
      { title: "Emergency Access", description: "In an emergency, a documented break-glass path grants a treating doctor time-boxed access with full logging, so urgent care is never blocked by process." },
      { title: "Complete Audit Trail", description: "Every access, consent grant, and emergency override is written to an immutable log, giving patients and regulators a full history of who viewed a record." },
    ],
    lifecycleTitle: "The Record Sharing Lifecycle",
    lifecycleSubtitle:
      "Follow an unconscious accident victim from admission through a consented emergency query to a safer treatment decision.",
    lifecycleSteps: [
      {
        label: "Network Enrollment",
        description:
          "A patient enrolls with an identity anchor. Their consent preferences are recorded as credentials while their records stay in each provider's own systems.",
        icon: Fingerprint,
        logFilename: "cerulea_health_network.log",
        logLines: [
          { text: "[SYS] Enrolling patient into consent network...", time: "09:10:33", tone: "default" },
          { text: "[CMD] enroll { idAnchor: \"AADHAAR_x\", policy: \"EMERGENCY_FAMILY\" }", time: "09:10:33", tone: "primary" },
          { text: "[AUTH] Binding consent credential to patient DID...", time: "09:10:34", tone: "secondary" },
          { text: "[OK] Patient enrolled. Records remain at source.", time: "09:10:34", tone: "success" },
        ],
      },
      {
        label: "Emergency Admission",
        description:
          "An unconscious accident victim arrives. The emergency doctor initiates a query using the patient's identity anchor and requests break-glass access under family consent.",
        icon: HeartPulse,
        logFilename: "cerulea_health_network.log",
        logLines: [
          { text: "[SYS] Break-glass request at Hospital_0x22...", time: "22:47:05", tone: "default" },
          { text: "[CMD] emergencyQuery(idAnchor: \"AADHAAR_x\", doctor: \"DR_54\")", time: "22:47:05", tone: "primary" },
          { text: "[AUTH] Verifying family consent and doctor credential...", time: "22:47:06", tone: "secondary" },
          { text: "[OK] Time-boxed access granted for 60 minutes.", time: "22:47:06", tone: "success" },
        ],
      },
      {
        label: "Cross-Facility Retrieval",
        description:
          "With access granted, the doctor pulls allergy history and cardiac medication from the patient's home hospital, without any record being centralized.",
        icon: Network,
        logFilename: "cerulea_health_network.log",
        logLines: [
          { text: "[SYS] Resolving source pointers for patient...", time: "22:47:40", tone: "default" },
          { text: "[CMD] fetchAtSource([\"ALLERGY\", \"CARDIAC_MEDS\"])", time: "22:47:40", tone: "primary" },
          { text: "[SYS] Allergy flag: penicillin. Med: beta-blocker.", time: "22:47:41", tone: "default" },
          { text: "[OK] History returned from home facility.", time: "22:47:41", tone: "success" },
        ],
      },
      {
        label: "Audited Decision",
        description:
          "The doctor avoids a contraindicated drug and the entire access is logged immutably. The override, consent basis, and data viewed are all permanently recorded.",
        icon: ScrollText,
        logFilename: "cerulea_health_network.log",
        logLines: [
          { text: "[SYS] Recording clinical access for audit...", time: "22:48:12", tone: "default" },
          { text: "[CMD] logAccess(doctor: \"DR_54\", basis: \"BREAK_GLASS\")", time: "22:48:12", tone: "primary" },
          { text: "[SYS] Contraindicated drug avoided, note stored.", time: "22:48:13", tone: "default" },
          { text: "[OK] Access sealed to immutable audit trail.", time: "22:48:13", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes cross-hospital sharing into modular contracts. Each layer enrolls, authorizes, retrieves, and audits access while clinical data never leaves its source system.",
    layers: [
      {
        title: "Consent Registry",
        subtitle: "The Authorization Anchor",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authorization Anchor",
          description:
            "The foundational data layer. It binds a patient identity to their consent policy and emergency preferences, so any access decision starts from a signed, patient-owned permission rather than a hospital default.",
          platformFunction: "Identity & Consent",
        },
        codeSnippet:
          "contract ConsentAnchor {\n  struct Policy {\n    bytes32 idAnchor;\n    bool emergencyFamily;\n    uint256 setAt;\n  }\n\n  mapping(bytes32 => Policy) public policies;\n\n  function enroll(bytes32 patient, bytes32 idAnchor, bool emergencyFamily) external {\n    policies[patient] = Policy(idAnchor, emergencyFamily, block.timestamp);\n  }\n}",
        simAction: "Simulate Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading patient identity anchor...", tone: "default" },
          { text: "Encoding emergency and family consent...", tone: "default" },
          { text: "Signing consent credential...", tone: "default" },
          { text: "Writing policy to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Patient enrolled, data stays at source.", tone: "success" },
        ],
      },
      {
        title: "Break-Glass Gate",
        subtitle: "The Emergency Path",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Emergency Path",
          description:
            "Grants a treating doctor time-boxed access under a documented emergency policy. It ensures urgent care is never blocked while every override is bounded, credentialed, and fully logged.",
          platformFunction: "Emergency Access",
        },
        codeSnippet:
          "function emergencyQuery(bytes32 patient, address doctor) external returns (bytes32 token) {\n    require(policies[patient].emergencyFamily, \"No emergency consent\");\n    require(isCredentialed(doctor), \"Uncredentialed\");\n    token = grant(patient, doctor, block.timestamp + 60 minutes);\n    emit BreakGlass(patient, doctor, token);\n}",
        simAction: "Simulate Emergency Access",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Emergency doctor initiates break-glass...", tone: "default" },
          { text: "Confirming family consent policy...", tone: "default" },
          { text: "Verifying doctor credential DR_54...", tone: "default" },
          { text: "Issuing 60-minute access token...", tone: "default" },
          { text: "[SUCCESS] Time-boxed access granted.", tone: "success" },
        ],
      },
      {
        title: "Source Resolver",
        subtitle: "The Federated Fetch",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Federated Fetch",
          description:
            "Resolves on-chain pointers to records held in each hospital's own systems and retrieves only the authorized fields. No record is copied into a central store, so the network holds no honeypot of patient data.",
          platformFunction: "Federated Retrieval",
        },
        codeSnippet:
          "function fetchAtSource(bytes32 token, string[] calldata fields) external view returns (bytes[] memory) {\n    require(validToken(token), \"No access\");\n    return sourceGateway.pull(patientOf(token), fields);\n}",
        simAction: "Simulate Cross-Facility Fetch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Validating access token...", tone: "default" },
          { text: "Resolving pointer to home hospital...", tone: "default" },
          { text: "Pulling allergy and cardiac fields...", tone: "default" },
          { text: "Returning without central copy...", tone: "default" },
          { text: "[SUCCESS] History retrieved from source.", tone: "success" },
        ],
      },
      {
        title: "Audit Ledger",
        subtitle: "The Access History",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Access History",
          description:
            "Writes every access, consent grant, and emergency override to an immutable log. It gives patients and regulators a complete, tamper-evident history of who viewed a record and on what basis.",
          platformFunction: "Audit & Logging",
        },
        codeSnippet:
          "function logAccess(bytes32 patient, address doctor, uint8 basis) external {\n    trail[patient].push(Access(doctor, basis, block.timestamp));\n    emit AccessLogged(patient, doctor, basis);\n}",
        simAction: "Simulate Access Logging",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Clinical access completed...", tone: "default" },
          { text: "Composing audit record...", tone: "default" },
          { text: "Recording break-glass basis...", tone: "default" },
          { text: "Sealing to immutable trail...", tone: "default" },
          { text: "[SUCCESS] Access logged for patient review.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Patient-controlled record sharing is a horizontal capability. Here is how different actors in the care network put it to work.",
    sectors: [
      { icon: Hospital, title: "Hospitals & Emergency Care", description: "Reach a patient's allergy and medication history in seconds during an emergency, avoiding contraindicated treatments while keeping every record in its home system.", assetTypes: ["Break-Glass Grants", "Source Pointers", "Access Logs"] },
      { icon: Users, title: "Patients & Families", description: "Control who can see records and under what conditions, and review a complete history of every access, replacing lost physical files with a portable, consent-governed identity.", assetTypes: ["Consent Credentials", "Family Policies", "Access Histories"] },
      { icon: Landmark, title: "Health Regulators", description: "Audit cross-facility access against the consent that authorized it, confirming that data-protection rules held on every disclosure without inspecting each hospital's internal systems.", assetTypes: ["Audit Trails", "Compliance Records", "Consent Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging hospital information systems or capturing consent from a patient's own device, Cerulea routes both into one federated access layer.",
    tracks: [
      {
        title: "Track A: Hospital System Bridging",
        description:
          "For hospitals on legacy HIS and EMR platforms. Access requests are authorized on-chain and records are pulled from source through the API gateway without centralizing data.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy HIS / EMR", sublabel: "Hospital Record Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Consent & Federated Fetch", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consent & Credential Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Patient Consent Capture",
        description:
          "For patients and families on a personal wallet. Enrollment and consent decisions are signed from the patient's device and routed directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Patient App / Wallet", sublabel: "Patient & Family Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Consent Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Patient Consent Record", icon: Hospital, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a federated record network with on-chain consent, zero-knowledge eligibility checks, and a break-glass path from scratch requires specialised engineers and long inter-hospital integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Consent & Access Rules",
      ruleCount: 54,
      sliderPercent: 50,
      traditionalMonths: 19,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects multi-hospital interoperability benchmarks. Wiring each facility's HIS, building consent and credential logic, and shipping a compliant break-glass path for an average network takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your consent and access rules into pre-audited WebAssembly binaries and provisions the federated consent ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "operation-theatre-scheduling-and-equipment-sterilization-log",
    icon: FileCheck,
    eyebrow: "Surgical Compliance Ledger",
    headline1: "Link every booking.",
    headline2: "To proven sterilization.",
    heroDescription:
      "Bind each operation theatre booking to a verified sterilization confirmation for the exact instrument set used. Two systems that were easy to disconnect become one auditable record, so the hospital can demonstrate compliance for any procedure on demand.",
    heroCta: "Deploy Surgical Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Fuse the sterilization log and the OT schedule into one tamper-evident compliance record.",
    mechanics: [
      { title: "Booking-Sterilization Link", description: "The Compliance Attestations module ties each OT booking to the specific sterilization cycle for the instrument set used, so the two records can never drift apart." },
      { title: "Autoclave Attestation", description: "The Device Attestation module records each sterilizer cycle with its parameters straight from the autoclave, making the confirmation a machine fact rather than a manual entry." },
      { title: "Immutable Cycle Log", description: "The Audit Logs module seals every sterilization cycle and its outcome, so a passed cycle cannot be back-dated or edited after a procedure." },
      { title: "Pre-Procedure Block", description: "A booking cannot be marked ready unless a valid sterilization confirmation for the required set is present, stopping unverified instruments from reaching the table." },
      { title: "Instrument Set Tracking", description: "Each tray is tracked by identity through cleaning, sterilization, and use, so a specific set can be traced to every procedure it supported." },
      { title: "Accreditation Query", description: "An auditor pulls the full booking and sterilization record for any procedure instantly, replacing a reconciliation of two disconnected systems with a single query." },
    ],
    lifecycleTitle: "The Sterilization Lifecycle",
    lifecycleSubtitle:
      "Follow one instrument set from autoclave cycle through OT booking to an accreditation audit.",
    lifecycleSteps: [
      {
        label: "Sterilization Cycle",
        description:
          "An instrument set completes an autoclave cycle. The contract anchors the cycle parameters and pass result directly from the sterilizer as a verified attestation.",
        icon: Thermometer,
        logFilename: "cerulea_ot_compliance.log",
        logLines: [
          { text: "[SYS] Recording autoclave cycle for tray TRY_402...", time: "06:30:14", tone: "default" },
          { text: "[CMD] anchorCycle { tray: \"TRY_402\", temp: 134, mins: 18 }", time: "06:30:14", tone: "primary" },
          { text: "[AUTH] Reading sterilizer attestation signature...", time: "06:30:15", tone: "secondary" },
          { text: "[OK] Cycle passed and anchored at block 7011903.", time: "06:30:15", tone: "success" },
        ],
      },
      {
        label: "OT Booking",
        description:
          "A procedure is booked into a theatre. The booking declares the required instrument set and links to a valid sterilization confirmation before it can be marked ready.",
        icon: FileCheck,
        logFilename: "cerulea_ot_compliance.log",
        logLines: [
          { text: "[SYS] Opening OT booking for procedure OP_5581...", time: "07:15:40", tone: "default" },
          { text: "[CMD] bindSterilization(OP_5581, tray: \"TRY_402\")", time: "07:15:40", tone: "primary" },
          { text: "[SYS] Valid cycle found, booking marked ready.", time: "07:15:41", tone: "default" },
          { text: "[OK] Booking linked to sterilization confirmation.", time: "07:15:41", tone: "success" },
        ],
      },
      {
        label: "Procedure Execution",
        description:
          "The surgery proceeds with the verified set. The contract records that the linked instruments were used, closing the loop between the schedule and the sterilization log.",
        icon: HeartPulse,
        logFilename: "cerulea_ot_compliance.log",
        logLines: [
          { text: "[SYS] Marking procedure OP_5581 in progress...", time: "09:02:22", tone: "default" },
          { text: "[CMD] recordUse(OP_5581, tray: \"TRY_402\")", time: "09:02:22", tone: "primary" },
          { text: "[SYS] Instrument use bound to booking record.", time: "09:02:23", tone: "default" },
          { text: "[OK] Procedure and set use recorded.", time: "09:02:23", tone: "success" },
        ],
      },
      {
        label: "Accreditation Audit",
        description:
          "An assessor requests proof for the procedure. A single query returns the booking, the linked sterilization cycle, and its parameters, all from one sealed record.",
        icon: Search,
        logFilename: "cerulea_ot_compliance.log",
        logLines: [
          { text: "[SYS] Audit request for procedure OP_5581...", time: "14:44:51", tone: "default" },
          { text: "[CMD] proveCompliance(OP_5581)", time: "14:44:51", tone: "primary" },
          { text: "[SYS] Returning booking and cycle TRY_402 (134C/18m).", time: "14:44:52", tone: "default" },
          { text: "[OK] Compliance demonstrated from one record.", time: "14:44:52", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes surgical compliance into modular contracts. Each layer attests, binds, records, and proves without the sterilization log and OT schedule ever diverging.",
    layers: [
      {
        title: "Cycle Registry",
        subtitle: "The Sterilization Anchor",
        icon: Thermometer,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sterilization Anchor",
          description:
            "The foundational data layer. It records each autoclave cycle with its parameters and pass result straight from the sterilizer, turning a manual log entry into a verified machine attestation.",
          platformFunction: "Identity & Attestation",
        },
        codeSnippet:
          "contract CycleRegistry {\n  struct Cycle {\n    bytes32 tray;\n    uint16 tempC;\n    uint16 minutes;\n    bool passed;\n    uint256 at;\n  }\n\n  mapping(bytes32 => Cycle) public cycles;\n\n  function anchorCycle(bytes32 id, bytes32 tray, uint16 t, uint16 m, bool ok) external onlySterilizer {\n    cycles[id] = Cycle(tray, t, m, ok, block.timestamp);\n  }\n}",
        simAction: "Simulate Cycle Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading sterilizer attestation for TRY_402...", tone: "default" },
          { text: "Capturing 134C for 18 minutes...", tone: "default" },
          { text: "Recording pass result...", tone: "default" },
          { text: "Writing cycle to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Sterilization cycle anchored.", tone: "success" },
        ],
      },
      {
        title: "Booking Binder",
        subtitle: "The Readiness Gate",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Readiness Gate",
          description:
            "Refuses to mark a booking ready without a valid sterilization confirmation for the required set. It prevents unverified instruments from reaching the table by making the link a precondition, not a paperwork step.",
          platformFunction: "Compliance Gate",
        },
        codeSnippet:
          "function bindSterilization(bytes32 booking, bytes32 cycleId) external {\n    require(cycles[cycleId].passed, \"Cycle not passed\");\n    bookings[booking].cycle = cycleId;\n    bookings[booking].ready = true;\n    emit BookingReady(booking, cycleId);\n}",
        simAction: "Simulate Booking Bind",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Opening booking OP_5581...", tone: "default" },
          { text: "Searching for a passed cycle on TRY_402...", tone: "default" },
          { text: "Linking sterilization confirmation...", tone: "default" },
          { text: "Marking booking ready for theatre...", tone: "default" },
          { text: "[SUCCESS] Booking bound to sterilization.", tone: "success" },
        ],
      },
      {
        title: "Use Recorder",
        subtitle: "The Loop Closer",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Loop Closer",
          description:
            "Records that the linked instrument set was actually used in the procedure. This closes the loop between the schedule and the sterilization log, so the two records are permanently reconciled.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function recordUse(bytes32 booking, bytes32 tray) external {\n    require(bookings[booking].ready, \"Not ready\");\n    require(cycles[bookings[booking].cycle].tray == tray, \"Set mismatch\");\n    bookings[booking].used = true;\n    emit SetUsed(booking, tray);\n}",
        simAction: "Simulate Use Recording",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Procedure OP_5581 marked in progress...", tone: "default" },
          { text: "Confirming linked set matches TRY_402...", tone: "default" },
          { text: "Recording instrument use...", tone: "default" },
          { text: "Binding use to booking record...", tone: "default" },
          { text: "[SUCCESS] Schedule and log reconciled.", tone: "success" },
        ],
      },
      {
        title: "Compliance Verifier",
        subtitle: "The Audit Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Audit Window",
          description:
            "A read-only gateway that returns the booking and its linked sterilization cycle for any procedure. It replaces a manual reconciliation of two systems with a single, verifiable query for the assessor.",
          platformFunction: "Verification & Audit",
        },
        codeSnippet:
          "function proveCompliance(bytes32 booking) external view returns (Cycle memory) {\n    bytes32 c = bookings[booking].cycle;\n    return cycles[c];\n}",
        simAction: "Simulate Compliance Proof",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Assessor opens procedure OP_5581...", tone: "default" },
          { text: "Resolving linked sterilization cycle...", tone: "default" },
          { text: "Returning parameters 134C for 18 minutes...", tone: "default" },
          { text: "Attaching booking and use record...", tone: "default" },
          { text: "[SUCCESS] Compliance proven from one record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Linked surgical compliance is a horizontal capability. Here is how different actors in the operating theatre put it to work.",
    sectors: [
      { icon: Hospital, title: "Hospital Surgical Units", description: "Guarantee that no procedure proceeds without a verified sterilization confirmation for the exact set used, turning a manual cross-check into an enforced precondition.", assetTypes: ["OT Bookings", "Sterilization Links", "Set Records"] },
      { icon: Cpu, title: "Central Sterile Services", description: "Attest each autoclave cycle directly from the sterilizer and track every tray by identity, so the department's output is verifiable rather than logged by hand.", assetTypes: ["Cycle Attestations", "Tray Identities", "Pass Records"] },
      { icon: Landmark, title: "Accreditation Assessors", description: "Pull the complete booking and sterilization record for any procedure in one query, replacing the reconciliation of two disconnected systems with a live verification.", assetTypes: ["Audit Trails", "Compliance Records", "Procedure Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging the OT scheduling system or capturing cycle attestations from sterilizers, Cerulea routes both into one compliance record.",
    tracks: [
      {
        title: "Track A: Scheduling System Bridging",
        description:
          "For hospitals on legacy OT scheduling platforms. Bookings are linked to sterilization confirmations on-chain through the API gateway without changing the theatre workflow.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "OT Scheduling System", sublabel: "Theatre Booking Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Booking-Cycle Binding", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Surgical Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Sterilizer Attestation",
        description:
          "For central sterile departments with connected autoclaves. Each cycle is signed by the device and routed directly to the ledger as a verified attestation.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Autoclave / Sterilizer", sublabel: "Connected Devices", icon: Thermometer, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sterilization Cycle Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a surgical compliance ledger that binds bookings to device-attested sterilization cycles with a readiness gate from scratch requires specialised engineers and long accreditation cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Sterilization & Booking Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects hospital compliance integration benchmarks. Wiring the OT scheduler to sterilizer data, building the booking-to-cycle binding, and shipping an audit view for an average deployment takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your sterilization and booking rules into pre-audited WebAssembly binaries and provisions the compliance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "blood-bank-inventory-and-donor-to-patient-traceability",
    icon: Droplet,
    eyebrow: "Hemovigilance Traceability Ledger",
    headline1: "Trace every unit.",
    headline2: "From donor to patient.",
    heroDescription:
      "Track each blood unit from donor collection through storage to the patient it was transfused into, on one traceable record. When a transfusion issue surfaces, the donor and every co-donation recipient are identified in minutes instead of a slow search across separate systems.",
    heroCta: "Deploy Traceability Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Unite donor records, storage conditions, and transfusion outcomes into one traceable chain.",
    mechanics: [
      { title: "Unit-Level Traceability", description: "The Traceability Ledger anchors each blood unit from collection to transfusion, so a single unit's full journey is one query rather than a search across donor and patient systems." },
      { title: "Cold-Chain Monitoring", description: "The Cold-Chain Monitoring module logs storage temperature for every unit, flagging any excursion that could compromise a component before it is issued." },
      { title: "Recall Isolation", description: "The Quality and Recall Ledger links a flagged donation to every unit and recipient from the same batch, so a safety issue is contained precisely and fast." },
      { title: "Donor-Batch Linking", description: "Each unit carries an immutable link to its donation and donor, so tracing a suspect unit back to its source and co-donations is instant." },
      { title: "Component Split Tracking", description: "When a donation is split into components, each derivative inherits the traceable link, keeping plasma, platelets, and red cells all bound to the origin." },
      { title: "Hemovigilance Query", description: "A blood safety officer traces any unit or donor in one view, replacing a manual reconciliation of collection and transfusion logs with a live query." },
    ],
    lifecycleTitle: "The Blood Unit Lifecycle",
    lifecycleSubtitle:
      "Follow one donation from collection through cold storage to transfusion and a rapid safety trace.",
    lifecycleSteps: [
      {
        label: "Donation Collection",
        description:
          "A unit is collected from a donor. The contract anchors the donation, donor reference, and blood group as the origin of the unit's traceable record.",
        icon: Droplet,
        logFilename: "cerulea_hemovigilance.log",
        logLines: [
          { text: "[SYS] Registering donation for unit BLD_3391...", time: "10:22:08", tone: "default" },
          { text: "[CMD] collect { donor: \"DNR_771\", group: \"O_NEG\" }", time: "10:22:08", tone: "primary" },
          { text: "[AUTH] Verifying donor eligibility record...", time: "10:22:09", tone: "secondary" },
          { text: "[OK] Unit BLD_3391 anchored at block 7412008.", time: "10:22:09", tone: "success" },
        ],
      },
      {
        label: "Cold Storage",
        description:
          "The unit enters monitored storage. Temperature readings are logged continuously and any excursion is flagged before the unit can be issued for transfusion.",
        icon: Thermometer,
        logFilename: "cerulea_hemovigilance.log",
        logLines: [
          { text: "[SYS] Logging storage telemetry for BLD_3391...", time: "10:40:33", tone: "default" },
          { text: "[CMD] logTemp(BLD_3391, celsius: 4.1)", time: "10:40:33", tone: "primary" },
          { text: "[SYS] Reading within 2C to 6C range, no excursion.", time: "10:40:34", tone: "default" },
          { text: "[OK] Storage condition recorded.", time: "10:40:34", tone: "success" },
        ],
      },
      {
        label: "Transfusion",
        description:
          "The unit is issued and transfused into a patient. The contract binds the recipient to the unit, completing the donor-to-patient traceable link.",
        icon: HeartPulse,
        logFilename: "cerulea_hemovigilance.log",
        logLines: [
          { text: "[SYS] Issuing unit BLD_3391 for transfusion...", time: "16:05:12", tone: "default" },
          { text: "[CMD] transfuse(BLD_3391, patient: \"PT_9902\")", time: "16:05:12", tone: "primary" },
          { text: "[SYS] Recipient bound to unit record.", time: "16:05:13", tone: "default" },
          { text: "[OK] Donor-to-patient link completed.", time: "16:05:13", tone: "success" },
        ],
      },
      {
        label: "Safety Trace",
        description:
          "A donor later reports an infection. The ledger returns every unit and recipient from that donation batch, so affected patients are identified within minutes.",
        icon: Search,
        logFilename: "cerulea_hemovigilance.log",
        logLines: [
          { text: "[SYS] Safety alert raised for donor DNR_771...", time: "08:14:47", tone: "default" },
          { text: "[CMD] traceBatch(donor: \"DNR_771\")", time: "08:14:47", tone: "primary" },
          { text: "[SYS] 3 units and 3 recipients identified.", time: "08:14:48", tone: "default" },
          { text: "[OK] Affected patients flagged for lookback.", time: "08:14:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes blood traceability into modular contracts. Each layer collects, monitors, transfuses, and traces without donor and patient records living in separate silos.",
    layers: [
      {
        title: "Unit Registry",
        subtitle: "The Donation Anchor",
        icon: Droplet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Donation Anchor",
          description:
            "The foundational data layer. It mints a unique unit identity at collection and stores the immutable link to donation, donor, and blood group that every later record points back to.",
          platformFunction: "Identity & Traceability",
        },
        codeSnippet:
          "contract UnitRegistry {\n  struct Unit {\n    bytes32 donation;\n    bytes32 donor;\n    bytes4 group;\n    address recipient;\n    uint256 collectedAt;\n  }\n\n  mapping(bytes32 => Unit) public units;\n\n  function collect(bytes32 id, bytes32 donor, bytes4 group) external {\n    units[id] = Unit(keccak256(abi.encode(id)), donor, group, address(0), block.timestamp);\n  }\n}",
        simAction: "Simulate Donation Collection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading donor eligibility for DNR_771...", tone: "default" },
          { text: "Assigning blood group O_NEG...", tone: "default" },
          { text: "Minting unit identity BLD_3391...", tone: "default" },
          { text: "Writing donation anchor to storage...", tone: "default" },
          { text: "[SUCCESS] Unit registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Cold-Chain Monitor",
        subtitle: "The Storage Guard",
        icon: Thermometer,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Storage Guard",
          description:
            "Logs storage temperature for every unit and flags any excursion outside the safe range. It ensures a compromised component is caught before issue rather than discovered after transfusion.",
          platformFunction: "Cold-Chain Monitoring",
        },
        codeSnippet:
          "function logTemp(bytes32 id, int16 celsius) external onlySensor {\n    temps[id].push(Reading(celsius, block.timestamp));\n    if (celsius < 2 || celsius > 6) {\n      flags[id] = true;\n      emit Excursion(id, celsius);\n    }\n}",
        simAction: "Simulate Storage Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Sensor reports 4.1C for BLD_3391...", tone: "default" },
          { text: "Comparing against 2C to 6C range...", tone: "default" },
          { text: "No excursion detected...", tone: "default" },
          { text: "Appending reading to storage log...", tone: "default" },
          { text: "[SUCCESS] Storage condition within range.", tone: "success" },
        ],
      },
      {
        title: "Transfusion Binder",
        subtitle: "The Recipient Link",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Recipient Link",
          description:
            "Binds the receiving patient to the unit at transfusion. This completes the donor-to-patient link and makes bidirectional tracing, from donor to patient or patient to donor, a single lookup.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function transfuse(bytes32 id, bytes32 patient) external onlyClinician {\n    require(!flags[id], \"Unit flagged\");\n    units[id].recipient = address(uint160(uint256(patient)));\n    emit Transfused(id, patient);\n}",
        simAction: "Simulate Transfusion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Issuing unit BLD_3391 to ward...", tone: "default" },
          { text: "Confirming unit is not flagged...", tone: "default" },
          { text: "Binding recipient PT_9902...", tone: "default" },
          { text: "Completing donor-to-patient link...", tone: "default" },
          { text: "[SUCCESS] Transfusion recorded.", tone: "success" },
        ],
      },
      {
        title: "Trace Engine",
        subtitle: "The Lookback Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Lookback Window",
          description:
            "Returns every unit and recipient from a given donation batch. It turns a safety lookback that once spanned separate systems into a single query that identifies affected patients within minutes.",
          platformFunction: "Recall & Hemovigilance",
        },
        codeSnippet:
          "function traceBatch(bytes32 donor) external view returns (bytes32[] memory unitIds, bytes32[] memory recipients) {\n    return (byDonor[donor].units, byDonor[donor].recipients);\n}",
        simAction: "Simulate Safety Trace",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Safety officer opens donor DNR_771...", tone: "default" },
          { text: "Gathering all units from the donation...", tone: "default" },
          { text: "Resolving bound recipients...", tone: "default" },
          { text: "Assembling lookback list...", tone: "default" },
          { text: "[SUCCESS] Affected recipients identified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Donor-to-patient traceability is a horizontal capability. Here is how different actors in transfusion care put it to work.",
    sectors: [
      { icon: Droplet, title: "Blood Banks", description: "Track every unit from collection through split components to issue, so inventory and traceability live in one record instead of separate donor and stock systems.", assetTypes: ["Blood Units", "Component Splits", "Storage Logs"] },
      { icon: Hospital, title: "Transfusion Services", description: "Bind each transfused unit to its recipient and confirm cold-chain integrity before issue, so any adverse reaction can be traced to a specific donation immediately.", assetTypes: ["Transfusion Records", "Recipient Links", "Excursion Flags"] },
      { icon: Landmark, title: "Blood Safety Authorities", description: "Run a hemovigilance lookback across the whole network in one query, identifying every recipient of a suspect donation without contacting each facility separately.", assetTypes: ["Lookback Trails", "Recall Records", "Safety Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging blood bank inventory systems or capturing storage telemetry from cold-chain sensors, Cerulea routes both into one traceable record.",
    tracks: [
      {
        title: "Track A: Blood Bank System Bridging",
        description:
          "For blood banks on legacy inventory platforms. Collection, issue, and transfusion events are translated into signed on-chain unit transitions through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Blood Bank System", sublabel: "Inventory Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Hemovigilance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Cold-Chain Sensor Capture",
        description:
          "For storage units with connected sensors. Temperature readings are signed by the device and routed directly to the ledger, flagging excursions in real time.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Storage Sensor", sublabel: "Refrigeration Devices", icon: Thermometer, accent: false },
          { label: "Consortium Validators", sublabel: "Telemetry Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Unit Traceability Record", icon: Droplet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a donor-to-patient traceability ledger with cold-chain monitoring and rapid recall lookback from scratch requires specialised engineers and long blood bank integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Traceability & Recall Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects blood service integration benchmarks. Wiring inventory and transfusion systems, building cold-chain monitoring, and shipping a lookback trace for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your traceability and recall rules into pre-audited WebAssembly binaries and provisions the hemovigilance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "icu-bed-availability-sharing-across-hospital-networks-during-emergenci",
    icon: HeartPulse,
    eyebrow: "Emergency Capacity Network",
    headline1: "See every open bed.",
    headline2: "Route care in seconds.",
    heroDescription:
      "Give ambulances and coordinators a real-time shared view of ICU capacity across a hospital network. During a surge, finding an available bed becomes a single lookup instead of a round of phone calls to hospitals that each track availability alone.",
    heroCta: "Deploy Capacity Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn siloed bed counts into one authoritative, live view of network capacity.",
    mechanics: [
      { title: "Live Capacity Oracles", description: "The External Data Oracles module pulls current ICU availability from each hospital's own system, so the shared view reflects real occupancy rather than a stale manual update." },
      { title: "Surge Notifications", description: "The Notifications module alerts coordinators and ambulance services when capacity in a region falls below a threshold, so response mobilizes before the situation is critical." },
      { title: "Role-Based Access", description: "The Role-Based Access Control module scopes what each participant sees and updates, so a hospital manages its own beds while coordinators see the network view." },
      { title: "Authoritative Bed State", description: "Each bed's status is a single agreed value on the ledger, ending the conflicting counts that arise when every facility keeps its own spreadsheet." },
      { title: "Ambulance Routing View", description: "Ambulance services query open capacity by location and specialty, so a patient is routed to a hospital that can actually admit them the first time." },
      { title: "Auditable Surge Record", description: "The state of network capacity over time is recorded, giving health authorities a verifiable account of how capacity was shared during an emergency." },
    ],
    lifecycleTitle: "The Capacity Sharing Lifecycle",
    lifecycleSubtitle:
      "Follow one ICU bed from a status update through a surge alert to an ambulance routed to open capacity.",
    lifecycleSteps: [
      {
        label: "Capacity Publishing",
        description:
          "A hospital publishes its current ICU availability. The oracle writes the count to the shared ledger as the authoritative state for that facility.",
        icon: Hospital,
        logFilename: "cerulea_capacity_net.log",
        logLines: [
          { text: "[SYS] Ingesting ICU count from Hospital_0x31...", time: "21:03:19", tone: "default" },
          { text: "[CMD] publishCapacity { icuFree: 2, ventFree: 1 }", time: "21:03:19", tone: "primary" },
          { text: "[AUTH] Verifying hospital node signature...", time: "21:03:20", tone: "secondary" },
          { text: "[OK] Capacity state anchored at block 7901221.", time: "21:03:20", tone: "success" },
        ],
      },
      {
        label: "Surge Detection",
        description:
          "Regional free capacity drops below the threshold as a mass-casualty event unfolds. The contract emits a surge alert to coordinators and ambulance dispatch.",
        icon: Zap,
        logFilename: "cerulea_capacity_net.log",
        logLines: [
          { text: "[SYS] Aggregating regional ICU capacity...", time: "21:14:52", tone: "default" },
          { text: "[CMD] evaluateThreshold(region: \"NORTH\", free: 3)", time: "21:14:52", tone: "primary" },
          { text: "[SYS] Below threshold, emitting surge alert.", time: "21:14:53", tone: "default" },
          { text: "[OK] Coordinators and dispatch notified.", time: "21:14:53", tone: "success" },
        ],
      },
      {
        label: "Availability Query",
        description:
          "An ambulance queries open capacity by location and specialty. The shared view returns the nearest hospital that can admit the patient, with no phone calls.",
        icon: Search,
        logFilename: "cerulea_capacity_net.log",
        logLines: [
          { text: "[SYS] Dispatch query from AMB_204...", time: "21:16:08", tone: "default" },
          { text: "[CMD] findCapacity(near: \"NORTH\", need: \"ICU_VENT\")", time: "21:16:08", tone: "primary" },
          { text: "[SYS] Match: Hospital_0x31, 1 ventilated bed.", time: "21:16:09", tone: "default" },
          { text: "[OK] Routing target returned to ambulance.", time: "21:16:09", tone: "success" },
        ],
      },
      {
        label: "Admission Update",
        description:
          "The patient is admitted and the bed status decrements. The authoritative state updates instantly so no second ambulance is routed to the same bed.",
        icon: HeartPulse,
        logFilename: "cerulea_capacity_net.log",
        logLines: [
          { text: "[SYS] Admission confirmed at Hospital_0x31...", time: "21:34:41", tone: "default" },
          { text: "[CMD] decrementBed(hospital: \"0x31\", type: \"ICU_VENT\")", time: "21:34:41", tone: "primary" },
          { text: "[SYS] Shared state updated, bed now occupied.", time: "21:34:42", tone: "default" },
          { text: "[OK] Network view reflects admission.", time: "21:34:42", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes capacity sharing into modular contracts. Each layer publishes, alerts, queries, and updates so one authoritative bed state serves the whole network.",
    layers: [
      {
        title: "Capacity Oracle",
        subtitle: "The Live Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Feed",
          description:
            "The foundational data layer. It ingests each hospital's current ICU availability and records it as the authoritative state for that facility, replacing manually maintained counts with a live feed.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract CapacityOracle {\n  struct Bed {\n    uint16 icuFree;\n    uint16 ventFree;\n    uint256 updatedAt;\n  }\n\n  mapping(address => Bed) public capacity;\n\n  function publish(uint16 icu, uint16 vent) external onlyHospital {\n    capacity[msg.sender] = Bed(icu, vent, block.timestamp);\n  }\n}",
        simAction: "Simulate Capacity Publish",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading hospital node signature...", tone: "default" },
          { text: "Capturing 2 ICU and 1 ventilated bed...", tone: "default" },
          { text: "Stamping update timestamp...", tone: "default" },
          { text: "Writing authoritative state to storage...", tone: "default" },
          { text: "[SUCCESS] Capacity published to network.", tone: "success" },
        ],
      },
      {
        title: "Surge Notifier",
        subtitle: "The Alert Trigger",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Alert Trigger",
          description:
            "Aggregates regional capacity and emits an alert when free beds fall below a threshold. It mobilizes coordinators and dispatch before capacity is exhausted rather than after.",
          platformFunction: "Notifications",
        },
        codeSnippet:
          "function evaluateThreshold(bytes32 region) external {\n    uint256 free = sumRegion(region);\n    if (free < thresholds[region]) {\n      emit SurgeAlert(region, free, block.timestamp);\n    }\n}",
        simAction: "Simulate Surge Alert",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Summing free beds for region NORTH...", tone: "default" },
          { text: "Total free capacity is 3 beds...", tone: "default" },
          { text: "Comparing against threshold...", tone: "default" },
          { text: "Emitting surge alert to subscribers...", tone: "default" },
          { text: "[SUCCESS] Coordinators and dispatch notified.", tone: "success" },
        ],
      },
      {
        title: "Access Controller",
        subtitle: "The Scoped View",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Scoped View",
          description:
            "Enforces what each participant may see and change. A hospital updates only its own beds, while coordinators and ambulances hold read access to the network view, keeping the shared state trustworthy.",
          platformFunction: "Access Control",
        },
        codeSnippet:
          "function findCapacity(bytes32 region, bytes32 need) external view onlyRole(DISPATCH) returns (address) {\n    return nearestMatch(region, need);\n}",
        simAction: "Simulate Availability Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ambulance AMB_204 requests capacity...", tone: "default" },
          { text: "Confirming dispatch role...", tone: "default" },
          { text: "Searching region NORTH for ICU_VENT...", tone: "default" },
          { text: "Selecting nearest available hospital...", tone: "default" },
          { text: "[SUCCESS] Routing target returned.", tone: "success" },
        ],
      },
      {
        title: "State Updater",
        subtitle: "The Occupancy Sync",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Occupancy Sync",
          description:
            "Decrements a bed the instant an admission is confirmed. This keeps the authoritative state current so no two ambulances are ever routed to the same open bed.",
          platformFunction: "State Sync",
        },
        codeSnippet:
          "function decrementBed(address hospital, uint8 kind) external onlyHospital {\n    if (kind == ICU_VENT) capacity[hospital].ventFree -= 1;\n    else capacity[hospital].icuFree -= 1;\n    emit BedOccupied(hospital, kind);\n}",
        simAction: "Simulate Admission Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Admission confirmed at Hospital_0x31...", tone: "default" },
          { text: "Loading current bed counts...", tone: "default" },
          { text: "Decrementing ventilated bed...", tone: "default" },
          { text: "Publishing updated state...", tone: "default" },
          { text: "[SUCCESS] Network view reflects admission.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared emergency capacity is a horizontal capability. Here is how different actors in the response chain put it to work.",
    sectors: [
      { icon: Hospital, title: "Network Hospitals", description: "Publish live ICU availability and update it on each admission, so capacity is shared automatically without a staff member fielding calls during a surge.", assetTypes: ["Bed States", "Occupancy Updates", "Capacity Feeds"] },
      { icon: Bus, title: "Ambulance Services", description: "Query open capacity by location and specialty and route a patient to a hospital that can admit them the first time, cutting the critical minutes lost to phone searches.", assetTypes: ["Routing Queries", "Availability Views", "Dispatch Records"] },
      { icon: Landmark, title: "Health Authorities", description: "Coordinate regional response from one live view and hold a verifiable record of how capacity was shared, replacing fragmented reporting during an emergency.", assetTypes: ["Surge Records", "Regional Views", "Response Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging hospital admission systems or capturing capacity from bed-management platforms, Cerulea routes both into one live network view.",
    tracks: [
      {
        title: "Track A: Hospital System Bridging",
        description:
          "For hospitals on legacy bed-management systems. Availability is published on-chain and decremented on admission through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Bed-Management System", sublabel: "Hospital Admission Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Capacity Ingestion", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Capacity Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Dispatch Access",
        description:
          "For ambulance services and coordinators. A signed dispatch client queries the network view and receives routing targets directly from the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Dispatch Client", sublabel: "Ambulance & Coordinator Apps", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Capacity Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Network Capacity Record", icon: HeartPulse, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a live capacity network with hospital oracles, surge notifications, and role-scoped dispatch access from scratch requires specialised engineers and long inter-hospital integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Capacity & Access Rules",
      ruleCount: 33,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects emergency coordination integration benchmarks. Wiring each hospital's bed system, building surge thresholds, and shipping a role-scoped dispatch view for an average network takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your capacity and access rules into pre-audited WebAssembly binaries and provisions the shared capacity ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "organ-donation-and-transplant-matching-registry",
    icon: Handshake,
    eyebrow: "Transplant Allocation Ledger",
    headline1: "Match by priority.",
    headline2: "Prove it was fair.",
    heroDescription:
      "Anchor donor registration, recipient waitlist priority, and the matching decision as verified records across every participating hospital. The transplant authority gains an auditable trail proving each allocation followed the established medical priority rules.",
    heroCta: "Deploy Allocation Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Make organ allocation transparent and auditable across many hospitals at once.",
    mechanics: [
      { title: "Verified Donor Registry", description: "The Civil Registry module anchors each donor registration as a verified record, so the pool of available organs rests on authenticated identities." },
      { title: "Credentialed Waitlist", description: "The DID and VC Ledger binds each recipient to a credentialed identity and clinical priority, so a waitlist position cannot be quietly altered." },
      { title: "Rule-Bound Matching", description: "The Compliance Attestations module records that each match satisfied the medical priority rules, turning a policy into an enforced, checkable decision." },
      { title: "Immutable Decision Trail", description: "Every allocation, including why a higher-priority recipient was skipped, is sealed on-chain, so the process can be audited long after the fact." },
      { title: "Cross-Hospital View", description: "Donors and recipients across facilities are matched against one shared registry, ending the fragmentation that makes fair allocation hard to verify." },
      { title: "Authority Oversight", description: "The transplant authority queries any allocation and confirms it followed the rules, replacing after-the-fact investigations with a live, verifiable trail." },
    ],
    lifecycleTitle: "The Allocation Lifecycle",
    lifecycleSubtitle:
      "Follow one donor organ from registration through rule-bound matching to an audited allocation.",
    lifecycleSteps: [
      {
        label: "Donor Registration",
        description:
          "A donor organ becomes available. The contract anchors the donor identity, organ type, and compatibility data as a verified entry in the registry.",
        icon: Handshake,
        logFilename: "cerulea_transplant.log",
        logLines: [
          { text: "[SYS] Registering donor organ DON_612...", time: "02:11:44", tone: "default" },
          { text: "[CMD] registerDonor { organ: \"KIDNEY\", blood: \"B_POS\" }", time: "02:11:44", tone: "primary" },
          { text: "[AUTH] Verifying donor identity via civil registry...", time: "02:11:45", tone: "secondary" },
          { text: "[OK] Donor organ anchored at block 8210554.", time: "02:11:45", tone: "success" },
        ],
      },
      {
        label: "Waitlist Priority",
        description:
          "Eligible recipients are ranked by the medical priority rules. Each recipient's credentialed identity and clinical score are bound to their waitlist position.",
        icon: Users,
        logFilename: "cerulea_transplant.log",
        logLines: [
          { text: "[SYS] Building priority list for KIDNEY / B_POS...", time: "02:12:30", tone: "default" },
          { text: "[CMD] rankRecipients(organ: \"KIDNEY\", rule: \"NOTTO_V3\")", time: "02:12:30", tone: "primary" },
          { text: "[SYS] 14 eligible recipients scored and ordered.", time: "02:12:31", tone: "default" },
          { text: "[OK] Priority list sealed for allocation.", time: "02:12:31", tone: "success" },
        ],
      },
      {
        label: "Rule-Bound Match",
        description:
          "The contract selects the highest-priority compatible recipient and records the decision. Any skip of a higher-ranked recipient is captured with its clinical reason.",
        icon: Scale,
        logFilename: "cerulea_transplant.log",
        logLines: [
          { text: "[SYS] Executing allocation for DON_612...", time: "02:13:05", tone: "default" },
          { text: "[CMD] allocate(organ: \"DON_612\", to: \"RCP_88\")", time: "02:13:05", tone: "primary" },
          { text: "[AUTH] Attesting rule compliance NOTTO_V3...", time: "02:13:06", tone: "secondary" },
          { text: "[OK] Match recorded with priority proof.", time: "02:13:06", tone: "success" },
        ],
      },
      {
        label: "Authority Audit",
        description:
          "The transplant authority reviews the allocation. A single query returns the priority list, the match, and the compliance attestation, proving the rules were followed.",
        icon: Search,
        logFilename: "cerulea_transplant.log",
        logLines: [
          { text: "[SYS] Audit request for allocation DON_612...", time: "09:40:18", tone: "default" },
          { text: "[CMD] proveAllocation(DON_612)", time: "09:40:18", tone: "primary" },
          { text: "[SYS] Returning ranked list and match RCP_88.", time: "09:40:19", tone: "default" },
          { text: "[OK] Allocation verified as rule-compliant.", time: "09:40:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes transplant allocation into modular contracts. Each layer registers, ranks, matches, and proves without any single hospital controlling the decision.",
    layers: [
      {
        title: "Donor Registry",
        subtitle: "The Organ Anchor",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Organ Anchor",
          description:
            "The foundational data layer. It anchors each available organ to a verified donor identity, organ type, and compatibility profile, so the allocation pool rests on authenticated records.",
          platformFunction: "Identity & Registry",
        },
        codeSnippet:
          "contract DonorRegistry {\n  struct Organ {\n    bytes32 donor;\n    bytes8 organType;\n    bytes4 blood;\n    bool allocated;\n  }\n\n  mapping(bytes32 => Organ) public organs;\n\n  function registerDonor(bytes32 id, bytes8 organType, bytes4 blood) external onlyRegistrar {\n    organs[id] = Organ(keccak256(abi.encode(id)), organType, blood, false);\n  }\n}",
        simAction: "Simulate Donor Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying donor identity in civil registry...", tone: "default" },
          { text: "Recording organ type KIDNEY...", tone: "default" },
          { text: "Capturing blood group B_POS...", tone: "default" },
          { text: "Writing organ anchor to storage...", tone: "default" },
          { text: "[SUCCESS] Donor organ registered.", tone: "success" },
        ],
      },
      {
        title: "Priority Engine",
        subtitle: "The Ranked Waitlist",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ranked Waitlist",
          description:
            "Ranks eligible recipients strictly by the medical priority rules and binds each to a credentialed identity. It makes a waitlist position a verifiable, tamper-resistant value rather than an editable list entry.",
          platformFunction: "Prioritization",
        },
        codeSnippet:
          "function rankRecipients(bytes8 organType, bytes32 ruleset) external returns (bytes32[] memory) {\n    bytes32[] memory ranked = score(eligible[organType], ruleset);\n    priorityList[organType] = ranked;\n    emit ListSealed(organType, ruleset);\n    return ranked;\n}",
        simAction: "Simulate Waitlist Ranking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Gathering eligible kidney recipients...", tone: "default" },
          { text: "Applying priority ruleset NOTTO_V3...", tone: "default" },
          { text: "Scoring 14 candidates...", tone: "default" },
          { text: "Sealing ranked list...", tone: "default" },
          { text: "[SUCCESS] Priority list ready.", tone: "success" },
        ],
      },
      {
        title: "Match Executor",
        subtitle: "The Rule Enforcer",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rule Enforcer",
          description:
            "Selects the highest-priority compatible recipient and attests rule compliance. Any skip of a higher-ranked recipient must carry a clinical reason, so the decision is defensible and permanent.",
          platformFunction: "Allocation & Attestation",
        },
        codeSnippet:
          "function allocate(bytes32 organId, bytes32 recipient) external onlyAllocator {\n    require(!organs[organId].allocated, \"Already allocated\");\n    require(isTopCompatible(organId, recipient), \"Priority violation\");\n    organs[organId].allocated = true;\n    emit Allocated(organId, recipient, block.timestamp);\n}",
        simAction: "Simulate Rule-Bound Match",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading priority list for DON_612...", tone: "default" },
          { text: "Selecting top compatible recipient RCP_88...", tone: "default" },
          { text: "Attesting compliance with NOTTO_V3...", tone: "default" },
          { text: "Sealing allocation decision...", tone: "default" },
          { text: "[SUCCESS] Match recorded with proof.", tone: "success" },
        ],
      },
      {
        title: "Allocation Verifier",
        subtitle: "The Oversight Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Oversight Window",
          description:
            "A read-only gateway that returns the ranked list, the match, and the compliance attestation for any allocation. It lets the transplant authority confirm fairness without reconstructing events across hospitals.",
          platformFunction: "Verification & Audit",
        },
        codeSnippet:
          "function proveAllocation(bytes32 organId) external view returns (bytes32[] memory list, bytes32 matched) {\n    return (priorityList[organs[organId].organType], allocationOf[organId]);\n}",
        simAction: "Simulate Allocation Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Authority opens allocation DON_612...", tone: "default" },
          { text: "Returning sealed priority list...", tone: "default" },
          { text: "Resolving matched recipient RCP_88...", tone: "default" },
          { text: "Attaching compliance attestation...", tone: "default" },
          { text: "[SUCCESS] Allocation verified as fair.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent transplant allocation is a horizontal capability. Here is how different actors in the transplant chain put it to work.",
    sectors: [
      { icon: Hospital, title: "Transplant Hospitals", description: "Register donors and recipients into one shared registry and receive rule-bound match decisions, so allocation no longer depends on reconciling separate hospital lists.", assetTypes: ["Donor Records", "Recipient Waitlists", "Match Decisions"] },
      { icon: Users, title: "Recipients & Families", description: "Trust that waitlist priority is anchored and cannot be quietly altered, and that any decision affecting a placement is permanently recorded with its clinical basis.", assetTypes: ["Waitlist Positions", "Priority Scores", "Decision Records"] },
      { icon: Landmark, title: "Transplant Authorities", description: "Audit any allocation against the priority rules in one query, replacing after-the-fact investigations with a live, verifiable trail proving the process was followed.", assetTypes: ["Audit Trails", "Compliance Records", "Allocation Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging hospital transplant systems or capturing registrations from an authority portal, Cerulea routes both into one allocation record.",
    tracks: [
      {
        title: "Track A: Hospital System Bridging",
        description:
          "For transplant centres on legacy systems. Donor and recipient events are translated into signed on-chain registry entries and matches through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Transplant System", sublabel: "Hospital Registry Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Registry & Match Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Allocation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Authority Portal Access",
        description:
          "For the transplant authority and registrars. A signed portal anchors registrations and audits allocations directly against the shared ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Authority Portal", sublabel: "Registrar & Oversight", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Allocation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Transplant Registry Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a transplant allocation ledger with a verified donor registry, rule-bound matching, and an oversight audit view from scratch requires specialised engineers and long multi-hospital integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Priority & Matching Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects national registry integration benchmarks. Wiring each transplant centre, encoding the medical priority rules, and shipping an oversight audit view for an average network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your priority and matching rules into pre-audited WebAssembly binaries and provisions the allocation ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "medical-equipment-maintenance-and-calibration-compliance",
    icon: Cpu,
    eyebrow: "Biomedical Compliance Ledger",
    headline1: "Track every device.",
    headline2: "Never miss a service.",
    heroDescription:
      "Anchor the maintenance and calibration schedule for every critical device and alert the biomedical team before any machine falls out of compliance. Across hundreds of ventilators and imaging units, no scheduled service quietly slips past its due date.",
    heroCta: "Deploy Compliance Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a fleet of loosely tracked devices into a verified, alert-driven compliance record.",
    mechanics: [
      { title: "Device Attestation", description: "The Device Attestation module gives each critical machine a verified on-chain identity, so its maintenance history is bound to the exact unit rather than a spreadsheet row." },
      { title: "Calibration Records", description: "The Compliance Attestations module anchors each completed calibration with its result, making a passed calibration a verifiable fact for accreditation." },
      { title: "Pre-Due Alerts", description: "Scheduled due dates trigger alerts to the biomedical team before a device falls out of compliance, closing the gaps that manual tracking leaves." },
      { title: "Immutable Service Log", description: "The Audit Logs module seals every maintenance event, so a service record cannot be back-dated after an incident or an audit request." },
      { title: "Compliance Lockout", description: "A device past its calibration deadline is flagged out of service on the ledger, so an overdue machine is not silently kept in clinical use." },
      { title: "Accreditation Query", description: "An assessor pulls the full maintenance and calibration history for any device instantly, replacing a scramble through departmental records with one query." },
    ],
    lifecycleTitle: "The Maintenance Lifecycle",
    lifecycleSubtitle:
      "Follow one ventilator from registration through a scheduled calibration to an accreditation audit.",
    lifecycleSteps: [
      {
        label: "Device Registration",
        description:
          "A ventilator is registered with its identity and service interval. The contract anchors the device and its next due date as the start of its compliance record.",
        icon: Cpu,
        logFilename: "cerulea_biomed.log",
        logLines: [
          { text: "[SYS] Registering device VNT_118...", time: "08:05:11", tone: "default" },
          { text: "[CMD] registerDevice { type: \"VENTILATOR\", interval: 180 }", time: "08:05:11", tone: "primary" },
          { text: "[AUTH] Binding device attestation signature...", time: "08:05:12", tone: "secondary" },
          { text: "[OK] Device VNT_118 anchored at block 8501120.", time: "08:05:12", tone: "success" },
        ],
      },
      {
        label: "Pre-Due Alert",
        description:
          "As the calibration deadline approaches, the contract alerts the biomedical team. The device is scheduled for service before it can fall out of compliance.",
        icon: Zap,
        logFilename: "cerulea_biomed.log",
        logLines: [
          { text: "[SYS] Evaluating due dates for critical fleet...", time: "07:00:00", tone: "default" },
          { text: "[CMD] checkDue(VNT_118)", time: "07:00:00", tone: "primary" },
          { text: "[SYS] Calibration due in 7 days, alerting team.", time: "07:00:01", tone: "default" },
          { text: "[OK] Service scheduled for VNT_118.", time: "07:00:01", tone: "success" },
        ],
      },
      {
        label: "Calibration Anchor",
        description:
          "A technician completes the calibration. The result and next due date are anchored as a verified record, resetting the device's compliance clock.",
        icon: FileCheck,
        logFilename: "cerulea_biomed.log",
        logLines: [
          { text: "[SYS] Recording calibration for VNT_118...", time: "11:22:38", tone: "default" },
          { text: "[CMD] anchorCalibration(VNT_118, result: \"PASS\")", time: "11:22:38", tone: "primary" },
          { text: "[AUTH] Sealing technician attestation...", time: "11:22:39", tone: "secondary" },
          { text: "[OK] Calibration passed, clock reset.", time: "11:22:39", tone: "success" },
        ],
      },
      {
        label: "Accreditation Audit",
        description:
          "An assessor requests proof for the device. A single query returns its full maintenance and calibration history with every result and timestamp.",
        icon: Search,
        logFilename: "cerulea_biomed.log",
        logLines: [
          { text: "[SYS] Audit request for device VNT_118...", time: "15:10:05", tone: "default" },
          { text: "[CMD] proveHistory(VNT_118)", time: "15:10:05", tone: "primary" },
          { text: "[SYS] Returning 6 services, all within interval.", time: "15:10:06", tone: "default" },
          { text: "[OK] Compliance history verified.", time: "15:10:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes biomedical compliance into modular contracts. Each layer registers, alerts, calibrates, and proves so no critical device slips past its due date.",
    layers: [
      {
        title: "Device Registry",
        subtitle: "The Fleet Anchor",
        icon: Cpu,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fleet Anchor",
          description:
            "The foundational data layer. It gives each critical device a verified identity and service interval, so its entire maintenance history is bound to the exact unit and cannot be confused across a large fleet.",
          platformFunction: "Identity & Attestation",
        },
        codeSnippet:
          "contract DeviceRegistry {\n  struct Device {\n    bytes8 kind;\n    uint32 intervalDays;\n    uint256 nextDue;\n    bool inService;\n  }\n\n  mapping(bytes32 => Device) public devices;\n\n  function registerDevice(bytes32 id, bytes8 kind, uint32 interval) external onlyBiomed {\n    devices[id] = Device(kind, interval, block.timestamp + interval * 1 days, true);\n  }\n}",
        simAction: "Simulate Device Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading device attestation for VNT_118...", tone: "default" },
          { text: "Setting service interval to 180 days...", tone: "default" },
          { text: "Computing next due date...", tone: "default" },
          { text: "Writing device to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Device registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Due-Date Watcher",
        subtitle: "The Early Alert",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Early Alert",
          description:
            "Evaluates upcoming deadlines and alerts the biomedical team before a device falls due. It closes the compliance gaps that manual tracking leaves across hundreds of machines.",
          platformFunction: "Notifications",
        },
        codeSnippet:
          "function checkDue(bytes32 id) external {\n    Device memory d = devices[id];\n    if (block.timestamp + 7 days >= d.nextDue) {\n      emit MaintenanceDue(id, d.nextDue);\n    }\n}",
        simAction: "Simulate Due Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading next due date for VNT_118...", tone: "default" },
          { text: "Comparing against 7-day window...", tone: "default" },
          { text: "Calibration due soon...", tone: "default" },
          { text: "Emitting alert to biomedical team...", tone: "default" },
          { text: "[SUCCESS] Service scheduled ahead of deadline.", tone: "success" },
        ],
      },
      {
        title: "Calibration Notary",
        subtitle: "The Verified Service",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Service",
          description:
            "Anchors each completed calibration with its result and resets the compliance clock. A passed calibration becomes a sealed, verifiable fact rather than a signature in a logbook.",
          platformFunction: "Compliance & Attestation",
        },
        codeSnippet:
          "function anchorCalibration(bytes32 id, bool passed) external onlyTechnician {\n    require(passed, \"Failed calibration\");\n    services[id].push(Service(msg.sender, block.timestamp));\n    devices[id].nextDue = block.timestamp + devices[id].intervalDays * 1 days;\n    emit Calibrated(id, msg.sender);\n}",
        simAction: "Simulate Calibration Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Technician submits calibration for VNT_118...", tone: "default" },
          { text: "Confirming pass result...", tone: "default" },
          { text: "Sealing technician attestation...", tone: "default" },
          { text: "Resetting next due date...", tone: "default" },
          { text: "[SUCCESS] Calibration anchored, clock reset.", tone: "success" },
        ],
      },
      {
        title: "Compliance Verifier",
        subtitle: "The Audit Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Audit Window",
          description:
            "A read-only gateway that returns the full maintenance and calibration history for any device. It replaces a scramble through departmental records with a single verifiable query for the assessor.",
          platformFunction: "Verification & Audit",
        },
        codeSnippet:
          "function proveHistory(bytes32 id) external view returns (Service[] memory, uint256 nextDue) {\n    return (services[id], devices[id].nextDue);\n}",
        simAction: "Simulate History Proof",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Assessor opens device VNT_118...", tone: "default" },
          { text: "Gathering all service records...", tone: "default" },
          { text: "Confirming each within interval...", tone: "default" },
          { text: "Attaching next due date...", tone: "default" },
          { text: "[SUCCESS] Compliance history verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified device compliance is a horizontal capability. Here is how different actors in equipment management put it to work.",
    sectors: [
      { icon: Hospital, title: "Biomedical Engineering", description: "Manage the maintenance and calibration of a large device fleet from one alert-driven record, so no ventilator or imaging unit slips past its service deadline unnoticed.", assetTypes: ["Device Records", "Service Schedules", "Due Alerts"] },
      { icon: Cpu, title: "Equipment Vendors", description: "Anchor calibrations and firmware servicing they perform, giving hospitals verifiable proof of contracted maintenance rather than a paper visit report.", assetTypes: ["Calibration Records", "Service Attestations", "Warranty Trails"] },
      { icon: Landmark, title: "Accreditation Bodies", description: "Confirm that critical equipment was serviced on schedule by querying the device history directly, replacing sampled paper checks with a live compliance view.", assetTypes: ["Audit Trails", "Compliance Records", "Device Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a computerized maintenance management system or capturing calibrations from connected devices, Cerulea routes both into one compliance record.",
    tracks: [
      {
        title: "Track A: Maintenance System Bridging",
        description:
          "For hospitals on legacy CMMS platforms. Service events and due dates are translated into signed on-chain device records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy CMMS", sublabel: "Maintenance Management System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Service Hashing & Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Biomedical Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Connected Device Capture",
        description:
          "For connected equipment reporting its own status. Each device signs its calibration and usage data and routes it directly to the ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Connected Device", sublabel: "Ventilators & Imaging Units", icon: Cpu, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Device Compliance Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a biomedical compliance ledger with device attestation, pre-due alerting, and an accreditation audit view from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Maintenance & Calibration Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects hospital asset-management integration benchmarks. Wiring the CMMS and device feeds, building due-date alerting, and shipping an audit view for an average fleet takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your maintenance and calibration rules into pre-audited WebAssembly binaries and provisions the compliance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "drug-serialization-and-anti-counterfeiting-across-distribution-chain",
    icon: QrCode,
    eyebrow: "Pharmaceutical Provenance Engine",
    headline1: "Serialize every pack.",
    headline2: "Verify at dispensing.",
    heroDescription:
      "Give every pharmaceutical pack a verifiable on-chain serial that resolves from manufacture to point of dispensing, with a public anchor for patient verification. Counterfeit packs fail the check on the spot, and recalls become batch-precise instead of blanket.",
    heroCta: "Deploy Serialization Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Move drug serialization from a centralized checklist to a verifiable, decentralized chain of custody.",
    mechanics: [
      { title: "Pack-Level Serialization", description: "The Traceability Ledger anchors a unique serial for every pack at manufacture, so each unit can be verified individually rather than trusting a batch certificate." },
      { title: "Manufacturer Attestation", description: "The Device Attestation module binds each serial to the packaging line that produced it, making the origin a signed machine fact rather than a paper declaration." },
      { title: "Provenance Notary", description: "The Provenance Notary records each custody transfer from manufacturer to distributor to pharmacy, so a diverted or grey-market pack has no valid chain." },
      { title: "Point-of-Dispensing Check", description: "A pharmacist scans a pack and confirms a valid, unexpired, unretired serial before dispensing, stopping counterfeits at the last mile." },
      { title: "Batch-Precise Recall", description: "When a defect is found, the exact affected serials and their downstream custodians are isolated, so a recall pulls a batch instead of an entire product line." },
      { title: "Public Verification Anchor", description: "A public anchor lets a patient or inspector verify a pack without an account, exposing counterfeits that carry no genuine on-chain record." },
    ],
    lifecycleTitle: "The Serialization Lifecycle",
    lifecycleSubtitle:
      "Follow one pack from packaging line through distribution to a dispensing check and an inspector's field seizure.",
    lifecycleSteps: [
      {
        label: "Pack Commissioning",
        description:
          "A pack is serialized on the packaging line. The contract anchors its unique serial, batch, and expiry to the manufacturing line that produced it.",
        icon: Factory,
        logFilename: "cerulea_pharma_serial.log",
        logLines: [
          { text: "[SYS] Commissioning serial for pack PK_55210...", time: "05:41:02", tone: "default" },
          { text: "[CMD] commission { batch: \"BP_9920\", expiry: \"2028-03\" }", time: "05:41:02", tone: "primary" },
          { text: "[AUTH] Binding packaging line attestation...", time: "05:41:03", tone: "secondary" },
          { text: "[OK] Serial PK_55210 anchored at block 8811004.", time: "05:41:03", tone: "success" },
        ],
      },
      {
        label: "Distribution Custody",
        description:
          "The pack moves through wholesalers to a pharmacy. Each transfer is recorded, so any pack appearing without a valid custody chain is immediately suspect.",
        icon: Truck,
        logFilename: "cerulea_pharma_serial.log",
        logLines: [
          { text: "[SYS] Recording custody transfer for PK_55210...", time: "12:18:33", tone: "default" },
          { text: "[CMD] transferCustody(PK_55210, to: \"WHS_0x77\")", time: "12:18:33", tone: "primary" },
          { text: "[SYS] Chain extended, no gap detected.", time: "12:18:34", tone: "default" },
          { text: "[OK] Custody transferred to wholesaler.", time: "12:18:34", tone: "success" },
        ],
      },
      {
        label: "Dispensing Verification",
        description:
          "A pharmacist scans the pack at dispensing. The contract confirms the serial is valid, unexpired, and not already retired before the pack reaches a patient.",
        icon: QrCode,
        logFilename: "cerulea_pharma_serial.log",
        logLines: [
          { text: "[SYS] Verifying pack PK_55210 at pharmacy...", time: "16:52:20", tone: "default" },
          { text: "[CMD] verifyAndRetire(PK_55210)", time: "16:52:20", tone: "primary" },
          { text: "[SYS] Serial valid, unexpired, first dispense.", time: "16:52:21", tone: "default" },
          { text: "[OK] Pack retired and dispensed to patient.", time: "16:52:21", tone: "success" },
        ],
      },
      {
        label: "Field Seizure",
        description:
          "A drug inspector scans packs at a wholesale market. Packs returning no valid on-chain record are seized on the spot and the manufacturer is notified to trace the leak.",
        icon: Gavel,
        logFilename: "cerulea_pharma_serial.log",
        logLines: [
          { text: "[SYS] Inspector scanning 50 packs at market...", time: "10:07:44", tone: "default" },
          { text: "[CMD] batchVerify([...50 serials])", time: "10:07:44", tone: "primary" },
          { text: "[SYS] 3 packs return no valid record.", time: "10:07:45", tone: "error" },
          { text: "[OK] Counterfeits seized, manufacturer notified.", time: "10:07:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes drug serialization into modular contracts. Each layer commissions, transfers, verifies, and exposes a pack without any single party controlling the record.",
    layers: [
      {
        title: "Serial Registry",
        subtitle: "The Pack Passport",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pack Passport",
          description:
            "The foundational data layer. It mints a unique serial for every pack and stores its immutable link to batch, expiry, and packaging line, so each unit is individually verifiable rather than covered by a batch certificate.",
          platformFunction: "Identity & Serialization",
        },
        codeSnippet:
          "contract SerialRegistry {\n  struct Pack {\n    bytes32 batch;\n    uint32 expiry;\n    address line;\n    bool retired;\n  }\n\n  mapping(bytes32 => Pack) public packs;\n\n  function commission(bytes32 serial, bytes32 batch, uint32 expiry) external onlyLine {\n    packs[serial] = Pack(batch, expiry, msg.sender, false);\n  }\n}",
        simAction: "Simulate Pack Commissioning",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading packaging line attestation...", tone: "default" },
          { text: "Assigning batch BP_9920 and expiry...", tone: "default" },
          { text: "Minting serial PK_55210...", tone: "default" },
          { text: "Writing pack passport to storage...", tone: "default" },
          { text: "[SUCCESS] Pack serialized on-chain.", tone: "success" },
        ],
      },
      {
        title: "Custody Notary",
        subtitle: "The Distribution Seal",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Distribution Seal",
          description:
            "Records each transfer of a pack through the distribution chain. It ensures a pack that surfaces without a valid, unbroken custody chain is exposed as diverted or counterfeit.",
          platformFunction: "Provenance & Custody",
        },
        codeSnippet:
          "function transferCustody(bytes32 serial, address to) external {\n    require(custody[serial] == msg.sender, \"Not holder\");\n    require(!packs[serial].retired, \"Retired pack\");\n    chain[serial].push(Hop(msg.sender, to, block.timestamp));\n    custody[serial] = to;\n    emit CustodyTransferred(serial, to);\n}",
        simAction: "Simulate Custody Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Current holder transferring PK_55210...", tone: "default" },
          { text: "Confirming pack is not retired...", tone: "default" },
          { text: "Appending hop to custody chain...", tone: "default" },
          { text: "Updating holder to wholesaler...", tone: "default" },
          { text: "[SUCCESS] Custody transferred, chain intact.", tone: "success" },
        ],
      },
      {
        title: "Dispensing Guard",
        subtitle: "The Last-Mile Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Last-Mile Check",
          description:
            "Verifies a pack is valid, unexpired, and not already dispensed, then retires it. This stops counterfeits and duplicated serials at the exact moment a pack would reach a patient.",
          platformFunction: "Verification & Retirement",
        },
        codeSnippet:
          "function verifyAndRetire(bytes32 serial) external onlyPharmacy {\n    Pack storage p = packs[serial];\n    require(!p.retired, \"Already dispensed\");\n    require(p.expiry > block.timestamp / 1 days, \"Expired\");\n    p.retired = true;\n    emit Dispensed(serial, msg.sender);\n}",
        simAction: "Simulate Dispensing Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Pharmacist scans pack PK_55210...", tone: "default" },
          { text: "Checking serial is not retired...", tone: "default" },
          { text: "Confirming pack is unexpired...", tone: "default" },
          { text: "Retiring pack on dispense...", tone: "default" },
          { text: "[SUCCESS] Pack verified and dispensed.", tone: "success" },
        ],
      },
      {
        title: "Public Verifier",
        subtitle: "The Patient Window",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Patient Window",
          description:
            "A read-only gateway that resolves a serial to its authenticity status for anyone. It lets a patient or inspector verify a pack without an account, so counterfeits with no genuine record are exposed instantly.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyPublic(bytes32 serial) external view returns (bool genuine, bool retired) {\n    Pack memory p = packs[serial];\n    genuine = p.line != address(0);\n    retired = p.retired;\n}",
        simAction: "Simulate Public Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Inspector scans suspect pack...", tone: "default" },
          { text: "Resolving serial against registry...", tone: "default" },
          { text: "No genuine record found...", tone: "error" },
          { text: "Flagging pack as counterfeit...", tone: "default" },
          { text: "[SUCCESS] Verification result returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Pack-level serialization is a horizontal capability. Here is how different actors in the pharmaceutical chain put it to work.",
    sectors: [
      { icon: Factory, title: "Manufacturers", description: "Serialize every pack at the line and prove genuine origin, protecting brand and patients while gaining batch-precise recall instead of blanket withdrawals.", assetTypes: ["Pack Serials", "Batch Records", "Line Attestations"] },
      { icon: Truck, title: "Distributors & Pharmacies", description: "Verify custody and authenticity before accepting or dispensing stock, so grey-market and counterfeit packs are rejected before they reach a patient.", assetTypes: ["Custody Chains", "Dispensing Records", "Rejection Logs"] },
      { icon: Landmark, title: "Drug Regulators", description: "Scan packs in the field and seize counterfeits on the spot, tracing supply-chain leaks from a live record rather than after slow laboratory confirmation.", assetTypes: ["Seizure Records", "Recall Trails", "Verification Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging manufacturer packaging systems or capturing scans from pharmacy and inspector devices, Cerulea routes both into one serialization record.",
    tracks: [
      {
        title: "Track A: Manufacturer System Bridging",
        description:
          "For manufacturers on legacy serialization and ERP systems. Commissioning and shipment events are translated into signed on-chain pack records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Serialization / ERP", sublabel: "Manufacturer Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Serial Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Pharma Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Verification",
        description:
          "For pharmacies, inspectors, and patients on mobile. A signed scan verifies a pack against the public anchor and routes the result directly from the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Scan App / Wallet", sublabel: "Pharmacy & Inspector Devices", icon: Fingerprint, accent: false },
          { label: "Public Verification Layer", sublabel: "Patient Anchor", icon: Globe, accent: true },
          { label: "Cerulea Ledger", sublabel: "Pack Serial Record", icon: QrCode, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a pack-level serialization network with custody notarization, dispensing verification, and a public patient anchor from scratch requires specialised engineers and long supply-chain integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Serialization & Custody Rules",
      ruleCount: 52,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects pharmaceutical supply-chain integration benchmarks. Wiring manufacturer serialization, building custody and dispensing logic, and shipping a public verification anchor for an average network takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your serialization and custody rules into pre-audited WebAssembly binaries and provisions the provenance ledger and public anchor instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cold-chain-vaccine-distribution-temperature-compliance",
    icon: Thermometer,
    eyebrow: "Vaccine Cold-Chain Ledger",
    headline1: "Log every degree.",
    headline2: "Catch breaches early.",
    heroDescription:
      "Maintain a verified temperature log for every vaccine shipment from manufacturer to vaccination site and flag any cold-chain breach the moment it happens. Compromised batches are identified and pulled before a dose is ever administered.",
    heroCta: "Deploy Cold-Chain Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn scattered temperature logs into a live, tamper-evident record that catches breaches in real time.",
    mechanics: [
      { title: "Continuous Temperature Log", description: "The Cold-Chain Monitoring module records sensor readings for every shipment, so a vaccine's exposure history is a complete, tamper-evident record rather than a spot check." },
      { title: "Real-Time Breach Flag", description: "When a reading leaves the safe range, the contract flags the shipment immediately, so a breach is acted on during transport rather than discovered after administration." },
      { title: "Shipment Traceability", description: "The Traceability Ledger anchors each shipment from manufacturer to site, so a flagged batch can be located and every downstream custodian identified at once." },
      { title: "Batch Quarantine", description: "The Quality and Recall Ledger quarantines an affected batch on-chain, so a compromised lot cannot be quietly issued at a vaccination site." },
      { title: "Site Verification", description: "A vaccination site confirms an intact cold chain before accepting a shipment, so only doses with a clean temperature history reach patients." },
      { title: "Program Audit Query", description: "An immunization program queries the temperature and custody record for any batch, replacing manual data-logger downloads with a live verifiable view." },
    ],
    lifecycleTitle: "The Cold-Chain Lifecycle",
    lifecycleSubtitle:
      "Follow one vaccine shipment from dispatch through a transit breach to a quarantined batch that never reaches patients.",
    lifecycleSteps: [
      {
        label: "Shipment Dispatch",
        description:
          "A vaccine shipment leaves the manufacturer. The contract anchors the batch, quantity, and required temperature range as the start of its monitored journey.",
        icon: Package,
        logFilename: "cerulea_coldchain.log",
        logLines: [
          { text: "[SYS] Dispatching vaccine shipment SHP_4410...", time: "04:20:11", tone: "default" },
          { text: "[CMD] dispatch { batch: \"VX_2201\", range: \"2C_8C\" }", time: "04:20:11", tone: "primary" },
          { text: "[AUTH] Binding shipment to cold-chain policy...", time: "04:20:12", tone: "secondary" },
          { text: "[OK] Shipment SHP_4410 anchored at block 9010221.", time: "04:20:12", tone: "success" },
        ],
      },
      {
        label: "Transit Monitoring",
        description:
          "Sensors stream temperature during transport. A reading rises above the safe range and the contract flags the shipment as a breach in real time.",
        icon: Thermometer,
        logFilename: "cerulea_coldchain.log",
        logLines: [
          { text: "[SYS] Streaming telemetry for SHP_4410...", time: "11:47:03", tone: "default" },
          { text: "[CMD] logTemp(SHP_4410, celsius: 11.2)", time: "11:47:03", tone: "primary" },
          { text: "[SYS] Reading above 8C, breach detected.", time: "11:47:04", tone: "error" },
          { text: "[OK] Shipment flagged, alert dispatched.", time: "11:47:04", tone: "success" },
        ],
      },
      {
        label: "Batch Quarantine",
        description:
          "The flagged batch is quarantined on-chain. It cannot be accepted at a vaccination site while the breach investigation is open.",
        icon: Lock,
        logFilename: "cerulea_coldchain.log",
        logLines: [
          { text: "[SYS] Quarantining batch VX_2201...", time: "11:48:22", tone: "default" },
          { text: "[CMD] quarantine(batch: \"VX_2201\")", time: "11:48:22", tone: "primary" },
          { text: "[SYS] Batch marked non-issuable network-wide.", time: "11:48:23", tone: "default" },
          { text: "[OK] Compromised lot held from patients.", time: "11:48:23", tone: "success" },
        ],
      },
      {
        label: "Site Verification",
        description:
          "A vaccination site scans an incoming shipment. Only shipments with an intact temperature history are accepted, so no compromised dose is administered.",
        icon: ShieldCheck,
        logFilename: "cerulea_coldchain.log",
        logLines: [
          { text: "[SYS] Site verifying shipment SHP_4411...", time: "15:33:40", tone: "default" },
          { text: "[CMD] verifyColdChain(SHP_4411)", time: "15:33:40", tone: "primary" },
          { text: "[SYS] Full history within 2C to 8C, intact.", time: "15:33:41", tone: "default" },
          { text: "[OK] Shipment accepted for administration.", time: "15:33:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes vaccine cold-chain compliance into modular contracts. Each layer dispatches, monitors, quarantines, and verifies so no compromised dose reaches a patient.",
    layers: [
      {
        title: "Shipment Registry",
        subtitle: "The Journey Anchor",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Journey Anchor",
          description:
            "The foundational data layer. It anchors each shipment to its batch, quantity, and required temperature range, so every reading and custody event points back to a defined cold-chain policy.",
          platformFunction: "Identity & Traceability",
        },
        codeSnippet:
          "contract ShipmentRegistry {\n  struct Shipment {\n    bytes32 batch;\n    int16 minC;\n    int16 maxC;\n    bool breached;\n  }\n\n  mapping(bytes32 => Shipment) public shipments;\n\n  function dispatch(bytes32 id, bytes32 batch, int16 minC, int16 maxC) external {\n    shipments[id] = Shipment(batch, minC, maxC, false);\n  }\n}",
        simAction: "Simulate Shipment Dispatch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading manufacturer dispatch signature...", tone: "default" },
          { text: "Setting range 2C to 8C...", tone: "default" },
          { text: "Binding batch VX_2201...", tone: "default" },
          { text: "Writing shipment anchor to storage...", tone: "default" },
          { text: "[SUCCESS] Shipment dispatched and monitored.", tone: "success" },
        ],
      },
      {
        title: "Breach Monitor",
        subtitle: "The Real-Time Guard",
        icon: Thermometer,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Real-Time Guard",
          description:
            "Ingests sensor readings and flags any excursion outside the required range the instant it occurs. It shifts breach detection from a post-delivery download to a live alert during transport.",
          platformFunction: "Cold-Chain Monitoring",
        },
        codeSnippet:
          "function logTemp(bytes32 id, int16 celsius) external onlySensor {\n    Shipment storage s = shipments[id];\n    readings[id].push(Reading(celsius, block.timestamp));\n    if (celsius < s.minC || celsius > s.maxC) {\n      s.breached = true;\n      emit Breach(id, celsius);\n    }\n}",
        simAction: "Simulate Breach Detection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Sensor reports 11.2C for SHP_4410...", tone: "default" },
          { text: "Comparing against 2C to 8C range...", tone: "default" },
          { text: "Reading exceeds maximum...", tone: "error" },
          { text: "Flagging shipment as breached...", tone: "default" },
          { text: "[SUCCESS] Breach detected and alerted.", tone: "success" },
        ],
      },
      {
        title: "Quarantine Ledger",
        subtitle: "The Batch Hold",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Batch Hold",
          description:
            "Marks an affected batch non-issuable across the network. It ensures a compromised lot cannot be quietly accepted or administered while a breach is investigated.",
          platformFunction: "Quality & Recall",
        },
        codeSnippet:
          "function quarantine(bytes32 batch) external onlyQuality {\n    quarantined[batch] = true;\n    emit Quarantined(batch, block.timestamp);\n}\n\nfunction isIssuable(bytes32 batch) public view returns (bool) {\n    return !quarantined[batch];\n}",
        simAction: "Simulate Batch Quarantine",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Quality officer holds batch VX_2201...", tone: "default" },
          { text: "Setting batch non-issuable flag...", tone: "default" },
          { text: "Propagating hold network-wide...", tone: "default" },
          { text: "Blocking site acceptance...", tone: "default" },
          { text: "[SUCCESS] Compromised lot quarantined.", tone: "success" },
        ],
      },
      {
        title: "Site Verifier",
        subtitle: "The Acceptance Gate",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Acceptance Gate",
          description:
            "Confirms an intact temperature history before a site accepts a shipment. It guarantees that only doses with a clean, unbreached cold chain are administered to patients.",
          platformFunction: "Verification & Acceptance",
        },
        codeSnippet:
          "function verifyColdChain(bytes32 id) external view returns (bool ok) {\n    Shipment memory s = shipments[id];\n    ok = !s.breached && isIssuable(s.batch);\n}",
        simAction: "Simulate Site Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Site scans incoming shipment SHP_4411...", tone: "default" },
          { text: "Checking for any breach flag...", tone: "default" },
          { text: "Confirming batch not quarantined...", tone: "default" },
          { text: "History intact within range...", tone: "default" },
          { text: "[SUCCESS] Shipment accepted for use.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified cold-chain integrity is a horizontal capability. Here is how different actors in vaccine distribution put it to work.",
    sectors: [
      { icon: Factory, title: "Vaccine Manufacturers", description: "Ship with a monitored, tamper-evident temperature record from the dock, protecting product efficacy and enabling batch-precise action when a breach occurs in transit.", assetTypes: ["Shipment Records", "Batch Policies", "Dispatch Attestations"] },
      { icon: Truck, title: "Logistics & Distributors", description: "Prove an unbroken cold chain across each leg and catch excursions in real time, so a temperature failure is contained during transport rather than after delivery.", assetTypes: ["Temperature Logs", "Breach Flags", "Custody Chains"] },
      { icon: Landmark, title: "Immunization Programs", description: "Confirm every administered dose came through an intact cold chain and quarantine compromised batches network-wide, replacing manual logger reviews with a live record.", assetTypes: ["Quarantine Records", "Audit Trails", "Batch Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging distribution management systems or capturing readings from cold-chain data loggers, Cerulea routes both into one temperature record.",
    tracks: [
      {
        title: "Track A: Distribution System Bridging",
        description:
          "For programs on legacy distribution and inventory systems. Shipment and acceptance events are translated into signed on-chain records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Distribution System", sublabel: "Vaccine Logistics Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Shipment Hashing & Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Cold-Chain Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Cold-Chain Sensor Capture",
        description:
          "For shipments with connected data loggers. Each reading is signed by the device and routed directly to the ledger, flagging breaches in real time.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Data Logger", sublabel: "Cold-Chain Sensors", icon: Thermometer, accent: false },
          { label: "Consortium Validators", sublabel: "Telemetry Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shipment Temperature Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a vaccine cold-chain ledger with real-time breach detection, batch quarantine, and site verification from scratch requires specialised engineers and long distribution integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Temperature & Recall Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects immunization supply-chain integration benchmarks. Wiring distribution systems to sensor feeds, building breach detection, and shipping batch quarantine and site verification for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your temperature and recall rules into pre-audited WebAssembly binaries and provisions the cold-chain ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "prescription-drug-dispensing-audit-for-controlled-substances",
    icon: ScrollText,
    eyebrow: "Controlled Substance Ledger",
    headline1: "Record every dispense.",
    headline2: "Audit at any scale.",
    heroDescription:
      "Capture each controlled substance dispensing event with verified prescriber and pharmacist credentials on a tamper-proof ledger. Drug controllers gain a searchable audit trail across all participating pharmacies instead of chasing paper registers.",
    heroCta: "Deploy Dispensing Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace paper prescription registers with a credentialed, searchable dispensing record.",
    mechanics: [
      { title: "Credentialed Dispensing", description: "The DID and VC Ledger binds each dispensing event to the verified prescribing doctor and dispensing pharmacist, so no controlled dose is recorded against an unverified party." },
      { title: "Schedule Compliance", description: "The Compliance Attestations module checks each dispense against the drug's schedule rules, so quantity and frequency limits are enforced at the point of dispensing." },
      { title: "Immutable Dispensing Log", description: "The Audit Logs module seals every event, so a controlled substance record cannot be altered or removed after the fact to hide diversion." },
      { title: "Diversion Detection", description: "Patterns across pharmacies, such as duplicate prescriptions or excessive volumes, surface on the shared ledger where a single paper register would hide them." },
      { title: "Prescriber Verification", description: "A pharmacist confirms the prescriber's licence and authority before dispensing, so a forged or out-of-scope prescription is refused." },
      { title: "Regulator Search", description: "A drug controller searches the tamper-proof trail across all participating pharmacies at once, replacing periodic manual register inspections." },
    ],
    lifecycleTitle: "The Dispensing Lifecycle",
    lifecycleSubtitle:
      "Follow one controlled prescription from prescriber verification through dispensing to a regulator's audit.",
    lifecycleSteps: [
      {
        label: "Prescription Issue",
        description:
          "A doctor issues a controlled substance prescription. The contract binds it to the prescriber's verified credential and the drug's schedule as an accountable record.",
        icon: ScrollText,
        logFilename: "cerulea_controlled.log",
        logLines: [
          { text: "[SYS] Recording prescription RX_7781...", time: "09:31:20", tone: "default" },
          { text: "[CMD] issueRx { drug: \"SCH_X\", qty: 10, doctor: \"DR_22\" }", time: "09:31:20", tone: "primary" },
          { text: "[AUTH] Verifying prescriber licence and authority...", time: "09:31:21", tone: "secondary" },
          { text: "[OK] Prescription anchored at block 9210771.", time: "09:31:21", tone: "success" },
        ],
      },
      {
        label: "Pharmacist Verification",
        description:
          "The pharmacist confirms the prescriber's licence and the schedule limits before dispensing. An out-of-scope or forged prescription is refused at this gate.",
        icon: ShieldCheck,
        logFilename: "cerulea_controlled.log",
        logLines: [
          { text: "[SYS] Pharmacy verifying RX_7781...", time: "10:05:44", tone: "default" },
          { text: "[CMD] verifyRx(RX_7781, pharmacist: \"PH_09\")", time: "10:05:44", tone: "primary" },
          { text: "[SYS] Prescriber valid, within schedule limit.", time: "10:05:45", tone: "default" },
          { text: "[OK] Prescription cleared to dispense.", time: "10:05:45", tone: "success" },
        ],
      },
      {
        label: "Dispensing Event",
        description:
          "The pharmacist dispenses and the event is sealed with both credentials. The prescription is marked fulfilled so it cannot be reused at another pharmacy.",
        icon: FileCheck,
        logFilename: "cerulea_controlled.log",
        logLines: [
          { text: "[SYS] Recording dispense for RX_7781...", time: "10:07:12", tone: "default" },
          { text: "[CMD] dispense(RX_7781, pharmacist: \"PH_09\", qty: 10)", time: "10:07:12", tone: "primary" },
          { text: "[SYS] Event sealed, prescription marked fulfilled.", time: "10:07:13", tone: "default" },
          { text: "[OK] Dispense recorded, reuse blocked.", time: "10:07:13", tone: "success" },
        ],
      },
      {
        label: "Regulator Audit",
        description:
          "A drug controller searches the trail for a prescriber or pharmacy. Duplicate or excessive dispensing surfaces across pharmacies from one tamper-proof record.",
        icon: Search,
        logFilename: "cerulea_controlled.log",
        logLines: [
          { text: "[SYS] Controller query for prescriber DR_22...", time: "14:18:55", tone: "default" },
          { text: "[CMD] auditPrescriber(DR_22, window: \"90d\")", time: "14:18:55", tone: "primary" },
          { text: "[SYS] 214 dispenses across 6 pharmacies returned.", time: "14:18:56", tone: "default" },
          { text: "[OK] Pattern review completed on-chain.", time: "14:18:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes controlled substance dispensing into modular contracts. Each layer issues, verifies, dispenses, and audits without a paper register that a regulator cannot search.",
    layers: [
      {
        title: "Prescription Registry",
        subtitle: "The Accountable Order",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accountable Order",
          description:
            "The foundational data layer. It binds each controlled prescription to the prescriber's verified credential and the drug's schedule, turning an anonymous slip into an accountable, checkable record.",
          platformFunction: "Identity & Prescription",
        },
        codeSnippet:
          "contract PrescriptionRegistry {\n  struct Rx {\n    bytes32 drug;\n    uint16 qty;\n    address prescriber;\n    bool fulfilled;\n  }\n\n  mapping(bytes32 => Rx) public prescriptions;\n\n  function issueRx(bytes32 id, bytes32 drug, uint16 qty) external onlyPrescriber {\n    prescriptions[id] = Rx(drug, qty, msg.sender, false);\n  }\n}",
        simAction: "Simulate Prescription Issue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying prescriber licence for DR_22...", tone: "default" },
          { text: "Recording drug SCH_X, quantity 10...", tone: "default" },
          { text: "Binding schedule rules...", tone: "default" },
          { text: "Writing prescription to storage...", tone: "default" },
          { text: "[SUCCESS] Prescription anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Verification Gate",
        subtitle: "The Dispense Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Dispense Check",
          description:
            "Confirms the prescriber's authority and the schedule limits before any controlled dose leaves the counter. It refuses forged or out-of-scope prescriptions at the point of dispensing.",
          platformFunction: "Compliance Gate",
        },
        codeSnippet:
          "function verifyRx(bytes32 id) external view returns (bool ok) {\n    Rx memory r = prescriptions[id];\n    ok = !r.fulfilled\n      && isLicensed(r.prescriber)\n      && r.qty <= scheduleLimit(r.drug);\n}",
        simAction: "Simulate Prescription Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Pharmacy opens prescription RX_7781...", tone: "default" },
          { text: "Confirming prescriber is licensed...", tone: "default" },
          { text: "Checking quantity against schedule...", tone: "default" },
          { text: "Ensuring not already fulfilled...", tone: "default" },
          { text: "[SUCCESS] Prescription cleared to dispense.", tone: "success" },
        ],
      },
      {
        title: "Dispensing Notary",
        subtitle: "The Sealed Event",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Event",
          description:
            "Records each dispense with both prescriber and pharmacist credentials and marks the prescription fulfilled. This prevents reuse across pharmacies and makes the event impossible to alter later.",
          platformFunction: "Dispensing & Attestation",
        },
        codeSnippet:
          "function dispense(bytes32 id, uint16 qty) external onlyPharmacist {\n    Rx storage r = prescriptions[id];\n    require(!r.fulfilled, \"Already dispensed\");\n    r.fulfilled = true;\n    events.push(Dispense(id, r.prescriber, msg.sender, qty, block.timestamp));\n    emit Dispensed(id, msg.sender);\n}",
        simAction: "Simulate Dispensing Event",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Pharmacist PH_09 dispenses RX_7781...", tone: "default" },
          { text: "Confirming prescription unfulfilled...", tone: "default" },
          { text: "Sealing event with both credentials...", tone: "default" },
          { text: "Marking prescription fulfilled...", tone: "default" },
          { text: "[SUCCESS] Dispense recorded, reuse blocked.", tone: "success" },
        ],
      },
      {
        title: "Audit Engine",
        subtitle: "The Regulator Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Regulator Window",
          description:
            "A searchable gateway over every dispensing event across participating pharmacies. It lets a drug controller surface diversion patterns from one tamper-proof trail instead of inspecting paper registers.",
          platformFunction: "Audit & Search",
        },
        codeSnippet:
          "function auditPrescriber(address prescriber, uint256 fromTs) external view returns (Dispense[] memory) {\n    return filterByPrescriber(prescriber, fromTs);\n}",
        simAction: "Simulate Regulator Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Controller queries prescriber DR_22...", tone: "default" },
          { text: "Scanning dispensing events over 90 days...", tone: "default" },
          { text: "Aggregating across 6 pharmacies...", tone: "default" },
          { text: "Returning 214 matching events...", tone: "default" },
          { text: "[SUCCESS] Pattern review completed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Credentialed dispensing audit is a horizontal capability. Here is how different actors in controlled substance oversight put it to work.",
    sectors: [
      { icon: Building2, title: "Pharmacies", description: "Verify prescriber authority and schedule limits before dispensing and hold a defensible record of every controlled event, replacing a paper register with an accountable ledger.", assetTypes: ["Dispensing Records", "Prescriber Checks", "Fulfilment Logs"] },
      { icon: HeartPulse, title: "Prescribers & Clinics", description: "Issue controlled prescriptions bound to a verified licence, protecting legitimate prescribing from forgery and demonstrating adherence to schedule rules.", assetTypes: ["Prescription Records", "Credential Bindings", "Schedule Attestations"] },
      { icon: Landmark, title: "Drug Control Authorities", description: "Search dispensing across all pharmacies at once to surface diversion, replacing periodic manual register inspections with a live, tamper-proof audit.", assetTypes: ["Audit Trails", "Diversion Records", "Dispensing Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging pharmacy dispensing systems or capturing prescriptions from clinical software, Cerulea routes both into one controlled substance record.",
    tracks: [
      {
        title: "Track A: Pharmacy System Bridging",
        description:
          "For pharmacies on legacy dispensing software. Each controlled dispense is translated into a signed on-chain event through the API gateway without changing the counter workflow.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Dispensing Software", sublabel: "Pharmacy Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Controlled Substance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Prescriber Capture",
        description:
          "For prescribers on clinical software or a signed app. Each controlled prescription is issued from a verified credential directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Prescriber App / Wallet", sublabel: "Clinical Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Dispensing Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Dispensing Audit Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a controlled substance ledger with credentialed dispensing, schedule enforcement, and a cross-pharmacy audit search from scratch requires specialised engineers and long regulatory integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Dispensing & Schedule Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects pharmacy regulatory integration benchmarks. Wiring dispensing software, building credential and schedule enforcement, and shipping a cross-pharmacy audit search for an average deployment takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your dispensing and schedule rules into pre-audited WebAssembly binaries and provisions the controlled substance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "clinical-trial-drug-supply-chain-and-patient-dosing-records",
    icon: Package,
    eyebrow: "Investigational Supply Ledger",
    headline1: "Account for every unit.",
    headline2: "Prove trial integrity.",
    heroDescription:
      "Track investigational product from manufacture through site distribution to individual patient dosing, including cold-chain conditions where required. The sponsor holds a verified, gap-free record that supports the trial's regulatory submission.",
    heroCta: "Deploy Trial Supply Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Close every accountability gap between drug manufacture and the patient who received the dose.",
    mechanics: [
      { title: "End-to-End Accountability", description: "The Traceability Ledger anchors each investigational unit from manufacture to site to patient dose, so drug accountability has no gap that could weaken the submission." },
      { title: "Cold-Chain Assurance", description: "The Cold-Chain Monitoring module logs storage conditions for temperature-sensitive product, so a dose administered outside range is flagged rather than silently included." },
      { title: "Protocol Compliance", description: "The Compliance Attestations module binds each dosing event to the protocol's arm and schedule, so a deviation is recorded rather than lost." },
      { title: "Blinding Preservation", description: "Kit identities are tracked without revealing arm assignment on-chain, so accountability is maintained while the blind is preserved." },
      { title: "Reconciliation On Demand", description: "Dispensed, returned, and destroyed units reconcile against what was shipped to each site, producing an auditable balance at any time." },
      { title: "Regulatory Query", description: "A sponsor or inspector pulls the full chain for any unit or patient, replacing site paper logs with a verifiable record for the submission." },
    ],
    lifecycleTitle: "The Trial Supply Lifecycle",
    lifecycleSubtitle:
      "Follow one investigational kit from manufacture through site receipt to a recorded patient dose.",
    lifecycleSteps: [
      {
        label: "Product Manufacture",
        description:
          "An investigational kit is manufactured and labelled. The contract anchors the kit identity, batch, and storage requirement as the start of its accountability chain.",
        icon: Factory,
        logFilename: "cerulea_trial_supply.log",
        logLines: [
          { text: "[SYS] Registering investigational kit KIT_3120...", time: "06:12:50", tone: "default" },
          { text: "[CMD] manufacture { batch: \"IP_88\", storage: \"2C_8C\" }", time: "06:12:50", tone: "primary" },
          { text: "[AUTH] Binding manufacturing attestation...", time: "06:12:51", tone: "secondary" },
          { text: "[OK] Kit KIT_3120 anchored at block 9312050.", time: "06:12:51", tone: "success" },
        ],
      },
      {
        label: "Site Distribution",
        description:
          "The kit ships to a trial site under monitored conditions. Receipt is confirmed on-chain, extending the chain from manufacture to the investigator's inventory.",
        icon: Truck,
        logFilename: "cerulea_trial_supply.log",
        logLines: [
          { text: "[SYS] Shipping KIT_3120 to site SITE_07...", time: "10:44:21", tone: "default" },
          { text: "[CMD] receiveAtSite(KIT_3120, site: \"SITE_07\")", time: "10:44:21", tone: "primary" },
          { text: "[SYS] Cold-chain intact, receipt confirmed.", time: "10:44:22", tone: "default" },
          { text: "[OK] Kit added to site inventory.", time: "10:44:22", tone: "success" },
        ],
      },
      {
        label: "Patient Dosing",
        description:
          "The kit is dispensed to a randomized patient. The dosing event binds to the protocol arm without exposing the assignment, preserving the blind.",
        icon: HeartPulse,
        logFilename: "cerulea_trial_supply.log",
        logLines: [
          { text: "[SYS] Recording dose for subject SUBJ_221...", time: "13:20:09", tone: "default" },
          { text: "[CMD] doseSubject(KIT_3120, subject: \"SUBJ_221\")", time: "13:20:09", tone: "primary" },
          { text: "[AUTH] Binding to protocol arm under blind...", time: "13:20:10", tone: "secondary" },
          { text: "[OK] Dose recorded, blinding preserved.", time: "13:20:10", tone: "success" },
        ],
      },
      {
        label: "Drug Reconciliation",
        description:
          "The sponsor reconciles the site. Dispensed, returned, and destroyed units are balanced against shipments, producing an auditable accountability record for the submission.",
        icon: Search,
        logFilename: "cerulea_trial_supply.log",
        logLines: [
          { text: "[SYS] Reconciling inventory for SITE_07...", time: "17:05:33", tone: "default" },
          { text: "[CMD] reconcileSite(\"SITE_07\")", time: "17:05:33", tone: "primary" },
          { text: "[SYS] 120 shipped, 118 dosed, 2 returned, balanced.", time: "17:05:34", tone: "default" },
          { text: "[OK] Accountability record generated.", time: "17:05:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes trial drug supply into modular contracts. Each layer manufactures, distributes, doses, and reconciles without a gap that could jeopardize the submission.",
    layers: [
      {
        title: "Kit Registry",
        subtitle: "The Product Anchor",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Product Anchor",
          description:
            "The foundational data layer. It mints a unique kit identity at manufacture and stores its batch and storage requirement, so every later custody and dosing event points back to a defined unit.",
          platformFunction: "Identity & Traceability",
        },
        codeSnippet:
          "contract KitRegistry {\n  struct Kit {\n    bytes32 batch;\n    bytes8 storageReq;\n    address site;\n    uint8 status;\n  }\n\n  mapping(bytes32 => Kit) public kits;\n\n  function manufacture(bytes32 id, bytes32 batch, bytes8 storageReq) external onlyManufacturer {\n    kits[id] = Kit(batch, storageReq, address(0), MANUFACTURED);\n  }\n}",
        simAction: "Simulate Kit Manufacture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading manufacturing attestation...", tone: "default" },
          { text: "Recording batch IP_88 and storage 2C_8C...", tone: "default" },
          { text: "Minting kit identity KIT_3120...", tone: "default" },
          { text: "Writing product anchor to storage...", tone: "default" },
          { text: "[SUCCESS] Kit registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Distribution Tracker",
        subtitle: "The Site Handoff",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Site Handoff",
          description:
            "Records shipment to and receipt at each trial site with cold-chain status. It ensures product entering a site's inventory carries a confirmed, unbroken chain from manufacture.",
          platformFunction: "Custody & Cold-Chain",
        },
        codeSnippet:
          "function receiveAtSite(bytes32 id, bytes32 site) external onlyInvestigator {\n    require(coldChainIntact(id), \"Excursion in transit\");\n    kits[id].site = address(uint160(uint256(site)));\n    kits[id].status = AT_SITE;\n    emit ReceivedAtSite(id, site);\n}",
        simAction: "Simulate Site Receipt",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Shipping KIT_3120 to SITE_07...", tone: "default" },
          { text: "Confirming cold chain intact...", tone: "default" },
          { text: "Recording site receipt...", tone: "default" },
          { text: "Adding kit to site inventory...", tone: "default" },
          { text: "[SUCCESS] Kit received at site.", tone: "success" },
        ],
      },
      {
        title: "Dosing Binder",
        subtitle: "The Blinded Record",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Blinded Record",
          description:
            "Binds a dosing event to a subject and protocol arm without exposing the assignment on-chain. It maintains full accountability while preserving the trial blind.",
          platformFunction: "Dosing & Blinding",
        },
        codeSnippet:
          "function doseSubject(bytes32 kitId, bytes32 subject) external onlyInvestigator {\n    require(kits[kitId].status == AT_SITE, \"Not available\");\n    kits[kitId].status = DOSED;\n    doses.push(Dose(kitId, subject, armCommit(kitId), block.timestamp));\n    emit Dosed(kitId, subject);\n}",
        simAction: "Simulate Patient Dosing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Dispensing KIT_3120 to SUBJ_221...", tone: "default" },
          { text: "Confirming kit is available at site...", tone: "default" },
          { text: "Committing arm under blind...", tone: "default" },
          { text: "Recording dosing event...", tone: "default" },
          { text: "[SUCCESS] Dose recorded, blind preserved.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation Engine",
        subtitle: "The Accountability Balance",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accountability Balance",
          description:
            "Balances dispensed, returned, and destroyed units against shipments per site. It produces an auditable accountability record on demand, ready for the sponsor and inspectors.",
          platformFunction: "Reconciliation & Audit",
        },
        codeSnippet:
          "function reconcileSite(bytes32 site) external view returns (uint256 shipped, uint256 dosed, uint256 returned) {\n    Balance memory b = balances[site];\n    return (b.shipped, b.dosed, b.returned);\n}",
        simAction: "Simulate Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Sponsor reconciles SITE_07...", tone: "default" },
          { text: "Summing shipped, dosed and returned...", tone: "default" },
          { text: "Balancing against 120 shipped...", tone: "default" },
          { text: "Generating accountability record...", tone: "default" },
          { text: "[SUCCESS] Site reconciled and balanced.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Investigational drug accountability is a horizontal capability. Here is how different actors in a clinical trial put it to work.",
    sectors: [
      { icon: FlaskConical, title: "Trial Sponsors & CROs", description: "Hold a gap-free accountability record from manufacture to dose, so the drug accountability section of a regulatory submission rests on verified data rather than reconciled site paper.", assetTypes: ["Accountability Records", "Reconciliation Reports", "Chain Trails"] },
      { icon: Hospital, title: "Investigator Sites", description: "Confirm cold-chain integrity on receipt and record each dose against the protocol under blind, replacing manual drug logs with a verifiable inventory.", assetTypes: ["Site Inventories", "Dosing Records", "Receipt Confirmations"] },
      { icon: Landmark, title: "Regulatory Inspectors", description: "Trace any unit or subject dose in one query during an inspection, confirming trial integrity from a tamper-evident chain instead of site binders.", assetTypes: ["Audit Trails", "Inspection Records", "Supply Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an interactive response system or capturing dosing from site software, Cerulea routes both into one accountability record.",
    tracks: [
      {
        title: "Track A: Trial System Bridging",
        description:
          "For sponsors on legacy IRT and supply systems. Manufacture, shipment, and dosing events are translated into signed on-chain kit records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "IRT / Supply System", sublabel: "Sponsor & CRO Platforms", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Investigational Supply Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Site Dosing Capture",
        description:
          "For investigator sites on a signed client. Receipt and dosing events are recorded from site software directly to the ledger under the trial blind.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Site Client", sublabel: "Investigator Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Supply Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Trial Accountability Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an investigational supply ledger with cold-chain assurance, blinded dosing records, and on-demand reconciliation from scratch requires specialised engineers and long trial-system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Supply & Dosing Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects clinical supply integration benchmarks. Wiring IRT and supply systems, building blinded dosing and cold-chain logic, and shipping reconciliation for an average trial takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your supply and dosing rules into pre-audited WebAssembly binaries and provisions the accountability ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "pharmacy-license-verification-and-controlled-substance-reporting",
    icon: IdCard,
    eyebrow: "License Verification Layer",
    headline1: "Verify before you supply.",
    headline2: "Report as it happens.",
    heroDescription:
      "Let wholesalers verify a pharmacy's licence against a live registry before supplying controlled substances, with supplies reported to the drug controller automatically. Outdated lists and periodic batch reporting give way to instant checks and real-time visibility.",
    heroCta: "Deploy Verification Layers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace stale licence lists and batch reports with instant verification and live reporting.",
    mechanics: [
      { title: "Live License Registry", description: "The DID and VC Ledger holds each pharmacy's licence as a verifiable credential, so a wholesaler checks current validity rather than an outdated exported list." },
      { title: "Pre-Supply Verification", description: "The Compliance Attestations module confirms a pharmacy's licence is valid and in scope before a controlled supply is authorized, blocking supply to lapsed licences." },
      { title: "Automatic Reporting", description: "Each controlled supply is reported to the drug controller as it happens, replacing periodic batch submissions with real-time visibility." },
      { title: "Immutable Supply Log", description: "The Audit Logs module seals every verification and supply event, so the reporting record cannot be altered after submission." },
      { title: "License Revocation", description: "When a licence is suspended, the registry reflects it immediately, so a wholesaler cannot unknowingly supply a pharmacy that has just lost authority." },
      { title: "Controller Dashboard", description: "The drug controller sees controlled supplies across wholesalers in near real time, spotting anomalies without waiting for the next reporting cycle." },
    ],
    lifecycleTitle: "The Verification Lifecycle",
    lifecycleSubtitle:
      "Follow one controlled supply from a licence check through authorized dispatch to automatic reporting.",
    lifecycleSteps: [
      {
        label: "License Check",
        description:
          "A wholesaler receives an order and checks the pharmacy's licence against the live registry before agreeing to supply controlled substances.",
        icon: IdCard,
        logFilename: "cerulea_license_verify.log",
        logLines: [
          { text: "[SYS] Verifying licence for pharmacy PHR_318...", time: "08:41:15", tone: "default" },
          { text: "[CMD] checkLicense(PHR_318, class: \"CONTROLLED\")", time: "08:41:15", tone: "primary" },
          { text: "[AUTH] Resolving credential against registry...", time: "08:41:16", tone: "secondary" },
          { text: "[OK] Licence valid and in scope.", time: "08:41:16", tone: "success" },
        ],
      },
      {
        label: "Supply Authorization",
        description:
          "With the licence verified, the controlled supply is authorized. An order to a lapsed or out-of-scope licence would be refused at this gate.",
        icon: ShieldCheck,
        logFilename: "cerulea_license_verify.log",
        logLines: [
          { text: "[SYS] Authorizing supply order ORD_9021...", time: "08:42:03", tone: "default" },
          { text: "[CMD] authorizeSupply(ORD_9021, drug: \"SCH_Y\", qty: 200)", time: "08:42:03", tone: "primary" },
          { text: "[SYS] Licence valid, order cleared.", time: "08:42:04", tone: "default" },
          { text: "[OK] Controlled supply authorized.", time: "08:42:04", tone: "success" },
        ],
      },
      {
        label: "Automatic Reporting",
        description:
          "The supply is reported to the drug controller the moment it is authorized, so oversight is continuous rather than dependent on a later batch submission.",
        icon: Radio,
        logFilename: "cerulea_license_verify.log",
        logLines: [
          { text: "[SYS] Reporting supply ORD_9021 to controller...", time: "08:42:05", tone: "default" },
          { text: "[CMD] reportSupply(ORD_9021)", time: "08:42:05", tone: "primary" },
          { text: "[SYS] Event pushed to controller dashboard.", time: "08:42:06", tone: "default" },
          { text: "[OK] Supply visible in real time.", time: "08:42:06", tone: "success" },
        ],
      },
      {
        label: "License Revocation",
        description:
          "A pharmacy licence is later suspended. The registry updates instantly and subsequent supply checks for that pharmacy are refused.",
        icon: Lock,
        logFilename: "cerulea_license_verify.log",
        logLines: [
          { text: "[SYS] Suspension issued for pharmacy PHR_902...", time: "14:10:47", tone: "default" },
          { text: "[CMD] revokeLicense(PHR_902)", time: "14:10:47", tone: "primary" },
          { text: "[SYS] Registry updated, status now suspended.", time: "14:10:48", tone: "default" },
          { text: "[OK] Future supply checks will fail.", time: "14:10:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes licence verification into modular contracts. Each layer registers, verifies, reports, and revokes so no controlled supply reaches a pharmacy without a valid licence.",
    layers: [
      {
        title: "License Registry",
        subtitle: "The Live Credential",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Credential",
          description:
            "The foundational data layer. It holds each pharmacy's licence as a verifiable credential with its scope and status, so verification always reads current validity rather than a stale exported list.",
          platformFunction: "Identity & Registry",
        },
        codeSnippet:
          "contract LicenseRegistry {\n  struct License {\n    bytes8 scope;\n    bool active;\n    uint256 issuedAt;\n  }\n\n  mapping(bytes32 => License) public licenses;\n\n  function issue(bytes32 pharmacy, bytes8 scope) external onlyAuthority {\n    licenses[pharmacy] = License(scope, true, block.timestamp);\n  }\n}",
        simAction: "Simulate License Issue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Authority issues licence for PHR_318...", tone: "default" },
          { text: "Recording controlled-substance scope...", tone: "default" },
          { text: "Marking licence active...", tone: "default" },
          { text: "Writing credential to registry...", tone: "default" },
          { text: "[SUCCESS] License registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Verification Gate",
        subtitle: "The Supply Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Supply Check",
          description:
            "Confirms a pharmacy's licence is active and in scope before a controlled supply is authorized. It blocks supply to lapsed or out-of-scope licences at the point of order.",
          platformFunction: "Compliance Gate",
        },
        codeSnippet:
          "function checkLicense(bytes32 pharmacy, bytes8 needed) public view returns (bool ok) {\n    License memory l = licenses[pharmacy];\n    ok = l.active && (l.scope & needed) == needed;\n}",
        simAction: "Simulate License Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Wholesaler checks pharmacy PHR_318...", tone: "default" },
          { text: "Loading current licence status...", tone: "default" },
          { text: "Confirming controlled scope...", tone: "default" },
          { text: "Licence active and in scope...", tone: "default" },
          { text: "[SUCCESS] Supply verification passed.", tone: "success" },
        ],
      },
      {
        title: "Reporting Engine",
        subtitle: "The Live Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Feed",
          description:
            "Pushes each authorized controlled supply to the drug controller as it happens. It replaces periodic batch submissions with continuous, tamper-evident visibility for the regulator.",
          platformFunction: "Reporting & Audit",
        },
        codeSnippet:
          "function reportSupply(bytes32 orderId) external onlyWholesaler {\n    Supply memory s = supplies[orderId];\n    require(s.authorized, \"Not authorized\");\n    reported[orderId] = true;\n    emit SupplyReported(orderId, s.pharmacy, s.drug, s.qty);\n}",
        simAction: "Simulate Supply Reporting",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Supply ORD_9021 authorized...", tone: "default" },
          { text: "Composing controller report...", tone: "default" },
          { text: "Pushing event to dashboard...", tone: "default" },
          { text: "Sealing report to audit log...", tone: "default" },
          { text: "[SUCCESS] Supply reported in real time.", tone: "success" },
        ],
      },
      {
        title: "Revocation Switch",
        subtitle: "The Instant Suspend",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Suspend",
          description:
            "Lets the authority suspend a licence with immediate effect. The change reaches every wholesaler at once, so no supply can be made to a pharmacy that has just lost authority.",
          platformFunction: "License Revocation",
        },
        codeSnippet:
          "function revokeLicense(bytes32 pharmacy) external onlyAuthority {\n    licenses[pharmacy].active = false;\n    emit LicenseRevoked(pharmacy, block.timestamp);\n}",
        simAction: "Simulate License Revocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Authority suspends pharmacy PHR_902...", tone: "default" },
          { text: "Loading licence record...", tone: "default" },
          { text: "Clearing active flag...", tone: "default" },
          { text: "Propagating suspension network-wide...", tone: "default" },
          { text: "[SUCCESS] Future supplies will be refused.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Live licence verification is a horizontal capability. Here is how different actors in controlled supply put it to work.",
    sectors: [
      { icon: Truck, title: "Pharmaceutical Wholesalers", description: "Verify a pharmacy's licence in real time before supplying controlled substances, protecting the business from supplying lapsed licences and automating regulatory reporting.", assetTypes: ["Supply Orders", "License Checks", "Report Records"] },
      { icon: Building2, title: "Pharmacies", description: "Present a verifiable, current licence credential to any wholesaler, so a valid pharmacy is never blocked by an outdated list and its supplies are cleanly recorded.", assetTypes: ["License Credentials", "Scope Attestations", "Supply Histories"] },
      { icon: Landmark, title: "Drug Control Authorities", description: "See controlled supplies across wholesalers in near real time and suspend a licence with instant effect, replacing periodic batch reports with a live oversight feed.", assetTypes: ["Audit Trails", "Supply Registries", "Revocation Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging wholesaler distribution systems or capturing licence status from an authority portal, Cerulea routes both into one verification layer.",
    tracks: [
      {
        title: "Track A: Wholesaler System Bridging",
        description:
          "For wholesalers on legacy distribution systems. Licence checks and supply reporting are handled on-chain through the API gateway without changing the ordering workflow.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Distribution System", sublabel: "Wholesaler Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Verification & Reporting", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "License Verification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Authority Portal Access",
        description:
          "For the drug controller and licensing authority. A signed portal issues and revokes credentials and monitors supplies directly against the shared ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Authority Portal", sublabel: "Licensing & Oversight", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Registry Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "License Registry Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a live licence verification layer with pre-supply checks, automatic reporting, and instant revocation from scratch requires specialised engineers and long regulatory integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Verification & Reporting Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects controlled-supply regulatory integration benchmarks. Wiring wholesaler systems, building live licence checks, and shipping automatic reporting for an average deployment takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your verification and reporting rules into pre-audited WebAssembly binaries and provisions the verification ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "patient-health-record-portability-across-clinics-and-labs",
    icon: Network,
    eyebrow: "Health Record Portability Chain",
    headline1: "Carry your record.",
    headline2: "Consent at every door.",
    heroDescription:
      "Give a patient a portable health record governed by their own consent across clinics and labs, with role-based access and a full audit trail. A patient presenting at any consortium clinic has their history available in under thirty seconds, with no calls or fax transfers.",
    heroCta: "Deploy Portability Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn scattered provider files into one consent-governed, portable record the patient controls.",
    mechanics: [
      { title: "Patient-Controlled Consent", description: "The DID and VC Ledger binds consent to the patient's own identity, so record access at any clinic follows the patient's decision rather than each provider's default." },
      { title: "Verified Identity Anchor", description: "The Civil Registry anchors the patient identity that ties records from different providers to one person without duplicating or centralizing the records themselves." },
      { title: "Privacy Guard", description: "The Privacy and Compliance Guard enforces data-protection rules on every disclosure, keeping shared records within legal limits for health information." },
      { title: "Role-Based Access", description: "A clinic, a lab, and a specialist each see only the record scope their role permits, so portability never means unrestricted exposure." },
      { title: "Instant Retrieval", description: "A new clinic resolves the patient's consented history on presentation, replacing phone calls and fax transfers with a sub-thirty-second lookup." },
      { title: "Full Audit Trail", description: "Every access and consent change is logged immutably, so the patient and a regulator can see exactly who viewed the record and when." },
    ],
    lifecycleTitle: "The Portability Lifecycle",
    lifecycleSubtitle:
      "Follow one patient from enrollment through a new-clinic visit to an instant, consented record retrieval.",
    lifecycleSteps: [
      {
        label: "Patient Enrollment",
        description:
          "A patient enrolls with a verified identity anchor. Their records stay at each provider while a consent profile is bound to their portable identity.",
        icon: Fingerprint,
        logFilename: "cerulea_portability.log",
        logLines: [
          { text: "[SYS] Enrolling patient into portability chain...", time: "09:00:12", tone: "default" },
          { text: "[CMD] enroll { idAnchor: \"CIV_5521\", scope: \"CONSORTIUM\" }", time: "09:00:12", tone: "primary" },
          { text: "[AUTH] Binding identity via civil registry...", time: "09:00:13", tone: "secondary" },
          { text: "[OK] Patient enrolled at block 9600121.", time: "09:00:13", tone: "success" },
        ],
      },
      {
        label: "New Clinic Visit",
        description:
          "The patient presents at a clinic they have never visited. The clinic requests access under the patient's consent, and role-based rules scope what it may see.",
        icon: Hospital,
        logFilename: "cerulea_portability.log",
        logLines: [
          { text: "[SYS] Access request from Clinic_0x44...", time: "11:22:40", tone: "default" },
          { text: "[CMD] requestAccess(patient: \"CIV_5521\", role: \"GP\")", time: "11:22:40", tone: "primary" },
          { text: "[AUTH] Checking patient consent and role scope...", time: "11:22:41", tone: "secondary" },
          { text: "[OK] Scoped access granted to clinic.", time: "11:22:41", tone: "success" },
        ],
      },
      {
        label: "Instant Retrieval",
        description:
          "The clinic resolves the patient's consented history from other providers and labs in seconds, with no phone calls or fax transfers.",
        icon: Network,
        logFilename: "cerulea_portability.log",
        logLines: [
          { text: "[SYS] Resolving record pointers for CIV_5521...", time: "11:22:52", tone: "default" },
          { text: "[CMD] fetchHistory(role: \"GP\")", time: "11:22:52", tone: "primary" },
          { text: "[SYS] 4 providers and 2 labs returned in 21s.", time: "11:23:13", tone: "default" },
          { text: "[OK] Full consented history available.", time: "11:23:13", tone: "success" },
        ],
      },
      {
        label: "Access Logging",
        description:
          "The access is written to the immutable trail. The patient can later see which clinic viewed the record, under what role, and at what time.",
        icon: ScrollText,
        logFilename: "cerulea_portability.log",
        logLines: [
          { text: "[SYS] Recording clinic access for audit...", time: "11:23:20", tone: "default" },
          { text: "[CMD] logAccess(clinic: \"0x44\", role: \"GP\")", time: "11:23:20", tone: "primary" },
          { text: "[SYS] Access sealed to patient audit trail.", time: "11:23:21", tone: "default" },
          { text: "[OK] Entry visible in patient portal.", time: "11:23:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes record portability into modular contracts. Each layer enrolls, authorizes, retrieves, and logs so a patient carries a consented record without centralizing data.",
    layers: [
      {
        title: "Identity Anchor",
        subtitle: "The Portable Self",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Portable Self",
          description:
            "The foundational data layer. It binds a verified identity to a consent profile, so records held by different providers resolve to one person without any of those records being copied into a central store.",
          platformFunction: "Identity & Consent",
        },
        codeSnippet:
          "contract IdentityAnchor {\n  struct Profile {\n    bytes32 civilId;\n    bytes8 scope;\n    uint256 enrolledAt;\n  }\n\n  mapping(bytes32 => Profile) public profiles;\n\n  function enroll(bytes32 patient, bytes32 civilId, bytes8 scope) external {\n    profiles[patient] = Profile(civilId, scope, block.timestamp);\n  }\n}",
        simAction: "Simulate Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying identity via civil registry...", tone: "default" },
          { text: "Binding consortium scope...", tone: "default" },
          { text: "Creating portable consent profile...", tone: "default" },
          { text: "Writing anchor to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Patient enrolled, records at source.", tone: "success" },
        ],
      },
      {
        title: "Access Controller",
        subtitle: "The Role Scope",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Role Scope",
          description:
            "Grants a provider access limited to what its role permits under the patient's consent. It ensures portability never becomes unrestricted exposure of a full record.",
          platformFunction: "Access Control",
        },
        codeSnippet:
          "function requestAccess(bytes32 patient, bytes8 role) external returns (bytes32 token) {\n    require(consented(patient, msg.sender), \"No consent\");\n    token = grantScoped(patient, msg.sender, roleScope(role));\n    emit AccessGranted(patient, msg.sender, role);\n}",
        simAction: "Simulate Access Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Clinic requests access as GP...", tone: "default" },
          { text: "Confirming patient consent...", tone: "default" },
          { text: "Computing role scope...", tone: "default" },
          { text: "Issuing scoped access token...", tone: "default" },
          { text: "[SUCCESS] Scoped access granted.", tone: "success" },
        ],
      },
      {
        title: "Record Resolver",
        subtitle: "The Federated Fetch",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Federated Fetch",
          description:
            "Resolves pointers to records held across providers and labs and returns only the in-scope fields. It delivers a full consented history in seconds without ever copying records centrally.",
          platformFunction: "Federated Retrieval",
        },
        codeSnippet:
          "function fetchHistory(bytes32 token) external view returns (bytes[] memory records) {\n    require(validToken(token), \"No access\");\n    return gateway.pullScoped(patientOf(token), scopeOf(token));\n}",
        simAction: "Simulate History Fetch",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Validating access token...", tone: "default" },
          { text: "Resolving pointers to 4 providers...", tone: "default" },
          { text: "Pulling 2 lab result sets...", tone: "default" },
          { text: "Filtering to role scope...", tone: "default" },
          { text: "[SUCCESS] Consented history returned.", tone: "success" },
        ],
      },
      {
        title: "Audit Ledger",
        subtitle: "The Access History",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Access History",
          description:
            "Writes every access and consent change to an immutable log. It gives the patient and a regulator a complete, tamper-evident view of who read the record and under what role.",
          platformFunction: "Audit & Logging",
        },
        codeSnippet:
          "function logAccess(bytes32 patient, address provider, bytes8 role) external {\n    trail[patient].push(Access(provider, role, block.timestamp));\n    emit AccessLogged(patient, provider, role);\n}",
        simAction: "Simulate Access Logging",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Clinic access completed...", tone: "default" },
          { text: "Composing audit record...", tone: "default" },
          { text: "Recording GP role and timestamp...", tone: "default" },
          { text: "Sealing to patient trail...", tone: "default" },
          { text: "[SUCCESS] Access logged for patient view.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Consent-governed portability is a horizontal capability. Here is how different actors in the care consortium put it to work.",
    sectors: [
      { icon: Hospital, title: "Clinics & Providers", description: "Retrieve a new patient's consented history in seconds on presentation, ending the phone calls and fax transfers that delay care and repeat tests.", assetTypes: ["Access Grants", "Record Pointers", "Visit Logs"] },
      { icon: FlaskConical, title: "Diagnostic Labs", description: "Share results into a patient's portable record under role-based access, so prior tests are visible to the next provider without the patient carrying physical films or reports.", assetTypes: ["Result Shares", "Scope Attestations", "Access Records"] },
      { icon: Users, title: "Patients", description: "Control who can see their record across the consortium and review a full history of every access, replacing lost paper files with a portable, consent-governed identity.", assetTypes: ["Consent Profiles", "Access Histories", "Portable Identities"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging clinic and lab systems or capturing consent from a patient's own device, Cerulea routes both into one portability layer.",
    tracks: [
      {
        title: "Track A: Provider System Bridging",
        description:
          "For clinics and labs on legacy record systems. Access requests are authorized on-chain and records are pulled from source through the API gateway without centralizing data.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Clinic / Lab System", sublabel: "Provider Record Platforms", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Consent & Federated Fetch", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Portability Consent Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Patient Consent Capture",
        description:
          "For patients on a personal wallet. Enrollment and consent decisions are signed from the patient's device and routed directly to the ledger they control.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Patient App / Wallet", sublabel: "Patient Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Consent Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Portable Record Consent", icon: Network, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a portability chain with patient-controlled consent, role-based access, and federated retrieval from scratch requires specialised engineers and long inter-provider integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Consent & Access Rules",
      ruleCount: 49,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects multi-provider interoperability benchmarks. Wiring each clinic and lab, building consent and role-based access, and shipping federated retrieval for an average consortium takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your consent and access rules into pre-audited WebAssembly binaries and provisions the portability ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "telemedicine-consultation-record-and-prescription-verification",
    icon: Wifi,
    eyebrow: "Telehealth Verification Layer",
    headline1: "Prove the consult.",
    headline2: "Trust the prescription.",
    heroDescription:
      "Anchor each telemedicine consultation together with the prescribing doctor's verified credential, so any pharmacy can confirm a prescription's validity instantly. The consultation record and the prescriber's licence resolve together, with no verification phone call to the platform.",
    heroCta: "Deploy Telehealth Layers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Give a telemedicine prescription the same instant trust as a paper slip from a known clinic.",
    mechanics: [
      { title: "Consultation Anchor", description: "The Provenance Notary anchors each telemedicine consultation, so a prescription is backed by proof the consultation actually took place." },
      { title: "Prescriber Credential", description: "The DID and VC Ledger binds the prescribing doctor's verified licence to the consultation, so a pharmacy confirms the prescriber is real and authorized." },
      { title: "Prescription Binding", description: "The Compliance Attestations module ties the prescription to its consultation and prescriber, so the three resolve together as one verifiable unit." },
      { title: "Instant Pharmacy Check", description: "A pharmacy verifies validity from the anchored record without a phone call to the telemedicine platform, so a legitimate prescription is filled without delay." },
      { title: "Single-Fill Control", description: "The prescription is marked fulfilled on dispensing, so a telemedicine slip cannot be filled twice at different pharmacies." },
      { title: "Regulatory Traceability", description: "Every consultation and prescription is traceable for the regulator, so telemedicine prescribing carries the same accountability as in-person care." },
    ],
    lifecycleTitle: "The Telehealth Lifecycle",
    lifecycleSubtitle:
      "Follow one telemedicine consultation from the visit through prescription issue to an instant pharmacy check.",
    lifecycleSteps: [
      {
        label: "Consultation Record",
        description:
          "A doctor completes a telemedicine consultation. The contract anchors the consultation with time, patient reference, and the doctor's verified identity.",
        icon: Wifi,
        logFilename: "cerulea_telehealth.log",
        logLines: [
          { text: "[SYS] Anchoring consultation CON_6621...", time: "12:15:03", tone: "default" },
          { text: "[CMD] recordConsult { doctor: \"DR_77\", patient: \"PT_512\" }", time: "12:15:03", tone: "primary" },
          { text: "[AUTH] Verifying doctor licence credential...", time: "12:15:04", tone: "secondary" },
          { text: "[OK] Consultation anchored at block 9711221.", time: "12:15:04", tone: "success" },
        ],
      },
      {
        label: "Prescription Issue",
        description:
          "The doctor issues a prescription bound to the consultation. The prescription, consultation, and prescriber credential are linked into one verifiable record.",
        icon: ScrollText,
        logFilename: "cerulea_telehealth.log",
        logLines: [
          { text: "[SYS] Issuing prescription for CON_6621...", time: "12:16:20", tone: "default" },
          { text: "[CMD] issueRx(CON_6621, drug: \"AMOX_500\", qty: 21)", time: "12:16:20", tone: "primary" },
          { text: "[SYS] Prescription bound to consultation and prescriber.", time: "12:16:21", tone: "default" },
          { text: "[OK] Verifiable prescription created.", time: "12:16:21", tone: "success" },
        ],
      },
      {
        label: "Pharmacy Verification",
        description:
          "A pharmacy scans the prescription and confirms the consultation and prescriber licence from the anchored record, with no call to the platform.",
        icon: ShieldCheck,
        logFilename: "cerulea_telehealth.log",
        logLines: [
          { text: "[SYS] Pharmacy verifying prescription RX_88...", time: "13:40:11", tone: "default" },
          { text: "[CMD] verifyRx(RX_88)", time: "13:40:11", tone: "primary" },
          { text: "[SYS] Consultation valid, prescriber licensed.", time: "13:40:12", tone: "default" },
          { text: "[OK] Prescription confirmed, no call needed.", time: "13:40:12", tone: "success" },
        ],
      },
      {
        label: "Single Fill",
        description:
          "The pharmacy dispenses and the prescription is marked fulfilled, so the same telemedicine slip cannot be filled again at another pharmacy.",
        icon: FileCheck,
        logFilename: "cerulea_telehealth.log",
        logLines: [
          { text: "[SYS] Recording dispense for RX_88...", time: "13:41:05", tone: "default" },
          { text: "[CMD] fulfill(RX_88, pharmacy: \"PH_31\")", time: "13:41:05", tone: "primary" },
          { text: "[SYS] Prescription marked fulfilled.", time: "13:41:06", tone: "default" },
          { text: "[OK] Duplicate fill blocked network-wide.", time: "13:41:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes telehealth verification into modular contracts. Each layer records, prescribes, verifies, and fulfills so a telemedicine prescription is trusted instantly.",
    layers: [
      {
        title: "Consultation Notary",
        subtitle: "The Visit Proof",
        icon: Wifi,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Visit Proof",
          description:
            "The foundational data layer. It anchors each consultation with its time, patient reference, and the doctor's verified identity, so a prescription rests on proof the visit actually occurred.",
          platformFunction: "Identity & Provenance",
        },
        codeSnippet:
          "contract ConsultationNotary {\n  struct Consult {\n    address doctor;\n    bytes32 patientRef;\n    uint256 at;\n  }\n\n  mapping(bytes32 => Consult) public consults;\n\n  function recordConsult(bytes32 id, bytes32 patientRef) external onlyLicensed {\n    consults[id] = Consult(msg.sender, patientRef, block.timestamp);\n  }\n}",
        simAction: "Simulate Consultation Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying doctor licence DR_77...", tone: "default" },
          { text: "Recording patient reference...", tone: "default" },
          { text: "Stamping consultation time...", tone: "default" },
          { text: "Writing visit proof to storage...", tone: "default" },
          { text: "[SUCCESS] Consultation anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Prescription Binder",
        subtitle: "The Linked Order",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Linked Order",
          description:
            "Binds each prescription to its consultation and prescriber credential. It turns three separate facts into one verifiable unit a pharmacy can trust without contacting the platform.",
          platformFunction: "Prescription & Attestation",
        },
        codeSnippet:
          "function issueRx(bytes32 consultId, bytes32 drug, uint16 qty) external returns (bytes32 rx) {\n    require(consults[consultId].doctor == msg.sender, \"Not prescriber\");\n    rx = keccak256(abi.encode(consultId, drug, block.timestamp));\n    prescriptions[rx] = Rx(consultId, drug, qty, false);\n    emit RxIssued(rx, consultId);\n}",
        simAction: "Simulate Prescription Issue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Doctor issues prescription for CON_6621...", tone: "default" },
          { text: "Confirming prescriber matches consultation...", tone: "default" },
          { text: "Binding drug and quantity...", tone: "default" },
          { text: "Linking prescription to visit...", tone: "default" },
          { text: "[SUCCESS] Verifiable prescription created.", tone: "success" },
        ],
      },
      {
        title: "Verification Gate",
        subtitle: "The Pharmacy Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pharmacy Check",
          description:
            "Confirms the consultation is valid and the prescriber is licensed directly from the anchored record. It lets a pharmacy trust a telemedicine prescription instantly, with no verification phone call.",
          platformFunction: "Verification",
        },
        codeSnippet:
          "function verifyRx(bytes32 rx) external view returns (bool ok) {\n    Rx memory r = prescriptions[rx];\n    Consult memory c = consults[r.consultId];\n    ok = !r.fulfilled && isLicensed(c.doctor);\n}",
        simAction: "Simulate Prescription Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Pharmacy scans prescription RX_88...", tone: "default" },
          { text: "Resolving linked consultation...", tone: "default" },
          { text: "Confirming prescriber is licensed...", tone: "default" },
          { text: "Checking not already fulfilled...", tone: "default" },
          { text: "[SUCCESS] Prescription confirmed valid.", tone: "success" },
        ],
      },
      {
        title: "Fulfilment Lock",
        subtitle: "The Single Fill",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single Fill",
          description:
            "Marks a prescription fulfilled on dispensing so it cannot be filled again elsewhere. It closes the duplicate-fill gap that undermines trust in remote prescriptions.",
          platformFunction: "Dispensing Control",
        },
        codeSnippet:
          "function fulfill(bytes32 rx) external onlyPharmacy {\n    require(!prescriptions[rx].fulfilled, \"Already filled\");\n    prescriptions[rx].fulfilled = true;\n    emit Fulfilled(rx, msg.sender);\n}",
        simAction: "Simulate Single Fill",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Pharmacy PH_31 dispenses RX_88...", tone: "default" },
          { text: "Confirming prescription unfulfilled...", tone: "default" },
          { text: "Marking prescription fulfilled...", tone: "default" },
          { text: "Propagating status network-wide...", tone: "default" },
          { text: "[SUCCESS] Duplicate fill blocked.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable telehealth prescribing is a horizontal capability. Here is how different actors in remote care put it to work.",
    sectors: [
      { icon: Wifi, title: "Telemedicine Platforms", description: "Anchor each consultation and prescription so their prescriptions are accepted by pharmacies without verification calls, removing the friction that stalls remote care.", assetTypes: ["Consultation Records", "Prescription Links", "Credential Bindings"] },
      { icon: Building2, title: "Pharmacies", description: "Confirm a telemedicine prescription's consultation and prescriber licence instantly from the anchored record, filling legitimate prescriptions without a call and rejecting forgeries.", assetTypes: ["Verification Checks", "Fulfilment Records", "Rejection Logs"] },
      { icon: Landmark, title: "Medical Regulators", description: "Trace remote consultations and prescriptions to licensed prescribers, giving telemedicine the same accountability as in-person prescribing without manual audits.", assetTypes: ["Audit Trails", "Prescribing Records", "Consultation Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a telemedicine platform or capturing verification from pharmacy systems, Cerulea routes both into one telehealth record.",
    tracks: [
      {
        title: "Track A: Telehealth Platform Bridging",
        description:
          "For telemedicine providers on existing platforms. Consultations and prescriptions are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Telehealth Platform", sublabel: "Consultation System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Binding", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Telehealth Verification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Pharmacy Verification",
        description:
          "For pharmacies verifying remote prescriptions. A signed client confirms validity against the anchored record and marks fulfilment directly on the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Pharmacy Client", sublabel: "Dispensing Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Verification Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Prescription Verification Record", icon: Wifi, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a telehealth verification layer with consultation anchoring, credential binding, and instant pharmacy checks from scratch requires specialised engineers and long platform integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Consultation & Prescription Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects telehealth integration benchmarks. Wiring the consultation platform, building consultation and prescriber binding, and shipping instant pharmacy verification for an average deployment takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your consultation and prescription rules into pre-audited WebAssembly binaries and provisions the verification ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "chronic-disease-management-program-adherence-tracking",
    icon: Activity,
    eyebrow: "Care Adherence Ledger",
    headline1: "See the whole plan.",
    headline2: "Across every provider.",
    heroDescription:
      "Consolidate a chronic patient's medication refills and check-up attendance across all their providers and pharmacies into one adherence record. Program coordinators get a complete picture of care-plan adherence without relying on the patient to self-report.",
    heroCta: "Deploy Adherence Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fragmented visits and refills into one verifiable view of care-plan adherence.",
    mechanics: [
      { title: "Unified Patient Identity", description: "The Civil Registry anchors one verified identity for the patient, so refills and visits from different providers link to the same person automatically." },
      { title: "Refill Attestation", description: "The Compliance Attestations module records each medication refill from participating pharmacies, so adherence rests on dispensing facts rather than patient recall." },
      { title: "Check-Up Tracking", description: "Attended check-ups are anchored across providers, so a missed review surfaces in the adherence record instead of going unnoticed." },
      { title: "Gap Notifications", description: "The Notifications module alerts coordinators when a refill or check-up is overdue, so a lapse in the care plan prompts outreach early." },
      { title: "Cross-Provider View", description: "Data from every clinic and pharmacy in the program feeds one record, ending the blind spots created when a patient sees multiple providers." },
      { title: "Program Reporting", description: "Coordinators query adherence for an individual or cohort, replacing self-reported diaries with a verifiable, provider-sourced picture." },
    ],
    lifecycleTitle: "The Adherence Lifecycle",
    lifecycleSubtitle:
      "Follow one chronic patient from enrollment through refills and check-ups to a coordinator's adherence review.",
    lifecycleSteps: [
      {
        label: "Program Enrollment",
        description:
          "A chronic patient enrolls with a verified identity and care plan. The contract anchors the plan's expected refill and check-up cadence.",
        icon: Fingerprint,
        logFilename: "cerulea_adherence.log",
        logLines: [
          { text: "[SYS] Enrolling patient into DM program...", time: "09:20:14", tone: "default" },
          { text: "[CMD] enroll { plan: \"DIABETES_T2\", refillDays: 30 }", time: "09:20:14", tone: "primary" },
          { text: "[AUTH] Binding identity via civil registry...", time: "09:20:15", tone: "secondary" },
          { text: "[OK] Patient enrolled at block 9820140.", time: "09:20:15", tone: "success" },
        ],
      },
      {
        label: "Refill Capture",
        description:
          "A pharmacy dispenses a refill. The event is anchored to the patient's plan, updating the adherence record without the patient reporting anything.",
        icon: Building2,
        logFilename: "cerulea_adherence.log",
        logLines: [
          { text: "[SYS] Recording refill for patient CIV_771...", time: "11:05:30", tone: "default" },
          { text: "[CMD] recordRefill(plan: \"DIABETES_T2\", drug: \"METFORMIN\")", time: "11:05:30", tone: "primary" },
          { text: "[SYS] Refill on schedule, adherence updated.", time: "11:05:31", tone: "default" },
          { text: "[OK] Dispensing event anchored.", time: "11:05:31", tone: "success" },
        ],
      },
      {
        label: "Gap Alert",
        description:
          "A scheduled check-up is missed. The contract flags the gap and alerts the program coordinator so outreach can begin before the lapse widens.",
        icon: Zap,
        logFilename: "cerulea_adherence.log",
        logLines: [
          { text: "[SYS] Evaluating care-plan cadence...", time: "07:00:00", tone: "default" },
          { text: "[CMD] checkGaps(CIV_771)", time: "07:00:00", tone: "primary" },
          { text: "[SYS] Quarterly review 9 days overdue.", time: "07:00:01", tone: "error" },
          { text: "[OK] Coordinator alerted for outreach.", time: "07:00:01", tone: "success" },
        ],
      },
      {
        label: "Adherence Review",
        description:
          "A coordinator reviews the patient's adherence. One query returns refills and check-ups across every provider, with no reliance on self-report.",
        icon: Search,
        logFilename: "cerulea_adherence.log",
        logLines: [
          { text: "[SYS] Coordinator query for CIV_771...", time: "15:12:40", tone: "default" },
          { text: "[CMD] reviewAdherence(CIV_771, window: \"180d\")", time: "15:12:40", tone: "primary" },
          { text: "[SYS] 6 refills on time, 1 review overdue.", time: "15:12:41", tone: "default" },
          { text: "[OK] Complete adherence picture returned.", time: "15:12:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes adherence tracking into modular contracts. Each layer enrolls, captures, alerts, and reviews so a care plan is measured from provider facts, not self-report.",
    layers: [
      {
        title: "Enrollment Registry",
        subtitle: "The Care Plan Anchor",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Care Plan Anchor",
          description:
            "The foundational data layer. It binds a verified patient identity to a care plan and its expected cadence, so refills and visits from any provider attach to one adherence record.",
          platformFunction: "Identity & Enrollment",
        },
        codeSnippet:
          "contract EnrollmentRegistry {\n  struct Plan {\n    bytes8 condition;\n    uint16 refillDays;\n    uint16 reviewDays;\n    uint256 enrolledAt;\n  }\n\n  mapping(bytes32 => Plan) public plans;\n\n  function enroll(bytes32 patient, bytes8 condition, uint16 refillDays, uint16 reviewDays) external {\n    plans[patient] = Plan(condition, refillDays, reviewDays, block.timestamp);\n  }\n}",
        simAction: "Simulate Program Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying identity via civil registry...", tone: "default" },
          { text: "Recording diabetes care plan...", tone: "default" },
          { text: "Setting refill and review cadence...", tone: "default" },
          { text: "Writing plan to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Patient enrolled on-chain.", tone: "success" },
        ],
      },
      {
        title: "Event Recorder",
        subtitle: "The Provider Feed",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Provider Feed",
          description:
            "Anchors each refill and check-up from participating providers to the patient's plan. It builds the adherence record from dispensing and attendance facts rather than patient recall.",
          platformFunction: "Attestation & Capture",
        },
        codeSnippet:
          "function recordRefill(bytes32 patient, bytes32 drug) external onlyPharmacy {\n    events[patient].push(CareEvent(REFILL, drug, block.timestamp));\n    lastRefill[patient] = block.timestamp;\n    emit RefillRecorded(patient, drug);\n}",
        simAction: "Simulate Refill Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Pharmacy dispenses metformin refill...", tone: "default" },
          { text: "Attaching event to diabetes plan...", tone: "default" },
          { text: "Updating last-refill timestamp...", tone: "default" },
          { text: "Recording adherence event...", tone: "default" },
          { text: "[SUCCESS] Refill anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Gap Watcher",
        subtitle: "The Overdue Alert",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Overdue Alert",
          description:
            "Compares recorded events against the plan's cadence and alerts coordinators when a refill or review is overdue. It turns a silent lapse into an early outreach trigger.",
          platformFunction: "Notifications",
        },
        codeSnippet:
          "function checkGaps(bytes32 patient) external {\n    Plan memory p = plans[patient];\n    if (block.timestamp - lastReview[patient] > p.reviewDays * 1 days) {\n      emit ReviewOverdue(patient, lastReview[patient]);\n    }\n}",
        simAction: "Simulate Gap Alert",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading care-plan cadence for CIV_771...", tone: "default" },
          { text: "Comparing last review against schedule...", tone: "default" },
          { text: "Review is 9 days overdue...", tone: "error" },
          { text: "Emitting alert to coordinator...", tone: "default" },
          { text: "[SUCCESS] Outreach trigger raised.", tone: "success" },
        ],
      },
      {
        title: "Review Engine",
        subtitle: "The Adherence Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Adherence Window",
          description:
            "A read-only gateway that returns refills and check-ups across every provider for a window. It gives coordinators a complete, verifiable adherence picture without relying on patient diaries.",
          platformFunction: "Reporting & Review",
        },
        codeSnippet:
          "function reviewAdherence(bytes32 patient, uint256 fromTs) external view returns (CareEvent[] memory) {\n    return filterEvents(patient, fromTs);\n}",
        simAction: "Simulate Adherence Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Coordinator opens patient CIV_771...", tone: "default" },
          { text: "Gathering refills across providers...", tone: "default" },
          { text: "Adding check-up attendance...", tone: "default" },
          { text: "Computing adherence over 180 days...", tone: "default" },
          { text: "[SUCCESS] Complete picture returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Provider-sourced adherence tracking is a horizontal capability. Here is how different actors in chronic care put it to work.",
    sectors: [
      { icon: Activity, title: "Disease Management Programs", description: "Measure care-plan adherence from real refills and visits across every provider, targeting outreach at genuine gaps instead of chasing unreliable self-reported diaries.", assetTypes: ["Adherence Records", "Gap Alerts", "Cohort Reports"] },
      { icon: Building2, title: "Pharmacies & Clinics", description: "Contribute refill and check-up events to a shared record, so a patient's adherence is visible to the program without each site maintaining a separate view.", assetTypes: ["Refill Events", "Check-Up Records", "Care Attestations"] },
      { icon: Wallet, title: "Payers & Insurers", description: "Base chronic-care incentives and interventions on verified adherence data, reducing avoidable complications and disputes over whether a care plan was followed.", assetTypes: ["Adherence Proofs", "Outcome Records", "Program Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging clinic and pharmacy systems or capturing check-ins from a patient app, Cerulea routes both into one adherence record.",
    tracks: [
      {
        title: "Track A: Provider System Bridging",
        description:
          "For clinics and pharmacies on legacy systems. Refill and check-up events are translated into signed on-chain adherence records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Clinic / Pharmacy System", sublabel: "Provider Platforms", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Care Adherence Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Patient Check-In",
        description:
          "For patients on a program app. Self check-ins and reminders are signed from the patient's device and routed to the ledger alongside provider events.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Patient App / Wallet", sublabel: "Program Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Adherence Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Patient Adherence Record", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an adherence ledger with a unified identity, cross-provider event capture, and gap alerting from scratch requires specialised engineers and long provider integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Adherence & Alert Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects chronic-care coordination integration benchmarks. Wiring each clinic and pharmacy, building cross-provider event capture, and shipping gap alerting for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your adherence and alert rules into pre-audited WebAssembly binaries and provisions the adherence ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "vaccination-records-for-cross-border-verification",
    icon: Globe,
    eyebrow: "Cross-Border Credential System",
    headline1: "Issue in private.",
    headline2: "Verify at the border.",
    heroDescription:
      "Run a hybrid vaccination credential system with a private government issuance layer and a public verifiable presentation for border use. A traveler's status is confirmed at a crossing in under five seconds, with no paper forgery risk and no sensitive health data exposed.",
    heroCta: "Deploy Credential Systems",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Split issuance and verification so a border check is instant, private, and forgery-proof.",
    mechanics: [
      { title: "Government Issuance", description: "The Civil Registry and DID and VC Ledger issue a vaccination credential from the health authority, so a traveler's status is signed by a trusted issuer rather than printed on a forgeable card." },
      { title: "Verifiable Presentation", description: "The Provenance Notary underpins a public verifiable presentation, so a border officer confirms authenticity cryptographically without access to the issuing database." },
      { title: "Selective Disclosure", description: "A traveler proves vaccination status without revealing unrelated health details, so a border check exposes only what the crossing requires." },
      { title: "Cross-Country Interoperability", description: "Credentials verify across borders on a common presentation format, ending the incompatibility between national digital systems." },
      { title: "Forgery Resistance", description: "A presentation with no valid issuer signature fails instantly, so counterfeit cards and screenshots cannot pass a crossing." },
      { title: "Offline-Friendly Check", description: "Verification relies on cryptographic proofs rather than a live query to the issuer, so a border check works even with limited connectivity." },
    ],
    lifecycleTitle: "The Credential Lifecycle",
    lifecycleSubtitle:
      "Follow one traveler's vaccination credential from government issuance through selective disclosure to a border verification.",
    lifecycleSteps: [
      {
        label: "Credential Issuance",
        description:
          "A health authority issues a vaccination credential to a citizen. The private issuance layer signs the credential to the citizen's verified identity.",
        icon: Landmark,
        logFilename: "cerulea_border_cred.log",
        logLines: [
          { text: "[SYS] Issuing vaccination credential for CIT_812...", time: "10:30:05", tone: "default" },
          { text: "[CMD] issueVC { vaccine: \"YELLOW_FEVER\", doses: 1 }", time: "10:30:05", tone: "primary" },
          { text: "[AUTH] Signing credential with authority key...", time: "10:30:06", tone: "secondary" },
          { text: "[OK] Credential issued at block 9901205.", time: "10:30:06", tone: "success" },
        ],
      },
      {
        label: "Wallet Presentation",
        description:
          "The traveler prepares a verifiable presentation in their wallet, disclosing only vaccination status and hiding all other credential contents.",
        icon: Fingerprint,
        logFilename: "cerulea_border_cred.log",
        logLines: [
          { text: "[SYS] Building presentation for CIT_812...", time: "18:44:20", tone: "default" },
          { text: "[CMD] presentSelective(disclose: [\"VACCINE\", \"DOSES\"])", time: "18:44:20", tone: "primary" },
          { text: "[SYS] Unrelated fields withheld from proof.", time: "18:44:21", tone: "default" },
          { text: "[OK] Verifiable presentation ready.", time: "18:44:21", tone: "success" },
        ],
      },
      {
        label: "Border Verification",
        description:
          "A border officer scans the presentation. The signature verifies against the issuer in seconds, with no access to the issuing database and no paper.",
        icon: Globe,
        logFilename: "cerulea_border_cred.log",
        logLines: [
          { text: "[SYS] Verifying presentation at crossing...", time: "07:12:33", tone: "default" },
          { text: "[CMD] verifyPresentation(proof: 0x77a..e2)", time: "07:12:33", tone: "primary" },
          { text: "[SYS] Issuer signature valid, status confirmed.", time: "07:12:35", tone: "default" },
          { text: "[OK] Traveler cleared in under 5 seconds.", time: "07:12:35", tone: "success" },
        ],
      },
      {
        label: "Forgery Rejection",
        description:
          "A forged card is presented at another lane. With no valid issuer signature, the presentation fails verification and the traveler is refused.",
        icon: Shield,
        logFilename: "cerulea_border_cred.log",
        logLines: [
          { text: "[SYS] Verifying suspect presentation...", time: "07:15:02", tone: "default" },
          { text: "[CMD] verifyPresentation(proof: 0x00..00)", time: "07:15:02", tone: "primary" },
          { text: "[SYS] No valid issuer signature found.", time: "07:15:03", tone: "error" },
          { text: "[OK] Forgery rejected at the border.", time: "07:15:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes cross-border credentials into modular contracts. Each layer issues, presents, verifies, and rejects so a border check is instant, private, and forgery-proof.",
    layers: [
      {
        title: "Issuance Authority",
        subtitle: "The Trusted Issuer",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trusted Issuer",
          description:
            "The foundational data layer. It signs a vaccination credential from the health authority to a citizen's verified identity, so status carries a trusted issuer signature rather than a forgeable printout.",
          platformFunction: "Identity & Issuance",
        },
        codeSnippet:
          "contract IssuanceAuthority {\n  struct Credential {\n    bytes32 holder;\n    bytes8 vaccine;\n    uint8 doses;\n    bytes issuerSig;\n  }\n\n  mapping(bytes32 => Credential) private credentials;\n\n  function issue(bytes32 id, bytes32 holder, bytes8 vaccine, uint8 doses) external onlyAuthority {\n    credentials[id] = Credential(holder, vaccine, doses, sign(id));\n  }\n}",
        simAction: "Simulate Credential Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Health authority prepares credential...", tone: "default" },
          { text: "Binding to citizen identity CIT_812...", tone: "default" },
          { text: "Recording vaccine and dose count...", tone: "default" },
          { text: "Signing with authority key...", tone: "default" },
          { text: "[SUCCESS] Credential issued privately.", tone: "success" },
        ],
      },
      {
        title: "Presentation Builder",
        subtitle: "The Selective Proof",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Selective Proof",
          description:
            "Builds a verifiable presentation that discloses only the fields a border requires. It lets a traveler prove vaccination status while withholding every unrelated health detail.",
          platformFunction: "Selective Disclosure",
        },
        codeSnippet:
          "function presentSelective(bytes32 credId, bytes8[] calldata fields) external view returns (bytes memory proof) {\n    require(holderOf(credId) == msg.sender, \"Not holder\");\n    proof = buildProof(credId, fields);\n}",
        simAction: "Simulate Presentation Build",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Traveler opens wallet credential...", tone: "default" },
          { text: "Selecting vaccine and dose fields...", tone: "default" },
          { text: "Withholding unrelated details...", tone: "default" },
          { text: "Generating verifiable proof...", tone: "default" },
          { text: "[SUCCESS] Presentation ready for border.", tone: "success" },
        ],
      },
      {
        title: "Border Verifier",
        subtitle: "The Instant Check",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Check",
          description:
            "Verifies a presentation's issuer signature cryptographically without querying the issuing database. It confirms authenticity in seconds and works even with limited border connectivity.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyPresentation(bytes calldata proof) external view returns (bool valid) {\n    (bytes8 vaccine, bytes memory sig) = decode(proof);\n    valid = verifyIssuer(sig, vaccine);\n}",
        simAction: "Simulate Border Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Officer scans traveler presentation...", tone: "default" },
          { text: "Decoding disclosed fields...", tone: "default" },
          { text: "Verifying issuer signature...", tone: "default" },
          { text: "Signature valid, status confirmed...", tone: "default" },
          { text: "[SUCCESS] Traveler cleared instantly.", tone: "success" },
        ],
      },
      {
        title: "Forgery Filter",
        subtitle: "The Rejection Gate",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rejection Gate",
          description:
            "Fails any presentation without a valid issuer signature. It ensures counterfeit cards and screenshots cannot pass a crossing, replacing visual inspection of paper with cryptographic certainty.",
          platformFunction: "Fraud Prevention",
        },
        codeSnippet:
          "function guard(bytes calldata proof) external view returns (bool) {\n    require(verifyPresentation(proof), \"Invalid credential\");\n    return true;\n}",
        simAction: "Simulate Forgery Rejection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Suspect presentation submitted...", tone: "default" },
          { text: "Checking for issuer signature...", tone: "default" },
          { text: "No valid signature found...", tone: "error" },
          { text: "Rejecting presentation...", tone: "default" },
          { text: "[SUCCESS] Forgery blocked at border.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Hybrid vaccination credentials are a horizontal capability. Here is how different actors in cross-border health put them to work.",
    sectors: [
      { icon: Landmark, title: "Health Authorities", description: "Issue tamper-proof vaccination credentials from a private layer, protecting citizen health data while enabling instant verification abroad without sharing the issuing database.", assetTypes: ["Issued Credentials", "Issuer Signatures", "Revocation Records"] },
      { icon: Plane, title: "Border & Immigration", description: "Verify a traveler's vaccination status cryptographically in seconds, rejecting forgeries with certainty and clearing legitimate travelers without paper checks.", assetTypes: ["Verification Checks", "Clearance Records", "Rejection Logs"] },
      { icon: Users, title: "Travelers", description: "Present proof of vaccination from a personal wallet while disclosing nothing else, replacing forgeable paper cards with a private, portable credential.", assetTypes: ["Wallet Credentials", "Selective Presentations", "Travel Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a national immunization registry or enabling public verification at a crossing, Cerulea routes both into one credential system.",
    tracks: [
      {
        title: "Track A: Government Issuance Bridging",
        description:
          "For health authorities on national immunization registries. Records are issued as signed credentials on the private layer through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Immunization Registry", sublabel: "National Health System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Issuance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Public Border Verification",
        description:
          "For border officers and travelers. A verifiable presentation is checked against the public layer directly from a wallet, without querying the issuer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Traveler Wallet", sublabel: "Credential Holder", icon: Fingerprint, accent: false },
          { label: "Public Verification Layer", sublabel: "Border Presentation", icon: Globe, accent: true },
          { label: "Cerulea Public L1", sublabel: "Verifiable Credential Anchor", icon: Plane, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a hybrid credential system with private government issuance, selective disclosure, and public border verification from scratch requires specialised cryptography engineers and long cross-border integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Issuance & Verification Rules",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects verifiable-credential infrastructure benchmarks. Building a private issuance layer, selective-disclosure presentations, and interoperable public verification for an average deployment takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your issuance and verification rules into pre-audited WebAssembly binaries and provisions the credential system instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "disease-outbreak-surveillance-data-sharing-across-states",
    icon: Radio,
    eyebrow: "Epidemic Surveillance Feed",
    headline1: "Share cases in real time.",
    headline2: "Catch outbreaks early.",
    heroDescription:
      "Give states one shared, real-time disease surveillance feed into the national health center. Outbreak patterns that span state boundaries are detected and acted on far faster than when each state reports independently with delays.",
    heroCta: "Deploy Surveillance Feeds",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn delayed, independent state reports into one live, cross-boundary surveillance picture.",
    mechanics: [
      { title: "Real-Time Case Feed", description: "The External Data Oracles module pulls case data from each state's surveillance system, so the national picture reflects current reporting rather than a delayed batch." },
      { title: "Cross-State Pattern Alerts", description: "The Notifications module raises an alert when case clusters span state boundaries, so a multi-state outbreak is flagged before it is detected independently." },
      { title: "Immutable Report Log", description: "The Audit Logs module seals each state's submitted data, so the surveillance record is tamper-evident and the reporting timeline is provable." },
      { title: "Standardized Reporting", description: "States report against a common case format, so data from different systems aggregates cleanly instead of arriving in incompatible schemas." },
      { title: "Privacy-Preserving Aggregation", description: "Surveillance operates on aggregated case counts rather than identifiable patient data, keeping the feed within health-privacy limits." },
      { title: "National Query", description: "The national center queries the live feed across all states, replacing the reconciliation of separate reports with one authoritative view." },
    ],
    lifecycleTitle: "The Surveillance Lifecycle",
    lifecycleSubtitle:
      "Follow one case cluster from state reporting through cross-boundary detection to a coordinated national response.",
    lifecycleSteps: [
      {
        label: "State Reporting",
        description:
          "A state publishes new case counts for a notifiable disease. The oracle writes the report to the shared feed as the state's current contribution.",
        icon: Landmark,
        logFilename: "cerulea_surveillance.log",
        logLines: [
          { text: "[SYS] Ingesting case report from STATE_MH...", time: "08:00:14", tone: "default" },
          { text: "[CMD] reportCases { disease: \"DENGUE\", newCases: 47 }", time: "08:00:14", tone: "primary" },
          { text: "[AUTH] Verifying state node signature...", time: "08:00:15", tone: "secondary" },
          { text: "[OK] Report anchored at block 10012140.", time: "08:00:15", tone: "success" },
        ],
      },
      {
        label: "Cross-State Detection",
        description:
          "The feed aggregates reports from neighboring states. A cluster spanning a boundary crosses the alert threshold and an outbreak signal is raised.",
        icon: Radio,
        logFilename: "cerulea_surveillance.log",
        logLines: [
          { text: "[SYS] Aggregating dengue reports across states...", time: "08:05:22", tone: "default" },
          { text: "[CMD] evaluateClusters(disease: \"DENGUE\")", time: "08:05:22", tone: "primary" },
          { text: "[SYS] Cross-boundary cluster exceeds threshold.", time: "08:05:23", tone: "error" },
          { text: "[OK] Outbreak signal raised nationally.", time: "08:05:23", tone: "success" },
        ],
      },
      {
        label: "National Alert",
        description:
          "The national center and affected states are alerted. Coordinated response begins on shared data rather than each state acting on its own partial view.",
        icon: Zap,
        logFilename: "cerulea_surveillance.log",
        logLines: [
          { text: "[SYS] Dispatching outbreak alert...", time: "08:05:40", tone: "default" },
          { text: "[CMD] notify([\"NCDC\", \"STATE_MH\", \"STATE_GJ\"])", time: "08:05:40", tone: "primary" },
          { text: "[SYS] Shared cluster data attached to alert.", time: "08:05:41", tone: "default" },
          { text: "[OK] Coordinated response initiated.", time: "08:05:41", tone: "success" },
        ],
      },
      {
        label: "Timeline Audit",
        description:
          "After the response, the national center audits the reporting timeline. The sealed log proves when each state reported, supporting review and accountability.",
        icon: Search,
        logFilename: "cerulea_surveillance.log",
        logLines: [
          { text: "[SYS] Auditing reporting timeline for DENGUE...", time: "16:20:08", tone: "default" },
          { text: "[CMD] auditTimeline(disease: \"DENGUE\", window: \"14d\")", time: "16:20:08", tone: "primary" },
          { text: "[SYS] Reporting latency per state returned.", time: "16:20:09", tone: "default" },
          { text: "[OK] Tamper-evident timeline verified.", time: "16:20:09", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes disease surveillance into modular contracts. Each layer reports, detects, alerts, and audits so cross-boundary outbreaks surface from one shared feed.",
    layers: [
      {
        title: "Case Oracle",
        subtitle: "The State Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The State Feed",
          description:
            "The foundational data layer. It ingests each state's case counts in a common format and records them as the state's current contribution, replacing delayed independent reports with a live feed.",
          platformFunction: "Data Ingestion",
        },
        codeSnippet:
          "contract CaseOracle {\n  struct Report {\n    bytes8 disease;\n    uint32 newCases;\n    uint256 reportedAt;\n  }\n\n  mapping(bytes32 => Report) public reports;\n\n  function reportCases(bytes32 state, bytes8 disease, uint32 newCases) external onlyState {\n    reports[keccak256(abi.encode(state, disease))] = Report(disease, newCases, block.timestamp);\n  }\n}",
        simAction: "Simulate State Reporting",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading state node signature for MH...", tone: "default" },
          { text: "Recording 47 new dengue cases...", tone: "default" },
          { text: "Stamping report timestamp...", tone: "default" },
          { text: "Writing report to shared feed...", tone: "default" },
          { text: "[SUCCESS] State report anchored.", tone: "success" },
        ],
      },
      {
        title: "Cluster Detector",
        subtitle: "The Boundary Watch",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Boundary Watch",
          description:
            "Aggregates reports across neighboring states and detects clusters that span boundaries. It surfaces a multi-state outbreak before any single state would identify it alone.",
          platformFunction: "Detection",
        },
        codeSnippet:
          "function evaluateClusters(bytes8 disease) external {\n    uint256 total = sumAdjacent(disease);\n    if (total > clusterThreshold[disease]) {\n      emit ClusterDetected(disease, total, block.timestamp);\n    }\n}",
        simAction: "Simulate Cluster Detection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Summing dengue across adjacent states...", tone: "default" },
          { text: "Combined count exceeds threshold...", tone: "error" },
          { text: "Confirming cross-boundary spread...", tone: "default" },
          { text: "Emitting cluster signal...", tone: "default" },
          { text: "[SUCCESS] Cross-state cluster detected.", tone: "success" },
        ],
      },
      {
        title: "Alert Dispatcher",
        subtitle: "The Response Trigger",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Response Trigger",
          description:
            "Notifies the national center and affected states with the shared cluster data attached. It launches a coordinated response on one dataset rather than each state's partial view.",
          platformFunction: "Notifications",
        },
        codeSnippet:
          "function notify(bytes32[] calldata recipients, bytes8 disease) external onlyDetector {\n    for (uint256 i = 0; i < recipients.length; i++) {\n      emit OutbreakAlert(recipients[i], disease, block.timestamp);\n    }\n}",
        simAction: "Simulate National Alert",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing outbreak alert...", tone: "default" },
          { text: "Attaching shared cluster data...", tone: "default" },
          { text: "Notifying national center and states...", tone: "default" },
          { text: "Confirming delivery...", tone: "default" },
          { text: "[SUCCESS] Coordinated response initiated.", tone: "success" },
        ],
      },
      {
        title: "Timeline Auditor",
        subtitle: "The Accountability Window",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accountability Window",
          description:
            "A read-only gateway over the sealed reporting log. It proves when each state reported and supports post-outbreak review, replacing disputed recollection with a tamper-evident timeline.",
          platformFunction: "Audit & Logging",
        },
        codeSnippet:
          "function auditTimeline(bytes8 disease, uint256 fromTs) external view returns (Report[] memory) {\n    return timelineFor(disease, fromTs);\n}",
        simAction: "Simulate Timeline Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "National center opens dengue timeline...", tone: "default" },
          { text: "Gathering sealed state reports...", tone: "default" },
          { text: "Computing reporting latency...", tone: "default" },
          { text: "Returning tamper-evident record...", tone: "default" },
          { text: "[SUCCESS] Timeline verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared disease surveillance is a horizontal capability. Here is how different actors in public health put it to work.",
    sectors: [
      { icon: Landmark, title: "State Health Departments", description: "Report notifiable cases into one shared feed and see neighboring activity, so a state acts on a regional picture instead of its own boundary-limited view.", assetTypes: ["Case Reports", "Cluster Signals", "Report Logs"] },
      { icon: Globe, title: "National Health Centers", description: "Detect cross-boundary outbreaks from a live feed and coordinate a response on shared data, replacing the reconciliation of delayed independent reports.", assetTypes: ["Outbreak Alerts", "Aggregated Feeds", "Response Records"] },
      { icon: FlaskConical, title: "Research & Modeling Bodies", description: "Access aggregated, tamper-evident case data with a provable reporting timeline, improving epidemic models without handling identifiable patient information.", assetTypes: ["Aggregated Datasets", "Timeline Proofs", "Surveillance Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging state surveillance systems or capturing reports from field health units, Cerulea routes both into one national feed.",
    tracks: [
      {
        title: "Track A: State System Bridging",
        description:
          "For states on legacy surveillance platforms. Case reports are translated into signed on-chain entries on the shared feed through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "State Surveillance System", sublabel: "Health Department Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Report Hashing & Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Surveillance Feed Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Unit Capture",
        description:
          "For field health units on a signed app. Case reports are submitted from the field directly to the shared feed alongside state system data.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field Unit App", sublabel: "Health Worker Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Surveillance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Case Feed", icon: Radio, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-state surveillance feed with real-time ingestion, cluster detection, and a tamper-evident timeline from scratch requires specialised engineers and long inter-agency integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Reporting & Detection Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects public-health data integration benchmarks. Wiring each state's surveillance system, building cross-boundary cluster detection, and shipping a tamper-evident audit timeline for an average deployment takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your reporting and detection rules into pre-audited WebAssembly binaries and provisions the surveillance feed instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "health-insurance-scheme-ayushman-bharat-beneficiary-verification",
    icon: ShieldCheck,
    eyebrow: "Beneficiary Eligibility Layer",
    headline1: "Verify eligibility.",
    headline2: "Admit without delay.",
    heroDescription:
      "Let any empaneled hospital instantly verify a patient's beneficiary status and coverage against a verified scheme registry before cashless treatment. Eligible patients are admitted faster, and coverage checks no longer stall at the front desk.",
    heroCta: "Deploy Eligibility Layers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow eligibility check across hundreds of millions of beneficiaries into an instant lookup.",
    mechanics: [
      { title: "Verified Beneficiary Registry", description: "The Civil Registry anchors each beneficiary's identity and scheme enrollment, so a hospital checks a verified record rather than a cached or outdated list." },
      { title: "Coverage Attestation", description: "The Compliance Attestations module records the coverage a beneficiary holds, so a hospital sees entitlements before starting cashless treatment." },
      { title: "Credentialed Access", description: "The DID and VC Ledger binds empaneled hospitals to verified credentials, so only authorized providers can query beneficiary status." },
      { title: "Instant Front-Desk Check", description: "Eligibility resolves in seconds at admission, so an eligible patient is not delayed by manual verification against a national database." },
      { title: "Fraud Resistance", description: "A claim against a non-enrolled or already-exhausted beneficiary fails the check, reducing leakage from ineligible or duplicate claims." },
      { title: "Scheme Oversight", description: "The scheme authority sees verification and utilization across empaneled hospitals, replacing periodic reconciliation with a live view." },
    ],
    lifecycleTitle: "The Eligibility Lifecycle",
    lifecycleSubtitle:
      "Follow one beneficiary from admission through an instant eligibility check to authorized cashless treatment.",
    lifecycleSteps: [
      {
        label: "Patient Admission",
        description:
          "A patient arrives at an empaneled hospital for treatment. The front desk initiates an eligibility check using the patient's scheme identity.",
        icon: Hospital,
        logFilename: "cerulea_beneficiary.log",
        logLines: [
          { text: "[SYS] Eligibility request from Hospital_0x18...", time: "10:14:22", tone: "default" },
          { text: "[CMD] checkEligibility { beneficiary: \"AB_55120\" }", time: "10:14:22", tone: "primary" },
          { text: "[AUTH] Verifying empaneled hospital credential...", time: "10:14:23", tone: "secondary" },
          { text: "[OK] Query authorized from empaneled node.", time: "10:14:23", tone: "success" },
        ],
      },
      {
        label: "Registry Verification",
        description:
          "The contract resolves the beneficiary against the verified scheme registry, confirming enrollment and returning the coverage on record.",
        icon: ShieldCheck,
        logFilename: "cerulea_beneficiary.log",
        logLines: [
          { text: "[SYS] Resolving beneficiary AB_55120...", time: "10:14:24", tone: "default" },
          { text: "[CMD] resolveCoverage(AB_55120)", time: "10:14:24", tone: "primary" },
          { text: "[SYS] Enrolled, coverage balance available.", time: "10:14:25", tone: "default" },
          { text: "[OK] Eligibility confirmed in under 5 seconds.", time: "10:14:25", tone: "success" },
        ],
      },
      {
        label: "Treatment Authorization",
        description:
          "With eligibility confirmed, cashless treatment is authorized. The coverage reservation is recorded against the beneficiary for this admission.",
        icon: FileCheck,
        logFilename: "cerulea_beneficiary.log",
        logLines: [
          { text: "[SYS] Authorizing cashless treatment...", time: "10:16:03", tone: "default" },
          { text: "[CMD] reserveCoverage(AB_55120, amount: 45000)", time: "10:16:03", tone: "primary" },
          { text: "[SYS] Reservation recorded against coverage.", time: "10:16:04", tone: "default" },
          { text: "[OK] Admission approved for beneficiary.", time: "10:16:04", tone: "success" },
        ],
      },
      {
        label: "Fraudulent Claim Block",
        description:
          "A claim is attempted against a non-enrolled identity at another hospital. The check fails and the claim is refused before any authorization.",
        icon: Shield,
        logFilename: "cerulea_beneficiary.log",
        logLines: [
          { text: "[SYS] Eligibility request for AB_00000...", time: "11:42:19", tone: "default" },
          { text: "[CMD] checkEligibility { beneficiary: \"AB_00000\" }", time: "11:42:19", tone: "primary" },
          { text: "[SYS] No enrollment found in registry.", time: "11:42:20", tone: "error" },
          { text: "[OK] Ineligible claim refused.", time: "11:42:20", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes beneficiary verification into modular contracts. Each layer authorizes, resolves, reserves, and blocks so eligibility is instant and leakage-resistant.",
    layers: [
      {
        title: "Beneficiary Registry",
        subtitle: "The Verified Record",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Record",
          description:
            "The foundational data layer. It anchors each beneficiary's identity, enrollment, and coverage, so a hospital verifies a live record instead of a cached list across hundreds of millions of members.",
          platformFunction: "Identity & Registry",
        },
        codeSnippet:
          "contract BeneficiaryRegistry {\n  struct Beneficiary {\n    bytes32 civilId;\n    bool enrolled;\n    uint256 coverage;\n    uint256 reserved;\n  }\n\n  mapping(bytes32 => Beneficiary) public members;\n\n  function enroll(bytes32 id, bytes32 civilId, uint256 coverage) external onlyScheme {\n    members[id] = Beneficiary(civilId, true, coverage, 0);\n  }\n}",
        simAction: "Simulate Registry Lookup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resolving beneficiary AB_55120...", tone: "default" },
          { text: "Confirming scheme enrollment...", tone: "default" },
          { text: "Reading coverage balance...", tone: "default" },
          { text: "Returning verified record...", tone: "default" },
          { text: "[SUCCESS] Beneficiary verified on-chain.", tone: "success" },
        ],
      },
      {
        title: "Access Gate",
        subtitle: "The Empaneled Check",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Empaneled Check",
          description:
            "Confirms the querying hospital holds a valid empanelment credential before any beneficiary lookup. It ensures only authorized providers can check status or reserve coverage.",
          platformFunction: "Access Control",
        },
        codeSnippet:
          "function checkEligibility(bytes32 beneficiary) external view onlyEmpaneled returns (bool enrolled, uint256 available) {\n    Beneficiary memory b = members[beneficiary];\n    return (b.enrolled, b.coverage - b.reserved);\n}",
        simAction: "Simulate Eligibility Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hospital submits eligibility request...", tone: "default" },
          { text: "Verifying empanelment credential...", tone: "default" },
          { text: "Loading beneficiary record...", tone: "default" },
          { text: "Computing available coverage...", tone: "default" },
          { text: "[SUCCESS] Eligibility confirmed.", tone: "success" },
        ],
      },
      {
        title: "Coverage Reserver",
        subtitle: "The Cashless Authorizer",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cashless Authorizer",
          description:
            "Reserves coverage against a beneficiary for an admission before cashless treatment begins. It records entitlements consumed so a member's balance cannot be silently overdrawn.",
          platformFunction: "Authorization",
        },
        codeSnippet:
          "function reserveCoverage(bytes32 beneficiary, uint256 amount) external onlyEmpaneled {\n    Beneficiary storage b = members[beneficiary];\n    require(b.coverage - b.reserved >= amount, \"Insufficient coverage\");\n    b.reserved += amount;\n    emit CoverageReserved(beneficiary, amount, msg.sender);\n}",
        simAction: "Simulate Coverage Reservation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Authorizing cashless treatment...", tone: "default" },
          { text: "Checking available coverage...", tone: "default" },
          { text: "Reserving 45,000 against balance...", tone: "default" },
          { text: "Recording reservation...", tone: "default" },
          { text: "[SUCCESS] Cashless admission approved.", tone: "success" },
        ],
      },
      {
        title: "Fraud Filter",
        subtitle: "The Leakage Guard",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Leakage Guard",
          description:
            "Fails any check against a non-enrolled or exhausted beneficiary. It reduces scheme leakage from ineligible and duplicate claims by refusing them before authorization.",
          platformFunction: "Fraud Prevention",
        },
        codeSnippet:
          "function guardClaim(bytes32 beneficiary, uint256 amount) external view returns (bool) {\n    Beneficiary memory b = members[beneficiary];\n    require(b.enrolled, \"Not enrolled\");\n    require(b.coverage - b.reserved >= amount, \"Exhausted\");\n    return true;\n}",
        simAction: "Simulate Claim Block",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Claim submitted for AB_00000...", tone: "default" },
          { text: "Searching registry for enrollment...", tone: "default" },
          { text: "No enrollment found...", tone: "error" },
          { text: "Refusing ineligible claim...", tone: "default" },
          { text: "[SUCCESS] Leakage blocked at source.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Instant beneficiary verification is a horizontal capability. Here is how different actors in a national health scheme put it to work.",
    sectors: [
      { icon: Hospital, title: "Empaneled Hospitals", description: "Verify a patient's beneficiary status and coverage in seconds at admission, so eligible patients start cashless treatment without front-desk delays or manual database checks.", assetTypes: ["Eligibility Checks", "Coverage Reservations", "Admission Records"] },
      { icon: Users, title: "Beneficiaries", description: "Present a verified scheme identity and receive cashless care at any empaneled hospital in the country, replacing uncertain manual eligibility checks with an instant confirmation.", assetTypes: ["Scheme Identities", "Coverage Records", "Treatment Approvals"] },
      { icon: Landmark, title: "Scheme Authorities", description: "See verification and utilization across empaneled hospitals in real time and block ineligible claims at source, reducing leakage without periodic reconciliation.", assetTypes: ["Audit Trails", "Utilization Records", "Beneficiary Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging the scheme's beneficiary database or capturing checks from hospital admission systems, Cerulea routes both into one eligibility layer.",
    tracks: [
      {
        title: "Track A: Scheme Database Bridging",
        description:
          "For the scheme authority on a national beneficiary database. Enrollment and coverage are anchored as verified records through the API gateway.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Beneficiary Database", sublabel: "National Scheme System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Registry Hashing & Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Beneficiary Eligibility Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Hospital Admission Access",
        description:
          "For empaneled hospitals verifying at admission. A signed client checks eligibility and reserves coverage directly against the shared ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Admission Client", sublabel: "Empaneled Hospital Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Eligibility Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Beneficiary Verification Record", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a beneficiary eligibility layer with a verified registry, credentialed hospital access, and coverage reservation from scratch requires specialised engineers and long scheme integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Eligibility & Coverage Rules",
      ruleCount: 45,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects national health-scheme integration benchmarks. Wiring the beneficiary database, building credentialed hospital access, and shipping coverage reservation for an average scheme takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your eligibility and coverage rules into pre-audited WebAssembly binaries and provisions the eligibility ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const healthcareLifeSciencesItems: ExtraCaseItem[] = [
  {
    label: "Lab test result integrity and chain of custody for medicolegal use",
    href: "/solutions/use-case/lab-test-result-integrity-and-chain-of-custody-for-medicolegal-use",
    description: "Tamper-evident lab results defensible in litigation.",
    icon: Gavel,
    category: "ENTERPRISE",
    tags: ["Diagnostics", "Legal"],
    industry: INDUSTRY,
  },
  {
    label: "Genetic testing consent and data usage tracking",
    href: "/solutions/use-case/genetic-testing-consent-and-data-usage-tracking",
    description: "Enforce genomic consent and log every use.",
    icon: Biotech,
    category: "DAPPS",
    tags: ["Genomics", "Privacy"],
    industry: INDUSTRY,
  },
  {
    label: "Inter-lab reference sample exchange for quality assurance",
    href: "/solutions/use-case/inter-lab-reference-sample-exchange-for-quality-assurance",
    description: "Verifiable proficiency testing across participating laboratories.",
    icon: FlaskConical,
    category: "ENTERPRISE",
    tags: ["Laboratory", "Accreditation"],
    industry: INDUSTRY,
  },
  {
    label: "Patient medical record sharing across hospitals with patient consent",
    href: "/solutions/use-case/patient-medical-record-sharing-across-hospitals-with-patient-consent",
    description: "Consent-governed cross-hospital access with data at source.",
    icon: Hospital,
    category: "GOVERNMENT",
    tags: ["Healthcare", "Interoperability"],
    industry: INDUSTRY,
  },
  {
    label: "Operation theatre scheduling and equipment sterilization log",
    href: "/solutions/use-case/operation-theatre-scheduling-and-equipment-sterilization-log",
    description: "Link each OT booking to verified sterilization.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Hospitals", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Blood bank inventory and donor-to-patient traceability",
    href: "/solutions/use-case/blood-bank-inventory-and-donor-to-patient-traceability",
    description: "Trace every blood unit from donor to patient.",
    icon: Droplet,
    category: "GOVERNMENT",
    tags: ["Blood Bank", "Traceability"],
    industry: INDUSTRY,
  },
  {
    label: "ICU bed availability sharing across hospital networks during emergencies",
    href: "/solutions/use-case/icu-bed-availability-sharing-across-hospital-networks-during-emergenci",
    description: "Live ICU capacity view for emergency routing.",
    icon: HeartPulse,
    category: "GOVERNMENT",
    tags: ["Emergency", "Capacity"],
    industry: INDUSTRY,
  },
  {
    label: "Organ donation and transplant matching registry",
    href: "/solutions/use-case/organ-donation-and-transplant-matching-registry",
    description: "Auditable transplant allocation by medical priority rules.",
    icon: Handshake,
    category: "GOVERNMENT",
    tags: ["Transplant", "Registry"],
    industry: INDUSTRY,
  },
  {
    label: "Medical equipment maintenance and calibration compliance",
    href: "/solutions/use-case/medical-equipment-maintenance-and-calibration-compliance",
    description: "Alert-driven maintenance record for critical devices.",
    icon: Cpu,
    category: "ENTERPRISE",
    tags: ["Biomedical", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Drug serialization and anti-counterfeiting across distribution chain",
    href: "/solutions/use-case/drug-serialization-and-anti-counterfeiting-across-distribution-chain",
    description: "Pack-level verification from manufacture to dispensing.",
    icon: QrCode,
    category: "ENTERPRISE",
    tags: ["Pharma", "Supply Chain"],
    industry: INDUSTRY,
  },
  {
    label: "Cold chain vaccine distribution temperature compliance",
    href: "/solutions/use-case/cold-chain-vaccine-distribution-temperature-compliance",
    description: "Real-time temperature log flags cold chain breaches.",
    icon: Thermometer,
    category: "GOVERNMENT",
    tags: ["Vaccines", "Cold Chain"],
    industry: INDUSTRY,
  },
  {
    label: "Prescription drug dispensing audit for controlled substances",
    href: "/solutions/use-case/prescription-drug-dispensing-audit-for-controlled-substances",
    description: "Credentialed dispensing record searchable across all pharmacies.",
    icon: ScrollText,
    category: "GOVERNMENT",
    tags: ["Pharma", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Clinical trial drug supply chain and patient dosing records",
    href: "/solutions/use-case/clinical-trial-drug-supply-chain-and-patient-dosing-records",
    description: "Gap-free drug accountability from manufacture to dose.",
    icon: Package,
    category: "ENTERPRISE",
    tags: ["Clinical Trials", "Supply Chain"],
    industry: INDUSTRY,
  },
  {
    label: "Pharmacy license verification and controlled substance reporting",
    href: "/solutions/use-case/pharmacy-license-verification-and-controlled-substance-reporting",
    description: "Instant licence checks with automatic controller reporting.",
    icon: IdCard,
    category: "GOVERNMENT",
    tags: ["Pharma", "Licensing"],
    industry: INDUSTRY,
  },
  {
    label: "Patient health record portability across clinics and labs",
    href: "/solutions/use-case/patient-health-record-portability-across-clinics-and-labs",
    description: "Portable consent-governed record available in seconds.",
    icon: Network,
    category: "SME",
    tags: ["Healthcare", "Interoperability"],
    industry: INDUSTRY,
  },
  {
    label: "Telemedicine consultation record and prescription verification",
    href: "/solutions/use-case/telemedicine-consultation-record-and-prescription-verification",
    description: "Pharmacies verify remote prescriptions without a call.",
    icon: Wifi,
    category: "SME",
    tags: ["Telehealth", "Verification"],
    industry: INDUSTRY,
  },
  {
    label: "Chronic disease management program adherence tracking",
    href: "/solutions/use-case/chronic-disease-management-program-adherence-tracking",
    description: "Cross-provider adherence view without patient self-report.",
    icon: Activity,
    category: "ENTERPRISE",
    tags: ["Chronic Care", "Adherence"],
    industry: INDUSTRY,
  },
  {
    label: "Vaccination records for cross-border verification",
    href: "/solutions/use-case/vaccination-records-for-cross-border-verification",
    description: "Forgery-proof vaccination credentials verified at borders.",
    icon: Globe,
    category: "GOVERNMENT",
    tags: ["Vaccines", "Identity"],
    industry: INDUSTRY,
  },
  {
    label: "Disease outbreak surveillance data sharing across states",
    href: "/solutions/use-case/disease-outbreak-surveillance-data-sharing-across-states",
    description: "Real-time cross-state feed catches outbreaks early.",
    icon: Radio,
    category: "GOVERNMENT",
    tags: ["Public Health", "Surveillance"],
    industry: INDUSTRY,
  },
  {
    label: "Health insurance scheme (Ayushman Bharat) beneficiary verification",
    href: "/solutions/use-case/health-insurance-scheme-ayushman-bharat-beneficiary-verification",
    description: "Instant beneficiary eligibility checks at empaneled hospitals.",
    icon: ShieldCheck,
    category: "GOVERNMENT",
    tags: ["Insurance", "Eligibility"],
    industry: INDUSTRY,
  },
]
