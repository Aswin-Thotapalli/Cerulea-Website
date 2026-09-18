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

const INDUSTRY = "Cybersecurity"

export const cybersecurityCases: CaseEntry[] = [
  {
    slug: "threat-intelligence-sharing-across-organizations-without-revealing-int",
    icon: Shield,
    eyebrow: "Threat Intelligence Exchange Layer",
    headline1: "Share the threat.",
    headline2: "Shield the source.",
    heroDescription:
      "Let members submit attack indicators to a shared network without revealing identity or internal exposure. The Privacy and Compliance Guard and ZK Credentials Kit anonymize each submission, while Notifications propagate new indicators to every defender in real time.",
    heroCta: "Deploy Intelligence Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn siloed, liability-bound threat data into an anonymous shared defense that moves faster than the attacker.",
    mechanics: [
      { title: "Anonymous Submission", description: "Break the liability deadlock. The ZK Credentials Kit lets a member prove it belongs to the consortium and submit indicators without ever revealing its identity or which system was hit." },
      { title: "Privacy Guard Filtering", description: "Strip internal exposure before it leaves the door. The Privacy and Compliance Guard scrubs member-identifying fields from each indicator, so shared intelligence never leaks the victim's internal topology." },
      { title: "Real-Time Propagation", description: "Collapse the response window. Notifications push every confirmed indicator to all member defenders the moment it lands, so a filter update reaches the whole network in minutes, not weeks." },
      { title: "Indicator Deduplication", description: "Keep the feed clean. Matching hashes, domains, and payload signatures are merged into a single canonical indicator, so defenders act on one confirmed threat rather than dozens of noisy copies." },
      { title: "Membership Attestation", description: "Trust the feed without trusting the sender. A zero-knowledge proof confirms the submitter is a credentialed member, letting defenders weight an anonymous indicator without knowing who filed it." },
      { title: "Immutable Audit Ledger", description: "Prove participation without exposure. Each submission and propagation event is anchored on the shared network, giving members a defensible record of contribution that never ties a threat back to its source." },
    ],
    lifecycleTitle: "The Intelligence Lifecycle",
    lifecycleSubtitle:
      "Follow a single novel indicator from an anonymous submission to a network-wide filter update that contains the campaign.",
    lifecycleSteps: [
      {
        label: "Anonymous Submission",
        description:
          "A member bank hit by a novel phishing attack submits the indicators. The ZK Credentials Kit proves membership and anonymizes the origin before the record is written.",
        icon: Fingerprint,
        logFilename: "cerulea_threatshare.log",
        logLines: [
          { text: "[SYS] Initializing anonymous indicator intake...", time: "07:41:12", tone: "default" },
          { text: "[CMD] submitIndicator { type: \"PHISH_DOMAIN\", proof: \"ZK_MEMBER\" }", time: "07:41:12", tone: "primary" },
          { text: "[AUTH] Verifying membership proof without revealing identity...", time: "07:41:13", tone: "secondary" },
          { text: "[OK] Indicator IOC_5521 accepted. Source unlinkable.", time: "07:41:13", tone: "success" },
        ],
      },
      {
        label: "Privacy Guard Scrub",
        description:
          "The Privacy and Compliance Guard strips every internal-topology field from the indicator, so the shared payload carries the threat without exposing the victim.",
        icon: Lock,
        logFilename: "cerulea_threatshare.log",
        logLines: [
          { text: "[SYS] Scanning IOC_5521 for member-identifying fields...", time: "07:41:15", tone: "default" },
          { text: "[CMD] redactInternal(IOC_5521, policy: \"NO_TOPOLOGY\")", time: "07:41:15", tone: "primary" },
          { text: "[SYS] Removed internal host references and mailbox paths.", time: "07:41:16", tone: "default" },
          { text: "[OK] Sanitized indicator sealed for distribution.", time: "07:41:16", tone: "success" },
        ],
      },
      {
        label: "Network Propagation",
        description:
          "Notifications broadcast the sanitized indicator to every member defender. Each subscriber receives the domain, hash, and recommended filter action instantly.",
        icon: Network,
        logFilename: "cerulea_threatshare.log",
        logLines: [
          { text: "[SYS] Fanning IOC_5521 to 62 subscribed members...", time: "07:42:02", tone: "default" },
          { text: "[CMD] broadcast(IOC_5521, channel: \"EMAIL_FILTER\")", time: "07:42:02", tone: "primary" },
          { text: "[SYS] Delivery acknowledged by 62/62 defender nodes.", time: "07:42:04", tone: "default" },
          { text: "[OK] Indicator live across the consortium.", time: "07:42:04", tone: "success" },
        ],
      },
      {
        label: "Coordinated Containment",
        description:
          "Within two hours, 47 members apply the indicator to their email filters. The campaign is contained across the network before it spreads further.",
        icon: ShieldCheck,
        logFilename: "cerulea_threatshare.log",
        logLines: [
          { text: "[SYS] Aggregating member enforcement status...", time: "09:38:47", tone: "default" },
          { text: "[CMD] reportEnforcement(IOC_5521)", time: "09:38:47", tone: "primary" },
          { text: "[SYS] 47 members updated email filters within 2h window.", time: "09:38:48", tone: "default" },
          { text: "[OK] Campaign contained. Attacker advantage neutralized.", time: "09:38:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes threat sharing into modular contracts. Each layer authenticates a member, anonymizes the payload, propagates it, and records participation without any single party learning who was breached.",
    layers: [
      {
        title: "ZK Membership",
        subtitle: "The Anonymous Credential",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Anonymous Credential",
          description:
            "The trust anchor. It lets a member prove it belongs to the consortium using a zero-knowledge proof, so defenders can weight an indicator's credibility without ever learning which organization submitted it.",
          platformFunction: "Identity & Attestation",
        },
        codeSnippet:
          "contract MemberProof {\n  mapping(bytes32 => bool) public usedNullifiers;\n\n  function submit(bytes32 nullifier, bytes calldata zkProof, bytes32 iocHash) external {\n    require(!usedNullifiers[nullifier], \"Replay\");\n    require(verifyMembership(zkProof), \"Not a member\");\n    usedNullifiers[nullifier] = true;\n    emit IndicatorSubmitted(iocHash, block.timestamp);\n  }\n}",
        simAction: "Simulate Anonymous Submission",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Generating zero-knowledge membership proof...", tone: "default" },
          { text: "Checking nullifier against replay set...", tone: "default" },
          { text: "Binding indicator hash to anonymous submission...", tone: "default" },
          { text: "[SUCCESS] Indicator IOC_5521 accepted, source unlinkable.", tone: "success" },
        ],
      },
      {
        title: "Privacy Guard",
        subtitle: "The Redaction Engine",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Redaction Engine",
          description:
            "Prevents accidental exposure. Before any indicator is distributed, this module strips internal host references, mailbox paths, and other topology fields, so members share the threat without leaking their own attack surface.",
          platformFunction: "Privacy & Compliance",
        },
        codeSnippet:
          "function redact(bytes32 iocId, Field[] calldata fields) external onlyGuard {\n    for (uint256 i = 0; i < fields.length; i++) {\n        if (isInternal(fields[i])) delete payload[iocId][fields[i].key];\n    }\n    sanitized[iocId] = true;\n    emit IndicatorSanitized(iocId);\n}",
        simAction: "Simulate Privacy Scrub",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading raw indicator IOC_5521...", tone: "default" },
          { text: "Detecting internal topology fields...", tone: "default" },
          { text: "Redacting host references and mailbox paths...", tone: "default" },
          { text: "Sealing sanitized payload for the network...", tone: "default" },
          { text: "[SUCCESS] Indicator sanitized, safe to distribute.", tone: "success" },
        ],
      },
      {
        title: "Propagation Bus",
        subtitle: "The Real-Time Fanout",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Real-Time Fanout",
          description:
            "The distribution layer. It pushes each sanitized indicator to every subscribed member defender the instant it is confirmed, turning a single organization's discovery into a network-wide filter update within minutes.",
          platformFunction: "Notifications & Delivery",
        },
        codeSnippet:
          "function broadcast(bytes32 iocId) external onlyGuard {\n    require(sanitized[iocId], \"Not sanitized\");\n    for (uint256 i = 0; i < members.length; i++) {\n        emit Notify(members[i], iocId, block.timestamp);\n    }\n}",
        simAction: "Simulate Network Broadcast",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming IOC_5521 is sanitized...", tone: "default" },
          { text: "Enumerating 62 subscribed defender nodes...", tone: "default" },
          { text: "Emitting notification events to all members...", tone: "default" },
          { text: "Collecting delivery acknowledgements...", tone: "default" },
          { text: "[SUCCESS] Indicator live across 62 defenders.", tone: "success" },
        ],
      },
      {
        title: "Contribution Ledger",
        subtitle: "The Participation Proof",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Participation Proof",
          description:
            "The accountability layer. It records every submission and enforcement event on the shared network, giving members a defensible record of contribution and containment that never links a threat back to the breached party.",
          platformFunction: "Audit & Governance",
        },
        codeSnippet:
          "function recordEnforcement(bytes32 iocId, bytes32 memberTag) external {\n    enforcement[iocId].push(Record(memberTag, block.timestamp));\n    emit Enforced(iocId, memberTag, block.timestamp);\n}",
        simAction: "Simulate Containment Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Collecting enforcement reports for IOC_5521...", tone: "default" },
          { text: "Counting 47 members with updated filters...", tone: "default" },
          { text: "Anchoring participation record on-chain...", tone: "default" },
          { text: "Sealing containment timeline...", tone: "default" },
          { text: "[SUCCESS] Campaign containment proven on the ledger.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anonymous threat sharing is a horizontal capability. Here is how different defender communities put the shared network to work.",
    sectors: [
      { icon: Landmark, title: "Financial ISACs", description: "Let member banks and payment firms share phishing and fraud indicators without disclosing which institution was targeted, so a novel campaign against one member is neutralized across the sector in hours.", assetTypes: ["Phishing Indicators", "Fraud Signatures", "Sector Alerts"] },
      { icon: Hospital, title: "Healthcare & Critical Infrastructure", description: "Hospitals and utilities exchange ransomware and intrusion indicators under strict privacy rules, turning an attack on one facility into a hardened defense for every provider without exposing patient systems.", assetTypes: ["Ransomware IOCs", "Intrusion Patterns", "Incident Feeds"] },
      { icon: Building2, title: "Enterprise Security Teams", description: "Corporate SOCs across a supply chain pool malware and command-and-control indicators anonymously, closing the gap attackers exploit between siloed defenders that never compare notes.", assetTypes: ["Malware Hashes", "C2 Domains", "TTP Reports"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an enterprise SIEM through an API or submitting indicators from an analyst's anonymized wallet, Cerulea routes both into one privacy-preserving shared feed.",
    tracks: [
      {
        title: "Track A: Enterprise SIEM Bridging",
        description:
          "For large SOCs on legacy SIEM and TIP platforms. Detected indicators are hashed, sanitized, and translated into anonymous on-chain submissions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy SIEM / TIP", sublabel: "Enterprise Security Stack", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Hashing & Redaction", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Intelligence Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Analyst Anonymous Submission",
        description:
          "For individual analysts and small teams. A wallet-signed client attaches a zero-knowledge membership proof and routes each anonymized indicator directly to the shared feed.",
        connectorLabels: ["ZK PROOF", "STATE EXECUTION"],
        nodes: [
          { label: "Analyst Client / Wallet", sublabel: "Anonymized Submitter", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Membership Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Indicator Feed", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an anonymous threat-sharing network with zero-knowledge membership, privacy redaction, and real-time propagation from scratch requires specialized cryptography engineers and long consortium negotiations. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Privacy & Propagation Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects threat-intelligence platform integration benchmarks. Designing zero-knowledge membership circuits, writing redaction policies, and shipping a real-time propagation bus for an average consortium takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your privacy and propagation rules into pre-audited WebAssembly binaries and provisions the shared feed and ZK credential layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "bug-bounty-program-payout-verification-and-researcher-reputation",
    icon: Coins,
    eyebrow: "Vulnerability Settlement Layer",
    headline1: "Confirm the finding.",
    headline2: "Release the reward.",
    heroDescription:
      "Tie every bounty payout to a verified vulnerability confirmation through Escrow and Conditional Settlement, so researchers are paid the moment a finding is validated. A Soulbound Token and the DID and VC Ledger issue a portable reputation credential that travels across every program.",
    heroCta: "Deploy Bounty Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn slow, disputed payouts and non-portable track records into automated settlement and a credential the researcher owns.",
    mechanics: [
      { title: "Conditional Escrow", description: "Fund the reward up front. The program locks the bounty in Escrow and Conditional Settlement when a report is filed, so the researcher sees committed capital instead of an unenforceable promise." },
      { title: "Confirmation-Gated Payout", description: "Pay on proof, not politics. Settlement executes only when the vulnerability is formally confirmed, releasing funds automatically and removing the manual approval step where disputes fester." },
      { title: "Soulbound Reputation", description: "Make the track record non-transferable. A Soulbound Token binds each confirmed finding to the researcher's identity, building a reputation that cannot be bought, sold, or faked." },
      { title: "Portable Credential", description: "Carry proof between programs. The DID and VC Ledger issues a verifiable credential from confirmed findings, so a researcher's history follows them across every bug bounty platform." },
      { title: "Severity Weighting", description: "Reward impact honestly. Each confirmed finding records its severity on-chain, so reputation reflects the weight of critical discoveries rather than a raw count of low-value reports." },
      { title: "Dispute Reduction", description: "Settle from evidence. Because payout is gated on a signed confirmation, a contested reward resolves against the on-chain settlement record instead of a back-and-forth email thread." },
    ],
    lifecycleTitle: "The Bounty Lifecycle",
    lifecycleSubtitle:
      "Follow a single vulnerability report from a funded escrow to an automatic payout and a reputation credential the researcher keeps.",
    lifecycleSteps: [
      {
        label: "Report & Escrow",
        description:
          "A researcher files a vulnerability report and the program funds the reward. Escrow and Conditional Settlement locks the bounty against the specific finding.",
        icon: Wallet,
        logFilename: "cerulea_bounty.log",
        logLines: [
          { text: "[SYS] Registering vulnerability report VR_3390...", time: "10:05:31", tone: "default" },
          { text: "[CMD] openEscrow { report: \"VR_3390\", reward: 12000 }", time: "10:05:31", tone: "primary" },
          { text: "[AUTH] Locking reward against confirmation condition...", time: "10:05:32", tone: "secondary" },
          { text: "[OK] Escrow funded. Payout gated on confirmation.", time: "10:05:32", tone: "success" },
        ],
      },
      {
        label: "Triage & Confirmation",
        description:
          "The program's security team reproduces the issue and signs the confirmation. The signed attestation is anchored as the settlement trigger.",
        icon: FileCheck,
        logFilename: "cerulea_bounty.log",
        logLines: [
          { text: "[SYS] Awaiting triage decision on VR_3390...", time: "14:22:08", tone: "default" },
          { text: "[CMD] confirmFinding(VR_3390, severity: \"HIGH\")", time: "14:22:08", tone: "primary" },
          { text: "[SYS] Confirmation signed by program security lead.", time: "14:22:09", tone: "default" },
          { text: "[OK] Condition met. Settlement authorized.", time: "14:22:09", tone: "success" },
        ],
      },
      {
        label: "Automatic Payout",
        description:
          "Settlement releases the escrowed reward to the researcher's wallet the moment confirmation lands, with no manual approval delay.",
        icon: Coins,
        logFilename: "cerulea_bounty.log",
        logLines: [
          { text: "[SYS] Executing conditional settlement for VR_3390...", time: "14:22:11", tone: "default" },
          { text: "[CMD] release(VR_3390, to: \"researcher_0x7C\")", time: "14:22:11", tone: "primary" },
          { text: "[SYS] Transferring 12000 from escrow vault...", time: "14:22:11", tone: "default" },
          { text: "[OK] Reward paid. Dispute window skipped.", time: "14:22:12", tone: "success" },
        ],
      },
      {
        label: "Reputation Credential",
        description:
          "A Soulbound Token and the DID and VC Ledger mint a portable reputation credential from the confirmed finding, ready to present on any other program.",
        icon: IdCard,
        logFilename: "cerulea_bounty.log",
        logLines: [
          { text: "[SYS] Minting reputation credential from VR_3390...", time: "14:22:14", tone: "default" },
          { text: "[CMD] issueSBT(researcher_0x7C, severity: \"HIGH\")", time: "14:22:14", tone: "primary" },
          { text: "[AUTH] Binding non-transferable token to DID...", time: "14:22:15", tone: "secondary" },
          { text: "[OK] Portable credential issued. Reputation travels.", time: "14:22:15", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes bug bounty settlement into modular contracts. Each layer escrows the reward, gates it on confirmation, mints a non-transferable reputation, and issues a credential the researcher carries across programs.",
    layers: [
      {
        title: "Escrow Vault",
        subtitle: "The Committed Reward",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Committed Reward",
          description:
            "The funding anchor. It locks the bounty against a specific report the moment it is filed, so the researcher works against committed capital rather than an unenforceable promise from the program.",
          platformFunction: "Escrow & Custody",
        },
        codeSnippet:
          "contract BountyEscrow {\n  struct Vault {\n    address program;\n    address researcher;\n    uint256 reward;\n    bool released;\n  }\n\n  mapping(bytes32 => Vault) public vaults;\n\n  function open(bytes32 reportId, address researcher) external payable {\n    vaults[reportId] = Vault(msg.sender, researcher, msg.value, false);\n  }\n}",
        simAction: "Simulate Escrow Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading report VR_3390 metadata...", tone: "default" },
          { text: "Locking 12000 in the bounty vault...", tone: "default" },
          { text: "Binding vault to researcher and program...", tone: "default" },
          { text: "[SUCCESS] Reward committed and gated on confirmation.", tone: "success" },
        ],
      },
      {
        title: "Confirmation Gate",
        subtitle: "The Settlement Trigger",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Settlement Trigger",
          description:
            "The payout condition. It releases the escrowed reward only against a signed confirmation from the program, turning the disputed manual approval step into a deterministic on-chain settlement.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function release(bytes32 reportId, bytes calldata confirmSig) external {\n    Vault storage v = vaults[reportId];\n    require(!v.released, \"Already paid\");\n    require(verifyProgram(v.program, confirmSig), \"Unconfirmed\");\n    v.released = true;\n    payable(v.researcher).transfer(v.reward);\n    emit Settled(reportId, v.researcher, v.reward);\n}",
        simAction: "Simulate Confirmed Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying program confirmation signature...", tone: "default" },
          { text: "Checking vault has not been released...", tone: "default" },
          { text: "Transferring reward to researcher wallet...", tone: "default" },
          { text: "Marking settlement complete...", tone: "default" },
          { text: "[SUCCESS] Reward paid on confirmation, no dispute.", tone: "success" },
        ],
      },
      {
        title: "Soulbound Reputation",
        subtitle: "The Non-Transferable Record",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Non-Transferable Record",
          description:
            "The identity layer. It mints a Soulbound Token bound to the researcher for each confirmed finding, building a reputation that cannot be traded away and reflects the severity of real discoveries.",
          platformFunction: "Reputation & Identity",
        },
        codeSnippet:
          "function issueSBT(address researcher, bytes32 reportId, uint8 severity) external onlyGate {\n    require(soul[reportId] == address(0), \"Issued\");\n    soul[reportId] = researcher;\n    reputation[researcher] += weight(severity);\n    emit ReputationBound(researcher, reportId, severity);\n}",
        simAction: "Simulate Reputation Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading confirmed finding VR_3390...", tone: "default" },
          { text: "Computing severity weight for HIGH...", tone: "default" },
          { text: "Binding soulbound token to researcher DID...", tone: "default" },
          { text: "Updating cumulative reputation score...", tone: "default" },
          { text: "[SUCCESS] Reputation bound, non-transferable.", tone: "success" },
        ],
      },
      {
        title: "Credential Issuer",
        subtitle: "The Portable Proof",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Portable Proof",
          description:
            "The interoperability layer. The DID and VC Ledger issues a verifiable credential from confirmed findings, letting a researcher present a proven track record on any other bug bounty platform without a central authority.",
          platformFunction: "Credentials & Verification",
        },
        codeSnippet:
          "function issueVC(address researcher) external view returns (bytes memory) {\n    return encodeCredential(researcher, reputation[researcher], findingsOf[researcher]);\n}",
        simAction: "Simulate Credential Issue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Gathering confirmed findings for researcher_0x7C...", tone: "default" },
          { text: "Aggregating reputation across programs...", tone: "default" },
          { text: "Encoding verifiable credential from DID...", tone: "default" },
          { text: "Signing credential for external presentation...", tone: "default" },
          { text: "[SUCCESS] Portable reputation credential issued.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Confirmation-gated bounty settlement is a horizontal capability. Here is how different program operators put verified payout and portable reputation to work.",
    sectors: [
      { icon: Globe, title: "Bug Bounty Platforms", description: "Replace manual payout queues with confirmation-gated settlement, so researchers are paid automatically on validation and carry a portable reputation that follows them from one platform to the next.", assetTypes: ["Escrowed Rewards", "Reputation Credentials", "Confirmed Findings"] },
      { icon: Building2, title: "Enterprise Security Programs", description: "Run an in-house disclosure program where every reward is escrowed and released only on a signed confirmation, cutting payout disputes and giving finance a clean, auditable settlement trail.", assetTypes: ["Disclosure Rewards", "Settlement Records", "Severity Logs"] },
      { icon: Cpu, title: "Protocol & DApp Teams", description: "Fund critical-vulnerability bounties on-chain with atomic payout, so whitehats trust the reward is real and the protocol proves it settled findings promptly to its community.", assetTypes: ["Protocol Bounties", "Whitehat Payouts", "Audit Findings"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an existing bounty platform through an API or settling findings from a researcher's self-custody wallet, Cerulea routes both into one confirmation-gated settlement layer.",
    tracks: [
      {
        title: "Track A: Platform Settlement Bridging",
        description:
          "For established bounty platforms on legacy backends. Triage confirmations are translated into signed on-chain settlement triggers through the API gateway, releasing escrowed rewards automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Bounty Backend", sublabel: "Program Triage Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Confirmation & Escrow", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Settlement & Reputation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Researcher Self-Custody",
        description:
          "For independent researchers. A wallet-signed client claims confirmed payouts and presents a portable credential from confirmed findings directly to any participating program.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Researcher Wallet", sublabel: "Self-Custody Identity", icon: Fingerprint, accent: false },
          { label: "Settlement Validators", sublabel: "Payout Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Portable Reputation Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building confirmation-gated escrow, soulbound reputation, and a cross-platform credential issuer from scratch requires specialized smart-contract engineers and heavy audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Escrow & Reputation Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects Web3 settlement development benchmarks. Writing conditional escrow logic, minting soulbound reputation tokens, and building a portable credential issuer for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your escrow and reputation rules into pre-audited WebAssembly binaries and provisions the settlement and DID credential layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "security-audit-certification-for-smart-contract-deployments",
    icon: ShieldCheck,
    eyebrow: "Audit Provenance Engine",
    headline1: "Anchor the audit.",
    headline2: "Bind it to the code.",
    heroDescription:
      "Anchor each audit certificate against the specific contract code hash on a shared network, so a report cannot be separated from the code it covers. Provenance Notary and the DID and VC Ledger bind the certificate, and the Subgraph Indexer exposes it for anyone to check before trusting the contract with funds.",
    heroCta: "Deploy Audit Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a static PDF audit report into a live, checkable proof that deployed code matches the version that was audited.",
    mechanics: [
      { title: "Code Hash Binding", description: "Tie the certificate to the exact bytecode. Provenance Notary anchors the audit against the specific contract code hash, so a report can never be reused to vouch for a different or modified deployment." },
      { title: "Issuer Attestation", description: "Prove who signed off. The DID and VC Ledger binds the certificate to the auditor's verifiable identity, so a reader confirms both the finding and the credentialed firm behind it." },
      { title: "Deployment Match Check", description: "Verify before you trust. Anyone can compare the running contract's code hash against the anchored certificate, confirming the deployed version is the audited version before committing funds." },
      { title: "Post-Audit Drift Detection", description: "Surface silent changes. When a contract is upgraded or redeployed with different code, its hash no longer matches the certificate, and the mismatch is immediately visible to every checker." },
      { title: "Indexed Discovery", description: "Make certificates findable. The Subgraph Indexer exposes every anchored audit by contract address and hash, so wallets and explorers can surface certification status inline." },
      { title: "Immutable Certificate Record", description: "Keep the proof permanent. Each certificate and its code-hash binding live on the shared network, so a valid audit cannot be quietly revoked or backdated by any single party." },
    ],
    lifecycleTitle: "The Certification Lifecycle",
    lifecycleSubtitle:
      "Follow a single audit from certificate issuance to a user's pre-transaction check that the deployed code still matches.",
    lifecycleSteps: [
      {
        label: "Audit Completion",
        description:
          "An auditor finishes a review and computes the code hash of the exact contract version audited. Provenance Notary prepares to anchor the certificate against it.",
        icon: FileCheck,
        logFilename: "cerulea_auditcert.log",
        logLines: [
          { text: "[SYS] Finalizing audit report for contract 0xA91...", time: "11:14:02", tone: "default" },
          { text: "[CMD] hashCode(0xA91, compiler: \"solc_0.8.24\")", time: "11:14:02", tone: "primary" },
          { text: "[SYS] Code hash 0x7f3c... computed for audited version.", time: "11:14:03", tone: "default" },
          { text: "[OK] Ready to anchor certificate to code hash.", time: "11:14:03", tone: "success" },
        ],
      },
      {
        label: "Certificate Anchoring",
        description:
          "Provenance Notary and the DID and VC Ledger bind the certificate to the code hash and the auditor's identity, sealing the attestation on the shared network.",
        icon: ScrollText,
        logFilename: "cerulea_auditcert.log",
        logLines: [
          { text: "[SYS] Anchoring audit certificate CERT_771...", time: "11:14:06", tone: "default" },
          { text: "[CMD] anchorCert(codeHash: \"0x7f3c\", issuer: \"DID_AUDITX\")", time: "11:14:06", tone: "primary" },
          { text: "[AUTH] Binding issuer credential and sealing to hash...", time: "11:14:07", tone: "secondary" },
          { text: "[OK] Certificate anchored. Tamper-evident.", time: "11:14:07", tone: "success" },
        ],
      },
      {
        label: "Indexed Exposure",
        description:
          "The Subgraph Indexer picks up the anchored certificate and exposes it by contract address, so wallets and explorers can query certification status.",
        icon: Search,
        logFilename: "cerulea_auditcert.log",
        logLines: [
          { text: "[SYS] Indexing CERT_771 by contract address...", time: "11:14:10", tone: "default" },
          { text: "[CMD] indexCert(0xA91, CERT_771)", time: "11:14:10", tone: "primary" },
          { text: "[SYS] Certificate now queryable by address and hash.", time: "11:14:11", tone: "default" },
          { text: "[OK] Certification status exposed to checkers.", time: "11:14:11", tone: "success" },
        ],
      },
      {
        label: "Pre-Transaction Check",
        description:
          "A user about to interact with the contract compares its live code hash to the anchored certificate. A silent post-audit change surfaces before any funds move.",
        icon: ShieldCheck,
        logFilename: "cerulea_auditcert.log",
        logLines: [
          { text: "[SYS] Verification request for contract 0xA91...", time: "16:48:29", tone: "default" },
          { text: "[CMD] verifyMatch(0xA91, CERT_771)", time: "16:48:29", tone: "primary" },
          { text: "[SYS] Comparing live code hash against anchored hash...", time: "16:48:30", tone: "default" },
          { text: "[OK] Match confirmed. Deployed code is the audited code.", time: "16:48:30", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes audit certification into modular contracts. Each layer hashes the code, anchors the certificate, indexes it for discovery, and verifies a deployment match without any single party able to forge or revoke the proof.",
    layers: [
      {
        title: "Code Hasher",
        subtitle: "The Deployment Fingerprint",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Deployment Fingerprint",
          description:
            "The binding anchor. It computes the cryptographic hash of the exact audited bytecode, producing the fingerprint that every certificate is tied to and that any user can recompute from the live contract.",
          platformFunction: "Identity & Integrity",
        },
        codeSnippet:
          "contract CodeHasher {\n  function fingerprint(address target) public view returns (bytes32) {\n    bytes32 h;\n    assembly { h := extcodehash(target) }\n    return h;\n  }\n}",
        simAction: "Simulate Code Hashing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading deployed bytecode for 0xA91...", tone: "default" },
          { text: "Computing extcodehash fingerprint...", tone: "default" },
          { text: "Recording audited version hash 0x7f3c...", tone: "default" },
          { text: "[SUCCESS] Deployment fingerprint captured.", tone: "success" },
        ],
      },
      {
        title: "Provenance Notary",
        subtitle: "The Certificate Seal",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Certificate Seal",
          description:
            "The attestation layer. It anchors the audit certificate to the code hash and the auditor's DID, so the report is inseparable from the exact code it covers and traceable to a credentialed issuer.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorCert(bytes32 codeHash, bytes32 issuerDID, bytes32 reportHash) external onlyIssuer {\n    certs[codeHash] = Cert(issuerDID, reportHash, block.timestamp, true);\n    emit CertAnchored(codeHash, issuerDID, reportHash);\n}",
        simAction: "Simulate Certificate Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading audit report for code hash 0x7f3c...", tone: "default" },
          { text: "Binding auditor DID_AUDITX credential...", tone: "default" },
          { text: "Sealing certificate to the code hash...", tone: "default" },
          { text: "Writing attestation to the shared network...", tone: "default" },
          { text: "[SUCCESS] Certificate anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Subgraph Indexer",
        subtitle: "The Discovery Layer",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Discovery Layer",
          description:
            "The exposure layer. It indexes every anchored certificate by contract address and code hash, so wallets, explorers, and users can surface certification status inline instead of hunting for a PDF.",
          platformFunction: "Indexing & Query",
        },
        codeSnippet:
          "function certOf(address contractAddr) external view returns (Cert memory) {\n    bytes32 h = CodeHasher.fingerprint(contractAddr);\n    return certs[h];\n}",
        simAction: "Simulate Certificate Lookup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resolving live code hash for 0xA91...", tone: "default" },
          { text: "Querying certificate index by hash...", tone: "default" },
          { text: "Locating CERT_771 anchored record...", tone: "default" },
          { text: "Returning issuer and report reference...", tone: "default" },
          { text: "[SUCCESS] Certification status surfaced to caller.", tone: "success" },
        ],
      },
      {
        title: "Match Verifier",
        subtitle: "The Trust Gate",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trust Gate",
          description:
            "The verification layer. It compares a contract's live code hash against the anchored certificate, returning a clear match or mismatch so a user confirms the deployed code is the audited code before trusting it with funds.",
          platformFunction: "Verification & Assurance",
        },
        codeSnippet:
          "function verifyMatch(address contractAddr) external view returns (bool) {\n    bytes32 live = CodeHasher.fingerprint(contractAddr);\n    Cert memory c = certs[live];\n    return c.valid && c.reportHash != bytes32(0);\n}",
        simAction: "Simulate Deployment Match",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "User requests trust check on 0xA91...", tone: "default" },
          { text: "Computing live deployment fingerprint...", tone: "default" },
          { text: "Comparing against anchored certificate hash...", tone: "default" },
          { text: "Confirming issuer credential is valid...", tone: "default" },
          { text: "[SUCCESS] Deployed code matches audited version.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Code-hash-bound audit certification is a horizontal capability. Here is how different actors put verifiable audit proofs to work.",
    sectors: [
      { icon: FlaskConical, title: "Security Audit Firms", description: "Issue certificates bound to the exact audited bytecode instead of a detachable PDF, so a firm's sign-off cannot be reused for modified code and its reputation rests on verifiable matches.", assetTypes: ["Audit Certificates", "Issuer Credentials", "Report Hashes"] },
      { icon: Cpu, title: "Protocol & DApp Teams", description: "Publish an on-chain certification users can check before depositing, proving the live contract is the audited version and surfacing any post-audit drift the moment code changes.", assetTypes: ["Deployment Proofs", "Code Hashes", "Certification Badges"] },
      { icon: Wallet, title: "Wallets & Explorers", description: "Query the Subgraph Indexer to show certification status inline, warning users before they interact with an unaudited or silently modified contract.", assetTypes: ["Inline Warnings", "Certificate Lookups", "Trust Signals"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are anchoring certificates from an audit firm's tooling or checking a deployment from a user's wallet, Cerulea routes both into one code-hash-bound certification layer.",
    tracks: [
      {
        title: "Track A: Audit Firm Anchoring",
        description:
          "For firms on existing reporting tools. Completed audits are hashed against the contract bytecode and translated into anchored on-chain certificates through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Audit Tooling / CI", sublabel: "Firm Reporting Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Hashing & Attestation", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Certification Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: User Deployment Verification",
        description:
          "For end users and wallets. A client recomputes a contract's live code hash and checks it against the anchored certificate directly through the indexed public layer.",
        connectorLabels: ["CODE HASH", "STATE EXECUTION"],
        nodes: [
          { label: "Wallet / DApp Client", sublabel: "User Verification Point", icon: Fingerprint, accent: false },
          { label: "Subgraph Indexer", sublabel: "Certificate Resolution", icon: Search, accent: true },
          { label: "Cerulea Ledger", sublabel: "Anchored Audit Record", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a code-hash-bound certification registry with issuer attestation and indexed discovery from scratch requires specialized protocol engineers and careful cryptographic design. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attestation & Indexing Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects protocol tooling development benchmarks. Writing code-hash attestation logic, integrating DID issuer credentials, and building a subgraph indexer for an average registry takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attestation and indexing rules into pre-audited WebAssembly binaries and provisions the notary and indexer layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "data-breach-notification-compliance-tracking-across-jurisdictions",
    icon: Gavel,
    eyebrow: "Breach Compliance Settlement Layer",
    headline1: "Track every deadline.",
    headline2: "Prove every notice.",
    heroDescription:
      "Anchor each breach notification on a shared network so a multi-country incident's many deadlines are tracked at once. Compliance Attestations record the regulator, jurisdiction, and time, and Notifications carry each message, giving the data protection officer a verifiable record of full compliance.",
    heroCta: "Deploy Compliance Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a tangle of jurisdiction-specific deadlines into a single anchored record that proves each notice was sent on time.",
    mechanics: [
      { title: "Jurisdiction Deadline Map", description: "Model every clock at once. Each applicable regulator and individual notification deadline is registered per jurisdiction, so a multi-country breach tracks all of its windows from a single record." },
      { title: "Attested Notification", description: "Prove the notice, not just the intent. Compliance Attestations record the regulator, jurisdiction, and exact time of each notification, sealing evidence that the obligation was met." },
      { title: "Message Delivery", description: "Carry the notice through the network. Notifications dispatch each regulator and individual message and bind the delivery event to its attestation on the shared network." },
      { title: "Early Deadline Alerts", description: "Surface risk before it becomes a violation. Approaching windows are flagged ahead of expiry, so a missed notification is caught while there is still time to act." },
      { title: "Officer Compliance Record", description: "Give the data protection officer defensible proof. A single verifiable record shows every applicable deadline and the attested notice that satisfied it, ready to present to any regulator." },
      { title: "Immutable Timeline", description: "Anchor the sequence permanently. Every deadline, notification, and delivery is written to the shared network, so the compliance timeline cannot be backdated or quietly revised." },
    ],
    lifecycleTitle: "The Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a single cross-border breach from deadline registration to an attested notice and a verifiable proof of compliance.",
    lifecycleSteps: [
      {
        label: "Breach Registration",
        description:
          "The data protection officer registers the incident and its affected jurisdictions. The contract maps each applicable regulator and individual notification deadline.",
        icon: Gavel,
        logFilename: "cerulea_breachcomply.log",
        logLines: [
          { text: "[SYS] Registering breach incident INC_204...", time: "08:03:19", tone: "default" },
          { text: "[CMD] mapDeadlines { jurisdictions: [\"EU\", \"UK\", \"US_CA\"] }", time: "08:03:19", tone: "primary" },
          { text: "[AUTH] Loading per-jurisdiction notification windows...", time: "08:03:20", tone: "secondary" },
          { text: "[OK] 9 deadlines anchored for INC_204.", time: "08:03:20", tone: "success" },
        ],
      },
      {
        label: "Deadline Tracking",
        description:
          "The contract tracks every window in parallel and flags the ones approaching expiry, so no jurisdiction's deadline is missed in the rush of a live incident.",
        icon: Activity,
        logFilename: "cerulea_breachcomply.log",
        logLines: [
          { text: "[SYS] Scanning 9 open deadlines for INC_204...", time: "10:30:44", tone: "default" },
          { text: "[CMD] checkWindows(INC_204)", time: "10:30:44", tone: "primary" },
          { text: "[SYS] EU regulator window closes in 18 hours.", time: "10:30:45", tone: "default" },
          { text: "[OK] Early alert raised. 3 windows flagged.", time: "10:30:45", tone: "success" },
        ],
      },
      {
        label: "Attested Notification",
        description:
          "The officer sends each required notice. Compliance Attestations record the regulator, jurisdiction, and time, and Notifications carry the message.",
        icon: ScrollText,
        logFilename: "cerulea_breachcomply.log",
        logLines: [
          { text: "[SYS] Dispatching regulator notice for EU window...", time: "14:12:07", tone: "default" },
          { text: "[CMD] attestNotice(INC_204, reg: \"EU_DPA\", ts: 1758268327)", time: "14:12:07", tone: "primary" },
          { text: "[SYS] Notification delivered and bound to attestation.", time: "14:12:08", tone: "default" },
          { text: "[OK] Deadline satisfied. Evidence sealed on-chain.", time: "14:12:08", tone: "success" },
        ],
      },
      {
        label: "Compliance Proof",
        description:
          "With every window closed by an attested notice, the officer holds a single verifiable record proving compliance with each applicable deadline.",
        icon: ShieldCheck,
        logFilename: "cerulea_breachcomply.log",
        logLines: [
          { text: "[SYS] Compiling compliance record for INC_204...", time: "23:59:01", tone: "default" },
          { text: "[CMD] proveCompliance(INC_204)", time: "23:59:01", tone: "primary" },
          { text: "[SYS] All 9 deadlines matched to attested notices.", time: "23:59:02", tone: "default" },
          { text: "[OK] Verifiable compliance proof issued.", time: "23:59:02", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes breach compliance into modular contracts. Each layer maps deadlines, attests notices, delivers messages, and proves compliance without any deadline slipping through the cracks of a multi-jurisdiction incident.",
    layers: [
      {
        title: "Deadline Registry",
        subtitle: "The Jurisdiction Map",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Jurisdiction Map",
          description:
            "The foundational data layer. It registers every applicable regulator and individual notification deadline per jurisdiction, so a single cross-border breach tracks all of its windows from one anchored record.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract DeadlineRegistry {\n  struct Window {\n    string jurisdiction;\n    string regulator;\n    uint256 dueBy;\n    bool satisfied;\n  }\n\n  mapping(bytes32 => Window[]) public windows;\n\n  function mapDeadline(bytes32 incidentId, string calldata j, string calldata r, uint256 due) external {\n    windows[incidentId].push(Window(j, r, due, false));\n  }\n}",
        simAction: "Simulate Deadline Mapping",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading affected jurisdictions for INC_204...", tone: "default" },
          { text: "Loading per-region notification windows...", tone: "default" },
          { text: "Writing 9 deadlines to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Deadline map anchored for INC_204.", tone: "success" },
        ],
      },
      {
        title: "Deadline Tracker",
        subtitle: "The Parallel Clock",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Parallel Clock",
          description:
            "The monitoring layer. It watches every registered window at once and raises early alerts as expiry approaches, so no jurisdiction's deadline is lost in the pressure of a live multi-country breach.",
          platformFunction: "Monitoring & Alerts",
        },
        codeSnippet:
          "function checkWindows(bytes32 incidentId) external view returns (uint256 dueSoon) {\n    Window[] memory w = windows[incidentId];\n    for (uint256 i = 0; i < w.length; i++) {\n        if (!w[i].satisfied && w[i].dueBy - block.timestamp < ALERT) dueSoon++;\n    }\n}",
        simAction: "Simulate Deadline Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning 9 open windows for INC_204...", tone: "default" },
          { text: "Comparing each due date to current block time...", tone: "default" },
          { text: "Flagging 3 windows approaching expiry...", tone: "default" },
          { text: "Raising early alert to the compliance officer...", tone: "default" },
          { text: "[SUCCESS] Approaching deadlines surfaced in time.", tone: "success" },
        ],
      },
      {
        title: "Attestation Notary",
        subtitle: "The Notice Seal",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Notice Seal",
          description:
            "The evidence layer. Compliance Attestations record the regulator, jurisdiction, and exact time of each notification and mark its window satisfied, sealing proof that the obligation was met on time.",
          platformFunction: "Provenance & Attestation",
        },
        codeSnippet:
          "function attestNotice(bytes32 incidentId, uint256 idx, uint256 sentAt) external onlyOfficer {\n    Window storage w = windows[incidentId][idx];\n    require(sentAt <= w.dueBy, \"Missed window\");\n    w.satisfied = true;\n    emit NoticeAttested(incidentId, w.regulator, sentAt);\n}",
        simAction: "Simulate Notice Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording EU regulator notification...", tone: "default" },
          { text: "Verifying send time is within the window...", tone: "default" },
          { text: "Binding attestation to the deadline...", tone: "default" },
          { text: "Marking the window satisfied...", tone: "default" },
          { text: "[SUCCESS] Notice attested, evidence sealed.", tone: "success" },
        ],
      },
      {
        title: "Compliance Prover",
        subtitle: "The Verifiable Record",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verifiable Record",
          description:
            "The assurance layer. It confirms every registered window is matched to an attested notice and issues a single verifiable record, giving the data protection officer defensible proof to present to any regulator.",
          platformFunction: "Verification & Assurance",
        },
        codeSnippet:
          "function proveCompliance(bytes32 incidentId) external view returns (bool) {\n    Window[] memory w = windows[incidentId];\n    for (uint256 i = 0; i < w.length; i++) {\n        if (!w[i].satisfied) return false;\n    }\n    return true;\n}",
        simAction: "Simulate Compliance Proof",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Gathering all windows for INC_204...", tone: "default" },
          { text: "Checking each is matched to an attested notice...", tone: "default" },
          { text: "Confirming 9 of 9 deadlines satisfied...", tone: "default" },
          { text: "Issuing verifiable compliance record...", tone: "default" },
          { text: "[SUCCESS] Full compliance proven across jurisdictions.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Cross-jurisdiction breach compliance is a horizontal capability. Here is how different actors put attested notification tracking to work.",
    sectors: [
      { icon: Building2, title: "Multinational Enterprises", description: "Track every regulator and individual notification deadline across all operating jurisdictions from one anchored record, so a global breach never slips a window and the officer holds defensible proof of each notice.", assetTypes: ["Breach Timelines", "Attested Notices", "Deadline Maps"] },
      { icon: Landmark, title: "Regulators & DPAs", description: "Receive attested notifications with a sealed regulator, jurisdiction, and timestamp, and verify compliance against an immutable timeline instead of reconstructing it from disputed correspondence.", assetTypes: ["Regulator Notices", "Compliance Proofs", "Audit Timelines"] },
      { icon: HeartPulse, title: "Healthcare & Finance", description: "Meet strict sectoral breach rules with an auditable trail that proves each notice went out on time, reducing exposure to penalties when a single incident spans many overlapping regimes.", assetTypes: ["Sectoral Filings", "Notification Records", "Penalty Defense"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a GRC platform through an API or filing notices from a compliance officer's console, Cerulea routes both into one attested breach-notification timeline.",
    tracks: [
      {
        title: "Track A: Enterprise GRC Bridging",
        description:
          "For large organizations on legacy GRC systems. Incident and notification events are translated into anchored on-chain deadlines and attestations through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy GRC Platform", sublabel: "Compliance Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Deadline Mapping & Attestation", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Compliance Timeline Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Officer Direct Filing",
        description:
          "For data protection officers filing directly. A signed console attests each notice and binds its delivery to the incident timeline on the shared network.",
        connectorLabels: ["SIGNED ATTESTATION", "STATE EXECUTION"],
        nodes: [
          { label: "Officer Console / Wallet", sublabel: "Compliance Filer", icon: Fingerprint, accent: false },
          { label: "Compliance Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Breach Compliance Record", icon: Gavel, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-jurisdiction deadline tracker with attested notifications and a verifiable compliance record from scratch requires specialized compliance engineers and long regulatory mapping cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Deadline & Attestation Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise compliance system benchmarks. Mapping every jurisdiction's notification windows, building attestation logic, and shipping a verifiable proof record for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your deadline and attestation rules into pre-audited WebAssembly binaries and provisions the attestation and notification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const cybersecurityItems: ExtraCaseItem[] = [
  {
    label: "Threat intelligence sharing across organizations without revealing internal data",
    href: "/solutions/use-case/threat-intelligence-sharing-across-organizations-without-revealing-int",
    description: "Anonymous indicator sharing that contains attacks fast.",
    icon: Shield,
    category: "ENTERPRISE",
    tags: ["Cybersecurity", "Threat Intel"],
    industry: INDUSTRY,
  },
  {
    label: "Bug bounty program payout verification and researcher reputation",
    href: "/solutions/use-case/bug-bounty-program-payout-verification-and-researcher-reputation",
    description: "Confirmation-gated payouts with portable researcher reputation.",
    icon: Coins,
    category: "DAPPS",
    tags: ["Cybersecurity", "Bug Bounty"],
    industry: INDUSTRY,
  },
  {
    label: "Security audit certification for smart contract deployments",
    href: "/solutions/use-case/security-audit-certification-for-smart-contract-deployments",
    description: "Audit certificates bound to deployed contract code.",
    icon: ShieldCheck,
    category: "DAPPS",
    tags: ["Cybersecurity", "Smart Contracts"],
    industry: INDUSTRY,
  },
  {
    label: "Data breach notification compliance tracking across jurisdictions",
    href: "/solutions/use-case/data-breach-notification-compliance-tracking-across-jurisdictions",
    description: "Attested breach notices across every jurisdiction deadline.",
    icon: Gavel,
    category: "ENTERPRISE",
    tags: ["Cybersecurity", "Compliance"],
    industry: INDUSTRY,
  },
]
