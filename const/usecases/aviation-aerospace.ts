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

const INDUSTRY = "Aviation & Aerospace"

export const aviationAerospaceCases: CaseEntry[] = [
  {
    slug: "aircraft-parts-provenance-and-airworthiness-certification",
    icon: Plane,
    eyebrow: "Airworthiness Provenance Engine",
    headline1: "Trust every part.",
    headline2: "Prove every install.",
    heroDescription:
      "Hold a private aviation parts chain where OEM attestation, custody, and credentialed maintenance records live on one Traceability Ledger. Device Attestation and the Evidence Chain make counterfeit parts detectable at receiving, while the Quality and Recall Ledger pushes airworthiness directive alerts to the exact holders.",
    heroCta: "Deploy Airworthiness Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a fragmented maintenance paper trail into a continuous, tamper-evident part genealogy.",
    mechanics: [
      { title: "OEM Attestation Anchor", description: "Bind each part to its manufacturer at birth. The OEM signs a provenance record on the Traceability Ledger, so a component carries a cryptographic origin claim that a counterfeit cannot forge." },
      { title: "Receiving Gate Check", description: "Stop unapproved parts before installation. Device Attestation verifies a part's signed identity at goods-in, and a component with no valid OEM chain is rejected instead of entering the hangar." },
      { title: "Credentialed Maintenance Log", description: "Record who touched what. Every inspection and repair is written to the Evidence Chain under the technician's verified credential, building a maintenance history no clipboard can lose." },
      { title: "Airworthiness Directive Alerts", description: "Reach the right holders instantly. When the Quality and Recall Ledger flags a suspect lot, alerts route to every current custodian of an affected part rather than a stale mailing list." },
      { title: "Instant Investigation Readout", description: "Reconstruct history in minutes. During a safety event, an investigator queries the ledger for a part's full custody and repair genealogy instead of chasing scattered archives." },
      { title: "Cross-Operator Custody", description: "Preserve the record across owners. A part's provenance follows it through resale, lease return, and teardown, so its lineage survives every transfer between operators and MROs." },
    ],
    lifecycleTitle: "The Airworthiness Lifecycle",
    lifecycleSubtitle:
      "Follow a single component from OEM manufacture through receiving, maintenance, and a regulator's safety investigation.",
    lifecycleSteps: [
      {
        label: "OEM Provenance Mint",
        description:
          "The manufacturer registers a new part and signs its origin. The contract anchors the part number, serial, batch, and material certificate as the immutable head of the chain.",
        icon: Factory,
        logFilename: "cerulea_airworthiness.log",
        logLines: [
          { text: "[SYS] Initializing Part Provenance Manifest...", time: "07:11:40", tone: "default" },
          { text: "[CMD] mintPart { pn: \"7A21-4471\", serial: \"SN88213\", oem: \"OEM_0x41\" }", time: "07:11:40", tone: "primary" },
          { text: "[AUTH] Verifying OEM attestation signature...", time: "07:11:41", tone: "secondary" },
          { text: "[OK] Part SN88213 anchored at block 5120844.", time: "07:11:41", tone: "success" },
        ],
      },
      {
        label: "Receiving Verification",
        description:
          "The part arrives at an MRO store. Device Attestation checks its signed identity against the OEM chain before the part is accepted into inventory.",
        icon: ShieldCheck,
        logFilename: "cerulea_airworthiness.log",
        logLines: [
          { text: "[SYS] Goods-in scan for SN88213...", time: "10:34:02", tone: "default" },
          { text: "[CMD] verifyAttestation(SN88213)", time: "10:34:02", tone: "primary" },
          { text: "[AUTH] Matching device signature to OEM root...", time: "10:34:03", tone: "secondary" },
          { text: "[OK] Provenance intact. Part cleared for stock.", time: "10:34:03", tone: "success" },
        ],
      },
      {
        label: "Maintenance Anchor",
        description:
          "A credentialed technician records an inspection. The Evidence Chain seals the task, the finding, and the technician credential to the part's history.",
        icon: FileCheck,
        logFilename: "cerulea_airworthiness.log",
        logLines: [
          { text: "[SYS] Recording maintenance task on SN88213...", time: "14:07:55", tone: "default" },
          { text: "[CMD] logTask(SN88213, task: \"BORESCOPE\", tech: \"LIC_2290\")", time: "14:07:55", tone: "primary" },
          { text: "[SYS] Credential validated. Sealing to Evidence Chain...", time: "14:07:56", tone: "default" },
          { text: "[OK] Task anchored. History length now 6 events.", time: "14:07:56", tone: "success" },
        ],
      },
      {
        label: "Investigation Readout",
        description:
          "A regulator opens a safety inquiry. The ledger returns the complete genealogy of the part and every downstream holder in a single query.",
        icon: Search,
        logFilename: "cerulea_airworthiness.log",
        logLines: [
          { text: "[SYS] Investigator query for part SN88213...", time: "16:52:19", tone: "default" },
          { text: "[CMD] reconstructHistory(SN88213)", time: "16:52:19", tone: "primary" },
          { text: "[SYS] Assembling 6-event custody and repair chain...", time: "16:52:20", tone: "default" },
          { text: "[OK] Full genealogy returned. Chain intact from OEM.", time: "16:52:20", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes airworthiness into modular contracts. Each layer mints origin, gates receiving, seals maintenance, and exposes genealogy without any single MRO or operator owning the record.",
    layers: [
      {
        title: "Part Registry",
        subtitle: "The Origin Anchor",
        icon: Plane,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Origin Anchor",
          description:
            "The foundational data layer. It mints a unique part identity at the OEM and stores the immutable link to serial, batch, material certificate, and manufacturer signature that every later record points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PartRegistry {\n  struct Part {\n    address oem;\n    bytes32 serial;\n    bytes32 batch;\n    bytes32 materialCert;\n    bool grounded;\n  }\n\n  mapping(bytes32 => Part) public parts;\n\n  function mintPart(bytes32 id, bytes32 serial, bytes32 batch) external onlyOem {\n    parts[id] = Part(msg.sender, serial, batch, 0, false);\n  }\n}",
        simAction: "Simulate Part Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading OEM attestation for PN 7A21-4471...", tone: "default" },
          { text: "Hashing material certificate...", tone: "default" },
          { text: "Locking serial SN88213 to manufacturer root...", tone: "default" },
          { text: "Writing part identity to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Part SN88213 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Device Attestation",
        subtitle: "The Receiving Gate",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Receiving Gate",
          description:
            "Blocks counterfeits at goods-in. It challenges an incoming part's signed identity against the OEM root and rejects any component whose attestation cannot be verified before it reaches inventory.",
          platformFunction: "Custody & Verification",
        },
        codeSnippet:
          "function verifyAttestation(bytes32 id, bytes calldata sig) external view returns (bool) {\n    Part memory p = parts[id];\n    require(p.oem != address(0), \"Unknown part\");\n    return _recover(id, sig) == p.oem;\n}",
        simAction: "Simulate Receiving Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning inbound part SN88213 at store...", tone: "default" },
          { text: "Challenging device signature...", tone: "default" },
          { text: "Recovering signer against OEM root...", tone: "default" },
          { text: "Signature matches manufacturer key...", tone: "default" },
          { text: "[SUCCESS] Attestation valid. Part accepted.", tone: "success" },
        ],
      },
      {
        title: "Evidence Chain",
        subtitle: "The Maintenance Seal",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Maintenance Seal",
          description:
            "Anchors every inspection and repair by the technician's verified credential. The full work record stays linked to the part, so a maintenance history can never silently vanish between shops.",
          platformFunction: "Provenance & Records",
        },
        codeSnippet:
          "function logTask(bytes32 id, bytes32 task, bytes32 credential) external onlyLicensed(credential) {\n    history[id].push(Event(task, credential, msg.sender, block.timestamp));\n    emit TaskLogged(id, task, credential);\n}",
        simAction: "Simulate Maintenance Log",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting borescope inspection result...", tone: "default" },
          { text: "Validating technician licence LIC_2290...", tone: "default" },
          { text: "Sealing task to part history...", tone: "default" },
          { text: "Appending event to Evidence Chain...", tone: "default" },
          { text: "[SUCCESS] Maintenance task anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Recall Ledger",
        subtitle: "The Directive Router",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Directive Router",
          description:
            "The Quality and Recall Ledger. When a suspect lot is flagged, it walks the custody graph and routes an airworthiness directive to every current holder of an affected part, closing the gap paper alerts leave open.",
          platformFunction: "Quality & Recall",
        },
        codeSnippet:
          "function raiseDirective(bytes32 batch, string calldata ad) external onlyRegulator {\n    bytes32[] memory affected = partsInBatch[batch];\n    for (uint256 i = 0; i < affected.length; i++) {\n        emit Directive(affected[i], holderOf[affected[i]], ad);\n    }\n}",
        simAction: "Simulate Directive Alert",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Regulator flags suspect batch BATCH_44...", tone: "default" },
          { text: "Resolving current holders of 38 parts...", tone: "default" },
          { text: "Composing airworthiness directive AD-2026-11...", tone: "default" },
          { text: "Routing alerts to every custodian...", tone: "default" },
          { text: "[SUCCESS] Directive delivered to all holders.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Airworthiness provenance is a horizontal capability. Here is how different aviation actors put the shared parts chain to work.",
    sectors: [
      { icon: Factory, title: "OEMs & Part Makers", description: "Sign a provenance record at manufacture so genuine parts carry an unforgeable origin, protecting brand and safety reputation while making grey-market counterfeits detectable at every downstream receiving dock.", assetTypes: ["Part Serials", "Material Certificates", "OEM Attestations"] },
      { icon: Building2, title: "Airlines & MROs", description: "Verify each component at goods-in and record every maintenance task under a credentialed technician, cutting counterfeit exposure and turning a scattered paper trail into an instant, auditable history.", assetTypes: ["Maintenance Records", "Receiving Checks", "Custody Transfers"] },
      { icon: Landmark, title: "Aviation Regulators", description: "Reconstruct the complete genealogy of any part during a safety investigation in minutes and push airworthiness directives directly to current holders instead of broadcasting to stale distribution lists.", assetTypes: ["Investigation Trails", "Directive Registries", "Compliance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an OEM ERP and MRO maintenance system or capturing part scans from hangar-floor devices, Cerulea routes both into one shared parts chain.",
    tracks: [
      {
        title: "Track A: OEM & MRO System Bridging",
        description:
          "For manufacturers and MROs on legacy ERP and maintenance software. Existing part and work-order events are translated into signed on-chain provenance records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy ERP / MRO", sublabel: "Maintenance Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Aviation Parts Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Hangar-Floor Device Capture",
        description:
          "For receiving clerks and technicians on ruggedized devices. A signing app attests each part scan and maintenance task from a device wallet and routes it straight to the ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Scanner / Device Wallet", sublabel: "Receiving & Tech Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Provenance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Part Record", icon: Plane, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an aviation parts chain with OEM attestation, receiving gates, credentialed maintenance logs, and directive routing from scratch requires safety-domain engineers and long consortium integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Provenance & Recall Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects aviation safety-system integration benchmarks. Wiring each OEM and MRO system together, building custom attestation and directive-routing logic, and passing airworthiness data governance takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your provenance and recall rules into pre-audited WebAssembly binaries and provisions the shared parts ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "export-control-compliance-for-dual-use-technology-components",
    icon: Scale,
    eyebrow: "Export Control Settlement Layer",
    headline1: "Verify every end user.",
    headline2: "Release against licence.",
    heroDescription:
      "Anchor the export licence and end-user verification as a checked record before any dual-use component ships. Compliance Attestations and the DID and VC Ledger hold each approval, and Audit Logs preserve a defensible trail for every export decision.",
    heroCta: "Deploy Compliance Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manual export review into a gated, evidence-backed release that never ships without a valid licence.",
    mechanics: [
      { title: "Licence Precondition", description: "Block release until the paperwork checks out. A shipment cannot move until a valid export licence is anchored on-chain, so a missing or expired licence stops the transaction by default." },
      { title: "End-User Verification", description: "Confirm who actually receives the goods. The DID and VC Ledger binds a verified end-user credential to the order, making an undisclosed or substituted recipient detectable before dispatch." },
      { title: "Compliance Attestation", description: "Capture the officer's decision as evidence. Each approval is recorded as a Compliance Attestation signed by the responsible reviewer, turning a judgement call into a cryptographic record." },
      { title: "Immutable Audit Trail", description: "Preserve the full reasoning. Audit Logs seal every check, document, and sign-off, so a later regulator inquiry reads a complete, ordered decision history instead of reconstructed emails." },
      { title: "Licence Expiry Enforcement", description: "Prevent stale approvals. The contract reads the licence validity window and refuses release once it lapses, closing the gap where an old authorisation is reused past its term." },
      { title: "Penalty Exposure Control", description: "Make violations structurally hard. Because release is gated on verified licence and end user, the class of error that draws severe penalties is prevented at the protocol level rather than caught in audit." },
    ],
    lifecycleTitle: "The Export Decision Lifecycle",
    lifecycleSubtitle:
      "Follow a dual-use shipment from licence anchoring through end-user checks to a gated, fully logged release.",
    lifecycleSteps: [
      {
        label: "Licence Anchoring",
        description:
          "The exporter anchors the export licence for the order. The contract records the licence number, jurisdiction, and validity window as a precondition to any release.",
        icon: ScrollText,
        logFilename: "cerulea_exportcontrol.log",
        logLines: [
          { text: "[SYS] Registering export licence for order OX-7741...", time: "08:41:12", tone: "default" },
          { text: "[CMD] anchorLicence { id: \"EL-2026-338\", exp: \"2026-12-31\" }", time: "08:41:12", tone: "primary" },
          { text: "[AUTH] Validating issuing authority signature...", time: "08:41:13", tone: "secondary" },
          { text: "[OK] Licence anchored. Release gate armed.", time: "08:41:13", tone: "success" },
        ],
      },
      {
        label: "End-User Verification",
        description:
          "The compliance team verifies the declared end user. The DID and VC Ledger checks the recipient credential and binds it to the order.",
        icon: Fingerprint,
        logFilename: "cerulea_exportcontrol.log",
        logLines: [
          { text: "[SYS] Verifying declared end user for OX-7741...", time: "11:05:44", tone: "default" },
          { text: "[CMD] verifyEndUser(order: OX-7741, did: \"did:cer:9f2\")", time: "11:05:44", tone: "primary" },
          { text: "[AUTH] Resolving verifiable credential chain...", time: "11:05:45", tone: "secondary" },
          { text: "[OK] End user confirmed and bound to order.", time: "11:05:45", tone: "success" },
        ],
      },
      {
        label: "Compliance Sign-Off",
        description:
          "The reviewing officer signs the approval. A Compliance Attestation is written and every supporting document is sealed into the Audit Logs.",
        icon: FileCheck,
        logFilename: "cerulea_exportcontrol.log",
        logLines: [
          { text: "[SYS] Awaiting officer sign-off on OX-7741...", time: "13:52:07", tone: "default" },
          { text: "[CMD] attestApproval(OX-7741, officer: \"CO_118\")", time: "13:52:07", tone: "primary" },
          { text: "[SYS] Sealing checks and documents to Audit Logs...", time: "13:52:08", tone: "default" },
          { text: "[OK] Attestation recorded. Decision defensible.", time: "13:52:08", tone: "success" },
        ],
      },
      {
        label: "Gated Release",
        description:
          "The shipment is released only when licence and end user both hold. The contract confirms every precondition before it clears dispatch.",
        icon: ShieldCheck,
        logFilename: "cerulea_exportcontrol.log",
        logLines: [
          { text: "[SYS] Release request for order OX-7741...", time: "15:20:33", tone: "default" },
          { text: "[CMD] releaseShipment(OX-7741)", time: "15:20:33", tone: "primary" },
          { text: "[AUTH] Confirming valid licence and bound end user...", time: "15:20:34", tone: "secondary" },
          { text: "[OK] Preconditions met. Shipment cleared.", time: "15:20:34", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes export control into modular contracts. Each layer anchors licences, verifies end users, attests approvals, and seals the trail so no dual-use component ships outside policy.",
    layers: [
      {
        title: "Licence Vault",
        subtitle: "The Release Precondition",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Release Precondition",
          description:
            "The gate root. It holds the export licence, its jurisdiction, and validity window, and exposes a single boolean the release contract must satisfy before any dual-use component can move.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract LicenceVault {\n  struct Licence {\n    bytes32 authority;\n    uint256 expiry;\n    bool revoked;\n  }\n\n  mapping(bytes32 => Licence) public licences;\n\n  function isValid(bytes32 id) public view returns (bool) {\n    Licence memory l = licences[id];\n    return !l.revoked && block.timestamp <= l.expiry;\n  }\n}",
        simAction: "Simulate Licence Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading export licence EL-2026-338...", tone: "default" },
          { text: "Validating issuing authority signature...", tone: "default" },
          { text: "Recording jurisdiction and expiry window...", tone: "default" },
          { text: "Arming release gate for order OX-7741...", tone: "default" },
          { text: "[SUCCESS] Licence anchored and enforceable.", tone: "success" },
        ],
      },
      {
        title: "End-User Registry",
        subtitle: "The Recipient Proof",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Recipient Proof",
          description:
            "The DID and VC Ledger. It resolves the declared end user's verifiable credential and binds it to the order, so a substituted or undisclosed recipient cannot pass the release check.",
          platformFunction: "Custody & Verification",
        },
        codeSnippet:
          "function verifyEndUser(bytes32 order, bytes32 did, bytes calldata vc) external {\n    require(vcLedger.verify(did, vc), \"Invalid credential\");\n    boundUser[order] = did;\n    emit EndUserBound(order, did);\n}",
        simAction: "Simulate End-User Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Resolving declared end user did:cer:9f2...", tone: "default" },
          { text: "Verifying credential chain...", tone: "default" },
          { text: "Checking against denied-party set...", tone: "default" },
          { text: "Binding recipient to order OX-7741...", tone: "default" },
          { text: "[SUCCESS] End user verified and bound.", tone: "success" },
        ],
      },
      {
        title: "Attestation Log",
        subtitle: "The Decision Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Decision Seal",
          description:
            "Compliance Attestations plus Audit Logs. It records the reviewing officer's signed approval and seals every supporting document, turning each export decision into a defensible, ordered record.",
          platformFunction: "Provenance & Attestation",
        },
        codeSnippet:
          "function attestApproval(bytes32 order, bytes32 officer, bytes32 docBundle) external onlyOfficer {\n    attestations[order] = Attestation(officer, docBundle, block.timestamp);\n    emit Approved(order, officer, docBundle);\n}",
        simAction: "Simulate Compliance Sign-Off",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Collecting supporting documents for OX-7741...", tone: "default" },
          { text: "Hashing document bundle...", tone: "default" },
          { text: "Recording officer CO_118 approval...", tone: "default" },
          { text: "Sealing decision to Audit Logs...", tone: "default" },
          { text: "[SUCCESS] Attestation recorded, trail immutable.", tone: "success" },
        ],
      },
      {
        title: "Release Gate",
        subtitle: "The Policy Enforcer",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Policy Enforcer",
          description:
            "The final executor. It refuses to clear a shipment unless the licence is valid, the end user is bound, and an attestation exists, making an out-of-policy export structurally impossible.",
          platformFunction: "Enforcement & Settlement",
        },
        codeSnippet:
          "function releaseShipment(bytes32 order) external {\n    require(vault.isValid(licenceOf[order]), \"No valid licence\");\n    require(boundUser[order] != 0, \"End user unverified\");\n    require(attestations[order].officer != 0, \"No sign-off\");\n    emit Released(order, block.timestamp);\n}",
        simAction: "Simulate Gated Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Release requested for order OX-7741...", tone: "default" },
          { text: "Confirming licence still valid...", tone: "default" },
          { text: "Confirming bound end user...", tone: "default" },
          { text: "Confirming officer attestation present...", tone: "default" },
          { text: "[SUCCESS] Preconditions met, shipment cleared.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Gated export control is a horizontal capability. Here is how different actors put the licence-backed release layer to work.",
    sectors: [
      { icon: Factory, title: "Aerospace Manufacturers", description: "Gate every dual-use component release on a valid licence and verified end user, so production can move fast while a defensible attestation is captured automatically for each controlled shipment.", assetTypes: ["Controlled Shipments", "Export Licences", "End-User Bindings"] },
      { icon: Shield, title: "Defense Suppliers", description: "Prove that no restricted item ever left without authorization by holding an ordered, sealed record of every check and sign-off, cutting the penalty exposure that manual review leaves open.", assetTypes: ["Compliance Attestations", "Audit Trails", "Denied-Party Checks"] },
      { icon: Landmark, title: "Customs & Regulators", description: "Query an immutable decision history for any export instead of requesting reconstructed paperwork, confirming that licence and end-user obligations were satisfied at the moment of release.", assetTypes: ["Decision Histories", "Licence Registries", "Inspection Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a trade-compliance ERP or capturing officer sign-offs from a review console, Cerulea routes both into one gated release record.",
    tracks: [
      {
        title: "Track A: Trade-Compliance System Bridging",
        description:
          "For exporters on legacy trade and ERP compliance systems. Existing licence and order records are translated into on-chain preconditions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Trade / ERP", sublabel: "Compliance Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Licence Hashing & Binding", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Export Control Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Compliance Officer Sign-Off",
        description:
          "For reviewing officers on a decision console. A signing app records each attestation from an officer wallet and routes the sealed approval directly to the ledger.",
        connectorLabels: ["OFFICER SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Review Console / Wallet", sublabel: "Compliance Officers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Decision Record", icon: Scale, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an export-control gate with licence enforcement, end-user verification, attestation, and an immutable audit trail from scratch requires trade-compliance engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Licence & Verification Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects trade-compliance integration benchmarks. Building custom licence-enforcement logic, wiring end-user verification, and shipping an immutable audit trail for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your licence and verification rules into pre-audited WebAssembly binaries and provisions the gated release ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "supplier-quality-audit-history-shared-across-oems",
    icon: FileCheck,
    eyebrow: "Shared Audit Settlement Layer",
    headline1: "Audit once.",
    headline2: "Trusted by many.",
    heroDescription:
      "Publish a supplier's verified audit results to participating OEMs on a shared network so one recent audit replaces many duplicate ones. Compliance Attestations record each result, and the DID and VC Ledger with Role-Based Access Control governs exactly who reads it.",
    heroCta: "Deploy Shared Audit Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn repeated, siloed supplier audits into one shared, permissioned, always-current record.",
    mechanics: [
      { title: "Single Audit Publication", description: "Record a result once. An accredited auditor writes a supplier's verified outcome to the shared network, and participating OEMs read that same result instead of scheduling their own." },
      { title: "Attested Findings", description: "Bind evidence to the verdict. Compliance Attestations capture each finding, corrective action, and closure under the auditor's signature, so a shared result carries provable substance." },
      { title: "Role-Based Access", description: "Show the right OEM the right slice. Role-Based Access Control governs read scope, so a supplier exposes an audit to approved customers without publishing it to the whole network." },
      { title: "Credentialed Auditors", description: "Trust the source. The DID and VC Ledger verifies the auditor's accreditation before a result is accepted, so a shared record only ever originates from a qualified assessor." },
      { title: "Currency Enforcement", description: "Keep evidence fresh. Each audit carries a validity window, and the network flags a result approaching expiry so OEMs never rely on quality evidence that has gone stale." },
      { title: "Duplicate Elimination", description: "Cut the redundant burden. Because multiple OEMs consume one recent shared audit, the repeated on-site assessments that exhaust suppliers and OEM quality teams fall away." },
    ],
    lifecycleTitle: "The Shared Audit Lifecycle",
    lifecycleSubtitle:
      "Follow a single supplier audit from an accredited assessment through permissioned sharing to reuse by several OEMs.",
    lifecycleSteps: [
      {
        label: "Auditor Accreditation",
        description:
          "An assessor is verified before work begins. The DID and VC Ledger confirms the auditor's accreditation credential and authorises them to publish results.",
        icon: Fingerprint,
        logFilename: "cerulea_supplieraudit.log",
        logLines: [
          { text: "[SYS] Verifying auditor accreditation...", time: "08:15:04", tone: "default" },
          { text: "[CMD] verifyCredential(did: \"did:cer:aud:71\")", time: "08:15:04", tone: "primary" },
          { text: "[AUTH] Resolving accreditation issuer chain...", time: "08:15:05", tone: "secondary" },
          { text: "[OK] Auditor authorised to publish.", time: "08:15:05", tone: "success" },
        ],
      },
      {
        label: "Result Publication",
        description:
          "The auditor writes the verified outcome. Compliance Attestations record findings, corrective actions, and the validity window for supplier SUP_204.",
        icon: FileCheck,
        logFilename: "cerulea_supplieraudit.log",
        logLines: [
          { text: "[SYS] Publishing audit result for SUP_204...", time: "12:33:41", tone: "default" },
          { text: "[CMD] publishAudit(SUP_204, grade: \"PASS\", valid: \"18M\")", time: "12:33:41", tone: "primary" },
          { text: "[SYS] Sealing findings as Compliance Attestations...", time: "12:33:42", tone: "default" },
          { text: "[OK] Result AUD_9920 anchored on-chain.", time: "12:33:42", tone: "success" },
        ],
      },
      {
        label: "Access Grant",
        description:
          "The supplier grants read scope to approved customers. Role-Based Access Control opens the result to the named OEMs and no one else.",
        icon: Lock,
        logFilename: "cerulea_supplieraudit.log",
        logLines: [
          { text: "[SYS] Supplier SUP_204 setting audit visibility...", time: "14:08:19", tone: "default" },
          { text: "[CMD] grantRead(AUD_9920, [\"OEM_A\", \"OEM_B\", \"OEM_C\"])", time: "14:08:19", tone: "primary" },
          { text: "[AUTH] Applying role policy to shared record...", time: "14:08:20", tone: "secondary" },
          { text: "[OK] 3 OEMs granted scoped read access.", time: "14:08:20", tone: "success" },
        ],
      },
      {
        label: "Cross-OEM Reuse",
        description:
          "Several OEMs read the same recent audit. Each qualifies the supplier from one shared result rather than commissioning a duplicate assessment.",
        icon: Users,
        logFilename: "cerulea_supplieraudit.log",
        logLines: [
          { text: "[SYS] OEM_B requesting audit AUD_9920...", time: "16:41:57", tone: "default" },
          { text: "[CMD] readAudit(AUD_9920, viewer: \"OEM_B\")", time: "16:41:57", tone: "primary" },
          { text: "[SYS] Checking role scope and validity window...", time: "16:41:58", tone: "default" },
          { text: "[OK] Current result returned. Duplicate audit avoided.", time: "16:41:58", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes shared supplier audits into modular contracts. Each layer accredits the assessor, attests the result, scopes access, and serves current evidence without any OEM owning the record.",
    layers: [
      {
        title: "Auditor Registry",
        subtitle: "The Accreditation Root",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accreditation Root",
          description:
            "The DID and VC Ledger. It verifies an assessor's accreditation credential before any result is accepted, so every shared audit originates from a qualified, provably credentialed source.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AuditorRegistry {\n  mapping(bytes32 => bool) public accredited;\n\n  function verifyCredential(bytes32 did, bytes calldata vc) external {\n    require(vcLedger.verify(did, vc), \"Invalid credential\");\n    accredited[did] = true;\n    emit AuditorAccredited(did);\n  }\n}",
        simAction: "Simulate Accreditation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading auditor credential did:cer:aud:71...", tone: "default" },
          { text: "Resolving accreditation issuer chain...", tone: "default" },
          { text: "Checking scope of accreditation...", tone: "default" },
          { text: "Marking auditor authorised to publish...", tone: "default" },
          { text: "[SUCCESS] Auditor accredited on-chain.", tone: "success" },
        ],
      },
      {
        title: "Attestation Store",
        subtitle: "The Result Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Result Seal",
          description:
            "Compliance Attestations. It records a supplier's verified outcome with findings, corrective actions, and a validity window, turning an audit into a signed record that many OEMs can trust.",
          platformFunction: "Provenance & Attestation",
        },
        codeSnippet:
          "function publishAudit(bytes32 supplier, bytes32 grade, uint256 validUntil) external onlyAccredited {\n    audits[nextId] = Audit(supplier, grade, validUntil, msg.sender);\n    emit AuditPublished(nextId, supplier, grade);\n    nextId++;\n}",
        simAction: "Simulate Result Publication",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Collecting findings for supplier SUP_204...", tone: "default" },
          { text: "Recording corrective actions and closures...", tone: "default" },
          { text: "Setting 18-month validity window...", tone: "default" },
          { text: "Sealing result to attestation store...", tone: "default" },
          { text: "[SUCCESS] Audit AUD_9920 published on-chain.", tone: "success" },
        ],
      },
      {
        title: "Access Governor",
        subtitle: "The Read Scope",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Read Scope",
          description:
            "Role-Based Access Control. It lets the supplier expose an audit to named OEMs only, so quality evidence is shared with approved customers without becoming public to the whole network.",
          platformFunction: "Access & Permissioning",
        },
        codeSnippet:
          "function grantRead(uint256 auditId, address[] calldata oems) external onlySupplier(auditId) {\n    for (uint256 i = 0; i < oems.length; i++) {\n        canRead[auditId][oems[i]] = true;\n    }\n    emit ReadGranted(auditId, oems.length);\n}",
        simAction: "Simulate Access Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Supplier SUP_204 selecting approved OEMs...", tone: "default" },
          { text: "Applying role policy to audit AUD_9920...", tone: "default" },
          { text: "Writing scoped read grants...", tone: "default" },
          { text: "Excluding all non-listed parties...", tone: "default" },
          { text: "[SUCCESS] Read access scoped to 3 OEMs.", tone: "success" },
        ],
      },
      {
        title: "Currency Guard",
        subtitle: "The Freshness Check",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Freshness Check",
          description:
            "The serving gate. It returns an audit only while it is inside its validity window and flags results nearing expiry, so an OEM never qualifies a supplier on stale quality evidence.",
          platformFunction: "Enforcement & Serving",
        },
        codeSnippet:
          "function readAudit(uint256 auditId, address viewer) external view returns (Audit memory) {\n    require(canRead[auditId][viewer], \"Not permitted\");\n    Audit memory a = audits[auditId];\n    require(block.timestamp <= a.validUntil, \"Audit expired\");\n    return a;\n}",
        simAction: "Simulate Cross-OEM Read",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "OEM_B requesting audit AUD_9920...", tone: "default" },
          { text: "Confirming viewer read scope...", tone: "default" },
          { text: "Checking result inside validity window...", tone: "default" },
          { text: "Returning current shared result...", tone: "default" },
          { text: "[SUCCESS] Duplicate audit avoided for OEM_B.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared supplier audits are a horizontal capability. Here is how different actors put the permissioned quality record to work.",
    sectors: [
      { icon: Building2, title: "Aerospace OEMs", description: "Qualify a supplier from one recent shared audit instead of dispatching a team for a redundant on-site assessment, freeing quality engineers while relying on evidence that stays current.", assetTypes: ["Shared Audit Reads", "Supplier Qualifications", "Corrective Actions"] },
      { icon: Boxes, title: "Component Suppliers", description: "Publish a single verified audit and expose it selectively to approved customers, ending the cycle of repeated visits from every OEM against largely the same standards.", assetTypes: ["Published Audits", "Access Grants", "Evidence Bundles"] },
      { icon: ShieldCheck, title: "Accreditation Bodies", description: "Anchor auditor accreditations and standard references so every shared result on the network is traceable to a qualified assessor working against a recognised specification.", assetTypes: ["Auditor Credentials", "Standard References", "Accreditation Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging OEM quality systems or capturing audit results from an assessor's field tablet, Cerulea routes both into one shared, permissioned record.",
    tracks: [
      {
        title: "Track A: OEM Quality System Bridging",
        description:
          "For OEMs on legacy supplier-quality management systems. Existing qualification records are translated into scoped on-chain reads through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy SQM / ERP", sublabel: "OEM Quality Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Access Scoping & Serving", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Audit Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Assessor Field Capture",
        description:
          "For accredited auditors on a field tablet. A signing app publishes each verified result from an auditor wallet and routes it directly to the shared ledger.",
        connectorLabels: ["AUDITOR SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Field Tablet / Wallet", sublabel: "Accredited Auditors", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Attestation Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Audit Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared supplier-audit network with accredited publication, role-based access, and currency enforcement from scratch requires quality-domain engineers and long multi-OEM alignment. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Audit & Access Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects multi-party quality-system integration benchmarks. Aligning several OEMs on a shared schema, building role-based access, and shipping currency enforcement takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your audit and access rules into pre-audited WebAssembly binaries and provisions the shared audit ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "launch-component-provenance-and-quality-certification",
    icon: Zap,
    eyebrow: "Launch Assurance Engine",
    headline1: "Certify every component.",
    headline2: "Clear it for integration.",
    heroDescription:
      "Trace every launch part from manufacture to integration across hundreds of vendors on one shared network. The Traceability Ledger, Device Attestation, and Quality and Recall Ledger block integration without verified test credentials, while the DID and VC Ledger binds each certificate to its part.",
    heroCta: "Deploy Launch Assurance Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fragmented paper test certificates into a gated, verifiable component genealogy across the vendor base.",
    mechanics: [
      { title: "Full Component Genealogy", description: "Trace a part end to end. The Traceability Ledger links manufacture, material lot, and every handoff, so a failure review can read a complete genealogy instead of stitching vendor records together." },
      { title: "Test Credential Binding", description: "Attach proof to the part. The DID and VC Ledger binds each test certificate to its component by digest, so an integration engineer confirms qualification from the record, not a filing cabinet." },
      { title: "Integration Gate", description: "Block unqualified parts. The Quality and Recall Ledger refuses integration for any component without verified test credentials, stopping a substandard part before it reaches the stack." },
      { title: "Lot Isolation", description: "Contain a bad batch. When a defect surfaces, the ledger isolates the exact suspect lot and every mission that consumed it, so future builds exclude that lot automatically." },
      { title: "Device-Attested Origin", description: "Prove the source. Device Attestation signs each part at manufacture, making origin substitution across a sprawling supply base cryptographically detectable at receiving." },
      { title: "Rapid Failure Readout", description: "Close investigations in days. A single query returns the complete component genealogy in about two hours, collapsing what once meant weeks of cross-vendor document chasing." },
    ],
    lifecycleTitle: "The Launch Assurance Lifecycle",
    lifecycleSubtitle:
      "Follow a single flight component from manufacture through test certification and a gated integration decision.",
    lifecycleSteps: [
      {
        label: "Component Manufacture",
        description:
          "A vendor produces and registers a part. Device Attestation signs its origin and the Traceability Ledger anchors the material lot as the head of its genealogy.",
        icon: Factory,
        logFilename: "cerulea_launchqa.log",
        logLines: [
          { text: "[SYS] Registering flight component at vendor VN_312...", time: "07:40:11", tone: "default" },
          { text: "[CMD] mintComponent { pn: \"LV-2201\", lot: \"LOT_77\", vendor: \"VN_312\" }", time: "07:40:11", tone: "primary" },
          { text: "[AUTH] Signing origin via Device Attestation...", time: "07:40:12", tone: "secondary" },
          { text: "[OK] Component CMP_5510 anchored at block 6021455.", time: "07:40:12", tone: "success" },
        ],
      },
      {
        label: "Test Certification",
        description:
          "The part passes qualification testing. The DID and VC Ledger binds the signed test certificate to the component by its digest.",
        icon: FlaskConical,
        logFilename: "cerulea_launchqa.log",
        logLines: [
          { text: "[SYS] Anchoring test certificate for CMP_5510...", time: "11:22:38", tone: "default" },
          { text: "[CMD] bindCert(CMP_5510, cert: \"VIBE_THERMAL_PASS\")", time: "11:22:38", tone: "primary" },
          { text: "[AUTH] Hashing certificate and sealing to part...", time: "11:22:39", tone: "secondary" },
          { text: "[OK] Test credential bound. Component qualified.", time: "11:22:39", tone: "success" },
        ],
      },
      {
        label: "Integration Gate",
        description:
          "The component reaches the assembly stack. The Quality and Recall Ledger checks for verified test credentials before integration is allowed.",
        icon: ShieldCheck,
        logFilename: "cerulea_launchqa.log",
        logLines: [
          { text: "[SYS] Integration request for CMP_5510...", time: "14:55:09", tone: "default" },
          { text: "[CMD] gateIntegration(CMP_5510)", time: "14:55:09", tone: "primary" },
          { text: "[AUTH] Confirming bound test credentials...", time: "14:55:10", tone: "secondary" },
          { text: "[OK] Credentials verified. Cleared for integration.", time: "14:55:10", tone: "success" },
        ],
      },
      {
        label: "Failure Genealogy",
        description:
          "An anomaly triggers a review. The ledger returns the full component genealogy and isolates the suspect lot across every affected mission.",
        icon: Search,
        logFilename: "cerulea_launchqa.log",
        logLines: [
          { text: "[SYS] Failure review opened for lot LOT_77...", time: "18:10:44", tone: "default" },
          { text: "[CMD] traceGenealogy(CMP_5510)", time: "18:10:44", tone: "primary" },
          { text: "[SYS] Isolating suspect lot across 4 missions...", time: "18:10:45", tone: "default" },
          { text: "[OK] Complete genealogy returned in 2 hours.", time: "18:10:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes launch assurance into modular contracts. Each layer signs origin, binds test credentials, gates integration, and traces genealogy without any single vendor controlling the record.",
    layers: [
      {
        title: "Component Registry",
        subtitle: "The Genealogy Root",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Genealogy Root",
          description:
            "The Traceability Ledger head. It mints a component identity at manufacture and stores the immutable link to vendor, material lot, and Device Attestation signature that the whole genealogy hangs from.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ComponentRegistry {\n  struct Component {\n    address vendor;\n    bytes32 lot;\n    bytes32 originSig;\n    bool qualified;\n  }\n\n  mapping(bytes32 => Component) public components;\n\n  function mintComponent(bytes32 id, bytes32 lot, bytes32 sig) external onlyVendor {\n    components[id] = Component(msg.sender, lot, sig, false);\n  }\n}",
        simAction: "Simulate Component Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading Device Attestation for PN LV-2201...", tone: "default" },
          { text: "Recording material lot LOT_77...", tone: "default" },
          { text: "Locking vendor VN_312 as origin...", tone: "default" },
          { text: "Writing component genealogy root...", tone: "default" },
          { text: "[SUCCESS] Component CMP_5510 registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Certificate Binder",
        subtitle: "The Test Proof",
        icon: FlaskConical,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Test Proof",
          description:
            "The DID and VC Ledger. It binds each qualification certificate to its component by digest, so an integration decision reads proof of passed testing directly from the part's record.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function bindCert(bytes32 id, bytes32 certHash, bytes calldata vc) external {\n    require(vcLedger.verify(issuerOf[certHash], vc), \"Invalid cert\");\n    certificates[id].push(certHash);\n    emit CertBound(id, certHash);\n}",
        simAction: "Simulate Certificate Bind",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting vibration and thermal test report...", tone: "default" },
          { text: "Computing digest of certificate...", tone: "default" },
          { text: "Verifying issuer credential...", tone: "default" },
          { text: "Binding certificate to CMP_5510...", tone: "default" },
          { text: "[SUCCESS] Test credential bound, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Integration Gate",
        subtitle: "The Qualification Enforcer",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Qualification Enforcer",
          description:
            "The Quality and Recall Ledger gate. It refuses to mark a component integrated unless verified test credentials are bound, so a single substandard part cannot silently enter the stack.",
          platformFunction: "Quality & Enforcement",
        },
        codeSnippet:
          "function gateIntegration(bytes32 id) external {\n    require(certificates[id].length > 0, \"No test credentials\");\n    require(!recalled[components[id].lot], \"Lot recalled\");\n    components[id].qualified = true;\n    emit ClearedForIntegration(id);\n}",
        simAction: "Simulate Integration Gate",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Integration requested for CMP_5510...", tone: "default" },
          { text: "Checking bound test credentials...", tone: "default" },
          { text: "Confirming lot LOT_77 not recalled...", tone: "default" },
          { text: "Marking component cleared...", tone: "default" },
          { text: "[SUCCESS] Component cleared for integration.", tone: "success" },
        ],
      },
      {
        title: "Genealogy Tracer",
        subtitle: "The Investigation Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Investigation Window",
          description:
            "The read gateway. It returns a component's complete genealogy and isolates a suspect lot across every mission that used it, so a failure review closes in days rather than weeks.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function traceGenealogy(bytes32 id) external view returns (Component memory, bytes32[] memory, bytes32[] memory) {\n    return (components[id], certificates[id], missionsUsingLot[components[id].lot]);\n}",
        simAction: "Simulate Failure Trace",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Opening failure review for lot LOT_77...", tone: "default" },
          { text: "Assembling full component genealogy...", tone: "default" },
          { text: "Isolating suspect lot across missions...", tone: "default" },
          { text: "Returning affected mission set...", tone: "default" },
          { text: "[SUCCESS] Genealogy returned, suspect lot isolated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Launch component assurance is a horizontal capability. Here is how different space actors put the shared certification ledger to work.",
    sectors: [
      { icon: Zap, title: "Launch Providers", description: "Gate integration on verified test credentials across hundreds of vendors, so a substandard component is stopped before assembly and a failure investigation reads a complete genealogy in hours.", assetTypes: ["Component Genealogies", "Integration Gates", "Suspect Lots"] },
      { icon: Boxes, title: "Space Suppliers", description: "Sign each part at manufacture and bind its test certificate to the record, proving qualification to every downstream integrator without shipping loose paper certificates.", assetTypes: ["Test Certificates", "Material Lots", "Origin Attestations"] },
      { icon: Landmark, title: "Mission Assurance Boards", description: "Read the full component genealogy during anomaly reviews, isolate a suspect lot across every affected mission, and exclude that lot from future builds automatically.", assetTypes: ["Failure Genealogies", "Lot Exclusions", "Assurance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging vendor MES and test-lab systems or capturing part scans from an integration bay, Cerulea routes both into one shared certification record.",
    tracks: [
      {
        title: "Track A: Vendor & Test-Lab Bridging",
        description:
          "For vendors and test labs on legacy MES and LIMS systems. Existing build and test records are translated into signed on-chain genealogy and certificates through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy MES / LIMS", sublabel: "Vendor & Lab Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Genealogy Hashing & Binding", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Launch Certification Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Integration-Bay Capture",
        description:
          "For integration engineers on the assembly floor. A signing app attests each part scan and gate check from a device wallet and routes it directly to the ledger.",
        connectorLabels: ["DEVICE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Bay Scanner / Wallet", sublabel: "Integration Engineers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Qualification Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Component Record", icon: Zap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a launch-assurance network with full genealogy, test-credential binding, and an integration gate across hundreds of vendors from scratch requires space-domain engineers and long supply-base onboarding. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Genealogy & Test Rules",
      ruleCount: 52,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects space supply-chain integration benchmarks. Onboarding hundreds of vendors, building custom genealogy and test-credential logic, and shipping an integration gate takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your genealogy and certification rules into pre-audited WebAssembly binaries and provisions the shared certification ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "satellite-spectrum-rights-and-orbital-slot-management",
    icon: Radio,
    eyebrow: "Spectrum Coordination Layer",
    headline1: "Anchor every filing.",
    headline2: "Settle priority in days.",
    heroDescription:
      "Anchor immutable priority dates on a private ITU coordination network so disputed filings stop gating launches. The Spectrum Registry and Provenance Notary record each submission, while Node Permissioning and Compliance Attestations track coordination milestones across member states.",
    heroCta: "Deploy Coordination Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn hand-coordinated spectrum filings across 193 states into anchored priority dates with cryptographic evidence.",
    mechanics: [
      { title: "Immutable Priority Dates", description: "Fix the clock at submission. The Spectrum Registry anchors a filing's priority date on submission, so an operator holds certainty on its position rather than waiting on manual reconciliation." },
      { title: "Notarized Filings", description: "Prove what was filed and when. The Provenance Notary seals each filing's contents by digest, so a later dispute is settled against a signed record instead of conflicting archives." },
      { title: "Coordination Milestones", description: "Track the process transparently. Compliance Attestations record each coordination step between administrations, giving every party the same live view of where a filing stands." },
      { title: "Permissioned Administrations", description: "Keep sovereignty intact. Node Permissioning grants each member state its own authorised node, so filings are contributed and read under national control on a shared network." },
      { title: "Conflict Detection", description: "Surface overlaps early. The registry flags competing filings against the same orbital slot and frequency, so coordination conflicts appear at submission rather than months later." },
      { title: "Dispute Evidence", description: "Resolve priority in days. Because every priority date and filing is cryptographically anchored, a disputed date is settled from evidence, so coordination stops holding up launch timelines." },
    ],
    lifecycleTitle: "The Coordination Lifecycle",
    lifecycleSubtitle:
      "Follow a single spectrum filing from submission through conflict detection to an evidence-backed priority settlement.",
    lifecycleSteps: [
      {
        label: "Filing Submission",
        description:
          "An administration submits a spectrum filing. The Spectrum Registry anchors an immutable priority date the moment the submission is recorded.",
        icon: Radio,
        logFilename: "cerulea_spectrum.log",
        logLines: [
          { text: "[SYS] Recording spectrum filing from ADMIN_IN...", time: "09:03:22", tone: "default" },
          { text: "[CMD] fileSlot { orbit: \"GEO_74E\", band: \"KU\", admin: \"ADMIN_IN\" }", time: "09:03:22", tone: "primary" },
          { text: "[AUTH] Stamping priority date at submission...", time: "09:03:23", tone: "secondary" },
          { text: "[OK] Filing FIL_2207 anchored. Priority fixed.", time: "09:03:23", tone: "success" },
        ],
      },
      {
        label: "Filing Notarization",
        description:
          "The filing contents are sealed. The Provenance Notary binds the submission's digest so its exact terms can be proven later.",
        icon: ScrollText,
        logFilename: "cerulea_spectrum.log",
        logLines: [
          { text: "[SYS] Notarizing filing FIL_2207 contents...", time: "09:14:50", tone: "default" },
          { text: "[CMD] notarize(FIL_2207, digest: \"0x9c1a...\")", time: "09:14:50", tone: "primary" },
          { text: "[SYS] Sealing submission terms to registry...", time: "09:14:51", tone: "default" },
          { text: "[OK] Filing sealed. Terms tamper-evident.", time: "09:14:51", tone: "success" },
        ],
      },
      {
        label: "Conflict Detection",
        description:
          "The registry checks for overlaps. Competing filings against the same slot and band are flagged for coordination between the administrations.",
        icon: Search,
        logFilename: "cerulea_spectrum.log",
        logLines: [
          { text: "[SYS] Scanning for slot overlaps on GEO_74E...", time: "10:41:08", tone: "default" },
          { text: "[CMD] detectConflict(FIL_2207)", time: "10:41:08", tone: "primary" },
          { text: "[SYS] Overlap found with earlier filing FIL_1980...", time: "10:41:09", tone: "default" },
          { text: "[OK] Coordination flagged between two administrations.", time: "10:41:09", tone: "success" },
        ],
      },
      {
        label: "Priority Settlement",
        description:
          "A dispute is resolved from evidence. The anchored priority dates settle precedence in days, and coordination milestones close on the record.",
        icon: Gavel,
        logFilename: "cerulea_spectrum.log",
        logLines: [
          { text: "[SYS] Resolving priority between FIL_1980 and FIL_2207...", time: "14:27:36", tone: "default" },
          { text: "[CMD] settlePriority([\"FIL_1980\", \"FIL_2207\"])", time: "14:27:36", tone: "primary" },
          { text: "[AUTH] Comparing cryptographic priority dates...", time: "14:27:37", tone: "secondary" },
          { text: "[OK] Earlier date prevails. Dispute resolved.", time: "14:27:37", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes spectrum coordination into modular contracts. Each layer anchors priority, notarizes filings, detects conflicts, and settles disputes while each administration keeps national control.",
    layers: [
      {
        title: "Spectrum Registry",
        subtitle: "The Priority Anchor",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Priority Anchor",
          description:
            "The foundational data layer. It stamps an immutable priority date on each filing at submission and records the orbital slot and frequency band, giving every operator certainty from the moment they file.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SpectrumRegistry {\n  struct Filing {\n    bytes32 admin;\n    bytes32 slot;\n    bytes32 band;\n    uint256 priorityDate;\n  }\n\n  mapping(bytes32 => Filing) public filings;\n\n  function fileSlot(bytes32 id, bytes32 slot, bytes32 band) external onlyAdmin {\n    filings[id] = Filing(adminOf[msg.sender], slot, band, block.timestamp);\n  }\n}",
        simAction: "Simulate Filing Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading filing from administration ADMIN_IN...", tone: "default" },
          { text: "Recording orbital slot GEO_74E and Ku band...", tone: "default" },
          { text: "Stamping priority date at submission...", tone: "default" },
          { text: "Writing filing to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Filing FIL_2207 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Provenance Notary",
        subtitle: "The Filing Seal",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Filing Seal",
          description:
            "Anchors a submission's exact terms by digest. The full technical filing stays off-chain, but any alteration breaks its hash, so a later coordination dispute can prove precisely what was submitted.",
          platformFunction: "Provenance & Notarization",
        },
        codeSnippet:
          "function notarize(bytes32 filingId, bytes32 digest) external onlyAdmin {\n    require(filings[filingId].priorityDate != 0, \"Unknown filing\");\n    sealedTerms[filingId] = digest;\n    emit FilingNotarized(filingId, digest);\n}",
        simAction: "Simulate Filing Notary",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting technical filing document...", tone: "default" },
          { text: "Computing digest of submission terms...", tone: "default" },
          { text: "Sealing digest to filing FIL_2207...", tone: "default" },
          { text: "Locking terms against alteration...", tone: "default" },
          { text: "[SUCCESS] Filing notarized, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Node Permissioning",
        subtitle: "The Sovereign Gate",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sovereign Gate",
          description:
            "Grants each member state its own authorised node. It governs who may file and read on the shared coordination network, so administrations contribute under national control rather than ceding it.",
          platformFunction: "Access & Permissioning",
        },
        codeSnippet:
          "function authorizeNode(bytes32 admin, address node) external onlyGovernor {\n    require(memberState[admin], \"Not a member\");\n    nodeOf[admin] = node;\n    emit NodeAuthorized(admin, node);\n}",
        simAction: "Simulate Node Authorization",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying member state ADMIN_IN...", tone: "default" },
          { text: "Provisioning sovereign coordination node...", tone: "default" },
          { text: "Applying filing and read permissions...", tone: "default" },
          { text: "Registering node under national control...", tone: "default" },
          { text: "[SUCCESS] Administration node authorized.", tone: "success" },
        ],
      },
      {
        title: "Priority Resolver",
        subtitle: "The Dispute Judge",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Dispute Judge",
          description:
            "The settlement executor. When filings conflict over a slot, it compares their cryptographic priority dates and returns precedence, resolving disputes in days so coordination no longer gates launches.",
          platformFunction: "Enforcement & Settlement",
        },
        codeSnippet:
          "function settlePriority(bytes32 a, bytes32 b) external view returns (bytes32) {\n    require(filings[a].slot == filings[b].slot, \"No overlap\");\n    return filings[a].priorityDate <= filings[b].priorityDate ? a : b;\n}",
        simAction: "Simulate Priority Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading conflicting filings on GEO_74E...", tone: "default" },
          { text: "Reading anchored priority dates...", tone: "default" },
          { text: "Comparing submission timestamps...", tone: "default" },
          { text: "Returning earlier filing as precedent...", tone: "default" },
          { text: "[SUCCESS] Priority dispute resolved on evidence.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Spectrum coordination is a horizontal capability. Here is how different actors put the anchored filing network to work.",
    sectors: [
      { icon: Landmark, title: "National Administrations", description: "File spectrum submissions under a sovereign node and hold an immutable priority date from the moment of submission, cutting the manual reconciliation that adds months to coordination.", assetTypes: ["Spectrum Filings", "Priority Dates", "Coordination Milestones"] },
      { icon: Radio, title: "Satellite Operators", description: "Gain certainty on filing dates from submission and resolve disputed priority in days with cryptographic evidence, so spectrum coordination stops delaying launch timelines.", assetTypes: ["Orbital Slots", "Frequency Bands", "Dispute Evidence"] },
      { icon: Globe, title: "Coordination Bodies", description: "Give every member state one live view of filing status and conflicts, replacing hand-coordinated exchanges across 193 states with a shared, permissioned record.", assetTypes: ["Conflict Flags", "Milestone Attestations", "Coordination Registries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a national spectrum management system or filing directly from an administration's coordination console, Cerulea routes both into one shared priority record.",
    tracks: [
      {
        title: "Track A: National System Bridging",
        description:
          "For administrations on legacy spectrum management systems. Existing filing records are translated into anchored on-chain priority dates through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Spectrum DB", sublabel: "National Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Priority Hashing & Stamping", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Coordination Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Administration Console Filing",
        description:
          "For coordinators on a sovereign node console. A signing app submits each filing from an administration wallet and routes the anchored priority date directly to the ledger.",
        connectorLabels: ["ADMIN SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Coordination Console", sublabel: "Administration Nodes", icon: Fingerprint, accent: false },
          { label: "Member-State Validators", sublabel: "Coordination Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Priority Record", icon: Radio, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a spectrum coordination network with anchored priority dates, notarized filings, sovereign nodes, and dispute settlement from scratch requires regulatory-domain engineers and long multilateral alignment. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Filing & Coordination Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects multilateral regulatory integration benchmarks. Aligning administrations on a shared filing schema, building priority-anchoring and notarization logic, and shipping sovereign node governance takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your filing and coordination rules into pre-audited WebAssembly binaries and provisions the shared coordination ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "space-debris-tracking-data-sharing-across-agencies",
    icon: Globe,
    eyebrow: "Orbital Situational Layer",
    headline1: "Share every track.",
    headline2: "See the whole sky.",
    heroDescription:
      "Share debris tracking across agencies on a private network with sovereign data contribution, so no single agency's blind spot raises collision risk. Oracle Feeds and the Traceability Ledger build a shared situational catalogue, while Node Permissioning and Audit Logs govern access.",
    heroCta: "Deploy Situational Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn separate national debris catalogues into one shared situational picture that no agency has to surrender control to build.",
    mechanics: [
      { title: "Shared Situational Catalogue", description: "Combine many sensors into one view. The Traceability Ledger merges debris tracks from every contributing agency into a shared catalogue, so no single blind spot leaves the picture incomplete." },
      { title: "Sovereign Contribution", description: "Contribute without ceding control. Each agency writes its tracks under its own permissioned node, so data is shared on the network while ownership and access stay with the source." },
      { title: "Oracle Track Feeds", description: "Stream live observations. Oracle Feeds ingest sensor and radar tracks continuously, keeping the catalogue current enough for collision avoidance rather than a periodic bulk exchange." },
      { title: "Multi-Source Conjunction", description: "Warn from the fullest picture. A conjunction assessment draws on many tracking sources at once, so collision avoidance decisions rest on the most complete data available." },
      { title: "Access Governance", description: "Control who reads what. Node Permissioning scopes visibility per agency and Audit Logs record every read, so sensitive tracks are shared under explicit, logged terms." },
      { title: "Provenance of Tracks", description: "Know each track's origin. Every observation carries the contributing sensor and time, so an analyst can weigh a conjunction warning against the provenance of the data behind it." },
    ],
    lifecycleTitle: "The Situational Awareness Lifecycle",
    lifecycleSubtitle:
      "Follow a single debris track from sensor ingestion through the shared catalogue to a multi-source conjunction warning.",
    lifecycleSteps: [
      {
        label: "Sensor Ingestion",
        description:
          "An agency's radar reports a debris track. Oracle Feeds ingest the observation with its sensor origin and timestamp into the network.",
        icon: Radio,
        logFilename: "cerulea_orbital.log",
        logLines: [
          { text: "[SYS] Ingesting debris track from AGENCY_EU radar...", time: "02:11:40", tone: "default" },
          { text: "[CMD] ingestTrack { obj: \"DEB_44219\", sensor: \"RDR_07\" }", time: "02:11:40", tone: "primary" },
          { text: "[AUTH] Attaching sensor origin and timestamp...", time: "02:11:41", tone: "secondary" },
          { text: "[OK] Track anchored to shared catalogue.", time: "02:11:41", tone: "success" },
        ],
      },
      {
        label: "Catalogue Merge",
        description:
          "The track joins the shared catalogue. The Traceability Ledger reconciles it with observations from other agencies for the same object.",
        icon: Database,
        logFilename: "cerulea_orbital.log",
        logLines: [
          { text: "[SYS] Merging track for object DEB_44219...", time: "02:12:05", tone: "default" },
          { text: "[CMD] mergeCatalogue(DEB_44219)", time: "02:12:05", tone: "primary" },
          { text: "[SYS] Reconciling 3 agency observations...", time: "02:12:06", tone: "default" },
          { text: "[OK] Shared state updated. Provenance preserved.", time: "02:12:06", tone: "success" },
        ],
      },
      {
        label: "Access Check",
        description:
          "An analyst queries the catalogue. Node Permissioning confirms read scope and Audit Logs record the access before data is returned.",
        icon: Lock,
        logFilename: "cerulea_orbital.log",
        logLines: [
          { text: "[SYS] Read request from AGENCY_US analyst...", time: "02:30:18", tone: "default" },
          { text: "[CMD] queryObject(DEB_44219, viewer: \"AGENCY_US\")", time: "02:30:18", tone: "primary" },
          { text: "[AUTH] Checking node permission and logging read...", time: "02:30:19", tone: "secondary" },
          { text: "[OK] Access granted. Read recorded to Audit Logs.", time: "02:30:19", tone: "success" },
        ],
      },
      {
        label: "Conjunction Warning",
        description:
          "A close approach is assessed. The catalogue draws on many tracking sources to issue a conjunction warning for an active satellite.",
        icon: Zap,
        logFilename: "cerulea_orbital.log",
        logLines: [
          { text: "[SYS] Assessing conjunction for SAT_9902...", time: "02:44:51", tone: "default" },
          { text: "[CMD] assessConjunction(SAT_9902, DEB_44219)", time: "02:44:51", tone: "primary" },
          { text: "[SYS] Fusing 4 tracking sources for closest approach...", time: "02:44:52", tone: "default" },
          { text: "[OK] Warning issued from most complete picture.", time: "02:44:52", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes orbital situational awareness into modular contracts. Each layer ingests tracks, merges the catalogue, governs access, and assesses conjunctions while each agency keeps control of its data.",
    layers: [
      {
        title: "Oracle Ingest",
        subtitle: "The Track Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Track Feed",
          description:
            "Oracle Feeds. It streams sensor and radar observations into the network with their origin and timestamp, keeping the shared catalogue current enough to drive collision avoidance.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TrackOracle {\n  struct Track {\n    bytes32 object;\n    bytes32 sensor;\n    uint256 observedAt;\n    bytes32 stateVector;\n  }\n\n  function ingestTrack(bytes32 obj, bytes32 sensor, bytes32 vec) external onlyFeed {\n    tracks[obj].push(Track(obj, sensor, block.timestamp, vec));\n    emit TrackIngested(obj, sensor);\n  }\n}",
        simAction: "Simulate Track Ingest",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving radar track from AGENCY_EU...", tone: "default" },
          { text: "Attaching sensor RDR_07 and timestamp...", tone: "default" },
          { text: "Recording state vector for DEB_44219...", tone: "default" },
          { text: "Writing observation to catalogue...", tone: "default" },
          { text: "[SUCCESS] Track ingested with provenance.", tone: "success" },
        ],
      },
      {
        title: "Catalogue Ledger",
        subtitle: "The Shared Picture",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Picture",
          description:
            "The Traceability Ledger. It reconciles observations of the same object from multiple agencies into one shared catalogue, so no agency's partial view leaves the picture incomplete.",
          platformFunction: "Custody & State",
        },
        codeSnippet:
          "function mergeCatalogue(bytes32 obj) external {\n    Track[] memory obs = tracks[obj];\n    require(obs.length > 0, \"No tracks\");\n    catalogue[obj] = _reconcile(obs);\n    emit CatalogueUpdated(obj, obs.length);\n}",
        simAction: "Simulate Catalogue Merge",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading observations for DEB_44219...", tone: "default" },
          { text: "Reconciling 3 agency tracks...", tone: "default" },
          { text: "Updating shared state vector...", tone: "default" },
          { text: "Preserving per-track provenance...", tone: "default" },
          { text: "[SUCCESS] Shared catalogue updated on-chain.", tone: "success" },
        ],
      },
      {
        title: "Access Governor",
        subtitle: "The Sovereign Scope",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sovereign Scope",
          description:
            "Node Permissioning with Audit Logs. It scopes what each agency may read and records every access, so tracks are shared under explicit, logged terms while each source retains control.",
          platformFunction: "Access & Permissioning",
        },
        codeSnippet:
          "function queryObject(bytes32 obj, address viewer) external returns (State memory) {\n    require(canRead[viewer][obj], \"Not permitted\");\n    auditLog.record(viewer, obj, block.timestamp);\n    return catalogue[obj];\n}",
        simAction: "Simulate Access Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Analyst AGENCY_US requesting DEB_44219...", tone: "default" },
          { text: "Checking node read permission...", tone: "default" },
          { text: "Recording access to Audit Logs...", tone: "default" },
          { text: "Returning scoped catalogue state...", tone: "default" },
          { text: "[SUCCESS] Access granted and logged.", tone: "success" },
        ],
      },
      {
        title: "Conjunction Engine",
        subtitle: "The Collision Assessor",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Collision Assessor",
          description:
            "The assessment executor. It fuses many tracking sources to compute a close approach and issues a conjunction warning from the most complete picture, sharpening collision avoidance decisions.",
          platformFunction: "Enforcement & Assessment",
        },
        codeSnippet:
          "function assessConjunction(bytes32 sat, bytes32 debris) external view returns (uint256 missDistance, bool alert) {\n    State memory a = catalogue[sat];\n    State memory b = catalogue[debris];\n    missDistance = _closestApproach(a, b);\n    alert = missDistance < SAFETY_THRESHOLD;\n}",
        simAction: "Simulate Conjunction Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Assessing SAT_9902 against DEB_44219...", tone: "default" },
          { text: "Fusing 4 tracking sources...", tone: "default" },
          { text: "Computing closest approach distance...", tone: "default" },
          { text: "Comparing against safety threshold...", tone: "default" },
          { text: "[SUCCESS] Conjunction warning issued.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Orbital situational awareness is a horizontal capability. Here is how different actors put the shared tracking network to work.",
    sectors: [
      { icon: Landmark, title: "National Space Agencies", description: "Contribute radar and optical tracks under a sovereign node and draw conjunction warnings from many sources at once, closing the blind spots that separate national catalogues leave open.", assetTypes: ["Debris Tracks", "Sensor Feeds", "Conjunction Warnings"] },
      { icon: Radio, title: "Satellite Operators", description: "Base collision avoidance manoeuvres on the most complete orbital picture available rather than a single provider's view, reducing both missed threats and unnecessary burns.", assetTypes: ["Active Assets", "Close Approaches", "Manoeuvre Records"] },
      { icon: Globe, title: "Coordination Alliances", description: "Fuse contributions from member agencies into one shared catalogue with logged, permissioned access, so situational data is combined without any agency surrendering ownership.", assetTypes: ["Shared Catalogues", "Access Logs", "Track Provenance"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a national tracking system or streaming live radar feeds from a sensor site, Cerulea routes both into one shared situational record.",
    tracks: [
      {
        title: "Track A: National Tracking System Bridging",
        description:
          "For agencies on legacy space surveillance systems. Existing catalogues are translated into sovereign on-chain contributions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy SSA System", sublabel: "National Catalogues", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Track Hashing & Scoping", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Situational Catalogue Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Sensor-Site Live Feed",
        description:
          "For radar and optical sites streaming observations. An oracle client signs each track from a sensor node and routes it directly to the shared catalogue.",
        connectorLabels: ["SENSOR SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Sensor Node / Oracle", sublabel: "Radar & Optical Sites", icon: Radio, accent: false },
          { label: "Agency Validators", sublabel: "Catalogue Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Track Record", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cross-agency debris-sharing network with oracle ingestion, catalogue reconciliation, sovereign access, and conjunction assessment from scratch requires SSA-domain engineers and long inter-agency alignment. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Track & Access Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects inter-agency data-sharing integration benchmarks. Aligning agencies on a shared catalogue schema, building oracle ingestion and reconciliation, and shipping sovereign access controls takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your track and access rules into pre-audited WebAssembly binaries and provisions the shared situational ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "space-asset-tokenization-and-fractional-ownership",
    icon: Coins,
    eyebrow: "Space Capital Settlement Layer",
    headline1: "Fractionalize orbit.",
    headline2: "Open the launchpad to all.",
    heroDescription:
      "Issue compliance-gated fractional tokens for space infrastructure on a public-chain investment app, opening returns that once reached only governments and institutions. The ERC-1155 Multi-Token and Securities Lifecycle modules manage the asset, the KYC and AML Utility Registry gates access, and Payouts and Settlements distribute revenue automatically.",
    heroCta: "Deploy Space Investment Apps",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn capital-intensive space infrastructure into compliance-gated fractional ownership that retail investors can reach.",
    mechanics: [
      { title: "Fractional Issuance", description: "Split a large asset into reachable units. The ERC-1155 Multi-Token module issues fractional shares of space infrastructure, so a satellite or constellation opens to many investors instead of a single institution." },
      { title: "Securities Lifecycle", description: "Manage the token as a regulated instrument. The Securities Lifecycle module governs issuance, transfer restrictions, and corporate actions across the asset's full life on-chain." },
      { title: "Compliance-Gated Access", description: "Admit only eligible investors. The KYC and AML Utility Registry checks each participant before a transfer clears, so ownership stays within the permitted investor set." },
      { title: "Automated Distributions", description: "Pay revenue without intermediaries. Payouts and Settlements distribute income to token holders automatically and transparently, in proportion to their fractional stake." },
      { title: "Broader Capital Pool", description: "Reach capital beyond institutions. Operators tap a wider base of retail and smaller investors, funding infrastructure that once depended solely on governments and large institutions." },
      { title: "Transparent Cap Table", description: "See ownership in real time. The token registry is the cap table, so holdings, transfers, and distributions are auditable on-chain rather than reconciled in private ledgers." },
    ],
    lifecycleTitle: "The Space Asset Lifecycle",
    lifecycleSubtitle:
      "Follow a fractional space asset from tokenized issuance through gated investment to an automated revenue distribution.",
    lifecycleSteps: [
      {
        label: "Asset Tokenization",
        description:
          "An operator tokenizes a space asset. The ERC-1155 Multi-Token module issues fractional units under the Securities Lifecycle rules.",
        icon: Coins,
        logFilename: "cerulea_spacecap.log",
        logLines: [
          { text: "[SYS] Initializing space asset issuance...", time: "08:30:14", tone: "default" },
          { text: "[CMD] issueAsset { asset: \"SAT_CONSTELLATION_A\", units: 1000000 }", time: "08:30:14", tone: "primary" },
          { text: "[AUTH] Applying Securities Lifecycle restrictions...", time: "08:30:15", tone: "secondary" },
          { text: "[OK] 1,000,000 fractional units minted on-chain.", time: "08:30:15", tone: "success" },
        ],
      },
      {
        label: "Investor Onboarding",
        description:
          "A retail investor joins the app. The KYC and AML Utility Registry verifies eligibility before any allocation is possible.",
        icon: Fingerprint,
        logFilename: "cerulea_spacecap.log",
        logLines: [
          { text: "[SYS] Onboarding investor to space app...", time: "10:12:47", tone: "default" },
          { text: "[CMD] verifyInvestor(wallet: \"0x77c...\", tier: \"RETAIL\")", time: "10:12:47", tone: "primary" },
          { text: "[AUTH] Running KYC and AML utility checks...", time: "10:12:48", tone: "secondary" },
          { text: "[OK] Investor cleared. Eligible to hold units.", time: "10:12:48", tone: "success" },
        ],
      },
      {
        label: "Gated Purchase",
        description:
          "The investor buys fractional units. The transfer clears only against a verified compliance status held in the registry.",
        icon: Wallet,
        logFilename: "cerulea_spacecap.log",
        logLines: [
          { text: "[SYS] Purchase request for 500 units...", time: "11:40:03", tone: "default" },
          { text: "[CMD] buyUnits(SAT_CONSTELLATION_A, 500, buyer: \"0x77c...\")", time: "11:40:03", tone: "primary" },
          { text: "[AUTH] Confirming compliance gate before transfer...", time: "11:40:04", tone: "secondary" },
          { text: "[OK] Units transferred. Cap table updated.", time: "11:40:04", tone: "success" },
        ],
      },
      {
        label: "Revenue Distribution",
        description:
          "The asset earns income. Payouts and Settlements distribute it to holders automatically in proportion to their stake.",
        icon: PieChart,
        logFilename: "cerulea_spacecap.log",
        logLines: [
          { text: "[SYS] Distributing quarterly revenue for asset...", time: "15:05:29", tone: "default" },
          { text: "[CMD] distribute(SAT_CONSTELLATION_A, amount: 420000)", time: "15:05:29", tone: "primary" },
          { text: "[SYS] Splitting pro rata across 3,200 holders...", time: "15:05:30", tone: "default" },
          { text: "[OK] Distribution settled transparently.", time: "15:05:30", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes space asset tokenization into modular contracts. Each layer issues fractional units, governs the security, gates access, and settles revenue without a private intermediary holding the cap table.",
    layers: [
      {
        title: "Multi-Token Issuer",
        subtitle: "The Fractional Asset",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fractional Asset",
          description:
            "The ERC-1155 Multi-Token module. It issues fractional units of a space asset and holds the on-chain registry that serves as the live, auditable cap table for every holder.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SpaceAssetToken {\n  mapping(uint256 => uint256) public totalUnits;\n  mapping(uint256 => mapping(address => uint256)) public balance;\n\n  function issueAsset(uint256 assetId, uint256 units) external onlyOperator {\n    totalUnits[assetId] = units;\n    balance[assetId][msg.sender] = units;\n    emit AssetIssued(assetId, units);\n  }\n}",
        simAction: "Simulate Asset Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Defining fractional units for constellation...", tone: "default" },
          { text: "Applying Securities Lifecycle rules...", tone: "default" },
          { text: "Minting 1,000,000 units to operator...", tone: "default" },
          { text: "Opening on-chain cap table...", tone: "default" },
          { text: "[SUCCESS] Fractional asset issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Compliance Gate",
        subtitle: "The Eligibility Check",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Eligibility Check",
          description:
            "The KYC and AML Utility Registry. It verifies each investor and blocks any transfer to an unqualified wallet, keeping ownership of a regulated instrument inside the permitted investor set.",
          platformFunction: "Access & Compliance",
        },
        codeSnippet:
          "function _beforeTransfer(address to, uint256 assetId, uint256 units) internal view {\n    require(kycRegistry.isVerified(to), \"Investor not eligible\");\n    require(!kycRegistry.isBlocked(to), \"Blocked party\");\n    require(units <= holdingLimit[to], \"Exceeds limit\");\n}",
        simAction: "Simulate Compliance Gate",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer 0x77c requesting 500 units...", tone: "default" },
          { text: "Checking KYC and AML registry status...", tone: "default" },
          { text: "Confirming wallet not on blocked set...", tone: "default" },
          { text: "Validating holding limit for tier...", tone: "default" },
          { text: "[SUCCESS] Investor eligible, transfer permitted.", tone: "success" },
        ],
      },
      {
        title: "Securities Controller",
        subtitle: "The Lifecycle Governor",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Lifecycle Governor",
          description:
            "The Securities Lifecycle module. It enforces transfer restrictions, lock-ups, and corporate actions across the token's life, so a space asset trades as a properly governed regulated instrument.",
          platformFunction: "Enforcement & Lifecycle",
        },
        codeSnippet:
          "function transferUnits(uint256 assetId, address to, uint256 units) external {\n    require(block.timestamp >= lockupEnds[msg.sender], \"In lock-up\");\n    _beforeTransfer(to, assetId, units);\n    balance[assetId][msg.sender] -= units;\n    balance[assetId][to] += units;\n    emit UnitsTransferred(assetId, msg.sender, to, units);\n}",
        simAction: "Simulate Governed Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Evaluating transfer of 500 units...", tone: "default" },
          { text: "Checking lock-up window...", tone: "default" },
          { text: "Applying transfer restrictions...", tone: "default" },
          { text: "Updating on-chain cap table...", tone: "default" },
          { text: "[SUCCESS] Governed transfer settled.", tone: "success" },
        ],
      },
      {
        title: "Payout Engine",
        subtitle: "The Revenue Splitter",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Revenue Splitter",
          description:
            "Payouts and Settlements. It distributes asset income to holders pro rata in a single transparent execution, replacing manual intermediary payouts with automatic, auditable settlement.",
          platformFunction: "Settlement & Distribution",
        },
        codeSnippet:
          "function distribute(uint256 assetId, uint256 amount) external onlyOperator {\n    uint256 supply = totalUnits[assetId];\n    for (uint256 i = 0; i < holders[assetId].length; i++) {\n        address h = holders[assetId][i];\n        payable(h).transfer(amount * balance[assetId][h] / supply);\n    }\n    emit Distributed(assetId, amount);\n}",
        simAction: "Simulate Revenue Distribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading distributable revenue of 420,000...", tone: "default" },
          { text: "Reading holdings across 3,200 holders...", tone: "default" },
          { text: "Computing pro rata shares...", tone: "default" },
          { text: "Executing settlement in single block...", tone: "default" },
          { text: "[SUCCESS] Revenue distributed transparently.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Space asset tokenization is a horizontal capability. Here is how different actors put compliance-gated fractional ownership to work.",
    sectors: [
      { icon: Zap, title: "Space Operators", description: "Tap a broader capital pool by issuing fractional shares of satellites and constellations, funding infrastructure that once depended entirely on governments and large institutions.", assetTypes: ["Satellite Shares", "Constellation Units", "Infrastructure Bonds"] },
      { icon: Users, title: "Retail Investors", description: "Reach space economy returns for the first time through compliance-gated fractional units, with holdings and distributions visible on a transparent on-chain cap table.", assetTypes: ["Fractional Units", "Distribution Rights", "Verified Holdings"] },
      { icon: Landmark, title: "Regulators & Custodians", description: "Supervise a regulated instrument whose eligibility checks, transfer restrictions, and payouts execute on-chain, giving a live audit trail in place of reconciled private records.", assetTypes: ["Compliance Registries", "Transfer Restrictions", "Distribution Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an institutional custody system or serving retail investors from a public-chain app, Cerulea routes both into one compliance-gated ownership record.",
    tracks: [
      {
        title: "Track A: Institutional Custody Bridging",
        description:
          "For custodians and transfer agents on legacy securities systems. Existing holder records are translated into on-chain fractional balances through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Custody System", sublabel: "Transfer Agents", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Holder Mapping & Compliance", icon: Server, accent: true },
          { label: "Cerulea Chain", sublabel: "Fractional Asset Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Public-Chain Investment App",
        description:
          "For retail investors on a public-chain app. A wallet signs each gated purchase and routes it through the compliance registry to the public execution layer.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Investor App / Wallet", sublabel: "Retail Participants", icon: Fingerprint, accent: false },
          { label: "Compliance Registry", sublabel: "KYC & AML Gating", icon: Shield, accent: true },
          { label: "Cerulea Public L1", sublabel: "Ownership & Payout Ledger", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a compliance-gated fractional ownership app with securities lifecycle logic, KYC gating, and automated distributions from scratch requires regulated-token engineers and heavy legal review. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Securities & Compliance Rules",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects regulated-token infrastructure benchmarks. Writing custom ERC-1155 securities logic, wiring KYC and AML gating, and shipping automated distribution middleware for an average app takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your securities and compliance rules into pre-audited WebAssembly binaries and provisions the ownership and payout ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "ground-station-scheduling-and-data-downlink-rights-management",
    icon: Wifi,
    eyebrow: "Downlink Settlement Layer",
    headline1: "Reserve every pass.",
    headline2: "Bill on verified volume.",
    heroDescription:
      "Anchor each ground station booking and the verified data volume per session on a shared network, so scheduling conflicts and billing disputes clear. Escrow and Conditional Settlement holds the session fee, and the Provenance Notary records the confirmed transfer.",
    heroCta: "Deploy Downlink Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn contested ground station sharing into conflict-free bookings settled against verified data volume.",
    mechanics: [
      { title: "Conflict-Free Booking", description: "Reserve a pass without collision. Each downlink window is anchored on the shared network, so a booking cannot overlap another and operators stop competing for the same slot." },
      { title: "Verified Data Volume", description: "Measure what was actually delivered. The session records the confirmed data volume downlinked, so billing rests on verified throughput rather than a claimed figure." },
      { title: "Escrowed Session Fee", description: "Lock the fee up front. Escrow and Conditional Settlement holds the booking fee until the session completes, protecting both the station owner and the operator." },
      { title: "Conditional Release", description: "Pay on delivery. Funds release only when the recorded data volume matches the session terms, so a shortfall is settled fairly instead of disputed after the fact." },
      { title: "Notarized Transfer", description: "Seal the handover. The Provenance Notary records the confirmed data transfer, giving both parties a signed reference that removes usage disagreements." },
      { title: "Dispute-Free Billing", description: "End the billing standoff. Because booking, volume, and payment are all anchored, disputes over data usage clear against evidence rather than conflicting logs." },
    ],
    lifecycleTitle: "The Downlink Lifecycle",
    lifecycleSubtitle:
      "Follow a single ground station session from booking through data downlink to conditional, verified settlement.",
    lifecycleSteps: [
      {
        label: "Window Booking",
        description:
          "An operator reserves a downlink window. The contract anchors the station, satellite, and time slot, refusing any overlapping booking.",
        icon: Wifi,
        logFilename: "cerulea_downlink.log",
        logLines: [
          { text: "[SYS] Booking downlink window at station GS_12...", time: "03:22:09", tone: "default" },
          { text: "[CMD] bookWindow { station: \"GS_12\", sat: \"SAT_4471\", slot: \"0410Z\" }", time: "03:22:09", tone: "primary" },
          { text: "[AUTH] Checking slot for conflicts...", time: "03:22:10", tone: "secondary" },
          { text: "[OK] Window BK_8830 reserved. No overlap.", time: "03:22:10", tone: "success" },
        ],
      },
      {
        label: "Fee Escrow",
        description:
          "The session fee is locked. Escrow and Conditional Settlement holds the payment until the downlink completes on the recorded terms.",
        icon: Wallet,
        logFilename: "cerulea_downlink.log",
        logLines: [
          { text: "[SYS] Locking session fee for BK_8830...", time: "03:25:41", tone: "default" },
          { text: "[CMD] escrowFee(BK_8830, amount: 1800)", time: "03:25:41", tone: "primary" },
          { text: "[SYS] Funds held pending session completion...", time: "03:25:42", tone: "default" },
          { text: "[OK] Fee escrowed. Session ready to proceed.", time: "03:25:42", tone: "success" },
        ],
      },
      {
        label: "Data Downlink",
        description:
          "The pass runs and data flows. The confirmed volume is recorded and the Provenance Notary seals the transfer.",
        icon: Database,
        logFilename: "cerulea_downlink.log",
        logLines: [
          { text: "[SYS] Session BK_8830 active over GS_12...", time: "04:10:55", tone: "default" },
          { text: "[CMD] recordVolume(BK_8830, gb: 240)", time: "04:18:02", tone: "primary" },
          { text: "[AUTH] Notarizing confirmed data transfer...", time: "04:18:03", tone: "secondary" },
          { text: "[OK] 240 GB downlinked and sealed to record.", time: "04:18:03", tone: "success" },
        ],
      },
      {
        label: "Conditional Settlement",
        description:
          "Payment settles against volume. The escrow releases the fee only when the recorded data matches the session terms.",
        icon: Handshake,
        logFilename: "cerulea_downlink.log",
        logLines: [
          { text: "[SYS] Settling session BK_8830...", time: "04:20:18", tone: "default" },
          { text: "[CMD] settle(BK_8830)", time: "04:20:18", tone: "primary" },
          { text: "[AUTH] Matching recorded 240 GB against terms...", time: "04:20:19", tone: "secondary" },
          { text: "[OK] Terms met. Fee released to station owner.", time: "04:20:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes downlink management into modular contracts. Each layer books a window, escrows the fee, records verified volume, and settles conditionally without either party owning the billing record.",
    layers: [
      {
        title: "Booking Registry",
        subtitle: "The Slot Anchor",
        icon: Wifi,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Slot Anchor",
          description:
            "The foundational data layer. It anchors each downlink window against a station and satellite and rejects any overlapping reservation, so operators sharing a network never collide over the same pass.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract BookingRegistry {\n  struct Window {\n    bytes32 station;\n    bytes32 sat;\n    uint256 startSlot;\n    address operator;\n  }\n\n  mapping(bytes32 => Window) public windows;\n\n  function bookWindow(bytes32 id, bytes32 station, uint256 slot) external {\n    require(!slotTaken[station][slot], \"Slot conflict\");\n    windows[id] = Window(station, 0, slot, msg.sender);\n    slotTaken[station][slot] = true;\n  }\n}",
        simAction: "Simulate Window Booking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading requested slot 0410Z at GS_12...", tone: "default" },
          { text: "Checking for overlapping bookings...", tone: "default" },
          { text: "Locking window to operator...", tone: "default" },
          { text: "Writing reservation to registry...", tone: "default" },
          { text: "[SUCCESS] Window BK_8830 reserved on-chain.", tone: "success" },
        ],
      },
      {
        title: "Fee Escrow",
        subtitle: "The Locked Payment",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Locked Payment",
          description:
            "Escrow and Conditional Settlement. It holds the session fee from booking until completion, so neither the station owner nor the operator carries counterparty risk during the pass.",
          platformFunction: "Custody & Settlement",
        },
        codeSnippet:
          "function escrowFee(bytes32 bookingId) external payable {\n    require(windows[bookingId].operator == msg.sender, \"Not operator\");\n    escrow[bookingId] = msg.value;\n    emit FeeEscrowed(bookingId, msg.value);\n}",
        simAction: "Simulate Fee Escrow",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Operator committing session fee of 1800...", tone: "default" },
          { text: "Validating booking ownership...", tone: "default" },
          { text: "Locking funds in conditional escrow...", tone: "default" },
          { text: "Marking session ready to proceed...", tone: "default" },
          { text: "[SUCCESS] Session fee escrowed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Volume Notary",
        subtitle: "The Delivery Proof",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Delivery Proof",
          description:
            "The Provenance Notary. It records the confirmed data volume downlinked in a session and seals the transfer, so billing rests on verified throughput that neither party can later contest.",
          platformFunction: "Provenance & Notarization",
        },
        codeSnippet:
          "function recordVolume(bytes32 bookingId, uint256 gb, bytes32 proof) external onlyStation {\n    sessionVolume[bookingId] = gb;\n    notarizedTransfer[bookingId] = proof;\n    emit VolumeRecorded(bookingId, gb);\n}",
        simAction: "Simulate Volume Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Measuring downlinked data for BK_8830...", tone: "default" },
          { text: "Confirming 240 GB delivered...", tone: "default" },
          { text: "Notarizing transfer proof...", tone: "default" },
          { text: "Sealing volume to session record...", tone: "default" },
          { text: "[SUCCESS] Verified volume recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The Conditional Release",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Release",
          description:
            "The settlement executor. It releases the escrowed fee only when recorded volume meets the session terms, so a shortfall is resolved fairly and usage disputes clear against evidence.",
          platformFunction: "Enforcement & Settlement",
        },
        codeSnippet:
          "function settle(bytes32 bookingId) external {\n    uint256 gb = sessionVolume[bookingId];\n    require(gb >= termsVolume[bookingId], \"Volume short of terms\");\n    payable(stationOwner[bookingId]).transfer(escrow[bookingId]);\n    emit Settled(bookingId, gb);\n}",
        simAction: "Simulate Conditional Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading recorded volume for BK_8830...", tone: "default" },
          { text: "Comparing 240 GB against session terms...", tone: "default" },
          { text: "Confirming delivery meets threshold...", tone: "default" },
          { text: "Releasing escrow to station owner...", tone: "default" },
          { text: "[SUCCESS] Settlement completed on verified volume.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Downlink rights management is a horizontal capability. Here is how different actors put the shared booking network to work.",
    sectors: [
      { icon: Wifi, title: "Ground Station Networks", description: "Offer conflict-free scheduling and bill each session on verified data volume, ending overlapping bookings and the usage disputes that strain shared antenna capacity.", assetTypes: ["Downlink Windows", "Session Volumes", "Escrowed Fees"] },
      { icon: Radio, title: "Satellite Operators", description: "Reserve downlink passes with certainty and settle against confirmed throughput, so a shortfall clears against evidence rather than a billing standoff after the pass.", assetTypes: ["Pass Reservations", "Verified Throughput", "Settlement Receipts"] },
      { icon: Boxes, title: "Data Service Providers", description: "Anchor the confirmed transfer of downlinked data so onward processing and delivery rest on a notarized volume record instead of contested session logs.", assetTypes: ["Transfer Proofs", "Volume Records", "Delivery Notaries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a ground station scheduling system or capturing session telemetry from an antenna controller, Cerulea routes both into one shared booking and settlement record.",
    tracks: [
      {
        title: "Track A: Scheduling System Bridging",
        description:
          "For station networks on legacy scheduling software. Existing bookings and session logs are translated into on-chain windows and volume records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Scheduler", sublabel: "Station Networks", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Booking Hashing & Escrow", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Downlink Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Antenna Controller Capture",
        description:
          "For station controllers streaming session telemetry. A signing client records each confirmed volume from an antenna node and routes it directly to the settlement ledger.",
        connectorLabels: ["STATION SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Antenna Controller", sublabel: "Ground Station Nodes", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Settlement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Booking Record", icon: Wifi, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a downlink network with conflict-free booking, fee escrow, verified volume notarization, and conditional settlement from scratch requires ground-segment engineers and long multi-operator integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Booking & Settlement Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects ground-segment integration benchmarks. Building custom scheduling and escrow logic, wiring verified volume capture, and shipping conditional settlement for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your booking and settlement rules into pre-audited WebAssembly binaries and provisions the shared downlink ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "astronaut-training-certification-and-mission-readiness-records",
    icon: GraduationCap,
    eyebrow: "Mission Readiness Engine",
    headline1: "Certify every milestone.",
    headline2: "Confirm mission readiness.",
    heroDescription:
      "Anchor each training milestone and certification as a verified record on a shared network, ending the fragmentation of files across facilities and instructors. The DID and VC Ledger holds each credential, and Compliance Attestations confirm readiness against the standard.",
    heroCta: "Deploy Readiness Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn training records scattered across facilities and instructors into one verified, auditable readiness file.",
    mechanics: [
      { title: "Verified Milestones", description: "Anchor each checkpoint as it is passed. A training milestone is written as a verified record the moment it is achieved, so a candidate's progress accumulates on one shared timeline." },
      { title: "Credentialed Certifications", description: "Bind each qualification to its holder. The DID and VC Ledger issues each certification as a verifiable credential, so a readiness claim is provable rather than asserted on paper." },
      { title: "Instructor Attestation", description: "Trust the assessor. Each milestone is signed by a credentialed instructor, so a certification traces to a qualified assessor at a known facility." },
      { title: "Readiness Against Standard", description: "Check completeness precisely. Compliance Attestations confirm a candidate against the readiness standard, so a planner sees exactly which requirements are met and which remain." },
      { title: "Cross-Facility Continuity", description: "Keep the record whole. Because milestones from every facility write to the same network, a candidate's file no longer fragments as they move between instructors and sites." },
      { title: "Auditable Readiness File", description: "Confirm before assignment. A mission planner reads a clear, auditable file and confirms every readiness requirement is met before a candidate is assigned." },
    ],
    lifecycleTitle: "The Readiness Lifecycle",
    lifecycleSubtitle:
      "Follow a single astronaut candidate from a training milestone through certification to a confirmed mission assignment.",
    lifecycleSteps: [
      {
        label: "Milestone Completion",
        description:
          "A candidate passes a training checkpoint. A credentialed instructor anchors the milestone with its discipline, facility, and result.",
        icon: GraduationCap,
        logFilename: "cerulea_readiness.log",
        logLines: [
          { text: "[SYS] Recording training milestone for CAND_318...", time: "09:05:12", tone: "default" },
          { text: "[CMD] logMilestone { disc: \"EVA_NBL\", facility: \"FAC_02\" }", time: "09:05:12", tone: "primary" },
          { text: "[AUTH] Verifying instructor credential...", time: "09:05:13", tone: "secondary" },
          { text: "[OK] Milestone MS_5521 anchored on-chain.", time: "09:05:13", tone: "success" },
        ],
      },
      {
        label: "Certification Issue",
        description:
          "A discipline is completed. The DID and VC Ledger issues a verifiable certification credential bound to the candidate.",
        icon: IdCard,
        logFilename: "cerulea_readiness.log",
        logLines: [
          { text: "[SYS] Issuing certification for CAND_318...", time: "11:48:36", tone: "default" },
          { text: "[CMD] issueCredential(CAND_318, cert: \"EVA_QUALIFIED\")", time: "11:48:36", tone: "primary" },
          { text: "[AUTH] Binding verifiable credential to candidate DID...", time: "11:48:37", tone: "secondary" },
          { text: "[OK] Credential issued and anchored.", time: "11:48:37", tone: "success" },
        ],
      },
      {
        label: "Readiness Evaluation",
        description:
          "The candidate is checked against the standard. Compliance Attestations confirm which readiness requirements are met.",
        icon: FileCheck,
        logFilename: "cerulea_readiness.log",
        logLines: [
          { text: "[SYS] Evaluating readiness of CAND_318...", time: "14:20:09", tone: "default" },
          { text: "[CMD] evaluateReadiness(CAND_318, standard: \"ISS_INC_72\")", time: "14:20:09", tone: "primary" },
          { text: "[SYS] Checking all credentials against standard...", time: "14:20:10", tone: "default" },
          { text: "[OK] All requirements met. Attestation recorded.", time: "14:20:10", tone: "success" },
        ],
      },
      {
        label: "Mission Assignment",
        description:
          "A planner confirms the candidate. The auditable readiness file verifies every requirement before assignment is authorised.",
        icon: Plane,
        logFilename: "cerulea_readiness.log",
        logLines: [
          { text: "[SYS] Assignment review for mission ISS_INC_72...", time: "16:33:44", tone: "default" },
          { text: "[CMD] confirmAssignment(CAND_318, ISS_INC_72)", time: "16:33:44", tone: "primary" },
          { text: "[AUTH] Verifying complete readiness file...", time: "16:33:45", tone: "secondary" },
          { text: "[OK] Readiness confirmed. Candidate assigned.", time: "16:33:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes mission readiness into modular contracts. Each layer anchors milestones, issues credentials, evaluates against the standard, and serves an auditable file without any single facility owning the record.",
    layers: [
      {
        title: "Milestone Ledger",
        subtitle: "The Progress Anchor",
        icon: GraduationCap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Progress Anchor",
          description:
            "The foundational data layer. It anchors each training milestone with its discipline, facility, and instructor signature, so a candidate's progress accumulates on one shared timeline across sites.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract MilestoneLedger {\n  struct Milestone {\n    bytes32 candidate;\n    bytes32 discipline;\n    bytes32 facility;\n    bytes32 instructor;\n    uint256 completedAt;\n  }\n\n  mapping(bytes32 => Milestone[]) public record;\n\n  function logMilestone(bytes32 cand, bytes32 disc, bytes32 fac) external onlyInstructor {\n    record[cand].push(Milestone(cand, disc, fac, instructorOf[msg.sender], block.timestamp));\n  }\n}",
        simAction: "Simulate Milestone Log",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading instructor credential at FAC_02...", tone: "default" },
          { text: "Recording EVA neutral buoyancy result...", tone: "default" },
          { text: "Binding milestone to candidate CAND_318...", tone: "default" },
          { text: "Writing milestone to shared timeline...", tone: "default" },
          { text: "[SUCCESS] Milestone MS_5521 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Credential Issuer",
        subtitle: "The Verifiable Qualification",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verifiable Qualification",
          description:
            "The DID and VC Ledger. It issues each completed discipline as a verifiable credential bound to the candidate's identity, so a qualification is provable rather than asserted from a paper file.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function issueCredential(bytes32 candidate, bytes32 cert) external onlyIssuer {\n    bytes32 vc = vcLedger.issue(candidate, cert, block.timestamp);\n    credentials[candidate].push(vc);\n    emit CredentialIssued(candidate, cert, vc);\n}",
        simAction: "Simulate Credential Issue",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming EVA discipline complete...", tone: "default" },
          { text: "Composing verifiable credential...", tone: "default" },
          { text: "Binding credential to candidate DID...", tone: "default" },
          { text: "Anchoring credential reference...", tone: "default" },
          { text: "[SUCCESS] Certification issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Readiness Evaluator",
        subtitle: "The Standard Check",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Standard Check",
          description:
            "Compliance Attestations. It checks a candidate's credentials against the mission readiness standard and records exactly which requirements are met, so completeness is a fact rather than a judgement.",
          platformFunction: "Enforcement & Attestation",
        },
        codeSnippet:
          "function evaluateReadiness(bytes32 candidate, bytes32 standard) external returns (bool ready) {\n    bytes32[] memory required = standardReqs[standard];\n    for (uint256 i = 0; i < required.length; i++) {\n        if (!_holds(candidate, required[i])) return false;\n    }\n    attest(candidate, standard);\n    return true;\n}",
        simAction: "Simulate Readiness Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading standard ISS_INC_72 requirements...", tone: "default" },
          { text: "Checking each credential against standard...", tone: "default" },
          { text: "Confirming no requirement outstanding...", tone: "default" },
          { text: "Recording compliance attestation...", tone: "default" },
          { text: "[SUCCESS] Candidate meets readiness standard.", tone: "success" },
        ],
      },
      {
        title: "Readiness File",
        subtitle: "The Assignment Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Assignment Window",
          description:
            "The read gateway. It serves a candidate's complete, auditable readiness file so a mission planner confirms every requirement is met before assignment, ending fragmented training records.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function readinessFile(bytes32 candidate) external view returns (Milestone[] memory, bytes32[] memory, bool) {\n    return (record[candidate], credentials[candidate], attested[candidate]);\n}",
        simAction: "Simulate File Readout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Planner requesting CAND_318 readiness file...", tone: "default" },
          { text: "Assembling milestones across facilities...", tone: "default" },
          { text: "Attaching issued credentials...", tone: "default" },
          { text: "Confirming standard attestation present...", tone: "default" },
          { text: "[SUCCESS] Auditable readiness file returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Mission readiness certification is a horizontal capability. Here is how different actors put the shared readiness record to work.",
    sectors: [
      { icon: Landmark, title: "Space Agencies", description: "Confirm a candidate has met every readiness requirement before assignment from one auditable file, ending the fragmentation of training records across facilities and instructors.", assetTypes: ["Readiness Files", "Mission Assignments", "Standard Attestations"] },
      { icon: GraduationCap, title: "Training Facilities", description: "Anchor each milestone under a credentialed instructor so a candidate's progress carries forward intact as they train across disciplines, sites, and assessors.", assetTypes: ["Training Milestones", "Instructor Signatures", "Discipline Records"] },
      { icon: IdCard, title: "Mission Planners", description: "Read verifiable credentials against the mission standard rather than reconciling scattered files, so readiness is confirmed on provable evidence before a candidate is placed.", assetTypes: ["Verifiable Credentials", "Requirement Checks", "Assignment Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a training records system or capturing milestone sign-offs from an instructor's console, Cerulea routes both into one shared readiness record.",
    tracks: [
      {
        title: "Track A: Training System Bridging",
        description:
          "For agencies and facilities on legacy training management systems. Existing records are translated into verified on-chain milestones and credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy LMS / Records", sublabel: "Training Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Hashing & Binding", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Readiness Record Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Instructor Console Sign-Off",
        description:
          "For instructors on a facility console. A signing app anchors each milestone from an instructor wallet and routes the verified record directly to the ledger.",
        connectorLabels: ["INSTRUCTOR SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Facility Console / Wallet", sublabel: "Credentialed Instructors", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Readiness Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Readiness Record", icon: GraduationCap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a mission-readiness network with anchored milestones, verifiable credentials, standard evaluation, and an auditable file from scratch requires training-domain engineers and long multi-facility integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Milestone & Credential Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects multi-facility training-system integration benchmarks. Aligning facilities on a shared credential schema, building milestone and readiness-evaluation logic, and shipping an auditable file takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your milestone and credential rules into pre-audited WebAssembly binaries and provisions the shared readiness ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const aviationAerospaceItems: ExtraCaseItem[] = [
  {
    label: "Aircraft parts provenance and airworthiness certification",
    href: "/solutions/use-case/aircraft-parts-provenance-and-airworthiness-certification",
    description: "Full part genealogy from OEM to safety investigation.",
    icon: Plane,
    category: "ENTERPRISE",
    tags: ["Aviation", "Provenance"],
    industry: INDUSTRY,
  },
  {
    label: "Export control compliance for dual-use technology components",
    href: "/solutions/use-case/export-control-compliance-for-dual-use-technology-components",
    description: "Gate shipments on valid licence and verified end user.",
    icon: Scale,
    category: "ENTERPRISE",
    tags: ["Compliance", "Export Control"],
    industry: INDUSTRY,
  },
  {
    label: "Supplier quality audit history shared across OEMs",
    href: "/solutions/use-case/supplier-quality-audit-history-shared-across-oems",
    description: "One shared audit replaces duplicate OEM assessments.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Quality", "Audit"],
    industry: INDUSTRY,
  },
  {
    label: "Launch component provenance and quality certification",
    href: "/solutions/use-case/launch-component-provenance-and-quality-certification",
    description: "Gated genealogy across hundreds of launch vendors.",
    icon: Zap,
    category: "ENTERPRISE",
    tags: ["Space", "Certification"],
    industry: INDUSTRY,
  },
  {
    label: "Satellite spectrum rights and orbital slot management",
    href: "/solutions/use-case/satellite-spectrum-rights-and-orbital-slot-management",
    description: "Immutable priority dates for spectrum coordination.",
    icon: Radio,
    category: "GOVERNMENT",
    tags: ["Spectrum", "Coordination"],
    industry: INDUSTRY,
  },
  {
    label: "Space debris tracking data sharing across agencies",
    href: "/solutions/use-case/space-debris-tracking-data-sharing-across-agencies",
    description: "Shared orbital catalogue with sovereign data control.",
    icon: Globe,
    category: "GOVERNMENT",
    tags: ["Space", "Situational Awareness"],
    industry: INDUSTRY,
  },
  {
    label: "Space asset tokenization and fractional ownership",
    href: "/solutions/use-case/space-asset-tokenization-and-fractional-ownership",
    description: "Compliance-gated fractional shares of space infrastructure.",
    icon: Coins,
    category: "DAPPS",
    tags: ["Tokenization", "Investment"],
    industry: INDUSTRY,
  },
  {
    label: "Ground station scheduling and data downlink rights management",
    href: "/solutions/use-case/ground-station-scheduling-and-data-downlink-rights-management",
    description: "Conflict-free passes billed on verified data volume.",
    icon: Wifi,
    category: "ENTERPRISE",
    tags: ["Ground Segment", "Settlement"],
    industry: INDUSTRY,
  },
  {
    label: "Astronaut training certification and mission readiness records",
    href: "/solutions/use-case/astronaut-training-certification-and-mission-readiness-records",
    description: "Verifiable readiness file across facilities and instructors.",
    icon: GraduationCap,
    category: "GOVERNMENT",
    tags: ["Training", "Credentials"],
    industry: INDUSTRY,
  },
]
