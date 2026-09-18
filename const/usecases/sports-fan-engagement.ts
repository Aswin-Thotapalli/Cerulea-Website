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

const INDUSTRY = "Sports & Fan Engagement"

export const sportsFanEngagementCases: CaseEntry[] = [
  {
    slug: "anti-doping-sample-chain-of-custody",
    icon: FlaskConical,
    eyebrow: "Anti-Doping Custody Engine",
    headline1: "Seal every sample.",
    headline2: "Silence the custody dispute.",
    heroDescription:
      "Record every handling event of a doping sample on an immutable custody network, from collection to lab result. The Evidence Chain and Device Attestation time-stamp each stage while the DID and VC Ledger captures officer, athlete, and lab signatures, so a finding rests on a signed record rather than a paper form.",
    heroCta: "Deploy Custody Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a contestable paper trail into a continuous, tamper-evident record of who touched the sample and when.",
    mechanics: [
      { title: "Immutable Evidence Chain", description: "Replace the paper custody form. Every collection, transport, and analysis event is written to the Evidence Chain as an ordered, tamper-evident record, so no stage can be back-dated or quietly rewritten after a positive result." },
      { title: "Device Attestation", description: "Bind each reading to trusted hardware. Sealed containers, temperature loggers, and lab instruments attest their identity on-chain, so a claim of a broken seal or a mishandled sample is checked against signed device state rather than memory." },
      { title: "Signed Handoffs", description: "Capture officer, athlete, and lab signatures at every transfer. The DID and VC Ledger requires both the releasing and receiving party to co-sign the sample identity before custody advances, making a silent labelling swap detectable." },
      { title: "Tamper-Evident Sealing", description: "Anchor the seal serial at collection. Any later mismatch between the sealed identity and the sample presented at the lab breaks the cryptographic link and is flagged before analysis, not after a challenge." },
      { title: "Rapid Challenge Resolution", description: "Answer a legal challenge from evidence. When an athlete disputes a finding, the agency exports the complete signed custody record in one query, collapsing a resolution that once ran to arbitration into days." },
      { title: "Regulator Read Access", description: "Give the agency and arbitration panel a read-only window. Authorities query the custody chain directly to confirm integrity, replacing physical file retrieval and witness recollection with a live on-chain lookup." },
    ],
    lifecycleTitle: "The Custody Lifecycle",
    lifecycleSubtitle:
      "Follow a single sample from the collection booth through sealed transport, lab analysis, and a final challenge that resolves on-chain.",
    lifecycleSteps: [
      {
        label: "Sample Collection",
        description:
          "A doping control officer collects the sample and seals it. The contract anchors the seal serial, the athlete credential, and the officer credential as the immutable origin of the custody chain.",
        icon: FlaskConical,
        logFilename: "cerulea_custody.log",
        logLines: [
          { text: "[SYS] Opening doping control custody manifest...", time: "14:05:11", tone: "default" },
          { text: "[CMD] collectSample { seal: \"DCF_77120\", athlete: \"ATH_5541\", officer: \"DCO_204\" }", time: "14:05:12", tone: "primary" },
          { text: "[AUTH] Co-signing athlete and officer credentials via DID/VC...", time: "14:05:12", tone: "secondary" },
          { text: "[OK] Sample DCF_77120 anchored at block 5510442.", time: "14:05:13", tone: "success" },
        ],
      },
      {
        label: "Sealed Transport",
        description:
          "The sealed sample moves to a courier and then the lab. Device attestation from the temperature logger and each co-signed handoff record the sample crossing custody without a break.",
        icon: Truck,
        logFilename: "cerulea_custody.log",
        logLines: [
          { text: "[SYS] Handoff pending acceptance at Courier_0x19...", time: "16:41:03", tone: "default" },
          { text: "[CMD] acceptCustody(DCF_77120, tempLog: \"OK\", sealIntact: true)", time: "16:41:07", tone: "primary" },
          { text: "[SYS] Device attestation verified for cold-chain logger.", time: "16:41:07", tone: "default" },
          { text: "[OK] Custody transferred. Chain length now 2 hops.", time: "16:41:08", tone: "success" },
        ],
      },
      {
        label: "Lab Analysis",
        description:
          "The laboratory verifies the seal against the anchored serial, then records the analysis event and result. The Evidence Chain binds the result to the exact sample identity.",
        icon: Biotech,
        logFilename: "cerulea_custody.log",
        logLines: [
          { text: "[SYS] Verifying seal DCF_77120 against anchored serial...", time: "09:12:20", tone: "default" },
          { text: "[CMD] recordAnalysis(DCF_77120, panel: \"WADA_2026\", finding: \"AAF\")", time: "09:12:21", tone: "primary" },
          { text: "[AUTH] Sealing lab signature to result record...", time: "09:12:21", tone: "secondary" },
          { text: "[OK] Result bound to sample. Chain intact from collection.", time: "09:12:22", tone: "success" },
        ],
      },
      {
        label: "Challenge Resolution",
        description:
          "The athlete challenges the finding on custody grounds. The agency exports the complete signed record for the arbitration panel, which verifies an unbroken chain in one read.",
        icon: Gavel,
        logFilename: "cerulea_custody.log",
        logLines: [
          { text: "[SYS] Challenge filed against finding for ATH_5541...", time: "11:30:44", tone: "default" },
          { text: "[CMD] exportCustody(DCF_77120)", time: "11:30:44", tone: "primary" },
          { text: "[SYS] Assembling 3-hop custody chain and 4 signatures...", time: "11:30:45", tone: "default" },
          { text: "[OK] Unbroken chain returned. Challenge dismissed.", time: "11:30:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes sample custody into modular contracts. Each layer seals, transports, analyzes, and exposes a sample so integrity holds without any single party controlling the record.",
    layers: [
      {
        title: "Evidence Chain",
        subtitle: "The Custody Ledger",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Custody Ledger",
          description:
            "The foundational data layer. It anchors the seal serial at collection and appends an ordered, tamper-evident event for every handling stage, so the full history of a sample is reconstructable from a single identity.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract EvidenceChain {\n  struct Event {\n    address handler;\n    bytes32 sealId;\n    string stage;\n    uint256 timestamp;\n  }\n\n  mapping(bytes32 => Event[]) public custody;\n\n  function anchor(bytes32 sealId, string calldata stage) external {\n    custody[sealId].push(Event(msg.sender, sealId, stage, block.timestamp));\n  }\n}",
        simAction: "Simulate Sample Sealing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading officer credential DCO_204...", tone: "default" },
          { text: "Anchoring seal serial DCF_77120...", tone: "default" },
          { text: "Writing genesis custody event to Level 1 storage...", tone: "default" },
          { text: "Locking athlete identity to sample...", tone: "default" },
          { text: "[SUCCESS] Sample DCF_77120 sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Device Attestation",
        subtitle: "The Hardware Witness",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Hardware Witness",
          description:
            "Binds custody events to trusted equipment. Cold-chain loggers and lab instruments sign their own identity and state, so a claim of a temperature excursion or a broken seal is checked against attested hardware, not testimony.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract DeviceAttestation {\n  mapping(address => bool) public trusted;\n\n  function attest(bytes32 sealId, bytes calldata sig, int256 temp) external returns (bool) {\n    require(trusted[msg.sender], \"Untrusted device\");\n    require(verify(sig), \"Bad attestation\");\n    emit DeviceReading(sealId, msg.sender, temp);\n    return temp <= 8;\n  }\n}",
        simAction: "Simulate Device Reading",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Polling cold-chain logger for DCF_77120...", tone: "default" },
          { text: "Verifying device signature against trusted set...", tone: "default" },
          { text: "Reading temperature: 4C, seal state intact...", tone: "default" },
          { text: "[PASS] Reading within cold-chain threshold.", tone: "success" },
          { text: "[SUCCESS] Attested reading recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "DID and VC Ledger",
        subtitle: "The Signature Notary",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Signature Notary",
          description:
            "Captures officer, athlete, and lab signatures as verifiable credentials. A custody transfer cannot advance until both parties co-sign the sample identity, turning every handoff into a mutual, non-repudiable agreement.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function acceptCustody(bytes32 sealId, bytes calldata vc) external {\n    Handoff storage h = pending[sealId];\n    require(h.receiver == msg.sender, \"Not receiver\");\n    require(verifyVC(vc), \"Invalid credential\");\n    h.settled = true;\n    holder[sealId] = msg.sender;\n    emit CustodyAccepted(sealId, msg.sender);\n}",
        simAction: "Simulate Signed Handoff",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Courier presenting verifiable credential...", tone: "default" },
          { text: "Matching seal DCF_77120 against declared identity...", tone: "default" },
          { text: "Recording co-signature from releasing officer...", tone: "default" },
          { text: "Advancing custody holder to courier...", tone: "default" },
          { text: "[SUCCESS] Handoff sealed with mutual proof.", tone: "success" },
        ],
      },
      {
        title: "Agency Verifier",
        subtitle: "The Arbitration Window",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Arbitration Window",
          description:
            "A read-only gateway that resolves a sample identity to its full custody chain and every signature. It lets an agency or arbitration panel confirm an unbroken chain without trusting the collecting party or retrieving a physical file.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function exportCustody(bytes32 sealId) external view returns (Event[] memory, bytes32[] memory) {\n    return (custody[sealId], signatures[sealId]);\n}",
        simAction: "Simulate Challenge Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Panel requests custody export for DCF_77120...", tone: "default" },
          { text: "Assembling 3-hop custody chain...", tone: "default" },
          { text: "Attaching 4 co-signatures and device readings...", tone: "default" },
          { text: "Checking chain continuity from collection...", tone: "default" },
          { text: "[SUCCESS] Unbroken chain verified for panel.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Sample chain of custody is a horizontal integrity capability. Here is how different sporting bodies put the signed custody ledger to work.",
    sectors: [
      { icon: Landmark, title: "Anti-Doping Agencies", description: "Anchor every collection and transfer on a shared ledger so a positive finding arrives with a complete signed provenance, cutting arbitration exposure and turning custody defences into a settled record instead of a witness account.", assetTypes: ["Sample Seals", "Custody Chains", "Officer Credentials"] },
      { icon: Biotech, title: "Accredited Laboratories", description: "Verify the anchored seal before analysis and bind each result to the exact sample identity, so a lab cannot be accused of testing the wrong specimen and can prove its own handling in one export.", assetTypes: ["Analysis Records", "Seal Verifications", "Result Attestations"] },
      { icon: Gavel, title: "Sports Tribunals", description: "Read the custody chain directly during a hearing to confirm integrity without physical file retrieval, resolving custody challenges on cryptographic evidence rather than competing recollections.", assetTypes: ["Evidence Bundles", "Signature Sets", "Hearing Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy laboratory information system or capturing collection data from a field officer's tablet, Cerulea routes both into one signed custody record.",
    tracks: [
      {
        title: "Track A: Laboratory System Bridging",
        description:
          "For accredited labs on legacy LIMS. Existing analysis events are translated into signed on-chain custody transitions through the API gateway, with each seal verification hashed automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy LIMS", sublabel: "Laboratory Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Custody Evidence Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Field Collection Capture",
        description:
          "For doping control officers on mobile. A progressive web app signs each collection and handoff from an officer wallet and routes device attestations directly to the ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Officer PWA / Wallet", sublabel: "Collection Devices", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Custody Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Custody Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a signed custody network with device attestation, credentialed handoffs, and an arbitration-grade verifier from scratch requires specialised engineers and long laboratory integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Custody & Attestation Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects regulated laboratory integration benchmarks. Wiring each lab's LIMS to a custody model, building credential and device-attestation logic, and shipping an arbitration-grade verifier for an average agency takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your custody and attestation rules into pre-audited WebAssembly binaries and provisions the shared evidence ledger and verifier instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "athlete-transfer-and-contract-management-across-clubs-and-federations",
    icon: Handshake,
    eyebrow: "Transfer Settlement Layer",
    headline1: "Anchor every transfer.",
    headline2: "Settle the clause automatically.",
    heroDescription:
      "Anchor each transfer agreement on a private network shared by clubs and federations, with terms, payment schedule, and registration in one place. Trade Finance Documents and the Provenance Notary hold the terms, Escrow and Conditional Settlement runs the payment schedule, and the DID and VC Ledger updates registration credentials in real time.",
    heroCta: "Deploy Transfer Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Replace disputed readings of a paper agreement with one neutral, executable record of terms, payments, and registration.",
    mechanics: [
      { title: "Anchored Contract Terms", description: "Replace conflicting copies of the agreement. The Provenance Notary binds the signed transfer terms to a single on-chain record, so every party reads the same fee, instalment plan, and sell-on clause with no room for a divergent interpretation." },
      { title: "Conditional Settlement", description: "Run the payment schedule as code. Escrow and Conditional Settlement releases each instalment only when its trigger is met, so appearances, add-ons, and staged fees pay out against verified events rather than reconciliation emails." },
      { title: "Automated Sell-On Clauses", description: "Settle sell-on percentages from the immutable terms. When a player is later resold, the contract computes the prior club's share directly against the anchored clause, ending the dispute over what was agreed." },
      { title: "Live Registration Sync", description: "Update eligibility the moment a transfer completes. The DID and VC Ledger issues the new registration credential to the receiving club and federation, so the player is registered in real time instead of after manual paperwork." },
      { title: "Cross-Jurisdiction Neutrality", description: "Give parties across federations one shared record. A transfer spanning two associations settles against a neutral ledger both trust, removing the need for a single national body to hold the authoritative copy." },
      { title: "Federation Oversight", description: "Give the governing body a read-only window. Federations query the transfer ledger to confirm terms and payment status, replacing after-the-fact document requests with a live view of every registered move." },
    ],
    lifecycleTitle: "The Transfer Lifecycle",
    lifecycleSubtitle:
      "Follow a single transfer from a signed agreement through escrowed instalments, a later resale, and an automatic sell-on payout.",
    lifecycleSteps: [
      {
        label: "Agreement Anchoring",
        description:
          "Two clubs sign the transfer agreement. The contract anchors the fee, the instalment schedule, and the sell-on percentage as the immutable terms both parties will settle against.",
        icon: ScrollText,
        logFilename: "cerulea_transfer.log",
        logLines: [
          { text: "[SYS] Opening transfer agreement manifest...", time: "10:22:04", tone: "default" },
          { text: "[CMD] anchorTerms { fee: 12000000, sellOn: 15, player: \"PLR_9033\" }", time: "10:22:05", tone: "primary" },
          { text: "[AUTH] Co-signing selling and buying club credentials...", time: "10:22:05", tone: "secondary" },
          { text: "[OK] Agreement TRF_4471 anchored at block 6620110.", time: "10:22:06", tone: "success" },
        ],
      },
      {
        label: "Escrow Funding",
        description:
          "The buying club funds the first instalment into escrow. Conditional Settlement locks the amount and arms the triggers for the appearance-based add-ons.",
        icon: Wallet,
        logFilename: "cerulea_transfer.log",
        logLines: [
          { text: "[SYS] Awaiting first instalment for TRF_4471...", time: "12:08:33", tone: "default" },
          { text: "[CMD] fundEscrow(TRF_4471, amount: 4000000)", time: "12:08:35", tone: "primary" },
          { text: "[SYS] Instalment locked. Add-on triggers armed.", time: "12:08:35", tone: "default" },
          { text: "[OK] Escrow funded. Registration credential issued.", time: "12:08:36", tone: "success" },
        ],
      },
      {
        label: "Registration Update",
        description:
          "The federation records the completed move. The DID and VC Ledger updates the player's registration credential so eligibility transfers to the receiving club immediately.",
        icon: IdCard,
        logFilename: "cerulea_transfer.log",
        logLines: [
          { text: "[SYS] Federation processing registration for PLR_9033...", time: "12:09:01", tone: "default" },
          { text: "[CMD] updateRegistration(PLR_9033, club: \"CLB_220\")", time: "12:09:02", tone: "primary" },
          { text: "[AUTH] Revoking prior credential and issuing new VC...", time: "12:09:02", tone: "secondary" },
          { text: "[OK] Player registered. Eligibility active this window.", time: "12:09:03", tone: "success" },
        ],
      },
      {
        label: "Sell-On Payout",
        description:
          "The player is resold two seasons later. The contract reads the anchored sell-on clause and routes the prior club's share automatically from the new transfer.",
        icon: Coins,
        logFilename: "cerulea_transfer.log",
        logLines: [
          { text: "[SYS] Downstream resale detected for PLR_9033...", time: "15:44:19", tone: "default" },
          { text: "[CMD] settleSellOn(TRF_4471, saleValue: 20000000)", time: "15:44:20", tone: "primary" },
          { text: "[SYS] Computing 15% share against anchored clause...", time: "15:44:20", tone: "default" },
          { text: "[OK] 3,000,000 routed to origin club. Dispute avoided.", time: "15:44:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes athlete transfers into modular contracts. Each layer anchors terms, escrows payments, updates registration, and settles downstream clauses without a single federation holding the record.",
    layers: [
      {
        title: "Provenance Notary",
        subtitle: "The Terms Vault",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Terms Vault",
          description:
            "The foundational data layer. It anchors the signed transfer terms by their digest and stores the fee, schedule, and sell-on clause as an immutable reference that every later payment and resale points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TransferTerms {\n  struct Deal {\n    address seller;\n    address buyer;\n    uint256 fee;\n    uint16 sellOnBps;\n    bytes32 docHash;\n  }\n\n  mapping(bytes32 => Deal) public deals;\n\n  function anchor(bytes32 id, uint256 fee, uint16 sellOnBps, bytes32 h) external {\n    deals[id] = Deal(msg.sender, address(0), fee, sellOnBps, h);\n  }\n}",
        simAction: "Simulate Terms Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Hashing signed transfer agreement PDF...", tone: "default" },
          { text: "Recording fee and 15% sell-on clause...", tone: "default" },
          { text: "Binding both club credentials to deal...", tone: "default" },
          { text: "Writing deal state to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Agreement TRF_4471 anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Escrow Engine",
        subtitle: "The Conditional Payer",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Payer",
          description:
            "Runs the payment schedule without a paying agent. It holds each instalment until its trigger is met, releasing appearance add-ons and staged fees against verified events so no party chases a late transfer manually.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function release(bytes32 dealId, bytes32 trigger) external {\n    Instalment storage i = schedule[dealId][trigger];\n    require(i.armed && !i.paid, \"Not payable\");\n    require(oracle.met(trigger), \"Trigger unmet\");\n    i.paid = true;\n    payable(deals[dealId].seller).transfer(i.amount);\n    emit InstalmentPaid(dealId, trigger, i.amount);\n}",
        simAction: "Simulate Instalment Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking appearance trigger for PLR_9033...", tone: "default" },
          { text: "Oracle confirms 25 competitive appearances...", tone: "default" },
          { text: "Unlocking add-on instalment from escrow...", tone: "default" },
          { text: "Transferring funds to selling club...", tone: "default" },
          { text: "[SUCCESS] Add-on settled against verified event.", tone: "success" },
        ],
      },
      {
        title: "Registration Ledger",
        subtitle: "The Eligibility Switch",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Eligibility Switch",
          description:
            "Updates the player's registration credential the moment a transfer completes. It revokes the prior club's credential and issues a new verifiable credential to the receiving club, so eligibility moves in real time.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function updateRegistration(bytes32 player, address club) external onlyFederation {\n    _revoke(credential[player]);\n    credential[player] = _issue(player, club, block.timestamp);\n    emit Registered(player, club);\n}",
        simAction: "Simulate Registration Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Federation validating completed transfer...", tone: "default" },
          { text: "Revoking prior registration credential...", tone: "default" },
          { text: "Issuing new VC to receiving club...", tone: "default" },
          { text: "Confirming eligibility for current window...", tone: "default" },
          { text: "[SUCCESS] Player registered to new club on-chain.", tone: "success" },
        ],
      },
      {
        title: "Sell-On Settler",
        subtitle: "The Downstream Router",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Downstream Router",
          description:
            "The clause executor. On a later resale it reads the anchored sell-on percentage and routes the prior club's share directly from the new deal value, settling a historically disputed calculation from an immutable term.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function settleSellOn(bytes32 originDeal, uint256 saleValue) external {\n    Deal memory d = deals[originDeal];\n    uint256 share = (saleValue * d.sellOnBps) / 10000;\n    payable(d.seller).transfer(share);\n    emit SellOnSettled(originDeal, d.seller, share);\n}",
        simAction: "Simulate Sell-On Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading resale value of 20,000,000...", tone: "default" },
          { text: "Loading anchored 15% sell-on clause...", tone: "default" },
          { text: "Computing origin club share of 3,000,000...", tone: "default" },
          { text: "Routing share to prior selling club...", tone: "default" },
          { text: "[SUCCESS] Sell-on settled from immutable terms.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Transfer and contract management is a horizontal settlement capability. Here is how different bodies put the shared transfer ledger to work.",
    sectors: [
      { icon: Building2, title: "Professional Clubs", description: "Settle fees, add-ons, and sell-on shares against one anchored agreement, so a resale two seasons later routes the prior club's share automatically instead of triggering a fresh dispute over what the paper said.", assetTypes: ["Transfer Agreements", "Escrow Schedules", "Sell-On Clauses"] },
      { icon: Landmark, title: "Federations & Associations", description: "Update player eligibility the moment a move completes and read every registered transfer from one ledger, replacing manual registration paperwork with a live credential switch.", assetTypes: ["Registration Credentials", "Eligibility Records", "Transfer Registries"] },
      { icon: Scale, title: "Agents & Intermediaries", description: "Attach commission triggers to the anchored deal and receive payout against the same verified events the clubs settle on, so representation fees clear without a separate reconciliation.", assetTypes: ["Commission Triggers", "Mandate Records", "Payout Schedules"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a club's legacy finance system or capturing a federation officer's registration approval, Cerulea routes both into one shared transfer record.",
    tracks: [
      {
        title: "Track A: Club Finance Bridging",
        description:
          "For clubs on legacy ERP and finance systems. Existing payment events are translated into escrow releases and on-chain settlement through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Finance ERP", sublabel: "Club Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Payment Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Consortium Transfer Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Federation Registration Capture",
        description:
          "For federation officers on portals. A credentialed app signs each registration update from a federation wallet and routes it directly to the shared ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Federation Portal / Wallet", sublabel: "Registration Officers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Registration Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Transfer Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared transfer network with anchored terms, conditional escrow, live registration, and downstream clause settlement from scratch requires specialised engineers and long multi-party integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Settlement & Clause Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects enterprise financial integration benchmarks. Wiring each club's finance system, building escrow and sell-on logic, and shipping a cross-federation registration bridge for an average network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your settlement and clause rules into pre-audited WebAssembly binaries and provisions the shared transfer ledger and registration layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "sports-memorabilia-authentication-and-provenance",
    icon: QrCode,
    eyebrow: "Memorabilia Provenance Engine",
    headline1: "Tag every artifact.",
    headline2: "Retire the forged certificate.",
    heroDescription:
      "Link each signed or match-used item to an NFC-tagged NFT on a hybrid network, so authenticity travels with the object. NFT Minting and the NFT Metadata Pipeline hold the item, the Provenance Notary and DID and VC Ledger anchor the authenticator, and a public layer exposes provenance to any secondary buyer.",
    heroCta: "Deploy Provenance Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a forgeable paper certificate into a physical tag bound to an on-chain record that any buyer can verify.",
    mechanics: [
      { title: "NFC-to-NFT Binding", description: "Bind the physical item to its digital twin. NFT Minting pairs an embedded NFC tag with a unique token, so scanning the object resolves to one on-chain record and a swapped or cloned item fails the match." },
      { title: "Authenticator Signatures", description: "Anchor who vouched for the item. The DID and VC Ledger records the authenticator's credential against the mint, so provenance rests on a named, verifiable signer rather than a printed hologram." },
      { title: "Match-Used Metadata", description: "Capture the exact event. The NFT Metadata Pipeline binds the fixture, date, and moment an item was used or signed, so a match-worn jersey carries its context on-chain instead of an unverifiable claim." },
      { title: "Ownership History", description: "Preserve the full chain of title. Every resale writes a new custody entry, so a secondary buyer reads the complete ownership history from mint to present in seconds." },
      { title: "Public Verification", description: "Expose provenance to anyone. A public layer resolves a tag scan to the item, its authenticator, and its history with no account, so a buyer verifies before paying rather than trusting the seller." },
      { title: "Forgery Exclusion", description: "Make counterfeits inert. An item with no on-chain record or a broken tag binding returns nothing on scan, so a forgery cannot borrow the credibility of a genuine certificate." },
    ],
    lifecycleTitle: "The Provenance Lifecycle",
    lifecycleSubtitle:
      "Follow a single match-used item from authentication and tagging through a first sale and a later secondary verification.",
    lifecycleSteps: [
      {
        label: "Authentication & Tagging",
        description:
          "An accredited authenticator verifies the item and embeds an NFC tag. The contract mints the paired NFT and anchors the authenticator's credential as the origin of provenance.",
        icon: Fingerprint,
        logFilename: "cerulea_provenance.log",
        logLines: [
          { text: "[SYS] Opening memorabilia provenance manifest...", time: "13:15:40", tone: "default" },
          { text: "[CMD] mintItem { tag: \"NFC_5521\", item: \"JERSEY_FINAL_10\", auth: \"AUTH_88\" }", time: "13:15:41", tone: "primary" },
          { text: "[AUTH] Binding authenticator credential via DID/VC...", time: "13:15:41", tone: "secondary" },
          { text: "[OK] Item ITEM_5521 minted at block 7710233.", time: "13:15:42", tone: "success" },
        ],
      },
      {
        label: "Metadata Anchoring",
        description:
          "The pipeline attaches the match context. The NFT Metadata Pipeline binds the fixture, date, and match-used evidence to the token by digest.",
        icon: ScrollText,
        logFilename: "cerulea_provenance.log",
        logLines: [
          { text: "[SYS] Anchoring match-used metadata for ITEM_5521...", time: "13:16:05", tone: "default" },
          { text: "[CMD] anchorMeta([\"FIXTURE_CUPFINAL\", \"WORN_90MIN\"])", time: "13:16:05", tone: "primary" },
          { text: "[AUTH] Hashing evidence (SHA-256) and sealing to token...", time: "13:16:06", tone: "secondary" },
          { text: "[OK] Match context anchored. Tamper-evident.", time: "13:16:06", tone: "success" },
        ],
      },
      {
        label: "Primary Sale",
        description:
          "The item sells to its first owner. The contract transfers the token, writes the first ownership entry, and links it permanently to the physical tag.",
        icon: Handshake,
        logFilename: "cerulea_provenance.log",
        logLines: [
          { text: "[SYS] Primary sale initiated for ITEM_5521...", time: "16:48:12", tone: "default" },
          { text: "[CMD] transfer(ITEM_5521, to: \"Collector_0x71\")", time: "16:48:13", tone: "primary" },
          { text: "[SYS] Writing first ownership entry to chain of title...", time: "16:48:13", tone: "default" },
          { text: "[OK] Ownership recorded. Tag bound to holder.", time: "16:48:14", tone: "success" },
        ],
      },
      {
        label: "Secondary Verification",
        description:
          "A later buyer scans the tag before purchase. The public layer resolves it to the authenticator, the match context, and the full ownership history with no account.",
        icon: Search,
        logFilename: "cerulea_provenance.log",
        logLines: [
          { text: "[SYS] Public verification request for NFC_5521...", time: "20:03:57", tone: "default" },
          { text: "[CMD] resolveItem(ITEM_5521)", time: "20:03:57", tone: "primary" },
          { text: "[SYS] Assembling authenticator, context, and 2 owners...", time: "20:03:58", tone: "default" },
          { text: "[OK] Verified provenance returned. Genuine item.", time: "20:03:58", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes memorabilia provenance into modular contracts. Each layer mints, describes, transfers, and exposes an item so authenticity holds without trusting a single paper certificate.",
    layers: [
      {
        title: "NFT Minting",
        subtitle: "The Physical Twin",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Physical Twin",
          description:
            "The foundational data layer. It pairs an embedded NFC tag with a unique token at authentication, storing the immutable link between the physical object and its on-chain identity that every later record points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ItemRegistry {\n  struct Item {\n    bytes32 nfcTag;\n    address authenticator;\n    uint256 mintedAt;\n    bytes32 metaHash;\n  }\n\n  mapping(uint256 => Item) public items;\n\n  function mint(uint256 id, bytes32 tag, address auth) external onlyIssuer {\n    items[id] = Item(tag, auth, block.timestamp, 0);\n  }\n}",
        simAction: "Simulate Item Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading NFC tag NFC_5521 from item...", tone: "default" },
          { text: "Pairing tag to unique token identity...", tone: "default" },
          { text: "Locking authenticator credential AUTH_88...", tone: "default" },
          { text: "Writing item twin to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Item ITEM_5521 minted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Metadata Pipeline",
        subtitle: "The Context Seal",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Context Seal",
          description:
            "Anchors match-used evidence by its digest. The fixture, date, and worn-minute proof are sealed to the token, so a match-worn claim carries verifiable context and any later edit to the evidence breaks its hash.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function anchorMeta(uint256 id, bytes32 metaHash, string calldata fixture) external onlyIssuer {\n    require(items[id].mintedAt != 0, \"Not minted\");\n    items[id].metaHash = metaHash;\n    emit MetaAnchored(id, metaHash, fixture);\n}",
        simAction: "Simulate Metadata Anchor",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Ingesting cup final worn-minute evidence...", tone: "default" },
          { text: "Computing SHA-256 digest of context...", tone: "default" },
          { text: "Sealing digest to ITEM_5521...", tone: "default" },
          { text: "Verifying binding to minted twin...", tone: "default" },
          { text: "[SUCCESS] Match context anchored, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "Chain of Title",
        subtitle: "The Ownership Ledger",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Ownership Ledger",
          description:
            "Records every resale as an ordered entry. It preserves the complete chain of title from mint to present, so a secondary buyer inherits full ownership history instead of a certificate with an unknown past.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function transfer(uint256 id, address to) external {\n    require(ownerOf[id] == msg.sender, \"Not owner\");\n    title[id].push(Owner(to, block.timestamp));\n    ownerOf[id] = to;\n    emit Transferred(id, msg.sender, to);\n}",
        simAction: "Simulate Ownership Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying seller holds ITEM_5521...", tone: "default" },
          { text: "Appending new owner to chain of title...", tone: "default" },
          { text: "Rebinding NFC tag to current holder...", tone: "default" },
          { text: "Updating ownership index...", tone: "default" },
          { text: "[SUCCESS] Ownership entry recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Public Verifier",
        subtitle: "The Buyer Window",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Buyer Window",
          description:
            "A read-only gateway that resolves a tag scan to the item, its authenticator, and its full ownership history. It lets any secondary buyer verify authenticity without an account and without trusting the seller.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveItem(uint256 id) external view returns (Item memory, Owner[] memory) {\n    return (items[id], title[id]);\n}",
        simAction: "Simulate Buyer Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer scans NFC tag NFC_5521...", tone: "default" },
          { text: "Resolving item and authenticator...", tone: "default" },
          { text: "Assembling 2-owner chain of title...", tone: "default" },
          { text: "Attaching anchored match context...", tone: "default" },
          { text: "[SUCCESS] Verified provenance returned to buyer.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Memorabilia provenance is a horizontal trust capability. Here is how different market actors put the tag-to-token record to work.",
    sectors: [
      { icon: Gavel, title: "Auction Houses", description: "Present every lot with a scannable provenance record and a named authenticator, so bidders verify a match-used claim before the hammer falls and consignors command a premium for proven history.", assetTypes: ["Auction Lots", "Authenticator Records", "Chains of Title"] },
      { icon: Building2, title: "Clubs & Leagues", description: "Mint official match-worn items at source and seal the fixture context on-chain, turning club-issued memorabilia into a verifiable product line that forgeries cannot imitate.", assetTypes: ["Match-Worn Items", "Fixture Metadata", "Official Editions"] },
      { icon: Users, title: "Collectors & Marketplaces", description: "Let secondary buyers scan a tag and read full ownership history in seconds, so resale value follows verified provenance and unrecorded forgeries are excluded from the market.", assetTypes: ["Collector Holdings", "Resale Listings", "Provenance Scans"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an auction house catalogue system or capturing a tag scan from a collector's phone, Cerulea routes both into one shared provenance record.",
    tracks: [
      {
        title: "Track A: Auction Catalogue Bridging",
        description:
          "For auction houses on legacy catalogue systems. Existing lot records are translated into minted items and anchored metadata through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Catalogue System", sublabel: "Auction House Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Item Hashing & Minting", icon: Server, accent: true },
          { label: "Cerulea Hybrid Chain", sublabel: "Provenance Registry Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Public Scan Verification",
        description:
          "For collectors and buyers on mobile. A public app resolves an NFC tag scan directly against the ledger and returns provenance to any device without an account.",
        connectorLabels: ["TAG SCAN", "STATE EXECUTION"],
        nodes: [
          { label: "NFC Scan / App", sublabel: "Collector Devices", icon: QrCode, accent: false },
          { label: "Public Resolver Nodes", sublabel: "Provenance Lookup", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Exposed Provenance Ledger", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a hybrid provenance network with NFC-to-NFT binding, authenticator credentials, a metadata pipeline, and a public verifier from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Provenance & Metadata Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects hybrid NFT infrastructure benchmarks. Wiring NFC hardware to a minting pipeline, building authenticator credential logic, and shipping a public provenance portal for an average marketplace takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your provenance and metadata rules into pre-audited WebAssembly binaries and provisions the registry and public verifier instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "fan-token-issuance-and-governance-rights-for-club-decisions",
    icon: Vote,
    eyebrow: "Fan Governance DApp Layer",
    headline1: "Tokenize the terraces.",
    headline2: "Make the fan vote binding.",
    heroDescription:
      "Issue fan tokens on a public-chain governance app that gives supporters a genuine, binding say in club decisions and opens a new engagement revenue stream. An ERC-20 token carries the vote, the On-chain Voting and Proposals modules run each decision, and the Treasury and Fiat On-Ramp support participation.",
    heroCta: "Deploy Governance Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a symbolic fan poll into a transparent, tamper-proof governance process backed by a tradable token.",
    mechanics: [
      { title: "ERC-20 Fan Token", description: "Issue a token that carries voting weight. An ERC-20 fan token gives each holder a verifiable stake in club decisions, replacing an unauditable email poll with a balance that maps directly to governance power." },
      { title: "On-Chain Proposals", description: "Put each decision to a formal proposal. The Proposals module records the question, the options, and the voting window on-chain, so every fan sees the same motion and no option is quietly altered after opening." },
      { title: "Binding Vote Execution", description: "Make the result count. On-chain Voting tallies weighted ballots and records an outcome the club has committed to honour, so a fan vote drives a real decision rather than a marketing gesture." },
      { title: "Fiat On-Ramp", description: "Lower the barrier to participation. The Fiat On-Ramp lets supporters acquire tokens with familiar payment methods, so a broad fan base can join governance without a prior crypto wallet or exchange account." },
      { title: "Treasury Revenue", description: "Open an engagement revenue stream. The Treasury module captures primary issuance proceeds and participation activity, giving the club a transparent new income line tied directly to fan engagement." },
      { title: "Transparent Tallies", description: "Publish results that cannot be manipulated. Every ballot and the final count are verifiable on-chain, so supporters and media confirm the outcome independently instead of trusting an announced number." },
    ],
    lifecycleTitle: "The Governance Lifecycle",
    lifecycleSubtitle:
      "Follow a single club decision from token issuance through a fan onboarding, a live vote, and a binding, transparent result.",
    lifecycleSteps: [
      {
        label: "Token Issuance",
        description:
          "The club issues its fan token. The contract mints the ERC-20 supply, sets the governance weight, and routes primary proceeds to the club treasury.",
        icon: Coins,
        logFilename: "cerulea_governance.log",
        logLines: [
          { text: "[SYS] Opening fan token issuance manifest...", time: "09:30:00", tone: "default" },
          { text: "[CMD] issueToken { symbol: \"FCB\", supply: 1000000, weight: 1 }", time: "09:30:01", tone: "primary" },
          { text: "[AUTH] Binding token to club treasury address...", time: "09:30:01", tone: "secondary" },
          { text: "[OK] Token FCB issued at block 8810055.", time: "09:30:02", tone: "success" },
        ],
      },
      {
        label: "Fan Onboarding",
        description:
          "A supporter acquires tokens through the Fiat On-Ramp. The contract credits the wallet and records the voting stake without requiring a prior exchange account.",
        icon: Wallet,
        logFilename: "cerulea_governance.log",
        logLines: [
          { text: "[SYS] Fiat on-ramp request from Supporter_0x33...", time: "10:12:44", tone: "default" },
          { text: "[CMD] purchaseTokens(amount: 250, method: \"CARD\")", time: "10:12:46", tone: "primary" },
          { text: "[SYS] Crediting wallet and recording voting stake...", time: "10:12:46", tone: "default" },
          { text: "[OK] 250 FCB credited. Supporter eligible to vote.", time: "10:12:47", tone: "success" },
        ],
      },
      {
        label: "Proposal Vote",
        description:
          "The club opens a decision to a vote. The Proposals module records the motion and On-chain Voting tallies each weighted ballot inside the voting window.",
        icon: Vote,
        logFilename: "cerulea_governance.log",
        logLines: [
          { text: "[SYS] Proposal PROP_14 opened: choose third kit design...", time: "12:00:00", tone: "default" },
          { text: "[CMD] castVote(PROP_14, option: \"DESIGN_B\", weight: 250)", time: "12:41:19", tone: "primary" },
          { text: "[SYS] Weighted ballot recorded. Tally updated.", time: "12:41:19", tone: "default" },
          { text: "[OK] Vote counted. Window closes at block 8812900.", time: "12:41:20", tone: "success" },
        ],
      },
      {
        label: "Binding Result",
        description:
          "The window closes and the outcome is finalised. The contract publishes a verifiable tally the club has committed to honour.",
        icon: Gavel,
        logFilename: "cerulea_governance.log",
        logLines: [
          { text: "[SYS] Closing proposal PROP_14 for finalisation...", time: "18:00:00", tone: "default" },
          { text: "[CMD] finalize(PROP_14)", time: "18:00:01", tone: "primary" },
          { text: "[SYS] Tallying 41,220 weighted ballots on-chain...", time: "18:00:01", tone: "default" },
          { text: "[OK] DESIGN_B wins. Result binding and transparent.", time: "18:00:02", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fan governance into modular contracts. Each layer issues the token, records proposals, tallies votes, and holds treasury proceeds so decisions are binding and results cannot be manipulated.",
    layers: [
      {
        title: "Fan Token",
        subtitle: "The Voting Stake",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Voting Stake",
          description:
            "The foundational asset layer. It mints the ERC-20 fan token and maps each balance to governance weight, so a holder's say in club decisions is a verifiable on-chain stake rather than an unauditable membership claim.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract FanToken {\n  mapping(address => uint256) public balanceOf;\n  address public treasury;\n\n  function purchase(uint256 amount) external payable {\n    require(msg.value == amount * price, \"Bad payment\");\n    balanceOf[msg.sender] += amount;\n    payable(treasury).transfer(msg.value);\n  }\n}",
        simAction: "Simulate Token Purchase",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Supporter requesting 250 FCB tokens...", tone: "default" },
          { text: "Validating fiat on-ramp payment...", tone: "default" },
          { text: "Crediting wallet balance...", tone: "default" },
          { text: "Routing proceeds to club treasury...", tone: "default" },
          { text: "[SUCCESS] 250 FCB credited with voting stake.", tone: "success" },
        ],
      },
      {
        title: "Proposals",
        subtitle: "The Motion Registry",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Motion Registry",
          description:
            "Records each club decision as a formal proposal. It locks the question, the options, and the voting window on-chain, so every supporter sees the identical motion and no option can be altered after voting opens.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function openProposal(bytes32 id, bytes32[] calldata options, uint256 closesAt) external onlyClub {\n    proposals[id] = Proposal(options, closesAt, false);\n    emit ProposalOpened(id, closesAt);\n}",
        simAction: "Simulate Proposal Open",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Club submitting third-kit design motion...", tone: "default" },
          { text: "Locking two design options on-chain...", tone: "default" },
          { text: "Setting voting window close block...", tone: "default" },
          { text: "Publishing proposal to all holders...", tone: "default" },
          { text: "[SUCCESS] Proposal PROP_14 opened on-chain.", tone: "success" },
        ],
      },
      {
        title: "On-Chain Voting",
        subtitle: "The Weighted Tally",
        icon: Vote,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Weighted Tally",
          description:
            "Tallies each ballot by token weight and prevents double voting. It produces a binding, verifiable outcome the club has committed to honour, so a fan vote is a real decision instead of a symbolic gesture.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function castVote(bytes32 id, uint8 option) external {\n    require(block.number < proposals[id].closesAt, \"Closed\");\n    require(!voted[id][msg.sender], \"Already voted\");\n    voted[id][msg.sender] = true;\n    tally[id][option] += balanceOf[msg.sender];\n    emit VoteCast(id, msg.sender, option);\n}",
        simAction: "Simulate Vote Tally",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking supporter has not voted on PROP_14...", tone: "default" },
          { text: "Reading voting weight of 250 FCB...", tone: "default" },
          { text: "Adding weighted ballot to option B...", tone: "default" },
          { text: "Updating running tally on-chain...", tone: "default" },
          { text: "[SUCCESS] Weighted vote recorded transparently.", tone: "success" },
        ],
      },
      {
        title: "Treasury",
        subtitle: "The Revenue Vault",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Revenue Vault",
          description:
            "Captures issuance proceeds and participation activity in a transparent vault. It gives the club an auditable new engagement revenue line tied directly to fan governance, with every inflow visible on-chain.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function collect() external onlyClub {\n    uint256 amount = address(this).balance;\n    accrued += amount;\n    payable(club).transfer(amount);\n    emit RevenueCollected(amount, accrued);\n}",
        simAction: "Simulate Treasury Collection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating issuance proceeds in vault...", tone: "default" },
          { text: "Recording participation revenue...", tone: "default" },
          { text: "Updating cumulative accrued total...", tone: "default" },
          { text: "Transferring balance to club account...", tone: "default" },
          { text: "[SUCCESS] Engagement revenue collected on-chain.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Fan governance is a horizontal engagement capability. Here is how different rights holders put the token and voting stack to work.",
    sectors: [
      { icon: Building2, title: "Football Clubs", description: "Give supporters binding votes on kit designs, matchday experience, and community initiatives, deepening engagement while the treasury opens a transparent revenue line tied to participation rather than one-off merchandise.", assetTypes: ["Fan Tokens", "Club Proposals", "Treasury Inflows"] },
      { icon: Globe, title: "Leagues & Franchises", description: "Run league-wide fan consultations with verifiable tallies, so supporter sentiment on format or scheduling changes is measured on-chain and cannot be dismissed as an unrepresentative poll.", assetTypes: ["League Ballots", "Sentiment Records", "Governance Rights"] },
      { icon: Gamepad, title: "Esports Organizations", description: "Let a digital-native fan base vote on roster and event decisions through a token they can acquire with familiar payments, converting an online following into an active, revenue-generating community.", assetTypes: ["Community Tokens", "Roster Votes", "Event Proposals"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a club CRM for holder identity or routing native wallet ballots from supporters, Cerulea provides the exact governance routing required.",
    tracks: [
      {
        title: "Track A: Club CRM Bridging",
        description:
          "For clubs on legacy membership CRMs. Existing supporter records are linked to token holdings and eligibility through the API gateway, so governance rides on the club's existing fan base.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Membership CRM", sublabel: "Club Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Holder Linking & Signing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Fan Governance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Native Wallet Voting",
        description:
          "For supporters on mobile wallets. Ballots are signed from a fan wallet and routed directly to the public voting layer with a transparent, verifiable tally.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Fan Wallet / App", sublabel: "Supporter Devices", icon: Fingerprint, accent: false },
          { label: "Public Voting Nodes", sublabel: "Ballot Tallying", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Binding Result Ledger", icon: Vote, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a fan governance app with a token, a proposal system, weighted voting, a fiat on-ramp, and a treasury from scratch requires specialised engineers and long audit cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Governance & Token Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects public-chain DApp benchmarks. Writing custom ERC-20 and voting logic, integrating a compliant fiat on-ramp, and auditing a treasury for an average club takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your governance and token rules into pre-audited WebAssembly binaries and provisions the voting layer, on-ramp, and treasury instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "stadium-ticket-resale-marketplace-with-anti-scalping-price-caps",
    icon: Ticket,
    eyebrow: "Ticketing Settlement Layer",
    headline1: "Bind the ticket to the fan.",
    headline2: "Cap the scalper's margin.",
    heroDescription:
      "Issue every ticket as a verifiable asset tied to its original buyer on a shared marketplace, so bots cannot corner supply and resell at inflated prices. ERC-721 NFT tickets and the DID and VC Ledger carry identity, and Compliance Attestations enforce a resale price cap on every secondary sale.",
    heroCta: "Deploy Ticketing Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an anonymous, bot-farmed ticket pool into identity-bound assets whose resale price the contract enforces.",
    mechanics: [
      { title: "Identity-Bound Tickets", description: "Bind each ticket to a real buyer. ERC-721 NFT tickets link to the original purchaser's credential on the DID and VC Ledger, so a bot cannot hoard anonymous inventory and every ticket traces to a named holder." },
      { title: "Enforced Price Cap", description: "Cap resale at the protocol level. Compliance Attestations reject any secondary sale above the set ceiling, so a ticket cannot list at an inflated price no matter what a scalper's storefront advertises." },
      { title: "Verified Resale", description: "Confirm a legitimate transfer. The original buyer identity carries through each resale, so the marketplace distinguishes a genuine fan passing on a ticket from an industrial reseller flipping supply." },
      { title: "Anti-Bot Issuance", description: "Throttle mass purchasing at source. Credentialed issuance limits how many tickets a single identity can hold, breaking the bot strategy of buying up inventory the instant a sale opens." },
      { title: "Instant Entry Validation", description: "Validate the holder at the gate. A scan checks the ticket's on-chain identity binding in real time, so a duplicated or transferred-out ticket fails entry without a manual list check." },
      { title: "Fair Access Records", description: "Give organisers a transparent view. Every issuance and capped resale is recorded, so a club or promoter demonstrates fair distribution and audits secondary activity from one ledger." },
    ],
    lifecycleTitle: "The Ticketing Lifecycle",
    lifecycleSubtitle:
      "Follow a single ticket from primary issuance through a capped resale, an identity check, and validated stadium entry.",
    lifecycleSteps: [
      {
        label: "Primary Issuance",
        description:
          "A fan buys a ticket. The contract mints an ERC-721 ticket bound to the buyer's credential and enforces the per-identity holding limit at issuance.",
        icon: Ticket,
        logFilename: "cerulea_ticketing.log",
        logLines: [
          { text: "[SYS] Opening primary ticket sale manifest...", time: "11:00:00", tone: "default" },
          { text: "[CMD] mintTicket { fixture: \"DERBY_04\", seat: \"N12_R7\", buyer: \"FAN_6620\" }", time: "11:00:03", tone: "primary" },
          { text: "[AUTH] Binding buyer credential and checking hold limit...", time: "11:00:03", tone: "secondary" },
          { text: "[OK] Ticket TKT_7781 issued at block 9910233.", time: "11:00:04", tone: "success" },
        ],
      },
      {
        label: "Capped Resale",
        description:
          "The buyer lists the ticket for resale. Compliance Attestations verify the price against the cap and reject anything above it before the listing goes live.",
        icon: Scale,
        logFilename: "cerulea_ticketing.log",
        logLines: [
          { text: "[SYS] Resale listing requested for TKT_7781...", time: "14:22:10", tone: "default" },
          { text: "[CMD] listResale(TKT_7781, price: 85, faceValue: 80)", time: "14:22:11", tone: "primary" },
          { text: "[SYS] Checking price against cap of face + 10%...", time: "14:22:11", tone: "default" },
          { text: "[OK] Listing accepted at capped price. Bots blocked.", time: "14:22:12", tone: "success" },
        ],
      },
      {
        label: "Identity Transfer",
        description:
          "A second fan buys the resold ticket. The contract transfers the token and rebinds the identity credential so the new holder is verifiable.",
        icon: Fingerprint,
        logFilename: "cerulea_ticketing.log",
        logLines: [
          { text: "[SYS] Secondary purchase for TKT_7781...", time: "15:05:41", tone: "default" },
          { text: "[CMD] transferTicket(TKT_7781, to: \"FAN_7104\")", time: "15:05:42", tone: "primary" },
          { text: "[AUTH] Rebinding identity credential to new holder...", time: "15:05:42", tone: "secondary" },
          { text: "[OK] Ownership transferred. Resale verified legitimate.", time: "15:05:43", tone: "success" },
        ],
      },
      {
        label: "Gate Validation",
        description:
          "The holder arrives at the stadium. A scan checks the ticket's on-chain identity binding in real time and admits only the verified current holder.",
        icon: QrCode,
        logFilename: "cerulea_ticketing.log",
        logLines: [
          { text: "[SYS] Entry scan at turnstile N12 for TKT_7781...", time: "18:40:55", tone: "default" },
          { text: "[CMD] validateEntry(TKT_7781, holder: \"FAN_7104\")", time: "18:40:55", tone: "primary" },
          { text: "[SYS] Confirming identity binding and single-use...", time: "18:40:55", tone: "default" },
          { text: "[OK] Holder verified. Entry granted, ticket consumed.", time: "18:40:56", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes ticketing into modular contracts. Each layer issues, caps, transfers, and validates a ticket so identity travels with the asset and scalping is blocked at the protocol level.",
    layers: [
      {
        title: "Ticket Registry",
        subtitle: "The Identity Bind",
        icon: Ticket,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Identity Bind",
          description:
            "The foundational asset layer. It mints an ERC-721 ticket bound to the original buyer's credential and enforces the per-identity holding limit, so anonymous bot inventory cannot exist at issuance.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TicketRegistry {\n  struct Ticket {\n    bytes32 buyer;\n    uint256 faceValue;\n    bytes32 fixtureId;\n    bool used;\n  }\n\n  mapping(uint256 => Ticket) public tickets;\n\n  function mint(uint256 id, bytes32 buyer, uint256 face, bytes32 fx) external onlyIssuer {\n    require(held[buyer] < maxPerId, \"Hold limit\");\n    tickets[id] = Ticket(buyer, face, fx, false);\n    held[buyer]++;\n  }\n}",
        simAction: "Simulate Ticket Mint",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading buyer credential FAN_6620...", tone: "default" },
          { text: "Checking per-identity holding limit...", tone: "default" },
          { text: "Binding seat N12_R7 to buyer...", tone: "default" },
          { text: "Writing ticket asset to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Ticket TKT_7781 issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Compliance Attestations",
        subtitle: "The Price Ceiling",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Price Ceiling",
          description:
            "Enforces the resale cap at the protocol level. It rejects any secondary listing priced above the ceiling, so a scalper cannot inflate a ticket regardless of what an external storefront advertises.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function listResale(uint256 id, uint256 price) external {\n    uint256 cap = tickets[id].faceValue + (tickets[id].faceValue * capBps) / 10000;\n    require(price <= cap, \"Exceeds price cap\");\n    listings[id] = Listing(msg.sender, price, true);\n    emit Listed(id, price, cap);\n}",
        simAction: "Simulate Cap Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Seller requesting resale at 85...", tone: "default" },
          { text: "Loading face value 80 and 10% cap...", tone: "default" },
          { text: "Comparing price against ceiling of 88...", tone: "default" },
          { text: "[PASS] Price within capped range.", tone: "success" },
          { text: "[SUCCESS] Capped listing accepted on-chain.", tone: "success" },
        ],
      },
      {
        title: "Transfer Ledger",
        subtitle: "The Verified Handover",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Handover",
          description:
            "Rebinds identity on every resale. It transfers the token and reissues the holder credential, so the original buyer identity carries through and the marketplace can distinguish a genuine fan from a reseller.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function transferTicket(uint256 id, bytes32 newHolder) external {\n    require(listings[id].active, \"Not listed\");\n    tickets[id].buyer = newHolder;\n    listings[id].active = false;\n    emit TicketTransferred(id, newHolder);\n}",
        simAction: "Simulate Ticket Transfer",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer FAN_7104 purchasing capped listing...", tone: "default" },
          { text: "Transferring ticket token to new holder...", tone: "default" },
          { text: "Rebinding identity credential...", tone: "default" },
          { text: "Closing resale listing...", tone: "default" },
          { text: "[SUCCESS] Verified resale recorded on-chain.", tone: "success" },
        ],
      },
      {
        title: "Entry Validator",
        subtitle: "The Turnstile Check",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Turnstile Check",
          description:
            "Validates the holder at the gate. A scan confirms the ticket's on-chain identity binding and single-use state in real time, so a duplicated or transferred-out ticket fails entry without a manual list.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function validateEntry(uint256 id, bytes32 holder) external onlyGate returns (bool) {\n    require(!tickets[id].used, \"Already used\");\n    require(tickets[id].buyer == holder, \"Identity mismatch\");\n    tickets[id].used = true;\n    emit EntryGranted(id, holder);\n    return true;\n}",
        simAction: "Simulate Gate Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Scanning ticket TKT_7781 at turnstile...", tone: "default" },
          { text: "Confirming holder identity FAN_7104...", tone: "default" },
          { text: "Checking single-use state...", tone: "default" },
          { text: "Marking ticket consumed...", tone: "default" },
          { text: "[SUCCESS] Entry granted to verified holder.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Anti-scalping ticketing is a horizontal fairness capability. Here is how different rights holders put the identity-bound ticket to work.",
    sectors: [
      { icon: Building2, title: "Clubs & Stadiums", description: "Issue season and matchday tickets as identity-bound assets and cap every resale, so genuine supporters keep fair access and the club audits secondary activity instead of ceding it to scalper storefronts.", assetTypes: ["Matchday Tickets", "Season Passes", "Resale Records"] },
      { icon: Globe, title: "Event Promoters", description: "Break the bot strategy at issuance with per-identity limits and enforce a resale ceiling on high-demand fixtures, protecting brand trust and keeping tickets in the hands of attending fans.", assetTypes: ["Event Tickets", "Holding Limits", "Price Caps"] },
      { icon: Handshake, title: "Resale Marketplaces", description: "Run a compliant secondary market where every listing is verified against the cap and the seller identity, so the platform offers guaranteed legitimate resale rather than an unpoliced flipping venue.", assetTypes: ["Verified Listings", "Seller Credentials", "Capped Transfers"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy box-office system or validating a ticket at a stadium turnstile, Cerulea routes both into one identity-bound ticket record.",
    tracks: [
      {
        title: "Track A: Box-Office Bridging",
        description:
          "For venues on legacy ticketing platforms. Existing seat inventory and sales are translated into identity-bound NFT tickets through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Ticketing Platform", sublabel: "Box-Office Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Issuance Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Ticket Registry Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Turnstile Validation Capture",
        description:
          "For gate staff on scanners. A validator app checks each scan against the ticket's on-chain identity binding and routes the entry event directly to the ledger.",
        connectorLabels: ["GATE SCAN", "STATE EXECUTION"],
        nodes: [
          { label: "Turnstile Scanner / App", sublabel: "Gate Devices", icon: QrCode, accent: false },
          { label: "Validation Nodes", sublabel: "Entry Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Identity-Bound Ticket Record", icon: Ticket, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an anti-scalping marketplace with identity-bound NFT tickets, protocol-level price caps, per-identity limits, and real-time gate validation from scratch requires specialised engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Issuance & Resale Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects enterprise ticketing integration benchmarks. Wiring a box-office platform to an NFT issuance model, building price-cap and identity-binding logic, and shipping a real-time gate validator for an average venue takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your issuance and resale rules into pre-audited WebAssembly binaries and provisions the ticket registry and validation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "youth-academy-talent-contract-and-transfer-compensation-tracking",
    icon: GraduationCap,
    eyebrow: "Training Compensation Engine",
    headline1: "Record the development.",
    headline2: "Pay every academy its due.",
    heroDescription:
      "Track a player's academy development history on a shared network so training compensation calculates itself when they later transfer as a professional. The Civil Registry holds the development record, and the Royalty Standard and Royalty Clearing modules compute each contributing academy's share against verified history.",
    heroCta: "Deploy Compensation Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a disputed reconstruction of a player's development into an automatic payout from a verified, shared record.",
    mechanics: [
      { title: "Verified Development Record", description: "Anchor each stage of a player's development. The Civil Registry records the academy, the seasons, and the training period on a shared network, so a player's formative history is a verified record rather than a contested reconstruction." },
      { title: "Multi-Academy Attribution", description: "Attribute development across every club that contributed. Each academy's period is written as a distinct entry, so compensation reflects the full development history instead of only the final club before the professional move." },
      { title: "Automatic Compensation", description: "Compute training compensation on transfer. The Royalty Standard reads the verified periods and calculates each academy's share the moment a professional transfer completes, with no manual claim process." },
      { title: "Proportional Clearing", description: "Route each share to its academy. Royalty Clearing distributes the calculated amounts directly to every contributing club in proportion to its recorded development period." },
      { title: "Dispute-Free History", description: "Settle from evidence, not memory. Because the development record is verified and shared, an academy's contribution cannot be denied, so the historical dispute over who trained the player disappears." },
      { title: "Federation Oversight", description: "Give the governing body a read-only window. Federations query the compensation ledger to confirm distributions align with regulations, replacing manual claim adjudication with a live on-chain view." },
    ],
    lifecycleTitle: "The Compensation Lifecycle",
    lifecycleSubtitle:
      "Follow a single player from academy registration through years of recorded development to an automatic compensation payout on transfer.",
    lifecycleSteps: [
      {
        label: "Academy Registration",
        description:
          "An academy registers a young player. The Civil Registry anchors the player identity, the academy, and the start of the development period as the origin of the record.",
        icon: GraduationCap,
        logFilename: "cerulea_compensation.log",
        logLines: [
          { text: "[SYS] Opening academy development manifest...", time: "08:45:12", tone: "default" },
          { text: "[CMD] registerYouth { player: \"YTH_3390\", academy: \"ACD_11\", age: 12 }", time: "08:45:13", tone: "primary" },
          { text: "[AUTH] Anchoring player identity to Civil Registry...", time: "08:45:13", tone: "secondary" },
          { text: "[OK] Player YTH_3390 registered at block 10120044.", time: "08:45:14", tone: "success" },
        ],
      },
      {
        label: "Development Logging",
        description:
          "The player moves between academies over several seasons. Each period is written as a distinct entry, building the multi-academy development history.",
        icon: Activity,
        logFilename: "cerulea_compensation.log",
        logLines: [
          { text: "[SYS] Recording development period transfer for YTH_3390...", time: "10:20:31", tone: "default" },
          { text: "[CMD] logPeriod(YTH_3390, academy: \"ACD_27\", seasons: 3)", time: "10:20:32", tone: "primary" },
          { text: "[SYS] Appending distinct academy entry to history...", time: "10:20:32", tone: "default" },
          { text: "[OK] Period logged. History now spans 2 academies.", time: "10:20:33", tone: "success" },
        ],
      },
      {
        label: "Professional Transfer",
        description:
          "The player transfers as a professional. The Royalty Standard reads the verified periods and computes each contributing academy's compensation share.",
        icon: Handshake,
        logFilename: "cerulea_compensation.log",
        logLines: [
          { text: "[SYS] Professional transfer detected for YTH_3390...", time: "13:55:07", tone: "default" },
          { text: "[CMD] computeCompensation(YTH_3390, fee: 5000000)", time: "13:55:08", tone: "primary" },
          { text: "[SYS] Reading 3 academy periods from Civil Registry...", time: "13:55:08", tone: "default" },
          { text: "[OK] Shares computed for 3 contributing academies.", time: "13:55:09", tone: "success" },
        ],
      },
      {
        label: "Compensation Payout",
        description:
          "Royalty Clearing distributes the shares. Each academy receives its proportional compensation directly, with the full calculation recorded on-chain.",
        icon: Coins,
        logFilename: "cerulea_compensation.log",
        logLines: [
          { text: "[SYS] Clearing training compensation for YTH_3390...", time: "13:55:20", tone: "default" },
          { text: "[CMD] clearShares(YTH_3390)", time: "13:55:21", tone: "primary" },
          { text: "[SYS] Routing proportional shares to 3 academies...", time: "13:55:21", tone: "default" },
          { text: "[OK] Compensation paid. Development dispute cleared.", time: "13:55:22", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes training compensation into modular contracts. Each layer registers development, computes shares, clears payouts, and exposes the record so every contributing academy is paid without dispute.",
    layers: [
      {
        title: "Civil Registry",
        subtitle: "The Development Record",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Development Record",
          description:
            "The foundational data layer. It anchors a player identity and appends each academy's development period as a distinct entry, so the full formative history is a verified shared record instead of a contested reconstruction.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CivilRegistry {\n  struct Period {\n    bytes32 academy;\n    uint16 seasons;\n    uint256 startedAt;\n  }\n\n  mapping(bytes32 => Period[]) public history;\n\n  function logPeriod(bytes32 player, bytes32 academy, uint16 seasons) external onlyRegistrar {\n    history[player].push(Period(academy, seasons, block.timestamp));\n  }\n}",
        simAction: "Simulate Period Logging",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading player identity YTH_3390...", tone: "default" },
          { text: "Recording academy ACD_27 development period...", tone: "default" },
          { text: "Appending distinct entry to history...", tone: "default" },
          { text: "Writing development record to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Development period logged on-chain.", tone: "success" },
        ],
      },
      {
        title: "Royalty Standard",
        subtitle: "The Share Calculator",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Share Calculator",
          description:
            "Computes each academy's compensation from the verified periods. On a professional transfer it reads the recorded development history and derives every contributing club's proportional share automatically, with no manual claim.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function computeCompensation(bytes32 player, uint256 fee) external returns (Share[] memory) {\n    Period[] memory ps = history[player];\n    uint256 totalSeasons = _sumSeasons(ps);\n    for (uint256 i = 0; i < ps.length; i++) {\n      shares[player].push(Share(ps[i].academy, (fee * ps[i].seasons) / totalSeasons));\n    }\n    return shares[player];\n}",
        simAction: "Simulate Share Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading 3 academy periods for YTH_3390...", tone: "default" },
          { text: "Summing total development seasons...", tone: "default" },
          { text: "Deriving proportional share per academy...", tone: "default" },
          { text: "Recording computed shares on-chain...", tone: "default" },
          { text: "[SUCCESS] Compensation shares calculated.", tone: "success" },
        ],
      },
      {
        title: "Royalty Clearing",
        subtitle: "The Payout Router",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Payout Router",
          description:
            "Distributes the calculated shares to each contributing academy in a single settlement. It routes every proportional amount directly to its club, so training compensation reaches all developers without a claims process.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function clearShares(bytes32 player) external {\n    Share[] memory s = shares[player];\n    for (uint256 i = 0; i < s.length; i++) {\n      payable(clubOf[s[i].academy]).transfer(s[i].amount);\n      emit CompensationPaid(player, s[i].academy, s[i].amount);\n    }\n}",
        simAction: "Simulate Compensation Clearing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading computed shares for YTH_3390...", tone: "default" },
          { text: "Routing share to originating academy ACD_11...", tone: "default" },
          { text: "Routing shares to 2 further academies...", tone: "default" },
          { text: "Recording settlement on-chain...", tone: "default" },
          { text: "[SUCCESS] Proportional compensation cleared.", tone: "success" },
        ],
      },
      {
        title: "Federation Verifier",
        subtitle: "The Oversight Window",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Oversight Window",
          description:
            "A read-only gateway that resolves a player to their development history and every cleared share. It lets a federation confirm distributions align with regulations without adjudicating a manual claim between clubs.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolveCompensation(bytes32 player) external view returns (Period[] memory, Share[] memory) {\n    return (history[player], shares[player]);\n}",
        simAction: "Simulate Oversight Review",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Federation requests record for YTH_3390...", tone: "default" },
          { text: "Assembling 3-academy development history...", tone: "default" },
          { text: "Attaching cleared compensation shares...", tone: "default" },
          { text: "Checking distribution against regulations...", tone: "default" },
          { text: "[SUCCESS] Compliant distribution verified.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Training compensation tracking is a horizontal fairness capability. Here is how different bodies put the shared development ledger to work.",
    sectors: [
      { icon: GraduationCap, title: "Youth Academies", description: "Record every development period on a shared ledger so an academy that shaped a player years earlier is paid automatically on a later professional transfer, ending the fight to prove a contribution from old paperwork.", assetTypes: ["Development Records", "Compensation Shares", "Academy Periods"] },
      { icon: Building2, title: "Professional Clubs", description: "Settle training compensation obligations from a verified history the moment a signing completes, so a buying club discharges its duties automatically instead of facing later claims from prior academies.", assetTypes: ["Transfer Obligations", "Payout Settlements", "Signing Records"] },
      { icon: Landmark, title: "Federations & Leagues", description: "Confirm that solidarity and training payments follow the rules from one ledger, replacing manual claim adjudication between clubs with a live view of every calculated distribution.", assetTypes: ["Compensation Registries", "Regulatory Checks", "Distribution Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a club academy management system or capturing a registrar's development entry, Cerulea routes both into one shared compensation record.",
    tracks: [
      {
        title: "Track A: Academy System Bridging",
        description:
          "For clubs on legacy academy management systems. Existing development records are translated into anchored registry periods through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Legacy Academy System", sublabel: "Club Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Record Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Compensation Registry Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Registrar Development Capture",
        description:
          "For federation registrars on portals. A credentialed app signs each development period from a registrar wallet and routes it directly to the shared ledger.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Registrar Portal / Wallet", sublabel: "Development Officers", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Record Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Development Record", icon: GraduationCap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared compensation network with a verified development registry, proportional share calculation, automatic clearing, and federation oversight from scratch requires specialised engineers and long multi-party integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Development & Clearing Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects multi-party registry integration benchmarks. Wiring each club's academy system, building proportional compensation and clearing logic, and shipping a federation oversight view for an average network takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your development and clearing rules into pre-audited WebAssembly binaries and provisions the shared compensation ledger and oversight layer instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const sportsFanEngagementItems: ExtraCaseItem[] = [
  {
    label: "Anti-doping sample chain of custody",
    href: "/solutions/use-case/anti-doping-sample-chain-of-custody",
    description: "Signed, tamper-evident custody from collection to lab.",
    icon: FlaskConical,
    category: "GOVERNMENT",
    tags: ["Anti-Doping", "Chain of Custody"],
    industry: INDUSTRY,
  },
  {
    label: "Athlete transfer and contract management across clubs and federations",
    href: "/solutions/use-case/athlete-transfer-and-contract-management-across-clubs-and-federations",
    description: "Neutral transfer terms with automatic clause settlement.",
    icon: Handshake,
    category: "ENTERPRISE",
    tags: ["Transfers", "Contracts"],
    industry: INDUSTRY,
  },
  {
    label: "Sports memorabilia authentication and provenance",
    href: "/solutions/use-case/sports-memorabilia-authentication-and-provenance",
    description: "NFC-tagged NFTs prove authenticity and ownership history.",
    icon: QrCode,
    category: "DAPPS",
    tags: ["Memorabilia", "Provenance"],
    industry: INDUSTRY,
  },
  {
    label: "Fan token issuance and governance rights for club decisions",
    href: "/solutions/use-case/fan-token-issuance-and-governance-rights-for-club-decisions",
    description: "Binding fan votes and a new engagement revenue stream.",
    icon: Vote,
    category: "DAPPS",
    tags: ["Fan Tokens", "Governance"],
    industry: INDUSTRY,
  },
  {
    label: "Stadium ticket resale marketplace with anti-scalping price caps",
    href: "/solutions/use-case/stadium-ticket-resale-marketplace-with-anti-scalping-price-caps",
    description: "Identity-bound tickets with enforced resale price caps.",
    icon: Ticket,
    category: "SME",
    tags: ["Ticketing", "Anti-Scalping"],
    industry: INDUSTRY,
  },
  {
    label: "Youth academy talent contract and transfer compensation tracking",
    href: "/solutions/use-case/youth-academy-talent-contract-and-transfer-compensation-tracking",
    description: "Automatic training compensation from verified development history.",
    icon: GraduationCap,
    category: "ENTERPRISE",
    tags: ["Youth Academy", "Compensation"],
    industry: INDUSTRY,
  },
]
