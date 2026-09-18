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

const INDUSTRY = "Retail & Consumer Goods"

export const retailConsumerGoodsCases: CaseEntry[] = [
  {
    slug: "seller-reputation-and-review-integrity-across-marketplace-platforms",
    icon: ShieldCheck,
    eyebrow: "Marketplace Reputation Layer",
    headline1: "Purchase-gate every review.",
    headline2: "Own reputation across platforms.",
    heroDescription:
      "Stand up a public-chain seller reputation protocol where only verified buyers can post reviews and every rating carries portable, tamper-proof provenance. Provenance Notary, Soulbound Token, and a DID and VC Ledger anchor the record, so scores cannot be edited by the platform operator that hosts them.",
    heroCta: "Deploy Reputation Protocols",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn platform-controlled star ratings into buyer-owned, cross-platform reputation that cannot be manufactured.",
    mechanics: [
      { title: "Purchase-Gated Reviews", description: "Bind every review to a settled order. The Provenance Notary requires a verified purchase receipt before a review can be written, so bought-and-paid-for review farms have nothing to attach to." },
      { title: "Soulbound Reviewer Identity", description: "Issue each buyer a non-transferable Soulbound Token that carries their review history. Reputation cannot be sold, transferred, or spun up in bulk from throwaway accounts." },
      { title: "Portable Seller Score", description: "Compute one reputation score from reviews across every participating marketplace. A seller's honest track record follows them instead of resetting each time they list on a new platform." },
      { title: "Operator-Proof Ratings", description: "Remove the platform's ability to bury or boost. Scores are derived from on-chain reviews the operator cannot silently rewrite, so buyers trust a number the host does not control." },
      { title: "Credentialed Buyer Proof", description: "Anchor buyer authenticity through the DID and VC Ledger. A verifiable credential proves a reviewer is a real, distinct human without exposing their personal identity to the public." },
      { title: "Fraud Pattern Flagging", description: "Detect coordinated manipulation. Clustered timing, shared funding wallets, and review-swap rings surface against the shared ledger long before they distort a seller's public rating." },
    ],
    lifecycleTitle: "The Reputation Lifecycle",
    lifecycleSubtitle:
      "Follow a single buyer review from a verified purchase to a portable score any marketplace can trust.",
    lifecycleSteps: [
      {
        label: "Buyer Verification",
        description:
          "A shopper proves they are a distinct, real buyer. The DID and VC Ledger issues a verifiable credential and binds it to a Soulbound reviewer token.",
        icon: Fingerprint,
        logFilename: "cerulea_reputation.log",
        logLines: [
          { text: "[SYS] Initializing Reviewer Identity Manifest...", time: "07:41:02", tone: "default" },
          { text: "[CMD] issueCredential { buyer: \"0x7c19\", type: \"HUMAN_UNIQUE\" }", time: "07:41:02", tone: "primary" },
          { text: "[AUTH] Binding soulbound reviewer token to DID...", time: "07:41:03", tone: "secondary" },
          { text: "[OK] Reviewer SBT_44120 minted, non-transferable.", time: "07:41:03", tone: "success" },
        ],
      },
      {
        label: "Purchase Anchoring",
        description:
          "The buyer completes an order. The Provenance Notary anchors the settled purchase receipt as the only key that will later unlock a review.",
        icon: Package,
        logFilename: "cerulea_reputation.log",
        logLines: [
          { text: "[SYS] Order settled on marketplace ALPHA_MKT...", time: "10:18:44", tone: "default" },
          { text: "[CMD] anchorPurchase(order: \"OD_88213\", buyer: \"0x7c19\")", time: "10:18:45", tone: "primary" },
          { text: "[SYS] Receipt hash sealed to reviewer identity.", time: "10:18:45", tone: "default" },
          { text: "[OK] Review right granted for OD_88213.", time: "10:18:46", tone: "success" },
        ],
      },
      {
        label: "Review Submission",
        description:
          "The buyer posts a review. The contract checks the purchase anchor, rejects any review with no settled order behind it, and records the rating on-chain.",
        icon: ScrollText,
        logFilename: "cerulea_reputation.log",
        logLines: [
          { text: "[SYS] Review submitted for seller SLR_2290...", time: "14:52:31", tone: "default" },
          { text: "[CMD] postReview(order: \"OD_88213\", stars: 4)", time: "14:52:31", tone: "primary" },
          { text: "[AUTH] Verifying purchase anchor and reviewer SBT...", time: "14:52:32", tone: "secondary" },
          { text: "[OK] Review recorded. Purchase-gate satisfied.", time: "14:52:32", tone: "success" },
        ],
      },
      {
        label: "Portable Scoring",
        description:
          "Any participating marketplace queries the seller's aggregate score. Reviews from every platform roll into one number the operator cannot edit.",
        icon: Activity,
        logFilename: "cerulea_reputation.log",
        logLines: [
          { text: "[SYS] Score request for SLR_2290 from BETA_MKT...", time: "16:05:09", tone: "default" },
          { text: "[CMD] resolveScore(seller: \"SLR_2290\")", time: "16:05:09", tone: "primary" },
          { text: "[SYS] Aggregating 1,204 gated reviews across 3 platforms...", time: "16:05:10", tone: "default" },
          { text: "[OK] Portable score 4.6 returned, operator-proof.", time: "16:05:10", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes marketplace reputation into modular contracts. Each layer verifies identity, gates reviews behind purchases, aggregates cross-platform scores, and exposes them without a single operator in control.",
    layers: [
      {
        title: "Reviewer Identity",
        subtitle: "The Soulbound Passport",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Soulbound Passport",
          description:
            "The foundational identity layer. It binds a verifiable human-unique credential to a non-transferable token, so review history accrues to a real buyer and cannot be traded, farmed, or reset across accounts.",
          platformFunction: "Identity & Credentials",
        },
        codeSnippet:
          "contract ReviewerRegistry {\n  struct Reviewer {\n    bytes32 didHash;\n    uint256 reviewCount;\n    bool verifiedHuman;\n  }\n\n  mapping(address => Reviewer) public reviewers;\n\n  function bind(address buyer, bytes32 didHash) external onlyIssuer {\n    reviewers[buyer] = Reviewer(didHash, 0, true);\n  }\n}",
        simAction: "Simulate Identity Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verifiable credential for buyer 0x7c19...", tone: "default" },
          { text: "Confirming human-unique proof...", tone: "default" },
          { text: "Minting non-transferable reviewer token...", tone: "default" },
          { text: "Writing identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Reviewer SBT_44120 bound on-chain.", tone: "success" },
        ],
      },
      {
        title: "Purchase Gate",
        subtitle: "The Receipt Lock",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Receipt Lock",
          description:
            "Blocks reviews with no order behind them. A review call reverts unless a settled purchase receipt is anchored for that exact buyer and item, dismantling paid review farms at the protocol level.",
          platformFunction: "Review Gating",
        },
        codeSnippet:
          "function postReview(bytes32 orderId, uint8 stars) external {\n    Purchase storage p = purchases[orderId];\n    require(p.buyer == msg.sender, \"Not buyer\");\n    require(p.settled && !p.reviewed, \"No valid purchase\");\n    p.reviewed = true;\n    _record(p.seller, msg.sender, stars);\n}",
        simAction: "Simulate Gated Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer submitting 4-star review for OD_88213...", tone: "default" },
          { text: "Checking anchored purchase receipt...", tone: "default" },
          { text: "Confirming order settled and not yet reviewed...", tone: "default" },
          { text: "Recording rating against seller SLR_2290...", tone: "default" },
          { text: "[SUCCESS] Purchase-gated review accepted.", tone: "success" },
        ],
      },
      {
        title: "Score Aggregator",
        subtitle: "The Cross-Platform Tally",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cross-Platform Tally",
          description:
            "Collapses reviews from every participating marketplace into one weighted reputation score. The operator hosting a listing reads the number but cannot rewrite the reviews that produced it.",
          platformFunction: "Reputation Scoring",
        },
        codeSnippet:
          "function resolveScore(address seller) external view returns (uint256) {\n    Review[] storage r = reviews[seller];\n    uint256 sum;\n    for (uint256 i = 0; i < r.length; i++) {\n        sum += r[i].stars * r[i].weight;\n    }\n    return sum / totalWeight[seller];\n}",
        simAction: "Simulate Score Resolve",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Gathering gated reviews for SLR_2290...", tone: "default" },
          { text: "Merging records from 3 marketplaces...", tone: "default" },
          { text: "Applying recency and volume weights...", tone: "default" },
          { text: "Computing weighted reputation...", tone: "default" },
          { text: "[SUCCESS] Portable score 4.6 returned.", tone: "success" },
        ],
      },
      {
        title: "Manipulation Guard",
        subtitle: "The Ring Detector",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ring Detector",
          description:
            "Surfaces coordinated abuse. It correlates reviewer funding sources, submission timing, and reciprocal review patterns to flag manipulation rings before their ratings sway a public score.",
          platformFunction: "Fraud Detection",
        },
        codeSnippet:
          "function flagCluster(address seller, address[] calldata reviewers) external onlyGuard {\n    uint256 shared = _sharedFunding(reviewers);\n    if (shared > clusterThreshold) {\n        suspect[seller] = true;\n        emit ClusterFlagged(seller, shared);\n    }\n}",
        simAction: "Simulate Ring Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning reviewer set for SLR_7781...", tone: "default" },
          { text: "Tracing shared funding wallets...", tone: "default" },
          { text: "Measuring reciprocal review timing...", tone: "default" },
          { text: "Cluster score exceeds threshold...", tone: "default" },
          { text: "[SUCCESS] Manipulation ring flagged for review.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Portable, purchase-gated reputation is a horizontal capability. Here is how different marketplace actors put the shared ledger to work.",
    sectors: [
      { icon: Globe, title: "Horizontal Marketplaces", description: "Give shoppers a trust signal the house cannot inflate. Large multi-category platforms adopt purchase-gated reviews to prove listings are rated by real buyers, not by the operator or paid farms.", assetTypes: ["Seller Scores", "Gated Reviews", "Buyer Credentials"] },
      { icon: Boxes, title: "Niche & Vertical Platforms", description: "Let small sellers carry a hard-won reputation between platforms. A verified track record earned on one vertical marketplace transfers intact when a merchant expands to another.", assetTypes: ["Portable Reputation", "Merchant Profiles", "Cross-Listings"] },
      { icon: Landmark, title: "Consumer Protection Bodies", description: "Audit review integrity from evidence. Regulators query the ledger to confirm ratings are backed by real purchases and to trace manipulation rings without subpoenaing the platform.", assetTypes: ["Audit Trails", "Fraud Reports", "Integrity Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an existing marketplace review database or capturing native wallet-signed reviews, Cerulea routes both into one shared reputation record.",
    tracks: [
      {
        title: "Track A: Marketplace Platform Bridging",
        description:
          "For established e-commerce platforms with legacy review systems. Settled orders and existing reviews are translated into purchase-gated on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Marketplace DB", sublabel: "Order & Review Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Purchase Hashing & Gating", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Shared Reputation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Buyer-Signed Reviews",
        description:
          "For wallet-native shoppers and Web3 storefronts. A verified buyer signs each review directly from their wallet and routes it to the reputation layer without a platform intermediary.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Buyer Wallet / dApp", sublabel: "Soulbound Reviewer Identity", icon: Fingerprint, accent: false },
          { label: "Reputation Validators", sublabel: "Gated Review Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Portable Score Record", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a purchase-gated review protocol with soulbound identity, cross-platform scoring, and manipulation detection from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Gating & Scoring Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects marketplace platform engineering benchmarks. Building soulbound reviewer identity, wiring purchase-gating into checkout, and shipping a cross-platform scoring service for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your gating and scoring rules into pre-audited WebAssembly binaries and provisions the shared reputation ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "return-and-refund-fraud-prevention-via-purchase-history-verification",
    icon: Shield,
    eyebrow: "Return Integrity Engine",
    headline1: "Anchor every purchase.",
    headline2: "Stop the refund it never earned.",
    heroDescription:
      "Build a verified purchase and return history that flags suspicious return patterns before a refund is ever processed. The Provenance Notary, Audit Logs, and Compliance Attestations modules anchor each order, delivery confirmation, and return request as a verified event the platform can score.",
    heroCta: "Deploy Return Integrity",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a self-reported refund claim into a verified event chain that exposes abuse before money moves.",
    mechanics: [
      { title: "Anchored Order Events", description: "Seal each purchase, delivery confirmation, and return request as a verified event. The Provenance Notary makes the sequence tamper-evident, so a claim of \"never received\" is checked against a signed delivery proof." },
      { title: "Return Pattern Scoring", description: "Score every claimant against their own history. Audit Logs expose serial returners, wardrobers, and item-swap abusers whose behaviour only becomes visible once returns are aggregated over time." },
      { title: "Pre-Refund Hold", description: "Insert a checkpoint before capital leaves. Suspicious claims are routed to review rather than auto-approved, so the platform stops a fraudulent refund instead of clawing it back later." },
      { title: "Delivery Proof Binding", description: "Bind carrier confirmation to the order. A signed proof of delivery settles \"item not received\" disputes against evidence rather than the customer's word." },
      { title: "Item Identity Match", description: "Detect return-a-different-item fraud. The returned unit's identifier is checked against what was shipped, so a swapped or counterfeit return fails the match at intake." },
      { title: "Compliance Attestation", description: "Give the finance team a defensible record. Compliance Attestations produce an auditable trail for every declined or flagged refund, standing up under chargeback and regulatory review." },
    ],
    lifecycleTitle: "The Return Verification Lifecycle",
    lifecycleSubtitle:
      "Follow a refund request from purchase through delivery, return, and the decision to approve or flag.",
    lifecycleSteps: [
      {
        label: "Purchase Anchor",
        description:
          "An order is placed and paid. The Provenance Notary anchors the order contents, buyer, and value as the immutable start of the return record.",
        icon: Package,
        logFilename: "cerulea_returns.log",
        logLines: [
          { text: "[SYS] Initializing Order Event Manifest...", time: "09:12:04", tone: "default" },
          { text: "[CMD] anchorOrder { id: \"OD_55190\", sku: \"HDPH_X2\", value: 189 }", time: "09:12:04", tone: "primary" },
          { text: "[AUTH] Sealing buyer and payment reference...", time: "09:12:05", tone: "secondary" },
          { text: "[OK] Order OD_55190 anchored at block 5521904.", time: "09:12:05", tone: "success" },
        ],
      },
      {
        label: "Delivery Confirmation",
        description:
          "The carrier confirms delivery. A signed proof is bound to the order, closing off any later claim that the item never arrived.",
        icon: Truck,
        logFilename: "cerulea_returns.log",
        logLines: [
          { text: "[SYS] Carrier callback for OD_55190...", time: "15:47:22", tone: "default" },
          { text: "[CMD] bindDeliveryProof(order: \"OD_55190\", sig: \"0x9fa2\")", time: "15:47:22", tone: "primary" },
          { text: "[SYS] Proof of delivery sealed to order.", time: "15:47:23", tone: "default" },
          { text: "[OK] Delivery verified. Not-received claim blocked.", time: "15:47:23", tone: "success" },
        ],
      },
      {
        label: "Return Request",
        description:
          "The customer files a return. The contract records the reason and cross-checks the claim against the anchored delivery proof and item identity.",
        icon: ScrollText,
        logFilename: "cerulea_returns.log",
        logLines: [
          { text: "[SYS] Return filed for OD_55190, reason: DAMAGED...", time: "11:03:58", tone: "default" },
          { text: "[CMD] openReturn(order: \"OD_55190\", reason: \"DAMAGED\")", time: "11:03:58", tone: "primary" },
          { text: "[AUTH] Matching returned item identifier to shipped SKU...", time: "11:03:59", tone: "secondary" },
          { text: "[OK] Return logged. Awaiting risk score.", time: "11:03:59", tone: "success" },
        ],
      },
      {
        label: "Risk Decision",
        description:
          "Audit Logs score the claimant's history. A clean profile auto-approves the refund, while a suspicious pattern is held for manual review before any payout.",
        icon: Scale,
        logFilename: "cerulea_returns.log",
        logLines: [
          { text: "[SYS] Scoring return pattern for buyer 0x33d1...", time: "11:04:10", tone: "default" },
          { text: "[CMD] scoreClaimant(buyer: \"0x33d1\")", time: "11:04:10", tone: "primary" },
          { text: "[SYS] 9 returns in 30 days, ratio 0.71, flagged...", time: "11:04:11", tone: "error" },
          { text: "[OK] Refund held for review, fraud pattern detected.", time: "11:04:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes return-fraud prevention into modular contracts. Each layer anchors orders, binds delivery proof, scores claim history, and gates the refund without trusting a single self-reported claim.",
    layers: [
      {
        title: "Order Ledger",
        subtitle: "The Event Anchor",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Event Anchor",
          description:
            "The foundational data layer. It records each purchase, delivery, and return as a linked, tamper-evident event, so every refund decision rests on a verified sequence rather than a customer's account of what happened.",
          platformFunction: "Order Provenance",
        },
        codeSnippet:
          "contract OrderLedger {\n  struct Event {\n    bytes32 orderId;\n    uint8 kind;\n    bytes32 proof;\n    uint256 at;\n  }\n\n  mapping(bytes32 => Event[]) public timeline;\n\n  function record(bytes32 id, uint8 kind, bytes32 proof) external onlyGateway {\n    timeline[id].push(Event(id, kind, proof, block.timestamp));\n  }\n}",
        simAction: "Simulate Event Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading order OD_55190 contents...", tone: "default" },
          { text: "Hashing payment and buyer reference...", tone: "default" },
          { text: "Appending purchase event to timeline...", tone: "default" },
          { text: "Writing event to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Order event anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Delivery Oracle",
        subtitle: "The Receipt Proof",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Receipt Proof",
          description:
            "Settles the not-received claim. It binds a carrier-signed proof of delivery to the order, so a refund request premised on non-delivery is checked against cryptographic evidence instead of being taken on trust.",
          platformFunction: "Delivery Verification",
        },
        codeSnippet:
          "function bindDelivery(bytes32 orderId, bytes calldata carrierSig) external {\n    require(verifyCarrier(orderId, carrierSig), \"Bad proof\");\n    delivered[orderId] = true;\n    emit DeliveryProven(orderId, block.timestamp);\n}",
        simAction: "Simulate Delivery Proof",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving carrier callback for OD_55190...", tone: "default" },
          { text: "Verifying carrier signature...", tone: "default" },
          { text: "Binding proof of delivery to order...", tone: "default" },
          { text: "Marking order as delivered...", tone: "default" },
          { text: "[SUCCESS] Not-received claim now blocked.", tone: "success" },
        ],
      },
      {
        title: "Claim Scorer",
        subtitle: "The Pattern Engine",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pattern Engine",
          description:
            "Turns history into a risk score. It aggregates a claimant's return frequency, refund ratio, and reason mix, exposing serial abusers whose individual claims look reasonable but whose pattern does not.",
          platformFunction: "Risk Scoring",
        },
        codeSnippet:
          "function scoreClaimant(address buyer) public view returns (uint256) {\n    Stats storage s = stats[buyer];\n    if (s.orders == 0) return 0;\n    uint256 ratio = (s.returns * 100) / s.orders;\n    return ratio + s.disputes * 5;\n}",
        simAction: "Simulate Risk Score",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading return history for buyer 0x33d1...", tone: "default" },
          { text: "Counting 9 returns across 30 days...", tone: "default" },
          { text: "Computing refund ratio 0.71...", tone: "default" },
          { text: "Weighting prior disputes...", tone: "default" },
          { text: "[SUCCESS] High-risk score returned for review.", tone: "success" },
        ],
      },
      {
        title: "Refund Gate",
        subtitle: "The Payout Checkpoint",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Payout Checkpoint",
          description:
            "Holds money until the claim clears. A refund executes automatically for a low-risk profile but routes to manual review when the score crosses threshold, stopping fraudulent payouts before capital leaves the platform.",
          platformFunction: "Refund Authorization",
        },
        codeSnippet:
          "function authorizeRefund(bytes32 orderId) external returns (bool) {\n    uint256 score = scoreClaimant(buyerOf[orderId]);\n    if (score > riskThreshold) {\n        held[orderId] = true;\n        return false;\n    }\n    _payRefund(orderId);\n    return true;\n}",
        simAction: "Simulate Refund Gate",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Evaluating refund request for OD_55190...", tone: "default" },
          { text: "Reading claimant risk score...", tone: "default" },
          { text: "Score exceeds threshold...", tone: "default" },
          { text: "Routing claim to manual review queue...", tone: "default" },
          { text: "[SUCCESS] Fraudulent refund held before payout.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified return history is a horizontal capability. Here is how different retail operators put the anchored event chain to work.",
    sectors: [
      { icon: Globe, title: "E-Commerce Platforms", description: "Cut refund leakage without punishing honest buyers. Marketplaces route only high-risk claims to review, auto-approving the rest against verified delivery and item proofs.", assetTypes: ["Return Claims", "Delivery Proofs", "Risk Scores"] },
      { icon: Building2, title: "Omnichannel Retailers", description: "Unify returns across web and store. A single anchored history follows the customer, so a serial returner cannot reset their record by switching channels.", assetTypes: ["Cross-Channel Returns", "Store Receipts", "Claimant Profiles"] },
      { icon: Landmark, title: "Payment & Chargeback Teams", description: "Defend disputes with evidence. Compliance Attestations give issuers a signed record of delivery and return handling, reducing friendly-fraud chargeback losses.", assetTypes: ["Chargeback Evidence", "Audit Trails", "Dispute Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an order-management system or capturing carrier and store signals directly, Cerulea routes every return event into one verified record.",
    tracks: [
      {
        title: "Track A: Order-Management Bridging",
        description:
          "For retailers on legacy OMS and payment stacks. Purchases, deliveries, and returns are translated into signed on-chain events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy OMS / ERP", sublabel: "Order & Refund Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Scoring", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Return Integrity Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Carrier & Store Capture",
        description:
          "For delivery partners and store points of sale. Signed delivery confirmations and in-store return scans route directly into the anchored event chain.",
        connectorLabels: ["SIGNED CALLBACK", "STATE EXECUTION"],
        nodes: [
          { label: "Carrier / POS Device", sublabel: "Delivery & Intake Signals", icon: Radio, accent: false },
          { label: "Integrity Validators", sublabel: "Event Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Return Record", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an anchored order-event chain with delivery proofs, claim scoring, and a refund gate from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Return & Risk Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects retail fraud-engineering benchmarks. Anchoring order events, integrating carrier delivery proofs, and building a claim-scoring gate into the refund flow for an average platform takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your return and risk rules into pre-audited WebAssembly binaries and provisions the integrity ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cross-border-e-commerce-customs-duty-pre-calculation",
    icon: Globe,
    eyebrow: "Cross-Border Duty Layer",
    headline1: "Price the duty at checkout.",
    headline2: "Kill the surprise on delivery.",
    heroDescription:
      "Stand up a checkout experience where a customer sees the exact customs duty for an international order upfront, with the amount anchored for customs clearance. Trade Finance Documents, Compliance Attestations, and Invoices and Billing bind verified product classification to a calculation that matches what customs authorities expect.",
    heroCta: "Deploy Duty Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque post-delivery surprise into a verified landed cost the buyer agrees to at checkout.",
    mechanics: [
      { title: "Classified Duty Calc", description: "Compute duty from verified product classification. The contract resolves the HS code and destination rate at checkout, so the quoted amount reflects the same basis customs will apply." },
      { title: "Anchored Landed Cost", description: "Seal the calculation on-chain. Once the buyer accepts, the duty figure and its classification inputs are anchored, giving customs a verifiable reference at clearance." },
      { title: "Trade Document Bundle", description: "Assemble the paperwork automatically. Trade Finance Documents package the commercial invoice, classification, and value declaration into a bundle that travels with the shipment." },
      { title: "Compliance Attestation", description: "Prove the declared value. Compliance Attestations bind the order value and origin to the calculation, reducing the chance of a customs reassessment on arrival." },
      { title: "Unified Billing", description: "Collect duty with the order. Invoices and Billing itemise product, shipping, and duty into a single settled charge, so the buyer pays a complete landed cost once." },
      { title: "Refused-Delivery Reduction", description: "Remove the trigger for rejection. Because the buyer already saw and paid the duty, parcels are no longer refused at the door over an unexpected charge." },
    ],
    lifecycleTitle: "The Landed Cost Lifecycle",
    lifecycleSubtitle:
      "Follow an international order from classification through the anchored duty quote to customs clearance.",
    lifecycleSteps: [
      {
        label: "Product Classification",
        description:
          "The item is matched to a verified HS classification. The contract binds the code and product attributes as the basis for every downstream duty calculation.",
        icon: FileCheck,
        logFilename: "cerulea_customs.log",
        logLines: [
          { text: "[SYS] Initializing Classification Manifest...", time: "08:31:17", tone: "default" },
          { text: "[CMD] classify { sku: \"WTCH_09\", hs: \"9102.11\", origin: \"CH\" }", time: "08:31:17", tone: "primary" },
          { text: "[AUTH] Verifying HS code against product attributes...", time: "08:31:18", tone: "secondary" },
          { text: "[OK] Classification sealed for SKU WTCH_09.", time: "08:31:18", tone: "success" },
        ],
      },
      {
        label: "Duty Calculation",
        description:
          "At checkout the contract resolves the destination duty rate and computes the exact charge on the verified order value, presenting it to the buyer.",
        icon: Scale,
        logFilename: "cerulea_customs.log",
        logLines: [
          { text: "[SYS] Buyer at checkout, destination: DE...", time: "12:05:40", tone: "default" },
          { text: "[CMD] calcDuty(order: \"OD_77410\", dest: \"DE\", value: 640)", time: "12:05:40", tone: "primary" },
          { text: "[SYS] Rate 3.1% resolved, duty 19.84 computed...", time: "12:05:41", tone: "default" },
          { text: "[OK] Landed cost displayed to buyer.", time: "12:05:41", tone: "success" },
        ],
      },
      {
        label: "Anchor & Bundle",
        description:
          "The buyer accepts. The duty figure is anchored and Trade Finance Documents assemble the invoice, classification, and value declaration into a clearance bundle.",
        icon: ScrollText,
        logFilename: "cerulea_customs.log",
        logLines: [
          { text: "[SYS] Buyer accepted landed cost for OD_77410...", time: "12:06:02", tone: "default" },
          { text: "[CMD] anchorDuty(order: \"OD_77410\", amount: 19.84)", time: "12:06:02", tone: "primary" },
          { text: "[AUTH] Bundling invoice and value declaration...", time: "12:06:03", tone: "secondary" },
          { text: "[OK] Clearance bundle sealed, hash on-chain.", time: "12:06:03", tone: "success" },
        ],
      },
      {
        label: "Customs Clearance",
        description:
          "At the border, the authority reads the anchored duty and bundle. The declared amount matches expectation, so the parcel clears without a surprise reassessment.",
        icon: Landmark,
        logFilename: "cerulea_customs.log",
        logLines: [
          { text: "[SYS] Customs query for shipment SHP_77410...", time: "05:52:19", tone: "default" },
          { text: "[CMD] verifyDuty(order: \"OD_77410\")", time: "05:52:19", tone: "primary" },
          { text: "[SYS] Anchored duty 19.84 matches assessment...", time: "05:52:20", tone: "default" },
          { text: "[OK] Consignment cleared, no reassessment.", time: "05:52:20", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes cross-border duty into modular contracts. Each layer classifies the product, computes the charge, anchors the landed cost, and exposes it to customs without a hidden markup.",
    layers: [
      {
        title: "Classification Registry",
        subtitle: "The HS Anchor",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The HS Anchor",
          description:
            "The foundational data layer. It binds each product to a verified harmonised-system code and origin, so the duty basis is fixed to an auditable classification rather than a guess made at the border.",
          platformFunction: "Product Classification",
        },
        codeSnippet:
          "contract ClassificationRegistry {\n  struct Item {\n    bytes8 hsCode;\n    bytes2 origin;\n    bool verified;\n  }\n\n  mapping(bytes32 => Item) public catalog;\n\n  function classify(bytes32 sku, bytes8 hs, bytes2 origin) external onlyBroker {\n    catalog[sku] = Item(hs, origin, true);\n  }\n}",
        simAction: "Simulate Classification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading product attributes for WTCH_09...", tone: "default" },
          { text: "Resolving harmonised-system code 9102.11...", tone: "default" },
          { text: "Binding origin country CH...", tone: "default" },
          { text: "Writing classification to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Verified classification anchored.", tone: "success" },
        ],
      },
      {
        title: "Duty Calculator",
        subtitle: "The Rate Engine",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rate Engine",
          description:
            "Computes the exact charge. It applies the destination duty rate to the verified order value at checkout, producing a landed cost the buyer sees and accepts before the shipment ever moves.",
          platformFunction: "Duty Computation",
        },
        codeSnippet:
          "function calcDuty(bytes32 sku, bytes2 dest, uint256 value) public view returns (uint256) {\n    Item memory it = catalog[sku];\n    require(it.verified, \"Unclassified\");\n    uint256 rate = rateTable[dest][it.hsCode];\n    return (value * rate) / 10000;\n}",
        simAction: "Simulate Duty Calc",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading classification for WTCH_09...", tone: "default" },
          { text: "Resolving Germany rate for HS 9102.11...", tone: "default" },
          { text: "Applying 3.1% to order value 640...", tone: "default" },
          { text: "Computing duty of 19.84...", tone: "default" },
          { text: "[SUCCESS] Landed cost ready for checkout.", tone: "success" },
        ],
      },
      {
        title: "Landed Cost Anchor",
        subtitle: "The Clearance Seal",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Clearance Seal",
          description:
            "Freezes the agreed figure. Once the buyer accepts, the duty amount and its inputs are anchored so customs reads the same number the customer paid, removing the gap that causes surprise charges.",
          platformFunction: "Duty Anchoring",
        },
        codeSnippet:
          "function anchorDuty(bytes32 orderId, uint256 amount, bytes32 bundle) external {\n    require(!sealed[orderId], \"Already sealed\");\n    duties[orderId] = Duty(amount, bundle, block.timestamp);\n    sealed[orderId] = true;\n    emit DutyAnchored(orderId, amount);\n}",
        simAction: "Simulate Duty Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer accepts landed cost for OD_77410...", tone: "default" },
          { text: "Sealing duty amount 19.84...", tone: "default" },
          { text: "Attaching clearance document bundle...", tone: "default" },
          { text: "Writing anchor to ledger...", tone: "default" },
          { text: "[SUCCESS] Duty anchored for customs.", tone: "success" },
        ],
      },
      {
        title: "Customs Window",
        subtitle: "The Authority View",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authority View",
          description:
            "A read-only gateway for the border. It lets a customs authority verify the anchored duty and document bundle for a shipment, clearing the parcel from a matching declaration instead of a manual reassessment.",
          platformFunction: "Customs Verification",
        },
        codeSnippet:
          "function verifyDuty(bytes32 orderId) external view returns (uint256, bytes32) {\n    Duty memory d = duties[orderId];\n    require(sealed[orderId], \"Not sealed\");\n    return (d.amount, d.bundle);\n}",
        simAction: "Simulate Customs Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Customs queries shipment SHP_77410...", tone: "default" },
          { text: "Reading anchored duty and bundle...", tone: "default" },
          { text: "Comparing against assessed value...", tone: "default" },
          { text: "Declaration matches expectation...", tone: "default" },
          { text: "[SUCCESS] Consignment cleared without surprise.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Upfront, anchored landed cost is a horizontal capability. Here is how different cross-border actors put the duty layer to work.",
    sectors: [
      { icon: Globe, title: "International Retailers", description: "Show a complete landed cost at checkout so international buyers commit with confidence. Refused deliveries over surprise duty fall away and cross-border conversion improves.", assetTypes: ["Landed Cost Quotes", "Duty Charges", "Order Bundles"] },
      { icon: Truck, title: "Logistics & Customs Brokers", description: "Receive shipments that arrive pre-classified and pre-paid. Brokers clear parcels against an anchored declaration instead of chasing missing paperwork at the border.", assetTypes: ["Clearance Bundles", "Value Declarations", "Broker Attestations"] },
      { icon: Landmark, title: "Customs Authorities", description: "Verify declared duty from a signed reference. Authorities read the anchored calculation directly, cutting reassessment workload and undervaluation disputes.", assetTypes: ["Duty Declarations", "Audit Trails", "Compliance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a storefront and tax engine or routing broker and customs signals, Cerulea anchors one landed-cost record every party can trust.",
    tracks: [
      {
        title: "Track A: Storefront & Tax-Engine Bridging",
        description:
          "For retailers on existing e-commerce and duty-calculation stacks. Classification and rate data are translated into anchored duty quotes through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Storefront / Tax Engine", sublabel: "Checkout & Rate Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Duty Hashing & Sealing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Landed Cost Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Broker & Customs Access",
        description:
          "For customs brokers and border authorities. Signed clearance queries read the anchored duty and bundle directly from the ledger for verification at the port.",
        connectorLabels: ["SIGNED QUERY", "STATE EXECUTION"],
        nodes: [
          { label: "Broker / Customs Portal", sublabel: "Clearance Systems", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Declaration Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Anchored Duty Record", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a classified duty calculator with anchored landed cost, document bundling, and a customs verification window from scratch requires specialised trade engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Classification & Duty Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects cross-border commerce engineering benchmarks. Integrating classification data, building a destination-rate duty engine, and anchoring a landed cost customs can verify for an average storefront takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your classification and duty rules into pre-audited WebAssembly binaries and provisions the landed-cost ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "marketplace-seller-payout-reconciliation-across-payment-gateways",
    icon: Coins,
    eyebrow: "Seller Settlement Layer",
    headline1: "Reconcile every payout.",
    headline2: "Verify it line by line.",
    heroDescription:
      "Run a unified payout reconciliation that shows a marketplace seller exactly which orders, fees, and refunds make up each deposit across all payment gateways. Invoices and Billing, Audit Logs, and Escrow and Conditional Settlement anchor every balance-affecting event, generating a statement the seller can independently verify.",
    heroCta: "Deploy Payout Reconciliation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque lump-sum deposit into a verifiable statement every seller can trace to the order behind it.",
    mechanics: [
      { title: "Anchored Balance Events", description: "Seal each order, fee, and refund as a verified entry. Audit Logs make every movement affecting a seller's balance tamper-evident, so a payout is the sum of records the seller can inspect." },
      { title: "Cross-Gateway Merge", description: "Unify deposits across gateways. The contract consolidates settlements from every processor into one statement, so a seller stops reconciling several disconnected payout reports by hand." },
      { title: "Line-Item Statement", description: "Break the lump sum apart. Invoices and Billing itemise gross revenue, commission, processing fees, and refunds, so each deposit resolves to its exact contributing lines." },
      { title: "Escrow Release Trace", description: "Show when funds unlocked. Escrow and Conditional Settlement records the condition and timestamp that released each held amount, explaining timing gaps between sale and payout." },
      { title: "Dispute From Evidence", description: "Settle payout disputes against records. A seller contesting a deduction is answered with the anchored fee or refund entry rather than a support agent's summary." },
      { title: "Independent Verification", description: "Let sellers audit without trust. Because entries are on a shared ledger, a seller recomputes their own payout from source events instead of accepting the platform's total." },
    ],
    lifecycleTitle: "The Payout Reconciliation Lifecycle",
    lifecycleSubtitle:
      "Follow a seller's balance from individual orders and fees through escrow release to a verifiable payout statement.",
    lifecycleSteps: [
      {
        label: "Order Settlement",
        description:
          "A buyer order settles across a gateway. The contract anchors gross revenue and the gateway reference as a credit to the seller's balance.",
        icon: Wallet,
        logFilename: "cerulea_payouts.log",
        logLines: [
          { text: "[SYS] Initializing Seller Ledger Manifest...", time: "09:22:11", tone: "default" },
          { text: "[CMD] creditOrder { seller: \"SLR_401\", order: \"OD_9931\", gross: 128.50 }", time: "09:22:11", tone: "primary" },
          { text: "[AUTH] Binding gateway reference STRIPE_ch_88...", time: "09:22:12", tone: "secondary" },
          { text: "[OK] Credit anchored to SLR_401 balance.", time: "09:22:12", tone: "success" },
        ],
      },
      {
        label: "Fee & Refund Debits",
        description:
          "Commission, processing fees, and any refunds are recorded against the same orders. Each debit is anchored with its reason and rate.",
        icon: PieChart,
        logFilename: "cerulea_payouts.log",
        logLines: [
          { text: "[SYS] Applying deductions for order OD_9931...", time: "09:22:15", tone: "default" },
          { text: "[CMD] debit(order: \"OD_9931\", commission: 12.85, fee: 3.72)", time: "09:22:15", tone: "primary" },
          { text: "[SYS] Deductions sealed with rate references.", time: "09:22:16", tone: "default" },
          { text: "[OK] Net for OD_9931 computed at 111.93.", time: "09:22:16", tone: "success" },
        ],
      },
      {
        label: "Escrow Release",
        description:
          "Held funds unlock when their condition clears. Escrow and Conditional Settlement records the release event so the seller sees exactly what moved into the payout window.",
        icon: Lock,
        logFilename: "cerulea_payouts.log",
        logLines: [
          { text: "[SYS] Evaluating escrow conditions for SLR_401...", time: "23:00:04", tone: "default" },
          { text: "[CMD] releaseEscrow(seller: \"SLR_401\", window: \"W_38\")", time: "23:00:04", tone: "primary" },
          { text: "[AUTH] Delivery window elapsed, condition met...", time: "23:00:05", tone: "secondary" },
          { text: "[OK] 42 net entries released into payout W_38.", time: "23:00:05", tone: "success" },
        ],
      },
      {
        label: "Statement Generation",
        description:
          "The payout is assembled and paid. The seller receives a line-item statement they can recompute from the anchored entries, gateway by gateway.",
        icon: FileCheck,
        logFilename: "cerulea_payouts.log",
        logLines: [
          { text: "[SYS] Building payout statement for W_38...", time: "23:00:20", tone: "default" },
          { text: "[CMD] buildStatement(seller: \"SLR_401\", window: \"W_38\")", time: "23:00:20", tone: "primary" },
          { text: "[SYS] Merging 42 orders across 3 gateways...", time: "23:00:21", tone: "default" },
          { text: "[OK] Payout 4,701.16 verifiable line by line.", time: "23:00:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes payout reconciliation into modular contracts. Each layer credits orders, records deductions, releases escrow, and assembles a statement no seller has to take on faith.",
    layers: [
      {
        title: "Seller Ledger",
        subtitle: "The Balance Anchor",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Balance Anchor",
          description:
            "The foundational accounting layer. It records every credit and debit affecting a seller's balance as a linked, tamper-evident entry, so a payout is provably the sum of anchored events rather than a figure the platform asserts.",
          platformFunction: "Balance Accounting",
        },
        codeSnippet:
          "contract SellerLedger {\n  struct Entry {\n    bytes32 orderId;\n    int256 amount;\n    bytes32 kind;\n    bytes32 gateway;\n  }\n\n  mapping(address => Entry[]) public book;\n\n  function post(address seller, bytes32 order, int256 amt, bytes32 kind, bytes32 gw) external onlyGateway {\n    book[seller].push(Entry(order, amt, kind, gw));\n  }\n}",
        simAction: "Simulate Ledger Post",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading settled order OD_9931...", tone: "default" },
          { text: "Posting gross credit 128.50...", tone: "default" },
          { text: "Binding gateway reference...", tone: "default" },
          { text: "Appending entry to seller book...", tone: "default" },
          { text: "[SUCCESS] Balance event anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Fee Engine",
        subtitle: "The Deduction Recorder",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Deduction Recorder",
          description:
            "Makes every deduction explainable. It records commission, processing fees, and refunds against the exact order that incurred them, so a seller sees not just the net but the rate and reason behind each debit.",
          platformFunction: "Fee Accounting",
        },
        codeSnippet:
          "function applyDeductions(bytes32 order, uint256 commission, uint256 fee) external {\n    _post(order, -int256(commission), \"COMMISSION\");\n    _post(order, -int256(fee), \"GATEWAY_FEE\");\n    emit Deducted(order, commission, fee);\n}",
        simAction: "Simulate Deductions",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading order OD_9931 for deductions...", tone: "default" },
          { text: "Recording commission 12.85 at 10%...", tone: "default" },
          { text: "Recording gateway fee 3.72...", tone: "default" },
          { text: "Computing net 111.93...", tone: "default" },
          { text: "[SUCCESS] Deductions sealed with references.", tone: "success" },
        ],
      },
      {
        title: "Escrow Controller",
        subtitle: "The Release Gate",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Release Gate",
          description:
            "Explains payout timing. It holds funds until a settlement condition such as an elapsed delivery window clears, recording the exact release so a seller understands why a sale landed in one payout and not the last.",
          platformFunction: "Conditional Settlement",
        },
        codeSnippet:
          "function releaseEscrow(address seller, bytes32 window) external returns (uint256) {\n    require(conditionMet(seller, window), \"Condition open\");\n    uint256 total = pending[seller][window];\n    released[seller][window] = total;\n    emit Released(seller, window, total);\n    return total;\n}",
        simAction: "Simulate Escrow Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Evaluating escrow window W_38 for SLR_401...", tone: "default" },
          { text: "Checking delivery-window condition...", tone: "default" },
          { text: "Condition met, unlocking held funds...", tone: "default" },
          { text: "Recording release of 42 entries...", tone: "default" },
          { text: "[SUCCESS] Escrow released into payout window.", tone: "success" },
        ],
      },
      {
        title: "Statement Builder",
        subtitle: "The Verifiable Report",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verifiable Report",
          description:
            "Assembles the auditable payout. It merges anchored entries across every gateway into one line-item statement, so a seller can recompute the total from source records rather than trusting a summary figure.",
          platformFunction: "Reconciliation Reporting",
        },
        codeSnippet:
          "function buildStatement(address seller, bytes32 window) external view returns (int256) {\n    Entry[] storage e = released[seller][window].entries;\n    int256 net;\n    for (uint256 i = 0; i < e.length; i++) {\n        net += e[i].amount;\n    }\n    return net;\n}",
        simAction: "Simulate Statement Build",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Gathering released entries for W_38...", tone: "default" },
          { text: "Merging 42 orders across 3 gateways...", tone: "default" },
          { text: "Summing credits and deductions...", tone: "default" },
          { text: "Rendering line-item statement...", tone: "default" },
          { text: "[SUCCESS] Payout 4,701.16 verifiable line by line.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable payout reconciliation is a horizontal capability. Here is how different marketplace actors put the shared seller ledger to work.",
    sectors: [
      { icon: Boxes, title: "Multi-Gateway Marketplaces", description: "Give sellers one statement instead of several. Platforms that route through multiple processors merge every deposit into a single reconciled payout the seller can trace.", assetTypes: ["Payout Statements", "Gateway Settlements", "Fee Schedules"] },
      { icon: Users, title: "Seller & SMB Operators", description: "Let merchants close their books from evidence. A small seller recomputes each deposit against anchored orders and fees, ending manual spreadsheet reconciliation.", assetTypes: ["Seller Balances", "Order Credits", "Refund Debits"] },
      { icon: Landmark, title: "Finance & Audit Teams", description: "Reconcile platform payables with certainty. Finance reads the same anchored ledger the sellers see, cutting disputes and audit effort at close.", assetTypes: ["Audit Trails", "Escrow Records", "Settlement Reports"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging payment processors and an accounting stack or routing native settlement events, Cerulea consolidates them into one verifiable payout ledger.",
    tracks: [
      {
        title: "Track A: Gateway & Accounting Bridging",
        description:
          "For marketplaces on multiple processors and a legacy ledger. Settlements, fees, and refunds are translated into anchored balance entries through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Payment Gateways / ERP", sublabel: "Settlement & Fee Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Entry Hashing & Merging", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Seller Payout Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Settlement Execution",
        description:
          "For on-chain storefronts settling in stablecoins. Each order and fee posts directly to the seller ledger and releases from escrow on condition without an external processor.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Seller Wallet / dApp", sublabel: "On-Chain Settlement", icon: Fingerprint, accent: false },
          { label: "Escrow Validators", sublabel: "Conditional Release", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verifiable Payout Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-gateway seller ledger with fee accounting, conditional escrow, and verifiable statements from scratch requires specialised fintech engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Settlement & Fee Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects marketplace fintech engineering benchmarks. Merging multiple payment gateways, building per-order fee accounting, and shipping conditional escrow with verifiable statements for an average platform takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your settlement and fee rules into pre-audited WebAssembly binaries and provisions the seller payout ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "influencer-affiliate-commission-tracking-across-platforms",
    icon: PieChart,
    eyebrow: "Affiliate Attribution Layer",
    headline1: "Prove the conversion.",
    headline2: "Pay the commission automatically.",
    heroDescription:
      "Stand up an affiliate system where an influencer's earnings from sales across multiple platforms are tracked and paid automatically on verified conversions. The Royalty Standard, Royalty Clearing, and External Data Oracles anchor conversion data to each influencer's unique tracking and settle commissions against every platform's agreed terms.",
    heroCta: "Deploy Affiliate Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn disputed, platform-by-platform attribution into verified conversions that pay commissions on their own.",
    mechanics: [
      { title: "Verified Conversion Feed", description: "Anchor conversions from source. External Data Oracles stream each attributed sale into the contract, so a commission rests on a verified event rather than a platform's private dashboard." },
      { title: "Unified Attribution Keys", description: "Bind every sale to one identity. An influencer's unique tracking resolves consistently across platforms, so the same person is credited whether the sale closed on a marketplace or a brand's own site." },
      { title: "Per-Platform Terms", description: "Encode each platform's rules. The Royalty Standard captures differing rates and attribution windows, applying the correct terms to each conversion instead of a single blunt rate." },
      { title: "Automatic Clearing", description: "Pay without invoicing. Royalty Clearing computes and disburses earnings on verified conversions, so influencers stop chasing brands for statements and payments." },
      { title: "Window Enforcement", description: "Honour attribution windows exactly. A conversion is credited only if it falls inside the platform's agreed window, ending disputes over sales claimed just outside the boundary." },
      { title: "Transparent Earnings", description: "Show the math to both sides. Influencer and brand read the same anchored conversion and commission records, so an earnings figure is reconcilable rather than contested." },
    ],
    lifecycleTitle: "The Commission Lifecycle",
    lifecycleSubtitle:
      "Follow a single promoted sale from a tracked click through verified conversion to an automatically cleared commission.",
    lifecycleSteps: [
      {
        label: "Campaign Registration",
        description:
          "A brand registers a campaign and its per-platform terms. The Royalty Standard anchors the rate, attribution window, and the influencer's unique tracking key.",
        icon: Handshake,
        logFilename: "cerulea_affiliate.log",
        logLines: [
          { text: "[SYS] Initializing Affiliate Campaign Manifest...", time: "10:03:41", tone: "default" },
          { text: "[CMD] registerCampaign { brand: \"BR_22\", rate: 8, window: \"30D\" }", time: "10:03:41", tone: "primary" },
          { text: "[AUTH] Binding influencer tracking key INF_7781...", time: "10:03:42", tone: "secondary" },
          { text: "[OK] Campaign CMP_5540 anchored with terms.", time: "10:03:42", tone: "success" },
        ],
      },
      {
        label: "Conversion Capture",
        description:
          "A follower buys through the influencer's link on one of several platforms. External Data Oracles stream the attributed conversion to the contract.",
        icon: Radio,
        logFilename: "cerulea_affiliate.log",
        logLines: [
          { text: "[SYS] Oracle reporting conversion on PLTFRM_B...", time: "14:29:07", tone: "default" },
          { text: "[CMD] reportConversion(key: \"INF_7781\", order: \"OD_611\", value: 220)", time: "14:29:07", tone: "primary" },
          { text: "[SYS] Attribution key resolved to campaign CMP_5540.", time: "14:29:08", tone: "default" },
          { text: "[OK] Conversion anchored, awaiting window check.", time: "14:29:08", tone: "success" },
        ],
      },
      {
        label: "Window & Terms Check",
        description:
          "The contract confirms the sale fell inside the attribution window and applies the platform's agreed rate to compute the commission.",
        icon: Scale,
        logFilename: "cerulea_affiliate.log",
        logLines: [
          { text: "[SYS] Validating conversion OD_611 against terms...", time: "14:29:12", tone: "default" },
          { text: "[CMD] applyTerms(order: \"OD_611\", campaign: \"CMP_5540\")", time: "14:29:12", tone: "primary" },
          { text: "[AUTH] Sale within 30D window, rate 8% applied...", time: "14:29:13", tone: "secondary" },
          { text: "[OK] Commission 17.60 computed for INF_7781.", time: "14:29:13", tone: "success" },
        ],
      },
      {
        label: "Automatic Clearing",
        description:
          "Royalty Clearing disburses the commission to the influencer's wallet, updating a transparent earnings record both parties can read.",
        icon: Coins,
        logFilename: "cerulea_affiliate.log",
        logLines: [
          { text: "[SYS] Clearing commission for INF_7781...", time: "14:29:18", tone: "default" },
          { text: "[CMD] clear(payee: \"INF_7781\", amount: 17.60)", time: "14:29:18", tone: "primary" },
          { text: "[SYS] Earnings record updated for both parties.", time: "14:29:19", tone: "default" },
          { text: "[OK] Commission paid, no invoice required.", time: "14:29:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes affiliate attribution into modular contracts. Each layer registers terms, verifies conversions, applies windows, and clears commissions without a platform gatekeeping the numbers.",
    layers: [
      {
        title: "Campaign Registry",
        subtitle: "The Terms Anchor",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Terms Anchor",
          description:
            "The foundational agreement layer. It records each platform's rate, attribution window, and the influencer's unique tracking key, so every later conversion is judged against terms both sides accepted up front.",
          platformFunction: "Campaign Terms",
        },
        codeSnippet:
          "contract CampaignRegistry {\n  struct Campaign {\n    address brand;\n    uint16 rateBps;\n    uint32 windowSecs;\n    bytes32 trackingKey;\n  }\n\n  mapping(bytes32 => Campaign) public campaigns;\n\n  function register(bytes32 id, uint16 rate, uint32 window, bytes32 key) external {\n    campaigns[id] = Campaign(msg.sender, rate, window, key);\n  }\n}",
        simAction: "Simulate Campaign Register",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading campaign terms from brand BR_22...", tone: "default" },
          { text: "Setting rate 8% and 30-day window...", tone: "default" },
          { text: "Binding influencer key INF_7781...", tone: "default" },
          { text: "Writing campaign to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Campaign CMP_5540 anchored.", tone: "success" },
        ],
      },
      {
        title: "Conversion Oracle",
        subtitle: "The Attribution Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Attribution Feed",
          description:
            "Brings verified sales on-chain. It ingests attributed conversions from each platform through External Data Oracles and resolves the tracking key to a campaign, so credit rests on a signed feed rather than a private report.",
          platformFunction: "Conversion Verification",
        },
        codeSnippet:
          "function reportConversion(bytes32 key, bytes32 order, uint256 value) external onlyOracle {\n    bytes32 cmp = keyToCampaign[key];\n    require(cmp != bytes32(0), \"Unknown key\");\n    conversions[order] = Conversion(cmp, value, block.timestamp, false);\n    emit ConversionReported(cmp, order, value);\n}",
        simAction: "Simulate Conversion Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Oracle reporting sale on PLTFRM_B...", tone: "default" },
          { text: "Resolving tracking key INF_7781...", tone: "default" },
          { text: "Matching to campaign CMP_5540...", tone: "default" },
          { text: "Anchoring conversion OD_611...", tone: "default" },
          { text: "[SUCCESS] Verified conversion recorded.", tone: "success" },
        ],
      },
      {
        title: "Terms Engine",
        subtitle: "The Window Judge",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Window Judge",
          description:
            "Applies the right rule to the right sale. It confirms a conversion falls inside the campaign's attribution window and applies the correct platform rate, ending disputes over late or misattributed sales.",
          platformFunction: "Commission Calculation",
        },
        codeSnippet:
          "function applyTerms(bytes32 order) public view returns (uint256) {\n    Conversion memory c = conversions[order];\n    Campaign memory cmp = campaigns[c.campaign];\n    require(block.timestamp <= c.at + cmp.windowSecs, \"Out of window\");\n    return (c.value * cmp.rateBps) / 10000;\n}",
        simAction: "Simulate Terms Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading conversion OD_611...", tone: "default" },
          { text: "Checking sale against 30-day window...", tone: "default" },
          { text: "Sale within window, applying 8%...", tone: "default" },
          { text: "Computing commission 17.60...", tone: "default" },
          { text: "[SUCCESS] Commission ready to clear.", tone: "success" },
        ],
      },
      {
        title: "Clearing Engine",
        subtitle: "The Auto Payer",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Payer",
          description:
            "Removes the invoice. Royalty Clearing disburses each computed commission to the influencer and updates a shared earnings record, so both brand and creator read the same reconciled totals.",
          platformFunction: "Commission Clearing",
        },
        codeSnippet:
          "function clear(bytes32 order) external {\n    uint256 amount = applyTerms(order);\n    Conversion storage c = conversions[order];\n    require(!c.paid, \"Already paid\");\n    c.paid = true;\n    _payout(payeeOf[c.campaign], amount);\n    emit Cleared(order, amount);\n}",
        simAction: "Simulate Auto Clearing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing payout for conversion OD_611...", tone: "default" },
          { text: "Confirming commission not yet paid...", tone: "default" },
          { text: "Disbursing 17.60 to INF_7781...", tone: "default" },
          { text: "Updating shared earnings record...", tone: "default" },
          { text: "[SUCCESS] Commission cleared automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified, cross-platform commission clearing is a horizontal capability. Here is how different actors put the shared attribution ledger to work.",
    sectors: [
      { icon: Users, title: "Creators & Influencers", description: "Get paid on proof, not promises. Creators earn from verified conversions across every platform they promote on, with a transparent record instead of chasing brand statements.", assetTypes: ["Conversion Credits", "Earnings Records", "Tracking Keys"] },
      { icon: Building2, title: "Brands & Advertisers", description: "Pay only for attributed sales. Brands settle commissions automatically against anchored conversions and agreed windows, cutting overpayment and reconciliation overhead.", assetTypes: ["Campaign Terms", "Commission Ledgers", "Attribution Reports"] },
      { icon: Globe, title: "Affiliate Networks", description: "Run attribution both sides trust. Networks operate one verified conversion feed across member platforms, reducing disputes and clawbacks between advertisers and publishers.", assetTypes: ["Network Conversions", "Payout Schedules", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging platform analytics and payout rails or routing native wallet-signed conversions, Cerulea settles commissions on one verified attribution record.",
    tracks: [
      {
        title: "Track A: Platform Analytics Bridging",
        description:
          "For brands and networks on existing affiliate tooling. Attributed conversions and terms are translated into anchored campaign and conversion records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Affiliate / Analytics DB", sublabel: "Attribution Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Conversion Hashing & Terms", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Affiliate Clearing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Creator Settlement",
        description:
          "For Web3 storefronts and creator dApps. Oracles feed verified conversions directly to the contract, which clears commissions to creator wallets on-chain.",
        connectorLabels: ["ORACLE FEED", "STATE EXECUTION"],
        nodes: [
          { label: "Creator Wallet / dApp", sublabel: "Tracked Storefronts", icon: Fingerprint, accent: false },
          { label: "Conversion Oracles", sublabel: "Attribution Tallying", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Commission Clearing Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-platform attribution feed with per-platform terms, window enforcement, and automatic clearing from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attribution & Payout Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects affiliate-platform engineering benchmarks. Unifying attribution across platforms, encoding per-platform terms and windows, and building automatic commission clearing for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attribution and payout rules into pre-audited WebAssembly binaries and provisions the clearing ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "dropshipping-supplier-to-customer-fulfillment-verification",
    icon: Truck,
    eyebrow: "Fulfillment Verification Engine",
    headline1: "Prove the supplier shipped.",
    headline2: "Before the customer complains.",
    heroDescription:
      "Build a verified fulfillment record proving a dropshipping supplier actually shipped the ordered product directly to the customer as agreed. Traceability Ledger, Provenance Notary, and Notifications anchor shipment confirmation tied to the customer order, giving the retailer proof without relying on the supplier's self-reporting.",
    heroCta: "Deploy Fulfillment Proofs",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a blind handoff into a verified fulfillment record the retailer can trust without the customer's word.",
    mechanics: [
      { title: "Order-Bound Shipment", description: "Tie each shipment to its order. The Provenance Notary anchors the supplier's dispatch confirmation directly to the customer order, so a retailer sees exactly which order was fulfilled and when." },
      { title: "Supplier Dispatch Proof", description: "Replace self-reporting with evidence. The supplier signs a dispatch record on the Traceability Ledger, so fulfillment rests on a co-signed proof rather than an unverifiable status update." },
      { title: "Live Fulfillment Visibility", description: "Close the retailer's blind spot. Every custody event from dispatch to delivery is visible on the shared ledger, so the retailer learns of a delay from the record, not from an angry customer." },
      { title: "SLA Breach Alerts", description: "Catch failures early. Notifications fire when a supplier misses a dispatch window, letting the retailer intervene before the promised delivery date slips." },
      { title: "Correct-Item Confirmation", description: "Verify what shipped, not just that something did. The dispatched product identifier is bound to the order, so shipping the wrong item is detectable at the source." },
      { title: "Dispute From Record", description: "Settle who is at fault from evidence. A missing-delivery dispute is resolved against the supplier's signed dispatch and the carrier's delivery proof rather than conflicting claims." },
    ],
    lifecycleTitle: "The Fulfillment Lifecycle",
    lifecycleSubtitle:
      "Follow a dropshipped order from the retailer's sale through supplier dispatch to verified customer delivery.",
    lifecycleSteps: [
      {
        label: "Order Routing",
        description:
          "A customer buys from the retailer, who routes the order to the supplier. The contract anchors the order and its assigned supplier as the start of the fulfillment record.",
        icon: Workflow,
        logFilename: "cerulea_fulfillment.log",
        logLines: [
          { text: "[SYS] Initializing Fulfillment Manifest...", time: "08:44:12", tone: "default" },
          { text: "[CMD] routeOrder { order: \"OD_3320\", supplier: \"SUP_18\", sku: \"LMP_44\" }", time: "08:44:12", tone: "primary" },
          { text: "[AUTH] Binding customer address hash to order...", time: "08:44:13", tone: "secondary" },
          { text: "[OK] Order OD_3320 routed to SUP_18.", time: "08:44:13", tone: "success" },
        ],
      },
      {
        label: "Supplier Dispatch",
        description:
          "The supplier ships and signs a dispatch confirmation. The Provenance Notary binds the product identifier and carrier reference to the customer order.",
        icon: Package,
        logFilename: "cerulea_fulfillment.log",
        logLines: [
          { text: "[SYS] Dispatch declared by SUP_18...", time: "13:10:55", tone: "default" },
          { text: "[CMD] confirmDispatch(order: \"OD_3320\", item: \"LMP_44_S91\", carrier: \"DHL\")", time: "13:10:55", tone: "primary" },
          { text: "[SYS] Supplier signature recorded on ledger.", time: "13:10:56", tone: "default" },
          { text: "[OK] Dispatch proof anchored to OD_3320.", time: "13:10:56", tone: "success" },
        ],
      },
      {
        label: "Transit Tracking",
        description:
          "Carrier scans stream to the Traceability Ledger. Notifications alert the retailer if the shipment stalls or a delivery window is at risk.",
        icon: Radio,
        logFilename: "cerulea_fulfillment.log",
        logLines: [
          { text: "[SYS] Carrier scan for OD_3320 at hub FRA...", time: "06:22:39", tone: "default" },
          { text: "[CMD] updateTransit(order: \"OD_3320\", status: \"IN_TRANSIT\")", time: "06:22:39", tone: "primary" },
          { text: "[AUTH] Checking dispatch window against SLA...", time: "06:22:40", tone: "secondary" },
          { text: "[OK] On schedule, no breach alert raised.", time: "06:22:40", tone: "success" },
        ],
      },
      {
        label: "Delivery Verification",
        description:
          "The carrier confirms delivery to the customer. The record closes with a verified fulfillment the retailer can rely on without the customer confirming.",
        icon: ShieldCheck,
        logFilename: "cerulea_fulfillment.log",
        logLines: [
          { text: "[SYS] Delivery callback for OD_3320...", time: "11:48:03", tone: "default" },
          { text: "[CMD] confirmDelivery(order: \"OD_3320\", sig: \"0x71bd\")", time: "11:48:03", tone: "primary" },
          { text: "[SYS] Delivery proof sealed to fulfillment record.", time: "11:48:04", tone: "default" },
          { text: "[OK] Fulfillment verified end to end.", time: "11:48:04", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes dropshipping fulfillment into modular contracts. Each layer routes the order, anchors supplier dispatch, tracks transit, and confirms delivery without trusting a single self-reported status.",
    layers: [
      {
        title: "Order Router",
        subtitle: "The Assignment Anchor",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Assignment Anchor",
          description:
            "The foundational routing layer. It binds a customer order to its assigned supplier and product, so every later dispatch and delivery event ties back to a specific fulfillment obligation the retailer can audit.",
          platformFunction: "Order Routing",
        },
        codeSnippet:
          "contract OrderRouter {\n  struct Job {\n    bytes32 orderId;\n    address supplier;\n    bytes32 sku;\n    uint8 status;\n  }\n\n  mapping(bytes32 => Job) public jobs;\n\n  function route(bytes32 order, address supplier, bytes32 sku) external onlyRetailer {\n    jobs[order] = Job(order, supplier, sku, 0);\n  }\n}",
        simAction: "Simulate Order Routing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading customer order OD_3320...", tone: "default" },
          { text: "Assigning supplier SUP_18...", tone: "default" },
          { text: "Binding product SKU LMP_44...", tone: "default" },
          { text: "Writing job to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Fulfillment obligation anchored.", tone: "success" },
        ],
      },
      {
        title: "Dispatch Notary",
        subtitle: "The Supplier Seal",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Supplier Seal",
          description:
            "Replaces the supplier's word with a signature. It requires the supplier to co-sign a dispatch record binding the shipped item and carrier to the order, so fulfillment is proven rather than merely claimed.",
          platformFunction: "Dispatch Proof",
        },
        codeSnippet:
          "function confirmDispatch(bytes32 order, bytes32 item, bytes32 carrier) external {\n    Job storage j = jobs[order];\n    require(msg.sender == j.supplier, \"Not supplier\");\n    require(item == expectedItem(j.sku), \"Wrong item\");\n    j.status = 1;\n    emit Dispatched(order, item, carrier);\n}",
        simAction: "Simulate Dispatch Proof",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Supplier SUP_18 declaring dispatch...", tone: "default" },
          { text: "Verifying item LMP_44_S91 matches order...", tone: "default" },
          { text: "Recording supplier signature...", tone: "default" },
          { text: "Anchoring dispatch to OD_3320...", tone: "default" },
          { text: "[SUCCESS] Dispatch proof sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Transit Monitor",
        subtitle: "The SLA Watchdog",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The SLA Watchdog",
          description:
            "Gives the retailer live sight of the handoff. It ingests carrier scans and fires a Notification when a dispatch or delivery window is breached, so the retailer acts before the customer is disappointed.",
          platformFunction: "Transit Monitoring",
        },
        codeSnippet:
          "function updateTransit(bytes32 order, uint8 status) external onlyCarrier {\n    Job storage j = jobs[order];\n    j.status = status;\n    if (block.timestamp > slaDeadline[order]) {\n        emit SlaBreached(order, j.supplier);\n    }\n}",
        simAction: "Simulate Transit Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Carrier scan for OD_3320 at hub FRA...", tone: "default" },
          { text: "Updating transit status...", tone: "default" },
          { text: "Comparing elapsed time to SLA deadline...", tone: "default" },
          { text: "Shipment on schedule...", tone: "default" },
          { text: "[SUCCESS] No breach, retailer visibility current.", tone: "success" },
        ],
      },
      {
        title: "Delivery Verifier",
        subtitle: "The Fulfillment Close",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fulfillment Close",
          description:
            "Closes the loop with proof. It binds the carrier's delivery confirmation to the order, producing a verified fulfillment record the retailer relies on independently of what the customer or supplier reports.",
          platformFunction: "Delivery Verification",
        },
        codeSnippet:
          "function confirmDelivery(bytes32 order, bytes calldata carrierSig) external {\n    require(verifyCarrier(order, carrierSig), \"Bad proof\");\n    Job storage j = jobs[order];\n    j.status = 3;\n    emit Fulfilled(order, j.supplier, block.timestamp);\n}",
        simAction: "Simulate Delivery Verify",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving delivery callback for OD_3320...", tone: "default" },
          { text: "Verifying carrier delivery signature...", tone: "default" },
          { text: "Binding proof to fulfillment record...", tone: "default" },
          { text: "Marking order fulfilled...", tone: "default" },
          { text: "[SUCCESS] Fulfillment verified end to end.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified supplier fulfillment is a horizontal capability. Here is how different actors in the dropshipping chain put the shared ledger to work.",
    sectors: [
      { icon: Boxes, title: "Online Retailers", description: "See fulfillment without depending on the supplier. Retailers gain a verified record of dispatch and delivery, so they catch failures early instead of learning from customer complaints.", assetTypes: ["Fulfillment Records", "Dispatch Proofs", "SLA Alerts"] },
      { icon: Truck, title: "Suppliers & 3PLs", description: "Prove performance to win trust. Suppliers demonstrate on-time, correct-item dispatch with co-signed records, strengthening their standing with retail partners.", assetTypes: ["Dispatch Signatures", "Carrier References", "Performance Logs"] },
      { icon: Handshake, title: "Marketplace Operators", description: "Arbitrate disputes from evidence. Operators resolve non-delivery claims against anchored dispatch and delivery proofs, reducing chargebacks and partner conflict.", assetTypes: ["Dispute Records", "Custody Trails", "Fulfillment Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging retailer and supplier systems or capturing carrier scans directly, Cerulea routes every fulfillment event into one shared record.",
    tracks: [
      {
        title: "Track A: Retailer & Supplier Bridging",
        description:
          "For retailers and suppliers on legacy order and warehouse systems. Order routing and dispatch confirmations are translated into signed on-chain events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Retailer OMS / Supplier WMS", sublabel: "Order & Dispatch Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Fulfillment Traceability Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Carrier Scan Capture",
        description:
          "For logistics partners on the ground. Carrier dispatch and delivery scans route directly to the ledger, closing the fulfillment record from the physical handoff.",
        connectorLabels: ["SIGNED CALLBACK", "STATE EXECUTION"],
        nodes: [
          { label: "Carrier Scan Device", sublabel: "Dispatch & Delivery Events", icon: Radio, accent: false },
          { label: "Fulfillment Validators", sublabel: "Custody Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Fulfillment Record", icon: Truck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an order-bound fulfillment ledger with supplier dispatch proofs, SLA monitoring, and delivery verification from scratch requires specialised engineers and long supplier integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Dispatch & Delivery Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects supply-chain integration benchmarks. Binding orders to supplier dispatch, wiring carrier scan feeds, and shipping SLA monitoring with delivery verification for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your dispatch and delivery rules into pre-audited WebAssembly binaries and provisions the fulfillment ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "fresh-produce-traceability-for-food-safety-recall-management",
    icon: Thermometer,
    eyebrow: "Food Safety Recall Engine",
    headline1: "Trace the contamination.",
    headline2: "Recall only the affected stores.",
    heroDescription:
      "Deploy a private produce traceability chain with cold chain monitoring, lot-level store mapping, and automated contamination recall targeting. The Traceability Ledger, Cold Chain Monitoring, and Quality and Recall Ledger modules narrow a recall from an entire product line to the exact affected stores.",
    heroCta: "Deploy Recall Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a blanket, line-wide recall into a surgical action that pulls only the lots that reached affected stores.",
    mechanics: [
      { title: "Lot-Level Mapping", description: "Map every lot to its stores. The Traceability Ledger records which farm lot reached which store, so a contamination event resolves to a precise distribution list rather than a whole product line." },
      { title: "Cold Chain Monitoring", description: "Prove the temperature held. Cold Chain Monitoring anchors sensor readings across transit, so a spoilage or safety event is tied to the exact segment where the chain broke." },
      { title: "Targeted Recall Trigger", description: "Recall with a scalpel, not a hammer. The Quality and Recall Ledger isolates affected lots and their downstream stores in seconds, dispatching a recall only where the risk actually landed." },
      { title: "Origin Isolation", description: "Trace back to the source farm. When contamination surfaces, the ledger identifies the originating lot and every sibling shipment, containing the event at its root." },
      { title: "Waste Reduction", description: "Spare the safe stock. Because only affected lots are pulled, unaffected produce stays on shelves, sharply cutting the food waste that broad recalls create." },
      { title: "Authority Reporting", description: "Give regulators a live view. Food-safety authorities query the recall ledger directly, confirming scope and containment without waiting on manual retailer reports." },
    ],
    lifecycleTitle: "The Recall Lifecycle",
    lifecycleSubtitle:
      "Follow a produce lot from harvest through cold-chain transit to a targeted recall of only the affected stores.",
    lifecycleSteps: [
      {
        label: "Lot Registration",
        description:
          "A farm lot is registered at harvest. The Traceability Ledger anchors the farm, lot identity, and pack date as the origin of every downstream shipment.",
        icon: Leaf,
        logFilename: "cerulea_produce.log",
        logLines: [
          { text: "[SYS] Initializing Produce Lot Manifest...", time: "05:31:40", tone: "default" },
          { text: "[CMD] registerLot { farm: \"GRW_77\", lot: \"LOT_4412\", crop: \"SPINACH\" }", time: "05:31:40", tone: "primary" },
          { text: "[AUTH] Sealing pack date and origin coordinates...", time: "05:31:41", tone: "secondary" },
          { text: "[OK] Lot LOT_4412 anchored at block 6612040.", time: "05:31:41", tone: "success" },
        ],
      },
      {
        label: "Cold Chain Transit",
        description:
          "The lot moves through refrigerated transit. Cold Chain Monitoring streams temperature readings, anchoring any excursion to the responsible segment.",
        icon: Thermometer,
        logFilename: "cerulea_produce.log",
        logLines: [
          { text: "[SYS] Reefer sensor stream for LOT_4412...", time: "09:14:08", tone: "default" },
          { text: "[CMD] logTemp(lot: \"LOT_4412\", c: 3.4, segment: \"DC_TO_ST\")", time: "09:14:08", tone: "primary" },
          { text: "[SYS] Reading within 2C to 5C safe band.", time: "09:14:09", tone: "default" },
          { text: "[OK] Cold chain intact for current segment.", time: "09:14:09", tone: "success" },
        ],
      },
      {
        label: "Store Distribution",
        description:
          "The lot is split and delivered to stores. The ledger maps each carton to its destination store, building the exact distribution graph for the lot.",
        icon: Truck,
        logFilename: "cerulea_produce.log",
        logLines: [
          { text: "[SYS] Distributing LOT_4412 to 18 stores...", time: "12:47:22", tone: "default" },
          { text: "[CMD] mapDistribution(lot: \"LOT_4412\", stores: 18)", time: "12:47:22", tone: "primary" },
          { text: "[AUTH] Binding cartons to store identifiers...", time: "12:47:23", tone: "secondary" },
          { text: "[OK] Lot-to-store map sealed on-chain.", time: "12:47:23", tone: "success" },
        ],
      },
      {
        label: "Targeted Recall",
        description:
          "A contamination test flags the lot. The Quality and Recall Ledger triggers a recall for exactly the 18 affected stores, sparing the rest of the product line.",
        icon: Shield,
        logFilename: "cerulea_produce.log",
        logLines: [
          { text: "[SYS] Contamination flag received for LOT_4412...", time: "16:20:55", tone: "error" },
          { text: "[CMD] triggerRecall(lot: \"LOT_4412\")", time: "16:20:55", tone: "primary" },
          { text: "[SYS] Resolving 18 affected stores from map...", time: "16:20:56", tone: "default" },
          { text: "[OK] Targeted recall dispatched, line intact.", time: "16:20:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes produce recall into modular contracts. Each layer registers lots, monitors the cold chain, maps distribution, and triggers a recall scoped to only the stores at risk.",
    layers: [
      {
        title: "Lot Registry",
        subtitle: "The Origin Anchor",
        icon: Leaf,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Anchor",
          description:
            "The foundational data layer. It mints a unique lot identity at harvest and stores the immutable link to farm, crop, and pack date that every downstream shipment and recall points back to.",
          platformFunction: "Lot Provenance",
        },
        codeSnippet:
          "contract LotRegistry {\n  struct Lot {\n    address grower;\n    bytes32 crop;\n    uint256 packDate;\n    bytes32 geoHash;\n  }\n\n  mapping(bytes32 => Lot) public lots;\n\n  function register(bytes32 id, bytes32 crop, bytes32 geo) external onlyGrower {\n    lots[id] = Lot(msg.sender, crop, block.timestamp, geo);\n  }\n}",
        simAction: "Simulate Lot Register",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading grower credential for GRW_77...", tone: "default" },
          { text: "Sealing pack date and crop type...", tone: "default" },
          { text: "Hashing origin coordinates...", tone: "default" },
          { text: "Writing lot identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Lot LOT_4412 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Cold Chain Monitor",
        subtitle: "The Temperature Seal",
        icon: Thermometer,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Temperature Seal",
          description:
            "Proves safe handling. It anchors reefer sensor readings per transit segment and flags any excursion outside the safe band, tying a spoilage risk to the exact segment where the cold chain broke.",
          platformFunction: "Cold Chain Verification",
        },
        codeSnippet:
          "function logTemp(bytes32 lot, int16 celsius, bytes32 segment) external onlySensor {\n    readings[lot].push(Reading(celsius, segment, block.timestamp));\n    if (celsius < minSafe || celsius > maxSafe) {\n        emit Excursion(lot, segment, celsius);\n    }\n}",
        simAction: "Simulate Temp Log",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading reefer sensor for LOT_4412...", tone: "default" },
          { text: "Recording 3.4C on DC-to-store segment...", tone: "default" },
          { text: "Comparing against 2C to 5C safe band...", tone: "default" },
          { text: "Reading within band...", tone: "default" },
          { text: "[SUCCESS] Cold chain segment verified.", tone: "success" },
        ],
      },
      {
        title: "Distribution Map",
        subtitle: "The Store Graph",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Store Graph",
          description:
            "Builds the recall precision. It records which cartons of a lot reached which stores, so a contamination event resolves to a precise list of destinations instead of an entire product line.",
          platformFunction: "Distribution Mapping",
        },
        codeSnippet:
          "function mapDistribution(bytes32 lot, bytes32[] calldata stores) external onlyDC {\n    for (uint256 i = 0; i < stores.length; i++) {\n        lotStores[lot].push(stores[i]);\n    }\n    emit Distributed(lot, stores.length);\n}",
        simAction: "Simulate Distribution Map",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Splitting LOT_4412 across stores...", tone: "default" },
          { text: "Binding cartons to 18 store identifiers...", tone: "default" },
          { text: "Recording lot-to-store edges...", tone: "default" },
          { text: "Sealing distribution graph...", tone: "default" },
          { text: "[SUCCESS] Store map ready for recall scope.", tone: "success" },
        ],
      },
      {
        title: "Recall Engine",
        subtitle: "The Surgical Trigger",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Surgical Trigger",
          description:
            "Executes the targeted pull. On a contamination flag it resolves the lot's exact store list and dispatches a recall only there, containing the event while unaffected produce stays on shelves.",
          platformFunction: "Recall Execution",
        },
        codeSnippet:
          "function triggerRecall(bytes32 lot) external onlySafetyOfficer {\n    bytes32[] storage stores = lotStores[lot];\n    require(stores.length > 0, \"No distribution\");\n    recalled[lot] = true;\n    emit RecallTargeted(lot, stores.length);\n}",
        simAction: "Simulate Recall Trigger",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Contamination flag received for LOT_4412...", tone: "default" },
          { text: "Resolving affected stores from map...", tone: "default" },
          { text: "Scoping recall to 18 destinations...", tone: "default" },
          { text: "Dispatching targeted recall notices...", tone: "default" },
          { text: "[SUCCESS] Recall executed, product line intact.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Lot-level recall targeting is a horizontal capability. Here is how different food-chain actors put the shared traceability ledger to work.",
    sectors: [
      { icon: Building2, title: "Grocery & FMCG Retailers", description: "Contain recalls to the stores that received the lot. Retailers pull only affected produce, cutting food waste and shopper disruption while meeting safety obligations.", assetTypes: ["Recall Notices", "Store Distribution Maps", "Lot Records"] },
      { icon: Truck, title: "Cold Chain Logistics", description: "Prove the chain held. Carriers anchor temperature readings per segment, isolating liability to the exact leg where an excursion occurred rather than the whole shipment.", assetTypes: ["Temperature Logs", "Transit Segments", "Excursion Alerts"] },
      { icon: Landmark, title: "Food Safety Authorities", description: "Verify scope and containment live. Regulators query the recall ledger directly, confirming which stores were affected and cleared without waiting on manual reports.", assetTypes: ["Audit Trails", "Recall Scopes", "Compliance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging grower and retailer systems or capturing reefer sensor data directly, Cerulea routes every produce event into one shared recall ledger.",
    tracks: [
      {
        title: "Track A: Grower & Retailer Bridging",
        description:
          "For growers, distributors, and retailers on legacy systems. Lot registration and distribution events are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Grower / Retail ERP", sublabel: "Lot & Distribution Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Mapping", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Produce Traceability Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Cold Chain Sensor Capture",
        description:
          "For refrigerated transit and IoT sensors. Reefer temperature readings sign and stream directly to the ledger, anchoring cold-chain integrity per segment.",
        connectorLabels: ["SENSOR SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Reefer IoT Sensor", sublabel: "Temperature Telemetry", icon: Radio, accent: false },
          { label: "Cold Chain Validators", sublabel: "Excursion Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Recall & Quality Record", icon: Thermometer, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a lot-level traceability chain with cold-chain monitoring, store mapping, and targeted recall from scratch requires specialised food-safety engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Traceability & Recall Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects food-supply-chain integration benchmarks. Mapping lots to stores, wiring cold-chain sensor feeds, and building targeted recall logic for an average network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your traceability and recall rules into pre-audited WebAssembly binaries and provisions the produce ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "private-label-manufacturer-quality-compliance-tracking",
    icon: Factory,
    eyebrow: "Quality Compliance Engine",
    headline1: "Verify every batch.",
    headline2: "Without inspecting every batch.",
    heroDescription:
      "Run a verified compliance record for each private label product batch, confirming the contract manufacturer met the retailer's quality standards. Compliance Attestations, Quality and Recall Ledger, and Provenance Notary anchor each manufacturer's checks per batch, giving the retailer a record they can review without inspecting every run themselves.",
    heroCta: "Deploy Compliance Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a batch-by-batch inspection burden into a verifiable compliance record the retailer can audit on demand.",
    mechanics: [
      { title: "Per-Batch Attestation", description: "Anchor a compliance check for every run. Compliance Attestations bind each manufacturer's quality result to a specific batch, so the retailer reviews a signed record instead of trusting a periodic summary." },
      { title: "Standard Encoding", description: "Encode the retailer's spec once. The required tests and thresholds are recorded on-chain, so every batch is measured against the exact same standard across all contract manufacturers." },
      { title: "Provenance Binding", description: "Tie results to the physical batch. The Provenance Notary binds test certificates and material sources to the batch identity, making later substitution or backdating detectable." },
      { title: "Non-Conformance Flagging", description: "Catch failures at the source. A batch that misses a threshold is flagged on the Quality and Recall Ledger before it ships, so defective product is stopped rather than recalled." },
      { title: "Multi-Manufacturer View", description: "Compare compliance across the base. The retailer reads one record spanning every manufacturer and product line, surfacing which partners consistently meet standard and which drift." },
      { title: "Audit Without Inspection", description: "Replace physical audits with queries. Because each batch carries a verifiable attestation, the retailer audits compliance from the ledger instead of dispatching inspectors to every plant." },
    ],
    lifecycleTitle: "The Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a single private label batch from production through quality testing to a verifiable compliance record.",
    lifecycleSteps: [
      {
        label: "Batch Production",
        description:
          "A contract manufacturer produces a batch. The Provenance Notary anchors the batch identity, product line, and material sources as the base of the compliance record.",
        icon: Factory,
        logFilename: "cerulea_compliance.log",
        logLines: [
          { text: "[SYS] Initializing Batch Production Manifest...", time: "07:12:33", tone: "default" },
          { text: "[CMD] openBatch { mfr: \"CM_09\", line: \"SOAP_BAR\", batch: \"B_7741\" }", time: "07:12:33", tone: "primary" },
          { text: "[AUTH] Binding material source lots to batch...", time: "07:12:34", tone: "secondary" },
          { text: "[OK] Batch B_7741 anchored for CM_09.", time: "07:12:34", tone: "success" },
        ],
      },
      {
        label: "Quality Testing",
        description:
          "The manufacturer runs the retailer's required tests. Each result is recorded against the encoded standard for that product line.",
        icon: FlaskConical,
        logFilename: "cerulea_compliance.log",
        logLines: [
          { text: "[SYS] Recording test results for B_7741...", time: "11:05:19", tone: "default" },
          { text: "[CMD] recordTests(batch: \"B_7741\", ph: 9.1, weight: 100.4)", time: "11:05:19", tone: "primary" },
          { text: "[AUTH] Comparing results to encoded spec RS_SOAP...", time: "11:05:20", tone: "secondary" },
          { text: "[OK] All parameters within tolerance.", time: "11:05:20", tone: "success" },
        ],
      },
      {
        label: "Compliance Attestation",
        description:
          "The passing batch receives a signed compliance attestation. The certificate and its test digest are bound to the batch identity on-chain.",
        icon: FileCheck,
        logFilename: "cerulea_compliance.log",
        logLines: [
          { text: "[SYS] Issuing compliance attestation for B_7741...", time: "11:06:02", tone: "default" },
          { text: "[CMD] attest(batch: \"B_7741\", cert: \"QC_CERT_88\")", time: "11:06:02", tone: "primary" },
          { text: "[SYS] Hashing certificate and sealing to batch...", time: "11:06:03", tone: "default" },
          { text: "[OK] Batch B_7741 compliance sealed.", time: "11:06:03", tone: "success" },
        ],
      },
      {
        label: "Retailer Review",
        description:
          "The retailer queries the compliance record for a shipment. Every batch resolves to a verifiable attestation, so acceptance needs no physical inspection.",
        icon: Search,
        logFilename: "cerulea_compliance.log",
        logLines: [
          { text: "[SYS] Retailer compliance query for PO_5510...", time: "14:38:47", tone: "default" },
          { text: "[CMD] verifyShipment(po: \"PO_5510\")", time: "14:38:47", tone: "primary" },
          { text: "[SYS] Resolving attestations for 24 batches...", time: "14:38:48", tone: "default" },
          { text: "[OK] All batches compliant, shipment accepted.", time: "14:38:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes private label compliance into modular contracts. Each layer opens the batch, encodes the standard, records results, and exposes a verifiable attestation without an inspector at every plant.",
    layers: [
      {
        title: "Batch Notary",
        subtitle: "The Production Anchor",
        icon: Factory,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Production Anchor",
          description:
            "The foundational data layer. It mints a batch identity at production and binds its manufacturer, product line, and material sources, so every quality result and attestation ties back to a specific physical run.",
          platformFunction: "Batch Provenance",
        },
        codeSnippet:
          "contract BatchNotary {\n  struct Batch {\n    address manufacturer;\n    bytes32 line;\n    bytes32[] materials;\n    bool attested;\n  }\n\n  mapping(bytes32 => Batch) public batches;\n\n  function open(bytes32 id, bytes32 line, bytes32[] calldata mats) external onlyMfr {\n    batches[id] = Batch(msg.sender, line, mats, false);\n  }\n}",
        simAction: "Simulate Batch Open",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading manufacturer credential CM_09...", tone: "default" },
          { text: "Binding product line SOAP_BAR...", tone: "default" },
          { text: "Linking material source lots...", tone: "default" },
          { text: "Writing batch identity to storage...", tone: "default" },
          { text: "[SUCCESS] Batch B_7741 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Standard Registry",
        subtitle: "The Spec Encoder",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Spec Encoder",
          description:
            "Fixes the bar for every batch. It records the retailer's required tests and thresholds per product line, so all contract manufacturers are judged against one encoded standard rather than a loose specification.",
          platformFunction: "Standard Definition",
        },
        codeSnippet:
          "contract StandardRegistry {\n  struct Spec {\n    bytes32 param;\n    int256 minVal;\n    int256 maxVal;\n  }\n\n  mapping(bytes32 => Spec[]) public specs;\n\n  function setSpec(bytes32 line, Spec[] calldata s) external onlyRetailer {\n    for (uint256 i = 0; i < s.length; i++) specs[line].push(s[i]);\n  }\n}",
        simAction: "Simulate Spec Encode",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading retailer spec for SOAP_BAR...", tone: "default" },
          { text: "Encoding pH range 8.5 to 9.5...", tone: "default" },
          { text: "Encoding weight tolerance...", tone: "default" },
          { text: "Writing standard to registry...", tone: "default" },
          { text: "[SUCCESS] Encoded standard RS_SOAP anchored.", tone: "success" },
        ],
      },
      {
        title: "Test Recorder",
        subtitle: "The Conformance Check",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conformance Check",
          description:
            "Judges results against the standard. It records each batch's test values and compares them to the encoded thresholds, flagging non-conformance before the batch can ship rather than after a customer complaint.",
          platformFunction: "Quality Testing",
        },
        codeSnippet:
          "function recordTests(bytes32 batch, bytes32 line, int256[] calldata vals) external {\n    Spec[] storage s = specs[line];\n    for (uint256 i = 0; i < s.length; i++) {\n        require(vals[i] >= s[i].minVal && vals[i] <= s[i].maxVal, \"Out of spec\");\n    }\n    passed[batch] = true;\n}",
        simAction: "Simulate Test Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording test values for B_7741...", tone: "default" },
          { text: "Comparing pH 9.1 against spec...", tone: "default" },
          { text: "Comparing bar weight against tolerance...", tone: "default" },
          { text: "All parameters within range...", tone: "default" },
          { text: "[SUCCESS] Batch passes conformance check.", tone: "success" },
        ],
      },
      {
        title: "Attestation Vault",
        subtitle: "The Auditable Proof",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auditable Proof",
          description:
            "Turns a pass into evidence. It seals a signed compliance attestation and test digest to the batch, so the retailer verifies quality from an on-chain proof instead of dispatching inspectors to every plant.",
          platformFunction: "Compliance Attestation",
        },
        codeSnippet:
          "function attest(bytes32 batch, bytes32 certHash) external onlyQA {\n    require(passed[batch], \"Not passed\");\n    Batch storage b = batches[batch];\n    b.attested = true;\n    certificates[batch] = certHash;\n    emit Attested(batch, certHash);\n}",
        simAction: "Simulate Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing attestation for B_7741...", tone: "default" },
          { text: "Confirming batch passed all tests...", tone: "default" },
          { text: "Hashing quality certificate QC_CERT_88...", tone: "default" },
          { text: "Sealing attestation to batch...", tone: "default" },
          { text: "[SUCCESS] Compliance proof anchored on-chain.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Per-batch compliance attestation is a horizontal capability. Here is how different actors in private label supply put the shared ledger to work.",
    sectors: [
      { icon: Building2, title: "Private Label Retailers", description: "Audit quality without inspecting every run. Retailers accept shipments against verifiable per-batch attestations, reducing inspection cost while raising assurance across the manufacturer base.", assetTypes: ["Compliance Records", "Batch Attestations", "Encoded Standards"] },
      { icon: Factory, title: "Contract Manufacturers", description: "Prove conformance to win volume. Manufacturers demonstrate consistent, signed compliance per batch, strengthening their standing and shortening acceptance cycles with retail partners.", assetTypes: ["Test Certificates", "Batch Records", "Conformance Logs"] },
      { icon: Landmark, title: "Regulators & Certifiers", description: "Verify safety from evidence. Authorities and certifiers query attestations directly to confirm a product line met standard, replacing document sampling with a live query.", assetTypes: ["Audit Trails", "Certification Records", "Non-Conformance Reports"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging manufacturer quality systems or capturing lab results directly, Cerulea routes every compliance event into one shared attestation ledger.",
    tracks: [
      {
        title: "Track A: Manufacturer System Bridging",
        description:
          "For contract manufacturers on legacy quality and ERP systems. Batch and test records are translated into signed on-chain attestations through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Manufacturer QMS / ERP", sublabel: "Batch & Test Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Result Hashing & Attesting", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Compliance Attestation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Lab & Sensor Capture",
        description:
          "For quality labs and inline sensors. Signed test results route directly to the ledger, binding conformance evidence to the batch at the point of measurement.",
        connectorLabels: ["SIGNED RESULT", "STATE EXECUTION"],
        nodes: [
          { label: "QA Lab / Inline Sensor", sublabel: "Test Measurement Devices", icon: FlaskConical, accent: false },
          { label: "Compliance Validators", sublabel: "Conformance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Batch Compliance Record", icon: Factory, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a per-batch compliance ledger with encoded standards, conformance checks, and auditable attestations from scratch requires specialised quality engineers and long manufacturer integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Standard & Test Rules",
      ruleCount: 45,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects quality-assurance integration benchmarks. Encoding retailer standards, wiring each manufacturer's quality system, and building per-batch attestation for an average supplier base takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your standard and test rules into pre-audited WebAssembly binaries and provisions the compliance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "loyalty-point-redemption-across-multi-brand-retail-chains",
    icon: Gift,
    eyebrow: "Shared Loyalty Layer",
    headline1: "Earn at one brand.",
    headline2: "Redeem across them all.",
    heroDescription:
      "Stand up a shared loyalty point balance customers can earn at one retail brand and redeem at any participating brand in the network. The ERC-20 Token, Wallet Authentication, and Subgraph Indexer modules maintain one balance per customer that every brand can recognize for both earning and redemption.",
    heroCta: "Deploy Loyalty Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn siloed, per-brand point stashes into one shared balance that lifts the value of the whole program.",
    mechanics: [
      { title: "Unified Point Balance", description: "Hold one balance per customer. The ERC-20 Token represents loyalty points as a shared asset, so points earned at one brand are the same points redeemable at another in the group." },
      { title: "Cross-Brand Earning", description: "Accrue everywhere. Any participating brand issues points to the shared balance on a qualifying purchase, so the customer builds value across the whole retail group rather than in isolated pools." },
      { title: "Any-Brand Redemption", description: "Spend everywhere. A customer redeems their balance at checkout with any brand in the network, which burns the points and settles the value, raising the perceived worth of the program." },
      { title: "Wallet-Linked Identity", description: "Bind points to the customer, not the brand. Wallet Authentication ties the balance to a customer identity, so it follows them across brands, apps, and devices." },
      { title: "Real-Time Balance Index", description: "Show a live, consistent balance. The Subgraph Indexer serves each brand the same up-to-date balance, so earning at one store reflects instantly when the customer shops at the next." },
      { title: "Inter-Brand Settlement", description: "Reconcile value between brands. When points earned at one brand are redeemed at another, the ledger records the liability transfer so the group settles fairly between its members." },
    ],
    lifecycleTitle: "The Loyalty Lifecycle",
    lifecycleSubtitle:
      "Follow a customer's points from earning at one brand to redemption at another across the shared network.",
    lifecycleSteps: [
      {
        label: "Customer Enrollment",
        description:
          "A shopper joins the shared program. Wallet Authentication links their identity to a single loyalty balance recognized by every brand in the group.",
        icon: Fingerprint,
        logFilename: "cerulea_loyalty.log",
        logLines: [
          { text: "[SYS] Initializing Loyalty Identity Manifest...", time: "09:03:22", tone: "default" },
          { text: "[CMD] enroll { customer: \"0x51ab\", program: \"GROUP_X\" }", time: "09:03:22", tone: "primary" },
          { text: "[AUTH] Linking wallet to shared balance...", time: "09:03:23", tone: "secondary" },
          { text: "[OK] Customer 0x51ab enrolled, balance 0.", time: "09:03:23", tone: "success" },
        ],
      },
      {
        label: "Earning at Brand A",
        description:
          "The customer buys at Brand A. The contract mints points to their shared balance based on the qualifying spend.",
        icon: Coins,
        logFilename: "cerulea_loyalty.log",
        logLines: [
          { text: "[SYS] Purchase at BRAND_A, spend 84.00...", time: "12:41:08", tone: "default" },
          { text: "[CMD] earn(customer: \"0x51ab\", brand: \"BRAND_A\", points: 84)", time: "12:41:08", tone: "primary" },
          { text: "[SYS] Minting points to shared balance.", time: "12:41:09", tone: "default" },
          { text: "[OK] Balance now 84 points, cross-brand.", time: "12:41:09", tone: "success" },
        ],
      },
      {
        label: "Balance Indexing",
        description:
          "The Subgraph Indexer updates the customer's live balance so every brand in the network sees the same figure the moment it changes.",
        icon: Database,
        logFilename: "cerulea_loyalty.log",
        logLines: [
          { text: "[SYS] Indexing balance update for 0x51ab...", time: "12:41:11", tone: "default" },
          { text: "[CMD] indexBalance(customer: \"0x51ab\")", time: "12:41:11", tone: "primary" },
          { text: "[SYS] Propagating 84-point balance to all brands.", time: "12:41:12", tone: "default" },
          { text: "[OK] Live balance consistent network-wide.", time: "12:41:12", tone: "success" },
        ],
      },
      {
        label: "Redeeming at Brand B",
        description:
          "The customer redeems at Brand B. The contract burns the points, settles the value, and records the inter-brand liability transfer.",
        icon: Gift,
        logFilename: "cerulea_loyalty.log",
        logLines: [
          { text: "[SYS] Redemption at BRAND_B for 84 points...", time: "16:57:44", tone: "default" },
          { text: "[CMD] redeem(customer: \"0x51ab\", brand: \"BRAND_B\", points: 84)", time: "16:57:44", tone: "primary" },
          { text: "[AUTH] Burning points and settling value...", time: "16:57:45", tone: "secondary" },
          { text: "[OK] Redeemed, liability A to B recorded.", time: "16:57:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes shared loyalty into modular contracts. Each layer links identity, mints and burns points, indexes the live balance, and settles value between brands without a single brand owning the pool.",
    layers: [
      {
        title: "Loyalty Token",
        subtitle: "The Shared Asset",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Asset",
          description:
            "The foundational value layer. It represents loyalty points as a single ERC-20 balance recognized by every brand, so points are one shared asset rather than disconnected per-brand ledgers the customer cannot combine.",
          platformFunction: "Point Issuance",
        },
        codeSnippet:
          "contract LoyaltyToken {\n  mapping(address => uint256) public balanceOf;\n\n  function earn(address customer, uint256 points) external onlyBrand {\n    balanceOf[customer] += points;\n    emit Earned(customer, msg.sender, points);\n  }\n\n  function burn(address customer, uint256 points) external onlyBrand {\n    require(balanceOf[customer] >= points, \"Insufficient\");\n    balanceOf[customer] -= points;\n  }\n}",
        simAction: "Simulate Point Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading qualifying spend at BRAND_A...", tone: "default" },
          { text: "Computing 84 points to issue...", tone: "default" },
          { text: "Crediting shared customer balance...", tone: "default" },
          { text: "Emitting cross-brand earn event...", tone: "default" },
          { text: "[SUCCESS] 84 points minted to shared balance.", tone: "success" },
        ],
      },
      {
        title: "Identity Link",
        subtitle: "The Customer Binding",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Customer Binding",
          description:
            "Anchors points to a person. Wallet Authentication binds the balance to a customer identity, so loyalty follows the shopper across brands, apps, and devices instead of resetting at each storefront.",
          platformFunction: "Identity Binding",
        },
        codeSnippet:
          "function enroll(address customer, bytes32 program) external {\n    require(!enrolled[customer], \"Exists\");\n    enrolled[customer] = true;\n    memberProgram[customer] = program;\n    emit Enrolled(customer, program);\n}",
        simAction: "Simulate Identity Link",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Authenticating customer wallet 0x51ab...", tone: "default" },
          { text: "Checking existing enrollment...", tone: "default" },
          { text: "Linking wallet to program GROUP_X...", tone: "default" },
          { text: "Initializing shared balance...", tone: "default" },
          { text: "[SUCCESS] Customer identity linked on-chain.", tone: "success" },
        ],
      },
      {
        title: "Balance Indexer",
        subtitle: "The Live View",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live View",
          description:
            "Keeps every brand in sync. The Subgraph Indexer serves the customer's current balance to all participating brands, so earning at one store is reflected the instant the shopper reaches the next.",
          platformFunction: "Balance Indexing",
        },
        codeSnippet:
          "function balanceView(address customer) external view returns (uint256, bytes32) {\n    return (balanceOf[customer], memberProgram[customer]);\n}",
        simAction: "Simulate Balance Index",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading updated balance for 0x51ab...", tone: "default" },
          { text: "Indexing 84-point balance...", tone: "default" },
          { text: "Propagating to all network brands...", tone: "default" },
          { text: "Confirming consistency...", tone: "default" },
          { text: "[SUCCESS] Live balance served network-wide.", tone: "success" },
        ],
      },
      {
        title: "Settlement Router",
        subtitle: "The Inter-Brand Clearing",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Inter-Brand Clearing",
          description:
            "Keeps the group fair. When points earned at one brand are redeemed at another, it records the liability transfer between them, so the network settles value correctly instead of one brand absorbing another's rewards.",
          platformFunction: "Inter-Brand Settlement",
        },
        codeSnippet:
          "function redeem(address customer, address brand, uint256 points) external {\n    burn(customer, points);\n    address issuer = lastIssuer[customer];\n    liabilities[issuer][brand] += points;\n    emit Redeemed(customer, brand, points);\n}",
        simAction: "Simulate Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Redeeming 84 points at BRAND_B...", tone: "default" },
          { text: "Burning points from shared balance...", tone: "default" },
          { text: "Recording liability BRAND_A to BRAND_B...", tone: "default" },
          { text: "Settling value at checkout...", tone: "default" },
          { text: "[SUCCESS] Redemption cleared across brands.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared cross-brand loyalty is a horizontal capability. Here is how different actors in a retail group put the shared balance to work.",
    sectors: [
      { icon: Building2, title: "Multi-Brand Retail Groups", description: "Lift program value across the portfolio. A group lets customers earn and redeem across every brand it owns, deepening engagement without merging separate loyalty systems by hand.", assetTypes: ["Shared Balances", "Earning Events", "Redemption Records"] },
      { icon: Users, title: "Customers & Members", description: "Get more from every point. Shoppers build one balance across brands and spend it wherever they like in the network, so points no longer expire stranded in a single-brand silo.", assetTypes: ["Point Balances", "Member Identities", "Redemption Rights"] },
      { icon: Handshake, title: "Coalition Partners", description: "Join a loyalty coalition without ceding control. Independent brands settle cross-redemptions on shared rails, sharing customers while keeping their own accounting clean.", assetTypes: ["Liability Ledgers", "Partner Settlements", "Coalition Rules"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging existing loyalty and POS systems or routing native wallet-based points, Cerulea maintains one shared balance every brand can recognize.",
    tracks: [
      {
        title: "Track A: Loyalty & POS Bridging",
        description:
          "For retail groups on legacy loyalty and point-of-sale systems. Earn and redeem events are translated into shared on-chain point movements through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Loyalty / POS Systems", sublabel: "Per-Brand Point Engines", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Point Hashing & Indexing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Loyalty Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Wallet Loyalty",
        description:
          "For app-native and Web3 storefronts. Customers earn and redeem points directly from a wallet, with balances settled on-chain across participating brands.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Customer Wallet / App", sublabel: "Loyalty Identity", icon: Fingerprint, accent: false },
          { label: "Loyalty Validators", sublabel: "Point Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Balance Record", icon: Gift, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared loyalty token with wallet-linked identity, live balance indexing, and inter-brand settlement from scratch requires specialised engineers and long cross-brand integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Earning & Redemption Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects loyalty-platform engineering benchmarks. Unifying per-brand point systems, building live balance indexing, and settling cross-brand redemptions for an average group takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your earning and redemption rules into pre-audited WebAssembly binaries and provisions the shared loyalty ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "product-authentication-and-provenance-for-luxury-goods-handbags-watche",
    icon: Fingerprint,
    eyebrow: "Luxury Provenance Engine",
    headline1: "Give every product a passport.",
    headline2: "Make counterfeits fail on sight.",
    heroDescription:
      "Build a luxury product digital twin network where each item carries an on-chain identity and complete ownership history, so authentication is instant and resale provenance is complete. Cerulea assembles it from the Traceability Ledger, Device Attestation, and ERC-721 NFT modules, binding a physical good to a token a counterfeit cannot clone.",
    heroCta: "Deploy Digital Twins",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a paper certificate of authenticity into a live digital twin that verifies in seconds and travels with the product.",
    mechanics: [
      { title: "On-Chain Digital Twin", description: "Mint a twin for every product. The ERC-721 NFT gives each handbag, watch, or piece of jewelry a unique on-chain identity that carries its full history from manufacture onward." },
      { title: "Device Attestation Tag", description: "Bind the token to the physical item. Device Attestation ties a secure NFC or chip tag to the twin, so authentication reads the real object rather than a photographed or cloned certificate." },
      { title: "Instant Authentication", description: "Verify at the point of sale or resale. A single tap resolves the twin and confirms authenticity in seconds, replacing slow, subjective manual expert inspection." },
      { title: "Complete Ownership History", description: "Carry provenance forever. The Traceability Ledger records manufacture, retail sale, and every ownership transfer, so a buyer sees an unbroken chain rather than an unverifiable claim." },
      { title: "Counterfeit Rejection", description: "Fail the fake at verification. A parallel listing without a matching attested twin cannot authenticate, so counterfeits are rejected at the exact moment a buyer checks." },
      { title: "Brand Revenue Protection", description: "Recapture value lost to fakes. Verified authenticity restores buyer confidence in genuine goods and secondary sales, protecting premium brand revenue and reputation." },
    ],
    lifecycleTitle: "The Provenance Lifecycle",
    lifecycleSubtitle:
      "Follow a luxury product from manufacture through retail sale to instant authentication on a resale platform.",
    lifecycleSteps: [
      {
        label: "Twin Minting",
        description:
          "At manufacture, the product receives an on-chain twin. The ERC-721 NFT anchors its model, serial, and materials as the genesis of its identity.",
        icon: IdCard,
        logFilename: "cerulea_luxury.log",
        logLines: [
          { text: "[SYS] Initializing Product Twin Manifest...", time: "08:02:14", tone: "default" },
          { text: "[CMD] mintTwin { model: \"WATCH_SUB\", serial: \"RX_88213\" }", time: "08:02:14", tone: "primary" },
          { text: "[AUTH] Sealing materials and maker to token...", time: "08:02:15", tone: "secondary" },
          { text: "[OK] Twin TWN_88213 minted at block 7712014.", time: "08:02:15", tone: "success" },
        ],
      },
      {
        label: "Tag Binding",
        description:
          "A secure chip is embedded and attested. Device Attestation binds the physical tag to the twin, so the object and its record become inseparable.",
        icon: Radio,
        logFilename: "cerulea_luxury.log",
        logLines: [
          { text: "[SYS] Attesting secure chip for TWN_88213...", time: "08:05:41", tone: "default" },
          { text: "[CMD] bindTag(twin: \"TWN_88213\", chip: \"NFC_0x9a\")", time: "08:05:41", tone: "primary" },
          { text: "[SYS] Chip attestation signature verified.", time: "08:05:42", tone: "default" },
          { text: "[OK] Physical tag bound to digital twin.", time: "08:05:42", tone: "success" },
        ],
      },
      {
        label: "Retail Sale",
        description:
          "The first buyer purchases at a boutique. The Traceability Ledger records the retail location, date, and transfer of ownership to the customer.",
        icon: Handshake,
        logFilename: "cerulea_luxury.log",
        logLines: [
          { text: "[SYS] Recording retail sale for TWN_88213...", time: "14:33:09", tone: "default" },
          { text: "[CMD] transferOwner(twin: \"TWN_88213\", to: \"0xC1\", loc: \"MILAN_01\")", time: "14:33:09", tone: "primary" },
          { text: "[AUTH] Anchoring retail location and date...", time: "14:33:10", tone: "secondary" },
          { text: "[OK] Ownership transferred to first owner.", time: "14:33:10", tone: "success" },
        ],
      },
      {
        label: "Resale Authentication",
        description:
          "Years later a buyer verifies the item on a resale platform. The tap resolves the twin, confirms the single prior owner, and authenticates instantly.",
        icon: ShieldCheck,
        logFilename: "cerulea_luxury.log",
        logLines: [
          { text: "[SYS] Resale authentication tap for TWN_88213...", time: "11:19:52", tone: "default" },
          { text: "[CMD] authenticate(chip: \"NFC_0x9a\")", time: "11:19:52", tone: "primary" },
          { text: "[SYS] Twin resolved, 1 prior owner, chain intact.", time: "11:19:53", tone: "default" },
          { text: "[OK] Authentic. Parallel counterfeit listing failed.", time: "11:19:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes luxury provenance into modular contracts. Each layer mints the twin, binds the physical tag, tracks ownership, and authenticates on demand without a certificate a counterfeiter can forge.",
    layers: [
      {
        title: "Twin Registry",
        subtitle: "The Product Passport",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Product Passport",
          description:
            "The foundational identity layer. It mints a non-fungible twin at manufacture and stores the immutable link to model, serial, and materials that authentication and resale provenance point back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TwinRegistry {\n  struct Twin {\n    bytes32 model;\n    bytes32 serial;\n    address maker;\n    uint256 mintedAt;\n  }\n\n  mapping(uint256 => Twin) public twins;\n\n  function mintTwin(uint256 id, bytes32 model, bytes32 serial) external onlyMaker {\n    twins[id] = Twin(model, serial, msg.sender, block.timestamp);\n  }\n}",
        simAction: "Simulate Twin Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading maker credential for WATCH_SUB...", tone: "default" },
          { text: "Sealing model and serial RX_88213...", tone: "default" },
          { text: "Recording materials and maker...", tone: "default" },
          { text: "Writing twin identity to storage...", tone: "default" },
          { text: "[SUCCESS] Twin TWN_88213 minted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Attestation Bridge",
        subtitle: "The Physical Anchor",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Physical Anchor",
          description:
            "Fuses object to record. Device Attestation binds a secure chip's cryptographic identity to the twin, so authentication reads a tamper-resistant physical anchor rather than a copyable image or paper document.",
          platformFunction: "Device Attestation",
        },
        codeSnippet:
          "function bindTag(uint256 twinId, bytes32 chipId, bytes calldata attestation) external {\n    require(verifyChip(chipId, attestation), \"Bad attestation\");\n    tagOf[twinId] = chipId;\n    twinOfTag[chipId] = twinId;\n    emit TagBound(twinId, chipId);\n}",
        simAction: "Simulate Tag Bind",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading secure chip NFC_0x9a...", tone: "default" },
          { text: "Verifying chip attestation signature...", tone: "default" },
          { text: "Binding chip to twin TWN_88213...", tone: "default" },
          { text: "Sealing physical-to-digital anchor...", tone: "default" },
          { text: "[SUCCESS] Tag bound, object and twin fused.", tone: "success" },
        ],
      },
      {
        title: "Ownership Chain",
        subtitle: "The Provenance Trail",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Provenance Trail",
          description:
            "Carries the full history. The Traceability Ledger records manufacture, retail sale, and every ownership transfer, so a resale buyer inspects an unbroken chain instead of trusting a seller's account of the item's past.",
          platformFunction: "Ownership Tracking",
        },
        codeSnippet:
          "function transferOwner(uint256 twinId, address to, bytes32 loc) external {\n    require(ownerOf[twinId] == msg.sender, \"Not owner\");\n    history[twinId].push(Transfer(msg.sender, to, loc, block.timestamp));\n    ownerOf[twinId] = to;\n    emit OwnerTransferred(twinId, to);\n}",
        simAction: "Simulate Ownership Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording retail sale at MILAN_01...", tone: "default" },
          { text: "Verifying current owner...", tone: "default" },
          { text: "Appending transfer to history...", tone: "default" },
          { text: "Updating owner of TWN_88213...", tone: "default" },
          { text: "[SUCCESS] Ownership chain extended on-chain.", tone: "success" },
        ],
      },
      {
        title: "Authenticator",
        subtitle: "The Instant Verifier",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Verifier",
          description:
            "Passes the genuine, fails the fake. A tap resolves the chip to its twin and returns authenticity and ownership history in seconds, so a counterfeit with no matching attested twin is rejected at verification.",
          platformFunction: "Authentication",
        },
        codeSnippet:
          "function authenticate(bytes32 chipId) external view returns (bool, uint256) {\n    uint256 twinId = twinOfTag[chipId];\n    if (twinId == 0) return (false, 0);\n    return (true, history[twinId].length);\n}",
        simAction: "Simulate Authentication",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resale buyer taps chip NFC_0x9a...", tone: "default" },
          { text: "Resolving chip to twin TWN_88213...", tone: "default" },
          { text: "Reading 1 prior owner from history...", tone: "default" },
          { text: "Confirming chain intact from genesis...", tone: "default" },
          { text: "[SUCCESS] Authentic, counterfeit listing failed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Digital-twin authentication is a horizontal capability. Here is how different luxury actors put the shared provenance ledger to work.",
    sectors: [
      { icon: Palette, title: "Luxury Maisons", description: "Protect the brand from counterfeits. Houses mint a digital twin for every product, restoring buyer confidence in genuine goods and recapturing revenue lost to fakes.", assetTypes: ["Product Twins", "Attestation Tags", "Provenance Records"] },
      { icon: Handshake, title: "Boutiques & Retailers", description: "Sell with proof. Authorized retailers record the first sale on-chain, giving customers instant authentication and a provenance record that raises resale value.", assetTypes: ["Retail Sales", "Ownership Transfers", "Certificates"] },
      { icon: Search, title: "Authenticators & Resellers", description: "Verify in seconds, not hours. Resale platforms and authentication houses confirm authenticity with a tap instead of subjective expert inspection, scaling trusted secondary trade.", assetTypes: ["Authentication Proofs", "History Trails", "Resale Listings"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging manufacturing and retail systems or capturing chip taps from the field, Cerulea routes every product event into one shared provenance record.",
    tracks: [
      {
        title: "Track A: Manufacturing & Retail Bridging",
        description:
          "For maisons and retailers on legacy production and POS systems. Twin minting and retail sales are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Production / Retail Systems", sublabel: "Serial & Sale Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Twin Hashing & Minting", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Product Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Tap Authentication",
        description:
          "For boutiques, buyers, and resale platforms. Secure chip taps sign and route directly to the ledger, resolving the twin and its history for instant verification.",
        connectorLabels: ["CHIP ATTESTATION", "STATE EXECUTION"],
        nodes: [
          { label: "NFC Tap / Mobile App", sublabel: "Attested Product Tags", icon: Fingerprint, accent: false },
          { label: "Authentication Validators", sublabel: "Twin Resolution", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Authenticity Record", icon: Fingerprint, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a digital-twin network with device attestation, ownership tracking, and instant authentication from scratch requires specialised hardware and blockchain engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Twin & Attestation Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects luxury authentication engineering benchmarks. Minting product twins, integrating secure chip attestation, and building instant authentication with full provenance for an average catalog takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your twin and attestation rules into pre-audited WebAssembly binaries and provisions the provenance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "resale-marketplace-authentication-with-original-purchase-linkage",
    icon: Handshake,
    eyebrow: "Resale Settlement Layer",
    headline1: "Link resale to the receipt.",
    headline2: "Pay the brand its royalty.",
    heroDescription:
      "Run a resale marketplace where each luxury item's authenticity is verified against its original purchase record, with the brand receiving a resale royalty. Provenance Notary, DID and VC Ledger, and ERC-721 NFT link each resold item to its origin and automatically pay the brand a share of every verified secondary sale.",
    heroCta: "Deploy Resale Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an untraceable secondary market into verified resales that protect buyers and pay brands a stake.",
    mechanics: [
      { title: "Original Purchase Linkage", description: "Anchor resale to origin. The Provenance Notary links each listed item to its original purchase record, so a resale buyer verifies the item is the exact one first sold, not a counterfeit copy." },
      { title: "Automatic Brand Royalty", description: "Pay the maker on every resale. The contract routes a set royalty to the brand on each verified secondary sale, giving brands a stake in a market they were previously locked out of." },
      { title: "Seller Credential Proof", description: "Confirm the seller can sell it. The DID and VC Ledger proves the seller holds the item's ownership credential, blocking listings from those who never owned the good." },
      { title: "Counterfeit Screening", description: "Keep fakes out of circulation. An item with no matching original purchase record fails listing, so counterfeits cannot enter the resale marketplace in the first place." },
      { title: "Ownership Transfer", description: "Move the twin with the sale. The ERC-721 NFT transfers to the new owner atomically with payment, so the provenance record stays accurate through every resale." },
      { title: "Brand Market Visibility", description: "Give brands a window on the secondary market. Verified resale data shows brands how their products trade after first sale, informing pricing and product decisions." },
    ],
    lifecycleTitle: "The Resale Lifecycle",
    lifecycleSubtitle:
      "Follow a resold luxury item from listing through authenticity verification to a settled sale with brand royalty.",
    lifecycleSteps: [
      {
        label: "Listing Verification",
        description:
          "A seller lists an item. The Provenance Notary checks it against its original purchase record and the DID and VC Ledger confirms the seller's ownership credential.",
        icon: FileCheck,
        logFilename: "cerulea_resale.log",
        logLines: [
          { text: "[SYS] Initializing Resale Listing Manifest...", time: "09:41:18", tone: "default" },
          { text: "[CMD] listItem { twin: \"TWN_5521\", seller: \"0xB2\" }", time: "09:41:18", tone: "primary" },
          { text: "[AUTH] Matching to original purchase and ownership VC...", time: "09:41:19", tone: "secondary" },
          { text: "[OK] Listing verified, item authentic.", time: "09:41:19", tone: "success" },
        ],
      },
      {
        label: "Buyer Purchase",
        description:
          "A buyer commits to the resale. The contract locks payment and prepares the atomic transfer of the item's twin and the brand royalty.",
        icon: Wallet,
        logFilename: "cerulea_resale.log",
        logLines: [
          { text: "[SYS] Buyer 0xF4 purchasing TWN_5521...", time: "13:22:47", tone: "default" },
          { text: "[CMD] buy(twin: \"TWN_5521\", price: 4200)", time: "13:22:47", tone: "primary" },
          { text: "[SYS] Locking payment, computing 5% royalty.", time: "13:22:48", tone: "default" },
          { text: "[OK] Funds escrowed, awaiting settlement.", time: "13:22:48", tone: "success" },
        ],
      },
      {
        label: "Royalty Split",
        description:
          "At settlement, the contract splits proceeds. The seller receives the sale value less royalty and the brand receives its share automatically.",
        icon: PieChart,
        logFilename: "cerulea_resale.log",
        logLines: [
          { text: "[SYS] Settling resale for TWN_5521...", time: "13:22:52", tone: "default" },
          { text: "[CMD] settle(twin: \"TWN_5521\", royaltyBps: 500)", time: "13:22:52", tone: "primary" },
          { text: "[AUTH] Routing 210 to brand, 3990 to seller...", time: "13:22:53", tone: "secondary" },
          { text: "[OK] Royalty paid to brand automatically.", time: "13:22:53", tone: "success" },
        ],
      },
      {
        label: "Ownership Handover",
        description:
          "The item's twin transfers to the buyer. The provenance record updates so the next resale verifies against a complete, accurate chain.",
        icon: Handshake,
        logFilename: "cerulea_resale.log",
        logLines: [
          { text: "[SYS] Transferring twin TWN_5521 to buyer...", time: "13:22:55", tone: "default" },
          { text: "[CMD] transfer(twin: \"TWN_5521\", to: \"0xF4\")", time: "13:22:55", tone: "primary" },
          { text: "[SYS] Provenance chain extended with resale.", time: "13:22:56", tone: "default" },
          { text: "[OK] Ownership handed over, record intact.", time: "13:22:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes resale settlement into modular contracts. Each layer verifies the listing, proves the seller, splits the royalty, and transfers ownership without a counterfeit slipping in or a brand losing its share.",
    layers: [
      {
        title: "Listing Verifier",
        subtitle: "The Origin Check",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Check",
          description:
            "The foundational gate. It links a listed item to its original purchase record through the Provenance Notary, so only genuine items with a verifiable origin can enter the resale market and counterfeits fail at listing.",
          platformFunction: "Authenticity Verification",
        },
        codeSnippet:
          "contract ListingVerifier {\n  mapping(uint256 => bytes32) public originOf;\n\n  function listItem(uint256 twinId, bytes32 ownershipVC) external returns (bool) {\n    require(originOf[twinId] != bytes32(0), \"No origin record\");\n    require(verifyVC(msg.sender, ownershipVC), \"Bad credential\");\n    listed[twinId] = true;\n    return true;\n  }\n}",
        simAction: "Simulate Listing Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Seller listing item TWN_5521...", tone: "default" },
          { text: "Matching to original purchase record...", tone: "default" },
          { text: "Verifying seller ownership credential...", tone: "default" },
          { text: "Confirming item authentic...", tone: "default" },
          { text: "[SUCCESS] Listing verified and accepted.", tone: "success" },
        ],
      },
      {
        title: "Credential Ledger",
        subtitle: "The Seller Proof",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Seller Proof",
          description:
            "Confirms the right to sell. The DID and VC Ledger checks that the seller holds the item's ownership credential, blocking listings from parties who never owned the good and preventing stolen-item resale.",
          platformFunction: "Ownership Credentials",
        },
        codeSnippet:
          "function verifyVC(address seller, bytes32 vc) public view returns (bool) {\n    Credential memory c = credentials[vc];\n    return c.holder == seller && !c.revoked;\n}",
        simAction: "Simulate Credential Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading ownership credential for 0xB2...", tone: "default" },
          { text: "Confirming holder matches seller...", tone: "default" },
          { text: "Checking revocation status...", tone: "default" },
          { text: "Credential valid...", tone: "default" },
          { text: "[SUCCESS] Seller ownership proven.", tone: "success" },
        ],
      },
      {
        title: "Royalty Splitter",
        subtitle: "The Brand Payout",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Brand Payout",
          description:
            "Gives brands a stake. On settlement it splits proceeds, routing a set royalty to the brand and the remainder to the seller atomically, so the maker earns on every verified resale without manual collection.",
          platformFunction: "Royalty Settlement",
        },
        codeSnippet:
          "function settle(uint256 twinId, uint256 price, uint16 royaltyBps) external {\n    uint256 royalty = (price * royaltyBps) / 10000;\n    _pay(brandOf[twinId], royalty);\n    _pay(sellerOf[twinId], price - royalty);\n    emit Settled(twinId, price, royalty);\n}",
        simAction: "Simulate Royalty Split",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Settling resale of TWN_5521 at 4200...", tone: "default" },
          { text: "Computing 5% royalty of 210...", tone: "default" },
          { text: "Routing 210 to brand...", tone: "default" },
          { text: "Routing 3990 to seller...", tone: "default" },
          { text: "[SUCCESS] Royalty paid to brand automatically.", tone: "success" },
        ],
      },
      {
        title: "Transfer Engine",
        subtitle: "The Provenance Update",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Provenance Update",
          description:
            "Keeps the record true. It transfers the item's ERC-721 twin to the buyer atomically with payment, extending the provenance chain so the next resale verifies against a complete and accurate history.",
          platformFunction: "Ownership Transfer",
        },
        codeSnippet:
          "function transfer(uint256 twinId, address to) external {\n    require(settled[twinId], \"Not settled\");\n    history[twinId].push(Resale(ownerOf[twinId], to, block.timestamp));\n    ownerOf[twinId] = to;\n    emit Transferred(twinId, to);\n}",
        simAction: "Simulate Twin Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming settlement of TWN_5521...", tone: "default" },
          { text: "Appending resale to provenance chain...", tone: "default" },
          { text: "Transferring twin to buyer 0xF4...", tone: "default" },
          { text: "Updating ownership record...", tone: "default" },
          { text: "[SUCCESS] Ownership handed over, record intact.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified resale with brand royalties is a horizontal capability. Here is how different actors in the secondary market put the shared ledger to work.",
    sectors: [
      { icon: Globe, title: "Resale Marketplaces", description: "Keep counterfeits out and buyers protected. Platforms verify each listing against its original purchase, so shoppers trade with confidence in a market cleared of fakes.", assetTypes: ["Verified Listings", "Resale Sales", "Ownership Transfers"] },
      { icon: Palette, title: "Luxury Brands", description: "Earn from the secondary market and see it clearly. Brands collect an automatic royalty on every verified resale and gain visibility into how their products trade after first sale.", assetTypes: ["Resale Royalties", "Secondary Market Data", "Brand Payouts"] },
      { icon: Users, title: "Sellers & Collectors", description: "Sell with proof and get paid instantly. Owners list items backed by verifiable provenance and settle atomically, commanding higher prices for authenticated goods.", assetTypes: ["Ownership Credentials", "Item Listings", "Settlement Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging brand and marketplace systems or routing native wallet-based resales, Cerulea settles every secondary sale against one shared provenance record.",
    tracks: [
      {
        title: "Track A: Brand & Marketplace Bridging",
        description:
          "For brands and platforms on legacy commerce systems. Original purchase records and listings are translated into verified on-chain resales through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Brand / Marketplace Systems", sublabel: "Purchase & Listing Records", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Origin Hashing & Royalty", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Resale Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Wallet Resale",
        description:
          "For wallet-native collectors and Web3 marketplaces. Sellers list and settle resales directly from a wallet, with royalties routed to brands on-chain at the moment of sale.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Seller Wallet / dApp", sublabel: "Ownership Credentials", icon: Fingerprint, accent: false },
          { label: "Settlement Validators", sublabel: "Royalty Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Resale Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a resale marketplace with original-purchase verification, credential checks, and automatic brand royalties from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Verification & Royalty Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects marketplace engineering benchmarks. Linking resales to original purchases, verifying ownership credentials, and building automatic royalty settlement for an average platform takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your verification and royalty rules into pre-audited WebAssembly binaries and provisions the resale ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "limited-edition-product-allocation-and-anti-scalping-verification",
    icon: Ticket,
    eyebrow: "Fair Allocation Engine",
    headline1: "One drop, one buyer.",
    headline2: "Lock the scalpers out.",
    heroDescription:
      "Deploy a verified allocation system for limited edition product drops, ensuring each verified customer can purchase only their allotted quantity. Cerulea assembles it from the DID and VC Ledger, Wallet Authentication, and ERC-721 NFT modules, enforcing a one-purchase-per-verified-identity limit that makes bulk scalping far harder.",
    heroCta: "Deploy Allocation Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a bot-dominated free-for-all into a verified allocation where genuine customers get a fair shot.",
    mechanics: [
      { title: "Verified Identity Gate", description: "Admit real people, not bots. The DID and VC Ledger requires each entrant to prove a unique human identity before the drop, so automated accounts cannot flood the queue." },
      { title: "One-Per-Identity Limit", description: "Cap purchases per person. The contract enforces the allotted quantity per verified identity, so a single scalper cannot sweep stock across dozens of throwaway accounts." },
      { title: "Wallet-Bound Allocation", description: "Tie the entitlement to the buyer. Wallet Authentication binds an allocation slot to a verified wallet, so the right to purchase cannot be resold or transferred before the drop." },
      { title: "Sybil Resistance", description: "Defeat identity multiplication. Because entitlement rests on a human-unique credential rather than an email or IP, the classic scalper tactic of spinning up many accounts stops working." },
      { title: "Provable Fair Draw", description: "Allocate oversubscribed drops transparently. When demand exceeds supply, an on-chain draw assigns slots verifiably, so customers trust the outcome rather than suspecting insider access." },
      { title: "Traceable Ownership", description: "Follow the product after the drop. The ERC-721 NFT records who received each unit, so a brand sees whether limited stock reached genuine fans or flipped straight to resale." },
    ],
    lifecycleTitle: "The Allocation Lifecycle",
    lifecycleSubtitle:
      "Follow a limited drop from identity verification through fair allocation to a purchase locked to one verified buyer.",
    lifecycleSteps: [
      {
        label: "Identity Verification",
        description:
          "A customer registers for the drop. The DID and VC Ledger issues a human-unique credential and Wallet Authentication binds it to their wallet.",
        icon: Fingerprint,
        logFilename: "cerulea_allocation.log",
        logLines: [
          { text: "[SYS] Initializing Drop Identity Manifest...", time: "10:00:11", tone: "default" },
          { text: "[CMD] verifyEntrant { wallet: \"0x9d\", type: \"HUMAN_UNIQUE\" }", time: "10:00:11", tone: "primary" },
          { text: "[AUTH] Issuing credential and binding wallet...", time: "10:00:12", tone: "secondary" },
          { text: "[OK] Entrant 0x9d verified for drop DR_88.", time: "10:00:12", tone: "success" },
        ],
      },
      {
        label: "Fair Allocation",
        description:
          "The drop opens oversubscribed. The contract runs a provable on-chain draw, assigning one allocation slot per verified identity.",
        icon: Scale,
        logFilename: "cerulea_allocation.log",
        logLines: [
          { text: "[SYS] Drop DR_88 oversubscribed 9 to 1...", time: "12:00:00", tone: "default" },
          { text: "[CMD] runDraw(drop: \"DR_88\", supply: 500)", time: "12:00:00", tone: "primary" },
          { text: "[SYS] Assigning slots by verifiable random draw.", time: "12:00:01", tone: "default" },
          { text: "[OK] 500 slots allocated, one per identity.", time: "12:00:01", tone: "success" },
        ],
      },
      {
        label: "Gated Purchase",
        description:
          "An allocated customer buys. The contract checks the identity limit, rejects any second attempt, and mints the product to the verified wallet.",
        icon: Lock,
        logFilename: "cerulea_allocation.log",
        logLines: [
          { text: "[SYS] Purchase attempt from 0x9d for DR_88...", time: "12:04:37", tone: "default" },
          { text: "[CMD] purchase(drop: \"DR_88\", wallet: \"0x9d\")", time: "12:04:37", tone: "primary" },
          { text: "[AUTH] Confirming allocation and one-per-identity limit...", time: "12:04:38", tone: "secondary" },
          { text: "[OK] Purchase allowed, limit enforced.", time: "12:04:38", tone: "success" },
        ],
      },
      {
        label: "Ownership Record",
        description:
          "The product mints to the buyer as an ERC-721 twin. The brand gains a traceable record of who received each limited unit.",
        icon: IdCard,
        logFilename: "cerulea_allocation.log",
        logLines: [
          { text: "[SYS] Minting limited unit to 0x9d...", time: "12:04:40", tone: "default" },
          { text: "[CMD] mintUnit(drop: \"DR_88\", to: \"0x9d\", edition: 211)", time: "12:04:40", tone: "primary" },
          { text: "[SYS] Recording owner for edition 211 of 500.", time: "12:04:41", tone: "default" },
          { text: "[OK] Unit delivered, ownership traceable.", time: "12:04:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fair allocation into modular contracts. Each layer verifies identity, draws slots, gates the purchase, and records ownership without bots sweeping the drop.",
    layers: [
      {
        title: "Identity Gate",
        subtitle: "The Human Proof",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Human Proof",
          description:
            "The foundational gate. It requires each entrant to prove a unique human identity through the DID and VC Ledger bound to a wallet, so bots and duplicate accounts cannot enter a limited drop at scale.",
          platformFunction: "Identity Verification",
        },
        codeSnippet:
          "contract IdentityGate {\n  mapping(bytes32 => mapping(address => bool)) public verified;\n\n  function verifyEntrant(bytes32 drop, address wallet, bytes32 vc) external onlyIssuer {\n    require(isHumanUnique(vc), \"Not unique\");\n    verified[drop][wallet] = true;\n    emit Verified(drop, wallet);\n  }\n}",
        simAction: "Simulate Identity Verify",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading entrant credential for 0x9d...", tone: "default" },
          { text: "Confirming human-unique proof...", tone: "default" },
          { text: "Binding credential to wallet...", tone: "default" },
          { text: "Marking entrant verified for DR_88...", tone: "default" },
          { text: "[SUCCESS] Verified entrant admitted to drop.", tone: "success" },
        ],
      },
      {
        title: "Allocation Draw",
        subtitle: "The Fair Assigner",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fair Assigner",
          description:
            "Distributes scarce stock transparently. For an oversubscribed drop it assigns one slot per verified identity through a verifiable random draw, so customers trust the outcome instead of suspecting insider access.",
          platformFunction: "Slot Allocation",
        },
        codeSnippet:
          "function runDraw(bytes32 drop, uint256 supply) external onlyOperator {\n    address[] storage pool = entrants[drop];\n    uint256 seed = verifiableRandom(drop);\n    for (uint256 i = 0; i < supply && i < pool.length; i++) {\n        uint256 pick = uint256(keccak256(abi.encode(seed, i))) % pool.length;\n        allocated[drop][pool[pick]] = true;\n    }\n}",
        simAction: "Simulate Allocation Draw",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verified entrant pool for DR_88...", tone: "default" },
          { text: "Drawing verifiable random seed...", tone: "default" },
          { text: "Assigning 500 slots across identities...", tone: "default" },
          { text: "Recording allocation results...", tone: "default" },
          { text: "[SUCCESS] Slots allocated, one per identity.", tone: "success" },
        ],
      },
      {
        title: "Purchase Limiter",
        subtitle: "The One-Per Lock",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The One-Per Lock",
          description:
            "Enforces the fair-share rule. It confirms a buyer holds an allocation and has not already purchased, rejecting any second attempt, so a scalper cannot accumulate stock across accounts or repeat buys.",
          platformFunction: "Purchase Gating",
        },
        codeSnippet:
          "function purchase(bytes32 drop, address wallet) external {\n    require(allocated[drop][wallet], \"No allocation\");\n    require(!bought[drop][wallet], \"Limit reached\");\n    bought[drop][wallet] = true;\n    _mintUnit(drop, wallet);\n}",
        simAction: "Simulate Purchase Gate",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Purchase attempt from 0x9d for DR_88...", tone: "default" },
          { text: "Confirming allocation held...", tone: "default" },
          { text: "Checking one-per-identity limit...", tone: "default" },
          { text: "No prior purchase found...", tone: "default" },
          { text: "[SUCCESS] Purchase allowed within limit.", tone: "success" },
        ],
      },
      {
        title: "Edition Registry",
        subtitle: "The Ownership Trail",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ownership Trail",
          description:
            "Records where the stock went. It mints each limited unit as an ERC-721 twin to its verified buyer, giving the brand a traceable record of whether the drop reached genuine fans or flowed to resellers.",
          platformFunction: "Ownership Recording",
        },
        codeSnippet:
          "function mintUnit(bytes32 drop, address to, uint256 edition) internal {\n    uint256 tokenId = uint256(keccak256(abi.encode(drop, edition)));\n    ownerOf[tokenId] = to;\n    editions[drop].push(tokenId);\n    emit UnitMinted(drop, to, edition);\n}",
        simAction: "Simulate Unit Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Minting edition 211 of 500 to 0x9d...", tone: "default" },
          { text: "Assigning unique token identity...", tone: "default" },
          { text: "Recording owner of limited unit...", tone: "default" },
          { text: "Appending to edition registry...", tone: "default" },
          { text: "[SUCCESS] Unit delivered, ownership traceable.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Identity-verified fair allocation is a horizontal capability. Here is how different actors around limited drops put the shared ledger to work.",
    sectors: [
      { icon: Palette, title: "Brands & Manufacturers", description: "Get limited stock into genuine hands. Brands run drops with a one-per-identity limit, so a launch builds loyalty among real customers instead of enriching bots and scalpers.", assetTypes: ["Drop Allocations", "Edition Records", "Buyer Identities"] },
      { icon: Globe, title: "Sneaker & Collectible Platforms", description: "Run drops customers trust. Platforms replace bot-dominated launches with verified allocation and a provable draw, restoring fairness to high-demand releases.", assetTypes: ["Allocation Slots", "Fair Draws", "Ownership Twins"] },
      { icon: Users, title: "Fans & Collectors", description: "Get a fair shot at the drop. Genuine buyers verify once and enter on equal footing, no longer beaten to checkout by automated resale operations.", assetTypes: ["Verified Entries", "Purchase Rights", "Owned Editions"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an existing commerce platform or running a native wallet-based drop, Cerulea enforces verified allocation on one shared record.",
    tracks: [
      {
        title: "Track A: Commerce Platform Bridging",
        description:
          "For brands and retailers on legacy e-commerce systems. Entrant verification and allocation are translated into gated on-chain purchases through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Commerce / Drop Platform", sublabel: "Checkout & Queue Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Identity Hashing & Gating", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Allocation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Wallet Drop",
        description:
          "For Web3 storefronts and collectible dApps. Verified customers enter and purchase directly from a wallet, with allocation and one-per-identity limits enforced on-chain.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Customer Wallet / dApp", sublabel: "Verified Drop Identity", icon: Fingerprint, accent: false },
          { label: "Allocation Validators", sublabel: "Fair Draw Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Allocation Record", icon: Ticket, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an identity-gated allocation system with Sybil resistance, a provable fair draw, and one-per-identity purchase limits from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Allocation & Limit Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects drop-platform engineering benchmarks. Building human-unique verification, a provable allocation draw, and one-per-identity purchase gating for an average launch takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your allocation and limit rules into pre-audited WebAssembly binaries and provisions the allocation ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const retailConsumerGoodsItems: ExtraCaseItem[] = [
  {
    label: "Seller reputation and review integrity across marketplace platforms",
    href: "/solutions/use-case/seller-reputation-and-review-integrity-across-marketplace-platforms",
    description: "Purchase-gated reviews with portable, operator-proof scores.",
    icon: ShieldCheck,
    category: "DAPPS",
    tags: ["Retail", "Marketplace"],
    industry: INDUSTRY,
  },
  {
    label: "Return and refund fraud prevention via purchase history verification",
    href: "/solutions/use-case/return-and-refund-fraud-prevention-via-purchase-history-verification",
    description: "Verified purchase history flags suspicious returns pre-refund.",
    icon: Shield,
    category: "ENTERPRISE",
    tags: ["Retail", "Fraud Prevention"],
    industry: INDUSTRY,
  },
  {
    label: "Cross-border e-commerce customs duty pre-calculation",
    href: "/solutions/use-case/cross-border-e-commerce-customs-duty-pre-calculation",
    description: "Exact customs duty anchored upfront at checkout.",
    icon: Globe,
    category: "ENTERPRISE",
    tags: ["Retail", "Cross-Border"],
    industry: INDUSTRY,
  },
  {
    label: "Marketplace seller payout reconciliation across payment gateways",
    href: "/solutions/use-case/marketplace-seller-payout-reconciliation-across-payment-gateways",
    description: "Line-by-line payout reconciliation sellers can verify.",
    icon: Coins,
    category: "SME",
    tags: ["Retail", "Payments"],
    industry: INDUSTRY,
  },
  {
    label: "Influencer affiliate commission tracking across platforms",
    href: "/solutions/use-case/influencer-affiliate-commission-tracking-across-platforms",
    description: "Verified conversions pay affiliate commissions automatically.",
    icon: PieChart,
    category: "DAPPS",
    tags: ["Retail", "Marketing"],
    industry: INDUSTRY,
  },
  {
    label: "Dropshipping supplier-to-customer fulfillment verification",
    href: "/solutions/use-case/dropshipping-supplier-to-customer-fulfillment-verification",
    description: "Verified proof a supplier shipped to the customer.",
    icon: Truck,
    category: "SME",
    tags: ["Retail", "Supply Chain"],
    industry: INDUSTRY,
  },
  {
    label: "Fresh produce traceability for food safety recall management",
    href: "/solutions/use-case/fresh-produce-traceability-for-food-safety-recall-management",
    description: "Lot-level traceability narrows recalls to affected stores.",
    icon: Thermometer,
    category: "ENTERPRISE",
    tags: ["Retail", "Food Safety"],
    industry: INDUSTRY,
  },
  {
    label: "Private label manufacturer quality compliance tracking",
    href: "/solutions/use-case/private-label-manufacturer-quality-compliance-tracking",
    description: "Verified per-batch quality compliance for private label.",
    icon: Factory,
    category: "ENTERPRISE",
    tags: ["Retail", "Quality"],
    industry: INDUSTRY,
  },
  {
    label: "Loyalty point redemption across multi-brand retail chains",
    href: "/solutions/use-case/loyalty-point-redemption-across-multi-brand-retail-chains",
    description: "One loyalty balance earned and redeemed across brands.",
    icon: Gift,
    category: "ENTERPRISE",
    tags: ["Retail", "Loyalty"],
    industry: INDUSTRY,
  },
  {
    label: "Product authentication and provenance for luxury goods (handbags, watches, jewelry)",
    href: "/solutions/use-case/product-authentication-and-provenance-for-luxury-goods-handbags-watche",
    description: "On-chain digital twins verify luxury authenticity instantly.",
    icon: Fingerprint,
    category: "ENTERPRISE",
    tags: ["Retail", "Luxury"],
    industry: INDUSTRY,
  },
  {
    label: "Resale marketplace authentication with original purchase linkage",
    href: "/solutions/use-case/resale-marketplace-authentication-with-original-purchase-linkage",
    description: "Resale items verified against original purchase, brand royalty paid.",
    icon: Handshake,
    category: "DAPPS",
    tags: ["Retail", "Resale"],
    industry: INDUSTRY,
  },
  {
    label: "Limited edition product allocation and anti-scalping verification",
    href: "/solutions/use-case/limited-edition-product-allocation-and-anti-scalping-verification",
    description: "Identity-verified allocation caps scalpers on limited drops.",
    icon: Ticket,
    category: "DAPPS",
    tags: ["Retail", "Anti-Fraud"],
    industry: INDUSTRY,
  },
]
