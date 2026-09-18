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

const INDUSTRY = "Financial Services & Banking"

export const financialServicesBankingCases: CaseEntry[] = [
  {
    slug: "fund-tokenization-and-fractional-ownership-for-retail-investors",
    icon: PieChart,
    eyebrow: "Fund Tokenization Engine",
    headline1: "Fractionalize the fund.",
    headline2: "Open it to everyone.",
    heroDescription:
      "Split institutional-grade funds into compliance-gated fractional tokens that retail investors can hold from a small ticket. Automated NAV, distributions, and a public secondary market replace manual fund administration and opaque monthly statements.",
    heroCta: "Deploy Fund Frameworks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manually administered, institution-only fund into a programmable, retail-accessible instrument.",
    mechanics: [
      { title: "Fractional Unit Tokens", description: "Replace high minimum tickets. The ERC-1155 Multi-Token module issues compliance-gated fractional units, so a retail investor can hold a slice of a fund that previously required an institutional minimum." },
      { title: "Automated NAV Engine", description: "End opaque valuations. The Fund Administration module computes NAV from the fund's underlying holdings on a fixed schedule and publishes it on-chain for every unit holder to read." },
      { title: "Programmatic Distributions", description: "Pay income without a back office. The Securities Lifecycle module calculates each holder's pro-rata share of dividends and interest and disburses it directly to their wallet." },
      { title: "Compliance Gating", description: "Keep every holder eligible. Transfers check investor accreditation and jurisdiction limits before settling, so the fund stays inside its regulatory perimeter automatically." },
      { title: "Secondary Market Layer", description: "Give units liquidity. A public secondary market lets holders trade fractional units between transfer windows instead of waiting for a redemption cycle." },
      { title: "Live Investor Reporting", description: "Replace the monthly statement. Every holder queries their real-time position, verified NAV, and distribution history directly from the ledger at any moment." },
    ],
    lifecycleTitle: "The Fund Lifecycle",
    lifecycleSubtitle:
      "Follow a single fractional holding from token issuance through a NAV update and an automated distribution.",
    lifecycleSteps: [
      {
        label: "Fund Onboarding",
        description:
          "The fund manager defines the fund, its unit supply, and its eligibility rules. The contract mints the fractional unit class and anchors the fund's terms.",
        icon: PieChart,
        logFilename: "cerulea_fund_engine.log",
        logLines: [
          { text: "[SYS] Initializing Fund Administration manifest...", time: "07:02:11", tone: "default" },
          { text: "[CMD] createFund { isin: \"INF204KA1B99\", units: 5000000, minTicket: 500 }", time: "07:02:11", tone: "primary" },
          { text: "[AUTH] Registering eligibility ruleset and jurisdictions...", time: "07:02:12", tone: "secondary" },
          { text: "[OK] Fund FND_2041 anchored at block 5120044.", time: "07:02:12", tone: "success" },
        ],
      },
      {
        label: "Retail Subscription",
        description:
          "A verified retail investor subscribes for a fractional holding. Compliance checks pass and the units settle directly to the investor's wallet.",
        icon: Wallet,
        logFilename: "cerulea_fund_engine.log",
        logLines: [
          { text: "[SYS] Subscription request from Investor_0x7c...", time: "10:41:38", tone: "default" },
          { text: "[CMD] subscribe(FND_2041, units: 120, ticket: 6000)", time: "10:41:39", tone: "primary" },
          { text: "[AUTH] Accreditation and jurisdiction checks passed.", time: "10:41:39", tone: "secondary" },
          { text: "[OK] 120 fractional units issued to holder.", time: "10:41:40", tone: "success" },
        ],
      },
      {
        label: "NAV Publication",
        description:
          "At the daily cutoff, the NAV engine values the underlying holdings and publishes the per-unit NAV that every holder can independently read.",
        icon: Activity,
        logFilename: "cerulea_fund_engine.log",
        logLines: [
          { text: "[SYS] Valuing 42 underlying holdings at cutoff...", time: "18:30:00", tone: "default" },
          { text: "[CMD] publishNAV(FND_2041, nav: 18.4425)", time: "18:30:01", tone: "primary" },
          { text: "[SYS] NAV digest sealed for audit trail.", time: "18:30:01", tone: "default" },
          { text: "[OK] Daily NAV anchored and visible to all holders.", time: "18:30:02", tone: "success" },
        ],
      },
      {
        label: "Distribution Payout",
        description:
          "The fund declares income. The lifecycle module splits it pro-rata across every unit holder and disburses to wallets in a single run.",
        icon: Coins,
        logFilename: "cerulea_fund_engine.log",
        logLines: [
          { text: "[SYS] Distribution declared: 0.35 per unit...", time: "09:15:22", tone: "default" },
          { text: "[CMD] distribute(FND_2041, perUnit: 0.35)", time: "09:15:23", tone: "primary" },
          { text: "[SYS] Computing pro-rata across 41,200 holders...", time: "09:15:24", tone: "default" },
          { text: "[OK] Payout settled to all holder wallets.", time: "09:15:26", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes fund tokenization into modular contracts. Each layer issues fractional units, values them, distributes income, and enforces eligibility without a manual fund administrator in the loop.",
    layers: [
      {
        title: "Unit Registry",
        subtitle: "The Fractional Ledger",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fractional Ledger",
          description:
            "The foundational data layer. It issues the fund's fractional unit class, tracks each holder's balance, and links every unit back to the fund's terms and unit economics.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract FundRegistry {\n  struct Fund {\n    address manager;\n    uint256 totalUnits;\n    uint256 minTicket;\n    uint256 navScaled;\n  }\n\n  mapping(bytes32 => Fund) public funds;\n  mapping(bytes32 => mapping(address => uint256)) public units;\n\n  function issue(bytes32 id, address to, uint256 amount) external onlyManager {\n    units[id][to] += amount;\n  }\n}",
        simAction: "Simulate Unit Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading fund terms for FND_2041...", tone: "default" },
          { text: "Validating retail ticket of 6000 against minimum...", tone: "default" },
          { text: "Minting 120 fractional units to holder...", tone: "default" },
          { text: "Writing balance to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Fractional holding issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "NAV Oracle",
        subtitle: "The Valuation Engine",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Valuation Engine",
          description:
            "Computes NAV from the fund's underlying holdings and verified market prices, then publishes a per-unit value on a fixed cadence so no holder has to trust an unverifiable statement.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract NavEngine {\n  function publishNav(bytes32 fundId) external onlyValuer returns (uint256) {\n    uint256 gross = holdings.marketValue(fundId);\n    uint256 nav = (gross - fees[fundId]) / supply[fundId];\n    navOf[fundId] = nav;\n    emit NavPublished(fundId, nav, block.timestamp);\n    return nav;\n  }\n}",
        simAction: "Simulate NAV Publication",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Pulling verified prices for 42 holdings...", tone: "default" },
          { text: "Summing gross portfolio value...", tone: "default" },
          { text: "Deducting accrued fees and dividing by supply...", tone: "default" },
          { text: "Sealing NAV digest for the audit trail...", tone: "default" },
          { text: "[SUCCESS] Per-unit NAV published on-chain.", tone: "success" },
        ],
      },
      {
        title: "Distribution Router",
        subtitle: "The Income Splitter",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Income Splitter",
          description:
            "Calculates each holder's pro-rata entitlement when income is declared and pushes payouts straight to wallets, replacing a manual distribution back office with deterministic on-chain math.",
          platformFunction: "Settlement & Distribution",
        },
        codeSnippet:
          "function distribute(bytes32 fundId, uint256 perUnit) external onlyManager {\n    uint256 supply = totalUnits[fundId];\n    require(treasury[fundId] >= perUnit * supply, \"Underfunded\");\n    emit DistributionDeclared(fundId, perUnit);\n    _streamToHolders(fundId, perUnit);\n}",
        simAction: "Simulate Distribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Declaring 0.35 per unit for FND_2041...", tone: "default" },
          { text: "Checking treasury covers full distribution...", tone: "default" },
          { text: "Computing entitlement for 41,200 holders...", tone: "default" },
          { text: "Streaming payouts to holder wallets...", tone: "default" },
          { text: "[SUCCESS] Distribution settled to all holders.", tone: "success" },
        ],
      },
      {
        title: "Compliance Gate",
        subtitle: "The Eligibility Guard",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Eligibility Guard",
          description:
            "Sits in front of every transfer. It verifies accreditation and jurisdiction limits before a unit moves, so the fund cannot drift outside its regulatory perimeter through a secondary trade.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function _beforeTransfer(bytes32 fundId, address from, address to, uint256 amt) internal view {\n    require(accredited[to], \"Holder not eligible\");\n    require(!blocked[jurisdiction[to]], \"Jurisdiction blocked\");\n    require(units[fundId][from] >= amt, \"Insufficient units\");\n}",
        simAction: "Simulate Compliance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Secondary transfer requested for 40 units...", tone: "default" },
          { text: "Verifying buyer accreditation credential...", tone: "default" },
          { text: "Checking buyer jurisdiction against limits...", tone: "default" },
          { text: "Confirming seller unit balance...", tone: "default" },
          { text: "[SUCCESS] Transfer cleared by eligibility guard.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Fractional fund tokenization is a horizontal capability. Here is how different actors put the tokenized fund to work.",
    sectors: [
      { icon: Landmark, title: "Asset Managers", description: "Open institutional strategies to a retail base without building a manual administration desk, cutting fund operating costs while distributing income and NAV programmatically.", assetTypes: ["Fractional Units", "NAV Records", "Distribution Runs"] },
      { icon: Wallet, title: "Wealth & Distribution Platforms", description: "Offer clients slices of previously inaccessible funds with a small ticket, backed by a live verified NAV instead of a lagging monthly statement.", assetTypes: ["Retail Holdings", "Subscription Orders", "Secondary Trades"] },
      { icon: ShieldCheck, title: "Fund Administrators & Auditors", description: "Read the fund's issuance, valuation, and distribution history directly from the ledger, replacing reconciliation of spreadsheets with a single verifiable record.", assetTypes: ["Audit Trails", "Eligibility Registries", "Payout Ledgers"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy fund accounting platform or serving retail investors from a mobile wallet, Cerulea routes both into one tokenized fund record.",
    tracks: [
      {
        title: "Track A: Fund Accounting Bridging",
        description:
          "For asset managers on legacy fund accounting systems. Holdings and price feeds are translated into signed on-chain NAV and distribution events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Fund Accounting System", sublabel: "Administrator Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "NAV Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Tokenized Fund Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Retail Wallet Subscription",
        description:
          "For retail investors on mobile. A wallet signs each subscription and secondary trade and routes it directly to the compliance-gated fund contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Investor Wallet", sublabel: "Retail Mobile App", icon: Fingerprint, accent: false },
          { label: "Compliance Gate", sublabel: "Eligibility Consensus", icon: ShieldCheck, accent: true },
          { label: "Cerulea Ledger", sublabel: "Fractional Unit Record", icon: PieChart, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a compliant fund tokenization platform with fractional units, an automated NAV engine, distributions, and a secondary market from scratch requires securities engineers and long compliance cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Fund & Compliance Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects regulated fund technology benchmarks. Building fractional unit accounting, an auditable NAV engine, a distribution back office, and a compliant secondary market for an average fund takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your fund and eligibility rules into pre-audited WebAssembly binaries and provisions the tokenized fund ledger and NAV layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "mutual-fund-nav-calculation-transparency-for-unit-holders",
    icon: Activity,
    eyebrow: "NAV Transparency Layer",
    headline1: "Prove the NAV.",
    headline2: "Every single day.",
    heroDescription:
      "Anchor the portfolio valuation inputs and the resulting daily NAV as a verifiable record every trading day. Unit holders and auditors independently confirm the published NAV was calculated correctly from the fund's real holdings and market prices.",
    heroCta: "Deploy NAV Transparency",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an unverifiable daily number into a reproducible, independently checkable calculation.",
    mechanics: [
      { title: "Priced Holdings Feed", description: "Anchor the inputs. The Oracle Feeds module records each underlying holding and its market price for the valuation cutoff, so the NAV rests on verified data rather than an internal spreadsheet." },
      { title: "Deterministic NAV Formula", description: "Publish the method, not just the answer. The calculation logic runs on-chain, so anyone can reproduce the per-unit NAV from the same priced holdings." },
      { title: "Daily Valuation Anchor", description: "Seal each day. The Audit Logs module writes the priced holdings, fee deductions, and final NAV as an immutable daily record that cannot be quietly restated later." },
      { title: "Independent Verification", description: "Let holders check the math. A unit holder or auditor recomputes the NAV from the anchored inputs and confirms it matches the number the fund published." },
      { title: "Historical NAV Index", description: "Expose the series. The Subgraph Indexer module makes every past daily NAV and its inputs queryable, so a holder can audit the full history in one query." },
      { title: "Discrepancy Alerting", description: "Catch restatements. If a published NAV diverges from the reproducible calculation, the record flags it immediately for the fund and its auditor." },
    ],
    lifecycleTitle: "The Valuation Lifecycle",
    lifecycleSubtitle:
      "Follow a single trading day from price ingestion to a NAV a unit holder can independently verify.",
    lifecycleSteps: [
      {
        label: "Price Ingestion",
        description:
          "At the valuation cutoff, verified market prices for every holding stream into the contract from the oracle feed and are anchored for the day.",
        icon: Radio,
        logFilename: "cerulea_nav_engine.log",
        logLines: [
          { text: "[SYS] Polling market price oracle at cutoff...", time: "18:00:00", tone: "default" },
          { text: "[CMD] ingestPrices(fund: \"MF_7781\", holdings: 58)", time: "18:00:01", tone: "primary" },
          { text: "[AUTH] Verifying oracle signatures on price set...", time: "18:00:01", tone: "secondary" },
          { text: "[OK] 58 priced holdings anchored for the day.", time: "18:00:02", tone: "success" },
        ],
      },
      {
        label: "NAV Calculation",
        description:
          "The deterministic formula sums the priced holdings, deducts accrued fees, and divides by units outstanding to produce the per-unit NAV.",
        icon: Activity,
        logFilename: "cerulea_nav_engine.log",
        logLines: [
          { text: "[SYS] Running NAV formula for MF_7781...", time: "18:00:03", tone: "default" },
          { text: "[CMD] computeNav(gross, fees, unitsOutstanding)", time: "18:00:03", tone: "primary" },
          { text: "[SYS] Gross 84.2Cr, fees 0.19Cr, units 42.1M.", time: "18:00:03", tone: "default" },
          { text: "[OK] NAV computed: 19.9430 per unit.", time: "18:00:04", tone: "success" },
        ],
      },
      {
        label: "Daily Anchoring",
        description:
          "The inputs and result are sealed as an immutable daily record so the day's NAV cannot be silently restated after publication.",
        icon: ScrollText,
        logFilename: "cerulea_nav_engine.log",
        logLines: [
          { text: "[SYS] Sealing valuation record for 2026-04-14...", time: "18:00:05", tone: "default" },
          { text: "[CMD] anchorNav(MF_7781, nav: 19.9430)", time: "18:00:05", tone: "primary" },
          { text: "[AUTH] Hashing inputs and result (SHA-256)...", time: "18:00:06", tone: "secondary" },
          { text: "[OK] Daily NAV record anchored, tamper-evident.", time: "18:00:06", tone: "success" },
        ],
      },
      {
        label: "Holder Verification",
        description:
          "A unit holder or auditor pulls the anchored inputs, recomputes the NAV, and confirms it matches the published figure.",
        icon: Search,
        logFilename: "cerulea_nav_engine.log",
        logLines: [
          { text: "[SYS] Verification request from unit holder...", time: "20:12:44", tone: "default" },
          { text: "[CMD] recomputeNav(MF_7781, date: \"2026-04-14\")", time: "20:12:44", tone: "primary" },
          { text: "[SYS] Reproducing calculation from anchored inputs...", time: "20:12:45", tone: "default" },
          { text: "[OK] Recomputed NAV matches published value.", time: "20:12:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes NAV transparency into modular contracts. Each layer ingests prices, calculates, seals the day, and exposes the series so no unit holder has to trust an unverifiable number.",
    layers: [
      {
        title: "Price Registry",
        subtitle: "The Input Anchor",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Input Anchor",
          description:
            "The foundational data layer. It records each underlying holding and its verified market price at the valuation cutoff, fixing the exact inputs the day's NAV must be reproducible from.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PriceRegistry {\n  struct Priced {\n    bytes32 instrument;\n    uint256 price;\n    uint256 units;\n  }\n\n  mapping(bytes32 => Priced[]) public dayHoldings;\n\n  function ingest(bytes32 fundDay, Priced calldata p) external onlyOracle {\n    dayHoldings[fundDay].push(p);\n  }\n}",
        simAction: "Simulate Price Ingestion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading oracle price set for 58 holdings...", tone: "default" },
          { text: "Verifying oracle signature on each price...", tone: "default" },
          { text: "Anchoring priced holdings for the day...", tone: "default" },
          { text: "Writing input set to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Valuation inputs anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "NAV Calculator",
        subtitle: "The Reproducible Formula",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reproducible Formula",
          description:
            "Runs the NAV math on-chain so the method itself is public. Anyone can rerun the identical calculation over the anchored inputs and arrive at the same per-unit value.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function computeNav(bytes32 fundDay) public view returns (uint256) {\n    Priced[] memory h = dayHoldings[fundDay];\n    uint256 gross;\n    for (uint i; i < h.length; i++) gross += h[i].price * h[i].units;\n    return (gross - feesOf[fundDay]) / unitsOut[fundDay];\n}",
        simAction: "Simulate NAV Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading 58 anchored priced holdings...", tone: "default" },
          { text: "Summing gross portfolio value...", tone: "default" },
          { text: "Deducting accrued fees for the day...", tone: "default" },
          { text: "Dividing by units outstanding...", tone: "default" },
          { text: "[SUCCESS] Per-unit NAV computed deterministically.", tone: "success" },
        ],
      },
      {
        title: "Daily Seal",
        subtitle: "The Restatement Guard",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Restatement Guard",
          description:
            "Seals each day's inputs and result as an immutable record. A later attempt to quietly change a past NAV breaks the anchored hash and is immediately detectable.",
          platformFunction: "Audit & Provenance",
        },
        codeSnippet:
          "function anchorNav(bytes32 fundDay, uint256 nav) external onlyValuer {\n    require(sealedAt[fundDay] == 0, \"Day already sealed\");\n    navOf[fundDay] = nav;\n    sealedAt[fundDay] = block.timestamp;\n    emit NavSealed(fundDay, nav, keccak256(abi.encode(dayHoldings[fundDay])));\n}",
        simAction: "Simulate Daily Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing valuation record for the day...", tone: "default" },
          { text: "Hashing anchored inputs and final NAV...", tone: "default" },
          { text: "Checking the day is not already sealed...", tone: "default" },
          { text: "Writing immutable daily seal...", tone: "default" },
          { text: "[SUCCESS] Daily NAV sealed, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "History Indexer",
        subtitle: "The Verification Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verification Window",
          description:
            "A read-only gateway that exposes every past NAV and its inputs. It lets any holder or auditor query the full history and reproduce any day's calculation on demand.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function navSeries(bytes32 fund, uint256 from, uint256 to) external view returns (uint256[] memory) {\n    return indexer.range(fund, from, to);\n}",
        simAction: "Simulate History Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Holder requesting 90-day NAV history...", tone: "default" },
          { text: "Assembling sealed daily records...", tone: "default" },
          { text: "Attaching anchored inputs per day...", tone: "default" },
          { text: "Returning verifiable NAV series...", tone: "default" },
          { text: "[SUCCESS] Full NAV history returned for audit.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable NAV is a horizontal capability. Here is how different actors rely on a reproducible daily valuation.",
    sectors: [
      { icon: PieChart, title: "Asset Management Companies", description: "Publish a NAV that unit holders can independently reproduce, turning a point of suspicion into a trust signal without exposing proprietary trades intraday.", assetTypes: ["Daily NAV Records", "Priced Holdings", "Valuation Seals"] },
      { icon: ShieldCheck, title: "Auditors & Trustees", description: "Verify a fund's NAV history directly from anchored inputs instead of requesting spreadsheets, compressing valuation audits into a live query.", assetTypes: ["Audit Trails", "Reproducible Calculations", "Fee Records"] },
      { icon: Wallet, title: "Distribution Platforms", description: "Show investors a NAV backed by a verifiable record, differentiating the funds they distribute on transparency rather than marketing claims.", assetTypes: ["Investor NAV Views", "History Indices", "Discrepancy Flags"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy fund accounting engine or feeding prices from a market data vendor, Cerulea routes both into one verifiable valuation record.",
    tracks: [
      {
        title: "Track A: Fund Accounting Bridging",
        description:
          "For asset managers on legacy accounting platforms. Holdings and fee data are translated into signed on-chain valuation records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Fund Accounting System", sublabel: "Administrator Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Input Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Valuation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Market Data Feed",
        description:
          "For price feeds from market data vendors. Signed price sets route through decentralized oracles directly into the daily valuation contract.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Market Data Vendor", sublabel: "Signed Price Feed", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Price Attestation", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Anchored NAV Record", icon: Activity, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a verifiable NAV system with anchored price inputs, an on-chain calculation, immutable daily seals, and a public history index from scratch requires fund technology engineers and long audit integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Valuation & Audit Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects fund accounting and audit integration benchmarks. Wiring priced holdings, an auditable NAV calculation, tamper-evident daily seals, and a holder verification portal for an average fund takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your valuation and audit rules into pre-audited WebAssembly binaries and provisions the anchored NAV ledger and history index instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "pension-fund-contribution-tracking-and-benefit-projection",
    icon: Wallet,
    eyebrow: "Pension Ledger Engine",
    headline1: "Track every contribution.",
    headline2: "Across every employer.",
    heroDescription:
      "Maintain a portable, verified record of an employee's pension contributions from every employer they have worked for, with a running benefit projection. A continuous view of pension growth replaces the manual, error-prone consolidation employees face when they change jobs.",
    heroCta: "Deploy Pension Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a scattered, employer-by-employer history into one portable, continuously projected record.",
    mechanics: [
      { title: "Portable Contribution Ledger", description: "Follow the employee, not the employer. Every contribution is written to a record keyed to the employee's identity, so a job change never resets or loses the history." },
      { title: "Employer Attestation", description: "Anchor each deposit at source. An employer signs each contribution it remits, so every entry carries a verifiable origin rather than a self-reported balance." },
      { title: "Verified Identity Link", description: "Bind the record to a person. The Civil Registry module ties the contribution ledger to a verified national identity, so contributions from different employers consolidate to the right individual." },
      { title: "Running Benefit Projection", description: "Show the destination. The ledger continuously projects the accumulated corpus and expected benefit from contributions to date and assumed growth." },
      { title: "Immutable Contribution Trail", description: "Prevent silent gaps. The Audit Logs module seals each contribution as an immutable entry, so a missed or misposted deposit is visible instead of buried." },
      { title: "Consolidated Statement", description: "End manual reconciliation. The Subgraph Indexer module assembles contributions across all employers into a single statement the employee can pull at any time." },
    ],
    lifecycleTitle: "The Pension Lifecycle",
    lifecycleSubtitle:
      "Follow an employee's contributions across two employers and a live benefit projection that never resets.",
    lifecycleSteps: [
      {
        label: "Identity Enrollment",
        description:
          "The employee is enrolled against a verified national identity, creating the portable ledger every future contribution will attach to.",
        icon: IdCard,
        logFilename: "cerulea_pension_engine.log",
        logLines: [
          { text: "[SYS] Enrolling member against Civil Registry...", time: "09:04:12", tone: "default" },
          { text: "[CMD] enroll { uid: \"XXXX-4471\", scheme: \"NPS_TIER1\" }", time: "09:04:12", tone: "primary" },
          { text: "[AUTH] Verifying identity credential...", time: "09:04:13", tone: "secondary" },
          { text: "[OK] Portable ledger PEN_9920 created.", time: "09:04:13", tone: "success" },
        ],
      },
      {
        label: "Employer Contribution",
        description:
          "The first employer remits a monthly contribution and signs it. The deposit is anchored to the member's ledger with its origin.",
        icon: Building2,
        logFilename: "cerulea_pension_engine.log",
        logLines: [
          { text: "[SYS] Contribution received from Employer_A...", time: "10:20:41", tone: "default" },
          { text: "[CMD] contribute(PEN_9920, amount: 9000, month: \"2026-03\")", time: "10:20:41", tone: "primary" },
          { text: "[AUTH] Verifying employer signature on remittance...", time: "10:20:42", tone: "secondary" },
          { text: "[OK] Contribution anchored to member ledger.", time: "10:20:42", tone: "success" },
        ],
      },
      {
        label: "Employer Change",
        description:
          "The employee moves to a new employer. Contributions from Employer B attach to the same ledger with no consolidation step.",
        icon: Workflow,
        logFilename: "cerulea_pension_engine.log",
        logLines: [
          { text: "[SYS] New employer linked to PEN_9920...", time: "11:35:09", tone: "default" },
          { text: "[CMD] contribute(PEN_9920, employer: \"B\", amount: 11000)", time: "11:35:10", tone: "primary" },
          { text: "[SYS] History preserved across employer switch.", time: "11:35:10", tone: "default" },
          { text: "[OK] Contribution appended without reset.", time: "11:35:11", tone: "success" },
        ],
      },
      {
        label: "Benefit Projection",
        description:
          "The member requests a projection. The engine sums all contributions and projects the corpus and expected benefit at retirement.",
        icon: Activity,
        logFilename: "cerulea_pension_engine.log",
        logLines: [
          { text: "[SYS] Projection request for PEN_9920...", time: "18:50:30", tone: "default" },
          { text: "[CMD] project(PEN_9920, growth: 0.09, retireAge: 60)", time: "18:50:30", tone: "primary" },
          { text: "[SYS] Aggregating contributions from 2 employers...", time: "18:50:31", tone: "default" },
          { text: "[OK] Projected corpus returned to member.", time: "18:50:31", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes pension tracking into modular contracts. Each layer enrolls a member, records signed contributions, preserves history across employers, and projects the benefit continuously.",
    layers: [
      {
        title: "Member Registry",
        subtitle: "The Portable Identity",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Portable Identity",
          description:
            "The foundational data layer. It binds a pension ledger to a verified national identity so every contribution, from any employer, consolidates to the correct individual for life.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract MemberRegistry {\n  struct Member {\n    bytes32 uid;\n    string scheme;\n    uint256 enrolledAt;\n  }\n\n  mapping(bytes32 => Member) public members;\n\n  function enroll(bytes32 ledgerId, bytes32 uid, string calldata scheme) external onlyAdmin {\n    members[ledgerId] = Member(uid, scheme, block.timestamp);\n  }\n}",
        simAction: "Simulate Member Enrollment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading verified identity credential...", tone: "default" },
          { text: "Binding ledger to national identity...", tone: "default" },
          { text: "Recording scheme and enrollment time...", tone: "default" },
          { text: "Writing member record to storage...", tone: "default" },
          { text: "[SUCCESS] Portable pension ledger created.", tone: "success" },
        ],
      },
      {
        title: "Contribution Log",
        subtitle: "The Signed Deposit",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Signed Deposit",
          description:
            "Records each employer contribution with the employer's signature, turning every deposit into verifiable origin data instead of a self-reported balance that can silently drift.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function contribute(bytes32 ledgerId, address employer, uint256 amount, bytes32 period) external onlyRemitter {\n    require(verifyEmployer(employer), \"Unknown employer\");\n    entries[ledgerId].push(Entry(employer, amount, period, block.timestamp));\n    total[ledgerId] += amount;\n    emit Contributed(ledgerId, employer, amount, period);\n}",
        simAction: "Simulate Contribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Employer A remitting monthly contribution...", tone: "default" },
          { text: "Verifying employer signature on deposit...", tone: "default" },
          { text: "Appending entry to member ledger...", tone: "default" },
          { text: "Updating accumulated total...", tone: "default" },
          { text: "[SUCCESS] Contribution anchored with origin.", tone: "success" },
        ],
      },
      {
        title: "Continuity Guard",
        subtitle: "The History Keeper",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The History Keeper",
          description:
            "Ensures a job change never resets the record. New employers append to the existing ledger, so the full contribution history stays intact across a career.",
          platformFunction: "Continuity Control",
        },
        codeSnippet:
          "function linkEmployer(bytes32 ledgerId, address employer) external onlyAdmin {\n    require(members[ledgerId].uid != 0, \"No member\");\n    authorized[ledgerId][employer] = true;\n    emit EmployerLinked(ledgerId, employer);\n}",
        simAction: "Simulate Employer Link",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Employee joins a new employer...", tone: "default" },
          { text: "Authorizing Employer B on existing ledger...", tone: "default" },
          { text: "Confirming prior history is preserved...", tone: "default" },
          { text: "Appending without consolidation step...", tone: "default" },
          { text: "[SUCCESS] History carried across employer change.", tone: "success" },
        ],
      },
      {
        title: "Projection Engine",
        subtitle: "The Benefit Forecaster",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Benefit Forecaster",
          description:
            "Sums contributions across all employers and projects the corpus and expected benefit from assumed growth, giving the member a continuous forecast rather than a static balance.",
          platformFunction: "Projection & Reporting",
        },
        codeSnippet:
          "function project(bytes32 ledgerId, uint256 growthBps, uint256 years) external view returns (uint256) {\n    uint256 corpus = total[ledgerId];\n    for (uint i; i < years; i++) corpus = corpus * (10000 + growthBps) / 10000;\n    return corpus;\n}",
        simAction: "Simulate Benefit Projection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Aggregating contributions from all employers...", tone: "default" },
          { text: "Applying assumed annual growth...", tone: "default" },
          { text: "Compounding to retirement age...", tone: "default" },
          { text: "Formatting projected corpus and benefit...", tone: "default" },
          { text: "[SUCCESS] Benefit projection returned to member.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Portable pension tracking is a horizontal capability. Here is how different actors use a continuous contribution record.",
    sectors: [
      { icon: Landmark, title: "Pension Fund Managers", description: "Maintain one authoritative record per member across every employer, cutting reconciliation effort and giving members an accurate projection instead of a fragmented history.", assetTypes: ["Member Ledgers", "Contribution Trails", "Benefit Projections"] },
      { icon: Building2, title: "Employers & Payroll", description: "Remit signed contributions that attach directly to the employee's portable record, removing the paperwork that surrounds a departing or joining employee.", assetTypes: ["Remittance Records", "Employer Attestations", "Payroll Feeds"] },
      { icon: Users, title: "Regulators & Members", description: "Members pull a consolidated statement at any time and regulators audit contribution continuity directly, replacing manual portability transfers with a live record.", assetTypes: ["Consolidated Statements", "Audit Trails", "Portability Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging employer payroll systems or serving members from a mobile app, Cerulea routes both into one portable pension record.",
    tracks: [
      {
        title: "Track A: Payroll System Bridging",
        description:
          "For employers on legacy payroll platforms. Contribution remittances are translated into signed on-chain ledger entries through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Payroll System", sublabel: "Employer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Remittance Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Pension Contribution Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Member Mobile Access",
        description:
          "For members on mobile. A member app authenticates against the verified identity and reads the consolidated statement and projection directly.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Member App", sublabel: "Employee Device", icon: Fingerprint, accent: false },
          { label: "Identity Verifier", sublabel: "Registry Consensus", icon: IdCard, accent: true },
          { label: "Cerulea Ledger", sublabel: "Portable Pension Record", icon: Wallet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a portable pension ledger with employer attestation, identity binding, continuity across job changes, and a live projection from scratch requires pension technology engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Contribution & Projection Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects pension administration integration benchmarks. Wiring employer payroll feeds, identity binding, contribution continuity, and a projection engine for an average scheme takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your contribution and projection rules into pre-audited WebAssembly binaries and provisions the portable pension ledger and statement index instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "esg-fund-compliance-verification-against-stated-investment-criteria",
    icon: Leaf,
    eyebrow: "ESG Compliance Engine",
    headline1: "Prove the mandate.",
    headline2: "End the greenwashing.",
    heroDescription:
      "Continuously check an ESG fund's actual holdings against verified ESG data sources and the fund's stated criteria. Any holding that no longer complies is flagged so the manager can act before a regulator or investor does.",
    heroCta: "Deploy ESG Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a marketing claim of ESG compliance into a continuously enforced, auditable rule set.",
    mechanics: [
      { title: "Encoded ESG Criteria", description: "Make the mandate executable. The fund's stated environmental, social, and governance rules are encoded as on-chain criteria against which every holding is measured." },
      { title: "Verified ESG Feeds", description: "Anchor the evidence. The Oracle Feeds module streams verified ESG ratings and exclusion data, so a compliance check rests on trusted sources rather than a manager's assertion." },
      { title: "Continuous Screening", description: "Never wait for a quarterly review. Each holding is screened against the criteria continuously, so a newly non-compliant position surfaces the moment its data changes." },
      { title: "Breach Attestation", description: "Record every violation. The Compliance Attestations module writes a signed attestation whenever a holding breaches criteria, creating an evidentiary trail for regulators and investors." },
      { title: "Immutable Compliance Log", description: "Prevent quiet cleanup. The Audit Logs module seals each screening result, so a fund cannot retroactively hide a period of non-compliance." },
      { title: "Investor Transparency View", description: "Expose the record. Investors query the fund's live compliance status and history, replacing a glossy ESG report with verifiable evidence." },
    ],
    lifecycleTitle: "The Compliance Lifecycle",
    lifecycleSubtitle:
      "Follow a single holding from criteria encoding through a continuous screen to a flagged breach.",
    lifecycleSteps: [
      {
        label: "Criteria Encoding",
        description:
          "The fund's stated ESG mandate is encoded as machine-checkable criteria and anchored as the standard every holding must meet.",
        icon: ScrollText,
        logFilename: "cerulea_esg_engine.log",
        logLines: [
          { text: "[SYS] Encoding ESG mandate for fund GRN_311...", time: "08:10:20", tone: "default" },
          { text: "[CMD] setCriteria { exclude: [\"THERMAL_COAL\"], minScore: 60 }", time: "08:10:20", tone: "primary" },
          { text: "[AUTH] Anchoring criteria hash for the fund...", time: "08:10:21", tone: "secondary" },
          { text: "[OK] ESG criteria anchored at block 6002114.", time: "08:10:21", tone: "success" },
        ],
      },
      {
        label: "Data Ingestion",
        description:
          "Verified ESG ratings and exclusion data for each holding stream in from the oracle feed and are bound to the position.",
        icon: Radio,
        logFilename: "cerulea_esg_engine.log",
        logLines: [
          { text: "[SYS] Polling ESG data oracle for 30 holdings...", time: "08:15:03", tone: "default" },
          { text: "[CMD] ingestEsg(fund: \"GRN_311\", holdings: 30)", time: "08:15:03", tone: "primary" },
          { text: "[AUTH] Verifying provider signatures on ratings...", time: "08:15:04", tone: "secondary" },
          { text: "[OK] ESG data bound to all holdings.", time: "08:15:04", tone: "success" },
        ],
      },
      {
        label: "Continuous Screen",
        description:
          "Each holding is screened against the encoded criteria. Compliant positions pass silently while a breach is isolated.",
        icon: Search,
        logFilename: "cerulea_esg_engine.log",
        logLines: [
          { text: "[SYS] Screening 30 holdings against criteria...", time: "12:40:55", tone: "default" },
          { text: "[CMD] screen(GRN_311)", time: "12:40:55", tone: "primary" },
          { text: "[SYS] Holding HOLD_18 score dropped below 60.", time: "12:40:56", tone: "default" },
          { text: "[OK] 29 compliant, 1 breach isolated.", time: "12:40:56", tone: "success" },
        ],
      },
      {
        label: "Breach Flagging",
        description:
          "The non-compliant holding is attested and flagged to the fund manager and exposed in the investor view.",
        icon: Shield,
        logFilename: "cerulea_esg_engine.log",
        logLines: [
          { text: "[SYS] Raising breach attestation for HOLD_18...", time: "12:41:02", tone: "default" },
          { text: "[CMD] attestBreach(GRN_311, holding: \"HOLD_18\")", time: "12:41:02", tone: "primary" },
          { text: "[AUTH] Signing attestation and sealing to log...", time: "12:41:03", tone: "secondary" },
          { text: "[OK] Breach flagged to manager and investors.", time: "12:41:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes ESG verification into modular contracts. Each layer encodes criteria, ingests verified data, screens continuously, and exposes compliance without relying on the fund's own report.",
    layers: [
      {
        title: "Criteria Registry",
        subtitle: "The Encoded Mandate",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Encoded Mandate",
          description:
            "The foundational data layer. It stores the fund's stated ESG criteria as machine-checkable rules and anchors their hash so the standard being enforced is itself verifiable.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract EsgCriteria {\n  struct Rule {\n    bytes32[] exclusions;\n    uint256 minScore;\n  }\n\n  mapping(bytes32 => Rule) public criteria;\n\n  function setCriteria(bytes32 fund, bytes32[] calldata ex, uint256 minScore) external onlyManager {\n    criteria[fund] = Rule(ex, minScore);\n  }\n}",
        simAction: "Simulate Criteria Encoding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading fund's stated ESG mandate...", tone: "default" },
          { text: "Encoding exclusions and minimum score...", tone: "default" },
          { text: "Hashing criteria for verifiability...", tone: "default" },
          { text: "Writing criteria to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] ESG criteria anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "ESG Oracle",
        subtitle: "The Evidence Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Feed",
          description:
            "Connects to verified ESG rating and exclusion providers so screening rests on trusted external evidence, not the fund's own characterization of its holdings.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract EsgOracle {\n  function ingest(bytes32 holding, uint256 score, bytes calldata sig) external {\n    require(verifyProvider(sig), \"Untrusted provider\");\n    esgScore[holding] = score;\n    emit EsgUpdated(holding, score);\n  }\n}",
        simAction: "Simulate Data Ingestion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Querying ESG rating provider feed...", tone: "default" },
          { text: "Verifying provider signature on ratings...", tone: "default" },
          { text: "Binding scores to 30 holdings...", tone: "default" },
          { text: "Recording exclusion flags...", tone: "default" },
          { text: "[SUCCESS] Verified ESG data ingested.", tone: "success" },
        ],
      },
      {
        title: "Screening Engine",
        subtitle: "The Continuous Check",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Continuous Check",
          description:
            "Measures every holding against the encoded criteria whenever its data changes, isolating a non-compliant position immediately rather than at the next periodic review.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function screen(bytes32 fund, bytes32 holding) public view returns (bool) {\n    Rule memory r = criteria[fund];\n    if (esgScore[holding] < r.minScore) return false;\n    for (uint i; i < r.exclusions.length; i++)\n      if (sector[holding] == r.exclusions[i]) return false;\n    return true;\n}",
        simAction: "Simulate Continuous Screen",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading criteria for fund GRN_311...", tone: "default" },
          { text: "Measuring each holding against thresholds...", tone: "default" },
          { text: "Checking exclusion list membership...", tone: "default" },
          { text: "Isolating a below-threshold holding...", tone: "default" },
          { text: "[SUCCESS] Screen complete, breach isolated.", tone: "success" },
        ],
      },
      {
        title: "Attestation Log",
        subtitle: "The Evidence Trail",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Trail",
          description:
            "Writes a signed attestation for every breach and seals each screening result, so a fund cannot retroactively hide a period of non-compliance from investors or regulators.",
          platformFunction: "Audit & Provenance",
        },
        codeSnippet:
          "function attestBreach(bytes32 fund, bytes32 holding) external onlyScreener {\n    breaches[fund].push(Breach(holding, block.timestamp));\n    emit BreachAttested(fund, holding, block.timestamp);\n}",
        simAction: "Simulate Breach Attestation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing attestation for HOLD_18...", tone: "default" },
          { text: "Signing breach record...", tone: "default" },
          { text: "Sealing result to immutable log...", tone: "default" },
          { text: "Publishing to investor transparency view...", tone: "default" },
          { text: "[SUCCESS] Breach attested and flagged.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Continuous ESG verification is a horizontal capability. Here is how different actors rely on an enforced mandate.",
    sectors: [
      { icon: Leaf, title: "ESG Fund Managers", description: "Enforce the stated mandate continuously and catch a drifting holding early, turning ESG compliance from a reputational risk into a demonstrable, verifiable claim.", assetTypes: ["Encoded Criteria", "Screening Results", "Breach Attestations"] },
      { icon: Landmark, title: "Regulators & Auditors", description: "Read a fund's live compliance status and full history directly, replacing after-the-fact greenwashing investigations with continuous verifiable evidence.", assetTypes: ["Compliance Logs", "Audit Trails", "Exclusion Registries"] },
      { icon: Users, title: "Investors & Advisors", description: "Verify that a fund's holdings genuinely match its ESG label before allocating, using anchored evidence instead of trusting the marketing report.", assetTypes: ["Transparency Views", "Live Status", "Holding Screens"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a portfolio management system or feeding ratings from an ESG data provider, Cerulea routes both into one enforced compliance record.",
    tracks: [
      {
        title: "Track A: Portfolio System Bridging",
        description:
          "For managers on legacy portfolio systems. Holdings data is translated into signed on-chain screening events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Portfolio System", sublabel: "Manager Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Holdings Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "ESG Compliance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: ESG Data Feed",
        description:
          "For ratings from ESG data providers. Signed rating sets route through decentralized oracles directly into the screening contract.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "ESG Data Provider", sublabel: "Signed Ratings Feed", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Rating Attestation", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Compliance Record", icon: Leaf, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an ESG verification system with encoded criteria, verified data feeds, continuous screening, and an attested compliance trail from scratch requires compliance engineers and long data integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required ESG & Screening Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects ESG technology integration benchmarks. Encoding a fund mandate, wiring verified rating feeds, building continuous screening, and shipping an investor transparency view for an average fund takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your ESG and screening rules into pre-audited WebAssembly binaries and provisions the compliance ledger and attestation trail instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "government-bond-issuance-and-settlement-on-dlt",
    icon: Landmark,
    eyebrow: "Sovereign Settlement Layer",
    headline1: "Settle sovereign debt.",
    headline2: "Atomically, on issuance.",
    heroDescription:
      "Run a private government securities settlement chain with atomic delivery-versus-payment, eliminating the T+2 delay and counterparty risk from sovereign bond markets. Bonds settle on the auction date while the central bank gains real-time visibility into primary market activity.",
    heroCta: "Deploy Sovereign Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Collapse a multi-intermediary, T+2 settlement chain into a single atomic transaction.",
    mechanics: [
      { title: "Atomic DvP Settlement", description: "Remove settlement fails. The RTGS Settlement module bundles bond delivery and cash payment into one atomic transaction, so a bond and its payment move together or not at all." },
      { title: "On-Chain Auction", description: "Issue directly to the market. The Securities Lifecycle module runs the primary auction and allots bonds to winning bidders on the auction date itself." },
      { title: "Integrated Cash Leg", description: "Settle in central bank money. The Core Banking Accounts module holds the cash leg on the same chain, so payment and delivery never rely on a separate reconciliation." },
      { title: "Counterparty Risk Elimination", description: "End the T+2 exposure. Because settlement is atomic and immediate, no counterparty carries an unsettled position between trade and settlement." },
      { title: "Real-Time Central Bank View", description: "Watch the primary market live. The central bank reads issuance and settlement as it happens rather than reconstructing it from post-trade reports." },
      { title: "Immutable Issuance Record", description: "Anchor the sovereign debt stock. Every issuance and settlement is written to the ledger, giving an authoritative real-time record of outstanding government debt." },
    ],
    lifecycleTitle: "The Settlement Lifecycle",
    lifecycleSubtitle:
      "Follow a single bond from auction allotment to atomic delivery-versus-payment settlement.",
    lifecycleSteps: [
      {
        label: "Bond Issuance",
        description:
          "The treasury defines a new bond series and opens the primary auction. The contract anchors the terms, coupon, and size.",
        icon: Landmark,
        logFilename: "cerulea_gsec_engine.log",
        logLines: [
          { text: "[SYS] Opening primary auction for series GS2036...", time: "10:00:00", tone: "default" },
          { text: "[CMD] issue { series: \"GS2036\", size: 200000000000, coupon: 715 }", time: "10:00:01", tone: "primary" },
          { text: "[AUTH] Anchoring auction terms to settlement chain...", time: "10:00:01", tone: "secondary" },
          { text: "[OK] Series GS2036 open at block 7211900.", time: "10:00:02", tone: "success" },
        ],
      },
      {
        label: "Bid Allotment",
        description:
          "Primary dealers submit bids. The lifecycle module allots bonds to winning bidders and locks each allotment for settlement.",
        icon: Scale,
        logFilename: "cerulea_gsec_engine.log",
        logLines: [
          { text: "[SYS] Closing bid window for GS2036...", time: "11:30:00", tone: "default" },
          { text: "[CMD] allot(GS2036, cutoffYield: 718)", time: "11:30:01", tone: "primary" },
          { text: "[SYS] 14 dealers allotted at or below cutoff.", time: "11:30:01", tone: "default" },
          { text: "[OK] Allotments locked for settlement.", time: "11:30:02", tone: "success" },
        ],
      },
      {
        label: "Atomic Settlement",
        description:
          "On the auction date the bond delivery and cash payment settle in a single atomic transaction with no T+2 gap.",
        icon: Zap,
        logFilename: "cerulea_gsec_engine.log",
        logLines: [
          { text: "[SYS] Executing DvP for 14 allotments...", time: "11:45:10", tone: "default" },
          { text: "[CMD] settleDvP(GS2036, atomic: true)", time: "11:45:10", tone: "primary" },
          { text: "[SYS] Bond leg and cash leg bound in one block.", time: "11:45:11", tone: "default" },
          { text: "[OK] Atomic settlement complete. Fails impossible.", time: "11:45:11", tone: "success" },
        ],
      },
      {
        label: "Central Bank Visibility",
        description:
          "The central bank reads the settled positions and outstanding debt stock in real time from the ledger.",
        icon: PieChart,
        logFilename: "cerulea_gsec_engine.log",
        logLines: [
          { text: "[SYS] Central bank querying primary market...", time: "11:46:00", tone: "default" },
          { text: "[CMD] readIssuance(series: \"GS2036\")", time: "11:46:00", tone: "primary" },
          { text: "[SYS] Aggregating settled allotments and stock...", time: "11:46:01", tone: "default" },
          { text: "[OK] Real-time issuance view returned.", time: "11:46:01", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes sovereign settlement into modular contracts. Each layer issues, allots, settles atomically, and exposes the debt stock without intermediaries carrying counterparty risk.",
    layers: [
      {
        title: "Issuance Registry",
        subtitle: "The Sovereign Series",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sovereign Series",
          description:
            "The foundational data layer. It defines each bond series and its terms and anchors the primary auction, forming the authoritative origin of every unit of sovereign debt.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract IssuanceRegistry {\n  struct Series {\n    uint256 size;\n    uint256 coupon;\n    uint256 maturity;\n    bool open;\n  }\n\n  mapping(bytes32 => Series) public series;\n\n  function issue(bytes32 id, uint256 size, uint256 coupon, uint256 maturity) external onlyTreasury {\n    series[id] = Series(size, coupon, maturity, true);\n  }\n}",
        simAction: "Simulate Bond Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Defining series GS2036 terms...", tone: "default" },
          { text: "Anchoring size, coupon, and maturity...", tone: "default" },
          { text: "Opening the primary auction...", tone: "default" },
          { text: "Writing series to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Sovereign series issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Auction Engine",
        subtitle: "The Allotment Logic",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Allotment Logic",
          description:
            "Runs the primary auction, ranks dealer bids, and allots bonds at the cutoff yield, producing locked allotments ready for atomic settlement on the auction date.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function allot(bytes32 id, uint256 cutoffYield) external onlyTreasury {\n    Bid[] storage bs = bids[id];\n    for (uint i; i < bs.length; i++) {\n      if (bs[i].yield <= cutoffYield) allotted[id][bs[i].dealer] = bs[i].qty;\n    }\n    series[id].open = false;\n    emit Allotted(id, cutoffYield);\n}",
        simAction: "Simulate Allotment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Closing the bid window for GS2036...", tone: "default" },
          { text: "Ranking dealer bids by yield...", tone: "default" },
          { text: "Allotting at or below cutoff yield...", tone: "default" },
          { text: "Locking allotments for settlement...", tone: "default" },
          { text: "[SUCCESS] Bids allotted to winning dealers.", tone: "success" },
        ],
      },
      {
        title: "DvP Settler",
        subtitle: "The Atomic Swap",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Atomic Swap",
          description:
            "Binds bond delivery and cash payment into one indivisible transaction. The bond and the payment move together in a single block, so a settlement fail is mathematically impossible.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settleDvP(bytes32 id, address dealer) external onlyRtgs {\n    uint256 qty = allotted[id][dealer];\n    require(cash.balanceOf(dealer) >= price[id] * qty, \"Underfunded\");\n    cash.transferFrom(dealer, treasury, price[id] * qty);\n    _deliverBond(id, dealer, qty);\n    emit Settled(id, dealer, qty);\n}",
        simAction: "Simulate Atomic Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Locking dealer cash for the bond leg...", tone: "default" },
          { text: "Verifying funding covers the allotment...", tone: "default" },
          { text: "Executing bond and cash legs in one block...", tone: "default" },
          { text: "Confirming no unsettled position remains...", tone: "default" },
          { text: "[SUCCESS] Atomic DvP settled with finality.", tone: "success" },
        ],
      },
      {
        title: "Debt Stock View",
        subtitle: "The Central Bank Window",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Central Bank Window",
          description:
            "A read-only gateway that exposes settled positions and outstanding debt in real time, letting the central bank monitor the primary market live instead of reconstructing it from reports.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function outstanding(bytes32 id) external view returns (uint256 settled, uint256 size) {\n    return (settledQty[id], series[id].size);\n}",
        simAction: "Simulate Debt Stock Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Central bank querying series GS2036...", tone: "default" },
          { text: "Aggregating settled allotments...", tone: "default" },
          { text: "Computing outstanding debt stock...", tone: "default" },
          { text: "Returning real-time issuance view...", tone: "default" },
          { text: "[SUCCESS] Live primary market view returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Atomic sovereign settlement is a horizontal capability. Here is how different actors rely on immediate DvP.",
    sectors: [
      { icon: Landmark, title: "Debt Management Offices", description: "Issue and settle sovereign bonds on the auction date with no counterparty risk, gaining an authoritative real-time record of outstanding government debt.", assetTypes: ["Bond Series", "Allotment Records", "Settlement Proofs"] },
      { icon: Building2, title: "Primary Dealers & Banks", description: "Receive allotted bonds and settle the cash leg atomically, freeing the capital that would otherwise be tied up across a T+2 window.", assetTypes: ["Dealer Allotments", "Cash Legs", "Position Records"] },
      { icon: Shield, title: "Central Banks & Regulators", description: "Monitor primary issuance and settlement live and confirm that settlement fails cannot occur, replacing post-trade reconciliation with direct visibility.", assetTypes: ["Issuance Views", "Debt Stock Records", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a legacy depository and RTGS system or connecting primary dealers directly, Cerulea routes both into one atomic settlement chain.",
    tracks: [
      {
        title: "Track A: Depository & RTGS Bridging",
        description:
          "For central securities depositories and RTGS operators. Existing settlement instructions are translated into atomic on-chain DvP through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Depository / RTGS", sublabel: "Settlement Systems", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Instruction Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Sovereign Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Primary Dealer Execution",
        description:
          "For primary dealers on institutional nodes. A dealer node signs each bid and settlement and routes it directly to the settlement contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Dealer Node", sublabel: "Primary Dealer System", icon: Fingerprint, accent: false },
          { label: "Settlement Validators", sublabel: "DvP Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Atomic Settlement Record", icon: Landmark, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a sovereign settlement chain with on-chain auctions, atomic DvP, an integrated cash leg, and real-time central bank visibility from scratch requires market infrastructure engineers and long consortium cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Settlement & Auction Rules",
      ruleCount: 52,
      sliderPercent: 50,
      traditionalMonths: 18,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects market infrastructure benchmarks. Building an on-chain auction, atomic DvP settlement, an integrated central bank cash leg, and a live issuance view for an average sovereign market takes a baseline of 10 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your settlement and auction rules into pre-audited WebAssembly binaries and provisions the sovereign settlement ledger and central bank view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "interbank-lending-rate-benchmark-calculation-transparency",
    icon: Scale,
    eyebrow: "Benchmark Integrity Layer",
    headline1: "Anchor every submission.",
    headline2: "Prove the benchmark.",
    heroDescription:
      "Anchor each panel bank's submitted rate and the resulting daily benchmark calculation as a verifiable, tamper-proof record. Anyone can confirm the benchmark was computed correctly and without manipulation, restoring trust after past rate-rigging scandals.",
    heroCta: "Deploy Benchmark Integrity",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque, manipulable panel submission into a sealed, reproducible benchmark calculation.",
    mechanics: [
      { title: "Sealed Rate Submission", description: "Anchor each input at source. The Oracle Feeds module records every panel bank's submitted rate with its signature, so no submission can be altered or backdated after the fact." },
      { title: "Deterministic Trimming", description: "Publish the method. The trimming and averaging logic runs on-chain, so the benchmark is reproducible from the same submissions by anyone." },
      { title: "Immutable Fixing Record", description: "Seal each day's fix. The Audit Logs module writes the submissions and the resulting benchmark as an immutable record that cannot be quietly restated." },
      { title: "Manipulation Detection", description: "Expose outliers. The Compliance Attestations module flags a submission that deviates abnormally from the panel, creating an evidence trail for the administrator." },
      { title: "Independent Recalculation", description: "Let anyone check. A user recomputes the benchmark from the anchored submissions and confirms it matches the published fix." },
      { title: "Public Fixing History", description: "Open the archive. Every historical fix and its inputs are queryable, so the benchmark's integrity can be audited across time." },
    ],
    lifecycleTitle: "The Fixing Lifecycle",
    lifecycleSubtitle:
      "Follow a single day's benchmark from sealed panel submissions to an independently verifiable fix.",
    lifecycleSteps: [
      {
        label: "Rate Submission",
        description:
          "Each panel bank submits its rate before the cutoff. Every submission is sealed with the bank's signature and timestamp.",
        icon: Building2,
        logFilename: "cerulea_benchmark_engine.log",
        logLines: [
          { text: "[SYS] Opening submission window for MIBOR fix...", time: "10:30:00", tone: "default" },
          { text: "[CMD] submitRate(bank: \"PANEL_07\", rate: 682)", time: "10:31:12", tone: "primary" },
          { text: "[AUTH] Sealing submission with bank signature...", time: "10:31:12", tone: "secondary" },
          { text: "[OK] 12 of 12 panel submissions sealed.", time: "10:44:58", tone: "success" },
        ],
      },
      {
        label: "Trimmed Averaging",
        description:
          "The deterministic logic trims the outlier submissions and averages the remainder to compute the day's benchmark.",
        icon: Scale,
        logFilename: "cerulea_benchmark_engine.log",
        logLines: [
          { text: "[SYS] Running trimmed-mean calculation...", time: "10:45:00", tone: "default" },
          { text: "[CMD] computeFix(trimPct: 25)", time: "10:45:00", tone: "primary" },
          { text: "[SYS] Trimming top and bottom 25% of submissions.", time: "10:45:01", tone: "default" },
          { text: "[OK] Benchmark fix computed: 6.79%.", time: "10:45:01", tone: "success" },
        ],
      },
      {
        label: "Fixing Seal",
        description:
          "The submissions and the resulting fix are sealed as an immutable record so the day's benchmark cannot be revised silently.",
        icon: ScrollText,
        logFilename: "cerulea_benchmark_engine.log",
        logLines: [
          { text: "[SYS] Sealing fixing record for 2026-05-11...", time: "10:45:03", tone: "default" },
          { text: "[CMD] sealFix(benchmark: \"MIBOR\", value: 679)", time: "10:45:03", tone: "primary" },
          { text: "[AUTH] Hashing submissions and fix (SHA-256)...", time: "10:45:04", tone: "secondary" },
          { text: "[OK] Fixing record sealed, tamper-evident.", time: "10:45:04", tone: "success" },
        ],
      },
      {
        label: "Public Verification",
        description:
          "Any user pulls the sealed submissions, recomputes the benchmark, and confirms it matches the published fix.",
        icon: Search,
        logFilename: "cerulea_benchmark_engine.log",
        logLines: [
          { text: "[SYS] Verification request for MIBOR fix...", time: "12:05:41", tone: "default" },
          { text: "[CMD] recomputeFix(date: \"2026-05-11\")", time: "12:05:41", tone: "primary" },
          { text: "[SYS] Reproducing trimmed mean from submissions...", time: "12:05:42", tone: "default" },
          { text: "[OK] Recomputed fix matches published 6.79%.", time: "12:05:42", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes benchmark integrity into modular contracts. Each layer seals submissions, computes the fix, anchors the day, and exposes the history so no one has to trust the administrator alone.",
    layers: [
      {
        title: "Submission Vault",
        subtitle: "The Sealed Input",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Input",
          description:
            "The foundational data layer. It records each panel bank's rate with a signature and timestamp, fixing the exact submissions the benchmark must be reproducible from and blocking any later edit.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SubmissionVault {\n  struct Sub {\n    address bank;\n    uint256 rate;\n    uint256 ts;\n  }\n\n  mapping(bytes32 => Sub[]) public daySubs;\n\n  function submit(bytes32 fixId, uint256 rate) external onlyPanel {\n    daySubs[fixId].push(Sub(msg.sender, rate, block.timestamp));\n  }\n}",
        simAction: "Simulate Rate Submission",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading panel bank credential...", tone: "default" },
          { text: "Sealing submitted rate with signature...", tone: "default" },
          { text: "Timestamping submission...", tone: "default" },
          { text: "Writing to the day's submission vault...", tone: "default" },
          { text: "[SUCCESS] Panel submission sealed on-chain.", tone: "success" },
        ],
      },
      {
        title: "Fixing Calculator",
        subtitle: "The Reproducible Mean",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reproducible Mean",
          description:
            "Runs the trimming and averaging on-chain so the benchmark method is public. Anyone can rerun the identical calculation over the sealed submissions and arrive at the same fix.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function computeFix(bytes32 fixId, uint256 trimPct) public view returns (uint256) {\n    uint256[] memory r = sortedRates(fixId);\n    uint256 cut = r.length * trimPct / 100;\n    uint256 sum; uint256 n;\n    for (uint i = cut; i < r.length - cut; i++) { sum += r[i]; n++; }\n    return sum / n;\n}",
        simAction: "Simulate Fixing Calculation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading 12 sealed submissions...", tone: "default" },
          { text: "Sorting submitted rates...", tone: "default" },
          { text: "Trimming top and bottom quartiles...", tone: "default" },
          { text: "Averaging the remaining submissions...", tone: "default" },
          { text: "[SUCCESS] Benchmark fix computed deterministically.", tone: "success" },
        ],
      },
      {
        title: "Fixing Seal",
        subtitle: "The Restatement Guard",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Restatement Guard",
          description:
            "Seals each day's submissions and fix as an immutable record. A later attempt to alter a past benchmark breaks the anchored hash and is immediately detectable by any auditor.",
          platformFunction: "Audit & Provenance",
        },
        codeSnippet:
          "function sealFix(bytes32 fixId, uint256 value) external onlyAdmin {\n    require(sealedAt[fixId] == 0, \"Already sealed\");\n    fixOf[fixId] = value;\n    sealedAt[fixId] = block.timestamp;\n    emit FixSealed(fixId, value, keccak256(abi.encode(daySubs[fixId])));\n}",
        simAction: "Simulate Fixing Seal",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Preparing fixing record for the day...", tone: "default" },
          { text: "Hashing submissions and final fix...", tone: "default" },
          { text: "Checking the day is not already sealed...", tone: "default" },
          { text: "Writing immutable fixing seal...", tone: "default" },
          { text: "[SUCCESS] Fixing sealed, tamper-evident.", tone: "success" },
        ],
      },
      {
        title: "History Verifier",
        subtitle: "The Public Archive",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Public Archive",
          description:
            "A read-only gateway that exposes every historical fix and its submissions. It lets any market participant reproduce any day's benchmark and audit the panel for manipulation.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function fixHistory(bytes32 benchmark, uint256 from, uint256 to) external view returns (uint256[] memory) {\n    return archive.range(benchmark, from, to);\n}",
        simAction: "Simulate History Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Participant requesting fixing history...", tone: "default" },
          { text: "Assembling sealed daily fixes...", tone: "default" },
          { text: "Attaching submissions per day...", tone: "default" },
          { text: "Returning verifiable benchmark series...", tone: "default" },
          { text: "[SUCCESS] Full fixing history returned for audit.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verifiable benchmarks are a horizontal capability. Here is how different actors rely on a reproducible fix.",
    sectors: [
      { icon: Scale, title: "Benchmark Administrators", description: "Publish a rate anyone can reproduce from sealed submissions, restoring confidence in a benchmark after past manipulation without exposing individual panel positions live.", assetTypes: ["Sealed Submissions", "Fixing Records", "Panel Registries"] },
      { icon: Landmark, title: "Regulators & Panel Banks", description: "Audit the fixing process directly and detect abnormal submissions early, replacing after-the-fact rate-rigging investigations with continuous verifiable evidence.", assetTypes: ["Audit Trails", "Deviation Flags", "Submission Logs"] },
      { icon: FileCheck, title: "Contract & Loan Issuers", description: "Reference a benchmark whose integrity is provable, giving borrowers and counterparties confidence in the rate their contracts reset against.", assetTypes: ["Reference Fixes", "History Indices", "Verification Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are collecting submissions from panel bank systems or serving verifiers publicly, Cerulea routes both into one sealed benchmark record.",
    tracks: [
      {
        title: "Track A: Panel Bank Bridging",
        description:
          "For panel banks on legacy submission systems. Rate submissions are translated into sealed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Bank Submission System", sublabel: "Panel Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Submission Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Benchmark Fixing Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Public Verification",
        description:
          "For market participants and auditors. A verifier reads the sealed submissions and recomputes any historical fix directly from the public archive.",
        connectorLabels: ["READ ACCESS", "STATE EXECUTION"],
        nodes: [
          { label: "Verifier Client", sublabel: "Participant / Auditor", icon: Search, accent: false },
          { label: "History Verifier", sublabel: "Reproducible Calculation", icon: Scale, accent: true },
          { label: "Cerulea Ledger", sublabel: "Sealed Fixing Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a benchmark integrity system with sealed submissions, an on-chain fixing calculation, immutable seals, and a public verification archive from scratch requires market data engineers and long panel integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Submission & Fixing Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects benchmark administration integration benchmarks. Wiring sealed panel submissions, an auditable trimmed-mean calculation, tamper-evident seals, and a public verification archive takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your submission and fixing rules into pre-audited WebAssembly binaries and provisions the benchmark ledger and verification archive instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "foreign-exchange-reserve-custody-verification-for-transparency-reporti",
    icon: Globe,
    eyebrow: "Reserve Attestation Layer",
    headline1: "Attest the reserves.",
    headline2: "Back every disclosure.",
    heroDescription:
      "Anchor custodian confirmations of foreign exchange reserve holdings as verifiable records at regular intervals. The central bank gains a stronger evidentiary basis for its public reserve disclosures than internal reconciliation with custodian banks abroad.",
    heroCta: "Deploy Reserve Attestation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn internal reconciliation with foreign custodians into a signed, verifiable attestation chain.",
    mechanics: [
      { title: "Custodian Attestation", description: "Anchor holdings at source. The Provenance Notary module records each custodian's signed confirmation of the reserves it holds, so a disclosure rests on custodian evidence rather than internal books." },
      { title: "Periodic Snapshot", description: "Fix each reporting date. Reserve holdings are attested at regular intervals, producing a consistent record aligned to the transparency reporting cycle." },
      { title: "Composition Breakdown", description: "Verify the mix, not just the total. Each attestation records the currency and instrument composition, so the disclosed reserve breakdown is independently supported." },
      { title: "Immutable Confirmation Trail", description: "Prevent silent revision. The Audit Logs module seals each custodian confirmation, so a past attestation cannot be quietly changed before a disclosure." },
      { title: "Reconciliation Automation", description: "Replace manual matching. The system reconciles custodian attestations against the central bank's internal record automatically and highlights any mismatch." },
      { title: "Disclosure-Ready Evidence", description: "Back the public number. The Compliance Attestations module compiles the attested holdings into evidence the central bank can reference in its transparency disclosure." },
    ],
    lifecycleTitle: "The Attestation Lifecycle",
    lifecycleSubtitle:
      "Follow a single reporting period from custodian confirmation to disclosure-ready evidence.",
    lifecycleSteps: [
      {
        label: "Custodian Confirmation",
        description:
          "Each custodian bank signs a confirmation of the reserves it holds for the central bank at the reporting date.",
        icon: Building2,
        logFilename: "cerulea_reserve_engine.log",
        logLines: [
          { text: "[SYS] Requesting confirmations for Q2 snapshot...", time: "09:00:00", tone: "default" },
          { text: "[CMD] confirmHoldings(custodian: \"CUST_NY\", usd: 18400000000)", time: "09:12:31", tone: "primary" },
          { text: "[AUTH] Verifying custodian signature...", time: "09:12:32", tone: "secondary" },
          { text: "[OK] Confirmation anchored for CUST_NY.", time: "09:12:32", tone: "success" },
        ],
      },
      {
        label: "Composition Recording",
        description:
          "The confirmation records the currency and instrument breakdown so the disclosed composition is supported by evidence.",
        icon: PieChart,
        logFilename: "cerulea_reserve_engine.log",
        logLines: [
          { text: "[SYS] Recording composition for CUST_NY...", time: "09:13:05", tone: "default" },
          { text: "[CMD] setComposition(usd: 62, eur: 21, gold: 17)", time: "09:13:05", tone: "primary" },
          { text: "[SYS] Composition bound to confirmation.", time: "09:13:06", tone: "default" },
          { text: "[OK] Currency and instrument mix anchored.", time: "09:13:06", tone: "success" },
        ],
      },
      {
        label: "Snapshot Reconciliation",
        description:
          "Custodian attestations are reconciled against the central bank's internal record and any mismatch is flagged.",
        icon: Scale,
        logFilename: "cerulea_reserve_engine.log",
        logLines: [
          { text: "[SYS] Reconciling 6 custodian confirmations...", time: "10:20:44", tone: "default" },
          { text: "[CMD] reconcile(snapshot: \"2026-Q2\")", time: "10:20:44", tone: "primary" },
          { text: "[SYS] Aggregate attested vs internal book compared.", time: "10:20:45", tone: "default" },
          { text: "[OK] Reconciliation clean, no mismatch.", time: "10:20:45", tone: "success" },
        ],
      },
      {
        label: "Disclosure Evidence",
        description:
          "The attested holdings are compiled into disclosure-ready evidence the central bank references in its public report.",
        icon: FileCheck,
        logFilename: "cerulea_reserve_engine.log",
        logLines: [
          { text: "[SYS] Compiling evidence for Q2 disclosure...", time: "11:05:10", tone: "default" },
          { text: "[CMD] compileEvidence(snapshot: \"2026-Q2\")", time: "11:05:10", tone: "primary" },
          { text: "[AUTH] Sealing evidence bundle...", time: "11:05:11", tone: "secondary" },
          { text: "[OK] Disclosure-ready evidence generated.", time: "11:05:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes reserve attestation into modular contracts. Each layer confirms holdings, records composition, reconciles, and compiles evidence without relying on internal books alone.",
    layers: [
      {
        title: "Confirmation Registry",
        subtitle: "The Custodian Attestation",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Custodian Attestation",
          description:
            "The foundational data layer. It records each custodian's signed confirmation of the reserves it holds, anchoring the external evidence that a public disclosure will rest on.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ConfirmationRegistry {\n  struct Confirm {\n    address custodian;\n    uint256 valueUsd;\n    uint256 asOf;\n  }\n\n  mapping(bytes32 => Confirm[]) public snapshot;\n\n  function confirm(bytes32 snapId, uint256 valueUsd) external onlyCustodian {\n    snapshot[snapId].push(Confirm(msg.sender, valueUsd, block.timestamp));\n  }\n}",
        simAction: "Simulate Custodian Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading custodian credential...", tone: "default" },
          { text: "Verifying signed holdings confirmation...", tone: "default" },
          { text: "Anchoring confirmation to the snapshot...", tone: "default" },
          { text: "Writing confirmation to storage...", tone: "default" },
          { text: "[SUCCESS] Custodian attestation anchored.", tone: "success" },
        ],
      },
      {
        title: "Composition Ledger",
        subtitle: "The Reserve Mix",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reserve Mix",
          description:
            "Records the currency and instrument breakdown behind each confirmation, so a disclosed reserve composition is supported by evidence rather than an internal characterization.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function setComposition(bytes32 confirmId, uint16[] calldata weights, bytes32[] calldata assets) external onlyCustodian {\n    require(sum(weights) == 100, \"Must total 100\");\n    composition[confirmId] = Mix(weights, assets);\n    emit CompositionSet(confirmId);\n}",
        simAction: "Simulate Composition Recording",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading confirmed reserve breakdown...", tone: "default" },
          { text: "Validating weights total 100 percent...", tone: "default" },
          { text: "Binding composition to the confirmation...", tone: "default" },
          { text: "Recording currency and instrument mix...", tone: "default" },
          { text: "[SUCCESS] Reserve composition anchored.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation Engine",
        subtitle: "The Automatic Match",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Match",
          description:
            "Reconciles the aggregate of custodian attestations against the central bank's internal record and flags any mismatch, replacing a manual matching exercise with deterministic on-chain math.",
          platformFunction: "Reconciliation Control",
        },
        codeSnippet:
          "function reconcile(bytes32 snapId, uint256 internalTotal) external onlyBank returns (bool) {\n    uint256 attested = sumConfirmations(snapId);\n    bool ok = attested == internalTotal;\n    emit Reconciled(snapId, attested, internalTotal, ok);\n    return ok;\n}",
        simAction: "Simulate Reconciliation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Summing 6 custodian confirmations...", tone: "default" },
          { text: "Comparing against internal reserve book...", tone: "default" },
          { text: "Checking for any mismatch...", tone: "default" },
          { text: "Recording reconciliation result...", tone: "default" },
          { text: "[SUCCESS] Reconciliation clean, no mismatch.", tone: "success" },
        ],
      },
      {
        title: "Evidence Compiler",
        subtitle: "The Disclosure Window",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Disclosure Window",
          description:
            "Compiles attested holdings and composition into a sealed evidence bundle the central bank can reference in its transparency disclosure, giving the public number a verifiable backing.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function compileEvidence(bytes32 snapId) external view returns (bytes32) {\n    return keccak256(abi.encode(snapshot[snapId], compositions[snapId]));\n}",
        simAction: "Simulate Evidence Compile",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Gathering attested holdings for the period...", tone: "default" },
          { text: "Attaching composition breakdown...", tone: "default" },
          { text: "Sealing the evidence bundle...", tone: "default" },
          { text: "Producing disclosure reference hash...", tone: "default" },
          { text: "[SUCCESS] Disclosure-ready evidence generated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Reserve attestation is a horizontal capability. Here is how different actors rely on verifiable custodian confirmations.",
    sectors: [
      { icon: Landmark, title: "Central Banks", description: "Back public reserve disclosures with anchored custodian confirmations, replacing internal reconciliation with a verifiable evidentiary basis that strengthens market credibility.", assetTypes: ["Reserve Snapshots", "Composition Records", "Disclosure Evidence"] },
      { icon: Building2, title: "Custodian Institutions", description: "Provide signed confirmations of the reserves they hold, giving the central bank a direct verifiable attestation instead of periodic statements.", assetTypes: ["Holding Confirmations", "Attestation Records", "Signed Statements"] },
      { icon: Globe, title: "Markets & Rating Agencies", description: "Reference an attested reserve position when assessing sovereign strength, using verifiable evidence rather than an unaudited public figure.", assetTypes: ["Verification Proofs", "Audit Trails", "Composition Views"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are collecting confirmations from custodian systems abroad or serving the central bank's reporting desk, Cerulea routes both into one attested reserve record.",
    tracks: [
      {
        title: "Track A: Custodian System Bridging",
        description:
          "For custodian banks on legacy systems. Holdings confirmations are translated into signed on-chain attestations through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Custodian System", sublabel: "Foreign Custodian Bank", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Confirmation Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Reserve Attestation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Central Bank Reporting",
        description:
          "For the central bank's reporting desk. The desk reconciles attestations against internal books and compiles disclosure evidence directly.",
        connectorLabels: ["READ ACCESS", "STATE EXECUTION"],
        nodes: [
          { label: "Reporting Desk", sublabel: "Central Bank System", icon: Fingerprint, accent: false },
          { label: "Reconciliation Engine", sublabel: "Attestation Consensus", icon: Scale, accent: true },
          { label: "Cerulea Ledger", sublabel: "Attested Reserve Record", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a reserve attestation system with custodian confirmations, composition records, automatic reconciliation, and disclosure evidence from scratch requires reserve management engineers and long custodian integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Attestation & Reconciliation Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects reserve management integration benchmarks. Wiring custodian confirmations, composition recording, automatic reconciliation, and a disclosure evidence compiler for an average central bank takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your attestation and reconciliation rules into pre-audited WebAssembly binaries and provisions the reserve attestation ledger and evidence compiler instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "trade-finance-digitization-lc-guarantees-invoice-financing",
    icon: ScrollText,
    eyebrow: "Trade Finance Engine",
    headline1: "Digitize the paper trail.",
    headline2: "Settle on compliance.",
    heroDescription:
      "Present and verify letters of credit, guarantees, and financing documents on-chain, with payment released automatically the moment documents comply. A 5-day paper process compresses to same-day, and duplicate-document fraud becomes detectable.",
    heroCta: "Deploy Trade Finance Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn the most paper-intensive process in banking into an on-chain document and settlement flow.",
    mechanics: [
      { title: "On-Chain Document Set", description: "Digitize the LC dossier. The Trade Finance Documents module presents every document type on-chain, replacing physical dossiers couriered between banks." },
      { title: "Automated Compliance Check", description: "End manual examination. Presented documents are checked against the credit terms automatically, so both banks confirm compliance in hours instead of days." },
      { title: "Conditional Settlement", description: "Pay on match. The Escrow and Conditional Settlement module releases payment the instant documents comply, so the exporter is paid the same day." },
      { title: "Duplicate Fraud Detection", description: "Kill double financing. Each document's digest is anchored, so the same invoice or bill of lading financed twice across banks is detected instantly." },
      { title: "Digital Document Signing", description: "Bind every party. The Document Signing module captures each bank's and party's signature on-chain, replacing wet-ink endorsements." },
      { title: "Multi-Bank Coordination", description: "Coordinate issuing and advising banks. All banks in the LC share one record, so there is no back-and-forth over which version of a document is authoritative." },
    ],
    lifecycleTitle: "The Trade Finance Lifecycle",
    lifecycleSubtitle:
      "Follow a single letter of credit from issuance through document presentation to same-day payment.",
    lifecycleSteps: [
      {
        label: "LC Issuance",
        description:
          "The issuing bank creates the letter of credit on-chain with its terms and conditions and notifies the advising bank.",
        icon: ScrollText,
        logFilename: "cerulea_tradefin_engine.log",
        logLines: [
          { text: "[SYS] Issuing LC for textile export order...", time: "08:30:00", tone: "default" },
          { text: "[CMD] issueLC { lc: \"LC_5521\", amount: 480000, tenor: 90 }", time: "08:30:01", tone: "primary" },
          { text: "[AUTH] Notifying advising bank and beneficiary...", time: "08:30:01", tone: "secondary" },
          { text: "[OK] LC_5521 anchored and advised.", time: "08:30:02", tone: "success" },
        ],
      },
      {
        label: "Document Presentation",
        description:
          "The exporter presents shipping and trade documents on-chain. Each document's digest is anchored against the LC.",
        icon: FileCheck,
        logFilename: "cerulea_tradefin_engine.log",
        logLines: [
          { text: "[SYS] Beneficiary presenting document set...", time: "13:10:22", tone: "default" },
          { text: "[CMD] present(LC_5521, docs: [\"BL\", \"INV\", \"PACK\"])", time: "13:10:22", tone: "primary" },
          { text: "[AUTH] Anchoring document digests to LC...", time: "13:10:23", tone: "secondary" },
          { text: "[OK] 8 documents presented on-chain.", time: "13:10:23", tone: "success" },
        ],
      },
      {
        label: "Compliance Verification",
        description:
          "Both banks confirm the documents comply with the credit terms. The automated check flags any discrepancy for review.",
        icon: Search,
        logFilename: "cerulea_tradefin_engine.log",
        logLines: [
          { text: "[SYS] Checking documents against LC terms...", time: "16:40:15", tone: "default" },
          { text: "[CMD] verifyCompliance(LC_5521)", time: "16:40:15", tone: "primary" },
          { text: "[SYS] No discrepancy found across 8 documents.", time: "16:40:16", tone: "default" },
          { text: "[OK] Both banks confirmed compliance in 4h.", time: "16:40:16", tone: "success" },
        ],
      },
      {
        label: "Same-Day Payment",
        description:
          "On confirmed compliance the escrow releases payment automatically, so the exporter is paid the same day.",
        icon: Coins,
        logFilename: "cerulea_tradefin_engine.log",
        logLines: [
          { text: "[SYS] Compliance confirmed, releasing payment...", time: "17:05:40", tone: "default" },
          { text: "[CMD] settle(LC_5521, beneficiary)", time: "17:05:40", tone: "primary" },
          { text: "[SYS] Escrow released on document compliance.", time: "17:05:41", tone: "default" },
          { text: "[OK] Exporter paid same day, not in 5-7 days.", time: "17:05:41", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes trade finance into modular contracts. Each layer issues the credit, presents documents, verifies compliance, and settles without couriered paper or unilateral document control.",
    layers: [
      {
        title: "Credit Registry",
        subtitle: "The Digital LC",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Digital LC",
          description:
            "The foundational data layer. It mints the letter of credit with its terms and shares one authoritative version with the issuing and advising banks, ending disputes over document versions.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CreditRegistry {\n  struct LC {\n    address issuing;\n    address advising;\n    uint256 amount;\n    uint256 tenor;\n    bool settled;\n  }\n\n  mapping(bytes32 => LC) public credits;\n\n  function issue(bytes32 id, address advising, uint256 amount, uint256 tenor) external onlyIssuer {\n    credits[id] = LC(msg.sender, advising, amount, tenor, false);\n  }\n}",
        simAction: "Simulate LC Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading issuing bank credential...", tone: "default" },
          { text: "Minting the letter of credit on-chain...", tone: "default" },
          { text: "Sharing one version with both banks...", tone: "default" },
          { text: "Writing LC to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Digital LC issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Document Notary",
        subtitle: "The Anti-Fraud Seal",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Anti-Fraud Seal",
          description:
            "Anchors each presented document by its digest. Because a bill of lading or invoice financed twice across banks reuses the same digest, duplicate-document fraud is detected at presentation.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function present(bytes32 lcId, bytes32 docHash, string calldata kind) external onlyBeneficiary {\n    require(!seen[docHash], \"Duplicate document\");\n    seen[docHash] = true;\n    docs[lcId].push(Doc(docHash, kind));\n    emit Presented(lcId, docHash, kind);\n}",
        simAction: "Simulate Document Presentation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing digest of bill of lading...", tone: "default" },
          { text: "Checking digest against financed documents...", tone: "default" },
          { text: "Anchoring document to the LC...", tone: "default" },
          { text: "Recording presentation event...", tone: "default" },
          { text: "[SUCCESS] Documents presented, no duplicate.", tone: "success" },
        ],
      },
      {
        title: "Compliance Checker",
        subtitle: "The Terms Matcher",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Terms Matcher",
          description:
            "Checks the presented document set against the credit terms and surfaces any discrepancy, so both banks reach a compliance decision in hours instead of days of manual examination.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function verifyCompliance(bytes32 lcId) external view returns (bool) {\n    for (uint i; i < requiredDocs[lcId].length; i++) {\n      if (!presented[lcId][requiredDocs[lcId][i]]) return false;\n    }\n    return !hasDiscrepancy[lcId];\n}",
        simAction: "Simulate Compliance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading required document list for the LC...", tone: "default" },
          { text: "Matching presented documents to terms...", tone: "default" },
          { text: "Scanning for discrepancies...", tone: "default" },
          { text: "Recording the compliance decision...", tone: "default" },
          { text: "[SUCCESS] Documents comply with LC terms.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Payment Trigger",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Payment Trigger",
          description:
            "Holds the LC amount and releases it the instant compliance is confirmed, binding payment to document compliance so the exporter is paid the same day the documents match.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(bytes32 lcId) external onlyBank {\n    require(verifyCompliance(lcId), \"Not compliant\");\n    require(!credits[lcId].settled, \"Already settled\");\n    credits[lcId].settled = true;\n    _release(lcId, beneficiary[lcId], credits[lcId].amount);\n}",
        simAction: "Simulate Same-Day Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming documents comply with terms...", tone: "default" },
          { text: "Checking the LC is not already settled...", tone: "default" },
          { text: "Releasing escrow to the beneficiary...", tone: "default" },
          { text: "Marking the LC as settled...", tone: "default" },
          { text: "[SUCCESS] Exporter paid same day on compliance.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Digital trade finance is a horizontal capability. Here is how different actors put the on-chain document flow to work.",
    sectors: [
      { icon: Landmark, title: "Issuing & Advising Banks", description: "Examine and settle letters of credit against one shared document set, cutting a 5-day paper process to same-day while eliminating duplicate financing fraud.", assetTypes: ["Letters of Credit", "Document Sets", "Settlement Proofs"] },
      { icon: Truck, title: "Exporters & Importers", description: "Present shipping and trade documents on-chain and get paid the same day documents comply, replacing a week of courier and correspondence with an instant flow.", assetTypes: ["Shipping Documents", "Invoices", "Payment Receipts"] },
      { icon: Globe, title: "Guarantee & Insurance Providers", description: "Attach guarantees to a verifiable document trail, so a claim rests on anchored evidence rather than a reconstruction of paper records.", assetTypes: ["Bank Guarantees", "Anchored Documents", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's trade finance system or connecting corporates directly, Cerulea routes both into one shared trade finance record.",
    tracks: [
      {
        title: "Track A: Bank System Bridging",
        description:
          "For banks on legacy trade finance platforms. SWIFT and internal document events are translated into signed on-chain LC transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Trade Finance System", sublabel: "Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Document Hashing & Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Trade Finance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Corporate Document Presentation",
        description:
          "For exporters and importers on a portal. A corporate wallet signs each document presentation and routes it directly to the shared LC contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Corporate Portal", sublabel: "Exporter / Importer", icon: Fingerprint, accent: false },
          { label: "Trade Validators", sublabel: "Compliance Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Document Record", icon: ScrollText, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a digital trade finance network with on-chain documents, automated compliance checking, conditional settlement, and duplicate-fraud detection from scratch requires trade finance engineers and long multi-bank integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Document & Settlement Rules",
      ruleCount: 54,
      sliderPercent: 50,
      traditionalMonths: 17,
      ceruleaWeeks: 6,
      methodology:
        "The legacy timeline reflects trade finance integration benchmarks. Building on-chain document handling, automated compliance examination, conditional settlement, and duplicate-fraud detection across multiple banks takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your document and settlement rules into pre-audited WebAssembly binaries and provisions the trade finance ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "know-your-customer-kyc-data-sharing-across-banks",
    icon: Fingerprint,
    eyebrow: "Shared KYC Utility",
    headline1: "Verify once.",
    headline2: "Trust everywhere.",
    heroDescription:
      "Deploy a shared KYC utility where a customer completes verification once and every consortium bank confirms status with consent, without raw data ever being shared. AML alerts propagate in real time, so fraud caught at one bank protects the whole network.",
    heroCta: "Deploy Shared KYC Networks",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn duplicate per-bank verification into a consent-driven, privacy-preserving shared credential.",
    mechanics: [
      { title: "Verify-Once Credential", description: "End repeated onboarding. The KYC and Identity Verification module lets a customer complete KYC once and receive a reusable verification credential accepted across the consortium." },
      { title: "Consent-Gated Sharing", description: "Keep the customer in control. A bank can only read a customer's KYC status after the customer grants consent, recorded on-chain for every access." },
      { title: "Zero Raw Data Exposure", description: "Share status, not documents. Banks verify a credential's validity through the DID and VC Ledger without the underlying documents ever leaving the issuing bank." },
      { title: "Provider Adapter Layer", description: "Plug into existing checks. The KYC Provider Adapters module connects each bank's existing verification vendors, so the shared credential builds on checks banks already trust." },
      { title: "Real-Time AML Propagation", description: "Protect the whole network. A negative-list or AML alert raised at one bank propagates to all consortium banks in real time, closing the gap fraudsters exploit." },
      { title: "Auditable Access Trail", description: "Record every look-up. Each consent and verification is logged, so a regulator can audit exactly which bank verified which customer and when." },
    ],
    lifecycleTitle: "The KYC Lifecycle",
    lifecycleSubtitle:
      "Follow one customer from a single verification to instant credential reuse at two more banks.",
    lifecycleSteps: [
      {
        label: "Initial Verification",
        description:
          "The first bank performs full KYC and issues a verifiable credential bound to the customer's identity.",
        icon: Fingerprint,
        logFilename: "cerulea_kyc_engine.log",
        logLines: [
          { text: "[SYS] Bank A completing full KYC...", time: "09:15:00", tone: "default" },
          { text: "[CMD] issueCredential { subject: \"CUST_3391\", level: \"FULL\" }", time: "09:15:01", tone: "primary" },
          { text: "[AUTH] Signing verifiable credential...", time: "09:15:01", tone: "secondary" },
          { text: "[OK] KYC credential issued and anchored.", time: "09:15:02", tone: "success" },
        ],
      },
      {
        label: "Consent Grant",
        description:
          "When the customer opens an account at a second bank, they grant that bank consent to verify their KYC status.",
        icon: Handshake,
        logFilename: "cerulea_kyc_engine.log",
        logLines: [
          { text: "[SYS] Bank B requesting KYC verification...", time: "11:40:33", tone: "default" },
          { text: "[CMD] grantConsent(CUST_3391, bank: \"B\")", time: "11:40:35", tone: "primary" },
          { text: "[AUTH] Recording customer consent on-chain...", time: "11:40:35", tone: "secondary" },
          { text: "[OK] Consent granted to Bank B.", time: "11:40:36", tone: "success" },
        ],
      },
      {
        label: "Credential Verification",
        description:
          "The second bank verifies the credential's validity without receiving any raw documents, and the account opens in minutes.",
        icon: ShieldCheck,
        logFilename: "cerulea_kyc_engine.log",
        logLines: [
          { text: "[SYS] Bank B verifying credential...", time: "11:41:10", tone: "default" },
          { text: "[CMD] verifyCredential(CUST_3391)", time: "11:41:10", tone: "primary" },
          { text: "[SYS] Proof valid, no raw data transferred.", time: "11:41:11", tone: "default" },
          { text: "[OK] KYC verified in minutes, no documents.", time: "11:41:11", tone: "success" },
        ],
      },
      {
        label: "AML Alert Propagation",
        description:
          "A negative-list hit raised at any bank propagates to all consortium banks in real time, protecting the network.",
        icon: Shield,
        logFilename: "cerulea_kyc_engine.log",
        logLines: [
          { text: "[SYS] AML alert raised at Bank C...", time: "14:22:58", tone: "default" },
          { text: "[CMD] propagateAlert(CUST_9982, type: \"SANCTIONS\")", time: "14:22:58", tone: "primary" },
          { text: "[SYS] Broadcasting to all consortium members...", time: "14:22:59", tone: "default" },
          { text: "[OK] Alert propagated network-wide in real time.", time: "14:22:59", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes shared KYC into modular contracts. Each layer issues a credential, gates consent, verifies without exposing data, and propagates AML alerts across the consortium.",
    layers: [
      {
        title: "Credential Registry",
        subtitle: "The Reusable Proof",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reusable Proof",
          description:
            "The foundational data layer. It anchors the verifiable credential a bank issues after full KYC, so every later bank references one authoritative proof instead of re-verifying from scratch.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CredentialRegistry {\n  struct Cred {\n    address issuer;\n    bytes32 subject;\n    uint8 level;\n    bool revoked;\n  }\n\n  mapping(bytes32 => Cred) public creds;\n\n  function issue(bytes32 id, bytes32 subject, uint8 level) external onlyBank {\n    creds[id] = Cred(msg.sender, subject, level, false);\n  }\n}",
        simAction: "Simulate Credential Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Bank A completing full KYC checks...", tone: "default" },
          { text: "Signing the verifiable credential...", tone: "default" },
          { text: "Anchoring credential to the registry...", tone: "default" },
          { text: "Writing credential state to storage...", tone: "default" },
          { text: "[SUCCESS] Reusable KYC credential issued.", tone: "success" },
        ],
      },
      {
        title: "Consent Gate",
        subtitle: "The Customer Switch",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Customer Switch",
          description:
            "Requires explicit customer consent before any bank reads a credential, recording each grant on-chain so control stays with the customer and every access is accountable.",
          platformFunction: "Consent Control",
        },
        codeSnippet:
          "function grantConsent(bytes32 credId, address bank) external onlyCustomer(credId) {\n    consent[credId][bank] = true;\n    emit ConsentGranted(credId, bank, block.timestamp);\n}",
        simAction: "Simulate Consent Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Bank B requesting verification access...", tone: "default" },
          { text: "Prompting the customer for consent...", tone: "default" },
          { text: "Recording the consent grant on-chain...", tone: "default" },
          { text: "Authorizing Bank B to verify...", tone: "default" },
          { text: "[SUCCESS] Consent granted and logged.", tone: "success" },
        ],
      },
      {
        title: "Zero-Data Verifier",
        subtitle: "The Private Check",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Private Check",
          description:
            "Confirms a credential is valid and unrevoked without transferring any underlying document, so a bank verifies status while the raw KYC data never leaves the issuing institution.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function verifyCredential(bytes32 credId, address bank) external view returns (bool) {\n    require(consent[credId][bank], \"No consent\");\n    Cred memory c = creds[credId];\n    return !c.revoked && c.level >= requiredLevel[bank];\n}",
        simAction: "Simulate Credential Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming Bank B holds customer consent...", tone: "default" },
          { text: "Checking credential is not revoked...", tone: "default" },
          { text: "Validating KYC level meets requirement...", tone: "default" },
          { text: "Returning status with no raw data...", tone: "default" },
          { text: "[SUCCESS] KYC verified privately in minutes.", tone: "success" },
        ],
      },
      {
        title: "Alert Broadcaster",
        subtitle: "The Network Shield",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Network Shield",
          description:
            "Propagates an AML or negative-list alert raised at one bank to every consortium member in real time, closing the information gap that lets a flagged customer move to another bank undetected.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function propagateAlert(bytes32 subject, bytes32 alertType) external onlyBank {\n    alerts[subject].push(Alert(alertType, msg.sender, block.timestamp));\n    emit AlertBroadcast(subject, alertType);\n}",
        simAction: "Simulate AML Propagation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Bank C raising a sanctions-list hit...", tone: "default" },
          { text: "Recording the alert against the subject...", tone: "default" },
          { text: "Broadcasting to all consortium members...", tone: "default" },
          { text: "Confirming network-wide receipt...", tone: "default" },
          { text: "[SUCCESS] AML alert propagated in real time.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared KYC is a horizontal capability. Here is how different actors put the reusable credential to work.",
    sectors: [
      { icon: Landmark, title: "Consortium Banks", description: "Cut duplicate KYC spend by verifying a shared credential with consent, onboarding customers in minutes while catching fraud through real-time AML propagation.", assetTypes: ["KYC Credentials", "Consent Records", "AML Alerts"] },
      { icon: Users, title: "Customers", description: "Complete KYC once and reuse it across banks without resubmitting documents, keeping control over who verifies their identity and when.", assetTypes: ["Verification Proofs", "Consent Grants", "Access Logs"] },
      { icon: Shield, title: "Regulators & FIUs", description: "Audit exactly which bank verified which customer and how AML alerts spread, replacing fragmented per-bank records with one accountable trail.", assetTypes: ["Audit Trails", "Alert Registries", "Compliance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's onboarding system or serving customers from a wallet, Cerulea routes both into one shared KYC record.",
    tracks: [
      {
        title: "Track A: Onboarding System Bridging",
        description:
          "For banks on legacy onboarding platforms. KYC decisions from existing vendors are translated into signed on-chain credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Onboarding System", sublabel: "Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Credential Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared KYC Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Customer Consent Wallet",
        description:
          "For customers on a wallet. The customer signs each consent grant and routes it directly to the consent gate before any bank can verify.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Customer Wallet", sublabel: "Consent Device", icon: Fingerprint, accent: false },
          { label: "Consortium Validators", sublabel: "Verification Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Credential Record", icon: Fingerprint, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared KYC utility with reusable credentials, consent gating, zero-raw-data verification, and real-time AML propagation from scratch requires identity engineers and long consortium integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required KYC & Consent Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects consortium identity integration benchmarks. Building reusable credentials, consent gating, privacy-preserving verification, and real-time AML propagation across banks takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your KYC and consent rules into pre-audited WebAssembly binaries and provisions the shared KYC ledger and alert layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "syndicated-loan-participation-and-servicing-across-multiple-lenders",
    icon: Handshake,
    eyebrow: "Syndicated Loan Ledger",
    headline1: "Share the loan.",
    headline2: "Automate the servicing.",
    heroDescription:
      "Give every participating bank a live view of its share of a syndicated loan, with interest and principal distributed automatically. One shared ledger replaces the lead bank's manual spreadsheets for tracking each lender's stake and repayment allocation.",
    heroCta: "Deploy Syndication Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a lead bank's manual servicing spreadsheet into a shared, self-distributing loan ledger.",
    mechanics: [
      { title: "Shared Participation Ledger", description: "Replace the lead bank's spreadsheet. The Securities Lifecycle module records each lender's share of the loan on one ledger every participant can read directly." },
      { title: "Automated Interest Accrual", description: "End manual calculation. Interest accrues per lender in proportion to their participation, so accrual is computed by the contract rather than reconciled by hand." },
      { title: "Proportional Repayment", description: "Split payments automatically. The Royalty Clearing module allocates each borrower repayment across the syndicate in proportion to each lender's stake." },
      { title: "Escrowed Disbursement", description: "Move funds on rule. The Escrow and Conditional Settlement module holds and releases drawdowns and repayments against the loan's agreed conditions." },
      { title: "Participation Transfer", description: "Trade a stake cleanly. A lender can transfer its participation to another bank on-chain, with the ledger updating every future distribution automatically." },
      { title: "Live Position Visibility", description: "Show every lender its stake. Each bank queries its outstanding principal, accrued interest, and received payments in real time without asking the agent bank." },
    ],
    lifecycleTitle: "The Syndication Lifecycle",
    lifecycleSubtitle:
      "Follow a single syndicated loan from participation setup to an automatically distributed repayment.",
    lifecycleSteps: [
      {
        label: "Syndicate Formation",
        description:
          "The lead bank sets up the loan and records each participating bank's committed share on the shared ledger.",
        icon: Handshake,
        logFilename: "cerulea_syndicate_engine.log",
        logLines: [
          { text: "[SYS] Forming syndicate for facility SYN_204...", time: "09:30:00", tone: "default" },
          { text: "[CMD] addParticipant(bank: \"B2\", share: 2200)", time: "09:30:02", tone: "primary" },
          { text: "[AUTH] Recording committed shares for 5 banks...", time: "09:30:02", tone: "secondary" },
          { text: "[OK] Syndicate formed, shares total 100%.", time: "09:30:03", tone: "success" },
        ],
      },
      {
        label: "Drawdown",
        description:
          "The borrower draws funds. Each lender's contribution is escrowed and released to the borrower per its share.",
        icon: Coins,
        logFilename: "cerulea_syndicate_engine.log",
        logLines: [
          { text: "[SYS] Borrower requesting drawdown...", time: "11:10:20", tone: "default" },
          { text: "[CMD] drawdown(SYN_204, amount: 50000000)", time: "11:10:20", tone: "primary" },
          { text: "[SYS] Contributions escrowed from 5 lenders.", time: "11:10:21", tone: "default" },
          { text: "[OK] Funds released to borrower.", time: "11:10:21", tone: "success" },
        ],
      },
      {
        label: "Interest Accrual",
        description:
          "Interest accrues per lender in proportion to participation, computed by the contract on the outstanding balance.",
        icon: Activity,
        logFilename: "cerulea_syndicate_engine.log",
        logLines: [
          { text: "[SYS] Accruing interest for period...", time: "00:05:00", tone: "default" },
          { text: "[CMD] accrue(SYN_204, ratePct: 950)", time: "00:05:00", tone: "primary" },
          { text: "[SYS] Per-lender accrual computed on balance.", time: "00:05:01", tone: "default" },
          { text: "[OK] Interest accrued across syndicate.", time: "00:05:01", tone: "success" },
        ],
      },
      {
        label: "Repayment Distribution",
        description:
          "The borrower repays. The clearing module splits principal and interest across the syndicate and pays each lender.",
        icon: PieChart,
        logFilename: "cerulea_syndicate_engine.log",
        logLines: [
          { text: "[SYS] Borrower repayment received...", time: "10:00:44", tone: "default" },
          { text: "[CMD] distribute(SYN_204, amount: 4200000)", time: "10:00:44", tone: "primary" },
          { text: "[SYS] Allocating proportionally to 5 lenders...", time: "10:00:45", tone: "default" },
          { text: "[OK] Repayment distributed automatically.", time: "10:00:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes syndicated lending into modular contracts. Each layer records participation, escrows drawdowns, accrues interest, and distributes repayments without the lead bank keeping a private spreadsheet.",
    layers: [
      {
        title: "Participation Registry",
        subtitle: "The Shared Stake",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Stake",
          description:
            "The foundational data layer. It records each lender's share of the facility on one ledger, so every participant reads its own stake directly instead of trusting the agent bank's calculation.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract Participation {\n  struct Lender {\n    address bank;\n    uint256 shareBps;\n    uint256 principal;\n  }\n\n  mapping(bytes32 => Lender[]) public syndicate;\n\n  function addLender(bytes32 facility, address bank, uint256 shareBps) external onlyAgent {\n    syndicate[facility].push(Lender(bank, shareBps, 0));\n  }\n}",
        simAction: "Simulate Syndicate Setup",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading committed shares from 5 banks...", tone: "default" },
          { text: "Validating shares total 100 percent...", tone: "default" },
          { text: "Recording each lender's stake...", tone: "default" },
          { text: "Writing syndicate to storage...", tone: "default" },
          { text: "[SUCCESS] Participation ledger created.", tone: "success" },
        ],
      },
      {
        title: "Drawdown Escrow",
        subtitle: "The Funding Pool",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Funding Pool",
          description:
            "Collects each lender's contribution against its share and releases the pooled funds to the borrower, so a drawdown draws proportionally from the syndicate under one rule.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function drawdown(bytes32 facility, uint256 amount) external onlyBorrower {\n    Lender[] storage ls = syndicate[facility];\n    for (uint i; i < ls.length; i++) {\n      uint256 part = amount * ls[i].shareBps / 10000;\n      ls[i].principal += part;\n      _pull(ls[i].bank, part);\n    }\n    _release(facility, amount);\n}",
        simAction: "Simulate Drawdown",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Borrower requesting a drawdown...", tone: "default" },
          { text: "Computing each lender's contribution...", tone: "default" },
          { text: "Escrowing proportional funding...", tone: "default" },
          { text: "Releasing pooled funds to borrower...", tone: "default" },
          { text: "[SUCCESS] Drawdown funded across syndicate.", tone: "success" },
        ],
      },
      {
        title: "Accrual Engine",
        subtitle: "The Interest Meter",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Interest Meter",
          description:
            "Accrues interest per lender on the outstanding balance, so each bank's entitlement is computed deterministically rather than reconciled from the lead bank's manual figures.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function accrue(bytes32 facility, uint256 rateBps, uint256 daysElapsed) external onlyAgent {\n    Lender[] storage ls = syndicate[facility];\n    for (uint i; i < ls.length; i++) {\n      accrued[facility][ls[i].bank] += ls[i].principal * rateBps * daysElapsed / (10000 * 365);\n    }\n}",
        simAction: "Simulate Interest Accrual",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading outstanding balances per lender...", tone: "default" },
          { text: "Applying the period interest rate...", tone: "default" },
          { text: "Computing accrual for each bank...", tone: "default" },
          { text: "Recording accrued interest...", tone: "default" },
          { text: "[SUCCESS] Interest accrued across syndicate.", tone: "success" },
        ],
      },
      {
        title: "Distribution Clearing",
        subtitle: "The Proportional Splitter",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Proportional Splitter",
          description:
            "Splits each borrower repayment across the syndicate in proportion to stake and pays each lender directly, so servicing happens on-chain without the agent bank distributing manually.",
          platformFunction: "Settlement & Distribution",
        },
        codeSnippet:
          "function distribute(bytes32 facility, uint256 amount) external onlyAgent {\n    Lender[] storage ls = syndicate[facility];\n    for (uint i; i < ls.length; i++) {\n      uint256 part = amount * ls[i].shareBps / 10000;\n      _pay(ls[i].bank, part);\n    }\n    emit Distributed(facility, amount);\n}",
        simAction: "Simulate Repayment Distribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Borrower repayment received...", tone: "default" },
          { text: "Computing each lender's share...", tone: "default" },
          { text: "Paying principal and interest per stake...", tone: "default" },
          { text: "Updating outstanding balances...", tone: "default" },
          { text: "[SUCCESS] Repayment distributed to all lenders.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared loan servicing is a horizontal capability. Here is how different actors rely on one participation ledger.",
    sectors: [
      { icon: Landmark, title: "Lead & Agent Banks", description: "Service a syndicate from a shared ledger instead of a spreadsheet, distributing repayments automatically and removing the reconciliation burden and dispute risk of manual servicing.", assetTypes: ["Facility Records", "Accrual Schedules", "Distribution Runs"] },
      { icon: Handshake, title: "Participating Lenders", description: "See an exact live position and receive proportional payments directly, without depending on the lead bank's calculation of each stake and payment.", assetTypes: ["Participation Shares", "Position Views", "Repayment Receipts"] },
      { icon: Building2, title: "Borrowers & Trustees", description: "Draw and repay against one authoritative facility record, with every allocation across the syndicate handled transparently on-chain.", assetTypes: ["Drawdown Records", "Repayment Schedules", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's loan servicing system or connecting lenders directly, Cerulea routes both into one shared syndication ledger.",
    tracks: [
      {
        title: "Track A: Loan Servicing Bridging",
        description:
          "For agent banks on legacy servicing platforms. Facility events are translated into signed on-chain participation and distribution transactions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Loan Servicing System", sublabel: "Agent Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Event Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Syndication Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Lender Node Access",
        description:
          "For participating lenders on institutional nodes. A lender node reads its live position and receives distributions directly from the shared contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Lender Node", sublabel: "Participating Bank", icon: Fingerprint, accent: false },
          { label: "Syndicate Validators", sublabel: "Distribution Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Participation Record", icon: Handshake, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a syndicated loan ledger with shared participation, automated accrual, proportional distribution, and participation transfer from scratch requires lending engineers and long multi-bank integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Participation & Servicing Rules",
      ruleCount: 42,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects syndicated lending integration benchmarks. Building a shared participation ledger, automated interest accrual, proportional repayment distribution, and participation transfer across banks takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your participation and servicing rules into pre-audited WebAssembly binaries and provisions the syndication ledger and distribution layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "letter-of-credit-lifecycle-automation-with-discrepancy-resolution",
    icon: FileCheck,
    eyebrow: "LC Automation Engine",
    headline1: "Automate the credit.",
    headline2: "Flag every discrepancy.",
    heroDescription:
      "Move a digital letter of credit through issuance, document presentation, and payment automatically, with discrepancies flagged instantly. Automated checking triggers payment when documents match, cutting discrepancy resolution from days to hours.",
    heroCta: "Deploy LC Automation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn manual document examination and slow back-and-forth into instant discrepancy detection and settlement.",
    mechanics: [
      { title: "Digital Credit Issuance", description: "Issue the LC on-chain. The Trade Finance Documents module creates the credit with its terms as one authoritative record shared between banks." },
      { title: "Structured Presentation", description: "Present documents as data. Shipping and trade documents are presented on-chain in structured form, so a machine check can compare them to the credit terms." },
      { title: "Instant Discrepancy Flagging", description: "Catch mismatches immediately. The Compliance Attestations module checks each document against the terms and flags any discrepancy the moment it is presented." },
      { title: "Discrepancy Resolution Loop", description: "Resolve in hours. A flagged discrepancy is routed to both banks with the exact field at fault, replacing days of correspondence with a targeted fix." },
      { title: "Conditional Payment", description: "Pay on clean presentation. The Escrow and Conditional Settlement module releases payment automatically once all documents match the terms." },
      { title: "Full LC Audit Trail", description: "Record every step. Issuance, presentation, discrepancy, and settlement are anchored, so any dispute is settled against a complete record." },
    ],
    lifecycleTitle: "The Credit Lifecycle",
    lifecycleSubtitle:
      "Follow a single letter of credit from issuance through a flagged discrepancy to automatic payment.",
    lifecycleSteps: [
      {
        label: "Credit Issuance",
        description:
          "The issuing bank creates the digital letter of credit with its terms and shares it with the advising bank.",
        icon: FileCheck,
        logFilename: "cerulea_lc_engine.log",
        logLines: [
          { text: "[SYS] Creating digital LC for shipment...", time: "08:45:00", tone: "default" },
          { text: "[CMD] issueLC { lc: \"LC_7788\", amount: 260000 }", time: "08:45:01", tone: "primary" },
          { text: "[AUTH] Anchoring terms and advising bank...", time: "08:45:01", tone: "secondary" },
          { text: "[OK] LC_7788 issued on-chain.", time: "08:45:02", tone: "success" },
        ],
      },
      {
        label: "Document Presentation",
        description:
          "The beneficiary presents structured documents against the credit for automated examination.",
        icon: ScrollText,
        logFilename: "cerulea_lc_engine.log",
        logLines: [
          { text: "[SYS] Beneficiary presenting documents...", time: "12:20:33", tone: "default" },
          { text: "[CMD] present(LC_7788, docs: 7)", time: "12:20:33", tone: "primary" },
          { text: "[SYS] Parsing structured document fields...", time: "12:20:34", tone: "default" },
          { text: "[OK] Documents received for examination.", time: "12:20:34", tone: "success" },
        ],
      },
      {
        label: "Discrepancy Flagging",
        description:
          "The automated check finds a discrepancy on one field and routes it to both banks with the exact fault.",
        icon: Search,
        logFilename: "cerulea_lc_engine.log",
        logLines: [
          { text: "[SYS] Checking documents against terms...", time: "12:21:02", tone: "default" },
          { text: "[CMD] examine(LC_7788)", time: "12:21:02", tone: "primary" },
          { text: "[SYS] Mismatch: shipment date past latest date.", time: "12:21:03", tone: "error" },
          { text: "[OK] Discrepancy flagged to both banks.", time: "12:21:03", tone: "success" },
        ],
      },
      {
        label: "Resolution & Payment",
        description:
          "The discrepancy is resolved and a clean presentation triggers automatic payment within hours.",
        icon: Coins,
        logFilename: "cerulea_lc_engine.log",
        logLines: [
          { text: "[SYS] Amended document re-presented...", time: "15:40:18", tone: "default" },
          { text: "[CMD] examine(LC_7788)", time: "15:40:18", tone: "primary" },
          { text: "[SYS] All documents now comply with terms.", time: "15:40:19", tone: "default" },
          { text: "[OK] Payment released, resolved in hours.", time: "15:40:19", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes LC lifecycle automation into modular contracts. Each layer issues the credit, examines documents, isolates discrepancies, and settles without days of manual back-and-forth.",
    layers: [
      {
        title: "Credit Registry",
        subtitle: "The Digital Credit",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Digital Credit",
          description:
            "The foundational data layer. It mints the letter of credit and its terms as one shared record, giving the examination engine a precise specification to check every document against.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract LcRegistry {\n  struct Credit {\n    address issuing;\n    uint256 amount;\n    uint256 latestShip;\n    bool settled;\n  }\n\n  mapping(bytes32 => Credit) public credits;\n\n  function issue(bytes32 id, uint256 amount, uint256 latestShip) external onlyIssuer {\n    credits[id] = Credit(msg.sender, amount, latestShip, false);\n  }\n}",
        simAction: "Simulate Credit Issuance",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading issuing bank credential...", tone: "default" },
          { text: "Minting the credit and its terms...", tone: "default" },
          { text: "Sharing one version with the advising bank...", tone: "default" },
          { text: "Writing credit to storage...", tone: "default" },
          { text: "[SUCCESS] Digital credit issued on-chain.", tone: "success" },
        ],
      },
      {
        title: "Examination Engine",
        subtitle: "The Automated Checker",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automated Checker",
          description:
            "Compares each presented document's structured fields against the credit terms and isolates the exact point of any mismatch, replacing subjective manual examination with a deterministic check.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function examine(bytes32 lcId) public view returns (bool, string memory) {\n    Credit memory c = credits[lcId];\n    if (shipDate[lcId] > c.latestShip) return (false, \"Shipment past latest date\");\n    if (invoiceAmt[lcId] > c.amount) return (false, \"Amount exceeds credit\");\n    return (true, \"\");\n}",
        simAction: "Simulate Document Examination",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading credit terms for LC_7788...", tone: "default" },
          { text: "Comparing shipment date to latest date...", tone: "default" },
          { text: "Comparing invoice amount to credit...", tone: "default" },
          { text: "Isolating the exact discrepancy...", tone: "default" },
          { text: "[SUCCESS] Examination complete, fault located.", tone: "success" },
        ],
      },
      {
        title: "Discrepancy Router",
        subtitle: "The Resolution Loop",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Resolution Loop",
          description:
            "Routes a flagged discrepancy to both banks with the field at fault attached, turning days of correspondence into a targeted correction and re-presentation measured in hours.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function flag(bytes32 lcId, string calldata reason) external onlyChecker {\n    discrepancies[lcId].push(Flag(reason, block.timestamp, false));\n    emit DiscrepancyRaised(lcId, reason);\n}",
        simAction: "Simulate Discrepancy Routing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Recording the flagged discrepancy...", tone: "default" },
          { text: "Attaching the exact field at fault...", tone: "default" },
          { text: "Routing to issuing and advising banks...", tone: "default" },
          { text: "Awaiting corrected presentation...", tone: "default" },
          { text: "[SUCCESS] Discrepancy routed for resolution.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Clean-Presentation Trigger",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Clean-Presentation Trigger",
          description:
            "Releases payment the moment a presentation is clean of discrepancies, binding settlement to a compliant document set so payment follows resolution automatically.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(bytes32 lcId) external onlyBank {\n    (bool ok, ) = examine(lcId);\n    require(ok, \"Unresolved discrepancy\");\n    require(!credits[lcId].settled, \"Already settled\");\n    credits[lcId].settled = true;\n    _release(lcId, beneficiary[lcId], credits[lcId].amount);\n}",
        simAction: "Simulate Payment Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Re-examining the amended presentation...", tone: "default" },
          { text: "Confirming no discrepancy remains...", tone: "default" },
          { text: "Releasing escrow to the beneficiary...", tone: "default" },
          { text: "Marking the credit settled...", tone: "default" },
          { text: "[SUCCESS] Payment released within hours.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automated LC handling is a horizontal capability. Here is how different actors rely on instant discrepancy resolution.",
    sectors: [
      { icon: Landmark, title: "Issuing & Advising Banks", description: "Examine documents automatically and resolve discrepancies in hours, replacing subjective manual checking and slow correspondence with a deterministic, auditable flow.", assetTypes: ["Digital Credits", "Examination Results", "Settlement Proofs"] },
      { icon: Truck, title: "Exporters & Importers", description: "Present documents in structured form and see exactly what to fix when a discrepancy is flagged, getting paid the moment a clean presentation is accepted.", assetTypes: ["Presented Documents", "Discrepancy Notices", "Payment Receipts"] },
      { icon: FileCheck, title: "Trade Auditors", description: "Trace an LC's full lifecycle from issuance to settlement in one anchored record, settling any dispute against complete evidence.", assetTypes: ["Lifecycle Trails", "Discrepancy Logs", "Audit Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's trade finance system or connecting corporates to present documents, Cerulea routes both into one automated LC record.",
    tracks: [
      {
        title: "Track A: Bank System Bridging",
        description:
          "For banks on legacy trade platforms. Document and credit events are translated into signed on-chain LC transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Trade Finance System", sublabel: "Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Document Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "LC Automation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Corporate Presentation",
        description:
          "For exporters and importers on a portal. A corporate wallet signs each structured presentation and routes it directly to the examination engine.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Corporate Portal", sublabel: "Exporter / Importer", icon: Fingerprint, accent: false },
          { label: "Examination Validators", sublabel: "Discrepancy Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Automated LC Record", icon: FileCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a letter of credit automation engine with digital issuance, structured presentation, instant discrepancy flagging, and conditional settlement from scratch requires trade finance engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Examination & Settlement Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects trade finance automation benchmarks. Building digital issuance, structured document examination, discrepancy routing, and conditional settlement for an average corridor takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your examination and settlement rules into pre-audited WebAssembly binaries and provisions the LC automation ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "escrow-account-management-for-real-estate-transactions",
    icon: Home,
    eyebrow: "Real Estate Escrow Engine",
    headline1: "Hold the funds.",
    headline2: "Release on proof.",
    heroDescription:
      "Run a bank-managed escrow for real estate that releases funds automatically once verified conditions, like registration completion, are met. Each condition is anchored as it is confirmed, so the release fires the moment all conditions are verifiably satisfied.",
    heroCta: "Deploy Real Estate Escrow",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn manual document review and slow fund release into a condition-driven automatic escrow.",
    mechanics: [
      { title: "Conditional Escrow Vault", description: "Hold funds against rules. The Escrow and Conditional Settlement module locks the buyer's funds until every agreed condition is verifiably met." },
      { title: "Verified Condition Anchoring", description: "Confirm each milestone. The Provenance Notary module anchors each condition, like registration or encumbrance clearance, as it is confirmed against a trusted source." },
      { title: "Automatic Release", description: "Fire on completion. When the last condition is verified, the escrow releases funds to the seller automatically, with no manual sign-off delay." },
      { title: "Compliance Verification", description: "Keep the release lawful. The Compliance Attestations module checks each condition confirmation against the required legal steps before it counts toward release." },
      { title: "Dispute-Proof Trail", description: "Settle from evidence. Every condition confirmation is recorded, so a dispute over whether a condition was met is resolved against an anchored record." },
      { title: "Party Visibility", description: "Show both sides the status. Buyer and seller see exactly which conditions are met and what remains, replacing anxious phone calls to the branch." },
    ],
    lifecycleTitle: "The Escrow Lifecycle",
    lifecycleSubtitle:
      "Follow a single property sale from fund lock through condition verification to automatic release.",
    lifecycleSteps: [
      {
        label: "Escrow Funding",
        description:
          "The buyer deposits the purchase funds into the escrow vault, locked against the sale's agreed conditions.",
        icon: Home,
        logFilename: "cerulea_escrow_engine.log",
        logLines: [
          { text: "[SYS] Opening escrow for property deal RE_552...", time: "10:00:00", tone: "default" },
          { text: "[CMD] fundEscrow { deal: \"RE_552\", amount: 8500000 }", time: "10:00:01", tone: "primary" },
          { text: "[AUTH] Locking funds against 3 conditions...", time: "10:00:01", tone: "secondary" },
          { text: "[OK] Escrow funded and locked.", time: "10:00:02", tone: "success" },
        ],
      },
      {
        label: "Condition Confirmation",
        description:
          "As registration and encumbrance clearance complete, each condition is confirmed and anchored.",
        icon: FileCheck,
        logFilename: "cerulea_escrow_engine.log",
        logLines: [
          { text: "[SYS] Registration confirmation received...", time: "14:30:20", tone: "default" },
          { text: "[CMD] confirmCondition(RE_552, \"REGISTRATION\")", time: "14:30:20", tone: "primary" },
          { text: "[AUTH] Verifying against sub-registrar record...", time: "14:30:21", tone: "secondary" },
          { text: "[OK] Condition anchored, 2 of 3 met.", time: "14:30:21", tone: "success" },
        ],
      },
      {
        label: "Final Verification",
        description:
          "The last condition is verified and checked against the required legal steps, satisfying all release rules.",
        icon: ShieldCheck,
        logFilename: "cerulea_escrow_engine.log",
        logLines: [
          { text: "[SYS] Encumbrance clearance received...", time: "16:10:44", tone: "default" },
          { text: "[CMD] confirmCondition(RE_552, \"ENCUMBRANCE\")", time: "16:10:44", tone: "primary" },
          { text: "[SYS] All 3 conditions verifiably met.", time: "16:10:45", tone: "default" },
          { text: "[OK] Release rules satisfied.", time: "16:10:45", tone: "success" },
        ],
      },
      {
        label: "Automatic Release",
        description:
          "The escrow releases the funds to the seller automatically the moment all conditions are met.",
        icon: Coins,
        logFilename: "cerulea_escrow_engine.log",
        logLines: [
          { text: "[SYS] All conditions met, releasing funds...", time: "16:11:02", tone: "default" },
          { text: "[CMD] release(RE_552, seller)", time: "16:11:02", tone: "primary" },
          { text: "[SYS] Escrow released without manual sign-off.", time: "16:11:03", tone: "default" },
          { text: "[OK] Seller paid, deal closed.", time: "16:11:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes real estate escrow into modular contracts. Each layer locks funds, verifies conditions, checks compliance, and releases without a manual review delay.",
    layers: [
      {
        title: "Escrow Vault",
        subtitle: "The Locked Funds",
        icon: Home,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Locked Funds",
          description:
            "The foundational data layer. It holds the buyer's funds and binds them to the sale's condition set, so money can only move when every condition is verifiably satisfied.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract EscrowVault {\n  struct Deal {\n    address buyer;\n    address seller;\n    uint256 amount;\n    uint8 conditionsMet;\n    uint8 conditionsTotal;\n  }\n\n  mapping(bytes32 => Deal) public deals;\n\n  function fund(bytes32 id, address seller, uint8 total) external payable {\n    deals[id] = Deal(msg.sender, seller, msg.value, 0, total);\n  }\n}",
        simAction: "Simulate Escrow Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading buyer deposit for RE_552...", tone: "default" },
          { text: "Binding funds to 3 sale conditions...", tone: "default" },
          { text: "Locking the escrow vault...", tone: "default" },
          { text: "Writing deal to storage...", tone: "default" },
          { text: "[SUCCESS] Escrow funded and locked.", tone: "success" },
        ],
      },
      {
        title: "Condition Notary",
        subtitle: "The Milestone Seal",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Milestone Seal",
          description:
            "Anchors each condition as it is confirmed against a trusted source, turning registration and encumbrance clearance into verifiable milestones rather than a manual document read.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function confirmCondition(bytes32 id, bytes32 kind, bytes calldata proof) external onlyNotary {\n    require(verifySource(kind, proof), \"Unverified\");\n    conditions[id][kind] = true;\n    deals[id].conditionsMet++;\n    emit ConditionMet(id, kind);\n}",
        simAction: "Simulate Condition Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving registration confirmation...", tone: "default" },
          { text: "Verifying against sub-registrar record...", tone: "default" },
          { text: "Anchoring the condition as met...", tone: "default" },
          { text: "Incrementing conditions satisfied...", tone: "default" },
          { text: "[SUCCESS] Condition anchored, milestone sealed.", tone: "success" },
        ],
      },
      {
        title: "Compliance Guard",
        subtitle: "The Legal Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Legal Check",
          description:
            "Validates each condition confirmation against the required legal steps before it counts toward release, so funds never move on an incomplete or improperly evidenced condition.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function readyToRelease(bytes32 id) public view returns (bool) {\n    Deal memory d = deals[id];\n    if (d.conditionsMet < d.conditionsTotal) return false;\n    return complianceOk[id];\n}",
        simAction: "Simulate Compliance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Checking all conditions are confirmed...", tone: "default" },
          { text: "Validating required legal steps...", tone: "default" },
          { text: "Confirming compliance evidence...", tone: "default" },
          { text: "Marking the deal ready to release...", tone: "default" },
          { text: "[SUCCESS] Release rules satisfied.", tone: "success" },
        ],
      },
      {
        title: "Release Trigger",
        subtitle: "The Automatic Close",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Close",
          description:
            "Releases the escrow to the seller the instant all conditions and compliance checks pass, so neither party waits on a manual sign-off once the deal is verifiably complete.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function release(bytes32 id) external {\n    require(readyToRelease(id), \"Conditions unmet\");\n    Deal storage d = deals[id];\n    require(d.amount > 0, \"Already released\");\n    uint256 amt = d.amount; d.amount = 0;\n    payable(d.seller).transfer(amt);\n}",
        simAction: "Simulate Automatic Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming the deal is ready to release...", tone: "default" },
          { text: "Checking funds are still held...", tone: "default" },
          { text: "Transferring funds to the seller...", tone: "default" },
          { text: "Closing the escrow...", tone: "default" },
          { text: "[SUCCESS] Seller paid, deal closed automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Condition-driven escrow is a horizontal capability. Here is how different actors rely on automatic release.",
    sectors: [
      { icon: Landmark, title: "Banks & Escrow Agents", description: "Manage property escrow with automatic release on verified conditions, removing the manual document review that slows every closing and inviting fewer disputes.", assetTypes: ["Escrow Vaults", "Condition Records", "Release Proofs"] },
      { icon: Home, title: "Buyers & Sellers", description: "See exactly which conditions are met and receive or release funds the moment the deal is verifiably complete, replacing uncertain waits with a live status.", assetTypes: ["Deposits", "Condition Views", "Payment Receipts"] },
      { icon: Gavel, title: "Registrars & Legal Advisors", description: "Confirm registration and encumbrance status into a verifiable record, so an escrow release rests on trusted legal milestones rather than a scan of paperwork.", assetTypes: ["Registration Confirmations", "Encumbrance Records", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's escrow system or connecting registrar data, Cerulea routes both into one condition-driven escrow record.",
    tracks: [
      {
        title: "Track A: Bank Escrow Bridging",
        description:
          "For banks on legacy escrow systems. Deposit and condition events are translated into signed on-chain escrow transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Escrow System", sublabel: "Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Condition Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Real Estate Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Registrar Data Feed",
        description:
          "For registration and encumbrance data. Signed confirmations route through decentralized oracles directly into the condition notary.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Registrar Feed", sublabel: "Sub-Registrar / Registry", icon: FileCheck, accent: false },
          { label: "Decentralized Oracles", sublabel: "Condition Attestation", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Escrow Condition Record", icon: Home, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a condition-driven real estate escrow with a locked vault, verified condition anchoring, compliance checks, and automatic release from scratch requires banking engineers and long registry integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Condition & Release Rules",
      ruleCount: 33,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects escrow and registry integration benchmarks. Building a conditional escrow vault, verified condition anchoring, compliance checks, and automatic release for an average deal type takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your condition and release rules into pre-audited WebAssembly binaries and provisions the escrow ledger and release layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "corporate-cash-pooling-and-intercompany-loan-tracking",
    icon: Coins,
    eyebrow: "Treasury Pooling Engine",
    headline1: "Pool the cash.",
    headline2: "Track every loan.",
    heroDescription:
      "Give group treasury a consolidated view of cash positions and intercompany loans across subsidiaries, with interest calculated automatically on pooled balances. Each subsidiary's contribution and drawdown is tracked, so transfer-pricing interest is computed rather than reconstructed.",
    heroCta: "Deploy Treasury Pooling",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manual intercompany accounting effort into a live pooled position with automated interest.",
    mechanics: [
      { title: "Consolidated Cash View", description: "See the whole group at once. The pool records every subsidiary's balance on one ledger, giving treasury a real-time consolidated position across the group." },
      { title: "Intercompany Loan Ledger", description: "Track every internal loan. When one subsidiary's surplus funds another, the loan is recorded with its counterparties, amount, and rate on-chain." },
      { title: "Automated Interest Calculation", description: "Compute transfer-pricing interest. The Escrow and Conditional Settlement module accrues interest on each intercompany position at the agreed rate automatically." },
      { title: "Contribution & Drawdown Tracking", description: "Attribute every movement. Each subsidiary's contribution to and drawdown from the pool is logged, so its net position is always exact." },
      { title: "Immutable Audit Trail", description: "Satisfy transfer pricing. The Audit Logs module seals every pool movement and interest accrual as an immutable record for tax and audit review." },
      { title: "Compliance Attestation", description: "Support the tax position. The Compliance Attestations module attests that intercompany interest was applied at agreed rates, backing the group's transfer-pricing documentation." },
    ],
    lifecycleTitle: "The Pooling Lifecycle",
    lifecycleSubtitle:
      "Follow surplus cash from one subsidiary through an intercompany loan to automatic interest accrual.",
    lifecycleSteps: [
      {
        label: "Pool Contribution",
        description:
          "A subsidiary with surplus cash contributes it to the group pool, recorded against its net position.",
        icon: Coins,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Subsidiary A contributing surplus...", time: "09:20:00", tone: "default" },
          { text: "[CMD] contribute(pool: \"GRP_11\", sub: \"A\", amount: 12000000)", time: "09:20:01", tone: "primary" },
          { text: "[AUTH] Updating subsidiary net position...", time: "09:20:01", tone: "secondary" },
          { text: "[OK] Contribution recorded to pool.", time: "09:20:02", tone: "success" },
        ],
      },
      {
        label: "Intercompany Drawdown",
        description:
          "Another subsidiary draws from the pool, creating a tracked intercompany loan at the agreed rate.",
        icon: Workflow,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Subsidiary B drawing from pool...", time: "10:45:33", tone: "default" },
          { text: "[CMD] drawdown(GRP_11, sub: \"B\", amount: 5000000, rate: 800)", time: "10:45:33", tone: "primary" },
          { text: "[SYS] Intercompany loan A to B recorded.", time: "10:45:34", tone: "default" },
          { text: "[OK] Loan created with agreed rate.", time: "10:45:34", tone: "success" },
        ],
      },
      {
        label: "Interest Accrual",
        description:
          "Interest accrues on the intercompany loan at the agreed rate, computed automatically for transfer pricing.",
        icon: Activity,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Accruing intercompany interest...", time: "00:05:00", tone: "default" },
          { text: "[CMD] accrue(GRP_11, loan: \"A_B_1\")", time: "00:05:00", tone: "primary" },
          { text: "[SYS] Interest computed at 8.00% agreed rate.", time: "00:05:01", tone: "default" },
          { text: "[OK] Accrual recorded for transfer pricing.", time: "00:05:01", tone: "success" },
        ],
      },
      {
        label: "Consolidated Reporting",
        description:
          "Treasury pulls the consolidated position, with every contribution, loan, and accrual attributed and attested.",
        icon: PieChart,
        logFilename: "cerulea_treasury_engine.log",
        logLines: [
          { text: "[SYS] Treasury requesting group position...", time: "18:00:10", tone: "default" },
          { text: "[CMD] consolidate(GRP_11)", time: "18:00:10", tone: "primary" },
          { text: "[SYS] Aggregating positions across subsidiaries...", time: "18:00:11", tone: "default" },
          { text: "[OK] Verified consolidated position returned.", time: "18:00:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes corporate cash pooling into modular contracts. Each layer records contributions, tracks intercompany loans, accrues interest, and consolidates without a manual accounting effort.",
    layers: [
      {
        title: "Pool Ledger",
        subtitle: "The Group Position",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Group Position",
          description:
            "The foundational data layer. It records each subsidiary's balance and net position in the pool, giving treasury one authoritative consolidated view instead of a periodic manual roll-up.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract PoolLedger {\n  struct Sub {\n    int256 netPosition;\n  }\n\n  mapping(bytes32 => mapping(bytes32 => Sub)) public subs;\n\n  function contribute(bytes32 pool, bytes32 sub, uint256 amount) external onlyTreasury {\n    subs[pool][sub].netPosition += int256(amount);\n    poolBalance[pool] += amount;\n  }\n}",
        simAction: "Simulate Pool Contribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading surplus from Subsidiary A...", tone: "default" },
          { text: "Updating its net pool position...", tone: "default" },
          { text: "Increasing the group pool balance...", tone: "default" },
          { text: "Writing position to storage...", tone: "default" },
          { text: "[SUCCESS] Contribution recorded to pool.", tone: "success" },
        ],
      },
      {
        title: "Loan Tracker",
        subtitle: "The Intercompany Record",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Intercompany Record",
          description:
            "Records every intercompany loan created when one subsidiary draws on another's surplus, with counterparties, amount, and rate, so the internal lending map is always explicit.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function drawdown(bytes32 pool, bytes32 from, bytes32 to, uint256 amount, uint256 rateBps) external onlyTreasury {\n    loans[pool].push(Loan(from, to, amount, rateBps, block.timestamp));\n    subs[pool][to].netPosition -= int256(amount);\n    emit IntercoLoan(pool, from, to, amount, rateBps);\n}",
        simAction: "Simulate Intercompany Loan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Subsidiary B drawing from the pool...", tone: "default" },
          { text: "Recording intercompany loan A to B...", tone: "default" },
          { text: "Setting the agreed interest rate...", tone: "default" },
          { text: "Updating net positions...", tone: "default" },
          { text: "[SUCCESS] Intercompany loan tracked.", tone: "success" },
        ],
      },
      {
        title: "Interest Engine",
        subtitle: "The Transfer-Pricing Meter",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transfer-Pricing Meter",
          description:
            "Accrues interest on each intercompany loan at the agreed rate, computing transfer-pricing interest deterministically rather than reconstructing it in a spreadsheet at period end.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function accrue(bytes32 pool, uint256 loanId, uint256 daysElapsed) external onlyTreasury {\n    Loan storage l = loans[pool][loanId];\n    uint256 interest = l.amount * l.rateBps * daysElapsed / (10000 * 365);\n    accruedInterest[pool][loanId] += interest;\n}",
        simAction: "Simulate Interest Accrual",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the intercompany loan balance...", tone: "default" },
          { text: "Applying the agreed transfer-pricing rate...", tone: "default" },
          { text: "Computing interest for the period...", tone: "default" },
          { text: "Recording the accrual...", tone: "default" },
          { text: "[SUCCESS] Intercompany interest accrued.", tone: "success" },
        ],
      },
      {
        title: "Consolidation View",
        subtitle: "The Treasury Window",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Treasury Window",
          description:
            "Aggregates positions, loans, and accruals into a verified consolidated view, so treasury and auditors read one attested group position rather than assembling subsidiary reports by hand.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function consolidate(bytes32 pool) external view returns (uint256 balance, uint256 loanCount) {\n    return (poolBalance[pool], loans[pool].length);\n}",
        simAction: "Simulate Consolidated Report",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Treasury requesting group position...", tone: "default" },
          { text: "Aggregating subsidiary balances...", tone: "default" },
          { text: "Summing intercompany loans and accruals...", tone: "default" },
          { text: "Attesting the consolidated figures...", tone: "default" },
          { text: "[SUCCESS] Verified consolidated position returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Consolidated pooling is a horizontal capability. Here is how different actors rely on a live intercompany record.",
    sectors: [
      { icon: Building2, title: "Group Treasury", description: "Operate cash pooling with a live consolidated position and automated intercompany interest, replacing a heavy manual accounting effort with a verified real-time record.", assetTypes: ["Pool Positions", "Intercompany Loans", "Interest Accruals"] },
      { icon: Landmark, title: "Subsidiary Finance Teams", description: "See an exact net position in the pool and the interest on every drawdown, removing disputes over how much each entity contributed or owes.", assetTypes: ["Contributions", "Drawdowns", "Net Positions"] },
      { icon: Scale, title: "Tax & Audit Functions", description: "Rely on an attested trail that intercompany interest was applied at agreed rates, backing transfer-pricing documentation with verifiable evidence.", assetTypes: ["Audit Trails", "Rate Attestations", "Transfer-Pricing Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging subsidiary ERP systems or connecting the treasury workstation, Cerulea routes both into one pooled position record.",
    tracks: [
      {
        title: "Track A: Subsidiary ERP Bridging",
        description:
          "For subsidiaries on legacy ERP. Cash movements are translated into signed on-chain contributions and drawdowns through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Subsidiary ERP", sublabel: "Entity Finance System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Movement Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Cash Pool Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Treasury Workstation",
        description:
          "For the group treasury desk. The workstation records pool rules and reads the consolidated position directly from the pool contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Treasury Workstation", sublabel: "Group Treasury", icon: Fingerprint, accent: false },
          { label: "Pool Validators", sublabel: "Position Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Consolidated Pool Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a cash pooling system with a consolidated view, intercompany loan tracking, automated interest, and a transfer-pricing audit trail from scratch requires treasury engineers and long ERP integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Pooling & Interest Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects treasury system integration benchmarks. Building a consolidated pool ledger, intercompany loan tracking, automated interest accrual, and a transfer-pricing audit trail across subsidiaries takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your pooling and interest rules into pre-audited WebAssembly binaries and provisions the cash pool ledger and consolidation view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "securities-tokenization-and-fractional-ownership",
    icon: Boxes,
    eyebrow: "Securities Tokenization Engine",
    headline1: "Tokenize the asset.",
    headline2: "Unlock the liquidity.",
    heroDescription:
      "Make high-value assets like real estate, private equity, and bonds accessible to retail investors through fractional tokens, with distributions automated and secondary liquidity enabled. A property that once needed a large minimum becomes thousands of tradable fractional holdings.",
    heroCta: "Deploy Tokenization Platforms",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an illiquid, high-minimum asset into a distributable, tradable fractional security.",
    mechanics: [
      { title: "Asset Fractionalization", description: "Break the minimum. The ERC-1155 Multi-Token module splits a high-value asset into fractional tokens, so a retail investor can own a slice instead of the whole." },
      { title: "Securities Lifecycle Control", description: "Govern the token as a security. The Securities Lifecycle module manages issuance, corporate actions, and redemption within the asset's legal wrapper." },
      { title: "Automated Distributions", description: "Pay income on-chain. Rental yield, dividends, or coupon payments are split pro-rata and disbursed to every token holder automatically." },
      { title: "Secondary Liquidity", description: "Enable trading. The ERC-20 Token module gives fractional holdings a liquid form, so holders can sell on a secondary market rather than wait for a full exit." },
      { title: "Compliance-Gated Transfers", description: "Keep holders eligible. Every transfer checks investor eligibility, so the tokenized security stays inside its regulatory perimeter." },
      { title: "Verifiable Cap Table", description: "Anchor ownership. The full holder register lives on-chain, giving issuers and regulators a verifiable, real-time cap table." },
    ],
    lifecycleTitle: "The Tokenization Lifecycle",
    lifecycleSubtitle:
      "Follow a single asset from tokenization through retail investment to an automated distribution and secondary trade.",
    lifecycleSteps: [
      {
        label: "Asset Tokenization",
        description:
          "A high-value asset is wrapped and fractionalized into tokens, with the legal structure anchored to the issuance.",
        icon: Boxes,
        logFilename: "cerulea_tokenize_engine.log",
        logLines: [
          { text: "[SYS] Tokenizing commercial property PROP_88...", time: "09:00:00", tone: "default" },
          { text: "[CMD] tokenize { asset: \"PROP_88\", fractions: 5000, price: 10000 }", time: "09:00:01", tone: "primary" },
          { text: "[AUTH] Anchoring legal wrapper to issuance...", time: "09:00:01", tone: "secondary" },
          { text: "[OK] 5000 fractional tokens minted.", time: "09:00:02", tone: "success" },
        ],
      },
      {
        label: "Retail Investment",
        description:
          "Retail investors each buy a fractional holding after eligibility checks, and the cap table updates on-chain.",
        icon: Wallet,
        logFilename: "cerulea_tokenize_engine.log",
        logLines: [
          { text: "[SYS] Processing retail subscriptions...", time: "11:30:41", tone: "default" },
          { text: "[CMD] invest(PROP_88, investor, fractions: 1)", time: "11:30:41", tone: "primary" },
          { text: "[AUTH] Eligibility check passed for investor.", time: "11:30:42", tone: "secondary" },
          { text: "[OK] 5000 investors hold PROP_88 fractions.", time: "11:30:42", tone: "success" },
        ],
      },
      {
        label: "Distribution Payout",
        description:
          "Quarterly rental income is split pro-rata and paid to every token holder automatically on-chain.",
        icon: Coins,
        logFilename: "cerulea_tokenize_engine.log",
        logLines: [
          { text: "[SYS] Quarterly rental distribution declared...", time: "10:15:22", tone: "default" },
          { text: "[CMD] distribute(PROP_88, perFraction: 180)", time: "10:15:22", tone: "primary" },
          { text: "[SYS] Splitting across 5000 holders...", time: "10:15:23", tone: "default" },
          { text: "[OK] Rental income paid to all holders.", time: "10:15:24", tone: "success" },
        ],
      },
      {
        label: "Secondary Trade",
        description:
          "A holder sells fractions on the secondary market and the transfer settles after an eligibility check.",
        icon: Activity,
        logFilename: "cerulea_tokenize_engine.log",
        logLines: [
          { text: "[SYS] Secondary sale order for PROP_88...", time: "14:50:09", tone: "default" },
          { text: "[CMD] trade(PROP_88, seller, buyer, fractions: 1)", time: "14:50:09", tone: "primary" },
          { text: "[AUTH] Buyer eligibility verified.", time: "14:50:10", tone: "secondary" },
          { text: "[OK] Fractions traded on secondary market.", time: "14:50:10", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes securities tokenization into modular contracts. Each layer fractionalizes the asset, distributes income, enables trading, and gates eligibility while anchoring the cap table.",
    layers: [
      {
        title: "Asset Registry",
        subtitle: "The Fractional Wrapper",
        icon: Boxes,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fractional Wrapper",
          description:
            "The foundational data layer. It wraps a high-value asset in a legal structure and mints its fractional token class, forming the origin every holding and distribution points back to.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AssetRegistry {\n  struct Asset {\n    bytes32 legalRef;\n    uint256 fractions;\n    uint256 pricePerFraction;\n  }\n\n  mapping(bytes32 => Asset) public assets;\n\n  function tokenize(bytes32 id, bytes32 legalRef, uint256 fractions, uint256 price) external onlyIssuer {\n    assets[id] = Asset(legalRef, fractions, price);\n  }\n}",
        simAction: "Simulate Asset Tokenization",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the asset's legal wrapper...", tone: "default" },
          { text: "Setting fraction count and price...", tone: "default" },
          { text: "Minting the fractional token class...", tone: "default" },
          { text: "Writing asset to Level 1 storage...", tone: "default" },
          { text: "[SUCCESS] Asset tokenized on-chain.", tone: "success" },
        ],
      },
      {
        title: "Distribution Router",
        subtitle: "The Income Splitter",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Income Splitter",
          description:
            "Splits asset income pro-rata across every fractional holder and pushes payouts to wallets, so rental yield or coupons flow automatically instead of through a manual distribution.",
          platformFunction: "Settlement & Distribution",
        },
        codeSnippet:
          "function distribute(bytes32 assetId, uint256 perFraction) external onlyIssuer {\n    uint256 total = perFraction * assets[assetId].fractions;\n    require(treasury[assetId] >= total, \"Underfunded\");\n    emit DistributionDeclared(assetId, perFraction);\n    _streamToHolders(assetId, perFraction);\n}",
        simAction: "Simulate Distribution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Declaring rental income per fraction...", tone: "default" },
          { text: "Checking treasury covers the distribution...", tone: "default" },
          { text: "Computing each holder's share...", tone: "default" },
          { text: "Streaming payouts to holders...", tone: "default" },
          { text: "[SUCCESS] Income distributed to all holders.", tone: "success" },
        ],
      },
      {
        title: "Liquidity Market",
        subtitle: "The Secondary Venue",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Secondary Venue",
          description:
            "Gives fractional holdings a liquid, tradable form so holders can exit part of a position on a secondary market rather than waiting for a full asset sale.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function trade(bytes32 assetId, address seller, address buyer, uint256 fractions) external {\n    require(eligible[buyer], \"Buyer not eligible\");\n    require(holdings[assetId][seller] >= fractions, \"Insufficient\");\n    holdings[assetId][seller] -= fractions;\n    holdings[assetId][buyer] += fractions;\n    emit Traded(assetId, seller, buyer, fractions);\n}",
        simAction: "Simulate Secondary Trade",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving a secondary sale order...", tone: "default" },
          { text: "Verifying buyer eligibility...", tone: "default" },
          { text: "Confirming seller holding...", tone: "default" },
          { text: "Settling the fractional transfer...", tone: "default" },
          { text: "[SUCCESS] Fractions traded on secondary market.", tone: "success" },
        ],
      },
      {
        title: "Cap Table Guard",
        subtitle: "The Eligibility Register",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Eligibility Register",
          description:
            "Gates every transfer on investor eligibility and maintains the on-chain holder register, giving issuers and regulators a verifiable, real-time cap table.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function _beforeTransfer(bytes32 assetId, address to, uint256 fractions) internal view {\n    require(eligible[to], \"Holder not eligible\");\n    require(holderCount[assetId] < maxHolders[assetId] || holdings[assetId][to] > 0, \"Cap reached\");\n}",
        simAction: "Simulate Eligibility Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Transfer requested to a new holder...", tone: "default" },
          { text: "Verifying investor eligibility...", tone: "default" },
          { text: "Checking holder cap limits...", tone: "default" },
          { text: "Updating the on-chain cap table...", tone: "default" },
          { text: "[SUCCESS] Transfer cleared, cap table updated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Securities tokenization is a horizontal capability. Here is how different asset classes put fractional ownership to work.",
    sectors: [
      { icon: Home, title: "Real Estate", description: "Fractionalize commercial and residential property so thousands of retail investors share ownership, receiving rental income automatically and trading holdings on a secondary market.", assetTypes: ["Property Fractions", "Rental Distributions", "Secondary Trades"] },
      { icon: Landmark, title: "Private Equity & Bonds", description: "Open private equity stakes and bond lots to smaller investors with automated coupon and dividend flows, unlocking liquidity for assets that were previously locked up.", assetTypes: ["Equity Fractions", "Bond Lots", "Coupon Payouts"] },
      { icon: Palette, title: "Alternative Assets", description: "Tokenize art, collectibles, and other high-value alternatives into tradable fractions, giving illiquid assets a verifiable cap table and a path to secondary liquidity.", assetTypes: ["Art Fractions", "Collectible Tokens", "Ownership Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an issuer's registry or serving retail investors from a wallet, Cerulea routes both into one tokenized security record.",
    tracks: [
      {
        title: "Track A: Issuer Registry Bridging",
        description:
          "For issuers on legacy registry and transfer-agent systems. Ownership and corporate actions are translated into signed on-chain token events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Registry / Transfer Agent", sublabel: "Issuer System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Cap Table Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Tokenized Security Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Retail Wallet Access",
        description:
          "For retail investors on mobile. A wallet signs each investment and secondary trade and routes it directly to the compliance-gated token contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Investor Wallet", sublabel: "Retail Mobile App", icon: Fingerprint, accent: false },
          { label: "Eligibility Validators", sublabel: "Transfer Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Fractional Security Record", icon: Boxes, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a securities tokenization platform with fractionalization, automated distributions, secondary liquidity, and a compliant cap table from scratch requires securities engineers and long legal integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Tokenization & Compliance Rules",
      ruleCount: 48,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects tokenized securities benchmarks. Building asset fractionalization, automated distributions, a compliant secondary market, and an on-chain cap table for an average asset class takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your tokenization and compliance rules into pre-audited WebAssembly binaries and provisions the tokenized security ledger and secondary market instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "ipo-subscription-and-allotment-transparency-for-retail-investors",
    icon: Ticket,
    eyebrow: "IPO Allotment Layer",
    headline1: "Record every application.",
    headline2: "Prove the allotment.",
    heroDescription:
      "Give retail investors a transparent IPO subscription record where they can verify their application was received and see exactly how allotment was calculated. Every application and the allotment logic is anchored, so investors confirm status without relying solely on the registrar.",
    heroCta: "Deploy IPO Transparency",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an opaque subscription and allotment process into a verifiable, investor-checkable record.",
    mechanics: [
      { title: "Anchored Application", description: "Confirm receipt. The Securities Lifecycle module records each subscription application as an anchored record, so an investor can prove their bid was received." },
      { title: "Verified Applicant Identity", description: "Bind bids to investors. The KYC and Identity Verification module ties each application to a verified identity, preventing duplicate or benami applications." },
      { title: "Transparent Allotment Logic", description: "Publish the method. The allotment calculation runs on-chain, so investors see exactly how shares were allocated in an oversubscribed issue." },
      { title: "Oversubscription Fairness", description: "Prove the lottery. Where allotment is by lottery, the draw uses a verifiable process, so no applicant can claim the outcome was manipulated." },
      { title: "Immutable Allotment Record", description: "Seal the result. The Audit Logs module anchors the final allotment, so the outcome cannot be quietly changed after publication." },
      { title: "Investor Status View", description: "End the uncertainty. Each applicant queries their own application and allotment status directly instead of waiting for a registrar announcement." },
    ],
    lifecycleTitle: "The Subscription Lifecycle",
    lifecycleSubtitle:
      "Follow a single retail application from submission through a verifiable allotment to investor confirmation.",
    lifecycleSteps: [
      {
        label: "Application Submission",
        description:
          "A retail investor submits an IPO application, anchored to their verified identity and bid details.",
        icon: Ticket,
        logFilename: "cerulea_ipo_engine.log",
        logLines: [
          { text: "[SYS] Receiving retail IPO application...", time: "10:05:00", tone: "default" },
          { text: "[CMD] apply { issue: \"IPO_44\", lots: 2, price: 340 }", time: "10:05:01", tone: "primary" },
          { text: "[AUTH] Binding application to verified identity...", time: "10:05:01", tone: "secondary" },
          { text: "[OK] Application APP_20981 anchored.", time: "10:05:02", tone: "success" },
        ],
      },
      {
        label: "Book Close",
        description:
          "The subscription window closes and the total book, including the oversubscription level, is anchored.",
        icon: ScrollText,
        logFilename: "cerulea_ipo_engine.log",
        logLines: [
          { text: "[SYS] Closing subscription book for IPO_44...", time: "17:00:00", tone: "default" },
          { text: "[CMD] closeBook(IPO_44)", time: "17:00:01", tone: "primary" },
          { text: "[SYS] Retail category oversubscribed 4.2x.", time: "17:00:01", tone: "default" },
          { text: "[OK] Final book anchored for allotment.", time: "17:00:02", tone: "success" },
        ],
      },
      {
        label: "Allotment Calculation",
        description:
          "The transparent allotment logic runs, using a verifiable lottery for the oversubscribed retail category.",
        icon: Scale,
        logFilename: "cerulea_ipo_engine.log",
        logLines: [
          { text: "[SYS] Running allotment for IPO_44...", time: "09:30:10", tone: "default" },
          { text: "[CMD] allot(IPO_44, method: \"LOTTERY\", seed: verifiable)", time: "09:30:10", tone: "primary" },
          { text: "[SYS] Verifiable draw across eligible applicants.", time: "09:30:11", tone: "default" },
          { text: "[OK] Allotment computed and sealed.", time: "09:30:12", tone: "success" },
        ],
      },
      {
        label: "Investor Confirmation",
        description:
          "Each applicant reads their own application and allotment status directly from the anchored record.",
        icon: Search,
        logFilename: "cerulea_ipo_engine.log",
        logLines: [
          { text: "[SYS] Applicant checking status...", time: "11:20:44", tone: "default" },
          { text: "[CMD] status(APP_20981)", time: "11:20:44", tone: "primary" },
          { text: "[SYS] Application received, 1 lot allotted.", time: "11:20:45", tone: "default" },
          { text: "[OK] Verifiable status returned to investor.", time: "11:20:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes IPO transparency into modular contracts. Each layer anchors applications, verifies identity, runs a transparent allotment, and exposes status without an opaque registrar step.",
    layers: [
      {
        title: "Application Registry",
        subtitle: "The Anchored Bid",
        icon: Ticket,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Anchored Bid",
          description:
            "The foundational data layer. It records each subscription application with its bid details bound to a verified identity, so an investor can prove their application was received and counted.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ApplicationRegistry {\n  struct App {\n    bytes32 investor;\n    uint256 lots;\n    uint256 price;\n    uint8 allotted;\n  }\n\n  mapping(bytes32 => App) public apps;\n\n  function apply(bytes32 id, bytes32 investor, uint256 lots, uint256 price) external {\n    apps[id] = App(investor, lots, price, 0);\n  }\n}",
        simAction: "Simulate Application",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving the retail application...", tone: "default" },
          { text: "Binding it to a verified identity...", tone: "default" },
          { text: "Recording bid lots and price...", tone: "default" },
          { text: "Anchoring application to storage...", tone: "default" },
          { text: "[SUCCESS] Application anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Identity Verifier",
        subtitle: "The Duplicate Guard",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Duplicate Guard",
          description:
            "Ties each application to a verified identity and blocks multiple applications from the same investor, keeping the retail category fair and the book free of benami bids.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function bindIdentity(bytes32 appId, bytes32 investor) external onlyRegistrar {\n    require(!hasApplied[investor][issueOf[appId]], \"Duplicate applicant\");\n    hasApplied[investor][issueOf[appId]] = true;\n    apps[appId].investor = investor;\n}",
        simAction: "Simulate Identity Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading applicant identity credential...", tone: "default" },
          { text: "Checking for an existing application...", tone: "default" },
          { text: "Binding the bid to the identity...", tone: "default" },
          { text: "Recording the applicant as counted...", tone: "default" },
          { text: "[SUCCESS] Applicant verified, no duplicate.", tone: "success" },
        ],
      },
      {
        title: "Allotment Engine",
        subtitle: "The Verifiable Draw",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verifiable Draw",
          description:
            "Runs the allotment logic on-chain, using a verifiable lottery for an oversubscribed category, so investors can reproduce how shares were allocated and no outcome can be manipulated.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function allot(bytes32 issueId, bytes32 seed) external onlyRegistrar {\n    bytes32[] memory applicants = eligible[issueId];\n    for (uint i; i < applicants.length; i++) {\n      if (uint256(keccak256(abi.encode(seed, applicants[i]))) % ratio[issueId] == 0)\n        apps[applicants[i]].allotted = 1;\n    }\n    emit Allotted(issueId, seed);\n}",
        simAction: "Simulate Allotment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading eligible applicants for IPO_44...", tone: "default" },
          { text: "Applying the verifiable draw seed...", tone: "default" },
          { text: "Allotting across the oversubscribed pool...", tone: "default" },
          { text: "Sealing the allotment result...", tone: "default" },
          { text: "[SUCCESS] Allotment computed and verifiable.", tone: "success" },
        ],
      },
      {
        title: "Status Window",
        subtitle: "The Investor View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Investor View",
          description:
            "A read-only gateway that lets each applicant confirm their application and allotment directly, replacing anxious waits for a registrar announcement with an on-demand verifiable answer.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function status(bytes32 appId) external view returns (uint256 lots, uint8 allotted) {\n    App memory a = apps[appId];\n    return (a.lots, a.allotted);\n}",
        simAction: "Simulate Status Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Applicant requesting their status...", tone: "default" },
          { text: "Reading the anchored application...", tone: "default" },
          { text: "Attaching the allotment result...", tone: "default" },
          { text: "Returning verifiable status...", tone: "default" },
          { text: "[SUCCESS] Application and allotment confirmed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "IPO transparency is a horizontal capability. Here is how different actors rely on a verifiable subscription record.",
    sectors: [
      { icon: Landmark, title: "Registrars & Issuers", description: "Run subscription and allotment on a verifiable record, so investor confidence rests on reproducible logic rather than a trust-us announcement.", assetTypes: ["Application Records", "Allotment Results", "Book Snapshots"] },
      { icon: Users, title: "Retail Investors", description: "Confirm their application was received and see exactly how allotment was determined, ending the uncertainty of an oversubscribed issue.", assetTypes: ["Anchored Applications", "Status Views", "Allotment Proofs"] },
      { icon: Shield, title: "Market Regulators", description: "Audit the fairness of an allotment directly from the anchored draw, replacing after-the-fact complaints with continuous verifiable evidence.", assetTypes: ["Audit Trails", "Draw Records", "Fairness Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a registrar's system or serving investors from a broker app, Cerulea routes both into one verifiable subscription record.",
    tracks: [
      {
        title: "Track A: Registrar System Bridging",
        description:
          "For registrars on legacy issue systems. Applications and allotment runs are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Registrar System", sublabel: "Issue Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Application Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "IPO Subscription Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Investor App Access",
        description:
          "For retail investors on broker apps. An investor app signs each application and reads status directly from the anchored record.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Broker App", sublabel: "Investor Device", icon: Fingerprint, accent: false },
          { label: "Allotment Validators", sublabel: "Draw Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Subscription Record", icon: Ticket, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an IPO transparency system with anchored applications, identity binding, a verifiable allotment, and an investor status view from scratch requires capital markets engineers and long registrar integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Application & Allotment Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects issue management integration benchmarks. Building anchored applications, identity binding, a verifiable allotment draw, and an investor status portal for an average issue takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your application and allotment rules into pre-audited WebAssembly binaries and provisions the subscription ledger and status view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "bond-covenant-compliance-monitoring-for-institutional-bondholders",
    icon: Shield,
    eyebrow: "Covenant Monitoring Engine",
    headline1: "Watch the covenant.",
    headline2: "Alert on the breach.",
    heroDescription:
      "Continuously check an issuer's verified financial data against its bond covenant terms and alert bondholders the moment a threshold is breached. Institutional holders learn of a breach immediately instead of months later when the next periodic report appears.",
    heroCta: "Deploy Covenant Monitoring",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a periodic, backward-looking covenant check into continuous, real-time breach detection.",
    mechanics: [
      { title: "Encoded Covenant Terms", description: "Make covenants executable. The Compliance Attestations module encodes each covenant, like a maximum debt-to-equity ratio, as an on-chain threshold to test against." },
      { title: "Verified Financial Feed", description: "Anchor the evidence. The Oracle Feeds module streams the issuer's verified financial metrics, so a breach check rests on trusted data rather than a self-reported figure." },
      { title: "Continuous Testing", description: "Never wait for the report. Each covenant is tested continuously against the latest verified data, so a breach surfaces the moment it occurs." },
      { title: "Immediate Bondholder Alert", description: "Notify on breach. When a threshold is crossed, holders are alerted at once, replacing a months-long lag with real-time awareness." },
      { title: "Immutable Breach Record", description: "Seal the event. The Audit Logs module anchors each breach with the data that triggered it, giving bondholders evidence for any remedy or action." },
      { title: "Covenant History View", description: "Track the trend. Holders query the full covenant history, seeing headroom tighten before an actual breach rather than being surprised." },
    ],
    lifecycleTitle: "The Monitoring Lifecycle",
    lifecycleSubtitle:
      "Follow a single covenant from encoding through continuous testing to an immediate breach alert.",
    lifecycleSteps: [
      {
        label: "Covenant Encoding",
        description:
          "The bond's covenants are encoded as on-chain thresholds the issuer must stay within, anchored to the issue.",
        icon: ScrollText,
        logFilename: "cerulea_covenant_engine.log",
        logLines: [
          { text: "[SYS] Encoding covenants for bond BND_77...", time: "08:30:00", tone: "default" },
          { text: "[CMD] setCovenant { metric: \"DEBT_EQUITY\", max: 250 }", time: "08:30:01", tone: "primary" },
          { text: "[AUTH] Anchoring covenant thresholds...", time: "08:30:01", tone: "secondary" },
          { text: "[OK] Covenants anchored for BND_77.", time: "08:30:02", tone: "success" },
        ],
      },
      {
        label: "Data Ingestion",
        description:
          "The issuer's verified financial metrics stream in from the oracle feed and are bound to the covenant test.",
        icon: Radio,
        logFilename: "cerulea_covenant_engine.log",
        logLines: [
          { text: "[SYS] Ingesting verified issuer financials...", time: "12:00:00", tone: "default" },
          { text: "[CMD] ingestMetric(BND_77, debtEquity: 238)", time: "12:00:01", tone: "primary" },
          { text: "[AUTH] Verifying data provider signature...", time: "12:00:01", tone: "secondary" },
          { text: "[OK] Latest metrics bound to covenant.", time: "12:00:02", tone: "success" },
        ],
      },
      {
        label: "Continuous Test",
        description:
          "The covenant is tested against the latest metric. Headroom is shown while the issuer remains compliant.",
        icon: Search,
        logFilename: "cerulea_covenant_engine.log",
        logLines: [
          { text: "[SYS] Testing debt-to-equity covenant...", time: "12:00:03", tone: "default" },
          { text: "[CMD] test(BND_77, \"DEBT_EQUITY\")", time: "12:00:03", tone: "primary" },
          { text: "[SYS] Ratio 2.38 within 2.50 limit.", time: "12:00:04", tone: "default" },
          { text: "[OK] Compliant, headroom recorded.", time: "12:00:04", tone: "success" },
        ],
      },
      {
        label: "Breach Alert",
        description:
          "A later metric crosses the threshold. The engine seals the breach and alerts bondholders immediately.",
        icon: Shield,
        logFilename: "cerulea_covenant_engine.log",
        logLines: [
          { text: "[SYS] New metric breaches covenant...", time: "15:45:20", tone: "default" },
          { text: "[CMD] test(BND_77, \"DEBT_EQUITY\")", time: "15:45:20", tone: "primary" },
          { text: "[SYS] Ratio 2.63 exceeds 2.50 limit.", time: "15:45:21", tone: "error" },
          { text: "[OK] Breach sealed, bondholders alerted.", time: "15:45:21", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes covenant monitoring into modular contracts. Each layer encodes terms, ingests verified data, tests continuously, and alerts without waiting for a periodic report.",
    layers: [
      {
        title: "Covenant Registry",
        subtitle: "The Encoded Terms",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Encoded Terms",
          description:
            "The foundational data layer. It stores each covenant as a machine-checkable threshold anchored to the bond, so the terms being monitored are explicit and verifiable.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CovenantRegistry {\n  struct Covenant {\n    bytes32 metric;\n    uint256 maxValue;\n    bool breached;\n  }\n\n  mapping(bytes32 => Covenant[]) public covenants;\n\n  function setCovenant(bytes32 bond, bytes32 metric, uint256 maxValue) external onlyTrustee {\n    covenants[bond].push(Covenant(metric, maxValue, false));\n  }\n}",
        simAction: "Simulate Covenant Encoding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the bond's covenant terms...", tone: "default" },
          { text: "Encoding each threshold...", tone: "default" },
          { text: "Anchoring covenants to the bond...", tone: "default" },
          { text: "Writing terms to storage...", tone: "default" },
          { text: "[SUCCESS] Covenants anchored on-chain.", tone: "success" },
        ],
      },
      {
        title: "Financial Oracle",
        subtitle: "The Verified Feed",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Feed",
          description:
            "Connects to the issuer's verified financial data so covenant tests rest on trusted metrics rather than a self-reported figure, making an early breach detectable from real evidence.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract FinancialOracle {\n  function ingest(bytes32 bond, bytes32 metric, uint256 value, bytes calldata sig) external {\n    require(verifyProvider(sig), \"Untrusted feed\");\n    latest[bond][metric] = value;\n    emit MetricUpdated(bond, metric, value);\n  }\n}",
        simAction: "Simulate Data Ingestion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Querying the issuer financial feed...", tone: "default" },
          { text: "Verifying data provider signature...", tone: "default" },
          { text: "Binding the latest metric to the bond...", tone: "default" },
          { text: "Recording the metric...", tone: "default" },
          { text: "[SUCCESS] Verified financials ingested.", tone: "success" },
        ],
      },
      {
        title: "Test Engine",
        subtitle: "The Continuous Check",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Continuous Check",
          description:
            "Tests each covenant against the latest verified metric whenever it changes, recording headroom while compliant and isolating a breach the instant a threshold is crossed.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function test(bytes32 bond, uint256 idx) public view returns (bool) {\n    Covenant memory c = covenants[bond][idx];\n    return latest[bond][c.metric] <= c.maxValue;\n}",
        simAction: "Simulate Continuous Test",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading the covenant threshold...", tone: "default" },
          { text: "Reading the latest verified metric...", tone: "default" },
          { text: "Comparing metric against the limit...", tone: "default" },
          { text: "Recording compliance and headroom...", tone: "default" },
          { text: "[SUCCESS] Covenant tested against live data.", tone: "success" },
        ],
      },
      {
        title: "Alert Broadcaster",
        subtitle: "The Bondholder Signal",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Bondholder Signal",
          description:
            "Seals a breach with the triggering data and alerts every bondholder immediately, replacing a months-long reporting lag with real-time notification and an evidentiary record.",
          platformFunction: "Audit & Provenance",
        },
        codeSnippet:
          "function flagBreach(bytes32 bond, uint256 idx) external onlyMonitor {\n    require(!test(bond, idx), \"Not breached\");\n    covenants[bond][idx].breached = true;\n    emit CovenantBreached(bond, covenants[bond][idx].metric, block.timestamp);\n}",
        simAction: "Simulate Breach Alert",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Detecting a crossed threshold...", tone: "default" },
          { text: "Sealing the breach with its data...", tone: "default" },
          { text: "Broadcasting the alert to bondholders...", tone: "default" },
          { text: "Recording the breach event...", tone: "default" },
          { text: "[SUCCESS] Bondholders alerted immediately.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Continuous covenant monitoring is a horizontal capability. Here is how different actors rely on real-time breach detection.",
    sectors: [
      { icon: Shield, title: "Institutional Bondholders", description: "Learn of a covenant breach the moment it happens rather than months later, gaining time to act on a remedy before the issuer's position deteriorates further.", assetTypes: ["Covenant Alerts", "Breach Records", "Headroom Views"] },
      { icon: Scale, title: "Trustees & Agents", description: "Monitor issuer compliance continuously from verified data, replacing a periodic manual review with an automated, evidenced covenant watch.", assetTypes: ["Encoded Covenants", "Test Results", "Audit Trails"] },
      { icon: Building2, title: "Issuers", description: "Demonstrate compliance from a verifiable feed and see tightening headroom early, managing covenants proactively instead of reacting to a reported breach.", assetTypes: ["Financial Feeds", "Compliance Records", "History Views"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging an issuer's reporting system or feeding verified financial data, Cerulea routes both into one continuous covenant record.",
    tracks: [
      {
        title: "Track A: Issuer Reporting Bridging",
        description:
          "For issuers on legacy reporting systems. Financial metrics are translated into signed on-chain covenant data through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Reporting System", sublabel: "Issuer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Metric Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Covenant Monitoring Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Financial Data Feed",
        description:
          "For verified financial data providers. Signed metric feeds route through decentralized oracles directly into the test engine.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Data Provider", sublabel: "Verified Financials", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Metric Attestation", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Covenant Record", icon: Shield, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a covenant monitoring system with encoded terms, verified financial feeds, continuous testing, and immediate breach alerts from scratch requires credit engineers and long data integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Covenant & Test Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects credit monitoring integration benchmarks. Building encoded covenants, verified financial feeds, continuous testing, and a bondholder alert layer for an average issue takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your covenant and test rules into pre-audited WebAssembly binaries and provisions the covenant ledger and alert layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "mergers-and-acquisitions-escrow-and-earnout-milestone-tracking",
    icon: Gavel,
    eyebrow: "M&A Escrow Engine",
    headline1: "Hold the earnout.",
    headline2: "Release on the milestone.",
    heroDescription:
      "Hold M&A deal funds in escrow and release earnout payments automatically as the acquired company hits agreed performance milestones. Verified performance data confirms each milestone, removing the disputes that can drag earnout settlements out for months.",
    heroCta: "Deploy M&A Escrow",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a dispute-prone earnout into a milestone-driven, verifiable, self-releasing escrow.",
    mechanics: [
      { title: "Earnout Escrow", description: "Hold the contingent price. The Escrow and Conditional Settlement module locks the earnout amount until agreed performance milestones are verifiably met." },
      { title: "Encoded Milestones", description: "Make targets objective. Each earnout milestone, like a revenue or EBITDA target, is encoded as a measurable on-chain condition rather than a contested clause." },
      { title: "Verified Performance Data", description: "Confirm from evidence. The Compliance Attestations module anchors verified performance data, so a milestone is judged against trusted figures, not either party's claim." },
      { title: "Automatic Release", description: "Pay on achievement. When a milestone is confirmed, the escrow releases the corresponding earnout tranche automatically with no negotiation." },
      { title: "Dispute Elimination", description: "Settle before it starts. Because achievement is measured against anchored data, the ambiguity that fuels earnout disputes is removed at the source." },
      { title: "Immutable Deal Trail", description: "Record every step. The Audit Logs module seals each milestone confirmation and release, giving both sides a complete, disputable-free record.", },
    ],
    lifecycleTitle: "The Earnout Lifecycle",
    lifecycleSubtitle:
      "Follow a single deal from earnout escrow through a verified milestone to an automatic tranche release.",
    lifecycleSteps: [
      {
        label: "Escrow Funding",
        description:
          "The acquirer funds the earnout escrow, locked against the deal's agreed performance milestones.",
        icon: Gavel,
        logFilename: "cerulea_earnout_engine.log",
        logLines: [
          { text: "[SYS] Funding earnout escrow for deal MA_31...", time: "09:00:00", tone: "default" },
          { text: "[CMD] fundEarnout { deal: \"MA_31\", amount: 40000000 }", time: "09:00:01", tone: "primary" },
          { text: "[AUTH] Locking against 3 milestones...", time: "09:00:01", tone: "secondary" },
          { text: "[OK] Earnout escrow funded.", time: "09:00:02", tone: "success" },
        ],
      },
      {
        label: "Milestone Encoding",
        description:
          "Each earnout milestone is encoded as a measurable target tied to a tranche of the escrow.",
        icon: ScrollText,
        logFilename: "cerulea_earnout_engine.log",
        logLines: [
          { text: "[SYS] Encoding earnout milestones...", time: "09:05:10", tone: "default" },
          { text: "[CMD] setMilestone(MA_31, \"REVENUE_Y1\", target: 500000000, tranche: 15000000)", time: "09:05:10", tone: "primary" },
          { text: "[SYS] Milestone bound to tranche.", time: "09:05:11", tone: "default" },
          { text: "[OK] 3 milestones encoded.", time: "09:05:11", tone: "success" },
        ],
      },
      {
        label: "Performance Verification",
        description:
          "Verified performance data confirms a milestone was reached, checked against the encoded target.",
        icon: FileCheck,
        logFilename: "cerulea_earnout_engine.log",
        logLines: [
          { text: "[SYS] Verified Y1 revenue data received...", time: "10:20:44", tone: "default" },
          { text: "[CMD] verifyMilestone(MA_31, \"REVENUE_Y1\", actual: 512000000)", time: "10:20:44", tone: "primary" },
          { text: "[AUTH] Actual exceeds target, milestone met.", time: "10:20:45", tone: "secondary" },
          { text: "[OK] Milestone confirmed from verified data.", time: "10:20:45", tone: "success" },
        ],
      },
      {
        label: "Tranche Release",
        description:
          "The corresponding earnout tranche is released automatically to the sellers, with no dispute.",
        icon: Coins,
        logFilename: "cerulea_earnout_engine.log",
        logLines: [
          { text: "[SYS] Milestone met, releasing tranche...", time: "10:21:02", tone: "default" },
          { text: "[CMD] releaseTranche(MA_31, \"REVENUE_Y1\")", time: "10:21:02", tone: "primary" },
          { text: "[SYS] Escrow released for confirmed milestone.", time: "10:21:03", tone: "default" },
          { text: "[OK] Earnout tranche paid to sellers.", time: "10:21:03", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes M&A earnout escrow into modular contracts. Each layer holds funds, encodes milestones, verifies performance, and releases without a contested negotiation.",
    layers: [
      {
        title: "Earnout Vault",
        subtitle: "The Contingent Price",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Contingent Price",
          description:
            "The foundational data layer. It holds the earnout amount and binds each tranche to a milestone, so contingent consideration can only move when a target is verifiably reached.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract EarnoutVault {\n  struct Deal {\n    address acquirer;\n    address sellers;\n    uint256 held;\n  }\n\n  mapping(bytes32 => Deal) public deals;\n\n  function fund(bytes32 id, address sellers) external payable {\n    deals[id] = Deal(msg.sender, sellers, msg.value);\n  }\n}",
        simAction: "Simulate Escrow Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading acquirer earnout deposit...", tone: "default" },
          { text: "Binding funds to the deal...", tone: "default" },
          { text: "Locking the earnout vault...", tone: "default" },
          { text: "Writing deal to storage...", tone: "default" },
          { text: "[SUCCESS] Earnout escrow funded.", tone: "success" },
        ],
      },
      {
        title: "Milestone Ledger",
        subtitle: "The Objective Target",
        icon: ScrollText,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Objective Target",
          description:
            "Encodes each earnout milestone as a measurable target tied to a tranche, replacing a contestable contract clause with an objective condition both sides agreed to up front.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function setMilestone(bytes32 id, bytes32 key, uint256 target, uint256 tranche) external onlyAcquirer {\n    milestones[id][key] = Milestone(target, tranche, false);\n    emit MilestoneSet(id, key, target, tranche);\n}",
        simAction: "Simulate Milestone Encoding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the agreed earnout targets...", tone: "default" },
          { text: "Encoding each measurable milestone...", tone: "default" },
          { text: "Binding each milestone to a tranche...", tone: "default" },
          { text: "Recording milestones...", tone: "default" },
          { text: "[SUCCESS] Earnout milestones encoded.", tone: "success" },
        ],
      },
      {
        title: "Performance Verifier",
        subtitle: "The Evidence Judge",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Evidence Judge",
          description:
            "Checks anchored, verified performance data against the encoded target, so a milestone is judged from trusted figures rather than either party's characterization of the results.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function verifyMilestone(bytes32 id, bytes32 key, uint256 actual) external onlyVerifier {\n    Milestone storage m = milestones[id][key];\n    require(actual >= m.target, \"Target not met\");\n    m.met = true;\n    emit MilestoneMet(id, key, actual);\n}",
        simAction: "Simulate Performance Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving verified performance data...", tone: "default" },
          { text: "Comparing actual against target...", tone: "default" },
          { text: "Confirming the milestone is met...", tone: "default" },
          { text: "Sealing the confirmation...", tone: "default" },
          { text: "[SUCCESS] Milestone confirmed from evidence.", tone: "success" },
        ],
      },
      {
        title: "Release Trigger",
        subtitle: "The Automatic Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Payout",
          description:
            "Releases the tranche tied to a confirmed milestone straight to the sellers, so earnout consideration flows automatically on achievement without a negotiation or dispute.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function releaseTranche(bytes32 id, bytes32 key) external {\n    Milestone storage m = milestones[id][key];\n    require(m.met && !m.paid, \"Not payable\");\n    m.paid = true;\n    deals[id].held -= m.tranche;\n    payable(deals[id].sellers).transfer(m.tranche);\n}",
        simAction: "Simulate Tranche Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming the milestone is met...", tone: "default" },
          { text: "Checking the tranche is unpaid...", tone: "default" },
          { text: "Releasing the tranche to sellers...", tone: "default" },
          { text: "Updating the held balance...", tone: "default" },
          { text: "[SUCCESS] Earnout tranche paid automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Milestone-driven earnout escrow is a horizontal capability. Here is how different actors rely on automatic release.",
    sectors: [
      { icon: Gavel, title: "Acquirers", description: "Fund an earnout that releases only on verified achievement, protecting contingent consideration while removing the friction and legal cost of contested milestones.", assetTypes: ["Earnout Escrows", "Encoded Milestones", "Release Proofs"] },
      { icon: Handshake, title: "Sellers & Founders", description: "Receive earnout tranches automatically the moment a target is verifiably met, ending the uncertainty and delay of negotiating whether the milestone was reached.", assetTypes: ["Milestone Confirmations", "Tranche Payouts", "Performance Records"] },
      { icon: Scale, title: "Advisors & Escrow Agents", description: "Administer earnouts against anchored evidence and objective targets, replacing subjective judgment and dispute mediation with a verifiable record.", assetTypes: ["Deal Trails", "Verification Records", "Audit Logs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a deal management system or feeding verified performance data, Cerulea routes both into one milestone-driven escrow record.",
    tracks: [
      {
        title: "Track A: Deal System Bridging",
        description:
          "For advisors on legacy deal management systems. Milestone and funding events are translated into signed on-chain escrow transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Deal Management System", sublabel: "Advisor Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Milestone Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Earnout Escrow Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Performance Data Feed",
        description:
          "For verified performance data. Signed financial results route through decentralized oracles directly into the performance verifier.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Performance Feed", sublabel: "Verified Results", icon: FileCheck, accent: false },
          { label: "Decentralized Oracles", sublabel: "Milestone Attestation", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Earnout Record", icon: Gavel, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an M&A earnout escrow with a locked vault, encoded milestones, verified performance judging, and automatic release from scratch requires deal technology engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Milestone & Release Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects deal administration integration benchmarks. Building an earnout escrow vault, encoded milestones, verified performance judging, and automatic tranche release for an average deal takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your milestone and release rules into pre-audited WebAssembly binaries and provisions the earnout escrow ledger and release layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "credit-history-for-unbanked-borrowers-using-alternative-data",
    icon: IdCard,
    eyebrow: "Portable Credit Identity",
    headline1: "Build the credit.",
    headline2: "Carry it anywhere.",
    heroDescription:
      "Give unbanked borrowers a portable alternative credit identity whose repayment history is verifiable across lenders. A credit-invisible population gains formal credit access, and a faithful repayer can present that record at any lender instead of starting over.",
    heroCta: "Deploy Credit Identities",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a trapped, single-lender repayment record into a portable, verifiable credit identity.",
    mechanics: [
      { title: "Portable Credit Identity", description: "Follow the borrower. The DID and VC Ledger module gives each borrower a self-owned credit identity that carries their history from one lender to the next." },
      { title: "Alternative Data Signals", description: "Score the credit-invisible. Repayment of microloans, utility bills, and other alternative signals build a credit picture where no formal bureau history exists." },
      { title: "Verifiable Repayment Record", description: "Prove reliability. Each repayment is anchored, so a borrower can present a verifiable track record rather than a lender relying on expensive physical verification." },
      { title: "Privacy-Preserving Proof", description: "Share a score, not raw data. The ZK Credentials Kit lets a borrower prove creditworthiness to a new lender without exposing every underlying transaction." },
      { title: "Cross-Lender Recognition", description: "Reuse the history. A repayment record built at a microfinance institution is recognized at a bank, so a good borrower is not treated as a stranger." },
      { title: "Formal Account Bridge", description: "Open the door. The Core Banking Accounts module links a proven credit identity to a formal account, bringing the borrower into the banking system." },
    ],
    lifecycleTitle: "The Credit Lifecycle",
    lifecycleSubtitle:
      "Follow a credit-invisible borrower from a first microloan to a bank loan approved on portable history.",
    lifecycleSteps: [
      {
        label: "Identity Creation",
        description:
          "A borrower with no bureau history is issued a self-owned credit identity to which all repayment will attach.",
        icon: IdCard,
        logFilename: "cerulea_credit_engine.log",
        logLines: [
          { text: "[SYS] Creating credit identity for borrower...", time: "09:10:00", tone: "default" },
          { text: "[CMD] createDID { subject: \"BRW_6612\", type: \"THIN_FILE\" }", time: "09:10:01", tone: "primary" },
          { text: "[AUTH] Anchoring self-owned identity...", time: "09:10:01", tone: "secondary" },
          { text: "[OK] Credit identity DID_6612 created.", time: "09:10:02", tone: "success" },
        ],
      },
      {
        label: "Repayment Building",
        description:
          "The borrower repays microloans on time. Each repayment is anchored as a verifiable credential on the identity.",
        icon: Coins,
        logFilename: "cerulea_credit_engine.log",
        logLines: [
          { text: "[SYS] Recording on-time microloan repayment...", time: "11:40:33", tone: "default" },
          { text: "[CMD] recordRepayment(DID_6612, loan: 4, status: \"ON_TIME\")", time: "11:40:33", tone: "primary" },
          { text: "[SYS] 4 microloans repaid on time.", time: "11:40:34", tone: "default" },
          { text: "[OK] Repayment credential anchored.", time: "11:40:34", tone: "success" },
        ],
      },
      {
        label: "Creditworthiness Proof",
        description:
          "At a new bank, the borrower proves creditworthiness with a zero-knowledge proof over their history.",
        icon: Lock,
        logFilename: "cerulea_credit_engine.log",
        logLines: [
          { text: "[SYS] Bank requesting creditworthiness proof...", time: "14:05:20", tone: "default" },
          { text: "[CMD] proveCredit(DID_6612, threshold: \"GOOD\")", time: "14:05:20", tone: "primary" },
          { text: "[AUTH] Verifying ZK proof without raw data...", time: "14:05:21", tone: "secondary" },
          { text: "[OK] Creditworthiness proven privately.", time: "14:05:21", tone: "success" },
        ],
      },
      {
        label: "Loan Approval",
        description:
          "The bank approves a working capital loan on the portable history and links a formal account.",
        icon: Landmark,
        logFilename: "cerulea_credit_engine.log",
        logLines: [
          { text: "[SYS] Assessing loan on portable history...", time: "15:30:44", tone: "default" },
          { text: "[CMD] approveLoan(DID_6612, amount: 80000)", time: "15:30:44", tone: "primary" },
          { text: "[SYS] First formal credit for the borrower.", time: "15:30:45", tone: "default" },
          { text: "[OK] Loan approved in 2 days.", time: "15:30:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes portable credit into modular contracts. Each layer creates an identity, records repayment, proves creditworthiness privately, and bridges to a formal account.",
    layers: [
      {
        title: "Identity Registry",
        subtitle: "The Self-Owned Credit",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Self-Owned Credit",
          description:
            "The foundational data layer. It issues a borrower-controlled credit identity so a repayment history is owned by the person and carried between lenders instead of trapped at one institution.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CreditIdentity {\n  struct Identity {\n    address owner;\n    bytes32 subject;\n    uint256 createdAt;\n  }\n\n  mapping(bytes32 => Identity) public dids;\n\n  function create(bytes32 id, bytes32 subject) external {\n    dids[id] = Identity(msg.sender, subject, block.timestamp);\n  }\n}",
        simAction: "Simulate Identity Creation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading a thin-file borrower profile...", tone: "default" },
          { text: "Issuing a self-owned credit identity...", tone: "default" },
          { text: "Anchoring ownership to the borrower...", tone: "default" },
          { text: "Writing identity to storage...", tone: "default" },
          { text: "[SUCCESS] Portable credit identity created.", tone: "success" },
        ],
      },
      {
        title: "Repayment Ledger",
        subtitle: "The Verifiable Track Record",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verifiable Track Record",
          description:
            "Anchors each repayment as a credential on the borrower's identity, turning alternative-data behavior into a verifiable history that replaces expensive physical verification.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function recordRepayment(bytes32 did, bytes32 loanRef, bool onTime) external onlyLender {\n    repayments[did].push(Repayment(loanRef, onTime, block.timestamp));\n    if (onTime) score[did] += 10;\n    emit RepaymentRecorded(did, loanRef, onTime);\n}",
        simAction: "Simulate Repayment Record",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving an on-time repayment...", tone: "default" },
          { text: "Anchoring the repayment credential...", tone: "default" },
          { text: "Updating the credit score signal...", tone: "default" },
          { text: "Recording the track record...", tone: "default" },
          { text: "[SUCCESS] Repayment history anchored.", tone: "success" },
        ],
      },
      {
        title: "ZK Prover",
        subtitle: "The Private Score",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Private Score",
          description:
            "Lets a borrower prove they meet a creditworthiness threshold without revealing each underlying transaction, so a new lender gets assurance while the borrower keeps their financial detail private.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function proveCredit(bytes32 did, uint256 threshold, bytes calldata zkProof) external view returns (bool) {\n    return verifier.verify(zkProof, abi.encode(did, threshold));\n}",
        simAction: "Simulate Creditworthiness Proof",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Bank requesting a creditworthiness proof...", tone: "default" },
          { text: "Generating a zero-knowledge proof...", tone: "default" },
          { text: "Verifying the proof without raw data...", tone: "default" },
          { text: "Confirming the threshold is met...", tone: "default" },
          { text: "[SUCCESS] Creditworthiness proven privately.", tone: "success" },
        ],
      },
      {
        title: "Account Bridge",
        subtitle: "The Formal On-Ramp",
        icon: Landmark,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Formal On-Ramp",
          description:
            "Links a proven credit identity to a formal bank account and loan, bringing a previously credit-invisible borrower into the banking system on the strength of a portable record.",
          platformFunction: "Settlement & Onboarding",
        },
        codeSnippet:
          "function approveLoan(bytes32 did, uint256 amount) external onlyBank {\n    require(score[did] >= minScore, \"Below threshold\");\n    accounts[did] = msg.sender;\n    emit LoanApproved(did, amount);\n}",
        simAction: "Simulate Loan Approval",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Assessing the portable credit history...", tone: "default" },
          { text: "Confirming the score meets threshold...", tone: "default" },
          { text: "Linking a formal account...", tone: "default" },
          { text: "Approving the working capital loan...", tone: "default" },
          { text: "[SUCCESS] First formal loan approved.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Portable alternative credit is a horizontal capability. Here is how different actors put a verifiable history to work.",
    sectors: [
      { icon: Landmark, title: "Banks & NBFCs", description: "Lend to previously credit-invisible borrowers on a verifiable portable history, expanding the addressable market while cutting the cost of physical verification.", assetTypes: ["Credit Identities", "Repayment Records", "Loan Approvals"] },
      { icon: Users, title: "Microfinance Institutions", description: "Build a borrower's history as a portable asset rather than a captive record, helping good repayers graduate to larger, cheaper formal credit.", assetTypes: ["Microloan Records", "Alternative Signals", "Score Credentials"] },
      { icon: Fingerprint, title: "Unbanked Borrowers", description: "Own a credit identity that carries their repayment reputation across lenders, turning years of faithful repayment into recognized creditworthiness.", assetTypes: ["Self-Owned Identity", "Privacy Proofs", "Portable History"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a lender's loan system or serving borrowers from a basic phone, Cerulea routes both into one portable credit record.",
    tracks: [
      {
        title: "Track A: Lender System Bridging",
        description:
          "For banks and MFIs on legacy loan systems. Repayment events are translated into signed on-chain credentials through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Loan System", sublabel: "Lender Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Repayment Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Portable Credit Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Borrower Mobile Access",
        description:
          "For borrowers on basic phones. A lightweight app manages the credit identity and presents proofs directly to a new lender.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Borrower App", sublabel: "Basic Mobile Device", icon: Fingerprint, accent: false },
          { label: "Credit Validators", sublabel: "History Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Portable Credit Record", icon: IdCard, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a portable credit system with self-owned identities, alternative-data scoring, zero-knowledge proofs, and a formal account bridge from scratch requires identity and credit engineers and long lender integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Credit & Identity Rules",
      ruleCount: 44,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects credit infrastructure integration benchmarks. Building self-owned identities, alternative-data scoring, privacy-preserving proofs, and a formal account bridge across lenders takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your credit and identity rules into pre-audited WebAssembly binaries and provisions the portable credit ledger and proof layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "self-help-group-shg-joint-liability-and-repayment-tracking",
    icon: Users,
    eyebrow: "Group Liability Ledger",
    headline1: "Track the group.",
    headline2: "Settle the disputes.",
    heroDescription:
      "Give a self-help group and its lending institution a shared record of each member's loan and repayment status. A digital ledger replaces handwritten registers, reducing disputes and improving repayment discipline under joint liability.",
    heroCta: "Deploy Group Ledgers",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an error-prone handwritten register into a shared, dispute-resistant group ledger.",
    mechanics: [
      { title: "Shared Group Ledger", description: "Replace the register. The Civil Registry module records each member's loan and repayment status on one ledger the whole group and the lender can see." },
      { title: "Member-Level Tracking", description: "Attribute every payment. Each member's contribution and repayment is recorded individually, so joint liability rests on an accurate per-member picture." },
      { title: "Joint Liability View", description: "Show the shared risk. The ledger surfaces how one member's default affects the group, making the joint obligation visible to every member." },
      { title: "Dispute-Resistant Record", description: "End the arguments. The Audit Logs module seals each entry, so a contested repayment is settled against a signed record rather than a memory or a scribbled note." },
      { title: "Repayment Discipline Signals", description: "Encourage on-time payment. A transparent, shared status nudges members toward discipline, since every member and the lender can see who is behind." },
      { title: "Lender Compliance View", description: "Give the institution assurance. The Compliance Attestations module lets the lending institution verify group status directly for its own reporting." },
    ],
    lifecycleTitle: "The Group Lifecycle",
    lifecycleSubtitle:
      "Follow a self-help group from formation through member repayments to a transparently resolved status.",
    lifecycleSteps: [
      {
        label: "Group Formation",
        description:
          "The self-help group is registered with its members and the joint liability loan is recorded.",
        icon: Users,
        logFilename: "cerulea_shg_engine.log",
        logLines: [
          { text: "[SYS] Registering self-help group SHG_204...", time: "10:00:00", tone: "default" },
          { text: "[CMD] formGroup { members: 12, loan: 240000 }", time: "10:00:01", tone: "primary" },
          { text: "[AUTH] Recording joint liability terms...", time: "10:00:01", tone: "secondary" },
          { text: "[OK] Group SHG_204 registered.", time: "10:00:02", tone: "success" },
        ],
      },
      {
        label: "Member Repayment",
        description:
          "Each member repays their portion. The repayment is recorded individually against the shared ledger.",
        icon: Coins,
        logFilename: "cerulea_shg_engine.log",
        logLines: [
          { text: "[SYS] Recording member repayment...", time: "11:30:22", tone: "default" },
          { text: "[CMD] repay(SHG_204, member: 7, amount: 2000)", time: "11:30:22", tone: "primary" },
          { text: "[SYS] Member 7 up to date.", time: "11:30:23", tone: "default" },
          { text: "[OK] Repayment anchored to group ledger.", time: "11:30:23", tone: "success" },
        ],
      },
      {
        label: "Status Transparency",
        description:
          "The group and the lender view each member's status, surfacing anyone falling behind on joint liability.",
        icon: Search,
        logFilename: "cerulea_shg_engine.log",
        logLines: [
          { text: "[SYS] Group requesting member status...", time: "14:15:10", tone: "default" },
          { text: "[CMD] status(SHG_204)", time: "14:15:10", tone: "primary" },
          { text: "[SYS] 11 of 12 members current, 1 behind.", time: "14:15:11", tone: "default" },
          { text: "[OK] Transparent status returned.", time: "14:15:11", tone: "success" },
        ],
      },
      {
        label: "Dispute Resolution",
        description:
          "A contested repayment is resolved against the sealed record instead of a handwritten note.",
        icon: Gavel,
        logFilename: "cerulea_shg_engine.log",
        logLines: [
          { text: "[SYS] Member disputes a recorded payment...", time: "16:40:44", tone: "default" },
          { text: "[CMD] resolve(SHG_204, member: 3)", time: "16:40:44", tone: "primary" },
          { text: "[SYS] Sealed repayment history retrieved.", time: "16:40:45", tone: "default" },
          { text: "[OK] Dispute settled from the record.", time: "16:40:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes group lending into modular contracts. Each layer registers the group, tracks members, exposes status, and resolves disputes without a handwritten register.",
    layers: [
      {
        title: "Group Registry",
        subtitle: "The Joint Liability Record",
        icon: Users,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Joint Liability Record",
          description:
            "The foundational data layer. It registers the group, its members, and the joint liability loan, forming one shared record the group and lender both reference.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract GroupRegistry {\n  struct Group {\n    uint8 members;\n    uint256 loan;\n    uint256 formedAt;\n  }\n\n  mapping(bytes32 => Group) public groups;\n\n  function form(bytes32 id, uint8 members, uint256 loan) external onlyLender {\n    groups[id] = Group(members, loan, block.timestamp);\n  }\n}",
        simAction: "Simulate Group Formation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the group's members...", tone: "default" },
          { text: "Recording the joint liability loan...", tone: "default" },
          { text: "Anchoring the group record...", tone: "default" },
          { text: "Writing group to storage...", tone: "default" },
          { text: "[SUCCESS] Group registered on-chain.", tone: "success" },
        ],
      },
      {
        title: "Member Ledger",
        subtitle: "The Per-Member Track",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Per-Member Track",
          description:
            "Records each member's repayment individually, so the group's joint liability rests on an accurate per-member picture rather than a single aggregate figure in a register.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function repay(bytes32 group, uint8 member, uint256 amount) external {\n    repaid[group][member] += amount;\n    lastPaid[group][member] = block.timestamp;\n    emit MemberRepaid(group, member, amount);\n}",
        simAction: "Simulate Member Repayment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving a member repayment...", tone: "default" },
          { text: "Attributing it to the member...", tone: "default" },
          { text: "Updating their repaid balance...", tone: "default" },
          { text: "Recording the payment time...", tone: "default" },
          { text: "[SUCCESS] Member repayment anchored.", tone: "success" },
        ],
      },
      {
        title: "Status View",
        subtitle: "The Shared Window",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Shared Window",
          description:
            "Exposes each member's status to the group and the lender, surfacing anyone falling behind so the joint obligation is visible and discipline is encouraged.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function status(bytes32 group, uint8 member) external view returns (uint256 repaid, uint256 lastPaid) {\n    return (repaid[group][member], lastPaid[group][member]);\n}",
        simAction: "Simulate Status Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Group requesting member status...", tone: "default" },
          { text: "Reading each member's record...", tone: "default" },
          { text: "Flagging any member behind...", tone: "default" },
          { text: "Returning the shared status...", tone: "default" },
          { text: "[SUCCESS] Transparent group status returned.", tone: "success" },
        ],
      },
      {
        title: "Dispute Resolver",
        subtitle: "The Sealed Evidence",
        icon: Gavel,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Sealed Evidence",
          description:
            "Resolves a contested repayment against the sealed history, so a disagreement is settled from a signed record instead of a memory or a handwritten note prone to error.",
          platformFunction: "Audit & Provenance",
        },
        codeSnippet:
          "function resolve(bytes32 group, uint8 member) external view returns (Repayment[] memory) {\n    return memberHistory[group][member];\n}",
        simAction: "Simulate Dispute Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "A member disputes a payment...", tone: "default" },
          { text: "Retrieving the sealed history...", tone: "default" },
          { text: "Comparing against the claim...", tone: "default" },
          { text: "Presenting the signed record...", tone: "default" },
          { text: "[SUCCESS] Dispute settled from the record.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared group tracking is a horizontal capability. Here is how different actors rely on a transparent member record.",
    sectors: [
      { icon: Users, title: "Self-Help Groups", description: "Track each member's loan and repayment on a shared ledger, reducing internal disputes and strengthening the discipline that joint liability depends on.", assetTypes: ["Member Records", "Repayment Trails", "Group Status"] },
      { icon: Landmark, title: "Lending Institutions", description: "Verify group status directly for lending and reporting, replacing periodic register collection with a live, accurate view of every group.", assetTypes: ["Loan Records", "Compliance Views", "Repayment Data"] },
      { icon: Handshake, title: "Facilitators & NGOs", description: "Support groups with a transparent record that any member can trust, improving accountability and the group's standing with its lender.", assetTypes: ["Formation Records", "Audit Trails", "Discipline Signals"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a lender's microfinance system or serving group leaders from a phone, Cerulea routes both into one shared group record.",
    tracks: [
      {
        title: "Track A: Microfinance System Bridging",
        description:
          "For lenders on legacy microfinance systems. Loan and repayment events are translated into signed on-chain group entries through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Microfinance System", sublabel: "Lender Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Repayment Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Group Liability Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Group Leader Mobile Access",
        description:
          "For group leaders on mobile. A simple app records member repayments and reads group status directly from the shared contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Group App", sublabel: "Leader Device", icon: Fingerprint, accent: false },
          { label: "Group Validators", sublabel: "Repayment Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Group Record", icon: Users, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared group ledger with member-level tracking, joint liability views, dispute-resistant records, and a lender compliance view from scratch requires microfinance engineers and long field integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Group & Repayment Rules",
      ruleCount: 32,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects microfinance system integration benchmarks. Building a shared group ledger, member-level tracking, dispute-resistant records, and a lender compliance view for an average program takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your group and repayment rules into pre-audited WebAssembly binaries and provisions the group liability ledger and status view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "digital-gold-backed-micro-savings-for-unbanked-populations",
    icon: Coins,
    eyebrow: "Micro-Savings Engine",
    headline1: "Save in grams.",
    headline2: "Redeem anytime.",
    heroDescription:
      "Let people without bank accounts save small amounts as fractional digital gold, tracked as a verified claim and redeemable anytime. A familiar, trusted savings instrument replaces informal gold schemes that carry counterparty risk.",
    heroCta: "Deploy Micro-Savings",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn an informal, risky gold savings habit into a fractional, verifiable, redeemable claim.",
    mechanics: [
      { title: "Fractional Gold Claim", description: "Save below a gram. The ERC-20 Token module represents each deposit as a fractional claim on allocated gold, so a user can save any small amount." },
      { title: "Verified Backing", description: "Remove counterparty risk. Each fractional claim is backed by allocated gold, anchored so a saver can verify their holding rather than trust an informal operator." },
      { title: "Wallet-Based Access", description: "Bank the unbanked. The Wallet Authentication module gives a user a wallet without a bank account, so they can save from a basic phone." },
      { title: "Anytime Redemption", description: "Keep it liquid. A saver redeems their fractional gold at any time for cash or physical delivery, without a lock-in or a scheme maturity." },
      { title: "Identity-Light Onboarding", description: "Lower the barrier. The KYC and Identity Verification module tiers onboarding, so small savers can start with light verification and grow as balances rise." },
      { title: "Transparent Holding View", description: "Show the accumulation. Each saver sees their accumulated gram-equivalent holding in real time, giving full transparency over their savings." },
    ],
    lifecycleTitle: "The Savings Lifecycle",
    lifecycleSubtitle:
      "Follow a small saver from a first micro-deposit to a verifiable holding and an anytime redemption.",
    lifecycleSteps: [
      {
        label: "Wallet Onboarding",
        description:
          "An unbanked user is onboarded with a wallet and light verification, ready to save without a bank account.",
        icon: Fingerprint,
        logFilename: "cerulea_gold_engine.log",
        logLines: [
          { text: "[SYS] Onboarding saver with wallet...", time: "09:30:00", tone: "default" },
          { text: "[CMD] createWallet { tier: \"LIGHT_KYC\" }", time: "09:30:01", tone: "primary" },
          { text: "[AUTH] Verifying tiered identity...", time: "09:30:01", tone: "secondary" },
          { text: "[OK] Saver wallet SAV_7781 created.", time: "09:30:02", tone: "success" },
        ],
      },
      {
        label: "Micro-Deposit",
        description:
          "The saver deposits a small amount, minted as a fractional gold claim backed by allocated gold.",
        icon: Coins,
        logFilename: "cerulea_gold_engine.log",
        logLines: [
          { text: "[SYS] Processing micro-deposit...", time: "11:10:33", tone: "default" },
          { text: "[CMD] deposit(SAV_7781, amount: 50)", time: "11:10:33", tone: "primary" },
          { text: "[SYS] Minting fractional gold against allocation.", time: "11:10:34", tone: "default" },
          { text: "[OK] 0.008g gold claim credited.", time: "11:10:34", tone: "success" },
        ],
      },
      {
        label: "Holding Verification",
        description:
          "The saver verifies their accumulated gram-equivalent holding and its allocated backing.",
        icon: Search,
        logFilename: "cerulea_gold_engine.log",
        logLines: [
          { text: "[SYS] Saver checking accumulated holding...", time: "18:20:10", tone: "default" },
          { text: "[CMD] holding(SAV_7781)", time: "18:20:10", tone: "primary" },
          { text: "[SYS] Verifying allocated gold backing...", time: "18:20:11", tone: "default" },
          { text: "[OK] 2.4g verified holding returned.", time: "18:20:11", tone: "success" },
        ],
      },
      {
        label: "Anytime Redemption",
        description:
          "The saver redeems fractional gold for cash or physical delivery at any time, with no lock-in.",
        icon: Wallet,
        logFilename: "cerulea_gold_engine.log",
        logLines: [
          { text: "[SYS] Redemption request received...", time: "12:45:44", tone: "default" },
          { text: "[CMD] redeem(SAV_7781, grams: 1.0, mode: \"CASH\")", time: "12:45:44", tone: "primary" },
          { text: "[SYS] Burning claim and releasing value...", time: "12:45:45", tone: "default" },
          { text: "[OK] Redemption settled, no lock-in.", time: "12:45:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes gold micro-savings into modular contracts. Each layer onboards a wallet, mints a backed claim, verifies the holding, and redeems without counterparty risk.",
    layers: [
      {
        title: "Saver Wallet",
        subtitle: "The Unbanked Access",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Unbanked Access",
          description:
            "The foundational access layer. It gives a user a wallet without a bank account and tiers verification, so small savers can start from a basic phone and grow as balances rise.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract SaverWallet {\n  struct Saver {\n    address owner;\n    uint8 kycTier;\n    uint256 goldMilligrams;\n  }\n\n  mapping(bytes32 => Saver) public savers;\n\n  function onboard(bytes32 id, uint8 tier) external {\n    savers[id] = Saver(msg.sender, tier, 0);\n  }\n}",
        simAction: "Simulate Wallet Onboarding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Creating a wallet without a bank account...", tone: "default" },
          { text: "Setting a light verification tier...", tone: "default" },
          { text: "Anchoring saver ownership...", tone: "default" },
          { text: "Writing saver to storage...", tone: "default" },
          { text: "[SUCCESS] Saver wallet created.", tone: "success" },
        ],
      },
      {
        title: "Backed Mint",
        subtitle: "The Allocated Claim",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Allocated Claim",
          description:
            "Mints each deposit as a fractional gold claim against allocated gold, removing the counterparty risk of an informal scheme by tying every claim to real backing.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function deposit(bytes32 saverId, uint256 amount) external {\n    uint256 mg = amount * 1000 / goldPricePerGram();\n    require(allocatedGold() >= totalMinted + mg, \"Unbacked\");\n    savers[saverId].goldMilligrams += mg;\n    totalMinted += mg;\n}",
        simAction: "Simulate Micro-Deposit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the small deposit amount...", tone: "default" },
          { text: "Converting to gram-equivalent...", tone: "default" },
          { text: "Confirming allocated gold backing...", tone: "default" },
          { text: "Minting the fractional gold claim...", tone: "default" },
          { text: "[SUCCESS] Backed gold claim credited.", tone: "success" },
        ],
      },
      {
        title: "Holding Verifier",
        subtitle: "The Transparent Balance",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Transparent Balance",
          description:
            "Exposes each saver's accumulated gram-equivalent holding and confirms it against allocated backing, giving full transparency over savings a saver can verify anytime.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function holding(bytes32 saverId) external view returns (uint256 milligrams, bool backed) {\n    uint256 mg = savers[saverId].goldMilligrams;\n    return (mg, allocatedGold() >= totalMinted);\n}",
        simAction: "Simulate Holding Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Saver requesting accumulated holding...", tone: "default" },
          { text: "Reading the gram-equivalent balance...", tone: "default" },
          { text: "Confirming allocated gold backing...", tone: "default" },
          { text: "Returning the verified holding...", tone: "default" },
          { text: "[SUCCESS] Verified holding returned.", tone: "success" },
        ],
      },
      {
        title: "Redemption Gate",
        subtitle: "The Anytime Exit",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Anytime Exit",
          description:
            "Burns a fractional claim and releases cash or physical delivery on demand, so a saver keeps full liquidity with no scheme maturity or lock-in.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function redeem(bytes32 saverId, uint256 milligrams) external {\n    require(savers[saverId].goldMilligrams >= milligrams, \"Insufficient\");\n    savers[saverId].goldMilligrams -= milligrams;\n    totalMinted -= milligrams;\n    _payout(saverId, milligrams);\n}",
        simAction: "Simulate Redemption",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving a redemption request...", tone: "default" },
          { text: "Confirming the saver's balance...", tone: "default" },
          { text: "Burning the fractional claim...", tone: "default" },
          { text: "Releasing cash or physical delivery...", tone: "default" },
          { text: "[SUCCESS] Redemption settled, no lock-in.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Backed micro-savings is a horizontal capability. Here is how different actors put a fractional gold claim to work.",
    sectors: [
      { icon: Coins, title: "Savings & Gold Providers", description: "Offer a compliant micro-savings product backed by allocated gold, turning an informal cultural habit into a transparent instrument free of counterparty risk.", assetTypes: ["Fractional Claims", "Allocation Records", "Redemption Proofs"] },
      { icon: Users, title: "Unbanked Savers", description: "Save any small amount as verified fractional gold from a basic phone and redeem anytime, gaining a familiar, trusted savings instrument.", assetTypes: ["Gold Holdings", "Deposit Records", "Holding Views"] },
      { icon: Shield, title: "Regulators & Auditors", description: "Verify that every fractional claim is backed by allocated gold, replacing opaque informal schemes with a fully auditable savings pool.", assetTypes: ["Backing Attestations", "Audit Trails", "Reserve Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a gold custodian's system or serving savers from a basic phone, Cerulea routes both into one backed savings record.",
    tracks: [
      {
        title: "Track A: Custodian System Bridging",
        description:
          "For gold custodians on legacy systems. Allocation and reserve data is translated into signed on-chain backing records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Custodian System", sublabel: "Gold Vault Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Backing Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Micro-Savings Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Saver Mobile Access",
        description:
          "For savers on basic phones. A lightweight wallet signs each deposit and redemption and routes it directly to the savings contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Saver Wallet", sublabel: "Basic Mobile Device", icon: Fingerprint, accent: false },
          { label: "Savings Validators", sublabel: "Backing Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Backed Savings Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a micro-savings product with fractional gold claims, verified backing, wallet onboarding, and anytime redemption from scratch requires savings platform engineers and long custodian integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Savings & Backing Rules",
      ruleCount: 34,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects savings platform integration benchmarks. Building fractional gold claims, verified backing, wallet onboarding, and anytime redemption for an average product takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your savings and backing rules into pre-audited WebAssembly binaries and provisions the micro-savings ledger and redemption layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "agent-banking-transaction-reconciliation-in-rural-areas",
    icon: Server,
    eyebrow: "Agent Reconciliation Layer",
    headline1: "Reconcile in real time.",
    headline2: "Know the float.",
    heroDescription:
      "Reconcile the cash transactions rural banking agents handle against the bank's central ledger in real time, cutting settlement delays. Each agent transaction is recorded as it happens, so agents and the bank both see an up-to-date float and outstanding settlement.",
    heroCta: "Deploy Agent Reconciliation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn delayed batch reconciliation into a real-time match between agent devices and the central ledger.",
    mechanics: [
      { title: "Real-Time Transaction Capture", description: "Record at the point of cash. The Invoices and Billing module captures each agent deposit and withdrawal as it happens, not in a delayed batch." },
      { title: "Live Float Visibility", description: "End float uncertainty. Each agent sees their current float balance in real time, so they know their capacity without waiting for a batch to clear." },
      { title: "Central Ledger Matching", description: "Reconcile continuously. The Audit Logs module matches every agent transaction against the bank's central ledger the moment it is recorded." },
      { title: "Settlement Tracking", description: "Show what is outstanding. Both agent and bank see which transactions have settled and which are pending, replacing an opaque batch wait." },
      { title: "Discrepancy Detection", description: "Catch mismatches fast. A transaction that does not reconcile is flagged immediately, so an error is resolved in hours rather than at end-of-day." },
      { title: "Compliance Attestation", description: "Back the numbers. The Compliance Attestations module attests each reconciled position, giving the bank an auditable record of agent activity.", },
    ],
    lifecycleTitle: "The Reconciliation Lifecycle",
    lifecycleSubtitle:
      "Follow a single agent cash transaction from capture through central matching to a settled position.",
    lifecycleSteps: [
      {
        label: "Cash Transaction",
        description:
          "A rural agent handles a customer cash deposit on a handheld device, captured in real time.",
        icon: Radio,
        logFilename: "cerulea_agent_engine.log",
        logLines: [
          { text: "[SYS] Agent handling cash deposit...", time: "10:15:00", tone: "default" },
          { text: "[CMD] capture { agent: \"AG_552\", type: \"DEPOSIT\", amount: 3000 }", time: "10:15:01", tone: "primary" },
          { text: "[AUTH] Signing transaction from agent device...", time: "10:15:01", tone: "secondary" },
          { text: "[OK] Transaction TX_88213 captured.", time: "10:15:02", tone: "success" },
        ],
      },
      {
        label: "Float Update",
        description:
          "The agent's float balance updates immediately so they know their remaining capacity.",
        icon: Activity,
        logFilename: "cerulea_agent_engine.log",
        logLines: [
          { text: "[SYS] Updating agent float...", time: "10:15:03", tone: "default" },
          { text: "[CMD] updateFloat(AG_552, delta: 3000)", time: "10:15:03", tone: "primary" },
          { text: "[SYS] Live float recomputed.", time: "10:15:03", tone: "default" },
          { text: "[OK] Agent float now visible in real time.", time: "10:15:04", tone: "success" },
        ],
      },
      {
        label: "Central Matching",
        description:
          "The transaction is matched against the bank's central ledger the moment it is recorded.",
        icon: Server,
        logFilename: "cerulea_agent_engine.log",
        logLines: [
          { text: "[SYS] Matching TX_88213 to central ledger...", time: "10:15:05", tone: "default" },
          { text: "[CMD] reconcile(TX_88213)", time: "10:15:05", tone: "primary" },
          { text: "[SYS] Amounts match central record.", time: "10:15:06", tone: "default" },
          { text: "[OK] Transaction reconciled in real time.", time: "10:15:06", tone: "success" },
        ],
      },
      {
        label: "Settlement Confirmation",
        description:
          "The settled position is confirmed and attested, with any outstanding amount clearly shown.",
        icon: FileCheck,
        logFilename: "cerulea_agent_engine.log",
        logLines: [
          { text: "[SYS] Confirming agent settlement...", time: "10:20:44", tone: "default" },
          { text: "[CMD] settle(AG_552)", time: "10:20:44", tone: "primary" },
          { text: "[AUTH] Attesting reconciled position...", time: "10:20:45", tone: "secondary" },
          { text: "[OK] Settlement confirmed, position clear.", time: "10:20:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes agent reconciliation into modular contracts. Each layer captures a transaction, updates float, matches the central ledger, and settles without a delayed batch.",
    layers: [
      {
        title: "Transaction Capture",
        subtitle: "The Point-of-Cash Record",
        icon: Radio,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Point-of-Cash Record",
          description:
            "The foundational data layer. It records each agent deposit and withdrawal at the moment of cash handling, so reconciliation starts from a real-time signed record rather than a batch upload.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract AgentCapture {\n  struct Txn {\n    bytes32 agent;\n    bytes32 kind;\n    uint256 amount;\n    uint256 ts;\n  }\n\n  mapping(bytes32 => Txn) public txns;\n\n  function capture(bytes32 id, bytes32 agent, bytes32 kind, uint256 amount) external onlyAgent {\n    txns[id] = Txn(agent, kind, amount, block.timestamp);\n  }\n}",
        simAction: "Simulate Transaction Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Agent handling a cash deposit...", tone: "default" },
          { text: "Signing the transaction on device...", tone: "default" },
          { text: "Recording at the point of cash...", tone: "default" },
          { text: "Writing transaction to storage...", tone: "default" },
          { text: "[SUCCESS] Agent transaction captured.", tone: "success" },
        ],
      },
      {
        title: "Float Engine",
        subtitle: "The Live Balance",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Live Balance",
          description:
            "Recomputes an agent's float on every transaction, so the agent always knows their remaining capacity instead of waiting for a batch to reveal it hours later.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function updateFloat(bytes32 agent, int256 delta) external onlyCapture {\n    float[agent] = uint256(int256(float[agent]) + delta);\n    emit FloatUpdated(agent, float[agent]);\n}",
        simAction: "Simulate Float Update",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the captured transaction...", tone: "default" },
          { text: "Applying the float delta...", tone: "default" },
          { text: "Recomputing the live balance...", tone: "default" },
          { text: "Publishing the updated float...", tone: "default" },
          { text: "[SUCCESS] Agent float updated in real time.", tone: "success" },
        ],
      },
      {
        title: "Reconciliation Engine",
        subtitle: "The Central Match",
        icon: Server,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Central Match",
          description:
            "Matches each agent transaction against the bank's central ledger the instant it is recorded, flagging any mismatch immediately rather than surfacing it in an end-of-day batch.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function reconcile(bytes32 txnId, uint256 centralAmount) external onlyBank returns (bool) {\n    bool ok = txns[txnId].amount == centralAmount;\n    reconciled[txnId] = ok;\n    if (!ok) emit Discrepancy(txnId);\n    return ok;\n}",
        simAction: "Simulate Central Matching",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the agent transaction...", tone: "default" },
          { text: "Comparing against the central ledger...", tone: "default" },
          { text: "Checking for any discrepancy...", tone: "default" },
          { text: "Recording the reconciliation result...", tone: "default" },
          { text: "[SUCCESS] Transaction reconciled in real time.", tone: "success" },
        ],
      },
      {
        title: "Settlement Attestor",
        subtitle: "The Clear Position",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Clear Position",
          description:
            "Attests each agent's settled position and shows any outstanding amount, giving both agent and bank an auditable, real-time view instead of an opaque batch settlement.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function settle(bytes32 agent) external onlyBank returns (uint256 outstanding) {\n    outstanding = pending[agent];\n    settledAt[agent] = block.timestamp;\n    emit Settled(agent, outstanding);\n}",
        simAction: "Simulate Settlement Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Computing the agent's settled position...", tone: "default" },
          { text: "Showing any outstanding amount...", tone: "default" },
          { text: "Attesting the reconciled position...", tone: "default" },
          { text: "Recording the settlement...", tone: "default" },
          { text: "[SUCCESS] Settlement confirmed, position clear.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Real-time agent reconciliation is a horizontal capability. Here is how different actors rely on live settlement.",
    sectors: [
      { icon: Landmark, title: "Banks & Sponsors", description: "Reconcile agent cash activity against the central ledger in real time, cutting settlement delays and gaining an auditable view of every banking correspondent.", assetTypes: ["Transaction Records", "Reconciled Positions", "Settlement Trails"] },
      { icon: Users, title: "Banking Correspondents", description: "See a live float and know exactly what has settled, so agents operate with certainty over their capacity instead of guessing between batches.", assetTypes: ["Float Balances", "Deposit Records", "Settlement Views"] },
      { icon: Shield, title: "Auditors & Regulators", description: "Audit agent activity from a continuous reconciled record, replacing periodic batch reviews with verifiable real-time evidence.", assetTypes: ["Audit Trails", "Discrepancy Flags", "Compliance Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's core system or capturing transactions from agent handhelds, Cerulea routes both into one reconciled agent record.",
    tracks: [
      {
        title: "Track A: Core Banking Bridging",
        description:
          "For banks on legacy core systems. Central ledger entries are translated into signed on-chain reconciliation events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Core Banking System", sublabel: "Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Ledger Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Agent Reconciliation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Agent Handheld Capture",
        description:
          "For agents on handheld devices. The device signs each cash transaction and routes it directly to the capture contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Agent Handheld", sublabel: "Correspondent Device", icon: Fingerprint, accent: false },
          { label: "Reconciliation Validators", sublabel: "Matching Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Reconciled Agent Record", icon: Server, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an agent reconciliation system with real-time capture, live float, central matching, and settlement attestation from scratch requires core banking engineers and long field integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Capture & Reconciliation Rules",
      ruleCount: 33,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects agent banking integration benchmarks. Building real-time transaction capture, live float tracking, continuous central matching, and settlement attestation for an average network takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your capture and reconciliation rules into pre-audited WebAssembly binaries and provisions the agent reconciliation ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cross-border-retail-remittance-without-swift-delays",
    icon: Zap,
    eyebrow: "Remittance Settlement Layer",
    headline1: "Send in minutes.",
    headline2: "Cut the fees.",
    heroDescription:
      "Deliver a cross-border remittance dApp that settles fiat-to-fiat in minutes via stablecoin on a public chain, with no correspondent bank relationship and fees below 1%. A migrant worker sends money home in minutes at a fraction of the traditional cost.",
    heroCta: "Deploy Remittance Rails",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow, expensive correspondent-bank corridor into a minutes-long stablecoin settlement.",
    mechanics: [
      { title: "Stablecoin Settlement", description: "Bypass correspondents. The Stablecoin Treasury module settles the value leg in stablecoin on a public chain, so no correspondent relationship or nostro account is needed." },
      { title: "Fiat On and Off Ramps", description: "Move real money. The Fiat On-Ramp module converts sender fiat to stablecoin and back to recipient fiat, so the user experience is fiat-to-fiat end to end." },
      { title: "Minutes-Fast Delivery", description: "Collapse the timeline. The Payments Rails module routes the transfer for settlement in minutes rather than the 1 to 3 days of a traditional corridor." },
      { title: "Sub-1% Fees", description: "Slash the cost. Removing correspondent layers cuts the fee from 5 to 8% down to below 1%, so more of the money reaches the family." },
      { title: "AML Screening", description: "Stay compliant. Each transfer is screened for AML and sanctions before settlement, so speed does not come at the cost of compliance." },
      { title: "Transparent Tracking", description: "Show the journey. Sender and recipient see the transfer status end to end, replacing the opacity of a correspondent chain." },
    ],
    lifecycleTitle: "The Remittance Lifecycle",
    lifecycleSubtitle:
      "Follow a single remittance from sender fiat through stablecoin settlement to recipient payout in minutes.",
    lifecycleSteps: [
      {
        label: "Sender On-Ramp",
        description:
          "The sender pays in local fiat, which is converted to stablecoin after an AML screen.",
        icon: Wallet,
        logFilename: "cerulea_remit_engine.log",
        logLines: [
          { text: "[SYS] Sender initiating remittance...", time: "14:00:00", tone: "default" },
          { text: "[CMD] onRamp { from: \"AED\", amount: 1000 }", time: "14:00:01", tone: "primary" },
          { text: "[AUTH] AML and sanctions screen passed...", time: "14:00:02", tone: "secondary" },
          { text: "[OK] Fiat converted to stablecoin.", time: "14:00:03", tone: "success" },
        ],
      },
      {
        label: "Stablecoin Settlement",
        description:
          "The stablecoin settles across the public chain to the payout partner in the recipient country.",
        icon: Zap,
        logFilename: "cerulea_remit_engine.log",
        logLines: [
          { text: "[SYS] Settling value leg on public chain...", time: "14:00:04", tone: "default" },
          { text: "[CMD] settle(REM_5521, corridor: \"AE_IN\")", time: "14:00:04", tone: "primary" },
          { text: "[SYS] No correspondent bank in path.", time: "14:00:05", tone: "default" },
          { text: "[OK] Stablecoin delivered to payout partner.", time: "14:00:06", tone: "success" },
        ],
      },
      {
        label: "Recipient Off-Ramp",
        description:
          "The payout partner converts stablecoin to recipient fiat and credits the family's account.",
        icon: Coins,
        logFilename: "cerulea_remit_engine.log",
        logLines: [
          { text: "[SYS] Converting to recipient fiat...", time: "14:06:20", tone: "default" },
          { text: "[CMD] offRamp(REM_5521, to: \"INR\")", time: "14:06:20", tone: "primary" },
          { text: "[SYS] Crediting recipient bank account...", time: "14:06:21", tone: "default" },
          { text: "[OK] Funds arrived in 8 minutes.", time: "14:06:22", tone: "success" },
        ],
      },
      {
        label: "Fee & Status View",
        description:
          "The sender sees the sub-1% fee and end-to-end status, with the full corridor transparent.",
        icon: Search,
        logFilename: "cerulea_remit_engine.log",
        logLines: [
          { text: "[SYS] Sender checking transfer status...", time: "14:07:10", tone: "default" },
          { text: "[CMD] status(REM_5521)", time: "14:07:10", tone: "primary" },
          { text: "[SYS] Fee 0.8%, delivered end to end.", time: "14:07:11", tone: "default" },
          { text: "[OK] Transparent status returned.", time: "14:07:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes remittance into modular contracts. Each layer ramps fiat in, settles in stablecoin, ramps fiat out, and screens compliance without a correspondent bank in the path.",
    layers: [
      {
        title: "On-Ramp Module",
        subtitle: "The Fiat Gateway",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fiat Gateway",
          description:
            "The foundational entry layer. It converts sender fiat to stablecoin after an AML screen, so the transfer enters the settlement rail as compliant, chain-native value.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract OnRamp {\n  function onRamp(bytes32 remit, uint256 fiatAmount, bytes calldata amlProof) external {\n    require(amlPass(amlProof), \"AML failed\");\n    uint256 stable = convert(fiatAmount);\n    balances[remit] = stable;\n    emit OnRamped(remit, stable);\n  }\n}",
        simAction: "Simulate Sender On-Ramp",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the sender's local fiat...", tone: "default" },
          { text: "Running AML and sanctions screen...", tone: "default" },
          { text: "Converting fiat to stablecoin...", tone: "default" },
          { text: "Recording the ramped value...", tone: "default" },
          { text: "[SUCCESS] Fiat converted to stablecoin.", tone: "success" },
        ],
      },
      {
        title: "Settlement Rail",
        subtitle: "The Correspondent-Free Path",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Correspondent-Free Path",
          description:
            "Settles the value leg in stablecoin on a public chain directly to the payout partner, removing the correspondent banks that make traditional corridors slow and expensive.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(bytes32 remit, address payoutPartner) external {\n    uint256 amt = balances[remit];\n    require(amt > 0, \"Nothing to settle\");\n    balances[remit] = 0;\n    stable.transfer(payoutPartner, amt);\n    emit Settled(remit, payoutPartner, amt);\n}",
        simAction: "Simulate Stablecoin Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the ramped stablecoin...", tone: "default" },
          { text: "Routing on the public chain...", tone: "default" },
          { text: "Confirming no correspondent in path...", tone: "default" },
          { text: "Delivering to the payout partner...", tone: "default" },
          { text: "[SUCCESS] Value settled in minutes.", tone: "success" },
        ],
      },
      {
        title: "Off-Ramp Module",
        subtitle: "The Recipient Payout",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Recipient Payout",
          description:
            "Converts settled stablecoin to recipient fiat and credits the local account, so the recipient experiences an ordinary fiat deposit at the end of a chain-native transfer.",
          platformFunction: "Settlement & Distribution",
        },
        codeSnippet:
          "function offRamp(bytes32 remit, address recipient) external onlyPartner {\n    uint256 stable = received[remit];\n    uint256 fiat = convertOut(stable);\n    _credit(recipient, fiat);\n    emit OffRamped(remit, recipient, fiat);\n}",
        simAction: "Simulate Recipient Off-Ramp",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading settled stablecoin...", tone: "default" },
          { text: "Converting to recipient fiat...", tone: "default" },
          { text: "Crediting the recipient account...", tone: "default" },
          { text: "Recording the payout...", tone: "default" },
          { text: "[SUCCESS] Recipient credited in local fiat.", tone: "success" },
        ],
      },
      {
        title: "Compliance Screen",
        subtitle: "The AML Guard",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The AML Guard",
          description:
            "Screens each transfer for AML and sanctions before settlement, so a minutes-fast, low-fee corridor still meets the compliance obligations of a regulated remittance.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function screen(bytes32 remit, address sender, address recipient) external view returns (bool) {\n    return !sanctioned[sender] && !sanctioned[recipient] && amountOk[remit];\n}",
        simAction: "Simulate AML Screen",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading sender and recipient...", tone: "default" },
          { text: "Checking sanctions lists...", tone: "default" },
          { text: "Validating transfer thresholds...", tone: "default" },
          { text: "Clearing the transfer for settlement...", tone: "default" },
          { text: "[SUCCESS] Transfer screened and compliant.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Stablecoin remittance is a horizontal capability. Here is how different actors put the fast corridor to work.",
    sectors: [
      { icon: Globe, title: "Remittance Fintechs", description: "Offer minutes-fast transfers at sub-1% fees without building correspondent relationships, competing on speed and cost in corridors that were previously closed.", assetTypes: ["Remittance Flows", "Corridor Records", "Fee Schedules"] },
      { icon: Users, title: "Migrant Senders & Families", description: "Send money home in minutes at a fraction of the traditional fee, with the full transfer transparent from on-ramp to payout.", assetTypes: ["Transfers", "Status Views", "Payout Receipts"] },
      { icon: Shield, title: "Regulators & Payout Partners", description: "Rely on AML screening built into the rail and an auditable record of every transfer, so a fast corridor remains a compliant one.", assetTypes: ["Screening Records", "Audit Trails", "Settlement Proofs"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a fintech's ledger or serving senders from a mobile dApp, Cerulea routes both into one remittance settlement record.",
    tracks: [
      {
        title: "Track A: Fintech Ledger Bridging",
        description:
          "For remittance fintechs on legacy ledgers. Transfer orders are translated into signed on-chain settlement events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Fintech Ledger", sublabel: "Remittance Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Transfer Signing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Stablecoin Settlement Rail", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Sender dApp Access",
        description:
          "For senders on a mobile dApp. A wallet signs each remittance and routes it directly to the settlement rail with compliance screening.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Sender dApp", sublabel: "Mobile Wallet", icon: Fingerprint, accent: false },
          { label: "Public Validators", sublabel: "Settlement Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Remittance Ledger", icon: Zap, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a remittance dApp with stablecoin settlement, fiat ramps, AML screening, and transparent tracking from scratch requires payments engineers and long liquidity integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Settlement & Compliance Rules",
      ruleCount: 47,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects cross-border payments benchmarks. Building stablecoin settlement, fiat on and off ramps, AML screening, and transparent tracking for an average corridor takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your settlement and compliance rules into pre-audited WebAssembly binaries and provisions the stablecoin rail and ramp layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "merchant-settlement-reconciliation-across-payment-processors",
    icon: Database,
    eyebrow: "Settlement Reconciliation Layer",
    headline1: "Consolidate the settlements.",
    headline2: "Reconcile automatically.",
    heroDescription:
      "Show every merchant exactly which transactions across all payment processors have settled into their bank account and when. Settlement confirmations from cards, UPI, and wallets consolidate into one verified record, so reconciliation is automatic rather than manual statement matching.",
    heroCta: "Deploy Settlement Reconciliation",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn manual matching across many processor statements into one automated settlement view.",
    mechanics: [
      { title: "Multi-Processor Consolidation", description: "Unify the sources. The Invoices and Billing module ingests settlement confirmations from every processor, so cards, UPI, and wallets land in one record." },
      { title: "Settled vs Pending View", description: "End the guesswork. Each transaction is marked settled or pending with its date, so a merchant knows exactly what has hit their account." },
      { title: "Automated Matching", description: "Replace manual reconciliation. The Audit Logs module matches processor confirmations to expected settlements automatically, flagging any gap." },
      { title: "Acquiring Bank Alignment", description: "Reconcile both sides. The merchant and the acquiring bank read the same consolidated record, so settlement disputes are resolved from shared evidence." },
      { title: "Fee Transparency", description: "See the net. Each settlement shows the processor fee deducted, so a merchant reconciles net receipts rather than reverse-engineering them." },
      { title: "Escrow-Backed Assurance", description: "Track held funds. The Escrow and Conditional Settlement module surfaces amounts held or in transit, so nothing settles invisibly." },
    ],
    lifecycleTitle: "The Reconciliation Lifecycle",
    lifecycleSubtitle:
      "Follow a single day's merchant transactions from multi-processor capture to an automatically reconciled record.",
    lifecycleSteps: [
      {
        label: "Transaction Capture",
        description:
          "Transactions across cards, UPI, and wallets are captured with their processor and expected settlement.",
        icon: QrCode,
        logFilename: "cerulea_settle_engine.log",
        logLines: [
          { text: "[SYS] Capturing merchant transactions...", time: "23:00:00", tone: "default" },
          { text: "[CMD] capture { merchant: \"MER_88\", processors: 3, txns: 420 }", time: "23:00:01", tone: "primary" },
          { text: "[SYS] Grouping by processor and method.", time: "23:00:02", tone: "default" },
          { text: "[OK] 420 transactions captured.", time: "23:00:02", tone: "success" },
        ],
      },
      {
        label: "Settlement Confirmation",
        description:
          "Each processor confirms which transactions settled and when, ingested into the consolidated record.",
        icon: Database,
        logFilename: "cerulea_settle_engine.log",
        logLines: [
          { text: "[SYS] Ingesting processor confirmations...", time: "06:30:00", tone: "default" },
          { text: "[CMD] confirmSettlement(MER_88, processor: \"CARDS\", settled: 210)", time: "06:30:01", tone: "primary" },
          { text: "[SYS] Marking transactions settled with date.", time: "06:30:02", tone: "default" },
          { text: "[OK] Confirmations consolidated.", time: "06:30:02", tone: "success" },
        ],
      },
      {
        label: "Automated Matching",
        description:
          "The engine matches confirmations to expected settlements and flags anything still pending.",
        icon: Search,
        logFilename: "cerulea_settle_engine.log",
        logLines: [
          { text: "[SYS] Matching settlements to expected...", time: "06:35:10", tone: "default" },
          { text: "[CMD] reconcile(MER_88)", time: "06:35:10", tone: "primary" },
          { text: "[SYS] 408 settled, 12 pending flagged.", time: "06:35:11", tone: "default" },
          { text: "[OK] Reconciliation complete.", time: "06:35:11", tone: "success" },
        ],
      },
      {
        label: "Merchant & Bank View",
        description:
          "Merchant and acquiring bank read the same reconciled record, net of fees, from one view.",
        icon: Building2,
        logFilename: "cerulea_settle_engine.log",
        logLines: [
          { text: "[SYS] Merchant requesting settlement view...", time: "08:00:44", tone: "default" },
          { text: "[CMD] view(MER_88)", time: "08:00:44", tone: "primary" },
          { text: "[SYS] Net receipts shown after fees.", time: "08:00:45", tone: "default" },
          { text: "[OK] Consolidated view returned.", time: "08:00:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes settlement reconciliation into modular contracts. Each layer captures transactions, ingests confirmations, matches automatically, and exposes one net view.",
    layers: [
      {
        title: "Transaction Registry",
        subtitle: "The Unified Capture",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Unified Capture",
          description:
            "The foundational data layer. It records every merchant transaction with its processor and expected settlement, so reconciliation starts from one unified set instead of many separate statements.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract TxnRegistry {\n  struct Txn {\n    bytes32 processor;\n    uint256 amount;\n    uint256 fee;\n    bool settled;\n  }\n\n  mapping(bytes32 => mapping(bytes32 => Txn)) public txns;\n\n  function capture(bytes32 merchant, bytes32 id, bytes32 processor, uint256 amount) external {\n    txns[merchant][id] = Txn(processor, amount, 0, false);\n  }\n}",
        simAction: "Simulate Transaction Capture",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading transactions across processors...", tone: "default" },
          { text: "Grouping by processor and method...", tone: "default" },
          { text: "Recording expected settlement...", tone: "default" },
          { text: "Writing transactions to storage...", tone: "default" },
          { text: "[SUCCESS] Transactions captured in one set.", tone: "success" },
        ],
      },
      {
        title: "Confirmation Ingestor",
        subtitle: "The Processor Feed",
        icon: Database,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Processor Feed",
          description:
            "Ingests each processor's settlement confirmation and marks the matching transactions settled with a date, consolidating many sources into one authoritative record.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function confirmSettlement(bytes32 merchant, bytes32 id, uint256 fee) external onlyProcessor {\n    Txn storage t = txns[merchant][id];\n    t.settled = true;\n    t.fee = fee;\n    settledAt[merchant][id] = block.timestamp;\n    emit Settled(merchant, id);\n}",
        simAction: "Simulate Settlement Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving a processor confirmation...", tone: "default" },
          { text: "Marking the transaction settled...", tone: "default" },
          { text: "Recording the deducted fee...", tone: "default" },
          { text: "Stamping the settlement date...", tone: "default" },
          { text: "[SUCCESS] Confirmation consolidated.", tone: "success" },
        ],
      },
      {
        title: "Matching Engine",
        subtitle: "The Automatic Reconciler",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Reconciler",
          description:
            "Matches confirmations to expected settlements and flags anything still pending, replacing manual matching of processor statements with a deterministic reconciliation.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function reconcile(bytes32 merchant, bytes32[] calldata ids) external view returns (uint256 settled, uint256 pending) {\n    for (uint i; i < ids.length; i++) {\n      if (txns[merchant][ids[i]].settled) settled++; else pending++;\n    }\n}",
        simAction: "Simulate Automated Matching",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Loading expected settlements...", tone: "default" },
          { text: "Matching against confirmations...", tone: "default" },
          { text: "Flagging pending transactions...", tone: "default" },
          { text: "Recording the reconciliation...", tone: "default" },
          { text: "[SUCCESS] Reconciliation complete.", tone: "success" },
        ],
      },
      {
        title: "Settlement View",
        subtitle: "The Net Window",
        icon: Building2,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Net Window",
          description:
            "Exposes one reconciled record, net of fees, to the merchant and acquiring bank, so both sides resolve settlement questions from shared evidence rather than conflicting statements.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function view(bytes32 merchant, bytes32 id) external view returns (uint256 net, bool settled) {\n    Txn memory t = txns[merchant][id];\n    return (t.amount - t.fee, t.settled);\n}",
        simAction: "Simulate Settlement View",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Merchant requesting settlement view...", tone: "default" },
          { text: "Computing net receipts after fees...", tone: "default" },
          { text: "Aligning merchant and bank records...", tone: "default" },
          { text: "Returning the consolidated view...", tone: "default" },
          { text: "[SUCCESS] Net settlement view returned.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Consolidated settlement reconciliation is a horizontal capability. Here is how different actors rely on one net record.",
    sectors: [
      { icon: Building2, title: "Merchants", description: "See exactly which transactions across all processors have settled and their net value, replacing manual statement matching with an automatic consolidated view.", assetTypes: ["Settlement Records", "Net Receipts", "Pending Flags"] },
      { icon: Landmark, title: "Acquiring Banks", description: "Reconcile merchant settlements from the same shared record, resolving disputes from common evidence and cutting the support load of settlement queries.", assetTypes: ["Reconciled Ledgers", "Fee Records", "Audit Trails"] },
      { icon: QrCode, title: "Payment Processors", description: "Post settlement confirmations into one consolidated record, reducing reconciliation friction with merchants and acquiring banks alike.", assetTypes: ["Confirmations", "Settlement Feeds", "Fee Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a processor's settlement feed or serving merchants from a dashboard, Cerulea routes both into one reconciled settlement record.",
    tracks: [
      {
        title: "Track A: Processor Feed Bridging",
        description:
          "For processors and acquirers on legacy systems. Settlement confirmations are translated into signed on-chain records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Processor System", sublabel: "Acquirer Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Confirmation Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Settlement Reconciliation Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Merchant Dashboard Access",
        description:
          "For merchants on a dashboard. A merchant client reads the reconciled, net-of-fee settlement view directly from the shared record.",
        connectorLabels: ["READ ACCESS", "STATE EXECUTION"],
        nodes: [
          { label: "Merchant Dashboard", sublabel: "Merchant Client", icon: Fingerprint, accent: false },
          { label: "Reconciliation Validators", sublabel: "Matching Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Reconciled Settlement Record", icon: Database, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a settlement reconciliation system with multi-processor consolidation, settled versus pending views, automated matching, and net fee transparency from scratch requires payments engineers and long processor integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Settlement & Matching Rules",
      ruleCount: 38,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects payments reconciliation integration benchmarks. Building multi-processor consolidation, settled and pending tracking, automated matching, and a net merchant view takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your settlement and matching rules into pre-audited WebAssembly binaries and provisions the reconciliation ledger and merchant view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "cross-border-b2b-bulk-payment-batching-with-fx-rate-locking",
    icon: Package,
    eyebrow: "Batch FX Settlement Layer",
    headline1: "Lock the rate.",
    headline2: "Settle the batch.",
    heroDescription:
      "Let companies lock an exchange rate for a bulk cross-border payment run and settle the whole batch at that rate, verified end to end. A rate is fixed the moment a batch is created, giving treasury certainty over costs between initiation and settlement.",
    heroCta: "Deploy Batch FX Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn FX exposure between batch initiation and settlement into a locked, verifiable rate.",
    mechanics: [
      { title: "Rate Lock at Creation", description: "Fix the cost up front. The Oracle Feeds module captures a verified exchange rate the moment a batch is created and binds it to the whole run." },
      { title: "Batch Payment Grouping", description: "Move many at once. Payments to overseas suppliers or employees are grouped into one batch, so a single locked rate applies across every line." },
      { title: "Locked-Rate Settlement", description: "Settle at the fixed rate. The Escrow and Conditional Settlement module settles the entire batch at the locked rate, so a later market move does not change the cost." },
      { title: "End-to-End Verification", description: "Prove the rate held. Each line's settlement is checked against the locked rate, so treasury can verify the batch settled exactly as fixed." },
      { title: "Exposure Elimination", description: "Remove the drift. Because the rate is locked and verified, the exposure between initiation and settlement is closed, giving cost certainty." },
      { title: "Compliance Attestation", description: "Back the treasury record. The Compliance Attestations module attests the locked rate and settlement, supporting audit and internal controls." },
    ],
    lifecycleTitle: "The Batch Lifecycle",
    lifecycleSubtitle:
      "Follow a single bulk payment run from rate lock through batch settlement to end-to-end verification.",
    lifecycleSteps: [
      {
        label: "Batch Creation",
        description:
          "A company creates a bulk payment run and locks a verified exchange rate for the whole batch.",
        icon: Package,
        logFilename: "cerulea_batchfx_engine.log",
        logLines: [
          { text: "[SYS] Creating bulk payment batch...", time: "09:00:00", tone: "default" },
          { text: "[CMD] createBatch { batch: \"BAT_77\", lines: 240, pair: \"USD_INR\" }", time: "09:00:01", tone: "primary" },
          { text: "[AUTH] Locking verified rate 83.15...", time: "09:00:02", tone: "secondary" },
          { text: "[OK] Batch BAT_77 created at locked rate.", time: "09:00:02", tone: "success" },
        ],
      },
      {
        label: "Line Funding",
        description:
          "The batch is funded and each payment line is prepared against the locked rate.",
        icon: Coins,
        logFilename: "cerulea_batchfx_engine.log",
        logLines: [
          { text: "[SYS] Funding batch BAT_77...", time: "09:10:20", tone: "default" },
          { text: "[CMD] fundBatch(BAT_77, amount: 4200000)", time: "09:10:20", tone: "primary" },
          { text: "[SYS] 240 lines prepared at 83.15.", time: "09:10:21", tone: "default" },
          { text: "[OK] Batch fully funded.", time: "09:10:21", tone: "success" },
        ],
      },
      {
        label: "Locked-Rate Settlement",
        description:
          "The batch settles every line at the locked rate, unaffected by any market move since creation.",
        icon: Zap,
        logFilename: "cerulea_batchfx_engine.log",
        logLines: [
          { text: "[SYS] Settling batch at locked rate...", time: "14:30:10", tone: "default" },
          { text: "[CMD] settleBatch(BAT_77)", time: "14:30:10", tone: "primary" },
          { text: "[SYS] All 240 lines settled at 83.15.", time: "14:30:12", tone: "default" },
          { text: "[OK] Batch settled, no rate drift.", time: "14:30:12", tone: "success" },
        ],
      },
      {
        label: "End-to-End Verification",
        description:
          "Treasury verifies every line settled at the locked rate and the batch is attested for audit.",
        icon: Search,
        logFilename: "cerulea_batchfx_engine.log",
        logLines: [
          { text: "[SYS] Verifying batch settlement...", time: "14:35:44", tone: "default" },
          { text: "[CMD] verifyBatch(BAT_77)", time: "14:35:44", tone: "primary" },
          { text: "[SYS] All lines match locked rate.", time: "14:35:45", tone: "default" },
          { text: "[OK] Batch verified and attested.", time: "14:35:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes batch FX settlement into modular contracts. Each layer locks a rate, groups the batch, settles at the locked rate, and verifies without exposure drift.",
    layers: [
      {
        title: "Rate Lock Registry",
        subtitle: "The Fixed Rate",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fixed Rate",
          description:
            "The foundational data layer. It captures a verified exchange rate at batch creation and binds it to the run, so the cost is fixed the moment the batch begins.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract RateLock {\n  struct Batch {\n    bytes32 pair;\n    uint256 lockedRate;\n    uint256 createdAt;\n    bool settled;\n  }\n\n  mapping(bytes32 => Batch) public batches;\n\n  function create(bytes32 id, bytes32 pair, uint256 rate) external onlyTreasury {\n    batches[id] = Batch(pair, rate, block.timestamp, false);\n  }\n}",
        simAction: "Simulate Rate Lock",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading a verified market rate...", tone: "default" },
          { text: "Binding the rate to the batch...", tone: "default" },
          { text: "Timestamping the lock...", tone: "default" },
          { text: "Writing batch to storage...", tone: "default" },
          { text: "[SUCCESS] Exchange rate locked at creation.", tone: "success" },
        ],
      },
      {
        title: "Batch Assembler",
        subtitle: "The Grouped Run",
        icon: Package,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Grouped Run",
          description:
            "Groups every payment line into one batch under the locked rate, so a large run of supplier or employee payments settles under a single verifiable rate rather than many.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function fundBatch(bytes32 id, Line[] calldata lines) external payable onlyTreasury {\n    for (uint i; i < lines.length; i++) {\n      batchLines[id].push(lines[i]);\n    }\n    funded[id] = msg.value;\n    emit BatchFunded(id, lines.length);\n}",
        simAction: "Simulate Batch Funding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the payment lines...", tone: "default" },
          { text: "Grouping lines into the batch...", tone: "default" },
          { text: "Preparing each line at the locked rate...", tone: "default" },
          { text: "Recording the batch funding...", tone: "default" },
          { text: "[SUCCESS] Batch assembled and funded.", tone: "success" },
        ],
      },
      {
        title: "Settlement Engine",
        subtitle: "The Locked-Rate Clear",
        icon: Zap,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Locked-Rate Clear",
          description:
            "Settles every line at the batch's locked rate regardless of the current market, so a rate move between creation and settlement never changes the treasury's cost.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settleBatch(bytes32 id) external onlyTreasury {\n    Batch storage b = batches[id];\n    require(!b.settled, \"Already settled\");\n    b.settled = true;\n    for (uint i; i < batchLines[id].length; i++) {\n      _pay(batchLines[id][i], b.lockedRate);\n    }\n}",
        simAction: "Simulate Batch Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the locked rate for the batch...", tone: "default" },
          { text: "Settling each line at that rate...", tone: "default" },
          { text: "Ignoring current market drift...", tone: "default" },
          { text: "Marking the batch settled...", tone: "default" },
          { text: "[SUCCESS] Batch settled at locked rate.", tone: "success" },
        ],
      },
      {
        title: "Verification Window",
        subtitle: "The Rate Proof",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rate Proof",
          description:
            "Confirms every line settled at the locked rate and attests the batch, giving treasury verifiable proof that cost certainty held from initiation to settlement.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function verifyBatch(bytes32 id) external view returns (bool) {\n    Batch memory b = batches[id];\n    for (uint i; i < batchLines[id].length; i++) {\n      if (settledRate[id][i] != b.lockedRate) return false;\n    }\n    return b.settled;\n}",
        simAction: "Simulate Batch Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading each line's settled rate...", tone: "default" },
          { text: "Comparing against the locked rate...", tone: "default" },
          { text: "Confirming no line drifted...", tone: "default" },
          { text: "Attesting the batch...", tone: "default" },
          { text: "[SUCCESS] Batch verified at locked rate.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Locked-rate batch settlement is a horizontal capability. Here is how different actors rely on cost certainty.",
    sectors: [
      { icon: Building2, title: "Corporate Treasury", description: "Lock a rate for a bulk payment run and settle the whole batch at that rate, gaining certainty over cross-border costs instead of bearing FX drift.", assetTypes: ["Payment Batches", "Locked Rates", "Settlement Proofs"] },
      { icon: Truck, title: "Global Suppliers & Payroll", description: "Receive batch payments settled at a fixed, verifiable rate, so overseas suppliers and employees are paid predictably and on time.", assetTypes: ["Payment Lines", "Payout Records", "Rate Confirmations"] },
      { icon: Scale, title: "Banks & Audit", description: "Attest that each batch settled at its locked rate, backing treasury controls and audit with verifiable end-to-end evidence.", assetTypes: ["Rate Attestations", "Audit Trails", "Batch Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a treasury system or feeding verified FX rates, Cerulea routes both into one locked-rate batch record.",
    tracks: [
      {
        title: "Track A: Treasury System Bridging",
        description:
          "For companies on legacy treasury systems. Payment runs are translated into signed on-chain batches through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Treasury System", sublabel: "Corporate Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Batch Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Batch FX Settlement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: FX Rate Feed",
        description:
          "For verified FX rate providers. Signed rate feeds route through decentralized oracles directly into the rate lock at batch creation.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "FX Rate Provider", sublabel: "Signed Rate Feed", icon: Radio, accent: false },
          { label: "Decentralized Oracles", sublabel: "Rate Attestation", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Locked-Rate Batch Record", icon: Package, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a batch FX system with rate locking, batch grouping, locked-rate settlement, and end-to-end verification from scratch requires treasury and FX engineers and long integration cycles. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Rate & Batch Rules",
      ruleCount: 40,
      sliderPercent: 50,
      traditionalMonths: 14,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects treasury FX integration benchmarks. Building rate locking, batch grouping, locked-rate settlement, and end-to-end verification for an average payment program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your rate and batch rules into pre-audited WebAssembly binaries and provisions the batch FX ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "government-to-person-g2p-payment-disbursement-tracking",
    icon: Gift,
    eyebrow: "G2P Disbursement Layer",
    headline1: "Disburse to the right person.",
    headline2: "Prove every payment.",
    heroDescription:
      "Deliver a real-time disbursement record showing exactly which beneficiaries received government payments and when, reducing duplicate or missed payments. Each disbursement is anchored against a verified beneficiary identity, so administrators and citizens can both confirm status.",
    heroCta: "Deploy G2P Disbursement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn opaque, duplicate-prone government payments into a verified, real-time disbursement record.",
    mechanics: [
      { title: "Identity-Bound Disbursement", description: "Pay a verified person. The Civil Registry module binds each payment to a verified beneficiary identity, so a disbursement reaches the right individual." },
      { title: "Duplicate Prevention", description: "Stop double payments. Because each beneficiary is uniquely identified, a duplicate disbursement in the same cycle is blocked automatically." },
      { title: "Conditional Release", description: "Pay on eligibility. The Escrow and Conditional Settlement module releases each payment only when eligibility conditions are verifiably met." },
      { title: "Real-Time Administrator View", description: "See who is paid. Administrators read a live record of disbursements, so missed and pending beneficiaries surface immediately." },
      { title: "Citizen Status Check", description: "Let beneficiaries confirm. Each beneficiary checks their own payment status directly instead of chasing an office for an answer." },
      { title: "Compliance Attestation", description: "Back the program. The Compliance Attestations module attests each disbursement, giving the program an auditable trail for oversight." },
    ],
    lifecycleTitle: "The Disbursement Lifecycle",
    lifecycleSubtitle:
      "Follow a single government payment from beneficiary verification to a confirmed, checkable disbursement.",
    lifecycleSteps: [
      {
        label: "Beneficiary Verification",
        description:
          "A beneficiary is verified against the civil registry and enrolled for the disbursement cycle.",
        icon: IdCard,
        logFilename: "cerulea_g2p_engine.log",
        logLines: [
          { text: "[SYS] Verifying beneficiary identity...", time: "09:00:00", tone: "default" },
          { text: "[CMD] enroll { scheme: \"PENSION\", uid: \"XXXX-2201\" }", time: "09:00:01", tone: "primary" },
          { text: "[AUTH] Confirming against civil registry...", time: "09:00:01", tone: "secondary" },
          { text: "[OK] Beneficiary enrolled and verified.", time: "09:00:02", tone: "success" },
        ],
      },
      {
        label: "Eligibility Check",
        description:
          "The beneficiary's eligibility conditions are checked before any payment is released.",
        icon: ShieldCheck,
        logFilename: "cerulea_g2p_engine.log",
        logLines: [
          { text: "[SYS] Checking eligibility conditions...", time: "10:20:33", tone: "default" },
          { text: "[CMD] checkEligibility(BEN_2201)", time: "10:20:33", tone: "primary" },
          { text: "[SYS] Conditions verified for the cycle.", time: "10:20:34", tone: "default" },
          { text: "[OK] Eligible for disbursement.", time: "10:20:34", tone: "success" },
        ],
      },
      {
        label: "Payment Disbursement",
        description:
          "The payment is released to the verified beneficiary, with any duplicate in the cycle blocked.",
        icon: Gift,
        logFilename: "cerulea_g2p_engine.log",
        logLines: [
          { text: "[SYS] Disbursing payment...", time: "11:45:10", tone: "default" },
          { text: "[CMD] disburse(BEN_2201, amount: 3000)", time: "11:45:10", tone: "primary" },
          { text: "[SYS] Duplicate check passed for cycle.", time: "11:45:11", tone: "default" },
          { text: "[OK] Payment disbursed and anchored.", time: "11:45:11", tone: "success" },
        ],
      },
      {
        label: "Status Confirmation",
        description:
          "Administrators and the beneficiary both confirm the payment status from the anchored record.",
        icon: Search,
        logFilename: "cerulea_g2p_engine.log",
        logLines: [
          { text: "[SYS] Beneficiary checking payment status...", time: "14:00:44", tone: "default" },
          { text: "[CMD] status(BEN_2201)", time: "14:00:44", tone: "primary" },
          { text: "[SYS] Payment confirmed for the cycle.", time: "14:00:45", tone: "default" },
          { text: "[OK] Verifiable status returned.", time: "14:00:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes G2P disbursement into modular contracts. Each layer verifies identity, checks eligibility, disburses without duplicates, and exposes status to administrators and citizens.",
    layers: [
      {
        title: "Beneficiary Registry",
        subtitle: "The Verified Recipient",
        icon: IdCard,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Recipient",
          description:
            "The foundational data layer. It binds each beneficiary to a verified civil identity, so a disbursement is tied to a real, unique person and cannot be paid twice in a cycle.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract BeneficiaryRegistry {\n  struct Beneficiary {\n    bytes32 uid;\n    bytes32 scheme;\n    bool enrolled;\n  }\n\n  mapping(bytes32 => Beneficiary) public beneficiaries;\n\n  function enroll(bytes32 id, bytes32 uid, bytes32 scheme) external onlyAdmin {\n    beneficiaries[id] = Beneficiary(uid, scheme, true);\n  }\n}",
        simAction: "Simulate Beneficiary Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the beneficiary identity...", tone: "default" },
          { text: "Confirming against the civil registry...", tone: "default" },
          { text: "Enrolling for the scheme...", tone: "default" },
          { text: "Writing beneficiary to storage...", tone: "default" },
          { text: "[SUCCESS] Beneficiary verified and enrolled.", tone: "success" },
        ],
      },
      {
        title: "Eligibility Gate",
        subtitle: "The Conditional Check",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Conditional Check",
          description:
            "Verifies each beneficiary's eligibility conditions before payment, so a disbursement is released only when the program's rules are verifiably satisfied for the cycle.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function checkEligibility(bytes32 id, bytes32 cycle) public view returns (bool) {\n    return beneficiaries[id].enrolled && conditionsMet[id][cycle] && !paid[id][cycle];\n}",
        simAction: "Simulate Eligibility Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the beneficiary enrollment...", tone: "default" },
          { text: "Checking eligibility conditions...", tone: "default" },
          { text: "Confirming not yet paid this cycle...", tone: "default" },
          { text: "Marking eligible for disbursement...", tone: "default" },
          { text: "[SUCCESS] Beneficiary eligible for the cycle.", tone: "success" },
        ],
      },
      {
        title: "Disbursement Engine",
        subtitle: "The Duplicate-Proof Payout",
        icon: Gift,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Duplicate-Proof Payout",
          description:
            "Releases the payment to a verified, eligible beneficiary and blocks any duplicate in the same cycle, so funds reach the right person exactly once.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function disburse(bytes32 id, bytes32 cycle, uint256 amount) external onlyDisburser {\n    require(checkEligibility(id, cycle), \"Not eligible\");\n    paid[id][cycle] = true;\n    _pay(id, amount);\n    emit Disbursed(id, cycle, amount);\n}",
        simAction: "Simulate Disbursement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming beneficiary eligibility...", tone: "default" },
          { text: "Blocking any duplicate for the cycle...", tone: "default" },
          { text: "Releasing the payment...", tone: "default" },
          { text: "Anchoring the disbursement...", tone: "default" },
          { text: "[SUCCESS] Payment disbursed once and anchored.", tone: "success" },
        ],
      },
      {
        title: "Status Window",
        subtitle: "The Dual View",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Dual View",
          description:
            "Exposes disbursement status to administrators and beneficiaries alike, so missed or pending payments surface for the program and citizens can confirm their own payment.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function status(bytes32 id, bytes32 cycle) external view returns (bool paidThisCycle) {\n    return paid[id][cycle];\n}",
        simAction: "Simulate Status Query",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Beneficiary requesting payment status...", tone: "default" },
          { text: "Reading the anchored disbursement...", tone: "default" },
          { text: "Confirming payment for the cycle...", tone: "default" },
          { text: "Returning verifiable status...", tone: "default" },
          { text: "[SUCCESS] Payment status confirmed.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Verified G2P disbursement is a horizontal capability. Here is how different actors rely on a real-time payment record.",
    sectors: [
      { icon: Landmark, title: "Government Agencies", description: "Disburse pensions, subsidies, and relief against verified identities, cutting duplicate and missed payments and gaining a real-time view of who has been paid.", assetTypes: ["Disbursement Records", "Beneficiary Registries", "Cycle Reports"] },
      { icon: Users, title: "Beneficiaries", description: "Confirm their own payment status directly instead of chasing an office, gaining certainty that a subsidy or pension has been disbursed.", assetTypes: ["Payment Confirmations", "Status Views", "Enrollment Records"] },
      { icon: Shield, title: "Auditors & Oversight Bodies", description: "Audit a program from an anchored disbursement trail, replacing sampled reviews with verifiable evidence of every payment.", assetTypes: ["Audit Trails", "Compliance Records", "Duplicate Flags"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a program's payment system or serving beneficiaries from a basic phone, Cerulea routes both into one verified disbursement record.",
    tracks: [
      {
        title: "Track A: Program System Bridging",
        description:
          "For agencies on legacy disbursement systems. Payment instructions are translated into signed on-chain disbursements through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Disbursement System", sublabel: "Agency Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Payment Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "G2P Disbursement Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Beneficiary Mobile Access",
        description:
          "For beneficiaries on basic phones. A lightweight app confirms identity and reads payment status directly from the anchored record.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Beneficiary App", sublabel: "Citizen Device", icon: Fingerprint, accent: false },
          { label: "Disbursement Validators", sublabel: "Identity Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Disbursement Record", icon: Gift, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a G2P disbursement system with identity binding, duplicate prevention, conditional release, and dual status views from scratch requires public payments engineers and long registry integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Disbursement & Eligibility Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects public disbursement integration benchmarks. Building identity binding, duplicate prevention, conditional release, and dual administrator and citizen status views for an average program takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your disbursement and eligibility rules into pre-audited WebAssembly binaries and provisions the disbursement ledger and status view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "qr-code-payment-interoperability-across-upi-apps-and-banks",
    icon: QrCode,
    eyebrow: "Interoperability Verification Layer",
    headline1: "Scan across apps.",
    headline2: "Route without failure.",
    heroDescription:
      "Verify that QR code payments scan correctly across different UPI apps and banks regardless of which app generated the code. Anchored transaction routing data helps the network operator find and resolve interoperability failures with verifiable evidence of where a transaction broke.",
    heroCta: "Deploy Interoperability Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn intermittent scan failures and routing errors into anchored, diagnosable evidence.",
    mechanics: [
      { title: "Routing Data Anchoring", description: "Record the path. The Audit Logs module anchors verified transaction routing data across participating apps and banks, so each hop of a payment is evidenced." },
      { title: "Cross-App Verification", description: "Confirm the scan. The External Data Oracles module verifies that a QR generated by one app resolves correctly in another, surfacing version mismatches." },
      { title: "Failure Localization", description: "Find the break. When a transaction fails, the anchored path shows exactly which app or bank hop broke, replacing guesswork with evidence." },
      { title: "Standard Conformance", description: "Enforce the spec. The Compliance Attestations module checks each participant's QR handling against the interoperability standard and flags a deviation." },
      { title: "Operator Diagnostics", description: "Fix with proof. The network operator resolves an interoperability issue against verifiable evidence rather than conflicting logs from each party." },
      { title: "Participant Accountability", description: "Attribute the fault. Because each hop is signed, a routing error is attributed to the responsible participant, driving faster fixes." },
    ],
    lifecycleTitle: "The Interoperability Lifecycle",
    lifecycleSubtitle:
      "Follow a single cross-app QR payment from scan through routing to a diagnosed failure and resolution.",
    lifecycleSteps: [
      {
        label: "QR Scan",
        description:
          "A payer scans a QR generated by a different app. The scan and its parsed intent are recorded.",
        icon: QrCode,
        logFilename: "cerulea_interop_engine.log",
        logLines: [
          { text: "[SYS] Payer scanning cross-app QR...", time: "12:00:00", tone: "default" },
          { text: "[CMD] parseQR { generator: \"APP_X\", scanner: \"APP_Y\" }", time: "12:00:01", tone: "primary" },
          { text: "[SYS] Parsing QR intent and version...", time: "12:00:01", tone: "default" },
          { text: "[OK] Scan recorded for routing.", time: "12:00:02", tone: "success" },
        ],
      },
      {
        label: "Routing Trace",
        description:
          "The transaction routes across apps and banks, with each hop anchored as verified routing data.",
        icon: Network,
        logFilename: "cerulea_interop_engine.log",
        logLines: [
          { text: "[SYS] Tracing routing across participants...", time: "12:00:03", tone: "default" },
          { text: "[CMD] trace(TX_5521)", time: "12:00:03", tone: "primary" },
          { text: "[SYS] Anchoring each app and bank hop.", time: "12:00:04", tone: "default" },
          { text: "[OK] Routing path anchored.", time: "12:00:04", tone: "success" },
        ],
      },
      {
        label: "Failure Localization",
        description:
          "A routing error occurs. The anchored path localizes the failure to the exact hop at fault.",
        icon: Search,
        logFilename: "cerulea_interop_engine.log",
        logLines: [
          { text: "[SYS] Transaction failed to complete...", time: "12:00:05", tone: "default" },
          { text: "[CMD] localize(TX_5521)", time: "12:00:05", tone: "primary" },
          { text: "[SYS] Version mismatch at bank hop 2.", time: "12:00:06", tone: "error" },
          { text: "[OK] Failure localized with evidence.", time: "12:00:06", tone: "success" },
        ],
      },
      {
        label: "Operator Resolution",
        description:
          "The network operator resolves the issue against the anchored evidence and attributes the fault.",
        icon: FileCheck,
        logFilename: "cerulea_interop_engine.log",
        logLines: [
          { text: "[SYS] Operator reviewing failure evidence...", time: "13:20:44", tone: "default" },
          { text: "[CMD] resolve(TX_5521)", time: "13:20:44", tone: "primary" },
          { text: "[AUTH] Attributing fault to responsible hop...", time: "13:20:45", tone: "secondary" },
          { text: "[OK] Issue resolved with verifiable proof.", time: "13:20:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes interoperability verification into modular contracts. Each layer records a scan, traces routing, localizes failures, and attributes fault without conflicting logs.",
    layers: [
      {
        title: "Scan Registry",
        subtitle: "The Cross-App Record",
        icon: QrCode,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Cross-App Record",
          description:
            "The foundational data layer. It records each cross-app scan with the generating and scanning app and the parsed QR version, forming the origin of a diagnosable routing trail.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ScanRegistry {\n  struct Scan {\n    bytes32 generator;\n    bytes32 scanner;\n    uint16 version;\n  }\n\n  mapping(bytes32 => Scan) public scans;\n\n  function record(bytes32 txId, bytes32 gen, bytes32 scn, uint16 version) external {\n    scans[txId] = Scan(gen, scn, version);\n  }\n}",
        simAction: "Simulate QR Scan",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the scanned QR...", tone: "default" },
          { text: "Recording generator and scanner apps...", tone: "default" },
          { text: "Parsing the QR version...", tone: "default" },
          { text: "Writing scan to storage...", tone: "default" },
          { text: "[SUCCESS] Cross-app scan recorded.", tone: "success" },
        ],
      },
      {
        title: "Routing Tracer",
        subtitle: "The Anchored Path",
        icon: Network,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Anchored Path",
          description:
            "Anchors each app and bank hop as verified routing data, so a transaction's full path is evidenced and a failure can be traced to a precise point instead of a blur of separate logs.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function addHop(bytes32 txId, bytes32 participant, bool ok) external onlyParticipant {\n    hops[txId].push(Hop(participant, ok, block.timestamp));\n    emit HopAnchored(txId, participant, ok);\n}",
        simAction: "Simulate Routing Trace",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Routing across participating apps...", tone: "default" },
          { text: "Anchoring each app and bank hop...", tone: "default" },
          { text: "Signing each hop by its participant...", tone: "default" },
          { text: "Recording the routing path...", tone: "default" },
          { text: "[SUCCESS] Routing path anchored.", tone: "success" },
        ],
      },
      {
        title: "Failure Localizer",
        subtitle: "The Break Finder",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Break Finder",
          description:
            "Walks the anchored path to find the exact hop where a transaction failed, replacing guesswork and finger-pointing with a precise, evidenced diagnosis.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function localize(bytes32 txId) external view returns (bytes32 faultAt) {\n    Hop[] memory h = hops[txId];\n    for (uint i; i < h.length; i++) {\n      if (!h[i].ok) return h[i].participant;\n    }\n    return bytes32(0);\n}",
        simAction: "Simulate Failure Localization",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the anchored routing path...", tone: "default" },
          { text: "Walking each hop for a failure...", tone: "default" },
          { text: "Detecting a version mismatch...", tone: "default" },
          { text: "Isolating the hop at fault...", tone: "default" },
          { text: "[SUCCESS] Failure localized with evidence.", tone: "success" },
        ],
      },
      {
        title: "Resolution Ledger",
        subtitle: "The Accountability Trail",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Accountability Trail",
          description:
            "Records the operator's resolution and attributes the fault to the responsible participant, so interoperability issues are fixed from verifiable evidence and accountability is clear.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function resolve(bytes32 txId, bytes32 faultAt, string calldata fix) external onlyOperator {\n    resolutions[txId] = Resolution(faultAt, fix, block.timestamp);\n    emit Resolved(txId, faultAt);\n}",
        simAction: "Simulate Operator Resolution",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Operator reviewing failure evidence...", tone: "default" },
          { text: "Confirming the hop at fault...", tone: "default" },
          { text: "Attributing responsibility...", tone: "default" },
          { text: "Recording the resolution...", tone: "default" },
          { text: "[SUCCESS] Issue resolved with proof.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Interoperability verification is a horizontal capability. Here is how different actors rely on evidenced routing.",
    sectors: [
      { icon: Network, title: "Network Operators", description: "Diagnose and resolve interoperability failures from anchored routing evidence, replacing conflicting participant logs with a single verifiable path.", assetTypes: ["Routing Records", "Failure Diagnoses", "Resolution Trails"] },
      { icon: QrCode, title: "UPI Apps & PSPs", description: "See exactly where a cross-app payment broke and conform to the interoperability standard, reducing scan failures that frustrate users.", assetTypes: ["Scan Records", "Conformance Checks", "Hop Attestations"] },
      { icon: Landmark, title: "Banks & Regulators", description: "Attribute routing faults accountably and audit interoperability from verifiable evidence, driving faster fixes across the network.", assetTypes: ["Audit Trails", "Accountability Records", "Standard Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a participant's switch or collecting scan data from apps, Cerulea routes both into one evidenced interoperability record.",
    tracks: [
      {
        title: "Track A: Switch System Bridging",
        description:
          "For participants on legacy switch systems. Routing events are translated into signed on-chain hop records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Switch System", sublabel: "Participant Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Hop Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Interoperability Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: App Scan Capture",
        description:
          "For UPI apps capturing scans. An app client signs each scan and routing hop and posts it directly to the verification contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "UPI App Client", sublabel: "Payer / Payee App", icon: Fingerprint, accent: false },
          { label: "Routing Validators", sublabel: "Hop Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Interoperability Record", icon: QrCode, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an interoperability verification system with routing anchoring, cross-app checks, failure localization, and accountable resolution from scratch requires payments network engineers and long participant integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Routing & Conformance Rules",
      ruleCount: 39,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects payments network integration benchmarks. Building routing anchoring, cross-app verification, failure localization, and accountable resolution across participants takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your routing and conformance rules into pre-audited WebAssembly binaries and provisions the interoperability ledger and diagnostics layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "payroll-disbursement-for-gig-economy-workers-across-platforms",
    icon: Wallet,
    eyebrow: "Gig Payroll Layer",
    headline1: "Combine the earnings.",
    headline2: "Pay once.",
    heroDescription:
      "Give gig workers earning from multiple platforms combined, verified payouts with a unified earnings record. Consolidated income from ride-hailing, delivery, and freelance work gives workers one clear financial picture for tax filing and loan applications.",
    heroCta: "Deploy Gig Payroll",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn fragmented per-platform payouts into one consolidated, verified earnings record.",
    mechanics: [
      { title: "Multi-Platform Aggregation", description: "Unify the income. The Wallet Authentication module ties a worker's earnings from every participating platform to one identity, consolidating fragmented payouts." },
      { title: "Verified Earnings Record", description: "Prove the total. The Civil Registry module anchors each platform's confirmed earnings, so a worker has a verified record for tax and loan use." },
      { title: "Combined Payout", description: "Pay in one run. The Escrow and Conditional Settlement module combines confirmed earnings into a single payout to the worker." },
      { title: "Per-Platform Attribution", description: "Keep the detail. Each earning is attributed to its source platform, so the consolidated record still shows where income came from." },
      { title: "Tax-Ready Summary", description: "Simplify filing. The unified record produces a tax-ready earnings summary, replacing the effort of collating many separate statements." },
      { title: "Loan-Ready Proof", description: "Unlock credit. A worker shares a verified consolidated earnings proof with a lender, improving access to loans that fragmented income made hard." },
    ],
    lifecycleTitle: "The Payroll Lifecycle",
    lifecycleSubtitle:
      "Follow a gig worker's earnings from multiple platforms into one consolidated, verified payout.",
    lifecycleSteps: [
      {
        label: "Worker Onboarding",
        description:
          "A gig worker links their identity to the platforms they earn from, creating one unified earnings account.",
        icon: Fingerprint,
        logFilename: "cerulea_gigpay_engine.log",
        logLines: [
          { text: "[SYS] Onboarding gig worker...", time: "09:00:00", tone: "default" },
          { text: "[CMD] linkPlatforms { worker: \"GIG_331\", platforms: 3 }", time: "09:00:01", tone: "primary" },
          { text: "[AUTH] Binding platforms to one identity...", time: "09:00:01", tone: "secondary" },
          { text: "[OK] Unified earnings account created.", time: "09:00:02", tone: "success" },
        ],
      },
      {
        label: "Earnings Confirmation",
        description:
          "Each platform confirms the worker's earnings, anchored and attributed to its source.",
        icon: Coins,
        logFilename: "cerulea_gigpay_engine.log",
        logLines: [
          { text: "[SYS] Ingesting platform earnings...", time: "18:00:00", tone: "default" },
          { text: "[CMD] confirmEarnings(GIG_331, platform: \"RIDE\", amount: 4200)", time: "18:00:01", tone: "primary" },
          { text: "[SYS] Attributing earnings to source.", time: "18:00:02", tone: "default" },
          { text: "[OK] Earnings from 3 platforms anchored.", time: "18:00:02", tone: "success" },
        ],
      },
      {
        label: "Combined Payout",
        description:
          "Confirmed earnings across platforms are combined into a single verified payout to the worker.",
        icon: Wallet,
        logFilename: "cerulea_gigpay_engine.log",
        logLines: [
          { text: "[SYS] Combining earnings for payout...", time: "20:00:10", tone: "default" },
          { text: "[CMD] payout(GIG_331)", time: "20:00:10", tone: "primary" },
          { text: "[SYS] Aggregating 3 platform balances...", time: "20:00:11", tone: "default" },
          { text: "[OK] Combined payout settled.", time: "20:00:11", tone: "success" },
        ],
      },
      {
        label: "Record Sharing",
        description:
          "The worker shares a verified consolidated earnings record for tax filing or a loan application.",
        icon: FileCheck,
        logFilename: "cerulea_gigpay_engine.log",
        logLines: [
          { text: "[SYS] Worker requesting earnings proof...", time: "10:15:44", tone: "default" },
          { text: "[CMD] exportRecord(GIG_331, purpose: \"LOAN\")", time: "10:15:44", tone: "primary" },
          { text: "[SYS] Compiling verified consolidated record.", time: "10:15:45", tone: "default" },
          { text: "[OK] Loan-ready proof generated.", time: "10:15:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes gig payroll into modular contracts. Each layer links platforms, confirms earnings, combines payouts, and exports a verified record without fragmented statements.",
    layers: [
      {
        title: "Worker Registry",
        subtitle: "The Unified Identity",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Unified Identity",
          description:
            "The foundational data layer. It links a worker's participating platforms to one identity, so earnings that used to arrive as separate payouts consolidate to a single account.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract WorkerRegistry {\n  struct Worker {\n    address owner;\n    bytes32[] platforms;\n  }\n\n  mapping(bytes32 => Worker) public workers;\n\n  function link(bytes32 id, bytes32 platform) external onlyWorker(id) {\n    workers[id].platforms.push(platform);\n  }\n}",
        simAction: "Simulate Worker Onboarding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the worker's platforms...", tone: "default" },
          { text: "Binding each platform to one identity...", tone: "default" },
          { text: "Creating the unified account...", tone: "default" },
          { text: "Writing worker to storage...", tone: "default" },
          { text: "[SUCCESS] Unified earnings account created.", tone: "success" },
        ],
      },
      {
        title: "Earnings Ledger",
        subtitle: "The Attributed Record",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Attributed Record",
          description:
            "Anchors each platform's confirmed earnings attributed to its source, so the worker has a verified record that shows both the total and where each part of it came from.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function confirmEarnings(bytes32 worker, bytes32 platform, uint256 amount) external onlyPlatform {\n    earnings[worker][platform] += amount;\n    total[worker] += amount;\n    emit EarningsConfirmed(worker, platform, amount);\n}",
        simAction: "Simulate Earnings Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving platform earnings...", tone: "default" },
          { text: "Attributing them to the source...", tone: "default" },
          { text: "Updating the worker total...", tone: "default" },
          { text: "Anchoring the earnings...", tone: "default" },
          { text: "[SUCCESS] Earnings anchored and attributed.", tone: "success" },
        ],
      },
      {
        title: "Payout Combiner",
        subtitle: "The Single Run",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Single Run",
          description:
            "Combines confirmed earnings across platforms into one payout, so a worker receives a single verified payment instead of chasing several separate platform payouts.",
          platformFunction: "Settlement & Distribution",
        },
        codeSnippet:
          "function payout(bytes32 worker) external {\n    uint256 amt = total[worker] - paidOut[worker];\n    require(amt > 0, \"Nothing to pay\");\n    paidOut[worker] += amt;\n    _pay(workers[worker].owner, amt);\n}",
        simAction: "Simulate Combined Payout",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading confirmed platform balances...", tone: "default" },
          { text: "Aggregating into one payout...", tone: "default" },
          { text: "Settling to the worker...", tone: "default" },
          { text: "Updating the paid-out total...", tone: "default" },
          { text: "[SUCCESS] Combined payout settled.", tone: "success" },
        ],
      },
      {
        title: "Record Exporter",
        subtitle: "The Verifiable Summary",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verifiable Summary",
          description:
            "Compiles the consolidated earnings into a verified, shareable summary for tax filing or a loan, replacing the effort of collating many statements with one authoritative proof.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function exportRecord(bytes32 worker) external view returns (uint256 grandTotal, uint256 platforms) {\n    return (total[worker], workers[worker].platforms.length);\n}",
        simAction: "Simulate Record Export",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Worker requesting an earnings proof...", tone: "default" },
          { text: "Aggregating across all platforms...", tone: "default" },
          { text: "Compiling the verified summary...", tone: "default" },
          { text: "Producing the shareable record...", tone: "default" },
          { text: "[SUCCESS] Loan-ready proof generated.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Consolidated gig payroll is a horizontal capability. Here is how different actors rely on a unified earnings record.",
    sectors: [
      { icon: Users, title: "Gig Workers", description: "Receive one combined payout and hold a verified earnings record across platforms, gaining a clear financial picture for tax and loan applications.", assetTypes: ["Unified Earnings", "Combined Payouts", "Tax Summaries"] },
      { icon: Truck, title: "Gig Platforms", description: "Confirm worker earnings into a shared record that consolidates with other platforms, improving worker retention through simpler, unified payouts.", assetTypes: ["Earnings Confirmations", "Payout Feeds", "Attribution Records"] },
      { icon: Landmark, title: "Lenders & Tax Authorities", description: "Assess a worker from a verified consolidated income record rather than fragmented statements, extending credit and processing filings with confidence.", assetTypes: ["Income Proofs", "Audit Trails", "Verified Summaries"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a platform's payout system or serving workers from a mobile app, Cerulea routes both into one consolidated earnings record.",
    tracks: [
      {
        title: "Track A: Platform System Bridging",
        description:
          "For gig platforms on legacy payout systems. Earnings events are translated into signed on-chain confirmations through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Platform Payout System", sublabel: "Gig Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Earnings Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Gig Payroll Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Worker Mobile Access",
        description:
          "For workers on mobile. A worker app links platforms, receives the combined payout, and exports a verified record directly.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Worker App", sublabel: "Gig Worker Device", icon: Fingerprint, accent: false },
          { label: "Payroll Validators", sublabel: "Earnings Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Consolidated Earnings Record", icon: Wallet, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a gig payroll system with multi-platform aggregation, verified earnings, combined payouts, and tax and loan-ready records from scratch requires payroll engineers and long platform integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Earnings & Payout Rules",
      ruleCount: 36,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects payroll aggregation integration benchmarks. Building multi-platform aggregation, verified earnings, combined payouts, and tax and loan-ready records takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your earnings and payout rules into pre-audited WebAssembly binaries and provisions the gig payroll ledger and record exporter instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "remittance-and-cross-border-payments-without-correspondent-banks",
    icon: Globe,
    eyebrow: "Correspondent-Free Settlement Layer",
    headline1: "Skip the correspondent.",
    headline2: "Settle direct.",
    heroDescription:
      "Run cross-border settlement on a public chain, bank to bank, without a correspondent intermediary and FEMA-compliant with AML screening. A small cooperative bank offers direct transfers in a corridor where it has no SWIFT correspondent relationship.",
    heroCta: "Deploy Direct Settlement",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow, opaque correspondent chain into direct, compliant bank-to-bank settlement.",
    mechanics: [
      { title: "Direct Bank Settlement", description: "Remove the middle bank. The Payments Rails module settles bank to bank on a public chain, so a small bank reaches a corridor without a correspondent relationship." },
      { title: "Stablecoin Value Leg", description: "Move value natively. The Stablecoin Treasury module carries the value leg on-chain, replacing the nostro and vostro accounts a correspondent chain requires." },
      { title: "Fiat Ramps", description: "Keep the fiat experience. The Fiat On-Ramp module converts to and from local currency, so customers send and receive in fiat while settlement is chain-native." },
      { title: "FEMA-Compliant Screening", description: "Meet the rules. Each transfer is screened for FEMA and AML compliance before settlement, so a direct corridor stays fully regulated." },
      { title: "Corridor Reach", description: "Open new routes. A bank can serve corridors it could not access through correspondents, at lower cost and faster speed." },
      { title: "Transparent Settlement", description: "See it end to end. Both banks read the settlement directly, replacing the opacity of an intermediary chain with a shared record." },
    ],
    lifecycleTitle: "The Settlement Lifecycle",
    lifecycleSubtitle:
      "Follow a single cross-border transfer from a small bank through direct settlement to recipient credit.",
    lifecycleSteps: [
      {
        label: "Transfer Initiation",
        description:
          "A cooperative bank initiates a transfer for an NRI customer, screened for FEMA and AML compliance.",
        icon: Landmark,
        logFilename: "cerulea_direct_engine.log",
        logLines: [
          { text: "[SYS] Cooperative bank initiating transfer...", time: "10:00:00", tone: "default" },
          { text: "[CMD] initiate { corridor: \"IN_UK\", amount: 250000 }", time: "10:00:01", tone: "primary" },
          { text: "[AUTH] FEMA and AML screen passed...", time: "10:00:02", tone: "secondary" },
          { text: "[OK] Transfer cleared for settlement.", time: "10:00:02", tone: "success" },
        ],
      },
      {
        label: "Value Conversion",
        description:
          "The sending bank converts fiat to a stablecoin value leg for direct on-chain settlement.",
        icon: Coins,
        logFilename: "cerulea_direct_engine.log",
        logLines: [
          { text: "[SYS] Converting fiat to value leg...", time: "10:00:03", tone: "default" },
          { text: "[CMD] toStable(TRN_88, from: \"INR\")", time: "10:00:03", tone: "primary" },
          { text: "[SYS] Value leg prepared, no nostro used.", time: "10:00:04", tone: "default" },
          { text: "[OK] Stablecoin value leg ready.", time: "10:00:04", tone: "success" },
        ],
      },
      {
        label: "Direct Settlement",
        description:
          "The value settles directly to the receiving bank with no correspondent intermediary in the path.",
        icon: Globe,
        logFilename: "cerulea_direct_engine.log",
        logLines: [
          { text: "[SYS] Settling bank to bank...", time: "10:05:10", tone: "default" },
          { text: "[CMD] settle(TRN_88, receivingBank)", time: "10:05:10", tone: "primary" },
          { text: "[SYS] No correspondent hop in path.", time: "10:05:11", tone: "default" },
          { text: "[OK] Direct settlement complete.", time: "10:05:11", tone: "success" },
        ],
      },
      {
        label: "Recipient Credit",
        description:
          "The receiving bank converts to local fiat and credits the recipient in minutes at a low fee.",
        icon: Wallet,
        logFilename: "cerulea_direct_engine.log",
        logLines: [
          { text: "[SYS] Converting to recipient fiat...", time: "10:09:44", tone: "default" },
          { text: "[CMD] credit(TRN_88, to: \"GBP\")", time: "10:09:44", tone: "primary" },
          { text: "[SYS] Fee 0.5%, settled in 10 minutes.", time: "10:09:45", tone: "default" },
          { text: "[OK] Recipient credited directly.", time: "10:09:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes direct cross-border settlement into modular contracts. Each layer screens compliance, converts value, settles bank to bank, and credits without a correspondent in the path.",
    layers: [
      {
        title: "Compliance Screen",
        subtitle: "The FEMA Guard",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The FEMA Guard",
          description:
            "The foundational compliance layer. It screens each transfer for FEMA and AML before settlement, so a direct corridor without a correspondent remains fully regulated.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "contract ComplianceScreen {\n  function screen(bytes32 trn, address sender, address recipient) external view returns (bool) {\n    require(!sanctioned[sender] && !sanctioned[recipient], \"Blocked\");\n    return femaLimitOk[trn] && purposeCoded[trn];\n  }\n}",
        simAction: "Simulate Compliance Screen",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading transfer parties and purpose...", tone: "default" },
          { text: "Checking sanctions lists...", tone: "default" },
          { text: "Validating FEMA limits...", tone: "default" },
          { text: "Clearing the transfer...", tone: "default" },
          { text: "[SUCCESS] Transfer screened and compliant.", tone: "success" },
        ],
      },
      {
        title: "Value Converter",
        subtitle: "The Nostro Replacement",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Nostro Replacement",
          description:
            "Converts fiat to a stablecoin value leg, replacing the nostro and vostro accounts of a correspondent chain with a chain-native transfer the banks settle directly.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function toStable(bytes32 trn, uint256 fiat) external onlyBank {\n    uint256 stable = convert(fiat);\n    valueLeg[trn] = stable;\n    emit ValuePrepared(trn, stable);\n}",
        simAction: "Simulate Value Conversion",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the sending bank fiat...", tone: "default" },
          { text: "Converting to a stablecoin value leg...", tone: "default" },
          { text: "Confirming no nostro account used...", tone: "default" },
          { text: "Preparing the value leg...", tone: "default" },
          { text: "[SUCCESS] Value leg ready for settlement.", tone: "success" },
        ],
      },
      {
        title: "Settlement Rail",
        subtitle: "The Direct Path",
        icon: Globe,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Direct Path",
          description:
            "Settles the value leg directly to the receiving bank on a public chain, so a small bank reaches a corridor it has no correspondent relationship to serve.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settle(bytes32 trn, address receivingBank) external onlyBank {\n    uint256 amt = valueLeg[trn];\n    require(amt > 0, \"No value leg\");\n    valueLeg[trn] = 0;\n    stable.transfer(receivingBank, amt);\n    emit Settled(trn, receivingBank);\n}",
        simAction: "Simulate Direct Settlement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the prepared value leg...", tone: "default" },
          { text: "Routing directly to the receiving bank...", tone: "default" },
          { text: "Confirming no correspondent hop...", tone: "default" },
          { text: "Settling the value leg...", tone: "default" },
          { text: "[SUCCESS] Direct settlement complete.", tone: "success" },
        ],
      },
      {
        title: "Credit Module",
        subtitle: "The Recipient Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Recipient Payout",
          description:
            "Converts settled value to recipient fiat and credits the local account, so the customer experiences an ordinary fiat deposit at the end of a correspondent-free transfer.",
          platformFunction: "Settlement & Distribution",
        },
        codeSnippet:
          "function credit(bytes32 trn, address recipient) external onlyBank {\n    uint256 fiat = convertOut(received[trn]);\n    _credit(recipient, fiat);\n    emit Credited(trn, recipient, fiat);\n}",
        simAction: "Simulate Recipient Credit",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading settled value at receiving bank...", tone: "default" },
          { text: "Converting to recipient fiat...", tone: "default" },
          { text: "Crediting the recipient account...", tone: "default" },
          { text: "Recording the credit...", tone: "default" },
          { text: "[SUCCESS] Recipient credited directly.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Correspondent-free settlement is a horizontal capability. Here is how different actors reach new corridors.",
    sectors: [
      { icon: Landmark, title: "Cooperative & Small Banks", description: "Offer direct cross-border transfers in corridors where they hold no correspondent relationship, competing on speed and cost with far larger banks.", assetTypes: ["Direct Transfers", "Corridor Records", "Settlement Proofs"] },
      { icon: Users, title: "NRI & Retail Customers", description: "Send and receive across borders in minutes at low fees through their own bank, without the delay and opacity of a correspondent chain.", assetTypes: ["Transfers", "Credit Receipts", "Status Views"] },
      { icon: Shield, title: "Regulators & Compliance", description: "Rely on FEMA and AML screening built into every direct settlement and an auditable record, so new corridors remain fully compliant.", assetTypes: ["Screening Records", "Audit Trails", "Compliance Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's core system or connecting counterparty banks directly, Cerulea routes both into one correspondent-free settlement record.",
    tracks: [
      {
        title: "Track A: Core Banking Bridging",
        description:
          "For banks on legacy core systems. Transfer instructions are translated into signed on-chain direct settlements through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Core Banking System", sublabel: "Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Settlement Signing", icon: Server, accent: true },
          { label: "Cerulea Public Chain", sublabel: "Direct Settlement Rail", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Counterparty Bank Node",
        description:
          "For receiving banks on institutional nodes. A bank node settles the value leg directly and credits recipients from the shared rail.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Bank Node", sublabel: "Counterparty Bank", icon: Fingerprint, accent: false },
          { label: "Settlement Validators", sublabel: "Direct Consensus", icon: Network, accent: true },
          { label: "Cerulea Public L1", sublabel: "Cross-Border Ledger", icon: Globe, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a correspondent-free settlement system with compliance screening, value conversion, direct settlement, and recipient credit from scratch requires cross-border payments engineers and long banking integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Settlement & Compliance Rules",
      ruleCount: 46,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects cross-border banking integration benchmarks. Building compliance screening, value conversion, direct bank-to-bank settlement, and recipient credit for an average corridor takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your settlement and compliance rules into pre-audited WebAssembly binaries and provisions the direct settlement rail and credit layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "joint-account-and-nominee-verification-for-inheritance-claims",
    icon: ShieldCheck,
    eyebrow: "Inheritance Verification Layer",
    headline1: "Verify the nominee.",
    headline2: "Release the claim.",
    heroDescription:
      "Speed inheritance claims by verifying nominee identity and the deceased account holder's death record digitally against trusted registries before fund transfer. A multi-week branch process built on certificates and identity proofs compresses to a matter of days.",
    heroCta: "Deploy Inheritance Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow, certificate-heavy inheritance claim into a digital verification against trusted registries.",
    mechanics: [
      { title: "Digital Death Verification", description: "Confirm the record. The Civil Registry module verifies the deceased account holder's death record digitally against the trusted registry, replacing a physical certificate check." },
      { title: "Nominee Identity Proof", description: "Verify the claimant. The DID and VC Ledger module verifies the nominee's identity against trusted sources before any fund transfer is considered." },
      { title: "Claim Eligibility Check", description: "Match the claim. The Compliance Attestations module checks the nominee's claim against the account's nomination record, so only the right claimant proceeds." },
      { title: "Conditional Fund Release", description: "Release on proof. Funds transfer only once the death record and nominee identity are both verified, removing manual branch sign-off delays." },
      { title: "Fraud Prevention", description: "Block false claims. Because verification is against trusted registries, forged certificates and false nominee claims are caught before release." },
      { title: "Auditable Claim Trail", description: "Record the process. Each verification and release is anchored, giving the bank a clear, auditable record of every inheritance claim." },
    ],
    lifecycleTitle: "The Claim Lifecycle",
    lifecycleSubtitle:
      "Follow a single inheritance claim from death verification through nominee proof to fund release.",
    lifecycleSteps: [
      {
        label: "Death Verification",
        description:
          "The deceased account holder's death record is verified digitally against the civil registry.",
        icon: FileCheck,
        logFilename: "cerulea_inherit_engine.log",
        logLines: [
          { text: "[SYS] Verifying death record...", time: "09:30:00", tone: "default" },
          { text: "[CMD] verifyDeath { account: \"ACC_771\", uid: \"XXXX-9910\" }", time: "09:30:01", tone: "primary" },
          { text: "[AUTH] Checking against civil registry...", time: "09:30:01", tone: "secondary" },
          { text: "[OK] Death record verified.", time: "09:30:02", tone: "success" },
        ],
      },
      {
        label: "Nominee Verification",
        description:
          "The nominee's identity is verified against trusted sources and matched to the account nomination.",
        icon: Fingerprint,
        logFilename: "cerulea_inherit_engine.log",
        logLines: [
          { text: "[SYS] Verifying nominee identity...", time: "11:10:33", tone: "default" },
          { text: "[CMD] verifyNominee(ACC_771, nominee)", time: "11:10:33", tone: "primary" },
          { text: "[SYS] Nominee matches nomination record.", time: "11:10:34", tone: "default" },
          { text: "[OK] Nominee identity verified.", time: "11:10:34", tone: "success" },
        ],
      },
      {
        label: "Eligibility Check",
        description:
          "The claim is checked against the account's nomination, so only the rightful claimant proceeds.",
        icon: ShieldCheck,
        logFilename: "cerulea_inherit_engine.log",
        logLines: [
          { text: "[SYS] Checking claim eligibility...", time: "12:40:10", tone: "default" },
          { text: "[CMD] checkClaim(ACC_771)", time: "12:40:10", tone: "primary" },
          { text: "[SYS] Death and nominee both verified.", time: "12:40:11", tone: "default" },
          { text: "[OK] Claim eligible for release.", time: "12:40:11", tone: "success" },
        ],
      },
      {
        label: "Fund Release",
        description:
          "Funds transfer to the verified nominee once both verifications pass, in days instead of weeks.",
        icon: Coins,
        logFilename: "cerulea_inherit_engine.log",
        logLines: [
          { text: "[SYS] Releasing inheritance funds...", time: "14:15:44", tone: "default" },
          { text: "[CMD] release(ACC_771, nominee)", time: "14:15:44", tone: "primary" },
          { text: "[SYS] Verified claim, transferring funds.", time: "14:15:45", tone: "default" },
          { text: "[OK] Funds released to nominee.", time: "14:15:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes inheritance verification into modular contracts. Each layer verifies death, proves the nominee, checks eligibility, and releases funds without a multi-week branch process.",
    layers: [
      {
        title: "Death Verifier",
        subtitle: "The Registry Check",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Registry Check",
          description:
            "The foundational verification layer. It confirms the deceased account holder's death record against the trusted civil registry, replacing a physical certificate examination.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "contract DeathVerifier {\n  function verifyDeath(bytes32 account, bytes32 uid, bytes calldata proof) external onlyBank returns (bool) {\n    bool ok = registry.confirmDeath(uid, proof);\n    deathVerified[account] = ok;\n    return ok;\n  }\n}",
        simAction: "Simulate Death Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the deceased account holder...", tone: "default" },
          { text: "Checking against the civil registry...", tone: "default" },
          { text: "Confirming the death record...", tone: "default" },
          { text: "Recording the verification...", tone: "default" },
          { text: "[SUCCESS] Death record verified.", tone: "success" },
        ],
      },
      {
        title: "Nominee Verifier",
        subtitle: "The Claimant Proof",
        icon: Fingerprint,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Claimant Proof",
          description:
            "Verifies the nominee's identity against trusted sources and matches it to the account's nomination record, so only the rightful claimant can advance the claim.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "function verifyNominee(bytes32 account, bytes32 nominee) external onlyBank returns (bool) {\n    bool match_ = nomination[account] == nominee && didValid[nominee];\n    nomineeVerified[account] = match_;\n    return match_;\n}",
        simAction: "Simulate Nominee Verification",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the nominee identity...", tone: "default" },
          { text: "Verifying against trusted sources...", tone: "default" },
          { text: "Matching to the nomination record...", tone: "default" },
          { text: "Recording the verification...", tone: "default" },
          { text: "[SUCCESS] Nominee identity verified.", tone: "success" },
        ],
      },
      {
        title: "Eligibility Gate",
        subtitle: "The Rightful Claimant",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Rightful Claimant",
          description:
            "Confirms both death and nominee verification before a claim can proceed, so funds release only to the verified rightful claimant and forged claims are caught.",
          platformFunction: "Compliance Control",
        },
        codeSnippet:
          "function checkClaim(bytes32 account) public view returns (bool) {\n    return deathVerified[account] && nomineeVerified[account] && !released[account];\n}",
        simAction: "Simulate Eligibility Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming the death is verified...", tone: "default" },
          { text: "Confirming the nominee is verified...", tone: "default" },
          { text: "Checking funds not already released...", tone: "default" },
          { text: "Marking the claim eligible...", tone: "default" },
          { text: "[SUCCESS] Claim eligible for release.", tone: "success" },
        ],
      },
      {
        title: "Release Trigger",
        subtitle: "The Verified Transfer",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Transfer",
          description:
            "Releases the account funds to the verified nominee once eligibility passes, compressing a multi-week branch process into a transfer that completes in days.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function release(bytes32 account, address nominee) external onlyBank {\n    require(checkClaim(account), \"Claim not eligible\");\n    released[account] = true;\n    _transfer(account, nominee);\n    emit InheritanceReleased(account, nominee);\n}",
        simAction: "Simulate Fund Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming the claim is eligible...", tone: "default" },
          { text: "Marking the claim released...", tone: "default" },
          { text: "Transferring funds to the nominee...", tone: "default" },
          { text: "Recording the release...", tone: "default" },
          { text: "[SUCCESS] Funds released to nominee.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Digital inheritance verification is a horizontal capability. Here is how different actors rely on registry-backed claims.",
    sectors: [
      { icon: Landmark, title: "Banks", description: "Verify death records and nominee identity digitally before release, compressing a multi-week claim process to days while blocking forged certificates.", assetTypes: ["Claim Records", "Verification Trails", "Release Proofs"] },
      { icon: Users, title: "Nominees & Heirs", description: "Receive inherited funds faster through digital verification, replacing repeated branch visits with certificates and proofs with a streamlined claim.", assetTypes: ["Identity Proofs", "Claim Status", "Fund Receipts"] },
      { icon: Gavel, title: "Registries & Legal Authorities", description: "Provide trusted death and identity confirmation into a verifiable claim process, so inheritance releases rest on authoritative records.", assetTypes: ["Death Confirmations", "Nomination Records", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's account system or connecting registry data, Cerulea routes both into one verifiable inheritance claim record.",
    tracks: [
      {
        title: "Track A: Account System Bridging",
        description:
          "For banks on legacy account systems. Claim and release events are translated into signed on-chain verification records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Account System", sublabel: "Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Claim Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Inheritance Claim Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Registry Data Feed",
        description:
          "For civil registry and identity data. Signed confirmations route through decentralized oracles directly into the verification contracts.",
        connectorLabels: ["ORACLE SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Registry Feed", sublabel: "Civil / Identity Registry", icon: FileCheck, accent: false },
          { label: "Decentralized Oracles", sublabel: "Verification Attestation", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Inheritance Claim Record", icon: ShieldCheck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building an inheritance verification system with digital death verification, nominee proof, eligibility checks, and conditional release from scratch requires banking engineers and long registry integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Verification & Release Rules",
      ruleCount: 35,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects account operations integration benchmarks. Building digital death verification, nominee identity proof, eligibility checks, and conditional fund release takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your verification and release rules into pre-audited WebAssembly binaries and provisions the inheritance claim ledger and release layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "fixed-deposit-and-loan-collateral-linkage-automation",
    icon: Lock,
    eyebrow: "Collateral Linkage Layer",
    headline1: "Lock on the loan.",
    headline2: "Release on repayment.",
    heroDescription:
      "Place an automatic lien on a fixed deposit used as loan collateral, and release it the moment the loan is repaid. Linking the loan and the deposit means the lien is set and cleared by repayment status, with no manual follow-up that gets missed or delayed.",
    heroCta: "Deploy Collateral Linkage",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a manual lien placement and removal into an automatic link driven by repayment status.",
    mechanics: [
      { title: "Automatic Lien Placement", description: "Lock at disbursal. The Escrow and Conditional Settlement module places a lien on the fixed deposit the moment the loan against it is disbursed." },
      { title: "Repayment-Linked Release", description: "Clear on payoff. The lien is released automatically the instant the loan is fully repaid, so no customer waits on a manual removal step." },
      { title: "Loan-Deposit Binding", description: "Tie the two together. The deposit and the loan are bound on one record, so their statuses move together rather than in separate systems." },
      { title: "No Manual Follow-Up", description: "Remove the missed step. Because release is driven by repayment status, the forgotten lien removal that frustrates customers cannot happen." },
      { title: "Immutable Lien Trail", description: "Record the lifecycle. The Audit Logs module seals each lien placement and release, giving the bank a clear record of every collateral link." },
      { title: "Compliance Attestation", description: "Back the position. The Compliance Attestations module attests the current lien status, so the bank's collateral records are verifiably accurate." },
    ],
    lifecycleTitle: "The Collateral Lifecycle",
    lifecycleSubtitle:
      "Follow a single fixed deposit from loan disbursal and lien placement to automatic release on repayment.",
    lifecycleSteps: [
      {
        label: "Loan Disbursal",
        description:
          "A loan is disbursed against a fixed deposit, and the deposit is bound to the loan as collateral.",
        icon: Coins,
        logFilename: "cerulea_collateral_engine.log",
        logLines: [
          { text: "[SYS] Disbursing loan against deposit...", time: "10:00:00", tone: "default" },
          { text: "[CMD] disburse { loan: \"LN_552\", deposit: \"FD_9910\", amount: 150000 }", time: "10:00:01", tone: "primary" },
          { text: "[AUTH] Binding deposit as collateral...", time: "10:00:01", tone: "secondary" },
          { text: "[OK] Loan and deposit linked.", time: "10:00:02", tone: "success" },
        ],
      },
      {
        label: "Lien Placement",
        description:
          "An automatic lien is placed on the deposit, preventing withdrawal while the loan is outstanding.",
        icon: Lock,
        logFilename: "cerulea_collateral_engine.log",
        logLines: [
          { text: "[SYS] Placing lien on FD_9910...", time: "10:00:03", tone: "default" },
          { text: "[CMD] placeLien(FD_9910, LN_552)", time: "10:00:03", tone: "primary" },
          { text: "[SYS] Withdrawal blocked while loan open.", time: "10:00:04", tone: "default" },
          { text: "[OK] Lien placed automatically.", time: "10:00:04", tone: "success" },
        ],
      },
      {
        label: "Loan Repayment",
        description:
          "The borrower repays the loan in full and the repayment status updates on the linked record.",
        icon: Activity,
        logFilename: "cerulea_collateral_engine.log",
        logLines: [
          { text: "[SYS] Final loan repayment received...", time: "09:20:33", tone: "default" },
          { text: "[CMD] repay(LN_552, final: true)", time: "09:20:33", tone: "primary" },
          { text: "[SYS] Loan marked fully repaid.", time: "09:20:34", tone: "default" },
          { text: "[OK] Repayment status updated.", time: "09:20:34", tone: "success" },
        ],
      },
      {
        label: "Automatic Release",
        description:
          "The lien is released automatically the moment the loan is repaid, freeing the deposit at once.",
        icon: ShieldCheck,
        logFilename: "cerulea_collateral_engine.log",
        logLines: [
          { text: "[SYS] Loan repaid, releasing lien...", time: "09:20:35", tone: "default" },
          { text: "[CMD] releaseLien(FD_9910)", time: "09:20:35", tone: "primary" },
          { text: "[SYS] Deposit freed without manual step.", time: "09:20:36", tone: "default" },
          { text: "[OK] Lien released automatically.", time: "09:20:36", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes collateral linkage into modular contracts. Each layer binds the loan and deposit, places the lien, tracks repayment, and releases without manual follow-up.",
    layers: [
      {
        title: "Linkage Registry",
        subtitle: "The Bound Pair",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Bound Pair",
          description:
            "The foundational data layer. It binds a loan and the fixed deposit that secures it on one record, so their statuses move together instead of drifting across separate systems.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract LinkageRegistry {\n  struct Link {\n    bytes32 loan;\n    bytes32 deposit;\n    bool active;\n  }\n\n  mapping(bytes32 => Link) public links;\n\n  function bind(bytes32 id, bytes32 loan, bytes32 deposit) external onlyBank {\n    links[id] = Link(loan, deposit, true);\n  }\n}",
        simAction: "Simulate Loan-Deposit Binding",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the loan and deposit...", tone: "default" },
          { text: "Binding them on one record...", tone: "default" },
          { text: "Marking the link active...", tone: "default" },
          { text: "Writing link to storage...", tone: "default" },
          { text: "[SUCCESS] Loan and deposit linked.", tone: "success" },
        ],
      },
      {
        title: "Lien Manager",
        subtitle: "The Automatic Lock",
        icon: Lock,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Lock",
          description:
            "Places a lien on the deposit at disbursal and blocks withdrawal while the loan is open, so collateral is secured automatically the instant the loan begins.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function placeLien(bytes32 deposit, bytes32 loan) external onlyBank {\n    liens[deposit] = loan;\n    locked[deposit] = true;\n    emit LienPlaced(deposit, loan);\n}",
        simAction: "Simulate Lien Placement",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the disbursed loan...", tone: "default" },
          { text: "Placing a lien on the deposit...", tone: "default" },
          { text: "Blocking withdrawal while open...", tone: "default" },
          { text: "Recording the lien...", tone: "default" },
          { text: "[SUCCESS] Lien placed automatically.", tone: "success" },
        ],
      },
      {
        title: "Repayment Monitor",
        subtitle: "The Status Watch",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Status Watch",
          description:
            "Tracks the loan's repayment status on the linked record, so the moment the loan is fully repaid the release condition is met without a manual reconciliation.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function repay(bytes32 link, uint256 amount) external {\n    outstanding[link] -= amount;\n    if (outstanding[link] == 0) fullyRepaid[link] = true;\n    emit Repaid(link, amount, fullyRepaid[link]);\n}",
        simAction: "Simulate Loan Repayment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Receiving the final repayment...", tone: "default" },
          { text: "Reducing the outstanding balance...", tone: "default" },
          { text: "Detecting the loan is fully repaid...", tone: "default" },
          { text: "Updating the repayment status...", tone: "default" },
          { text: "[SUCCESS] Loan marked fully repaid.", tone: "success" },
        ],
      },
      {
        title: "Release Trigger",
        subtitle: "The Instant Unlock",
        icon: ShieldCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Instant Unlock",
          description:
            "Releases the lien the instant the loan is fully repaid, so the customer's deposit is freed automatically and the forgotten manual removal never happens.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function releaseLien(bytes32 link) external {\n    require(fullyRepaid[link], \"Loan not repaid\");\n    bytes32 deposit = links[link].deposit;\n    locked[deposit] = false;\n    links[link].active = false;\n    emit LienReleased(deposit);\n}",
        simAction: "Simulate Automatic Release",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming the loan is fully repaid...", tone: "default" },
          { text: "Releasing the lien on the deposit...", tone: "default" },
          { text: "Freeing the deposit for withdrawal...", tone: "default" },
          { text: "Closing the collateral link...", tone: "default" },
          { text: "[SUCCESS] Lien released automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Automatic collateral linkage is a horizontal capability. Here is how different actors rely on status-driven liens.",
    sectors: [
      { icon: Landmark, title: "Banks & Lenders", description: "Place and release liens on deposit collateral automatically by repayment status, eliminating the missed removal that frustrates customers and creates disputes.", assetTypes: ["Collateral Links", "Lien Records", "Release Proofs"] },
      { icon: Users, title: "Borrowers", description: "See their deposit freed the instant the loan is repaid, with no branch visit to chase a forgotten lien removal.", assetTypes: ["Linked Deposits", "Repayment Status", "Release Confirmations"] },
      { icon: Scale, title: "Auditors & Operations", description: "Rely on an attested, verifiable lien status across the book, replacing manual collateral reconciliation with a live accurate record.", assetTypes: ["Lien Trails", "Audit Records", "Status Attestations"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's loan and deposit systems or connecting the operations desk, Cerulea routes both into one linked collateral record.",
    tracks: [
      {
        title: "Track A: Loan & Deposit Bridging",
        description:
          "For banks on legacy loan and deposit systems. Disbursal and repayment events are translated into signed on-chain lien transitions through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Loan & Deposit Systems", sublabel: "Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Lien Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Collateral Linkage Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Operations Desk Access",
        description:
          "For the bank operations desk. The desk reads live lien status and confirms automatic releases directly from the linked record.",
        connectorLabels: ["READ ACCESS", "STATE EXECUTION"],
        nodes: [
          { label: "Operations Desk", sublabel: "Bank Back Office", icon: Fingerprint, accent: false },
          { label: "Linkage Validators", sublabel: "Status Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Linked Collateral Record", icon: Lock, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a collateral linkage system with automatic lien placement, repayment-linked release, loan-deposit binding, and an attested lien trail from scratch requires core banking engineers and long system integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Lien & Release Rules",
      ruleCount: 32,
      sliderPercent: 50,
      traditionalMonths: 12,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects core banking integration benchmarks. Building automatic lien placement, repayment-linked release, loan-deposit binding, and an attested lien trail takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your lien and release rules into pre-audited WebAssembly binaries and provisions the collateral linkage ledger and release layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "multi-bank-loan-eligibility-check-without-duplicate-credit-pulls",
    icon: Search,
    eyebrow: "Shared Eligibility Layer",
    headline1: "Check once.",
    headline2: "Compare everywhere.",
    heroDescription:
      "Let a borrower see loan offers from multiple banks based on one credit check instead of several. The borrower shares a single verified credit result with participating banks, who provide eligibility-based offers without each running a separate pull that lowers the score.",
    heroCta: "Deploy Shared Eligibility",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn multiple score-lowering credit pulls into one verified result shared across banks.",
    mechanics: [
      { title: "Single Verified Pull", description: "Check once. The KYC and Identity Verification module anchors one verified credit check the borrower can reuse, so multiple banks do not each pull the bureau." },
      { title: "Consent-Based Sharing", description: "Keep the borrower in control. The borrower grants each bank consent to read the one credit result, recorded on-chain for every access." },
      { title: "Eligibility-Based Offers", description: "Compare fairly. The DID and VC Ledger module lets each bank compute an eligibility offer from the shared result, so the borrower compares offers side by side." },
      { title: "Score Protection", description: "Avoid the penalty. Because only one pull occurs, the borrower avoids the score drop caused by several hard checks in a short window." },
      { title: "Privacy-Preserving Proof", description: "Share the outcome, not the file. The borrower proves creditworthiness without exposing the full underlying report to every bank." },
      { title: "Auditable Access Trail", description: "Record every offer. The Compliance Attestations module logs each consent and offer, so the process is auditable for the borrower and regulators." },
    ],
    lifecycleTitle: "The Eligibility Lifecycle",
    lifecycleSubtitle:
      "Follow a borrower from one credit check to multiple bank offers with no duplicate pulls.",
    lifecycleSteps: [
      {
        label: "Single Credit Check",
        description:
          "One verified credit check is performed and anchored as a reusable result on the borrower's identity.",
        icon: Search,
        logFilename: "cerulea_eligibility_engine.log",
        logLines: [
          { text: "[SYS] Performing single credit check...", time: "10:00:00", tone: "default" },
          { text: "[CMD] pullCredit { borrower: \"BRW_441\" }", time: "10:00:01", tone: "primary" },
          { text: "[AUTH] Anchoring verified result...", time: "10:00:01", tone: "secondary" },
          { text: "[OK] Reusable credit result anchored.", time: "10:00:02", tone: "success" },
        ],
      },
      {
        label: "Consent Grants",
        description:
          "The borrower grants participating banks consent to read the single verified credit result.",
        icon: Handshake,
        logFilename: "cerulea_eligibility_engine.log",
        logLines: [
          { text: "[SYS] Borrower granting bank consent...", time: "10:20:33", tone: "default" },
          { text: "[CMD] grantConsent(BRW_441, banks: 4)", time: "10:20:33", tone: "primary" },
          { text: "[SYS] Recording consent for each bank.", time: "10:20:34", tone: "default" },
          { text: "[OK] 4 banks authorized to read result.", time: "10:20:34", tone: "success" },
        ],
      },
      {
        label: "Offer Computation",
        description:
          "Each bank computes an eligibility-based offer from the shared result without a fresh pull.",
        icon: Scale,
        logFilename: "cerulea_eligibility_engine.log",
        logLines: [
          { text: "[SYS] Banks computing offers...", time: "11:15:10", tone: "default" },
          { text: "[CMD] computeOffer(BRW_441, bank)", time: "11:15:10", tone: "primary" },
          { text: "[SYS] Offers built from one shared result.", time: "11:15:11", tone: "default" },
          { text: "[OK] 4 eligibility offers computed.", time: "11:15:11", tone: "success" },
        ],
      },
      {
        label: "Offer Comparison",
        description:
          "The borrower compares offers side by side, having protected their score from multiple pulls.",
        icon: PieChart,
        logFilename: "cerulea_eligibility_engine.log",
        logLines: [
          { text: "[SYS] Borrower reviewing offers...", time: "12:40:44", tone: "default" },
          { text: "[CMD] compareOffers(BRW_441)", time: "12:40:44", tone: "primary" },
          { text: "[SYS] Score preserved, one pull only.", time: "12:40:45", tone: "default" },
          { text: "[OK] Offers compared side by side.", time: "12:40:45", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes shared eligibility into modular contracts. Each layer anchors one credit result, gates consent, computes offers, and exposes a comparison without duplicate pulls.",
    layers: [
      {
        title: "Credit Result Registry",
        subtitle: "The Reusable Pull",
        icon: Search,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Reusable Pull",
          description:
            "The foundational data layer. It anchors one verified credit result the borrower can reuse, so several banks reference a single check instead of each triggering a score-lowering pull.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract CreditResult {\n  struct Result {\n    bytes32 borrower;\n    uint16 score;\n    uint256 pulledAt;\n  }\n\n  mapping(bytes32 => Result) public results;\n\n  function anchor(bytes32 id, bytes32 borrower, uint16 score) external onlyBureau {\n    results[id] = Result(borrower, score, block.timestamp);\n  }\n}",
        simAction: "Simulate Single Credit Check",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Performing one verified credit pull...", tone: "default" },
          { text: "Anchoring the reusable result...", tone: "default" },
          { text: "Binding it to the borrower...", tone: "default" },
          { text: "Writing result to storage...", tone: "default" },
          { text: "[SUCCESS] Reusable credit result anchored.", tone: "success" },
        ],
      },
      {
        title: "Consent Gate",
        subtitle: "The Borrower Switch",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Borrower Switch",
          description:
            "Requires borrower consent before any bank reads the credit result, recording each grant on-chain so the borrower controls which banks see their check.",
          platformFunction: "Consent Control",
        },
        codeSnippet:
          "function grantConsent(bytes32 resultId, address bank) external onlyBorrower(resultId) {\n    consent[resultId][bank] = true;\n    emit ConsentGranted(resultId, bank);\n}",
        simAction: "Simulate Consent Grant",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Borrower selecting participating banks...", tone: "default" },
          { text: "Recording consent for each bank...", tone: "default" },
          { text: "Authorizing read of the result...", tone: "default" },
          { text: "Logging the consent grants...", tone: "default" },
          { text: "[SUCCESS] Banks authorized by consent.", tone: "success" },
        ],
      },
      {
        title: "Offer Engine",
        subtitle: "The Eligibility Builder",
        icon: Scale,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Eligibility Builder",
          description:
            "Lets each consented bank compute an eligibility offer from the shared result, so the borrower gets comparable offers without any bank running a fresh hard pull.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function computeOffer(bytes32 resultId, address bank) external view returns (uint256 limit, uint256 rateBps) {\n    require(consent[resultId][bank], \"No consent\");\n    uint16 s = results[resultId].score;\n    return (limitFor(bank, s), rateFor(bank, s));\n}",
        simAction: "Simulate Offer Computation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming the bank holds consent...", tone: "default" },
          { text: "Reading the shared credit score...", tone: "default" },
          { text: "Computing limit and rate...", tone: "default" },
          { text: "Recording the eligibility offer...", tone: "default" },
          { text: "[SUCCESS] Eligibility offer computed.", tone: "success" },
        ],
      },
      {
        title: "Comparison Window",
        subtitle: "The Side-by-Side View",
        icon: PieChart,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Side-by-Side View",
          description:
            "Exposes every bank's offer in one view so the borrower compares terms side by side, having protected their score by triggering only a single credit pull.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function compareOffers(bytes32 resultId) external view returns (Offer[] memory) {\n    return offers[resultId];\n}",
        simAction: "Simulate Offer Comparison",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Borrower requesting all offers...", tone: "default" },
          { text: "Assembling each bank's terms...", tone: "default" },
          { text: "Confirming only one pull occurred...", tone: "default" },
          { text: "Returning the side-by-side view...", tone: "default" },
          { text: "[SUCCESS] Offers compared, score preserved.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Shared eligibility is a horizontal capability. Here is how different actors rely on a single credit result.",
    sectors: [
      { icon: Landmark, title: "Banks & Lenders", description: "Offer eligibility-based loans from a shared verified credit result, competing for borrowers without each triggering a hard pull that penalizes the applicant.", assetTypes: ["Credit Results", "Eligibility Offers", "Consent Records"] },
      { icon: Users, title: "Borrowers", description: "Compare offers from several banks on one credit check, protecting their score from the drop caused by multiple hard inquiries.", assetTypes: ["Reusable Checks", "Offer Comparisons", "Consent Grants"] },
      { icon: Shield, title: "Bureaus & Regulators", description: "Support a single verified pull shared under consent and audit every access, reducing unnecessary inquiries across the system.", assetTypes: ["Verified Pulls", "Access Logs", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's lending system or serving borrowers from a comparison app, Cerulea routes both into one shared eligibility record.",
    tracks: [
      {
        title: "Track A: Lending System Bridging",
        description:
          "For banks on legacy lending systems. Offer computations are translated into signed on-chain eligibility records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Lending System", sublabel: "Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Offer Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Shared Eligibility Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Borrower Comparison App",
        description:
          "For borrowers on a comparison app. The borrower signs each consent grant and reads all offers directly from the shared record.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Comparison App", sublabel: "Borrower Device", icon: Fingerprint, accent: false },
          { label: "Eligibility Validators", sublabel: "Consent Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Shared Eligibility Record", icon: Search, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a shared eligibility system with a single verified pull, consent gating, eligibility offers, and a comparison view from scratch requires lending engineers and long bureau integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Eligibility & Consent Rules",
      ruleCount: 37,
      sliderPercent: 50,
      traditionalMonths: 13,
      ceruleaWeeks: 4,
      methodology:
        "The legacy timeline reflects lending integration benchmarks. Building a single verified pull, consent gating, eligibility offer computation, and a borrower comparison view across banks takes a baseline of 7 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your eligibility and consent rules into pre-audited WebAssembly binaries and provisions the shared eligibility ledger and comparison view instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "supply-chain-financing-invoice-discounting-dynamic-discounting",
    icon: Truck,
    eyebrow: "Supply Chain Finance Engine",
    headline1: "Fund the invoice.",
    headline2: "Free the working capital.",
    heroDescription:
      "Deploy a supply chain finance network where MSME suppliers access early payment against buyer-confirmed invoices and banks lend at lower rates against verified receivables. The working capital cycle shortens from 90 days to 5, and cheaper financing lets suppliers take larger orders.",
    heroCta: "Deploy Supply Chain Finance",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a 90-day working capital wait into 5-day early payment on verified receivables.",
    mechanics: [
      { title: "Buyer-Confirmed Invoices", description: "Verify the receivable. The Trade Finance Documents module anchors each invoice with the buyer's confirmation, so a bank lends against a verified obligation rather than an unconfirmed claim." },
      { title: "Early Payment Escrow", description: "Pay in days. The Escrow and Conditional Settlement module releases early payment to the supplier against a confirmed invoice, shortening the cycle from 90 days to 5." },
      { title: "Rate Reduction", description: "Lend cheaper. Because the receivable is verified and buyer-confirmed, the bank prices the financing far below an unsecured rate, cutting the supplier's cost." },
      { title: "Dynamic Discounting", description: "Price by timing. The Logic and Actions Editor module supports dynamic discounts, so the discount adjusts with how early the supplier takes payment." },
      { title: "Fraud Prevention", description: "Kill double financing. Each invoice's digest is anchored, so the same receivable financed twice across banks is detected immediately." },
      { title: "Automatic Repayment", description: "Close the loop. When the buyer pays on the due date, the financing is repaid automatically from the settled invoice." },
    ],
    lifecycleTitle: "The Financing Lifecycle",
    lifecycleSubtitle:
      "Follow a single invoice from buyer confirmation through early payment to automatic repayment.",
    lifecycleSteps: [
      {
        label: "Invoice Confirmation",
        description:
          "A supplier submits an invoice and the buyer confirms it, anchoring a verified receivable.",
        icon: FileCheck,
        logFilename: "cerulea_scf_engine.log",
        logLines: [
          { text: "[SYS] Supplier submitting invoice...", time: "09:00:00", tone: "default" },
          { text: "[CMD] submitInvoice { inv: \"INV_552\", buyer: \"BUY_09\", amount: 500000 }", time: "09:00:01", tone: "primary" },
          { text: "[AUTH] Buyer confirming the invoice...", time: "09:00:02", tone: "secondary" },
          { text: "[OK] Buyer-confirmed receivable anchored.", time: "09:00:02", tone: "success" },
        ],
      },
      {
        label: "Financing Offer",
        description:
          "A bank offers early payment at a reduced rate against the verified, buyer-confirmed invoice.",
        icon: Coins,
        logFilename: "cerulea_scf_engine.log",
        logLines: [
          { text: "[SYS] Bank pricing verified receivable...", time: "10:20:33", tone: "default" },
          { text: "[CMD] offerFinance(INV_552, ratePct: 700)", time: "10:20:33", tone: "primary" },
          { text: "[SYS] Rate 7% vs 18% unsecured.", time: "10:20:34", tone: "default" },
          { text: "[OK] Early payment offer made.", time: "10:20:34", tone: "success" },
        ],
      },
      {
        label: "Early Payment",
        description:
          "The supplier accepts and receives early payment within days, freeing working capital.",
        icon: Truck,
        logFilename: "cerulea_scf_engine.log",
        logLines: [
          { text: "[SYS] Releasing early payment...", time: "11:15:10", tone: "default" },
          { text: "[CMD] payEarly(INV_552, supplier)", time: "11:15:10", tone: "primary" },
          { text: "[SYS] Paid in 5 days vs 90 day cycle.", time: "11:15:11", tone: "default" },
          { text: "[OK] Supplier working capital freed.", time: "11:15:11", tone: "success" },
        ],
      },
      {
        label: "Buyer Repayment",
        description:
          "On the due date the buyer pays, and the financing is repaid automatically from settlement.",
        icon: Activity,
        logFilename: "cerulea_scf_engine.log",
        logLines: [
          { text: "[SYS] Buyer paying on due date...", time: "09:00:00", tone: "default" },
          { text: "[CMD] settleInvoice(INV_552)", time: "09:00:01", tone: "primary" },
          { text: "[SYS] Financing repaid from settlement.", time: "09:00:02", tone: "default" },
          { text: "[OK] Loop closed automatically.", time: "09:00:02", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes supply chain finance into modular contracts. Each layer confirms the invoice, funds early payment, prices dynamically, and repays without double financing.",
    layers: [
      {
        title: "Invoice Registry",
        subtitle: "The Verified Receivable",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Receivable",
          description:
            "The foundational data layer. It anchors each invoice with the buyer's confirmation and a unique digest, so a bank lends against a verified obligation and a receivable cannot be financed twice.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract InvoiceRegistry {\n  struct Invoice {\n    address supplier;\n    address buyer;\n    uint256 amount;\n    bool confirmed;\n    bool financed;\n  }\n\n  mapping(bytes32 => Invoice) public invoices;\n\n  function confirm(bytes32 id) external onlyBuyer(id) {\n    invoices[id].confirmed = true;\n  }\n}",
        simAction: "Simulate Invoice Confirmation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the submitted invoice...", tone: "default" },
          { text: "Recording the buyer confirmation...", tone: "default" },
          { text: "Anchoring the unique digest...", tone: "default" },
          { text: "Writing invoice to storage...", tone: "default" },
          { text: "[SUCCESS] Buyer-confirmed receivable anchored.", tone: "success" },
        ],
      },
      {
        title: "Financing Engine",
        subtitle: "The Early Payment",
        icon: Coins,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Early Payment",
          description:
            "Funds early payment to the supplier against a confirmed invoice and blocks double financing, shortening the working capital cycle from 90 days to 5.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function payEarly(bytes32 id, address bank) external {\n    Invoice storage i = invoices[id];\n    require(i.confirmed && !i.financed, \"Not financeable\");\n    i.financed = true;\n    _advance(bank, i.supplier, discounted(i.amount));\n    emit Financed(id, bank);\n}",
        simAction: "Simulate Early Payment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming the invoice is verified...", tone: "default" },
          { text: "Checking it is not already financed...", tone: "default" },
          { text: "Advancing early payment to the supplier...", tone: "default" },
          { text: "Marking the invoice financed...", tone: "default" },
          { text: "[SUCCESS] Supplier paid early on the receivable.", tone: "success" },
        ],
      },
      {
        title: "Dynamic Discount",
        subtitle: "The Timing Pricer",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Timing Pricer",
          description:
            "Prices the discount by how early the supplier takes payment, so both sides benefit from a rate that reflects timing rather than a fixed, coarse fee.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function discounted(bytes32 id, uint256 daysEarly) public view returns (uint256) {\n    uint256 amt = invoices[id].amount;\n    uint256 discount = amt * discountBps * daysEarly / (10000 * 365);\n    return amt - discount;\n}",
        simAction: "Simulate Dynamic Discount",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the invoice amount...", tone: "default" },
          { text: "Measuring how early payment is taken...", tone: "default" },
          { text: "Computing the timing-based discount...", tone: "default" },
          { text: "Setting the net early payment...", tone: "default" },
          { text: "[SUCCESS] Dynamic discount priced.", tone: "success" },
        ],
      },
      {
        title: "Repayment Router",
        subtitle: "The Automatic Close",
        icon: Workflow,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Close",
          description:
            "Repays the financing bank automatically when the buyer settles the invoice on the due date, closing the loop without a manual reconciliation between supplier, bank, and buyer.",
          platformFunction: "Settlement & Distribution",
        },
        codeSnippet:
          "function settleInvoice(bytes32 id) external onlyBuyer(id) {\n    Invoice storage i = invoices[id];\n    require(i.financed, \"Not financed\");\n    _repay(financier[id], i.amount);\n    emit Settled(id);\n}",
        simAction: "Simulate Buyer Repayment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer paying on the due date...", tone: "default" },
          { text: "Reading the financed invoice...", tone: "default" },
          { text: "Repaying the financing bank...", tone: "default" },
          { text: "Closing the invoice...", tone: "default" },
          { text: "[SUCCESS] Financing repaid automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Supply chain finance is a horizontal capability. Here is how different actors put verified receivables to work.",
    sectors: [
      { icon: Truck, title: "MSME Suppliers", description: "Access early payment against buyer-confirmed invoices at rates far below unsecured lending, freeing working capital to take larger orders.", assetTypes: ["Confirmed Invoices", "Early Payments", "Discount Records"] },
      { icon: Landmark, title: "Banks & Financiers", description: "Lend against verified, buyer-confirmed receivables at lower risk, with double financing blocked and repayment closed automatically on settlement.", assetTypes: ["Financing Offers", "Receivable Records", "Repayment Trails"] },
      { icon: Building2, title: "Large Buyers", description: "Confirm supplier invoices into a shared record and settle on the due date, strengthening supplier resilience while retaining standard payment terms.", assetTypes: ["Invoice Confirmations", "Settlement Records", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a buyer's ERP or serving suppliers from a portal, Cerulea routes both into one supply chain finance record.",
    tracks: [
      {
        title: "Track A: Buyer ERP Bridging",
        description:
          "For large buyers on legacy ERP. Invoice confirmations and settlements are translated into signed on-chain receivable events through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Buyer ERP", sublabel: "Corporate System", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Invoice Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Supply Chain Finance Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Supplier Portal Access",
        description:
          "For suppliers on a portal. A supplier wallet signs each invoice submission and early payment request and routes it directly to the finance contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Supplier Portal", sublabel: "MSME Supplier", icon: Fingerprint, accent: false },
          { label: "Finance Validators", sublabel: "Receivable Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Verified Receivable Record", icon: Truck, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a supply chain finance network with buyer-confirmed invoices, early payment escrow, dynamic discounting, and automatic repayment from scratch requires trade finance engineers and long multi-party integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Receivable & Financing Rules",
      ruleCount: 49,
      sliderPercent: 50,
      traditionalMonths: 16,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects supply chain finance integration benchmarks. Building buyer-confirmed invoicing, early payment escrow, dynamic discounting, and automatic repayment across buyers, suppliers, and banks takes a baseline of 9 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your receivable and financing rules into pre-audited WebAssembly binaries and provisions the supply chain finance ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "factoring-and-receivables-marketplace-for-sme-working-capital",
    icon: Coins,
    eyebrow: "Receivables Marketplace Layer",
    headline1: "Sell the invoice.",
    headline2: "Get paid today.",
    heroDescription:
      "Run a marketplace where small businesses sell verified invoices to financiers for immediate cash, with automatic repayment when the buyer pays. Each invoice is anchored as a verified document tied to a confirmed buyer obligation, so financiers purchase receivables with confidence.",
    heroCta: "Deploy Receivables Marketplace",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn slow-paying invoices into immediate cash through a marketplace of verified receivables.",
    mechanics: [
      { title: "Verified Invoice Listing", description: "List with proof. The Trade Finance Documents module anchors each invoice as a verified document tied to a confirmed buyer obligation, so financiers know it is genuine." },
      { title: "Financier Marketplace", description: "Match capital to receivables. Financiers bid to purchase listed invoices, giving small businesses immediate cash at a competitive discount." },
      { title: "Escrowed Purchase", description: "Settle safely. The Escrow and Conditional Settlement module holds the purchase price and releases it to the business when the sale settles." },
      { title: "Automatic Repayment", description: "Close on buyer payment. When the buyer pays the original invoice, the financier is repaid automatically from settlement." },
      { title: "Verified Seller Identity", description: "Know the seller. The KYC and Identity Verification module verifies each business, so financiers transact with confidence and fraud is reduced." },
      { title: "Double-Sale Prevention", description: "Prevent reselling. Each invoice's digest is anchored, so the same receivable sold to two financiers is detected immediately." },
    ],
    lifecycleTitle: "The Marketplace Lifecycle",
    lifecycleSubtitle:
      "Follow a single invoice from verified listing through financier purchase to automatic repayment.",
    lifecycleSteps: [
      {
        label: "Invoice Listing",
        description:
          "A small business lists a verified, buyer-confirmed invoice for sale on the marketplace.",
        icon: FileCheck,
        logFilename: "cerulea_factoring_engine.log",
        logLines: [
          { text: "[SYS] Business listing invoice...", time: "09:00:00", tone: "default" },
          { text: "[CMD] listInvoice { inv: \"INV_881\", amount: 300000 }", time: "09:00:01", tone: "primary" },
          { text: "[AUTH] Verifying seller and buyer obligation...", time: "09:00:02", tone: "secondary" },
          { text: "[OK] Verified invoice listed.", time: "09:00:02", tone: "success" },
        ],
      },
      {
        label: "Financier Purchase",
        description:
          "A financier bids and purchases the invoice at a discount, with the price held in escrow.",
        icon: Coins,
        logFilename: "cerulea_factoring_engine.log",
        logLines: [
          { text: "[SYS] Financier bidding on invoice...", time: "10:20:33", tone: "default" },
          { text: "[CMD] purchase(INV_881, discount: 400)", time: "10:20:33", tone: "primary" },
          { text: "[SYS] Purchase price escrowed.", time: "10:20:34", tone: "default" },
          { text: "[OK] Invoice purchased at 4% discount.", time: "10:20:34", tone: "success" },
        ],
      },
      {
        label: "Immediate Cash",
        description:
          "The purchase settles and the business receives immediate cash for the sold receivable.",
        icon: Wallet,
        logFilename: "cerulea_factoring_engine.log",
        logLines: [
          { text: "[SYS] Releasing purchase to business...", time: "10:25:10", tone: "default" },
          { text: "[CMD] settleSale(INV_881)", time: "10:25:10", tone: "primary" },
          { text: "[SYS] Immediate cash released.", time: "10:25:11", tone: "default" },
          { text: "[OK] Business paid for receivable.", time: "10:25:11", tone: "success" },
        ],
      },
      {
        label: "Automatic Repayment",
        description:
          "When the buyer pays the original invoice, the financier is repaid automatically from settlement.",
        icon: Activity,
        logFilename: "cerulea_factoring_engine.log",
        logLines: [
          { text: "[SYS] Buyer settling original invoice...", time: "09:00:00", tone: "default" },
          { text: "[CMD] settleInvoice(INV_881)", time: "09:00:01", tone: "primary" },
          { text: "[SYS] Financier repaid from settlement.", time: "09:00:02", tone: "default" },
          { text: "[OK] Marketplace loop closed.", time: "09:00:02", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes the receivables marketplace into modular contracts. Each layer lists a verified invoice, matches a financier, settles the sale, and repays without double selling.",
    layers: [
      {
        title: "Listing Registry",
        subtitle: "The Verified Asset",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Verified Asset",
          description:
            "The foundational data layer. It anchors each listed invoice as a verified document tied to a confirmed buyer obligation, with a unique digest that prevents the same receivable being sold twice.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ListingRegistry {\n  struct Listing {\n    address seller;\n    uint256 amount;\n    bool confirmed;\n    bool sold;\n  }\n\n  mapping(bytes32 => Listing) public listings;\n\n  function list(bytes32 id, uint256 amount) external onlyVerifiedSeller {\n    listings[id] = Listing(msg.sender, amount, true, false);\n  }\n}",
        simAction: "Simulate Invoice Listing",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Verifying the seller identity...", tone: "default" },
          { text: "Confirming the buyer obligation...", tone: "default" },
          { text: "Anchoring the unique invoice digest...", tone: "default" },
          { text: "Listing the invoice for sale...", tone: "default" },
          { text: "[SUCCESS] Verified invoice listed.", tone: "success" },
        ],
      },
      {
        title: "Marketplace Engine",
        subtitle: "The Financier Match",
        icon: Handshake,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Financier Match",
          description:
            "Matches financiers to listed invoices and captures the purchase at an agreed discount, giving small businesses immediate cash against a competitively priced sale.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function purchase(bytes32 id, uint256 discountBps) external onlyFinancier {\n    Listing storage l = listings[id];\n    require(l.confirmed && !l.sold, \"Not available\");\n    l.sold = true;\n    buyerOf[id] = msg.sender;\n    _escrow(msg.sender, l.amount - (l.amount * discountBps / 10000));\n}",
        simAction: "Simulate Financier Purchase",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Financier bidding on the invoice...", tone: "default" },
          { text: "Confirming it is available...", tone: "default" },
          { text: "Capturing the purchase at a discount...", tone: "default" },
          { text: "Escrowing the purchase price...", tone: "default" },
          { text: "[SUCCESS] Invoice purchased by financier.", tone: "success" },
        ],
      },
      {
        title: "Settlement Escrow",
        subtitle: "The Safe Payout",
        icon: Wallet,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Safe Payout",
          description:
            "Holds the purchase price and releases it to the business when the sale settles, so a small business receives immediate cash under a protected, escrowed transaction.",
          platformFunction: "Instant Settlement",
        },
        codeSnippet:
          "function settleSale(bytes32 id) external {\n    Listing storage l = listings[id];\n    require(l.sold, \"Not sold\");\n    uint256 amt = escrowed[id];\n    escrowed[id] = 0;\n    payable(l.seller).transfer(amt);\n    emit SaleSettled(id, l.seller, amt);\n}",
        simAction: "Simulate Immediate Cash",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the escrowed purchase price...", tone: "default" },
          { text: "Confirming the sale is captured...", tone: "default" },
          { text: "Releasing immediate cash to the business...", tone: "default" },
          { text: "Recording the settlement...", tone: "default" },
          { text: "[SUCCESS] Business paid for the receivable.", tone: "success" },
        ],
      },
      {
        title: "Repayment Router",
        subtitle: "The Automatic Close",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Automatic Close",
          description:
            "Repays the financier automatically when the buyer settles the original invoice, closing the marketplace loop without a manual reconciliation between the three parties.",
          platformFunction: "Settlement & Distribution",
        },
        codeSnippet:
          "function settleInvoice(bytes32 id) external onlyBuyer(id) {\n    require(listings[id].sold, \"Not financed\");\n    _repay(buyerOf[id], listings[id].amount);\n    emit InvoiceSettled(id);\n}",
        simAction: "Simulate Automatic Repayment",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Buyer settling the original invoice...", tone: "default" },
          { text: "Confirming the invoice was sold...", tone: "default" },
          { text: "Repaying the financier...", tone: "default" },
          { text: "Closing the receivable...", tone: "default" },
          { text: "[SUCCESS] Financier repaid automatically.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "A verified receivables marketplace is a horizontal capability. Here is how different actors put it to work.",
    sectors: [
      { icon: Building2, title: "Small Businesses", description: "Sell verified invoices for immediate cash instead of waiting 60 to 90 days, easing cash flow strain with a protected, competitively priced sale.", assetTypes: ["Listed Invoices", "Immediate Cash", "Sale Records"] },
      { icon: Coins, title: "Financiers & Investors", description: "Purchase verified receivables tied to confirmed buyer obligations with double-sale prevention and automatic repayment, deploying capital with confidence.", assetTypes: ["Purchased Receivables", "Discount Records", "Repayment Trails"] },
      { icon: FileCheck, title: "Buyers & Auditors", description: "Confirm obligations into a verifiable record and audit the marketplace from anchored evidence, so every sale rests on a genuine receivable.", assetTypes: ["Obligation Confirmations", "Audit Trails", "Digest Records"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a business accounting system or connecting financiers directly, Cerulea routes both into one receivables marketplace record.",
    tracks: [
      {
        title: "Track A: Accounting System Bridging",
        description:
          "For businesses on legacy accounting systems. Invoices are translated into signed on-chain listings through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Accounting System", sublabel: "Business Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Listing Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Receivables Marketplace Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Financier Node Access",
        description:
          "For financiers on institutional nodes. A financier node bids on listings and settles purchases directly with the marketplace contract.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Financier Node", sublabel: "Investor System", icon: Fingerprint, accent: false },
          { label: "Marketplace Validators", sublabel: "Purchase Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Receivables Marketplace Record", icon: Coins, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a receivables marketplace with verified listings, a financier matching engine, escrowed purchase, and automatic repayment from scratch requires marketplace engineers and long multi-party integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Marketplace & Settlement Rules",
      ruleCount: 43,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects marketplace integration benchmarks. Building verified invoice listings, a financier matching engine, escrowed purchase, and automatic repayment across sellers, financiers, and buyers takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your marketplace and settlement rules into pre-audited WebAssembly binaries and provisions the receivables marketplace ledger and settlement layer instantly.",
    },
    logSystemName: "Operational log system",
  },
  {
    slug: "export-credit-guarantee-claim-verification-for-ecgc-backed-loans",
    icon: Plane,
    eyebrow: "Guarantee Claim Layer",
    headline1: "Anchor the shipment.",
    headline2: "Validate the claim.",
    heroDescription:
      "Speed export credit guarantee claims by anchoring shipment confirmations and payment status as verified records from the start. When an overseas buyer defaults and a claim is filed, the guarantee corporation validates it quickly against existing evidence rather than starting an investigation from scratch.",
    heroCta: "Deploy Guarantee Verification",
    heroCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    mechanicsTitle: "The Execution Mechanics",
    mechanicsSubtitle:
      "Turn a slow, paper-heavy guarantee claim into a fast validation against pre-anchored evidence.",
    mechanics: [
      { title: "Shipment Anchoring", description: "Record the export at source. The Trade Finance Documents module anchors each shipment confirmation, so the evidence a claim needs exists from the moment goods ship." },
      { title: "Payment Status Tracking", description: "Prove the non-payment. The system tracks the buyer's payment status against the export, so a default is evidenced rather than merely asserted." },
      { title: "Pre-Verified Evidence", description: "Build the case early. The Provenance Notary module verifies shipment and payment records as they occur, so a claim rests on trusted evidence, not a later scramble." },
      { title: "Fast Claim Validation", description: "Validate in hours. When a claim is filed, the guarantee corporation checks it against anchored records rather than opening a fresh investigation." },
      { title: "Fraud Prevention", description: "Block false claims. Because shipment and non-payment are anchored from the start, a fabricated or exaggerated claim is caught against the record." },
      { title: "Compliance Attestation", description: "Back the payout. The Compliance Attestations module attests each validated claim, giving the corporation an auditable basis for the guarantee payout." },
    ],
    lifecycleTitle: "The Claim Lifecycle",
    lifecycleSubtitle:
      "Follow a single export from shipment anchoring through a buyer default to a fast validated claim.",
    lifecycleSteps: [
      {
        label: "Shipment Anchoring",
        description:
          "An exporter ships goods and the shipment confirmation is anchored as verified evidence.",
        icon: Plane,
        logFilename: "cerulea_ecgc_engine.log",
        logLines: [
          { text: "[SYS] Anchoring export shipment...", time: "09:00:00", tone: "default" },
          { text: "[CMD] anchorShipment { export: \"EXP_552\", buyer: \"OB_09\", value: 700000 }", time: "09:00:01", tone: "primary" },
          { text: "[AUTH] Verifying shipping documents...", time: "09:00:02", tone: "secondary" },
          { text: "[OK] Shipment evidence anchored.", time: "09:00:02", tone: "success" },
        ],
      },
      {
        label: "Payment Tracking",
        description:
          "The buyer's payment status is tracked against the export as the due date approaches.",
        icon: Activity,
        logFilename: "cerulea_ecgc_engine.log",
        logLines: [
          { text: "[SYS] Tracking buyer payment status...", time: "10:20:33", tone: "default" },
          { text: "[CMD] updateStatus(EXP_552, \"AWAITING\")", time: "10:20:33", tone: "primary" },
          { text: "[SYS] Payment status bound to export.", time: "10:20:34", tone: "default" },
          { text: "[OK] Status tracked against record.", time: "10:20:34", tone: "success" },
        ],
      },
      {
        label: "Default Detection",
        description:
          "The buyer fails to pay by the due date, and the non-payment is recorded as evidenced default.",
        icon: Shield,
        logFilename: "cerulea_ecgc_engine.log",
        logLines: [
          { text: "[SYS] Due date passed without payment...", time: "09:00:00", tone: "default" },
          { text: "[CMD] markDefault(EXP_552)", time: "09:00:01", tone: "primary" },
          { text: "[SYS] Non-payment evidenced against export.", time: "09:00:02", tone: "error" },
          { text: "[OK] Default recorded with evidence.", time: "09:00:02", tone: "success" },
        ],
      },
      {
        label: "Claim Validation",
        description:
          "The bank files a claim and the guarantee corporation validates it fast against anchored evidence.",
        icon: FileCheck,
        logFilename: "cerulea_ecgc_engine.log",
        logLines: [
          { text: "[SYS] Bank filing guarantee claim...", time: "11:15:10", tone: "default" },
          { text: "[CMD] validateClaim(EXP_552)", time: "11:15:10", tone: "primary" },
          { text: "[AUTH] Checking against anchored records...", time: "11:15:11", tone: "secondary" },
          { text: "[OK] Claim validated quickly, payout approved.", time: "11:15:11", tone: "success" },
        ],
      },
    ],
    anatomyTitle: "Smart Contract Anatomy",
    anatomyDescription:
      "Cerulea decomposes guarantee claim verification into modular contracts. Each layer anchors the shipment, tracks payment, evidences default, and validates a claim without a fresh investigation.",
    layers: [
      {
        title: "Shipment Registry",
        subtitle: "The Export Evidence",
        icon: Plane,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Export Evidence",
          description:
            "The foundational data layer. It anchors each shipment confirmation with its documents, so the evidence a future claim depends on is captured the moment goods are exported.",
          platformFunction: "Identity & Metadata",
        },
        codeSnippet:
          "contract ShipmentRegistry {\n  struct Export {\n    address exporter;\n    bytes32 buyer;\n    uint256 value;\n    bytes32 status;\n  }\n\n  mapping(bytes32 => Export) public exports;\n\n  function anchor(bytes32 id, bytes32 buyer, uint256 value) external onlyExporter {\n    exports[id] = Export(msg.sender, buyer, value, \"AWAITING\");\n  }\n}",
        simAction: "Simulate Shipment Anchoring",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the export shipment...", tone: "default" },
          { text: "Verifying shipping documents...", tone: "default" },
          { text: "Anchoring the shipment evidence...", tone: "default" },
          { text: "Writing export to storage...", tone: "default" },
          { text: "[SUCCESS] Shipment evidence anchored.", tone: "success" },
        ],
      },
      {
        title: "Payment Tracker",
        subtitle: "The Status Record",
        icon: Activity,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Status Record",
          description:
            "Tracks the buyer's payment status against the export, so non-payment is captured as evidenced fact rather than a claim the corporation must later reconstruct.",
          platformFunction: "Custody & Workflow",
        },
        codeSnippet:
          "function updateStatus(bytes32 id, bytes32 status) external onlyBank {\n    exports[id].status = status;\n    statusHistory[id].push(Status(status, block.timestamp));\n    emit StatusUpdated(id, status);\n}",
        simAction: "Simulate Payment Tracking",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Reading the export obligation...", tone: "default" },
          { text: "Updating the payment status...", tone: "default" },
          { text: "Appending to the status history...", tone: "default" },
          { text: "Recording the update...", tone: "default" },
          { text: "[SUCCESS] Payment status tracked.", tone: "success" },
        ],
      },
      {
        title: "Default Evidencer",
        subtitle: "The Non-Payment Proof",
        icon: Shield,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Non-Payment Proof",
          description:
            "Records a buyer default against the anchored export once the due date passes unpaid, so the proof of non-payment a claim needs is evidenced at the moment it occurs.",
          platformFunction: "Impact Validation",
        },
        codeSnippet:
          "function markDefault(bytes32 id) external onlyBank {\n    require(block.timestamp > dueDate[id], \"Not yet due\");\n    require(exports[id].status != \"PAID\", \"Already paid\");\n    exports[id].status = \"DEFAULT\";\n    emit Defaulted(id);\n}",
        simAction: "Simulate Default Detection",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Confirming the due date has passed...", tone: "default" },
          { text: "Checking the export is unpaid...", tone: "default" },
          { text: "Evidencing the buyer default...", tone: "default" },
          { text: "Recording the non-payment...", tone: "default" },
          { text: "[SUCCESS] Default recorded with evidence.", tone: "success" },
        ],
      },
      {
        title: "Claim Validator",
        subtitle: "The Fast Payout",
        icon: FileCheck,
        detail: {
          badge: "// COMPONENT INSPECTOR",
          name: "The Fast Payout",
          description:
            "Validates a filed claim against the anchored shipment and default records, so the guarantee corporation approves a payout in hours instead of opening a fresh paper investigation.",
          platformFunction: "Public Verification",
        },
        codeSnippet:
          "function validateClaim(bytes32 id) external view returns (bool) {\n    Export memory e = exports[id];\n    return e.value > 0 && e.status == \"DEFAULT\" && shipmentVerified[id];\n}",
        simAction: "Simulate Claim Validation",
        simulateDescription: "Run the simulation to observe execution.",
        simulateTitle: "Interactive Execution",
        simulateLogs: [
          { text: "Bank filing the guarantee claim...", tone: "default" },
          { text: "Checking anchored shipment evidence...", tone: "default" },
          { text: "Confirming the recorded default...", tone: "default" },
          { text: "Approving the guarantee payout...", tone: "default" },
          { text: "[SUCCESS] Claim validated quickly.", tone: "success" },
        ],
      },
    ],
    applicabilityTitle: "Applicability Across the Spectrum",
    applicabilitySubtitle:
      "Pre-anchored guarantee verification is a horizontal capability. Here is how different actors rely on early evidence.",
    sectors: [
      { icon: Landmark, title: "Guarantee Corporations", description: "Validate claims fast against anchored shipment and default evidence, replacing paper-heavy investigations and blocking fabricated claims at the source.", assetTypes: ["Claim Records", "Validation Trails", "Payout Attestations"] },
      { icon: Building2, title: "Exporting Banks", description: "File claims backed by evidence anchored from shipment, so a payout on an overseas default arrives quickly rather than after a slow investigation.", assetTypes: ["Export Records", "Default Evidence", "Claim Filings"] },
      { icon: Plane, title: "Exporters", description: "Ship with the assurance that their shipment and payment evidence is captured from the start, strengthening a future guarantee claim if a buyer defaults.", assetTypes: ["Shipment Confirmations", "Payment Status", "Audit Trails"] },
    ],
    networkTitle: "Network & Execution Architecture",
    networkSubtitle:
      "Whether you are bridging a bank's trade system or connecting the guarantee corporation, Cerulea routes both into one evidenced guarantee claim record.",
    tracks: [
      {
        title: "Track A: Trade System Bridging",
        description:
          "For banks on legacy trade systems. Shipment and payment events are translated into signed on-chain evidence records through the API gateway automatically.",
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"],
        nodes: [
          { label: "Trade System", sublabel: "Exporting Bank Platform", icon: Workflow, accent: false },
          { label: "Cerulea API Gateway", sublabel: "Evidence Signing", icon: Server, accent: true },
          { label: "Cerulea Private Chain", sublabel: "Guarantee Claim Ledger", icon: Database, accent: true },
        ],
      },
      {
        title: "Track B: Guarantee Corporation Node",
        description:
          "For the guarantee corporation on an institutional node. The node validates filed claims directly against the anchored evidence record.",
        connectorLabels: ["WALLET SIGNATURE", "STATE EXECUTION"],
        nodes: [
          { label: "Corporation Node", sublabel: "Guarantee Body", icon: Fingerprint, accent: false },
          { label: "Claim Validators", sublabel: "Evidence Consensus", icon: Network, accent: true },
          { label: "Cerulea Ledger", sublabel: "Guarantee Claim Record", icon: Plane, accent: true },
        ],
      },
    ],
    simulatorTitle: "Accelerated Time-to-Market Simulator",
    simulatorSubtitle:
      "Building a guarantee claim system with shipment anchoring, payment tracking, default evidencing, and fast claim validation from scratch requires trade finance engineers and long multi-party integration. Calculate your exact deployment speed using Cerulea.",
    simulator: {
      ruleLabel: "Required Evidence & Claim Rules",
      ruleCount: 41,
      sliderPercent: 50,
      traditionalMonths: 15,
      ceruleaWeeks: 5,
      methodology:
        "The legacy timeline reflects export finance integration benchmarks. Building shipment anchoring, payment status tracking, default evidencing, and fast claim validation across banks and the guarantee corporation takes a baseline of 8 months. Building the same architecture on Cerulea takes a baseline of 2 weeks, because Cerulea Studio visually translates your evidence and claim rules into pre-audited WebAssembly binaries and provisions the guarantee claim ledger and validation layer instantly.",
    },
    logSystemName: "Operational log system",
  },
]

export const financialServicesBankingItems: ExtraCaseItem[] = [
  {
    label: "Fund tokenization and fractional ownership for retail investors",
    href: "/solutions/use-case/fund-tokenization-and-fractional-ownership-for-retail-investors",
    description: "Compliance-gated fractional fund units with live NAV.",
    icon: PieChart,
    category: "ENTERPRISE",
    tags: ["Funds", "Tokenization"],
    industry: INDUSTRY,
  },
  {
    label: "Mutual fund NAV calculation transparency for unit holders",
    href: "/solutions/use-case/mutual-fund-nav-calculation-transparency-for-unit-holders",
    description: "Daily NAV unit holders can independently verify.",
    icon: Activity,
    category: "ENTERPRISE",
    tags: ["Funds", "Transparency"],
    industry: INDUSTRY,
  },
  {
    label: "Pension fund contribution tracking and benefit projection",
    href: "/solutions/use-case/pension-fund-contribution-tracking-and-benefit-projection",
    description: "Portable pension record across every employer.",
    icon: Wallet,
    category: "ENTERPRISE",
    tags: ["Pensions", "Retirement"],
    industry: INDUSTRY,
  },
  {
    label: "ESG fund compliance verification against stated investment criteria",
    href: "/solutions/use-case/esg-fund-compliance-verification-against-stated-investment-criteria",
    description: "Continuous check of holdings against ESG criteria.",
    icon: Leaf,
    category: "ENTERPRISE",
    tags: ["ESG", "Compliance"],
    industry: INDUSTRY,
  },
  {
    label: "Government bond issuance and settlement on DLT",
    href: "/solutions/use-case/government-bond-issuance-and-settlement-on-dlt",
    description: "Atomic DvP settlement for sovereign bonds.",
    icon: Landmark,
    category: "GOVERNMENT",
    tags: ["Sovereign Debt", "Settlement"],
    industry: INDUSTRY,
  },
  {
    label: "Interbank lending rate benchmark calculation transparency",
    href: "/solutions/use-case/interbank-lending-rate-benchmark-calculation-transparency",
    description: "Tamper-proof, reproducible daily benchmark fixing.",
    icon: Scale,
    category: "ENTERPRISE",
    tags: ["Benchmarks", "Integrity"],
    industry: INDUSTRY,
  },
  {
    label: "Foreign exchange reserve custody verification for transparency reporting",
    href: "/solutions/use-case/foreign-exchange-reserve-custody-verification-for-transparency-reporti",
    description: "Custodian-attested reserves backing public disclosures.",
    icon: Globe,
    category: "GOVERNMENT",
    tags: ["Reserves", "Attestation"],
    industry: INDUSTRY,
  },
  {
    label: "Trade finance digitization (LC, guarantees, invoice financing)",
    href: "/solutions/use-case/trade-finance-digitization-lc-guarantees-invoice-financing",
    description: "On-chain documents settling trade finance same-day.",
    icon: ScrollText,
    category: "ENTERPRISE",
    tags: ["Trade Finance", "Settlement"],
    industry: INDUSTRY,
  },
  {
    label: "Know Your Customer (KYC) data sharing across banks",
    href: "/solutions/use-case/know-your-customer-kyc-data-sharing-across-banks",
    description: "Verify KYC once, reuse across consortium banks.",
    icon: Fingerprint,
    category: "ENTERPRISE",
    tags: ["KYC", "Identity"],
    industry: INDUSTRY,
  },
  {
    label: "Syndicated loan participation and servicing across multiple lenders",
    href: "/solutions/use-case/syndicated-loan-participation-and-servicing-across-multiple-lenders",
    description: "Shared ledger servicing every lender's loan share.",
    icon: Handshake,
    category: "ENTERPRISE",
    tags: ["Lending", "Syndication"],
    industry: INDUSTRY,
  },
  {
    label: "Letter of credit lifecycle automation with discrepancy resolution",
    href: "/solutions/use-case/letter-of-credit-lifecycle-automation-with-discrepancy-resolution",
    description: "Automated LC with instant discrepancy flagging.",
    icon: FileCheck,
    category: "ENTERPRISE",
    tags: ["Trade Finance", "Automation"],
    industry: INDUSTRY,
  },
  {
    label: "Escrow account management for real estate transactions",
    href: "/solutions/use-case/escrow-account-management-for-real-estate-transactions",
    description: "Property escrow releasing funds on verified conditions.",
    icon: Home,
    category: "SME",
    tags: ["Escrow", "Real Estate"],
    industry: INDUSTRY,
  },
  {
    label: "Corporate cash pooling and intercompany loan tracking",
    href: "/solutions/use-case/corporate-cash-pooling-and-intercompany-loan-tracking",
    description: "Consolidated cash pool with automated intercompany interest.",
    icon: Coins,
    category: "ENTERPRISE",
    tags: ["Treasury", "Pooling"],
    industry: INDUSTRY,
  },
  {
    label: "Securities tokenization and fractional ownership",
    href: "/solutions/use-case/securities-tokenization-and-fractional-ownership",
    description: "High-value assets fractionalized with secondary liquidity.",
    icon: Boxes,
    category: "DAPPS",
    tags: ["Tokenization", "Securities"],
    industry: INDUSTRY,
  },
  {
    label: "IPO subscription and allotment transparency for retail investors",
    href: "/solutions/use-case/ipo-subscription-and-allotment-transparency-for-retail-investors",
    description: "Verifiable IPO applications and reproducible allotment.",
    icon: Ticket,
    category: "DAPPS",
    tags: ["IPO", "Transparency"],
    industry: INDUSTRY,
  },
  {
    label: "Bond covenant compliance monitoring for institutional bondholders",
    href: "/solutions/use-case/bond-covenant-compliance-monitoring-for-institutional-bondholders",
    description: "Real-time covenant breach alerts from verified data.",
    icon: Shield,
    category: "ENTERPRISE",
    tags: ["Bonds", "Covenants"],
    industry: INDUSTRY,
  },
  {
    label: "Mergers and acquisitions escrow and earnout milestone tracking",
    href: "/solutions/use-case/mergers-and-acquisitions-escrow-and-earnout-milestone-tracking",
    description: "Earnout escrow releasing on verified milestones.",
    icon: Gavel,
    category: "ENTERPRISE",
    tags: ["M&A", "Escrow"],
    industry: INDUSTRY,
  },
  {
    label: "Credit history for unbanked borrowers using alternative data",
    href: "/solutions/use-case/credit-history-for-unbanked-borrowers-using-alternative-data",
    description: "Portable credit identity verifiable across lenders.",
    icon: IdCard,
    category: "SME",
    tags: ["Credit", "Financial Inclusion"],
    industry: INDUSTRY,
  },
  {
    label: "Self-help group (SHG) joint liability and repayment tracking",
    href: "/solutions/use-case/self-help-group-shg-joint-liability-and-repayment-tracking",
    description: "Shared group ledger for joint liability repayment.",
    icon: Users,
    category: "SME",
    tags: ["Microfinance", "Groups"],
    industry: INDUSTRY,
  },
  {
    label: "Digital gold-backed micro-savings for unbanked populations",
    href: "/solutions/use-case/digital-gold-backed-micro-savings-for-unbanked-populations",
    description: "Fractional gold savings redeemable anytime, fully backed.",
    icon: Coins,
    category: "DAPPS",
    tags: ["Savings", "Financial Inclusion"],
    industry: INDUSTRY,
  },
  {
    label: "Agent banking transaction reconciliation in rural areas",
    href: "/solutions/use-case/agent-banking-transaction-reconciliation-in-rural-areas",
    description: "Real-time reconciliation of rural agent cash transactions.",
    icon: Server,
    category: "SME",
    tags: ["Agent Banking", "Reconciliation"],
    industry: INDUSTRY,
  },
  {
    label: "Cross-border retail remittance without SWIFT delays",
    href: "/solutions/use-case/cross-border-retail-remittance-without-swift-delays",
    description: "Stablecoin remittance in minutes at sub-1% fees.",
    icon: Zap,
    category: "DAPPS",
    tags: ["Remittance", "Payments"],
    industry: INDUSTRY,
  },
  {
    label: "Merchant settlement reconciliation across payment processors",
    href: "/solutions/use-case/merchant-settlement-reconciliation-across-payment-processors",
    description: "One consolidated settlement view across all processors.",
    icon: Database,
    category: "SME",
    tags: ["Payments", "Reconciliation"],
    industry: INDUSTRY,
  },
  {
    label: "Cross-border B2B bulk payment batching with FX rate locking",
    href: "/solutions/use-case/cross-border-b2b-bulk-payment-batching-with-fx-rate-locking",
    description: "Bulk payments settled at a locked exchange rate.",
    icon: Package,
    category: "ENTERPRISE",
    tags: ["Payments", "FX"],
    industry: INDUSTRY,
  },
  {
    label: "Government-to-person (G2P) payment disbursement tracking",
    href: "/solutions/use-case/government-to-person-g2p-payment-disbursement-tracking",
    description: "Verified disbursements preventing duplicate and missed payments.",
    icon: Gift,
    category: "GOVERNMENT",
    tags: ["G2P", "Disbursement"],
    industry: INDUSTRY,
  },
  {
    label: "QR code payment interoperability across UPI apps and banks",
    href: "/solutions/use-case/qr-code-payment-interoperability-across-upi-apps-and-banks",
    description: "Anchored routing evidence resolving interoperability failures.",
    icon: QrCode,
    category: "ENTERPRISE",
    tags: ["UPI", "Interoperability"],
    industry: INDUSTRY,
  },
  {
    label: "Payroll disbursement for gig economy workers across platforms",
    href: "/solutions/use-case/payroll-disbursement-for-gig-economy-workers-across-platforms",
    description: "Combined verified payouts across multiple gig platforms.",
    icon: Wallet,
    category: "SME",
    tags: ["Payroll", "Gig Economy"],
    industry: INDUSTRY,
  },
  {
    label: "Remittance and cross-border payments without correspondent banks",
    href: "/solutions/use-case/remittance-and-cross-border-payments-without-correspondent-banks",
    description: "Direct bank-to-bank settlement without correspondent intermediaries.",
    icon: Globe,
    category: "ENTERPRISE",
    tags: ["Remittance", "Settlement"],
    industry: INDUSTRY,
  },
  {
    label: "Joint account and nominee verification for inheritance claims",
    href: "/solutions/use-case/joint-account-and-nominee-verification-for-inheritance-claims",
    description: "Digital nominee and death verification for faster claims.",
    icon: ShieldCheck,
    category: "SME",
    tags: ["Inheritance", "Verification"],
    industry: INDUSTRY,
  },
  {
    label: "Fixed deposit and loan collateral linkage automation",
    href: "/solutions/use-case/fixed-deposit-and-loan-collateral-linkage-automation",
    description: "Automatic lien placed and released by repayment.",
    icon: Lock,
    category: "SME",
    tags: ["Collateral", "Automation"],
    industry: INDUSTRY,
  },
  {
    label: "Multi-bank loan eligibility check without duplicate credit pulls",
    href: "/solutions/use-case/multi-bank-loan-eligibility-check-without-duplicate-credit-pulls",
    description: "One credit check shared across multiple bank offers.",
    icon: Search,
    category: "SME",
    tags: ["Lending", "Credit"],
    industry: INDUSTRY,
  },
  {
    label: "Supply chain financing (invoice discounting, dynamic discounting)",
    href: "/solutions/use-case/supply-chain-financing-invoice-discounting-dynamic-discounting",
    description: "Early payment against buyer-confirmed invoices for MSMEs.",
    icon: Truck,
    category: "SME",
    tags: ["Working Capital", "Trade Finance"],
    industry: INDUSTRY,
  },
  {
    label: "Factoring and receivables marketplace for SME working capital",
    href: "/solutions/use-case/factoring-and-receivables-marketplace-for-sme-working-capital",
    description: "Marketplace selling verified invoices for immediate cash.",
    icon: Coins,
    category: "SME",
    tags: ["Factoring", "Working Capital"],
    industry: INDUSTRY,
  },
  {
    label: "Export credit guarantee claim verification for ECGC-backed loans",
    href: "/solutions/use-case/export-credit-guarantee-claim-verification-for-ecgc-backed-loans",
    description: "Fast guarantee claims validated against anchored evidence.",
    icon: Plane,
    category: "ENTERPRISE",
    tags: ["Export Finance", "Guarantees"],
    industry: INDUSTRY,
  },
]
