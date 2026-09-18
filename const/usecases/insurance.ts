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

const INDUSTRY = "Insurance"

export const insuranceCases: CaseEntry[] = [
  {
    slug: "policy-issuance-and-claims-processing-via-smart-contracts",
    icon: Hospital,
    eyebrow: "Health Claims Settlement Layer",
    headline1: "Adjudicate in hours.",
    headline2: "Not in weeks.",
    heroDescription:
      "Stand up a health insurance network where standard claims auto-adjudicate against policy terms in hours instead of the 15 to 45 days a TPA takes. Escrow and Conditional Settlement, a Logic and Actions Editor, and KYC and Identity Verification collapse the opaque handoffs that let duplicate billing and fraud thrive.",
    heroCta: "Deploy Claims Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a 45-day paper adjudication into a real-time, tamper-evident settlement between hospital, insurer, and policyholder.",
    mechanics: [
      { title: "Rule-Based Auto-Adjudication", description: "Encode the policy schedule once in the Logic and Actions Editor. Standard claims that satisfy the coverage rules settle without a human touch, cutting the 15 to 45 day window to hours." },
      { title: "Conditional Escrow Payout", description: "The Escrow and Conditional Settlement module holds insurer funds and releases them to the hospital only when the discharge summary and coding checks pass, so payment and proof move together." },
      { title: "Duplicate Bill Detection", description: "Every claim line is anchored by a content hash. A second hospital submitting the same procedure for the same admission is rejected on-chain, closing the duplicate-billing loophole." },
      { title: "Identity-Bound Claims", description: "KYC and Identity Verification binds each claim to a verified policyholder and provider, removing the ghost-patient and phantom-provider fraud that opaque TPA routing hides." },
      { title: "Live Status Ledger", description: "The policyholder reads their own claim state from the ledger in real time, from submission to adjudication to payout, instead of calling a TPA with no visibility." },
      { title: "TPA Overhead Removal", description: "Six further Cerulea Studio modules replace the manual TPA middle layer, so the insurer pays for verified compute rather than a per-claim handling fee." },
    ],
    lifecycleTitle: "The Claims Lifecycle",
    lifecycleSubtitle:
      "Follow a single hospital admission from discharge to a settled payout, all on the same afternoon.",
    lifecycleSteps: [
      {
        label: "Discharge Submission",
        description:
          "The hospital submits the discharge summary and itemized bill against the policyholder's verified identity. The contract binds the claim to the admission and the policy schedule.",
        icon: Hospital,
        logFilename: "cerulea_claims_engine.log",
        logLines: [
          { text: "[SYS] Initializing Claim Manifest for admission ADM_55120...", time: "14:02:11", tone: "default" },
          { text: "[CMD] submitClaim { policy: \"PH_88421\", provider: \"HOSP_0x19\", amount: 84200 }", time: "14:02:12", tone: "primary" },
          { text: "[AUTH] Verifying policyholder KYC credential and coverage window...", time: "14:02:12", tone: "secondary" },
          { text: "[OK] Claim CLM_44219 anchored at block 5120441.", time: "14:02:13", tone: "success" },
        ],
      },
      {
        label: "Auto-Adjudication",
        description:
          "The Logic and Actions Editor rules run against the claim. Covered line items pass, excluded items are flagged, and duplicate hashes are rejected before any money moves.",
        icon: FileCheck,
        logFilename: "cerulea_claims_engine.log",
        logLines: [
          { text: "[SYS] Running adjudication ruleset v12 on CLM_44219...", time: "15:47:03", tone: "default" },
          { text: "[CMD] evaluatePolicy(CLM_44219)", time: "15:47:03", tone: "primary" },
          { text: "[SYS] 11 of 12 lines covered. 1 line outside schedule flagged.", time: "15:47:04", tone: "default" },
          { text: "[OK] Adjudicated payable amount: 81900. No duplicate found.", time: "15:47:04", tone: "success" },
        ],
      },
      {
        label: "Escrow Release",
        description:
          "The Escrow and Conditional Settlement module releases the adjudicated amount to the hospital wallet. The condition is met, so funds and receipt settle in the same transaction.",
        icon: Wallet,
        logFilename: "cerulea_claims_engine.log",
        logLines: [
          { text: "[SYS] Settlement condition satisfied for CLM_44219...", time: "16:31:20", tone: "default" },
          { text: "[CMD] releaseEscrow(CLM_44219, to: \"HOSP_0x19\", amount: 81900)", time: "16:31:20", tone: "primary" },
          { text: "[AUTH] Locking payout receipt to claim record...", time: "16:31:21", tone: "secondary" },
          { text: "[OK] Payout settled. Hospital credited in one block.", time: "16:31:21", tone: "success" },
        ],
      },
      {
        label: "Policyholder Visibility",
        description:
          "The policyholder reads the final claim state from the ledger. Every step, from submission to payout, is visible without a TPA call or a paper trail.",
        icon: Search,
        logFilename: "cerulea_claims_engine.log",
        logLines: [
          { text: "[SYS] Policyholder view request for CLM_44219...", time: "17:05:44", tone: "default" },
          { text: "[CMD] readClaimState(PH_88421, CLM_44219)", time: "17:05:44", tone: "primary" },
          { text: "[SYS] Returning 4-stage timeline with settled payout...", time: "17:05:44", tone: "default" },
          { text: "[OK] Claim SETTLED. Interaction fully digital.", time: "17:05:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes health claims settlement into modular contracts. Each layer verifies identity, adjudicates coverage, guards against duplicates, and releases escrow without a TPA controlling the record.",
    layers: [
      {
        title: "Policy Registry",
        subtitle: "The Coverage Ledger",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Coverage Ledger",
          description:
            "The foundational data layer. It stores each policy's schedule of benefits, exclusions, and sum insured, and binds a verified policyholder identity to the coverage every claim is later checked against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PolicyRegistry {\n  struct Policy {\n    address holder;\n    uint256 sumInsured;\n    bytes32 scheduleHash;\n    uint256 validUntil;\n    bool active;\n  }\n\n  mapping(bytes32 => Policy) public policies;\n\n  function issue(bytes32 id, address holder, uint256 sum, bytes32 sched) external onlyInsurer {\n    policies[id] = Policy(holder, sum, sched, block.timestamp + 365 days, true);\n  }\n}",
        simAction: "Simulate Policy Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading policyholder KYC credential PH_88421...", tone: "default" },
          { text: "Hashing schedule of benefits document...", tone: "default" },
          { text: "Writing coverage terms to Level 1 storage...", tone: "default" },
          { text: "Setting sum insured to 500000 and active flag...", tone: "default" },
          { text: "[SUCCESS] Policy PH_88421 issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Adjudication Engine",
        subtitle: "The Rule Evaluator",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rule Evaluator",
          description:
            "Replaces the TPA reviewer. It runs the Logic and Actions Editor ruleset over each claim line, passing covered items, flagging exclusions, and computing the payable amount deterministically.",
          platformFunction: "Adjudication Logic",
        },
        codeSnippet:
          "function adjudicate(bytes32 claimId) external returns (uint256 payable) {\n    Claim storage c = claims[claimId];\n    require(!c.duplicate, \"Duplicate line hash\");\n    for (uint256 i = 0; i < c.lines.length; i++) {\n      if (covered(c.policy, c.lines[i].code)) payable += c.lines[i].amount;\n    }\n    c.payable = payable;\n    emit Adjudicated(claimId, payable);\n}",
        simAction: "Simulate Adjudication",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading ruleset v12 for policy PH_88421...", tone: "default" },
          { text: "Evaluating 12 claim lines against schedule...", tone: "default" },
          { text: "1 line outside benefit schedule flagged...", tone: "default" },
          { text: "Computing payable amount 81900...", tone: "default" },
          { text: "[SUCCESS] Claim adjudicated deterministically.", tone: "success" },
        ],
      },
      {
        title: "Duplicate Guard",
        subtitle: "The Fraud Filter",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fraud Filter",
          description:
            "Closes the duplicate-billing loophole. It records a content hash for every claim line and rejects any later submission whose hash collides for the same admission, stopping two hospitals billing one procedure.",
          platformFunction: "Fraud Prevention",
        },
        codeSnippet:
          "function guard(bytes32 admission, bytes32 lineHash) internal {\n    bytes32 key = keccak256(abi.encodePacked(admission, lineHash));\n    require(!seen[key], \"Duplicate billing rejected\");\n    seen[key] = true;\n    emit LineAnchored(admission, lineHash);\n}",
        simAction: "Simulate Duplicate Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing claim lines for admission ADM_55120...", tone: "default" },
          { text: "Checking each hash against seen registry...", tone: "default" },
          { text: "No collision found for this admission...", tone: "default" },
          { text: "Anchoring 12 line hashes to ledger...", tone: "default" },
          { text: "[SUCCESS] Claim clear of duplicate billing.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Conditional Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Payout",
          description:
            "Binds money to proof. The Escrow and Conditional Settlement module holds insurer funds and releases the adjudicated amount to the provider only once the coverage condition is satisfied, in a single atomic transaction.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function releaseEscrow(bytes32 claimId) external {\n    Claim storage c = claims[claimId];\n    require(c.payable > 0 && !c.settled, \"Not payable\");\n    c.settled = true;\n    _transfer(insurerVault, c.provider, c.payable);\n    emit PayoutSettled(claimId, c.provider, c.payable);\n}",
        simAction: "Simulate Escrow Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming payable amount 81900 for CLM_44219...", tone: "default" },
          { text: "Verifying settlement condition satisfied...", tone: "default" },
          { text: "Transferring funds from insurer vault to hospital...", tone: "default" },
          { text: "Writing payout receipt to claim record...", tone: "default" },
          { text: "[SUCCESS] Provider paid in one block, digitally.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Smart contract claims settlement is a horizontal capability. Here is how different actors in the health insurance chain put the shared ledger to work.",
    sectors: [
      { icon: Hospital, title: "Hospitals & Provider Networks", description: "Submit itemized bills against verified policies and receive escrow payouts the same day, replacing months of TPA follow-up and reducing working-capital strain on the provider.", assetTypes: ["Discharge Claims", "Provider Payouts", "Coding Attestations"] },
      { icon: Building2, title: "Insurers & Health Plans", description: "Auto-adjudicate standard claims against encoded policy rules, cut TPA handling fees, and block duplicate and phantom claims at the protocol level rather than in post-payment audit.", assetTypes: ["Policy Schedules", "Adjudication Rules", "Fraud Flags"] },
      { icon: Users, title: "Policyholders & Members", description: "Track a claim from discharge to payout in real time from a single ledger view, ending the opacity of calling a TPA for a status no one can confirm.", assetTypes: ["Claim Timelines", "Coverage Views", "Settlement Receipts"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy claims platform at a large insurer or capturing discharge data from a hospital HMIS, Cerulea routes both into one shared adjudication ledger.",
    tracks: [
      {
        title: "Track A: Insurer Core-System Bridging",
        description:
          "For insurers on legacy claims and policy admin systems. Existing claim events are translated into signed on-chain adjudication requests through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Claims Platform", sublabel: "Insurer Core System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Claim Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Adjudication Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Hospital HMIS Capture",
        description:
          "For hospitals submitting from their information system. A gateway app signs each discharge claim from a provider wallet and routes it directly to the adjudication ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Hospital HMIS / App", sublabel: "Provider Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Adjudication Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Claims Record", icon: Hospital, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a claims network with custom adjudication logic, duplicate-fraud guards, and conditional escrow from scratch requires specialised insurance engineers and long TPA integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Adjudication & Settlement Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects health-insurance core-system integration benchmarks. Wiring a claims platform to hospital systems, coding a custom adjudication and duplicate-detection engine, and shipping conditional escrow for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your policy and settlement rules into pre-audited WebAssembly binaries and provisions the shared adjudication ledger and escrow layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "health-insurance-claim-pre-authorization-across-hospital-network",
    icon: FileCheck,
    eyebrow: "Cashless Pre-Authorization Layer",
    headline1: "Approve before treatment.",
    headline2: "Not hours after.",
    heroDescription:
      "Run a shared pre-authorization system where a hospital gets instant approval from the insurer before cashless treatment begins, instead of waiting hours while a patient's care stalls. Compliance Attestations, Escrow and Conditional Settlement, and Audit Logs verify the request against policy terms and make the decision visible to both parties at once.",
    heroCta: "Deploy Pre-Auth Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow fax-and-phone approval into a real-time, jointly visible authorization anchored to the policy.",
    mechanics: [
      { title: "Instant Term Check", description: "Compliance Attestations evaluate the requested procedure against the live policy terms the moment it is submitted, returning an approval or a query in seconds rather than hours." },
      { title: "Reserved Escrow Hold", description: "On approval, the Escrow and Conditional Settlement module reserves the sanctioned amount against the policy, so the hospital treats knowing the funds are already earmarked." },
      { title: "Shared Real-Time View", description: "Both hospital and insurer read the same authorization state as it changes, ending the one-sided uncertainty of a pending fax no one can confirm." },
      { title: "Sanctioned Limit Anchor", description: "The approved amount and its conditions are anchored on-chain, so a later claim cannot exceed or contradict what the pre-authorization actually sanctioned." },
      { title: "Immutable Decision Trail", description: "Audit Logs record every approval, query, and enhancement with its timestamp and signer, giving regulators and both parties one uncontestable history." },
      { title: "Network-Wide Consistency", description: "Two further Cerulea Studio modules apply the same authorization logic across every hospital in the network, so approvals do not vary by branch or operator." },
    ],
    lifecycleTitle: "The Pre-Authorization Lifecycle",
    lifecycleSubtitle:
      "Follow a single cashless request from hospital submission to a sanctioned, escrow-backed approval both parties can see.",
    lifecycleSteps: [
      {
        label: "Request Submission",
        description:
          "The hospital submits a pre-authorization request with the diagnosis, planned procedure, and estimated cost against the patient's policy identity.",
        icon: Hospital,
        logFilename: "cerulea_preauth_engine.log",
        logLines: [
          { text: "[SYS] Initializing Pre-Auth Manifest for PH_71204...", time: "10:12:04", tone: "default" },
          { text: "[CMD] requestPreAuth { procedure: \"ANGIOPLASTY\", estimate: 260000 }", time: "10:12:05", tone: "primary" },
          { text: "[AUTH] Verifying active policy and hospital network membership...", time: "10:12:05", tone: "secondary" },
          { text: "[OK] Request PA_30877 anchored at block 5330219.", time: "10:12:06", tone: "success" },
        ],
      },
      {
        label: "Term Verification",
        description:
          "Compliance Attestations check the requested procedure against the policy schedule, waiting periods, and sub-limits, returning an approval or a query instantly.",
        icon: FileCheck,
        logFilename: "cerulea_preauth_engine.log",
        logLines: [
          { text: "[SYS] Evaluating PA_30877 against policy terms...", time: "10:12:41", tone: "default" },
          { text: "[CMD] checkCoverage(PA_30877)", time: "10:12:41", tone: "primary" },
          { text: "[SYS] Procedure covered. Waiting period cleared. Sub-limit ok.", time: "10:12:42", tone: "default" },
          { text: "[OK] Sanctioned amount computed: 240000.", time: "10:12:42", tone: "success" },
        ],
      },
      {
        label: "Escrow Reservation",
        description:
          "The Escrow and Conditional Settlement module reserves the sanctioned amount against the policy so the hospital can begin cashless treatment with funds earmarked.",
        icon: Wallet,
        logFilename: "cerulea_preauth_engine.log",
        logLines: [
          { text: "[SYS] Reserving sanctioned amount for PA_30877...", time: "10:13:02", tone: "default" },
          { text: "[CMD] reserveFunds(PA_30877, amount: 240000)", time: "10:13:02", tone: "primary" },
          { text: "[AUTH] Earmarking against policy PH_71204 balance...", time: "10:13:03", tone: "secondary" },
          { text: "[OK] Funds reserved. Cashless treatment authorized.", time: "10:13:03", tone: "success" },
        ],
      },
      {
        label: "Shared Confirmation",
        description:
          "Both hospital and insurer read the same approval state with its sanctioned limit and conditions, visible in real time to each party without a phone call.",
        icon: Handshake,
        logFilename: "cerulea_preauth_engine.log",
        logLines: [
          { text: "[SYS] Broadcasting authorization state for PA_30877...", time: "10:13:20", tone: "default" },
          { text: "[CMD] publishDecision(PA_30877, status: \"APPROVED\")", time: "10:13:20", tone: "primary" },
          { text: "[SYS] Hospital and insurer views synchronized...", time: "10:13:20", tone: "default" },
          { text: "[OK] Pre-authorization visible to both parties.", time: "10:13:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes cashless pre-authorization into modular contracts. Each layer verifies coverage, sanctions a limit, reserves funds, and publishes one shared decision neither party can quietly alter.",
    layers: [
      {
        title: "Request Registry",
        subtitle: "The Authorization Intake",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authorization Intake",
          description:
            "The foundational data layer. It records each pre-authorization request with its procedure, estimate, and the verified patient and hospital identities that every later check is bound to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PreAuthRegistry {\n  struct Request {\n    bytes32 policy;\n    address hospital;\n    string procedure;\n    uint256 estimate;\n    uint8 status;\n  }\n\n  mapping(bytes32 => Request) public requests;\n\n  function open(bytes32 id, bytes32 policy, string calldata proc, uint256 est) external onlyNetwork {\n    requests[id] = Request(policy, msg.sender, proc, est, 0);\n  }\n}",
        simAction: "Simulate Request Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading hospital network membership for HOSP_0x22...", tone: "default" },
          { text: "Binding request to policy PH_71204...", tone: "default" },
          { text: "Recording procedure and estimate on-chain...", tone: "default" },
          { text: "Setting request status to PENDING...", tone: "default" },
          { text: "[SUCCESS] Pre-auth request PA_30877 opened.", tone: "success" },
        ],
      },
      {
        title: "Coverage Checker",
        subtitle: "The Term Evaluator",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Term Evaluator",
          description:
            "Replaces the manual desk review. The Compliance Attestations module tests the procedure against the policy schedule, waiting periods, and sub-limits, returning a sanctioned amount deterministically.",
          platformFunction: "Compliance Logic",
        },
        codeSnippet:
          "function checkCoverage(bytes32 id) external returns (uint256 sanctioned) {\n    Request storage r = requests[id];\n    require(coversProcedure(r.policy, r.procedure), \"Not covered\");\n    require(waitingCleared(r.policy, r.procedure), \"Waiting period\");\n    sanctioned = min(r.estimate, subLimit(r.policy, r.procedure));\n    emit Sanctioned(id, sanctioned);\n}",
        simAction: "Simulate Coverage Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading policy schedule for PH_71204...", tone: "default" },
          { text: "Confirming procedure is within covered set...", tone: "default" },
          { text: "Clearing waiting period and applying sub-limit...", tone: "default" },
          { text: "Computing sanctioned amount 240000...", tone: "default" },
          { text: "[SUCCESS] Coverage verified against policy terms.", tone: "success" },
        ],
      },
      {
        title: "Fund Reserve",
        subtitle: "The Escrow Lock",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Escrow Lock",
          description:
            "Gives the hospital certainty. The Escrow and Conditional Settlement module earmarks the sanctioned amount against the policy balance so the reserved funds cannot be double-committed to another claim.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function reserveFunds(bytes32 id, uint256 amount) external onlyInsurer {\n    Request storage r = requests[id];\n    require(r.status == 1, \"Not sanctioned\");\n    require(available(r.policy) >= amount, \"Insufficient balance\");\n    reserved[r.policy] += amount;\n    r.status = 2;\n    emit FundsReserved(id, amount);\n}",
        simAction: "Simulate Fund Reserve",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking available balance on policy PH_71204...", tone: "default" },
          { text: "Earmarking 240000 against the policy...", tone: "default" },
          { text: "Preventing double-commit of reserved funds...", tone: "default" },
          { text: "Advancing request status to RESERVED...", tone: "default" },
          { text: "[SUCCESS] Cashless treatment funds reserved.", tone: "success" },
        ],
      },
      {
        title: "Decision Log",
        subtitle: "The Shared Record",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Record",
          description:
            "A read gateway backed by Audit Logs. It publishes the final authorization, its sanctioned limit, and its conditions so hospital and insurer see one identical, timestamped decision.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function publishDecision(bytes32 id, uint8 status) external onlyInsurer {\n    requests[id].status = status;\n    audit.push(id, status, block.timestamp, msg.sender);\n    emit DecisionPublished(id, status);\n}",
        simAction: "Simulate Decision Publish",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Finalizing authorization status for PA_30877...", tone: "default" },
          { text: "Appending decision to immutable audit log...", tone: "default" },
          { text: "Synchronizing hospital and insurer views...", tone: "default" },
          { text: "Stamping signer and timestamp on record...", tone: "default" },
          { text: "[SUCCESS] Approval visible to both parties in real time.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared pre-authorization is a horizontal capability. Here is how different actors in cashless treatment put the joint ledger to work.",
    sectors: [
      { icon: Hospital, title: "Network Hospitals", description: "Submit pre-authorization requests and begin cashless treatment on an instant, escrow-backed approval, removing the hours of waiting that delay patient care and hold up admissions.", assetTypes: ["Auth Requests", "Sanction Limits", "Cashless Admissions"] },
      { icon: Building2, title: "Insurers & TPAs", description: "Verify requests against live policy terms automatically and reserve funds on approval, cutting the manual desk load while keeping every sanctioned limit anchored for the eventual claim.", assetTypes: ["Coverage Rules", "Reserved Funds", "Sanction Records"] },
      { icon: Users, title: "Patients & Families", description: "Receive faster admission decisions without chasing an approval no one can see, because the authorization state is confirmed and visible the moment it is granted.", assetTypes: ["Approval Views", "Coverage Confirmations", "Admission Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an insurer's authorization desk or capturing requests from a hospital front office, Cerulea routes both into one shared pre-authorization ledger.",
    tracks: [
      {
        title: "Track A: Insurer Authorization-Desk Bridging",
        description:
          "For insurers and TPAs on legacy authorization systems. Existing pre-auth decisions are translated into signed on-chain sanctions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Auth Desk", sublabel: "Insurer / TPA System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Decision Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Authorization Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Hospital Front-Office Capture",
        description:
          "For hospitals raising requests at admission. A front-office app signs each pre-auth request from a hospital wallet and routes it directly to the shared ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Front-Office App", sublabel: "Hospital Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Authorization Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Pre-Auth Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared pre-authorization network with real-time coverage checks, fund reservation, and a jointly visible decision log from scratch requires specialised engineers and long hospital-network integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Coverage & Authorization Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects hospital-network integration benchmarks. Connecting an insurer's authorization desk to every hospital, coding real-time coverage checks, and shipping a shared decision log for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your coverage and authorization rules into pre-audited WebAssembly binaries and provisions the shared pre-authorization ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "group-insurance-enrollment-and-premium-reconciliation-for-employers",
    icon: Users,
    eyebrow: "Group Enrollment Reconciliation Layer",
    headline1: "Bill the real headcount.",
    headline2: "Not last month's.",
    heroDescription:
      "Stand up automated reconciliation between an employer's actual headcount and the group premium the insurer charges, updated the moment an employee joins or leaves. Civil Registry, Invoices and Billing, and Compliance Attestations keep the enrolled list synchronized so premiums never drift from reality during frequent hiring and attrition.",
    heroCta: "Deploy Reconciliation Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manual monthly true-up into a continuous, tamper-evident match between roster and premium.",
    mechanics: [
      { title: "Live Roster Sync", description: "The Civil Registry module records each joiner and leaver as a signed enrollment event, so the covered list reflects the workforce in real time rather than a month-end snapshot." },
      { title: "Continuous Premium Calc", description: "Every roster change recomputes the group premium automatically, ending the drift between what the employer pays and who is actually covered." },
      { title: "Pro-Rata Adjustment", description: "The Invoices and Billing module prices mid-cycle additions and removals pro-rata, so a hire on day 10 and an exit on day 20 are both billed for exactly their covered days." },
      { title: "Dispute-Free Invoicing", description: "Each invoice is anchored to the underlying roster events, so an employer can trace every line to a signed enrollment change instead of contesting a lump-sum bill." },
      { title: "Coverage Attestation", description: "Compliance Attestations confirm that only eligible, active employees appear on the covered list, closing the gap where departed staff stay billed or new hires go uncovered." },
      { title: "Auto True-Up Removal", description: "Two further Cerulea Studio modules retire the manual monthly reconciliation entirely, replacing spreadsheets and emails with a self-updating shared ledger." },
    ],
    lifecycleTitle: "The Reconciliation Lifecycle",
    lifecycleSubtitle:
      "Follow a single roster change from an HR event to an adjusted, anchored premium the employer can trace.",
    lifecycleSteps: [
      {
        label: "Roster Event",
        description:
          "The employer's HR system signs a joiner or leaver event. The Civil Registry anchors the change to the group policy with its effective date.",
        icon: Users,
        logFilename: "cerulea_group_engine.log",
        logLines: [
          { text: "[SYS] Initializing Roster Event for GRP_5521...", time: "09:30:12", tone: "default" },
          { text: "[CMD] recordJoiner { emp: \"EMP_7742\", effective: \"2026-09-10\" }", time: "09:30:12", tone: "primary" },
          { text: "[AUTH] Verifying employer signature and eligibility...", time: "09:30:13", tone: "secondary" },
          { text: "[OK] Roster event RE_88120 anchored at block 5410882.", time: "09:30:13", tone: "success" },
        ],
      },
      {
        label: "Eligibility Check",
        description:
          "Compliance Attestations confirm the employee is eligible and active before the roster is updated, keeping ghosts and duplicates off the covered list.",
        icon: FileCheck,
        logFilename: "cerulea_group_engine.log",
        logLines: [
          { text: "[SYS] Verifying eligibility for EMP_7742...", time: "09:30:41", tone: "default" },
          { text: "[CMD] attestEligibility(RE_88120)", time: "09:30:41", tone: "primary" },
          { text: "[SYS] Employee active. Not already enrolled elsewhere in group.", time: "09:30:42", tone: "default" },
          { text: "[OK] Eligibility attested. Roster update authorized.", time: "09:30:42", tone: "success" },
        ],
      },
      {
        label: "Premium Recalc",
        description:
          "The premium engine recomputes the group total pro-rata for the effective date. The Invoices and Billing module prices only the covered days.",
        icon: PieChart,
        logFilename: "cerulea_group_engine.log",
        logLines: [
          { text: "[SYS] Recomputing group premium for GRP_5521...", time: "09:30:59", tone: "default" },
          { text: "[CMD] recalcPremium(GRP_5521, delta: +1)", time: "09:30:59", tone: "primary" },
          { text: "[SYS] Pro-rating EMP_7742 from 2026-09-10 to cycle end...", time: "09:31:00", tone: "default" },
          { text: "[OK] Premium adjusted by 1840 for covered days.", time: "09:31:00", tone: "success" },
        ],
      },
      {
        label: "Invoice Anchor",
        description:
          "The adjusted invoice is anchored to the roster events behind it. The employer traces every line to a signed change with no monthly true-up.",
        icon: ScrollText,
        logFilename: "cerulea_group_engine.log",
        logLines: [
          { text: "[SYS] Assembling anchored invoice for GRP_5521...", time: "09:31:18", tone: "default" },
          { text: "[CMD] anchorInvoice(GRP_5521, events: [RE_88120, ...])", time: "09:31:18", tone: "primary" },
          { text: "[AUTH] Binding each invoice line to its roster event...", time: "09:31:19", tone: "secondary" },
          { text: "[OK] Invoice anchored. Fully traceable, dispute-free.", time: "09:31:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes group reconciliation into modular contracts. Each layer records roster changes, attests eligibility, recomputes premium, and anchors invoices without a manual true-up.",
    layers: [
      {
        title: "Roster Registry",
        subtitle: "The Enrollment Ledger",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Enrollment Ledger",
          description:
            "The foundational data layer. The Civil Registry module records every joiner and leaver as a signed, dated event, so the covered list is always a live reflection of the employer's workforce.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RosterRegistry {\n  struct Member {\n    bytes32 group;\n    address employee;\n    uint256 joinedAt;\n    uint256 leftAt;\n    bool active;\n  }\n\n  mapping(bytes32 => Member) public members;\n\n  function join(bytes32 id, bytes32 group, uint256 effective) external onlyEmployer {\n    members[id] = Member(group, msg.sender, effective, 0, true);\n  }\n}",
        simAction: "Simulate Roster Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading employer signature for GRP_5521...", tone: "default" },
          { text: "Recording joiner EMP_7742 with effective date...", tone: "default" },
          { text: "Setting active flag on the covered list...", tone: "default" },
          { text: "Writing enrollment event to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Roster synchronized on-chain.", tone: "success" },
        ],
      },
      {
        title: "Eligibility Gate",
        subtitle: "The Coverage Attestor",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Coverage Attestor",
          description:
            "Keeps the list honest. The Compliance Attestations module confirms an employee is active and not double-enrolled before the roster changes, preventing departed staff from staying billed.",
          platformFunction: "Compliance Logic",
        },
        codeSnippet:
          "function attest(bytes32 eventId) external onlyAttestor returns (bool) {\n    Member storage m = members[eventId];\n    require(m.active, \"Not active\");\n    require(!enrolledElsewhere(m.employee, m.group), \"Duplicate enrollment\");\n    attested[eventId] = true;\n    emit EligibilityAttested(eventId);\n    return true;\n}",
        simAction: "Simulate Eligibility Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading employee status for EMP_7742...", tone: "default" },
          { text: "Confirming active employment and eligibility...", tone: "default" },
          { text: "Checking for duplicate enrollment in group...", tone: "default" },
          { text: "Marking roster event as attested...", tone: "default" },
          { text: "[SUCCESS] Only eligible members on covered list.", tone: "success" },
        ],
      },
      {
        title: "Premium Engine",
        subtitle: "The Pro-Rata Calculator",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pro-Rata Calculator",
          description:
            "Ends premium drift. It recomputes the group total on every roster change and prices mid-cycle joiners and leavers pro-rata, so the employer pays for exactly the covered days.",
          platformFunction: "Billing Logic",
        },
        codeSnippet:
          "function recalc(bytes32 group, int256 delta, uint256 effective) external {\n    uint256 daysLeft = cycleEnd(group) - effective;\n    uint256 adj = perHeadRate(group) * daysLeft / cycleDays(group);\n    premium[group] = uint256(int256(premium[group]) + delta * int256(adj));\n    emit PremiumAdjusted(group, premium[group]);\n}",
        simAction: "Simulate Premium Recalc",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading per-head rate for group GRP_5521...", tone: "default" },
          { text: "Pro-rating EMP_7742 for remaining cycle days...", tone: "default" },
          { text: "Adjusting group premium by 1840...", tone: "default" },
          { text: "Writing new premium total to ledger...", tone: "default" },
          { text: "[SUCCESS] Premium matches real headcount.", tone: "success" },
        ],
      },
      {
        title: "Invoice Notary",
        subtitle: "The Traceable Bill",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Traceable Bill",
          description:
            "Removes billing disputes. The Invoices and Billing module anchors each invoice to the roster events that produced it, so every line traces to a signed change instead of a contested lump sum.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorInvoice(bytes32 group, bytes32[] calldata events, uint256 total) external {\n    Invoice storage inv = invoices[group][period(group)];\n    inv.total = total;\n    inv.events = events;\n    emit InvoiceAnchored(group, total, events.length);\n}",
        simAction: "Simulate Invoice Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Collecting roster events for the billing period...", tone: "default" },
          { text: "Binding each invoice line to its event...", tone: "default" },
          { text: "Computing anchored total for GRP_5521...", tone: "default" },
          { text: "Sealing invoice to the roster history...", tone: "default" },
          { text: "[SUCCESS] Invoice fully traceable and dispute-free.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Continuous enrollment reconciliation is a horizontal capability. Here is how different actors in group insurance put the shared ledger to work.",
    sectors: [
      { icon: Building2, title: "Employers & HR Teams", description: "Push joiner and leaver events straight from HR and see the group premium adjust in real time, ending the manual monthly true-up and the mismatch between headcount and what is billed.", assetTypes: ["Roster Events", "Pro-Rata Adjustments", "Anchored Invoices"] },
      { icon: Landmark, title: "Insurers & Group Underwriters", description: "Bill only for eligible, active members on a live covered list, cutting revenue leakage from departed staff and closing the coverage gap for new hires.", assetTypes: ["Covered Lists", "Premium Schedules", "Eligibility Attestations"] },
      { icon: Handshake, title: "Brokers & Benefit Administrators", description: "Administer group accounts against one synchronized roster shared by employer and insurer, replacing reconciliation spreadsheets with a single traceable record.", assetTypes: ["Group Accounts", "Reconciliation Trails", "Billing Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an insurer's group billing system or capturing roster changes from an employer's HRMS, Cerulea routes both into one shared reconciliation ledger.",
    tracks: [
      {
        title: "Track A: Insurer Billing-System Bridging",
        description:
          "For insurers on legacy group billing platforms. Existing premium and roster records are translated into signed on-chain reconciliation events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Billing Platform", sublabel: "Insurer Group System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Reconciliation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Employer HRMS Capture",
        description:
          "For employers pushing roster changes from HR. A connector signs each joiner and leaver event from an employer wallet and routes it directly to the reconciliation ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Employer HRMS", sublabel: "HR & Payroll Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Roster Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Enrollment Record", icon: Users, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a continuous reconciliation network with live roster sync, pro-rata premium logic, and anchored invoicing from scratch requires specialised engineers and long HR-to-insurer integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Enrollment & Billing Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects group-benefits integration benchmarks. Connecting employer HR systems to an insurer's billing platform, coding pro-rata premium logic, and shipping traceable invoicing for an average network takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your enrollment and billing rules into pre-audited WebAssembly binaries and provisions the shared reconciliation ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "beneficiary-verification-and-claim-payout-for-life-insurance",
    icon: IdCard,
    eyebrow: "Life Claim Verification Layer",
    headline1: "Verify the beneficiary.",
    headline2: "Release the payout.",
    heroDescription:
      "Deploy a life insurance claim process where beneficiary identity and the death record are verified digitally, releasing the payout without weeks of physical paperwork. The Civil Registry, DID and VC Ledger, and Escrow and Conditional Settlement modules confirm eligibility from a verifiable credential and a confirmed death record, then settle in a fraction of the usual time.",
    heroCta: "Deploy Life Claim Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a weeks-long document verification into a credential-driven, tamper-evident payout.",
    mechanics: [
      { title: "Credentialed Beneficiary", description: "The DID and VC Ledger lets a beneficiary present a verifiable identity credential the insurer checks cryptographically, removing the manual scrutiny of submitted identity documents." },
      { title: "Digital Death Record", description: "The Civil Registry anchors a confirmed death record from the issuing authority, so the insurer verifies the event against a trusted source rather than a physical certificate." },
      { title: "Eligibility Match", description: "The contract matches the credentialed beneficiary against the policy's nominated beneficiary, confirming entitlement before any funds are considered for release." },
      { title: "Conditional Release", description: "Escrow and Conditional Settlement holds the sum assured and releases it only when both identity and death checks pass, binding proof and payment into one event." },
      { title: "Fraud-Resistant Claims", description: "Because both the beneficiary credential and the death record are cryptographically verified, impersonation and forged-certificate fraud are caught before payout instead of after." },
      { title: "Paperwork Elimination", description: "Two further Cerulea Studio modules remove the physical document exchange entirely, collapsing a weeks-long process into a verified digital claim." },
    ],
    lifecycleTitle: "The Life Claim Lifecycle",
    lifecycleSubtitle:
      "Follow a single life claim from a beneficiary's credential presentation to a settled, escrow-backed payout.",
    lifecycleSteps: [
      {
        label: "Claim Initiation",
        description:
          "The beneficiary presents a verifiable identity credential against the policy. The DID and VC Ledger checks the credential's signature and issuer.",
        icon: IdCard,
        logFilename: "cerulea_life_engine.log",
        logLines: [
          { text: "[SYS] Initializing Life Claim for policy LP_40219...", time: "11:04:22", tone: "default" },
          { text: "[CMD] presentCredential { beneficiary: \"DID:cer:9f2a\", policy: \"LP_40219\" }", time: "11:04:22", tone: "primary" },
          { text: "[AUTH] Verifying VC signature and trusted issuer...", time: "11:04:23", tone: "secondary" },
          { text: "[OK] Beneficiary credential valid. Claim LC_77310 opened.", time: "11:04:23", tone: "success" },
        ],
      },
      {
        label: "Death Record Anchor",
        description:
          "The Civil Registry anchors the confirmed death record from the issuing authority. The insurer verifies the event against a trusted digital source.",
        icon: FileCheck,
        logFilename: "cerulea_life_engine.log",
        logLines: [
          { text: "[SYS] Requesting death record for policyholder LP_40219...", time: "11:04:51", tone: "default" },
          { text: "[CMD] anchorDeathRecord(LC_77310, source: \"CIVIL_REG\")", time: "11:04:51", tone: "primary" },
          { text: "[SYS] Record signed by registrar. Digest sealed to claim.", time: "11:04:52", tone: "default" },
          { text: "[OK] Death record verified from trusted source.", time: "11:04:52", tone: "success" },
        ],
      },
      {
        label: "Eligibility Match",
        description:
          "The contract matches the credentialed beneficiary to the policy's nominated beneficiary and confirms the entitlement before funds are released.",
        icon: ShieldCheck,
        logFilename: "cerulea_life_engine.log",
        logLines: [
          { text: "[SYS] Matching beneficiary to policy nomination...", time: "11:05:14", tone: "default" },
          { text: "[CMD] checkEntitlement(LC_77310)", time: "11:05:14", tone: "primary" },
          { text: "[SYS] DID:cer:9f2a matches nominee on LP_40219.", time: "11:05:14", tone: "default" },
          { text: "[OK] Entitlement confirmed. Sum assured 2500000.", time: "11:05:15", tone: "success" },
        ],
      },
      {
        label: "Payout Settlement",
        description:
          "Escrow and Conditional Settlement releases the sum assured to the verified beneficiary once both checks pass, in a single atomic transaction.",
        icon: Wallet,
        logFilename: "cerulea_life_engine.log",
        logLines: [
          { text: "[SYS] Both conditions satisfied for LC_77310...", time: "11:05:33", tone: "default" },
          { text: "[CMD] releasePayout(LC_77310, amount: 2500000)", time: "11:05:33", tone: "primary" },
          { text: "[AUTH] Locking settlement receipt to claim...", time: "11:05:34", tone: "secondary" },
          { text: "[OK] Payout settled in one block. Paperwork eliminated.", time: "11:05:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes life claim settlement into modular contracts. Each layer verifies the beneficiary credential, anchors the death record, matches entitlement, and releases escrow without physical paperwork.",
    layers: [
      {
        title: "Credential Verifier",
        subtitle: "The Beneficiary Proof",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Beneficiary Proof",
          description:
            "The foundational identity layer. The DID and VC Ledger validates the beneficiary's verifiable credential against its issuer and signature, replacing manual scrutiny of submitted identity documents.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CredentialVerifier {\n  function verify(bytes32 claimId, bytes calldata vc) external returns (bytes32 did) {\n    (did, ) = decode(vc);\n    require(trustedIssuer(issuerOf(vc)), \"Untrusted issuer\");\n    require(validSignature(vc), \"Invalid credential\");\n    beneficiary[claimId] = did;\n    emit CredentialVerified(claimId, did);\n  }\n}",
        simAction: "Simulate Credential Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Decoding verifiable credential for claim LC_77310...", tone: "default" },
          { text: "Confirming issuer is on trusted registry...", tone: "default" },
          { text: "Validating cryptographic signature...", tone: "default" },
          { text: "Binding beneficiary DID to the claim...", tone: "default" },
          { text: "[SUCCESS] Beneficiary credential verified.", tone: "success" },
        ],
      },
      {
        title: "Death Record Seal",
        subtitle: "The Event Anchor",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Event Anchor",
          description:
            "Confirms the insured event. The Civil Registry module anchors a registrar-signed death record by its digest, so the insurer verifies the death against a trusted source instead of a physical certificate.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorDeath(bytes32 claimId, bytes32 recordHash, address registrar) external {\n    require(isRegistrar(registrar), \"Not a registrar\");\n    deathRecord[claimId] = recordHash;\n    emit DeathAnchored(claimId, recordHash, registrar);\n}",
        simAction: "Simulate Record Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting death record from Civil Registry...", tone: "default" },
          { text: "Confirming registrar signature on the record...", tone: "default" },
          { text: "Computing digest and sealing to claim...", tone: "default" },
          { text: "Binding record hash to LC_77310...", tone: "default" },
          { text: "[SUCCESS] Death record anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Entitlement Matcher",
        subtitle: "The Nominee Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Nominee Check",
          description:
            "Prevents wrongful payout. It matches the verified beneficiary DID against the policy's nominated beneficiary and confirms the sum assured before any release is possible.",
          platformFunction: "Adjudication Logic",
        },
        codeSnippet:
          "function checkEntitlement(bytes32 claimId) external view returns (uint256) {\n    bytes32 pol = policyOf(claimId);\n    require(beneficiary[claimId] == nominee[pol], \"Not the nominee\");\n    require(deathRecord[claimId] != bytes32(0), \"No death record\");\n    return sumAssured[pol];\n}",
        simAction: "Simulate Entitlement Match",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading nominated beneficiary on policy LP_40219...", tone: "default" },
          { text: "Comparing against verified beneficiary DID...", tone: "default" },
          { text: "Confirming a sealed death record exists...", tone: "default" },
          { text: "Resolving sum assured 2500000...", tone: "default" },
          { text: "[SUCCESS] Entitlement confirmed for payout.", tone: "success" },
        ],
      },
      {
        title: "Payout Escrow",
        subtitle: "The Conditional Release",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Release",
          description:
            "Binds money to proof. The Escrow and Conditional Settlement module releases the sum assured to the verified beneficiary only when both the credential and death checks pass, in one atomic transaction.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function releasePayout(bytes32 claimId, uint256 amount) external {\n    require(beneficiary[claimId] != bytes32(0), \"No beneficiary\");\n    require(deathRecord[claimId] != bytes32(0), \"No death record\");\n    require(!settled[claimId], \"Already paid\");\n    settled[claimId] = true;\n    _transfer(reserve, beneficiary[claimId], amount);\n    emit PayoutSettled(claimId, amount);\n}",
        simAction: "Simulate Payout Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming both verification conditions passed...", tone: "default" },
          { text: "Locking sum assured 2500000 for release...", tone: "default" },
          { text: "Transferring funds to verified beneficiary...", tone: "default" },
          { text: "Writing settlement receipt to the claim...", tone: "default" },
          { text: "[SUCCESS] Life claim settled without paperwork.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Credential-driven life claims is a horizontal capability. Here is how different actors in life insurance put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Life Insurers", description: "Verify beneficiary identity and the insured event cryptographically and settle claims in a fraction of the usual time, cutting the weeks of manual document review that delay grieving families.", assetTypes: ["Life Policies", "Verified Payouts", "Death Attestations"] },
      { icon: Users, title: "Beneficiaries & Nominees", description: "Present a verifiable credential instead of assembling physical proofs, receiving the payout quickly once identity and the death record are confirmed against trusted sources.", assetTypes: ["Identity Credentials", "Claim Entitlements", "Settlement Receipts"] },
      { icon: Building2, title: "Registries & Certifiers", description: "Issue registrar-signed death records that anchor directly into the claim, letting insurers verify the event without physical certificate exchange or manual authentication.", assetTypes: ["Death Records", "Registrar Signatures", "Trusted Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a life insurer's policy admin system or capturing a beneficiary's credential from a mobile wallet, Cerulea routes both into one shared claim ledger.",
    tracks: [
      {
        title: "Track A: Insurer Policy-Admin Bridging",
        description:
          "For life insurers on legacy policy administration systems. Existing claim and nomination records are translated into signed on-chain verification requests through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Policy Admin", sublabel: "Life Insurer System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Claim Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Claim Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Beneficiary Wallet Capture",
        description:
          "For beneficiaries presenting credentials from a phone. A wallet app signs the credential presentation and routes it directly to the claim ledger for verification.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Beneficiary Wallet", sublabel: "Credential Holder", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Verification Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Claim Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a life claim network with verifiable-credential checks, anchored death records, and conditional escrow from scratch requires specialised identity engineers and long registry integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Verification & Payout Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects life-insurance identity integration benchmarks. Wiring a policy admin system to civil registries, building verifiable-credential checks, and shipping conditional payout escrow for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your verification and payout rules into pre-audited WebAssembly binaries and provisions the shared claim ledger and credential layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "group-term-insurance-for-gig-workers-via-aggregator-platforms",
    icon: Handshake,
    eyebrow: "Usage-Based Coverage Layer",
    headline1: "Cover while working.",
    headline2: "No manual sign-up.",
    heroDescription:
      "Deliver a group term insurance product for gig workers where coverage activates automatically from verified active work status on the aggregator platform, not a paper enrollment. Civil Registry, Escrow and Conditional Settlement, and Compliance Attestations tie cover to real, verified engagement so irregular, multi-platform workers are protected exactly while they work.",
    heroCta: "Deploy Gig Coverage Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a rigid enrollment gate into automatic, status-driven coverage that follows real work.",
    mechanics: [
      { title: "Status-Triggered Cover", description: "The platform signs a verified active-work event and the contract activates coverage automatically, so a worker who goes online is protected without filling in an enrollment form." },
      { title: "Verified Engagement", description: "The Civil Registry module records each worker's identity and active status, so cover attaches to a verified person rather than an unverifiable self-declaration." },
      { title: "Per-Session Premium", description: "The Escrow and Conditional Settlement module collects the micro-premium for the active period and holds it against the group cover, matching cost to actual engagement." },
      { title: "Automatic Lapse", description: "When verified active status ends, coverage stands down cleanly, removing the manual re-enrollment a worker faces every time they return to the platform." },
      { title: "Regulatory Fit", description: "Compliance Attestations confirm the product meets group-cover eligibility rules for each active worker, keeping an irregular, multi-platform book compliant." },
      { title: "Multi-Platform Aggregation", description: "Two further Cerulea Studio modules let cover recognise active status across more than one aggregator, so a worker's protection is not tied to a single app." },
    ],
    lifecycleTitle: "The Coverage Lifecycle",
    lifecycleSubtitle:
      "Follow a single gig worker from going online to automatic, verified coverage and a clean stand-down.",
    lifecycleSteps: [
      {
        label: "Active Status Signal",
        description:
          "The aggregator platform signs a verified active-work event for the worker. The Civil Registry binds the event to the worker's identity.",
        icon: Handshake,
        logFilename: "cerulea_gig_engine.log",
        logLines: [
          { text: "[SYS] Receiving active-status signal for worker GW_5521...", time: "07:45:10", tone: "default" },
          { text: "[CMD] markActive { worker: \"GW_5521\", platform: \"AGG_0x14\" }", time: "07:45:10", tone: "primary" },
          { text: "[AUTH] Verifying platform signature and worker identity...", time: "07:45:11", tone: "secondary" },
          { text: "[OK] Active status AS_66201 anchored at block 5501120.", time: "07:45:11", tone: "success" },
        ],
      },
      {
        label: "Eligibility Attest",
        description:
          "Compliance Attestations confirm the worker meets group-cover eligibility before coverage activates, keeping the irregular book compliant.",
        icon: FileCheck,
        logFilename: "cerulea_gig_engine.log",
        logLines: [
          { text: "[SYS] Checking group-cover eligibility for GW_5521...", time: "07:45:32", tone: "default" },
          { text: "[CMD] attestEligibility(AS_66201)", time: "07:45:32", tone: "primary" },
          { text: "[SYS] Worker within cover rules. No conflicting active policy.", time: "07:45:33", tone: "default" },
          { text: "[OK] Eligibility attested. Coverage may activate.", time: "07:45:33", tone: "success" },
        ],
      },
      {
        label: "Coverage Activation",
        description:
          "The contract activates group term cover for the active period and the Escrow module collects the per-session micro-premium against the group.",
        icon: ShieldCheck,
        logFilename: "cerulea_gig_engine.log",
        logLines: [
          { text: "[SYS] Activating term cover for GW_5521...", time: "07:45:50", tone: "default" },
          { text: "[CMD] activateCover(AS_66201, premium: 6)", time: "07:45:50", tone: "primary" },
          { text: "[AUTH] Collecting micro-premium into group escrow...", time: "07:45:51", tone: "secondary" },
          { text: "[OK] Cover active. Worker protected while online.", time: "07:45:51", tone: "success" },
        ],
      },
      {
        label: "Clean Stand-Down",
        description:
          "When verified active status ends, coverage stands down automatically with no re-enrollment required the next time the worker returns.",
        icon: Search,
        logFilename: "cerulea_gig_engine.log",
        logLines: [
          { text: "[SYS] Active status ended for GW_5521...", time: "16:20:04", tone: "default" },
          { text: "[CMD] standDown(AS_66201)", time: "16:20:04", tone: "primary" },
          { text: "[SYS] Cover period closed. Premium settled to group.", time: "16:20:05", tone: "default" },
          { text: "[OK] Coverage stood down. No manual re-enrollment.", time: "16:20:05", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes usage-based gig cover into modular contracts. Each layer verifies status, attests eligibility, activates coverage, and stands it down without manual enrollment.",
    layers: [
      {
        title: "Status Registry",
        subtitle: "The Engagement Ledger",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Engagement Ledger",
          description:
            "The foundational data layer. The Civil Registry module records each worker's verified identity and active-status events, so coverage can attach to real engagement rather than a self-declared claim.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract StatusRegistry {\n  struct Active {\n    address worker;\n    bytes32 platform;\n    uint256 startedAt;\n    uint256 endedAt;\n    bool live;\n  }\n\n  mapping(bytes32 => Active) public sessions;\n\n  function markActive(bytes32 id, address worker, bytes32 platform) external onlyPlatform {\n    sessions[id] = Active(worker, platform, block.timestamp, 0, true);\n  }\n}",
        simAction: "Simulate Status Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading platform signature for AGG_0x14...", tone: "default" },
          { text: "Binding active event to worker GW_5521...", tone: "default" },
          { text: "Recording session start timestamp...", tone: "default" },
          { text: "Setting live flag on the session...", tone: "default" },
          { text: "[SUCCESS] Active status recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Eligibility Gate",
        subtitle: "The Compliance Check",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Check",
          description:
            "Keeps the book compliant. The Compliance Attestations module confirms each worker meets group-cover rules and has no conflicting active policy before coverage can switch on.",
          platformFunction: "Compliance Logic",
        },
        codeSnippet:
          "function attest(bytes32 sessionId) external onlyAttestor returns (bool) {\n    Active storage s = sessions[sessionId];\n    require(s.live, \"Session not live\");\n    require(meetsGroupRules(s.worker), \"Ineligible\");\n    require(!hasConflict(s.worker), \"Conflicting cover\");\n    eligible[sessionId] = true;\n    emit EligibilityAttested(sessionId);\n    return true;\n}",
        simAction: "Simulate Eligibility Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading group-cover rules for the product...", tone: "default" },
          { text: "Confirming GW_5521 meets eligibility...", tone: "default" },
          { text: "Checking for conflicting active cover...", tone: "default" },
          { text: "Marking session as eligible...", tone: "default" },
          { text: "[SUCCESS] Worker cleared for coverage.", tone: "success" },
        ],
      },
      {
        title: "Cover Activator",
        subtitle: "The Premium Escrow",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Premium Escrow",
          description:
            "Ties cost to work. The Escrow and Conditional Settlement module activates term cover for the active period and collects the per-session micro-premium into the group pool automatically.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function activateCover(bytes32 sessionId, uint256 premium) external {\n    require(eligible[sessionId], \"Not eligible\");\n    covered[sessionId] = true;\n    groupPool += premium;\n    emit CoverActivated(sessionId, premium);\n}",
        simAction: "Simulate Cover Activation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming session GW_5521 is eligible...", tone: "default" },
          { text: "Activating term cover for the active period...", tone: "default" },
          { text: "Collecting micro-premium into group pool...", tone: "default" },
          { text: "Setting covered flag on the session...", tone: "default" },
          { text: "[SUCCESS] Worker protected while active.", tone: "success" },
        ],
      },
      {
        title: "Stand-Down Handler",
        subtitle: "The Auto Lapse",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Lapse",
          description:
            "Removes the re-enrollment burden. When verified active status ends, this contract closes the cover period and settles the collected premium, so a returning worker is simply re-covered on their next session.",
          platformFunction: "Lifecycle Management",
        },
        codeSnippet:
          "function standDown(bytes32 sessionId) external onlyPlatform {\n    Active storage s = sessions[sessionId];\n    require(s.live, \"Already closed\");\n    s.live = false;\n    s.endedAt = block.timestamp;\n    covered[sessionId] = false;\n    emit CoverStoodDown(sessionId, s.endedAt);\n}",
        simAction: "Simulate Stand-Down",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting end of active status for GW_5521...", tone: "default" },
          { text: "Closing the cover period cleanly...", tone: "default" },
          { text: "Settling collected premium to the group...", tone: "default" },
          { text: "Clearing covered flag on the session...", tone: "default" },
          { text: "[SUCCESS] Cover stood down, no re-enrollment.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Usage-based coverage is a horizontal capability. Here is how different actors in the gig economy put the shared ledger to work.",
    sectors: [
      { icon: Handshake, title: "Aggregator Platforms", description: "Offer embedded protection that switches on with verified active work, giving riders and drivers cover without an enrollment step and without the platform carrying manual administration.", assetTypes: ["Active Sessions", "Embedded Cover", "Status Signals"] },
      { icon: Landmark, title: "Insurers & Group Underwriters", description: "Price and underwrite an irregular, multi-platform book against verified engagement data, matching premium to real exposure instead of guessing at intermittent workforces.", assetTypes: ["Group Term Products", "Usage Premiums", "Exposure Records"] },
      { icon: Users, title: "Gig Workers", description: "Are covered automatically while working across one or more platforms, with no repeated sign-up and a clean lapse when they stop, so protection follows the actual work.", assetTypes: ["Coverage Windows", "Verified Status", "Protection Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an insurer's group product system or capturing active status from an aggregator's dispatch platform, Cerulea routes both into one shared coverage ledger.",
    tracks: [
      {
        title: "Track A: Insurer Product-System Bridging",
        description:
          "For insurers on legacy group product systems. Existing cover and premium records are translated into signed on-chain coverage events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Product System", sublabel: "Insurer Group Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Coverage Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Aggregator Dispatch Capture",
        description:
          "For platforms signalling active status from dispatch. A connector signs each active-work event from a platform wallet and routes it directly to the coverage ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Aggregator Dispatch", sublabel: "Platform Backend", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Status Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Coverage Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a usage-based cover network with verified status triggers, per-session premium escrow, and automatic lapse from scratch requires specialised engineers and long platform integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Status & Coverage Rules",
      ruleCount: 33,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects gig-platform integration benchmarks. Connecting an insurer's product system to aggregator dispatch, coding status-triggered activation, and shipping per-session premium logic for an average network takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your status and coverage rules into pre-audited WebAssembly binaries and provisions the shared coverage ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "insurance-agent-commission-tracking-and-compliance",
    icon: Coins,
    eyebrow: "Commission Compliance Layer",
    headline1: "Pay verified commissions.",
    headline2: "Stay within the cap.",
    heroDescription:
      "Deploy verified commission calculation for insurance agents based on policy sales and persistency, with automatic checks against regulatory commission caps. The DID and VC Ledger, Royalty Standard, and Royalty Clearing modules compute each agent's entitlement from trusted policy data and flag any structure that would breach permitted limits across a large network.",
    heroCta: "Deploy Commission Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manual compliance headache into a verified, cap-aware commission calculation.",
    mechanics: [
      { title: "Verified Sales Data", description: "The Royalty Standard reads commission events from verified policy records, so an agent's entitlement is computed from real, signed sales rather than a reconciled spreadsheet." },
      { title: "Persistency Weighting", description: "Commission accrues and adjusts as policies stay in force, so the calculation reflects persistency directly instead of a one-time payout that ignores lapses." },
      { title: "Automatic Cap Check", description: "Every calculation is tested against the regulatory commission cap for that product, and any structure exceeding the permitted limit is flagged before payout." },
      { title: "Credentialed Agents", description: "The DID and VC Ledger binds each commission to a licensed agent credential, removing payments to unverified or lapsed intermediaries." },
      { title: "Clean Clawback", description: "When a policy lapses within the clawback window, Royalty Clearing reverses the proportionate commission automatically, keeping the ledger accurate without manual recovery." },
      { title: "Network-Wide Audit", description: "Two further Cerulea Studio modules give the regulator and the insurer one queryable record of every commission and its cap check across the whole agent network." },
    ],
    lifecycleTitle: "The Commission Lifecycle",
    lifecycleSubtitle:
      "Follow a single policy sale from an agent credential to a cap-checked, cleared commission.",
    lifecycleSteps: [
      {
        label: "Sale Attribution",
        description:
          "A verified policy sale is attributed to a licensed agent. The DID and VC Ledger confirms the agent credential before any commission accrues.",
        icon: IdCard,
        logFilename: "cerulea_commission_engine.log",
        logLines: [
          { text: "[SYS] Attributing sale POL_90211 to agent AG_3391...", time: "12:10:08", tone: "default" },
          { text: "[CMD] attributeSale { policy: \"POL_90211\", agent: \"AG_3391\" }", time: "12:10:08", tone: "primary" },
          { text: "[AUTH] Verifying agent license credential...", time: "12:10:09", tone: "secondary" },
          { text: "[OK] Sale attributed. Commission CM_44120 opened.", time: "12:10:09", tone: "success" },
        ],
      },
      {
        label: "Commission Calc",
        description:
          "The Royalty Standard computes the commission from the policy premium and persistency schedule, producing a verifiable base amount.",
        icon: PieChart,
        logFilename: "cerulea_commission_engine.log",
        logLines: [
          { text: "[SYS] Computing commission for CM_44120...", time: "12:10:31", tone: "default" },
          { text: "[CMD] calcCommission(CM_44120, premium: 48000, rate: \"YR1\")", time: "12:10:31", tone: "primary" },
          { text: "[SYS] Applying persistency weighting for year one...", time: "12:10:32", tone: "default" },
          { text: "[OK] Base commission computed: 7200.", time: "12:10:32", tone: "success" },
        ],
      },
      {
        label: "Cap Verification",
        description:
          "The calculation is tested against the regulatory cap for the product. A compliant amount passes; an excess is flagged before payout.",
        icon: Gavel,
        logFilename: "cerulea_commission_engine.log",
        logLines: [
          { text: "[SYS] Checking CM_44120 against regulatory cap...", time: "12:10:49", tone: "default" },
          { text: "[CMD] checkCap(CM_44120, product: \"TERM_LIFE\")", time: "12:10:49", tone: "primary" },
          { text: "[SYS] Cap is 15 percent. Calculated ratio 15 percent.", time: "12:10:50", tone: "default" },
          { text: "[OK] Within permitted limit. Cleared to pay.", time: "12:10:50", tone: "success" },
        ],
      },
      {
        label: "Royalty Clearing",
        description:
          "Royalty Clearing settles the compliant commission to the agent and arms the clawback rule in case the policy lapses within the window.",
        icon: Wallet,
        logFilename: "cerulea_commission_engine.log",
        logLines: [
          { text: "[SYS] Clearing commission CM_44120 to agent AG_3391...", time: "12:11:07", tone: "default" },
          { text: "[CMD] clearCommission(CM_44120, amount: 7200)", time: "12:11:07", tone: "primary" },
          { text: "[AUTH] Arming clawback for 12-month persistency window...", time: "12:11:08", tone: "secondary" },
          { text: "[OK] Commission cleared. Ledger cap-compliant.", time: "12:11:08", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes commission compliance into modular contracts. Each layer verifies the agent, computes commission, checks the cap, and clears payment with clawback armed.",
    layers: [
      {
        title: "Agent Registry",
        subtitle: "The License Ledger",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The License Ledger",
          description:
            "The foundational identity layer. The DID and VC Ledger binds each agent to a verified license credential, so commissions can only accrue to intermediaries whose authorization is current.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AgentRegistry {\n  struct Agent {\n    bytes32 did;\n    bytes32 license;\n    uint256 validUntil;\n    bool active;\n  }\n\n  mapping(address => Agent) public agents;\n\n  function enroll(address a, bytes32 did, bytes32 license, uint256 until) external onlyInsurer {\n    agents[a] = Agent(did, license, until, true);\n  }\n}",
        simAction: "Simulate Agent Enroll",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading license credential for AG_3391...", tone: "default" },
          { text: "Confirming credential issuer and validity...", tone: "default" },
          { text: "Binding DID to agent record...", tone: "default" },
          { text: "Setting active flag with expiry...", tone: "default" },
          { text: "[SUCCESS] Licensed agent enrolled on-chain.", tone: "success" },
        ],
      },
      {
        title: "Commission Engine",
        subtitle: "The Persistency Calculator",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Persistency Calculator",
          description:
            "Replaces manual sheets. The Royalty Standard module computes each commission from verified premium and a persistency schedule, so entitlements reflect how long policies stay in force.",
          platformFunction: "Commission Logic",
        },
        codeSnippet:
          "function calc(bytes32 id, uint256 premium, uint8 year) external returns (uint256) {\n    uint256 rate = persistencyRate(policyOf(id), year);\n    uint256 amount = premium * rate / 10000;\n    commission[id] = amount;\n    emit CommissionCalculated(id, amount);\n    return amount;\n}",
        simAction: "Simulate Commission Calc",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified premium 48000 for policy...", tone: "default" },
          { text: "Applying year-one persistency rate...", tone: "default" },
          { text: "Computing base commission 7200...", tone: "default" },
          { text: "Writing commission amount to ledger...", tone: "default" },
          { text: "[SUCCESS] Commission computed from verified data.", tone: "success" },
        ],
      },
      {
        title: "Cap Verifier",
        subtitle: "The Regulatory Gate",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Regulatory Gate",
          description:
            "Prevents non-compliant payouts. It tests each commission ratio against the product's regulatory cap and blocks or flags any structure that would exceed the permitted limit before payment.",
          platformFunction: "Compliance Logic",
        },
        codeSnippet:
          "function checkCap(bytes32 id) external view returns (bool ok) {\n    uint256 ratio = commission[id] * 10000 / premiumOf(id);\n    uint256 cap = regulatoryCap(productOf(id));\n    ok = ratio <= cap;\n    require(ok, \"Exceeds commission cap\");\n}",
        simAction: "Simulate Cap Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading regulatory cap for TERM_LIFE product...", tone: "default" },
          { text: "Computing commission ratio at 15 percent...", tone: "default" },
          { text: "Comparing ratio against 15 percent cap...", tone: "default" },
          { text: "Confirming structure within permitted limit...", tone: "default" },
          { text: "[SUCCESS] Commission is cap-compliant.", tone: "success" },
        ],
      },
      {
        title: "Clearing House",
        subtitle: "The Clawback Ledger",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Clawback Ledger",
          description:
            "Keeps the book accurate. The Royalty Clearing module settles compliant commissions and reverses the proportionate amount automatically if a policy lapses inside the clawback window.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function clear(bytes32 id, uint256 amount) external {\n    require(capOk[id], \"Cap not verified\");\n    _transfer(insurerVault, agentOf(id), amount);\n    clawbackUntil[id] = block.timestamp + 365 days;\n    emit CommissionCleared(id, amount);\n}",
        simAction: "Simulate Commission Clearing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming cap check passed for CM_44120...", tone: "default" },
          { text: "Transferring 7200 to agent AG_3391...", tone: "default" },
          { text: "Arming 12-month clawback window...", tone: "default" },
          { text: "Writing cleared commission to ledger...", tone: "default" },
          { text: "[SUCCESS] Commission cleared, clawback armed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Cap-aware commission tracking is a horizontal capability. Here is how different actors in distribution put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Insurers & Distribution Heads", description: "Compute and clear agent commissions from verified policy data with cap checks built in, removing the compliance risk of manual calculation across a large intermediary network.", assetTypes: ["Commission Schedules", "Persistency Records", "Cap Attestations"] },
      { icon: Users, title: "Agents & Agencies", description: "See commissions calculated transparently from real sales and persistency, with clawback rules applied consistently, so payouts are predictable and disputes fall away.", assetTypes: ["Verified Entitlements", "Persistency Ledgers", "Clearing Receipts"] },
      { icon: Gavel, title: "Regulators & Compliance", description: "Query one record of every commission and its cap check across the network, replacing sampled audits with a live view of whether structures stay within permitted limits.", assetTypes: ["Cap Compliance Logs", "Audit Trails", "Regulatory Views"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an insurer's commission system or capturing agent activity from a distribution app, Cerulea routes both into one shared commission ledger.",
    tracks: [
      {
        title: "Track A: Insurer Commission-System Bridging",
        description:
          "For insurers on legacy commission platforms. Existing sales and payout records are translated into signed on-chain commission events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Commission System", sublabel: "Insurer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Commission Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Agent Distribution Capture",
        description:
          "For agents recording sales from a distribution app. A connector signs each attributed sale from an agent wallet and routes it directly to the commission ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Distribution App", sublabel: "Agent Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Commission Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Commission Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a commission network with verified sales attribution, persistency weighting, and automatic cap checks from scratch requires specialised engineers and long compliance integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Commission & Cap Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects distribution-compliance integration benchmarks. Wiring a commission system to verified policy data, coding persistency and clawback logic, and shipping automatic cap checks for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your commission and cap rules into pre-audited WebAssembly binaries and provisions the shared commission ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "parametric-insurance-payouts-triggered-by-verified-event-data",
    icon: Zap,
    eyebrow: "Parametric Settlement Layer",
    headline1: "Trigger on the data.",
    headline2: "Pay in hours.",
    heroDescription:
      "Deliver automated disaster parametric insurance where payouts are triggered by verified third-party data with no claim filing, settling within hours of an event instead of the months a traditional P&C claim takes. Parametric Insurance, External Data Oracles, and Escrow and Conditional Settlement release funds the moment an independently measured threshold is crossed.",
    heroCta: "Deploy Parametric Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a months-long adjuster process into an automatic payout driven by verified event data.",
    mechanics: [
      { title: "Index-Based Triggers", description: "The Parametric Insurance module encodes the payout as a function of a measured index, like wind speed or rainfall, so settlement depends on data rather than an adjuster's site visit." },
      { title: "Trusted Oracle Feed", description: "External Data Oracles stream signed readings from authorities such as the meteorological department, so the trigger fires on a source both insurer and policyholder accept." },
      { title: "No Claim Filing", description: "Because the trigger is objective, no policyholder has to file or document a claim, which removes the disputes that arise when adjusters cannot reach affected areas." },
      { title: "Automatic Payout", description: "When the threshold is crossed, the Escrow and Conditional Settlement module releases the pre-agreed payout to every covered policyholder in the affected zone at once." },
      { title: "Immediate Recovery", description: "Funds arrive within hours of the event, so affected policyholders have capital to begin recovery immediately instead of waiting months for a settled claim." },
      { title: "Zone-Scoped Coverage", description: "Five further Cerulea Studio modules resolve which policies sit inside the triggered geographic zone, so payouts reach exactly the affected book and no one else." },
    ],
    lifecycleTitle: "The Parametric Lifecycle",
    lifecycleSubtitle:
      "Follow a single cyclone from an oracle reading to thousands of automatic, zone-scoped payouts.",
    lifecycleSteps: [
      {
        label: "Policy Binding",
        description:
          "A policyholder in a coastal zone binds a parametric cyclone policy. The contract anchors the trigger index, threshold, and payout amount.",
        icon: ScrollText,
        logFilename: "cerulea_parametric_engine.log",
        logLines: [
          { text: "[SYS] Binding parametric policy for zone ODI_COAST...", time: "05:12:40", tone: "default" },
          { text: "[CMD] bindPolicy { peril: \"CYCLONE\", threshold: \"119kmh\", payout: 50000 }", time: "05:12:40", tone: "primary" },
          { text: "[AUTH] Anchoring index definition and IMD oracle source...", time: "05:12:41", tone: "secondary" },
          { text: "[OK] Policy PP_22140 anchored at block 5620110.", time: "05:12:41", tone: "success" },
        ],
      },
      {
        label: "Oracle Reading",
        description:
          "External Data Oracles stream a signed wind-speed reading from the IMD feed. The contract records the measurement against the zone.",
        icon: Radio,
        logFilename: "cerulea_parametric_engine.log",
        logLines: [
          { text: "[SYS] Polling IMD wind-speed oracle for ODI_COAST...", time: "06:40:18", tone: "default" },
          { text: "[CMD] ingestReading(zone: \"ODI_COAST\", value: \"142kmh\")", time: "06:40:18", tone: "primary" },
          { text: "[SYS] Reading signed by IMD provider. Above 119kmh threshold.", time: "06:40:19", tone: "default" },
          { text: "[OK] Trigger condition met for zone ODI_COAST.", time: "06:40:19", tone: "success" },
        ],
      },
      {
        label: "Zone Resolution",
        description:
          "The contract resolves every policy inside the triggered zone, so the payout reaches exactly the affected book and no policy outside it.",
        icon: Globe,
        logFilename: "cerulea_parametric_engine.log",
        logLines: [
          { text: "[SYS] Resolving covered policies in ODI_COAST...", time: "06:41:02", tone: "default" },
          { text: "[CMD] resolveZone(\"ODI_COAST\")", time: "06:41:02", tone: "primary" },
          { text: "[SYS] 2400 active policies matched inside trigger zone.", time: "06:41:03", tone: "default" },
          { text: "[OK] Affected book scoped for automatic payout.", time: "06:41:03", tone: "success" },
        ],
      },
      {
        label: "Batch Payout",
        description:
          "Escrow and Conditional Settlement releases the pre-agreed payout to all matched policyholders at once, within hours of landfall.",
        icon: Wallet,
        logFilename: "cerulea_parametric_engine.log",
        logLines: [
          { text: "[SYS] Executing batch payout for ODI_COAST...", time: "06:42:30", tone: "default" },
          { text: "[CMD] payoutBatch(zone: \"ODI_COAST\", each: 50000)", time: "06:42:30", tone: "primary" },
          { text: "[AUTH] Releasing escrow to 2400 policyholders...", time: "06:42:31", tone: "secondary" },
          { text: "[OK] Payouts settled. Recovery begins immediately.", time: "06:42:32", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes parametric insurance into modular contracts. Each layer binds the trigger, ingests oracle data, resolves the affected zone, and pays out without a filed claim.",
    layers: [
      {
        title: "Trigger Registry",
        subtitle: "The Index Definition",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Index Definition",
          description:
            "The foundational data layer. The Parametric Insurance module records each policy's peril, index threshold, payout amount, and geographic zone, so settlement is a deterministic function of measured data.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TriggerRegistry {\n  struct ParamPolicy {\n    bytes32 zone;\n    string peril;\n    uint256 threshold;\n    uint256 payout;\n    bool active;\n  }\n\n  mapping(bytes32 => ParamPolicy) public policies;\n\n  function bind(bytes32 id, bytes32 zone, uint256 threshold, uint256 payout) external {\n    policies[id] = ParamPolicy(zone, \"CYCLONE\", threshold, payout, true);\n  }\n}",
        simAction: "Simulate Policy Bind",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording peril and index for zone ODI_COAST...", tone: "default" },
          { text: "Setting wind-speed threshold at 119kmh...", tone: "default" },
          { text: "Anchoring payout amount 50000...", tone: "default" },
          { text: "Writing policy to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Parametric policy PP_22140 bound.", tone: "success" },
        ],
      },
      {
        title: "Oracle Ingestor",
        subtitle: "The Data Gate",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Data Gate",
          description:
            "Feeds trusted measurement. The External Data Oracles module accepts only signed readings from the designated authority and records them against the zone, so the trigger fires on data both parties accept.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function ingest(bytes32 zone, uint256 value, bytes calldata sig) external {\n    require(verifyProvider(sig), \"Untrusted oracle\");\n    readings[zone] = value;\n    if (value >= zoneThreshold[zone]) triggered[zone] = true;\n    emit ReadingIngested(zone, value, triggered[zone]);\n}",
        simAction: "Simulate Oracle Ingest",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving wind-speed reading for ODI_COAST...", tone: "default" },
          { text: "Verifying IMD provider signature...", tone: "default" },
          { text: "Recording 142kmh against the zone...", tone: "default" },
          { text: "Comparing against 119kmh threshold...", tone: "default" },
          { text: "[SUCCESS] Trigger condition met on verified data.", tone: "success" },
        ],
      },
      {
        title: "Zone Resolver",
        subtitle: "The Affected Book",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Affected Book",
          description:
            "Scopes the payout. It resolves every active policy whose zone matches the triggered event, ensuring funds reach exactly the affected policyholders and no policy outside the boundary.",
          platformFunction: "Adjudication Logic",
        },
        codeSnippet:
          "function resolveZone(bytes32 zone) external view returns (bytes32[] memory) {\n    require(triggered[zone], \"Not triggered\");\n    return policiesInZone[zone];\n}",
        simAction: "Simulate Zone Resolve",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming zone ODI_COAST is triggered...", tone: "default" },
          { text: "Enumerating active policies in the zone...", tone: "default" },
          { text: "Matching 2400 covered policyholders...", tone: "default" },
          { text: "Excluding policies outside the boundary...", tone: "default" },
          { text: "[SUCCESS] Affected book scoped for payout.", tone: "success" },
        ],
      },
      {
        title: "Payout Escrow",
        subtitle: "The Batch Settler",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Batch Settler",
          description:
            "Delivers immediate recovery. The Escrow and Conditional Settlement module releases the pre-agreed payout to every matched policyholder in one operation, within hours of the event and with no filed claim.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function payoutBatch(bytes32 zone, uint256 each) external {\n    require(triggered[zone] && !paid[zone], \"Invalid state\");\n    paid[zone] = true;\n    bytes32[] memory book = policiesInZone[zone];\n    for (uint256 i = 0; i < book.length; i++) _transfer(reserve, holderOf(book[i]), each);\n    emit BatchPaid(zone, book.length, each);\n}",
        simAction: "Simulate Batch Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming trigger and unpaid state for ODI_COAST...", tone: "default" },
          { text: "Locking reserve for 2400 payouts of 50000...", tone: "default" },
          { text: "Releasing escrow to every matched policyholder...", tone: "default" },
          { text: "Marking the zone as settled...", tone: "default" },
          { text: "[SUCCESS] 2400 payouts settled within hours.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Parametric settlement is a horizontal capability. Here is how different actors in disaster cover put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "P&C Insurers", description: "Offer disaster cover that settles within hours on verified index data, cutting the months and dispute costs of adjuster-based claims and reaching policyholders adjusters cannot physically access.", assetTypes: ["Parametric Policies", "Index Triggers", "Batch Payouts"] },
      { icon: Globe, title: "Governments & Relief Agencies", description: "Sponsor zone-scoped parametric schemes that release recovery funds to affected populations automatically the moment a threshold is crossed, accelerating disaster response.", assetTypes: ["Sovereign Covers", "Relief Payouts", "Zone Registries"] },
      { icon: Users, title: "Policyholders & Communities", description: "Receive automatic payouts with no claim to file, so households and small businesses in a disaster zone have capital to rebuild immediately rather than months later.", assetTypes: ["Payout Receipts", "Coverage Zones", "Recovery Funds"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an insurer's policy system or routing signed readings from a meteorological oracle, Cerulea provides the exact infrastructure routing required.",
    tracks: [
      {
        title: "Track A: Insurer Policy-System Bridging",
        description:
          "For P&C insurers on legacy policy systems. Existing parametric policy records are translated into on-chain trigger definitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Policy System", sublabel: "P&C Insurer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Trigger Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Parametric Trigger Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Oracle Execution",
        description:
          "For authority data feeds routed on-chain. Signed readings from meteorological and disaster oracles flow directly to the parametric execution layer.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "IMD / Disaster Oracle", sublabel: "Authority Data Feed", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Reading Verification", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Parametric Payout Ledger", icon: Zap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a parametric network with index triggers, trusted oracle ingestion, and zone-scoped batch payouts from scratch requires specialised catastrophe engineers and long oracle integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Trigger & Oracle Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects parametric-insurance integration benchmarks. Negotiating oracle data standards, coding index triggers and zone resolution, and shipping batch payout escrow for an average scheme takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your trigger and oracle rules into pre-audited WebAssembly binaries and provisions the shared parametric ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "motor-insurance-claim-with-verified-accident-and-repair-records",
    icon: Car,
    eyebrow: "Motor Claim Provenance Layer",
    headline1: "Anchor the accident.",
    headline2: "Approve the repair.",
    heroDescription:
      "Build a faster motor claim process where accident reports and garage repair estimates are verified as records the moment they are created, releasing payment without repeated inspections. The Provenance Notary, Escrow and Conditional Settlement, and Audit Logs modules let the insurer assess and approve with far less back-and-forth between surveyor, garage, and desk.",
    heroCta: "Deploy Motor Claim Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a weeks-long survey-and-verify sequence into a single anchored, provable claim record.",
    mechanics: [
      { title: "Anchored Accident Report", description: "The Provenance Notary seals the accident report and its photos at the moment of capture, so the insurer works from an evidence set that cannot be altered after the fact." },
      { title: "Verified Repair Estimate", description: "The garage's itemized estimate is anchored as a signed record, letting the insurer assess parts and labour against a fixed baseline instead of a renegotiated quote." },
      { title: "Single-Pass Assessment", description: "Because both report and estimate are verified when created, the insurer assesses in one pass rather than dispatching a surveyor and re-verifying every input separately." },
      { title: "Conditional Repair Release", description: "The Escrow and Conditional Settlement module releases payment to the garage once the approved estimate and repair completion are confirmed, binding money to verified work." },
      { title: "Tamper-Evident Trail", description: "Audit Logs record every report, estimate, and approval with its signer and timestamp, so a contested claim is settled against evidence rather than conflicting accounts." },
      { title: "Fraud Reduction", description: "Two further Cerulea Studio modules cross-check the accident and repair records for inflated or staged claims, catching manipulation before payout." },
    ],
    lifecycleTitle: "The Motor Claim Lifecycle",
    lifecycleSubtitle:
      "Follow a single accident from an anchored report to a settled repair payment, without repeated inspections.",
    lifecycleSteps: [
      {
        label: "Accident Anchor",
        description:
          "The accident report and photos are captured and sealed by the Provenance Notary at the scene, fixing the evidence to the claim.",
        icon: Car,
        logFilename: "cerulea_motor_engine.log",
        logLines: [
          { text: "[SYS] Initializing Motor Claim for policy MP_61220...", time: "13:22:05", tone: "default" },
          { text: "[CMD] anchorAccident { claim: \"MC_50110\", photos: 8 }", time: "13:22:05", tone: "primary" },
          { text: "[AUTH] Hashing report and images, sealing to claim...", time: "13:22:06", tone: "secondary" },
          { text: "[OK] Accident record anchored at block 5710220.", time: "13:22:06", tone: "success" },
        ],
      },
      {
        label: "Estimate Anchor",
        description:
          "The garage submits an itemized repair estimate. It is anchored as a signed record the insurer can assess against a fixed baseline.",
        icon: FileCheck,
        logFilename: "cerulea_motor_engine.log",
        logLines: [
          { text: "[SYS] Receiving repair estimate for MC_50110...", time: "15:08:44", tone: "default" },
          { text: "[CMD] anchorEstimate(MC_50110, parts: 42000, labour: 9000)", time: "15:08:44", tone: "primary" },
          { text: "[SYS] Estimate signed by garage GAR_0x18 and sealed.", time: "15:08:45", tone: "default" },
          { text: "[OK] Repair estimate anchored. Baseline fixed.", time: "15:08:45", tone: "success" },
        ],
      },
      {
        label: "Single-Pass Assess",
        description:
          "The insurer assesses the anchored report and estimate in one pass, approving the payable amount without a repeat inspection.",
        icon: ShieldCheck,
        logFilename: "cerulea_motor_engine.log",
        logLines: [
          { text: "[SYS] Assessing MC_50110 against anchored evidence...", time: "16:14:19", tone: "default" },
          { text: "[CMD] assessClaim(MC_50110)", time: "16:14:19", tone: "primary" },
          { text: "[SYS] Report and estimate consistent. No re-survey needed.", time: "16:14:20", tone: "default" },
          { text: "[OK] Approved payable amount: 48000.", time: "16:14:20", tone: "success" },
        ],
      },
      {
        label: "Repair Settlement",
        description:
          "The Escrow module releases payment to the garage once the approved estimate and repair completion are confirmed, in one transaction.",
        icon: Wallet,
        logFilename: "cerulea_motor_engine.log",
        logLines: [
          { text: "[SYS] Repair completion confirmed for MC_50110...", time: "18:40:30", tone: "default" },
          { text: "[CMD] releaseRepair(MC_50110, to: \"GAR_0x18\", amount: 48000)", time: "18:40:30", tone: "primary" },
          { text: "[AUTH] Binding payout to approved estimate record...", time: "18:40:31", tone: "secondary" },
          { text: "[OK] Repair settled. Claim closed with full trail.", time: "18:40:31", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes motor claims into modular contracts. Each layer anchors the accident, notarizes the estimate, assesses in one pass, and settles repair against verified work.",
    layers: [
      {
        title: "Accident Notary",
        subtitle: "The Evidence Seal",
        icon: Car,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Seal",
          description:
            "The foundational provenance layer. The Provenance Notary seals the accident report and its photos by digest at capture, so the insurer's evidence set cannot be altered or substituted after the event.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "contract AccidentNotary {\n  struct Report {\n    bytes32 policy;\n    bytes32 evidenceHash;\n    uint256 capturedAt;\n    address reporter;\n  }\n\n  mapping(bytes32 => Report) public reports;\n\n  function anchor(bytes32 claimId, bytes32 policy, bytes32 evidence) external {\n    reports[claimId] = Report(policy, evidence, block.timestamp, msg.sender);\n  }\n}",
        simAction: "Simulate Accident Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting accident report and 8 photos...", tone: "default" },
          { text: "Computing digest of the evidence set...", tone: "default" },
          { text: "Sealing evidence hash to claim MC_50110...", tone: "default" },
          { text: "Recording capture timestamp and reporter...", tone: "default" },
          { text: "[SUCCESS] Accident evidence anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Estimate Registry",
        subtitle: "The Repair Baseline",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Repair Baseline",
          description:
            "Fixes the quote. It anchors the garage's itemized estimate as a signed record of parts and labour, so the insurer assesses against a baseline that cannot be quietly renegotiated later.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "function anchorEstimate(bytes32 claimId, uint256 parts, uint256 labour) external onlyGarage {\n    estimates[claimId] = Estimate(parts, labour, msg.sender, block.timestamp, false);\n    emit EstimateAnchored(claimId, parts + labour);\n}",
        simAction: "Simulate Estimate Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving itemized estimate from GAR_0x18...", tone: "default" },
          { text: "Recording parts 42000 and labour 9000...", tone: "default" },
          { text: "Signing and sealing the estimate...", tone: "default" },
          { text: "Fixing the repair baseline on-chain...", tone: "default" },
          { text: "[SUCCESS] Repair estimate anchored.", tone: "success" },
        ],
      },
      {
        title: "Assessment Engine",
        subtitle: "The Single Pass",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single Pass",
          description:
            "Removes repeat inspections. It checks the anchored report and estimate for consistency and computes the payable amount in one pass, so the insurer approves without dispatching another surveyor.",
          platformFunction: "Adjudication Logic",
        },
        codeSnippet:
          "function assess(bytes32 claimId) external returns (uint256 payable) {\n    require(reports[claimId].evidenceHash != bytes32(0), \"No accident record\");\n    Estimate storage e = estimates[claimId];\n    require(consistent(claimId), \"Report and estimate mismatch\");\n    payable = e.parts + e.labour;\n    emit Assessed(claimId, payable);\n}",
        simAction: "Simulate Claim Assessment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading anchored report and estimate for MC_50110...", tone: "default" },
          { text: "Checking consistency between the two records...", tone: "default" },
          { text: "Computing payable amount 48000...", tone: "default" },
          { text: "Confirming no re-survey is required...", tone: "default" },
          { text: "[SUCCESS] Claim assessed in a single pass.", tone: "success" },
        ],
      },
      {
        title: "Repair Escrow",
        subtitle: "The Conditional Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Payout",
          description:
            "Binds money to work. The Escrow and Conditional Settlement module releases payment to the garage only when the approved estimate and repair completion are both confirmed, in one atomic transaction.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function releaseRepair(bytes32 claimId, uint256 amount) external {\n    require(approved[claimId], \"Not approved\");\n    require(repairDone[claimId], \"Repair incomplete\");\n    require(!settled[claimId], \"Already paid\");\n    settled[claimId] = true;\n    _transfer(insurerVault, garageOf(claimId), amount);\n    emit RepairSettled(claimId, amount);\n}",
        simAction: "Simulate Repair Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming approval and repair completion...", tone: "default" },
          { text: "Locking approved amount 48000 for release...", tone: "default" },
          { text: "Transferring funds to garage GAR_0x18...", tone: "default" },
          { text: "Binding payout to the approved estimate...", tone: "default" },
          { text: "[SUCCESS] Repair settled with full audit trail.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Provenance-driven motor claims is a horizontal capability. Here is how different actors in motor cover put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Motor Insurers", description: "Assess claims in one pass from anchored reports and estimates, cutting the weeks of repeated inspection and reducing the inflated and staged claims that manual verification misses.", assetTypes: ["Accident Records", "Approved Estimates", "Repair Payouts"] },
      { icon: Pickaxe, title: "Garages & Repair Networks", description: "Submit signed estimates and receive payment as soon as approved work is confirmed, replacing drawn-out back-and-forth with a fixed baseline and a conditional payout.", assetTypes: ["Repair Estimates", "Completion Proofs", "Settlement Receipts"] },
      { icon: Users, title: "Policyholders", description: "See their claim move from an anchored accident report to an approved repair without waiting on repeated surveys, so the vehicle is back on the road faster.", assetTypes: ["Claim Timelines", "Evidence Records", "Approval Views"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an insurer's motor claims system or capturing accident evidence from a surveyor's phone, Cerulea routes both into one shared claim ledger.",
    tracks: [
      {
        title: "Track A: Insurer Claims-System Bridging",
        description:
          "For motor insurers on legacy claims systems. Existing claim and survey records are translated into signed on-chain provenance events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Claims System", sublabel: "Motor Insurer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Evidence Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Motor Claim Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Surveyor & Garage Capture",
        description:
          "For surveyors and garages capturing evidence in the field. An app signs each report and estimate from a device wallet and routes it directly to the claim ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Surveyor / Garage App", sublabel: "Field Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Evidence Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Claim Record", icon: Car, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a motor claim network with anchored accident evidence, notarized estimates, and conditional repair escrow from scratch requires specialised engineers and long surveyor-network integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Evidence & Settlement Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects motor-claims integration benchmarks. Wiring a claims system to surveyors and garages, coding provenance anchoring and consistency checks, and shipping conditional repair escrow for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your evidence and settlement rules into pre-audited WebAssembly binaries and provisions the shared claim ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "catastrophe-bond-trigger-verification-for-institutional-investors",
    icon: Activity,
    eyebrow: "Cat Bond Settlement Layer",
    headline1: "Verify the trigger.",
    headline2: "Settle without dispute.",
    heroDescription:
      "Deploy a catastrophe bond that pays out to the insurer or withholds investor principal automatically, based on independently verified disaster data. Oracle Feeds, Parametric Insurance, and Escrow and Conditional Settlement feed trusted third-party measurements directly into the trigger condition, so the bond settles on data both the issuer and its investors accept.",
    heroCta: "Deploy Cat Bond Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a contested trigger determination into an automatic, data-driven settlement both sides trust.",
    mechanics: [
      { title: "Defined Trigger Condition", description: "The Parametric Insurance module encodes the catastrophe trigger, such as an earthquake above a set magnitude, as a precise condition, so there is no room for interpretation at settlement." },
      { title: "Independent Oracle Data", description: "Oracle Feeds deliver signed measurements from independent agencies, so the trigger is evaluated against a source neither the insurer nor investors control." },
      { title: "Automatic Determination", description: "The contract evaluates the trigger the moment qualifying data arrives, removing the manual determination process where disputes delay settlement for both sides." },
      { title: "Principal Escrow", description: "The Escrow and Conditional Settlement module holds investor principal and either releases it to the insurer on a trigger or returns it to investors at maturity." },
      { title: "Transparent Coupon Flow", description: "Investor coupons and principal movements are recorded on the same ledger, so both issuer and investors see one consistent account of the bond's state." },
      { title: "Dispute-Free Settlement", description: "Two further Cerulea Studio modules bind the final payout to the verified data, so settlement executes on evidence rather than a negotiated determination." },
    ],
    lifecycleTitle: "The Cat Bond Lifecycle",
    lifecycleSubtitle:
      "Follow a single catastrophe bond from issuance to an automatic, verified settlement decision.",
    lifecycleSteps: [
      {
        label: "Bond Issuance",
        description:
          "The bond is issued and investor principal is locked in escrow. The contract anchors the trigger condition and the oracle source that will evaluate it.",
        icon: Activity,
        logFilename: "cerulea_catbond_engine.log",
        logLines: [
          { text: "[SYS] Initializing Cat Bond CB_70120...", time: "09:15:30", tone: "default" },
          { text: "[CMD] issueBond { peril: \"QUAKE\", trigger: \"M7.0\", principal: 50000000 }", time: "09:15:30", tone: "primary" },
          { text: "[AUTH] Locking investor principal into escrow...", time: "09:15:31", tone: "secondary" },
          { text: "[OK] Bond issued. Trigger anchored at block 5810330.", time: "09:15:31", tone: "success" },
        ],
      },
      {
        label: "Oracle Monitoring",
        description:
          "Oracle Feeds monitor independent seismic data. Signed readings are recorded against the bond as they arrive from the designated agency.",
        icon: Radio,
        logFilename: "cerulea_catbond_engine.log",
        logLines: [
          { text: "[SYS] Polling independent seismic oracle for CB_70120...", time: "22:47:12", tone: "default" },
          { text: "[CMD] ingestSeismic(event: \"EQ_5521\", magnitude: \"7.3\")", time: "22:47:12", tone: "primary" },
          { text: "[SYS] Reading signed by USGS-class provider. Above M7.0.", time: "22:47:13", tone: "default" },
          { text: "[OK] Qualifying event recorded against bond.", time: "22:47:13", tone: "success" },
        ],
      },
      {
        label: "Trigger Evaluation",
        description:
          "The contract evaluates the trigger condition against the verified reading and determines whether the bond pays out or holds automatically.",
        icon: Scale,
        logFilename: "cerulea_catbond_engine.log",
        logLines: [
          { text: "[SYS] Evaluating trigger for CB_70120...", time: "22:47:40", tone: "default" },
          { text: "[CMD] evaluateTrigger(CB_70120)", time: "22:47:40", tone: "primary" },
          { text: "[SYS] Magnitude 7.3 exceeds M7.0 trigger threshold.", time: "22:47:41", tone: "default" },
          { text: "[OK] Trigger met. Payout to insurer authorized.", time: "22:47:41", tone: "success" },
        ],
      },
      {
        label: "Principal Settlement",
        description:
          "The Escrow module releases principal to the insurer on a met trigger, or returns it to investors at maturity, with the decision bound to the data.",
        icon: Wallet,
        logFilename: "cerulea_catbond_engine.log",
        logLines: [
          { text: "[SYS] Settling principal for CB_70120...", time: "22:48:05", tone: "default" },
          { text: "[CMD] settleBond(CB_70120, to: \"CEDANT_0x21\", amount: 50000000)", time: "22:48:05", tone: "primary" },
          { text: "[AUTH] Binding settlement to verified event data...", time: "22:48:06", tone: "secondary" },
          { text: "[OK] Principal settled to insurer. No dispute possible.", time: "22:48:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes catastrophe bonds into modular contracts. Each layer locks principal, ingests independent data, evaluates the trigger, and settles on verified evidence.",
    layers: [
      {
        title: "Bond Registry",
        subtitle: "The Trigger Definition",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trigger Definition",
          description:
            "The foundational data layer. The Parametric Insurance module records the peril, precise trigger condition, principal, and oracle source, so the settlement outcome is a deterministic function of verified data.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CatBondRegistry {\n  struct Bond {\n    string peril;\n    uint256 triggerLevel;\n    uint256 principal;\n    bytes32 oracle;\n    uint8 state;\n  }\n\n  mapping(bytes32 => Bond) public bonds;\n\n  function issue(bytes32 id, uint256 level, uint256 principal, bytes32 oracle) external {\n    bonds[id] = Bond(\"QUAKE\", level, principal, oracle, 1);\n  }\n}",
        simAction: "Simulate Bond Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording peril and trigger level M7.0...", tone: "default" },
          { text: "Locking principal 50000000 into escrow...", tone: "default" },
          { text: "Binding the independent oracle source...", tone: "default" },
          { text: "Setting bond state to ACTIVE...", tone: "default" },
          { text: "[SUCCESS] Cat bond CB_70120 issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Data Ingestor",
        subtitle: "The Independent Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Independent Feed",
          description:
            "Removes the trusted intermediary. The Oracle Feeds module accepts only signed readings from the designated independent agency, so both issuer and investors evaluate the trigger against neutral data.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function ingest(bytes32 bondId, uint256 magnitude, bytes calldata sig) external {\n    require(verifyOracle(bonds[bondId].oracle, sig), \"Untrusted source\");\n    lastReading[bondId] = magnitude;\n    emit DataIngested(bondId, magnitude);\n}",
        simAction: "Simulate Data Ingest",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving seismic reading for CB_70120...", tone: "default" },
          { text: "Verifying independent provider signature...", tone: "default" },
          { text: "Recording magnitude 7.3 against the bond...", tone: "default" },
          { text: "Confirming reading is from bound oracle...", tone: "default" },
          { text: "[SUCCESS] Independent data ingested.", tone: "success" },
        ],
      },
      {
        title: "Trigger Evaluator",
        subtitle: "The Automatic Judge",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Judge",
          description:
            "Replaces manual determination. It compares the verified reading against the trigger level and sets the settlement direction deterministically, removing the disputes that delay cat bond settlement.",
          platformFunction: "Adjudication Logic",
        },
        codeSnippet:
          "function evaluate(bytes32 bondId) external returns (bool triggered) {\n    Bond storage b = bonds[bondId];\n    require(b.state == 1, \"Not active\");\n    triggered = lastReading[bondId] >= b.triggerLevel;\n    b.state = triggered ? 2 : 3;\n    emit TriggerEvaluated(bondId, triggered);\n}",
        simAction: "Simulate Trigger Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading trigger level M7.0 for CB_70120...", tone: "default" },
          { text: "Comparing verified magnitude 7.3 against level...", tone: "default" },
          { text: "Setting settlement direction to PAYOUT...", tone: "default" },
          { text: "Recording determination on-chain...", tone: "default" },
          { text: "[SUCCESS] Trigger evaluated on verified data.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Principal Router",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Principal Router",
          description:
            "Executes the outcome. The Escrow and Conditional Settlement module releases principal to the insurer on a met trigger or returns it to investors at maturity, binding the movement to the verified data.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(bytes32 bondId) external {\n    Bond storage b = bonds[bondId];\n    require(b.state == 2 || b.state == 3, \"Not evaluated\");\n    address to = b.state == 2 ? cedant[bondId] : investorPool[bondId];\n    _release(escrowOf(bondId), to, b.principal);\n    emit BondSettled(bondId, to, b.principal);\n}",
        simAction: "Simulate Principal Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading evaluated state for CB_70120...", tone: "default" },
          { text: "Routing principal to the insurer on met trigger...", tone: "default" },
          { text: "Releasing 50000000 from escrow...", tone: "default" },
          { text: "Binding settlement to verified event...", tone: "default" },
          { text: "[SUCCESS] Principal settled, dispute-free.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified-trigger cat bonds is a horizontal capability. Here is how different actors in risk transfer put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Insurers & Cedants", description: "Transfer disaster risk with a bond that pays out automatically on verified data, so recovery capital arrives without the delay of a contested trigger determination.", assetTypes: ["Risk Transfers", "Trigger Definitions", "Payout Rights"] },
      { icon: Coins, title: "Institutional Investors", description: "Hold cat bond exposure knowing principal moves only on independently verified events, replacing determination disputes with a transparent, data-bound settlement.", assetTypes: ["Bond Principal", "Coupon Streams", "Return Rights"] },
      { icon: Globe, title: "Structurers & Arrangers", description: "Structure parametric layers on a shared ledger where the trigger, data source, and settlement logic are all visible, making bonds easier to place and audit.", assetTypes: ["Bond Structures", "Oracle Bindings", "Settlement Terms"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a sponsor's structuring system or routing signed readings from an independent disaster agency, Cerulea provides the exact infrastructure routing required.",
    tracks: [
      {
        title: "Track A: Sponsor Structuring Bridging",
        description:
          "For sponsors and arrangers on legacy structuring systems. Existing bond terms are translated into on-chain trigger definitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Structuring System", sublabel: "Sponsor Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Term Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Cat Bond Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Oracle Execution",
        description:
          "For independent agency feeds routed on-chain. Signed disaster readings flow directly to the bond's trigger evaluation layer.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Disaster Data Agency", sublabel: "Independent Feed", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Reading Verification", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Trigger Settlement Ledger", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cat bond with encoded triggers, independent oracle verification, and principal escrow from scratch requires specialised structuring engineers and long oracle integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Trigger & Settlement Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects insurance-linked-securities integration benchmarks. Negotiating oracle sources, coding trigger evaluation and principal escrow, and shipping transparent coupon flows for an average bond takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your trigger and settlement rules into pre-audited WebAssembly binaries and provisions the shared cat bond ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "property-insurance-underwriting-with-verified-building-inspection-data",
    icon: Building2,
    eyebrow: "Underwriting Provenance Layer",
    headline1: "Anchor the inspection.",
    headline2: "End the dispute.",
    heroDescription:
      "Deploy an underwriting process where building inspection data feeds directly into the policy terms and is anchored as a verified baseline, reducing disputes about pre-existing conditions at claim time. Provenance Notary, Compliance Attestations, and Device Attestation give insurer and policyholder one agreed record to compare against if a claim arises later.",
    heroCta: "Deploy Underwriting Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a disputable inspection report into a verified baseline both parties agree on at underwriting.",
    mechanics: [
      { title: "Anchored Inspection", description: "The Provenance Notary seals the building inspection data at the time of underwriting, so the condition of the property is fixed as a record neither party can later revise." },
      { title: "Terms-Bound Data", description: "The inspection findings feed directly into the policy terms, so coverage, exclusions, and premium all reference the same verified baseline rather than a separate report." },
      { title: "Device-Attested Capture", description: "Device Attestation confirms the inspection readings came from a trusted device and inspector, removing doubt about whether the data was genuine or altered." },
      { title: "Agreed Baseline", description: "Both insurer and policyholder hold the same anchored baseline, so a claim is assessed against an agreed starting condition instead of a contested pre-existing-damage argument." },
      { title: "Compliant Underwriting", description: "Compliance Attestations confirm the inspection meets the required underwriting standard, keeping the policy defensible if the baseline is ever examined." },
      { title: "Claim-Time Comparison", description: "Two further Cerulea Studio modules let a later claim compare new damage against the anchored baseline directly, resolving pre-existing disputes from evidence." },
    ],
    lifecycleTitle: "The Underwriting Lifecycle",
    lifecycleSubtitle:
      "Follow a single property from an attested inspection to an anchored baseline referenced at claim time.",
    lifecycleSteps: [
      {
        label: "Inspection Capture",
        description:
          "A building inspection is captured on an attested device. Device Attestation confirms the source before the data is accepted.",
        icon: Search,
        logFilename: "cerulea_underwrite_engine.log",
        logLines: [
          { text: "[SYS] Initializing Inspection for property PR_31220...", time: "10:20:14", tone: "default" },
          { text: "[CMD] captureInspection { property: \"PR_31220\", inspector: \"INS_0x30\" }", time: "10:20:14", tone: "primary" },
          { text: "[AUTH] Verifying device attestation and inspector credential...", time: "10:20:15", tone: "secondary" },
          { text: "[OK] Inspection IN_44210 accepted from trusted device.", time: "10:20:15", tone: "success" },
        ],
      },
      {
        label: "Standard Attest",
        description:
          "Compliance Attestations confirm the inspection meets the underwriting standard, so the baseline is defensible if later examined.",
        icon: FileCheck,
        logFilename: "cerulea_underwrite_engine.log",
        logLines: [
          { text: "[SYS] Checking IN_44210 against underwriting standard...", time: "10:20:42", tone: "default" },
          { text: "[CMD] attestStandard(IN_44210)", time: "10:20:42", tone: "primary" },
          { text: "[SYS] Coverage of required elements complete. Format valid.", time: "10:20:43", tone: "default" },
          { text: "[OK] Inspection attested to standard.", time: "10:20:43", tone: "success" },
        ],
      },
      {
        label: "Baseline Anchor",
        description:
          "The Provenance Notary anchors the inspection as the verified baseline and binds its findings into the policy terms.",
        icon: Building2,
        logFilename: "cerulea_underwrite_engine.log",
        logLines: [
          { text: "[SYS] Anchoring baseline for property PR_31220...", time: "10:21:05", tone: "default" },
          { text: "[CMD] anchorBaseline(IN_44210, policy: \"PROP_88120\")", time: "10:21:05", tone: "primary" },
          { text: "[AUTH] Sealing findings and binding to policy terms...", time: "10:21:06", tone: "secondary" },
          { text: "[OK] Baseline anchored. Both parties hold the record.", time: "10:21:06", tone: "success" },
        ],
      },
      {
        label: "Claim Comparison",
        description:
          "When a claim arises, new damage is compared against the anchored baseline, resolving pre-existing-condition disputes from evidence.",
        icon: Scale,
        logFilename: "cerulea_underwrite_engine.log",
        logLines: [
          { text: "[SYS] Comparing claim damage against baseline for PROP_88120...", time: "14:55:30", tone: "default" },
          { text: "[CMD] compareToBaseline(PROP_88120, claim: \"PC_51120\")", time: "14:55:30", tone: "primary" },
          { text: "[SYS] New damage distinct from anchored condition.", time: "14:55:31", tone: "default" },
          { text: "[OK] Pre-existing dispute resolved from evidence.", time: "14:55:31", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes property underwriting into modular contracts. Each layer attests the device, verifies the standard, anchors the baseline, and compares claims against it.",
    layers: [
      {
        title: "Inspection Registry",
        subtitle: "The Attested Capture",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Attested Capture",
          description:
            "The foundational data layer. The Device Attestation module records each inspection with proof it came from a trusted device and credentialed inspector, so the underwriting data starts from a verified source.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract InspectionRegistry {\n  struct Inspection {\n    bytes32 property;\n    bytes32 findingsHash;\n    address inspector;\n    bytes32 deviceProof;\n    bool attested;\n  }\n\n  mapping(bytes32 => Inspection) public inspections;\n\n  function capture(bytes32 id, bytes32 property, bytes32 findings, bytes32 device) external {\n    inspections[id] = Inspection(property, findings, msg.sender, device, false);\n  }\n}",
        simAction: "Simulate Inspection Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving inspection data for PR_31220...", tone: "default" },
          { text: "Verifying device attestation proof...", tone: "default" },
          { text: "Confirming inspector credential INS_0x30...", tone: "default" },
          { text: "Recording findings hash on-chain...", tone: "default" },
          { text: "[SUCCESS] Inspection captured from trusted device.", tone: "success" },
        ],
      },
      {
        title: "Standard Gate",
        subtitle: "The Compliance Check",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Check",
          description:
            "Keeps the baseline defensible. The Compliance Attestations module confirms the inspection covers every required element to the underwriting standard before it can become the anchored baseline.",
          platformFunction: "Compliance Logic",
        },
        codeSnippet:
          "function attestStandard(bytes32 id) external onlyUnderwriter returns (bool) {\n    require(coversRequiredElements(id), \"Incomplete inspection\");\n    require(validFormat(id), \"Invalid format\");\n    inspections[id].attested = true;\n    emit StandardAttested(id);\n    return true;\n}",
        simAction: "Simulate Standard Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading underwriting standard requirements...", tone: "default" },
          { text: "Confirming all required elements are covered...", tone: "default" },
          { text: "Validating inspection format...", tone: "default" },
          { text: "Marking inspection as attested...", tone: "default" },
          { text: "[SUCCESS] Inspection meets underwriting standard.", tone: "success" },
        ],
      },
      {
        title: "Baseline Notary",
        subtitle: "The Agreed Record",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Agreed Record",
          description:
            "Fixes the starting condition. The Provenance Notary seals the attested inspection as the baseline and binds its findings into the policy terms, giving both parties one agreed record.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorBaseline(bytes32 inspectionId, bytes32 policyId) external {\n    require(inspections[inspectionId].attested, \"Not attested\");\n    baseline[policyId] = inspections[inspectionId].findingsHash;\n    emit BaselineAnchored(policyId, baseline[policyId]);\n}",
        simAction: "Simulate Baseline Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming inspection IN_44210 is attested...", tone: "default" },
          { text: "Sealing findings as the property baseline...", tone: "default" },
          { text: "Binding baseline into policy PROP_88120 terms...", tone: "default" },
          { text: "Publishing record to both parties...", tone: "default" },
          { text: "[SUCCESS] Verified baseline anchored.", tone: "success" },
        ],
      },
      {
        title: "Comparison Engine",
        subtitle: "The Claim Resolver",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Claim Resolver",
          description:
            "Resolves pre-existing disputes. At claim time it compares reported damage against the anchored baseline, so the insurer and policyholder settle from an agreed record rather than an argument.",
          platformFunction: "Adjudication Logic",
        },
        codeSnippet:
          "function compareToBaseline(bytes32 policyId, bytes32 claimFindings) external view returns (bool distinct) {\n    bytes32 base = baseline[policyId];\n    require(base != bytes32(0), \"No baseline\");\n    distinct = claimFindings != base;\n}",
        simAction: "Simulate Claim Comparison",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading anchored baseline for PROP_88120...", tone: "default" },
          { text: "Reading reported claim damage findings...", tone: "default" },
          { text: "Comparing new damage against the baseline...", tone: "default" },
          { text: "Confirming damage is distinct from baseline...", tone: "default" },
          { text: "[SUCCESS] Pre-existing dispute resolved from evidence.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Baseline-anchored underwriting is a horizontal capability. Here is how different actors in property cover put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Property Insurers", description: "Underwrite from verified inspection data bound into the policy terms, cutting the claim-time disputes about pre-existing damage that drive leakage and litigation.", assetTypes: ["Underwriting Baselines", "Policy Terms", "Risk Records"] },
      { icon: Pickaxe, title: "Inspectors & Surveyors", description: "Capture inspections on attested devices that anchor directly into the policy, so their findings become a trusted, defensible record rather than a disputed report.", assetTypes: ["Inspection Reports", "Device Attestations", "Condition Records"] },
      { icon: Users, title: "Property Owners", description: "Hold the same anchored baseline as the insurer, so a legitimate claim is assessed against an agreed starting condition instead of a pre-existing-damage argument.", assetTypes: ["Baseline Copies", "Coverage Terms", "Claim Comparisons"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an insurer's underwriting system or capturing inspection data from an attested field device, Cerulea routes both into one shared underwriting ledger.",
    tracks: [
      {
        title: "Track A: Insurer Underwriting-System Bridging",
        description:
          "For property insurers on legacy underwriting systems. Existing inspection and policy records are translated into signed on-chain baselines through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Underwriting System", sublabel: "Property Insurer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Baseline Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Underwriting Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Attested Device Capture",
        description:
          "For inspectors capturing data in the field. An attested device app signs each inspection from a device wallet and routes it directly to the underwriting ledger.",
        connectorLabels: ["DEVICE ATTESTATION", "STATE EXECUTION"],
        nodes: [
          { label: "Attested Inspection App", sublabel: "Inspector Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Baseline Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Underwriting Record", icon: Building2, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an underwriting network with device-attested inspections, terms-bound baselines, and claim-time comparison from scratch requires specialised engineers and long inspection integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Inspection & Baseline Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects property-underwriting integration benchmarks. Wiring an underwriting system to field inspection tools, coding device attestation and baseline anchoring, and shipping claim-time comparison for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your inspection and baseline rules into pre-audited WebAssembly binaries and provisions the shared underwriting ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "reinsurance-treaty-management-and-loss-event-data-sharing",
    icon: Globe,
    eyebrow: "Reinsurance Treaty Layer",
    headline1: "Share one loss record.",
    headline2: "Reconcile in days.",
    heroDescription:
      "Stand up a private reinsurance treaty chain with shared loss data, parametric automatic triggers, and credentialed bordereaux submissions. The Trade Finance Documents, Escrow and Conditional Settlement, and Oracle Feeds modules compress the months cedants and reinsurers spend reconciling conflicting event data into days, while parametric layers settle without any manual claims process.",
    heroCta: "Deploy Treaty Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn months of conflicting loss reconciliation into one shared, tamper-evident treaty record.",
    mechanics: [
      { title: "Single Loss Record", description: "Cedants and reinsurers write to one shared loss ledger, so a catastrophe event has a single agreed version instead of each party reconciling from a different set of numbers." },
      { title: "Credentialed Bordereaux", description: "The Trade Finance Documents module accepts bordereaux only from credentialed cedants, so every loss submission carries a verified origin and cannot be quietly restated." },
      { title: "Parametric Treaty Layers", description: "Oracle Feeds drive parametric layers that settle automatically when a defined event threshold is met, removing the manual claims process for those layers entirely." },
      { title: "Automatic Cession", description: "The Escrow and Conditional Settlement module computes and settles each reinsurer's share of a loss against the treaty terms as soon as the shared record is agreed." },
      { title: "Fast Reconciliation", description: "Because all parties reference the same event data, post-event reconciliation compresses from months to days, freeing capital that would otherwise sit contested." },
      { title: "Treaty Transparency", description: "Three further Cerulea Studio modules expose treaty terms, attachment points, and layer status to every participant, so the program's state is visible rather than negotiated." },
    ],
    lifecycleTitle: "The Treaty Lifecycle",
    lifecycleSubtitle:
      "Follow a single catastrophe event from a shared loss record to automatic cession across the treaty.",
    lifecycleSteps: [
      {
        label: "Treaty Onboarding",
        description:
          "The treaty terms, layers, and attachment points are anchored, and credentialed cedants and reinsurers are bound to the shared chain.",
        icon: Handshake,
        logFilename: "cerulea_treaty_engine.log",
        logLines: [
          { text: "[SYS] Initializing Treaty TR_80120...", time: "08:30:11", tone: "default" },
          { text: "[CMD] onboardTreaty { layers: 3, attach: 5000000, limit: 40000000 }", time: "08:30:11", tone: "primary" },
          { text: "[AUTH] Binding credentialed cedants and reinsurers...", time: "08:30:12", tone: "secondary" },
          { text: "[OK] Treaty anchored at block 5910110.", time: "08:30:12", tone: "success" },
        ],
      },
      {
        label: "Loss Event Record",
        description:
          "A catastrophe occurs. Cedants submit credentialed bordereaux and Oracle Feeds record the event, forming one shared loss record.",
        icon: Radio,
        logFilename: "cerulea_treaty_engine.log",
        logLines: [
          { text: "[SYS] Recording loss event EV_66120 for TR_80120...", time: "11:12:40", tone: "default" },
          { text: "[CMD] submitBordereau(cedant: \"CED_0x22\", gross: 18000000)", time: "11:12:40", tone: "primary" },
          { text: "[SYS] Bordereau credentialed. Oracle event data attached.", time: "11:12:41", tone: "default" },
          { text: "[OK] Shared loss record formed. One agreed version.", time: "11:12:41", tone: "success" },
        ],
      },
      {
        label: "Layer Attachment",
        description:
          "The contract applies the loss to the treaty layers, attaching where the loss exceeds the retention and triggering parametric layers automatically.",
        icon: PieChart,
        logFilename: "cerulea_treaty_engine.log",
        logLines: [
          { text: "[SYS] Applying loss EV_66120 to treaty layers...", time: "11:13:10", tone: "default" },
          { text: "[CMD] attachLayers(TR_80120, loss: 18000000)", time: "11:13:10", tone: "primary" },
          { text: "[SYS] Retention 5000000 exhausted. Layers 1 and 2 attach.", time: "11:13:11", tone: "default" },
          { text: "[OK] Parametric layer triggered automatically.", time: "11:13:11", tone: "success" },
        ],
      },
      {
        label: "Cession Settlement",
        description:
          "The Escrow module settles each reinsurer's ceded share against the treaty terms, compressing reconciliation to days.",
        icon: Wallet,
        logFilename: "cerulea_treaty_engine.log",
        logLines: [
          { text: "[SYS] Settling ceded shares for EV_66120...", time: "11:14:05", tone: "default" },
          { text: "[CMD] settleCessions(TR_80120, ceded: 13000000)", time: "11:14:05", tone: "primary" },
          { text: "[AUTH] Releasing each reinsurer share from escrow...", time: "11:14:06", tone: "secondary" },
          { text: "[OK] Cessions settled. Reconciliation done in days.", time: "11:14:06", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes reinsurance treaties into modular contracts. Each layer onboards the treaty, records shared loss, attaches layers, and settles cessions without conflicting data.",
    layers: [
      {
        title: "Treaty Registry",
        subtitle: "The Program Record",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Program Record",
          description:
            "The foundational data layer. It anchors the treaty structure, layers, attachment points, and limits, binding credentialed cedants and reinsurers to a single shared program record.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TreatyRegistry {\n  struct Layer {\n    uint256 attach;\n    uint256 limit;\n    bool parametric;\n  }\n\n  struct Treaty {\n    uint256 retention;\n    Layer[] layers;\n    bool active;\n  }\n\n  mapping(bytes32 => Treaty) public treaties;\n\n  function onboard(bytes32 id, uint256 retention) external onlyBroker {\n    treaties[id].retention = retention;\n    treaties[id].active = true;\n  }\n}",
        simAction: "Simulate Treaty Onboard",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording treaty structure for TR_80120...", tone: "default" },
          { text: "Setting retention 5000000 and 3 layers...", tone: "default" },
          { text: "Binding credentialed cedants and reinsurers...", tone: "default" },
          { text: "Activating the shared program record...", tone: "default" },
          { text: "[SUCCESS] Treaty onboarded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Loss Ledger",
        subtitle: "The Shared Record",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Record",
          description:
            "Ends conflicting versions. The Trade Finance Documents and Oracle Feeds modules record credentialed bordereaux and event data into one loss record all parties reference, removing months of reconciliation.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function submitBordereau(bytes32 treatyId, uint256 gross, bytes calldata cred) external {\n    require(isCredentialedCedant(cred), \"Uncredentialed cedant\");\n    losses[treatyId].push(Loss(msg.sender, gross, block.timestamp));\n    emit BordereauSubmitted(treatyId, msg.sender, gross);\n}",
        simAction: "Simulate Loss Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving bordereau from cedant CED_0x22...", tone: "default" },
          { text: "Verifying cedant credential...", tone: "default" },
          { text: "Attaching oracle event data to the loss...", tone: "default" },
          { text: "Writing to the shared loss ledger...", tone: "default" },
          { text: "[SUCCESS] One agreed loss record formed.", tone: "success" },
        ],
      },
      {
        title: "Attachment Engine",
        subtitle: "The Layer Allocator",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Layer Allocator",
          description:
            "Applies the treaty math. It allocates a recorded loss across retention and layers, attaching where the loss exceeds the retention and triggering parametric layers automatically.",
          platformFunction: "Adjudication Logic",
        },
        codeSnippet:
          "function attach(bytes32 treatyId, uint256 loss) external returns (uint256 ceded) {\n    Treaty storage t = treaties[treatyId];\n    if (loss <= t.retention) return 0;\n    uint256 excess = loss - t.retention;\n    for (uint256 i = 0; i < t.layers.length; i++) {\n      uint256 take = min(excess, t.layers[i].limit);\n      ceded += take;\n      excess -= take;\n    }\n    emit LayersAttached(treatyId, ceded);\n}",
        simAction: "Simulate Layer Attachment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading treaty layers for TR_80120...", tone: "default" },
          { text: "Exhausting retention of 5000000...", tone: "default" },
          { text: "Allocating excess across layers 1 and 2...", tone: "default" },
          { text: "Triggering the parametric layer...", tone: "default" },
          { text: "[SUCCESS] Ceded amount 13000000 allocated.", tone: "success" },
        ],
      },
      {
        title: "Cession Escrow",
        subtitle: "The Share Settler",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Share Settler",
          description:
            "Settles the program. The Escrow and Conditional Settlement module releases each reinsurer's ceded share against the treaty terms as soon as the shared loss is agreed, compressing settlement to days.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settleCessions(bytes32 treatyId, uint256 ceded) external {\n    Share[] memory shares = reinsurerShares[treatyId];\n    for (uint256 i = 0; i < shares.length; i++) {\n      uint256 amount = ceded * shares[i].pct / 10000;\n      _release(escrowOf(treatyId), shares[i].reinsurer, amount);\n    }\n    emit CessionsSettled(treatyId, ceded);\n}",
        simAction: "Simulate Cession Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading each reinsurer's share of TR_80120...", tone: "default" },
          { text: "Computing ceded amounts by percentage...", tone: "default" },
          { text: "Releasing shares from treaty escrow...", tone: "default" },
          { text: "Recording settlement on the shared record...", tone: "default" },
          { text: "[SUCCESS] Cessions settled in days, not months.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared treaty management is a horizontal capability. Here is how different actors in reinsurance put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Cedants & Primary Insurers", description: "Submit credentialed bordereaux into one shared loss record and recover ceded losses in days, freeing capital that would otherwise sit contested through months of reconciliation.", assetTypes: ["Bordereaux", "Ceded Losses", "Recovery Claims"] },
      { icon: Globe, title: "Reinsurers", description: "Settle each treaty layer against one agreed event record with parametric layers paying automatically, reducing the dispute and administration cost of large catastrophe programs.", assetTypes: ["Treaty Layers", "Cession Shares", "Parametric Triggers"] },
      { icon: Handshake, title: "Brokers & Program Managers", description: "Administer a treaty where terms, attachment points, and layer status are visible to every participant, replacing back-and-forth data exchange with one transparent program.", assetTypes: ["Treaty Terms", "Program Status", "Settlement Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a reinsurer's treaty system or routing event data from a catastrophe oracle, Cerulea routes both into one shared treaty ledger.",
    tracks: [
      {
        title: "Track A: Reinsurer Treaty-System Bridging",
        description:
          "For cedants and reinsurers on legacy treaty systems. Existing bordereaux and treaty records are translated into signed on-chain loss events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Treaty System", sublabel: "Cedant / Reinsurer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Loss Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Treaty Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Oracle Execution",
        description:
          "For catastrophe data feeds routed on-chain. Signed event readings flow directly to the treaty's parametric layer execution.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Catastrophe Oracle", sublabel: "Event Data Feed", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Event Verification", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Treaty Settlement Ledger", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a treaty network with shared loss data, credentialed bordereaux, and automatic cession settlement from scratch requires specialised reinsurance engineers and long multi-party integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Treaty & Cession Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects reinsurance-program integration benchmarks. Aligning cedant and reinsurer systems on shared loss data, coding layer attachment and cession logic, and shipping parametric settlement for an average treaty takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your treaty and cession rules into pre-audited WebAssembly binaries and provisions the shared treaty ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "catastrophe-loss-pooling-across-multiple-primary-insurers",
    icon: Boxes,
    eyebrow: "Risk Pooling Layer",
    headline1: "Pool the catastrophe risk.",
    headline2: "Automate the payouts.",
    heroDescription:
      "Stand up a shared catastrophe loss pool where multiple primary insurers contribute premiums and draw on the pool automatically based on verified loss events. The Oracle Feeds, Escrow and Conditional Settlement, and Audit Logs modules track each insurer's contribution and calculate payouts from trusted data, removing the administrative burden of manual pool management.",
    heroCta: "Deploy Pooling Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manually administered risk pool into an automatic, verified contribution and payout engine.",
    mechanics: [
      { title: "Tracked Contributions", description: "The Escrow and Conditional Settlement module records each insurer's premium contribution to the pool, so every participant's stake is always current and provable." },
      { title: "Verified Loss Draw", description: "Oracle Feeds confirm a qualifying catastrophe before any insurer draws on the pool, so payouts respond to verified events rather than self-reported losses." },
      { title: "Automatic Allocation", description: "When a loss is verified, the contract calculates each affected insurer's payout from the pool according to the pooling rules, with no manual administration." },
      { title: "Solvency Guardrails", description: "The pool enforces contribution and draw limits on-chain, so no single insurer can exhaust the pool beyond its agreed share and the pool stays solvent." },
      { title: "Transparent Balance", description: "Every participant reads the same live pool balance and contribution history, replacing periodic statements with a continuously visible shared account." },
      { title: "Immutable Pool Trail", description: "Two further Cerulea Studio modules record every contribution, draw, and payout in Audit Logs, giving participants and regulators one uncontestable pool history." },
    ],
    lifecycleTitle: "The Pooling Lifecycle",
    lifecycleSubtitle:
      "Follow the pool from insurer contributions through a verified event to an automatic, rule-based payout.",
    lifecycleSteps: [
      {
        label: "Pool Contribution",
        description:
          "Each primary insurer contributes its premium to the shared pool. The Escrow module records the stake against the participant.",
        icon: Boxes,
        logFilename: "cerulea_pool_engine.log",
        logLines: [
          { text: "[SYS] Initializing Catastrophe Pool PL_90120...", time: "09:05:20", tone: "default" },
          { text: "[CMD] contribute { insurer: \"INS_0x24\", premium: 4000000 }", time: "09:05:20", tone: "primary" },
          { text: "[AUTH] Recording stake and updating pool balance...", time: "09:05:21", tone: "secondary" },
          { text: "[OK] Contribution anchored. Pool balance 24000000.", time: "09:05:21", tone: "success" },
        ],
      },
      {
        label: "Event Verification",
        description:
          "A catastrophe occurs. Oracle Feeds confirm the qualifying event before any insurer can draw on the pool.",
        icon: Radio,
        logFilename: "cerulea_pool_engine.log",
        logLines: [
          { text: "[SYS] Verifying catastrophe event for PL_90120...", time: "14:22:41", tone: "default" },
          { text: "[CMD] verifyEvent(pool: \"PL_90120\", event: \"FLD_5521\")", time: "14:22:41", tone: "primary" },
          { text: "[SYS] Event signed by oracle. Qualifies under pool terms.", time: "14:22:42", tone: "default" },
          { text: "[OK] Verified event. Draws authorized for affected book.", time: "14:22:42", tone: "success" },
        ],
      },
      {
        label: "Payout Allocation",
        description:
          "The contract calculates each affected insurer's payout from the pool according to the pooling rules and draw limits.",
        icon: PieChart,
        logFilename: "cerulea_pool_engine.log",
        logLines: [
          { text: "[SYS] Allocating payouts for event FLD_5521...", time: "14:23:15", tone: "default" },
          { text: "[CMD] allocate(PL_90120, verifiedLoss: 9000000)", time: "14:23:15", tone: "primary" },
          { text: "[SYS] Applying pooling shares and per-insurer draw caps...", time: "14:23:16", tone: "default" },
          { text: "[OK] Allocation computed within solvency guardrails.", time: "14:23:16", tone: "success" },
        ],
      },
      {
        label: "Pool Settlement",
        description:
          "The Escrow module releases each allocated payout and Audit Logs record the draw, keeping the pool balance and history current.",
        icon: Wallet,
        logFilename: "cerulea_pool_engine.log",
        logLines: [
          { text: "[SYS] Settling allocated payouts for PL_90120...", time: "14:23:50", tone: "default" },
          { text: "[CMD] settleDraws(PL_90120, total: 9000000)", time: "14:23:50", tone: "primary" },
          { text: "[AUTH] Releasing draws and logging to pool history...", time: "14:23:51", tone: "secondary" },
          { text: "[OK] Payouts settled. Pool balance updated to 15000000.", time: "14:23:51", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes catastrophe loss pooling into modular contracts. Each layer tracks contributions, verifies events, allocates payouts, and settles draws without manual administration.",
    layers: [
      {
        title: "Contribution Ledger",
        subtitle: "The Stake Record",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Stake Record",
          description:
            "The foundational data layer. The Escrow and Conditional Settlement module records each insurer's premium contribution and stake, so the pool balance and every participant's share are always provable.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PoolLedger {\n  mapping(bytes32 => uint256) public balance;\n  mapping(bytes32 => mapping(address => uint256)) public stake;\n\n  function contribute(bytes32 pool, uint256 premium) external {\n    stake[pool][msg.sender] += premium;\n    balance[pool] += premium;\n    emit Contributed(pool, msg.sender, premium);\n  }\n}",
        simAction: "Simulate Contribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving premium 4000000 from INS_0x24...", tone: "default" },
          { text: "Recording insurer stake in the pool...", tone: "default" },
          { text: "Updating pool balance to 24000000...", tone: "default" },
          { text: "Writing contribution to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Contribution tracked on-chain.", tone: "success" },
        ],
      },
      {
        title: "Event Verifier",
        subtitle: "The Loss Gate",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Loss Gate",
          description:
            "Guards the pool. The Oracle Feeds module confirms a qualifying catastrophe against trusted data before any draw is allowed, so payouts respond to verified events rather than self-reported losses.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function verifyEvent(bytes32 pool, bytes32 eventId, bytes calldata sig) external returns (bool) {\n    require(verifyOracle(sig), \"Untrusted source\");\n    require(qualifies(pool, eventId), \"Outside pool terms\");\n    verified[pool][eventId] = true;\n    emit EventVerified(pool, eventId);\n    return true;\n}",
        simAction: "Simulate Event Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving catastrophe event for PL_90120...", tone: "default" },
          { text: "Verifying oracle signature on the event...", tone: "default" },
          { text: "Confirming event qualifies under pool terms...", tone: "default" },
          { text: "Marking event as verified...", tone: "default" },
          { text: "[SUCCESS] Draws authorized on verified event.", tone: "success" },
        ],
      },
      {
        title: "Allocation Engine",
        subtitle: "The Draw Calculator",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Draw Calculator",
          description:
            "Applies the pooling rules. It computes each affected insurer's payout from the verified loss and enforces per-insurer draw caps, so no participant can exhaust the pool beyond its agreed share.",
          platformFunction: "Adjudication Logic",
        },
        codeSnippet:
          "function allocate(bytes32 pool, bytes32 eventId, uint256 loss) external returns (uint256 total) {\n    require(verified[pool][eventId], \"Event not verified\");\n    Claimant[] memory cs = affected[pool][eventId];\n    for (uint256 i = 0; i < cs.length; i++) {\n      uint256 draw = min(cs[i].loss, drawCap(pool, cs[i].insurer));\n      payout[pool][cs[i].insurer] = draw;\n      total += draw;\n    }\n    emit Allocated(pool, eventId, total);\n}",
        simAction: "Simulate Payout Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading affected insurers for FLD_5521...", tone: "default" },
          { text: "Applying pooling shares to verified loss...", tone: "default" },
          { text: "Enforcing per-insurer draw caps...", tone: "default" },
          { text: "Computing total allocation 9000000...", tone: "default" },
          { text: "[SUCCESS] Payouts allocated within guardrails.", tone: "success" },
        ],
      },
      {
        title: "Draw Escrow",
        subtitle: "The Pool Settler",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pool Settler",
          description:
            "Settles and records. The Escrow and Conditional Settlement module releases each allocated draw and logs it, keeping the pool balance current and the history immutable in Audit Logs.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settleDraws(bytes32 pool, bytes32 eventId) external {\n    Claimant[] memory cs = affected[pool][eventId];\n    for (uint256 i = 0; i < cs.length; i++) {\n      uint256 draw = payout[pool][cs[i].insurer];\n      balance[pool] -= draw;\n      _transfer(poolVault, cs[i].insurer, draw);\n    }\n    emit DrawsSettled(pool, eventId);\n}",
        simAction: "Simulate Draw Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading allocated draws for FLD_5521...", tone: "default" },
          { text: "Releasing each draw from the pool vault...", tone: "default" },
          { text: "Reducing pool balance to 15000000...", tone: "default" },
          { text: "Logging draws to immutable pool history...", tone: "default" },
          { text: "[SUCCESS] Draws settled, pool balance updated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared risk pooling is a horizontal capability. Here is how different actors in catastrophe cover put the shared ledger to work.",
    sectors: [
      { icon: Landmark, title: "Primary Insurers", description: "Contribute to and draw on a shared catastrophe pool automatically on verified events, spreading a major loss across the pool without the administrative burden of manual management.", assetTypes: ["Pool Contributions", "Verified Draws", "Stake Records"] },
      { icon: Boxes, title: "Pool Administrators", description: "Run a pool where contributions, balances, and draw caps are enforced on-chain, replacing periodic reconciliation and statements with a continuously accurate shared account.", assetTypes: ["Pool Balances", "Draw Limits", "Allocation Rules"] },
      { icon: Gavel, title: "Regulators & Auditors", description: "Read one immutable history of every contribution, verified event, and payout, replacing sampled pool audits with a live, uncontestable view of the pool's state.", assetTypes: ["Contribution Logs", "Payout Trails", "Solvency Views"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an insurer's finance system or routing event data from a catastrophe oracle, Cerulea routes both into one shared pool ledger.",
    tracks: [
      {
        title: "Track A: Insurer Finance-System Bridging",
        description:
          "For pool participants on legacy finance systems. Existing contribution and claim records are translated into signed on-chain pool events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Finance System", sublabel: "Insurer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Pool Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Oracle Execution",
        description:
          "For catastrophe data feeds routed on-chain. Signed event readings flow directly to the pool's draw authorization layer.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Catastrophe Oracle", sublabel: "Event Data Feed", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Event Verification", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Pool Settlement Ledger", icon: Boxes, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a risk pool with tracked contributions, verified loss draws, and rule-based allocation from scratch requires specialised engineers and long multi-insurer integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Pooling & Draw Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects risk-pool integration benchmarks. Aligning multiple insurers on shared contribution accounting, coding verified draw and allocation logic, and shipping solvency guardrails for an average pool takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your pooling and draw rules into pre-audited WebAssembly binaries and provisions the shared pool ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "retrocession-agreement-settlement-automation",
    icon: Scale,
    eyebrow: "Retrocession Settlement Layer",
    headline1: "Share one ceded record.",
    headline2: "Settle automatically.",
    heroDescription:
      "Run automated settlement between a reinsurer and its retrocessionaires based on a shared, verified record of ceded losses. Trade Finance Documents, Escrow and Conditional Settlement, and Audit Logs maintain one ceded-loss record that every party in the retrocession chain references, so settlement amounts are calculated consistently and paid out automatically.",
    heroCta: "Deploy Retrocession Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn multi-party ceded-loss disputes into one shared record that settles the chain automatically.",
    mechanics: [
      { title: "Single Ceded Record", description: "The Trade Finance Documents module maintains one verified record of the ceded loss that every retrocessionaire references, so no party works from its own conflicting version of the numbers." },
      { title: "Chained Retrocession", description: "The contract models the full retrocession chain, so a loss ceded from reinsurer to retrocessionaire to further retrocessionaire is allocated consistently at every link." },
      { title: "Automatic Share Calc", description: "Each retrocessionaire's owed amount is computed from the shared record and its agreed share, removing the manual reconciliation that different loss versions force." },
      { title: "Conditional Settlement", description: "The Escrow and Conditional Settlement module releases each party's share once the shared ceded loss is agreed, binding calculation and payment into one automatic step." },
      { title: "Consistent Amounts", description: "Because every settlement references the same ceded-loss record, the amounts each party owes reconcile by construction rather than after weeks of dispute." },
      { title: "Immutable Chain Trail", description: "One further Cerulea Studio module records every cession, share, and payout in Audit Logs, giving the whole retrocession chain one uncontestable settlement history." },
    ],
    lifecycleTitle: "The Retrocession Lifecycle",
    lifecycleSubtitle:
      "Follow a single ceded loss from a shared record through the chain to automatic, consistent settlement.",
    lifecycleSteps: [
      {
        label: "Ceded Loss Record",
        description:
          "The reinsurer records the ceded loss into the shared chain. The Trade Finance Documents module verifies and anchors it for all parties.",
        icon: ScrollText,
        logFilename: "cerulea_retro_engine.log",
        logLines: [
          { text: "[SYS] Initializing Retrocession chain RC_10120...", time: "10:40:12", tone: "default" },
          { text: "[CMD] recordCededLoss { reinsurer: \"RE_0x25\", ceded: 12000000 }", time: "10:40:12", tone: "primary" },
          { text: "[AUTH] Verifying and anchoring the shared ceded record...", time: "10:40:13", tone: "secondary" },
          { text: "[OK] Ceded loss anchored at block 6010120.", time: "10:40:13", tone: "success" },
        ],
      },
      {
        label: "Chain Allocation",
        description:
          "The contract allocates the ceded loss along the retrocession chain according to each party's agreed share at every link.",
        icon: Network,
        logFilename: "cerulea_retro_engine.log",
        logLines: [
          { text: "[SYS] Allocating ceded loss across chain RC_10120...", time: "10:40:40", tone: "default" },
          { text: "[CMD] allocateChain(RC_10120, ceded: 12000000)", time: "10:40:40", tone: "primary" },
          { text: "[SYS] Applying shares at each retrocession link...", time: "10:40:41", tone: "default" },
          { text: "[OK] Shares computed consistently from one record.", time: "10:40:41", tone: "success" },
        ],
      },
      {
        label: "Share Verification",
        description:
          "Each retrocessionaire's owed amount is verified against the shared record and its agreed share before any settlement is armed.",
        icon: Scale,
        logFilename: "cerulea_retro_engine.log",
        logLines: [
          { text: "[SYS] Verifying retrocessionaire shares for RC_10120...", time: "10:41:05", tone: "default" },
          { text: "[CMD] verifyShares(RC_10120)", time: "10:41:05", tone: "primary" },
          { text: "[SYS] Sum of shares matches ceded loss exactly.", time: "10:41:06", tone: "default" },
          { text: "[OK] Shares verified. Settlement armed.", time: "10:41:06", tone: "success" },
        ],
      },
      {
        label: "Automatic Settlement",
        description:
          "The Escrow module releases each retrocessionaire's share automatically, with Audit Logs recording the full chain of payouts.",
        icon: Wallet,
        logFilename: "cerulea_retro_engine.log",
        logLines: [
          { text: "[SYS] Settling retrocession shares for RC_10120...", time: "10:41:30", tone: "default" },
          { text: "[CMD] settleChain(RC_10120)", time: "10:41:30", tone: "primary" },
          { text: "[AUTH] Releasing each share and logging to chain history...", time: "10:41:31", tone: "secondary" },
          { text: "[OK] Chain settled automatically. Amounts consistent.", time: "10:41:31", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes retrocession settlement into modular contracts. Each layer records the ceded loss, allocates the chain, verifies shares, and settles automatically from one record.",
    layers: [
      {
        title: "Ceded Loss Registry",
        subtitle: "The Shared Record",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Record",
          description:
            "The foundational data layer. The Trade Finance Documents module anchors one verified ceded-loss record that every party in the retrocession chain references, removing conflicting versions of the loss.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "contract CededLossRegistry {\n  struct Cession {\n    address reinsurer;\n    uint256 ceded;\n    uint256 recordedAt;\n    bool verified;\n  }\n\n  mapping(bytes32 => Cession) public cessions;\n\n  function record(bytes32 chainId, uint256 ceded) external onlyReinsurer {\n    cessions[chainId] = Cession(msg.sender, ceded, block.timestamp, true);\n  }\n}",
        simAction: "Simulate Loss Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving ceded loss 12000000 from RE_0x25...", tone: "default" },
          { text: "Verifying the ceded-loss submission...", tone: "default" },
          { text: "Anchoring the shared record for RC_10120...", tone: "default" },
          { text: "Recording timestamp and reinsurer...", tone: "default" },
          { text: "[SUCCESS] Shared ceded record anchored.", tone: "success" },
        ],
      },
      {
        title: "Chain Allocator",
        subtitle: "The Link Distributor",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Link Distributor",
          description:
            "Models the retrocession chain. It allocates the ceded loss to each party according to its agreed share at every link, so a multi-hop retrocession is distributed consistently from one record.",
          platformFunction: "Adjudication Logic",
        },
        codeSnippet:
          "function allocateChain(bytes32 chainId, uint256 ceded) external {\n    Link[] memory links = chain[chainId];\n    for (uint256 i = 0; i < links.length; i++) {\n      owed[chainId][links[i].party] = ceded * links[i].pct / 10000;\n    }\n    emit ChainAllocated(chainId, links.length);\n}",
        simAction: "Simulate Chain Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading retrocession links for RC_10120...", tone: "default" },
          { text: "Applying each party's agreed share...", tone: "default" },
          { text: "Distributing the ceded loss along the chain...", tone: "default" },
          { text: "Writing owed amounts per party...", tone: "default" },
          { text: "[SUCCESS] Chain allocated from one record.", tone: "success" },
        ],
      },
      {
        title: "Share Verifier",
        subtitle: "The Consistency Check",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consistency Check",
          description:
            "Guarantees the amounts reconcile. It confirms the sum of every retrocessionaire's owed share equals the recorded ceded loss before settlement is armed, so nothing settles on an inconsistent split.",
          platformFunction: "Compliance Logic",
        },
        codeSnippet:
          "function verifyShares(bytes32 chainId) external view returns (bool) {\n    Link[] memory links = chain[chainId];\n    uint256 sum;\n    for (uint256 i = 0; i < links.length; i++) sum += owed[chainId][links[i].party];\n    require(sum == cessions[chainId].ceded, \"Shares do not reconcile\");\n    return true;\n}",
        simAction: "Simulate Share Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading owed shares for RC_10120...", tone: "default" },
          { text: "Summing shares across the chain...", tone: "default" },
          { text: "Comparing sum against recorded ceded loss...", tone: "default" },
          { text: "Confirming exact reconciliation...", tone: "default" },
          { text: "[SUCCESS] Shares verified, settlement armed.", tone: "success" },
        ],
      },
      {
        title: "Chain Escrow",
        subtitle: "The Auto Settler",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Settler",
          description:
            "Settles the chain. The Escrow and Conditional Settlement module releases each retrocessionaire's verified share automatically and records every payout in Audit Logs for the whole chain.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settleChain(bytes32 chainId) external {\n    Link[] memory links = chain[chainId];\n    for (uint256 i = 0; i < links.length; i++) {\n      uint256 amount = owed[chainId][links[i].party];\n      _release(escrowOf(chainId), links[i].party, amount);\n    }\n    emit ChainSettled(chainId);\n}",
        simAction: "Simulate Chain Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming verified shares for RC_10120...", tone: "default" },
          { text: "Releasing each retrocessionaire's share...", tone: "default" },
          { text: "Logging every payout to chain history...", tone: "default" },
          { text: "Closing the retrocession settlement...", tone: "default" },
          { text: "[SUCCESS] Chain settled automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated retrocession settlement is a horizontal capability. Here is how different actors in the risk chain put the shared ledger to work.",
    sectors: [
      { icon: Globe, title: "Reinsurers", description: "Cede risk onward against one verified loss record and settle with every retrocessionaire automatically, replacing weeks of reconciliation across parties working from different data.", assetTypes: ["Ceded Losses", "Retrocession Terms", "Settlement Rights"] },
      { icon: Landmark, title: "Retrocessionaires", description: "Receive shares calculated consistently from the same ceded-loss record, so owed amounts reconcile by construction and payouts arrive without a drawn-out dispute.", assetTypes: ["Share Allocations", "Owed Amounts", "Payout Receipts"] },
      { icon: Handshake, title: "Brokers & Chain Managers", description: "Administer a retrocession chain where the ceded loss, each link's share, and every payout are visible on one ledger, replacing multi-party spreadsheets with a single record.", assetTypes: ["Chain Structures", "Cession Trails", "Settlement Histories"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a reinsurer's retrocession system or capturing shares from a retrocessionaire's platform, Cerulea routes both into one shared settlement ledger.",
    tracks: [
      {
        title: "Track A: Reinsurer Retrocession-System Bridging",
        description:
          "For reinsurers on legacy retrocession systems. Existing ceded-loss and share records are translated into signed on-chain settlement events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Retro System", sublabel: "Reinsurer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Cession Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Retrocessionaire Platform Capture",
        description:
          "For retrocessionaires confirming shares from their own platform. A connector signs each share acceptance from a party wallet and routes it directly to the settlement ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Retrocessionaire Platform", sublabel: "Counterparty System", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Share Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Settlement Record", icon: Scale, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a retrocession network with a shared ceded-loss record, chained share allocation, and automatic settlement from scratch requires specialised reinsurance engineers and long multi-party integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Cession & Settlement Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects retrocession-settlement integration benchmarks. Aligning a reinsurer and its retrocessionaires on one ceded-loss record, coding chained share allocation, and shipping automatic settlement for an average chain takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your cession and settlement rules into pre-audited WebAssembly binaries and provisions the shared settlement ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const insuranceItems: ExtraCaseItem[] = [
  {
    label: "Policy issuance and claims processing via smart contracts",
    href: "/solutions/use-case/policy-issuance-and-claims-processing-via-smart-contracts",
    description: "Auto-adjudicate and settle health claims in hours.",
    icon: Hospital,
    category: "ENTERPRISE",
    tags: ["Insurance", "Claims"],
    industry: INDUSTRY,
  },
  {
    label: "Health insurance claim pre-authorization across hospital network",
    href: "/solutions/use-case/health-insurance-claim-pre-authorization-across-hospital-network",
    description: "Instant cashless pre-authorization across the hospital network.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Insurance", "Pre-Authorization"],
    industry: INDUSTRY,
  },
  {
    label: "Group insurance enrollment and premium reconciliation for employers",
    href: "/solutions/use-case/group-insurance-enrollment-and-premium-reconciliation-for-employers",
    description: "Sync employer headcount with group premium in real time.",
    icon: Users,
    category: "ENTERPRISE",
    tags: ["Insurance", "Reconciliation"],
    industry: INDUSTRY,
  },
  {
    label: "Beneficiary verification and claim payout for life insurance",
    href: "/solutions/use-case/beneficiary-verification-and-claim-payout-for-life-insurance",
    description: "Verify beneficiaries digitally and release life payouts faster.",
    icon: IdCard,
    category: "ENTERPRISE",
    tags: ["Insurance", "Life"],
    industry: INDUSTRY,
  },
  {
    label: "Group term insurance for gig workers via aggregator platforms",
    href: "/solutions/use-case/group-term-insurance-for-gig-workers-via-aggregator-platforms",
    description: "Activate cover automatically on verified active gig status.",
    icon: Handshake,
    category: "SME",
    tags: ["Insurance", "Gig Economy"],
    industry: INDUSTRY,
  },
  {
    label: "Insurance agent commission tracking and compliance",
    href: "/solutions/use-case/insurance-agent-commission-tracking-and-compliance",
    description: "Verified agent commissions checked against regulatory caps.",
    icon: Coins,
    category: "ENTERPRISE",
    tags: ["Insurance", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Parametric insurance payouts triggered by verified event data",
    href: "/solutions/use-case/parametric-insurance-payouts-triggered-by-verified-event-data",
    description: "Disaster payouts triggered by verified oracle data.",
    icon: Zap,
    category: "ENTERPRISE",
    tags: ["Insurance", "Parametric"],
    industry: INDUSTRY,
  },
  {
    label: "Motor insurance claim with verified accident and repair records",
    href: "/solutions/use-case/motor-insurance-claim-with-verified-accident-and-repair-records",
    description: "Verified accident and repair records speed motor claims.",
    icon: Car,
    category: "ENTERPRISE",
    tags: ["Insurance", "Motor"],
    industry: INDUSTRY,
  },
  {
    label: "Catastrophe bond trigger verification for institutional investors",
    href: "/solutions/use-case/catastrophe-bond-trigger-verification-for-institutional-investors",
    description: "Cat bonds settle on independently verified disaster data.",
    icon: Activity,
    category: "ENTERPRISE",
    tags: ["Insurance", "Cat Bonds"],
    industry: INDUSTRY,
  },
  {
    label: "Property insurance underwriting with verified building inspection data",
    href: "/solutions/use-case/property-insurance-underwriting-with-verified-building-inspection-data",
    description: "Anchor inspection data to cut pre-existing damage disputes.",
    icon: Building2,
    category: "ENTERPRISE",
    tags: ["Insurance", "Underwriting"],
    industry: INDUSTRY,
  },
  {
    label: "Reinsurance treaty management and loss event data sharing",
    href: "/solutions/use-case/reinsurance-treaty-management-and-loss-event-data-sharing",
    description: "Shared loss data compresses reinsurance reconciliation to days.",
    icon: Globe,
    category: "ENTERPRISE",
    tags: ["Insurance", "Reinsurance"],
    industry: INDUSTRY,
  },
  {
    label: "Catastrophe loss pooling across multiple primary insurers",
    href: "/solutions/use-case/catastrophe-loss-pooling-across-multiple-primary-insurers",
    description: "Automate contributions and payouts across a shared cat pool.",
    icon: Boxes,
    category: "ENTERPRISE",
    tags: ["Insurance", "Risk Pooling"],
    industry: INDUSTRY,
  },
  {
    label: "Retrocession agreement settlement automation",
    href: "/solutions/use-case/retrocession-agreement-settlement-automation",
    description: "One shared ceded-loss record settles retrocession automatically.",
    icon: Scale,
    category: "ENTERPRISE",
    tags: ["Insurance", "Retrocession"],
    industry: INDUSTRY,
  },
]
