import { IndustryPage } from "@/types/industry"
// Material icons (react-icons/md) aliased to the previous lucide names.
import {
  MdSwapHoriz as ArrowLeftRight,
  MdCompareArrows as ArrowRightLeft,
  MdWidgets as Boxes,
  MdApartment as Building2,
  MdCloud as Cloud,
  MdTerminal as Code2,
  MdCopyright as Copyright,
  MdMemory as Cpu,
  MdStorage as Database,
  MdVisibility as Eye,
  MdFactCheck as FileCheck,
  MdFingerprint as Fingerprint,
  MdScience as FlaskConical,
  MdSportsEsports as Gamepad2,
  MdCardGiftcard as Gift,
  MdAccountTree as GitBranch,
  MdPublic as Globe,
  MdLanguage as Globe2,
  MdSchool as GraduationCap,
  MdHandshake as Handshake,
  MdMonitorHeart as HeartPulse,
  MdBadge as IdCard,
  MdVpnKey as Key,
  MdAccountBalance as Landmark,
  MdLayers as Layers,
  MdEco as Leaf,
  MdLock as LockKeyhole,
  MdMusicNote as Music,
  MdHub as Network,
  MdPalette as Palette,
  MdPieChart as PieChart,
  MdFlightTakeoff as PlaneTakeoff,
  MdPower as Plug2,
  MdRouter as Router,
  MdBalance as Scale,
  MdDescription as ScrollText,
  MdSearch as Search,
  MdDns as Server,
  MdShield as Shield,
  MdGppMaybe as ShieldAlert,
  MdVerifiedUser as ShieldCheck,
  MdAutoAwesome as Sparkles,
  MdCallSplit as Split,
  MdTerminal as SquareTerminal,
  MdConfirmationNumber as Ticket,
  MdTimer as Timer,
  MdEmojiEvents as Trophy,
  MdLocalShipping as Truck,
  MdBeachAccess as Umbrella,
  MdGroups as Users,
  MdHowToVote as Vote,
  MdAccountBalanceWallet as Wallet,
  MdBuild as Wrench,
  MdBolt as Zap,
} from "react-icons/md"

