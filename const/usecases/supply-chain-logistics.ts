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

const INDUSTRY = "Supply Chain & Logistics"

export const supplyChainLogisticsCases: CaseEntry[] = [
  {
    slug: "freight-document-digitization-e-way-bill-proof-of-delivery",
    icon: FileCheck,
    eyebrow: "Road Freight Document Layer",
    headline1: "Digitize the waybill.",
    headline2: "Prove every delivery.",
    heroDescription:
      "Replace paper e-way bills and proof of delivery slips with a private road freight document chain. Digital waybills, GPS-anchored checkpoint logs, and signed delivery receipts let shippers and recipients settle condition and timing disputes from one shared record.",
    heroCta: "Deploy Freight Document Chains",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a folder of contested paper slips into a single, checkpoint-verified freight record.",
    mechanics: [
      { title: "Digital E-Way Bill", description: "Replace the printed waybill. The Trade Finance Documents module issues each consignment a signed digital e-way bill, so checkpoint officers validate the load against an on-chain record instead of inspecting paper." },
      { title: "GPS Checkpoint Anchor", description: "Bind location to time. Each checkpoint scan writes a GPS-anchored log to the Traceability Ledger, creating an immutable trail of where the truck was and when it passed each control point." },
      { title: "Signed Proof of Delivery", description: "End the delivery he-said-she-said. The recipient co-signs a digital proof of delivery capturing condition and timestamp, so disputes resolve against a signed record rather than a smudged carbon copy." },
      { title: "Provenance Notary", description: "Seal the consignment identity. The Provenance Notary binds the goods, the vehicle, and the assigned driver to one consignment hash that later document handling cannot silently alter." },
      { title: "Checkpoint Fast-Lane", description: "Collapse control delays. Because officers verify a pre-signed digital bill, roadside checks drop from thirty minutes to under three, keeping trucks moving instead of queuing." },
      { title: "Dispute Evidence Trail", description: "Settle claims from data. A contested delivery pulls the full GPS trail and both signatures, so condition and timing claims are adjudicated on cryptographic evidence in minutes." },
    ],
    lifecycleTitle: "The Freight Document Lifecycle",
    lifecycleSubtitle:
      "Follow a single consignment from digital waybill issuance through every checkpoint to a signed delivery.",
    lifecycleSteps: [
      {
        label: "E-Way Bill Issuance",
        description:
          "The shipper generates a digital e-way bill for the consignment. The contract anchors the goods, vehicle, and route as the immutable start of the freight record.",
        icon: ScrollText,
        logFilename: "cerulea_freightdoc.log",
        logLines: [
          { text: "[SYS] Initializing E-Way Bill Manifest...", time: "05:42:11", tone: "default" },
          { text: "[CMD] issueWaybill { vehicle: \"MH12_AB3391\", goods: \"STEEL_COIL\", route: \"PUN_NGP\" }", time: "05:42:11", tone: "primary" },
          { text: "[AUTH] Verifying shipper GST credential and route plan...", time: "05:42:12", tone: "secondary" },
          { text: "[OK] Waybill EWB_774120 anchored at block 5210394.", time: "05:42:12", tone: "success" },
        ],
      },
      {
        label: "Checkpoint Scan",
        description:
          "The truck passes a highway checkpoint. An officer scans the bill and a GPS-anchored log records the location and time against the consignment.",
        icon: Radio,
        logFilename: "cerulea_freightdoc.log",
        logLines: [
          { text: "[SYS] Checkpoint scan pending for EWB_774120...", time: "11:18:03", tone: "default" },
          { text: "[CMD] logCheckpoint(EWB_774120, gps: \"20.11N_78.94E\")", time: "11:18:05", tone: "primary" },
          { text: "[SYS] Cross-checking route corridor and timestamp...", time: "11:18:05", tone: "default" },
          { text: "[OK] Checkpoint 2 cleared in 2m 41s. Trail extended.", time: "11:18:06", tone: "success" },
        ],
      },
      {
        label: "Proof of Delivery",
        description:
          "The consignment reaches the recipient, who inspects the goods and co-signs a digital proof of delivery capturing condition and arrival time.",
        icon: Handshake,
        logFilename: "cerulea_freightdoc.log",
        logLines: [
          { text: "[SYS] Delivery confirmation requested at consignee dock...", time: "16:55:40", tone: "default" },
          { text: "[CMD] signPOD(EWB_774120, condition: \"INTACT\", seal: \"OK\")", time: "16:55:44", tone: "primary" },
          { text: "[AUTH] Capturing consignee signature and dock timestamp...", time: "16:55:44", tone: "secondary" },
          { text: "[OK] POD sealed. Both parties co-signed delivery.", time: "16:55:45", tone: "success" },
        ],
      },
      {
        label: "Dispute Verification",
        description:
          "A billing or condition claim is raised. The ledger returns the full GPS trail and both signatures, resolving the dispute from evidence in minutes.",
        icon: Search,
        logFilename: "cerulea_freightdoc.log",
        logLines: [
          { text: "[SYS] Dispute opened on consignment EWB_774120...", time: "09:07:22", tone: "default" },
          { text: "[CMD] resolveClaim(EWB_774120)", time: "09:07:22", tone: "primary" },
          { text: "[SYS] Assembling 4 checkpoint logs and 2 signatures...", time: "09:07:23", tone: "default" },
          { text: "[OK] Evidence returned. Timing and condition confirmed.", time: "09:07:23", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes road freight paperwork into modular contracts. Each layer issues, tracks, signs, and adjudicates a consignment without any single party controlling the document trail.",
    layers: [
      {
        title: "Waybill Registry",
        subtitle: "The Consignment Anchor",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consignment Anchor",
          description:
            "The foundational data layer. It issues a unique digital e-way bill at dispatch and stores the immutable link to goods, vehicle, driver, and route that every checkpoint and delivery record points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract WaybillRegistry {\n  struct Waybill {\n    address shipper;\n    string vehicle;\n    bytes32 goodsHash;\n    string route;\n    uint256 issuedAt;\n  }\n\n  mapping(bytes32 => Waybill) public bills;\n\n  function issue(bytes32 id, string calldata vehicle, bytes32 goods) external {\n    bills[id] = Waybill(msg.sender, vehicle, goods, \"\", block.timestamp);\n  }\n}",
        simAction: "Simulate Waybill Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading shipper GST credential...", tone: "default" },
          { text: "Hashing consignment goods manifest...", tone: "default" },
          { text: "Writing waybill identity to Level 1 storage...", tone: "default" },
          { text: "Locking vehicle MH12_AB3391 to consignment...", tone: "default" },
          { text: "[SUCCESS] Waybill EWB_774120 issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Checkpoint Oracle",
        subtitle: "The GPS Anchor",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The GPS Anchor",
          description:
            "Binds physical location to the document. Each checkpoint scan submits GPS coordinates and a timestamp, appending a tamper-evident position log so the truck's actual route becomes cryptographic evidence.",
          platformFunction: "Location & Telemetry",
        },
        codeSnippet:
          "function logCheckpoint(bytes32 id, bytes32 gps) external onlyOfficer {\n    require(bills[id].issuedAt != 0, \"Unknown waybill\");\n    trail[id].push(Scan(gps, block.timestamp, msg.sender));\n    emit CheckpointLogged(id, gps, block.timestamp);\n}",
        simAction: "Simulate Checkpoint Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Officer scans waybill EWB_774120...", tone: "default" },
          { text: "Reading GPS fix 20.11N 78.94E...", tone: "default" },
          { text: "Validating position against route corridor...", tone: "default" },
          { text: "Appending scan to position trail...", tone: "default" },
          { text: "[SUCCESS] Checkpoint anchored, trail extended.", tone: "success" },
        ],
      },
      {
        title: "Delivery Notary",
        subtitle: "The Two-Party Receipt",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Party Receipt",
          description:
            "Prevents one-sided delivery claims. The consignment cannot close until the recipient co-signs the declared condition and arrival time, turning proof of delivery into a mutual record sealed on-chain.",
          platformFunction: "Custody & Settlement",
        },
        codeSnippet:
          "function signPOD(bytes32 id, bytes1 condition) external {\n    require(consignee[id] == msg.sender, \"Not consignee\");\n    require(!delivered[id], \"Already closed\");\n    delivered[id] = true;\n    emit PODSigned(id, msg.sender, condition, block.timestamp);\n}",
        simAction: "Simulate Proof of Delivery",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Consignee inspecting seal on arrival...", tone: "default" },
          { text: "Recording condition flag INTACT...", tone: "default" },
          { text: "Capturing consignee signature...", tone: "default" },
          { text: "Sealing dock timestamp to consignment...", tone: "default" },
          { text: "[SUCCESS] Proof of delivery co-signed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Dispute Verifier",
        subtitle: "The Evidence Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Window",
          description:
            "A read-only gateway that returns the full checkpoint trail and both signatures for a consignment. It lets shippers, recipients, and insurers adjudicate a claim from one shared record without trusting a single party.",
          platformFunction: "Verification & Audit",
        },
        codeSnippet:
          "function resolveClaim(bytes32 id) external view returns (Scan[] memory, bool) {\n    return (trail[id], delivered[id]);\n}",
        simAction: "Simulate Dispute Lookup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Insurer opens claim on EWB_774120...", tone: "default" },
          { text: "Assembling 4-scan position trail...", tone: "default" },
          { text: "Attaching both party signatures...", tone: "default" },
          { text: "Comparing declared arrival against GPS log...", tone: "default" },
          { text: "[SUCCESS] Verified freight evidence returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Digital freight documentation is a horizontal capability. Here is how different road logistics actors put the shared record to work.",
    sectors: [
      { icon: Truck, title: "Fleet & Transport Operators", description: "Issue digital waybills for every dispatch and clear checkpoints in minutes, cutting roadside idle time and giving dispatchers a live view of each consignment's position and delivery status.", assetTypes: ["Digital Waybills", "Checkpoint Logs", "Delivery Receipts"] },
      { icon: Building2, title: "Shippers & Consignees", description: "Co-sign condition and timing at handover so damage and late-delivery claims settle against a signed record, replacing disputed paper slips with shared cryptographic evidence.", assetTypes: ["Consignment Records", "Condition Attestations", "Dispute Evidence"] },
      { icon: Landmark, title: "Checkpoint & Tax Authorities", description: "Validate e-way bills directly against the ledger at control points, clearing compliant loads instantly and flagging mismatches without manual paper inspection.", assetTypes: ["E-Way Bill Registry", "Compliance Scans", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a fleet's legacy transport management system or capturing checkpoint scans from roadside handhelds, Cerulea routes both into one shared freight record.",
    tracks: [
      {
        title: "Track A: Enterprise TMS Bridging",
        description:
          "For large fleets on legacy transport management systems. Existing dispatch and delivery events are translated into signed on-chain waybill transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy TMS / ERP", sublabel: "Fleet Dispatch Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Freight Document Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Roadside Checkpoint Capture",
        description:
          "For officers and drivers in the field. A handheld app signs each checkpoint scan and proof of delivery from a device wallet and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Handheld / Wallet", sublabel: "Officer & Driver Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Checkpoint Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Consignment Record", icon: Truck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-party freight document network with digital waybills, GPS checkpoint anchoring, and signed proof of delivery from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Waybill & Checkpoint Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise logistics integration benchmarks. Wiring each fleet's transport management system into checkpoint infrastructure, building custom waybill and GPS-anchoring logic, and shipping a signed delivery workflow for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your document and checkpoint rules into pre-audited WebAssembly binaries and provisions the shared freight ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "driver-detention-time-compensation-tracking",
    icon: Truck,
    eyebrow: "Detention Settlement Layer",
    headline1: "Prove the wait.",
    headline2: "Pay detention automatically.",
    heroDescription:
      "Record verified truck arrival and departure timestamps at every loading and unloading point. When a driver is held beyond the agreed free time, the contract calculates detention compensation owed from the actual wait, not a disputed paper log.",
    heroCta: "Deploy Detention Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Convert a contested gate log into a self-calculating record of wait time and compensation.",
    mechanics: [
      { title: "Verified Arrival Stamp", description: "Anchor the clock start. The Provenance Notary seals a signed arrival timestamp the moment the truck reaches the facility, ending disputes about when the free-time window actually began." },
      { title: "Free-Time Meter", description: "Encode the contract terms. The agreed free-time allowance per facility is written into the contract, so the meter knows exactly when billable detention starts to accrue." },
      { title: "Automatic Compensation", description: "Calculate owed money on chain. When departure is stamped, the Invoices and Billing module computes detention compensation from the actual wait beyond free time at the agreed hourly rate." },
      { title: "Tamper-Evident Audit Logs", description: "Freeze the evidence. The Audit Logs module records each gate event immutably, so neither the driver nor the facility can later revise the wait duration in their favour." },
      { title: "Dual-Party Sign-Off", description: "Bind both sides to the record. Facility and driver each acknowledge arrival and departure, turning the detention claim into a mutual attestation rather than a one-sided log sheet." },
      { title: "Fleet Settlement Feed", description: "Route payment to the right party. Calculated detention flows to the driver or the fleet operator per the haulage contract, with a transparent breakdown of every billable hour." },
    ],
    lifecycleTitle: "The Detention Lifecycle",
    lifecycleSubtitle:
      "Follow a single trip from facility arrival through the free-time window to an automatically calculated detention payout.",
    lifecycleSteps: [
      {
        label: "Facility Arrival",
        description:
          "The truck reaches the loading point and is checked in. The contract seals a verified arrival timestamp that starts the free-time countdown.",
        icon: Truck,
        logFilename: "cerulea_detention.log",
        logLines: [
          { text: "[SYS] Initializing Gate Event Manifest...", time: "07:05:12", tone: "default" },
          { text: "[CMD] logArrival { truck: \"GJ01_KT7742\", facility: \"WH_MUNDRA_3\" }", time: "07:05:12", tone: "primary" },
          { text: "[AUTH] Verifying driver credential and gate camera hash...", time: "07:05:13", tone: "secondary" },
          { text: "[OK] Arrival TRIP_55120 anchored. Free-time clock started.", time: "07:05:13", tone: "success" },
        ],
      },
      {
        label: "Free-Time Window",
        description:
          "The agreed free time elapses while the truck waits for a dock. The meter tracks the window against the facility's contracted allowance.",
        icon: HeartPulse,
        logFilename: "cerulea_detention.log",
        logLines: [
          { text: "[SYS] Free-time allowance for WH_MUNDRA_3: 4h 00m...", time: "11:05:13", tone: "default" },
          { text: "[CMD] checkWindow(TRIP_55120)", time: "11:05:14", tone: "primary" },
          { text: "[SYS] Free time exhausted. Billable detention now accruing.", time: "11:05:14", tone: "secondary" },
          { text: "[OK] Meter switched to billable state at hour 4.", time: "11:05:14", tone: "success" },
        ],
      },
      {
        label: "Departure Stamp",
        description:
          "The truck is finally released. Departure is co-signed, closing the wait window and locking the exact billable duration.",
        icon: Handshake,
        logFilename: "cerulea_detention.log",
        logLines: [
          { text: "[SYS] Departure confirmation pending at gate...", time: "13:47:30", tone: "default" },
          { text: "[CMD] logDeparture(TRIP_55120)", time: "13:47:33", tone: "primary" },
          { text: "[AUTH] Capturing facility and driver co-signatures...", time: "13:47:33", tone: "secondary" },
          { text: "[OK] Wait sealed: 6h 42m. Billable detention 2h 42m.", time: "13:47:34", tone: "success" },
        ],
      },
      {
        label: "Compensation Payout",
        description:
          "The contract computes detention owed from the billable hours and routes a transparent settlement to the driver or fleet operator.",
        icon: Wallet,
        logFilename: "cerulea_detention.log",
        logLines: [
          { text: "[SYS] Computing detention for TRIP_55120...", time: "13:47:35", tone: "default" },
          { text: "[CMD] settleDetention(billableHours: 2.7, rate: 450)", time: "13:47:35", tone: "primary" },
          { text: "[SYS] Amount owed: 1215 INR. Routing to fleet wallet...", time: "13:47:35", tone: "default" },
          { text: "[OK] Detention settled with itemized breakdown.", time: "13:47:36", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes detention tracking into modular contracts. Each layer stamps arrival, meters free time, seals departure, and settles compensation without either party controlling the clock.",
    layers: [
      {
        title: "Gate Registry",
        subtitle: "The Arrival Anchor",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Arrival Anchor",
          description:
            "The foundational data layer. It records a verified arrival timestamp for each trip and stores the immutable link to truck, driver, and facility that starts the free-time countdown every later calculation depends on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract GateRegistry {\n  struct Visit {\n    string truck;\n    address facility;\n    uint256 arrivedAt;\n    uint256 departedAt;\n    uint256 freeTime;\n  }\n\n  mapping(bytes32 => Visit) public visits;\n\n  function logArrival(bytes32 id, string calldata truck, uint256 freeTime) external {\n    visits[id] = Visit(truck, msg.sender, block.timestamp, 0, freeTime);\n  }\n}",
        simAction: "Simulate Facility Arrival",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading driver credential for GJ01_KT7742...", tone: "default" },
          { text: "Hashing gate camera frame...", tone: "default" },
          { text: "Writing arrival timestamp to Level 1 storage...", tone: "default" },
          { text: "Loading free-time allowance 4h for facility...", tone: "default" },
          { text: "[SUCCESS] Arrival TRIP_55120 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Free-Time Meter",
        subtitle: "The Billable Switch",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Billable Switch",
          description:
            "Encodes the contracted allowance. Once elapsed wait exceeds free time, the meter flips to a billable state, ensuring detention accrues only for hours the driver was genuinely held beyond the agreement.",
          platformFunction: "Metering & Rules",
        },
        codeSnippet:
          "function billableHours(bytes32 id) public view returns (uint256) {\n    Visit memory v = visits[id];\n    uint256 waited = block.timestamp - v.arrivedAt;\n    if (waited <= v.freeTime) return 0;\n    return waited - v.freeTime;\n}",
        simAction: "Simulate Free-Time Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading elapsed wait for TRIP_55120...", tone: "default" },
          { text: "Comparing 6h 42m against 4h allowance...", tone: "default" },
          { text: "Computing billable overage...", tone: "default" },
          { text: "Flipping meter to billable state...", tone: "default" },
          { text: "[SUCCESS] Billable detention 2h 42m confirmed.", tone: "success" },
        ],
      },
      {
        title: "Departure Notary",
        subtitle: "The Two-Party Close",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Party Close",
          description:
            "Prevents a one-sided wait figure. The visit cannot close until both facility and driver acknowledge departure, sealing the exact billable duration as a mutual attestation on-chain.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function logDeparture(bytes32 id) external {\n    Visit storage v = visits[id];\n    require(v.departedAt == 0, \"Already closed\");\n    v.departedAt = block.timestamp;\n    emit VisitClosed(id, v.arrivedAt, block.timestamp);\n}",
        simAction: "Simulate Departure Stamp",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Facility releasing truck GJ01_KT7742...", tone: "default" },
          { text: "Recording departure timestamp...", tone: "default" },
          { text: "Capturing driver co-signature...", tone: "default" },
          { text: "Locking billable window at 2h 42m...", tone: "default" },
          { text: "[SUCCESS] Departure co-signed and sealed.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The Payout Executor",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Payout Executor",
          description:
            "Turns billable hours into money. It multiplies the sealed detention duration by the agreed rate and routes an itemized payout to the driver or fleet operator, so compensation is transparent and immediate.",
          platformFunction: "Billing & Settlement",
        },
        codeSnippet:
          "function settleDetention(bytes32 id, uint256 rate) external {\n    uint256 hoursOwed = billableHours(id);\n    uint256 amount = hoursOwed * rate;\n    payable(fleet[id]).transfer(amount);\n    emit DetentionPaid(id, hoursOwed, amount);\n}",
        simAction: "Simulate Compensation Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading billable hours 2.7 for TRIP_55120...", tone: "default" },
          { text: "Applying agreed rate 450 per hour...", tone: "default" },
          { text: "Computing detention owed 1215 INR...", tone: "default" },
          { text: "Routing settlement to fleet wallet...", tone: "default" },
          { text: "[SUCCESS] Detention paid with itemized proof.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified detention tracking is a horizontal capability. Here is how different logistics actors put the shared wait record to work.",
    sectors: [
      { icon: Truck, title: "Fleet Operators & Owner-Drivers", description: "Claim detention on evidence instead of goodwill, recovering owed compensation for every hour a truck is held beyond free time with a signed breakdown per trip.", assetTypes: ["Detention Claims", "Wait Records", "Driver Payouts"] },
      { icon: Building2, title: "Warehouses & Loading Facilities", description: "Settle detention transparently against contracted free time, reducing disputes with hauliers and gaining a defensible record of dwell performance across their docks.", assetTypes: ["Gate Events", "Free-Time Terms", "Dwell Analytics"] },
      { icon: Handshake, title: "Shippers & 3PL Contractors", description: "Reconcile accessorial charges from one shared clock, so detention passed through to customers is backed by verified arrival and departure data rather than contested slips.", assetTypes: ["Accessorial Charges", "Contract Terms", "Settlement Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a warehouse yard management system or capturing gate events from a driver's phone, Cerulea routes both into one shared detention record.",
    tracks: [
      {
        title: "Track A: Enterprise Yard Bridging",
        description:
          "For facilities on legacy yard and dock management systems. Existing gate check-in and check-out events are translated into signed on-chain visit records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy YMS / WMS", sublabel: "Facility Gate Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Detention Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Driver Gate Capture",
        description:
          "For drivers and gate staff on mobile. An app signs each arrival and departure from a device wallet and routes it directly to the ledger for instant metering.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Driver App / Wallet", sublabel: "Driver & Gate Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Gate Event Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Wait Record", icon: HeartPulse, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verified detention platform with gate event capture, contracted free-time metering, and automatic compensation settlement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Free-Time & Settlement Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects fleet-facility integration benchmarks. Connecting each yard management system, building custom free-time metering, and shipping an auditable detention settlement flow for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your metering and settlement rules into pre-audited WebAssembly binaries and provisions the shared detention ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "toll-payment-reconciliation-across-multiple-toll-operators",
    icon: Coins,
    eyebrow: "Toll Settlement Layer",
    headline1: "Consolidate every toll.",
    headline2: "One statement, one truth.",
    heroDescription:
      "Fleets crossing long routes pass tolls run by many agencies, each issuing a separate statement to reconcile by hand. Cerulea anchors verified toll transactions from every operator into one consolidated record per vehicle, so cost accounting reads from a single source.",
    heroCta: "Deploy Toll Reconciliation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Collapse many operator statements into one verified per-vehicle toll ledger.",
    mechanics: [
      { title: "Multi-Operator Ingest", description: "Pull from every agency at once. External Data Oracles ingest verified toll transactions from each operator's plaza feed, ending the manual gather of separate PDF statements per route." },
      { title: "Per-Vehicle Consolidation", description: "Group by the asset that matters. Every toll charge is bound to its vehicle and trip, producing one consolidated statement per truck instead of a stack of agency-by-agency reports." },
      { title: "Duplicate Charge Detection", description: "Catch double billing. The Audit Logs module flags the same plaza transaction appearing twice across operator feeds, so a fleet never pays a duplicated toll." },
      { title: "Verified Billing Reconciliation", description: "Match charges to trips. The Invoices and Billing module reconciles each toll against the vehicle's recorded route, exposing charges that do not correspond to any actual passage." },
      { title: "Immutable Toll Trail", description: "Freeze the evidence. Each transaction is anchored with its plaza, timestamp, and operator, giving accounting a tamper-evident trail for audit and tax purposes." },
      { title: "Cost Center Allocation", description: "Route spend to the right ledger. Consolidated toll cost is allocated per vehicle, route, or client, so operators bill through and account for toll spend without spreadsheet stitching." },
    ],
    lifecycleTitle: "The Toll Reconciliation Lifecycle",
    lifecycleSubtitle:
      "Follow a single vehicle's tolls from many operator feeds into one consolidated, reconciled statement.",
    lifecycleSteps: [
      {
        label: "Plaza Transactions",
        description:
          "The vehicle passes plazas run by different agencies. Each operator feed submits a verified toll transaction against the vehicle tag.",
        icon: Coins,
        logFilename: "cerulea_tollrecon.log",
        logLines: [
          { text: "[SYS] Initializing Toll Transaction Manifest...", time: "08:12:04", tone: "default" },
          { text: "[CMD] ingestToll { tag: \"FAST_9921\", plaza: \"NHAI_A17\", amount: 185 }", time: "08:12:04", tone: "primary" },
          { text: "[AUTH] Verifying operator feed signature...", time: "08:12:05", tone: "secondary" },
          { text: "[OK] Toll TXN_31007 anchored to vehicle FAST_9921.", time: "08:12:05", tone: "success" },
        ],
      },
      {
        label: "Feed Consolidation",
        description:
          "Transactions from all operators are grouped under the vehicle. The contract assembles one consolidated toll record for the trip.",
        icon: Database,
        logFilename: "cerulea_tollrecon.log",
        logLines: [
          { text: "[SYS] Aggregating feeds from 3 toll operators...", time: "18:40:22", tone: "default" },
          { text: "[CMD] consolidate(vehicle: \"FAST_9921\", trip: \"T_8890\")", time: "18:40:22", tone: "primary" },
          { text: "[SYS] 11 plaza transactions grouped for the trip.", time: "18:40:23", tone: "default" },
          { text: "[OK] Consolidated statement assembled.", time: "18:40:23", tone: "success" },
        ],
      },
      {
        label: "Duplicate & Route Check",
        description:
          "The record is reconciled against the vehicle's route. Duplicates and tolls with no matching passage are flagged for review.",
        icon: Search,
        logFilename: "cerulea_tollrecon.log",
        logLines: [
          { text: "[SYS] Reconciling 11 tolls against recorded route...", time: "18:40:24", tone: "default" },
          { text: "[CMD] checkDuplicates(T_8890)", time: "18:40:24", tone: "primary" },
          { text: "[SYS] 1 duplicate at plaza NHAI_A17 flagged.", time: "18:40:24", tone: "error" },
          { text: "[OK] 10 tolls verified against route passages.", time: "18:40:25", tone: "success" },
        ],
      },
      {
        label: "Statement Settlement",
        description:
          "The verified consolidated statement is finalized and allocated to the fleet's cost centers for accounting and payment.",
        icon: FileCheck,
        logFilename: "cerulea_tollrecon.log",
        logLines: [
          { text: "[SYS] Finalizing consolidated statement for FAST_9921...", time: "18:40:26", tone: "default" },
          { text: "[CMD] settleStatement(T_8890, verified: 10, flagged: 1)", time: "18:40:26", tone: "primary" },
          { text: "[SYS] Allocating 1840 INR to route cost center...", time: "18:40:26", tone: "default" },
          { text: "[OK] One verified statement issued for the trip.", time: "18:40:27", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes toll reconciliation into modular contracts. Each layer ingests, consolidates, checks, and settles toll spend without any operator controlling the fleet's statement.",
    layers: [
      {
        title: "Toll Registry",
        subtitle: "The Transaction Anchor",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transaction Anchor",
          description:
            "The foundational data layer. It records each verified toll transaction from an operator feed and stores the immutable link to vehicle, plaza, and timestamp that consolidation and audit later depend on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TollRegistry {\n  struct Toll {\n    string vehicleTag;\n    address operator;\n    string plaza;\n    uint256 amount;\n    uint256 at;\n  }\n\n  mapping(bytes32 => Toll) public tolls;\n\n  function ingest(bytes32 id, string calldata tag, string calldata plaza, uint256 amt) external onlyOperator {\n    tolls[id] = Toll(tag, msg.sender, plaza, amt, block.timestamp);\n  }\n}",
        simAction: "Simulate Toll Ingest",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading operator feed signature...", tone: "default" },
          { text: "Binding toll to vehicle FAST_9921...", tone: "default" },
          { text: "Writing transaction to Level 1 storage...", tone: "default" },
          { text: "Stamping plaza NHAI_A17 and timestamp...", tone: "default" },
          { text: "[SUCCESS] Toll TXN_31007 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Consolidation Engine",
        subtitle: "The Single Statement",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single Statement",
          description:
            "Groups scattered charges by vehicle and trip. It replaces many operator statements with one consolidated record, so the fleet reads a single authoritative view of toll spend per asset.",
          platformFunction: "Aggregation & Workflow",
        },
        codeSnippet:
          "function consolidate(string calldata tag, bytes32 trip) external view returns (bytes32[] memory) {\n    return statementIndex[keccak256(abi.encode(tag, trip))];\n}",
        simAction: "Simulate Feed Consolidation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Collecting feeds from 3 operators...", tone: "default" },
          { text: "Grouping 11 tolls under trip T_8890...", tone: "default" },
          { text: "Ordering transactions by timestamp...", tone: "default" },
          { text: "Assembling consolidated statement...", tone: "default" },
          { text: "[SUCCESS] One statement built for the vehicle.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation Check",
        subtitle: "The Duplicate Guard",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Duplicate Guard",
          description:
            "Matches every toll to an actual route passage. It flags duplicated plaza charges and tolls with no corresponding passage, so a fleet never pays for a charge that cannot be justified.",
          platformFunction: "Validation & Audit",
        },
        codeSnippet:
          "function checkDuplicates(bytes32 trip) external view returns (uint256 flagged) {\n    bytes32[] memory ids = statementIndex[trip];\n    for (uint256 i = 0; i < ids.length; i++) {\n      if (seen[keccak256(abi.encode(tolls[ids[i]].plaza, tolls[ids[i]].at))]) flagged++;\n    }\n}",
        simAction: "Simulate Duplicate Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning 11 tolls for T_8890...", tone: "default" },
          { text: "Hashing plaza and timestamp pairs...", tone: "default" },
          { text: "Detecting repeated NHAI_A17 charge...", tone: "default" },
          { text: "Flagging 1 duplicate for review...", tone: "default" },
          { text: "[SUCCESS] 10 tolls verified against route.", tone: "success" },
        ],
      },
      {
        title: "Settlement Ledger",
        subtitle: "The Cost Allocator",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cost Allocator",
          description:
            "Finalizes the verified statement and allocates toll cost to the right vehicle, route, or client cost center, giving accounting a defensible per-asset toll figure for billing and tax.",
          platformFunction: "Billing & Settlement",
        },
        codeSnippet:
          "function settleStatement(bytes32 trip, uint256 total, bytes32 costCenter) external {\n    require(!settled[trip], \"Already settled\");\n    settled[trip] = true;\n    allocations[costCenter] += total;\n    emit StatementSettled(trip, total, costCenter);\n}",
        simAction: "Simulate Statement Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Finalizing statement for FAST_9921...", tone: "default" },
          { text: "Summing 10 verified tolls to 1840 INR...", tone: "default" },
          { text: "Allocating to route cost center...", tone: "default" },
          { text: "Sealing statement for accounting...", tone: "default" },
          { text: "[SUCCESS] Consolidated statement settled.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Consolidated toll reconciliation is a horizontal capability. Here is how different logistics actors put the shared record to work.",
    sectors: [
      { icon: Truck, title: "Fleet & Haulage Operators", description: "Replace stacks of agency statements with one verified toll record per vehicle, cutting reconciliation labour and recovering duplicated or unjustified toll charges.", assetTypes: ["Per-Vehicle Statements", "Toll Transactions", "Cost Allocations"] },
      { icon: Landmark, title: "Toll Operators & Concessionaires", description: "Publish signed transaction feeds that fleets can reconcile trustlessly, reducing dispute volume and settlement friction across their plaza network.", assetTypes: ["Plaza Feeds", "Operator Attestations", "Transaction Logs"] },
      { icon: PieChart, title: "Finance & Accounting Teams", description: "Book toll spend from a tamper-evident source allocated by route and client, giving auditors a clean trail and eliminating manual statement stitching.", assetTypes: ["Cost Centers", "Audit Trails", "Reconciled Ledgers"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging operator plaza systems or pulling electronic toll tag feeds, Cerulea routes every source into one consolidated per-vehicle record.",
    tracks: [
      {
        title: "Track A: Operator Feed Bridging",
        description:
          "For toll agencies and tag issuers on legacy systems. Existing plaza transaction feeds are translated into signed on-chain toll records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Operator Plaza Systems", sublabel: "Agency Transaction Feeds", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Feed Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Toll Reconciliation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Fleet Tag Capture",
        description:
          "For fleets aggregating electronic toll tags. A gateway signs each tag transaction from a fleet wallet and routes it directly to the ledger for consolidation.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Fleet Tag Gateway", sublabel: "Vehicle Tag Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Transaction Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Consolidated Toll Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a multi-operator toll reconciliation platform with feed ingestion, duplicate detection, and per-vehicle consolidation from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Reconciliation & Feed Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects multi-operator integration benchmarks. Connecting each toll agency feed, building custom consolidation and duplicate-detection logic, and shipping a per-vehicle reconciliation report for an average fleet takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your reconciliation rules into pre-audited WebAssembly binaries and provisions the shared toll ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "fleet-driver-license-and-fitness-certificate-verification",
    icon: IdCard,
    eyebrow: "Driver Credential Layer",
    headline1: "Verify before dispatch.",
    headline2: "Never run an expired license.",
    heroDescription:
      "Fleets must ensure every driver holds a valid commercial license and current medical fitness certificate, yet tracking expiry across a large pool is manual and inconsistent. Cerulea lets dispatchers verify a driver's status against a trusted registry instantly, with alerts before any document lapses.",
    heroCta: "Deploy Credential Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a spreadsheet of expiry dates into instant, verifiable credential checks at dispatch.",
    mechanics: [
      { title: "Verifiable Credentials", description: "Issue tamper-proof documents. The DID and VC Ledger binds each commercial license and fitness certificate to the driver's decentralized identity, so a credential cannot be forged or reassigned." },
      { title: "Instant Dispatch Check", description: "Verify at the point of assignment. A dispatcher queries the registry and gets an immediate valid or invalid result for a driver's license and fitness status before a trip is allocated." },
      { title: "Expiry Alerting", description: "Never be surprised by a lapse. The Notifications module fires alerts to the driver and fleet admin ahead of any document's expiry, keeping the pool continuously compliant." },
      { title: "Compliance Attestations", description: "Anchor issuer trust. The Compliance Attestations module records the issuing authority's signature on each credential, so verification checks against a genuine source rather than a scanned image." },
      { title: "Revocation Awareness", description: "Respect real-time status. If an authority suspends a license, the registry reflects it immediately, so a revoked driver is blocked from dispatch on the next check." },
      { title: "Audit-Ready History", description: "Prove diligence after the fact. Every verification is logged, giving the fleet a defensible record that each dispatched driver was checked and cleared at assignment time." },
    ],
    lifecycleTitle: "The Credential Lifecycle",
    lifecycleSubtitle:
      "Follow a driver's credentials from issuance and registration through a dispatch check to an expiry alert.",
    lifecycleSteps: [
      {
        label: "Credential Issuance",
        description:
          "An authority issues the driver a verifiable commercial license and fitness certificate. Each is anchored to the driver's decentralized identity.",
        icon: IdCard,
        logFilename: "cerulea_driverid.log",
        logLines: [
          { text: "[SYS] Initializing Driver Credential Manifest...", time: "09:30:41", tone: "default" },
          { text: "[CMD] issueVC { did: \"DID_DRV_4471\", type: \"CDL\", expiry: \"2028-06-30\" }", time: "09:30:41", tone: "primary" },
          { text: "[AUTH] Verifying issuing authority signature...", time: "09:30:42", tone: "secondary" },
          { text: "[OK] Credential VC_9920 anchored to driver DID.", time: "09:30:42", tone: "success" },
        ],
      },
      {
        label: "Registry Enrollment",
        description:
          "The driver is enrolled in the fleet's verified pool. Their credential set and expiry dates are registered for dispatch checks.",
        icon: Users,
        logFilename: "cerulea_driverid.log",
        logLines: [
          { text: "[SYS] Enrolling driver DID_DRV_4471 to fleet pool...", time: "09:31:10", tone: "default" },
          { text: "[CMD] enroll(fleet: \"FL_NORTH\", credentials: [\"CDL\", \"MED_FIT\"])", time: "09:31:10", tone: "primary" },
          { text: "[SYS] Indexing 2 credentials with expiry watchers.", time: "09:31:11", tone: "default" },
          { text: "[OK] Driver active in verified pool.", time: "09:31:11", tone: "success" },
        ],
      },
      {
        label: "Dispatch Verification",
        description:
          "Before assigning a trip, a dispatcher checks the driver. The registry returns an instant valid status for license and fitness.",
        icon: Search,
        logFilename: "cerulea_driverid.log",
        logLines: [
          { text: "[SYS] Dispatch check requested for DID_DRV_4471...", time: "05:58:03", tone: "default" },
          { text: "[CMD] verifyDriver(DID_DRV_4471, trip: \"TR_7781\")", time: "05:58:03", tone: "primary" },
          { text: "[SYS] CDL valid. Medical fitness valid. No revocation.", time: "05:58:03", tone: "default" },
          { text: "[OK] Driver cleared for dispatch.", time: "05:58:04", tone: "success" },
        ],
      },
      {
        label: "Expiry Alert",
        description:
          "As a certificate nears expiry, the contract notifies the driver and fleet admin so renewal happens before any lapse blocks a trip.",
        icon: Radio,
        logFilename: "cerulea_driverid.log",
        logLines: [
          { text: "[SYS] Expiry watcher tick for fleet FL_NORTH...", time: "00:05:00", tone: "default" },
          { text: "[CMD] scanExpiries(windowDays: 30)", time: "00:05:00", tone: "primary" },
          { text: "[SYS] MED_FIT for DID_DRV_4471 expires in 21 days.", time: "00:05:01", tone: "secondary" },
          { text: "[OK] Renewal alert sent to driver and admin.", time: "00:05:01", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes driver credentialing into modular contracts. Each layer issues, enrolls, verifies, and watches a driver's documents without any single system holding an unchecked source of truth.",
    layers: [
      {
        title: "Credential Registry",
        subtitle: "The Identity Anchor",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Anchor",
          description:
            "The foundational data layer. It binds each verifiable license and fitness certificate to the driver's decentralized identity and stores the immutable issuer signature and expiry that every check relies on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CredentialRegistry {\n  struct VC {\n    bytes32 driverDid;\n    string kind;\n    address issuer;\n    uint256 expiry;\n    bool revoked;\n  }\n\n  mapping(bytes32 => VC) public creds;\n\n  function issue(bytes32 id, bytes32 did, string calldata kind, uint256 exp) external onlyIssuer {\n    creds[id] = VC(did, kind, msg.sender, exp, false);\n  }\n}",
        simAction: "Simulate Credential Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading issuing authority signature...", tone: "default" },
          { text: "Binding CDL to driver DID_DRV_4471...", tone: "default" },
          { text: "Writing credential to Level 1 storage...", tone: "default" },
          { text: "Registering expiry watcher for 2028-06-30...", tone: "default" },
          { text: "[SUCCESS] Credential VC_9920 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Verification Hook",
        subtitle: "The Dispatch Gate",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Dispatch Gate",
          description:
            "Blocks non-compliant assignment. Before a trip is allocated it checks license validity, fitness status, and revocation in one call, returning a single clear result the dispatcher can act on instantly.",
          platformFunction: "Verification & Access",
        },
        codeSnippet:
          "function verifyDriver(bytes32 did) external view returns (bool ok) {\n    bytes32[] memory ids = driverCreds[did];\n    for (uint256 i = 0; i < ids.length; i++) {\n      VC memory c = creds[ids[i]];\n      if (c.revoked || c.expiry < block.timestamp) return false;\n    }\n    return true;\n}",
        simAction: "Simulate Dispatch Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Dispatcher queries DID_DRV_4471...", tone: "default" },
          { text: "Checking CDL validity and expiry...", tone: "default" },
          { text: "Checking medical fitness status...", tone: "default" },
          { text: "Confirming no active revocation...", tone: "default" },
          { text: "[SUCCESS] Driver cleared for dispatch.", tone: "success" },
        ],
      },
      {
        title: "Attestation Vault",
        subtitle: "The Issuer Seal",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Issuer Seal",
          description:
            "Records the trusted source of every credential. It stores the issuing authority's compliance attestation so a verification confirms a genuine, authority-signed document rather than a mutable scan.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function attest(bytes32 credId, bytes32 authoritySig) external onlyIssuer {\n    require(creds[credId].issuer == msg.sender, \"Not issuer\");\n    attestations[credId] = Attestation(msg.sender, authoritySig, block.timestamp);\n    emit Attested(credId, msg.sender);\n}",
        simAction: "Simulate Issuer Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading authority for credential VC_9920...", tone: "default" },
          { text: "Verifying compliance attestation signature...", tone: "default" },
          { text: "Sealing issuer proof to credential...", tone: "default" },
          { text: "Marking credential as authority-backed...", tone: "default" },
          { text: "[SUCCESS] Issuer attestation anchored.", tone: "success" },
        ],
      },
      {
        title: "Expiry Watcher",
        subtitle: "The Renewal Signal",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Renewal Signal",
          description:
            "Keeps the pool continuously compliant. It scans upcoming expiries and emits alerts to driver and admin ahead of any lapse, so renewal happens before a document blocks a dispatch.",
          platformFunction: "Notifications & Monitoring",
        },
        codeSnippet:
          "function scanExpiries(bytes32 fleet, uint256 windowDays) external {\n    bytes32[] memory ids = fleetCreds[fleet];\n    for (uint256 i = 0; i < ids.length; i++) {\n      if (creds[ids[i]].expiry <= block.timestamp + windowDays * 1 days) emit ExpirySoon(ids[i]);\n    }\n}",
        simAction: "Simulate Expiry Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning fleet FL_NORTH credentials...", tone: "default" },
          { text: "Comparing expiries against 30-day window...", tone: "default" },
          { text: "Detecting MED_FIT lapse in 21 days...", tone: "default" },
          { text: "Emitting renewal alert to driver and admin...", tone: "default" },
          { text: "[SUCCESS] Expiry alert dispatched.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Instant credential verification is a horizontal capability. Here is how different transport actors put the shared registry to work.",
    sectors: [
      { icon: Truck, title: "Fleet & Transport Operators", description: "Verify license and fitness at the moment of dispatch and receive expiry alerts across the driver pool, eliminating the risk of running a lapsed or suspended driver.", assetTypes: ["Driver Pools", "Dispatch Checks", "Expiry Alerts"] },
      { icon: Landmark, title: "Licensing & Health Authorities", description: "Issue verifiable licenses and fitness certificates that fleets can validate directly, cutting fraud and giving authorities live control over revocations.", assetTypes: ["Verifiable Licenses", "Fitness Certificates", "Revocation Lists"] },
      { icon: ShieldCheck, title: "Insurers & Auditors", description: "Confirm that every insured driver was verified before assignment, using an immutable check history to price risk and settle claims with confidence.", assetTypes: ["Verification History", "Compliance Proofs", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging authority issuance systems or letting dispatchers check credentials from a mobile console, Cerulea routes both into one trusted driver registry.",
    tracks: [
      {
        title: "Track A: Authority Issuance Bridging",
        description:
          "For licensing and health authorities on legacy systems. Existing credential records are translated into signed on-chain verifiable credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Authority Systems", sublabel: "Licensing & Health Databases", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Driver Credential Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Dispatch Console Capture",
        description:
          "For dispatchers and drivers on mobile. A console signs each verification request from a device wallet and reads live credential status directly from the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Dispatch App / Wallet", sublabel: "Dispatcher & Driver Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Credential Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Driver Registry", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verifiable driver credential registry with authority-signed licenses, instant dispatch checks, and expiry alerting from scratch requires specialised identity engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credential & Alert Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects verifiable-credential integration benchmarks. Connecting each authority issuance system, building custom verification and expiry-watcher logic, and shipping a dispatch check console for an average fleet takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your credential and alerting rules into pre-audited WebAssembly binaries and provisions the shared driver registry instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "fuel-card-transaction-reconciliation-across-fleet-operators",
    icon: Wallet,
    eyebrow: "Fuel Reconciliation Layer",
    headline1: "Match every fill.",
    headline2: "Flag the fraud.",
    heroDescription:
      "Fleet fuel cards generate transactions across many stations that must be reconciled against expected consumption per vehicle and trip to catch fraud like a driver fueling a personal car. Cerulea anchors each fuel transaction alongside vehicle and trip data, flagging fills that break the expected pattern.",
    heroCta: "Deploy Fuel Reconciliation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace an after-the-fact exception report with continuous, verified fuel-to-trip matching.",
    mechanics: [
      { title: "Station Feed Ingest", description: "Capture every fill at source. External Data Oracles ingest fuel card transactions from each station feed, binding volume, price, and location to the card in real time." },
      { title: "Consumption Modeling", description: "Know what a trip should burn. The contract holds expected consumption per vehicle and route, so each fill is judged against a realistic baseline rather than a flat threshold." },
      { title: "Anomaly Flagging", description: "Surface suspicious fills instantly. The Audit Logs module flags a transaction whose volume, timing, or location does not match the vehicle's trip, routing it to an administrator to review." },
      { title: "Verified Billing Match", description: "Reconcile card charges to reality. The Invoices and Billing module matches each fuel charge to the vehicle it was assigned to, exposing fills that cannot be tied to a legitimate trip." },
      { title: "Card-to-Vehicle Binding", description: "Stop cross-vehicle abuse. Each card is bound on-chain to its vehicle, so a fill at a location the truck never visited is immediately detectable." },
      { title: "Tamper-Evident Fuel Trail", description: "Preserve the audit record. Every transaction and flag is anchored immutably, giving finance a defensible fuel history for cost control and fraud investigation." },
    ],
    lifecycleTitle: "The Fuel Reconciliation Lifecycle",
    lifecycleSubtitle:
      "Follow a single fuel card transaction from the pump through consumption matching to an anomaly flag.",
    lifecycleSteps: [
      {
        label: "Fuel Transaction",
        description:
          "A driver fuels at a station. The station feed submits a verified transaction with volume, price, and location against the fuel card.",
        icon: Wallet,
        logFilename: "cerulea_fuelrecon.log",
        logLines: [
          { text: "[SYS] Initializing Fuel Transaction Manifest...", time: "10:22:48", tone: "default" },
          { text: "[CMD] ingestFill { card: \"FC_2210\", litres: 210, station: \"BP_A44\" }", time: "10:22:48", tone: "primary" },
          { text: "[AUTH] Verifying station feed signature...", time: "10:22:49", tone: "secondary" },
          { text: "[OK] Fill FUEL_60110 anchored to card FC_2210.", time: "10:22:49", tone: "success" },
        ],
      },
      {
        label: "Trip Binding",
        description:
          "The transaction is matched to the vehicle's active trip. The contract loads the expected consumption baseline for the route.",
        icon: Truck,
        logFilename: "cerulea_fuelrecon.log",
        logLines: [
          { text: "[SYS] Binding fill FUEL_60110 to vehicle trip...", time: "10:22:50", tone: "default" },
          { text: "[CMD] bindTrip(FUEL_60110, vehicle: \"TN09_LR22\", trip: \"TR_5521\")", time: "10:22:50", tone: "primary" },
          { text: "[SYS] Expected consumption for route: 195L +/- 8%.", time: "10:22:50", tone: "default" },
          { text: "[OK] Transaction bound to active trip.", time: "10:22:51", tone: "success" },
        ],
      },
      {
        label: "Anomaly Check",
        description:
          "The fill is compared against the expected pattern. Volume, timing, and location that break the baseline are flagged for review.",
        icon: Search,
        logFilename: "cerulea_fuelrecon.log",
        logLines: [
          { text: "[SYS] Evaluating FUEL_60110 against baseline...", time: "10:22:52", tone: "default" },
          { text: "[CMD] checkAnomaly(FUEL_60110)", time: "10:22:52", tone: "primary" },
          { text: "[SYS] Fill 210L exceeds 195L +/- 8% and off-route.", time: "10:22:52", tone: "error" },
          { text: "[OK] Anomaly flagged for administrator review.", time: "10:22:53", tone: "success" },
        ],
      },
      {
        label: "Administrator Review",
        description:
          "The flagged transaction is surfaced to the fleet administrator with full context, who confirms or dismisses the suspected misuse.",
        icon: FileCheck,
        logFilename: "cerulea_fuelrecon.log",
        logLines: [
          { text: "[SYS] Presenting flagged fill FUEL_60110 to admin...", time: "11:05:14", tone: "default" },
          { text: "[CMD] reviewFlag(FUEL_60110, verdict: \"CONFIRMED\")", time: "11:05:20", tone: "primary" },
          { text: "[SYS] Recording verdict and locking evidence...", time: "11:05:20", tone: "default" },
          { text: "[OK] Misuse confirmed. Fuel trail updated.", time: "11:05:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fuel reconciliation into modular contracts. Each layer ingests, binds, evaluates, and records a fill without any single system quietly overwriting the fuel record.",
    layers: [
      {
        title: "Fuel Registry",
        subtitle: "The Transaction Anchor",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transaction Anchor",
          description:
            "The foundational data layer. It records each verified fuel card transaction and stores the immutable link to card, volume, price, and location that trip binding and anomaly checks later depend on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract FuelRegistry {\n  struct Fill {\n    bytes32 card;\n    uint256 litres;\n    uint256 price;\n    string station;\n    uint256 at;\n  }\n\n  mapping(bytes32 => Fill) public fills;\n\n  function ingest(bytes32 id, bytes32 card, uint256 litres, string calldata station) external onlyFeed {\n    fills[id] = Fill(card, litres, 0, station, block.timestamp);\n  }\n}",
        simAction: "Simulate Fuel Ingest",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading station feed signature...", tone: "default" },
          { text: "Binding fill to card FC_2210...", tone: "default" },
          { text: "Writing transaction to Level 1 storage...", tone: "default" },
          { text: "Stamping station BP_A44 and timestamp...", tone: "default" },
          { text: "[SUCCESS] Fill FUEL_60110 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Trip Binder",
        subtitle: "The Baseline Loader",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Baseline Loader",
          description:
            "Connects a fill to reality. It matches the transaction to the vehicle's active trip and loads the expected consumption baseline for the route, so every fill is judged against a genuine reference.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function bindTrip(bytes32 fillId, bytes32 vehicle, bytes32 trip) external {\n    require(cardVehicle[fills[fillId].card] == vehicle, \"Card not on vehicle\");\n    fillTrip[fillId] = trip;\n    emit FillBound(fillId, vehicle, trip, expected[trip]);\n}",
        simAction: "Simulate Trip Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading vehicle TN09_LR22 for card FC_2210...", tone: "default" },
          { text: "Matching fill to active trip TR_5521...", tone: "default" },
          { text: "Reading expected consumption 195L...", tone: "default" },
          { text: "Applying route tolerance 8 percent...", tone: "default" },
          { text: "[SUCCESS] Fill bound to trip baseline.", tone: "success" },
        ],
      },
      {
        title: "Anomaly Engine",
        subtitle: "The Fraud Detector",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fraud Detector",
          description:
            "Judges each fill against the expected pattern. It flags volume overshoot, off-route locations, and impossible timing, routing suspected misuse to an administrator instead of hiding it in a monthly report.",
          platformFunction: "Validation & Monitoring",
        },
        codeSnippet:
          "function checkAnomaly(bytes32 fillId) external returns (bool flagged) {\n    Fill memory f = fills[fillId];\n    uint256 exp = expected[fillTrip[fillId]];\n    flagged = f.litres > exp * 108 / 100 || !onRoute(fillId);\n    if (flagged) emit FillFlagged(fillId, f.litres, exp);\n}",
        simAction: "Simulate Anomaly Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Evaluating fill 210L for FUEL_60110...", tone: "default" },
          { text: "Comparing against baseline 195L +/- 8%...", tone: "default" },
          { text: "Checking station BP_A44 against route...", tone: "default" },
          { text: "Detecting off-route overshoot...", tone: "default" },
          { text: "[SUCCESS] Anomaly flagged for review.", tone: "success" },
        ],
      },
      {
        title: "Review Ledger",
        subtitle: "The Verdict Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verdict Seal",
          description:
            "Closes the loop on a flag. It records the administrator's verdict against the flagged fill and freezes the supporting evidence, giving finance a defensible, tamper-evident fuel fraud trail.",
          platformFunction: "Billing & Audit",
        },
        codeSnippet:
          "function reviewFlag(bytes32 fillId, bool confirmed) external onlyAdmin {\n    require(flags[fillId], \"Not flagged\");\n    verdicts[fillId] = Verdict(confirmed, msg.sender, block.timestamp);\n    emit FlagReviewed(fillId, confirmed);\n}",
        simAction: "Simulate Administrator Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Presenting FUEL_60110 evidence to admin...", tone: "default" },
          { text: "Recording verdict CONFIRMED...", tone: "default" },
          { text: "Locking transaction evidence...", tone: "default" },
          { text: "Updating fleet fuel trail...", tone: "default" },
          { text: "[SUCCESS] Misuse verdict sealed on-chain.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified fuel reconciliation is a horizontal capability. Here is how different fleet actors put the shared record to work.",
    sectors: [
      { icon: Truck, title: "Fleet & Logistics Operators", description: "Match every fuel card fill to a real trip and catch personal fueling or skimming as it happens, cutting fuel leakage that manual exception reports miss for weeks.", assetTypes: ["Fuel Transactions", "Consumption Baselines", "Anomaly Flags"] },
      { icon: Wallet, title: "Fuel Card & Station Networks", description: "Publish signed transaction feeds fleets can reconcile trustlessly, reducing chargeback disputes and strengthening confidence in card usage across their stations.", assetTypes: ["Card Feeds", "Station Attestations", "Transaction Logs"] },
      { icon: PieChart, title: "Finance & Audit Teams", description: "Book fuel spend from a tamper-evident source tied to vehicles and trips, giving auditors a clean trail and a defensible basis for fraud recovery.", assetTypes: ["Cost Reports", "Audit Trails", "Fraud Evidence"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging fuel card provider systems or pulling station transaction feeds, Cerulea routes every source into one reconciled fuel record.",
    tracks: [
      {
        title: "Track A: Card Provider Bridging",
        description:
          "For fuel card and station networks on legacy systems. Existing transaction feeds are translated into signed on-chain fuel records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Card Provider Systems", sublabel: "Station Transaction Feeds", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Feed Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Fuel Reconciliation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Fleet Telematics Capture",
        description:
          "For fleets streaming vehicle and trip data. A telematics gateway signs consumption and route data from a fleet wallet and routes it directly to the ledger for matching.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Telematics Gateway", sublabel: "Vehicle & Trip Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Consumption Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Reconciled Fuel Record", icon: Wallet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a fuel reconciliation platform with station feed ingestion, per-trip consumption modeling, and real-time anomaly flagging from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Consumption & Anomaly Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects fleet fuel-analytics integration benchmarks. Connecting each card provider feed, building custom consumption modeling and anomaly-detection logic, and shipping a review workflow for an average fleet takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your consumption and anomaly rules into pre-audited WebAssembly binaries and provisions the shared fuel ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "bill-of-lading-digitization-and-multi-party-document-sharing",
    icon: ScrollText,
    eyebrow: "Electronic Title Layer",
    headline1: "Kill the paper original.",
    headline2: "Release cargo on proof.",
    heroDescription:
      "The paper bill of lading is the most fraud-prone document in global trade, slow to courier, easily forged, and often duplicated. Cerulea deploys an electronic bill of lading network where title transfer is instant, duplicate originals are impossible, and cargo release is verifiable on-chain.",
    heroCta: "Deploy eBL Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a courier-bound paper title into an instantly transferable, single-original electronic document.",
    mechanics: [
      { title: "Electronic Bill of Lading", description: "Issue one unforgeable original. The Trade Finance Documents module mints an eBL as a singular on-chain title, so the concept of a duplicated or lost original disappears entirely." },
      { title: "Instant Title Transfer", description: "Endorse without the courier. Title passes from shipper to bank to consignee by signed on-chain transfer in minutes, replacing days of physical document movement between ports." },
      { title: "Verifiable Cargo Release", description: "Release only against the true holder. The Port and Customs Events module confirms the presenting party is the current eBL holder before the shipping agent authorizes cargo release." },
      { title: "Multi-Party Document Signing", description: "Bind every endorsement cryptographically. The Document Signing module records each party's signature on the title chain, so the order of endorsements is provable and cannot be back-dated." },
      { title: "Fraud-Proof Uniqueness", description: "End cargo released on forged papers. Because only one holder can control the eBL at a time, presenting a copy for release is mathematically rejected." },
      { title: "Shared Trade Workspace", description: "Give banks, carriers, and customs one view. All authorized parties read the same title state, cutting reconciliation calls and the legal liability of releasing against the wrong document." },
    ],
    lifecycleTitle: "The Bill of Lading Lifecycle",
    lifecycleSubtitle:
      "Follow a single eBL from carrier issuance through bank and consignee endorsement to same-day cargo release.",
    lifecycleSteps: [
      {
        label: "eBL Issuance",
        description:
          "The carrier issues the electronic bill of lading at loading. The contract mints one singular title bound to the shipment and the shipper as first holder.",
        icon: ScrollText,
        logFilename: "cerulea_ebl.log",
        logLines: [
          { text: "[SYS] Initializing eBL Title Manifest...", time: "07:40:19", tone: "default" },
          { text: "[CMD] issueEBL { vessel: \"MV_ORION\", cargo: \"COTTON_800B\", shipper: \"0x71\" }", time: "07:40:19", tone: "primary" },
          { text: "[AUTH] Verifying carrier signature and booking...", time: "07:40:20", tone: "secondary" },
          { text: "[OK] eBL EBL_45012 minted. Single original on-chain.", time: "07:40:20", tone: "success" },
        ],
      },
      {
        label: "Title Endorsement",
        description:
          "The shipper endorses the eBL to the financing bank, which later endorses to the consignee. Each transfer is a signed on-chain handoff.",
        icon: Handshake,
        logFilename: "cerulea_ebl.log",
        logLines: [
          { text: "[SYS] Endorsement pending to financing bank...", time: "12:15:52", tone: "default" },
          { text: "[CMD] endorse(EBL_45012, to: \"BANK_0x33\")", time: "12:15:55", tone: "primary" },
          { text: "[SYS] Title holder updated. Prior holder released.", time: "12:15:55", tone: "default" },
          { text: "[OK] Endorsement recorded. Chain length 2 holders.", time: "12:15:56", tone: "success" },
        ],
      },
      {
        label: "Arrival Presentation",
        description:
          "At Nhava Sheva the consignee presents the eBL on-chain for cargo release. The shipping agent verifies the current holder in minutes.",
        icon: Search,
        logFilename: "cerulea_ebl.log",
        logLines: [
          { text: "[SYS] Consignee presenting EBL_45012 at arrival...", time: "09:02:11", tone: "default" },
          { text: "[CMD] presentForRelease(EBL_45012)", time: "09:02:11", tone: "primary" },
          { text: "[AUTH] Confirming presenter is current title holder...", time: "09:02:12", tone: "secondary" },
          { text: "[OK] Holder verified in 2 minutes. No courier used.", time: "09:02:13", tone: "success" },
        ],
      },
      {
        label: "Cargo Release",
        description:
          "The agent authorizes release against the verified eBL. Cargo is released the same day of vessel arrival instead of after a three-day courier wait.",
        icon: Package,
        logFilename: "cerulea_ebl.log",
        logLines: [
          { text: "[SYS] Release authorization requested...", time: "09:14:40", tone: "default" },
          { text: "[CMD] authorizeRelease(EBL_45012, agent: \"AGT_0x90\")", time: "09:14:41", tone: "primary" },
          { text: "[SYS] Surrendering title and locking eBL...", time: "09:14:41", tone: "default" },
          { text: "[OK] Cargo released same day of arrival.", time: "09:14:42", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes electronic title into modular contracts. Each layer mints, endorses, presents, and surrenders a bill of lading so only one holder can ever release the cargo.",
    layers: [
      {
        title: "Title Registry",
        subtitle: "The Single Original",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single Original",
          description:
            "The foundational data layer. It mints one indivisible eBL per shipment and stores the immutable link to cargo, carrier, and current holder, making a duplicated or forged original impossible by construction.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TitleRegistry {\n  struct EBL {\n    address carrier;\n    bytes32 cargoHash;\n    address holder;\n    bool surrendered;\n  }\n\n  mapping(bytes32 => EBL) public bills;\n\n  function issue(bytes32 id, bytes32 cargo, address shipper) external onlyCarrier {\n    bills[id] = EBL(msg.sender, cargo, shipper, false);\n  }\n}",
        simAction: "Simulate eBL Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading carrier signature for MV_ORION...", tone: "default" },
          { text: "Hashing cargo manifest COTTON_800B...", tone: "default" },
          { text: "Writing single title to Level 1 storage...", tone: "default" },
          { text: "Setting shipper as first holder...", tone: "default" },
          { text: "[SUCCESS] eBL EBL_45012 minted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Endorsement Chain",
        subtitle: "The Title Transfer",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Title Transfer",
          description:
            "Moves ownership without paper. It reassigns the single holder on each signed endorsement and records the order, so title passes shipper to bank to consignee in minutes with a provable chain.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function endorse(bytes32 id, address to) external {\n    EBL storage b = bills[id];\n    require(b.holder == msg.sender, \"Not holder\");\n    require(!b.surrendered, \"Surrendered\");\n    b.holder = to;\n    emit Endorsed(id, msg.sender, to);\n}",
        simAction: "Simulate Title Endorsement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Shipper endorsing to financing bank...", tone: "default" },
          { text: "Verifying current holder authority...", tone: "default" },
          { text: "Reassigning single title holder...", tone: "default" },
          { text: "Recording endorsement order...", tone: "default" },
          { text: "[SUCCESS] Title transferred to bank.", tone: "success" },
        ],
      },
      {
        title: "Presentation Gate",
        subtitle: "The Holder Check",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Holder Check",
          description:
            "Guards cargo release. It confirms the presenting party is the current title holder before any release is authorized, so cargo cannot be released against a copy or a superseded endorsement.",
          platformFunction: "Verification & Access",
        },
        codeSnippet:
          "function presentForRelease(bytes32 id) external view returns (bool) {\n    EBL memory b = bills[id];\n    require(!b.surrendered, \"Already surrendered\");\n    return b.holder == msg.sender;\n}",
        simAction: "Simulate Arrival Presentation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Consignee presents EBL_45012...", tone: "default" },
          { text: "Loading current title holder...", tone: "default" },
          { text: "Matching presenter against holder...", tone: "default" },
          { text: "Confirming title not surrendered...", tone: "default" },
          { text: "[SUCCESS] Holder verified for release.", tone: "success" },
        ],
      },
      {
        title: "Surrender Executor",
        subtitle: "The Release Seal",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Release Seal",
          description:
            "Closes the title's life. On authorized release it surrenders the eBL and permanently locks it, ensuring the same document can never be presented again and cargo is released exactly once.",
          platformFunction: "Settlement & Finality",
        },
        codeSnippet:
          "function authorizeRelease(bytes32 id) external onlyAgent {\n    EBL storage b = bills[id];\n    require(!b.surrendered, \"Already released\");\n    b.surrendered = true;\n    emit CargoReleased(id, b.holder, block.timestamp);\n}",
        simAction: "Simulate Cargo Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Agent authorizing release for EBL_45012...", tone: "default" },
          { text: "Confirming verified holder presentation...", tone: "default" },
          { text: "Surrendering title on-chain...", tone: "default" },
          { text: "Locking eBL against reuse...", tone: "default" },
          { text: "[SUCCESS] Cargo released, title retired.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Electronic bills of lading are a horizontal capability. Here is how different trade actors put the shared title network to work.",
    sectors: [
      { icon: Globe, title: "Carriers & Shipping Lines", description: "Issue single-original eBLs and release cargo same-day against a verified holder, eliminating the legal exposure of releasing goods without the physical original.", assetTypes: ["Electronic Titles", "Release Records", "Endorsement Chains"] },
      { icon: Landmark, title: "Trade Finance Banks", description: "Hold title as collateral and endorse instantly on payment, compressing document cycles from days to minutes while removing forged-original risk from financing.", assetTypes: ["Collateral Titles", "Endorsement Rights", "Settlement Proofs"] },
      { icon: Building2, title: "Importers & Customs Agents", description: "Present the eBL on-chain for clearance and release, cutting courier delays and demurrage while giving customs a verifiable document to act on.", assetTypes: ["Import Titles", "Clearance Proofs", "Release Authorizations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a carrier's documentation system or letting banks and consignees sign from a trade portal, Cerulea routes every party into one shared title network.",
    tracks: [
      {
        title: "Track A: Carrier System Bridging",
        description:
          "For shipping lines on legacy documentation platforms. Existing bill of lading records are translated into signed on-chain electronic titles through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Carrier Doc Systems", sublabel: "Line Documentation Platforms", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Title Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Electronic Title Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Trade Portal Endorsement",
        description:
          "For banks, shippers, and consignees on a trade portal. The portal signs each endorsement and presentation from a party wallet and routes it directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Trade Portal / Wallet", sublabel: "Bank & Consignee Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Endorsement Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Title Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an electronic bill of lading network with single-original titles, multi-party endorsement, and verifiable cargo release from scratch requires specialised trade-tech engineers and long consortium cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Title & Endorsement Rules",
      ruleCount: 52,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects global trade documentation benchmarks. Building single-original title logic, negotiating endorsement standards across carriers and banks, and shipping a verifiable release workflow for an average network takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your title and endorsement rules into pre-audited WebAssembly binaries and provisions the shared eBL ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "port-congestion-and-berth-allocation-transparency",
    icon: Boxes,
    eyebrow: "Berth Transparency Layer",
    headline1: "See the queue.",
    headline2: "Plan the arrival.",
    heroDescription:
      "Vessels arriving at congested ports can wait days for a berth while shipping lines have little visibility into their real queue position or expected wait. Cerulea anchors berth occupancy and queue data into a verified, real-time view that lines use to plan arrivals and cut idle time.",
    heroCta: "Deploy Berth Transparency",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace a blind waiting game with a verified, shared view of berth availability and queue position.",
    mechanics: [
      { title: "Live Berth State", description: "Publish real occupancy. The Provenance Notary anchors each berth's occupied or free state as it changes, giving every line one verified picture instead of rumor and phone calls." },
      { title: "Verified Queue Position", description: "Show each vessel where it stands. The contract maintains an ordered, tamper-evident queue so a line can see its true position rather than guessing at expected wait." },
      { title: "Arrival Planning Signal", description: "Turn visibility into savings. Lines use the verified queue to slow-steam or retime arrivals, cutting fuel burn and idle waiting outside a congested port." },
      { title: "Immutable Allocation Log", description: "Make berth assignment auditable. The Audit Logs module records every allocation decision, so a line can confirm assignment order was fair and unmanipulated." },
      { title: "Congestion Alerts", description: "Warn before the wait grows. The Notifications module signals lines when queue depth or expected wait crosses a threshold, so schedules adjust before delays compound." },
      { title: "Neutral Port Coordination", description: "Give the port authority one shared board. All lines and the terminal read the same allocation state, reducing disputes over who was promised which berth and when." },
    ],
    lifecycleTitle: "The Berth Allocation Lifecycle",
    lifecycleSubtitle:
      "Follow a single vessel from arrival declaration through queue positioning to a transparent berth allocation.",
    lifecycleSteps: [
      {
        label: "Arrival Declaration",
        description:
          "A vessel declares its expected arrival to the port. The contract records the declaration and admits it to the verified queue.",
        icon: Plane,
        logFilename: "cerulea_berth.log",
        logLines: [
          { text: "[SYS] Initializing Vessel Arrival Manifest...", time: "04:30:15", tone: "default" },
          { text: "[CMD] declareArrival { vessel: \"MV_TASMAN\", eta: \"2026-09-21T06:00\" }", time: "04:30:15", tone: "primary" },
          { text: "[AUTH] Verifying line credential and vessel identity...", time: "04:30:16", tone: "secondary" },
          { text: "[OK] Vessel admitted to queue at position 7.", time: "04:30:16", tone: "success" },
        ],
      },
      {
        label: "Queue Positioning",
        description:
          "The vessel takes its ordered place in the verified queue. Line operators read a true position and expected wait, not an estimate.",
        icon: Boxes,
        logFilename: "cerulea_berth.log",
        logLines: [
          { text: "[SYS] Recomputing verified queue order...", time: "05:10:44", tone: "default" },
          { text: "[CMD] queryPosition(\"MV_TASMAN\")", time: "05:10:44", tone: "primary" },
          { text: "[SYS] Position 7 of 11. Estimated wait 22 hours.", time: "05:10:45", tone: "default" },
          { text: "[OK] Verified position returned to line.", time: "05:10:45", tone: "success" },
        ],
      },
      {
        label: "Berth Release",
        description:
          "An occupied berth frees as a vessel departs. The state change is anchored and the next eligible vessel is signaled.",
        icon: Radio,
        logFilename: "cerulea_berth.log",
        logLines: [
          { text: "[SYS] Berth B4 occupancy state changing...", time: "23:48:02", tone: "default" },
          { text: "[CMD] releaseBerth(\"B4\")", time: "23:48:02", tone: "primary" },
          { text: "[SYS] Berth B4 now free. Notifying next in queue.", time: "23:48:03", tone: "default" },
          { text: "[OK] Occupancy anchored. Congestion alert cleared.", time: "23:48:03", tone: "success" },
        ],
      },
      {
        label: "Transparent Allocation",
        description:
          "The port allocates the free berth to the next eligible vessel. The decision is logged immutably for all lines to audit.",
        icon: FileCheck,
        logFilename: "cerulea_berth.log",
        logLines: [
          { text: "[SYS] Allocating berth B4 by verified order...", time: "23:52:19", tone: "default" },
          { text: "[CMD] allocateBerth(\"B4\", vessel: \"MV_TASMAN\")", time: "23:52:20", tone: "primary" },
          { text: "[SYS] Recording allocation rationale and order...", time: "23:52:20", tone: "default" },
          { text: "[OK] Berth allocated. Decision auditable by all.", time: "23:52:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes berth transparency into modular contracts. Each layer declares, queues, releases, and allocates without any single party quietly reordering the queue.",
    layers: [
      {
        title: "Vessel Registry",
        subtitle: "The Arrival Anchor",
        icon: Plane,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Arrival Anchor",
          description:
            "The foundational data layer. It records each vessel's declared arrival and stores the immutable link to line, ETA, and identity that queue positioning and allocation later depend on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract VesselRegistry {\n  struct Arrival {\n    address line;\n    string vessel;\n    uint256 eta;\n    uint256 queuedAt;\n  }\n\n  mapping(bytes32 => Arrival) public arrivals;\n\n  function declare(bytes32 id, string calldata vessel, uint256 eta) external onlyLine {\n    arrivals[id] = Arrival(msg.sender, vessel, eta, block.timestamp);\n  }\n}",
        simAction: "Simulate Arrival Declaration",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading line credential for MV_TASMAN...", tone: "default" },
          { text: "Recording declared ETA 2026-09-21...", tone: "default" },
          { text: "Writing arrival to Level 1 storage...", tone: "default" },
          { text: "Admitting vessel to verified queue...", tone: "default" },
          { text: "[SUCCESS] Vessel queued at position 7.", tone: "success" },
        ],
      },
      {
        title: "Queue Engine",
        subtitle: "The Ordered Position",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ordered Position",
          description:
            "Maintains a tamper-evident order. It returns each vessel's true queue position and expected wait, replacing opaque estimates with a verified figure lines can plan against.",
          platformFunction: "Sequencing & Workflow",
        },
        codeSnippet:
          "function queryPosition(bytes32 vesselId) external view returns (uint256 pos, uint256 waitHrs) {\n    pos = indexOf(queue, vesselId);\n    waitHrs = pos * avgServiceHours;\n}",
        simAction: "Simulate Queue Positioning",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verified queue order...", tone: "default" },
          { text: "Locating MV_TASMAN in sequence...", tone: "default" },
          { text: "Position 7 of 11 confirmed...", tone: "default" },
          { text: "Estimating wait at 22 hours...", tone: "default" },
          { text: "[SUCCESS] Verified position returned.", tone: "success" },
        ],
      },
      {
        title: "Occupancy Oracle",
        subtitle: "The Berth State",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Berth State",
          description:
            "Publishes real availability. It anchors each berth's occupied or free transition and signals the next eligible vessel, so the shared board reflects the port's true state as it changes.",
          platformFunction: "Telemetry & Monitoring",
        },
        codeSnippet:
          "function releaseBerth(bytes32 berth) external onlyTerminal {\n    require(occupied[berth], \"Already free\");\n    occupied[berth] = false;\n    emit BerthFreed(berth, block.timestamp);\n}",
        simAction: "Simulate Berth Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting departure from berth B4...", tone: "default" },
          { text: "Flipping occupancy to free...", tone: "default" },
          { text: "Anchoring state change on-chain...", tone: "default" },
          { text: "Signaling next vessel in queue...", tone: "default" },
          { text: "[SUCCESS] Berth B4 marked free.", tone: "success" },
        ],
      },
      {
        title: "Allocation Ledger",
        subtitle: "The Fair Assignment",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fair Assignment",
          description:
            "Makes berth allocation auditable. It records each assignment with its rationale and queue order, so every line can confirm the port allocated berths fairly rather than out of turn.",
          platformFunction: "Governance & Audit",
        },
        codeSnippet:
          "function allocateBerth(bytes32 berth, bytes32 vesselId) external onlyTerminal {\n    require(!occupied[berth], \"Berth busy\");\n    occupied[berth] = true;\n    allocations[berth] = Allocation(vesselId, block.timestamp);\n    emit BerthAllocated(berth, vesselId);\n}",
        simAction: "Simulate Transparent Allocation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified queue order for B4...", tone: "default" },
          { text: "Selecting next eligible vessel MV_TASMAN...", tone: "default" },
          { text: "Recording allocation rationale...", tone: "default" },
          { text: "Marking berth B4 occupied...", tone: "default" },
          { text: "[SUCCESS] Allocation logged for audit.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified berth transparency is a horizontal capability. Here is how different maritime actors put the shared view to work.",
    sectors: [
      { icon: Globe, title: "Shipping Lines & Operators", description: "Read a true queue position and expected wait to retime arrivals and slow-steam into congested ports, cutting fuel burn and idle demurrage on every rotation.", assetTypes: ["Queue Positions", "Arrival Plans", "Wait Estimates"] },
      { icon: Landmark, title: "Port Authorities & Terminals", description: "Run one shared allocation board that all lines trust, reducing disputes over berth promises and giving a defensible, auditable record of every assignment.", assetTypes: ["Berth States", "Allocation Logs", "Congestion Signals"] },
      { icon: Truck, title: "Inland Hauliers & Depots", description: "Plan trucking and yard capacity against verified berth timing, so onward moves are scheduled to real availability instead of speculative vessel ETAs.", assetTypes: ["Yard Schedules", "Haulage Plans", "Slot Bookings"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a terminal operating system or letting lines read queue state from a planning portal, Cerulea routes both into one shared berth record.",
    tracks: [
      {
        title: "Track A: Terminal System Bridging",
        description:
          "For ports on legacy terminal operating systems. Existing berth and vessel events are translated into signed on-chain occupancy and queue updates through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Terminal Operating System", sublabel: "Port Berth Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "State Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Berth Allocation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Line Planning Capture",
        description:
          "For shipping lines on planning tools. A portal signs each arrival declaration from a line wallet and reads verified queue state directly from the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Line Planning Portal", sublabel: "Shipping Line Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Queue Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Berth Record", icon: Boxes, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verified berth transparency platform with live occupancy anchoring, tamper-evident queueing, and auditable allocation from scratch requires specialised maritime engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Queue & Allocation Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects port-systems integration benchmarks. Connecting a terminal operating system, building custom queue-ordering and occupancy logic, and shipping an auditable allocation board for an average port takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your queue and allocation rules into pre-audited WebAssembly binaries and provisions the shared berth ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "container-demurrage-and-detention-charge-dispute-resolution",
    icon: Package,
    eyebrow: "Demurrage Settlement Layer",
    headline1: "Stamp the gate move.",
    headline2: "End the demurrage fight.",
    heroDescription:
      "Demurrage and detention charges for containers held beyond free time drive constant disputes because the underlying gate timestamps are contested. Cerulea anchors verified gate-in and gate-out times and calculates charges against agreed free periods, so disputes over the facts disappear.",
    heroCta: "Deploy Demurrage Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a contested timestamp into a self-calculating demurrage and detention record.",
    mechanics: [
      { title: "Verified Gate Events", description: "Anchor the exact moments. The Provenance Notary seals each container gate-in and gate-out timestamp, so the clock that drives every charge is agreed by construction." },
      { title: "Free-Time Encoding", description: "Write the contract into code. Agreed free periods for demurrage and detention are encoded per container and customer, so the meter knows precisely when billable time begins." },
      { title: "Automatic Charge Calc", description: "Compute fees from facts. The Invoices and Billing module derives demurrage and detention from the sealed timestamps and free time, removing manual and disputable calculation." },
      { title: "Immutable Movement Log", description: "Freeze the evidence. The Audit Logs module records every gate movement immutably, so neither line nor customer can revise a timestamp after the fact." },
      { title: "Split Demurrage & Detention", description: "Separate the two clocks. Time inside the terminal and time with the consignee are metered distinctly, so charges map to the right party and the right agreement." },
      { title: "Fact-Free Disputes", description: "Argue terms, not timestamps. Because gate times are verified, any remaining dispute is about contract interpretation, not whose log is right, cutting resolution to minutes." },
    ],
    lifecycleTitle: "The Demurrage Lifecycle",
    lifecycleSubtitle:
      "Follow a single container from gate-in through the free-time window to an automatically calculated charge.",
    lifecycleSteps: [
      {
        label: "Container Gate-In",
        description:
          "The container enters the terminal. The contract seals a verified gate-in timestamp that starts the demurrage free-time clock.",
        icon: Package,
        logFilename: "cerulea_demurrage.log",
        logLines: [
          { text: "[SYS] Initializing Container Gate Manifest...", time: "06:20:33", tone: "default" },
          { text: "[CMD] gateIn { container: \"MSCU_7741208\", terminal: \"JNPT_T2\" }", time: "06:20:33", tone: "primary" },
          { text: "[AUTH] Verifying gate reader signature and seal...", time: "06:20:34", tone: "secondary" },
          { text: "[OK] Gate-in CNT_88120 anchored. Free time started.", time: "06:20:34", tone: "success" },
        ],
      },
      {
        label: "Free-Time Window",
        description:
          "The agreed demurrage free days elapse while the container sits at the terminal awaiting pickup.",
        icon: HeartPulse,
        logFilename: "cerulea_demurrage.log",
        logLines: [
          { text: "[SYS] Free-time allowance for MSCU_7741208: 5 days...", time: "06:20:35", tone: "default" },
          { text: "[CMD] checkWindow(CNT_88120)", time: "06:20:35", tone: "primary" },
          { text: "[SYS] Day 6 reached. Demurrage now accruing.", time: "06:20:35", tone: "secondary" },
          { text: "[OK] Meter switched to billable demurrage.", time: "06:20:36", tone: "success" },
        ],
      },
      {
        label: "Container Gate-Out",
        description:
          "The container leaves the terminal with the consignee. Gate-out is sealed, closing demurrage and starting the detention clock.",
        icon: Truck,
        logFilename: "cerulea_demurrage.log",
        logLines: [
          { text: "[SYS] Gate-out pending for MSCU_7741208...", time: "14:05:10", tone: "default" },
          { text: "[CMD] gateOut(CNT_88120)", time: "14:05:12", tone: "primary" },
          { text: "[SYS] Demurrage sealed at 2 days. Detention clock on.", time: "14:05:12", tone: "default" },
          { text: "[OK] Gate-out anchored with both timestamps.", time: "14:05:13", tone: "success" },
        ],
      },
      {
        label: "Charge Settlement",
        description:
          "The contract calculates demurrage and detention from the sealed times and agreed free periods, issuing a charge disputes cannot contest on facts.",
        icon: FileCheck,
        logFilename: "cerulea_demurrage.log",
        logLines: [
          { text: "[SYS] Computing charges for CNT_88120...", time: "18:30:41", tone: "default" },
          { text: "[CMD] settleCharges(demurrageDays: 2, detentionDays: 0)", time: "18:30:41", tone: "primary" },
          { text: "[SYS] Demurrage 2 days at agreed rate. Detention nil.", time: "18:30:41", tone: "default" },
          { text: "[OK] Charge issued from verified timestamps.", time: "18:30:42", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes demurrage settlement into modular contracts. Each layer stamps gate events, meters free time, and calculates charges without either party controlling the timestamps.",
    layers: [
      {
        title: "Gate Registry",
        subtitle: "The Timestamp Anchor",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Timestamp Anchor",
          description:
            "The foundational data layer. It seals verified gate-in and gate-out timestamps for each container and stores the immutable link to terminal, seal, and free-time terms that every charge derives from.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract GateRegistry {\n  struct Move {\n    string container;\n    uint256 gateIn;\n    uint256 gateOut;\n    uint256 freeDays;\n  }\n\n  mapping(bytes32 => Move) public moves;\n\n  function gateIn(bytes32 id, string calldata cnt, uint256 freeDays) external onlyGate {\n    moves[id] = Move(cnt, block.timestamp, 0, freeDays);\n  }\n}",
        simAction: "Simulate Container Gate-In",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading gate reader signature...", tone: "default" },
          { text: "Sealing gate-in for MSCU_7741208...", tone: "default" },
          { text: "Writing timestamp to Level 1 storage...", tone: "default" },
          { text: "Loading free-time allowance 5 days...", tone: "default" },
          { text: "[SUCCESS] Gate-in CNT_88120 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Free-Time Meter",
        subtitle: "The Billable Switch",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Billable Switch",
          description:
            "Encodes the agreed periods. Once elapsed dwell exceeds free days, the meter flips to billable, ensuring demurrage and detention accrue only beyond the terms both parties accepted.",
          platformFunction: "Metering & Rules",
        },
        codeSnippet:
          "function demurrageDays(bytes32 id) public view returns (uint256) {\n    Move memory m = moves[id];\n    uint256 endTs = m.gateOut == 0 ? block.timestamp : m.gateOut;\n    uint256 dwell = (endTs - m.gateIn) / 1 days;\n    return dwell > m.freeDays ? dwell - m.freeDays : 0;\n}",
        simAction: "Simulate Free-Time Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading dwell time for CNT_88120...", tone: "default" },
          { text: "Comparing against 5 free days...", tone: "default" },
          { text: "Computing billable demurrage days...", tone: "default" },
          { text: "Flipping meter to billable state...", tone: "default" },
          { text: "[SUCCESS] Billable demurrage 2 days confirmed.", tone: "success" },
        ],
      },
      {
        title: "Detention Splitter",
        subtitle: "The Two-Clock Model",
        icon: Truck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Two-Clock Model",
          description:
            "Separates terminal from consignee time. On gate-out it closes demurrage and opens detention, metering the two distinctly so charges map to the correct party and agreement.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function gateOut(bytes32 id) external onlyGate {\n    Move storage m = moves[id];\n    require(m.gateOut == 0, \"Already out\");\n    m.gateOut = block.timestamp;\n    detentionStart[id] = block.timestamp;\n    emit GateOut(id, block.timestamp);\n}",
        simAction: "Simulate Container Gate-Out",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Sealing gate-out for MSCU_7741208...", tone: "default" },
          { text: "Closing demurrage at 2 days...", tone: "default" },
          { text: "Opening detention clock...", tone: "default" },
          { text: "Anchoring both timestamps...", tone: "default" },
          { text: "[SUCCESS] Gate-out sealed with split clocks.", tone: "success" },
        ],
      },
      {
        title: "Charge Ledger",
        subtitle: "The Fact-Based Bill",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fact-Based Bill",
          description:
            "Derives money from verified time. It calculates demurrage and detention from the sealed timestamps and agreed rates, issuing a charge that cannot be contested on the underlying facts.",
          platformFunction: "Billing & Settlement",
        },
        codeSnippet:
          "function settleCharges(bytes32 id, uint256 demRate, uint256 detRate) external {\n    uint256 dem = demurrageDays(id) * demRate;\n    uint256 det = detentionDays(id) * detRate;\n    emit ChargesSettled(id, dem, det);\n}",
        simAction: "Simulate Charge Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading sealed timestamps for CNT_88120...", tone: "default" },
          { text: "Applying agreed demurrage rate...", tone: "default" },
          { text: "Computing detention at nil days...", tone: "default" },
          { text: "Issuing fact-based charge...", tone: "default" },
          { text: "[SUCCESS] Charge settled from verified data.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified demurrage settlement is a horizontal capability. Here is how different container actors put the shared record to work.",
    sectors: [
      { icon: Globe, title: "Shipping Lines & Carriers", description: "Bill demurrage and detention from sealed gate times, cutting dispute volume and write-offs while giving customers a charge they can independently verify.", assetTypes: ["Gate Timestamps", "Charge Records", "Free-Time Terms"] },
      { icon: Building2, title: "Importers & Consignees", description: "Pay only for time genuinely beyond free periods, resolving contested charges in minutes against a shared, tamper-evident movement log rather than the line's word.", assetTypes: ["Container Moves", "Charge Statements", "Dispute Evidence"] },
      { icon: Landmark, title: "Terminals & Depots", description: "Anchor neutral gate events both sides trust, removing the terminal from the middle of demurrage arguments and providing an auditable dwell record.", assetTypes: ["Gate Logs", "Dwell Records", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a terminal gate system or letting lines and consignees read charges from a portal, Cerulea routes both into one shared container record.",
    tracks: [
      {
        title: "Track A: Terminal Gate Bridging",
        description:
          "For terminals on legacy gate systems. Existing gate-in and gate-out events are translated into signed on-chain timestamps through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Terminal Gate System", sublabel: "Container Gate Readers", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Timestamp Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Demurrage Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Line & Consignee Portal",
        description:
          "For carriers and consignees on a settlement portal. The portal signs each charge review from a party wallet and reads verified gate data directly from the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Settlement Portal", sublabel: "Line & Consignee Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Charge Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Container Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a demurrage settlement platform with verified gate timestamps, encoded free-time terms, and automatic charge calculation from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Free-Time & Charge Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects container-billing integration benchmarks. Connecting each terminal gate system, building custom free-time metering and dual-clock charge logic, and shipping a dispute-resistant settlement flow for an average network takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your metering and charge rules into pre-audited WebAssembly binaries and provisions the shared demurrage ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "crew-certification-and-seafarer-welfare-compliance",
    icon: ShieldCheck,
    eyebrow: "Seafarer Compliance Layer",
    headline1: "Verify the crew.",
    headline2: "Prove the rest hours.",
    heroDescription:
      "Maritime labour conventions require valid crew certifications and rest hour compliance, yet port state inspectors often rely on paper records that are incomplete or outdated. Cerulea maintains verified seafarer certifications, contracts, and rest hour logs that inspectors can check digitally during a vessel inspection.",
    heroCta: "Deploy Crew Compliance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a folder of ship-presented paper into inspector-verifiable seafarer compliance.",
    mechanics: [
      { title: "Verifiable Crew Credentials", description: "Bind certificates to seafarers. The DID and VC Ledger anchors each certificate of competency and endorsement to the seafarer's identity, so a document cannot be forged or reused across crew." },
      { title: "Rest Hour Attestation", description: "Prove convention compliance. The Compliance Attestations module records rest and work hour logs against MLC and STCW limits, so a vessel can demonstrate lawful rest patterns." },
      { title: "Inspector Verification", description: "Check without the ship's say-so. A port state inspector queries the verified record directly during inspection, confirming crew status independently of documents the ship chooses to present." },
      { title: "Contract Registry", description: "Anchor seafarer agreements. The Civil Registry module stores each crew contract and welfare entitlement, giving inspectors and seafarers a tamper-evident reference." },
      { title: "Expiry & Endorsement Alerts", description: "Keep the muster compliant. The system flags certificates and endorsements nearing expiry, so a vessel is not caught short-crewed or non-compliant at a port call." },
      { title: "Welfare Evidence Trail", description: "Support seafarer rights. Rest logs and contract records form an immutable welfare trail, protecting seafarers and reducing detention risk under labour conventions." },
    ],
    lifecycleTitle: "The Crew Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a seafarer's records from certification and sign-on through rest hour logging to a port state inspection.",
    lifecycleSteps: [
      {
        label: "Certification Anchor",
        description:
          "A maritime authority issues the seafarer a certificate of competency. It is anchored as a verifiable credential to their identity.",
        icon: ShieldCheck,
        logFilename: "cerulea_crew.log",
        logLines: [
          { text: "[SYS] Initializing Seafarer Credential Manifest...", time: "08:05:22", tone: "default" },
          { text: "[CMD] issueCoC { did: \"DID_SEA_2210\", rank: \"2ND_OFFICER\", expiry: \"2029-01-15\" }", time: "08:05:22", tone: "primary" },
          { text: "[AUTH] Verifying maritime authority signature...", time: "08:05:23", tone: "secondary" },
          { text: "[OK] Certificate CERT_7781 anchored to seafarer.", time: "08:05:23", tone: "success" },
        ],
      },
      {
        label: "Sign-On & Contract",
        description:
          "The seafarer signs on to the vessel. The crew contract and welfare entitlements are registered against the voyage.",
        icon: Handshake,
        logFilename: "cerulea_crew.log",
        logLines: [
          { text: "[SYS] Registering sign-on for DID_SEA_2210...", time: "10:40:11", tone: "default" },
          { text: "[CMD] signOn(vessel: \"MV_KESTREL\", contract: \"SEA_9902\")", time: "10:40:11", tone: "primary" },
          { text: "[SYS] Recording welfare entitlements and voyage.", time: "10:40:12", tone: "default" },
          { text: "[OK] Seafarer added to verified muster.", time: "10:40:12", tone: "success" },
        ],
      },
      {
        label: "Rest Hour Logging",
        description:
          "Daily rest and work hours are logged against convention limits, building a continuous compliance record for the voyage.",
        icon: HeartPulse,
        logFilename: "cerulea_crew.log",
        logLines: [
          { text: "[SYS] Recording daily rest for DID_SEA_2210...", time: "23:59:00", tone: "default" },
          { text: "[CMD] logRest(hours: 11, workBlock: 13)", time: "23:59:00", tone: "primary" },
          { text: "[SYS] Checking against MLC 10h in 24h minimum...", time: "23:59:01", tone: "default" },
          { text: "[OK] Rest compliant. Voyage record extended.", time: "23:59:01", tone: "success" },
        ],
      },
      {
        label: "Port State Inspection",
        description:
          "An inspector boards and queries the verified record, confirming certifications and rest compliance digitally rather than from ship paperwork.",
        icon: Search,
        logFilename: "cerulea_crew.log",
        logLines: [
          { text: "[SYS] Inspector opening record for MV_KESTREL...", time: "07:18:45", tone: "default" },
          { text: "[CMD] inspectCrew(vessel: \"MV_KESTREL\")", time: "07:18:45", tone: "primary" },
          { text: "[AUTH] Verifying 22 certificates and rest logs...", time: "07:18:46", tone: "secondary" },
          { text: "[OK] Crew compliant. Inspection cleared digitally.", time: "07:18:47", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes seafarer compliance into modular contracts. Each layer certifies, contracts, logs rest, and exposes the record to inspectors without the ship controlling the source of truth.",
    layers: [
      {
        title: "Credential Registry",
        subtitle: "The Seafarer Passport",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Seafarer Passport",
          description:
            "The foundational data layer. It binds each certificate of competency and endorsement to the seafarer's identity and stores the immutable issuer signature and expiry that inspections rely on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CrewRegistry {\n  struct CoC {\n    bytes32 seafarerDid;\n    string rank;\n    address authority;\n    uint256 expiry;\n  }\n\n  mapping(bytes32 => CoC) public certs;\n\n  function issue(bytes32 id, bytes32 did, string calldata rank, uint256 exp) external onlyAuthority {\n    certs[id] = CoC(did, rank, msg.sender, exp);\n  }\n}",
        simAction: "Simulate Certification Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading maritime authority signature...", tone: "default" },
          { text: "Binding certificate to DID_SEA_2210...", tone: "default" },
          { text: "Writing credential to Level 1 storage...", tone: "default" },
          { text: "Registering expiry watcher for 2029-01-15...", tone: "default" },
          { text: "[SUCCESS] Certificate CERT_7781 anchored.", tone: "success" },
        ],
      },
      {
        title: "Contract Vault",
        subtitle: "The Welfare Record",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Welfare Record",
          description:
            "Anchors seafarer agreements. It registers each crew contract and welfare entitlement against the voyage, giving inspectors and seafarers a tamper-evident reference protected under labour conventions.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function signOn(bytes32 did, bytes32 vessel, bytes32 contractHash) external onlyMaster {\n    muster[vessel].push(did);\n    contracts[did] = Contract(vessel, contractHash, block.timestamp);\n    emit SignedOn(did, vessel);\n}",
        simAction: "Simulate Sign-On Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Registering sign-on for DID_SEA_2210...", tone: "default" },
          { text: "Hashing crew contract SEA_9902...", tone: "default" },
          { text: "Recording welfare entitlements...", tone: "default" },
          { text: "Adding seafarer to vessel muster...", tone: "default" },
          { text: "[SUCCESS] Contract anchored to voyage.", tone: "success" },
        ],
      },
      {
        title: "Rest Hour Monitor",
        subtitle: "The Compliance Meter",
        icon: HeartPulse,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Meter",
          description:
            "Enforces rest limits. It logs daily rest and work blocks against MLC and STCW minimums, building a continuous, verifiable record that a vessel met lawful rest patterns throughout the voyage.",
          platformFunction: "Metering & Monitoring",
        },
        codeSnippet:
          "function logRest(bytes32 did, uint256 restHours) external onlyMaster {\n    require(restHours >= 10, \"Below MLC minimum\");\n    restLog[did].push(RestEntry(restHours, block.timestamp));\n    emit RestLogged(did, restHours);\n}",
        simAction: "Simulate Rest Hour Logging",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording daily rest for DID_SEA_2210...", tone: "default" },
          { text: "Reading 11 rest hours in 24h window...", tone: "default" },
          { text: "Checking against MLC minimum...", tone: "default" },
          { text: "Appending entry to voyage record...", tone: "default" },
          { text: "[SUCCESS] Rest compliance logged on-chain.", tone: "success" },
        ],
      },
      {
        title: "Inspection Window",
        subtitle: "The Inspector View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Inspector View",
          description:
            "A read gateway for port state control. It returns verified certifications and rest logs for the whole crew, letting an inspector confirm compliance independently of documents the ship presents.",
          platformFunction: "Verification & Audit",
        },
        codeSnippet:
          "function inspectCrew(bytes32 vessel) external view returns (bytes32[] memory certIds, bool restOk) {\n    return (vesselCerts[vessel], restCompliant[vessel]);\n}",
        simAction: "Simulate Port State Inspection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Inspector opens MV_KESTREL record...", tone: "default" },
          { text: "Assembling 22 crew certificates...", tone: "default" },
          { text: "Checking voyage rest compliance...", tone: "default" },
          { text: "Confirming no expired credentials...", tone: "default" },
          { text: "[SUCCESS] Crew verified, inspection cleared.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified seafarer compliance is a horizontal capability. Here is how different maritime actors put the shared record to work.",
    sectors: [
      { icon: Globe, title: "Ship Owners & Managers", description: "Maintain a verified muster of certifications, contracts, and rest logs, reducing detention risk at inspections and proving welfare compliance across the fleet.", assetTypes: ["Crew Certificates", "Rest Logs", "Welfare Records"] },
      { icon: Landmark, title: "Port State & Flag Authorities", description: "Inspect crew compliance digitally against a tamper-evident record, clearing compliant vessels faster and catching genuine welfare breaches instead of paperwork gaps.", assetTypes: ["Inspection Records", "Compliance Proofs", "Detention Evidence"] },
      { icon: Users, title: "Seafarers & Unions", description: "Carry portable, verifiable credentials and a protected welfare trail, so rest violations and contract disputes are settled against immutable evidence.", assetTypes: ["Portable Credentials", "Rest Evidence", "Contract Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a crew management system or letting inspectors query records from a boarding device, Cerulea routes both into one shared seafarer record.",
    tracks: [
      {
        title: "Track A: Crew Management Bridging",
        description:
          "For managers on legacy crewing systems. Existing certification and rest records are translated into signed on-chain verifiable credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Crew Management System", sublabel: "Ship Manager Databases", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Seafarer Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Inspector Boarding Capture",
        description:
          "For port state inspectors on boarding devices. A boarding app signs each inspection query from an inspector wallet and reads verified crew status directly from the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Boarding App / Wallet", sublabel: "Inspector Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Compliance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Seafarer Record", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a seafarer compliance platform with verifiable certifications, rest hour monitoring, and inspector-facing verification from scratch requires specialised maritime and identity engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Certification & Rest Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects maritime-compliance integration benchmarks. Connecting each crew management system, building custom certification and rest hour logic, and shipping an inspector verification interface for an average fleet takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your certification and rest rules into pre-audited WebAssembly binaries and provisions the shared seafarer ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "vessel-emissions-compliance-for-imo-carbon-intensity-rules",
    icon: Leaf,
    eyebrow: "Vessel Emissions MRV Layer",
    headline1: "Anchor the fuel burn.",
    headline2: "Prove carbon intensity.",
    heroDescription:
      "IMO rules now require vessels to meet carbon intensity targets, and lines must report verified fuel consumption and emissions to demonstrate compliance and trade allowances. Cerulea anchors verified per-vessel fuel and emissions data into a defensible record for regulatory reporting and carbon transactions.",
    heroCta: "Deploy Emissions Compliance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn scattered noon reports into a verified, auditable carbon intensity record per vessel.",
    mechanics: [
      { title: "Verified Fuel Ingest", description: "Capture consumption at source. External Data Oracles ingest bunker and noon-report fuel data per vessel, so the emissions calculation rests on verified inputs rather than manual returns." },
      { title: "Carbon Intensity Calc", description: "Compute the CII directly. The contract derives carbon intensity from fuel burned and distance sailed, giving lines a live figure against their required IMO rating band." },
      { title: "Compliance Attestation", description: "Anchor the regulatory claim. The Compliance Attestations module seals each reporting period's emissions statement, producing a defensible record for the flag state and IMO." },
      { title: "MRV Registry Link", description: "Feed the carbon market. The Carbon Credits MRV and Registry module links verified emissions to allowance positions, so lines can trade or surrender allowances from trusted data." },
      { title: "Rating Trend Alerts", description: "Warn before a downgrade. The system signals when a vessel's intensity trends toward a failing band, so operational changes happen before the annual rating is set." },
      { title: "Auditable Emissions Trail", description: "Withstand scrutiny. Every fuel input and calculation is anchored immutably, giving auditors and buyers a tamper-evident basis for the vessel's reported carbon intensity." },
    ],
    lifecycleTitle: "The Emissions Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a single vessel from fuel data capture through carbon intensity calculation to an attested compliance report.",
    lifecycleSteps: [
      {
        label: "Fuel Data Capture",
        description:
          "Bunker and noon-report fuel figures are ingested per voyage leg. The contract anchors verified consumption against the vessel.",
        icon: Wallet,
        logFilename: "cerulea_emissions.log",
        logLines: [
          { text: "[SYS] Initializing Fuel Consumption Manifest...", time: "12:00:05", tone: "default" },
          { text: "[CMD] ingestFuel { vessel: \"MV_ALTAIR\", tonnes: 38.4, leg: \"SIN_ROT\" }", time: "12:00:05", tone: "primary" },
          { text: "[AUTH] Verifying bunker delivery note signature...", time: "12:00:06", tone: "secondary" },
          { text: "[OK] Fuel FUEL_LEG_2210 anchored to vessel.", time: "12:00:06", tone: "success" },
        ],
      },
      {
        label: "Intensity Calculation",
        description:
          "The contract computes carbon intensity from fuel and distance sailed, comparing it against the vessel's required rating band.",
        icon: Leaf,
        logFilename: "cerulea_emissions.log",
        logLines: [
          { text: "[SYS] Computing carbon intensity for MV_ALTAIR...", time: "12:00:07", tone: "default" },
          { text: "[CMD] computeCII(fuel: 38.4, distanceNm: 5100)", time: "12:00:07", tone: "primary" },
          { text: "[SYS] CII derived. Vessel tracking to band C.", time: "12:00:07", tone: "default" },
          { text: "[OK] Intensity anchored for the period.", time: "12:00:08", tone: "success" },
        ],
      },
      {
        label: "Compliance Attestation",
        description:
          "The reporting period's emissions statement is sealed as a compliance attestation for the flag state and IMO.",
        icon: FileCheck,
        logFilename: "cerulea_emissions.log",
        logLines: [
          { text: "[SYS] Sealing annual emissions statement...", time: "09:15:30", tone: "default" },
          { text: "[CMD] attestPeriod(vessel: \"MV_ALTAIR\", year: 2026)", time: "09:15:30", tone: "primary" },
          { text: "[AUTH] Binding verified fuel and distance totals...", time: "09:15:31", tone: "secondary" },
          { text: "[OK] Compliance attestation sealed and defensible.", time: "09:15:31", tone: "success" },
        ],
      },
      {
        label: "Allowance Settlement",
        description:
          "Verified emissions link to the vessel's allowance position, letting the line surrender or trade carbon allowances from trusted data.",
        icon: Coins,
        logFilename: "cerulea_emissions.log",
        logLines: [
          { text: "[SYS] Linking emissions to allowance registry...", time: "10:42:18", tone: "default" },
          { text: "[CMD] settleAllowances(vessel: \"MV_ALTAIR\", surplus: 120)", time: "10:42:18", tone: "primary" },
          { text: "[SYS] Surplus allowances available to trade.", time: "10:42:19", tone: "default" },
          { text: "[OK] Allowance position updated from verified data.", time: "10:42:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes emissions compliance into modular contracts. Each layer ingests fuel, computes intensity, attests, and settles allowances without any single return being taken on trust.",
    layers: [
      {
        title: "Fuel Registry",
        subtitle: "The Consumption Anchor",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Consumption Anchor",
          description:
            "The foundational data layer. It records verified bunker and noon-report fuel per vessel and stores the immutable link to leg, distance, and delivery note that the intensity calculation depends on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract FuelRegistry {\n  struct Leg {\n    string vessel;\n    uint256 fuelTonnes;\n    uint256 distanceNm;\n    uint256 at;\n  }\n\n  mapping(bytes32 => Leg) public legs;\n\n  function ingest(bytes32 id, string calldata vessel, uint256 fuel, uint256 dist) external onlyFeed {\n    legs[id] = Leg(vessel, fuel, dist, block.timestamp);\n  }\n}",
        simAction: "Simulate Fuel Data Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading bunker delivery note signature...", tone: "default" },
          { text: "Binding fuel to vessel MV_ALTAIR...", tone: "default" },
          { text: "Writing leg consumption to Level 1 storage...", tone: "default" },
          { text: "Recording distance 5100 nm...", tone: "default" },
          { text: "[SUCCESS] Fuel leg anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Intensity Engine",
        subtitle: "The CII Calculator",
        icon: Leaf,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The CII Calculator",
          description:
            "Derives carbon intensity from verified inputs. It converts fuel and distance into a CII figure and maps it to the required rating band, giving lines a live, defensible compliance position.",
          platformFunction: "Computation & Rules",
        },
        codeSnippet:
          "function computeCII(bytes32 vessel) public view returns (uint256 cii, bytes1 band) {\n    (uint256 fuel, uint256 dist) = totals(vessel);\n    cii = (fuel * emissionFactor) / dist;\n    band = rateBand(cii);\n}",
        simAction: "Simulate Intensity Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Summing verified fuel for MV_ALTAIR...", tone: "default" },
          { text: "Applying emission factor to consumption...", tone: "default" },
          { text: "Dividing by distance sailed...", tone: "default" },
          { text: "Mapping intensity to band C...", tone: "default" },
          { text: "[SUCCESS] Carbon intensity computed.", tone: "success" },
        ],
      },
      {
        title: "Attestation Vault",
        subtitle: "The Regulatory Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Regulatory Seal",
          description:
            "Seals the reporting period. It binds verified totals into a compliance attestation for the flag state and IMO, producing a tamper-evident statement that withstands regulatory audit.",
          platformFunction: "Provenance & Certification",
        },
        codeSnippet:
          "function attestPeriod(bytes32 vessel, uint256 year) external onlyOperator {\n    (uint256 cii, bytes1 band) = computeCII(vessel);\n    attestations[keccak256(abi.encode(vessel, year))] = Attest(cii, band, block.timestamp);\n    emit PeriodAttested(vessel, year, band);\n}",
        simAction: "Simulate Compliance Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verified totals for 2026...", tone: "default" },
          { text: "Binding fuel and distance to statement...", tone: "default" },
          { text: "Sealing compliance attestation...", tone: "default" },
          { text: "Anchoring band C for the period...", tone: "default" },
          { text: "[SUCCESS] Emissions statement attested.", tone: "success" },
        ],
      },
      {
        title: "Allowance Ledger",
        subtitle: "The Market Bridge",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Market Bridge",
          description:
            "Connects compliance to the carbon market. It links attested emissions to the vessel's allowance position, letting a line surrender or trade allowances from a single verified source.",
          platformFunction: "Settlement & Registry",
        },
        codeSnippet:
          "function settleAllowances(bytes32 vessel, uint256 surplus) external onlyOperator {\n    require(attested[vessel], \"Period not attested\");\n    allowanceBalance[vessel] += int256(surplus);\n    emit AllowancesSettled(vessel, surplus);\n}",
        simAction: "Simulate Allowance Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading attested emissions for MV_ALTAIR...", tone: "default" },
          { text: "Computing allowance surplus of 120...", tone: "default" },
          { text: "Updating vessel allowance balance...", tone: "default" },
          { text: "Marking surplus available to trade...", tone: "default" },
          { text: "[SUCCESS] Allowance position settled.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified emissions MRV is a horizontal capability. Here is how different maritime actors put the shared record to work.",
    sectors: [
      { icon: Globe, title: "Shipping Lines & Operators", description: "Report carbon intensity from verified fuel data and manage allowances per vessel, turning IMO compliance from a spreadsheet exercise into a defensible on-chain record.", assetTypes: ["Emissions Records", "CII Ratings", "Allowance Positions"] },
      { icon: Landmark, title: "Flag States & Regulators", description: "Verify reported carbon intensity against tamper-evident fuel data, clearing compliant vessels and detecting understated emissions without trusting manual returns.", assetTypes: ["Compliance Attestations", "Audit Trails", "Rating Registries"] },
      { icon: Coins, title: "Carbon Markets & Charterers", description: "Price and settle maritime allowances against trusted MRV data, so carbon transactions rest on verified emissions rather than self-declared figures.", assetTypes: ["Allowance Trades", "MRV Proofs", "Charter Clauses"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a fleet performance system or streaming bunker and noon reports from onboard sensors, Cerulea routes both into one verified emissions record.",
    tracks: [
      {
        title: "Track A: Fleet Performance Bridging",
        description:
          "For operators on legacy fleet performance systems. Existing fuel and voyage data are translated into signed on-chain consumption records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Fleet Performance System", sublabel: "Operator Voyage Databases", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Data Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Emissions MRV Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Onboard Sensor Capture",
        description:
          "For vessels streaming flow-meter and noon data. An onboard gateway signs each fuel reading from a vessel wallet and routes it directly to the ledger for MRV.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Onboard Gateway", sublabel: "Flow Meters & Sensors", icon: Radio, accent: false },
          { label: "Consortium Validators", sublabel: "Emissions Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Emissions Record", icon: Leaf, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an emissions MRV platform with verified fuel ingestion, carbon intensity calculation, and allowance settlement from scratch requires specialised maritime and carbon engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Emissions & Allowance Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects maritime MRV integration benchmarks. Connecting each fleet performance system, building custom carbon intensity and attestation logic, and shipping an allowance settlement bridge for an average fleet takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your emissions and allowance rules into pre-audited WebAssembly binaries and provisions the shared MRV ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "warehouse-receipt-tokenization-for-commodity-financing",
    icon: Database,
    eyebrow: "Commodity Collateral Layer",
    headline1: "Tokenize the receipt.",
    headline2: "Finance the harvest.",
    heroDescription:
      "Farmers and traders storing goods in licensed warehouses struggle to use inventory as collateral because paper receipts can be fraudulently duplicated. Cerulea runs a hybrid platform with NFT warehouse receipts, financing collateral escrow, and a commodity exchange trading layer.",
    heroCta: "Deploy Receipt Tokenization",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a forgeable paper receipt into a financeable, tradable on-chain collateral asset.",
    mechanics: [
      { title: "NFT Warehouse Receipt", description: "Mint one unique receipt. The ERC-721 NFT module issues each deposit a singular tokenized receipt bound to grade and quantity, so duplication fraud becomes cryptographically impossible." },
      { title: "Verified Deposit Anchor", description: "Bind goods to the token. The Trade Finance Documents module anchors the licensed warehouse's attestation of stored commodity, so a receipt always maps to real, graded inventory." },
      { title: "Collateral Escrow", description: "Lend against locked receipts. The Escrow and Conditional Settlement module escrows the receipt NFT while financing is outstanding, releasing it only on repayment or default." },
      { title: "Exchange Trading Layer", description: "Make receipts liquid. Tokenized receipts trade on a commodity exchange layer, letting holders sell stored inventory without physically moving the goods." },
      { title: "Default Resolution", description: "Settle deterministically. On default the escrow transfers the receipt to the financier, giving lenders enforceable, on-chain collateral rather than a contested paper claim." },
      { title: "Days-Not-Weeks Financing", description: "Compress the credit cycle. Because collateral is verified and enforceable on-chain, financing against a receipt clears in days rather than the weeks paper diligence demands." },
    ],
    lifecycleTitle: "The Receipt Financing Lifecycle",
    lifecycleSubtitle:
      "Follow a single deposit from warehouse intake through receipt tokenization to collateralized financing.",
    lifecycleSteps: [
      {
        label: "Commodity Deposit",
        description:
          "A trader deposits graded commodity at a licensed warehouse. The warehouse attests quantity and grade against the deposit.",
        icon: Boxes,
        logFilename: "cerulea_whr.log",
        logLines: [
          { text: "[SYS] Initializing Warehouse Deposit Manifest...", time: "08:30:12", tone: "default" },
          { text: "[CMD] recordDeposit { commodity: \"WHEAT\", grade: \"A\", tonnes: 120 }", time: "08:30:12", tone: "primary" },
          { text: "[AUTH] Verifying licensed warehouse attestation...", time: "08:30:13", tone: "secondary" },
          { text: "[OK] Deposit DEP_5510 anchored with grade proof.", time: "08:30:13", tone: "success" },
        ],
      },
      {
        label: "Receipt Tokenization",
        description:
          "The contract mints an NFT warehouse receipt for the deposit, bound immutably to its grade, quantity, and warehouse.",
        icon: Gift,
        logFilename: "cerulea_whr.log",
        logLines: [
          { text: "[SYS] Minting NFT receipt for DEP_5510...", time: "08:31:40", tone: "default" },
          { text: "[CMD] mintReceipt(DEP_5510, owner: \"0x66\")", time: "08:31:40", tone: "primary" },
          { text: "[SYS] Binding grade and quantity to token...", time: "08:31:41", tone: "default" },
          { text: "[OK] Receipt WHR_9021 minted. Single original.", time: "08:31:41", tone: "success" },
        ],
      },
      {
        label: "Collateral Escrow",
        description:
          "The holder pledges the receipt for financing. The NFT is locked in escrow while the lender advances funds.",
        icon: Lock,
        logFilename: "cerulea_whr.log",
        logLines: [
          { text: "[SYS] Pledging receipt WHR_9021 as collateral...", time: "11:05:22", tone: "default" },
          { text: "[CMD] escrowReceipt(WHR_9021, lender: \"BANK_0x21\")", time: "11:05:22", tone: "primary" },
          { text: "[AUTH] Locking NFT and confirming loan terms...", time: "11:05:23", tone: "secondary" },
          { text: "[OK] Receipt escrowed. Funds advanced in days.", time: "11:05:23", tone: "success" },
        ],
      },
      {
        label: "Repayment or Default",
        description:
          "On repayment the receipt returns to the holder; on default it transfers to the financier as enforceable collateral.",
        icon: Handshake,
        logFilename: "cerulea_whr.log",
        logLines: [
          { text: "[SYS] Evaluating loan status for WHR_9021...", time: "16:48:09", tone: "default" },
          { text: "[CMD] settleLoan(WHR_9021, status: \"REPAID\")", time: "16:48:09", tone: "primary" },
          { text: "[SYS] Releasing receipt from escrow to holder...", time: "16:48:10", tone: "default" },
          { text: "[OK] Loan closed. Collateral returned on-chain.", time: "16:48:10", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes receipt financing into modular contracts. Each layer records deposits, tokenizes receipts, escrows collateral, and settles loans without any single party duplicating a claim on the goods.",
    layers: [
      {
        title: "Deposit Registry",
        subtitle: "The Inventory Anchor",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Inventory Anchor",
          description:
            "The foundational data layer. It records the licensed warehouse's attestation of stored commodity and stores the immutable link to grade, quantity, and facility that every receipt and loan depends on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract DepositRegistry {\n  struct Deposit {\n    address warehouse;\n    string commodity;\n    bytes1 grade;\n    uint256 tonnes;\n  }\n\n  mapping(bytes32 => Deposit) public deposits;\n\n  function record(bytes32 id, string calldata c, bytes1 grade, uint256 t) external onlyWarehouse {\n    deposits[id] = Deposit(msg.sender, c, grade, t);\n  }\n}",
        simAction: "Simulate Commodity Deposit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading licensed warehouse attestation...", tone: "default" },
          { text: "Recording grade A wheat 120 tonnes...", tone: "default" },
          { text: "Writing deposit to Level 1 storage...", tone: "default" },
          { text: "Binding facility to deposit...", tone: "default" },
          { text: "[SUCCESS] Deposit DEP_5510 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Receipt Token",
        subtitle: "The Single Original",
        icon: Gift,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single Original",
          description:
            "Mints one non-fungible receipt per deposit. It binds grade and quantity to a unique token, so a warehouse receipt can no longer be duplicated, forged, or pledged twice.",
          platformFunction: "Tokenization & Workflow",
        },
        codeSnippet:
          "function mintReceipt(bytes32 depositId, address owner) external onlyWarehouse returns (uint256) {\n    uint256 tokenId = ++nextId;\n    _mint(owner, tokenId);\n    receiptOf[tokenId] = depositId;\n    emit ReceiptMinted(tokenId, depositId, owner);\n    return tokenId;\n}",
        simAction: "Simulate Receipt Tokenization",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Minting NFT receipt for DEP_5510...", tone: "default" },
          { text: "Binding grade and quantity to token...", tone: "default" },
          { text: "Assigning ownership to holder...", tone: "default" },
          { text: "Locking receipt as single original...", tone: "default" },
          { text: "[SUCCESS] Receipt WHR_9021 minted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Collateral Escrow",
        subtitle: "The Locked Pledge",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Locked Pledge",
          description:
            "Holds the receipt during financing. It escrows the NFT while a loan is outstanding and releases it only on repayment or default, giving lenders enforceable collateral rather than a paper claim.",
          platformFunction: "Escrow & Settlement",
        },
        codeSnippet:
          "function escrowReceipt(uint256 tokenId, address lender) external {\n    require(ownerOf(tokenId) == msg.sender, \"Not owner\");\n    _transfer(msg.sender, address(this), tokenId);\n    loans[tokenId] = Loan(msg.sender, lender, block.timestamp);\n    emit ReceiptEscrowed(tokenId, lender);\n}",
        simAction: "Simulate Collateral Escrow",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Holder pledging WHR_9021 to bank...", tone: "default" },
          { text: "Transferring receipt into escrow...", tone: "default" },
          { text: "Confirming loan terms...", tone: "default" },
          { text: "Advancing funds to holder...", tone: "default" },
          { text: "[SUCCESS] Receipt escrowed as collateral.", tone: "success" },
        ],
      },
      {
        title: "Loan Settler",
        subtitle: "The Default Executor",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Default Executor",
          description:
            "Resolves the loan deterministically. On repayment it returns the receipt to the holder, and on default it transfers it to the financier, so collateral outcomes are enforceable and dispute-free.",
          platformFunction: "Settlement & Finality",
        },
        codeSnippet:
          "function settleLoan(uint256 tokenId, bool repaid) external {\n    Loan memory l = loans[tokenId];\n    address to = repaid ? l.borrower : l.lender;\n    _transfer(address(this), to, tokenId);\n    emit LoanSettled(tokenId, repaid, to);\n}",
        simAction: "Simulate Loan Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Evaluating loan status for WHR_9021...", tone: "default" },
          { text: "Reading repayment confirmation...", tone: "default" },
          { text: "Releasing receipt from escrow...", tone: "default" },
          { text: "Returning collateral to holder...", tone: "default" },
          { text: "[SUCCESS] Loan closed on-chain.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Tokenized warehouse receipts are a horizontal capability. Here is how different commodity actors put the shared platform to work.",
    sectors: [
      { icon: Tractor, title: "Farmers & Commodity Traders", description: "Turn stored inventory into financeable collateral in days, accessing working capital against verified receipts without the fraud risk of paper documents.", assetTypes: ["Tokenized Receipts", "Collateral Pledges", "Stored Commodities"] },
      { icon: Landmark, title: "Banks & Commodity Financiers", description: "Lend against enforceable on-chain collateral with deterministic default resolution, cutting diligence time and the risk of duplicated or fraudulent receipts.", assetTypes: ["Collateral Loans", "Escrow Positions", "Default Claims"] },
      { icon: PieChart, title: "Commodity Exchanges & Warehouses", description: "List tokenized receipts for trading and issue verifiable deposit attestations, deepening liquidity and trust across the stored-commodity market.", assetTypes: ["Exchange Listings", "Deposit Attestations", "Trading Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a warehouse management system or letting traders and lenders transact from an exchange portal, Cerulea routes both into one shared receipt platform.",
    tracks: [
      {
        title: "Track A: Warehouse System Bridging",
        description:
          "For licensed warehouses on legacy management systems. Existing deposit and grading records are translated into signed on-chain attestations and receipts through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Warehouse Management System", sublabel: "Facility Deposit Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Attestation Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Warehouse Receipt Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Trader & Lender Portal",
        description:
          "For traders and financiers on an exchange portal. The portal signs each pledge and trade from a party wallet and routes it directly to the ledger and escrow.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Exchange Portal / Wallet", sublabel: "Trader & Lender Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Escrow Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Tokenized Receipt Record", icon: Gift, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a warehouse receipt tokenization platform with NFT receipts, collateral escrow, and an exchange trading layer from scratch requires specialised financial engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Collateral & Trading Rules",
      ruleCount: 50,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects commodity-finance infrastructure benchmarks. Building NFT receipt logic, negotiating collateral standards with lenders, and shipping an exchange trading layer for an average platform takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your collateral and trading rules into pre-audited WebAssembly binaries and provisions the shared receipt ledger and escrow instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "third-party-logistics-3pl-billing-reconciliation-across-clients",
    icon: PieChart,
    eyebrow: "3PL Billing Layer",
    headline1: "Bill from movements.",
    headline2: "Let clients check it.",
    heroDescription:
      "3PL warehouse operators bill clients on storage and handling, but clients dispute charges they cannot independently verify. Cerulea anchors verified inventory movement and storage data per client and generates bills clients can check against the same underlying data the warehouse used.",
    heroCta: "Deploy 3PL Billing",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a disputed handling invoice into a shared, movement-backed billing record.",
    mechanics: [
      { title: "Verified Movement Log", description: "Anchor every handling event. The Traceability Ledger records each inbound, outbound, and put-away movement per client, so charges rest on evidence rather than the operator's tally." },
      { title: "Storage Occupancy Metering", description: "Bill space from real usage. The contract meters occupied storage per client over time, so storage charges reflect actual footprint, not a flat allocation." },
      { title: "Rule-Based Billing", description: "Compute charges deterministically. The Invoices and Billing module applies each client's contracted rates to verified movements and storage, producing an invoice with no manual line items." },
      { title: "Client-Verifiable Statements", description: "End the dispute cycle. Clients read the same movement and storage data behind their bill, so a charge is checked against shared evidence instead of contested internally." },
      { title: "Immutable Billing Audit", description: "Preserve the trail. The Audit Logs module freezes each billing run and its inputs, giving both parties a tamper-evident record for reconciliation and audit." },
      { title: "Per-Client Segregation", description: "Keep books clean. Movements and charges are segregated per client, so a multi-tenant warehouse bills each accurately without cross-contamination of data." },
    ],
    lifecycleTitle: "The 3PL Billing Lifecycle",
    lifecycleSubtitle:
      "Follow a single client's activity from inventory movements through storage metering to a verifiable invoice.",
    lifecycleSteps: [
      {
        label: "Inventory Movement",
        description:
          "Goods are received, put away, and picked for a client. Each handling event is anchored to the client's movement log.",
        icon: Boxes,
        logFilename: "cerulea_3pl.log",
        logLines: [
          { text: "[SYS] Initializing Inventory Movement Manifest...", time: "07:15:03", tone: "default" },
          { text: "[CMD] logMove { client: \"ACME\", type: \"INBOUND\", units: 640 }", time: "07:15:03", tone: "primary" },
          { text: "[AUTH] Verifying handling scan and location...", time: "07:15:04", tone: "secondary" },
          { text: "[OK] Movement MOV_3310 anchored to client ACME.", time: "07:15:04", tone: "success" },
        ],
      },
      {
        label: "Storage Metering",
        description:
          "The client's occupied storage is metered over the billing period, tracking real footprint day by day.",
        icon: Database,
        logFilename: "cerulea_3pl.log",
        logLines: [
          { text: "[SYS] Metering storage occupancy for ACME...", time: "23:59:30", tone: "default" },
          { text: "[CMD] meterStorage(client: \"ACME\", palletDays: 1420)", time: "23:59:30", tone: "primary" },
          { text: "[SYS] Recording occupied footprint for the day.", time: "23:59:31", tone: "default" },
          { text: "[OK] Storage usage extended for period.", time: "23:59:31", tone: "success" },
        ],
      },
      {
        label: "Billing Run",
        description:
          "The contract applies the client's contracted rates to verified movements and storage, generating the period invoice.",
        icon: PieChart,
        logFilename: "cerulea_3pl.log",
        logLines: [
          { text: "[SYS] Running billing for ACME period 2026-09...", time: "02:10:00", tone: "default" },
          { text: "[CMD] generateInvoice(client: \"ACME\")", time: "02:10:00", tone: "primary" },
          { text: "[SYS] Applying handling and storage rate cards...", time: "02:10:01", tone: "default" },
          { text: "[OK] Invoice INV_7742 generated from verified data.", time: "02:10:01", tone: "success" },
        ],
      },
      {
        label: "Client Verification",
        description:
          "The client opens the invoice and reads the same movement and storage data behind it, confirming charges without a dispute.",
        icon: Search,
        logFilename: "cerulea_3pl.log",
        logLines: [
          { text: "[SYS] Client opening invoice INV_7742...", time: "09:40:15", tone: "default" },
          { text: "[CMD] verifyInvoice(INV_7742)", time: "09:40:15", tone: "primary" },
          { text: "[SYS] Returning 214 movements and storage log...", time: "09:40:16", tone: "default" },
          { text: "[OK] Charges match shared data. Invoice accepted.", time: "09:40:16", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes 3PL billing into modular contracts. Each layer logs movements, meters storage, bills, and exposes the data to clients without the operator controlling an unverifiable tally.",
    layers: [
      {
        title: "Movement Registry",
        subtitle: "The Handling Anchor",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Handling Anchor",
          description:
            "The foundational data layer. It records each inbound, put-away, and outbound movement per client and stores the immutable link to units, location, and scan that every charge derives from.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract MovementRegistry {\n  struct Move {\n    string client;\n    bytes1 kind;\n    uint256 units;\n    uint256 at;\n  }\n\n  mapping(bytes32 => Move) public moves;\n\n  function logMove(bytes32 id, string calldata client, bytes1 kind, uint256 units) external onlyOperator {\n    moves[id] = Move(client, kind, units, block.timestamp);\n  }\n}",
        simAction: "Simulate Inventory Movement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading handling scan for client ACME...", tone: "default" },
          { text: "Recording inbound of 640 units...", tone: "default" },
          { text: "Writing movement to Level 1 storage...", tone: "default" },
          { text: "Binding location to movement...", tone: "default" },
          { text: "[SUCCESS] Movement MOV_3310 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Storage Meter",
        subtitle: "The Occupancy Clock",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Occupancy Clock",
          description:
            "Meters real footprint. It accumulates each client's occupied storage in pallet-days over the period, so storage charges reflect actual usage rather than a static allocation.",
          platformFunction: "Metering & Rules",
        },
        codeSnippet:
          "function meterStorage(string calldata client, uint256 palletDays) external onlyOperator {\n    bytes32 k = keccak256(abi.encode(client, period));\n    occupancy[k] += palletDays;\n    emit StorageMetered(client, period, palletDays);\n}",
        simAction: "Simulate Storage Metering",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading occupied footprint for ACME...", tone: "default" },
          { text: "Accumulating 1420 pallet-days...", tone: "default" },
          { text: "Updating period occupancy...", tone: "default" },
          { text: "Sealing daily storage record...", tone: "default" },
          { text: "[SUCCESS] Storage usage metered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Billing Engine",
        subtitle: "The Rate Applier",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rate Applier",
          description:
            "Computes charges deterministically. It applies each client's contracted handling and storage rates to verified inputs, producing an invoice with no manual line items to dispute.",
          platformFunction: "Billing & Settlement",
        },
        codeSnippet:
          "function generateInvoice(string calldata client) external onlyOperator returns (uint256 total) {\n    total = handlingCharge(client) + storageCharge(client);\n    invoices[keccak256(abi.encode(client, period))] = total;\n    emit InvoiceGenerated(client, period, total);\n}",
        simAction: "Simulate Billing Run",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading verified movements for ACME...", tone: "default" },
          { text: "Applying handling rate card...", tone: "default" },
          { text: "Applying storage rate to occupancy...", tone: "default" },
          { text: "Assembling period invoice...", tone: "default" },
          { text: "[SUCCESS] Invoice INV_7742 generated.", tone: "success" },
        ],
      },
      {
        title: "Verification Window",
        subtitle: "The Shared Ledger",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Ledger",
          description:
            "A read gateway for the client. It returns the movements and storage data behind an invoice, so a client checks the bill against the same evidence the warehouse used instead of disputing it blind.",
          platformFunction: "Verification & Audit",
        },
        codeSnippet:
          "function verifyInvoice(bytes32 invoiceId) external view returns (bytes32[] memory moveIds, uint256 occupancyUsed) {\n    return (invoiceMoves[invoiceId], invoiceOccupancy[invoiceId]);\n}",
        simAction: "Simulate Client Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Client opens invoice INV_7742...", tone: "default" },
          { text: "Assembling 214 anchored movements...", tone: "default" },
          { text: "Attaching storage occupancy log...", tone: "default" },
          { text: "Matching charges to shared data...", tone: "default" },
          { text: "[SUCCESS] Invoice verified and accepted.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Movement-backed 3PL billing is a horizontal capability. Here is how different logistics actors put the shared record to work.",
    sectors: [
      { icon: Building2, title: "3PL & Warehouse Operators", description: "Bill storage and handling from verified movements, cutting dispute volume and credit notes while giving clients confidence in every charge on the invoice.", assetTypes: ["Handling Charges", "Storage Invoices", "Movement Logs"] },
      { icon: Boxes, title: "Brand Owners & Retail Clients", description: "Audit 3PL bills against the same underlying data, so accruals and cost-of-goods are backed by evidence rather than accepted on trust.", assetTypes: ["Verified Statements", "Movement Data", "Cost Records"] },
      { icon: PieChart, title: "Finance & Reconciliation Teams", description: "Reconcile multi-client warehouse billing from a segregated, tamper-evident source, eliminating spreadsheet stitching across tenants and periods.", assetTypes: ["Reconciled Ledgers", "Audit Trails", "Per-Client Books"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a warehouse management system or letting clients audit bills from a portal, Cerulea routes both into one shared billing record.",
    tracks: [
      {
        title: "Track A: WMS Bridging",
        description:
          "For operators on legacy warehouse management systems. Existing movement and storage events are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Warehouse Management System", sublabel: "Operator Handling Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "3PL Billing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Client Audit Portal",
        description:
          "For clients auditing their bills. A portal signs each verification request from a client wallet and reads the movement and storage data behind an invoice directly from the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Client Audit Portal", sublabel: "Brand & Retailer Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Billing Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Billing Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a 3PL billing platform with verified movement logging, storage metering, and client-verifiable invoicing from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Movement & Billing Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects warehouse-billing integration benchmarks. Connecting each warehouse management system, building custom storage metering and rule-based billing logic, and shipping a client audit portal for an average operator takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your movement and billing rules into pre-audited WebAssembly binaries and provisions the shared billing ledger instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cold-storage-capacity-sharing-marketplace-for-seasonal-demand",
    icon: Thermometer,
    eyebrow: "Cold Capacity Marketplace",
    headline1: "List the spare cold.",
    headline2: "Book with verified chill.",
    heroDescription:
      "Cold storage facilities swing between spare capacity and shortage, yet matching businesses that need temporary cold space with facilities that have it is done through informal networks. Cerulea delivers a marketplace where spare capacity is rented with temperature compliance verified throughout the rental.",
    heroCta: "Deploy Cold Capacity Markets",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn informal cold-storage brokering into a settled marketplace with verified temperature compliance.",
    mechanics: [
      { title: "Spare Capacity Listing", description: "Surface idle chill. Facilities list off-peak capacity with temperature class and duration, replacing phone-around brokering with a transparent, bookable marketplace." },
      { title: "Escrowed Booking", description: "Settle on delivered service. The Escrow and Conditional Settlement module holds the rental fee and releases it only as verified temperature compliance is met across the period." },
      { title: "Cold-Chain Monitoring", description: "Prove the chain held. The Cold-Chain Monitoring module streams sensor readings for the rented space, anchoring an immutable record that the agreed temperature was maintained." },
      { title: "Compliance-Linked Payout", description: "Tie money to conditions. If temperature breaches occur, settlement adjusts automatically, so a facility is paid for compliant storage and a renter is protected against spoilage risk." },
      { title: "Immutable Rental Audit", description: "Preserve the evidence. The Audit Logs module records the booking, readings, and settlement, giving both parties a tamper-evident history for insurance and dispute." },
      { title: "Efficient Capacity Matching", description: "Balance the market. Renters facing seasonal spikes find compliant space quickly and facilities monetize idle capacity, creating a more efficient cold-storage market." },
    ],
    lifecycleTitle: "The Cold Rental Lifecycle",
    lifecycleSubtitle:
      "Follow a single booking from capacity listing through monitored storage to compliance-linked settlement.",
    lifecycleSteps: [
      {
        label: "Capacity Listing",
        description:
          "A facility lists spare cold capacity with its temperature class, volume, and available window on the marketplace.",
        icon: Thermometer,
        logFilename: "cerulea_coldshare.log",
        logLines: [
          { text: "[SYS] Initializing Cold Capacity Listing...", time: "08:00:41", tone: "default" },
          { text: "[CMD] listCapacity { facility: \"CS_NASHIK\", temp: \"-18C\", pallets: 300 }", time: "08:00:41", tone: "primary" },
          { text: "[AUTH] Verifying facility license and sensor set...", time: "08:00:42", tone: "secondary" },
          { text: "[OK] Listing LST_2210 published to marketplace.", time: "08:00:42", tone: "success" },
        ],
      },
      {
        label: "Escrowed Booking",
        description:
          "A business books the space for a seasonal spike. The rental fee is locked in escrow pending verified compliance.",
        icon: Handshake,
        logFilename: "cerulea_coldshare.log",
        logLines: [
          { text: "[SYS] Booking request for LST_2210...", time: "10:22:10", tone: "default" },
          { text: "[CMD] bookCapacity(LST_2210, pallets: 120, days: 45)", time: "10:22:10", tone: "primary" },
          { text: "[SYS] Locking rental fee in escrow...", time: "10:22:11", tone: "default" },
          { text: "[OK] Booking BKG_5580 confirmed. Escrow funded.", time: "10:22:11", tone: "success" },
        ],
      },
      {
        label: "Monitored Storage",
        description:
          "Goods are stored while cold-chain sensors stream readings, anchoring proof the agreed temperature was maintained.",
        icon: Radio,
        logFilename: "cerulea_coldshare.log",
        logLines: [
          { text: "[SYS] Streaming sensor readings for BKG_5580...", time: "14:30:00", tone: "default" },
          { text: "[CMD] anchorReading(BKG_5580, tempC: -18.2)", time: "14:30:00", tone: "primary" },
          { text: "[SYS] Reading within -18C tolerance. Chain intact.", time: "14:30:01", tone: "default" },
          { text: "[OK] Compliance record extended for period.", time: "14:30:01", tone: "success" },
        ],
      },
      {
        label: "Compliance Settlement",
        description:
          "At the end of the rental, escrow releases to the facility per verified compliance, adjusting automatically for any breach.",
        icon: Wallet,
        logFilename: "cerulea_coldshare.log",
        logLines: [
          { text: "[SYS] Evaluating compliance for BKG_5580...", time: "23:10:55", tone: "default" },
          { text: "[CMD] settleBooking(BKG_5580, breaches: 0)", time: "23:10:55", tone: "primary" },
          { text: "[SYS] 45 days compliant. Releasing full escrow.", time: "23:10:56", tone: "default" },
          { text: "[OK] Facility paid on verified cold-chain.", time: "23:10:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes cold capacity sharing into modular contracts. Each layer lists, books, monitors, and settles without either party controlling the temperature record.",
    layers: [
      {
        title: "Listing Registry",
        subtitle: "The Capacity Anchor",
        icon: Thermometer,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Capacity Anchor",
          description:
            "The foundational data layer. It records each facility's spare capacity listing and stores the immutable link to temperature class, volume, and window that bookings and compliance depend on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ColdMarketplace {\n  struct Listing {\n    address facility;\n    int16 tempC;\n    uint256 pallets;\n    uint256 window;\n  }\n\n  mapping(bytes32 => Listing) public listings;\n\n  function list(bytes32 id, int16 tempC, uint256 pallets, uint256 window) external onlyFacility {\n    listings[id] = Listing(msg.sender, tempC, pallets, window);\n  }\n}",
        simAction: "Simulate Capacity Listing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading facility license for CS_NASHIK...", tone: "default" },
          { text: "Recording -18C class and 300 pallets...", tone: "default" },
          { text: "Writing listing to Level 1 storage...", tone: "default" },
          { text: "Publishing to marketplace index...", tone: "default" },
          { text: "[SUCCESS] Listing LST_2210 published.", tone: "success" },
        ],
      },
      {
        title: "Booking Escrow",
        subtitle: "The Locked Fee",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Locked Fee",
          description:
            "Holds payment against service. It escrows the rental fee at booking and ties release to verified compliance, so a facility earns on delivered cold storage and a renter is protected until conditions are met.",
          platformFunction: "Escrow & Workflow",
        },
        codeSnippet:
          "function bookCapacity(bytes32 listingId, uint256 pallets, uint256 days_) external payable {\n    require(msg.value > 0, \"No fee\");\n    bookings[++bookId] = Booking(listingId, msg.sender, msg.value, pallets, days_);\n    emit Booked(bookId, listingId, msg.sender);\n}",
        simAction: "Simulate Escrowed Booking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Renter booking 120 pallets for 45 days...", tone: "default" },
          { text: "Locking rental fee in escrow...", tone: "default" },
          { text: "Reserving capacity against listing...", tone: "default" },
          { text: "Confirming booking terms...", tone: "default" },
          { text: "[SUCCESS] Booking BKG_5580 escrowed.", tone: "success" },
        ],
      },
      {
        title: "Cold-Chain Monitor",
        subtitle: "The Temperature Proof",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Temperature Proof",
          description:
            "Anchors sensor evidence. It streams readings for the rented space and records any breach against tolerance, building an immutable proof that the agreed temperature was maintained.",
          platformFunction: "Telemetry & Monitoring",
        },
        codeSnippet:
          "function anchorReading(uint256 bookId, int16 tempC) external onlyOracle {\n    Booking memory b = bookings[bookId];\n    if (tempC > listings[b.listing].tempC + tolerance) breaches[bookId]++;\n    readings[bookId].push(Reading(tempC, block.timestamp));\n    emit ReadingAnchored(bookId, tempC);\n}",
        simAction: "Simulate Monitored Storage",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Streaming reading for BKG_5580...", tone: "default" },
          { text: "Reading -18.2C from facility sensor...", tone: "default" },
          { text: "Checking against -18C tolerance...", tone: "default" },
          { text: "Appending compliant reading...", tone: "default" },
          { text: "[SUCCESS] Cold-chain proof extended.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The Compliance Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Compliance Payout",
          description:
            "Releases escrow on evidence. It settles the booking against verified compliance, paying the facility in full when the chain held and adjusting automatically when breaches occurred.",
          platformFunction: "Settlement & Finality",
        },
        codeSnippet:
          "function settleBooking(uint256 bookId) external {\n    Booking memory b = bookings[bookId];\n    uint256 payout = breaches[bookId] == 0 ? b.fee : adjust(b.fee, breaches[bookId]);\n    payable(listings[b.listing].facility).transfer(payout);\n    emit Settled(bookId, payout, breaches[bookId]);\n}",
        simAction: "Simulate Compliance Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Evaluating compliance for BKG_5580...", tone: "default" },
          { text: "Counting temperature breaches: 0...", tone: "default" },
          { text: "Releasing full escrow to facility...", tone: "default" },
          { text: "Closing booking on-chain...", tone: "default" },
          { text: "[SUCCESS] Facility paid on verified chill.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A verified cold capacity marketplace is a horizontal capability. Here is how different actors put the shared market to work.",
    sectors: [
      { icon: Thermometer, title: "Cold Storage Facilities", description: "Monetize off-peak capacity by listing spare space and getting paid on verified compliance, turning idle chambers into revenue without informal brokering.", assetTypes: ["Capacity Listings", "Compliance Proofs", "Rental Payouts"] },
      { icon: Boxes, title: "Food & Pharma Businesses", description: "Book compliant cold space for seasonal spikes with temperature verified end to end, protecting perishable and sensitive goods against spoilage risk.", assetTypes: ["Space Bookings", "Cold-Chain Records", "Escrow Positions"] },
      { icon: ShieldCheck, title: "Insurers & Auditors", description: "Underwrite and settle cold-storage risk against immutable temperature evidence, pricing spoilage cover and resolving claims from verified readings.", assetTypes: ["Temperature Evidence", "Audit Trails", "Claim Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a facility's building-management system or streaming chamber sensor data, Cerulea routes both into one shared cold-capacity marketplace.",
    tracks: [
      {
        title: "Track A: Facility System Bridging",
        description:
          "For facilities on legacy building and refrigeration systems. Existing capacity and sensor data are translated into signed on-chain listings and readings through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Building Management System", sublabel: "Facility Refrigeration Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Data Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Cold Capacity Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Sensor & Renter Capture",
        description:
          "For chamber sensors and renters on mobile. A gateway signs each reading and booking from a device wallet and routes it directly to the ledger and escrow.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Sensor Gateway / App", sublabel: "Chamber & Renter Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Compliance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Capacity Market", icon: Thermometer, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cold capacity marketplace with escrowed bookings, cold-chain monitoring, and compliance-linked settlement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Booking & Compliance Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects marketplace and cold-chain integration benchmarks. Connecting each facility's refrigeration system, building custom escrow and temperature-monitoring logic, and shipping a compliance-linked settlement flow for an average market takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your booking and compliance rules into pre-audited WebAssembly binaries and provisions the shared capacity ledger and escrow instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "last-mile-delivery-driver-performance-and-incentive-payout-tracking",
    icon: Activity,
    eyebrow: "Driver Incentive Layer",
    headline1: "Verify performance.",
    headline2: "Pay incentives instantly.",
    heroDescription:
      "Last-mile platforms offer performance incentives, but calculating them from metrics like on-time rate and ratings, then paying out, is a delayed batch process drivers cannot verify. Cerulea anchors verified performance metrics per driver and calculates incentive payouts automatically and transparently.",
    heroCta: "Deploy Incentive Tracking",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque batch payout into a verified, driver-transparent incentive engine.",
    mechanics: [
      { title: "Verified Metric Capture", description: "Anchor real performance. External Data Oracles feed on-time rate, completion, and customer ratings per driver, so incentives rest on verified metrics rather than an internal batch." },
      { title: "Rule-Based Incentives", description: "Encode the scheme on-chain. Incentive tiers and thresholds are written into the contract, so a payout follows deterministically from the driver's verified metrics." },
      { title: "Escrowed Payout Pool", description: "Guarantee funds are ready. The Escrow and Conditional Settlement module holds the incentive pool and releases each driver's share the moment their metrics qualify." },
      { title: "Wallet Authentication", description: "Pay the right driver. The Wallet Authentication module binds each payout to the driver's authenticated wallet, so incentives route securely without manual disbursement." },
      { title: "Driver-Visible Ledger", description: "End the trust gap. Drivers see exactly which deliveries and ratings earned their incentive, replacing a delayed statement with a transparent, verifiable record." },
      { title: "Immutable Payout Audit", description: "Preserve the trail. Every metric, calculation, and payout is anchored, giving the platform and drivers a tamper-evident history for disputes and audit." },
    ],
    lifecycleTitle: "The Incentive Payout Lifecycle",
    lifecycleSubtitle:
      "Follow a single driver from delivery performance through metric verification to an automatic incentive payout.",
    lifecycleSteps: [
      {
        label: "Delivery Performance",
        description:
          "A driver completes deliveries across a period. On-time rate, completions, and ratings are captured against their identity.",
        icon: Truck,
        logFilename: "cerulea_lastmile.log",
        logLines: [
          { text: "[SYS] Initializing Driver Performance Manifest...", time: "21:05:33", tone: "default" },
          { text: "[CMD] recordDeliveries { driver: \"DRV_7781\", completed: 62, onTime: 60 }", time: "21:05:33", tone: "primary" },
          { text: "[AUTH] Verifying delivery scans and timestamps...", time: "21:05:34", tone: "secondary" },
          { text: "[OK] Performance PERF_4410 anchored to driver.", time: "21:05:34", tone: "success" },
        ],
      },
      {
        label: "Metric Verification",
        description:
          "Oracles feed verified on-time rate and customer ratings. The contract confirms the driver's metrics for the period.",
        icon: Search,
        logFilename: "cerulea_lastmile.log",
        logLines: [
          { text: "[SYS] Aggregating verified metrics for DRV_7781...", time: "21:05:35", tone: "default" },
          { text: "[CMD] verifyMetrics(DRV_7781, period: \"W38\")", time: "21:05:35", tone: "primary" },
          { text: "[SYS] On-time 96.8%, rating 4.7. Tier GOLD met.", time: "21:05:35", tone: "default" },
          { text: "[OK] Metrics verified. Incentive tier assigned.", time: "21:05:36", tone: "success" },
        ],
      },
      {
        label: "Incentive Calculation",
        description:
          "The contract applies the incentive scheme to verified metrics, computing the exact payout the driver earned.",
        icon: Activity,
        logFilename: "cerulea_lastmile.log",
        logLines: [
          { text: "[SYS] Computing incentive for DRV_7781...", time: "21:05:37", tone: "default" },
          { text: "[CMD] calcIncentive(DRV_7781, tier: \"GOLD\")", time: "21:05:37", tone: "primary" },
          { text: "[SYS] Base plus on-time bonus computed.", time: "21:05:37", tone: "default" },
          { text: "[OK] Incentive 2450 INR calculated from metrics.", time: "21:05:38", tone: "success" },
        ],
      },
      {
        label: "Automatic Payout",
        description:
          "Escrow releases the earned incentive to the driver's authenticated wallet, with a visible breakdown of how it was earned.",
        icon: Wallet,
        logFilename: "cerulea_lastmile.log",
        logLines: [
          { text: "[SYS] Releasing incentive from escrow pool...", time: "21:05:39", tone: "default" },
          { text: "[CMD] payDriver(DRV_7781, amount: 2450)", time: "21:05:39", tone: "primary" },
          { text: "[SYS] Routing to authenticated driver wallet...", time: "21:05:39", tone: "default" },
          { text: "[OK] Incentive paid instantly with breakdown.", time: "21:05:40", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes incentive payouts into modular contracts. Each layer captures metrics, verifies them, calculates incentives, and pays out without the platform running an opaque, unverifiable batch.",
    layers: [
      {
        title: "Performance Registry",
        subtitle: "The Metric Anchor",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Metric Anchor",
          description:
            "The foundational data layer. It records each driver's verified deliveries, on-time rate, and ratings and stores the immutable link that incentive calculation and driver visibility depend on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PerformanceRegistry {\n  struct Perf {\n    bytes32 driver;\n    uint256 completed;\n    uint256 onTime;\n    uint16 rating;\n  }\n\n  mapping(bytes32 => Perf) public perf;\n\n  function record(bytes32 id, bytes32 driver, uint256 done, uint256 onTime, uint16 rating) external onlyOracle {\n    perf[id] = Perf(driver, done, onTime, rating);\n  }\n}",
        simAction: "Simulate Delivery Performance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading delivery scans for DRV_7781...", tone: "default" },
          { text: "Recording 62 completed, 60 on time...", tone: "default" },
          { text: "Writing performance to Level 1 storage...", tone: "default" },
          { text: "Binding ratings to driver...", tone: "default" },
          { text: "[SUCCESS] Performance PERF_4410 anchored.", tone: "success" },
        ],
      },
      {
        title: "Metric Verifier",
        subtitle: "The Tier Assigner",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Tier Assigner",
          description:
            "Confirms performance against the scheme. It aggregates verified on-time rate and ratings and assigns the qualifying incentive tier, so eligibility is derived from evidence not from a manual review.",
          platformFunction: "Validation & Rules",
        },
        codeSnippet:
          "function verifyMetrics(bytes32 perfId) public view returns (bytes32 tier) {\n    Perf memory p = perf[perfId];\n    uint256 onTimePct = p.onTime * 100 / p.completed;\n    if (onTimePct >= 95 && p.rating >= 45) return \"GOLD\";\n    if (onTimePct >= 90) return \"SILVER\";\n    return \"BASE\";\n}",
        simAction: "Simulate Metric Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating metrics for DRV_7781...", tone: "default" },
          { text: "Computing on-time rate 96.8%...", tone: "default" },
          { text: "Reading customer rating 4.7...", tone: "default" },
          { text: "Assigning tier GOLD...", tone: "default" },
          { text: "[SUCCESS] Metrics verified and tiered.", tone: "success" },
        ],
      },
      {
        title: "Incentive Engine",
        subtitle: "The Payout Calculator",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Payout Calculator",
          description:
            "Turns metrics into money. It applies the encoded incentive scheme to the verified tier and metrics, producing an exact payout the driver can trace to specific deliveries and ratings.",
          platformFunction: "Computation & Settlement",
        },
        codeSnippet:
          "function calcIncentive(bytes32 perfId, bytes32 tier) public view returns (uint256) {\n    uint256 base = tierBase[tier];\n    uint256 bonus = perf[perfId].onTime * onTimeRate;\n    return base + bonus;\n}",
        simAction: "Simulate Incentive Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading GOLD tier base for DRV_7781...", tone: "default" },
          { text: "Computing on-time bonus...", tone: "default" },
          { text: "Summing base and bonus...", tone: "default" },
          { text: "Deriving payout 2450 INR...", tone: "default" },
          { text: "[SUCCESS] Incentive calculated from metrics.", tone: "success" },
        ],
      },
      {
        title: "Payout Escrow",
        subtitle: "The Instant Settler",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Settler",
          description:
            "Pays the driver deterministically. It releases the earned incentive from the escrow pool to the driver's authenticated wallet, replacing a delayed batch with an instant, transparent payout.",
          platformFunction: "Escrow & Finality",
        },
        codeSnippet:
          "function payDriver(bytes32 driver, uint256 amount) external onlyPlatform {\n    require(pool >= amount, \"Pool short\");\n    pool -= amount;\n    payable(wallets[driver]).transfer(amount);\n    emit IncentivePaid(driver, amount, block.timestamp);\n}",
        simAction: "Simulate Automatic Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading earned incentive for DRV_7781...", tone: "default" },
          { text: "Releasing 2450 INR from escrow pool...", tone: "default" },
          { text: "Routing to authenticated wallet...", tone: "default" },
          { text: "Attaching earning breakdown...", tone: "default" },
          { text: "[SUCCESS] Incentive paid instantly.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified incentive payouts are a horizontal capability. Here is how different last-mile actors put the shared record to work.",
    sectors: [
      { icon: Truck, title: "Delivery Platforms & Aggregators", description: "Run incentive schemes from verified metrics with instant payout, cutting disputes and disbursement lag while strengthening driver trust and retention.", assetTypes: ["Incentive Schemes", "Payout Pools", "Performance Records"] },
      { icon: Users, title: "Delivery Drivers & Fleets", description: "See exactly which deliveries and ratings earned each incentive and get paid the moment metrics qualify, replacing an opaque batch with a transparent ledger.", assetTypes: ["Earning Breakdowns", "Verified Metrics", "Wallet Payouts"] },
      { icon: PieChart, title: "Operations & Finance Teams", description: "Fund and reconcile incentive spend from a tamper-evident source, giving finance a defensible trail for every driver payout and scheme adjustment.", assetTypes: ["Payout Ledgers", "Audit Trails", "Scheme Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a platform's dispatch system or capturing delivery events from a driver app, Cerulea routes both into one shared incentive record.",
    tracks: [
      {
        title: "Track A: Platform Dispatch Bridging",
        description:
          "For platforms on legacy dispatch systems. Existing delivery and rating events are translated into signed on-chain performance records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Dispatch System", sublabel: "Platform Delivery Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Metric Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Driver Incentive Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Driver App Capture",
        description:
          "For drivers on mobile. An app signs each completed delivery from a driver wallet and receives incentive payouts directly from the ledger escrow.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Driver App / Wallet", sublabel: "Delivery Driver Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Incentive Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Incentive Record", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an incentive payout platform with verified metric capture, rule-based calculation, and escrowed instant settlement from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Metric & Payout Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects gig-platform payout integration benchmarks. Connecting each dispatch system, building custom metric verification and incentive-calculation logic, and shipping an escrowed instant payout flow for an average platform takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your metric and payout rules into pre-audited WebAssembly binaries and provisions the shared incentive ledger and escrow instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const supplyChainLogisticsItems: ExtraCaseItem[] = [
  {
    label: "Freight document digitization (e-way bill, proof of delivery)",
    href: "/solutions/use-case/freight-document-digitization-e-way-bill-proof-of-delivery",
    description: "Digital waybills and GPS-anchored proof of delivery.",
    icon: FileCheck,
    category: "SME",
    tags: ["Supply Chain", "Logistics"],
    industry: INDUSTRY,
  },
  {
    label: "Driver detention time compensation tracking",
    href: "/solutions/use-case/driver-detention-time-compensation-tracking",
    description: "Verified wait times auto-calculate detention owed.",
    icon: Truck,
    category: "SME",
    tags: ["Logistics", "Payments"],
    industry: INDUSTRY,
  },
  {
    label: "Toll payment reconciliation across multiple toll operators",
    href: "/solutions/use-case/toll-payment-reconciliation-across-multiple-toll-operators",
    description: "One verified toll statement per fleet vehicle.",
    icon: Coins,
    category: "ENTERPRISE",
    tags: ["Logistics", "Finance"],
    industry: INDUSTRY,
  },
  {
    label: "Fleet driver license and fitness certificate verification",
    href: "/solutions/use-case/fleet-driver-license-and-fitness-certificate-verification",
    description: "Instant driver credential checks with expiry alerts.",
    icon: IdCard,
    category: "ENTERPRISE",
    tags: ["Logistics", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Fuel card transaction reconciliation across fleet operators",
    href: "/solutions/use-case/fuel-card-transaction-reconciliation-across-fleet-operators",
    description: "Match every fill to a trip, flag fraud.",
    icon: Wallet,
    category: "ENTERPRISE",
    tags: ["Logistics", "Finance"],
    industry: INDUSTRY,
  },
  {
    label: "Bill of lading digitization and multi-party document sharing",
    href: "/solutions/use-case/bill-of-lading-digitization-and-multi-party-document-sharing",
    description: "Single-original eBLs with instant title transfer.",
    icon: ScrollText,
    category: "ENTERPRISE",
    tags: ["Trade", "Supply Chain"],
    industry: INDUSTRY,
  },
  {
    label: "Port congestion and berth allocation transparency",
    href: "/solutions/use-case/port-congestion-and-berth-allocation-transparency",
    description: "Verified queue position and berth availability view.",
    icon: Boxes,
    category: "GOVERNMENT",
    tags: ["Maritime", "Ports"],
    industry: INDUSTRY,
  },
  {
    label: "Container demurrage and detention charge dispute resolution",
    href: "/solutions/use-case/container-demurrage-and-detention-charge-dispute-resolution",
    description: "Sealed gate times end demurrage disputes.",
    icon: Package,
    category: "ENTERPRISE",
    tags: ["Maritime", "Finance"],
    industry: INDUSTRY,
  },
  {
    label: "Crew certification and seafarer welfare compliance",
    href: "/solutions/use-case/crew-certification-and-seafarer-welfare-compliance",
    description: "Inspector-verifiable crew certs and rest hours.",
    icon: ShieldCheck,
    category: "GOVERNMENT",
    tags: ["Maritime", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Vessel emissions compliance for IMO carbon intensity rules",
    href: "/solutions/use-case/vessel-emissions-compliance-for-imo-carbon-intensity-rules",
    description: "Verified fuel data proves vessel carbon intensity.",
    icon: Leaf,
    category: "ENTERPRISE",
    tags: ["Maritime", "Sustainability"],
    industry: INDUSTRY,
  },
  {
    label: "Warehouse receipt tokenization for commodity financing",
    href: "/solutions/use-case/warehouse-receipt-tokenization-for-commodity-financing",
    description: "NFT receipts unlock financing against stored commodities.",
    icon: Database,
    category: "DAPPS",
    tags: ["Trade Finance", "Commodities"],
    industry: INDUSTRY,
  },
  {
    label: "Third-party logistics (3PL) billing reconciliation across clients",
    href: "/solutions/use-case/third-party-logistics-3pl-billing-reconciliation-across-clients",
    description: "Warehouse bills backed by verified inventory movements.",
    icon: PieChart,
    category: "ENTERPRISE",
    tags: ["Logistics", "Finance"],
    industry: INDUSTRY,
  },
  {
    label: "Cold storage capacity sharing marketplace for seasonal demand",
    href: "/solutions/use-case/cold-storage-capacity-sharing-marketplace-for-seasonal-demand",
    description: "Rent spare cold space with verified temperature compliance.",
    icon: Thermometer,
    category: "DAPPS",
    tags: ["Cold Chain", "Marketplace"],
    industry: INDUSTRY,
  },
  {
    label: "Last-mile delivery driver performance and incentive payout tracking",
    href: "/solutions/use-case/last-mile-delivery-driver-performance-and-incentive-payout-tracking",
    description: "Verified metrics drive instant driver incentive payouts.",
    icon: Activity,
    category: "DAPPS",
    tags: ["Last Mile", "Payments"],
    industry: INDUSTRY,
  },
]
