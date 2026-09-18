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

const INDUSTRY = "Travel & Hospitality"

export const travelHospitalityCases: CaseEntry[] = [
  {
    slug: "provably-fair-gaming-outcomes-on-chain",
    icon: Gamepad,
    eyebrow: "Provably Fair Gaming Engine",
    headline1: "Prove every outcome.",
    headline2: "Trust the random seed.",
    heroDescription:
      "Deploy a provably fair gaming platform where every result is independently verifiable and no operator can manipulate the outcome. A verifiable Randomness Beacon commits the seed before a bet is placed, so players and regulators audit fairness from cryptographic evidence rather than a casino's word.",
    heroCta: "Deploy Fair Gaming Engines",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn opaque server-side RNG into a committed, verifiable, and continuously auditable settlement process.",
    mechanics: [
      { title: "Committed Randomness Beacon", description: "Replace hidden server seeds. The Randomness Beacon commits a cryptographic seed to the ledger before any bet is accepted, so an outcome cannot be chosen after the player has wagered." },
      { title: "Logic and Actions Rules", description: "Encode each game's payout table in the Logic and Actions Editor. The rules that map a seed to a result are published on-chain, so anyone can replay the calculation and reach the same outcome." },
      { title: "Escrowed Settlement", description: "Lock the stake in Escrow and Conditional Settlement. Winnings release automatically the instant a verified outcome resolves, removing the operator from the payout decision entirely." },
      { title: "Continuous Compliance View", description: "Give the regulator a live window. Instead of infrequent retrospective audits, the gaming authority queries every seed commitment and outcome in real time from a read-only node." },
      { title: "Player-Side Verification", description: "Expose a public verifier. A player resolves any past round to its pre-committed seed and the published payout logic, confirming the result was fixed before their bet was placed." },
      { title: "Instant Dispute Proof", description: "Settle disputes with cryptography. A contested loss is resolved by replaying the committed seed against the on-chain rules, closing the case in minutes rather than a manual investigation." },
    ],
    lifecycleTitle: "The Provably Fair Lifecycle",
    lifecycleSubtitle:
      "Follow a single wager from seed commitment through outcome resolution to a player's independent verification of fairness.",
    lifecycleSteps: [
      {
        label: "Seed Commitment",
        description:
          "Before the round opens, the Randomness Beacon commits a hashed seed to the ledger. The commitment is anchored so the outcome is fixed before any player can place a bet.",
        icon: Zap,
        logFilename: "cerulea_fairplay.log",
        logLines: [
          { text: "[SYS] Initializing Randomness Beacon round...", time: "21:04:11", tone: "default" },
          { text: "[CMD] commitSeed { game: \"BLACKJACK_07\", round: 88421 }", time: "21:04:11", tone: "primary" },
          { text: "[AUTH] Anchoring seed hash 0x8f21..c4 pre-bet...", time: "21:04:12", tone: "secondary" },
          { text: "[OK] Seed committed at block 5510233. Round open.", time: "21:04:12", tone: "success" },
        ],
      },
      {
        label: "Bet Placement",
        description:
          "The player places a wager. The stake moves into Escrow and Conditional Settlement and is bound to the already-committed round, so the operator cannot alter the seed.",
        icon: Wallet,
        logFilename: "cerulea_fairplay.log",
        logLines: [
          { text: "[SYS] Bet payload received from Player_0x9A2...", time: "21:04:40", tone: "default" },
          { text: "[CMD] placeBet(round: 88421, stake: 50 USDC)", time: "21:04:40", tone: "primary" },
          { text: "[SYS] Stake escrowed against committed round.", time: "21:04:41", tone: "default" },
          { text: "[OK] Bet locked. Seed hash unchanged.", time: "21:04:41", tone: "success" },
        ],
      },
      {
        label: "Outcome Resolution",
        description:
          "The beacon reveals the seed and the Logic and Actions rules map it to a result. The payout is computed deterministically and escrow releases winnings automatically.",
        icon: Cpu,
        logFilename: "cerulea_fairplay.log",
        logLines: [
          { text: "[SYS] Revealing committed seed for round 88421...", time: "21:04:58", tone: "default" },
          { text: "[CMD] resolveOutcome(round: 88421)", time: "21:04:58", tone: "primary" },
          { text: "[AUTH] Reveal matches pre-committed hash 0x8f21..c4.", time: "21:04:58", tone: "secondary" },
          { text: "[OK] Result settled. Escrow released per rules.", time: "21:04:59", tone: "success" },
        ],
      },
      {
        label: "Player Verification",
        description:
          "A player disputes the loss. They resolve the round on-chain, confirm the seed was committed before their bet, and replay the published logic to reproduce the exact outcome.",
        icon: Search,
        logFilename: "cerulea_fairplay.log",
        logLines: [
          { text: "[SYS] Public verification request for round 88421...", time: "21:11:02", tone: "default" },
          { text: "[CMD] verifyRound(88421)", time: "21:11:02", tone: "primary" },
          { text: "[SYS] Seed timestamp precedes bet timestamp. Replaying logic...", time: "21:11:02", tone: "default" },
          { text: "[OK] Outcome reproduced. Fairness proven. Dispute closed.", time: "21:11:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fair gaming into modular contracts. Each layer commits randomness, escrows stakes, resolves outcomes, and exposes the round to public replay without the operator ever holding the result.",
    layers: [
      {
        title: "Randomness Beacon",
        subtitle: "The Committed Seed",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Committed Seed",
          description:
            "The fairness anchor. It commits a hashed seed to the ledger before betting opens and later reveals it, so the source of randomness for every round is provably fixed ahead of any wager.",
          platformFunction: "Verifiable Randomness",
        },
        codeSnippet:
          "contract RandomnessBeacon {\n  struct Round {\n    bytes32 seedHash;\n    bytes32 revealed;\n    uint256 committedAt;\n    bool open;\n  }\n\n  mapping(uint256 => Round) public rounds;\n\n  function commit(uint256 id, bytes32 seedHash) external onlyOperator {\n    rounds[id] = Round(seedHash, 0x0, block.timestamp, true);\n    emit SeedCommitted(id, seedHash, block.timestamp);\n  }\n}",
        simAction: "Simulate Seed Commit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Generating entropy for round 88421...", tone: "default" },
          { text: "Hashing seed and sealing to ledger...", tone: "default" },
          { text: "Recording commitment timestamp...", tone: "default" },
          { text: "Locking round state before betting opens...", tone: "default" },
          { text: "[SUCCESS] Seed committed pre-bet on-chain.", tone: "success" },
        ],
      },
      {
        title: "Bet Escrow",
        subtitle: "The Neutral Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Neutral Vault",
          description:
            "Removes the operator from the payout. Stakes sit in Escrow and Conditional Settlement bound to a committed round, and winnings release only when a verified outcome resolves against the published rules.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function placeBet(uint256 round, uint256 stake) external {\n    require(rounds[round].open, \"Round closed\");\n    escrow[round][msg.sender] += stake;\n    _pull(msg.sender, stake);\n    emit BetLocked(round, msg.sender, stake);\n}",
        simAction: "Simulate Bet Escrow",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving stake from player wallet...", tone: "default" },
          { text: "Binding stake to committed round 88421...", tone: "default" },
          { text: "Confirming seed hash is unchanged...", tone: "default" },
          { text: "Locking funds in neutral escrow...", tone: "default" },
          { text: "[SUCCESS] Bet escrowed against fixed seed.", tone: "success" },
        ],
      },
      {
        title: "Outcome Resolver",
        subtitle: "The Deterministic Engine",
        icon: Cpu,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Deterministic Engine",
          description:
            "Applies the Logic and Actions payout table to the revealed seed. The same seed always yields the same result, so any observer can replay the calculation and reach an identical outcome.",
          platformFunction: "Logic & Actions",
        },
        codeSnippet:
          "function resolveOutcome(uint256 round) external {\n    Round storage r = rounds[round];\n    require(r.open, \"Already resolved\");\n    r.revealed = beacon.reveal(round);\n    require(keccak256(abi.encode(r.revealed)) == r.seedHash, \"Bad reveal\");\n    r.open = false;\n    emit OutcomeResolved(round, r.revealed);\n}",
        simAction: "Simulate Outcome Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Revealing seed for round 88421...", tone: "default" },
          { text: "Verifying reveal matches committed hash...", tone: "default" },
          { text: "Applying published payout logic...", tone: "default" },
          { text: "Releasing escrow to the correct party...", tone: "default" },
          { text: "[SUCCESS] Outcome resolved deterministically.", tone: "success" },
        ],
      },
      {
        title: "Public Verifier",
        subtitle: "The Fairness Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fairness Window",
          description:
            "A read-only gateway that returns a round's committed seed, its reveal, and the payout logic. It lets any player or regulator confirm the seed preceded the bet and reproduce the result without an account.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyRound(uint256 round) external view returns (bytes32, bytes32, uint256) {\n    Round memory r = rounds[round];\n    return (r.seedHash, r.revealed, r.committedAt);\n}",
        simAction: "Simulate Player Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Player requests round 88421 record...", tone: "default" },
          { text: "Returning seed commitment timestamp...", tone: "default" },
          { text: "Confirming commit precedes bet placement...", tone: "default" },
          { text: "Replaying logic against revealed seed...", tone: "default" },
          { text: "[SUCCESS] Fairness independently verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Provable fairness is a horizontal capability. Here is how different gaming actors put committed randomness to work.",
    sectors: [
      { icon: Gamepad, title: "Online Casinos", description: "Publish every table and slot outcome against a pre-committed seed, converting player skepticism into a verifiable trust signal and closing outcome disputes with cryptographic replay instead of support tickets.", assetTypes: ["Table Rounds", "Slot Spins", "Payout Logic"] },
      { icon: Landmark, title: "Gaming Regulators", description: "Query seed commitments and resolved outcomes from a live read-only node, replacing infrequent retrospective RNG audits with continuous, mathematically grounded compliance oversight.", assetTypes: ["Audit Nodes", "Compliance Feeds", "RNG Attestations"] },
      { icon: Users, title: "Players & Watchdogs", description: "Independently resolve any historical round to its committed seed and published rules, letting consumer advocates and individual players confirm fairness without trusting the operator.", assetTypes: ["Round Receipts", "Seed Proofs", "Dispute Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy casino management system or running a native on-chain betting DApp, Cerulea routes both into one verifiable fairness record.",
    tracks: [
      {
        title: "Track A: Licensed Operator Bridging",
        description:
          "For regulated casinos on legacy platforms. Existing bet and outcome events are translated into committed rounds and on-chain resolutions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Casino Management System", sublabel: "Operator Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Seed Commit & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Fairness Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Betting DApp",
        description:
          "For decentralized casino DApps. A player wallet signs each bet directly against a committed round and routes it to the public execution layer with no operator intermediary.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Player Wallet / DApp", sublabel: "Bettor Devices", icon: Fingerprint, accent: false },
          { label: "Randomness Beacon", sublabel: "Committed Seed Consensus", icon: Zap, accent: true },
          { label: "Cerulea Public L1", sublabel: "Outcome Settlement Ledger", icon: Cpu, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a commit-reveal randomness beacon, deterministic payout logic, and a public fairness verifier from scratch requires specialised cryptography engineers and long regulator certification cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Fairness & Payout Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects regulated iGaming engineering benchmarks. Writing a secure commit-reveal beacon, encoding each game's payout logic, and passing a testing-lab RNG certification for an average platform takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your fairness and payout rules into pre-audited WebAssembly binaries and provisions the beacon and public verifier instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "responsible-gambling-self-exclusion-registry-across-operators",
    icon: Shield,
    eyebrow: "Cross-Operator Exclusion Registry",
    headline1: "Exclude once.",
    headline2: "Honored everywhere.",
    heroDescription:
      "A private cross-operator registry blocks a self-excluded player at every licensed operator without any operator seeing another's customer data. Zero-knowledge proofs confirm a wallet is on the exclusion list while the underlying identity stays sealed, so protection is complete and privacy is preserved.",
    heroCta: "Deploy Exclusion Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a set of siloed operator blocklists into one shared, privacy-preserving exclusion check.",
    mechanics: [
      { title: "Shared Exclusion Registry", description: "Replace isolated per-operator blocklists. The KYC and AML Utility Registry holds one consortium exclusion set, so a self-exclusion at any operator propagates to every licensed venue at once." },
      { title: "Zero-Knowledge Verification", description: "Check membership without disclosure. The ZK Proof Verifier confirms that a player is on the exclusion list without revealing who they are, so no operator ever reads a competitor's customer record." },
      { title: "DID-Bound Identity", description: "Anchor each exclusion to a decentralized identifier. The DID and VC Ledger binds the block to a verifiable credential, so the same person is caught even when they use a new account or wallet." },
      { title: "Self-Sovereign Enrollment", description: "Let a player exclude themselves once. A signed enrollment writes the exclusion to the registry, and the player controls the credential rather than trusting a single operator to hold it." },
      { title: "Automatic Enforcement", description: "Block at the point of play. Before a wager or deposit is accepted, the operator queries the registry and is denied automatically if the ZK proof shows an active exclusion." },
      { title: "Regulator Assurance", description: "Give the authority provable coverage. Regulators confirm that every licensed operator queries the shared registry, demonstrating that self-exclusion is enforced across the entire market." },
    ],
    lifecycleTitle: "The Self-Exclusion Lifecycle",
    lifecycleSubtitle:
      "Follow a self-exclusion from a single enrollment through a privacy-preserving check at a different operator.",
    lifecycleSteps: [
      {
        label: "Player Enrollment",
        description:
          "A player self-excludes at one operator. The request is anchored to their decentralized identifier and written to the shared registry as a sealed exclusion credential.",
        icon: Fingerprint,
        logFilename: "cerulea_exclusion.log",
        logLines: [
          { text: "[SYS] Initializing self-exclusion enrollment...", time: "10:02:14", tone: "default" },
          { text: "[CMD] enroll { did: \"did:cer:0x77a1\", period: \"PERMANENT\" }", time: "10:02:14", tone: "primary" },
          { text: "[AUTH] Binding exclusion to verifiable credential...", time: "10:02:15", tone: "secondary" },
          { text: "[OK] Exclusion anchored to shared registry.", time: "10:02:15", tone: "success" },
        ],
      },
      {
        label: "Cross-Operator Check",
        description:
          "The same player tries to deposit at a different operator. That operator submits a zero-knowledge query against the registry before accepting any funds.",
        icon: Search,
        logFilename: "cerulea_exclusion.log",
        logLines: [
          { text: "[SYS] Deposit intent from wallet 0x91f2 at Operator_B...", time: "14:41:08", tone: "default" },
          { text: "[CMD] checkExclusion(commitment: \"0x5c...e2\")", time: "14:41:08", tone: "primary" },
          { text: "[SYS] Evaluating ZK membership proof...", time: "14:41:08", tone: "default" },
          { text: "[OK] Proof valid. Player is excluded.", time: "14:41:09", tone: "success" },
        ],
      },
      {
        label: "Privacy-Preserving Block",
        description:
          "The operator is told only that an active exclusion exists. The deposit is refused with no access to which operator enrolled the player or any personal data.",
        icon: Lock,
        logFilename: "cerulea_exclusion.log",
        logLines: [
          { text: "[SYS] Enforcing exclusion at Operator_B...", time: "14:41:09", tone: "default" },
          { text: "[CMD] denyDeposit(reason: \"ACTIVE_EXCLUSION\")", time: "14:41:09", tone: "primary" },
          { text: "[AUTH] No personal data disclosed to operator.", time: "14:41:09", tone: "secondary" },
          { text: "[OK] Deposit blocked. Privacy preserved.", time: "14:41:10", tone: "success" },
        ],
      },
      {
        label: "Compliance Attestation",
        description:
          "The regulator queries the registry to confirm every operator is enforcing exclusions. Coverage is demonstrated without exposing any individual player's identity.",
        icon: FileCheck,
        logFilename: "cerulea_exclusion.log",
        logLines: [
          { text: "[SYS] Regulator coverage audit initiated...", time: "17:20:33", tone: "default" },
          { text: "[CMD] attestCoverage(market: \"NATIONAL\")", time: "17:20:33", tone: "primary" },
          { text: "[SYS] Verifying all 14 operators query registry...", time: "17:20:33", tone: "default" },
          { text: "[OK] Full market coverage attested on-chain.", time: "17:20:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes cross-operator self-exclusion into modular contracts. Each layer enrolls, seals, verifies, and enforces an exclusion so protection is shared while no operator reads another's customer data.",
    layers: [
      {
        title: "Exclusion Registry",
        subtitle: "The Shared Blocklist",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Blocklist",
          description:
            "The consortium data layer. It stores exclusion commitments contributed by every operator so that a block enrolled at one venue is honored at all of them, without any operator holding the raw identity behind a commitment.",
          platformFunction: "Registry & Membership",
        },
        codeSnippet:
          "contract ExclusionRegistry {\n  mapping(bytes32 => bool) internal excluded;\n\n  function enroll(bytes32 commitment) external onlyOperator {\n    excluded[commitment] = true;\n    emit Excluded(commitment, block.timestamp);\n  }\n\n  function isExcluded(bytes32 commitment) external view returns (bool) {\n    return excluded[commitment];\n  }\n}",
        simAction: "Simulate Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Deriving exclusion commitment from DID...", tone: "default" },
          { text: "Writing commitment to shared registry...", tone: "default" },
          { text: "Suppressing all personal identifiers...", tone: "default" },
          { text: "Propagating block to consortium operators...", tone: "default" },
          { text: "[SUCCESS] Exclusion shared across the market.", tone: "success" },
        ],
      },
      {
        title: "ZK Proof Verifier",
        subtitle: "The Blind Check",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Blind Check",
          description:
            "Confirms membership without disclosure. An operator submits a zero-knowledge proof that a wallet corresponds to an excluded commitment, and the contract returns only a yes or no, never the underlying identity.",
          platformFunction: "Zero-Knowledge Verification",
        },
        codeSnippet:
          "function verifyExclusion(bytes calldata proof, bytes32 commitment) external view returns (bool) {\n    require(zk.verify(proof, commitment), \"Invalid proof\");\n    return excluded[commitment];\n}",
        simAction: "Simulate ZK Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Operator_B submitting membership proof...", tone: "default" },
          { text: "Verifying zero-knowledge proof validity...", tone: "default" },
          { text: "Matching commitment without decryption...", tone: "default" },
          { text: "Returning boolean result only...", tone: "default" },
          { text: "[SUCCESS] Membership confirmed, identity sealed.", tone: "success" },
        ],
      },
      {
        title: "DID and VC Ledger",
        subtitle: "The Identity Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Anchor",
          description:
            "Binds each exclusion to a decentralized identifier and verifiable credential. Because the block follows the person's DID rather than a single account, a new wallet or operator login cannot bypass the exclusion.",
          platformFunction: "Identity & Credentials",
        },
        codeSnippet:
          "function bindCredential(bytes32 did, bytes32 commitment) external onlyIssuer {\n    require(credentials[did] == 0x0, \"Already bound\");\n    credentials[did] = commitment;\n    emit CredentialBound(did, commitment);\n}",
        simAction: "Simulate Credential Bind",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resolving player decentralized identifier...", tone: "default" },
          { text: "Issuing exclusion verifiable credential...", tone: "default" },
          { text: "Binding credential to registry commitment...", tone: "default" },
          { text: "Linking future wallets to same identity...", tone: "default" },
          { text: "[SUCCESS] Exclusion follows the person, not the account.", tone: "success" },
        ],
      },
      {
        title: "Enforcement Gate",
        subtitle: "The Point-of-Play Guard",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Point-of-Play Guard",
          description:
            "The runtime enforcer. Before a deposit or wager clears, the gate consults the verifier and refuses the action when an active exclusion is present, so protection is applied at the moment of play rather than after the fact.",
          platformFunction: "Enforcement & Compliance",
        },
        codeSnippet:
          "function guardDeposit(bytes calldata proof, bytes32 commitment, uint256 amount) external {\n    require(!this.verifyExclusion(proof, commitment), \"Player excluded\");\n    _accept(msg.sender, amount);\n    emit DepositAccepted(msg.sender, amount);\n}",
        simAction: "Simulate Enforcement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Deposit request reaching enforcement gate...", tone: "default" },
          { text: "Consulting ZK verifier for exclusion status...", tone: "default" },
          { text: "Active exclusion detected for commitment...", tone: "default" },
          { text: "Refusing deposit at point of play...", tone: "default" },
          { text: "[SUCCESS] Excluded player blocked automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Privacy-preserving exclusion is a horizontal capability. Here is how different actors put the shared registry to work.",
    sectors: [
      { icon: Gamepad, title: "Licensed Operators", description: "Query one shared registry before every deposit, honoring self-exclusions enrolled anywhere in the market while never exposing or ingesting a competitor's customer data.", assetTypes: ["Exclusion Checks", "Deposit Gates", "Consortium Nodes"] },
      { icon: Landmark, title: "Gambling Regulators", description: "Demonstrate market-wide harm reduction by attesting that every licensee enforces the registry, replacing self-reported compliance with verifiable cross-operator coverage.", assetTypes: ["Coverage Attestations", "Audit Trails", "Licence Conditions"] },
      { icon: HeartPulse, title: "Harm-Reduction Bodies", description: "Offer players a single self-exclusion that follows their identity across every venue, giving support charities a durable protection mechanism that operators cannot quietly ignore.", assetTypes: ["Enrollment Records", "Support Referrals", "Protection Credentials"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy operator KYC platform or enrolling players directly from a self-sovereign wallet, Cerulea routes both into one privacy-preserving registry.",
    tracks: [
      {
        title: "Track A: Operator KYC Bridging",
        description:
          "For licensed operators on legacy KYC systems. Existing verified identities are converted into sealed exclusion commitments and registry queries through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Operator KYC Platform", sublabel: "Legacy Identity Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Commitment & ZK Proving", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Exclusion Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Self-Sovereign Enrollment",
        description:
          "For players enrolling directly. A wallet holding a verifiable credential signs the self-exclusion and routes it to the registry without an operator acting as custodian.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Player Wallet / VC", sublabel: "Self-Sovereign Identity", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Exclusion Consensus", icon: Network, accent: true },
          { label: "Cerulea Registry", sublabel: "Shared Exclusion Ledger", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-operator registry with zero-knowledge membership proofs, DID-bound credentials, and point-of-play enforcement from scratch requires specialised cryptography engineers and long consortium negotiations. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Exclusion & Privacy Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects multi-operator compliance integration benchmarks. Agreeing a data-sharing standard between competitors, building zero-knowledge membership proofs, and wiring enforcement into each operator's deposit flow takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your exclusion and privacy rules into pre-audited WebAssembly binaries and provisions the shared registry and ZK verifier instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "casino-loyalty-program-points-across-multi-property-operators",
    icon: Coins,
    eyebrow: "Multi-Property Loyalty Ledger",
    headline1: "Earn at one property.",
    headline2: "Redeem at any.",
    heroDescription:
      "One verified points balance follows each player across every property in the operator's network, so points earned at one casino spend at another. An ERC-20 loyalty token plus wallet and identity verification keep a single accurate balance per player at every location.",
    heroCta: "Deploy Loyalty Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace disconnected per-property point systems with one shared, tokenized balance.",
    mechanics: [
      { title: "Unified Points Token", description: "Replace siloed property programs. Points are issued as an ERC-20 loyalty token on the operator's network, so one balance is earned and spent identically at every property." },
      { title: "Wallet Authentication", description: "Bind the balance to the player's wallet. Wallet Authentication ties each accrual and redemption to a signed session, so the balance moves with the player rather than the property." },
      { title: "Verified Player Identity", description: "Keep points tied to the right person. KYC and Identity Verification confirms the player behind a wallet, preventing points from being merged, split, or claimed by the wrong account." },
      { title: "Cross-Property Accrual", description: "Credit play anywhere. When a player earns at one casino, the token contract mints to their wallet instantly, and the same balance is visible the moment they walk into a sister property." },
      { title: "Instant Redemption", description: "Spend without reconciliation. A redemption burns tokens against a reward at the point of sale, settling between properties automatically instead of a nightly inter-property clearing batch." },
      { title: "Fraud-Resistant Balance", description: "Guarantee one true balance. Because every accrual and redemption is on-chain, a player cannot double-spend the same points at two properties in the same network." },
    ],
    lifecycleTitle: "The Loyalty Points Lifecycle",
    lifecycleSubtitle:
      "Follow a single points balance as it is earned at one property and redeemed at another across the operator's network.",
    lifecycleSteps: [
      {
        label: "Player Onboarding",
        description:
          "A player links a wallet and completes identity verification once. The contract binds their verified identity to the wallet that will hold points across every property.",
        icon: IdCard,
        logFilename: "cerulea_loyalty.log",
        logLines: [
          { text: "[SYS] Onboarding player to loyalty network...", time: "11:15:03", tone: "default" },
          { text: "[CMD] linkWallet { player: \"P_2201\", wallet: \"0x6d1a\" }", time: "11:15:03", tone: "primary" },
          { text: "[AUTH] Verifying identity documents and wallet signature...", time: "11:15:04", tone: "secondary" },
          { text: "[OK] Verified identity bound to wallet.", time: "11:15:04", tone: "success" },
        ],
      },
      {
        label: "Points Accrual",
        description:
          "The player earns points at Property A. The loyalty token contract mints the accrued balance directly to their wallet based on the property's earning rules.",
        icon: Coins,
        logFilename: "cerulea_loyalty.log",
        logLines: [
          { text: "[SYS] Play activity reported from Property_A...", time: "19:40:22", tone: "default" },
          { text: "[CMD] accruePoints(wallet: \"0x6d1a\", amount: 1200)", time: "19:40:22", tone: "primary" },
          { text: "[SYS] Minting loyalty tokens to player wallet...", time: "19:40:22", tone: "default" },
          { text: "[OK] Balance now 1200 points. Visible network-wide.", time: "19:40:23", tone: "success" },
        ],
      },
      {
        label: "Cross-Property Redemption",
        description:
          "Days later the player redeems at Property B. The contract confirms the balance and burns tokens against the reward, with no inter-property reconciliation required.",
        icon: Gift,
        logFilename: "cerulea_loyalty.log",
        logLines: [
          { text: "[SYS] Redemption request at Property_B...", time: "22:05:47", tone: "default" },
          { text: "[CMD] redeem(wallet: \"0x6d1a\", reward: \"SUITE_NIGHT\", cost: 900)", time: "22:05:47", tone: "primary" },
          { text: "[AUTH] Confirming balance and burning 900 tokens...", time: "22:05:47", tone: "secondary" },
          { text: "[OK] Reward granted. Balance now 300 points.", time: "22:05:48", tone: "success" },
        ],
      },
      {
        label: "Balance Verification",
        description:
          "The player checks their balance from any property or the app. The contract returns one authoritative figure, identical everywhere, with a full accrual and redemption history.",
        icon: Search,
        logFilename: "cerulea_loyalty.log",
        logLines: [
          { text: "[SYS] Balance query for wallet 0x6d1a...", time: "22:06:10", tone: "default" },
          { text: "[CMD] balanceOf(\"0x6d1a\")", time: "22:06:10", tone: "primary" },
          { text: "[SYS] Aggregating on-chain accruals and burns...", time: "22:06:10", tone: "default" },
          { text: "[OK] Single balance 300 returned network-wide.", time: "22:06:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes multi-property loyalty into modular contracts. Each layer verifies, tokenizes, redeems, and reports a balance so one figure follows the player across every location.",
    layers: [
      {
        title: "Identity Verification",
        subtitle: "The Player Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Player Anchor",
          description:
            "The onboarding layer. It ties a verified player identity to the wallet that carries their points, so accruals and redemptions are always attributed to the correct person at every property in the network.",
          platformFunction: "Identity & Verification",
        },
        codeSnippet:
          "contract PlayerRegistry {\n  mapping(address => bytes32) public verifiedId;\n\n  function link(address wallet, bytes32 kycRef) external onlyKycProvider {\n    require(verifiedId[wallet] == 0x0, \"Already linked\");\n    verifiedId[wallet] = kycRef;\n    emit PlayerLinked(wallet, kycRef);\n  }\n}",
        simAction: "Simulate Player Link",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading KYC reference for player P_2201...", tone: "default" },
          { text: "Validating wallet signature 0x6d1a...", tone: "default" },
          { text: "Binding verified identity to wallet...", tone: "default" },
          { text: "Registering player across the network...", tone: "default" },
          { text: "[SUCCESS] Player anchored to a single balance.", tone: "success" },
        ],
      },
      {
        title: "Loyalty Token",
        subtitle: "The Shared Balance",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Balance",
          description:
            "The ERC-20 points contract. Minting on accrual and burning on redemption, it holds one balance per wallet that every property reads and writes, replacing separate per-location point pools.",
          platformFunction: "Tokenized Points",
        },
        codeSnippet:
          "contract LoyaltyToken {\n  mapping(address => uint256) public balanceOf;\n\n  function accrue(address to, uint256 amount) external onlyProperty {\n    balanceOf[to] += amount;\n    emit Accrued(to, amount, msg.sender);\n  }\n\n  function redeem(address from, uint256 amount) external onlyProperty {\n    require(balanceOf[from] >= amount, \"Insufficient points\");\n    balanceOf[from] -= amount;\n    emit Redeemed(from, amount, msg.sender);\n  }\n}",
        simAction: "Simulate Points Accrual",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Property_A reporting 1200 points earned...", tone: "default" },
          { text: "Minting loyalty tokens to wallet 0x6d1a...", tone: "default" },
          { text: "Updating single network-wide balance...", tone: "default" },
          { text: "Emitting accrual event for audit...", tone: "default" },
          { text: "[SUCCESS] Points earned and visible everywhere.", tone: "success" },
        ],
      },
      {
        title: "Redemption Engine",
        subtitle: "The Instant Settler",
        icon: Gift,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Settler",
          description:
            "Handles spend at any property. It burns tokens against a reward and records which property honored it, so cross-property redemptions settle in the same transaction with no nightly clearing batch.",
          platformFunction: "Redemption & Settlement",
        },
        codeSnippet:
          "function redeemReward(address player, bytes32 reward, uint256 cost) external onlyProperty {\n    token.redeem(player, cost);\n    fulfilled[player].push(Reward(reward, msg.sender, block.timestamp));\n    emit RewardFulfilled(player, reward, msg.sender);\n}",
        simAction: "Simulate Redemption",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Property_B requesting suite-night reward...", tone: "default" },
          { text: "Confirming wallet balance covers 900 points...", tone: "default" },
          { text: "Burning tokens and granting reward...", tone: "default" },
          { text: "Recording redeeming property on-chain...", tone: "default" },
          { text: "[SUCCESS] Reward settled with no reconciliation.", tone: "success" },
        ],
      },
      {
        title: "Balance Reporter",
        subtitle: "The Single Source",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single Source",
          description:
            "A read-only view that returns one authoritative balance and history for a player. Every property, kiosk, and app reads the same figure, so a player never sees conflicting totals across locations.",
          platformFunction: "Reporting & Transparency",
        },
        codeSnippet:
          "function statement(address player) external view returns (uint256 balance, Reward[] memory history) {\n    return (token.balanceOf(player), fulfilled[player]);\n}",
        simAction: "Simulate Balance Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Player opens balance in the network app...", tone: "default" },
          { text: "Reading on-chain token balance...", tone: "default" },
          { text: "Compiling accrual and redemption history...", tone: "default" },
          { text: "Returning one figure for all properties...", tone: "default" },
          { text: "[SUCCESS] Single verified balance displayed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A tokenized loyalty balance is a horizontal capability. Here is how different hospitality operators put it to work.",
    sectors: [
      { icon: Coins, title: "Multi-Property Casinos", description: "Give players one balance that earns and redeems across every property in the group, raising perceived program value and removing the nightly inter-property points reconciliation.", assetTypes: ["Loyalty Tokens", "Reward Catalogs", "Property Nodes"] },
      { icon: Building2, title: "Hotel & Resort Chains", description: "Extend a single points balance across hotels, spas, and dining outlets in the brand, letting guests spend earned value anywhere without a location-specific card or account.", assetTypes: ["Guest Balances", "Outlet Redemptions", "Tier Credits"] },
      { icon: Handshake, title: "Partner Reward Alliances", description: "Let approved partners accept and issue the same token under shared rules, turning a closed program into an interoperable alliance with automated cross-partner settlement.", assetTypes: ["Partner Accruals", "Alliance Settlements", "Shared Catalogs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy property management systems or serving players through a branded mobile wallet, Cerulea routes both into one shared points balance.",
    tracks: [
      {
        title: "Track A: Property System Bridging",
        description:
          "For operators on legacy casino and property management systems. Existing play and reward events are translated into token accruals and burns through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Property Management System", sublabel: "Per-Casino Platforms", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Accrual & Redemption Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Loyalty Token Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Player Mobile Wallet",
        description:
          "For players on the operator's app. A wallet signs redemptions and reads the balance directly from the token contract on the execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Player App / Wallet", sublabel: "Guest Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Balance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Points Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a tokenized loyalty balance with cross-property accrual, instant redemption settlement, and verified player identity from scratch requires specialised engineers and long property integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Accrual & Redemption Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects multi-property loyalty integration benchmarks. Unifying separate point systems, building cross-property redemption settlement, and binding balances to verified identities for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your accrual and redemption rules into pre-audited WebAssembly binaries and provisions the loyalty token ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "hotel-booking-and-deposit-management-via-smart-contracts",
    icon: Building2,
    eyebrow: "Booking Settlement Layer",
    headline1: "Escrow every deposit.",
    headline2: "Enforce the policy.",
    heroDescription:
      "A private booking chain holds each deposit in policy-governed escrow and enforces cancellation rules automatically, so guests and hotels read the same terms and refunds process without manual handling. Deposit disputes fall to zero because the cancellation policy and the escrowed funds live in the same contract.",
    heroCta: "Deploy Booking Escrow",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn contested deposits and slow manual refunds into a single deterministic settlement.",
    mechanics: [
      { title: "Policy-Governed Escrow", description: "Hold deposits neutrally. Escrow and Conditional Settlement locks each guest deposit against the booking, releasing to the hotel or back to the guest only as the encoded policy dictates." },
      { title: "Encoded Cancellation Policy", description: "Publish the rules once. The cancellation and refund schedule is written into the contract, so both parties see identical terms with no room for after-the-fact reinterpretation." },
      { title: "Automated Refunds", description: "Remove manual processing. When a guest cancels within a covered window, the contract computes the refund and returns funds within hours instead of a multi-day finance queue." },
      { title: "Booking Documents", description: "Anchor the paperwork. Trade Finance Documents binds the confirmation, folio, and cancellation terms to the booking by digest, so the agreement itself is tamper-evident." },
      { title: "Automated Invoicing", description: "Settle the balance cleanly. Invoices and Billing issues the final folio against the escrow outcome, reconciling deposit, refund, and charges in one record." },
      { title: "Shared Dispute Record", description: "End deposit arguments. Because guest and hotel co-reference the same escrow and policy, a contested cancellation is resolved against on-chain state rather than conflicting emails." },
    ],
    lifecycleTitle: "The Booking Lifecycle",
    lifecycleSubtitle:
      "Follow a single reservation from deposit escrow through a policy-governed cancellation and automatic refund.",
    lifecycleSteps: [
      {
        label: "Reservation & Deposit",
        description:
          "A guest books and pays a deposit. The contract escrows the funds against the reservation and attaches the hotel's published cancellation policy.",
        icon: Building2,
        logFilename: "cerulea_booking.log",
        logLines: [
          { text: "[SYS] Creating reservation escrow...", time: "09:12:40", tone: "default" },
          { text: "[CMD] book { hotel: \"HTL_204\", nights: 3, deposit: 240 }", time: "09:12:40", tone: "primary" },
          { text: "[AUTH] Attaching cancellation policy CP_FLEX_48...", time: "09:12:41", tone: "secondary" },
          { text: "[OK] Deposit escrowed for booking BKG_5561.", time: "09:12:41", tone: "success" },
        ],
      },
      {
        label: "Policy Anchoring",
        description:
          "The confirmation and cancellation terms are anchored to the booking. Both guest and hotel now reference one immutable version of the agreement.",
        icon: ScrollText,
        logFilename: "cerulea_booking.log",
        logLines: [
          { text: "[SYS] Anchoring booking documents...", time: "09:12:42", tone: "default" },
          { text: "[CMD] anchorDocs([\"CONFIRMATION\", \"POLICY_CP_FLEX_48\"])", time: "09:12:42", tone: "primary" },
          { text: "[AUTH] Hashing terms and sealing to booking...", time: "09:12:42", tone: "secondary" },
          { text: "[OK] Agreement tamper-evident for both parties.", time: "09:12:43", tone: "success" },
        ],
      },
      {
        label: "Cancellation",
        description:
          "The guest cancels inside the covered window. The contract evaluates the encoded policy and computes the exact refund owed without a human reviewer.",
        icon: Gavel,
        logFilename: "cerulea_booking.log",
        logLines: [
          { text: "[SYS] Cancellation received for BKG_5561...", time: "16:30:18", tone: "default" },
          { text: "[CMD] cancel(booking: \"BKG_5561\", at: \"T-52h\")", time: "16:30:18", tone: "primary" },
          { text: "[SYS] Evaluating CP_FLEX_48: full refund before T-48h.", time: "16:30:18", tone: "default" },
          { text: "[OK] Refund of 240 authorized from escrow.", time: "16:30:19", tone: "success" },
        ],
      },
      {
        label: "Automatic Settlement",
        description:
          "The escrow releases the computed refund to the guest and issues the closing invoice. The booking settles with no dispute and no manual finance step.",
        icon: Wallet,
        logFilename: "cerulea_booking.log",
        logLines: [
          { text: "[SYS] Releasing escrow per policy outcome...", time: "16:30:20", tone: "default" },
          { text: "[CMD] settle(booking: \"BKG_5561\")", time: "16:30:20", tone: "primary" },
          { text: "[AUTH] Issuing final invoice and refund receipt...", time: "16:30:20", tone: "secondary" },
          { text: "[OK] Refund paid in hours. Dispute-free.", time: "16:30:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes booking and deposit management into modular contracts. Each layer escrows, publishes policy, settles, and invoices a reservation so refunds are deterministic and disputes disappear.",
    layers: [
      {
        title: "Deposit Escrow",
        subtitle: "The Neutral Holder",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Neutral Holder",
          description:
            "The custody layer. It holds the guest deposit against the reservation and releases funds only as the encoded policy resolves, so neither the guest nor the hotel can unilaterally seize the money.",
          platformFunction: "Escrow & Custody",
        },
        codeSnippet:
          "contract BookingEscrow {\n  struct Booking {\n    address guest;\n    uint256 deposit;\n    bytes32 policy;\n    bool settled;\n  }\n\n  mapping(bytes32 => Booking) public bookings;\n\n  function book(bytes32 id, bytes32 policy) external payable {\n    bookings[id] = Booking(msg.sender, msg.value, policy, false);\n    emit Booked(id, msg.sender, msg.value);\n  }\n}",
        simAction: "Simulate Deposit Escrow",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving guest deposit of 240...", tone: "default" },
          { text: "Binding deposit to booking BKG_5561...", tone: "default" },
          { text: "Attaching policy reference CP_FLEX_48...", tone: "default" },
          { text: "Locking funds in neutral escrow...", tone: "default" },
          { text: "[SUCCESS] Deposit held pending policy outcome.", tone: "success" },
        ],
      },
      {
        title: "Policy Engine",
        subtitle: "The Shared Rulebook",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Rulebook",
          description:
            "Encodes the cancellation schedule. Given a cancellation time, it returns the exact refund the guest is owed, so both parties compute an identical result from one published set of rules.",
          platformFunction: "Policy & Rules",
        },
        codeSnippet:
          "function refundDue(bytes32 policy, uint256 hoursBefore, uint256 deposit) public pure returns (uint256) {\n    if (hoursBefore >= 48) return deposit;\n    if (hoursBefore >= 24) return deposit / 2;\n    return 0;\n}",
        simAction: "Simulate Policy Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading cancellation at T-52h...", tone: "default" },
          { text: "Loading policy CP_FLEX_48 thresholds...", tone: "default" },
          { text: "Matching window: full refund before T-48h...", tone: "default" },
          { text: "Computing refund amount 240...", tone: "default" },
          { text: "[SUCCESS] Refund determined by shared rule.", tone: "success" },
        ],
      },
      {
        title: "Document Notary",
        subtitle: "The Sealed Agreement",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Agreement",
          description:
            "Anchors the confirmation and cancellation terms by digest through Trade Finance Documents. The papers stay off-chain, but any edit to the agreed terms breaks the hash and is immediately detectable.",
          platformFunction: "Provenance & Documents",
        },
        codeSnippet:
          "function anchorDoc(bytes32 bookingId, bytes32 docHash, string calldata kind) external {\n    documents[bookingId].push(Doc(docHash, kind, block.timestamp));\n    emit DocAnchored(bookingId, docHash, kind);\n}",
        simAction: "Simulate Document Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting booking confirmation PDF...", tone: "default" },
          { text: "Computing digest of cancellation terms...", tone: "default" },
          { text: "Binding hashes to booking BKG_5561...", tone: "default" },
          { text: "Sealing agreement for both parties...", tone: "default" },
          { text: "[SUCCESS] Agreement anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Settlement & Billing",
        subtitle: "The Closing Ledger",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Closing Ledger",
          description:
            "Executes the escrow outcome and issues the final folio through Invoices and Billing. It reconciles deposit, refund, and charges in one record so the booking closes cleanly for both sides.",
          platformFunction: "Settlement & Billing",
        },
        codeSnippet:
          "function settle(bytes32 id, uint256 refund) external {\n    Booking storage b = bookings[id];\n    require(!b.settled, \"Settled\");\n    b.settled = true;\n    payable(b.guest).transfer(refund);\n    emit Settled(id, refund, b.deposit - refund);\n}",
        simAction: "Simulate Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Applying policy outcome to escrow...", tone: "default" },
          { text: "Transferring 240 refund to guest...", tone: "default" },
          { text: "Issuing final folio invoice...", tone: "default" },
          { text: "Recording closed booking state...", tone: "default" },
          { text: "[SUCCESS] Booking settled dispute-free.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Policy-governed deposit escrow is a horizontal capability. Here is how different hospitality actors put it to work.",
    sectors: [
      { icon: Building2, title: "Hotels & Resorts", description: "Escrow every reservation deposit against a published cancellation policy, cutting deposit disputes to zero and refunding guests automatically within hours of a covered cancellation.", assetTypes: ["Reservation Deposits", "Cancellation Policies", "Guest Folios"] },
      { icon: Globe, title: "Online Travel Agencies", description: "Give travelers and suppliers one shared escrow and policy per booking, removing the finger-pointing over who owes a refund and settling both sides from the same contract.", assetTypes: ["Deposit Escrows", "Refund Receipts", "Supplier Settlements"] },
      { icon: HeartPulse, title: "Serviced Apartments", description: "Hold longer-stay deposits and damage bonds in transparent escrow, releasing funds on encoded checkout conditions instead of contested manual inspections.", assetTypes: ["Damage Bonds", "Stay Deposits", "Checkout Conditions"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy property management system or taking direct bookings from a guest wallet, Cerulea routes both into one escrow and policy record.",
    tracks: [
      {
        title: "Track A: Property System Bridging",
        description:
          "For hotels on legacy booking and PMS platforms. Existing reservations and cancellations are translated into escrow deposits and policy settlements through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Property Management System", sublabel: "Hotel Booking Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Escrow & Policy Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Booking Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Direct Guest Booking",
        description:
          "For guests booking direct from a wallet. A signed reservation deposits into escrow and reads the cancellation policy directly from the execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Guest App / Wallet", sublabel: "Traveler Devices", icon: Fingerprint, accent: false },
          { label: "Booking Validators", sublabel: "Escrow Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Deposit & Policy Record", icon: Building2, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a booking chain with policy-governed escrow, automated cancellation refunds, and anchored agreements from scratch requires specialised engineers and long PMS integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Deposit & Cancellation Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects hospitality payments integration benchmarks. Building escrow custody, encoding cancellation policies, and wiring automated refunds into a property management system takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your deposit and cancellation rules into pre-audited WebAssembly binaries and provisions the booking escrow ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "vacation-rental-host-verification-and-guest-review-integrity",
    icon: Home,
    eyebrow: "Verified Stay Trust Layer",
    headline1: "Verify the host.",
    headline2: "Anchor the review.",
    heroDescription:
      "Hosts are identity-verified before a listing goes live and every guest review is anchored to a confirmed booking and completed stay, so fake listings and fake reviews cannot enter the platform. Guests trust that a review reflects a real experience from a real guest at a real property.",
    heroCta: "Deploy Trust Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Bind identity to listings and stays to reviews so trust rests on evidence, not moderation.",
    mechanics: [
      { title: "Host Identity Gate", description: "Verify before listing. KYC and Identity Verification confirms a host's identity and the DID and VC Ledger issues a credential, so an unverified party cannot publish a listing at all." },
      { title: "Stay-Bound Reviews", description: "Anchor reviews to reality. The Provenance Notary ties each review to a confirmed booking and a completed stay, so a review with no matching stay simply cannot be written." },
      { title: "Credentialed Listings", description: "Prove the host owns the claim. A listing carries the host's verifiable credential, letting a guest confirm they are booking from an identity-checked operator, not a cloned profile." },
      { title: "One-Stay-One-Review", description: "Stop review farming. Each completed stay mints a single review right, so the same booking cannot be used to post multiple reviews or inflate a rating." },
      { title: "Tamper-Evident History", description: "Preserve the record. Once anchored, a review and its stay linkage are immutable, so neither host nor platform can quietly edit or delete inconvenient feedback." },
      { title: "Portable Reputation", description: "Let trust travel. Because reputation is anchored to the host's DID, a verified track record can follow the host rather than being locked inside one platform." },
    ],
    lifecycleTitle: "The Trust Lifecycle",
    lifecycleSubtitle:
      "Follow a host from identity verification through a completed stay to a review that is provably tied to it.",
    lifecycleSteps: [
      {
        label: "Host Verification",
        description:
          "A prospective host completes identity verification. The contract issues a verifiable credential bound to their decentralized identifier before any listing can be published.",
        icon: Fingerprint,
        logFilename: "cerulea_rental.log",
        logLines: [
          { text: "[SYS] Initializing host verification...", time: "08:41:05", tone: "default" },
          { text: "[CMD] verifyHost { did: \"did:cer:0x2f9\", docs: \"ID+DEED\" }", time: "08:41:05", tone: "primary" },
          { text: "[AUTH] Issuing host credential to DID ledger...", time: "08:41:06", tone: "secondary" },
          { text: "[OK] Host verified. Listing rights granted.", time: "08:41:06", tone: "success" },
        ],
      },
      {
        label: "Listing Publication",
        description:
          "The verified host publishes a property. The listing references the host credential, so guests browsing it can confirm the operator was identity-checked.",
        icon: Home,
        logFilename: "cerulea_rental.log",
        logLines: [
          { text: "[SYS] Publishing listing for verified host...", time: "10:15:33", tone: "default" },
          { text: "[CMD] publishListing(prop: \"APT_712\", credential: \"VC_HOST_2f9\")", time: "10:15:33", tone: "primary" },
          { text: "[SYS] Binding credential to listing record...", time: "10:15:33", tone: "default" },
          { text: "[OK] Listing live with verified-host badge.", time: "10:15:34", tone: "success" },
        ],
      },
      {
        label: "Stay Completion",
        description:
          "A guest books and completes the stay. The Provenance Notary anchors the confirmed booking and checkout, minting a single review right to that guest.",
        icon: FileCheck,
        logFilename: "cerulea_rental.log",
        logLines: [
          { text: "[SYS] Recording completed stay for APT_712...", time: "11:02:20", tone: "default" },
          { text: "[CMD] confirmStay(booking: \"BKG_9004\", guest: \"0x88a1\")", time: "11:02:20", tone: "primary" },
          { text: "[AUTH] Minting one review right to guest...", time: "11:02:20", tone: "secondary" },
          { text: "[OK] Stay anchored. Review right issued.", time: "11:02:21", tone: "success" },
        ],
      },
      {
        label: "Anchored Review",
        description:
          "The guest submits a review. The contract consumes the review right and binds the review to the specific stay, so it cannot be faked, duplicated, or later altered.",
        icon: ScrollText,
        logFilename: "cerulea_rental.log",
        logLines: [
          { text: "[SYS] Review submission from guest 0x88a1...", time: "20:33:47", tone: "default" },
          { text: "[CMD] postReview(booking: \"BKG_9004\", rating: 5)", time: "20:33:47", tone: "primary" },
          { text: "[SYS] Consuming review right and anchoring text...", time: "20:33:47", tone: "default" },
          { text: "[OK] Review tied to real stay. Immutable.", time: "20:33:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes rental trust into modular contracts. Each layer verifies hosts, publishes credentialed listings, records stays, and anchors reviews so trust rests on evidence rather than moderation.",
    layers: [
      {
        title: "Host Credential",
        subtitle: "The Identity Gate",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Gate",
          description:
            "The verification layer. It issues a verifiable credential to a host's DID after identity checks, so only identity-verified operators can list, closing the door on fake and cloned profiles.",
          platformFunction: "Identity & Credentials",
        },
        codeSnippet:
          "contract HostRegistry {\n  mapping(bytes32 => bool) public verified;\n\n  function verifyHost(bytes32 did, bytes32 kycRef) external onlyVerifier {\n    verified[did] = true;\n    emit HostVerified(did, kycRef, block.timestamp);\n  }\n\n  function canList(bytes32 did) external view returns (bool) {\n    return verified[did];\n  }\n}",
        simAction: "Simulate Host Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading host documents for DID 0x2f9...", tone: "default" },
          { text: "Running identity verification checks...", tone: "default" },
          { text: "Issuing verifiable host credential...", tone: "default" },
          { text: "Granting listing rights to host...", tone: "default" },
          { text: "[SUCCESS] Only verified hosts can list.", tone: "success" },
        ],
      },
      {
        title: "Listing Binder",
        subtitle: "The Credentialed Listing",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Credentialed Listing",
          description:
            "Ties every listing to its host credential. A guest can resolve a listing to the verified identity behind it, so a property cannot be advertised by an unverified or impersonating party.",
          platformFunction: "Listing & Verification",
        },
        codeSnippet:
          "function publishListing(bytes32 propId, bytes32 hostDid) external {\n    require(registry.canList(hostDid), \"Host not verified\");\n    listings[propId] = Listing(hostDid, block.timestamp, true);\n    emit ListingPublished(propId, hostDid);\n}",
        simAction: "Simulate Listing Publish",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking host credential before publish...", tone: "default" },
          { text: "Binding listing APT_712 to host DID...", tone: "default" },
          { text: "Attaching verified-host badge...", tone: "default" },
          { text: "Making listing publicly resolvable...", tone: "default" },
          { text: "[SUCCESS] Listing carries verified identity.", tone: "success" },
        ],
      },
      {
        title: "Stay Notary",
        subtitle: "The Proof of Stay",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proof of Stay",
          description:
            "Records confirmed bookings and checkouts through the Provenance Notary and mints one review right per completed stay, so a review can exist only where a real stay actually happened.",
          platformFunction: "Provenance & Stays",
        },
        codeSnippet:
          "function confirmStay(bytes32 booking, address guest) external onlyPlatform {\n    require(!stayDone[booking], \"Already recorded\");\n    stayDone[booking] = true;\n    reviewRight[guest][booking] = true;\n    emit StayConfirmed(booking, guest);\n}",
        simAction: "Simulate Stay Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying booking BKG_9004 completed...", tone: "default" },
          { text: "Anchoring checkout event on-chain...", tone: "default" },
          { text: "Minting single review right to guest...", tone: "default" },
          { text: "Preventing duplicate stay records...", tone: "default" },
          { text: "[SUCCESS] Stay proven, one review authorized.", tone: "success" },
        ],
      },
      {
        title: "Review Anchor",
        subtitle: "The Honest Record",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Honest Record",
          description:
            "Consumes a review right and anchors the review to its stay. Once written, the review and its linkage are immutable, so neither host nor platform can fabricate, duplicate, or silently remove feedback.",
          platformFunction: "Reviews & Integrity",
        },
        codeSnippet:
          "function postReview(bytes32 booking, uint8 rating, bytes32 textHash) external {\n    require(reviewRight[msg.sender][booking], \"No stay\");\n    reviewRight[msg.sender][booking] = false;\n    reviews[booking] = Review(msg.sender, rating, textHash);\n    emit ReviewPosted(booking, msg.sender, rating);\n}",
        simAction: "Simulate Review Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking guest holds a review right...", tone: "default" },
          { text: "Consuming right to prevent duplicates...", tone: "default" },
          { text: "Anchoring review to stay BKG_9004...", tone: "default" },
          { text: "Sealing rating and text digest...", tone: "default" },
          { text: "[SUCCESS] Review provably tied to a real stay.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified identity and stay-bound reviews are a horizontal capability. Here is how different actors put them to work.",
    sectors: [
      { icon: Home, title: "Vacation Rental Platforms", description: "Gate listings behind host verification and bind every review to a completed stay, eliminating fake listings and review farming without relying on reactive manual moderation.", assetTypes: ["Host Credentials", "Verified Listings", "Stay-Bound Reviews"] },
      { icon: Building2, title: "Boutique Hotel Marketplaces", description: "Give independent properties a portable verified reputation that travels with their identity, so genuine track records are not trapped inside a single booking site.", assetTypes: ["Property Credentials", "Reputation Records", "Guest Feedback"] },
      { icon: Handshake, title: "Experience & Tour Operators", description: "Verify operators and tie participant reviews to booked, attended experiences, protecting travelers from fabricated ratings on activities and excursions.", assetTypes: ["Operator Credentials", "Attendance Proofs", "Experience Reviews"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy marketplace backend or onboarding hosts directly through a self-sovereign wallet, Cerulea routes both into one verified trust record.",
    tracks: [
      {
        title: "Track A: Marketplace Backend Bridging",
        description:
          "For rental platforms on legacy backends. Existing host onboarding and booking events are translated into credentials and anchored stays through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Marketplace Backend", sublabel: "Platform Booking Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential & Stay Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Trust & Review Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Self-Sovereign Host Onboarding",
        description:
          "For hosts onboarding directly. A wallet holding a verifiable credential signs listings and reviews are posted against on-chain stays with no platform intermediary.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Host Wallet / VC", sublabel: "Self-Sovereign Identity", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Stay & Review Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Reputation Record", icon: Home, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building host verification, credentialed listings, stay-bound review minting, and immutable review anchoring from scratch requires specialised identity engineers and long trust-and-safety cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Verification & Review Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects marketplace trust-and-safety engineering benchmarks. Building host identity verification, binding reviews to confirmed stays, and hardening the flow against fake accounts takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your verification and review rules into pre-audited WebAssembly binaries and provisions the trust ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "hotel-staff-tip-pooling-and-distribution-transparency",
    icon: Users,
    eyebrow: "Tip Pool Transparency Layer",
    headline1: "Pool every tip.",
    headline2: "Show every share.",
    heroDescription:
      "Collected tips flow into a transparent pool and are distributed by agreed rules that every staff member can inspect on-chain. Each worker sees how the total was calculated and exactly how their own share was derived, ending the suspicion that pooled tips are split unfairly.",
    heroCta: "Deploy Tip Transparency",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque back-office tip split into a rule-driven distribution every worker can audit.",
    mechanics: [
      { title: "Pooled Escrow", description: "Collect tips neutrally. Escrow and Conditional Settlement gathers every contribution into a shared pool that no single manager can quietly draw from before distribution." },
      { title: "Agreed Split Rules", description: "Encode the formula once. The role and hours weighting that determines each share is written into the contract, so the distribution matches the policy the team agreed to." },
      { title: "Staff Registry", description: "Attribute shares to real workers. The Civil Registry ties each payout to a verified staff member and their role, so hours and weights map to the correct person." },
      { title: "Per-Share Transparency", description: "Show the math to everyone. Each worker can see the total pool, the weighting applied, and the calculation of their own share, rather than receiving an unexplained figure." },
      { title: "Immutable Audit Trail", description: "Preserve every cycle. Audit Logs records each pool, rule set, and distribution, so a past period can be reviewed and cannot be quietly rewritten." },
      { title: "Automated Payout", description: "Distribute without delay. Once a period closes, the contract releases each share directly, removing the manual spreadsheet step where errors and doubts creep in." },
    ],
    lifecycleTitle: "The Tip Pool Lifecycle",
    lifecycleSubtitle:
      "Follow a shift's tips from collection through rule-based calculation to a transparent per-worker payout.",
    lifecycleSteps: [
      {
        label: "Tip Collection",
        description:
          "Tips from the shift are contributed into the shared pool. Each contribution is recorded so the starting total is transparent to every participant.",
        icon: Wallet,
        logFilename: "cerulea_tippool.log",
        logLines: [
          { text: "[SYS] Opening tip pool for shift SHIFT_0912...", time: "23:05:11", tone: "default" },
          { text: "[CMD] contribute(pool: \"SHIFT_0912\", amount: 640)", time: "23:05:11", tone: "primary" },
          { text: "[SYS] Pool total updated and visible to staff.", time: "23:05:11", tone: "default" },
          { text: "[OK] Contributions closed. Pool total 640.", time: "23:05:12", tone: "success" },
        ],
      },
      {
        label: "Rule Application",
        description:
          "The agreed role and hours weighting is applied. The contract computes each staff member's weight from their recorded role and hours worked.",
        icon: Workflow,
        logFilename: "cerulea_tippool.log",
        logLines: [
          { text: "[SYS] Loading agreed split rules...", time: "23:06:02", tone: "default" },
          { text: "[CMD] applyRules(pool: \"SHIFT_0912\")", time: "23:06:02", tone: "primary" },
          { text: "[AUTH] Weighting 6 staff by role and hours...", time: "23:06:02", tone: "secondary" },
          { text: "[OK] Weights computed. Shares ready.", time: "23:06:03", tone: "success" },
        ],
      },
      {
        label: "Share Calculation",
        description:
          "Each worker's share is derived and made visible. Every staff member can inspect the pool total, their weight, and their resulting amount.",
        icon: PieChart,
        logFilename: "cerulea_tippool.log",
        logLines: [
          { text: "[SYS] Publishing per-share breakdown...", time: "23:06:20", tone: "default" },
          { text: "[CMD] computeShares(pool: \"SHIFT_0912\")", time: "23:06:20", tone: "primary" },
          { text: "[SYS] Staff_0x4 weight 0.22 -> share 140.8.", time: "23:06:20", tone: "default" },
          { text: "[OK] All shares published and auditable.", time: "23:06:21", tone: "success" },
        ],
      },
      {
        label: "Transparent Payout",
        description:
          "The pool releases each share directly to the workers. The full distribution is logged, so any worker can reconcile their pay to the on-chain record.",
        icon: FileCheck,
        logFilename: "cerulea_tippool.log",
        logLines: [
          { text: "[SYS] Releasing shares from pool escrow...", time: "23:07:00", tone: "default" },
          { text: "[CMD] distribute(pool: \"SHIFT_0912\")", time: "23:07:00", tone: "primary" },
          { text: "[AUTH] Writing distribution to audit log...", time: "23:07:00", tone: "secondary" },
          { text: "[OK] 6 shares paid. Cycle fully transparent.", time: "23:07:01", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes tip pooling into modular contracts. Each layer collects, weights, calculates, and logs a distribution so every worker can audit exactly how their share was reached.",
    layers: [
      {
        title: "Pool Escrow",
        subtitle: "The Shared Jar",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Jar",
          description:
            "The collection layer. It gathers every tip contribution into one escrowed pool with a publicly visible total, so no manager can skim or reallocate funds before the distribution runs.",
          platformFunction: "Escrow & Collection",
        },
        codeSnippet:
          "contract TipPool {\n  mapping(bytes32 => uint256) public total;\n\n  function contribute(bytes32 pool) external payable {\n    total[pool] += msg.value;\n    emit Contributed(pool, msg.value, total[pool]);\n  }\n}",
        simAction: "Simulate Tip Collection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving shift tips into pool...", tone: "default" },
          { text: "Updating publicly visible total...", tone: "default" },
          { text: "Locking pool against early withdrawal...", tone: "default" },
          { text: "Closing contributions for the shift...", tone: "default" },
          { text: "[SUCCESS] Pool total 640 held transparently.", tone: "success" },
        ],
      },
      {
        title: "Weighting Engine",
        subtitle: "The Agreed Formula",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Agreed Formula",
          description:
            "Applies the team's role and hours weighting. Because the formula is on-chain, the split matches the agreed policy exactly and cannot be adjusted quietly between cycles.",
          platformFunction: "Rules & Weighting",
        },
        codeSnippet:
          "function weightOf(bytes32 pool, address staff) public view returns (uint256) {\n    Worker memory w = roster[pool][staff];\n    return w.hours * roleFactor[w.role];\n}",
        simAction: "Simulate Rule Application",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading agreed role factors...", tone: "default" },
          { text: "Reading recorded hours per worker...", tone: "default" },
          { text: "Computing weight for each staff member...", tone: "default" },
          { text: "Publishing weights for inspection...", tone: "default" },
          { text: "[SUCCESS] Split follows the agreed formula.", tone: "success" },
        ],
      },
      {
        title: "Staff Registry",
        subtitle: "The Verified Roster",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Roster",
          description:
            "Maps each share to a real worker through the Civil Registry. It ties roles and hours to verified staff identities, so payouts reach the correct people and cannot be inflated with phantom workers.",
          platformFunction: "Identity & Roster",
        },
        codeSnippet:
          "function register(bytes32 pool, address staff, bytes32 role, uint256 hoursWorked) external onlyManager {\n    roster[pool][staff] = Worker(role, hoursWorked);\n    emit WorkerRegistered(pool, staff, role, hoursWorked);\n}",
        simAction: "Simulate Roster Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying staff identity for payout...", tone: "default" },
          { text: "Recording role and hours worked...", tone: "default" },
          { text: "Binding worker to the shift roster...", tone: "default" },
          { text: "Rejecting unverified entries...", tone: "default" },
          { text: "[SUCCESS] Shares mapped to real workers.", tone: "success" },
        ],
      },
      {
        title: "Distribution Log",
        subtitle: "The Open Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Open Record",
          description:
            "Releases each share and writes the full distribution to Audit Logs. Every worker can reconcile their pay to an immutable record, and past cycles can be reviewed but never rewritten.",
          platformFunction: "Audit & Payout",
        },
        codeSnippet:
          "function distribute(bytes32 pool) external onlyManager {\n    for (uint256 i = 0; i < members[pool].length; i++) {\n        address s = members[pool][i];\n        uint256 share = total[pool] * weightOf(pool, s) / weightSum[pool];\n        payable(s).transfer(share);\n        emit Paid(pool, s, share);\n    }\n}",
        simAction: "Simulate Distribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing final share per worker...", tone: "default" },
          { text: "Releasing each share from escrow...", tone: "default" },
          { text: "Writing distribution to audit log...", tone: "default" },
          { text: "Making the cycle fully reconcilable...", tone: "default" },
          { text: "[SUCCESS] Tips paid with an open record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent pooled distribution is a horizontal capability. Here is how different hospitality workplaces put it to work.",
    sectors: [
      { icon: Building2, title: "Hotels & Resorts", description: "Pool tips across housekeeping, front desk, and service teams and distribute by agreed weighting, ending staff distrust and giving each worker a clear view of their own share.", assetTypes: ["Tip Pools", "Share Breakdowns", "Payout Logs"] },
      { icon: Leaf, title: "Restaurants & Bars", description: "Split front and back of house gratuities on a published formula, so servers and kitchen staff can both verify the distribution instead of relying on a manager's spreadsheet.", assetTypes: ["Shift Pools", "Role Weightings", "Reconciliation Records"] },
      { icon: Handshake, title: "Event & Banquet Teams", description: "Distribute service charges from large functions across temporary and permanent staff with a transparent, auditable calculation for every event.", assetTypes: ["Service Charges", "Event Rosters", "Distribution Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy payroll and POS system or letting staff view shares from a mobile wallet, Cerulea routes both into one transparent distribution record.",
    tracks: [
      {
        title: "Track A: Payroll & POS Bridging",
        description:
          "For venues on legacy POS and payroll systems. Collected gratuities and recorded hours are translated into pool contributions and weighted shares through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "POS / Payroll System", sublabel: "Venue Back Office", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Pool & Share Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Tip Distribution Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Staff Mobile View",
        description:
          "For workers checking shares directly. A staff wallet reads the pool total, weighting, and its own share straight from the contract on the execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Staff App / Wallet", sublabel: "Worker Devices", icon: Fingerprint, accent: false },
          { label: "Venue Validators", sublabel: "Distribution Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Transparent Pool Record", icon: Users, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building pooled escrow, an agreed weighting engine, a verified staff roster, and an immutable distribution log from scratch requires specialised engineers and careful payroll integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Pooling & Weighting Rules",
      ruleCount: 32,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects hospitality payroll integration benchmarks. Building neutral pool custody, encoding an agreed weighting formula, and exposing a per-worker breakdown takes a baseline of 6 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your pooling and weighting rules into pre-audited WebAssembly binaries and provisions the distribution ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "group-booking-and-event-venue-allocation-for-travel-agencies",
    icon: Handshake,
    eyebrow: "Group Allocation Layer",
    headline1: "Hold every block.",
    headline2: "Confirm every deposit.",
    heroDescription:
      "Room blocks and venue space across multiple hotels are confirmed and held with verified deposits on one shared chain, so a travel agency coordinating a large event sees a single verified view of the whole booking. Each hotel's allocation and deposit status is anchored, replacing manual back-and-forth across properties.",
    heroCta: "Deploy Group Booking Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn manual multi-hotel coordination into one shared, deposit-backed allocation record.",
    mechanics: [
      { title: "Deposit-Backed Holds", description: "Make a hold mean something. Escrow and Conditional Settlement ties each room block and venue reservation to a verified deposit, so a property's commitment is backed by funds rather than an email promise." },
      { title: "Anchored Allocations", description: "Fix each commitment. The Provenance Notary anchors every hotel's confirmed allocation, so the agreed room count and venue space cannot drift after the fact." },
      { title: "Single Event View", description: "Unify the logistics. The agency reads one record spanning every participating hotel, replacing a patchwork of spreadsheets with a single verified view of the event." },
      { title: "Coordinated Release", description: "Manage the block cleanly. Unfilled rooms release back to the hotel on the agreed cutoff, and the contract reconciles deposits against the final pickup automatically." },
      { title: "Cross-Property Audit", description: "Keep the paper trail. Audit Logs records every confirmation, change, and release across all properties, giving the agency and hotels one dispute-proof history." },
      { title: "Multi-Party Settlement", description: "Settle in one pass. When the event completes, deposits and balances are reconciled across every hotel at once instead of chasing each property separately." },
    ],
    lifecycleTitle: "The Group Booking Lifecycle",
    lifecycleSubtitle:
      "Follow a large event from multi-hotel allocation requests through deposit-backed holds to a single reconciled settlement.",
    lifecycleSteps: [
      {
        label: "Allocation Request",
        description:
          "The agency requests room blocks and venue space across several hotels. Each request is recorded against the event on one shared chain.",
        icon: Handshake,
        logFilename: "cerulea_groupbook.log",
        logLines: [
          { text: "[SYS] Opening event allocation EVT_3300...", time: "10:20:04", tone: "default" },
          { text: "[CMD] requestBlocks { event: \"EVT_3300\", hotels: 4, rooms: 320 }", time: "10:20:04", tone: "primary" },
          { text: "[SYS] Routing requests to participating properties...", time: "10:20:04", tone: "default" },
          { text: "[OK] 4 allocation requests recorded.", time: "10:20:05", tone: "success" },
        ],
      },
      {
        label: "Deposit-Backed Hold",
        description:
          "Each hotel confirms its allocation and the agency posts a verified deposit. The block is held on-chain, backed by escrowed funds.",
        icon: Wallet,
        logFilename: "cerulea_groupbook.log",
        logLines: [
          { text: "[SYS] Hotel_204 confirming 90-room block...", time: "13:44:31", tone: "default" },
          { text: "[CMD] confirmBlock(event: \"EVT_3300\", hotel: \"HTL_204\", deposit: 4500)", time: "13:44:31", tone: "primary" },
          { text: "[AUTH] Escrowing deposit against the hold...", time: "13:44:31", tone: "secondary" },
          { text: "[OK] Block held. Deposit verified on-chain.", time: "13:44:32", tone: "success" },
        ],
      },
      {
        label: "Allocation Anchoring",
        description:
          "Every confirmed allocation is anchored to the event. The agency now has one verified view of rooms, venues, and deposits across all four hotels.",
        icon: ScrollText,
        logFilename: "cerulea_groupbook.log",
        logLines: [
          { text: "[SYS] Anchoring confirmed allocations...", time: "13:45:10", tone: "default" },
          { text: "[CMD] anchorEvent(\"EVT_3300\")", time: "13:45:10", tone: "primary" },
          { text: "[SYS] Consolidating 4 hotels into one record...", time: "13:45:10", tone: "default" },
          { text: "[OK] Single event view assembled and sealed.", time: "13:45:11", tone: "success" },
        ],
      },
      {
        label: "Event Settlement",
        description:
          "After the event, final pickup is reconciled and deposits settle across every hotel at once. Unused holds release on the agreed cutoff.",
        icon: FileCheck,
        logFilename: "cerulea_groupbook.log",
        logLines: [
          { text: "[SYS] Reconciling final pickup for EVT_3300...", time: "22:10:55", tone: "default" },
          { text: "[CMD] settleEvent(\"EVT_3300\")", time: "22:10:55", tone: "primary" },
          { text: "[AUTH] Releasing unfilled rooms and settling deposits...", time: "22:10:55", tone: "secondary" },
          { text: "[OK] All 4 hotels reconciled in one pass.", time: "22:10:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes group booking into modular contracts. Each layer requests, holds, anchors, and settles allocations so a multi-hotel event lives in one verified record.",
    layers: [
      {
        title: "Allocation Registry",
        subtitle: "The Event Ledger",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Event Ledger",
          description:
            "The coordination layer. It records every hotel's room block and venue allocation for an event in one place, so the agency reads a single source of truth instead of reconciling separate confirmations.",
          platformFunction: "Allocation & Coordination",
        },
        codeSnippet:
          "contract GroupBooking {\n  struct Block {\n    bytes32 hotel;\n    uint256 rooms;\n    uint256 deposit;\n    bool confirmed;\n  }\n\n  mapping(bytes32 => Block[]) public event;\n\n  function request(bytes32 ev, bytes32 hotel, uint256 rooms) external onlyAgency {\n    event[ev].push(Block(hotel, rooms, 0, false));\n    emit BlockRequested(ev, hotel, rooms);\n  }\n}",
        simAction: "Simulate Allocation Request",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Opening event EVT_3300 record...", tone: "default" },
          { text: "Recording block requests to 4 hotels...", tone: "default" },
          { text: "Consolidating requests under one event...", tone: "default" },
          { text: "Exposing a single agency view...", tone: "default" },
          { text: "[SUCCESS] Multi-hotel event ledger opened.", tone: "success" },
        ],
      },
      {
        title: "Hold Escrow",
        subtitle: "The Backed Commitment",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Backed Commitment",
          description:
            "Ties each hold to a verified deposit through Escrow and Conditional Settlement. A confirmed block is backed by escrowed funds, so a property's commitment and the agency's intent are both financially real.",
          platformFunction: "Escrow & Holds",
        },
        codeSnippet:
          "function confirmBlock(bytes32 ev, uint256 idx) external payable onlyHotel {\n    Block storage b = event[ev][idx];\n    b.deposit = msg.value;\n    b.confirmed = true;\n    emit BlockConfirmed(ev, b.hotel, b.rooms, msg.value);\n}",
        simAction: "Simulate Deposit Hold",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hotel_204 confirming a 90-room block...", tone: "default" },
          { text: "Escrowing the verified deposit...", tone: "default" },
          { text: "Marking the block as held...", tone: "default" },
          { text: "Linking hold to the event record...", tone: "default" },
          { text: "[SUCCESS] Block held with a backed deposit.", tone: "success" },
        ],
      },
      {
        title: "Allocation Notary",
        subtitle: "The Sealed Plan",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Plan",
          description:
            "Anchors the confirmed allocations through the Provenance Notary. The agreed room counts and venue space become tamper-evident, so no property can quietly alter its commitment after confirmation.",
          platformFunction: "Provenance & Anchoring",
        },
        codeSnippet:
          "function anchorEvent(bytes32 ev) external onlyAgency {\n    bytes32 planHash = _hashPlan(event[ev]);\n    anchored[ev] = planHash;\n    emit EventAnchored(ev, planHash, block.timestamp);\n}",
        simAction: "Simulate Plan Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing all confirmed allocations...", tone: "default" },
          { text: "Anchoring the plan for EVT_3300...", tone: "default" },
          { text: "Making room and venue counts tamper-evident...", tone: "default" },
          { text: "Sealing the consolidated event view...", tone: "default" },
          { text: "[SUCCESS] Allocation plan sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The One-Pass Closer",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The One-Pass Closer",
          description:
            "Reconciles final pickup and settles deposits across every hotel in a single operation, writing the outcome to Audit Logs so the entire event closes without chasing each property individually.",
          platformFunction: "Settlement & Audit",
        },
        codeSnippet:
          "function settleEvent(bytes32 ev) external onlyAgency {\n    for (uint256 i = 0; i < event[ev].length; i++) {\n        Block storage b = event[ev][i];\n        _reconcile(b);\n        emit BlockSettled(ev, b.hotel, b.deposit);\n    }\n}",
        simAction: "Simulate Event Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading final pickup per hotel...", tone: "default" },
          { text: "Releasing unfilled room holds...", tone: "default" },
          { text: "Settling deposits across 4 properties...", tone: "default" },
          { text: "Writing outcome to the audit log...", tone: "default" },
          { text: "[SUCCESS] Whole event reconciled in one pass.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Deposit-backed multi-property allocation is a horizontal capability. Here is how different actors put it to work.",
    sectors: [
      { icon: Handshake, title: "Travel Agencies & DMCs", description: "Coordinate room blocks and venue space across many hotels from one verified record, replacing manual confirmation chasing with deposit-backed holds and a single event view.", assetTypes: ["Room Blocks", "Venue Holds", "Event Deposits"] },
      { icon: Building2, title: "Hotels & Convention Centers", description: "Offer group holds backed by verified deposits and anchored allocations, reducing no-show risk and settling group business against one shared, dispute-proof record.", assetTypes: ["Block Confirmations", "Deposit Escrows", "Pickup Records"] },
      { icon: Users, title: "Corporate & Event Planners", description: "Plan conferences and weddings across multiple venues with a live view of confirmed rooms, space, and deposits, ending the uncertainty of scattered spreadsheets.", assetTypes: ["Event Plans", "Allocation Views", "Settlement Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy hotel booking systems or coordinating an event from an agency wallet, Cerulea routes both into one shared allocation record.",
    tracks: [
      {
        title: "Track A: Hotel System Bridging",
        description:
          "For properties on legacy booking and inventory systems. Existing block confirmations and deposits are translated into on-chain holds and settlements through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Hotel Inventory System", sublabel: "Property Booking Platforms", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Hold & Deposit Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Group Allocation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Agency Coordination Wallet",
        description:
          "For agencies coordinating directly. A wallet signs allocation requests and deposits and reads the consolidated event view straight from the execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Agency App / Wallet", sublabel: "Planner Devices", icon: Fingerprint, accent: false },
          { label: "Event Validators", sublabel: "Allocation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Consolidated Event Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building deposit-backed holds, anchored allocations, a consolidated event view, and one-pass multi-hotel settlement from scratch requires specialised engineers and long property integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Allocation & Deposit Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects multi-property booking integration benchmarks. Coordinating deposit-backed holds across hotels, anchoring allocations, and building one-pass event settlement takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your allocation and deposit rules into pre-audited WebAssembly binaries and provisions the group allocation ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "restaurant-supply-chain-provenance-for-farm-to-table-certification",
    icon: Leaf,
    eyebrow: "Farm-to-Table Provenance Engine",
    headline1: "Prove the sourcing.",
    headline2: "Back the menu claim.",
    heroDescription:
      "Ingredients are tracked from farm to kitchen as verified records, so a hotel or restaurant can substantiate local and organic sourcing with evidence rather than menu language. A guest scanning a dish sees the real provenance behind the farm-to-table claim.",
    heroCta: "Deploy Sourcing Provenance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an undocumented sourcing chain into a verifiable record behind every farm-to-table claim.",
    mechanics: [
      { title: "Ingredient Traceability", description: "Follow each ingredient. The Traceability Ledger records custody from the farm through the distributor to the kitchen, so the path behind a dish is documented rather than assumed." },
      { title: "Origin Notarization", description: "Anchor the source. The Provenance Notary binds each ingredient lot to its farm and harvest, making a false local or organic claim mathematically detectable." },
      { title: "Certified Grades", description: "Attach the proof. Produce Grades and Certificates anchors organic and quality certificates to the lot, so a sourcing claim carries the underlying credential, not just a label." },
      { title: "Dish-Level Linking", description: "Connect food to farm. Menu items reference the verified lots that went into them, so a specific dish resolves to the specific ingredients and their origins." },
      { title: "Guest Verification", description: "Expose the record. A table QR resolves a dish to its ingredient provenance and certificates, letting a diner confirm the farm-to-table claim without an account." },
      { title: "Sourcing Audit", description: "Support the marketing. Chefs and auditors can review the verified sourcing history for any period, turning a marketing statement into a defensible, evidence-backed claim." },
    ],
    lifecycleTitle: "The Sourcing Lifecycle",
    lifecycleSubtitle:
      "Follow a single ingredient lot from the farm through the kitchen to a guest verifying the dish it became.",
    lifecycleSteps: [
      {
        label: "Farm Sourcing",
        description:
          "A farm registers an ingredient lot at harvest. The record anchors the farm, the product, and the harvest date as the verified origin of the chain.",
        icon: Tractor,
        logFilename: "cerulea_farmtable.log",
        logLines: [
          { text: "[SYS] Registering ingredient lot at source...", time: "06:40:12", tone: "default" },
          { text: "[CMD] sourceLot { farm: \"GRN_ACRE\", item: \"HEIRLOOM_TOMATO\", qty: 80 }", time: "06:40:12", tone: "primary" },
          { text: "[AUTH] Anchoring farm identity and harvest date...", time: "06:40:13", tone: "secondary" },
          { text: "[OK] Lot LOT_4471 anchored as origin.", time: "06:40:13", tone: "success" },
        ],
      },
      {
        label: "Certificate Anchoring",
        description:
          "The organic certificate for the lot is anchored by digest. The credential behind the sourcing claim is now bound to the ingredient and tamper-evident.",
        icon: FileCheck,
        logFilename: "cerulea_farmtable.log",
        logLines: [
          { text: "[SYS] Anchoring certificates for LOT_4471...", time: "07:05:44", tone: "default" },
          { text: "[CMD] anchorCert([\"ORGANIC_CERT\", \"GRADE_A\"])", time: "07:05:44", tone: "primary" },
          { text: "[AUTH] Hashing certificates and sealing to lot...", time: "07:05:44", tone: "secondary" },
          { text: "[OK] 2 certificates anchored. Tamper-evident.", time: "07:05:45", tone: "success" },
        ],
      },
      {
        label: "Kitchen Custody",
        description:
          "The lot moves through the distributor to the restaurant kitchen. Each handoff is recorded and the lot is linked to the menu items it will supply.",
        icon: Truck,
        logFilename: "cerulea_farmtable.log",
        logLines: [
          { text: "[SYS] Recording custody to kitchen...", time: "11:22:09", tone: "default" },
          { text: "[CMD] receiveLot(lot: \"LOT_4471\", kitchen: \"HTL_KITCHEN_9\")", time: "11:22:09", tone: "primary" },
          { text: "[SYS] Linking lot to menu item CAPRESE_02...", time: "11:22:09", tone: "default" },
          { text: "[OK] Custody chain complete to the kitchen.", time: "11:22:10", tone: "success" },
        ],
      },
      {
        label: "Guest Verification",
        description:
          "A guest scans the dish QR at the table. The record resolves the ingredient origins and certificates behind the plate, substantiating the sourcing claim.",
        icon: QrCode,
        logFilename: "cerulea_farmtable.log",
        logLines: [
          { text: "[SYS] Public verification for dish CAPRESE_02...", time: "19:48:30", tone: "default" },
          { text: "[CMD] resolveDish(\"CAPRESE_02\")", time: "19:48:30", tone: "primary" },
          { text: "[SYS] Assembling ingredient lots and certificates...", time: "19:48:30", tone: "default" },
          { text: "[OK] Farm-to-table claim verified for guest.", time: "19:48:31", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes farm-to-table sourcing into modular contracts. Each layer sources, certifies, tracks, and exposes an ingredient so a menu claim rests on a verifiable chain.",
    layers: [
      {
        title: "Lot Registry",
        subtitle: "The Origin Record",
        icon: Tractor,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Record",
          description:
            "The sourcing layer. It anchors each ingredient lot to its farm and harvest through the Traceability Ledger, establishing the immutable origin that every later record and menu claim points back to.",
          platformFunction: "Sourcing & Origin",
        },
        codeSnippet:
          "contract IngredientRegistry {\n  struct Lot {\n    bytes32 farm;\n    string item;\n    uint256 harvestDate;\n    uint256 quantity;\n  }\n\n  mapping(bytes32 => Lot) public lots;\n\n  function source(bytes32 id, bytes32 farm, string calldata item) external onlyFarm {\n    lots[id] = Lot(farm, item, block.timestamp, 0);\n    emit Sourced(id, farm, item);\n  }\n}",
        simAction: "Simulate Lot Sourcing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading farm credential for GRN_ACRE...", tone: "default" },
          { text: "Anchoring harvest date and product...", tone: "default" },
          { text: "Writing lot identity to the ledger...", tone: "default" },
          { text: "Establishing the immutable origin...", tone: "default" },
          { text: "[SUCCESS] Ingredient origin recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Certificate Notary",
        subtitle: "The Sealed Credential",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Credential",
          description:
            "Anchors organic and grade certificates by digest through Produce Grades and Certificates. The document stays off-chain, but any tampering with the credential breaks its hash and is instantly detectable.",
          platformFunction: "Certification & Provenance",
        },
        codeSnippet:
          "function anchorCert(bytes32 lotId, bytes32 certHash, string calldata kind) external onlyIssuer {\n    certs[lotId].push(Cert(certHash, kind, block.timestamp));\n    emit CertAnchored(lotId, certHash, kind);\n}",
        simAction: "Simulate Certificate Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting organic certificate document...", tone: "default" },
          { text: "Computing digest of the credential...", tone: "default" },
          { text: "Binding certificate to LOT_4471...", tone: "default" },
          { text: "Sealing the sourcing proof...", tone: "default" },
          { text: "[SUCCESS] Certificate anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Custody Tracker",
        subtitle: "The Kitchen Chain",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Kitchen Chain",
          description:
            "Records each handoff from farm to distributor to kitchen and links lots to the menu items they supply, so a specific dish resolves to the specific verified ingredients that went into it.",
          platformFunction: "Custody & Linking",
        },
        codeSnippet:
          "function receiveLot(bytes32 lotId, bytes32 kitchen, bytes32 menuItem) external {\n    custody[lotId].push(Hop(kitchen, block.timestamp));\n    dishLots[menuItem].push(lotId);\n    emit LotReceived(lotId, kitchen, menuItem);\n}",
        simAction: "Simulate Kitchen Custody",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording distributor to kitchen handoff...", tone: "default" },
          { text: "Appending hop to the custody chain...", tone: "default" },
          { text: "Linking lot to menu item CAPRESE_02...", tone: "default" },
          { text: "Completing the chain to the plate...", tone: "default" },
          { text: "[SUCCESS] Ingredient traced to the dish.", tone: "success" },
        ],
      },
      {
        title: "Dish Verifier",
        subtitle: "The Diner Window",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Diner Window",
          description:
            "A read-only gateway that resolves a dish to its ingredient lots, their origins, and their certificates. It lets any guest or auditor confirm a farm-to-table claim without an account.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveDish(bytes32 menuItem) external view returns (bytes32[] memory lots, Cert[] memory proofs) {\n    return (dishLots[menuItem], _certsFor(menuItem));\n}",
        simAction: "Simulate Dish Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Guest scans the dish QR at the table...", tone: "default" },
          { text: "Resolving ingredient lots for the dish...", tone: "default" },
          { text: "Attaching origins and certificates...", tone: "default" },
          { text: "Returning the full provenance...", tone: "default" },
          { text: "[SUCCESS] Farm-to-table claim substantiated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified ingredient provenance is a horizontal capability. Here is how different hospitality actors put it to work.",
    sectors: [
      { icon: Leaf, title: "Hotels & Restaurants", description: "Substantiate local and organic menu claims with a verifiable chain from farm to kitchen, turning a marketing statement into evidence a guest can scan and confirm.", assetTypes: ["Ingredient Lots", "Menu Claims", "Origin Proofs"] },
      { icon: Truck, title: "Specialty Food Distributors", description: "Pass verified provenance and certificates downstream with each delivery, letting culinary clients inherit a documented sourcing chain instead of re-verifying suppliers.", assetTypes: ["Delivery Lots", "Certificate Bundles", "Custody Records"] },
      { icon: Landmark, title: "Certifiers & Food Authorities", description: "Audit organic and origin claims directly from the ledger, replacing paper certificate checks with a live query into a tamper-evident sourcing history.", assetTypes: ["Certification Records", "Audit Trails", "Compliance Queries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy procurement system or capturing farm data from a grower's phone, Cerulea routes both into one verified sourcing record.",
    tracks: [
      {
        title: "Track A: Procurement System Bridging",
        description:
          "For hotels and distributors on legacy procurement systems. Existing purchase and delivery events are translated into anchored lots and custody hops through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Procurement System", sublabel: "Kitchen & Supplier ERP", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Lot & Certificate Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sourcing Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Grower Field Capture",
        description:
          "For farms recording at source. A grower's mobile wallet signs each lot registration and certificate anchor and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Grower PWA / Wallet", sublabel: "Farm Devices", icon: Fingerprint, accent: false },
          { label: "Sourcing Validators", sublabel: "Provenance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Ingredient Record", icon: Leaf, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building ingredient traceability, certificate anchoring, dish-level linking, and a guest verification portal from scratch requires specialised engineers and long supplier integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Sourcing & Certificate Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects food supply-chain integration benchmarks. Wiring each supplier's procurement data, anchoring certificates, and linking lots to menu items with a guest portal takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your sourcing and certificate rules into pre-audited WebAssembly binaries and provisions the provenance ledger and verifier instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "travel-agency-commission-reconciliation-across-hotel-bookings",
    icon: Scale,
    eyebrow: "Commission Settlement Layer",
    headline1: "Tie pay to stays.",
    headline2: "Retire the reconciliation.",
    heroDescription:
      "Commission is calculated and paid to travel agencies automatically from verified completed stays, so the recurring manual reconciliation of which bookings actually finished disappears. Each agency is paid exactly what it is owed as stays complete, not after a monthly finance chase.",
    heroCta: "Deploy Commission Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a monthly manual reconciliation into an automatic payout driven by verified stay completion.",
    mechanics: [
      { title: "Stay-Triggered Commission", description: "Pay only on real stays. Commission accrues when a booking is confirmed complete without cancellation, so payouts track verified completion rather than gross bookings." },
      { title: "Royalty Standard Rates", description: "Encode the terms. The Royalty Standard holds each agency's negotiated rate, so commission is computed from an agreed on-chain rule rather than a spreadsheet lookup." },
      { title: "Automated Clearing", description: "Settle without a batch. Royalty Clearing nets what each hotel owes each agency and releases payment, removing the periodic manual reconciliation run entirely." },
      { title: "Verified Completion", description: "Trust the trigger. A stay is marked complete from the booking record itself, so an agency cannot claim commission on a cancelled or no-show reservation." },
      { title: "Automated Invoicing", description: "Close the loop. Invoices and Billing issues the commission statement against each cleared payout, giving both hotel and agency a matching record." },
      { title: "Dispute-Free Ledger", description: "End the arguments. Because completion, rate, and payout all live on one ledger, a contested commission is resolved against shared state instead of conflicting reports." },
    ],
    lifecycleTitle: "The Commission Lifecycle",
    lifecycleSubtitle:
      "Follow a single booking from stay completion through rate application to an automatic commission payout.",
    lifecycleSteps: [
      {
        label: "Stay Completion",
        description:
          "A guest completes their stay without cancellation. The booking record marks the stay complete, which is the trigger for commission accrual.",
        icon: FileCheck,
        logFilename: "cerulea_commission.log",
        logLines: [
          { text: "[SYS] Confirming stay completion...", time: "12:02:41", tone: "default" },
          { text: "[CMD] completeStay(booking: \"BKG_7781\", agency: \"AGY_12\")", time: "12:02:41", tone: "primary" },
          { text: "[AUTH] Verifying no cancellation on record...", time: "12:02:41", tone: "secondary" },
          { text: "[OK] Stay complete. Commission eligible.", time: "12:02:42", tone: "success" },
        ],
      },
      {
        label: "Rate Application",
        description:
          "The agency's negotiated rate is applied to the booking value. The contract computes the exact commission owed from the encoded Royalty Standard.",
        icon: Scale,
        logFilename: "cerulea_commission.log",
        logLines: [
          { text: "[SYS] Loading agency rate from Royalty Standard...", time: "12:02:43", tone: "default" },
          { text: "[CMD] accrue(booking: \"BKG_7781\", value: 900, rate: \"12%\")", time: "12:02:43", tone: "primary" },
          { text: "[SYS] Commission computed: 108.", time: "12:02:43", tone: "default" },
          { text: "[OK] Accrual recorded for AGY_12.", time: "12:02:44", tone: "success" },
        ],
      },
      {
        label: "Clearing Run",
        description:
          "Royalty Clearing nets accrued commissions per agency across all their completed bookings and releases the net amount, with no manual reconciliation.",
        icon: Workflow,
        logFilename: "cerulea_commission.log",
        logLines: [
          { text: "[SYS] Running clearing for AGY_12...", time: "18:00:00", tone: "default" },
          { text: "[CMD] clear(agency: \"AGY_12\", period: \"2026-09\")", time: "18:00:00", tone: "primary" },
          { text: "[AUTH] Netting 214 completed bookings...", time: "18:00:00", tone: "secondary" },
          { text: "[OK] Net commission released to agency.", time: "18:00:01", tone: "success" },
        ],
      },
      {
        label: "Statement Issuance",
        description:
          "Invoices and Billing issues the matching commission statement to the agency and the hotels. Both sides hold one reconciled record of what was paid.",
        icon: ScrollText,
        logFilename: "cerulea_commission.log",
        logLines: [
          { text: "[SYS] Generating commission statement...", time: "18:00:04", tone: "default" },
          { text: "[CMD] issueStatement(agency: \"AGY_12\", period: \"2026-09\")", time: "18:00:04", tone: "primary" },
          { text: "[SYS] Matching statement to cleared payout...", time: "18:00:04", tone: "default" },
          { text: "[OK] Statement issued. Records reconciled.", time: "18:00:05", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes commission reconciliation into modular contracts. Each layer verifies completion, applies rates, clears payouts, and invoices so agencies are paid automatically from real stays.",
    layers: [
      {
        title: "Completion Oracle",
        subtitle: "The Trusted Trigger",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trusted Trigger",
          description:
            "The eligibility layer. It marks a stay complete only when the booking record shows no cancellation, so commission can accrue solely on genuinely completed business.",
          platformFunction: "Verification & Eligibility",
        },
        codeSnippet:
          "contract CompletionOracle {\n  mapping(bytes32 => bool) public completed;\n\n  function completeStay(bytes32 booking) external onlyBookingChain {\n    require(!cancelled[booking], \"Cancelled\");\n    completed[booking] = true;\n    emit StayCompleted(booking, block.timestamp);\n  }\n}",
        simAction: "Simulate Completion Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading booking BKG_7781 status...", tone: "default" },
          { text: "Checking for any cancellation flag...", tone: "default" },
          { text: "Marking the stay as completed...", tone: "default" },
          { text: "Enabling commission eligibility...", tone: "default" },
          { text: "[SUCCESS] Only real stays trigger commission.", tone: "success" },
        ],
      },
      {
        title: "Rate Engine",
        subtitle: "The Encoded Terms",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Encoded Terms",
          description:
            "Applies each agency's negotiated rate from the Royalty Standard. Commission is computed from an agreed on-chain rule, so the figure is deterministic and cannot be quietly disputed later.",
          platformFunction: "Royalty & Rates",
        },
        codeSnippet:
          "function accrue(bytes32 booking, bytes32 agency, uint256 value) external {\n    require(oracle.completed(booking), \"Not complete\");\n    uint256 commission = value * rate[agency] / 10000;\n    owed[agency] += commission;\n    emit Accrued(agency, booking, commission);\n}",
        simAction: "Simulate Rate Application",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading negotiated rate for AGY_12...", tone: "default" },
          { text: "Applying rate to booking value 900...", tone: "default" },
          { text: "Computing commission of 108...", tone: "default" },
          { text: "Recording accrual for the agency...", tone: "default" },
          { text: "[SUCCESS] Commission derived from encoded terms.", tone: "success" },
        ],
      },
      {
        title: "Clearing Engine",
        subtitle: "The Auto Netting",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Netting",
          description:
            "Nets accrued commissions per agency through Royalty Clearing and releases the net payment, replacing the periodic manual reconciliation run with a single automated clearing operation.",
          platformFunction: "Clearing & Settlement",
        },
        codeSnippet:
          "function clear(bytes32 agency) external {\n    uint256 amount = owed[agency];\n    require(amount > 0, \"Nothing owed\");\n    owed[agency] = 0;\n    payable(payoutAddr[agency]).transfer(amount);\n    emit Cleared(agency, amount, block.timestamp);\n}",
        simAction: "Simulate Clearing Run",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating accruals for AGY_12...", tone: "default" },
          { text: "Netting 214 completed bookings...", tone: "default" },
          { text: "Releasing the net commission...", tone: "default" },
          { text: "Clearing the agency balance...", tone: "default" },
          { text: "[SUCCESS] Payout cleared with no manual batch.", tone: "success" },
        ],
      },
      {
        title: "Billing Ledger",
        subtitle: "The Matched Record",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Matched Record",
          description:
            "Issues the commission statement through Invoices and Billing against each cleared payout, so hotel and agency hold one reconciled record and a contested figure resolves against shared state.",
          platformFunction: "Invoicing & Audit",
        },
        codeSnippet:
          "function issueStatement(bytes32 agency, bytes32 period) external returns (bytes32) {\n    bytes32 stmt = keccak256(abi.encode(agency, period, cleared[agency][period]));\n    statements[agency][period] = stmt;\n    emit StatementIssued(agency, period, stmt);\n    return stmt;\n}",
        simAction: "Simulate Statement Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Compiling cleared commission for the period...", tone: "default" },
          { text: "Generating the agency statement...", tone: "default" },
          { text: "Matching statement to the payout...", tone: "default" },
          { text: "Distributing to hotel and agency...", tone: "default" },
          { text: "[SUCCESS] Both sides hold one reconciled record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated commission settlement is a horizontal capability. Here is how different travel actors put it to work.",
    sectors: [
      { icon: Scale, title: "Hotels & Hotel Groups", description: "Pay agency commissions automatically from verified completed stays, eliminating the monthly reconciliation of which bookings actually finished and reducing finance overhead.", assetTypes: ["Commission Accruals", "Clearing Runs", "Payout Statements"] },
      { icon: Globe, title: "Travel Agencies & OTAs", description: "Receive exactly what is owed as stays complete, replacing opaque delayed payouts with an on-chain accrual each agency can track in real time.", assetTypes: ["Earned Commissions", "Booking Records", "Reconciled Statements"] },
      { icon: PieChart, title: "Tour Operators & Consolidators", description: "Settle layered commissions across suppliers and sub-agents on one clearing ledger, removing the multi-party reconciliation that stalls payments each period.", assetTypes: ["Multi-Party Splits", "Clearing Records", "Settlement Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy property and finance system or letting an agency track accruals from a wallet, Cerulea routes both into one commission ledger.",
    tracks: [
      {
        title: "Track A: Hotel Finance Bridging",
        description:
          "For hotels on legacy PMS and finance systems. Completed stays and booking values are translated into commission accruals and clearing runs through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "PMS / Finance System", sublabel: "Hotel Back Office", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Accrual & Clearing Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Commission Clearing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Agency Settlement Wallet",
        description:
          "For agencies tracking payouts directly. A wallet reads accruals and cleared commissions straight from the ledger and signs settlement confirmations on the execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Agency App / Wallet", sublabel: "Finance Devices", icon: Fingerprint, accent: false },
          { label: "Clearing Validators", sublabel: "Settlement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Commission Payout Record", icon: Scale, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building stay-triggered accrual, encoded rate logic, automated clearing, and matched statement issuance from scratch requires specialised finance engineers and long system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Commission & Clearing Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects travel finance integration benchmarks. Wiring completion data, encoding per-agency rates, and building an automated clearing and statement run takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your commission and clearing rules into pre-audited WebAssembly binaries and provisions the clearing ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "airline-loyalty-miles-as-interoperable-tokens",
    icon: Plane,
    eyebrow: "Interoperable Miles Layer",
    headline1: "Free the miles.",
    headline2: "Settle in real time.",
    heroDescription:
      "Loyalty miles become an interoperable public-chain token that passengers earn and redeem across any consortium partner instantly, while partner settlement is automated with no monthly reconciliation batch. Miles stop expiring inside a single carrier's silo and start moving freely across the alliance.",
    heroCta: "Deploy Miles Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn siloed per-carrier miles into one interoperable token with automated partner settlement.",
    mechanics: [
      { title: "Interoperable Mile Token", description: "Break the silo. Miles are issued as an ERC-20 token on a public chain, so a balance earned on one carrier is spendable across every consortium partner without a reconciliation process." },
      { title: "Cross-Partner Earning", description: "Earn anywhere. The Loyalty and Rewards Ledger credits miles from any partner's activity to one passenger balance, so flying a partner airline adds to the same wallet." },
      { title: "Instant Redemption", description: "Redeem on the spot. A passenger burns miles against an award seat or upgrade at any partner instantly, without waiting for cross-carrier balance transfers to clear." },
      { title: "Automated Settlement", description: "Retire the batch. Payouts and Settlements nets what partners owe each other for cross-earned and cross-redeemed miles and settles continuously, ending the monthly reconciliation run." },
      { title: "Transparent Liability", description: "See the balance sheet. Because outstanding miles are on-chain, each carrier can read its exact liability in real time instead of estimating from lagging reports." },
      { title: "Fraud-Resistant Miles", description: "Guarantee integrity. Every earn, transfer, and redemption is recorded, so miles cannot be double-spent or duplicated across the partner network." },
    ],
    lifecycleTitle: "The Miles Lifecycle",
    lifecycleSubtitle:
      "Follow a mile balance from cross-partner earning through instant redemption to automated inter-carrier settlement.",
    lifecycleSteps: [
      {
        label: "Cross-Partner Earning",
        description:
          "A passenger flies a partner airline. The ledger credits the earned miles to their single interoperable balance regardless of which carrier operated the flight.",
        icon: Plane,
        logFilename: "cerulea_miles.log",
        logLines: [
          { text: "[SYS] Flight activity reported by Partner_B...", time: "14:20:11", tone: "default" },
          { text: "[CMD] earn(passenger: \"0xa4f2\", miles: 3200, carrier: \"PARTNER_B\")", time: "14:20:11", tone: "primary" },
          { text: "[SYS] Minting miles to interoperable balance...", time: "14:20:11", tone: "default" },
          { text: "[OK] Balance credited across the alliance.", time: "14:20:12", tone: "success" },
        ],
      },
      {
        label: "Instant Redemption",
        description:
          "The passenger redeems miles for an award seat on another partner. The token burns instantly, with no cross-carrier transfer delay.",
        icon: Ticket,
        logFilename: "cerulea_miles.log",
        logLines: [
          { text: "[SYS] Redemption on Partner_C requested...", time: "16:45:39", tone: "default" },
          { text: "[CMD] redeem(passenger: \"0xa4f2\", award: \"SEAT_J\", miles: 25000)", time: "16:45:39", tone: "primary" },
          { text: "[AUTH] Burning miles and issuing award...", time: "16:45:39", tone: "secondary" },
          { text: "[OK] Award seat confirmed instantly.", time: "16:45:40", tone: "success" },
        ],
      },
      {
        label: "Inter-Carrier Netting",
        description:
          "The settlement engine nets the cross-earned and cross-redeemed value between carriers. Obligations are computed continuously from on-chain activity.",
        icon: Workflow,
        logFilename: "cerulea_miles.log",
        logLines: [
          { text: "[SYS] Netting inter-carrier obligations...", time: "23:00:00", tone: "default" },
          { text: "[CMD] netSettlement(window: \"DAILY\")", time: "23:00:00", tone: "primary" },
          { text: "[SYS] Partner_B owes Partner_C net 12,400 value.", time: "23:00:00", tone: "default" },
          { text: "[OK] Net positions computed from chain state.", time: "23:00:01", tone: "success" },
        ],
      },
      {
        label: "Automated Settlement",
        description:
          "Payouts and Settlements releases the net amounts between partners. Carriers settle continuously, with no monthly reconciliation batch to run.",
        icon: Wallet,
        logFilename: "cerulea_miles.log",
        logLines: [
          { text: "[SYS] Releasing net settlement payments...", time: "23:00:04", tone: "default" },
          { text: "[CMD] settle(from: \"PARTNER_B\", to: \"PARTNER_C\", amount: 12400)", time: "23:00:04", tone: "primary" },
          { text: "[AUTH] Executing continuous partner settlement...", time: "23:00:04", tone: "secondary" },
          { text: "[OK] Partners settled. No monthly batch.", time: "23:00:05", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes interoperable miles into modular contracts. Each layer tokenizes, earns, redeems, and settles so miles move freely and partners reconcile automatically.",
    layers: [
      {
        title: "Miles Token",
        subtitle: "The Interoperable Balance",
        icon: Plane,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Interoperable Balance",
          description:
            "The ERC-20 miles contract. It holds one balance per passenger that every partner can credit and debit, replacing separate per-carrier mile pools with a single spendable token.",
          platformFunction: "Tokenized Miles",
        },
        codeSnippet:
          "contract MilesToken {\n  mapping(address => uint256) public balanceOf;\n\n  function earn(address to, uint256 miles, bytes32 carrier) external onlyPartner {\n    balanceOf[to] += miles;\n    emit Earned(to, miles, carrier);\n  }\n\n  function redeem(address from, uint256 miles) external onlyPartner {\n    require(balanceOf[from] >= miles, \"Insufficient miles\");\n    balanceOf[from] -= miles;\n    emit Redeemed(from, miles, msg.sender);\n  }\n}",
        simAction: "Simulate Mile Earning",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Partner_B reporting 3200 miles earned...", tone: "default" },
          { text: "Minting miles to interoperable balance...", tone: "default" },
          { text: "Crediting the passenger wallet...", tone: "default" },
          { text: "Making miles spendable alliance-wide...", tone: "default" },
          { text: "[SUCCESS] Miles earned across the alliance.", tone: "success" },
        ],
      },
      {
        title: "Rewards Ledger",
        subtitle: "The Earn Router",
        icon: Gift,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Earn Router",
          description:
            "Routes earning activity from any partner into the passenger's single balance through the Loyalty and Rewards Ledger, so flying or spending with a partner always credits the same wallet.",
          platformFunction: "Loyalty & Earning",
        },
        codeSnippet:
          "function creditActivity(address passenger, bytes32 carrier, uint256 spend) external onlyPartner {\n    uint256 miles = spend * earnRate[carrier] / 100;\n    token.earn(passenger, miles, carrier);\n    liability[carrier] += miles;\n    emit ActivityCredited(passenger, carrier, miles);\n}",
        simAction: "Simulate Earn Routing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving partner activity for passenger...", tone: "default" },
          { text: "Computing miles from partner earn rate...", tone: "default" },
          { text: "Crediting the single balance...", tone: "default" },
          { text: "Recording issuing carrier liability...", tone: "default" },
          { text: "[SUCCESS] Earning routed to one wallet.", tone: "success" },
        ],
      },
      {
        title: "Redemption Engine",
        subtitle: "The Instant Award",
        icon: Ticket,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Award",
          description:
            "Burns miles against an award at any partner and records the redeeming carrier, so a cross-partner redemption confirms instantly without waiting for a balance transfer to clear.",
          platformFunction: "Redemption & Awards",
        },
        codeSnippet:
          "function redeemAward(address passenger, bytes32 award, uint256 miles) external onlyPartner {\n    token.redeem(passenger, miles);\n    obligation[msg.sender] += miles;\n    emit AwardIssued(passenger, award, msg.sender, miles);\n}",
        simAction: "Simulate Award Redemption",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Partner_C issuing an award seat...", tone: "default" },
          { text: "Burning 25000 miles from balance...", tone: "default" },
          { text: "Recording redeeming carrier obligation...", tone: "default" },
          { text: "Confirming the award instantly...", tone: "default" },
          { text: "[SUCCESS] Cross-partner award with no delay.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The Continuous Netting",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Continuous Netting",
          description:
            "Nets inter-carrier obligations from earn liabilities and redemption obligations through Payouts and Settlements and releases net payments continuously, ending the monthly reconciliation batch.",
          platformFunction: "Settlement & Payouts",
        },
        codeSnippet:
          "function settle(bytes32 from, bytes32 to) external {\n    uint256 net = obligation[from] - obligation[to];\n    require(net > 0, \"No net due\");\n    obligation[from] -= net;\n    _pay(from, to, net);\n    emit Settled(from, to, net);\n}",
        simAction: "Simulate Partner Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating cross-partner obligations...", tone: "default" },
          { text: "Netting earn and redemption positions...", tone: "default" },
          { text: "Releasing the net partner payment...", tone: "default" },
          { text: "Clearing settled balances...", tone: "default" },
          { text: "[SUCCESS] Partners settled continuously.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Interoperable loyalty value is a horizontal capability. Here is how different travel actors put it to work.",
    sectors: [
      { icon: Plane, title: "Airlines & Alliances", description: "Let passengers earn and redeem one mile balance across every partner instantly, while settling inter-carrier obligations continuously instead of running a heavy monthly reconciliation.", assetTypes: ["Mile Tokens", "Award Redemptions", "Partner Settlements"] },
      { icon: Building2, title: "Hotel & Travel Partners", description: "Accept and issue the same loyalty token so a hotel stay or car rental earns miles that fly, turning a closed program into a spendable cross-industry currency.", assetTypes: ["Partner Earnings", "Cross-Redemptions", "Liability Records"] },
      { icon: Coins, title: "Co-Brand Card Issuers", description: "Credit card spend directly to the interoperable balance with transparent liability, so issuers and airlines reconcile miles automatically rather than through lagging statements.", assetTypes: ["Spend Accruals", "Issuer Settlements", "Balance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy frequent flyer platform or serving passengers through a mobile wallet, Cerulea routes both into one interoperable miles token.",
    tracks: [
      {
        title: "Track A: Frequent Flyer Bridging",
        description:
          "For carriers on legacy loyalty platforms. Existing earn and redemption events are translated into token mints, burns, and settlements through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Frequent Flyer Platform", sublabel: "Carrier Loyalty Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Mint & Settlement Signing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Interoperable Miles Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Passenger Mobile Wallet",
        description:
          "For passengers on the alliance app. A wallet holds the miles token, signs redemptions, and reads the balance directly from the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Passenger App / Wallet", sublabel: "Traveler Devices", icon: Fingerprint, accent: false },
          { label: "Alliance Validators", sublabel: "Miles Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Miles Settlement Ledger", icon: Plane, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an interoperable miles token, cross-partner earning and redemption, and continuous inter-carrier settlement from scratch requires specialised engineers and long alliance integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Earning & Settlement Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects airline loyalty integration benchmarks. Tokenizing miles, wiring cross-partner earning and redemption, and building continuous inter-carrier settlement takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your earning and settlement rules into pre-audited WebAssembly binaries and provisions the interoperable miles ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "baggage-handling-chain-of-custody-for-lost-luggage-claims",
    icon: Package,
    eyebrow: "Baggage Custody Engine",
    headline1: "Scan every handoff.",
    headline2: "Pinpoint every bag.",
    heroDescription:
      "A verified chain of custody follows checked baggage from check-in to claim, anchoring each scan event so airlines and ground handlers share one record instead of fragmented per-airport systems. When a bag goes missing, investigators pinpoint the last verified stage in seconds and process the claim faster.",
    heroCta: "Deploy Baggage Custody",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fragmented per-handler scan data into one verified custody chain per bag.",
    mechanics: [
      { title: "Anchored Scan Events", description: "Record every stage. The Traceability Ledger anchors each scan from check-in to loading to claim, so a bag's journey is one continuous record rather than scattered logs." },
      { title: "Attested Scanners", description: "Trust the source. Device Attestation confirms that each scan came from a genuine, authorized handler device, so the custody chain cannot be spoofed with fake events." },
      { title: "Cross-Handler View", description: "Unify the airports. Every ground handler writes to the same chain, so an airline sees one custody trail spanning all handling systems instead of querying each in turn." },
      { title: "Last-Seen Pinpoint", description: "Find the gap. When a bag is delayed, the chain immediately shows the last verified scan stage, focusing the investigation on the exact handoff where custody broke." },
      { title: "Faster Claims", description: "Speed the payout. Because the custody record is shared and verified, a lost luggage claim is assessed against evidence in minutes rather than a multi-party manual trace." },
      { title: "Immutable Investigation Log", description: "Preserve the trail. Audit Logs records the full custody history and every query, giving airlines and handlers a dispute-proof basis for liability and claims." },
    ],
    lifecycleTitle: "The Baggage Custody Lifecycle",
    lifecycleSubtitle:
      "Follow a single checked bag from check-in through each attested scan to a fast, evidence-backed claim.",
    lifecycleSteps: [
      {
        label: "Check-In Registration",
        description:
          "A bag is checked in and tagged. The contract anchors the origin scan, binding the bag tag to its passenger, flight, and starting point.",
        icon: QrCode,
        logFilename: "cerulea_baggage.log",
        logLines: [
          { text: "[SYS] Registering checked bag at origin...", time: "05:30:22", tone: "default" },
          { text: "[CMD] checkIn { tag: \"BAG_66120\", flight: \"CX_884\", from: \"HKG\" }", time: "05:30:22", tone: "primary" },
          { text: "[AUTH] Binding tag to passenger and flight...", time: "05:30:23", tone: "secondary" },
          { text: "[OK] Origin scan anchored for BAG_66120.", time: "05:30:23", tone: "success" },
        ],
      },
      {
        label: "Attested Handoffs",
        description:
          "The bag is scanned at loading, transfer, and unloading. Each scan is attested to a genuine handler device and appended to the custody chain.",
        icon: Radio,
        logFilename: "cerulea_baggage.log",
        logLines: [
          { text: "[SYS] Loading scan from handler device...", time: "06:12:47", tone: "default" },
          { text: "[CMD] scan(tag: \"BAG_66120\", stage: \"LOADED\", device: \"DEV_41\")", time: "06:12:47", tone: "primary" },
          { text: "[AUTH] Verifying device attestation DEV_41...", time: "06:12:47", tone: "secondary" },
          { text: "[OK] Custody hop appended. Chain length 3.", time: "06:12:48", tone: "success" },
        ],
      },
      {
        label: "Missing Bag Trace",
        description:
          "The bag fails to arrive at claim. The airline queries the chain and the last verified scan pinpoints exactly where custody ended.",
        icon: Search,
        logFilename: "cerulea_baggage.log",
        logLines: [
          { text: "[SYS] Bag not scanned at destination claim...", time: "09:55:10", tone: "default" },
          { text: "[CMD] traceLastSeen(\"BAG_66120\")", time: "09:55:10", tone: "primary" },
          { text: "[SYS] Last verified scan: TRANSFER at DXB.", time: "09:55:10", tone: "default" },
          { text: "[OK] Custody gap localized to one handoff.", time: "09:55:11", tone: "success" },
        ],
      },
      {
        label: "Claim Settlement",
        description:
          "The claim is assessed against the shared custody record. With the last-seen stage confirmed, the airline resolves and settles the claim quickly.",
        icon: FileCheck,
        logFilename: "cerulea_baggage.log",
        logLines: [
          { text: "[SYS] Opening lost luggage claim...", time: "10:20:33", tone: "default" },
          { text: "[CMD] settleClaim(tag: \"BAG_66120\", basis: \"CUSTODY_GAP_DXB\")", time: "10:20:33", tone: "primary" },
          { text: "[AUTH] Writing resolution to audit log...", time: "10:20:33", tone: "secondary" },
          { text: "[OK] Claim resolved on verified evidence.", time: "10:20:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes baggage custody into modular contracts. Each layer registers, attests, traces, and logs a bag so a lost luggage investigation runs on one shared, verified chain.",
    layers: [
      {
        title: "Bag Registry",
        subtitle: "The Origin Tag",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Tag",
          description:
            "The registration layer. It anchors the check-in scan and binds the bag tag to its passenger and flight, establishing the immutable start of the custody chain.",
          platformFunction: "Registration & Identity",
        },
        codeSnippet:
          "contract BagRegistry {\n  struct Bag {\n    bytes32 flight;\n    bytes32 origin;\n    uint256 checkedAt;\n  }\n\n  mapping(bytes32 => Bag) public bags;\n\n  function checkIn(bytes32 tag, bytes32 flight, bytes32 origin) external onlyAirline {\n    bags[tag] = Bag(flight, origin, block.timestamp);\n    emit CheckedIn(tag, flight, origin);\n  }\n}",
        simAction: "Simulate Check-In",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading bag tag BAG_66120...", tone: "default" },
          { text: "Binding tag to flight CX_884...", tone: "default" },
          { text: "Anchoring the origin scan at HKG...", tone: "default" },
          { text: "Starting the custody chain...", tone: "default" },
          { text: "[SUCCESS] Bag origin recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Scan Attestor",
        subtitle: "The Trusted Reader",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trusted Reader",
          description:
            "Validates each scan through Device Attestation. A hop is appended only when it comes from a genuine authorized handler device, so the custody chain cannot be forged with fabricated events.",
          platformFunction: "Attestation & Custody",
        },
        codeSnippet:
          "function scan(bytes32 tag, bytes32 stage, bytes32 device, bytes calldata att) external {\n    require(attestor.verify(device, att), \"Untrusted device\");\n    custody[tag].push(Hop(stage, device, block.timestamp));\n    emit Scanned(tag, stage, device);\n}",
        simAction: "Simulate Attested Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving loading scan for the bag...", tone: "default" },
          { text: "Verifying handler device attestation...", tone: "default" },
          { text: "Appending the hop to custody...", tone: "default" },
          { text: "Rejecting any unattested source...", tone: "default" },
          { text: "[SUCCESS] Genuine scan added to the chain.", tone: "success" },
        ],
      },
      {
        title: "Trace Engine",
        subtitle: "The Last-Seen Locator",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Last-Seen Locator",
          description:
            "Returns the most recent verified scan for a bag, so an investigation instantly focuses on the exact stage where custody ended rather than searching each airport's separate system.",
          platformFunction: "Tracing & Investigation",
        },
        codeSnippet:
          "function traceLastSeen(bytes32 tag) external view returns (bytes32 stage, bytes32 device, uint256 at) {\n    Hop[] memory h = custody[tag];\n    Hop memory last = h[h.length - 1];\n    return (last.stage, last.device, last.at);\n}",
        simAction: "Simulate Last-Seen Trace",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting no claim scan at destination...", tone: "default" },
          { text: "Reading the custody chain for the bag...", tone: "default" },
          { text: "Returning the last verified stage...", tone: "default" },
          { text: "Localizing the custody gap to DXB...", tone: "default" },
          { text: "[SUCCESS] Missing point pinpointed in seconds.", tone: "success" },
        ],
      },
      {
        title: "Claim Ledger",
        subtitle: "The Evidence Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Record",
          description:
            "Resolves claims against the shared custody chain and writes the outcome to Audit Logs, giving airlines and handlers a dispute-proof basis for liability and a faster settlement.",
          platformFunction: "Claims & Audit",
        },
        codeSnippet:
          "function settleClaim(bytes32 tag, bytes32 basis) external onlyAirline {\n    require(custody[tag].length > 0, \"No custody\");\n    claims[tag] = Claim(basis, msg.sender, block.timestamp);\n    emit ClaimSettled(tag, basis);\n}",
        simAction: "Simulate Claim Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Opening the lost luggage claim...", tone: "default" },
          { text: "Reading the last-seen custody basis...", tone: "default" },
          { text: "Resolving liability from the chain...", tone: "default" },
          { text: "Writing the outcome to the audit log...", tone: "default" },
          { text: "[SUCCESS] Claim settled on verified evidence.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified baggage custody is a horizontal capability. Here is how different aviation actors put it to work.",
    sectors: [
      { icon: Plane, title: "Airlines", description: "Share one verified custody chain per bag across every handler and airport, cutting lost luggage investigation time and settling claims quickly on trusted evidence.", assetTypes: ["Bag Tags", "Custody Chains", "Claim Records"] },
      { icon: Truck, title: "Ground Handlers", description: "Write attested scans into a common record so handoffs between handlers are unambiguous, reducing finger-pointing over where a bag was lost.", assetTypes: ["Scan Events", "Handler Attestations", "Handoff Records"] },
      { icon: Landmark, title: "Airports & Authorities", description: "Oversee baggage performance and liability from one tamper-evident chain, replacing reconciliation across disparate handling systems with a live query.", assetTypes: ["Performance Logs", "Liability Trails", "Audit Queries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy baggage handling systems or ingesting scans from attested handler devices, Cerulea routes both into one custody chain.",
    tracks: [
      {
        title: "Track A: Handling System Bridging",
        description:
          "For airports on legacy baggage reconciliation systems. Existing scan feeds are translated into anchored custody hops through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Baggage Handling System", sublabel: "Airport BRS Platforms", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Scan Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Baggage Custody Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Attested Device Capture",
        description:
          "For handler devices scanning at the ramp. Each attested scanner signs its scan and routes it directly to the custody chain on the execution layer.",
        connectorLabels: ["DEVICE ATTESTATION", "STATE EXECUTION"],
        nodes: [
          { label: "Handler Scanner", sublabel: "Attested Ramp Devices", icon: Radio, accent: false },
          { label: "Custody Validators", sublabel: "Scan Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Bag Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building anchored scan custody, device attestation, a last-seen trace engine, and an evidence-backed claim ledger from scratch requires specialised engineers and long multi-airport integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Attestation Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects aviation baggage integration benchmarks. Unifying scan feeds across handlers, adding device attestation, and building a last-seen trace and claim flow takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and attestation rules into pre-audited WebAssembly binaries and provisions the baggage custody ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "airport-slot-allocation-transparency-among-airlines",
    icon: Ticket,
    eyebrow: "Slot Compliance Layer",
    headline1: "Anchor every slot.",
    headline2: "Prove real usage.",
    heroDescription:
      "Airport takeoff and landing slot allocations and their actual usage are recorded transparently, so airlines retain slots only when use-it-or-lose-it requirements are genuinely met. The slot coordinator enforces usage rules against anchored flight operation data rather than each airline's own reporting.",
    heroCta: "Deploy Slot Transparency",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn self-reported slot usage into a verifiable record the coordinator can enforce fairly.",
    mechanics: [
      { title: "Anchored Allocations", description: "Fix the grant. The Provenance Notary anchors each slot allocation to its airline and time, so the rights on record cannot be quietly altered or contested later." },
      { title: "Verified Usage Data", description: "Match slots to flights. Actual takeoff and landing data is anchored against each allocated slot, so usage is measured from operations rather than an airline's own report." },
      { title: "Use-It-Or-Lose-It Check", description: "Enforce the rule. The contract evaluates whether the required usage threshold was met over the period, flagging slots that fall short for reallocation." },
      { title: "Compliance Attestations", description: "Certify the outcome. Compliance Attestations records that each airline's usage was assessed against the rule, giving the coordinator a defensible basis for its decisions." },
      { title: "Transparent Reallocation", description: "Reassign fairly. When a slot lapses, the record shows exactly why, so reallocation to another carrier rests on evidence instead of dispute-prone judgement." },
      { title: "Immutable Coordinator Log", description: "Preserve the decisions. Audit Logs records every allocation, usage assessment, and reallocation, so the coordination committee's actions are transparent and reviewable." },
    ],
    lifecycleTitle: "The Slot Lifecycle",
    lifecycleSubtitle:
      "Follow a single slot from allocation through verified usage to a transparent retention or reallocation decision.",
    lifecycleSteps: [
      {
        label: "Slot Allocation",
        description:
          "The coordinator allocates a slot to an airline. The grant is anchored with its time, airport, and usage requirement as the immutable basis of the right.",
        icon: Ticket,
        logFilename: "cerulea_slots.log",
        logLines: [
          { text: "[SYS] Allocating slot to airline...", time: "08:00:04", tone: "default" },
          { text: "[CMD] allocate { airport: \"LHR\", slot: \"0715_ARR\", airline: \"AL_22\" }", time: "08:00:04", tone: "primary" },
          { text: "[AUTH] Anchoring allocation and 80% usage rule...", time: "08:00:05", tone: "secondary" },
          { text: "[OK] Slot SLOT_0715 anchored for AL_22.", time: "08:00:05", tone: "success" },
        ],
      },
      {
        label: "Usage Capture",
        description:
          "Actual flight operations are anchored against the slot. Each takeoff or landing that uses the slot is recorded from operational data.",
        icon: Plane,
        logFilename: "cerulea_slots.log",
        logLines: [
          { text: "[SYS] Recording operation against slot...", time: "07:14:52", tone: "default" },
          { text: "[CMD] recordUse(slot: \"SLOT_0715\", flight: \"AL22_401\")", time: "07:14:52", tone: "primary" },
          { text: "[SYS] Usage count now 58 of 60 scheduled.", time: "07:14:52", tone: "default" },
          { text: "[OK] Operation anchored to allocated slot.", time: "07:14:53", tone: "success" },
        ],
      },
      {
        label: "Compliance Check",
        description:
          "At the review point the contract compares actual usage to the requirement. The use-it-or-lose-it threshold is evaluated from anchored data, not self-reporting.",
        icon: Gavel,
        logFilename: "cerulea_slots.log",
        logLines: [
          { text: "[SYS] Evaluating slot usage for the season...", time: "23:59:00", tone: "default" },
          { text: "[CMD] assessUsage(slot: \"SLOT_0715\")", time: "23:59:00", tone: "primary" },
          { text: "[AUTH] Usage 96.7% >= 80% threshold. Compliant.", time: "23:59:00", tone: "secondary" },
          { text: "[OK] Retention attested for AL_22.", time: "23:59:01", tone: "success" },
        ],
      },
      {
        label: "Retention or Reallocation",
        description:
          "The coordinator retains or reassigns the slot based on the verified outcome. The decision and its evidence are logged for every airline to review.",
        icon: FileCheck,
        logFilename: "cerulea_slots.log",
        logLines: [
          { text: "[SYS] Applying slot decision...", time: "23:59:04", tone: "default" },
          { text: "[CMD] finalizeSlot(slot: \"SLOT_0715\", action: \"RETAIN\")", time: "23:59:04", tone: "primary" },
          { text: "[SYS] Writing decision and evidence to audit log...", time: "23:59:04", tone: "default" },
          { text: "[OK] Slot retained on transparent grounds.", time: "23:59:05", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes slot coordination into modular contracts. Each layer allocates, records usage, assesses compliance, and logs decisions so slot retention rests on verifiable evidence.",
    layers: [
      {
        title: "Allocation Registry",
        subtitle: "The Anchored Grant",
        icon: Ticket,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Anchored Grant",
          description:
            "The rights layer. It anchors each slot allocation with its time, airport, and usage requirement through the Provenance Notary, so the granted rights are fixed and cannot be quietly changed.",
          platformFunction: "Allocation & Rights",
        },
        codeSnippet:
          "contract SlotRegistry {\n  struct Slot {\n    bytes32 airline;\n    bytes32 window;\n    uint256 required;\n    uint256 used;\n  }\n\n  mapping(bytes32 => Slot) public slots;\n\n  function allocate(bytes32 id, bytes32 airline, bytes32 window, uint256 required) external onlyCoordinator {\n    slots[id] = Slot(airline, window, required, 0);\n    emit Allocated(id, airline, window, required);\n  }\n}",
        simAction: "Simulate Slot Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading coordinator allocation request...", tone: "default" },
          { text: "Anchoring slot time and airport...", tone: "default" },
          { text: "Recording the usage requirement...", tone: "default" },
          { text: "Fixing the airline's slot rights...", tone: "default" },
          { text: "[SUCCESS] Slot grant anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Usage Oracle",
        subtitle: "The Operations Feed",
        icon: Plane,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Operations Feed",
          description:
            "Anchors actual takeoff and landing operations against each slot. Because usage is measured from operational data, an airline cannot overstate how much it used an allocated slot.",
          platformFunction: "Usage & Verification",
        },
        codeSnippet:
          "function recordUse(bytes32 slotId, bytes32 flight) external onlyOpsFeed {\n    slots[slotId].used += 1;\n    emit UseRecorded(slotId, flight, slots[slotId].used);\n}",
        simAction: "Simulate Usage Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving operation for the slot...", tone: "default" },
          { text: "Matching flight to allocated slot...", tone: "default" },
          { text: "Incrementing verified usage count...", tone: "default" },
          { text: "Anchoring operation to the record...", tone: "default" },
          { text: "[SUCCESS] Usage measured from operations.", tone: "success" },
        ],
      },
      {
        title: "Compliance Engine",
        subtitle: "The Threshold Judge",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Threshold Judge",
          description:
            "Evaluates usage against the use-it-or-lose-it requirement and records a Compliance Attestation. The assessment is deterministic, giving the coordinator a defensible basis for retention or reallocation.",
          platformFunction: "Compliance & Attestation",
        },
        codeSnippet:
          "function assessUsage(bytes32 slotId) external onlyCoordinator returns (bool compliant) {\n    Slot memory s = slots[slotId];\n    compliant = s.used * 100 >= s.required * 80;\n    emit UsageAssessed(slotId, s.used, s.required, compliant);\n}",
        simAction: "Simulate Compliance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified usage for the slot...", tone: "default" },
          { text: "Comparing against the 80% threshold...", tone: "default" },
          { text: "Determining compliance deterministically...", tone: "default" },
          { text: "Recording the compliance attestation...", tone: "default" },
          { text: "[SUCCESS] Usage judged on anchored data.", tone: "success" },
        ],
      },
      {
        title: "Decision Ledger",
        subtitle: "The Transparent Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transparent Record",
          description:
            "Finalizes retention or reallocation and writes the decision and its evidence to Audit Logs, so every airline can see why a slot was kept or reassigned and the coordinator's actions are reviewable.",
          platformFunction: "Decision & Audit",
        },
        codeSnippet:
          "function finalizeSlot(bytes32 slotId, bytes32 action) external onlyCoordinator {\n    decisions[slotId] = Decision(action, block.timestamp);\n    emit SlotFinalized(slotId, action);\n}",
        simAction: "Simulate Slot Decision",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Applying the compliance outcome...", tone: "default" },
          { text: "Recording retain or reallocate action...", tone: "default" },
          { text: "Writing the decision and its evidence...", tone: "default" },
          { text: "Publishing to all participating airlines...", tone: "default" },
          { text: "[SUCCESS] Slot decision made transparently.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transparent slot coordination is a horizontal capability. Here is how different aviation actors put it to work.",
    sectors: [
      { icon: Landmark, title: "Slot Coordinators", description: "Enforce use-it-or-lose-it rules against anchored operational data, giving every airline a defensible, evidence-backed basis for retention and reallocation decisions.", assetTypes: ["Slot Allocations", "Compliance Attestations", "Decision Logs"] },
      { icon: Plane, title: "Airlines", description: "See exactly how their slot usage is measured and assessed, replacing disputes over self-reported figures with a transparent record they can verify.", assetTypes: ["Usage Records", "Retention Proofs", "Allocation Rights"] },
      { icon: Building2, title: "Airports & Regulators", description: "Oversee scarce slot capacity from one tamper-evident ledger, ensuring allocation policy is applied consistently and reviewably across all carriers.", assetTypes: ["Capacity Records", "Policy Attestations", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy slot coordination system or ingesting operations from an airport data feed, Cerulea routes both into one transparent slot record.",
    tracks: [
      {
        title: "Track A: Coordinator System Bridging",
        description:
          "For coordinators on legacy slot systems. Existing allocations and season data are translated into anchored grants and compliance assessments through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Slot Coordination System", sublabel: "Legacy Allocation Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Allocation & Assessment Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Slot Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Airport Operations Feed",
        description:
          "For airports supplying operational data. A trusted ops feed signs each takeoff and landing and routes it against the allocated slot on the execution layer.",
        connectorLabels: ["DATA SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Airport Ops Feed", sublabel: "Operational Data Source", icon: Radio, accent: false },
          { label: "Coordination Validators", sublabel: "Usage Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Slot Record", icon: Ticket, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building anchored allocations, an operations-based usage oracle, a use-it-or-lose-it compliance engine, and a transparent decision ledger from scratch requires specialised engineers and long coordinator integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Allocation & Compliance Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects aviation slot coordination benchmarks. Anchoring allocations, ingesting operational usage, and building a defensible use-it-or-lose-it assessment and decision flow takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your allocation and compliance rules into pre-audited WebAssembly binaries and provisions the slot compliance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const travelHospitalityItems: ExtraCaseItem[] = [
  { label: "Provably fair gaming outcomes on-chain", href: "/solutions/use-case/provably-fair-gaming-outcomes-on-chain", description: "Commit-reveal randomness players can verify themselves.", icon: Gamepad, category: "DAPPS", tags: ["Gaming", "Fairness"], industry: INDUSTRY },
  { label: "Responsible gambling self-exclusion registry across operators", href: "/solutions/use-case/responsible-gambling-self-exclusion-registry-across-operators", description: "Cross-operator exclusion with zero-knowledge privacy.", icon: Shield, category: "GOVERNMENT", tags: ["Gaming", "Compliance"], industry: INDUSTRY },
  { label: "Casino loyalty program points across multi-property operators", href: "/solutions/use-case/casino-loyalty-program-points-across-multi-property-operators", description: "One tokenized points balance across every property.", icon: Coins, category: "ENTERPRISE", tags: ["Loyalty", "Tokenization"], industry: INDUSTRY },
  { label: "Hotel booking and deposit management via smart contracts", href: "/solutions/use-case/hotel-booking-and-deposit-management-via-smart-contracts", description: "Policy-governed escrow with automated cancellation refunds.", icon: Building2, category: "ENTERPRISE", tags: ["Hotels", "Escrow"], industry: INDUSTRY },
  { label: "Vacation rental host verification and guest review integrity", href: "/solutions/use-case/vacation-rental-host-verification-and-guest-review-integrity", description: "Verified hosts and reviews tied to real stays.", icon: Home, category: "DAPPS", tags: ["Rentals", "Trust"], industry: INDUSTRY },
  { label: "Hotel staff tip pooling and distribution transparency", href: "/solutions/use-case/hotel-staff-tip-pooling-and-distribution-transparency", description: "Transparent tip pools with verifiable share rules.", icon: Users, category: "SME", tags: ["Payroll", "Transparency"], industry: INDUSTRY },
  { label: "Group booking and event venue allocation for travel agencies", href: "/solutions/use-case/group-booking-and-event-venue-allocation-for-travel-agencies", description: "Confirmed room blocks and deposits across many hotels.", icon: Handshake, category: "ENTERPRISE", tags: ["Events", "Booking"], industry: INDUSTRY },
  { label: "Restaurant supply chain provenance for farm-to-table certification", href: "/solutions/use-case/restaurant-supply-chain-provenance-for-farm-to-table-certification", description: "Verified ingredient sourcing behind every dish claim.", icon: Leaf, category: "SME", tags: ["Dining", "Provenance"], industry: INDUSTRY },
  { label: "Travel agency commission reconciliation across hotel bookings", href: "/solutions/use-case/travel-agency-commission-reconciliation-across-hotel-bookings", description: "Automated commission payout on verified completed stays.", icon: Scale, category: "ENTERPRISE", tags: ["Finance", "Settlement"], industry: INDUSTRY },
  { label: "Airline loyalty miles as interoperable tokens", href: "/solutions/use-case/airline-loyalty-miles-as-interoperable-tokens", description: "Cross-partner miles with automated settlement, no reconciliation.", icon: Plane, category: "ENTERPRISE", tags: ["Airlines", "Loyalty"], industry: INDUSTRY },
  { label: "Baggage handling chain of custody for lost luggage claims", href: "/solutions/use-case/baggage-handling-chain-of-custody-for-lost-luggage-claims", description: "Verified scan trail speeds lost luggage claims.", icon: Package, category: "ENTERPRISE", tags: ["Airlines", "Traceability"], industry: INDUSTRY },
  { label: "Airport slot allocation transparency among airlines", href: "/solutions/use-case/airport-slot-allocation-transparency-among-airlines", description: "Verifiable slot usage for fair allocation enforcement.", icon: Ticket, category: "GOVERNMENT", tags: ["Aviation", "Compliance"], industry: INDUSTRY },
]