export const industries: IndustryPage[] = [

  //============================ financial-services-banking
  {
    slug: "financial-services-banking",
    eyebrow: "Financial Services & Banking",
    headline: [
      "Enterprise blockchain infrastructure.",
      "Built for financial services.",
    ],
    description:
      "Cerulea provides the deployment engine to tokenize assets, automate compliance, and settle cross-border transactions instantly without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Atomic Finality",
        description:
          "Execution and settlement occur in milliseconds. This absolute finality ensures there are no delays, no payment rollbacks, and no costly manual reconciliation errors between counterparties.",
      },
      {
        number: "02",
        title: "Programmable Money",
        description:
          "Institutions can embed strict business logic, automated escrow conditions, and complex compliance rules directly into the asset code itself, ensuring it acts intelligently in transit.",
      },
      {
        number: "03",
        title: "Trust Minimization",
        description:
          "Enterprises can interact securely with new international counterparties without requiring established credit histories or expensive third-party banking intermediaries to hold escrow.",
      },
      {
        number: "04",
        title: "24/7 Liquidity Flow",
        description:
          "Unlike traditional clearinghouses, blockchain networks do not have banking hours. Capital flows seamlessly across sovereign borders on weekends, holidays, and entirely after hours.",
      },
      {
        number: "05",
        title: "Unified Shared Ledger",
        description:
          "Completely eliminate fragmented internal databases. All participating organizations and consortium members read and write to the exact same cryptographic source of absolute truth.",
      },
      {
        number: "06",
        title: "Provable Auditing",
        description:
          "Every single network state change is permanently hashed. Regulators and compliance teams can verify historical financial data with absolute mathematical certainty in real-time.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting every facet of the modern economy. Select a financial segment below.",
    useCases: [
      {
        icon: Globe2,
        label: "Cross-Border Clearing",
        legacyBottleneck:
          "Relying on correspondent banking networks requires capital to jump through multiple intermediaries. This causes multi-day settlement delays, high transaction fees, and a massive reconciliation burden when ledgers mismatch.",
        ceruleaExecution:
          "Cerulea enables direct peer-to-peer settlement between international institutions. By utilizing fiat-pegged stablecoins on a shared network, the asset delivery and the payment occur simultaneously in a single atomic transaction.",
        architecturalImpact:
          "Reduce global clearing times from 72 hours to 400 milliseconds while eliminating intermediary correspondent fees entirely.",
      },
      {
        icon: Boxes,
        label: "Asset Tokenization (RWA)",
        legacyBottleneck:
          "Physical infrastructure, private credit funds, and commercial real estate suffer from massive liquidity discounts because transferring ownership requires weeks of manual legal and financial verification.",
        ceruleaExecution:
          "Convert any asset into highly divisible digital tokens. Using Cerulea Studio, you can visually embed strict compliance rules directly into the asset, ensuring it can only be transferred between authorized, KYC-verified institutional wallets.",
        architecturalImpact:
          "Unlock global liquidity pools and enable instant, fractionalized trading of previously monolithic assets.",
      },
      {
        icon: LockKeyhole,
        label: "Institutional Custody",
        legacyBottleneck:
          "Managing digital assets using basic wallet architecture exposes institutions to catastrophic single points of failure, employee theft, and lost access keys.",
        ceruleaExecution:
          "Eliminate single points of failure. Cerulea’s visual Granular Governance allows you to mathematically enforce your exact corporate hierarchy, requiring threshold approvals from designated stakeholders before capital is moved.",
        architecturalImpact:
          "Absolute cryptographic protection of treasury assets without relying on costly third-party custodians.",
      },
      {
        icon: Layers,
        label: "Enterprise DeFi & AMMs",
        legacyBottleneck:
          "Traditional DeFi relies on vulnerable open-source smart contracts, highly volatile gas fees, and complex developer tooling, making it technologically risky for institutional capital.",
        ceruleaExecution:
          "Construct isolated Automated Market Makers (AMMs) and lending pools using Cerulea’s visual logic builder. The engine compiles flawless, deterministically secure bytecode, eliminating code-level exploits while providing fixed network fees.",
        architecturalImpact:
          "Safely generate algorithmic yield on idle treasury capital within a strictly permissioned, technologically secure sandbox.",
      },
      {
        icon: Landmark,
        label: "CBDCs & Stablecoins",
        legacyBottleneck:
          "Issuing digital representations of fiat currency requires constant, expensive manual audits to prove that the digital tokens are actually backed 1:1 by real-world reserves.",
        ceruleaExecution:
          "Architect sovereign digital currencies with deterministic minting and burning mechanics. Integrate external Oracle feeds to connect your on-chain token supply directly to your off-chain bank reserve API.",
        architecturalImpact:
          "Provide undeniable, real-time cryptographic proof of reserves to regulators and clients automatically.",
      },
      {
        icon: Scale,
        label: "Trade Finance & Escrow",
        legacyBottleneck:
          "Global trade relies on archaic paper Letters of Credit. Capital is locked up for weeks pending manual verification of shipping documents across multiple borders.",
        ceruleaExecution:
          "Replace paper with programmable escrow. Capital is locked cryptographically and released instantly only when Oracle-verified shipping data confirms physical delivery.",
        architecturalImpact:
          "Accelerate supply chain cash flow and completely eradicate document forgery.",
      },
      {
        icon: Zap,
        label: "Streaming Payments",
        legacyBottleneck:
          "Traditional payment rails charge high flat fees per transaction, making sub-cent microtransactions economically impossible for digital content and API usage.",
        ceruleaExecution:
          "Deploy high-throughput payment channels on Cerulea’s Public L1. Stream fractions of a cent per second dynamically as services are consumed.",
        architecturalImpact:
          "Unlock entirely new monetization models for digital services, AI compute, and content streaming.",
      },
      {
        icon: Layers,
        label: "Derivatives & Synthetics",
        legacyBottleneck:
          "Creating derivative financial products requires massive legal overhead and complex collateral management across fragmented brokerages.",
        ceruleaExecution:
          "Model synthetic assets that track real-world price feeds via native Oracles. Smart contracts autonomously monitor collateral ratios and execute liquidations instantly if thresholds are breached.",
        architecturalImpact:
          "Launch complex financial instruments with zero counterparty risk and automated margin enforcement.",
      },
      {
        icon: Landmark,
        label: "Automated Lending",
        legacyBottleneck:
          "Corporate lending requires heavy underwriting, credit checks, and manual loan servicing, creating massive friction in capital markets.",
        ceruleaExecution:
          "Deploy overcollateralized lending protocols where borrowing logic is hardcoded. Users deposit approved assets and instantly draw stablecoin credit against them without human intervention.",
        architecturalImpact:
          "Instantaneous credit provisioning with mathematically guaranteed collateral safety.",
      },
      {
        icon: Key,
        label: "Financial Identity (KYC)",
        legacyBottleneck:
          "Banks force clients to repeatedly submit identical KYC documents. Customer data is stored in vulnerable, centralized honeypots susceptible to breaches.",
        ceruleaExecution:
          "Issue zero-knowledge credentials. Clients verify their identity once, and Cerulea generates a cryptographic proof that allows them to access financial services without revealing underlying personal data.",
        architecturalImpact:
          "Radically reduce onboarding friction while eliminating centralized data breach liabilities.",
      },
      {
        icon: Shield,
        label: "Automated Compliance",
        legacyBottleneck:
          "Financial reconciliation and regulatory reporting consume thousands of manual labor hours every quarter. Audits require digging through fragmented databases.",
        ceruleaExecution:
          "Financial reconciliation becomes a passive process. Every transaction is immutably hashed and indexed on the ledger. Provision dedicated read-only nodes so regulators can verify compliance without interrupting operations.",
        architecturalImpact:
          "Turn quarterly compliance audits into instantaneous mathematical proofs, drastically reducing overhead.",
      },
    ],
    simulatorTitle: "Settlement Overhead Simulator",
    simulatorDescription:
      "Cross-border settlements and manual ledger reconciliation drain operational budgets. Calculate your exact capital savings by moving from legacy clearing networks to Cerulea atomic execution.",
    simulator: {
      label: "Monthly B2B / Cross-Border Transactions",
      unit: "Tx",
      min: 10000,
      max: 1000000,
      defaultValue: 100000,
      legacyCostLabel: "SWIFT + Manual Recon",
      legacyCostValue: "$30.0M",
      ceruleaCostLabel: "Network Settlement Fees",
      ceruleaCostValue: "$60k",
      totalSavedLabel: "Total Capital Saved Annually",
      totalSavedValue: "$29.9M",
      methodology:
        "The legacy calculation utilizes global institutional benchmarks estimating the combined operational cost of a B2B cross-border payment at **$25.00 USD per transaction**. This accounts for direct intermediary routing fees combined with the internal human capital required to manually reconcile unmatched Nostro/Vostro ledger entries. Executing the exact same transfer via Cerulea incurs an estimated network fee of **$0.05 USD**. This figure represents the computational gas cost required to execute a WebAssembly (WASM) binary on a high-throughput Proof-of-Stake consensus engine. Because the network processes the asset transfer and the payment execution atomically in the same transaction, manual reconciliation and third-party routing are mathematically eliminated.",
    },
    architectureTitle: "Network & Execution Architecture",
    architectureDescription:
      "Whether you are bridging legacy banking systems or launching native decentralized protocols, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Bridging",
        description:
          "For commercial institutions connecting existing core banking software. Legacy HTTP requests are translated into secure Web3 transactions without system overhauls.",
        nodes: [
          {
            label: "Legacy Core",
            sublabel: "SAP / Oracle ERP",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API",
            sublabel: "Translation Gateway",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native DApp Execution",
        description:
          "For fintechs and developers building decentralized financial protocols. Bypass legacy middleware and route logic directly to the public execution layer.",
        nodes: [
          {
            label: "Client DApp",
            sublabel: "React & Web3 Wallets",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Decentralized Ledger",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Data Models",
            sublabel: "Smart Contract Logic",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"],
      },
    ],
    spectrumTitle: "Applicability Across the Spectrum",
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of different financial participants.",
    spectrum: [
      {
        icon: Building2,
        title: "Commercial Enterprises & Corporations",
        description:
          "Commercial institutions utilize Cerulea to unify internal liquidity, tokenize real-world corporate assets, and automate complex B2B clearing without ever exposing proprietary financial data to public networks.",
        assetTypesLabel: "KEY FINANCIAL USE CASES",
        assetTypes: [
          "Cross-Border Payments",
          "Corporate Treasury Routing",
          "Supply Chain Escrow",
        ],
      },
      {
        icon: Landmark,
        title: "Central Banks & Regulators",
        description:
          "Macroeconomic authorities deploy Cerulea to architect sovereign digital currencies (CBDCs), enforce sweeping compliance across commercial entities, and monitor systemic economic risk with absolute mathematical transparency.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Sovereign CBDC Issuance",
          "Systemic Risk Monitoring",
          "Automated Taxation Logic",
        ],
      },
      {
        icon: Code2,
        title: "Web3 Fintech Developers",
        description:
          "Forward-thinking engineers build next-generation DeFi protocols on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security without the catastrophic vulnerabilities of writing raw Solidity.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Decentralized Exchanges",
          "Lending Protocols",
          "Yield Aggregators",
        ],
      },
    ],
    stackTitle: "The Financial Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of the financial sector. It is architected to provide a standardized, highly secure pathway for migrating legacy capital into programmable Web3 execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "SETTLEMENT NETWORKS",
        title: "Hybrid Financial Ledgers",
        description:
          "Deploy an isolated Private Subnet strictly for institutional B2B clearing, or launch directly onto the high-throughput Public L1 for global retail DApps and crypto-native liquidity pools.",
      },
      {
        number: "02",
        category: "KYC & AML",
        title: "On-Chain Identity Resolver",
        description:
          "For permissioned financial tracks, optionally deploy the Identity module to ensure every interacting wallet address is mathematically tied to a verified corporate credential before funds are moved.",
      },
      {
        number: "03",
        category: "ASSET TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map complex assets, corporate bonds, and stablecoins into deterministically secure smart contracts without writing low-level Solidity code.",
      },
      {
        number: "04",
        category: "TREASURY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect the corporate treasury. Enforce strict cryptographic signatures from the Board of Directors or authorized C-level executives before any large asset withdrawal is permitted.",
      },
      {
        number: "05",
        category: "CORE BANKING BRIDGE",
        title: "The ISO-Ready API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints that natively support ISO 20022 financial messaging standards.",
      },
    ],
    timeToValueDescription:
      "Building custom financial blockchains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times by 80%.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 18 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Architecture & Solidity",
          duration: "Months 1 to 4",
          description:
            "Hiring highly specialized Web3 developers to write custom state machines, consensus logic, and asset token standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal mathematical vulnerabilities in the custom code before touching real money.",
        },
        {
          title: "Phase 3: Middleware Construction",
          duration: "Months 8 to 11",
          description:
            "Developing fragile off-chain workers, RPC nodes, and indexers so the bank's legacy software can actually read the blockchain data.",
        },
        {
          title: "Phase 4: Network Testing",
          duration: "Months 12 to 18",
          description:
            "Enduring a grueling rollout phase to ensure the custom middleware, the smart contracts, and the core banking systems communicate without fatal synchronization errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Schema Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to map assets and governance structures visually. The engine compiles the logic into mathematically deterministic cryptographic binaries instantly.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Automate the deployment of the Sovereign Private Chain and institutional validator nodes directly from the control dashboard.",
        },
        {
          title: "Phase 3: API Gateway Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect internal banking systems directly to auto-generated Cerulea REST endpoints. No custom middleware or subgraphs required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Instantly bridge the finalized logic to the live network with absolute confidence that the simulated testnet behavior will perfectly match production reality.",
        },
      ],
    },
  },


  //=============================== supply-chain-logistics
  {
    slug: "supply-chain-logistics",
    eyebrow: "Supply Chain & Logistics",
    headline: ["Synchronized global logistics.", "Absolute provenance."],
    description:
      "Cerulea provides the infrastructure to trace physical goods across borders, automate freight payments, and permanently eliminate invoice discrepancies across your entire vendor network.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Immutable Provenance",
        description:
          "Once a transit update is permanently recorded, it cannot be altered. Vendors cannot quietly edit past shipping logs to cover up delays, temperature breaches, or cargo mishandling.",
      },
      {
        number: "02",
        title: "Multi-Vendor Parity",
        description:
          "Eliminate fragmented data silos. Manufacturers, freight carriers, and port authorities all read and write to the exact same unified ledger, ensuring perfect real-time data synchronization.",
      },
      {
        number: "03",
        title: "Automated Escrow",
        description:
          "Programmable smart contracts replace manual invoicing. Capital is held securely in escrow and released to suppliers the exact second physical delivery is verified by the network.",
      },
      {
        number: "04",
        title: "Counterfeit Mitigation",
        description:
          "Digital Product Passports provide a continuous, highly verifiable chain of custody from raw material extraction to final retail purchase, drastically reducing the risk of product forgery.",
      },
      {
        number: "05",
        title: "IoT Telemetry Ingestion",
        description:
          "Physical sensors feed location and environmental data directly into the execution layer. Smart contracts act autonomously on this telemetry without requiring manual human validation.",
      },
      {
        number: "06",
        title: "Pre-Cleared Logistics",
        description:
          "By providing regulators with a highly verified cryptographic manifest, shipments can expedite manual border inspections and clear international customs seamlessly.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting global logistical networks. Select a specific operational segment below.",
    useCases: [
      {
        icon: ArrowRightLeft,
        label: "End-to-End Provenance",
        legacyBottleneck:
          "Supply chains rely on siloed databases across dozens of independent vendors. Tracing the origin of a contaminated component or raw material takes weeks of manual phone calls and email verification.",
        ceruleaExecution:
          "Cerulea issues a permanent Digital Product Passport for every physical item. As goods move through the physical world, each vendor cryptographically signs the handover transaction onto a unified shared ledger.",
        architecturalImpact:
          "Achieve absolute, instantaneous visibility into the lifecycle and origin of every component in your supply chain.",
      },
      {
        icon: Router,
        label: "Cold Chain Telemetry",
        legacyBottleneck: "Pharmaceuticals and perishables rely on trust. If a container exceeds temperature thresholds during transit, carriers can alter manual logs to avoid liability for the ruined cargo.",
        ceruleaExecution: "Integrate physical IoT temperature and humidity sensors directly with Cerulea Oracles. Environmental data is written to the blockchain in real-time without human intervention.",
        architecturalImpact: "Guarantee transit condition reporting and instantly assign liability the exact second a parameter is breached.",
      },
      {
        icon: Landmark,
        label: "Automated Trade Finance",
        legacyBottleneck: "Global trade is choked by paper Letters of Credit. Suppliers wait 30 to 90 days for capital to clear because physical shipping manifests must be mailed and manually audited by border banks.",
        ceruleaExecution: "Deploy programmable escrow contracts. Capital is locked on the ledger and released to the supplier automatically the second a port authority digitally signs the receipt of goods.",
        architecturalImpact: "Accelerate supplier cash flow and eradicate document forgery from the international trade lifecycle.",
      },
      {
        icon: ShieldCheck,
        label: "Customs & Border Clearing",
        legacyBottleneck: "Containers sit idle at ports for days while customs officials manually inspect fragmented compliance documentation, tariffs, and multi-national origin certificates.",
        ceruleaExecution: "Provide border authorities with direct, read-only access to the encrypted transit history. Customs officers can verify the exact origin, weight, and tax classification before the ship even docks.",
        architecturalImpact: "Drastically reduce port holding times and eliminate demurrage fees through pre-verified digital manifests.",
      },
      {
        icon: Leaf,
        label: "Scope 3 Emission Tracking",
        legacyBottleneck: "Corporations struggle to accurately report their Scope 3 environmental impact because they rely on self-reported, unverified estimates provided by their deep-tier suppliers.",
        ceruleaExecution: "Mandate that suppliers submit their carbon output data as cryptographically signed attestations. Cerulea tallies the aggregate emissions automatically into an undeniable corporate sustainability report.",
        architecturalImpact: "Eliminate greenwashing and provide regulators with highly accurate, verifiable environmental compliance data.",
      },
      {
        icon: GitBranch,
        label: "Targeted Reverse Logistics",
        legacyBottleneck: "When a manufacturing defect is discovered, companies are forced to issue massive, costly blanket recalls because they cannot pinpoint exactly which batches contain the defective part.",
        ceruleaExecution: "Query the Cerulea network to instantly trace the exact trajectory of a specific faulty component. Identify precisely which retail shelves hold the affected products without guessing.",
        architecturalImpact: "Isolate recalls to the exact affected units, saving millions in unnecessary retrieval and brand damage.",
      },
    ],
    simulatorTitle: "Document Reconciliation Simulator",
    simulatorDescription: "Discrepancies between carrier, warehouse, and supplier databases cause massive invoice disputes. Calculate your exact capital savings by moving to Cerulea's unified ledger.",
    simulator: {
      label: "Monthly Freight Shipments",
      unit: "",
      min: 1000,
      max: 100000,
      defaultValue: 20000,
      legacyCostLabel: "20% Exception Dispute Rate",
      legacyCostValue: "$2,568,000",
      ceruleaCostLabel: "Network IoT Anchoring",
      ceruleaCostValue: "$36,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$2,532,000",
      methodology:
        "The legacy calculation utilizes 2025 benchmarks from the Institute of Finance and Management (IOFM), which estimate that up to 20 percent of global freight invoices contain data exceptions. Resolving these discrepancies requires an average of ** $53.50 USD ** in human capital and administrative labor per disputed invoice. Executing the exact same transit updates via Cerulea incurs an estimated network fee of ** $0.15 USD ** per shipment. This fee, which is slightly higher than standard financial transfers, accounts for the additional computational gas required to anchor heavy, multi-point IoT payloads (location, temperature, timestamps) directly on-chain. Because the network forces all vendors to read and write to the exact same shared ledger, data mismatching is systematically prevented, dropping the dispute rate to zero.",
    },
    architectureDescription:
      "Whether you are bridging legacy banking systems or launching native decentralized protocols, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Database Bridging",
        description:
          "For global manufacturers connecting existing supply chain software. Legacy HTTP requests are translated into secure Web3 transactions without system overhauls.",
        nodes: [
          {
            label: "Legacy Core",
            sublabel: "SAP / Oracle ERP",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API",
            sublabel: "Translation Gateway",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native Logistics Telemetry",
        description:
          "For real-time physical tracking without intermediaries. Freight carriers can stream raw GPS coordinates and temperature readings directly from shipping containers into autonomous escrow contracts.",
        nodes: [
          {
            label: "Client DApp",
            sublabel: "React & Web3 Wallets",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Decentralized Ledger",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Data Models",
            sublabel: "Smart Contract Logic",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of different supply chain participants.",
    spectrum: [
      {
        icon: Building2,
        title: "Global Manufacturers & Retailers",
        description:
          "Commercial enterprises utilize Cerulea to establish unalterable data parity across their disparate supplier networks, track raw material provenance, and automatically calculate Scope 3 carbon emissions without exposing proprietary factory data.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Supplier Reconciliation",
          "Targeted Product Recalls",
          "Scope 3 Auditing",
        ],
      },
      {
        icon: Shield,
        title: "Customs & Port Authorities",
        description:
          "Border regulators deploy Cerulea to monitor the flow of international cargo, instantly verify cryptographic shipping manifests, enforce tariff calculations automatically, and identify counterfeit or contraband goods with absolute certainty.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Border Manifest Clearing",
          "Counterfeit Prevention",
          "Automated Tariff Routing",
        ],
      },
      {
        icon: Code2,
        title: "Logistics Tech Developers",
        description:
          "Forward-thinking engineers build next-generation freight and trade finance protocols on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security without the vulnerabilities of writing raw Solidity.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Decentralized Load Boards",
          "DeFi Trade Finance",
          "IoT Data Marketplaces",
        ],
      },
    ],
    stackTitle: "The Logistics Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of global supply chains. It is architected to provide a standardized, highly secure pathway for migrating legacy transit data into programmable Web3 execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "TRANSIT NETWORKS",
        title: "Hybrid Logistics Ledgers",
        description:
          "Deploy an isolated Private Subnet strictly for a specific vendor consortium, or launch directly onto the high-throughput Public L1 to track global open-market commodity movement.",
      },
      {
        number: "02",
        category: "LOGIC COMPILATION",
        title: "The Deployment Engine",
        description:
          "Our core engine translates the routing rules and escrow logic you design in Cerulea Studio into highly optimized WebAssembly (WASM) binaries, ensuring flawless execution on the network.",
      },
      {
        number: "03",
        category: "PRODUCT PASSPORTS",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map physical shipping containers, raw materials, and digital bills of lading into secure smart contracts without writing low-level Solidity code.",
      },
      {
        number: "04",
        category: "ESCROW SECURITY",
        title: "Granular Governance",
        description:
          "Protect trade finance capital. Enforce strict cryptographic signatures from authorized customs officials and warehouse managers before any escrowed payment is released to suppliers.",
      },
      {
        number: "05",
        category: "ERP SYSTEM BRIDGE",
        title: "The Cerulea API",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints and event-driven webhooks, bridging Web2 legacy logistics systems directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom logistics blockchains from scratch requires massive external audit budgets and hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "18 to 24 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Architecture & Logic",
          duration: "Months 1 to 6",
          description:
            "Hiring specialized Web3 developers to write custom state machines and asset standards entirely from scratch.",
        },
        {
          title: "Phase 2: Hardware Integration",
          duration: "Months 7 to 12",
          description:
            "Paying external firms massive fees to find and patch mathematical vulnerabilities in the custom blockchain code.",
        },
        {
          title: "Phase 3: Security Audits",
          duration: "Months 10 to 16",
          description:
            "Developing fragile off-chain workers and indexers so legacy software can integrate with the shipment data.",
        },
        {
          title: "Phase 4: Multi-Vendor Testing",
          duration: "Months 17 to 24",
          description:
            "Enduring grueling rollout to ensure logistics systems communicate without fatal synchronization errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to visually map physical supply routes, vendor permissions, and automated escrow triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to your primary suppliers from the control dashboard.",
        },
        {
          title: "Phase 3: Edge Device Hookup",
          duration: "Weeks 7 to 8",
          description:
            "Connect existing warehouse scanners and IoT hardware directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Live Transit Execution",
          duration: "Weeks 9 to 10",
          description:
            "Bridge the finalized logic to the live network and begin tracking real physical cargo with complete architectural confidence.",
        },
      ],
    },
  },


  //================================= government-public-sector
  {
    slug: "government-public-sector",
    eyebrow: "Government & Public Sector",
    headline: [
      "Enterprise blockchain infrastructure.",
      "Built for the public sector.",
    ],
    description:
      "Cerulea provides the execution engine to automate public procurement, unify fragmented municipal databases, and establish verifiable digital identity networks without exposing sensitive civic data.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Unalterable Public Records",
        description:
          "Every civic state change is permanently recorded. It becomes practically impossible for any individual actor to alter past municipal logs, property deeds, or taxation records to cover up systemic errors.",
      },
      {
        number: "02",
        title: "Cross-Agency Parity",
        description:
          "Eliminate fragmented public data silos. The Department of Motor Vehicles, taxation boards, and healthcare agencies all read and write to the exact same unified ledger, ensuring perfect real-time synchronization.",
      },
      {
        number: "03",
        title: "Automated Fund Routing",
        description:
          "Programmable smart contracts replace manual treasury checks. Taxpayer capital is held securely in escrow and disbursed to public contractors the exact second external civic milestones are verified.",
      },
      {
        number: "04",
        title: "Sovereign Data Control",
        description:
          "Governments can securely provision highly restricted Private Subnets. This ensures that classified intelligence and citizen records never touch public execution layers or third-party servers.",
      },
      {
        number: "05",
        title: "Zero-Knowledge Privacy",
        description:
          "Citizens can prove their civic eligibility (age, residency, income bracket) using advanced cryptographic signatures without ever revealing the underlying sensitive documentation to the requesting agency.",
      },
      {
        number: "06",
        title: "Cryptographic Transparency",
        description:
          "Every single public expenditure is permanently hashed. Civic auditors and watchdog groups can verify historical spending data and government budgets with absolute certainty in real-time.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting vast municipal networks. Select a specific civic segment below.",
    useCases: [
      {
        icon: ShieldCheck,
        label: "Sovereign Digital Identity",
        legacyBottleneck:
          "Citizens are forced to maintain fragmented physical documents and repetitive digital logins across multiple disconnected government portals, increasing the risk of widespread identity theft.",
        ceruleaExecution:
          "Issue highly secure, zero-knowledge digital credentials. Citizens verify their identity once and use cryptographic proofs to interact with all government services without exposing their underlying private data.",
        architecturalImpact:
          "Consolidate public services into a single unified portal while giving citizens absolute control over their own data privacy.",
      },
      {
        icon: Vote,
        label: "Cryptographic Voting",
        legacyBottleneck: "Elections rely on highly vulnerable physical ballot boxes, easily manipulated electronic voting machines, and complex manual tallying systems that erode public trust in democratic outcomes.",
        ceruleaExecution: "Deploy voting logic directly onto Cerulea Private Chains. Every cast vote is immutably hashed and permanently anchored to the ledger, allowing real-time tallying without revealing the voter identity.",
        architecturalImpact: "Guarantee absolute election integrity and provide citizens with verifiable proof that their vote was counted accurately.",
      },
      {
        icon: FileCheck,
        label: "Transparent Procurement",
        legacyBottleneck: "Public contract bidding and grant disbursements are obscured behind opaque administrative layers, creating massive vulnerabilities for graft, corruption, and bureaucratic inefficiency.",
        ceruleaExecution: "Automate fund disbursements using conditional smart contracts. Taxpayer capital is held in programmable escrow and released to contractors only when specific, verifiable civic milestones are achieved.",
        architecturalImpact: "Make every single government expenditure fully traceable and conditionally enforced.",
      },
      {
        icon: ScrollText,
        label: "Immutable Land Registry",
        legacyBottleneck: "Property titles are maintained in outdated municipal databases or paper archives. Transferring ownership takes weeks of legal verification and is highly susceptible to forgery and title disputes.",
        ceruleaExecution: "Tokenize physical real estate and anchor property deeds directly to the blockchain. Title transfers execute instantaneously with perfect historical provenance tracking.",
        architecturalImpact: "Eliminate costly title insurance requirements and reduce property transfer times from several months to a few seconds.",
      },
      {
        icon: Scale,
        label: "Automated Tax Reconciliation",
        legacyBottleneck: "Tax collection requires immense manual oversight, endless citizen audits, and heavily siloed banking reconciliation, costing governments billions in annual administrative overhead.",
        ceruleaExecution: "Integrate the Cerulea API directly into corporate and municipal banking flows. Tax logic is programmed directly into digital asset transactions, calculating and routing revenue automatically upon execution.",
        architecturalImpact: "Close the tax gap by enforcing real-time compliance at the protocol level rather than relying on retroactive manual audits.",
      },
      {
        icon: Landmark,
        label: "Sovereign CBDC Issuance",
        legacyBottleneck: "Central banks lack the agile infrastructure required to issue programmable fiat currencies, leaving them vulnerable to external disruptions from unregulated private stablecoins.",
        ceruleaExecution: "Architect secure Central Bank Digital Currencies (CBDCs) using Cerulea Data Models. Enforce absolute control over monetary supply, citizen distribution logic, and macroeconomic tracking metrics.",
        architecturalImpact: "Modernize national monetary policy with highly programmable, instantly verifiable digital currencies.",
      },
    ],
    simulatorTitle: "Public Disbursement Simulator",
    simulatorDescription: "Manual eligibility checks and inter-agency data silos severely delay public welfare and grant payouts. Calculate your exact taxpayer capital saved by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Grants & Welfare Disbursements",
      unit: "Tx",
      min: 10000,
      max: 500000,
      defaultValue: 50000,
      legacyCostLabel: "Manual Audit & Routing",
      legacyCostValue: "$10,800,000",
      ceruleaCostLabel: "Smart Contract Execution",
      ceruleaCostValue: "$90,000",
      totalSavedLabel: "Total Taxpayer Capital Saved Annually",
      totalSavedValue: "$10,710,000",
      methodology:
        "The legacy calculation utilizes public sector benchmarks estimating the comprehensive administrative cost to process, manually audit, and clear a single welfare payment or civic grant at **$18.00 USD per transaction**. This accounts for manual citizen eligibility verification, checking across disparate agency data silos, and external banking fees. Executing the exact same disbursement via Cerulea incurs an estimated network fee of **$0.15 USD**. This figure represents the computational gas cost to execute a WebAssembly (WASM) binary on a high-throughput network. Because the system automatically verifies citizen eligibility via on-chain data logic and routes funds directly, human administrative overhead is effectively reduced to raw code execution.",
    },
    architectureDescription:
      "Whether you are bridging isolated municipal databases or launching citizen-facing civic applications, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Database Bridging",
        description:
          "For governmental bodies connecting existing civil software. Legacy API requests from isolated departments are translated into secure, unified Web3 transactions without overhauling current servers.",
        nodes: [
          {
            label: "Legacy Core",
            sublabel: "SAP / Oracle ERP",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API",
            sublabel: "Translation Gateway",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native Citizen Portals",
        description:
          "For civic tech organizations launching decentralized identity wallets or voting applications. Route logic directly to the public execution layer, bypassing centralized servers entirely.",
        nodes: [
          {
            label: "Client DApp",
            sublabel: "React & Web3 Wallets",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Decentralized Ledger",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Data Models",
            sublabel: "Smart Contract Logic",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the public sector.",
    spectrum: [
      {
        icon: Landmark,
        title: "Federal Governments & Central Banks",
        description:
          "National authorities deploy Cerulea to architect sovereign digital currencies (CBDCs), manage national defense supply chains, and enforce sweeping macroeconomic compliance across state agencies with absolute data sovereignty.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Sovereign CBDC Issuance",
          "National eID Frameworks",
          "Cross-Border Trade Records",
        ],
      },
      {
        icon: Building2,
        title: "State & Municipal Authorities",
        description:
          "Local governments utilize Cerulea to unify internal civic databases, tokenize municipal land registries, and automate public procurement payments without exposing citizen data to public networks.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Public Procurement Escrow",
          "Immutable Land Registry",
          "Automated Tax Collection",
        ],
      },
      {
        icon: Code2,
        title: "Civic Tech Developers & NGOs",
        description:
          "Forward-thinking engineers build next-generation voting applications and transparent donation platforms on the public L1. They utilize Cerulea's visual Studio to guarantee absolute code security without vulnerabilities.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Cryptographic Voting",
          "NGO Donation Tracking",
          "Community DAOs",
        ],
      },
    ],
    stackTitle: "The Public Sector Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of government bodies. It is architected to provide a standardized, highly secure pathway for migrating legacy civic data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "CIVIC NETWORKS",
        title: "Sovereign Subnet Ledgers",
        description:
          "Deploy an isolated Cerulea Private Chain strictly for municipal and federal agencies, ensuring that sensitive citizen data never interacts with public or unregulated infrastructure.",
      },
      {
        number: "02",
        category: "LOGIC COMPILATION",
        title: "The Deployment Engine",
        description:
          "Our core engine translates the civic logic you design in Cerulea Studio into highly optimized WebAssembly (WASM) binaries, ensuring flawless compliance on the network.",
      },
      {
        number: "03",
        category: "REGIME TOKENIZATION",
        title: "Cerulea Data Models",
        description:
          "Use Cerulea Studio to visually map property deeds, legal contracts, and national fiat currencies into secure smart contracts without writing low-level Solidity code.",
      },
      {
        number: "04",
        category: "MULTI-AGENCY SECURITY",
        title: "Granular Governance",
        description:
          "Enforce governmental checks and balances. Require strict cryptographic signatures from multiple independent department heads before massive public budgets can be routed.",
      },
      {
        number: "05",
        category: "LEGACY GOV-TECH BRIDGE",
        title: "The Cerulea API",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging aging municipal SQL databases directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom public sector blockchains requires massive external audit budgets and bureaucratic delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "24 to 36 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "16 to 20 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Architecture & Policy",
          duration: "Months 1 to 8",
          description:
            "Negotiating strict data compliance across independent state agencies and writing custom state machines to track public funds from scratch.",
        },
        {
          title: "Phase 2: Legacy Integration",
          duration: "Months 6 to 16",
          description:
            "Building complex custom middleware to successfully translate raw municipal data into functional blockchain-compatible payloads.",
        },
        {
          title: "Phase 3: Security Audits",
          duration: "Months 17 to 26",
          description:
            "Paying external firms to find and patch mathematical vulnerabilities in the custom contracts before handling live public funds.",
        },
        {
          title: "Phase 4: Multi-Agency Rollout",
          duration: "Months 26 to 36",
          description:
            "Enduring a massive rollout phase to ensure all independent government databases synchronize correctly with the ledger without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Modeling",
          duration: "Weeks 1 to 4",
          description:
            "Use Cerulea Studio to visually map public procurement routes, agency permissions, and automated fund triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 5 to 8",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to inter-departmental agencies from the control dashboard.",
        },
        {
          title: "Phase 3: Agency Database Hookup",
          duration: "Weeks 9 to 16",
          description:
            "Connect existing municipal databases directly to auto-generated Cerulea REST APIs. No custom middleware is required to read and write state.",
        },
        {
          title: "Phase 4: Public Go-Live",
          duration: "Weeks 15 to 20",
          description:
            "Bridge the finalized civic logic to the live network and begin routing taxpayer funds with complete architectural confidence.",
        },
      ],
    },
  },

  //======================================== healthcare-life-sciences
  {
    slug: "healthcare-life-sciences",
    eyebrow: "Healthcare & Life Sciences",
    headline: [
      "Enterprise blockchain infrastructure.",
      "Built for healthcare.",
    ],
    description:
      "Cerulea provides the execution engine to secure patient data, automate medical billing, and trace pharmaceutical supply chains without writing complex smart contract code.",
    primaryCta: "Schedule an Architecture Review",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Immutable Audit Trails",
        description:
          "Every single access request to a patient record is permanently recorded. Facilities can prove exactly who viewed sensitive medical data and when it occurred without relying on editable logs.",
      },
      {
        number: "02",
        title: "Cross-Provider Parity",
        description:
          "Eliminate fragmented diagnostic silos. Primary care clinics, testing labs, and specialized hospitals all read and write to the exact same unified ledger, ensuring perfect data synchronization.",
      },
      {
        number: "03",
        title: "Programmable Settlement",
        description:
          "Smart contracts replace manual claims processing. Insurance approvals are calculated automatically based on embedded policy logic, settling provider payments in seconds rather than months.",
      },
      {
        number: "04",
        title: "Sovereign Data Privacy",
        description:
          "Healthcare consortiums can securely provision restricted Private Subnets. This ensures that Protected Health Information (PHI) never touches public execution layers or unregulated third-party servers.",
      },
      {
        number: "05",
        title: "Zero-Knowledge Verification",
        description:
          "Patients can cryptographically prove their insurance eligibility or vaccination status to external vendors without ever exposing the underlying sensitive medical documentation.",
      },
      {
        number: "06",
        title: "Counterfeit Mitigation",
        description:
          "Digital Passports provide a continuous, highly verifiable chain of custody for pharmaceutical products, drastically reducing the risk of counterfeit drugs entering the hospital supply chain.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex clinical networks. Select a specific operational segment below.",
    useCases: [
      {
        icon: HeartPulse,
        label: "Interoperable Health Records",
        legacyBottleneck:
          "Patient data is trapped in isolated Electronic Health Record (EHR) databases. Hospitals, specialists, and primary care physicians cannot easily share critical medical histories, leading to redundant testing and delayed care.",
        ceruleaExecution:
          "Cerulea provides a unified, highly encrypted ledger layer. Authorized providers can securely query a patient's complete medical history across different institutional databases using standardized endpoints.",
        architecturalImpact:
          "Consolidate fragmented patient data into a single, highly secure source of truth accessible instantly by authorized care teams.",
      },
      {
        icon: FileCheck,
        label: "Automated Claims Adjudication",
        legacyBottleneck: "Medical billing is a highly manual process. Providers wait 30 to 90 days for insurance reimbursements, with a massive percentage of claims requiring expensive human labor to rework and appeal.",
        ceruleaExecution: "Deploy programmable billing contracts. Claims are submitted to the execution layer where smart contracts automatically verify patient coverage, service codes, and network rules, settling the payment instantly.",
        architecturalImpact: "Drastically reduce administrative overhead and accelerate provider cash flow by automating the insurance reimbursement cycle.",
      },
      {
        icon: Truck,
        label: "Pharmaceutical Traceability",
        legacyBottleneck: "Complex global supply chains make it difficult to track the origin of medications. This opacity allows counterfeit drugs to enter the market and complicates targeted batch recalls.",
        ceruleaExecution: "Issue a Digital Product Passport for every pharmaceutical batch. Manufacturers, distributors, and pharmacies cryptographically sign the handover of goods onto the shared network.",
        architecturalImpact: "Achieve absolute visibility into the drug supply chain, ensuring authenticity and isolating recalls to exact affected units.",
      },
      {
        icon: FlaskConical,
        label: "Clinical Trial Integrity",
        legacyBottleneck: "Research data is often stored in centralized spreadsheets. The inability to definitively prove that trial results were not altered retroactively creates friction in the regulatory approval process.",
        ceruleaExecution: "Research institutions anchor clinical trial metrics directly to the ledger in real-time. The data is permanently hashed, providing undeniable proof of when the results were recorded and ensuring they remain unaltered.",
        architecturalImpact: "Provide global regulators (FDA, EMA) with unalterable, highly verifiable evidence of clinical trial integrity.",
      },
      {
        icon: ShieldCheck,
        label: "Patient Consent Management",
        legacyBottleneck: "Managing patient privacy preferences relies on easily misplaced paper forms and disjointed IT systems. Patients have zero visibility into which institutions are actively accessing their health data.",
        ceruleaExecution: "Implement granular cryptographic governance. Patients hold sovereign control over their identity wallets, explicitly granting and revoking data access to researchers or specialists via digital signatures.",
        architecturalImpact: "Ensure strict compliance with global privacy regulations (HIPAA, GDPR) by giving patients verifiable control over their data.",
      },
      {
        icon: Router,
        label: "Medical Device Telemetry",
        legacyBottleneck: "Data generated by wearable health monitors and remote medical devices is often siloed in proprietary manufacturer apps, making it difficult for primary care physicians to utilize the data effectively.",
        ceruleaExecution: "Connect edge devices and health monitors directly to decentralized Oracles. Vital signs are routed securely into the patient’s unified ledger record, triggering automated alerts if parameters are breached.",
        architecturalImpact: "Establish a secure, continuous pipeline of remote patient telemetry directly to authorized clinical care teams.",
      },
    ],
    simulatorTitle: "Claims Adjudication Simulator",
    simulatorDescription: "Denied medical claims require expensive administrative labor to manually rework and appeal. Calculate your exact operational savings by shifting to automated smart contract adjudication.",
    simulator: {
      label: "Monthly Medical Claims Processed",
      unit: "",
      min: 5000,
      max: 250000,
      defaultValue: 50000,
      legacyCostLabel: "Manual Claim Reworks",
      legacyCostValue: "$2,250,000",
      ceruleaCostLabel: "Automated Network Logic",
      ceruleaCostValue: "$60,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$2,190,000",
      methodology:
        "The legacy calculation utilizes benchmarks from the Council for Affordable Quality Healthcare (CAQH), which estimate that approximately 15 percent of all medical claims are initially denied due to coding errors or eligibility issues. Resolving these exceptions requires an average of **$25.00 USD** in administrative labor per reworked claim. Executing the exact same billing update via Cerulea incurs an estimated network fee of ** $0.10 USD**. This figure represents the computational gas cost required to execute the adjudication logic via a WebAssembly (WASM) binary on a high-throughput Proof-of-Stake network, completely bypassing manual human review and eradicating standard data entry errors.",
    },
    architectureDescription:
      "Whether you are bridging legacy hospital databases or routing live medical telemetry, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Institutional EHR Bridging",
        description:
          "For hospital networks connecting existing software. Legacy HTTP requests from patient databases are translated into highly secure Web3 transactions without system overhauls.",
        nodes: [
          {
            label: "Legacy Core",
            sublabel: "SAP / Oracle ERP",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API",
            sublabel: "Translation Gateway",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native Telehealth Execution",
        description:
          "For modern HealthTech organizations launching decentralized patient portals. Route application logic and wearable telemetry directly to the execution layer.",
        nodes: [
          {
            label: "Client DApp",
            sublabel: "React & Web3 Wallets",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Decentralized Ledger",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Data Models",
            sublabel: "Smart Contract Logic",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"],
      },
    ],
    spectrumTitle: "Applicability Across the Spectrum",
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the healthcare sector.",
    spectrum: [
      {
        icon: Building2,
        title: "Hospitals & Provider Networks",
        description:
          "Clinical institutions utilize Cerulea to unify internal patient databases, guarantee EHR interoperability across different hospital branches, and securely manage patient consent without exposing raw PHI to the public.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "EHR Interoperability",
          "Patient Consent Tracking",
          "Medical Device Telemetry",
        ],
      },
      {
        icon: Landmark,
        title: "Insurance Providers & Payers",
        description:
          "Medical insurers deploy Cerulea to fully automate the claims adjudication process, eliminate fraudulent billing submissions, and route reimbursements to providers with absolute precision.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Automated Adjudication",
          "Fraud Eradication",
          "Real-Time Reimbursements",
        ],
      },
      {
        icon: Code2,
        title: "HealthTech Developers & Research",
        description:
          "Forward-thinking engineers build next-generation Decentralized Science (DeSci) applications and telemedicine portals on the public L1, utilizing visual tools to guarantee regulatory-compliant logic execution.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Clinical Trial Hashing",
          "Telemedicine Portals",
          "Decentralized Science (DeSci)",
        ],
      },
    ],
    stackTitle: "The Healthcare Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. Cerulea is a vertically integrated architecture mapped directly to the strict regulatory requirements of the medical sector. This 5-layer stack demonstrates how we eliminate fragmented third-party tools, providing a singular pathway to bridge legacy medical databases into secure Web3 environments.",
    stackLayers: [
      {
        number: "01",
        category: "CLINICAL NETWORKS",
        title: "Sovereign Subnet Ledgers",
        description:
          "Deploy an isolated Cerulea Private Chain strictly for a regional hospital network, ensuring that Protected Health Information (PHI) never interacts with public infrastructure.",
      },
      {
        number: "02",
        category: "LOGIC COMPILATION",
        title: "The Deployment Engine",
        description:
          "Our core engine translates the clinical rules you design in Cerulea Studio into highly optimized WebAssembly (WASM) binaries, ensuring flawless execution on the network.",
      },
      {
        number: "03",
        category: "RECORD ARCHITECTURE",
        title: "Cerulea Data Models",
        description:
          "Use Cerulea Studio to visually map patient identities, pharmaceutical tracking logs, and insurance claims into secure smart contracts without writing low-level code.",
      },
      {
        number: "04",
        category: "PRIVACY GOVERNANCE",
        title: "Threshold Consent Framework",
        description:
          "Protect patient privacy. Enforce strict cryptographic signatures from the patient or authorized clinical directors before any sensitive diagnostic data can be decrypted and shared.",
      },
      {
        number: "05",
        category: "LEGACY EHR BRIDGE",
        title: "The Cerulea API",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging aging HL7 and FHIR database standards directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom healthcare blockchains requires massive external audit budgets and severe regulatory delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "18 to 24 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "12 to 14 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Architecture & Compliance",
          duration: "Months 1 to 6",
          description:
            "Negotiating strict data compliance and writing custom state machines to track electronic health records entirely from scratch.",
        },
        {
          title: "Phase 2: Legacy Integration",
          duration: "Months 7 to 12",
          description:
            "Building complex custom middleware to successfully translate raw, fragmented Epic or Cerner database exports into blockchain-compatible payloads.",
        },
        {
          title: "Phase 3: Security Audits",
          duration: "Months 13 to 16",
          description:
            "Paying external firms hundreds of thousands of dollars to find critical vulnerabilities in the custom smart contracts handling sensitive patient data.",
        },
        {
          title: "Phase 4: Provider Rollout",
          duration: "Months 17 to 24",
          description:
            "Enduring a massive rollout phase to ensure all independent hospital databases synchronize correctly with the ledger without fatal reporting errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Modeling",
          duration: "Weeks 1 to 3",
          description:
            "Use Cerulea Studio to visually map patient data flows, institutional permissions, and automated billing triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 4 to 6",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to regional hospital partners from the control dashboard.",
        },
        {
          title: "Phase 3: Database Hookup",
          duration: "Weeks 7 to 10",
          description:
            "Connect existing hospital EHR systems and diagnostic software directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Clinical Go-Live",
          duration: "Weeks 11 to 14",
          description:
            "Bridge the finalized logic to the live network and begin securing real patient telemetry with complete architectural confidence.",
        },
      ],
    },
  },

  //======================================= energy-utilities
  {
    slug: "energy-utilities",
    eyebrow: "Energy & Utilities",
    headline: ["Modernize the grid.", "Tokenize sustainability."],
    description:
      "Cerulea provides the execution engine to trace carbon emissions, automate distributed energy trading, and permanently eliminate double counting in renewable energy certificate (REC) markets.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Double Spend Prevention",
        description:
          "Once a digital carbon credit or REC is retired on the ledger, it is permanently cryptographically burned. It becomes mathematically impossible for a single credit to be claimed by multiple corporations.",
      },
      {
        number: "02",
        title: "IoT Data Anchoring",
        description:
          "Smart meters and grid sensors feed generation data directly into the execution layer. Smart contracts act autonomously on this telemetry without requiring retroactive human validation or manual audits.",
      },
      {
        number: "03",
        title: "Fractionalized Ownership",
        description:
          "Massive energy infrastructure like solar farms and battery storage facilities can be tokenized into highly liquid digital shares, democratizing investment and accelerating capital deployment for green projects.",
      },
      {
        number: "04",
        title: "Automated Escrow",
        description:
          "Programmable smart contracts replace manual invoicing in wholesale energy markets. Capital is held securely in escrow and released to producers the exact second electron delivery is verified by grid oracles.",
      },
      {
        number: "05",
        title: "Unified Industry Ledgers",
        description:
          "Eliminate fragmented data silos. Utility operators, independent power producers, and regulators all read and write to the exact same unified ledger, ensuring perfect real time grid synchronization.",
      },
      {
        number: "06",
        title: "Cryptographic Transparency",
        description:
          "Every single asset transfer and emission report is permanently hashed. Environmental auditors and watchdog groups can verify historical sustainability data with absolute certainty in real time.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting global energy networks. Select a specific operational segment below.",
    useCases: [
      {
        icon: Zap,
        label: "Renewable Energy Certificates",
        legacyBottleneck:
          "Issuing and retiring Renewable Energy Certificates (RECs) relies on fragmented, localized registries. This opacity leads to the double counting of green energy and massive manual auditing costs.",
        ceruleaExecution:
          "Tokenize every megawatt hour of clean energy generated as a non-fungible asset. Cerulea creates an immutable, public registry where RECs can be traded and permanently burned, definitively proving corporate sustainability.",
        architecturalImpact:
          "Guarantee single-spend green energy markets with instant, cryptographic proof of carbon neutrality.",
      },
      {
        icon: Router,
        label: "Smart Grid Telemetry",
        legacyBottleneck: "Grid operators struggle to securely aggregate generation data from thousands of distributed energy resources (DERs) like residential solar panels and localized wind farms.",
        ceruleaExecution: "Connect smart meters directly to Cerulea decentralized Oracles. Ingest raw physical generation data into the blockchain state in real time, securely linking physical electron flow to digital asset issuance.",
        architecturalImpact: "Establish a highly verifiable, tamper-proof pipeline from physical hardware directly to automated financial settlement.",
      },
      {
        icon: ArrowLeftRight,
        label: "P2P Energy Trading",
        legacyBottleneck: "Consumers who generate excess solar power must sell it back to a central utility grid at highly suppressed wholesale rates due to a lack of decentralized clearing infrastructure.",
        ceruleaExecution: "Deploy localized smart contracts that allow households and businesses within a microgrid to trade excess energy peer to peer. The ledger automatically calculates balances and settles payments instantaneously.",
        architecturalImpact: "Democratize grid economics by allowing distributed energy producers to monetize their generation directly.",
      },
      {
        icon: Leaf,
        label: "Scope 3 Emission Tracking",
        legacyBottleneck: "Enterprises rely on self-reported estimates from their supply chain to calculate Scope 3 carbon emissions, resulting in inaccurate sustainability reports and regulatory scrutiny.",
        ceruleaExecution: "Mandate deep tier suppliers to submit their carbon output data as cryptographically signed attestations. The execution layer tallies aggregate emissions autonomously without exposing proprietary factory data.",
        architecturalImpact: "Eliminate greenwashing and provide regulators with mathematically proven environmental compliance data.",
      },
      {
        icon: Truck,
        label: "Commodity Provenance",
        legacyBottleneck: "Tracking the exact origin and ethical sourcing of physical commodities like liquified natural gas (LNG), hydrogen, and battery minerals requires weeks of manual document verification.",
        ceruleaExecution: "Issue a Digital Product Passport for raw commodities. As physical fuel moves through pipelines and shipping lanes, every transfer of custody is signed and permanently anchored to the shared ledger.",
        architecturalImpact: "Achieve absolute visibility into the energy supply chain, ensuring ethical sourcing and isolating contaminated batches.",
      },
      {
        icon: Cpu,
        label: "Automated Grid Billing",
        legacyBottleneck: "Utility billing involves high administrative overhead, delayed payment cycles, and complex reconciliation between energy distributors and retail providers.",
        ceruleaExecution: "Integrate the Cerulea API directly into meter data management systems. Billing logic is programmed directly into digital asset transactions, calculating usage and routing revenue automatically.",
        architecturalImpact: "Accelerate utility cash flow and enforce real time compliance at the protocol level without manual reconciliation.",
      },
    ],
    simulatorTitle: "Certificate Audit Simulator",
    simulatorDescription: "Issuing and verifying physical energy certificates requires expensive manual audits and third party registries. Calculate your exact capital savings by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Renewable Certificates (MWh)",
      unit: "",
      min: 1000,
      max: 100000,
      defaultValue: 50000,
      legacyCostLabel: "Manual Auditing & Registry Fees",
      legacyCostValue: "$7,200,000",
      ceruleaCostLabel: "Automated Smart Contract Minting",
      ceruleaCostValue: "$48,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$7,152,000",
      methodology:
        "The legacy calculation utilizes energy sector benchmarks estimating the average administrative and registry fee to audit, issue, and permanently retire a single MWh Renewable Energy Certificate (REC) at **$12.00 USD.** This accounts for third party verification layers and siloed database management. Executing the exact same REC lifecycle via Cerulea incurs an estimated network fee of **$0.08 USD**. This figure represents the computational gas cost required to automatically ingest IoT smart meter telemetry and deterministically mint the asset on a high throughput Proof of Stake ledger, completely bypassing manual human review.",
    },
    architectureDescription:
      "Whether you are bridging legacy grid databases or routing live smart meter telemetry, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Grid Bridging",
        description:
          "For major utility operators connecting existing SCADA systems. Legacy HTTP requests are translated into secure Web3 transactions without system overhauls.",
        nodes: [
          {
            label: "Legacy Core",
            sublabel: "SAP / Oracle ERP",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API",
            sublabel: "Translation Gateway",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native IoT Telemetry",
        description:
          "For distributed energy resources (DERs) like solar panels. Bypass legacy middleware and route smart meter telemetry directly to autonomous smart contracts.",
        nodes: [
          {
            label: "Client DApp",
            sublabel: "React & Web3 Wallets",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Decentralized Ledger",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Data Models",
            sublabel: "Smart Contract Logic",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global energy sector.",
    spectrum: [
      {
        icon: Zap,
        title: "Energy Producers & Utilities",
        description:
          "Utility companies utilize Cerulea to establish unalterable generation data parity across their grid, track raw fuel provenance, and automatically issue Renewable Energy Certificates without relying on slow third party registries.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "REC Tokenization",
          "Grid Telemetry Routing",
          "Automated Utility Billing",
        ],
      },
      {
        icon: Landmark,
        title: "Regulators & Market Operators",
        description:
          "Environmental regulators deploy Cerulea to monitor the flow of carbon credits, instantly verify cryptographic emissions manifests, enforce corporate compliance automatically, and identify greenwashing with absolute certainty.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Scope 3 Auditing",
          "Carbon Market Settlement",
          "Compliance Monitoring",
        ],
      },
      {
        icon: Code2,
        title: "Climate Tech & DePIN Developers",
        description:
          "Forward-thinking engineers build next generation microgrid networks and Decentralized Physical Infrastructure Networks (DePIN) on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "P2P Energy Trading",
          "IoT Data Marketplaces",
          "Fractionalized Solar Farms",
        ],
      },
    ],
    stackTitle: "The Energy Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of global utilities. It is architected to provide a standardized, highly secure pathway for migrating legacy generation data into programmable Web3 execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "GRID NETWORKS",
        title: "Hybrid Utility Ledgers",
        description:
          "Deploy an isolated Private Subnet strictly for internal wholesale settlements, or launch directly onto the high-throughput Public L1 to facilitate global, public carbon offset trading.",
      },
      {
        number: "02",
        category: "LOGIC COMPILATION",
        title: "The Deployment Engine",
        description:
          "Our core engine translates the energy routing rules and billing logic you design in Cerulea Studio into highly optimized WebAssembly (WASM) binaries, ensuring flawless execution.",
      },
      {
        number: "03",
        category: "ASSET ISSUANCE",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map physical infrastructure, solar energy tokens, and digital certificates into secure smart contracts without writing low-level Solidity code.",
      },
      {
        number: "04",
        category: "ESCROW SECURITY",
        title: "Granular Governance",
        description:
          "Protect P2P energy markets. Enforce strict cryptographic signatures from authorized grid inspectors before massive wholesale energy trades are permitted to clear.",
      },
      {
        number: "05",
        category: "SCADA SYSTEM BRIDGE",
        title: "The Cerulea API",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy utility software and hardware directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom utility blockchains from scratch requires specialized engineers and massive hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "18 to 24 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "10 to 12 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Architecture & Logic",
          duration: "Months 1 to 6",
          description:
            "Negotiating data standards across independent grid operators and writing custom state machines to track energy production entirely from scratch.",
        },
        {
          title: "Phase 2: Hardware Integration",
          duration: "Months 7 to 12",
          description:
            "Building custom middleware to successfully translate raw physical smart meter data and telemetry into blockchain-compatible payloads.",
        },
        {
          title: "Phase 3: Security Audits",
          duration: "Months 10 to 16",
          description:
            "Paying external firms to find code vulnerabilities in the custom escrow contracts before handling live, multi-million dollar wholesale power trades.",
        },
        {
          title: "Phase 4: Multi-Vendor Testing",
          duration: "Months 17 to 24",
          description:
            "Enduring a massive rollout phase to ensure all independent utility databases synchronize correctly with the ledger without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Modeling",
          duration: "Weeks 1 to 3",
          description:
            "Use Cerulea Studio to visually map physical grid infrastructure, billing permissions, and automated escrow triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 4 to 6",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to regional grid operators from the control dashboard.",
        },
        {
          title: "Phase 3: Edge Device Hookup",
          duration: "Weeks 7 to 9",
          description:
            "Connect existing smart meters and IoT hardware directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Live Execution",
          duration: "Weeks 10 to 12",
          description:
            "Bridge the finalized logic to the live network and begin tracking real physical generation data with complete architectural confidence.",
        },
      ],
    },
  },

  //============================================ automotive-manufacturing
  {
    slug: "automotive-manufacturing",
    eyebrow: "Automotive & Manufacturing",
    headline: ["Connect the assembly.", "Tokenize the supply chain."],
    description:
      "Cerulea provides the execution engine to trace global automotive parts, automate dealership warranty claims, and issue immutable digital vehicle passports without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Unalterable Provenance",
        description:
          "Once a part serial number or vehicle manifest is recorded on the ledger, it cannot be altered. This eliminates counterfeit components and protects the integrity of the assembly line.",
      },
      {
        number: "02",
        title: "IoT Data Anchoring",
        description:
          "Factory robots and vehicle sensors feed telemetry directly into the execution layer. Smart contracts act autonomously on this data to schedule predictive maintenance without human validation.",
      },
      {
        number: "03",
        title: "Automated Escrow",
        description:
          "Programmable smart contracts replace manual invoicing in international manufacturing markets. Capital is held securely and released exactly when port delivery is verified by external oracles.",
      },
      {
        number: "04",
        title: "Deterministic Adjudication",
        description:
          "Warranty claims from dealerships are processed based on pure mathematical logic. This eliminates administrative delays and speeds up critical reimbursement cycles for franchises.",
      },
      {
        number: "05",
        title: "Unified Industry Ledgers",
        description:
          "Eliminate fragmented data silos. OEMs, Tier 1 suppliers, and logistics firms all read and write to the exact same unified ledger, ensuring perfect real-time synchronization.",
      },
      {
        number: "06",
        title: "Cryptographic Transparency",
        description:
          "Every single asset transfer and compliance check is permanently hashed. Regulators can verify the exact manufacturing journey of a vehicle with absolute mathematical certainty.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex manufacturing ecosystems. Select a specific operational segment below.",
    useCases: [
      {
        icon: Wrench,
        label: "Parts Provenance & Recalls",
        legacyBottleneck:
          "Identifying defective components across thousands of Tier 1 and Tier 2 suppliers relies on fragmented databases. This lack of visibility causes massive, indiscriminate vehicle recalls that cost OEMs billions.",
        ceruleaExecution:
          "Log every critical component on a shared Private Subnet. Suppliers, assembly plants, and regulators update a unified ledger, providing real-time visibility into the exact origin and batch of every part.",
        architecturalImpact:
          "Execute hyper-targeted vehicle recalls in seconds, preventing widespread waste and protecting consumer safety with absolute certainty.",
      },
      {
        icon: IdCard,
        label: "Digital Vehicle Passports",
        legacyBottleneck: "The secondary market is plagued by odometer rollback fraud and incomplete maintenance histories, deteriorating vehicle resale value and consumer trust.",
        ceruleaExecution: "Mint a cryptographic Digital Twin for every vehicle. Service centers, insurers, and collision shops log maintenance events directly to the vehicle’s permanent on-chain passport.",
        architecturalImpact: "Establish undeniable proof of a vehicle’s history, eradicating fraud and maximizing secondary market resale value.",
      },
      {
        icon: Timer,
        label: "Just-in-Time (JIT) Escrow",
        legacyBottleneck: "Manufacturing assembly lines require perfect synchronization. Delayed international shipments and disputed invoices frequently halt production, creating massive capital lockups.",
        ceruleaExecution: "Utilize programmable escrow contracts. Capital is locked on the blockchain and automatically released to the supplier the exact moment port authorities or IoT sensors verify successful physical delivery to the assembly plant.",
        architecturalImpact: "Accelerate supplier cash flow, enforce perfect JIT manufacturing synchronization, and eliminate invoice disputes.",
      },
      {
        icon: ShieldCheck,
        label: "Automated Warranty Claims",
        legacyBottleneck: "Processing dealership warranty claims requires immense administrative overhead. OEMs spend months manually verifying parts failures and adjudicating payouts to franchises.",
        ceruleaExecution: "Use Cerulea Studio to visually map warranty thresholds into programmatic rules. When a dealer submits a repair log, the network deterministically validates the vehicle passport and settles the reimbursement instantly.",
        architecturalImpact: "Reduce dealership reimbursement times from 45 days to milliseconds, radically improving franchise relations.",
      },
      {
        icon: Zap,
        label: "EV Battery Lifecycles",
        legacyBottleneck: "Tracking the ethical sourcing of raw materials (like cobalt and lithium) and managing the end-of-life recycling of EV batteries is currently impossible to prove to environmental regulators.",
        ceruleaExecution: "Issue a Digital Product Passport specifically for the EV battery module. As the battery moves from raw mining to assembly to final recycling, every transfer of custody is signed and anchored to the ledger.",
        architecturalImpact: "Provide undeniable cryptographic proof of ethical material sourcing and regulatory recycling compliance.",
      },
      {
        icon: Router,
        label: "Fleet IoT Telemetry",
        legacyBottleneck: "Commercial fleets generate terabytes of diagnostic data per day. Securely sharing this telemetry for predictive maintenance or usage-based insurance is hindered by siloed, proprietary networks.",
        ceruleaExecution: "Connect vehicle sensors directly to decentralized Oracles. Ingest raw physical telemetry into the blockchain state in real time, securely linking hardware performance to automated maintenance and insurance contracts.",
        architecturalImpact: "Enable highly accurate predictive maintenance across global fleets, drastically reducing unplanned vehicle downtime.",
      },
    ],
    simulatorTitle: "Warranty & Supply Chain Simulator",
    simulatorDescription: "Manual warranty verification and supply chain investigations drain massive capital from manufacturing budgets. Calculate your exact operational savings by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Warranty Claims & Parts Tracked",
      unit: "Tx",
      min: 10000,
      max: 1000000,
      defaultValue: 150000,
      legacyCostLabel: "Manual Auditing & Claim Review",
      legacyCostValue: "$44,100,000",
      ceruleaCostLabel: "Automated Contract Logic",
      ceruleaCostValue: "$216,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$43,884,000",
      methodology:
        "The legacy calculation utilizes manufacturing benchmarks estimating the average combined administrative cost of logging supply chain data, investigating a defective part origin, and processing a dealership warranty claim at ** $24.50 USD**. This accounts for siloed ERP reconciliation and labor hours spent on claims management systems. Executing the exact same provenance log or warranty execution via Cerulea incurs an estimated network fee of ** $0.12 USD**. This figure represents the computational gas cost required to automatically verify a part's digital passport and deterministically update the state ledger, completely bypassing manual human review.",
    },
    architectureDescription:
      "Whether you are bridging legacy PLM databases or routing live fleet telemetry, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Supply Chain Bridging",
        description:
          "For major OEMs connecting existing ERP and PLM systems. Legacy HTTP requests are translated into secure Web3 transactions without system overhauls.",
        nodes: [
          {
            label: "Legacy Core",
            sublabel: "SAP / Oracle ERP",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API",
            sublabel: "Translation Gateway",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native Fleet Telemetry",
        description:
          "For commercial fleets and EV networks. Bypass legacy middleware and route vehicle telemetry directly to autonomous smart contracts.",
        nodes: [
          {
            label: "Client DApp",
            sublabel: "React & Web3 Wallets",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Decentralized Ledger",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Data Models",
            sublabel: "Smart Contract Logic",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the automotive and manufacturing sector.",
    spectrum: [
      {
        icon: Truck,
        title: "OEMs & Tier-1 Suppliers",
        description:
          "Enterprise manufacturers utilize Cerulea to establish unalterable parts data parity, track raw material provenance, and automatically execute Just-in-Time (JIT) escrow payments without relying on slow third party audits.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Targeted Defect Recalls",
          "JIT Escrow Execution",
          "Raw Material Provenance",
        ],
      },
      {
        icon: Landmark,
        title: "Dealerships & Fleet Operators",
        description:
          "Dealership networks and commercial fleets deploy Cerulea to monitor vehicle health in real time, instantly verify cryptographic maintenance logs, and automate warranty reimbursements directly with the manufacturer.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Automated Warranty Payouts",
          "Digital Vehicle Passports",
          "Floorplan Financing",
        ],
      },
      {
        icon: Code2,
        title: "DePIN & Mobility Developers",
        description:
          "Forward-thinking engineers build next generation EV charging networks and Decentralized Physical Infrastructure Networks (DePIN) on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "EV Charging Micro-Billing",
          "IoT Data Marketplaces",
          "Tokenized Fleet Ownership",
        ],
      },
    ],
    stackTitle: "The Automotive Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of global manufacturing. It is architected to provide a standardized, highly secure pathway for migrating legacy supply chain data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "MANUFACTURING LEDGERS",
        title: "Hybrid Assembly Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal OEM audits and supplier escrow, or launch directly onto the high-throughput Public L1 to facilitate consumer facing digital passports.",
      },
      {
        number: "02",
        category: "VENDOR KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting logistics node or dealership wallet is mathematically tied to a verified corporate credential before a part manifest is signed.",
      },
      {
        number: "03",
        category: "PARTS TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map physical vehicle components, battery lifecycles, and automated warranty triggers into secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "QUALITY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect the assembly line. Enforce strict cryptographic signatures from authorized safety inspectors before massive wholesale parts shipments are permitted to clear into production.",
      },
      {
        number: "05",
        category: "PLM & ERP BRIDGE",
        title: "The OEM API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy Siemens PLM and SAP ERP software directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom aerospace blockchains from scratch requires specialized engineers and massive hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "18 to 24 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "10 to 12 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Assembly Logic & Solidity",
          duration: "Months 1 to 8",
          description:
            "Negotiating data standards across independent Tier 1 suppliers and writing custom state machines to track component production entirely from scratch.",
        },
        {
          title: "Phase 2: IoT Sensor Integration",
          duration: "Months 7 to 12",
          description:
            "Building custom middleware to successfully translate raw physical factory sensor data and fleet telemetry into blockchain compatible payloads.",
        },
        {
          title: "Phase 3: Security Audits",
          duration: "Months 13 to 18",
          description:
            "Paying external firms to find code vulnerabilities in the custom escrow contracts before handling live, multi-million dollar wholesale parts trades.",
        },
        {
          title: "Phase 4: Multi-Vendor Testing",
          duration: "Months 17 to 24",
          description:
            "Enduring a massive rollout phase to ensure all independent dealership and supplier databases synchronize correctly with the ledger without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Logistics Modeling",
          duration: "Weeks 1 to 3",
          description:
            "Use Cerulea Studio to visually map physical assembly steps, warranty permissions, and automated escrow triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 4 to 6",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to regional suppliers from the control dashboard.",
        },
        {
          title: "Phase 3: Sensor & API Hookup",
          duration: "Weeks 7 to 9",
          description:
            "Connect existing fleet telematics and ERP systems directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 10 to 12",
          description:
            "Bridge the finalized logic to the live network and begin tracking real physical shipments and warranties with complete architectural confidence.",
        },
      ],
    },
  },

  //======================================= aviation-aerospace
  {
    slug: "aviation-aerospace",
    eyebrow: "Aviation & Aerospace",
    headline: ["Verify components.", "Automate compliance."],
    description:
      "Cerulea provides the execution engine to trace critical aircraft parts, automate MRO compliance records, and ingest IoT flight telemetry without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Unalterable Provenance",
        description:
          "Once a maintenance log or part serial number is recorded on the ledger, it cannot be altered. This drastically reduces the risk of unapproved parts entering the aviation supply chain.",
      },
      {
        number: "02",
        title: "Unified Industry Ledgers",
        description:
          "Eliminate fragmented data silos. Manufacturers, commercial airlines, and maintenance facilities all read and write to the exact same cryptographic source of absolute truth.",
      },
      {
        number: "03",
        title: "IoT Data Anchoring",
        description:
          "Flight recorders and hardware sensors feed telemetry directly into the execution layer. Smart contracts act autonomously on this data, scheduling predictive maintenance automatically.",
      },
      {
        number: "04",
        title: "Automated Escrow",
        description:
          "Programmable smart contracts replace manual invoicing in wholesale parts procurement. Capital is held securely and released instantly when logistics providers confirm delivery.",
      },
      {
        number: "05",
        title: "Cryptographic Safety",
        description:
          "Cerulea Studio compiles flight-critical logic into pre-audited, battle-tested binaries. This removes human coding errors and creates a zero-trust environment for aerospace data.",
      },
      {
        number: "06",
        title: "Real-Time Auditing",
        description:
          "Every single network state change is permanently hashed. Aviation authorities can verify historical compliance reports and safety records with absolute mathematical certainty.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex aerospace supply chains. Select a specific operational segment below.",
    useCases: [
      {
        icon: PlaneTakeoff,
        label: "MRO & Parts Traceability",
        legacyBottleneck:
          "Maintenance, Repair, and Overhaul (MRO) records rely on fragmented databases and paper trails. If a part is unverified, an entire aircraft can be grounded, costing airlines millions in lost revenue.",
        ceruleaExecution:
          "Mint a Digital Product Passport for every critical aircraft component. Cerulea securely logs the entire lifecycle of a part from the manufacturing floor to the final installation, proving absolute provenance.",
        architecturalImpact:
          "Verify every component and instantly clear grounded aircraft with mathematical proof of safety.",
      },
      {
        icon: Router,
        label: "IoT Engine Telemetry",
        legacyBottleneck: "Modern aircraft generate terabytes of sensor data per flight, but securely sharing this diagnostic data between OEMs, airlines, and maintenance crews is hindered by siloed, proprietary networks.",
        ceruleaExecution: "Connect IoT engine sensors directly to decentralized Oracles. Ingest raw physical telemetry into the blockchain state in real time, securely linking physical hardware performance to a shared digital manifest.",
        architecturalImpact: "Enable predictive maintenance across all stakeholders simultaneously, drastically reducing unplanned groundings.",
      },
      {
        icon: ShieldCheck,
        label: "Automated FAA/EASA Compliance",
        legacyBottleneck: "Aviation regulators demand exhaustive compliance documentation for every flight and repair. Producing these reports requires thousands of hours of manual administrative auditing.",
        ceruleaExecution: "Tokenize compliance checklists as immutable smart contracts. Regulators are granted read-only access to a shared Private Subnet, allowing them to verify cryptographic signatures of mechanics and inspectors instantly.",
        architecturalImpact: "Turn grueling monthly regulatory audits into real-time, zero-friction mathematical proofs.",
      },
      {
        icon: Truck,
        label: "Cross-Border Supply Chain",
        legacyBottleneck: "Sourcing specialized aerospace materials involves complex global supply chains. Customs delays and invoicing disputes routinely stall the delivery of critical manufacturing components.",
        ceruleaExecution: "Utilize programmable escrow contracts. Capital is locked on the blockchain and automatically released to the supplier the exact moment port authorities verify physical delivery via secure API oracles.",
        architecturalImpact: "Accelerate aerospace manufacturing timelines and remove third-party trade finance intermediaries from the supply chain.",
      },
      {
        icon: IdCard,
        label: "Crew & Pilot Credentialing",
        legacyBottleneck: "Verifying pilot licenses, medical clearances, and flight hours across different international jurisdictions is a slow, centralized process vulnerable to forgery.",
        ceruleaExecution: "Issue pilot and crew qualifications as verifiable cryptographic credentials. Airlines and airport authorities can instantly authenticate an individual’s flight status via their secure digital identity wallet.",
        architecturalImpact: "Establish a globally recognized, unforgeable standard for aerospace personnel verification.",
      },
      {
        icon: Leaf,
        label: "Sustainable Aviation Fuel (SAF)",
        legacyBottleneck: "Airlines struggle to conclusively prove their use of Sustainable Aviation Fuel (SAF) to regulators and consumers due to opaque carbon accounting and greenwashing risks.",
        ceruleaExecution: "Track every gallon of SAF from the refinery to the fuel tank on a unified ledger. Smart contracts autonomously calculate the exact carbon offset and issue verifiable digital sustainability certificates.",
        architecturalImpact: "Provide undeniable cryptographic proof of carbon neutrality to global environmental regulators.",
      },
    ],
    simulatorTitle: "Parts Traceability & Audit Simulator",
    simulatorDescription: "Manual safety verifications, paper maintenance logs, and counterfeit part investigations drain massive capital from MRO facilities. Calculate your exact operational savings by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Tracked Parts & MRO Logs",
      unit: "Tx",
      min: 1000,
      max: 100000,
      defaultValue: 25000,
      legacyCostLabel: "Manual Audits & Paper Tracking",
      legacyCostValue: "$13,500,000",
      ceruleaCostLabel: "Automated Smart Contract Hashing",
      ceruleaCostValue: "$45,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$13,455,000",
      methodology:
        "The legacy calculation utilizes aviation industry benchmarks estimating the average combined administrative cost of logging, auditing, and physically verifying a critical aerospace component at ** $45.00 USD** . This accounts for legacy third party compliance bodies and labor hours spent resolving unverified parts that cause grounded flights. Executing the exact same provenance log via Cerulea incurs an estimated network fee of **$0.15 USD**. This figure represents the computational gas cost required to automatically ingest supply chain telemetry and deterministically update the asset manifest on a high throughput Proof of Stake ledger, completely bypassing manual human review.",
    },
    architectureDescription:
      "Whether you are bridging legacy airline databases or routing live engine sensor telemetry, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise MRO Bridging",
        description:
          "For commercial airlines connecting existing ERP systems. Legacy HTTP requests are translated into secure Web3 transactions without overhauling core systems.",
        nodes: [
          {
            label: "Legacy Aviation  Core",
            sublabel: "SAP / Oracle ERP",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API",
            sublabel: "Translation Gateway",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native IoT Telemetry",
        description:
          "For distributed energy resources (DERs) like solar panels. Bypass legacy middleware and route smart meter telemetry directly to autonomous smart contracts.",
        nodes: [
          {
            label: "Aircraft Hardware",
            sublabel: "Engine Sensors & IoT",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Decentralized Oracles",
            sublabel: "Data Ingestion Nodes",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Maintenance Logic Triggers",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["MQTT PAYLOADS", "STATE EXECUTION"],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global aerospace sector.",
    spectrum: [
      {
        icon: PlaneTakeoff,
        title: "Commercial Airlines & OEMs",
        description:
          "Airlines and manufacturers utilize Cerulea to establish unalterable parts data parity, track raw material provenance, and automatically issue verifiable maintenance logs without relying on slow third party audits.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "MRO Record Tokenization",
          "Flight Telemetry Routing",
          "Supplier Parts Escrow",
        ],
      },
      {
        icon: Landmark,
        title: "Aviation Authorities (FAA/EASA)",
        description:
          "Regulators deploy Cerulea to monitor global fleet safety compliance, instantly verify cryptographic flight manifests, and enforce strict maintenance protocols across all commercial entities automatically.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Safety Compliance Audits",
          "Carbon Market Settlement",
          "Pilot License Verification",
        ],
      },
      {
        icon: Code2,
        title: "UAM & Drone Developers",
        description:
          "Forward-thinking engineers build next generation Urban Air Mobility (UAM) networks and decentralized drone flight corridors on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Drone Corridor Access",
          "IoT Data Marketplaces",
          "Airspace Micro-Billing",
        ],
      },
    ],
    stackTitle: "The Aerospace Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of global aviation. It is architected to provide a standardized, highly secure pathway for migrating legacy supply chain data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "AVIATION LEDGERS",
        title: "Hybrid Logistics Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal OEM audits, or launch directly onto the high-throughput Public L1 to facilitate drone network clearing.",
      },
      {
        number: "02",
        category: "CREW KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting logistics node or mechanic wallet is mathematically tied to a verified aviation credential before a maintenance log is signed.",
      },
      {
        number: "03",
        category: "PARTS TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map physical aircraft components, compliance certificates, and automated escrow triggers into secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "QUALITY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect global airspace. Enforce strict cryptographic signatures from authorized safety inspectors before massive wholesale aircraft component shipments are permitted to clear port customs.",
      },
      {
        number: "05",
        category: "MRO LOGISTICS BRIDGE",
        title: "The AMOS API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy aviation software directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom aerospace blockchains from scratch requires specialized engineers and massive hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "18 to 24 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "10 to 12 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Compliance Logic & Solidity",
          duration: "Months 1 to 8",
          description:
            "Negotiating data standards across independent OEMs and writing custom state machines to track critical components entirely from scratch.",
        },
        {
          title: "Phase 2: IoT Sensor Integration",
          duration: "Months 7 to 12",
          description:
            "Building custom middleware to successfully translate raw physical temperature sensor data and telemetry into blockchain compatible payloads.",
        },
        {
          title: "Phase 3: Security Audits",
          duration: "Months 13 to 18",
          description:
            "Paying external firms to find code vulnerabilities in the custom escrow contracts before handling live, multi-million dollar wholesale parts trades.",
        },
        {
          title: "Phase 4: Multi-Vendor Testing",
          duration: "Months 17 to 24",
          description:
            "Enduring a massive rollout phase to ensure all independent airline databases synchronize correctly with the ledger without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual MRO Modeling",
          duration: "Weeks 1 to 3",
          description:
            "Use Cerulea Studio to visually map physical logistics steps, FAA inspection permissions, and automated escrow triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 4 to 6",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to regional distributors from the control dashboard.",
        },
        {
          title: "Phase 3: Sensor & API Hookup",
          duration: "Weeks 7 to 9",
          description:
            "Connect existing fleet temperature sensors and ERP systems directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 10 to 12",
          description:
            "Bridge the finalized logic to the live network and begin tracking real physical shipments with complete architectural confidence.",
        },
      ],
    },
  },

  //===================================== agriculture-food-tech
  {
    slug: "agriculture-food-tech",
    eyebrow: "Agriculture & Food Tech",
    headline: ["Tokenize the harvest.", "Verify the supply chain."],
    description:
      "Cerulea provides the execution engine to trace global food provenance, automate agricultural escrow, and issue parametric crop insurance without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Unalterable Provenance",
        description:
          "Once a harvest manifest is recorded on the ledger, it cannot be altered or forged. This eliminates the need for expensive manual compliance searches and drastically reduces the risk of supply chain fraud.",
      },
      {
        number: "02",
        title: "IoT Data Anchoring",
        description:
          "Transport sensors feed cold-chain data directly into the execution layer. Smart contracts act autonomously on this telemetry, rejecting spoiled inventory without requiring retroactive human validation.",
      },
      {
        number: "03",
        title: "Parametric Automation",
        description:
          "By hooking agricultural policies directly to trusted weather feeds, insurance payouts trigger instantly the moment a disaster condition is verified, securing farmer livelihoods.",
      },
      {
        number: "04",
        title: "Automated Escrow",
        description:
          "Programmable smart contracts replace manual invoicing in international food markets. Capital is held securely in escrow and released exactly when port delivery is verified by oracles.",
      },
      {
        number: "05",
        title: "Unified Industry Ledgers",
        description:
          "Eliminate fragmented data silos. Farmers, distributors, certifiers, and grocers all read and write to the exact same unified ledger, ensuring perfect real-time synchronization of global food data.",
      },
      {
        number: "06",
        title: "Cryptographic Transparency",
        description:
          "Every single asset transfer and organic certification is permanently hashed. Regulators and consumers can verify the exact journey of a food product with absolute mathematical certainty.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex global food networks. Select a specific operational segment below.",
    useCases: [
      {
        icon: Truck,
        label: "Farm-to-Table Traceability",
        legacyBottleneck:
          "Global food supply chains rely on fragmented, opaque databases. When a contamination event occurs, identifying the exact origin farm takes weeks of manual investigation, leading to massive, indiscriminate product recalls.",
        ceruleaExecution:
          "Log every transfer of custody on a shared Private Subnet. Farmers, logistics providers, and supermarkets update a single unified ledger, providing real-time, undeniable visibility into the exact status and origin of all inventory.",
        architecturalImpact:
          "Execute hyper-targeted product recalls in seconds, preventing widespread waste and protecting consumer health with absolute certainty.",
      },
      {
        icon: Cloud,
        label: "Cold-Chain IoT Logistics",
        legacyBottleneck: "Perishable goods frequently spoil in transit due to temperature fluctuations, but buyers struggle to prove which specific logistics partner was responsible for the failure.",
        ceruleaExecution: "Connect IoT temperature and humidity sensors directly to decentralized Oracles. Ingest raw environmental data into the blockchain state in real time, securely linking physical transport conditions to the digital manifest.",
        architecturalImpact: "Automatically reject spoiled shipments and trigger instantaneous insurance payouts or penalties via programmatic smart contracts.",
      },
      {
        icon: ShieldCheck,
        label: "Ethical & Organic Certification",
        legacyBottleneck: "Consumers and regulators are increasingly demanding proof of sustainable, organic, and fair-trade farming practices. Currently, this relies on easily forged paper certificates and vulnerable centralized databases.",
        ceruleaExecution: "Tokenize agricultural certifications as immutable digital credentials. Third-party auditors issue cryptographic proofs directly to a farm’s on-chain identity, guaranteeing authenticity and preventing greenwashing.",
        architecturalImpact: "Establish absolute consumer trust and command premium pricing through mathematically guaranteed ethical sourcing.",
      },
      {
        icon: Handshake,
        label: "Smart Agri-Escrow",
        legacyBottleneck: "Farmers face massive capital lockups waiting for international distributors to clear customs and issue payment, often relying on expensive trade finance intermediaries.",
        ceruleaExecution: "Utilize programmable escrow contracts. Buyer capital is locked on the blockchain and automatically released to the farmer the exact moment port authorities or IoT sensors verify successful physical delivery.",
        architecturalImpact: "Accelerate farmer cash flow, remove third-party holding fees, and eliminate cross-border payment defaults.",
      },
      {
        icon: Umbrella,
        label: "Parametric Crop Insurance",
        legacyBottleneck: "Traditional crop insurance requires manual field assessments after natural disasters, delaying critical payouts for months and leaving farmers without capital for the next planting season.",
        ceruleaExecution: "Deploy smart contracts connected to trusted weather Oracles. When predefined weather anomalies are detected (like extreme drought or flooding), the contract autonomously triggers and settles the payout instantly.",
        architecturalImpact: "Automate the claims adjustment process and give farmers zero-friction, instantaneous capital recovery.",
      },
      {
        icon: PieChart,
        label: "Fractionalized Crop Yields",
        legacyBottleneck: "Small and medium agricultural producers struggle to secure upfront financing for seeds, equipment, and operations from traditional, risk-averse commercial banks.",
        ceruleaExecution: "Tokenize projected crop yields. Farmers can sell fractional digital shares of their future harvest directly to global retail buyers or decentralized finance pools, bypassing legacy loan officers.",
        architecturalImpact: "Democratize agricultural investment and provide farmers with immediate, unified access to global capital markets.",
      },
    ],
    simulatorTitle: "Food Traceability & Certification Simulator",
    simulatorDescription: "Manual supply chain tracking, physical documentation audits, and spoilage losses drain massive capital from agricultural networks. Calculate your exact operational savings by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Tracked Shipments / Audits",
      unit: "Tx",
      min: 10000,
      max: 1000000,
      defaultValue: 150000,
      legacyCostLabel: "Manual Auditing & Recall Loss",
      legacyCostValue: "$33,300,000",
      ceruleaCostLabel: "Automated Smart Contract Ingestion",
      ceruleaCostValue: "$72,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$10,164,000",
      methodology:
        "The legacy calculation utilizes food industry benchmarks estimating the average combined administrative cost of logging, auditing, and issuing paper certifications for a single shipment batch at **$18.50 USD**. This accounts for legacy third party compliance bodies and systemic spoilage misallocation. Executing the exact same provenance log via Cerulea incurs an estimated network fee of **$0.04 USD**. This figure represents the computational gas cost required to automatically ingest IoT sensor telemetry and deterministically update the asset manifest on a high throughput Proof of Stake ledger, completely bypassing manual human review.",
    },
    architectureDescription:
      "Whether you are bridging legacy logistics databases or routing live smart sensor telemetry, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Supply Chain Bridging",
        description:
          "For major food distributors connecting existing ERP systems. Legacy HTTP requests are translated into secure Web3 transactions without system overhauls.",
        nodes: [
          {
            label: "Legacy Logistics Core",
            sublabel: "SAP / Oracle ERP",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API",
            sublabel: "Translation Gateway",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native IoT Telemetry",
        description:
          "For distributed energy resources (DERs) like solar panels. Bypass legacy middleware and route smart meter telemetry directly to autonomous smart contracts.",
        nodes: [
          {
            label: "Aircraft Hardware",
            sublabel: "Engine Sensors & IoT",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Decentralized Oracles",
            sublabel: "Data Ingestion Nodes",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Maintenance Logic Triggers",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["MQTT PAYLOADS", "STATE EXECUTION"],
      },
    ],
    spectrumTitle: "Applicability Across the Spectrum",
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global agricultural sector.",
    spectrum: [
      {
        icon: Truck,
        title: "Global FMCG & Food Distributors",
        description:
          "Enterprise food distributors utilize Cerulea to establish unalterable supply chain data parity, track raw material provenance, and automatically identify the source of pathogen outbreaks in seconds without relying on slow third party audits.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Targeted Product Recalls",
          "Cold-Chain Verification",
          "Supplier Escrow Settlement",
        ],
      },
      {
        icon: Landmark,
        title: "Agricultural Ministries & Certifiers",
        description:
          "Government regulators and NGOs deploy Cerulea to monitor organic and fair trade compliance, instantly verify cryptographic harvest manifests, and route targeted farming subsidies directly to verified agricultural identities.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Organic Certification Audits",
          "Subsidy Routing",
          "Fair Trade Compliance",
        ],
      },
      {
        icon: Code2,
        title: "AgTech & DeFi Developers",
        description:
          "Forward-thinking engineers build next generation fractional farming platforms and parametric crop insurance protocols on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Parametric Crop Insurance",
          "Fractional Yield Investment",
          "IoT Data Marketplaces",
        ],
      },
    ],
    stackTitle: "The AgTech Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of global food supply chains. It is architected to provide a standardized, highly secure pathway for migrating legacy logistics data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "SUPPLY CHAIN LEDGERS",
        title: "Hybrid Logistics Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal supplier audits, or launch directly onto the high-throughput Public L1 to facilitate consumer facing QR code provenance.",
      },
      {
        number: "02",
        category: "FARMER KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting logistics node or farmer wallet is mathematically tied to a verified corporate credential before a harvest manifest is signed.",
      },
      {
        number: "03",
        category: "BATCH TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map physical crop batches, organic certificates, and automated escrow triggers into secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "QUALITY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect global food safety. Enforce strict cryptographic signatures from authorized health inspectors before massive wholesale food shipments are permitted to clear port customs.",
      },
      {
        number: "05",
        category: "LOGISTICS BRIDGE",
        title: "The ERP API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy supply chain software directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom supply chain blockchains from scratch requires specialized engineers and massive hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "18 to 24 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "10 to 12 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Supply Chain Logic & Solidity",
          duration: "Months 1 to 8",
          description:
            "Negotiating data standards across independent farmers and writing custom state machines to track crop production entirely from scratch.",
        },
        {
          title: "Phase 2: IoT Sensor Integration",
          duration: "Months 7 to 12",
          description:
            "Building custom middleware to successfully translate raw physical temperature sensor data and telemetry into blockchain compatible payloads.",
        },
        {
          title: "Phase 3: Security Audits",
          duration: "Months 13 to 18",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch critical vulnerabilities in the custom escrow code handling multi-million dollar wholesale trades.",
        },
        {
          title: "Phase 4: Multi-Vendor Testing",
          duration: "Months 17 to 24",
          description:
            "Enduring a massive rollout phase to ensure all independent supplier databases synchronize correctly with the ledger without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Logistics Modeling",
          duration: "Weeks 1 to 3",
          description:
            "Use Cerulea Studio to visually map physical logistics steps, inspection permissions, and automated escrow triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 4 to 6",
          description:
            "Automate the deployment of the Sovereign Private Subnet and institutional validator nodes directly from the control dashboard.",
        },
        {
          title: "Phase 3: Sensor & API Hookup",
          duration: "Weeks 7 to 9",
          description:
            "Connect existing fleet temperature sensors and ERP systems directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 10 to 12",
          description:
            "Bridge the finalized logic to the live network and begin tracking real physical shipments with complete architectural confidence.",
        },
      ],
    },
  },

  //===================================== enterprise-it-saas
  {
    slug: "enterprise-it-saas",
    eyebrow: "Enterprise IT & SaaS",
    headline: ["Decentralize architecture.", "Automate entitlements."],
    description:
      "Cerulea provides the execution engine to tokenize software licensing, automate API micro-billing, and generate immutable system audit logs without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Frictionless Micro-Billing",
        description:
          "High throughput execution completely bypasses legacy payment gateways. SaaS providers can process millions of microscopic transactions per second, capturing exact value for compute and API usage.",
      },
      {
        number: "02",
        title: "Unalterable Audit Trails",
        description:
          "Once a system event or configuration change is recorded on the ledger, it cannot be spoofed or deleted. This provides absolute mathematical proof of compliance to enterprise clients.",
      },
      {
        number: "03",
        title: "Cryptographic Access",
        description:
          "Replace vulnerable passwords with deterministic token checks. Users access platforms by signing a transaction with their private key, eliminating credential stuffing attacks instantly.",
      },
      {
        number: "04",
        title: "Automated Escrow Execution",
        description:
          "Programmable smart contracts execute vendor SLA payouts autonomously. Funds are released instantly or refunded to the client based entirely on verified performance metrics.",
      },
      {
        number: "05",
        title: "Secondary Market Capital",
        description:
          "Software licenses converted to digital assets can be safely resold between B2B clients. Smart contracts route a hardcoded royalty cut back to the software publisher on every transfer.",
      },
      {
        number: "06",
        title: "Unified State Management",
        description:
          "Eliminate fragmented internal databases. Partner integrations, distributed microservices, and global billing engines all read from the exact same shared cryptographic state.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex cloud architectures. Select a specific operational segment below.",
    useCases: [
      {
        icon: Code2,
        label: "Software Licensing & DRM",
        legacyBottleneck:
          "SaaS companies rely on centralized license servers that are vulnerable to piracy, credential sharing, and spoofing. Furthermore, B2B software licenses are completely illiquid and cannot be resold or easily transferred.",
        ceruleaExecution:
          "Tokenize software licenses as digital assets. Access is granted only when the user’s wallet cryptographically proves ownership of the license token, eliminating credential sharing while enabling secure, trackable B2B license transfers.",
        architecturalImpact:
          "Protect every license and unlock new revenue models by capturing royalties on secondary market resales.",
      },
      {
        icon: Zap,
        label: "API Micro-Monetization",
        legacyBottleneck: "Traditional payment gateways charge high flat fees per transaction. This makes charging fractions of a cent for individual API calls or AI compute requests economically impossible for SaaS platforms.",
        ceruleaExecution: "Implement high-throughput payment channels on the Cerulea L1. Developers can stream fractions of a cent continuously as their applications consume your API data or compute resources.",
        architecturalImpact: "Unlock entirely new monetization models for developer tools, AI endpoints, and high-frequency data streaming.",
      },
      {
        icon: ScrollText,
        label: "Immutable System Logs",
        legacyBottleneck: "When an enterprise network experiences a data breach or insider threat, sophisticated attackers cover their tracks by altering or deleting central server logs, hindering forensic recovery.",
        ceruleaExecution: "Stream critical application logs and database access events directly to an isolated Private Chain. Because the ledger is append-only, threat data is permanently hashed and impossible to modify or delete.",
        architecturalImpact: "Guarantee perfect forensic data integrity and comply flawlessly with strict ISO and SOC2 data governance requirements.",
      },
      {
        icon: GitBranch,
        label: "Automated SLA Enforcement",
        legacyBottleneck: "Enforcing Service Level Agreements (SLAs) for cloud uptime requires manual monitoring, lengthy client disputes, and delayed credit issuing when service guarantees are breached.",
        ceruleaExecution: "Encode SLA terms directly into programmable escrow contracts. If decentralized Oracles detect that server uptime drops below 99.99%, the smart contract automatically executes the predefined refund to the client.",
        architecturalImpact: "Eliminate billing disputes, reduce customer support overhead, and provide enterprise clients with mathematically guaranteed service compensation.",
      },
      {
        icon: Fingerprint,
        label: "Decentralized SSO (Federated Identity)",
        legacyBottleneck: "Enterprise single sign-on (SSO) relies on massive centralized providers. If the provider experiences an outage or a breach, thousands of dependent SaaS platforms and enterprise clients are locked out simultaneously.",
        ceruleaExecution: "Implement decentralized identity frameworks. Users control their own cryptographic access credentials, allowing them to authenticate across multiple isolated SaaS platforms without relying on a central point of failure.",
        architecturalImpact: "Enhance platform resilience, eliminate centralized authentication honeypots, and provide a frictionless login experience.",
      },
      {
        icon: Cloud,
        label: "Decentralized Cloud Provisioning",
        legacyBottleneck: "Cloud infrastructure is dominated by a few massive hyperscalers, leading to vendor lock-in, inflexible pricing, and single points of regional failure.",
        ceruleaExecution: "Connect your SaaS architecture to Decentralized Physical Infrastructure Networks (DePIN). Smart contracts route compute and storage workloads to a distributed network of global providers based on real-time pricing and latency.",
        architecturalImpact: "Drastically reduce cloud infrastructure costs, eliminate vendor lock-in, and achieve true global redundancy.",
      },
    ],
    simulatorTitle: "API Billing & Licensing Simulator",
    simulatorDescription: "Payment gateway processing fees, manual invoice generation, and complex license administration drain critical margins from SaaS providers. Calculate your exact savings by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Processed API Bills & Licenses",
      unit: "Tx",
      min: 10000,
      max: 5000000,
      defaultValue: 500000,
      legacyCostLabel: "Stripe Gateway Fees & Admin Review",
      legacyCostValue: "$2,100,000",
      ceruleaCostLabel: "Smart Contract Settlement",
      ceruleaCostValue: "$30,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$2,070,000",
      methodology:
        "The legacy calculation utilizes SaaS industry benchmarks estimating the average combined operational cost of processing a credit card invoice, calculating a usage-based tier, and issuing a B2B license verification at **$0.35 USD** per execution. This accounts for legacy Stripe/PayPal gateway cuts and internal sales operations labor. Executing the exact same entitlement trigger via Cerulea incurs an estimated network fee of **$0.005 USD**. This figure represents the computational gas cost required to automatically verify a user's cryptographic signature and deterministically route micro-payments on a high-throughput consensus engine, bypassing expensive financial middlemen entirely.",
    },
    architectureDescription:
      "Whether you are bridging legacy AWS cloud infrastructure or deploying a native DApp platform, Cerulea provides the exact framework required.",
    tracks: [
      {
        title: "Track A: Enterprise Cloud Bridging",
        description:
          "For major software vendors connecting existing databases. Legacy HTTP requests are translated into secure Web3 transactions without overhauling core compute layers.",
        nodes: [
          {
            label: "Legacy Logistics Core",
            sublabel: "SAP / Oracle ERP",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API",
            sublabel: "Translation Gateway",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native DApp Execution",
        description:
          "For native Web3 platforms and DePIN networks. Route API requests and licensing directly to autonomous public smart contracts.",
        nodes: [
          {
            label: "Aircraft Hardware",
            sublabel: "Engine Sensors & IoT",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Decentralized Oracles",
            sublabel: "Data Ingestion Nodes",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Maintenance Logic Triggers",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["MQTT PAYLOADS", "STATE EXECUTION"],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the software and cloud computing sector.",
    spectrum: [
      {
        icon: Code2,
        title: "Enterprise SaaS Providers",
        description:
          "Major software vendors utilize Cerulea to establish unalterable system audit logs, automate complex B2B SLA refunds, and completely eradicate software piracy through cryptographically verified licensing.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "SLA Escrow Automation",
          "License Tokenization",
          "SOC2 Log Immutability",
        ],
      },
      {
        icon: Cloud,
        title: "Cloud Infrastructure Networks",
        description:
          "Datacenters and cloud providers deploy Cerulea to monitor global compute allocation, instantly verify cryptographic access requests across federated identities, and automate high speed micro billing for resource consumption.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "API Micro-Billing",
          "Decentralized SSO",
          "Compute Workload Routing",
        ],
      },
      {
        icon: Cpu,
        title: "DePIN & AI Developers",
        description:
          "Forward-thinking engineers build Decentralized Physical Infrastructure Networks (DePIN) and decentralized AI marketplaces on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "AI Training Data Provenance",
          "GPU Resource Marketplaces",
          "Storage Tokenization",
        ],
      },
    ],
    stackTitle: "The Software Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of cloud operations. It is architected to provide a highly secure pathway for migrating legacy IT systems into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "COMPUTE LEDGERS",
        title: "Hybrid Cloud Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal B2B compliance logs, or launch directly onto the high-throughput Public L1 to facilitate decentralized API monetization.",
      },
      {
        number: "02",
        category: "FEDERATED KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting software client or API endpoint is mathematically tied to a verified corporate credential before bandwidth is routed.",
      },
      {
        number: "03",
        category: "ASSET TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map software licenses, SLA penalty triggers, and automated API billing structures into secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "INFRASTRUCTURE GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect the core stack. Enforce strict cryptographic signatures from authorized DevOps leads before major smart contract upgrades or massive infrastructure changes are executed.",
      },
      {
        number: "05",
        category: "LEGACY CLOUD BRIDGE",
        title: "The Operations API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy AWS, Azure, and internal ERP software directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom IT blockchains from scratch requires specialized engineers and massive software integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 18 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Architecture & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring specialized Web3 developers to write custom state machines, API micro-billing logic, and licensing standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 4 to 6",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the automated escrow code before handling client SLA capital.",
        },
        {
          title: "Phase 3: Cloud Middleware",
          duration: "Months 6 to 9",
          description:
            "Building fragile custom middleware to successfully translate traffic from AWS or Azure servers into blockchain compatible execution payloads.",
        },
        {
          title: "Phase 4: Network Testing",
          duration: "Months 14 to 18",
          description:
            "Enduring a massive beta rollout phase to ensure the custom middleware, the smart contracts, and the global SaaS client portals synchronize correctly.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Entitlement Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to visually map software licenses, billing triggers, and automated SLA escrow constraints without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Automate the deployment of the Sovereign Private Chain and B2B validator nodes directly from the control dashboard.",
        },
        {
          title: "Phase 3: API Gateway Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect existing cloud infrastructure and SaaS backend servers directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Bridge the finalized logic to the live network and begin executing high-speed micro-billing and compliance tracking with absolute architectural confidence.",
        },
      ],
    },
  },


  //======================================= human-resources-talent
  {
    slug: "human-resources-talent",
    eyebrow: "Human Resources & Talent",
    headline: ["Decentralize payroll.", "Automate credentialing."],
    description:
      "Cerulea provides the execution engine to deploy global gig economy escrow, tokenize employee equity, and issue verifiable employment records without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Atomic Settlements",
        description:
          "Execution and payroll transfer occur simultaneously in milliseconds. This absolute finality ensures there are no delays or costly correspondent banking errors for global contractors.",
      },
      {
        number: "02",
        title: "Disintermediation",
        description:
          "Connect companies directly with freelancers. By removing massive centralized gig platforms that take steep revenue cuts, workers capture significantly higher margins on their labor.",
      },
      {
        number: "03",
        title: "Programmable Vesting",
        description:
          "Companies can embed strict vesting schedules directly into tokenized equity. Shares unlock precisely when specific dates or performance thresholds are cryptographically verified.",
      },
      {
        number: "04",
        title: "Worker Data Sovereignty",
        description:
          "Employees maintain a single secure cryptographic profile that instantly proves their employment history and verified skills without needing HR intervention for every background check.",
      },
      {
        number: "05",
        title: "Unalterable Evidence",
        description:
          "Once a disciplinary log or contract is recorded on the ledger, it cannot be backdated or modified. This provides an absolute, mathematically verified chain of custody during labor disputes.",
      },
      {
        number: "06",
        title: "Global Accessibility",
        description:
          "Public ledgers do not care about borders. A company in London can instantly escrow funds and securely hire a contractor in Argentina without opening localized bank accounts.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting borderless workforces. Select a specific operational segment below.",
    useCases: [
      {
        icon: Globe2,
        label: "Global Payroll Clearing",
        legacyBottleneck:
          "Paying international contractors and remote employees involves massive wire fees, terrible exchange rates, and multi-day delays caused by legacy correspondent banking networks.",
        ceruleaExecution:
          "Deploy atomic cross-border settlements via stablecoins. Smart contracts execute payroll to thousands of global employees simultaneously, settling in their local digital wallets in milliseconds.",
        architecturalImpact:
          "Pay remote workers instantly, anywhere, with zero intermediary banking fees.",
      },
      {
        icon: FileCheck,
        label: "Verifiable Employment Records",
        legacyBottleneck: "Employees constantly request proof of employment and income to secure mortgages or new jobs. HR departments spend thousands of hours manually responding to these redundant verifications.",
        ceruleaExecution: "Issue cryptographic employment records directly to the employee’s digital identity wallet. They can independently prove their income and tenure to third parties instantly via verifiable zero-knowledge proofs.",
        architecturalImpact: "Remove the administrative burden of manual background checks and grant employees absolute sovereignty over their professional data.",
      },
      {
        icon: Timer,
        label: "Gig Economy Escrow",
        legacyBottleneck: "Freelance platforms and gig economy networks charge massive commission rates (up to 20 percent) just to act as a trusted escrow agent between the client and the contractor.",
        ceruleaExecution: "Utilize programmable smart escrow. Capital is locked on the public ledger and automatically released to the freelancer the exact moment predefined project milestones are verified by the client.",
        architecturalImpact: "Eliminate middleman platform fees, protect clients from incomplete work, and guarantee freelancers are paid upon verified delivery.",
      },
      {
        icon: Layers,
        label: "Tokenized Equity & RSUs",
        legacyBottleneck: "Managing employee stock options and Restricted Stock Units (RSUs) requires fragmented, opaque cap table software. Employees often lack visibility into their actual vested equity value.",
        ceruleaExecution: "Tokenize corporate equity on a Private Subnet. Use Cerulea Studio to hardcode vesting schedules into the asset logic, automatically releasing digital shares to employees exactly as they vest.",
        architecturalImpact: "Ensure perfect cap table synchronization and provide employees with a highly transparent, engaging dashboard for their equity.",
      },
      {
        icon: Fingerprint,
        label: "Universal Onboarding & KYC",
        legacyBottleneck: "Onboarding a new hire involves repetitive data entry, physical document scanning, and redundant identity verification across payroll, IT, and compliance databases.",
        ceruleaExecution: "Implement a unified on-chain identity framework. The new hire verifies their identity once, and smart contracts autonomously provision their payroll account, IT access, and compliance status simultaneously.",
        architecturalImpact: "Reduce onboarding friction from days to minutes while securely automating enterprise-wide access control.",
      },
      {
        icon: ScrollText,
        label: "Immutable Performance Logs",
        legacyBottleneck: "Resolving HR disputes or wrongful termination claims is notoriously subjective because performance reviews and disciplinary actions are easily altered or deleted in centralized databases.",
        ceruleaExecution: "Hash critical performance reviews and disciplinary actions to an append-only ledger. Both the manager and the employee cryptographically sign the record, creating an unforgeable timeline of events.",
        architecturalImpact: "Provide absolute, objective cryptographic evidence for HR arbitration and protect organizations against fabricated legal claims.",
      },
    ],
    simulatorTitle: "Cross-Border Payroll & Escrow Simulator",
    simulatorDescription: "International wire fees, freelance platform commissions, and manual compliance audits drain capital from hiring budgets. Calculate your savings by migrating to Cerulea atomic settlement.",
    simulator: {
      label: "Monthly Contractor Payouts & Escrow Dips",
      unit: "Tx",
      min: 1000,
      max: 50000,
      defaultValue: 15000,
      legacyCostLabel: "Wire Fees & Platform Escrow Rates",
      legacyCostValue: "$3,330,000",
      ceruleaCostLabel: "Smart Contract Execution",
      ceruleaCostValue: "$27,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$3,303,000",
      methodology:
        "The legacy calculation utilizes global HR benchmarks estimating the average combined operational cost of processing a cross border wire transfer, paying gig platform commission rates, and completing manual identity verification at **$18.50 USD** per payout event. Executing the exact same escrow trigger via Cerulea incurs an estimated network fee of **$0.15 USD**. This figure represents the computational gas cost required to automatically verify a contractor's digital signature and deterministically route stablecoins on a high throughput consensus engine, completely bypassing traditional banking intermediaries.",
    },
    architectureDescription:
      "Whether you are bridging legacy HRIS databases or routing funds directly to freelance mobile wallets, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise HRIS Bridging",
        description:
          "For major corporations connecting existing payroll software. Legacy HTTP requests are translated into secure Web3 transactions without overhauling core systems.",
        nodes: [
          {
            label: "Legacy HR Core",
            sublabel: "Workday / Deel API",
            icon: Building2,
            accent: false,
          },
          {
            label: "Cerulea API",
            sublabel: "Translation Gateway",
            icon: Sparkles,
            accent: true,
          },
          {
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Corporate State",
            icon: Server,
            accent: true,
          },
        ],
        connectorLabels: ["HTTPS / MQTT", "WASM COMPILATION"],
      },
      {
        title: "Track B: Native Gig DApp Execution",
        description:
          "For decentralized freelance platforms. Bypass legacy middleware and route escrow logic directly to the public execution layer.",
        nodes: [
          {
            label: "Aircraft Hardware",
            sublabel: "Engine Sensors & IoT",
            icon: SquareTerminal,
            accent: false,
          },
          {
            label: "Decentralized Oracles",
            sublabel: "Data Ingestion Nodes",
            icon: ShieldCheck,
            accent: true,
          },
          {
            label: "Cerulea Public L1",
            sublabel: "Maintenance Logic Triggers",
            icon: Cpu,
            accent: true,
          },
        ],
        connectorLabels: ["MQTT PAYLOADS", "STATE EXECUTION"],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global talent and HR sector.",
    spectrum: [
      {
        icon: Building2,
        title: "Enterprise HR Departments",
        description:
          "Corporate HR teams utilize Cerulea to establish unalterable performance logs, automate global payroll across disparate banking systems, and track complex tokenized employee equity transparently.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Cross-Border Payroll",
          "Equity Tokenization",
          "Immutable HR Logs",
        ],
      },
      {
        icon: Wallet,
        title: "Gig Platforms & Staffing Agencies",
        description:
          "Freelance platforms and recruiters deploy Cerulea to establish a perfectly synchronized cryptographic escrow ledger. This protects both clients and contractors while completely removing manual invoice dispute resolution.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Freelance Escrow Setup",
          "Instant Background Checks",
          "Algorithmic Arbitration",
        ],
      },
      {
        icon: Code2,
        title: "Web3 Work Developers",
        description:
          "Forward-thinking engineers build next generation bounty networks and decentralized talent marketplaces on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security for worker payments.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Decentralized Job Boards",
          "DAO Contributor Payouts",
          "Zero-Knowledge Resumes",
        ],
      },
    ],
    stackTitle: "The Talent Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of global human resources. It is architected to provide a highly secure pathway for migrating legacy employee data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "EMPLOYMENT LEDGERS",
        title: "Hybrid Workforce Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal B2B sponsor tracking, or launch directly onto the high-throughput Public L1 to facilitate global, open-market trading for fans.",
      },
      {
        number: "02",
        category: "WORKFORCE KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting contractor wallet is mathematically tied to a verified compliance credential before access to escrow funds is permitted.",
      },
      {
        number: "03",
        category: "CONTRACT TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map employment agreements, equity vesting schedules, and automated escrow triggers into deterministically secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "TREASURY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect payroll capital. Enforce strict cryptographic signatures from authorized finance directors before massive international contractor batches are permitted to execute.",
      },
      {
        number: "05",
        category: "LEGACY SOFTWARE BRIDGE",
        title: "The HRIS API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy Workday, Gusto, and Deel software directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom heavy industry blockchains from scratch requires specialized engineers and massive hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 16 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Ticketing Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring specialized Web3 developers to write custom state machines, vesting logic, and global payment standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal code vulnerabilities in the smart contracts before holding live corporate payroll.",
        },
        {
          title: "Phase 3: HRIS Middleware",
          duration: "Months 6 to 9",
          description:
            "Building fragile custom middleware to successfully translate HTTP data from legacy HR tools (like Workday) into blockchain compatible execution payloads.",
        },
        {
          title: "Phase 4: Regulatory Testing",
          duration: "Months 10 to 16",
          description:
            "Enduring a massive beta rollout phase to ensure the custom middleware, the smart contracts, and the global compliance frameworks synchronize correctly.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Contract Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to visually map employment agreements, automated escrow conditions, and equity vesting schedules without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Automate the deployment of the Sovereign Private Chain and compliance validator nodes directly from the control dashboard.",
        },
        {
          title: "Phase 3: API & HRIS Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect internal corporate systems directly to auto-generated Cerulea REST endpoints. No custom middleware is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Bridge the finalized logic to the live network and begin executing cross-border payroll and gig economy escrow with absolute architectural confidence.",
        },
      ],
    },
  },


  //======================================== insurance

  {
    slug: "insurance",
    eyebrow: "Insurance & InsurTech",
    headline: ["Automate policies.", "Parametric execution."],
    description:
      "Cerulea provides the execution engine to automate claims adjudication, deploy zero-touch parametric insurance, and systematically eradicate billing fraud without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Deterministic Adjudication",
        description:
          "Smart contracts process claims based on pure mathematical logic. This eliminates human subjectivity, delays in processing, and administrative overhead during standard settlements.",
      },
      {
        number: "02",
        title: "Parametric Automation",
        description:
          "By hooking policies directly to trusted external data feeds (Oracles), payouts trigger instantly the moment a condition is met, creating a frictionless experience for policyholders.",
      },
      {
        number: "03",
        title: "Cross-Carrier Parity",
        description:
          "Consortiums can establish a shared ledger. Primary carriers and reinsurers read from the exact same source of truth, eliminating reconciliation delays during treaty settlements.",
      },
      {
        number: "04",
        title: "Fraud Eradication",
        description:
          "Cryptographic hashing prevents bad actors from submitting duplicate claims to multiple providers. The network systematically rejects duplicate proofs across the entire ecosystem.",
      },
      {
        number: "05",
        title: "Dynamic Pricing Models",
        description:
          "High-throughput infrastructure allows carriers to ingest real-time IoT and telematics data, actively adjusting micro-premiums based on verified behavior and usage.",
      },
      {
        number: "06",
        title: "Provable Auditing",
        description:
          "Every single network state change is permanently hashed. Regulators and compliance teams can verify historical claims data with absolute mathematical certainty in real-time.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex actuarial networks. Select a specific operational segment below.",
    useCases: [
      {
        icon: Umbrella,
        label: "Parametric Insurance",
        legacyBottleneck:
          "Processing claims for weather events, flight delays, or natural disasters requires massive manual verification and customer friction, delaying critical payouts for weeks.",
        ceruleaExecution:
          "Deploy smart contracts connected to trusted real-world Oracles. When predefined parameters are met (e.g. wind speeds exceed 80mph), the contract autonomously triggers and settles the payout instantly.",
        architecturalImpact:
          "Automate the claims adjustment process entirely and give policyholders zero-friction, instantaneous liquidity.",
      },
      {
        icon: HeartPulse,
        label: "Health Claims Adjudication",
        legacyBottleneck: "Medical billing is a maze of coding errors, manual reviews, and endless back-and-forth between providers and payers, leading to massive administrative bloat.",
        ceruleaExecution: "Use Cerulea Studio to visually map policy coverages into programmatic rules. When a provider submits a claim, the network deterministically checks the diagnosis codes against the policy and settles the payment.",
        architecturalImpact: "Reduce claims processing overhead from 30 days to 300 milliseconds and eliminate human review on standard procedures.",
      },
      {
        icon: Layers,
        label: "Reinsurance & Risk Pooling",
        legacyBottleneck: "Syndicating risk across multiple reinsurance partners involves highly fragmented spreadsheets, opaque collateral tracking, and delayed treaty settlements.",
        ceruleaExecution: "Tokenize risk portfolios on a shared Private Subnet. All participating reinsurers have real-time, cryptographic visibility into the underlying policy data and automated premium routing.",
        architecturalImpact: "Unlock perfect data parity between primary carriers and reinsurers while automating complex treaty distributions.",
      },
      {
        icon: ShieldAlert,
        label: "Fraud Prevention",
        legacyBottleneck: "Siloed carrier databases allow bad actors to submit duplicate claims to multiple insurers for the same incident (double-dipping) without being detected.",
        ceruleaExecution: "Carriers form a secure consortium network. Incident hashes are recorded on the shared ledger without revealing sensitive customer data, instantly flagging duplicate cryptographic signatures.",
        architecturalImpact: "Systematically prevent multi-carrier fraud rings and save millions in fraudulent payout leakage.",
      },
      {
        icon: Router,
        label: "Telematics & IoT Integration",
        legacyBottleneck: "Usage-based insurance (UBI) models struggle to securely ingest and verify the massive volume of data generated by vehicle telematics and wearable devices.",
        ceruleaExecution: "Connect IoT data streams directly to decentralized Oracles. Cerulea handles high-throughput ingestion, dynamically adjusting premium pricing based on irrefutable, cryptographically signed sensor data.",
        architecturalImpact: "Offer hyper-personalized, dynamically priced policies backed by mathematically guaranteed data integrity.",
      },
      {
        icon: ArrowRightLeft,
        label: "Automated Subrogation",
        legacyBottleneck: "Resolving fault and transferring funds between two insurance carriers after an incident involves expensive arbitration and prolonged legal workflows.",
        ceruleaExecution: "Map subrogation logic into shared inter-carrier contracts. When fault is determined, the smart contract automatically executes the settlement from the at-fault carrier’s treasury to the recovering carrier.",
        architecturalImpact: "Slash legal overhead and accelerate inter-carrier capital recovery.",
      },
    ],
    simulatorTitle: "Claims Adjudication Simulator",
    simulatorDescription: "Manual claims processing and dispute resolution drains operational budgets. Calculate your exact capital savings by moving from legacy review pipelines to Cerulea atomic execution.",
    simulator: {
      label: "Monthly Claims Processed",
      unit: "Tx",
      min: 10000,
      max: 1000000,
      defaultValue: 50000,
      legacyCostLabel: "Manual Review & Overhead",
      legacyCostValue: "$19,500,000",
      ceruleaCostLabel: "Network Logic Execution",
      ceruleaCostValue: "$90,000",
      totalSavedLabel: "Total Capital Saved Annually",
      totalSavedValue: "$19,410,000",
      methodology:
        "The legacy calculation utilizes insurance industry benchmarks estimating the average combined operational cost of adjusting, verifying, and fulfilling a standard claim at **$32.50 USD per transaction**. This accounts for claims management systems and human actuarial review. Executing the exact same policy trigger via Cerulea incurs an estimated network fee of **$0.15 USD**. This figure represents the raw computational gas cost required to execute the policy logic via a WebAssembly (WASM) binary on a high-throughput consensus engine. Because the network processes the validation and payout atomically, administrative review is mathematically eliminated.",
    },
    architectureDescription:
      "Whether you are bridging legacy claims software or ingesting live IoT telemetry, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Claims Bridging",
        description:
          "For carriers connecting existing software. Legacy HTTP requests are translated into secure Web3 transactions without overhauling core systems.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Core",
            sublabel: "Guidewire / Duck Creek",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chain",
            sublabel: "Sovereign Execution",
            accent: true
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"]
      },
      {
        title: "Track B: Native Parametric Execution",
        description:
          "For external risk triggers. Route IoT or weather data directly to decentralized Oracles to execute autonomous policy payouts.",
        nodes: [
          {
            icon: Cpu,
            label: "IoT / Weather APIs",
            sublabel: "NOAA / Flight Data",
          },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Data Ingestion Nodes",
            accent: true
          },
          {
            icon: Layers,
            label: "Cerulea Data Models",
            sublabel: "Policy Logic Triggers",
            accent: true
          },
        ],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the insurance sector.",
    spectrum: [
      {
        icon: Building2,
        title: "Major Carriers & Insurers",
        description:
          "Enterprise insurers utilize Cerulea to unify internal claims databases, automate standard policy payouts, and securely share subrogation data with competing carriers without exposing proprietary customer information.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Claims Adjudication",
          "Automated Subrogation",
          "Fraud Eradication",
        ],
      },
      {
        icon: Landmark,
        title: "Reinsurance Firms",
        description:
          "Reinsurers deploy Cerulea to establish a perfectly synchronized cryptographic ledger with primary carriers. This ensures real-time visibility into the underlying risk pool and eliminates massive reconciliation delays during treaty settlements.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Risk Pool Tokenization",
          "Treaty Execution",
          "Real-Time Auditing",
        ],
      },
      {
        icon: Code2,
        title: "InsurTech Developers",
        description:
          "Forward-thinking engineers build next-generation micro-insurance applications and parametric protocols on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security without the vulnerabilities of writing raw Solidity.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Parametric Weather Apps",
          "Micro-Insurance Provision",
          "Telematics Integration",
        ],
      },
    ],
    stackTitle: "The Insurance Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of the insurance sector. It is architected to provide a standardized, highly secure pathway for migrating legacy policies into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "INSURANCE NETWORKS",
        title: "Hybrid Carrier Ledgers",
        description:
          "Deploy an isolated Private Subnet strictly for inter-carrier subrogation, or launch directly onto the high-throughput Public L1 for direct-to-consumer parametric insurance apps.",
      },
      {
        number: "02",
        category: "KYC & AML",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting policyholder address is mathematically tied to a verified identity credential before any claim can be submitted.",
      },
      {
        number: "03",
        category: "POLICY ARCHITECTURE",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map policy thresholds, premium payments, and claims routing logic into deterministically secure smart contracts.",
      },
      {
        number: "04",
        category: "TREASURY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect the corporate treasury. Enforce strict cryptographic signatures from adjusters or automated oracles before any large claim payout is permitted to clear.",
      },
      {
        number: "05",
        category: "CARRIER SOFTWARE BRIDGE",
        title: "The API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints that natively integrate into Guidewire, Duck Creek, and legacy claims software.",
      },
    ],
    timeToValueDescription:
      "Building custom property blockchains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times by 80%.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 18 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "10 to 12 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Actuarial Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring specialized Web3 developers to write custom state machines, adjudication logic, and policy standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the payout code before holding real capital.",
        },
        {
          title: "Phase 3: Claims Middleware",
          duration: "Months 6 to 10",
          description:
            "Developing fragile off-chain workers and indexers to connect legacy adjusters to the blockchain.",
        },
        {
          title: "Phase 4: Network Testing",
          duration: "Months 10 to 18",
          description:
            "Enduring a grueling rollout phase to ensure the custom middleware, the smart contracts, and the core claims systems communicate without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Schema Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to map policies and adjudication structures visually. The engine compiles the logic into mathematically deterministic binaries instantly.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Automate the deployment of the Sovereign Private Chain and institutional validator nodes directly from the control dashboard.",
        },
        {
          title: "Phase 3: API Gateway Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect internal claims software directly to auto-generated Cerulea REST endpoints. No custom middleware or subgraphs required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Instantly bridge the finalized logic to the live network with absolute confidence that the simulated testnet behavior will perfectly match production reality.",
        },
      ],
    },
  },

  //===================================== legal-compliance
  {
    slug: "legal-compliance",
    eyebrow: "Legal & Compliance",
    headline: ["Automate agreements.", "Enforce compliance."],
    description:
      "Cerulea provides the execution engine to deploy autonomous smart escrow, track absolute chain of custody, and automate regulatory audits without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Unalterable Evidence",
        description:
          "Once a legal document or compliance check is recorded on the ledger, it cannot be backdated or modified. This provides an absolute, mathematically verified chain of custody.",
      },
      {
        number: "02",
        title: "Autonomous Execution",
        description:
          "Smart contracts act exactly as programmed. When oracle data verifies that a condition is met, the contract executes the settlement immediately, removing human friction and bias.",
      },
      {
        number: "03",
        title: "Cryptographic Privacy",
        description:
          "Utilize Zero-Knowledge Proofs to verify sensitive identity credentials and financial thresholds without ever exposing the underlying private client data to the public network.",
      },
      {
        number: "04",
        title: "Unified Legal Ledgers",
        description:
          "Eliminate disjointed firm databases. Law firms, counterparties, and regulatory auditors all read from the exact same source of cryptographic truth, ensuring perfect parity.",
      },
      {
        number: "05",
        title: "Programmable Jurisdictions",
        description:
          "Restrict the execution and transfer of digital assets based on hardcoded geofencing and KYC requirements, ensuring international compliance is enforced natively.",
      },
      {
        number: "06",
        title: "Real-Time Auditing",
        description:
          "Turn grueling quarterly compliance audits into instantaneous queries. Regulators can verify historical governance decisions and cap table changes in seconds.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex legal frameworks. Select a specific operational segment below.",
    useCases: [
      {
        icon: Scale,
        label: "Smart Escrow & Settlements",
        legacyBottleneck:
          "Holding capital for M&A deals, real estate, or corporate settlements requires expensive third-party escrow agents. Manual verification of contract conditions leads to costly disbursement delays.",
        ceruleaExecution:
          "Replace human intermediaries with programmable smart escrow. Capital is locked cryptographically and released to the designated party the exact second the network verifies that all predefined legal conditions are met.",
        architecturalImpact:
          "Accelerate settlement times to milliseconds and completely eradicate third-party escrow holding fees.",
      },
      {
        icon: ScrollText,
        label: "Immutable Chain of Custody",
        legacyBottleneck: "Tracking digital evidence, intellectual property transfers, and sensitive legal documents relies on centralized servers that are vulnerable to tampering, backdating, and unauthorized alterations.",
        ceruleaExecution: "Hash digital documents directly to the blockchain. Cerulea creates an unalterable, time-stamped ledger of every interaction, providing absolute mathematical proof of a document’s origin and integrity.",
        architecturalImpact: "Generate instantly verifiable, court-admissible audit trails that are mathematically impossible to forge.",
      },
      {
        icon: ShieldCheck,
        label: "Automated KYC & AML",
        legacyBottleneck: "Law firms and financial compliance officers spend thousands of billable hours manually verifying client identities and cross-referencing global Anti-Money Laundering (AML) databases.",
        ceruleaExecution: "Integrate Zero-Knowledge Proofs (ZKP) and decentralized identity resolvers. Clients verify their identity once, allowing smart contracts to automatically validate their compliance status for future transactions.",
        architecturalImpact: "Drastically reduce onboarding friction and administrative overhead while maintaining strict regulatory compliance.",
      },
      {
        icon: Vote,
        label: "Corporate Cap Tables & Voting",
        legacyBottleneck: "Managing corporate equity, shareholder voting, and dividend distributions involves fragmented spreadsheets. Errors in cap table management lead to massive legal liabilities during acquisitions.",
        ceruleaExecution: "Tokenize corporate equity. Use Cerulea Studio to program complex voting rights and automated dividend routing directly into the shares. Corporate actions are executed deterministically on-chain.",
        architecturalImpact: "Ensure perfect equity synchronization, frictionless shareholder voting, and instantaneous dividend distributions.",
      },
      {
        icon: Copyright,
        label: "Intellectual Property Registry",
        legacyBottleneck: "Registering and defending copyrights, patents, and trademarks is a slow, geographically siloed process. Proving the exact moment of creation during an IP dispute is notoriously difficult.",
        ceruleaExecution: "Creators anchor cryptographic hashes of their original IP directly to the public ledger. This establishes an immutable, globally recognized timestamp of creation that predates any infringement.",
        architecturalImpact: "Provide creators and corporations with undeniable, mathematically backed proof of intellectual property ownership.",
      },
      {
        icon: GitBranch,
        label: "Algorithmic Dispute Resolution",
        legacyBottleneck: "Resolving minor contract breaches or SLA violations requires prolonged arbitration, drawing out legal battles that cost more than the disputed amount itself.",
        ceruleaExecution: "Embed dispute resolution logic natively into the smart agreement. If a measurable metric (like delivery time or uptime) is breached, the contract automatically executes the predefined financial penalty.",
        architecturalImpact: "Eliminate costly arbitration for metric-based contract violations through guaranteed autonomous enforcement.",
      },
    ],
    simulatorTitle: "Legal Escrow & Audit Simulator",
    simulatorDescription: "Manual notary services, escrow holding fees, and prolonged compliance audits drain massive capital from legal operations. Calculate your exact savings by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Contracts & Compliance Audits",
      unit: "Tx",
      min: 500,
      max: 25000,
      defaultValue: 5000,
      legacyCostLabel: "Manual Escrow & Billable Hours",
      legacyCostValue: "$44,100,000",
      ceruleaCostLabel: "Smart Contract Execution",
      ceruleaCostValue: "$216,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$7,485,000",
      methodology:
        "The legacy calculation utilizes legal industry benchmarks estimating the average combined administrative cost of verifying conditions, holding escrow, and compiling an audit report at **$125.00 USD ** per contract event. This accounts for billable paralegal hours and third party holding fees. Executing the exact same conditional logic via Cerulea incurs an estimated network fee of ** $0.25 USD **. This figure represents the computational gas cost required to automatically verify digital signatures and deterministically release escrow capital on a high throughput Proof of Stake ledger, completely bypassing manual human intervention.",
    },
    architectureDescription:
      "Whether you are bridging legacy document signing platforms or launching native smart agreements, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Document Bridging",
        description:
          "For major law firms and notaries connecting existing practice management software. Legacy webhooks are translated into secure Web3 transactions without system overhauls.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Manufacturing Core",
            sublabel: "Siemens PLM / SAP ERP",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            accent: true
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"]
      },
      {
        title: "Track B: Native Smart Agreements",
        description:
          "For decentralized arbitration and on-chain corporate governance. Bypass legacy middleware and route contract logic directly to the public execution layer.",
        nodes: [
          {
            icon: Code2,
            label: "Client Portal",
            sublabel: "React & Web3 Wallets",
          },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Data Validation Nodes",
            accent: true
          },
          {
            icon: Zap,
            label: "Cerulea Public L1",
            sublabel: "Escrow & Logic Triggers",
            accent: true
          },
        ],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the legal and compliance sector.",
    spectrum: [
      {
        icon: Truck,
        title: "Enterprise Law Firms & Notaries",
        description:
          "Legal enterprises utilize Cerulea to establish unalterable chains of custody for digital evidence, track complex corporate M&A cap tables, and automatically execute escrow settlements without relying on slow manual processing.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Smart Escrow Execution",
          "Evidence Chain of Custody",
          "Cap Table Tokenization",
        ],
      },
      {
        icon: Landmark,
        title: "Regulators & Compliance Officers",
        description:
          "Government regulators and corporate compliance officers deploy Cerulea to monitor global KYC and AML adherence in real time. The cryptographic ledger ensures that compliance reports are absolutely mathematically accurate.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Real-Time AML Audits",
          "Cross-Border KYC Validation",
          "Jurisdictional Policy Enforcement",
        ],
      },
      {
        icon: Code2,
        title: "LegalTech Developers",
        description:
          "Forward-thinking engineers build next generation contract management platforms and decentralized arbitration protocols on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Decentralized Arbitration",
          "IP Registration Registries",
          "Automated DAOs",
        ],
      },
    ],
    stackTitle: "The Legal Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of corporate compliance. It is architected to provide a standardized, highly secure pathway for migrating legacy legal agreements into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "COMPLIANCE LEDGERS",
        title: "Hybrid Legal Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal firm evidence tracking, or launch directly onto the high-throughput Public L1 to facilitate consumer facing digital copyright registries.",
      },
      {
        number: "02",
        category: "NOTARY KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting corporate wallet is mathematically tied to a verified identity credential before a smart contract signature is accepted.",
      },
      {
        number: "03",
        category: "CONTRACT TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map physical documents, cap table equity, and automated escrow triggers into secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "JURISDICTIONAL GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect massive legal settlements. Enforce strict cryptographic signatures from authorized managing partners and legal counsels before escrow funds are permitted to clear.",
      },
      {
        number: "05",
        category: "LEGAL SOFTWARE BRIDGE",
        title: "The E-Signature API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy DocuSign and practice management software directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom compliance blockchains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "14 to 18 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "6 to 8 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Legal Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Negotiating jurisdictional data standards and writing custom state machines to execute complex escrow logic entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 8",
          description:
            "Paying external firms hundreds of thousands of dollars to find code vulnerabilities in the custom smart contracts before holding live corporate capital.",
        },
        {
          title: "Phase 3: E-Signature Middleware",
          duration: "Months 8 to 12",
          description:
            "Building fragile custom middleware to successfully translate digital signatures from legacy tools (like DocuSign) into blockchain compatible payloads.",
        },
        {
          title: "Phase 4: Regulatory Testing",
          duration: "Months 14 to 18",
          description:
            "Enduring a massive compliance rollout phase to ensure all independent firm databases synchronize correctly with the ledger without fatal legal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Clause Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to visually map contract clauses, required signatures, and automated escrow triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to partner law firms from the control dashboard.",
        },
        {
          title: "Phase 3: API & E-Sig Hookup",
          duration: "Weeks 4 to 6",
          description:
            "Connect existing document management and e-signature software directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 7 to 8",
          description:
            "Bridge the finalized logic to the live network and begin executing real smart contracts with complete architectural confidence.",
        },
      ],
    },
  },

  //======================================= mining-heavy-industry
  {
    slug: "mining-heavy-industry",
    eyebrow: "Mining & Heavy Industry",
    headline: ["Trace raw materials.", "Automate extraction."],
    description:
      "Cerulea provides the execution engine to trace conflict free minerals, automate commodity trade finance, and ingest IoT machinery telemetry without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Unalterable Provenance",
        description:
          "Once a mineral batch or assay report is recorded on the ledger, it cannot be altered. This drastically reduces the risk of conflict minerals entering the legitimate global supply chain.",
      },
      {
        number: "02",
        title: "Unified Industry Ledgers",
        description:
          "Eliminate fragmented data silos. Extraction sites, refineries, and logistics firms all read and write to the exact same cryptographic source of absolute truth.",
      },
      {
        number: "03",
        title: "IoT Data Anchoring",
        description:
          "Heavy machinery and site sensors feed telemetry directly into the execution layer. Smart contracts act autonomously on this data, scheduling predictive maintenance automatically.",
      },
      {
        number: "04",
        title: "Automated Escrow",
        description:
          "Programmable smart contracts replace manual invoicing in wholesale commodity procurement. Capital is held securely and released instantly when independent assayers confirm purity.",
      },
      {
        number: "05",
        title: "Fractional Liquidity",
        description:
          "Massive raw material outputs can be divided into thousands of digital shares. This lowers the barrier to entry for retail investors and unlocks massive global capital pools for mining operators.",
      },
      {
        number: "06",
        title: "Real-Time Auditing",
        description:
          "Every single network state change is permanently hashed. Environmental agencies can verify historical compliance reports and emissions data with absolute mathematical certainty.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex heavy industry supply chains. Select a specific operational segment below.",
    useCases: [
      {
        icon: Truck,
        label: "Ethical Mineral Provenance",
        legacyBottleneck:
          "Tracking raw materials like cobalt, lithium, and rare earth metals from the extraction site to the final manufacturer is notoriously opaque. Brands face massive reputational damage due to the influx of conflict minerals.",
        ceruleaExecution:
          "Mint a Digital Product Passport for raw commodities at the point of extraction. Every transfer of custody across refineries and logistics providers is permanently anchored to the ledger, proving absolute ethical sourcing.",
        architecturalImpact:
          "Guarantee ethical origin and give global manufacturers undeniable cryptographic proof of a conflict-free supply chain.",
      },
      {
        icon: Router,
        label: "Heavy Machinery Telemetry",
        legacyBottleneck: "Mining operations rely on massive fleets of heavy machinery. Unplanned equipment failure halts entire extraction sites, while fragmented diagnostic data makes predictive maintenance nearly impossible.",
        ceruleaExecution: "Connect IoT sensors on excavators and drills directly to decentralized Oracles. Ingest raw physical telemetry into the blockchain state in real time, securely linking hardware health to automated maintenance contracts.",
        architecturalImpact: "Enable highly accurate predictive maintenance across global extraction sites, drastically reducing unplanned operational downtime.",
      },
      {
        icon: ShieldCheck,
        label: "Automated ESG Compliance",
        legacyBottleneck: "Mining conglomerates face intense regulatory pressure to report environmental impact and carbon emissions. Compiling these reports requires thousands of hours of manual, subjective auditing prone to greenwashing.",
        ceruleaExecution: "Tokenize environmental compliance checklists. IoT sensors monitor water usage and emissions, feeding data directly to smart contracts that autonomously generate verifiable, immutable ESG reports for regulators.",
        architecturalImpact: "Turn grueling quarterly environmental audits into real time, zero friction mathematical proofs.",
      },
      {
        icon: Landmark,
        label: "Commodity Trade Finance",
        legacyBottleneck: "Sourcing and trading raw commodities involves complex global supply chains. Customs delays, manual assaying reports, and slow Letters of Credit routinely stall the flow of massive capital.",
        ceruleaExecution: "Utilize programmable escrow contracts. Capital is locked on the blockchain and automatically released to the mining operator the exact moment port authorities and independent assayers verify physical delivery.",
        architecturalImpact: "Accelerate commodity trading timelines and remove third party trade finance intermediaries from the supply chain.",
      },
      {
        icon: Fingerprint,
        label: "Worker Safety & Credentials",
        legacyBottleneck: "Verifying specialized equipment licenses and safety certifications for thousands of contractors across remote, international mining sites is a slow, centralized process vulnerable to forgery.",
        ceruleaExecution: "Issue worker qualifications as verifiable cryptographic credentials. Site managers can instantly authenticate an individual’s operating license and safety training via their secure digital identity wallet.",
        architecturalImpact: "Establish a globally recognized, unforgeable standard for heavy industry personnel verification and site safety.",
      },
      {
        icon: PieChart,
        label: "Fractionalized Output",
        legacyBottleneck: "Financing a new extraction site or refinery requires massive upfront capital. Ownership of mining output is highly illiquid and restricted to a small circle of institutional conglomerates.",
        ceruleaExecution: "Tokenize projected mineral yields. Mining operators can sell fractional digital shares of their future extraction directly to global retail buyers or decentralized finance pools, bypassing legacy loan officers.",
        architecturalImpact: "Democratize industrial investment and provide extraction sites with immediate, unified access to global capital markets.",
      },
    ],
    simulatorTitle: "Commodity Trade & Compliance Simulator",
    simulatorDescription: "Manual compliance auditing, third-party assay verification, and complex trade finance fees drain capital from heavy industry. Calculate your operational savings by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Commodity Shipments & Audits",
      unit: "Tx",
      min: 1000,
      max: 100000,
      defaultValue: 10000,
      legacyCostLabel: "Broker Fees & Manual Auditing",
      legacyCostValue: "$5,400,000",
      ceruleaCostLabel: "Automated Smart Contract Hashing",
      ceruleaCostValue: "$30,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$5,370,000",
      methodology:
        "The legacy calculation utilizes industrial and commodities benchmarks estimating the average combined administrative cost of executing a trade finance escrow, verifying independent assay reports, and compiling ESG compliance data for a shipment batch at **$35.00 USD**. This accounts for legacy third party clearing brokers and manual labor hours spent on compliance documentation. Executing the exact same provenance log and escrow trigger via Cerulea incurs an estimated network fee of **$0.15 USD**. This figure represents the computational gas cost required to automatically ingest supply chain telemetry and deterministically execute the transaction on a high-throughput Proof of Stake ledger, completely bypassing manual broker intervention.",
    },
    architectureDescription:
      "Whether you are bridging legacy ERP databases or routing live machinery telemetry, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Supply Chain Bridging",
        description:
          "For major mining conglomerates connecting existing ERP systems. Legacy HTTP requests are translated into secure Web3 transactions without overhauling core systems.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Extraction Core",
            sublabel: "SAP / Oracle ERP System",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Audit Execution",
            accent: true
          },
        ],
      },
      {
        title: "Track B: Native Direct Booking",
        description:
          "For Web3 travel portals and D2C brands. Bypass legacy OTA middleware and route booking logic directly to the public execution layer.",
        nodes: [
          {
            icon: Cpu,
            label: "Industrial Hardware",
            sublabel: "SCADA Sensors & IoT",
          },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Data Ingestion Nodes",
            accent: true
          },
          {
            icon: Zap,
            label: "Cerulea Public L1",
            sublabel: "Maintenance Logic Triggers",
            accent: true
          },
        ],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global heavy industry sector.",
    spectrum: [
      {
        icon: Wrench,
        title: "Mining Operators & Refineries",
        description:
          "Enterprise extractors utilize Cerulea to establish unalterable data parity, track raw material provenance to avoid conflict minerals, and automatically execute settlements with buyers without relying on slow trade finance banks.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Commodity Provenance",
          "Trade Finance Escrow",
          "Machinery Telemetry",
        ],
      },
      {
        icon: Landmark,
        title: "Regulators & Environmental Agencies",
        description:
          "Government regulators and environmental watchdogs deploy Cerulea to monitor global extraction compliance, instantly verify cryptographic ESG reports, and prevent greenwashing by tracking raw IoT emissions data securely.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "ESG Data Audits",
          "Carbon Market Settlement",
          "Worker Safety Verification",
        ],
      },
      {
        icon: Code2,
        title: "DeFi & Commodity Developers",
        description:
          "Forward-thinking engineers build next-generation fractional commodity platforms and Real World Asset (RWA) protocols on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Fractional Output Investment",
          "DePIN Sensor Marketplaces",
          "Automated Liquidations",
        ],
      },
    ],
    stackTitle: "The Industrial Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of heavy industry. It is architected to provide a highly secure pathway for migrating legacy supply chain data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "INDUSTRIAL LEDGERS",
        title: "Hybrid Supply Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal B2B extraction audits, or launch directly onto the high-throughput Public L1 to facilitate consumer facing fractional commodity trading.",
      },
      {
        number: "02",
        category: "SUPPLIER KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting logistics node or refinery wallet is mathematically tied to a verified corporate credential before a mineral manifest is signed.",
      },
      {
        number: "03",
        category: "COMMODITY TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map physical mineral batches, ESG certificates, and automated escrow triggers into secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "QUALITY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect global supply chains. Enforce strict cryptographic signatures from authorized assayers before massive wholesale raw material shipments are permitted to clear port customs.",
      },
      {
        number: "05",
        category: "ERP SOFTWARE BRIDGE",
        title: "The Operations API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy SCADA systems and SAP environments directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom heavy industry blockchains from scratch requires specialized engineers and massive hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "18 to 24 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "10 to 12 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Supply Chain Logic & Solidity",
          duration: "Months 1 to 8",
          description:
            "Negotiating data standards across independent refineries and writing custom state machines to track raw material extraction entirely from scratch.",
        },
        {
          title: "Phase 2: IoT Sensor Integration",
          duration: "Months 7 to 12",
          description:
            "Building custom middleware to successfully translate raw physical SCADA sensor data and fleet telemetry into blockchain compatible payloads.",
        },
        {
          title: "Phase 3: Security Audits",
          duration: "Months 13 to 18",
          description:
            "Paying external firms to find code vulnerabilities in the custom escrow contracts before handling live, multi-million dollar wholesale commodity trades.",
        },
        {
          title: "Phase 4: Multi-Vendor Testing",
          duration: "Months 17 to 24",
          description:
            "Enduring a massive rollout phase to ensure all independent supplier databases synchronize correctly with the ledger without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Grant Modeling",
          duration: "Weeks 1 to 3",
          description:
            "Use Cerulea Studio to visually map physical extraction steps, ESG compliance permissions, and automated escrow triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 4 to 6",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to regional distributors from the control dashboard.",
        },
        {
          title: "Phase 3: Sensor & API Hookup",
          duration: "Weeks 7 to 9",
          description:
            "Connect existing fleet telematics and ERP systems directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 10 to 12",
          description:
            "Bridge the finalized logic to the live network and begin tracking real physical shipments and commodity trades with complete architectural confidence.",
        },
      ],
    },
  },


  //======================================= real-estate-proptech
  {
    slug: "real-estate-proptech",
    eyebrow: "Real Estate & PropTech",
    headline: ["Tokenize property.", "Automate escrow."],
    description:
      "Cerulea provides the execution engine to fractionalize real estate assets, automate title transfers, and permanently eliminate escrow reconciliation delays without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Fractional Liquidity",
        description:
          "High value commercial properties can be divided into thousands of digital shares. This dramatically lowers the barrier to entry for retail investors and unlocks massive global capital pools for asset managers.",
      },
      {
        number: "02",
        title: "Atomic Settlements",
        description:
          "Execution and title transfer occur simultaneously in milliseconds. This absolute finality ensures there are no delays, no manual rollbacks, and zero manual reconciliation errors between counterparties.",
      },
      {
        number: "03",
        title: "Programmable Escrow",
        description:
          "Institutions can embed strict business logic and automated escrow conditions directly into the asset code itself. Capital is held securely and released exactly when network conditions are met without third parties.",
      },
      {
        number: "04",
        title: "Global Accessibility",
        description:
          "Unlike traditional real estate markets, blockchain networks do not have borders. International investors can acquire and trade fractionalized property shares seamlessly without relying on fragmented foreign banking infrastructure.",
      },
      {
        number: "05",
        title: "Unalterable Provenance",
        description:
          "Once a property deed is recorded on the ledger, it cannot be altered or forged. This eliminates the need for expensive title searches and drastically reduces the systemic risk of property fraud.",
      },
      {
        number: "06",
        title: "Provable Auditing",
        description:
          "Every single network state change is permanently hashed. Regulators and compliance teams can verify historical transaction data and ownership logs with absolute mathematical certainty in real time.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting global property networks. Select a specific operational segment below.",
    useCases: [
      {
        icon: Building2,
        label: "RWA Tokenization",
        legacyBottleneck:
          "Commercial real estate suffers from massive illiquidity. Transferring ownership requires weeks of manual legal verification, locking out international capital and preventing fractional investment.",
        ceruleaExecution:
          "Convert physical property into highly divisible digital tokens. Using Cerulea Studio, you can visually embed strict compliance rules directly into the asset, ensuring it can only be transferred between authorized, KYC verified wallets.",
        architecturalImpact:
          "Unlock global liquidity pools and enable instant, fractionalized trading of previously monolithic real estate assets.",
      },
      {
        icon: Timer,
        label: "Automated Smart Escrow",
        legacyBottleneck: "Property transactions rely on expensive, manual title and escrow companies to hold capital and verify documents, adding thousands of dollars in fees and weeks of delay to every closing.",
        ceruleaExecution: "Replace paper with programmable escrow. Capital is locked cryptographically and released to the seller the exact second the digital title transfer is verified by the network.",
        architecturalImpact: "Accelerate property closings from 30 days to 30 seconds while eliminating third party holding fees.",
      },
      {
        icon: ScrollText,
        label: "Immutable Title Registry",
        legacyBottleneck: "Property titles are maintained in outdated municipal databases or paper archives. This opacity leads to title disputes, forgery, and the mandatory requirement for costly title insurance.",
        ceruleaExecution: "Record property deeds as unalterable data models on the blockchain. Once a title is anchored to the ledger, the cryptographic provenance provides absolute, undeniable proof of historical ownership.",
        architecturalImpact: "Guarantee clean title, resolve disputes instantly, and drastically reduce the need for title insurance.",
      },
      {
        icon: Cpu,
        label: "Automated Property Management",
        legacyBottleneck: "Managing tenant leases, rent collection, and maintenance escrows requires fragmented accounting software and constant manual reconciliation by property managers.",
        ceruleaExecution: "Deploy smart lease contracts that automatically route tenant payments, distribute dividends to fractional owners, and release maintenance funds to approved contractors upon verified work completion.",
        architecturalImpact: "Turn property management into a passive, autonomous process with perfect financial reconciliation.",
      },
      {
        icon: Search,
        label: "Transparent Zoning & Permits",
        legacyBottleneck: "Real estate developers face opaque, bureaucratic delays when navigating municipal zoning boards and construction permit approvals, stalling critical infrastructure projects.",
        ceruleaExecution: "Municipalities utilize Cerulea to establish a transparent, shared ledger for all construction permits. Developers, inspectors, and city planners track approval statuses with cryptographic certainty.",
        architecturalImpact: "Streamline the real estate development pipeline and eradicate bureaucratic bottlenecks.",
      },
      {
        icon: Wallet,
        label: "DeFi Mortgage Lending",
        legacyBottleneck: "Securing a mortgage requires heavy manual underwriting, credit checks, and slow loan servicing, creating massive friction for buyers and capital inefficiency for lenders.",
        ceruleaExecution: "Deploy overcollateralized lending protocols where borrowing logic is hardcoded. Users deposit tokenized real estate as collateral and instantly draw stablecoin credit against it without human intervention.",
        architecturalImpact: "Instantaneous credit provisioning with mathematically guaranteed collateral safety and automated liquidations.",
      },
    ],
    simulatorTitle: "Title & Escrow Overhead Simulator",
    simulatorDescription: "Manual escrow companies and title insurance premiums drain massive capital from real estate markets. Calculate your exact savings by migrating to Cerulea atomic execution.",
    simulator: {
      label: "Monthly Property Closings",
      unit: "Tx",
      min: 100,
      max: 25000,
      defaultValue: 2500,
      legacyCostLabel: "Manual Title & Escrow Fees",
      legacyCostValue: "$55,500,000",
      ceruleaCostLabel: "Smart Contract Settlement",
      ceruleaCostValue: "$135,000",
      totalSavedLabel: "Total Capital Saved Annually",
      totalSavedValue: "$55,365,000",
      methodology:
        "The legacy calculation utilizes real estate industry benchmarks estimating the average combined administrative cost of manual title searches, escrow holding services, and legal document processing at **$1,850.00 USD ** per closing. Executing the exact same property transfer via Cerulea incurs an estimated network fee of **$4.50 USD**. This figure represents the computational gas cost required to execute the conditional escrow logic via a WebAssembly (WASM) binary on a high-throughput network. Because the network processes the title transfer and the fund release atomically in the same transaction, manual third party intermediaries are mathematically eliminated.",
    },
    architectureDescription:
      "Whether you are bridging municipal land registries or launching native property trading platforms, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: MLS & Registry Bridging",
        description:
          "For municipal governments connecting existing land databases. Legacy HTTP requests are translated into secure Web3 transactions without system overhauls.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Registry Core",
            sublabel: "Municipal SQL Database",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chain",
            sublabel: "Sovereign Execution",
            accent: true
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"]
      },
      {
        title: "Track B: Native DApp Execution",
        description:
          "For PropTech developers building fractional ownership protocols. Bypass legacy middleware and route trade logic directly to the public execution layer.",
        nodes: [
          {
            icon: Code2,
            label: "Trading Portal",
            sublabel: "React & Web3 Wallets",
          },
          {
            icon: Globe,
            label: "Cerulea Public L1",
            sublabel: "Decentralized Ledger",
            accent: true
          },
          {
            icon: Layers,
            label: "Cerulea Data Models",
            sublabel: "Smart Contract Logic",
            accent: true
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"]
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the real estate sector.",
    spectrum: [
      {
        icon: Building2,
        title: "Commercial Real Estate Firms",
        description:
          "Institutional asset managers utilize Cerulea to tokenize massive property portfolios, establish fractional ownership models, and instantly unlock liquidity without exposing proprietary data to public networks.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Asset Tokenization",
          "Fractional Trading",
          "Automated Dividend Payouts",
        ],
      },
      {
        icon: Landmark,
        title: "Municipalities & Land Registries",
        description:
          "Local governments deploy Cerulea to replace archaic paper deed systems with immutable cryptographic registries. This guarantees absolute title provenance, automates tax collection on transfers, and eradicates property fraud.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Immutable Title Deeds",
          "Automated Tax Routing",
          "Transparent Zoning",
        ],
      },
      {
        icon: Code2,
        title: "PropTech Developers",
        description:
          "Forward-thinking engineers build next-generation property trading platforms and decentralized mortgage protocols on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security without the vulnerabilities of writing raw Solidity.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Smart Escrow DApps",
          "DeFi Mortgage Lending",
          "Property Management Software",
        ],
      },
    ],
    stackTitle: "The PropTech Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of real estate. It is architected to provide a standardized, highly secure pathway for migrating legacy property data into programmable Web3 execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "PROPERTY NETWORKS",
        title: "Hybrid Real Estate Ledgers",
        description:
          "Deploy an isolated Private Subnet strictly for municipal land registries, or launch directly onto the high-throughput Public L1 for global retail fractional trading platforms.",
      },
      {
        number: "02",
        category: "KYC & AML",
        title: "On-Chain Identity Resolver",
        description:
          "Real estate is highly regulated. Deploy the Identity module to ensure every interacting wallet address is mathematically tied to a verified identity before property tokens can be acquired.",
      },
      {
        number: "03",
        category: "ASSET TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map physical property deeds, lease agreements, and dividend payouts into deterministically secure smart contracts without writing low-level code.",
      },
      {
        number: "04",
        category: "ESCROW GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect massive transactions. Enforce strict cryptographic signatures from both buyer and seller legal counsels before the smart contract releases escrowed funds.",
      },
      {
        number: "05",
        category: "LEGACY SOFTWARE BRIDGE",
        title: "The Cerulea API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints that natively link to your existing property management and MLS software.",
      },
    ],
    timeToValueDescription:
      "Building custom property blockchains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times by 80%.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "18 to 24 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "10 to 12 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Architecture & Solidity",
          duration: "Months 1 to 8",
          description:
            "Hiring highly specialized Web3 developers to write custom state machines, escrow logic, and property token standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 7 to 10",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the custom escrow code before holding real capital.",
        },
        {
          title: "Phase 3: Middleware Construction",
          duration: "Months 11 to 16",
          description:
            "Developing fragile off-chain workers, RPC nodes, and indexers so the firm's legacy property management software can actually read the data.",
        },
        {
          title: "Phase 4: Network Testing",
          duration: "Months 17 to 24",
          description:
            "Enduring a grueling rollout phase to ensure the custom middleware, the smart contracts, and the municipal systems communicate without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Schema Modeling",
          duration: "Weeks 1 to 3",
          description:
            "Use Cerulea Studio to map property assets and escrow structures visually. The engine compiles the logic into mathematically deterministic binaries instantly.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 4 to 6",
          description:
            "Automate the deployment of the Sovereign Private Chain and institutional validator nodes directly from the control dashboard.",
        },
        {
          title: "Phase 3: API Gateway Hookup",
          duration: "Weeks 7 to 9",
          description:
            "Connect internal claims software directly to auto-generated Cerulea REST endpoints. No custom middleware or subgraphs required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 10 to 12",
          description:
            "Instantly bridge the finalized logic to the live network with absolute confidence that the simulated testnet behavior will perfectly match production reality.",
        },
      ],
    },
  },

  //========================================= telecommunications
  {
    slug: "telecommunications",
    eyebrow: "Telecommunications",
    headline: ["Decentralize connectivity.", "Automate settlement."],
    description:
      "Cerulea provides the execution engine to automate inter-carrier settlements, deploy zero-touch roaming agreements, and tokenize telecom infrastructure without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Atomic Finality",
        description:
          "Execution and roaming settlement occur simultaneously in milliseconds. This absolute finality ensures there are no delays and no costly manual reconciliation errors between international carriers.",
      },
      {
        number: "02",
        title: "Programmable Tariffs",
        description:
          "Carriers can embed strict roaming tariffs, automated escrow conditions, and SLAs directly into the smart contract code itself, ensuring precise micro-billing as bandwidth is consumed.",
      },
      {
        number: "03",
        title: "Trust Minimization",
        description:
          "MNOs can interact securely with new international counterparties without requiring established credit histories or expensive third-party clearinghouses to hold escrow.",
      },
      {
        number: "04",
        title: "Fraud Eradication",
        description:
          "Cryptographic hashing prevents bad actors from exploiting roaming loopholes and SIM cloning. The network systematically rejects unauthorized access proofs across the ecosystem.",
      },
      {
        number: "05",
        title: "Unified Shared Ledger",
        description:
          "Eliminate fragmented internal BSS and OSS databases. All participating mobile network operators read and write to the exact same cryptographic source of absolute truth.",
      },
      {
        number: "06",
        title: "Provable Auditing",
        description:
          "Every single network state change is permanently hashed. Regulators can verify historical spectrum usage and inter-carrier billing data with absolute mathematical certainty.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex telecommunications networks. Select a specific operational segment below.",
    useCases: [
      {
        icon: Router,
        label: "Inter-Carrier Settlement",
        legacyBottleneck:
          "Clearing roaming charges between global Mobile Network Operators (MNOs) involves archaic clearinghouses, delayed billing cycles, and massive discrepancies between fragmented OSS and BSS databases.",
        ceruleaExecution:
          "Deploy a unified Private Consortium Chain. Roaming data is hashed and settled via smart contracts in real time, automatically routing capital between carrier treasuries based on strict programmatic Service Level Agreements (SLAs).",
        architecturalImpact:
          "Reduce inter-carrier settlement times from 60 days to 600 milliseconds and completely eradicate manual billing reconciliation.",
      },
      {
        icon: ShieldCheck,
        label: "Automated Roaming SLAs",
        legacyBottleneck: "Negotiating and enforcing international roaming agreements requires heavy legal overhead. Rate changes take months to propagate across isolated telecom networks.",
        ceruleaExecution: "Digitize roaming agreements into programmable state logic. Cerulea Studio translates complex tariff structures and volume discounts into unalterable code that executes autonomously as bandwidth is consumed.",
        architecturalImpact: "Eliminate billing disputes and enforce dynamic, usage-based roaming tariffs with absolute mathematical precision.",
      },
      {
        icon: Zap,
        label: "IoT & 5G Micro-Billing",
        legacyBottleneck: "Traditional billing infrastructure cannot process the millions of micro-transactions generated by enterprise IoT devices and 5G edge networks without incurring massive database overhead.",
        ceruleaExecution: "Leverage the Cerulea L1 to process thousands of transactions per second. Devices securely sign bandwidth consumption data, triggering instantaneous micro-payments via high-throughput payment channels.",
        architecturalImpact: "Unlock entirely new monetization models for machine-to-machine (M2M) connectivity and edge compute.",
      },
      {
        icon: Fingerprint,
        label: "Decentralized eSIM Identity",
        legacyBottleneck: "Subscriber identity is locked within centralized carrier databases. Transferring numbers or provisioning global eSIMs exposes users to SIM-swap fraud and catastrophic data breaches.",
        ceruleaExecution: "Issue subscriber identities as secure, verifiable credentials. Customers manage their cryptographic identity, allowing them to switch carriers or provision roaming eSIMs instantly without centralized honeypots.",
        architecturalImpact: "Guarantee zero-trust identity and a frictionless onboarding experience for global travelers.",
      },
      {
        icon: Boxes,
        label: "DePIN & Infra Tokenization",
        legacyBottleneck: "Building new telecom infrastructure like cell towers and fiber networks requires massive capital expenditure. Ownership is highly illiquid and restricted to monolithic telecommunications conglomerates.",
        ceruleaExecution: "Tokenize physical network infrastructure. Cerulea enables fractional ownership of cell towers and spectrum rights, automatically routing subscriber revenue to token holders as transparent dividend payouts.",
        architecturalImpact: "Democratize telecom infrastructure investment and rapidly accelerate 5G network expansion via crowdsourced capital.",
      },
      {
        icon: ShieldAlert,
        label: "Fraud & Revenue Assurance",
        legacyBottleneck: "Telecom operators lose billions annually to bypass fraud, interconnect bypass (SIM boxes), and spoofed routing due to a lack of verifiable cross-network transparency.",
        ceruleaExecution: "Implement shared cryptographic ledgers for call routing. Every connection handoff is signed and validated on-chain, making it mathematically impossible to inject spoofed traffic into the carrier network.",
        architecturalImpact: "Systematically identify and block fraudulent traffic in real time, recovering millions in lost interconnect revenue.",
      },
    ],
    simulatorTitle: "Roaming & Clearing Simulator",
    simulator: {
      label: "Monthly Roaming Transactions (CDRs)",
      unit: "Tx",
      min: 100000,
      max: 10000000,
      defaultValue: 5000000,
      legacyCostLabel: "Clearinghouse & Dispute Recon",
      legacyCostValue: "$9,000,000",
      ceruleaCostLabel: "Smart Contract Execution",
      ceruleaCostValue: "$300,000",
      totalSavedLabel: "Total Capital Saved Annually",
      totalSavedValue: "$8,700,000",
      methodology:
        "The legacy calculation utilizes telecom industry benchmarks estimating the average combined operational cost of routing, verifying, and clearing a Call Data Record (CDR) batch at **$0.15 USD per transaction**. This accounts for legacy clearinghouse gateways and internal billing resolution teams. Executing the exact same contract trigger via Cerulea incurs an estimated network fee of **$0.005 USD**. This figure represents the raw computational gas cost required to execute the SLA logic via a WebAssembly (WASM) binary on a high-throughput consensus engine. Because the network processes the validation and payout atomically, administrative review is mathematically eliminated.",
    },
    architectureDescription:
      "Whether you are bridging legacy BSS/OSS software or ingesting live 5G telemetry, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Carrier Bridging",
        description:
          "For MNOs connecting existing billing software. Legacy HTTP requests are translated into secure Web3 transactions without overhauling core systems.",
        nodes: [
          { icon: Server, label: "Legacy Core", sublabel: "BSS / OSS Systems" },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chain",
            sublabel: "Sovereign Clearing",
            accent: true
          },
        ],
      },
      {
        title: "Track B: Native IoT & 5G Telemetry",
        description:
          "For edge devices and DePIN networks. Route bandwidth data directly to decentralized Oracles to execute autonomous micro-billing.",
        nodes: [
          { icon: Cpu, label: "Edge Hardware", sublabel: "5G Routers & IoT" },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Data Ingestion Nodes",
            accent: true
          },
          {
            icon: Layers,
            label: "Cerulea Data Models",
            sublabel: "SLA Logic Triggers",
            accent: true
          },
        ],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global telecommunications sector.",
    spectrum: [
      {
        icon: Router,
        title: "Mobile Network Operators (MNOs)",
        description:
          "Enterprise telecom providers utilize Cerulea to unify internal billing databases, automate international roaming settlements, and securely share subscriber identity proofs with competing carriers to eradicate SIM fraud.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Roaming Settlement",
          "Interconnect Billing",
          "Fraud Eradication",
        ],
      },
      {
        icon: Landmark,
        title: "MVNOs & Regulators",
        description:
          "Mobile Virtual Network Operators deploy Cerulea to establish a perfectly synchronized cryptographic ledger with primary carriers. This ensures real-time visibility into wholesale bandwidth usage and eliminates massive dispute delays.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Wholesale Bandwidth Audit",
          "Spectrum Rights Tokenization",
          "Real-Time Compliance",
        ],
      },
      {
        icon: Code2,
        title: "DePIN & Infra Developers",
        description:
          "Forward-thinking engineers build Decentralized Physical Infrastructure Networks (DePIN) and IoT billing protocols on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "IoT Micro-Billing",
          "Cell Tower Fractionalization",
          "Decentralized eSIM Provisioning",
        ],
      },
    ],
    stackTitle: "The Telecommunications Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of telecom operators. It is architected to provide a standardized, highly secure pathway for migrating legacy billing data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "SETTLEMENT NETWORKS",
        title: "Hybrid Carrier Ledgers",
        description:
          "Deploy an isolated Private Subnet strictly for inter-carrier roaming settlements, or launch directly onto the high-throughput Public L1 for direct-to-consumer IoT payment channels.",
      },
      {
        number: "02",
        category: "KYC & AML",
        title: "On-Chain Subscriber Identity",
        description:
          "Deploy the Identity module to ensure every interacting device or eSIM is mathematically tied to a verified identity credential before any bandwidth is provisioned.",
      },
      {
        number: "03",
        category: "POLICY ARCHITECTURE",
        title: "SLA & Tariff Data Models",
        description:
          "Use Cerulea Studio to visually map complex roaming tariffs, spectrum usage rules, and routing logic into deterministically secure smart contracts.",
      },
      {
        number: "04",
        category: "TREASURY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect the corporate treasury. Enforce strict cryptographic signatures from clearing auditors before massive inter-carrier dispute settlements are permitted to clear.",
      },
      {
        number: "05",
        category: "LEGACY SOFTWARE BRIDGE",
        title: "The BSS/OSS API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints that natively integrate into your existing BSS and OSS billing software.",
      },
    ],
    timeToValueDescription:
      "Building custom property blockchains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times by 80%.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 18 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Architecture & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring specialized Web3 developers to write custom state machines, roaming logic, and clearing standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the settlement code before clearing real capital.",
        },
        {
          title: "Phase 3: BSS/OSS Middleware",
          duration: "Months 8 to 15",
          description:
            "Developing fragile off-chain workers and indexers so the carrier's legacy billing software can actually read and write to the blockchain.",
        },
        {
          title: "Phase 4: Network Testing",
          duration: "Months 12 to 18",
          description:
            "Enduring a grueling rollout phase to ensure the custom middleware, the smart contracts, and the global roaming hubs communicate without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual SLA Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to map SLAs and roaming structures visually. The engine compiles the logic into mathematically deterministic binaries instantly.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Automate the deployment of the Sovereign Private Chain and carrier validator nodes directly from the control dashboard.",
        },
        {
          title: "Phase 3: API Gateway Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect internal billing software directly to auto-generated Cerulea REST endpoints. No custom middleware or subgraphs required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Instantly bridge the finalized logic to the live network with absolute confidence that the simulated testnet behavior will perfectly match production reality.",
        },
      ],
    },
  },

  //========================================= art-creator-economy
  {
    slug: "art-creator-economy",
    eyebrow: "Art & Creator Economy",
    headline: ["Tokenize creativity.", "Automate royalties."],
    description:
      "Cerulea provides the execution engine to fractionalize intellectual property, launch independent creator DAOs, and route global royalties instantly without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "True Digital Ownership",
        description:
          "Digital art and music drops can be mathematically capped. Once the maximum supply of a limited edition is reached, it is cryptographically impossible to duplicate or forge.",
      },
      {
        number: "02",
        title: "Platform Disintermediation",
        description:
          "Connect artists directly with their audience. By removing massive central streaming distributors and gallery administrators, creators capture significantly higher margins on their own IP.",
      },
      {
        number: "03",
        title: "Instant Micro-Monetization",
        description:
          "High throughput execution completely bypasses legacy payment gateways. Creators can receive fractions of a cent continuously as their content is consumed or licensed.",
      },
      {
        number: "04",
        title: "Secondary Market Royalties",
        description:
          "Publishers can hardcode royalty splits into digital items. Every time a piece of art is resold on an open marketplace, the original creator receives an instant, automated revenue cut.",
      },
      {
        number: "05",
        title: "Immutable Provenance",
        description:
          "Digital signatures permanently attach the original creator's identity to a piece of media. This provides absolute mathematical defense against unauthorized AI scraping and deepfakes.",
      },
      {
        number: "06",
        title: "Fan & Community Governance",
        description:
          "Blockchains enable complex ownership models. Thousands of global fans can securely pool capital to fund an indie film or album, gaining cryptographic governance rights in return.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting diverse creative ecosystems. Select a specific operational segment below.",
    useCases: [
      {
        icon: Split,
        label: "Automated Royalty Splits",
        legacyBottleneck:
          "Independent artists and musicians suffer from opaque publishing platforms that take months to calculate collaborative splits, often withholding massive percentages of revenue in administrative fees.",
        ceruleaExecution:
          "Encode exact royalty splits directly into the digital asset logic using Cerulea Studio. When an artwork or track is sold, the smart contract instantaneously routes exact micro-payments to every contributor.",
        architecturalImpact:
          "Return 100 percent of allocated revenue directly to creators and reduce payout timelines from 90 days to 900 milliseconds.",
      },
      {
        icon: ShieldCheck,
        label: "Content Provenance & Anti-AI",
        legacyBottleneck: "The explosion of generative AI has made it nearly impossible for digital artists to protect their unique styles from unauthorized scraping, while buyers struggle to verify original human-made artwork.",
        ceruleaExecution: "Anchor cryptographic hashes of original files directly to the Cerulea L1 at the exact moment of creation. This establishes a globally recognized, mathematically unforgeable timestamp of original authorship.",
        architecturalImpact: "Protect creator copyright against AI scraping networks and provide collectors with absolute proof of human authorship.",
      },
      {
        icon: Layers,
        label: "Fractionalized Master Rights",
        legacyBottleneck: "Historically, only wealthy labels or elite collectors could afford to invest in master recording rights or high-end fine art, completely shutting out retail fans from the financial upside of their favorite creators.",
        ceruleaExecution: "Tokenize master rights or physical art pieces into thousands of fractional digital shares. Fans can invest micro-amounts to gain true verifiable ownership and a programmatic share of future distribution revenue.",
        architecturalImpact: "Transform passive fans into financially aligned stakeholders and unlock massive new funding models for independent artists.",
      },
      {
        icon: Users,
        label: "Social Tokens & Fan DAOs",
        legacyBottleneck: "Platform algorithms dictate a creator’s reach, and monetization relies entirely on unpredictable ad revenue or unstable brand sponsorships, leaving creators highly vulnerable to platform policy changes.",
        ceruleaExecution: "Launch a sovereign creator economy. Issue custom social tokens that grant fans voting rights in a Decentralized Autonomous Organization (DAO), exclusive Discord access, and direct influence over future creative projects.",
        architecturalImpact: "Build hyper-engaged, highly monetized independent communities that are completely immune to centralized platform algorithms.",
      },
      {
        icon: Ticket,
        label: "VIP Access & Ticketing",
        legacyBottleneck: "Live exhibitions, private studio tours, and digital drops are plagued by bot networks that scalp access passes, leaving genuine fans locked out and artists with zero secondary market revenue.",
        ceruleaExecution: "Issue exclusive access passes as non-fungible digital assets. Creators embed strict resale price ceilings and automated royalty kickbacks directly into the ticket code to ensure fair access.",
        architecturalImpact: "Block scalper bots and automatically capture a share of every secondary market resale directly for the artist.",
      },
      {
        icon: Code2,
        label: "Cross-Platform Avatars & IP",
        legacyBottleneck: "Digital art, avatars, and 3D models are permanently locked within a single centralized platform or metaverse. If the platform shuts down, the digital asset and its value are instantly destroyed.",
        ceruleaExecution: "Utilize standardized, verifiable data models. An asset minted on Cerulea can be cryptographically verified by any authorized engine, allowing digital art to seamlessly port between independent virtual worlds.",
        architecturalImpact: "Pioneer the true open metaverse by allowing creator IP to travel seamlessly across independent digital platforms.",
      },
    ],
    simulatorTitle: "Creator Royalty & Distribution Simulator",
    simulatorDescription: "Platform commissions, gallery cuts, and payment gateway percentages drain massive revenue from independent creators. Calculate your exact capital savings by migrating to Cerulea direct distribution.",
    simulator: {
      label: "Monthly Digital Sales & Streams",
      unit: "Tx",
      min: 1000,
      max: 250000,
      defaultValue: 50000,
      legacyCostLabel: "Platform Commissions & Gateway Fees",
      legacyCostValue: "$900,000",
      ceruleaCostLabel: "Smart Contract Execution",
      ceruleaCostValue: "$12,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$888,000",
      methodology:
        "The legacy calculation utilizes creator economy benchmarks estimating the average combined operational cost of traditional platform commissions, payment gateway processing, and manual royalty splitting at **$1.50 USD** per digital transaction. Executing the exact same asset sale via Cerulea incurs an estimated network fee of **$0.02 USD**. This figure represents the computational gas cost required to automatically verify a buyer's digital signature and deterministically route royalty splits on a high-throughput consensus engine, completely bypassing monopolistic marketplace fees.",
    },
    architectureDescription:
      "Whether you are bridging legacy gallery databases or deploying native Web3 creator portals, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Gallery Bridging",
        description:
          "For major galleries and agencies connecting existing CMS software. Legacy HTTP requests are translated into secure Web3 transactions without overhauling core systems.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Agency Core",
            sublabel: "Internal CMS / ERP",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Foundation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Corporate State",
            accent: true
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"]
      },
      {
        title: "Track B: Native Creator DApp Execution",
        description:
          "For independent artists and decentralized marketplaces. Bypass legacy middleware and route minting logic directly to the public execution layer.",
        nodes: [
          {
            icon: Palette,
            label: "Client Portal",
            sublabel: "React & Web3 Wallets",
          },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Data Validation Nodes",
            accent: true
          },
          {
            icon: Zap,
            label: "Cerulea Public L1",
            sublabel: "Asset Minting Logic",
            accent: true
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"]
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the creative sector.",
    spectrum: [
      {
        icon: Building2,
        title: "Agencies & Fine Art Galleries",
        description:
          "High-end art galleries and creative agencies utilize Cerulea to establish unalterable provenance for physical art, automate complex royalty splits between artists and curators, and tokenize massive intellectual property portfolios.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Physical Art Provenance",
          "Automated Curator Splits",
          "IP Syndication",
        ],
      },
      {
        icon: Palette,
        title: "Digital Platforms & Marketplaces",
        description:
          "Streaming platforms and digital marketplaces deploy Cerulea to establish perfectly synchronized royalty ledgers. This ensures creators are paid instantly for streams or sales without waiting on massive clearinghouses.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Instant Stream Payouts",
          "Secondary Market Royalties",
          "Fractional Trading Hubs",
        ],
      },
      {
        icon: Code2,
        title: "Independent Creators & Collectives",
        description:
          "Forward-thinking creators build sovereign communities and Decentralized Autonomous Organizations (DAOs) on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security for their social tokens.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Fan Governance DAOs",
          "VIP Social Tokens",
          "Decentralized Crowdfunding",
        ],
      },
    ],
    stackTitle: "The Creator Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of digital artists and creative agencies. It is architected to provide a highly secure pathway for migrating legacy IP into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "CREATOR LEDGERS",
        title: "Hybrid Media Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal agency compliance, or launch directly onto the high-throughput Public L1 to facilitate global digital asset trading and fan interactions.",
      },
      {
        number: "02",
        category: "FAN KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting buyer wallet is mathematically tied to a verified fan credential, instantly blocking sybil attacks and automated scalper bots during NFT drops.",
      },
      {
        number: "03",
        category: "ASSET TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map digital artwork metadata, automated royalty triggers, and community voting rights into deterministically secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "COMMUNITY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect the creator treasury. Enforce strict cryptographic signatures from DAO token holders before massive creative fund allocations or charity donations are permitted to execute.",
      },
      {
        number: "05",
        category: "PLATFORM BRIDGE",
        title: "The Creator API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy streaming platforms and gallery CMS software directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom creator blockchains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 16 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "6 to 8 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Copyright Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring expensive Web3 developers to write custom state machines, complex royalty structures, and digital asset standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the royalty payout code before handling live revenue.",
        },
        {
          title: "Phase 3: Marketplace Middleware",
          duration: "Months 6 to 10",
          description:
            "Building fragile custom middleware to successfully translate API calls from legacy creator tools and galleries into blockchain compatible RPC payloads.",
        },
        {
          title: "Phase 4: Regulatory Testing",
          duration: "Months 12 to 16",
          description:
            "Enduring a massive beta rollout phase to ensure the minting platform, the smart contracts, and the global collector database synchronize correctly.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Contract Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to visually map asset metadata, required split signatures, and automated royalty triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Automate the deployment of the Sovereign Private Chain and issue standardized validator nodes directly for publisher databases from the control dashboard.",
        },
        {
          title: "Phase 3: Creator API Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect existing minting portals or agency software directly to auto-generated Cerulea APIs. No custom middleware or indexing is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Bridge the finalized logic to the live network and begin issuing cryptographically verified art assets with complete architectural confidence.",
        },
      ],
    },
  },


  //=========================================== gaming-esports

  {
    slug: "gaming-esports",
    eyebrow: "Gaming & Esports",
    headline: ["Tokenize assets.", "Automate economies."],
    description:
      "Cerulea provides the execution engine to launch interoperable game assets, automate secondary market royalties, and secure esports prize pools without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Faoundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "True Digital Scarcity",
        description:
          "In-game item drops can be mathematically capped. Once the maximum supply of a legendary skin is reached, it is cryptographically impossible to duplicate or generate more.",
      },
      {
        number: "02",
        title: "Fraud-Proof Trading",
        description:
          "Atomic swaps guarantee that asset transfers and payments happen simultaneously. This completely eliminates chargeback fraud and the risk of scamming in peer-to-peer player markets.",
      },
      {
        number: "03",
        title: "Gas-Abstracted Gameplay",
        description:
          "High-throughput infrastructure allows studios to sponsor network fees for their users. Players enjoy the security of blockchain assets while experiencing standard Web2 responsiveness.",
      },
      {
        number: "04",
        title: "Programmable Royalties",
        description:
          "Publishers can hardcode royalty splits into digital items. Every time a skin is resold on an open marketplace, the original developer receives an instant, automated revenue cut.",
      },
      {
        number: "05",
        title: "Cross-Platform Parity",
        description:
          "Because player inventories live on an independent public ledger rather than a centralized studio server, user assets can seamlessly integrate into console, PC, and mobile clients equally.",
      },
      {
        number: "06",
        title: "Decentralized Identity",
        description:
          "Players maintain a single cryptographic gamertag that tracks global tournament ranks, achievements, and cross-game inventories without relying on vulnerable third-party login protocols.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting vast digital economies. Select a specific operational segment below.",
    useCases: [
      {
        icon: Gamepad2,
        label: "True Digital Ownership",
        legacyBottleneck:
          "Players spend billions on in-game items, skins, and battle passes that are permanently locked within a single publisher’s walled database. If an account is banned or a server shuts down, the user loses their entire investment.",
        ceruleaExecution:
          "Mint in-game items as decentralized assets on the public ledger. Players gain absolute cryptographic ownership, allowing them to hold, trade, or transfer assets independently of the central game servers.",
        architecturalImpact:
          "Create massive, highly engaged digital economies and drastically increase player retention through genuine financial stakes.",
      },
      {
        icon: ArrowLeftRight,
        label: "Secondary Market Capture",
        legacyBottleneck: "Gray markets for in-game item trading are plagued by fraud, chargebacks, and account theft. Game publishers capture zero revenue from these massive secondary peer to peer economies.",
        ceruleaExecution: "Create official, blockchain verified trading hubs. Embed programmatic royalties directly into the item logic so the original developer automatically receives a percentage of every future secondary market resale.",
        architecturalImpact: "Reclaim the secondary market and unlock a massive, continuous revenue stream for game studios.",
      },
      {
        icon: Trophy,
        label: "Automated Esports Escrow",
        legacyBottleneck: "Esports tournament prize pools rely on opaque organizations and manual bank transfers. Winning players and teams often face months of delays waiting for tournament organizers to release funds.",
        ceruleaExecution: "Utilize programmable smart escrow. Tournament prize pools are locked cryptographically before the event begins and are automatically routed to the winning players the exact second the final match data is verified by API oracles.",
        architecturalImpact: "Restore absolute trust in esports ecosystems and guarantee instant, dispute free prize distribution.",
      },
      {
        icon: Network,
        label: "Cross-Game Interoperability",
        legacyBottleneck: "Items earned or purchased in one game have zero utility in another. Game ecosystems remain entirely isolated, preventing cross-promotion and stifling metaverse development.",
        ceruleaExecution: "Utilize standardized, verifiable data models. An asset minted on Cerulea can be read by any authorized game engine, allowing a weapon or cosmetic skin to seamlessly port between entirely different game worlds.",
        architecturalImpact: "Pioneer the true metaverse by allowing player identity and inventories to travel seamlessly across independent titles.",
      },
      {
        icon: Wrench,
        label: "Creator & Modder Royalties",
        legacyBottleneck: "Community modders and user generated content (UGC) creators add massive value to games but struggle to monetize their work safely and transparently.",
        ceruleaExecution: "Tokenize user generated content. As players download or interact with community creations, high throughput micro-transactions automatically route fractional payments directly to the creator’s wallet.",
        architecturalImpact: "Incentivize endless community driven content creation by providing guaranteed, automated compensation.",
      },
      {
        icon: Fingerprint,
        label: "Frictionless Web3 Onboarding",
        legacyBottleneck: "Traditional Web3 games force players to manage complex seed phrases, acquire volatile cryptocurrencies, and pay network gas fees just to play, destroying mainstream adoption.",
        ceruleaExecution: "Implement network level gas abstraction. Publishers sponsor the transaction fees in the background, allowing players to log in with standard email accounts and trade items without ever knowing a blockchain is running under the hood.",
        architecturalImpact: "Achieve Web3 economic benefits with Web2 user experience speeds, eliminating all onboarding friction for casual gamers.",
      },
    ],
    simulatorTitle: "In-Game Economy & Trade Simulator",
    simulatorDescription: "Black market trading, credit card chargebacks, and server database scaling drain revenue from digital economies. Calculate your exact operational savings by migrating to Cerulea atomic execution.",
    simulator: {
      label: "Monthly Asset Trades / Transfers",
      unit: "Tx",
      min: 100000,
      max: 10000000,
      defaultValue: 2000000,
      legacyCostLabel: "Chargeback Fraud & Server DB Overhead",
      legacyCostValue: "$10,800,000",
      ceruleaCostLabel: "Smart Contract Routing",
      ceruleaCostValue: "$120,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$10,680,000",
      methodology:
        "The legacy calculation utilizes gaming industry benchmarks estimating the average combined operational cost of maintaining central databases, processing payment gateway fees, and absorbing credit card chargeback fraud at **$0.45 USD** per digital item transfer. Executing the exact same asset swap via Cerulea incurs an estimated network fee of **$0.005 USD**. This figure represents the computational gas cost required to automatically verify a player's digital signature and deterministically execute the asset exchange on a high throughput ledger. Because the network processes the asset transfer and the payment execution atomically, chargeback fraud and manual customer support tickets are mathematically eliminated.",
    },
    architectureDescription:
      "Whether you are bridging legacy publisher databases or integrating directly into game engines like Unity, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Studio Platform Bridging",
        description:
          "For major publishers connecting existing backend infrastructure. Legacy HTTP requests from central player databases are translated into secure Web3 transactions seamlessly.",
        steps: [
          {
            icon: Server,
            label: "Legacy Studio Core",
            sub: "PlayFab / GameSparks",
          },
          { icon: Plug2, label: "Cerulea API", sub: "Translation Gateway" },
          {
            icon: Shield,
            label: "Cerulea Private Chains",
            sub: "Academic Registry Store",
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"]
      },
      {
        title: "Track B: Native Client Execution",
        description:
          "For Web3 developers building fully decentralized economies. Bypass legacy middleware and integrate the game client directly to the public execution layer.",
        steps: [
          {
            icon: Gamepad2,
            label: "Game Client",
            sub: "Unity / Unreal Engine",
          },
          {
            icon: Globe,
            label: "Cerulea Public L1",
            sub: "High-Throughput Network",
          },
          {
            icon: Layers,
            label: "Cerulea Data Models",
            sub: "Asset Trading Logic",
          },
        ],
        connectorLabels: ["CERULEA SDK", "STATE EXECUTION"]
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global gaming and esports sector.",
    spectrum: [
      {
        icon: Building2,
        title: "AAA Publishers & Studios",
        description:
          "Enterprise studios utilize Cerulea to unify internal player databases, completely eliminate chargeback fraud on digital purchases, and capture massive new revenue streams by programmatically taxing secondary market trades.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Secondary Market Capture",
          "Fraud Eradication",
          "Cross-IP Promotions",
        ],
      },
      {
        icon: Trophy,
        title: "Esports Teams & Organizers",
        description:
          "Tournament organizers deploy Cerulea to establish verifiable prize pool escrow. Fans can crowdfund massive tournaments, and winning teams receive instant payouts via automated smart contracts the moment matches conclude.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Automated Prize Escrow",
          "Fan Token Governance",
          "Team Revenue Splits",
        ],
      },
      {
        icon: Code2,
        title: "Web3 Devs & Modders",
        description:
          "Forward-thinking engineers build next generation virtual economies and play-to-earn protocols on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security without raw Solidity code.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "UGC Royalty Routing",
          "Decentralized Marketplaces",
          "Cross-Game Metaverses",
        ],
      },
    ],
    stackTitle: "The Gaming Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of massive multiplayer environments. It is architected to provide a standardized, highly secure pathway for migrating legacy items into programmable Web3 execution.",
    stackLayers: [
      {
        number: "01",
        category: "VIRTUAL LEDGERS",
        title: "Hybrid Gaming Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal publisher tracking, or launch directly onto the high-throughput Public L1 to facilitate global, open-market trading for players.",
      },
      {
        number: "02",
        category: "PLAYER KYC",
        title: "On-Chain Gamertag Resolver",
        description:
          "Deploy the Identity module to ensure every interacting player wallet is mathematically tied to a verified platform credential, instantly blocking sybil attacks and bot farms.",
      },
      {
        number: "03",
        category: "ASSET TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map digital skins, esports prize pools, and automated royalty triggers into deterministically secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "ECONOMY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect the in-game economy. Enforce strict cryptographic signatures from developers or community DAOs before any massive asset burns or inflationary mechanics are permitted to execute.",
      },
      {
        number: "05",
        category: "GAME ENGINE BRIDGE",
        title: "The Unity & Unreal SDKs",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated SDKs that natively integrate your smart contracts directly into major C++ and C# game engines.",
      },
    ],
    timeToValueDescription:
      "Building custom gaming blockchains from scratch requires specialized engineers and agonizing code audits. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 18 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Economy Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring expensive Web3 developers to write custom state machines, NFT logic, and marketplace escrow entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 8",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal code vulnerabilities before deploying live player assets.",
        },
        {
          title: "Phase 3: Game Engine Middleware",
          duration: "Months 8 to 12",
          description:
            "Building fragile custom middleware to successfully translate API calls from Unity or Unreal Engine into blockchain compatible RPC payloads.",
        },
        {
          title: "Phase 4: Network Testing",
          duration: "Months 10 to 18",
          description:
            "Enduring a massive beta rollout phase to ensure the game client, the smart contracts, and the global player database synchronize correctly without fatal duping bugs.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Asset Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to visually map asset supplies, required trade signatures, and automated royalty triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly for publisher databases from the control dashboard.",
        },
        {
          title: "Phase 3: SDK Client Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect existing Unity or Unreal Engine builds directly to auto-generated Cerulea SDKs. No custom middleware or indexing is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Bridge the finalized logic to the live network and begin issuing cryptographically verified in-game items with complete architectural confidence.",
        },
      ],
    },
  },



  //============================================= cybersecurity
  {
    slug: "cybersecurity",
    eyebrow: "Cybersecurity & Zero-Trust",
    headline: ["Decentralize authentication.", "Enforce zero trust."],
    description:
      "Cerulea provides the execution engine to deploy decentralized PKI, issue unforgeable identity credentials, and anchor immutable threat logs without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Eliminated Honeypots",
        description:
          "Traditional authentication relies on massive databases of stored credentials. Decentralization removes the central target, forcing attackers to compromise thousands of isolated private keys simultaneously.",
      },
      {
        number: "02",
        title: "Cryptographic Immutability",
        description:
          "Once a security event, software patch, or public key is anchored to the ledger, it cannot be spoofed. This guarantees that internal systems are executing verified code.",
      },
      {
        number: "03",
        title: "Automated Key Revocation",
        description:
          "Compromised certificates must be revoked globally instantly. Smart contracts execute network wide credential invalidation with perfect synchronization, leaving zero windows of vulnerability.",
      },
      {
        number: "04",
        title: "Distributed Consensus",
        description:
          "Executing highly sensitive network commands requires M of N multi signature consensus. A single compromised administrator account cannot independently execute a malicious payload.",
      },
      {
        number: "05",
        title: "Zero-Knowledge Proofs",
        description:
          "Employees and API endpoints can prove they possess the required authorization credentials without ever transmitting the sensitive credential itself over the internal network.",
      },
      {
        number: "06",
        title: "Provable Auditing",
        description:
          "Turn grueling ISO and SOC2 compliance audits into instantaneous queries. Auditors can verify historical access logs and governance decisions with absolute mathematical certainty.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting defense grade security architecture. Select a specific operational segment below.",
    useCases: [
      {
        icon: LockKeyhole,
        label: "Decentralized PKI",
        legacyBottleneck:
          "Public Key Infrastructure (PKI) relies on centralized Certificate Authorities (CAs). If a root CA is compromised, hackers can forge certificates, intercept encrypted traffic, and devastatingly breach enterprise perimeters.",
        ceruleaExecution:
          "Replace vulnerable central authorities with a decentralized registry. Public keys are anchored directly to the Cerulea ledger, making it mathematically impossible for a single point of failure to compromise the organization.",
        architecturalImpact:
          "Secure enterprise communications with absolute cryptographic certainty.",
      },
      {
        icon: ShieldCheck,
        label: "Zero-Trust Access Control",
        legacyBottleneck: "Traditional IAM systems (Identity and Access Management) use static roles and passwords. Attackers routinely steal these credentials via phishing, gaining unfettered lateral movement inside the network.",
        ceruleaExecution: "Enforce continuous, cryptographic zero trust. Smart contracts evaluate conditional access requests dynamically, requiring multi signature approvals from distributed nodes before granting entry to sensitive databases.",
        architecturalImpact: "Completely eliminate unauthorized lateral network movement and render stolen passwords entirely useless.",
      },
      {
        icon: Search,
        label: "Immutable Threat Intelligence",
        legacyBottleneck: "When a network is breached, sophisticated attackers cover their tracks by altering or deleting central system logs, making post breach forensic analysis incredibly difficult.",
        ceruleaExecution: "Stream security events and server logs directly to an isolated Private Chain. Because the ledger is append only, threat data is permanently hashed and impossible for an attacker to modify or delete.",
        architecturalImpact: "Guarantee perfect forensic data integrity and accelerate post incident response times significantly.",
      },
      {
        icon: Router,
        label: "IoT Device Authentication",
        legacyBottleneck: "Enterprise networks are flooded with thousands of connected IoT devices. Managing passwords for headless devices is a massive operational burden, leaving networks open to botnet hijacking.",
        ceruleaExecution: "Mint a unique digital identity for every hardware endpoint. Devices authenticate to the network autonomously via verifiable cryptographic handshakes without relying on human managed passwords.",
        architecturalImpact: "Secure edge computing networks entirely and automate the lifecycle management of thousands of connected endpoints.",
      },
      {
        icon: Database,
        label: "Data Provenance & Integrity",
        legacyBottleneck: "Financial algorithms, AI training datasets, and classified defense files are highly susceptible to silent data poisoning attacks that subtly alter outcomes without triggering alarms.",
        ceruleaExecution: "Anchor data state hashes to the blockchain at regular intervals. Any subsequent process can compare the real time hash against the ledger to instantly verify that the data has not been tampered with.",
        architecturalImpact: "Ensure absolute confidence in the integrity of critical data pipelines and AI model inputs.",
      },
      {
        icon: Zap,
        label: "Automated Incident Response",
        legacyBottleneck: "Executing a massive security lockdown requires human security analysts to recognize a threat, verify it, and manually trigger API commands across dozens of separate firewall systems.",
        ceruleaExecution: "Encode Security Playbooks as smart contracts. When distributed threat oracles agree that a breach threshold is met, the network autonomously fires executing containment protocols instantly.",
        architecturalImpact: "Reduce critical threat containment times from minutes to milliseconds, stopping data exfiltration before it starts.",
      },
    ],
    simulatorTitle: "PKI & Access Management Simulator",
    simulatorDescription: "Legacy IAM licensing, centralized certificate issuance, and the massive systemic risk of password breaches drain security budgets. Calculate your operational savings by migrating to Cerulea decentralized identity.",
    simulator: {
      label: "Monthly Auths & Certificate Events",
      unit: "Tx",
      min: 10000,
      max: 1000000,
      defaultValue: 100000,
      legacyCostLabel: "IAM Licensing & Breach Risk Provision",
      legacyCostValue: "$1,500,000",
      ceruleaCostLabel: "Smart Contract Execution",
      ceruleaCostValue: "$12,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$1,488,000",
      methodology:
        "The legacy calculation utilizes InfoSec industry benchmarks estimating the combined average cost of enterprise SSO/IAM licensing, physical security token management, and amortized data breach remediation overhead at **$1.25 USD** per access event. Executing the exact same zero-trust authentication via Cerulea incurs an estimated network fee of **$0.01 USD**. This figure represents the computational gas cost required to automatically verify a cryptographic signature and deterministically process conditional access rules on a high throughput consensus engine, bypassing expensive third party software licenses entirely.",
    },
    architectureDescription:
      "Whether you are bridging legacy Active Directory environments or routing native hardware endpoints, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Identity Bridging",
        description:
          "For CISO teams connecting existing IAM systems. Legacy HTTP requests are translated into secure Web3 cryptographic signatures without overhauling core directories.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Identity Core",
            sublabel: "Active Directory / Okta",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Audit Execution",
            accent: true
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"]
      },
      {
        title: "Track B: Native Device Execution",
        description:
          "For distributed hardware networks. Bypass legacy middleware and route endpoint authentication directly to public decentralized validators.",
        nodes: [
          {
            icon: Cpu,
            label: "Edge Endpoints",
            sublabel: "Active Directory / Okta",
          },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Consensus Nodes",
            accent: true
          },
          {
            icon: Zap,
            label: "Cerulea Public L1",
            sublabel: "Access Validation Logic",
            accent: true
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"]
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global cybersecurity sector.",
    spectrum: [
      {
        icon: ShieldCheck,
        title: "Enterprise InfoSec Teams",
        description:
          "CISO organizations utilize Cerulea to replace vulnerable centralized domain controllers, enforce strict multi signature access policies, and establish mathematically unalterable audit trails for compliance reporting.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Zero Trust Authentication",
          "Immutable Threat Logs",
          "Decentralized PKI",
        ],
      },
      {
        icon: Landmark,
        title: "Defense & Intelligence Agencies",
        description:
          "Defense contractors and government bodies deploy Cerulea to manage classified data provenance. The distributed architecture ensures that mission critical data cannot be altered by state sponsored advanced persistent threats (APTs).",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Classified Data Integrity",
          "Multi-Sig Command Auth",
          "Automated Clearance Checks",
        ],
      },
      {
        icon: Code2,
        title: "Web3 Security Developers",
        description:
          "Forward-thinking engineers build next generation DePIN identity protocols and decentralized Single Sign-On (SSO) systems on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute access control security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Decentralized SSO Wallets",
          "IoT Device Registries",
          "Bug Bounty Escrow",
        ],
      },
    ],
    stackTitle: "The Security Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of network defense. It is architected to provide a highly secure pathway for migrating legacy credentials into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "VIRTUAL LEDGERS",
        title: "Hybrid Security Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal enterprise threat intelligence, or launch directly onto the high-throughput Public L1 to facilitate decentralized consumer SSO.",
      },
      {
        number: "02",
        category: "PLAYER KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting employee wallet or IoT endpoint is mathematically tied to a verified corporate credential before access is granted.",
      },
      {
        number: "03",
        category: "ASSET TOKENIZATION",
        title: "Verifiable Access Models",
        description:
          "Use Cerulea Studio to visually map Role Based Access Control (RBAC), incident response triggers, and multi signature rules into secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "ECONOMY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect the core. Enforce strict cryptographic signatures from multiple senior security analysts before any sweeping firewall changes or major credential revocations are executed.",
      },
      {
        number: "05",
        category: "GAME ENGINE BRIDGE",
        title: "The Security API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy Okta, Ping Identity, and Active Directory environments directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom security blockchains from scratch requires specialized engineers and massive penetration testing budgets. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 16 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Authentication Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring specialized Web3 developers to write custom state machines, RBAC logic, and decentralized PKI frameworks entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal code vulnerabilities in the custom smart contracts before managing live network access.",
        },
        {
          title: "Phase 3: IAM Middleware",
          duration: "Months 6 to 9",
          description:
            "Building fragile custom middleware to successfully translate authentication requests from legacy tools (like Okta or AD) into blockchain compatible payloads.",
        },
        {
          title: "Phase 4: Penetration Testing",
          duration: "Months 10 to 16",
          description:
            "Enduring a massive Red Team rollout phase to ensure all independent security systems synchronize correctly with the ledger without fatal architectural flaws.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Asset Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to visually map access control policies, required signatures, and automated threat triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 2 to 4",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to regional IT departments from the control dashboard.",
        },
        {
          title: "Phase 3: API Hookup",
          duration: "Weeks 4 to 7",
          description:
            "Connect existing directory systems and SSO portals directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Bridge the finalized logic to the live network and begin enforcing zero-trust access policies with complete architectural confidence.",
        },
      ],
    },
  },


  //============================================= media and entertainment
  {
    slug: "media-entertainment",
    eyebrow: "Media & Entertainment",
    headline: ["Tokenize culture.", "Automate royalties."],
    description:
      "Cerulea provides the execution engine to fractionalize intellectual property, enforce anti-scalping ticket rules, and route global streaming royalties instantly without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Founfation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Instant Micro-Payments",
        description:
          "High throughput and abstracted gas fees allow platforms to stream fractions of a cent continuously. Creators are paid the exact second their content is consumed.",
      },
      {
        number: "02",
        title: "Immutable Provenance",
        description:
          "Digital signatures permanently attach the original creator's identity to a piece of media. This provides absolute mathematical defense against unauthorized AI scraping and deepfakes.",
      },
      {
        number: "03",
        title: "Secondary Market Capture",
        description:
          "Digital items and event tickets can be programmed to route a percentage of every future resale back to the original publisher, turning secondary markets into a new revenue stream.",
      },
      {
        number: "04",
        title: "Disintermediation",
        description:
          "Connect artists directly with their audience. By removing massive central distributors and publishing administrators, creators capture significantly higher margins on their own IP.",
      },
      {
        number: "05",
        title: "Fractionalized IP",
        description:
          "Blockchains enable complex ownership models. Thousands of global fans can securely pool capital to fund a movie or album, gaining cryptographic governance rights in return.",
      },
      {
        number: "06",
        title: "Global Accessibility",
        description:
          "Unlike legacy payment rails, public ledgers do not care about borders. A fan in Tokyo can instantly purchase a digital asset from an indie developer in Brazil without currency conversion delays.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting vast creative economies. Select a specific operational segment below.",
    useCases: [
      {
        icon: Music,
        label: "Automated Royalty Splits",
        legacyBottleneck:
          "Distributing royalties to artists, producers, and rights holders takes months. It relies on opaque publishing databases, manual accounting, and high intermediary fees that drain creator revenue.",
        ceruleaExecution:
          "Encode royalty splits directly into the digital asset. As content is streamed or sold, smart contracts automatically route micro-payments to every collaborator instantly, directly to their secure wallets.",
        architecturalImpact:
          "Reduce royalty payout times from 90 days to 900 milliseconds while returning 100% of the allocated revenue to creators.",
      },
      {
        icon: Ticket,
        label: "Anti-Scalping Ticketing",
        legacyBottleneck: "Live event ticketing is plagued by bot networks and scalpers who capture massive secondary market value, leaving artists and venues completely cut out of resale profits.",
        ceruleaExecution: "Issue event tickets as non-fungible digital assets. Organizers use Cerulea Studio to embed strict resale price ceilings and automated royalty kickbacks directly into the ticket code.",
        architecturalImpact: "Guarantee authentic tickets and automatically capture a share of every secondary market resale for the original artist.",
      },
      {
        icon: Copyright,
        label: "IP & Franchise Tokenization",
        legacyBottleneck: "Intellectual property is illiquid. Crowdfunding a film or franchise requires complex legal syndication, shutting out retail fans and preventing community-driven financing.",
        ceruleaExecution: "Tokenize the IP rights of films, music catalogs, or gaming franchises. Fans can purchase fractional shares of the IP, granting them verifiable ownership and a programmatic share of future distribution revenue.",
        architecturalImpact: "Transform passive audiences into financially aligned stakeholders and unlock massive new funding models for independent studios.",
      },
      {
        icon: Search,
        label: "Content Provenance (Anti-AI)",
        legacyBottleneck: "The proliferation of generative AI makes it nearly impossible to distinguish authentic news, photography, and licensed media from deepfakes and unlicensed derivatives.",
        ceruleaExecution: "Cameras and editing software anchor cryptographic hashes of original files directly to the Cerulea L1. Content consumers can verify the exact origin, timestamp, and creator of a piece of media instantly.",
        architecturalImpact: "Establish a globally verifiable cryptographic standard for media authenticity and protect creator copyright against AI scraping.",
      },
      {
        icon: Gamepad2,
        label: "Interoperable Gaming Assets",
        legacyBottleneck: "Players spend billions on in-game items that are permanently locked within a single publisher’s walled garden. If the game shuts down, the user loses their entire investment.",
        ceruleaExecution: "Mint in-game items, skins, and currencies as decentralized assets on the public ledger. Players gain true, sovereign ownership, allowing them to trade items on open secondary markets or port them into supported partner games.",
        architecturalImpact: "Create massive, liquid digital economies and increase player retention through true cryptographic ownership.",
      },
      {
        icon: Users,
        label: "Fan DAOs & Governance",
        legacyBottleneck: "Fan clubs and brand communities offer superficial engagement. Fans have zero actual governance power over the creative direction of the franchises they support.",
        ceruleaExecution: "Launch Decentralized Autonomous Organizations (DAOs) where token-holding fans can submit cryptographic votes on storyline directions, merchandise designs, or treasury spending.",
        architecturalImpact: "Build hyper-engaged, highly monetized communities driven by mathematically guaranteed democratic governance.",
      },
    ],
    simulatorTitle: "Royalty Administration Simulator",
    simulatorDescription: "Manual accounting and third party payment gateways drain revenue from massive streaming catalogs. Calculate your exact capital savings by migrating to Cerulea atomic execution.",
    simulator: {
      label: "Monthly Processed Royalty Events",
      unit: "Tx",
      min: 10000,
      max: 1000000,
      defaultValue: 10000000,
      legacyCostLabel: "Admin & Payment Gateway Fees",
      legacyCostValue: "$6,000,000",
      ceruleaCostLabel: "Smart Contract Execution",
      ceruleaCostValue: "$120,000",
      totalSavedLabel: "Total Capital Saved Annually",
      totalSavedValue: "$5,880,000",
      methodology:
        "The legacy calculation utilizes media industry benchmarks estimating the average combined operational cost of calculating splits, generating tax records, and processing a micro payout at $0.05 USD per transaction. This accounts for legacy publishing administrators and traditional banking gateways. Executing the exact same contract trigger via Cerulea incurs an estimated network fee of $0.001 USD. This figure represents the raw computational gas cost required to execute the royalty logic via a WebAssembly (WASM) binary on a high throughput consensus engine. Because the network processes the split calculation and the payout routing atomically, administrative review is mathematically eliminated.",
    },
    architectureDescription:
      "Whether you are bridging legacy streaming data or launching native Web3 gaming economies, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Studio & Publishing Bridging",
        description:
          "For major labels and studios connecting existing streaming data. Legacy playback logs are translated into secure Web3 payouts without overhauling core catalog systems.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Platform Core",
            sublabel: "Streaming & VOD Data",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            accent: true
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"]
      },
      {
        title: "Track B: Native Web3 DApp Execution",
        description:
          "For Web3 gaming studios and decentralized creator platforms. Bypass legacy middleware and route logic directly to the public execution layer.",
        nodes: [
          {
            icon: Gamepad2,
            label: "Client DApp / Game",
            sublabel: "React & Mobile App",
          },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Decentralized Ledger",
            accent: true
          },
          {
            icon: Layers,
            label: "Cerulea Data Models",
            sublabel: "Smart Contract Logic",
            accent: true
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"]
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the media and entertainment sector.",
    spectrum: [
      {
        icon: Building2,
        title: "Studios & Record Labels",
        description:
          "Enterprise studios utilize Cerulea to unify internal publishing databases, automate royalty distributions, and securely tokenize major intellectual property without exposing proprietary catalog data to public networks.",
        assetTypes: [
          "Royalty Automation",
          "IP Syndication",
          "Rights Management",
        ],
      },
      {
        icon: Ticket,
        title: "Ticketing Platforms & Venues",
        description:
          "Live event organizers deploy Cerulea to establish a perfectly synchronized cryptographic ledger. This ensures real-time visibility into the secondary market and eliminates massive revenue leakage to scalpers and bot networks.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Anti-Scalping Rules",
          "Secondary Resale Royalties",
          "VIP Access Control",
        ],
      },
      {
        icon: Code2,
        title: "Web3 Creators & Game Devs",
        description:
          "Forward-thinking engineers build next-generation creator platforms and interoperable gaming ecosystems on the high-throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security without raw Solidity code.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "In-Game Assets",
          "Decentralized Social",
          "Fan Token DAOs",
        ],
      },
    ],
    stackTitle: "The Creative Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of the media sector. It is architected to provide a standardized, highly secure pathway for migrating legacy intellectual property into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "SETTLEMENT NETWORKS",
        title: "Hybrid Media Ledgers",
        description:
          "Deploy an isolated Private Subnet strictly for internal B2B publishing data, or launch directly onto the high-throughput Public L1 for direct-to-consumer digital collectibles and gaming applications.",
      },
      {
        number: "02",
        category: "CREATOR KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting creator wallet is mathematically tied to a verified identity credential before content can be uploaded or monetized.",
      },
      {
        number: "03",
        category: "IP TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map complex intellectual property rights, publishing splits, and ticketing limits into deterministically secure smart contracts without writing low-level code.",
      },
      {
        number: "04",
        category: "STUDIO GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect massive IP portfolios. Enforce strict cryptographic signatures from producers, managers, and legal teams before any major catalog transfer or master rights sale is permitted.",
      },
      {
        number: "05",
        category: "LEGACY SOFTWARE BRIDGE",
        title: "The DSP API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints that natively integrate into existing Digital Service Providers (DSPs) like Spotify and Apple Music.",
      },
    ],
    timeToValueDescription:
      "Building custom property blockchains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times by 80%.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 18 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Copyright Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring specialized Web3 developers to write custom state machines, royalty distribution logic, and digital asset standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the royalty payout code before handling live revenue.",
        },
        {
          title: "Phase 3: DRM Middleware",
          duration: "Months 8 to 12",
          description:
            "Developing fragile off-chain workers and indexers so the studio's legacy publishing database can actually read the blockchain.",
        },
        {
          title: "Phase 4: Network Testing",
          duration: "Months 12 to 18",
          description:
            "Enduring a grueling rollout phase to ensure the custom middleware, the smart contracts, and the streaming platforms communicate without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Rights Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to map SLAs and roaming structures visually. The engine compiles the logic into mathematically deterministic binaries instantly.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Automate the deployment of the Sovereign Private Chain and institutional validator nodes directly from the control dashboard.",
        },
        {
          title: "Phase 3: API Gateway Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect internal publishing software directly to auto-generated Cerulea REST endpoints. No custom middleware or subgraphs required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Instantly bridge the finalized logic to the live network with absolute confidence that the simulated testnet behavior will perfectly match production reality.",
        },
      ],
    },
  },

  //============================================= education-academia
  {
    slug: "education-academia",
    eyebrow: "Education & Academia",
    headline: ["Verify achievements.", "Automate administration."],
    description:
      "Cerulea provides the execution engine to issue immutable digital credentials, trace research funding, and build interoperable lifelong learning passports without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Faoundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Unalterable Credentials",
        description:
          "Once a degree or transcript is anchored to the ledger, it cannot be forged or altered. This provides absolute cryptographic proof of a student's academic history to future employers.",
      },
      {
        number: "02",
        title: "Student Sovereignty",
        description:
          "Learners are no longer locked into a single university's siloed portal. Students control their own digital identity wallets, carrying their verified achievements globally without friction.",
      },
      {
        number: "03",
        title: "Automated Bureaucracy",
        description:
          "Programmable smart contracts replace manual registrar reviews and grant audits. Capital and credentials are automatically distributed the exact moment academic conditions are met.",
      },
      {
        number: "04",
        title: "Consortium Ledgers",
        description:
          "Multiple universities, EdTech platforms, and state boards can share a secure Private Subnet. This allows for instantaneous credit transfers and curriculum mapping without manual data entry.",
      },
      {
        number: "05",
        title: "Fractionalized IP",
        description:
          "University research patents can be tokenized, allowing global investors to fund academic milestones while guaranteeing automated royalty routing back to the original scientists and institutions.",
      },
      {
        number: "06",
        title: "Cryptographic Privacy",
        description:
          "Utilize Zero-Knowledge Proofs (ZKP) to allow students to prove enrollment status or age for campus services without unnecessarily exposing underlying personal data to third parties.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex educational networks. Select a specific operational segment below.",
    useCases: [
      {
        icon: GraduationCap,
        label: "Verifiable Degrees & Credentials",
        legacyBottleneck:
          "Issuing paper diplomas and relying on slow, expensive third party clearinghouses for degree verification creates massive friction for alumni entering the global workforce.",
        ceruleaExecution:
          "Issue diplomas and micro-credentials as immutable digital assets. Universities sign credentials cryptographically, allowing employers to verify an applicant’s exact qualifications in milliseconds without contacting the registrar.",
        architecturalImpact:
          "Verify every credential instantly and remove the administrative burden of manual transcript checks.",
      },
      {
        icon: IdCard,
        label: "Lifelong Learning Passports",
        legacyBottleneck: "A student’s academic journey is scattered across different universities, online MOOCs, and corporate training platforms, making it impossible to present a unified portfolio of skills.",
        ceruleaExecution: "Deploy decentralized student identity wallets. As learners complete courses across different institutions, their educational achievements are anchored to a single, portable, lifelong cryptographic passport.",
        architecturalImpact: "Empower students with total ownership of their academic data, seamlessly bridging the gap between academia and corporate upskilling.",
      },
      {
        icon: FlaskConical,
        label: "DeSci & IP Tokenization",
        legacyBottleneck: "University research relies on opaque funding models, and intellectual property generated by academic labs is often trapped in inefficient technology transfer offices.",
        ceruleaExecution: "Tokenize academic research and intellectual property. Establish Decentralized Science (DeSci) frameworks where global investors can fund specific lab milestones in exchange for fractional ownership of resulting patents.",
        architecturalImpact: "Accelerate scientific breakthroughs by crowdsourcing research capital and automating fair royalty splits for academic inventors.",
      },
      {
        icon: Gift,
        label: "Automated Grant Disbursements",
        legacyBottleneck: "Administering federal or philanthropic research grants involves immense bureaucratic overhead. Funds are often delayed for months while administrators manually audit research milestones.",
        ceruleaExecution: "Utilize programmable escrow contracts. Grant capital is locked on the ledger and automatically disbursed to research departments the exact moment peer reviewed milestones or publication thresholds are achieved.",
        architecturalImpact: "Remove administrative delays, ensuring researchers have immediate access to capital while providing absolute transparency to donors.",
      },
      {
        icon: Fingerprint,
        label: "Campus & Digital Identity",
        legacyBottleneck: "Managing physical ID cards and siloed campus software accounts leads to severe security vulnerabilities, unauthorized access, and continuous IT support burdens for password resets.",
        ceruleaExecution: "Implement unified zero-knowledge identity frameworks. Students and faculty use a single cryptographic credential to access physical dormitories, library networks, and digital exam portals securely.",
        architecturalImpact: "Enhance campus security and dramatically reduce IT infrastructure costs associated with fragmented identity management.",
      },
      {
        icon: ArrowRightLeft,
        label: "Seamless Credit Transfers",
        legacyBottleneck: "Transferring academic credits between universities is a notoriously manual, subjective process that routinely forces students to retake classes and delays graduation.",
        ceruleaExecution: "Form academic consortium networks. Partner universities agree to standardized smart contract logic for credit equivalency, allowing student records to securely map between institutions instantly.",
        architecturalImpact: "Ensure perfect curriculum synchronization across global universities and completely remove the friction of student mobility.",
      },
    ],
    simulatorTitle: "Credential Verification Simulator",
    simulatorDescription: "Manual transcript requests and third-party credential clearinghouses drain massive capital from university budgets. Calculate your exact operational savings by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Degree & Transcript Verifications",
      unit: "Tx",
      min: 1000,
      max: 50000,
      defaultValue: 10000,
      legacyCostLabel: "Clearinghouse Fees & Registrar Staff",
      legacyCostValue: "$1,500,000",
      ceruleaCostLabel: "Smart Contract Read Execution",
      ceruleaCostValue: "$12,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$1,488,000",
      methodology:
        "The legacy calculation utilizes higher education benchmarks estimating the average combined administrative cost of fielding a request, paying third-party clearinghouse gateway fees, and issuing a verified background check at **$12.50 USD** per verification. This accounts for legacy software licensing and internal registrar labor hours. Executing the exact same provenance check via Cerulea incurs an estimated network fee of **$0.10 USD**. This figure represents the computational gas cost required for an employer to automatically verify a graduate's digital diploma directly against the university's public cryptographic signature, completely bypassing manual human review and third-party gateways.",
    },
    architectureDescription:
      "Whether you are bridging legacy learning management systems (LMS) or routing research grants, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: University LMS Bridging",
        description:
          "For institutions connecting existing academic databases. Legacy HTTP webhooks from grading systems are translated into secure Web3 credential issuance without system overhauls.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Academic Core",
            sublabel: "Canvas / Blackboard API",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chains",
            sublabel: "Academic Registry Store",
            accent: true
          },
        ],
      },
      {
        title: "Track B: Native Student DApp Execution",
        description:
          "For EdTech developers building decentralized learning portfolios. Bypass legacy middleware and route credential logic directly to the public execution layer.",
        nodes: [
          {
            icon: GraduationCap,
            label: "Student Portal",
            sublabel: "React & Mobile Identity App",
          },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Issuer Validation Nodes",
            accent: true
          },
          {
            icon: Zap,
            label: "Cerulea Public L1",
            sublabel: "Credential Verification Logic",
            accent: true
          },
        ],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the academic sector.",
    spectrum: [
      {
        icon: GraduationCap,
        title: "Universities & Research Institutions",
        description:
          "Higher education institutions utilize Cerulea to establish unalterable degree registries, automate research grant escrow, and track complex intellectual property ownership for university spin off technologies.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Diploma Tokenization",
          "Research Grant Escrow",
          "Campus Digital Identity",
        ],
      },
      {
        icon: Building2,
        title: "Employers & Credentialing Boards",
        description:
          "Corporate hiring departments and state licensing boards deploy Cerulea to verify applicant credentials with absolute mathematical certainty. The cryptographic ledger ensures that compliance checks are performed instantly without third party fees.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Instant Background Checks",
          "License Authentication",
          "Corporate Upskilling Tracking",
        ],
      },
      {
        icon: Code2,
        title: "EdTech & DeSci Developers",
        description:
          "Forward-thinking engineers build next generation MOOC platforms and Decentralized Science (DeSci) funding protocols on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security without raw Solidity.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Learn-to-Earn Protocols",
          "DeSci Research Funding",
          "Micro-Credential Badging",
        ],
      },
    ],
    stackTitle: "The Academic Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of academic compliance. It is architected to provide a highly secure pathway for migrating legacy academic data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "ACADEMIC LEDGERS",
        title: "Hybrid University Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal registrar data, or launch directly onto the high-throughput Public L1 to facilitate decentralized credential verification for employers.",
      },
      {
        number: "02",
        category: "STUDENT KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting learner wallet is mathematically tied to a verified university credential before exam results or transcripts are anchored.",
      },
      {
        number: "03",
        category: "DEGREE TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map academic credits, diploma issuance, and research grant escrow triggers into secure smart contracts without writing low-level code.",
      },
      {
        number: "04",
        category: "COMPLIANCE GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect research funding. Enforce strict cryptographic signatures from authorized department heads before massive philanthropic grants are permitted to clear to research teams.",
      },
      {
        number: "05",
        category: "LMS SOFTWARE BRIDGE",
        title: "The EdTech API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy Canvas, Blackboard, and Ellucian systems directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom academic blockchains from scratch requires specialized engineers and agonizing institutional approval cycles. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "14 to 18 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "6 to 8 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Credential Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Negotiating data standards across independent universities and writing custom state machines to issue verifiable degrees entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 8",
          description:
            "Paying external firms hundreds of thousands of dollars to find code vulnerabilities in the custom smart contracts before managing sensitive student data.",
        },
        {
          title: "Phase 3: LMS Middleware",
          duration: "Months 8 to 12",
          description:
            "Building fragile custom middleware to successfully translate API webhooks from legacy tools (like Canvas) into blockchain compatible payloads.",
        },
        {
          title: "Phase 4: Regulatory Testing",
          duration: "Months 14 to 18",
          description:
            "Enduring a massive compliance rollout phase to ensure all independent university databases synchronize correctly with the ledger without fatal FERPA violations.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Course Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to visually map degree logic, required registrar signatures, and automated grant triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to partner universities from the control dashboard.",
        },
        {
          title: "Phase 3: API & LMS Hookup",
          duration: "Weeks 4 to 6",
          description:
            "Connect existing Learning Management Systems (LMS) directly to auto-generated Cerulea REST APIs. No custom middleware is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 7 to 8",
          description:
            "Bridge the finalized logic to the live network and begin issuing cryptographically verified student credentials with complete architectural confidence.",
        },
      ],
    },
  },

  //============================================= philanthropy-non-profit
  {
    slug: "philanthropy-non-profit",
    eyebrow: "Philanthropy & Non-Profit",
    headline: ["Route impact.", "Automate transparency."],
    description:
      "Cerulea provides the execution engine to trace global donations, deploy milestone-based grant escrow, and deliver instant humanitarian aid without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel:"The foundation",
    advantagesTitle:"The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Unalterable Provenance",
        description:
          "Once a donation is recorded on the ledger, its routing history cannot be altered or obscured. This provides donors with absolute mathematical proof of their capital's final destination.",
      },
      {
        number: "02",
        title: "Atomic Settlements",
        description:
          "International aid transfers occur in milliseconds. This bypasses slow correspondent banking networks, ensuring that critical funding reaches crisis zones exactly when it is needed.",
      },
      {
        number: "03",
        title: "Programmable Escrow",
        description:
          "NGOs can embed strict compliance and success conditions directly into grant contracts. Capital is held securely and released instantly only when verifiable field data confirms mission success.",
      },
      {
        number: "04",
        title: "Trust Minimization",
        description:
          "Disburse aid securely in high-risk regions without relying on local banking infrastructure or corrupt intermediaries. Funds travel directly from the treasury to the verified beneficiary.",
      },
      {
        number: "05",
        title: "Unified Industry Ledgers",
        description:
          "Eliminate fragmented charity databases. Partner NGOs and global health organizations can share a secure ledger to coordinate relief efforts and prevent redundant resource allocation.",
      },
      {
        number: "06",
        title: "Provable Auditing",
        description:
          "Every single treasury deployment is permanently hashed. Philanthropic boards and tax regulators can verify historical spending data with absolute mathematical certainty in real-time.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex global relief networks. Select a specific operational segment below.",
    useCases: [
      {
        icon: Eye,
        label: "Absolute Donor Transparency",
        legacyBottleneck:
          "Donors lack visibility into how their capital is deployed. Opaque administrative layers and fragmented international banking systems make it impossible to track a donation to its final destination.",
        ceruleaExecution:
          "Tokenize fiat donations on a public ledger. Donors receive a real-time cryptographic dashboard showing the exact journey of their capital from the initial deposit to the final field purchase.",
        architecturalImpact:
          "Restore absolute public trust and drastically increase donor retention through guaranteed financial transparency.",
      },
      {
        icon: Timer,
        label: "Milestone-Based Grants",
        legacyBottleneck: "Philanthropic grants are disbursed in massive lump sums based on trust, leading to fund mismanagement. Alternatively, requiring strict manual audits before every payout creates severe bureaucratic bottlenecks.",
        ceruleaExecution: "Utilize programmable escrow contracts. Grant capital is locked on the blockchain and automatically disbursed to the receiving organization only when predefined, verifiable milestones are achieved.",
        architecturalImpact: "Protect massive endowment funds from mismanagement while ensuring field operators receive instantaneous liquidity upon verified success.",
      },
      {
        icon: Truck,
        label: "Disaster Relief Logistics",
        legacyBottleneck: "During international crises, getting physical goods like medical supplies and food to the correct beneficiaries is chaotic. Corrupt intermediaries frequently intercept and divert unmonitored shipments.",
        ceruleaExecution: "Mint a Digital Product Passport for relief inventory. Track every transfer of custody securely on-chain, ensuring that critical supplies reach their intended clinics and camps without interception.",
        architecturalImpact: "Guarantee supply chain integrity and provide governments with mathematical proof of successful humanitarian aid delivery.",
      },
      {
        icon: Fingerprint,
        label: "Beneficiary Identity Wallets",
        legacyBottleneck: "Distributing cash aid to refugees or unbanked populations is incredibly difficult. Traditional banking infrastructure does not exist in crisis zones, and physical cash distribution is dangerous and easily stolen.",
        ceruleaExecution: "Deploy lightweight digital identity wallets to mobile devices. Field workers issue cryptographically secure digital vouchers or stablecoins directly to verified beneficiaries, bypassing legacy banks entirely.",
        architecturalImpact: "Provide instant, unseizable financial aid directly to the people who need it most, regardless of their local banking infrastructure.",
      },
      {
        icon: FileCheck,
        label: "Automated NGO Compliance",
        legacyBottleneck: "Global Non-Governmental Organizations (NGOs) spend millions of dollars and thousands of labor hours satisfying complex regulatory audits and compliance reporting across multiple jurisdictions.",
        ceruleaExecution: "Turn compliance into a passive process. Because every donation, grant, and field expense is permanently hashed to the ledger, regulators and board members can query an unalterable audit trail instantly.",
        architecturalImpact: "Slash administrative overhead and redirect millions of dollars from accounting budgets back into direct field impact.",
      },
      {
        icon: Gift,
        label: "Community Governed Endowments",
        legacyBottleneck: "Massive charitable endowments are typically controlled by a tiny group of disconnected board members, leading to capital misallocation that ignores the actual needs of the community.",
        ceruleaExecution: "Launch Decentralized Autonomous Organizations (DAOs) for philanthropic funds. Token-holding community members can submit proposals and vote cryptographically on exactly how the treasury should be deployed.",
        architecturalImpact: "Democratize global philanthropy by allowing the actual community to dictate their own funding priorities securely.",
      },
    ],
    simulatorTitle: "Grant Administration Simulator",
    simulatorDescription:"International wire fees, manual milestone reviews, and complex compliance audits drain capital from global relief efforts. Calculate your exact savings by migrating to Cerulea atomic settlement.",
    simulator: {
      label: "Monthly Auths & Certificate Events",
      unit: "Tx",
      min: 1000,
      max: 100000,
      defaultValue: 10000,
      legacyCostLabel: "Wire Fees & Admin Review",
      legacyCostValue: "$4,200,000",
      ceruleaCostLabel: "Smart Contract Settlement",
      ceruleaCostValue: "$24,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$4,176,000",
      methodology:
        "The legacy calculation utilizes non-profit industry benchmarks estimating the average combined operational cost of processing an international wire transfer, executing manual field verification, and managing financial compliance data at **$35.00 USD per grant disbursement**. Executing the exact same capital routing via Cerulea incurs an estimated network fee of **$0.20 USD**. This figure represents the computational gas cost required to automatically verify a digital signature and deterministically execute the conditional escrow release on a high throughput consensus engine, bypassing expensive correspondent banks entirely.",
    },
    architectureDescription:
      "Whether you are bridging legacy donor CRMs or routing funds directly to beneficiary mobile wallets, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise CRM Bridging",
        description:
          "For major NGOs connecting existing donor management software. Legacy HTTP requests are translated into secure Web3 transactions without overhauling core systems.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Philanthropy Core",
            sublabel: "Salesforce / Blackbaud CRM",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Foundation Gateway" ,accent:true},
          {
            icon: Shield,
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Audit State",
            accent:true
          },
        ],
      },
      {
        title: "Track B: Native Beneficiary Execution",
        description:
          "For direct relief distribution. Bypass legacy banking middleware and route aid directly to decentralized mobile wallets in the field.",
        nodes: [
          {
            icon: Cpu,
            label: "Beneficiary Hardware",
            sublabel: "Mobile Web3 Wallets",
          },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Identity Validation Nodes",
            accent:true
          },
          {
            icon: Zap,
            label: "Cerulea Public L1",
            sublabel: "Aid Distribution Logic",
            accent:true
          },
        ],
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of global humanitarian networks.",
    spectrum: [
      {
        icon: Building2,
        title: "Global NGOs & Endowments",
        description:
          "Enterprise charities utilize Cerulea to unify internal compliance databases, execute multi-signature approvals for massive aid deployments, and guarantee absolute financial transparency to institutional donors.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Donor Transparency Portals",
          "Milestone Grant Escrow",
          "Real-Time Audit Trails",
        ],
      },
      {
        icon: Truck,
        title: "Relief Distributors & Field Ops",
        description:
          "Crisis responders deploy Cerulea to establish a perfectly synchronized supply chain ledger. This ensures that critical humanitarian goods bypass corrupt intermediaries and reach intended populations securely.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Direct Aid Distribution",
          "Supply Chain Escrow",
          "Field Worker KYC",
        ],
      },
      {
        icon: Code2,
        title: "Web3 Security Developers",
        description:
          "Forward-thinking engineers build next generation DePIN identity protocols and decentralized Single Sign-On (SSO) systems on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute access control security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Philanthropic DAOs",
          "Community Voting",
          "Automated Micro-Giving",
        ],
      },
    ],
    stackTitle: "The Philanthropic Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict compliance requirements of global charities. It is architected to provide a highly secure pathway for migrating legacy donation data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "COMPLIANCE LEDGERS",
        title: "Hybrid Charity Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal NGO compliance auditing, or launch directly onto the high-throughput Public L1 to facilitate real-time consumer donation tracking.",
      },
      {
        number: "02",
        category: "BENEFICIARY KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting field worker or beneficiary wallet is mathematically tied to a verified credential before aid distribution is permitted.",
      },
      {
        number: "03",
        category: "ESCROW TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map funding milestones, disaster relief triggers, and automated grant distributions into deterministically secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "TREASURY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect massive charitable endowments. Enforce strict cryptographic signatures from the board of directors before any large capital withdrawal is permitted to execute.",
      },
      {
        number: "05",
        category: "LEGACY SOFTWARE BRIDGE",
        title: "The CRM API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy Salesforce and Blackbaud CRM software directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom heavy industry blockchains from scratch requires specialized engineers and massive hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 18 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Escrow Logic & Solidity",
          duration: "Months 1 to 4",
          description:
            "Hiring specialized Web3 developers to write custom state machines, milestone logic, and international compliance standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal code vulnerabilities in the grant payout logic before holding real donor capital.",
        },
        {
          title: "Phase 3: CRM Middleware",
          duration: "Months 6 to 11",
          description:
            "Developing fragile off-chain middleware so legacy Salesforce or Blackbaud CRM systems can actually read the blockchain.",
        },
        {
          title: "Phase 4: Field Testing",
          duration: "Months 12 to 18",
          description:
            "Enduring a grueling rollout phase to ensure the custom middleware, the smart contracts, and the global field operations communicate without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Grant Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to map funding milestones, governance structures, and field audit triggers visually. The engine compiles the logic into deterministic binaries instantly.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Automate the deployment of the Sovereign Private Chain and institutional validator nodes directly from the control dashboard.",
        },
        {
          title: "Phase 3: CRM API Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect internal donor management software directly to auto-generated Cerulea REST endpoints. No custom middleware or subgraphs required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Instantly bridge the finalized logic to the live network with absolute confidence that the simulated field tests will perfectly match production reality.",
        },
      ],
    },
  },


  //=================================== retail-consumer-goods
  {
    slug: "retail-consumer-goods",
    eyebrow: "Retail & Consumer Goods",
    headline: ["Tokenize loyalty.", "Verify supply chains."],
    description:
      "Cerulea provides the execution engine to trace global inventory, issue digital product passports, and build interoperable brand loyalty programs without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Interoperable Rewards",
        description:
          "Break down brand silos. Consumers can earn points with an airline and spend them seamlessly at a partner retail chain, managed automatically by a unified smart contract ledger.",
      },
      {
        number: "02",
        title: "Counterfeit Eradication",
        description:
          "Cryptographic signatures permanently attach a manufacturer's identity to a physical item. This provides an unforgeable layer of defense against the global counterfeit market.",
      },
      {
        number: "03",
        title: "Real-Time Auditing",
        description:
          "Consortium networks ensure that manufacturers, shipping firms, and storefronts read from the exact same inventory database, eliminating discrepancies and manual ledger reconciliation.",
      },
      {
        number: "04",
        title: "Programmable Escrow",
        description:
          "B2B payments are held securely and released instantly to suppliers only when external oracles confirm that physical delivery thresholds have been successfully met.",
      },
      {
        number: "05",
        title: "Secondary Market Capture",
        description:
          "Digital product passports can be programmed to route a percentage of every physical resale back to the original brand, turning secondary markets into an entirely new revenue stream.",
      },
      {
        number: "06",
        title: "Consumer Data Sovereignty",
        description:
          "Empower users to truly own their purchase history. Brands can request zero-party data directly from consumers via secure, cryptographically verifiable opt-in frameworks.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting complex retail operations. Select a specific operational segment below.",
    useCases: [
      {
        icon: Music,
        label: "Interoperable Loyalty",
        legacyBottleneck:
          "Retail reward programs are completely siloed. Consumers suffer from point fatigue because rewards cannot be easily transferred, traded, or redeemed outside of a single brand ecosystem.",
        ceruleaExecution:
          "Issue loyalty points as liquid digital assets on the Cerulea L1. Brands can form consortiums, allowing users to seamlessly trade or redeem points across partner networks without massive backend reconciliation.",
        architecturalImpact:
          "Turn static loyalty points into highly engaging, liquid digital economies that dramatically increase customer retention.",
      },
      {
        icon: ScrollText,
        label: "Digital Product Passports",
        legacyBottleneck: "Tracking the lifecycle of luxury goods, electronics, or sustainable fashion is nearly impossible. Counterfeiters exploit opaque supply chains, costing major brands billions in lost revenue.",
        ceruleaExecution: "Mint a unique cryptographic passport for every physical item. Consumers scan an NFC chip or QR code to instantly verify the exact manufacturing origin, ethical sourcing, and previous ownership history.",
        architecturalImpact: "Establish absolute brand trust through mathematically guaranteed product authenticity.",
      },
      {
        icon: Truck,
        label: "Supply Chain Traceability",
        legacyBottleneck: "Global fast-moving consumer goods (FMCG) rely on fragmented databases. When a recall occurs or a shipment is delayed, identifying the exact point of failure takes weeks of manual investigation.",
        ceruleaExecution: "Log every transfer of custody on a shared Private Subnet. Manufacturers, logistics providers, and retailers update a single unified ledger, providing real-time visibility into the exact status of inventory.",
        architecturalImpact: "Achieve zero reconciliation delays, execute targeted product recalls in seconds, and gain full supply chain visibility.",
      },
      {
        icon: ShieldCheck,
        label: "Automated Warranties",
        legacyBottleneck: "Claiming a product warranty requires consumers to save paper receipts and endure slow customer service reviews, while brands struggle to verify the legitimacy of the claims.",
        ceruleaExecution: "Embed warranty logic directly into the Digital Product Passport. When a product requires repair, the smart contract automatically verifies eligibility and issues an immediate digital repair voucher.",
        architecturalImpact: "Drastically reduce customer support overhead and provide a frictionless, zero-wait post-purchase experience.",
      },
      {
        icon: ArrowLeftRight,
        label: "Trade Finance & Inventory",
        legacyBottleneck: "Retailers face massive capital lockups waiting for inventory to arrive and clear customs. Supplier invoicing involves heavy manual verification and delayed payment cycles.",
        ceruleaExecution: "Utilize programmable escrow contracts. Capital is locked on the blockchain and automatically released to suppliers the exact moment IoT sensors or customs APIs verify successful physical delivery.",
        architecturalImpact: "Accelerate supplier cash flow and remove third-party trade finance intermediaries from the supply chain.",
      },
      {
        icon: Users,
        label: "D2C Community DAOs",
        legacyBottleneck: "Direct-to-Consumer engagement is limited to email newsletters and passive social media followers. Brands struggle to turn customers into active, financially aligned advocates.",
        ceruleaExecution: "Launch brand-specific governance tokens. Allow your top-tier customers to submit cryptographic votes on future product designs, marketing campaigns, or charity initiatives directly on-chain.",
        architecturalImpact: "Transform passive shoppers into hyper-engaged brand ambassadors driven by genuine community ownership.",
      },
    ],
    simulatorTitle: "Loyalty Network & Reconciliation Simulator",
    simulatorDescription: "Cross-brand loyalty redemptions require heavy manual database reconciliation and API gateway fees. Calculate your exact capital savings by migrating to Cerulea atomic settlement.",
    simulator: {
      label: "Monthly Point Redemptions / Reconciliations",
      unit: "Tx",
      min: 100000,
      max: 10000000,
      defaultValue: 1000000,
      legacyCostLabel: "Clearinghouse & B2B Recon",
      legacyCostValue: "$10,200,000",
      ceruleaCostLabel: "Smart Contract Execution",
      ceruleaCostValue: "$36,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$10,164,000",
      methodology:
        "The legacy calculation utilizes retail and banking benchmarks estimating the average combined operational cost of routing, verifying, and clearing a B2B cross-brand loyalty transaction or inventory swap at **$0.85 USD** per event. This accounts for third party data brokers and internal accounting teams matching siloed ledger balances. Executing the exact same trigger via Cerulea incurs an estimated network fee of **$0.003 USD**. This figure represents the raw computational gas cost required to execute the token transfer via a WebAssembly (WASM) binary on a high throughput consensus engine. Because the network updates the balance for all parties simultaneously, manual database reconciliation is mathematically eliminated.",
    },
    architectureDescription:
      "Whether you are bridging legacy ERP databases or tracking native NFC product chips, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise ERP & POS Bridging",
        description:
          "For major retailers connecting existing point-of-sale systems. Legacy HTTP requests are translated into secure Web3 transactions without system overhauls.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Retail Core",
            sublabel: "SAP / Salesforce POS",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Execution",
            accent: true
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"]
      },
      {
        title: "Track B: Native Consumer DApps",
        description:
          "For product authentication and D2C engagement. Route mobile app interactions directly to autonomous public smart contracts.",
        nodes: [
          {
            icon: Cpu,
            label: "Consumer Hardware",
            sublabel: "NFC Scans & Mobile Wallets",
          },
          {
            icon: Globe,
            label: "Cerulea Public L1",
            sublabel: "Decentralized Ledger",
            accent: true
          },
          {
            icon: Layers,
            label: "Cerulea Data Models",
            sublabel: "Tokenized Asset Logic",
            accent: true
          },
        ],
        connectorLabels: ["JSON-RPC / REST", "STATE EXECUTION"]
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the consumer goods sector.",
    spectrum: [
      {
        icon: Building2,
        title: "Global FMCG & Luxury Brands",
        description:
          "Enterprise retailers utilize Cerulea to unify internal supply chain databases, track global shipments in real time, and securely authenticate high value luxury goods to completely eradicate outside markets.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Product Passports",
          "Supply Chain Auditing",
          "Supplier Escrow",
        ],
      },
      {
        icon: Gift,
        title: "Loyalty Consortiums",
        description:
          "Airlines, hotel chains, and retail networks deploy Cerulea to establish a perfectly synchronized cryptographic ledger. This allows points to be seamlessly traded or redeemed across partner networks without expensive reconciliation.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Interoperable Rewards",
          "Cross-Brand Clearing",
          "Customer Data Sharing",
        ],
      },
      {
        icon: Code2,
        title: "D2C Web3 Developers",
        description:
          "Forward-thinking agencies build next generation consumer engagement platforms on the high throughput L1. They utilize Cerulea's visual Studio to launch phygital collections and fan DAOs with absolute smart contract security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Phygital Merchandise",
          "Brand Governance DAOs",
          "Secondary Resale Markets",
        ],
      },
    ],
    stackTitle: "The Retail Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of massive consumer networks. It is architected to provide a highly secure pathway for migrating legacy inventory into programmable environments.",
    stackLayers: [
      {
        number: "01",
        category: "CONSUMER LEDGERS",
        title: "Hybrid Retail Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal supply chain auditing, or launch directly onto the high throughput Public L1 for global loyalty points and consumer collectibles.",
      },
      {
        number: "02",
        category: "PRODUCT IDENTITY",
        title: "Digital Item Resolvers",
        description:
          "Connect physical goods to the network via NFC or RFID integration. Ensure every scanned item mathematically resolves to a verified manufacturing credential before reaching the consumer.",
      },
      {
        number: "03",
        category: "BRAND TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map loyalty rewards, product passports, and automated warranty payouts into deterministically secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "CONSORTIUM GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect massive IP portfolios. Enforce strict cryptographic signatures from manufacturers, managers, and legal teams before any major catalog transfer or master rights sale is permitted.",
      },
      {
        number: "05",
        category: "LEGACY SOFTWARE BRIDGE",
        title: "The ERP & POS API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints that natively integrate into existing Shopify, SAP, and retail point of sale systems.",
      },
    ],
    timeToValueDescription:
      "Building custom property blockchains from scratch requires specialized engineers and massive external audit budgets. Cerulea visualizes the process, cutting deployment times by 80%.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 18 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Brand Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring specialized Web3 developers to write custom state machines, loyalty distribution logic, and digital asset standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the reward code before handling live customer points.",
        },
        {
          title: "Phase 3: ERP Middleware",
          duration: "Months 8 to 15",
          description:
            "Developing fragile off-chain workers and indexers so the brand's legacy inventory and POS software can actually read the blockchain.",
        },
        {
          title: "Phase 4: Network Testing",
          duration: "Months 12 to 18",
          description:
            "Enduring a grueling rollout phase to ensure the custom middleware, the smart contracts, and the streaming platforms communicate without fatal errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Rights Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to map SLAs and roaming structures visually. The engine compiles the logic into mathematically deterministic binaries instantly.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Automate the deployment of the Sovereign Private Chain and institutional validator nodes directly from the control dashboard.",
        },
        {
          title: "Phase 3: API Gateway Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect internal POS software directly to auto-generated Cerulea REST endpoints. No custom middleware or subgraphs required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Instantly bridge the finalized logic to the live network with absolute confidence that the simulated testnet behavior will perfectly match production reality.",
        },
      ],
    },
  },

  //============================== sports-fan-engagement
  {
    slug: "sports-fan-engagement",
    eyebrow: "Sports & Fan Engagement",
    headline: ["Tokenize loyalty.", "Reclaim the secondary market."],
    description:
      "Cerulea provides the execution engine to enforce anti-scalping ticket rules, issue phygital merchandise, and launch high-engagement fan DAOs without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The Foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Programmable Royalties",
        description:
          "Franchises can hardcode royalty splits into digital tickets and assets. Every time a ticket is resold on an open marketplace, the original team receives an instant, automated revenue cut.",
      },
      {
        number: "02",
        title: "Fraud-Proof Trading",
        description:
          "Atomic swaps guarantee that asset transfers and payments happen simultaneously. This completely eliminates chargeback fraud and the risk of scamming in peer-to-peer fan markets.",
      },
      {
        number: "03",
        title: "True Digital Scarcity",
        description:
          "Digital fan collectibles and VIP passes can be mathematically capped. Once the maximum supply of an asset is reached, it is cryptographically impossible to duplicate or forge.",
      },
      {
        number: "04",
        title: "Gas-Abstracted Experiences",
        description:
          "High-throughput infrastructure allows teams to sponsor network fees for their users. Fans enjoy the security of Web3 assets while experiencing standard, frictionless Web2 responsiveness.",
      },
      {
        number: "05",
        title: "Global Accessibility",
        description:
          "Unlike legacy payment rails, public ledgers do not care about borders. An international fan can instantly purchase a team token or digital collectible without currency conversion delays.",
      },
      {
        number: "06",
        title: "Decentralized Identity",
        description:
          "Fans maintain a single cryptographic profile that tracks global stadium visits, merchandise purchases, and loyalty tiers without relying on fragmented, easily compromised databases.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting massive fan economies. Select a specific operational segment below.",
    useCases: [
      {
        icon: Ticket,
        label: "Anti-Scalping Ticketing",
        legacyBottleneck:
          "Live sporting events are plagued by bot networks that buy up inventory and resell it on unregulated secondary markets. Teams and venues capture zero revenue from these massive markups.",
        ceruleaExecution:
          "Issue event tickets as non-fungible digital assets. Franchises use Cerulea Studio to embed strict resale price ceilings and automated royalty kickbacks directly into the ticket code.",
        architecturalImpact:
          "Guarantee authentic tickets, block scalping bots, and automatically capture a share of every secondary market resale for the franchise.",
      },
      {
        icon: Boxes,
        label: "Phygital Merchandise",
        legacyBottleneck: "Counterfeit jerseys and sports memorabilia flood the global market, costing teams billions in lost revenue while diluting the exclusivity of authentic fan apparel.",
        ceruleaExecution: "Mint a cryptographic Digital Product Passport for physical merchandise. Fans scan an NFC chip embedded in a jersey to claim an authentic digital twin that grants them exclusive online perks.",
        architecturalImpact: "Eliminate counterfeit sports apparel and bridge physical retail purchases into recurring digital fan engagement.",
      },
      {
        icon: Users,
        label: "Fan DAOs & Governance",
        legacyBottleneck: "Global fanbases are highly passionate but possess zero actual influence over their favorite teams. Traditional fan clubs offer superficial engagement with no real ownership.",
        ceruleaExecution: "Launch Decentralized Autonomous Organizations (DAOs) for sports franchises. Token-holding fans can submit cryptographic votes on jersey designs, goal celebration songs, or charity initiatives.",
        architecturalImpact: "Transform passive viewers into highly monetized, hyper-engaged stakeholders driven by mathematically guaranteed community governance.",
      },
      {
        icon: Fingerprint,
        label: "Athlete IP & Royalties",
        legacyBottleneck: "Name, Image, and Likeness (NIL) rights are incredibly complex to track and monetize. Athletes struggle to receive fair compensation when their brand is used across fragmented digital media.",
        ceruleaExecution: "Tokenize athlete IP rights. As a player’s likeness is used in video games, streaming media, or digital collectibles, smart contracts automatically route micro-royalties directly to the athlete’s wallet.",
        architecturalImpact: "Provide athletes with absolute financial sovereignty and ensure immediate, transparent compensation for their personal brand.",
      },
      {
        icon: Layers,
        label: "Interoperable VIP Access",
        legacyBottleneck: "Stadium loyalty points and VIP access tiers are isolated to single venues or apps. Fans cannot leverage their loyalty status seamlessly across partner hotels, airlines, or sponsor ecosystems.",
        ceruleaExecution: "Issue loyalty points and VIP passes as interoperable digital assets. Fans holding specific tokens can seamlessly unlock VIP stadium gates, partner airline discounts, and exclusive merchandise drops.",
        architecturalImpact: "Turn fragmented stadium points into a highly liquid, universal digital economy that maximizes fan retention globally.",
      },
      {
        icon: Trophy,
        label: "Fantasy & Prediction Escrow",
        legacyBottleneck: "Fantasy sports and prediction markets rely on centralized custodians to hold prize pools. Payouts are frequently delayed, and players must blindly trust the platform operator with their capital.",
        ceruleaExecution: "Utilize programmable smart escrow. Fantasy league prize pools are locked cryptographically and automatically routed to the winning players the exact second final match statistics are verified by API oracles.",
        architecturalImpact: "Restore absolute trust in fantasy ecosystems and guarantee instant, dispute-free prize distribution to fans.",
      },
    ],
    simulatorTitle: "Ticketing Fraud & Royalty Simulator",
    simulatorDescription: "Counterfeit tickets, third-party platform fees, and lost secondary market value drain millions from sports franchises. Calculate your operational savings by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Processed Tickets & Assets",
      unit: "Tx",
      min: 10000,
      max: 2500000,
      defaultValue: 250000,
      legacyCostLabel: "Scalping Loss & Platform Fees",
      legacyCostValue: "$25,500,000",
      ceruleaCostLabel: "Smart Contract Settlement",
      ceruleaCostValue: "$300,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$25,200,000",
      methodology:
        "The legacy calculation utilizes sports and entertainment benchmarks estimating the average combined operational cost of massive third-party ticketing commissions, unresolved chargeback fraud, and uncaptured secondary market value drain at **$8.50 USD **per ticket event. Executing the exact same transfer and gate verification via Cerulea incurs an estimated network fee of **$0.10 USD**. This figure represents the computational gas cost required to automatically verify a fan's cryptographic signature, execute a dynamic price ceiling, and route secondary market royalties natively on a high-throughput consensus engine.",
    },
    architectureDescription:
      "Whether you are bridging legacy ticketing APIs or integrating directly into stadium turnstiles, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Ticketing Bridging",
        description:
          "For major sports franchises connecting existing inventory software. Legacy HTTP requests are translated into secure Web3 digital assets effortlessly.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Booking Core",
            sublabel: "Ticketmaster / SeatGeek API",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Private Chains",
            sublabel: "Sovereign Franchise State",
            accent: true
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"]
      },
      {
        title: "Track B: Native Fan DApp Execution",
        description:
          "For decentralized fan clubs and stadium access. Route mobile wallet interactions directly to autonomous public smart contracts.",
        nodes: [
          {
            icon: Ticket,
            label: "Fan Portal & Gates",
            sublabel: "React & NFC Turnstiles",
          },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Validation Nodes",
            accent: true
          },
          {
            icon: Zap,
            label: "Cerulea Public L1",
            sublabel: "Access & Loyalty Logic",
            accent: true
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"]
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global sports and entertainment sector.",
    spectrum: [
      {
        icon: Trophy,
        title: "Major Leagues & Franchises",
        description:
          "Enterprise sports teams utilize Cerulea to unify internal fan databases, automate massive royalty distributions on secondary ticket sales, and securely track authentic physical merchandise to eliminate counterfeits.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Anti-Scalping Ticketing",
          "Phygital Merchandise Tracking",
          "Sponsor Activation ROI",
        ],
      },
      {
        icon: Ticket,
        title: "Stadiums & Ticketing Platforms",
        description:
          "Venues and primary ticket issuers deploy Cerulea to establish a perfectly synchronized cryptographic ledger. This ensures real-time VIP access control and eliminates massive revenue leakage to unregulated scalping bot networks.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Decentralized Access Control",
          "VIP Loyalty Programs",
          "Concession Micro-Billing",
        ],
      },
      {
        icon: Code2,
        title: "Web3 Fan Engagement Developers",
        description:
          "Forward-thinking engineers build next generation Fan DAOs and decentralized fantasy sports protocols on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security for athlete IPs.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Fan Governance Tokens",
          "Fantasy Prize Escrow",
          "Athlete NIL Tracking",
        ],
      },
    ],
    stackTitle: "The Fan Engagement Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of massive sports franchises. It is architected to provide a highly secure pathway for migrating legacy ticket data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "FRANCHISE LEDGERS",
        title: "Hybrid Sports Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal B2B sponsor tracking, or launch directly onto the high-throughput Public L1 to facilitate global, open-market trading for fans.",
      },
      {
        number: "02",
        category: "FAN KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting buyer wallet is mathematically tied to a verified fan credential, instantly blocking sybil attacks and automated scalper bots.",
      },
      {
        number: "03",
        category: "ASSET TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map digital season tickets, phygital merch metadata, and automated secondary market royalties into deterministically secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "ECONOMY GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect the fan economy. Enforce strict cryptographic signatures from club executives or community DAOs before any massive inflationary asset drops or major ticketing rules are permitted to execute.",
      },
      {
        number: "05",
        category: "LEGACY SOFTWARE BRIDGE",
        title: "The CRM API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy Ticketmaster systems and internal Salesforce fan CRMs directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom heavy industry blockchains from scratch requires specialized engineers and massive hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 16 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Ticketing Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring expensive Web3 developers to write custom state machines, anti-scalping logic, and smart ticket standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal vulnerabilities in the royalty payout code before handling live gate revenue.",
        },
        {
          title: "Phase 3: Stadium Middleware",
          duration: "Months 8 to 15",
          description:
            "Building fragile custom middleware to successfully translate API calls from legacy scanners and turnstiles into blockchain compatible RPC payloads.",
        },
        {
          title: "Phase 4: Network Testing",
          duration: "Months 10 to 16",
          description:
            "Enduring a massive beta rollout phase to ensure the mobile fan app, the smart contracts, and the stadium access gates synchronize correctly without fatal delays.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Ticket Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to visually map asset supplies, required resale price ceilings, and automated royalty triggers without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Automate the deployment of the Sovereign Private Chain and issue standardized validator nodes directly for franchise databases from the control dashboard.",
        },
        {
          title: "Phase 3: Turnstile API Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect existing venue access control systems directly to auto-generated Cerulea APIs. No custom middleware or indexing is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Bridge the finalized logic to the live network and begin issuing cryptographically verified fan assets with complete architectural confidence.",
        },
      ],
    },
  },

  //=================================== travel-hospitality
  {
    slug: "travel-hospitality",
    eyebrow: "Travel & Hospitality",
    headline: ["Decentralize bookings.", "Automate alliances."],
    description:
      "Cerulea provides the execution engine to bypass OTA commissions, unify global loyalty programs, and deploy parametric travel insurance without writing complex smart contract code.",
    primaryCta: "Contact Us",
    primaryCtaLink: "/company/contact",
    foundationLabel: "The foundation",
    advantagesTitle: "The Strategic Advantages of Blockchain",
    advantages: [
      {
        number: "01",
        title: "Disintermediation",
        description:
          "Connect hotels and airlines directly with travelers. By removing centralized Global Distribution Systems (GDS) and massive OTAs, suppliers capture significantly higher margins.",
      },
      {
        number: "02",
        title: "Interoperable Ecosystems",
        description:
          "Break down brand silos. Travelers can earn points with an airline and spend them seamlessly at a partner resort chain, all managed automatically by a unified smart contract ledger.",
      },
      {
        number: "03",
        title: "Parametric Execution",
        description:
          "Smart contracts act autonomously. By monitoring live flight data orcsles, compensation for delays and lost luggage is routed instantly without requiring manual claim reviews.",
      },
      {
        number: "04",
        title: "Fraud-Proof Ratings",
        description:
          "Cryptographic signatures tie reviews directly to a confirmed payment and check-in event. This completely neutralizes review-bombing and restores integrity to property ratings.",
      },
      {
        number: "05",
        title: "Programmable Escrow",
        description:
          "Consumer capital is held securely in decentralized escrow and released exactly when booking thresholds are met, protecting both the traveler from scams and the host from chargebacks.",
      },
      {
        number: "06",
        title: "Unified Identity",
        description:
          "Travelers maintain a single secure cryptographic profile that instantly verifies their identity for flights, car rentals, and hotel check-ins, eliminating repetitive paperwork globally.",
      },
    ],
    useCasesDescription:
      "A single unified protocol capable of supporting global travel ecosystems. Select a specific operational segment below.",
    useCases: [
      {
        icon: Building2,
        label: "Direct B2C Bookings",
        legacyBottleneck:
          "Online Travel Agencies (OTAs) and Global Distribution Systems (GDS) monopolize inventory, extracting massive commission fees up to 25 percent from airlines and hoteliers.",
        ceruleaExecution:
          "Deploy peer-to-peer booking logic on the public ledger. Consumers interact directly with smart contracts to secure rooms and flights. Funds are held in escrow and routed directly to the property upon check-in.",
        architecturalImpact:
          "Completely disintermediate OTAs, returning massive profit margins directly to the travel service providers.",
      },
      {
        icon: Gift,
        label: "Universal Loyalty Alliances",
        legacyBottleneck: "Airline miles and hotel points are locked in highly fragmented databases. Travelers cannot easily combine, trade, or redeem rewards across different brands within a travel alliance.",
        ceruleaExecution: "Tokenize loyalty points as interoperable digital assets. Participating brands form a secure consortium network, allowing users to seamlessly trade or redeem points across the ecosystem without manual backend reconciliation.",
        architecturalImpact: "Turn static reward points into highly liquid, engaging digital economies that maximize traveler retention.",
      },
      {
        icon: Umbrella,
        label: "Parametric Travel Insurance",
        legacyBottleneck: "When flights are delayed or baggage is lost, travelers are forced to navigate grueling customer service phone lines and submit manual claims to fight for basic refunds.",
        ceruleaExecution: "Connect smart policies directly to trusted flight and weather Oracles. If a flight is canceled, the smart contract autonomously detects the API change and routes the compensation to the traveler instantly.",
        architecturalImpact: "Provide travelers with zero-friction, instantaneous payouts, drastically elevating customer satisfaction and brand trust.",
      },
      {
        icon: ShieldCheck,
        label: "Verified Proof-of-Stay",
        legacyBottleneck: "Travel review platforms are overrun by bot networks and paid fake reviews, actively destroying the reputations of legitimate hotels and restaurants.",
        ceruleaExecution: "Only a wallet containing a cryptographically signed 'Proof-of-Stay' token issued by the hotel can publish a review to the permanent ledger. The review is undeniably linked to a verified guest.",
        architecturalImpact: "Restore absolute consumer trust by guaranteeing that 100 percent of platform ratings come from actual paying customers.",
      },
      {
        icon: PieChart,
        label: "Fractional Resort Ownership",
        legacyBottleneck: "Traditional timeshares are notoriously predatory and illiquid. Owners struggle to sell their weeks or exchange properties due to complex legal frameworks and massive secondary market fees.",
        ceruleaExecution: "Tokenize resort inventory into fractional digital shares. Owners hold verifiable cryptographic deeds that can be instantly traded, sold, or rented on decentralized open marketplaces.",
        architecturalImpact: "Democratize vacation ownership and create a highly liquid, global secondary market for resort real estate.",
      },
      {
        icon: Fingerprint,
        label: "Frictionless Identity Passports",
        legacyBottleneck: "Travelers endure repeated physical passport checks, slow hotel front desks, and fragmented ticketing apps throughout a single international journey.",
        ceruleaExecution: "Implement Zero-Knowledge (ZK) identity proofs. A traveler verifies their passport once, allowing them to instantly unlock hotel room doors and bypass ticketing queues via a secure cryptographic handshake on their mobile device.",
        architecturalImpact: "Deliver a truly seamless, VIP travel experience from the airport terminal directly to the hotel room.",
      },
    ],
    simulatorTitle: "OTA & Loyalty Reconciliation Simulator",
    simulatorDescription: "Massive OTA commission cuts and manual B2B loyalty points reconciliation drain profitability from hotels and airlines. Calculate your exact capital savings by migrating to Cerulea execution.",
    simulator: {
      label: "Monthly Processed Bookings",
      unit: "Tx",
      min: 5000,
      max: 500000,
      defaultValue: 50000,
      legacyCostLabel: "OTA Commissions & B2B Fees",
      legacyCostValue: "$9,000,000",
      ceruleaCostLabel: "Smart Contract Execution",
      ceruleaCostValue: "$60,000",
      totalSavedLabel: "Total Overhead Saved Annually",
      totalSavedValue: "$8,940,000",
      methodology:
        "The legacy calculation utilizes hospitality industry benchmarks estimating the average combined operational cost of an OTA commission structure, credit card processing, and internal B2B loyalty reconciliation at** $15.00 USD per standard booking**. Executing the exact same direct booking logic via Cerulea incurs an estimated network fee of **$0.10 USD**. This figure represents the computational gas cost required to automatically execute peer-to-peer escrow transfers and deterministically update the loyalty ledger on a high throughput consensus engine, completely bypassing third party booking monopolies.",
    },
    architectureDescription:
      "Whether you are bridging legacy Property Management Systems (PMS) or routing native Web3 bookings, Cerulea provides the exact infrastructure flow required.",
    tracks: [
      {
        title: "Track A: Enterprise Booking Bridging",
        description:
          "For global hotel chains and airlines connecting existing reservations software. Legacy HTTP requests are translated into secure Web3 transactions seamlessly.",
        nodes: [
          {
            icon: Server,
            label: "Legacy Hospitality Core",
            sublabel: "Sabre / Opera PMS",
          },
          { icon: Plug2, label: "Cerulea API", sublabel: "Translation Gateway", accent: true },
          {
            icon: Shield,
            label: "Cerulea Consortium Chain",
            sublabel: "Loyalty Execution Ledger",
            accent: true
          },
        ],
        connectorLabels: ["HTTPS / REST", "WASM COMPILATION"]
      },
      {
        title: "Track B: Native Direct Booking",
        description:
          "For Web3 travel portals and D2C brands. Bypass legacy OTA middleware and route booking logic directly to the public execution layer.",
        nodes: [
          {
            icon: Code2,
            label: "Consumer Portal",
            sublabel: "React App & Mobile Wallets",
          },
          {
            icon: Globe,
            label: "Decentralized Oracles",
            sublabel: "Data Validation Nodes",
            accent: true
          },
          {
            icon: Zap,
            label: "Cerulea Public L1",
            sublabel: "Booking Escrow Logic",
            accent: true
          },
        ],
        connectorLabels: ["JSON-RPC", "STATE EXECUTION"]
      },
    ],
    spectrumDescription:
      "Cerulea provides dedicated infrastructure tailored for the distinct operational requirements of the global travel and hospitality sector.",
    spectrum: [
      {
        icon: Building2,
        title: "Global Hotel Chains & Airlines",
        description:
          "Enterprise hospitality brands utilize Cerulea to unify internal booking databases, automate interoperable loyalty reward partnerships, and securely execute multi-brand inventory sharing without relying on OTA monopolies.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Cross-Brand Loyalty",
          "OTA Bypass Bookings",
          "Verified Customer Reviews",
        ],
      },
      {
        icon: Landmark,
        title: "Tourism Boards & Consolidators",
        description:
          "Regional tourism boards and aggregators deploy Cerulea to establish a perfectly synchronized cryptographic ledger. This ensures local vendors, tours, and hotels can bundle services seamlessly with automated, instant revenue splits.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Vendor Revenue Splits",
          "Digital Tourism Visas",
          "Local Economy Stimulation",
        ],
      },
      {
        icon: Code2,
        title: "Web3 Travel Developers",
        description:
          "Forward-thinking engineers build next generation fractional timeshare protocols and decentralized hospitality marketplaces on the high throughput L1. They utilize Cerulea's visual Studio to guarantee absolute smart contract security.",
        assetTypesLabel: "Key Asset Types",
        assetTypes: [
          "Fractional Resort Real Estate",
          "P2P Property Rentals",
          "Parametric Flight Insurance",
        ],
      },
    ],
    stackTitle: "The Travel Technology Stack",
    stackDescription:
      "We do not sell isolated smart contracts. We provide a vertically integrated platform specifically mapped to the strict requirements of global hospitality. It is architected to provide a highly secure pathway for migrating legacy booking data into programmable execution environments.",
    stackLayers: [
      {
        number: "01",
        category: "HOSPITALITY LEDGERS",
        title: "Hybrid Travel Networks",
        description:
          "Deploy an isolated Private Subnet strictly for internal alliance clearing, or launch directly onto the high-throughput Public L1 to facilitate decentralized consumer booking portals.",
      },
      {
        number: "02",
        category: "TRAVELER KYC",
        title: "On-Chain Identity Resolver",
        description:
          "Deploy the Identity module to ensure every interacting customer wallet is mathematically tied to a verified passport credential before international bookings or check-ins are permitted.",
      },
      {
        number: "03",
        category: "INVENTORY TOKENIZATION",
        title: "Verifiable Data Models",
        description:
          "Use Cerulea Studio to visually map hotel room inventory, flight seats, and automated escrow triggers into deterministically secure smart contracts without writing low level code.",
      },
      {
        number: "04",
        category: "ALLIANCE GOVERNANCE",
        title: "Threshold Control Framework",
        description:
          "Protect massive alliance networks. Enforce strict cryptographic signatures from participating brands before any structural changes are permitted to the shared loyalty ecosystem.",
      },
      {
        number: "05",
        category: "LEGACY SOFTWARE BRIDGE",
        title: "The PMS API Gateway",
        description:
          "Interact with the entire blockchain ecosystem instantly via auto-generated REST endpoints, bridging legacy Sabre, Amadeus, and Opera PMS software directly into Web3.",
      },
    ],
    timeToValueDescription:
      "Building custom heavy industry blockchains from scratch requires specialized engineers and massive hardware integration delays. Cerulea visualizes the process, cutting deployment times significantly.",
    timeToValue: {
      legacyLabel: "Traditional Blockchain Development",
      legacyDuration: "12 to 16 Months",
      ceruleaLabel: "Cerulea Platform Deployment",
      ceruleaDuration: "8 to 10 Weeks",
      legacyPhases: [
        {
          title: "Phase 1: Booking Logic & Solidity",
          duration: "Months 1 to 6",
          description:
            "Hiring specialized Web3 developers to write custom state machines, loyalty distribution logic, and digital inventory standards entirely from scratch.",
        },
        {
          title: "Phase 2: Third-Party Audits",
          duration: "Months 5 to 7",
          description:
            "Paying external firms hundreds of thousands of dollars to find and patch fatal code vulnerabilities before managing live consumer escrow funds.",
        },
        {
          title: "Phase 3: GDS Middleware",
          duration: "Months 8 to 15",
          description:
            "Building fragile custom middleware to successfully translate booking APIs from legacy tools (like Sabre or Amadeus) into blockchain compatible payloads.",
        },
        {
          title: "Phase 4: Network Testing",
          duration: "Months 10 to 16",
          description:
            "Enduring a massive beta rollout phase to ensure the custom middleware, the smart contracts, and the global hotel databases synchronize correctly without fatal double-booking errors.",
        },
      ],
      ceruleaPhases: [
        {
          title: "Phase 1: Visual Grant Modeling",
          duration: "Weeks 1 to 2",
          description:
            "Use Cerulea Studio to map property inventory, loyalty structures, and automated escrow triggers visually without writing any code.",
        },
        {
          title: "Phase 2: Subnet Provisioning",
          duration: "Weeks 3 to 4",
          description:
            "Deploy a Sovereign Private Chain and issue standardized validator nodes directly to partner hotel brands from the control dashboard.",
        },
        {
          title: "Phase 3: PMS API Hookup",
          duration: "Weeks 5 to 7",
          description:
            "Connect internal property management software directly to auto-generated Cerulea REST endpoints. No custom middleware is required.",
        },
        {
          title: "Phase 4: Production Go-Live",
          duration: "Weeks 8 to 10",
          description:
            "Instantly bridge the finalized logic to the live network and begin processing cryptographically verified bookings with complete architectural confidence.",
        },
      ],
    },
  },

]

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug)
}
