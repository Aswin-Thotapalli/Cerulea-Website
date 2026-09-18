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

const INDUSTRY = "Automotive & Manufacturing"

export const automotiveManufacturingCases: CaseEntry[] = [
  {
    slug: "auto-parts-provenance-and-counterfeit-prevention-across-global-supply",
    icon: ShieldCheck,
    eyebrow: "Parts Provenance Engine",
    headline1: "Kill the counterfeit.",
    headline2: "Prove every part.",
    heroDescription:
      "Trace each component from Tier-2 to the finished vehicle on one shared consortium network. The Traceability Ledger and Device Attestation confirm authenticity at every tier, while the Quality and Recall Ledger isolates any defect down to the exact part lot.",
    heroCta: "Deploy Provenance Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque multi-tier supply chain into a single, tamper-evident record of authenticity.",
    mechanics: [
      { title: "Multi-Tier Traceability", description: "Replace blind faith in suppliers. The Traceability Ledger records every custody transfer from Tier-2 casting to Tier-1 assembly to OEM line, so no substitution slips in unseen between tiers." },
      { title: "Device Attestation", description: "Bind identity to hardware. Device Attestation anchors a cryptographic signature from the factory press or laser marker to each part serial, making a cloned or grey-market unit fail verification instantly." },
      { title: "Service-Point Verification", description: "Reject fakes at the bay. A technician scans a part before fitting it, and a component with no valid on-chain record returns a hard failure instead of a warranty landmine." },
      { title: "Lot-Level Recall", description: "Contain defects precisely. The Quality and Recall Ledger maps each serial back to its production lot, so a recall targets the exact affected batch rather than an entire part number." },
      { title: "Approved-Supplier Registry", description: "Enforce sourcing rules on-chain. When a counterfeit surfaces, its origin resolves to a specific vendor, who is flagged and removed from the approved list across every plant at once." },
      { title: "Warranty Evidence", description: "Settle claims from proof. Each fitted part carries a verifiable authenticity record, so warranty disputes rest on cryptographic evidence rather than a contested paper invoice." },
    ],
    lifecycleTitle: "The Provenance Lifecycle",
    lifecycleSubtitle:
      "Follow a single brake component from its Tier-2 origin to the moment a technician verifies it at the service bay.",
    lifecycleSteps: [
      {
        label: "Tier-2 Origination",
        description:
          "A Tier-2 supplier mints the part identity at the press. The contract anchors the material grade, factory signature, and lot number as the immutable origin of the component.",
        icon: Factory,
        logFilename: "cerulea_partstrace.log",
        logLines: [
          { text: "[SYS] Initializing Component Origin Manifest...", time: "05:41:12", tone: "default" },
          { text: "[CMD] mintPart { sku: \"BRK_PAD_338\", lot: \"L_77120\", tier: 2 }", time: "05:41:12", tone: "primary" },
          { text: "[AUTH] Attesting factory press signature via Device Attestation...", time: "05:41:13", tone: "secondary" },
          { text: "[OK] Part PART_338771 anchored at block 5120441.", time: "05:41:13", tone: "success" },
        ],
      },
      {
        label: "Tier-1 Assembly",
        description:
          "The part moves into a Tier-1 module and then the OEM line. Each custody transfer is co-signed, so an unauthorized substitution cannot advance without breaking the chain.",
        icon: Truck,
        logFilename: "cerulea_partstrace.log",
        logLines: [
          { text: "[SYS] Handoff pending acceptance at Tier1_0x22...", time: "10:15:04", tone: "default" },
          { text: "[CMD] acceptCustody(PART_338771, module: \"CALIPER_ASSY\")", time: "10:15:07", tone: "primary" },
          { text: "[SYS] Co-signature recorded from both tiers.", time: "10:15:07", tone: "default" },
          { text: "[OK] Custody transferred. Chain length now 3 hops.", time: "10:15:08", tone: "success" },
        ],
      },
      {
        label: "Vehicle Binding",
        description:
          "The OEM binds the verified part to the vehicle VIN on the assembly line. The Quality and Recall Ledger records the lot association for future recall targeting.",
        icon: Car,
        logFilename: "cerulea_partstrace.log",
        logLines: [
          { text: "[SYS] Binding part to vehicle at final assembly...", time: "14:02:33", tone: "default" },
          { text: "[CMD] bindToVin(PART_338771, vin: \"WBA5A7C51FD\")", time: "14:02:33", tone: "primary" },
          { text: "[AUTH] Registering lot L_77120 in Recall Ledger...", time: "14:02:34", tone: "secondary" },
          { text: "[OK] Part sealed to VIN. Recall index updated.", time: "14:02:34", tone: "success" },
        ],
      },
      {
        label: "Service Verification",
        description:
          "Years later a technician scans the part before a repair. A counterfeit replacement returns no valid record, and the fitting is refused before it endangers the driver.",
        icon: Search,
        logFilename: "cerulea_partstrace.log",
        logLines: [
          { text: "[SYS] Service-point authenticity request for scan...", time: "16:48:19", tone: "default" },
          { text: "[CMD] verifyPart(serial: \"CLONE_9981\")", time: "16:48:19", tone: "primary" },
          { text: "[SYS] No matching origin record found on ledger...", time: "16:48:19", tone: "default" },
          { text: "[OK] Verification failed. Counterfeit rejected at bay.", time: "16:48:20", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes parts provenance into modular contracts. Each layer mints, attests, transfers, and verifies a component without any single tier controlling the authenticity record.",
    layers: [
      {
        title: "Part Registry",
        subtitle: "The Origin Anchor",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Anchor",
          description:
            "The foundational data layer. It mints a unique part identity at the Tier-2 press and stores the immutable link to material grade, lot number, and factory signature that every later record points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PartRegistry {\n  struct Part {\n    address maker;\n    string sku;\n    bytes32 lot;\n    bytes32 pressSig;\n    bool bound;\n  }\n\n  mapping(bytes32 => Part) public parts;\n\n  function mint(bytes32 id, string calldata sku, bytes32 lot, bytes32 sig) external {\n    parts[id] = Part(msg.sender, sku, lot, sig, false);\n  }\n}",
        simAction: "Simulate Part Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading Tier-2 factory credential for BRK_PAD_338...", tone: "default" },
          { text: "Hashing lot number L_77120...", tone: "default" },
          { text: "Sealing press signature to part identity...", tone: "default" },
          { text: "Writing part state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Part PART_338771 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Device Attestation",
        subtitle: "The Hardware Seal",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Hardware Seal",
          description:
            "Prevents cloning at the source. This module verifies a signature from the trusted factory device that produced the part, so any grey-market or counterfeit unit lacks the attestation and fails verification at the protocol level.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract DeviceAttestation {\n  function attest(bytes32 partId, bytes calldata sig) external returns (bool) {\n    address signer = recover(partId, sig);\n    require(trustedDevices[signer], \"Untrusted device\");\n    attested[partId] = true;\n    return true;\n  }\n}",
        simAction: "Simulate Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading press device signature payload...", tone: "default" },
          { text: "Recovering signer address from part hash...", tone: "default" },
          { text: "Checking signer against trusted device registry...", tone: "default" },
          { text: "[PASS] Signature originates from certified press.", tone: "success" },
          { text: "[SUCCESS] Part attested, cloning detectable.", tone: "success" },
        ],
      },
      {
        title: "Custody Handoff",
        subtitle: "The Two-Tier Transfer",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Tier Transfer",
          description:
            "Blocks silent substitution between tiers. A part cannot advance up the supply chain until the receiving tier co-signs the transfer, turning every custody change into a mutual, on-chain agreement.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function acceptCustody(bytes32 id, string calldata module) external {\n    Handoff storage h = pending[id];\n    require(h.receiver == msg.sender, \"Not receiver\");\n    require(attested[id], \"Not attested\");\n    h.settled = true;\n    custody[id] = msg.sender;\n    emit CustodyAccepted(id, msg.sender, module);\n}",
        simAction: "Simulate Custody Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Tier-1 reviewing upstream part declaration...", tone: "default" },
          { text: "Confirming attestation flag on PART_338771...", tone: "default" },
          { text: "Recording co-signature from both tiers...", tone: "default" },
          { text: "Advancing part into caliper module...", tone: "default" },
          { text: "[SUCCESS] Custody transferred with mutual proof.", tone: "success" },
        ],
      },
      {
        title: "Recall Index",
        subtitle: "The Lot Locator",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Lot Locator",
          description:
            "A read layer that maps each part serial to its production lot and bound VIN. It lets an OEM isolate a defect to the exact affected batch and flag its originating supplier without scanning an entire part number.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function affectedByLot(bytes32 lot) external view returns (bytes32[] memory) {\n    return lotToVins[lot];\n}",
        simAction: "Simulate Recall Lookup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Quality team flags defect in lot L_77120...", tone: "default" },
          { text: "Resolving all serials produced in lot...", tone: "default" },
          { text: "Mapping serials to bound vehicle VINs...", tone: "default" },
          { text: "Flagging originating Tier-2 supplier...", tone: "default" },
          { text: "[SUCCESS] Affected batch and vendor isolated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Parts provenance is a horizontal capability. Here is how different actors across the automotive supply chain put the shared authenticity record to work.",
    sectors: [
      { icon: Factory, title: "OEMs & Assemblers", description: "Bind every verified component to a VIN on the line and remove counterfeit suppliers from the approved list the moment a fake is traced, cutting warranty exposure and field failures.", assetTypes: ["Bound Components", "Approved Suppliers", "Recall Lots"] },
      { icon: Handshake, title: "Tier-1 & Tier-2 Suppliers", description: "Attest each part at the press and co-sign custody upward, turning provable authenticity into a competitive advantage and a shield against substitution claims.", assetTypes: ["Attested Parts", "Custody Records", "Lot Certificates"] },
      { icon: Building2, title: "Dealers & Service Centres", description: "Scan replacement parts before fitting and reject any unit with no valid record, protecting technicians, drivers, and the dealer's warranty standing.", assetTypes: ["Service Scans", "Fitment Proofs", "Authenticity Checks"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy MES and PLM systems from Tier-1 plants or capturing press signatures from Tier-2 devices, Cerulea routes both into one shared authenticity record.",
    tracks: [
      {
        title: "Track A: Enterprise MES Bridging",
        description:
          "For OEMs and Tier-1 suppliers on legacy MES and PLM. Existing production events are translated into signed on-chain part transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy MES / PLM", sublabel: "Plant Production Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Traceability Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Factory Device Capture",
        description:
          "For Tier-2 presses and laser markers on the shop floor. Each device signs a part attestation at production and routes it directly to the ledger through its wallet.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Press / Marker Device", sublabel: "Tier-2 Shop Floor", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Part Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-tier provenance network with device attestation, custody logic, and lot-level recall indexing from scratch requires specialised engineers and long supplier integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attestation & Custody Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects automotive supply-chain integration benchmarks. Wiring together each tier's MES, building custom attestation and custody logic, and shipping a lot-level recall index for an average network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attestation and custody rules into pre-audited WebAssembly binaries and provisions the shared consortium ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "vehicle-identity-and-history-record-vin-to-blockchain",
    icon: Car,
    eyebrow: "Vehicle Identity Ledger",
    headline1: "Anchor the VIN.",
    headline2: "Expose the history.",
    heroDescription:
      "Hold a complete, tamper-evident vehicle history on a shared network. The Traceability Ledger, Device Attestation, and DID and VC Ledger bind every event to the VIN, while the Provenance Notary anchors the record so cloning and hidden accident history become detectable.",
    heroCta: "Deploy Vehicle Registries",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manipulable central database into a single, cryptographically bound life record for every vehicle.",
    mechanics: [
      { title: "VIN-Bound Events", description: "Anchor every event to identity. The Traceability Ledger ties each service, accident, and ownership change to the VIN, so a vehicle's history is one continuous chain rather than scattered records." },
      { title: "Attested Odometer", description: "End mileage fraud. Device Attestation captures signed odometer readings straight from the cluster, making a 40,000 km rollback mathematically detectable against the prior anchored value." },
      { title: "Verifiable Credentials", description: "Bind claims to issuers. The DID and VC Ledger lets insurers, inspectors, and dealers issue signed credentials for a VIN, so a claim of clean title carries a verifiable issuer signature." },
      { title: "Clone Detection", description: "Break the duplicate. The Provenance Notary anchors a single canonical VIN record, so a cloned plate on a second vehicle collides with the genuine chain and is flagged." },
      { title: "Instant Buyer Access", description: "Give buyers a trusted window. A buyer scans a VIN and reads the full accident, odometer, and title history in seconds, with no account and no reliance on a single database operator." },
      { title: "Cross-Border Portability", description: "Carry history across markets. Because the record lives on a shared network, an imported vehicle brings its verified history with it instead of resetting at the border." },
    ],
    lifecycleTitle: "The Vehicle Lifecycle",
    lifecycleSubtitle:
      "Follow a single vehicle from factory registration through service and accident events to the moment a used buyer verifies its history.",
    lifecycleSteps: [
      {
        label: "VIN Genesis",
        description:
          "The OEM registers the VIN at end of line. The Provenance Notary anchors the canonical vehicle identity, model, and build date as the genesis of the history chain.",
        icon: Car,
        logFilename: "cerulea_vinledger.log",
        logLines: [
          { text: "[SYS] Initializing Vehicle Identity Manifest...", time: "07:30:00", tone: "default" },
          { text: "[CMD] registerVin { vin: \"WBA5A7C51FD\", model: \"E90\", year: 2026 }", time: "07:30:00", tone: "primary" },
          { text: "[AUTH] Notarizing canonical VIN record...", time: "07:30:01", tone: "secondary" },
          { text: "[OK] VIN anchored at block 6021900. Chain genesis set.", time: "07:30:01", tone: "success" },
        ],
      },
      {
        label: "Service Event",
        description:
          "A service centre records a maintenance event with a signed odometer reading. Device Attestation binds the mileage to the VIN and rejects any value below the prior anchor.",
        icon: FileCheck,
        logFilename: "cerulea_vinledger.log",
        logLines: [
          { text: "[SYS] Ingesting service event for VIN WBA5A7C51FD...", time: "11:20:44", tone: "default" },
          { text: "[CMD] logService(odo: 82000, work: \"BRAKE_SVC\")", time: "11:20:44", tone: "primary" },
          { text: "[AUTH] Attesting cluster reading against prior anchor 78400...", time: "11:20:45", tone: "secondary" },
          { text: "[OK] Event appended. Odometer monotonic and valid.", time: "11:20:45", tone: "success" },
        ],
      },
      {
        label: "Insurance Claim",
        description:
          "An insurer issues a verifiable credential for an accident claim. The DID and VC Ledger binds the signed claim to the VIN so future buyers can see it and trust the issuer.",
        icon: ShieldCheck,
        logFilename: "cerulea_vinledger.log",
        logLines: [
          { text: "[SYS] Insurer issuing accident credential...", time: "15:05:12", tone: "default" },
          { text: "[CMD] issueVC(vin: \"WBA5A7C51FD\", type: \"CLAIM\", sev: 3)", time: "15:05:12", tone: "primary" },
          { text: "[AUTH] Signing credential with insurer DID...", time: "15:05:13", tone: "secondary" },
          { text: "[OK] Verifiable claim bound to VIN history.", time: "15:05:13", tone: "success" },
        ],
      },
      {
        label: "Buyer Verification",
        description:
          "A used buyer scans the VIN and reads the full record. Three insurance claims and a prior rollback attempt surface at once, and the buyer walks away informed.",
        icon: Search,
        logFilename: "cerulea_vinledger.log",
        logLines: [
          { text: "[SYS] Public history request for VIN WBA5A7C51FD...", time: "18:40:27", tone: "default" },
          { text: "[CMD] resolveHistory(\"WBA5A7C51FD\")", time: "18:40:27", tone: "primary" },
          { text: "[SYS] Assembling 3 claims and 11 service events...", time: "18:40:27", tone: "default" },
          { text: "[OK] Verified history returned. Chain intact from genesis.", time: "18:40:28", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes vehicle identity into modular contracts. Each layer anchors, attests, credentials, and exposes a VIN history without any single registry operator able to rewrite the record.",
    layers: [
      {
        title: "VIN Registry",
        subtitle: "The Identity Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Anchor",
          description:
            "The foundational data layer. It anchors a single canonical VIN record at build and stores the immutable link to model, build date, and originating plant that every later event points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract VinRegistry {\n  struct Vehicle {\n    string vin;\n    string model;\n    uint256 built;\n    address oem;\n    uint256 lastOdo;\n  }\n\n  mapping(bytes32 => Vehicle) public fleet;\n\n  function register(bytes32 id, string calldata vin, string calldata model) external {\n    fleet[id] = Vehicle(vin, model, block.timestamp, msg.sender, 0);\n  }\n}",
        simAction: "Simulate VIN Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading OEM credential for end-of-line unit...", tone: "default" },
          { text: "Hashing VIN WBA5A7C51FD to identity key...", tone: "default" },
          { text: "Writing canonical vehicle record...", tone: "default" },
          { text: "Setting odometer baseline to zero...", tone: "default" },
          { text: "[SUCCESS] VIN anchored as chain genesis.", tone: "success" },
        ],
      },
      {
        title: "Odometer Attestation",
        subtitle: "The Anti-Rollback Guard",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Anti-Rollback Guard",
          description:
            "Enforces a monotonic odometer. Device Attestation captures a signed reading from the instrument cluster and rejects any value below the last anchored mileage, making rollback fraud impossible to record.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function logOdometer(bytes32 id, uint256 odo, bytes calldata sig) external {\n    require(clusterTrusted(recover(id, sig)), \"Untrusted cluster\");\n    require(odo >= fleet[id].lastOdo, \"Rollback rejected\");\n    fleet[id].lastOdo = odo;\n    emit OdometerLogged(id, odo);\n}",
        simAction: "Simulate Odometer Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving cluster reading 82000 km...", tone: "default" },
          { text: "Verifying cluster device signature...", tone: "default" },
          { text: "Comparing against prior anchor 78400 km...", tone: "default" },
          { text: "[PASS] Reading is monotonic and valid.", tone: "success" },
          { text: "[SUCCESS] Odometer appended, rollback blocked.", tone: "success" },
        ],
      },
      {
        title: "Credential Ledger",
        subtitle: "The Issuer Binding",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Issuer Binding",
          description:
            "Binds signed claims to a VIN. The DID and VC Ledger lets insurers and inspectors issue verifiable credentials, so an accident claim or title status carries a cryptographic issuer signature rather than an unverifiable note.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function issueCredential(bytes32 id, bytes32 vcHash, string calldata kind) external onlyIssuer {\n    credentials[id].push(VC(vcHash, kind, msg.sender, block.timestamp));\n    emit CredentialIssued(id, vcHash, kind, msg.sender);\n}",
        simAction: "Simulate Credential Issue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Insurer preparing accident claim credential...", tone: "default" },
          { text: "Computing digest of claim document...", tone: "default" },
          { text: "Signing with insurer decentralized identifier...", tone: "default" },
          { text: "Binding verifiable credential to VIN...", tone: "default" },
          { text: "[SUCCESS] Claim credential anchored to history.", tone: "success" },
        ],
      },
      {
        title: "History Resolver",
        subtitle: "The Buyer Window",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Buyer Window",
          description:
            "A read-only gateway that resolves a VIN to its full event chain and credential set. It lets any buyer or inspector verify accident, odometer, and title history without an account and without trusting a single operator.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveHistory(bytes32 id) external view returns (Event[] memory, VC[] memory) {\n    return (events[id], credentials[id]);\n}",
        simAction: "Simulate History Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer scans VIN WBA5A7C51FD...", tone: "default" },
          { text: "Assembling 11 service events...", tone: "default" },
          { text: "Attaching 3 insurer claim credentials...", tone: "default" },
          { text: "Flagging one rejected rollback attempt...", tone: "default" },
          { text: "[SUCCESS] Verified vehicle history returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A VIN-bound history is a horizontal capability. Here is how different actors in the vehicle lifecycle put the shared record to work.",
    sectors: [
      { icon: Handshake, title: "Used-Car Marketplaces", description: "Attach a verifiable history to every listing so buyers see accidents, mileage, and title status up front, cutting fraud disputes and lifting trust in the platform.", assetTypes: ["Listing Histories", "Title Attestations", "Odometer Proofs"] },
      { icon: ShieldCheck, title: "Insurers", description: "Issue and read signed claim credentials against a VIN, pricing risk on a verified accident record and detecting cloned vehicles that collide with a genuine chain.", assetTypes: ["Claim Credentials", "Risk Records", "Clone Alerts"] },
      { icon: Landmark, title: "Registries & Regulators", description: "Anchor titles and inspections to the canonical VIN and query the ledger directly, replacing a manipulable central database with a tamper-evident shared record.", assetTypes: ["Title Records", "Inspection Logs", "Registration Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy DMV and dealer systems or capturing signed readings from vehicle clusters, Cerulea routes both into one shared VIN history.",
    tracks: [
      {
        title: "Track A: Registry & Dealer Bridging",
        description:
          "For DMVs, insurers, and dealer groups on legacy systems. Existing title and service events are translated into VIN-bound on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy DMS / DMV", sublabel: "Dealer & Registry Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Binding & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "VIN History Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: In-Vehicle Telemetry Capture",
        description:
          "For instrument clusters and connected vehicles. Each cluster signs an odometer and event reading and routes it directly to the VIN record through its device wallet.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Cluster / Telematics", sublabel: "Connected Vehicle", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Event Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Canonical VIN Record", icon: Car, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a VIN-bound history network with attested odometers, verifiable credentials, and a public resolver from scratch requires specialised engineers and long registry integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Identity & Credential Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects registry integration benchmarks. Binding each DMV, insurer, and dealer system, building custom odometer attestation and credential logic, and shipping a public VIN resolver for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your identity and credential rules into pre-audited WebAssembly binaries and provisions the shared VIN ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "warranty-claim-verification-with-parts-authenticity-check",
    icon: FileCheck,
    eyebrow: "Warranty Settlement Layer",
    headline1: "Verify before you claim.",
    headline2: "Approve with proof.",
    heroDescription:
      "Let service centres check warranty status and part authenticity on a shared network before a claim is ever submitted. The Traceability Ledger and Device Attestation confirm the replacement part, while the Quality and Recall Ledger records the check as evidence.",
    heroCta: "Deploy Warranty Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Move authenticity verification from after-the-fact rejection to a check at the moment of repair.",
    mechanics: [
      { title: "Pre-Claim Verification", description: "Check before you commit. A service centre queries warranty status and part authenticity on the Traceability Ledger before fitting, so a claim is only raised when it will pass." },
      { title: "Part Authenticity Gate", description: "Bar counterfeits from the process. Device Attestation confirms the replacement part is genuine, and a fake unit fails the gate before it can void the warranty." },
      { title: "Recorded Check", description: "Turn the check into evidence. The Quality and Recall Ledger records each verification with a timestamp, so an approved claim rests on a signed proof rather than a technician's word." },
      { title: "Coverage Lookup", description: "Read entitlement on-chain. Warranty terms and remaining coverage resolve directly from the VIN record, so eligibility is settled instantly at the counter." },
      { title: "Automated Approval", description: "Settle valid claims fast. When both warranty and part pass, the claim is approved against the recorded evidence, cutting the back-and-forth that delays reimbursement." },
      { title: "Fraud Reduction", description: "Cut rejected claims. Because verification happens up front, after-the-fact rejections over counterfeit parts fall sharply and disputes drop." },
    ],
    lifecycleTitle: "The Warranty Lifecycle",
    lifecycleSubtitle:
      "Follow a single warranty repair from coverage lookup through part verification to automated approval.",
    lifecycleSteps: [
      {
        label: "Coverage Lookup",
        description:
          "A service centre reads the VIN warranty status on the shared network. The Traceability Ledger returns remaining coverage and eligible components before any work begins.",
        icon: Search,
        logFilename: "cerulea_warranty.log",
        logLines: [
          { text: "[SYS] Reading warranty status for VIN WBA5A7C51FD...", time: "09:12:03", tone: "default" },
          { text: "[CMD] getCoverage(\"WBA5A7C51FD\", part: \"BRK_PAD\")", time: "09:12:03", tone: "primary" },
          { text: "[AUTH] Resolving remaining coverage window...", time: "09:12:04", tone: "secondary" },
          { text: "[OK] Coverage active. Component eligible for claim.", time: "09:12:04", tone: "success" },
        ],
      },
      {
        label: "Part Verification",
        description:
          "The technician scans the replacement part. Device Attestation confirms it is a genuine attested unit, and a counterfeit is rejected before it is fitted.",
        icon: ShieldCheck,
        logFilename: "cerulea_warranty.log",
        logLines: [
          { text: "[SYS] Verifying replacement part authenticity...", time: "09:34:41", tone: "default" },
          { text: "[CMD] verifyPart(serial: \"PART_552018\")", time: "09:34:41", tone: "primary" },
          { text: "[AUTH] Matching device attestation signature...", time: "09:34:42", tone: "secondary" },
          { text: "[OK] Part genuine. Cleared for fitment.", time: "09:34:42", tone: "success" },
        ],
      },
      {
        label: "Check Recording",
        description:
          "The verification is written to the Quality and Recall Ledger. The signed record ties the warranty status and part proof to the repair as permanent evidence.",
        icon: FileCheck,
        logFilename: "cerulea_warranty.log",
        logLines: [
          { text: "[SYS] Recording verification evidence...", time: "10:02:17", tone: "default" },
          { text: "[CMD] recordCheck(vin, part: \"PART_552018\", pass: true)", time: "10:02:17", tone: "primary" },
          { text: "[SYS] Sealing timestamp and technician signature...", time: "10:02:17", tone: "default" },
          { text: "[OK] Check anchored. Evidence tamper-evident.", time: "10:02:18", tone: "success" },
        ],
      },
      {
        label: "Claim Approval",
        description:
          "The claim is submitted with the recorded proof attached. The manufacturer approves it automatically against the on-chain evidence instead of a manual after-the-fact review.",
        icon: Handshake,
        logFilename: "cerulea_warranty.log",
        logLines: [
          { text: "[SYS] Claim submitted with anchored evidence...", time: "10:20:55", tone: "default" },
          { text: "[CMD] approveClaim(CLAIM_44120)", time: "10:20:55", tone: "primary" },
          { text: "[AUTH] Validating warranty and part proofs...", time: "10:20:56", tone: "secondary" },
          { text: "[OK] Claim approved on verified evidence.", time: "10:20:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes warranty verification into modular contracts. Each layer looks up coverage, verifies the part, records the check, and settles the claim without the manufacturer relying on a post-hoc audit.",
    layers: [
      {
        title: "Coverage Registry",
        subtitle: "The Entitlement Store",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Entitlement Store",
          description:
            "The foundational data layer. It holds warranty terms and remaining coverage per VIN, resolving eligibility for a component instantly so a claim is only opened when the vehicle is actually covered.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CoverageRegistry {\n  struct Policy {\n    uint256 start;\n    uint256 durationDays;\n    uint256 mileageCap;\n    bool active;\n  }\n\n  mapping(bytes32 => Policy) public policies;\n\n  function isCovered(bytes32 vin, uint256 odo) public view returns (bool) {\n    Policy memory p = policies[vin];\n    return p.active && odo <= p.mileageCap;\n  }\n}",
        simAction: "Simulate Coverage Lookup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading policy for VIN WBA5A7C51FD...", tone: "default" },
          { text: "Checking active flag and mileage cap...", tone: "default" },
          { text: "Comparing current odometer to limit...", tone: "default" },
          { text: "Resolving component eligibility...", tone: "default" },
          { text: "[SUCCESS] Coverage active, claim permitted.", tone: "success" },
        ],
      },
      {
        title: "Part Verifier",
        subtitle: "The Authenticity Gate",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Authenticity Gate",
          description:
            "Blocks counterfeit parts at repair time. It reads the Device Attestation record for the replacement serial and refuses to clear a unit that lacks a genuine factory signature.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract PartVerifier {\n  function verify(bytes32 serial) external view returns (bool) {\n    require(attested[serial], \"No attestation\");\n    require(!flaggedCounterfeit[serial], \"Flagged\");\n    return true;\n  }\n}",
        simAction: "Simulate Part Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning replacement part PART_552018...", tone: "default" },
          { text: "Reading device attestation record...", tone: "default" },
          { text: "Checking counterfeit flag registry...", tone: "default" },
          { text: "[PASS] Part carries genuine factory signature.", tone: "success" },
          { text: "[SUCCESS] Part cleared for fitment.", tone: "success" },
        ],
      },
      {
        title: "Check Notary",
        subtitle: "The Evidence Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Seal",
          description:
            "Anchors each verification as permanent evidence. It records the warranty and part result with a technician signature to the Quality and Recall Ledger, so an approved claim rests on a tamper-evident proof.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function recordCheck(bytes32 vin, bytes32 serial, bool pass) external onlyServiceCentre {\n    checks[vin].push(Check(serial, pass, msg.sender, block.timestamp));\n    emit CheckRecorded(vin, serial, pass, msg.sender);\n}",
        simAction: "Simulate Check Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing verification evidence bundle...", tone: "default" },
          { text: "Binding warranty and part result to VIN...", tone: "default" },
          { text: "Sealing technician signature and timestamp...", tone: "default" },
          { text: "Writing record to Recall Ledger...", tone: "default" },
          { text: "[SUCCESS] Check anchored, evidence sealed.", tone: "success" },
        ],
      },
      {
        title: "Claim Settler",
        subtitle: "The Auto Approver",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Auto Approver",
          description:
            "Settles claims from evidence. When both the coverage and part checks pass, this contract approves the claim against the anchored proof, replacing slow manual after-the-fact review with instant settlement.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function approveClaim(bytes32 claimId) external {\n    Claim storage c = claims[claimId];\n    require(c.coveragePass && c.partPass, \"Checks incomplete\");\n    c.approved = true;\n    emit ClaimApproved(claimId, c.vin, block.timestamp);\n}",
        simAction: "Simulate Claim Approval",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving claim CLAIM_44120 with evidence...", tone: "default" },
          { text: "Validating coverage proof...", tone: "default" },
          { text: "Validating part authenticity proof...", tone: "default" },
          { text: "Executing automated approval...", tone: "default" },
          { text: "[SUCCESS] Claim approved on verified evidence.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Pre-claim verification is a horizontal capability. Here is how different actors in the warranty chain put the shared check to work.",
    sectors: [
      { icon: Factory, title: "Manufacturers", description: "Approve claims from anchored evidence and reject none after the fact, cutting warranty leakage from counterfeit parts and shrinking the cost of manual claim review.", assetTypes: ["Approved Claims", "Coverage Policies", "Evidence Records"] },
      { icon: Building2, title: "Service Centres", description: "Verify warranty and part authenticity before fitting, so a technician never voids coverage with a fake unit and claims clear without dispute.", assetTypes: ["Pre-Claim Checks", "Fitment Proofs", "Verification Logs"] },
      { icon: Handshake, title: "Parts Distributors", description: "Supply attested components that pass the authenticity gate on the first scan, turning provable genuineness into a reason service centres buy from them.", assetTypes: ["Attested Stock", "Authenticity Proofs", "Distribution Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy warranty and DMS systems or capturing part scans from service bay devices, Cerulea routes both into one shared verification record.",
    tracks: [
      {
        title: "Track A: Warranty System Bridging",
        description:
          "For manufacturers and dealer groups on legacy warranty platforms. Existing coverage and claim data are translated into on-chain verification records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Warranty / DMS", sublabel: "OEM & Dealer Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Check Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Warranty Verification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Service-Bay Scan Capture",
        description:
          "For technicians scanning parts at the bay. A service app signs each verification and part scan from a device wallet and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Service App / Scanner", sublabel: "Repair Bay Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Verification Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Check Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a pre-claim verification network with coverage lookups, part authenticity gates, and evidence recording from scratch requires specialised engineers and long system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Coverage & Verification Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects warranty platform integration benchmarks. Wiring each manufacturer and dealer system, building custom coverage and part-verification logic, and shipping an evidence recorder for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your coverage and verification rules into pre-audited WebAssembly binaries and provisions the shared ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "just-in-time-supplier-delivery-performance-tracking",
    icon: Truck,
    eyebrow: "Supplier Performance Engine",
    headline1: "Time every delivery.",
    headline2: "Score every supplier.",
    heroDescription:
      "Anchor verified delivery timestamps against each purchase order on a shared network. The Provenance Notary holds every delivery event, while Compliance Attestations build an auditable on-time performance record for every supplier across every plant.",
    heroCta: "Deploy Performance Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a fragmented, disputed delivery log into a single, verified record of supplier performance.",
    mechanics: [
      { title: "PO-Anchored Deliveries", description: "Tie every delivery to its order. The Provenance Notary anchors each delivery timestamp against the exact purchase order, so on-time performance is measured against a signed commitment, not a guess." },
      { title: "Verified Timestamps", description: "End the arrival dispute. Both the supplier and the receiving dock co-sign the delivery moment, so a late arrival is settled from a mutual record rather than two conflicting logs." },
      { title: "Cross-Plant Scorecards", description: "Unify performance across sites. Compliance Attestations aggregate deliveries from every plant into one supplier record, so a scorecard reflects the whole relationship rather than one dock's view." },
      { title: "Automated Penalties", description: "Enforce SLAs from data. When a delivery breaches its window, the contract can trigger the agreed penalty automatically against the verified timestamp, removing manual chargeback disputes." },
      { title: "Line-Stoppage Tracing", description: "Find the real cause. When a just-in-time line halts, the ledger traces the missing part back to a specific late delivery and supplier, replacing finger-pointing with evidence." },
      { title: "Auditable History", description: "Give procurement a clean record. Every delivery event is immutable and queryable, so supplier reviews and contract renewals rest on an auditable performance history." },
    ],
    lifecycleTitle: "The Delivery Lifecycle",
    lifecycleSubtitle:
      "Follow a single just-in-time delivery from purchase order to a verified entry on the supplier scorecard.",
    lifecycleSteps: [
      {
        label: "Purchase Order",
        description:
          "The OEM issues a purchase order with a delivery window. The contract anchors the order, part, quantity, and required arrival time as the commitment to measure against.",
        icon: ScrollText,
        logFilename: "cerulea_jit.log",
        logLines: [
          { text: "[SYS] Anchoring purchase order commitment...", time: "06:00:10", tone: "default" },
          { text: "[CMD] issuePO { po: \"PO_88213\", part: \"HARNESS_A\", due: \"08:30\" }", time: "06:00:10", tone: "primary" },
          { text: "[AUTH] Binding delivery window to supplier Sup_0x14...", time: "06:00:11", tone: "secondary" },
          { text: "[OK] PO anchored at block 7112044. Window set.", time: "06:00:11", tone: "success" },
        ],
      },
      {
        label: "Dispatch",
        description:
          "The supplier dispatches the shipment and signs the departure. The event is bound to the purchase order so the delivery clock is anchored from a verified start.",
        icon: Truck,
        logFilename: "cerulea_jit.log",
        logLines: [
          { text: "[SYS] Supplier signing dispatch for PO_88213...", time: "07:05:22", tone: "default" },
          { text: "[CMD] dispatch(PO_88213, qty: 240, eta: \"08:25\")", time: "07:05:22", tone: "primary" },
          { text: "[SYS] Departure timestamp anchored to order...", time: "07:05:22", tone: "default" },
          { text: "[OK] Shipment in transit. Clock running.", time: "07:05:23", tone: "success" },
        ],
      },
      {
        label: "Dock Receipt",
        description:
          "The receiving dock co-signs arrival. The Provenance Notary records the verified delivery timestamp and compares it against the committed window.",
        icon: Package,
        logFilename: "cerulea_jit.log",
        logLines: [
          { text: "[SYS] Dock scanning inbound shipment PO_88213...", time: "08:41:07", tone: "default" },
          { text: "[CMD] receive(PO_88213, at: \"08:41\", qty: 240)", time: "08:41:07", tone: "primary" },
          { text: "[AUTH] Comparing arrival against 08:30 window...", time: "08:41:08", tone: "secondary" },
          { text: "[OK] Delivery recorded. 11 minutes late, flagged.", time: "08:41:08", tone: "success" },
        ],
      },
      {
        label: "Scorecard Update",
        description:
          "Compliance Attestations fold the verified event into the supplier record. The cross-plant scorecard updates and any SLA penalty is triggered from the timestamp.",
        icon: PieChart,
        logFilename: "cerulea_jit.log",
        logLines: [
          { text: "[SYS] Updating supplier performance record...", time: "08:42:33", tone: "default" },
          { text: "[CMD] attestDelivery(Sup_0x14, onTime: false)", time: "08:42:33", tone: "primary" },
          { text: "[SYS] Recalculating cross-plant on-time ratio...", time: "08:42:33", tone: "default" },
          { text: "[OK] Scorecard updated. SLA penalty triggered.", time: "08:42:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes supplier performance into modular contracts. Each layer anchors the order, verifies the delivery, aggregates the score, and enforces the SLA without a single dock controlling the record.",
    layers: [
      {
        title: "Order Registry",
        subtitle: "The Commitment Anchor",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Commitment Anchor",
          description:
            "The foundational data layer. It anchors each purchase order and its delivery window as an immutable commitment, giving every later delivery a signed target to be measured against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract OrderRegistry {\n  struct PO {\n    address supplier;\n    string part;\n    uint256 qty;\n    uint256 dueBy;\n  }\n\n  mapping(bytes32 => PO) public orders;\n\n  function issue(bytes32 id, address supplier, uint256 dueBy) external {\n    orders[id] = PO(supplier, \"\", 0, dueBy);\n  }\n}",
        simAction: "Simulate PO Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading procurement credential for PO_88213...", tone: "default" },
          { text: "Binding delivery window 08:30 to order...", tone: "default" },
          { text: "Assigning supplier Sup_0x14...", tone: "default" },
          { text: "Writing commitment to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Purchase order anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Delivery Notary",
        subtitle: "The Two-Party Timestamp",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Party Timestamp",
          description:
            "Prevents the disputed arrival. A delivery is only recorded when both the supplier and the receiving dock co-sign the moment, turning arrival time into a mutual, tamper-evident fact.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function receive(bytes32 po, uint256 arrivedAt) external {\n    require(orders[po].supplier != address(0), \"Unknown PO\");\n    bool onTime = arrivedAt <= orders[po].dueBy;\n    deliveries[po] = Delivery(arrivedAt, onTime, msg.sender);\n    emit Delivered(po, arrivedAt, onTime);\n}",
        simAction: "Simulate Delivery Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Dock co-signing arrival for PO_88213...", tone: "default" },
          { text: "Reading committed window from order...", tone: "default" },
          { text: "Comparing arrival 08:41 to due 08:30...", tone: "default" },
          { text: "Flagging delivery as 11 minutes late...", tone: "default" },
          { text: "[SUCCESS] Verified delivery timestamp recorded.", tone: "success" },
        ],
      },
      {
        title: "Score Aggregator",
        subtitle: "The Cross-Plant View",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cross-Plant View",
          description:
            "Rolls verified deliveries into one supplier record. Compliance Attestations aggregate on-time ratios across every plant, so a scorecard reflects the full relationship rather than a single dock's experience.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function attest(address supplier, bool onTime) external onlyPlant {\n    Score storage s = scores[supplier];\n    s.total += 1;\n    if (onTime) s.onTime += 1;\n    emit ScoreUpdated(supplier, s.onTime, s.total);\n}",
        simAction: "Simulate Score Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Folding late delivery into supplier record...", tone: "default" },
          { text: "Aggregating deliveries from all plants...", tone: "default" },
          { text: "Recomputing on-time ratio for Sup_0x14...", tone: "default" },
          { text: "Publishing updated cross-plant scorecard...", tone: "default" },
          { text: "[SUCCESS] Supplier scorecard updated on-chain.", tone: "success" },
        ],
      },
      {
        title: "SLA Enforcer",
        subtitle: "The Penalty Executor",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Penalty Executor",
          description:
            "Turns a missed window into an automatic consequence. When a delivery breaches its SLA, this contract triggers the agreed penalty against the verified timestamp, removing manual chargeback disputes.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function enforce(bytes32 po) external {\n    Delivery memory d = deliveries[po];\n    require(!d.onTime, \"Within window\");\n    uint256 fee = penaltyFor(orders[po].supplier);\n    _charge(orders[po].supplier, fee);\n    emit PenaltyApplied(po, fee);\n}",
        simAction: "Simulate SLA Penalty",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading late flag on PO_88213...", tone: "default" },
          { text: "Resolving agreed penalty for supplier...", tone: "default" },
          { text: "Applying chargeback against verified time...", tone: "default" },
          { text: "Emitting penalty event for procurement...", tone: "default" },
          { text: "[SUCCESS] SLA penalty enforced from record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified delivery tracking is a horizontal capability. Here is how different actors in just-in-time manufacturing put the shared record to work.",
    sectors: [
      { icon: Factory, title: "OEM Procurement", description: "Read one auditable performance record for every supplier across every plant, basing scorecards, penalties, and contract renewals on verified data instead of disputed logs.", assetTypes: ["Supplier Scorecards", "SLA Penalties", "Delivery Records"] },
      { icon: Truck, title: "Suppliers & Logistics", description: "Co-sign each dispatch and arrival to prove on-time performance, protecting against unfair chargebacks and winning renewals on a provable track record.", assetTypes: ["Dispatch Proofs", "On-Time Records", "Performance History"] },
      { icon: Boxes, title: "Plant Operations", description: "Trace any line stoppage back to a specific late delivery and supplier, replacing shift-floor finger-pointing with a clear, evidenced cause.", assetTypes: ["Line Events", "Stoppage Traces", "Inbound Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy ERP and dock scheduling systems or capturing scans from receiving-dock devices, Cerulea routes both into one shared performance record.",
    tracks: [
      {
        title: "Track A: Enterprise ERP Bridging",
        description:
          "For OEMs and large suppliers on legacy ERP. Existing purchase orders and goods-receipt events are translated into anchored on-chain deliveries through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy ERP / SCM", sublabel: "Procurement Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Delivery Performance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Receiving-Dock Capture",
        description:
          "For dock crews and drivers scanning at the gate. A dock app co-signs each arrival from a device wallet and routes the verified timestamp directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Dock App / Scanner", sublabel: "Receiving Bay Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Delivery Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Delivery Record", icon: Truck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a supplier performance network with PO-anchored deliveries, cross-plant scorecards, and automated SLA penalties from scratch requires specialised engineers and long ERP integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Delivery & SLA Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects manufacturing ERP integration benchmarks. Wiring each plant's procurement system, building custom delivery-verification and scorecard logic, and shipping automated SLA penalties for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your delivery and SLA rules into pre-audited WebAssembly binaries and provisions the shared performance ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "recall-campaign-management-and-affected-vehicle-owner-notification",
    icon: Radio,
    eyebrow: "Recall Execution Layer",
    headline1: "Name every vehicle.",
    headline2: "Prove every notice.",
    heroDescription:
      "Link each defect to specific vehicle serial numbers through the Quality and Recall Ledger and Traceability Ledger. Notifications reach every registered owner, and the Civil Registry confirms delivery so the recall record is complete and auditable for regulators.",
    heroCta: "Deploy Recall Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow, incomplete recall into a precise, provable campaign from defect to confirmed notice.",
    mechanics: [
      { title: "Defect-to-Serial Mapping", description: "Name the exact vehicles. The Quality and Recall Ledger links a defect to the specific serial numbers and lots affected, so the campaign targets real vehicles rather than a broad model sweep." },
      { title: "Traceable Scope", description: "Bound the recall precisely. The Traceability Ledger resolves which part lot went into which VIN, so the affected set is neither too wide nor missing a single unit." },
      { title: "Owner Notification", description: "Reach every registered owner. Notifications route to each affected owner of record, replacing scattered mailers with a tracked, addressable campaign." },
      { title: "Delivery Confirmation", description: "Prove the notice landed. The Civil Registry confirms delivery to each owner, so the manufacturer holds cryptographic evidence that the duty to notify was met." },
      { title: "Regulator Window", description: "Give authorities live proof. Regulators query the campaign directly and see the affected set, the notices sent, and the confirmations received without a document request." },
      { title: "Remedy Tracking", description: "Close the loop. As owners bring vehicles in, the ledger records each remedy against its serial, so completion rates are auditable and open cases are visible." },
    ],
    lifecycleTitle: "The Recall Lifecycle",
    lifecycleSubtitle:
      "Follow a single defect from discovery through owner notification to a confirmed, regulator-visible remedy.",
    lifecycleSteps: [
      {
        label: "Defect Registration",
        description:
          "Quality engineering registers a defect against a part lot. The Quality and Recall Ledger anchors the fault and its severity as the trigger for the campaign.",
        icon: FlaskConical,
        logFilename: "cerulea_recall.log",
        logLines: [
          { text: "[SYS] Registering defect against lot L_77120...", time: "08:10:04", tone: "default" },
          { text: "[CMD] openRecall { defect: \"BRK_FADE\", severity: \"HIGH\" }", time: "08:10:04", tone: "primary" },
          { text: "[AUTH] Anchoring fault and severity to ledger...", time: "08:10:05", tone: "secondary" },
          { text: "[OK] Recall RC_2091 opened at block 8033120.", time: "08:10:05", tone: "success" },
        ],
      },
      {
        label: "Scope Resolution",
        description:
          "The Traceability Ledger resolves every VIN that received a part from the defective lot. The affected set is fixed by evidence, not by an approximate model range.",
        icon: Search,
        logFilename: "cerulea_recall.log",
        logLines: [
          { text: "[SYS] Resolving vehicles affected by lot L_77120...", time: "08:12:41", tone: "default" },
          { text: "[CMD] affectedByLot(\"L_77120\")", time: "08:12:41", tone: "primary" },
          { text: "[SYS] Mapping part serials to bound VINs...", time: "08:12:41", tone: "default" },
          { text: "[OK] 4,182 vehicles identified by serial number.", time: "08:12:42", tone: "success" },
        ],
      },
      {
        label: "Owner Notification",
        description:
          "Notifications route to each registered owner. The Civil Registry resolves the current owner of record for every affected VIN and dispatches the notice.",
        icon: Radio,
        logFilename: "cerulea_recall.log",
        logLines: [
          { text: "[SYS] Dispatching notices to affected owners...", time: "09:00:18", tone: "default" },
          { text: "[CMD] notifyOwners(RC_2091, count: 4182)", time: "09:00:18", tone: "primary" },
          { text: "[AUTH] Resolving owner of record via Civil Registry...", time: "09:00:19", tone: "secondary" },
          { text: "[OK] Notices dispatched to 4,182 owners.", time: "09:00:20", tone: "success" },
        ],
      },
      {
        label: "Delivery & Remedy",
        description:
          "The Civil Registry confirms each delivery, and remedies are recorded per serial as vehicles are repaired. Regulators see a complete, auditable campaign.",
        icon: FileCheck,
        logFilename: "cerulea_recall.log",
        logLines: [
          { text: "[SYS] Confirming delivery and logging remedies...", time: "14:30:52", tone: "default" },
          { text: "[CMD] confirmDelivery(RC_2091, vin: \"WBA5A7C51FD\")", time: "14:30:52", tone: "primary" },
          { text: "[SYS] Recording completed remedy against serial...", time: "14:30:52", tone: "default" },
          { text: "[OK] Delivery confirmed. Recall record auditable.", time: "14:30:53", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes recall management into modular contracts. Each layer registers the defect, scopes the vehicles, notifies the owners, and confirms delivery without the manufacturer relying on an unverifiable mailer log.",
    layers: [
      {
        title: "Recall Registry",
        subtitle: "The Defect Anchor",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Defect Anchor",
          description:
            "The foundational data layer. It anchors a defect against its part lot and severity, opening a campaign whose scope and status every later record points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RecallRegistry {\n  struct Recall {\n    bytes32 lot;\n    string defect;\n    uint8 severity;\n    bool open;\n  }\n\n  mapping(bytes32 => Recall) public recalls;\n\n  function open(bytes32 id, bytes32 lot, string calldata defect, uint8 sev) external {\n    recalls[id] = Recall(lot, defect, sev, true);\n  }\n}",
        simAction: "Simulate Defect Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading quality credential for defect report...", tone: "default" },
          { text: "Binding defect to lot L_77120...", tone: "default" },
          { text: "Setting severity flag to HIGH...", tone: "default" },
          { text: "Opening recall campaign on-chain...", tone: "default" },
          { text: "[SUCCESS] Recall RC_2091 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Scope Resolver",
        subtitle: "The Affected Set",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Affected Set",
          description:
            "Fixes the recall boundary from evidence. It reads the Traceability Ledger to map each part serial in the defective lot to its bound VIN, producing an exact affected set instead of a broad model range.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function affectedByLot(bytes32 lot) external view returns (bytes32[] memory) {\n    bytes32[] memory serials = lotSerials[lot];\n    return serialsToVins(serials);\n}",
        simAction: "Simulate Scope Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading all serials produced in lot L_77120...", tone: "default" },
          { text: "Mapping serials to bound vehicle VINs...", tone: "default" },
          { text: "Deduplicating and counting affected units...", tone: "default" },
          { text: "[PASS] 4,182 vehicles resolved by serial.", tone: "success" },
          { text: "[SUCCESS] Affected set fixed from evidence.", tone: "success" },
        ],
      },
      {
        title: "Notification Router",
        subtitle: "The Owner Reach",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Owner Reach",
          description:
            "Reaches every affected owner. It resolves the owner of record for each VIN through the Civil Registry and dispatches a tracked notice, replacing scattered mailers with an addressable campaign.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function notify(bytes32 recallId, bytes32 vin) external onlyManufacturer {\n    address owner = civilRegistry.ownerOf(vin);\n    notices[recallId][vin] = Notice(owner, block.timestamp, false);\n    emit OwnerNotified(recallId, vin, owner);\n}",
        simAction: "Simulate Owner Notice",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resolving owner of record for VIN...", tone: "default" },
          { text: "Preparing recall notice payload...", tone: "default" },
          { text: "Dispatching tracked notification...", tone: "default" },
          { text: "Recording notice against serial...", tone: "default" },
          { text: "[SUCCESS] Owner notified, notice anchored.", tone: "success" },
        ],
      },
      {
        title: "Delivery Confirmer",
        subtitle: "The Proof of Notice",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proof of Notice",
          description:
            "Proves the duty was met. It records the Civil Registry delivery confirmation and any completed remedy per serial, giving the manufacturer and regulators a complete, auditable campaign record.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function confirmDelivery(bytes32 recallId, bytes32 vin) external {\n    require(notices[recallId][vin].sentAt != 0, \"Not notified\");\n    notices[recallId][vin].delivered = true;\n    emit DeliveryConfirmed(recallId, vin, block.timestamp);\n}",
        simAction: "Simulate Delivery Confirm",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving Civil Registry delivery receipt...", tone: "default" },
          { text: "Matching receipt to notified VIN...", tone: "default" },
          { text: "Recording completed remedy against serial...", tone: "default" },
          { text: "Updating campaign completion rate...", tone: "default" },
          { text: "[SUCCESS] Delivery confirmed, record auditable.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Precise recall execution is a horizontal capability. Here is how different actors in a safety campaign put the shared record to work.",
    sectors: [
      { icon: Factory, title: "Manufacturers", description: "Identify every affected vehicle by serial and notify each owner with delivery confirmation, closing recalls faster and holding provable evidence that the duty to notify was met.", assetTypes: ["Recall Campaigns", "Notice Confirmations", "Remedy Records"] },
      { icon: Landmark, title: "Safety Regulators", description: "Query a live campaign to see the affected set, notices sent, and confirmations received, replacing document requests with a direct, auditable window into completion.", assetTypes: ["Campaign Audits", "Completion Rates", "Compliance Proofs"] },
      { icon: Building2, title: "Dealers & Service Networks", description: "Read the exact list of affected VINs and record each remedy against its serial, so completed repairs feed straight into the auditable campaign total.", assetTypes: ["Affected VIN Lists", "Remedy Logs", "Service Confirmations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy quality and CRM systems or resolving owners of record through a civil registry, Cerulea routes both into one auditable recall campaign.",
    tracks: [
      {
        title: "Track A: Quality & CRM Bridging",
        description:
          "For manufacturers on legacy quality and CRM platforms. Existing defect and owner data are translated into an on-chain campaign scope through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy QMS / CRM", sublabel: "Quality & Owner Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Scope Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Quality & Recall Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Civil Registry Confirmation",
        description:
          "For owner resolution and delivery proof. The Civil Registry signs each owner lookup and delivery confirmation and routes it directly to the campaign record.",
        connectorLabels: ["REGISTRY SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Civil Registry Node", sublabel: "Owner of Record", icon: IdCard, accent: false },
          { label: "Consortium Validators", sublabel: "Notice Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Recall Campaign Record", icon: Radio, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a recall network with defect-to-serial mapping, owner notification, and civil registry delivery confirmation from scratch requires specialised engineers and long system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Scope & Notification Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects safety-campaign integration benchmarks. Wiring quality and owner systems, building custom scope-resolution and notification logic, and shipping delivery confirmation for an average campaign takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your scope and notification rules into pre-audited WebAssembly binaries and provisions the shared recall ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "battery-passport-for-electric-vehicle-traceability-and-second-life-tra",
    icon: Zap,
    eyebrow: "Battery Passport Engine",
    headline1: "Passport every cell.",
    headline2: "Prove the second life.",
    heroDescription:
      "Create a digital passport for each battery on a shared network. The Traceability Ledger and Provenance Notary follow it from material sourcing to second life, while an ERC-721 NFT with the DID and VC Ledger carries a single, verified identity.",
    heroCta: "Deploy Battery Passports",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a battery's fragmented life record into one verified passport from raw material to recycling.",
    mechanics: [
      { title: "Material Provenance", description: "Anchor the origin of the cell. The Traceability Ledger records the sourcing of cathode materials and cells, so a passport can prove responsible sourcing from the first mine to the pack." },
      { title: "NFT Identity", description: "Give the battery one identity. An ERC-721 NFT with the DID and VC Ledger carries the passport, so the battery holds a single verifiable identity across owners, vehicles, and second-life uses." },
      { title: "Lifecycle State", description: "Follow the whole life. The Provenance Notary anchors each state change from first fitment to end of vehicle life, so a battery's history is continuous rather than resetting at each handover." },
      { title: "State-of-Health Records", description: "Prove the residual value. Signed state-of-health readings are anchored to the passport, so a second-life buyer prices the battery on a verified capacity record rather than a guess." },
      { title: "Second-Life Transfer", description: "Move value with proof. When a battery leaves a vehicle for stationary storage, the passport transfers with it, carrying its full history into its new role." },
      { title: "Regulatory Compliance", description: "Meet lifecycle mandates. Regulators read one verified battery history from material to recycling, so compliance with material and lifecycle traceability rules rests on the passport itself." },
    ],
    lifecycleTitle: "The Battery Lifecycle",
    lifecycleSubtitle:
      "Follow a single battery from raw material sourcing through vehicle life to a proven second-life deployment.",
    lifecycleSteps: [
      {
        label: "Material Sourcing",
        description:
          "The passport is created at cell manufacture. The Traceability Ledger anchors the material origin and an ERC-721 NFT mints the battery's single verifiable identity.",
        icon: Pickaxe,
        logFilename: "cerulea_battery.log",
        logLines: [
          { text: "[SYS] Initializing Battery Passport Manifest...", time: "05:20:11", tone: "default" },
          { text: "[CMD] mintPassport { cell: \"NMC_811\", origin: \"MINE_DRC_04\" }", time: "05:20:11", tone: "primary" },
          { text: "[AUTH] Anchoring material provenance and minting NFT...", time: "05:20:12", tone: "secondary" },
          { text: "[OK] Passport BATT_90211 minted at block 9021144.", time: "05:20:12", tone: "success" },
        ],
      },
      {
        label: "Vehicle Fitment",
        description:
          "The battery is fitted to a vehicle. The Provenance Notary anchors the fitment and binds the passport to the VIN for the vehicle phase of its life.",
        icon: Car,
        logFilename: "cerulea_battery.log",
        logLines: [
          { text: "[SYS] Binding passport to vehicle at assembly...", time: "10:44:30", tone: "default" },
          { text: "[CMD] fitToVehicle(BATT_90211, vin: \"WBA5A7C51FD\")", time: "10:44:30", tone: "primary" },
          { text: "[AUTH] Notarizing fitment state change...", time: "10:44:31", tone: "secondary" },
          { text: "[OK] Passport bound to VIN. Vehicle phase begins.", time: "10:44:31", tone: "success" },
        ],
      },
      {
        label: "Health Monitoring",
        description:
          "Over years of use, signed state-of-health readings are anchored to the passport. The verified capacity record establishes the battery's residual value.",
        icon: HeartPulse,
        logFilename: "cerulea_battery.log",
        logLines: [
          { text: "[SYS] Ingesting state-of-health reading...", time: "13:15:09", tone: "default" },
          { text: "[CMD] logSoH(BATT_90211, capacity: 82, cycles: 640)", time: "13:15:09", tone: "primary" },
          { text: "[AUTH] Verifying BMS device signature...", time: "13:15:10", tone: "secondary" },
          { text: "[OK] Health record anchored. Residual value updated.", time: "13:15:10", tone: "success" },
        ],
      },
      {
        label: "Second-Life Transfer",
        description:
          "At end of vehicle life the battery moves to stationary storage. The passport transfers with it, carrying material origin and health history into its second life.",
        icon: Recycling,
        logFilename: "cerulea_battery.log",
        logLines: [
          { text: "[SYS] Transferring passport to second-life operator...", time: "17:50:44", tone: "default" },
          { text: "[CMD] transferPassport(BATT_90211, role: \"GRID_STORAGE\")", time: "17:50:44", tone: "primary" },
          { text: "[SYS] Carrying full history into new deployment...", time: "17:50:44", tone: "default" },
          { text: "[OK] Second-life transfer complete. History intact.", time: "17:50:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the battery passport into modular contracts. Each layer mints identity, anchors provenance, records health, and transfers to a second life without any single holder controlling the record.",
    layers: [
      {
        title: "Passport NFT",
        subtitle: "The Battery Identity",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Battery Identity",
          description:
            "The foundational identity layer. An ERC-721 NFT tied to the DID and VC Ledger mints a single verifiable identity for the battery, carried across owners, vehicles, and second-life roles without ever resetting.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract BatteryPassport is ERC721 {\n  struct Cell {\n    string chemistry;\n    string materialOrigin;\n    uint256 born;\n    address holder;\n  }\n\n  mapping(uint256 => Cell) public cells;\n\n  function mint(uint256 id, string calldata chem, string calldata origin) external {\n    _mint(msg.sender, id);\n    cells[id] = Cell(chem, origin, block.timestamp, msg.sender);\n  }\n}",
        simAction: "Simulate Passport Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading cell manufacture credential...", tone: "default" },
          { text: "Recording chemistry NMC_811 and origin...", tone: "default" },
          { text: "Minting ERC-721 passport identity...", tone: "default" },
          { text: "Binding decentralized identifier to token...", tone: "default" },
          { text: "[SUCCESS] Passport BATT_90211 minted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Provenance Notary",
        subtitle: "The Material Seal",
        icon: Pickaxe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Material Seal",
          description:
            "Anchors responsible sourcing. It seals the chain from mine to cell to pack, so a passport can prove where the cathode materials came from and that they meet material traceability mandates.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function anchorMaterial(uint256 id, bytes32 sourceHash, string calldata stage) external onlyNotary {\n    materials[id].push(Material(sourceHash, stage, block.timestamp));\n    emit MaterialAnchored(id, sourceHash, stage);\n}",
        simAction: "Simulate Material Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting mine-of-origin attestation...", tone: "default" },
          { text: "Computing digest of sourcing document...", tone: "default" },
          { text: "Sealing material stage to passport...", tone: "default" },
          { text: "Extending provenance chain to pack...", tone: "default" },
          { text: "[SUCCESS] Material provenance anchored.", tone: "success" },
        ],
      },
      {
        title: "Health Ledger",
        subtitle: "The Capacity Record",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Capacity Record",
          description:
            "Proves residual value. It anchors signed state-of-health readings from the battery management system, so a second-life buyer prices the battery on a verified capacity and cycle record rather than a claim.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function logHealth(uint256 id, uint8 capacity, uint256 cycles, bytes calldata sig) external {\n    require(bmsTrusted(recover(id, sig)), \"Untrusted BMS\");\n    health[id] = Health(capacity, cycles, block.timestamp);\n    emit HealthLogged(id, capacity, cycles);\n}",
        simAction: "Simulate Health Log",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving BMS reading: 82% capacity, 640 cycles...", tone: "default" },
          { text: "Verifying battery management system signature...", tone: "default" },
          { text: "Anchoring state-of-health to passport...", tone: "default" },
          { text: "Recomputing residual value estimate...", tone: "default" },
          { text: "[SUCCESS] Verified health record anchored.", tone: "success" },
        ],
      },
      {
        title: "Second-Life Transfer",
        subtitle: "The Role Handover",
        icon: Recycling,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Role Handover",
          description:
            "Moves value with its history. When a battery leaves a vehicle for stationary storage or recycling, this contract transfers the passport with its full provenance and health record intact to the new operator.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function transferToSecondLife(uint256 id, address operator, string calldata role) external {\n    require(ownerOf(id) == msg.sender, \"Not holder\");\n    _transfer(msg.sender, operator, id);\n    cells[id].holder = operator;\n    emit SecondLife(id, operator, role);\n}",
        simAction: "Simulate Second-Life Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying holder of passport BATT_90211...", tone: "default" },
          { text: "Transferring NFT to grid storage operator...", tone: "default" },
          { text: "Carrying provenance and health forward...", tone: "default" },
          { text: "Recording new role as GRID_STORAGE...", tone: "default" },
          { text: "[SUCCESS] Second-life transfer complete.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "The battery passport is a horizontal capability. Here is how different actors across the battery lifecycle put the shared record to work.",
    sectors: [
      { icon: Factory, title: "Battery & EV Makers", description: "Prove responsible material sourcing and full lifecycle traceability on one passport, meeting regulatory mandates and lifting the resale value of every pack they build.", assetTypes: ["Battery Passports", "Material Proofs", "Compliance Records"] },
      { icon: Recycling, title: "Second-Life & Recyclers", description: "Read a verified capacity and provenance record before repurposing a pack, pricing residual value on evidence and proving the origin of recovered materials.", assetTypes: ["Residual Value Records", "Second-Life Assets", "Recovery Proofs"] },
      { icon: Landmark, title: "Regulators", description: "Query one verified battery history from raw material to recycling, replacing fragmented records with a single passport that evidences material and lifecycle compliance.", assetTypes: ["Lifecycle Audits", "Material Compliance", "Recycling Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging legacy PLM and materials systems or capturing signed readings from battery management systems, Cerulea routes both into one shared passport.",
    tracks: [
      {
        title: "Track A: Enterprise PLM Bridging",
        description:
          "For battery and vehicle makers on legacy PLM and materials systems. Existing sourcing and build events are translated into passport records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy PLM / MES", sublabel: "Maker Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Battery Passport Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Battery Telemetry Capture",
        description:
          "For battery management systems in the field. Each BMS signs a state-of-health reading and routes it directly to the passport through its device wallet.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "BMS / Telematics", sublabel: "In-Field Battery", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Health Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Passport Record", icon: Zap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a battery passport network with NFT identity, material provenance, state-of-health records, and second-life transfer from scratch requires specialised engineers and long system integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Passport & Lifecycle Rules",
      ruleCount: 52,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects lifecycle traceability benchmarks. Writing custom ERC-721 passport logic, integrating materials and BMS data feeds, and shipping a second-life transfer flow for an average network takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your passport and lifecycle rules into pre-audited WebAssembly binaries and provisions the shared passport ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const automotiveManufacturingItems: ExtraCaseItem[] = [
  {
    label: "Auto parts provenance and counterfeit prevention across global supply chain",
    href: "/solutions/use-case/auto-parts-provenance-and-counterfeit-prevention-across-global-supply",
    description: "Trace every part from Tier-2 to vehicle.",
    icon: ShieldCheck,
    category: "ENTERPRISE",
    tags: ["Automotive", "Supply Chain"],
    industry: INDUSTRY,
  },
  {
    label: "Vehicle identity and history record (VIN to blockchain)",
    href: "/solutions/use-case/vehicle-identity-and-history-record-vin-to-blockchain",
    description: "Tamper-evident VIN history buyers can verify instantly.",
    icon: Car,
    category: "ENTERPRISE",
    tags: ["Automotive", "Provenance"],
    industry: INDUSTRY,
  },
  {
    label: "Warranty claim verification with parts authenticity check",
    href: "/solutions/use-case/warranty-claim-verification-with-parts-authenticity-check",
    description: "Verify warranty and part before the claim.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Automotive", "Warranty"],
    industry: INDUSTRY,
  },
  {
    label: "Just-in-time supplier delivery performance tracking",
    href: "/solutions/use-case/just-in-time-supplier-delivery-performance-tracking",
    description: "Verified delivery timestamps and cross-plant supplier scorecards.",
    icon: Truck,
    category: "ENTERPRISE",
    tags: ["Manufacturing", "Supply Chain"],
    industry: INDUSTRY,
  },
  {
    label: "Recall campaign management and affected vehicle owner notification",
    href: "/solutions/use-case/recall-campaign-management-and-affected-vehicle-owner-notification",
    description: "Name affected vehicles and prove owner notification.",
    icon: Radio,
    category: "ENTERPRISE",
    tags: ["Automotive", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Battery passport for electric vehicle traceability and second-life tracking",
    href: "/solutions/use-case/battery-passport-for-electric-vehicle-traceability-and-second-life-tra",
    description: "Verified battery history from material to second life.",
    icon: Zap,
    category: "ENTERPRISE",
    tags: ["EV", "Sustainability"],
    industry: INDUSTRY,
  },
]
