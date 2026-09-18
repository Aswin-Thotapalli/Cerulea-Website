import type { CaseEntry } from "@/types/case"
import type { ExtraCaseItem } from "../usecases-extra"
import {
  MdEco as Leaf,
  MdLocalShipping as Truck,
  MdSearch as Search,
  MdFactCheck as FileCheck,
  MdFingerprint as Fingerprint,
  MdStorage as Database,
  MdHub as Network,
  MdAccountBalance as Landmark,
  MdApartment as Building2,
  MdDns as Server,
  MdSchema as Workflow,
  MdPublic as Globe,
} from "react-icons/md"

const INDUSTRY = "Agriculture & Food Tech"

export const agricultureCases: CaseEntry[] = [
  {
    slug: "farm-to-retail-crop-traceability-across-multiple-intermediaries",
    icon: Search,
    eyebrow: "Agricultural Provenance Engine",
    headline1: "Trace every harvest.",
    headline2: "From farm to shelf.",
    heroDescription:
      "Record every custody transfer from the field to the retail shelf on a private consortium network. Farmers, aggregators, processors, and retailers write to one shared Traceability Ledger, so origin claims rest on cryptographic evidence rather than paper.",
    heroCta: "Deploy Traceability Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Transform a fragmented paper trail into a single, tamper-evident record of custody.",
    mechanics: [
      { title: "Shared Custody Ledger", description: "Replace disconnected spreadsheets. Every farmer, aggregator, and retailer writes each transfer of custody to one consortium ledger, so a single version of the truth follows the produce from field to shelf." },
      { title: "Provenance Notary", description: "Anchor each batch at its origin. The Provenance Notary module binds a harvest batch to its farm, its grade, and its lot identity, making later substitution or dilution mathematically detectable." },
      { title: "Consumer QR Verification", description: "Expose the record to the end buyer. A public verification layer resolves a carton QR code to its full journey, so a shopper or an importing authority confirms origin without an account." },
      { title: "Batch-Level Recall", description: "Collapse recall windows. When contamination surfaces, the ledger isolates the exact affected batch and every downstream custodian in seconds, instead of pulling an entire product line." },
      { title: "Dispute Resolution", description: "Settle origin disputes from evidence. Each transfer is co-signed by both parties on-chain, so a contested delivery is resolved against a signed record rather than two conflicting invoices." },
      { title: "Export Authority Access", description: "Give regulators a read-only window. Export and food-safety authorities query the consortium ledger directly, clearing consignments from verified provenance instead of physical document checks." },
    ],
    lifecycleTitle: "The Traceability Lifecycle",
    lifecycleSubtitle:
      "Follow a single harvest batch as it moves through every intermediary and is finally verified by the consumer.",
    lifecycleSteps: [
      {
        label: "Batch Registration",
        description:
          "A farmer registers a harvest batch at the field. The contract anchors the farm, cultivar, harvest date, and quantity as the immutable origin of the chain.",
        icon: Leaf,
        logFilename: "cerulea_agritrace.log",
        logLines: [
          { text: "[SYS] Initializing Harvest Batch Manifest...", time: "06:14:20", tone: "default" },
          { text: "[CMD] registerBatch { farm: \"KA_2291\", crop: \"MANGO_ALPHONSO\", qty: 4200 }", time: "06:14:20", tone: "primary" },
          { text: "[AUTH] Verifying farmer credential and geo-coordinates...", time: "06:14:21", tone: "secondary" },
          { text: "[OK] Batch BATCH_88421 anchored at block 4410233.", time: "06:14:21", tone: "success" },
        ],
      },
      {
        label: "Custody Transfer",
        description:
          "The batch moves to an aggregator and then a processor. Each handoff lands in the receiver's queue, who co-signs the declared weight and grade before the batch advances.",
        icon: Truck,
        logFilename: "cerulea_agritrace.log",
        logLines: [
          { text: "[SYS] Handoff pending acceptance at Aggregator_0x41...", time: "09:02:55", tone: "default" },
          { text: "[CMD] acceptCustody(BATCH_88421, weight: 4185, grade: \"A\")", time: "09:03:01", tone: "primary" },
          { text: "[SYS] Co-signature recorded from both parties.", time: "09:03:01", tone: "default" },
          { text: "[OK] Custody transferred. Chain length now 3 hops.", time: "09:03:02", tone: "success" },
        ],
      },
      {
        label: "Grade & Certificate Anchor",
        description:
          "The processor attaches quality grades and the export certificate set. The Produce Grades and Certificates module binds each document to the batch by its digest.",
        icon: FileCheck,
        logFilename: "cerulea_agritrace.log",
        logLines: [
          { text: "[SYS] Anchoring certificate bundle for BATCH_88421...", time: "13:40:10", tone: "default" },
          { text: "[CMD] anchorDocs([\"PHYTO_CERT\", \"GRADE_SHEET\"])", time: "13:40:10", tone: "primary" },
          { text: "[AUTH] Hashing documents (SHA-256) and sealing to batch...", time: "13:40:11", tone: "secondary" },
          { text: "[OK] 2 certificates anchored. Tamper-evident.", time: "13:40:11", tone: "success" },
        ],
      },
      {
        label: "Consumer Verification",
        description:
          "The retail carton carries a QR code. A shopper or auditor scans it and reads the full farm-to-shelf journey, every grade, and every certificate, with no login.",
        icon: Search,
        logFilename: "cerulea_agritrace.log",
        logLines: [
          { text: "[SYS] Public verification request for QR:88421...", time: "18:22:47", tone: "default" },
          { text: "[CMD] resolveJourney(BATCH_88421)", time: "18:22:47", tone: "primary" },
          { text: "[SYS] Assembling 5-hop custody chain and 2 certificates...", time: "18:22:47", tone: "default" },
          { text: "[OK] Verified origin returned. Chain intact from genesis.", time: "18:22:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes agricultural traceability into modular contracts. Each layer registers, transfers, certifies, and exposes a batch without any single intermediary controlling the record.",
    layers: [
      {
        title: "Batch Registry",
        subtitle: "The Origin Anchor",
        icon: Leaf,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Anchor",
          description:
            "The foundational data layer. It mints a unique batch identity at the farm and stores the immutable link to cultivar, geo-coordinates, harvest date, and initial grade that every later record points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract BatchRegistry {\n  struct Batch {\n    address farmer;\n    string cultivar;\n    bytes32 geoHash;\n    uint256 harvestDate;\n    uint256 quantity;\n  }\n\n  mapping(bytes32 => Batch) public batches;\n\n  function register(bytes32 id, string calldata cultivar, bytes32 geo) external {\n    batches[id] = Batch(msg.sender, cultivar, geo, block.timestamp, 0);\n  }\n}",
        simAction: "Simulate Batch Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading farmer credential for KA_2291...", tone: "default" },
          { text: "Hashing field geo-coordinates...", tone: "default" },
          { text: "Writing batch identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Batch BATCH_88421 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Custody Handoff",
        subtitle: "The Two-Party Transfer",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Party Transfer",
          description:
            "Prevents silent substitution. A batch cannot advance until the receiver co-signs the declared weight and grade, turning every custody change into a mutual agreement recorded on-chain.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function acceptCustody(bytes32 id, uint256 weight, bytes1 grade) external {\n    Handoff storage h = pending[id];\n    require(h.receiver == msg.sender, \"Not receiver\");\n    require(!h.settled, \"Already settled\");\n    h.settled = true;\n    custody[id] = msg.sender;\n    emit CustodyAccepted(id, msg.sender, weight, grade);\n}",
        simAction: "Simulate Custody Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregator reviewing upstream declaration...", tone: "default" },
          { text: "Comparing declared weight 4185kg against 4200kg origin...", tone: "default" },
          { text: "Recording co-signature from both parties...", tone: "default" },
          { text: "[SUCCESS] Custody transferred with mutual proof.", tone: "success" },
        ],
      },
      {
        title: "Certificate Notary",
        subtitle: "The Document Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Document Seal",
          description:
            "Anchors grades and export papers by their cryptographic digest. The original PDF stays off-chain, but any tampering with a certificate breaks its hash and is instantly detectable by a verifier.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorDoc(bytes32 batchId, bytes32 docHash, string calldata kind) external onlyIssuer {\n    documents[batchId].push(Doc(docHash, kind, msg.sender, block.timestamp));\n    emit DocAnchored(batchId, docHash, kind);\n}",
        simAction: "Simulate Certificate Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting phytosanitary certificate PDF...", tone: "default" },
          { text: "Computing SHA-256 digest of document...", tone: "default" },
          { text: "Binding digest to BATCH_88421...", tone: "default" },
          { text: "[SUCCESS] Certificate anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Public Verifier",
        subtitle: "The Consumer Window",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consumer Window",
          description:
            "A read-only gateway that resolves a QR code to the full custody chain and certificate set. It lets any shopper, retailer, or authority verify origin without an account and without trusting a single party.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveJourney(bytes32 id) external view returns (Hop[] memory, Doc[] memory) {\n    return (custodyChain[id], documents[id]);\n}",
        simAction: "Simulate Consumer Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Shopper scans carton QR:88421...", tone: "default" },
          { text: "Assembling 5-hop custody chain...", tone: "default" },
          { text: "Attaching 2 anchored certificates...", tone: "default" },
          { text: "[SUCCESS] Verified farm-to-shelf journey returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Multi-party crop traceability is a horizontal capability. Here is how different agricultural actors put the shared ledger to work.",
    sectors: [
      { icon: Truck, title: "Export & Trading Houses", description: "Assemble export consignments from certified batches and hand importing authorities a verifiable chain of custody, clearing consignments faster and cutting rejection rates at destination ports.", assetTypes: ["Export Consignments", "Certificate Bundles", "Origin Attestations"] },
      { icon: Building2, title: "Retail & FMCG", description: "Attach a scannable provenance record to every carton on the shelf, turning verified origin into a consumer trust signal and isolating recalls to a single batch instead of a whole line.", assetTypes: ["Retail Cartons", "Recall Batches", "Consumer QR Records"] },
      { icon: Landmark, title: "Regulators & Certifiers", description: "Read the consortium ledger directly to audit provenance and certification without contacting each party, replacing physical document checks with a live on-chain query.", assetTypes: ["Audit Trails", "Compliance Records", "Certification Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy ERP systems from large aggregators or capturing field data from smallholder phones, Cerulea routes both into one shared record.",
    tracks: [
      {
        title: "Track A: Enterprise Supply-Chain Bridging",
        description:
          "For large aggregators and retailers on legacy ERP. Existing custody events are translated into signed on-chain batch transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy ERP / WMS", sublabel: "Aggregator Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Traceability Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Smallholder Field Capture",
        description:
          "For farmers and field agents on mobile. A progressive web app signs each batch registration and handoff from a phone wallet and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field PWA / Wallet", sublabel: "Farmer & Agent Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Custody Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Batch Record", icon: Leaf, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-party traceability network with custom custody logic, document anchoring, and a public verification portal from scratch requires specialised engineers and long consortium integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Certificate Rules",
      ruleCount: 45,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise supply-chain integration benchmarks. Wiring together each intermediary's ERP, building custom custody and document-anchoring logic, and shipping a public verification portal for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and certification rules into pre-audited WebAssembly binaries and provisions the shared consortium ledger and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const agricultureItems: ExtraCaseItem[] = [
  {
    label: "Farm-to-retail crop traceability across multiple intermediaries",
    href: "/solutions/use-case/farm-to-retail-crop-traceability-across-multiple-intermediaries",
    description: "Unbroken chain of custody from field to shelf.",
    icon: Search,
    category: "SME",
    tags: ["Agriculture", "Supply Chain"],
    industry: INDUSTRY,
  },
]
