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
          { text: "Sealing origin metadata to registry...", tone: "default" },
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
          { text: "Advancing custody pointer to new holder...", tone: "default" },
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
          { text: "Recording issuer signature on-chain...", tone: "default" },
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
          { text: "Confirming chain intact from genesis...", tone: "default" },
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
  {
    slug: "organic-and-fair-trade-certification-shared-across-certifiers-retailer",
    icon: ShieldCheck,
    eyebrow: "Certification Credential Engine",
    headline1: "Issue tamper-proof certificates.",
    headline2: "Verify without a phone call.",
    heroDescription:
      "Issue every organic and fair-trade certificate as a verifiable credential on a shared registry. The DID and VC Ledger and Provenance Notary bind each certificate to its issuer and its produce batch, so anyone reads authenticity through a public verification layer.",
    heroCta: "Deploy Credential Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a certificate that only its issuer can confirm into a credential anyone can verify instantly.",
    mechanics: [
      { title: "Verifiable Credentials", description: "Replace scanned PDFs with signed credentials. Each organic or fair-trade certificate is issued as a W3C verifiable credential, cryptographically bound to the certifier that signed it." },
      { title: "Issuer DID Registry", description: "Anchor every certifier's identity. The DID and VC Ledger holds a decentralised identifier for each accredited body, so a credential resolves to a real, recognised issuer and nothing else." },
      { title: "Batch Binding", description: "Tie the certificate to the goods. Provenance Notary binds each credential to a specific produce batch and its holder, so an organic claim cannot be reused on an unrelated lot." },
      { title: "Instant Revocation", description: "Kill a compromised certificate on-chain. When accreditation lapses or fraud surfaces, the issuer revokes the credential and every verifier sees the change on the next scan." },
      { title: "Public Verification Layer", description: "Open verification to everyone. A retailer, customs officer, or shopper resolves a QR code against the registry and confirms validity without ever contacting the certifier." },
      { title: "Fraud Rejection", description: "Make forgery return nothing. A fabricated certificate carries no matching on-chain record, so verification fails immediately instead of passing a convincing-looking scan." },
    ],
    lifecycleTitle: "The Certification Lifecycle",
    lifecycleSubtitle:
      "Follow a fair-trade certificate from an accredited certifier issuing it to a customs officer verifying it at the border.",
    lifecycleSteps: [
      {
        label: "Certifier Onboarding",
        description:
          "An accredited organic body registers a decentralised identifier. The DID and VC Ledger anchors the issuer so every credential it later signs resolves to a recognised authority.",
        icon: IdCard,
        logFilename: "cerulea_certchain.log",
        logLines: [
          { text: "[SYS] Registering accredited certifier identity...", time: "07:41:12", tone: "default" },
          { text: "[CMD] registerIssuer { body: \"ORG_CERT_EU_014\", scope: \"ORGANIC\" }", time: "07:41:12", tone: "primary" },
          { text: "[AUTH] Validating accreditation chain and public key...", time: "07:41:13", tone: "secondary" },
          { text: "[OK] Issuer DID anchored at block 5120044.", time: "07:41:13", tone: "success" },
        ],
      },
      {
        label: "Credential Issuance",
        description:
          "The certifier issues a verifiable credential for a specific produce batch. Provenance Notary binds the certificate to the batch and its holder in one signed transaction.",
        icon: FileCheck,
        logFilename: "cerulea_certchain.log",
        logLines: [
          { text: "[SYS] Constructing verifiable credential...", time: "10:15:30", tone: "default" },
          { text: "[CMD] issueVC { batch: \"COFFEE_9930\", claim: \"FAIRTRADE\" }", time: "10:15:31", tone: "primary" },
          { text: "[SYS] Binding credential to holder wallet 0x77c...", time: "10:15:31", tone: "default" },
          { text: "[OK] Credential CRED_44120 issued and anchored.", time: "10:15:32", tone: "success" },
        ],
      },
      {
        label: "Registry Anchor",
        description:
          "The credential and its revocation status publish to the shared registry. Any verifier can now resolve the certificate and check whether it is still live.",
        icon: Database,
        logFilename: "cerulea_certchain.log",
        logLines: [
          { text: "[SYS] Publishing credential to shared registry...", time: "10:15:33", tone: "default" },
          { text: "[CMD] anchorStatus(CRED_44120, status: \"ACTIVE\")", time: "10:15:33", tone: "primary" },
          { text: "[AUTH] Writing revocation slot for issuer control...", time: "10:15:34", tone: "secondary" },
          { text: "[OK] Credential live and publicly resolvable.", time: "10:15:34", tone: "success" },
        ],
      },
      {
        label: "Border Verification",
        description:
          "A customs officer scans the credential at import. The public verification layer confirms the issuer, the batch binding, and the active status in a single query.",
        icon: Search,
        logFilename: "cerulea_certchain.log",
        logLines: [
          { text: "[SYS] Verification request from Customs_0x19...", time: "16:52:09", tone: "default" },
          { text: "[CMD] verifyVC(CRED_44120)", time: "16:52:09", tone: "primary" },
          { text: "[SYS] Resolving issuer DID and revocation status...", time: "16:52:09", tone: "default" },
          { text: "[OK] Credential valid. Issuer accredited, status ACTIVE.", time: "16:52:10", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea splits certification into modular contracts for issuer identity, credential binding, revocation, and open verification, so no single party can forge or silently withdraw a certificate.",
    layers: [
      {
        title: "Issuer Registry",
        subtitle: "The Accreditation Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accreditation Anchor",
          description:
            "The identity layer for certifiers. It anchors a decentralised identifier and public key for each accredited body, so any credential can be traced to a real, recognised issuer rather than an anonymous signer.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract IssuerRegistry {\n  struct Issuer {\n    bytes32 did;\n    bytes32 pubKey;\n    string scope;\n    bool accredited;\n  }\n\n  mapping(address => Issuer) public issuers;\n\n  function registerIssuer(bytes32 did, bytes32 key, string calldata scope) external onlyAuthority {\n    issuers[msg.sender] = Issuer(did, key, scope, true);\n  }\n}",
        simAction: "Simulate Issuer Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Validating accreditation chain for ORG_CERT_EU_014...", tone: "default" },
          { text: "Anchoring issuer public key...", tone: "default" },
          { text: "Recording certification scope ORGANIC...", tone: "default" },
          { text: "Writing issuer DID to registry...", tone: "default" },
          { text: "[SUCCESS] Certifier identity anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Credential Notary",
        subtitle: "The Batch Binding",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Batch Binding",
          description:
            "Issues each certificate as a verifiable credential and binds it to a specific produce batch and holder. This prevents a genuine certificate from being lifted and reused on an uncertified lot.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function issueVC(bytes32 batchId, bytes32 claimHash, address holder) external onlyAccredited {\n    credentials[batchId] = Credential(msg.sender, claimHash, holder, block.timestamp, true);\n    emit CredentialIssued(batchId, msg.sender, holder);\n}",
        simAction: "Simulate Credential Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading batch COFFEE_9930 identity...", tone: "default" },
          { text: "Composing fair-trade claim payload...", tone: "default" },
          { text: "Binding credential to holder wallet...", tone: "default" },
          { text: "Signing credential with issuer key...", tone: "default" },
          { text: "[SUCCESS] Credential CRED_44120 issued and bound.", tone: "success" },
        ],
      },
      {
        title: "Revocation Ledger",
        subtitle: "The Kill Switch",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Kill Switch",
          description:
            "Holds a live status slot for every credential. When accreditation lapses or fraud is found, the issuer flips the status and every future verification reflects the revocation immediately.",
          platformFunction: "Compliance & Control",
        },
        codeSnippet:
          "function revoke(bytes32 batchId) external {\n    Credential storage c = credentials[batchId];\n    require(c.issuer == msg.sender, \"Not issuer\");\n    c.active = false;\n    emit CredentialRevoked(batchId, msg.sender);\n}",
        simAction: "Simulate Revocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Issuer flags lapsed accreditation...", tone: "default" },
          { text: "Locating credential status slot...", tone: "default" },
          { text: "Setting status to REVOKED...", tone: "default" },
          { text: "Broadcasting revocation event...", tone: "default" },
          { text: "[SUCCESS] Credential revoked, effective immediately.", tone: "success" },
        ],
      },
      {
        title: "Public Verifier",
        subtitle: "The Open Window",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Open Window",
          description:
            "A read-only gateway that resolves any credential to its issuer, batch binding, and current status. It lets retailers, customs, and shoppers verify a certificate without contacting the certifier at all.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verify(bytes32 batchId) external view returns (bool valid, address issuer) {\n    Credential memory c = credentials[batchId];\n    return (c.active && issuers[c.issuer].accredited, c.issuer);\n}",
        simAction: "Simulate Certificate Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Customs scans QR for CRED_44120...", tone: "default" },
          { text: "Resolving issuer DID accreditation...", tone: "default" },
          { text: "Checking revocation status slot...", tone: "default" },
          { text: "Confirming batch binding integrity...", tone: "default" },
          { text: "[SUCCESS] Certificate valid and active.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared certification is a horizontal capability. Here is how certifiers, retailers, and regulators use one open registry.",
    sectors: [
      { icon: ShieldCheck, title: "Certification Bodies", description: "Issue organic and fair-trade credentials that anyone can verify without staffing a phone line, and revoke a compromised certificate the instant fraud is detected.", assetTypes: ["Verifiable Credentials", "Accreditation DIDs", "Revocation Records"] },
      { icon: Building2, title: "Retail & Brands", description: "Confirm every supplier certificate in seconds before a purchase order, turning verified organic and fair-trade status into a defensible claim on the shelf.", assetTypes: ["Supplier Certificates", "Product Claims", "Audit Snapshots"] },
      { icon: Landmark, title: "Customs & Regulators", description: "Verify certificates at the border directly against the registry, rejecting forged documents automatically instead of chasing issuers for confirmation.", assetTypes: ["Import Attestations", "Compliance Checks", "Fraud Flags"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a large certifier is bridging its accreditation database or a smallholder cooperative is issuing from a phone, Cerulea routes both into one verifiable registry.",
    tracks: [
      {
        title: "Track A: Certifier System Bridging",
        description:
          "For accredited bodies with legacy certificate databases. Existing issuance events are translated into signed verifiable credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Certifier Database", sublabel: "Accreditation Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Signing", icon: Server, accent: true },
          { label: "Cerulea Registry", sublabel: "Shared Credential Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Cooperative Field Issuance",
        description:
          "For grower cooperatives issuing directly. A mobile app signs each credential from a wallet and routes it to the shared registry with no intermediary.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Cooperative App", sublabel: "Field Issuing Devices", icon: Fingerprint, accent: false },
          { label: "Registry Validators", sublabel: "Credential Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Public Verification Layer", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verifiable credential registry with issuer identity, batch binding, revocation, and a public verification API from scratch requires identity engineers and long certifier onboarding cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credential & Revocation Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects decentralised identity integration benchmarks. Standing up a DID method, writing credential issuance and revocation logic, and shipping a public verification API for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your issuance and revocation rules into pre-audited WebAssembly binaries and provisions the shared registry and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "parametric-crop-insurance-with-automated-payouts-via-verified-weather",
    icon: Shield,
    eyebrow: "Parametric Settlement Engine",
    headline1: "Pay claims on weather.",
    headline2: "Not on paperwork.",
    heroDescription:
      "Hook each policy to trusted weather and satellite feeds through External Data Oracles. The Parametric Insurance module and Escrow and Conditional Settlement release funds the moment a drought or flood threshold is verified, so payouts happen without a form filed.",
    heroCta: "Deploy Parametric Policies",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow, adjuster-driven claims process into an automatic settlement triggered by verified data.",
    mechanics: [
      { title: "Oracle-Bound Policies", description: "Anchor every policy to data, not judgement. External Data Oracles stream verified rainfall, temperature, and satellite indices to the contract, so the trigger condition is objective and public." },
      { title: "Parametric Triggers", description: "Encode the payout condition once. The Parametric Insurance module holds each policy's threshold, and a drought or flood reading that crosses it fires settlement with no human review." },
      { title: "Escrow Settlement", description: "Fund the payout before the season. Escrow and Conditional Settlement locks premium and reinsurance capital, then releases the exact indemnity to the farmer the moment the trigger verifies." },
      { title: "Zero-Form Claims", description: "Remove the claim entirely. Because the trigger is measured, not reported, the farmer never files a form and never waits for an adjuster visit to receive funds." },
      { title: "Fraud & Moral Hazard Control", description: "Eliminate inflated claims. Payout depends on an external index rather than a farmer's declaration, so moral hazard and disputed loss assessments disappear from the book." },
      { title: "Instant Reconciliation", description: "Close events cleanly. Each triggered payout writes an immutable settlement record, so the insurer reconciles a drought event with zero open claims and a full audit trail." },
    ],
    lifecycleTitle: "The Policy Lifecycle",
    lifecycleSubtitle:
      "Follow one drought policy from binding through an oracle-verified event to an automatic payout in the farmer's wallet.",
    lifecycleSteps: [
      {
        label: "Policy Binding",
        description:
          "A farmer binds a drought policy for a season. The contract stores the covered area, the rainfall threshold, and the indemnity, and Escrow locks the premium and cover capital.",
        icon: Shield,
        logFilename: "cerulea_parametric.log",
        logLines: [
          { text: "[SYS] Initializing parametric policy manifest...", time: "05:30:41", tone: "default" },
          { text: "[CMD] bindPolicy { region: \"MH_DROUGHT_07\", trigger: \"RAIN<40mm\" }", time: "05:30:41", tone: "primary" },
          { text: "[AUTH] Locking premium and cover capital in escrow...", time: "05:30:42", tone: "secondary" },
          { text: "[OK] Policy POL_7712 bound at block 6620188.", time: "05:30:42", tone: "success" },
        ],
      },
      {
        label: "Oracle Monitoring",
        description:
          "External Data Oracles stream verified weather and satellite indices for the covered region across the season, comparing each reading against the policy threshold.",
        icon: Radio,
        logFilename: "cerulea_parametric.log",
        logLines: [
          { text: "[SYS] Polling weather and satellite oracle feed...", time: "11:00:00", tone: "default" },
          { text: "[CMD] queryRainfall(region: \"MH_DROUGHT_07\", window: \"30D\")", time: "11:00:00", tone: "primary" },
          { text: "[SYS] Reading returned: 22mm against 40mm threshold.", time: "11:00:01", tone: "default" },
          { text: "[OK] Drought condition verified. Trigger armed.", time: "11:00:01", tone: "success" },
        ],
      },
      {
        label: "Trigger Execution",
        description:
          "The verified reading crosses the drought threshold. The Parametric Insurance module fires the trigger and authorises settlement without any claim or adjuster.",
        icon: Zap,
        logFilename: "cerulea_parametric.log",
        logLines: [
          { text: "[SYS] Threshold breach confirmed for POL_7712...", time: "11:00:02", tone: "default" },
          { text: "[CMD] fireTrigger(POL_7712, index: \"DROUGHT\")", time: "11:00:02", tone: "primary" },
          { text: "[AUTH] Validating oracle signature and quorum...", time: "11:00:02", tone: "secondary" },
          { text: "[OK] Trigger executed. Settlement authorised.", time: "11:00:03", tone: "success" },
        ],
      },
      {
        label: "Automatic Payout",
        description:
          "Escrow and Conditional Settlement releases the indemnity straight to the farmer's wallet and writes the closed, non-disputable settlement record.",
        icon: Wallet,
        logFilename: "cerulea_parametric.log",
        logLines: [
          { text: "[SYS] Releasing indemnity for POL_7712...", time: "11:00:04", tone: "default" },
          { text: "[CMD] settle(POL_7712, payout: 82000, to: farmer)", time: "11:00:04", tone: "primary" },
          { text: "[SYS] Funds transferred from escrow to wallet.", time: "11:00:04", tone: "default" },
          { text: "[OK] Payout complete. Event closed, zero disputes.", time: "11:00:05", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes parametric insurance into modular contracts for policy state, oracle validation, trigger logic, and escrow settlement, so a payout depends only on verified data.",
    layers: [
      {
        title: "Policy Registry",
        subtitle: "The Cover Ledger",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cover Ledger",
          description:
            "The state layer for every policy. It stores the covered region, the parametric threshold, the indemnity, and the escrowed capital, giving the trigger and settlement contracts a single source of policy truth.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PolicyRegistry {\n  struct Policy {\n    address farmer;\n    bytes32 region;\n    uint256 threshold;\n    uint256 indemnity;\n    bool settled;\n  }\n\n  mapping(bytes32 => Policy) public policies;\n\n  function bind(bytes32 id, bytes32 region, uint256 threshold, uint256 indemnity) external {\n    policies[id] = Policy(msg.sender, region, threshold, indemnity, false);\n  }\n}",
        simAction: "Simulate Policy Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading covered region MH_DROUGHT_07...", tone: "default" },
          { text: "Storing rainfall threshold of 40mm...", tone: "default" },
          { text: "Recording indemnity amount...", tone: "default" },
          { text: "Locking cover capital in escrow...", tone: "default" },
          { text: "[SUCCESS] Policy POL_7712 bound on-chain.", tone: "success" },
        ],
      },
      {
        title: "Weather Oracle",
        subtitle: "The Data Gate",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Data Gate",
          description:
            "Connects the policy to trusted weather and satellite feeds. It validates the oracle signature and quorum before any reading can arm a trigger, keeping payouts anchored to verified measurement.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract WeatherOracle {\n  function ingest(bytes32 region, uint256 reading, bytes memory sig) external returns (bool) {\n    require(verifyProvider(sig), \"Invalid feed\");\n    latest[region] = reading;\n    return reading < registry.thresholdOf(region);\n  }\n}",
        simAction: "Simulate Oracle Read",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Fetching rainfall index for region...", tone: "default" },
          { text: "Verifying oracle provider signature...", tone: "default" },
          { text: "Comparing 22mm reading against threshold...", tone: "default" },
          { text: "Arming drought trigger condition...", tone: "default" },
          { text: "[SUCCESS] Verified drought reading recorded.", tone: "success" },
        ],
      },
      {
        title: "Trigger Engine",
        subtitle: "The Settlement Switch",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Settlement Switch",
          description:
            "The parametric core. When a verified reading crosses the policy threshold, it fires the trigger and authorises settlement in the same transaction, removing the adjuster from the loop entirely.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function fireTrigger(bytes32 id) external onlyOracle {\n    Policy storage p = policies[id];\n    require(!p.settled, \"Already settled\");\n    require(latest[p.region] < p.threshold, \"No breach\");\n    escrow.authorize(id, p.indemnity);\n    emit Triggered(id, p.region);\n}",
        simAction: "Simulate Trigger",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming threshold breach for POL_7712...", tone: "default" },
          { text: "Checking policy not already settled...", tone: "default" },
          { text: "Authorising escrow release...", tone: "default" },
          { text: "Emitting trigger event...", tone: "default" },
          { text: "[SUCCESS] Payout authorised without a claim.", tone: "success" },
        ],
      },
      {
        title: "Escrow Settlement",
        subtitle: "The Instant Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Payout",
          description:
            "Holds premium and cover capital and releases the indemnity the instant a trigger authorises it. It writes a closed settlement record so the same event can never be paid or disputed twice.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(bytes32 id, uint256 amount, address to) external onlyEngine {\n    require(!policies[id].settled, \"Settled\");\n    policies[id].settled = true;\n    payable(to).transfer(amount);\n    emit Settled(id, to, amount);\n}",
        simAction: "Simulate Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading authorised indemnity for POL_7712...", tone: "default" },
          { text: "Debiting escrowed cover capital...", tone: "default" },
          { text: "Transferring funds to farmer wallet...", tone: "default" },
          { text: "Marking policy permanently settled...", tone: "default" },
          { text: "[SUCCESS] Indemnity paid, event closed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Parametric settlement is a horizontal capability. Here is how insurers, lenders, and public schemes put oracle-driven payouts to work.",
    sectors: [
      { icon: Shield, title: "Crop Insurers", description: "Underwrite drought and flood cover with objective triggers, cutting adjuster cost and loss-ratio leakage while settling verified events with zero claim disputes.", assetTypes: ["Parametric Policies", "Indemnity Escrows", "Event Records"] },
      { icon: Landmark, title: "Public Subsidy Schemes", description: "Run state-backed weather insurance for smallholders where payouts must be fast and auditable, releasing relief within hours of a verified event instead of a season later.", assetTypes: ["Subsidised Cover", "Relief Payouts", "Coverage Registries"] },
      { icon: Coins, title: "Agri Lenders", description: "Bundle parametric cover with seasonal loans so a verified drought repays or defers the loan automatically, protecting both the farmer and the lender's book.", assetTypes: ["Loan-Linked Policies", "Collateral Triggers", "Repayment Escrows"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an insurer is bridging a legacy policy administration system or a farmer is binding cover from a phone, Cerulea routes both into one oracle-driven settlement engine.",
    tracks: [
      {
        title: "Track A: Insurer System Bridging",
        description:
          "For carriers on legacy policy administration platforms. Existing policy and reinsurance records are translated into on-chain parametric contracts through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Policy Admin System", sublabel: "Carrier Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Policy & Oracle Binding", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Parametric Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Farmer Mobile Binding",
        description:
          "For smallholders binding cover directly. A mobile wallet signs each policy and receives payouts on-chain with no branch visit and no claim form.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Farmer Wallet App", sublabel: "Mobile Policy Devices", icon: Fingerprint, accent: false },
          { label: "Oracle Validators", sublabel: "Weather Data Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Automated Payout Layer", icon: Wallet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building parametric policy logic, verified weather oracle integrations, and escrowed automatic settlement from scratch requires actuarial engineers and long data-provider negotiations. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Trigger & Oracle Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects insurtech oracle integration benchmarks. Writing parametric trigger logic, negotiating verified weather and satellite feeds, and building escrowed settlement for an average product takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your trigger and settlement rules into pre-audited WebAssembly binaries and wires the oracle and escrow layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "carbon-sequestration-credits-for-regenerative-farming-with-immutable-s",
    icon: Recycling,
    eyebrow: "Soil Carbon MRV Engine",
    headline1: "Monetise the soil.",
    headline2: "Prove every tonne.",
    heroDescription:
      "Tokenise verified sequestration credits on the public chain through the Carbon Credits MRV and Registry module. Soil measurements enter through External Data Oracles and anchor immutably, while an ERC-20 token makes each credit tradable and Payouts and Settlements route revenue to the farmer.",
    heroCta: "Deploy Soil Carbon Markets",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn opaque, expensive carbon measurement into a transparent pipeline a smallholder can actually reach.",
    mechanics: [
      { title: "Immutable Soil Logs", description: "Anchor every measurement. External Data Oracles feed soil organic carbon readings to the Carbon Credits MRV and Registry module, where each sample is sealed immutably against its plot and date." },
      { title: "Verified Credit Minting", description: "Mint only proven carbon. A credit is issued only after the MRV module confirms measured sequestration, so each ERC-20 token maps to a mathematically backed tonne of CO2e." },
      { title: "Smallholder Access", description: "Open the market to small farms. The pipeline handles measurement, verification, and issuance on-chain, removing the audit cost that normally locks regenerative smallholders out." },
      { title: "Tradable Tokens", description: "Make credits liquid. The ERC-20 standard lets a verified soil credit trade on open or enterprise marketplaces, so a farmer's sequestration becomes a real, sellable asset." },
      { title: "Direct Farmer Payouts", description: "Route revenue to the source. Payouts and Settlements send credit proceeds straight to the farmer's wallet, cutting out intermediaries that erode a smallholder's share." },
      { title: "Public Buyer Proof", description: "Give buyers real provenance. A corporate offset buyer can trace a retired credit to a specific farm, plot, and on-chain soil log, ending unverifiable offset claims." },
    ],
    lifecycleTitle: "The Sequestration Lifecycle",
    lifecycleSubtitle:
      "Follow a regenerative plot from a soil measurement to a corporate buyer retiring the resulting credit.",
    lifecycleSteps: [
      {
        label: "Plot Registration",
        description:
          "A regenerative farmer registers a plot and its baseline. The Carbon Credits MRV and Registry module anchors the geography, practice, and starting soil carbon as the project origin.",
        icon: Leaf,
        logFilename: "cerulea_soilcarbon.log",
        logLines: [
          { text: "[SYS] Initializing regenerative plot manifest...", time: "06:05:12", tone: "default" },
          { text: "[CMD] registerPlot { farm: \"TN_REGEN_18\", practice: \"NO_TILL\" }", time: "06:05:12", tone: "primary" },
          { text: "[AUTH] Anchoring baseline soil carbon reading...", time: "06:05:13", tone: "secondary" },
          { text: "[OK] Plot PLOT_3390 registered at block 7710455.", time: "06:05:13", tone: "success" },
        ],
      },
      {
        label: "Soil Measurement",
        description:
          "Field sensors and lab samples feed soil organic carbon data through External Data Oracles. Each reading is sealed immutably to the plot and its timestamp.",
        icon: FlaskConical,
        logFilename: "cerulea_soilcarbon.log",
        logLines: [
          { text: "[SYS] Polling soil carbon oracle for PLOT_3390...", time: "12:20:44", tone: "default" },
          { text: "[CMD] anchorSample(plot: \"PLOT_3390\", soc: 1.9pct)", time: "12:20:44", tone: "primary" },
          { text: "[SYS] Sealing measurement digest to immutable log...", time: "12:20:45", tone: "default" },
          { text: "[OK] Delta of 0.4pct SOC verified over baseline.", time: "12:20:45", tone: "success" },
        ],
      },
      {
        label: "Credit Minting",
        description:
          "The MRV module confirms the measured delta and mints ERC-20 credits for the verified tonnes. Each token carries a link to the soil log that backs it.",
        icon: Coins,
        logFilename: "cerulea_soilcarbon.log",
        logLines: [
          { text: "[SYS] Executing carbon minting authority...", time: "14:02:10", tone: "default" },
          { text: "[CMD] mintCredits(PLOT_3390, tonnes: 120, serial: \"TN-3390-25\")", time: "14:02:10", tone: "primary" },
          { text: "[AUTH] Sealing proof of verified sequestration...", time: "14:02:11", tone: "secondary" },
          { text: "[OK] 120 credits minted to farmer wallet.", time: "14:02:11", tone: "success" },
        ],
      },
      {
        label: "Sale & Retirement",
        description:
          "A corporate buyer purchases and retires credits. Payouts and Settlements route proceeds to the farmer, and the burn writes a public, single-count offset record.",
        icon: Recycling,
        logFilename: "cerulea_soilcarbon.log",
        logLines: [
          { text: "[SYS] Detecting retirement intent from Corp_0x51...", time: "17:44:30", tone: "default" },
          { text: "[CMD] retire(60, reason: \"FY2026_OFFSET\")", time: "17:44:30", tone: "primary" },
          { text: "[SYS] Routing proceeds to farmer via settlements...", time: "17:44:31", tone: "default" },
          { text: "[OK] Credits burned. Farmer paid, offset public.", time: "17:44:31", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes soil carbon into modular contracts for plot identity, measurement anchoring, token minting, and farmer settlement, so each credit is provably backed and paid to its origin.",
    layers: [
      {
        title: "Plot Registry",
        subtitle: "The Project Anchor",
        icon: Leaf,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Project Anchor",
          description:
            "The foundational data layer. It anchors each regenerative plot, its practice, and its baseline soil carbon, giving every later measurement and credit an immutable origin to reference.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PlotRegistry {\n  struct Plot {\n    address farmer;\n    bytes32 geoHash;\n    string practice;\n    uint256 baselineSOC;\n  }\n\n  mapping(bytes32 => Plot) public plots;\n\n  function register(bytes32 id, bytes32 geo, string calldata practice, uint256 baseline) external {\n    plots[id] = Plot(msg.sender, geo, practice, baseline);\n  }\n}",
        simAction: "Simulate Plot Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading farmer credential for TN_REGEN_18...", tone: "default" },
          { text: "Hashing plot geo-coordinates...", tone: "default" },
          { text: "Recording no-till practice...", tone: "default" },
          { text: "Anchoring baseline soil carbon...", tone: "default" },
          { text: "[SUCCESS] Plot PLOT_3390 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "MRV Oracle",
        subtitle: "The Measurement Seal",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Measurement Seal",
          description:
            "Ingests soil organic carbon readings from External Data Oracles and seals each sample immutably to its plot. It verifies the measured delta over baseline before any credit can be minted.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract SoilMRV {\n  function anchorSample(bytes32 plot, uint256 soc, bytes memory sig) external returns (uint256) {\n    require(verifyProvider(sig), \"Invalid feed\");\n    uint256 delta = soc - plots[plot].baselineSOC;\n    samples[plot].push(Sample(soc, block.timestamp));\n    return delta;\n  }\n}",
        simAction: "Simulate Soil Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Fetching soil carbon reading for PLOT_3390...", tone: "default" },
          { text: "Verifying oracle provider signature...", tone: "default" },
          { text: "Computing delta over baseline...", tone: "default" },
          { text: "Sealing sample to immutable log...", tone: "default" },
          { text: "[SUCCESS] Verified 0.4pct SOC gain anchored.", tone: "success" },
        ],
      },
      {
        title: "Credit Token",
        subtitle: "The Tradable Tonne",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Tradable Tonne",
          description:
            "Mints an ERC-20 credit for each verified tonne, linked to the soil log that backs it. The token makes a smallholder's sequestration a liquid, tradable asset on open marketplaces.",
          platformFunction: "Tokenization",
        },
        codeSnippet:
          "function mint(bytes32 plot, uint256 tonnes, bytes32 proof) external onlyMRV {\n    require(verified[plot][proof], \"Unverified\");\n    _mint(plots[plot].farmer, tonnes);\n    emit CreditsMinted(plot, tonnes, proof);\n}",
        simAction: "Simulate Credit Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming verified sequestration proof...", tone: "default" },
          { text: "Calculating mintable tonnes...", tone: "default" },
          { text: "Linking token serial to soil log...", tone: "default" },
          { text: "Minting credits to farmer wallet...", tone: "default" },
          { text: "[SUCCESS] 120 soil credits minted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Settlement Router",
        subtitle: "The Farmer Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Farmer Payout",
          description:
            "Routes credit proceeds directly to the farmer through Payouts and Settlements, and burns retired credits with a public single-count record so an offset can never be double sold.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function retire(uint256 amount, string calldata reason) external {\n    _burn(msg.sender, amount);\n    settlements.route(plotOf[msg.sender], amount);\n    emit Retired(msg.sender, amount, reason);\n}",
        simAction: "Simulate Retirement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Corporate buyer retiring 60 credits...", tone: "default" },
          { text: "Executing permanent burn of tokens...", tone: "default" },
          { text: "Routing proceeds to farmer wallet...", tone: "default" },
          { text: "Writing public offset record...", tone: "default" },
          { text: "[SUCCESS] Credits retired, farmer paid.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Soil carbon markets are a horizontal capability. Here is how growers, project developers, and buyers use verified credits.",
    sectors: [
      { icon: Tractor, title: "Regenerative Growers", description: "Turn no-till, cover-cropping, and rotational practices into a verified revenue stream, receiving credit proceeds directly instead of losing margin to audit and broker fees.", assetTypes: ["Soil Credits", "Practice Records", "Farmer Payouts"] },
      { icon: PieChart, title: "Project Developers", description: "Aggregate many smallholder plots into a single MRV-backed program, issuing tradable credits with an immutable soil log behind every tonne.", assetTypes: ["Program Registries", "Aggregated Credits", "MRV Evidence"] },
      { icon: Building2, title: "Corporate Buyers", description: "Buy offsets with real provenance, proving publicly that a retired credit traces to a specific verified farm rather than an unauditable pool.", assetTypes: ["Retired Credits", "Neutrality Proofs", "Offset Certificates"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a developer is bridging a registry database or a smallholder is registering a plot from a phone, Cerulea routes both into one public carbon ledger.",
    tracks: [
      {
        title: "Track A: Registry & MRV Bridging",
        description:
          "For carbon programs on legacy MRV platforms. Existing measurement and issuance records are translated into on-chain credits through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy MRV Platform", sublabel: "Program Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Measurement Hashing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Carbon Credit Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Smallholder Plot Capture",
        description:
          "For farmers registering plots directly. A mobile wallet signs each plot registration and sample submission and routes it to the public carbon ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Farmer App / Wallet", sublabel: "Field Sampling Devices", icon: Fingerprint, accent: false },
          { label: "Oracle Validators", sublabel: "Soil Data Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Tokenized Credit Ledger", icon: Recycling, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a soil carbon MRV pipeline, oracle-anchored measurement, ERC-20 credit issuance, and farmer settlement from scratch requires sustainability and blockchain engineers and heavy audit budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required MRV & Issuance Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects ReFi and dMRV integration benchmarks. Writing measurement anchoring, negotiating soil data providers, and building token issuance and farmer settlement for an average program takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your MRV and issuance rules into pre-audited WebAssembly binaries and provisions the public credit registry and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "multi-party-water-rights-management-in-shared-irrigation-consortiums",
    icon: Droplet,
    eyebrow: "Water Allocation Engine",
    headline1: "Meter every draw.",
    headline2: "End the allocation war.",
    heroDescription:
      "Track consumption in real time on a shared water rights ledger. IoT meters feed draw data through the Energy Meter Oracle, the Logic and Actions Editor enforces each allocation, and Escrow and Conditional Settlement applies penalties on overdraw automatically.",
    heroCta: "Deploy Water Rights Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an invisible, disputed shared resource into a live, metered ledger every member can see.",
    mechanics: [
      { title: "Live Draw Metering", description: "Replace estimates with measurement. IoT meters feed each farm's draw through the Energy Meter Oracle to a shared ledger, so consumption is visible in real time, not months later." },
      { title: "Encoded Allocations", description: "Make each right explicit. The Logic and Actions Editor encodes every member's seasonal allocation on-chain, so the ledger knows exactly how much each farm may draw." },
      { title: "Automatic Overdraw Penalty", description: "Enforce limits at the moment of breach. Escrow and Conditional Settlement applies a penalty the instant a farm exceeds its allocation, rather than after a season of disputes." },
      { title: "Shared Visibility", description: "Give every member the same view. All consortium participants read the same ledger, so no farm can quietly overdraw and no allocation is invisible to the others." },
      { title: "Dispute-Free Records", description: "Settle from meters, not memory. Because each draw is metered and signed, an allocation dispute is resolved against a verified figure instead of conflicting claims." },
      { title: "Authority Reporting", description: "Prove actual consumption. The water authority reads each farm's verified draw directly from the ledger, closing a season with an evidence-based allocation report." },
    ],
    lifecycleTitle: "The Allocation Lifecycle",
    lifecycleSubtitle:
      "Follow one irrigation season from allocation setup through metered draws to an automatic overdraw penalty.",
    lifecycleSteps: [
      {
        label: "Allocation Setup",
        description:
          "The consortium encodes each member's seasonal water allocation. The Logic and Actions Editor writes every right to the shared ledger as the season's baseline.",
        icon: Scale,
        logFilename: "cerulea_waterledger.log",
        logLines: [
          { text: "[SYS] Initializing consortium allocation table...", time: "05:10:00", tone: "default" },
          { text: "[CMD] setAllocation { farm: \"RJ_CANAL_12\", cap: 45000 }", time: "05:10:00", tone: "primary" },
          { text: "[AUTH] Validating consortium quorum on allocations...", time: "05:10:01", tone: "secondary" },
          { text: "[OK] 24 allocations anchored at block 8810922.", time: "05:10:01", tone: "success" },
        ],
      },
      {
        label: "Metered Draw",
        description:
          "IoT meters report each farm's water draw. The Energy Meter Oracle signs and streams the reading to the ledger, decrementing that member's remaining allocation.",
        icon: Radio,
        logFilename: "cerulea_waterledger.log",
        logLines: [
          { text: "[SYS] Receiving meter reading for RJ_CANAL_12...", time: "08:30:22", tone: "default" },
          { text: "[CMD] recordDraw(farm: \"RJ_CANAL_12\", volume: 3200)", time: "08:30:22", tone: "primary" },
          { text: "[SYS] Decrementing remaining allocation to 41800...", time: "08:30:22", tone: "default" },
          { text: "[OK] Draw recorded and signed by meter oracle.", time: "08:30:23", tone: "success" },
        ],
      },
      {
        label: "Threshold Watch",
        description:
          "The ledger tracks each member against its cap. As a farm nears its allocation, the contract flags the approaching limit to every consortium member.",
        icon: Activity,
        logFilename: "cerulea_waterledger.log",
        logLines: [
          { text: "[SYS] Evaluating draw against allocation cap...", time: "15:12:40", tone: "default" },
          { text: "[CMD] checkThreshold(RJ_CANAL_12)", time: "15:12:40", tone: "primary" },
          { text: "[SYS] Farm at 96pct of seasonal allocation.", time: "15:12:40", tone: "secondary" },
          { text: "[OK] Approaching-limit flag broadcast to consortium.", time: "15:12:41", tone: "success" },
        ],
      },
      {
        label: "Overdraw Penalty",
        description:
          "A draw crosses the cap. Escrow and Conditional Settlement applies the agreed penalty automatically and records the overdraw against the responsible farm.",
        icon: Gavel,
        logFilename: "cerulea_waterledger.log",
        logLines: [
          { text: "[SYS] Overdraw detected for RJ_CANAL_12...", time: "18:05:11", tone: "default" },
          { text: "[CMD] applyPenalty(RJ_CANAL_12, excess: 1500)", time: "18:05:11", tone: "primary" },
          { text: "[AUTH] Debiting penalty from member escrow...", time: "18:05:12", tone: "secondary" },
          { text: "[OK] Penalty applied. Overdraw recorded on-chain.", time: "18:05:12", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes water rights into modular contracts for allocation state, metered ingestion, threshold logic, and penalty settlement, so a shared resource becomes a verifiable ledger.",
    layers: [
      {
        title: "Allocation Registry",
        subtitle: "The Rights Table",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rights Table",
          description:
            "The state layer for the consortium. It stores each member's seasonal allocation and remaining balance, giving the metering and penalty contracts one authoritative table of water rights.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract WaterRights {\n  struct Right {\n    address farm;\n    uint256 cap;\n    uint256 used;\n  }\n\n  mapping(bytes32 => Right) public rights;\n\n  function setAllocation(bytes32 id, address farm, uint256 cap) external onlyConsortium {\n    rights[id] = Right(farm, cap, 0);\n  }\n}",
        simAction: "Simulate Allocation Setup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Validating consortium quorum...", tone: "default" },
          { text: "Reading member farm RJ_CANAL_12...", tone: "default" },
          { text: "Writing seasonal cap of 45000...", tone: "default" },
          { text: "Initialising used balance to zero...", tone: "default" },
          { text: "[SUCCESS] Allocation anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Meter Oracle",
        subtitle: "The Draw Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Draw Feed",
          description:
            "Connects IoT water meters to the ledger through the Energy Meter Oracle. It validates each signed reading before recording a draw, so consumption is measured rather than declared.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function recordDraw(bytes32 id, uint256 volume, bytes memory sig) external {\n    require(verifyMeter(sig), \"Invalid meter\");\n    Right storage r = rights[id];\n    r.used += volume;\n    emit DrawRecorded(id, volume, r.cap - r.used);\n}",
        simAction: "Simulate Metered Draw",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving meter reading for RJ_CANAL_12...", tone: "default" },
          { text: "Verifying meter oracle signature...", tone: "default" },
          { text: "Adding 3200 to used balance...", tone: "default" },
          { text: "Updating remaining allocation...", tone: "default" },
          { text: "[SUCCESS] Draw recorded and signed.", tone: "success" },
        ],
      },
      {
        title: "Threshold Engine",
        subtitle: "The Limit Watch",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Limit Watch",
          description:
            "Encodes each allocation rule with the Logic and Actions Editor. It evaluates every draw against the cap and broadcasts an approaching-limit flag before a farm can silently overdraw.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function checkThreshold(bytes32 id) external view returns (uint8 pct) {\n    Right memory r = rights[id];\n    pct = uint8((r.used * 100) / r.cap);\n    if (pct >= 90) emit ApproachingLimit(id, pct);\n}",
        simAction: "Simulate Threshold Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading used and cap for RJ_CANAL_12...", tone: "default" },
          { text: "Computing consumption percentage...", tone: "default" },
          { text: "Detecting 96pct of allocation used...", tone: "default" },
          { text: "Broadcasting approaching-limit flag...", tone: "default" },
          { text: "[SUCCESS] Consortium notified of limit.", tone: "success" },
        ],
      },
      {
        title: "Penalty Settlement",
        subtitle: "The Overdraw Enforcer",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Overdraw Enforcer",
          description:
            "Applies the agreed penalty the moment a draw crosses the cap through Escrow and Conditional Settlement, turning overuse into an immediate, recorded consequence instead of a season-end dispute.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function applyPenalty(bytes32 id, uint256 excess) external onlyEngine {\n    uint256 fee = excess * penaltyRate;\n    escrow.debit(rights[id].farm, fee);\n    emit PenaltyApplied(id, excess, fee);\n}",
        simAction: "Simulate Overdraw Penalty",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting overdraw of 1500 units...", tone: "default" },
          { text: "Computing penalty at agreed rate...", tone: "default" },
          { text: "Debiting member escrow account...", tone: "default" },
          { text: "Recording overdraw against farm...", tone: "default" },
          { text: "[SUCCESS] Penalty applied on-chain.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared water metering is a horizontal capability. Here is how irrigation consortiums, authorities, and utilities put it to work.",
    sectors: [
      { icon: Tractor, title: "Irrigation Consortiums", description: "Give every member a live view of who draws how much, ending the silent overuse that surfaces months later and settling allocation disputes from metered records.", assetTypes: ["Member Allocations", "Draw Records", "Overdraw Penalties"] },
      { icon: Landmark, title: "Water Authorities", description: "Regulate a shared source with verified consumption data, proving each farm's actual draw and issuing an evidence-based seasonal allocation report.", assetTypes: ["Consumption Reports", "Rights Registries", "Compliance Records"] },
      { icon: Droplet, title: "Utilities & Basin Boards", description: "Manage a canal or basin across many users with automatic enforcement, applying penalties at the moment of overdraw rather than litigating at season end.", assetTypes: ["Basin Ledgers", "Metered Feeds", "Enforcement Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an authority is bridging a SCADA or billing system or a farm is reporting from a canal-side meter, Cerulea routes both into one water rights ledger.",
    tracks: [
      {
        title: "Track A: Authority System Bridging",
        description:
          "For water boards on legacy SCADA and billing systems. Existing meter and allocation data are translated into on-chain draw records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "SCADA / Billing System", sublabel: "Authority Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Meter Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Water Rights Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Meter Capture",
        description:
          "For canal-side IoT meters reporting directly. A signed device feed routes each draw to the shared ledger and updates the member's allocation live.",
        connectorLabels: ["METER SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "IoT Water Meter", sublabel: "Canal-Side Devices", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Draw Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Allocation Record", icon: Droplet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared water rights ledger with metered ingestion, encoded allocation logic, and automatic penalty settlement from scratch requires IoT and blockchain engineers and long consortium alignment. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Allocation & Penalty Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects utility IoT integration benchmarks. Wiring metering feeds, building allocation and penalty logic, and giving every member a shared live view for an average consortium takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your allocation and penalty rules into pre-audited WebAssembly binaries and provisions the shared ledger and meter oracle layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "seed-provenance-and-ip-protection-against-counterfeit-or-unauthorized",
    icon: Fingerprint,
    eyebrow: "Seed Authenticity Engine",
    headline1: "Kill the counterfeit.",
    headline2: "Protect the genetics.",
    heroDescription:
      "Register every genuine seed lot on a supply chain network anchored by Provenance Notary and the DID and VC Ledger. Each packet carries a QR code tied to an on-chain record, and Device Attestation confirms authorised production so a fake packet fails the scan.",
    heroCta: "Deploy Seed Provenance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an easily faked packet into a scannable authenticity check that also protects breeder IP.",
    mechanics: [
      { title: "Authentic Lot Registry", description: "Register only genuine seed. Provenance Notary anchors each authorised lot to its variety, batch, and producer, so every legitimate packet has an on-chain twin a counterfeit cannot fake." },
      { title: "Packet-Level QR", description: "Bind identity to the packet. Each packet carries a unique QR code tied to its lot record, so a buyer scans at the point of sale and reads a valid provenance history or nothing at all." },
      { title: "Authorised Production", description: "Prove the seed was made legally. Device Attestation confirms production came from a licensed facility, catching lots that fall outside the breeder's authorised supply chain." },
      { title: "IP Enforcement", description: "Protect breeder rights. The DID and VC Ledger ties each variety to its rights holder and licence terms, making unauthorised reproduction and seed saving detectable against the record." },
      { title: "Counterfeit Rejection", description: "Make fakes fail loudly. A counterfeit packet carries no matching lot record, so the scan returns no provenance and flags the packet as unverified on the spot." },
      { title: "Distributor Traceback", description: "Find the source of fakes. When counterfeits appear, the custody chain identifies which distributor introduced unverified lots, so the offending seller is removed quickly." },
    ],
    lifecycleTitle: "The Seed Lifecycle",
    lifecycleSubtitle:
      "Follow a seed lot from authorised production to a farmer scanning the packet before planting.",
    lifecycleSteps: [
      {
        label: "Lot Production",
        description:
          "A licensed facility produces a seed lot. Device Attestation confirms the equipment and site are authorised, and Provenance Notary anchors the lot to its variety and producer.",
        icon: Boxes,
        logFilename: "cerulea_seedchain.log",
        logLines: [
          { text: "[SYS] Initializing seed lot manifest...", time: "07:02:15", tone: "default" },
          { text: "[CMD] registerLot { variety: \"HYB_MAIZE_44\", site: \"AUTH_09\" }", time: "07:02:15", tone: "primary" },
          { text: "[AUTH] Device attestation confirming licensed site...", time: "07:02:16", tone: "secondary" },
          { text: "[OK] Lot LOT_5521 anchored at block 9120388.", time: "07:02:16", tone: "success" },
        ],
      },
      {
        label: "Packet Serialization",
        description:
          "The lot is packaged and each packet gets a unique QR code tied to the lot record, so authenticity can be checked at the individual packet level downstream.",
        icon: QrCode,
        logFilename: "cerulea_seedchain.log",
        logLines: [
          { text: "[SYS] Generating packet serials for LOT_5521...", time: "09:44:03", tone: "default" },
          { text: "[CMD] serializePackets(LOT_5521, count: 2000)", time: "09:44:03", tone: "primary" },
          { text: "[SYS] Binding each QR to lot provenance record...", time: "09:44:04", tone: "default" },
          { text: "[OK] 2000 packet codes issued and bound.", time: "09:44:04", tone: "success" },
        ],
      },
      {
        label: "Distribution Custody",
        description:
          "Packets move through distributors. Each handoff is recorded, so the chain can later show exactly who carried a lot and where unverified stock entered.",
        icon: Truck,
        logFilename: "cerulea_seedchain.log",
        logLines: [
          { text: "[SYS] Recording distributor handoff for LOT_5521...", time: "13:18:50", tone: "default" },
          { text: "[CMD] transferCustody(LOT_5521, to: \"DIST_0x22\")", time: "13:18:50", tone: "primary" },
          { text: "[AUTH] Validating distributor licence status...", time: "13:18:51", tone: "secondary" },
          { text: "[OK] Custody recorded. Chain length now 2 hops.", time: "13:18:51", tone: "success" },
        ],
      },
      {
        label: "Farmer Scan",
        description:
          "A farmer scans the packet before planting. A valid record returns the full provenance and variety rights, while a counterfeit returns no record and is flagged unverified.",
        icon: Search,
        logFilename: "cerulea_seedchain.log",
        logLines: [
          { text: "[SYS] Verification request for packet QR:5521-1180...", time: "16:30:27", tone: "default" },
          { text: "[CMD] verifyPacket(\"5521-1180\")", time: "16:30:27", tone: "primary" },
          { text: "[SYS] Resolving lot record and rights holder...", time: "16:30:27", tone: "default" },
          { text: "[OK] Genuine packet. Provenance returned to farmer.", time: "16:30:28", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes seed authenticity into modular contracts for lot identity, packet serialization, custody, and verification, so counterfeits fail and breeder IP stays enforceable.",
    layers: [
      {
        title: "Lot Registry",
        subtitle: "The Genetics Anchor",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Genetics Anchor",
          description:
            "The identity layer for seed. It anchors each authorised lot to its variety, producer, and licence terms through Provenance Notary and the DID and VC Ledger, giving every packet a genuine origin.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SeedRegistry {\n  struct Lot {\n    address producer;\n    string variety;\n    bytes32 rightsHolder;\n    bool authorised;\n  }\n\n  mapping(bytes32 => Lot) public lots;\n\n  function registerLot(bytes32 id, string calldata variety, bytes32 rights) external onlyLicensed {\n    lots[id] = Lot(msg.sender, variety, rights, true);\n  }\n}",
        simAction: "Simulate Lot Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming producer licence for AUTH_09...", tone: "default" },
          { text: "Recording variety HYB_MAIZE_44...", tone: "default" },
          { text: "Binding breeder rights holder...", tone: "default" },
          { text: "Writing lot identity to registry...", tone: "default" },
          { text: "[SUCCESS] Lot LOT_5521 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Packet Serializer",
        subtitle: "The Unit Binding",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Unit Binding",
          description:
            "Issues a unique code for every packet and binds it to the lot record. This moves authenticity from the lot level to the individual packet a farmer actually holds at the counter.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function serialize(bytes32 lotId, uint256 count) external onlyProducer {\n    for (uint256 i = 0; i < count; i++) {\n      bytes32 code = keccak256(abi.encode(lotId, i));\n      packets[code] = lotId;\n    }\n    emit PacketsSerialized(lotId, count);\n}",
        simAction: "Simulate Serialization",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Generating packet serials for LOT_5521...", tone: "default" },
          { text: "Deriving unique code per packet...", tone: "default" },
          { text: "Binding each code to lot record...", tone: "default" },
          { text: "Committing 2000 packet bindings...", tone: "default" },
          { text: "[SUCCESS] Packet codes issued and bound.", tone: "success" },
        ],
      },
      {
        title: "Custody Chain",
        subtitle: "The Distributor Trail",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Distributor Trail",
          description:
            "Records each licensed handoff down the distribution network. It lets an investigation trace exactly where unverified stock entered the chain and remove the responsible distributor.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function transferCustody(bytes32 lotId, address to) external {\n    require(custody[lotId] == msg.sender, \"Not holder\");\n    require(licensed[to], \"Unlicensed receiver\");\n    custody[lotId] = to;\n    trail[lotId].push(to);\n    emit CustodyTransferred(lotId, to);\n}",
        simAction: "Simulate Custody Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading current holder of LOT_5521...", tone: "default" },
          { text: "Validating receiver licence status...", tone: "default" },
          { text: "Appending distributor to custody trail...", tone: "default" },
          { text: "Updating current custody pointer...", tone: "default" },
          { text: "[SUCCESS] Custody recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Packet Verifier",
        subtitle: "The Authenticity Check",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authenticity Check",
          description:
            "Resolves a scanned packet code to its lot, producer, and rights holder. A counterfeit code resolves to nothing, so a fake packet fails the check instead of passing a look-alike scan.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyPacket(bytes32 code) external view returns (bool genuine, string memory variety) {\n    bytes32 lotId = packets[code];\n    if (lotId == 0) return (false, \"\");\n    return (lots[lotId].authorised, lots[lotId].variety);\n}",
        simAction: "Simulate Packet Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Farmer scans packet QR:5521-1180...", tone: "default" },
          { text: "Resolving code to lot record...", tone: "default" },
          { text: "Reading authorised status and variety...", tone: "default" },
          { text: "Returning breeder rights information...", tone: "default" },
          { text: "[SUCCESS] Genuine packet verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Seed authenticity is a horizontal capability. Here is how breeders, distributors, and farmers use one provenance network.",
    sectors: [
      { icon: FlaskConical, title: "Seed Breeders", description: "Protect variety IP and brand by anchoring every authorised lot, so unauthorised reproduction and seed saving are detectable against a licensed record.", assetTypes: ["Variety Rights", "Authorised Lots", "Licence Terms"] },
      { icon: Truck, title: "Distributors & Retailers", description: "Prove that stock on the shelf is genuine and traceable, protecting reputation and quickly isolating any distributor that introduced counterfeit packets.", assetTypes: ["Packet Serials", "Custody Records", "Stock Attestations"] },
      { icon: Tractor, title: "Farmers & Cooperatives", description: "Scan a packet before planting and confirm authenticity and variety, avoiding the yield damage that counterfeit seed causes.", assetTypes: ["Verified Packets", "Purchase Proofs", "Variety Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a breeder is bridging an ERP or a rural retailer is verifying from a phone, Cerulea routes both into one seed provenance network.",
    tracks: [
      {
        title: "Track A: Breeder System Bridging",
        description:
          "For seed companies on legacy ERP and production systems. Existing lot and production records are translated into on-chain provenance entries through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Production ERP", sublabel: "Seed Company Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Lot Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Seed Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Retail Field Verification",
        description:
          "For rural retailers and farmers verifying directly. A mobile app scans each packet and resolves it against the ledger with no account required.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Retail Scan App", sublabel: "Point-of-Sale Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Provenance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Authenticity Record", icon: QrCode, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a seed provenance network with lot registration, packet serialization, custody tracking, and scan verification from scratch requires supply chain and blockchain engineers and long distributor onboarding. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Provenance & IP Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects anti-counterfeit serialization benchmarks. Building lot registration, packet-level serialization, custody tracking, and a scan verification service for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your provenance and IP rules into pre-audited WebAssembly binaries and provisions the serialization and verification layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "export-compliance-documentation-shared-with-destination-country-regula",
    icon: FileCheck,
    eyebrow: "Cross-Border Compliance Engine",
    headline1: "Retire the paper.",
    headline2: "Clear customs in hours.",
    heroDescription:
      "Move export documents onto a shared network signed through the Document Signing module. Produce Grades and Certificates, Port and Customs Events, and Compliance Attestations carry each consignment's proof, so destination customs read the record directly instead of questioning paper.",
    heroCta: "Deploy Export Compliance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a days-long paper document exchange into a shared record destination customs can trust on arrival.",
    mechanics: [
      { title: "Signed Documents", description: "Replace scanned certificates with signed records. The Document Signing module binds each phytosanitary certificate, residue report, and lab result to its issuer, so authenticity travels with the consignment." },
      { title: "Grade & Certificate Anchor", description: "Attach quality proof to the shipment. Produce Grades and Certificates records grades and lab results against the consignment, giving customs a verifiable quality and safety file." },
      { title: "Customs Event Log", description: "Track the border journey. Port and Customs Events record each inspection and clearance step on-chain, so both origin and destination authorities share one live status." },
      { title: "Compliance Attestations", description: "Assemble the due diligence set. Compliance Attestations bundle each required proof for the destination market, so a consignment arrives with its full compliance dossier." },
      { title: "Direct Regulator Read", description: "Give destination customs the source. Customs read the shared record directly rather than re-validating paper, cutting verification from days to hours." },
      { title: "Lower Rejection Rates", description: "Cut destination rejections. Because documents are verified and complete before arrival, questionable or missing paperwork stops holding consignments at the port." },
    ],
    lifecycleTitle: "The Export Lifecycle",
    lifecycleSubtitle:
      "Follow one mango consignment from document assembly at origin to a customs officer clearing it at destination.",
    lifecycleSteps: [
      {
        label: "Document Assembly",
        description:
          "The exporter assembles the consignment's certificates and reports. The Document Signing module binds each document to its issuer and to the consignment record.",
        icon: ScrollText,
        logFilename: "cerulea_exportdocs.log",
        logLines: [
          { text: "[SYS] Assembling export document bundle...", time: "06:40:09", tone: "default" },
          { text: "[CMD] signDocs { consignment: \"MANGO_EXP_204\", docs: 4 }", time: "06:40:09", tone: "primary" },
          { text: "[AUTH] Binding each document to issuer identity...", time: "06:40:10", tone: "secondary" },
          { text: "[OK] 4 signed documents anchored at block 9920144.", time: "06:40:10", tone: "success" },
        ],
      },
      {
        label: "Grade Attestation",
        description:
          "Lab results and grades attach to the consignment. Produce Grades and Certificates records each figure as a verifiable quality and residue attestation.",
        icon: FileCheck,
        logFilename: "cerulea_exportdocs.log",
        logLines: [
          { text: "[SYS] Recording grade and residue results...", time: "10:05:31", tone: "default" },
          { text: "[CMD] attachGrades(MANGO_EXP_204, residue: \"PASS\")", time: "10:05:31", tone: "primary" },
          { text: "[SYS] Sealing lab report digest to consignment...", time: "10:05:32", tone: "default" },
          { text: "[OK] Quality attestation anchored, tamper-evident.", time: "10:05:32", tone: "success" },
        ],
      },
      {
        label: "Port Clearance Events",
        description:
          "The consignment departs and Port and Customs Events log each origin inspection and clearance step, giving the destination authority a live, shared status.",
        icon: Truck,
        logFilename: "cerulea_exportdocs.log",
        logLines: [
          { text: "[SYS] Logging origin port clearance...", time: "14:22:18", tone: "default" },
          { text: "[CMD] recordEvent(MANGO_EXP_204, event: \"ORIGIN_CLEARED\")", time: "14:22:18", tone: "primary" },
          { text: "[AUTH] Signing customs event with port authority key...", time: "14:22:19", tone: "secondary" },
          { text: "[OK] Origin clearance recorded on shared ledger.", time: "14:22:19", tone: "success" },
        ],
      },
      {
        label: "Destination Clearance",
        description:
          "A destination customs officer reads the shared record and clears the consignment within hours of arrival, without a physical document review.",
        icon: Landmark,
        logFilename: "cerulea_exportdocs.log",
        logLines: [
          { text: "[SYS] Destination customs querying MANGO_EXP_204...", time: "22:11:47", tone: "default" },
          { text: "[CMD] verifyConsignment(MANGO_EXP_204)", time: "22:11:47", tone: "primary" },
          { text: "[SYS] Validating 4 documents and grade attestation...", time: "22:11:47", tone: "default" },
          { text: "[OK] Consignment cleared. Paper check bypassed.", time: "22:11:48", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes export compliance into modular contracts for document signing, grade attestation, customs events, and destination verification, so a consignment clears on verified data.",
    layers: [
      {
        title: "Document Notary",
        subtitle: "The Signed Dossier",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Signed Dossier",
          description:
            "The document layer. Through the Document Signing module it binds each export certificate and report to its issuer by digest, so authenticity and authorship travel with the consignment record.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "contract ExportDocs {\n  struct Doc {\n    bytes32 hash;\n    address issuer;\n    string kind;\n  }\n\n  mapping(bytes32 => Doc[]) public dossier;\n\n  function signDoc(bytes32 consignment, bytes32 hash, string calldata kind) external onlyIssuer {\n    dossier[consignment].push(Doc(hash, msg.sender, kind));\n  }\n}",
        simAction: "Simulate Document Signing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting phytosanitary certificate...", tone: "default" },
          { text: "Computing document digest...", tone: "default" },
          { text: "Binding digest to issuer identity...", tone: "default" },
          { text: "Appending to consignment dossier...", tone: "default" },
          { text: "[SUCCESS] Signed document anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Grade Attestor",
        subtitle: "The Quality Proof",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Quality Proof",
          description:
            "Records grades and lab results against the consignment through Produce Grades and Certificates. It gives destination customs a verifiable residue and quality file rather than an unchecked paper report.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function attachGrades(bytes32 consignment, bytes32 labHash, bool residuePass) external onlyLab {\n    grades[consignment] = Grade(labHash, residuePass, block.timestamp);\n    emit GradeAttached(consignment, residuePass);\n}",
        simAction: "Simulate Grade Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading lab residue result...", tone: "default" },
          { text: "Confirming result is within limits...", tone: "default" },
          { text: "Sealing lab report digest...", tone: "default" },
          { text: "Attaching grade to consignment...", tone: "default" },
          { text: "[SUCCESS] Quality attestation anchored.", tone: "success" },
        ],
      },
      {
        title: "Customs Events",
        subtitle: "The Border Timeline",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Border Timeline",
          description:
            "Logs each inspection and clearance through Port and Customs Events. It gives both origin and destination authorities one shared, signed timeline instead of separate systems that must reconcile.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function recordEvent(bytes32 consignment, string calldata event) external onlyAuthority {\n    timeline[consignment].push(Event(event, msg.sender, block.timestamp));\n    emit CustomsEvent(consignment, event, msg.sender);\n}",
        simAction: "Simulate Customs Event",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Origin port initiating clearance...", tone: "default" },
          { text: "Validating authority signing key...", tone: "default" },
          { text: "Appending event to consignment timeline...", tone: "default" },
          { text: "Broadcasting status to destination...", tone: "default" },
          { text: "[SUCCESS] Origin clearance recorded.", tone: "success" },
        ],
      },
      {
        title: "Consignment Verifier",
        subtitle: "The Destination Gate",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Destination Gate",
          description:
            "Resolves a consignment to its full signed dossier, grade attestation, and customs timeline. It lets destination customs clear goods from verified data in hours instead of re-checking paper for days.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyConsignment(bytes32 id) external view returns (bool complete) {\n    return dossier[id].length >= requiredDocs && grades[id].residuePass;\n}",
        simAction: "Simulate Destination Clearance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Destination customs querying MANGO_EXP_204...", tone: "default" },
          { text: "Counting signed documents in dossier...", tone: "default" },
          { text: "Checking residue attestation status...", tone: "default" },
          { text: "Confirming customs timeline complete...", tone: "default" },
          { text: "[SUCCESS] Consignment cleared on verified data.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared export compliance is a horizontal capability. Here is how exporters, customs, and labs put one record to work.",
    sectors: [
      { icon: Truck, title: "Exporters & Trading Houses", description: "Ship consignments with a complete signed dossier so goods clear faster at destination and rejections from missing or questioned paperwork fall away.", assetTypes: ["Export Dossiers", "Signed Certificates", "Consignment Records"] },
      { icon: Landmark, title: "Customs Authorities", description: "Clear arrivals from a shared verified record instead of re-validating paper, sharing one live status between origin and destination.", assetTypes: ["Clearance Events", "Compliance Dossiers", "Inspection Logs"] },
      { icon: FlaskConical, title: "Labs & Inspection Bodies", description: "Attach residue and quality results directly to the consignment as verifiable attestations, so a lab report cannot be altered or detached in transit.", assetTypes: ["Lab Attestations", "Residue Reports", "Grade Sheets"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an exporter is bridging a trade documentation system or a customs desk is reading arrivals directly, Cerulea routes both into one compliance record.",
    tracks: [
      {
        title: "Track A: Trade System Bridging",
        description:
          "For exporters on legacy documentation and ERP systems. Existing certificates and events are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Trade Docs System", sublabel: "Exporter Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Document Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Export Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Customs Direct Access",
        description:
          "For destination authorities reading arrivals. A signed customs interface resolves each consignment against the shared ledger and clears it on verified data.",
        connectorLabels: ["AUTHORITY SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Customs Interface", sublabel: "Destination Authority", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Clearance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Consignment Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-border compliance network with document signing, grade attestation, customs event logging, and destination verification from scratch requires trade and blockchain engineers and long bilateral integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Document & Customs Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects cross-border trade digitisation benchmarks. Wiring document signing, grade attestation, and customs event exchange across two jurisdictions for an average corridor takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your document and customs rules into pre-audited WebAssembly binaries and provisions the shared compliance ledger and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "agri-equipment-sharing-and-rental-marketplace-among-smallholder-farmer",
    icon: Tractor,
    eyebrow: "Equipment Rental Engine",
    headline1: "Share the tractor.",
    headline2: "Pay for real hours.",
    heroDescription:
      "Run a rental marketplace where farmers book shared equipment. Device Attestation reads usage from sensors on the machine, and Escrow and Conditional Settlement charges the verified hours and releases payment on return, so owners collect fair, sensor-backed pay.",
    heroCta: "Deploy Rental Marketplaces",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn informal, memory-based equipment sharing into a metered marketplace that settles itself.",
    mechanics: [
      { title: "Open Booking Marketplace", description: "Coordinate shared machines. Farmers list and book tractors and implements on one marketplace, replacing informal arrangements that are hard to schedule and settle fairly." },
      { title: "Sensor-Verified Usage", description: "Charge for what was actually used. Device Attestation reads engine hours and usage directly from sensors on the equipment, so billing rests on measurement rather than estimates." },
      { title: "Escrow Booking Hold", description: "Secure the booking up front. Escrow and Conditional Settlement holds the renter's funds when a booking is confirmed, protecting the owner against a no-show." },
      { title: "Hours-Based Settlement", description: "Settle on return automatically. When the machine is returned, the contract charges the verified hours from escrow and releases payment to the owner in one step." },
      { title: "Dispute Elimination", description: "End arguments over usage. Because engine hours are signed by the device, a dispute over how long a machine ran is resolved from the sensor record." },
      { title: "Owner Utilisation", description: "Improve machine economics. Verified booking and payment history helps owners raise utilisation and price fairly, making shared ownership viable for smallholders." },
    ],
    lifecycleTitle: "The Rental Lifecycle",
    lifecycleSubtitle:
      "Follow one tractor booking from reservation through sensor-metered use to automatic settlement on return.",
    lifecycleSteps: [
      {
        label: "Booking Reservation",
        description:
          "A farmer books a tractor for a window. The contract records the terms and Escrow holds the renter's funds against the confirmed reservation.",
        icon: Handshake,
        logFilename: "cerulea_agrishare.log",
        logLines: [
          { text: "[SYS] Initializing rental booking manifest...", time: "05:50:33", tone: "default" },
          { text: "[CMD] bookAsset { machine: \"TRACTOR_31\", hours: 6 }", time: "05:50:33", tone: "primary" },
          { text: "[AUTH] Locking renter funds in booking escrow...", time: "05:50:34", tone: "secondary" },
          { text: "[OK] Booking BOOK_2204 confirmed at block 10120933.", time: "05:50:34", tone: "success" },
        ],
      },
      {
        label: "Machine Handover",
        description:
          "The owner hands over the machine and its sensor is attested to the booking, so usage from this point is tied to this renter and reservation.",
        icon: Tractor,
        logFilename: "cerulea_agrishare.log",
        logLines: [
          { text: "[SYS] Attesting equipment sensor to BOOK_2204...", time: "07:15:02", tone: "default" },
          { text: "[CMD] bindDevice(TRACTOR_31, booking: \"BOOK_2204\")", time: "07:15:02", tone: "primary" },
          { text: "[AUTH] Verifying device attestation signature...", time: "07:15:03", tone: "secondary" },
          { text: "[OK] Sensor bound. Usage metering active.", time: "07:15:03", tone: "success" },
        ],
      },
      {
        label: "Usage Metering",
        description:
          "The machine runs in the field. Device Attestation streams engine hours to the contract, building a signed, verifiable usage total for the booking.",
        icon: Radio,
        logFilename: "cerulea_agrishare.log",
        logLines: [
          { text: "[SYS] Receiving engine-hour telemetry...", time: "12:40:20", tone: "default" },
          { text: "[CMD] recordUsage(BOOK_2204, hours: 5.4)", time: "12:40:20", tone: "primary" },
          { text: "[SYS] Signing usage total from equipment sensor...", time: "12:40:21", tone: "default" },
          { text: "[OK] Verified 5.4 engine hours recorded.", time: "12:40:21", tone: "success" },
        ],
      },
      {
        label: "Return Settlement",
        description:
          "On return, Escrow and Conditional Settlement charges the verified hours and releases payment to the owner, refunding any unused hold to the renter.",
        icon: Wallet,
        logFilename: "cerulea_agrishare.log",
        logLines: [
          { text: "[SYS] Machine returned, closing BOOK_2204...", time: "15:05:44", tone: "default" },
          { text: "[CMD] settle(BOOK_2204, hours: 5.4, rate: 400)", time: "15:05:44", tone: "primary" },
          { text: "[SYS] Charging escrow and refunding balance...", time: "15:05:45", tone: "default" },
          { text: "[OK] Owner paid for 5.4 hours. Booking closed.", time: "15:05:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes equipment rental into modular contracts for listings, device attestation, usage metering, and escrow settlement, so payment reflects verified use.",
    layers: [
      {
        title: "Listing Registry",
        subtitle: "The Marketplace",
        icon: Tractor,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Marketplace",
          description:
            "The state layer for shared machines. It holds each listing, its owner, rate, and availability, giving renters one place to book equipment that informal sharing could never coordinate.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RentalMarket {\n  struct Listing {\n    address owner;\n    string machine;\n    uint256 rate;\n    bool available;\n  }\n\n  mapping(bytes32 => Listing) public listings;\n\n  function list(bytes32 id, string calldata machine, uint256 rate) external {\n    listings[id] = Listing(msg.sender, machine, rate, true);\n  }\n}",
        simAction: "Simulate Listing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading owner wallet for TRACTOR_31...", tone: "default" },
          { text: "Recording hourly rate...", tone: "default" },
          { text: "Setting availability flag...", tone: "default" },
          { text: "Writing listing to marketplace...", tone: "default" },
          { text: "[SUCCESS] Machine listed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Booking Escrow",
        subtitle: "The Secured Hold",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Secured Hold",
          description:
            "Locks the renter's funds when a booking is confirmed. It protects the owner against a no-show and guarantees the capital is present to pay for the verified hours on return.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function book(bytes32 listingId, uint256 hours) external payable {\n    require(listings[listingId].available, \"Unavailable\");\n    uint256 hold = hours * listings[listingId].rate;\n    require(msg.value >= hold, \"Insufficient\");\n    bookings[bookingId++] = Booking(msg.sender, listingId, hours, msg.value);\n}",
        simAction: "Simulate Booking Hold",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming machine availability...", tone: "default" },
          { text: "Calculating escrow hold for 6 hours...", tone: "default" },
          { text: "Locking renter funds...", tone: "default" },
          { text: "Recording booking record...", tone: "default" },
          { text: "[SUCCESS] Booking confirmed with escrow.", tone: "success" },
        ],
      },
      {
        title: "Usage Attestor",
        subtitle: "The Engine-Hour Meter",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Engine-Hour Meter",
          description:
            "Reads usage from sensors on the equipment through Device Attestation. It builds a signed engine-hour total for the booking, so billing rests on measured use rather than either party's estimate.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function recordUsage(uint256 bookingId, uint256 hours, bytes memory sig) external {\n    require(verifyDevice(sig), \"Invalid device\");\n    bookings[bookingId].usedHours = hours;\n    emit UsageRecorded(bookingId, hours);\n}",
        simAction: "Simulate Usage Read",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving engine-hour telemetry...", tone: "default" },
          { text: "Verifying device attestation signature...", tone: "default" },
          { text: "Recording 5.4 verified hours...", tone: "default" },
          { text: "Updating booking usage total...", tone: "default" },
          { text: "[SUCCESS] Verified usage recorded.", tone: "success" },
        ],
      },
      {
        title: "Return Settlement",
        subtitle: "The Fair Payout",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fair Payout",
          description:
            "Charges the verified hours from escrow and releases payment to the owner on return, refunding any unused hold. It closes the booking with a settlement both parties can trust.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(uint256 bookingId) external {\n    Booking storage b = bookings[bookingId];\n    uint256 charge = b.usedHours * listings[b.listingId].rate;\n    payable(listings[b.listingId].owner).transfer(charge);\n    payable(b.renter).transfer(b.escrow - charge);\n    emit Settled(bookingId, charge);\n}",
        simAction: "Simulate Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified 5.4 hours for booking...", tone: "default" },
          { text: "Computing charge at owner rate...", tone: "default" },
          { text: "Paying owner from escrow...", tone: "default" },
          { text: "Refunding unused balance to renter...", tone: "default" },
          { text: "[SUCCESS] Owner paid, booking closed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Metered equipment sharing is a horizontal capability. Here is how owners, cooperatives, and dealers put the marketplace to work.",
    sectors: [
      { icon: Tractor, title: "Equipment Owners", description: "Rent out idle machines with confidence, collecting sensor-verified payment for the exact hours used and raising utilisation on expensive assets.", assetTypes: ["Machine Listings", "Usage Records", "Owner Payouts"] },
      { icon: Users, title: "Farmer Cooperatives", description: "Coordinate shared equipment across many smallholders on one marketplace, giving members affordable access without the friction of informal settlement.", assetTypes: ["Shared Bookings", "Member Ledgers", "Escrow Holds"] },
      { icon: Handshake, title: "Dealers & Fleet Operators", description: "Run a managed rental fleet with automatic metering and settlement, cutting billing overhead and usage disputes across a large machine pool.", assetTypes: ["Fleet Bookings", "Telemetry Feeds", "Settlement Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a dealer is bridging a fleet system or a smallholder is booking from a phone, Cerulea routes both into one rental marketplace.",
    tracks: [
      {
        title: "Track A: Fleet System Bridging",
        description:
          "For dealers on legacy fleet and telematics platforms. Existing machine and usage data are translated into on-chain bookings and settlements through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Fleet Telematics", sublabel: "Dealer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Usage Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Rental Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Smallholder Mobile Booking",
        description:
          "For farmers booking directly. A mobile wallet confirms each booking and receives settlement on-chain, with equipment sensors signing the usage total.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Farmer App / Wallet", sublabel: "Mobile Booking Devices", icon: Fingerprint, accent: false },
          { label: "Marketplace Validators", sublabel: "Booking Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Rental Record", icon: Tractor, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a rental marketplace with booking escrow, device attestation, usage metering, and automatic settlement from scratch requires marketplace and IoT engineers and long device integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Booking & Usage Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects marketplace and telematics integration benchmarks. Building booking escrow, device attestation, usage metering, and automatic settlement for an average platform takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your booking and usage rules into pre-audited WebAssembly binaries and wires the device attestation and escrow layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "farm-labour-contract-and-wage-payment-via-mobile-wallets",
    icon: Wallet,
    eyebrow: "Labour Settlement Engine",
    headline1: "Pay wages to a wallet.",
    headline2: "Build a work history.",
    heroDescription:
      "Record each day of work and each wage payment to a mobile wallet through Wallet Authentication and Escrow and Conditional Settlement. The Civil Registry and Compliance Attestations build a portable, verified work history that unlocks credit and scheme eligibility.",
    heroCta: "Deploy Labour Payments",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn untracked cash labour into recorded wages and a work history a labourer can actually use.",
    mechanics: [
      { title: "Wallet-Authenticated Workers", description: "Give each labourer a verified identity. Wallet Authentication ties a worker to a mobile wallet, so days worked and wages paid attach to a real, portable identity." },
      { title: "Daily Work Records", description: "Capture each day worked. The contract records attendance and task per day across every farm a labourer serves, building a continuous record where cash left none." },
      { title: "Escrow Wage Payment", description: "Pay directly and on time. Escrow and Conditional Settlement releases the day's wage straight to the worker's wallet, removing cash handling and payment delays." },
      { title: "Portable Work History", description: "Let the record travel. The Civil Registry aggregates verified work across employers, so a labourer's history follows them rather than staying trapped with one farmer." },
      { title: "Credit & Scheme Proof", description: "Unlock finance and benefits. Compliance Attestations turn the work history into proof of income and employment, opening loans and government schemes that need it." },
      { title: "Employer Compliance", description: "Give farmers a clean record. Verified wage payments create an auditable labour record, helping employers demonstrate fair pay and meet compliance requirements." },
    ],
    lifecycleTitle: "The Labour Lifecycle",
    lifecycleSubtitle:
      "Follow a seasonal labourer from a verified day of work to a wage payment and a portable history that unlocks credit.",
    lifecycleSteps: [
      {
        label: "Worker Onboarding",
        description:
          "A labourer is registered with a mobile wallet. Wallet Authentication and the Civil Registry anchor a portable identity that spans every employer they work for.",
        icon: IdCard,
        logFilename: "cerulea_labourpay.log",
        logLines: [
          { text: "[SYS] Registering worker identity to wallet...", time: "05:20:11", tone: "default" },
          { text: "[CMD] onboardWorker { id: \"LAB_7781\", wallet: \"0x9c2\" }", time: "05:20:11", tone: "primary" },
          { text: "[AUTH] Binding identity to civil registry entry...", time: "05:20:12", tone: "secondary" },
          { text: "[OK] Worker LAB_7781 onboarded at block 10920155.", time: "05:20:12", tone: "success" },
        ],
      },
      {
        label: "Day of Work",
        description:
          "The worker's attendance and task are recorded for the day at a farm. The entry adds to a continuous work record across employers.",
        icon: FileCheck,
        logFilename: "cerulea_labourpay.log",
        logLines: [
          { text: "[SYS] Recording day of work for LAB_7781...", time: "17:10:40", tone: "default" },
          { text: "[CMD] logWorkday(LAB_7781, farm: \"UP_FARM_18\", task: \"HARVEST\")", time: "17:10:40", tone: "primary" },
          { text: "[SYS] Appending entry to portable work history...", time: "17:10:41", tone: "default" },
          { text: "[OK] Workday recorded and signed by employer.", time: "17:10:41", tone: "success" },
        ],
      },
      {
        label: "Wage Settlement",
        description:
          "Escrow and Conditional Settlement releases the day's wage to the worker's wallet, creating a verified payment record tied to the workday.",
        icon: Wallet,
        logFilename: "cerulea_labourpay.log",
        logLines: [
          { text: "[SYS] Releasing daily wage to LAB_7781...", time: "17:15:03", tone: "default" },
          { text: "[CMD] payWage(LAB_7781, amount: 450, day: 88)", time: "17:15:03", tone: "primary" },
          { text: "[AUTH] Transferring from farm escrow to wallet...", time: "17:15:04", tone: "secondary" },
          { text: "[OK] Wage paid. Payment linked to workday.", time: "17:15:04", tone: "success" },
        ],
      },
      {
        label: "History Attestation",
        description:
          "Compliance Attestations compile the verified work and payment history into proof of income a lender or scheme can read to grant credit or benefits.",
        icon: Search,
        logFilename: "cerulea_labourpay.log",
        logLines: [
          { text: "[SYS] Lender requesting income proof for LAB_7781...", time: "10:02:19", tone: "default" },
          { text: "[CMD] attestHistory(LAB_7781, window: \"180D\")", time: "10:02:19", tone: "primary" },
          { text: "[SYS] Aggregating 96 workdays and wage records...", time: "10:02:20", tone: "default" },
          { text: "[OK] Income attestation issued. Credit unlocked.", time: "10:02:20", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes labour payment into modular contracts for worker identity, workday records, wage escrow, and history attestation, so wages are paid and a history is built.",
    layers: [
      {
        title: "Worker Registry",
        subtitle: "The Portable Identity",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Portable Identity",
          description:
            "Anchors each labourer to a mobile wallet through Wallet Authentication and the Civil Registry. This identity spans every employer, so a worker's record follows them rather than fragmenting across farms.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract WorkerRegistry {\n  struct Worker {\n    address wallet;\n    bytes32 civilId;\n    uint256 daysWorked;\n  }\n\n  mapping(bytes32 => Worker) public workers;\n\n  function onboard(bytes32 id, address wallet, bytes32 civilId) external {\n    workers[id] = Worker(wallet, civilId, 0);\n  }\n}",
        simAction: "Simulate Worker Onboarding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading worker mobile wallet...", tone: "default" },
          { text: "Binding to civil registry entry...", tone: "default" },
          { text: "Initialising work-day counter...", tone: "default" },
          { text: "Writing worker identity...", tone: "default" },
          { text: "[SUCCESS] Worker LAB_7781 onboarded.", tone: "success" },
        ],
      },
      {
        title: "Workday Log",
        subtitle: "The Attendance Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Attendance Record",
          description:
            "Records each day worked and its task, signed by the employer. It builds a continuous, verifiable attendance record across many farms where cash payment left no trace at all.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function logWorkday(bytes32 workerId, bytes32 farm, string calldata task) external onlyEmployer {\n    history[workerId].push(Workday(farm, task, block.timestamp));\n    workers[workerId].daysWorked++;\n    emit WorkdayLogged(workerId, farm);\n}",
        simAction: "Simulate Workday Log",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading employer signature for UP_FARM_18...", tone: "default" },
          { text: "Recording harvest task for the day...", tone: "default" },
          { text: "Appending to portable history...", tone: "default" },
          { text: "Incrementing days-worked total...", tone: "default" },
          { text: "[SUCCESS] Workday recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Wage Escrow",
        subtitle: "The Direct Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Direct Payout",
          description:
            "Releases the day's wage straight to the worker's wallet through Escrow and Conditional Settlement. It removes cash handling and delay, and links every payment to the workday it covers.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function payWage(bytes32 workerId, uint256 amount, uint256 dayIndex) external onlyEmployer {\n    payable(workers[workerId].wallet).transfer(amount);\n    payments[workerId].push(Payment(amount, dayIndex, block.timestamp));\n    emit WagePaid(workerId, amount);\n}",
        simAction: "Simulate Wage Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading wage due for LAB_7781...", tone: "default" },
          { text: "Debiting farm escrow account...", tone: "default" },
          { text: "Transferring wage to worker wallet...", tone: "default" },
          { text: "Linking payment to workday...", tone: "default" },
          { text: "[SUCCESS] Daily wage paid to wallet.", tone: "success" },
        ],
      },
      {
        title: "History Attestor",
        subtitle: "The Income Proof",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Income Proof",
          description:
            "Compiles verified workdays and wages into an attestation through Compliance Attestations. It turns an informal worker's record into proof of income that unlocks credit and government schemes.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function attestHistory(bytes32 workerId, uint256 window) external view returns (uint256 days, uint256 earned) {\n    Payment[] memory p = payments[workerId];\n    for (uint256 i = 0; i < p.length; i++) {\n      if (block.timestamp - p[i].time <= window) { days++; earned += p[i].amount; }\n    }\n}",
        simAction: "Simulate Income Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Lender requesting 180-day history...", tone: "default" },
          { text: "Aggregating verified workdays...", tone: "default" },
          { text: "Summing wages paid in window...", tone: "default" },
          { text: "Composing income attestation...", tone: "default" },
          { text: "[SUCCESS] Income proof issued, credit unlocked.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified labour payment is a horizontal capability. Here is how workers, employers, and lenders put one record to work.",
    sectors: [
      { icon: Users, title: "Seasonal Labourers", description: "Receive wages directly to a mobile wallet and carry a portable work history across employers, turning informal labour into a record that unlocks finance.", assetTypes: ["Wage Payments", "Work History", "Income Proofs"] },
      { icon: Tractor, title: "Farms & Employers", description: "Pay workers on time without cash handling and hold an auditable labour record that demonstrates fair pay and supports compliance.", assetTypes: ["Payment Records", "Attendance Logs", "Labour Attestations"] },
      { icon: Coins, title: "Lenders & Public Schemes", description: "Read a verified income and employment history to extend credit or grant scheme eligibility to workers who previously had no formal record.", assetTypes: ["Credit Assessments", "Scheme Eligibility", "Verified Income"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an estate is bridging a payroll system or a labourer is paid to a phone wallet, Cerulea routes both into one verified labour record.",
    tracks: [
      {
        title: "Track A: Estate Payroll Bridging",
        description:
          "For large estates and cooperatives on legacy payroll systems. Existing attendance and wage records are translated into on-chain workdays and payments through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Payroll System", sublabel: "Estate Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Wage Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Labour Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Worker Mobile Wallet",
        description:
          "For labourers paid directly. A mobile wallet authenticates the worker and receives each wage on-chain, building a portable history from the phone.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Worker Wallet App", sublabel: "Mobile Payment Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Payment Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Portable Work Record", icon: Wallet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building wallet-based wage payment, workday recording, escrow settlement, and portable history attestation from scratch requires identity and payments engineers and long field rollout. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Wage & History Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects mobile payments and identity integration benchmarks. Building wallet authentication, workday recording, wage escrow, and history attestation for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your wage and history rules into pre-audited WebAssembly binaries and provisions the wallet and escrow layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "catch-to-plate-traceability-to-combat-illegal-unreported-fishing-iuu",
    icon: QrCode,
    eyebrow: "Seafood Provenance Engine",
    headline1: "Trace every catch.",
    headline2: "Shut out illegal fishing.",
    heroDescription:
      "Record each catch from vessel to plate on a shared traceability network. The Traceability Ledger and Provenance Notary anchor every landing, Port and Customs Events and Cold-Chain Monitoring follow the lot, and Device Attestation confirms the source vessel while a public QR exposes the record.",
    heroCta: "Deploy Catch Traceability",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn paper logbooks into a verifiable catch record that IUU-sourced product cannot fake.",
    mechanics: [
      { title: "Vessel-Attested Landings", description: "Anchor the catch at the source. Device Attestation confirms the source vessel and the Traceability Ledger records each landing, so a lot's origin cannot be fabricated after the fact." },
      { title: "Landing Provenance", description: "Bind catch to place and time. Provenance Notary anchors species, area, and landing to the lot, giving retailers a credible catch record instead of a hand-written logbook." },
      { title: "Port & Customs Events", description: "Follow the border journey. Port and Customs Events record each landing and inspection step, so an IUU-sourced lot that skips a legitimate port carries no valid record." },
      { title: "Cold-Chain Continuity", description: "Track condition through the chain. Cold-Chain Monitoring records temperature across custody, tying food safety to the same lot the provenance record follows." },
      { title: "Remote Supplier Audit", description: "Replace on-site audits. A retailer completes a supplier audit remotely from on-chain catch records in hours, instead of a multi-day physical inspection." },
      { title: "Consumer QR Proof", description: "Expose origin to the buyer. A public QR resolves a pack to its full catch-to-plate journey, so a shopper or importer confirms a legal, sustainable source." },
    ],
    lifecycleTitle: "The Catch Lifecycle",
    lifecycleSubtitle:
      "Follow one shrimp lot from a vessel landing through port and cold chain to a retailer's remote audit.",
    lifecycleSteps: [
      {
        label: "Vessel Landing",
        description:
          "A vessel lands a catch. Device Attestation confirms the source vessel and the Traceability Ledger anchors the species, area, and quantity as the lot's origin.",
        icon: Radio,
        logFilename: "cerulea_catchtrace.log",
        logLines: [
          { text: "[SYS] Initializing catch landing manifest...", time: "04:30:52", tone: "default" },
          { text: "[CMD] landCatch { vessel: \"IMO_88231\", species: \"SHRIMP\", kg: 1800 }", time: "04:30:52", tone: "primary" },
          { text: "[AUTH] Device attestation confirming source vessel...", time: "04:30:53", tone: "secondary" },
          { text: "[OK] Lot CATCH_6610 anchored at block 11220477.", time: "04:30:53", tone: "success" },
        ],
      },
      {
        label: "Port Processing",
        description:
          "The lot lands at port and Port and Customs Events record the offload and inspection, tying the catch to a legitimate landing point.",
        icon: Truck,
        logFilename: "cerulea_catchtrace.log",
        logLines: [
          { text: "[SYS] Recording port offload for CATCH_6610...", time: "08:14:20", tone: "default" },
          { text: "[CMD] recordEvent(CATCH_6610, event: \"PORT_OFFLOAD\")", time: "08:14:20", tone: "primary" },
          { text: "[AUTH] Signing landing with port authority key...", time: "08:14:21", tone: "secondary" },
          { text: "[OK] Legitimate landing recorded on ledger.", time: "08:14:21", tone: "success" },
        ],
      },
      {
        label: "Cold-Chain Custody",
        description:
          "The lot moves through processing and logistics. Cold-Chain Monitoring records temperature at each custody stage against the same lot identity.",
        icon: Thermometer,
        logFilename: "cerulea_catchtrace.log",
        logLines: [
          { text: "[SYS] Logging cold-chain reading for CATCH_6610...", time: "13:40:05", tone: "default" },
          { text: "[CMD] recordTemp(CATCH_6610, celsius: -18.2)", time: "13:40:05", tone: "primary" },
          { text: "[SYS] Reading within safe range, sealing to lot...", time: "13:40:06", tone: "default" },
          { text: "[OK] Cold-chain continuity maintained.", time: "13:40:06", tone: "success" },
        ],
      },
      {
        label: "Retailer Audit",
        description:
          "A supermarket audits the supplier remotely from the on-chain record and clears the lot, while any lot with no valid record is rejected.",
        icon: Search,
        logFilename: "cerulea_catchtrace.log",
        logLines: [
          { text: "[SYS] Retailer auditing supplier lot CATCH_6610...", time: "16:55:33", tone: "default" },
          { text: "[CMD] auditLot(CATCH_6610)", time: "16:55:33", tone: "primary" },
          { text: "[SYS] Verifying vessel, port, and cold-chain records...", time: "16:55:33", tone: "default" },
          { text: "[OK] Lot verified legal. IUU lots rejected at port.", time: "16:55:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes catch traceability into modular contracts for vessel-attested landings, port events, cold-chain continuity, and public verification, so IUU product cannot pass.",
    layers: [
      {
        title: "Landing Registry",
        subtitle: "The Catch Anchor",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Catch Anchor",
          description:
            "The origin layer for seafood. It anchors each landing to its source vessel, species, and area through Device Attestation and Provenance Notary, so a lot's origin is fixed the moment it is caught.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CatchRegistry {\n  struct Lot {\n    bytes32 vessel;\n    string species;\n    bytes32 area;\n    uint256 kg;\n  }\n\n  mapping(bytes32 => Lot) public lots;\n\n  function landCatch(bytes32 id, bytes32 vessel, string calldata species, uint256 kg) external onlyAttested {\n    lots[id] = Lot(vessel, species, area(id), kg);\n  }\n}",
        simAction: "Simulate Vessel Landing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming vessel attestation IMO_88231...", tone: "default" },
          { text: "Recording species and catch area...", tone: "default" },
          { text: "Anchoring landed quantity...", tone: "default" },
          { text: "Writing lot origin to ledger...", tone: "default" },
          { text: "[SUCCESS] Lot CATCH_6610 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Port Events",
        subtitle: "The Landing Proof",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Landing Proof",
          description:
            "Records each offload and inspection through Port and Customs Events. It ties a lot to a legitimate landing point, so IUU product that never passed a real port has no matching record.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function recordEvent(bytes32 lotId, string calldata event) external onlyAuthority {\n    events[lotId].push(PortEvent(event, msg.sender, block.timestamp));\n    emit PortEventLogged(lotId, event);\n}",
        simAction: "Simulate Port Event",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Port initiating offload for CATCH_6610...", tone: "default" },
          { text: "Validating port authority key...", tone: "default" },
          { text: "Appending landing event to lot...", tone: "default" },
          { text: "Confirming legitimate landing point...", tone: "default" },
          { text: "[SUCCESS] Port landing recorded.", tone: "success" },
        ],
      },
      {
        title: "Cold-Chain Monitor",
        subtitle: "The Condition Trail",
        icon: Thermometer,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Condition Trail",
          description:
            "Records temperature at each custody stage through Cold-Chain Monitoring. It binds food-safety condition to the same lot the provenance record follows, exposing any excursion by stage.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function recordTemp(bytes32 lotId, int256 celsius, bytes memory sig) external {\n    require(verifySensor(sig), \"Invalid sensor\");\n    readings[lotId].push(Reading(celsius, block.timestamp));\n    if (celsius > threshold) emit Excursion(lotId, celsius);\n}",
        simAction: "Simulate Cold-Chain Read",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving temperature reading -18.2C...", tone: "default" },
          { text: "Verifying cold-chain sensor signature...", tone: "default" },
          { text: "Comparing against safe threshold...", tone: "default" },
          { text: "Sealing reading to lot CATCH_6610...", tone: "default" },
          { text: "[SUCCESS] Cold-chain continuity recorded.", tone: "success" },
        ],
      },
      {
        title: "Public Verifier",
        subtitle: "The Plate Window",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Plate Window",
          description:
            "Resolves a pack QR to its full catch-to-plate journey and condition trail. It lets a retailer audit remotely and a shopper confirm a legal, sustainable source without trusting any single party.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function auditLot(bytes32 id) external view returns (bool legal, Reading[] memory chain) {\n    bool hasVessel = lots[id].vessel != 0;\n    bool hasLanding = events[id].length > 0;\n    return (hasVessel && hasLanding, readings[id]);\n}",
        simAction: "Simulate Lot Audit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Retailer scanning lot CATCH_6610...", tone: "default" },
          { text: "Confirming attested source vessel...", tone: "default" },
          { text: "Confirming legitimate port landing...", tone: "default" },
          { text: "Returning cold-chain trail...", tone: "default" },
          { text: "[SUCCESS] Lot verified legal and traceable.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Catch traceability is a horizontal capability. Here is how vessels, retailers, and authorities put one record to work.",
    sectors: [
      { icon: Radio, title: "Vessels & Processors", description: "Prove a legal catch from the moment of landing, turning verifiable provenance into market access as retailers demand credible catch documentation.", assetTypes: ["Catch Landings", "Vessel Attestations", "Processing Records"] },
      { icon: Building2, title: "Retailers & Importers", description: "Audit seafood suppliers remotely from on-chain records in hours, rejecting IUU-sourced lots that carry no valid catch history.", assetTypes: ["Supplier Audits", "Catch Records", "Consumer QR Packs"] },
      { icon: Landmark, title: "Fisheries Authorities", description: "Verify that landed product came through legitimate ports and vessels, using the shared record to shut IUU catch out of the supply chain.", assetTypes: ["Landing Registries", "Port Events", "Compliance Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a processor is bridging a landing system or a vessel is attesting a catch at sea, Cerulea routes both into one traceability record.",
    tracks: [
      {
        title: "Track A: Processor System Bridging",
        description:
          "For processors and importers on legacy traceability systems. Existing landing and lot data are translated into on-chain catch records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Landing System", sublabel: "Processor Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Catch Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Catch Traceability Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Vessel Device Attestation",
        description:
          "For vessels attesting catch directly. A device signature ties each landing to the source vessel and routes it to the shared traceability ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Vessel Device", sublabel: "Onboard Attestation", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Landing Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Catch Record", icon: QrCode, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a catch traceability network with vessel attestation, port event logging, cold-chain monitoring, and public verification from scratch requires supply chain and IoT engineers and long fleet integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Catch & Custody Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects seafood traceability integration benchmarks. Wiring vessel attestation, port events, cold-chain monitoring, and a public verification portal for an average network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your catch and custody rules into pre-audited WebAssembly binaries and provisions the shared ledger and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "fishing-quota-allocation-and-compliance-monitoring-across-multiple-ves",
    icon: Scale,
    eyebrow: "Quota Compliance Engine",
    headline1: "Balance every quota.",
    headline2: "Stop overfishing at port.",
    heroDescription:
      "Hold live quota balances on a shared network. Every catch record updates the balance through the Logic and Actions Editor, and Compliance Attestations and Notifications flag a vessel the moment it nears its limit, so overfishing is prevented at the structural level.",
    heroCta: "Deploy Quota Monitoring",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn impossible manual monitoring across a fleet into a live quota ledger that enforces itself.",
    mechanics: [
      { title: "Live Quota Balances", description: "Hold every allocation on-chain. The shared network tracks each vessel's remaining quota in real time, replacing manual monitoring that cannot scale across hundreds of boats." },
      { title: "Catch-Linked Deduction", description: "Update the balance at each landing. Every catch record decrements the vessel's quota through the Logic and Actions Editor, so the ledger always reflects true remaining allowance." },
      { title: "Approaching-Limit Alerts", description: "Warn before the breach. Notifications flag a vessel the moment it nears its quota, giving the operator and authority time to act before overfishing occurs." },
      { title: "Port-Level Enforcement", description: "Block offloading over quota. A vessel that exceeds its limit is flagged and blocked at port before it can offload, stopping overfishing at the structural level." },
      { title: "Compliance Attestations", description: "Prove each vessel's standing. Compliance Attestations record whether each boat stayed within quota, building a verifiable record for licensing and enforcement." },
      { title: "Instant Season Reports", description: "Generate reports in minutes. The authority compiles a full season compliance report directly from the ledger instead of reconciling paper logs across the fleet." },
    ],
    lifecycleTitle: "The Quota Lifecycle",
    lifecycleSubtitle:
      "Follow one season from quota allocation through catch deductions to a vessel blocked at port for exceeding its limit.",
    lifecycleSteps: [
      {
        label: "Quota Allocation",
        description:
          "The authority allocates seasonal quota to each vessel. The shared network anchors every balance as the season's baseline against which catches are measured.",
        icon: Scale,
        logFilename: "cerulea_quota.log",
        logLines: [
          { text: "[SYS] Initializing seasonal quota table...", time: "05:00:14", tone: "default" },
          { text: "[CMD] allocateQuota { vessel: \"IMO_44120\", tonnes: 220 }", time: "05:00:14", tone: "primary" },
          { text: "[AUTH] Validating licensing authority signature...", time: "05:00:15", tone: "secondary" },
          { text: "[OK] Quota anchored for 180 vessels at block 11920344.", time: "05:00:15", tone: "success" },
        ],
      },
      {
        label: "Catch Deduction",
        description:
          "A vessel lands a catch and its quota balance is decremented. The Logic and Actions Editor updates the remaining allowance in the same transaction.",
        icon: Radio,
        logFilename: "cerulea_quota.log",
        logLines: [
          { text: "[SYS] Recording landing for IMO_44120...", time: "09:30:41", tone: "default" },
          { text: "[CMD] deductQuota(IMO_44120, catch: 30)", time: "09:30:41", tone: "primary" },
          { text: "[SYS] Remaining quota now 190 tonnes...", time: "09:30:41", tone: "default" },
          { text: "[OK] Catch recorded and quota updated.", time: "09:30:42", tone: "success" },
        ],
      },
      {
        label: "Limit Alert",
        description:
          "A vessel approaches its quota. Notifications flag the approaching limit to the operator and the authority before an over-quota landing can occur.",
        icon: Activity,
        logFilename: "cerulea_quota.log",
        logLines: [
          { text: "[SYS] Evaluating quota usage for IMO_44120...", time: "14:10:08", tone: "default" },
          { text: "[CMD] checkQuota(IMO_44120)", time: "14:10:08", tone: "primary" },
          { text: "[SYS] Vessel at 95pct of seasonal quota.", time: "14:10:08", tone: "secondary" },
          { text: "[OK] Approaching-limit alert dispatched.", time: "14:10:09", tone: "success" },
        ],
      },
      {
        label: "Port Block",
        description:
          "A vessel tries to exceed quota. The contract flags the breach and the vessel is blocked at port before offloading, and Compliance Attestations record the event.",
        icon: Gavel,
        logFilename: "cerulea_quota.log",
        logLines: [
          { text: "[SYS] Over-quota landing attempt for IMO_44120...", time: "18:22:50", tone: "default" },
          { text: "[CMD] enforceAtPort(IMO_44120, excess: 12)", time: "18:22:50", tone: "primary" },
          { text: "[AUTH] Blocking offload and recording breach...", time: "18:22:51", tone: "secondary" },
          { text: "[OK] Offload blocked. Overfishing prevented.", time: "18:22:51", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes quota compliance into modular contracts for allocation state, catch deduction, limit alerts, and port enforcement, so overfishing is stopped before it lands.",
    layers: [
      {
        title: "Quota Registry",
        subtitle: "The Balance Ledger",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Balance Ledger",
          description:
            "The state layer for the fleet. It stores each vessel's allocation and live remaining balance, giving the deduction and enforcement contracts one authoritative view of every quota.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract QuotaRegistry {\n  struct Quota {\n    bytes32 vessel;\n    uint256 allocation;\n    uint256 used;\n  }\n\n  mapping(bytes32 => Quota) public quotas;\n\n  function allocate(bytes32 vessel, uint256 tonnes) external onlyAuthority {\n    quotas[vessel] = Quota(vessel, tonnes, 0);\n  }\n}",
        simAction: "Simulate Quota Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Validating licensing authority...", tone: "default" },
          { text: "Reading vessel IMO_44120...", tone: "default" },
          { text: "Writing seasonal allocation of 220...", tone: "default" },
          { text: "Initialising used balance to zero...", tone: "default" },
          { text: "[SUCCESS] Quota anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Deduction Engine",
        subtitle: "The Live Decrement",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Decrement",
          description:
            "Updates a vessel's balance at each landing through the Logic and Actions Editor. Because every catch decrements the quota in the same transaction, the ledger always reflects true remaining allowance.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function deduct(bytes32 vessel, uint256 catch) external onlyRecorder {\n    Quota storage q = quotas[vessel];\n    q.used += catch;\n    emit CatchDeducted(vessel, catch, q.allocation - q.used);\n}",
        simAction: "Simulate Catch Deduction",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording landing for IMO_44120...", tone: "default" },
          { text: "Adding 30 tonnes to used total...", tone: "default" },
          { text: "Computing remaining allowance...", tone: "default" },
          { text: "Emitting quota update event...", tone: "default" },
          { text: "[SUCCESS] Quota decremented to 190.", tone: "success" },
        ],
      },
      {
        title: "Alert Engine",
        subtitle: "The Limit Watch",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Limit Watch",
          description:
            "Evaluates each vessel against its allocation and dispatches an approaching-limit alert through Notifications. It gives operators and authorities time to act before an over-quota landing happens.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function checkQuota(bytes32 vessel) external view returns (uint8 pct) {\n    Quota memory q = quotas[vessel];\n    pct = uint8((q.used * 100) / q.allocation);\n    if (pct >= 90) emit ApproachingLimit(vessel, pct);\n}",
        simAction: "Simulate Limit Alert",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading used and allocation for IMO_44120...", tone: "default" },
          { text: "Computing quota usage percentage...", tone: "default" },
          { text: "Detecting 95pct of quota used...", tone: "default" },
          { text: "Dispatching approaching-limit alert...", tone: "default" },
          { text: "[SUCCESS] Operator and authority notified.", tone: "success" },
        ],
      },
      {
        title: "Port Enforcer",
        subtitle: "The Offload Block",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Offload Block",
          description:
            "Blocks an over-quota vessel at port before it can offload and records the breach through Compliance Attestations. It stops overfishing at the structural level rather than after the catch is landed.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function enforceAtPort(bytes32 vessel, uint256 excess) external onlyPort {\n    require(quotas[vessel].used > quotas[vessel].allocation, \"Within quota\");\n    blocked[vessel] = true;\n    emit OffloadBlocked(vessel, excess);\n}",
        simAction: "Simulate Port Block",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting over-quota landing attempt...", tone: "default" },
          { text: "Confirming used exceeds allocation...", tone: "default" },
          { text: "Setting vessel offload block...", tone: "default" },
          { text: "Recording compliance breach...", tone: "default" },
          { text: "[SUCCESS] Offload blocked, overfishing stopped.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Quota compliance is a horizontal capability. Here is how authorities, ports, and operators put one live ledger to work.",
    sectors: [
      { icon: Landmark, title: "Fisheries Authorities", description: "Monitor a whole fleet against quota in real time and generate a season compliance report in minutes instead of reconciling paper logs across hundreds of vessels.", assetTypes: ["Quota Registries", "Compliance Reports", "Enforcement Records"] },
      { icon: Truck, title: "Ports & Landing Sites", description: "Enforce quota at the point of offload, blocking a vessel that exceeds its limit before its over-quota catch can enter the supply chain.", assetTypes: ["Landing Checks", "Offload Blocks", "Breach Records"] },
      { icon: Radio, title: "Vessel Operators", description: "See remaining quota live and receive alerts before nearing the limit, staying compliant and protecting the licence rather than risking revocation.", assetTypes: ["Live Balances", "Limit Alerts", "Vessel Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an authority is bridging a licensing system or a vessel is reporting a landing from sea, Cerulea routes both into one quota ledger.",
    tracks: [
      {
        title: "Track A: Authority System Bridging",
        description:
          "For fisheries bodies on legacy licensing and monitoring systems. Existing allocation and catch data are translated into on-chain quota records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Licensing System", sublabel: "Authority Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Catch Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Quota Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Vessel Landing Capture",
        description:
          "For vessels reporting landings directly. A signed device feed records each catch and decrements quota on the shared ledger in real time.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Vessel Device", sublabel: "Onboard Catch Log", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Landing Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Live Quota Record", icon: Scale, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a live quota ledger with catch-linked deduction, approaching-limit alerts, and port-level enforcement from scratch requires fisheries and blockchain engineers and long fleet integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Quota & Enforcement Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects fisheries monitoring integration benchmarks. Building live quota balances, catch deduction, limit alerts, and port enforcement for an average fleet takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your quota and enforcement rules into pre-audited WebAssembly binaries and provisions the shared ledger and notification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "marine-stewardship-council-certification-verification",
    icon: Shield,
    eyebrow: "Sustainability Credential Engine",
    headline1: "Verify the blue label.",
    headline2: "Expose the forgery.",
    heroDescription:
      "Publish every Marine Stewardship Council certificate as a verifiable credential on a public registry. The DID and VC Ledger and Provenance Notary bind each certificate to its holder and catch, and a public API answers any verification request in real time.",
    heroCta: "Deploy Certificate Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a certificate that takes weeks to confirm into a credential a retailer verifies in one query.",
    mechanics: [
      { title: "Public Credential Registry", description: "Publish certificates openly. Every Marine Stewardship Council certificate is issued as a verifiable credential to a public registry, so anyone can confirm it without contacting the council." },
      { title: "Holder & Catch Binding", description: "Tie the label to real product. Provenance Notary binds each certificate to its holder and the specific catch, so the blue label cannot be lifted onto a non-certified product." },
      { title: "Real-Time Verification API", description: "Answer verification at scale. A public API resolves any certificate instantly, letting a retailer verify hundreds of supplier certificates in an afternoon instead of weeks of email." },
      { title: "Forgery Rejection", description: "Make copies fail. A forged or copied certificate carries no matching on-chain record, so verification returns nothing rather than passing a convincing-looking document." },
      { title: "Issuer Accreditation", description: "Anchor the council's authority. The DID and VC Ledger records the certifying body's identity, so every credential resolves to a recognised issuer and not an impostor." },
      { title: "Chain-of-Custody Link", description: "Connect certificate to supply chain. Each credential links to the catch and custody record, so verification confirms not just the paper but the product behind it." },
    ],
    lifecycleTitle: "The Certificate Lifecycle",
    lifecycleSubtitle:
      "Follow a sustainability certificate from council issuance to a retailer verifying hundreds in a single session.",
    lifecycleSteps: [
      {
        label: "Council Issuance",
        description:
          "The certifying body issues a certificate as a verifiable credential. The DID and VC Ledger anchors the issuer and Provenance Notary binds it to the holder and catch.",
        icon: ShieldCheck,
        logFilename: "cerulea_msc.log",
        logLines: [
          { text: "[SYS] Issuing sustainability credential...", time: "07:30:22", tone: "default" },
          { text: "[CMD] issueVC { holder: \"FISHERY_204\", catch: \"COD_NE_88\" }", time: "07:30:22", tone: "primary" },
          { text: "[AUTH] Anchoring issuer DID and binding to catch...", time: "07:30:23", tone: "secondary" },
          { text: "[OK] Credential CERT_9021 published at block 12220611.", time: "07:30:23", tone: "success" },
        ],
      },
      {
        label: "Registry Publication",
        description:
          "The credential and its status publish to the public registry, so any party can resolve it through the verification API without an account.",
        icon: Database,
        logFilename: "cerulea_msc.log",
        logLines: [
          { text: "[SYS] Publishing credential to public registry...", time: "07:30:24", tone: "default" },
          { text: "[CMD] anchorStatus(CERT_9021, status: \"ACTIVE\")", time: "07:30:24", tone: "primary" },
          { text: "[SYS] Exposing credential to verification API...", time: "07:30:25", tone: "default" },
          { text: "[OK] Certificate publicly resolvable.", time: "07:30:25", tone: "success" },
        ],
      },
      {
        label: "Bulk Verification",
        description:
          "A retailer verifies many supplier certificates through the API in one session, resolving each against the registry rather than emailing the council per certificate.",
        icon: Search,
        logFilename: "cerulea_msc.log",
        logLines: [
          { text: "[SYS] Retailer batch verifying 500 certificates...", time: "11:05:40", tone: "default" },
          { text: "[CMD] verifyBatch(certs: 500)", time: "11:05:40", tone: "primary" },
          { text: "[SYS] Resolving issuer, status, and catch binding...", time: "11:05:41", tone: "default" },
          { text: "[OK] 498 valid, 2 invalid. Completed in one session.", time: "11:05:42", tone: "success" },
        ],
      },
      {
        label: "Forgery Detection",
        description:
          "A copied certificate placed on a non-certified product is checked. The registry returns no matching record and the certificate is rejected as invalid.",
        icon: Gavel,
        logFilename: "cerulea_msc.log",
        logLines: [
          { text: "[SYS] Verification request for suspicious cert...", time: "15:40:18", tone: "default" },
          { text: "[CMD] verifyVC(\"CERT_FAKE_77\")", time: "15:40:18", tone: "primary" },
          { text: "[SYS] No matching record found in registry...", time: "15:40:18", tone: "error" },
          { text: "[OK] Certificate rejected as forged.", time: "15:40:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes certificate verification into modular contracts for issuer identity, credential binding, public resolution, and forgery rejection, so the blue label stays trustworthy.",
    layers: [
      {
        title: "Issuer Registry",
        subtitle: "The Council Anchor",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Council Anchor",
          description:
            "Anchors the certifying body's identity through the DID and VC Ledger. It ensures every credential resolves to the recognised council rather than an impostor issuing look-alike certificates.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract MSCIssuer {\n  struct Body {\n    bytes32 did;\n    bytes32 pubKey;\n    bool accredited;\n  }\n\n  mapping(address => Body) public bodies;\n\n  function register(bytes32 did, bytes32 key) external onlyAuthority {\n    bodies[msg.sender] = Body(did, key, true);\n  }\n}",
        simAction: "Simulate Issuer Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Validating council accreditation...", tone: "default" },
          { text: "Anchoring issuer public key...", tone: "default" },
          { text: "Recording decentralised identifier...", tone: "default" },
          { text: "Marking body as accredited...", tone: "default" },
          { text: "[SUCCESS] Council identity anchored.", tone: "success" },
        ],
      },
      {
        title: "Credential Notary",
        subtitle: "The Catch Binding",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Catch Binding",
          description:
            "Binds each certificate to its holder and the specific catch through Provenance Notary. This link prevents a genuine blue label from being reused on an unrelated, non-certified product.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function issueVC(bytes32 holder, bytes32 catchId, bytes32 claim) external onlyAccredited {\n    certs[claim] = Cert(msg.sender, holder, catchId, true);\n    emit CredentialIssued(claim, holder, catchId);\n}",
        simAction: "Simulate Credential Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading holder FISHERY_204...", tone: "default" },
          { text: "Linking certificate to catch COD_NE_88...", tone: "default" },
          { text: "Signing credential with council key...", tone: "default" },
          { text: "Writing certificate to registry...", tone: "default" },
          { text: "[SUCCESS] Credential CERT_9021 issued.", tone: "success" },
        ],
      },
      {
        title: "Verification API",
        subtitle: "The Bulk Resolver",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Bulk Resolver",
          description:
            "Resolves any certificate to its issuer, status, and catch binding. It lets a retailer verify hundreds of supplier certificates in one session instead of chasing the council per document.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verify(bytes32 claim) external view returns (bool valid, bytes32 catchId) {\n    Cert memory c = certs[claim];\n    return (c.active && bodies[c.issuer].accredited, c.catchId);\n}",
        simAction: "Simulate Bulk Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving batch of 500 certificates...", tone: "default" },
          { text: "Resolving each issuer accreditation...", tone: "default" },
          { text: "Checking status and catch bindings...", tone: "default" },
          { text: "Flagging 2 without valid records...", tone: "default" },
          { text: "[SUCCESS] 498 verified in one session.", tone: "success" },
        ],
      },
      {
        title: "Forgery Guard",
        subtitle: "The Copy Rejector",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Copy Rejector",
          description:
            "Returns nothing for a certificate with no matching on-chain record. A copied or fabricated blue label fails verification outright instead of passing a convincing-looking scan.",
          platformFunction: "Compliance & Control",
        },
        codeSnippet:
          "function verifyStrict(bytes32 claim) external view returns (bool) {\n    if (certs[claim].issuer == address(0)) revert(\"No record\");\n    return certs[claim].active;\n}",
        simAction: "Simulate Forgery Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking suspicious certificate...", tone: "default" },
          { text: "Searching registry for record...", tone: "default" },
          { text: "No matching credential found...", tone: "default" },
          { text: "Rejecting certificate as forged...", tone: "default" },
          { text: "[SUCCESS] Forged certificate blocked.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Sustainability certificate verification is a horizontal capability. Here is how councils, retailers, and consumers put one registry to work.",
    sectors: [
      { icon: ShieldCheck, title: "Certifying Councils", description: "Issue certificates that anyone can verify instantly and expose copies automatically, protecting the integrity of the blue label without staffing verification calls.", assetTypes: ["Verifiable Credentials", "Issuer DIDs", "Status Records"] },
      { icon: Building2, title: "Retailers & Brands", description: "Verify hundreds of supplier certificates in an afternoon through the API, turning a weeks-long email process into a single defensible check.", assetTypes: ["Supplier Certificates", "Verification Logs", "Sourcing Proofs"] },
      { icon: Users, title: "Consumers & Auditors", description: "Confirm a product's sustainability claim directly against the registry, trusting cryptographic proof rather than an unverifiable printed label.", assetTypes: ["Product Claims", "Public Lookups", "Audit Snapshots"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a council is bridging its certificate database or a retailer is querying the public API, Cerulea routes both into one verifiable registry.",
    tracks: [
      {
        title: "Track A: Council System Bridging",
        description:
          "For certifying bodies with legacy certificate databases. Existing issuance records are translated into verifiable credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Certificate Database", sublabel: "Council Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Signing", icon: Server, accent: true },
          { label: "Cerulea Registry", sublabel: "Public Credential Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Retailer API Verification",
        description:
          "For retailers verifying at scale. A public API resolves each supplier certificate against the registry with no account and no council contact.",
        connectorLabels: ["PUBLIC API", "STATE EXECUTION"],
        nodes: [
          { label: "Retailer Verifier", sublabel: "Sourcing Systems", icon: Fingerprint, accent: false },
          { label: "Registry Validators", sublabel: "Credential Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Public Verification Layer", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a public credential registry with issuer accreditation, catch binding, a verification API, and forgery rejection from scratch requires identity engineers and long council onboarding. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credential & Verification Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects decentralised identity integration benchmarks. Standing up a DID method, credential issuance, a public verification API, and forgery rejection for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your credential and verification rules into pre-audited WebAssembly binaries and provisions the public registry and API layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cold-chain-condition-logging-from-vessel-to-retailer",
    icon: Thermometer,
    eyebrow: "Cold-Chain Integrity Engine",
    headline1: "Log every degree.",
    headline2: "Settle liability by stage.",
    heroDescription:
      "Log cold chain conditions across every custody stage on a shared network. Cold-Chain Monitoring and External Data Oracles feed sensor data, and the Quality and Recall Ledger records each excursion against the exact stage where it happened, so liability is clear.",
    heroCta: "Deploy Cold-Chain Logging",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn siloed IoT logs into cross-party proof that pins each temperature breach to a stage.",
    mechanics: [
      { title: "Cross-Party Condition Log", description: "Record condition on one shared record. Cold-Chain Monitoring writes temperature across every custody stage to a network all parties read, replacing siloed IoT platforms with no shared proof." },
      { title: "Sensor Oracle Feed", description: "Anchor readings to verified sensors. External Data Oracles stream signed temperature data, so a logged condition is measured and attributable rather than manually entered." },
      { title: "Stage-Level Attribution", description: "Pin each breach to a custodian. The Quality and Recall Ledger records every excursion against the exact stage and holder, so liability sits with the party responsible, not the producer by default." },
      { title: "Automatic Excursion Flags", description: "Catch breaches as they happen. A reading outside the safe range flags an excursion immediately, capturing its duration and the stage rather than surfacing a spoiled batch later." },
      { title: "Producer Exoneration", description: "Clear the innocent party. Because condition is logged by stage, a producer whose product left in good condition is cleared when a breach occurred on the logistics leg." },
      { title: "Fast Insurance Settlement", description: "Close claims from evidence. An insurer settles a spoilage claim in hours from the on-chain excursion record, with liability and cause already established." },
    ],
    lifecycleTitle: "The Cold-Chain Lifecycle",
    lifecycleSubtitle:
      "Follow one prawn batch from vessel through logistics, capturing a breach and settling liability at the retailer.",
    lifecycleSteps: [
      {
        label: "Batch Onboarding",
        description:
          "A seafood batch is registered with its safe temperature range. The shared network anchors the batch so every later reading attaches to one identity.",
        icon: Package,
        logFilename: "cerulea_coldchain.log",
        logLines: [
          { text: "[SYS] Initializing cold-chain batch manifest...", time: "05:15:44", tone: "default" },
          { text: "[CMD] registerBatch { id: \"PRAWN_3320\", range: \"-20..-15C\" }", time: "05:15:44", tone: "primary" },
          { text: "[AUTH] Anchoring safe range and origin custodian...", time: "05:15:45", tone: "secondary" },
          { text: "[OK] Batch PRAWN_3320 anchored at block 12820199.", time: "05:15:45", tone: "success" },
        ],
      },
      {
        label: "Stage Readings",
        description:
          "As the batch moves, each custody stage streams signed temperature readings through External Data Oracles, all attached to the same batch identity.",
        icon: Radio,
        logFilename: "cerulea_coldchain.log",
        logLines: [
          { text: "[SYS] Receiving reading at PROCESSING stage...", time: "09:40:12", tone: "default" },
          { text: "[CMD] recordTemp(PRAWN_3320, celsius: -18.0, stage: 2)", time: "09:40:12", tone: "primary" },
          { text: "[SYS] Verifying sensor signature and safe range...", time: "09:40:13", tone: "default" },
          { text: "[OK] Reading within range, sealed to stage 2.", time: "09:40:13", tone: "success" },
        ],
      },
      {
        label: "Excursion Capture",
        description:
          "A breach occurs on the logistics leg. The Quality and Recall Ledger records the excursion, its duration, and the stage against the responsible custodian.",
        icon: Thermometer,
        logFilename: "cerulea_coldchain.log",
        logLines: [
          { text: "[SYS] Reading above threshold at LOGISTICS stage...", time: "13:22:05", tone: "default" },
          { text: "[CMD] flagExcursion(PRAWN_3320, celsius: -8.4, stage: 3)", time: "13:22:05", tone: "primary" },
          { text: "[SYS] Recording 4-hour breach against custodian...", time: "13:22:06", tone: "error" },
          { text: "[OK] Excursion sealed to logistics provider.", time: "13:22:06", tone: "success" },
        ],
      },
      {
        label: "Liability Settlement",
        description:
          "At the retailer, the record shows where the breach happened. The producer is cleared, liability sits with logistics, and the insurance claim settles.",
        icon: Wallet,
        logFilename: "cerulea_coldchain.log",
        logLines: [
          { text: "[SYS] Resolving liability for PRAWN_3320...", time: "17:05:39", tone: "default" },
          { text: "[CMD] settleClaim(PRAWN_3320, liable: \"LOGISTICS_0x8\")", time: "17:05:39", tone: "primary" },
          { text: "[AUTH] Producer cleared, breach attributed to stage 3...", time: "17:05:40", tone: "secondary" },
          { text: "[OK] Claim settled in hours from breach record.", time: "17:05:40", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes cold-chain integrity into modular contracts for batch identity, sensor ingestion, excursion attribution, and liability settlement, so a breach is pinned to a stage.",
    layers: [
      {
        title: "Batch Registry",
        subtitle: "The Condition Anchor",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Condition Anchor",
          description:
            "Anchors each batch and its safe temperature range. It gives the sensor and excursion contracts one identity to attach every reading to across the whole journey from vessel to retailer.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ColdChain {\n  struct Batch {\n    int256 minC;\n    int256 maxC;\n    address custodian;\n  }\n\n  mapping(bytes32 => Batch) public batches;\n\n  function registerBatch(bytes32 id, int256 minC, int256 maxC) external {\n    batches[id] = Batch(minC, maxC, msg.sender);\n  }\n}",
        simAction: "Simulate Batch Onboarding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading safe range for PRAWN_3320...", tone: "default" },
          { text: "Recording origin custodian...", tone: "default" },
          { text: "Anchoring batch identity...", tone: "default" },
          { text: "Preparing stage reading slots...", tone: "default" },
          { text: "[SUCCESS] Batch PRAWN_3320 anchored.", tone: "success" },
        ],
      },
      {
        title: "Sensor Oracle",
        subtitle: "The Verified Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Feed",
          description:
            "Streams signed temperature readings through External Data Oracles. It validates each sensor signature before recording, so a logged condition is measured and attributable rather than typed in by hand.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function recordTemp(bytes32 id, int256 celsius, uint8 stage, bytes memory sig) external {\n    require(verifySensor(sig), \"Invalid sensor\");\n    readings[id].push(Reading(celsius, stage, block.timestamp));\n    if (celsius > batches[id].maxC) emit Excursion(id, celsius, stage);\n}",
        simAction: "Simulate Sensor Read",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving reading at processing stage...", tone: "default" },
          { text: "Verifying sensor oracle signature...", tone: "default" },
          { text: "Comparing against safe range...", tone: "default" },
          { text: "Sealing reading to stage 2...", tone: "default" },
          { text: "[SUCCESS] Verified reading recorded.", tone: "success" },
        ],
      },
      {
        title: "Excursion Ledger",
        subtitle: "The Stage Attribution",
        icon: Thermometer,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Stage Attribution",
          description:
            "Records each breach, its duration, and the responsible stage through the Quality and Recall Ledger. It pins liability to the custodian who held the batch when the excursion occurred.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function flagExcursion(bytes32 id, int256 celsius, uint8 stage) external {\n    address liable = custodyAt[id][stage];\n    excursions[id].push(Excursion(celsius, stage, liable, block.timestamp));\n    emit BreachAttributed(id, stage, liable);\n}",
        simAction: "Simulate Excursion Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting reading above threshold...", tone: "default" },
          { text: "Identifying custodian at logistics stage...", tone: "default" },
          { text: "Recording 4-hour breach duration...", tone: "default" },
          { text: "Attributing excursion to stage 3...", tone: "default" },
          { text: "[SUCCESS] Breach sealed to logistics provider.", tone: "success" },
        ],
      },
      {
        title: "Claim Settlement",
        subtitle: "The Liability Resolver",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Liability Resolver",
          description:
            "Resolves a spoilage claim from the excursion record, clearing the producer and settling against the liable stage. It lets an insurer close a claim in hours with cause already established.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settleClaim(bytes32 id) external view returns (address liable) {\n    Excursion[] memory e = excursions[id];\n    require(e.length > 0, \"No breach\");\n    return e[0].liable;\n}",
        simAction: "Simulate Claim Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading excursion record for PRAWN_3320...", tone: "default" },
          { text: "Confirming producer stages in range...", tone: "default" },
          { text: "Attributing liability to logistics...", tone: "default" },
          { text: "Releasing insurance settlement...", tone: "default" },
          { text: "[SUCCESS] Claim settled from breach record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Cold-chain integrity is a horizontal capability. Here is how producers, logistics, and insurers put one shared record to work.",
    sectors: [
      { icon: Package, title: "Producers & Processors", description: "Prove product left in good condition and get cleared when a downstream breach occurs, removing the default blame that siloed logs impose on the source.", assetTypes: ["Batch Records", "Origin Readings", "Exoneration Proofs"] },
      { icon: Truck, title: "Logistics Providers", description: "Operate against a fair, shared record where liability is attributed accurately, and demonstrate compliant handling across the legs they control.", assetTypes: ["Stage Readings", "Custody Logs", "Handling Attestations"] },
      { icon: Shield, title: "Insurers", description: "Settle spoilage claims in hours from an immutable excursion record, with cause and liable party already established instead of disputed.", assetTypes: ["Excursion Records", "Liability Proofs", "Claim Settlements"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a logistics provider is bridging a fleet IoT platform or a reefer sensor is reporting directly, Cerulea routes both into one cold-chain record.",
    tracks: [
      {
        title: "Track A: Logistics IoT Bridging",
        description:
          "For providers on legacy fleet and IoT platforms. Existing sensor feeds are translated into signed on-chain readings through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Fleet IoT Platform", sublabel: "Logistics Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Reading Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Cold-Chain Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Reefer Sensor Capture",
        description:
          "For reefer sensors reporting directly. A signed device feed streams temperature to the shared ledger and flags excursions by stage in real time.",
        connectorLabels: ["SENSOR SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Reefer Sensor", sublabel: "Onboard Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Reading Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Condition Record", icon: Thermometer, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-party cold-chain network with sensor ingestion, stage-level excursion attribution, and liability settlement from scratch requires IoT and blockchain engineers and long multi-party integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Condition & Liability Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects cold-chain IoT integration benchmarks. Wiring sensor feeds, building stage-level excursion attribution, and settling liability across parties for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your condition and liability rules into pre-audited WebAssembly binaries and provisions the shared ledger and sensor oracle layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "aquaculture-feed-and-antibiotic-usage-compliance-ledger",
    icon: FlaskConical,
    eyebrow: "Aquaculture Compliance Engine",
    headline1: "Log every dose.",
    headline2: "Pass export inspection.",
    heroDescription:
      "Record every feed and medicine application per pond on a shared compliance ledger. Compliance Attestations and the Produce Grades and Certificates module build the export record, and the Traceability Ledger ties it to each harvest so inspectors read proof instead of distrusting paper.",
    heroCta: "Deploy Compliance Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn distrusted paper logs into a per-pond record that satisfies EU and US export rules.",
    mechanics: [
      { title: "Per-Pond Application Log", description: "Record every input where it happened. Each feed and medicine application is logged against a specific pond on the shared ledger, replacing paper logs that inspectors cannot trust." },
      { title: "Banned Substance Guard", description: "Prove no prohibited antibiotics were used. Compliance Attestations check each application against banned lists, so the record demonstrates adherence to EU and US requirements." },
      { title: "Feed Safety Records", description: "Show feed meets standards. The Produce Grades and Certificates module records feed source and specification per pond, building the safety evidence export markets require." },
      { title: "Harvest Linkage", description: "Tie inputs to output. The Traceability Ledger links each pond's full application history to the harvest it produced, so a consignment carries its complete input record." },
      { title: "On-Demand Export Record", description: "Hand inspectors a ready file. The exporter presents a complete record of what entered each pond on demand, so inspection proceeds without paper searches." },
      { title: "Lower Rejection Rates", description: "Cut consignment rejections. Because the input history is verifiable and complete, consignments are less likely to be held or rejected at destination on documentation grounds." },
    ],
    lifecycleTitle: "The Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow one pond from a medicine application through harvest linkage to an export inspection that reads the record directly.",
    lifecycleSteps: [
      {
        label: "Pond Registration",
        description:
          "A pond is registered on the shared ledger. The record anchors the pond identity so every feed and medicine application attaches to one traceable location.",
        icon: Droplet,
        logFilename: "cerulea_aquacompliance.log",
        logLines: [
          { text: "[SYS] Initializing pond compliance record...", time: "05:40:18", tone: "default" },
          { text: "[CMD] registerPond { id: \"POND_1180\", farm: \"VN_AQ_22\" }", time: "05:40:18", tone: "primary" },
          { text: "[AUTH] Anchoring pond identity and operator...", time: "05:40:19", tone: "secondary" },
          { text: "[OK] Pond POND_1180 anchored at block 13120288.", time: "05:40:19", tone: "success" },
        ],
      },
      {
        label: "Application Logging",
        description:
          "Each feed and medicine application is logged against the pond. Compliance Attestations check the substance against banned lists at the moment of entry.",
        icon: FlaskConical,
        logFilename: "cerulea_aquacompliance.log",
        logLines: [
          { text: "[SYS] Logging medicine application for POND_1180...", time: "10:20:44", tone: "default" },
          { text: "[CMD] logApplication(POND_1180, substance: \"OXYTET\", dose: 12)", time: "10:20:44", tone: "primary" },
          { text: "[SYS] Checking substance against banned list...", time: "10:20:45", tone: "default" },
          { text: "[OK] Approved substance recorded, compliant.", time: "10:20:45", tone: "success" },
        ],
      },
      {
        label: "Harvest Linkage",
        description:
          "The pond is harvested and the Traceability Ledger links the full application history to the harvest lot, so the consignment carries its complete input record.",
        icon: Package,
        logFilename: "cerulea_aquacompliance.log",
        logLines: [
          { text: "[SYS] Linking application history to harvest...", time: "14:50:12", tone: "default" },
          { text: "[CMD] linkHarvest(POND_1180, lot: \"HARVEST_5540\")", time: "14:50:12", tone: "primary" },
          { text: "[AUTH] Binding 22 applications to harvest lot...", time: "14:50:13", tone: "secondary" },
          { text: "[OK] Harvest linked to full input record.", time: "14:50:13", tone: "success" },
        ],
      },
      {
        label: "Export Inspection",
        description:
          "An inspector reads the complete record of what entered each pond on demand, and inspection proceeds without paper searches or rejection.",
        icon: Search,
        logFilename: "cerulea_aquacompliance.log",
        logLines: [
          { text: "[SYS] Inspector querying HARVEST_5540 record...", time: "17:30:55", tone: "default" },
          { text: "[CMD] auditInputs(HARVEST_5540)", time: "17:30:55", tone: "primary" },
          { text: "[SYS] Returning full feed and medicine history...", time: "17:30:56", tone: "default" },
          { text: "[OK] Consignment cleared, no paper search needed.", time: "17:30:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes aquaculture compliance into modular contracts for pond identity, application logging, banned-substance checks, and harvest linkage, so the export record is complete and trusted.",
    layers: [
      {
        title: "Pond Registry",
        subtitle: "The Location Anchor",
        icon: Droplet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Location Anchor",
          description:
            "Anchors each pond and its operator on the shared ledger. It gives every feed and medicine application one traceable location, so inputs are recorded where they actually occurred.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PondRegistry {\n  struct Pond {\n    bytes32 farm;\n    address operator;\n  }\n\n  mapping(bytes32 => Pond) public ponds;\n\n  function registerPond(bytes32 id, bytes32 farm) external {\n    ponds[id] = Pond(farm, msg.sender);\n  }\n}",
        simAction: "Simulate Pond Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading operator for VN_AQ_22...", tone: "default" },
          { text: "Recording pond identity...", tone: "default" },
          { text: "Binding pond to farm...", tone: "default" },
          { text: "Preparing application log...", tone: "default" },
          { text: "[SUCCESS] Pond POND_1180 anchored.", tone: "success" },
        ],
      },
      {
        title: "Application Log",
        subtitle: "The Input Record",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Input Record",
          description:
            "Records each feed and medicine application against the pond. It builds the continuous per-pond input history that export markets demand and that paper logs could never make credible.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function logApplication(bytes32 pondId, bytes32 substance, uint256 dose) external onlyOperator {\n    require(!banned[substance], \"Prohibited substance\");\n    applications[pondId].push(Application(substance, dose, block.timestamp));\n    emit ApplicationLogged(pondId, substance);\n}",
        simAction: "Simulate Application Log",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading medicine application for POND_1180...", tone: "default" },
          { text: "Checking substance against banned list...", tone: "default" },
          { text: "Confirming substance approved...", tone: "default" },
          { text: "Appending to pond input history...", tone: "default" },
          { text: "[SUCCESS] Compliant application recorded.", tone: "success" },
        ],
      },
      {
        title: "Compliance Guard",
        subtitle: "The Banned-List Check",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Banned-List Check",
          description:
            "Checks each application against prohibited substance lists through Compliance Attestations. It ensures the record proves no banned antibiotics were used, satisfying EU and US import rules.",
          platformFunction: "Compliance & Control",
        },
        codeSnippet:
          "function attestCompliance(bytes32 pondId) external view returns (bool clean) {\n    Application[] memory a = applications[pondId];\n    for (uint256 i = 0; i < a.length; i++) {\n      if (banned[a[i].substance]) return false;\n    }\n    return true;\n}",
        simAction: "Simulate Compliance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning all applications for POND_1180...", tone: "default" },
          { text: "Comparing each against banned lists...", tone: "default" },
          { text: "Confirming no prohibited substances...", tone: "default" },
          { text: "Composing compliance attestation...", tone: "default" },
          { text: "[SUCCESS] Pond record certified compliant.", tone: "success" },
        ],
      },
      {
        title: "Harvest Linker",
        subtitle: "The Export Binder",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Export Binder",
          description:
            "Links a pond's full application history to its harvest lot through the Traceability Ledger. It ensures a consignment carries its complete, on-demand input record for inspection.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function linkHarvest(bytes32 pondId, bytes32 lotId) external onlyOperator {\n    harvestInputs[lotId] = applications[pondId];\n    emit HarvestLinked(lotId, pondId, applications[pondId].length);\n}",
        simAction: "Simulate Harvest Linkage",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading application history for POND_1180...", tone: "default" },
          { text: "Binding 22 applications to harvest...", tone: "default" },
          { text: "Linking lot HARVEST_5540...", tone: "default" },
          { text: "Sealing export input record...", tone: "default" },
          { text: "[SUCCESS] Harvest linked to full record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Aquaculture compliance is a horizontal capability. Here is how farms, exporters, and inspectors put one ledger to work.",
    sectors: [
      { icon: Droplet, title: "Aquaculture Farms", description: "Keep a credible per-pond record of every feed and medicine input, replacing distrusted paper logs with proof that satisfies export requirements.", assetTypes: ["Application Logs", "Pond Records", "Compliance Attestations"] },
      { icon: Truck, title: "Exporters", description: "Hand inspectors a complete input record on demand, letting export inspection proceed without paper searches and cutting consignment rejections.", assetTypes: ["Export Records", "Harvest Links", "Input Histories"] },
      { icon: Landmark, title: "Inspectors & Regulators", description: "Read verifiable per-pond input data directly, confirming no banned antibiotics were used and that feed met safety standards.", assetTypes: ["Audit Trails", "Banned-List Checks", "Safety Evidence"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an exporter is bridging a farm management system or a pond operator is logging from a phone, Cerulea routes both into one compliance ledger.",
    tracks: [
      {
        title: "Track A: Farm System Bridging",
        description:
          "For farms and exporters on legacy management systems. Existing application and harvest data are translated into on-chain compliance records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Farm Management System", sublabel: "Exporter Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Input Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Pond Operator Capture",
        description:
          "For operators logging inputs directly. A mobile app signs each application at the pond and routes it to the shared compliance ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Operator App", sublabel: "Pond-Side Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Input Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Compliance Record", icon: FlaskConical, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a per-pond compliance ledger with application logging, banned-substance checks, and harvest linkage from scratch requires aquaculture and blockchain engineers and long farm rollout. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Input & Compliance Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects food-safety compliance integration benchmarks. Building per-pond application logging, banned-substance checks, and harvest linkage for an average operation takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your input and compliance rules into pre-audited WebAssembly binaries and provisions the shared ledger and attestation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "legal-timber-origin-verification-to-combat-illegal-logging",
    icon: Forest,
    eyebrow: "Timber Provenance Engine",
    headline1: "Prove legal origin.",
    headline2: "Block the laundering.",
    heroDescription:
      "Record legal timber provenance on a shared network with volume reconciliation. The Traceability Ledger and Provenance Notary anchor each shipment, Port and Customs Events and Compliance Attestations carry the due diligence proof, and a public chain anchor serves importers and consumers.",
    heroCta: "Deploy Timber Provenance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn paper certificates into a reconciled provenance record that stops illegal wood mixing in.",
    mechanics: [
      { title: "Legal Origin Anchor", description: "Fix each shipment's source. The Traceability Ledger and Provenance Notary anchor legal timber provenance from the concession, so origin rests on evidence rather than a paper certificate." },
      { title: "Volume Reconciliation", description: "Block laundering by volume. The network reconciles harvested and shipped volumes, so illegal wood cannot be mixed into a legal shipment beyond the verified quantity." },
      { title: "Due Diligence Proof", description: "Meet import rules automatically. Compliance Attestations assemble the due diligence set that EU and US import regulations demand, ready for an importer to read." },
      { title: "Customs Event Trail", description: "Track the border journey. Port and Customs Events record each inspection and clearance, giving importers a verifiable path from concession to port." },
      { title: "Public Chain Anchor", description: "Expose provenance openly. A public chain anchor lets importers and consumers verify a shipment's legal origin without contacting each party in the chain." },
      { title: "One-Day Due Diligence", description: "Collapse audit timelines. An importer completes EU Deforestation Regulation due diligence for a whole supply chain in a day through the API, replacing multi-month supplier audits." },
    ],
    lifecycleTitle: "The Timber Lifecycle",
    lifecycleSubtitle:
      "Follow one timber shipment from a legal concession through volume reconciliation to an importer completing due diligence.",
    lifecycleSteps: [
      {
        label: "Concession Harvest",
        description:
          "Timber is harvested from a legal concession. Provenance Notary anchors the source, species, and harvested volume as the shipment's legal origin.",
        icon: Forest,
        logFilename: "cerulea_timber.log",
        logLines: [
          { text: "[SYS] Initializing timber origin manifest...", time: "06:10:33", tone: "default" },
          { text: "[CMD] anchorHarvest { concession: \"GA_CONC_40\", m3: 320 }", time: "06:10:33", tone: "primary" },
          { text: "[AUTH] Verifying concession licence and volume...", time: "06:10:34", tone: "secondary" },
          { text: "[OK] Shipment TIMB_7710 anchored at block 13720455.", time: "06:10:34", tone: "success" },
        ],
      },
      {
        label: "Volume Reconciliation",
        description:
          "Shipped volume is reconciled against harvested volume. The network rejects any quantity beyond the verified amount, blocking illegal wood from being mixed in.",
        icon: Scale,
        logFilename: "cerulea_timber.log",
        logLines: [
          { text: "[SYS] Reconciling shipped against harvested volume...", time: "10:35:20", tone: "default" },
          { text: "[CMD] reconcile(TIMB_7710, shipped: 320, harvested: 320)", time: "10:35:20", tone: "primary" },
          { text: "[SYS] Volumes match, no excess detected...", time: "10:35:21", tone: "default" },
          { text: "[OK] Reconciliation passed. Laundering blocked.", time: "10:35:21", tone: "success" },
        ],
      },
      {
        label: "Customs Clearance",
        description:
          "Port and Customs Events record each border step, and Compliance Attestations assemble the due diligence set for the destination market.",
        icon: Truck,
        logFilename: "cerulea_timber.log",
        logLines: [
          { text: "[SYS] Recording port clearance for TIMB_7710...", time: "14:15:47", tone: "default" },
          { text: "[CMD] recordEvent(TIMB_7710, event: \"PORT_CLEARED\")", time: "14:15:47", tone: "primary" },
          { text: "[AUTH] Assembling due diligence attestation set...", time: "14:15:48", tone: "secondary" },
          { text: "[OK] Border step recorded, due diligence ready.", time: "14:15:48", tone: "success" },
        ],
      },
      {
        label: "Importer Due Diligence",
        description:
          "An importer completes deforestation-regulation due diligence for the whole chain in a day through the API, reading the anchored, reconciled record directly.",
        icon: Search,
        logFilename: "cerulea_timber.log",
        logLines: [
          { text: "[SYS] Importer running EUDR due diligence...", time: "17:50:12", tone: "default" },
          { text: "[CMD] runDueDiligence(supplyChain: \"EU_FURN_09\")", time: "17:50:12", tone: "primary" },
          { text: "[SYS] Verifying origin, volumes, and customs trail...", time: "17:50:13", tone: "default" },
          { text: "[OK] Due diligence complete in one day.", time: "17:50:13", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes timber provenance into modular contracts for origin identity, volume reconciliation, customs events, and public verification, so illegal wood cannot launder in.",
    layers: [
      {
        title: "Origin Registry",
        subtitle: "The Concession Anchor",
        icon: Forest,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Concession Anchor",
          description:
            "Anchors each shipment to its legal concession, species, and harvested volume through Provenance Notary. It fixes legal origin at the source so downstream claims rest on evidence.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TimberRegistry {\n  struct Shipment {\n    bytes32 concession;\n    string species;\n    uint256 harvestedM3;\n  }\n\n  mapping(bytes32 => Shipment) public shipments;\n\n  function anchorHarvest(bytes32 id, bytes32 concession, uint256 m3) external onlyLicensed {\n    shipments[id] = Shipment(concession, species(id), m3);\n  }\n}",
        simAction: "Simulate Concession Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying concession licence GA_CONC_40...", tone: "default" },
          { text: "Recording species and volume...", tone: "default" },
          { text: "Anchoring legal origin...", tone: "default" },
          { text: "Writing shipment to registry...", tone: "default" },
          { text: "[SUCCESS] Shipment TIMB_7710 anchored.", tone: "success" },
        ],
      },
      {
        title: "Volume Reconciler",
        subtitle: "The Laundering Guard",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Laundering Guard",
          description:
            "Reconciles shipped volume against harvested volume. It rejects any quantity beyond the verified amount, so illegal wood cannot be mixed into a legal shipment past the reconciled figure.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function reconcile(bytes32 id, uint256 shipped) external {\n    require(shipped <= shipments[id].harvestedM3, \"Volume exceeds harvest\");\n    reconciled[id] = shipped;\n    emit Reconciled(id, shipped);\n}",
        simAction: "Simulate Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading harvested volume 320m3...", tone: "default" },
          { text: "Comparing shipped against harvested...", tone: "default" },
          { text: "Confirming no excess volume...", tone: "default" },
          { text: "Recording reconciled quantity...", tone: "default" },
          { text: "[SUCCESS] Reconciliation passed, laundering blocked.", tone: "success" },
        ],
      },
      {
        title: "Customs Events",
        subtitle: "The Border Trail",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Border Trail",
          description:
            "Records each inspection and clearance through Port and Customs Events and assembles the due diligence set with Compliance Attestations, giving importers a verifiable path from concession to port.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function recordEvent(bytes32 id, string calldata event) external onlyAuthority {\n    trail[id].push(Event(event, msg.sender, block.timestamp));\n    emit CustomsEvent(id, event);\n}",
        simAction: "Simulate Customs Event",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Port initiating clearance for TIMB_7710...", tone: "default" },
          { text: "Validating authority signing key...", tone: "default" },
          { text: "Appending clearance to border trail...", tone: "default" },
          { text: "Assembling due diligence set...", tone: "default" },
          { text: "[SUCCESS] Border step recorded.", tone: "success" },
        ],
      },
      {
        title: "Public Verifier",
        subtitle: "The Importer Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Importer Window",
          description:
            "Resolves a supply chain to its anchored origin, reconciled volumes, and customs trail through a public chain anchor. It lets an importer complete deforestation due diligence in a day, not months.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function runDueDiligence(bytes32 id) external view returns (bool legal) {\n    return shipments[id].concession != 0 && reconciled[id] > 0 && trail[id].length > 0;\n}",
        simAction: "Simulate Due Diligence",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Importer querying supply chain EU_FURN_09...", tone: "default" },
          { text: "Confirming anchored legal origin...", tone: "default" },
          { text: "Checking volume reconciliation...", tone: "default" },
          { text: "Verifying customs trail complete...", tone: "default" },
          { text: "[SUCCESS] Due diligence complete in one day.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Timber provenance is a horizontal capability. Here is how producers, importers, and authorities put one reconciled record to work.",
    sectors: [
      { icon: Forest, title: "Concessions & Mills", description: "Prove legal harvest and shipped volume from the source, differentiating legal supply in markets that now demand verifiable due diligence.", assetTypes: ["Origin Records", "Volume Proofs", "Concession Licences"] },
      { icon: Building2, title: "Importers & Retailers", description: "Complete deforestation-regulation due diligence for a whole supply chain in a day through the API, replacing multi-month supplier audits.", assetTypes: ["Due Diligence Files", "Supply Chain Proofs", "Import Attestations"] },
      { icon: Landmark, title: "Forest Authorities", description: "Verify legal origin and volume reconciliation across shipments, using the shared record to block illegal wood from laundering into legal trade.", assetTypes: ["Provenance Registries", "Reconciliation Logs", "Enforcement Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a mill is bridging a forestry management system or an importer is querying the public anchor, Cerulea routes both into one provenance record.",
    tracks: [
      {
        title: "Track A: Forestry System Bridging",
        description:
          "For concessions and mills on legacy forestry systems. Existing harvest and shipment data are translated into on-chain provenance records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Forestry System", sublabel: "Mill Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Volume Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Timber Provenance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Public Anchor Verification",
        description:
          "For importers and consumers verifying openly. A public chain anchor resolves each shipment's origin, volumes, and customs trail with no party contact.",
        connectorLabels: ["PUBLIC ANCHOR", "STATE EXECUTION"],
        nodes: [
          { label: "Importer Verifier", sublabel: "Due Diligence Systems", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Provenance Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Legal Origin Anchor", icon: Forest, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a timber provenance network with legal origin anchoring, volume reconciliation, customs events, and public verification from scratch requires supply chain and blockchain engineers and long concession integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Origin & Reconciliation Rules",
      ruleCount: 45,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects supply-chain due diligence integration benchmarks. Wiring origin anchoring, volume reconciliation, customs events, and a public verification anchor for an average chain takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your origin and reconciliation rules into pre-audited WebAssembly binaries and provisions the shared ledger and public anchor instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "carbon-credit-issuance-for-verified-forest-preservation",
    icon: Leaf,
    eyebrow: "Forest Carbon Registry Engine",
    headline1: "Tokenise preservation.",
    headline2: "End double-counting.",
    heroDescription:
      "Tokenise each credit on the public chain through the Carbon Credits MRV and Registry module. External Data Oracles anchor the preservation evidence, and an ERC-20 token ties each credit to a specific forest area and year so double-counting is impossible.",
    heroCta: "Deploy Forest Carbon Markets",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn opaque, double-counted forest credits into transparent tokens tied to a specific area and year.",
    mechanics: [
      { title: "Area-Bound Credits", description: "Tie every credit to a place. An ERC-20 token binds each credit to a specific forest area and vintage year through the Carbon Credits MRV and Registry module, so a credit maps to real, identifiable preservation." },
      { title: "Oracle-Anchored Evidence", description: "Prove the forest is preserved. External Data Oracles anchor satellite and monitoring evidence of preservation, so a credit rests on verified data rather than a project claim." },
      { title: "Single-Count Retirement", description: "Make double-selling impossible. When a credit is retired it is permanently burned with a public record, so the same preservation cannot be sold twice across buyers." },
      { title: "Independent Verifiability", description: "Let anyone check the claim. An NGO or auditor verifies each credit independently on the public chain, confirming it traces to a genuinely preserved area." },
      { title: "Transparent Neutrality Claims", description: "Back corporate claims with proof. A buyer publishes a neutrality claim with on-chain evidence, replacing unverifiable offset statements with a public, auditable link." },
      { title: "Registry Transparency", description: "Open the whole market. The public registry exposes issuance and retirement, so the opacity that allowed double-counting is replaced with a shared, visible ledger." },
    ],
    lifecycleTitle: "The Forest Carbon Lifecycle",
    lifecycleSubtitle:
      "Follow one preservation project from evidence anchoring to a corporate buyer retiring a credit an NGO can verify.",
    lifecycleSteps: [
      {
        label: "Project Registration",
        description:
          "A forest preservation project registers its area and vintage. The Carbon Credits MRV and Registry module anchors the project as the origin for its credits.",
        icon: Forest,
        logFilename: "cerulea_forestcarbon.log",
        logLines: [
          { text: "[SYS] Initializing preservation project manifest...", time: "06:20:41", tone: "default" },
          { text: "[CMD] registerProject { area: \"CD_FOREST_22\", vintage: 2026 }", time: "06:20:41", tone: "primary" },
          { text: "[AUTH] Anchoring forest boundary and baseline...", time: "06:20:42", tone: "secondary" },
          { text: "[OK] Project FOR_8810 registered at block 14120388.", time: "06:20:42", tone: "success" },
        ],
      },
      {
        label: "Evidence Anchoring",
        description:
          "External Data Oracles anchor satellite and monitoring evidence that the forest area remains preserved, verifying the claim before any credit is minted.",
        icon: Radio,
        logFilename: "cerulea_forestcarbon.log",
        logLines: [
          { text: "[SYS] Polling satellite oracle for CD_FOREST_22...", time: "11:10:15", tone: "default" },
          { text: "[CMD] anchorEvidence(FOR_8810, canopy: \"INTACT\")", time: "11:10:15", tone: "primary" },
          { text: "[SYS] Preservation confirmed against baseline...", time: "11:10:16", tone: "default" },
          { text: "[OK] Evidence anchored. Authorized to mint.", time: "11:10:16", tone: "success" },
        ],
      },
      {
        label: "Credit Minting",
        description:
          "The module mints ERC-20 credits bound to the forest area and year. Each token links to the anchored evidence that backs it.",
        icon: Coins,
        logFilename: "cerulea_forestcarbon.log",
        logLines: [
          { text: "[SYS] Executing forest carbon minting authority...", time: "13:40:22", tone: "default" },
          { text: "[CMD] mintCredits(FOR_8810, tonnes: 9000, serial: \"CD-8810-26\")", time: "13:40:22", tone: "primary" },
          { text: "[AUTH] Binding credits to area and vintage...", time: "13:40:23", tone: "secondary" },
          { text: "[OK] 9000 credits minted to project wallet.", time: "13:40:23", tone: "success" },
        ],
      },
      {
        label: "Retirement & Audit",
        description:
          "A corporate buyer retires credits with a permanent burn, and an NGO independently verifies each retired credit traces to the preserved area.",
        icon: Recycling,
        logFilename: "cerulea_forestcarbon.log",
        logLines: [
          { text: "[SYS] Corp_0x71 retiring credits for neutrality claim...", time: "17:20:50", tone: "default" },
          { text: "[CMD] retire(4000, reason: \"FY2026_NEUTRALITY\")", time: "17:20:50", tone: "primary" },
          { text: "[SYS] Permanent burn executed, public record written...", time: "17:20:51", tone: "default" },
          { text: "[OK] NGO verified trace to preserved area.", time: "17:20:51", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes forest carbon into modular contracts for project identity, evidence anchoring, area-bound minting, and single-count retirement, so a credit is provable and unique.",
    layers: [
      {
        title: "Project Registry",
        subtitle: "The Area Anchor",
        icon: Forest,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Area Anchor",
          description:
            "Anchors each preservation project to its forest boundary and vintage year. It gives every credit a specific, identifiable area to bind to, ending the vagueness that enabled double-counting.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ForestRegistry {\n  struct Project {\n    bytes32 area;\n    uint256 vintage;\n    bytes32 baseline;\n  }\n\n  mapping(bytes32 => Project) public projects;\n\n  function register(bytes32 id, bytes32 area, uint256 vintage) external onlyAuthority {\n    projects[id] = Project(area, vintage, baselineOf(area));\n  }\n}",
        simAction: "Simulate Project Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading forest boundary CD_FOREST_22...", tone: "default" },
          { text: "Recording vintage year 2026...", tone: "default" },
          { text: "Anchoring baseline canopy state...", tone: "default" },
          { text: "Writing project to registry...", tone: "default" },
          { text: "[SUCCESS] Project FOR_8810 registered.", tone: "success" },
        ],
      },
      {
        title: "Evidence Oracle",
        subtitle: "The Preservation Proof",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Preservation Proof",
          description:
            "Anchors satellite and monitoring evidence through External Data Oracles. It verifies the forest remains preserved against its baseline before any credit can be minted, preventing paper-only claims.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract ForestMRV {\n  function anchorEvidence(bytes32 projectId, bytes memory sig) external returns (bool) {\n    require(verifyProvider(sig), \"Invalid feed\");\n    verified[projectId] = true;\n    return true;\n  }\n}",
        simAction: "Simulate Evidence Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Fetching canopy data for CD_FOREST_22...", tone: "default" },
          { text: "Verifying satellite provider signature...", tone: "default" },
          { text: "Confirming preservation against baseline...", tone: "default" },
          { text: "Marking project verified...", tone: "default" },
          { text: "[SUCCESS] Preservation evidence anchored.", tone: "success" },
        ],
      },
      {
        title: "Credit Token",
        subtitle: "The Bound Tonne",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Bound Tonne",
          description:
            "Mints an ERC-20 credit bound to a specific forest area and vintage. The binding ensures a credit maps to real preservation and cannot be conjured from an unidentified pool.",
          platformFunction: "Tokenization",
        },
        codeSnippet:
          "function mint(bytes32 projectId, uint256 tonnes) external onlyMRV {\n    require(verified[projectId], \"Unverified\");\n    _mint(owners[projectId], tonnes);\n    emit CreditsMinted(projectId, tonnes, projects[projectId].area);\n}",
        simAction: "Simulate Credit Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming project verified...", tone: "default" },
          { text: "Binding credits to area and vintage...", tone: "default" },
          { text: "Calculating mintable tonnes...", tone: "default" },
          { text: "Minting credits to project wallet...", tone: "default" },
          { text: "[SUCCESS] 9000 forest credits minted.", tone: "success" },
        ],
      },
      {
        title: "Retirement Ledger",
        subtitle: "The Single-Count Burn",
        icon: Recycling,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single-Count Burn",
          description:
            "Permanently burns a retired credit and writes a public record. It makes double-selling impossible and lets an NGO independently verify each retirement traces to a preserved area.",
          platformFunction: "Anti-Double Counting",
        },
        codeSnippet:
          "function retire(uint256 amount, string calldata reason) external {\n    _burn(msg.sender, amount);\n    retirements.push(Retirement(msg.sender, amount, reason, block.timestamp));\n    emit Retired(msg.sender, amount, reason);\n}",
        simAction: "Simulate Retirement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Corporate buyer retiring 4000 credits...", tone: "default" },
          { text: "Executing permanent burn...", tone: "default" },
          { text: "Writing public retirement record...", tone: "default" },
          { text: "Enabling independent NGO verification...", tone: "default" },
          { text: "[SUCCESS] Credits retired, double-count impossible.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Forest carbon issuance is a horizontal capability. Here is how developers, buyers, and verifiers put one public registry to work.",
    sectors: [
      { icon: Forest, title: "Project Developers", description: "Issue credits bound to a specific area and year with anchored preservation evidence, differentiating high-integrity forest credits in a distrusted market.", assetTypes: ["Area Credits", "Preservation Evidence", "Vintage Records"] },
      { icon: Building2, title: "Corporate Buyers", description: "Publish neutrality claims backed by on-chain proof, replacing unverifiable offsets with credits that trace to a genuinely preserved forest.", assetTypes: ["Retired Credits", "Neutrality Proofs", "Public Claims"] },
      { icon: Users, title: "NGOs & Verifiers", description: "Independently verify each credit on the public chain, confirming it traces to a preserved area and that no credit was retired twice.", assetTypes: ["Independent Audits", "Retirement Records", "Trace Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a developer is bridging a registry platform or an NGO is verifying on the public chain, Cerulea routes both into one carbon ledger.",
    tracks: [
      {
        title: "Track A: Registry Bridging",
        description:
          "For forest carbon programs on legacy registry platforms. Existing project and issuance data are translated into on-chain credits through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Registry", sublabel: "Program Database", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Evidence Hashing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Forest Credit Registry", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Public Chain Verification",
        description:
          "For NGOs and buyers verifying openly. The public chain resolves each credit's area binding, evidence, and retirement with no party contact.",
        connectorLabels: ["PUBLIC ANCHOR", "STATE EXECUTION"],
        nodes: [
          { label: "Verifier / Buyer App", sublabel: "Audit Systems", icon: Fingerprint, accent: false },
          { label: "Decentralized Oracles", sublabel: "Evidence Tallying", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Retirement Ledger", icon: Leaf, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building forest credit issuance with area binding, oracle-anchored evidence, and single-count retirement from scratch requires sustainability and blockchain engineers and heavy verification budgets. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Issuance & Retirement Rules",
      ruleCount: 49,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects ReFi registry integration benchmarks. Writing area-bound issuance, oracle evidence anchoring, and single-count retirement for an average program takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your issuance and retirement rules into pre-audited WebAssembly binaries and provisions the public registry and oracle layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cites-permit-management-for-protected-species-timber-exports",
    icon: ScrollText,
    eyebrow: "Protected Species Permit Engine",
    headline1: "Digitise the permit.",
    headline2: "Pre-clear at the border.",
    heroDescription:
      "Issue each CITES permit as a verifiable credential on a bilateral network. The DID and VC Ledger, Document Signing, and Port and Customs Events carry the permit across borders, and Compliance Attestations record each approval so forged permits are caught at port.",
    heroCta: "Deploy Permit Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a forgeable paper permit into a verifiable credential two authorities share in real time.",
    mechanics: [
      { title: "Verifiable Permits", description: "Replace forgeable paper. Each CITES permit for rosewood, ebony, or other protected species is issued as a verifiable credential, cryptographically bound to its issuing authority." },
      { title: "Bilateral Network", description: "Share the permit across borders. The DID and VC Ledger and Document Signing carry the permit on a bilateral network, so both origin and destination authorities read one record." },
      { title: "Real-Time Border Verification", description: "Verify at the point of entry. Destination customs verify a permit in real time against the network, ending the reliance on unverifiable printed documents." },
      { title: "Advance Pre-Clearance", description: "Clear before arrival. A destination authority pre-clears a shipment ahead of arrival from the on-chain permit, collapsing slow processing at the border." },
      { title: "Forgery Detection", description: "Catch fakes at port. A forged permit on a parallel shipment carries no valid record, so it is caught at port instead of passing a document check." },
      { title: "Approval Attestations", description: "Record every approval. Compliance Attestations log each authority's approval, building an auditable chain of who cleared the protected-species shipment and when." },
    ],
    lifecycleTitle: "The Permit Lifecycle",
    lifecycleSubtitle:
      "Follow one rosewood permit from origin issuance through bilateral sharing to destination pre-clearance.",
    lifecycleSteps: [
      {
        label: "Permit Issuance",
        description:
          "The origin authority issues a CITES permit as a verifiable credential. The DID and VC Ledger anchors the issuer and Document Signing binds the permit content.",
        icon: ScrollText,
        logFilename: "cerulea_cites.log",
        logLines: [
          { text: "[SYS] Issuing CITES permit credential...", time: "06:50:22", tone: "default" },
          { text: "[CMD] issuePermit { species: \"ROSEWOOD\", shipment: \"MG_EXP_18\" }", time: "06:50:22", tone: "primary" },
          { text: "[AUTH] Anchoring issuing authority DID...", time: "06:50:23", tone: "secondary" },
          { text: "[OK] Permit CITES_6620 issued at block 14620455.", time: "06:50:23", tone: "success" },
        ],
      },
      {
        label: "Bilateral Sharing",
        description:
          "The permit publishes to the bilateral network so both origin and destination authorities read the same record, replacing document exchange with a shared ledger.",
        icon: Network,
        logFilename: "cerulea_cites.log",
        logLines: [
          { text: "[SYS] Sharing permit on bilateral network...", time: "09:30:10", tone: "default" },
          { text: "[CMD] shareCredential(CITES_6620, dest: \"AUTH_CN\")", time: "09:30:10", tone: "primary" },
          { text: "[SYS] Destination authority granted read access...", time: "09:30:11", tone: "default" },
          { text: "[OK] Permit visible to both authorities.", time: "09:30:11", tone: "success" },
        ],
      },
      {
        label: "Approval Attestation",
        description:
          "Each authority records its approval. Compliance Attestations build an auditable chain of who cleared the protected-species shipment.",
        icon: FileCheck,
        logFilename: "cerulea_cites.log",
        logLines: [
          { text: "[SYS] Recording origin authority approval...", time: "13:15:44", tone: "default" },
          { text: "[CMD] attestApproval(CITES_6620, authority: \"AUTH_MG\")", time: "13:15:44", tone: "primary" },
          { text: "[AUTH] Signing approval to compliance chain...", time: "13:15:45", tone: "secondary" },
          { text: "[OK] Approval recorded, chain auditable.", time: "13:15:45", tone: "success" },
        ],
      },
      {
        label: "Destination Pre-Clearance",
        description:
          "Destination customs pre-clear the shipment ahead of arrival from the on-chain permit, while forged permits on parallel shipments are caught at port.",
        icon: Landmark,
        logFilename: "cerulea_cites.log",
        logLines: [
          { text: "[SYS] Destination customs verifying CITES_6620...", time: "20:40:18", tone: "default" },
          { text: "[CMD] preClear(CITES_6620, eta: \"+48H\")", time: "20:40:18", tone: "primary" },
          { text: "[SYS] Permit valid, parallel forgery flagged...", time: "20:40:19", tone: "default" },
          { text: "[OK] Shipment pre-cleared 48 hours ahead.", time: "20:40:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes CITES permits into modular contracts for issuer identity, permit binding, bilateral sharing, and border verification, so a permit is verifiable and a forgery fails.",
    layers: [
      {
        title: "Authority Registry",
        subtitle: "The Issuer Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Issuer Anchor",
          description:
            "Anchors each issuing authority through the DID and VC Ledger. It ensures every permit resolves to a recognised CITES management authority rather than an unverifiable stamp on paper.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PermitAuthority {\n  struct Authority {\n    bytes32 did;\n    string country;\n    bool active;\n  }\n\n  mapping(address => Authority) public authorities;\n\n  function register(bytes32 did, string calldata country) external onlyTreaty {\n    authorities[msg.sender] = Authority(did, country, true);\n  }\n}",
        simAction: "Simulate Authority Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Validating treaty management authority...", tone: "default" },
          { text: "Anchoring authority DID...", tone: "default" },
          { text: "Recording issuing country...", tone: "default" },
          { text: "Marking authority active...", tone: "default" },
          { text: "[SUCCESS] Authority anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Permit Notary",
        subtitle: "The Credential Seal",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Credential Seal",
          description:
            "Issues each permit as a verifiable credential and binds its species, quantity, and shipment through Document Signing. This seal makes tampering detectable and forgery unable to resolve.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function issuePermit(bytes32 id, string calldata species, bytes32 shipment) external onlyAuthority {\n    permits[id] = Permit(msg.sender, species, shipment, true);\n    emit PermitIssued(id, species, shipment);\n}",
        simAction: "Simulate Permit Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading protected species ROSEWOOD...", tone: "default" },
          { text: "Binding permit to shipment MG_EXP_18...", tone: "default" },
          { text: "Signing credential with authority key...", tone: "default" },
          { text: "Writing permit to network...", tone: "default" },
          { text: "[SUCCESS] Permit CITES_6620 issued.", tone: "success" },
        ],
      },
      {
        title: "Bilateral Sharing",
        subtitle: "The Two-Nation Ledger",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Nation Ledger",
          description:
            "Grants both origin and destination authorities read access to the same permit record. It replaces cross-border document exchange with one shared ledger both nations trust.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function shareCredential(bytes32 id, address dest) external onlyAuthority {\n    require(authorities[dest].active, \"Unknown authority\");\n    access[id][dest] = true;\n    emit CredentialShared(id, dest);\n}",
        simAction: "Simulate Bilateral Share",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading destination authority AUTH_CN...", tone: "default" },
          { text: "Confirming authority active...", tone: "default" },
          { text: "Granting read access to permit...", tone: "default" },
          { text: "Broadcasting share event...", tone: "default" },
          { text: "[SUCCESS] Permit visible to both nations.", tone: "success" },
        ],
      },
      {
        title: "Border Verifier",
        subtitle: "The Pre-Clearance Gate",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pre-Clearance Gate",
          description:
            "Verifies a permit in real time and pre-clears a shipment ahead of arrival. A forged permit resolves to no valid record and is caught at port instead of clearing on a paper check.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function preClear(bytes32 id) external view returns (bool valid) {\n    Permit memory p = permits[id];\n    return p.active && authorities[p.issuer].active;\n}",
        simAction: "Simulate Pre-Clearance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Destination customs verifying CITES_6620...", tone: "default" },
          { text: "Resolving issuing authority status...", tone: "default" },
          { text: "Confirming permit active and valid...", tone: "default" },
          { text: "Flagging parallel forged permit...", tone: "default" },
          { text: "[SUCCESS] Shipment pre-cleared 48 hours ahead.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Protected-species permitting is a horizontal capability. Here is how authorities, customs, and traders put one bilateral record to work.",
    sectors: [
      { icon: Landmark, title: "CITES Authorities", description: "Issue permits as verifiable credentials and share them across borders, ending forgery and giving counterpart authorities a live, trusted record.", assetTypes: ["Verifiable Permits", "Authority DIDs", "Approval Attestations"] },
      { icon: Truck, title: "Customs & Ports", description: "Pre-clear protected-species shipments ahead of arrival and catch forged permits at port, replacing slow paper processing with real-time verification.", assetTypes: ["Pre-Clearances", "Border Checks", "Forgery Flags"] },
      { icon: Forest, title: "Licensed Traders", description: "Move protected-species timber with a verifiable permit that clears faster, differentiating legal trade from parallel forged shipments.", assetTypes: ["Shipment Permits", "Species Records", "Clearance Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an origin authority is bridging a permit system or destination customs are verifying on the bilateral ledger, Cerulea routes both into one permit record.",
    tracks: [
      {
        title: "Track A: Authority System Bridging",
        description:
          "For management authorities on legacy permit systems. Existing permit records are translated into verifiable credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Permit System", sublabel: "Authority Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Permit Signing", icon: Server, accent: true },
          { label: "Cerulea Bilateral Chain", sublabel: "Shared Permit Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Customs Border Verification",
        description:
          "For destination customs verifying at the border. A signed interface resolves each permit against the bilateral ledger and pre-clears valid shipments.",
        connectorLabels: ["AUTHORITY SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Customs Interface", sublabel: "Destination Authority", icon: Fingerprint, accent: false },
          { label: "Bilateral Validators", sublabel: "Permit Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verifiable Permit Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a bilateral permit network with issuer identity, permit binding, cross-border sharing, and border verification from scratch requires trade and identity engineers and long intergovernmental integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Permit & Approval Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects cross-border credential integration benchmarks. Standing up issuer identity, permit issuance, bilateral sharing, and border verification for an average corridor takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your permit and approval rules into pre-audited WebAssembly binaries and provisions the bilateral ledger and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "reforestation-milestone-verification-for-offset-buyers",
    icon: Forest,
    eyebrow: "Milestone Settlement Engine",
    headline1: "Pay for trees that live.",
    headline2: "Not for promises.",
    heroDescription:
      "Tie payment to independently verified planting and survival milestones. The Carbon Credits MRV and Registry module and External Data Oracles confirm each milestone, and Escrow and Conditional Settlement releases funds as the trees survive.",
    heroCta: "Deploy Milestone Escrows",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a blind reforestation payment into a milestone escrow that releases only on verified survival.",
    mechanics: [
      { title: "Milestone-Bound Escrow", description: "Fund against results. Escrow and Conditional Settlement locks the buyer's payment and releases it only as planting and survival milestones are verified, so money follows proven outcomes." },
      { title: "Independent Verification", description: "Confirm the outcome objectively. The Carbon Credits MRV and Registry module and External Data Oracles verify each planting and survival milestone from independent data, not a developer's report." },
      { title: "Survival-Linked Release", description: "Pay as the trees live. Funds release progressively as trees survive across defined checkpoints, so a buyer never pays for saplings that did not make it." },
      { title: "Developer Cash Flow", description: "Reward real progress promptly. A project developer receives funds the moment survival is confirmed, giving proven projects the cash flow that blind grants delay." },
      { title: "Public Progress Registry", description: "Keep the record open. A public registry holds each project's milestone progress, so buyers, developers, and auditors share one view of what was planted and what survived." },
      { title: "Outcome Accountability", description: "Close the proof gap. Because payment and proof are joined, a project that overstates survival simply does not unlock the next tranche." },
    ],
    lifecycleTitle: "The Reforestation Lifecycle",
    lifecycleSubtitle:
      "Follow one project from an escrow-funded commitment through verified survival checkpoints to progressive payout.",
    lifecycleSteps: [
      {
        label: "Escrow Commitment",
        description:
          "A buyer funds a reforestation commitment into escrow with defined milestones. The contract locks the payment against verified planting and survival.",
        icon: Wallet,
        logFilename: "cerulea_reforest.log",
        logLines: [
          { text: "[SYS] Initializing milestone escrow manifest...", time: "06:30:14", tone: "default" },
          { text: "[CMD] fundCommitment { project: \"KE_REFOR_31\", trees: 50000 }", time: "06:30:14", tone: "primary" },
          { text: "[AUTH] Locking buyer funds against milestones...", time: "06:30:15", tone: "secondary" },
          { text: "[OK] Commitment REFOR_9910 funded at block 15120288.", time: "06:30:15", tone: "success" },
        ],
      },
      {
        label: "Planting Verification",
        description:
          "The first milestone is planting. External Data Oracles confirm the trees were planted before any funds release, verifying the outcome from independent data.",
        icon: Leaf,
        logFilename: "cerulea_reforest.log",
        logLines: [
          { text: "[SYS] Verifying planting milestone for REFOR_9910...", time: "11:20:40", tone: "default" },
          { text: "[CMD] verifyMilestone(REFOR_9910, stage: \"PLANTED\")", time: "11:20:40", tone: "primary" },
          { text: "[SYS] Satellite confirms 50000 saplings planted...", time: "11:20:41", tone: "default" },
          { text: "[OK] Planting verified. First tranche unlocked.", time: "11:20:41", tone: "success" },
        ],
      },
      {
        label: "Survival Checkpoint",
        description:
          "At each survival checkpoint, oracles confirm how many trees remain. The verified survival rate governs the next release of funds.",
        icon: Activity,
        logFilename: "cerulea_reforest.log",
        logLines: [
          { text: "[SYS] Evaluating 12-month survival checkpoint...", time: "14:45:22", tone: "default" },
          { text: "[CMD] checkSurvival(REFOR_9910, rate: 0.88)", time: "14:45:22", tone: "primary" },
          { text: "[SYS] Survival at 88pct against 85pct target...", time: "14:45:23", tone: "default" },
          { text: "[OK] Checkpoint passed. Next tranche authorised.", time: "14:45:23", tone: "success" },
        ],
      },
      {
        label: "Progressive Payout",
        description:
          "Escrow releases the milestone tranche to the developer, and the public registry records the progress for buyers and auditors.",
        icon: Forest,
        logFilename: "cerulea_reforest.log",
        logLines: [
          { text: "[SYS] Releasing milestone tranche for REFOR_9910...", time: "17:10:50", tone: "default" },
          { text: "[CMD] releaseTranche(REFOR_9910, amount: 18000)", time: "17:10:50", tone: "primary" },
          { text: "[AUTH] Paying developer and updating registry...", time: "17:10:51", tone: "secondary" },
          { text: "[OK] Tranche paid on verified survival.", time: "17:10:51", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes reforestation funding into modular contracts for milestone escrow, planting verification, survival checkpoints, and progressive settlement, so payment follows survival.",
    layers: [
      {
        title: "Commitment Escrow",
        subtitle: "The Locked Funding",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Locked Funding",
          description:
            "Locks the buyer's payment against defined milestones through Escrow and Conditional Settlement. It guarantees funds are present for a proven project while releasing nothing until survival is verified.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract MilestoneEscrow {\n  struct Commitment {\n    address buyer;\n    uint256 total;\n    uint256 released;\n    uint8 milestone;\n  }\n\n  mapping(bytes32 => Commitment) public commitments;\n\n  function fund(bytes32 id) external payable {\n    commitments[id] = Commitment(msg.sender, msg.value, 0, 0);\n  }\n}",
        simAction: "Simulate Escrow Commitment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading buyer commitment for KE_REFOR_31...", tone: "default" },
          { text: "Locking full payment in escrow...", tone: "default" },
          { text: "Recording milestone schedule...", tone: "default" },
          { text: "Initialising released balance...", tone: "default" },
          { text: "[SUCCESS] Commitment REFOR_9910 funded.", tone: "success" },
        ],
      },
      {
        title: "Planting Oracle",
        subtitle: "The Outcome Proof",
        icon: Leaf,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Outcome Proof",
          description:
            "Confirms each planting and survival milestone through External Data Oracles and the MRV module. It verifies the outcome from independent data, so releases never depend on a developer's own report.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function verifyMilestone(bytes32 id, uint8 stage, bytes memory sig) external returns (bool) {\n    require(verifyProvider(sig), \"Invalid feed\");\n    verified[id][stage] = true;\n    return true;\n}",
        simAction: "Simulate Planting Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Fetching satellite planting data...", tone: "default" },
          { text: "Verifying oracle provider signature...", tone: "default" },
          { text: "Confirming 50000 saplings planted...", tone: "default" },
          { text: "Marking planting milestone verified...", tone: "default" },
          { text: "[SUCCESS] Planting outcome proven.", tone: "success" },
        ],
      },
      {
        title: "Survival Engine",
        subtitle: "The Checkpoint Gate",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Checkpoint Gate",
          description:
            "Evaluates the verified survival rate at each checkpoint against the target. It governs whether the next tranche unlocks, so a buyer never pays for trees that did not survive.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function checkSurvival(bytes32 id, uint256 ratePct) external onlyOracle returns (bool pass) {\n    pass = ratePct >= targets[id];\n    if (pass) commitments[id].milestone++;\n    emit SurvivalChecked(id, ratePct, pass);\n}",
        simAction: "Simulate Survival Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading 12-month survival data...", tone: "default" },
          { text: "Comparing 88pct against 85pct target...", tone: "default" },
          { text: "Confirming checkpoint passed...", tone: "default" },
          { text: "Advancing milestone counter...", tone: "default" },
          { text: "[SUCCESS] Survival checkpoint cleared.", tone: "success" },
        ],
      },
      {
        title: "Tranche Settlement",
        subtitle: "The Progressive Payout",
        icon: Forest,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Progressive Payout",
          description:
            "Releases each milestone tranche to the developer and records progress on the public registry. It gives proven projects prompt cash flow and buyers a shared view of what survived.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function releaseTranche(bytes32 id, uint256 amount) external onlyEngine {\n    Commitment storage c = commitments[id];\n    require(verified[id][c.milestone], \"Unverified\");\n    c.released += amount;\n    payable(developer[id]).transfer(amount);\n    emit TrancheReleased(id, amount);\n}",
        simAction: "Simulate Tranche Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming milestone verified...", tone: "default" },
          { text: "Computing tranche amount...", tone: "default" },
          { text: "Paying developer from escrow...", tone: "default" },
          { text: "Updating public progress registry...", tone: "default" },
          { text: "[SUCCESS] Tranche paid on verified survival.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Milestone-based funding is a horizontal capability. Here is how buyers, developers, and verifiers put one escrow to work.",
    sectors: [
      { icon: Building2, title: "Offset Buyers", description: "Pay for proven results only, releasing funds as planting and survival are verified rather than handing over money against a promise.", assetTypes: ["Milestone Commitments", "Survival Proofs", "Progress Records"] },
      { icon: Forest, title: "Project Developers", description: "Receive funds the moment survival is confirmed, gaining the prompt cash flow that blind grants delay while demonstrating verifiable outcomes.", assetTypes: ["Verified Milestones", "Tranche Payouts", "Project Registries"] },
      { icon: Users, title: "Verifiers & Auditors", description: "Read a public progress record and confirm each release was tied to an independently verified milestone, closing the proof gap in reforestation funding.", assetTypes: ["Independent Checks", "Milestone Audits", "Public Progress"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a buyer is bridging a grant management system or a developer is reporting from the field, Cerulea routes both into one milestone escrow.",
    tracks: [
      {
        title: "Track A: Grant System Bridging",
        description:
          "For funders on legacy grant management systems. Existing commitment and milestone data are translated into on-chain escrows through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Grant System", sublabel: "Funder Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Milestone Hashing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Milestone Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Milestone Capture",
        description:
          "For developers reporting from the field. A mobile app submits milestone evidence and oracles confirm survival before each tranche releases on-chain.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Developer App", sublabel: "Field Reporting Devices", icon: Fingerprint, accent: false },
          { label: "Decentralized Oracles", sublabel: "Survival Tallying", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Public Progress Registry", icon: Forest, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building milestone escrow, oracle-verified planting and survival checks, and progressive settlement from scratch requires environmental and blockchain engineers and long oracle integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Milestone & Survival Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects results-based finance integration benchmarks. Building milestone escrow, oracle-verified survival checks, and progressive settlement for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your milestone and survival rules into pre-audited WebAssembly binaries and provisions the escrow and oracle layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "timber-auction-and-royalty-distribution-to-forest-communities",
    icon: Gavel,
    eyebrow: "Auction Royalty Engine",
    headline1: "Auction in the open.",
    headline2: "Split proceeds fairly.",
    heroDescription:
      "Record each auction result on a shared network and split proceeds automatically. The Royalty Standard and Royalty Clearing modules apply the agreed percentages, and Escrow and Conditional Settlement pays each party so communities receive their share without delay.",
    heroCta: "Deploy Royalty Distribution",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque auction where communities are paid last into a transparent, automatic split.",
    mechanics: [
      { title: "Transparent Auction Record", description: "Publish the sale. Each auction result is recorded on a shared network, so every rights holder sees the price the timber actually fetched instead of taking it on trust." },
      { title: "Encoded Royalty Splits", description: "Fix the shares in code. The Royalty Standard module encodes the agreed percentages for community, government, and operator, so proceeds divide exactly as agreed." },
      { title: "Automatic Clearing", description: "Distribute without a middleman. The Royalty Clearing module computes each party's share from the sale price and routes it, removing the delay of manual distribution." },
      { title: "Escrow Settlement", description: "Pay each party directly. Escrow and Conditional Settlement releases each share straight to its holder, so a community is not paid last after everyone else takes their cut." },
      { title: "Visible Calculation", description: "Show the math. Every rights holder sees the sale price and the exact calculation of their share, ending disputes over how the split was reached." },
      { title: "Prompt Community Payout", description: "Close the timing gap. Communities receive their share quickly rather than waiting through a chain of intermediaries, and government splits settle without delay." },
    ],
    lifecycleTitle: "The Auction Lifecycle",
    lifecycleSubtitle:
      "Follow one community timber lot from auction close through royalty calculation to each party's automatic payout.",
    lifecycleSteps: [
      {
        label: "Auction Close",
        description:
          "A community timber lot sells at auction. The shared network records the winning price transparently as the basis for the royalty split.",
        icon: Gavel,
        logFilename: "cerulea_royalty.log",
        logLines: [
          { text: "[SYS] Recording auction result on shared network...", time: "07:10:22", tone: "default" },
          { text: "[CMD] closeAuction { lot: \"TIMB_LOT_77\", price: 240000 }", time: "07:10:22", tone: "primary" },
          { text: "[AUTH] Anchoring winning bid and buyer...", time: "07:10:23", tone: "secondary" },
          { text: "[OK] Auction closed at block 15620455.", time: "07:10:23", tone: "success" },
        ],
      },
      {
        label: "Royalty Calculation",
        description:
          "The Royalty Standard module applies the agreed percentages to the sale price, computing each party's share transparently.",
        icon: PieChart,
        logFilename: "cerulea_royalty.log",
        logLines: [
          { text: "[SYS] Applying royalty schedule to TIMB_LOT_77...", time: "07:10:24", tone: "default" },
          { text: "[CMD] computeSplit(240000, community: 55, gov: 30, op: 15)", time: "07:10:24", tone: "primary" },
          { text: "[SYS] Community 132000, gov 72000, operator 36000...", time: "07:10:25", tone: "default" },
          { text: "[OK] Shares computed and visible to all parties.", time: "07:10:25", tone: "success" },
        ],
      },
      {
        label: "Escrow Funding",
        description:
          "The buyer's payment lands in escrow. Escrow and Conditional Settlement holds the proceeds ready to route each computed share to its holder.",
        icon: Wallet,
        logFilename: "cerulea_royalty.log",
        logLines: [
          { text: "[SYS] Receiving buyer payment into escrow...", time: "10:40:11", tone: "default" },
          { text: "[CMD] fundEscrow(TIMB_LOT_77, amount: 240000)", time: "10:40:11", tone: "primary" },
          { text: "[SYS] Proceeds locked, ready for distribution...", time: "10:40:12", tone: "default" },
          { text: "[OK] Escrow funded for royalty clearing.", time: "10:40:12", tone: "success" },
        ],
      },
      {
        label: "Automatic Distribution",
        description:
          "The Royalty Clearing module routes each share to its holder. The community receives its portion quickly, and government and operator splits settle at once.",
        icon: Handshake,
        logFilename: "cerulea_royalty.log",
        logLines: [
          { text: "[SYS] Distributing shares for TIMB_LOT_77...", time: "10:40:13", tone: "default" },
          { text: "[CMD] clearRoyalties(TIMB_LOT_77)", time: "10:40:13", tone: "primary" },
          { text: "[AUTH] Paying community, government, operator...", time: "10:40:14", tone: "secondary" },
          { text: "[OK] All shares settled. Community paid promptly.", time: "10:40:14", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes auction royalties into modular contracts for auction records, royalty schedules, escrow, and automatic clearing, so proceeds divide transparently and pay promptly.",
    layers: [
      {
        title: "Auction Registry",
        subtitle: "The Sale Record",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sale Record",
          description:
            "Records each auction result and winning price on the shared network. It gives every rights holder a transparent basis for the split instead of an unseen sale price they must take on trust.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AuctionRegistry {\n  struct Sale {\n    bytes32 lot;\n    address buyer;\n    uint256 price;\n  }\n\n  mapping(bytes32 => Sale) public sales;\n\n  function closeAuction(bytes32 lot, address buyer, uint256 price) external onlyAuctioneer {\n    sales[lot] = Sale(lot, buyer, price);\n  }\n}",
        simAction: "Simulate Auction Close",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading winning bid for TIMB_LOT_77...", tone: "default" },
          { text: "Recording buyer identity...", tone: "default" },
          { text: "Anchoring sale price 240000...", tone: "default" },
          { text: "Writing auction record...", tone: "default" },
          { text: "[SUCCESS] Auction result recorded.", tone: "success" },
        ],
      },
      {
        title: "Royalty Schedule",
        subtitle: "The Encoded Split",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Encoded Split",
          description:
            "Encodes the agreed percentages for each party through the Royalty Standard module. It ensures proceeds divide exactly as agreed and that the calculation is visible to every rights holder.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function computeSplit(uint256 price, bytes32 lot) external view returns (uint256[] memory shares) {\n    uint8[] memory pct = schedule[lot];\n    shares = new uint256[](pct.length);\n    for (uint256 i = 0; i < pct.length; i++) shares[i] = (price * pct[i]) / 100;\n}",
        simAction: "Simulate Royalty Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading royalty schedule for TIMB_LOT_77...", tone: "default" },
          { text: "Applying 55/30/15 percentages...", tone: "default" },
          { text: "Computing community share 132000...", tone: "default" },
          { text: "Computing government and operator shares...", tone: "default" },
          { text: "[SUCCESS] Shares computed transparently.", tone: "success" },
        ],
      },
      {
        title: "Proceeds Escrow",
        subtitle: "The Held Payment",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Held Payment",
          description:
            "Holds the buyer's payment through Escrow and Conditional Settlement until each share is routed. It guarantees the proceeds are present so no party, least of all the community, waits on the others.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function fundEscrow(bytes32 lot) external payable {\n    require(msg.value == sales[lot].price, \"Amount mismatch\");\n    escrowed[lot] = msg.value;\n    emit EscrowFunded(lot, msg.value);\n}",
        simAction: "Simulate Escrow Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving buyer payment...", tone: "default" },
          { text: "Confirming amount matches sale price...", tone: "default" },
          { text: "Locking proceeds in escrow...", tone: "default" },
          { text: "Preparing for royalty clearing...", tone: "default" },
          { text: "[SUCCESS] Escrow funded for distribution.", tone: "success" },
        ],
      },
      {
        title: "Royalty Clearing",
        subtitle: "The Automatic Split",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Split",
          description:
            "Routes each computed share to its holder through the Royalty Clearing module. It pays the community promptly and settles government and operator splits at once, without a chain of intermediaries.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function clearRoyalties(bytes32 lot) external {\n    uint256[] memory shares = computeSplit(sales[lot].price, lot);\n    address[] memory h = holders[lot];\n    for (uint256 i = 0; i < h.length; i++) payable(h[i]).transfer(shares[i]);\n    emit RoyaltiesCleared(lot);\n}",
        simAction: "Simulate Distribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading computed shares for TIMB_LOT_77...", tone: "default" },
          { text: "Paying community share first...", tone: "default" },
          { text: "Settling government and operator shares...", tone: "default" },
          { text: "Recording distribution on-chain...", tone: "default" },
          { text: "[SUCCESS] All shares settled promptly.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Auction royalty distribution is a horizontal capability. Here is how communities, governments, and operators put one transparent split to work.",
    sectors: [
      { icon: Users, title: "Forest Communities", description: "Receive a fair share quickly with full visibility of the sale price and calculation, ending the position of being paid last with no view of the deal.", assetTypes: ["Community Shares", "Payout Records", "Split Proofs"] },
      { icon: Landmark, title: "Governments & Agencies", description: "Collect the state portion automatically and transparently, settling royalty splits without manual reconciliation or delay.", assetTypes: ["Government Shares", "Auction Records", "Clearing Logs"] },
      { icon: Gavel, title: "Auctioneers & Operators", description: "Run auctions on a shared record where proceeds divide automatically, cutting distribution overhead and disputes over the split.", assetTypes: ["Sale Records", "Royalty Schedules", "Operator Shares"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an auction house is bridging a settlement system or a community is receiving a share to a wallet, Cerulea routes both into one royalty ledger.",
    tracks: [
      {
        title: "Track A: Auction System Bridging",
        description:
          "For auction houses on legacy settlement systems. Existing sale and payout data are translated into on-chain royalty distributions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Settlement System", sublabel: "Auction Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Sale Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Royalty Clearing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Community Wallet Payout",
        description:
          "For communities receiving shares directly. A mobile wallet receives each royalty payout on-chain with full visibility of the sale and calculation.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Community Wallet", sublabel: "Rights Holder Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Clearing Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Transparent Split Record", icon: Gavel, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building transparent auction records, encoded royalty schedules, escrow, and automatic clearing from scratch requires settlement and blockchain engineers and long stakeholder alignment. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Royalty & Clearing Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects revenue-sharing settlement integration benchmarks. Building transparent auction records, encoded royalty schedules, escrow, and automatic clearing for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your royalty and clearing rules into pre-audited WebAssembly binaries and provisions the escrow and clearing layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "end-to-end-cattle-traceability-from-birth-to-slaughter-for-food-safety",
    icon: Radio,
    eyebrow: "Livestock Traceability Engine",
    headline1: "Track every animal.",
    headline2: "Recall only the lot.",
    heroDescription:
      "Record each animal from birth to retail on a shared network. The Traceability Ledger, Provenance Notary, and DID and VC Ledger carry the animal identity, Device Attestation ties records to RFID reads, and a public QR verifies for consumers.",
    heroCta: "Deploy Livestock Traceability",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn falsifiable paper animal IDs into an RFID-anchored record that recalls a single lot in minutes.",
    mechanics: [
      { title: "RFID-Anchored Identity", description: "Fix each animal's identity. Device Attestation ties every record to an RFID read, and the DID and VC Ledger anchors the animal, so identity cannot be falsified on paper." },
      { title: "Birth-to-Retail Chain", description: "Follow the whole life. The Traceability Ledger records each stage from birth through farm, transport, and slaughter to retail, building one continuous animal history." },
      { title: "Provenance Anchoring", description: "Bind events to the animal. Provenance Notary anchors each movement and event to the animal identity, so the record cannot be edited or reassigned after the fact." },
      { title: "Lot-Level Recall", description: "Isolate contamination fast. A food-safety alert names the exact farm, animal ID, and retail lots in minutes, so only affected lots are recalled and the chain keeps running." },
      { title: "Consumer QR Verification", description: "Expose origin to buyers. A public QR resolves a retail pack to the animal's verified journey, giving consumers and retailers credible traceability." },
      { title: "Export Market Access", description: "Meet destination demands. The verifiable birth-to-slaughter record satisfies retailers and export markets that require credible livestock traceability." },
    ],
    lifecycleTitle: "The Livestock Lifecycle",
    lifecycleSubtitle:
      "Follow one animal from an RFID birth record through slaughter to a food-safety alert that names only its lot.",
    lifecycleSteps: [
      {
        label: "Birth Registration",
        description:
          "An animal is registered at birth against its RFID tag. The DID and VC Ledger anchors the identity as the origin of its lifetime record.",
        icon: Radio,
        logFilename: "cerulea_cattle.log",
        logLines: [
          { text: "[SYS] Initializing animal identity manifest...", time: "05:20:14", tone: "default" },
          { text: "[CMD] registerAnimal { rfid: \"AU_982000_441\", farm: \"AU_CAT_12\" }", time: "05:20:14", tone: "primary" },
          { text: "[AUTH] Device attestation confirming RFID read...", time: "05:20:15", tone: "secondary" },
          { text: "[OK] Animal ANM_7710 anchored at block 16120288.", time: "05:20:15", tone: "success" },
        ],
      },
      {
        label: "Movement Events",
        description:
          "The animal moves through farm, transport, and market. Provenance Notary anchors each movement to the animal identity via RFID reads.",
        icon: Truck,
        logFilename: "cerulea_cattle.log",
        logLines: [
          { text: "[SYS] Recording movement event for ANM_7710...", time: "10:15:40", tone: "default" },
          { text: "[CMD] recordMovement(ANM_7710, to: \"FEEDLOT_0x33\")", time: "10:15:40", tone: "primary" },
          { text: "[SYS] Binding RFID read to animal identity...", time: "10:15:41", tone: "default" },
          { text: "[OK] Movement anchored, history extended.", time: "10:15:41", tone: "success" },
        ],
      },
      {
        label: "Slaughter & Lotting",
        description:
          "At slaughter the animal is linked to its processing lot and retail packs, so each pack carries the animal's full birth-to-retail record.",
        icon: Package,
        logFilename: "cerulea_cattle.log",
        logLines: [
          { text: "[SYS] Linking ANM_7710 to processing lot...", time: "14:40:22", tone: "default" },
          { text: "[CMD] linkLot(ANM_7710, lot: \"BEEF_LOT_5521\")", time: "14:40:22", tone: "primary" },
          { text: "[AUTH] Binding retail packs to lot and animal...", time: "14:40:23", tone: "secondary" },
          { text: "[OK] Animal linked to lot and retail packs.", time: "14:40:23", tone: "success" },
        ],
      },
      {
        label: "Recall Isolation",
        description:
          "A safety alert queries the record and names the exact farm, animal ID, and retail lots within minutes, so only affected lots are recalled.",
        icon: Search,
        logFilename: "cerulea_cattle.log",
        logLines: [
          { text: "[SYS] Food-safety alert querying BEEF_LOT_5521...", time: "17:05:33", tone: "default" },
          { text: "[CMD] isolateRecall(BEEF_LOT_5521)", time: "17:05:33", tone: "primary" },
          { text: "[SYS] Resolving farm, animal ID, and retail lots...", time: "17:05:33", tone: "default" },
          { text: "[OK] Affected lots isolated in under 30 minutes.", time: "17:05:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes livestock traceability into modular contracts for RFID identity, movement anchoring, lot linkage, and recall isolation, so a contamination event recalls only its lot.",
    layers: [
      {
        title: "Animal Registry",
        subtitle: "The RFID Identity",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The RFID Identity",
          description:
            "Anchors each animal to its RFID tag through Device Attestation and the DID and VC Ledger. It fixes an identity that cannot be falsified on paper, forming the origin of the lifetime record.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AnimalRegistry {\n  struct Animal {\n    bytes32 rfid;\n    bytes32 farm;\n    uint256 birth;\n  }\n\n  mapping(bytes32 => Animal) public animals;\n\n  function registerAnimal(bytes32 id, bytes32 rfid, bytes32 farm) external onlyAttested {\n    animals[id] = Animal(rfid, farm, block.timestamp);\n  }\n}",
        simAction: "Simulate Birth Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming RFID attestation AU_982000_441...", tone: "default" },
          { text: "Recording birth farm...", tone: "default" },
          { text: "Anchoring animal identity...", tone: "default" },
          { text: "Writing animal to registry...", tone: "default" },
          { text: "[SUCCESS] Animal ANM_7710 registered.", tone: "success" },
        ],
      },
      {
        title: "Movement Log",
        subtitle: "The Lifetime Trail",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Lifetime Trail",
          description:
            "Records each movement anchored to the animal via RFID through Provenance Notary. It builds one continuous, uneditable history from farm to feedlot to market that paper records could never guarantee.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function recordMovement(bytes32 id, address to) external onlyHandler {\n    movements[id].push(Movement(to, block.timestamp));\n    emit AnimalMoved(id, to);\n}",
        simAction: "Simulate Movement Event",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading RFID movement for ANM_7710...", tone: "default" },
          { text: "Confirming handler authorisation...", tone: "default" },
          { text: "Appending movement to lifetime trail...", tone: "default" },
          { text: "Binding read to animal identity...", tone: "default" },
          { text: "[SUCCESS] Movement anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Lot Linker",
        subtitle: "The Retail Binding",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Retail Binding",
          description:
            "Links an animal to its processing lot and retail packs at slaughter. This binding lets a retail pack carry the animal's full record and lets a recall resolve to exact lots.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function linkLot(bytes32 animalId, bytes32 lotId) external onlyProcessor {\n    lotAnimals[lotId].push(animalId);\n    animalLot[animalId] = lotId;\n    emit AnimalLotted(animalId, lotId);\n}",
        simAction: "Simulate Lot Linkage",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading animal ANM_7710 at slaughter...", tone: "default" },
          { text: "Linking to processing lot BEEF_LOT_5521...", tone: "default" },
          { text: "Binding retail packs to lot...", tone: "default" },
          { text: "Sealing animal-to-pack record...", tone: "default" },
          { text: "[SUCCESS] Animal linked to retail packs.", tone: "success" },
        ],
      },
      {
        title: "Recall Resolver",
        subtitle: "The Lot Isolator",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Lot Isolator",
          description:
            "Resolves a safety alert to the exact farm, animal ID, and retail lots. It isolates only affected lots in minutes, so the supply chain keeps running instead of pulling an entire product line.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function isolateRecall(bytes32 lotId) external view returns (bytes32[] memory animals, bytes32 farm) {\n    return (lotAnimals[lotId], originFarm[lotId]);\n}",
        simAction: "Simulate Recall Isolation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Alert querying lot BEEF_LOT_5521...", tone: "default" },
          { text: "Resolving source farm...", tone: "default" },
          { text: "Listing affected animal IDs...", tone: "default" },
          { text: "Mapping to retail lots...", tone: "default" },
          { text: "[SUCCESS] Affected lots isolated fast.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Livestock traceability is a horizontal capability. Here is how farms, processors, and authorities put one record to work.",
    sectors: [
      { icon: Tractor, title: "Farms & Feedlots", description: "Anchor each animal to its RFID at birth and record every movement, building a credible history that opens export markets demanding traceability.", assetTypes: ["Animal Identities", "Movement Records", "RFID Attestations"] },
      { icon: Factory, title: "Processors & Retailers", description: "Link animals to processing lots and retail packs, so a recall isolates only affected lots and consumers can verify origin by QR.", assetTypes: ["Processing Lots", "Retail Packs", "Consumer QR Records"] },
      { icon: Landmark, title: "Food Safety Authorities", description: "Trace a contamination event to the exact farm, animal, and lots in minutes, containing incidents without pulling an entire product line.", assetTypes: ["Recall Records", "Traceback Trails", "Safety Alerts"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a processor is bridging a herd management system or a farm is reading RFID from a handheld, Cerulea routes both into one traceability record.",
    tracks: [
      {
        title: "Track A: Herd System Bridging",
        description:
          "For processors on legacy herd and plant management systems. Existing animal and lot data are translated into on-chain traceability records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Herd Management", sublabel: "Processor Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "RFID Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Livestock Traceability Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Farm RFID Capture",
        description:
          "For farms reading RFID directly. A handheld device attests each read and routes the animal event to the shared traceability ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "RFID Handheld", sublabel: "Farm Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Movement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Animal Record", icon: Radio, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building livestock traceability with RFID identity, movement anchoring, lot linkage, and rapid recall isolation from scratch requires supply chain and IoT engineers and long herd integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Identity & Recall Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects livestock traceability integration benchmarks. Wiring RFID identity, movement anchoring, lot linkage, and recall isolation for an average chain takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your identity and recall rules into pre-audited WebAssembly binaries and provisions the shared ledger and device attestation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "vaccination-and-disease-event-records-shared-across-vets-farms-regulat",
    icon: HeartPulse,
    eyebrow: "Animal Health Records Engine",
    headline1: "Share the herd's health.",
    headline2: "Outrun the outbreak.",
    heroDescription:
      "Hold shared veterinary records on one network. Vaccination events post as verifiable credentials through the DID and VC Ledger, and Compliance Attestations and Notifications keep regulators current so a disease response can deploy before the outbreak spreads.",
    heroCta: "Deploy Health Record Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fragmented paper vaccination records into a shared network regulators can read in real time.",
    mechanics: [
      { title: "Shared Health Ledger", description: "Unify the records. Vets, farms, and regulators write to one network, replacing fragmented paper that keeps herd health invisible until an outbreak is already spreading." },
      { title: "Verifiable Vaccination Credentials", description: "Post events as credentials. Each vaccination is issued as a verifiable credential through the DID and VC Ledger, bound to the vet who administered it and the animal or herd." },
      { title: "Real-Time Coverage View", description: "Read immunity live. Regulators query vaccination coverage across districts in real time, so herd immunity and compliance are visible rather than reconstructed after the fact." },
      { title: "Disease Event Logging", description: "Record outbreaks as they happen. Disease events post to the shared network, giving authorities an immediate, verifiable picture of where a pathogen has appeared." },
      { title: "Regulator Notifications", description: "Push the alert. Notifications keep the disease control agency current, so a targeted response is triggered by the record rather than by a delayed paper report." },
      { title: "Targeted Rapid Response", description: "Deploy before it spreads. Because coverage and events are live, a foot-and-mouth response reads coverage for every district in minutes and deploys where it is needed." },
    ],
    lifecycleTitle: "The Health Record Lifecycle",
    lifecycleSubtitle:
      "Follow one herd from a vaccination credential through shared coverage to a disease alert that triggers a targeted response.",
    lifecycleSteps: [
      {
        label: "Vet Onboarding",
        description:
          "A veterinarian registers a decentralised identifier. The DID and VC Ledger anchors the vet so every vaccination credential resolves to a recognised practitioner.",
        icon: IdCard,
        logFilename: "cerulea_animalhealth.log",
        logLines: [
          { text: "[SYS] Registering veterinarian identity...", time: "06:10:22", tone: "default" },
          { text: "[CMD] registerVet { id: \"VET_2204\", district: \"KA_07\" }", time: "06:10:22", tone: "primary" },
          { text: "[AUTH] Anchoring practitioner DID and licence...", time: "06:10:23", tone: "secondary" },
          { text: "[OK] Vet VET_2204 anchored at block 16620455.", time: "06:10:23", tone: "success" },
        ],
      },
      {
        label: "Vaccination Credential",
        description:
          "The vet posts a vaccination event as a verifiable credential, bound to the herd and the vet, and written to the shared network.",
        icon: HeartPulse,
        logFilename: "cerulea_animalhealth.log",
        logLines: [
          { text: "[SYS] Issuing vaccination credential...", time: "10:30:41", tone: "default" },
          { text: "[CMD] postVaccination(herd: \"HERD_9910\", vaccine: \"FMD\")", time: "10:30:41", tone: "primary" },
          { text: "[SYS] Binding credential to herd and vet...", time: "10:30:42", tone: "default" },
          { text: "[OK] Vaccination recorded on shared network.", time: "10:30:42", tone: "success" },
        ],
      },
      {
        label: "Coverage Aggregation",
        description:
          "The network aggregates vaccination coverage across herds and districts, giving regulators a live view of herd immunity and compliance.",
        icon: PieChart,
        logFilename: "cerulea_animalhealth.log",
        logLines: [
          { text: "[SYS] Aggregating district vaccination coverage...", time: "14:15:12", tone: "default" },
          { text: "[CMD] queryCoverage(district: \"KA_07\")", time: "14:15:12", tone: "primary" },
          { text: "[SYS] Coverage computed at 82pct of herds...", time: "14:15:13", tone: "default" },
          { text: "[OK] Live coverage view returned to regulator.", time: "14:15:13", tone: "success" },
        ],
      },
      {
        label: "Outbreak Response",
        description:
          "A disease alert reads coverage for every district in minutes. Notifications trigger a targeted response before the outbreak spreads.",
        icon: Search,
        logFilename: "cerulea_animalhealth.log",
        logLines: [
          { text: "[SYS] Foot-and-mouth alert querying coverage...", time: "17:40:33", tone: "default" },
          { text: "[CMD] readCoverage(region: \"SOUTH\")", time: "17:40:33", tone: "primary" },
          { text: "[SYS] Identifying low-coverage districts...", time: "17:40:34", tone: "default" },
          { text: "[OK] Targeted response deployed in minutes.", time: "17:40:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes animal health records into modular contracts for vet identity, vaccination credentials, coverage aggregation, and outbreak notification, so a response can outrun the disease.",
    layers: [
      {
        title: "Vet Registry",
        subtitle: "The Practitioner Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Practitioner Anchor",
          description:
            "Anchors each veterinarian through the DID and VC Ledger. It ensures every vaccination credential resolves to a licensed practitioner, so the shared record cannot be filled with unverifiable entries.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract VetRegistry {\n  struct Vet {\n    bytes32 did;\n    bytes32 district;\n    bool licensed;\n  }\n\n  mapping(bytes32 => Vet) public vets;\n\n  function registerVet(bytes32 id, bytes32 district) external onlyAuthority {\n    vets[id] = Vet(didOf(id), district, true);\n  }\n}",
        simAction: "Simulate Vet Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Validating veterinary licence...", tone: "default" },
          { text: "Anchoring practitioner DID...", tone: "default" },
          { text: "Recording district assignment...", tone: "default" },
          { text: "Writing vet to registry...", tone: "default" },
          { text: "[SUCCESS] Vet VET_2204 anchored.", tone: "success" },
        ],
      },
      {
        title: "Vaccination Notary",
        subtitle: "The Event Credential",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Event Credential",
          description:
            "Issues each vaccination as a verifiable credential bound to the herd and vet. It records health events on a shared network that all parties trust, ending fragmented paper logs.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function postVaccination(bytes32 herd, bytes32 vaccine, bytes32 vet) external onlyVet {\n    records[herd].push(HealthEvent(vaccine, vet, block.timestamp));\n    emit Vaccinated(herd, vaccine, vet);\n}",
        simAction: "Simulate Vaccination Credential",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading herd HERD_9910...", tone: "default" },
          { text: "Recording FMD vaccination...", tone: "default" },
          { text: "Binding credential to vet...", tone: "default" },
          { text: "Writing event to shared network...", tone: "default" },
          { text: "[SUCCESS] Vaccination credential posted.", tone: "success" },
        ],
      },
      {
        title: "Coverage Engine",
        subtitle: "The Immunity View",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Immunity View",
          description:
            "Aggregates vaccination coverage across herds and districts. It gives regulators a live view of herd immunity and compliance instead of a picture reconstructed after an outbreak begins.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function queryCoverage(bytes32 district) external view returns (uint8 pct) {\n    uint256 vaccinated = vaccinatedHerds[district];\n    uint256 total = totalHerds[district];\n    pct = uint8((vaccinated * 100) / total);\n}",
        simAction: "Simulate Coverage Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Counting vaccinated herds in KA_07...", tone: "default" },
          { text: "Reading total herd count...", tone: "default" },
          { text: "Computing coverage percentage...", tone: "default" },
          { text: "Returning 82pct coverage...", tone: "default" },
          { text: "[SUCCESS] Live coverage view returned.", tone: "success" },
        ],
      },
      {
        title: "Outbreak Notifier",
        subtitle: "The Response Trigger",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Response Trigger",
          description:
            "Reads coverage across districts and pushes alerts through Notifications when a disease event appears. It triggers a targeted response from the live record, so containment can outrun the pathogen.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function readCoverage(bytes32 region) external view returns (bytes32[] memory lowDistricts) {\n    return districtsBelow(region, responseThreshold);\n}",
        simAction: "Simulate Outbreak Response",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Alert reading coverage for SOUTH region...", tone: "default" },
          { text: "Scanning districts against threshold...", tone: "default" },
          { text: "Identifying low-coverage districts...", tone: "default" },
          { text: "Dispatching targeted response alert...", tone: "default" },
          { text: "[SUCCESS] Response deployed in minutes.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared animal health records are a horizontal capability. Here is how vets, farms, and authorities put one network to work.",
    sectors: [
      { icon: HeartPulse, title: "Veterinarians", description: "Post vaccination and treatment events as verifiable credentials, building a shared health record that every party trusts and that follows the herd.", assetTypes: ["Vaccination Credentials", "Treatment Records", "Vet Attestations"] },
      { icon: Tractor, title: "Farms & Herds", description: "Hold a complete, portable health history for each herd, demonstrating compliance and supporting movement, trade, and insurance from one record.", assetTypes: ["Herd Histories", "Compliance Records", "Health Events"] },
      { icon: Landmark, title: "Disease Control Agencies", description: "Read herd immunity and disease events in real time, deploying a targeted response before an outbreak spreads instead of reacting to delayed reports.", assetTypes: ["Coverage Views", "Outbreak Alerts", "Response Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an agency is bridging a veterinary information system or a vet is posting from the field, Cerulea routes both into one health record network.",
    tracks: [
      {
        title: "Track A: Veterinary System Bridging",
        description:
          "For agencies on legacy veterinary information systems. Existing vaccination and disease data are translated into verifiable credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Vet Information System", sublabel: "Agency Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Animal Health Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Vet Capture",
        description:
          "For vets posting from the field. A mobile app signs each vaccination credential and routes it to the shared health network in real time.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Vet Mobile App", sublabel: "Field Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Record Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Health Record", icon: HeartPulse, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared animal health network with vet identity, vaccination credentials, coverage aggregation, and outbreak notification from scratch requires health and blockchain engineers and long agency integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credential & Coverage Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects health information integration benchmarks. Building vet identity, vaccination credentials, coverage aggregation, and outbreak notification for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your credential and coverage rules into pre-audited WebAssembly binaries and provisions the shared network and notification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "livestock-insurance-claims-with-tamper-proof-mortality-records",
    icon: Shield,
    eyebrow: "Livestock Claims Engine",
    headline1: "Verify the mortality.",
    headline2: "Kill the double claim.",
    heroDescription:
      "Register each animal against RFID on a shared network. A vet issues a mortality credential on-chain through the DID and VC Ledger, and the Parametric Insurance module with Escrow and Conditional Settlement releases the payout, closing the record permanently.",
    heroCta: "Deploy Livestock Insurance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fraud-prone livestock claims into RFID-anchored mortality records that cannot be claimed twice.",
    mechanics: [
      { title: "RFID Animal Registration", description: "Insure a real, unique animal. Each animal is registered against RFID on the shared network, so a policy cannot cover an animal that never existed." },
      { title: "Vet Mortality Credential", description: "Verify death at the source. A licensed vet issues a mortality credential on-chain through the DID and VC Ledger after scanning the RFID, replacing costly field-visit verification." },
      { title: "Automatic Payout", description: "Settle fast. The Parametric Insurance module with Escrow and Conditional Settlement releases the payout to the farmer once the mortality credential is verified." },
      { title: "Permanent Record Closure", description: "Prevent the second claim. On payout the animal record is closed permanently, so the same animal cannot be claimed again by anyone." },
      { title: "Double-Claim Detection", description: "Block duplicates structurally. Because each animal identity is unique and closed on claim, claiming a dead animal twice returns an already-settled record." },
      { title: "Lower Loss Ratios", description: "Cut fraud from the book. Verified mortality and unique identities remove phantom animals and duplicate claims, improving the insurer's loss ratio." },
    ],
    lifecycleTitle: "The Claims Lifecycle",
    lifecycleSubtitle:
      "Follow one insured animal from RFID registration through a vet mortality credential to an automatic payout that closes the record.",
    lifecycleSteps: [
      {
        label: "Animal & Policy Binding",
        description:
          "An animal is registered against RFID and bound to a policy. The shared network anchors the unique identity that the policy covers.",
        icon: Radio,
        logFilename: "cerulea_livestockins.log",
        logLines: [
          { text: "[SYS] Binding animal to insurance policy...", time: "05:40:14", tone: "default" },
          { text: "[CMD] bindPolicy { rfid: \"IN_982_7712\", cover: 60000 }", time: "05:40:14", tone: "primary" },
          { text: "[AUTH] Anchoring unique animal identity...", time: "05:40:15", tone: "secondary" },
          { text: "[OK] Policy LIVE_9910 bound at block 17120288.", time: "05:40:15", tone: "success" },
        ],
      },
      {
        label: "Mortality Credential",
        description:
          "The animal dies and a vet scans the RFID, issuing a mortality credential on-chain through the DID and VC Ledger.",
        icon: HeartPulse,
        logFilename: "cerulea_livestockins.log",
        logLines: [
          { text: "[SYS] Vet issuing mortality credential...", time: "11:10:41", tone: "default" },
          { text: "[CMD] certifyMortality(IN_982_7712, vet: \"VET_331\")", time: "11:10:41", tone: "primary" },
          { text: "[AUTH] Verifying RFID scan and vet licence...", time: "11:10:42", tone: "secondary" },
          { text: "[OK] Mortality credential anchored on-chain.", time: "11:10:42", tone: "success" },
        ],
      },
      {
        label: "Payout Settlement",
        description:
          "The Parametric Insurance module and Escrow release the payout to the farmer once the mortality credential is verified.",
        icon: Wallet,
        logFilename: "cerulea_livestockins.log",
        logLines: [
          { text: "[SYS] Verifying mortality for LIVE_9910...", time: "13:40:22", tone: "default" },
          { text: "[CMD] settleClaim(LIVE_9910, payout: 60000)", time: "13:40:22", tone: "primary" },
          { text: "[SYS] Releasing indemnity from escrow to farmer...", time: "13:40:23", tone: "default" },
          { text: "[OK] Payout reached farmer within 24 hours.", time: "13:40:23", tone: "success" },
        ],
      },
      {
        label: "Record Closure",
        description:
          "The animal record is closed permanently, so the identity cannot be reused and the animal cannot be claimed a second time.",
        icon: Lock,
        logFilename: "cerulea_livestockins.log",
        logLines: [
          { text: "[SYS] Closing animal record for IN_982_7712...", time: "13:40:24", tone: "default" },
          { text: "[CMD] closeRecord(IN_982_7712)", time: "13:40:24", tone: "primary" },
          { text: "[AUTH] Marking identity permanently settled...", time: "13:40:25", tone: "secondary" },
          { text: "[OK] Record closed. Second claim impossible.", time: "13:40:25", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes livestock insurance into modular contracts for animal identity, mortality credentials, escrow payout, and permanent closure, so a claim is verified and never duplicated.",
    layers: [
      {
        title: "Animal Registry",
        subtitle: "The Unique Identity",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Unique Identity",
          description:
            "Registers each insured animal against RFID and binds it to a policy. It ensures a policy covers a real, unique animal, so phantom animals cannot be insured or claimed.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract LivestockPolicy {\n  struct Cover {\n    bytes32 rfid;\n    address farmer;\n    uint256 amount;\n    bool closed;\n  }\n\n  mapping(bytes32 => Cover) public covers;\n\n  function bindPolicy(bytes32 id, bytes32 rfid, uint256 amount) external {\n    covers[id] = Cover(rfid, msg.sender, amount, false);\n  }\n}",
        simAction: "Simulate Policy Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading RFID IN_982_7712...", tone: "default" },
          { text: "Confirming identity is unique...", tone: "default" },
          { text: "Binding animal to policy...", tone: "default" },
          { text: "Recording cover amount...", tone: "default" },
          { text: "[SUCCESS] Policy LIVE_9910 bound.", tone: "success" },
        ],
      },
      {
        title: "Mortality Notary",
        subtitle: "The Vet Attestation",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Vet Attestation",
          description:
            "Lets a licensed vet issue a mortality credential after scanning the RFID through the DID and VC Ledger. It verifies death at the source, replacing expensive and disputable field visits.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function certifyMortality(bytes32 rfid, bytes32 vet) external onlyVet {\n    require(scanned[rfid], \"No RFID scan\");\n    mortality[rfid] = Mortality(vet, block.timestamp, true);\n    emit MortalityCertified(rfid, vet);\n}",
        simAction: "Simulate Mortality Credential",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Vet scanning RFID IN_982_7712...", tone: "default" },
          { text: "Verifying vet licence VET_331...", tone: "default" },
          { text: "Recording mortality event...", tone: "default" },
          { text: "Anchoring credential on-chain...", tone: "default" },
          { text: "[SUCCESS] Mortality credential issued.", tone: "success" },
        ],
      },
      {
        title: "Claim Escrow",
        subtitle: "The Fast Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fast Payout",
          description:
            "Releases the indemnity to the farmer once a mortality credential is verified through the Parametric Insurance module and Escrow. It settles a claim in hours rather than after a field investigation.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settleClaim(bytes32 id) external {\n    Cover storage c = covers[id];\n    require(mortality[c.rfid].certified && !c.closed, \"Not payable\");\n    payable(c.farmer).transfer(c.amount);\n    emit ClaimSettled(id, c.amount);\n}",
        simAction: "Simulate Claim Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying mortality credential...", tone: "default" },
          { text: "Confirming policy not yet closed...", tone: "default" },
          { text: "Releasing indemnity from escrow...", tone: "default" },
          { text: "Transferring payout to farmer...", tone: "default" },
          { text: "[SUCCESS] Payout settled in hours.", tone: "success" },
        ],
      },
      {
        title: "Closure Guard",
        subtitle: "The Duplicate Blocker",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Duplicate Blocker",
          description:
            "Closes the animal record permanently on payout. It makes the identity non-reusable, so the same animal cannot be claimed twice and phantom duplicates are structurally impossible.",
          platformFunction: "Anti-Double Counting",
        },
        codeSnippet:
          "function closeRecord(bytes32 id) external onlyEngine {\n    Cover storage c = covers[id];\n    require(!c.closed, \"Already closed\");\n    c.closed = true;\n    emit RecordClosed(id, c.rfid);\n}",
        simAction: "Simulate Record Closure",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading settled policy LIVE_9910...", tone: "default" },
          { text: "Confirming record not yet closed...", tone: "default" },
          { text: "Marking identity permanently settled...", tone: "default" },
          { text: "Blocking any future claim...", tone: "default" },
          { text: "[SUCCESS] Record closed, double claim blocked.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified livestock insurance is a horizontal capability. Here is how insurers, vets, and farmers put one record to work.",
    sectors: [
      { icon: Shield, title: "Livestock Insurers", description: "Underwrite against unique RFID identities and vet-verified mortality, removing phantom animals and duplicate claims to cut heavy fraud from the book.", assetTypes: ["Verified Policies", "Mortality Records", "Closed Claims"] },
      { icon: HeartPulse, title: "Veterinarians", description: "Issue mortality credentials on-chain after an RFID scan, providing the verified proof that replaces costly and disputable field visits.", assetTypes: ["Mortality Credentials", "Scan Records", "Vet Attestations"] },
      { icon: Tractor, title: "Farmers & Herders", description: "Receive a payout within a day of a verified death, with a transparent, fraud-resistant process that builds trust in livestock insurance.", assetTypes: ["Cover Records", "Fast Payouts", "Animal Identities"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an insurer is bridging a policy system or a vet is certifying mortality from the field, Cerulea routes both into one claims record.",
    tracks: [
      {
        title: "Track A: Insurer System Bridging",
        description:
          "For carriers on legacy policy systems. Existing policy and animal data are translated into on-chain cover records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Policy System", sublabel: "Insurer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Identity Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Livestock Claims Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Vet Field Certification",
        description:
          "For vets certifying mortality directly. A mobile app scans the RFID and issues the credential on-chain, triggering settlement from the field.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Vet Mobile App", sublabel: "RFID Scan Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Mortality Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Tamper-Proof Claims Record", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building RFID animal registration, on-chain mortality credentials, escrow payout, and permanent record closure from scratch requires insurance and blockchain engineers and long field rollout. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Mortality & Claim Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects insurtech fraud-control integration benchmarks. Building RFID registration, on-chain mortality credentials, escrow payout, and permanent closure for an average product takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your mortality and claim rules into pre-audited WebAssembly binaries and provisions the credential and escrow layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cross-border-livestock-trade-documentation-and-compliance",
    icon: Globe,
    eyebrow: "Livestock Trade Compliance Engine",
    headline1: "Clear the border early.",
    headline2: "Cut the checkpoint queue.",
    heroDescription:
      "Issue each certificate as a verifiable credential on a shared trade network. The DID and VC Ledger, Document Signing, and Port and Customs Events carry the documents, and Compliance Attestations record each clearance so a consignment is pre-cleared ahead of arrival.",
    heroCta: "Deploy Trade Compliance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn paper health certificates and transit permits into verifiable credentials that pre-clear at the border.",
    mechanics: [
      { title: "Verifiable Trade Documents", description: "Replace forgeable paper. Health certificates, transit permits, and quarantine records are issued as verifiable credentials through the DID and VC Ledger and Document Signing." },
      { title: "Shared Trade Network", description: "Give both sides one record. Origin and destination authorities read the same shared network, so documents do not shuttle back and forth and stall at checkpoints." },
      { title: "Customs Event Trail", description: "Track each border step. Port and Customs Events record inspection and clearance, giving a live view of where a consignment stands in transit." },
      { title: "Clearance Attestations", description: "Record each approval. Compliance Attestations log every clearance, building an auditable chain that reduces the room for corruption at checkpoints." },
      { title: "Advance Pre-Clearance", description: "Clear before arrival. A destination authority pre-clears a consignment ahead of arrival from the on-chain credentials, collapsing document queues at the border." },
      { title: "Reduced Rejections", description: "Cut delays and rejections. Because credentials are verified and complete before arrival, transit delays, document rejections, and checkpoint friction fall away." },
    ],
    lifecycleTitle: "The Trade Lifecycle",
    lifecycleSubtitle:
      "Follow one buffalo consignment from certificate issuance through the border to a pre-clearance ahead of arrival.",
    lifecycleSteps: [
      {
        label: "Certificate Issuance",
        description:
          "The origin authority issues health and transit certificates as verifiable credentials, bound to the consignment through Document Signing.",
        icon: FileCheck,
        logFilename: "cerulea_livetrade.log",
        logLines: [
          { text: "[SYS] Issuing livestock trade credentials...", time: "06:20:14", tone: "default" },
          { text: "[CMD] issueCerts { consignment: \"BUFF_204\", docs: 3 }", time: "06:20:14", tone: "primary" },
          { text: "[AUTH] Binding health and transit certs to consignment...", time: "06:20:15", tone: "secondary" },
          { text: "[OK] 3 credentials issued at block 17620455.", time: "06:20:15", tone: "success" },
        ],
      },
      {
        label: "Network Sharing",
        description:
          "The credentials publish to the shared trade network, so both origin and destination authorities read the same consignment record.",
        icon: Network,
        logFilename: "cerulea_livetrade.log",
        logLines: [
          { text: "[SYS] Sharing credentials on trade network...", time: "09:30:41", tone: "default" },
          { text: "[CMD] shareCerts(BUFF_204, dest: \"AUTH_BD\")", time: "09:30:41", tone: "primary" },
          { text: "[SYS] Destination authority granted read access...", time: "09:30:42", tone: "default" },
          { text: "[OK] Consignment visible to both authorities.", time: "09:30:42", tone: "success" },
        ],
      },
      {
        label: "Transit Events",
        description:
          "Port and Customs Events record each transit and inspection step, and Compliance Attestations log each clearance along the route.",
        icon: Truck,
        logFilename: "cerulea_livetrade.log",
        logLines: [
          { text: "[SYS] Recording transit checkpoint for BUFF_204...", time: "13:15:22", tone: "default" },
          { text: "[CMD] recordEvent(BUFF_204, event: \"TRANSIT_CLEARED\")", time: "13:15:22", tone: "primary" },
          { text: "[AUTH] Signing clearance to compliance chain...", time: "13:15:23", tone: "secondary" },
          { text: "[OK] Checkpoint recorded, chain auditable.", time: "13:15:23", tone: "success" },
        ],
      },
      {
        label: "Border Pre-Clearance",
        description:
          "Destination customs pre-clear the consignment ahead of arrival from the on-chain credentials, so the document queue at the border disappears.",
        icon: Landmark,
        logFilename: "cerulea_livetrade.log",
        logLines: [
          { text: "[SYS] Destination customs verifying BUFF_204...", time: "19:40:33", tone: "default" },
          { text: "[CMD] preClear(BUFF_204, eta: \"+12H\")", time: "19:40:33", tone: "primary" },
          { text: "[SYS] Validating 3 credentials and transit trail...", time: "19:40:34", tone: "default" },
          { text: "[OK] Consignment pre-cleared 12 hours ahead.", time: "19:40:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes livestock trade into modular contracts for certificate issuance, network sharing, transit events, and border pre-clearance, so a consignment clears ahead of arrival.",
    layers: [
      {
        title: "Certificate Notary",
        subtitle: "The Trade Credential",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Trade Credential",
          description:
            "Issues health, transit, and quarantine documents as verifiable credentials through the DID and VC Ledger and Document Signing. It replaces forgeable paper that stalls at every checkpoint.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "contract LivestockTrade {\n  struct Cert {\n    bytes32 kind;\n    address issuer;\n    bool active;\n  }\n\n  mapping(bytes32 => Cert[]) public certs;\n\n  function issueCert(bytes32 consignment, bytes32 kind) external onlyAuthority {\n    certs[consignment].push(Cert(kind, msg.sender, true));\n  }\n}",
        simAction: "Simulate Certificate Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading consignment BUFF_204...", tone: "default" },
          { text: "Issuing health certificate...", tone: "default" },
          { text: "Binding transit and quarantine records...", tone: "default" },
          { text: "Signing credentials with authority key...", tone: "default" },
          { text: "[SUCCESS] 3 credentials issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Trade Sharing",
        subtitle: "The Shared Record",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Record",
          description:
            "Grants both origin and destination authorities read access to the same consignment record. It ends the back-and-forth document exchange that causes delays and checkpoint corruption.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function shareCerts(bytes32 consignment, address dest) external onlyAuthority {\n    require(authorities[dest], \"Unknown authority\");\n    access[consignment][dest] = true;\n    emit CertsShared(consignment, dest);\n}",
        simAction: "Simulate Network Sharing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading destination authority AUTH_BD...", tone: "default" },
          { text: "Confirming authority recognised...", tone: "default" },
          { text: "Granting read access to consignment...", tone: "default" },
          { text: "Broadcasting share event...", tone: "default" },
          { text: "[SUCCESS] Consignment visible to both sides.", tone: "success" },
        ],
      },
      {
        title: "Transit Events",
        subtitle: "The Checkpoint Trail",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Checkpoint Trail",
          description:
            "Records each transit and inspection through Port and Customs Events and logs clearances with Compliance Attestations. It gives an auditable chain that reduces room for corruption at checkpoints.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function recordEvent(bytes32 consignment, string calldata event) external onlyAuthority {\n    trail[consignment].push(Event(event, msg.sender, block.timestamp));\n    emit TransitEvent(consignment, event);\n}",
        simAction: "Simulate Transit Event",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checkpoint initiating clearance for BUFF_204...", tone: "default" },
          { text: "Validating authority signing key...", tone: "default" },
          { text: "Appending clearance to trail...", tone: "default" },
          { text: "Recording compliance attestation...", tone: "default" },
          { text: "[SUCCESS] Checkpoint recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Border Verifier",
        subtitle: "The Pre-Clearance Gate",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Pre-Clearance Gate",
          description:
            "Verifies a consignment's credentials and transit trail and pre-clears it ahead of arrival. It collapses the document queue at the border into a real-time check on verified data.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function preClear(bytes32 consignment) external view returns (bool ready) {\n    return certs[consignment].length >= requiredCerts && trail[consignment].length > 0;\n}",
        simAction: "Simulate Pre-Clearance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Destination customs verifying BUFF_204...", tone: "default" },
          { text: "Counting valid credentials...", tone: "default" },
          { text: "Confirming transit trail complete...", tone: "default" },
          { text: "Authorising advance clearance...", tone: "default" },
          { text: "[SUCCESS] Consignment pre-cleared ahead of arrival.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Cross-border livestock compliance is a horizontal capability. Here is how authorities, traders, and customs put one shared network to work.",
    sectors: [
      { icon: Landmark, title: "Veterinary Authorities", description: "Issue health and transit certificates as verifiable credentials and share them across borders, reducing forgery and speeding clearance for legitimate trade.", assetTypes: ["Health Credentials", "Transit Permits", "Quarantine Records"] },
      { icon: Truck, title: "Livestock Traders", description: "Move consignments that pre-clear ahead of arrival, cutting transit delays and the checkpoint friction that raises cost and risk.", assetTypes: ["Consignment Records", "Clearance Proofs", "Pre-Clearances"] },
      { icon: Globe, title: "Customs & Border Agencies", description: "Read a shared consignment record and pre-clear on verified data, removing document queues and reducing corruption at checkpoints.", assetTypes: ["Border Clearances", "Transit Events", "Compliance Chains"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an authority is bridging a trade certification system or destination customs are verifying on the shared network, Cerulea routes both into one trade record.",
    tracks: [
      {
        title: "Track A: Authority System Bridging",
        description:
          "For veterinary and trade authorities on legacy certification systems. Existing certificate and transit data are translated into verifiable credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Certification System", sublabel: "Authority Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Signing", icon: Server, accent: true },
          { label: "Cerulea Shared Chain", sublabel: "Livestock Trade Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Customs Border Verification",
        description:
          "For destination customs verifying at the border. A signed interface resolves each consignment against the shared network and pre-clears valid trade.",
        connectorLabels: ["AUTHORITY SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Customs Interface", sublabel: "Destination Authority", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Clearance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Trade Record", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-border livestock trade network with verifiable credentials, network sharing, transit events, and border pre-clearance from scratch requires trade and identity engineers and long intergovernmental integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Document & Clearance Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects cross-border credential integration benchmarks. Standing up verifiable certificates, network sharing, transit events, and border pre-clearance for an average corridor takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your document and clearance rules into pre-audited WebAssembly binaries and provisions the shared network and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "feed-supply-chain-traceability-and-contamination-alert-system",
    icon: Boxes,
    eyebrow: "Feed Traceability Engine",
    headline1: "Trace the ingredient.",
    headline2: "Alert only the affected.",
    heroDescription:
      "Trace every feed batch from raw ingredient supplier to the receiving farm on a private network. The Traceability Ledger and Quality and Recall Ledger link each batch, and Provenance Notary anchors the source so a contamination alert reaches only the farms actually affected.",
    heroCta: "Deploy Feed Traceability",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a blind multi-supplier feed chain into a linked record that pinpoints contamination in minutes.",
    mechanics: [
      { title: "Ingredient-to-Farm Linkage", description: "Connect the whole chain. The Traceability Ledger links each feed batch from raw ingredient supplier through the mill to the receiving farm, so a batch's full path is known." },
      { title: "Source Anchoring", description: "Fix each ingredient's origin. Provenance Notary anchors the source of every ingredient batch, so a contaminated input can be traced back to exactly where it entered." },
      { title: "Downstream Mapping", description: "Know who received what. The record maps each ingredient batch to every finished feed batch and farm it reached, so exposure is precise rather than assumed." },
      { title: "Targeted Contamination Alert", description: "Alert only the affected. When contamination surfaces, the Quality and Recall Ledger notifies only the farms that received the implicated batch, within minutes." },
      { title: "Precise Recall", description: "Shrink the recall. A broad regional recall is replaced by a precise one limited to the affected batches, so safe feed keeps moving." },
      { title: "Supplier Accountability", description: "Pin the source. Because each ingredient is anchored to its supplier, responsibility for a contaminated input is clear and verifiable." },
    ],
    lifecycleTitle: "The Feed Lifecycle",
    lifecycleSubtitle:
      "Follow one ingredient batch from supplier through the mill to a targeted contamination alert at the affected farms.",
    lifecycleSteps: [
      {
        label: "Ingredient Intake",
        description:
          "A raw ingredient batch is received. Provenance Notary anchors its supplier and source as the origin of everything mixed downstream.",
        icon: Package,
        logFilename: "cerulea_feedtrace.log",
        logLines: [
          { text: "[SYS] Initializing ingredient intake record...", time: "05:30:14", tone: "default" },
          { text: "[CMD] intakeIngredient { supplier: \"SUP_41\", item: \"SOYMEAL\" }", time: "05:30:14", tone: "primary" },
          { text: "[AUTH] Anchoring supplier source and lot...", time: "05:30:15", tone: "secondary" },
          { text: "[OK] Ingredient ING_7712 anchored at block 18120288.", time: "05:30:15", tone: "success" },
        ],
      },
      {
        label: "Feed Production",
        description:
          "The mill blends ingredients into finished feed batches. The Traceability Ledger links each ingredient batch to the feed batches it entered.",
        icon: Factory,
        logFilename: "cerulea_feedtrace.log",
        logLines: [
          { text: "[SYS] Recording feed production run...", time: "10:20:41", tone: "default" },
          { text: "[CMD] produceFeed(batch: \"FEED_5540\", inputs: [\"ING_7712\"])", time: "10:20:41", tone: "primary" },
          { text: "[SYS] Linking ingredient lots to feed batch...", time: "10:20:42", tone: "default" },
          { text: "[OK] Feed batch FEED_5540 linked to inputs.", time: "10:20:42", tone: "success" },
        ],
      },
      {
        label: "Farm Delivery",
        description:
          "Feed batches ship to farms. Each delivery is recorded, so the record maps exactly which farm received which batch.",
        icon: Truck,
        logFilename: "cerulea_feedtrace.log",
        logLines: [
          { text: "[SYS] Recording feed delivery for FEED_5540...", time: "14:15:22", tone: "default" },
          { text: "[CMD] deliverFeed(FEED_5540, farm: \"FARM_0x88\")", time: "14:15:22", tone: "primary" },
          { text: "[SYS] Mapping batch to receiving farm...", time: "14:15:23", tone: "default" },
          { text: "[OK] Delivery recorded, exposure map extended.", time: "14:15:23", tone: "success" },
        ],
      },
      {
        label: "Contamination Alert",
        description:
          "A contaminated ingredient is flagged. The Quality and Recall Ledger alerts only the farms that received the implicated batch, within minutes.",
        icon: Activity,
        logFilename: "cerulea_feedtrace.log",
        logLines: [
          { text: "[SYS] Flagging contaminated ingredient ING_7712...", time: "17:05:33", tone: "default" },
          { text: "[CMD] traceExposure(ING_7712)", time: "17:05:33", tone: "primary" },
          { text: "[SYS] Resolving affected feed batches and farms...", time: "17:05:33", tone: "error" },
          { text: "[OK] Alert sent to 4 affected farms only.", time: "17:05:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes feed traceability into modular contracts for ingredient identity, production linkage, delivery mapping, and contamination tracing, so a recall is precise, not regional.",
    layers: [
      {
        title: "Ingredient Registry",
        subtitle: "The Source Anchor",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Source Anchor",
          description:
            "Anchors each ingredient batch to its supplier and source through Provenance Notary. It fixes the origin so a contaminated input can always be traced back to exactly where it entered.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract IngredientRegistry {\n  struct Ingredient {\n    bytes32 supplier;\n    string item;\n    uint256 received;\n  }\n\n  mapping(bytes32 => Ingredient) public ingredients;\n\n  function intake(bytes32 id, bytes32 supplier, string calldata item) external {\n    ingredients[id] = Ingredient(supplier, item, block.timestamp);\n  }\n}",
        simAction: "Simulate Ingredient Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading supplier SUP_41...", tone: "default" },
          { text: "Recording ingredient item soymeal...", tone: "default" },
          { text: "Anchoring source lot...", tone: "default" },
          { text: "Writing ingredient to registry...", tone: "default" },
          { text: "[SUCCESS] Ingredient ING_7712 anchored.", tone: "success" },
        ],
      },
      {
        title: "Production Linker",
        subtitle: "The Blend Map",
        icon: Factory,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Blend Map",
          description:
            "Links each ingredient batch to the finished feed batches it entered through the Traceability Ledger. It records exactly what went into every feed batch, so downstream exposure can be computed.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function produceFeed(bytes32 feedId, bytes32[] calldata inputs) external onlyMill {\n    for (uint256 i = 0; i < inputs.length; i++) {\n      feedInputs[feedId].push(inputs[i]);\n      inputFeeds[inputs[i]].push(feedId);\n    }\n    emit FeedProduced(feedId, inputs.length);\n}",
        simAction: "Simulate Feed Production",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading production run FEED_5540...", tone: "default" },
          { text: "Linking ingredient ING_7712 to batch...", tone: "default" },
          { text: "Recording reverse input mapping...", tone: "default" },
          { text: "Sealing blend record...", tone: "default" },
          { text: "[SUCCESS] Feed batch linked to inputs.", tone: "success" },
        ],
      },
      {
        title: "Delivery Mapper",
        subtitle: "The Exposure Graph",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Exposure Graph",
          description:
            "Maps each feed batch to the farms that received it. It builds the precise exposure graph that turns a contamination event into a targeted alert instead of a regional recall.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function deliverFeed(bytes32 feedId, bytes32 farm) external onlyMill {\n    feedFarms[feedId].push(farm);\n    emit FeedDelivered(feedId, farm);\n}",
        simAction: "Simulate Farm Delivery",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading delivery for FEED_5540...", tone: "default" },
          { text: "Mapping batch to farm FARM_0x88...", tone: "default" },
          { text: "Extending exposure graph...", tone: "default" },
          { text: "Recording delivery on-chain...", tone: "default" },
          { text: "[SUCCESS] Delivery mapped to farm.", tone: "success" },
        ],
      },
      {
        title: "Contamination Tracer",
        subtitle: "The Targeted Alert",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Targeted Alert",
          description:
            "Resolves a flagged ingredient to every affected feed batch and farm through the Quality and Recall Ledger. It alerts only the farms actually exposed, in minutes, so safe feed keeps moving.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function traceExposure(bytes32 ingredientId) external view returns (bytes32[] memory farms) {\n    bytes32[] memory feeds = inputFeeds[ingredientId];\n    return collectFarms(feeds);\n}",
        simAction: "Simulate Contamination Trace",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Flagging contaminated ING_7712...", tone: "default" },
          { text: "Resolving affected feed batches...", tone: "default" },
          { text: "Collecting exposed farms...", tone: "default" },
          { text: "Dispatching targeted alerts...", tone: "default" },
          { text: "[SUCCESS] Only affected farms alerted.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Feed traceability is a horizontal capability. Here is how suppliers, mills, and farms put one linked record to work.",
    sectors: [
      { icon: Package, title: "Ingredient Suppliers", description: "Anchor each ingredient batch to its source, providing verifiable provenance and clear accountability when an input is implicated in a contamination event.", assetTypes: ["Ingredient Lots", "Source Records", "Supplier Attestations"] },
      { icon: Factory, title: "Feed Mills", description: "Link every ingredient to the feed batches and farms it reached, replacing broad recalls with precise ones that limit cost and disruption.", assetTypes: ["Feed Batches", "Blend Records", "Delivery Maps"] },
      { icon: Tractor, title: "Receiving Farms", description: "Receive a targeted alert within minutes when a specific batch is affected, rather than being caught in a wide regional recall of safe feed.", assetTypes: ["Delivery Records", "Exposure Alerts", "Batch Histories"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a mill is bridging an ERP or a supplier is recording intake from a plant terminal, Cerulea routes both into one feed traceability record.",
    tracks: [
      {
        title: "Track A: Mill System Bridging",
        description:
          "For mills on legacy ERP and production systems. Existing ingredient, production, and delivery data are translated into on-chain linked records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Production ERP", sublabel: "Mill Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Batch Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Feed Traceability Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Supplier Terminal Capture",
        description:
          "For ingredient suppliers recording intake directly. A plant terminal signs each ingredient batch and routes it to the shared traceability ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Supplier Terminal", sublabel: "Plant Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Batch Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Feed Record", icon: Boxes, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building feed traceability with ingredient anchoring, production linkage, delivery mapping, and targeted contamination tracing from scratch requires supply chain and blockchain engineers and long supplier integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Linkage & Alert Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects supply-chain traceability integration benchmarks. Wiring ingredient anchoring, production linkage, delivery mapping, and targeted contamination tracing for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your linkage and alert rules into pre-audited WebAssembly binaries and provisions the shared ledger and recall layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "dairy-cooperative-milk-procurement-and-quality-based-pricing",
    icon: Droplet,
    eyebrow: "Dairy Procurement Engine",
    headline1: "Test milk you can trust.",
    headline2: "Pay on verified quality.",
    heroDescription:
      "Anchor each quality test from the collection centre equipment through External Data Oracles. The Produce Grades and Certificates module records the result, and Escrow and Conditional Settlement calculates payment from the verified figure so pricing reflects the milk's actual quality.",
    heroCta: "Deploy Dairy Procurement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a testing process farmers cannot see into a verified quality figure that pays them automatically.",
    mechanics: [
      { title: "Equipment-Anchored Testing", description: "Read quality from the machine. External Data Oracles anchor each fat and quality test directly from the collection centre equipment, so results are not open to manual adjustment." },
      { title: "Verifiable Quality Records", description: "Fix the result on-chain. The Produce Grades and Certificates module records each test against the farmer and the collection, giving a figure both parties can verify." },
      { title: "Quality-Based Pricing", description: "Price on real quality. Payment is calculated from the verified fat content and quality parameters, so a farmer is paid for the milk they actually delivered." },
      { title: "Automatic Settlement", description: "Pay without dispute. Escrow and Conditional Settlement computes and releases payment from the verified test, removing manual calculation and delay." },
      { title: "Dispute Elimination", description: "End testing arguments. Because the test is anchored from the equipment and visible to the farmer, disputes over accuracy and payment fall away." },
      { title: "Cooperative Transparency", description: "Build member trust. Every farmer sees the test and the price calculation, replacing an opaque process with a transparent, verifiable one." },
    ],
    lifecycleTitle: "The Procurement Lifecycle",
    lifecycleSubtitle:
      "Follow one milk collection from an equipment-anchored quality test to an automatic, quality-based payment.",
    lifecycleSteps: [
      {
        label: "Milk Collection",
        description:
          "A farmer delivers milk to the collection centre. The collection is registered against the farmer as the basis for the quality test and payment.",
        icon: Droplet,
        logFilename: "cerulea_dairy.log",
        logLines: [
          { text: "[SYS] Registering milk collection...", time: "05:10:14", tone: "default" },
          { text: "[CMD] logCollection { farmer: \"COOP_331\", litres: 42 }", time: "05:10:14", tone: "primary" },
          { text: "[AUTH] Binding collection to farmer identity...", time: "05:10:15", tone: "secondary" },
          { text: "[OK] Collection COL_9910 recorded at block 18620455.", time: "05:10:15", tone: "success" },
        ],
      },
      {
        label: "Quality Test",
        description:
          "The collection centre equipment tests fat content and quality. External Data Oracles anchor the result directly from the machine.",
        icon: FlaskConical,
        logFilename: "cerulea_dairy.log",
        logLines: [
          { text: "[SYS] Anchoring quality test from equipment...", time: "05:12:41", tone: "default" },
          { text: "[CMD] anchorTest(COL_9910, fat: 4.2, snf: 8.6)", time: "05:12:41", tone: "primary" },
          { text: "[SYS] Verifying analyser signature...", time: "05:12:42", tone: "default" },
          { text: "[OK] Verified quality result recorded.", time: "05:12:42", tone: "success" },
        ],
      },
      {
        label: "Price Calculation",
        description:
          "The Produce Grades and Certificates module applies the pricing schedule to the verified quality figure, computing the payment.",
        icon: PieChart,
        logFilename: "cerulea_dairy.log",
        logLines: [
          { text: "[SYS] Applying quality-based pricing schedule...", time: "05:12:43", tone: "default" },
          { text: "[CMD] computePrice(COL_9910, rate: \"FAT_SNF\")", time: "05:12:43", tone: "primary" },
          { text: "[SYS] Price computed from verified fat and SNF...", time: "05:12:44", tone: "default" },
          { text: "[OK] Payment amount derived transparently.", time: "05:12:44", tone: "success" },
        ],
      },
      {
        label: "Automatic Payment",
        description:
          "Escrow and Conditional Settlement releases the computed payment to the farmer, with the test and calculation visible to them.",
        icon: Wallet,
        logFilename: "cerulea_dairy.log",
        logLines: [
          { text: "[SYS] Releasing payment for COL_9910...", time: "05:12:45", tone: "default" },
          { text: "[CMD] settle(COOP_331, amount: 1470)", time: "05:12:45", tone: "primary" },
          { text: "[AUTH] Transferring from cooperative escrow...", time: "05:12:46", tone: "secondary" },
          { text: "[OK] Farmer paid on verified quality.", time: "05:12:46", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes dairy procurement into modular contracts for collection identity, equipment-anchored testing, quality pricing, and automatic settlement, so payment reflects verified quality.",
    layers: [
      {
        title: "Collection Registry",
        subtitle: "The Delivery Anchor",
        icon: Droplet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Delivery Anchor",
          description:
            "Registers each milk collection against the farmer. It gives the quality test and payment one identity to attach to, so every result and price traces to a specific delivery.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract MilkProcurement {\n  struct Collection {\n    bytes32 farmer;\n    uint256 litres;\n    uint256 time;\n  }\n\n  mapping(bytes32 => Collection) public collections;\n\n  function logCollection(bytes32 id, bytes32 farmer, uint256 litres) external onlyCentre {\n    collections[id] = Collection(farmer, litres, block.timestamp);\n  }\n}",
        simAction: "Simulate Milk Collection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading farmer COOP_331...", tone: "default" },
          { text: "Recording delivered litres...", tone: "default" },
          { text: "Binding collection to farmer...", tone: "default" },
          { text: "Writing collection record...", tone: "default" },
          { text: "[SUCCESS] Collection COL_9910 recorded.", tone: "success" },
        ],
      },
      {
        title: "Test Oracle",
        subtitle: "The Equipment Feed",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Equipment Feed",
          description:
            "Anchors each quality test directly from the collection centre analyser through External Data Oracles. It removes manual adjustment from the result, giving a figure the farmer can trust.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function anchorTest(bytes32 id, uint256 fat, uint256 snf, bytes memory sig) external {\n    require(verifyAnalyser(sig), \"Invalid analyser\");\n    tests[id] = QualityTest(fat, snf, block.timestamp);\n    emit TestAnchored(id, fat, snf);\n}",
        simAction: "Simulate Quality Test",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading fat and SNF from analyser...", tone: "default" },
          { text: "Verifying equipment signature...", tone: "default" },
          { text: "Recording verified quality figures...", tone: "default" },
          { text: "Sealing test to collection...", tone: "default" },
          { text: "[SUCCESS] Quality result anchored.", tone: "success" },
        ],
      },
      {
        title: "Pricing Engine",
        subtitle: "The Quality Rate",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Quality Rate",
          description:
            "Applies the pricing schedule to the verified quality figure through the Produce Grades and Certificates module. It computes payment transparently, so the price reflects the milk actually delivered.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function computePrice(bytes32 id) external view returns (uint256 price) {\n    QualityTest memory t = tests[id];\n    price = collections[id].litres * baseRate(t.fat, t.snf);\n}",
        simAction: "Simulate Price Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified fat and SNF...", tone: "default" },
          { text: "Looking up quality rate...", tone: "default" },
          { text: "Multiplying by delivered litres...", tone: "default" },
          { text: "Deriving payment amount...", tone: "default" },
          { text: "[SUCCESS] Price computed transparently.", tone: "success" },
        ],
      },
      {
        title: "Payment Settlement",
        subtitle: "The Automatic Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Payout",
          description:
            "Releases the computed payment to the farmer through Escrow and Conditional Settlement. With the test and calculation visible, it settles without the disputes an opaque process invites.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(bytes32 id) external onlyCentre {\n    uint256 price = computePrice(id);\n    payable(walletOf[collections[id].farmer]).transfer(price);\n    emit MilkPaid(id, price);\n}",
        simAction: "Simulate Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading computed price for COL_9910...", tone: "default" },
          { text: "Debiting cooperative escrow...", tone: "default" },
          { text: "Transferring payment to farmer...", tone: "default" },
          { text: "Recording settlement on-chain...", tone: "default" },
          { text: "[SUCCESS] Farmer paid on verified quality.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Quality-based procurement is a horizontal capability. Here is how cooperatives, farmers, and processors put one verified figure to work.",
    sectors: [
      { icon: Users, title: "Dairy Cooperatives", description: "Pay members on equipment-anchored quality tests, ending disputes over accuracy and building trust with a transparent, verifiable procurement process.", assetTypes: ["Collection Records", "Quality Tests", "Member Payments"] },
      { icon: Tractor, title: "Dairy Farmers", description: "Get paid automatically for the quality actually delivered, seeing the test and calculation instead of accepting an unseen figure.", assetTypes: ["Verified Tests", "Price Records", "Fast Payouts"] },
      { icon: Factory, title: "Processors & Buyers", description: "Procure milk on verifiable quality parameters, gaining a trustworthy quality record that supports pricing, grading, and downstream claims.", assetTypes: ["Quality Grades", "Procurement Records", "Supplier Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a cooperative is bridging a procurement system or a collection centre analyser is reporting directly, Cerulea routes both into one procurement record.",
    tracks: [
      {
        title: "Track A: Cooperative System Bridging",
        description:
          "For cooperatives on legacy procurement systems. Existing collection and payment data are translated into on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Procurement System", sublabel: "Cooperative Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Test Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Dairy Procurement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Centre Analyser Capture",
        description:
          "For collection centre analysers reporting directly. A signed equipment feed anchors each quality test and triggers payment on the shared ledger.",
        connectorLabels: ["ANALYSER SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Milk Analyser", sublabel: "Collection Centre", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Test Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Quality Record", icon: Droplet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building equipment-anchored quality testing, verifiable quality records, quality-based pricing, and automatic settlement from scratch requires IoT and blockchain engineers and long centre rollout. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Quality & Pricing Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects procurement and IoT integration benchmarks. Building equipment-anchored testing, verifiable quality records, quality-based pricing, and automatic settlement for an average cooperative takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your quality and pricing rules into pre-audited WebAssembly binaries and provisions the oracle and escrow layers instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "poultry-farm-biosecurity-compliance-and-outbreak-containment",
    icon: Biotech,
    eyebrow: "Biosecurity Containment Engine",
    headline1: "Map the movement.",
    headline2: "Contain before it spreads.",
    heroDescription:
      "Hold verified biosecurity compliance records and farm movement data on a shared network. Compliance Attestations record each check, and the Traceability Ledger maps movement between farms so authorities read the containment zone the moment an outbreak hits.",
    heroCta: "Deploy Biosecurity Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn scattered biosecurity records into a live movement map that draws the containment zone instantly.",
    mechanics: [
      { title: "Verified Compliance Records", description: "Anchor every check. Compliance Attestations record each biosecurity check on the shared network, so a farm's compliance status is verifiable rather than a paper claim." },
      { title: "Farm Movement Mapping", description: "Track farm-to-farm links. The Traceability Ledger maps movement of birds, staff, and equipment between farms, so the links that spread disease are recorded before an emergency." },
      { title: "Instant Containment Zone", description: "Draw the zone at once. When an outbreak hits, authorities read which farms belong in the containment zone immediately, instead of assembling scattered records under pressure." },
      { title: "Movement Link Surfacing", description: "Expose the connections. The recorded movement links surface the moment they are needed, showing exactly which farms an infected site could have reached." },
      { title: "Compliance Gating", description: "Flag lapses early. A farm with a lapsed biosecurity check is flagged before an outbreak, so weak points are known in advance rather than discovered during a crisis." },
      { title: "Faster Than the Disease", description: "Move ahead of spread. Because compliance and movement are live, containment can be drawn and deployed faster than the pathogen travels between farms." },
    ],
    lifecycleTitle: "The Biosecurity Lifecycle",
    lifecycleSubtitle:
      "Follow one farm from a biosecurity check through recorded movement to an outbreak that draws a containment zone in seconds.",
    lifecycleSteps: [
      {
        label: "Compliance Check",
        description:
          "A farm passes a biosecurity check. Compliance Attestations record the verified check on the shared network as part of the farm's live status.",
        icon: FileCheck,
        logFilename: "cerulea_biosecurity.log",
        logLines: [
          { text: "[SYS] Recording biosecurity compliance check...", time: "06:10:14", tone: "default" },
          { text: "[CMD] attestCheck { farm: \"POUL_331\", result: \"PASS\" }", time: "06:10:14", tone: "primary" },
          { text: "[AUTH] Signing verified check to network...", time: "06:10:15", tone: "secondary" },
          { text: "[OK] Compliance recorded at block 19120288.", time: "06:10:15", tone: "success" },
        ],
      },
      {
        label: "Movement Logging",
        description:
          "Bird, staff, and equipment movement between farms is logged. The Traceability Ledger maps each link before any emergency arises.",
        icon: Truck,
        logFilename: "cerulea_biosecurity.log",
        logLines: [
          { text: "[SYS] Logging farm-to-farm movement...", time: "10:20:41", tone: "default" },
          { text: "[CMD] recordMovement(POUL_331, to: \"POUL_408\")", time: "10:20:41", tone: "primary" },
          { text: "[SYS] Mapping movement link between farms...", time: "10:20:42", tone: "default" },
          { text: "[OK] Movement link recorded on ledger.", time: "10:20:42", tone: "success" },
        ],
      },
      {
        label: "Outbreak Detection",
        description:
          "An outbreak is confirmed at a farm. The network resolves its recorded movement links to identify every connected farm at once.",
        icon: Biotech,
        logFilename: "cerulea_biosecurity.log",
        logLines: [
          { text: "[SYS] Outbreak confirmed at POUL_408...", time: "14:15:22", tone: "default" },
          { text: "[CMD] resolveLinks(POUL_408, depth: 2)", time: "14:15:22", tone: "primary" },
          { text: "[SYS] Tracing movement links across network...", time: "14:15:23", tone: "error" },
          { text: "[OK] 11 connected farms identified instantly.", time: "14:15:23", tone: "success" },
        ],
      },
      {
        label: "Containment Zone",
        description:
          "Authorities read the containment zone and each farm's compliance status, deploying a targeted response faster than the disease spreads.",
        icon: Shield,
        logFilename: "cerulea_biosecurity.log",
        logLines: [
          { text: "[SYS] Drawing containment zone for outbreak...", time: "14:15:24", tone: "default" },
          { text: "[CMD] buildZone(POUL_408)", time: "14:15:24", tone: "primary" },
          { text: "[AUTH] Attaching compliance status per farm...", time: "14:15:25", tone: "secondary" },
          { text: "[OK] Containment zone deployed in seconds.", time: "14:15:25", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes biosecurity into modular contracts for farm identity, compliance attestation, movement mapping, and containment resolution, so a zone is drawn the instant an outbreak hits.",
    layers: [
      {
        title: "Farm Registry",
        subtitle: "The Site Identity",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Site Identity",
          description:
            "Anchors each poultry farm on the shared network. It gives compliance checks and movement links one identity to attach to, so a farm's status and connections are always resolvable.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract BiosecurityRegistry {\n  struct Farm {\n    bytes32 region;\n    bool compliant;\n    uint256 lastCheck;\n  }\n\n  mapping(bytes32 => Farm) public farms;\n\n  function registerFarm(bytes32 id, bytes32 region) external onlyAuthority {\n    farms[id] = Farm(region, false, 0);\n  }\n}",
        simAction: "Simulate Farm Registration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading farm region for POUL_331...", tone: "default" },
          { text: "Anchoring farm identity...", tone: "default" },
          { text: "Initialising compliance status...", tone: "default" },
          { text: "Writing farm to registry...", tone: "default" },
          { text: "[SUCCESS] Farm POUL_331 registered.", tone: "success" },
        ],
      },
      {
        title: "Compliance Attestor",
        subtitle: "The Check Record",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Check Record",
          description:
            "Records each biosecurity check through Compliance Attestations. It makes a farm's compliance status verifiable and live, so lapses are flagged before an outbreak rather than found during one.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function attestCheck(bytes32 farmId, bool pass) external onlyInspector {\n    farms[farmId].compliant = pass;\n    farms[farmId].lastCheck = block.timestamp;\n    emit CheckAttested(farmId, pass);\n}",
        simAction: "Simulate Compliance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading inspection result for POUL_331...", tone: "default" },
          { text: "Confirming inspector authorisation...", tone: "default" },
          { text: "Updating farm compliance status...", tone: "default" },
          { text: "Recording check timestamp...", tone: "default" },
          { text: "[SUCCESS] Biosecurity check recorded.", tone: "success" },
        ],
      },
      {
        title: "Movement Mapper",
        subtitle: "The Link Graph",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Link Graph",
          description:
            "Maps movement of birds, staff, and equipment between farms through the Traceability Ledger. It records the farm-to-farm links that spread disease, ready to resolve the moment an outbreak hits.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function recordMovement(bytes32 from, bytes32 to) external onlyOperator {\n    links[from].push(to);\n    links[to].push(from);\n    emit MovementRecorded(from, to);\n}",
        simAction: "Simulate Movement Logging",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading movement from POUL_331...", tone: "default" },
          { text: "Recording link to POUL_408...", tone: "default" },
          { text: "Adding reverse link...", tone: "default" },
          { text: "Sealing movement to link graph...", tone: "default" },
          { text: "[SUCCESS] Movement link recorded.", tone: "success" },
        ],
      },
      {
        title: "Containment Resolver",
        subtitle: "The Zone Builder",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Zone Builder",
          description:
            "Resolves an outbreak farm's movement links to build the containment zone with each farm's compliance status. It lets authorities deploy a targeted response faster than the disease spreads.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveLinks(bytes32 farmId, uint8 depth) external view returns (bytes32[] memory zone) {\n    return traverse(farmId, depth);\n}",
        simAction: "Simulate Containment Zone",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Outbreak confirmed at POUL_408...", tone: "default" },
          { text: "Traversing movement links...", tone: "default" },
          { text: "Collecting 11 connected farms...", tone: "default" },
          { text: "Attaching compliance status per farm...", tone: "default" },
          { text: "[SUCCESS] Containment zone deployed in seconds.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Biosecurity containment is a horizontal capability. Here is how farms, integrators, and authorities put one live network to work.",
    sectors: [
      { icon: Home, title: "Poultry Farms", description: "Hold verifiable biosecurity records and movement logs, demonstrating compliance and knowing weak points before an outbreak rather than during one.", assetTypes: ["Compliance Records", "Movement Logs", "Farm Attestations"] },
      { icon: Factory, title: "Integrators & Processors", description: "Track movement across a network of contract farms, so an outbreak at one site resolves to every connected farm at once and supply disruption is contained.", assetTypes: ["Network Maps", "Farm Links", "Compliance Status"] },
      { icon: Landmark, title: "Disease Authorities", description: "Read a containment zone the instant an outbreak is confirmed, deploying a targeted response faster than the pathogen can travel.", assetTypes: ["Containment Zones", "Outbreak Records", "Response Deployments"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether an integrator is bridging a farm management system or a site is logging movement from a terminal, Cerulea routes both into one biosecurity network.",
    tracks: [
      {
        title: "Track A: Integrator System Bridging",
        description:
          "For integrators on legacy farm management systems. Existing compliance and movement data are translated into on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Farm Management", sublabel: "Integrator Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Biosecurity Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Farm Terminal Capture",
        description:
          "For farms logging checks and movement directly. A site terminal signs each record and routes it to the shared biosecurity network.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Farm Terminal", sublabel: "Site Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Record Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Movement Map", icon: Biotech, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a biosecurity network with compliance attestation, farm movement mapping, and instant containment resolution from scratch requires health and blockchain engineers and long farm onboarding. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Compliance & Movement Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects animal-health network integration benchmarks. Building compliance attestation, movement mapping, and instant containment resolution for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your compliance and movement rules into pre-audited WebAssembly binaries and provisions the shared ledger and resolution layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "ingredient-traceability-and-allergen-management-across-suppliers",
    icon: FlaskConical,
    eyebrow: "Allergen Traceability Engine",
    headline1: "Link lot to batch.",
    headline2: "Recall in hours.",
    heroDescription:
      "Link every ingredient lot to every finished batch on a private network. The Traceability Ledger and Quality and Recall Ledger carry the lot-to-batch chain, and Notifications alert retail customers on a recall so an allergen incident contains in hours.",
    heroCta: "Deploy Allergen Traceability",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a blind spot between supplier lots and finished batches into a precise, recall-ready chain.",
    mechanics: [
      { title: "Lot-to-Batch Chain", description: "Connect inputs to outputs. The Traceability Ledger links every supplier ingredient lot to each finished batch it entered, so a manufacturer knows exactly which batches hold a given lot." },
      { title: "Allergen Tagging", description: "Track allergens through the chain. Each ingredient lot carries its allergen profile, so the record shows which finished batches contain a specific allergen source." },
      { title: "Supplier Lot Anchoring", description: "Fix each lot's origin. Provenance-anchored supplier lots let a manufacturer trace an allergen or mislabelling issue back to the exact incoming lot." },
      { title: "Precise Recall Scope", description: "Narrow the recall. The Quality and Recall Ledger identifies only the finished batches affected by a lot, replacing whole-product-line recalls with targeted ones." },
      { title: "Retail Customer Alerts", description: "Notify the chain fast. Notifications alert retail customers holding affected batches on a recall, so the response moves in hours rather than days." },
      { title: "Regulatory Speed", description: "Meet the clock. Because the lot-to-batch chain is precise, allergen incidents contain quickly and regulatory response compresses from days to hours." },
    ],
    lifecycleTitle: "The Allergen Lifecycle",
    lifecycleSubtitle:
      "Follow one supplier lot from intake through finished batches to a targeted recall alert at retail customers.",
    lifecycleSteps: [
      {
        label: "Lot Intake",
        description:
          "A supplier ingredient lot is received with its allergen profile. The lot is anchored on the private network as the origin of downstream batches.",
        icon: Package,
        logFilename: "cerulea_allergen.log",
        logLines: [
          { text: "[SYS] Initializing ingredient lot intake...", time: "05:40:14", tone: "default" },
          { text: "[CMD] intakeLot { supplier: \"SUP_22\", allergen: \"PEANUT\" }", time: "05:40:14", tone: "primary" },
          { text: "[AUTH] Anchoring lot source and allergen profile...", time: "05:40:15", tone: "secondary" },
          { text: "[OK] Lot LOT_7712 anchored at block 19620455.", time: "05:40:15", tone: "success" },
        ],
      },
      {
        label: "Batch Production",
        description:
          "Finished batches are produced from supplier lots. The Traceability Ledger links each lot to every finished batch it entered.",
        icon: Factory,
        logFilename: "cerulea_allergen.log",
        logLines: [
          { text: "[SYS] Recording finished batch production...", time: "10:15:41", tone: "default" },
          { text: "[CMD] produceBatch(batch: \"FIN_5540\", lots: [\"LOT_7712\"])", time: "10:15:41", tone: "primary" },
          { text: "[SYS] Linking lot to finished batch...", time: "10:15:42", tone: "default" },
          { text: "[OK] Batch FIN_5540 linked to lot chain.", time: "10:15:42", tone: "success" },
        ],
      },
      {
        label: "Retail Distribution",
        description:
          "Finished batches ship to retail customers. Each shipment is recorded, so the chain maps which customer holds which batch.",
        icon: Truck,
        logFilename: "cerulea_allergen.log",
        logLines: [
          { text: "[SYS] Recording retail shipment for FIN_5540...", time: "14:40:22", tone: "default" },
          { text: "[CMD] shipBatch(FIN_5540, customer: \"RETAIL_0x9\")", time: "14:40:22", tone: "primary" },
          { text: "[SYS] Mapping batch to retail customer...", time: "14:40:23", tone: "default" },
          { text: "[OK] Shipment recorded, chain extended.", time: "14:40:23", tone: "success" },
        ],
      },
      {
        label: "Allergen Recall",
        description:
          "A mislabelled allergen lot is flagged. The record identifies only the affected batches and alerts the retail customers holding them.",
        icon: Activity,
        logFilename: "cerulea_allergen.log",
        logLines: [
          { text: "[SYS] Flagging allergen issue on LOT_7712...", time: "17:05:33", tone: "default" },
          { text: "[CMD] traceRecall(LOT_7712)", time: "17:05:33", tone: "primary" },
          { text: "[SYS] Resolving affected batches and customers...", time: "17:05:33", tone: "error" },
          { text: "[OK] Alert sent to affected batches only.", time: "17:05:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes allergen management into modular contracts for lot identity, batch linkage, retail mapping, and recall tracing, so an incident contains in hours, not days.",
    layers: [
      {
        title: "Lot Registry",
        subtitle: "The Allergen Anchor",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Allergen Anchor",
          description:
            "Anchors each supplier lot with its source and allergen profile. It fixes the origin so a manufacturer can trace an allergen or mislabelling issue back to the exact incoming lot.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract LotRegistry {\n  struct Lot {\n    bytes32 supplier;\n    bytes32 allergen;\n    uint256 received;\n  }\n\n  mapping(bytes32 => Lot) public lots;\n\n  function intakeLot(bytes32 id, bytes32 supplier, bytes32 allergen) external {\n    lots[id] = Lot(supplier, allergen, block.timestamp);\n  }\n}",
        simAction: "Simulate Lot Intake",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading supplier SUP_22...", tone: "default" },
          { text: "Recording peanut allergen profile...", tone: "default" },
          { text: "Anchoring lot source...", tone: "default" },
          { text: "Writing lot to registry...", tone: "default" },
          { text: "[SUCCESS] Lot LOT_7712 anchored.", tone: "success" },
        ],
      },
      {
        title: "Batch Linker",
        subtitle: "The Production Chain",
        icon: Factory,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Production Chain",
          description:
            "Links each supplier lot to the finished batches it entered through the Traceability Ledger. It records exactly which batches hold a given lot, so exposure can be computed precisely.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function produceBatch(bytes32 batchId, bytes32[] calldata lots) external onlyPlant {\n    for (uint256 i = 0; i < lots.length; i++) {\n      lotBatches[lots[i]].push(batchId);\n    }\n    emit BatchProduced(batchId, lots.length);\n}",
        simAction: "Simulate Batch Production",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading production run FIN_5540...", tone: "default" },
          { text: "Linking lot LOT_7712 to batch...", tone: "default" },
          { text: "Recording lot-to-batch mapping...", tone: "default" },
          { text: "Sealing production chain...", tone: "default" },
          { text: "[SUCCESS] Batch linked to lot chain.", tone: "success" },
        ],
      },
      {
        title: "Retail Mapper",
        subtitle: "The Customer Graph",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Customer Graph",
          description:
            "Maps each finished batch to the retail customers that received it. It builds the graph that turns a recall into a targeted alert to only the customers holding affected batches.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function shipBatch(bytes32 batchId, bytes32 customer) external onlyPlant {\n    batchCustomers[batchId].push(customer);\n    emit BatchShipped(batchId, customer);\n}",
        simAction: "Simulate Retail Shipment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading shipment for FIN_5540...", tone: "default" },
          { text: "Mapping batch to RETAIL_0x9...", tone: "default" },
          { text: "Extending customer graph...", tone: "default" },
          { text: "Recording shipment on-chain...", tone: "default" },
          { text: "[SUCCESS] Batch mapped to customer.", tone: "success" },
        ],
      },
      {
        title: "Recall Tracer",
        subtitle: "The Targeted Alert",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Targeted Alert",
          description:
            "Resolves a flagged lot to every affected batch and customer through the Quality and Recall Ledger, and alerts through Notifications. It narrows a recall to specific batches and contains an incident in hours.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function traceRecall(bytes32 lotId) external view returns (bytes32[] memory customers) {\n    bytes32[] memory batches = lotBatches[lotId];\n    return collectCustomers(batches);\n}",
        simAction: "Simulate Allergen Recall",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Flagging allergen issue on LOT_7712...", tone: "default" },
          { text: "Resolving affected finished batches...", tone: "default" },
          { text: "Collecting retail customers...", tone: "default" },
          { text: "Dispatching targeted recall alerts...", tone: "default" },
          { text: "[SUCCESS] Only affected batches recalled.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Allergen traceability is a horizontal capability. Here is how manufacturers, retailers, and regulators put one lot-to-batch chain to work.",
    sectors: [
      { icon: Factory, title: "Food Manufacturers", description: "Link every ingredient lot to the finished batches it entered, narrowing a recall to affected batches and containing allergen incidents quickly.", assetTypes: ["Lot-Batch Chains", "Allergen Profiles", "Recall Scopes"] },
      { icon: Building2, title: "Retailers", description: "Receive targeted alerts for only the affected batches on a recall, acting in hours instead of pulling whole product lines.", assetTypes: ["Batch Records", "Recall Alerts", "Shipment Maps"] },
      { icon: Landmark, title: "Food Safety Regulators", description: "See a precise lot-to-batch chain, compressing allergen incident response from days to hours and confirming containment scope.", assetTypes: ["Traceback Trails", "Incident Records", "Compliance Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a manufacturer is bridging an ERP or a plant is recording production from a terminal, Cerulea routes both into one allergen traceability chain.",
    tracks: [
      {
        title: "Track A: Manufacturer System Bridging",
        description:
          "For manufacturers on legacy ERP and MES systems. Existing lot, batch, and shipment data are translated into on-chain linked records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "ERP / MES", sublabel: "Manufacturer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Lot Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Allergen Traceability Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Plant Terminal Capture",
        description:
          "For plants recording production directly. A line terminal signs each lot-to-batch link and routes it to the shared traceability chain.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Plant Terminal", sublabel: "Line Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Batch Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Lot-Batch Record", icon: FlaskConical, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building allergen traceability with lot anchoring, batch linkage, retail mapping, and targeted recall tracing from scratch requires supply chain and blockchain engineers and long plant integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Linkage & Recall Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects food-safety traceability integration benchmarks. Wiring lot anchoring, batch linkage, retail mapping, and targeted recall tracing for an average manufacturer takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your linkage and recall rules into pre-audited WebAssembly binaries and provisions the shared ledger and notification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "halal-and-kosher-certification-chain-of-custody",
    icon: ShieldCheck,
    eyebrow: "Faith Certification Engine",
    headline1: "Certify every step.",
    headline2: "Verify the whole chain.",
    heroDescription:
      "Track certification status through each ingredient and processing step on a shared network. The Traceability Ledger and Provenance Notary hold the chain, and Compliance Attestations record each certifier approval so the whole chain is verified without auditing every supplier each cycle.",
    heroCta: "Deploy Certification Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn heavy per-cycle manual audits into a chain of custody where status travels with the product.",
    mechanics: [
      { title: "Step-Level Certification", description: "Certify each stage. The Traceability Ledger tracks Halal or Kosher status through every ingredient and processing step, so compliance is proven at each stage rather than assumed at the end." },
      { title: "Certifier Approvals", description: "Anchor each approval. Compliance Attestations record each certifier's approval on-chain, building a verifiable chain of who certified what and when." },
      { title: "Ingredient Status Binding", description: "Bind status to inputs. Provenance Notary binds certification status to each ingredient lot, so a non-compliant input is caught before it enters a certified product." },
      { title: "Chain Verification", description: "Verify without full re-audit. A certification body verifies the whole chain from the record instead of auditing every supplier separately each cycle." },
      { title: "Portable Proof", description: "Let status follow the product. The proof of compliance travels with the product through the chain, so a downstream party reads status without contacting each upstream certifier." },
      { title: "Shorter Cycles", description: "Compress certification time. Because status is continuous and verifiable, certification cycles shorten and the manual audit burden each period falls." },
    ],
    lifecycleTitle: "The Certification Lifecycle",
    lifecycleSubtitle:
      "Follow one product from ingredient certification through processing approvals to a body verifying the whole chain.",
    lifecycleSteps: [
      {
        label: "Ingredient Certification",
        description:
          "An ingredient lot is certified compliant. Provenance Notary binds the Halal or Kosher status to the lot as the start of the chain of custody.",
        icon: FlaskConical,
        logFilename: "cerulea_faithcert.log",
        logLines: [
          { text: "[SYS] Certifying ingredient compliance status...", time: "06:10:14", tone: "default" },
          { text: "[CMD] certifyIngredient { lot: \"ING_331\", status: \"HALAL\" }", time: "06:10:14", tone: "primary" },
          { text: "[AUTH] Binding status to ingredient lot...", time: "06:10:15", tone: "secondary" },
          { text: "[OK] Ingredient ING_331 certified at block 20120288.", time: "06:10:15", tone: "success" },
        ],
      },
      {
        label: "Processing Approval",
        description:
          "Each processing step is approved by a certifier. Compliance Attestations record the approval, extending the chain of custody.",
        icon: Factory,
        logFilename: "cerulea_faithcert.log",
        logLines: [
          { text: "[SYS] Recording processing step approval...", time: "10:20:41", tone: "default" },
          { text: "[CMD] attestStep(product: \"PROD_9910\", step: \"SLAUGHTER\")", time: "10:20:41", tone: "primary" },
          { text: "[SYS] Certifier signing approval to chain...", time: "10:20:42", tone: "default" },
          { text: "[OK] Step approved, chain of custody extended.", time: "10:20:42", tone: "success" },
        ],
      },
      {
        label: "Status Propagation",
        description:
          "As ingredients combine into the product, the record propagates certification status, flagging any non-compliant input before it enters.",
        icon: Workflow,
        logFilename: "cerulea_faithcert.log",
        logLines: [
          { text: "[SYS] Propagating status to PROD_9910...", time: "14:15:22", tone: "default" },
          { text: "[CMD] propagateStatus(PROD_9910)", time: "14:15:22", tone: "primary" },
          { text: "[SYS] Checking all inputs certified compliant...", time: "14:15:23", tone: "default" },
          { text: "[OK] Product status HALAL, all steps compliant.", time: "14:15:23", tone: "success" },
        ],
      },
      {
        label: "Chain Verification",
        description:
          "A certification body verifies the whole chain from the record, confirming compliance without auditing every supplier separately.",
        icon: Search,
        logFilename: "cerulea_faithcert.log",
        logLines: [
          { text: "[SYS] Certification body verifying PROD_9910...", time: "17:05:33", tone: "default" },
          { text: "[CMD] verifyChain(PROD_9910)", time: "17:05:33", tone: "primary" },
          { text: "[SYS] Traversing ingredient and step approvals...", time: "17:05:33", tone: "default" },
          { text: "[OK] Whole chain verified, cycle shortened.", time: "17:05:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes faith certification into modular contracts for ingredient status, step approvals, status propagation, and chain verification, so status travels with the product.",
    layers: [
      {
        title: "Ingredient Certifier",
        subtitle: "The Status Anchor",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Status Anchor",
          description:
            "Binds Halal or Kosher status to each ingredient lot through Provenance Notary. It starts the chain of custody, so a non-compliant input is caught before it enters a certified product.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract FaithCert {\n  struct Ingredient {\n    bytes32 status;\n    address certifier;\n    bool compliant;\n  }\n\n  mapping(bytes32 => Ingredient) public ingredients;\n\n  function certifyIngredient(bytes32 lot, bytes32 status) external onlyCertifier {\n    ingredients[lot] = Ingredient(status, msg.sender, true);\n  }\n}",
        simAction: "Simulate Ingredient Certification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading ingredient lot ING_331...", tone: "default" },
          { text: "Confirming certifier authorisation...", tone: "default" },
          { text: "Binding Halal status to lot...", tone: "default" },
          { text: "Writing certification to chain...", tone: "default" },
          { text: "[SUCCESS] Ingredient ING_331 certified.", tone: "success" },
        ],
      },
      {
        title: "Step Attestor",
        subtitle: "The Approval Record",
        icon: Factory,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Approval Record",
          description:
            "Records each processing step approval through Compliance Attestations. It builds a verifiable chain of who certified which step, extending custody through the whole production process.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function attestStep(bytes32 productId, bytes32 step) external onlyCertifier {\n    steps[productId].push(Approval(step, msg.sender, block.timestamp));\n    emit StepAttested(productId, step, msg.sender);\n}",
        simAction: "Simulate Step Approval",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading processing step for PROD_9910...", tone: "default" },
          { text: "Confirming certifier signature...", tone: "default" },
          { text: "Appending approval to chain...", tone: "default" },
          { text: "Extending chain of custody...", tone: "default" },
          { text: "[SUCCESS] Step approval recorded.", tone: "success" },
        ],
      },
      {
        title: "Status Propagator",
        subtitle: "The Compliance Gate",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Gate",
          description:
            "Propagates certification status as ingredients combine into the product. It flags any non-compliant input before it enters, so the finished product's status reflects every step.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function propagateStatus(bytes32 productId, bytes32[] calldata inputs) external {\n    for (uint256 i = 0; i < inputs.length; i++) {\n      require(ingredients[inputs[i]].compliant, \"Non-compliant input\");\n    }\n    productStatus[productId] = true;\n    emit StatusPropagated(productId);\n}",
        simAction: "Simulate Status Propagation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading inputs for PROD_9910...", tone: "default" },
          { text: "Checking each input certified...", tone: "default" },
          { text: "Confirming all steps compliant...", tone: "default" },
          { text: "Setting product status...", tone: "default" },
          { text: "[SUCCESS] Product status propagated.", tone: "success" },
        ],
      },
      {
        title: "Chain Verifier",
        subtitle: "The Whole-Chain Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Whole-Chain Window",
          description:
            "Resolves a product to its full ingredient and step certification chain. It lets a certification body verify the whole chain from the record instead of re-auditing every supplier each cycle.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyChain(bytes32 productId) external view returns (bool compliant) {\n    return productStatus[productId] && steps[productId].length >= requiredSteps;\n}",
        simAction: "Simulate Chain Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Certification body querying PROD_9910...", tone: "default" },
          { text: "Traversing ingredient certifications...", tone: "default" },
          { text: "Checking all step approvals...", tone: "default" },
          { text: "Confirming chain complete...", tone: "default" },
          { text: "[SUCCESS] Whole chain verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Faith certification custody is a horizontal capability. Here is how certifiers, manufacturers, and retailers put one chain to work.",
    sectors: [
      { icon: ShieldCheck, title: "Certification Bodies", description: "Verify the whole chain of custody from the record, shortening certification cycles and cutting the manual audit burden of re-checking every supplier each period.", assetTypes: ["Step Approvals", "Certification Chains", "Compliance Records"] },
      { icon: Factory, title: "Food Manufacturers", description: "Carry certification status through every ingredient and processing step, so a non-compliant input is caught before it enters a certified product.", assetTypes: ["Ingredient Status", "Processing Approvals", "Product Certifications"] },
      { icon: Building2, title: "Retailers & Exporters", description: "Read portable proof of compliance that travels with the product, confirming Halal or Kosher status without contacting each upstream certifier.", assetTypes: ["Portable Proofs", "Status Records", "Market Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a certifier is bridging an audit system or a plant is recording approvals from a terminal, Cerulea routes both into one certification chain.",
    tracks: [
      {
        title: "Track A: Certifier System Bridging",
        description:
          "For certification bodies on legacy audit systems. Existing certification and approval data are translated into on-chain custody records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Audit System", sublabel: "Certifier Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Approval Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Certification Custody Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Plant Approval Capture",
        description:
          "For plants recording approvals directly. A line terminal signs each step approval and routes it to the shared certification chain.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Plant Terminal", sublabel: "Processing Devices", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Approval Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Custody Record", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a certification chain of custody with ingredient status, step approvals, status propagation, and chain verification from scratch requires supply chain and blockchain engineers and long certifier onboarding. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Certification & Approval Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects certification traceability integration benchmarks. Building ingredient status, step approvals, status propagation, and chain verification for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your certification and approval rules into pre-audited WebAssembly binaries and provisions the shared ledger and verification layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "packaging-material-recyclability-and-epr-compliance-tracking",
    icon: Recycling,
    eyebrow: "EPR Compliance Engine",
    headline1: "Anchor material data.",
    headline2: "Report from the source.",
    heroDescription:
      "Anchor packaging material data from suppliers as verified records on a shared network. Provenance Notary holds each material record, and Compliance Attestations assemble the reporting evidence so a manufacturer generates Extended Producer Responsibility reports directly from the underlying data.",
    heroCta: "Deploy EPR Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn labour-intensive packaging data collection into verified records that generate EPR reports directly.",
    mechanics: [
      { title: "Supplier Material Anchoring", description: "Capture data at the source. Provenance Notary anchors each supplier's packaging material data as a verified record, so recyclability figures come from the supplier rather than an estimate." },
      { title: "Recyclability Records", description: "Fix each material's profile. Every material record carries its recyclability and composition, so a manufacturer knows the recyclable content of its packaging across all lines." },
      { title: "Automated Evidence Assembly", description: "Assemble the report set. Compliance Attestations gather the underlying material records into the evidence an Extended Producer Responsibility filing requires." },
      { title: "Direct EPR Reporting", description: "Report from the data. A manufacturer generates EPR reports directly from the anchored records, ending manual collection across product lines and suppliers each period." },
      { title: "Verified Claims", description: "Ground recyclability claims. Because material data is anchored and verifiable, recyclability claims rest on records rather than assertions." },
      { title: "Target Proof", description: "Prove recycling targets. The record set demonstrates recycling targets to regulators from the underlying data, replacing compiled spreadsheets with verifiable evidence." },
    ],
    lifecycleTitle: "The Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow packaging material from a supplier record through evidence assembly to an EPR report generated from the data.",
    lifecycleSteps: [
      {
        label: "Material Submission",
        description:
          "A supplier submits packaging material data. Provenance Notary anchors the recyclability and composition as a verified record on the shared network.",
        icon: Package,
        logFilename: "cerulea_epr.log",
        logLines: [
          { text: "[SYS] Anchoring supplier packaging material data...", time: "06:10:14", tone: "default" },
          { text: "[CMD] submitMaterial { supplier: \"PKG_22\", type: \"PET\" }", time: "06:10:14", tone: "primary" },
          { text: "[AUTH] Recording recyclability and composition...", time: "06:10:15", tone: "secondary" },
          { text: "[OK] Material MAT_7712 anchored at block 20620455.", time: "06:10:15", tone: "success" },
        ],
      },
      {
        label: "Product Linkage",
        description:
          "Each material is linked to the products and lines that use it, so a manufacturer knows the recyclable content across its portfolio.",
        icon: Workflow,
        logFilename: "cerulea_epr.log",
        logLines: [
          { text: "[SYS] Linking material to product lines...", time: "10:20:41", tone: "default" },
          { text: "[CMD] linkMaterial(MAT_7712, line: \"LINE_09\")", time: "10:20:41", tone: "primary" },
          { text: "[SYS] Mapping recyclable content to line...", time: "10:20:42", tone: "default" },
          { text: "[OK] Material linked across portfolio.", time: "10:20:42", tone: "success" },
        ],
      },
      {
        label: "Evidence Assembly",
        description:
          "Compliance Attestations gather the anchored material records into the evidence set an EPR filing requires for the period.",
        icon: FileCheck,
        logFilename: "cerulea_epr.log",
        logLines: [
          { text: "[SYS] Assembling EPR evidence set...", time: "14:15:22", tone: "default" },
          { text: "[CMD] assembleEvidence(period: \"Q3_2026\")", time: "14:15:22", tone: "primary" },
          { text: "[AUTH] Compiling material and recyclability records...", time: "14:15:23", tone: "secondary" },
          { text: "[OK] Evidence set assembled from source data.", time: "14:15:23", tone: "success" },
        ],
      },
      {
        label: "EPR Report",
        description:
          "The manufacturer generates the EPR report directly from the anchored data, ending manual collection each period.",
        icon: PieChart,
        logFilename: "cerulea_epr.log",
        logLines: [
          { text: "[SYS] Generating EPR compliance report...", time: "17:05:33", tone: "default" },
          { text: "[CMD] generateReport(Q3_2026)", time: "17:05:33", tone: "primary" },
          { text: "[SYS] Deriving recyclability totals from records...", time: "17:05:34", tone: "default" },
          { text: "[OK] EPR report generated from source data.", time: "17:05:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes EPR tracking into modular contracts for material identity, product linkage, evidence assembly, and report generation, so reports come directly from verified data.",
    layers: [
      {
        title: "Material Registry",
        subtitle: "The Source Record",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Source Record",
          description:
            "Anchors each supplier's packaging material data through Provenance Notary. It captures recyclability and composition at the source, so reporting rests on verified records rather than estimates.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract EPRRegistry {\n  struct Material {\n    bytes32 supplier;\n    string materialType;\n    uint8 recyclablePct;\n  }\n\n  mapping(bytes32 => Material) public materials;\n\n  function submitMaterial(bytes32 id, bytes32 supplier, string calldata t, uint8 pct) external {\n    materials[id] = Material(supplier, t, pct);\n  }\n}",
        simAction: "Simulate Material Submission",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading supplier PKG_22...", tone: "default" },
          { text: "Recording PET material type...", tone: "default" },
          { text: "Anchoring recyclable percentage...", tone: "default" },
          { text: "Writing material to registry...", tone: "default" },
          { text: "[SUCCESS] Material MAT_7712 anchored.", tone: "success" },
        ],
      },
      {
        title: "Product Linker",
        subtitle: "The Portfolio Map",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Portfolio Map",
          description:
            "Links each material to the products and lines that use it. It gives a manufacturer a live view of recyclable content across its portfolio, so reporting reflects the real product mix.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function linkMaterial(bytes32 materialId, bytes32 line) external onlyManufacturer {\n    lineMaterials[line].push(materialId);\n    emit MaterialLinked(materialId, line);\n}",
        simAction: "Simulate Product Linkage",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading material MAT_7712...", tone: "default" },
          { text: "Linking to product line LINE_09...", tone: "default" },
          { text: "Mapping recyclable content...", tone: "default" },
          { text: "Extending portfolio map...", tone: "default" },
          { text: "[SUCCESS] Material linked to line.", tone: "success" },
        ],
      },
      {
        title: "Evidence Assembler",
        subtitle: "The Report Set",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Report Set",
          description:
            "Gathers anchored material records into the evidence an EPR filing requires through Compliance Attestations. It replaces manual collection across suppliers and lines with an automated set.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function assembleEvidence(bytes32 period) external view returns (bytes32[] memory records) {\n    return periodMaterials[period];\n}",
        simAction: "Simulate Evidence Assembly",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading period Q3_2026 materials...", tone: "default" },
          { text: "Compiling material records...", tone: "default" },
          { text: "Attaching recyclability data...", tone: "default" },
          { text: "Assembling evidence set...", tone: "default" },
          { text: "[SUCCESS] Evidence set assembled.", tone: "success" },
        ],
      },
      {
        title: "Report Generator",
        subtitle: "The Direct Filing",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Direct Filing",
          description:
            "Derives the EPR report from the assembled evidence set. It generates recyclability totals and target proof directly from verified data, ending manual compilation each period.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function generateReport(bytes32 period) external view returns (uint256 totalKg, uint256 recyclableKg) {\n    bytes32[] memory recs = periodMaterials[period];\n    return tally(recs);\n}",
        simAction: "Simulate EPR Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading Q3_2026 evidence set...", tone: "default" },
          { text: "Tallying total packaging mass...", tone: "default" },
          { text: "Computing recyclable share...", tone: "default" },
          { text: "Deriving target proof...", tone: "default" },
          { text: "[SUCCESS] EPR report generated from data.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "EPR compliance tracking is a horizontal capability. Here is how manufacturers, suppliers, and regulators put one verified record to work.",
    sectors: [
      { icon: Factory, title: "Manufacturers & Producers", description: "Generate Extended Producer Responsibility reports directly from anchored material data, ending manual collection across product lines and suppliers each period.", assetTypes: ["Material Records", "EPR Reports", "Recyclability Data"] },
      { icon: Package, title: "Packaging Suppliers", description: "Submit verified material and recyclability data at the source, giving customers auditable records instead of restating figures each reporting cycle.", assetTypes: ["Material Submissions", "Composition Records", "Supplier Attestations"] },
      { icon: Landmark, title: "Regulators & Schemes", description: "Read recyclability and target evidence derived from underlying records, verifying compliance from verified data rather than compiled spreadsheets.", assetTypes: ["Compliance Reports", "Target Proofs", "Audit Evidence"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether a manufacturer is bridging an ERP or a packaging supplier is submitting data from a portal, Cerulea routes both into one EPR record.",
    tracks: [
      {
        title: "Track A: Manufacturer System Bridging",
        description:
          "For manufacturers on legacy ERP and compliance systems. Existing material and product data are translated into on-chain verified records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "ERP / Compliance System", sublabel: "Manufacturer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Material Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "EPR Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Supplier Portal Capture",
        description:
          "For packaging suppliers submitting directly. A portal signs each material record and routes it to the shared EPR ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Supplier Portal", sublabel: "Data Submission", icon: Fingerprint, accent: false },
          { label: "Network Validators", sublabel: "Material Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Material Record", icon: Recycling, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building EPR tracking with supplier material anchoring, product linkage, evidence assembly, and direct report generation from scratch requires compliance and blockchain engineers and long supplier onboarding. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Material & Reporting Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects compliance-reporting integration benchmarks. Building supplier material anchoring, product linkage, evidence assembly, and direct report generation for an average producer takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your material and reporting rules into pre-audited WebAssembly binaries and provisions the shared ledger and evidence layer instantly.",
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
  {
    label: "Organic and fair-trade certification shared across certifiers, retailers, regulators",
    href: "/solutions/use-case/organic-and-fair-trade-certification-shared-across-certifiers-retailer",
    description: "Verifiable credentials anyone can check in seconds.",
    icon: ShieldCheck,
    category: "ENTERPRISE",
    tags: ["Certification", "Credentials"],
    industry: INDUSTRY,
  },
  {
    label: "Parametric crop insurance with automated payouts via verified weather and satellite data",
    href: "/solutions/use-case/parametric-crop-insurance-with-automated-payouts-via-verified-weather",
    description: "Oracle-triggered payouts with no claim filed.",
    icon: Shield,
    category: "DAPPS",
    tags: ["Insurance", "Oracles"],
    industry: INDUSTRY,
  },
  {
    label: "Carbon sequestration credits for regenerative farming with immutable soil logs",
    href: "/solutions/use-case/carbon-sequestration-credits-for-regenerative-farming-with-immutable-s",
    description: "Tokenized soil carbon paid direct to farmers.",
    icon: Recycling,
    category: "DAPPS",
    tags: ["Carbon", "Regenerative"],
    industry: INDUSTRY,
  },
  {
    label: "Multi-party water rights management in shared irrigation consortiums",
    href: "/solutions/use-case/multi-party-water-rights-management-in-shared-irrigation-consortiums",
    description: "Live metered draws with automatic overdraw penalties.",
    icon: Droplet,
    category: "GOVERNMENT",
    tags: ["Water", "Consortium"],
    industry: INDUSTRY,
  },
  {
    label: "Seed provenance and IP protection against counterfeit or unauthorized reproduction",
    href: "/solutions/use-case/seed-provenance-and-ip-protection-against-counterfeit-or-unauthorized",
    description: "Scannable seed authenticity that protects breeder IP.",
    icon: Fingerprint,
    category: "ENTERPRISE",
    tags: ["Provenance", "IP"],
    industry: INDUSTRY,
  },
  {
    label: "Export compliance documentation shared with destination country regulators",
    href: "/solutions/use-case/export-compliance-documentation-shared-with-destination-country-regula",
    description: "Customs clear consignments from shared signed records.",
    icon: FileCheck,
    category: "GOVERNMENT",
    tags: ["Compliance", "Trade"],
    industry: INDUSTRY,
  },
  {
    label: "Agri-equipment sharing and rental marketplace among smallholder farmers",
    href: "/solutions/use-case/agri-equipment-sharing-and-rental-marketplace-among-smallholder-farmer",
    description: "Sensor-verified rentals settled on real engine hours.",
    icon: Tractor,
    category: "SME",
    tags: ["Marketplace", "Rental"],
    industry: INDUSTRY,
  },
  {
    label: "Farm labour contract and wage payment via mobile wallets",
    href: "/solutions/use-case/farm-labour-contract-and-wage-payment-via-mobile-wallets",
    description: "Wallet wages that build a portable work history.",
    icon: Wallet,
    category: "SME",
    tags: ["Payments", "Labour"],
    industry: INDUSTRY,
  },
  {
    label: "Catch-to-plate traceability to combat illegal unreported fishing (IUU)",
    href: "/solutions/use-case/catch-to-plate-traceability-to-combat-illegal-unreported-fishing-iuu",
    description: "Vessel-attested catch records that reject IUU product.",
    icon: QrCode,
    category: "ENTERPRISE",
    tags: ["Fisheries", "Traceability"],
    industry: INDUSTRY,
  },
  {
    label: "Fishing quota allocation and compliance monitoring across multiple vessels",
    href: "/solutions/use-case/fishing-quota-allocation-and-compliance-monitoring-across-multiple-ves",
    description: "Live quota balances that block overfishing at port.",
    icon: Scale,
    category: "GOVERNMENT",
    tags: ["Fisheries", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Marine Stewardship Council certification verification",
    href: "/solutions/use-case/marine-stewardship-council-certification-verification",
    description: "Verify hundreds of certificates in one session.",
    icon: Shield,
    category: "ENTERPRISE",
    tags: ["Certification", "Sustainability"],
    industry: INDUSTRY,
  },
  {
    label: "Cold chain condition logging from vessel to retailer",
    href: "/solutions/use-case/cold-chain-condition-logging-from-vessel-to-retailer",
    description: "Stage-level temperature logs that pin liability precisely.",
    icon: Thermometer,
    category: "ENTERPRISE",
    tags: ["Cold Chain", "IoT"],
    industry: INDUSTRY,
  },
  {
    label: "Aquaculture feed and antibiotic usage compliance ledger",
    href: "/solutions/use-case/aquaculture-feed-and-antibiotic-usage-compliance-ledger",
    description: "Per-pond input records ready for export inspection.",
    icon: FlaskConical,
    category: "ENTERPRISE",
    tags: ["Aquaculture", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Legal timber origin verification to combat illegal logging",
    href: "/solutions/use-case/legal-timber-origin-verification-to-combat-illegal-logging",
    description: "Volume-reconciled provenance that blocks timber laundering.",
    icon: Forest,
    category: "ENTERPRISE",
    tags: ["Timber", "Provenance"],
    industry: INDUSTRY,
  },
  {
    label: "Carbon credit issuance for verified forest preservation",
    href: "/solutions/use-case/carbon-credit-issuance-for-verified-forest-preservation",
    description: "Area-bound credits that make double-counting impossible.",
    icon: Leaf,
    category: "DAPPS",
    tags: ["Carbon", "Forestry"],
    industry: INDUSTRY,
  },
  {
    label: "CITES permit management for protected species timber exports",
    href: "/solutions/use-case/cites-permit-management-for-protected-species-timber-exports",
    description: "Verifiable permits that pre-clear at the border.",
    icon: ScrollText,
    category: "GOVERNMENT",
    tags: ["Permits", "Trade"],
    industry: INDUSTRY,
  },
  {
    label: "Reforestation milestone verification for offset buyers",
    href: "/solutions/use-case/reforestation-milestone-verification-for-offset-buyers",
    description: "Escrow that pays only on verified survival.",
    icon: Forest,
    category: "DAPPS",
    tags: ["Reforestation", "Escrow"],
    industry: INDUSTRY,
  },
  {
    label: "Timber auction and royalty distribution to forest communities",
    href: "/solutions/use-case/timber-auction-and-royalty-distribution-to-forest-communities",
    description: "Transparent auctions with automatic, fair royalty splits.",
    icon: Gavel,
    category: "GOVERNMENT",
    tags: ["Royalties", "Auction"],
    industry: INDUSTRY,
  },
  {
    label: "End-to-end cattle traceability from birth to slaughter for food safety",
    href: "/solutions/use-case/end-to-end-cattle-traceability-from-birth-to-slaughter-for-food-safety",
    description: "RFID identity that recalls only the affected lot.",
    icon: Radio,
    category: "ENTERPRISE",
    tags: ["Livestock", "Traceability"],
    industry: INDUSTRY,
  },
  {
    label: "Vaccination and disease event records shared across vets, farms, regulators",
    href: "/solutions/use-case/vaccination-and-disease-event-records-shared-across-vets-farms-regulat",
    description: "Live herd immunity that outruns the outbreak.",
    icon: HeartPulse,
    category: "GOVERNMENT",
    tags: ["Animal Health", "Records"],
    industry: INDUSTRY,
  },
  {
    label: "Livestock insurance claims with tamper-proof mortality records",
    href: "/solutions/use-case/livestock-insurance-claims-with-tamper-proof-mortality-records",
    description: "Vet-verified mortality that cannot be claimed twice.",
    icon: Shield,
    category: "DAPPS",
    tags: ["Insurance", "Livestock"],
    industry: INDUSTRY,
  },
  {
    label: "Cross-border livestock trade documentation and compliance",
    href: "/solutions/use-case/cross-border-livestock-trade-documentation-and-compliance",
    description: "Shared credentials that pre-clear the border early.",
    icon: Globe,
    category: "GOVERNMENT",
    tags: ["Trade", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Feed supply chain traceability and contamination alert system",
    href: "/solutions/use-case/feed-supply-chain-traceability-and-contamination-alert-system",
    description: "Ingredient-to-farm links that alert only the affected.",
    icon: Boxes,
    category: "ENTERPRISE",
    tags: ["Feed", "Traceability"],
    industry: INDUSTRY,
  },
  {
    label: "Dairy cooperative milk procurement and quality-based pricing",
    href: "/solutions/use-case/dairy-cooperative-milk-procurement-and-quality-based-pricing",
    description: "Equipment-anchored tests that pay on verified quality.",
    icon: Droplet,
    category: "SME",
    tags: ["Dairy", "Pricing"],
    industry: INDUSTRY,
  },
  {
    label: "Poultry farm biosecurity compliance and outbreak containment",
    href: "/solutions/use-case/poultry-farm-biosecurity-compliance-and-outbreak-containment",
    description: "Movement maps that draw containment zones instantly.",
    icon: Biotech,
    category: "GOVERNMENT",
    tags: ["Biosecurity", "Poultry"],
    industry: INDUSTRY,
  },
  {
    label: "Ingredient traceability and allergen management across suppliers",
    href: "/solutions/use-case/ingredient-traceability-and-allergen-management-across-suppliers",
    description: "Lot-to-batch chains that recall in hours.",
    icon: FlaskConical,
    category: "ENTERPRISE",
    tags: ["Allergen", "Traceability"],
    industry: INDUSTRY,
  },
  {
    label: "Halal and Kosher certification chain of custody",
    href: "/solutions/use-case/halal-and-kosher-certification-chain-of-custody",
    description: "Step-level certification status that travels with product.",
    icon: ShieldCheck,
    category: "ENTERPRISE",
    tags: ["Certification", "Custody"],
    industry: INDUSTRY,
  },
  {
    label: "Packaging material recyclability and EPR compliance tracking",
    href: "/solutions/use-case/packaging-material-recyclability-and-epr-compliance-tracking",
    description: "EPR reports generated directly from verified records.",
    icon: Recycling,
    category: "ENTERPRISE",
    tags: ["EPR", "Packaging"],
    industry: INDUSTRY,
  },
]
