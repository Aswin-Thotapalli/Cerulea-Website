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

const INDUSTRY = "Education & Academia"

export const educationAcademiaCases: CaseEntry[] = [
  {
    slug: "degree-and-credential-verification-across-institutions-and-employers",
    icon: GraduationCap,
    eyebrow: "Academic Credential Registry",
    headline1: "Verify every degree.",
    headline2: "In thirty seconds.",
    heroDescription:
      "Issue every degree and transcript as a verifiable credential on an on-chain registry that anyone can check in seconds. Fraudulent degrees produce no valid record, so employers confirm authenticity by QR scan instead of weeks of manual back-office verification.",
    heroCta: "Deploy Credential Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn the paper degree, and the slow phone-and-email verification behind it, into an instant cryptographic check.",
    mechanics: [
      { title: "Issuer Registry", description: "Anchor the authority to grant degrees. Only accredited institutions hold a registered issuer key on the DID and VC Ledger, so a certificate minted by a degree mill has no valid signature and fails verification instantly." },
      { title: "Verifiable Diploma", description: "Bind each degree to its graduate. The Provenance Notary seals the program, class, and conferral date to the student's decentralized identifier, making later forgery or grade inflation mathematically detectable." },
      { title: "Instant QR Verification", description: "Collapse the verification window. An employer resolves a diploma QR to a genuine or invalid result in seconds, with no email to the registrar and no two-week wait for a transcript." },
      { title: "Cross-Border Recognition", description: "Make international recognition instant. A foreign employer or evaluation body verifies a degree against the same on-chain record, replacing costly and slow credential-recognition services." },
      { title: "Consent-Governed Sharing", description: "Keep the graduate in control. Records are disclosed only when the holder presents them from their wallet, so a candidate shares a verified degree without exposing an entire academic file." },
      { title: "Revocation Registry", description: "Handle rescinded degrees cleanly. If a qualification is revoked for misconduct, the institution flips its on-chain status, and every future verification reflects the change immediately." },
    ],
    lifecycleTitle: "The Credentialing Lifecycle",
    lifecycleSubtitle:
      "Follow a single degree from conferral at the university through to a thirty-second check by an overseas employer.",
    lifecycleSteps: [
      {
        label: "Issuer Onboarding",
        description:
          "An accredited university registers as a credential issuer. The contract anchors its institutional DID and public key so every degree it later mints carries a verifiable signature.",
        icon: Landmark,
        logFilename: "cerulea_credential_registry.log",
        logLines: [
          { text: "[SYS] Initializing Accredited Issuer enrollment...", time: "09:12:04", tone: "default" },
          { text: "[CMD] registerIssuer { org: \"HYD_UNIV_204\", accred: \"UGC_VERIFIED\" }", time: "09:12:04", tone: "primary" },
          { text: "[AUTH] Verifying accreditation status and institutional key...", time: "09:12:05", tone: "secondary" },
          { text: "[OK] Issuer DID anchored at block 5120441.", time: "09:12:05", tone: "success" },
        ],
      },
      {
        label: "Degree Issuance",
        description:
          "At convocation the registrar mints a diploma credential for each graduate. The degree, class, and conferral date are sealed to the student's decentralized identifier.",
        icon: GraduationCap,
        logFilename: "cerulea_credential_registry.log",
        logLines: [
          { text: "[SYS] Batch issuing diplomas for cohort 2026...", time: "11:44:18", tone: "default" },
          { text: "[CMD] issueDegree(did: \"stu_88213\", program: \"BTECH_CSE\", class: \"FIRST\")", time: "11:44:19", tone: "primary" },
          { text: "[AUTH] Signing credential with issuer key HYD_UNIV_204...", time: "11:44:19", tone: "secondary" },
          { text: "[OK] Credential VC_44120 sealed to graduate DID.", time: "11:44:20", tone: "success" },
        ],
      },
      {
        label: "Holder Presentation",
        description:
          "The graduate applies for a role abroad and shares a verifiable presentation from their wallet. Only the degree, not the full academic file, is disclosed to the employer.",
        icon: Wallet,
        logFilename: "cerulea_credential_registry.log",
        logLines: [
          { text: "[SYS] Building selective-disclosure presentation...", time: "14:03:37", tone: "default" },
          { text: "[CMD] presentCredential(VC_44120, disclose: [\"degree\",\"class\"])", time: "14:03:37", tone: "primary" },
          { text: "[SYS] Holder signature attached from graduate wallet.", time: "14:03:38", tone: "default" },
          { text: "[OK] Presentation token generated for verifier.", time: "14:03:38", tone: "success" },
        ],
      },
      {
        label: "Employer Verification",
        description:
          "The Singapore employer scans the QR and the verifier checks the issuer signature and revocation status. A genuine degree returns valid in seconds with no call to the university.",
        icon: Search,
        logFilename: "cerulea_credential_registry.log",
        logLines: [
          { text: "[SYS] Public verification request for QR:44120...", time: "15:58:02", tone: "default" },
          { text: "[CMD] verifyDegree(VC_44120)", time: "15:58:02", tone: "primary" },
          { text: "[AUTH] Checking issuer signature and revocation registry...", time: "15:58:02", tone: "secondary" },
          { text: "[OK] Degree valid. Issued by accredited HYD_UNIV_204.", time: "15:58:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes credential verification into modular contracts. Each layer registers issuers, mints degrees, governs disclosure, and exposes verification without any central registrar controlling the record.",
    layers: [
      {
        title: "Issuer Registry",
        subtitle: "The Authority Anchor",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authority Anchor",
          description:
            "The trust root of the system. It records which institutions are accredited to grant degrees and stores their public keys, so a credential minted by an unregistered degree mill carries no valid signature and fails at verification.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract IssuerRegistry {\n  struct Issuer {\n    bytes32 accreditation;\n    bytes pubKey;\n    bool active;\n  }\n\n  mapping(address => Issuer) public issuers;\n\n  function registerIssuer(address org, bytes32 accred, bytes calldata key) external onlyRegulator {\n    issuers[org] = Issuer(accred, key, true);\n    emit IssuerRegistered(org, accred);\n  }\n}",
        simAction: "Simulate Issuer Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading accreditation record for HYD_UNIV_204...", tone: "default" },
          { text: "Validating regulator authorization...", tone: "default" },
          { text: "Anchoring institutional public key...", tone: "default" },
          { text: "Writing issuer identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Accredited issuer registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Credential Mint",
        subtitle: "The Diploma Seal",
        icon: GraduationCap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Diploma Seal",
          description:
            "The issuance engine. It mints a verifiable diploma bound to the graduate's decentralized identifier and signs it with the issuer key, so the program, class, and conferral date cannot be altered after the fact.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function issueDegree(bytes32 studentDID, string calldata program, bytes1 class) external onlyIssuer {\n    bytes32 id = keccak256(abi.encode(studentDID, program, block.timestamp));\n    credentials[id] = Credential(msg.sender, studentDID, program, class, false);\n    emit DegreeIssued(id, studentDID, program);\n}",
        simAction: "Simulate Degree Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading graduate DID stu_88213...", tone: "default" },
          { text: "Composing diploma payload BTECH_CSE...", tone: "default" },
          { text: "Signing with issuer key HYD_UNIV_204...", tone: "default" },
          { text: "Sealing credential to graduate identity...", tone: "default" },
          { text: "[SUCCESS] Verifiable diploma minted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Consent Gateway",
        subtitle: "The Selective Disclosure",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Selective Disclosure",
          description:
            "Keeps the graduate in control of their data. It builds a verifiable presentation that reveals only the fields the holder chooses, so a job application shares a verified degree without exposing marks, dates of birth, or an entire academic history.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function present(bytes32 id, string[] calldata fields) external view returns (Presentation memory) {\n    require(credentials[id].holder == callerDID(msg.sender), \"Not holder\");\n    return buildPresentation(id, fields);\n}",
        simAction: "Simulate Selective Disclosure",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Graduate selects fields degree and class...", tone: "default" },
          { text: "Withholding marks and personal identifiers...", tone: "default" },
          { text: "Attaching holder signature from wallet...", tone: "default" },
          { text: "Packaging presentation token for verifier...", tone: "default" },
          { text: "[SUCCESS] Minimal-disclosure presentation issued.", tone: "success" },
        ],
      },
      {
        title: "Public Verifier",
        subtitle: "The Employer Window",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Employer Window",
          description:
            "A read-only gateway that checks an issuer signature and revocation status in one call. It lets any employer or evaluation body confirm a degree without an account and without contacting the university.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyDegree(bytes32 id) external view returns (bool) {\n    Credential memory c = credentials[id];\n    if (c.revoked) return false;\n    return issuers[c.issuer].active && verifySig(c);\n}",
        simAction: "Simulate Employer Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Employer scans diploma QR:44120...", tone: "default" },
          { text: "Resolving issuer HYD_UNIV_204 signature...", tone: "default" },
          { text: "Checking revocation registry status...", tone: "default" },
          { text: "Confirming accreditation is still active...", tone: "default" },
          { text: "[SUCCESS] Degree verified genuine in seconds.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Credential verification is a horizontal capability. Here is how different actors in the education ecosystem put the shared registry to work.",
    sectors: [
      { icon: GraduationCap, title: "Universities & Colleges", description: "Issue every degree and transcript as a signed credential, eliminating the registrar back-office that answers verification calls and protecting the institution's brand against forged certificates.", assetTypes: ["Diplomas", "Transcripts", "Convocation Records"] },
      { icon: Building2, title: "Employers & Recruiters", description: "Confirm a candidate's qualifications in seconds during screening, cutting weeks from the hiring pipeline and removing the risk of onboarding a hire on a fraudulent degree.", assetTypes: ["Screening Checks", "Background Reports", "Onboarding Files"] },
      { icon: Globe, title: "Evaluation & Immigration Bodies", description: "Recognize foreign qualifications against a live on-chain record instead of slow, paper-based equivalency reviews, accelerating study visas and skilled-migration assessments.", assetTypes: ["Equivalency Reports", "Visa Assessments", "Recognition Certificates"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy student information system or issuing directly to graduate wallets, Cerulea routes both into one verifiable credential record.",
    tracks: [
      {
        title: "Track A: Institution SIS Bridging",
        description:
          "For universities on legacy student information systems. Conferred results are translated into signed on-chain credentials through the API gateway automatically at convocation.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy SIS / ERP", sublabel: "Registrar Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Credential Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Graduate Wallet Issuance",
        description:
          "For graduates holding credentials on mobile. A wallet app receives each verifiable diploma and signs selective presentations directly for employers and evaluators.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Graduate Wallet", sublabel: "Holder Devices", icon: Fingerprint, accent: false },
          { label: "Verification Nodes", sublabel: "Signature Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Credential Record", icon: GraduationCap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-institution credential registry with issuer onboarding, selective disclosure, and a public verification portal from scratch requires specialised identity engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Issuer & Verification Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects digital-identity integration benchmarks. Onboarding accredited issuers, writing verifiable-credential and revocation logic, and shipping a public verification portal for an average network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your issuer and disclosure rules into pre-audited WebAssembly binaries and provisions the shared credential ledger and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "research-grant-fund-disbursement-and-milestone-reporting",
    icon: FlaskConical,
    eyebrow: "Grant Settlement Layer",
    headline1: "Fund the milestone.",
    headline2: "Not the lump sum.",
    heroDescription:
      "Release research funding to teams automatically as verified milestones are reported and confirmed, instead of a single opaque lump sum. Funding bodies gain real-time visibility into progress while researchers receive capital the moment each milestone clears.",
    heroCta: "Deploy Grant Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace lump-sum grants and end-of-project reports with milestone-gated releases that funders can watch in real time.",
    mechanics: [
      { title: "Milestone Escrow", description: "Lock the full grant at award. The Escrow and Conditional Settlement module holds capital in a contract and releases each tranche only when its milestone is confirmed, so funds are never advanced ahead of verified work." },
      { title: "Milestone Attestation", description: "Confirm progress against defined criteria. The Compliance Attestations module records that a deliverable met its stated conditions, turning a milestone report into a signed on-chain event rather than an email." },
      { title: "Deliverable Notary", description: "Anchor the evidence behind each claim. The Provenance Notary seals datasets, reports, and outputs by digest, so a funder can trace any released tranche back to the exact deliverable that unlocked it." },
      { title: "Funder Dashboard", description: "Give funding bodies a live window. Every registered milestone, attestation, and release is visible in real time, replacing the annual progress report with a continuously auditable record of spend." },
      { title: "Automated Tranche Release", description: "Pay researchers promptly. The moment a milestone is confirmed, the contract settles the associated tranche to the research team's account without a manual approval cycle in the finance office." },
      { title: "Clawback Conditions", description: "Protect public capital. If a milestone is missed or an attestation is withdrawn, undisbursed tranches remain locked in escrow and can be returned to the funder under the encoded grant terms." },
    ],
    lifecycleTitle: "The Grant Lifecycle",
    lifecycleSubtitle:
      "Follow a single research grant from award through milestone confirmation to automatic tranche settlement.",
    lifecycleSteps: [
      {
        label: "Grant Award",
        description:
          "A funding body awards a grant and locks the full amount in escrow. The milestone schedule and release conditions are encoded into the contract at award time.",
        icon: Landmark,
        logFilename: "cerulea_grant_engine.log",
        logLines: [
          { text: "[SYS] Initializing Grant Escrow manifest...", time: "10:05:12", tone: "default" },
          { text: "[CMD] awardGrant { proj: \"NSF_LAB_771\", total: 4800000, milestones: 4 }", time: "10:05:12", tone: "primary" },
          { text: "[AUTH] Locking funds and encoding release conditions...", time: "10:05:13", tone: "secondary" },
          { text: "[OK] Grant escrow anchored at block 6033120.", time: "10:05:13", tone: "success" },
        ],
      },
      {
        label: "Milestone Report",
        description:
          "The research team reports a completed milestone and anchors its deliverables. The dataset and report are sealed to the milestone by cryptographic digest.",
        icon: FlaskConical,
        logFilename: "cerulea_grant_engine.log",
        logLines: [
          { text: "[SYS] Receiving milestone submission for M2...", time: "13:27:40", tone: "default" },
          { text: "[CMD] reportMilestone(proj: \"NSF_LAB_771\", m: 2, docs: [\"DATASET\",\"REPORT\"])", time: "13:27:40", tone: "primary" },
          { text: "[AUTH] Hashing deliverables and sealing to milestone...", time: "13:27:41", tone: "secondary" },
          { text: "[OK] Milestone M2 evidence anchored, awaiting review.", time: "13:27:41", tone: "success" },
        ],
      },
      {
        label: "Attestation",
        description:
          "A reviewer confirms the milestone met its criteria. The Compliance Attestations module records a signed confirmation that unlocks the associated tranche.",
        icon: FileCheck,
        logFilename: "cerulea_grant_engine.log",
        logLines: [
          { text: "[SYS] Reviewer evaluating milestone M2 evidence...", time: "16:11:55", tone: "default" },
          { text: "[CMD] attestMilestone(proj: \"NSF_LAB_771\", m: 2, result: \"MET\")", time: "16:11:56", tone: "primary" },
          { text: "[SYS] Signed attestation recorded on-chain.", time: "16:11:56", tone: "default" },
          { text: "[OK] Milestone confirmed. Tranche 2 release authorized.", time: "16:11:57", tone: "success" },
        ],
      },
      {
        label: "Tranche Settlement",
        description:
          "The contract releases the confirmed tranche to the research team automatically. The funder dashboard updates with the settled amount and remaining locked balance.",
        icon: Wallet,
        logFilename: "cerulea_grant_engine.log",
        logLines: [
          { text: "[SYS] Executing conditional settlement for M2...", time: "16:12:02", tone: "default" },
          { text: "[CMD] releaseTranche(proj: \"NSF_LAB_771\", m: 2, amount: 1200000)", time: "16:12:02", tone: "primary" },
          { text: "[SYS] Transferring funds to research team account...", time: "16:12:02", tone: "default" },
          { text: "[OK] Tranche settled. 2 of 4 milestones funded.", time: "16:12:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes grant administration into modular contracts. Each layer escrows capital, records milestone claims, attests results, and settles tranches without a manual finance cycle between confirmation and payment.",
    layers: [
      {
        title: "Grant Escrow",
        subtitle: "The Capital Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Capital Vault",
          description:
            "The foundational settlement layer. It locks the awarded amount and encodes the milestone schedule, so no tranche can be released until its condition is met and unspent capital stays protected for the funder.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract GrantEscrow {\n  struct Grant {\n    address team;\n    uint256 locked;\n    uint8 milestones;\n    uint8 released;\n  }\n\n  mapping(bytes32 => Grant) public grants;\n\n  function award(bytes32 id, address team, uint256 total, uint8 m) external onlyFunder {\n    grants[id] = Grant(team, total, m, 0);\n  }\n}",
        simAction: "Simulate Grant Escrow",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading award terms for NSF_LAB_771...", tone: "default" },
          { text: "Encoding 4-milestone release schedule...", tone: "default" },
          { text: "Locking 4,800,000 in escrow vault...", tone: "default" },
          { text: "Writing grant state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Grant capital locked on-chain.", tone: "success" },
        ],
      },
      {
        title: "Milestone Notary",
        subtitle: "The Evidence Seal",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Seal",
          description:
            "Anchors deliverables behind each milestone claim. Datasets and reports stay off-chain, but their cryptographic digests are sealed to the milestone, so any released tranche is permanently traceable to the exact evidence that unlocked it.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function reportMilestone(bytes32 id, uint8 m, bytes32[] calldata docHashes) external onlyTeam(id) {\n    require(!milestones[id][m].reported, \"Already reported\");\n    milestones[id][m] = Milestone(docHashes, false, false);\n    emit MilestoneReported(id, m);\n}",
        simAction: "Simulate Milestone Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting milestone M2 deliverables...", tone: "default" },
          { text: "Computing digests of dataset and report...", tone: "default" },
          { text: "Sealing evidence to milestone slot...", tone: "default" },
          { text: "Flagging milestone as awaiting review...", tone: "default" },
          { text: "[SUCCESS] Milestone evidence anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Attestation Gate",
        subtitle: "The Confirmation Check",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Confirmation Check",
          description:
            "The verification hook between claim and payment. It records a reviewer's signed confirmation that a milestone met its criteria, and only a passed attestation flips the release flag on the associated tranche.",
          platformFunction: "Compliance & Attestation",
        },
        codeSnippet:
          "function attest(bytes32 id, uint8 m, bool met) external onlyReviewer {\n    Milestone storage ms = milestones[id][m];\n    require(!ms.attested, \"Already attested\");\n    ms.attested = true;\n    ms.passed = met;\n    emit MilestoneAttested(id, m, met);\n}",
        simAction: "Simulate Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reviewer opening milestone M2 evidence...", tone: "default" },
          { text: "Comparing deliverables against stated criteria...", tone: "default" },
          { text: "Recording signed attestation result MET...", tone: "default" },
          { text: "Setting tranche release flag to authorized...", tone: "default" },
          { text: "[SUCCESS] Milestone confirmed, release unlocked.", tone: "success" },
        ],
      },
      {
        title: "Tranche Settlement",
        subtitle: "The Conditional Release",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Release",
          description:
            "The end-of-cycle executor. Once a milestone is attested, it transfers the exact tranche to the research team and updates the released count, so payment follows confirmation in the same block with no finance-office delay.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function releaseTranche(bytes32 id, uint8 m, uint256 amount) external {\n    require(milestones[id][m].passed, \"Not attested\");\n    grants[id].released += 1;\n    grants[id].locked -= amount;\n    payable(grants[id].team).transfer(amount);\n    emit TrancheReleased(id, m, amount);\n}",
        simAction: "Simulate Tranche Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming milestone M2 attestation passed...", tone: "default" },
          { text: "Calculating tranche amount 1,200,000...", tone: "default" },
          { text: "Transferring funds to research team...", tone: "default" },
          { text: "Updating funder dashboard balances...", tone: "default" },
          { text: "[SUCCESS] Tranche settled to researchers.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Milestone-gated funding is a horizontal capability. Here is how different funders and research bodies put conditional settlement to work.",
    sectors: [
      { icon: Landmark, title: "Government Funding Agencies", description: "Disburse public research capital against verified milestones with a continuous audit trail, replacing annual progress reports and giving oversight bodies live visibility into every rupee committed.", assetTypes: ["Public Grants", "Milestone Schedules", "Audit Trails"] },
      { icon: FlaskConical, title: "Universities & Research Labs", description: "Receive funding promptly as each deliverable clears, removing the cash-flow gaps between milestone completion and payment that stall lab work and equipment purchases.", assetTypes: ["Project Tranches", "Deliverable Records", "Lab Budgets"] },
      { icon: Building2, title: "Corporate & Philanthropic Funders", description: "Sponsor targeted research with confidence that capital releases only against confirmed outcomes, and reclaim undisbursed tranches automatically when a project falls short of its plan.", assetTypes: ["Sponsored Programs", "Impact Milestones", "Clawback Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a funder's legacy grants-management system or letting research teams report from a portal, Cerulea routes both into one milestone-gated escrow.",
    tracks: [
      {
        title: "Track A: Funder System Bridging",
        description:
          "For agencies on legacy grants-management platforms. Award and review events are translated into on-chain escrow and attestation calls through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Grants System", sublabel: "Funder Back Office", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Escrow & Attestation", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Grant Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Research Team Reporting",
        description:
          "For labs reporting milestones from a portal. A signed submission anchors deliverables and triggers the attestation and release flow directly on the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Research Portal / Wallet", sublabel: "Principal Investigator", icon: Fingerprint, accent: false },
          { label: "Attestation Nodes", sublabel: "Review Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Escrow Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a milestone-gated grant system with conditional escrow, attestation workflows, and a live funder dashboard from scratch requires specialised settlement engineers and long finance integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Milestone & Release Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects enterprise financial-workflow benchmarks. Building conditional escrow, wiring milestone attestation into a funder's systems, and shipping a live spend dashboard for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your escrow and milestone rules into pre-audited WebAssembly binaries and provisions the settlement ledger and dashboard layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "multi-university-credit-transfer-and-exchange-program-records",
    icon: Handshake,
    eyebrow: "Credit Interoperability Layer",
    headline1: "Earn credit abroad.",
    headline2: "Recognized at home.",
    heroDescription:
      "Issue a verifiable credential for every course completed at a partner institution, which the home university can verify and apply to the student's record instantly. A shared exchange ledger removes the manual transcript verification that delays credit recognition for months.",
    heroCta: "Deploy Credit Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a partner university's transcript into a credential the home institution can trust and apply without a manual review.",
    mechanics: [
      { title: "Course Credential", description: "Issue each completed course as a verifiable credential. The DID and VC Ledger binds the course, grade, and credit weight to the student's identity, so a partner institution's result travels as signed evidence rather than a mailed transcript." },
      { title: "Student Identity Anchor", description: "Match records to the right student across borders. The Civil Registry anchors a durable identity so an exchange student's credits map to their home record without name-and-birthdate reconciliation." },
      { title: "Equivalence Mapping", description: "Encode how partner credits translate. A mapping records how a partner course counts toward the home program, so recognition is a rule lookup rather than a case-by-case committee decision." },
      { title: "Attested Recognition", description: "Confirm the transfer formally. The Compliance Attestations module records the home university's acceptance, producing a signed acknowledgment that the credit has been applied to the student's record." },
      { title: "Consortium Sharing", description: "Let partners read one record. Each university in an exchange consortium queries the same ledger, so a credential issued by one member is instantly visible to another without bilateral integrations." },
      { title: "Instant Application", description: "Apply credit in a day, not a term. When a student returns, the home registrar verifies the credential and applies it immediately, replacing the weeks of paper verification that delay graduation timelines." },
    ],
    lifecycleTitle: "The Credit Transfer Lifecycle",
    lifecycleSubtitle:
      "Follow a single exchange course from completion at the partner university to recognition on the home student record.",
    lifecycleSteps: [
      {
        label: "Exchange Enrollment",
        description:
          "A student begins an exchange semester and their identity is anchored on the consortium ledger, linking the home and partner institutions to one record.",
        icon: Handshake,
        logFilename: "cerulea_credit_transfer.log",
        logLines: [
          { text: "[SYS] Initializing exchange enrollment record...", time: "08:41:09", tone: "default" },
          { text: "[CMD] enrollExchange { student: \"stu_51002\", home: \"IIT_D\", host: \"TU_MUNICH\" }", time: "08:41:09", tone: "primary" },
          { text: "[AUTH] Anchoring durable student identity...", time: "08:41:10", tone: "secondary" },
          { text: "[OK] Exchange record anchored at block 6721004.", time: "08:41:10", tone: "success" },
        ],
      },
      {
        label: "Course Completion",
        description:
          "The partner university issues a verifiable credential for each completed course. The grade and credit weight are sealed to the student's identity.",
        icon: FileCheck,
        logFilename: "cerulea_credit_transfer.log",
        logLines: [
          { text: "[SYS] Host issuing course credential...", time: "12:18:44", tone: "default" },
          { text: "[CMD] issueCourse(student: \"stu_51002\", course: \"ME_402\", credits: 6, grade: \"A\")", time: "12:18:44", tone: "primary" },
          { text: "[AUTH] Signing credential with host issuer key...", time: "12:18:45", tone: "secondary" },
          { text: "[OK] Course credential VC_77310 issued to student.", time: "12:18:45", tone: "success" },
        ],
      },
      {
        label: "Equivalence Match",
        description:
          "The home university maps the partner course to an equivalent in its program. The mapping determines how many credits apply toward the degree.",
        icon: Workflow,
        logFilename: "cerulea_credit_transfer.log",
        logLines: [
          { text: "[SYS] Resolving equivalence for VC_77310...", time: "14:55:21", tone: "default" },
          { text: "[CMD] mapEquivalence(host: \"ME_402\", home: \"MECH_410\", ratio: \"1:1\")", time: "14:55:21", tone: "primary" },
          { text: "[SYS] Credit weight normalized to home program.", time: "14:55:22", tone: "default" },
          { text: "[OK] Equivalence resolved. 6 credits eligible.", time: "14:55:22", tone: "success" },
        ],
      },
      {
        label: "Record Recognition",
        description:
          "The home registrar verifies the credential and applies the credit. A signed attestation records the recognition on the student's academic record.",
        icon: GraduationCap,
        logFilename: "cerulea_credit_transfer.log",
        logLines: [
          { text: "[SYS] Verifying host credential signature...", time: "16:30:58", tone: "default" },
          { text: "[CMD] recognizeCredit(student: \"stu_51002\", vc: \"VC_77310\", credits: 6)", time: "16:30:58", tone: "primary" },
          { text: "[AUTH] Recording home university attestation...", time: "16:30:59", tone: "secondary" },
          { text: "[OK] Credit applied to record in one day.", time: "16:30:59", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes credit transfer into modular contracts. Each layer anchors identity, issues course credentials, maps equivalence, and records recognition so credits move between institutions without manual transcript verification.",
    layers: [
      {
        title: "Identity Anchor",
        subtitle: "The Student Passport",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Student Passport",
          description:
            "The foundational identity layer. It anchors a durable student identity shared across the consortium, so credits earned at any partner institution attach to the correct home record without name-and-birthdate reconciliation.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ExchangeRegistry {\n  struct Enrollment {\n    bytes32 studentDID;\n    address home;\n    address host;\n  }\n\n  mapping(bytes32 => Enrollment) public enrollments;\n\n  function enroll(bytes32 id, bytes32 did, address home, address host) external {\n    enrollments[id] = Enrollment(did, home, host);\n  }\n}",
        simAction: "Simulate Identity Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading student identity stu_51002...", tone: "default" },
          { text: "Linking home IIT_D and host TU_MUNICH...", tone: "default" },
          { text: "Anchoring durable exchange identity...", tone: "default" },
          { text: "Writing enrollment to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Exchange identity anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Course Credential",
        subtitle: "The Result Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Result Seal",
          description:
            "The issuance engine at the partner institution. It mints a signed credential for each completed course carrying grade and credit weight, so a partner result travels as verifiable evidence the home registrar can trust.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function issueCourse(bytes32 studentDID, string calldata course, uint8 credits, bytes1 grade) external onlyHost {\n    bytes32 id = keccak256(abi.encode(studentDID, course));\n    courses[id] = Course(msg.sender, studentDID, course, credits, grade);\n    emit CourseIssued(id, studentDID, course);\n}",
        simAction: "Simulate Course Credential",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading exchange student stu_51002...", tone: "default" },
          { text: "Composing course result ME_402 grade A...", tone: "default" },
          { text: "Signing with host issuer key TU_MUNICH...", tone: "default" },
          { text: "Sealing credit weight to student identity...", tone: "default" },
          { text: "[SUCCESS] Course credential issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Equivalence Engine",
        subtitle: "The Credit Translator",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Credit Translator",
          description:
            "Encodes how partner credits count at home. It resolves a partner course to a home-program equivalent and normalizes the credit weight, turning a committee judgment into a deterministic rule lookup.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function mapEquivalence(string calldata hostCourse, string calldata homeCourse, uint8 num, uint8 den) external onlyHome {\n    equivalence[hostCourse] = Mapping(homeCourse, num, den);\n    emit EquivalenceMapped(hostCourse, homeCourse);\n}",
        simAction: "Simulate Equivalence Match",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Looking up mapping for host ME_402...", tone: "default" },
          { text: "Matching to home course MECH_410...", tone: "default" },
          { text: "Normalizing credit ratio 1:1...", tone: "default" },
          { text: "Computing eligible credit total...", tone: "default" },
          { text: "[SUCCESS] Equivalence resolved to 6 credits.", tone: "success" },
        ],
      },
      {
        title: "Recognition Ledger",
        subtitle: "The Home Record",
        icon: GraduationCap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Home Record",
          description:
            "The recognition executor. It verifies the partner credential and records a signed attestation that the credit was applied, producing an auditable acknowledgment on the student's academic record in the same session.",
          platformFunction: "Compliance & Attestation",
        },
        codeSnippet:
          "function recognizeCredit(bytes32 studentDID, bytes32 courseId, uint8 credits) external onlyHome {\n    require(verifyCourse(courseId), \"Invalid credential\");\n    record[studentDID].applied += credits;\n    emit CreditRecognized(studentDID, courseId, credits);\n}",
        simAction: "Simulate Record Recognition",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying host credential VC_77310...", tone: "default" },
          { text: "Confirming signature from TU_MUNICH...", tone: "default" },
          { text: "Applying 6 credits to home record...", tone: "default" },
          { text: "Recording recognition attestation...", tone: "default" },
          { text: "[SUCCESS] Credit recognized on student record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Portable academic credit is a horizontal capability. Here is how different institutions put the shared exchange ledger to work.",
    sectors: [
      { icon: Handshake, title: "Exchange Consortia", description: "Run a mobility network where any member can issue credit that every other member recognizes instantly, replacing bilateral transcript agreements with one shared ledger of course credentials.", assetTypes: ["Exchange Credentials", "Mobility Records", "Consortium Agreements"] },
      { icon: GraduationCap, title: "Home Universities", description: "Apply returning students' credits in a day instead of a term, keeping graduation timelines on track and freeing registrars from manual transcript verification for every exchange.", assetTypes: ["Student Records", "Credit Applications", "Equivalence Maps"] },
      { icon: Globe, title: "Partner & Host Institutions", description: "Issue verifiable results that travel with the student, letting a host university's teaching count fully toward a degree elsewhere without repeated evidence requests.", assetTypes: ["Course Results", "Grade Attestations", "Issuance Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging partner student information systems or issuing credentials to student wallets, Cerulea routes both into one consortium credit record.",
    tracks: [
      {
        title: "Track A: Consortium SIS Bridging",
        description:
          "For partner universities on legacy systems. Course completions are translated into signed on-chain credentials through the API gateway and shared across the consortium automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Partner SIS", sublabel: "Host Registrar Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Credit Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Student Wallet Mobility",
        description:
          "For students carrying credentials on mobile. A wallet holds each course credential and presents it to the home registrar for verification and recognition.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Student Wallet", sublabel: "Exchange Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Recognition Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Credit Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a consortium credit-transfer network with identity anchoring, equivalence mapping, and cross-institution recognition from scratch requires specialised interoperability engineers and long partner integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Equivalence & Recognition Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects academic-interoperability integration benchmarks. Aligning partner student systems, building equivalence mapping and recognition logic, and shipping a consortium sharing layer for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your equivalence and recognition rules into pre-audited WebAssembly binaries and provisions the shared credit ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "alumni-donation-tracking-with-designated-fund-usage-transparency",
    icon: Gift,
    eyebrow: "Donor Transparency Layer",
    headline1: "Follow every gift.",
    headline2: "To its exact use.",
    heroDescription:
      "Run a donor portal that shows exactly how each alumni contribution was spent, whether on scholarships, buildings, or research. Every donation is tracked through to its designated expenditure and the donor is notified the moment their gift is put to use.",
    heroCta: "Deploy Donor Portals",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque annual fund into a live record where every alumnus can see their designated gift reach its purpose.",
    mechanics: [
      { title: "Designated Escrow", description: "Ring-fence each gift by purpose. The Escrow and Conditional Settlement module holds a donation against its designated fund, so a scholarship gift can only be released to scholarship spending, never quietly pooled into general accounts." },
      { title: "Expenditure Notary", description: "Anchor how the money was spent. The Provenance Notary seals each disbursement, its beneficiary, and its supporting document, so a donor sees the exact scholarship awarded or invoice paid from their contribution." },
      { title: "Immutable Audit Trail", description: "Record every movement permanently. The Audit Logs module writes each release and expenditure as a tamper-evident event, giving the advancement office and its auditors a complete, unalterable history of fund usage." },
      { title: "Donor Portal", description: "Give each alumnus a private window. The portal resolves a donor's contributions to the specific expenditures they funded, replacing a vague year-end thank-you letter with itemized proof of impact." },
      { title: "Impact Notification", description: "Close the loop automatically. When a designated gift is put to use, the contract notifies the donor with the outcome, building the trust that drives repeat and increased giving." },
      { title: "Fund Segregation", description: "Keep purposes separate on-chain. Building, scholarship, and research funds each maintain their own balance and release rules, so cross-subsidy between designated funds is prevented at the protocol level." },
    ],
    lifecycleTitle: "The Donation Lifecycle",
    lifecycleSubtitle:
      "Follow a single designated gift from an alumnus through segregated escrow to a verified scholarship award.",
    lifecycleSteps: [
      {
        label: "Gift Received",
        description:
          "An alumnus donates to a designated scholarship fund. The contribution is locked in escrow against that specific fund with its release rules encoded.",
        icon: Gift,
        logFilename: "cerulea_donor_engine.log",
        logLines: [
          { text: "[SYS] Initializing designated gift record...", time: "09:33:26", tone: "default" },
          { text: "[CMD] receiveGift { donor: \"alum_3391\", fund: \"SCHOLARSHIP_2026\", amount: 250000 }", time: "09:33:26", tone: "primary" },
          { text: "[AUTH] Locking gift to designated fund escrow...", time: "09:33:27", tone: "secondary" },
          { text: "[OK] Gift anchored at block 6905510.", time: "09:33:27", tone: "success" },
        ],
      },
      {
        label: "Fund Allocation",
        description:
          "The advancement office allocates the gift to a specific scholarship award. The allocation is checked against the fund's designated purpose before release.",
        icon: Workflow,
        logFilename: "cerulea_donor_engine.log",
        logLines: [
          { text: "[SYS] Preparing allocation for SCHOLARSHIP_2026...", time: "11:50:14", tone: "default" },
          { text: "[CMD] allocate(fund: \"SCHOLARSHIP_2026\", award: \"MERIT_88\", amount: 250000)", time: "11:50:14", tone: "primary" },
          { text: "[SYS] Purpose match confirmed, no cross-subsidy.", time: "11:50:15", tone: "default" },
          { text: "[OK] Allocation approved for release.", time: "11:50:15", tone: "success" },
        ],
      },
      {
        label: "Expenditure Anchor",
        description:
          "The scholarship is awarded and the disbursement is anchored. The beneficiary record and supporting document are sealed to the expenditure.",
        icon: FileCheck,
        logFilename: "cerulea_donor_engine.log",
        logLines: [
          { text: "[SYS] Anchoring scholarship disbursement...", time: "14:22:41", tone: "default" },
          { text: "[CMD] anchorSpend(award: \"MERIT_88\", beneficiary: \"stu_44120\", doc: \"AWARD_LETTER\")", time: "14:22:41", tone: "primary" },
          { text: "[AUTH] Hashing award letter and sealing to fund...", time: "14:22:42", tone: "secondary" },
          { text: "[OK] Expenditure recorded, tamper-evident.", time: "14:22:42", tone: "success" },
        ],
      },
      {
        label: "Donor Notification",
        description:
          "The donor portal updates and the alumnus is notified that their gift funded a named scholarship. They can view the itemized impact of their contribution.",
        icon: Search,
        logFilename: "cerulea_donor_engine.log",
        logLines: [
          { text: "[SYS] Resolving impact for donor alum_3391...", time: "15:47:09", tone: "default" },
          { text: "[CMD] notifyDonor(alum_3391, award: \"MERIT_88\")", time: "15:47:09", tone: "primary" },
          { text: "[SYS] Assembling itemized expenditure trail...", time: "15:47:09", tone: "default" },
          { text: "[OK] Donor notified. Gift traced to scholarship.", time: "15:47:10", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes donation transparency into modular contracts. Each layer escrows gifts by purpose, allocates against designation, anchors expenditure, and exposes impact so donors see exactly where their money went.",
    layers: [
      {
        title: "Designated Escrow",
        subtitle: "The Purpose Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Purpose Vault",
          description:
            "The foundational settlement layer. It holds each gift against its designated fund and encodes release rules, so a scholarship donation can never be spent on general operations and cross-subsidy is impossible at the protocol level.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract DonationVault {\n  struct Fund {\n    string purpose;\n    uint256 balance;\n  }\n\n  mapping(bytes32 => Fund) public funds;\n  mapping(bytes32 => uint256) public giftOf;\n\n  function receiveGift(bytes32 fundId, bytes32 giftId) external payable {\n    funds[fundId].balance += msg.value;\n    giftOf[giftId] = msg.value;\n  }\n}",
        simAction: "Simulate Designated Gift",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading donation from alum_3391...", tone: "default" },
          { text: "Binding gift to SCHOLARSHIP_2026 fund...", tone: "default" },
          { text: "Encoding designated release rules...", tone: "default" },
          { text: "Writing fund balance to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Gift locked to designated fund.", tone: "success" },
        ],
      },
      {
        title: "Allocation Gate",
        subtitle: "The Designation Check",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Designation Check",
          description:
            "Enforces that money follows intent. It verifies an allocation matches the fund's stated purpose before release, so an advancement office cannot divert a designated gift to an unrelated line item.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function allocate(bytes32 fundId, bytes32 target, uint256 amount) external onlyAdvancement {\n    require(purposeMatches(fundId, target), \"Purpose mismatch\");\n    require(funds[fundId].balance >= amount, \"Insufficient\");\n    pending[target] = amount;\n    emit Allocated(fundId, target, amount);\n}",
        simAction: "Simulate Fund Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing allocation to award MERIT_88...", tone: "default" },
          { text: "Checking purpose match against fund...", tone: "default" },
          { text: "Confirming sufficient designated balance...", tone: "default" },
          { text: "Staging allocation for expenditure...", tone: "default" },
          { text: "[SUCCESS] Allocation approved within designation.", tone: "success" },
        ],
      },
      {
        title: "Expenditure Notary",
        subtitle: "The Spend Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Spend Seal",
          description:
            "Anchors proof of how money was used. It seals each disbursement with its beneficiary and supporting document digest, so a donor can trace a released tranche to the exact scholarship or invoice it funded.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorSpend(bytes32 target, address beneficiary, bytes32 docHash) external onlyAdvancement {\n    expenditures[target] = Spend(beneficiary, docHash, block.timestamp);\n    funds[fundOf[target]].balance -= pending[target];\n    emit SpendAnchored(target, beneficiary, docHash);\n}",
        simAction: "Simulate Expenditure Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording scholarship award MERIT_88...", tone: "default" },
          { text: "Hashing award letter document...", tone: "default" },
          { text: "Sealing beneficiary stu_44120 to spend...", tone: "default" },
          { text: "Debiting designated fund balance...", tone: "default" },
          { text: "[SUCCESS] Expenditure anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Donor Window",
        subtitle: "The Impact View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Impact View",
          description:
            "A read gateway that resolves a donor's gifts to the expenditures they funded. It assembles an itemized impact trail and triggers a notification, turning transparency into a repeat-giving driver.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function donorImpact(address donor) external view returns (Spend[] memory) {\n    bytes32[] memory gifts = giftsBy[donor];\n    return resolveSpends(gifts);\n}",
        simAction: "Simulate Donor View",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Donor alum_3391 opens impact portal...", tone: "default" },
          { text: "Resolving gifts to funded expenditures...", tone: "default" },
          { text: "Assembling itemized impact trail...", tone: "default" },
          { text: "Dispatching impact notification...", tone: "default" },
          { text: "[SUCCESS] Gift traced to named scholarship.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Designated-gift transparency is a horizontal capability. Here is how different institutions put the donor ledger to work.",
    sectors: [
      { icon: GraduationCap, title: "University Advancement", description: "Give alumni itemized proof that scholarship, building, and research gifts reached their designated purpose, converting one-time donors into repeat givers through demonstrated impact.", assetTypes: ["Designated Funds", "Scholarship Awards", "Impact Reports"] },
      { icon: Gift, title: "Foundations & Endowments", description: "Segregate restricted funds on-chain and prove compliance with donor intent to boards and regulators, replacing manual restricted-fund reconciliation with a live audit trail.", assetTypes: ["Restricted Funds", "Endowment Draws", "Compliance Records"] },
      { icon: Building2, title: "Capital Campaign Offices", description: "Track pledges through to completed construction or equipment purchases, showing major donors exactly which building or lab their named gift delivered.", assetTypes: ["Capital Pledges", "Construction Draws", "Naming Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy advancement CRM or accepting gifts directly from donor wallets, Cerulea routes both into one transparent fund record.",
    tracks: [
      {
        title: "Track A: Advancement CRM Bridging",
        description:
          "For institutions on legacy fundraising systems. Gift and expenditure events are translated into on-chain escrow and notary calls through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Advancement CRM", sublabel: "Fundraising Back Office", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Escrow & Notary", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Designated Fund Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Donor Giving",
        description:
          "For alumni giving from a wallet. A signed contribution locks directly to a designated fund and streams impact notifications back to the donor.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Donor Wallet / Portal", sublabel: "Alumni Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Fund Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Donation Record", icon: Gift, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a donor transparency portal with designated escrow, expenditure anchoring, and per-donor impact tracking from scratch requires specialised settlement engineers and long CRM integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Fund & Expenditure Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects enterprise fundraising-system integration benchmarks. Building designated escrow, wiring expenditure anchoring into an advancement CRM, and shipping a per-donor impact portal for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your fund and expenditure rules into pre-audited WebAssembly binaries and provisions the designated fund ledger and donor portal instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "international-student-visa-sponsorship-and-compliance-tracking",
    icon: IdCard,
    eyebrow: "Sponsorship Compliance Layer",
    headline1: "Sponsor with proof.",
    headline2: "Report without scramble.",
    heroDescription:
      "Stand up a verified tracking system for international student visa sponsorship and enrollment compliance, ready for immigration authority reporting. Each sponsored student's enrollment and academic status is held as verified records, with automatic alerts when a change requires reporting.",
    heroCta: "Deploy Compliance Trackers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn continuous visa-sponsorship monitoring into verified status records that surface reportable events the moment they occur.",
    mechanics: [
      { title: "Sponsorship Credential", description: "Anchor the sponsorship itself. The DID and VC Ledger binds a visa sponsorship to the student's verified identity, so the university's sponsoring obligation rests on a signed record rather than a spreadsheet row." },
      { title: "Enrollment Attestation", description: "Confirm continued enrollment on a defined cadence. The Compliance Attestations module records that a sponsored student remains enrolled and in good standing, replacing a manual status sweep before each reporting deadline." },
      { title: "Verified Student Identity", description: "Tie every record to the right person. The Civil Registry anchors a durable identity so enrollment, progress, and status events cannot be attributed to the wrong sponsored student." },
      { title: "Status Change Alerts", description: "Catch reportable events instantly. When enrollment lapses or academic progress falls below the required threshold, the contract flags the change and alerts the international student office to file with immigration promptly." },
      { title: "Authority Reporting View", description: "Give immigration a verifiable window. Authorities read a read-only compliance record instead of receiving ad-hoc emails, clearing status confirmations against on-chain evidence." },
      { title: "Immutable Compliance History", description: "Keep an audit-ready trail. Every enrollment attestation and status change is written as a tamper-evident event, so a sponsorship audit is answered from a complete history rather than reconstructed by hand." },
    ],
    lifecycleTitle: "The Sponsorship Lifecycle",
    lifecycleSubtitle:
      "Follow a single sponsored student from visa sponsorship through enrollment attestation to an automatic reporting alert.",
    lifecycleSteps: [
      {
        label: "Sponsorship Issued",
        description:
          "The university issues a visa sponsorship credential bound to the student's identity. The sponsoring obligation and reporting conditions are anchored on-chain.",
        icon: IdCard,
        logFilename: "cerulea_sponsorship_engine.log",
        logLines: [
          { text: "[SYS] Initializing visa sponsorship record...", time: "08:52:31", tone: "default" },
          { text: "[CMD] sponsor { student: \"intl_6620\", program: \"MS_DS\", visa: \"F1\" }", time: "08:52:31", tone: "primary" },
          { text: "[AUTH] Binding sponsorship to verified identity...", time: "08:52:32", tone: "secondary" },
          { text: "[OK] Sponsorship anchored at block 7101223.", time: "08:52:32", tone: "success" },
        ],
      },
      {
        label: "Enrollment Attestation",
        description:
          "Each term the registrar attests that the student remains enrolled and meets progress requirements. The confirmation is recorded as a signed compliance event.",
        icon: FileCheck,
        logFilename: "cerulea_sponsorship_engine.log",
        logLines: [
          { text: "[SYS] Running term compliance attestation...", time: "10:18:07", tone: "default" },
          { text: "[CMD] attestEnrollment(student: \"intl_6620\", term: \"FALL26\", status: \"FULL_TIME\")", time: "10:18:07", tone: "primary" },
          { text: "[SYS] Progress threshold check passed.", time: "10:18:08", tone: "default" },
          { text: "[OK] Enrollment attested, compliance current.", time: "10:18:08", tone: "success" },
        ],
      },
      {
        label: "Status Change",
        description:
          "The student drops below full-time load. The contract detects the reportable change and raises an alert to the international student office.",
        icon: Zap,
        logFilename: "cerulea_sponsorship_engine.log",
        logLines: [
          { text: "[SYS] Detecting enrollment status change...", time: "13:41:52", tone: "default" },
          { text: "[CMD] updateStatus(student: \"intl_6620\", status: \"PART_TIME\")", time: "13:41:52", tone: "primary" },
          { text: "[AUTH] Evaluating against reporting conditions...", time: "13:41:53", tone: "secondary" },
          { text: "[OK] Reportable event flagged. Office alerted.", time: "13:41:53", tone: "error" },
        ],
      },
      {
        label: "Authority Report",
        description:
          "The office files with immigration and the report is anchored against the student's record. The authority verifies the status change from the on-chain compliance history.",
        icon: Landmark,
        logFilename: "cerulea_sponsorship_engine.log",
        logLines: [
          { text: "[SYS] Preparing immigration status report...", time: "15:09:44", tone: "default" },
          { text: "[CMD] fileReport(student: \"intl_6620\", event: \"PART_TIME\", authority: \"SEVIS\")", time: "15:09:44", tone: "primary" },
          { text: "[SYS] Anchoring report to compliance history...", time: "15:09:45", tone: "default" },
          { text: "[OK] Report filed and verifiable on-chain.", time: "15:09:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes sponsorship compliance into modular contracts. Each layer anchors identity, issues sponsorship, attests enrollment, and detects reportable events without a manual status sweep before every deadline.",
    layers: [
      {
        title: "Identity Anchor",
        subtitle: "The Sponsored Student",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sponsored Student",
          description:
            "The foundational identity layer. It anchors a durable identity for each sponsored student, so every enrollment attestation and status event attaches to the correct person and cannot be misfiled against another record.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SponsorshipRegistry {\n  struct Sponsorship {\n    bytes32 studentDID;\n    string program;\n    bytes4 visaClass;\n    bool active;\n  }\n\n  mapping(bytes32 => Sponsorship) public sponsorships;\n\n  function sponsor(bytes32 id, bytes32 did, string calldata prog, bytes4 visa) external onlyUniversity {\n    sponsorships[id] = Sponsorship(did, prog, visa, true);\n  }\n}",
        simAction: "Simulate Sponsorship Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading student identity intl_6620...", tone: "default" },
          { text: "Binding sponsorship to F1 visa class...", tone: "default" },
          { text: "Encoding reporting obligation...", tone: "default" },
          { text: "Writing sponsorship to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Sponsorship anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Attestation Engine",
        subtitle: "The Enrollment Check",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Enrollment Check",
          description:
            "The recurring compliance hook. It records a signed attestation each term that a sponsored student remains enrolled and meets progress rules, so compliance is a continuous on-chain state rather than a pre-deadline scramble.",
          platformFunction: "Compliance & Attestation",
        },
        codeSnippet:
          "function attestEnrollment(bytes32 id, string calldata term, bytes1 load) external onlyRegistrar {\n    require(sponsorships[id].active, \"Not sponsored\");\n    attestations[id][term] = Attestation(load, block.timestamp);\n    emit EnrollmentAttested(id, term, load);\n}",
        simAction: "Simulate Enrollment Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Opening term FALL26 for intl_6620...", tone: "default" },
          { text: "Confirming full-time enrollment load...", tone: "default" },
          { text: "Checking academic progress threshold...", tone: "default" },
          { text: "Recording signed compliance attestation...", tone: "default" },
          { text: "[SUCCESS] Enrollment attested, status current.", tone: "success" },
        ],
      },
      {
        title: "Event Detector",
        subtitle: "The Reporting Trigger",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reporting Trigger",
          description:
            "Watches for reportable change. It evaluates each status update against the sponsorship's reporting conditions and raises an alert when a lapse or progress failure requires an immigration filing, so nothing slips past a deadline.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function updateStatus(bytes32 id, bytes1 newStatus) external onlyRegistrar {\n    statuses[id] = newStatus;\n    if (isReportable(newStatus)) {\n        emit ReportableEvent(id, newStatus, block.timestamp);\n    }\n}",
        simAction: "Simulate Status Change",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving status update for intl_6620...", tone: "default" },
          { text: "Comparing against reporting conditions...", tone: "default" },
          { text: "Classifying part-time load as reportable...", tone: "default" },
          { text: "Raising alert to student office...", tone: "default" },
          { text: "[SUCCESS] Reportable event flagged on-chain.", tone: "success" },
        ],
      },
      {
        title: "Authority Window",
        subtitle: "The Immigration View",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Immigration View",
          description:
            "A read-only gateway for immigration authorities. It exposes the sponsored student's compliance history and filed reports, so an authority confirms status against on-chain evidence instead of chasing the university by email.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function complianceHistory(bytes32 id) external view onlyAuthority returns (Attestation[] memory, Report[] memory) {\n    return (attestationLog[id], reports[id]);\n}",
        simAction: "Simulate Authority Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Authority queries record for intl_6620...", tone: "default" },
          { text: "Assembling term attestation history...", tone: "default" },
          { text: "Attaching filed status reports...", tone: "default" },
          { text: "Confirming reporting obligation met...", tone: "default" },
          { text: "[SUCCESS] Compliance verified from ledger.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Sponsorship compliance is a horizontal capability. Here is how different actors put the verified status ledger to work.",
    sectors: [
      { icon: GraduationCap, title: "International Student Offices", description: "Replace pre-deadline status sweeps with continuous on-chain attestation and automatic alerts, protecting the institution's sponsorship privileges against a missed reporting obligation.", assetTypes: ["Sponsorship Records", "Status Alerts", "Reporting Logs"] },
      { icon: Landmark, title: "Immigration Authorities", description: "Confirm a sponsored student's enrollment and status against a verifiable record instead of correspondence, accelerating status checks and reducing fraud in the sponsorship pipeline.", assetTypes: ["Status Confirmations", "Compliance Histories", "Filed Reports"] },
      { icon: Building2, title: "Enterprise Training Sponsors", description: "Track sponsored trainees on employer-backed study visas with the same verified compliance trail, giving corporate mobility teams audit-ready evidence of continued eligibility.", assetTypes: ["Sponsored Trainees", "Eligibility Records", "Mobility Audits"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy student information system or capturing registrar attestations directly, Cerulea routes both into one verifiable compliance record.",
    tracks: [
      {
        title: "Track A: Registrar System Bridging",
        description:
          "For universities on legacy student systems. Enrollment and status events are translated into on-chain attestations and reportable-event checks through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy SIS", sublabel: "Registrar Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Attestation & Alerts", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sponsorship Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Authority Reporting Access",
        description:
          "For immigration authorities reading compliance directly. A read-only gateway exposes verified status history and filed reports without an ad-hoc email exchange.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Authority Portal", sublabel: "Immigration Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Compliance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Status Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a sponsorship compliance system with verified identity, recurring attestation, and reportable-event detection from scratch requires specialised compliance engineers and long systems integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attestation & Reporting Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects regulatory-compliance integration benchmarks. Wiring enrollment attestation into a student system, building reportable-event detection, and shipping an authority reporting view for an average institution takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attestation and reporting rules into pre-audited WebAssembly binaries and provisions the compliance ledger and authority view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "faculty-research-output-and-citation-verification-for-promotions",
    icon: ScrollText,
    eyebrow: "Research Verification Layer",
    headline1: "Verify the record.",
    headline2: "Judge on evidence.",
    heroDescription:
      "Run a verified record of faculty publications and citation counts, giving promotion committees a trustworthy basis for evaluating research output. Verified publication records and citation data from recognized sources are anchored on-chain, replacing self-reported lists that are hard to check across many candidates.",
    heroCta: "Deploy Research Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a self-reported CV into an anchored, indexed record a promotion committee can trust for every candidate.",
    mechanics: [
      { title: "Authorship Credential", description: "Bind each publication to its author. The DID and VC Ledger ties a paper to the faculty member's verified identity, so authorship claims rest on signed evidence rather than a line typed into a CV." },
      { title: "Publication Notary", description: "Anchor the work itself. The Provenance Notary seals each publication and its venue by digest, making a fabricated or misattributed paper detectable against the recorded evidence." },
      { title: "Citation Indexer", description: "Aggregate metrics from recognized sources. The Subgraph Indexer compiles citation counts from indexed data, so a committee reads a consistent, source-backed figure instead of a self-reported number." },
      { title: "Committee Dashboard", description: "Give reviewers one verified view. Each candidate's anchored publications and indexed citations render in a single dashboard, replacing hours of independent verification across dozens of files." },
      { title: "Tamper-Evident Metrics", description: "Freeze the record at review time. Publication and citation data are anchored as immutable events, so a candidate's evaluated output cannot be inflated between submission and decision." },
      { title: "Cross-Institution Portability", description: "Carry the record between employers. A faculty member's verified output travels with their identity, so a new institution evaluates the same anchored evidence without rebuilding the file from scratch." },
    ],
    lifecycleTitle: "The Verification Lifecycle",
    lifecycleSubtitle:
      "Follow a single faculty publication from authorship anchoring through citation indexing to a promotion committee review.",
    lifecycleSteps: [
      {
        label: "Authorship Anchor",
        description:
          "A faculty member anchors a new publication to their verified identity. The paper and venue are sealed as the immutable authorship record.",
        icon: ScrollText,
        logFilename: "cerulea_research_engine.log",
        logLines: [
          { text: "[SYS] Initializing authorship record...", time: "09:07:19", tone: "default" },
          { text: "[CMD] anchorPaper { author: \"fac_2201\", doi: \"10.1109/TX.2026.771\", venue: \"IEEE_TX\" }", time: "09:07:19", tone: "primary" },
          { text: "[AUTH] Binding paper to verified faculty identity...", time: "09:07:20", tone: "secondary" },
          { text: "[OK] Publication anchored at block 7402118.", time: "09:07:20", tone: "success" },
        ],
      },
      {
        label: "Citation Indexing",
        description:
          "The indexer compiles citation counts for the publication from recognized sources. The aggregated metric is written against the paper's record.",
        icon: Activity,
        logFilename: "cerulea_research_engine.log",
        logLines: [
          { text: "[SYS] Polling indexed citation sources...", time: "12:33:48", tone: "default" },
          { text: "[CMD] indexCitations(doi: \"10.1109/TX.2026.771\")", time: "12:33:48", tone: "primary" },
          { text: "[SYS] Aggregated 148 citations from recognized sources.", time: "12:33:49", tone: "default" },
          { text: "[OK] Citation metric written to record.", time: "12:33:49", tone: "success" },
        ],
      },
      {
        label: "Record Freeze",
        description:
          "At promotion submission the candidate's output is frozen. The publication set and citation counts are locked as the evidence for review.",
        icon: Lock,
        logFilename: "cerulea_research_engine.log",
        logLines: [
          { text: "[SYS] Freezing output snapshot for fac_2201...", time: "14:58:02", tone: "default" },
          { text: "[CMD] freezeDossier(author: \"fac_2201\", cycle: \"PROMO_2026\")", time: "14:58:02", tone: "primary" },
          { text: "[AUTH] Sealing 22 publications and citation totals...", time: "14:58:03", tone: "secondary" },
          { text: "[OK] Dossier frozen, tamper-evident for review.", time: "14:58:03", tone: "success" },
        ],
      },
      {
        label: "Committee Review",
        description:
          "The promotion committee opens the verified dashboard. Anchored publications and source-backed citations are read directly, with no independent re-verification.",
        icon: Search,
        logFilename: "cerulea_research_engine.log",
        logLines: [
          { text: "[SYS] Committee requesting verified dossier...", time: "16:24:37", tone: "default" },
          { text: "[CMD] resolveDossier(author: \"fac_2201\", cycle: \"PROMO_2026\")", time: "16:24:37", tone: "primary" },
          { text: "[SYS] Assembling anchored output and metrics...", time: "16:24:37", tone: "default" },
          { text: "[OK] Verified record returned to committee.", time: "16:24:38", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes research verification into modular contracts. Each layer anchors authorship, indexes citations, freezes the review snapshot, and exposes a verified dashboard without any candidate self-reporting the numbers.",
    layers: [
      {
        title: "Authorship Anchor",
        subtitle: "The Publication Seal",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Publication Seal",
          description:
            "The foundational provenance layer. It binds each paper to a faculty member's verified identity and seals the venue by digest, so authorship and place of publication cannot be fabricated or misattributed on a CV.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "contract ResearchRegistry {\n  struct Paper {\n    bytes32 authorDID;\n    string doi;\n    string venue;\n    uint256 citations;\n  }\n\n  mapping(bytes32 => Paper) public papers;\n\n  function anchorPaper(bytes32 id, bytes32 did, string calldata doi, string calldata venue) external {\n    papers[id] = Paper(did, doi, venue, 0);\n  }\n}",
        simAction: "Simulate Authorship Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading faculty identity fac_2201...", tone: "default" },
          { text: "Sealing DOI and venue IEEE_TX...", tone: "default" },
          { text: "Binding paper to author identity...", tone: "default" },
          { text: "Writing publication to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Authorship anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Citation Indexer",
        subtitle: "The Metric Aggregator",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Metric Aggregator",
          description:
            "The verification hook for impact. It compiles citation counts from recognized indexed sources and writes the total to each paper, so a committee reads a source-backed figure rather than a candidate's self-report.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function indexCitations(bytes32 id, uint256 count, bytes calldata proof) external onlyIndexer {\n    require(verifySource(proof), \"Invalid source\");\n    papers[id].citations = count;\n    emit CitationsIndexed(id, count);\n}",
        simAction: "Simulate Citation Index",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Querying recognized citation sources...", tone: "default" },
          { text: "Validating source signatures...", tone: "default" },
          { text: "Aggregating 148 citations for paper...", tone: "default" },
          { text: "Writing metric to publication record...", tone: "default" },
          { text: "[SUCCESS] Citation total verified on-chain.", tone: "success" },
        ],
      },
      {
        title: "Dossier Freeze",
        subtitle: "The Review Snapshot",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Review Snapshot",
          description:
            "Locks the evidence for a cycle. It seals a candidate's publication set and citation totals at submission, so the output evaluated by a committee cannot be altered between filing and the promotion decision.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function freezeDossier(bytes32 authorDID, string calldata cycle) external {\n    bytes32[] memory set = papersBy[authorDID];\n    dossiers[authorDID][cycle] = keccak256(abi.encode(set, block.timestamp));\n    emit DossierFrozen(authorDID, cycle);\n}",
        simAction: "Simulate Dossier Freeze",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Gathering publications for fac_2201...", tone: "default" },
          { text: "Snapshotting citation totals...", tone: "default" },
          { text: "Sealing 22-paper dossier PROMO_2026...", tone: "default" },
          { text: "Locking evidence against later edits...", tone: "default" },
          { text: "[SUCCESS] Dossier frozen, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Committee Window",
        subtitle: "The Reviewer View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reviewer View",
          description:
            "A read gateway that resolves a frozen dossier to anchored publications and source-backed metrics. It gives every reviewer the same verified record, removing hours of independent verification per candidate.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveDossier(bytes32 authorDID, string calldata cycle) external view returns (Paper[] memory) {\n    require(dossiers[authorDID][cycle] != 0, \"Not frozen\");\n    return resolvePapers(authorDID);\n}",
        simAction: "Simulate Committee Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Committee opens dossier for fac_2201...", tone: "default" },
          { text: "Resolving anchored publication set...", tone: "default" },
          { text: "Attaching source-backed citation totals...", tone: "default" },
          { text: "Rendering unified verification view...", tone: "default" },
          { text: "[SUCCESS] Verified research record returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified research output is a horizontal capability. Here is how different academic actors put the anchored record to work.",
    sectors: [
      { icon: GraduationCap, title: "Promotion & Tenure Committees", description: "Evaluate candidates from a consistent, verified record of publications and citations, removing the burden of independently checking self-reported CVs across a large applicant pool.", assetTypes: ["Faculty Dossiers", "Citation Metrics", "Review Snapshots"] },
      { icon: FlaskConical, title: "Research Offices & Deans", description: "Report institutional research output against anchored evidence for rankings and accreditation, replacing manually compiled publication counts with an auditable on-chain aggregate.", assetTypes: ["Output Reports", "Impact Aggregates", "Accreditation Records"] },
      { icon: Building2, title: "Funders & Recruiting Institutions", description: "Assess a researcher's track record from portable, verified evidence during hiring or grant review, without rebuilding the publication file or trusting an unverified list.", assetTypes: ["Track Records", "Portable Dossiers", "Hiring Evidence"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a research information system or indexing citations from recognized sources, Cerulea routes both into one verified output record.",
    tracks: [
      {
        title: "Track A: Research System Bridging",
        description:
          "For institutions on legacy research information systems. Publication records are translated into on-chain authorship anchors through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy CRIS", sublabel: "Research Office Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Authorship Anchoring", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Research Output Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Indexed Source Feeds",
        description:
          "For citation data from recognized indices. Source-signed metrics are routed directly into the indexer and written against each anchored publication.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Citation Index Feed", sublabel: "Recognized Sources", icon: Fingerprint, accent: false },
          { label: "Subgraph Indexers", sublabel: "Metric Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Output Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verified research registry with authorship anchoring, citation indexing, and a frozen committee dashboard from scratch requires specialised data engineers and long source integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Authorship & Metric Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects research-data integration benchmarks. Anchoring authorship, wiring citation indexing from recognized sources, and shipping a frozen committee dashboard for an average institution takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your authorship and metric rules into pre-audited WebAssembly binaries and provisions the research output ledger and dashboard instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "course-completion-certificate-issuance-on-chain",
    icon: QrCode,
    eyebrow: "Certificate Issuance dApp",
    headline1: "Issue once.",
    headline2: "Verify anywhere.",
    heroDescription:
      "Stand up a public-chain certificate issuance dApp with soulbound tokens, badges, and an independent employer verification portal. Any employer can verify any learner's certificate without involving the platform at all.",
    heroCta: "Deploy Certificate dApps",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a downloadable PDF certificate into a non-transferable public-chain token any employer can check independently.",
    mechanics: [
      { title: "Soulbound Certificate", description: "Issue each certificate as a non-transferable token. The Soulbound Token module binds the credential to the learner's wallet so it cannot be sold or handed to another person, unlike a shareable PDF." },
      { title: "Learner Identity", description: "Anchor the holder. The DID and VC Ledger ties each certificate to a learner identity, so a verifier confirms who earned the credential and not merely that one exists." },
      { title: "Completion Notary", description: "Seal the achievement. The Provenance Notary anchors the course, completion date, and issuing platform by digest, making a forged certificate detectable against the on-chain record." },
      { title: "Independent Verification Portal", description: "Let employers check without the platform. A public verification portal resolves a certificate to a genuine or invalid result, so the platform is not a bottleneck or a single point of trust." },
      { title: "Badge Issuance", description: "Represent skills as portable badges. Stackable badges are minted alongside certificates, letting learners assemble a verifiable public profile of completed courses." },
      { title: "Public-Chain Portability", description: "Make credentials outlive the platform. Because certificates live on a public chain, a learner retains verifiable proof of completion even if they leave the platform or it changes hands." },
    ],
    lifecycleTitle: "The Issuance Lifecycle",
    lifecycleSubtitle:
      "Follow a single course completion from a learner finishing the course to independent verification by an employer.",
    lifecycleSteps: [
      {
        label: "Course Completion",
        description:
          "A learner finishes a course on the platform. The completion event and its criteria are recorded as the basis for the certificate.",
        icon: GraduationCap,
        logFilename: "cerulea_certificate_dapp.log",
        logLines: [
          { text: "[SYS] Registering course completion event...", time: "08:20:11", tone: "default" },
          { text: "[CMD] completeCourse { learner: \"lrn_9902\", course: \"SOLIDITY_301\" }", time: "08:20:11", tone: "primary" },
          { text: "[AUTH] Verifying completion criteria met...", time: "08:20:12", tone: "secondary" },
          { text: "[OK] Completion recorded at block 7801220.", time: "08:20:12", tone: "success" },
        ],
      },
      {
        label: "Certificate Mint",
        description:
          "The dApp mints a soulbound certificate token to the learner's wallet. The course and completion date are sealed to the credential.",
        icon: QrCode,
        logFilename: "cerulea_certificate_dapp.log",
        logLines: [
          { text: "[SYS] Executing soulbound mint protocol...", time: "08:20:14", tone: "default" },
          { text: "[CMD] mintCertificate(learner: \"lrn_9902\", course: \"SOLIDITY_301\", soulbound: true)", time: "08:20:14", tone: "primary" },
          { text: "[AUTH] Binding non-transferable token to wallet...", time: "08:20:15", tone: "secondary" },
          { text: "[OK] Certificate CERT_55210 minted to learner.", time: "08:20:15", tone: "success" },
        ],
      },
      {
        label: "Badge Issuance",
        description:
          "A stackable skill badge is issued alongside the certificate. The learner's public profile updates with the new verifiable credential.",
        icon: ShieldCheck,
        logFilename: "cerulea_certificate_dapp.log",
        logLines: [
          { text: "[SYS] Issuing stackable skill badge...", time: "08:20:17", tone: "default" },
          { text: "[CMD] issueBadge(learner: \"lrn_9902\", skill: \"SMART_CONTRACTS\")", time: "08:20:17", tone: "primary" },
          { text: "[SYS] Appending badge to learner profile...", time: "08:20:17", tone: "default" },
          { text: "[OK] Badge issued and publicly resolvable.", time: "08:20:18", tone: "success" },
        ],
      },
      {
        label: "Employer Verification",
        description:
          "An employer scans the certificate and the portal checks it on the public chain. A genuine credential returns valid with no request to the platform.",
        icon: Search,
        logFilename: "cerulea_certificate_dapp.log",
        logLines: [
          { text: "[SYS] Public verification request for CERT_55210...", time: "11:44:53", tone: "default" },
          { text: "[CMD] verifyCertificate(CERT_55210)", time: "11:44:53", tone: "primary" },
          { text: "[SYS] Resolving token on public chain...", time: "11:44:53", tone: "default" },
          { text: "[OK] Certificate valid, issued to lrn_9902.", time: "11:44:54", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes certificate issuance into modular contracts. Each layer records completion, mints a soulbound token, issues badges, and exposes independent verification without the platform mediating trust.",
    layers: [
      {
        title: "Completion Registry",
        subtitle: "The Achievement Anchor",
        icon: GraduationCap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Achievement Anchor",
          description:
            "The foundational data layer. It records each learner's course completion and the criteria met, forming the immutable basis that a certificate token later points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CompletionRegistry {\n  struct Completion {\n    bytes32 learnerDID;\n    string course;\n    uint256 completedAt;\n  }\n\n  mapping(bytes32 => Completion) public completions;\n\n  function complete(bytes32 id, bytes32 did, string calldata course) external onlyPlatform {\n    completions[id] = Completion(did, course, block.timestamp);\n  }\n}",
        simAction: "Simulate Completion Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading learner identity lrn_9902...", tone: "default" },
          { text: "Confirming SOLIDITY_301 criteria met...", tone: "default" },
          { text: "Recording completion timestamp...", tone: "default" },
          { text: "Writing completion to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Course completion anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Soulbound Mint",
        subtitle: "The Non-Transferable Token",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Non-Transferable Token",
          description:
            "The issuance engine. It mints a certificate bound permanently to the learner's wallet and blocks transfer, so a credential cannot be sold or impersonated the way a downloadable PDF can.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function mintCertificate(bytes32 completionId, address learner) external onlyPlatform {\n    uint256 tokenId = _mint(learner, completionId);\n    soulbound[tokenId] = true;\n    emit CertificateMinted(tokenId, learner, completionId);\n}\n\nfunction _transfer(address, address, uint256 id) internal pure {\n    require(!soulbound[id], \"Soulbound: non-transferable\");\n}",
        simAction: "Simulate Soulbound Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading completion for lrn_9902...", tone: "default" },
          { text: "Minting certificate CERT_55210...", tone: "default" },
          { text: "Setting soulbound non-transfer flag...", tone: "default" },
          { text: "Binding token to learner wallet...", tone: "default" },
          { text: "[SUCCESS] Non-transferable certificate minted.", tone: "success" },
        ],
      },
      {
        title: "Badge Module",
        subtitle: "The Skill Stack",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Skill Stack",
          description:
            "Represents skills as portable badges. It issues a stackable badge alongside each certificate and appends it to the learner's public profile, letting a verifiable skill record accumulate over time.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function issueBadge(address learner, bytes32 skill) external onlyPlatform {\n    badges[learner].push(skill);\n    emit BadgeIssued(learner, skill);\n}",
        simAction: "Simulate Badge Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing badge for skill SMART_CONTRACTS...", tone: "default" },
          { text: "Appending badge to learner profile...", tone: "default" },
          { text: "Updating public skill stack...", tone: "default" },
          { text: "Emitting badge issuance event...", tone: "default" },
          { text: "[SUCCESS] Skill badge issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Verification Portal",
        subtitle: "The Independent Check",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Independent Check",
          description:
            "A public gateway that resolves a certificate on the public chain. It lets any employer verify a credential without an account and without the platform in the loop, so the issuer is never a bottleneck or a trust dependency.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyCertificate(uint256 tokenId) external view returns (bool, bytes32) {\n    Completion memory c = completions[completionOf[tokenId]];\n    return (ownerOf(tokenId) != address(0), c.learnerDID);\n}",
        simAction: "Simulate Independent Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Employer scans certificate CERT_55210...", tone: "default" },
          { text: "Resolving token on public chain...", tone: "default" },
          { text: "Confirming learner binding lrn_9902...", tone: "default" },
          { text: "Checking soulbound status intact...", tone: "default" },
          { text: "[SUCCESS] Certificate verified without platform.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Independent certificate verification is a horizontal capability. Here is how different actors put the public-chain issuance dApp to work.",
    sectors: [
      { icon: GraduationCap, title: "Online Learning Platforms", description: "Issue globally verifiable certificates that employers check without contacting support, turning credential integrity into a differentiator and removing the platform as a verification bottleneck.", assetTypes: ["Course Certificates", "Skill Badges", "Learner Profiles"] },
      { icon: Building2, title: "Employers & Recruiters", description: "Confirm a candidate's completed courses on the public chain during screening, eliminating fake certificate PDFs and the need to email a learning platform for confirmation.", assetTypes: ["Screening Checks", "Skill Verifications", "Candidate Profiles"] },
      { icon: Users, title: "Professional Bodies", description: "Recognize platform certificates toward continuing-education requirements from a verifiable record, streamlining member accreditation without manual certificate collection.", assetTypes: ["CE Records", "Member Credentials", "Accreditation Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are issuing from a learning platform backend or letting learners hold certificates in a wallet, Cerulea routes both onto one public-chain credential record.",
    tracks: [
      {
        title: "Track A: Platform Backend Issuance",
        description:
          "For learning platforms on existing course systems. Completion events are translated into soulbound certificate mints through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Learning Platform Backend", sublabel: "Course Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Certificate Minting", icon: Server, accent: true },
          { label: "Cerulea Public L1", sublabel: "Certificate Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Learner Wallet Holding",
        description:
          "For learners holding certificates on mobile. A wallet holds each soulbound token and presents it to any independent verification portal.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Learner Wallet", sublabel: "Holder Devices", icon: Fingerprint, accent: false },
          { label: "Public Verifiers", sublabel: "Independent Portals", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Shared Certificate Record", icon: QrCode, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a public-chain certificate dApp with soulbound tokens, stackable badges, and an independent verification portal from scratch requires specialised smart-contract engineers and long audit cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Issuance & Badge Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects public-chain dApp development benchmarks. Writing soulbound token logic, building a badge system, and shipping an independent verification portal for an average platform takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your issuance and badge rules into pre-audited WebAssembly binaries and provisions the public certificate registry and verification portal instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "instructor-revenue-share-for-multi-creator-course-bundles",
    icon: PieChart,
    eyebrow: "Royalty Settlement Layer",
    headline1: "Split the bundle.",
    headline2: "Pay by the proof.",
    heroDescription:
      "Automate the revenue split for bundled courses based on each instructor's share of verified student enrollment and engagement. Each creator's share is calculated from verified data and paid out automatically, with no manual monthly reconciliation.",
    heroCta: "Deploy Revenue Splits",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manual monthly spreadsheet split into an on-chain royalty distribution driven by verified enrollment and engagement.",
    mechanics: [
      { title: "Verified Engagement Feed", description: "Base the split on real usage. Enrollment and engagement per course are recorded as verified data, so each instructor's share reflects actual student activity rather than an estimate." },
      { title: "Royalty Standard", description: "Encode each creator's entitlement. The Royalty Standard module defines how bundle revenue maps to instructors, turning a negotiated split into an on-chain rule the contract enforces every cycle." },
      { title: "Automated Clearing", description: "Distribute without a finance run. The Royalty Clearing module computes each share from the engagement feed and settles payouts automatically, removing the monthly manual calculation entirely." },
      { title: "Wallet Authentication", description: "Pay the right creator. The Wallet Authentication module ties each payout to an instructor's authenticated wallet, so revenue reaches the verified creator and not a mistyped account." },
      { title: "Transparent Split Ledger", description: "Show every creator the math. Each distribution records the engagement inputs and resulting shares, so an instructor can audit exactly why they received a given amount for a bundle." },
      { title: "Dynamic Rebalancing", description: "Follow shifting popularity. As enrollment and engagement change across a bundle, the split rebalances each cycle, so a course that gains traction earns a larger share automatically." },
    ],
    lifecycleTitle: "The Revenue Lifecycle",
    lifecycleSubtitle:
      "Follow a single bundle's revenue from student purchases through engagement measurement to automatic instructor payouts.",
    lifecycleSteps: [
      {
        label: "Bundle Sale",
        description:
          "Students purchase a multi-creator course bundle over a cycle. Revenue accrues to the bundle's clearing pool for later distribution.",
        icon: Coins,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Accruing bundle revenue for cycle...", time: "09:15:33", tone: "default" },
          { text: "[CMD] accrueRevenue { bundle: \"WEB3_PACK\", amount: 820000 }", time: "09:15:33", tone: "primary" },
          { text: "[AUTH] Crediting clearing pool...", time: "09:15:34", tone: "secondary" },
          { text: "[OK] Revenue pool anchored at block 8102331.", time: "09:15:34", tone: "success" },
        ],
      },
      {
        label: "Engagement Tally",
        description:
          "The contract tallies verified enrollment and engagement per course in the bundle. The proportional weights are computed for the cycle.",
        icon: Activity,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Tallying verified engagement per course...", time: "12:40:19", tone: "default" },
          { text: "[CMD] tallyEngagement(bundle: \"WEB3_PACK\", cycle: \"2026M06\")", time: "12:40:19", tone: "primary" },
          { text: "[SYS] Weights computed: 3 courses, sum 1.00.", time: "12:40:20", tone: "default" },
          { text: "[OK] Engagement weights sealed for split.", time: "12:40:20", tone: "success" },
        ],
      },
      {
        label: "Share Computation",
        description:
          "The Royalty Clearing module maps weights to each instructor's entitlement. Individual shares of the pool are calculated on-chain.",
        icon: PieChart,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Computing instructor shares...", time: "12:40:22", tone: "default" },
          { text: "[CMD] computeShares(bundle: \"WEB3_PACK\", pool: 820000)", time: "12:40:22", tone: "primary" },
          { text: "[AUTH] Applying royalty standard entitlements...", time: "12:40:23", tone: "secondary" },
          { text: "[OK] Shares resolved for 3 instructors.", time: "12:40:23", tone: "success" },
        ],
      },
      {
        label: "Payout Settlement",
        description:
          "The contract settles each instructor's share to their authenticated wallet. The transparent split ledger records the inputs and amounts.",
        icon: Wallet,
        logFilename: "cerulea_royalty_engine.log",
        logLines: [
          { text: "[SYS] Executing automated payout run...", time: "12:40:25", tone: "default" },
          { text: "[CMD] settlePayouts(bundle: \"WEB3_PACK\", cycle: \"2026M06\")", time: "12:40:25", tone: "primary" },
          { text: "[SYS] Transferring shares to authenticated wallets...", time: "12:40:25", tone: "default" },
          { text: "[OK] Payouts settled. No manual reconciliation.", time: "12:40:26", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes revenue sharing into modular contracts. Each layer accrues revenue, tallies engagement, computes entitlements, and settles payouts without a manual monthly calculation.",
    layers: [
      {
        title: "Revenue Pool",
        subtitle: "The Bundle Vault",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Bundle Vault",
          description:
            "The foundational settlement layer. It accrues bundle sales into a clearing pool per cycle, forming the balance that instructor shares are later computed and distributed from.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract RoyaltyPool {\n  struct Pool {\n    uint256 balance;\n    bool distributed;\n  }\n\n  mapping(bytes32 => Pool) public pools;\n\n  function accrue(bytes32 bundleCycle) external payable {\n    pools[bundleCycle].balance += msg.value;\n    emit RevenueAccrued(bundleCycle, msg.value);\n  }\n}",
        simAction: "Simulate Revenue Accrual",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading bundle sale for WEB3_PACK...", tone: "default" },
          { text: "Crediting cycle clearing pool...", tone: "default" },
          { text: "Updating pool balance 820,000...", tone: "default" },
          { text: "Writing pool state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Bundle revenue accrued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Engagement Tally",
        subtitle: "The Weight Engine",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Weight Engine",
          description:
            "The measurement hook. It tallies verified enrollment and engagement per course and normalizes them into proportional weights, so each instructor's share tracks real student activity rather than a fixed guess.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function tallyEngagement(bytes32 bundle, bytes32 cycle) external onlyOracle {\n    uint256 total = sumEngagement(bundle, cycle);\n    for (uint i; i < courses[bundle].length; i++) {\n        weights[bundle][cycle][i] = engagement[bundle][cycle][i] * 1e18 / total;\n    }\n    emit WeightsComputed(bundle, cycle);\n}",
        simAction: "Simulate Engagement Tally",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified engagement per course...", tone: "default" },
          { text: "Summing total bundle engagement...", tone: "default" },
          { text: "Normalizing 3 course weights to 1.00...", tone: "default" },
          { text: "Sealing weights for the cycle...", tone: "default" },
          { text: "[SUCCESS] Engagement weights computed.", tone: "success" },
        ],
      },
      {
        title: "Share Resolver",
        subtitle: "The Entitlement Map",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Entitlement Map",
          description:
            "Maps weights to money. It applies the royalty standard to the pool and each course weight to resolve every instructor's exact share, turning a negotiated split into a deterministic on-chain computation.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function computeShares(bytes32 bundle, bytes32 cycle) external {\n    uint256 pool = pools[keccak256(abi.encode(bundle, cycle))].balance;\n    for (uint i; i < instructors[bundle].length; i++) {\n        shares[bundle][cycle][i] = pool * weights[bundle][cycle][i] / 1e18;\n    }\n    emit SharesResolved(bundle, cycle);\n}",
        simAction: "Simulate Share Computation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading pool balance for WEB3_PACK...", tone: "default" },
          { text: "Applying royalty standard entitlements...", tone: "default" },
          { text: "Multiplying weights against pool...", tone: "default" },
          { text: "Resolving shares for 3 instructors...", tone: "default" },
          { text: "[SUCCESS] Instructor shares resolved.", tone: "success" },
        ],
      },
      {
        title: "Payout Settlement",
        subtitle: "The Automated Clearing",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automated Clearing",
          description:
            "The end-of-cycle executor. It transfers each resolved share to an instructor's authenticated wallet and records the inputs, so payouts settle automatically with a transparent, auditable trail.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function settlePayouts(bytes32 bundle, bytes32 cycle) external {\n    for (uint i; i < instructors[bundle].length; i++) {\n        payable(instructors[bundle][i]).transfer(shares[bundle][cycle][i]);\n    }\n    pools[keccak256(abi.encode(bundle, cycle))].distributed = true;\n    emit PayoutsSettled(bundle, cycle);\n}",
        simAction: "Simulate Payout Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming authenticated instructor wallets...", tone: "default" },
          { text: "Transferring resolved shares...", tone: "default" },
          { text: "Recording split inputs to ledger...", tone: "default" },
          { text: "Marking cycle as distributed...", tone: "default" },
          { text: "[SUCCESS] Payouts settled automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated revenue sharing is a horizontal capability. Here is how different creator platforms put the royalty engine to work.",
    sectors: [
      { icon: GraduationCap, title: "Online Course Platforms", description: "Distribute bundle revenue to instructors by verified engagement every cycle, eliminating manual monthly reconciliation and disputes over how a package's earnings were split.", assetTypes: ["Course Bundles", "Engagement Weights", "Payout Records"] },
      { icon: Users, title: "Creator Collectives", description: "Let independent educators co-publish packages with a transparent, self-executing split, so each contributor is paid fairly for their share of student activity without a central bookkeeper.", assetTypes: ["Co-Published Bundles", "Contributor Shares", "Split Ledgers"] },
      { icon: Building2, title: "Corporate Content Marketplaces", description: "Compensate multiple content vendors in a subscription catalog by verified consumption, replacing negotiated flat fees with usage-based royalty clearing.", assetTypes: ["Vendor Catalogs", "Consumption Metrics", "Royalty Statements"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a platform's billing and analytics backend or settling directly to creator wallets, Cerulea routes both into one royalty clearing record.",
    tracks: [
      {
        title: "Track A: Platform Analytics Bridging",
        description:
          "For platforms with existing billing and engagement analytics. Revenue and engagement feeds are translated into on-chain accrual and tally calls through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Billing & Analytics Backend", sublabel: "Platform Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Accrual & Tally", icon: Server, accent: true },
          { label: "Cerulea Chain", sublabel: "Royalty Clearing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Creator Wallet Settlement",
        description:
          "For instructors receiving payouts directly. Authenticated creator wallets receive resolved shares each cycle from the clearing contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Creator Wallet", sublabel: "Instructor Devices", icon: Fingerprint, accent: false },
          { label: "Clearing Validators", sublabel: "Split Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Payout Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an automated royalty system with verified engagement weighting, entitlement resolution, and multi-wallet settlement from scratch requires specialised payments engineers and long analytics integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Royalty & Split Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects payments-platform integration benchmarks. Writing royalty entitlement logic, wiring verified engagement into a split engine, and shipping automated multi-wallet settlement for an average platform takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your royalty and split rules into pre-audited WebAssembly binaries and provisions the clearing ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "proctored-exam-integrity-and-certificate-validity-registry",
    icon: Shield,
    eyebrow: "Exam Integrity Registry",
    headline1: "Prove they passed.",
    headline2: "Prove it was watched.",
    heroDescription:
      "Build a public registry where employers verify both that a certificate is genuine and that the exam behind it was properly proctored. Proctoring integrity data is anchored alongside the issued certificate, so employers confirm not just a pass but a supervised one.",
    heroCta: "Deploy Integrity Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a plain pass certificate into a credential that carries verifiable proof the exam behind it was supervised.",
    mechanics: [
      { title: "Proctoring Attestation", description: "Anchor how the exam was supervised. The Provenance Notary seals the proctoring session's integrity data by digest, so a certificate carries evidence that the exam was watched, not merely that it was passed." },
      { title: "Certificate Credential", description: "Bind the pass to the candidate. The DID and VC Ledger ties the certificate to the candidate's verified identity, so an employer confirms who earned it and against which supervised session." },
      { title: "Soulbound Result", description: "Make the credential non-transferable. The Soulbound Token module binds the certificate to the holder's wallet, so a supervised pass cannot be sold or reassigned to another person." },
      { title: "Integrity Linkage", description: "Tie certificate to session permanently. Each certificate points to its proctoring record on-chain, so a verifier resolving the credential also sees the supervision evidence behind it in one query." },
      { title: "Public Validity Check", description: "Let employers confirm both facts at once. A public registry returns whether the certificate is genuine and whether its exam was properly proctored, closing the trust gap with in-person exams." },
      { title: "Anomaly Flagging", description: "Surface integrity failures. Sessions with flagged proctoring anomalies are recorded against the certificate, so an employer sees a supervision concern instead of assuming a clean pass." },
    ],
    lifecycleTitle: "The Integrity Lifecycle",
    lifecycleSubtitle:
      "Follow a single certification from a proctored exam session through certificate issuance to an employer's dual verification.",
    lifecycleSteps: [
      {
        label: "Proctored Session",
        description:
          "A candidate sits a supervised online exam. The proctoring session's integrity data is captured and anchored as the supervision record.",
        icon: Shield,
        logFilename: "cerulea_integrity_engine.log",
        logLines: [
          { text: "[SYS] Anchoring proctoring session record...", time: "08:33:41", tone: "default" },
          { text: "[CMD] anchorSession { candidate: \"cand_7710\", exam: \"PMP_CERT\", proctor: \"LIVE_AI\" }", time: "08:33:41", tone: "primary" },
          { text: "[AUTH] Sealing session integrity digest...", time: "08:33:42", tone: "secondary" },
          { text: "[OK] Session anchored at block 8402117.", time: "08:33:42", tone: "success" },
        ],
      },
      {
        label: "Result Verification",
        description:
          "The exam is graded and the pass is confirmed against the supervised session. The result is linked to the proctoring record.",
        icon: FileCheck,
        logFilename: "cerulea_integrity_engine.log",
        logLines: [
          { text: "[SYS] Confirming exam result for cand_7710...", time: "10:12:08", tone: "default" },
          { text: "[CMD] verifyResult(candidate: \"cand_7710\", exam: \"PMP_CERT\", pass: true)", time: "10:12:08", tone: "primary" },
          { text: "[SYS] Linking result to session record...", time: "10:12:09", tone: "default" },
          { text: "[OK] Supervised pass confirmed.", time: "10:12:09", tone: "success" },
        ],
      },
      {
        label: "Certificate Issuance",
        description:
          "A soulbound certificate is minted with its proctoring linkage. The credential carries both the pass and the supervision evidence.",
        icon: ShieldCheck,
        logFilename: "cerulea_integrity_engine.log",
        logLines: [
          { text: "[SYS] Minting integrity-linked certificate...", time: "10:12:12", tone: "default" },
          { text: "[CMD] mintCertificate(candidate: \"cand_7710\", session: \"SES_8811\", soulbound: true)", time: "10:12:12", tone: "primary" },
          { text: "[AUTH] Binding certificate to proctoring record...", time: "10:12:13", tone: "secondary" },
          { text: "[OK] Certificate CERT_66120 issued with integrity link.", time: "10:12:13", tone: "success" },
        ],
      },
      {
        label: "Dual Verification",
        description:
          "An employer verifies the certificate and its proctoring status. The registry returns both a genuine pass and confirmed supervision in one call.",
        icon: Search,
        logFilename: "cerulea_integrity_engine.log",
        logLines: [
          { text: "[SYS] Public dual-verification request...", time: "13:48:55", tone: "default" },
          { text: "[CMD] verifyIntegrity(CERT_66120)", time: "13:48:55", tone: "primary" },
          { text: "[SYS] Resolving certificate and session integrity...", time: "13:48:55", tone: "default" },
          { text: "[OK] Genuine and properly proctored.", time: "13:48:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes exam integrity into modular contracts. Each layer anchors the proctoring session, verifies the result, mints a linked certificate, and exposes dual verification so employers trust both the pass and its supervision.",
    layers: [
      {
        title: "Session Notary",
        subtitle: "The Supervision Seal",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Supervision Seal",
          description:
            "The foundational integrity layer. It anchors a proctoring session's integrity data by digest and flags anomalies, so the evidence that an exam was supervised is permanent and tamper-evident.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "contract IntegrityRegistry {\n  struct Session {\n    bytes32 candidateDID;\n    string exam;\n    bytes32 integrityHash;\n    bool flagged;\n  }\n\n  mapping(bytes32 => Session) public sessions;\n\n  function anchorSession(bytes32 id, bytes32 did, string calldata exam, bytes32 h) external onlyProctor {\n    sessions[id] = Session(did, exam, h, false);\n  }\n}",
        simAction: "Simulate Session Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading candidate identity cand_7710...", tone: "default" },
          { text: "Hashing proctoring integrity data...", tone: "default" },
          { text: "Sealing session supervision record...", tone: "default" },
          { text: "Writing session to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Proctoring session anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Result Verifier",
        subtitle: "The Pass Confirmation",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pass Confirmation",
          description:
            "The verification hook between exam and certificate. It confirms the graded pass and links it to the supervised session, so a certificate can only be issued against a verified and watched attempt.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function verifyResult(bytes32 sessionId, bool pass) external onlyExamBoard {\n    require(sessions[sessionId].integrityHash != 0, \"No session\");\n    results[sessionId] = Result(pass, block.timestamp);\n    emit ResultVerified(sessionId, pass);\n}",
        simAction: "Simulate Result Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading session SES_8811 for cand_7710...", tone: "default" },
          { text: "Confirming graded pass result...", tone: "default" },
          { text: "Linking result to supervision record...", tone: "default" },
          { text: "Recording verified attempt...", tone: "default" },
          { text: "[SUCCESS] Supervised pass confirmed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Certificate Mint",
        subtitle: "The Linked Credential",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Linked Credential",
          description:
            "The issuance engine. It mints a soulbound certificate that carries a permanent pointer to its proctoring session, so the pass and its supervision evidence travel together and cannot be separated.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function mintCertificate(bytes32 sessionId, address holder) external onlyExamBoard {\n    require(results[sessionId].pass, \"Not passed\");\n    uint256 id = _mint(holder, sessionId);\n    soulbound[id] = true;\n    certSession[id] = sessionId;\n    emit CertificateMinted(id, holder, sessionId);\n}",
        simAction: "Simulate Certificate Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming passed session SES_8811...", tone: "default" },
          { text: "Minting certificate CERT_66120...", tone: "default" },
          { text: "Setting soulbound non-transfer flag...", tone: "default" },
          { text: "Linking certificate to proctoring record...", tone: "default" },
          { text: "[SUCCESS] Integrity-linked certificate minted.", tone: "success" },
        ],
      },
      {
        title: "Dual Verifier",
        subtitle: "The Employer Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Employer Window",
          description:
            "A public gateway that resolves a certificate and its session in one call. It returns both authenticity and proctoring status, so an employer confirms a supervised pass without contacting the issuer.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyIntegrity(uint256 certId) external view returns (bool genuine, bool proctored, bool flagged) {\n    bytes32 sid = certSession[certId];\n    Session memory s = sessions[sid];\n    return (ownerOf(certId) != address(0), s.integrityHash != 0, s.flagged);\n}",
        simAction: "Simulate Dual Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Employer scans certificate CERT_66120...", tone: "default" },
          { text: "Resolving certificate authenticity...", tone: "default" },
          { text: "Reading linked proctoring integrity...", tone: "default" },
          { text: "Checking anomaly flag status...", tone: "default" },
          { text: "[SUCCESS] Genuine and properly proctored.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified exam integrity is a horizontal capability. Here is how different actors put the certificate validity registry to work.",
    sectors: [
      { icon: GraduationCap, title: "Certification Bodies", description: "Issue online certifications that carry verifiable proof of supervision, so a remote credential holds the same weight as an in-person exam and resists challenge from skeptical employers.", assetTypes: ["Proctored Certificates", "Session Records", "Validity Registries"] },
      { icon: Building2, title: "Employers & Recruiters", description: "Confirm that a candidate's certification was earned under verified supervision, filtering out credentials from unproctored exams without contacting each issuing body.", assetTypes: ["Screening Checks", "Integrity Reports", "Candidate Credentials"] },
      { icon: Shield, title: "Proctoring Providers", description: "Anchor session integrity data to the certificates they supervise, turning their supervision into a verifiable on-chain asset that strengthens the value of every credential they back.", assetTypes: ["Session Attestations", "Integrity Logs", "Anomaly Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a proctoring provider's session platform or issuing certificates to candidate wallets, Cerulea routes both into one integrity-linked registry.",
    tracks: [
      {
        title: "Track A: Proctoring Platform Bridging",
        description:
          "For providers on existing session platforms. Proctoring integrity data is translated into on-chain session anchors through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Proctoring Platform", sublabel: "Session Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Session Anchoring", icon: Server, accent: true },
          { label: "Cerulea Public L1", sublabel: "Integrity Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Candidate Wallet Holding",
        description:
          "For candidates holding certificates on mobile. A wallet holds each soulbound credential and presents it with its integrity link to any verifier.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Candidate Wallet", sublabel: "Holder Devices", icon: Fingerprint, accent: false },
          { label: "Public Verifiers", sublabel: "Integrity Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Shared Validity Record", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a certificate validity registry with proctoring anchoring, result linkage, and public dual verification from scratch requires specialised integrity engineers and long platform integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Integrity & Validity Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects assessment-platform integration benchmarks. Anchoring proctoring integrity, linking results to certificates, and shipping a public dual-verification registry for an average provider takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your integrity and validity rules into pre-audited WebAssembly binaries and provisions the registry and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "corporate-training-completion-tracking-for-compliance-mandates",
    icon: FileCheck,
    eyebrow: "Compliance Training Layer",
    headline1: "Prove completion.",
    headline2: "Pass the audit.",
    heroDescription:
      "Stand up a verified record of every employee's completion of mandatory compliance training, ready for internal or regulatory audit. A verifiable completion credential is issued to each employee on finishing, so organization-wide compliance status can be checked instantly.",
    heroCta: "Deploy Training Trackers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a scramble through disconnected systems into a single verified record of mandatory training across the workforce.",
    mechanics: [
      { title: "Completion Credential", description: "Issue proof on finishing. The DID and VC Ledger mints a verifiable completion credential to each employee when they finish a mandatory course, so compliance rests on signed records rather than a screenshot." },
      { title: "Mandate Attestation", description: "Map completions to requirements. The Compliance Attestations module records that a completion satisfies a specific mandate, so an auditor sees which regulation each credential answers." },
      { title: "Immutable Training Log", description: "Keep an audit-ready history. The Audit Logs module writes every completion as a tamper-evident event, so proving coverage for a past period does not depend on a system that may have been replaced." },
      { title: "Workforce Coverage View", description: "Check the whole organization at once. A dashboard resolves completion status across every employee and mandate, replacing a manual reconciliation across HR and LMS systems before an audit." },
      { title: "Expiry & Renewal Tracking", description: "Follow recurring requirements. Credentials with validity periods trigger renewal prompts as they approach expiry, so annual safety or anti-harassment training never silently lapses." },
      { title: "Regulator-Ready Export", description: "Answer an audit in one query. Auditors read a verifiable coverage record directly, so a compliance demonstration is a live lookup instead of a document-gathering exercise across departments." },
    ],
    lifecycleTitle: "The Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a single mandatory course from an employee's completion through mandate attestation to an audit-ready coverage check.",
    lifecycleSteps: [
      {
        label: "Training Completion",
        description:
          "An employee finishes a mandatory compliance course. The completion event and its mandate reference are recorded as the basis for the credential.",
        icon: GraduationCap,
        logFilename: "cerulea_training_engine.log",
        logLines: [
          { text: "[SYS] Registering training completion...", time: "09:22:47", tone: "default" },
          { text: "[CMD] completeTraining { emp: \"emp_4410\", course: \"POSH_ANNUAL\" }", time: "09:22:47", tone: "primary" },
          { text: "[AUTH] Verifying completion criteria...", time: "09:22:48", tone: "secondary" },
          { text: "[OK] Completion recorded at block 8702441.", time: "09:22:48", tone: "success" },
        ],
      },
      {
        label: "Credential Issuance",
        description:
          "A verifiable completion credential is issued to the employee. The course, date, and validity period are sealed to their identity.",
        icon: FileCheck,
        logFilename: "cerulea_training_engine.log",
        logLines: [
          { text: "[SYS] Issuing completion credential...", time: "09:22:50", tone: "default" },
          { text: "[CMD] issueCredential(emp: \"emp_4410\", course: \"POSH_ANNUAL\", validMonths: 12)", time: "09:22:50", tone: "primary" },
          { text: "[AUTH] Sealing validity window to credential...", time: "09:22:51", tone: "secondary" },
          { text: "[OK] Credential VC_88210 issued to employee.", time: "09:22:51", tone: "success" },
        ],
      },
      {
        label: "Mandate Attestation",
        description:
          "The completion is attested against the governing mandate. The compliance record links the credential to the regulation it satisfies.",
        icon: ShieldCheck,
        logFilename: "cerulea_training_engine.log",
        logLines: [
          { text: "[SYS] Attesting completion to mandate...", time: "11:05:19", tone: "default" },
          { text: "[CMD] attestMandate(vc: \"VC_88210\", mandate: \"POSH_ACT_2013\")", time: "11:05:19", tone: "primary" },
          { text: "[SYS] Mapping credential to regulation...", time: "11:05:20", tone: "default" },
          { text: "[OK] Mandate satisfied and recorded.", time: "11:05:20", tone: "success" },
        ],
      },
      {
        label: "Audit Coverage Check",
        description:
          "An auditor queries workforce coverage. The dashboard returns completion status across every employee and mandate from the verified record.",
        icon: Search,
        logFilename: "cerulea_training_engine.log",
        logLines: [
          { text: "[SYS] Auditor requesting coverage report...", time: "14:37:02", tone: "default" },
          { text: "[CMD] coverageReport(mandate: \"POSH_ACT_2013\")", time: "14:37:02", tone: "primary" },
          { text: "[SYS] Aggregating completion across workforce...", time: "14:37:02", tone: "default" },
          { text: "[OK] 100 percent coverage returned, audit-ready.", time: "14:37:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes compliance training into modular contracts. Each layer records completion, issues credentials, attests mandates, and exposes coverage without a manual reconciliation across HR and learning systems.",
    layers: [
      {
        title: "Completion Registry",
        subtitle: "The Training Anchor",
        icon: GraduationCap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Training Anchor",
          description:
            "The foundational data layer. It records each employee's course completion with its mandate reference, forming the immutable basis every credential and coverage report points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TrainingRegistry {\n  struct Completion {\n    bytes32 empDID;\n    string course;\n    string mandate;\n    uint256 completedAt;\n  }\n\n  mapping(bytes32 => Completion) public completions;\n\n  function complete(bytes32 id, bytes32 did, string calldata course, string calldata mandate) external onlyHR {\n    completions[id] = Completion(did, course, mandate, block.timestamp);\n  }\n}",
        simAction: "Simulate Completion Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading employee identity emp_4410...", tone: "default" },
          { text: "Referencing mandate POSH_ANNUAL...", tone: "default" },
          { text: "Recording completion timestamp...", tone: "default" },
          { text: "Writing completion to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Training completion anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Credential Mint",
        subtitle: "The Proof Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proof Seal",
          description:
            "The issuance engine. It mints a verifiable completion credential with a validity window, so an employee's proof of training is portable, checkable, and carries its own expiry for recurring mandates.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function issueCredential(bytes32 completionId, uint16 validMonths) external onlyHR {\n    bytes32 id = keccak256(abi.encode(completionId, block.timestamp));\n    credentials[id] = Credential(completionId, block.timestamp + validMonths * 30 days);\n    emit CredentialIssued(id, completionId);\n}",
        simAction: "Simulate Credential Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading completion for emp_4410...", tone: "default" },
          { text: "Composing completion credential...", tone: "default" },
          { text: "Sealing 12-month validity window...", tone: "default" },
          { text: "Binding credential to employee identity...", tone: "default" },
          { text: "[SUCCESS] Completion credential minted.", tone: "success" },
        ],
      },
      {
        title: "Mandate Attestation",
        subtitle: "The Regulation Map",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Regulation Map",
          description:
            "Links proof to requirement. It attests that a credential satisfies a specific mandate, so an auditor sees which regulation each completion answers rather than an undifferentiated list of courses.",
          platformFunction: "Compliance & Attestation",
        },
        codeSnippet:
          "function attestMandate(bytes32 credId, string calldata mandate) external onlyCompliance {\n    mandateOf[credId] = mandate;\n    satisfied[mandate][holderOf(credId)] = true;\n    emit MandateAttested(credId, mandate);\n}",
        simAction: "Simulate Mandate Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Opening credential VC_88210...", tone: "default" },
          { text: "Mapping to mandate POSH_ACT_2013...", tone: "default" },
          { text: "Marking mandate satisfied for employee...", tone: "default" },
          { text: "Recording attestation event...", tone: "default" },
          { text: "[SUCCESS] Mandate satisfaction recorded.", tone: "success" },
        ],
      },
      {
        title: "Coverage Window",
        subtitle: "The Audit View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Audit View",
          description:
            "A read gateway that aggregates completion status across the workforce. It answers a compliance audit as a live query, replacing a document-gathering exercise across HR and learning systems.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function coverageReport(string calldata mandate, address[] calldata staff) external view returns (uint256 covered) {\n    for (uint i; i < staff.length; i++) {\n        if (satisfied[mandate][staff[i]]) covered++;\n    }\n}",
        simAction: "Simulate Coverage Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor queries mandate POSH_ACT_2013...", tone: "default" },
          { text: "Aggregating completion across workforce...", tone: "default" },
          { text: "Excluding expired credentials...", tone: "default" },
          { text: "Computing coverage percentage...", tone: "default" },
          { text: "[SUCCESS] Full coverage returned, audit-ready.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified training coverage is a horizontal capability. Here is how different organizations put the compliance ledger to work.",
    sectors: [
      { icon: Building2, title: "Enterprise HR & Compliance", description: "Prove workforce-wide completion of mandatory training on demand, replacing a scramble across HR and LMS systems with a single verifiable coverage record ready for any audit.", assetTypes: ["Completion Credentials", "Coverage Reports", "Mandate Records"] },
      { icon: Landmark, title: "Regulators & Auditors", description: "Confirm an organization's training compliance against a live record instead of collected screenshots and certificates, cutting audit time and closing gaps for falsified proof.", assetTypes: ["Audit Queries", "Compliance Attestations", "Training Logs"] },
      { icon: Factory, title: "Safety-Critical Industries", description: "Track recurring safety certifications across a large or dispersed workforce with automatic renewal prompts, so no worker operates with a lapsed mandatory qualification.", assetTypes: ["Safety Credentials", "Renewal Schedules", "Site Coverage"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a corporate learning management system or issuing credentials to employee wallets, Cerulea routes both into one verified training record.",
    tracks: [
      {
        title: "Track A: LMS & HR Bridging",
        description:
          "For enterprises on existing learning and HR systems. Completion events are translated into on-chain credentials and mandate attestations through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Corporate LMS / HRIS", sublabel: "Enterprise Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential & Attestation", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Compliance Training Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Employee Wallet Credentials",
        description:
          "For employees holding proof on mobile. A wallet holds each completion credential and presents it for internal or regulatory verification.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Employee Wallet", sublabel: "Workforce Devices", icon: Fingerprint, accent: false },
          { label: "Compliance Validators", sublabel: "Coverage Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Training Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a compliance training tracker with completion credentials, mandate attestation, and a workforce coverage dashboard from scratch requires specialised compliance engineers and long HR systems integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Mandate & Coverage Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects enterprise-compliance integration benchmarks. Wiring completion credentials into HR and learning systems, mapping mandates, and shipping a workforce coverage dashboard for an average organization takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your mandate and coverage rules into pre-audited WebAssembly binaries and provisions the training ledger and coverage dashboard instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "student-academic-record-integrity-across-schools",
    icon: Database,
    eyebrow: "Academic Record Consortium",
    headline1: "Transfer in a day.",
    headline2: "Forge in never.",
    heroDescription:
      "Deploy a private school consortium ledger with student identity anchoring, verifiable academic records, and consent-governed transfer. Student transfers complete in one day instead of two weeks, and forging a transcript becomes cryptographically impossible.",
    heroCta: "Deploy Record Consortia",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn siloed school databases and paper transcripts into one consortium record where transfers are instant and forgery is impossible.",
    mechanics: [
      { title: "Student Identity Anchor", description: "Give each student one durable identity. The Civil Registry anchors a student identifier shared across the consortium, so records follow the child between schools without name-and-birthdate reconciliation." },
      { title: "Verifiable Transcript", description: "Make every record checkable. The DID and VC Ledger issues academic records as verifiable credentials, so a receiving school confirms grades cryptographically instead of trusting a printed transcript." },
      { title: "Record Notary", description: "Seal each result at source. The Provenance Notary anchors every term record by digest, making any later alteration of a transcript mathematically detectable." },
      { title: "Consent-Governed Transfer", description: "Move records only with permission. A transfer releases a student's record to a new school only when the guardian or student consents, so data sharing is authorized rather than assumed." },
      { title: "Consortium Interoperability", description: "Let member schools read one ledger. Each school in the consortium queries the same record, so a transfer between members needs no bilateral integration or mailed paperwork." },
      { title: "One-Day Enrollment", description: "Collapse the transfer window. A receiving school verifies the incoming record and enrolls the student in a day, replacing the two-week wait for manual transcript verification." },
    ],
    lifecycleTitle: "The Record Lifecycle",
    lifecycleSubtitle:
      "Follow a single student's record from identity anchoring through a consent-governed transfer to same-day enrollment at a new school.",
    lifecycleSteps: [
      {
        label: "Identity Anchoring",
        description:
          "A student's identity is anchored on the consortium ledger. The durable identifier links every school they attend to one record.",
        icon: Fingerprint,
        logFilename: "cerulea_record_engine.log",
        logLines: [
          { text: "[SYS] Initializing student identity record...", time: "08:44:12", tone: "default" },
          { text: "[CMD] anchorStudent { id: \"stu_2205\", grade: \"8\", school: \"DPS_101\" }", time: "08:44:12", tone: "primary" },
          { text: "[AUTH] Anchoring durable student identifier...", time: "08:44:13", tone: "secondary" },
          { text: "[OK] Identity anchored at block 9002251.", time: "08:44:13", tone: "success" },
        ],
      },
      {
        label: "Record Anchoring",
        description:
          "The origin school anchors the student's term records. Each transcript entry is sealed to the identity by cryptographic digest.",
        icon: FileCheck,
        logFilename: "cerulea_record_engine.log",
        logLines: [
          { text: "[SYS] Anchoring term academic records...", time: "11:20:38", tone: "default" },
          { text: "[CMD] anchorRecord(student: \"stu_2205\", term: \"2026_T1\", gpa: 8.6)", time: "11:20:38", tone: "primary" },
          { text: "[AUTH] Sealing transcript digest to identity...", time: "11:20:39", tone: "secondary" },
          { text: "[OK] Record anchored, tamper-evident.", time: "11:20:39", tone: "success" },
        ],
      },
      {
        label: "Consent & Transfer",
        description:
          "The guardian consents to transfer and the record is released to the new school. Sharing occurs only after authorization is recorded.",
        icon: Handshake,
        logFilename: "cerulea_record_engine.log",
        logLines: [
          { text: "[SYS] Awaiting guardian consent for transfer...", time: "13:55:21", tone: "default" },
          { text: "[CMD] grantTransfer(student: \"stu_2205\", to: \"KV_204\")", time: "13:55:21", tone: "primary" },
          { text: "[SYS] Consent recorded, releasing record...", time: "13:55:22", tone: "default" },
          { text: "[OK] Record shared with receiving school.", time: "13:55:22", tone: "success" },
        ],
      },
      {
        label: "Same-Day Enrollment",
        description:
          "The receiving school verifies the record and enrolls the student. Verification and enrollment complete in one day, not two weeks.",
        icon: GraduationCap,
        logFilename: "cerulea_record_engine.log",
        logLines: [
          { text: "[SYS] Verifying incoming student record...", time: "15:31:09", tone: "default" },
          { text: "[CMD] enrollStudent(student: \"stu_2205\", school: \"KV_204\")", time: "15:31:09", tone: "primary" },
          { text: "[AUTH] Confirming record integrity from ledger...", time: "15:31:10", tone: "secondary" },
          { text: "[OK] Student enrolled same day.", time: "15:31:10", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes academic record integrity into modular contracts. Each layer anchors identity, seals records, governs consent, and enrolls at the new school without paper transcripts or siloed databases.",
    layers: [
      {
        title: "Identity Registry",
        subtitle: "The Student Anchor",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Student Anchor",
          description:
            "The foundational identity layer. It anchors a durable student identifier shared across the consortium, so a child's records attach to one identity as they move between member schools.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RecordRegistry {\n  struct Student {\n    bytes32 studentId;\n    address currentSchool;\n  }\n\n  mapping(bytes32 => Student) public students;\n\n  function anchorStudent(bytes32 id, address school) external onlyMember {\n    students[id] = Student(id, school);\n    emit StudentAnchored(id, school);\n  }\n}",
        simAction: "Simulate Identity Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading student identity stu_2205...", tone: "default" },
          { text: "Linking to origin school DPS_101...", tone: "default" },
          { text: "Anchoring durable identifier...", tone: "default" },
          { text: "Writing student to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Student identity anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Record Notary",
        subtitle: "The Transcript Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transcript Seal",
          description:
            "Anchors each term result by digest. The detailed record stays with the school, but any alteration to a transcript breaks its hash, so forging grades becomes cryptographically impossible.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorRecord(bytes32 studentId, string calldata term, bytes32 recordHash) external onlyMember {\n    records[studentId].push(Record(term, recordHash, msg.sender, block.timestamp));\n    emit RecordAnchored(studentId, term, recordHash);\n}",
        simAction: "Simulate Record Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting term 2026_T1 record...", tone: "default" },
          { text: "Computing transcript digest...", tone: "default" },
          { text: "Sealing record to student identity...", tone: "default" },
          { text: "Appending to record history...", tone: "default" },
          { text: "[SUCCESS] Transcript anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Consent Gateway",
        subtitle: "The Transfer Authorization",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transfer Authorization",
          description:
            "Governs who sees a record. It releases a student's record to a new school only after a guardian or student consents, so cross-school data sharing is explicitly authorized rather than assumed.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function grantTransfer(bytes32 studentId, address toSchool) external onlyGuardian(studentId) {\n    accessGrant[studentId][toSchool] = true;\n    emit TransferGranted(studentId, toSchool);\n}",
        simAction: "Simulate Consent Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Requesting guardian consent for stu_2205...", tone: "default" },
          { text: "Recording authorization for KV_204...", tone: "default" },
          { text: "Granting record access to new school...", tone: "default" },
          { text: "Logging consent event...", tone: "default" },
          { text: "[SUCCESS] Transfer authorized by guardian.", tone: "success" },
        ],
      },
      {
        title: "Enrollment Executor",
        subtitle: "The Same-Day Move",
        icon: GraduationCap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Same-Day Move",
          description:
            "The transfer executor. It verifies the incoming record against its anchors and updates the student's current school, so a receiving institution can enroll a transfer student in a day instead of two weeks.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function enrollStudent(bytes32 studentId, address school) external onlyMember {\n    require(accessGrant[studentId][school], \"No consent\");\n    require(verifyRecords(studentId), \"Integrity fail\");\n    students[studentId].currentSchool = school;\n    emit StudentEnrolled(studentId, school);\n}",
        simAction: "Simulate Same-Day Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving school KV_204 opens record...", tone: "default" },
          { text: "Confirming guardian consent present...", tone: "default" },
          { text: "Verifying transcript integrity...", tone: "default" },
          { text: "Updating current school assignment...", tone: "default" },
          { text: "[SUCCESS] Student enrolled same day.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Portable academic records are a horizontal capability. Here is how different actors put the consortium ledger to work.",
    sectors: [
      { icon: GraduationCap, title: "School Boards & Consortia", description: "Run a shared record across member schools so a transferring student's history is instantly verifiable, ending the reliance on mailed paper transcripts and siloed databases that do not communicate.", assetTypes: ["Student Records", "Transfer Grants", "Consortium Rosters"] },
      { icon: Landmark, title: "Education Departments", description: "Gain a verifiable, department-wide view of student mobility and record integrity, replacing manual transcript audits with a live query across every enrolled child.", assetTypes: ["Mobility Records", "Integrity Audits", "Enrollment Data"] },
      { icon: Users, title: "Parents & Guardians", description: "Control who sees a child's academic record through explicit consent, and move a transferring student in a day without chasing the previous school for signed documents.", assetTypes: ["Consent Grants", "Student Transcripts", "Transfer Requests"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a school's student information system or capturing records from a member portal, Cerulea routes both into one consortium academic record.",
    tracks: [
      {
        title: "Track A: School SIS Bridging",
        description:
          "For member schools on legacy student systems. Enrollment and record events are translated into on-chain identity and record anchors through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "School SIS", sublabel: "Member School Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Identity & Record Anchoring", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Record Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Guardian Consent Portal",
        description:
          "For guardians authorizing transfers from mobile. A signed consent releases a student's record to a receiving school directly on the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Guardian Portal / Wallet", sublabel: "Parent Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Consent Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Record Store", icon: Database, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a school record consortium with identity anchoring, transcript notarization, and consent-governed transfer from scratch requires specialised identity engineers and long multi-school integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Identity & Transfer Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects multi-institution integration benchmarks. Anchoring student identity, building transcript notarization, and shipping consent-governed transfer across member schools takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your identity and transfer rules into pre-audited WebAssembly binaries and provisions the consortium record ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "mid-day-meal-scheme-distribution-and-nutrition-compliance-tracking",
    icon: Truck,
    eyebrow: "Scheme Delivery Layer",
    headline1: "Verify every meal.",
    headline2: "At every school.",
    heroDescription:
      "Deliver a verified record of meal delivery and nutritional compliance at every school, ready for government scheme audits. Meal delivery confirmations and nutrition checks are recorded at the point of delivery, giving auditors a real-time record across every school.",
    heroCta: "Deploy Scheme Trackers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn manual meal reporting into point-of-delivery confirmations that auditors can verify across millions of daily meals.",
    mechanics: [
      { title: "Delivery Attestation", description: "Confirm meals at the point of delivery. The Compliance Attestations module records that a school received its meals for a given day, so scheme coverage rests on signed confirmations rather than retrospective registers." },
      { title: "Nutrition Notary", description: "Anchor the nutritional check. The Provenance Notary seals each meal's nutritional compliance data by digest, so an auditor sees that standards were met, not just that food arrived." },
      { title: "Immutable Delivery Log", description: "Keep a tamper-evident history. The Audit Logs module writes each delivery and check as a permanent event, so a scheme audit reads a complete record instead of reconstructed paperwork." },
      { title: "Per-School Coverage", description: "Track delivery school by school. Each institution's daily confirmations roll up into a coverage view, so gaps at a specific school surface immediately rather than at year-end." },
      { title: "Real-Time Scheme Dashboard", description: "Give administrators a live window. Delivery and compliance data across every school render continuously, replacing periodic manual reporting that is hard to audit at scale." },
      { title: "Leakage Detection", description: "Surface diversion fast. Mismatches between allocated rations and confirmed deliveries are flagged automatically, so meals that never reached children are caught early." },
    ],
    lifecycleTitle: "The Delivery Lifecycle",
    lifecycleSubtitle:
      "Follow a single day's meals from ration allocation through point-of-delivery confirmation to a scheme audit query.",
    lifecycleSteps: [
      {
        label: "Ration Allocation",
        description:
          "Rations are allocated to a school for the day. The allocation is anchored as the expected delivery against which confirmations are checked.",
        icon: Package,
        logFilename: "cerulea_scheme_engine.log",
        logLines: [
          { text: "[SYS] Anchoring daily ration allocation...", time: "07:05:16", tone: "default" },
          { text: "[CMD] allocateRations { school: \"GPS_512\", meals: 320, date: \"2026-09-19\" }", time: "07:05:16", tone: "primary" },
          { text: "[AUTH] Recording expected delivery...", time: "07:05:17", tone: "secondary" },
          { text: "[OK] Allocation anchored at block 9302512.", time: "07:05:17", tone: "success" },
        ],
      },
      {
        label: "Delivery Confirmation",
        description:
          "The school confirms meals were received at the point of delivery. The attestation records the actual count served that day.",
        icon: Truck,
        logFilename: "cerulea_scheme_engine.log",
        logLines: [
          { text: "[SYS] Receiving delivery confirmation...", time: "11:48:33", tone: "default" },
          { text: "[CMD] confirmDelivery(school: \"GPS_512\", served: 318, date: \"2026-09-19\")", time: "11:48:33", tone: "primary" },
          { text: "[SYS] Comparing served against allocated...", time: "11:48:34", tone: "default" },
          { text: "[OK] Delivery confirmed, within tolerance.", time: "11:48:34", tone: "success" },
        ],
      },
      {
        label: "Nutrition Check",
        description:
          "A nutritional compliance check is anchored for the meal. The Provenance Notary seals the check data to the delivery record.",
        icon: FlaskConical,
        logFilename: "cerulea_scheme_engine.log",
        logLines: [
          { text: "[SYS] Anchoring nutrition compliance check...", time: "11:52:07", tone: "default" },
          { text: "[CMD] anchorNutrition(school: \"GPS_512\", standard: \"MDM_NORM\", pass: true)", time: "11:52:07", tone: "primary" },
          { text: "[AUTH] Sealing nutrition digest to delivery...", time: "11:52:08", tone: "secondary" },
          { text: "[OK] Nutrition check recorded, standard met.", time: "11:52:08", tone: "success" },
        ],
      },
      {
        label: "Scheme Audit",
        description:
          "An auditor queries coverage across schools. The dashboard returns delivery and nutrition compliance from the verified record in real time.",
        icon: Search,
        logFilename: "cerulea_scheme_engine.log",
        logLines: [
          { text: "[SYS] Auditor requesting scheme coverage...", time: "15:19:44", tone: "default" },
          { text: "[CMD] coverageReport(district: \"D_14\", date: \"2026-09-19\")", time: "15:19:44", tone: "primary" },
          { text: "[SYS] Aggregating delivery and nutrition data...", time: "15:19:45", tone: "default" },
          { text: "[OK] Coverage returned across 412 schools.", time: "15:19:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes scheme delivery into modular contracts. Each layer anchors allocation, confirms delivery, seals nutrition checks, and exposes coverage without manual reporting that is impossible to audit at scale.",
    layers: [
      {
        title: "Allocation Registry",
        subtitle: "The Expected Delivery",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Expected Delivery",
          description:
            "The foundational data layer. It anchors each school's daily ration allocation, forming the expected baseline that delivery confirmations are checked against to surface leakage.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SchemeRegistry {\n  struct Allocation {\n    address school;\n    uint256 meals;\n    uint256 date;\n  }\n\n  mapping(bytes32 => Allocation) public allocations;\n\n  function allocate(bytes32 id, address school, uint256 meals, uint256 date) external onlyDept {\n    allocations[id] = Allocation(school, meals, date);\n  }\n}",
        simAction: "Simulate Ration Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading allocation for school GPS_512...", tone: "default" },
          { text: "Recording expected 320 meals...", tone: "default" },
          { text: "Anchoring delivery baseline...", tone: "default" },
          { text: "Writing allocation to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Ration allocation anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Delivery Attestation",
        subtitle: "The Point of Delivery",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Point of Delivery",
          description:
            "The confirmation hook at the school. It records the actual meals served and compares them against the allocation, so a shortfall between rations sent and meals delivered is flagged as it happens.",
          platformFunction: "Compliance & Attestation",
        },
        codeSnippet:
          "function confirmDelivery(bytes32 allocId, uint256 served) external onlySchool {\n    Allocation memory a = allocations[allocId];\n    deliveries[allocId] = Delivery(served, block.timestamp);\n    if (served + tolerance < a.meals) emit LeakageFlagged(allocId, a.meals - served);\n    emit DeliveryConfirmed(allocId, served);\n}",
        simAction: "Simulate Delivery Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving confirmation from GPS_512...", tone: "default" },
          { text: "Recording 318 meals served...", tone: "default" },
          { text: "Comparing against 320 allocated...", tone: "default" },
          { text: "Confirming within leakage tolerance...", tone: "default" },
          { text: "[SUCCESS] Delivery confirmed at point of service.", tone: "success" },
        ],
      },
      {
        title: "Nutrition Notary",
        subtitle: "The Standard Seal",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Standard Seal",
          description:
            "Anchors that meals met nutritional norms. It seals each compliance check by digest to the delivery, so an auditor confirms quality standards were satisfied and not merely that food was distributed.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorNutrition(bytes32 allocId, bytes32 standard, bool pass, bytes32 checkHash) external onlyInspector {\n    nutrition[allocId] = NutritionCheck(standard, pass, checkHash);\n    emit NutritionAnchored(allocId, standard, pass);\n}",
        simAction: "Simulate Nutrition Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Opening nutrition check for GPS_512...", tone: "default" },
          { text: "Hashing compliance check data...", tone: "default" },
          { text: "Confirming MDM_NORM standard met...", tone: "default" },
          { text: "Sealing check to delivery record...", tone: "default" },
          { text: "[SUCCESS] Nutrition compliance anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Coverage Window",
        subtitle: "The Audit View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Audit View",
          description:
            "A read gateway that aggregates delivery and nutrition data across schools. It answers a scheme audit as a live query, replacing periodic manual reports that cannot be verified at national scale.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function coverageReport(bytes32[] calldata allocs) external view returns (uint256 delivered, uint256 compliant) {\n    for (uint i; i < allocs.length; i++) {\n        if (deliveries[allocs[i]].served > 0) delivered++;\n        if (nutrition[allocs[i]].pass) compliant++;\n    }\n}",
        simAction: "Simulate Scheme Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor queries district D_14...", tone: "default" },
          { text: "Aggregating delivery confirmations...", tone: "default" },
          { text: "Aggregating nutrition compliance...", tone: "default" },
          { text: "Computing coverage across 412 schools...", tone: "default" },
          { text: "[SUCCESS] Real-time coverage returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified scheme delivery is a horizontal capability. Here is how different actors put the delivery ledger to work.",
    sectors: [
      { icon: Landmark, title: "Education Departments", description: "Audit meal delivery and nutrition compliance across every school from a live record, replacing manual reporting that is impossible to verify at the scale of millions of daily meals.", assetTypes: ["Delivery Records", "Nutrition Checks", "Coverage Reports"] },
      { icon: Truck, title: "Meal Delivery Operators", description: "Confirm delivery at the point of service and prove fulfillment against allocations, protecting honest operators against disputed claims and speeding reimbursement.", assetTypes: ["Delivery Confirmations", "Allocation Records", "Fulfillment Logs"] },
      { icon: Users, title: "Oversight & Audit Bodies", description: "Detect leakage between allocated rations and meals actually served, so diverted food is caught early rather than surfacing in a delayed annual review.", assetTypes: ["Leakage Flags", "Audit Trails", "Compliance Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a department's scheme management system or capturing confirmations from school phones, Cerulea routes both into one verified delivery record.",
    tracks: [
      {
        title: "Track A: Scheme System Bridging",
        description:
          "For departments on legacy scheme management systems. Allocation and delivery events are translated into on-chain anchors and attestations through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Scheme System", sublabel: "Department Back Office", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Allocation & Attestation", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Scheme Delivery Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: School Field Confirmation",
        description:
          "For schools confirming delivery on mobile. A signed confirmation from a school device records the meals served directly on the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "School PWA / Device", sublabel: "Field Confirmation", icon: Fingerprint, accent: false },
          { label: "Scheme Validators", sublabel: "Delivery Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Delivery Record", icon: Truck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a scheme delivery tracker with point-of-delivery attestation, nutrition notarization, and a real-time coverage dashboard from scratch requires specialised government-systems engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Delivery & Nutrition Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects public-scheme integration benchmarks. Wiring point-of-delivery attestation into a scheme system, building nutrition notarization, and shipping a real-time coverage dashboard for an average program takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your delivery and nutrition rules into pre-audited WebAssembly binaries and provisions the delivery ledger and coverage dashboard instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "school-infrastructure-grant-utilization-tracking",
    icon: Building2,
    eyebrow: "Grant Utilization Layer",
    headline1: "Fund the classroom.",
    headline2: "Track every rupee.",
    heroDescription:
      "Deploy a tracking system showing exactly how infrastructure grants to schools were spent, from disbursement to completed construction or purchase. Each grant is tracked through procurement to verified completion, giving education departments a clear audit trail for every rupee.",
    heroCta: "Deploy Grant Trackers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque disbursement into a tracked chain from grant release through procurement to verified construction.",
    mechanics: [
      { title: "Milestone Escrow", description: "Release funds against progress. The Escrow and Conditional Settlement module holds an infrastructure grant and disburses each tranche only as a construction or purchase milestone is verified, so money is never advanced ahead of work." },
      { title: "Procurement Ledger", description: "Record how the money was spent. The Procurement Ledger anchors each purchase order and vendor payment, so a department traces a grant to the exact contractor and material it funded." },
      { title: "Completion Attestation", description: "Confirm the asset exists. The Compliance Attestations module records verified completion of a classroom or equipment purchase, so the final tranche releases against a confirmed deliverable." },
      { title: "Utilization Dashboard", description: "Show the full chain in one view. Disbursement, procurement, and completion render together, replacing a grant that vanished into a general account with an itemized utilization record." },
      { title: "Vendor Verification", description: "Pay verified suppliers only. Vendor identities are checked before payment, so infrastructure funds flow to registered contractors and not to fabricated recipients." },
      { title: "Anomaly Flagging", description: "Catch misuse early. Gaps between disbursed tranches and anchored procurement are flagged automatically, so a grant that stalled or was diverted surfaces before the next release." },
    ],
    lifecycleTitle: "The Utilization Lifecycle",
    lifecycleSubtitle:
      "Follow a single infrastructure grant from disbursement through procurement to verified construction completion.",
    lifecycleSteps: [
      {
        label: "Grant Disbursement",
        description:
          "An infrastructure grant is disbursed to a school and locked in milestone escrow. The construction plan and release conditions are anchored on-chain.",
        icon: Landmark,
        logFilename: "cerulea_infra_engine.log",
        logLines: [
          { text: "[SYS] Initializing infrastructure grant escrow...", time: "09:18:22", tone: "default" },
          { text: "[CMD] disburseGrant { school: \"GHS_330\", total: 2500000, purpose: \"CLASSROOMS\" }", time: "09:18:22", tone: "primary" },
          { text: "[AUTH] Locking funds and encoding milestones...", time: "09:18:23", tone: "secondary" },
          { text: "[OK] Grant escrow anchored at block 9502330.", time: "09:18:23", tone: "success" },
        ],
      },
      {
        label: "Procurement",
        description:
          "The school raises a purchase order to a verified contractor. The Procurement Ledger anchors the order and the vendor identity before payment.",
        icon: Package,
        logFilename: "cerulea_infra_engine.log",
        logLines: [
          { text: "[SYS] Anchoring purchase order...", time: "12:41:07", tone: "default" },
          { text: "[CMD] anchorPO(school: \"GHS_330\", vendor: \"CON_881\", amount: 1200000)", time: "12:41:07", tone: "primary" },
          { text: "[AUTH] Verifying registered vendor identity...", time: "12:41:08", tone: "secondary" },
          { text: "[OK] Procurement recorded, vendor verified.", time: "12:41:08", tone: "success" },
        ],
      },
      {
        label: "Milestone Release",
        description:
          "A construction milestone is verified and the associated tranche releases. Payment settles to the contractor against confirmed progress.",
        icon: Wallet,
        logFilename: "cerulea_infra_engine.log",
        logLines: [
          { text: "[SYS] Verifying construction milestone M1...", time: "14:56:33", tone: "default" },
          { text: "[CMD] releaseTranche(school: \"GHS_330\", milestone: 1, amount: 1200000)", time: "14:56:33", tone: "primary" },
          { text: "[SYS] Settling payment to verified contractor...", time: "14:56:34", tone: "default" },
          { text: "[OK] Tranche released against confirmed progress.", time: "14:56:34", tone: "success" },
        ],
      },
      {
        label: "Completion Audit",
        description:
          "The finished classroom is attested and the department audits the grant. The full disbursement-to-completion chain is verifiable in one view.",
        icon: Search,
        logFilename: "cerulea_infra_engine.log",
        logLines: [
          { text: "[SYS] Attesting completed construction...", time: "16:33:51", tone: "default" },
          { text: "[CMD] auditGrant(school: \"GHS_330\", grant: \"INFRA_330\")", time: "16:33:51", tone: "primary" },
          { text: "[SYS] Assembling disbursement to completion chain...", time: "16:33:52", tone: "default" },
          { text: "[OK] Grant fully utilized and verified.", time: "16:33:52", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes grant utilization into modular contracts. Each layer escrows funds, records procurement, releases against milestones, and attests completion so a department traces every rupee from disbursement to a built asset.",
    layers: [
      {
        title: "Grant Escrow",
        subtitle: "The Milestone Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Milestone Vault",
          description:
            "The foundational settlement layer. It locks an infrastructure grant and encodes its milestone schedule, so no tranche releases until construction progress is verified and unspent funds stay protected.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "contract InfraGrant {\n  struct Grant {\n    address school;\n    uint256 locked;\n    uint8 milestones;\n    uint8 released;\n  }\n\n  mapping(bytes32 => Grant) public grants;\n\n  function disburse(bytes32 id, address school, uint256 total, uint8 m) external onlyDept {\n    grants[id] = Grant(school, total, m, 0);\n  }\n}",
        simAction: "Simulate Grant Escrow",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading grant terms for GHS_330...", tone: "default" },
          { text: "Encoding construction milestone schedule...", tone: "default" },
          { text: "Locking 2,500,000 in escrow vault...", tone: "default" },
          { text: "Writing grant state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Infrastructure grant locked on-chain.", tone: "success" },
        ],
      },
      {
        title: "Procurement Ledger",
        subtitle: "The Spend Record",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Spend Record",
          description:
            "Anchors how grant money is committed. It records each purchase order and verifies the vendor before payment, so a department can trace a tranche to the exact registered contractor and material it funded.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function anchorPO(bytes32 grantId, bytes32 vendor, uint256 amount) external onlySchool {\n    require(registered[vendor], \"Vendor unverified\");\n    orders[grantId].push(PO(vendor, amount, block.timestamp));\n    emit POAnchored(grantId, vendor, amount);\n}",
        simAction: "Simulate Procurement Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting purchase order for GHS_330...", tone: "default" },
          { text: "Verifying vendor CON_881 registration...", tone: "default" },
          { text: "Recording order amount 1,200,000...", tone: "default" },
          { text: "Appending to procurement history...", tone: "default" },
          { text: "[SUCCESS] Procurement anchored, vendor verified.", tone: "success" },
        ],
      },
      {
        title: "Milestone Release",
        subtitle: "The Progress Gate",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Progress Gate",
          description:
            "The conditional executor. It releases a tranche only against a verified construction milestone and flags gaps between disbursement and anchored procurement, so a stalled or diverted grant surfaces before more funds move.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function releaseTranche(bytes32 grantId, uint8 m, uint256 amount) external onlyDept {\n    require(milestoneVerified[grantId][m], \"Not verified\");\n    grants[grantId].released += 1;\n    grants[grantId].locked -= amount;\n    emit TrancheReleased(grantId, m, amount);\n}",
        simAction: "Simulate Milestone Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming milestone M1 verified...", tone: "default" },
          { text: "Cross-checking anchored procurement...", tone: "default" },
          { text: "Releasing tranche 1,200,000...", tone: "default" },
          { text: "Updating locked grant balance...", tone: "default" },
          { text: "[SUCCESS] Tranche released against progress.", tone: "success" },
        ],
      },
      {
        title: "Utilization Window",
        subtitle: "The Audit View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Audit View",
          description:
            "A read gateway that resolves a grant to its full chain. It assembles disbursement, procurement, and completion into one view, so a department audits every rupee from release to a built classroom.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function auditGrant(bytes32 grantId) external view returns (Grant memory, PO[] memory, bool completed) {\n    return (grants[grantId], orders[grantId], completion[grantId]);\n}",
        simAction: "Simulate Completion Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Department opens grant INFRA_330...", tone: "default" },
          { text: "Resolving disbursement and tranches...", tone: "default" },
          { text: "Attaching procurement records...", tone: "default" },
          { text: "Confirming completion attestation...", tone: "default" },
          { text: "[SUCCESS] Full utilization chain verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified grant utilization is a horizontal capability. Here is how different actors put the utilization ledger to work.",
    sectors: [
      { icon: Landmark, title: "Education Departments", description: "Trace every infrastructure grant from disbursement through procurement to a built asset, replacing disbursements that disappear into general accounts with a rupee-level audit trail.", assetTypes: ["Infrastructure Grants", "Utilization Reports", "Completion Records"] },
      { icon: Building2, title: "School Management Committees", description: "Demonstrate that a grant was spent as intended with an itemized on-chain record, protecting the school against misuse allegations and speeding release of the next tranche.", assetTypes: ["Purchase Orders", "Milestone Records", "Vendor Payments"] },
      { icon: Users, title: "Oversight & Audit Bodies", description: "Detect diversion by flagging mismatches between disbursed funds and anchored procurement, so a stalled or misused grant is caught before completion rather than years later.", assetTypes: ["Anomaly Flags", "Audit Trails", "Procurement Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a department's grants and procurement systems or capturing progress from the field, Cerulea routes both into one verified utilization record.",
    tracks: [
      {
        title: "Track A: Grants System Bridging",
        description:
          "For departments on legacy grants and procurement platforms. Disbursement and purchase events are translated into on-chain escrow and procurement records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Grants System", sublabel: "Department Back Office", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Escrow & Procurement", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Grant Utilization Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Progress Capture",
        description:
          "For engineers confirming milestones on site. A signed milestone verification from a field device releases the associated tranche directly on the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field Inspector Device", sublabel: "Site Verification", icon: Fingerprint, accent: false },
          { label: "Grant Validators", sublabel: "Milestone Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Utilization Record", icon: Building2, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a grant utilization tracker with milestone escrow, a procurement ledger, and completion attestation from scratch requires specialised government-finance engineers and long systems integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Escrow & Procurement Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects public-finance integration benchmarks. Building milestone escrow, wiring a procurement ledger into department systems, and shipping a utilization dashboard for an average program takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your escrow and procurement rules into pre-audited WebAssembly binaries and provisions the utilization ledger and dashboard instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "skill-certification-and-micro-credential-portability",
    icon: IdCard,
    eyebrow: "Micro-Credential Layer",
    headline1: "Carry your skills.",
    headline2: "Verified in seconds.",
    heroDescription:
      "Stand up a hybrid vocational credential chain with non-transferable soulbound tokens and a public employer verification API. Credential fraud is eliminated and employers verify any candidate's skill certifications in seconds instead of days of manual checking.",
    heroCta: "Deploy Credential Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a paper vocational certificate into a portable soulbound credential any employer can verify through an open API.",
    mechanics: [
      { title: "Soulbound Micro-Credential", description: "Issue each skill as a non-transferable token. The Soulbound Token module binds a vocational credential to the worker's wallet, so it cannot be sold or borrowed like a printed certificate." },
      { title: "Worker Identity", description: "Anchor the holder. The DID and VC Ledger ties each credential to a verified worker identity, so an employer confirms who holds the skill and not merely that a certificate exists." },
      { title: "Issuance Notary", description: "Seal the achievement. The Provenance Notary anchors the course, skill level, and issuing body by digest, making a fabricated vocational certificate detectable against the record." },
      { title: "Public Verification API", description: "Let any employer check in seconds. An open verification API resolves a credential to genuine or invalid, replacing days of phoning training centres to confirm a certificate." },
      { title: "Stackable Skill Profile", description: "Accumulate credentials over time. Micro-credentials stack into a portable skill profile, so a worker carries a growing, verifiable record of competencies between employers and regions." },
      { title: "Hybrid Chain Portability", description: "Verify beyond one issuer. Because credentials live on a shared chain, a worker's certifications remain verifiable even when they move between training providers, sectors, or states." },
    ],
    lifecycleTitle: "The Credential Lifecycle",
    lifecycleSubtitle:
      "Follow a single vocational credential from course completion through soulbound issuance to instant employer verification.",
    lifecycleSteps: [
      {
        label: "Course Completion",
        description:
          "A worker completes a vocational course at a training centre. The completion and assessed skill level are recorded as the basis for the credential.",
        icon: GraduationCap,
        logFilename: "cerulea_skill_engine.log",
        logLines: [
          { text: "[SYS] Registering vocational completion...", time: "09:11:26", tone: "default" },
          { text: "[CMD] completeCourse { worker: \"wrk_6612\", skill: \"WELDING_L3\" }", time: "09:11:26", tone: "primary" },
          { text: "[AUTH] Verifying assessed skill level...", time: "09:11:27", tone: "secondary" },
          { text: "[OK] Completion recorded at block 9702661.", time: "09:11:27", tone: "success" },
        ],
      },
      {
        label: "Credential Mint",
        description:
          "A soulbound micro-credential is minted to the worker's wallet. The skill, level, and issuing body are sealed to the credential.",
        icon: IdCard,
        logFilename: "cerulea_skill_engine.log",
        logLines: [
          { text: "[SYS] Executing soulbound mint protocol...", time: "09:11:29", tone: "default" },
          { text: "[CMD] mintCredential(worker: \"wrk_6612\", skill: \"WELDING_L3\", soulbound: true)", time: "09:11:29", tone: "primary" },
          { text: "[AUTH] Binding non-transferable token to wallet...", time: "09:11:30", tone: "secondary" },
          { text: "[OK] Credential SKILL_77120 minted to worker.", time: "09:11:30", tone: "success" },
        ],
      },
      {
        label: "Profile Stacking",
        description:
          "The credential stacks into the worker's portable skill profile. The profile updates with the new verifiable competency.",
        icon: Boxes,
        logFilename: "cerulea_skill_engine.log",
        logLines: [
          { text: "[SYS] Stacking credential into skill profile...", time: "09:11:32", tone: "default" },
          { text: "[CMD] stackCredential(worker: \"wrk_6612\", credential: \"SKILL_77120\")", time: "09:11:32", tone: "primary" },
          { text: "[SYS] Appending to portable profile...", time: "09:11:32", tone: "default" },
          { text: "[OK] Profile updated, 4 verified skills.", time: "09:11:33", tone: "success" },
        ],
      },
      {
        label: "Employer Verification",
        description:
          "An employer verifies the credential through the public API. A genuine skill certification returns valid in seconds, not days.",
        icon: Search,
        logFilename: "cerulea_skill_engine.log",
        logLines: [
          { text: "[SYS] Public API verification request...", time: "13:24:48", tone: "default" },
          { text: "[CMD] verifyCredential(SKILL_77120)", time: "13:24:48", tone: "primary" },
          { text: "[SYS] Resolving credential and issuer...", time: "13:24:48", tone: "default" },
          { text: "[OK] Skill certification valid, held by wrk_6612.", time: "13:24:49", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes micro-credential portability into modular contracts. Each layer records completion, mints a soulbound token, stacks the skill profile, and exposes a public API without any training provider mediating trust.",
    layers: [
      {
        title: "Completion Registry",
        subtitle: "The Skill Anchor",
        icon: GraduationCap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Skill Anchor",
          description:
            "The foundational data layer. It records each worker's vocational completion and assessed level, forming the immutable basis a micro-credential later points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SkillRegistry {\n  struct Completion {\n    bytes32 workerDID;\n    string skill;\n    uint8 level;\n    address issuer;\n  }\n\n  mapping(bytes32 => Completion) public completions;\n\n  function complete(bytes32 id, bytes32 did, string calldata skill, uint8 lvl) external onlyIssuer {\n    completions[id] = Completion(did, skill, lvl, msg.sender);\n  }\n}",
        simAction: "Simulate Completion Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading worker identity wrk_6612...", tone: "default" },
          { text: "Confirming WELDING_L3 assessment...", tone: "default" },
          { text: "Recording skill level 3...", tone: "default" },
          { text: "Writing completion to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Vocational completion anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Soulbound Mint",
        subtitle: "The Non-Transferable Skill",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Non-Transferable Skill",
          description:
            "The issuance engine. It mints a micro-credential bound permanently to the worker's wallet and blocks transfer, so a skill certificate cannot be sold or lent the way a paper one can.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function mintCredential(bytes32 completionId, address worker) external onlyIssuer {\n    uint256 id = _mint(worker, completionId);\n    soulbound[id] = true;\n    emit CredentialMinted(id, worker, completionId);\n}\n\nfunction _transfer(address, address, uint256 id) internal pure {\n    require(!soulbound[id], \"Soulbound: non-transferable\");\n}",
        simAction: "Simulate Soulbound Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading completion for wrk_6612...", tone: "default" },
          { text: "Minting credential SKILL_77120...", tone: "default" },
          { text: "Setting soulbound non-transfer flag...", tone: "default" },
          { text: "Binding token to worker wallet...", tone: "default" },
          { text: "[SUCCESS] Non-transferable credential minted.", tone: "success" },
        ],
      },
      {
        title: "Profile Stacker",
        subtitle: "The Portable Record",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Portable Record",
          description:
            "Assembles a growing skill record. It stacks each micro-credential into the worker's profile, so a portable, verifiable set of competencies accumulates across providers and sectors.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function stackCredential(address worker, uint256 credentialId) external {\n    require(ownerOf(credentialId) == worker, \"Not holder\");\n    profile[worker].push(credentialId);\n    emit CredentialStacked(worker, credentialId);\n}",
        simAction: "Simulate Profile Stacking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming worker holds SKILL_77120...", tone: "default" },
          { text: "Appending credential to profile...", tone: "default" },
          { text: "Updating portable skill set...", tone: "default" },
          { text: "Emitting stack event...", tone: "default" },
          { text: "[SUCCESS] Skill profile updated on-chain.", tone: "success" },
        ],
      },
      {
        title: "Verification API",
        subtitle: "The Employer Gateway",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Employer Gateway",
          description:
            "A public API that resolves a credential on the shared chain. It lets any employer verify a worker's skill in seconds without an account and without contacting the training body.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyCredential(uint256 credentialId) external view returns (bool valid, bytes32 worker, string memory skill) {\n    Completion memory c = completions[completionOf[credentialId]];\n    return (ownerOf(credentialId) != address(0), c.workerDID, c.skill);\n}",
        simAction: "Simulate API Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Employer calls public verification API...", tone: "default" },
          { text: "Resolving credential SKILL_77120...", tone: "default" },
          { text: "Confirming worker binding wrk_6612...", tone: "default" },
          { text: "Checking soulbound status intact...", tone: "default" },
          { text: "[SUCCESS] Skill verified in seconds.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Portable micro-credentials are a horizontal capability. Here is how different actors put the credential chain to work.",
    sectors: [
      { icon: Pickaxe, title: "Vocational Training Providers", description: "Issue tamper-proof soulbound credentials that employers verify through an open API, protecting graduates against credential fraud and raising the market value of every certificate they award.", assetTypes: ["Skill Credentials", "Course Records", "Issuance Logs"] },
      { icon: Building2, title: "Employers & Contractors", description: "Verify a candidate's vocational certifications in seconds during hiring, filtering out fabricated certificates without days of phoning training centres to confirm.", assetTypes: ["Skill Verifications", "Candidate Profiles", "Hiring Checks"] },
      { icon: Users, title: "Workers & Job Seekers", description: "Carry a portable, stackable profile of verified skills between employers, sectors, and regions, so competencies earned anywhere remain provable everywhere.", assetTypes: ["Skill Profiles", "Portable Credentials", "Competency Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a training provider's course system or issuing credentials to worker wallets, Cerulea routes both onto one hybrid credential chain.",
    tracks: [
      {
        title: "Track A: Provider System Bridging",
        description:
          "For training providers on existing course systems. Completion events are translated into soulbound credential mints through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Training Provider System", sublabel: "Course Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Minting", icon: Server, accent: true },
          { label: "Cerulea Hybrid Chain", sublabel: "Skill Credential Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Worker Wallet Holding",
        description:
          "For workers holding credentials on mobile. A wallet holds each soulbound skill and presents it to any employer through the public verification API.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Worker Wallet", sublabel: "Holder Devices", icon: Fingerprint, accent: false },
          { label: "Public Verifiers", sublabel: "Credential Consensus", icon: Network, accent: true },
          { label: "Cerulea Chain", sublabel: "Shared Skill Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a hybrid credential chain with soulbound micro-credentials, a stackable skill profile, and a public verification API from scratch requires specialised smart-contract engineers and long audit cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credential & Profile Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects hybrid-chain development benchmarks. Writing soulbound credential logic, building a stackable skill profile, and shipping a public verification API for an average provider takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your credential and profile rules into pre-audited WebAssembly binaries and provisions the credential chain and verification API instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "apprenticeship-hours-and-competency-tracking-for-trade-certification",
    icon: Pickaxe,
    eyebrow: "Trade Certification Layer",
    headline1: "Log every hour.",
    headline2: "Qualify on proof.",
    heroDescription:
      "Build a verified log of on-the-job hours and skill assessments that automatically qualifies an apprentice for trade certification. Verified hours and assessment results are recorded as they happen, so when an apprentice qualifies, the certification board confirms eligibility instantly.",
    heroCta: "Deploy Apprenticeship Logs",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn easily lost or falsified paper hour logs into a verified, real-time record that qualifies an apprentice automatically.",
    mechanics: [
      { title: "Verified Hour Log", description: "Record supervised hours as they happen. The DID and VC Ledger anchors each block of on-the-job hours with the supervising tradesperson, so a paper log that could be lost or padded becomes a signed, running total." },
      { title: "Competency Attestation", description: "Confirm skill assessments. The Compliance Attestations module records each passed competency check against the trade's requirements, so progress toward certification is evidence rather than a self-report." },
      { title: "Assessment Notary", description: "Seal each result. The Provenance Notary anchors assessment outcomes by digest, making a falsified skill certificate detectable against the recorded evidence." },
      { title: "Auto-Qualification", description: "Qualify the moment thresholds are met. When logged hours and passed competencies reach the trade's requirement, the contract marks the apprentice eligible, so certification is not delayed by manual tallying." },
      { title: "Supervisor Verification", description: "Attribute hours honestly. Each hour block is co-signed by a verified supervisor, so recorded time reflects real supervised work and not padded entries." },
      { title: "Board-Ready Eligibility", description: "Confirm eligibility instantly. A certification board reads the verified record and confirms an apprentice's readiness on demand, replacing a review of loose paper logbooks." },
    ],
    lifecycleTitle: "The Apprenticeship Lifecycle",
    lifecycleSubtitle:
      "Follow a single apprentice from a logged block of hours through competency assessment to automatic qualification and board confirmation.",
    lifecycleSteps: [
      {
        label: "Hours Logged",
        description:
          "A supervisor logs a block of the apprentice's on-the-job hours. The entry is co-signed and added to the running verified total.",
        icon: Activity,
        logFilename: "cerulea_apprentice_engine.log",
        logLines: [
          { text: "[SYS] Recording supervised hour block...", time: "08:37:14", tone: "default" },
          { text: "[CMD] logHours { apprentice: \"app_5520\", hours: 38, supervisor: \"SUP_112\" }", time: "08:37:14", tone: "primary" },
          { text: "[AUTH] Co-signing hours with supervisor...", time: "08:37:15", tone: "secondary" },
          { text: "[OK] Hours logged. Total now 1240 of 2000.", time: "08:37:15", tone: "success" },
        ],
      },
      {
        label: "Competency Assessment",
        description:
          "The apprentice passes a skill assessment. The competency result is attested and anchored against the trade's requirements.",
        icon: FileCheck,
        logFilename: "cerulea_apprentice_engine.log",
        logLines: [
          { text: "[SYS] Attesting competency assessment...", time: "11:24:41", tone: "default" },
          { text: "[CMD] attestCompetency(apprentice: \"app_5520\", unit: \"CIRCUIT_TEST\", pass: true)", time: "11:24:41", tone: "primary" },
          { text: "[AUTH] Sealing assessment result to record...", time: "11:24:42", tone: "secondary" },
          { text: "[OK] Competency 7 of 8 confirmed.", time: "11:24:42", tone: "success" },
        ],
      },
      {
        label: "Auto-Qualification",
        description:
          "The final hours and competency are recorded. The contract detects that requirements are met and marks the apprentice qualified.",
        icon: ShieldCheck,
        logFilename: "cerulea_apprentice_engine.log",
        logLines: [
          { text: "[SYS] Evaluating certification thresholds...", time: "14:02:58", tone: "default" },
          { text: "[CMD] checkQualification(apprentice: \"app_5520\", trade: \"ELECTRICIAN\")", time: "14:02:58", tone: "primary" },
          { text: "[SYS] 2000 hours and 8 competencies met.", time: "14:02:59", tone: "default" },
          { text: "[OK] Apprentice marked qualified.", time: "14:02:59", tone: "success" },
        ],
      },
      {
        label: "Board Confirmation",
        description:
          "The certification board confirms eligibility from the verified record. Readiness is confirmed instantly, not through a manual logbook review.",
        icon: Landmark,
        logFilename: "cerulea_apprentice_engine.log",
        logLines: [
          { text: "[SYS] Board requesting eligibility record...", time: "15:41:33", tone: "default" },
          { text: "[CMD] confirmEligibility(apprentice: \"app_5520\", trade: \"ELECTRICIAN\")", time: "15:41:33", tone: "primary" },
          { text: "[SYS] Resolving hours and competency proofs...", time: "15:41:33", tone: "default" },
          { text: "[OK] Eligibility confirmed instantly.", time: "15:41:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes trade certification into modular contracts. Each layer logs verified hours, attests competencies, evaluates qualification, and confirms eligibility without loose paper logbooks.",
    layers: [
      {
        title: "Hours Ledger",
        subtitle: "The Time Anchor",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Time Anchor",
          description:
            "The foundational data layer. It records each co-signed block of supervised hours into a running total, so an apprentice's time toward certification is a verified figure rather than a losable paper log.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ApprenticeRegistry {\n  struct Log {\n    uint256 totalHours;\n    uint8 competencies;\n    bool qualified;\n  }\n\n  mapping(bytes32 => Log) public logs;\n\n  function logHours(bytes32 apprentice, uint256 hours, address supervisor) external onlySupervisor(supervisor) {\n    logs[apprentice].totalHours += hours;\n    emit HoursLogged(apprentice, hours, supervisor);\n  }\n}",
        simAction: "Simulate Hours Log",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading apprentice app_5520...", tone: "default" },
          { text: "Co-signing 38 hours with SUP_112...", tone: "default" },
          { text: "Adding to running hour total...", tone: "default" },
          { text: "Writing log to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Supervised hours anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Competency Attestation",
        subtitle: "The Skill Check",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Skill Check",
          description:
            "The verification hook for skills. It attests each passed competency against the trade's units and seals the result, so progress toward certification rests on signed assessments rather than claims.",
          platformFunction: "Compliance & Attestation",
        },
        codeSnippet:
          "function attestCompetency(bytes32 apprentice, string calldata unit, bool pass) external onlyAssessor {\n    require(pass, \"Not passed\");\n    if (!passed[apprentice][unit]) {\n        logs[apprentice].competencies += 1;\n        passed[apprentice][unit] = true;\n    }\n    emit CompetencyAttested(apprentice, unit);\n}",
        simAction: "Simulate Competency Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Opening assessment CIRCUIT_TEST...", tone: "default" },
          { text: "Confirming apprentice passed unit...", tone: "default" },
          { text: "Sealing result to competency record...", tone: "default" },
          { text: "Incrementing competency count...", tone: "default" },
          { text: "[SUCCESS] Competency attested on-chain.", tone: "success" },
        ],
      },
      {
        title: "Qualification Engine",
        subtitle: "The Threshold Gate",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Threshold Gate",
          description:
            "The auto-qualifier. It checks logged hours and passed competencies against the trade requirement and marks an apprentice eligible the moment both are met, so certification is not delayed by manual tallying.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function checkQualification(bytes32 apprentice, bytes32 trade) external {\n    Requirement memory r = requirements[trade];\n    Log storage l = logs[apprentice];\n    if (l.totalHours >= r.hours && l.competencies >= r.units) {\n        l.qualified = true;\n        emit Qualified(apprentice, trade);\n    }\n}",
        simAction: "Simulate Auto-Qualification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading trade requirement ELECTRICIAN...", tone: "default" },
          { text: "Comparing 2000 hours against threshold...", tone: "default" },
          { text: "Comparing 8 competencies against units...", tone: "default" },
          { text: "Marking apprentice qualified...", tone: "default" },
          { text: "[SUCCESS] Apprentice auto-qualified on-chain.", tone: "success" },
        ],
      },
      {
        title: "Eligibility Window",
        subtitle: "The Board View",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Board View",
          description:
            "A read gateway for the certification board. It resolves an apprentice's hours and competency proofs into an eligibility answer, so a board confirms readiness instantly instead of reviewing loose logbooks.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function confirmEligibility(bytes32 apprentice, bytes32 trade) external view returns (bool eligible, uint256 hours, uint8 units) {\n    Log memory l = logs[apprentice];\n    return (l.qualified, l.totalHours, l.competencies);\n}",
        simAction: "Simulate Board Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Board queries apprentice app_5520...", tone: "default" },
          { text: "Resolving verified hour total...", tone: "default" },
          { text: "Resolving competency proofs...", tone: "default" },
          { text: "Confirming qualified status...", tone: "default" },
          { text: "[SUCCESS] Eligibility confirmed instantly.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified apprenticeship tracking is a horizontal capability. Here is how different actors put the certification ledger to work.",
    sectors: [
      { icon: Landmark, title: "Trade Certification Boards", description: "Confirm an apprentice's eligibility from a verified record of hours and competencies, replacing reviews of loose paper logbooks that are easy to lose or falsify.", assetTypes: ["Eligibility Records", "Competency Proofs", "Certification Grants"] },
      { icon: Pickaxe, title: "Employers & Master Tradespeople", description: "Log supervised hours as they happen with co-signed attribution, giving apprentices a credible record and protecting the workshop against disputes over recorded time.", assetTypes: ["Hour Logs", "Supervision Records", "Assessment Results"] },
      { icon: Users, title: "Apprentices & Trainees", description: "Carry a verified, running record of hours and passed assessments that qualifies them automatically, so certification is not delayed by lost paperwork or manual tallying.", assetTypes: ["Verified Hours", "Skill Assessments", "Qualification Status"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an employer's workforce system or capturing hours from a supervisor's phone, Cerulea routes both into one verified apprenticeship record.",
    tracks: [
      {
        title: "Track A: Workforce System Bridging",
        description:
          "For employers on existing workforce systems. Logged hours and assessment events are translated into on-chain records and attestations through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Workforce System", sublabel: "Employer Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Hour & Competency Anchoring", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Apprenticeship Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Supervisor Field Logging",
        description:
          "For supervisors logging hours on mobile. A co-signed entry from a supervisor device records verified hours directly on the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Supervisor Device", sublabel: "On-Site Logging", icon: Fingerprint, accent: false },
          { label: "Certification Validators", sublabel: "Hour Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Apprenticeship Record", icon: Pickaxe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an apprenticeship tracker with verified hour logging, competency attestation, and automatic qualification from scratch requires specialised workforce-systems engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Hour & Competency Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects workforce-compliance integration benchmarks. Building verified hour logging, wiring competency attestation, and shipping automatic qualification for an average trade program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your hour and competency rules into pre-audited WebAssembly binaries and provisions the apprenticeship ledger and eligibility layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "industry-sponsored-training-outcome-verification-for-subsidy-claims",
    icon: Factory,
    eyebrow: "Subsidy Verification Layer",
    headline1: "Train the worker.",
    headline2: "Prove the outcome.",
    heroDescription:
      "Stand up a verified record linking completed training to actual employment outcomes, used to validate government subsidy claims to companies. Verified training completion is tied to verified employment, so subsidy claims are checked against real evidence rather than self-reported numbers.",
    heroCta: "Deploy Subsidy Trackers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn inflated self-reported training claims into a verified chain from completed course to confirmed employment.",
    mechanics: [
      { title: "Completion Attestation", description: "Confirm training actually happened. The Compliance Attestations module records that a sponsored worker completed a course, so a subsidy claim rests on a signed completion rather than a company's assertion." },
      { title: "Employment Credential", description: "Verify the resulting job. The DID and VC Ledger ties a verified employment record to the trained worker, so the outcome behind a claim is evidence and not a number on a form." },
      { title: "Identity Linkage", description: "Match training to the right worker. The Civil Registry anchors a durable identity so a completed course and a confirmed job map to the same person, preventing recycled or fabricated claimants." },
      { title: "Outcome Notary", description: "Seal the evidence chain. The Provenance Notary anchors the completion and employment proofs by digest, so an auditor traces a subsidy claim to the exact training and outcome that justify it." },
      { title: "Claim Validation", description: "Approve claims against proof. A subsidy claim is validated only when both the completion and employment records verify, so inflated or duplicate claims fail automatically." },
      { title: "Auditor Window", description: "Give funders a verifiable view. Government auditors read the linked records directly, replacing a review of self-reported spreadsheets with a query against on-chain evidence." },
    ],
    lifecycleTitle: "The Subsidy Lifecycle",
    lifecycleSubtitle:
      "Follow a single subsidy claim from a completed training through verified employment to validated payout.",
    lifecycleSteps: [
      {
        label: "Training Completion",
        description:
          "A company-sponsored worker completes a training course. The completion is attested and anchored to the worker's identity.",
        icon: GraduationCap,
        logFilename: "cerulea_subsidy_engine.log",
        logLines: [
          { text: "[SYS] Attesting sponsored training completion...", time: "09:26:41", tone: "default" },
          { text: "[CMD] attestCompletion { worker: \"wrk_8810\", course: \"CNC_OPS\", sponsor: \"FIRM_44\" }", time: "09:26:41", tone: "primary" },
          { text: "[AUTH] Sealing completion to worker identity...", time: "09:26:42", tone: "secondary" },
          { text: "[OK] Completion anchored at block 9902881.", time: "09:26:42", tone: "success" },
        ],
      },
      {
        label: "Employment Verification",
        description:
          "The worker's resulting employment is verified. An employment credential is issued and linked to the training completion.",
        icon: IdCard,
        logFilename: "cerulea_subsidy_engine.log",
        logLines: [
          { text: "[SYS] Verifying employment outcome...", time: "12:03:18", tone: "default" },
          { text: "[CMD] verifyEmployment(worker: \"wrk_8810\", employer: \"FIRM_44\", role: \"CNC_OP\")", time: "12:03:18", tone: "primary" },
          { text: "[SYS] Linking employment to training completion...", time: "12:03:19", tone: "default" },
          { text: "[OK] Employment credential linked.", time: "12:03:19", tone: "success" },
        ],
      },
      {
        label: "Claim Submission",
        description:
          "The company submits a subsidy claim. The contract validates it against the linked completion and employment evidence.",
        icon: FileCheck,
        logFilename: "cerulea_subsidy_engine.log",
        logLines: [
          { text: "[SYS] Validating subsidy claim...", time: "14:38:52", tone: "default" },
          { text: "[CMD] submitClaim(sponsor: \"FIRM_44\", worker: \"wrk_8810\", amount: 45000)", time: "14:38:52", tone: "primary" },
          { text: "[AUTH] Checking completion and employment proofs...", time: "14:38:53", tone: "secondary" },
          { text: "[OK] Claim validated against real evidence.", time: "14:38:53", tone: "success" },
        ],
      },
      {
        label: "Audit & Payout",
        description:
          "An auditor confirms the claim from the linked records and the subsidy is approved. Validation rests on verified evidence, not self-reported figures.",
        icon: Landmark,
        logFilename: "cerulea_subsidy_engine.log",
        logLines: [
          { text: "[SYS] Auditor reviewing validated claim...", time: "16:14:07", tone: "default" },
          { text: "[CMD] approveSubsidy(claim: \"CLM_5521\")", time: "16:14:07", tone: "primary" },
          { text: "[SYS] Resolving completion to employment chain...", time: "16:14:08", tone: "default" },
          { text: "[OK] Subsidy approved on verified evidence.", time: "16:14:08", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes subsidy verification into modular contracts. Each layer attests completion, verifies employment, validates the claim, and exposes an auditor view so subsidies pay only against a real training-to-outcome chain.",
    layers: [
      {
        title: "Completion Attestation",
        subtitle: "The Training Proof",
        icon: GraduationCap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Training Proof",
          description:
            "The foundational compliance layer. It attests that a sponsored worker completed a course and anchors it to their identity, so the training half of a subsidy claim rests on signed evidence rather than a company assertion.",
          platformFunction: "Compliance & Attestation",
        },
        codeSnippet:
          "contract SubsidyRegistry {\n  struct Completion {\n    bytes32 workerDID;\n    string course;\n    address sponsor;\n  }\n\n  mapping(bytes32 => Completion) public completions;\n\n  function attestCompletion(bytes32 id, bytes32 did, string calldata course, address sponsor) external onlyProvider {\n    completions[id] = Completion(did, course, sponsor);\n  }\n}",
        simAction: "Simulate Completion Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading worker identity wrk_8810...", tone: "default" },
          { text: "Confirming CNC_OPS completion...", tone: "default" },
          { text: "Sealing training to worker identity...", tone: "default" },
          { text: "Writing completion to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Training completion attested on-chain.", tone: "success" },
        ],
      },
      {
        title: "Employment Verifier",
        subtitle: "The Outcome Seal",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Outcome Seal",
          description:
            "The verification hook for outcomes. It issues an employment credential linked to the training completion, so the job that justifies a subsidy is verifiable evidence tied to the same worker.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function verifyEmployment(bytes32 completionId, address employer, string calldata role) external onlyVerifier {\n    require(completions[completionId].workerDID != 0, \"No training\");\n    employment[completionId] = Employment(employer, role, block.timestamp);\n    emit EmploymentVerified(completionId, employer);\n}",
        simAction: "Simulate Employment Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading completion for wrk_8810...", tone: "default" },
          { text: "Confirming employer FIRM_44 record...", tone: "default" },
          { text: "Linking role CNC_OP to training...", tone: "default" },
          { text: "Sealing employment credential...", tone: "default" },
          { text: "[SUCCESS] Employment outcome verified on-chain.", tone: "success" },
        ],
      },
      {
        title: "Claim Validator",
        subtitle: "The Evidence Gate",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Gate",
          description:
            "The validation executor. It approves a subsidy claim only when both the completion and the employment records verify, so inflated, duplicate, or fabricated claims fail automatically.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function submitClaim(bytes32 completionId, uint256 amount) external onlySponsor {\n    require(employment[completionId].employer != address(0), \"No outcome\");\n    require(!claimed[completionId], \"Already claimed\");\n    claimed[completionId] = true;\n    claims[completionId] = Claim(msg.sender, amount, false);\n    emit ClaimValidated(completionId, amount);\n}",
        simAction: "Simulate Claim Validation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving claim from sponsor FIRM_44...", tone: "default" },
          { text: "Checking training completion proof...", tone: "default" },
          { text: "Checking employment outcome proof...", tone: "default" },
          { text: "Blocking duplicate claim attempt...", tone: "default" },
          { text: "[SUCCESS] Claim validated against evidence.", tone: "success" },
        ],
      },
      {
        title: "Auditor Window",
        subtitle: "The Funder View",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Funder View",
          description:
            "A read gateway for government auditors. It resolves a claim to its linked completion and employment records, so a subsidy is approved from a verifiable chain rather than a self-reported spreadsheet.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function approveSubsidy(bytes32 completionId) external view onlyAuditor returns (Completion memory, Employment memory, Claim memory) {\n    return (completions[completionId], employment[completionId], claims[completionId]);\n}",
        simAction: "Simulate Audit Approval",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Auditor opens claim CLM_5521...", tone: "default" },
          { text: "Resolving training completion record...", tone: "default" },
          { text: "Resolving linked employment record...", tone: "default" },
          { text: "Confirming claim evidence chain...", tone: "default" },
          { text: "[SUCCESS] Subsidy approved on verified evidence.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified outcome-based subsidy is a horizontal capability. Here is how different actors put the verification ledger to work.",
    sectors: [
      { icon: Landmark, title: "Government Subsidy Programs", description: "Approve training subsidies against a verified training-to-employment chain, replacing self-reported claims that inflate outcomes with automatic validation on real evidence.", assetTypes: ["Subsidy Claims", "Evidence Chains", "Audit Records"] },
      { icon: Factory, title: "Sponsoring Employers", description: "Submit subsidy claims backed by verifiable completion and employment records, speeding legitimate reimbursement and protecting honest companies against suspicion of inflated numbers.", assetTypes: ["Training Records", "Employment Proofs", "Validated Claims"] },
      { icon: Pickaxe, title: "Training Providers", description: "Attest completions that carry through to verified employment outcomes, demonstrating the real impact of their programs and strengthening the case for continued public funding.", assetTypes: ["Completion Attestations", "Outcome Links", "Program Evidence"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an employer's HR system or a provider's training platform, Cerulea routes both into one verified subsidy evidence record.",
    tracks: [
      {
        title: "Track A: Employer HR Bridging",
        description:
          "For companies on existing HR systems. Completion and employment events are translated into on-chain attestations and credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Employer HRIS", sublabel: "Company Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Attestation & Credential", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Subsidy Evidence Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Provider Platform Capture",
        description:
          "For training providers on course platforms. Signed completion attestations are routed directly into the subsidy evidence chain on the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Provider Platform", sublabel: "Training Systems", icon: Fingerprint, accent: false },
          { label: "Subsidy Validators", sublabel: "Evidence Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Evidence Record", icon: Factory, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a subsidy verification system with completion attestation, employment linkage, and evidence-based claim validation from scratch requires specialised compliance engineers and long systems integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Outcome & Claim Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects public-subsidy integration benchmarks. Wiring completion attestation into employer and provider systems, linking verified employment, and shipping evidence-based claim validation for an average program takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your outcome and claim rules into pre-audited WebAssembly binaries and provisions the subsidy evidence ledger and auditor view instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const educationAcademiaItems: ExtraCaseItem[] = [
  {
    label: "Degree and credential verification across institutions and employers",
    href: "/solutions/use-case/degree-and-credential-verification-across-institutions-and-employers",
    description: "Verify any degree by QR scan in seconds.",
    icon: GraduationCap,
    category: "ENTERPRISE",
    tags: ["Credentials", "Verification"],
    industry: INDUSTRY,
  },
  {
    label: "Research grant fund disbursement and milestone reporting",
    href: "/solutions/use-case/research-grant-fund-disbursement-and-milestone-reporting",
    description: "Release funding automatically as milestones are verified.",
    icon: FlaskConical,
    category: "GOVERNMENT",
    tags: ["Grants", "Escrow"],
    industry: INDUSTRY,
  },
  {
    label: "Multi-university credit transfer and exchange program records",
    href: "/solutions/use-case/multi-university-credit-transfer-and-exchange-program-records",
    description: "Exchange credits recognized at home in one day.",
    icon: Handshake,
    category: "ENTERPRISE",
    tags: ["Credit Transfer", "Interoperability"],
    industry: INDUSTRY,
  },
  {
    label: "Alumni donation tracking with designated fund usage transparency",
    href: "/solutions/use-case/alumni-donation-tracking-with-designated-fund-usage-transparency",
    description: "Show donors exactly how each gift was spent.",
    icon: Gift,
    category: "ENTERPRISE",
    tags: ["Donations", "Transparency"],
    industry: INDUSTRY,
  },
  {
    label: "International student visa sponsorship and compliance tracking",
    href: "/solutions/use-case/international-student-visa-sponsorship-and-compliance-tracking",
    description: "Verified enrollment status with automatic immigration reporting alerts.",
    icon: IdCard,
    category: "GOVERNMENT",
    tags: ["Immigration", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Faculty research output and citation verification for promotions",
    href: "/solutions/use-case/faculty-research-output-and-citation-verification-for-promotions",
    description: "Verified publication and citation records for promotion committees.",
    icon: ScrollText,
    category: "ENTERPRISE",
    tags: ["Research", "Citations"],
    industry: INDUSTRY,
  },
  {
    label: "Course completion certificate issuance on-chain",
    href: "/solutions/use-case/course-completion-certificate-issuance-on-chain",
    description: "Soulbound certificates employers verify without the platform.",
    icon: QrCode,
    category: "DAPPS",
    tags: ["Certificates", "Soulbound"],
    industry: INDUSTRY,
  },
  {
    label: "Instructor revenue share for multi-creator course bundles",
    href: "/solutions/use-case/instructor-revenue-share-for-multi-creator-course-bundles",
    description: "Automatic bundle payouts by verified enrollment and engagement.",
    icon: PieChart,
    category: "DAPPS",
    tags: ["Revenue Share", "Royalties"],
    industry: INDUSTRY,
  },
  {
    label: "Proctored exam integrity and certificate validity registry",
    href: "/solutions/use-case/proctored-exam-integrity-and-certificate-validity-registry",
    description: "Verify a certificate and its supervised exam together.",
    icon: Shield,
    category: "DAPPS",
    tags: ["Exam Integrity", "Registry"],
    industry: INDUSTRY,
  },
  {
    label: "Corporate training completion tracking for compliance mandates",
    href: "/solutions/use-case/corporate-training-completion-tracking-for-compliance-mandates",
    description: "Instant workforce-wide proof of mandatory training completion.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Training", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Student academic record integrity across schools",
    href: "/solutions/use-case/student-academic-record-integrity-across-schools",
    description: "One-day transfers with forgery-proof consortium transcripts.",
    icon: Database,
    category: "GOVERNMENT",
    tags: ["Transcripts", "Consortium"],
    industry: INDUSTRY,
  },
  {
    label: "Mid-day meal scheme distribution and nutrition compliance tracking",
    href: "/solutions/use-case/mid-day-meal-scheme-distribution-and-nutrition-compliance-tracking",
    description: "Point-of-delivery meal and nutrition verification across schools.",
    icon: Truck,
    category: "GOVERNMENT",
    tags: ["Nutrition", "Public Scheme"],
    industry: INDUSTRY,
  },
  {
    label: "School infrastructure grant utilization tracking",
    href: "/solutions/use-case/school-infrastructure-grant-utilization-tracking",
    description: "Trace grants from disbursement to verified construction completion.",
    icon: Building2,
    category: "GOVERNMENT",
    tags: ["Grants", "Procurement"],
    industry: INDUSTRY,
  },
  {
    label: "Skill certification and micro-credential portability",
    href: "/solutions/use-case/skill-certification-and-micro-credential-portability",
    description: "Portable soulbound skills verified through a public API.",
    icon: IdCard,
    category: "DAPPS",
    tags: ["Micro-Credentials", "Portability"],
    industry: INDUSTRY,
  },
  {
    label: "Apprenticeship hours and competency tracking for trade certification",
    href: "/solutions/use-case/apprenticeship-hours-and-competency-tracking-for-trade-certification",
    description: "Verified hours and competencies that auto-qualify apprentices.",
    icon: Pickaxe,
    category: "GOVERNMENT",
    tags: ["Apprenticeship", "Trade Certs"],
    industry: INDUSTRY,
  },
  {
    label: "Industry-sponsored training outcome verification for subsidy claims",
    href: "/solutions/use-case/industry-sponsored-training-outcome-verification-for-subsidy-claims",
    description: "Validate subsidy claims against verified training and employment.",
    icon: Factory,
    category: "GOVERNMENT",
    tags: ["Subsidy", "Outcomes"],
    industry: INDUSTRY,
  },
]
